/**
 * Application routes for REST
 */

'use strict';

var express = require('express');

module.exports = function (app, config) {

	var router = express.Router();
	app.use('/', router);

	// Controllers
	var authController = require(config.root + '/controllers/auth');
	var thingsController = require(config.root + '/controllers/things');

	// Routes
	router.get('/api/things', authController.isAuthenticated, thingsController.list);
	router.get('/api/things/:id', authController.isAuthenticated, thingsController.read);
	router.post('/api/things', authController.isAuthenticated, thingsController.create);
	router.put('/api/things/:id', authController.isAuthenticated, thingsController.update);
	router.delete('/api/things/:id', authController.isAuthenticated, thingsController.delete);

};