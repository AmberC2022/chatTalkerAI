$(document).ready(function(){
    function initSwiper() {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,            
          /* 斷點設定 */
            breakpoints: {
            /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
            992: {
                slidesPerView: 3
            },
            /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
            768: {
                slidesPerView: 3
            },
            /* 更小時都顯示 1 欄 */
            0: {
                slidesPerView: 1
            }
            },
          /* 卡片元素的間隔 */
            spaceBetween: 16,
            pagination: {
            /* 想將分頁圓點綁在哪個 class */
                el: ".swiper-pagination",
            /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
            clickable: true,
            }
            scrollbar: {
              el: '.swiper-scrollbar',
            },
        });
    };

    $('.faq-ans').hide();
    $('.minus').hide();


    $('.number-of-people').click(function(e){
        e.preventDefault();
        // $(this).siblings('.font-num-primary').text();
        $('.font-num').text('500');
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

