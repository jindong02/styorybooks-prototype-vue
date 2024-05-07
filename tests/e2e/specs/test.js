// https://docs.cypress.io/api/table-of-contents

describe('End To End Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'FIND YOUR MOVIE')
    cy.contains('a', 'netflixroulette')
    cy.contains('h1', 'No movie data')
    cy.contains('label', 'SEARCH BY')
    cy.contains('button', 'TITLE')
    cy.contains('button', 'GENGRE')
    cy.contains('label', 'SORT BY')
    cy.contains('button', 'RELEASE DATE')
    cy.contains('button', 'RATING')
  })
  it('Visits the app detail url /detail/tt14260080', () => {
    cy.visit('/detail/tt14260080')
    cy.contains('h1', 'Hello Charlie')
    cy.contains('label', '2021')
    cy.contains('label', '102')
    cy.contains('label', 'Aadar Jain, Abhinay Raj Singh, Jackie Shroff')
    cy.contains('p', 'Charlie a young pizza delivery boy, who has been assigned the task to transport a gorilla from Mumbai to Diu. The adventures the unlikely duo get embroiled in along the way forms the crux of the plot.')
  })
  it('Visits the app detail url /detail/tt9454892', () => {
    cy.visit('/detail/tt9454892')
    cy.contains('h1', 'Hello Mini')
    cy.contains('label', '2019')
    cy.contains('label', '25')
    cy.contains('label', 'Anuja Joshi, Mrinal Dutt, Anshul Pandey')
    cy.contains('p', 'A thriller drama series, revolving around Rivanah Bannerjee, an independent girl, living alone in Mumbai. She has the perfect life: doting parents, a loving boyfriend, and a great job. But things are seldom what they seem, as her ...')
    cy.contains('label', 'Films by genre')
  })
  it('Visits the app 404 url /notfound', () => {
    cy.visit('/notfound')
    cy.contains('h1', '404 Page Not Found')
  })
  it('Visits the app any url /anytesturl', () => {
    cy.visit('/anytesturl')
    cy.contains('h1', '404 Page Not Found')
  })
})
