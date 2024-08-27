///<reference types="cypress"/>

describe('Program', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
  })

  beforeEach(() =>{

    cy.session('loginSession', () => {
        cy.login();
        cy.wait(5000)
    })
  })
  
  const EditProgram = 'AutoEditPro-1'
  const EditProgramMIC = 2;
  const EditProgramTigger = 3;
  const GeneralSearch = 'Auto';


    it('TC-01-Edit Program', function() {
  
      cy.visit('/')
      cy.wait(5000)
      // Click on English flag
      cy.get(':nth-child(1) > .select-language__flag--img').dblclick();
      cy.wait(5000)
      // click on Setting icon
      cy.get('.lw-tab__item > img').click({force: true});
      cy.wait(5000)
      // Click on Program Tab
      //cy.get('[data-test="programs"]').click({force: true});
      //cy.wait(5000)
      /*==== Adding Program ====*/
      //Program Tab - Click on Plus Icon to Add new Program
      cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
      cy.wait(5000)
      // Program - Name Text Box - Click
      cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
      cy.wait(5000)
      // Program - Name Text Box - Enter Program Name
      cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(EditProgram);
      cy.wait(5000)
      // Program - Fraction Dropdown - Expand
      cy.get(':nth-child(4) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
      cy.wait(5000)
      // Program - Fraction Dropdown - Select an option
      cy.get('#react-select-7-option-0').click({force: true});
      cy.wait(5000)
      // Program - Trigger Dropdown - Expand
      cy.get(':nth-child(5) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // Program - Trigger Dropdown - Select an option - Full Level
      cy.get('#react-select-8-option-1').click({force: true});
      cy.wait(5000)
      // Program - Minimum Inclusion Criteria Dropdown - Expand
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // Program - Minimum Inclusion Criteria Dropdown - Select an option - Always
      cy.get('#react-select-9-option-0').click({force: true});
      cy.wait(5000)
      // Program - From Dropdown - Expand
      cy.get(':nth-child(9) > [style="width: 70px; display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__single-value').click({force: true});
      cy.wait(5000)
      // Program - From Dropdown - Select an option
      cy.get('#react-select-10-option-0').click({force: true});
      cy.wait(5000)
      // Program - Inlets Points Dropdown - Expand
      cy.get('[style="color: inherit; width: 45%; max-width: 45%;"] > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
      cy.wait(5000)
      // Program - Inlets Points Dropdown - Select an option
      cy.get('#react-select-12-option-1').click({force: true});
      cy.wait(5000)
      // Program - Save the record
      cy.get('[title="Save"]').click({force: true})
      cy.wait(10000)

      // Program - Search Bar - Try to find the created Program
      cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force: true}).type(EditProgram);
      cy.wait(5000)
      // Validate the Created Program
      cy.contains(EditProgram).should('exist')
      cy.wait(5000)
      // Search Bar - Close icon - click
      cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
      cy.wait(5000)

      /*==== Edit Program 1 -> Change the Minimum Inclusion Criteria -> "No of Opening" -> when Trigger is Full Level ====*/
      
      // Program - Search Bar - Try to find the created Program
      cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force: true}).type(GeneralSearch);
      cy.wait(5000)
      // Edit Button click on find Edit Program
      cy.get('.MuiTable-root').first().contains('tr', EditProgram).find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(10000)

      // MIC-Dropdown-Cross Sign-Remove already selected option
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r').click({force: true});
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      //MIC - Selection - No of openings
      cy.get('#react-select-21-option-1').click({force: true});
      cy.wait(5000)
      // MIC - No of opening - Value Text Box
      cy.get(':nth-child(8) > :nth-child(1) > .input-box').click({force: true});
      cy.wait(5000)
      //cy.get(':nth-child(8) > div > .input-box').clear();
      // MIC - No of opening - Value Text Box - Enter value
      cy.get(':nth-child(8) > div > .input-box').type(EditProgramMIC);
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(5000)

      /*==== Edit Program 2 -> Change the Minimum Inclusion Criteria -> "Never" -> when Trigger is Full Level ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // MIC-Dropdown-Cross Sign-Remove already selected option
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r').click({force: true});
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      //MIC - Selection - Never
      cy.get('#react-select-27-option-2').click({force: true});
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(5000)

      /*==== Edit Program 3 -> Trigger is changed to ' No of Openings' from Full Level ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // Trigger-Dropdown-Cross Sign-Remove already selected option
      //cy.get(':nth-child(5) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r').click({force: true});
      cy.get(':nth-child(5) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // Trigger - Selection - No Of Opening
      cy.get('#react-select-32-option-2').click({force: true});
      cy.wait(5000)
      //cy.get(':nth-child(6) > .input-box').clear('3');
      // Trigger - No of opening - Value Text Box - Enter value
      cy.get(':nth-child(6) > .input-box').type(EditProgramTigger);
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(5000)


      /*==== Edit Program 4 -> Change the Minimum Inclusion Criteria -> "No of Openings" -> when Trigger is No of Openings ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // MIC - Click on Dropdown trangle sign
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r > path').click({force: true});
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // MIC - No of Opening
      cy.get('#react-select-39-option-1').click({force: true});
      cy.wait(5000)
      // MIC - No of Opening - Text Box
      cy.get(':nth-child(8) > :nth-child(1) > .input-box').click({force: true});
      cy.wait(5000)
      // MIC - No of Opening - Text Box - enter value
      //cy.get(':nth-child(8) > div > .input-box').clear();
      cy.get(':nth-child(8) > div > .input-box').type(EditProgramMIC);
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(5000)

      /*==== Edit Program 5 -> Change the Minimum Inclusion Criteria -> "Always" -> when Trigger is No of Openings ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // MIC-Dropdown-Cross Sign-Remove already selected option
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r').click({force: true});
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // MIC - Dropdown - Selection - Always
      cy.get('#react-select-45-option-0').click({force: true});
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(5000)

      /*==== Edit Program 6 -> Trigger is changed to 'Time-Based' from No of Openings ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // Trigger-Dropdown-Cross Sign-Remove already selected option
      //cy.get(':nth-child(5) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r').click({force: true});
      cy.get(':nth-child(5) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // Trigger - Dropdown - Time Based
      cy.get('#react-select-50-option-0').click({force: true});
      cy.wait(5000)
      // Trigger - Dropdown - Time Based - Time Dropdown - Expand
      cy.get(':nth-child(6) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r > path').click({force: true});
      cy.wait(5000)
      // Trigger - Dropdown - Time Based - Time Dropdown - Type Time
      //cy.get('#react-select-43-input').clear();
      cy.get('#react-select-55-input').type('05:00');
      cy.wait(5000)
      // Trigger - Dropdown - Time Based - Time Dropdown - Type Time - Select Time from dropdown
      cy.get('#react-select-55-option-60').click({force: true});
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(5000)

      /*==== Edit Program 7 -> Change the Minimum Inclusion Criteria -> "No Of Openings" -> when Trigger is Time Based ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // MIC-Dropdown-Cross Sign-Remove already selected option
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r').click({force: true});
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // MIC - Dropdown - Selection - No Of Openings
      cy.get('#react-select-59-option-1').click({force: true});
      cy.wait(5000)
      // MIC - Dropdown - Text Box
      cy.get(':nth-child(8) > :nth-child(1) > .input-box').click({force: true});
      cy.wait(5000)
      //cy.get(':nth-child(8) > div > .input-box').clear();
      // MIC - Dropdown - Text Box - Enter value
      cy.get(':nth-child(8) > div > .input-box').type(EditProgramMIC);
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(5000)


      /*==== Edit Program 8 -> Change the Minimum Inclusion Criteria -> "Never" -> when Trigger is Time Based ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // MIC-Dropdown-Cross Sign-Remove already selected option
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__indicators > .lw-select__indicator > .css-19bqh2r').click({force: true});
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // MIC - Dropdown - Selection - Never
      cy.get('#react-select-66-option-2').click({force: true});
      cy.wait(5000)
      // Click on Save button
      cy.get('.MuiTableCell-paddingNone > div > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
      cy.wait(5000)

      /*==== Edit Program 9 -> Change the Minimum Inclusion Criteria -> "Never" -> when Trigger is Time Based ====*/

      // Again click on Edit button
      cy.get('.MuiTable-root').first().contains('tr', 'AutoEditPro-1').find('td').first().find('svg.MuiSvgIcon-root').eq(1).click({force: true})
      cy.wait(5000)
      // MIC - Dropdown - Click - Selection
      //cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // MIC - Dropdown - Always
      cy.get('#react-select-73-option-0').click({force: true});
      cy.wait(5000)
      // Click on Save button
      cy.get('[title="Save"] > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
      cy.wait(5000)

      // Logout
      //cy.get('.lw-header__logout > img').click({force: true});
      //cy.wait(5000)
  
    });
  })