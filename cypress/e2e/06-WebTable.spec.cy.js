/// <reference types="cypress" />

describe('Web Table', function(){

    it('Handling web table', function(){
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1').contains('td','http://www.jdoe.com').should('be.visible')
        cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(1)')
        .contains('td','jsmith@gmail.com').should('be.visible')
        cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)')
        .each(($ele,index,$list)=>{
            const fname=$ele.text()
            if(fname.includes('Frank')){
                cy.get('(//td[contains(text(),"Frank")])[1]').eql(index).then(($due)=>{
                    const dueAmont= $due.text()
                    expect(dueAmont).to.equal('$51.00')
                })
            }
        })
    })
})