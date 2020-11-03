describe('Login/Logout Tests', () => {
    before(function () {
        cy.visit('/')
        cy.get('#signin_button').should('be.visible').and('contain', 'Signin').click()
        cy.url().should('include', 'login.html')
    })
    it('Login with invalid data', () => {

        cy.login('invalid username', 'invalid password')
        cy.get('.alert').should('be.visible').and('contain', 'Login and/or password are wrong')

    })
    it('Login with valid data', () => {
        cy.fixture('user').then(user => {
            const username = user.name
            const password = user.password
            cy.login(username, password)

        })
        cy.get('h2').should('contain', 'Cash Accounts')

    })



})