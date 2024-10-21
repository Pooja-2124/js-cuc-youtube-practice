//passing object as an argument to the function
const itemandprice={
tshirt:300,
top:250,
pant:500
}
function itemprices(item){
console.log(Object.keys(item));
console.log(Object.values(item));

}
itemprices(itemandprice)

function itemsandprices(items){
    console.log(Object.keys(items));
    console.log(Object.values(items));
}
itemsandprices({
    tshirt:300,
    top:250,
    pant:500
    })


//passing array as an argument to the function
const arr=[100,200,300,400,500]
function printnumbers(array){
console.log(array);

}
printnumbers(arr)

function printnumbers2(array2){
    console.log(array2);
    
}
printnumbers2([10,20,30,40,50])

//passing multiple argument to the function using rest operator
// function sumOfNumbers(num1){
// console.log(num1);//print only the value of the argument
// }

//rest operator

// function sumOfNumbers(...num1){
//     console.log(num1);//print all the argument as array  
//     }
// sumOfNumbers(122,400,300,56,267)

function sumOfNumbers(val1,val2,...num1){
    console.log(val1,val2);
    console.log(num1);//print the rest of the parameters value as array
    }
sumOfNumbers(122,400,300,56,267)