/// <reference types="cypress" />

describe('Alerts', function(){

    it('Simple Alert', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', (str)=>{
           expect(str).to.equal('I am a JS Alert')
        })
        cy.get('#result').should('contain','You successfully clicked an alert')
    })
    it('Confirmation Alert ok button', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
            
        })
        cy.get('#result').should('contain','You clicked: Ok')

    })
    it('Confirmation Alert on canel button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
            return false
    })
    cy.get('#result').should('contain','You clicked: Cancel')
})
it('Prompt Alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.contains('Click for JS Prompt').click()
    cy.window().then (function($win){
        cy.stub($win,'prompt').returns('Hello Alerts')
        cy.contains('Click for JS Prompt').click()
})
cy.get('#result').should('contain','You entered: Hello Alerts')

})
})