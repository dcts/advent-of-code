const assert = require('assert');
const { input, testInput } = require('./input');
const KeyGenerator = require('./key-generator');

// Tests
let test_generator = new KeyGenerator(testInput.salt);
let test_index = test_generator.generateNextKeys();
assert.strictEqual(test_index, testInput.lastIndex);
