var test = require('tap').test
  , chunker = require('./')
  , bl = require('bl')
  , stream = require('stream')

test('pipe all output', function(t) {
  var source = bl()
    , dest

  source.append('hello')

  dest = source.pipe(chunker(2)).pipe(bl(function() {
    t.equal(dest.toString(), 'hello')
    t.end()
  }))
});

test('write data in chunks', function(t) {
  var source = bl()
    , dest = new stream.Writable()

  source.append('hello')

  source.pipe(chunker(2)).pipe(dest)

  dest._write = function(chunk, encoding, cb) {
    t.equal(chunk.length, 2)
  }

  dest.end = function() {
    t.end()
  }
});
