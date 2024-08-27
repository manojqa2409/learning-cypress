///<reference types="cypress"/>

describe('LGWAutomation', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
        cy.session('loginSession', () => {
                cy.login();
                cy.wait(5000)
            })
    })

it('TC-01-Abort Collecting Cycle', () =>{

cy.visit('/')
cy.wait(5000)
 /**Lillby - Papir - Single Shaft**/
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
                                                
//cy.get('#accordion__heading-ongoingTask').click() // click on Ongoing Group to collapse it
cy.wait(3000)
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
cy.get('#accordion__heading-upcomingTask').click() // Click on Queued Group
cy.wait(3000)
cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click(); // Click on Submitt button.
cy.wait(10000)
cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn')
.should('be.visible')
.click() // Click on Abort to ongoing emptying.

cy.wait(10000)
                        
        if (cy.get('.lw-header__left > span').should('have.text', 'FINISHING EMPTY INTERRUPT: FANGROUP:CIWO INTERRUPT EMPTY')) {
                cy.log('Empting has been interrupt successfully.')
                cy.wait(170000)
                cy.log('Empyty has completed for next shaft successfully')

                } else {

                cy.log('Empting has NOT been interrupted.') 
                cy.wait(200000)
                cy.log('Empyty has completed for all shafts successfully')
                }

                //cy.wait(5000) 
                cy.get('.lw-header__logout > img').click() //logout

                })
        })