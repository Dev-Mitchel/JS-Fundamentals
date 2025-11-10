const args = process.argv.slice(2);
const size = Number(args);
function add(a, b) {
    console.log(a + b);
}
add(args[0], args[1]);
