// ==UserScript==
// @name         zyBooks Autocomplete
// @version      0.1
// @description  One click to speed up the boring parts
// @author       Evanito
// @match        https://learn.zybooks.com/zybook/*
// @namespace https://github.com/Evanito/zyBAuto
// @run-at document-idle
// ==/UserScript==
// TO USE: Click Autocomplete! on a zyBooks page <-----

// ==== SETTINGS ====
var autoRun = false;
// == END SETTINGS ==

// Do not edit below this line!
// ==========================================
(function() {
    console.log(timeString() + " [zBA] Begin zyBooks Autocomplete by Evanito.");
    if (autoRun) {
        run();
    } else {
        document.getElementsByClassName('right-buttons')[0].innerHTML += '<button id="zbaButton" type="button">Autocomplete!</button>';
        document.getElementById("zbaButton").addEventListener ("click", zBAStartButton, false);
    }
})();


function zBAStartButton (zEvent) {
    console.log(timeString() + " [zBA] Running...");
    run();
}

function run() {
    //click_speeds();
    click_plays();
    click_starts();
    setTimeout(function(){ run(); }, 1000);
}

function click_speeds() { // Checks speed boxes. Doesn't work but isn't a necessary feature.
    var speed = document.getElementsByClassName("speed-control");
    for (var i = 0; i < speed.length; i++) {
        if ((speed[i].innerHTML).includes("false")) {
            //speed[i].click();
            speed[i].getElementsByClassName("zb-checkbox")[0].innerHTML = "\n<input type=\"checkbox\" value=\"true\" aria-label=\"2x speed\">\n<label aria-hidden=\"true\">2x speed</label>\n"
            console.log(timeString() + " Checked a speed box.");
        }
    }
}

function click_plays() { // Clicks all Play buttons
    var plays = document.getElementsByClassName("play-button");
    for (var i = 0; i < plays.length; i++) {
        if (!(plays[i].classList).contains("rotate-180")){
            plays[i].click();
            console.log(timeString() + " Clicked a play button.");
        }
    }
}

function click_starts() { // Clicks all Start buttons
    var starts = document.getElementsByClassName("start-button");
    for (var i = 0; i < starts.length; i++) {
        starts[i].click();
        console.log(timeString() + " Clicked a start button.");
    }
}

function timeString() {
    let d = new Date();
    let h = (d.getHours()<10?'0':'') + d.getHours();
    let m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    let s = (d.getSeconds()<10?'0':'') + d.getSeconds();
    let dstr = h + ':' + m + ":" + s;
    return dstr;
}
