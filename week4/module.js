function filterFiles(dir, ext, callback) {
    fs.readdir(dir, {recursive:true}, (err, files) => {
        if (err) return callback(err);
        const filteredfiles = files.filter((f) => path.extname(f) === ext);
        callback(null, filterFiles);
        // .filter(f => path.extname(f) === ext);
        // .forEach(f => console.log(f));           <-- if statment to check for extension
    })
}