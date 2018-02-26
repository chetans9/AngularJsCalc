app.controller('calculatorController', function($scope,myCalc) {
    //output display.Initial zero.
    $scope.ledDisplay = 0;

    //Initailly Next number should be true so that we can concatenate the number
    $scope.nextNumber = true;

    //Is operation pending e.g when 4 + "+" is pending. Initially null. 
    $scope.pendingOperation = null;

    // Holds the running total as numbers are added/subtracted
    $scope.currentTotal = 0;

    $scope.pointerExists = 0;

    $scope.operationIcon = null;

    //whenever user presses button.
    $scope.enterInput = function(value) {

    	if(value == "." && $scope.pointerExists){
    		return false;
    	}
    	if(value == "."){
    		$scope.pointerExists = 1;
    	}


        //if initial or want to enter nextNumber 
        if ($scope.ledDisplay == 0 || $scope.nextNumber) {
            $scope.ledDisplay = value;
            $scope.nextNumber = false;
            $scope.operationIcon = null;

        } else {
        	//Build input Stream on LED.
            $scope.ledDisplay += String(value);
        }

        //Set Pending value for Calculations
        $scope.pendingValue = parseFloat($scope.ledDisplay);
    };


    /**
    * Whenever User clicks on operations like "+","-" etc.
    */
    $scope.operate = function(method) {
        if ($scope.pendingValue) {

        	$scope.currentTotal = myCalc.calculate($scope);
        	//Once caculated. Do not calcualte again.
    		$scope.pendingValue = null;
    		//Set pending operation to passed method
    		$scope.pendingOperation = method;
            
    		$scope.pointerExists = 0;
            this.setOperationIcon(method);
        }
        else{
        	//No previously entered Number
        }
        //Show current total to led display
        $scope.ledDisplay = $scope.currentTotal;
        
        
        //Let user enter next number/pending value.
        $scope.nextNumber = true;
    };



    $scope.getResult = function(){
    	
    	$scope.currentTotal = myCalc.calculate($scope);
    	$scope.ledDisplay = $scope.currentTotal;
    	$scope.pendingValue = $scope.currentTotal;
    	$scope.nextNumber = true;
        this.resetPendingOperation();
    };

    $scope.allClear = function() {

        $scope.currentTotal = null;
        $scope.pendingValue = null;
        $scope.ledDisplay = 0;
        this.resetPendingOperation();
    };

    $scope.clearOne = function(){
        $scope.ledDisplay = $scope.ledDisplay.slice(0, -1);
  	     if($scope.ledDisplay.length == 0){

  		    $scope.ledDisplay = 0;
  		    $scope.pointerExists = 0;
  	 }
  	 $scope.pendingValue = parseFloat($scope.ledDisplay);
  }


  $scope.resetPendingOperation = function(){
    //set pending oerartion to null
    $scope.pendingOperation = null;
    //Reset pointer flag. Allow user to add pointer.
    $scope.pointerExists = 0;
    $scope.operationIcon = null;

  }

  /**
  * Show operations Icon on LEd
  */

  $scope.setOperationIcon = function(method){
    if(method == "add"){
        $scope.operationIcon = "+";
    }
    if(method == "subtract"){
        $scope.operationIcon = "-";
    }
    if(method == "multiply"){
        $scope.operationIcon = "*";
    }
    if(method == "divide"){
        $scope.operationIcon = "/";
    }
    if(method == "mod"){
        $scope.operationIcon = "%";
    }

  }





});