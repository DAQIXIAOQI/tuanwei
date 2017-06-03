function nav() {
    var header = document.getElementById("header");
    var headerNav = document.getElementById("header-nav-main");
    var headerNavSub = document.getElementById("header-nav-sub");

    var navSubHeight = document.getElementById("header-nav-sub-main").offsetHeight;


    var runner = document.getElementById("header-nav-sub-runner");

    var headerMainLi = headerNav.getElementsByTagName("li");

    var headerSubUl = headerNavSub.getElementsByTagName("ul");
    var runnerImg = runner.getElementsByTagName("img")[0];
    //runnerImg.diract = "right";
    for (var i = 0; i < headerMainLi.length; i++) {

        headerMainLi[i].index = headerSubUl[i].index = i;
        headerMainLi[i].onmouseover = headerSubUl[i].onmouseover = function () {

            var index = this.index;
            //runner效果
            clearTimeout(runner.time);
            runner.time = setTimeout(function () {
                var dis = (index * parseInt(getStyle(headerMainLi[0], "width")));

                /*  var cur = dis - parseInt(getStyle(runner, "left"));
                  if ((cur > 0 && runnerImg.diract == "left")) {
                      runnerImg.src = "../image/right.gif";
                      runnerImg.diract = "right";
                  } else if ((cur < 0 && runnerImg.diract == "right")) {
                      runnerImg.src = "../image/left.gif";
                      runnerImg.diract = "left";
                  }*/


                arevageMove(runner, dis, function () {}, runnerImg)


            }, 0);
            //hover 改變背景
            headerSubUl[index].className += " hover";
            var headerSubUlA = headerSubUl[index].getElementsByTagName("a");

            for (var j = 0; j < headerSubUlA.length; j++) {

                headerSubUlA[j].className = "current";

            }

        }
        headerMainLi[i].onmouseout = headerSubUl[i].onmouseout = function () {

            var index = this.index;
            headerSubUl[index].className = headerSubUl[index].className.replace("hover", "");

            var headerSubUlA = headerSubUl[index].getElementsByTagName("a");

            for (var j = 0; j < headerSubUlA.length; j++) {

                headerSubUlA[j].className = "";

            }
        }

    }

    headerNavSub.onmouseover = headerNav.onmouseover = function () {
        clearTimeout(headerNav.timer);
        move(headerNavSub, {
            height: 220
                // height: parseInt(navSubHeight)
        });

    }

    headerNavSub.onmouseout = headerNav.onmouseout = function () {

    /*    headerNav.timer = setTimeout(function () {
            move(headerNavSub, {
                height: 0
            });
        }, 500);*/
        
        move(headerNavSub, {
                height: 0
            });


    }


    var headerHeight = parseInt(getStyle(header, "height"));
    var nav = document.getElementById("header-nav");
    var gotoTop = document.getElementById("gotoTop");
    

    gotoTop.onclick = function () {

        fgotoTop();
       
        
    }

    function fgotoTop() {
        clearInterval(gotoTop.timer);
       
        var scroll;
        gotoTop.time = setInterval(function () {
            scroll = document.body.scrollTop || document.documentElement.scrollTop;

            if (scroll < 50) {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                clearInterval(gotoTop.time);
              
            } else {
                document.documentElement.scrollTop = document.body.scrollTop = scroll - 60;
               
            }
        }, 15);
    }


    window.onscroll = function () {

        var scrollT = 0;
        if (document.documentElement && document.documentElement.scrollTop) {

            scrollT = document.documentElement.scrollTop;
        } else if (document.body.scrollTop) {
            scrollT = document.body.scrollTop;
        }


        if (scrollT - headerHeight > 0) {

            nav.className = "fixedTop";

            gotoTop.style.display = "block";
            move(gotoTop, {
                opacity: 100
            });

        }
        if (scrollT - headerHeight < 0) {

            nav.className = "";
            move(gotoTop, {
                opacity: 0
            });
            gotoTop.style.display = "none";
        }

    }

    var setHome = document.getElementById("setHome");

    setHome.onclick = function () {

        SetHome(setHome, "../index/index.html");

    }

    var searchBtn = getClassName("search", document.getElementById("header-top-main"))[0].getElementsByTagName("em")[0];

    searchBtn.onclick = function () {

        alert("此功能尚在完善中，感谢您的支持！");
    }





    function SetHome(obj, url) {
        try {
            obj.style.behavior = 'url(#default#homepage)';
            obj.setHomePage(url);
            alert("恭喜，成功設置為首頁！");
        } catch (e) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                } catch (e) {
                    alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
                }
            } else {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
            }
        }
    }
}

//nav()中用到的特别函数
function arevageMove(obj, value, fn, runnerImg) {

    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        var ispeed;

        var cur = 0;
        cur = parseInt(getStyle(obj, "left"));

        var idistance = value - cur;

        ispeed = idistance > 0 ? 3 : -3;

        if (Math.abs(idistance) < Math.abs(ispeed)) {

            obj.style.left = value + "px";
            if (fn) {
                fn();
            }
            clearInterval(obj.timer);

        } else {
            obj.style.left = cur + ispeed + "px";
        }


    }, 15);

}
