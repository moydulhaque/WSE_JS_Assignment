// ***********************************************************************************************************
// Problem 1: Write a function to calculate the area of a triangle.
// ***********************************************************************************************************

function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
      return "Base and height must be positive numbers.";
  }
  
  const area = (1/2) * base * height;
  return area;
}

const base = 5; 
const height = 8; 
const area = calculateTriangleArea(base, height);

console.log("The area of the triangle is: " + area);


// ***********************************************************************************************************
// Problem 2: Write a function to convert degrees to radians.
// ***********************************************************************************************************

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const degrees = 90; 
const radians = degreesToRadians(degrees);
console.log(radians); 



// ***********************************************************************************************************
// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
// ***********************************************************************************************************

// Recursive Approach
function calculateFactorialRecursive(n) {
  if (n === 0) {
      return 1;
  } else {
      return n * calculateFactorialRecursive(n - 1);
  }
}

const number = 5;
const factorial = calculateFactorialRecursive(number);
console.log("Factorial of " + number + " is: " + factorial); 

// Iterative Approach
function calculateFactorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

const number = 5;
const factorial = calculateFactorialIterative(number);
console.log("Factorial of " + number + " is: " + factorial); 



// ***********************************************************************************************************
// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
// ***********************************************************************************************************

function isPrime(number) {
  if (number <= 1) {
      return false; // 0 and 1 are not prime numbers
  }
  
  if (number <= 3) {
      return true; // 2 and 3 are prime numbers
  }
  
  if (number % 2 === 0 || number % 3 === 0) {
      return false; // Numbers divisible by 2 or 3 are not prime
  }
  
  for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
          return false; // Numbers divisible by i or (i + 2) are not prime
      }
  }
  
  return true;
}

console.log(isPrime(17)); // Output: true (17 is a prime number)
console.log(isPrime(4));  // Output: false (4 is not a prime number)



// ***********************************************************************************************************
// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
// ***********************************************************************************************************

function mergeArrays(array1, array2) {
  const mergedArray = [];

  for (const element of array1) {
      mergedArray.push(element);
  }

  for (const element of array2) {
      mergedArray.push(element);
  }

  return mergedArray;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); 


// ***********************************************************************************************************
// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
// ***********************************************************************************************************

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "This is a leap year";
  } else {
      return "Not a leap year";
  }
}

console.log(isLeapYear(2000)); 
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2022)); 


// ***********************************************************************************************************
// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
// ***********************************************************************************************************

function removeDuplicates(array) {
  // Create a Set to store unique values
  const uniqueValues = new Set(array);

  // Convert the Set back to an array
  const uniqueArray = [...uniqueValues];

  return uniqueArray;
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const deduplicatedArray = removeDuplicates(originalArray);
console.log(deduplicatedArray); 


// ***********************************************************************************************************
// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
// ***********************************************************************************************************

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);
  return celsius;
}

// Example usage:
const fahrenheitTemperature = 68; 
const celsiusTemperature = convertToCelsius(fahrenheitTemperature);
console.log(celsiusTemperature); 


// ***********************************************************************************************************
// Problem 9: Write a function to find the maximum of five numbers.
// ***********************************************************************************************************

function findMaximum(a, b, c, d, e) {

  let max = a;

  if (b > max) {
      max = b;
  }
  if (c > max) {
      max = c;
  }
  if (d > max) {
      max = d;
  }
  if (e > max) {
      max = e;
  }

  return max;
}

const num1 = 12;
const num2 = 45;
const num3 = 8;
const num4 = 27;
const num5 = 36;

const maxNumber = findMaximum(num1, num2, num3, num4, num5);
console.log("The maximum number is: " + maxNumber); 


// ***********************************************************************************************************
// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
// ***********************************************************************************************************

function evenOdd(inputString) {
  const totalCharacters = inputString.length;
  return totalCharacters % 2 === 0 ? 'even' : 'odd';
}

// Example usage:
const string1 = 'JavaScript';
const string2 = 'Hello';

const result1 = evenOdd(string1);
const result2 = evenOdd(string2);

console.log("Input: '" + string1 + "', Output: " + result1); 
console.log("Input: '" + string2 + "', Output: " + result2);

