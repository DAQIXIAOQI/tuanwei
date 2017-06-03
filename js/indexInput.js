function articleInput() {


    /*----------校园大事件数据插入-------------*/
    var schoolNewThing = getListData(5)
    /*左边图片标题文字插入*/
    var newthingLeft = document.getElementById("index-latestnews-main-left");
    var newthingLeftHeader = document.getElementById("index-latestnews-main-left-text-box").getElementsByTagName("h4")[0];
    var newthingLeftText = document.getElementById("index-latestnews-main-left-text-box").getElementsByTagName("span")[0];

    newthingLeftHeader.innerHTML = "外国语学院举行党建暨党风廉政建设工作会议";
    newthingLeftText.innerHTML = "4月19日，外国语学院在兴教楼105召开了党建暨党风廉政建设专题工作会议，外国语学院党政领导班子、学院党委委员...(04-19)";
    newthingLeft.className += "article";
    

    /*右边列表填充*/

    var newthingRight = document.getElementById("index-latestnews-main-right");

    var newthingRightLi = newthingRight.getElementsByTagName("li");

    insertLi(newthingRightLi, schoolNewThing[0]);

    /*----------学院风采数据插入-------------*/
    var showThing = getListData(1);
    var facultyShow = getClassName("sameworks", document)[0];
    var facultyShowLi = facultyShow.getElementsByTagName("li");
    insertLi(facultyShowLi, showThing[10]);
    
    
    /*--------------最新通知数据插入--------------------*/
    var announcement = getListData(5);
    var announcementShow = document.getElementById("index-nextworks");
    var announcementShowLi = announcementShow.getElementsByTagName("li");
    insertLi(announcementShowLi,announcement[1]);
    
    /*----------------共青要闻数据插入----------------*/
    var youngNewShow = getClassName("sameworks", document)[1];
    var youngNew = getListData(3);
    var youngNewShowLi = youngNewShow.getElementsByTagName("li");
    insertLi(youngNewShowLi,youngNew[2]);
    
    /*---------------一学一做数据插入-----------------------*/
    var studyAndDoShow = getClassName("sameworks",document)[2];
    var studyAndDo = getListData(2);
    var studyAndDoLi = studyAndDoShow.getElementsByTagName("li");
    insertLi(studyAndDoLi,studyAndDo[4]);



    //通用函数
    function insertLi(list, datas) {

       
        for (var i = 0; i < list.length; i++) {
            var data = datas[i] ;
            var title = list[i].getElementsByTagName("a")[0];
            var time = list[i].getElementsByTagName("span")[0];

            
            if(data){
            
            list[i].className += (" article" + data.id);
            title.innerHTML = data.title;
            title.title = data.title;
            title.href = "../index/readingPage.html?id="+data.id;
            title.target = "_blank";
            var tim = "";
            var reg = /.*\d{4}-(\d{2})-(\d{2}).*/;

            tim += data.time.replace(reg, "$1");
            tim += "-";
            tim += data.time.replace(reg, "$2");
            time.innerHTML = tim;

            }
            else {
                return
            }
        }

    }
}
