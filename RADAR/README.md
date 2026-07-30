# RADAR — Landing Page Oficial

Repositório da landing page V1 do RADAR, hospedada em:
```
https://gsimonato.github.io/RADAR/
```

## Stack
HTML + CSS + JavaScript puro. Sem frameworks, sem build step. Publicação direta via GitHub Pages (Jekyll padrão, só usado para `_config.yml` / `baseurl`).

## Estrutura
```
RADAR/
├── index.html
├── _config.yml
├── 404.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   │   ├── variables.css      # design tokens (cor, tipografia, espaçamento)
│   │   ├── layout.css          # grid, containers, tipografia de seção
│   │   ├── components.css      # header, hero, cards, tabela, faq, cta
│   │   ├── animations.css      # reveal on scroll, page-load, cell demo
│   │   └── responsive.css      # breakpoints 992/768/480px
│   ├── js/
│   │   ├── app.js              # bootstrap: reveal classes, header on scroll
│   │   ├── navigation.js        # menu mobile
│   │   ├── faq.js               # acordeão
│   │   └── animations.js        # intersection observer + status pill cycling
│   ├── img/                     # GIFs de demo + logo + og-image
│   └── video/                   # vídeo completo (pendente)
└── docs/
    └── PENDENCIAS.md
```

## Publicar
1. Push para o repositório `RADAR` na conta `gsimonato`.
2. Settings → Pages → Source: branch `main`, pasta raiz.
3. Confirmar que `_config.yml` tem `baseurl: "/RADAR"`.

## Pendências antes de publicar
Ver `docs/PENDENCIAS.md`.
