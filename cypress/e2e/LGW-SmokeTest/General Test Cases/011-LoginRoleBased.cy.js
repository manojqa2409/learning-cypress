///<reference types="cypress"/>

describe('Role Based Login', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Handle uncaught exception
        })

        beforeEach(() =>{
                //cy.viewport(1900, 1200)//Change screen size
            })

            it('TC-001-> Login-Admin', () =>{

                    cy.visit('http://localhost:8081/gui') //Visit the URL
                    cy.wait(3000)
                    //cy.reload(true)
                    cy.get('[data-test="email"] > input').type('manojqa12@gmail.com') //Enter Username
                    cy.wait(3000)
                    cy.get('[data-test="password"] > input').type('ChangeIt') //Enter Password
                    cy.wait(3000)
                    cy.get('.button__label').click() // Click on Login button
                    cy.wait(10000)
                    cy.get("#widget-active-users-root span:nth-of-type(2)").click();// Click on User Logged section to expend
                    cy.wait(5000)
                    /*Admin Role verification*/ 
                    if (cy.get("div.active-user__user-role").should('have.text', 'A')){
                            
                            cy.log('Logged user is having an Admin role')
                        }else{
                            cy.log('Logged user does Not have an Admin role')
                        }
                    cy.get("div.lw-header__logout > img").click();
                    cy.wait(5000)
                    //cy.get("form > div:nth-of-type(2) input").click();
            })

            it('TC-002 -> Login-Maintenance', () =>{

                    cy.visit('http://localhost:8081/gui/') //Visit the URL
                    cy.reload(true)
                    //cy.get("form > div:nth-of-type(2) input").click();
                    cy.wait(3000)
                    cy.get('[data-test="email"] > input').type('maintenance1@gmail.com') //Enter Username
                    cy.wait(3000)
                    cy.get('[data-test="password"] > input').type('M@noj123') //Enter Password
                    cy.wait(3000)
                    cy.get('.button__label').click() // Click on Login button
                    cy.wait(10000)
                    cy.get("#widget-active-users-root span:nth-of-type(2)").click();// Click on User Logged section to expend
                    cy.wait(5000)
                    
                    /*Maintenance Role verification*/ 
                    
                    if (cy.get("div.active-user__user-role").should('have.text', 'M')){
                            
                            cy.log('Logged user is having a Maintenance role')
                        }else{
                            cy.log('Logged user does Not have a Maintenance role')
                        }
                    cy.get("div.lw-header__logout > img").click();
                    cy.wait(5000)
            })                
            
            it('TC-003 -> Login-Operator', () =>{

                    cy.visit('http://localhost:8081/gui/') //Visit the URL
                    cy.reload(true)
                    //cy.get("form > div:nth-of-type(2) input").click();
                    cy.wait(3000)
                    cy.get('[data-test="email"] > input').type('operator1@gmail.com') //Enter Username
                    cy.wait(3000)
                    cy.get('[data-test="password"] > input').type('M@noj123') //Enter Password
                    cy.wait(3000)
                    cy.get('.button__label').click() // Click on Login button
                    cy.wait(10000)
                    cy.get("#widget-active-users-root span:nth-of-type(2)").click();// Click on User Logged section to expend
                    cy.wait(5000)
                    
                    /*Operator Role verification*/     
                    if (cy.get("div.active-user__user-role").should('have.text', 'O')){
                            
                            cy.wait(3000)
                            cy.log('Logged user is having an Operator role')
                        }else{
                            cy.log('Logged user does Not have an Operator role')
                        }
                    cy.get("div.lw-header__logout > img").click();
                    cy.wait(5000)
                    
            })

            it('TC-004 -> Login-Guest', () =>{
                    cy.visit('http://localhost:8081/gui/') //Visit the URL
                    cy.reload(true)
                    //cy.get("form > div:nth-of-type(2) input").click();
                    cy.wait(3000)
                    cy.get('[data-test="email"] > input').type('guest@gmail.com') //Enter Username
                    cy.wait(3000)
                    cy.get('[data-test="password"] > input').type('M@noj123') //Enter Password
                    cy.wait(3000)
                    cy.get('.button__label').click() // Click on Login button
                    cy.wait(10000)
                    cy.get("#widget-active-users-root span:nth-of-type(2)").click();// Click on User Logged section to expend
                    cy.wait(5000)
                    /*Guest Role verification*/    
                    if (cy.get("div.active-user__user-role").should('have.text', 'G')){
                            
                            cy.log('Logged user is having a Guest role')
                        }else{
                            cy.log('Logged user does Not have a Guest role')
                        }
                    cy.get("div.lw-header__logout > img").click();
                    cy.wait(5000)
            })
})