window.onload = function () {
    
    
    var ocontainer = document.getElementById("index-container");

    var frag = document.createDocumentFragment();

    var oheader = document.createElement("div");
    oheader.id = "header";


    oheader.innerHTML = "<div id='header-top'><div id = 'header-logo' ><img src = '../image/logo%20(4).png'alt = '校团委logo' ></div><div id = 'header-clock' > <h3>時間</h3><div id='clock-container'></div></div> <em class='header-nav-main-text'></em></div><div id = 'header-nav' ><div id = 'header-nav-main' ><ul><li><a href = '../index/index.html' > 首页 </a></li><li><a href = '../secondPage/page1.html' > 团委机构 </a></li><li><a href = '../secondPage/page2.html' > 组织建设 </a></li><li><a href = '../secondPage/page3.html' > 主要工作 </a></li><li><a href = '../secondPage/page4.html' > 网上团校 </a></li> <li><a href = '../secondPage/page5.html' > 资料文件 </a></li></ul></div><div id = 'header-nav-sub' ><div id = 'header-nav-sub-main'><div id='header-nav-sub-runner'><img src='../image/right.gif' /></div><ul id = 'nav-home' ></ul><ul id = 'nav-organization' ><li><a href ='../thirdPage/page1-3.html?page=1-1' >团委简介</a> </li><li><a href ='../thirdPage/page1-3.html?page=1-2' > 团委老师 </a></li><li><a href ='../thirdPage/page1-3.html?page=1-3' >组织机构 </a></li></ul><ul id = 'nav-construction' ><li><a href ='../thirdPage/page2-1.html?page=2-1' > 办公室 </a></li> <li><a href ='../thirdPage/page2-1.html?page=2-2' > 组织部</a></li><li> <a href ='../thirdPage/page2-1.html?page=2-3' > 宣传部 </a> </li><li> <a href ='../thirdPage/page2-1.html?page=2-4' > 文体部 </a> </li><li> <a href ='../thirdPage/page2-5.html?page=2-1' > 《海大青年》 </a> </li><li> <a href ='../thirdPage/page2-6.html?page=2-1' > 社会实践部 </a> </li><li><a href ='../thirdPage/page2-1.html?page=2-7' > 科技创新部 </a></li><li> <a href ='../thirdPage/page2-8.html?page=2-1' > 艺术团 </a> </li><li> <a href ='../thirdPage/page2-1.html?page=2-9' > 青协 </a> </li></ul><ul id = 'nav-mainwork' ><li> <a href ='../thirdPage/page3-1.html?page=3-1' > 学术活动 </a> </li><li>  <a href ='../thirdPage/page3-1.html?page=3-2' > 志愿服务 </a> </li><li>  <a href ='../thirdPage/page3-1.html?page=3-3' > 文化艺术 </a> </li><li>  <a href ='../thirdPage/page3-1.html?page=3-4' > 社会实践 </a> </li></ul><ul id = 'nav-onlinel' ><li>  <a href ='../thirdPage/page4-1.html?page=4-1' > 团务知识 </a> </li><li><a href ='../thirdPage/page4-1.html?page=4-2' > 团干工作手册 </a>  </li><li> <a href ='../thirdPage/page4-1.html?page=4-3' > 《海大青年》 </a>  </li></ul><ul id = 'nav-data' ><li> <a href ='../thirdPage/page5-1.html?page=5-1' >大事件</a>  </li><li> <a href ='../thirdPage/page5-1.html?page=5-2' > 资料文件 </a>  </li></ul></ul></div></div></div>";

    frag.appendChild(oheader);

    if (ocontainer.children[0]) {
        ocontainer.insertBefore(frag, ocontainer.children[0]);
    } else {
        ocontainer.appendChild(frag);
    }

    var ofooter = document.createElement("div");
    ofooter.id = "footer";
    var fragFooter = document.createDocumentFragment();

    ofooter.innerHTML = "<div class='footer-con'><div class='footer-con-left'><ul><li>地址 ： 广东省湛江市麻章区海大路1号</li><li>邮编：524088</li><li>电话 ： 0759-2383187；电话 ： 0759-2383187；</li><li>E-mail ： gdou.tw@163.com ； tw@gdou.edu.cn</li><li class='copyright'>Copyright © 广东海洋大学团委 2017 All Rights Reserved</li></ul></div><div class='footer-con-right'><div class='footer-xl'><a href='http://weibo.com/gdouxtw'><img src='../image/weibo.png' alt='微博' width='50' height='50'></a><span>官方微博</span></div><div class='footer-xl'><a href='#'><img src='../image/weixin2.png' alt='微信' width='50' height='50'></a><span>官方微信</span></div><div class='footer-xl'><a href='http://www.gdou.edu.cn/'><img src='../image/logo2017.png' alt='广东海洋大学官网' width='50' height='50'></a><span>广东海洋大学</span></div></div></div>";

    fragFooter.appendChild(ofooter);
    //ocontainer.appendChild(fragFooter);

    /*  clock组件  */

    var clockContainer = document.getElementById("clock-container");
    var clockContainerH3 = ocontainer.getElementsByTagName("h3")[0];
    var clock = document.createElement("div");
    clock.id = "clock-ul-box";
    var oul1 = document.createElement("ul");
    var span = document.createElement("span");
    span.innerHTML = ":";
    for (var i = 0; i < 10; i++) {
        var li = document.createElement("li");
        li.innerHTML = i;
        oul1.appendChild(li);
    }
    clock.appendChild(oul1);
    var oul2 = oul1.cloneNode(true);
    clock.appendChild(oul2);
    clock.appendChild(span);
    var span2 = span.cloneNode(true);
    var oul3 = oul1.cloneNode(true);
    var oul4 = oul1.cloneNode(true);
    var oul5 = oul1.cloneNode(true);
    var oul6 = oul1.cloneNode(true);
    clock.appendChild(oul3);
    clock.appendChild(oul4);
    clock.appendChild(span2);
    clock.appendChild(oul5);
    clock.appendChild(oul6);
    clockContainer.appendChild(clock);

    clockContainer.timer = setInterval(function () {
        var time = new Date();
        var second = time.getSeconds();
        var minute = time.getMinutes();
        var hour = time.getHours();

        time.getDate() == clockContainer.day ? "" : (clockContainerH3.innerHTML = time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日");


        clockContainer.stail = second % 10;
        clockContainer.shead = Math.floor(second / 10);

        move(oul6, {
            top: -(clockContainer.stail * 40)
        });

        move(oul5, {
            top: -(clockContainer.shead * 40)
        });

        (minute % 10) == clockContainer.mtail ? "" : (clockContainer.mtail = (minute % 10), move(oul4, {
            top: -(clockContainer.mtail * 40)
        }));
        Math.floor(minute / 10) == clockContainer.mhead ? "" : (clockContainer.mhead = Math.floor(minute / 10), move(oul3, {
            top: -(clockContainer.mhead * 40)
        }));

        (hour % 10) == clockContainer.htail ? "" : (clockContainer.htail = (hour % 10), move(oul2, {
            top: -(clockContainer.htail * 40)
        }));
        Math.floor(hour / 10) == clockContainer.hhead ? "" : (clockContainer.hhead = Math.floor(hour / 10), move(oul1, {
            top: -(clockContainer.hhead * 40)
        }));

    }, 1000);


    function move(obj, json, fn) {

        clearInterval(obj.timer);

        obj.timer = setInterval(function () {
                var ifinish = true;
                for (var attr in json) {
                    var cur = 0;
                    if (attr == "opacity") {
                        cur = Math.round(parseFloat(getStyle(obj, attr)) * 100)
                    } else {
                        cur = parseInt(getStyle(obj, attr))
                    }
                    var idistance = json[attr] - cur;
                    var ispeed = idistance > 0 ? Math.ceil(idistance / 10) : Math.floor(idistance / 10);

                    if (cur != json[attr]) {
                        ifinish = false;
                    }
                    if (attr == "opacity") {
                        obj.style.filter = "alpha(opacity:" + (cur + ispeed) + ")";
                        obj.style.opacity = (cur + ispeed) / 100;
                    } else {
                        obj.style[attr] = cur + ispeed + "px";
                    }
                }
                if (ifinish) {
                    clearInterval(obj.timer);
                    if (fn) fn();
                }
            }

            , 20);

    }
    
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr]
        } else {
            return getComputedStyle(obj, false)[attr]
        }
    }

    //调用导航栏hover效果函数，nav存于main.js
    nav();
    
    //载入主题内容
    var num = ocontainer.className ;
    var reg = /.*page(\d+).*/;
    num = num.replace(reg,"$1");
    
    /*if(secondPageLoad){
    secondPageLoad(num);}*/
    
    if(objectBegin){
       objectBegin();
    }
}
function getClassName(para,obj){
            obj = obj||document;
            if(obj.getElementsByClassName){
                return obj.getElementsByClassName(para);
            } else {
                var boxClass = obj.getElementsByTagName('*');
                var arrClass = [];
                for (var i = 0; i < boxClass.length; i++) {
                    var nameBox = boxClass[i].className.split(' ');
                    for (var j = 0; j < nameBox.length; j++) {
                        if (nameBox[j] == para) {
                            arrClass.push(boxClass[i]);
                        }
                    };
                };
            }
            return(arrClass);
        }
