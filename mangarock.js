// ==UserScript==
// @name         MangaRock adremover
// @namespace    https://github.com/phanirithvij/AdRemovers
// @version      0.1
// @description  Removes ads from MangaRock every 3 seconds
// @author       Phani Rithvij
// @match        https://mangarock.com/*
// @include      https://mangarock.com/*/*
// @include      https://mangarock.com/*/*/*
// @include      https://mangarock.com/*/*/*/*
// @include      https://mangarock.com/*/*/*/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var removeAds = ()=>{
        document.querySelectorAll('iframe').forEach(e=>{
            e.parentNode.removeChild(e);
        });
        var ad_divs = document.querySelectorAll('._3ccJK');
        ad_divs.forEach(e=>{
            e.parentNode.removeChild(e);
        });
        console.log("Ads removed");
    };
    window.setInterval(removeAds, 3000);
    removeAds();
})();
