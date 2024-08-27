///<reference types="cypress"/>

describe('LGW- Quantum UI Automation Test', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
    })

    beforeEach(() =>{
            cy.viewport(1900, 1000)//Change screen size
    })

    it('API Testing', () =>{

            //cy.viewport(2000, 1100)//Change screen size
            cy.visit('http://localhost:8081/gui/') //Visit the URL
            cy.wait(3000)
            cy.get('[data-test="email"] > input').type('manojqa12@gmail.com') //Enter Username
            cy.wait(3000)
            cy.get('[data-test="password"] > input').type('ChangeIt') //Enter Password
            cy.wait(3000)
            cy.get('.button__label').click() // Click on Login button
            cy.wait(5000)
            /*Fraction API Testing*/
            cy.request({
                method : 'GET', 
                url : 'http://localhost:8081/public/fractions/'
                    })
                    .then((response) =>{
                        expect(response.status).to.eq(200)
                        //chai.assert('Rest')
                        const fraction_name=response.body[0]
                        //const fraction_id=response.body[0].id
                        return fraction_name
                        console.log(response.body)
                        //expect(response.body.results).length.to.be.greaterThan(1)
                        //cy.log(fraction_name)
                        //return fraction_id
                        //cy.log(JSON.stringify(response.body))
                    })
                        .then((fraction_name)=>{
                            console.log(fraction_name)

                        })
                        
                        })
            
        
            })