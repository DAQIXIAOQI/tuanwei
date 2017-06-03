window.onload = function () {

    insertHeadTail();

    nav();



    /*文章插入*/
    var href = location.href;
    var reg = /.*id=(\d{2})(\d{2})(\d{2}).*/;
    var id1 = parseInt(href.replace(reg, "$1"));
    var id2 = parseInt(href.replace(reg, "$2"));
    var id3 = parseInt(href.replace(reg, "$3"));
    var article = getArticleData(id1, id2, id3);
    var box = document.getElementById("article-box-main-header");
    //header
    var articleH3 = box.getElementsByTagName("h3")[0];
    document.title = article.title;
    articleH3.innerHTML = article.title;
    var articelSpan = getClassName("article-data", box)[0].getElementsByTagName("span");
    //time
    articelSpan[0].innerHTML = article.time;
    //from
    articelSpan[1].innerHTML = article.author;
    //author
    articelSpan[2].innerHTML = article.from;
    //visited
    articelSpan[3].innerHTML = article.visited;
    //text 
    var articleText = document.getElementById("article-box-main-text");
    var p = "";
    for (var i = 0; i < article.paragraphText.length; i++) {

        p += "<p>" + article.paragraphText[i] + "</p>";

    }
    articleText.innerHTML = p;

    //上一页下一页设置
    var footerPrev = document.getElementById("article-footer-otherpage").getElementsByTagName("a")[0];
    var footerNext = document.getElementById("article-footer-otherpage").getElementsByTagName("a")[1];
    var Num = getListData(id1 - 1, id2 - 1).length;
    if (id3 == 1) {
        footerPrev.href = "";
        footerPrev.innerHTML = "无";
        footerNext.href = "../index/readingPage.html?id=0" + id1 + "0" + id2 + "0" + (id3 + 1);
        footerNext.innerHTML = getListData(id1 - 1, id2 - 1)[id3].title;
    } else if (id3 == Num) {
        footerNext.href = "";
        footerNext.innerHTML = "无";
        footerPrev.href = "../index/readingPage.html?id=0" + id1 + "0" + id2 + "0" + (id3 - 1);
        footerPrev.innerHTML = getListData(id1 - 1, id2 - 1)[id3 - 2].title;
    } else {
        footerNext.href = "../index/readingPage.html?id=0" + id1 + "0" + id2 + "0" + (id3 + 1);
        footerNext.innerHTML = getListData(id1 - 1, id2 - 1)[id3].title;
        footerPrev.href = "../index/readingPage.html?id=0" + id1 + "0" + id2 + "0" + (id3 - 1);
        footerPrev.innerHTML = getListData(id1 - 1, id2 - 1)[id3 - 2].title;
    }



    /*侧边栏导入*/

    //校园大事件
    var schoolThing = getListData(5);
    var schoolLi = document.getElementById("aside-school").getElementsByTagName("li");
    insertLi(schoolLi, schoolThing[0]);
    //最新通知
    var announcement = getListData(5);
    var announceLi = document.getElementById("aside-announcement").getElementsByTagName("li");
    insertLi(announceLi, announcement[1]);


    /*页面打印、关闭按钮*/
    var articleFooter = document.getElementById("article-footer-printf");
    var btnPrint = getClassName("article-print", articleFooter)[0];
    var brnClose = getClassName("article-close", articleFooter)[0];
    btnPrint.onclick = function () {
        window.print();
    }
    brnClose.onclick = function () {

        if (confirm("您确定要关闭本页吗？")) {
            window.opener = null;
            window.open('', '_self');
            window.close();
        }
    }

}

function insertLi(list, datas) {


    for (var i = 0; i < list.length; i++) {
        var data = datas[i];
        var title = list[i].getElementsByTagName("a")[0];

        if (data) {

            list[i].className += (" article" + data.id);
            title.innerHTML = data.title;
            title.title = data.title;
            title.href = "../index/readingPage.html?id=" + data.id;
            title.target = "_blank";

        } else {
            return
        }
    }

}
