describe('Login Test Cases', () => {

  // The function below goes out and visits the link we will be using: 'https://www.demoblaze.com/'
  // before each test, which serves us the sample DemoBlaze App we are using to test against

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('should login successfully with valid credentials', () => {
        cy.get('#login2').click(); // Clicks on Log in tab
        cy.wait(1000); // Wait for modal to appear
        
        cy.get('#loginusername').type('FionaMehmeti'); // Enter username
        cy.get('#loginpassword').type('Finkipinki'); // Enter password
        cy.get("button[onclick='logIn()']").click(); // Click Login button
        
        cy.wait(3000);
        cy.get('#nameofuser').should('contain', 'Welcome FionaMehmeti'); // Verify user is logged in
    });

    it('should not login with invalid credentials', () => {
        cy.get('#login2').click(); // Click on Sign In button
        cy.wait(1000);
        
        cy.get('#loginusername').type('invalidUser'); // Enter invalid username
        cy.get('#loginpassword').type('111111111'); // Enter invalid password
        cy.get("button[onclick='logIn()']").click(); // Click Login button
        
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Wrong password.'); // Verify error message
        });
    });

    it('should not login with empty credentials', () => {
        cy.get('#login2').click(); // Click on Sign In button
        cy.wait(1000);
        
        cy.get("button[onclick='logIn()']").click(); // Click Login button without entering credentials
        
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.'); // Verify alert
        });
    });
});
