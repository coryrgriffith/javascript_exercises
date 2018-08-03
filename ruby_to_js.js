// function everyOtherString(strings) {
//   var result = [];
//   index = 0
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     };
//     index++
//   });
//   return result
// }

// console.log(everyOtherString(["a", "b", "c", "d", "e", "f"]))

// function max(numbers) {
//   var current_max = numbers[0];
//   numbers.forEach(function(number) {
//     if (number > current_max) {
//       current_max = number
//     };
//   });
//   return current_max
// }

// console.log(max([5, 8, 4, 1, 2]));

// function factorial(number) {
//   var result = 1;
//   var current_number = number;
//   while (current_number > 0) {
//     result *= current_number;
//     current_number -= 1;
//   };
//   return result;
// }

// console.log(factorial(5));

// function descending(numbers) {
//   var result = [];
//   var index = numbers.length -1;
//   while (index >= 0) {
//     result.push(numbers[index]);
//     index -= 1;
//   };
//   return result;
// }

// console.log(descending([1, 3, 5, 7]));

// function sumCombinations(numbers_1, numbers_2) {
//   var result = [];
//   numbers_1.forEach(function(number_1) {
//     numbers_2.forEach(function(number_2) {
//       result.push(number_1 + number_2);
//     });
//   });
//   return result;
// }

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

// function reverseAString(string) {
//   var reversedString = [];
//   var i = string.length - 1;
//   while (i >= 0) {
//     reversedString.push(string[i])
//     i--;
//   }
//   return reversedString;
// }

// console.log(reverseAString("cory"));

// function letterACounter(string) {
//   var counter = 0;
//   var stringBroken = string.split("");
//   stringBroken.forEach(function(letter) {
//     if (letter.toLowerCase() === "a") {
//       counter++;
//     }
//   })
//   return counter;
// }

// console.log(letterACounter("banana"));

// function numberFinder(numbers, searchNumber) {
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] === searchNumber) {
//       return i;
//     }
//   }
//   return nil;
// }

// console.log(numberFinder([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));

// function insertSort(numbers, numberToInsert) {
//   for (var i = 0; i < numbers.length; i++) {
//     if (numberToInsert < numbers[i]) {
//       numbers.splice(i, 0, numberToInsert);
//       return numbers;
//     }
//   }
// }

// console.log(insertSort([1, 5, 9, 11, 65, 87, 98], 15));

// function lowerOrUpperHalf(numbers, searchNumber) {
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] === searchNumber) {
//       if (i > numbers.length / 2) {
//         return "higher";
//       }
//       if (i < numbers.length / 2) {
//         return "lower";
//       }
//     }
//   }
// }

// console.log(lowerOrUpperHalf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

function factorial(number) {
  // var factorialCount = 1;
  // while (number > 0) {
  //   factorialCount *= number;
  //   number--;
  // }
  // return factorialCount;
  var factorialCount = 0;
  if (number === 0 || number === 1) {
    return 1;
  }
  factorialCount = number * factorial(number - 1);
  return factorialCount;
}

console.log(factorial(5));