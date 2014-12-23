

app.controller('SimpleController', function($scope) {
	$scope.customers = [
		{ name:'Mikkel Møller Brusen',	city:'Lyngby'}, 
		{ name:'Josefine Møller Brusen',city:'Hesnæs'}, 
		{ name:'Anders Møller Jensen',	city:'Dragør'}, 
		{ name:'Charlotte Brusen',		city:'Nykøbing'}
	];

	$scope.addCustomer = function() {
		$scope.customers.push({ 
			name: $scope.newCustomer.name, 
			city: $scope.newCustomer.city 
		});
	};
});

