describe('Logout Test Case', () => {

    it('should login into the website', () => {
        cy.get('#login2').click(); // Clicks on Sign In button
        cy.wait(1000);

        cy.get('#loginusername').type('FionaMehmeti'); // Enters username
        cy.get('#loginpassword').type('Finkipinki'); // Enters password
        cy.get("button[onclick='logIn()']").click(); // Clicks on the Login button

        cy.wait(3000);
        cy.get('#nameofuser').should('contain', 'Welcome FionaMehmeti'); // Verifying that user is logged in
    });

    it('should log out out of the website', () => {
        cy.get('#logout2').click(); // Click on Log Out button

        cy.wait(2000);
        cy.get('#nameofuser').should('not.exist'); // Verifying that user is logged out
    });
});