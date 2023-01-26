import { question } from 'readline-sync'

// Uppgift 1a
// const item = [0,1,2,3,4,5,6,7,8,9]
// console.log(item[5])

// Uppgift 1b
// let item = [0,1,2,3,4,5,6,7,8,9]

// function change(){
// 	let add = item[5]-item[3]
// 	item[3] = item[3] + add 
// 	item[5] = item[3] - add

// 	console.log(item)
// }
// change()

// Uppgift 2
// let list = [2]
// for( let i=1; i<=5; i++ ) {
//     let index = list[list.length - 1]
//     let x = list[index]
//     list.push(x + i)
// }
// console.log(list)

// Uppgift 3
// let list = []
// for( let i=1; i<=10; i++ ) {
//     list.push(i)
//     if( i > 3 && i < 6 ) {
//         list.push(10 * i)
//     }
// }
// console.log(list)

// Uppgift 4
// let list1 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
// let list2 = [], list3 = []
// for( let i=0; i<list1.length; i++ ) {
//     if( list1[i] < 100 ) {
//         list2.push( i )
//         list3.push( list1[i] )
//     }
// }
// console.log(list2)
// console.log(list3)

// Uppgift 5
// let list1 = [10, 11, 12, 13, 14, 15,16]
// let list2 = []
// for( let i=0; i<list1.length; i++ ) {
//     list2.push( list1[i] + 10 )
// }
// console.log(list2)


// Uppgift 6a 6b 6c
// let max = 30
// let min = 20
// const antal = 10
// let list = [];
// for(let i = 0; i < antal; i++){
// 	let rand = Math.floor(Math.random() * (max - min + 1) + min);
// 	list.push(rand)
// }
// console.log(list)

// function higher (){
// 	console.log('Max ' + Math.max(...list));
// 	}

// function lower(){
// 	console.log('Min ' + Math.min(...list))
// }

// function mid(){
// 	let med = [list[0] + list[1] + list[2] + list[3] + list[4] + list[5] + list[6] + list[7] + list[8] + list[9]]
// 	let svar = med / antal
// 	console.log('midd ' + svar)
// 	return;
// }

// function second(){
// 	list.sort(function(a, b){
// 		return b - a
// 	}
// 	)
// 	console.log('second ' + list[1] )
// }
// 	higher()
// 	lower()
// 	mid()
// 	second()


// Uppgift 7
// let num = []
// let sum = 0

// function res(){
// 	for(let i = 1; i <= 100; i++ ){
// 		num.push(i)
// 		sum += i
// 	}
// 	console.log(num)
// 	console.log(sum)
// }
// res()


// Uppgift 8a
// let nautic = ['körde', 'jag', 'båt', 'min', 'natt', 'kulen', 'en']
// let amphibic = ['se', 'att', 'lustiga', 'är', 'grodorna', 'små']

// nautic.reverse()
// amphibic.reverse()
// console.log(nautic)
// console.log(amphibic)

// Uppgift 8b
// console.log(nautic[6], nautic[5], nautic[4], nautic[3], nautic[2], nautic[1], nautic[0])
// console.log(amphibic[5], amphibic[4], amphibic[3], amphibic[2], amphibic[1], amphibic[0])


// Uppgift 9
const worldData = [
	{ "name": "United Kingdom", "continent": "Europe", "population": 65270121, "pFemale": 0.508 },
	{ "name": "Republic of Ireland", "continent": "Europe", "population": 4708209, "pFemale": 0.499 },
	{ "name": "Australia", "continent": "Oceania", "population": 24482205, "pFemale": 0.502 },
	{ "name": "Taiwan", "continent": "Asia", "population": 23522296, "pFemale": 0.501 },
	{ "name": "Uruguay", "continent": "South America", "population": 3446772, "pFemale": 0.517 },
	{ "name": "Morocco", "continent": "Africa", "population": 35010005, "pFemale": 0.510 },
	{ "name": "Nigeria", "continent": "Africa", "population": 188688090, "pFemale": 0.494 },
	{ "name": "Zimbabwe", "continent": "Africa", "population": 16051510, "pFemale": 0.507 },
	{ "name": "China", "continent": "Asia", "population": 1381321335, "pFemale": 0.488 },
	{ "name": "Mexico", "continent": "North America", "population": 129386794, "pFemale": 0.507 },
	{ "name": "Canada", "continent": "North America", "population": 36446796, "pFemale": 0.504 },
	{ "name": "Czech Republic", "continent": "Europe", "population": 10556351, "pFemale": 0.509 },
	{ "name": "Iceland", "continent": "Europe", "population": 332631, "pFemale": 0.496 }
];

//9a
//    let allNames = worldData.filter(worldData => worldData.name)
//    allNames.forEach(worldData => {console.log(worldData.name)})

//9a
// worldData.map(worldData => worldData.name)
// console.log(worldData)

//9b
// const african = worldData.filter(worldData => worldData.continent == 'Africa')
// console.log(african[0])

// 9c
//    const femaleInAustralia = worldData.filter(worldData => worldData.name == 'Australia')
//    femaleInAustralia.forEach(worldData => {console.log('Females in Australia ' + Math.round(worldData.pFemale * worldData.population))})

// 9d
// let newlist = [];
// worldData.map((country) => {
// 	let newObj = {
// 		name: country.name,
// 		females: Math.round(country.population * country.pFemale),
// 		males: Math.round(country.population - country.pFemale * country.population)
// 	}
// 	newlist.push(newObj);
// });
// console.log(newlist);

// 9e
// const europeanCountries = worldData.filter(country => country['continent'] == 'Europe')
// console.log(europeanCountries);

// let sum = 0
// europeanCountries.map(country => {
//     sum = sum + country.population
// })

// console.log(sum);

// 9f
// const hundra = worldData.find(worl => worl.population > 100000000)
// console.log(hundra)

// 9g
// const femaleUnder = worldData.filter(pop => pop.pFemale < 0.49 )
// console.log(femaleUnder)
// femaleUnder.forEach(worldData => {console.log(worldData.name)})

// 9h
const popIsland = worldData.filter(popIs => popIs.name == 'Iceland')
console.log(popIsland)
popIsland.forEach(worldData => {console.log(worldData.population)})