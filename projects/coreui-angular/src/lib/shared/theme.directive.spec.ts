import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDirective } from './theme.directive';
import { By } from '@angular/platform-browser';

@Component({
  imports: [ThemeDirective],
  template: '<div cTheme [colorScheme]="theme"></div>'
})
export class TestComponent {
  theme!: 'dark' | 'light' | undefined;
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
    fixture.componentInstance.theme = 'dark';
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('data-coreui-theme')).toBe('dark');
    fixture.componentInstance.theme = 'light';
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('data-coreui-theme')).toBe('light');
    fixture.componentInstance.theme = undefined;
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('data-coreui-theme')).toBeNull();
  });
});
