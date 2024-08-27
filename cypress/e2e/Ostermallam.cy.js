describe('Ostermallam', () => {

  beforeEach (() => {

		cy.session('loginSession', () => {
			cy.login();
			cy.wait(5000)
		})

  })


  it('Overview', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.get('#accordion__heading-container').click({force: true});
    cy.wait(5000)
    cy.get('#accordion__heading-airSpeed').click({force: true});
    cy.wait(5000)
    cy.get('.s-n-b-p-fractions__wrapper > span').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)

  })

  it('Resolve Blockage',  () => {
      cy.visit('/')
      cy.wait(5000)
      cy.expandAccordionsGlobalToggleFlag()
      cy.wait(5000)
    
    cy.get('[data-test="resolve_blockage"]').click({force: true});
    cy.wait(5000)
    cy.get('.node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    cy.get('.lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    cy.get('.lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    cy.get('.lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    cy.get('.lw-toggle-parent > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(5000)
    cy.get('.node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)

  })

  it('Manual Fan Start', () => {
      cy.visit('/')
      cy.wait(5000)
    cy.get('[data-test="overview"]').click({force: true});
    cy.wait(5000)
    cy.expandAccordionsGlobalToggleFlag()
    cy.wait(5000)
    cy.get('[style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    cy.get('.switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
    cy.wait(5000)
    cy.get('.switch-sm-dim > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    cy.get('.s-n-b-p-fractions__wrapper').click({force: true})
    cy.wait(5000)
    cy.get('[style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    cy.get('.fan-controller__options > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    cy.get('.fan-controller__options > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)
    cy.get('.range-slider__slider').click({force: true});
    cy.wait(5000)
    cy.get('.range-slider__slider').click({force: true});
    cy.wait(5000)
    cy.get('.lw-header__left > span').click({force: true});
    cy.wait(5000)
    cy.get('.fan-controller__options > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
    cy.wait(5000)
    cy.get('.fan-controller__options > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(5000)
    cy.get('.fan-controller__options > :nth-child(2) > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)
    cy.get('.switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
    cy.wait(5000)
    cy.get('.switch-sm-dim > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(5000)
    cy.get('[style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click({force: true});
    cy.wait(5000)

  })

  it('Semi Auto Collecting', () => {
    cy.visit('/')
    cy.wait(5000)
    cy.expandAccordionsGlobalToggleFlag()
    cy.wait(5000)
    cy.get('#accordion__heading-manualEmpty').click({force: true});
    cy.wait(5000)
    cy.get('[data-test="manual-empty-select-fraction"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    cy.get('#react-select-2-option-0').click({force: true});
    cy.wait(5000)
    cy.get('[data-test="manual-empty-select-inlet-points"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    cy.get('#react-select-4-option-1').click({force: true});
    cy.wait(5000)
    cy.get('#accordion__heading-manualEmpty > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').click({force: true});
    cy.wait(5000)
    cy.get('[style="padding: 2px;"]').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: inline-block; width: 53%;"] > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    cy.get('#react-select-5-option-0').click({force: true});
    cy.wait(5000)
    cy.get('[style="display: inline-block; width: 47%;"] > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    cy.get('#react-select-6-option-1').click({force: true});
    cy.wait(5000)
    cy.get('[style="padding: 2px;"]').click({force: true});
    cy.wait(100000)
    cy.get('.lw-header__logout > img').click({force: true});
    cy.wait(5000)
  })

});