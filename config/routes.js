/**
 * Application routes for REST
 */

'use strict';

var express = require('express');

module.exports = function (app, config) {

	var router = express.Router();
	app.use('/', router);

	// Controllers
	var authController = require(config.root + '/app/controllers/auth');
	var startController = require(config.root + '/app/controllers/start');
	var apiController = require(config.root + '/app/controllers/api');
	var thingsController = require(config.root + '/app/controllers/things');

	// Routes
	router.get('/api/things', authController.isAuthenticated, apiController.list);
	router.get('/api/things/:id', authController.isAuthenticated, apiController.read);
	router.post('/api/things', authController.isAuthenticated, apiController.create);
	router.put('/api/things/:id', authController.isAuthenticated, apiController.update);
	router.delete('/api/things/:id', authController.isAuthenticated, apiController.delete);

	router.get('/things', thingsController.index);
	router.get('/things/:id', thingsController.show);

	router.get('/', startController.index);

};