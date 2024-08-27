describe('Lillby-Service Mode', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
})

    beforeEach(() =>{

    cy.session('loginSession', () => {
      cy.login();
      cy.wait(5000)
    })
})
  /* ==== Start ===> Lillby-> ServiceMode-> Overview-> AIV-SV-> Valve-> Open-Close ==== */
  it('Lillby-SM-Overview-Inlet-BV-SV-AIV-BackToNormalFromSM', {scrollBehavior: false},function() {
    
    cy.visit('/');
    cy.wait(3000)

    /*Add Inlet/BV in Control View*/
    cy.get('#groupID-A1 > [style="display: flex;"] > :nth-child(1) > :nth-child(1) > .tile-outer-textholder > span').click();
    cy.wait(3000)
    /*Add Section Valve in Control View*/
    cy.get(':nth-child(1) > .ov-main__wrapper > [style="padding-left: 2px; width: 70px;"] > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"] > .line-clamp-2').click();
    cy.wait(3000)
    /*Add AIV in Control View*/
    cy.get(':nth-child(1) > .ov-main__wrapper > [style="padding-right: 2px;"] > :nth-child(1) > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"]').click();
    cy.wait(3000)
    /*Inlet - Move in Service Mode*/
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Part - Move in Service Mode*/
    cy.get(':nth-child(2) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Valve - Click on Slide to open Valve*/
    cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Bottom Valve - Check the Valve Open via Slider*/
    cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    /*Bottom Valve - Click on slider to Close the Valve */
    cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Bottom Valve - Check the Valve, It's Closed */
    cy.get(':nth-child(1) > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    /*Bottom Part - Move back to Normal State from Service Mode*/
    cy.get(':nth-child(2) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Inlet - Move back to Normal State from Service Mode*/
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Section Valve - Click on SM image to move in Service Mode*/
    cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Section Valve Valve Open - Click on Slider to Open the Valve*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 0px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Section Valve Valve Close - Click on Slider to Close the Valve*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 0px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    /*Section Valve Valve Close Check- Click on Slider to Close the Valve*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 0px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /**/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 0px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    /*Section Valve Move Back to Normal from Service Mode*/
    cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*AIV - Click on SM icon to move AIV in Service Mode*/
    cy.get(':nth-child(3) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*AIV Valve Open - Open via clicking on Toggle*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*AIV Valve Open - Check Open on Toggle*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    /*AIV Valve Open - Check Open on Toggle*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*AIV Valve Close - Close via clicking on Toggle*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-left: 5px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    /*AIV move to Normal from Service Mode*/
    cy.get(':nth-child(3) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Clear All - Remove all components from Control View*/
    cy.get('.control-view__action-primary > [data-test] > .btn > .button__label').click();
    cy.wait(3000)
    /*Logout - from application - Login Screen Should be there.*/
    //cy.get('.lw-header__logout > img').click();
    //cy.wait(3000)
 
  })

  /* ==== Start ===> Lillby-> ServiceMode-> ResolveBlockage-> AIV-SV-> Valve-> Open-Close ==== */
  it('Lillby-> ServiceMode-> ResolveBlockage-> AIV-SV-> Valve-> Open-Close', {scrollBehavior: false},function () {
    
    cy.visit('/');
    cy.wait(5000)

    /*Resolve Blockage - Click on Tab to view the details*/
    cy.get('[data-test="resolve_blockage"]').should('be.visible').click()
    cy.wait(3000)
    /*AIV Dropdown - Click on it to view the items*/
    cy.get('.air-inlet-valve__size > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
    cy.wait(3000)
    /*AIV Selection - Click on first AIV from the drodown of AIV*/
    cy.get('#react-select-7-option-0').click();
    cy.wait(3000)
    /*AIV Service Mode Icon - Click on SM icon to move AIV in Service Mode*/
    cy.get('.air-inlet-valve__control-inner > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*AIV Valve - Toggle - Click on it to Open the AIV Valve*/
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*AIV Valve Check - Check the AIV */
    cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 2px; box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({ force: true });
    cy.wait(3000)
    /*Section Valve - Dropdown - Click on dropdown to view items*/
    cy.get('.section-valve__size > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click();
    cy.wait(3000)
    /*Section Valve - Dorpdown - Select from dropdown*/
    cy.get('#react-select-8-option-0').click();
    cy.wait(3000)
    /*Section Valve - Service Mode - Click on Service Mode icon to move into Service Mode*/
    cy.get('.section-valve__control-inner > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Part-1 - Service Mode Icon - Click on it to move into Service Mode*/
    cy.get(':nth-child(2) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Part-1- Valve - Click on toggle to Open*/
    cy.get(':nth-child(2) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Bototm Part-1- Valve - Open - Check*/
    cy.get(':nth-child(2) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({ force: true });
    cy.wait(3000)
    /*Bottom Part-2 - Service Mode Icon - Click on it to move into Service Mode*/
    cy.get(':nth-child(3) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Part-2- Valve - Click on toggle to Open*/
    cy.get(':nth-child(3) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Bototm Part-2- Valve - Open - Check*/
    cy.get(':nth-child(3) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({ force: true });
    cy.wait(3000)
    /*Bottom Part-3 - Service Mode Icon - Click on it to move into Service Mode*/
    cy.get(':nth-child(4) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Part-3- Valve - Click on toggle to Open*/
    cy.get(':nth-child(4) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Bototm Part-3- Valve - Open - Check*/
    cy.get(':nth-child(4) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').check({ force: true });
    cy.wait(3000)
    /*Bottom Part-3- Valve - Click on toggle to Close*/
    cy.get(':nth-child(4) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Bottom Part-3- Valve - Close - Check*/
    cy.get(':nth-child(4) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({ force: true });
    cy.wait(3000)
    /*Bottom Part-3 - Service Mode Icon - Click on it to move back in Normal*/
    cy.get(':nth-child(4) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Part-2- Service Mode Icon - Click on it to move back in Normal*/
    cy.get(':nth-child(3) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Bottom Part-1- Valve - Click on toggle to Close*/
    cy.get(':nth-child(2) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Bottom Part-1- Valve - Close - Check*/
    cy.get(':nth-child(2) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > [style="display: flex; align-items: center; margin-left: 7px;"] > [style="position: relative;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').uncheck({ force: true });
    cy.wait(3000)
    /*Bottom Part-1 - Service Mode Icon - Click on it to move back in Normal*/
    cy.get(':nth-child(2) > .node > .node__bp-wrapper > .node__bp-wrapper-inner > .node__bp-upper-controls > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*AIV - Normal from Service Mode - Click on SM icon to move back to Normal*/
    cy.get('.air-inlet-valve__control-inner > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Logout*/
    //cy.get('.lw-header__logout > img').click();
    //cy.wait(3000)
    /* ==== End  Lillby-> ServiceMode-> ResolveBlockage-> AIV-SV-> Valve-> Open-Close==== */
  });

  /* ==== Start ==> Lillby-> ServiceMode-> Container-PDV-> Valve-> Open-Close ==== */
  it('Lillby-> ServiceMode-> Container-PDV-> Valve-> Open-Close', function () {

    cy.visit('/');
    cy.wait(5000)

    /*Expand Container Section*/
    cy.get('#accordion__heading-container').click();
    cy.wait(3000)
    /*Click on PDV SM icon to move in Service Mode*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on PDV direction image to change the direction from Stright to Side*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click();
    cy.wait(3000)
    /*Click on Container SM icon to move Container in Service Mode*/
    cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on Material Pipe slider to open the Valve of the Container*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Check the Slider moved to other side to show the Valve as Open - Material Pipe*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({ force: true });
    cy.wait(3000)
    /*Click on Air Pipe slider to open the Valve of the Container*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*Check the Slider moved to other side to show the Valve as Open - Air Pipe*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({ force: true });
    cy.wait(3000)
    /*Click on Compactor to Start*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click();
    cy.wait(3000)
    /*Check the Compactor Toggle */
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').check({ force: true });
    cy.wait(3000)
    /*Click on the Compactor Toggle -> Start Compactor*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click();
    cy.wait(3000)
    /*To chekc the Compactor NO/OFF toggle*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').uncheck({ force: true });
    cy.wait(3000)
    /*Click on Material Pipe toggle - To Close the Valve*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*To check Material Pipe Toggle*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({ force: true });
    cy.wait(3000)
    /*Click on Air Pipe toggle - To Close the Valve */
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    /*To check Air Pipe Toggle*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').uncheck({ force: true });
    cy.wait(3000)
    /*Click on Container SM icon to move back from Container Service Mode*/
    cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on PDV direction icon to move at original side - Stright*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click();
    cy.wait(3000)
    /*Click on PDV SM icon to move back PDV form Service Mode*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on other Compactor Container-1 to move into Service Mode*/
    cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on other Compactor Container-2 to move into Service Mode*/
    cy.get(':nth-child(2) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on other Compactor Container-3 to move into Service Mode*/
    cy.get(':nth-child(1) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on PDV icon to move PDV in Service Mode*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on PDV icon to move PDV in Service Mode*/
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on PDV icon to move back from Service Mode*/
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on PDV icon to move back Service Mode*/
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on CompactorContainer icon to move back Container from Service Mode*/
    cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on CompactorContainer icon to move back Container from Service Mode*/
    cy.get(':nth-child(2) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on CompactorContainer icon to move back Container from Service Mode*/
    cy.get(':nth-child(1) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    /*Click on Logout*/
    //cy.get('.lw-header__logout > img').click();
    //cy.wait(3000)
    /* ==== End ==> Lillby-> ServiceMode-> Container-PDV-> Valve-> Open-Close ==== */
  });

  /* ==== Start ==> All Container & PDV in Service Mode - Valve Open/Close ==== */

  it('All Container & PDV in Service Mode - Valve Open/Close',{scrollBehavior: false}, function() {
    
    cy.visit('/');
    cy.wait(5000)
    cy.get('#accordion__heading-container').click();
    cy.wait(3000)
    // Container(Papir-CC3) - ServiceMode Icon - Click
    cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // Container(Papir-CC3) - Material Valve - Open
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    // Container(Papir-CC3) - Material Valve - click to Open
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Container(Papir-CC3) - Air Valve - Open
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    // Container(Papir-CC3) - Air Valve - click to Open
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Container(Rest2-CC2) - ServiceMode Icon - Click
    cy.get(':nth-child(2) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // Container(Rest2-CC2) - Material Valve - Open
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    // Container(Rest2-CC2) - Material Valve - click to Open
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Container(Rest2-CC2) - Air Valve - Open
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    // Container(Rest2-CC2) - Air Valve - click to Open
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Container(Rest1-CC1) - ServiceMode Icon - Click
    cy.get(':nth-child(1) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // Container(Rest1-CC1) - Material Valve - Open
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    // Container(Rest1-CC1) - Material Valve - click to Open
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > .container__lower-airflow__pipe > [style="z-index: 3;"] > [style="margin-top: 55px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Container(Rest1-CC1) - Air Valve - Open
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > .slider').click();
    cy.wait(3000)
    // Container(Rest1-CC1) - Air Valve - click to Open
    cy.get(':nth-child(1) > .container__item > .container__inner > .container__lower > .container__lets > :nth-child(1) > [style="display: flex; position: relative; margin-top: -71px;"] > :nth-child(2) > .container__lower-airflowTowardsFan__pipe > [style="margin-top: 23px; visibility: visible;"] > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // PDV(1) - Service Mode Icon - Click
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // PDV(1) - Direction Change - Stright to Side
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click();
    cy.wait(3000)
    // PDV(1) - Direction Change - Stright to Side - Click
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > [style="position: relative; text-align: center; color: black; height: 6px; width: 6px; padding-top: 3px; padding-right: 4px;"] > div').click({force: true});
    cy.wait(3000)
    // PDV(2) - Service Mode Icon - Click
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click();
    cy.wait(3000)
    // PDV(2) - Direction Change - Stright to Side
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // PDV(2) - Direction Change - Stright to Side - Click
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv > [style="display: flex;"] > .pdv--img').click();
    cy.wait(3000)
    // Container(Rest2-CC2) - Compactor Toggele
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click();
    cy.wait(3000)
    // Container(Rest2-CC2) - Compactor Toggele - Click to Start
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(3000)
    // Container(Rest2-CC2) - Compactor Toggele - Click to Start-1
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > .slider > .control-label').click();
    cy.wait(3000)
    // Container(Rest2-CC2) - Compactor Toggele - Click to Start-2
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__lower > .compactor > [style="position: relative; display: flex; align-items: center; justify-content: center; margin-top: 6px;"] > .switch-sm-dim > .lw-toggle > div > .switch > input').uncheck({force: true});
    cy.wait(3000)
    // Container(Papir-CC3) - ServiceMode Icon - Click to back Normal
    cy.get(':nth-child(3) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // Container(Rest2-CC2) - ServiceMode Icon - Click to back Normal
    cy.get(':nth-child(2) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // Container(Rest1-CC1) - ServiceMode Icon - Click to back Normal
    cy.get(':nth-child(1) > .container__item > [style="display: flex; position: relative; border-bottom: 3px solid transparent; max-width: 64px;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // PDV(1) - Service Mode Icon - Click to back Normal
    cy.get(':nth-child(3) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)
    // PDV(2) - Service Mode Icon - Click to back Normal
    cy.get(':nth-child(2) > .container__item > .container__inner > .container__upper > .pdv__wrapper > .pdv-name > .lw-switch > .lw-switch__label > img').click();
    cy.wait(3000)

    /*Click on Logout*/
    cy.get('.lw-header__logout > img').click();
    cy.wait(3000)
    /* ==== End ==> All Container & PDV in Service Mode - Valve Open/Close ==== */
  });


})