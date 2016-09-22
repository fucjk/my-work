//轮播图的请求
$(function () {
    $.ajax({
        url: "http://datainfo.duapp.com/shopdata/getBanner.php",
        dataType: "jsonp",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                var imgURL = JSON.parse(data[i].goodsBenUrl)[0];
//                    console.log(imgURL);
                var haha = "<div class='swiper-slide' style='background: url(" + imgURL + ") 50% 50% no-repeat;background-size: 100% 100%'><div/>";
//                    console.log(haha);
                $('.swiper-wrapper').append(haha);
            }
        }
    });
//ajxa请求商品列表
    $.ajax({
        url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
        dataType: "jsonp",
        success: function (data) {
            // console.log(data);
//循环商品列表
            $.each(data,function (i) {
                
               $html = "<div class='commodity'><img src="+data[i].goodsListImg+" class='listimg'><div class='product-profile'><div class='wrap'>"+data[i].goodsName+"</div><div class='Price'>"+data[i].price+"<s>原价"+parseInt(data[i].price/data[i].discount*10)+"</s></div><img src='img/7_07.jpg' class='shopping-cart'><div class='fewdiscount'>"+data[i].discount+"折</div></div></div>";
               
                $(".all-commodity").append($html);
                
            });
        }
    });
//轮播js
    window.onload = function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            keyboardControl: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay:2000
        });
    }
});