import { question } from 'readline-sync'


// Uppgift 1.5

// function f(x){
// 	return x * 2 + 1;
// }
// function g(x, y){
// 	console.log(x + ', ' + y);
// }

// // Anonym
// let anonym = function(x){
// 	return x * 2 + 1;
// }
// let fooAnonym = function(x, y){
// 	console.log(x + ', ' + y);
// }

// // Arrow
// let arrow = x => {
// 	return x * 2 + 1;
// }
// let fooArrow = (g) => {
// 	console.log(x + ', ' + y);
// }


// Uppgift 2a
// function input(name, city, favoriteColor){
// 	console.log('Welcome ' + name + ' to ' + city + 'with favorite color ' + favoriteColor)
// 	return;
// }
// input('Johan ' + 'Karlstad ' + 'red ')


// Uppgift 2b
// let name = question('Whats your name? ');
// let city = question('Where you from? ');
// let color = question('Whats your favorite color? ');

// function information(name, city, color){
// 	console.log('Hey ' + name + ' from ' + city + ' with ' + color + ' as your favorite color');
// 	return;
// }

// information(name, city, color)


// Uppgift 3a
// function add(x, y){
// 	return x + y
// }
// let number = add(res)
// console.log(res)


// Uppgift 3b
// function multi(x, y, z){
// 	return x * y * z
// }
// let test = multi(2, 4, 6)
// console.log(test)


// Uppgift 3c
// function add(x){
// 	return x
// }

// function multi(x, y, z){
// 	return x * y * z
// }

// const sum = multi(3, 5, 2) + add(10);
// console.log(sum)


// Uppgift 4
// function stringToNumber(s) {
// 	if (!isNaN(s)) {
// 	  return parseFloat(s);
// 	} else {
// 	  return s;
// 	}
//   }

//   let convert = stringToNumber('123')
//   console.log(convert)
//   console.log(typeof convert)


// Uppgift 5
// function compare(x, y) {
// 	if (typeof x == typeof y) {
// 		console.log('True')
// 	}
// 	else {
// 		console.log('False')
// 	}
// 	return;
// }

// compare(78, 'kl')


// Uppgift 6
// function rounded(x){
// 	return Math.round(x * 100) / 100;
// }
// 	console.log(rounded(0.12345));


// Uppgift 7a
// function paragraph(parameter){
// 	console.log(`<p>${parameter}</p>`)
// 	return;
// }

// paragraph('hej')


// Uppgift 7b
// function tag(parameter){
// 	console.log(`<${parameter}> content </${parameter}>`)
// }
// tag('Banana')


// Uppgift 8
// let mont = question('Enter month: ')
// function daysInMonth(month){
// 	const day = {
// 		jan: 31,
// 		feb: 28,
// 		mar: 31,
// 		apr: 30,
// 		maj: 31,
// 		jun: 30,
// 		jul: 31,
// 		aug: 31,
// 		sep: 31,
// 		okt: 31,
// 		nov: 30,
// 		dec: 31
// 	};
// 	console.log(day[month]);
// 	return;
// 	}
// daysInMonth(mont)


//Uppgift 9a
// function substring(startIndex, endIndex){
// 	console.log(startIndex.substring(0,3));
// 	console.log(endIndex.substring(3, 6));
// 	return;
// }
// substring('pundar', 'lackar')


// Uppgift 9b
// let date = question('Enter yyyy-mm-dd: ')
// function year(x){
// 	if(date.length == 10){
// 		console.log(x.substring(0,4));
// 	}
// 	else{
// 	console.log('Must be 10 charecter')
// 	}
// 	return;
// }

// year(date)


// Uppgift 9c
// let yearOne = question('Enter your first year yyyy-mm-dd: ')
// let yearTwo = question('Enter your second year yyyy-mm-dd: ')

// function month(x) {
// 	if (yearOne.length == 10) {
// 		console.log(x.substring(5, 7))
// 	}
// 	else {
// 		console.log('Must be 10 charecter')
// 	}
// 	return;
// }

// function date(y) {
// 	if (yearTwo.length == 10) {
// 		console.log(y.substring(8, 10))
// 	}
// 	else {
// 		console.log('Must be 10 charecter')
// 	}
// 	return;
// }

// function daysBetween(){
// 	let dayOne = yearOne.substring(8, 10)
// 	let dayTwo = yearTwo.substring(8, 10)
// 	let between = dayOne - dayTwo;
// 	console.log(between + ' days between');
// 	return;
// }

// month(yearOne);
// date(yearTwo);
// daysBetween()


// Uppgift 10
// let input = question('Enter fahrenheit: ')
// function faren(){
// 	let convert = ((input - 32) * 5) / 9;
// 	console.log(convert + ' celcius');
// 	return;
// }

// faren();


// Uppgift 11
// let stop = Number(question('Where do you want to stop between 1 and 200? '))
// function add(number){
// 	let count= 1;
// 	while(count <= 100){
// 		if(count <= number){
// 			console.log(count)
// 			count = count + count
// 		}
// 		else{
// 			console.log('Next number are greater then ' + number)
// 			break;
// 		}
// 	}
// 	return;
// }
// add(stop)


// Uppgift 12
// let backwardInput = question('Enter your word: ')
// function reverse(string) {
// 	let reversed = '';
// 	for (let letter = string.length; letter >= 0; letter--) {
// 		reversed += string.charAt(letter);
// 	}
// 	return reversed.substring(0, string.length);
// }

// console.log(reverse(backwardInput));


// Uppgift 13
// function randomInt(min, max){
// 	let ran = Math.random()
// 	ran = ran * (max - min) + min
// 	return Math.floor(ran)
// }
// console.log(randomInt(8, 10))


// Uppgift 14
// let input = Number(question('Enter number: '))
// function primtal(number){
// 	let prime = true
// 	let notPrime = false

// 	if( number % 2 == 0 && number > 1 && number != 2){
// 		console.log(notPrime)
// 	}
// 	else{
// 		console.log(prime)
// 	}
// 	return;
// }
// primtal(input)
