
async function getData() {
    try {
        const response = await fetch('https://thatsthespir.it/api');
        const data = await response.json();
        return data;
    } catch (e) {
        alert(e);
    }
}

getData().then(data => updateUI(data));

function updateUI(data) {
    const target = document.getElementById("quote");
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const quotePhoto = document.getElementById("quotePhoto");

    quoteText.innerHTML = data.quote;
    quoteAuthor.innerHTML = data.author;
    quotePhoto.setAttribute("src", data.photo);

    console.log(Object.keys(data));
}