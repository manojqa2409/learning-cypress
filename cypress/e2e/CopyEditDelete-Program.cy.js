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
      cy.get(':nth-child(1) > .select-language__flag--img').dblclick();
      cy.wait(3000)
      cy.get('.lw-tab__item > img').click({force :true});
      cy.wait(6000)

      /*cy.contains('th', 'Name').invoke('index').then((i) => {
        console.log(i)
        cy.log(i)
      })*/

      //cy.get('MuiTableRow-root > .MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft > value').invoke('text')



      // 1st Try to click on Copy SVG icon - Found many elements - Not working
      //cy.get('svg.MuiSvgIcon-root').eq(0).click() //clicks the first svg icon
      
      // 2nd Try to click on Copy SVG icon - Found many elements - Not working
      //cy.get('button[type="button"]').eq(0).contains('komal').click({force: true})

      /*
      // 3rd Try to click on Copy SVG icon - found 3 elements but couldn't click on specific icon - Not working
      cy.contains('.MuiTableRow-root', 'komal', 'title="Copy"')
      .within(() =>{
        cy.get('svg.MuiSvgIcon-root').eq(0).click()

      })*/

    //4th try to click on Copy svg icon - Not working

    // Define the specific td value to search for
    //const targetValue = 'komal';
/*
    // Identify the table
    cy.get('.MuiTable-root').first().within(() => {
      cy.get('.MuiTableBody-root').within(() => {
      // Iterate over each row
      cy.get('tr').each(($row) => {
        // Check if the row contains the specific td value
        cy.wrap($row).within(() => {
          cy.get('td').contains(targetValue).then(($td) => {
            if ($td.length > 0) {
              // The row contains the specific td value, so click the icon in this row
              cy.get('svg.MuiSvgIcon-root]').click(); // Adjust the selector to match your icon
            }
          });
        });
      });
    });
  });*/
  // Copy Action in Program Tab - Working fine

  cy.get('.MuiTable-root').first()
  .contains('tr', 'komal')
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(0).click()
  cy.wait(10000)

  // Edit Program

  cy.get('.MuiTable-root').first()
  .contains('tr', 'komal')
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(1).click()
  cy.wait(10000)
  cy.get('[title="Cancel"]').click()
  cy.wait(10000)

// Delete Program
  cy.get('.MuiTable-root').first()
  .contains('tr', 'komal')
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(2).click()
  cy.wait(10000)
  cy.get('[title="Save"]').click()
  cy.wait(10000)

    /*
      cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Copy"]').click({force: true})
      cy.wait(10000)
      //cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Edit"]').click({force: true})
      //cy.wait(10000)
      cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Delete"]').click({force: true})
      cy.wait(10000)
      cy.get('[title="Cancel"]').click()
      cy.wait(10000)
      cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Delete"]').click({force: true})
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)*/

      cy.get('.lw-header__logout > img').click();
      cy.wait(5000)

    })

})