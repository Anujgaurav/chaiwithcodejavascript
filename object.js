const anuj = {
    name : "Anuj Gaurav",
    // "Full Name": "Anuj Gaurav",
    // age : 18,
    // Location: "Moradabad",
    // Email: "Anuj@gmail.com",
    // LastLoginDays:["Monday","Sunday"]


}
// console.log(anuj.Email);// try to leave this type of object to accesss the results
// console.log(anuj["Full Name"]);
// console.log(anuj["name"]);



//   Symbol access krne k trika oin objects 
//  const Mysym = Symbol("key1")

//   const name ={
//     [Mysym]:"key1"
//     // Mysym:"key1"
//   } 
//   console.log(([Mysym]))

// // HOW TO CHNAGE THE OBJECTS  VALUES 
//   anuj.Email="Gaurav@gmail.com"
// console.log(anuj["Email"]);


//  koi bhi object ki value change na kre payr toh object
// Object.freeze(anuj);
// anuj.Email="Singh@google.com"
// anuj.name="Nikita Singh"
// anuj.Location="Gurgaon"

// console.log(anuj);

//  object functions makings 
anuj.Happy = function(){
    console.log("its my happines time");
}
anuj.Happy1 = function(){
    console.log(`its my happines time ,${this.name}`);
}
console.log(anuj.Happy());
console.log(anuj.Happy1());