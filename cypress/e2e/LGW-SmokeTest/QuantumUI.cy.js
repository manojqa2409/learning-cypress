///<reference types="cypress"/>

describe('LGW- Quantum UI Automation Test', () =>{

        Cypress.on('uncaught:exception', (err, runnable) => {
                return false; // Handle uncaught exception
        })

        beforeEach(() =>{
                cy.viewport(1900, 1000)//Change screen size
        })

        it.only('Login', () =>{

                //cy.viewport(2000, 1100)//Change screen size
                cy.visit('http://localhost:8081/gui') //Visit the URL
                cy.wait(3000)
                cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se') //Enter Username
                cy.get('[data-test="password"] > input').type('M@noj!23$') //Enter Password
                cy.get('.button__label').click() // Click on Login button
                
        })    

        it.only('UI Change Language', () =>{

                //**Choose language Swedish to English */
                cy.wait(3000)
                //cy.viewport(2000, 1100)//Change screen size
                cy.get(':nth-child(1) > .select-language__flag--img').click() //Click on English Flag from header to choose English language
                cy.wait(5000)
                cy.get('[data-test="logs"]').should('have.text', 'Logs') // Verify the text 'Logs' in English language
                cy.wait(3000)

        })

        it.only('Resolve Blockage- AIV & FireDamper - Service Mode On & Open Valves', () =>{

                cy.get('.air-inlet-valve__size > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder:first').click() //Click AirInlet Valve dropdown
                cy.wait(5000)
                cy.get('.lw-select__menu > .lw-select__menu-list > .lw-select__option:nth-child(1)', {timeout: 10000}).click(); //Select 1st option from Air Inlet dropdown
                cy.wait(4000)
                cy.get('.air-inlet-valve__size > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > label').scrollIntoView()
                cy.wait(4000)
                //cy.get('.air-inlet-valve__control-inner > .lw-switch').click() // Click AIV service mode icon
                cy.xpath("//div[@class='air-inlet-valve__control-inner']//div[@class='lw-switch lw-switch__flat']").click()// Click AIV service mode icon
                cy.wait(5000)
                cy.xpath("//div[@class='valve valve__type-default valve__size-md valve__repair-mode valve__closed']//button//img").click({force : true}) // Open Fire Damper Valve
                cy.wait(5000)
                cy.get('.air-inlet-valve__control-inner > [style="position: relative;"] > .valve', {timeout: 10000}).click()
                cy.wait(4000)            
                

        })

        it('Resolve Blockage- Fraction Switch - Service Mode On & Open Fraction Valve', () =>{
                
                cy.get('.shaftIDx-0 > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label').click() //Click Fractionswitch service mode icon
                cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px; width: 76px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > [style="background-color: rgb(255, 255, 255);"] > .fs-valve-inner > .lw-toggle-parent > [style="position: relative;"] > .valve > button').should('be.disabled') // Click on Aligned Fraction Valve 
                
                cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px; width: 76px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(2) > .fs-valve-inner > .lw-toggle-parent > [style="position: relative;"] > .valve > button')
                .click() //Click on Non-Aligned Fraction Valve

                cy.wait(3000)

        })

        it('Expend Container Section- Service Mode On, Open Air Inlet/Outlet valves, PDV Direction change - Side ', () =>{
                //**Container Section Expend  */
                cy.get('#accordion__heading-raa-0 > :nth-child(1)').click() //Click on Container header to expend
                
                //**CompactorContainer */
                cy.get(':nth-child(5) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; margin-top: 4px; max-width: 64px;"] > .lw-switch > .lw-switch__label').click() //Click on Compactor Container Service Mode icon
                cy.wait(3000)
                cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > .lets__wrapper > [style="display: flex; position: relative;"] > :nth-child(2) > .valve > button').click() // Click on Air Inlet/Outlet Valve to open them
                cy.wait(3000)
                cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > .lets__wrapper > :nth-child(1) > [style="position: relative;"] > .valve > button').click() // Click on Material Outlet Valve to open them
                
                //**PDV */
                cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label').click() //Click on PDV service mode icon
                cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > div > .pdv--img').click() //Change PDV Direction
                
                //**FilterContainer*/
                cy.get(':nth-child(2) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; margin-top: 4px; max-width: 64px;"] > .lw-switch > .lw-switch__label')
                .click() //Filter Container in Service Mode
                cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .container__lets > .lets__wrapper > [style="display: flex; position: relative;"] > :nth-child(2) > .valve > button')
                .click() //Open Air inlet/Outlet Valve - Filter Container
                cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .container__lets > .lets__wrapper > :nth-child(1) > [style="position: relative;"] > .valve > button').click() // Open Material Inlet Valve - Filter Container

        })

        it('Expend FanController- Servive Mode On & Start Fan', () =>{
                //**Fancontroll Section */
                cy.get('#accordion__heading-raa-1 > :nth-child(1)').click() //Click on Fancontroller header
                cy.get('.fan-controller__options > :nth-child(2) > .lw-switch').click() //Click on Fancontroller Service Mode icon
                cy.get('.fan-controller__options > .lw-toggle > div > .switch > .slider > .control-label').click() //Click on toggele button to start fan
                cy.get('.lw-tab-switches > .false').click() //Click on Frequency tab during Service Mode

        })

        it ('Quantum UI- Logout', () =>{
                cy.get('.lw-header__logout > img').click() //logout

        })


})

