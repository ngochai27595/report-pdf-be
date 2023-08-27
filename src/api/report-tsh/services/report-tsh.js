'use strict';

/**
 * report-tsh service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::report-tsh.report-tsh');
