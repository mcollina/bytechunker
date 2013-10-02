
var stream = require('stream')
  , util   = require('util')

function ByteChunker(size) {
  if (!(this instanceof ByteChunker)) {
    return new ByteChunker(size)
  }

  this._chunkSize = size

  stream.Transform.call(this)
}

util.inherits(ByteChunker, stream.Transform)

ByteChunker.prototype._transform = function(data, encoding, done) {
  var chunks = Math.floor(data.length / this._chunkSize)
    , index = 0
    , i
    , slices = []
    , that = this

  for (i = 0; i < chunks; i++) {
    this.push(data.slice(index, index + this._chunkSize))
    index += this._chunkSize
  }

  if (index < data.length) {
    this.push(data.slice(index))
  }

  done()
}

module.exports = ByteChunker
