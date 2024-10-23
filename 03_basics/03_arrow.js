const obj1={
    username:"hitesh",
    city:"amravati",
    func1: function(){
        //   `the username is ${username}`//error
        console.log(`the username is ${this.username}`);
        //insoide the object if we use the function at that time this will be used
        console.log(this);
        //return current object
    }    
    
}
// console.log(this); //{}
// obj1.func1()
// console.log(this); //{}



//console.log(this); //empty object,can not return or access global objects,in node their is no global objects
// but if we run it in browser then it return the window object,window are the global object of browser


const one=function(){
    let user="hitesh"
    console.log(user);
    console.log(this.user); //undefined ,cannot use this inside function
    console.log(this); //return the global objects 
    // but if we run it in browser then it return the window object
}
// one()


const two=()=>{
    let user="hitesh"
    console.log(user);
    console.log(this.user); //undefined ,cannot use this inside function
    console.log(this); //does not return any global objects,empty object
}
// two()

//return value in arrow function
// const sum=(num1,num2)=>{
// return num1+num2
// }
// inside  { }  we need to write the return keyword to return any value 
// console.log(sum(10,20));

const sum=(num1,num2)=>(num1+num2) //inside ( ) we don not have to use return keyword to return any value
console.log(sum(10,20));

// () are useful to return any object through arrow function
// const fun=()=>{
//     // {
//     //     username:"hitesh"
//     // } //without return can not return object 
//     return {
//         username:"hitesh"
//     }
// }
// console.log(fun());

const fun=()=>({username:"hitesh"})
console.log(fun());
