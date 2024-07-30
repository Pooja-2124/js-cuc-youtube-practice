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