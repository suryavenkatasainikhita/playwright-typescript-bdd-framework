@regression
@logout

Feature: Logout

  Scenario: Successful Logout

    Given User launches application
    When User logs in with standard user
    And User logs out
    Then User should see login page