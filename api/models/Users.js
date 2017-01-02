/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const md5 = require('md5');
module.exports = {

	attributes: {
		id: {
			type: 'integer',
			primaryKey: true
		},
		username: {
			type: 'string',
			index: true,
			required: true,
			unique: true
		},
		password: {
			type: 'string',
			required: true
		},
		email: {
			type: 'email'
		},
		fullname: {
			type: 'string'
		},
		about: {
			type: 'string'
		},
		thumbnail: {
			type: 'string'
		},
		posts: {
			collection: 'posts',
			via: 'user_id'
		},
		salt: {
			type: 'string',
			required: true,
			unique: true,
			defaultsTo: UltiService.randomString(7)
		}
	},
	validationMessages: {
		username: {
			required: 'Chua nhap username',
			unique: 'Da ton tai nguoi dung nay'
		},
		password: {
			required: 'Chua nhap mat khau'
		}
	},
	beforeCreate: (user, cb) => {
		user.password = md5(user.password + user.salt);
		return cb();
	},
	login:(username, password) => {
		return new Promise((resolve, reject) => {
			Users.findOne({username: username})
			.exec((err, user) => {
				if(err) 
				{
					reject(err)
				}
				var tmp_password = md5(password + user.salt);
				if(tmp_password !== user.password) 
				{
					reject({message: 'Tài khoản hoặc mật khẩu không chính xác!'});
				}
				resolve(user);
			})
		})
	}
};

