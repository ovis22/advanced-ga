# GitHub Actions — zaawansowane: kod startowy dla studenta

Punkt wyjścia do PDF **„GitHub Actions — zaawansowane scenariusze CI/CD"** (5 zadań).
To monorepo z dwoma serwisami. Twoim zadaniem jest zbudować pipeline'y CI/CD —
ten katalog **nie zawiera** żadnych workflowów ani Dockerfile (to przygotowujesz sam).

## Serwisy

```
services/
├── web/   # frontend Vite
│   - npm run build  -> dist/
│   - npm test       -> Vitest
└── api/   # serwer HTTP Node.js (bez zależności)
    - npm start      -> uruchamia serwer na :3000 (/, /health)
    - npm test       -> node --test
matrix.json          # konfiguracja do zadania 2 (dynamiczna macierz)
```

## Szybki start

```bash
# web
cd services/web && npm install && npm run build && npm test

# api
cd services/api && npm install && npm test
npm start   # serwer na http://localhost:3000
```

## Co przygotowujesz samodzielnie

- **Dockerfile** dla serwisu `api` (zadanie 1) — w głównym katalogu `services/api/`.
- Wszystkie pliki **`.github/workflows/`** oraz ewentualne **composite actions**
  (`.github/actions/...`) zgodnie z poleceniami z PDF.
