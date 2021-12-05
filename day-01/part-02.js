const fs = require("fs");
const input = fs
	.readFileSync(__dirname + "./input.txt")
	.toString("utf8")
	.split("\n")
	.map((n) => parseInt(n));

let inc = 0;

for (let i = 3; i < input.length; i++) {
	if (
		input[i] + input[i - 1] + input[i - 2] >
		input[i - 1] + input[i - 2] + input[i - 3]
	) {
		inc++;
	}
}

console.log(inc);
