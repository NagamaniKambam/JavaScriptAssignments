function letTest(){
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x)
    }
    console.log(x);
}
console.log(letTest());