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