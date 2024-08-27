///<reference types="cypress"/>

describe('SearchFeature', () => {



  it('TC-01-Search-Logs-Alarm-AlarmHistory', function() {

    cy.visit('http://localhost:8081/gui/');

    cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se');

    cy.get('[data-test="password"] > input').type('M@noj!23$');
    cy.get('.button__label').click();
    cy.wait(10000)
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick();

    //cy.get('#accordion__heading-container').click();
    /*Search - logs - Verification of generate logs or from there which has been already there*/
    cy.get('[data-test="logs"]').click();
    cy.wait(10000)
    // Enter Search string
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('1724');
    cy.wait(10000)
    // Verification of Searched string message
    cy.get('[index="0"] > [value="1724"]').click();
    cy.wait(10000)
    cy.get('[index="0"]').click();
    cy.wait(10000)
    cy.get('[value="SHAFT: Status (ID: 1724) -- normal"]').click();
    cy.wait(10000)
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click();
    cy.wait(10000)
    
    // Alarms - Click on Alarm tab
    cy.get('[data-test="alarms"]').click();
    cy.wait(10000)
    // Add AIV/FD in control view
    cy.get(':nth-child(3) > .ov-main__wrapper > :nth-child(1) > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"]').click();
    cy.wait(10000)
    // Add AIV/FD in control view
    cy.get(':nth-child(4) > .ov-main__wrapper > :nth-child(1) > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"]').click();
    cy.wait(10000)
    // Expand the ISV/Group
    cy.get(':nth-child(4) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > .accordion > .accordion__item > .accordion__heading > #accordion__heading-shaftNodeVerticle > [style="display: inline; width: 83.3%;"] > [style="float: left;"] > .s-n-v__label').click();
    cy.wait(10000)
    // Add Inlet in control view
    cy.get(':nth-child(4) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > .accordion > .accordion__item > #accordion__panel-shaftNodeVerticle > .shaft-node-card__content > [style="padding: 0.3em;"] > [style="border-bottom: 1px solid rgb(195, 210, 210);"] > :nth-child(2) > .s-n-inlet__name').click();
    cy.wait(10000)
    // Add Fraction Switch in control view
    cy.get(':nth-child(4) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > [style="display: flex; flex-direction: column;"] > .shaft-node-bottom-part > :nth-child(1) > .s-n-b-p-fractions__wrapper > span').click();
    cy.wait(10000)
    // Move AIV/FD in service mode
    cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(10000)
    // Move AIV/FD in service mode
    cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(10000)
    // Move Inlet in service mode
    cy.get(':nth-child(3) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click();
    cy.wait(10000)
    // Move FractionSwitch in service mode
    cy.get('.control-view-main__sidebar > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > :nth-child(1) > .lw-switch__label > img').click();
    cy.wait(10000)
    
    //Enter string to search data in Alarm
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('120');
    cy.wait(10000)
    //Verification of searched string in Alarm
    cy.get('[value="Notification: Component is in service mode. manoj.kumar@logiwaste.se"]').click();
    cy.wait(10000)

    cy.get('[index="0"]').click();
    cy.wait(10000)
    // Remove searched string from Alarm
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click();
    cy.wait(10000)
    // AIV Back to normal from Service Mode
    cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(10000)
    // AIV Back to normal from Service Mode
    cy.get(':nth-child(2) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click();
    cy.wait(10000)

    // Alarm History Tab
    cy.get('[data-test="alarms_history"]').click();
    cy.wait(10000)
    //Enter string for search in Search place
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('120');
    cy.wait(10000)
    //Verification of the searched text
    cy.get('[index="0"] > [value="Notification: Component is in service mode. manoj.kumar@logiwaste.se"]').click();
    cy.wait(10000)

    //Move back Inlet from Service Mode
    cy.get('.control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch__sm-active > .lw-switch__label > img').click();
    cy.wait(10000)

    //Move back Fraction Switch from Service Mode
    cy.get('.lw-switch__sm-active > .lw-switch__label > img').click();
    cy.wait(10000)
    // Remove searched string from Alarm History
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
    cy.wait(10000)

    /*Pagination dropdown cannot locate via script as it's change in every iteration*/
    /*cy.get('body').click();
    cy.wait(10000)
    cy.get('[data-value="100"]').click();
    cy.wait(10000)
    cy.get('[data-test="logs"]').click();
    cy.wait(10000)
    cy.get('body').click();
    cy.wait(10000)
    cy.get('[data-value="100"]').click();
    cy.wait(10000)
    cy.get('body').click();
    cy.wait(10000)
    cy.get('#menu- > [aria-hidden="true"]').click();*/
    
    cy.wait(10000)
    cy.get('.control-view__action-primary > [data-test] > .btn > .button__label').click();
    cy.wait(10000)
    cy.get('.lw-header__logout > img').click();
    cy.wait(5000)
    
  });
})