// When the generator button is clicked, you should console log the following values for its computer:
// The processor ID
// The computer’s data-id - also, push this to an array in an object like this: {cmp_id: id}
// The BUS number


$('.generator').on('click', function(){
    let res = "The processor ID:" + $(this).parent().attr('id') + "\n"
    res += "The computer’s data-id: " + $(this).parents('.computer').data().id + '\n'
    res += "The BUS number: " + $(this).parent().siblings(".BUS").text()
    console.log(res)
})

// When the validator button is clicked, you should console log the following values for its computer:
// The generator’s text
// The MB
// Both QRs

$('.validator').on('click', function(){
    let res = "The generator’s text: " + $(this).parents(".ram").siblings(".processor").children(".generator").text() + "\n"
    res += "The MB: " + $(this).parents(".ram").siblings(".MB").text() + '\n'
    $(this).parents(".ram").siblings(".processor").children().not('.generator').each(function( index ) {
        res += "QR" + index + ": " + $( this ).text() + "\n";
      })
    console.log(res)
})