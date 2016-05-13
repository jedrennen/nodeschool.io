var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
	// +'1' ouputs 1
	sum += +process.argv[i];
	// Alternate:
	// sum += Number(process.argv[i]);
}
console.log(sum);
