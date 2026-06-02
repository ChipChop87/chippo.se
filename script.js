/* =========================================================
   chippo.se – gateway behaviour
   Vanilla JS, no dependencies. Defensive and reduced-motion aware.
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1. Subtle floating hero effect (pointer-driven) ---- */
  var visual = document.querySelector(".hero-visual");
  if (visual && !reduceMotion) {
    var frame = null;

    function updateVisual(event) {
      var x = (event.clientX / window.innerWidth - 0.5) * 12;
      var y = (event.clientY / window.innerHeight - 0.5) * 12;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(function () {
        visual.style.transform =
          "translate3d(" + x.toFixed(2) + "px, " + y.toFixed(2) + "px, 0) scale(1.03)";
      });
    }

    window.addEventListener("pointermove", updateVisual, { passive: true });
  }

  /* ---- 2. Terminal typewriter (decorative, harmless) ---- */
  var termBody = document.getElementById("terminal-body");
  var lines = [
    "> boot chippo.se",
    "loading identity... ok",
    "portfolio target... chippo.dev",
    "github profile... ChipChop87",
    "status... building, learning, documenting"
  ];

  if (termBody) {
    var fullText = lines.join("\n");

    if (reduceMotion) {
      // Show the full block immediately, no animation.
      termBody.textContent = fullText;
      termBody.removeAttribute("aria-hidden");
      return;
    }

    var i = 0;
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = " ";

    function type() {
      if (i <= fullText.length) {
        termBody.textContent = fullText.slice(0, i);
        termBody.appendChild(cursor);
        i++;
        // Slightly slower pause on newlines for a natural rhythm.
        var delay = fullText.charAt(i - 1) === "\n" ? 260 : 28;
        setTimeout(type, delay);
      }
    }
    type();
  }
})();
