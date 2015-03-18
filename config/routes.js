/**
 * Application routes for REST
 */

'use strict';

var express = require('express');

module.exports = function (app, config) {

	var router = express.Router();
	app.use('/', router);

	// Controllers
	var startController = require(config.root + '/app/controllers/start');
	var apiController = require(config.root + '/app/controllers/api');
	var thingsController = require(config.root + '/app/controllers/things');

	router.get('/api/things', apiController.list);
	router.get('/api/things/:id', apiController.read);
	router.post('/api/things', apiController.create);
	router.put('/api/things/:id', apiController.update);
	router.delete('/api/things/:id', apiController.delete);

	router.get('/things', thingsController.index);
	router.get('/things/:id', thingsController.show);

	router.get('/', startController.index);

};