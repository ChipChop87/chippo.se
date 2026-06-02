/* =========================================================
   chippo.se — gateway behaviour
   Vanilla JS, no dependencies. Defensive and reduced-motion aware.
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 0. Trigger the staggered reveal once ready ---- */
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  ready(function () { document.body.classList.add("is-loaded"); });

  /* ---- 1. Header gains a hairline once scrolled ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- 2. Gentle parallax on the floating emblem ---- */
  var emblem = document.querySelector(".emblem-float");
  if (emblem && !reduceMotion) {
    var frame = null;
    window.addEventListener("pointermove", function (event) {
      var x = (event.clientX / window.innerWidth - 0.5) * 10;
      var y = (event.clientY / window.innerHeight - 0.5) * 10;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(function () {
        emblem.style.transform =
          "translate3d(" + x.toFixed(2) + "px, " + y.toFixed(2) + "px, 0)";
      });
    }, { passive: true });
  }

  /* ---- 3. Cards: soft spotlight follows the cursor ---- */
  if (!reduceMotion) {
    var cards = document.querySelectorAll(".card");
    Array.prototype.forEach.call(cards, function (card) {
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        var mx = ((e.clientX - rect.left) / rect.width) * 100;
        card.style.setProperty("--mx", mx.toFixed(1) + "%");
      });
    });
  }
})();
