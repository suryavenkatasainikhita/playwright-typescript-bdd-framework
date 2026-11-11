import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {

    private checkoutButton =
        "#checkout";

    private firstNameTextbox =
        "#first-name";

    private lastNameTextbox =
        "#last-name";

    private postalCodeTextbox =
        "#postal-code";

    private continueButton =
        "#continue";

    constructor(page: Page) {
        super(page);
    }

    async proceedToCheckout() {

        await this.click(
            this.checkoutButton
        );
    }

    async enterCheckoutDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.fill(
            this.firstNameTextbox,
            firstName
        );

        await this.fill(
            this.lastNameTextbox,
            lastName
        );

        await this.fill(
            this.postalCodeTextbox,
            postalCode
        );
    }

    async clickContinue() {

        await this.click(
            this.continueButton
        );
    }
}