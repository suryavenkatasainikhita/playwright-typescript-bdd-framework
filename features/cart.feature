@regression
@cart

Feature: Cart Functionality

  Scenario: Remove Product From Cart

    Given User launches application
    When User logs in with standard user
    And User adds backpack to cart
    And User removes backpack from cart
    Then Cart should be empty