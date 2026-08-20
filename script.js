const secondi = 1000;
const minuti = 60 * secondi;

const CONFIG_LIVELLI = {
  livello1: {
    risposte: { chiave_livello: "859317" },
    indizi: [
      { nome: " > dove potete trovare le notizie?", tempoAttesaMs: 10 * minuti },
      { nome: " > un indizio è nelle stelle del nostro mese", tempoAttesaMs: 5 * minuti },
      { nome: " > avete diviso la verità per far combaciare le stranezze?", tempoAttesaMs: 5 * minuti },
      { nome: " > dove cammina il treno?", tempoAttesaMs: 5 * minuti },
      { nome: " > doppio bianco è spazio", tempoAttesaMs: 5 * minuti },
      { nome: " > nero sopra bianco sotto -> 1", tempoAttesaMs: 5 * minuti },
      { nome: " > nero sotto bianco sopra -> 0", tempoAttesaMs: 5 * minuti },
      { nome: " > 6 cifre", tempoAttesaMs: 5 * minuti },
      { nome: " > prima e ultima cifra: 8 e 7", tempoAttesaMs: 5 * minuti },
      { nome: " > terza e quarta cifra: 9 e 3", tempoAttesaMs: 5 * minuti },
      { nome: " > seconda e quinta cifra: 5 e 1", tempoAttesaMs: 5 * minuti }
    ],
    tempoBloccoMs: 30 * secondi
  },
  livello2: {
    risposte: { chiave_livello: "bottino" },
    indizi: [
      { nome: " > come si chiama la refurtiva dopo un colpo?", tempoAttesaMs: 10 * minuti },
      { nome: " > è anche una zona di Affile", tempoAttesaMs: 5 * minuti }
    ],
    tempoBloccoMs: 30 * secondi
  },
  livello3: {
    risposte: { chiave_livello: "50" },
    indizi: [
      { nome: " > Assicuratevi che sia la prima", tempoAttesaMs: 5 * minuti },
      { nome: " > Assicuratevi di contare sulla piastra", tempoAttesaMs: 5 * minuti },
      { nome: " > sono di più dei gatti di una canzone", tempoAttesaMs: 3 * minuti },
      { nome: " > sono meno della metà di 110", tempoAttesaMs: 3 * minuti },
      { nome: " > sono di più di 6x8", tempoAttesaMs: 3 * minuti },
      { nome: " > sono di meno di 26x2 ", tempoAttesaMs: 3 * minuti }
    ],
    tempoBloccoMs: 20 * secondi
  },
  livello4: {
    risposte: { chiave_livello: "59863120" },
    indizi: [
      { nome: " > non ancora, concentratevi...", tempoAttesaMs: 10 * minuti },
      { nome: " > dovete penare ancora un po' per avere il primo indizio...", tempoAttesaMs: 10 * minuti },
      { nome: " > stella rossa = 8", tempoAttesaMs: 10 * minuti },
      { nome: " > esplosione = 6", tempoAttesaMs: 10 * minuti },
      { nome: " > quadrato con punto rosso = 1", tempoAttesaMs: 10 * minuti },
      { nome: " > stella bianca nel cerchio blu = 9", tempoAttesaMs: 10 * minuti }
    ],
    tempoBloccoMs: 60 * secondi
  },
  livello5: {
    risposte: { chiave_livello: "cooperativa" },
    indizi: [],
    tempoBloccoMs: 20 * secondi
  },
  livello6: {
    risposte: { chiave_livello: "la libertà che guida il popolo" },
    indizi: [
      { nome: " > fate attenzione alla richiesta... cosa viene chiesto per prima?", tempoAttesaMs: 10 * minuti },
      { nome: " > avete trovato il titolo dell'opera (in italiano)?", tempoAttesaMs: 5 * minuti },
      { nome: " > bisogna inserire il titolo dell'opera", tempoAttesaMs: 5 * minuti }
    ],
    tempoBloccoMs: 30 * secondi
  },
  livello7: {
    risposte: { chiave_livello: "Leonardo da Vinci" },
    indizi: [
      { nome: " > qual è la cadenza dei balli?", tempoAttesaMs: 10 * minuti },
      { nome: " > Y->U", tempoAttesaMs: 10 * minuti },
      { nome: " > W->T", tempoAttesaMs: 8 * minuti },
      { nome: " > vale per tutti i pari e dispari", tempoAttesaMs: 7 * minuti },
      { nome: " > sicuri che la chiave è il luogo? Rileggete la prova precedente per capire cosa dovete inserire", tempoAttesaMs: 6 * minuti },
      { nome: " > no, non ci siamo. leggete bene la prova precedente, vi chiede prima il titolo (che avete già messo)... poi cosa vi chiede di inserire?", tempoAttesaMs: 5 * minuti },
      { nome: " > chi è l'artista?", tempoAttesaMs: 4 * minuti }
    ],
    tempoBloccoMs: 30 * secondi
  },
  livello8: {
    risposte: { chiave_livello: "olio su tela" },
    indizi: [
      { nome: " > avete fatto bene i conti?", tempoAttesaMs: 10 * minuti },
      { nome: " > occhio all'indizio", tempoAttesaMs: 10 * minuti },
      { nome: " > ci interessano tante cifre quante sono le torri di Notre Dame", tempoAttesaMs: 10 * minuti },
      { nome: " > attenti all'ordine", tempoAttesaMs: 5 * minuti },
      { nome: " > ricordatevi della prove precedenti, cosa dovete inserire?", tempoAttesaMs: 5 * minuti },
      { nome: " > se non lo avete ancora capito, avete inserito prima il titolo, poi l'artista... cosa vi manca?", tempoAttesaMs: 5 * minuti },
      { nome: " > che tecnica è stata utilizzata per l'opera?", tempoAttesaMs: 5 * minuti }
    ],
    tempoBloccoMs: 30 * secondi
  },
  livello9: {
    risposte: { chiave_livello: "591700" },
    indizi: [
      { nome: " > siete arrivati al termine dell'operazione?", tempoAttesaMs: 10 * minuti },
      { nome: " > di un'opera d'arte, quale operazione potete fare con due numeri?", tempoAttesaMs: 10 * minuti },
      { nome: " > quali sono le dimensioni dell'opera?", tempoAttesaMs: 6 * minuti },
      { nome: " > le avete moltiplicate?", tempoAttesaMs: 5 * minuti }
    ],
    tempoBloccoMs: 30 * secondi
  },
  livello10: {
    risposte: { chiave_livello: "Andres" },
    indizi: [],
    tempoBloccoMs: 30 * secondi
  },
  livello11: {
    risposte: { chiave_livello: "71481867587186" },
    indizi: [
      { nome: " > la mappa è un po' troppo vuota... servirebbero dei numeri in quelle caselle", tempoAttesaMs: 10 * minuti },
      { nome: " > sapete, anche Parigi ha i suoi quartieri", tempoAttesaMs: 6 * minuti },
      { nome: " > avete notato un particolare in ogni foto?", tempoAttesaMs: 4 * minuti },
      { nome: " > l'avete vista in giro per Affile?", tempoAttesaMs: 4 * minuti },
      { nome: " > ad ogni monumento un <i>arrondissement</i>", tempoAttesaMs: 4 * minuti },
      { nome: " > attenzione, l'ordine è fondamentale", tempoAttesaMs: 4 * minuti },
      { nome: " > il codice è dato dall'ordine dei quartieri che trovete sulla bici", tempoAttesaMs: 4 * minuti },
      { nome: " > la foto 8 è la Tour Eiffel che si trova nel 7° arrondissement. Se la prima cifra segnata sulla bici è 8 (corrispondente alla foto 8), vuol dire che in prima posizione del codice va inserto il 7", tempoAttesaMs: 4 * minuti },
      { nome: " > la foto 3 è l'Arc du Triomphe che si trova nell'8° arrondissement. Se la quarta cifra segnata sulla bici è 3 (corrispondente alla foto 3), vuol dire che in quarta posizione del codice va inserto l'8", tempoAttesaMs: 4 * minuti }
    ],
    tempoBloccoMs: 60 * secondi
  },
  livello12: {
    risposte: { chiave_livello: "56" },
    indizi: [],
    tempoBloccoMs: 30 * secondi
  },
  livello13: {
    risposte: { chiave_livello: "Rue Brezin" },
    indizi: [
      { nome: " > si trova nel 14° arrondissement", tempoAttesaMs: 5 * minuti },
      { nome: " > non è una via principale", tempoAttesaMs: 5 * minuti },
      { nome: " > è vicino ad una fermata delle metropolitana", tempoAttesaMs: 5 * minuti },
      { nome: " > è una traversa tra due vie principali", tempoAttesaMs: 5 * minuti },
      { nome: " > è vicina ad un parco", tempoAttesaMs: 5 * minuti },
      { nome: " > la via è intitolata ad una persona sepolta al cimitero di Père Lachaise", tempoAttesaMs: 5 * minuti },
      { nome: " > la via inizia con la lettera B", tempoAttesaMs: 5 * minuti },
      { nome: " > questa persona era un imprenditore e industriale che visse tra il '700 e l'800", tempoAttesaMs: 5 * minuti },
      { nome: " > la via termina con la lettera N", tempoAttesaMs: 5 * minuti },
    ],
    tempoBloccoMs: 60 * secondi
  },
  livello14: {
    risposte: { chiave_livello: "4729" }, 
    indizi: [],
    tempoBloccoMs: 60 * secondi
  },
  livello15: {
    risposte: { chiave_livello: "1110326451311412798" }, 
    indizi: [
      { nome: " > non facciamo il bis (non contate le linee bis)", tempoAttesaMs: 10 * minuti },
      { nome: " > partiamo dalla linea 11", tempoAttesaMs: 10 * minuti },
      { nome: " > arriviamo alla linea 8", tempoAttesaMs: 8 * minuti },
      { nome: " > attenzione ai cambi tra la 2 e la 6 e tra la 4 e la 5", tempoAttesaMs: 7 * minuti },
      { nome: " > la soluzione è data dalla sequenza delle metro dalla più lenta alla più veloce (senza trattini o spazi)", tempoAttesaMs: 6 * minuti },
    ],
    tempoBloccoMs: 100 * secondi
  }
};

// Funzione per normalizzare gli input
function normalizza(str) {
  return str.toString()
    .normalize("NFD")                   
    .replace(/[\u0300-\u036f]/g, "")     
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
    livello5: "6_louvre.html",
    livello6: "7_louvre.html",
    livello7: "8_louvre.html",
    livello8: "9_louvre.html",
    livello9: "10_indovinello.html",
    livello10: "11_parigi.html",
    livello11: "12_indovinello.html",
    livello12: "13_indirizzo.html",
    livello13: "14_allarme.html",
    livello14: "15_fuga.html",
    livello15: "16_prova.html"
  };
  return destinazioni[livello] || "index.html";
}

// Gestione del Timer di blocco a schermo e controllo indizi a tempo
function startTimer(livello) {
  const config = CONFIG_LIVELLI[livello];
  const timerDisplay = document.getElementById("timer-display");
  const errorEl = document.getElementById("error");
  const hintEl = document.getElementById("hint-display");
  const btn = document.querySelector('.send-btn');
  
  let pageLoadTime = localStorage.getItem(livello + "_pageLoadTime");
  if (!pageLoadTime) {
    pageLoadTime = Date.now();
    localStorage.setItem(livello + "_pageLoadTime", pageLoadTime);
  } else {
    pageLoadTime = parseInt(pageLoadTime);
  }

  const interval = setInterval(() => {
    const now = Date.now();
    
    // 1. Gestione Blocco per errori
    const blockUntil = parseInt(localStorage.getItem(livello + "_blockUntil") || "0");
    const remainingBlock = blockUntil - now;

    if (remainingBlock <= 0) {
      timerDisplay.textContent = "";
      if (!errorEl.dataset.alarmError) {
        errorEl.textContent = "";
      }
      if (btn) btn.disabled = false;
    } else {
      const seconds = Math.ceil(remainingBlock / 1000);
      timerDisplay.textContent = `Riprova tra ${seconds} secondi`;
      if (btn) btn.disabled = true;
    }

    // 2. Gestione Indizi basati sul tempo trascorso
    if (config.indizi && config.indizi.length > 0) {
      const elapsedTotal = now - pageLoadTime;
      let accumulatedTime = 0;
      let indiziDaMostrareTesto = [];

      for (let i = 0; i < config.indizi.length; i++) {
        accumulatedTime += config.indizi[i].tempoAttesaMs;
        if (elapsedTotal >= accumulatedTime) {
          indiziDaMostrareTesto.push(config.indizi[i].nome);
        } else {
          break; // Ci fermiamo al primo indizio non ancora sbloccato
        }
      }

      if (indiziDaMostrareTesto.length > 0 && hintEl) {
        // Mostra tutti gli indizi sbloccati finora separati da un'interruzione di riga
        hintEl.innerHTML = "💡 Indizi:<br>" + indiziDaMostrareTesto.join("<br>");
      }
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
    localStorage.removeItem(livello + "_blockUntil");
    localStorage.removeItem(livello + "_pageLoadTime");
    window.location.href = nextPage(livello);
  } else {
    // 2. Gestione Errore (conteggio errori conservato per statistiche o logica extra)
    let totalErrors = parseInt(localStorage.getItem(livello + "_totalErrorCount") || "0") + 1;
    localStorage.setItem(livello + "_totalErrorCount", totalErrors);

    // Gestione Blocco
    const blockUntil = Date.now() + config.tempoBloccoMs;
    localStorage.setItem(livello + "_blockUntil", blockUntil);

    errorEl.removeAttribute("data-alarm-error");
    errorEl.textContent = "!!! RISPOSTA ERRATA !!!";
    startTimer(livello);
  }
}

function getLivelloCorrente() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  
  const mapping = {
    "1_messaggio.html": "livello1",
    "2_indovinello.html": "livello2",
    "3_bottino.html": "livello3",
    "4_calcolo_enigmistico.html": "livello4",
    "5_indovinello.html": "livello5",
    "6_louvre.html": "livello6",
    "7_louvre.html": "livello7",
    "8_louvre.html": "livello8",
    "9_louvre.html": "livello9",
    "10_indovinello.html": "livello10",
    "11_parigi.html": "livello11",
    "12_indovinello.html": "livello12",
    "13_indirizzo.html": "livello13",
    "14_allarme.html": "livello14",
    "15_fuga.html": "livello15",
    "16_prova.html": "livello16"
  };
  return mapping[page] || null;
}

// Controllo universale all'avvio di qualsiasi pagina di livello
window.onload = () => {
  const livello = getLivelloCorrente();
  if (!livello) return; 

  // Inizializza il tempo di caricamento pagina se non esiste
  if (!localStorage.getItem(livello + "_pageLoadTime")) {
    localStorage.setItem(livello + "_pageLoadTime", Date.now());
  }

  startTimer(livello);
};  

function verificaAvvio() {
  const inputField = document.getElementById("codice-input");
  const errorEl = document.getElementById("error-message");
  const codice = inputField.value.trim().toLowerCase();

  if (codice === "allons-y") {
    window.location.href = "login.html";
  } else {
    errorEl.style.display = "block";
    inputField.value = ""; 

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

  if (tentativo.length !== 4) {
    errorEl.textContent = "ATTENZIONE: Devi inserire esattamente 4 cifre!";
    return;
  }

  if (tentativo === segreto) {
    localStorage.removeItem(livello + "_totalErrorCount");
    localStorage.removeItem(livello + "_blockUntil");
    localStorage.removeItem(livello + "_pageLoadTime");
    window.location.href = nextPage(livello);
  } else {
    let feedbackHTML = "";
    let segretoArr = segreto.split("");
    let tentativoArr = tentativo.split("");

    let risultati = ["rossa", "rossa", "rossa", "rossa"]; 

    for (let i = 0; i < 4; i++) {
      if (tentativoArr[i] === segretoArr[i]) {
        risultati[i] = "verde";
        segretoArr[i] = null; 
        tentativoArr[i] = null;
      }
    }

    for (let i = 0; i < 4; i++) {
      if (tentativoArr[i] !== null) {
        let index = segretoArr.indexOf(tentativoArr[i]);
        if (index !== -1) {
          risultati[i] = "gialla";
          segretoArr[index] = null; 
        }
      }
    }

    feedbackHTML = "<div style='display: flex; gap: 10px; margin-top: 10px; justify-content: center;'>";
    risultati.forEach((colore, idx) => {
      let bg = colore === "verde" ? "#28a745" : (colore === "gialla" ? "#ffc107" : "#dc3545");
      feedbackHTML += `<div style='width: 30px; height: 30px; background-color: ${bg}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;'>${tentativo[idx]}</div>`;
    });
    feedbackHTML += "</div>";

    errorEl.dataset.alarmError = "true";
    errorEl.innerHTML = "!!! SEQUENZA ERRATA !!!" + feedbackHTML;

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