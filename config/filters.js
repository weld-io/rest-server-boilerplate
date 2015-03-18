'use strict';

var ejs = require('ejs');

var API_PASSWORD = process.env.MYAPPNAME_PASSWORD;

ejs.filters.encodify = function (str) {
	var buf = new Buffer(str);
	return buf.toString('base64');
};