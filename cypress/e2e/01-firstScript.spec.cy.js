/// <reference types="cypress" />
describe('Login Functionality', function(){

    it.only('Login test using conduit', function(){
        cy.visit('https://react-redux.realworld.io/#/?_k=57bjay')
        cy.get('body > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').click()
        cy.get('input[placeholder="Email"]').type('basamalhassan231@gmail.com')
        cy.get('input[placeholder="Password"]').type('Alhamdulillah')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="#settings"]').click()
        cy.get('.btn.btn-outline-danger').click()
        
    })
}
)