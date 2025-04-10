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
            console.error('Error processing supply file:', err);
            throw err;
        }
    }

    addSupply('MR')
        .then(() => console.log('Successfully added to supply.txt'))
        .catch(err => console.error('Error:', err));

    
// ----------------------------
// 3. deleteSupply(coffeeType, quantity)

    // Functions defined from question 1
        // readSupplyFile
    // Functions defined from question 2
        // viewAllSupply
        // addSupply

    
    // Delete item from supply.txt
    async function deleteSupply(coffeeType, quantity) {
        const coffeeTypes = {
            'DR': 'dark-roast',
            'MR': 'medium-roast',
            'B': 'blonde'
        };

        if (!coffeeTypes.hasOwnProperty(coffeeType)) {
            throw new Error('Coffee type not found! Use: [DR, MR, B]');
        }

        const targetType = coffeeTypes[coffeeType];

        try {
            let supplyArray = await readSupplyFile();
            const originalCount = supplyArray.filter(type => type === targetType).length;
            
            if (quantity === '*') {
                supplyArray = supplyArray.filter(type => type !== targetType);
                console.log(`All ${targetType} coffees deleted.`);
            } else {
                const deleteCount = Math.min(originalCount, quantity);
                let deleted = 0;
                supplyArray = supplyArray.filter(type => {
                    if (type === targetType && deleted < deleteCount) {
                        deleted++;
                        return false;
                    }
                    return true;
                });
                console.log(`${deleteCount} ${targetType} coffee${deleteCount > 1 ? 's' : ''} deleted.`);
            }

            await fs.writeFile('supply.txt', supplyArray.join('\n') + '\n');
        } catch (err) {
            console.error('Error processing supply file:', err);
            throw err;
        }
    }

    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err));

    addSupply('MR')
        .then(() => console.log('Successfully added medium-roast to supply file'))
        .catch(err => console.error('Error:', err));

    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err));

    deleteSupply('MR', 2)
        .then(() => console.log('Successfully deleted specified coffees from supply file'))
        .catch(err => console.error('Error:', err));

    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err));

    deleteSupply('MR', '*')
        .then(() => console.log('Successfully deleted specified coffees from supply file'))
        .catch(err => console.error('Error:', err));

    viewAllSupply('MR')
        .then(count => console.log('Medium roast count:', count))
        .catch(err => console.error('Error:', err))
        .finally(() => console.log('Program is completed'));


