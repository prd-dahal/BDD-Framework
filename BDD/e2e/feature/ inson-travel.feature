 Feature: INSON TRAVEL INSURANCE

BDD/cucumber-json/example.cucumber.json  Testing BDD
  Scenario: Inson Travel Normal Flow
    Given interceptors are loaded 
    Given my previous records are deleted of "9779849354809"
    When I visit url "http://onboard.v2.taksure.xyz/travel-insurance/form"
    Then select TEXT "Afghanistan" of SELECTORNAME "name" and SELECTORVALUE "destinationCountry"
    Then click on TAG "span" that contains TEXT "Single Trip"
    Then select date "18 Feb 2023" on SELECTORNAME "insuranceStartDate"
    Then select date "18 Mar 2023" on SELECTORNAME "insuranceEndDate"
    Then click on TAG "span" that contains TEXT "Tourism"
    Then click on "nextBtn"
    Then select date "18 Feb 1998" on SELECTORNAME "travellersBirthDate"
    Then click on TAG "button" SELECTORNAME "data-testid" SELECTORVALUE "nextBtn"
    Then click on SELECTORNAME "for" SELECTORVALUE "platinum"
    Then click on TAG "button" SELECTORNAME "type" SELECTORVALUE "submit"
    Then click on "+998"
    Then click on "+977"
    Then type TEXT "9849354809" on SELECTORNAME "name" SELECTORVALUE "phoneNumber"
    Then click on "nextBtn"
    Then FillOTP PHONE_NUMBER "+9779849354809"
    Then wait for "700" miliseconds
    Then upload IMAGE "passport.jpg" on SELECTORNAME "name" SELECTORVALUE "passportFront"
    Then wait until image is uploaded
    Then click on "nextBtn"
    Then wait for "2000" miliseconds
    Then click on TAG "button" that contains TEXT "Confirm"
    Then click on SELECTORNAME "for" SELECTORVALUE "confirm"
    Then click on TAG "button" that contains TEXT "Confirm"
    Then type TEXT "pradeep.dahal@hazesoft.co" on SELECTORNAME "name" SELECTORVALUE "email"
    Then click on "email-confirm-button"
    Then wait until user is registered
    Then click on "payme"
    Then type TEXT "8600495473316478" on SELECTORNAME "name" SELECTORVALUE "paycomCard"
    Then type TEXT "03" on SELECTORNAME "name" SELECTORVALUE "paycomExpiryMonth"
    Then type TEXT "99" on SELECTORNAME "name" SELECTORVALUE "paycomExpiryYear"
    Then click on "paycomBtn"
    Then payme fillOtp with "666666"  
    Then wait for "5000" miliseconds


   