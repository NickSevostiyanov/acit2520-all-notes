// To get started, create a file (with your mouse, manually) in VS Code called menu.csv 
// and paste the following contents into your VS Code window:
    // lunch,bento box b - sashimi,box combo,$9.59
    // dinner,vegetable sushi,6 rolls,$3.50
    // dinner,tuna roll,3 rolls,$4.50
    // dinner,roe,2 rolls,$3.95
    // lunch,bento box a - chicken teriyaki,box combo,$8.59

// Your Node.js program needs to read the file above, and write it to a file called menu.txt. 
// When you write it to a text file, it should look close to what you see below.
    // * Lunch Items *
    // $15.46  bento box a - chicken teriyaki, box combo  
    // $17.26	bento box b – sashimi, box combo  

    // * Dinner Items *
    //  $7.11	roe, 2 rolls   
    //  $8.10	tuna roll, 3 rolls  
    //  $6.30	vegetable sushi, 6 rolls


// Heads up: The CSV could change to look like the following 
// (note that we added dessert at the end):



// Modules
const fs = require('fs').promises;
const path = 'menu.csv';
/* 
Conventions:
[meal type] [meal name] [meal quantity] [price]
*/

// Read csv file
// Return list of list rows
function readcsv(path) {
  return fs.readFile(path, 'utf8')
    .then(data => {
      // Split data into lines
      const lines = data.trim().split('\n');

      // List to hold list of list format
      return lines.map(line => line.split(','));
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

  return fs.writeFile('menu.txt', output);
}

// Call readcsv with csv path and a callback to format list of lists
readcsv(path)
  .then(wordList => formatandgrouplists(wordList))
  .catch(err => console.error(err));

