// for loop
// for(let i=1 ;i<=10;i+=2){
//     console.log(i);
// }

// for(let i=5 ;i>=0;i--){
//     console.log(i);
// }

//Infinite loop

// for(let i=1 ;;i--){
//     console.log(i);
// }

// Run this file adding with a html file to get a multiplication table in console
// let n = prompt("Enter a number");
// n = parseInt(n); //converting to int

// for(let i=1;i<=10;i++){
//     console.log(n,'*',i,'=',n*i);
// }


// let i=1;

// while(i<6){
//     console.log(i);
//     i++;
// }

// Guess Game

// let favourite = "avatar";

// let guess =prompt("Enter a movie name:");

// while(guess!=favourite && guess!="quit"){
//     guess = prompt("Wrong guess. Please try again.");
// }

// if (guess==favourite){
//     console.log("Congrats!!!");
// }
// else{
//     console.log("You quit.");
// }

//array using loops
let arr = ['a','b','c','d','e'];

for(let i=0;i<arr.length;i++){
    console.log(i,arr[i]);
}

//Nested array with loops
let arr1 = [[1,2,3],[4,5],[6,7,8]];

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
        console.log(`j=${j}, ${arr1[i][j]}`);
    }
}

//forof loop
for(char of arr){
    console.log(char);
}

//Nested forof
for(row of arr1){
    for(element of row){
        console.log(element);
    }
}