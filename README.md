# 🍝 GASTRONOMIE ROMANE 🍝 #

## 🌐 INDIRIZZO HTTP BACK-END CAPSTONE PROJECT (JAVA SPRING)

💥💥💥 https://github.com/lucawar/capstone-project/tree/main 💥💥💥

## 📝 DESCRIZIONE

"Gastronomie Romane" è un'applicazione realizzata con Angular e Java Spring che funge da portale per esplorare le diverse gastronomie nella città di Roma. Gli utenti possono esplorare, cercare, visualizzare dettagli, lasciare recensioni e prenotare gastronomie attraverso l'interfaccia utente intuitiva dell'applicazione.

## 🌟 FUNZIONALITA

- **🔒 Autenticazione Utente**: Gli utenti devono autenticarsi per accedere alle funzionalità complete dell'applicazione.
- **🍲 Esplorazione Gastronomie**: Gli utenti possono esplorare le diverse gastronomie disponibili.
- **🔍 Filtro e Ricerca**: Gli utenti possono filtrare le gastronomie per tipo e range di prezzo, e cercarle per nome e per parte nome.
- **📖 Dettagli Gastronomia**: Gli utenti possono visualizzare i dettagli di ogni gastronomia, inclusi il menu e le recensioni.
- **💬 Recensioni**: Gli utenti possono visualizzare e lasciare recensioni per ogni gastronomia.
- **📅 Prenotazioni**: Gli utenti possono effettuare, modificare e cancellare prenotazioni.
- **👤 Profilo Utente**: Gli utenti possono visualizzare e gestire le loro gastronomie preferite, recensioni e prenotazioni.

## 🛠 TECNOLOGIE UTILIZZATE

- **🎨 Frontend**: Angular
- **⚙️ Backend**: Java Spring
- **🔧 Altri Tool**: Eclipse, VScode, Postman, PgAdmin

## 💾 INSTALLAZIONE ED USO

**Configurazione Angular**:

Prima di eseguire l'applicazione "Gastronomie Romane", assicurati di avere installato Node.js, npm e Angular CLI sul tuo sistema. Se non li hai già installati, ecco come fare:

### Prerequisiti

1. **Node.js e npm**: Angular richiede Node.js e npm per eseguire e gestire le dipendenze.

### Passaggi per l'installazione

1. **Installare Node.js e npm**:
   - Vai al sito web di Node.js: [https://nodejs.org/](https://nodejs.org/)
   - Scarica e installa la versione LTS di Node.js seguendo le istruzioni sul sito web.
   - Verifica che l'installazione sia stata eseguita correttamente aprendo un terminale o prompt dei comandi e digitando:
     ```bash
     node -v
     npm -v
     ```
     Questi comandi mostreranno le versioni di Node.js e npm installate.

2. **Installare Angular CLI**:
   - Apri un terminale o prompt dei comandi.
   - Esegui il seguente comando per installare Angular CLI globalmente sul tuo sistema:
     ```bash
     npm install -g @angular/cli
     ```
   - Verifica che Angular CLI sia stato installato correttamente con il comando:
     ```bash
     ng --version
     ```

3. **Installare le dipendenze del progetto**:
   - Naviga nella directory principale del progetto usando il terminale.
   - Esegui il comando:
     ```bash
     npm install
     ```
     Questo comando installerà tutte le dipendenze necessarie del progetto, inclusi Bootstrap e Bootstrap Icons se sono elencati nel file `package.json`.

Ora sei pronto per eseguire l'applicazione sul tuo sistema locale.

### 🚀 Esecuzione dell'applicazione

1. Naviga nella directory principale del progetto (dove si trova il file `angular.json`) usando il terminale.
2. Esegui il comando:
   ```bash
   ng s -o
3. Installazione di bootstrap e bootstrap icon
    - Esegui il seguente comando per aggiungere Bootstrap al tuo progetto:
     ```bash
     npm install bootstrap
     ```
   Dopo l'installazione, assicurati di aggiungere il riferimento al file CSS di Bootstrap nel file `angular.json` o `styles.css` del tuo progetto Angular. Ad esempio, in `angular.json`:

   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.css"
   ],
     ```
   - Esegui il seguente comando per aggiungere Bootstrap-icon al tuo progetto:
     ```bash
     npm install bootstrap
     ```
     
     ## Installazione del Progetto Java Spring

### Prerequisiti

- Avere installato Java JDK (versione 8 o superiore).
- Avere installato Maven (si consiglia l'ultima versione disponibile).

### Passaggi per l'installazione

1. **Scaricare il Progetto**:
   - Clona o scarica il progetto dal repository GitHub ( https://github.com/lucawar/capstone-project/tree/main ) su una directory del tuo computer.

2. **Navigare nella Directory del Progetto**:
   - Apri un terminale e naviga nella directory in cui hai clonato o scaricato il progetto.

3. **Installare le Dipendenze**:
   - Esegui il comando seguente per installare tutte le dipendenze necessarie specificate nel `pom.xml` del progetto:
     ```bash
     mvn clean install
     ```

4. **Eseguire il Progetto**:
   - Esegui il comando seguente per avviare il progetto:
     ```bash
     mvn spring-boot:run
     ```

Con questi comandi, il progetto Spring dovrebbe essere ora in esecuzione e pronto per l'uso. Assicurati che il tuo database PostgreSQL sia configurato correttamente e in esecuzione prima di avviare il progetto, dato che hai una dipendenza dal driver PostgreSQL.

### 💡 Configurazione

Assicurati di configurare il file `application.properties` nella directory `src/main/resources` del progetto per impostare le configurazioni del database, della sicurezza e delle altre proprietà necessarie per il progetto.


## 🖊️ AUTORE
Luca Guerra

 
