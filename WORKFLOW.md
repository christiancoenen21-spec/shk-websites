# Mein täglicher Workflow – SHK-Websites

## Projekt öffnen
1. VS Code öffnen
2. Ordner `shk-websites` öffnen (falls nicht automatisch offen: **Datei → Ordner öffnen**)

## Wo ich was mache

**Rechts im "CHAT"-Fenster** → hier gebe ich alle Aufgaben ein
- Neue Seiten bauen: "Bau mir eine Kontaktseite mit Formular"
- Änderungen: "Mach die Überschrift größer", "Füg ein Logo-Platzhalter ein"
- Fragen: "Was macht diese Datei?", "Erklär mir den Aufbau"

Nach einer Änderung erscheint unten rechts **"Keep"** und **"Undo"** → auf **"Keep"** klicken, um die Änderung zu übernehmen.

**Unten im normalen Terminal** → nur für 2 Dinge:
1. Website live ansehen
2. Fortschritt sichern (Git)

## Neues, normales Terminal öffnen
Falls unten der "Claude Code"-Tab offen ist (nicht zum Tippen gedacht):
1. Im Terminal-Bereich rechts oben auf **"+"** klicken
2. Falls sich wieder "Claude Code" öffnet: kleinen Pfeil **▾** neben dem "+" klicken → **"PowerShell"** auswählen

## Website live ansehen
Im normalen Terminal:
```
npm run dev
```
Dann im Browser öffnen: `http://localhost:4321/`
Aktualisiert sich automatisch bei jeder Änderung. Läuft der Server schon → nicht nochmal starten.
Stoppen: `q` + Enter oder Strg+C

## Fortschritt sichern (regelmäßig, nicht bei jeder Kleinigkeit)
Im normalen Terminal:
```
git add .
git commit -m "kurze Beschreibung, z.B. Startseite fertig"
git push
```

## Checkliste bei neuer Sitzung
1. VS Code öffnen, Projektordner `shk-websites`
2. `npm run dev` im normalen Terminal starten
3. `http://localhost:4321/` im Browser offen lassen
4. Rechts im Chat mit Claude Code weiterarbeiten

## Falls mal was klemmt
| Problem | Lösung |
|---|---|
| Terminal reagiert nicht auf Tippen | Falscher Tab – auf "PowerShell"-Tab wechseln, nicht "Claude Code" |
| `claude --version` nicht gefunden | Terminal komplett neu starten (nicht nur Tab) |
| Änderung erscheint nicht im Browser | `npm run dev` läuft? Browser-Tab neu laden |
| Versehentlich was kaputt gemacht | Im Chat: "Mach die letzte Änderung rückgängig" oder `git log` + alten Stand wiederherstellen |

## Grundregel
- Kleine Schritte: erst eine Seite fertig machen, dann die nächste
- Nach jedem sinnvollen Zwischenstand: `git add .` / `commit` / `push`
- Bei Unklarheit einfach im Chat fragen – auch technische Begriffe erklären lassen
