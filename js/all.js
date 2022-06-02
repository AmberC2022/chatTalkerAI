$(document).ready(function(){
    $('.faq-ans').hide();
    $('.minus').hide();
    $('.faq-title').click(function(){
        $(this).find('.minus').toggle();
        $(this).find('.plus').toggle();

        $(this).toggleClass('active');
        $(this).siblings('.faq-ans').slideToggle();
        // siblings().removeClass('active');
        // siblings().slideup();
    })
    $('btn-top').click(function(e){
        e.preventDefault();
        $('html').scrollTop(0);
    })
    
    
})

