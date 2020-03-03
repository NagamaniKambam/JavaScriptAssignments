console.log();
console.log('Using Split Method');

function alphaOrder(str) {
    var stringToArray = str.split('');
    var reverseArray = stringToArray.sort();
    var sortedString = reverseArray.join('');

    return sortedString;

    return str.split('').sort().join('');
}

console.log(alphaOrder("hello"));
console.log(alphaOrder("goodbye"));
console.log();
     
console.log('Using Spread Operator');

  function alphaOrder1(str) {
 
    // split the string into an array with spread operator
    var strToArr = [...str];
 
    // sort the letters in the array
    var revArr = strToArr.sort();
 
    // join the array back into a string
    var sortedStr = revArr.join('');
 
    // return the alphabetized array
    return sortedStr;
 
    // all in one step
    return [...str].sort().join('');
 
  }
 
  console.log(alphaOrder1("hello"));
  console.log(alphaOrder1("goodbye"));
