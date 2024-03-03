# codeceptjs_demo
Automation project using codeceptjs with Playwright helper for web testing and REST helper for API testing

Website used for web tests: https://www.saucedemo.com/

Swagger used for api testing : https://petstore.swagger.io


# Steps
- Clone the repo

- Install dependencies : npm install
- Install playwright : npm install playwright

# Run tests
- run all tests : npx codeceptjs run
- run api tests : npx codeceptjs run --grep api
- run web tests : npx codeceptjs run --grep web 
- run tests in verbose mode : npx codeceptjs run --verbose
- run tests in headed mode : set 'show: true' in PLaywright helper in codecept.conf.ts file


# Documentation
https://codecept.io/


