// Finding Maximum

let num = [2, 3, 4, 5, 3, 4, 7, 100, -1, 2];

let ans = num.reduce((max, ele) => { // This function returns only one value from the whole array
    if (ele > max) {
        return ele;
    }
    else {
        return max;
    }
});

console.log(ans);

// array sum

function sum(arr) {
    return arr.reduce((sum, ele) => sum + ele);
}
console.log(sum([1,2,3,4,5]));