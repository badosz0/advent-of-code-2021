const fs = require("fs");
const input = fs
	.readFileSync(
		__dirname + (process.argv[2] == "sample" ? "/sample.txt" : "/input.txt")
	)
	.toString("utf8")
	.replaceAll("\r\n", "\n")
	.split("\n");

let gamma = "";
let epsilon = "";

for (let i = 0; i < input[0].length; i++) {
	let zero = 0;
	let one = 0;

	for (let j = 0; j < input.length; j++) {
		if (input[j][i] == "0") {
			zero++;
		} else {
			one++;
		}
	}

	gamma += zero > one ? "0" : "1";
	epsilon += zero > one ? "1" : "0";
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
