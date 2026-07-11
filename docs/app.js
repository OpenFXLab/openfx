/**
 * OpenFXLab landing page — app.js
 *
 * Minimal JavaScript. No external dependencies, no tracking,
 * no analytics. Only progressively enhances the page.
 */

(function () {
  'use strict';

  /**
   * Smooth-scroll polyfill for browsers that don't support
   * scroll-behavior: smooth in CSS. Respects prefers-reduced-motion.
   */
  function initSmoothScroll() {
    var prefersReducedMotion = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    if (prefersReducedMotion) return;

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href').slice(1);
        var target = document.getElementById(targetId);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus to target for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  /**
   * Mark current year in the footer copyright if a placeholder exists.
   */
  function updateYear() {
    var yearEl = document.querySelector('[data-current-year]');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Initialise on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initSmoothScroll();
      updateYear();
    });
  } else {
    initSmoothScroll();
    updateYear();
  }

}());
