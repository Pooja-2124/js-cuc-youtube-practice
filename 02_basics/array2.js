arr1=["ironman","batman","spiderman"]
arr2=["flash","thor"]
// console.log(arr1);
// console.log(arr2);
// arr1.push(arr2);//add the whole array as an element
// console.log(arr1);
// console.log(arr1[3][1]);
// arr1.concat(arr2);//changes not relect in original array
// console.log(arr1);
const newarr1=arr1.concat(arr2);//after storing changes will be reflect
console.log(newarr1);
const newarr2=[...arr1,...arr2]
console.log(newarr2);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
