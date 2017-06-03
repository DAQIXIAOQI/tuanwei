//获取非行间样式
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj, false)[attr]
    }
}

//通用运动框架
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
                        //console.log(obj.id,attr,cur);
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

        , 30);

}
//获取class集合
function getClassName(para, obj) {
    obj = obj || document;
    if (obj.getElementsByClassName) {
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
    return (arrClass);
}

function getListData(father, child) {

    var page0103text = [{
        id: "010301",
        title: "共青团广东海洋大学委员会第八周部长例会纪要",
        time: "2017-04-11",
        author: "办公室",
        detail: ""
    }, {
        id: "010302",
        title: "共青团广东海洋大学委员会第九周部长例会纪要",
        time: "2016-10-25",
        author: "办公室",
        detail: ""
    }, {
        id: "010303",
        title: "共青团广东海洋大学委员会办公室工作职能",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010304",
        title: "共青团广大海洋大学委员会组织部工作职能",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010305",
        title: "共青团广东海洋大学委员会宣传部工作职能",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010306",
        title: "共青团广东海洋大学委员会文体部工作职能",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010307",
        title: "共青团广东海洋大学委员会团体部工作职能",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共212131231231会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010310",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010310",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010310",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010310",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010310",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010309",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }, {
        id: "010310",
        title: "校团委学生会、社团07—08学年等级评定",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "010308",
        title: "共青团广东海洋大学委员会简介",
        time: "2009-04-07 ",
        author: "办公室",
        detail: ""
    }];

    var page0201text = [{
        id: "020101",
        title: "共青团广东海洋大学委员会第十周部长例会纪要",
        time: "2017-04-25",
        author: "办公室",
        detail: ""
    }, {
        id: "020102",
        title: "共青团广东海洋大学委员会第八周部长例会纪要",
        time: "2017-04-11",
        author: "办公室",
        detail: ""
    }, {
        id: "020103",
        title: "共青团广东海洋大学委员会第五周部长例会纪要",
        time: "2017-03-21",
        author: "办公室",
        detail: ""
    }, {
        id: "020104",
        title: "共青团广东海洋大学委员会第三周部长例会纪要",
        time: "2017-03-07",
        author: "办公室",
        detail: ""
    }, {
        id: "020105",
        title: "共青团广东海洋大学委员会第一周部长例会纪要",
        time: "2017-02-21",
        author: "办公室",
        detail: ""
    }, {
        id: "020106",
        title: "共青团广东海洋大学委员会第二届第六任秘书长及秘书长助理换届大会纪要",
        time: "2016-12-09",
        author: "办公室",
        detail: ""
    }, {
        id: "020107",
        title: "共青团广东海洋大学委员会第二届第七任秘书长名单",
        time: "2016-12-07",
        author: "办公室",
        detail: ""
    }, {
        id: "020108",
        title: "共青团广东海洋大学委员会办第十五周部长例会纪要",
        time: "2016-12-06",
        author: "办公室",
        detail: ""
    }, {
        id: "020109",
        title: "共青团广东海洋大学委员会第十三周部长例会纪要",
        time: "2016-11-22",
        author: "办公室",
        detail: ""
    }];
    var page0202text = [{
        id: "020201",
        title: "广东海洋大学青年马克思主义者培养工程“海大100”第六期学生骨干培训班名单公示",
        time: "2015-04-13",
        author: "办公室",
        detail: ""
    }, {
        id: "020202",
        title: "第六期青马工程自荐面试圆满结束",
        time: "2015-04-10",
        author: "办公室",
        detail: ""
    }, {
        id: "020203",
        title: "广东海洋大学第十五届“精品团日”活动表彰大会顺利举行",
        time: "2015-03-19",
        author: "办公室",
        detail: ""
    }, {
        id: "020204",
        title: "广东海洋大学第十五届“精品团日”活动获奖名单",
        time: "2015-01-15",
        author: "办公室",
        detail: ""
    }, {
        id: "020205",
        title: "2014年广东海洋大学团委组织部系统大联谊",
        time: "2015-01-04",
        author: "办公室",
        detail: ""
    }, {
        id: "020206",
        title: "广东海洋大学主校区“与信仰对话——让优秀成为习惯”报告辅导会圆满结束",
        time: "2014-12-27",
        author: "办公室",
        detail: ""
    }, {
        id: "020207",
        title: "“与信仰对话-让优秀成为习惯”报告辅导即将开展",
        time: "2014-12-18",
        author: "办公室",
        detail: ""
    }, {
        id: "020208",
        title: "关于开展广东海洋大学“十大红旗团支部”创建工作的通知",
        time: "2014-11-17",
        author: "办公室",
        detail: ""
    }, {
        id: "020209",
        title: "广东海洋大学2014级新生团支书培训",
        time: "2014-11-17",
        author: "办公室",
        detail: ""
    }]
    var page0203text = [{
        id: "020301",
        title: "爱国：勿忘国耻，发愤图强",
        time: "2014-09-28",
        author: "办公室",
        detail: ""
    }, {
        id: "020302",
        title: "庆祝新中国65华诞，青春践行社会主义价值观",
        time: "2014-09-28",
        author: "办公室",
        detail: ""
    }, {
        id: "020303",
        title: "关于广东海洋大学迎新标语设计大赛的通知",
        time: "2014-05-29",
        author: "办公室",
        detail: ""
    }, {
        id: "020304",
        title: "关于征集海洋科技节及海洋文化节Logo的通知",
        time: "2014-05-11",
        author: "办公室",
        detail: ""
    }, {
        id: "020305",
        title: "广东海洋大学第六届书画现场大赛决赛获奖名单",
        time: "2013-12-02",
        author: "办公室",
        detail: ""
    }, {
        id: "020306",
        title: "第六届现场书画大赛",
        time: "2013-11-27",
        author: "办公室",
        detail: ""
    }, {
        id: "020307",
        title: "部门内部新生联谊交流会",
        time: "2013-11-17",
        author: "办公室",
        detail: ""
    }, {
        id: "020308",
        title: "2013年部门招新系列",
        time: "2013-11-07",
        author: "办公室",
        detail: ""
    }, {
        id: "020309",
        title: "10.1国庆升旗活动",
        time: "2013-10-23",
        author: "办公室",
        detail: ""
    }]
    var page0204text = [{
        id: "020401",
        title: "第十三届海洋科技文化艺术节",
        time: "2012-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "020402",
        title: "纪念建团90周年暨“五四”运动93周年表彰大会",
        time: "2012-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "020403",
        title: "纪念建团90周年“蔚蓝旋律”大型歌舞比赛",
        time: "2012-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "020404",
        title: "我校学子参加湛江市麻章区歌唱比赛",
        time: "2010-12-12",
        author: "办公室",
        detail: ""
    }, {
        id: "020405",
        title: "关于举办第五届广东大学生校园文化艺术节之广东大学生校园歌手大赛湛江分赛区的通知",
        time: "2010-12-12",
        author: "办公室",
        detail: ""
    }, {
        id: "020406",
        title: "关于举办第五届广东大学生校园文化艺术节之广东大学生舞蹈大赛湛江分赛区的通知",
        time: "2010-12-12",
        author: "办公室",
        detail: ""
    }, {
        id: "020407",
        title: "关于举办“弘扬红色文化，抵制‘三俗’之风”合唱比赛的通知",
        time: "2010-12-12",
        author: "办公室",
        detail: ""
    }, {
        id: "020408",
        title: "关于在全校招募广东海洋大学学生合唱团队员的通知",
        time: "2010-12-12",
        author: "办公室",
        detail: ""
    }, {
        id: "020409",
        title: "广东海洋大学第二课堂活动申请相关表格",
        time: "2010-12-12",
        author: "办公室",
        detail: ""
    }]
    var page0205text = [{
            id: "020501",
            title: "“梦想沃之星”职业风采挑战赛广东海洋大学站比赛完满落幕",
            time: "2012-12-24",
            author: "办公室",
            detail: ""
    }, {
            id: "020502",
            title: "校团委秘书长换届大会顺利举行",
            time: "2012-12-19",
            author: "办公室",
            detail: ""
    },
        {
            id: "020503",
            title: " “喜迎十八大，描绘青春蓝图”之报刊创作大赛",
            time: "2012-11-11",
            author: "办公室",
            detail: ""
    }]
    var page0206text = [{
        id: "020601",
        title: "2014年校团委社会实践部新生见面会",
        time: "2014-10-15",
        author: "办公室",
        detail: ""
    }, {
        id: "020602",
        title: "关于2013年社会实践活动表彰大会暨2014年暑期社会实践出征仪式的预通知",
        time: "2014-06-30",
        author: "办公室",
        detail: ""
    }, {
        id: "020603",
        title: "2014年暑期社会实践活动队长培训",
        time: "2014-06-20",
        author: "办公室",
        detail: ""
    }, {
        id: "020604",
        title: "2014年展翅计划培训",
        time: "2014-06-13",
        author: "办公室",
        detail: ""
    }, {
        id: "020605",
        title: "我校举办2014年暑期社会实践校级答辩",
        time: "2014-06-0",
        author: "办公室",
        detail: ""
    }, {
        id: "020606",
        title: "2014年社会实践部第二次系统例会",
        time: "2014-04-26",
        author: "办公室",
        detail: ""
    }, {
        id: "020607",
        title: "校团委社会实践部13级新生第四轮面试",
        time: "2014-03-30",
        author: "办公室",
        detail: ""
    }, {
        id: "020608",
        title: "2013年暑期社会实践团队交流会圆满成功",
        time: "2013-12-05",
        author: "办公室",
        detail: ""
    }, {
        id: "020609",
        title: "镜子里的你，伴我成长——2013暑期社会实践团队交流会",
        time: "2013-12-04",
        author: "办公室",
        detail: ""
    }]
    var page0207text = [{
        id: "020701",
        title: "关于表彰我校第六届“挑战杯”大学生",
        time: "2012-09-20",
        author: "办公室",
        detail: ""
    }, {
        id: "020702",
        title: "福克斯",
        time: "2009-11-30",
        author: "办公室",
        detail: ""
    }, {
        id: "020703",
        title: "校团委科技创新部工作协助小组招聘",
        time: "2009-10-21",
        author: "办公室",
        detail: ""
    }]
    var page0208text = [{
        id: "020801",
        title: "校艺术团开始火热招新啦",
        time: "2009-10-10",
        author: "办公室",
        detail: ""
    }, {
        id: "020802",
        title: "艺术团部门及表演队简介",
        time: "2009-09-29",
        author: "办公室",
        detail: ""
    }]
    var page0209text = [{
        id: "020901",
        title: "广东海洋大学2014年雷锋月项目活动总结暨颁奖大会",
        time: "2014-04-10",
        author: "办公室",
        detail: ""
    }, {
        id: "020902",
        title: "爱心助果农，付出靠大家",
        time: "2013-11-20",
        author: "办公室",
        detail: ""
    }, {
        id: "020903",
        title: "2012年和2013年上半年青协特色活动",
        time: "2013-07-06",
        author: "办公室",
        detail: ""
    }, {
        id: "020904",
        title: "2013年全民学雷锋之雷历锋行专题策划",
        time: "2013-04-11",
        author: "办公室",
        detail: ""
    }, {
        id: "020905",
        title: "为你提供一个服务校园的平台——第二届“服务集市”招标火热进行中",
        time: "2013-04-11",
        author: "办公室",
        detail: ""
    }, {
        id: "020906",
        title: "2012—2013学年第二学期青协第一次例会",
        time: "2013-04-11",
        author: "办公室",
        detail: ""
    }, {
        id: "020907",
        title: "关于广东海洋大学2012-2013学年第二学期及2013年寒假志愿服务认证的通知",
        time: "2013-04-09",
        author: "办公室",
        detail: ""
    }, {
        id: "020908",
        title: "2013学年第一学期青协第一次例会",
        time: "2012-10-09",
        author: "办公室",
        detail: ""
    }, {
        id: "020909",
        title: " 广东海洋大学青年志愿者协会简介",
        time: "2012-09-25",
        author: "办公室",
        detail: ""
    }]
    var page0210text = [{
        id: "021001",
        title: "水产学院召开2012级新生入学教育大会",
        time: "2012-09-19",
        author: "办公室",
        detail: ""
    }, {
        id: "021002",
        title: "水产学院组织2012级新生参观水生博物馆",
        time: "2012-09-19",
        author: "办公室",
        detail: ""
    }, {
        id: "021003",
        title: "水产学院团委学生会大例会",
        time: "2012-09-19",
        author: "办公室",
        detail: ""
    }, {
        id: "021004",
        title: "水产学院新生入学教育及感恩交流会",
        time: "2012-09-19",
        author: "办公室",
        detail: ""
    }, {
        id: "021005",
        title: "满怀信心，办好生物化学实验技能大赛",
        time: "2012-03-28",
        author: "办公室",
        detail: ""
    }, {
        id: "021006",
        title: "水产学院英文演讲比赛（初赛）",
        time: "2012-03-27",
        author: "办公室",
        detail: ""
    }, {
        id: "021007",
        title: "水院唱响关爱女生之歌",
        time: "2012-03-08",
        author: "办公室",
        detail: ""
    }, {
        id: "021008",
        title: "水产学院顺利召开团委学生会2011年总结表彰大会",
        time: "2011-12-29",
        author: "办公室",
        detail: ""
    }, {
        id: "021009",
        title: "广东海洋大学第十二届校运会开幕盛典",
        time: "2011-12-13",
        author: "办公室",
        detail: ""
    }]
    var page0211text = [{
        id: "021101",
        title: "2016学生会小鲜肉素质拓展",
        time: "2016-11-24",
        author: "办公室",
        detail: ""
                        }, {
        id: "021102",
        title: "海洋技术1152团支部精品团活动展示",
        time: "2016-05-22",
        author: "办公室",
        detail: ""
                        }, {
        id: "021103",
        title: "海洋与气象学院海洋1142班团支部主题团日活动",
        time: "2015-12-12",
        author: "办公室",
        detail: ""
                        }, {
        id: "021104",
        title: "海洋与气象学院“奔跑·寻宝·撕名牌”活动报道",
        time: "2015-04-09",
        author: "办公室",
        detail: ""
                        }, {
        id: "021105",
        title: "海洋与气象学院新生杯辩论赛落下帷幕",
        time: "2014-11-28",
        author: "办公室",
        detail: ""
                        }, {
        id: "021106",
        title: "海洋与气象学院2013年素质拓展报道稿",
        time: "2014-11-22",
        author: "办公室",
        detail: ""
                        }, {
        id: "021107",
        title: "广东海洋大学第十三届海洋科技文化艺术节开幕式暨“3.23”世界气象日文艺晚会",
        time: "2012-03-25",
        author: "办公室",
        detail: ""
                        }, {
        id: "021108",
        title: "梦幻女生晚会报道稿",
        time: "2012-03-20",
        author: "办公室",
        detail: ""
                        }, {
        id: "021109",
        title: "海洋与气象学院与南海舰队篮球赛",
        time: "2012-03-17",
        author: "办公室",
        detail: ""
                        }]
    var page0212text = [{
        id: "021201",
        title: "食品科技学院第十三届宿舍文化节 之第九届宿舍活动日顺利举行",
        time: "2017-05-07",
        author: "食品科技学院",
        detail: ""
                        }, {
        id: "021202",
        title: "广东省学生联合会第十一次代表大会 培训课程正式召开",
        time: "2017-03-31",
        author: "办公室",
        detail: ""
                        }, {
        id: "021203",
        title: "食品科技文化节正式开幕",
        time: "2017-03-28",
        author: "办公室",
        detail: ""
                        }, {
        id: "021204",
        title: "食院早检动员大会顺利召开",
        time: "2017-03-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "021205",
        title: "2017食品科技学院 寒假社会实践活动动员大会",
        time: "2016-12-28",
        author: "办公室",
        detail: ""
                        }, {
        id: "021206",
        title: "2016年食品科技学院团委学生会换届大会",
        time: "2016-12-25",
        author: "办公室",
        detail: ""
                        }, {
        id: "021207",
        title: "食品科技学院 第七届趣味创意大赛之彩绘面具制作大赛",
        time: "2016-12-11",
        author: "办公室",
        detail: ""
                        }, {
        id: "021208",
        title: "食品科技学院第十五届“新生杯”辩论赛决赛",
        time: "2016-12-02",
        author: "办公室",
        detail: ""
                        }, {
        id: "021209",
        title: "食品科技学院第八届中文演讲比赛决赛",
        time: "2016-12-02",
        author: "办公室",
        detail: ""
                        }]
    var page0213text = [{
        id: "021301",
        title: "广东海洋大学农学院第十一届“精品团日”活动已经圆满落下帷幕",
        time: "2013-11-29",
        author: "办公室",
        detail: ""
                        }, {
        id: "021302",
        title: "农学院第十四届“新生杯”辩论赛决赛",
        time: "2013-11-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "021303",
        title: "农学院第十四届“新生杯”辩论赛季军赛",
        time: "2013-11-25",
        author: "办公室",
        detail: ""
                        }, {
        id: "021304",
        title: "农学院第十一届精品团日活动闭幕式通讯稿",
        time: "2013-11-25",
        author: "办公室",
        detail: ""
                        }, {
        id: "021305",
        title: "2012-05-23",
        time: "第四届风筝设计大赛",
        author: "办公室",
        detail: ""
                        }, {
        id: "021306",
        title: "农学院第二届DV创作大赛决赛",
        time: "2012-05-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "021307",
        title: "农学院“五四精神”主题演讲比赛成功举行",
        time: "2012-05-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "021308",
        title: "农学院第三届上野家寿司大赛",
        time: "2012-05-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "021309",
        title: "辩论赛通讯稿",
        time: "2012-05-23",
        author: "办公室",
        detail: ""
                        }]
    var page0214text = [{
        id: "021401",
        title: "如果你愿意听，我不想说再见 | 我相遇的团委学生会（上）",
        time: "2017-03-3",
        author: "办公室",
        detail: ""
                        }, {
        id: "021402",
        title: "BIM/海洋工程学院第一届广联达大赛来袭",
        time: "2017-03-3",
        author: "办公室",
        detail: ""
                        }, {
        id: "021403",
        title: " 第二集|晒出身边的小雷锋之不忘初心，一直在路上",
        time: "2017-03-31",
        author: "办公室",
        detail: ""
                        }, {
        id: "021404",
        title: "树立品牌，突出特色—机动学院团委2016工作总结",
        time: "2017-03-27",
        author: "办公室",
        detail: ""
                        }, {
        id: "021405",
        title: "第十七届“工程杯”篮球比赛闭幕式",
        time: "2016-12-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "021406",
        title: "你的名字，叫寒假社会实践。",
        time: "2016-12-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "021407",
        title: "赛事|海工院与机动院“新生杯”辩论赛半决赛",
        time: "2016-11-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "021408",
        title: "广东海洋大学第17届田径运动会开幕式",
        time: "2016-11-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "021409",
        title: "机械与动力工程学院、海洋工程学院第十八届“精品团日”活动表彰大会暨经验交流分享会",
        time: "2016-10-31",
        author: "办公室",
        detail: ""
                        }]
    var page0215text = [{
        id: "021501",
        title: "2016学生会小鲜肉素质拓展",
        time: "2016-11-24",
        author: "办公室",
        detail: ""
                        }, {
        id: "021502",
        title: "海洋技术1152团支部精品团活动展示",
        time: "2016-05-22",
        author: "办公室",
        detail: ""
                        }, {
        id: "021503",
        title: "海洋与气象学院海洋1142班团支部主题团日活动",
        time: "2015-12-12",
        author: "办公室",
        detail: ""
                        }, {
        id: "021504",
        title: "海洋与气象学院“奔跑·寻宝·撕名牌”活动报道",
        time: "" /*20150409*/ ,
        author: "办公室",
        detail: ""
                        }, {
        id: "021505",
        title: "海洋与气象学院新生杯辩论赛落下帷幕",
        time: "" /*20141128*/ ,
        author: "办公室",
        detail: ""
                        }, {
        id: "021506",
        title: "海洋与气象学院2013年素质拓展报道稿",
        time: "2013-11-22",
        author: "办公室",
        detail: ""
                        }, {
        id: "021507",
        title: "广东海洋大学第十三届海洋科技文化艺术节开幕式暨“3.23”世界气象日文艺晚会",
        time: "2012-03-25",
        author: "办公室",
        detail: ""
                        }, {
        id: "021508",
        title: "梦幻女生晚会报道稿",
        time: "2012-03-20",
        author: "办公室",
        detail: ""
                        }, {
        id: "021509",
        title: "海洋与气象学院与南海舰队篮球赛",
        time: "2012-03-17",
        author: "办公室",
        detail: ""
                        }]
    var page0216text = [{
        id: "021601",
        title: "广东海洋大学经济管理学院校园开放日报道",
        time: "2016-06-20",
        author: "办公室",
        detail: ""
                        }, {
        id: "021602",
        title: "广东海洋大学“海洋科技文化节”之第七届模拟国际商务谈判大赛总决赛报道",
        time: "2016-06-05",
        author: "办公室",
        detail: ""
                        }, {
        id: "021603",
        title: "关于经济管理学院团委开展第十八届“精品团日”活动报道",
        time: "2016-05-24",
        author: "办公室",
        detail: ""
                        }, {
        id: "021604",
        title: "第七届模拟国际商务谈判大赛半决赛报道",
        time: "2016-05-24",
        author: "办公室",
        detail: ""
                        }, {
        id: "021605",
        title: "第七届模拟国际商务谈判大赛复赛报道",
        time: "2016-05-12",
        author: "办公室",
        detail: ""
                        }, {
        id: "021606",
        title: "第七届模拟国际商务谈判大赛初赛报道",
        time: "2016-04-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "021607",
        title: "第七届模拟国际商务谈判大赛专题讲座报道",
        time: "2016-04-25",
        author: "办公室",
        detail: ""
                        }, {
        id: "021608",
        title: "第七届模拟国际商务谈判大赛资格赛报道",
        time: "2016-04-25",
        author: "办公室",
        detail: ""
                        }, {
        id: "021609",
        title: "升旗报道",
        time: "015-12-14",
        author: "办公室",
        detail: ""
                        }]
    var page0217text = []
    var page0218text = []
    var page0219text = [{
        id: "021901",
        title: "我院邀请企业来校洽谈产学研合作项目",
        time: "2016-09-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "021902",
        title: "我院在第七届蓝桥杯全国软件和信息技术人才大赛全国总决赛中获佳绩",
        time: "2016-06-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "021903",
        title: "湖南大学博导廖波教授应邀到我院做学术报告",
        time: "2016-05-18",
        author: "办公室",
        detail: ""
                        }, {
        id: "021904",
        title: "我校在第七届“蓝桥杯” 全国软件和信息技术专业人才大赛",
        time: "2016-04-28",
        author: "办公室",
        detail: ""
                        }, {
        id: "021905",
        title: "广州大学谢冬青博导到我院进行学术交流",
        time: "2015-12-30",
        author: "办公室",
        detail: ""
                        }, {
        id: "021906",
        title: "把握时代脉搏 创造美好未来",
        time: "2015-11-06",
        author: "办公室",
        detail: ""
                        }, {
        id: "021907",
        title: "小善大爱，责无旁贷，风雨同行---我院师生全力以赴抗风救灾",
        time: "2015-10-20",
        author: "办公室",
        detail: ""
                        }, {
        id: "021908",
        title: "我院成立广州校友会分会",
        time: "2015-09-30",
        author: "办公室",
        detail: ""
                        }, {
        id: "021909",
        title: "于举办粤西高校第三届IT论坛（学生）征文的通知",
        time: "2015-07-02",
        author: "办公室",
        detail: ""
                        }]
    var page0220text = []
    var page0221text = [{
        id: "022101",
        title: "航海学院 航海1133班 第一届宿舍杯篮球赛",
        time: "2015-10-21",
        author: "办公室",
        detail: ""
                        }, {
        id: "022102",
        title: "航海学院第一届“笑迎校庆” T恤DIY设计大赛工作报告",
        time: "2015-06-04",
        author: "办公室",
        detail: ""
                        }, {
        id: "022103",
        title: "航海学院举办第二届海洋模型设计大赛",
        time: "015-05-12",
        author: "办公室",
        detail: ""
                        }, {
        id: "022104",
        title: "2014航海学院宣传部工作总结",
        time: "2015-03-24",
        author: "办公室",
        detail: ""
                        }, {
        id: "022105",
        title: "广东海洋大学航模设计大赛活动策划书（模型组)",
        time: "2015-03-21",
        author: "办公室",
        detail: ""
                        }, {
        id: "022106",
        title: "航海1102班“精品团日”系列活动",
        time: "2015-03-21",
        author: "办公室",
        detail: ""
                        }, {
        id: "022107",
        title: "航海学院第十三届精品团日活动——陆上1122优秀支部总结书",
        time: "2013-11-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "022108",
        title: "航海学院第十三届精品团日活动——交通1122优秀支部策划书",
        time: "2013-11-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "022109",
        title: "航海学院第五届水果拼盘比赛",
        time: "2012-06-09",
        author: "办公室",
        detail: ""
                        }]

    var page0222text = [{
        id: "022201",
        title: "普法之星因你而闪耀",
        time: "2017-04-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "022202",
        title: "学团章、知团史、守团规--宣讲交流会",
        time: "2017-04-26",
        author: "办公室",
        detail: ""
                        }, {
        id: "022203",
        title: "我校法政学院参加湛江市2017年“岭南社工宣传周”活动",
        time: "2017-03-22",
        author: "办公室",
        detail: ""
                        }, {
        id: "022204",
        title: "燃志愿之火，传奉献精神 ——法政学院第一届志愿服务队启动仪式纪要",
        time: "2017-03-12",
        author: "办公室",
        detail: ""
                        }, {
        id: "022205",
        title: "法政学院与霞山人民法院共建党建暨青马工程开班仪式成功举行",
        time: "2016-12-14",
        author: "办公室",
        detail: ""
                        }, {
        id: "022206",
        title: "友谊辩赛，颠峰对决",
        time: "2016-12-14",
        author: "办公室",
        detail: ""
                        }, {
        id: "022207",
        title: "“一路有你，青春不悔”法政学院第一届团委学生会主席团暨部长换届大会",
        time: "2016-11-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "022208",
        title: "“细听歌语 岁月留声”法政学院第一届十大歌手决赛",
        time: "2016-11-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "022209",
        title: "【第八届“华图杯”模拟公务员考试大赛决赛】成功举办",
        time: "2016-10-24",
        author: "办公室",
        detail: ""
                        }]

    var page0223text = [{
        id: "022301",
        title: "秘书1163秘书1164联合支部精品团日活动",
        time: "2017-04-21",
        author: "办公室",
        detail: ""
                        }, {
        id: "022302",
        title: "文学1167文学1168联合支部精品团日活动展示",
        time: "2017-04-21",
        author: "办公室",
        detail: ""
                        }, {
        id: "022303",
        title: "文学1162 | 我们的“团员”街活动",
        time: "2017-04-20",
        author: "办公室",
        detail: ""
                        }, {
        id: "022304",
        title: "文学1165&1166联合支部",
        time: "2017-04-19",
        author: "办公室",
        detail: ""
                        }, {
        id: "022305",
        title: "秘书1161-1162联合支部团日活动",
        time: "2017-04-19",
        author: "办公室",
        detail: ""
                        }, {
        id: "022306",
        title: "文学1155-1156精品团日活动开展情况",
        time: "2016-11-20",
        author: "办公室",
        detail: ""
                        }, {
        id: "022307",
        title: "汉语国际教育1161＆1162联合团支部精品团班会",
        time: "2016-11-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "022308",
        title: "文院团委2013学年第一次例会",
        time: "2013-10-27",
        author: "办公室",
        detail: ""
                        }, {
        id: "022309",
        title: "办公室&团讯部门聚餐",
        time: "2013-10-27",
        author: "办公室",
        detail: ""
                        }]
    var page0224text = [{
        id: "022401",
        title: "【共青团】2017年外院团员学习教育宣讲会",
        time: "2017-04-24",
        author: "办公室",
        detail: ""
                        }, {
        id: "022402",
        title: "第十四届“Dream It Possible”外文歌唱比赛 你要登台吗？",
        time: "2017-03-27",
        author: "办公室",
        detail: ""
                        }, {
        id: "022403",
        title: "会议】2017年寒假社会实践宣讲会",
        time: "2016-12-27",
        author: "办公室",
        detail: ""
                        }, {
        id: "022404",
        title: "【活动】第十二届中文十大歌唱比赛初赛结果出炉~",
        time: "2016-10-27",
        author: "办公室",
        detail: ""
                        }, {
        id: "022405",
        title: "军歌不老 外院光荣",
        time: "2016-09-28",
        author: "办公室",
        detail: ""
                        }, {
        id: "022406",
        title: "【活动】社会实践答辩！",
        time: "2016-06-21",
        author: "办公室",
        detail: ""
                        }, {
        id: "022407",
        title: "广东海洋大学外国语学院第13届外文歌唱大赛决赛",
        time: "2016-05-31",
        author: "办公室",
        detail: ""
                        }, {
        id: "022408",
        title: "广东海洋大学外国语学院第13届外文歌唱大赛决赛",
        time: "2016-04-26",
        author: "办公室",
        detail: ""
                        }]
    var page0225text = [{
        id: "022501",
        title: "服装1161支部精品团日活动成果展示",
        time: "2016-11-15",
        author: "办公室",
        detail: ""
                        }, {
        id: "022502",
        title: "服装1162团支部精品团活动",
        time: "2016-11-15",
        author: "办公室",
        detail: ""
                        }, {
        id: "022503",
        title: "环设1162 精品团日活动成果",
        time: "2016-11-14",
        author: "办公室",
        detail: ""
                        }, {
        id: "022504",
        title: "中歌艺术学院第十六届精品团活动日",
        time: "2015-12-10",
        author: "办公室",
        detail: ""
                        }, {
        id: "022505",
        title: "艺院“学雷锋，迎世博”35个瞬间活动",
        time: "2010-04-10",
        author: "办公室",
        detail: ""
                        }, {
        id: "022506",
        title: "艺院“同扫艺术楼”活动",
        time: "2010-04-10",
        author: "办公室",
        detail: ""
                        }, {
        id: "022507",
        title: "艺院“同扫艺术楼”活动",
        time: "2010-04-09",
        author: "办公室",
        detail: ""
                        }, {
        id: "022508",
        title: "艺院“同扫艺术楼”活动",
        time: "2010-04-09",
        author: "办公室",
        detail: ""
                        }, {
        id: "022509",
        title: "农学院书画比赛",
        time: "2010-04-02",
        author: "办公室",
        detail: ""
                        }]
    var page0226text = [];
    var page0227text = [{
        id: "022701",
        title: "动员大会",
        time: "2010-04-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "022702",
        title: "迎亚运志愿服务活动--敬老院",
        time: "2010-04-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "022703",
        title: "09级第二轮面试",
        time: "2010-04-06",
        author: "办公室",
        detail: ""
                        }, {
        id: "022704",
        title: "团队建设",
        time: "2010-04-05",
        author: "办公室",
        detail: ""
                        }, {
        id: "022705",
        title: "体院“我爱祖国，我爱家”中文演讲比赛",
        time: "2009-11-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "022706",
        title: "第十一届“海大杯”足球赛开幕",
        time: "2009-11-07",
        author: "办公室",
        detail: ""
                        }, {
        id: "022707",
        title: "体育与休闲学院第六届十大歌手决赛",
        time: "2009-11-23",
        author: "办公室",
        detail: ""
                        }, {
        id: "022708",
        title: "体育与休闲学院“院长接待日”报告",
        time: "2009-11-19",
        author: "办公室",
        detail: ""
                        }, {
        id: "022709",
        title: "体育与休闲学院第一届“新生杯”辩论赛",
        time: "2009-11-18",
        author: "办公室",
        detail: ""
                        }]
    var page0301text = [{
        id: "030101",
        title: "广东海洋大学第一届数学建模竞赛获奖名单",
        time: "2013-07-08",
        author: "办公室",
        detail: ""
    }, {
        id: "030102",
        title: "2013全国数学建模竞赛参赛名单",
        time: "2013-07-08",
        author: "办公室",
        detail: ""
    }, {
        id: "030103",
        title: "关于举办第七届广东大学生科技学术节之“用友杯”企业经营模拟沙盘大赛的通知",
        time: "2013-04-22",
        author: "办公室",
        detail: ""
    }, {
        id: "030104",
        title: "关于举办第七届广东大学生科技学术节之第三届粤港澳大学生计算机软件应用大赛的通知",
        time: "2013-04-22",
        author: "办公室",
        detail: ""
    }, {
        id: "030105",
        title: "关于举办第七届广东大学生科技学术节之第四届广东大学生英语综合技能大赛的通知",
        time: "2013-04-22",
        author: "办公室",
        detail: ""
    }, {
        id: "030106",
        title: "关于举办第七届广东大学生科技学术节的预发通知",
        time: "2013-04-17",
        author: "办公室",
        detail: ""
    }, {
        id: "030107",
        title: "关于举办第七届广东大学生科技学术节之大学生模拟商务谈判大赛的通知",
        time: "2013-04-17",
        author: "办公室",
        detail: ""
    }, {
        id: "030108",
        title: "关于举办第七届广东大学生科技学术节活动之节能减排工业设计大赛的通知",
        time: "2013-04-17",
        author: "办公室",
        detail: ""
    }, {
        id: "030109",
        title: "第六届全国大学生节能减排社会实践与科技竞赛的通知",
        time: "2013-03-07",
        author: "办公室",
        detail: ""
    }]
    var page0302text = [{
        id: "030201",
        title: "心志愿，新精彩",
        time: "2014-10-11",
        author: "办公室",
        detail: ""
    }, {
        id: "030202",
        title: "《三月》与你相见",
        time: "2014-08-13",
        author: "办公室",
        detail: ""
    }, {
        id: "030203",
        title: "广东海洋大学青年志愿者协会6月份例会",
        time: "2014-06-30",
        author: "办公室",
        detail: ""
    }, {
        id: "030204",
        title: "2014志愿工作总结交流会暨表彰大会",
        time: "2014-05-06",
        author: "办公室",
        detail: ""
    }, {
        id: "030205",
        title: "湛江创卫 海大在行动",
        time: "2014-03-24",
        author: "办公室",
        detail: ""
    }, {
        id: "030206",
        title: "志愿风采，绚丽青春1",
        time: "2014-03-24",
        author: "办公室",
        detail: ""
    }, {
        id: "030207",
        title: "广东海洋大学青年志愿者协会11月例会",
        time: "2013-12-12",
        author: "办公室",
        detail: ""
    }, {
        id: "030208",
        title: "青春志愿行•愿爱达四方",
        time: "2013-12-10",
        author: "办公室",
        detail: ""
    }, {
        id: "030209",
        title: "关于评选表彰2013年广东海洋大学优秀志愿服务项目、先进集体和个人的通知",
        time: "2013-12-10",
        author: "办公室",
        detail: ""
    }]
    var page0303text = [{
        id: "030301",
        title: "广东海洋大学第二届榜样之星复评候选人",
        time: " 2013-12-13",
        author: "办公室",
        detail: ""
    }, {
        id: "030302",
        title: "广东海洋大学第二届榜样之星评选活动",
        time: "2013-11-18",
        author: "办公室",
        detail: ""
    }, {
        id: "030303",
        title: "“学习贯彻十八大精神，让青春焕发绚丽光彩”演讲比赛初赛选手演讲稿汇编",
        time: "2013-07-11",
        author: "办公室",
        detail: ""
    }, {
        id: "030304",
        title: "广东海洋大学诚信考试倡议书",
        time: "2013-06-14",
        author: "办公室",
        detail: ""
    }]
    var page0304text = [{
        id: "030401",
        title: "2014年暑期社会实践活动队长培训",
        time: "2014-06-20",
        author: "办公室",
        detail: ""
    }, {
        id: "030402",
        title: "2014年展翅计划培训",
        time: "2014-06-13",
        author: "办公室",
        detail: ""
    }, {
        id: "030403",
        title: "我校团委召开“展翅计划”工作部署会议",
        time: "2014-06-07",
        author: "办公室",
        detail: ""
    }, {
        id: "030404",
        title: "我校举办2014年暑期社会实践校级答辩",
        time: "2014-06-07",
        author: "办公室",
        detail: ""
    }, {
        id: "030405",
        title: "镜子里的你，伴我成长——2013暑期社会实践团队交流会",
        time: "2013-12-04",
        author: "办公室",
        detail: ""
    }, {
        id: "030406",
        title: "2013年暑期社会实践团队风采展示",
        time: "2013-09-25",
        author: "办公室",
        detail: ""
    }, {
        id: "030407",
        title: "2013年暑期社会实践团队风采展示",
        time: "2013-09-25",
        author: "办公室",
        detail: ""
    }, {
        id: "030408",
        title: "关于做好广东海洋大学2013年暑期社会实践活动安全工作的通知",
        time: "2013-07-16",
        author: "办公室",
        detail: ""
    }, {
        id: "030409",
        title: "2012到2013年度社会实践表彰暨2013暑期社会实践出征仪式已整装待发",
        time: "2013-07-07",
        author: "办公室",
        detail: ""
    }]
    var page0305text = [{
        id: "030501",
        title: "海洋工程学院“一学一做”我们有话讲",
        time: "2017-05-09",
        author: "海洋工程学院",
        detail: ""
    }, {
        id: "030502",
        title: "化学与环境学院 “我的青春我的梦——学习总书记讲话 做合格共青团员”征文比赛资料",
        time: "2017-05-07",
        author: "化学与环境学院",
        detail: ""
    }, {
        id: "030503",
        title: "用“实干精神”去追梦 ——不变初心跟党走",
        time: "2017-05-06",
        author: "管理学院",
        detail: ""
    }, {
        id: "030504",
        title: "广东海洋大学“我的青春我的梦——学习总书记讲话 做合格共青团员”征文最终版",
        time: "2017-05-06",
        author: "外国语学院",
        detail: ""
    }, {
        id: "030505",
        title: "海洋工程学院+我的青春我的梦——学习习总书记讲话 做合格共青团员",
        time: "2017-05-06",
        author: "海洋工程学院",
        detail: ""
    }, {
        id: "030506",
        title: "学习习总书记讲话，做合格共青团员——喜迎十九大，坚定跟党走",
        time: "2017-05-05",
        author: "法政学院",
        detail: ""
    }]
    var page0401text = [{
        id: "040101",
        title: "团的经费",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040102",
        title: "团旗、团徽、团歌、团员证",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040103",
        title: "团的干部",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040104",
        title: "团的基层组织",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040105",
        title: "团的地方和军队的组织",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040106",
        title: "团的中央组织",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040107",
        title: "团的组织制度",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040108",
        title: "团 员",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }, {
        id: "040109",
        title: "总 则",
        time: "2013-07-04",
        author: "办公室",
        detail: ""
    }]
    var page0402text = [{
        id: "040201",
        title: "限时办结制",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040202",
        title: "首问责任制",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040203",
        title: "服务承诺制",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040204",
        title: "团委各项工作流程",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040205",
        title: "志愿服务活动审批流程图",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040206",
        title: "协会成立工作流程图",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040207",
        title: "推优工作流程图",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040208",
        title: "团章考试流程图",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }, {
        id: "040209",
        title: "团关系转接流程图",
        time: "2013-09-16",
        author: "办公室",
        detail: ""
    }]
    var page0403text = [{
        id: "040301",
        title: "李源潮同志在全国青联十二届二次常委(扩大) 会议上的讲话",
        time: "2017-04-01",
        author: "办公室",
        detail: ""
    }, {
        id: "040302",
        title: "广东海洋大学共青团2017年工作要点",
        time: "2017-03-27",
        author: "办公室",
        detail: ""
    }, {
        id: "040303",
        title: "秦宜智：通过改革把青年紧密地团结在党的周围",
        time: "2016-12-30",
        author: "办公室",
        detail: ""
    }, {
        id: "040304",
        title: "秦宜智:拥抱时代改革创新 心存敬畏自强自励",
        time: "2016-12-30",
        author: "办公室",
        detail: ""
    }, {
        id: "040305",
        title: "李源潮：希望广大青年发挥先进性建功“十三五”",
        time: "2016-12-30",
        author: "办公室",
        detail: ""
    }, {
        id: "040306",
        title: "秦宜智：中国青年要争做引领绿色潮流的先行者、实干家、排头兵",
        time: "2016-12-30",
        author: "办公室",
        detail: ""
    }]
    var page0501text = [{
        id: "050101",
        title: "校团委2013年国庆值班安排表",
        time: "2013-10-01",
        author: "办公室",
        detail: ""
    }, {
        id: "050102",
        title: "致全体老师们的一封信",
        time: "2013-09-09",
        author: "办公室",
        detail: ""
    }, {
        id: "050103",
        title: "团省委_关于2013年从全省高校选派团干部和青年教师到县级团委挂职工作的通知",
        time: "22013-09-06",
        author: "办公室",
        detail: ""
    }, {
        id: "050104",
        title: "2008年团委大事记",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "050105",
        title: "2008年校团委学生干部换届大会",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }, {
        id: "050106",
        title: "2008—2009学年第一学期校团委工作要点",
        time: "2009-04-07",
        author: "办公室",
        detail: ""
    }]
    var page0601text = [
        {
            id: "060101",
            title: "我校离退休干部党委组织学习贯彻习近平总书记重要批示精神",
            time: "2017-05-10",
            author: "姜晓霞",
            detail: ""
      } ,
        {
            id: "060102",
            title: "我校第十九届英语演讲比赛暨第十四届外语文化艺术节开幕式成功举办",
            time: "2017-05-10",
            author: "鲁承龙",
            detail: ""
      },
        {
          id:"060103",
        title:"我校举行纪念五四运动98周年暨中国共青团成立95周年文艺晚会",
        time:"2017-05-09",
        author:"辛恺"
      }
        ,{
           id:"060104",
        title:"我校喜获6项2017年省级学校德育项目立项",
        time:"2017-05-07",
        author:"刘国华"
        },{
            id:"060105",
        title:"我校举办2017年世界读书日主题系列活动开幕式",
        time:"2017-05-06",
        author:"蒋定玲"
        },{
            id:"060106",
        title:"我校数学与计算机学院学子参加全国大学生“互联网+”创新大赛获奖",
        time:"2017-05-06",
        author:"姚阳"
        },{
            id:"060107",
        title:"我校召开本科教学工作审核评估自评报告初稿审议会",
        time:"2017-05-06",
        author:"刘靖"
        },{
            id:"060108",
        title:"我校一科研成果获湛江市科学技术奖一等奖",
        time:"2017-05-06",
        author:"张艳梅"
        },{
            id:"060109",
        title:"我校外国语学院举行党建暨党风廉政建设工作会议",
        time:"2017-04-23",
        author:"黄海文"
        }
      ]
    var page0602text = [{
        id: "060201",
        title: "关于我校赴台参加2017暑假海洋夏令营成员名单的通报",
        time: "2017-04-18",
        author: "办公室"
      }, {
        id: "060202",
        title: "关于2016年广东海洋大学“十大红旗团支部”终评结果的通报",
        time: "2017-03-30",
        author: "办公室"
      },{
        id: "060203",
        title: "2015年广东海洋大学优秀志愿服务项目与先进集体、个人名单公示",
        time: "2015-12-03",
        author: "办公室"
      },{
        id: "060204",
        title: "广东海洋大学团委老师联系方式",
        time: "2013-11-27",
        author: "办公室"
      },{
        id: "060205",
        title: "温馨提示（校团委办事流程介绍)",
        time: "2013-11-13",
        author: "办公室"
      }]
    var page1text = ["", "", page0103text];
    //组织建设
    var page2text = [page0201text, page0202text, page0203text, page0204text, page0205text, page0206text, page0207text, page0208text, page0209text, page0210text, page0211text, page0212text, page0213text, page0214text, page0215text, page0216text, page0217text, page0218text, page0219text, page0220text, page0221text, page0222text, page0223text, page0224text, page0225text, page0226text, page0227text];
    var page3text = [page0301text, page0302text, page0303text, page0304text, page0305text];
    var page4text = [page0401text, page0402text, page0403text];
    var page5text = [page0501text, ""];
    var page6text = [page0601text, page0602text];

    var page = [page1text, page2text, page3text, page4text, page5text, page6text];



    if (isNaN(child)) {
        return page[father];
    } else {
        return page[father][child];
    }
}
