import { Logger } from 'protractor/built/logger';
import * as path from 'path';
import { clickXpath } from '../utils/click.utils';

const logger = new Logger(path.basename(__filename));

export class FlightsPage {
    async clickOnChooseThisFlight(index: number) {
        const xpath = `(//input[contains(@value,"Choose This Flight")])[${index}]`;
        logger.info(`clickOnChooseThisFlight click on "Choose This Flight" with xpath: ${xpath}`)
        await clickXpath(xpath);
    }
}