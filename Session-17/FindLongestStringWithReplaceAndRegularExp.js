function longestWordLength(str){
  //  var stringWithoutSpecialCharacters = str.replace(/\w/g, '');
    var longestWord = 0;
  //  var wordArray = stringWithoutSpecialCharacters.split(' ');
    var wordArray = str.split(' ');
    for (var i = 0; i < wordArray.length; i++) {
        if(wordArray[i].length > longestWord) {
            longestWord = wordArray[i].length;
        }
    }

    return longestWord;
}

console.log(longestWordLength('Hi, where is the airport ?'));
console.log(longestWordLength('Thanks for stopping by!'));