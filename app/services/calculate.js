app.service('myCalc', function() {

    this.calculate = function ($scope){
        if($scope.pendingOperation == 'add'){
        	return $scope.currentTotal+$scope.pendingValue;
        }
        if($scope.pendingOperation == 'subtract'){
        	return $scope.currentTotal - $scope.pendingValue;
        }
        if($scope.pendingOperation == 'multiply'){
        	return $scope.currentTotal * $scope.pendingValue;
        }
        if($scope.pendingOperation == 'divide'){

            if($scope.pendingValue == 0){
                return "Cannot divide By zero";
            }
        	return $scope.currentTotal / $scope.pendingValue;
        }
        if($scope.pendingOperation == 'mod'){
        	return $scope.currentTotal % $scope.pendingValue;
        }
        else{
        	//If We are Still Here that means user has entered his pending value and pressed operation once
            
        	return $scope.pendingValue;

        }
    }

    
});