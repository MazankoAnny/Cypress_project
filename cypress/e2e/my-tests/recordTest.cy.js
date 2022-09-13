it('record', ()=> {

cy.visit('https://192.168.1.194:8441/login')
cy.get('[type="email"]')
.type("super@admin.ru",{force: true})
cy.get('[type="password"]').type("qwe123QWE!@#",{force: true})
cy.get('button[type="submit"]').submit()
cy.get('.activated-sidenav-element > .mat-list-item-content').click();
cy.get('#mat-tab-label-3-1 > .mat-tab-label-content').click();

})
   