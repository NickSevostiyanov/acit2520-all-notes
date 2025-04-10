// function powerOf(number1, number2, callback) {
//     if (typeof number1  !== 'number' || typeof number2 !== 'number') {
//         return new Error('First and second must be num');
//     } else {
//         const result = Math.pow(number1, number2);
//         return result;
//     }
// }

// powerOf(3, 4, function(err, result) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result)
//     }
// });

// const fs = require('fs');

// fs.readFile('file1.txt', 'utf8', (err, fileTwo) => {
//     if(err) {
//         console.log(err);
//     }
//     fs.readFile(fileTwo, 'utf8', (err, fileThree) => {
//         if(err) {
//             console.log(err);
//         }
//         fs.readFile(fileThree, 'utf8', (err, fileFour) => {
//             if(err) {
//                 console.log(err);
//             }
//             fs.readFile(fileFour, 'utf8', (err, fileFourResult) => {
//                 if(err) {
//                     console.log(err);
//                 }
//                 console.log('contents of file4 are:' $(fileFourResult))    
//             })
//         })
//     })
// })


// const { argv } = require("process");

// const sum = (n1, n2) => {
//     return n1 + n2;
// }

// const x1 = argv[2];
// const y1 = argv[3];
// const x2 = argv[4];
// const y2 = argv[5];

// console.log(sum(x1, y1));

// let squareRoot = num => return Math.sqrt(num);
// let square = num => return num * num;
// module.exports = { squareRoot, square };


// const fs = require("fs");

// fs.writeFile("myfile.txt", "some content", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.readFile("myfile.txt", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         })
//     }
// })

const fs = require("fs");

const getStory = (storyFile) => {
    fs.readFile(storyFile, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return data + " is the best story ever!";
        }
    });
}

const writeStory = (fileName, text) => {
    fs.writeFile(fileName, text, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

writeStory("story.txt", "The adventures of Tom Sawyer", (err) => {
    if (err) {
        console.log(err);
    } else {
        getStory("story.txt", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});