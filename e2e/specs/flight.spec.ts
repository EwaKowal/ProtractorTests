import { browser } from 'protractor';
import { FlightFormPage } from '../pages/flightForm.page';
import { FlightsPage } from '../pages/flights.page';
import { FlightSummaryPage } from '../pages/fligthSummary.page';
import { TravelTheWorldPage } from '../pages/travel-the-world.page'

describe('Reserve flight', () => {

    const travelTheWorldPage = new TravelTheWorldPage();
    const flightsPage = new FlightsPage();
    const flightFormPage = new FlightFormPage();
    const flightSummaryPage = new FlightSummaryPage();
    

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get(browser.baseUrl);
    });

    it('should reserve flight from Paris to London', async () => {
        await travelTheWorldPage.pickComboboxValue('Choose your destination city','London');
        await travelTheWorldPage.clickFindFlights();
        await flightsPage.clickOnChooseThisFlight(3);
        await flightFormPage.setInputWithLabel('Name', 'The name');
        await flightFormPage.setInputWithLabel('Address', 'The name');
        await flightFormPage.setInputWithLabel('City', 'The name');
        await flightFormPage.setInputWithLabel('State', 'The name');
        await flightFormPage.setInputWithLabel('Zip Code', 'The name');
        await flightFormPage.pickCardType('American Express');
        await flightFormPage.setInputWithLabel('Credit Card Number', 'The name');
        await flightFormPage.setInputWithLabel('Month', '08');
        await flightFormPage.setInputWithLabel('Year', '2021');
        await flightFormPage.setInputWithLabel('Name on Card', 'Jan Kowalski');
        await flightFormPage.clickPurchaseFlight();
        await flightSummaryPage.expectToday();
    });
});