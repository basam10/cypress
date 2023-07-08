/// <reference types="cypress" />

describe('Advance UI Element ie iframe',()=>{

    it('Handle Iframe', function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function($iframe){
         const frame = $iframe.contents().find('#tinymce')
         cy.wrap(frame).clear().type('Hello')
        })
    })
})