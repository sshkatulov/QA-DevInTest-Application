const { assert } = require('chai');
const { Given, Then, When } = require('cucumber');
const World = require('../support/world');
const locators = require('../constants/locators');
const urls = require('../constants/urls');

/**
 * Navigates to the jobs page.
 */
Given(/^I go to the jobs page$/, () => World.goToJobsPage());

/**
 * Checks if an element is shown
 * @param {string} item element's name to check
 * @returns {WebElement} found element
 */
Then(/^I should see the '(.*)'$/, async (item) => {
  return World.driver.findElement(locators[item]);
})

/**
 * Clicks an element
 * @param {string} item elements to click
 * This step performes the following actions:
 * 1. finds an element
 * 2. clicks the element
 */
When(/^I click '(.*)'$/, async (item) => {
  const element = await World.driver.findElement(locators[item]);
  await element.click();
})

/**
 * Checks if a page is opened
 * @param {string} item page's name to check
 * This step performes the following actions:
 * 1. gets current page url
 * 2. checks that actual url is same as the expected one
 */
Then(/^'(.*)' page is opened$/, async (item) => {
  const currentUrl = await World.driver.getCurrentUrl();
  assert.equal(currentUrl, urls[item], `${item} page should be opened`);
})

/**
 * Opens a random option from sector
 * This step performes the following actions:
 * 1. finds all elements in sector
 * 2. gets a random number, not more than amount of found elements
 * 3. saves sector title for generated index to World
 * 4. clicks sector with generated index
 */
When(/^I click an option from sector list$/, async () => {
  const elements = await World.driver.findElements(locators['sector items']);
  const index = Math.floor(Math.random() * elements.length);
  World.sectorTitle = await elements[index].getText();
  await elements[index].click();
})

/**
 * Checks that page for relevand sector is opened
 * This step performes the following actions:
 * 1. gets an element with page title
 * 2. gets page title form the element
 * 3. checks page title equals to the sector title from World
 */
Then(/^Page with relevant sector is opened$/, async () => {
  const element = await World.driver.findElement(locators['browsing']);
  const pageTitle = await element.getText();
  assert.equal(pageTitle,`${World.sectorTitle} jobs`, 'Appropriate sector should be opened');
})

/**
 * Opens a random job from job list
 * This step performes the following actions:
 * 1. finds all elements in job list
 * 2. gets a random number, not more than amount of found elements
 * 3. clicks job with generated index
 */
When(/^I click a job from list$/, async () => {
  const elements = await World.driver.findElements(locators['job header link']);
  const index = Math.floor(Math.random() * elements.length);
  await elements[index].click();
})

/**
 * Sets job list's filter
 * @param {string} filter name of the filter
 * This step performes the following actions:
 * 1. resets World's index if defined
 * 2. finds the filter element
 * 3. expands the filter
 * 4. with maximum 5 retries does the following:
 * 4.1. sets filter and saves it's value to World
 * 4.2. gets jobs
 * 4.3. checks there is at list one job present
 */
When(/^I select filter for '(.*)'$/, async (filter) => {
  World.index = undefined;
  const element = await World.driver.findElement(locators[`${filter} category`]);
  await element.click();
  for (let i = 0; i < 5; i++) {
    World.filterValue = await setFilter(filter);
    const jobs = await World.driver.findElements(locators['job header link']);
    if (jobs.length > 0) {
      break;
    }
  }
})

/** Checks relevant search result is present for selected filter
 * @param {string} filter name of the filter / category
 * This step performes the following actions:
 * 1. finds values for relevant category
 * 2. checks it includes the value from World
 */
Then(/^I should see relevant search result for '(.*)'$/, async (filter) => {
  const element = await World.driver.findElement(locators[`${filter} value`]);
  assert.include(await element.getText(), World.filterValue, `Search result should contain ${World.filterValue}`);
})

/**
 * Sets filter
 * @param {string} filter name of the filter
 * @returns {string} filter's option
 * This step performes the following actions:
 * 1. finds the filter's option elements
 * 2. un-ticks previously applied filter if it was ticked
 * 3. gets a random number, not more than amount of found options and saves in World
 * 4. ticks option with generated index
 * 5. finds search button
 * 6. 
 */
async function setFilter(filter) {
  const elements = await World.driver.findElements(locators[`${filter} item`]);
  if (World.index !== undefined) {
    await elements[World.index].click();
  }
  World.index = Math.floor(Math.random() * elements.length);
  await elements[World.index].click();
  const search = await World.driver.findElement(locators['search']);
  const value = elements[World.index].getText();
  await search.click();
  return value;
}

/** Logs in
 * @param table table with credentials
 * This step performes the following actions:
 * 1. gets data from the table
 * 2. finds email field and populates with email data
 * 3. finds password field and populates with password data
 * 4. finds sign in data and clicks
 */
When(/^I log in as follows$/, async (table) => {
  const data = table.rowsHash();
  const email = await World.driver.findElement(locators['email']);
  await email.sendKeys(data.email);
  const password = await World.driver.findElement(locators['password']);
  await password.sendKeys(data.password);
  const signIn = await World.driver.findElement(locators['sign in button']);
  await signIn.click();
})

/** Checks reader logged in with expected name
 * @param table table with name
 * This step performes the following actions:
 * 1. gets data from the table
 * 2. finds name element
 * 4. checks that actual name is same as the expected one
 */
Then(/^I should be logged in with name$/, async (table) => {
  const data = table.rowsHash();
  const name = await World.driver.findElement(locators['user name']);
  assert.equal(await name.getText(), data.name, 'Name does not match')
})
