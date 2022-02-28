Feature: Demo
  Scenario: Login to medondo website
    Given I open login page
    When I login as sysadmin user
    Then I see Dashboard page
