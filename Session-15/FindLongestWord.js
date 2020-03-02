
//declare function and parameter
function maxWord(str) {

    //declare variable and create an array of words with our split method
    var words = str.split(' ');

    //declare variable for our longest word. set intial value to zero
    var longestWord = 0;

    for(var i = 0; i < words.length; i++) {

        //create a conditional if statement to compare current word length with previous longestWord
        if(words[i].length > longestWord) {

            //assign new value to the longestWord
            longestWord = words[i].length;
        }
    }
    return longestWord;
}

console.log(maxWord('My favorite fruit is Mango'));

function maxWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    for(var i = 0; i < words.length; i++) {
        if(longestWord.length < words[i].length) {
            longestWord = words[i];
        }
    }
    str = longestWord;
    return str.length;
}
console.log(maxWord('I\'m working on JavaScript'));