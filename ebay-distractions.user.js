// ==UserScript==
// @name         eBay - Hide Ads and Distractions
// @description  Suppresses promotion carousels, financing offers, reviews and other unsolicited content at eBay.
// @author       Kris Wilk
// @version      0.1
//
// @namespace    https://github.com/kriswilk/userscripts
// @homepage     https://github.com/kriswilk/userscripts
// @downloadURL  https://raw.githubusercontent.com/kriswilk/userscripts/main/ebay-distractions.user.js
// @supportURL   https://github.com/kriswilk/userscripts/issues
//
// @match        https://*.ebay.at/*
// @match        https://*.ebay.be/*
// @match        https://*.ebay.ca/*
// @match        https://*.ebay.ch/*
// @match        https://*.ebay.co.in/*
// @match        https://*.ebay.co.uk/*
// @match        https://*.ebay.com/*
// @match        https://*.ebay.com.au/*
// @match        https://*.ebay.com.hk/*
// @match        https://*.ebay.com.my/*
// @match        https://*.ebay.com.sg/*
// @match        https://*.ebay.de/*
// @match        https://*.ebay.es/*
// @match        https://*.ebay.fr/*
// @match        https://*.ebay.ie/*
// @match        https://*.ebay.it/*
// @match        https://*.ebay.nl/*
// @match        https://*.ebay.ph/*
//
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

/* eslint-disable no-multi-spaces */

(function() {
  'use strict';

  const selectors = [
    // LISTINGS
    "[id^='placement']",       // promoted content
    ".x-financing-info",       // financing
    "#vas-container",          // insurance
    ".d-payments-minview",     // payments
    ".x-shop-with-confidence", // money back guarantee
    ".x-reviews",              // reviews
    ".d-pagenavigation-btf",   // bottom navigation
    ".ux-navigator",           // more to explore
    ".x-seo-footer",           // top sellers, highly rated products
    ".x-seo-related-search",   // related searches
    ".footer-panel-container", // footer

    // SEARCH RESULTS
    ".srp-river-answer",       // picked for you
    ".srp-main-below-river",   // related searches, recently viewed
    ".x-footer",               // footer

    // OTHER
    ".m-product-tour",         // feature notices
    ".global-footer",          // footer
  ].join();

  const callback = () => document.querySelectorAll(selectors).forEach(e => { e.style.display = 'none' });
  const observer = new MutationObserver(callback);

  observer.observe(document, { childList: true, subtree: true });
})();
