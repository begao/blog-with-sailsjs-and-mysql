/**
 * Posts.js
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
		user_id: {
			model: 'users'
		},
		category_id: {
			model: 'categories'
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
		content: {
			type: 'string',
			required: true
		},
		thumbnail: {
			type: 'string'
		},
		status: {
			type: 'integer'
		},
		view_count: {
			type: 'integer'
		}
	},
	beforeCreate: ((posts, cb) => {
		posts.slug = UltiService.slug(posts.name);
		return cb();
	})
};

