var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var { path2Absolute: path2Absolute40 } = require('@antv/path-util'); // 4.0
var { path2Absolute: path2Absolute50 } = require('../lib'); // 5.0

// add tests
suite
  .add('Path2Absolute#4.0', function () {
    path2Absolute40(
      'M2 4a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-6a2 2 0 0 0 -2 -2h-1.172a2 2 0 0 1 -1.414 -0.586l-0.828 -0.828a2 2 0 0 0 -1.414 -0.586h-2.344a2 2 0 0 0 -1.414 0.586l-0.828 0.828a2 2 0 0 1 -1.414 0.586h-1.172zM10.5 8.5a2.5 2.5 0 0 0 -5 0a2.5 2.5 0 1 0 5 0zM2.5 6a0.5 0.5 0 0 1 0 -1a0.5 0.5 0 1 1 0 1zM11.5 8.5a3.5 3.5 0 1 1 -7 0a3.5 3.5 0 0 1 7 0z',
    );
  })
  .add('Path2Absolute#5.0', function () {
    path2Absolute50(
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
// Path2Absolute#4.0 x 14,524 ops/sec ±2.55% (80 runs sampled)
// Path2Absolute#5.0 x 35,120 ops/sec ±3.10% (81 runs sampled)
// Fastest is Path2Absolute#5.0
