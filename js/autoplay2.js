function autoplay() {

    var box = document.getElementById("index-autoplay-box");
    var boxUl = box.getElementsByTagName("ul")[0];
    var boxLi = box.getElementsByTagName("li");
    var boxH3 = box.getElementsByTagName("h3")[0];

    var slide = document.getElementById("index-autoplay-slide");
    var slideLi = slide.getElementsByTagName("li");


    var btnLeft = document.getElementById("index-autoplay-btn-left");
    var btnRight = document.getElementById("index-autoplay-btn-right");


    window.onresize = function () {

        clearInterval(box.timer);

        var width = parseInt(boxLi[0].offsetWidth);
        var dis = box.nowpage * width;
        boxUl.style.left = -dis + "px";

        box.timer = setInterval(function () {
            box.nowpage++;
            slides();

        }, 6000);

    }

    box.nowpage = 0;

    clearInterval(box.timer);
    box.timer = setInterval(function () {

        box.nowpage++;
        slides();

    }, 6000);

    btnLeft.onclick = function (event) {
        box.nowpage--;
        slides();

    }

    btnRight.onclick = function () {
            box.nowpage++;
            slides();
        }
        //slideLi onclick 
    for (var i = 0; i < slideLi.length; i++) {
        slideLi[i].index = i;
        slideLi[i].onclick = function () {
            box.nowpage = this.index;
            slides();
        }


    }

    slide.onmouseover = btnLeft.onmouseover = btnRight.onmouseover = box.onmouseover = function () {
        clearInterval(box.timer);
    }
    slide.onmouseout = btnLeft.onmouseout = btnRight.onmouseout = box.onmouseout = function () {
        clearInterval(box.timer);
        box.timer = setInterval(function () {

            box.nowpage++;
            slides();

        }, 6000);
    }


    function slides() {

        box.nowpage < 0 ? box.nowpage = boxLi.length - 1 : "";
        box.nowpage > (boxLi.length - 1) ? box.nowpage = 0 : "";

        var width = parseInt(boxLi[0].offsetWidth);

        
        
        var dis = box.nowpage * width;

       changeSlide(box.nowpage);
        move(boxH3, {
            left: -1500
        }, function () {
            move(boxH3, {
                left: 150   
            });
        })

        move(boxUl, {
            left: -dis
        });


    }

    function changeSlide(page) {

        for (var i = 0; i < slideLi.length; i++) {

            slideLi[i].className = slideLi[i].className.replace("hover", "");

        }

        boxH3.innerHTML = boxLi[page].getElementsByTagName("a")[0].title;

        slideLi[page].className += " hover";
    }



}
