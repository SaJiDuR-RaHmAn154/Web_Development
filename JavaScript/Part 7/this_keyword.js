// this keyword refers to an object that is executing the current piece of codes
// same object er parameters use korte this keyword use korte hobe

const student={
    Name:"Sajid",
    Age:22,
    phy:95,
    eng:90,
    math:97,
    getAvg(){
        let avg =(this.phy+this.math+this.eng)/3;
        console.log(`${this.Name} has got ${avg}% marks`);
    }
};

// console.log(student);
student.getAvg();

//Window object print hobe(check console)
// JS file run kore browser a open korle akta Window object create hoy
// Window holo base object(always exists even though there is no object)

// function getAvg(){
//     console.log(this);
// }
// getAvg();
