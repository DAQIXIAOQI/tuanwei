$(document).ready(function () {

    $autoplay = $("#index-autoplay");
    $autoplayLi = $(".autoplay-li");
    $autoplayheader = $("#index-autoplay-slide h3");
    $autoplayLeftBtn = $("#index-autoplay-btn-left");
    $autoplayRightBtn = $("#index-autoplay-btn-right");
    $autoplay.nowpage = 2;
    var nzindex = 3;
    var Arr = fgetArray($autoplayLi.length);
    //初始调用
    fautoplay(Arr);


    /*$autoplay.timer = setInterval(function () {
        fautoplayUp();
    }, 2000);*/

    function fautoplayUp() {
        $autoplay.nowpage++;
        fautoplay(Arr);
    }

    function fautoplayDown() {
        $autoplay.nowpage--;
        fautoplay(Arr);
    }

    function fautoplay(arr) {
        $autoplay.nowpage == 5 ? $autoplay.nowpage = 0 : "";
        $autoplay.nowpage == -1 ? $autoplay.nowpage = 4 : "";
        var num = $autoplay.nowpage;
        var now;
        for (var i = 2; i < arr.length - 2; i++) {
            if (arr[i] == num) {
                now = i;
            }

        }
        $autoplayheader.html($(".autoplay-li:eq(" + arr[now] + ") a").attr("title"));
        changeSlide(now - 2);
        var nwidth = $autoplay.width();
        var nheight = $autoplay.height();
        $(".autoplay-li:eq(" + arr[now] + ")").css("z-index", nzindex++);
        $(".autoplay-li:eq(" + arr[now - 2] + ")").animate({
            left: "-600px",
            opacity: 0
        });
        $(".autoplay-li:eq(" + arr[now - 1] + ")").animate({
            left: "0px",
            opacity: 0.8,
            width: "600px",
            height: "240px",
            top: "80px"
        });
        $(".autoplay-li:eq(" + arr[now] + ")").animate({
            width: "750px",
            height: "300px",
            left: (nwidth - 750) / 2 + "px",
            top: (nheight - 300) / 2 + "px",
            opacity: 1
        });
        $(".autoplay-li:eq(" + arr[now + 1] + ")").animate({
            left: (nwidth - 600) + "px",
            opacity: 0.8,
            width: "600px",
            height: "240px",
            top: "80px"
        });
        $(".autoplay-li:eq(" + arr[now + 2] + ")").animate({
            left: nwidth + "px",
            opacity: 0
        })

    }

    function changeSlide(num) {
        $(".slide-li").each(function () {
            $(this).removeClass("hover");
        })
        $(".slide-li:eq(" + num + ")").addClass("hover");
    }

    function fgetArray(length) {
        var Arr = [];
        for (var i = 3; i < length; i++) {
            Arr.push(i);
        }
        for (var i = 0; i < length; i++) {
            Arr.push(i);
        }
        for (var i = 0; i < 2; i++) {
            Arr.push(i);
        }
        return Arr
    }


    $autoplayLeftBtn.click(function () {
        fautoplayDown();
    })
    $autoplayRightBtn.click(function () {
        fautoplayUp();
    })
   /* $autoplay.mousemove(function () {
        clearInterval($autoplay.timer);
    })
    $autoplay.mouseout(function () {
        clearInterval($autoplay.timer);
        $autoplay.timer = setInterval(function () {
            fautoplayUp();
        }, 2000);
    })*/

})

