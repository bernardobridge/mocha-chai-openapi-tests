# mocha-chai-openapi-tests

## Running Instructions

To install, simply run `npm install`. This will install all dependencies for you.

To run the tests, run `npm test`.

## Setting Variables

Take the .env.sample file and fill it up with your configuration. Then create a .env file with that same config. The environment will automatically populate these variables for you using dotenv.

## Test API

For this, I used the https://jsonplaceholder.typicode.com/ , and focused on the /posts endpoint. Since this API doesn't have authentication, I commented out the call to the method to getAccessToken, for testing purposes, and hardcoded it instead. For your real API, you would remove that, and use the commented out method instead.

## Open API Response validator

I used https://www.chaijs.com/plugins/chai-openapi-response-validator/ to validate the response against an Open API schema automatically.