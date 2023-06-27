const cart = $('#cart')

$('.item').on("click", function () {
    if ($(this).data().instock === true){
        cart.append(`<div class=cart-item>${$(this).text()}</div>`)
    }
}
)