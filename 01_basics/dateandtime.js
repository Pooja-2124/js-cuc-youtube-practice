let date=new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.getDate());
console.log(date.getDay());
let date1=new Date(2024,0,1);//0 motnth jan
let date2=new Date(2024,0,0);//0 date 31 dec
console.log(date1.toString());
console.log(date2.toString());
let myTimeStamp = Date.now()
let myCreatedDate = new Date("01-14-2023")
console.log(myTimeStamp);
console.log(myCreatedDate);
console.log(myCreatedDate.getTime());//gives time in miliseconds,used to compaare the time easily
console.log(Math.floor(Date.now()/1000));
let newdate=new Date();
console.log(newdate.toLocaleString("default",{
    weekday:"long",
}));
console.log(newdate.toDateString("default",{
    // dateStyle:"full",
    dateStyle:"short",
}));