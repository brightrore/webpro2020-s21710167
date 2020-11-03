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
const addNumber = (...numbers) => {
    let sum = 0;
    numbers.map(i => (sum+=i));
    return sum;
}

console.log(addNumber(1,2,3,4,5,6,7));

// No.3
// var phi = 3.14;
// var power = 2;
// var radius = 0;
 
// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };
 
// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });
 
// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });
 
// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// no.4
// onst makeAjaxRequest = (url, method) => {
//     if(!method){
//            method = ‘GET’
//     }
//     console.log(url, method);
//     }
     
//     makeAjaxRequest(‘www.google.com’);
    