var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var config = {

	development: {
		root: rootPath,
		app: {
			name: 'express-rest-server-boilerplate'
		},
		port: 3009,
		db: 'mongodb://localhost/express-rest-server-boilerplate-development'
		
	},

	test: {
		root: rootPath,
		app: {
			name: 'express-rest-server-boilerplate'
		},
		port: 3000,
		db: 'mongodb://localhost/express-rest-server-boilerplate-test'
		
	},

	production: {
		root: rootPath,
		app: {
			name: 'express-rest-server-boilerplate'
		},
		port: 3000,
		db: process.env.MONGOLAB_URI || 'mongodb://localhost/express-rest-server-boilerplate-production'

	}

};

module.exports = config[env];