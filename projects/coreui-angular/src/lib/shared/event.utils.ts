const REPLAY_EVENT_PHASE = 101;

/**
 * Whether Angular is replaying the event after hydration (`EventPhase.REPLAY`). `preventDefault()` and `composedPath()`
 * throw on such an event, so a template or host listener that calls them, or hands the event to a CDK key manager,
 * returns early.
 * @param event the event passed to the listener
 * @returns `true` for a replayed event
 */
export const isReplayedEvent = (event: Event): boolean => event.eventPhase === REPLAY_EVENT_PHASE;
