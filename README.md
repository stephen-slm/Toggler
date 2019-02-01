# VSCode Toggler

[![OS X Build Status](https://travis-ci.org/tehstun/toggler.svg?branch=master)](https://travis-ci.org/tehstun/toggler)
[![Dependency Status](https://david-dm.org/tehstun/toggler.svg)](https://david-dm.org/tehstun/toggler)

---
THIS IS NO LONGER MAINTAINED, USE THE VSCODE VERSION OF THE BELOW ATOM EXTENSION [HERE](https://github.com/HiDeoo/toggler-vscode)
---

Toggle words and symbols in VSCODE allowing for user defined configuration (This is a ported version from [here](https://github.com/HiDeoo/toggler) for [Atom](https://atom.io/)).

<img src="https://i.imgur.com/w2khqrv.gif" width="200">

## Usage

Highlight the selected word or words* and press the associated keybinding to switch between commonly used opposites of its value (<kbd>Ctrl</kbd>+<kbd>r</kbd> by default on macOS and Linux, <kbd>Alt</kbd>+<kbd>r</kbd> on Windows).

You can also set your own custom shortcut key by going to the key binding settings `File -> Preferences -> Keyboard Shortcuts`.
setting the when to: `editorTextFocus` and the command to : `extension.toggler`.

## Configuration.

The core configuration can not be changed but can be updated within the settings.json file for VSCode. You can find this 
setting under `File -> Preferences -> Settings`. The custom changes will take priority over the existing default, this will allow you to overwrite the existing if you want too.

### *Default* ###

```js

[
  ["0", "1"],
  ["enable", "disable"],
  ["enabled", "disabled"],
  ["on", "off"],
  ["true", "false"],
  ["yes", "no"],

  ["(", ")"],
  ["[", "]"],
  ["[]", "{}"],
  ["{", "}"],
  ["'", "\"", "`"],

  ["*", "/"],
  ["*=", "/="],
  ["&", "|"],
  ["&&", "||"],
  ["+", "-"],
  ["++", "--"],
  ["+=", "-="],
  ["<", ">"],
  ["<<", ">>"],
  ["<=", ">="],
  ["==", "!="],
  ["===", "!=="],

  ["absolute", "relative"],
  ["high", "low"],
  ["horizontal", "vertical"],
  ["in", "out"],
  ["inner", "outer"],
  ["left", "right"],
  ["top", "bottom"],
  ["up", "down"],

  ["black", "white"],
  ["gray", "maroon", "red", "purple", "fuchsia", "green", "yellow", "blue", "aqua"],

  ["const", "let", "var"],
  ["import", "export"],
  ["join", "split"],
  ["JSON.parse", "JSON.stringify"],
  ["parse", "stringify"],
  ["pop", "push"],
  ["shift", "unshift"],
  ["test", "test.only"],

  ["atan", "tan"],
  ["ceil", "floor"],
  ["cos", "sin"],
  ["Math.atan", "Math.tan"],
  ["Math.ceil", "Math.floor"],
  ["Math.cos", "Math.sin"],
  ["Math.min", "Math.max"],
  ["min", "max"],

  ["addEventListener", "removeEventListener"],
  ["animationstart", "animationend"],
  ["change", "input", "submit"],
  ["click", "dblclick"],
  ["compositionstart", "compositionend"],
  ["copy", "cut", "paste"],
  ["dragenter", "dragleave"],
  ["dragstart", "dragend"],
  ["focus", "blur"],
  ["keydown", "keyup"],
  ["mousedown", "mouseup"],
  ["mouseenter", "mouseleave"],
  ["onAnimationStart", "onAnimationEnd"],
  ["onChange", "onInput", "onSubmit"],
  ["onClick", "onDoubleClick"],
  ["onCompositionStart", "onCompositionEnd"],
  ["onCopy", "onCut", "onPaste"],
  ["onDragEnter", "onDragLeave"],
  ["onDragStart", "onDragEnd"],
  ["onFocus", "onBlur"],
  ["onKeyDown", "onKeyUp"],
  ["onMouseDown", "onMouseUp"],
  ["onMouseEnter", "onMouseLeave"],
  ["onTouchStart", "onTouchEnd"],
  ["touchstart", "touchend"],

  ["div", "span"],
  ["head", "body"],
  ["header", "footer"],
  ["ol", "ul"],
  ["tr", "td"],

  ["componentDidMount", "componentWillUnmount"],
  ["getState", "setState"],

  ["activate", "deactivate"],
  ["add", "remove"],
  ["address", "port"],
  ["available", "unavailable"],
  ["background", "foreground"],
  ["before", "after"],
  ["client", "server"],
  ["connect", "disconnect"],
  ["connected", "disconnected"],
  ["drag", "drop"],
  ["file", "folder"],
  ["first", "last"],
  ["from", "to"],
  ["get", "set"],
  ["input", "output"],
  ["install", "uninstall"],
  ["key", "value"],
  ["load", "unload"],
  ["minor", "major"],
  ["online", "offline"],
  ["open", "close"],
  ["parent", "child"],
  ["positive", "negative"],
  ["prefix", "suffix"],
  ["previous", "next"],
  ["public", "private"],
  ["req", "res"],
  ["request", "response"],
  ["row", "column"],
  ["short", "long"],
  ["show", "hide"],
  ["source", "destination"],
  ["start", "stop"],
  ["valid", "invalid"],
  ["visible", "hidden"],
  ["width", "height"],
  ["x", "y"]
]

```

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
