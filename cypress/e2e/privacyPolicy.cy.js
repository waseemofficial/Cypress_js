describe("independently test the privacy policy page", () => {
  beforeEach(() => {
    cy.visit("http://tat-csc.s3.sa-east-1.amazonaws.com/privacy.html");
  });
  it("Check Title of the Site", () => {
    cy.title().should(
      "be.equal",
      "TAT Customer Service Center - Privacy Policy"
    );
  });
  it("check the URL of the page", () => {
    cy.url().should(
      "eq",
      "http://tat-csc.s3.sa-east-1.amazonaws.com/privacy.html"
    );
    cy.get("#title");
  });
  it("check text box contains 'Talking About Testing' in the policy", () => {
    cy.contains("p", "Talking About Testing").should("be.visible");
  });
});
