/// <reference types="Cypress" />

describe('Session Management with JSESSIONID in Cypress 13.0.0', () => {
    // Define the login function
    const login = () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/login', // Adjust the URL to your login endpoint
        body: {
            "username":"manoj.kumar@logiwaste.se",
            "password":"M@noj!23$"
        }
      }).then((response) => {
        // Assuming the JSESSIONID is in the response cookies
        const jsessionid = response.headers['set-cookie']
          .find(cookie => cookie.startsWith('JSESSIONID'))
          .split(';')[0]
          .split('=')[1];
        
        cy.setCookie('JSESSIONID', jsessionid);
        cy.log(jsessionid);
      });
    };
  
    beforeEach(() => {
      // Use cy.session to cache the session and cookies
      cy.session('loginSession', login);
    });
  
    it('Outdoor-Overview-ServiceMode', function() {
        cy.visit('/');

      /*Choose English Flag to change the labels/Texts in English from Swedish*/
        cy.get(':nth-child(1) > .select-language__flag--img').click();
        cy.wait(10000)
        /*Expand Container Section*/
        cy.get('#accordion__heading-container').click();
        cy.wait(5000)
      })

  it('Outdoor-Overview-ServiceMode', function() {
      cy.visit('/');

      /*Expand FanGroup Section*/
      cy.get('#accordion__heading-airSpeed').click();
      cy.wait(5000)
      // Logout
      cy.get('.lw-header__logout > img').click();
  })
  });
  