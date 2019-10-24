import { AppDashboard } from './app.po';

describe('CoreUI template', () => {
  let page: AppDashboard;
  const sleep = 300;

  page = new AppDashboard();
  const browser = page.getBrowser();
  browser.driver.manage().window().setSize(600, 800);
  browser.sleep(sleep);
  page.navigateTo();

  // beforeEach(() => {
  //   page = new AppDashboard();
  //   page.navigateTo();
  // });

  it('should display CoreUI Dashboard', () => {
    expect(page.getParagraphText()).toEqual('CoreUI Dashboard');
  });

  it('should toggle `sidebar-minimized` body.class on `sidebar-minimizer` click', () => {
    browser.manage().window().maximize();
    browser.sleep(1000);
    const body = page.getBody();
    expect(body.getAttribute('class')).not.toContain('sidebar-minimized');
    const button = page.getByCss('.sidebar-minimizer');
    button.click();
    browser.sleep(sleep);
    expect(body.getAttribute('class')).toContain('sidebar-minimized');
    browser.sleep(sleep);
    button.click();
    browser.sleep(sleep);
    expect(body.getAttribute('class')).not.toContain('sidebar-minimized');
    browser.driver.manage().window().setSize(600, 800);
    browser.sleep(1000);
  });

  it('should toggle `sidebar-show` body.class on `navbar-toggler` click', () => {
    browser.driver.manage().window().setSize(600, 800);
    browser.sleep(1000);
    const body = page.getBody();
    expect(body.getAttribute('class')).not.toContain('sidebar-show');
    const button1 = page.getByCss('.navbar-toggler.d-lg-none').first();
    browser.sleep(sleep);
    button1.click();
    browser.sleep(sleep);
    expect(body.getAttribute('class')).toContain('sidebar-show');
    const button2 = page.getByCss('.navbar-toggler').first();
    browser.sleep(sleep);
    button2.click();
    browser.sleep(sleep);
    expect(body.getAttribute('class')).not.toContain('sidebar-show');
  });
});
