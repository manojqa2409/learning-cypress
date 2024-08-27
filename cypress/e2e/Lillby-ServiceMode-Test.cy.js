///<reference types="cypress"/>
 
describe('LGW- Quantum UI Automation Test', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
            cy.viewport(1900, 1000)//Change screen size
                        
    })

    it('Login', () =>{
            cy.visit('http://localhost:8081/gui') //Visit the URL
            cy.wait(3000)
            cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se') //Enter Username
            cy.get('[data-test="password"] > input').type('M@noj!23$') //Enter Password
            cy.get('.button__label').click() // Click on Login button
            cy.wait(10000)
    
            // *** Inlet - Service Mode Start
            // Generated Service Mode alarm verification in English language via Control View
            cy.get('#groupID-A1 > [style="display: flex;"] > :nth-child(3) > :nth-child(1) > .tile-outer-textholder > span').click() //click on Inlet box to add in Control View
            cy.wait(3000)
            
            //*** Validating Service Mode Image before it's Active *** 
            cy.get('div.lw-switch__label > img')
            .should('be.visible')
            .should('have.attr', 'src', '/gui/static/media/service-mode.f1ba11b0.svg')
                       
            // Click on Service Mode icon to move Inlet in Service Mode
            cy.get(':nth-child(1) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch').click() 
            
            cy.wait(8000)
            //*** Validating Service Mode Image After it's Active *** 
            cy.get(':nth-child(1) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img')
            .should('be.visible')
            .should('have.attr', 'src', '/gui/static/media/service-mode-active.32e7c5a2.svg')

            cy.wait(5000)
            
            // Verification in alarm section which is generated after component in Service Mode
            cy.get('[value="A1 Rest2: 46"]').should('have.text', 'A1 Rest2: 46')  
            cy.get('[value="Notification: Component is in service mode. manoj.kumar@logiwaste.se"]').should('have.text', 'Notification: Component is in service mode. manoj.kumar@logiwaste.se')

            // Again Click on Service Mode icon to move back from Inlet in Service Mode
            cy.get(':nth-child(1) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch').click() 
            /*** Inlet - Service Mode End **/

            // ** Bottom Part - Service Mode Start**/
            // Click on SM icon of BV to move in SM
            cy.get(':nth-child(2) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click()
            
            // Validate BV moved into SM
            cy.get(':nth-child(2) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img')
            .should('be.visible')
            .should('have.attr', 'src', '/gui/static/media/service-mode-active.32e7c5a2.svg')

            // Open the Valve - Pending
            cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click()
            cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider')

            cy.get('[style="position: relative; text-align: center; color: black; height: 18px; width: 20px;"] > [style="position: absolute; top: 50%; left: 48%; transform: translate(-50%, -50%); border-radius: 50%; border: 1.5px solid rgb(145, 179, 179); height: 13px; width: 13px; background-color: transparent;"] > div')


            


            
            //logout
            cy.get('.lw-header__logout > img').click()
            cy.wait(5000)

           
           

            })
           
            
        })    
   
