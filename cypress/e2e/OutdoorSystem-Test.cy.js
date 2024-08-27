describe('template spec', () => {

  beforeEach(() => {
    cy.login('manoj.kumar@logiwaste.se', 'M@noj!23$')
   })

  
  /* ==== Test Created with Cypress Studio ==== */
  it('Outdoor-Overview-ServiceMode', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8081/gui');
   
    cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se');
    cy.wait(5000)
    cy.get('[data-test="password"] > input').type('M@noj!23$');
    cy.wait(5000)
    cy.get('.button__label').click({force: true});
    cy.wait(15000)

  /*Choose English Flag to change the labels/Texts in English from Swedish*/
    cy.get(':nth-child(1) > .select-language__flag--img').click({force: true});
    cy.wait(10000)
    /*Expand Container Section*/
    cy.get('#accordion__heading-container').click({force: true});
    cy.wait(5000)
    /*Expand FanGroup Section*/
    cy.get('#accordion__heading-airSpeed').click({force: true});
    /*Expand All ISV Groups with Global Toggle button*/
    cy.wait(5000)
    cy.get('.overview__wrapper > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
    /*Check All ISV Groups with Global Toggle button*/
    cy.get('.overview__wrapper > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
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
    cy.wait(5000)
    /*Fire Damper Valve Open Check - Toggle move to Open side*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    /*AIV Valve Open - Click on Toggle*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    /*AIV Valve Open Check - Toggle move to Open side*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    /*Inlet - Move in Service Mode*/
    cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Move in Service Mode*/
    cy.get('.control-view-main__sidebar > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    /*FractionSwitch-4- FireDamper - Open Valve*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true})
    cy.wait(5000)
    /*FractionSwitch-4- FireDamper - Open Valve Check*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true})
    cy.wait(5000)
    
    /*Fraction Switch-4 -> Fraction-1 - Valve Open in Service Mode*/
    cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-1 - Valve Open Check*/
    cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-2 - Valve Open in Service Mode*/
    cy.get(':nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-2 - Valve Open Check*/
    cy.get(':nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-4 - Valve Open in Service Mode*/
    cy.get('.cv-bp-fractions > :nth-child(4) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-4 - Valve Open Check*/
    cy.get('.cv-bp-fractions > :nth-child(4) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    
    /*Fraction Switch-4 -> Fraction-1 - Valve Close in Service Mode*/
    cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-1 - Valve Close Check*/
    //--cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    
    /*Fraction Switch-4 -> Fraction-2 - Valve Close in Service Mode*/
    cy.get(':nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-2 - Valve Close Check*/
    //--cy.get(':nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    
    /*Fraction Switch-4 -> Fraction-4 - Valve Close in Service Mode*/
    cy.get('.cv-bp-fractions > :nth-child(4) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    /*Fraction Switch-4 -> Fraction-4 - Valve Close Check*/
    //--cy.get('.cv-bp-fractions > :nth-child(4) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    
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
    /*Remove All components from Control View - Click on Clear All button*/
    cy.get('.control-view__action-primary > [data-test] > .btn > .button__label').click({force: true});
    cy.wait(5000)

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
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    //290-T- Group - Cart -BreakDamper Close
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    //290-T- Group - Cart -BreakDamper Close - Check
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    //290-T- Group - Cart -CartSwitch from 1-> 2
    cy.get('.cv-cart__fraction-inactive > .cv-cart__wrapper > .lw-switch').click({force: true});
    cy.wait(10000)
    //290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Open
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    //290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Open - Check
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    //290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Close
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    //290-T- Group - Cart -CartSwitch from 1-> 2 - BreakDamper Close - Check
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
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
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    //140S-T- Group - Cart - BreakDamper Close
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    //140S-T- Group - Cart - BreakDamper Close - Check
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    //140S-T- Group - Cart - CartSwitch from 1-> 2
    cy.get('.cv-cart__fraction-inactive > .cv-cart__wrapper > .lw-switch > .lw-switch__label').click({force: true});
    cy.wait(10000)
    //140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Open
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    //140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Open - Check
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    //140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Close
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    //140S-T- Group - Cart - CartSwitch from 1-> 2 - BreakDamper Close - Check
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
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
  
  
  /*Container - PDV - Service Mode & Operation*/
  //Container section - Expand
    cy.get('#accordion__heading-container').click({force: true});
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
    // Material Side Valve - Open
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    // Material Side Valve - Open - Check
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Air Side Right/Left Valve - Open
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    // Air Side Right/Left Valve - Open - Check
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Material Side Valve - Close
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    // Material Side Valve - Close - Check
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(3) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    // Air Side Right/Left Valve - Close
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    // Air Side Right/Left Valve - Close - Check
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    // Filter Container - Move to Normal from Service Mode
    cy.get(':nth-child(1) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(3000)
    
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
    // Logout
    cy.get('.lw-header__logout > img').click({force: true});
    /* ==== End Cypress Studio ==== */

  })


  
  
});
