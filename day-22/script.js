const api_Url = "https://api.quotable.io/random"
async function getRandom(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.content
    author.innerHTML = data.author
}

getRandom(api_Url);

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

const tweet = document.querySelector('#tweet');

tweet.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ---- by ${ author.innerHTML}`, 'tweet Window',"width=500 ,height=300");
})
