'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Thing = mongoose.model('Thing');

var API_PASSWORD = process.env.MYAPPNAME_PASSWORD;

module.exports = {

	list: function (req, res, next) {
		if (req.query.password === API_PASSWORD) {
			var searchQuery = {};
			if (req.query.from) {
				var currentTime = new Date();
				searchQuery = { dateCreated: { "$gte": new Date(req.query.from), "$lt": currentTime } };
			}

			Thing.find(searchQuery, null, { sort: {dateCreated: -1} }, function (err, things) {
				if (err) {
					return res.json(400, err);
				}
				else {
					return res.json(things);
				}
			});
		}
		else {
			return res.json(401, 'Unauthorized');
		}
	},

	read: function (req, res, next) {
		if (req.query.password === API_PASSWORD) {

			Thing.findById(req.params.id, function (err, thing) {
				if (err) {
					return res.json(400, err);
				}
				else {
					return res.json(thing);
				}
			});
		}
		else {
			return res.json(401, 'Unauthorized');
		}
	},

	// Create new thing
	create: function (req, res, next) {
		if (req.query.password === API_PASSWORD) {
			var newThing = new Thing(req.body);
			newThing.save(function (err) {
				if (err) {
					return res.json(400, err);
				}
				else {
					return res.json(newThing);
				}
			});
		}
		else {
			return res.json(401, 'Unauthorized');
		}
	},

	// Update thing
	update: function (req, res, next) {
		Thing.update(
			{ _id: req.params.id },
			req.body,
			function (updateErr, numberAffected, rawResponse) {
				if (updateErr) {
					res.json(500, updateErr);
				}
				else {
					res.json(200, 'Updated thing ' + req.params.id);
				}
			}
		);
	},

	// Delete thing
	delete: function (req, res, next) {
		if (req.query.password === API_PASSWORD) {
			var searchParams;
			if (req.params.id === 'ALL') {
				searchParams = {};
			}
			else {
				searchParams = { _id: req.params.id }
			}

			Thing.remove(
				searchParams,
				function(thingErr, numberAffected, rawResponse) {
					if (thingErr) {
						res.json(500, thingErr);
					}
					else {
						res.json(200, 'Deleted ' + numberAffected + ' things');
					}
				}
			);
		}
		else {
			return res.json(401, 'Unauthorized');
		}
	}

}