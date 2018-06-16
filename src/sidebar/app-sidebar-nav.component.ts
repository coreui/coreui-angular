import {
  Component, Directive, ElementRef, HostBinding, HostListener, Input,
  OnInit, Renderer2
} from '@angular/core';
import { Replace } from './../shared';

@Directive({
  selector: '[appNavDropdown]'
})
export class NavDropdownDirective {

  constructor(private el: ElementRef) { }

  toggle() {
    this.el.nativeElement.classList.toggle('open');
  }
}

/**
* Allows the dropdown to be toggled via click.
*/
@Directive({
  selector: '[appNavDropdownToggle]'
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}

@Component({
  selector: 'app-sidebar-nav',
  template: `
    <ul class="nav">
      <ng-template ngFor let-navitem [ngForOf]="navItems">
        <ng-template [ngIf]="isDivider(navitem)">
          <app-sidebar-nav-divider [divider]="navitem"></app-sidebar-nav-divider>
        </ng-template>
        <ng-template [ngIf]="isTitle(navitem)">
          <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>
        </ng-template>
        <ng-template [ngIf]="isNavItem(navitem)">
          <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>
        </ng-template>
      </ng-template>
    </ul>`
})
export class AppSidebarNavComponent {

  @Input() navItems: any;

  @HostBinding('class.sidebar-nav') true;
  @HostBinding('attr.role') role = 'nav';

  public isDivider(item) {
    return item.divider ? true : false;
  }

  public isTitle(item) {
    return item.title ? true : false;
  }

  public isNavItem(item) {
    return !this.isDivider(item) && !this.isTitle(item);
  }

  constructor() { }
}

@Component({
  selector: 'app-sidebar-nav-divider',
  template: `<li class="nav-divider"></li>`
})
export class AppSidebarNavDividerComponent {
  @Input() divider: any;

  constructor() { }
}

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav-item',
  template: `
    <li *ngIf="!isDropdown()" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
      <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>
    </li>
    <li *ngIf="isDropdown()" [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
        [class.open]="isActive()"
        routerLinkActive="open"
        appNavDropdown>
      <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>
    </li>
    `
})
export class AppSidebarNavItemComponent implements OnInit {
  @Input() item: any;

  public hasClass() {
    return this.item.class ? true : false;
  }

  public isDropdown() {
    return this.item.children ? true : false;
  }

  public thisUrl() {
    return this.item.url;
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false);
  }

  constructor(private router: Router, private el: ElementRef) { }

  ngOnInit() {
    // Replace(this.el);
  }

}

@Component({
  selector: 'app-sidebar-nav-link',
  template: `
    <a *ngIf="!isExternalLink(); else external"
      [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
      routerLinkActive="active"
      [routerLink]="[link.url]"
      (click)="hideMobile()">
      <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ng-template #external>
      <a [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{link.url}}">
        <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
    </ng-template>
  `
})
export class AppSidebarNavLinkComponent implements OnInit {
  @Input() link: any;

  public hasVariant() {
    return this.link.variant ? true : false;
  }

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  public hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }

  constructor(private el: ElementRef) { }

  ngOnInit() {
    // Replace(this.el);
  }
}

@Component({
  selector: 'app-sidebar-nav-dropdown',
  template: `
    <a class="nav-link nav-dropdown-toggle" appNavDropdownToggle>
      <i *ngIf="hasIcon()" class="nav-icon {{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="hasBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>
      </ng-template>
    </ul>
  `,
  styles: ['.nav-dropdown-toggle { cursor: pointer; }']
})
export class AppSidebarNavDropdownComponent implements OnInit {
  @Input() link: any;

  public hasBadge() {
    return this.link.badge ? true : false;
  }

  public hasIcon() {
    return this.link.icon ? true : false;
  }

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.el);
    Replace(this.el);
  }
}

@Component({
  selector: 'app-sidebar-nav-title',
  // template: '<li [ngClass]="hasClass() ? 'nav-title ' + title.class : 'nav-title'">{{title.name}}</li>'
  template: ''
})
export class AppSidebarNavTitleComponent implements OnInit {
  @Input() title: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  hasClass() {
    return this.title.class ? true : false;
  }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const li = this.renderer.createElement('li');
    const name = this.renderer.createText(this.title.name);

    this.renderer.addClass(li, 'nav-title');

    if (this.hasClass()) {
      const classes = this.title.class;
      this.renderer.addClass(li, classes);
    }

    if (this.title.wrapper) {
      const wrapper = this.renderer.createElement(this.title.wrapper.element);

      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(li, wrapper);
    } else {
      this.renderer.appendChild(li, name);
    }
    this.renderer.appendChild(nativeElement, li);
    // Replace(this.el);
  }
}
