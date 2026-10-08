import { Component, DebugElement, ElementRef, input, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDirective } from './theme.directive';
import { By } from '@angular/platform-browser';

@Component({
  imports: [ThemeDirective],
  template: '<div cTheme [colorScheme]="theme()"></div>'
})
export class TestComponent {
  readonly theme = input<'dark' | 'light' | undefined>();
}

@Component({
  imports: [ThemeDirective],
  template: '<div cTheme colorScheme="light" [dark]="dark()"></div>'
})
export class TestLightComponent {
  readonly dark = input(false);
}

@Component({
  imports: [ThemeDirective],
  template: '<div cTheme [colorScheme]="theme()" [dark]="dark()"></div>'
})
export class TestDarkComponent {
  readonly dark = input(false);
  readonly theme = input<'dark' | 'light' | undefined>();
}

class MockElementRef extends ElementRef {}

describe('ThemeDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ThemeDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should set data-coreui-theme attribute', () => {
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('data-coreui-theme')).toBeNull();
    fixture.componentRef.setInput('theme', 'dark');
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('data-coreui-theme')).toBe('dark');
    fixture.componentRef.setInput('theme', 'light');
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('data-coreui-theme')).toBe('light');
    fixture.componentRef.setInput('theme', undefined);
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('data-coreui-theme')).toBeNull();
  });

  it('should keep a static light colorScheme on the first render', () => {
    const lightFixture = TestBed.createComponent(TestLightComponent);
    const element = lightFixture.debugElement.query(By.css('div')).nativeElement;
    lightFixture.detectChanges();
    expect(element.getAttribute('data-coreui-theme')).toBe('light');
  });

  it('should apply dark over colorScheme and restore colorScheme when dark is unset', () => {
    const lightFixture = TestBed.createComponent(TestLightComponent);
    const element = lightFixture.debugElement.query(By.css('div')).nativeElement;
    lightFixture.componentRef.setInput('dark', true);
    lightFixture.detectChanges();
    expect(element.getAttribute('data-coreui-theme')).toBe('dark');
    lightFixture.componentRef.setInput('dark', false);
    lightFixture.detectChanges();
    expect(element.getAttribute('data-coreui-theme')).toBe('light');
  });

  it('should keep dark when colorScheme changes or is unset', () => {
    const darkFixture = TestBed.createComponent(TestDarkComponent);
    const element = darkFixture.debugElement.query(By.css('div')).nativeElement;
    darkFixture.componentRef.setInput('dark', true);
    darkFixture.componentRef.setInput('theme', 'dark');
    darkFixture.detectChanges();
    darkFixture.componentRef.setInput('theme', 'light');
    darkFixture.detectChanges();
    expect(element.getAttribute('data-coreui-theme')).toBe('dark');
    darkFixture.componentRef.setInput('theme', undefined);
    darkFixture.detectChanges();
    expect(element.getAttribute('data-coreui-theme')).toBe('dark');
  });
});
