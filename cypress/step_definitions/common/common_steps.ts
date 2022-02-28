import { Then } from "cypress-cucumber-preprocessor/steps";

import { CommonPage } from '../../pages/common_page/common.po';

const commonPage: CommonPage = new CommonPage();

Then(/^I see Dashboard page$/, () => {
    commonPage.waitForDashboardPage();
});
