/// <reference types="Cypress"/>


it('should', ()=> {
   cy.visit('https://192.168.1.194:8441/login') 
   cy.get('[type="email"]')
   .type('super@admin.ru', {force: true})
   .should('have.value', 'super@admin.ru')
})

it('expect', ()=> {
    cy.visit('https://192.168.1.194:8441/login') 
    cy.get('[type="email"]')
    .type('super@admin.ru', {force: true}).then(input =>{
        expect(input).to.have.value('super@admin.ru')
    })
    
 })

 it('авторизация и выбор раздела, check default value for Search', ()=> {
    cy.viewport(1600, 900)
    cy.visit('https://192.168.1.194:8441/login') 
    cy.get('[type="email"]', {timeout: 5000})
    .type('super@admin.ru', {force: true})
    cy.get('[type="password"]', {timeout: 5000})
    .type('qwe123QWE!@#', {force: true})
    cy.get('[type="submit"]', {timeout: 5000})
    .click({force: true}, {timeout: 5000})    
    cy.get('[class="mat-list-item-content"]', {timeout: 5000}).contains('Контрагенты')
    .click({force: true}),  {timeout: 5000}
    cy.get('app-search-panel', {timeout: 5000})
    .should('be.hidden')
    
})

it('check is correct attr in button', ()=> {
    cy.viewport(1600, 900)
    cy.visit('https://192.168.1.194:8441/login') 
    cy.contains('Войти')
    .should('have.attr', 'type')
    .and('match', /submit/)

})

it.only('check is correct URL', ()=> {
    cy.viewport(1600, 900)
    cy.visit('https://192.168.1.194:8441/login') 
    cy.url()
    .should('eq', 'https://192.168.1.194:8441/login')

})
