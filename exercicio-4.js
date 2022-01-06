let json = '{"name":"Batman"}';

//Solução 1
function run(input) {
    json = JSON.parse(input)
    json.name = "Superman"
    json = JSON.stringify(json)
    console.log(json)
};

run(json);

//Solução 2
json = '{"name":"Batman"}';

function run(input) {
    let parsedJSON = JSON.parse(input)
    parsedJSON['name'] = "Superman"
    json = JSON.stringify(parsedJSON)
    console.log(json)
};

run(json);
