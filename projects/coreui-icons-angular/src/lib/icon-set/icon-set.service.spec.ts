/// <reference types="vitest/globals" />
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { IconSetService } from './icon-set.service';

describe('IconService', () => {
  let service: IconSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconSetService);

    // Clear console.warn spy before each test
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('icons property', () => {
    it('should default to empty object', () => {
      expect(service.icons).toEqual({});
    });

    it('should set icons', () => {
      const iconSet = {
        'cil-home': ['512 512', '<path d="..."/>'],
        'cil-user': ['512 512', '<path d="..."/>']
      };

      service.icons = iconSet;

      expect(service.icons).toEqual(iconSet);
    });

    it('should populate iconNames when icons are set', () => {
      const iconSet = {
        'cil-home': ['512 512', '<path d="..."/>'],
        'cil-user': ['512 512', '<path d="..."/>'],
        'cil-settings': ['512 512', '<path d="..."/>']
      };

      service.icons = iconSet;

      expect(service.iconNames).toEqual({
        'cil-home': 'cil-home',
        'cil-user': 'cil-user',
        'cil-settings': 'cil-settings'
      });
    });

    it('should overwrite existing icons when set', () => {
      service.icons = {
        'cil-home': ['512 512', '<path d="old"/>']
      };

      service.icons = {
        'cil-home': ['512 512', '<path d="new"/>'],
        'cil-user': ['512 512', '<path d="..."/>']
      };

      expect(service.icons['cil-home']).toEqual(['512 512', '<path d="new"/>']);
      expect(service.icons['cil-user']).toEqual(['512 512', '<path d="..."/>']);
    });

    it('should handle empty icon set', () => {
      service.icons = {};
      expect(service.icons).toEqual({});
      expect(service.iconNames).toEqual({});
    });
  });

  describe('iconNames property', () => {
    it('should default to empty object', () => {
      expect(service.iconNames).toEqual({});
    });

    it('should return all registered icon names', () => {
      service.icons = {
        'cil-home': ['512 512', '<path d="..."/>'],
        'cil-user': ['512 512', '<path d="..."/>']
      };

      expect(Object.keys(service.iconNames)).toEqual(['cil-home', 'cil-user']);
    });

    it('should be read-only and return a reference', () => {
      service.icons = {
        'cil-home': ['512 512', '<path d="..."/>']
      };

      const names1 = service.iconNames;
      const names2 = service.iconNames;

      expect(names1).toBe(names2);
    });
  });

  describe('getIcon method', () => {
    beforeEach(() => {
      service.icons = {
        'cil-home': ['512 512', '<path d="home"/>'],
        'cil-user': ['512 512', '<path d="user"/>'],
        'cil-settings': ['512 512', '<path d="settings"/>']
      };
    });

    it('should return icon by name', () => {
      const icon = service.getIcon('cil-home');
      expect(icon).toEqual(['512 512', '<path d="home"/>']);
    });

    it('should return correct icon for each registered icon', () => {
      expect(service.getIcon('cil-home')).toEqual(['512 512', '<path d="home"/>']);
      expect(service.getIcon('cil-user')).toEqual(['512 512', '<path d="user"/>']);
      expect(service.getIcon('cil-settings')).toEqual(['512 512', '<path d="settings"/>']);
    });

    it('should return undefined for non-existent icon', () => {
      const icon = service.getIcon('non-existent');
      expect(icon).toBeUndefined();
    });

    it('should warn when icon is not registered', () => {
      const warnSpy = vi.spyOn(console, 'warn');

      service.getIcon('non-existent-icon');

      expect(warnSpy).toHaveBeenCalledWith('CoreUI WARN: Icon non-existent-icon is not registered in IconService');
    });

    it('should not warn when icon is registered', () => {
      const warnSpy = vi.spyOn(console, 'warn');

      service.getIcon('cil-home');

      expect(warnSpy).not.toHaveBeenCalled();
    });

    it('should handle icons with special characters in name', () => {
      service.icons = {
        'cil-star-fill': ['512 512', '<path d="..."/>'],
        'cil-arrow-left': ['512 512', '<path d="..."/>']
      };

      expect(service.getIcon('cil-star-fill')).toEqual(['512 512', '<path d="..."/>']);
      expect(service.getIcon('cil-arrow-left')).toEqual(['512 512', '<path d="..."/>']);
    });
  });

  describe('multiple icon sets', () => {
    it('should merge icon names when adding new icons', () => {
      service.icons = {
        'cil-home': ['512 512', '<path d="..."/>']
      };

      expect(service.iconNames).toEqual({
        'cil-home': 'cil-home'
      });

      service.icons = {
        'cil-user': ['512 512', '<path d="..."/>']
      };

      // iconNames accumulates all icon names ever registered
      expect(service.iconNames).toEqual({
        'cil-home': 'cil-home',
        'cil-user': 'cil-user'
      });
    });

    it('should replace icons but keep accumulated iconNames', () => {
      service.icons = {
        'cil-home': ['512 512', '<path d="old"/>']
      };

      service.icons = {
        'cil-home': ['512 512', '<path d="new"/>']
      };

      expect(service.getIcon('cil-home')).toEqual(['512 512', '<path d="new"/>']);
      expect(service.iconNames['cil-home']).toBe('cil-home');
    });
  });

  describe('edge cases', () => {
    it('should handle icon with empty array', () => {
      service.icons = {
        'cil-empty': []
      };

      expect(service.getIcon('cil-empty')).toEqual([]);
    });

    it('should handle icon with single element array', () => {
      service.icons = {
        'cil-single': ['512 512']
      };

      expect(service.getIcon('cil-single')).toEqual(['512 512']);
    });

    it('should handle icon with multiple elements', () => {
      service.icons = {
        'cil-multi': ['512 512', '<path d="1"/>', '<path d="2"/>', '<path d="3"/>']
      };

      expect(service.getIcon('cil-multi')).toEqual(['512 512', '<path d="1"/>', '<path d="2"/>', '<path d="3"/>']);
    });
  });
});
