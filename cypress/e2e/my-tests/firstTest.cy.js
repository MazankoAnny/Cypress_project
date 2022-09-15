/// <reference types="Cypress"/>

/* it('By ID', () => {
    cy.visit("https://facebook.com")
    cy.get('#email')
});

it('By Class', () => {
    cy.visit("https://docs.cypress.io/api/commands/and")
    cy.get('.DocSearch-Button-Placeholder')
});

it('By Tag', () => {
    cy.visit("https://docs.cypress.io/api/commands/and")
    cy.get('nav')
});

it('By Tag value', () => {
    cy.visit("https://192.168.1.194:8441/login")
    cy.get('[type="password"]')
});

it('By Different Tag', () => {
    cy.visit("https://192.168.1.194:8441/login")
    cy.get('[color="primary"][type="submit"]')
});

it('By Different Types', () => {
    cy.visit("https://docs.cypress.io/api/commands/and")
    cy.get('button[type="button"][aria-label="Search"]')
});

it.only('By Contains name', () => {
    cy.visit("https://192.168.1.194:8441/login")
    cy.get('button[type="button"][aria-label="Search"]')
}); */

//Comment

it('Using Get with Find and Eq', () => {
    cy.visit("https://ptable.com/")
    cy.get('ol').find('div').eq(18)
});

it.only('Using Get with Find and Eq', () => {
    //выставить разрешение экрана
    cy.viewport(1600,900)
    //переход по url
    cy.visit("https://docs.cypress.io/api/commands/eq#Syntax")
    cy.get('nav').find('ul').find('li').find('a').eq(126)
});

