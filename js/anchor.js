$(document).ready(function() {
    
    $('a[href^="#"]').click(function() {
        var elemClick = $(this).attr("href");
        var destination = $(elemClick).offset().top-75;
        
        $('html, body').animate( {scrollTop: destination}, 1000 );
        
        return false;
    });
    
});