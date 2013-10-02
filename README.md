ByteChunker
=====

[![Build
Status](https://travis-ci.org/mcollina/bytechunker.png)](https://travis-ci.org/mcollina/bytechunker)

It is based on the Stream 2 API, so it will not work on node v0.8.
If you want node v0.8, please submit a pull-request.

## Installation

```
$: npm install bytechunker --save
```

## Pipe usage

```
var chunker = require('bytechunker')
  , fs = require('fs')
  , read = process.stdin
  , write = chunker(2)

read.pipe(write)

write.on('data', function(chunk) {
  console.log('chunk', chunk)
})
```

## Contributing to CallbackStream

* Check out the latest master to make sure the feature hasn't been
  implemented or the bug hasn't been fixed yet
* Check out the issue tracker to make sure someone already hasn't
  requested it and/or contributed it
* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution
* Make sure to add tests for it. This is important so I don't break it
  in a future version unintentionally.

## LICENSE - "MIT License"

Copyright (c) 2013 Matteo Collina, http://matteocollina.com

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
