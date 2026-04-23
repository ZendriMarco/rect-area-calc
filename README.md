# Rect Area Calc

Calcolatore dell'area del rettangolo — applicazione full-stack su Internet Computer (Motoko + React + TypeScript).

---

## Prerequisiti

Prima di iniziare, assicurati di avere installato:

| Strumento | Versione minima | Installazione |
|-----------|----------------|---------------|
| **Node.js** | 18+ | https://nodejs.org |
| **pnpm** | 8+ | `npm install -g pnpm` |
| **dfx** (DFINITY SDK) | 0.24.3 | `sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"` |
| **mops** (Motoko package manager) | ultima | `npm install -g ic-mops` |

---

## 1. Clona il repository

```bash
git clone <URL_DEL_TUO_REPO>
cd rect-area-calc
```

---

## 2. Installa le dipendenze

Installa le dipendenze JavaScript (frontend e root):

```bash
pnpm install
```

Installa le dipendenze Motoko (backend):

```bash
mops install
```

---

## 3. Avvia la replica locale

Avvia il nodo Internet Computer locale in background:

```bash
dfx start --background
```

> La replica sarà disponibile su `http://127.0.0.1:4943`.

---

## 4. Esegui il deploy

Compila e distribuisce entrambi i canister (backend + frontend) sulla replica locale:

```bash
dfx deploy
```

Questo comando:
1. Compila il backend Motoko in WebAssembly
2. Costruisce il frontend React (`pnpm --filter frontend build`)
3. Carica entrambi i canister sulla replica locale

---

## 5. Apri l'applicazione

Al termine del deploy, `dfx` mostra gli URL dei canister. L'URL del frontend sarà simile a:

```
http://bd3sg-teaaa-aaaaa-qaaba-cai.localhost:4943
```

Oppure puoi ricavarlo manualmente:

```bash
dfx canister id frontend
```

E aprire nel browser:

```
http://<CANISTER_ID>.localhost:4943
```

---

## 6. Ferma la replica

Quando hai finito, ferma la replica locale:

```bash
dfx stop
```

---

## Struttura del progetto

```
├── dfx.json                  # Configurazione dei canister per dfx
├── mops.toml                 # Configurazione Motoko (backend)
├── pnpm-workspace.yaml       # Monorepo pnpm
├── src/
│   ├── backend/
│   │   ├── main.mo           # Logica backend (Motoko)
│   │   └── dist/
│   │       └── backend.did   # Interfaccia Candid generata
│   └── frontend/
│       ├── src/              # Codice sorgente React + TypeScript
│       ├── dist/             # Build frontend (generata da pnpm build)
│       └── env.json          # Variabili d'ambiente frontend
```

---

## Comandi utili

```bash
# Controlla i canister attivi
dfx canister status --all

# Ricompila solo il backend
dfx build backend

# Visualizza i log del canister backend
dfx canister logs backend

# Genera i binding TypeScript dal backend
pnpm bindgen
```

---

## Licenza

MIT
