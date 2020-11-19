$(function (){
    $(window).on("resize",function (){
        //1.1获取窗户的宽度
        let clientW = $(window).width();

        //1.2设置临界值
        let isShowBigImage = clientW >= 800;

        //1.3获取所有的item
        let $allItems = $("#yc_carousel .item");

        //1.4遍历
        $allItems.each(function (index, item){
            //1.4.1 取出图片的路径
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("' + src +'")';

            //1.4.2 设置背景
            $(item).css({
                backgroundImage:imgUrl
            });

            //1.4.3 设置img标签
            if(!isShowBigImage){
                let $img = "<img src='" + src +"'>";
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }
        });
    });
    $(window).trigger("resize");

    /*2.工具提示*/
    $('[data-toggle="tooltip"]').tooltip();

    //3. 导航处理
    let $allLis = $("#yc_nav li");
    $($allLis[0]).on("click",function (){
        $("html,body").animate({scrollTop:$("#about").offset().top},1000);
    });
    $($allLis[1]).on("click",function (){
        $("html,body").animate({scrollTop:$("#yc_product").offset().top},1000);
    });
    $($allLis[2]).on("click",function (){
        $("html,body").animate({scrollTop:$("#yc_hot").offset().top},1000);
    });
    $($allLis[3]).on("click",function (){
        $("html,body").animate({scrollTop:$("#yc_link").offset().top},1000);
    });

});


// 4.跳转
function tz(){
    var obj1 = document.getElementById("header");
    location.href="#header";
}
