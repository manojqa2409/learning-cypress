describe('Program', () => {
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Handle uncaught exception
  })

  const Program1 = 'Auto-Full-Never';

  it('Delete Condition Check', function() {

    cy.visit('http://localhost:8081/gui');
    cy.wait(5000)

    cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se');
    cy.wait(5000)
    cy.get('[data-test="password"] > input').type('M@noj!23$');
    cy.wait(5000)
    cy.get('.button__label').click({force: true});
    cy.wait(10000)

    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With Name
    
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program1);
    cy.wait(5000)
/*
    if (cy.contains('No records to display') !== null) {
      cy.log(Program1 + ': Program found.')
      cy.get('.MuiTable-root').first().contains('tr', Program1).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click();
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)
      cy.log( Program1 + ': Program deleted.')
      
    } else {
      cy.wait(3000)
      cy.log( Program1 + ': Program not found.')
      
    }*/

      cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root').invoke('text').then(($el) => {
      //cy.get('[index="0"]').invoke('text').as('Pro1')

      //cy.get('@Pro1').then(($el) => {

        if ($el !== "No records to display") {

          cy.log(Program1 + ': Program found.')
          
        } else {

          cy.log(Program1 + ': Program NOT found.')
          
        }
      })
      // logout
      cy.get('.lw-header__logout > img').click({force: true});
      cy.wait(5000)


    })
})
