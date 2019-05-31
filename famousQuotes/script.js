const quotes = [

    {
        name: 'Jamie Lannister',
        quote: 'The things I do for love.',

    },

    {
        name: 'Ned Stark',
        quote: 'The man who passes the sentence should swing the sword.'

    },
    {
        name: 'Tyrion Lannister',
        quote: 'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.'

    },
    {
        name: 'Ygritte',
        quote: "You know nothing, Jon Snow."

    },
    {
        name: 'Tyrion Lannister',
        quote: "I drink and I know things."

    },
    {
        name: 'Cersei Lannister',
        quote: "When you play the game of thrones, you win or you die. There is no middle ground."

    },
    {
        name: 'Jon Snow',
        quote: "My watch has ended."

    },
    {
        name: 'Sansa Stark',
        quote: "Thank you for all your many lessons, Lord Baelish. I will never forget them."

    },
    {
        name: 'Arya Stark',
        quote: "A girl has no name."

    },
    {
        name: 'The Hound',
        quote: "Fuck the Kingsguard, fuck the city. Fuck the king."

    },

]
// Declared the Variables //  Access 
const quoteBtn = document.querySelector('#quoteBtn');
const author = document.querySelector('#author');
const quote = document.querySelector('#quote');

// Target them //
quoteBtn.addEventListener('click',displayQuote);

// Create the function // -- Use Random Number to target them in the Array // 
function displayQuote() {

let number = Math.floor(Math.random()*quotes.length);
author.innerHTML = quotes[number].name; // Name of Author
quote.innerHTML = quotes[number].quote; // Get the quote 

}

