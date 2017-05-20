# REST API Boilerplate

Empty boilerplate project for REST-based API services, built in Node.js.

Made by the team at **Weld** ([www.weld.io](https://www.weld.io?utm_source=github-rest-server-boilerplate)), the #codefree app and web creation tool:

[![Weld](https://s3-eu-west-1.amazonaws.com/weld-social-and-blog/gif/weld_explained.gif)](https://www.weld.io?utm_source=github-rest-server-boilerplate)


## How to Run

Just start with:

	npm start

or

	npm run-script dev

Server will default to **http://localhost:3009**

### Simple authentication

	# Set password used in API requests
	export MYAPPNAME_PASSWORD=MYPASSWORD


## How to Test

	npm test


## Entities

* Things


## API

Read (list) all things:

	curl http://localhost:3009/api/things?password=MYPASSWORD

Read one thing:

	curl http://localhost:3009/api/things/591fb7a2c491b353765e60a3

Create new thing:

	curl -X POST -H "Content-Type: application/json" -d '{ "name": "My Thing" }' http://localhost:3009/api/things?password=MYPASSWORD

Update thing:

	curl -X PUT -H "Content-Type: application/json" -d '{ "name": "My Updated Thing" }' http://localhost:3009/api/things/548cbb2b1ad50708212193d8?password=MYPASSWORD

Delete thing:

	curl -X DELETE http://localhost:3009/api/things/5477a6f88906b9fc766c843e?password=MYPASSWORD

Delete all things:

	curl -X DELETE http://localhost:3009/api/things/ALL?password=MYPASSWORD


## Implementation

Built on Node.js, Express, MongoDB.


## Deploying on Heroku

	# Set up and configure app
	heroku create MYAPPNAME
	heroku addons:add mongolab
	heroku config:set NODE_ENV=production

	# Set password used in API requests
	heroku config:set MYAPPNAME_PASSWORD=MYPASSWORD
