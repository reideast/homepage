$(document).ready(function () {
    var colors = ["#EBBD8A", "#C5A27D", "#BD915D"];
    var currColor = 0;
    function chgColor() {
        $("body").css("background-color", colors[(currColor = (currColor + 1) % 3)]);
        console.log(currColor + " " + colors[currColor]);
        setTimeout(chgColor, 2000);
    }
    //chgColor();
});