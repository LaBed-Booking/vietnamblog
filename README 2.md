# Về rồi — Reiseblog: Setup übers iPhone

Alles liegt hier flach in einem Ordner (keine Unterordner) — extra so gemacht, damit der Upload über Safari am iPhone einfach klappt.

## Einmaliges Setup

**1. Ordner entpacken**
Tippe in der Dateien-App auf `vietnam-blog.zip` — iOS entpackt automatisch einen Ordner mit allen Dateien daneben.

**2. Neues Repo auf GitHub anlegen**
- Öffne github.com in Safari, im LaBed-Booking Account eingeloggt
- Oben rechts `+` → **New repository**
- Name z. B. `vietnam-reiseblog`, auf **Public** stellen (sonst geht GitHub Pages nicht kostenlos)
- **Create repository** (ohne README, ohne .gitignore)

**3. Dateien hochladen**
- Auf der leeren Repo-Seite: Link **„uploading an existing file"** antippen
- **„choose your files"** antippen → Dateien-App öffnet sich
- In den entpackten Ordner navigieren, **alle Dateien auswählen** (oben rechts „Auswählen", dann alle antippen) → Öffnen
- Nach unten scrollen, kurze Commit-Nachricht eintippen (z. B. „Erste Version") → **Commit changes**

**4. GitHub Pages aktivieren**
- Im Repo: **Settings** → links **Pages**
- Bei „Build and deployment" → Source: **Deploy from a branch**
- Branch: **main**, Ordner: **/ (root)** → **Save**
- Nach ca. 1–2 Minuten ist die Seite live unter:
  `https://<dein-github-name>.github.io/vietnam-reiseblog/`

## Für jeden neuen Tag (Workflow ab jetzt)

1. Du schickst mir Text (+ Fotos) für den Tag hier im Chat
2. Ich schicke dir eine neue Datei `day-04.html` (usw.) + eine aktualisierte `index.html` + die neuen Fotos — alles wieder flach, direkt fertig zum Hochladen
3. Auf GitHub: im Repo oben **Add file → Upload files**
4. Alle neuen Dateien auswählen und hochladen (Dateien mit gleichem Namen wie `index.html` werden automatisch als Update erkannt und ersetzt)
5. Commit changes — fertig, die Seite aktualisiert sich von selbst

## Falls du mal keine Fotos zur Hand hast
Ich baue den Tag trotzdem mit Text und beschrifteten Platzhaltern — Fotos kannst du jederzeit nachreichen, dann tausche ich sie aus.

## Enthalten in diesem Paket
- `index.html` — Startseite / Journal-Übersicht
- `day-01.html` — Der Flug nach Vietnam
- `day-02.html` — Ankunft & Familientreffen in Saigon
- `day-03.html` — Hot Pot & Pomelo-Fußball
- `style.css`, `main.js` — Design (einmal hochladen, bleibt für alle künftigen Tage bestehen)
- 13 Fotos, bereits komprimiert und web-tauglich
