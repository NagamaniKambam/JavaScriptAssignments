let first = [1, 2, 3];
let second = [2, 4, 6]; 
 function productOfThree(a, b, c) {
     let result = a * b * c;
     console.log(result);
 }
 console.log(productOfThree(first[0], first[1], first[2]));
 console.log(productOfThree(second[0], second[1], second[2]));
 console.log();

 //OR

 let first1 = [1, 2, 3];
let second1 = [2, 4, 6]; 
 function productOfThree(a, b, c) {
     let result = a * b * c;
     console.log(result);
 }
 console.log(productOfThree(...first1));
 console.log(productOfThree(...second1));
