var vows = require('vows')
var assert = require('assert')
var note = require('../')

vows.describe('music.note').addBatch({
  'parse': function () {
    assert.deepEqual(note.parse('C#4'), [0, 1, 4, 0])
    assert.deepEqual(note.parse('Bb'), [6, -1])
  },
  'strings': {
    'note': function () {
      assert.equal(note('c'), 'C')
      assert.equal(note('bbb3'), 'Bbb3')
      assert.equal(note('fx'), 'F##')
      assert.equal(note([0, 1, 3, 0]), 'C#3')
    },
    'letter': function () {
      assert.equal(note.letter('fx'), 'F')
      assert.equal(note.letter('blah'), null)
    },
    'octave': function () {
      assert.equal(note.octave('C##4'), 4)
      assert.equal(note.octave([3, -2, 2]), 2)
      assert.equal(note.octave('C##'), null)
    },
    'note class': function () {
      assert.equal(note.pitchClass('e#2'), 'E#')
      assert.equal(note.pitchClass('dxx'), 'D####')
      assert.equal(note.pitchClass('db'), 'Db')
      assert.equal(note.pitchClass('blah'), null)
      assert.equal(note.pitchClass(null), null)
    },
    'accidentals': function () {
      assert.equal(note.accidentals('bbb3'), 'bb')
      assert.equal(note.accidentals('fx5'), '##')
      assert.equal(note.accidentals('c'), '')
      assert.equal(note.accidentals('blah'), null)
    }
  },
  'midi': {
    'fromMidi': function () {
      var notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73]
      .map(note.fromMidi).join(' ')
      assert.equal(notes, 'C4 Db4 D4 Eb4 E4 F4 F#4 G4 Ab4 A4 Bb4 B4 C5 Db5')
    },
    'toMidi': function () {
      assert.deepEqual('C4 D4 E4 F4 G4 A4 B4 C4'.split(' ').map(note.toMidi), [60, 62, 64, 65, 67, 69, 71, 60])
      assert.deepEqual('C#4 D#4 E#4 F#4 G#4 A#4 B#4 C#4'.split(' ').map(note.toMidi), [61, 63, 65, 66, 68, 70, 72, 61])
      assert.deepEqual('C##4 D##4 E##4 F##4 G##4 A##4 B##4 C##4'.split(' ').map(note.toMidi), [62, 64, 66, 67, 69, 71, 73, 62])
      assert.deepEqual('Cb4 Db4 Eb4 Fb4 Gb4 Ab4 Bb4 Cb4'.split(' ').map(note.toMidi), [59, 61, 63, 64, 66, 68, 70, 59])
      assert.deepEqual('Cbb3 Dbb3 Ebb3 Fbb3 Gbb3 Abb3 Bbb3 Cbb3'.split(' ').map(note.toMidi), [46, 48, 50, 51, 53, 55, 57, 46])
    },
    'toMidi: note class does not have midi': function () {
      assert.deepEqual('C D E F G A B C'.split(' ').map(note.toMidi), [ null, null, null, null, null, null, null, null ])
    },
    'toMidi: enharmonics': function () {
      assert.equal(note.toMidi('B#3'), note.toMidi('C4'))
      assert.equal(note.toMidi('B##3'), note.toMidi('Db4'))
    }
  },
  'frequencies': {
    'fromFreq': function () {
      assert.equal(note.fromFreq(440), 'A4')
      assert.equal(note.fromFreq(220), 'A3')
      assert.equal(note.fromFreq(329.6275569128699), 'E4')
      assert.equal(note.fromFreq(330), 'E4')
      assert.equal(note.fromFreq(335), 'E4')
      assert.equal(note.fromFreq(340), 'F4')
      assert.equal(note.fromFreq(349.2282314330039), 'F4')
    },
    'fromFreq with custom tuning': function () {
      assert.equal(note.fromFreq(220, 220), 'A4')
    },
    'toFreq': function () {
      assert.equal(note.toFreq('A4'), 440)
      assert.equal(note.toFreq('A3'), 220)
      assert.equal(note.toFreq('E4'), 329.6275569128699)
      assert.equal(note.toFreq('F4'), 349.2282314330039)
    },
    'toFreq custom tuning': function () {
      assert.equal(note.toFreq('A4', 444), 444)
      assert.equal(note.toFreq('A3', 444), 222)
    },
    'cents': function () {
      assert.equal(note.cents('A4', 'A#4'), 100)
      assert.equal(note.cents('A4', 444), 15.66)
    }
  }
}).export(module)
