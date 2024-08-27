// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// LGW--Dynamic Empty Status
function waitForStatusUpdate(selector, timeout = 10000) {
    let elapsedTime = 0;
    const checkInterval = 500; // Check every 500ms
  
    function checkCondition() {
      return new Cypress.Promise((resolve, reject) => {
        cy.get('body').then($body => {
          if ($body.find(selector).length > 0 && $body.find(selector).text() === 'Updated') {
            resolve();
          } else if (elapsedTime > timeout) {
            reject(new Error('Timeout waiting for status update'));
          } else {
            elapsedTime += checkInterval;
            setTimeout(checkCondition, checkInterval);
          }
        });
      });
    }
  
    return checkCondition();
  }

//LGW-Login (cy.session) command to make global login

  
  // ===== End command to Global Login ==== //
    
  Cypress.Commands.add('expandAccordionsGlobalToggleFlag', () => {

    cy.wait(5000)
    //Choose English Language
    cy.get(':nth-child(1) > .select-language__flag--img').dblclick()
    cy.wait(10000)
    /*Expand Container Section*/
    cy.get('#accordion__heading-container').click({force: true});
    cy.wait(5000)
    /*Expand FanGroup Section*/
    cy.get('#accordion__heading-airSpeed').click({force: true});
    cy.wait(5000)
    /*Expand All ISV Groups with Global Toggle button*/
/*
    cy.get('.overview__wrapper > .lw-toggle > div > .switch > .slider > .control-label').then(($el) => {

      if ($el != null && $el.length > 0) {
        cy.log('Global Toggele is found, need to click')
        cy.wait(5000)
        cy.get('.overview__wrapper > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
        cy.wait(5000)
        cy.log('Clicked on Global Toggele.')
      } else {
        cy.log('Global Toggele is NOT found, so cannot click')
        cy.wait(5000)
      }

    })*/
      cy.get('body').then($body => {
        if ($body.find('.overview__wrapper > .lw-toggle > div > .switch > .slider > .control-label').length) {
          // Do something if exist
          cy.log('Global Toggele is found, need to click')
          cy.wait(5000)
          cy.get('.overview__wrapper > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
          cy.wait(5000)
          cy.log('Clicked on Global Toggele.')
        } else {
          // Do if not exist
          cy.log('Global Toggele is NOT found, so cannot click')
          cy.wait(5000)
        }
      })
    //cy.get('.overview__wrapper > .lw-toggle > div > .switch > .slider > .control-label').click({force: true});
    /*Check All ISV Groups with Global Toggle button*/
    //cy.get('.overview__wrapper > .lw-toggle > div > .switch > input').check({force: true});
    cy.wait(5000)

  })

  /******Login method with API call*****/
      // Define the login function
      Cypress.Commands.add('login', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:8081/login', // Adjust the URL to your login endpoint
          body: {
              "username":"manoj.kumar@logiwaste.se",
              "password":"M@noj!23$"
          }
        }).then((response) => {
          // Assuming the JSESSIONID is in the response cookies
          const JSESSIONID = response.headers['set-cookie']
            .find(cookie => cookie.startsWith('JSESSIONID'))
            .split(';')[0]
            .split('=')[1];
          
          cy.setCookie('JSESSIONID', JSESSIONID);
          cy.log('This is the JSESSIONID from cookies: ' + JSESSIONID);

        });
        
        
})

      /******Extend Session Time Command*****/
  Cypress.Commands.add('extendSessionTime', () => {

    //Click on User section
    cy.get('.active-users__action-label > [style="padding: 2px;"]').click();
    cy.wait(3000)
    // Open dropdown options 
    cy.get('[style="display: inline-block; width: 53%;"] > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
    cy.wait(3000)
    // Select "Extend Idle Time" option
    cy.get('#react-select-5-option-0').click();
    cy.wait(3000)
    // Open "Extend Idle Time" sub dropdown
    cy.get('[style="display: inline-block; width: 47%;"] > [style="display: flex; flex-direction: column; flex: 1 1 0%;"] > .lw-select-inner > .lw-select__control > .lw-select__value-container > .lw-select__placeholder').click();
    cy.wait(3000)
    
    // Select "30 minutes" from sub options
    //cy.get('#react-select-6-option-1').click();
    //cy.wait(6000)
    
    // Select "60 minutes" from sub options
    cy.get('#react-select-6-option-2').click();
    cy.wait(6000)

    // Select "120 minutes" from sub options
    //cy.get('#react-select-6-option-3').click();
    //cy.wait(6000)

    // Collapse User section
    cy.get('.active-users__action-label > [style="padding: 2px;"]').click();
    cy.wait(3000)

  })

 
 

 



