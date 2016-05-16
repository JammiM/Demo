/*  This program retrieves JSON data from the flickr API

*/

var main = function () {

    "use strict";

    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";

    $.getJSON(url, function (flickrResponse) {

        flickrResponse.items.forEach(function (photo) {

            //Creates el
            var $img = $("<img>").hide();

            //Sets it's attr
            $img.attr("src", photo.media.m);

            //Adds it to the main tag
            $("main .photos").append($img);

            $img.fadeIn(1000);


            //console.log(photo.media.m);
        });

        console.log(flickrResponse);
    });


};


$(document).ready(main);
