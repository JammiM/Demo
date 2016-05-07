var main = function () {
  "use strict";

//  console.log("Hello W");

  $.getJSON("cards/aceOfSpades.json", function (card) {


    var $cardParagraph = $("<p>");

    $cardParagraph.text(card.rank + " of " + card.suit);

    $("main").append($cardParagraph);


    console.log(card);

  });//getJSON

};//main

$(document).ready(main);
