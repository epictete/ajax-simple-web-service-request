
// async function getData() {
//     try {
//         const response = await fetch('https://thatsthespir.it/api');
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         alert(e);
//     }
// }
// getData().then(data => updateUI(data));

let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://thatsthespir.it/api', true)
xhr.onload = function () {
    if (this.status === 200) {
        let data = JSON.parse(this.responseText);
        updateUI(data);
    }
}
xhr.send();

function updateUI(data) {
    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const quotePhoto = document.getElementById("quotePhoto");

    quoteText.innerHTML = data.quote;
    quoteAuthor.innerHTML = data.author;
    quotePhoto.setAttribute("src", data.photo);
}