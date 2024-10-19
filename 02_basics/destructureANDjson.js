const obj1={
name:"poonam",
city:"nagpur",
email:"poonam1234@google.com"
}
console.log(obj1.name);
console.log(obj1["city"]);

//destructure
const {email}=obj1
console.log(email);
obj1.phonenum=9867543322
const {phonenum : phno}=obj1
console.log(phno);

//JSON 
// API
// {
//     "name":"pooja",
//     "clg":"vbmv"
// }
//it is like object without name and the keys and value are written in string except numbers

//array can be also treat as same
[
    {},
    {},
    {}
]
//JSON formatter used to easily undestand API code