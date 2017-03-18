# VSCode Toggler

[![OS X Build Status](https://travis-ci.org/tehstun/toggler.svg?branch=master)](https://travis-ci.org/tehstun/toggler)
[![Dependency Status](https://david-dm.org/tehstun/toggler.svg)](https://david-dm.org/tehstun/toggler)

Toggle words and symbols in VSCODE allowing for user defined configuration (This is a ported version from [here](https://github.com/HiDeoo/toggler) for [Atom](https://atom.io/)).

<img src="http://i.imgur.com/RPDDIWA.gif" width="500">

## Usage

Highlight the selected word or words* and press the associated keybinding (<kbd>Ctrl</kbd>+<kbd>r</kbd> by default on macOS and Linux, <kbd>Alt</kbd>+<kbd>r</kbd> on Windows).

You can also set your own custom shortcut key by going to the key binding settings `File -> Preferences -> Keyboard Shortcuts`.
setting the when to: `editorTextFocus` and the command to : `extension.toggler`.

## Configuration.

The core configuration can not be changed but can be updated within the settings.json file for VSCode. You can find this 
setting under `File -> Preferences -> Settings`. The custom changes will take priority over the existing default, this will allow you to overwrite the existing if you want too.

To add your own, add to the core setting `toggler.words` array by adding another array inside this array with your words.

```JSON
"toggler.words": [
  ["true", "false"],
  ["cats", "dogs"]
]
```


## License

&copy; 2017 Stephen Lineker-Miller <smmstephenmiller@gmail.com>

This is free software. It is licensed under the [MIT License](http://opensource.org/licenses/MIT). Feel free to use this in your own work. However, if you modify and/or redistribute it, please attribute me in some way, and distribute your work under this or a similar license. A shout-out or a beer would be appreciated.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MYR4398RVSV68)