// Mock ResizeObserver for Chart.js - must be on globalThis for jsdom
if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {
      // Mock implementation
    }
    unobserve() {
      // Mock implementation
    }
    disconnect() {
      // Mock implementation
    }
  } as any;
}

// Warm up node-canvas and its fonts outside the timed test hooks
document.createElement('canvas').getContext('2d')?.measureText('M');
