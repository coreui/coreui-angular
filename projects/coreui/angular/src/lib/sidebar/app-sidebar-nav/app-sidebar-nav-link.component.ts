import {Component, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {SidebarNavHelper} from '../app-sidebar-nav.service';

@Component({
  selector: 'app-sidebar-nav-link',
  templateUrl: './app-sidebar-nav-link.component.html',
  providers: [ SidebarNavHelper ]
})
export class AppSidebarNavLinkComponent implements OnInit {
  @Input() item: any;
  public linkType: string;
  public href: string;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    public helper: SidebarNavHelper
  ) { }

  ngOnInit() {
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? '' : this.item.url;
  }

  public getLinkClass() {
    const disabled = this.isDisabled();
    const classes = {
      'nav-link': true,
      'disabled': disabled,
      'btn-link': disabled
    };
    if (this.hasVariant()) {
      const variant = `nav-link-${this.item.variant}`;
      classes[variant] = true;
    }
    return classes;
  }

  public getLinkType() {
    return this.isExternalLink() ? 'external' : 'link';
  }

  public hasVariant() {
    return !!this.item.variant;
  }

  public isDisabled() {
    return (this.item.attributes && this.item.attributes.disabled) ? true : null;
  }

  public isExternalLink() {
    return this.item.url.substring(0, 4) === 'http';
  }

  public hideMobile() {
    if (this.document.body.classList.contains('sidebar-show')) {
      this.renderer.removeClass(this.document.body, 'sidebar-show');
    }
  }
}
