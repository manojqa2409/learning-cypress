describe('User', () => {
  
    const EditProgram = 'AutoEditPro-1'
    const EditProgramMIC = 2;
    const EditProgramTigger = 3;
    const GeneralSearch = 'Auto';
  
  
      it('CreateUser', function() {
    
        cy.visit('http://localhost:8081/gui');
    
        cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se');
        cy.wait(5000)
        cy.get('[data-test="password"] > input').type('M@noj!23$');
        cy.wait(5000)
        cy.get('.button__label').click({force: true});
        cy.wait(10000)
        // Click on English flag
        cy.get(':nth-child(1) > .select-language__flag--img').dblclick();
        cy.wait(5000)
        // click on Setting icon
        cy.get('.lw-tab__item > img').click({force: true});
        cy.wait(5000)
        /*==== Adding User ====*/
        cy.get('[data-test="users"]').click({force: true});
        cy.wait(5000)

        //cy.get('MuiTable-root').find('tbody tr').should('have.length.greaterThan', 0)

        cy.get('.MuiTable-root').find('tbody tr').then(($el) => {
            cy.wait(5000)

            if ($el != null && $el.length > 0) {
                cy.wait(5000)
                // Element exists, do something
                    cy.log('User rows are exist in the table')
                   } else {
                // Element does not exist, do something else
                cy.log('User rows does not exist in the table')
                cy.wait(5000)
              }

        })

        cy.wait(5000)

        //User Tab - Click on Plus Icon to Add new User
              // Logout
      cy.get('.lw-header__logout > img').click({force: true});
      cy.wait(5000)
  
    });
  })