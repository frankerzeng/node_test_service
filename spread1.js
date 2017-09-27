var text = "";
$(".weui_media_box").each(function (i) {
    var h = $(".weui_media_box").eq(i);
    if (h.find('.weui_media_title').text()) {
        if (h.find(".weui_media_title").find('.icon_original_tag')) {
            h.find(".weui_media_title").find('.icon_original_tag').remove();
        }
        var title = h.find(".weui_media_title").text().trim();

        h = title + '|||' + h.find('.weui_media_title').attr('hrefs').trim();
        text += h + "\n";
    }
});

console.log(text.replace(' ', ''));