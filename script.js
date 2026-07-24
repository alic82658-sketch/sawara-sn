/**
 * Sawara Entreprise — script principal
 * Source : design-handoff/home.html + snippets/rotator.js
 */

/* ── Rotating word in hero H1 ── */
(function () {
  var WORDS = ['cafards', 'fourmis', 'punaises de lit', 'rongeurs', 'moustiques', 'termites'];
  var DWELL = 2000;
  var TRANS = 280;

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

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var trans = reduce ? 0 : TRANS;

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
    }, trans);
  }, DWELL);
})();


/* ===== MENU MOBILE HAMBURGER ===== */
(function(){
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav-close');
  if(!toggle || !mobileNav) return;
  toggle.addEventListener('click', function(){ mobileNav.classList.add('open'); });
  if(closeBtn) closeBtn.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
  mobileNav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
  });
})();

/* ===== FORMULAIRE DE DEVIS — CLOUDFLARE + RESEND ===== */
(function () {
  var form = document.querySelector('form[action*="formsubmit.co"]');
  if (!form) return;

  var submitButton = form.querySelector('button[type="submit"]');
  var initialButtonHtml = submitButton ? submitButton.innerHTML : '';
  var status = document.createElement('p');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.style.cssText = 'margin-top:14px;font-size:14px;line-height:1.5;font-weight:600;';
  form.appendChild(status);

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Envoi en cours…';
      submitButton.style.opacity = '0.7';
      submitButton.style.cursor = 'wait';
    }

    status.textContent = '';

    try {
      var response = await fetch('/api/devis', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      var result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Impossible d’envoyer votre demande.');
      }

      status.style.color = '#0f6b3f';
      status.textContent = result.message;
      form.reset();
    } catch (error) {
      status.style.color = '#a12622';
      status.textContent = error.message || 'Une erreur est survenue. Contactez-nous sur WhatsApp.';
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = initialButtonHtml;
        submitButton.style.opacity = '';
        submitButton.style.cursor = '';
      }
    }
  });
})();
