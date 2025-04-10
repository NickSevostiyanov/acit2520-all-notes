// Modules
const fs = require('fs');
const path = 'menu.csv';
/* 
Conventions:
[meal type] [meal name] [meal quantity] [price]
*/


// Read csv file
// Return list of list rows
function readcsv(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return callback(err);

    // Split data into lines
    const lines = data.trim().split('\n');

    // List to hold list of list format
    const wordList = lines.map(line => line.split(','));

    // Invoke callback with list of list rows
    callback(null, wordList);
  });
}

// Format + group items
function formatandgrouplists(wordList) {
    
    // Empty lists for formatting
  const lunchitems = [];
  const dinneritems = [];
  const dessertitems = [];

    // Each row in list
  wordList.forEach(item => {
    const category = item[0].trim(); // Trim spaces around list list items
    const description = item.slice(1, -1).join(', ').trim(); // remove meal type then join to list
        // Let variable is mutable
    let price = parseFloat(item[item.length - 1].trim().replace('$', '')); // Extract and parse the price
    price *= 1.8; // Multiply the price by 1.8

    // Check the category and add the items to the respective list
    if (category === 'lunch') {
      lunchitems.push(`$${price.toFixed(2)} ${description}`);
    } else if (category === 'dinner') {
      dinneritems.push(`$${price.toFixed(2)} ${description}`);
    } else if (category === 'dessert') {
      dessertitems.push(`$${price.toFixed(2)} ${description}`);
    }
  });

// Write formatted list to menu.txt
  const output = [
    '* Lunch Items *',
    ...lunchitems,
    '\n* Dinner Items *',
    ...dinneritems,
    dessertitems.length > 0 ? '\n* Dessert Items *' : '',
    ...dessertitems,
  ].join('\n');

  fs.writeFileSync('menu.txt', output);
}

// Call readcsv with csv path and a callback to format list of lists
readcsv(path, (err, wordList) => {
  if (err) {
    console.error(err);
    return;
  }
  formatandgrouplists(wordList);
});
