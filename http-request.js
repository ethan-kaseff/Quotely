//const fetch = require('node-fetch');
//import fetch from 'node-fetch'

import Quote from './quote.js';

export default async function getNewQuote() {
    const res = await _httpRequest();
    return new Quote(res[0].q, res[0].a, res[0].h);
}

async function _httpRequest() {
    const response = await fetch("https://zenquotes.io/api/random");
    return await response.json();
}