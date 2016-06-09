$(document).ready(function () {
    // var colors = ["#EBBD8A", "#C5A27D", "#BD915D"];
    // var currColor = 0;
    // function chgColor() {
    //     $("body").css("background-color", colors[(currColor = (currColor + 1) % 3)]);
    //     console.log(currColor + " " + colors[currColor]);
    //     setTimeout(chgColor, 2000);
    // }
    //chgColor();

    $(document).scroll(function () {
        // var top = $(window).scrollTop();
        // var height = $(window).height();
        // var percentScrolled = top / height;
        // console.log(percentScrolled + "%");
        // var opacity = 1 - percentScrolled;
        // console.log(opacity);
        $("#headerBaseImage").css("opacity", Math.max(0, 1 - ($(window).scrollTop() / $(window).height())) + ""); // opacity = 1 - percentScrolled
        if ($(window).scrollTop() > $(window).height() + 144) {
            console.log("below");
        } else {
            console.log("above");
        }
    });
});