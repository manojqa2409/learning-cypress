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

     it('TC-001-> Paused -> Validate the Paused Text-> Unpaused -> Finish Collecting Cycle', () =>{

                cy.visit('/') //Visit the URL
                cy.wait(5000)
        
                cy.expandAccordionsGlobalToggleFlag()
                cy.wait(3000)


                	 // NKS - Blandpapper - Single Shaft
                         cy.get('#accordion__heading-manualEmpty').click(); // Click on Create Queued group
                         cy.wait(3000)
                         cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click(); //Click on fraction dropdown
                         cy.wait(3000)
                         
                         cy.get("#react-select-2-option-0").click(); // Select Fraction from dropdown-Lillby-Papir.
                         
                         cy.wait(3000)
                         cy.get("#quantum-root div.lw-select__placeholder").click(); // Click on Inlet dropdown.
                         cy.wait(3000)
                         cy.get('#react-select-4-option-1').click(); // Select Inlet-1
                         //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
                         //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
                         cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click(); // Click on Submitt button.
                                                
                        
                        cy.wait(5000)
                        // Lillby - Rest - Single Shaft
                        //cy.get('#accordion__heading-manualEmpty').click(); // Click on Create Queued group
                        //cy.wait(3000)
                        cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder')
                        .click({force: true}); //Click on fraction dropdown
                        cy.wait(3000)
                        
                        cy.get('#react-select-2-option-1').click(); // Select Fraction from dropdown-Lillby-Rest
                        cy.wait(3000)
                        cy.get("#quantum-root div.lw-select__placeholder").click(); // Click on Inlet dropdown.
                        cy.wait(3000)
                        cy.get('#react-select-4-option-1').click(); // Select Inlet-1
                        //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
                        //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
                        cy.wait(3000)
                        cy.get('#accordion__heading-upcomingTask').click() // Click on Queued Group
                        cy.wait(3000)
                        cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click(); // Click on Submitt button.
                        cy.wait(10000)
                        
                        cy.get('.pcontainer').should('be.visible').click() // Click on Paused to ongoing emptying.

                        cy.wait(10000)
                        
                        if (cy.get('[style="display: flex; float: right;"] > .fangroup-info__col').should('contain', 'Paused')) {
                                //
                                   cy.log('Collecting cycle has been Paused successfully for other rest shafts.')
                                   cy.wait(100000)
                                   cy.get('.lw-header__left').should('have.text', 'INAKTIV(Queued Groups Paused)')//Paused message on Header
                                   //cy.get('[style="background: none; padding: 0.3rem; border-radius: 3px; font-size: 11px; font-weight: 600; color: rgb(1, 104, 94); min-width: 110px; margin-top: 1.5px; margin-right: 3px;"] > span')
                                   cy.log('Collecting cycle has completed for first shaft successfully')                               
                                   
                        } else {
                            cy.log('Collecting cycle has NOT been Paused.') 
                            cy.wait(150000)
                            cy.log('Collecting cycle has completed for all shafts successfully')
                        }
                        //cy.get('.empty-task__abort').click() // Remove empty task from Queued Group
                        //cy.get('.lw-toast__content--message').should('have.text', 'Emptying Task Removed!') // Validate the message after remove task
                        cy.get('.pcontainer').should('be.visible').click() // Click on Pause button to unpouse the empty program
                        cy.wait(150000)

                        //cy.wait(5000) 
                        cy.get('.lw-header__logout > img').click() //logout

        })
})