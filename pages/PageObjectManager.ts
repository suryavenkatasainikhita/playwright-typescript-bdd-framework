import { Page } from "@playwright/test";

import { LoginPage } from "./LoginPage";
import { CartPage } from "./CartPage";
import { CheckoutPage } from "./CheckoutPage";
import { OrderPage } from "./OrderPage";

export class PageObjectManager {

    constructor(
        private page: Page
    ) {}

    getLoginPage(): LoginPage {

        return new LoginPage(
            this.page
        );
    }

    getCartPage(): CartPage {

        return new CartPage(
            this.page
        );
    }

    getCheckoutPage(): CheckoutPage {

        return new CheckoutPage(
            this.page
        );
    }

    getOrderPage(): OrderPage {

        return new OrderPage(
            this.page
        );
    }
}
