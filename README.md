# music.note

[![Build Status](https://travis-ci.org/danigb/music.note.svg?branch=master)](https://travis-ci.org/danigb/music.note)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.note.svg)](https://www.npmjs.com/package/music.note)
[![license](https://img.shields.io/npm/l/music.note.svg)](https://www.npmjs.com/package/music.note)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

`music.note` is a group of functions to manipulate notes:

```js
var note = require('music.note')
note.midi('A4') // => 69
note.freq(440, 'C2') // => 65.40639132514966
note.transpose('C4', '3m') // => 'Eb4'
```

This is part of [music.kit](https://github.com/danigb/music.kit)

## Features

- Parse notes in scientific notation
- Convert from and to midi numbers
- Convert from and to frequencies with (optional) custom tunings
- Note transposition

## Installation

Install via npm: `npm install --save music.note` and require it.

## Documentation

[Generated documentation here](https://github.com/danigb/music.note/blob/master/API.md)

## License

MIT License
