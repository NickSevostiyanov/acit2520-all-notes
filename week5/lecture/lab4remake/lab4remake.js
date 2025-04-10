const fs = require('node:fs/promises');
const { EOL } = require('node:os');

const readmenu = (csvfile) => {
    return fs.readFile(csvfile, "utf8");
};

const groupmenuitems = (menudata) => {
    // EOL = End Of Line
    // const groupeditems = {
    //     'lunch': [{}],
    //     'dinner': []
    // };
    // const splitmenuitems = row.split(',');
    // const type = splitmenuitems[0];
    // const name = splitmenuitems[1];
    // const quantity = splitmenuitems[2];
    // const price = splitmenuitems[3];

    
    const groupeditems = {};
    menudata.split(EOL).forEach((row) => {
        const [type, name, quantity, price] = row.split(',');
        if (!(type in groupeditems)) {
            groupeditems[type] = [{name, quantity, price}];
        } else {
            groupeditems[type].push({name, quantity, price});
        }    
    });
    return groupeditems;
};


const makeprettymenu = (groupeddata) => {
    let menustr = '';
    for (const key in groupeddata) {
        menustr += `${key} items`;
        menustr += EOL; // \n
        groupeddata[key].forEach(row => {
            // const name = row.name;
            // const quantity = row.quantity;
            // const price = row.price;
            const {name, quantity, price} = row;
            menustr += `${price} ${name} ${quantity}`;
            menustr += EOL;

        });
    }
    return menustr;
};
const writemenu = (prettymenustring) => {
    return fs.writeFile('menu.txt' ,prettymenustring);
}



readmenu("menu.csv")
    .then((data) => {
        const groupeddata = groupmenuitems(data);
        const prettymenustr = makeprettymenu(groupeddata)
        return writemenu(prettymenustr);
    })
    // .then((groupeddata) => makeprettymenu(groupeddata))
    .then(() => console.log("Program is finished!"))
    .catch(err => console.log(err));





// .Split



