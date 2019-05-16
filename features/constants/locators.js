const { By } = require('selenium-webdriver');

const primaryNav = 'primary-nav';
const item = '__item--';
const sector = 'facet-links';
const link = '__link--';
const jobHeader = '//*[@class="lister__header"]';

module.exports = {
    'navigation bar': By.id(primaryNav),
    'search fields': By.className('search brick'),
    'keywords': By.id('keywords'),
    'search': By.xpath('//*[@type="submit" and @value="Search"]'),
    'search tab': By.xpath('//*[@href="/searchjobs/"]'),
    'job header text': By.xpath(`${jobHeader}//span`),
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
    'job header link': By.xpath(`${jobHeader}/a`),
    'job description': By.className('job-description'),
    'apply button': By.className('button--apply'),
    'about us': By.xpath('//*[text()="About Us"]'),
    'contact us': By.xpath('//*[text()="Contact Us"]'),
    'term and conditions': By.xpath('//*[text()="Terms & Conditions"]'),
    'privacy policy': By.xpath('//*[text()="Privacy Policy"]'),
    'advertise with us': By.xpath('//*[text()="Advertise with us"]'),
    'sector category': By.xpath('//*[contains(@class,"category-header") and contains(text(),"Sector")]'),
    'sector item': By.xpath('//*[contains(@for,"Sector")]'),
    'sector value': By.xpath('//*[contains(@class,"Sector")]//*[contains(@class,"three-fifths")]'),

    'profession category': By.xpath('//*[contains(@class,"category-header") and contains(text(),"Profession")]'),
    'profession item': By.xpath('//*[contains(@for,"Profession")]'),
    'profession value': By.xpath('//*[contains(@class,"Profession")]//*[contains(@class,"three-fifths")]'),
    
    'contract type category': By.xpath('//*[contains(@class,"category-header") and contains(text(),"Contract Type")]'),
    'contract type item': By.xpath('//*[contains(@for,"ContractType")]'),
    'contract type value': By.xpath('//*[contains(@class,"ContractType")]//*[contains(@class,"three-fifths")]'),
    
    'hours category': By.xpath('//*[contains(@class,"category-header") and contains(text(),"Hours")]'),
    'hours item': By.xpath('//*[contains(@for,"Hours")]'),
    'hours value': By.xpath('//*[contains(@class,"Hours")]//*[contains(@class,"three-fifths")]'),
    
    'email': By.id('signinemail'),
    'password': By.id('signinpassword'),
    'sign in button': By.xpath('//*[@value="Sign in"]'),
    'user name': By.xpath('//span[contains(@class,"user-nav")]'),
};
