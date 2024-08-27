describe('template spec', () => {
  it('InControl', () => {
   
    cy.visit('http://localhost:9000/gui');
    cy.get('[data-testid="overview"] > p').click();
    cy.get('[data-testid="fanGroup"]').click();
    cy.get('#FGTabPanel > .bp5-tabs > .bp5-tab-list > #bp5-tab-title_undefined_Tab1').click();
    cy.get('#FGTabPanel > .bp5-tabs > .bp5-tab-list > #bp5-tab-title_undefined_Tab2').click();
    cy.get('[data-testid="fanGroup"]').click();
    cy.get('[data-testid="hz"] > .bp5-button-text').click();
    cy.get('[data-testid="ms"] > .bp5-button-text').click();
    cy.get(':nth-child(4) > :nth-child(1) > .bp5-button > .bp5-button-text').click();
    cy.get(':nth-child(4) > :nth-child(1) > .bp5-button > .bp5-button-text').click();
    cy.get('#bp5-tab-title_undefined_Stor_mgr').click();
    cy.get('.lw-cs-4').click();
    cy.get(':nth-child(2) > .storage-container__cell').click();

  })
})