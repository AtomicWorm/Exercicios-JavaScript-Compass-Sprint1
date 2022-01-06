//Solução 1
let person = {name: 'Batman', power: ''};

function run(input, input2) {
    person.power = input
    person.trait = input2
    console.log(`O ${person.name} tem o poder de ${person.power} e é ${person.trait}.`)
};

run('dinheiro', 'rico');

//Solução 2
person = {name: 'Batman', power: ''};

function run2(input, input2) {
    person['power'] = input
    person['trait'] = input2
    console.log(`O ${person['name']} tem o poder de ${person['power']} e é ${person['trait']}.`)
};

run2('tecnologia', 'inteligente');
