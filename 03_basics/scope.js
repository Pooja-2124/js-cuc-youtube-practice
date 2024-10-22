//var c = 300 //global scope written  and use  anywhere in the program 
let a = 300 //global scope 
if (true) {
    let a = 10 //local
    const b = 20
    // console.log("INNER: ", a); //priority given to  local
    
}



// console.log(a); 
// console.log(b);
// console.log(c);


// scope inside function
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//concept of hosting ,means where to place the variable,function how to call
console.log(addone(5)) //not give any error
//print 6
function addone(num){
    return num + 1
}

addTwo(5) //error
const addTwo = function(num){ //define and declare variable
    return num + 2
}