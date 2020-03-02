function goodMorning() {
    return 'Good morning neighbor';
}
console.log(goodMorning());

function goodEvening() {
    return 'Good evening neighbor, Thanks.';
}
console.log(goodEvening());

function goodMorning(name) {
    return 'Good morning, ' + name + ' !';
}
console.log(goodMorning('Rama'));

function goodEvening(name, task) {
    return 'Good evening, '+ name +' thanks for '+ task +'!';
}
console.log(goodEvening('Rama', 'maintaining the ayodhya'));