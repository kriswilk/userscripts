// ==UserScript==
// @name         eBay - Hide Ads and Distractions
// @description  Suppresses sponsored/promoted items, financing offers, reviews and other unsolicited content at eBay.
// @author       Kris Wilk
// @version      1.3
//
// @namespace    https://github.com/kriswilk/userscripts
// @homepage     https://github.com/kriswilk/userscripts
// @supportURL   https://github.com/kriswilk/userscripts/issues
// @downloadURL  https://kriswilk.github.io/userscripts/ebay.ads-distractions.user.js
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
// ==/UserScript==

/* eslint-disable no-multi-spaces */

(function() {
  'use strict';

  const selectors = [
    // LISTINGS
    // promoted content
    ".x-pda-placements",
    ".x-rx-slot",
    // additional services
    ".vas-container",
    // financing offers
    ".x-financing-info",
    ".x-financing-details",
    ".d-payments-minview",
    // money back guarantee
    ".x-shop-with-confidence",
    // content below item description
    ".x-evo-btf-seller-card-river",
    ".x-evo-btf-river",

    // SEARCH
    // picked for you, related, viewed
    ".srp-river-answer[class*='ITEMS_CAROUSEL']",
    ".srp-main-below-river",

    // OTHER
    // feature notices
    ".m-product-tour",
    // watchlist - similar items
    ".stream-slot",
    // footers
    ".x-footer",
    ".global-footer",
    ".custom-footer",
    ".footer-panel-container",
  ].join(",");

  document.querySelectorAll(selectors).forEach(e => e.remove());
})();
