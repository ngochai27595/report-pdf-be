'use strict';

/**
 * report-tsh controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::report-tsh.report-tsh', ()=>({
    async create(ctx) {
        // const {data} = ctx.request.body;
        // const files = ctx.request.files;
        // const parseData = JSON.parse(data);
        console.log('hainn--be--',ctx);
        // const entry = await strapi.entityService.create('api::report-tsh.report-tsh',{
        //     data: {
        //         ...parseData,
        //     },
        //     file: {
        //         file: files['files.media']
        //     }
        // })
    }

}));
