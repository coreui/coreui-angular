import { ChipOptions } from '../chip/chip.types';

export type ChipSelectionMode = 'single' | 'multiple';

export type ChipItem = { value: string; label?: string } & Partial<ChipOptions>;
