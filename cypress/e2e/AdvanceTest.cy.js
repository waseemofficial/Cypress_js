describe("Advance cypress methods", () => {
  beforeEach(() => {
    cy.visit("http://tat-csc.s3.sa-east-1.amazonaws.com/index.html");
  });
  it("check success msg use .clock() and .tick() to pause and skip time", () => {
    cy.clock();
    const longText = Cypress._.repeat("abcdefgh", 10);
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail.com");
    cy.get("#phone").type(5554443245);
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('button[type="submit"]').click();
    cy.get(".success").should("be.visible");
    cy.tick(3000);
    cy.get(".success").should("not.be.visible");
  });
  it("check error msg use .clock() and .tick() to pause and skip time", () => {
    cy.clock();
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
    cy.tick(3000);
    cy.get(".error").should("not.be.visible");
  });
  it("find the cat hidden span tag ", () => {
    cy.get("#cat").invoke("show").should("be.visible");
  });
  it("count the items in dropdown manue using '.its()'", () => {
    cy.get("#product > option").its("length").should("eq", 5);
  });
  it("check the length of the title 'TAT Customer Service Center' is less then 28", () => {
    cy.title().its("length").should("lt", 28);
  });
  it("calculate a sum from external function and check it value ", () => {
    const fn = (a, b, c) => {
      return a + b + c;
    };
    cy.wrap({ sum: fn })
      .invoke("sum", 2, 4, 6)
      .should("deep.eq", 12)
      .and("be.lt", 13)
      .and("be.gt", 11);
  });
});
