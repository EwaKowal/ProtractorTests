import { browser, by, element, ExpectedConditions } from "protractor";

const EC = ExpectedConditions;

export async function clickXpath(xpath: string) {
    const selector = by.xpath(xpath);
    const elementToBeClicked = element(selector);
    await browser.wait(EC.and(EC.visibilityOf(elementToBeClicked),
        EC.elementToBeClickable(elementToBeClicked)));
    await elementToBeClicked.click();
}

export async function sendKeysXpath(xpath: string, value: string) {
    const selector = by.xpath(xpath);
    const elementToBeSentKeys = element(selector);
    await browser.wait(EC.visibilityOf(elementToBeSentKeys));
    await elementToBeSentKeys.sendKeys(value);
}