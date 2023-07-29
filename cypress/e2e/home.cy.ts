/* eslint-disable no-undef */
/// <reference types="cypress" />
//  <reference types="@testing-library/cypress" />

describe("Home", () => {
  it('display correct heading text "Pokemon"', () => {
    cy.visit("/");
    cy.findByRole("heading", { name: /pokemon/i }).should("exist");
  });
});
