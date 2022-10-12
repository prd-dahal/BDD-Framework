import { setCookie } from "../setCookie";

describe("Set the cookie and get the cookie", () => {
  it("should set the cookie and get the cookie", () => {
    cy.visit("https://berkeley.hbgdesignlab.dev/");
    setCookie("test", "something1");
  });
});
