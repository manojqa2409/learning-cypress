///<reference types="cypress"/>

describe('ResolveBlockage', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Handle uncaught exception
    })

    it('ISV', () => {

        cy.visit('http://localhost:8081/gui') //visit URL
        cy.wait(5000)
        cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se') //Enter Username
        cy.wait(5000)
        cy.get('[data-test="password"] > input').type('M@noj!23$') //Enter Password
        cy.wait(5000)
        cy.get('.button__label').click() // Click on Login button.
        cy.wait(10000)
        //cy.get(':nth-child(1) > .select-language__flag--img').click()
        //cy.wait(10000)
        cy.get('#accordion__heading-container').click();
        cy.wait(5000)
        cy.get('#accordion__heading-airSpeed').click();
        cy.wait(5000)
        /*Click on Create Queued group*/
        cy.get('#accordion__heading-manualEmpty').click({forec: true});
        cy.wait(5000)
        /*Click on fraction dropdown*/
        cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
        cy.wait(5000)
        /*Select Fraction from dropdown-Lillby-Papir*/
        cy.get("#react-select-2-option-0").click({force: true});
        cy.wait(5000)
        /*Select 'Emptying of one open ISV' checkbox*/
        cy.get('.m-top-10 > input').click()
        cy.wait(5000)
        cy.get('.m-top-10 > label').click().invoke('text').should('eq', 'Emptying of one open ISV').as('EISV')
        /*Click on Inlet dropdown*/
        cy.get("#quantum-root div.lw-select__placeholder").click();
        cy.wait(5000)
        /*Select Inlet-1*/
        cy.get('#react-select-4-option-1').click();
        cy.wait(5000)
        cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click();
        cy.wait(150000)
        /*logout*/
        cy.get('.lw-header__logout > img').click()
        cy.wait(5000)

    })
})