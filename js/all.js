$(document).ready(function(){
    $('.faq-ans').hide();
    $('.minus').hide();
    $('.number-of-people').click(function(e){
        e.preventDefault();
        $('.font-num').text('500')
    })
    $('.faq-title').click(function(){
        $(this).find('.minus').toggle();
        $(this).find('.plus').toggle();
        $(this).toggleClass('active');
        $(this).siblings('.faq-ans').slideToggle();
    })
    $('btn-top').click(function(e){
        e.preventDefault();
        $('html').scrollTop(0);
    })
})

