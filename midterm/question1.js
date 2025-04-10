const fs = require('fs/promises');

// ----------------------------
// 1. viewAllSupply(coffeeType)

    // Read supply.txt
    async function readSupplyFile() {
        try {
            // If works + human readable (utf8)
            const data = await fs.readFile('supply.txt', 'utf8');
            return data.trim().split('\n');
        } catch (err) {
            // Else supply.txt is not good
            console.error('Error reading supply file:', err);
            throw err;
        }
    }

    // ViewAllSupply
    async function viewAllSupply(coffeeType) {
        // Dictionary for possible coffeeTypes
        const coffeeTypes = {
            'DR': 'dark-roast',
            'MR': 'medium-roast',
            'B': 'blonde'
        };
        
        // If given type is not in dictionary:
        if (!coffeeTypes.hasOwnProperty(coffeeType)) {
            throw new Error('Coffee type not found! Use: [DR, MR, B]');
        }

        // If given type is real
        // Store it in variable
        const targetType = coffeeTypes[coffeeType];

        try {
            // Give all coffeetypes
            const supplyArray = await readSupplyFile();
            // Count number of occurences
            const count = supplyArray.filter(type => type === targetType).length;
            return count;
        } catch (err) {
            console.error('Could not proccess supply.txt!', err);
            throw err;
        }
    }

    // .then and .catch chain for errors
    //     Coffee type
    //            VVVV
    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err));

