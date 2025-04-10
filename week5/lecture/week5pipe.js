// Every terminal has a built in 'stream'
    // Receive input from terminal

    // Terminal stream name = 
        // stdin    <-- READABLE STREAM
        // stdout   <-- WRITABLE STREAM
            // print('hello world')     <-- writes out to terminal (stdout)


const process = require('node:process');
const { Transform } = require('node:stream');
const rs = process.stdin;
const ts = new Transform({
    //                 VVV  <-- Tells what encoding is used (E.g: console.log(enc) OUTPUTS: utf8)
    transform: (chunk, enc, callback) => {
        const uppercasever = chunk.toString().toUpperCase();
        callback(null, uppercasever);
    
    },
});
const ws = process.stdout;


rs.pipe(ts).pipe(ws);


// rs.on('data', (chunk) => ws.write(chunk));              Same thing as below
// rs.pipe(ws);                                            Similar thing as above
// ^^^^^^^^ Pipe handles backpressure

