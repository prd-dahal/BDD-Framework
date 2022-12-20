 Feature: INSON TRAVEL INSURANCE

  Testing BDD
  Scenario: Inson Travel Normal Flow
  
   
    Given my previous records are deleted of "9779849354809"
    
    When I visit url "http://localhost:3000/travel-insurance/form"
    
    Then select TEXT "Afghanistan" of SELECTORNAME "name" and SELECTORVALUE "destinationCountry"
    Then click on TAG "span" that contains TEXT "Single Trip"
    Then select date "18 Feb 2023" on SELECTORNAME "insuranceStartDate"
    Then select date "18 Mar 2023" on SELECTORNAME "insuranceEndDate"
    Then click on TAG "span" that contains TEXT "Tourism"
    Then click on DATA-TESTID "nextBtn"
    
    Then select date "18 Feb 1998" on SELECTORNAME "travellersBirthDate"
    Then click on TAG "button" SELECTORNAME "data-testid" SELECTORVALUE "nextBtn"

    Then click on SELECTORNAME "for" SELECTORVALUE "platinum"
  
    Then click on TAG "button" SELECTORNAME "type" SELECTORVALUE "submit"

    
    Then click on DATA-TESTID "+998"
    Then click on DATA-TESTID "+977"

    Then type TEXT "9849354809" on SELECTORNAME "name" SELECTORVALUE "phoneNumber"
    Then click on TAG "button" SELECTORNAME "data-testid" SELECTORVALUE "nextBtn"
    Then FillOTP PHONE_NUMBER "+9779849354809"

    Then Upload IMAGE "passport.jpg" on SELECTORNAME "name" SELECTORVALUE "passportFront"
    Then click on TAG "button" SELECTORNAME "data-testid" SELECTORVALUE "nextBtn"

    Then wait for "2000" miliseconds
    Then click on TAG "button" that contains TEXT "Confirm"

    Then click on SELECTORNAME "for" SELECTORVALUE "confirm"
    Then click on TAG "button" that contains TEXT "Confirm"

    Then type TEXT "pradeep.dahal@hazesoft.co" on SELECTORNAME "name" SELECTORVALUE "email"
    Then click on SELECTORNAME "data-testid" SELECTORVALUE "email-confirm-button"
    Then wait until user is registered
    Then click on SELECTORNAME "data-testid" SELECTORVALUE "payme"
    Then type TEXT "8600495473316478" on SELECTORNAME "name" SELECTORVALUE "paycomCard"
    Then type TEXT "03" on SELECTORNAME "name" SELECTORVALUE "paycomExpiryMonth"
    Then type TEXT "99" on SELECTORNAME "name" SELECTORVALUE "paycomExpiryYear"
    Then click on SELECTORNAME "data-testid" SELECTORVALUE "paycomBtn"
    Then payme fillOtp with "666666"  



   