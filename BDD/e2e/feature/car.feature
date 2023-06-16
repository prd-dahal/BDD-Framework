Feature: INSON CAR INSURANCE

    BDD/cucumber-json/example.cucumber.json  Testing BDD
    Scenario: Inson Car Normal Flow
        Given interceptors are loaded
        Given the test is done in "iphone-8"
        When I visit url "https://onboard.v2.taksure.xyz/en-GB/car-insurance/form"
        Then select TEXT "CHEVROLET" of "car-make"
        Then select TEXT "Captiva 4" of "car-model"
        Then select TEXT "2015" of "car-model-year"
        Then click on "+998"
        Then click on "+977"
        Then type TEXT "9801900038" on "phoneNumber"
        Then click on "nextBtn"
        Then click on "package-Standard"
        Then click on "car-public-offer"
        Then wait for "1000" miliseconds
        Then click on "0" element of "nextBtn"
        Then wait for "2000" miliseconds

        Then FillOTP PHONE_NUMBER "9779801900038"
        Then wait for "2000" miliseconds
        Then type TEXT "10X654WA" on "licenseDetails"
        Then type TEXT "AAF" on "registrationSerial"
        Then type TEXT "3523002" on "registrationNumber"
        Then type TEXT "AD" on "passportSeries"
        Then type TEXT "5464875" on "passportNumber"
        Then click on "nextBtn"
        Then wait for "2000" miliseconds
        Then wait until user is registered
        Then click on "payme"
        Then type TEXT "8600495473316478" on "cardNumber"
        Then type TEXT "03" on "month"
        Then type TEXT "99" on "year"
        Then click on "paycomBtn"
        Then wait for "3000" miliseconds
        Then payme fillOtp with "666666"  
        Then wait for "2000" miliseconds
        Then click on "0" element of "nextBtn" 
        Then wait for "5000" miliseconds
        Then upload car images
        Then click on "nextBtn"