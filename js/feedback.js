window.onload = function () {

    insertHeadTail();

    nav();

    openForm();
    closeForm();
    functionForm();
    sentFeedback();
    
    var  disappear = document.getElementById("feedback");
    disappear.style.display = "none";
}


function openForm() {
    var btn = document.getElementById("feedback-channel-input");
    var wrap = document.getElementById("feedback-input-wrap");
    var box = document.getElementById("feedback-input-wrap-box");

    if (btn && wrap && box) {

        var height = box.offsetHeight;
        btn.onclick = function (event) {

            var event = event || window.event;
            event.cancelBubble = true;
            move(wrap, {
                height: height
            });

        }

    } else {
        console.log("failed to get btn , wrap , box");
    }


}

function closeForm() {

    //点击出Btn外的任意地方可以关闭
    var wrap = document.getElementById("feedback-input-wrap");
    window.onclick = function () {
            move(wrap, {
                height: 0
            });
        }
        //点击Btn内的关闭按钮关闭
    var closeBtn = getClassName("form-close", wrap)[0];

    closeBtn.onclick = function (event) {

        var event = event || window.event;
        event.cancelBubble = true;
        move(wrap, {
            height: 0
        });

    }


}

function functionForm() {

    //匿名与不匿名切换函数
    var realBtn = document.getElementById("form-select").getElementsByTagName("button")[0];
    var norealBtn = document.getElementById("form-select").getElementsByTagName("button")[1];
    var realDiv = document.getElementById("form-real");
    var norealDiv = document.getElementById("form-noreal");
    var norealName = document.getElementById("input-norealName", document);
    var changeNameBtn = getClassName("a-change", document)[0];
    if (realBtn && norealBtn && realDiv && norealDiv) {
        realBtn.onclick = function () {
            var reg = /noselect/g;

            if (reg.test(this.className)) {
                this.className = this.className.replace("noselect", "select");
                norealBtn.className = norealBtn.className.replace("select", "noselect");

                realDiv.style.display = "block";
                norealDiv.style.display = "none";
            }
        }
        norealBtn.onclick = function () {
            var reg = /noselect/g;
            //样式切换，内容切换
            if (reg.test(this.className)) {
                this.className = this.className.replace("noselect", "select");
                realBtn.className = realBtn.className.replace("select", "noselect");
                norealDiv.style.display = "block";
                realDiv.style.display = "none";


                //动态生成匿名名称
                if (norealName) {

                    norealName.value = getRandomName();
                }
            }
        }
    } else {
        console.log("failed to get realBtn 、 norealBtn");
    }

    if (changeNameBtn && norealName) {

        changeNameBtn.onclick = function () {
            document.title = "a";
            norealName.value = getRandomName();
        }

    }


}

function getRandomName() {

    var numeral = ["一个", "一坨", "一瓶", "三只", "六把", "八杯", "两本", "十片", "六张"];
    var noun = ["笨猪", "金水", "钥匙扣", "照片", "笔记本", "知更鸟", "骗局", "单词", "魔鬼"]

    return numeral[Math.floor(Math.random() * 9)] + noun[Math.floor(Math.random() * 9)]

}

function sentFeedback() {
    var sentBtn = document.getElementById("form-sent");
    var wrap = document.getElementById("feedback-input-wrap");
    if (sentBtn) {

        sentBtn.onclick = function (event) {

            var event = event || window.event;
            event.cancelBubble = true;
            var realBtn = document.getElementById("form-select").getElementsByTagName("button")[0];
            var realName = document.getElementById("input-realName");
            var norealName = document.getElementById("input-norealName");
            var faculty = document.getElementById("input-faculty");
            var sfeedback = document.getElementById("input-feedback");


            var reg = /noselect/g;
            if (reg.test(realBtn.className)) {
                //表示当前为匿名提交

                //检测是否为空输入
                if (sfeedback.value == "" || norealName == "") {
                    alert("請補全信息");
                    return
                } else {

                    var object = {
                        realName: "",
                        norealName: norealName.value,
                        faculty: "",
                        feedback: sfeedback.value
                    };

                    showFeedback(object);

                }
            } else {
                //表示当前为实名提交

                if (sfeedback.value == "" || realName.value == "" || faculty.value == "") {
                    alert("請補全信息");
                    return
                } else {
                    var object = {
                        realName: realName.value,
                        norealName: "",
                        faculty: faculty.value,
                        feedback: sfeedback.value
                    };
                    showFeedback(object);

                }

            }

            //提交后清空内容
            realName.value = norealName.value = faculty.value = sfeedback.value = "";
            alert("我們已收到你的建議，祝你生活愉快~");
            move(wrap, {
                height: 0
            });
        }

    } else {
        console.log("failed to get sentBtn");
    }

}

function showFeedback(json) {
    
    var name , feedback , time ;
    if(json.realName != "" ){
        name = "来自 "+json.faculty+" 的 "+ json.realName +" 说：";     
    }
    else{
        name = "（匿名）"+json.norealName +" 说："
    }    
    feedback = json.feedback ; 
    var data = new Date();
    time = data.getFullYear() + "-" + (data.getMonth()+1)+"-"+data.getDate();
    
    var ul = document.getElementById("feedback-left-wrap").getElementsByTagName("ul")[0];
    
    var li = document.createElement("li");
    
    li.innerHTML = "<div class='feedback-wrap-item'><p class='feedback-name'>"+name+"</p><p class='feedback-comment'>"+feedback+"</p><p class='feedback-time'>"+time+"</p></div>"
    
    ul.insertBefore(li,ul.children[0]);
    
}
