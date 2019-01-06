'use strict';

/**
 * Ebanking.js controller
 *
 * @description: A set of functions called "actions" for managing `Ebanking`.
 */

module.exports = {

  /**
   * Retrieve ebanking records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ebanking.search(ctx.query);
    } else {
      return strapi.services.ebanking.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ebanking record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ebanking.fetch(ctx.params);
  },

  /**
   * Count ebanking records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ebanking.count(ctx.query);
  },

  /**
   * Create a/an ebanking record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ebanking.add(ctx.request.body);
  },

  /**
   * Update a/an ebanking record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ebanking.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ebanking record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ebanking.remove(ctx.params);
  }
};
