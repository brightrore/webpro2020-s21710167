// destructuring

// 1. Array
const colors =['merah', 'kuning', 'hijau'];
// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[2];
// console.log(satu, dua, tiga);

// let[satu, dua, tiga]=colors;
// console.log(satu, dua, tiga, empat="biru");
// let[satu,dua]=colors;
// console.log(satu,dua);

const user={
    name: "John",
    gender: "male",
    age: 33.
};
// let {name, gender, age}=user;
// console.log(name,gender,age);

let {name, gender, age, born="Manado"}=user;
console.log(name,gender,age, born);
 