/**
 * Categories.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		id: {
			type: 'integer',
			primaryKey: true
		},
		name: {
			type: 'string'
		},
		slug: {
			type: 'string',
			index: true
		},
		description: {
			type: 'string'
		},
		status: {
			type: 'integer'
		},
		posts: {
			collection: 'posts',
			via: 'category_id'
		}
	},
	beforeCreate: ((category, cb) => {
		category.slug = UltiService.slug(category.name);
		return cb();
	})
};

