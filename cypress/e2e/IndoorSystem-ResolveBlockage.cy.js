describe('template spec', () => {

  beforeEach(() =>{

    cy.session('loginSession', () => {
        
        cy.login();
        
      })
    })

  /* ==== Test Created with Cypress Studio ==== */
  it('IndoorSystem-ResolveBlockage-ServiceMode-With AIV - Valve-Open/Close', {scrollBehavior: false}, function() {

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
    cy.wait(3000)
    //Resolve Blockage - AIV in Service Mode - FireDamper - Open Valve
    cy.get('.air-inlet-valve__control-inner > :nth-child(2) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
    //Resolve Blockage - AIV in Service Mode - AIV - Open Valve
    cy.get(':nth-child(3) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(3000)
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

  it('IndoorSystem-ResolveBlockage-ServiceMode-Without AIV - Valve-Open/Close', {scrollBehavior: false}, function() {
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
    // Logout
    cy.get('.lw-header__logout > img').click({force: true});
    /* ==== End Cypress Studio ==== */
  });
})