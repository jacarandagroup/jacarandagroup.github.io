/* Page interactions. INMARIUM remains independent of this landing page. */
(() => {
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const viewport = carousel.querySelector('.stories-viewport');
    const track = carousel.querySelector('.stories-track');
    const cards = [...track.children];
    const count = cards.length;
    if (count < 2) return;

    const current = carousel.querySelector('[data-carousel-current]');
    const dots = [...carousel.querySelectorAll('.carousel-dot')];

      dots.forEach((dot, targetIndex) => {
        dot.setAttribute('aria-controls', viewport.id);

        dot.addEventListener('click', () => {
          // Последнее нажатие определяет нужную карточку.
          queue.length = 0;

          let distance = (targetIndex - index + count) % count;

          if (distance > count / 2) {
            distance -= count;
          }

          if (distance !== 0) {
            move(distance);
          }
        });
      });
    const status = carousel.querySelector('.carousel-status');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0;
    let position = count;
    let step = 0;
    let moving = false;
    let timer;
    let pointer;
    const queue = [];
    const wrap = (value) => (value + count) % count;

    // One full copy at either end allows a smooth single-card move across the seam.
    const copy = (card) => {
      const clone = card.cloneNode(true);
      clone.dataset.carouselClone = '';
      clone.setAttribute('aria-hidden', 'true');
      clone.inert = true;
      clone.removeAttribute('id');
      clone.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
      return clone;
    };
    track.prepend(...cards.map(copy));
    track.append(...cards.map(copy));
    carousel.classList.add('is-ready');
    carousel.querySelector('.stories-controls').hidden = false;

    function updateState() {
      const visible = Number(getComputedStyle(carousel).getPropertyValue('--slides-per-view')) || 1;
      cards.forEach((card, cardIndex) => {
        const isVisible = wrap(cardIndex - index) < visible;
        card.setAttribute('aria-hidden', String(!isVisible));
        card.inert = !isVisible;
      });
      current.textContent = String(index + 1).padStart(2, '0');
      carousel.dataset.index = String(index);
      dots.forEach((dot, dotIndex) => {
        dot.setAttribute('aria-current', String(dotIndex === index));
      });
      const labels = Array.from({length: visible}, (_, offset) => wrap(index + offset) + 1);
      status.textContent = visible === 1
        ? 'Отзыв ' + labels[0] + ' из ' + count
        : 'Отзывы ' + labels.join(', ') + ' из ' + count;
    }

    function render(animate) {
      track.style.transition = animate ? '' : 'none';
      track.style.transform = 'translate3d(' + (-position * step) + 'px, 0, 0)';
      if (!animate) {
        // Commit the invisible reset before enabling transitions for the next move.
        void track.offsetWidth;
        track.style.transition = '';
      }
    }

    function finish() {
      if (!moving) return;
      clearTimeout(timer);
      moving = false;
      position = count + index;
      render(false);
      requestAnimationFrame(pump);
    }

    function pump() {
      if (moving || !queue.length || !step) return;
      const direction = queue.shift();
      moving = true;
      index = wrap(index + direction);
      position += direction;
      updateState();
      render(!reducedMotion.matches);
      const duration = parseFloat(getComputedStyle(track).transitionDuration) * 1000 || 0;
      if (reducedMotion.matches || !duration) {
        finish();
      } else {
        // Also settle if a transition event is suppressed by backgrounding the tab.
        timer = setTimeout(finish, duration + 100);
      }
    }

    function move(direction) {
      // Keep fast repeated clicks ordered without building an excessive backlog.
      if (queue.length < count) queue.push(direction);
      pump();
    }

    function resize() {
      clearTimeout(timer);
      moving = false;
      queue.length = 0;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      step = cards[0].getBoundingClientRect().width + gap;
      position = count + index;
      render(false);
      updateState();
    }

    carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => move(-1));
    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => move(1));
    track.addEventListener('transitionend', (event) => {
      if (event.target === track && event.propertyName === 'transform') finish();
    });
    carousel.addEventListener('keydown', (event) => {
      if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      }
    });

    viewport.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' || !event.isPrimary) return;
      pointer = {id: event.pointerId, x: event.clientX, y: event.clientY};
      viewport.setPointerCapture(event.pointerId);
    });
    viewport.addEventListener('pointerup', (event) => {
      if (!pointer || pointer.id !== event.pointerId) return;
      const dx = event.clientX - pointer.x;
      const dy = event.clientY - pointer.y;
      pointer = undefined;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.25) move(dx < 0 ? 1 : -1);
    });
    viewport.addEventListener('pointercancel', () => { pointer = undefined; });

    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(viewport);
    else window.addEventListener('resize', resize);
    reducedMotion.addEventListener('change', resize);
    resize();
  });
})();
