/// <reference types="Cypress"/>

//type - написать что-то в поле

it('type', ()=>{
    cy.visit('https://nsk.mts.ru/personal')
    .get('[name="number"]')
    .type(11223334444, {force: true})
})

it('focus', ()=>{
    cy.visit('https://nsk.mts.ru/personal')
    .get('[name="amount"]')
    .focus()
})

it('blur', ()=>{
    cy.visit('https://nsk.mts.ru/personal')
    .get('[name="amount"]')
    .focus()
    .blur()
})

it('clear', ()=>{
    cy.visit('https://nsk.mts.ru/personal')
    .get('[name="number"]')
    .type(11223334444, {force: true})
    .wait(2000)
    .clear()
})

it('submit', ()=>{
    cy.visit('http://192.168.1.48/login')
    .get('form[method="post"]')
    .submit()
})

it('click', ()=>{
    cy.visit('https://192.168.1.194:8441/login')
    .get('.clickable-text')
    .click({force: true})
})

it('rightclick', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    .contains('Right click to edit')
    .rightclick()
})

it('dblclick', ()=>{
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
    .contains('My Card')
    .dblclick()
})

it('check', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    .get('#optionsRadios1')
    .check()
})

it('check', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    .get('input[value="radio2"]')
    .check()
})

it('uncheck', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    .get('.action-check [type="checkbox"]')
    .not('[disabled]')
    .uncheck()
})

it.only('select', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    .get('')
    .select('oranges')
})
