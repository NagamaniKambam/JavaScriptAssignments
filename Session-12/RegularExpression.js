var alphabet='abdefghi';
var regex=/abdef/g;
var searchAll=alphabet.match(regex).length;
console.log(searchAll);

var searchOne=/[haihello]/g;
var alp=alphabet.match(searchOne).length;
console.log(alp);
var searching =/ab/;
console.log(alphabet.search(searching));
