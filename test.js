'use strict';

const requestMultipleUrls = require('./index');
const assert = require('assert');


//example json to test against
let json = []

try {
    json.push(require('./jsontest/ftse-fsi.json'));
    json.push(require('./jsontest/gbp-hkd.json'));
    json.push(require('./jsontest/gbp-usd.json'));
} catch (error) { }


const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];


it('assertion success', async () => {
    const result = await requestMultipleUrls(urls);
    assert.deepEqual(result, json);
});


it('assertion fail', async () => {
    const result = await requestMultipleUrls(urls);
    assert.notEqual(result, json);
});