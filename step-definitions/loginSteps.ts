import { PageObjectManager } from "../pages/PageObjectManager";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import environment from "../config/env";

import userData from "../test-data/userData.json";

import { logger } from "../utils/logger";

import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { OrderPage } from "../pages/OrderPage";

let loginPage: LoginPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let orderPage: OrderPage;

let pageManager: PageObjectManager;
Given(
  "User launches application",
  async function () {

    logger.info(
      "Launching application"
    );

    pageManager =
    new PageObjectManager(
        this.page
    );

loginPage =
    pageManager.getLoginPage();

cartPage =
    pageManager.getCartPage();

checkoutPage =
    pageManager.getCheckoutPage();

orderPage =
    pageManager.getOrderPage();

    logger.info(
      `Executing in ${environment.envName} Environment`
    );

    await loginPage.navigate(
      environment.baseUrl
    );

    logger.info(
      "Application launched successfully"
    );
  }
);

When(
  "User logs in with standard user",
  async function () {

    logger.info(
      "Starting login process"
    );

    await loginPage.login(

      userData.standardUser.username,

      userData.standardUser.password
    );

    logger.info(
      "Login completed successfully"
    );
  }
);

Then(
  "User should see inventory page",
  async function () {

    const status =
      await loginPage.isInventoryPageDisplayed();

    expect(status)
      .toBeTruthy();

    logger.info(
      "Inventory page displayed successfully"
    );
  }
);

When(
  "User adds backpack to cart",
  async function () {

    logger.info(
      "Adding backpack to cart"
    );

    await cartPage.addBackpackToCart();

    logger.info(
      "Backpack added to cart successfully"
    );
  }
);

Then(
  "Cart should contain backpack",
  async function () {

    const count =
      await cartPage.getCartCount();

    expect(count)
      .toBe("1");

    logger.info(
      "Cart validation successful"
    );
  }
);

When(
  "User opens cart",
  async function () {

    logger.info(
      "Opening shopping cart"
    );

    await cartPage.openCart();

    logger.info(
      "Shopping cart opened successfully"
    );
  }
);

When(
  "User proceeds to checkout",
  async function () {

    logger.info(
      "Proceeding to checkout"
    );

    await checkoutPage.proceedToCheckout();

    logger.info(
      "Checkout page opened successfully"
    );
  }
);

When(
  "User completes checkout information",
  async function () {

    logger.info(
      "Entering checkout details"
    );

    await checkoutPage.enterCheckoutDetails(

      userData.standardUser.firstName,

      userData.standardUser.lastName,

      userData.standardUser.postalCode
    );

    logger.info(
      "Checkout details entered successfully"
    );
  }
);

When(
  "User clicks continue",
  async function () {

    logger.info(
      "Clicking Continue button"
    );

    await checkoutPage.clickContinue();

    logger.info(
      "Moved to order overview page"
    );
  }
);

When(
  "User clicks finish",
  async function () {

    logger.info(
      "Completing order"
    );

    await orderPage.finishOrder();

    logger.info(
      "Finish button clicked successfully"
    );
  }
);

Then(
  "Order should be placed successfully",
  async function () {

    logger.info(
      "Validating order completion"
    );

    const message =
      await orderPage.getSuccessMessage();

    expect(message)
      .toContain(
        "Thank you for your order"
      );

    logger.info(
      "Order placed successfully"
    );
  }
);

When(
  "User logs out",
  async function () {

    await loginPage.logout();

    logger.info(
      "User logged out successfully"
    );
  }
);

Then(
  "User should see login page",
  async function () {

    expect(
      this.page.url()
    ).toContain(
      "saucedemo"
    );

    logger.info(
      "Login page displayed successfully"
    );
  }
);
When(
  "User removes backpack from cart",
  async function () {

      logger.info(
        "Removing backpack from cart"
      );

      await cartPage.removeBackpackFromCart();

      logger.info(
        "Backpack removed from cart successfully"
      );
  }
);
Then(
  "Cart should be empty",
  async function () {

      const status =
        await cartPage.isCartEmpty();

      expect(status)
        .toBeTruthy();

      logger.info(
        "Cart is empty"
      );
  }
);