import {
  Component,
  createComponent,
  ErrorHandler,
  inject,
  inputBinding,
  provideZonelessChangeDetection,
  Renderer2,
  RendererFactory2,
  RendererType2,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import { ComponentFixture, DirectiveFixture, TestBed } from '@angular/core/testing';
import { createApplication, ɵDomRendererFactory2 } from '@angular/platform-browser';
import { TableDirective } from './table.directive';

@Component({
  imports: [TableDirective],
  template: `<section>
    @if (show()) {
      <table cTable [responsive]="responsive()"></table>
    }
  </section>`
})
class ToggleTestComponent {
  readonly responsive = signal<boolean | 'md' | ''>(true);
  readonly show = signal(true);
}

@Component({
  imports: [TableDirective],
  template: `<section>
    @for (row of rows(); track row) {
      <table cTable responsive></table>
    }
  </section>`
})
class ForTestComponent {
  readonly rows = signal([1, 2]);
}

@Component({
  imports: [TableDirective],
  template: `<section>
    <ng-template #table><table cTable responsive="md"></table></ng-template>
    <ng-container #outlet />
  </section>`
})
class OutletTestComponent {
  readonly table = viewChild.required<TemplateRef<unknown>>('table');
  readonly outlet = viewChild.required('outlet', { read: ViewContainerRef });
}

@Component({
  imports: [TableDirective],
  template: `<section>
    @if (show()) {
      <div><table cTable [responsive]="true"></table></div>
    }
  </section>`
})
class AncestorTestComponent {
  readonly show = signal(true);
}

@Component({
  imports: [TableDirective],
  template: `<section>
    <table cTable responsive id="bare"></table>
    <table cTable responsive="true" id="true"></table>
    <table cTable responsive="false" id="false"></table>
  </section>`
})
class AttributeTestComponent {}

class DeferredRemovalRendererFactory implements RendererFactory2 {
  hold = false;
  readonly deferred: unknown[] = [];
  readonly synchronous: unknown[] = [];
  readonly #removals: (() => void)[] = [];

  constructor(private readonly delegate: RendererFactory2) {}

  createRenderer(element: unknown, type: RendererType2 | null): Renderer2 {
    const { deferred, synchronous: synchronousRemovals } = this;
    const removals = this.#removals;
    return new Proxy(this.delegate.createRenderer(element, type), {
      get(target, property) {
        if (property === 'removeChild') {
          return (parent: unknown, child: unknown, isHostElement?: boolean, synchronous?: boolean) => {
            if (synchronous) {
              synchronousRemovals.push(child);
              target.removeChild(parent, child, isHostElement, synchronous);
              return;
            }
            deferred.push(child);
            removals.push(() => target.removeChild(parent, child, isHostElement));
          };
        }
        const value = Reflect.get(target, property);
        return typeof value === 'function' ? value.bind(target) : value;
      }
    });
  }

  begin(): void {
    this.delegate.begin?.();
  }

  end(): void {
    this.delegate.end?.();
    if (!this.hold) {
      this.release();
    }
  }

  release(): void {
    this.#removals.splice(0).forEach((removal) => removal());
  }
}

describe('TableDirective', () => {
  let fixture: DirectiveFixture<TableDirective>;
  let directive: TableDirective;

  beforeEach(async () => {
    fixture = TestBed.createDirective(TableDirective, {
      bindings: [
        inputBinding('align', () => 'middle'),
        inputBinding('borderColor', () => 'primary'),
        inputBinding('bordered', () => true),
        inputBinding('borderless', () => false),
        inputBinding('caption', () => 'top'),
        inputBinding('color', () => 'secondary'),
        inputBinding('hover', () => true),
        inputBinding('small', () => true),
        inputBinding('striped', () => true),
        inputBinding('stripedColumns', () => true),
        inputBinding('responsive', () => true)
      ]
    });
    directive = fixture.directiveInstance;
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply align input', () => {
    expect(directive.align()).toBe('middle');
  });

  it('should apply borderColor input', () => {
    expect(directive.borderColor()).toBe('primary');
  });

  it('should apply bordered input', () => {
    expect(directive.bordered()).toBe(true);
  });

  it('should apply borderless input', () => {
    expect(directive.borderless()).toBe(false);
  });

  it('should apply caption input', () => {
    expect(directive.caption()).toBe('top');
  });

  it('should apply color input', () => {
    expect(directive.color()).toBe('secondary');
  });

  it('should have responsive wrapper', () => {
    expect(fixture.nativeElement.parentElement?.classList).toContain('table-responsive');
  });

  it('should apply correct host classes', () => {
    const classes = fixture.nativeElement.classList;

    expect(classes).toContain('table');
    expect(classes).toContain('align-middle');
    expect(classes).toContain('caption-top');
    expect(classes).toContain('border-primary');
    expect(classes).toContain('table-bordered');
    expect(classes).toContain('table-secondary');
    expect(classes).toContain('table-hover');
    expect(classes).toContain('table-sm');
    expect(classes).toContain('table-striped');
    expect(classes).toContain('table-striped-columns');
  });
});

describe('TableDirective responsive', () => {
  let fixture: ComponentFixture<ToggleTestComponent>;
  let section: HTMLElement;
  let table: HTMLTableElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ToggleTestComponent);
    await fixture.whenStable();
    section = fixture.nativeElement.querySelector('section');
    table = section.querySelector('table')!;
  });

  it('should keep a single wrapper when the breakpoint changes', async () => {
    const errorSpy = vi.spyOn(TestBed.inject(ErrorHandler), 'handleError').mockImplementation(() => undefined);
    fixture.componentInstance.responsive.set('md');
    await fixture.whenStable();
    expect(table.parentElement?.className).toBe('table-responsive-md');
    expect(table.parentElement?.parentElement).toBe(section);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('should unwrap the table when responsive is turned off', async () => {
    fixture.componentInstance.responsive.set(false);
    await fixture.whenStable();
    expect(table.parentElement).toBe(section);
    expect(section.children.length).toBe(1);
  });

  it('should wrap the table again when responsive is turned back on', async () => {
    fixture.componentInstance.responsive.set(false);
    await fixture.whenStable();
    fixture.componentInstance.responsive.set(true);
    await fixture.whenStable();
    expect(table.parentElement?.className).toBe('table-responsive');
    expect(table.parentElement?.parentElement).toBe(section);
  });

  it('should treat a bound empty string as true', async () => {
    fixture.componentInstance.responsive.set(false);
    await fixture.whenStable();
    fixture.componentInstance.responsive.set('');
    await fixture.whenStable();
    expect(table.parentElement?.className).toBe('table-responsive');
    expect(table.parentElement?.parentElement).toBe(section);
  });

  it('should read static responsive attributes as booleans', async () => {
    const attributeFixture = TestBed.createComponent(AttributeTestComponent);
    await attributeFixture.whenStable();
    const attributeSection: HTMLElement = attributeFixture.nativeElement.querySelector('section');
    expect(attributeSection.querySelector(':scope > .table-responsive > #bare')).toBeTruthy();
    expect(attributeSection.querySelector(':scope > .table-responsive > #true')).toBeTruthy();
    expect(attributeSection.querySelector(':scope > #false')).toBeTruthy();
    expect(attributeSection.children.length).toBe(3);
  });
});

describe('TableDirective destroyed', () => {
  it('should remove its responsive wrapper', async () => {
    const fixture = TestBed.createComponent(ToggleTestComponent);
    await fixture.whenStable();
    const section: HTMLElement = fixture.nativeElement.querySelector('section');
    expect(section.querySelector('.table-responsive > table')).toBeTruthy();

    fixture.componentInstance.show.set(false);
    await fixture.whenStable();
    expect(section.children.length).toBe(0);
  });

  it('should remove the responsive wrapper of a removed @for item', async () => {
    const fixture = TestBed.createComponent(ForTestComponent);
    await fixture.whenStable();
    const section: HTMLElement = fixture.nativeElement.querySelector('section');
    expect(section.querySelectorAll(':scope > .table-responsive > table').length).toBe(2);

    fixture.componentInstance.rows.set([1]);
    await fixture.whenStable();
    expect(section.querySelectorAll(':scope > .table-responsive > table').length).toBe(1);
    expect(section.children.length).toBe(1);
  });
});

describe('TableDirective with a renderer that defers removals to the end of change detection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RendererFactory2,
          useFactory: () => new DeferredRemovalRendererFactory(inject(ɵDomRendererFactory2))
        }
      ]
    });
  });

  const renderers = () => TestBed.inject(RendererFactory2) as DeferredRemovalRendererFactory;

  it('should unwrap the table when responsive is turned off', async () => {
    const fixture = TestBed.createComponent(ToggleTestComponent);
    await fixture.whenStable();
    const section: HTMLElement = fixture.nativeElement.querySelector('section');
    const wrapper = section.querySelector('.table-responsive');

    fixture.componentInstance.responsive.set(false);
    await fixture.whenStable();
    expect(renderers().synchronous).toContain(wrapper);
    expect(section.querySelector(':scope > table')).toBeTruthy();
    expect(section.children.length).toBe(1);
  });

  it('should remove its responsive wrapper when destroyed', async () => {
    const fixture = TestBed.createComponent(ToggleTestComponent);
    await fixture.whenStable();
    const section: HTMLElement = fixture.nativeElement.querySelector('section');
    const wrapper = section.querySelector('.table-responsive');
    const table = section.querySelector('.table-responsive > table');
    expect(table).toBeTruthy();

    fixture.componentInstance.show.set(false);
    await fixture.whenStable();
    expect(renderers().deferred).toContain(table);
    expect(renderers().synchronous).toContain(wrapper);
    expect(section.children.length).toBe(0);
  });

  it('should remove its responsive wrapper when destroyed outside change detection', async () => {
    const fixture = TestBed.createComponent(OutletTestComponent);
    await fixture.whenStable();
    const { table, outlet } = fixture.componentInstance;
    outlet().createEmbeddedView(table());
    await fixture.whenStable();
    const section: HTMLElement = fixture.nativeElement.querySelector('section');
    expect(section.querySelector('.table-responsive-md > table')).toBeTruthy();

    outlet().clear();
    expect(section.querySelector('.table-responsive-md > table')).toBeTruthy();
    await fixture.whenStable();
    expect(section.children.length).toBe(0);
  });

  it('should leave its responsive wrapper to an ancestor whose removal is still held', async () => {
    const fixture = TestBed.createComponent(AncestorTestComponent);
    await fixture.whenStable();
    const section: HTMLElement = fixture.nativeElement.querySelector('section');

    renderers().hold = true;
    fixture.componentInstance.show.set(false);
    await fixture.whenStable();
    expect(section.querySelector('div > .table-responsive > table')).toBeTruthy();

    renderers().release();
    expect(section.children.length).toBe(0);
  });
});

describe('TableDirective in an application being destroyed', () => {
  it('should not throw', async () => {
    const appRef = await createApplication({ providers: [provideZonelessChangeDetection()] });
    const hostElement = document.body.appendChild(document.createElement('div'));
    try {
      const componentRef = createComponent(ToggleTestComponent, { environmentInjector: appRef.injector, hostElement });
      appRef.attachView(componentRef.hostView);
      await appRef.whenStable();
      expect(hostElement.querySelector('.table-responsive > table')).toBeTruthy();

      expect(() => appRef.destroy()).not.toThrow();
    } finally {
      if (!appRef.injector.destroyed) {
        appRef.destroy();
      }
      hostElement.remove();
    }
  });
});
