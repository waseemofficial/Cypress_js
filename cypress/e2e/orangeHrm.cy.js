/// <reference types="cypress"/>
//https://www.youtube.com/watch?v=obkQZ934Hgk
describe("validate login functionality of https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", () => {
  it("validate login with valid credintials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.url().should(
      "be.equal",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
  it("using XPATH", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//button[normalize-space()='Login']").click();
    /**cy.get(
     *  ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
     *).type("admin123");
     *cy.get(".oxd-button").click();
     */
    cy.url().should(
      "be.equal",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
  it("find first card contains 'Time at Work' ", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//button[normalize-space()='Login']").click();
    /**cy.get(
     *  ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
     *).type("admin123");
     *cy.get(".oxd-button").click();
     */
    cy.wait(20000);
    cy.url()
      .as("home")
      .should(
        "be.equal",
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
      );

    /** @note remove cy.wait(5000); for this to work
     * cy.get(
     *  ":nth-child(1) > .oxd-sheet > .oxd-loading-spinner-container > .oxd-loading-spinner"
     *).should("be.visible");
     */
    cy.get(":nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header", {
      timeout: 10000,
    })
      .should("be.visible")
      .contains("time at work", { matchCase: false })
      .should("be.visible");
  });
  it("check for loading spinner to be visible and not visible", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(
      ":nth-child(1) > .oxd-sheet > .oxd-loading-spinner-container > .oxd-loading-spinner"
    ).should("be.visible");
    cy.get(
      ":nth-child(1) > .oxd-sheet > .oxd-loading-spinner-container > .oxd-loading-spinner"
    ).should("be.visible");
  });
});
