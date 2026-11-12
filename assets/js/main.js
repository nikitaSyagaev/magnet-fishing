// Magnet Fishing landing: menu, reveal-on-scroll, bubbles, sticky Play button.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // mobile menu
  var nav = document.querySelector(".nav");
  var menuBtn = document.querySelector(".menu-btn");
  if (nav && menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // rising bubbles in the hero
  var bubbles = document.querySelector(".bubbles");
  if (bubbles && !reduce) {
    for (var i = 0; i < 18; i++) {
      var s = document.createElement("span");
      var size = 8 + Math.random() * 26;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.animationDuration = 9 + Math.random() * 12 + "s";
      s.style.animationDelay = -Math.random() * 20 + "s";
      s.style.opacity = (0.35 + Math.random() * 0.5).toFixed(2);
      bubbles.appendChild(s);
    }
  }

  // sticky Play button on phones after the hero is scrolled away
  var sticky = document.querySelector(".sticky-play");
  var hero = document.querySelector(".hero");
  var finalCta = document.querySelector(".cta-final");
  if (sticky && hero && "IntersectionObserver" in window) {
    var heroVisible = true;
    var finalVisible = false;
    var update = function () {
      sticky.classList.toggle("show", !heroVisible && !finalVisible);
    };
    new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; update(); }).observe(hero);
    if (finalCta) {
      new IntersectionObserver(function (e) { finalVisible = e[0].isIntersecting; update(); }).observe(finalCta);
    }
  }

  // analytics hook: every Play button gets a data-cta label (useful for Metrica/GA goals later)
  document.querySelectorAll("a[data-cta]").forEach(function (a) {
    a.addEventListener("click", function () {
      var label = a.getAttribute("data-cta");
      if (typeof window.gtag === "function") window.gtag("event", "play_click", { label: label });
      if (typeof window.ym === "function" && window.YM_ID) window.ym(window.YM_ID, "reachGoal", "play_click", { label: label });
    });
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
