var main = function () {
 "use strict";

 $(".comment-input button").on("click", function (event) {
	  var $new_comment;

 if ($(".comment-input input").val() !== "") {
	 var $new_comment = $("<p>").text($(".comment-input input").val());
	 $(".comments").append($new_comment);
	 $(".comment-input input").val("");
 	}//if

 });//onClick

$(".comment-input input").on("keypress", function (event) {
 console.log("this is the keyCode " + event.keyCode);
});









};//main


$(document).ready(main);