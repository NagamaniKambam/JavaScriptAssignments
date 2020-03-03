function repeatString(str, num) {
    var finalString = '';
    if(num <= 0) {
        return finalString;
    }
    while( num > 0)
    {
        finalString += str;
        num-- ;
    }
    return finalString;
}

console.log(repeatString('car', 2));
console.log(repeatString('bar', 3));