// function ShopingCard(...num1) {
//     return num1
    
// }
// console.log(ShopingCard(10,20,30,40,50,60,1000,2000,20000,2));

// function card(val1,val2,...num2) {
//     return num2;
    
// }
// console.log(card(12,2,11,45,67,89,876,6654));

// How to object to accesss the data by function help
const a = {
    username:"anuj Gaurav",
    price:199

}
function anuj(anyobject){
    console.log(`Enter the username ${anyobject.username}, Enter the price ${anyobject.price}`);

}
anuj(a);

// II method to object by to data accesss 
function Gaurav(anyobject) {
    console.log(`enter the user name ${anyobject.username1}, enetr the price ${anyobject.prices}`);
    
}
Gaurav(anuj={
    username1:"Nikita Rani",
    prices:299
})


// array to data accesss by functions

const newArray = [10,20,30,40,50,60]

function arrayaccess(getvalues ) {
    return getvalues[5];
    
}
console.log(arrayaccess(newArray));