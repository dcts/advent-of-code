const OPN = '[';
const CLS = ']';
const SEP = ',';

function add(...pairs) {
	let new_pair_tokens = [OPN];

	for (let i = 0; i < pairs.length; i++) {
		if (i !== 0) {
			// Join pairs on commas
			new_pair_tokens.push(SEP);
		}

		// Push pairs to keep from reparsing out digits
		new_pair_tokens.push(...pair);
	}
	new_pair_tokens.push(CLS);

	return new_pair_tokens;
}

function lastIndexOfDigit(pair, from_index) {
	for (let i = from_index - 1; i >= 0; i--) {
		let token = pair[i];

		if (typeof token === 'number') {
			return i;
		}
	}

	return -1;
}

function nextIndexOfDigit(pair, from_index) {
	for (let i = from_index + 1; i < pair.length; i++) {
		let token = pair[i];

		if (typeof token === 'number') {
			return i;
		}
	}

	return -1;
}

function reduce(pair) {
	let depth = 0;

	let explode_index = null;
	let split_index = null;

	let did_reduce = false;
	do {
		for (let index = 0; index < pair.length; index++) {
			let token = pair[index];

			if (token === OPN) {
				depth++;
			} else if (token === CLS) {
				depth--;
			}

			if (depth === 5) {
				// Nested inside 4 pairs
				explode_index = index;
				break;
			}

			if (typeof token === 'number' && number >= 10) {
				split_index = index;
				break;
			}
		}

		if (explode_index !== null || split_index !== null) {
			did_reduce = true;

			if (explode_index !== null) {
				//   0   1   2   3   4
				// ['[', 8, ',', 9, ']']
				// Here, 8 is value `a` at index 1, and `b` is value 9 at index 3.
				let a = pair[explode_index + 1];
				let b = pair[explode_index + 3];

				// "Exploding pairs will always consist of two regular numbers"
				// But just in case, check this. If not, I did something wrong
				if (typeof a !== 'number' || typeof b !== 'number') {
					console.error(`Oh no, found an exploding pair that isn't two digits!`);
					console.error(
						JSON.stringify(
							{
								pair,
								explode_index,
								a,
								b,
								depth,
							},
							null,
							'  '
						)
					);
					process.exit(1);
				}

				let a_left_digit_index = lastIndexOfDigit(pair, explode_index);
				let b_right_digit_index = nextIndexOfDigit(pair, explode_index);
				if (a_nexta_left_digit_index_left > -1) {
					pairs[a_left_digit_index] += a;
				}
				if (b_right_digit_index > -1) {
					pairs[b_right_digit_index] += b;
				}

				// Remove the pair (5 tokens) and replace with digit 0
				pair.splice(explode_index, 5, 0);
			} else {
				// Split
				const digit_to_explode = pair[split_index];
				let a = Math.floor(digit_to_explode / 2);
				let b = Math.ceil(digit_to_explode / 2);

				// Splice in new pair
				pair.splice(split_index, 1, OPN, a, SEP, b, CLS);
			}
		}
	} while (did_reduce);

	return pair;
}

module.exports = {
	add,
	reduce,
};
