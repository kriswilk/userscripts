// ==UserScript==
// @name         eBay - Hide Ads and Distractions
// @description  Suppresses sponsored/promoted items, financing offers, reviews and other unsolicited content at eBay.
// @author       Kris Wilk
// @version      0.3
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
    ".x-rx-slot",              // promoted content
    ".x-rx-slot-btf",          // promoted content
    ".x-financing-info",       // financing offer
    ".d-payments-minview",     // financing offer
    ".x-shop-with-confidence", // money back guarantee
    ".x-evo-btf-river",        // content below item description

    // SEARCH
    ".srp-river-answer[class*='CAROUSEL']:not([class*='NAVIGATION']",  // picked for you
    ".srp-main-below-river",                                           // related searches, recently viewed

    // OTHER
    ".m-product-tour",         // feature notices
  ].join();

  const callback = () => document.querySelectorAll(selectors).forEach(e => { e.style.display = 'none' });
  const observer = new MutationObserver(callback);

  observer.observe(document, { childList: true, subtree: true });
})();
