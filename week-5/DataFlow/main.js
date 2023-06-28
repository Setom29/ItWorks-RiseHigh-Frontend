const posts = [ {"name": "Nick", "text": "Hi"} ]
const nameInput = $('.form__input-name')
const textInput = $('.form__input-text')



const render = function(){
    $(".container").html('');
    for (let post of posts){
        
        $(".container").append(`<div>${post.name}: ${post.text}</div>`)
    }
}   
render()

$('.form__button').on("click", function(event){
    event.preventDefault()
    posts.push({"name": nameInput.val(), "text": textInput.val()})
    render()
})

