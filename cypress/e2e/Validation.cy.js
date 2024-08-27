///<reference types="cypress"/>

describe('template spec', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Handle uncaught exception
    })
 
    /* ==== Test Created with Cypress Studio ==== */
    it('Settings-Program-CURD', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://localhost:8081/gui');

      cy.wait(5000)
  
      cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se');
      cy.wait(5000)
      cy.get('[data-test="password"] > input').type('M@noj!23$');
      cy.wait(5000)
      cy.get('.button__label').click();
      cy.wait(10000)     
      
    cy.get(':nth-child(1) > .select-language__flag--img').should('exist');
    cy.wait(5000)

    cy.get(':nth-child(1) > .select-language__flag--img').then(($el) => {

        if ($el.length) {
            // Element exists, do something
            cy.wait(5000)
                cy.get(':nth-child(1) > .select-language__flag--img').dblclick()
                    cy.wait(10000)
                        cy.log('Element found, Clicked')

            } else {
            // Element does not exist, do something else
                    cy.wait(3000)
                        cy.log('Flag element does not found, Hence not clicked')

                    }
            cy.wait(5000)
            cy.get('.lw-header__logout > img').click();
            cy.wait(5000)
      })

    })
})