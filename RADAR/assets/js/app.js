(function () {
  const selectors = [
    '.pain-card',
    '.how-block',
    '.benefit-card',
    '.audience-card',
    '.compare-table',
    '.final-cta',
  ];

  document.querySelectorAll(selectors.join(',')).forEach(function (el) {
    el.classList.add('reveal');
  });

  // Header com sombra ao rolar
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 8) {
      header.style.boxShadow = '0 1px 0 rgba(15,23,42,0.04)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
})();
