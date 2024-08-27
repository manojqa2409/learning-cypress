///<reference types="cypress"/>

describe('Overview-ControlView-ServiceMode', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{

            cy.session('loginSession', () => {
                cy.login();
                cy.wait(5000)
            })
	})

    it('TC-001-> Add Components(AIV/Inlet/FractionSwitch-4)in Control View -> ServiceMode -> Valve Open/Close -> From Service To Normal', () =>{

        cy.visit('/')
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
        /*Fire Damper - check it is NOT Open*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('not.be.checked');
        /*Fire Damper Valve Open - Click on Toggle*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        //cy.wait(300000)
        cy.wait(5000)
        /*Fire Damper - After Open check it's Open or NOT*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('be.checked')
        cy.wait(5000)

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
                    
    it('TC-002-> Remove All components of Waste from Control View - Click on Clear All button', () =>{
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

    it('TC-003-> Add Components(Laundry Cart)in Control View-> ServiceMode-> Start/Stop/Forward Move/Backwoard Move/Cart Changed-> From Service To Normal', () => {
        
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
})