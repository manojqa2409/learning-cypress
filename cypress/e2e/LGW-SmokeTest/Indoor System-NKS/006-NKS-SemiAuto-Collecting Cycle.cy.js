///<reference types="cypress"/>

describe('Collecting Cycle', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
		cy.session('loginSession', () => {
				cy.login();
				cy.wait(5000)
			})
	})

        it('TC-001-> Semi Auto Collecting Cycle For Indoor System', () => {
                cy.visit('/')
                cy.expandAccordionsGlobalToggleFlag()
                
                /*Expand Create Queued Group*/
                cy.get('#accordion__heading-manualEmpty').click({forec: true});
                cy.wait(3000)
                /*Click on fraction dropdown*/
                cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
                cy.wait(3000)
                /*Select Fraction from dropdown-NKS-Papir*/
                cy.get("#react-select-2-option-0").click({force: true});
                
                cy.wait(3000)
                /*Click on Inlet dropdown*/
                cy.get("#quantum-root div.lw-select__placeholder").click();
                cy.wait(3000)
                /*Select Inlet-1*/
                cy.get('#react-select-4-option-1').click();
                //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
                //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
                /*Click on Submitt button*/
                cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click();
                cy.wait(120000)

                    
                //cy.get('#accordion__heading-ongoingTask').click() // click on Ongoing Group to collapse it
                cy.wait(3000)
                // Lillby - Rest - Single Shaft
                //cy.get('#accordion__heading-manualEmpty').click(); // Click on Create Queued group
                //cy.wait(3000)
                /*Click on fraction dropdown*/
                cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder')
                .click({force: true});
                cy.wait(3000)
                /*Select Fraction from dropdown-NKS-Rest*/
                cy.get('#react-select-2-option-1').click(); 
                cy.wait(3000)
                /*Click on Inlet dropdown*/
                cy.get("#quantum-root div.lw-select__placeholder").click(); 
                cy.wait(3000)
                /*Select Inlet-1*/
                cy.get('#react-select-4-option-1').click(); 
                //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
                //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
                /*Click on Submitt button*/
                cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click(); 
                cy.wait(120000)
                })		

})