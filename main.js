(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var toc = document.getElementById("toc");

  if (navToggle && toc) {
    navToggle.addEventListener("click", function () {
      var isOpen = toc.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after choosing a chapter
    toc.querySelectorAll(".toc-link").forEach(function (link) {
      link.addEventListener("click", function () {
        toc.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Active chapter highlighting ---------- */
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("main > section[id], main > footer[id]")
  );
  var links = Array.prototype.slice.call(document.querySelectorAll(".toc-link"));

  function setActiveLink() {
    var scrollPos = window.scrollY + window.innerHeight * 0.3;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section;
      }
    });

    links.forEach(function (link) {
      var targetId = link.getAttribute("href").slice(1);
      link.classList.toggle("active", current && current.id === targetId);
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  window.addEventListener("resize", setActiveLink);
  setActiveLink();

  /* ---------- Smooth left-to-right scroll reveals ---------- */
  var revealTargets = document.querySelectorAll(
    ".chapter-head, .chapter > .rule, .chapter > .crest-grid, " +
    ".chapter > .roster-card, .chapter > .want-avoid, .chapter > .role-explainer, " +
    ".chapter > .cd-scale, .chapter > .qa-list, .chapter > .gallery-grid, " +
    ".chapter > .gallery-hint, .colophon"
  );

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealTargets.forEach(function (target) {
      target.classList.add("scroll-reveal");
      revealObserver.observe(target);
    });
  } else {
    revealTargets.forEach(function (target) {
      target.classList.add("is-visible");
    });
  }

  /* ---------- Gallery rendering (static, code-level photos) ---------- */
  var galleryGrid = document.getElementById("galleryGrid");
  var images = typeof GALLERY_IMAGES !== "undefined" ? GALLERY_IMAGES : [];

  if (galleryGrid) {
    images.forEach(function (item) {
      var card = document.createElement("div");
      card.className = "gallery-card";

      if (item.src) {
        var img = document.createElement("img");
        img.className = "gallery-frame";
        img.src = item.src;
        img.alt = item.caption || "";
        img.loading = "lazy";
        img.onerror = function () {
          // Falls back to a placeholder frame if the file isn't there yet
          var placeholder = document.createElement("div");
          placeholder.className = "gallery-frame-placeholder";
          placeholder.innerHTML = "<span>&#9878;</span>Image not found:<br>" + item.src;
          img.replaceWith(placeholder);
        };
        card.appendChild(img);
      } else {
        var placeholder = document.createElement("div");
        placeholder.className = "gallery-frame-placeholder";
        placeholder.innerHTML = "<span>&#9878;</span>No image set yet";
        card.appendChild(placeholder);
      }

      if (item.caption) {
        var caption = document.createElement("div");
        caption.className = "gallery-caption";
        caption.textContent = item.caption;
        card.appendChild(caption);
      }

      galleryGrid.appendChild(card);
    });
  }
})();