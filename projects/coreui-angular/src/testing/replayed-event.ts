import { getDebugNode } from '@angular/core';
import { EventDispatcher, getActionCache } from '@angular/core/primitives/event-dispatch';

const listenersOf = (element: Element) => getDebugNode(element)?.listeners ?? [];

/**
 * Replays an event like Angular after hydration: only template and host listeners of the target and its ancestors run,
 * and `preventDefault()` and `composedPath()` throw.
 * @param target the element the event happened on
 * @param event the event to replay
 * @returns the replayed event
 */
export const replay = <T extends Event>(target: Element, event: T): T => {
  let heard = false;
  for (let element: Element | null = target; element; element = element.parentElement) {
    for (const { name } of listenersOf(element)) {
      getActionCache(element)[name] = '';
    }
  }
  new EventDispatcher((replayed) => {
    heard = true;
    listenersOf(replayed.currentTarget as Element)
      .filter(({ name }) => name === replayed.type)
      .forEach(({ callback }) => callback(replayed));
  }).dispatch({
    event,
    eventType: event.type,
    targetElement: target,
    eic: document.documentElement,
    timeStamp: 0,
    eirp: true
  });
  if (!heard) {
    throw new Error(`No template or host listener for ${event.type}`);
  }
  return event;
};
