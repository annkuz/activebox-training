$(document).ready(function() {
    var width = $('.slider-image-side').width();
    var buttonIndex, prevIndex=0, countMoves = 0;
    $('.slides>li').width(width);
    
    //positioning
    $('.slides').css('left', -width);
    $('.slides>li:last-child').prependTo('.slides');
    
    //move slides forward
    function nextSlide() {
        $('.slides').animate({
            'margin-left':-width
        },500, function(){
            $('.slides>li:first-child').appendTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }
    
    //move slides backward
    function prevSlide() {
        $('.slides').animate({
            'margin-left':width
        },500, function(){
            $('.slides>li:last-child').prependTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }
    
    
    $('.slider-button>li').click(function(){
         buttonIndex = $(this).index();
        
        $('.slider-button>li').eq(prevIndex).removeAttr('id', 'active-slide-button');
        $('.slider-button>li').eq(buttonIndex).attr('id', 'active-slide-button');
          
        countMoves = buttonIndex-prevIndex;
        
        if( countMoves > 0 ) {
           for( var i = 1; i <= countMoves; i++) {
               nextSlide();
           }
        }
        else if( countMoves < 0 ) {
           for( var i = -1; i >= countMoves; i--) {
               prevSlide();
           }
        }
        
        prevIndex = buttonIndex;
    });
    
    
});