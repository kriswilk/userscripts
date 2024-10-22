// ==UserScript==
// @name         eBay Cosmetic Filters
// @description  Hide distractions such as similar, sponsored and suggested listings.
// @namespace    https://github.com/kriswilk/userscripts
// @version      1.0
// @author       Kris Wilk
// @include      https://*.ebay.tld/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('#CenterPanel div[data-slot^="PLACEMENT_"] { display: none; }');
    GM_addStyle('div[class$="main-container__bottom-panel"] div[data-slot^="PLACEMENT_"] { display: none; }');
    GM_addStyle('div[data-testid^="x-rx-slot-btf-"]:has(div[id^="placement"]) { display: none; }');
    GM_addStyle('.x-evo-atf-top-river .x-rx-slot { display: none; }');
    GM_addStyle('.stream-slot { display: none; }');
})();

// VERSION LOG
// 1.0 - Initial release
