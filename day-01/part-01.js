const fs = require("fs");
const input = fs
	.readFileSync("./input.txt")
	.toString("utf8")
	.split("\n")
	.map((n) => parseInt(n));

console.log(input.filter((m, i) => m < input[i + 1]).length);
