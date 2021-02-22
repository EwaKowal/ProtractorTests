import { Logger } from 'protractor/built/logger';
import * as path from 'path';
import { clickXpath } from '../utils/click.utils';
import { browser, by, element, ExpectedConditions } from 'protractor';

const logger = new Logger(path.basename(__filename));

export class FlightSummaryPage {
    async expectToday() {
        const xpath = '//h1';
        const headerElement = element(by.xpath(xpath));
        logger.info(`expectToday wait for element with xpath: ${xpath}`)
        await browser.wait(ExpectedConditions.visibilityOf(headerElement));
        const text = await headerElement.getText();
        expect(text).toContain('Thank you for your purchase today');
    }
}  