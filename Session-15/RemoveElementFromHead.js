//declare function and pass parameters of array and elements to remove
function chopper(arr, excess) {
    /*
        apply splice method to array and pass arguments of where to remove from array and  
        how many elements to remove.
    */
   arr.splice(0, excess);

   return arr;
}

// call the function with array argument and elements to be removed
console.log(chopper(['JLKJLKJ', 'Fkslfsl', 'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'], 2));