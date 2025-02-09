Feature: User Login

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should see a welcome message

  Scenario: User logs in with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message