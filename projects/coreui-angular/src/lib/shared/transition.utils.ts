/**
 * Waits for the CSS transitions running on an element to finish.
 * Reads the running transitions at once, so call it right after the style change that starts them; when one of them is
 * cancelled (a later style change replaced it), reads again and waits for the transitions running then.
 * Ignores CSS animations, script animations and transitions of descendants.
 * @param element the element whose own transitions to wait for
 * @returns a promise that never rejects; it resolves in a microtask when nothing transitions or the platform has no `getAnimations` (jsdom, server)
 */
export const afterTransitions = async (element: Element): Promise<void> => {
  const running = () => element.getAnimations?.().filter((animation) => 'transitionProperty' in animation) ?? [];
  for (let transitions = running(); transitions.length; ) {
    const results = await Promise.allSettled(transitions.map((transition) => transition.finished));
    transitions = results.some(({ status }) => status === 'rejected') ? running() : [];
  }
};
