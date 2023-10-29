describe("testing https://example.cypress.io of cypress", () => {
  const url = "https://example.cypress.io/commands/";
  it("To query for the button, use the cy.get() command. ", () => {
    cy.visit(url + "querying");
    cy.get("#query-btn").should("contain", "Button");

    cy.get(".query-btn").should("contain", "Button");

    cy.get("#querying .well>button:first").should("contain", "Button");
  });
  it("To find elements by data attribute, query using the attribute selector. ", () => {
    cy.visit(url + "querying");
    cy.get('[data-test-id="test-example"]').should("have.class", "example");
  });
  it.only("cy.get() yields a jQuery object, you can get its attribute by invoking the .attr() method. ", () => {
    cy.visit(url + "querying");
    cy.get('[data-test-id="test-example"]')
      .invoke("attr", "data-test-id")
      .should("equal", "test-example");

    // or you can get an element's CSS property
    cy.get('[data-test-id="test-example"]')
      .invoke("css", "position")
      .should("equal", "static");
  });
});
