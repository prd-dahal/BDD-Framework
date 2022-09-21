Feature: Example Test

  Testing BDD
  Scenario: Truthly value is true
    Given I am on "home page"
    When I view the page from "iphone6"
    # When I view the page from "iphone6Plus"
    # When I view the page from "iphone5"
    Then A truthy value is true