
function sum(a,b=3){
console.log(a+b);
}
function sum1(a=2,b){
console.log(a+b);
}
sum(10);
sum(10,15);
sum1(10);// NaN as argument passing occurs by order