/// <reference types="cypress" />

describe('Browser Control',()=>{

    it('Handle browser control', function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.go('back')
         cy.go('forward') 
         cy.get('input[placeholder="Email"]').type('basamalhassan231@gmail.com')
        cy.get('input[placeholder="Password"]').type('Alhamdulillah')     
        cy.reload()  
        })
    })
