function unique(str) {
    for(var i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;     
    }
    return true;
}

console.log(unique('car'));

console.log(unique('add'));