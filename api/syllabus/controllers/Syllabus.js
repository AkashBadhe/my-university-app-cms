'use strict';

/**
 * Syllabus.js controller
 *
 * @description: A set of functions called "actions" for managing `Syllabus`.
 */

module.exports = {

  /**
   * Retrieve syllabus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.syllabus.search(ctx.query);
    } else {
      return strapi.services.syllabus.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a syllabus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.syllabus.fetch(ctx.params);
  },

  /**
   * Count syllabus records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.syllabus.count(ctx.query);
  },

  /**
   * Create a/an syllabus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.syllabus.add(ctx.request.body);
  },

  /**
   * Update a/an syllabus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.syllabus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an syllabus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.syllabus.remove(ctx.params);
  }
};
