// function er jonno this er value hobe j object oi function k call korse
// arrow function er jonno this hobe tar parent k call kora object

// this keyword mastery in js required
//  But arrow function er jonno scope hoy lexical scope
// parent er scope arrow function inherit kore ney

const student = {
    name: "Sajid",
    marks: 95,
    prop: this, //global scope
    // object er jonno this holo window object(check console)

    getName: function () {
        console.log(this);//normal function er jonno this hobe student object(difference)
        return this.name;
    },
    getMarks: () => {
        //Arrow function er jonno scope hobe parent er scope. Akhane parent holo student.Jetar scope global
        // Arrow function er jonno this hobe parent (student) er this.Jeta holo Window object(check console)
        console.log(this);
        return this.marks;//arrow function er vitor tai student er data use kora possible na(karon window object er vitor marks name a kono info nei)
    },

    getInfo1: function () { 
        // Change asse karon here arrow function er this holo normal function() jar parent student object.So arrow function ero parent hobe student object
        setTimeout(() => {//callback function pass kora hoise
            console.log(this);//student object
        }, 2000);
    },
    getInfo2: function () {// Here function() k call korse setTimeout which is a function of Window object
        setTimeout(function() {// Normal function pass kora hoise
            console.log(this);//prints window object
        }, 2000);
    },

};

console.log(student);
console.log(student.getName());
console.log(student.getMarks());//calling object k arrow function this banay na.Borong calling object er this k nijer this banay(atate seta Window)
console.log(student.getInfo1());
console.log(student.getInfo2());