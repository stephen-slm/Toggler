'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as assert from 'assert';
const defaults = require('./defaults.json');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    const customWords: {} = vscode.workspace.getConfiguration('toggler').get('words');

    assert(customWords.constructor === Array, 'Custom words in togger.words setting is not a valid array');

    const builtWords:[Array<string>] = Object.assign(defaults, customWords);

    console.log('vs-toggler is now active!');

    let disposable = vscode.commands.registerCommand('extension.toggler', () => {
    
        // Grab the editor which will be used to edit and update the text
       const editor = vscode.window.activeTextEditor;

       // If the editor is not open, return otherwise continue
       if(!editor) { return }

       const selections = editor.selections;

       editor.edit((editing: vscode.TextEditorEdit) => {
           selections.forEach((selection) => {
               const word: string = editor.document.getText(selection);
               const replacementText: string = findReplacementText(word, builtWords);

               // Will not replace the word if word returned null or undefined
                if(replacementText !== null || replacementText !== undefined) {
                    editing.replace(selection, replacementText);
                }
           });
       });
    });

    context.subscriptions.push(disposable);

}

/**
 * returns the next word if the word exists in array of word arrays
 * or returns its entry word
 * 
 * @param  {string} word
 * @param  {array} arrayOfWords
 */
export function findReplacementText(incomingWords: string, switchableWords: [Array<string>]) {

    if(incomingWords.constructor !== String) {
        return incomingWords;
    }
    
    for (var index: number = 0; index < switchableWords.length; index++) {
        const wordGroup: Array<string> = switchableWords[index];

        for (var wordIndex = 0; wordIndex < wordGroup.length; wordIndex++) {
            const currentWord: string = wordGroup[wordIndex];
            const nextWordIndex: number = (wordIndex + 1) % wordGroup.length;

            if(incomingWords.toLowerCase() === currentWord.toLowerCase()) {
                if(incomingWords === currentWord) {
                    return wordGroup[nextWordIndex];
                } else if(incomingWords === currentWord.toLowerCase()) {
                    return wordGroup[nextWordIndex].toLowerCase();
                } else if(incomingWords === currentWord.toUpperCase()) {
                    return wordGroup[nextWordIndex].toUpperCase();
                } else if(incomingWords === capitalize(incomingWords)) {
                    return capitalize(wordGroup[nextWordIndex]);
                }
            }
        }
    }
    return incomingWords;    
}

/**
 * returns a capitalized version of the provided string
 *
 * @param {string} string 
 */
function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}