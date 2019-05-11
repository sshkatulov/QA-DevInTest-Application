const { By } = require('selenium-webdriver');

const primaryNav = 'primary-nav';
const item = '__item--';
const sector = 'facet-links';
const link = '__link--';

module.exports = {
    'navigation bar': By.id(primaryNav),
    'search fields': By.className('search brick'),
    'sector lists': By.className(sector),
    'jobs blog': By.xpath('//h2[*[text()="Jobs blog"]]/following-sibling::*[@class="articles__items"]'),
    'featured jobs': By.xpath('//section[contains(@class,"featured-jobs")]'),
    'footer': By.tagName('footer'),
    'sign in': By.xpath('//a[text()="Sign in"]'),
    'create account': By.xpath('//a[text()="Create account"]'),
    'home': By.className(`${primaryNav}${item}home`),
    'find a job': By.className(`${primaryNav}${item}find-a-job`),
    'job alerts': By.className(`${primaryNav}${item}jbe`),
    'search recrutiers': By.className(`${primaryNav}${item}recruiters`),
    'jobs blog': By.className(`${primaryNav}${item}careers-advice`),
    'sector items': By.xpath(`//li[contains(@class,"${sector}${link}")]/a`),
    'browsing': By.id('browsing'),
    'job card': By.xpath('//*[contains(@class,"lister__header")]/a'),
    'job description': By.className('job-description'),
    'apply button': By.className('button--apply'),
    'about us': By.xpath('//*[text()="About Us"]'),
    'contact us': By.xpath('//*[text()="Contact Us"]'),
    'term and conditions': By.xpath('//*[text()="Terms & Conditions"]'),
    'privacy policy': By.xpath('//*[text()="Privacy Policy"]'),
    'advertise with us': By.xpath('//*[text()="Advertise with us"]'),
};
