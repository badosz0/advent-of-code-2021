const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString("utf8").split("\n");

let horizontal = 0;
let depth = 0;
let aim = 0;

for (let line of input) {
	let [instruction, units] = line.split(" ");
	units = parseInt(units);

	switch (instruction) {
		case "forward":
			horizontal += units;
			depth += aim * units;
			break;
		case "down":
			aim += units;
			break;
		case "up":
			aim -= units;
			break;
	}
}

console.log(depth * horizontal);
