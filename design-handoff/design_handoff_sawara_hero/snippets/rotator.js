/**
 * Sawara Entreprise — Rotating word in the hero H1.
 *
 * Cycles through a fixed list of nuisibles in the title, every 2 seconds.
 * Container width is animated so surrounding text doesn't snap.
 *
 * USAGE
 *   <h1>
 *     … & traitement des
 *     <span class="rot"><span class="rot-word">cafards</span></span>.
 *   </h1>
 *
 * Pair with the .rot / .rot-word CSS rules in hero.css.
 *
 * Honors `prefers-reduced-motion: reduce`.
 */
(function () {
  var WORDS = ['cafards', 'fourmis', 'punaises de lit', 'rongeurs', 'moustiques', 'termites'];
  var DWELL = 2000;  // ms displayed per word
  var TRANS = 280;   // ms transition (fade + slide)

  var rot = document.querySelector('.rot');
  if (!rot) return;
  var word = rot.querySelector('.rot-word');
  if (!word) return;

  function measureWidth(text) {
    var ghost = document.createElement('span');
    ghost.className = 'rot-word';
    ghost.textContent = text;
    ghost.style.cssText =
      'position:absolute;visibility:hidden;left:-9999px;white-space:nowrap;font-style:italic;';
    rot.appendChild(ghost);
    var w = ghost.getBoundingClientRect().width;
    ghost.remove();
    return Math.ceil(w) + 2;
  }

  var i = 0;
  function setWidth() {
    rot.style.width = measureWidth(WORDS[i]) + 'px';
  }

  requestAnimationFrame(setWidth);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setWidth);
  }
  window.addEventListener('resize', setWidth);

  setInterval(function () {
    var next = WORDS[(i + 1) % WORDS.length];
    word.classList.add('is-out');
    rot.style.width = measureWidth(next) + 'px';

    setTimeout(function () {
      i = (i + 1) % WORDS.length;
      word.textContent = next;
      word.classList.remove('is-out');
      word.classList.add('is-in');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          word.classList.remove('is-in');
        });
      });
    }, TRANS);
  }, DWELL);
})();
