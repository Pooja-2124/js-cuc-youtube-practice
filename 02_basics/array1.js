// arr1=[1,2,3,4,5];
// // console.log(arr1);
// // arr1.push(6);
// // console.log(arr1);
// // arr1.pop();
// // arr1.pop();
// // console.log(arr1);
// // arr1.unshift(7);
// // arr1.unshift(8);
// // console.log(arr1);
// // arr1.shift();
// // arr1.shift();
// // arr1.shift();
// console.log(arr1);
// arr2=["apple","banana","orange"];
// console.log(arr2);
// const newarr=arr1.join()
// console.log(newarr);
// const newarr1=arr1.slice(1,3);//does not make changes in orignal array (by value)
// console.log(newarr1);
// console.log(arr1);
// const newarr2=arr1.splice(1,3);//make changes in orignal array (by reference)
// console.log(newarr2);
// console.log(arr1);




//Note
/*
1) Array is of object type
2) array is non primitive datatype
3) array are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes
ex:- const arr=[0,1,2,3,4]
console.log(arr["one"])//not possible,used index only
4) not homogeneous type,elements can be of same type or different type
5) JavaScript array-copy operations create shallow copies. 
(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
note: share the same reference.it means changes should be made in original array also.
6) slice: original array not change
ex: const arr=[1,2,3,4,5]
console.log(arr.slice(1,3))//[2,3] **3rd index not included **
console.log(arr)//[1,2,3,4,5]
7) splice: original array will be change
ex: const arr=[1,2,3,4,5]
console.log(arr.splice(1,3))//[2,3,4] **3rd index included **
console.log(arr)//[1,5]//remaining other elements 
*/

//create an array---------------------------
// const arr=[1,2,3,4,5];
// const arr1=new Array("a","b","c");

// //arr1=arr//not possible generate type error
// let arr2=new Array("a","b","c");
// arr2=arr;//change
// console.log(arr2);

//push and pop------------------------
// const arr=[1,2,3,4,5]
// const arr1=arr;
// console.log(arr1);

// arr.push(6)
// console.log(arr);
// arr.push(7)
// console.log(arr);
// arr.pop()
// console.log(arr);

// console.log(arr1);

//slice and splice-------------------
// console.log(arr.slice(1,3))//[2,3] **3rd index not included **
// console.log(arr)//[1,2,3,4,5]

// console.log(arr.splice(1,3))//[2,3,4] **3rd index included **
// console.log(arr)//[1,5]//remaining other elements 

//join() method-------------------------
// const arr=[1,2,3,4,5];
// console.log(arr);
// console.log(typeof arr);
// console.log(arr.join());//provide the comma seperated list of array element,and also convert the array of type object into string
// console.log(typeof arr.join());

//unshift and shift------------------------
//note:- 
//1. they are like push and pop
//2. unshift add the element at the  start of array 
//3. shift removes the first element of array
//note:push and pop works on last index or last position of the array where the unshift and shift works on first poition of the array  


// const arr=[1,2,3,4,5]
// const arr1=arr;
// console.log(arr);
// console.log(arr1);

// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift(0));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr1);

//some method------------------
const arr=[1,2,3,4,5];
console.log(arr.includes(5));
console.log(arr.includes(6));

console.log(arr.indexOf(3));
console.log(arr.indexOf(7));

console.log(arr.length);

console.log(arr.concat(6,7,8,9));//not change the original array
console.log(arr);

console.log(arr.reverse());
console.log(arr);

console.log(arr.at(4));



