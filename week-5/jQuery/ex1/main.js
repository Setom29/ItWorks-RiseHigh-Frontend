// ex1
$('.people-form__button').on('click', function(){
    
    $('.people-form__list').append($(`<li class="people-form__person">${$('.people-form__input').val()}</li>`))
    $('.people-form__input').val("")
  })

//   ex2
  $('body').on('click', ".people-form__person", function(){
    $(this).remove()
  })