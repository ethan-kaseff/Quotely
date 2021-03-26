import getNewQuote from './http-request.js';

document.addEventListener('DOMContentLoaded', () => {
    let quoteElement;
    const savedList = document.getElementById('saved-quotes');

    document.getElementById('new-quote').addEventListener('click', async () => {

        quoteElement = await getNewQuote();
        document.getElementById('quote-text').innerHTML = quoteElement.html;
    })

    document.getElementById('save-quote').addEventListener('click', () => {
        // Make sure I have new data
        localStorage.setItem(`Author: ${quoteElement.author}`, quoteElement.html);  
        console.log(quoteElement);

        // Get data that might already be there
        Object.keys(localStorage).forEach(function (key) {
            if (key.includes('Author')) {
                const newItem = document.createElement('li');
                newItem.innerHTML = localStorage.getItem(key);
                savedList.append(newItem);
            }
        });

        // Add to older object

        // push to local storage 
    })







})