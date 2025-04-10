// -----------------------------------------------------------------------------------------------
const mathHelpers = require('./mathHelpers');
    // Require = object
        // module.export = { distance }     <-- If Object name not given, default is variable name
        // else:
        // module.export = { 'bcit': distance}
            // mathHelpers.bcit()           <-- Distance Function
mathHelpers.distance();



// Instead using dot notation:
// Pull out exported object to be called

// Destructuring 
const { distance } = require('./mathHelpers');
distance();

// -----------------------------------------------------------------------------------------------


// Creating variables from variables 
// Dictionary Object
const person = {
    firstname: 'james',
    lastname: 'doe'
};

// Easier Method of Pull things out of Object:
    // Object destructuring
        const {firstname, lastname} = person;

    // Same thing as:
        // const firstname = person.firstname;
        // const lastname = person.lastname;


// ------------------------------------------------------
// Order matters in array destructuring: 
    // const [node, script, x1, y1, x2, y2] = process.argv;
// To skip [0] and [1]

        // const [, , x1, y1, x2 ,y2] = process.argv;
// OR
// Use slice to remove placeholder commas (for leaving [0] and [1] null)
        
const [x1, y1, x2, y2] = process.argv.slice(2)


// ---------------------------------------------------------
// Slice(2)     <--- Gives everything from 2-to the end
// const args = process.argv.slice(2);
// // Slice allows to start from [0]   <-- is actually [2]
// const node = args[0];
// const script = args[1];
// const x1 = args[0];
// const y1 = args[1];
// const x2 = args[2];
// const y2 = args[3];
// ---------------------------------------------------------


// If (err) {
    // Console.log(err)
// }

// mdkir already exists:
// [Error: EEXIST: file already exists, mkdir 'dataPoints'] {
//     errno: -17,
//     code: 'EEXIST',      <--- Describes error (already exists)
//     syscall: 'mkdir',
//     path: 'dataPoints'
//   }
  

// Gives Absolute path all the way to current directory
const path = require('node:path');
path.join(__dirname, "dataPoints", "points.txt");
console.log(__dirname);