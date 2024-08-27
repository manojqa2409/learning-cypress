///<reference types="cypress"/>

describe('Session Extend', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
		cy.session('loginSession', () => {
			cy.login();
			cy.wait(5000)
		})
	})
	
	it('TC-001-> English Language-> Expand Accordians(Container-FanGroup- Global Toggle) -> Inlets & Bottom Part-> Session Extend', () =>{

        	cy.visit('/');
			cy.wait(3000)

			cy.expandAccordionsGlobalToggleFlag();
						
			cy.extendSessionTime()
			cy.wait(1000)

			/*Validate the toster and their message which describe about the Current Session extend details*/
			cy.get('.lw-toasts__toast').should('be.visible')
			.and('contain.text', 'Session Extended')
			.and('contain.text', 'The current session gets extended by 60 minutes.')
			cy.wait(5000)

        })
})