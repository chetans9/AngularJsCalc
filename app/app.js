var app = angular.module('myApp', []);


app.controller('calculatorController',function($scope){
	
	$scope.enterDigits = function(number){
		
		var isOperationSet =$scope.isOperationSet;
		if(isOperationSet)
		{
			$scope.SecondNumber = number;
		}
		else
		{
			$scope.FirstNumber = number;
		}

		$scope.LedDisplay = String(number);
	}
	$scope.operate = function(operation){
		//When User Presse Operate
		$scope.isOperationSet = true;

		
		if(operation == 'plus' && $scope.SecondNumber){
			
			$scope.LedDisplay = $scope.add($scope.FirstNumber,$scope.SecondNumber);
			$scope.resultOperation = 'plus';

			$scope.FirstNumber = $scope.LedDisplay;
		}
		if(operation == 'subtract' && $scope.SecondNumber){
			$scope.LedDisplay = $scope.subtract($scope.FirstNumber,$scope.SecondNumber);
			$scope.FirstNumber = $scope.LedDisplay;
			$scope.resultOperation = 'subtract';
		}

		if(operation == 'mutiply' && $scope.SecondNumber){
			$scope.LedDisplay = $scope.FirstNumber *  $scope.SecondNumber;
			$scope.FirstNumber = $scope.LedDisplay;
			$scope.resultOperation = 'multiply';
		}

		if(operation == 'divide' && $scope.SecondNumber){
			$scope.LedDisplay = $scope.FirstNumber /  $scope.SecondNumber;
			$scope.FirstNumber = $scope.LedDisplay;
			$scope.resultOperation = '';
		}

		if(operation == 'mod' && $scope.SecondNumber){
			$scope.LedDisplay = $scope.FirstNumber %  $scope.SecondNumber;
			$scope.FirstNumber = $scope.LedDisplay;
		}
	}


	$scope.getResult = function(){
		if($scope.SecondNumber){
			
			$scope.LedDisplay = $scope.add($scope.FirstNumber,$scope.SecondNumber);

			$scope.FirstNumber = $scope.LedDisplay;
		}

	}

	$scope.add = function(number1,number2){

		return  number1 +  number2;

	}

	$scope.subtract = function(number1,number2){

		return  number1 -  number2;

	}
});