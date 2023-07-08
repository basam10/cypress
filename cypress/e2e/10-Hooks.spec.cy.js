
/// <reference types="cypress" />

describe('Hooks',()=>{

    beforeEach(function(){
        
            cy.visit('https://react-redux.realworld.io/')
            cy.get('body > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').click()
            cy.get('input[placeholder="Email"]').type('basamalhassan231@gmail.com')
            cy.get('input[placeholder="Password"]').type('Alhamdulillah')
            cy.get('button[type="submit"]').click()
            //cy.get('a[href="#settings"]').click()
        

             
    })
    it('Create new Post',()=>{
        cy.contains('New Post').click()
        cy.get('//input[@placeholder="Article Title"]').click().type('hello world')
        cy.get('(//input[@placeholder="What\'s this article about?"])[1]').click().type('hi you')
        cy.get('//textarea[@placeholder="Write your article (in markdown)"]').type('hello ,peace')
        cy.get('//input[@placeholder="Enter tags"]').type('hi')
        cy.get('//button[normalize-space()="Publish Article"]').click()
    })
    it('verify created post',()=>
    {
        cy.contains('Global Feed')
        cy.get('//a[normalize-space()="Global Feed"]').click()
    })
    afterEach('Logout',()=>{
       // cy.get('a[href="#settings"]').click()
        cy.contains('Or Click here to logout').click()
    })
    })
