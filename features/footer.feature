Feature: Footer

  Background: Landing to the home page
    Given I go to the jobs page

  Scenario Outline: Ensuring '<Item>' link in the footer is functional
    When I click '<Item>'
    Then '<Item>' page is opened

  Examples:
    | Item                |
    | about us            |
    | contact us          |
    | term and conditions |
    | privacy policy      |
    | advertise with us   |
