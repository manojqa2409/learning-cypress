///<reference types="cypress"/>

describe('LGW- Quantum UI Automation Test', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    //let inletcount = 0

    beforeEach(() =>{
            //cy.viewport(1900, 1000)//Change screen size
    })

          it('Semi Auto Emptying-Multiple Shaft', () =>{

                cy.visit('http://localhost:8081/gui') //Visit the URL
                cy.wait(3000)
                cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se') //Enter Username
                cy.wait(3000)
                cy.get('[data-test="password"] > input').type('M@noj!23$') //Enter Password
                cy.wait(3000)
                cy.get('.button__label').click() // Click on Login button
                cy.wait(10000)

                cy.get(':nth-child(1) > .select-language__flag--img').click()
                cy.wait(10000)

                cy.get('#accordion__heading-container').click();
                cy.wait(5000)
                cy.get('#accordion__heading-airSpeed').click();
                cy.wait(5000)
                cy.get('[data-test="logs"]').click()
                cy.wait(5000)

                /*Lillby - Papir - Single Shaft*/
                        /*Click on Create Queued group*/
                         cy.get('#accordion__heading-manualEmpty').click({forec: true});
                         cy.wait(3000)
                         /*Click on fraction dropdown*/
                         cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
                         cy.wait(3000)
                         /*Select Fraction from dropdown-Lillby-Papir*/
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
                         cy.wait(150000)

                         
                        //cy.get('#accordion__heading-ongoingTask').click() // click on Ongoing Group to collapse it
                        cy.wait(3000)
                        // Lillby - Rest - Single Shaft
                        //cy.get('#accordion__heading-manualEmpty').click(); // Click on Create Queued group
                        //cy.wait(3000)
                        /*Click on fraction dropdown*/
                        cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder')
                        .click({force: true});
                        cy.wait(3000)
                        /*Select Fraction from dropdown-Lillby-Rest*/
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
                        cy.wait(150000)

                        /*logout*/
                        cy.get('.lw-header__logout > img').click()

                })
        })