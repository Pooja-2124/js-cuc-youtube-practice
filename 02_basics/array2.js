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
console.log(newarr1);//add the seperate elements of both the array
const newarr2=[...arr1,...arr2]//it is also used to add to arrays,known as spread
console.log(newarr2);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)//if there is an array inside array like hierarchy 
//and we want the only one array of that time we use flat
console.log(real_another_array);


/*
1. JavaScript does not have an explicit array data type.
 However, you can use the predefined Array object and its methods to work with arrays in your applications. 
 2. collections of data which are ordered by an index value. 
 3. This includes arrays and array-like constructs such as Array objects and TypedArray objects.
4. An array is an ordered list of values that you refer to with a name and an index.
*/
console.log(Array.isArray("Hitesh"))
//return true or false ,if the value we passed is array then true otherwise false
console.log(Array.isArray([1,2,3,4,5]))
console.log(Array.from("Hitesh"))//create an array
console.log(Array.from(45678));//empty


console.log(Array.from({name: "hitesh"})) // interesting,because it create empty array,to avoid this we have to specify 
//that we want to create the array of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

