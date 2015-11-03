var vows = require('vows')
var assert = require('assert')
var note = require('../')

vows.describe('music.note').addBatch({
  'modules': function () {
    assert(note.scientific)
    assert(note.scientific.parse)
    assert(note.midi)
    assert(note.fromMidi)
    assert(note.freq)
  }
}).export(module)
