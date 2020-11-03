// no.1
// const calculateAge = birthYear => 2019 - birthYear;
 
// const yearUntilRetirement = object =>{
// 	let age = calculateAge(object.year);
// 	let retirement = 60 - age;
   
// 	if(retirement > 0){
//     	console.log(`${object.firstName}  retires in  ${retirement} years`);
// 	} else {
//     	console.log(`${object.firstName}  is already retired.`);
// 	}
// }
 
// yearUntilRetirement({year: 1987, firstName: 'John'});

// no.2
// const addNumber = (...numbers) => {
//     let sum = 0;
//     numbers.map(i => (sum+=i));
//     return sum;
// }

// console.log(addNumber(1,2,3,4,5,6,7));

// No.3
let phi = 3.14;
let power = 2;
let radius = 0;
 
const calculateArea = obj => phi * Math.pow(obj.radius, obj.power);
 
radius = 21;
let area21 = calculateArea({radius: radius, power: power });
 
radius = 7;
let area7 = calculateArea({radius: radius, power: power });
 
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// no.4
const makeAjaxRequest = (url, method = "GET") => {
    console.log(url, method);
};
makeAjaxRequest("www.google.com");

bagian2
no1
const warnaKesukaan = (warna = "biru") =>
    console.log(`Warna Kesukaan Saya adalah ${warna}`);
warnaKesukaan();

// no2
let namaBuah1 = ["apel", "mangga"];
let namaBuah2 = ["sirsak", "semangka"];
let semuaNamaBuah;

semuaNamaBuah = [...namaBuah1, ...namaBuah2];

console.log(semuaNamaBuah);

    