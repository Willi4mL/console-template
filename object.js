import { question } from 'readline-sync'

// Uppgift 1
// const info = {
// 	city: 'Karlstad',
// 	population: 96000,
// 	country: 'Sweden'
// }
// console.log(info)

// function move(x){
// 	x.population = x.population - 1
// }
// move(info)
// console.log(info)


// Uppgift 2
// let object1 = {
// 	x: 10,
// 	y: 25
// }

// const copy = x => {
// 	let object2 = object1
// 	console.log(object2)
// 	return;
// }
// copy()


// Uppgift 3
// const info = {
// 	city: 'Karlstad',
// 	population: 96000,
// 	country: 'Sweden'
// }

// function properties(){
// 	for(const prop in info){
// 		console.log(prop + ' ' + info[prop])
// 	}
// }
// properties()


// Uppgift 4a
const school = {
	teachers: 20,
	students: 256,
	address: 'Skolgatan 1',
	city: 'Nyköping'
}
console.log('Uppgift 4a')
console.log(school)

// Uppgift 4b
const teachers = {
	björn: 'Björn lärare i musik',
	benny: 'Benny i No och musik',
	birgitta: 'Birgitta lärare i artificiell intelligens och svenska'
}
console.log('Uppgift 4b')
console.log(teachers)

// Uppgift 4c
const month = {
	jan: 31,
	feb: 28,
	mar: 31,
	apr: 30,
	maj: 31,
	jun: 30,
	jul: 31,
	aug: 30,
	sep: 30,
	okt: 30,
	nov: 30,
	dec: 30
}
console.log('Uppgift 4c')
console.log(month)


// Uppgift 4d 4e
const price = {
	t1: 200,
	t2: 250,
	t3: 320,
}
const name = {
	boss: 'Hasse',
	slaveOne: 'Hedwig',
	slaveTwo: 'Hermione'
}
console.log(price, name)
console.log(`Horatio order one t1 for ${price.t1}kr`)
console.log(`Horatio order two t2 for ${price.t2 * 2}kr`)


// Uppgift 4f
const ylvas = {
	fantasy: ['Sagan om ringen', 'Mistborn: the alloy of law'],
	"science fiction": ['Stiftelsen', 'Mistborn: the alloy of law'],
	none: 'Wheel of time',
	"Author of sagan om ringen": 'J.R.R Tolkien', 
	"Author of Mistborn: the alloy of law": ' Brandon Sanderson', 
	"Author of Stiftelsen": 'Isaac Asimov', 
	"Author of Wheel of time": 'Robert Jordan', 
}

console.log(ylvas, ylvas["science fiction"])
