const stream = require('node:stream');
const { Transform, pipeline } = require('node:stream');

// Question 1, basic .pipe()
// process.stdin.pipe(process.stdout)

// Question 1, pipeline()
// pipeline(
//     process.stdin,
//     process.stdout,
//     (err) => {
//         if (err) {
//             console.error('Pipeline failed', err);
//         } else {
//             console.log('Pipeline succeeded')
//         }
//     }
// );


// Question 2

// const uppercaseTransform = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().toUpperCase());
//         callback();
//     }
// });

// pipeline(
//     process.stdin,
//     uppercaseTransform,
//     process.stdout,
//     (err) => {
//         if (err) {
//             console.error('Pipeline failed', err);
//         } else {
//             console.log('Pipeline succeeded')
//         }
//     }
// );

// Question 3const { createReadStream } = require('fs');

const fs = require('fs');
const zlib = require('zlib');
const csv = require('csvtojson');

// Accumulate profit for Italy
let totalProfit = 0;
let recordCount = 0;
let matchingRecordCount = 0;

// Function to filter and sum records
const filterAndSumRecords = (record) => {
  recordCount++;
  if (record.country === 'Italy') {
    matchingRecordCount++;
    totalProfit += parseFloat(record.profit);
    console.log('Matching record:', record);  // Debugging log
  }
};

// Process gzipped CSV file
fs.createReadStream('data.csv.gz')
  .pipe(zlib.createGunzip())
  .pipe(csv())
  .on('data', (data) => {
    try {
      const record = JSON.parse(data.toString());
      filterAndSumRecords(record);
    } catch (err) {
      console.error('Error parsing record:', err);
    }
  })
  .on('end', () => {
    const formattedProfit = `$${totalProfit.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    console.log(`Total records processed: ${recordCount}`);
    console.log(`Total matching records: ${matchingRecordCount}`);
    console.log(`Total profit for Italy: ${formattedProfit}`);
  })
  .on('error', (err) => {
    console.error('Error:', err);
  });
