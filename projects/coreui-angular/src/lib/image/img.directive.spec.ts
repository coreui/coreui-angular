import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { ImgDirective } from './img.directive';

describe('ImgDirective', () => {
  let align: WritableSignal<'' | 'start' | 'end' | 'center'>;
  let fluid: WritableSignal<boolean>;
  let rounded: WritableSignal<boolean>;
  let thumbnail: WritableSignal<boolean>;
  let placeholderColor: WritableSignal<string>;
  let fixture: DirectiveFixture<ImgDirective>;

  beforeEach(async () => {
    align = signal<'' | 'start' | 'end' | 'center'>('');
    fluid = signal(false);
    rounded = signal(false);
    thumbnail = signal(false);
    placeholderColor = signal('transparent');
    fixture = TestBed.createDirective(ImgDirective, {
      tagName: 'img',
      bindings: [
        inputBinding('align', align),
        inputBinding('fluid', fluid),
        inputBinding('rounded', rounded),
        inputBinding('thumbnail', thumbnail),
        inputBinding('placeholderColor', placeholderColor)
      ]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    expect(fixture.nativeElement.classList.length).toBe(0);
    align.set('start');
    fluid.set(true);
    rounded.set(true);
    thumbnail.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('float-start')).toBe(true);
    expect(fixture.nativeElement.classList.contains('img-fluid')).toBe(true);
    expect(fixture.nativeElement.classList.contains('rounded')).toBe(true);
    expect(fixture.nativeElement.classList.contains('img-thumbnail')).toBe(true);
    align.set('center');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('float-start')).toBe(false);
    expect(fixture.nativeElement.classList.contains('d-block')).toBe(true);
    expect(fixture.nativeElement.classList.contains('mx-auto')).toBe(true);
  });

  it('should have placeholder background color', async () => {
    const element = fixture.nativeElement as HTMLImageElement;
    expect(element.style.backgroundColor).toBe('transparent');
    placeholderColor.set('red');
    await fixture.whenStable();
    expect(element.style.backgroundColor).toBe('red');
  });
});
