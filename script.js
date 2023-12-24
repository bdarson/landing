$(document).ready(function() {
$('#navigation li a').hover(
    function(){
        //we get our current filename and use it for the src
        var linkIndex = $(this).attr("data-filename");
        $('.right-sec-upper img')
            .fadeOut(200, function() {
                $('.right-sec-upper img').attr('src', './images/'+linkIndex+'.jpg')
            })
            .fadeIn(200);
    },
    function(){
        $('.right-sec-upper img').fadeOut(200);
    }
);
});