const { transformSelectors } = require('../../helpers/transformers');
const navigationBar = require('./navigationBar');
const home = require('./home');
const footer = require('./footer');
const jobs = require('./jobs');
const authorization = require('./authorization');

module.exports = {
  ...transformSelectors(navigationBar),
  ...transformSelectors(home),
  ...transformSelectors(footer),
  ...transformSelectors(jobs),
  ...transformSelectors(authorization),
};
