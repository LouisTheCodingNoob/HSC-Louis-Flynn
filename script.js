var message = 'Meet the Jack of All Technical Trades';

function updateHeader() {
	var header = document.getElementById('header');
	header.textContent = message;
}

updateHeader();

var paragraphMessage ='Matthew Hunt, owner of Principled Software Solutions, LLC, founded his software company in 2021 with the goal of becoming a “Jack of all Technical Trades,” delivering comprehensive technical solutions for his clients. ';

updateParagraph();

function updateParagraph() {
	var paragraph = document.getElementById('paragraph');
	paragraph.textContent = paragraphMessage;
}

function calculateFarenheit(degreesCelsius) {
	return degreesCelsius * (9/5) + 32;
}

var degreesCelsius = 27;

var degreesFarenheit = calculateFarenheit(degreesCelsius);

var area = (function() {
	var width = 30;
	var height = 40;
	return width * height;
} ());

console.log('The area of my house is ' + area + ' sq ft');
