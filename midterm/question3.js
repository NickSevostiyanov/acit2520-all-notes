const fs = require('fs/promises');

// ----------------------------
// 3. deleteSupply(coffeeType, quantity)

    // Functions defined from question 1
        // readSupplyFile
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

    // Functions defined from question 2
        // addSupply
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
                console.error('Error processing supply file:', err);
                throw err;
            }
        }

        // appendToSupply
        async function appendToSupply(coffeeType) {
            try {
                // Append coffeeType with new line
                await fs.appendFile('supply.txt', `\n${coffeeType}`);
            } catch (err) {
                console.error('Error appending to supply.txt:', err);
                throw err;
            }
        }

    
    // Delete item from supply.txt
    async function deleteSupply(coffeeType, quantity) {

        // Default structure for all add, delete, view functions
        const coffeeTypes = {
            'DR': 'dark-roast',
            'MR': 'medium-roast',
            'B': 'blonde'
        };
        
        if (!coffeeTypes.hasOwnProperty(coffeeType)) {
            throw new Error('Coffee type not found! Use: [DR, MR, B]');
        }

        const targetType = coffeeTypes[coffeeType];


        // -------------------------------------------------------------
        try {
            // First store supply.txt
            // Count num of original instances
            let supplyArray = await readSupplyFile();
            const originalCount = supplyArray.filter(type => type === targetType).length;
            
            // If given *
            if (quantity === '*') {
                // reinstate new array with everything that is NOT targetType
                supplyArray = supplyArray.filter(type => type !== targetType);
                console.log(`All ${targetType} coffees deleted.`);
            } else {
                // Math.min = get smallest value
                // If quantity < original count = original count - quantity
                // Elif quantity > original count = original count - original count
                const deleteCount = Math.min(originalCount, quantity);
                let deleted = 0;
                supplyArray = supplyArray.filter(type => {
                    // If type exists in array AND counter is not equal to counter:
                    if (type === targetType && deleted < deleteCount) {
                        // increment counter for display
                        deleted++;
                        return false;

                    }
                    return true;
                });
                // Display how many is deleted
                console.log(`${deleteCount} ${targetType} coffee${deleteCount > 1 ? 's' : ''} deleted.`);
            }
            
            // Write changed array to supply.txt
            await fs.writeFile('supply.txt', supplyArray.join('\n') + '\n');
        } catch (err) {
            console.error('Error processing supply.txt:', err);
            throw err;
        }
    }


// TESTING PROGRAM:
    // count = 8
    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err));

    // adds + 1
    addSupply('MR')
        .then(() => console.log('Added medium-roast to supply.txt'))
        .catch(err => console.error('Error:', err));

    // count = 9 (added 1)
    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err));

    // delete 2
    deleteSupply('MR', 2)
        .then(() => console.log('Deleted chosen coffees from supply.txt'))
        .catch(err => console.error('Error:', err));

    // count = 7 (deleted 2)
    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err));

    // delete all (7)
    deleteSupply('MR', '*')
        .then(() => console.log('Deleted chosen coffees from supply.txt'))
        .catch(err => console.error('Error:', err));

    // count = 0
    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err))
        .finally(() => console.log('Program is completed'));


