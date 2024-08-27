/// <reference types="Cypress" />

describe('Program-Duplicate', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
})

beforeEach(() =>{
  cy.session('loginSession', () => {
        cy.login();
        cy.wait(3000)
      })
  })

const DupProgram1 = 'Auto-Duplicate-Full-Never';
const SearchProgramString = 'Auto';

it('TC-001-> Create Program', function() {

  cy.visit('/')
  cy.wait(5000)
  //cy.visit('/');
  //cy.wait(10000)
  // Choose Language
  cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
  cy.wait(5000)

  //cy.extendSessionTime()
  //cy.wait(10000)

  //Click on Settings Icon
  cy.get('.lw-tab__item > img').click({force: true});
  cy.wait(5000)
          
  // Program - Search Bar - Try to find the created Program
  cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force: true}).type(SearchProgramString);
  cy.wait(5000)
  // Validate the Created Program
  //cy.contains(DupProgram1)
  //cy.wait(5000)



  if (cy.contains(DupProgram1)){
    cy.log( DupProgram1 + ': Program found.')
    cy.get('.MuiTable-root').first().contains('tr', DupProgram1).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click()
    cy.wait(10000)
    cy.get('[title="Save"]').click()
    cy.wait(10000)
    cy.log( DupProgram1 + ': Program deleted.')
  } else {
    cy.log( DupProgram1 + ': Program not found.')
  }

        //Program Tab - Click on Add Icon
        cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
        cy.wait(5000)
        // Program - Name Text Box - Click
        cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
        cy.wait(5000)
        // Program - Name Text Box - Enter Program Name
        cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(DupProgram1);
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
        // Program - Trigger Dropdown - Select an option
        cy.get('#react-select-8-option-1').click({force: true});
        cy.wait(5000)
        // Program - Minimum Inclusion Criteria Dropdown - Expand
        cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
        cy.wait(5000)
        // Program - Minimum Inclusion Criteria Dropdown - Select an option
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
        //cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force: true}).type(SearchProgramString);
        //cy.wait(5000)
        // Validate the Created Program
        cy.contains(DupProgram1)
        cy.wait(5000)
        // Search Bar - Close icon - click
        cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
        cy.wait(5000)
        // logout
        //cy.get('.lw-header__logout > img').click({force: true});
        //cy.wait(5000)
      
});

it('TC-002-> Again Create with Same Data -> Duplicate Validation', function() {

  cy.visit('/')
  cy.wait(5000)

  // Choose Language
  cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
  cy.wait(5000)

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
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(DupProgram1);
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
  // Program - Trigger Dropdown - Select an option
    cy.get('#react-select-8-option-1').click({force: true});
    cy.wait(5000)
  // Program - Minimum Inclusion Criteria Dropdown - Expand
    cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
  // Program - Minimum Inclusion Criteria Dropdown - Select an option
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

 /*Validate the toster and their message which describe about the Duplicate Program details*/
  	cy.get('.lw-toasts__toast').should('be.visible')
			.and('contain.text', 'Program Error')
			.and('contain.text', 'Program name already exists')
	  cy.wait(10000)

  // Program - Cancel the record
      cy.get('[title="Cancel"]').click({force: true})
      cy.wait(10000)
    
});

it('TC-003-> Copy->Edit->Duplicate Validation', function() {

  cy.visit('/')
  cy.wait(5000)
  //cy.visit('/');
  //cy.wait(10000)
  // Choose Language
  cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true});
  cy.wait(5000)

  //cy.extendSessionTime()
  //cy.wait(10000)

  //Click on Settings Icon
  cy.get('.lw-tab__item > img').click({force: true});
  cy.wait(5000)

  // Program - Search Bar - Try to find the created Program
  cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force: true}).type('Auto');
  cy.wait(5000)

  // Copy Action in Program Tab - Working fine

  cy.get('.MuiTable-root').first()
  .contains('tr', DupProgram1)
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(0).click()
  cy.wait(10000)

  // Edit Action in Program Tab - Working fine

  cy.get('.MuiTable-root').first()
  .contains('tr', 'Copy of ' + DupProgram1)
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(1).click()
  cy.wait(10000)

  // Program - Name Text Box - Click
  cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
  cy.wait(5000)
  // Program - Name Text Box - Enter Program Name
  cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').clear();
  cy.wait(5000)
  cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(DupProgram1);
  cy.wait(5000)

  // Program - Save the record
  cy.get('[title="Save"]').click({force: true})
  cy.wait(10000)

  /*Validate the toster and their message which describe about the Duplicate Program details*/
	cy.get('.lw-toasts__toast').should('be.visible')
  .and('contain.text', 'Program Error')
	.and('contain.text', 'Program name already exists')
	cy.wait(10000)

  // Program - Cancel the record
  cy.get('[title="Cancel"]').click({force: true})
  cy.wait(10000)

  // logout
  //cy.get('.lw-header__logout > img').click({force: true});
  //cy.wait(5000)
      

});

});