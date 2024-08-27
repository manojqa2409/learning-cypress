///<reference types="cypress"/>

describe('LGW-QGUI-AT-NKS', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
		cy.session('loginSession', () => {
				cy.login();
				cy.wait(5000)
			})
	})

    it('TC-001-> Toggle Verification', () =>{

        cy.visit('/');
        cy.wait(5000)
        cy.expandAccordionsGlobalToggleFlag()
        
        /*ADD AIV in Control View*/
        cy.get(':nth-child(6) > .ov-main__wrapper > :nth-child(1) > .ov-aiv > .lw-switch > [style="display: flex; flex-direction: column; align-items: center;"] > .ov-aiv__status > [style="display: flex; align-items: center; justify-content: space-between;"]').click({force: true});
        cy.wait(5000)
        /*ADD Inlet which is associated of selected AIV in Control View*/
        cy.get(':nth-child(6) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > .accordion > .accordion__item > #accordion__panel-shaftNodeVerticle > .shaft-node-card__content > [style="padding: 0.3em;"] > [style="border-bottom: 1px solid rgb(195, 210, 210);"] > :nth-child(1) > .s-n-inlet__name > span').click({force: true});
        cy.wait(5000)
        /*ADD Fraction Switch-4 in Control View which is associated with above Inlet*/
        cy.get(':nth-child(6) > .ov-main__wrapper > .ov-shaft > :nth-child(2) > .ov-shaft-node-card > .s-n-v > [style="display: flex; flex-direction: column;"] > .shaft-node-bottom-part > :nth-child(1) > .s-n-b-p-fractions__wrapper > span').click({force: true});
        cy.wait(5000)			

        /*AIV/FireDamper - Move in Service Mode*/
        cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        /*Fire Damper Valve Open - Click on Toggle*/
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('not.be.checked');
        cy.wait(5000)
        //cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('have.class', 'control-label off')
        cy.wait(5000)
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(300000)
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('be.checked')
        cy.wait(5000)
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > .slider').click({force: true});
        cy.wait(300000)
        cy.get('[style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; border-right: 1px dotted gray; padding-right: 2px; padding-left: 2px;"] > [style="display: flex; padding-right: 4px;"] > .lw-toggle > div > .switch > input').should('not.be.checked');
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > .control-view-main__sidebar > .control-view-main > :nth-child(1) > [style="display: flex; flex: 1 1 0%; align-items: center;"] > .lw-switch > .lw-switch__label > img').click({force: true});
        cy.wait(5000)
        /*logout*/
        cy.get('.lw-header__logout > img').click({force: true})
        cy.wait(5000)

    })


})