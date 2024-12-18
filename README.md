# TijmenK Portfolio Website

Welkom bij de documentatie voor de **TijmenK Portfolio Website**. Hier vind je alle benodigde informatie over de domeinen, projectopzet en ontwikkelrichtlijnen.

---

## Domeinen
De portfolio website is toegankelijk via de volgende domeinen:

- **[TijmenK.nl](https://tijmenk.nl)**
- **[TijmenK.com](https://tijmenk.com)**

Beide domeinen zijn geconfigureerd om dezelfde content te serveren, met automatische SSL-beveiliging.

---

## Projectopzet
Deze sectie beschrijft hoe je het project kunt opzetten en lokaal kunt ontwikkelen.

### Benodigdheden
Voordat je begint, zorg ervoor dat je de volgende tools hebt:

1. **Node.js** (versie 16 of hoger)
2. **npm** (inclusief bij Node.js)
3. Een moderne code-editor, zoals [Visual Studio Code](https://code.visualstudio.com/)

---

### Ontwikkelomgeving opzetten
Volg onderstaande stappen om de ontwikkelomgeving in te richten:

1. **Installeren van afhankelijkheden:**
   ```bash
   npm install
   ```

2. **Starten van de ontwikkelserver:**
   ```bash
   npm run dev
   ```

3. **Toegang tot de lokale omgeving:**
   Na het starten van de server is de website beschikbaar op [http://localhost:3000](http://localhost:3000).

---

### Extra scripts
Naast de standaard ontwikkelscripts zijn er extra tools beschikbaar:

- **Bouw voor productie:**
  Bouw een geoptimaliseerde versie van de website:
  ```bash
  npm run build
  ```

- **Preview productieversie:**
  Start een server om de productieversie lokaal te testen:
  ```bash
  npm run preview
  ```

- **Linten van code:**
  Controleer de code op consistentie en stijl:
  ```bash
  npm run lint
  ```

---