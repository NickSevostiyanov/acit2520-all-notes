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
