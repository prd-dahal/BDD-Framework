 Feature: MSHIELD INSURANCE
    
    Testing BDD
    @MSHIELD_TEST
    Scenario: Mshield Normal Flow
        Given interceptors are loaded
        When I visit url from config
        Then click on "0" element of "packageCard"
        Then click on "uploadPhotoBtn"
        Then upload IMAGE "mshield_front.PNG" on "photoidfrontImage"
        Then upload IMAGE "mshield_back.PNG" on "photoidbackImage"
        Then click on "submitImageBtn"
        Then wait until image is uploaded
        Then wait until image is uploaded
        Then type TEXT "7827207868" on "phoneNumber"
        Then click on "acceptTerms"
        Then click on "nextBtn"
        Then FillOTP PHONE_NUMBER "9647827207868"
        Then click on "yesRadioBtn"
        Then click on "None"
        Then click on "nextBtn"
        Then wait for "1000" miliseconds
        Then click on "nextBtn"
        Then wait until user is registered
        Then wait until subscribe
        Then wait for "5000" miliseconds


