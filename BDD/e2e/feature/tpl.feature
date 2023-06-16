Feature: INSON TPL INSURANCE

    BDD/cucumber-json/example.cucumber.json  Testing BDD
    Scenario: Inson TPL Normal Flow
        Given interceptors are loaded
        When I visit url "https://onboard.v2.taksure.xyz/en-GB/tpl-insurance/form"
        Then type TEXT "10X654WA" on "tplLicensePlate"
        Then type TEXT "AAF" on "registrationSerial"
        Then type TEXT "3523002" on "registrationNumber"
        Then click on "+998"
        Then click on "+977"
        Then type TEXT "9801900037" on "phoneNumber"
        Then wait for "2000" miliseconds
        Then click on "nextBtn"
        Then wait for "4000" miliseconds
        # Then FillOTP PHONE_NUMBER "9779801900037"
        Then select date "11 October 1979" on "dateOfBirth"
        Then type TEXT "AB" on "passportSeries"
        Then type TEXT "2068873" on "passportNumber"
        Then click on "addDriverBtn"
        Then wait for "2000" miliseconds
        Then select TEXT "Father" of "relationship"
        Then select date "29 January 1993" on "dob"
        Then wait for "2000" miliseconds
        Then type TEXT "AD" on "driverPassportSeries"
        Then type TEXT "2527649" on "driverPassportNumber"
        Then wait for "2000" miliseconds
        Then click on "addBtn"
        Then wait for "5000" miliseconds
        Then click on "nextBtn"
        Then wait for "5000" miliseconds
        Then click on "confirmTerms"
        Then click on "tpl-confirm-button"








