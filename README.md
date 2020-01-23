# Request multiple URLs

 Fetch an array of URLs which contain JSON data and returns their contents in a promise

## Installation

```console
npm install @deborahkwh/request-multiple-urls
```

## Usage Example

``` javascript
const requestMultipleUrls = require('@deborahkwh/request-multiple-urls');


const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];


requestMultipleUrls(urls).then(urlContent => {
    //print each item in array
    console.log(urlContent);
});
```
