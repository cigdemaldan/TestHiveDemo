describe('Filter Find Transactions Tests', () => {
    before(function () {
        cy.visit('/')
        cy.get('#signin_button').should('be.visible').and('contain', 'Signin').click()
        cy.url().should('include', 'login.html')
        cy.fixture('user').then(user => {
            const username = user.name
            const password = user.password
            cy.login(username, password)

        })
        cy.get('a').contains('Account Activity').click()
    })

    it('Should Filter', () => {
        cy.get('.ui-tabs-nav > :nth-child(2) > a').click()
        cy.get('#aa_description').type('Test Hive')
        cy.get('#aa_fromDate').type('2020 - 10 - 01{enter}')
        cy.get('#aa_toDate').type('2020 - 11 - 11{enter}')
        cy.get('#aa_fromAmount').type('60')
        cy.get('#aa_toAmount').type('1000')
        cy.get('#aa_type').select('Deposit')
        cy.get('.btn').as('find')
        cy.get('@find').click()
        cy.get('.well').should('be.visible').and('contain', 'No results')
    })
})