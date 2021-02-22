import { browser, Config } from 'protractor';

export const config: Config = {
    baseUrl: 'https://blazedemo.com/index.php',

    specs: [
        './e2e/specs/flight.spec.js'
    ],
 
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: [],
            }
        }
    ],

    framework: 'jasmine',
    directConnect: false,

    // onPrepare: async () => {
    //     await browser.get('https://blazedemo.com/index.php');
    // }
}