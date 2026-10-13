import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, inject, viewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { cilList } from '@coreui/icons';
import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import { IconSetService } from '../icon-set';
import { IconComponent } from './icon.component';

@Component({
  template: `<c-icon #icon name="cil-list" size="lg" class="test" />`,
  imports: [IconComponent]
})
class TestComponent {
  iconSet = inject(IconSetService);

  iconRef = viewChild.required(IconComponent);
}

describe('IconComponent', () => {
  let debugEl: DebugElement;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, IconComponent, HtmlAttributesDirective],
      providers: [IconSetService]
    }).compileComponents();

    TestBed.inject(IconSetService).icons = { cilList };

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugEl = fixture.debugElement.query(By.css('svg'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should exist', () => {
    expect(component.iconSet).toBeTruthy();
  });
  it('icon component should render', () => {
    expect(component.iconRef()).toBeTruthy();
    expect(component.iconRef()?.name()).toBe('cilList');
    expect(component.iconRef()?.svgElementRef).toBeTruthy();
  });
  it('icon classes should be applied', () => {
    expect(debugEl.nativeElement).toBeTruthy();
    expect(debugEl.nativeElement.classList.contains('icon')).toBe(true);
    expect(debugEl.nativeElement.classList.contains('icon-lg')).toBe(true);
    expect(debugEl.nativeElement.classList.contains('test')).toBe(true);
  });

  describe('size input', () => {
    it('should handle different size values', async () => {
      const sizes = ['sm', 'lg', 'xl', 'xxl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'];

      for (const size of sizes) {
        const testFixture = TestBed.createComponent(IconComponent);
        testFixture.componentRef.setInput('size', size);
        testFixture.componentRef.setInput('name', 'cilList');
        await testFixture.whenStable();

        const svg = testFixture.debugElement.query(By.css('svg'));
        expect(svg.nativeElement.classList.contains(`icon-${size}`)).toBe(true);
        testFixture.destroy();
      }
    });

    it('should handle custom size when width is provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('width', '32');
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.computedSize()).toBe('custom-size');
    });

    it('should handle custom size when height is provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('height', '32');
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.computedSize()).toBe('custom-size');
    });

    it('should use custom-size when size is explicitly set to custom', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('size', 'custom');
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.computedSize()).toBe('custom-size');
    });
  });

  describe('name input', () => {
    it('should transform name with toPascalCase', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cil-list');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.name()).toBe('cilList');
    });

    it('should handle already transformed names', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.name()).toBe('cilList');
    });
  });

  describe('content input', () => {
    it('should use content when provided as string', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('content', '<path d="M10 10"/>');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.code()).toBe('<path d="M10 10"/>');
    });

    it('should use content when provided as array', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('content', ['512 512', '<path d="M10 10"/>']);
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.code()).toEqual(['512 512', '<path d="M10 10"/>']);
    });

    it('should prefer content over name', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('content', '<path d="custom"/>');
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.code()).toBe('<path d="custom"/>');
    });
  });

  describe('title input', () => {
    it('should include title element when title is provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cilList');
      testFixture.componentRef.setInput('title', 'List Icon');
      await testFixture.whenStable();

      const svg = testFixture.debugElement.query(By.css('svg'));
      const title = svg.nativeElement.querySelector('title');
      expect(title).toBeTruthy();
      expect(title?.textContent).toBe('List Icon');
    });

    it('should not include title element when title is not provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const svg = testFixture.debugElement.query(By.css('svg'));
      const title = svg.nativeElement.querySelector('title');
      expect(title).toBeNull();
    });
  });

  describe('viewBox', () => {
    it('should use provided viewBox when set', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('viewBox', '0 0 100 100');
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.viewBox()).toBe('0 0 100 100');
    });

    it('should calculate viewBox from icon code when array with first element', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('content', ['512 512', '<path d="M10 10"/>']);
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.viewBox()).toBe('0 0 512 512');
    });

    it('should use default viewBox when icon code is not array', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('content', '<path d="M10 10"/>');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.viewBox()).toBe('0 0 64 64');
    });
  });

  describe('customClasses input', () => {
    it('should use customClasses when provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('customClasses', { 'my-custom-class': true, 'another-class': true });
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const svg = testFixture.debugElement.query(By.css('svg'));
      expect(svg.nativeElement.classList.contains('my-custom-class')).toBe(true);
      expect(svg.nativeElement.classList.contains('another-class')).toBe(true);
    });

    it('should use default classes when customClasses is not provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      const classes = iconComponent.computedClasses();
      expect((classes as any)['icon']).toBe(true);
    });
  });

  describe('attributes input', () => {
    it('should apply default role attribute', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const svg = testFixture.debugElement.query(By.css('svg'));
      expect(svg.nativeElement.getAttribute('role')).toBe('img');
    });

    it('should allow custom attributes', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('attributes', { 'aria-label': 'Custom Icon', 'data-test': 'icon' });
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const svg = testFixture.debugElement.query(By.css('svg'));
      expect(svg.nativeElement.getAttribute('aria-label')).toBe('Custom Icon');
      expect(svg.nativeElement.getAttribute('data-test')).toBe('icon');
    });
  });

  describe('width and height inputs', () => {
    it('should apply width attribute when provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('width', '48');
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const svg = testFixture.debugElement.query(By.css('svg'));
      expect(svg.nativeElement.getAttribute('width')).toBe('48');
    });

    it('should apply height attribute when provided', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('height', '48');
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const svg = testFixture.debugElement.query(By.css('svg'));
      expect(svg.nativeElement.getAttribute('height')).toBe('48');
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('content', '');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.code()).toBe('');
    });

    it('should handle array content with only viewBox', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('content', ['512 512']);
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.code()).toEqual(['512 512']);
    });

    it('should warn when icon name is not found in IconSet', async () => {
      const warnSpy = vi.spyOn(console, 'warn');

      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'nonExistentIcon');
      await testFixture.whenStable();

      expect(warnSpy).toHaveBeenCalledWith('CoreUI WARN: Icon nonExistentIcon is not registered in IconService');
    });

    it('should handle icon without size', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.size()).toBe('');
      expect(iconComponent.computedSize()).toBe('');
    });
  });

  describe('SVG element replacement', () => {
    it('should have svgElementRef after rendering', async () => {
      const testFixture = TestBed.createComponent(IconComponent);
      testFixture.componentRef.setInput('name', 'cilList');
      await testFixture.whenStable();

      await new Promise((resolve) => setTimeout(resolve, 10));

      const iconComponent = testFixture.componentInstance;
      expect(iconComponent.svgElementRef).toBeTruthy();
    });

    it('should render SVG with correct content', async () => {
      @Component({
        template: `<c-icon name="cil-list" class="host-class-1 host-class-2" />`,
        imports: [IconComponent]
      })
      class HostClassTestComponent {}

      const testFixture = TestBed.createComponent(HostClassTestComponent);
      await testFixture.whenStable();

      await new Promise((resolve) => setTimeout(resolve, 10));

      // SVG should be rendered with the icon content
      const svgs = testFixture.nativeElement.querySelectorAll('svg');
      expect(svgs.length).toBeGreaterThan(0);
    });
  });
});
