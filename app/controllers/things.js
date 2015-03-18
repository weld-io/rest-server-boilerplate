'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Thing = mongoose.model('Thing');

var API_PASSWORD = process.env.MYAPPNAME_PASSWORD;

module.exports = {

	index: function (req, res, next) {
		if (req.query.password === API_PASSWORD) {
			Thing.find(function (err, things) {
				if (err) return next(err);
				res.render('things/index', {
					title: 'Things',
					things: things
				});
			});
		}
		else {
			return res.send(401, 'Unauthorized');
		}
	},

	show: function (req, res, next) {
		if (req.params.id) {
			Thing.findById(
				req.params.id,
				function (findErr, thing) {
					if (!findErr && thing) {
						// Found!
						var optionValues = _.values(thing.votes);
						var optionCount = _.countBy(optionValues, function (option) {
							return option;
						});
						var optionCountArray = _.pairs(optionCount);
						optionCountArray = _.sortBy(optionCountArray, function (option) { return -option[1]; });

						res.render('things/show', {
							title: thing.name,
							thing: thing,
							optionCount: optionCountArray
						});
					}
					else {
						// Error
						res.send(404, 'Could not find thing ' + req.params.id + '');
					}
				}
			);
		}
		else {
			return res.send(401, 'Unauthorized');
		}
	}

}