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