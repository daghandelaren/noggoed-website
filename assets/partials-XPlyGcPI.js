(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={fridge:{happy:{body:`#D7EBE0`,bodyTop:`#BFDDCD`,cheek:`#F4B860`,mouth:`#2E7D5B`},concerned:{body:`#CFE3D6`,bodyTop:`#B2D2C0`,cheek:`#E8A546`,mouth:`#2E7D5B`},sad:{body:`#C4D8CC`,bodyTop:`#A6C6B4`,cheek:`#C85450`,mouth:`#235E45`}},freezer:{happy:{body:`#E4F3FB`,bodyTop:`#C6E6F6`,cheek:`#E7A9B5`,mouth:`#2C6E8F`},concerned:{body:`#D8ECF7`,bodyTop:`#BBDDF0`,cheek:`#E08F9E`,mouth:`#2C6E8F`},sad:{body:`#CBE2F1`,bodyTop:`#AED1E8`,cheek:`#B96B78`,mouth:`#234E63`}},pantry:{happy:{body:`#C39B66`,bodyTop:`#B07D49`,cheek:`#E7C07A`,mouth:`#4A3018`},concerned:{body:`#BB9560`,bodyTop:`#A4713F`,cheek:`#D9A85E`,mouth:`#4A3018`},sad:{body:`#A9824F`,bodyTop:`#8E5E32`,cheek:`#B07A4A`,mouth:`#3A2512`}}},t=`#E8E2D6`,n=`#FFFFFF`,r=0;function i(e,t,n,r,i,a){let o=t-r;return`
    <rect x="${e}" y="${o}" width="${n}" height="${r}" rx="3" fill="${i}" />
    <rect x="${e-1}" y="${o-4}" width="${n+2}" height="5" rx="2" fill="${a}" />
    <rect x="${e+2.5}" y="${o+3}" width="2.5" height="${r-8}" rx="1.5" fill="#FFFFFF" opacity="0.25" />
  `}function a(e,t,n,r,i,a){let o=t-r;return`
    <rect x="${e}" y="${o}" width="${n}" height="${r}" rx="2.5" fill="${i}" />
    <rect x="${e}" y="${o+r/2-2}" width="${n}" height="4" fill="${a}" opacity="0.9" />
    <rect x="${e+2.5}" y="${o+3}" width="2" height="${r-8}" rx="1" fill="#FFFFFF" opacity="0.25" />
  `}function o(e,t,n,r){return`<g stroke="${r}" stroke-width="2" stroke-linecap="round" opacity="0.75">${[0,60,120].map(r=>{let i=r*Math.PI/180,a=Math.cos(i)*n,o=Math.sin(i)*n;return`<line x1="${e-a}" y1="${t-o}" x2="${e+a}" y2="${t+o}" />`}).join(``)}</g>`}function s(){let e=`#B98A56`,t=`#D9B888`;return`
    <rect x="50" y="94" width="100" height="78" rx="10" fill="#795130" />
    <rect x="50" y="94" width="100" height="16" rx="10" fill="#5F3E22" opacity="0.5" />
    <rect x="50" y="94" width="100" height="78" rx="10" fill="none" stroke="#5A3C20" stroke-width="1.5" opacity="0.6" />

    ${i(60,120,16,22,`#84B49A`,`#5E8A72`)}
    ${a(84,120,13,20,`#E7C07A`,`#CF9645`)}
    ${i(106,120,16,20,`#C85450`,`#A23E3B`)}

    ${i(66,146,16,17,`#EAD9B6`,`#C39B66`)}
    ${i(94,146,15,16,`#84B49A`,`#5E8A72`)}
    ${a(118,146,12,15,`#D98E7A`,`#B86650`)}

    ${i(86,170,16,15,`#9DC3AC`,`#5E8A72`)}

    <rect x="50" y="120" width="100" height="5" rx="2" fill="${e}" />
    <rect x="50" y="120" width="100" height="1.6" fill="${t}" opacity="0.85" />
    <rect x="50" y="146" width="100" height="5" rx="2" fill="${e}" />
    <rect x="50" y="146" width="100" height="1.6" fill="${t}" opacity="0.85" />
  `}function c(e){return e===`fridge`?`
      <g>
        <rect x="36" y="92" width="128" height="2" fill="${t}" opacity="0.6" />
        <rect x="148" y="50" width="6" height="28" rx="3" fill="${n}" opacity="0.7" />
        <rect x="148" y="110" width="6" height="36" rx="3" fill="${n}" opacity="0.7" />
      </g>
    `:e===`freezer`?`
      <g>
        <rect x="148" y="70" width="6" height="58" rx="3" fill="#FFFFFF" opacity="0.85" />
        ${o(100,132,12,`#7FB8D8`)}
        <circle cx="56" cy="120" r="2.4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="140" cy="150" r="2" fill="#FFFFFF" opacity="0.85" />
        <circle cx="120" cy="112" r="1.6" fill="#FFFFFF" opacity="0.8" />
        <circle cx="78" cy="150" r="1.8" fill="#FFFFFF" opacity="0.8" />
      </g>
    `:`<g>${s()}</g>`}function l(e){let t=`#1F2A24`;return e===`happy`?`
      <g>
        <circle cx="78" cy="62" r="5" fill="${t}" />
        <circle cx="122" cy="62" r="5" fill="${t}" />
        <circle cx="79.5" cy="60.5" r="1.5" fill="#FFFFFF" />
        <circle cx="123.5" cy="60.5" r="1.5" fill="#FFFFFF" />
      </g>
    `:e===`concerned`?`
      <g>
        <path d="M73 64 Q78 60 83 64" stroke="${t}" stroke-width="3" stroke-linecap="round" fill="none" />
        <path d="M117 64 Q122 60 127 64" stroke="${t}" stroke-width="3" stroke-linecap="round" fill="none" />
      </g>
    `:`
    <g>
      <circle cx="78" cy="64" r="5" fill="${t}" />
      <circle cx="122" cy="64" r="5" fill="${t}" />
      <path d="M70 56 Q78 52 86 58" stroke="${t}" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <path d="M114 58 Q122 52 130 56" stroke="${t}" stroke-width="2.5" stroke-linecap="round" fill="none" />
    </g>
  `}function u(e,t){return e===`happy`?`<path d="M86 78 Q100 92 114 78" stroke="${t}" stroke-width="3.5" stroke-linecap="round" fill="none" />`:e===`concerned`?`<path d="M88 82 L112 82" stroke="${t}" stroke-width="3.5" stroke-linecap="round" />`:`<path d="M86 86 Q100 76 114 86" stroke="${t}" stroke-width="3.5" stroke-linecap="round" fill="none" />`}function d(n,i,a=180){let o=e[n][i],s=`avatar-gradient-${r++}`;return`
    <svg width="${a}" height="${a}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="${s}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${o.bodyTop}" />
          <stop offset="1" stop-color="${o.body}" />
        </linearGradient>
      </defs>

      <rect x="36" y="28" width="128" height="150" rx="28" ry="28" fill="url(#${s})" stroke="${t}" stroke-width="1.5" />

      ${c(n)}

      <circle cx="66" cy="68" r="7" fill="${o.cheek}" opacity="0.55" />
      <circle cx="134" cy="68" r="7" fill="${o.cheek}" opacity="0.55" />

      ${l(i)}
      ${u(i,o.mouth)}

      ${i===`sad`?`<ellipse cx="75" cy="72" rx="3" ry="5" fill="#8FB4D8" opacity="0.9" />`:``}
    </svg>
  `}function f(e={}){let{showBackLink:t=!1}=e;return`
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a class="brand" href="/">
          <span class="brand__mark">${d(`fridge`,`happy`,32)}</span>
          NogGoed
        </a>
        ${t?`<a class="back-link" href="/">&larr; Terug naar home</a>`:``}
      </div>
    </header>
  `}function p(){return`
    <footer class="site-footer">
      <div class="wrap site-footer__inner">
        <span>&copy; ${new Date().getFullYear()} NogGoed</span>
        <nav class="footer-links">
          <a href="/privacybeleid/">Privacybeleid</a>
          <a href="mailto:info@noggoed.nl">info@noggoed.nl</a>
        </nav>
      </div>
    </footer>
  `}function m(){let e=document.querySelector(`#site-header`),t=document.querySelector(`#site-footer`);e&&(e.innerHTML=f({showBackLink:e.dataset.backLink===`true`})),t&&(t.innerHTML=p())}export{d as n,m as t};