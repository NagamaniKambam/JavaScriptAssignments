function palindrome(str) {
    /* 
       take string and remove all non-word characters and turn string into lower case assuming that 
       it is case insensitive
    */ 
   str = str.toLowerCase();
    // console.log(str);
    console.log(str.split('').reverse().join(''));
   // put in parentheses to get a boolean value. split it into an array. reverse the array. join into a string
   return (str == str.split('').reverse().join(''));
}

console.log(palindrome('racecar'));
console.log(palindrome('Racecar'));
console.log(palindrome('race-car'));
console.log(palindrome('array'));