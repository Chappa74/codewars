function solution(number) {
	let values = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL',
		50: 'L',
		90: 'XC',
		100: 'C',
		400: 'CD',
		500: 'D',
		900: 'CM',
		1000: 'M'
	};
	let values_keys = Object.keys(values).reverse();
	let str = '';
	while (number > 0) {
		for (let i = 0; i < values_keys.length; i++) {
			const val = parseInt(values_keys[i]);
			if (number % val != number) {
				number -= val;
				str += values[val];
				break;
			}
		}
	}

	return str;
}