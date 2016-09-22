$(function () {
    $('.search-logo').bind('click',function () {
        // console.log($(".search").val());
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
            dataType:"JSONP",
            //要输入进data内容中的值
            data:{
                selectText:$(".search").val()
            },
            //请求回来得到的值
            success:function (data) {
                  // console.log(data);
                $(".all-commodity").empty();
                 $.each(data,function (i) {

                     $html = "<div class='commodity'><img src="+data[i].goodsListImg+" class='listimg'><div class='product-profile'><div class='wrap'>"+data[i].goodsName+"</div><div class='Price'>"+data[i].price+"<s>原价"+parseInt(data[i].price/data[i].discount*10)+"</s></div><img src='img/7_07.jpg' class='shopping-cart'><div class='fewdiscount'>"+data[i].discount+"折</div></div></div>";
                      // console.log($html);
                     $(".all-commodity").append($html);

                 });
            }
        });
    });

        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getclass.php",
            success:function (data) {
                var data = JSON.parse(data);
                // console.log(data1);
                $.each(data,function (i) {
                    // console.log(data1[2]);
                    $html = "<div class='style'><strong class='classname'>"+data[i].className+"</strong><strong class='logo'> +<+ </strong></div>";
                    $(".all-commodity").append($html);
                })
            }
        })
    });
 $('.classname').bind('click',function () {
     $.ajax({
         url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
         dataType:"JSONP",
         success:function (data) {
             $.each(data, function (i) {
                 $html = "<div class='commodity'><img src=" + data[i].goodsListImg + " class='listimg'><div class='product-profile'><div class='wrap'>" + data[i].goodsName + "</div><div class='Price'>" + data[i].price + "<strong>原价" + parseInt(data[i].price / data[i].discount * 10) + "</strong></div><img src='img/7_07jpg' class='shopping-cart'><div class='fewdiscount'>" + data[i].discount + "折</div></div></div>";
                 // console.log($html);
                 $(".all-commodity").append($html); 
             });
         }
     })
 });