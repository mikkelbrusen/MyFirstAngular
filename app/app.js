var app = angular.module('demoApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/view1',
		{
			controller: 'SimpleController',
			templateUrl: '/app/partials/view1.html'
		})
		.when('/view2',
		{
			controller: 'SimpleController', 
			templateUrl: '/app/partials/view2.html'
		})
		.otherwise({ redirectTo: '/view1'});
});