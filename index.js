const fetch = require("node-fetch");

module.exports = function requestMultipleUrls(urls){
    // use map() to fetch and handle the response for each url
    let results = Promise.all(urls.map(url =>
        fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .catch(error => console.log('There was a problem!', error))
    ));
    return results;
}

function parseJSON(response) {
    return response.json();
}
  
function checkStatus(response){
    if(response.ok){
        return Promise.resolve(response);
    } else{
        return Promise.reject(new Error(response.statusText));
    }
}


