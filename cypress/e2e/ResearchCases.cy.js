describe('template spec', () => {

    beforeEach(() => {
     cy.login('manoj.kumar@logiwaste.se', 'M@noj!23$')
    })

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

})

  

