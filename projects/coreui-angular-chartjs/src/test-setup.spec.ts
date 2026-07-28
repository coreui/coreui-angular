// import 'zone.js';
// import 'zone.js/testing';

// Mock ResizeObserver for Chart.js - must be on globalThis for jsdom
if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
}
