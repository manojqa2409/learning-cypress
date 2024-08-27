///<reference types="cypress"/>

describe('Add Program all combinations', () => {
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Handle uncaught exception
  })
  
  beforeEach(() =>{
  
      cy.session('loginSession', () => {
              
              cy.login();
              cy.wait(3000)
            
          })
      })
  
      const Program1 = 'Auto-Full-Never';
      //const Program2 = 'Automation-NOO-Never';
      //const Program3 = 'Automation-Time-Never';
      //const Program2Noo = 3;

  /*=====Check if Program exist then delete otherwise create that program - This logic is pending as it is not going in ELSE block=====*/
  
    it('TC-001-> Program-Full-Never', function() {
  
      cy.visit('/');
      cy.wait(10000)
      // Choose Language
      cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
      cy.wait(5000)
      //Click on Settings Icon
      cy.get('.lw-tab__item > img').click({force: true});
      cy.wait(5000)

      /*cy.get('.MuiTable-root').first().find(Program1).then(($el) => {

        if ($el != null && $el.length > 0) {
            // Element exists, do something
            cy.log(Program1 + ': Program found.')
            cy.get('.MuiTable-root').first().contains('tr', Program1).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click();
            cy.wait(10000)
            cy.get('[title="Save"]').click()
            cy.wait(10000)
            cy.log( Program1 + ': Program deleted.')
        
      } else {
            // Element does not exist, do something else
            console.log(Program1 + ': Program not found.');
            cy.wait(3000)
            cy.log( Program1 + ': Program not found.')
      }*/

            cy.get('tbody').then($tbody => {
              if ($tbody.find(Program1).length > 0) {
                // Do something if exist
                cy.log(Program1 + ': Program found.')
                cy.get('.MuiTable-root').first().contains('tr', Program1).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click();
                cy.wait(10000)
                cy.get('[title="Save"]').click()
                cy.wait(10000)
                cy.log( Program1 + ': Program deleted.')
              } else {
                // Do if not exist
                
                cy.wait(3000)
                cy.log( Program1 + ': Program not found.')
              }
            })

        cy.wait(5000)
        cy.get('.lw-header__logout > img').click();
        cy.wait(5000)
    })
  })
