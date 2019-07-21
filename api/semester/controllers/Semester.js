'use strict';

/**
 * Semester.js controller
 *
 * @description: A set of functions called "actions" for managing `Semester`.
 */

module.exports = {

  /**
   * Retrieve semester records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.semester.search(ctx.query);
    } else {
      return strapi.services.semester.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a semester record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.semester.fetch(ctx.params);
  },

  /**
   * Count semester records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.semester.count(ctx.query);
  },

  /**
   * Create a/an semester record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.semester.add(ctx.request.body);
  },

  /**
   * Update a/an semester record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.semester.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an semester record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.semester.remove(ctx.params);
  }
};
