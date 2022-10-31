'use strict';

/**
 * wedding-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wedding-package.wedding-package');
