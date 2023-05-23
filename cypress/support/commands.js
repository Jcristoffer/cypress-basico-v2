//para adicionar um novo comando basta utilizar da seguinte forma:
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Jean', { delay: 0 })
    cy.get('#lastName').type('Oliveira', { delay: 0 })
    cy.get('#email').type('onepiece@gmail.com', { delay: 0 })
    cy.get('#open-text-area').type('Preciso de um pix', { delay: 0 })
    cy.contains('.button', 'Enviar').click()

})