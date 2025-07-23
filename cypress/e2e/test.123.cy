describe("test_1",()=>{
it("open google.com",()=>{
cy.visit("www.google.com")
#cy.get(".g").type("cypress.io tutorial")
cy.url("www.google.com").to.equal(""www.google.com"")
})
})
