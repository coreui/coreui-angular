import { EventPhase } from '@angular/core/primitives/event-dispatch';
import { isReplayedEvent } from './event.utils';

const eventIn = (eventPhase: number): Event =>
  Object.defineProperty(new Event('click'), 'eventPhase', { value: eventPhase });

describe('event.utils', () => {
  it('isReplayedEvent should recognise the replay phase of Angular', () => {
    expect(isReplayedEvent(eventIn(EventPhase.REPLAY))).toBe(true);
  });

  it('isReplayedEvent should not match the phases of a live event', () => {
    const phases = [Event.NONE, Event.CAPTURING_PHASE, Event.AT_TARGET, Event.BUBBLING_PHASE];
    expect(phases.map((phase) => isReplayedEvent(eventIn(phase)))).toEqual([false, false, false, false]);
  });
});
