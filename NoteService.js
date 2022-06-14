var request = require("request");

var api = "62a83ed11a51777906affa16";
var url = "https://averi-ca73.restdb.io/rest/notes";

export async function getNotes() {
    var options = {
        method: 'GET',
        url: url,
        headers:
        {
            'cache-control': 'no-cache',
            'x-apikey': api
        }
    };

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) reject(error);

            console.log(JSON.parse(body));
            resolve(JSON.parse(body));
        });
    }
    );
}

export async function CreateNote(title, description, date) {
    var options = {
        method: 'POST',
        url: url,
        headers:
        {
            'cache-control': 'no-cache',
            'x-apikey': api,
            'content-type': 'application/json'
        },
        body: { title: title, description: description, date: date },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
}

export async function DeleteNote(id) {
    var options = {
        method: 'DELETE',
        url: url + '/' + id,
        headers:
        {
            'cache-control': 'no-cache',
            'x-apikey': api,
            'content-type': 'application/json'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

}