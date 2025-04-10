const fs = require("node:fs/promises");
const { EOL } = require("node:os")

function readCSV(csv) {
    return fs.readFile(csv, "utf8");
};

function groupData(data) {
    const groupedItems = {};

    data.split(EOL).forEach(row => {
        
    });
};

function writeCSV(groupedData) {
    return fs.writeFile("file name", groupedData);
};

async function main() {
    try {
        const data = await readCSV("file here");
        const groupedData = groupData(data);
        await writeCSV(groupedData)
    } catch (error) {
        console.log(error);
    }
}

main();