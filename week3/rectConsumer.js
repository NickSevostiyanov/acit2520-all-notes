const { rect } = require('./rectModule.js');
function solveRect(l, w) {
    rect(l, w, (err, result) => {
        // Check for errors
        if (err) return console.log(err);
        // print result.area, result.perimeter
        console.log(`The dimensions are: ${result.perimeter} ${result.area}`);

    });
}
solveRect(1, 4);
/*
Create a function called solveRect.
    -> takes 2 parameters: length and width
    -> Should call a seperate function youve defined
        in another file called rect


    rect is a function that contains 3 params: length, width, callback
        - If length/width is <= 0, provide an error to the callback

    Otherwise, call the callback and provide the perimeter and area
    for the results

*/