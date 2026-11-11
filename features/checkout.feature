@smoke
@checkout

Feature: Checkout Functionality

  @regression
  Scenario: Complete Checkout Flow

    Given User launches application
    When User logs in with standard user
    And User adds backpack to cart
    And User opens cart
    And User proceeds to checkout
    And User completes checkout information
    And User clicks continue
    And User clicks finish
    Then Order should be placed successfully