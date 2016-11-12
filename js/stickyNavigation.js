$(document).ready(function() {

    var winPos, navHeight, stickyPos;
    function refreshVar() {
        navHeight = $('.logo-menu-section').outerHeight(true);
        stickyPos = navHeight - 75; // .sticky-nav height=75px;
    }
    
    refreshVar();
    $(window).resize(refreshVar); // полезно, если появится адаптивность
    
    
    $(window).scroll(function() {
        winPos = $(window).scrollTop();
        
        
    if (winPos >= stickyPos) { 
        $('.logo-menu-section').addClass('sticky-nav');
        $('.logo-menu-section .container').attr('id', 'sticky-nav-container');        
    }
    else {
        $('.logo-menu-section').removeClass('sticky-nav');
        $('.logo-menu-section .container').removeAttr('id','sticky-nav-container');
    }
    });
    
});