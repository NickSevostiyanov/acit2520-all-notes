const fs = require('fs/promises');

// ----------------------------
// 2. addSupply(coffeeType)

    // Appends coffeeType to supply.txt
    async function appendToSupply(coffeeType) {
        try {
            // Append coffeeType with new line
            await fs.appendFile('supply.txt', `\n${coffeeType}`);
        } catch (err) {
            console.error('Error appending to supply.txt:', err);
            throw err;
        }
    }

    // Same function as question 1.
    async function addSupply(coffeeType) {
        // Dictionary of possible types
        const coffeeTypes = {
            'DR': 'dark-roast',
            'MR': 'medium-roast',
            'B': 'blonde'
        };
        
        // If given type is not in dictionary:
        if (!coffeeTypes.hasOwnProperty(coffeeType)) {
            throw new Error('Coffee type not found! Use: [DR, MR, B]');
        }

        // Store user choice
        const targetType = coffeeTypes[coffeeType];

        try {
            // Use append
            await appendToSupply(targetType);
        } catch (err) {
            console.error('Error processing supply.txt:', err);
            throw err;
        }
    }

    addSupply('MR')
        .then(() => console.log('Successfully added to supply.txt'))
        .catch(err => console.error('Error:', err));
