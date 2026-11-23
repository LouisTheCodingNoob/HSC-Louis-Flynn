var firstNameInput;
var lastNameInput;
var emailInput;
var messageInput;
var sendButton;
var errorElement;

firstNameInput = document.getElementById('first');
lastNameInput = document.getElementById('last');
emailInput = document.getElementById('email');
messageInput = document.getElementById('message');
sendButton = document.getElementById('send');
errorElement = document.getElementById('error');

// DOM Event Handlers

function validateFirstName() {
	if (firstNameInput.value == ''){
		errorElement.innerHTML += '<br>First name must have at least one character';
	}
}

function validateEmail(e) {
	if (!emailInput.value.includes('@')){
		errorElement.innerHTML += '<br>Email field must contain a valid email';
		e.preventDefault();	
	}
}

firstNameInput.onblur = validateFirstName;
sendButton.onclick = validateEmail;

//Event Listener

function validateLastName(){	
		if (lastNameInput.value == ''){
			errorElement.innerHTML += '<br>Last name must have at least one character';
	}
}

lastNameInput.addEventListener('blur', validateLastName, false);

// Event Listener with a Parameter

function validateMessage(minLength){
	if (messageInput.value.length < minLength){
		errorElement.innerHTML += '<br>Message must have more than ' + minLength + ' characters'
	}
}

messageInput.addEventListener('blur', function() {
	var minLength = 5;
	validateMessage(minLength);
	
}, false);
