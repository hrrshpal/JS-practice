/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
*/

let hasThreeVowels = function(string) {
    let arr = string.split("")
    let vowels = ['a','e','i','o','u']
    let count=0
    arr.forEach((char)=>{
        if(vowels.includes(char)){
            count++
            vowels.splice(vowels.indexOf(char),1)
        }
    })
    if(count>=3){
        return true
    }
    return false
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
