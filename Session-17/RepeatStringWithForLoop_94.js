function repeatString(str, num) {

    // Declare variable `finalString` and set it to an empty string
    var finalString = '';

    // If statement conditional to check if number is `0` or less
    if(num <= 0)
        return finalString;

    // Create a for loop that runs `num` times.
    // In code block add `str` to `finalString` for each number we iterate through
    for (var i = 1; i <= num; i++) {
        finalString += str;
        console.log("value of finalString at loop", i + " " + finalString);
    }
    // Return `finalString`
    return finalString;
}

console.log(repeatString('car', 4));
console.log(repeatString('bar', 3));