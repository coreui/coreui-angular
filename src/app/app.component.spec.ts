import {TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterModule]
    }).compileComponents();
  });

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'CoreUI Angular Admin Template'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CoreUI 2 for Angular 18');
  });
});
