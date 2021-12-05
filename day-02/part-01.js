const fs = require("fs");
const input = fs
	.readFileSync(__dirname + "./input.txt")
	.toString("utf8")
	.split("\n");

let horizontal = 0;
let depth = 0;

for (let line of input) {
	let [instruction, units] = line.split(" ");
	units = parseInt(units);

	switch (instruction) {
		case "forward":
			horizontal += units;
			break;
		case "down":
			depth += units;
			break;
		case "up":
			depth -= units;
			break;
	}
}

console.log(depth * horizontal);
