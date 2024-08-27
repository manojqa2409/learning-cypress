///<reference types="cypress"/>

 describe('Login-Localization', () =>{

        Cypress.on('uncaught:exception', (err, runnable) => {
                return false; // Handle uncaught exception
        })
    
        beforeEach(() =>{

                cy.session('loginSession', () => {
                        cy.login();
                })
         
        })
  
        it('TC-001 -> English Language Text Verification', () =>{

                cy.visit('/') //Visit the URL
                cy.wait(5000)
        
                //**Choose language Swedish to English */
                cy.get(':nth-child(1) > .select-language__flag--img').click()
                cy.wait(10000)
                //Do something
                cy.log("English language is selected, so performing the actions")
                cy.wait(3000)

                cy.get('#accordion__heading-container').click({force : true})
                cy.wait(5000)
                cy.get('#accordion__heading-container').contains("Container")// container
                cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Speed") // Speed
                cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frequency") // Frequency
                cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Diff. Pressure") // Container Diff Pressure
                                        
                cy.get('[data-test="logs"]').should('have.text', 'Logs') // Verify the text 'Logs' in English language

                // Logs tab details
                cy.get('[data-test="logs"]').click()
                cy.wait(5000)
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').should('have.text', 'Time')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').should('have.text', 'ID')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').should('have.text', 'Display Message')  

                cy.get('[data-test="alarms"]').should('have.text', 'Alarms') // Verify the text 'Alarms' in English language
                
                // Alarm Tab Details
                cy.get('[data-test="alarms"]').should('have.text', 'Alarms').click()
                cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Code')
                cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Name:Id')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Description')
                cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Appeared')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')

                cy.get('[data-test="alarms_history"]').should('have.text', 'Alarms History') // Verify the text 'Alarms History' in English language
                
                // Alarm History Tab Details
                cy.get('[data-test="alarms_history"]').should('have.text', 'Alarms History').click()
                cy.get('.MuiTableRow-root > :nth-child(1) > .MuiButtonBase-root').should('have.text', 'Code')
                cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Fixed')
                cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Name:Id')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Description')
                cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Appeared')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')
                
                // Overview & Resolve Blockage
                cy.get('[data-test="overview"]').should('have.text', 'Overview') // Verify the text 'Overview' in English language
                cy.get('[data-test="resolve_blockage"]').should('have.text', 'Resolve Blockage') // Verify the text 'Resolve Blockage' in English language
                
                // Create Queued Group - Text verification
                //cy.get('#accordion__heading-raa-2').contains("Create Queued Group")
                cy.get('#accordion__heading-manualEmpty').contains("Create Queued Group")
                cy.get('#accordion__heading-manualEmpty > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Submit')
                cy.get('#accordion__heading-manualEmpty').click()                        
                cy.xpath("//div[@data-test='manual-empty-select-fraction']//label[1]").contains("Fraction") // Fraction
                cy.xpath("//label[normalize-space()='Container']").contains("Container") // Container 
                cy.xpath("//label[normalize-space()='Emptying of one open ISV']").contains("Emptying of one open ISV") // Emptying of one open ISV label
                cy.get('[data-test="manual-empty-select-inlet-points"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').contains("Select Intermediate Storage Volume") // Select Intermediate Storage Volume

                // Ongoing Group - Text verification
                cy.get('#accordion__heading-ongoingTask').contains("Ongoing Group")
                cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Abort')
                
                // Queued Groups - Text verification
                cy.get('#accordion__heading-upcomingTask').contains("Queued Groups")

                // Control View - Text verification
                cy.get('#accordion__heading-controlView').contains("Control View")
                
                // Logged Users - Text verification
                cy.get('.active-users__action-label > [style="padding: 2px;"]').contains("Users")
                cy.wait(5000)
        })

        it('TC-002 -> Swedish Language Text Verification', () => {
                cy.visit('/')
                cy.wait(5000)
                
                // Swedish Language Text Verification
                cy.get(':nth-child(2) > .select-language__flag--img').click()
                cy.wait(15000)
                cy.log("Swedish language is selected, so performing the actions")
                cy.wait(3000)
                
                cy.get('#accordion__heading-container').click({force : true})
                cy.wait(5000)
                cy.get('#accordion__heading-container').contains("Container")
                cy.wait(5000)
                cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Lufthastighet")
                cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frekvens") // Verify the text Frequecy
                cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Diff. Tryck") // Verify the text 'Container Diff Pressure'
                
                cy.get('[data-test="logs"]').should('have.text', 'Loggar') // Verify the text 'Logs' in Swedish language

                // Logs tab details
                cy.get('[data-test="logs"]').click()
                cy.wait(5000)
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').should('have.text', 'Tid')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').should('have.text', 'ID')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').should('have.text', 'Visa meddelande')  

                cy.get('[data-test="alarms"]').should('have.text', 'Larm') // Verify the text 'Alarms' in Swedish language
                
                // Alarm Tab Details
                cy.get('[data-test="alarms"]').should('have.text', 'Larm').click()
                cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Kod')
                cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Namn:Id')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivning')
                cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Uppstod')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')

                cy.get('[data-test="alarms_history"]').should('have.text', 'Larmhistorik') // Verify the text 'Alarms History' in Swedish language
                
                // Alarm History Tab Details
                cy.get('[data-test="alarms_history"]').should('have.text', 'Larmhistorik').click()
                cy.get('.MuiTableRow-root > :nth-child(1) > .MuiButtonBase-root').should('have.text', 'Kod')
                cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Löst')
                cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Namn:Id')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivning')
                cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Uppstod')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')
                
                // Overview & Resolve Blockage
                cy.get('[data-test="overview"]').should('have.text', 'Översikt') // Verify the text 'Overview' in Swedish language
                cy.get('[data-test="resolve_blockage"]').should('have.text', 'Åtgärda stopp') // Verify the text 'Resolve Blockage' in Swedish language
                
                // Create Queued Group - Text verification in Swedish
                cy.get('#accordion__heading-manualEmpty').contains("Skapa köad grupp")
                cy.get('#accordion__heading-manualEmpty > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Skicka in')
                cy.get('#accordion__heading-manualEmpty').click()
                cy.xpath("//div[@data-test='manual-empty-select-fraction']//label[1]").contains("fraktion") // Fraction
                cy.xpath("//label[normalize-space()='container']").contains("container") // container
                cy.xpath("//label[normalize-space()='Tömningen av en öppen ISV']").contains("Tömningen av en öppen ISV") // Emptying of one open ISV label
                cy.get('[data-test="manual-empty-select-inlet-points"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').contains("Välj Mellanlagringsvolym") // Select Intermediate Storage Volume

                // Ongoing Group - Text verification in Swedish
                cy.get('#accordion__heading-ongoingTask').contains("Pågående Grupp")
                cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Avbryt')
                
                // Queued Groups - Text verification in Swedish
                cy.get('#accordion__heading-upcomingTask').contains("Köad Grupper")

                // Control View - Text verification in Swedish
                cy.get('#accordion__heading-controlView').contains("Kontrollvy")
                
                // Logged Users - Text verification in Swedish
                cy.get('.active-users__action-label > [style="padding: 2px;"]').contains("Användare")

                cy.wait(5000)

        })

        it('TC-003 -> Norwegian Language Text Verification', () => {

                cy.visit('/')
                cy.wait(5000)

                //Norwegian Language Text Verification
        
                cy.get(':nth-child(3) > .select-language__flag--img').click()
                cy.wait(10000)
                cy.log("Norwegian language is selected, so performing the actions")
                cy.wait(3000)

                //cy.get('#accordion__heading-container > :nth-child(1)').contains("Container")
                cy.get('#accordion__heading-container').click({force : true})
                cy.wait(5000)
                cy.get('#accordion__heading-container').contains("Container")
                cy.wait(5000)
                cy.get('#accordion__heading-airSpeed > :nth-child(1)').contains("Lufthastighet")                        
                cy.get('#accordion__heading-airSpeed > :nth-child(2)').contains("Frekvens")
                cy.get('[style="width: 35%; display: inline-block;"]').contains("Container Differensial trykk")
                                        
                cy.get('[data-test="logs"]').should('have.text', 'Logger') // Verify the text 'Logs' in Norwegian language

                // Logs tab details
                cy.get('[data-test="logs"]').click()
                cy.wait(5000)
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').should('have.text', 'Tid')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').should('have.text', 'ID')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').should('have.text', 'Vis melding')  

                
                cy.get('[data-test="alarms"]').should('have.text', 'Alarm') // Verify the text 'Alarms' in Norwegian language
                
                // Alarm Tab Details
                cy.get('[data-test="alarms"]').should('have.text', 'Alarm').click()
                cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Kode')
                cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Navn:Id')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivelse')
                cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Oppstod')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')

                cy.get('[data-test="alarms_history"]').should('have.text', 'Alarmhistorikk') // Verify the text 'Alarms History' in Norwegian language
                
                // Alarm History Tab Details
                cy.get('[data-test="alarms_history"]').should('have.text', 'Alarmhistorikk').click()
                cy.get('.MuiTableRow-root > :nth-child(1) > .MuiButtonBase-root').should('have.text', 'Kode')
                cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').should('have.text', 'Løst')
                cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Navn:Id')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').should('have.text', 'Beskrivelse')
                cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').should('have.text', 'Oppstod')
                cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').should('have.text', 'BUID')
                
                // Overview & Resolve Blockage
                cy.get('[data-test="overview"]').should('have.text', 'Oversikt') // Verify the text 'Overview' in Norwegian language
                cy.get('[data-test="resolve_blockage"]').should('have.text', 'Løs blokkering') // Verify the text 'Resolve Blockage' in Norwegian language
                
                // Create Queued Group - Text verification in Norwegian
                cy.get('#accordion__heading-manualEmpty').contains("Opprett I kø Gruppe")
                //cy.get('#accordion__heading-raa-2').contains("Opprett gruppe i kø")
                cy.get('#accordion__heading-manualEmpty > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Sende inn')
                cy.get('#accordion__heading-manualEmpty').click()
                cy.xpath("//div[@data-test='manual-empty-select-fraction']//label[1]").contains("Fraksjon") // Fraction
                cy.xpath("//label[normalize-space()='Container']").contains("Container") // Container
                cy.xpath("//label[normalize-space()='Tømmingen av én åpen ISV']").contains("Tømmingen av én åpen ISV") // Emptying of one open ISV label
                cy.get('[data-test="manual-empty-select-inlet-points"] > .lw-select-inner > .lw-select__control > .lw-select__value-container').contains("Velge Mellomlagringsvolum") // Select Intermediate Storage Volume

                // Ongoing Group - Text verification in Norwegien
                cy.get('#accordion__heading-ongoingTask').contains("PGjeldende Gruppe")
                //cy.get('#accordion__heading-ongoingTask').contains("Pågående gruppe")
                cy.get('#accordion__heading-ongoingTask > [style="display: inline; width: 90%;"] > [style="display: flex; float: right;"] > [style="flex: 1 1 0%;"] > [data-test="action-empty"] > .btn > .button__label').should('have.text', 'Avbryt')
                
                // Queued Groups - Text verification in Norwegien
                cy.get('#accordion__heading-upcomingTask').contains("I kø Grupper")
                //cy.get('#accordion__heading-upcomingTask').contains("Grupper i kø")
                
                // Control View - Text verification in Norwegien
                cy.get('#accordion__heading-controlView').contains("Kontrollvisning")
                
                // Logged Users - Text verification in Norwegien
                cy.get('.active-users__action-label > [style="padding: 2px;"]').contains("Brukere")
                
                //cy.get('.lw-header__logout > img').click() //logout
                cy.wait(5000)


        })
             
})
  
       
  