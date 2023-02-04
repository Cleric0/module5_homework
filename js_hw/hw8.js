
// задание 8

let Voltron = new Map();
Voltron.set ('Shiro', 'black');
Voltron.set ('Kit', 'red');
Voltron.set ('Lance', 'blue');
Voltron.set ('Pidge', 'green');
Voltron.set ('Henk', 'yellow');

for (let name of Voltron.keys()){
    console.log("ключ -", name);
}

for (let color of Voltron.values()){
    console.log("значение -", color);
}