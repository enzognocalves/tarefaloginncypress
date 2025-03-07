//describe('Teste completo de esperas e asserções', () => {
  //it('Devo acessar a página, aguardar os elementos', () => {
    // Visita o site exemplo
    //cy.visit('https://example.cypress.io/todo');

    // Espera implícita: verifica se a lista de tarefas está visível
    //cy.get('.todo-list').should('be.visible');

    // Adiciona uma nova tarefa e verifica se foi adicionada corretamente
    //cy.get('.new-todo').type('Estudar Cypress{enter}');
    //cy.get('.todo-list li').should('contain.text', 'Estudar Cypress');

    // Marca a tarefa como concluída e verifica se foi marcada corretamente
    //cy.get('.todo-list li').last().find('.toggle').click();
    //cy.get('.todo-list li').last().should('have.class', 'completed');

    // Verificar a quantidade de itens na lista
    //cy.get('.todo-list li').should('have.length', 3);

    // Verificar se um item específico está na lista
    //cy.contains('.todo-list li', 'Estudar Cypress').should('be.visible');
  //});
//});
describe('Teste do Formulário de Cadastro', () => {
  beforeEach(() => {
    // Acessa a página do formulário
    cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html'); // Substituir pelo caminho correto
  });

  it('Deve preencher e enviar o formulário com sucesso', () => {
    // Preenche os campos do formulário
    cy.get('#nome').type('Enzo Henrique');
    cy.get('#email').type('enzohenri@email.com');
    cy.get('#telefone').type('1199999999');
    cy.get('#senha').type('Teste@123');
    cy.get('#confirma_senha').type('Teste@123');

    // Verifica se os valores foram inseridos corretamente
    cy.get('#nome').should('have.value', 'Enzo Henrique');
    cy.get('#email').should('have.value', 'enzohenri@email.com');
    cy.get('#telefone').should('have.value', '1199999999');
    cy.get('#senha').should('have.value', 'Teste@123');
    cy.get('#confirma_senha').should('have.value', 'Teste@123');

    // Submete o formulário
    cy.get('#cadastro').submit();

    // Aqui você pode adicionar uma verificação de sucesso
    // Exemplo: Se houver uma mensagem de sucesso após o envio
    cy.contains('Cadastrar').should('be.visible');
  });
});
























