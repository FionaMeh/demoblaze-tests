describe('Adding new items to the To Do list', () => {

  // The function below goes out and visits the link we will be using: 'https://example.cypress.io/todo'
  // before each test, which serves us the
  // sample Todo App we are using to test against
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  // test for adding a new task to the todo list
  it('Adds a new task to the todo list', () => {
    //finding the field for typing a new task by its class 'new-todo'
    cy.get('.new-todo').type('Complete the Borek assignment');
    cy.wait(1500) //putting a small waiting time before typing the task for better test results
    //since we don't have a proper button for adding the item, we will be adding the new item by 'clicking' the enter keyboard 
    cy.get('.new-todo').type('{enter}');

    // assertions 

    // Checking if the new task is actually added by checking its visibility 
    // instead of the 'get' command, we're using now the `contains` command to get the new element by its content.
    cy.contains('Complete the Borek assignment')
      .should('be.visible');

    // Since it's the newest item, it should exist as the last element in the list.
    cy.get('.view')
      .last()
      .should('contain.text', 'Complete the Borek assignment');
  });
});