///<reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
        //cy.visit('https://emprestimosim.com.br/')

    })
    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })

    it('preenche os campos obrigatórios e envia o formulário', function () {

        cy.get('input[name="firstName"]')
            .type('Jean', { delay: 0 })

        cy.get('input[name="lastName"]')
            .type('Oliveira', { delay: 0 })

        cy.get('input[name="email"]')
            .get('input[type="email"]')
            .type('onepiece@gmail.com', { delay: 0 })

        /*cy.get('#email-checkbox')
        .click()
*/
        cy.get('textarea[name="open-text-area"]')
            .type('Preciso de um pix beeem grandao', { delay: 0 })

        cy.contains('.button', 'Enviar').click()

        cy.get('.success').should('be.visible')


    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {

        cy.get('input[name="firstName"]')
            .type('Jean', { delay: 0 })

        cy.get('input[name="lastName"]')
            .type('Oliveira', { delay: 0 })

        cy.get('input[name="email"]')
            .get('input[type="email"]')
            .type('onepiece@2@gmail.com', { delay: 0 })

        cy.get('textarea[name="open-text-area"]')
            .type('Preciso de um pix beeem grandao', { delay: 0 })

            cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('o campo telefone devera aceitar apenas valores numericos', function () {

        cy.get('input[name="firstName"]')
            .type('Jean', { delay: 0 })

        cy.get('input[name="lastName"]')
            .type('Oliveira', { delay: 0 })

        cy.get('input[name="email"]')
            .get('input[type="email"]')
            .type('onepiece@2@gmail.com', { delay: 0 })

        cy.get('#phone')
            //   .get('input[type="number"]')
            .type('11jean1251')
            .should('not.have.value')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {

        cy.get('input[name="firstName"]')
            .type('Jean', { delay: 0 })

        cy.get('input[name="lastName"]')
            .type('Oliveira', { delay: 0 })

        cy.get('input[name="email"]')
            .get('input[type="email"]')
            .type('onepiece@2@gmail.com', { delay: 0 })

        cy.get('#phone-checkbox')
            .click()

            cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')

    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {

        /* cy.get('input[name="firstName"]')
                 .type('Jean', { delay: 0 })
                 .should('have.value', 'Jean')
                 .clear().should('not.have.value') */

        cy.get('#firstName')
            .type('JeanCristoffer', { delay: 0 })
            .should('have.value', 'JeanCristoffer')
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .type('JeanOliveira', { delay: 0 })
            .should('have.value', 'JeanOliveira')
            .clear()
            .should('have.value', '')

        cy.get('#email')
            .type('Jeancristoffer@hotmail.com', { delay: 0 })
            .should('have.value', 'Jeancristoffer@hotmail.com')
            .clear()
            .should('have.value', '')

        cy.get('#open-text-area')
            .type('JeanCristoffer', { delay: 0 })
            .should('have.value', 'JeanCristoffer')
            .clear()
            .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')

    })

    it('envia o formulario com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto(youtube) por seu texto', function (){
  cy.get('#product').select('YouTube')
        .should('have.value', 'youtube')

     })

     it('selecione um produto (Mentoria) por seu valor (value)', function (){
        cy.get('#product').select('mentoria')
        .should('have.value', 'mentoria')
     })

     it('seleciona um produto (Blog) por seu indice', function (){
        cy.get('#product').select(1)
        .should('have.value', 'blog')

     })

     it('marca o tipo de atendimento feedback', function (){
cy.get('input[type="radio"][value="feedback"]').check()
.should('have.value', 'feedback')

     })

     it('marca cada tipo de atendimento', function (){
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
     })

     it('marca ambos checkboxes, depois desmarca o ultimo', function(){
        cy.get('input[type="checkbox"]')
        .check()
        .last()
        .uncheck()
        .should('not.be.checked')
     })
it('seleciona um arquivo da pasta fixtures', function(){
cy.get('input[type="file"]')
.should('not.have.value')
.selectFile('./cypress/fixtures/example.json')
.should(function($input){
    expect($input[0].files[0].name).to.equal('example.json')
})
})
it('seleciona o arquivo utilizando a fixture para qual foi dada um alias', function(){
cy.fixture('example.json').as('sampleFile')
cy.get('input[type="file"]')
.selectFile('@sampleFile')
.should(function($input){

    expect($input[0].files[0].name).to.equal('example.json')
}) 
})
it('verifica que a politica de privacidade abre em outra aba sem a necessidade de um clique', function(){
    cy.get('#privacy a').should('have.attr','target', '_blank')
})

it('acessa a pagina da politica de privacidade removendo o target e entao clicando no link', function (){
    cy.get('#privacy a')
        .invoke('removeAttr', 'target').click()
        
        cy.contains('Talking About Testing').should('be.visible')
})

it
})

        
