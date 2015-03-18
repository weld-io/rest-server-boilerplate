# Express REST Server Boilerplate

Empty boilerplate project for REST-based services.

## Usage

...

## How to Run

Just start with:

	# Set password used in API requests
	export MYAPPNAME_PASSWORD=MYPASSWORD

	grunt

Server will default to **http://localhost:3009**

## API

List things

	curl http://localhost:3009/api/things?password=MYPASSWORD

Create new thing:

	curl -X POST -H "Content-Type: application/json" -d '{ "name": "my_thing", "redirectUrl": "http://www.google.com" }' http://localhost:3009/api/things?password=MYPASSWORD

Update thing:

	curl -X PUT -H "Content-Type: application/json" -d '{ "name": "my_new_thing", "redirectUrl": "https://duckduckgo.com" }' http://localhost:3009/api/things/548cbb2b1ad50708212193d8?password=MYPASSWORD

Delete thing:

	curl -X DELETE http://localhost:3009/api/things/5477a6f88906b9fc766c843e?password=MYPASSWORD

Delete all things:

	curl -X DELETE http://localhost:3009/api/things/ALL?password=MYPASSWORD

## Implementation

Based on the [Yeoman Express generator](https://github.com/petecoop/generator-express) with the "MVC" option.
Built on Node.js, Express (with EJS) and MongoDB.

## Deploying on Heroku

	# Set up and configure app
	heroku create MYAPPNAME
	heroku addons:add mongolab
	heroku config:set NODE_ENV=production

	# Set password used in API requests
	heroku config:set MYAPPNAME_PASSWORD=MYPASSWORD
