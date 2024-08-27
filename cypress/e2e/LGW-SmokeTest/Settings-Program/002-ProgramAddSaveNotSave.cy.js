///<reference types="cypress"/>

describe('Program-Add-NotSave-Save', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
  })

  beforeEach(() =>{

    cy.session('loginSession', () => {
        cy.login();
        cy.wait(5000)
    })
  })

  const ProgramName = 'AutoPro-1';

  it('TC-001-> Add-NotSave-Save', function() {

    cy.visit('/')
    cy.wait(5000)

    cy.get(':nth-child(1) > .select-language__flag--img').dblclick({force: true})
    cy.wait(5000)
    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)
    /*Program - Add all fields but NOT Save - Start Here*/
    //Program Tab - Click on Add Icon
    cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
    cy.wait(5000)
    // Program - Name Text Box - Click
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
    cy.wait(5000)
    // Program - Name Text Box - Clear any text if already there
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').clear();
    cy.wait(5000)
    // Program - Name Text Box - Enter Program Name
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(ProgramName);
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
    cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
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
  // Program - Not Save and Click on Cancel option
    cy.get('[title="Cancel"]').click({force: true})
    //cy.get('[aria-describedby="mui-27152"] > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
    cy.wait(5000)
    // Program - Search Bar - Try to find the Program which Doesn't save to make sure it NOT created eventhough it has canceled.
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(ProgramName);
    cy.wait(5000)
    // Program - Search Bar - Verify the record in searched result - No records to display
    cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root').click({force: true}).should('have.text', 'No records to display')
    cy.wait(5000)
    // Program - Search Bar - Remove String from Search BAr
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    /*Program - Add all fields but NOT Save - Complete*/

  })

  it('TC-002-> Add->Save', function() {

    cy.visit('/')
    cy.wait(5000)

    //Click on Settings Icon
    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    /*Program - Add all fields but Save - Start Here*/
    // Program - Add Icon - Click
    cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)
    // Program - Name - Click in Text Box
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > :nth-child(1) > .input-box').click({force: true});
    cy.wait(5000)
    //cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').clear();
    //cy.wait(5000)
    // Program - Name - Enter Name
    cy.get('[style="color: inherit; width: 8%; max-width: 8%;"] > div > .input-box').type(ProgramName);
    cy.wait(5000)
    // Program - Fraction Dropdown - Expand
    cy.get(':nth-child(4) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    // Program - Fraction Dropdown - Select an option
    cy.get('#react-select-13-option-0').click({force: true});
    cy.wait(5000)
    // Program - Trigger Dropdown - Expand
    cy.get(':nth-child(5) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    // Program - Trigger Dropdown - Select an option
    cy.get('#react-select-14-option-1').click({force: true});
    cy.wait(5000)
    // Program - Minimum Inclusion Criteria Dropdown - Expand
    cy.get(':nth-child(7) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    // Program - Minimum Inclusion Criteria Dropdown - Select an option
    cy.get('#react-select-15-option-2').click({force: true});
    cy.wait(5000)
    // Program - From - Expand
    cy.get(':nth-child(9) > [style="width: 70px; display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__single-value').click({force: true});
    cy.wait(5000)
    // Program - From - Select an option
    cy.get('#react-select-16-option-0').click({force: true});
    cy.wait(5000)
    // Program - Inlets Points - Expand
    cy.get('[style="color: inherit; width: 45%; max-width: 45%;"] > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click({force: true});
    cy.wait(5000)
    // Program - Inlets Points - Select an option
    cy.get('#react-select-18-option-1').click({force: true});
    cy.wait(5000)
    // Program - Save the record
    cy.get('[title="Save"]').click({force: true})
    cy.wait(5000)
    // Program - Search Bar - Try to find the created Program
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(ProgramName);
    cy.wait(5000)
    // Validate the Created Program
    cy.contains(ProgramName).should('exist')
    cy.wait(5000)
    // Search Bar - Close icon - click
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)

    // Delete Program
    cy.get('.MuiTable-root').first().contains('tr', ProgramName).find('td').first().find('svg.MuiSvgIcon-root').eq(2).click({force: true})
    cy.wait(5000)
    cy.get('[title="Save"]').click({force: true})
    cy.wait(5000)

    /*Program - Add all fields but Save - End Here*/

    // Logout
    //cy.get('.lw-header__logout > img').click({force: true});
    //cy.wait(5000)

  });
})