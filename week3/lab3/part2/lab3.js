// File system module
const fs = require('fs');
// Path module
const path = require('path');
// Process inputs from terminal module
const process = require('process');
// Give user inputs to const
const [dirInput, ext] = process.argv.slice(2);
const { userinputs } = require('./module.js');
const dir = dirInput === '/current directory/' ? process.cwd() : dirInput;
// -------------------------------------------

userinputs(dir, ext, (filteredfiles) => {
    console.log('processed files', filteredfiles)
});
