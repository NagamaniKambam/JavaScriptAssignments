function nameSwap(str){
    //split string into an array
    var stringToArray = str.split(' ');

    //reverse array 
    var reverseArray = stringToArray.reverse();

    //join array into string
    var reverseString = reverseArray.join(' ');

    //return String
    return reverseString;
}

console.log(nameSwap('Abraham Lincon'));
console.log(nameSwap('Hank Aaron'));