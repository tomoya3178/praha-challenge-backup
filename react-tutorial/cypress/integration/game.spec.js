describe('Game', () => {
  it('Win', () => {
    cy.visit('http://localhost:3000')
    cy.get('#root > div > div.game-board > div > div:nth-child(1) > button:nth-child(1)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(1) > button:nth-child(2)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(1)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(2)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(1)').click()
    cy.get('#root > div > div.game-info > div').should('have.text', 'Winner: X')
  })

  it('Draw', () => {
    cy.visit('http://localhost:3000')
    cy.get('#root > div > div.game-board > div > div:nth-child(1) > button:nth-child(1)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(1) > button:nth-child(2)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(1) > button:nth-child(3)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(1)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(2)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(3)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(1)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(2)').click()
    cy.get('#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(3)').click()
    cy.get('#root > div > div.game-info > div').should('have.text', 'Draw!')
  })
})
