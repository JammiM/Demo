var main = function () {

  "use strict";

  var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";

    $.getJSON(url, function (flickrResponse) {

      flickrResponse.items.forEach(function (photo) {

        //Creates el
        var $img = $("<img>");

        //Sets it's attr
        $img.attr("src", photo.media.m);

        //Adds it to the main tag
        $("main .photos").append($img);

        //console.log(photo.media.m);
      });

     console.log(flickrResponse);
   });


};


$(document).ready(main);
