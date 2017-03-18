// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const assert = require('assert');
const defaults = require('./defaults.json');


function activate(context) {

    const customWords = vscode.workspace.getConfiguration('toggler').get('words');

    assert(customWords.constructor === Array, 'Custom words in togger.words setting is not a valid array');

    const builtWords = Object.assign(defaults, customWords);

    console.log('vs-toggler is now active!');

    var disposable = vscode.commands.registerCommand('extension.toggler', function () {

        // grab the current editor if there is a existing editor open
        const editor = vscode.window.activeTextEditor;

        // Return if there is no editor open
        if(!editor) { return }

        const selections = editor.selections;

        editor.edit((editBuilder) => {
            selections.forEach((selection) => {

                // Gathers the whole word from the selection and gathers the next possible replacement
                // for that word if it exists in the default or the user provided words
                const word = editor.document.getText(selection);
                const replacementText = findReplacementText(word, builtWords);

                // Will not replace the word if word returned null or undefined
                if(replacementText !== null || replacementText !== undefined) {
                    editBuilder.replace(selection, replacementText);
                }
            });
        })

    });

    context.subscriptions.push(disposable);
}

/**
 * Reaches through the default configuration to find a default 
 * replacement for the users originalWord
 *  
 * example: 0 --> 1
 * 
 * @param {string} originalWord 
 */
function findReplacementText(originalWord, switchableWords) {

    if(originalWord.constructor !== String) {
        return null;
    }
    
    for (var index = 0; index < switchableWords.length; index++) {
        const wordGroup = switchableWords[index];

        for (var wordIndex = 0; wordIndex < wordGroup.length; wordIndex++) {
            const currentWord = wordGroup[wordIndex];
            const nextWordIndex = (wordIndex + 1) % wordGroup.length;

            if(originalWord.toLowerCase() === currentWord.toLowerCase()) {
                if(originalWord === currentWord) {
                    return wordGroup[nextWordIndex];
                } else if(originalWord === currentWord.toLowerCase()) {
                    return wordGroup[nextWordIndex].toLowerCase();
                } else if(originalWord === currentWord.toUpperCase()) {
                    return wordGroup[nextWordIndex].toUpperCase();
                } else if(originalWord === capitalize(originalWord)) {
                    return capitalize(wordGroup[nextWordIndex]);
                }
            }
        }
    }
    return originalWord;    
};

/**
 * returns a capitalized version of the provided string
 *
 * @param {string} string 
 */
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.activate = activate;

exports.findReplacementText = findReplacementText;