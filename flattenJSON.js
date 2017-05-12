const flattenObj = require('.');
const fs = require('fs');


function printUsageAndExit() {
	console.error(`Usage 1: node ${process.argv[1]} <filename>`);
	console.error(`Usage 2: cat a.json | node ${process.argv[1]}`);
	process.exit(1);
}

function parseCmdOpt() {
	const argnum = process.argv.length;
	if (argnum === 2 || argnum === 3) return process.argv[2];
	else printUsageAndExit();
}

/**
 * printObj({ a: 1, b: 2 }); //=> 'a: 1\nb: 2'
 */
function printObj(obj) {
	for (var x in obj) console.log(`${x}: ${obj[x]}`);
}

function run() {
	const targetFile = parseCmdOpt() || '/dev/stdin';
	const c = JSON.parse(fs.readFileSync(targetFile));
	printObj(flattenObj(c));
}

run();

