
function saveInfo(adr, str, data) {
    adr += "_" + str;
    localStorage.setItem(adr, data);
}
function getInfo(adr, str) {
    adr += "_" + str;
    return localStorage.getItem(adr);
}
function saveLocationMark(nowClassInfo) {
    localStorage.BBX_classN = nowClassInfo.length;
    for (var i = 0; i < nowClassInfo.length; i++) {
        var adr = "BBX_classInfo";
        adr += "_" + i;
        saveInfo(adr, "name", nowClassInfo[i].name);
        saveInfo(adr, "teacher", nowClassInfo[i].teacher);
        saveInfo(adr, "beginTime", nowClassInfo[i].beginTime);
        saveInfo(adr, "endTime", nowClassInfo[i].endTime);
        saveInfo(adr, "place", nowClassInfo[i].place);
        saveInfo(adr, "weekDay", nowClassInfo[i].weekDay);
        saveInfo(adr, "bigTime", nowClassInfo[i].bigTime);
    }
}
function getLocationMark() {
    if(localStorage.BBX_classN == null || localStorage == "" || localStorage == "null")
        return null;
    var n = localStorage.BBX_classN;
    var nowClassInfo = new Array();
    for (var i = 0; i < n; i++) {
        nowClassInfo[i] = new Object();
        var adr = "BBX_classInfo";
        adr += "_" + i;
        nowClassInfo[i].name = getInfo(adr, "name");
        nowClassInfo[i].teacher = getInfo(adr, "teacher");
        nowClassInfo[i].beginTime = getInfo(adr, "beginTime");
        nowClassInfo[i].endTime = getInfo(adr, "endTime");
        nowClassInfo[i].place =  getInfo(adr, "place");
        nowClassInfo[i].weekDay = getInfo(adr, "weekDay");
        nowClassInfo[i].bigTime = getInfo(adr, "bigTime");
    }
    return nowClassInfo;
}
function printTheDay(nowClassInfo, day) {
    var res = "<li data-role=\"list-divider\" role=\"heading\" class=\"ui-li ui-li-divider ui-bar-c\"><h2  class=\"ui-li-heading ui-title\">" + weekDayChinese[day] + "</h2></li>";
    for (var i = 0; i < nowClassInfo.length; i++) {
        if (nowClassInfo[i].weekDay == day) {
            res += "<li class=\"ui-li ui-li-static ui-btn-up-c\"> <p>" + nowClassInfo[i].name + "</p>" ;
            res += "<p>" + nowClassInfo[i].beginTime + "-" + nowClassInfo[i].endTime + "节";
            res += "[" + beginTime[nowClassInfo[i].beginTime - 1] + "-" + endTime[nowClassInfo[i].endTime - 1] +  "]</p>"
            res += "<p>" + nowClassInfo[i].place +  "</p>";
            res += "<p>" + nowClassInfo[i].bigTime +  "</p>";
            //res += "<p>" + nowClassInfo[i].weekDay +  "</p>";
            // res += "<hr>"
            res += "</li>"
        }
    }
    return res;
}
function printTodayClassInfo(nowClassInfo, day) { //output today's lesson
    var res = "";
    for (var i = 0; i < 7; i++) {
        res += printTheDay(nowClassInfo, (day + i) % 7);
    }
    $('#class-list').html(res);
}

// nameReg = new RegExp("<td width=\"52\">.*?(?=</td>)","g");
function getMyGarExp(htmlStr, reg) { // deal regular expression(正则表达式);
    var RegInfo = new RegExp(reg,"g");
    return htmlStr.match(RegInfo);
}
function getTime(more, n) { //deal time information
    var tmp = new Array();
    var now = 0;
    for (var i = 0; i < n; i++) {
        tmp[i] = new Array();

        for (var j = 1; j <= 7; j++) {
            more[now] = more[now].substr(16);
            if (more[now] != "") {
                var len = tmp[i].length;
                tmp[i][len] = new Object();
                more[now] = more[now].replace(";",",");
                var s = more[now].split(",");
                tmp[i][len].weekDay = j % 7;
                tmp[i][len].bigTime = s[0] + "," + s[1];
                tmp[i][len].beginTime = s[2].match(/\d+/g)[0];
                tmp[i][len].endTime = s[2].match(/\d+/g)[1];
                if (s[3] == undefined)
                    tmp[i][len].place = "未知"
                else tmp[i][len].place = s[3] + s[4];
            }
            now++;
        }
    }
    return tmp;
}

function sortClass(a, b) {  //sort compare function
    return a.beginTime - b.beginTime;
}

function getClassInfo(htmlStr) {  //deal htmlcode and get information;
    htmlStr = htmlStr.replace(/\&nbsp;/g, "");
    htmlStr = htmlStr.replace(/\n/g, "");
    var nowClassInfo = new Array();
    var name = getMyGarExp(htmlStr, "<td width=\"80\">.*?(?=</td>)");
    var teacher = getMyGarExp(htmlStr, "<td width=\"52\">.*?(?=</td>)");
    var more = getMyGarExp(htmlStr, "<td width=\"113\">.*?(?=</td>)");
    var time = getTime(more, teacher.length);
    var n = 0;
    for (var i = 0; i < teacher.length; i++) {
        teacher[i] = teacher[i].substr(15);
        var ni = Math.floor(i * 2);
        name[ni] = name[ni].substr(15);
        for (var j = 0; j < time[i].length; j++) {
            nowClassInfo[n++] = new classInfo(name[ni], teacher[i], time[i][j].beginTime, time[i][j].endTime, time[i][j].place, time[i][j].weekDay, time[i][j].bigTime);
        }
    }
    nowClassInfo.sort(sortClass);
    return nowClassInfo;
}

function classInfo(name, teacher, beginTime, endTime, place, weekDay, bigTime) { //lesson object
    this.name = name;
    this.teacher = teacher;
    this.beginTime = beginTime;
    this.endTime = endTime;
    this.place = place;
    this.bigTime = bigTime;
    this.weekDay = weekDay;
}
function getWeekDay() { //initial chinese
    myDate = new Date();
    day = myDate.getDay();
    weekDayChinese = new Array();
    weekDayChinese[0] = "周日";
    weekDayChinese[1] = "周一";
    weekDayChinese[2] = "周二";
    weekDayChinese[3] = "周三";
    weekDayChinese[4] = "周四";
    weekDayChinese[5] = "周五";
    weekDayChinese[6] = "周六";
}
function initTime() { //initial times
    beginTime = new Array( "8:00", "8:50", "9:50", "10:40","11:30", "13:15", "14:05",
        "14:55", "15:45", "16:40", "17:30", "19:00", "19:50", "20:40");
    endTime = new Array("8:45", "9:35", "10:35", "11:25", "12:15", "14:00", "14:50",
        "15:40", "16:30", "17:25", "18:15", "19:45", "20:35", "21:25")
}

function showLoading() {
    $.mobile.showPageLoadingMsg();
}
function cleanData(){
    localStorage.BBX_classN = null;
    localStorage.BBX_scoreN = null;
}
