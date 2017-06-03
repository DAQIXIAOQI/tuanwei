function insertHeadTail() {

    var ocontainer = document.getElementById("index-container");

    var frag = document.createDocumentFragment();

    var oheader = document.createElement("div");
    oheader.id = "header";


    oheader.innerHTML = "<div id='header-top'><div id='header-top-main'><span>欢迎来到共青团广东海洋大学委员会 | <a id='setHome'  href='javascript:;' >设为首页</a></span><span class='search'><em></em><input type='text' placeholder='点击搜索...'/></span></div></div><div id='header-title'><div id='header-logo'><a href='../index/index.html'><img src='../image/logo%20(4).png' alt='校团委logo'></a></div><div id='header-clock'><h3>時間</h3><div id='clock-container'></div></div> <em class='header-nav-main-text'></em></div> <div id='header-nav'><div id='header-nav-main'><ul><li><a href='../index/index.html'> 首页 </a></li><li><a href='../secondPage/page1.html'> 团委机构 </a></li><li><a href='../secondPage/page2.html'> 组织建设 </a></li><li><a href='../secondPage/page3.html'> 校园动态 </a></li><li><a href='../secondPage/page4.html'> 网上团校 </a></li><li><a href='../secondPage/page5.html'> 资料文件 </a></li><li><a href='../thirdPage/page6-1.html'> 通知公告 </a></li></ul></div><div id='header-nav-sub'><div id='header-nav-sub-main'><div id='header-nav-sub-runner'><img src='../image/boat.png' /></div><ul id='nav-home'></ul><ul id='nav-organization'><li><a href='../thirdPage/page1-1.html?page=1-1'>团委简介</a> </li><li><a href='../thirdPage/page1-1.html?page=1-2'> 团委老师 </a></li><li><a href='../thirdPage/page1-1.html?page=1-3'>组织机构 </a></li></ul><ul id='nav-construction'><li><a href='../thirdPage/page2-1.html?page=2-1'> 团委部门 </a></li><li><a href='../thirdPage/page2-1.html?page=2-2'> 学院支部</a></li> </ul><ul id='nav-mainwork'><li> <a href='../thirdPage/page3-1.html?page=3-1'> 学术活动 </a> </li><li> <a href='../thirdPage/page3-1.html?page=3-2'> 志愿服务 </a> </li><li> <a href='../thirdPage/page3-1.html?page=3-3'> 文化艺术 </a> </li><li> <a href='../thirdPage/page3-1.html?page=3-4'> 社会实践 </a> </li><li> <a href='../thirdPage/page3-1.html?page=3-5'> 一学一做 </a> </li></ul><ul id='nav-onlinel'><li> <a href='../thirdPage/page4-1.html?page=4-1'> 团务知识 </a> </li><li><a href='../thirdPage/page4-1.html?page=4-2'> 工作手册 </a> </li><li> <a href='../thirdPage/page4-1.html?page=4-3'> 共青要闻 </a> </li></ul><ul id='nav-data'><li> <a href='../thirdPage/page5-1.html?page=5-1'>大事件</a> </li> <li> <a href='../thirdPage/page5-1.html?page=5-2'> 资料文件 </a> </li> </ul> <ul id='nav-file'><li> <a href='../thirdPage/page6-1.html?page=6-1'>校园快讯</a> </li><li> <a href='../thirdPage/page6-1.html?page=6-2'> 最新通知 </a> </li></ul></ul></div></div></div> <div id='gotoTop' class='fixed-box'><a href='javascript:;' class='fixed-box-a'></a></div><div id='feedback' class='fixed-box'><a href='../index/feedbackPage.html' class='fixed-box-a'></a></div>";

    frag.appendChild(oheader);

    if (ocontainer.children[0]) {
        ocontainer.insertBefore(frag, ocontainer.children[0]);
    } else {
        ocontainer.appendChild(frag);
    }

    var ofooter = document.createElement("div");
    ofooter.id = "footer";
    var fragFooter = document.createDocumentFragment();

    ofooter.innerHTML = "<div class='footer-topBox'><div id='footer-logo'><img src='../image/gdoulogo.png'/></div><div id='footer-top' class='clearflx'><div id='footer-link' class='footer-top-box'><h4>友情链接</h4><ul><li> <a href='http://www.ccyl.org.cn/' target='_blank'>共青团中央</a></li><li> <a href='http://www.gdcyl.org/' target='_blank'>广东共青团</a></li><li> <a href='http://zjyouth.gdzjdaily.com.cn/' target='_blank'>湛江共青团</a></li><li> <a href='http://su.gdou.edu.cn/' target='_blank'>校学生会</a></li><li> <a href='http://www.gdousl.com/' target='_blank'>社团联合会</a></li></ul></div><div id='footer-schoolnav' class='footer-top-box'><h4>校内导航</h4><ul><li><a href='http://www1.gdou.edu.cn/xsc/' target='_blank'>学生工作部</a></li><li><a href='http://www3.gdou.edu.cn/xzb/index.asp' target='_blank'>校长办公室</a></li><li><a href='http://zsjy.gdou.edu.cn/' target='_blank'>招生与就业中心</a></li><li><a href='http://www3.gdou.edu.cn/hqglc/index.asp' target='_blank'>后勤管理处</a></li><li><a href='http://210.38.137.116:81/ax-1/' target='_blank'>综合服务中心</a></li><li><a href='http://210.38.128.101/ssbwg/' target='_blank'>水生博物馆</a></li><li><a href='http://www3.gdou.edu.cn/xyy/index.htm' target='_blank'>校医院</a></li><li><a href='http://www3.gdou.edu.cn/ysfwzx/Default.asp' target='_blank'>饮食服务中心</a></li><li><a href='http://www3.gdou.edu.cn/hhzl/index.asp' target='_blank'>规划与法规处</a></li></ul></div><div id='footer-medialink' class='footer-top-box'><h4>微博&amp;微信公众号</h4><ul><li><a href='http://weibo.com/gdou1935?refer_flag=1001030201_&is_all=1' target='_blank' title='广东海洋大学微博' ><img src='../image/weibo.png'></a></li><li><a id = 'footer-QR' href='javascript:;' title='点击可查看大图'><img src='../image/weixin.png'></a><div id='footer-QRcode'><img src = '../image/GDOUweixin.jpg'/></div></li></ul> </div></div></div><div class='footer-bottomBox'><div id='footer-bottom'><div id='footer-bottom-left' class='footer-bottom-box'><span>Copyright © 广东海洋大学团委 2017 All Rights Reserved</span></div><div id='footer-bottom-right' class='footer-bottom-box'><span> 地址 ： 广东省湛江市麻章区海大路1号  邮编：524088 电话：0759-2383187 2396065（传真）E-mail ： gdou.tw@163.com ；tw@gdou.edu.cn</span></div></div></div>";



    fragFooter.appendChild(ofooter);
    ocontainer.appendChild(fragFooter);

    /*QRcode hover 事件*/
    var QR = document.getElementById("footer-QR");
    var QRdiv = document.getElementById("footer-QRcode");
    QRdiv.onmouseover = QR.onmouseover = function () {
       
        QRdiv.style.display = "block";
        move(QRdiv, {
            opacity: 100
        });

    }
    QRdiv.onmouseout = QR.onmouseout = function () {

       
            move(QRdiv, {
                opacity: 0
            },function(){
               QRdiv.style.display = "none" 
            });
   
    }
    QR.onclick = function () {

        window.open("../image/GDOUweixin.jpg");

    }




    /*  clock组件  */

    var clockContainer = document.getElementById("clock-container");
    var clockContainerH3 = ocontainer.getElementsByTagName("h3")[0];
    var clock = document.createElement("div");
    clock.id = "clock-ul-box";
    var oul1 = document.createElement("ul");
    var span = document.createElement("span");
    span.innerHTML = "：";
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

}
