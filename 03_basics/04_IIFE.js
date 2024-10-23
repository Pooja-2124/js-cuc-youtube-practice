//Immediately invoked function expression
// the fuction which invoked or execute immediately call as IIFE 
// and it is use to prevent the pollution or problem which are arises 
// due to global scope or variables,function used in the global scope,or simple to resolve scope problem 

//ex:- usually if we want that oue database must be immediately  connect as the program execution starts 

//function
//named function
(connection=function() {
console.log("database connected");
})();
//executing two or more IIFE by using ; at the end of the function 
//note:- ; indicate to close the function execution

(function connection(){
console.log("database connected");
})();

//unamed or function without any name
(function(){
console.log("db connected");
})();

//Arrow function
(()=>{
console.log("DB connected");
})();
//passing parameter
((name)=>{
console.log(`${name} database connected`);
})('mysql')

