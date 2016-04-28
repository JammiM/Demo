/*  This simple program adds a new comment to
    the page when the user enters it. 
*/
var main = function () {
 "use strict";

  /*  Add a new comment if the input field is not empty */
  var addCommentFromInputBox = function () {
  	var $new_comment;
  	if ($(".comment-input input").val() !== "") {
  		 $new_comment = $("<p>").text($(".comment-input input").val());
  		 $new_comment.hide();
  		 $(".comments").append($new_comment);
  		 $new_comment.fadeIn();
  		 $(".comment-input input").val("");
  	 }
  };//addCommentFromInputBox

   $(".comment-input button").on("click", function (event) {
   	addCommentFromInputBox();
   });

   /*   When the enter button is pressed, addCommentFromInputBox is called*/
   $(".comment-input input").on("keypress", function (event) {
   	if (event.keyCode === 13) {
   		   addCommentFromInputBox();
   		  }
   });//.comment-input input

};//main

$(document).ready(main);
