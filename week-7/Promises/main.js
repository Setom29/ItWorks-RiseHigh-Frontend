randomWordURL = "https://random-word-api.herokuapp.com/word?length=6"
googleBooksURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
gifsURL = "https://api.giphy.com/v1/gifs/search?api_key=Sm2reClkiUz9PVcRXz6wYegQGQrrJauW&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips&q="
const gifContainer = document.querySelector(".giphy-block__container")


function getData(link) {
    return new Promise((resolve, reject) => {
      fetch(link)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed');
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

// getData(randomWordURL).then(word => getData(googleBooksAPIURL + word[0])).then(books => console.log(books))
getData(randomWordURL).then(word => {
    console.log(word);
    let bookPromise = getData(googleBooksURL + word[0])
    let gifPromise = getData(gifsURL + word[0])
    return Promise.all([bookPromise, gifPromise])
}).then((promiseResults)=> {
    let [books, gif] = promiseResults
    books.items.forEach(book => {
        let bookElement = document.createElement("div")
        bookElement.innerText = book.volumeInfo.title
        document.body.appendChild(bookElement)
    })
    console.log(gifContainer)
    gifContainer.setAttribute('src', gif.data[0].embed_url)
    
})
