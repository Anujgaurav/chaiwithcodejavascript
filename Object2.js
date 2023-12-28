// //  non singleton Object 
// const anuj = {

// }
// console.log(anuj);

//Singleton Object 
const anuj = new Object()
anuj.name="anuj Gaurav"
anuj.id="123abc"
anuj.location="Moradabad"

// console.log(anuj);

// Nested Objects 
const Gaurav={
    emailid:"anuj@github.com",
      username:{
        fullname:{
       firstname:"anuj",
       Lastname:"Gaurav"
        }
    }

}

console.log(Gaurav.username.fullname.firstname);
console.log(Gaurav.username.fullname.Lastname);
console.log(Gaurav.username.fullname?.Lastname);


const ob = {1:"a",2:"b",3:"c"}
const ob1 = {4:"a",5:"b",6:"c"}
const ob2= {7:"a",8:"b",9:"c"}
// const ob3= Object.assign({},ob,ob1,ob2);
// maximum use hone wala syntax sprit (chord dena) wala he use hota hai 
const ob3= {...ob,...ob1,...ob2}
console.log(ob3);

console.log(Object.keys(Gaurav));
console.log(Object.values(Gaurav));
console.log(Object.entries(Gaurav));

console.log(Gaurav.hasOwnProperty('emailid'));
console.log(Gaurav.hasOwnProperty('fullname'));