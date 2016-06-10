$(document).ready(function () {
    // var colors = ["#EBBD8A", "#C5A27D", "#BD915D"];
    // var currColor = 0;
    // function chgColor() {
    //     $("body").css("background-color", colors[(currColor = (currColor + 1) % 3)]);
    //     console.log(currColor + " " + colors[currColor]);
    //     setTimeout(chgColor, 2000);
    // }
    //chgColor();

    $("#headerBaseImage").show();
    $("#rootsImageSoil").show();

    var aboutTop = Array(3);
    $("#about div.text-box").each(function (i) {
        $(this).hide();
        this.id = "about" + i;
        if (i === 0) {
            aboutTop[i] = document.getElementById("about").offsetTop + this.offsetTop;
        } else {
            aboutTop[i] = aboutTop[i - 1] + this.offsetTop;
        }
        console.log(this);
        console.log("about" + i + ".offsetTop=" + this.offsetTop);
        console.log("about" + i + ".offsetTop=" + document.getElementById("about" + i).offsetTop);
        console.log("aboutTop[" + i + "]=" + aboutTop[i]);
        // TODO: change aboutTop array to store "this" so the .offsetTop prop can be accessed later
    });
    // $("#about1, #about2, #about3").hide();

    // aboutTop[2] = aboutTop[1] + document.getElementById("about3").offsetTop;

    $(document).scroll(function () {
        var top = $(window).scrollTop();
        console.log("scrollTop=" + top);
        var height = $(window).height();
        // console.log("height=" + height);
        // var percentScrolled = top / height;
        // console.log(percentScrolled + "%");
        // var opacity = 1 - percentScrolled;
        // console.log(opacity);
        // $("#headerBaseImage").css("opacity", Math.max(0, 1 - ($(window).scrollTop() / $(window).height())) + ""); // opacity = 1 - percentScrolled
        
        
        if (top > 80) {
            // console.log("fadeOut");
            $("#headerBaseImage").fadeOut(1000);
            $("#rootsImageSoil").fadeOut(1000);
        } else {
            // console.log("fadeIn");
            $("#headerBaseImage").fadeIn(200);
            $("#rootsImageSoil").fadeIn(200);
            $("#about1, #about2, #about3").hide();
        }

        if (top > 400) {
            $("#about0").slideDown(1000);
        }
        if (top > 550) {
            $("#about1").slideDown(1000);
       }
        if (top > 700) {
            $("#about2").slideDown(1000);
        } 
    
        if (top > height) {
            console.log("below");
        } else {
            console.log("above");
        }
    });
});