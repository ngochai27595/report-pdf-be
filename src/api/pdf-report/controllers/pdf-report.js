'use strict';

module.exports = {
  async create(ctx, next) {
    try {
      console.log("hainn--test--be--");
      // const data = await strapi.service('api::pages-report.pages-report').pagesReport();
      // ctx.body = data;
    } catch (err) {
      ctx.badRequest('Page report controller error', { moreDetails: err })
    }
  }
};