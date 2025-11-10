const args = process.argv.slice(2);

const num = Number(args[0]);  // convert to number

// Understanding isNaN(num)

// isNaN() is a built-in JavaScript function that checks “Is this value Not a Number?”

// So:

// isNaN(10)      // false (because 10 is a number)
// isNaN('hello') // true  (because 'hello' cannot be turned into a number)
// isNaN(NaN)     // true
if (!isNaN(num)) {
  console.log('My number: ' + num);
} else {
  console.log('Not a number');
}
