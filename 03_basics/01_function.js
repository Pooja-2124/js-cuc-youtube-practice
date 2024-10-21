function printname(){
    console.log("pooja");
    console.log("gadhave");
    
    
}
// printname  //reference of function
printname()   //execution of function

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(21,24)
// let result=addTwoNumbers(22,56) 
// console.log(result);// gives undefined cause function is not returing any value 

// function addTwoNumbers(number1,number2){
//     // console.log(number1+number2);
//     let result=number1+number2
//     return number1+number2 //returning the value
//     // return result
// }
// let result=addTwoNumbers(78,43) //value will be stored
// console.log(result);

// function addTwoNumbers(number1,number2){
//     return number1+number2
//     // console.log(number1+number2); //this code will be unreachable code, after return the code will not executed
    
// }

// function addTwoNumbers(number1,number2){
// // if(typeof(number1) && typeof(number2) == "number")
// // console.log(number1+number2);

// // if(number1 && number2 === "number")
// // console.log(number1+number2);

// if((number1 && number2) === undefined){
//     console.log("invalid input");
    
// }
// return number1+number2
// }
// let result=addTwoNumbers( )
// // console.log(result);
// let result2=addTwoNumbers(23,56)
// console.log(result2);

function addTwoNumbers(number1=0,number2=0) { //default values
    console.log(number1+number2);
    
}
addTwoNumbers(78,34)
addTwoNumbers()// in this case default value of parameter will be taken 

