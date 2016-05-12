var main = function () {
  "use strict";

  $.getJSON("cards/aceOfSpades.json", function (card) {

    var $cardParagraph = $("<p>");
    $cardParagraph.text(card.rank + " of " + card.suit);
    $("main").append($cardParagraph);
    console.log(card);

  });//getJSON

  $.getJSON("cards/hand.json", function (hand) {

   var $list = $("<ul>");
   // hand is an array, so iterate over it using a forEach loop
   hand.forEach(function (card) {

     // create a list item to hold the card
     // and append it to the list
     var $card = $("<li>");
     $card.text(card.rank + " of " + card.suit);
     $list.append($card);

   });

   // append the list to main
   $("main").append($list);

  });//getJSON

};//main

$(document).ready(main);
