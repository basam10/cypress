/// <reference types="cypress" />
describe('Drop Down Functionality', function(){

    it.only('Handling static drop down', ()=>{
        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 100%').should('have.value','100%')
       
   })
   it.only('Handling dynamic drop down', ()=>{
    cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
    cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
    cy.get('.rddlItem').contains('Aniseed Syrup').click()
   
})

})