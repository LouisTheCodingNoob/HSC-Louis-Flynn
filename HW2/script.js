var greeting = 'Hello world';		// String variable
var displayGreeting = true;			// Boolean variable
var today = new Date();				// Date variable
var hourNow = today.getHours();		// Number variable

if (hourNow > 18){
	greeting = 'Good evening,';
} else if (hourNow > 12) {
	greeting - 'Good afternoon,';
} else if (hourNow > 0) {
	greeting = 'Good morning.';
} else {
	greeting = 'Hello,'
}

document.write(greeting);

var displayWeather = true;
var degreesCelsius = 27;
var degreesFarenheit = degreesCelsius * (9/5) + 32;

if (displayWeather) {
	document.write('<br>It is currently ' + degreesFarenheit + ' degrees Farenheit.');
}

var skyConditions =['Sunny', 'Rainy', 'Cloudy'];

document.write('<br>Today it is ' + skyConditions[0]);
document.write('<br>Tomorrow it will be ' + skyConditions[1]);
document.write('<br>Next week it will be ' + skyConditions[2]);