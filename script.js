// validacja RegExp
function isValid(pole,regexp){
	if(regexp.test(pole.value)){
		style(pole, true);
		return true;
	}else{
		style(pole, false);
		return false;
	}	
}

function isNotEmpty(pole){
	if(pole.value == ""){
		style(pole, false);
		return false;
	}else{
		style(pole, true);
		return true;
	}
}

/*
function isNumber(pole){
	if(isNotEmpty(pole)){
		if(isNaN(pole.value)){
			style(pole, false);
			document.getElementById("i" + pole.id).innerHTML = "Ta wartość musi być liczbowa";
			pole.className = "blad";
			return false;
		}else{
			style(pole, true);
			return true;
		}		
	} else {
		return false;
	}
}
*/

function isChecked(pole){
	if(pole.checked == false){
		style(pole, false);
		return false;
	}else{
		style(pole, true);
		return true;
	}
}

function isSelected(pole){
	const radio = document.getElementsByName(pole);
	console.log(radio);
	for(var i=0; i<radio.length; i++){
		if(radio[i].checked === true){
			document.getElementById("i" + pole).innerHTML = "";
			return true;
		}
	}
	document.getElementById("i" + pole).innerHTML = "Ta wartość musi być wybrana!";
	return false;
}

function style(pole, status){
	if(status){
		document.getElementById("i"+pole.id).innerHTML = "";
		pole.className = "ok";
	}else{
		document.getElementById("i"+pole.id).innerHTML = "Uzupełnij to pole!";
		pole.className = "blad";
	}
}

function onSubmit(form) {
	console.log(form)
	if(
		isValid(form.pers, persReg) &&
		isValid(form.code, codeReg) &&
		isValid(form.email, emailReg) &&		
		isNotEmpty(form.usluga) &&
		isSelected("ocena") &&
		isNotEmpty(form.komentarz) &&
		isChecked(form.zgoda)
	){
		console.log('Validation okey');
		document.getElementById('result').innerText = 'FORM Validation okey';
		return false;
	}else{
		return false;
	}
}

window.onload = Init;

var persReg = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
var codeReg = /^[\d]{3}-[\d]{2}$/;
var emailReg = /^\w+(\.\w+)*@\w+(\.\w+)*\.\w{2,4}$/;


function Init(){

	var pers = document.getElementById("pers");
	var code = document.getElementById("code");	

	pers.onkeyup = function(){
		//isNotEmpty(this);
		isValid(this, persReg);
	}

	code.onkeyup = function(){
		isValid(this, codeReg);
	}
	
	var email = document.getElementById("email");

	email.onkeyup = function(){
		isValid(this, emailReg);
	}
	
	var usluga = document.getElementById("usluga");
	usluga.onblur = function(){
		isNotEmpty(this);
	}
	
	var komentarz = document.getElementById("komentarz");
	komentarz.onkeyup = function(){
		isNotEmpty(this);
	}
	
	var zgoda = document.getElementById("zgoda");
	zgoda.click = function(){
		isChecked(this);
	}
	
	document.forms["opinia"].onsubmit = function(){
		return onSubmit(this);
	}
}









