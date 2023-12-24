$(document).ready(function() { //initializes the script
$('#navigation li a').hover( //triggers the code below on hover
    function(){
        //we get our current filename and use it for the src
        var linkIndex = $(this).attr("data-filename"); //sets the linkIndex variable so it knows which image to grab - data-filename is a custom attribute
        $('.right-sec-upper img')
            .fadeOut(200, function() { //makes the image switch a function of the fadeout, hiding it
                $('.right-sec-upper img').attr('src', './images/'+linkIndex+'.jpg')
            })
            .fadeIn(200); //fades the new image in
    },
    function(){
        $('.right-sec-upper img').fadeOut(200); //fades the old image out when mouseOff is triggered
    }
);
});