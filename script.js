function fibonacci(num) {
// your code here
	f = 0;
	s = 1;
	c = 2;
	while ( c<=num) {
		n = f+s;
		f=s;
		s=n;
	}
	return n;
}
module.exports = fibonacci;
