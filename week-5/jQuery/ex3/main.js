$("body").append(
    `
    <div class="box-container">
        <div class="box"></div>
        <div class="box"></div>
    </div>
`
);

$('.box').hover(function () {
    $(this).removeClass('box-red')
    $('.box').not($(this)).addClass('box-red')
})

$('.box-container').hover(function(){}, function(e) {
    $('.box').removeClass('box-red')
  });