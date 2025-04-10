const { distance } = require('./mathHelpers');
const process = require('node:process');
const { EOL } = require('node:os') // os.EOL
const fs = require('fs');
const dirname = 'dataPoints';
const path = require('node:path');
const dirpath = path.join(__dirname, dirname, "points.txt")
   
const [x1, y1, x2, y2] = process.argv.slice(2)




// A function called processInput
// Create a Dir called dataPoints
const processInput = (userInput) => {
    // Create a directory
    fs.mkdir('dataPoints', { recursive: true }, (err) => {
        if (err) return console.log(err);

        // METHOD FOR PRINTING SPECIFIC ERROR:
        // if (err) {
        //     if (err.code === "EEXIST") return console.log("directory already exists!")
        //     return console.log(err);
    

        // Inside dataPoints, create a points.txt
        fs.writeFile("dataPoints/points.txt", userInput, (err) => {
            if (err) return console.log(err);
            // print content saved message
            console.log('Content Saved!')

            
            // APPEND the distance message to points.txt
            const message = `${EOL}The distance between your two points: (${x1}, ${y1}), (${x2},${y2}) is ${distance(x1, y1, x2, y2)}`
            fs.appendFile('dataPoints/points.txt', message, (err) => {
                if (err) return console.log(err);
            })
            console.log(message)

        });
        
        // Write userInput into dataPoints/points.txt
        


    });
};

processInput(`${x1}, ${y1}, ${x2}, ${y2}`);


