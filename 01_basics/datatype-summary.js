//stack and heap memory
//stack for primitive datatype and heap for non primitive
//stack use copy so original data will not be changed
//heap use reference of original so changes make in original 

//stack
let userId=129690;
let newuserId=userId;
console.log(userId);
console.log(newuserId);
newuserId=396547;
console.log(userId);
console.log(newuserId);

//heap
let fruits=["apple","orange","banana"];
let newFruits=fruits;
console.log(fruits[0]);
console.log(fruits[1]);
console.log(newFruits[0]);
console.log(newFruits[1]);
newFruits[0]="pinapple";
console.log(fruits[0]);
console.log(fruits[1]);
console.log(newFruits[0]);
console.log(newFruits[1]);