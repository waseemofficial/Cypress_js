describe("testing the website", () => {
  beforeEach(() => {
    cy.visit("http://tat-csc.s3.sa-east-1.amazonaws.com/index.html");
  });
  it("Check Title of the Site", () => {
    cy.title().should("be.equal", "TAT Customer Service Center");
  });
  it.only("fills in the required fields", () => {
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail.com");
    cy.get("#phone").type(5554443245);
    cy.get("#open-text-area").type("first test");
    cy.get('button[type="submit"]').click();
    cy.get(".success").should("be.visible");
  });
});
