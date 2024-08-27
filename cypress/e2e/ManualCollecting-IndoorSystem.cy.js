///<reference types="cypress"/>

describe('ManualCollectingIndoor', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
                return false; // Handle uncaught exception
    })

    it('CompactorContainer-FanRun', () => {

        cy.visit('http://localhost:8081/gui') //visit URL
        cy.wait(5000)
        cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se') //Enter Username
        cy.wait(5000)
        cy.get('[data-test="password"] > input').type('M@noj!23$') //Enter Password
        cy.wait(5000)
        cy.get('.button__label').click() // Click on Login button.
        cy.wait(10000)

        //Expand Accordians & Global Toggele
        cy.expandAccordionsGlobalToggleFlag();
        //PDV - Move into Service Mode
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        // PDV Direction - From Straight to Side
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click({force: true});
        cy.wait(5000)
        // Compactor Container - Move into Service Mode
        cy.get(':nth-child(5) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        // Material Side Valve Open
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)
        // Material Side Valve Open - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(5000)
        // Air Side Valve Open
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)
        // Air Side Valve Open - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(5000)
        // Compactor - Start
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)
        // Compactor - Start - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(5000)
        /*=== */
        /*ADD AIV in Control View*/
        cy.get(':nth-child(6) > .ov-main__wrapper > :nth-child(1) > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"]').click({force: true});
        cy.wait(5000)
        /*ADD Inlet which is associated of selected AIV in Control View*/
        cy.get(':nth-child(6) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > .accordion > .accordion__item > #accordion__panel-shaftNodeVerticle > .shaft-node-card__content > [style="padding: 0.3em;"] > [style="border-bottom: 1px solid rgb(195, 210, 210);"] > :nth-child(1) > .s-n-inlet__name > span').click({force: true});
        cy.wait(5000)
        /*ADD Fraction Switch-4 in Control View which is associated with above Inlet*/
        cy.get(':nth-child(6) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > [style="display: flex; flex-direction: column;"] > .shaft-node-bottom-part > :nth-child(1) > .s-n-b-p-fractions__wrapper > span').click({force: true});
        cy.wait(5000)			

        /*AIV/FireDamper - Move in Service Mode*/
        cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        /*Fire Damper - check it is NOT Open*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('not.be.checked');
        cy.wait(5000)
        /*Fire Damper Valve Open - Click on Toggle*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        //cy.wait(300000)
        cy.wait(10000)
        /*Fire Damper - After Open check it's Open or NOT*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('be.checked')
        cy.wait(5000)

        /*AIV Valve Open - Click on Toggle*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(10000)

        /*Inlet - Move in Service Mode*/
        //==cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
        //==cy.wait(5000)

        /*Fraction Switch-4 -> Move in Service Mode*/
        cy.get('.control-view-main__sidebar > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        /*FractionSwitch-4- FireDamper - Open Valve*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true})
        cy.wait(10000)

        // Fan Group - Move in Service Mode
        cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        // Fan Group - Click on ON toggele
        cy.get('.fan-controller__options > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)

        // Header Message ???
        /* this is working code ===
            cy.get('.lw-header__left > span').invoke('text').then((text) => {
                cy.wrap(text).as('headerMessage')
            })
            //cy.log(headerMessage)
            if ('headerMessage' != 'Start Fan') {

                cy.log('Test Case Fail')
                
            } else {
                cy.log('Test Case Pass')
                
            } */

        /*=== Check the Header message and validate with Static message  ===*/
        cy.get('.lw-header__left > span').invoke('text').should('eq', 'INAKTIV')
        cy.wait(5000)
        // Stop FanGroup
        cy.get('.fan-controller__options > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)

        // Move FanGroup to normal state from Service Mode
        cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)

        // Stop Container compactor
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
        cy.wait(5000)
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(5000)

        // Close Material & Air Valve
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(5000)
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(5000)

        // Container - Back to Normal from Service Mode
        cy.get(':nth-child(5) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        // PDV to Stright from Side
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click({force: true});
        cy.wait(5000)
        // PDV - Move back to Normal from Service Mode
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)

        // FS4- Close FD - Pending

        // FS4 - Move to normal from service mode - Pending

        // AIV & FD - Close AIV & FD - Pending

        // AIV - Move to normal from Service Mode - Pending

        // All together ==
            /*Fraction Switch-4 -> Move in Normal state from Service Mode*/
            cy.get('.control-view-main__sidebar > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch__sm-active > .lw-switch__label > img').click({force: true});
            cy.wait(5000)

            /*AIV - Move to Normal state from Service Mode*/
            cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
            cy.wait(5000)

        // Logout
        cy.get('.lw-header__logout > img').click();
        cy.wait(5000)
             

    })
})