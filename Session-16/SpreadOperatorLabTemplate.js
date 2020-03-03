<<<<<<< HEAD
//create a function that will take 3 parameters
//pass to the function an array with 3 elements using the spread operator
//pass those arguments to a template string and return the template string

let array = ['Thara', 'speaks', 'good'];
function madLib(noun, verb, adjective){
    return ` ${noun} ${verb} ${adjective} english.`;
}
=======
//create a function that will take 3 parameters
//pass to the function an array with 3 elements using the spread operator
//pass those arguments to a template string and return the template string

let array = ['Thara', 'speaks', 'good'];
function madLib(noun, verb, adjective){
    return ` ${noun} ${verb} ${adjective} english.`;
}
>>>>>>> 0638b8de48e0267d298ed5c42cede1b59432c5fa
console.log(madLib(...array));