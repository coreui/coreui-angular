import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'CoreUI 2 for Angular 18';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
