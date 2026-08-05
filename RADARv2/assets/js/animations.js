(function () {
  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Mini-demo de célula: a linha "atrasado" pisca sozinha pra reforçar
  // que o status muda sem intervenção manual — o mesmo comportamento do produto real.
  const row = document.querySelector('[data-cell-demo-row]');
  const pill = row ? row.querySelector('.status-pill') : null;
  if (!row || !pill) return;

  const states = [
    { cls: 'atrasado', label: 'Atrasado' },
    { cls: 'embreve', label: 'Em breve' },
    { cls: 'noprazo', label: 'No prazo' },
  ];
  let i = 0;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  setInterval(function () {
    i = (i + 1) % states.length;
    pill.className = 'status-pill ' + states[i].cls;
    pill.textContent = states[i].label;
  }, 2600);
})();
