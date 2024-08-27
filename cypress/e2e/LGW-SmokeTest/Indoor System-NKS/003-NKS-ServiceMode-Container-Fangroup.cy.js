///<reference types="cypress"/>

describe('Container-Fangroup-ServiceMode', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
		cy.session('loginSession', () => {
				cy.login();
				cy.wait(5000)
			})
	})

    it('TC-001-> PDV-> Service Mode-> Operation(PDV Direction Change, Air/Material Side Pipe Valve Open/Close)', () => {
			
        cy.visit('/');
        cy.expandAccordionsGlobalToggleFlag();

        /*Container - PDV - Service Mode & Operation*/
        //Container section - Expand
        /*cy.get('#accordion__heading-container').click({force: true});*/
        cy.wait(3000)
        //PDV - Move into Service Mode
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)
        // PDV Direction - From Straight to Side
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click({force: true});
        cy.wait(3000)
        // Compactor Container - Move into Service Mode
        cy.get(':nth-child(5) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)
        // Material Side Valve Open
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Material Side Valve Open - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(3000)
        // Air Side Valve Open
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Air Side Valve Open - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(3000)
        // Compactor - Start
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Compactor - Start - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(3000)
        // Compactor - Stop
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
        cy.wait(3000)
        // Compactor - Stop - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(3000)
        // Material Side Valve Close
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Material Side Valve Close - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(3000)
        // Air Side Valve Close
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Air Side Valve Close - Check
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(3000)
        // Compactor Container - Move to Normal from Service Mode
        cy.get(':nth-child(5) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)
        // PDV Direction - Side to Straight
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click({force: true});
        cy.wait(3000)
        // PDV - Move to Normal from Service Mode
        cy.get(':nth-child(5) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)
        // Filter Container - Move to Service Mode
        cy.get(':nth-child(1) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)
        // Filter Container - Material Side Valve - Open
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Filter Container - Material Side Valve - Open - Check
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(3000)
        // Filter Container - Air Side Right/Left Valve - Open
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Filter Container - Air Side Right/Left Valve - Open - Check
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
        cy.wait(3000)
        // Filter Container - Material Side Valve - Close
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Filter Container - Material Side Valve - Close - Check
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(3000)
        // Filter Container - Air Side Right/Left Valve - Close
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(3000)
        // Filter Container - Air Side Right/Left Valve - Close - Check
        cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
        cy.wait(3000)
        // Filter Container - Move to Normal from Service Mode
        cy.get(':nth-child(1) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)

    })

    it('TC-006-> Fan Group-> Service Mode-> On/Off-> Back to Normal from Service Mode', () => {
        
        cy.visit('/');
        cy.get(':nth-child(1) > .select-language__flag--img').click({force: true});
        cy.wait(10000)
        
        /*Fan Group - Service Mode*/
        // Fan Group Section - Expand
        cy.get('#accordion__heading-airSpeed').click({force: true});
        cy.wait(3000)
        // Fan Group - Move in Service Mode
        cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)
        // Fan Group - Move in Normal from Service Mode
        cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(3000)

    })

})