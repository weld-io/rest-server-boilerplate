const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {

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