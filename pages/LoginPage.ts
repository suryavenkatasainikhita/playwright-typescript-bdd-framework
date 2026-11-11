import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private usernameTextbox = "#user-name";
    private passwordTextbox = "#password";
    private loginButton = "#login-button";

    private menuButton =
        "#react-burger-menu-btn";

    private logoutLink =
        "#logout_sidebar_link";

    constructor(page: Page) {
        super(page);
    }

    async login(
        username: string,
        password: string
    ) {

        await this.fill(
            this.usernameTextbox,
            username
        );

        await this.fill(
            this.passwordTextbox,
            password
        );

        await this.click(
            this.loginButton
        );
    }

    async isInventoryPageDisplayed() {

        return this.page
            .url()
            .includes("inventory");
    }

    async logout() {

        await this.click(
            this.menuButton
        );

        await this.page.waitForTimeout(
            1000
        );

        await this.click(
            this.logoutLink
        );
    }
}