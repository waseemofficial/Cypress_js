describe("testing the website", () => {
  beforeEach(() => {
    cy.visit("http://tat-csc.s3.sa-east-1.amazonaws.com/index.html");
  });
  it("Check Title of the Site", () => {
    cy.title().should("be.equal", "TAT Customer Service Center");
  });
  it("fills in the required fields", () => {
    //const longText = Cypress._.repeat("abcdefgh",10);
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail.com");
    cy.get("#phone").type(5554443245);
    cy.get("#open-text-area").type("first test");
    //cy.get("#open-text-area").type(longText,{delay : 0});
    cy.get('button[type="submit"]').click();
    cy.get(".success").should("be.visible");
  });
  it("displays an error message when submitting the form with an email with invalid formatting", () => {
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail,com");
    cy.get("#open-text-area").type("first test");
    cy.get("#email-checkbox").click();
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });
  it(" validate that the phone field only accepts numbers", () => {
    cy.get("#phone").type("abcdd");
    cy.get("#phone").should("have.value", "");
  });
  it(" validate that if a non-numeric value is entered, its value will remain empty", () => {
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail,com");
    cy.get("#phone").type("abcdd");
    cy.get("#open-text-area").type("first test");
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });
  it(" display an error message when phone number becomes mandetory but is not filled", () => {
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail.com");
    //cy.get("#phone").type("abcdd");
    cy.get("#open-text-area").type("first test");
    cy.get("#phone-checkbox").click();
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });
  it(" display an sucess message when phone number becomes mandetory", () => {
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail.com");
    cy.get("#phone").type(1234567890);
    cy.get("#open-text-area").type("first test");
    cy.get("#phone-checkbox").click();
    cy.get('button[type="submit"]').click();
    cy.get(".success").should("be.visible");
  });
  it("check span display '(required)'", () => {
    cy.get("#firstName").type("name");
    cy.get("#lastName").type("last");
    cy.get("#email").type("name_last@hmail.com");
    cy.get("#phone").type(1234567890);
    cy.get("#open-text-area").type("first test");
    cy.get("#phone-checkbox").click();
    //cy.get('button[type="submit"]').click();
    //cy.get(".phone-label-span").should("be.visible");
    //cy.get(".phone-label-span").should("be.text", " (required)");
    cy.get(".phone-label-span").should(($span) => {
      const text = $span.text();
      expect(text).to.include("(required)"); // if no space in innerHTML
    });
    //cy.get(".success").should("be.visible");
  });
  it("fill and cler the first name, last name, email and phone number fields", () => {
    const longText = Cypress._.repeat("abcdefgh", 10);
    cy.get("#firstName")
      .type("name")
      .should("have.value", "name")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("last")
      .should("have.value", "last")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("name_last@hmail.com")
      .should("have.value", "name_last@hmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type(1234567890)
      .should("have.value", 1234567890)
      .clear()
      .should("have.value", "");
    cy.get("#open-text-area")
      .type(longText)
      .should("have.value", longText)
      .clear()
      .should("have.value", "");
  });
  it("dislay an error message when submitting the form without the required fealds", () => {
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });
  it("sucessfully submits the form using a custom command", () => {
    cy.fillMandatoryFields();

    cy.get(".success").should("be.visible");
  });
  it("sucessfully submits the form using a custom command and passing parameters", () => {
    const data = {
      firstName: "name",
      lastName: "last",
      email: "name_last@hmail.com",
      phoneNo: 1234567890,
      text_area: "text-area",
    };
    cy.fillMandatoryFieldsWithParam(data);

    cy.get(".success").should("be.visible");
  });
  it("sucessfully submits the form using 'cy.containns()'", () => {
    cy.contains("button", "Send").click();
    cy.get(".error").should("be.visible");
  });
  it("select by text", () => {
    cy.get("#product").select("Blog").should("have.value", "blog");
    cy.get("#product").select("Courses").should("have.value", "courses");
    cy.get("#product").select("Mentorship").should("have.value", "mentorship");
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });
  it("select by value", () => {
    cy.get("#product").select("blog").should("have.value", "blog");
    cy.get("#product").select("courses").should("have.value", "courses");
    cy.get("#product").select("mentorship").should("have.value", "mentorship");
    cy.get("#product").select("youtube").should("have.value", "youtube");
  });
  it("select by index", () => {
    //the first field value is Select and it is disavled it has the index of 0
    cy.get("#product").select(1).should("have.value", "blog");
    cy.get("#product").select(2).should("have.value", "courses");
    cy.get("#product").select(3).should("have.value", "mentorship");
    cy.get("#product").select(4).should("have.value", "youtube");
  });
  it("check what are checked and unchecked by Default", () => {
    cy.get(":nth-child(2) > input").should("be.checked");
    cy.get(":nth-child(3) > input").should("not.be.checked");
    cy.get(":nth-child(4) > input").should("not.be.checked");
  });
  it("check the type of services 'Feedback' ", () => {
    cy.get("input[type='radio'][value='feedback']")
      .check()
      .should("be.checked");
    cy.get("input[type='radio'][value='help']").should("not.be.checked");
    cy.get("input[type='radio'][value='praise']").should("not.be.checked");
  });
  it("check the type of services 'Praise' ", () => {
    cy.get("input[type='radio'][value='praise']").check().should("be.checked");
  });
  //using ".find()",  ".wrap()" and ".each()"
  it("checkes each type of services", () => {
    cy.get("#support-type")
      .find("input[type='radio']")
      .each((item) => {
        cy.wrap(item).check();
      });
  });
  it("check both checkboxes and then uncheck the last one", () => {
    cy.get("#email-checkbox").check().should("be.checked");
    cy.get("#phone-checkbox").check().should("be.checked");

    cy.get("#phone-checkbox").uncheck().should("not.be.checked");
  });
  it.only("check both checkboxes and then uncheck the last one using loop", () => {
    //cy.get("input[type='checkbox']").each((item) => {});
    cy.get("input[type='checkbox']")
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.be.checked");
  });
});
