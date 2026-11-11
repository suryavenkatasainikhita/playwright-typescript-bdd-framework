import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class OrderPage extends BasePage {

    private finishButton =
        "#finish";

    private successMessage =
        ".complete-header";

    constructor(page: Page) {
        super(page);
    }

    async finishOrder() {

        await this.click(
            this.finishButton
        );
    }

    async getSuccessMessage() {

        return await this.getText(
            this.successMessage
        );
    }
}