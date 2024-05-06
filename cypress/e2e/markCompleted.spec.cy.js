describe('Marking a todo item as completed', () => {
  // using the same beforeEach function for visiting the page
  before(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('successfully marks the todo item as completed', () => {
    // adding the new item list
    cy.get('.new-todo').type('Complete the Borek Assignment{enter}');

    // instead of the 'get' command, we will be using the 'contains' to get the item
    // To interact with the checkbox of this item we'll traverse up the DOM to its parent element
    // then use the find command to locate the child checkbox <input> element.
    // and finally  use the `check` command to check it.
    cy.contains('Complete the Borek Assignment')
      .parent()
      .find('input[type="checkbox"]')
      .check();


    // now making an assertion to check if the item is really marked as completed
    // again we'll use `parents` to traverse multiple levels up the dom until we find the corresponding <li> element.
    // after we get that element, we can assert that it has the completed class.
    cy.contains('Complete the Borek Assignment')
      .parents('li')
      .should('have.class', 'completed')
  });
});