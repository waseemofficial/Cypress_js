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
  // using lowdash liberary of Cypress

  Cypress._.times(5, (num) => {
    it("run policy check " + num + " times", () => {
      cy.visit("http://tat-csc.s3.sa-east-1.amazonaws.com/privacy.html");
      cy.contains("h1", "TAT CSC - Privacy Policy").should("be.visible");
      cy.contains("p", "Talking About Testing").should("be.visible");
    });
    num += 1;
  });
  it("display and hide the success and error message using .invoke()", () => {
    cy.get(".success")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Message success")
      .invoke("hide")
      .should("not.be.visible");
    cy.get(".error")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Validate the required fields!")
      .invoke("hide")
      .should("not.be.visible");
  });
  it("fills in the text area field using the invoke command", () => {
    cy.get("#open-text-area")
      .invoke("val", "some text should be put here")
      .should("have.value", "some text should be put here");
  });

  //https://dev.to/muratkeremozcan/crud-api-testing-a-deployed-service-with-cypress-using-cy-api-spok-cypress-data-session-cypress-each-4mlg

  /**it.only("chek should be a string", () => {
   *
   * });
   * */
  it("makes an HTTP Request", () => {
    cy.request("https://tat-csc.s3.sa-east-1.amazonaws.com/index.html")
      .as("getRequest")
      .its("status")
      .should("be.equal", 200);
    cy.get("@getRequest").its("statusText").should("be.equal", "OK");
    cy.get("@getRequest").its("body").should("include", "TAT CSC");
  });
  it.only("fills in the text area and take a screenshot", () => {
    cy.screenshot("page");
    cy.get("#product").select(1).first().screenshot("product");
    cy.get("#open-text-area")
      .invoke("val", "some text should be put here")
      .should("have.value", "some text should be put here")
      .screenshot("text area");
  });
});
