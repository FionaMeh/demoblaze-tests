describe('Deleting a completed item from the todo list', () => {
  // using the same beforeEach function for visiting the page
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('successfully deletes the completed todo item', () => {
    // adding the new item list
    cy.get('.new-todo').type('Complete the Borek Assignment{enter}');
    cy.wait(1000)

    // Since the button for deleting an item appears only when an item is marked as completed, 
    // we will be using the commands as before for marking the item as completed
    cy.contains('Complete the Borek Assignment')
      .parent()
      .find('input[type="checkbox"]')
      .check();
    // we will be adding a 2 second pause to see better test results
    cy.wait(2000)

    // now since the button for deleting the item appeared, we can click it for deleting the completed task
    cy.contains('Clear completed').click()
    cy.wait(1000)

    // finally we can make sure our element does not exist anymore in the todo list
    cy.get('.view')
      .should('not.have.text', 'Complete the Borek Assignment')
  });
});