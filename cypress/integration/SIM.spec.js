///<reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Empréstimo Online e Rápido', function () {
    beforeEach(() => {
//    cy.visit('./src/index.html')
cy.visit('https://pre.emprestimosim.com.br/app/#/login/signInPre')
})
it('CPF existente CP PURO , simulação sem seguro', function () {
    cy.get('.second-btn').should('exist').click();

    cy.get('input.input-cpf').type('082.008.939-79', { delay: 0 })
  
    cy.get('#password').type("112233",{ delay: 0 })
    cy.get('#submit').click()
    cy.wait(60000)
   // cy.get('.snackbar--text').should('not.be.visible')
    cy.get('.card-show-case-cppuro').click()
    cy.wait(40000)
   cy.get('.popup-auto-close').click()
  
})

    })