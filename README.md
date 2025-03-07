This repo contains the tests written in Cypress for a basic todo list web application.

The todo list application that is used is the sample link provided by Demoblaze : https://www.demoblaze.com/
# Instructions for the project setup

1. In order to be able to run the tests you should have:
   Node preinstalled in your local machine. If not, go ahead and install it on: https://nodejs.org/en/download

2. Next, go ahead and clone the project from the repo: https://github.com/FionaMeh/demoblaze-tests.git using:

   git clone https://github.com/FionaMeh/demoblaze-tests.git

3. Navigate to the project directory

4. Install the dependencies using command:

   npm install

# Running the tests

1. After the dependencies are installed, you should be able to successfully open Cypress using command:

   npx cypress open

2. Now, the Cypress test runner should be opened. From there, you can be able to see the Cypress tests and run them.
Tests can be found on the cypress/e2e folder.

Test Coverage:
# loginTest.spec.cy.js: Positive and negative test cases for the Login form
# logoutTest.spec.cy.js: Logout test case
# addItem.spec.cy.js; Test for adding an item to the Cart
# deleteItem.spec.cy.js: Test for deleting an item from the Cart
# placeOrder.spec.ct.js: Test for placing an Order

3. After test running you should be able to see clear test results in the Cypress test runner.