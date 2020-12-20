const { uniq } = require('lodash');
const G = require('generatorics');

const TOP = 'top';
const LEFT = 'left';
const RIGHT = 'right';
const BOTTOM = 'bottom';

/**
 * @typedef {String} Side
 */

/**
 * @enum {Side}
 */
const SIDE_COMPLEMENT = {
	[TOP]: BOTTOM,
	[LEFT]: RIGHT,
	[RIGHT]: LEFT,
	[BOTTOM]: TOP,
};
const SIDES = Object.keys(SIDE_COMPLEMENT);

/**
 * Rotates a square 2d array 90 degrees clockwise in place.
 * @link https://code.likeagirl.io/rotate-an-2d-matrix-90-degree-clockwise-without-create-another-array-49209ea8b6e6
 * @param {Array<Array>} matrix
 * @returns {Array<Array>} - Returns the reference to our original matrix
 */
function rotate(matrix) {
	const n = matrix.length;
	const x = Math.floor(n / 2);
	const y = n - 1;
	for (let i = 0; i < x; i++) {
		for (let j = i; j < y - i; j++) {
			let k = matrix[i][j];
			matrix[i][j] = matrix[y - j][i];
			matrix[y - j][i] = matrix[y - i][y - j];
			matrix[y - i][y - j] = matrix[j][y - i];
			matrix[j][y - i] = k;
		}
	}

	return matrix;
}

/**
 * Flips a matrix in the `y` direction in place.
 * @param {Array<Array>} matrix
 * @returns {Array<Array>} - Returns the reference to our original matrix
 */
function flipY(matrix) {
	const n = matrix.length;
	const half = Math.floor(n / 2);
	for (let i = 0; i < half; i++) {
		let t = matrix[i];
		matrix[i] = matrix[n - (i + 1)];
		matrix[n - (i + 1)] = t;
	}

	return matrix;
}

/**
 * Flips a matrix in the `x` direction in place.
 * This can also be achieved by rotating 180 degrees
 * and flipping in the `y` direction, so this method
 * goes unused in our code below. Including for
 * completeness sake.
 *
 * @param {Array<Array>} matrix
 * @returns {Array<Array>} - Returns the reference to our original matrix
 */
function flipX(matrix) {
	const n = matrix.length;
	const x = matrix[0].length;
	const half = Math.floor(x / 2);
	for (let i = 0; i < half; i++) {
		for (let j = 0; j < n; j++) {
			let t = matrix[j][i];
			matrix[j][i] = matrix[j][n - (i + 1)];
			matrix[j][n - (i + 1)] = t;
		}
	}

	return matrix;
}

class PuzzlePiece {
	/**
	 *
	 * @param {Object} opt
	 * @param {Number} opt.id
	 * @param {String} opt.piece
	 */
	constructor({ id, piece }) {
		this.id = id;
		this.piece_str = piece;
		this.piece = piece.split('\n').map((row) => row.split(''));
		this.edge_length = this.piece.length;
		this.edge_cache = SIDES.reduce((obj, side) => (obj[side] = {}, obj), {});

		this.orientations = this.generateOrientations();

		this.connections = new Set();
		this.connections_array = undefined;
	}

	/**
	 * @returns {Array<String>} - Returns an array of unique orientations for the puzzle piece.
	 */
	generateOrientations() {
		let orientations = [];
		for (let i = 0; i < 4; i++) {
			orientations.push(this.toString());
			flipY(this.piece);
			orientations.push(this.toString());
			flipY(this.piece);
			rotate(this.piece);
		}

		return uniq(orientations);
	}

	getOrientationAsPieceArray(i) {
		return this.orientations[i].split('\n').map((row) => row.split(''));
	}

	/**
	 * @param {Side} side
	 * @param {String} square_str 
	 */
	getEdge(side, square_str) {
		if (!this.edge_cache[side][square_str]) {
		switch (side) {
			case TOP:
					this.edge_cache[side][square_str] = this.row(0, square_str);
					break;
			case BOTTOM:
					this.edge_cache[side][square_str] = this.row(this.edge_length - 1, square_str);
					break;
			case LEFT:
					this.edge_cache[side][square_str] = this.col(0, square_str);
					break;
			case RIGHT:
					this.edge_cache[side][square_str] = this.col(this.edge_length - 1, square_str);
					break;
		}
	}

		return this.edge_cache[side][square_str];
	}

	row(i, square_str) {
		if (square_str) {
			const n = this.edge_length;

			// Add `i` to offset the '\n' chars
			return square_str.slice(i * n + i, i * n + n + i);
		} else {
			return this.piece[i].join('');
		}
	}

	col(i, square_str) {
		let str = '';
		if (square_str) {
			for (let row = 0; row < this.edge_length; row++) {
				// Add `row` to offset the '\n' chars
				let y = row * this.edge_length + row + i;
				str += square_str[y];
			}
		} else {
			for (let y = 0; y < this.piece.length; y++) {
				str += this.piece[y][i];
			}
		}

		return str;
	}

	convertConnectionsToArray() {
		this.connections_array = [...this.connections];
	}

	fit(other_piece) {
		this.connections.add(other_piece);
		other_piece.connections.add(this);
	}

	canJoinOrientationWithOtherAlong(self_orientation, other_orientation, self_side) {
		let other_side = SIDE_COMPLEMENT[self_side];
		let self_edge = this.getEdge(self_side, self_orientation);
		let other_edge = this.getEdge(other_side, other_orientation);

		return (self_edge === other_edge);
	}

	tryToFit(other_piece) {
		for (let side of SIDES) {
			for (let [self, other] of G.cartesian(this.orientations, other_piece.orientations)) {
				let can_be_joined = this.canJoinOrientationWithOtherAlong(self, other, side);
				if (can_be_joined) {
					this.fit(other_piece);
					return;
				}
			}
		}
	}

	orientToConnections(...joins) {
		if (joins.length !== this.connections.length) {
			throw new Error(
				`Must provide joins equal to the number of connections. Provided ${joins.length} but there are ${this.connections.length}`
			);
		}
	}

	/**
	 * @returns {String} - Returns string of _current_ piece orientation.
	 */
	toString() {
		return this.piece.map((row) => row.join('')).join('\n');
	}
}

class Puzzle {
	constructor(pieces) {
		this.pieces = pieces;
	}

	connectPieces() {
		for (let [piece_a, piece_b] of G.combination(this.pieces, 2)) {
			if (piece_a.connections.size < 4 && piece_b.connections.size < 4)
			piece_a.tryToFit(piece_b);
		}

		for (let piece of this.pieces) {
			piece.convertConnectionsToArray();
		}
	}

	/**
	 * Assumes we don't have trickery where a piece can have multiple connections
	 * but an _optimal_ orientation and grid alignment puts it in the right place.
	 * Looks like our input _does indeed_ generate pieces with 2, 3, or 4 connections.
	 *
	 * @note Ah, and maybe this _is_ a safe assumption due to the instructions:
	 *
	 * > Each tile's image data includes a border that should line up exactly with its
	 * > adjacent tiles. All tiles have this border, and the border lines up exactly
	 * > when the tiles are both oriented correctly. Tiles at the edge of the image also
	 * > have this border, **but the outermost edges won't line up with any other tiles.**
	 *
	 * Emphasis added at the end. So we know that we don't have an adversarial input
	 * where the edges and corners line up with other tiles. However, it isn't clear
	 * if some inner tile could have more than 4 possible connections, but only one
	 * of them allows for all tiles to be arranged in its 12 x 12 grid.
	 */
	getIdsOfPiecesWithNConnections(n) {
		return this.pieces.filter((piece) => piece.connections.size === n).map((p) => p.id);
	}

	orientPieces() {
		/**
		 * Here is a question: of my four corners, which one is the _top left?_
		 * The answer: it doesn't matter! Because the final picture can _itself_
		 * still be rotated or flipped, I just need to pick one and orient the pieces
		 * _as if_ that corner was the top left.
		 *
		 * After I have all the pieces oriented, I can strip off the "border" of each
		 * tile (shrinking each piece from 10 x 10 to 8 x 8) and join all 144 of them
		 * together into a 12 x 12 picture, making one large 96 x 96 grid (8 * 12 = 96).
		 */
		let [top_left] = this.getIdsOfPiecesWithNConnections(2);
	}
}

module.exports = { Puzzle, PuzzlePiece };
