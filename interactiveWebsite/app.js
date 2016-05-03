var main = function () {
 "use strict";

 var toDos = [
 "Finish writing this book",
 "Take Gracie to the park",
 "Answer emails",
 "Prep for Monday's class",
 "Make up some new ToDos",
 "Get Groceries"
 ];
  //Selects all the tabs
  $(".tabs a span").toArray().forEach(function (element) {

    //When the element is clicked
    $(element).on("click", function () {

      //reference to element
      var $element = $(element);
      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")) {
           console.log("FIRST TAB CLICKED!");
          } else if ($element.parent().is(":nth-child(2)")) {
              console.log("SECOND TAB CLICKED!");
          } else if ($element.parent().is(":nth-child(3)")) {
              console.log("THIRD TAB CLICKED!");
          }
      return false;
    });
    //click handler
  });
};
$(document).ready(main);
