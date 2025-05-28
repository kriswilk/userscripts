// ==UserScript==
// @name         Flippah - Emphasize the "Last Visit" Separator
// @description  Increases the thickness of the "last visit" separator to improve visibility, especially while scrolling.
// @author       Kris Wilk
// @version      1.1
//
// @namespace    https://github.com/kriswilk/userscripts
// @homepage     https://github.com/kriswilk/userscripts
// @supportURL   https://github.com/kriswilk/userscripts/issues
// @downloadURL  https://kriswilk.github.io/userscripts/flippah.last-visit-separator.user.js
//
// @match        https://flippah.net/notifications/history*
//
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flippah.net
//
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  GM_addStyle('.history-last-visit:before, .history-last-visit:after {border-bottom: 40px solid red;}');
})();
