arr1=[1,2,3,4,5];
// console.log(arr1);
// arr1.push(6);
// console.log(arr1);
// arr1.pop();
// arr1.pop();
// console.log(arr1);
// arr1.unshift(7);
// arr1.unshift(8);
// console.log(arr1);
// arr1.shift();
// arr1.shift();
// arr1.shift();
console.log(arr1);
arr2=["apple","banana","orange"];
console.log(arr2);
const newarr=arr1.join()
console.log(newarr);
const newarr1=arr1.slice(1,3);//does not make changes in orignal array (by value)
console.log(newarr1);
console.log(arr1);
const newarr2=arr1.splice(1,3);//make changes in orignal array (by reference)
console.log(newarr2);
console.log(arr1);
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
const arr=[1,2,3,4,5]
console.log(arr.splice(1,3))//[2,3,4] **3rd index included **
console.log(arr)//[1,5]//remaining other elements 