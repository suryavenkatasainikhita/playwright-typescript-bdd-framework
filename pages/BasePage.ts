import { Page } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: string) {
        await this.page.click(locator);
    }

    async fill(locator: string, value: string) {
        await this.page.fill(locator, value);
    }

    async getText(locator: string) {
        return await this.page.locator(locator).textContent();
    }

    async takeScreenshot(path: string) {
        await this.page.screenshot({
            path,
            fullPage: true
        });
    }
}