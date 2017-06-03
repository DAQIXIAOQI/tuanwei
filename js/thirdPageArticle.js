window.onload = function () {

    insertHeadTail();

    nav();
    objectBegin();
    
}

/*--------------------正則沒改----------------------------*/

function objectBegin() {

    var href = location.href;
    var reg = /.*page=(\d+)-(\d+).*/;
    var fatherNum = href.replace(reg, "$1");
    var childNum = href.replace(reg, "$2");

    if (fatherNum == href) {

        var reg = /.*page(\d+)-(\d+).*/;

        fatherNum = fatherNum.replace(reg, "$1");
        childNum = 1;

    }




    var page = [{
        name: "团委机构",
        childLength: 3,
        childName: ["团委简介", "团委老师", "组织机构"],
        childPage: ["1-1", "1-2", "1-3"],
        childType: ["text", "text", "list"]
        }, {
        name: "组织建设",
        childLength: 2,
        childName: ["团委部门", "学院支部"],
        childPage: ["2-1", "2-2"],
        childType: ["nav", "nav"],
        thirdLength: [9, 18],
        thirdName: [["办公室", "组织部", "宣传部", "文体部", "《海大青年》", "社会实践部", "科技创新部", "艺术团", "青协"], ["水产学院", "海洋与气象学院", "食品与科技学院", "农学院", "机械与动力工程学院", "海洋工程学院", "经济学院", "管理学院", "数字与计算机学院", "电子与信息工程学院", "化学与环境学院", "航海学院", "法政学院", "文学与新闻传播学院", "外国语学院", "中歌艺术学院", "马克思主义学院", "体育与休闲学院"]],
        thirdType: [["list", "list", "list", "list", "list", "list", "list", "list", "list"], ["list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list", "list"]],
        thirdPage: [["1", "2", "3", "4", "5", "6", "7", "8", "9"], ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"]]
        }, {
        name: "校园动态",
        childLength: 5,
        childName: ["学术活动", "志愿服务", "文化艺术", "社会实践", "一学一做"],
        childPage: ["3-1", "3-2", "3-3", "3-4", "3-5"],
        childType: ["list", "list", "list", "list", "list"]
        }, {
        name: "网上团校",
        childLength: 3,
        childName: ["团务知识", "团干工作手册", "共青要闻"],
        childPage: ["4-1", "4-2", "4-3"],
        childType: ["list", "list", "list"]
        }, {
        name: "资料文件",
        childLength: 2,
        childName: ["大事件", "表格文件"],
        childPage: ["5-1", "5-2"],
        childType: ["list", "text"]
        }, {
        name: "通知公告",
        childLength: 2,
        childName: ["校园快讯", "最新通知"],
        childPage: ["6-1", "6-2"],
        childType: ["list", "list"]
        }]


    //侧边栏nav点击事件
    var nav = document.getElementById("third-page-main-nav");
    var navLi = getClassName("third-li", nav);
    var header = document.getElementById("third-page-main-box-header");
    var headerLocation = getClassName("now-location", header)[0];
    var headerH4 = header.getElementsByTagName("h4")[0];
    var headerLocationChild = getClassName("now-location-child", header)[0];
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].index = i;
        var fouthNav = getClassName("special-fouthNav", navLi[i])[0];
        if (fouthNav) {
            fouthNav.index = i;
        }
        navLi[i].onclick = function () {

            var fouthNav = getClassName("special-fouthNav", navLi[i])[this.index];
            if (fouthNav) {

                for (var i = 0; i < navLi.length; i++) {

                    navLi[i].getElementsByTagName("span")[0].className = "";
                    move(navLi[i], {
                        height: 60
                    });
                }

                navLi[this.index].getElementsByTagName("span")[0].className = "hover";
                var h = 60 + parseInt(fouthNav.offsetHeight);
                move(navLi[this.index], {
                    height: h
                })

            } else {
                showPage(this.index);
                changeSth(this.index, page[fatherNum - 1].childName[this.index]);
            }

        }

        if (fouthNav) {
            var li = fouthNav.getElementsByTagName("li");
            for (var j = 0; j < li.length; j++) {
                li[j].index1 = fouthNav.index;
                li[j].index2 = j;
                li[j].onclick = function () {

                    var a = page[fatherNum - 1].thirdPage[this.index1][this.index2];

                    a = parseInt(a);

                    showPage(a - 1);

                    headerLocation.innerHTML = page[fatherNum - 1].childName[this.index1];
                    headerLocationChild.innerHTML = page[fatherNum - 1].thirdName[this.index1][this.index2];
                    headerH4.innerHTML = page[fatherNum - 1].thirdName[this.index1][this.index2];
                }

            }

            if (i == (childNum - 1)) {
                var h = 60 + parseInt(fouthNav.offsetHeight);

                move(navLi[i], {
                    height: h
                });
            }
        }
    }

    //改变样式（nav-hover，location，h4）和nav点击事件
    //判断打开时的页面有没有四级链接

    var a = getClassName("special-fouthNav", navLi[childNum - 1])[0];
    if (a) {

        headerLocation.innerHTML = page[fatherNum - 1].childName[childNum - 1];
        headerLocationChild.innerHTML = headerH4.innerHTML = page[fatherNum - 1].thirdName[childNum - 1][0];

    } else {
        changeSth(childNum - 1, page[fatherNum - 1].childName[childNum - 1]);
    }
    //插入列表内容(逻辑是检测每个page的类型是否为列表，如果为列表则自动插入数据)
    for (var i = 0; i < page[fatherNum - 1].childLength; i++) {


        var index = i;
        if (page[fatherNum - 1].childType[i] == "list") {

            insertArticle(fatherNum - 1, i);

        }

        if (page[fatherNum - 1].childType[i] == "nav") {

            for (var j = 0; j < page[fatherNum - 1].thirdLength[index]; j++) {

                if (page[fatherNum - 1].thirdType[index][j] == "list") {

                    var a = j;
                    if (index == 1) {

                        a += 9;
                    }


                    insertArticle(fatherNum - 1, a);

                }


            }

        }

    }
    //insertArticle(page[fatherNum-1].childType);
    //显示特定page页

    showPage(childNum - 1);

}


//改变样式（nav-hover，location，h4）和nav点击事件
function changeSth(nowpage, name) {

    var nav = document.getElementById("third-page-main-nav");
    var header = document.getElementById("third-page-main-box-header");


    //需要改变样式的三个元素
    var navLi = getClassName("third-li", nav);
    var headerLocation = getClassName("now-location", header)[0];
    var headerH4 = header.getElementsByTagName("h4")[0];

    //改变侧方列表高亮元素
    for (var i = 0; i < navLi.length; i++) {

        navLi[i].className = navLi[i].className.replace("hover", "");

        var span = navLi[i].getElementsByTagName("span")[0];

        span.className = "";
    }

    navLi[nowpage].className += " hover";
    navLi[nowpage].getElementsByTagName("span")[0].className = "hover";
    //main部分的header文字自动替换
    headerLocation.innerHTML = name;
    headerH4.innerHTML = name;


}

//一页显示文章数默认为10篇，大于10篇时的处理方式没有解决，且数据存放的地方没有结局
function insertArticle(f, c) {

    //传递的值类型为： （二级页面序号，三级页面需要插入的序号）


    var text = getListData(f, c);
    var box = document.getElementById("third-page-main-box-main");
    var pageBox = getClassName("page-box", box)[c];


    if (text.length >= 1) {

        var articleFrag = document.createDocumentFragment();

        var ul = document.createElement("ul");

        var li = "";

        var num = 0;

        text.length > 10 ? num = 9 : num = text.length;

        for (var i = 0; i < num; i++) {
            li += "<li id='article-" + text[i].id + "'><a href='../index/readingPage.html?id=" + text[i].id + "' target = '_blank'>" + text[i].title + "</a><span class ='article-time'>" + text[i].time + "</span></li>"

        }

        ul.innerHTML = li;

        var listPage = document.createElement("div");
        listPage.id = "list-page"
        listPage.innerHTML = "<div class='list-page-top'>每页<span>9</span>篇文章 总共<span class='list-totalArticle'>?</span>文章</div><div class='list-page-bottom'><div class='list-page-bottom-left'><a href='javascript:;' class='page-first-btn'>首页</a><a href='javascript:;' class='page-left-btn'> </a> 当前第<span class='list-nowNum'>1</span>/<span class='list-totalNum'>?</span>页<a href='javascript:;' class='page-last-btn'>尾页</a><a href='javascript:;' class='page-right-btn'></a></div><div class='list-page-bottom-right'>到第<input type='text' class='list-input'>页 <a class='list-input-submit' href='javascript:;' >确定</a></div></div>";

        articleFrag.appendChild(ul);
        articleFrag.appendChild(listPage);
        pageBox.appendChild(articleFrag);

        var leftBtn = getClassName("page-left-btn", listPage)[0];
        var rightBtn = getClassName("page-right-btn", listPage)[0];
        var firstBtn = getClassName("page-first-btn", listPage)[0];
        var lastBtn = getClassName("page-last-btn", listPage)[0];
        var now = getClassName("list-nowNum", listPage)[0];
        var totalNum = getClassName("list-totalNum", listPage)[0];
        var inputBtn = getClassName("list-input-submit", listPage)[0];
         var input = getClassName("list-input", listPage)[0];
        totalNum.innerHTML = Math.ceil(text.length / 9);
        var totalArticle = getClassName("list-totalArticle",listPage)[0];
        if(totalArticle){
        totalArticle.innerHTML = text.length;
        }
        if (leftBtn && rightBtn && firstBtn && lastBtn && inputBtn) {

            leftBtn.onclick = function () {
                if (now.innerHTML != 1) {

                    ul.innerHTML = "";
                    li = "";

                    var begin = (parseInt(now.innerHTML) - 2) * 9;
                    console.log(begin);
                    var num = begin + 9;

                    for (var j = begin; j < num; j++) {

                        li += "<li id='article-" + text[j].id + "'><a href='../index/readingPage.html?id=" + text[j].id + "' target = '_blank'>" + text[j].title + "</a><span class ='article-time'>" + text[j].time + "</span></li>"

                    }

                    ul.innerHTML = li;

                    now.innerHTML = parseInt(now.innerHTML) - 1;
                } else {
                    alert("no prev page");
                }

            }
            rightBtn.onclick = function () {
                if ((totalNum.innerHTML != 1) && (now.innerHTML != totalNum.innerHTML)) {

                    ul.innerHTML = "";
                    li = "";

                    var begin = parseInt(now.innerHTML) * 9;
                    var num = begin + 9;

                    if (text.length < begin) {
                        console.log("wrong");
                    }

                    text.length < num ? num = text.length : "";

                    for (var j = begin; j < num; j++) {
                        li += "<li id='article-" + text[j].id + "'><a href='../index/readingPage.html?id=" + text[j].id + "' target = '_blank'>" + text[j].title + "</a><span class ='article-time'>" + text[j].time + "</span></li>"

                    }

                    ul.innerHTML = li;

                    now.innerHTML = parseInt(now.innerHTML) + 1;
                } else {
                    alert("no next page");
                }
            }
            firstBtn.onclick = function () {
                if (now.innerHTML != 1) {
                    ul.innerHTML = "";
                    li = "";
                    var begin = 0;
                    var num = begin + 9;
                    for (var j = begin; j < num; j++) {

                        li += "<li id='article-" + text[j].id + "'><a href='../index/readingPage.html?id=" + text[j].id + "' target = '_blank'>" + text[j].title + "</a><span class ='article-time'>" + text[j].time + "</span></li>"

                    }

                    ul.innerHTML = li;

                    now.innerHTML = 1;
                } else {
                    alert("当前已是首页");
                }
            }
            lastBtn.onclick = function () {
                if ((totalNum.innerHTML != 1) && (now.innerHTML != totalNum.innerHTML)) {

                    ul.innerHTML = "";
                    li = "";
                    var begin = parseInt(totalNum.innerHTML - 1) * 9;
                    var num = begin + 9;

                    if (text.length < begin) {
                        console.log("wrong");
                    }

                    text.length < num ? num = text.length : "";

                    for (var j = begin; j < num; j++) {

                        li += "<li id='article-" + text[j].id + "'><a href='../index/readingPage.html?id=" + text[j].id + "' target = '_blank'>" + text[j].title + "</a><span class ='article-time'>" + text[j].time + "</span></li>"

                    }

                    ul.innerHTML = li;

                    now.innerHTML = totalNum.innerHTML;

                } else {
                    alert("当前已是尾页");
                }
            }
            inputBtn.onclick = function () {
                finputBtn();
            }
            input.onkeyup = function(event){
                
                var event =event||window.event;
                
                var code = event.keyCode;
                
                if(code == 13){
                    
                    finputBtn();
                    
                }    
            }
            function finputBtn(){
 
                if (isNaN(input.value) || input.value == "" || input.value ==0 ) {
                    alert("请重新输入");
                    input.focus();
                } else {
                     if (parseInt(input.value) > totalNum.innerHTML) {
                        alert("输入的数字大于总页数,请重新输入");
                        input.value ="";
                         input.focus();
                    } else {
                        if(parseInt(input.value) == now.innerHTML ){
                            alert("输入的页数是当前页，请重新输入");
                            input.value ="";
                            input.focus();
                        }
                        else{
                        ul.innerHTML = "";
                        li = "";

                        var begin = (parseInt(input.value) - 1) * 9;
                        var num = begin + 9;
                        text.length < num ? num = text.length : "";
                        for (var j = begin; j < num; j++) {

                            li += "<li id='article-" + text[j].id + "'><a href='../index/readingPage.html?id=" + text[j].id + "' target = '_blank'>" + text[j].title + "</a><span class ='article-time'>" + text[j].time + "</span></li>"

                        }

                        ul.innerHTML = li;

                        now.innerHTML = parseInt(input.value);
                        }
                    }
                }

            }
        } else {
            console.log("按钮获取失败");
        } }
        
        
        else {
                pageBox.innerHTML = "暂无数据";
            }
}

        

        function showPage(a) {

            var pageBox = getClassName("page-box", document.getElementById("third-page-main-box-main"));

            for (var i = 0; i < pageBox.length; i++) {

                pageBox[i].style.display = "none";

            }

            pageBox[a].style.display = "block";

        }
