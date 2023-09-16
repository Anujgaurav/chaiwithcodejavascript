let myDate = new Date()
console.log(myDate.toString() );
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);


let myCreateDate= new Date (2023,1,23)
console.log(myCreateDate.toLocaleString()); 
console.log(myCreateDate.getTime()); 

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

console.log(newdate.toLocaleString('default',{weekday:"long",}));