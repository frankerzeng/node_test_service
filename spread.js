Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
};

var data = [];
var index = 0;
for (var i = 0; i < 100; i++) {

    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var newDate = new Date();
    newDate.setTime(timestamp * 1000 - i * 7 * 24 * 3600 * 1000);
    var end = newDate.format('yyyy-MM-dd');

    console.log(end);
    newDate.setTime(timestamp * 1000 - (i + 1) * 7 * 24 * 3600 * 1000 + 24 * 3600 * 1000);
    var begin = newDate.format('yyyy-MM-dd');
    var url = "https://mp.weixin.qq.com/misc/appmsganalysis?action=all&begin_date=" + begin + "&end_date=" + end +
        "&order_by=1&order_direction=2&token=1906783434&lang=zh_CN&f=json&ajax=1&random=0.01310095479069839";

    function timedGetText(url, time, callback) {
        var request = new XMLHttpRequest();
        var timeout = false;
        request.open("GET", url, false);
        request.onreadystatechange = function () {
            if (request.readyState !== 4) return;
            if (timeout) return;
            if (request.status === 200) {
                callback(request.responseText);
            }
        };
        request.send(null);
    }

    timedGetText(url, null, function (rd) {
        var list_data = JSON.parse(rd)['total_article_data'];
        if (list_data) {
            list_data = JSON.parse(list_data);
            if (list_data.list.length) {
                for (var key = 0; key < list_data.list.length; key++) {
                    var tmp = list_data.list[key];
                    console.log(tmp);
                    data[index] = [tmp['title'], tmp['publish_date'], tmp['target_user'], tmp['int_page_read_count'], tmp['share_user']];
                    index++;
                }
            }
        }
    });

    // if (i == 2) {
    //     console.log(data);
    // }
    // if (i == 2) {
    //     break;
    // }
}
console.log(data);
var str = "";
for (var key in data) {
    console.log(key);
    var tmp = data[key];
    if (tmp[0]) {
        str += tmp[0] + "!!" + tmp[1] + "!!" + tmp[2] + "!!" + tmp[3] + "!!" + tmp[4] + "\n";
    }
}
console.log(str);

