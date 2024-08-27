///<reference types="cypress"/>

describe('Collecting Cycle', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    //let inletcount = 0

    beforeEach(() =>{
        cy.session('loginSession', () => {
                
                cy.login();
                cy.wait(3000)
        })
    })

          it('TC-001-> Abort -> Validate the Abort Text-> Start Next Queue -> Finish Collecting Cycle', () =>{


                cy.visit('/') //Visit the URL
                cy.wait(5000)
        
                cy.expandAccordionsGlobalToggleFlag()
                cy.wait(3000)


                	 /**NKS - Blandpapper - Single Shaft**/
                         cy.get('#accordion__heading-manualEmpty').click({force: true}); // Click on Create Queued group
                         cy.wait(3000)
                         cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click(); //Click on fraction dropdown
                         cy.wait(3000)
                         
                         cy.get("#react-select-2-option-0").click({force: true}); // Select Fraction from dropdown-NKS - Blandpapper .
                         
                         cy.wait(3000)
                         cy.get("#quantum-root div.lw-select__placeholder").click({force: true}); // Click on Inlet dropdown.
                         cy.wait(3000)
                         cy.get('#react-select-4-option-1').click({force: true}); // Select Inlet-1
                         //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
                         //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
                         cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click({force: true}); // Click on Submitt button.
                         cy.wait(3000)

                        cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder')
                        .click({force: true}); //Click on fraction dropdown
                        cy.wait(3000)

                        // Select Fraction from dropdown-NKS - Pappersoft 
                        cy.get('#react-select-2-option-1').click({force: true});
                        cy.wait(3000)

                        // Click on Inlet dropdown.
                        cy.get("#quantum-root div.lw-select__placeholder").click({force: true});
                        cy.wait(3000)
                        cy.get('#react-select-4-option-1').click({force: true}); // Select Inlet-1
                        //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
                        //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
                        
                        // Click on Queued Group
                        cy.get('#accordion__heading-upcomingTask').click({force: true})
                        cy.wait(3000)

                        // Click on Submitt button.
                        cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click({force: true});
                        cy.wait(10000)

                        // Click on Abort to ongoing emptying.
                        cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn')
                        .should('be.visible')
                        .click({force: true}) 

                        cy.wait(10000)
                        
                        if (cy.get('.lw-header__left > span').should('have.text', 'AVSLUTAR EMPTY INTERRUPT: FLÄKTKONTROLL:CIWO INTERRUPT EMPTY')) {
                                //
                                   cy.log('Collecting cycle has been interrupt successfully.')
                                   cy.wait(150000)
                                   cy.log('Collecting has completed for next shaft successfully')

                        } else {
                            cy.log('Collecting cycle has NOT been interrupted.') 
                            cy.wait(200000)
                            cy.log('Collecting cycle has completed for all shafts successfully')
                        }

                        //cy.wait(5000) 


        })
        
})