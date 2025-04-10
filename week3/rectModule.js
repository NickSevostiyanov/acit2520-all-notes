function rect(length, width, callback) {
    // check length/width is < = 0      <-- send an error into callback
    if (length <= 0 || width <= 0) return callback(new Error('Invalid Dimensions'));
   callback(null, { perimeter: 2 * (length + width), area: length * width });
    // send the perimeter 2 * (x + y) and area (x * y) into the callback
}
module.exports = { rect }; 