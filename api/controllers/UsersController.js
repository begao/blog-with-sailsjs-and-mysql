/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req, res) => {
		var obj = {
			email: 'dinhloi.dev@hotmail.com',
			username: 'loind',
			password: ''
		}
		Users.create(obj).exec((err, user) => {
			if(err)
			{
				return res.json(err)
			}
			return res.json(user)
		})
	},
	create: (req, res) => {
		var objUser = req.allParams();

	}
};

