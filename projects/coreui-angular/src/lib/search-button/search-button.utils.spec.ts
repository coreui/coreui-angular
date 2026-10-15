import {
  formatShortcutTokens,
  getPreferredShortcut,
  getPressedKeys,
  isEditableTarget,
  isMacOS,
  matchesShortcut,
  parseShortcut,
  shouldIgnoreShortcut
} from './search-button.utils';

describe('search-button utils', () => {
  const originalPlatform = window.navigator.platform;

  const setPlatform = (platform: string) => {
    Object.defineProperty(window.navigator, 'platform', { configurable: true, value: platform });
  };

  afterEach(() => {
    setPlatform(originalPlatform);
    delete (window.navigator as any).userAgentData;
  });

  it('should parse shortcuts with key aliases and skip empty entries', () => {
    expect(parseShortcut('Cmd+K, , control+shift+/')).toEqual([
      { key: 'k', modifiers: { alt: false, ctrl: false, meta: true, shift: false }, shortcut: 'Cmd+K' },
      { key: '/', modifiers: { alt: false, ctrl: true, meta: false, shift: true }, shortcut: 'control+shift+/' }
    ]);
  });

  it('should format shortcut tokens as key labels', () => {
    expect(formatShortcutTokens('meta+shift+space')).toEqual(['⌘', 'Shift', 'Space']);
    expect(formatShortcutTokens('option+esc')).toEqual(['Alt', 'Escape']);
    expect(formatShortcutTokens('ctrl+k')).toEqual(['Ctrl', 'K']);
  });

  it('should list the pressed modifiers and the key on keydown only', () => {
    const init = { key: 'k', altKey: true, ctrlKey: true, metaKey: true, shiftKey: true };
    expect([...getPressedKeys(new KeyboardEvent('keydown', init))]).toEqual(['Alt', 'Ctrl', '⌘', 'Shift', 'K']);
    expect([...getPressedKeys(new KeyboardEvent('keyup', init))]).toEqual(['Alt', 'Ctrl', '⌘', 'Shift']);
    expect([...getPressedKeys(new KeyboardEvent('keydown', { key: 'Shift', shiftKey: true }))]).toEqual(['Shift']);
  });

  it('should prefer the meta shortcut on macOS and the ctrl shortcut elsewhere', () => {
    const shortcuts = parseShortcut('alt+k,meta+k,ctrl+k');

    setPlatform('MacIntel');
    expect(isMacOS()).toBe(true);
    expect(getPreferredShortcut(shortcuts)?.shortcut).toBe('meta+k');

    setPlatform('Win32');
    expect(isMacOS()).toBe(false);
    expect(getPreferredShortcut(shortcuts)?.shortcut).toBe('ctrl+k');

    expect(getPreferredShortcut(parseShortcut('alt+k'))?.shortcut).toBe('alt+k');
    expect(getPreferredShortcut([])).toBeNull();
  });

  it('should read the platform from user agent data first', () => {
    setPlatform('Win32');
    Object.defineProperty(window.navigator, 'userAgentData', { configurable: true, value: { platform: 'macOS' } });
    expect(isMacOS()).toBe(true);
  });

  it('should match a shortcut only with the exact modifiers', () => {
    const [shortcut] = parseShortcut('ctrl+k');
    expect(matchesShortcut(shortcut, new KeyboardEvent('keydown', { key: 'K', ctrlKey: true }))).toBe(true);
    expect(matchesShortcut(shortcut, new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, shiftKey: true }))).toBe(
      false
    );
    expect(matchesShortcut(shortcut, new KeyboardEvent('keydown', { key: 'j', ctrlKey: true }))).toBe(false);

    const [modifierOnly] = parseShortcut('ctrl');
    expect(matchesShortcut(modifierOnly, new KeyboardEvent('keydown', { key: 'Control', ctrlKey: true }))).toBe(false);
  });

  it('should treat fields and content editable elements as editable targets', () => {
    const editable = document.createElement('div');
    editable.setAttribute('contenteditable', 'true');
    const child = document.createElement('span');
    editable.append(child);

    expect(isEditableTarget(document.createElement('input'))).toBe(true);
    expect(isEditableTarget(child)).toBe(true);
    expect(isEditableTarget(document.createElement('button'))).toBe(false);
    expect(isEditableTarget(window)).toBe(false);
    expect(isEditableTarget(null)).toBe(false);
  });

  it('should ignore a shortcut typed in an editable target unless ctrl or meta is held', () => {
    const input = document.createElement('input');
    const keydown = (init: KeyboardEventInit) => {
      const event = new KeyboardEvent('keydown', { key: 'k', ...init });
      Object.defineProperty(event, 'target', { value: input });
      return event;
    };

    expect(shouldIgnoreShortcut(keydown({}))).toBe(true);
    expect(shouldIgnoreShortcut(keydown({ shiftKey: true }))).toBe(true);
    expect(shouldIgnoreShortcut(keydown({ ctrlKey: true }))).toBe(false);
    expect(shouldIgnoreShortcut(keydown({ metaKey: true }))).toBe(false);
  });
});
