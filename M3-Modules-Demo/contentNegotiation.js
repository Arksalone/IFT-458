import fetch from 'node-fetch';

var query = 'https://swapi.dev/api/people/1';

fetch(query, {
        method: 'GET',
        headers: {
            'content-Type': 'application/xml',
            'accept': 'application/json',
            'user-Agent': '*'
        },
    }).then(function (response) {
        console.log(`response = ${response}`);
        return response.text();
    })
    .then(function (xml) {
        // convert to workable json 
        console.log(`XML = ${xml}`); // json

    })
    .catch((error) => {
        console.error('Error:', error);
    });