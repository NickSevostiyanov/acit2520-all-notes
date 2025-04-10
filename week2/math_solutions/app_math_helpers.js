// -------------------------------------------

function multiplier(n1, n2) {
    return n1 * n2
}
// Create a function mulitplier
// Receive: num1, num2, callback(err, result)
// If the user passes something NOT a number,
// then pass an error into the callback
// Otherwise num1 and num2
function new_multiplier(num1, num2, callback2) {
    if (typeof num1 != 'number'|| typeof num2 != "number") {
        callback2("ERROR! Invalid Input!")
    } else {
        callback2(null, parseInt(num1) * parseInt(num2));
    }
}

new_multiplier(3, 2, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});