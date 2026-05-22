# Spécification d'intégration — Hero Sawara Entreprise

Document de référence pour intégrer le hero de la page d'accueil dans le site existant.
Code de référence vivant : `home.html` (sections `<header class="site">` et `<section class="hero">`).

---

## 1. Structure HTML

```html
<header class="site">
  <div class="container hdr">
    <a class="brand" href="/">
      <span class="mark"><img src="/assets/sawara-icon.png" alt=""></span>
      <span class="word">Sawara<small>Entreprise</small></span>
    </a>

    <nav class="primary">
      <a href="#services">Services</a>
      <a href="#produits">Produits</a>
      <a href="#pourquoi">Pourquoi nous</a>
      <a href="#references">Références</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="hdr-cta">
      <span class="hdr-phone">📞 77 552 64 19</span>
      <a class="wa-btn" href="https://wa.me/221775526419" target="_blank" rel="noopener">
        <svg>…WhatsApp icon…</svg>
        <span class="label-long">Devis WhatsApp</span>
        <span class="label-short">WhatsApp</span>
      </a>
    </div>
  </div>
</header>

<section class="hero">
  <div class="container hero-grid">

    <!-- COLONNE GAUCHE -->
    <div class="hero-text">
      <div class="badges">
        <span class="badge"><span class="dot"></span>Expert nuisibles &amp; hygiène</span>
        <span class="badge">Disponible 6j/7</span>
        <span class="badge"><strong>Devis WhatsApp en 2h</strong></span>
      </div>

      <h1 class="display">
        Experts en traitement<br>
        des <span class="rot"><span class="rot-word">cafards</span></span>.
      </h1>

      <p class="lede">
        Sawara Entreprise accompagne particuliers, entreprises et institutions
        pour le traitement des <strong>cafards, fourmis, punaises de lit,
        rongeurs</strong>, la désinfection, le nettoyage professionnel et la
        <strong>vente de produits anti-nuisibles</strong>. Intervention à Dakar
        et au-delà selon les besoins.
      </p>

      <div class="cta-row">
        <a class="btn-primary" href="https://wa.me/221775526419" target="_blank" rel="noopener">
          <svg>…WhatsApp…</svg> Demander un devis WhatsApp
        </a>
        <a class="btn-ghost" href="#produits">
          Découvrir nos solutions
          <svg>…arrow…</svg>
        </a>
      </div>
    </div>

    <!-- COLONNE DROITE : carte crédibilité -->
    <div class="hero-visual">
      <div class="cred-card">
        <div class="cred-head">…</div>
        <div class="cred-body">…</div>
        <div class="cred-foot">…</div>
      </div>
    </div>

  </div>
</section>
```

---

## 2. Textes exacts

### Header
- **Wordmark** : `Sawara` + petit `Entreprise`
- **Nav** : `Services` · `Produits` · `Pourquoi nous` · `Références` · `Contact`
- **Téléphone** (≥1200 px) : `77 552 64 19`
- **Bouton WhatsApp** : `Devis WhatsApp` (long) / `WhatsApp` (court, <520 px)

### Hero gauche
- **Badges** (4 pills) :
  1. `Disponible 6j/7` (avec dot vert)
  2. `Devis rapide`
  3. `Intervention à Dakar et au-delà`
  4. `Produits anti-nuisibles disponibles` (gras)
- **H1** (fixe + mot rotatif final) :
  > `Experts en désinsectisation,\ndératisation, désinfection\n& traitement des [MOT-ROTATIF].`
- **Sous-titre** :
  > Sawara Entreprise accompagne les **particuliers, entreprises et institutions** pour le traitement des nuisibles, la désinfection, la dératisation, le nettoyage professionnel et la **vente de solutions anti-nuisibles**. Intervention à Dakar et au-delà selon les besoins.
- **CTA primaire** : `Devis rapide sur WhatsApp`
- **CTA secondaire** : `Découvrir nos solutions`

### Mots du texte rotatif (ordre fixe)
1. `cafards`
2. `fourmis`
3. `punaises de lit`
4. `rongeurs`
5. `moustiques`
6. `termites`

- **Durée affichée par mot** : 2000 ms
- **Durée de transition** : 280 ms (fade + slide ±0.45em)
- **Effet** : sortie vers le haut, entrée depuis le bas + animation de largeur du conteneur en cubic-bezier(.4, 0, .2, 1)
- **Respect `prefers-reduced-motion: reduce`** : transitions désactivées

### Carte crédibilité (colonne droite)
- **Eyebrow** : `SAWARA ENTREPRISE · CRÉDIBILITÉ`
- **Titre interne** : `Une entreprise déjà recommandée, expérimentée et reconnue.`
- **Bloc Google PROOÉMINENT** (fond vert pâle, en haut du body) :
  - Note : `4,9 / 5` (très grand, ~40 px) + 5 étoiles dorées
  - Eyebrow vert : `✓ +100 avis vérifiés sur Google`
  - Titre interne : `Note moyenne 4,9 / 5`
  - Sous-ligne : `Particuliers · Entreprises · Institutions`
- **3 lignes preuves sous le bloc Google** :
  1. **+6 ans d'expérience** — *À Dakar et au-delà selon les besoins* — meta : `6+`
  2. **Eiffage · ONG danoise · Ambassades** — *Références institutionnelles vérifiables*
  3. **Références professionnelles** — *Lettres de recommandation disponibles sur demande*
- **Footer carte** :
  - Label gauche : `SÉNÉGAL · INTERVENTION SELON LES BESOINS`
  - Lien droite : `Devis rapide →`

---

## 3. Couleurs

CSS variables à déclarer sur `:root` :

```css
--green-900:#0F2E20;   /* texte vert très foncé, fond footer */
--green-800:#143A2A;   /* fond carte sombre, header cred */
--green-700:#1C4D38;   /* hover, accents */
--green-500:#7BC042;   /* vert clair, accents, mot rotatif */
--green-400:#92CE5C;   /* eyebrow sur fond sombre */
--green-200:#D6ECC1;   /* hover doux */
--green-100:#EEF6E8;   /* fond pale section produits */
--green-50:#F6FBF1;    /* fond ultra pale stats card */
--ivory:#FAFAF7;       /* fond page */
--paper:#FFFFFF;       /* cartes */
--ink:#0B1F16;         /* texte principal */
--ink-2:#3A4A41;       /* texte secondaire */
--ink-3:#6B7A72;       /* texte tertiaire / labels */
--line:#E7EDE5;        /* bordures fines */
--whatsapp:#25D366;    /* boutons WhatsApp */
--star:#F5B423;        /* étoiles Google */
```

Rayon de bord :
```css
--r-sm:14px;
--r-md:22px;
--r-lg:32px;
--r-xl:44px;
```

Ombres :
```css
--shadow-sm:0 1px 2px rgba(15,46,32,.04), 0 2px 8px rgba(15,46,32,.04);
--shadow-md:0 6px 16px rgba(15,46,32,.06), 0 24px 48px -16px rgba(15,46,32,.10);
--shadow-lg:0 12px 32px rgba(15,46,32,.10), 0 40px 80px -24px rgba(15,46,32,.16);
```

---

## 4. Typographies

**Fonts à charger** (Google Fonts) :
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

| Usage | Famille | Poids | Tracking |
|---|---|---|---|
| Display (H1, titres, num. stats) | Bricolage Grotesque | 700 | -0.025em |
| Corps, badges, sous-titres | Manrope | 400 / 500 / 600 / 700 | normal |
| Eyebrows | Manrope | 600 | +0.16em uppercase |
| Placeholders monospace | JetBrains Mono | 400 | +0.04em |

### Tailles indicatives

| Élément | Taille | Notes |
|---|---|---|
| Hero H1 | `clamp(30px, 3.9vw, 50px)` | line-height 1.05, text-wrap balance, 3 lignes max |
| Sous-titre `.lede` | 17–18.5 px | line-height 1.55, max-width 560 px |
| Badge | 12.5 px | rounded 99px, hauteur ≈ 32 px |
| Bouton CTA primaire | 15 px | padding 16/22 px, rounded 99px |
| Eyebrow carte cred | 11 px | uppercase, letterspace 0.18em |
| Titre carte cred | 22 px | Bricolage 700 |
| Stat number | 34 px | Bricolage 700, -0.025em |
| Tag pill | 12 px | uppercase tracking 0.02em |

---

## 5. Espacements (système 4 / 8 px)

| Contexte | Valeur |
|---|---|
| Hauteur header | 76 px |
| Padding container | 20 px mobile / 40 px desktop |
| Max-width container | 1280 px |
| Hero padding vertical | 36 px mobile / 60 px desktop |
| Gap entre les 2 colonnes hero | 28 px mobile / 48 px desktop |
| Gap badges | 8 px |
| Gap CTA row | 12 px |
| Gap intérieur carte cred (body) | 18 px |
| Padding carte cred (head / body) | 22 / 26 px |

---

## 6. Comportement desktop (≥ 1000 px)

- Hero en grille **2 colonnes** : `1.05fr / .95fr` avec gap 48 px, `align-items:center`
- Nav primaire visible, centrée dans le header
- Bouton WhatsApp + numéro de téléphone (≥1200 px) à droite
- H1 cap à 56 px max
- Carte crédibilité affichée intégralement à droite du texte

## 7. Comportement mobile (< 1000 px)

- Hero en **une seule colonne** : texte d'abord, carte cred en dessous
- Nav primaire masquée (`display:none`) — seul le bouton WhatsApp reste visible
- Téléphone du header masqué (visible ≥1200 px uniquement)
- H1 redescend à 34 px min via clamp
- 3 badges peuvent passer sur 2 lignes (flex-wrap container, white-space nowrap sur chaque pill)
- CTA row reste horizontal, peut wrap si peu d'espace
- Carte crédibilité conserve son agencement interne (stats 2 cols, tags wrap)

### Breakpoints utilisés
- `520 px` — bascule label court / long du bouton WhatsApp
- `760 px` — internes (cards, footer)
- `1000 px` — passage hero monocolonne → 2 colonnes + nav visible
- `1200 px` — affichage du numéro de téléphone dans le header

---

## 8. JS — Rotateur de mots

```js
(function(){
  const WORDS = ['cafards','fourmis','punaises de lit','rongeurs','moustiques','termites'];
  const DWELL = 2000;   // durée d'affichage d'un mot
  const TRANS = 280;    // durée de la transition

  const rot = document.querySelector('.rot');
  if(!rot) return;
  const word = rot.querySelector('.rot-word');

  function measureWidth(text){
    const ghost = document.createElement('span');
    ghost.className = 'rot-word';
    ghost.textContent = text;
    ghost.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;white-space:nowrap;font-style:italic;';
    rot.appendChild(ghost);
    const w = ghost.getBoundingClientRect().width;
    ghost.remove();
    return Math.ceil(w) + 2;
  }

  let i = 0;
  const setWidth = () => { rot.style.width = measureWidth(WORDS[i]) + 'px'; };
  requestAnimationFrame(setWidth);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setWidth);
  window.addEventListener('resize', setWidth);

  setInterval(() => {
    const next = WORDS[(i + 1) % WORDS.length];
    word.classList.add('is-out');
    rot.style.width = measureWidth(next) + 'px';
    setTimeout(() => {
      i = (i + 1) % WORDS.length;
      word.textContent = next;
      word.classList.remove('is-out');
      word.classList.add('is-in');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        word.classList.remove('is-in');
      }));
    }, TRANS);
  }, DWELL);
})();
```

### CSS associé

```css
.rot{
  display:inline-block;position:relative;overflow:hidden;
  vertical-align:baseline;color:var(--green-500);
  transition:width .45s cubic-bezier(.4,0,.2,1);
}
.rot::after{
  content:"";position:absolute;left:0;right:0;bottom:.05em;height:.10em;
  background:var(--green-500);border-radius:3px;opacity:.85;
}
.rot-word{
  display:inline-block;white-space:nowrap;font-style:italic;
  transition:opacity .28s ease, transform .28s ease;
}
.rot-word.is-out{opacity:0;transform:translateY(-0.45em)}
.rot-word.is-in {opacity:0;transform:translateY(0.45em)}
@media (prefers-reduced-motion:reduce){
  .rot, .rot-word{transition:none}
  .rot-word.is-out, .rot-word.is-in{opacity:1;transform:none}
}
```

---

## 9. Assets nécessaires

| Asset | Chemin recommandé | Format | Notes |
|---|---|---|---|
| **Logo icône** (cercle figure) | `/assets/sawara-icon.png` | PNG 512×460, ~120 Ko | Utilisé dans le header (44–46 px rond) et footer |
| **Logo complet** (icône + wordmark) | `/assets/sawara-logo-full.png` | PNG 800×768 | Optionnel — pour footer, splash, favicon |
| **Favicon** | `/favicon.ico` ou `.png` | 32×32 / 180×180 | À dériver de l'icône |
| **OG image** | `/assets/og-sawara.jpg` | 1200×630 JPG | À fournir — pour partages réseaux |
| **Capture avis Google** | `/assets/google-reviews.png` ou `.jpg` | ≈ 600×800 PNG, transparent ou sur fond clair | À remplacer pour preuve sociale ; intégrer en option dans la carte crédibilité (à droite du bloc Stats) ou dans une section dédiée |
| **Photos d'intervention** | `/assets/photos/…` | JPG 1200–1600 px de large | À fournir : 3–5 photos terrain pour habiller services & produits ; pas dans le hero pour l'instant |

> **Aucun pictogramme illustré de personnage** ne doit être ajouté au hero. Les pictogrammes utilisés sont uniquement des icônes line/SVG sobres (bouclier, maison, flacon).

---

## 10. Accessibilité

- `<img>` du logo : `alt=""` (décoratif, le mot Sawara suit)
- Bouton WhatsApp : `aria-label` recommandé si label visuel raccourci
- `prefers-reduced-motion` respecté pour le rotateur
- Contraste vert-900 sur fond ivoire : AAA
- Hit-targets CTA ≥ 44 px de haut
- Nav links : focus-visible à styler côté projet (`outline: 2px solid var(--green-500)`)

---

## 11. SEO / GEO

À conserver dans `<head>` :

```html
<title>Sawara Entreprise — Désinsectisation, dératisation et nettoyage professionnel à Dakar</title>
<meta name="description" content="Sawara Entreprise, basée à Dakar : désinsectisation, désinfection, dératisation, nettoyage professionnel et vente de solutions anti-nuisibles (terre de diatomée, pièges à souris, seringues anti-cafards, insecticides anti-fourmis). 6+ ans d'expérience, 4,9/5 sur Google.">
```

Ajouter le JSON-LD `LocalBusiness` (voir `home.html` lignes 6–33) avec note 4.9, 100 avis, services et produits listés.

---

## 12. Données factuelles à NE PAS modifier

- Téléphone : **+221 77 552 64 19**
- Note Google : **4,9 / 5** sur **100+** avis
- Ancienneté : **6+ ans** à Dakar
- Références publiques : **Eiffage**, **ONG danoise**, **Ambassades**, entreprises, particuliers
- Pas de témoignages individuels inventés ; toujours formulé "Lettres de recommandation professionnelles disponibles sur demande"
- Pas de garantie d'éradication "100 %" sur les produits — vocabulaire : *solution adaptée*, *traitement ciblé*, *conseil d'utilisation*

---

**Fichier de référence** : `home.html` (toutes les valeurs ci-dessus y sont déjà appliquées et testées sur mobile + desktop).
