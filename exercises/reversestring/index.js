// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed,character)=> character+reversed,'')
}

reverse('dhanush')

module.exports = reverse;

// 1st solution
//return str.split('').reverse().join('');

// 2nd solution
// let reversed = ''
// for(let character of str){
//     //take the character and add it to the start of the reversed
//     reversed = character + reversed
// }
// return reversed