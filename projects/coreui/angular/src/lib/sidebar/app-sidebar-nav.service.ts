export class SidebarNavHelper {

  itemType(item) {
    if (item.divider) {
      return 'divider';
    } else if (item.title) {
      return 'title';
    } else if (item.children) {
      return 'dropdown';
    } else if (item.label) {
      return 'label';
    } else if (!Object.keys(item).length) {
      return 'empty';
    } else {
      return 'link';
    }
  }

  getClass(item) {
    const itemType = this.itemType(item);
    let itemClass;
    if (['divider', 'title'].includes(itemType)) {
      itemClass = `nav-${itemType}`;
    } else if (itemType === 'dropdown') {
      itemClass = 'nav-item nav-dropdown' ;
    } else {
      itemClass = 'nav-item';
    }
    return item.class ? `${itemClass} ${item.class}` : itemClass;
  }

  public isActive(router, item) {
    return router.isActive(item.url, false);
  }

  public hasBadge = (item) => Boolean(item.badge);
  public hasIcon = (item) => Boolean(item.icon);

  public getIconClass(item) {
    const classes = {
      'nav-icon': true
    };
    const icon = item.icon;
    classes[icon] = !!item.icon;
    return classes;
  }

  public getBadgeClass(item) {
    const classes = {
      'badge': true
    };
    const variant = `badge-${item.badge.variant}`;
    classes[variant] = !!item.badge.variant;
    return classes;
  }
}
