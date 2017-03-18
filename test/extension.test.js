/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
var assert = require('assert');

//loadin the Configuration
const defaults = require('../defaults.json');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
var vscode = require('vscode');
var myExtension = require('../extension');

// Defines a Mocha test suite to group tests of similar kind together
suite("VS-Toggler Tests", function() {

    test("Configuration should be a valid array of string words", () => {
        const customWords = vscode.workspace.getConfiguration('toggler').get('words');

        assert.equal(customWords.constructor, Array, 'Custom words in togger.words setting is not a valid array');

        const builtWords = Object.assign(defaults, customWords);
        
        assert.equal(builtWords.constructor, Array, 'Fused defaults and user setting is not a valid array');

        builtWords.forEach((wordArray) => {
            assert.equal(wordArray.constructor, Array, 'One of the word arrays inside the fused word arrays is not a valid array');
            assert.equal(wordArray[0].constructor, String, 'Array value is not a valid string for switching');
            assert.equal(wordArray[1].constructor, String, 'Array value is not a valid string for switching');
        });

    });

    test("It should not replace a unknown word", () => {
        const startingWord = "this_is_a_test_phrase"
        const matchedWord = myExtension.findReplacementText(startingWord, defaults);
        assert.equal(startingWord, matchedWord, 'Entering invalid word does not return its starting word');
    });

    test("It should replace a known word", () => {
        const startingWord = "on"
        const matchedWord = myExtension.findReplacementText(startingWord, defaults);

        assert.equal(matchedWord, "off", 'Entering in a known word did not return the correct value');
    });

    test("It should respect and understand switching uppercase", () => {
        const startingWord = "ON"
        const matchedWord = myExtension.findReplacementText(startingWord, defaults);

        assert.equal(matchedWord, "OFF", 'Entering in a known word in uppercase format did not return the correct value');
    });

    test("It should respect and understand switching capitalization of a word", () => {
        const startingWord = "On"
        const matchedWord = myExtension.findReplacementText(startingWord, defaults);

        assert.equal(matchedWord, "Off", 'Entering in a known word in uppercase format did not return the correct value');
    });

    test("It should return null if the isnert word is not a string", () => {
        const matchedWord = myExtension.findReplacementText(0, defaults);

        assert(matchedWord === null, 'Entering a non string value did not return null');
    });
});