const { assert } = require('chai');
const { Given, Then, When } = require('cucumber');
const World = require('../support/world');
const locators = require('../constants/locators');
const urls = require('../constants/urls');

Given(/^I go to the jobs page$/, () => World.goToJobsPage());

Then(/^I should see the '(.*)'$/, async (item) => {
  return World.driver.findElement(locators[item]);
})

When(/^I click '(.*)'$/, async (item) => {
  const element = await World.driver.findElement(locators[item]);
  await element.click();
})

Then(/^'(.*)' page is opened$/, async (item) => {
  const currentUrl = await World.driver.getCurrentUrl();
  assert.equal(currentUrl, urls[item], `${item} page should be opened`);
})

When(/^I click an option from sector list$/, async () => {
  const elements = await World.driver.findElements(locators['sector items']);
  const index = Math.floor(Math.random() * elements.length);
  World.sectorTitle = await elements[index].getText();
  await elements[index].click();
})

Then(/^Page with relevant sector is opened$/, async () => {
  const element = await World.driver.findElement(locators['browsing']);
  const pageTitle = await element.getText();
  assert.equal(pageTitle,`${World.sectorTitle} jobs`, 'Appropriate sector should be opened');
})

When(/^I click a job from sector$/, async () => {
  const elements = await World.driver.findElements(locators['job card']);
  const index = Math.floor(Math.random() * elements.length);
  await elements[index].click();
})
