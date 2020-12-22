function play(p1, p2) {
	while (!p1.isEmpty() && !p2.isEmpty()) {
		let p1_top = p1.shift();
		let p2_top = p2.shift();

		if (p1_top > p2_top) {
			p1.push(p1_top, p2_top);
		} else {
			p2.push(p2_top, p1_top);
		}
	}

	let winner = p1.isEmpty() ? p2.toArray().reverse() : p1.toArray().reverse();
	let score = winner.map((v, i) => v * (i + 1)).reduce((a, b) => a + b, 0);

	return score;
}

module.exports = { play };
