console.log("Let's get this party started!");

const btn = document.querySelector("#addGiphy");
btn.addEventListener('click', getGif);

async function getGif(e) {
    e.preventDefault();
    let searchWord = document.querySelector("#input").value;
    console.log(searchWord);
    const res = await axios.get('http://api.giphy.com/v1/gifs/search?', { params: { q: searchWord, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" } })
    console.log(res);
    const limit = res.data.data.length;
    console.log(limit);
    let randomGiph = Math.floor(Math.random() * limit);
    let src = res.data.data[randomGiph].images.original.url;
    const img = document.createElement("img");
    const li = document.createElement("li");
    img.src = src;
    li.append(img);
    const ul = document.querySelector("ul");
    ul.append(li);
    return ul;
}

function remove(e) {
    e.preventDefault();
    const allLi = document.querySelectorAll("li");
    for (let li of allLi ) {
        li.remove();
    }
}

const deleteButton = document.querySelector("#removeImg");
deleteButton.addEventListener('click', remove);