window.onload = function () {

    insertHeadTail();

    nav();

    var ocontainer = document.getElementById("index-container");
    var num = ocontainer.className;
    var reg = /.*page(\d+).*/;
    num = num.replace(reg, "$1");
    secondPageLoad(num);

}

function secondPageLoad(num) {

    var textArray = [{
            name: "团委机构",
            headerText: "校团委现有专职团干6人，全校共有团员19906人，其中，本科生团员14112人。17个基层团委，21个团总支，676个团支部。",
            childNum: 3,
            childName: ["团委简介", "团委老师", "组织机构"],
            childUrl: ["1-1", "1-2", "1-3"]
    },
        {
            name: "组织建设",
            headerText: "校团委现有9个部门，共有团干部百余人。其中，本科生团员14112人。17个基层团委，21个团总支，676个团支部。",
            childNum: 2,
            childName: ["团委部门", "学院支部"],
            childUrl: ["2-1", "2-2"]
    },
        {
            name: "校园动态",
            headerText: "校团委社团活动主要分为四个类别。其中包括学术类、志愿类、艺术类、实践类。",
            childNum: 5,
            childName: ["学术活动", "志愿服务", "文化艺术", "社会实践","一学一做"],
        childUrl:["3-1","3-2","3-3","3-4","3-5"]
    },
        {
            name: "网上团校",
            headerText: "校团委社团活动主要分为四个类别。其中包括学术类、志愿类、艺术类、实践类。",
            childNum: 3,
            childName: ["团务知识", "团干工作手册", "共青要闻"],
        childUrl:["4-1","4-2","4-3"]
    },
        {
            name: "资料文件",
            headerText: "校团委社团活动主要分为四个类别。其中包括学术类、志愿类、艺术类、实践类。",
            childNum: 2,
            childName: ["大事件", "表格文件"],
            childUrl:["5-1","5-2"]
    }];

    if (isNaN(num) || num < 0 || num > textArray.length) {
        return
    }

    create(textArray[num - 1]);

    function create(object) {



        var secondPageMain = document.getElementById("second-page-main");

        if (secondPageMain) {
            var frag = document.createDocumentFragment();
            var div = document.createElement("div");
            var li = "";
            for (var i = 1; i <= object.childNum; i++) {
                li += "<li><a href='../thirdPage/page" + num + "-1.html?page="+object.childUrl[i - 1]+"'><div class='intro-img-box'><img src='../image/secondPageImg/img"+object.childUrl[i-1]+".jpg' /></div><h4>" + object.childName[i - 1] + "</h4></a></li>"
            }

            div.innerHTML = "<div id='second-page-bigimg'><div id='second-page-bigimg-box'><img src='../image/secondPageImg/page"+num+".jpg' /></div><div id ='second-page-bigimg-header' ><span>首页·" + object.name + "</span><h3>" + object.name + "</h3><span class = 'header-intro'>" + object.headerText + "</span></div></div><div id = 'second-page-intro' ><h3>" + object.name + "</h3><hr/><ul>" + li + "</ul></div>";;

            frag.appendChild(div);

            secondPageMain.appendChild(frag);

        } else {
            return
        }

    }

}
