// Reverse the order of two provided strings

function nameSwap(str) {
    //turn string into an array of words 
    var arr = str.split(' ');

    // return the array at index 1 followed by a space then the array at index 0
    return arr[1] + ' ' +arr[0];
}

console.log(nameSwap('Abraham Lincon'));
console.log(nameSwap('Hank Aaron'));