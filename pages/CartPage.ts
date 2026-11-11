import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    private addBackpackButton =
        "#add-to-cart-sauce-labs-backpack";

    private removeBackpackButton =
        "#remove-sauce-labs-backpack";

    private cartIcon =
        ".shopping_cart_link";

    private cartBadge =
        ".shopping_cart_badge";

    constructor(page: Page) {
        super(page);
    }

    async addBackpackToCart() {

        await this.click(
            this.addBackpackButton
        );
    }

    async removeBackpackFromCart() {

        await this.click(
            this.removeBackpackButton
        );
    }

    async openCart() {

        await this.click(
            this.cartIcon
        );
    }

    async getCartCount() {

        return await this.getText(
            this.cartBadge
        );
    }

    async isCartEmpty() {

        const badgeCount =
            await this.page
                .locator(
                    this.cartBadge
                )
                .count();

        return badgeCount === 0;
    }
}