import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { splitDateIntoDayMonthYear } from "../../step_definitions/utils/index.js";
import {
  commonInterceptors,
  insonInterceptors,
  mshieldInterceptors,
} from "../../../support/interceptors";
import { envVariables, viewports, isPhone } from "../../../config";

Given("my previous records are deleted of {string}", (PHONE_NUMBER) => {
  cy.removeUser(PHONE_NUMBER);
});

Given("the test is done in {string}", (DEVICE) => {
  const deviceFound = viewports.find((device) => device === DEVICE);
  console.log("The device is found", deviceFound);
  if (!deviceFound) {
    throw new Error("The device is not found");
  } else {
    cy.viewport(DEVICE);
    if(isPhone(DEVICE)){
      cy.on('window:before:load', (win) => {
        Object.defineProperty(win.navigator, 'userAgent', {
           value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          });
      })
    }
  }
});

Given("interceptors are loaded", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  commonInterceptors();
  switch (envVariables["COMPANY"]) {
    case "INSON":
      insonInterceptors();
      break;
    case "MSHIELD":
      mshieldInterceptors();
      break;
  }
});

When("I visit url from config", () => {
  cy.visit(envVariables["CYPRESS_TEST_URL"], {
    auth: {
      username: "taksure",
      password: "taksure$$$123",
    },
  });
});

When("I visit url {string}", (url) => {
  cy.visit(url, {
    auth: {
      username: "taksure",
      password: "taksure$$$123",
    },
  });
});

Then(
  "click on TAG {string} that contains TEXT {string}",
  (TAG, HTMLCONTENT) => {
    cy.get(`${TAG}`).contains(`${HTMLCONTENT}`).click();
  }
);

Then(
  "select TEXT {string} of SELECTORNAME {string} and SELECTORVALUE {string}",
  (TEXT, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}=${SELECTORVALUE}]`).select(TEXT);
  }
);

Then("select TEXT {string} of {string}", (TEXT, SELECTORVALUE) => {
  cy.get(`[${"data-testid"}=${SELECTORVALUE}]`).select(TEXT);
});

Then(
  "click on TAG {string} SELECTORNAME {string} SELECTORVALUE {string}",
  (TAG, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`${TAG}[${SELECTORNAME}=${SELECTORVALUE}]`).click();
  }
);

Then(
  "click on SELECTORNAME {string} SELECTORVALUE {string}",
  (SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).click({ force: true });
  }
);

Then("click on {string}", (SELECTORVALUE) => {
  cy.get(`[data-testid="${SELECTORVALUE}"]`).click({ force: true });
});

Then("click on {string} element of {string}", (POSITION, SELECTORVALUE) => {
  cy.get(`[data-testid="${SELECTORVALUE}"]`)
    .eq(Number(POSITION))
    .click({ force: true });
});

Then(
  "type TEXT {string} on SELECTORNAME {string} SELECTORVALUE {string}",
  (TEXT, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).type(TEXT);
  }
);
Then("type TEXT {string} on {string}", (TEXT, SELECTORVALUE) => {
  cy.get(`[${"data-testid"}="${SELECTORVALUE}"]`).type(TEXT);
});

Then("input number of people who need cover to {string}", (people) => {
  for (let i = 1; i < Number(people); i++) {
    cy.get(`[data-testid=increaseBtn]`).click();
  }
});

Then("input dates {string} on SELECTORNAME {string}", (dates, selector) => {
  const splittedDate = dates
    .split(",")
    .map((date) => splitDateIntoDayMonthYear(date.trim()));
  cy.fillMultipleDate(splittedDate, selector);
});

Then("select date {string} on {string}", (date, selector) => {
  const splittedDate = splitDateIntoDayMonthYear(date);
  cy.fillDate(splittedDate, selector);
});

Then("FillOTP PHONE_NUMBER {string}", (PHONE_NUMBER) => {
  cy.fillOtpAPI(PHONE_NUMBER);
});

Then("wait for {string} miliseconds", (seconds) => {
  cy.wait(Number(seconds));
});

Then(
  "upload IMAGE {string} on SELECTORNAME {string} SELECTORVALUE {string}",
  (IMAGE, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).selectFile(
      `${envVariables["CYPRESS_IMAGE_PATH"]}${IMAGE}`
    );
  }
);

Then("upload IMAGE {string} on {string}", (IMAGE, SELECTORVALUE) => {
  cy.get(`[data-testid="${SELECTORVALUE}"]`).selectFile(
    `${envVariables["CYPRESS_IMAGE_PATH"]}${IMAGE}`
  );
});

Then("wait until image is uploaded", () => {
  cy.wait("@uploadImage");
});

Then("wait until user is registered", () => {
  cy.wait("@registeredUser");
});
Then("wait until subscribe", () => {
  cy.wait("@subscribe");
});

Then("wait until premium is calculated", () => {
  cy.wait("@premiumCalculate");
});

Then("payme fillOtp with {string}", (OTP) => {
  cy.wait("@paymeSendOTP");
  cy.fillOtpPayme(OTP);
});

Then("upload car images", ()=>{
  for (let i=0;i<=5;i++){
    cy.get(`[data-testid=openCamera]`).eq(i).click()
    cy.get(`[data-testid=captureImage]`).click()
    cy.get(`[data-testid=clickOk]`).eq(i).click()  
    cy.wait('@carImageClick')
  }
  
})

Then ("wait for tpl vehicle-detail", ()=>{
  cy.wait("@tplVehicleDetail")
})