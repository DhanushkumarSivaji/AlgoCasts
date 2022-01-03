// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//TIPS

//Recursion Tips

//1. Figure out the bare minimum pieces of information to represent the problem
//2. Give reasonable defaults to the bare minimum pieces of info
//3. Check the base case. Is there any work left to do? If not, return
//4. Do some work. Call your function again, make sure the arguments have changed in some fashion

// Example
// function printNumber(n) {
//     if(n === 0){
//         return
//     }
//     console.log(n);
//     printNumber(n - 1);
// }

// printNumber(10)


//Solution 2
// if( row === n) then we hit the end of our problem
// if the 'stair' string has a length === n then we are at the end of the row
// if the length of the stair string is less than or equal to the row number we are working on , we add a '#',
// otherwise add a space.

function steps(n,row=0,stair='') {
    if( n === row) {
        return
    }

    if( n === stair.length ){
        console.log(stair)
        return steps(n,row+1)
    }

    if(stair.length <= row){
        stair += "#"
    } else {
        stair += " "
    }

    steps(n, row, stair)
}

//Solution 1

// From 0 to n (iterate through rows)
// Create an empty string, 'stair'
// From 0 to n (iterate through colums)
// IF the current column is equal to or less than the current row 
// Add a "#" to 'stair'
// ELSE
// Add a "space" to 'stair'
// console log 'stair'

// function steps(n) {
//     for ( let row=0; row < n; row++){
//         let stair=''
//         for( let column=0; column <n; column++){
//             if( column <= row){
//                 stair += "#"
//             }else{
//                 stair += " "
//             }
//         }
//         console.log(stair)
//     }
// }

module.exports = steps;
