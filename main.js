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
        $("#rootsOverlay").fadeOut(1000); //hide brown "soil" overlay
        window.setTimeout(function () { // start animation after delay{

            //TODO: enable this line, delete the next line 
            vivusWireframe.play();
            window.setTimeout(function () {
                vivusTaproot.play();
                vivusRoots.play();
            }, 1000);
            // window.setTimeout(function () {
                // vivusRoots.play();
            // }, 1500);
            
            // show text boxes
            window.setTimeout(function () {
                $("#intro1").fadeIn(300);
                window.setTimeout(function () {
                    $("#intro2").fadeIn(300);
                    setTimeout(function () {
                        $("#intro3").fadeIn(300);
                    }, 1200);
                }, 1500);
            }, 2800);
            
        }, 800);
    }
    function hideRoots() {
        $("#rootsOverlay").fadeIn(700);
        window.setTimeout(function () {
            vivusWireframe.reset();
            $("#intro1, #intro2, #intro3").hide();
            vivusTaproot.reset();
            vivusRoots.reset();
        }, 700);
    }

    for (i = 1; i <= 3; ++i) {
        $("#intro" + i).hide();
    }


    var vivusWireframe = new Vivus('rootsWireframe', {start: "manual", duration: 75, delay: 30, type: "oneByOne", finalAnimation: function (path) {
        window.setTimeout(function () { path.style.opacity = "0.3"; }, 400);
    }}); //, function () {
        //vivusTaproot.play();
    //});
    
    // Add data-* attributes to #rootsWireframeMain's paths for the Vuvus.js "scenerio"
    var totalFrames = 250;
    // list of paths to set data-* for: key is base of id string, value = number of paths in that set
    var paths = {"taprootOutsideLeft": 7, "taprootInsideLeft": 3, "taprootInsideRight": 3, "taprootOutsideRight": 3}
    var keys = Object.keys(paths);
    keys.forEach(function (key) {
        var totalLength = 0;
        for (var i = 0; i < paths[key]; ++i) {
            totalLength += document.getElementById(key + i).getTotalLength();
        }

        // var division = totalFrames / paths[key];
        var prev = 0;
        for (var i = 0; i < paths[key]; ++i) {
            // var el = $("#" + key + i);
            // el.data("start", prev);
            // el.data("duration", division);
            var el = document.getElementById(key + i);
            el.setAttribute("data-start", prev);

            var fraction = el.getTotalLength() / totalLength;
            var division = totalFrames * fraction;
            el.setAttribute("data-duration", division);
            prev += division;
            // console.log(key + i + ": start=" + el.getAttribute("data-start") + " duration=" + el.getAttribute("data-duration"));
            // console.log(key + i + ": start=" + el.data("start") + " duration=" + el.data("duration"));
        }
    });

    var pathName = "rootlet";
    // var rootStart = [40, 70, 110, 55, 100, 150, 160, 180, 180, 200];
    // rootStart = rootStart.map(function (item) { return item + 80; });
    // console.log(rootStart + "");
    var rootStart =     [120, 150, 190, 135, 180, 230, 240, 260, 260, 280];
    var rootNumFrames = [ 80, 120,  60, 180, 100,  50,  40,  40,  15,   5];
    for (var i = 0; i < 10; ++i) {
        var el = document.getElementById(pathName + (i + 1) + "a");
        el.setAttribute("data-start", rootStart[i]);
        el.setAttribute("data-duration", rootNumFrames[i]);
        el = document.getElementById(pathName + (i + 1) + "b");
        el.setAttribute("data-start", rootStart[i]);
        el.setAttribute("data-duration", rootNumFrames[i]);

        console.log("rootlet" + (i + 1) + " start=" + rootStart[i] + " #frames=" + rootNumFrames[i]);
    }

    var vivusTaproot = new Vivus("rootsNotWireframeMain", {type: "scenario", start: "manual"}); //, function () {
        // vivusRoots.play();
    // });
    var vivusRoots = new Vivus("rootsNotWireframeOutside", {type: "scenario", start: "manual", animTimingFunction: Vivus.EASE_OUT});

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