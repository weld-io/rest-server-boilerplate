'use strict';

var ejs = require('ejs');

ejs.filters.encodify = function (str) {
	var buf = new Buffer(str);
	return buf.toString('base64');
};