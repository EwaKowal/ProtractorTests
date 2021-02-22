import { Logger } from 'protractor/built/logger';
import * as path from 'path';
import { sendKeysXpath, clickXpath } from '../utils/click.utils';

const logger = new Logger(path.basename(__filename));

export class FlightFormPage {
    private static readonly XPATH_BUTTON_PURCHASE_FLIGTH = '//input[contains(@value,"Purchase Flight")]';

    async setInputWithLabel(label: string, value: string) {
        const xpath = `(//label[normalize-space(text())="${label}"]/following::input)[1]`;
        logger.info(`setInputWithLabel with xpath: ${xpath}`);
        await sendKeysXpath(xpath, value);
    }
    
    async pickCardType(value: string) {
        const xpathSelect = `(//label[contains(text(),"Card Type")]/following::select)[1]`;
        logger.info(`pickCardType going to click on select with xpath ${xpathSelect}`);
        await clickXpath(xpathSelect);

        const xpathSelectOption = `${xpathSelect}//option[contains(text(),"${value}")]`;
        logger.info(`pickCardType going to click on option with xpath ${xpathSelectOption}`);
        await clickXpath(xpathSelectOption);
    }

    
    async clickPurchaseFlight() {
        logger.info(`clickPurchaseFlight click with xpath ${FlightFormPage.XPATH_BUTTON_PURCHASE_FLIGTH}`);
        await clickXpath(FlightFormPage.XPATH_BUTTON_PURCHASE_FLIGTH);
    }
}