import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavTitleComponent } from './sidebar-nav-title.component';
import { INavData } from './sidebar-nav';

describe('SidebarNavTitleComponent', () => {
  let component: SidebarNavTitleComponent;
  let fixture: ComponentFixture<SidebarNavTitleComponent>;
  let item: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavTitleComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;

    item = {
      title: true,
      name: 'Theme'
    };
    fixture.componentRef.setInput('item', item);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SidebarNavTitleComponent content', () => {
  const render = async (item: INavData) => {
    const fixture = TestBed.createComponent(SidebarNavTitleComponent);
    fixture.componentRef.setInput('item', item);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  };

  it('should render the name with the class of the item', async () => {
    const title = await render({ title: true, name: 'Theme', class: 'text-primary' });
    expect(title.textContent).toBe('Theme');
    expect(title.classList.contains('text-primary')).toBe(true);
  });

  it('should render the name in a wrapper with its attributes, classes and style', async () => {
    const title = await render({
      title: true,
      name: 'Theme',
      wrapper: { element: 'span', attributes: { class: 'fw-bold  small', style: { color: 'red' }, 'data-test': 'x' } }
    });
    const wrapper = title.querySelector('span') as HTMLElement;
    expect(wrapper.textContent).toBe('Theme');
    expect([...wrapper.classList]).toEqual(['fw-bold', 'small']);
    expect(wrapper.style.color).toBe('red');
    expect(wrapper.getAttribute('data-test')).toBe('x');
  });

  it('should render the name with several classes of the item', async () => {
    const title = await render({ title: true, name: 'Theme', class: 'first  second' });
    expect(title.textContent).toBe('Theme');
    expect([...title.classList].sort()).toEqual(['first', 'nav-title', 'second']);
  });

  it('should render nothing without a name', async () => {
    const title = await render({ title: true });
    expect(title.childNodes.length).toBe(0);
    expect([...title.classList]).toEqual(['nav-title']);
  });

  it('should replace the name and the class when the item changes', async () => {
    const fixture = TestBed.createComponent(SidebarNavTitleComponent);
    fixture.componentRef.setInput('item', { title: true, name: 'One', class: 'first' });
    await fixture.whenStable();
    fixture.componentRef.setInput('item', { title: true, name: 'Two', class: 'second' });
    await fixture.whenStable();
    const title = fixture.nativeElement as HTMLElement;
    expect(title.textContent).toBe('Two');
    expect([...title.classList].sort()).toEqual(['nav-title', 'second']);
  });

  it('should clear the name when the item loses it', async () => {
    const fixture = TestBed.createComponent(SidebarNavTitleComponent);
    fixture.componentRef.setInput('item', { title: true, name: 'One', wrapper: { element: 'span' } });
    await fixture.whenStable();
    fixture.componentRef.setInput('item', { title: true });
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).childNodes.length).toBe(0);
  });
});
