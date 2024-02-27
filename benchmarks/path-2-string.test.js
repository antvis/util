var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var { parsePathString: parsePathString40 } = require('@antv/path-util'); // 4.0
var { parsePathString: parsePathString50 } = require('../lib/path/parser/parse-path-string'); // 5.0

// add tests
suite
  .add('Path2String#4.0', function () {
    parsePathString40(
      'M2 4a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-6a2 2 0 0 0 -2 -2h-1.172a2 2 0 0 1 -1.414 -0.586l-0.828 -0.828a2 2 0 0 0 -1.414 -0.586h-2.344a2 2 0 0 0 -1.414 0.586l-0.828 0.828a2 2 0 0 1 -1.414 0.586h-1.172zM10.5 8.5a2.5 2.5 0 0 0 -5 0a2.5 2.5 0 1 0 5 0zM2.5 6a0.5 0.5 0 0 1 0 -1a0.5 0.5 0 1 1 0 1zM11.5 8.5a3.5 3.5 0 1 1 -7 0a3.5 3.5 0 0 1 7 0z',
    );
  })
  .add('Path2String#5.0', function () {
    parsePathString50(
      'M2 4a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-6a2 2 0 0 0 -2 -2h-1.172a2 2 0 0 1 -1.414 -0.586l-0.828 -0.828a2 2 0 0 0 -1.414 -0.586h-2.344a2 2 0 0 0 -1.414 0.586l-0.828 0.828a2 2 0 0 1 -1.414 0.586h-1.172zM10.5 8.5a2.5 2.5 0 0 0 -5 0a2.5 2.5 0 1 0 5 0zM2.5 6a0.5 0.5 0 0 1 0 -1a0.5 0.5 0 1 1 0 1zM11.5 8.5a3.5 3.5 0 1 1 -7 0a3.5 3.5 0 0 1 7 0z',
    );
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });

// logs:
// Path2String#4.0 x 14,795 ops/sec ±3.35% (79 runs sampled)
// Path2String#5.0 x 51,710 ops/sec ±2.05% (85 runs sampled)
// Fastest is Path2String#5.0
