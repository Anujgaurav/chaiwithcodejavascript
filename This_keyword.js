const course={
    username:"Anuj Gaurav",
    Course:"Chai with code",
    printmsg: function welcome( ) {
        console.log(`${this.username} , welcome  to our website`);//this keyword only use for self function and objects
       console.log(this);//its gave the result locally only 
    }
}
course.printmsg()

course.username="happy New Year"
course.printmsg()

console.log(this);// when we print the this so empty because there value is empaty for the global areas...