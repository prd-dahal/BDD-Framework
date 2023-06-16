Feature: INSON TRAVEL INSURANCE

  BDD/cucumber-json/example.cucumber.json  Testing BDD
  Scenario: Inson Travel Normal Flow
    Given interceptors are loaded
    When I visit url "https://onboard.v2.taksure.xyz/en-GB/travel-insurance/form"
    Then select "Afghanistan" as destination on travel
    Then click on "single_trip"
    Then select date "19 June 2023" on "insuranceEndDate"
    Then click on "tourism"
    Then wait for "1000" miliseconds
    Then click on "nextBtn"
    Then wait for "1000" miliseconds
    Then select date "02 June 2023" on "travellersBirthDate"
    Then click on "nextBtn"
    Then click on "silver"
    Then wait for "1000" miliseconds
    Then click on "chooseProgrammeBtn"
    Then wait for "1000" miliseconds
    Then click on "+998"
    Then click on "+977"
    Then type TEXT "9801900038" on "phoneNumber"
    Then click on "nextBtn"
    Then FillOTP PHONE_NUMBER "9779801900038"
    Then wait for "2000" miliseconds
    Then upload IMAGE "passport.jpg" on "passportFront"
    Then wait until image is uploaded
    Then click on "nextBtn"
    Then click on "confirmBtn"
    Then click on "agreeCheck"
    Then click on "confirmBtn"
    Then wait for "2000" miliseconds
    Then type TEXT "pratikshya.maharjan@hazesoft.co" on "paymentEmail"
    Then click on "email-confirm-button"
    Then wait until user is registered
    Then click on "payme"
    Then type TEXT "8600495473316478" on "cardNumber"
    Then type TEXT "03" on "month"
    Then type TEXT "99" on "year"
    Then click on "paycomBtn"
    Then payme fillOtp with "666666"
    Then wait for "5000" miliseconds



