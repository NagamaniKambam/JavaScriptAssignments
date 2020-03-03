function evenOnly(arr) {
    // declare evenArray variable and set to empty arry
    var evenArray = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenArray.push(arr[i]);
        }
    }

    return evenArray;
}
console.log(evenOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evenOnly([21, 26, 28, 29]));