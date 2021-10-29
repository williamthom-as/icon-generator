const generator = require('./dist/index.js');

const arr = generator.extractColorPalette('mytest');
let svg = document.getElementById("ico");
let iterator = 1;

let rect1 = generator.createBasicRectangle(150, 150, null, null, arr[0]);
svg.appendChild(rect1);

arr.forEach(x => {
  let shape = generator.createBasicRectangle(25, 25, 25 * iterator, 25, x);
  svg.appendChild(shape);
  iterator += 1;
});


