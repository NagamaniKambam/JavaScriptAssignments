var testScores1 = [92, 87, 54, 63, 75, 59];
 var graduation1 = [];
 for(var i=0; i<testScores1.length; i++) {
     if(testScores1[i] > 60) {
         graduation1.push(testScores1[i]);
     }
 }

 var graduation1 = testScores1.filter(function(test){
     return test > 60;
 })

 console.log(graduation1);