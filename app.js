const apiurl = "https://api.quotable.io/quotes/random";
const quotes = document.querySelector("#quote");
const authors = document.querySelector("#author");
const twitter = document.querySelector(".twitter");

async function generatequote(){
    let response = await fetch(apiurl);
    let data = await response.json();
    quotes.innerHTML = data[0].content;
    authors.innerHTML = data[0].author;
    console.log(data);
}
generatequote();

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + " --- by " + authors.innerHTML, "tweet window", "width=600 , height=300");
}