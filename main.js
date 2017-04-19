var charValue = document.getElementById('character');
var heightValue = document.getElementById('height');
var buttonEnter = document.getElementById('enter');
var buttonClear = document.getElementById('clear');
var object = {};
function clearIt(){
	heightValue.value = "";
	charValue.value = "";
}
function growIt() {
	var x = charValue.value;
	var y = heightValue.value;
	object = {charVal: x,  heightVal: y};
	if ((isNaN(y)) || (x == '')) {
		alert('Please enter the both values');
	}else if (x || y === " ") {
		alert('Please enter the both values');
	}
	for (var i = 0; i < y; i+=1) {
		console.log((" ").repeat(y - i) + object.charVal.repeat(i) + object.charVal.repeat(i));
    }
}
buttonEnter.addEventListener('keypress', growIt);
buttonClear.addEventListener('click', clearIt);
buttonEnter.addEventListener('click', growIt);