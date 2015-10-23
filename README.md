# music.note

[![Build Status](https://travis-ci.org/danigb/music.note.svg?branch=master)](https://travis-ci.org/danigb/music.note)
[![Code Climate](https://codeclimate.com/github/danigb/music.note/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.note)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.note.svg)](https://www.npmjs.com/package/music.note)
[![license](https://img.shields.io/npm/l/music.note.svg)](https://www.npmjs.com/package/music.note)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://github.com/danigb/music.kit)

`music.note` is the bridge between midi, your app and your synthetizers. Is a small (2.5kb minified) and fast library to manipulate note names, midi notes and note frequencies.

```js
var note = require('music.note')
// get a note from midi
var name = note.fromMidi( ... )
// write it to the console
console.log(name)
// give it to your synth
synth.play(note.toFreq(name))
```

This is part of [music.kit](https://github.com/danigb/music.kit)

## Installation

#### For node

Install via npm: `npm install --save music.note` and require it.

#### Browsers

No distribution (yet). Use webpack, browserify or a similar tool.

## Usage

#### Note names

The `note` function returns the [scientific notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation) of a given note if valid. Can be used to check if its a valid note:

```js
note('bbb') // => 'Bbb'
note('fx4') // => 'F##4'

if (note(str) !== null) { /* valid pitch str */ }
```

You can get also pitch classes (pitches without octaves), note letter, octave and accidentals:

```js
note.pitchClass('c##5') // => 'C##'
note.letter('eb3') // => 'E'
note.octave('eb3') // => 3
note.accidentals('eb3') // => 'b'
```

#### Working with midi

You have two functions for converting from and to midi numbers:

```js
note.toMidi('A4') // => '69'
note.fromMidi(69) // => 'A4'
```

#### Working with frequencies

The same way, you have two frequency related functions:

```js
note.toFreq('A4') // => 440
note.fromFreq(440) // => 'A4'
```

#### Using different pitch notation

In the case scientific notation is not what you need, you can always use [pitch array notation](https://github.com/danigb/pitch-array) for every function that expects a string:

```js
note.toFreq([5, 0, 3]) // => 220
```

Also you can covert from scientific notation to pitch array notation with the `parse` function:

```js
note.parse('A3') // => [5, 0, 3]
```

#### More...

This is part of [music.kit](https://github.com/danigb/music.kit)

## License

MIT License
