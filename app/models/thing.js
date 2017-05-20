'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ThingSchema = new Schema({
	name: { type: String, unique: true, required: true },
	dateCreated: { type: Date, default: Date.now },
});

mongoose.model('Thing', ThingSchema);