// # Write a method that prints out every number from 1 to 100. 

// for (var i = 1; i < 101; i++) {
//   console.log(i);
// }

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// for (var i = 1; i < 100; i += 2) {
//   console.log(i);
// }

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function FiftyFiveCounter(numbers) {
//   var total = 0;
//   numbers.forEach(function(number) {
//     if (number === 55) {
//       total++
//     }
//   });
//   return total;
// }

// console.log(FiftyFiveCounter([23, 64, 55, 988, 1232, 55]));

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

function AwesomesauceInfusion(strings) {
  var infused_strings = [];
  for (var i = 0; i < strings.length; i++) {
    infused_strings.push(strings[i]);
    if (i < strings.length - 1) {
      infused_strings.push("awesomesauce");
    }
  }
  return infused_strings;
}

console.log(AwesomesauceInfusion(["a", "b", "c", "d", "e"]));

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}


// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}


// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
