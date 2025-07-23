describe("test_1",()=>{
it("open google.com",()=>{
cy.visit("https://example.cypress.io/")
#cy.get(".g").type("cypress.io tutorial")
cy.url("https://example.cypress.io/").to.equal("https://example.cypress.io/")
})
})
