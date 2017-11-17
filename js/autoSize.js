$(function () {

    $(window).resize(initFont);

    function initFont() {
        var htmlWidth = $(window).width();
        $("html").css({
            "font-size": 12 / 320 * htmlWidth + "px"
        })
    }

    initFont();
});
