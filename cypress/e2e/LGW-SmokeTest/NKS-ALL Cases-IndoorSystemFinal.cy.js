///<reference types="cypress"/>

describe('LGW-QGUI-AT-NKS', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
		cy.session('loginSession', () => {
				cy.login();
				cy.wait(5000)
			})
	})
	
		it('TC-001-> English Language-> Expand Accordians(Container-FanGroup- Global Toggle) -> Inlets & Bottom Part', () =>{

        	cy.visit('/');
			cy.wait(3000)
						
			cy.extendSessionTime()
			cy.wait(1000)
			cy.get('.lw-toasts__toast').should('be.visible')
			.and('contain.text', 'Session Extended')
			.and('contain.text', 'The current session gets extended by 30 minutes.')
			cy.wait(5000)
			
			cy.expandAccordionsGlobalToggleFlag();
			cy.wait(3000)
			
			
		})

		it('TC-005-> Overview-> Add Components(AIV/Inlet/FractionSwitch-4)in Control View -> ServiceMode -> Valve Open/Close -> From Service To Normal', () =>{

            cy.visit('/');
            cy.wait(5000)
			cy.expandAccordionsGlobalToggleFlag()
			
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
			/*Fire Damper Valve Open - Click on Toggle*/
			cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(10000)

			/*AIV Valve Open - Click on Toggle*/
			cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(10000)

			/*Inlet - Move in Service Mode*/
			cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
			/*Fraction Switch-4 -> Move in Service Mode*/
			cy.get('.control-view-main__sidebar > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
			/*FractionSwitch-4- FireDamper - Open Valve*/
			cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true})
			cy.wait(10000)

			/* === Fraction Switch-4 -> Fraction-1 - Valve Open in Service Mode ====*/
			cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(10000)

			/*Fraction Switch-4 -> Fraction-2 - Valve Open in Service Mode*/
			cy.get(':nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(10000)

			/*Fraction Switch-4 -> Fraction-4 - Valve Open in Service Mode*/
			cy.get('.cv-bp-fractions > :nth-child(4) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(10000)

			/*==== Fraction Switch-4 -> Fraction-1 - Valve Close in Service Mode ====*/
			cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(5000)
				
			/*Fraction Switch-4 -> Fraction-2 - Valve Close in Service Mode*/
			cy.get(':nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(10000)

			/*Fraction Switch-4 -> Fraction-4 - Valve Close in Service Mode*/
			cy.get('.cv-bp-fractions > :nth-child(4) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(5000)

			/*Aligned with Fraction-2 from Fraction3*/
			cy.get(':nth-child(2) > .cv-bp-fraction__wrapper > .lw-switch').click({force: true});
			cy.wait(5000)

			/*Fraction Switch-4 -> Move in Normal state from Service Mode*/
			cy.get('.control-view-main__sidebar > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch__sm-active > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
			/*Inlet - Move to Normal state from Service Mode*/
			cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch__sm-active > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
			/*AIV - Move to Normal state from Service Mode*/
			cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
					
		})
						
		it('TC-006-> Overview-> Remove All components of Waste from Control View - Click on Clear All button', () =>{
			cy.visit('/');
			cy.expandAccordionsGlobalToggleFlag();

			/*ADD AIV in Control View*/
			cy.get(':nth-child(6) > .ov-main__wrapper > :nth-child(1) > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"]').click({force: true});
			cy.wait(5000)
			/*ADD Inlet which is associated of selected AIV in Control View*/
			cy.get(':nth-child(6) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > .accordion > .accordion__item > #accordion__panel-shaftNodeVerticle > .shaft-node-card__content > [style="padding: 0.3em;"] > [style="border-bottom: 1px solid rgb(195, 210, 210);"] > :nth-child(1) > .s-n-inlet__name > span').click({force: true});
			cy.wait(5000)
			/*ADD Fraction Switch-4 in Control View which is associated with above Inlet*/
			cy.get(':nth-child(6) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > [style="display: flex; flex-direction: column;"] > .shaft-node-bottom-part > :nth-child(1) > .s-n-b-p-fractions__wrapper > span').click({force: true});
			cy.wait(5000)
		
		    /*Remove All components from Control View - Click on Clear All button*/
			cy.get('.control-view__action-primary > [data-test] > .btn > .button__label').click({force: true});
			cy.wait(5000)					
					
		})

		it('TC-007-> Overview-> Add Components(Laundry Cart)in Control View-> ServiceMode-> Start/Stop/Forward Move/Backwoard Move/Cart Changed-> From Service To Normal', () => {
			
			cy.visit('/');
			cy.expandAccordionsGlobalToggleFlag();

			/*====== Laundry Cart Cases =====*/

			//290-T- Group - Inlet add in control  view
			cy.get(':nth-child(2) > .ov-main__wrapper > .ov-shaft > :nth-child(1) > .ov-shaft-node-card > .s-n-v > .accordion > .accordion__item > #accordion__panel-shaftNodeVerticle > .shaft-node-card__content > [style="padding: 0.3em;"] > [style="border-bottom: 1px solid rgb(195, 210, 210);"] > :nth-child(1) > .s-n-inlet__name > span').click({force: true});
			cy.wait(3000)
			//290-T- Group - Cart add in control  view
			cy.get(':nth-child(1) > .ov-shaft-node-card > .s-n-v > [style="display: flex; flex-direction: column;"] > .shaft-node-bottom-part > .ov-shaft-node-carts > :nth-child(1) > .ov-shaft-node-cart > .ov-shaft-node-cart__wrapper').click({force: true});
			cy.wait(3000)
			//290-T- Group - Inlet -move in Service Mode
			cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -move in Service Mode
			cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -BreakDamper Open
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -BreakDamper Open - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -BreakDamper Close
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -BreakDamper Close - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -CartSwitch from 1-> 2
			cy.get('.cv-cart__fraction-inactive > .cv-cart__wrapper > .lw-switch').click({force: true});
			cy.wait(10000)
			//290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Open
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Open - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Close
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Close - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
			cy.wait(3000)
			//290-T- Group - Cart - Move in Normal from Service Mode
			cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
			//290-T- Group - Inlet - Move in Normal from Service Mode
			cy.get('.lw-switch__sm-active > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Inlet - Add in Control View
			cy.get('.control-view__action-primary > [data-test] > .btn > .button__label').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Inlet - Add in Control View
			cy.get(':nth-child(2) > .ov-main__wrapper > .ov-shaft > :nth-child(7) > .ov-shaft-node-card > .s-n-v > .accordion > .accordion__item > #accordion__panel-shaftNodeVerticle > .shaft-node-card__content > [style="padding: 0.3em;"] > [style="border-bottom: 1px solid rgb(195, 210, 210);"] > :nth-child(1) > .s-n-inlet__name > span').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - Add in Control View
			cy.get(':nth-child(7) > .ov-shaft-node-card > .s-n-v > [style="display: flex; flex-direction: column;"] > .shaft-node-bottom-part > .ov-shaft-node-carts > :nth-child(1) > .ov-shaft-node-cart > .ov-shaft-node-cart__wrapper > span').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Inlet - Move in Service Mode
			cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - Move in Service Mode
			cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - Belt move in forward direction
			cy.get(':nth-child(4) > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - Belt move in backward direction
			cy.get(':nth-child(2) > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - Belt STOP
			cy.get(':nth-child(3) > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - BreakDamper Open
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - BreakDamper Open - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - BreakDamper Close
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - BreakDamper Close - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - CartSwitch from 1-> 2
			cy.get('.cv-cart__fraction-inactive > .cv-cart__wrapper > .lw-switch > .lw-switch__label').click({force: true});
			cy.wait(10000)
			//140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Open
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Open - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Close
			cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Close - Check
			//cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
			cy.wait(3000)
			//140S-T- Group - Cart - Move in Normal from Service Mode
			cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
			//140S-T- Group - Inlet - Move in Normal from Service Mode
			cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch__sm-active > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//Clear All from Control View
			cy.get('.control-view__action-primary > [data-test] > .btn > .button__label').click({force: true});
			cy.wait(3000)
		})

		it('TC-008-> Container-> PDV-> Service Mode-> Operation(PDV Direction Change, Air/Material Side Pipe Valve Open/Close)', () => {
			
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

		it('TC-009-> Fan Group-> Service Mode-> On/Off-> Back to Normal from Service Mode', () => {
			
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

		it('TC-010-> ResolveBlockage-> WithAIV-ServiceMode-> Operation(FireDamper/AIV/FractionSwitch/Aligned For Another Fraction)-> Back To Normal From Service Mode', {scrollBehavior: false}, () => {
			cy.visit('/');
			cy.expandAccordionsGlobalToggleFlag();
			cy.wait(3000)

			//Resolve Blockage - Selection
			cy.get('[data-test="resolve_blockage"]').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Click on AIV dropdown
			cy.get('.air-inlet-valve__size > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Selection of AIV
			cy.get('#react-select-7-option-0').click({force: true})
			cy.wait(3000)
			//Resolve Blockage - AIV in Service Mode
			cy.get('.air-inlet-valve__control-inner > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(5000)
			//Resolve Blockage - AIV in Service Mode - FireDamper - Open Valve
			cy.get('.air-inlet-valve__control-inner > :nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(5000)
			//Resolve Blockage - AIV in Service Mode - AIV - Open Valve
			cy.get(':nth-child(3) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(5000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode
			cy.wait(3000)
			cy.get('.shaftIDx-0 > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode - FireDamper - Open Valve
			cy.get(
			'.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode - Fraction 1 - Open Valve
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(1) > .fs-valve-inner > .lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode - Fraction 2 - Open Valve
			cy.wait(3000)
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(2) > .fs-valve-inner > .lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode - Fraction 4 - Open Valve
			cy.wait(3000)
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(4) > .fs-valve-inner > .lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode - Fraction 4 - Close Valve
			cy.wait(3000)
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(4) > .fs-valve-inner > .lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode - Fraction 2 - Close Valve
			cy.wait(3000)
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(2) > .fs-valve-inner > .lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Service Mode - Fraction 1 - Close Valve
			cy.wait(3000)
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(1) > .fs-valve-inner > .lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)

			//Resolve Blockage - FractionSwitch 4 - Service Mode - FireDamper - Close Valve
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)

			//Resolve Blockage - FractionSwitch 4 - Service Mode - Aligned Fraction 2 From 3
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > .node__fs-wrapper > .fs-control > :nth-child(2) > .fs-valve-inner > [style="display: flex;"] > .lw-switch > .lw-switch__label').click({force: true});
			cy.wait(3000)

			cy.get('.shaftIDx-0 > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			cy.get(':nth-child(3) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - FractionSwitch 4 - Back To Normal From Service Mode
			cy.get('.air-inlet-valve__control-inner > :nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
			cy.wait(3000)

			//Resolve Blockage - AIV - Back To Normal From Service Mode
			cy.get('.air-inlet-valve__control-inner > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
		})

		it('TC-011-> ResolveBlockage-> WithOUT AIV-ServiceMode-> Operation(FireDamper/AIV/FractionSwitch/Aligned For Another Fraction)->Back To Normal From Service Mode', {scrollBehavior: false}, function() {
			cy.visit('/')
			cy.expandAccordionsGlobalToggleFlag();
		
			//Resolve Blockage - Selection
			cy.get('[data-test="resolve_blockage"]').click({force: true});
			cy.wait(3000)
		
			//Resolve Blockage - Without AIV - Laundry Cart - Click on AIV dropdown for selection of "Without AIV" option
			cy.get('.air-inlet-valve__size > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart - Selection of "Without AIV"
			cy.get('#react-select-7-option-4').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart - Expand All Carts via Global Toggle
			cy.get('.shafts__wrapper > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart (U290-T-LC) - In Service Mode 
			cy.get('.shaftIDx-0 > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart (U290-T-LC) - In Service Mode - BreakDamper - Valve Open
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; width: 68px;"] > [style="display: flex; flex-direction: row;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)
		
			//Resolve Blockage - Without AIV - Laundry Cart (U290-T-LC) - In Service Mode - BreakDamper - Valve Close
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; width: 68px;"] > [style="display: flex; flex-direction: row;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)
		
			//Resolve Blockage - Without AIV - Laundry Cart (U290-T-LC) - In Service Mode - Cart Position Changed - From 2 TO 1
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > .cv-carts > .cv-cart__fraction-inactive > .cv-cart__wrapper > .lw-switch > .lw-switch__label').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart (U290-T-LC) - In Service Mode - Cart Position Changed - From 2 TO 1 - BreakDamper - Valve Open
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; width: 68px;"] > [style="display: flex; flex-direction: row;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)
		
			//Resolve Blockage - Without AIV - Laundry Cart (U290-T-LC) - In Service Mode - Cart Position Changed - From 2 TO 1 - BreakDamper - Valve Close
			cy.get('.shaftIDx-0 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; width: 68px;"] > [style="display: flex; flex-direction: row;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)
		
			//Resolve Blockage - Without AIV - Laundry Cart (U290-T-LC) - Back To Normal From Service Mode
			cy.get('.shaftIDx-0 > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart (U140S-T-LC) - In Service Mode 
			cy.get('.shaftIDx-6 > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart (U140S-T-LC) - In Service Mode - BreakDamper - Valve Open
			cy.get(
			  '.shaftIDx-6 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; width: 68px;"] > [style="display: flex; flex-direction: row;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)
		
			//Resolve Blockage - Without AIV - Laundry Cart (U140S-T-LC) - In Service Mode - BreakDamper - Valve Close
			cy.get(
			  '.shaftIDx-6 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > [style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; width: 68px;"] > [style="display: flex; flex-direction: row;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider'
			).click({force: true});
			cy.wait(3000)
		
			//Resolve Blockage - Without AIV - Laundry Cart (U140S-T-LC) - In Service Mode - Cart Position Changed - From 2 TO 1
			cy.get('.shaftIDx-6 > [style="display: grid; grid-auto-flow: column; gap: 3px;"] > [style="display: flex; flex-direction: column; padding-left: 6px;"] > .shaft__node-parent > [style="margin-top: 4px;"] > .cv-carts > .cv-cart__fraction-inactive > .cv-cart__wrapper > .lw-switch > .lw-switch__label').click({force: true});
			cy.wait(3000)
			//Resolve Blockage - Without AIV - Laundry Cart (U140S-T-LC) - Back To Normal From Service Mode
			cy.get('.shaftIDx-6 > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
			cy.wait(3000)

		})

		it('TC-012-> Collecting Cycle -> Paused -> Validate the Paused Text-> Unpaused -> Finish Collecting Cycle', () =>{

			cy.visit('/') //Visit the URL
			cy.wait(5000)
	
			cy.expandAccordionsGlobalToggleFlag()
			cy.wait(3000)


				 // NKS - Blandpapper - Single Shaft
					 cy.get('#accordion__heading-manualEmpty').click(); // Click on Create Queued group
					 cy.wait(3000)
					 cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click(); //Click on fraction dropdown
					 cy.wait(3000)
					 
					 cy.get("#react-select-2-option-0").click(); // Select Fraction from dropdown-NKS - Blandpapper.
					 
					 cy.wait(3000)
					 cy.get("#quantum-root div.lw-select__placeholder").click(); // Click on Inlet dropdown.
					 cy.wait(3000)
					 cy.get('#react-select-4-option-1').click(); // Select Inlet-1
					 //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
					 //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
					 cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click(); // Click on Submitt button.
											
					
					cy.wait(5000)
					// NKS-Pappersoft - Single Shaft
					//cy.get('#accordion__heading-manualEmpty').click(); // Click on Create Queued group
					//cy.wait(3000)
					cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder')
					.click({force: true}); //Click on fraction dropdown
					cy.wait(3000)
					
					cy.get('#react-select-2-option-1').click(); // Select Fraction from dropdown-NKS-Pappersoft
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
					
					cy.get('.pcontainer').should('be.visible').click() // Click on Paused to ongoing Collecting.

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
					//cy.get('.lw-header__logout > img').click() //logout

		})

		it('TC-013-> Collecting Cycle -> Abort -> Validate the Abort Text-> Start Next Queue -> Finish Collecting Cycle', () =>{


			cy.visit('/') //Visit the URL
			cy.wait(5000)
	
			cy.expandAccordionsGlobalToggleFlag()
			cy.wait(3000)


				 /**NKS - Blandpapper - Single Shaft**/
					 cy.get('#accordion__heading-manualEmpty').click({force: true}); // Click on Create Queued group
					 cy.wait(3000)
					 cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true}); //Click on fraction dropdown
					 cy.wait(3000)
					 
					 cy.get("#react-select-2-option-0").click({force: true}); // Select Fraction from dropdown-NKS - Blandpapper .
					 
					 cy.wait(3000)
					 cy.get("#quantum-root div.lw-select__placeholder").click({force: true}); // Click on Inlet dropdown.
					 cy.wait(3000)
					 cy.get('#react-select-4-option-1').click({force: true}); // Select Inlet-1
					 //cy.get('#react-select-4-option-2').click(); // Select Inlet-2
					 //cy.get('#react-select-4-option-3').click(); // Select Inlet-3
					 cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click({force: true}); // Click on Submitt button.
					 cy.wait(3000)

					cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder')
					.click({force: true}); //Click on fraction dropdown
					cy.wait(3000)

					// Select Fraction from dropdown-NKS - Pappersoft 
					cy.get('#react-select-2-option-1').click({force: true});
					cy.wait(3000)

					// Click on Inlet dropdown.
					cy.get("#quantum-root div.lw-select__placeholder").click({force: true});
					cy.wait(3000)
					cy.get('#react-select-4-option-1').click(); // Select Inlet-1
					//cy.get('#react-select-4-option-2').click(); // Select Inlet-2
					//cy.get('#react-select-4-option-3').click(); // Select Inlet-3
					
					// Click on Queued Group
					cy.get('#accordion__heading-upcomingTask').click({force: true})
					cy.wait(3000)

					// Click on Submitt button.
					cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click({force: true});
					cy.wait(10000)

					// Click on Abort to ongoing emptying.
					cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn')
					.should('be.visible')
					.click({force: true}) 

					cy.wait(10000)
					
					if (cy.get('.lw-header__left > span').should('have.text', 'AVSLUTAR EMPTY INTERRUPT: FLÄKTKONTROLL:CIWO INTERRUPT EMPTY')) {
							//
							   cy.log('Collecting has been interrupt successfully.')
							   cy.wait(150000)
							   cy.log('Collecting has completed for next shaft successfully')

					} else {
						cy.log('Collecting has NOT been interrupted.') 
						cy.wait(200000)
						cy.log('Collecting has completed for all shafts successfully')
					}

					//cy.wait(5000) 
					//cy.get('.lw-header__logout > img').click({force: true}) //logout

		})

		it('TC-014-> Semi Auto Collecting Cycle For Indoor System', () => {
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
           
		it('TC-002 -> English Language Text Verification', () =>{

            cy.visit('/');
            cy.wait(5000)
			//cy.expandAccordionsGlobalToggleFlag()
	
			//**Choose language Swedish to English */
			cy.get(':nth-child(1) > .select-language__flag--img').click()
			cy.wait(10000)
					//Do something
					cy.log("English language is selected, so performing the actions")
					cy.wait(3000)

					cy.get('#accordion__heading-container').click({force : true})
					cy.wait(5000)
					cy.get('#accordion__heading-container').contains("Container")// container
					cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Speed") // Speed
					cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frequency") // Frequency
					cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Diff. Pressure") // Container Diff Pressure
											
					cy.get('[data-test="logs"]').should('have.text', 'Logs') // Verify the text 'Logs' in English language

					// Logs tab details
					cy.get('[data-test="logs"]').click({force: true})
					cy.wait(5000)
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').should('have.text', 'Time')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').should('have.text', 'ID')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').should('have.text', 'Display Message')  

					cy.get('[data-test="alarms"]').should('have.text', 'Alarms') // Verify the text 'Alarms' in English language
					
					// Alarm Tab Details
					cy.get('[data-test="alarms"]').should('have.text', 'Alarms').click({force: true})
					cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Code')
					cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Name:Id')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Description')
					cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Appeared')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')

					cy.get('[data-test="alarms_history"]').should('have.text', 'Alarms History') // Verify the text 'Alarms History' in English language
					
					// Alarm History Tab Details
					cy.get('[data-test="alarms_history"]').should('have.text', 'Alarms History').click({force: true})
					cy.get('.MuiTableRow-root > :nth-child(1) > .MuiButtonBase-root').should('have.text', 'Code')
					cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Fixed')
					cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Name:Id')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Description')
					cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Appeared')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')
					
					// Overview & Resolve Blockage
					cy.get('[data-test="overview"]').should('have.text', 'Overview') // Verify the text 'Overview' in English language
					cy.get('[data-test="resolve_blockage"]').should('have.text', 'Resolve Blockage') // Verify the text 'Resolve Blockage' in English language
					
					// Create Queued Group - Text verification
					//cy.get('#accordion__heading-raa-2').contains("Create Queued Group")
					cy.get('#accordion__heading-manualEmpty').contains("Create Queued Group")
					cy.get('#accordion__heading-manualEmpty > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Submit')
					cy.get('#accordion__heading-manualEmpty').click({force: true})                        
					cy.xpath("//div[@data-test='manual-empty-select-fraction']//label[1]").contains("Fraction") // Fraction
					cy.xpath("//label[normalize-space()='Container']").contains("Container") // Container 
					cy.xpath("//label[normalize-space()='Emptying of one open ISV']").contains("Emptying of one open ISV") // Emptying of one open ISV label
					cy.get('[data-test="manual-empty-select-inlet-points"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').contains("Select Intermediate Storage Volume") // Select Intermediate Storage Volume

					// Ongoing Group - Text verification
					cy.get('#accordion__heading-ongoingTask').contains("Ongoing Group")
					cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Abort')
					
					// Queued Groups - Text verification
					cy.get('#accordion__heading-upcomingTask').contains("Queued Groups")

					// Control View - Text verification
					cy.get('#accordion__heading-controlView').contains("Control View")
					
					// Logged Users - Text verification
					cy.get('.active-users__action-label > [style="padding: 2px;"]').contains("Users")
					cy.wait(5000)
		})

		it('TC-003 -> Swedish Language Text Verification', () => {
            cy.visit('/');
            cy.wait(5000)
			//cy.expandAccordionsGlobalToggleFlag()	
			
			// Swedish Language Text Verification
					cy.get(':nth-child(2) > .select-language__flag--img').click({force: true})
					cy.wait(15000)
					cy.log("Swedish language is selected, so performing the actions")
					cy.wait(3000)
					
					cy.get('#accordion__heading-container').click({force : true})
					cy.wait(5000)
					cy.get('#accordion__heading-container').contains("Container")
					cy.wait(5000)
					cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Lufthastighet")
					cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frekvens") // Verify the text Frequecy
					cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Diff. Tryck") // Verify the text 'Container Diff Pressure'
					
					cy.get('[data-test="logs"]').should('have.text', 'Loggar') // Verify the text 'Logs' in Swedish language

					// Logs tab details
					cy.get('[data-test="logs"]').click({force: true})
					cy.wait(5000)
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').should('have.text', 'Tid')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').should('have.text', 'ID')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').should('have.text', 'Visa meddelande')  

					cy.get('[data-test="alarms"]').should('have.text', 'Larm') // Verify the text 'Alarms' in Swedish language
					
					// Alarm Tab Details
					cy.get('[data-test="alarms"]').should('have.text', 'Larm').click({force: true})
					cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Kod')
					cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Namn:Id')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivning')
					cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Uppstod')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')

					cy.get('[data-test="alarms_history"]').should('have.text', 'Larmhistorik') // Verify the text 'Alarms History' in Swedish language
					
					// Alarm History Tab Details
					cy.get('[data-test="alarms_history"]').should('have.text', 'Larmhistorik').click({force: true})
					cy.get('.MuiTableRow-root > :nth-child(1) > .MuiButtonBase-root').should('have.text', 'Kod')
					cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Löst')
					cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Namn:Id')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivning')
					cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Uppstod')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')
					
					// Overview & Resolve Blockage
					cy.get('[data-test="overview"]').should('have.text', 'Översikt') // Verify the text 'Overview' in Swedish language
					cy.get('[data-test="resolve_blockage"]').should('have.text', 'Åtgärda stopp') // Verify the text 'Resolve Blockage' in Swedish language
					
					// Create Queued Group - Text verification in Swedish
					cy.get('#accordion__heading-manualEmpty').contains("Skapa köad grupp")
					cy.get('#accordion__heading-manualEmpty > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Skicka in')
					cy.get('#accordion__heading-manualEmpty').click({force: true})
					cy.xpath("//div[@data-test='manual-empty-select-fraction']//label[1]").contains("fraktion") // Fraction
					cy.xpath("//label[normalize-space()='container']").contains("container") // container
					cy.xpath("//label[normalize-space()='Tömningen av en öppen ISV']").contains("Tömningen av en öppen ISV") // Emptying of one open ISV label
					cy.get('[data-test="manual-empty-select-inlet-points"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').contains("Välj Mellanlagringsvolym") // Select Intermediate Storage Volume

					// Ongoing Group - Text verification in Swedish
					cy.get('#accordion__heading-ongoingTask').contains("Pågående Grupp")
					cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Avbryt')
					
					// Queued Groups - Text verification in Swedish
					cy.get('#accordion__heading-upcomingTask').contains("Köad Grupper")

					// Control View - Text verification in Swedish
					cy.get('#accordion__heading-controlView').contains("Kontrollvy")
					
					// Logged Users - Text verification in Swedish
					cy.get('.active-users__action-label > [style="padding: 2px;"]').contains("Användare")

					cy.wait(5000)

		})

		it('TC-004 -> Norwegian Language Text Verification', () => {

            cy.visit('/');
            cy.wait(5000)
			//cy.expandAccordionsGlobalToggleFlag()

					//Norwegian Language Text Verification
			
					cy.get(':nth-child(3) > .select-language__flag--img').click({force: true})
					cy.wait(10000)
					cy.log("Norwegian language is selected, so performing the actions")
					cy.wait(3000)

					//cy.get('#accordion__heading-container > :nth-child(1)').contains("Container")
					cy.get('#accordion__heading-container').click({force : true})
					cy.wait(5000)
					cy.get('#accordion__heading-container').contains("Container")
					cy.wait(5000)
					cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Lufthastighet")                        
					cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frekvens")
					cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Differensial trykk")
											
					cy.get('[data-test="logs"]').should('have.text', 'Logger') // Verify the text 'Logs' in Norwegian language

					// Logs tab details
					cy.get('[data-test="logs"]').click({force: true})
					cy.wait(5000)
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').should('have.text', 'Tid')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').should('have.text', 'ID')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').should('have.text', 'Vis melding')  

					
					cy.get('[data-test="alarms"]').should('have.text', 'Alarm') // Verify the text 'Alarms' in Norwegian language
					
					// Alarm Tab Details
					cy.get('[data-test="alarms"]').should('have.text', 'Alarm').click({force: true})
					cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Kode')
					cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Navn:Id')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivelse')
					cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Oppstod')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')

					cy.get('[data-test="alarms_history"]').should('have.text', 'Alarmhistorikk') // Verify the text 'Alarms History' in Norwegian language
					
					// Alarm History Tab Details
					cy.get('[data-test="alarms_history"]').should('have.text', 'Alarmhistorikk').click({force: true})
					cy.get('.MuiTableRow-root > :nth-child(1) > .MuiButtonBase-root').should('have.text', 'Kode')
					cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Løst')
					cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Navn:Id')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivelse')
					cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Oppstod')
					cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')
					
					// Overview & Resolve Blockage
					cy.get('[data-test="overview"]').should('have.text', 'Oversikt') // Verify the text 'Overview' in Norwegian language
					cy.get('[data-test="resolve_blockage"]').should('have.text', 'Løs blokkering') // Verify the text 'Resolve Blockage' in Norwegian language
					
					// Create Queued Group - Text verification in Norwegian
					cy.get('#accordion__heading-manualEmpty').contains("Opprett I kø Gruppe")
					//cy.get('#accordion__heading-raa-2').contains("Opprett gruppe i kø")
					cy.get('#accordion__heading-manualEmpty > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Sende inn')
					cy.get('#accordion__heading-manualEmpty').click({force: true})
					cy.xpath("//div[@data-test='manual-empty-select-fraction']//label[1]").contains("Fraksjon") // Fraction
					cy.xpath("//label[normalize-space()='Container']").contains("Container") // Container
					cy.xpath("//label[normalize-space()='Tømmingen av én åpen ISV']").contains("Tømmingen av én åpen ISV") // Emptying of one open ISV label
					cy.get('[data-test="manual-empty-select-inlet-points"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').contains("Velge Mellomlagringsvolum") // Select Intermediate Storage Volume

					// Ongoing Group - Text verification in Norwegien
					cy.get('#accordion__heading-ongoingTask').contains("PGjeldende Gruppe")
					//cy.get('#accordion__heading-ongoingTask').contains("Pågående gruppe")
					cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Avbryt')
					
					// Queued Groups - Text verification in Norwegien
					cy.get('#accordion__heading-upcomingTask').contains("I kø Grupper")
					//cy.get('#accordion__heading-upcomingTask').contains("Grupper i kø")
					
					// Control View - Text verification in Norwegien
					cy.get('#accordion__heading-controlView').contains("Kontrollvisning")
					
					// Logged Users - Text verification in Norwegien
					cy.get('.active-users__action-label > [style="padding: 2px;"]').contains("Brukere")
					
					//cy.get('.lw-header__logout > img').click({force: true}) //logout
					cy.wait(5000)


		})

		it('TC-015 -> Logout from the application', () => {
            cy.visit('/');
			cy.wait(3000)
            /*logout*/
            cy.get('.lw-header__logout > img').click({force: true})
        })
						
})