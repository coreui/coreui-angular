import { Component } from '@angular/core';
import { ComponentFixture, DeferBlockBehavior, DeferBlockState, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('avatar')).toBe(true);
  });
});

@Component({
  template: `
    <c-avatar
      alt="User"
      color="primary"
      shape="rounded-circle"
      size="lg"
      src="avatar.jpg"
      status="success"
      textColor="white"
    />
    <c-avatar src="avatar.jpg">CUI</c-avatar>
  `,
  imports: [AvatarComponent]
})
class AvatarHostComponent {}

describe('AvatarComponent content', () => {
  it('should render the image, status and classes', async () => {
    const fixture = TestBed.createComponent(AvatarHostComponent);
    await fixture.whenStable();
    await fixture.whenStable();
    const avatar: HTMLElement = fixture.nativeElement.querySelector('c-avatar');

    const img: HTMLImageElement = avatar.querySelector('img.avatar-img') as HTMLImageElement;
    expect(img.getAttribute('src')).toBe('avatar.jpg');
    expect(img.alt).toBe('User');
    expect(avatar.querySelector('svg')).toBeNull();
    expect(avatar.querySelector('.avatar-status')?.classList.contains('bg-success')).toBe(true);
    expect([...avatar.classList].sort()).toEqual(['avatar', 'avatar-lg', 'bg-primary', 'rounded-circle', 'text-white']);
  });

  it('should render projected content instead of the image', async () => {
    const fixture = TestBed.createComponent(AvatarHostComponent);
    await fixture.whenStable();
    const avatar: HTMLElement = fixture.nativeElement.querySelectorAll('c-avatar')[1];

    expect(avatar.textContent?.trim()).toBe('CUI');
    expect(avatar.querySelector('img')).toBeNull();
    expect(avatar.querySelector('.avatar-status')).toBeNull();
  });

  it('should show a placeholder until the image renders', async () => {
    TestBed.configureTestingModule({ deferBlockBehavior: DeferBlockBehavior.Manual });
    const fixture = TestBed.createComponent(AvatarHostComponent);
    await fixture.whenStable();
    const avatar: HTMLElement = fixture.nativeElement.querySelector('c-avatar');

    expect(avatar.querySelector('svg[aria-label="Avatar placeholder"]')).not.toBeNull();
    expect(avatar.querySelector('img')).toBeNull();

    const [deferBlock] = await fixture.getDeferBlocks();
    await deferBlock.render(DeferBlockState.Complete);
    expect(avatar.querySelector('img.avatar-img')).not.toBeNull();
    expect(avatar.querySelector('svg')).toBeNull();
  });
});
