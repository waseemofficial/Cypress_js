describe("test_1",()=>{
it("open google.com",()=>{
cy.visit("https://example.cypress.io/");
//cy.get(".g").type("cypress.io tutorial")
cy.url().should("eq", "https://example.cypress.io/");
})
})
