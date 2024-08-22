let arr = [1, 2, 3, 4];
console.log(arr);


// constructors(special function) - It doesn't return anything and starts with capital letter(by convention)
// constructor is used here to create an object
function Person(name, age) {
    // This is the layout or blueprint of a real life object
    this.name = name;//this operator is pointing to the object 
    this.age = age;
    console.log(this);
}
console.log(this);//this akhetre window hobe(check console by running html file)

// new keyword is creating a blank object in the memory
// Defining new function as properties of an object
// p1,p2 both can access this prototype function
Person.prototype.talk = () => {
    console.log(`Hi,My name is ${this.name}`);
}

let p1 = new Person("sajid", 22);//instances of object
let p2 = new Person("sakib", 19);

console.log(p1.talk == p2.talk);//p1,p2 j talk method use kortise same prototype er under er method



// Defining classes

class People {

    constructor(name, age) {
        console.log("Parent class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi,My name is ${this.name}`);
    }
}

let p3 = new People("Sajid", 23);

console.log(p3);
console.log(p3.talk());
console.log(p1.talk == p3.talk);//Same talk function na tai false asbe

// Read Inheritance in JS
// child extends(keyword) parent syntax
// child class a same name a function thakle inherited function override hoye jabe and child class er oi function ai execute hobe 

class Student extends People {
    constructor(name, age, marks) {
        super(name, age);//parent class constructor is being called
        console.log("Student class constructor");
        this.marks = marks;
    }
}
class Teacher extends People {
    constructor(name, age, subject) {
        super(name, age);
        console.log("Teacher class constructor");
        this.subject = subject;
    }
    talk() {
        console.log("Overrided function");//People class er talk function override hoye jabe ata diye
    }
}

let std1 = new Student("Sajid", 23, 90);
let teach1 = new Teacher("Steve", 35, "Physics");
console.log(std1.talk());//inherited talk method
console.log(teach1.talk());//inherited talk method
