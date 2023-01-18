import Autocomplete from "../../src/components/Autocomplete";
import Form from "../../src/components/Form"
import countries from "../../src/data/countries.json"

describe("Test the autocomplete functionality", () => {
  beforeEach(() => {
    // cy.mount(<Form />)
    cy.mount(<Autocomplete countries={countries} />);
  })

  // it("check everything is working", () => {
  //   cy.get('[data-cy="heading"]').contains("Todo Add");
  //   cy.get('input[type="text"]').should("have.value", "");
  //   cy.get('[data-cy="suggestion-list"]').should("not.exist");
  // })

  // it("should display a form element with a heading", () => {
  //   cy.get('[data-cy="form"]').should("exist");
  //   cy.get('[data-cy="heading"]').should("exist").and("contain", "Todo Add");
  // });

  // it("should display an input field and a submit button", () => {
  //   cy.get('[class="todo-input"]').should("exist");
  //   cy.get('[class="todo-button"]').should("exist");
  // });


 
  it("check everything is working in ui", () => {
    cy.get('[data-cy="heading"]').contains("Search your country:");
    cy.get('input[type="text"]').should("have.value", "");
    cy.get('[data-cy="suggestion-list"]').should("not.exist");
  });

  it("check filter is working", () => {
    cy.get('input[type="text"]').type("Turkey");
    cy.get('[data-cy="suggestion-list"]')
      .should("be.visible")
      .as("suggestList");
    cy.get("@suggestList").should("have.length", 1);
  });

  it("check selections are working", () => {
    cy.get('input[type="text"]').as("inputText");
    cy.get("@inputText")
      .type("no")
      .type(Cypress._.repeat("{downArrow}{downArrow}", 1));
    cy.get('[data-cy="suggestion-list"] li:nth-child(3)').should(
      "have.class",
      "active"
    );
    cy.get("@inputText").type(Cypress._.repeat("{upArrow}", 1));
    cy.get('[data-cy="suggestion-list"] li:nth-child(2)').should(
      "have.class",
      "active"
    );
    cy.get('[data-cy="suggestion-list"] li:nth-child(2)').click();
    cy.get('input[type="text"]').should("have.length", 1);
    cy.get('[data-cy="suggestion-list"]').should("not.exist");
  });

  





})