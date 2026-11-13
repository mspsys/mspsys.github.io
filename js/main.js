/**
 * mspsys.github.io — language switch (EN | KO) and footer year.
 *
 * Language: every text comes twice, <span lang="en"> and <span lang="ko">; the
 * stylesheet shows only the one matching <html lang>. The choice is remembered
 * (localStorage "lang"). A small script in each page's <head> applies it before
 * the page is drawn, so there is no flash of the other language.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var titleEl = document.querySelector('title');

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'ko') return;
    root.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    if (titleEl && titleEl.dataset[lang]) document.title = titleEl.dataset[lang];
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  setLang(root.lang);

  // © year in the footer — always the current year
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
