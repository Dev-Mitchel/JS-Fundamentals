const args = process.argv.slice(2);

if (typeof(args[0]) === "string") {
    console.log("My number:" + args[0])
} else {
    console.log("Not a number")
}