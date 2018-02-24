app.service('myCalc', function() {

    this.calculate = function ($scope){
        if($scope.currentTotal && $scope.pendingOperation == 'add'){
        	return $scope.currentTotal+$scope.pendingValue;
        }
        if($scope.currentTotal && $scope.pendingOperation == 'subtract'){
        	return $scope.currentTotal - $scope.pendingValue;
        }
        if($scope.currentTotal && $scope.pendingOperation == 'multiply'){
        	return $scope.currentTotal * $scope.pendingValue;
        }
        if($scope.currentTotal && $scope.pendingOperation == 'divide'){
        	return $scope.currentTotal / $scope.pendingValue;
        }
        if($scope.currentTotal && $scope.pendingOperation == 'mod'){
        	return $scope.currentTotal % $scope.pendingValue;
        }
        else{
        	//If We are Still Here that means user has entered his pending value
        	return $scope.pendingValue;
        }
    }

    
});