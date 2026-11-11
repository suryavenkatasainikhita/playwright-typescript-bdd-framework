@smoke
@login

Feature: Login

  Scenario: Successful Login

    Given User launches application
    When User logs in with standard user
    Then User should see inventory page