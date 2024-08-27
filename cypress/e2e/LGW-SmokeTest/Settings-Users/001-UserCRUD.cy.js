///<reference types="cypress"/>

describe('User', () => {

Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
})

beforeEach(() =>{

    cy.session('loginSession', () => {
        cy.login();
        cy.wait(5000)
    })
})


  it('TC-01-Validate User Table-Create-Search-Edit-Delete', function() {

    cy.visit('/')
    cy.wait(5000)

    cy.get('.lw-tab__item > img').click({force: true});
    cy.wait(5000)

    cy.get('[data-test="users"]').click({force: true});
    cy.wait(5000)

          /*Validation of User Table - User rows exist or not*/
          cy.get('.MuiTable-root').find('tbody tr').then(($el) => {
            cy.wait(5000)
    
            if ($el != null && $el.length > 0) {
                cy.wait(5000)
                // Element exists, do something
                    cy.log('User rows are exist in the table')
                   } else {
                // Element does not exist, do something else
                cy.log('User rows does not exist in the table')
                cy.wait(5000)
              }
            })


    // User Tab - Click Add icon
    cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
    cy.wait(5000)
    // User Tab - First Name Text Box - Validation - cannot be empty
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiFormHelperText-root').click({force: true}).should('exist', 'cannot be empty');
    cy.wait(5000)
    // User Tab - Email Text Box - Validation - please enter valid value
    cy.get('[style="color: inherit; width: 20%; max-width: 20%;"] > .MuiFormControl-root > .MuiFormHelperText-root').click({force: true}).should('exist', 'please enter valid value');
    cy.wait(5000)
    // User Tab - Role dropdown - Validation - cannot be empty
    cy.get('[style="color: red; font-size: 12px; margin-top: 10px; white-space: nowrap;"]').click({force: true}).should('exist', 'cannot be empty');
    cy.wait(5000)
    // User Tab - Password Text Box - Validation - Number of chars 8-20,1 Special,1 Caps & No Space
    cy.get(':nth-child(7) > .MuiFormControl-root > .MuiFormHelperText-root').click({force: true}).should('exist', 'Number of chars 8-20,1 Special,1 Caps & No Space');
    cy.wait(5000)
    // User Tab - First Name Text Box - Enter Value - 
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('trtwert');
    cy.wait(5000)
    // User Tab - Last Name Text Box - Enter Value - 
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('56tht');
    cy.wait(5000)
    // User Tab - Email Text Box - Enter Value - 
    cy.get('[style="color: inherit; width: 20%; max-width: 20%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('test@gmail.com');
    cy.wait(5000)
    // User Tab - Role Dropdown - Expand
    cy.get(':nth-child(6) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
    cy.wait(5000)
    // User Tab - Role Dropdown - Select Value - Administrator (0-Administrator, 1-Maintenance, 2-Operator, 3-Guest)
    cy.get('#react-select-7-option-0').click({force: true});
    cy.wait(5000)
    // User Tab - Password Text Box - Enter Value
    cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Admin@123');
    cy.wait(5000)
    // User Tab - Confirm Password Text Box - Validation - password did not match
    cy.get('.MuiFormHelperText-root').click({force: true}).should('exist', 'password did not match');
    cy.wait(5000)
    // User Tab - Confirm Password Text Box - Enter Value
    cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Admin@123');
    cy.wait(5000)
    // User Tab - Click on Save button
    cy.get('[title="Save"]').click({force: true})
    cy.wait(5000)

    /*===== Search User =====*/
    // User Tab - Search created User based on - Email
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('test@gmail.com');
    cy.wait(5000)
    // User Tab - Search created User based on - Email - Click on Searched result
    cy.get('[index="0"] > [value="test@gmail.com"]').click({force: true});
    cy.wait(5000)
    // User Tab - Search created User based on - Email - Click on Close sign (x) - To remove entered string
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
    cy.wait(5000)
    // User Tab - Search created User based on - Email
    cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('test@gmail.com');
    cy.wait(5000)

    /*==== Edit User   ====*/
    // User Tab - Edit Icon
    cy.get('[index="0"] > .MuiTableCell-paddingNone > div > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
    cy.wait(5000)
    // User Tab - First Name Text Box - Clear Value - 
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear('trtwer');
    cy.wait(5000)
    // User Tab - First Name Text Box - Enter Value - Auto
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Auto');
    cy.wait(5000)
    // User Tab - Last Name Text Box - Clear Value -
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear('56tht');
    cy.wait(5000)
    // User Tab - Last Name Text Box - Enter Value - User
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User');
    cy.wait(5000)
    // User Tab - click on Save icon
    cy.get('[title="Save"]').click({force: true})
    cy.wait(5000)

    // Logout
    //cy.get('.lw-header__logout > img').click({force: true});
    //cy.wait(5000)

  });

  it('TC-02-Duplicate User Validation', function() {

    cy.visit('/')
    cy.wait(5000)
    
      cy.get('.lw-tab__item > img').click({force: true});
      cy.wait(5000)
  
      cy.get('[data-test="users"]').click({force: true});
      cy.wait(5000)



      // User Tab - Click Add icon
      cy.get('.MuiTableSortLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
      cy.wait(5000)
      
      // User Tab - First Name Text Box - Enter Value - 
      cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Auto');
      cy.wait(5000)
      // User Tab - Last Name Text Box - Enter Value - 
      cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User');
      cy.wait(5000)
      // User Tab - Email Text Box - Enter Value - 
      cy.get('[style="color: inherit; width: 20%; max-width: 20%;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('test@gmail.com');
      cy.wait(5000)
      // User Tab - Role Dropdown - Expand
      cy.get(':nth-child(6) > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').click({force: true});
      cy.wait(5000)
      // User Tab - Role Dropdown - Select Value - Administrator (0-Administrator, 1-Maintenance, 2-Operator, 3-Guest)
      cy.get('#react-select-7-option-0').click({force: true});
      cy.wait(5000)
      // User Tab - Password Text Box - Enter Value
      cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Admin@123');
      cy.wait(5000)
      // User Tab - Confirm Password Text Box - Validation - password did not match
      cy.get('.MuiFormHelperText-root').click({force: true}).should('exist', 'password did not match');
      cy.wait(5000)
      // User Tab - Confirm Password Text Box - Enter Value
      cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Admin@123');
      cy.wait(5000)
      // User Tab - Click on Save button
      cy.get('[title="Save"]').click({force: true})
      cy.wait(3000)
      
      /*Validate the toster and their message which describe about the Duplicate User details*/
      cy.get('.lw-toasts__toast').should('be.visible')
      .and('contain.text', 'Error')
      .and('contain.text', 'User already exists on the list')
      cy.wait(10000)

      // User - Cancel the record
      cy.get('[title="Cancel"]').click({force: true})
      cy.wait(10000)

      /*==== Delete User ====*/

      // User Tab - Search Area - Remove String - created User based on - First Name
      cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear('tes');
      cy.wait(5000)
      // User Tab - Search Area - created User based on - First Name
      cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('auto');
      cy.wait(5000)
      // User Tab - Delete - Created User - Click on Cross Red Icon
      cy.get(':nth-child(2) > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
      cy.wait(5000)
      // User Tab - Delete - Confirmation message - Validation
      cy.contains('Are you sure delete this row?').should('exist');
      cy.wait(5000)
      // User Tab - Click on Yes Icon on confirmation message of Delete User
      cy.get('[title="Save"]').click({force: true})
      //cy.get('[aria-describedby="mui-11377"] > .MuiIconButton-label > .MuiSvgIcon-root').click({force: true});
      cy.wait(5000)
      // User Tab - Once User Deleted - Validation - No records to display
      cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root').click({force: true}).should('be.visible', 'No records to display')
      cy.wait(5000)
      // User Tab - Search Area - Click on Cross(x) Icon
      cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click({force: true});
      cy.wait(5000)

      // Logout
      cy.get('.lw-header__logout > img').click({force: true});
      cy.wait(5000)

  });
});