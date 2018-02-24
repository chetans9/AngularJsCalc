app.controller('calculatorController', function($scope,myCalc) {
    //output display.Initial zero.
    $scope.ledDisplay = 0;

    //Initailly Next number should be true so that we can concatenate the number
    $scope.nextNumber = true;

    //Is operation pending e.g when 4 + "+" is pending. Initially null. 
    $scope.pendingOperation = null;

    // Holds the running total as numbers are added/subtracted
    $scope.currentTotal = null;

    //whenever user presses button.
    $scope.enterInput = function(value) {
        //if initial and nextNumber
        if ($scope.ledDisplay == "0" || $scope.nextNumber) {
        	//Update Led output
            $scope.ledDisplay = value;
            $scope.nextNumber = false;
        } else {
            $scope.ledDisplay += String(value);
        }
        //Whenver the number is entered without operation. It is a pending number.
        $scope.pendingValue = parseFloat($scope.ledDisplay);
    };


    $scope.operate = function(method) {

        if ($scope.pendingValue) {
        	$scope.currentTotal = myCalc.calculate($scope);
        }

        //Show current total to led display
        $scope.ledDisplay = $scope.currentTotal;
        //Set pending operation to passed method
        $scope.pendingOperation = method;
        //Let user enter next number/pending value.
        $scope.nextNumber = true;


    };


    $scope.getResult = function(){
    	
    	$scope.currentTotal = myCalc.calculate($scope);
    	$scope.ledDisplay = $scope.currentTotal;
    	//set pending oerartion to null
    	$scope.pendingOperation = null;
    	$scope.pendingValue = $scope.currentTotal;
    };

    $scope.allClear = function() {
    $scope.currentTotal = null;
    $scope.pendingValue = null;
    $scope.pendingOperation = null;
    $scope.ledDisplay = '0';
    
  };

  $scope.clearOne = function(){

  	$scope.ledDisplay = $scope.ledDisplay.slice(0, -1);
  	$scope.pendingValue = parseInt($scope.ledDisplay);


  }
});