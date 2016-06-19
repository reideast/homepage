$(document).ready(function () {

    // var colors = ["#EBBD8A", "#C5A27D", "#BD915D"];
    // var currColor = 0;
    // function chgColor() {
    //     $("body").css("background-color", colors[(currColor = (currColor + 1) % 3)]);
    //     console.log(currColor + " " + colors[currColor]);
    //     setTimeout(chgColor, 2000);
    // }
    //chgColor();

    // if ($(window).scrollTop() < 80) {
    //     $("#headerBaseImage").show();
    //     $("#rootsImageSoil").show();
    // }

    // var aboutTop = Array(3);
    // $("#about div.text-box").each(function (i) {
    //     // $(this).hide();
    //     this.id = "about" + i;
    //     if (i === 0) {
    //         aboutTop[i] = document.getElementById("about").offsetTop + this.offsetTop;
    //     } else {
    //         aboutTop[i] = aboutTop[i - 1] + this.offsetTop;
    //     }
    //     // console.log(this);
    //     // console.log("about" + i + ".offsetTop=" + this.offsetTop);
    //     // console.log("about" + i + ".offsetTop=" + document.getElementById("about" + i).offsetTop);
    //     // console.log("aboutTop[" + i + "]=" + aboutTop[i]);
    //     // TODO: change aboutTop array to store "this" so the .offsetTop prop can be accessed later 
    // });
    // $("#about1, #about2, #about3").hide();

    // aboutTop[2] = aboutTop[1] + document.getElementById("about3").offsetTop;

    // window.setInterval(debugHeight, 100);
    // function debugHeight() {
    //     console.log($(window).scrollTop());
    // }

    // $(window).on('scroll', function () {
    //     var top = $(window).scrollTop();
    //     console.log("scrollTop=" + top);
    //     var height = $(window).height();
    //     // console.log("height=" + height);
    //     // var percentScrolled = top / height;
    //     // console.log(percentScrolled + "%");
    //     // var opacity = 1 - percentScrolled;
    //     // console.log(opacity);
    //     // $("#headerBaseImage").css("opacity", Math.max(0, 1 - ($(window).scrollTop() / $(window).height())) + ""); // opacity = 1 - percentScrolled
        
    //     // TODO: look at options for Fullpage.js for callback functions to call after scrolling??!? 

    //     if (top > 10) {
    //         $("#rootsOverlay").fadeOut(1000);
    //     } else {
    //         $("#rootsOverlay").fadeIn(200);
    //     }
        
        
    // //     if (top > 80) {
    // //         $("#headerBaseImage").fadeOut(1000);
    // //         $("#rootsImageSoil").fadeOut(1000);
    // //     } else {
    // //         $("#headerBaseImage").fadeIn(200);
    // //         $("#rootsImageSoil").fadeIn(200);
    // //         $("#about0, #about1, #about2").hide();
    // //     }

    // //     if (top > 300) {
    // //         $("#about0").slideDown(1000);
    // //     }
    // //     if (top > 450) {
    // //         $("#about1").slideDown(1000);
    // //    }
    // //     if (top > 600) {
    // //         $("#about2").slideDown(1000);
    // //     } 
    
    // //     if (top >= height) {
    // //         console.log("below");
    // //     } else {
    // //         console.log("above");
    // //     }
    // });

    function showRoots() {
        $("#rootsOverlay").fadeOut(1000, function () {
            console.log("rootsOverlay fadeOut callback");
            vivusRoots.forEach(function (item, i) {
                console.log("foreach vivusRoots[" + i + "]");
                item.play();
            });
        });
    }
    function hideRoots() {
        $("#rootsOverlay").fadeIn(700);
        vivusRoots.forEach(function (item) {
            item.reset();
        });
    }

    var vivusRoots = new Array();
    for (i = 1; i <= 3; ++i) {
        vivusRoots.push(new Vivus('rootIntro' + i, {start: "manual", duration: 70, type: "async"}, function () {console.log("Vivus on " + this.el.id + " is done"); }));
    }
    // var vivusRoots1 = new Vivus('rootIntro1', {duration: 70, type: "async"}, function () {console.log("Vivus on rootIntro1 is done"); });
    // var vivusRoots2 = new Vivus('rootIntro2', {duration: 70, type: "async"}, function () {console.log("Vivus on rootIntro2 is done"); });
    // var vivusRoots3 = new Vivus('rootIntro3', {duration: 70, type: "async"}, function () {console.log("Vivus on rootIntro3 is done"); });

    $('#fullpage').fullpage({
        // modified my copy of Fullscreen.js to not require this: scrollBar: true // scrollBar==true (or autoScrolling==false) must be set to allow other onScroll events to fire! (because w/o this option, the window doesn't actually scroll, as shown by observing $(window).scrollTop())
        // scrollhandler() line 892
        // 1359
        // because of this option in Fullpage.js: (line 196)
            // if(options.autoScrolling && !options.scrollBar){
            //     $htmlBody.css({
            //         'overflow' : 'hidden',
            //         'height' : '100%'
            // });
        
        // NOTE: thos modifications won't work because Fullpage.js heavily modifies scroll behavior when Scrollbars are turned off, using TranslateY to scroll objects!
        // scrollBar: true,
        anchors: ['header', 'roots', 'footer'], //TODO: replace these with <div class="section" data-anchor="header"> in the .html page (better semantically). Note: data-anchor cannot be the same as any id/names!
         afterLoad: function (anchorLink, index) {
            // var loadedSection = $(this);

            // //using index
            // if(index == 3){
            //     alert("Section 3 ended loading");
            // }

            if (anchorLink === "header") {
                hideRoots();
            }

            if(anchorLink == "roots") {
                showRoots();
            } 
            
        },
        onLeave: function (index, nextIndex, direction) {
            // var leavingSection = $(this);

            if (index === 2 && direction === "up") {
                // window.setTimeout(hideRoots, 200);
                hideRoots();
            } 
        }
    });
});