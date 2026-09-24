(() => {
  const progress = document.querySelector('.progress');
  function updateProgress() {
    const available = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${available > 0 ? Math.min(100, scrollY / available * 100) : 0}%`;
  }
  addEventListener('scroll', updateProgress, { passive: true });
  addEventListener('resize', updateProgress);
  updateProgress();
  const chapters = [...document.querySelectorAll('.chapter')];
  const navLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
  if (chapters.length) {
    const observer = new IntersectionObserver(entries => {
      const current = entries.find(entry => entry.isIntersecting);
      if (!current) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${current.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-12% 0px -66% 0px' });
    chapters.forEach(section => observer.observe(section));
  }
  document.querySelectorAll('.mobile-toc a').forEach(link => {
    link.addEventListener('click', () => { document.querySelector('.mobile-toc').open = false; });
  });
  const search = document.querySelector('#research-search');
  if (search) {
    const cards = [...document.querySelectorAll('.research-card')];
    const count = document.querySelector('.result-count');
    const empty = document.querySelector('.empty-results');
    search.addEventListener('input', () => {
      const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let shown = 0;
      cards.forEach(card => {
        const visible = words.every(word => card.dataset.search.toLocaleLowerCase().includes(word));
        card.hidden = !visible;
        if (visible) shown += 1;
      });
      count.textContent = words.length ? `找到 ${shown} 个相关专题` : `共 ${cards.length} 个深度解读专题`;
      empty.hidden = shown > 0;
    });
  }
})();
