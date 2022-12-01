/// <reference types="Cypress"/>

import { mobileReplenishment } from "../../support/pages/mobileReplenishment"

it('Replenishment of mobile phone number', ()=>{
    cy.visit('https://yoomoney.ru/phone')

    mobileReplenishment.typePhoneNumber('9179586666', {force: true})
    mobileReplenishment.typeAmount('1')
    .get('[type="submit"]').click()
    mobileReplenishment.typeDebitCardData('4111111111111112555', '1223', '123')

  /*   .get('.payment-submit__forward-button').click()
    .get('#cardNumber')
    .should('have.text', '4111111111111112555')
    .get('[name="netSum"]')
    .should('have.text', '1') */
    .get('[class="currency currency_type_rub"]')
    .eq(0)
    .should('have.text', 'Р')

})

it.only('Money transfer between foreign cards', ()=>{
    cy.visit('https://unistream.ru/transfers/channels/card2card/')
    .wait(3000)
    .get('[name="pan1"]')
    .eq(0)
    .type('411111111111111266')
    .wait(3000)
    .get('[name="month"]')
    .type('0223')

})
.

