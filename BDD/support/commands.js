// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//]

import { envVariables } from "../config";

Cypress.Commands.add("addProduct", (name) => {
  cy.get("h4.card-title").each(($el, index, $list) => {
    if ($el.text().includes(name)) {
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("fillOtp", (otp) => {
  const resolvedOtp = otp.split("");
  cy.get('input[inputmode="numeric"]').eq(0).type(resolvedOtp[0]);
  cy.get('input[inputmode="numeric"]').eq(1).type(resolvedOtp[1]);
  cy.get('input[inputmode="numeric"]').eq(2).type(resolvedOtp[2]);
  cy.get('input[inputmode="numeric"]').eq(3).type(resolvedOtp[3]);
  cy.get('input[inputmode="numeric"]').eq(4).type(resolvedOtp[4]);
  cy.get('input[inputmode="numeric"]').eq(5).type(resolvedOtp[5]);
  cy.wait("@verifyOTP");
});

Cypress.Commands.add("fillOtpPayme", (otp) => {
  const resolvedOtp = otp.split("");
  cy.get('input[inputmode="numeric"]').eq(0).type(resolvedOtp[0]);
  cy.get('input[inputmode="numeric"]').eq(1).type(resolvedOtp[1]);
  cy.get('input[inputmode="numeric"]').eq(2).type(resolvedOtp[2]);
  cy.get('input[inputmode="numeric"]').eq(3).type(resolvedOtp[3]);
  cy.get('input[inputmode="numeric"]').eq(4).type(resolvedOtp[4]);
  cy.get('input[inputmode="numeric"]').eq(5).type(resolvedOtp[5]);
});

Cypress.Commands.add("fillDate", (splittedDate, selector) => {
  console.log(splittedDate);
  cy.get(`[data-testid=${selector}]`).within(() => {
    cy.wait(300);
    cy.get('[data-testid="date-day"]')
      .click()
      .type(`${splittedDate.day}{enter}{enter}`);
    cy.wait(300);
    cy.get('[data-testid="date-month"]')
      .click()
      .type(`${splittedDate.month}{enter}{enter}`);
    cy.wait(300);
    cy.get('[data-testid="date-year"]')
      .click()
      .type(`${splittedDate.year}{enter}{enter}`);
    cy.wait(300);
  });
});

Cypress.Commands.add("fillMultipleDate", (splittedDateArr, selector) => {
  cy.get(`[data-testid=${selector}]`).each(($el, index) => {
    cy.wrap($el).within(() => {
      cy.get('[data-testid="date-day"]')
        .click({ force: true })

        .type(`${splittedDateArr[index].day}{enter}`);
      cy.get('[data-testid="date-month"]')
        .click({ force: true })
        .type(`${splittedDateArr[index].month}{enter}`);
      cy.get('[data-testid="date-year"]')
        .click({ force: true })
        .type(`${splittedDateArr[index].year}{enter}`);
    });
  });
});

Cypress.Commands.add("fillOtpAPI", (PHONE_NUMBER) => {
  cy.wait("@sendOTP").then(() => {
    cy.request("POST", `${envVariables["CYPRESS_DASHBOARD_URL"]}user/auth`, {
      username: envVariables["CYPRESS_DASHBOARD_USERNAME"],
      password: envVariables["CYPRESS_DASHBOARD_PASSWORD"],
    }).then((adminAuthResponse) => {
      cy.request({
        method: "GET",
        url: `${envVariables["CYPRESS_DASHBOARD_URL"]}test/log/${PHONE_NUMBER}/?type=otp`, // baseUrl is prepend to URL
        headers: {
          Authorization: `Bearer ${adminAuthResponse?.body?.access}`,
        },
      }).then((response) => {
        // response.body is automatically serialized into JSON
        expect(response.status).is.equal(200); // true
        cy.wait(2000);
        console.log(messageArray)
        const messageArray = response?.body.message.split(" ");
        console.log(messageArray);
        console.log(response);
        let otp = "666666";
        if (envVariables["CONTENT_REVERSED"]) {
          otp = messageArray[0];
        } else {
          otp = messageArray[messageArray.length - 1];
        }
        cy.fillOtp(otp);
      });
    });
  });
});
Cypress.Commands.add("removeUser", (PHONE_NUMBER) => {
  cy.request({
    method: "DELETE",
    url: `${envVariables["CYPRESS_DASHBOARD_URL"]}user/${PHONE_NUMBER}/delete-user`,
    headers: {
      Authorization: `Basic ${btoa(
        `${envVariables["CYPRESS_DASHBOARD_USERNAME"]}:${envVariables["CYPRESS_DASHBOARD_PASSWORD"]}`
      )}}`,
    },
  });
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
