const secondi = 1000
const no_hint = 100000

const CONFIG_LIVELLI = {
  livello1: {
    risposte: { chiave_livello: "859317" },
    indizi: [
      "dove potete trovare le notizie?",
      "un indizio è nel nostro mese",
      "avete dimezzato il giornale?",
      "dove cammina il treno?",
      "doppio bianco è spazio",
      "nero sopra bianco sotto -> 1",
      "nero sotto bianco sopra -> 0",
      "6 cifre",
      "prima e ultima cifra: 8 e 7",
      "terza e quarta cifra: 9 e 3",
      "seconda e quinta cifra: 5 e 1"
    ],
    tempoBloccoMs: 90 * secondi,
    erroriPerIndizio: 2
  },
  livello2: {
    risposte: { chiave_livello: "bottino" },
    indizi: [""],
    tempoBloccoMs: 0 * secondi,
    erroriPerIndizio: no_hint
  },
  livello3: {
    risposte: { chiave_livello: "50" },
    indizi: [
      "Assicuratevi che siano tutti e due",
      "sono di più dei gatti di una canzone",
      "sono di più dei gatti di una canzone",
      "sono di più dei gatti di una canzone",
      "sono di meno dei "
    ],
    tempoBloccoMs: 20 * secondi,
    erroriPerIndizio: 4
  },
  livello4: {
    risposte: { chiave_livello: "59863120" },
    indizi: [
      "stella rossa = 8",
      "esplosione = 6",
      "quadrato con punto rosso = 1",
      "stella bianca nel cerchio blu = 9"
    ],
    tempoBloccoMs: 20 * secondi,
    erroriPerIndizio: 10
  },
  livello5: {
    risposte: { chiave_livello: "cooperativa" },
    indizi: [""],
    tempoBloccoMs: 0 * secondi,
    erroriPerIndizio: no_hint
  },
  livello6: {
    risposte: { chiave_livello: "la libertà che guida il popolo" },
    indizi: [
      "fate attenzione alla richiesta... cosa viene chiesto prima?",
      "avete trovato il titolo dell'opera (in italiano)?"
    ],
    tempoBloccoMs: 10 * secondi,
    erroriPerIndizio: 2
  },
  livello7: {
    risposte: { chiave_livello: "Leonardo da Vinci" },
    indizi: [
      "Y->U",
      "W->T",
      "vale per tutti i pari e dispari",
      "sicuri che la chiave è il luogo? Rileggete la prova precedente per capire cosa dovete inserire",
      "no, non ci siamo. leggete bene la prova precedente, vi chiede prima il titolo (che avete già messo)... poi cosa vi chiede di inserire?",
      "chi è l'artista?"
    ],
    tempoBloccoMs: 30 * secondi,
    erroriPerIndizio: 3
  },
  livello8: {
    risposte: { chiave_livello: "olio su tela" },
    indizi: [
      "avete fatto bene i conti?",
      "occhio alle ultime due cifre",
      "attenti all'ordine",
      "ricordatevi della prove precedenti, cosa dovete inserire?",
      "se non lo avete ancora capito, avete inserito prima il titolo, poi l'artista... cosa vi manca?",
      "che tecnica è stata utilizzata per l'opera?"
    ],
    tempoBloccoMs: 30 * secondi,
    erroriPerIndizio: 3
  },
  livello9: {
    risposte: { chiave_livello: "591700" },
    indizi: [
      "Siete arrivati al termine dell'operazione?",
      "di un'opera d'arte, quale operazione potete fare con due numeri?",
      "quali sono le dimensioni?",
      "Le avete moltiplicate?"
    ],
    tempoBloccoMs: 1 * secondi,
    erroriPerIndizio: 5
  },
  livello10: {
    risposte: { chiave_livello: "Andres" },
    indizi: [""],
    tempoBloccoMs: 2 * secondi,
    erroriPerIndizio: no_hint
  },
  livello11: {
    risposte: { chiave_livello: "71481867587186" },
    indizi: [
      "la mappa è un po' troppo vuota",
      "avete notato un particolare?",
      "l'avete vista in giro?",
      "ad ogni monumento un <i>arrondissement</i>",
      "attenzione, l'ordine è fondamentale"
    ],
    tempoBloccoMs: 2 * secondi,
    erroriPerIndizio: 5
  },
  livello12: {
    risposte: { chiave_livello: "Arsenio Lupin" },
    indizi: [""
    ],
    tempoBloccoMs: 2 * secondi,
    erroriPerIndizio: no_hint
  },
  livello13: {
    risposte: { chiave_livello: "Rue Brezin" },
    indizi: [
      "si trova nel 14° arrondissement",
      "non è una via principale",
      "è vicino ad una fermata delle metropolitana",
      "è una traversa tra due vie principali",
      "è vicina ad un parco",
      "la via è intitolata ad una persona",
      "la via è inizia con la lettera B",
      "questa persona era un imprenditore e industriale che visse tra il '700 e l'800"
    ],
    tempoBloccoMs: 1 * secondi,
    erroriPerIndizio: 2
  },
  livello14: {
    risposte: { chiave_livello: "4729" }, 
    indizi: [""],
    tempoBloccoMs: 5 * secondi,
    erroriPerIndizio: 3
  },
  livello15: {
    risposte: { chiave_livello: "1110326451311412798" }, 
    indizi: [
      "non facciamo il bis",
      "avete capito su quali mezzi spostarvi?",
      "partiamo dalla 11",
      "arriviamo alla 8",
      "attenzione ai cambi tra la 2 e la 6 e tra la 4 e la 5"
    ],
    tempoBloccoMs: 1 * secondi,
    erroriPerIndizio: 3
  },
  livello16: {
    risposte: { chiave_livello: "123456" }, 
    indizi: [
      "partecipanti alla caccia",
      "i primi numeri sono xy",
      "ordine alfabetico",
      "il codice è composto da un numero di cifre quante le squadre"
    ],
    tempoBloccoMs: 1 * secondi,
    erroriPerIndizio: 3
  }
};

// Funzione per normalizzare gli input
function normalizza(str) {
  return str.toString()
    .normalize("NFD")                   // Separa i caratteri dai loro accenti (es. à diventa a + `)
    .replace(/[\u0300-\u036f]/g, "")     // Rimuove tutti i segni di accento rimasti isolati
    .trim()
    .toLowerCase();
}

// Funzione per definire la pagina successiva
function nextPage(livello) {
  const destinazioni = {
    livello0: "1_messaggio.html",
    livello1: "2_indovinello.html",
    livello2: "3_bottino.html",
    livello3: "4_calcolo_enigmistico.html",
    livello4: "5_indovinello.html",
    livello5: "6_cooperativa.html",
    livello6: "7_cimitero.html",
    livello7: "8_campetto.html",
    livello8: "9_tuforustico.html",
    livello9: "10_indovinello.html",
    livello10: "11_parigi.html",
    livello11: "12_indovinello.html",
    livello12: "13_indirizzo.html",
    livello13: "14_allarme.html",
    livello14: "15_fuga.html",
    livello15: "16_prova_finale.html",
    livello16: "17_finale.html"
  };
  return destinazioni[livello] || "index.html";
}

// Gestione del Timer a schermo
function startTimer(livello) {
  const timerDisplay = document.getElementById("timer-display");
  const errorEl = document.getElementById("error");
  const btn = document.querySelector('.send-btn');
  const blockUntil = parseInt(localStorage.getItem(livello + "_blockUntil"));

  const interval = setInterval(() => {
    const remaining = blockUntil - Date.now();

    if (remaining <= 0) {
      clearInterval(interval);
      timerDisplay.textContent = "";
      errorEl.textContent = "";
      btn.disabled = false;
    } else {
      const seconds = Math.ceil(remaining / 1000);
      timerDisplay.textContent = `Riprova tra ${seconds} secondi`;
      btn.disabled = true;
    }
  }, 1000);
}

// Funzione Unica di Controllo
function checkAnswers(livello) {
  const config = CONFIG_LIVELLI[livello];
  const errorEl = document.getElementById("error");
  const inputEl = document.getElementById("chiave_livello");

  // 1. Verifica risposta specifica per il livello
  if (normalizza(inputEl.value) === normalizza(config.risposte.chiave_livello)) {
    localStorage.removeItem(livello + "_totalErrorCount");
    localStorage.removeItem(livello + "_indiziUsati");
    localStorage.removeItem(livello + "_blockUntil");
    window.location.href = nextPage(livello);
  } else {
    // 2. Gestione Errore
    let totalErrors = parseInt(localStorage.getItem(livello + "_totalErrorCount") || "0") + 1;
    localStorage.setItem(livello + "_totalErrorCount", totalErrors);

    // Gestione Indizi
    if (totalErrors % config.erroriPerIndizio === 0 && totalErrors > 1) {
      let indiziUsati = parseInt(localStorage.getItem(livello + "_indiziUsati") || "0");
      if (indiziUsati < config.indizi.length) {
        const hintEl = document.getElementById("hint-display");
        hintEl.textContent = "💡 Indizio: " + config.indizi[indiziUsati];
        localStorage.setItem(livello + "_indiziUsati", indiziUsati + 1);
      }
    }

    // Gestione Blocco
    const blockUntil = Date.now() + config.tempoBloccoMs;
    localStorage.setItem(livello + "_blockUntil", blockUntil);

    errorEl.textContent = "!!! CODICE ERRATO !!!";
    startTimer(livello);
  }
}

// Controllo all'avvio della pagina
window.onload = () => {
  const blockUntil = localStorage.getItem("livello_blockUntil");
  if (blockUntil && blockUntil > Date.now()) {
    startTimer("livello");
  }
};

function verificaAvvio() {
  const inputField = document.getElementById("codice-input");
  const errorEl = document.getElementById("error-message");
  const codice = inputField.value.trim().toLowerCase();

  if (codice === "allons-y") {
    // Codice corretto
    window.location.href = "login.html";
  } else {
    // Codice errato: mostriamo il messaggio di errore
    errorEl.style.display = "block";
    inputField.value = ""; // Svuotiamo l'input

    // Nascondiamo l'errore dopo 3 secondi
    setTimeout(() => {
      errorEl.style.display = "none";
    }, 3000);
  }
}

function checkAlarm(livello) {
  const config = CONFIG_LIVELLI[livello];
  const errorEl = document.getElementById("error");
  const inputEl = document.getElementById("chiave_livello");
  const tentativo = normalizza(inputEl.value);
  const segreto = normalizza(config.risposte.chiave_livello);

  // Validazione: controlliamo che siano esattamente 4 cifre
  if (tentativo.length !== 4) {
    errorEl.textContent = "ATTENZIONE: Devi inserire esattamente 4 cifre!";
    return;
  }

  if (tentativo === segreto) {
    // Codice corretto: ripulisce gli errori e procede
    localStorage.removeItem(livello + "_totalErrorCount");
    localStorage.removeItem(livello + "_indiziUsati");
    localStorage.removeItem(livello + "_blockUntil");
    window.location.href = nextPage(livello);
  } else {
    // Codice errato: calcoliamo i feedback (Verde, Giallo, Rosso)
    let feedbackHTML = "";
    let segretoArr = segreto.split("");
    let tentativoArr = tentativo.split("");

    let risultati = ["rossa", "rossa", "rossa", "rossa"]; // di base rossi

    // 1. Controllo Verte (posizione esatta)
    for (let i = 0; i < 4; i++) {
      if (tentativoArr[i] === segretoArr[i]) {
        risultati[i] = "verde";
        segretoArr[i] = null; // marcatore usato
        tentativoArr[i] = null;
      }
    }

    // 2. Controllo Giallo (presente ma posizione errata)
    for (let i = 0; i < 4; i++) {
      if (tentativoArr[i] !== null) {
        let index = segretoArr.indexOf(tentativoArr[i]);
        if (index !== -1) {
          risultati[i] = "gialla";
          segretoArr[index] = null; // marcatore usato
        }
      }
    }

    // Costruiamo i LED di feedback visivo a schermo
    feedbackHTML = "<div style='display: flex; gap: 10px; margin-top: 10px; justify-content: center;'>";
    risultati.forEach((colore, idx) => {
      let bg = colore === "verde" ? "#28a745" : (colore === "gialla" ? "#ffc107" : "#dc3545");
      feedbackHTML += `<div style='width: 30px; height: 30px; background-color: ${bg}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;'>${tentativo[idx]}</div>`;
    });
    feedbackHTML += "</div>";

    errorEl.innerHTML = "!!! CODICE ERRATO - 10 SECONDI DI PENALITÀ !!!" + feedbackHTML;

    // Gestione Errori, Indizi e Blocco di 10 secondi
    let totalErrors = parseInt(localStorage.getItem(livello + "_totalErrorCount") || "0") + 1;
    localStorage.setItem(livello + "_totalErrorCount", totalErrors);

    const blockUntil = Date.now() + config.tempoBloccoMs;
    localStorage.setItem(livello + "_blockUntil", blockUntil);
    startTimer(livello);
  }
}

// Blocca il menu contestuale (pressione prolungata su mobile)
document.addEventListener('contextmenu', event => event.preventDefault());

// Blocca le scorciatoie di copia (Ctrl+C, Ctrl+X, Ctrl+U, ecc.)
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) &&
    (event.key === 'c' || event.key === 'x' || event.key === 'u' || event.key === 's')) {
    event.preventDefault();
  }
});

