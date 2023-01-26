import { question } from 'readline-sync'

// Allternativ 1
// let fizz = question('Enter your fizznumber ');
// let buzz = question('Enter your buzznumber ');
// let end = question('Where do you want to stop? ');
// let fizzbuzz = fizz * buzz;
// let answerFizzbuzz = 'fizzbuzz';
// let answerFizz = 'fizz';
// let answerBuzz = 'buzz';

// console.log('Let´s play');
// for (let number = 1; number <= end; number++) {

// 	let answer = question('Enter your guess ');
// 	let ifFizzbuzz = number % fizzbuzz == 0;
// 	let ifFizz = number % fizz == 0;
// 	let ifBuzz = number % buzz == 0;

// 	if(ifFizz && answerFizz == answer){
// 		console.log(number + ' Fizz');
// 	}

// 	else if(ifBuzz && answerBuzz == answer){
// 		console.log(number + ' Buzz');
// 	}

// 	else if(ifFizzbuzz && answerFizzbuzz == answer){
// 		console.log(number + ' Fizzbuzz');
// 	}

// 	else if(answer == number){
// 		console.log(answer);
// 	}

// 	else{
// 		console.log(answer + ' is incorrect' );
// 		break;
// 	}
// }


// Allternativ 2
for(let count = 1; count <= 20; count++){
	if(count % (3 * 5) == 0){
		console.log('FizzBuzz');
	}
	else if(count % 3 == 0){
		console.log('Fizz');
	}
	else if(count % 5 == 0){
		console.log('Buzz');
	}
	else{
		console.log(count);
	}
}

