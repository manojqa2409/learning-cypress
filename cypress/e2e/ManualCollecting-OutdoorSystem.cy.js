///<reference types="cypress"/>

describe('ManualCollectingOutdoor', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
                return false; // Handle uncaught exception
    })

    it('FilterContainer-FanRun', () => {

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

        /*Click on Container SM icon to move Container in Service Mode*/
        cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
        cy.wait(5000)
        /*Click on Material Pipe slider to open the Valve of the Container*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
        cy.wait(5000)
        /*Check the Slider moved to other side to show the Valve as Open - Material Pipe*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({ force: true });
        cy.wait(5000)
        /*Click on Air Pipe slider to open the Valve of the Container*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
        cy.wait(5000)
        /*Check the Slider moved to other side to show the Valve as Open - Air Pipe*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({ force: true });
        cy.wait(5000)
        /*Click on Compactor to Start*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click();
        cy.wait(5000)
        /*Check the Compactor Toggle */
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').check({ force: true });
        cy.wait(5000)

        /*Click on PDV SM icon to move in Service Mode*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
        cy.wait(5000)
        /*Click on PDV direction image to change the direction from Stright to Side*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click();
        cy.wait(5000)

        /*Add AIV in Control View*/
        cy.get(':nth-child(1) > .ov-main__wrapper > [style="padding-right: 2px;"] > :nth-child(1) > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"]').click();
        cy.wait(5000)

        /*AIV - Click on SM icon to move AIV in Service Mode*/
        cy.get('[style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true})
        cy.wait(5000)
        /*AIV Valve Open - Open via clicking on Toggle*/
        cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true})
        cy.wait(5000)
                
        /*Add Inlet/BV in Control View*/
        cy.get('#groupID-A1 > [style="display: flex;"] > :nth-child(1) > :nth-child(1) > .tile-outer-textholder > span').click();
        cy.wait(5000)
        
        /*Add Section Valve in Control View*/
        //cy.get(':nth-child(1) > .ov-main__wrapper > [style="padding-left: 2px; width: 70px;"] > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"] > .line-clamp-2').click();
        //cy.wait(5000)

        // FanGroup Start
        // Fan Group - Move in Service Mode
        cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        // Fan Group - Click on ON toggele
        cy.get('.fan-controller__options > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(15000)

        //Bottom Part - Open
        /*Bottom Part - Move in Service Mode*/
        cy.get(':nth-child(2) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
        cy.wait(5000)
        /*Bottom Valve - Click on Slide to open Valve*/
        cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
        cy.wait(5000)
        /*Bottom Valve - Check the Valve Open via Slider*/
        cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(5000)

        /*=== Check the Header message and validate with Static message  ===*/
        cy.get('.lw-header__left > span').invoke('text').should('eq', 'IDLE')
        cy.wait(5000)

        //Bottom Part - Close
        /*Bottom Valve - Click on slider to Close the Valve */
        cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
        cy.wait(5000)
        /*Bottom Valve - Check the Valve, It's Closed */
        cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(5000)
        /*Bottom Part - Move back to Normal State from Service Mode*/
        cy.get(':nth-child(2) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
        cy.wait(5000)

        // FanGroup Stop
        cy.get('.fan-controller__options > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(5000)

        // Move FanGroup to normal state from Service Mode
        cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)

        /*AIV Valve Close - Close via clicking on Toggle*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(5000)
        /*AIV move to Normal from Service Mode*/
        cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true})
        cy.wait(5000)

        /*Clear All - Remove all components from Control View*/
        cy.get('.control-view__action-primary > [data-test] > .btn > .button__label').click();
        cy.wait(5000)

        //Container - Air & Material Valve Close
        /*Click on Material Pipe toggle - To Close the Valve*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
        cy.wait(5000)
        /*To check Material Pipe Toggle*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({ force: true });
        cy.wait(5000)
        /*Click on Air Pipe toggle - To Close the Valve */
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
        cy.wait(5000)
        /*To check Air Pipe Toggle*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({ force: true });
        cy.wait(5000)

        /*Click on PDV direction icon to move at original side - Stright*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click();
        cy.wait(5000)
        /*Click on PDV SM icon to move back PDV form Service Mode*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
        cy.wait(5000)

        /*Click on Compactor to Stop*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click();
        cy.wait(5000)
        /*Check the Compactor Toggle */
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').check({ force: true });
        cy.wait(5000)

        /*To chekc the Compactor NO/OFF toggle*/
        cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').uncheck({ force: true });
        cy.wait(5000)

        /*Click on Container SM icon to move back from Container Service Mode*/
        cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
        cy.wait(5000)

        // Logout
        cy.get('.lw-header__logout > img').click();
        cy.wait(5000)

    })
})