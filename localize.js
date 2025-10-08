 // Check if URL contains ?jp
    const isJP = window.location.search.includes('jp');

    if (isJP) {
      document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-jp');
      });
    }
