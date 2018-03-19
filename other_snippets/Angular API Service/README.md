# API Service

## Service Description
- This service was built to abstract AngularJS' $http service into a reusable component fit for our application. It features:
	- Pre-defined endpoints and available parameters plus automatic param parsing
	- Automatic suppression of identical GET requests to the same endpoint
	- Optional suppresion of other identical requests to the same endpoint