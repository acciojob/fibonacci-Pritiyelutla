function fibonacci(num) {
// your code here
	let f = 0;
	let s = 1;
	let c = 2;
	let n;
	while ( c < num) {
		n = f+s;
		f=s;
		s=n;
		c = c+1;
	}
	return n;
}
module.exports = fibonacci;
