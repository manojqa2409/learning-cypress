///<reference types="cypress"/>

describe('LGW AutomationTest', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
        })

        beforeEach(() =>{
                cy.viewport(1900, 1000)//Change screen size
                
                cy.login('manoj.kumar@logiwaste.se', 'M@noj!23$') // Using login function
                cy.wait(5000)
                
                

                              
            })

            it('English Language', () =>{

               cy.wait(5000)
                cy.get('div.lw-header__left').should('have.text', 'IDLE') // Validate the correct page after login
                //**Choose language Swedish to English */
                //cy.get(':nth-child(1) > .select-language__flag--img').click()
                cy.wait(5000)
                
                        //Do something
                        cy.log("English language is selected, so performing the actions")
                        cy.wait(3000)
                        cy.get('#accordion__heading-container').contains("Container")// container
                        cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Speed") // Speed
                        cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frequency") // Frequency
                        cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Diff. Pressure") // Container Diff Pressure
                        
            })
               
            it ('Swedish Language', () => {

                //cy.visit('/gui')

                cy.get(':nth-child(2) > .select-language__flag--img').click()
                        cy.wait(15000)
                        cy.log("Swedish language is selected, so performing the actions")
                        cy.wait(3000)
                        cy.get('#accordion__heading-container').contains("Container")
                        cy.wait(5000)
                        cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Lufthastighet")
                        cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frekvens") // Verify the text Frequecy
                        cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Diff. Tryck") // Verify the text 'Container Diff Pressure'
                    
                    })

            it ('Logout', () => {

                        //cy.visit('/gui')
        
                        cy.get('.lw-header__logout > img').click() //logout
                    })
                
            })