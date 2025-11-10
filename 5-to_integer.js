const args = process.argv.slice(2);

if (typeof(args[0]) === "string") {
    console.log("My number:"+ " " + args[0])
} else if (args[0]){
    console.log("Not a number")
}