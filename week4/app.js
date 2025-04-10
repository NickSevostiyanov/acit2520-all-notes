const fs = require('node:fs');
const path = require('node:path');
const { filterModule } = require("./module");



filterModule('.', '.txt', (err, filterFiles) => {
    if(err) return console.log(err);
    filterFiles.forEach(f => console.log(err))
})

// function filterModule(dir, ext, callback) {
//     fs.readdir(dir, {recursive:true}, (err, files) => {
//         if (err) return callback(err);    
//         const filteredfiles = files.filter(f => path.ext(f) === ext);
//         callback(null, filterFiles);


//         // callback(null, files.filter(f => path.extname(f) === ext))
//         // .filter(f => path.extname(f) === ext);
//         // .forEach(f => console.log(f));           <-- if statment to check for extension
//     })
// }




// function filterFiles(dir, ext, callback) {
//     fs.readdir(dir, {recursive:true}, (err, files) => {
//         if (err) return callback(err);
//         const filteredfiles = files.filter((f) => path.extname(f) === ext);
//         callback(null, filterFiles);
//         // .filter(f => path.extname(f) === ext);
//         // .forEach(f => console.log(f));           <-- if statment to check for extension
//     })
// }