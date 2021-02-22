import { Logger } from 'protractor/built/logger';
import * as path from 'path';
import { clickXpath } from '../utils/click.utils';
import { browser } from 'protractor';


const logger = new Logger(path.basename(__filename));

export class TravelTheWorldPage {
    private static readonly XPATH_BUTTON_FIND_FLIGHTS = '//input[contains(@value,"Find Flights")]';

    async pickComboboxValue(headerText:string, value: string) {
        const xpathSelect = `(//h2[contains(text(),"${headerText}")]/following::select)[1]`;
        logger.info(`chooseYourDestinationCity going to click on select with xpath ${xpathSelect}`);
        await clickXpath(xpathSelect);

        const xpathSelectOption = `${xpathSelect}//option[contains(text(),"${value}")]`;
        logger.info(`chooseYourDestinationCity going to click on option with xpath ${xpathSelectOption}`);
        await clickXpath(xpathSelectOption);
    }

    async clickFindFlights() {
        logger.info(`clickFindFlights click clickFindFlights with xpath ${TravelTheWorldPage.XPATH_BUTTON_FIND_FLIGHTS}`);
        await clickXpath(TravelTheWorldPage.XPATH_BUTTON_FIND_FLIGHTS);
    }
}