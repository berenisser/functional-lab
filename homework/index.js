exports.factorial = (n) => { (n == 0) ? 1 : (n * factorial(n - 1)) }

exports.fibonacci = (n) => { ( n == 1 || n == 2) ? 1 : fibonacci(n-1)+fibonacci(n-2) }

exports.divide = (a, b) => { (b>a) ? 0 : divide(a-b, b) + 1 }

exports.invert = (n) => { (n<10) ? n : ( (n%10)+ invert(n/10) * 10 ) }

exports.suma = (n) => { (n == 0) ? n : ( suma(n/10) + (n%10) ) }

exports.multi = (a, b) => {
	if(a == 1){
		return b
	}
	if( a % 2 != 0){
		return b + multi( a/2, b*2 )
	} else {
		return multi( a/2, b*2 )
	}
}

exports.sumArr = (arr) => { (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1)) }
