// Opposite of spread (multiple value akotre kore iterable er under a store kora hoy)
//spread and rest er syntax same

function sum(...args) {//arguments
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us:", args[i]);
    }
    return args.reduce((sum, ele) => sum + ele);
}

console.log(sum(1, 2, 3, 5));//args array te sob arguments collect hosse

function min(a, b, c, d) {
    console.log(arguments);// js internally arguments er akta collection create kore
    console.log(arguments.length);
    // arguments.push(10);//ata valid na(karon ata array na)(array methods applicable na)

}
min(1, 2, 3, 4);

// minimum using rest
function min1(msg, ...args) {//first ai alada parameter use kora jabe
    console.log(msg)
    return args.reduce((min, ele) => {
        if (min < ele) {
            return min;
        }
        else {
            return ele;
        }
    });
}

console.log(min1("Hello", 10, 20, 30, 40, -1));