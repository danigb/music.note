## `freq`

Get the pitch frequency in herzs with custom concert tuning

This function is currified so it can be partially applied (see examples)

### Parameters

* `tuning` **`Float`** the frequency of A4 (null means 440)
* `note` **`String or Array`** the note name


### Examples

```js
freq(null, 'A4') // => 440
freq(444, 'A4') // => 444
```
```js
// partially applied
['A4', 'A#4', 'B5'].map(freq(440)) // => [440, ...]
var baroque = freq(415)
baroque('A3') // => 207.5
```

Returns `Float` the frequency of the note


## `fromMidi`

Get the note name (in scientific notation) of the given midi number

It uses MIDI's [Tuning Standard](https://en.wikipedia.org/wiki/MIDI_Tuning_Standard)
where A4 is 69

This method doesn't take into account diatonic spelling. Always the same
pitch class is given for the same midi number.

### Parameters

* `midi` **`Integer`** the midi number


### Examples

```js
fromMidi(69) // => 'A4'
```

Returns `String` the pitch


## `midi`

Get the midi number of a note

The note can be an string in scientific notation or
[array pitch notation](https://github.com/danigb/music.array.notation)

### Parameters

* `note` **`String or Array`** the note in string or array notation


### Examples

```js
midi('A4') // => 69
midi('A3') // => 57
midi([0, 0, 2]) // => 36 (C2 in array notation)
```

Returns `Integer` the midi number


## `parse`

Convert from [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
to [array pitch notation](https://github.com/danigb/music.array.notation)

The string to parse must be in the form of: `letter[accidentals][octave]`
The accidentals can be up to four # (sharp) or b (flat) or two x (double sharps)

This function is cached.

### Parameters

* `str` **`String`** the string to parse


### Examples

```js
parse('C') // => [0, 0]
parse('c#') // => [0, 1]
parse('c####') // => [0, 4]
parse('Cbbbb') // => [0, -4]
parse('Cx') // => [0, 2]
parse('db') // => [1, -1]
parse('Db3') // => [1, -1, 3, 0]
```

Returns `Array` the note in array notation or null if not valid note


## `scientific`

Convert from [array notation](https://github.com/danigb/music.array.notation)
to [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)

Array length must be 2, 4 or 5 (see array notation)

The returned string format is `letter[+ accidentals][+ octave]` where the letter
is always uppercase, and the accidentals and octave are optional.

This function is memoized for better perfomance.

### Parameters

* `arr` **`Array`** the note in array notation


### Examples

```js
scientific([0, 0]) // => 'C'
scientific([0, 0, 0]) // => null (its an interval)
scientific([0, 0, 0, 0]) // => 'C0'
```

Returns `String` the note in scientific notation or null if not valid note array


## `transpose`

Transposes a pitch by an interval

This function is curryfied, so you can partially applied (see example)

### Parameters

* `a` **`String or Array`** a pitch or interval in string or array notation
* `b` **`String or Array`** a pitch or interval in string or array notation


### Examples

```js
transpose('3m', 'C4') // => 'Eb4'
transpose('C4', '3m') // => 'Eb4'
tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]
['C', 'D', 'E'].map(transpose('3M')) // => ['E', 'F#', 'G#']
```

Returns  the transposed pitch


