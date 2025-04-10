// Where we are in the course (Week5)
/* 
Recap:

First covered: Synchronous Functions
    console.log <-- Is sync
    I/O         <-- Category of input/output operations
    ^^^         <-- fs.readfilesync(x)
                    ^^^^^^^^^^^^^^^^^^
                    We want to alternatively use ASYNC:
                    fs.readfile(x)

    Asynchronous:
        Callback
        Promises
            .then   <-- Syntax
            await   <-- Alternative to .then (newer, amazing version to .then)
*/


const fs = require('node:fs/promises');

// Write a file
// Read the file after being read
// ------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                          SYNCHRONOUS FUNCTION
// fs.writeFileSync('somefile.txt', 'hello')
// console.log('done writing!');                                            WILL BE ASKED ON TEST:
// const data = fs.readFileSync('somefile.txt', 'utf8');                    What is the difference between Here and the Promise object?
// console.log(data)                                                        Entire code in Javascript will be blocked if code is in the middle of running 


fs.writeFile('somefile.txt', 'hello')
    .then(() => {
        console.log('done writing!');
        return fs.readFile('somefile.txt', 'utf8');                         // All other Code will NOT be blocked by these processes
    })                                                                      // Only code inside promise object will wait for the processes to finish
    .then((data) => console.log(data))                                      // (All code outside promise object will execute)
    .catch(err => console.log(err))


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// How to have the preformances of Asynchronous code + write it like a synchronous function
// AWAIT:
    // Fixes readability (Layout like the Synchronous functions)
    // Keeps functions as Asynchronous

await fs.writeFile('something.txt', 'hello');
console.log('done writing!');                                   // WILL WAIT UNTIL await fs.writefile() IS FINISHED
const data = await fs.readFile('somefile.txt', 'utf8');         // WILL WAIT FOR CODE ABOVE TO FINISH
console.log(data);                                              // WILL WAIT

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Requires parameters to 'group' items in await

// VVVVVVVV     Otherwise code below will join the block chain (We want this to be independent from await)
sendemail()                 


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// IMPORTANT CONVENTION:
    // Avoid writing Callback functions with Asynchronous code

// SOLUTION: 
    // Seperates block chain from other code
    // Defines what code will be blocked by await
    

    // Async-Await
async function main(){                                              // Creates async 'group' independent from other code
    await fs.writeFile('something.txt', 'hello');                   
    console.log('done writing!');                                   // WILL WAIT UNTIL await fs.writefile() IS FINISHED
    const data = await fs.readFile('somefile.txt', 'utf8');         // WILL WAIT FOR CODE ABOVE TO FINISH
    console.log(data);           
}


main()     // <--- Code will now be indepedent from block chain

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// AWAIT ERROR HANDLING:
    // Try / Catch
async function main(){      
    try {                                                            // TRY {}
        await fs.writeFile('something.txt', 'hello');                   
        console.log('done writing!');                                   
        const data = await fs.readFile('somefile.txt', 'utf8');        
        console.log(data);           
    } catch (error) {                                                // CATCH (error) {}
        console.log(error)
    }                                        
}


// When to use await:
    // If code uses fs module
    // DO NOT use if not needed (E.g):
        // function sum(n1, n2) => n1 + n2;     <-- Does not require await 



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------


/* 
Recap:

First covered: Synchronous Functions
    console.log <-- Is sync
    I/O         <-- Category of input/output operations
    ^^^         <-- fs.readfilesync(x)
                    ^^^^^^^^^^^^^^^^^^
                    We want to alternatively use ASYNC:
                    fs.readfile(x)

    Asynchronous:
        Callback
        Promises
            .then   <-- Syntax
            await   <-- Alternative to .then (newer, amazing version to .then)


    -------------
    New content:    
    -------------
    How to handle Large files?       <-- Such as 200GB + files
        
    Solution to handling large files:
        Stream
        ^^^^^^
        Once streaming is covered, all resources are covered to building a WEB SERVER

    
    CREATING WEBSERVER:
        Small files can use fs.readfile:
            html
            css 
        Large files require method for handling:
            2 hour movie (requires streaming) 
*/

// Buffer || File
    // Buffer:
        // fs.readfile('example.txt') RETURNS:
            // Container of file in bytes
            // Data structure to store and trasnfer arbitrary binary data
            // Only 1 data structure = bytes

            // Buffer is chunks of data from something (like a file) from a server (or other location)
                // buffer with chunks of data is sent and filled in destination
                // Buffers being sent has limit of how much it can hold



    // Stream:
        //  .createReadStream('example.txt')
            // Abstract interface for working with streaming data


// Other types of streams
    // Readable stream
    // Writable stream

    // Transform stream
        // Between readable and writable stream
        // Can manpulate data before being written out

// TRANSFORM STREAM:
    // 1. Write data (readable stream, uncompressed data)
    // 2. "Transform" the data
            // Transform stream
    // 3. Read transform (writable stream, compressed data)

    // GZIP EXAMPLE:
    /*
        Step 1. read stream
            file containing 'hello world'
            Readable stream 
            sends buffers to transform stream
        Step 2. Transform stream
            Takes buffers of 'hello world'
            compresses data (peice by peice)
                zlib.createGzip()
            Processes task in peices
        Step 3. Read transformed data
            File is zipped on destination side
            myfile.zip created 
            buffers fill .zip data piece by piece

    */

// PIPES
    // Connects a readable stream to a writable stream
    // Transform stream can be used as a destination as well
    // Returns the destination stream allowing for a chain of pipes

// Readable
    // .pipe(transform1)
        // .pipe(transform1)        <-- Unlike promise objects, Pipe
        // .pipe(transform2)        <-- Does not have centralized error handling
        // .pipe(transform3)        <-- Works with stream
        // .pipe(transform4)


// ------------------------
// PIPE WITH ERROR HANDLING = PIPELINE
    // stream.pipeline(..streams, callback) 
/*
Example:

const { pipeline } = require('stream')
const example = require(stream)
const [, , src, dest] = process.argv

pipeline(
    createReadsSream(src),          <-- READ STREAM
    createGzip(),                   <-- TRANSFORM STREAM (Zips all buffers)
    createWriteStream(dest),        <-- WRITE STREAM
    function onEnd (err) {          <-- ERROR HANDLING ON PIPE METHOD
        if (err) {
            console.error(err)
            process.exit(1)
        }

        console.log('Stream is done!')
    }
)

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
pipeline handles errors, unlike pipe


*/ 
