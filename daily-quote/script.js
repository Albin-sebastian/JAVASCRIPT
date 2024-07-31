const quote = document.getElementById("quote");
const author = document.getElementById('author');
const api_url = 'https://api.quotable.io/random';
const newQuote = document.getElementById('new-quote');
const tweet = document.getElementById('tweet');

const getQuote = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_url);

newQuote.addEventListener('click', () => {
  getQuote(api_url);
});
tweet.addEventListener('click', () => {
  window.open(" https://twitter.com/intent/tweet?text=Hello%20world", "Tweet window", "width=600,height=300")
})