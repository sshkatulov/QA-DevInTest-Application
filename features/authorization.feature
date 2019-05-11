Feature: Authorization

  Background: Landing to the home page
    Given I go to the jobs page

  Scenario Outline: '<Item>' link goes to its respective page
    When I click '<Item>'
    Then '<Item>' page is opened

  Examples:
    | Item              |
    | sign in           |
    | create account    |
