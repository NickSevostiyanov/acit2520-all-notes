// File system module
const fs = require('fs');

// Path module
const path = require('path');
// Process inputs from terminal module
const process = require('process');
// Give user inputs to const
const [dirInput, ext] = process.argv.slice(2);

// Determine the directory
const dir = dirInput === '/current directory/' ? process.cwd() : dirInput;

// console.log(dir);

function userinputs(dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        callback(files);
    });
};

userinputs(dir, (files) => {
    console.log('\nFiles inside \n' + dir + '\nwith the extension' + ext + '\n')
    files.forEach(file => { 
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
});



// 1. Export a single function that takes exactly the arguments described
// 2. Call the callback with an error or some data as described.
// 3. Don't change anything else, like global variables or stdout.
// 4. Handle all the errors that may occur and pass them to the callback.
    // // File system module
    // const fs = require('fs');
    // // Path module
    // const path = require('path');
    // // Process inputs from terminal module
    // const process = require('process');
    // // Give user inputs to const
    // const [dirInput, ext] = process.argv.slice(2);
    // const { userinputs } = require('./module.js');
    // const dir = dirInput === '/current directory/' ? process.cwd() : dirInput;
// -------------------------------------------

userinputs(dir, ext, (filteredfiles) => {
    console.log('processed files', filteredfiles)
});



// File system module
const fs = require('fs');
// Path module
const path = require('path');
// Process inputs from terminal module
const process = require('process');
// --------------------------------------

function userinputs(dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 

        console.log('\nFiles inside \n' + dir + '\nwith the extension ' + ext + '\n');
        let filteredfiles = [];

        for (let file of files) {
            if (path.extname(file) === ext) {
                console.log(file);
                filteredfiles.push(file);
            }
        }

        
        callback(filteredfiles);
    });
};


module.exports = {
    userinputs
}