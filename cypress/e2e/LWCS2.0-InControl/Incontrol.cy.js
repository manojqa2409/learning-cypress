///<reference types="cypress"/>

describe('LWCS2.0', () => {
  
  it('Incontrol-FanGroup', () => {

    // Visti Incontrol URL
    cy.visit('http://localhost:9000/gui');
    cy.wait(5000)
    
    //Header-> Overview-> click  
    cy.get('[data-testid="overview"] > p').click().invoke('text').should('eq', 'Overview');
    cy.wait(5000)
    
    //Header-> Overview-> Fan Group-> Click
    cy.get('[data-testid="fanGroup"]').click().invoke('text').should('eq', 'Fan Group');
    cy.wait(5000)
    
    //Header-> Overview-> Fan Group-> M/S button-> Click
    cy.get('[data-testid="ms"] > .bp5-button-text').click().invoke('text').should('eq', 'm/s');
    cy.wait(5000)
    
    //Header-> Overview-> Fan Group-> Hz button-> Click
    cy.get('[data-testid="hz"] > .bp5-button-text').click().invoke('text').should('eq', 'Hz');
    cy.wait(5000)

    //Header-> Overview-> Fan Group-> Alarm
    cy.get('[data-testid="alarm" ]> svg > path').click();
    cy.wait(5000)

    //Header - FanGroup - Actual - Can not validate the text due to "&nbsp;" extra text
    cy.get('[data-testid="actual"]').click().invoke('text').should('eq', 'Actual');
    cy.wait(5000)

    //Header - FanGroup - Actual - airspeed
    cy.get('[data-testid="airspeed"]').click().invoke('text').as('airspeedValue');
    cy.wait(5000)
    //cy.log(this.airspeedValue);
    //cy.wait(5000)

    //Header - FanGroup - Actual - frequency
    cy.get('[data-testid="frequency"]').click().invoke('text').as('frequencyValue');
    cy.wait(5000)
    //cy.log(this.frequencyValue);
    //cy.wait(5000)

    //Header-> Overview-> Fan Group-> Precon button-> without Click
    cy.get('[data-testid="precon" ]> .bp5-button-text').invoke('text').should('eq', 'Precon');
    cy.wait(5000)

    //Header-> Overview-> Fan Group-> Precon button-> Click on first Value (airspeed)
    cy.get('[data-testid="precon-value-0"]').click().invoke('text').as('preconAirSpeedValue');
    cy.wait(5000)

    //Header-> Overview-> Fan Group-> Precon button-> Click on second Value (frequency)
    cy.get('[data-testid="precon-value-1"]').click().invoke('text').as('preconFrequencyValue');
    cy.wait(5000)
    
    //Header-> Overview-> Fan Group-> Precon button-> Click
    cy.get('[data-testid="precon" ]> .bp5-button-text').click().invoke('text').should('eq', 'Precon');
    cy.wait(5000)

    //Header-> Overview-> Fan Group-> Precon button-> Click on first Value (airspeed)
    cy.get('[data-testid="precon-value-input-0"]').click().invoke('text').as('preconAirSpeedValue1');
    cy.wait(5000)

    //Header-> Overview-> Fan Group-> Precon button-> Click on second Value (frequency)
    cy.get('[data-testid="precon-value-input-1"]').click().invoke('text').as('preconFrequencyValue1');
    cy.wait(5000)
    
    //Header-> Overview-> Fan Group-> Precon button-> Click
    cy.get('[data-testid="precon" ]> .bp5-button-text').click();
    cy.wait(5000)

    //Header-> Overview-> Fan Group-> Tab1
    cy.get('[data-testid="tab1"]').click()
    cy.wait(5000)

    //Header-> Overview-> Fan Group-> Tab1
    cy.get('[data-testid="tab2"]').click()
    cy.wait(5000)
    

  })
})