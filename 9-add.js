const args = process.argv.slice(2);

function add(a, b) {
    console.log(a + b);
}

// Convert each argument to a number before calling add
const num1 = Number(args[0]);
const num2 = Number(args[1]);

add(num1, num2);

