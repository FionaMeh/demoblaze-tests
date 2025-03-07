describe('Add item to Cart test', () => {

    it('login into the website ', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click(); // Click on Sign In button
        cy.wait(1000); // Wait for modal to appear
        
        cy.get('#loginusername').type('FionaMehmeti'); // Enter username
        cy.get('#loginpassword').type('Finkipinki'); // Enter password
        cy.get("button[onclick='logIn()']").click(); // Click Login button
        
        cy.get('#nameofuser').should('contain', 'Welcome FionaMehmeti'); // Verify user is logged in
        cy.wait(3000);
    });

    it('clicks on one of the items', ()  => {
        cy.wait(2000) //wait for the page to render
        cy.get('.card-title .hrefch').first().click(); // Click on first product
        cy.wait(3000);
    });

    it('adds the selected item to the Cart', () => {     
        cy.get('.btn-success').contains('Add to cart').click(); // Click on Add to Cart button
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added'); // Verify success alert
        });
    
    });

    it('verifies that the item is added to the cart', () => {
        cy.get('#cartur').click(); // Navigates to Cart page
        cy.wait(1000);
        cy.get('.success').should('exist'); // Verifying that the item is added to the Cart
    });

}); 

    