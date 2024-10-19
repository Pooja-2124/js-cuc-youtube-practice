//create an object using constructor
const obj1=new Object();//constructor(singleton)
console.log(obj1);//empty object same as 
//ex:- const obj1={}

   obj1.name="prachi"
   obj1.email="prachi2@gmail.com"
   obj1.age=25

console.log(obj1);
console.log(obj1.name,obj1.age,obj1["email"]);

//nested object or object inside object
const obj2={
   o1:{
   city:"amravati",
   o2:{
    pin:444608,
   o3:{
    state:"Maharashtra"
   }
   }
   }
};
console.log(obj2);
console.log(obj2.o1);
console.log(obj2.o1.o2.pin);

//merging to object
const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}
// const ob3={ob1,ob2}
// console.log(ob3);//print object inside object

//way1: used Object.assign() to merge to objects
// const ob3=Object.assign({},ob1,ob2)
// console.log(ob3);

//way2: same as array use spread operator
const ob3={...ob1,...ob2}
console.log(ob3);


//array of objects,inside array there are an objects
const users=[
   {
    name:"user1",
    id:101
   },
   {
name:"user2",
id:102
   },
   {
name:"user3",
id:103
   }
]
//to access the values 
// console.log( users[0].id, users[1].id, users[2].id);

// for( i=0;i<users.length;i++){
//     console.log(users[i].name);
    
// }
// users.forEach(element => {
//     console.log(element.id,element.name);
    
// });

console.log(Object.keys(users));//array of keys
console.log(Object.values(users));//array of values
console.log(Object.entries(users));//seperated key and value array
console.log(Object.hasOwn(users,0));
console.log(Object.hasOwn(users,"name"));
console.log(Object.hasOwn(users[0],"name"));

