import { reloadPage } from "../reloadPage";
import { visit } from "../visit";

describe("Reload the page.", () => {
  it("should reload the google homepage.", () => {
    visit("https://www.google.com/");
    cy.get(".gb_Ue > path").click();
    cy.log("Now reloading the page.");
    cy.wait(1500);
    reloadPage();
  });
});
