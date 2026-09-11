// Fragment targets are created asynchronously by the Claude Design runtime.
(() => {
  let observer;
  let timeout;
  function restoreFragment() {
    observer?.disconnect();
    clearTimeout(timeout);
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    function scrollWhenReady() {
      const target = document.getElementById('dc-root')?.querySelector('#' + CSS.escape(id));
      if (!target) return false;
      observer?.disconnect();
      clearTimeout(timeout);
      document.fonts.ready.then(() => requestAnimationFrame(() => {
        const header = document.querySelector('#dc-root header');
        const offset = header?.getBoundingClientRect().height || 0;
        window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - offset, behavior: 'instant' });
      }));
      return true;
    }
    if (scrollWhenReady()) return;
    observer = new MutationObserver(scrollWhenReady);
    observer.observe(document.body, { childList: true, subtree: true });
    timeout = setTimeout(() => observer?.disconnect(), 30000);
  }
  window.addEventListener('hashchange', restoreFragment);
  restoreFragment();
})();
