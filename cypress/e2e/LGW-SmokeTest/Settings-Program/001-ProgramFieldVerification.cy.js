///<reference types="cypress"/>

describe('ProgramFieldValidation', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Handle uncaught exception
  })

  beforeEach(() =>{

      cy.session('loginSession', () => {
          cy.login();
          cy.wait(5000)
      })
  })


  it('TC-01', function() {

    cy.visit('/')
    cy.wait(5000)

    // Click on English flag
    cy.get(':nth-child(1) > .select-language__flag--img').click();
    cy.wait(5000)
    // click on Setting icon
    cy.get('.lw-tab__item > img').click();
    cy.wait(5000)
    // Click on Plus sign of Program Tab
    cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
    cy.wait(5000)
    // Name - Validation message for Name text box - Can not be empty
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > div').click({force: true}).should('have.text', 'cannot be empty')
    cy.wait(5000)
    // Fraction - Validation message for Fraction dropdown- Can not be empty
    cy.get(':nth-child(4) > [style="color: red; font-size: 12px; margin-top: 10px; white-space: nowrap;"]').click({force: true}).should('have.text', 'cannot be empty')
    cy.wait(5000)
    // Trigger - Validation message for Trigger dropdown - Can not be empty
    cy.get(':nth-child(5) > [style="color: red; font-size: 12px; margin-top: 10px; white-space: nowrap;"]').click({force: true}).should('have.text', 'cannot be empty')
    cy.wait(5000)
    // Min Inclusion Criteria - Validation message for Min Inclusion Criteria - Can not be empty
    cy.get(':nth-child(7) > [style="color: red; font-size: 12px; margin-top: 10px; white-space: nowrap;"]').click({force: true}).should('have.text', 'cannot be empty')
    cy.wait(5000)
    // Click on Cancel icon
    cy.get('div > [tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
    cy.wait(5000)
    // Logout
    //cy.get('.lw-header__logout > img').click({force: true});
    //cy.wait(5000)

  });
})