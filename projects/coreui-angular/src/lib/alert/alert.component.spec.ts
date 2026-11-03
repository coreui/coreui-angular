import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from 'vitest';

import { AlertComponent } from './alert.component';
import {
  AnimationCallbackEvent,
  ApplicationRef,
  Component,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  PLATFORM_ID,
  signal
} from '@angular/core';

const trackReflows = () => {
  const states: string[] = [];
  vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(function (this: HTMLElement) {
    if (this.tagName === 'C-ALERT') {
      states.push(`${this.hidden ? 'hidden' : 'displayed'}${this.classList.contains('show') ? ' show' : ''}`);
    }
    return 0;
  });
  return states;
};

const hostStyles = (host: HTMLElement) => {
  const attribute = host.getAttributeNames().find((name) => name.startsWith('_nghost-'));
  const styles = [...document.querySelectorAll('style')].map((style) => style.textContent ?? '');
  return { attribute, css: styles.find((css) => css.includes(`[${attribute}]`)) ?? '' };
};

const leave = (fixture: ComponentFixture<unknown>) => {
  const alert = fixture.debugElement.query(By.directive(AlertComponent));
  const animationComplete = vi.fn();
  alert.componentInstance['handleLeaving']({
    target: alert.nativeElement,
    animationComplete
  } as AnimationCallbackEvent);
  return animationComplete;
};

const flush = () => new Promise((resolve) => setTimeout(resolve));

const holdTransitions = (element: HTMLElement) => {
  const reads: string[] = [];
  const ends: (() => void)[] = [];
  element.getAnimations = () => {
    reads.push(element.classList.contains('show') ? 'show' : 'without show');
    const finished = new Promise<void>((resolve) => ends.push(resolve));
    return [{ transitionProperty: 'opacity', finished } as unknown as Animation];
  };
  return { reads, ends };
};

describe('AlertComponent', () => {
  let component: AlertComponent;
  let componentRef: ComponentRef<AlertComponent>;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    await fixture.whenStable();
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes and styles', async () => {
    expect(fixture.nativeElement.classList.contains('alert')).toBe(true);
    expect(fixture.nativeElement.classList.contains('alert-primary')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
    componentRef.setInput('visible', false);
    componentRef.setInput('color', 'danger');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('alert-danger')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
    componentRef.setInput('dismissible', true);
    componentRef.setInput('fade', true);
    componentRef.setInput('variant', 'solid');
    componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('alert-dismissible')).toBe(true);
    expect(fixture.nativeElement.classList.contains('fade')).toBe(true);
    expect(fixture.nativeElement.classList.contains('alert-danger')).toBe(false);
    expect(fixture.nativeElement.classList.contains('bg-danger')).toBe(true);
    expect(fixture.nativeElement.classList.contains('text-white')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);
  });

  it('should toggle inert with visibility', async () => {
    expect(fixture.nativeElement.inert).toBeFalsy();

    componentRef.setInput('visible', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBe(true);

    componentRef.setInput('visible', true);
    await fixture.whenStable();
    expect(fixture.nativeElement.inert).toBeFalsy();
  });

  it('should have attributes', async () => {
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });

  it('should not apply the fade class when transition is disabled', async () => {
    componentRef.setInput('fade', false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('fade')).toBe(false);
  });

  it('should declare a hidden host display none over display utilities', () => {
    const { attribute, css } = hostStyles(fixture.nativeElement);
    expect(css).toMatch(new RegExp(String.raw`\[hidden\]\[${attribute}\]\s*\{\s*display:\s*none !important;`));
  });
});

@Component({
  template: `<c-alert class="custom-class" color="success">Text</c-alert>`,
  imports: [AlertComponent]
})
class CustomClassAlertComponent {}

describe('AlertComponent with a custom class', () => {
  it('should apply a custom class name', async () => {
    const fixture = TestBed.createComponent(CustomClassAlertComponent);
    await fixture.whenStable();
    const alert: HTMLElement = fixture.nativeElement.querySelector('c-alert');
    expect(alert.classList.contains('custom-class')).toBe(true);
    expect(alert.classList.contains('alert')).toBe(true);
    expect(alert.classList.contains('alert-success')).toBe(true);
  });
});

@Component({
  template: `<c-alert [(visible)]="visible" dismissible fade>Text</c-alert>`,
  imports: [AlertComponent]
})
class FadeAlertComponent {
  readonly visible = signal(true);
}

describe('AlertComponent with fade', () => {
  let fixture: ComponentFixture<FadeAlertComponent>;
  let alert: HTMLElement;
  let transitions: ReturnType<typeof holdTransitions>;

  const endTransition = async (index = transitions.ends.length - 1) => {
    transitions.ends[index]();
    await flush();
    await fixture.whenStable();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(FadeAlertComponent);
    await fixture.whenStable();
    alert = fixture.nativeElement.querySelector('c-alert');
    transitions = holdTransitions(alert);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should close an alert', async () => {
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(alert.classList.contains('show')).toBe(false);
    expect(alert.hidden).toBe(false);

    await endTransition();
    expect(alert.hidden).toBe(true);
    expect(alert.inert).toBe(true);
    expect(alert.textContent?.trim()).toBe('');
  });

  it('should emit closed after the transition', async () => {
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);

    await endTransition();
    expect(fixture.componentInstance.visible()).toBe(false);
  });

  it('should show a hidden alert again', async () => {
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    await endTransition();
    expect(alert.hidden).toBe(true);

    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(alert.hidden).toBe(false);
    expect(alert.classList.contains('show')).toBe(true);
    expect(alert.textContent?.trim()).toBe('Text');
  });

  it('should fade in when mounted', async () => {
    const reflows = trackReflows();
    const mountedFixture = TestBed.createComponent(FadeAlertComponent);
    await mountedFixture.whenStable();
    const mountedAlert: HTMLElement = mountedFixture.nativeElement.querySelector('c-alert');
    expect(reflows).toEqual(['displayed']);
    expect(mountedAlert.classList.contains('show')).toBe(true);
  });

  it('should fade in when shown again', async () => {
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    await endTransition();

    const reflows = trackReflows();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(reflows).toEqual(['displayed']);
    expect(alert.classList.contains('show')).toBe(true);
  });

  it('should fade in when shown after starting hidden', async () => {
    const hiddenFixture = TestBed.createComponent(FadeAlertComponent);
    hiddenFixture.componentInstance.visible.set(false);
    await hiddenFixture.whenStable();
    const hiddenAlert: HTMLElement = hiddenFixture.nativeElement.querySelector('c-alert');

    const reflows = trackReflows();
    hiddenFixture.componentInstance.visible.set(true);
    await hiddenFixture.whenStable();
    expect(reflows).toEqual(['displayed']);
    expect(hiddenAlert.classList.contains('show')).toBe(true);
  });

  it('should not fade in when shown again before the close finishes', async () => {
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();

    const reflows = trackReflows();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(reflows).toEqual([]);
    expect(alert.classList.contains('show')).toBe(true);
  });

  for (const [title, rendered, expected] of [
    ['should not fade in a host rendered with the show class', true, []],
    ['should fade in a host rendered without the show class', false, ['displayed']]
  ] as const) {
    it(title, async () => {
      const reflows = trackReflows();
      const host = document.createElement('c-alert');
      host.classList.toggle('show', rendered);
      document.body.append(host);
      const appRef = TestBed.inject(ApplicationRef);
      const ref = createComponent(AlertComponent, {
        environmentInjector: TestBed.inject(EnvironmentInjector),
        hostElement: host
      });
      try {
        ref.setInput('fade', true);
        appRef.attachView(ref.hostView);
        await appRef.whenStable();
        expect(reflows).toEqual(expected);
        expect(host.classList.contains('show')).toBe(true);
      } finally {
        ref.destroy();
        host.remove();
      }
    });
  }

  it('should start hidden without waiting for the transition', async () => {
    const hiddenFixture = TestBed.createComponent(FadeAlertComponent);
    hiddenFixture.componentInstance.visible.set(false);
    await hiddenFixture.whenStable();
    const hiddenAlert: HTMLElement = hiddenFixture.nativeElement.querySelector('c-alert');
    expect(hiddenAlert.hidden).toBe(true);
    expect(hiddenAlert.inert).toBe(true);
    expect(hiddenFixture.componentInstance.visible()).toBe(false);
  });

  it('should read the transition once the show class is gone', async () => {
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(transitions.reads).toEqual(['without show']);
    expect(alert.hidden).toBe(false);
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should stay open when shown again before the close finishes', async () => {
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();

    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    await endTransition();
    expect(alert.hidden).toBe(false);
    expect(alert.classList.contains('show')).toBe(true);
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should not finish a later close with the transition of an earlier one', async () => {
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    expect(transitions.ends.length).toBe(2);

    await endTransition(0);
    expect(alert.hidden).toBe(false);

    await endTransition(1);
    expect(alert.hidden).toBe(true);
  });

  it('should complete the leave once the transition started by removing show finishes', async () => {
    const animationComplete = leave(fixture);
    await flush();
    expect(transitions.reads).toEqual(['without show']);
    expect(animationComplete).not.toHaveBeenCalled();

    transitions.ends[0]();
    await flush();
    expect(animationComplete).toHaveBeenCalledTimes(1);
  });
});

@Component({
  template: `<c-alert [(visible)]="visible" [fade]="fade()" dismissible>Text</c-alert>`,
  imports: [AlertComponent]
})
class DismissibleAlertComponent {
  readonly fade = signal(false);
  readonly visible = signal(true);
}

describe('AlertComponent without a transition', () => {
  let fixture: ComponentFixture<DismissibleAlertComponent>;
  let alert: HTMLElement;

  const render = async () => {
    await fixture.whenStable();
    alert = fixture.nativeElement.querySelector('c-alert');
  };

  const expectHidden = () => {
    expect(alert.hidden).toBe(true);
    expect(alert.inert).toBe(true);
    expect(alert.textContent?.trim()).toBe('');
    expect(fixture.componentInstance.visible()).toBe(false);
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissibleAlertComponent);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should hide and emit on close', async () => {
    await render();
    holdTransitions(alert);
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    fixture.changeDetectorRef.detectChanges();
    expectHidden();
  });

  it('should hide a fade alert on close when no transition runs', async () => {
    fixture.componentInstance.fade.set(true);
    await render();
    expect(alert.classList.contains('fade')).toBe(true);
    alert.getAnimations = () => [];

    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expectHidden();
  });

  it('should hide and show with the visible input', async () => {
    await render();
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    expectHidden();

    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(alert.hidden).toBe(false);
    expect(alert.inert).toBe(false);
    expect(alert.textContent?.trim()).toBe('Text');
  });

  it('should start hidden', async () => {
    fixture.componentInstance.visible.set(false);
    await render();
    expectHidden();
    expect(alert.classList.contains('show')).toBe(false);
  });

  it('should hide at once when fade is switched off during the close', async () => {
    fixture.componentInstance.fade.set(true);
    await render();
    holdTransitions(alert);
    alert.querySelector<HTMLButtonElement>('button[cButtonClose]')?.click();
    await fixture.whenStable();
    expect(alert.hidden).toBe(false);

    fixture.componentInstance.fade.set(false);
    await fixture.whenStable();
    expectHidden();
  });

  it('should complete the leave at once when no transition runs', async () => {
    await render();
    alert.getAnimations = () => [];
    const animationComplete = leave(fixture);
    expect(alert.classList.contains('show')).toBe(false);
    await flush();
    expect(animationComplete).toHaveBeenCalledTimes(1);
  });

  it('should not wait to show the alert', async () => {
    const reflows = trackReflows();
    await render();
    expect(reflows).toEqual([]);
    expect(alert.classList.contains('show')).toBe(true);
  });
});

@Component({
  template: `<c-alert [visible]="visible()" (visibleChange)="changes.push($event)" [fade]="fade()" dismissible
    >Text</c-alert
  >`,
  imports: [AlertComponent]
})
class VisibleChangeAlertComponent {
  readonly fade = signal(false);
  readonly visible = signal(true);
  readonly changes: boolean[] = [];
}

describe('AlertComponent visibleChange', () => {
  let fixture: ComponentFixture<VisibleChangeAlertComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleChangeAlertComponent);
  });

  for (const visible of [true, false]) {
    it(`should not emit on the first render when visible is ${visible}`, async () => {
      fixture.componentInstance.visible.set(visible);
      await fixture.whenStable();
      expect(fixture.componentInstance.changes).toEqual([]);
    });
  }

  it('should emit once per change when closed and shown', async () => {
    await fixture.whenStable();
    fixture.nativeElement.querySelector('button[cButtonClose]').click();
    await fixture.whenStable();
    expect(fixture.componentInstance.changes).toEqual([false]);

    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(fixture.componentInstance.changes).toEqual([false, true]);
  });

  it('should emit once per change when shown and closed', async () => {
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(fixture.componentInstance.changes).toEqual([true]);

    fixture.nativeElement.querySelector('button[cButtonClose]').click();
    await fixture.whenStable();
    expect(fixture.componentInstance.changes).toEqual([true, false]);
  });

  it('should not emit when a close is undone before the next render', async () => {
    fixture.componentInstance.fade.set(true);
    await fixture.whenStable();
    const transitions = holdTransitions(fixture.nativeElement.querySelector('c-alert'));
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    await flush();

    transitions.ends[0]();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(fixture.componentInstance.changes).toEqual([]);
  });
});

describe('AlertComponent on the server', () => {
  const scope = globalThis as { ngServerMode?: boolean };

  beforeEach(() => {
    scope.ngServerMode = true;
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
  });

  afterEach(() => {
    delete scope.ngServerMode;
  });

  it('should show a fade alert at once', async () => {
    const fixture = TestBed.createComponent(DismissibleAlertComponent);
    fixture.componentInstance.fade.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('c-alert').classList.contains('show')).toBe(true);
  });

  it('should hide a fade alert closed during the render', async () => {
    const fixture = TestBed.createComponent(DismissibleAlertComponent);
    fixture.componentInstance.fade.set(true);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    const alert: HTMLElement = fixture.nativeElement.querySelector('c-alert');
    expect(alert.hidden).toBe(true);
    expect(alert.textContent?.trim()).toBe('');
  });
});
