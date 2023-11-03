/// <reference types="Cypress"/>

describe("API Testing ", () => {
  //! Store Access Token
  const accessToken =
    "eddb52d08b6143688af60d3a01b135c81e9da7d4e96653f7bebb311c2b9307d0";
  //! Generate Random ID
  let ids = Math.floor(Math.random() * 1000 + 1);
  //! Generate Random E-mail
  let random_text = "";
  var pattern = "abcdefghijklmnopqrstuvwxyz";
  var email = "";
  for (var i = 0; i < 10; i++) {
    random_text += pattern.charAt(Math.floor(Math.random() * pattern.length));
  }
  email = random_text + "@gmail.com";
  it("get user", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public-api/users",

      headers: {
        authorization: "Barer " + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data[0].name).to.eq("Akshainie Shah DVM");
      console.log(res.body.meta.pagination);
      expect(res.body.meta.pagination.pages).to.eq(278);
    });
  });

  it.skip("Create user using Post Method", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",

      headers: {
        authorization: "Bearer " + accessToken,
      },
      body: {
        name: "tester",
        gender: "male",
        email: "cytest" + ids + "@gmail.com",
        status: "active",
      },
    })
      .then((res) => {
        //cy.log(JSON.stringify(res));
        console.log(res.body);
        expect(res.body).has.property("email", "cytest" + ids + "@gmail.com");
        //expect(res.body.name).to.eq("tester");
      })
      .then((res) => {
        const id = res;
        console.log(res.body.id);
        //cy.log( id);
        cy.request({
          method: "GET",
          url: "https://gorest.co.in/public/v2/users/" + id,
          headers: {
            authorization: "Bearer " + accessToken,
          },
        }).then((res) => {
          expect(res.body.id).to.eq(id);
        });
      });
  });
});
