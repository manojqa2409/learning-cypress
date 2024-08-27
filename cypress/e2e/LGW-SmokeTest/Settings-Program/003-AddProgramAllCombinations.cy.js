///<reference types="cypress"/>

describe('Add Program all combinations', () => {
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
})

beforeEach(() =>{

    cy.session('loginSession', () => {
            
            cy.login();
            cy.wait(3000)

          
        })
    })

    const Program1 = 'Auto-Full-Never';
    const Program2 = 'Auto-NOO-Never';
    const Program3 = 'Auto-Time-Never';
    const Program2Noo = 3;
    const Program4 = 'Auto-Full-NOO';
    const Program5 = 'Auto-NOO-NOO';
    const Program6 = 'Auto-Time-NOO';
    const ProgramMIC = 2;
    const Program7 = 'Auto-Full-Always';
    const Program8 = 'Auto-NOO-Always';
    const Program9 = 'Auto-Time-Always';

    const Name = 'Auto-Full-Never';
    const Fraction = 'Plast';
    const Trigger = 'Time-based';
    const TriggerCondition = '06:00';
    const MIC = 'Never';
    const InclusionThreshold = 1;
    const From = '00:00';
    const To = '24:00';
    const InletsPoints = 'U150N-S';

  
  it.only('TC-000-> Program-Delete-If Exist', function() {

      cy.visit('/');
      cy.wait(10000)
      // Choose Language
      cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
      cy.wait(5000)
  
      cy.extendSessionTime()
      cy.wait(10000)
  
      //Click on Settings Icon
      cy.get('.lw-tab__item > img').click({force: true});
      cy.wait(5000)
  
      /*if (cy.contains(Program1)){
  
        cy.log( Program1 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program1).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
        cy.log( Program1 + ': Program deleted.')
        cy.wait(5000)
  
      } else {
  
        cy.log( Program1 + ': Program not found.')
      }*/

        cy.get('body').then($body => {
          if ($body.find(Program1).length) {
            // Do something if exist
            cy.log(Program1 + ': Program found.')
            cy.get('.MuiTable-root').first().contains('tr', Program1).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click();
            cy.wait(10000)
            cy.get('[title="Save"]').click()
            cy.wait(10000)
            cy.log( Program1 + ': Program deleted.')
          } else {
            // Do if not exist
            console.log(Program1 + ': Program not found.');
            cy.wait(3000)
            cy.log( Program1 + ': Program not found.')
          }
        })
      cy.wait(5000)
    
     if (cy.contains(Program2)){
  
        cy.log( Program2 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program2).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
  
        cy.log( Program2 + ': Program deleted.')
          cy.wait(5000)
  
      } else {
  
        cy.log( Program2 + ': Program not found.')
      }
      cy.wait(5000)
    
     if (cy.contains(Program3)){
  
        cy.log( Program3 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program3).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
  
        cy.log( Program3 + ': Program deleted.')
          cy.wait(5000)
  
      } else {
  
        cy.log( Program3 + ': Program not found.')
      }
      cy.wait(5000)
    
     if (cy.contains(Program4)){
  
        cy.log( Program4 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program4).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
  
        cy.log( Program4 + ': Program deleted.')
          cy.wait(5000)
  
      } else {
  
        cy.log( Program4 + ': Program not found.')
      }
      cy.wait(5000)
    
    
     if (cy.contains(Program5)){
  
        cy.log( Program5 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program5).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
  
        cy.log( Program5 + ': Program deleted.')
          cy.wait(5000)
  
      } else {
  
        cy.log( Program5 + ': Program not found.')
      }
      cy.wait(5000)
    
    
     if (cy.contains(Program6)){
  
        cy.log( Program6 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program6).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
  
        cy.log( Program6 + ': Program deleted.')
          cy.wait(5000)
  
      } else {
  
        cy.log( Program6 + ': Program not found.')
      }
      cy.wait(5000)
    
     if (cy.contains(Program7)){
  
        cy.log( Program7 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program7).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
  
        cy.log( Program7 + ': Program deleted.')
          cy.wait(5000)
  
      } else {
  
        cy.log( Program7 + ': Program not found.')
      }
      cy.wait(5000)
    
     if (cy.contains(Program8)){
  
      cy.log( Program8 + ': Program found.')
      cy.get('.MuiTable-root').first().contains('tr', Program8).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)
      cy.log( Program8 + ': Program deleted.')
      cy.wait(5000)
  
    } else {
  
        cy.log( Program8 + ': Program not found.')
    }
      cy.wait(5000)
    
    if (cy.contains(Program9)){
  
        cy.log( Program9 + ': Program found.')
  
        cy.get('.MuiTable-root').first().contains('tr', Program9).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
        cy.wait(10000)
        cy.get('[title="Save"]').click()
        cy.wait(10000)
  
        cy.log( Program9 + ': Program deleted.')
          cy.wait(5000)
  
      } else {
  
        cy.log( Program9 + ': Program not found.')
      }
      cy.wait(5000)
  })


  it('TC-001-> Program-FullLevel-Never', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program1)){

      cy.log( Program1 + ': Program found.')

      cy.get('.MuiTable-root').first().contains('tr', Program1).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program1 + ': Program deleted.')

    } else {

      cy.log( Program1 + ': Program not found.')

    }*/

          //Program Tab - Click on Add Icon
          cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Click
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Enter Program Name
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program1);
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
          cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria Dropdown - Select an option - Never
          cy.get('#react-select-9-option-2').click({force: true});
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
          cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force: true}).type(Program1);
          cy.wait(5000)
          // Validate the Created Program
          cy.contains(Program1)
          cy.wait(5000)
          // Search Bar - Close icon - click
          cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // logout
          //cy.get('.lw-header__logout > img').click({force: true});
          //cy.wait(5000)
        
  });

  it('TC-002-> Program-No Of Openings-Never', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(10000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program2)){

      cy.log( Program2 + ': Program found.')

      cy.get('.MuiTable-root').first()
      .contains('tr', Program2)
      .find('td').first()
      .find('svg.MuiSvgIcon-root').eq(2).click()
      
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program2 + ': Program deleted.')

    } else {

      cy.log( Program2 + ': Program not found.')

    }*/



    //Program Tab - Click on Add Icon
    cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)
    // Program - Name Text Box - Click
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
    cy.wait(5000)
  // Program - Name Text Box - Enter Program Name
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program2);
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
    // Program - Trigger Dropdown - Select an option - No of Openings
    cy.get('#react-select-8-option-2').click({force: true});
    cy.wait(5000)
    // Program - Trigger Dropdown - Select an option - No of Openings - Add Value
    cy.get(' [style="color: inherit; width: 6%; max-width: 6%;"] > .input-box').type(Program2Noo)
    cy.wait(5000)

    // Program - Minimum Inclusion Criteria Dropdown - Expand
    cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    // Program - Minimum Inclusion Criteria Dropdown - Select an option - Never
    cy.get('#react-select-9-option-2').click({force: true});

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
    cy.get('#react-select-12-option-2').click({force: true});
    cy.wait(5000)
    // Program - Save the record
    cy.get('[title="Save"]').click()
    cy.wait(10000)

            // Program - Search Bar - Try to find the created Program
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force: true}).type(Program2);
            cy.wait(5000)
            // Validate the Created Program
            cy.contains(Program2)
            cy.wait(5000)
            // Search Bar - Close icon - click
            cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
            cy.wait(5000)
    // logout
    //cy.get('.lw-header__logout > img').click({force: true});
    //cy.wait(5000)
  });

  it('TC-003-> Program-TimeBased-Never', function() {

    cy.visit('/');
    cy.wait(15000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(10000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program3)){

      cy.log( Program3 + ': Program found.')

      cy.get('.MuiTable-root').first()
      .contains('tr', Program3)
      .find('td').first()
      .find('svg.MuiSvgIcon-root').eq(2).click()
      
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program3 + ': Program deleted.')

    } else {

      cy.log( Program3 + ': Program not found.')

    }*/

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)
    //Program Tab - Click on Add Icon
    cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)
    // Program - Name Text Box - Click
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
    cy.wait(5000)
  // Program - Name Text Box - Enter Program Name
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program3);
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
    // Program - Trigger Dropdown - Select an option - Time Based
    cy.get('#react-select-8-option-0').click({force: true});
    cy.wait(5000)
    // Program - Trigger Dropdown - Select an option - Time Based -Time dropdown - Select Time
    cy.get(':nth-child(6) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
    cy.wait(5000)
    //cy.get('#react-select-13-input').clear();
    // Time Dropdown - Write Time
    cy.get('#react-select-13-input').type('06:00');
    cy.wait(5000)
    // Time Dropdown - Write Time - Select from dropdown
    cy.get('#react-select-13-option-72').click({force: true});
    cy.wait(5000)
    // Program - Minimum Inclusion Criteria Dropdown - Expand
    cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    // Program - Minimum Inclusion Criteria Dropdown - Select an option - Never
    cy.get('#react-select-9-option-2').click({force: true});
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
    cy.get('#react-select-12-option-3').click({force: true});
    cy.wait(5000)
    // Program - Save the record
    cy.get('[title="Save"]').click({force: true})
    cy.wait(10000)

        // Program - Search Bar - Try to find the created Program
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program3);
        cy.wait(5000)
        // Validate the Created Program
        cy.contains(Program3)
        cy.wait(5000)
        // Search Bar - Close icon - click
        cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
        cy.wait(5000)

    //logout
    //cy.get('.lw-header__logout > img').click({force: true});
    //cy.wait(5000)
  });

  it('TC-004-> Program-FullLevel-No Of Openings', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program4)){

      cy.log( Program4 + ': Program found.')

      cy.get('.MuiTable-root').first()
      .contains('tr', Program4)
      .find('td').first()
      .find('svg.MuiSvgIcon-root').eq(2).click()
      
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program4 + ': Program deleted.')

    } else {

      cy.log( Program4 + ': Program not found.')

    }*/

          //Program Tab - Click on Add Icon
          cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Click
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Enter Program Name
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program4);
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
          cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
          cy.wait(5000)

          // Program - Minimum Inclusion Criteria Dropdown - Select an option - No of Openings
          cy.get('#react-select-9-option-1').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria -- Add Value for No of opening
          cy.get('[style="color: inherit;"] > div > .input-box').click().type(ProgramMIC)

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
          cy.get('#react-select-12-option-4').click({force: true});
          cy.wait(5000)
          // Program - Save the record
          cy.get('[title="Save"]').click({force: true})
          cy.wait(10000)

          // Program - Search Bar - Try to find the created Program
          cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program4);
          cy.wait(5000)
          // Validate the Created Program
          cy.contains(Program4)
          cy.wait(5000)
          // Search Bar - Close icon - click
          cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)

        
  });

  it('TC-005-> Program-No Of Openings-No Of Openings', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program5)){

      cy.log( Program5 + ': Program found.')

      cy.get('.MuiTable-root').first()
      .contains('tr', Program5)
      .find('td').first()
      .find('svg.MuiSvgIcon-root').eq(2).click()
      
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program5 + ': Program deleted.')

    } else {

      cy.log( Program5 + ': Program not found.')

    }*/

          //Program Tab - Click on Add Icon
          cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Click
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Enter Program Name
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program5);
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
          // Program - Trigger Dropdown - Select an option - No Of Openings
          cy.get('#react-select-8-option-2').click({force: true});
          cy.wait(5000)
          // Program - Trigger Dropdown - Select an option - No of Openings - Add Value
          cy.get(' [style="color: inherit; width: 6%; max-width: 6%;"] > .input-box').type(Program2Noo)
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria Dropdown - Expand
          cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
          cy.wait(5000)

          // Program - Minimum Inclusion Criteria Dropdown - Select an option - No Of Openings
          cy.get('#react-select-9-option-1').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria - Type Value
          cy.get('[style="color: inherit;"] > div > .input-box').click({force: true}).type(ProgramMIC)

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
          cy.get('#react-select-12-option-5').click({force: true});
          cy.wait(5000)
          // Program - Save the record
          cy.get('[title="Save"]').click({force: true})
          cy.wait(10000)

          // Program - Search Bar - Try to find the created Program
          cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program5);
          cy.wait(5000)
          // Validate the Created Program
          cy.contains(Program5)
          cy.wait(5000)
          // Search Bar - Close icon - click
          cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)

        
  });

  it('TC-006-> Program-TimeBased-No Of Openings', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program6)){

      cy.log( Program6 + ': Program found.')

      cy.get('.MuiTable-root').first()
      .contains('tr', Program6)
      .find('td').first()
      .find('svg.MuiSvgIcon-root').eq(2).click()
      
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program6 + ': Program deleted.')

    } else {

      cy.log( Program6 + ': Program not found.')

    }*/

          //Program Tab - Click on Add Icon
          cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Click
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Enter Program Name
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program6);
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
          // Program - Trigger Dropdown - Select an option - Time Based
          cy.get('#react-select-8-option-0').click({force: true});
          cy.wait(5000)
          // Program - Trigger Dropdown - Select an option - Time Based -Time dropdown - Select Time
          cy.get(':nth-child(6) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
          cy.wait(5000)
          //cy.get('#react-select-13-input').clear();
          // Time Dropdown - Write Time
          cy.get('#react-select-13-input').type('06:30');
          cy.wait(5000)
          // Time Dropdown - Write Time - Select from dropdown
          cy.get('#react-select-13-option-78').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria Dropdown - Expand
          cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
          cy.wait(5000)

          // Program - Minimum Inclusion Criteria Dropdown - Select an option - No Of Openings
          cy.get('#react-select-9-option-1').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria
          cy.get('[style="color: inherit;"] > div > .input-box').click({force: true}).type(ProgramMIC)

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
          cy.get('#react-select-12-option-6').click({force: true});
          cy.wait(5000)
          // Program - Save the record
          cy.get('[title="Save"]').click({force: true})
          cy.wait(10000)

          // Program - Search Bar - Try to find the created Program
          cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program6);
          cy.wait(5000)
          // Validate the Created Program
          cy.contains(Program6)
          cy.wait(5000)
          // Search Bar - Close icon - click
          cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          //logout
          //cy.get('.lw-header__logout > img').click({force: true});
          //cy.wait(5000)

        
  });

  it('TC-007-> Program-FullLevel-Always (if Not Empty)', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program7)){

      cy.log( Program7 + ': Program found.')

      cy.get('.MuiTable-root').first().contains('tr', Program7).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program7 + ': Program deleted.')

    } else {

      cy.log( Program7 + ': Program not found.')

    }*/

          //Program Tab - Click on Add Icon
          cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Click
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Enter Program Name
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program7);
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
          cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria Dropdown - Select an option - Always (if NOT Empty)
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
          cy.get('#react-select-12-option-7').click({force: true});
          cy.wait(5000)
          // Program - Save the record
          cy.get('[title="Save"]').click({force: true})
          cy.wait(10000)

          // Program - Search Bar - Try to find the created Program
          cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program7);
          cy.wait(5000)
          // Validate the Created Program
          cy.contains(Program7)
          cy.wait(5000)
          // Search Bar - Close icon - click
          cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // logout
          //cy.get('.lw-header__logout > img').click({force: true});
          //cy.wait(5000)
        
  });

  it('TC-008-> Program-No Of Openings-Always (if Not Empty)', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program8)){

      cy.log( Program8 + ': Program found.')

      cy.get('.MuiTable-root').first().contains('tr', Program8).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program8 + ': Program deleted.')

    } else {

      cy.log( Program8 + ': Program not found.')

    }*/

          //Program Tab - Click on Add Icon
          cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Click
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Enter Program Name
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program8);
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
          // Program - Trigger Dropdown - Select an option - No Of Openings
          cy.get('#react-select-8-option-2').click({force: true});
          cy.wait(5000)
          // Program - Trigger Dropdown - Select an option - No of Openings - Add Value
          cy.get(' [style="color: inherit; width: 6%; max-width: 6%;"] > .input-box').type(Program2Noo)
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria Dropdown - Expand
          cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
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
          cy.get('#react-select-12-option-8').click({force: true});
          cy.wait(5000)
          // Program - Save the record
          cy.get('[title="Save"]').click({force: true})
          cy.wait(10000)

          // Program - Search Bar - Try to find the created Program
          cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program8);
          cy.wait(5000)
          // Validate the Created Program
          cy.contains(Program8)
          cy.wait(5000)
          // Search Bar - Close icon - click
          cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // logout
          //cy.get('.lw-header__logout > img').click({force: true});
          //cy.wait(5000)
        
  });

  it('TC-009-> Program-TimeBased-Always (if Not Empty)', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)

    //cy.extendSessionTime()
    //cy.wait(10000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*if (cy.contains(Program9)){

      cy.log( Program9 + ': Program found.')

      cy.get('.MuiTable-root').first().contains('tr', Program9).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)

      cy.log( Program9 + ': Program deleted.')

    } else {

      cy.log( Program9 + ': Program not found.')

    }*/

          //Program Tab - Click on Add Icon
          cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Click
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
          cy.wait(5000)
          // Program - Name Text Box - Enter Program Name
          cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(Program9);
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
          // Program - Trigger Dropdown - Select an option - Time Based
          cy.get('#react-select-8-option-0').click({force: true});
          cy.wait(5000)
          // Program - Trigger Dropdown - Select an option - Time Based -Time dropdown - Select Time
          cy.get(':nth-child(6) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
          cy.wait(5000)
          //cy.get('#react-select-13-input').clear();
          // Time Dropdown - Write Time
          cy.get('#react-select-13-input').type('06:45');
          cy.wait(5000)
          // Time Dropdown - Write Time - Select from dropdown
          cy.get('#react-select-13-option-81').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria Dropdown - Expand
          cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
          cy.wait(5000)
          // Program - Minimum Inclusion Criteria Dropdown - Select an option - Always (if NOT Empty)
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
          cy.get('#react-select-12-option-9').click({force: true});
          cy.wait(5000)
          // Program - Save the record
          cy.get('[title="Save"]').click({force: true})
          cy.wait(10000)

          // Program - Search Bar - Try to find the created Program
          cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Program9);
          cy.wait(5000)
          // Validate the Created Program
          cy.contains(Program9)
          cy.wait(5000)
          // Search Bar - Close icon - click
          cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
          cy.wait(5000)
          // logout
          //cy.get('.lw-header__logout > img').click({force: true});
          //cy.wait(5000)

        
  });

  it('TC-010-> Search with All Columns Values', function() {

    cy.visit('/');
    cy.wait(10000)
    // Choose Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
    cy.wait(5000)
    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With Name
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Name);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(Name).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With Fraction
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Fraction);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(Fraction).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With Trigger
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(Trigger);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(Trigger).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With TriggerCondition
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(TriggerCondition);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(TriggerCondition).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With MIC (Minimum Inclusion Criteria)
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(MIC);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(MIC).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With InclusionThreshold
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(InclusionThreshold);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(InclusionThreshold).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With From
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(From);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(From).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With To
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(To);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(To).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Program - Search Bar - Try to find the created Program - With Inlets Points
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type(InletsPoints);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(InletsPoints).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // logout
    cy.get('.lw-header__logout > img').click({force: true});
    cy.wait(5000)

        
  });

})