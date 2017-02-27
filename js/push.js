function openURL(href){

        var link = href;  //$(this).attr('href');
        $.ajax({
            url: link,
            type: 'POST',
            cache: false,
            success: function (result) {
                $('#content').html(result);
            }
        });
        window.history.pushState({href: href}, '', href);
}

$(document).ready(function() {

   $(document).on('click', 'a', function () {
     openURL($(this).attr("href"));
     return false; //intercept the link
   });

   window.addEventListener('popstate', function(e){
      if(e.state)
        openURL(e.state.href);
   });

});
