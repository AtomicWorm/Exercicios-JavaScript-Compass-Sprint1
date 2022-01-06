//Solução 1
let person = {name: 'Batman', power: ''};

function run(input) {
    person.power = input
    console.table(person)
};

run('money');

//Solução 2
person = {name: 'Batman', power: ''};

function run2(input) {
    person['power'] = input
    console.table(person)
};

run2('technology');
