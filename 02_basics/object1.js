let clg1=Symbol("vbmv")
const branch=Symbol("MCA")
//object literal are not singleton(multiple instance will be created)
let obj1={
name:"pooja",
email:"pooja21@gmail.com",
"city name":"pune",
[branch]:"mca"
};
console.log(typeof obj1);
console.log(obj1);
console.log(obj1.name);
console.log(obj1["email"]);
// console.log(obj1.city name);//error key city is type of string cannot access by dot
console.log(obj1["city name"]);

obj1.age=20
obj1.clg1="vbmv1"
console.log(obj1);
console.log(typeof obj1.clg1);//string
// obj1.branch="MCA"
console.log(obj1)

// console.log(Object.freeze(obj1));//can not make changes in the values
obj1.greetings=function() {
    console.log("hello user");
    
}
let obj2={name:"aarti"};
obj1.greet=function() {
    console.log(`hello JSuser ${this.name}`);//key and value of same object then use this to access the value
    console.log(`hello JSuser ${obj2.name}`);
}
console.log(obj1.greetings);//return the function definition
console.log(obj1.greetings());
console.log(obj1.greet());

//note:- create the object using the create method or constructor
//it is singleton(only one instance is created)
// Object.create(n)



