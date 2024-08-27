describe("Paused", () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
})

//let inletcount = 0

beforeEach(() =>{
    cy.viewport(1900, 1000)//Change screen size
    //Cypress.Cookies.preserveOnce('JSESSIONID', 'session_id', 'remember_token');
})

  it("tests Paused", () => {
    
    cy.visit('http://localhost:8081/gui') //Visit the URL
    cy.wait(3000)
    cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se') //Enter Username
    cy.wait(5000)
    cy.get('[data-test="password"] > input').type('M@noj!23$') //Enter Password
    cy.wait(5000)
    cy.get('.button__label').click() // Click on Login button
    cy.wait(10000)
    
    cy.get("#accordion__heading-container").click(); // Expend Container section
    cy.get("div.terminal__components-view > div > div:nth-of-type(2)").click(); // Expend Fan Group section
    cy.get("#accordion__heading-airSpeed").click(); // Expend Fan Group section
    cy.get("[data-test='logs']").click(); // Choose Logs tab
    
    cy.get("#accordion__heading-manualEmpty").click(); // Expend Create Quued Group
    cy.get("#accordion__panel-manualEmpty > div > div > div:nth-of-type(1) div.lw-select__placeholder").click();// Open Fraction Dropdown
    cy.get("#react-select-2-option-0").click(); // Select Fraction- Papir
    cy.get("#quantum-root div.lw-select__placeholder").click(); // Open Inlet Dropdown
    cy.get("#react-select-4-option-1").click();// Select Papir Inlet
    cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click();// Clikc on Submit button to start Empty
    cy.wait(5000)
    
    cy.get("#accordion__panel-manualEmpty > div > div > div:nth-of-type(1) div.lw-select__placeholder").click();// Open Fraction Dropdown
    cy.get("#react-select-2-option-1").click();// Select Fraction- Rest
    cy.get("#quantum-root div.lw-select__placeholder").click(); // Open Inlet Dropdown
    cy.get("#react-select-4-option-1").click();// Select Rest Inlet
    cy.get("div:nth-of-type(3) > div:nth-of-type(1) [data-test='action-empty'] div").click();// Clikc on Submit button to start Empty
    cy.wait(5000)

    cy.get("#accordion__heading-upcomingTask").click();// Expand Queued Group section
    //cy.get("div > div > div.empty-task").click();// Added empty task showing
    cy.wait(30000)
    
    cy.get("#play-button").click(); // Click on Pause button
    cy.get("#accordion__heading-upcomingTask").should('have.text','Queued GroupsPaused')
    cy.wait(70000) // waiting for ongoing emptying to finish
    cy.get('.lw-header__left').should('have.text','IDLE\u00a0(Queued Groups Paused)') // Validate the Pasued text on left side header - it has non-breaking space insted of normal space &nbsp;
    //cy.get('[style="background: none; padding: 0.3rem; border-radius: 3px; font-size: 11px; font-weight: 600; color: rgb(1, 104, 94); min-width: 110px; margin-top: 1.5px; margin-right: 3px;"]').contains('IDLE  (Queued Groups Paused)')
    //cy.wait(10000)
    
    cy.get("div.arrow-right").click(); // Click on again Pause button to unpause

    cy.wait (100000)// waiting for next shaft which move in emptying to finish after Unpaused
    
    cy.get("div.lw-header__logout > img").click();
    
  });
});
