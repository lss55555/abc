$(function () {
    $(".hotFocus .pic").css("background-image","url(../../../img/pic19.jpg)")
    $.getJSON("../js/news.json", function (data) {
        $.each(data, function (i, v) {
            if (i > 17 && i<27) {
                var $div1 = $("<div class='time'></div>");
                var $div2 = $("<div class='thum'></div>");
                var $b = $("<b></b>").text(v["timeA"]);
                var $p = $("<p></p>").text(v["timeB"]);
                var $div3 = $("<div class='pic'></div>").css("background-image","url("+v["images"]+")");
                var $img = $("<img src='img/t600-350.png '/>")
                var $h4 = $("<h4 class='name multiLine'></h4>").text(v["txt"]);
                var $div4 = $("<div class='des multiLine'></div>").text(v["des"]);
                $div1.append($b, $p);
                $div3.append($img)
                $div2.append($div3);
                if(i==18){
                    $(".content1").append($div1, $div2, $h4, $div4);
                }else if(i==19){
                    $(".content2").append($div1, $div2, $h4, $div4);
                }if(i==20){
                    $(".content3").append($div1, $div2, $h4, $div4);
                }
                if(i==21){
                    $(".content4").append($div1, $div2, $h4, $div4);
                }
                if(i==22){
                    $(".content5").append($div1, $div2, $h4, $div4);
                }
                if(i==23){
                    $(".content6").append($div1, $div2, $h4, $div4);
                }
                if(i==24){
                    $(".content7").append($div1, $div2, $h4, $div4);
                }
                if(i==25){
                    $(".content8").append($div1, $div2, $h4, $div4);
                }
                if(i==26){
                    $(".content9").append($div1, $div2, $h4, $div4);
                }
            }
            })
        })
    });
