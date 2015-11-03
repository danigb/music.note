'use strict'

var note = { }

note.scientific = require('music.note.scientific')
note.scientific.parse = require('music.note.scientific.parse')
note.midi = require('music.note.midi')
note.fromMidi = require('music.note.from-midi')
note.freq = require('music.note.freq')
note.transpose = require('music.note.transpose')

module.exports = note
