/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function() {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('preenche os campos obrigatorios e envia o formulario', function() {
    const longText = 'Teste, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,, teste,'
    cy.get('#firstName').type('Murilo')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('m@m.com')
    cy.get('#open-text-area').type(longText, { delay: 0})
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')

  })
})
