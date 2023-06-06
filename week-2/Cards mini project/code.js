const cards = document.getElementsByClassName("card");
for (var i = 1; i < cards.length; i++) {
    cards[i].style.margin = "-86px 0px 0px " + i * 45 + "px";
}