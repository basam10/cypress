/// <reference types="cypress" />

describe('Advance UI Element ie iframe',()=>{

    it('Handle Iframe', function(){
        cy.visit('https://react-redux.realworld.io/#/?_k=n9a3t0')
       cy.xpath('//a[normalize-space()="Sign in"]').click()
       cy.xpath('//input[@placeholder="Email"]').type('basamalhassan231@gmail.com')
       cy.xpath('//input[@placeholder="Password"]').type('Alhamdulillah')
       cy.xpath('//button[normalize-space()="Sign in"]').click()

        })
    })