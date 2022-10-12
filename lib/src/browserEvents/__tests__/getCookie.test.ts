import { getCookie } from "../getCookie";
import { setCookie } from "../setCookie";

describe("Get the cookie from the document", () => {
  //   before(() => {
  //     setCookie("test", "something");
  //     cy.viewport(1280, 720);
  //   });

  it("should get the cookie from the dom", () => {
    cy.visit("http://127.0.0.1:5500/");
    // const x = cy.getCookie("test");
    const x = cy.location();
    console.log(x);
  });
});
