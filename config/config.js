var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var config = {

	development: {
		root: rootPath,
		app: {
			name: 'rest-server-boilerplate'
		},
		port: 3009,
		db: 'mongodb://localhost/rest-server-boilerplate-development'
		
	},

	test: {
		root: rootPath,
		app: {
			name: 'rest-server-boilerplate'
		},
		port: 3000,
		db: 'mongodb://localhost/rest-server-boilerplate-test'
		
	},

	production: {
		root: rootPath,
		app: {
			name: 'rest-server-boilerplate'
		},
		port: 3000,
		db: process.env.MONGOLAB_URI || 'mongodb://localhost/rest-server-boilerplate-production'

	}

};

module.exports = config[env];