Feature: INSON CAR INSURANCE

    BDD/cucumber-json/example.cucumber.json  Testing BDD
    Scenario: Inson Car Normal Flow
        Given the test is done in "iphone-8"
        When I visit url "https://onboard.v2.taksure.xyz/uz/car-insurance/form"
        Then click on "skipBtn"
        Then select TEXT "CHEVROLET" of "car-make"
        Then select TEXT "Captiva 4" of "car-model"
        Then select TEXT "2015" of "car-model-year"
        Then click on "package-Premium"
        Then wait for "2000" miliseconds
        Then click on "car-public-offer"
        Then click on "nextBtn"

        Then click on "+998"
        Then click on "+977"
        Then type TEXT "9849354809" on SELECTORNAME "name" SELECTORVALUE "phoneNumber"
        Then click on "nextBtn"
