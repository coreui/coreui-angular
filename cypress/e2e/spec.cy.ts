/// <reference types="cypress" />

describe('CoreUI v2 template', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display CoreUI Dashboard', () => {
    cy.viewport(600, 800);
    const paragraph = cy.get('ng-component');
    paragraph.should('contain.text', 'CoreUI Dashboard');
  });

  it('should toggle `sidebar-minimized` body.class on `sidebar-minimizer` click', () => {
    cy.viewport('macbook-16');
    cy.get('.app').invoke('attr', 'class').should('not.contain', 'sidebar-minimized');
    cy.get('.sidebar-minimizer').click();
    cy.get('.app').invoke('attr', 'class').should('contain', 'sidebar-minimized');
    cy.get('.sidebar-minimizer').click();
    cy.get('.app').invoke('attr', 'class').should('not.contain', 'sidebar-minimized');
  });

  it('should toggle `sidebar-show` body.class on `navbar-toggler` click', () => {
    cy.viewport(600, 800);
    cy.get('.app').invoke('attr', 'class').should('not.contain', 'sidebar-show');
    cy.get('.navbar-toggler.d-lg-none').first().click();
    cy.get('.app').invoke('attr', 'class').should('contain', 'sidebar-show');
    cy.get('.navbar-toggler').first().click();
    cy.get('.app').invoke('attr', 'class').should('not.contain', 'sidebar-show');
  });

  it('should toggle `aside-menu-lg-show` body.class on `navbar-toggler` click', () => {
    cy.viewport('macbook-16');
    cy.get('.app').invoke('attr', 'class').should('not.contain', 'aside-menu-lg-show');
    cy.get('.navbar-toggler.d-none.d-lg-block').last().click();
    cy.get('.app').invoke('attr', 'class').should('contain', 'aside-menu-lg-show');
    cy.get('.navbar-toggler.d-none.d-lg-block').last().click();
    cy.get('.app').invoke('attr', 'class').should('not.contain', 'aside-menu-lg-show');
  });
});
