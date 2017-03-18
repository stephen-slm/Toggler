# VSCode Toggler

<!--[![OS X Build Status](https://travis-ci.org/HiDeoo/toggler.svg?branch=master)](https://travis-ci.org/HiDeoo/toggler)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/wbyrhho7e2icp5sx/branch/master?svg=true)](https://ci.appveyor.com/project/HiDeoo/toggler/branch/master)
[![Dependency Status](https://david-dm.org/HiDeoo/toggler.svg)](https://david-dm.org/HiDeoo/toggler)-->

Toggle words and symbols in VSCODE allowing for user defined configuration.

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


## Copyright and license

Copyright (c) 2017 Stephen Lineker-Miller. Code released under the [MIT license](https://github.com/toggler/toggler/blob/master/LICENSE.md).