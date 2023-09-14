let a = "United college of engineering and research , allahabad";


// length of string 
console.log(a.length);
// string slice
console.log(a.slice(0,50));
// String substring 

console.log(a.substring(0,12));

// string substr
console.log(a.substr(1,21));

// string replace 
console.log(a.replace("United","anuj"));

// String replaceall
console.log(a.replaceAll("United college of engineering and research , allahabad","moradabad" ));

// string toUppercase
console.log(a.toUpperCase());

// string tolowercase
console.log(a.toLowerCase());

// string concat(insert the elements)
console.log(a.concat("  United institute of technnlogy"));

// string trim (remove the white space of the row)
console.log(a.trim());
// string trimstart
// trimstart also use to starting white space removing to the string 
// also string trimend is use to the end of the string to  remove the end data remove in the string

// string padend
// let b="5";
// let c=b.toString();
// console.log(c.padStar(4,"x"));

// string charAt
console.log(a.charAt(12));

// string indexof

console.log(a.indexOf("h"));

// string charCodeat
console.log(a.charCodeAt(12));

// string split

console.log(a.split(" "));

