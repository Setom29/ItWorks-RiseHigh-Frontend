const googBooksAPIURL = "https://www.googleapis.com/books/v1/volumes?q="

const fetchBooks = function(fetchType, fetchValue){
    $.ajax({
        method: "GET",
        url: `${googBooksAPIURL}${fetchType}:${fetchValue}`,
        success: function (data) {
            for (let i = 0; i < data.items.length; i++) {
                console.log(
                    `Title: ${data.items[i].volumeInfo.title}\n` + 
                    `Authors: ${data.items[i].volumeInfo.authors}\n` + 
                    `ISNB: ${data.items[i].volumeInfo.industryIdentifiers[0].identifier}`);
            }

        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}

const googBooks__button = $(".goog-books__button")
const googBooks__valueInput = googBooks__button.siblings(".goog-books__value-input")
const googBooks__typeDropdown = googBooks__button.siblings(".goog-books__type-dropdown")


googBooks__button.on("click", function(){
    fetchBooks(googBooks__typeDropdown.val(), googBooks__valueInput.val())
})

const giphyButton = $(".giphy-block__button")
const giphyValueInput = giphyButton.siblings(".giphy-block__value-input")
const giphyTokenInput = giphyButton.siblings(".giphy-block__token-input")
const giphyGifContainer = giphyButton.siblings(".giphy-block__container")

const fetchGifs = function(token, searchValue){
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${searchValue}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
        success: function (response) {
            giphyGifContainer.attr('src',response.data[0].embed_url)

        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}




giphyButton.on("click", function(){
    fetchGifs(giphyTokenInput.val(), giphyValueInput.val())
})

