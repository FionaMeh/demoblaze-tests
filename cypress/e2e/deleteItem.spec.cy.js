describe('Delete item from  Cart test', () => {
    
    it('logins into the website', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click(); // Click on Sign In button
        cy.wait(1000); // Wait for modal to appear
        
        cy.get('#loginusername').type('FionaMehmeti'); // Enter username
        cy.get('#loginpassword').type('Finkipinki'); // Enter password
        cy.get("button[onclick='logIn()']").click(); // Click Login button
        
        cy.get('#nameofuser').should('contain', 'Welcome FionaMehmeti'); // Verify user is logged in
        cy.wait(3000);
     });

    it('should add an item to the cart and verify it', () => {
        cy.get('.card-title .hrefch').first().click(); // Click on the first product using its class
        cy.wait(3000);
        cy.get('.btn-success').contains('Add to cart').click(); // Click on Add to Cart button
        
        cy.wait(3000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added'); // Verify success alert
        });
        cy.wait(2000);
        
    });
    
    it('should delete the first item from the cart', () => {
        cy.get('#cartur').click(); // Navigate to Cart page
        cy.wait(5000);
        
        cy.get('.success').should('exist'); // Ensure there is an item in the cart
        cy.contains('Delete').first().click(); // Click on delete button for the first item
        
        cy.wait(3000);
        cy.get('.success').should('not.exist'); // Verify the item is removed from the cart
    });
});
