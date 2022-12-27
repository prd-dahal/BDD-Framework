////// CHANGE HERE FOR DIFFERENT ENVIRONMENT
const COMPANY = "INSON"; // "INSON" or "MSHIELD"
const TEST_URL = "https://onboard.v2.taksure.xyz/en/life-insurance/form";
const DASHBOARD_URL = "https://dashboard.v2.taksure.xyz/api/v1/";
const CMS_URL = "https://cms.v2.taksure.xyz/api/v1/";
//////

//DO NOT EDIT THIS
export const envVariables = {
  COMPANY: COMPANY,
  CYPRESS_TEST_URL: TEST_URL,
  CYPRESS_DASHBOARD_URL: DASHBOARD_URL,
  CYPRESS_CMS_URL: CMS_URL,
  CYPRESS_DASHBOARD_USERNAME: "taksure",
  CYPRESS_DASHBOARD_PASSWORD: "taksure$$$123",
  CYPRESS_IMAGE_PATH: `BDD/fixtures/images/${COMPANY}/`,
  PAYME_CHECKOUT_URL: "https://checkout.test.paycom.uz/api",
};
//DO NOT EDIT THIS

export const viewports = [
  "ipad-2",
  "ipad-mini",
  "iphone-3",
  "iphone-4",
  "iphone-5",
  "iphone-6",
  "iphone-6+",
  "iphone-7",
  "iphone-8",
  "iphone-x",
  "iphone-xr",
  "iphone-se2",
  "macbook-11",
  "macbook-13",
  "macbook-15",
  "macbook-16",
  "samsung-note9",
  "samsung-s10",
  "samsung-s10+",
];
