$(document).ready(function () {
    var nav = $(".nav");
    var navcontents = $(".navcontent");
    var navlen = nav.length;

    $(".nav a").click(function () {
        if ($(this).siblings().css("display") == "none") {
            $(this).siblings().css("display", "block")
        } else {
            $(this).siblings().css("display", "none")
        }
    })
})