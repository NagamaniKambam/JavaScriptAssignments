
var pizza = {
    item1 : 'pepperoni',
    item2 : 'mushrooms',
    favoritePizza : function() {
        return 'My favorite pizza has ${item1} and ${item2}!';
    }
}
console.log(pizza.favoritePizza());