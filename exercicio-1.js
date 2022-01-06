//Solução 1
function run(input) {
    if(input === 'carro') {
        return true
    }
    else {
        return false
    }
};

console.log(run('carro')); //retorna true

//Solução 2
function run2(input) {
    if(input !== 'carro') {
        return false
    }
    else {
        return true
    }
};

console.log(run2('carro')); //retorna true

//Solução 3
function run3(input) {
    const answer = (input === 'carro' ? true : false)
    return answer
};

console.log(run3('moto')); //retorna false
