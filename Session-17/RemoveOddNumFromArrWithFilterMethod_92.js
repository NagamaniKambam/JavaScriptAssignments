function evenOnly(arr) {

    // Use the filter method for each item in the array
    return arr.filter(function(a) {

        // Use the module operator to evaluate even numbers and return the item that have a reminder of zero
        return (a%2 === 0);
    })
}

console.log(evenOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evenOnly([21, 26, 28, 29]));