(function() {
//iffi
	var userInput = 0,
		leftArr = [],
		rightArr = [],
		operator;

	$(document).ready(function() {
		$(".buttons").click(function(e) {
			e.preventDefault();
			console.log(e.target.innerHTML);
			if(e.target.innerHTML == "C") {
				resetCalculator();	
			}else if (e.target.innerHTML === "=") {
				var display = calculate();
				//getElementById ==> $("#screen")
				   $("#screen").html(display);
			} else if (!isOperator(e.target.innerHTML)){
				$("#screen").html(e.target.innerHTML);
				if (operator === undefined) { 
					//if operator is undefined 
					leftArr.push(e.target.innerHTML);
					//else put it to rightArr
				} else {
					rightArr.push(e.target.innerHTML);
				}
			} else {
				operator = e.target.innerHTML;
		  	}
		  		//console.log(operator);
		});
	});

	function isOperator(item) {
		//check item is in operators array
		// return true or false
		var operators = ["+", "-", "x" , "÷"];
		for (var i = 0; i < operators.length; i++) {
			if (item === operators[i]) {
				return true;
			}
		}
		return false;
	}

	function calculate() {
		var leftOperand  = convertToInt(leftArr);
		var rightOperand = convertToInt(rightArr);
		
		if (operator === "+"){
			return leftOperand + rightOperand;
		} else if ( operator === "-"){
			return leftOperand - rightOperand;	
		} else if (operator === "x") {
			return leftOperand * rightOperand;	
		} else if (operator === "÷") {
			return leftOperand / rightOperand;
		} else {
			console.log(operator);
			alert('unknown operator');
		}
	}

	function convertToInt(userInput) {
		// convert array to number
		var result = 0;
		for(var i = 0, len = userInput.length; i < len; i++) {
			result += parseInt(userInput[i]) * Math.pow(10, len-i-1);
			//console.log(userInput);
		}
		return result;
	}

	function resetCalculator() {
		userInput = undefined;
		leftArr = undefined;
		rightArr = undefined;
		operator = undefined;
		$("#screen").html("");
	} 


})();

