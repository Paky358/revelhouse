/* =========================================================
   DATI — «Chi di Noi?», autore 1: Avventure e guai
   Posti: prigione, bosco, treno, villa, isola.
   {P} = nome di chi è sotto torchio. {o|a} = finale maschile|femminile secondo il suo avatar.
   ========================================================= */
window.SG_CHIDINOI = window.SG_CHIDINOI || { posti: [], comuni: [] };

/* ---------------------------------------------------------
   🔒 IN PRIGIONE
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "prigione", cod: "pri", nome: "In prigione", emoji: "🔒",
  adesivi: "🛏️🪑🚽🧻🥄🕯️🖼️🪴📺🐀🔑⛓️",
  entrata: [
    "Cella 17, vista cortile. Nuovo detenuto: {P}. Reato: ha finito il caffè.",
    "Condanna per {P}: resta dentro finché non rimette a posto il carrello.",
    "Silenzio in cella! È arrivat{o|a} {P}, e ha già chiesto a che ora si cena."
  ],
  immagini: [
    { id: "pri-i01", q: "Chi sarebbe il compagno di cella di {P}?", carte: [
      { chi: "detenuto", faccia: "furbo", piu: { mano: "microfono" }, t: "Canta l'opera alle tre di notte" },
      { chi: "nonno", faccia: "felice", piu: { mano: "libro" }, t: "Dentro da 40 anni, sa tutto" },
      { chi: "mago", faccia: "pensieroso", t: "Giura di poter sparire" },
      { chi: "contadino", faccia: "estasi", t: "Coltiva pomodori nel lavandino" }
    ] },
    { id: "pri-i02", q: "Chi è l'avvocato d'ufficio che tocca a {P}?", carte: [
      { chi: "avvocato", faccia: "sonno", t: "Si addormenta al «Buongiorno»" },
      { chi: "cugino", faccia: "finto", piu: { mano: "libro" }, t: "Il cugino, al primo esame di legge" },
      { chi: "zio", faccia: "furbo", t: "Lo zio: «Ho visto tutti i gialli»" },
      { chi: "avvocato", f: "d", faccia: "arrabbiato", t: "Litiga col giudice, e pure con te" }
    ] },
    { id: "pri-i03", q: "Chi è il secondino del braccio dove finisce {P}?", carte: [
      { chi: "secondino", faccia: "felice", piu: { mano: "tazza" }, t: "Ti porta il caffè e ti dice i guai" },
      { chi: "secondino", faccia: "arrabbiato", t: "Fischia anche quando russi" },
      { chi: "secondino", f: "d", faccia: "innamorato", piu: { mano: "libro" }, t: "Legge poesie in corridoio" },
      { chi: "secondino", faccia: "furbo", piu: { mano: "telefono" }, t: "Ha fatto il gruppo del braccio B" }
    ] },
    { id: "pri-i04", q: "Chi viene a trovare {P} all'ora dei colloqui?", carte: [
      { chi: "mamma", faccia: "arrabbiato", t: "La mamma: «Te l'avevo detto»" },
      { chi: "nonna", faccia: "furbo", t: "La nonna, col dolce «farcito»" },
      { chi: "cugino", faccia: "indifferente", t: "Il cugino: vuole la tua camera" },
      { chi: "zia", faccia: "sorpreso", t: "La zia: «Ma ti danno da mangiare?»" }
    ] },
    { id: "pri-i05", q: "Chi è il direttore del carcere dove finisce {P}?", carte: [
      { chi: "capo", faccia: "felice", piu: { mano: "tazza" }, t: "Riunione del lunedì coi detenuti" },
      { chi: "prof", faccia: "pensieroso", t: "Interroga i detenuti a sorpresa" },
      { chi: "re", faccia: "indifferente", t: "Si fa chiamare «Sua Eccellenza»" },
      { chi: "cuoco", faccia: "estasi", t: "Pensa solo al menù della domenica" }
    ] },
    { id: "pri-i06", q: "Chi fa compagnia a {P} durante l'ora d'aria?", carte: [
      { chi: "detenuto", faccia: "pensieroso", piu: { occhiali: "tondi" }, t: "Il filosofo: parla solo di stelle" },
      { chi: "detenuto", faccia: "esulta", t: "Ti fa contare le sue flessioni" },
      { chi: "nonno", faccia: "furbo", piu: { cappello: "coppola" }, t: "Evaso nel '72, tornato per cena" },
      { chi: "clown", faccia: "felice", t: "Fa il giocoliere con le arance" }
    ] },
    { id: "pri-i07", q: "Chi è il testimone che fa finire dentro {P}?", carte: [
      { chi: "vicino", faccia: "arrabbiato", t: "Il vicino di sotto: sente tutto" },
      { chi: "nonna", faccia: "pensieroso", piu: { occhiali: "grandi" }, t: "La signora alla finestra dal 1987" },
      { chi: "bimbo", faccia: "furbo", piu: { mano: "lecca" }, t: "Il bambino che ha filmato tutto" },
      { chi: "vigile", faccia: "indifferente", t: "Il vigile che ti multa da 10 anni" }
    ] },
    { id: "pri-i08", q: "Chi sceglie {P} come compagno per l'evasione?", carte: [
      { chi: "mago", faccia: "furbo", t: "Sparire? Il trucco è quasi pronto" },
      { chi: "scout", faccia: "esulta", t: "Ha lo zaino pronto da sei mesi" },
      { chi: "nonno", faccia: "pensieroso", t: "Il nonno: conosce ogni tombino" },
      { chi: "influencer", faccia: "estasi", t: "Vuole fare la diretta della fuga" }
    ] },
    { id: "pri-i09", q: "Chi è il bibliotecario del carcere che consiglia i libri a {P}?", carte: [
      { chi: "prof", faccia: "furbo", piu: { mano: "libro" }, t: "Solo libri sulle evasioni famose" },
      { chi: "nonno", faccia: "felice", t: "Te li legge ad alta voce. Tutti" },
      { chi: "mago", faccia: "pensieroso", t: "Libri di trucchi: «per hobby»" },
      { chi: "detenuto", faccia: "linguaccia", piu: { occhiali: "tondi" }, t: "Ti racconta subito il finale" }
    ] },
    { id: "pri-i10", q: "Chi è il giudice del processo di {P}?", carte: [
      { chi: "giudice", faccia: "sonno", t: "Dorme durante tutta la difesa" },
      { chi: "giudice", f: "d", faccia: "arrabbiato", t: "Dieci anni per un parcheggio" },
      { chi: "giudice", faccia: "felice", piu: { mano: "pallone" }, t: "Ha fretta: alle 8 c'è la partita" },
      { chi: "giudice", faccia: "estasi", piu: { mano: "microfono" }, t: "Legge la sentenza cantando" }
    ] },
    { id: "pri-i11", q: "In mensa servono il minestrone per la quarta sera di fila. Cosa fa {P}?", carte: [
      { e: "🍲😋", t: "Lo mangia e chiede pure il bis" },
      { e: "📝✊", t: "Raccolta firme anti-minestrone" },
      { e: "🍮🔁", t: "Lo scambia con un budino" },
      { e: "🥖", t: "Vive di pane fino a domenica" }
    ] },
    { id: "pri-i12", q: "In cella c'è una tv sola, due canali e un telecomando. Come lo gestisce {P}?", carte: [
      { e: "📺👑", t: "Decide sempre cosa si guarda" },
      { e: "🤝📺", t: "Diventa amico di chi ce l'ha" },
      { e: "📖😤", t: "Legge e si lamenta del volume" },
      { e: "📅📺", t: "Fa i turni, scritti sul muro" }
    ] },
    { id: "pri-i13", q: "In cortile serve un soprannome da duro. Come si fa chiamare {P}?", carte: [
      { e: "🦈", t: "«Lo Squalo» (non sa nuotare)" },
      { e: "🎓", t: "«Il Prof» (corregge i muri)" },
      { e: "🥄", t: "«Er Cucchiaino»" },
      { e: "🙋", t: "Nome e cognome, gentilmente" }
    ] },
    { id: "pri-i14", q: "Una notte {P} trova un buco nel muro della cella. Cosa fa?", carte: [
      { e: "🪥🤫", t: "Lo tappa col dentifricio e tace" },
      { e: "🕳️😩", t: "Ci si infila e si incastra a metà" },
      { e: "🗣️🌙", t: "Parla col vicino fino all'alba" },
      { e: "🩴💨", t: "Scappa subito, in ciabatte" }
    ] },
    { id: "pri-i15", q: "{P} deve passare trenta giorni in isolamento. Come li passa?", carte: [
      { e: "🧱💬", t: "Parla col muro e lo chiama Franco" },
      { e: "💪", t: "Mille flessioni al giorno" },
      { e: "😴", t: "Dorme: finalmente un po' di pace" },
      { e: "🔢", t: "Conta le mattonelle. E riconta." }
    ] },
    { id: "pri-i16", q: "Nella cella di {P} c'è un letto a castello. Come si decide chi sta sopra?", carte: [
      { e: "🏃🛏️", t: "Sale sopra prima di salutare" },
      { e: "🙂😒", t: "Lascia scegliere, poi si lamenta" },
      { e: "💪🤝", t: "Braccio di ferro, al meglio di 5" },
      { e: "🪙🔁", t: "Testa o croce. Se perde, rilancia" }
    ] },
    { id: "pri-i17", q: "C'è la recita di Natale del carcere. Che parte fa {P}?", carte: [
      { e: "🌟🎭", t: "Vuole il ruolo principale" },
      { e: "🎬📝", t: "Fa il regista e riscrive tutto" },
      { e: "🎄", t: "Fa l'albero, senza dire una parola" },
      { e: "🤒", t: "Mal di pancia, il giorno prima" }
    ] },
    { id: "pri-i18", q: "Il detenuto nuovo si siede al posto di {P} in mensa. Cosa succede?", carte: [
      { e: "📜🗣️", t: "Gli spiega le regole per mezz'ora" },
      { e: "👀", t: "Lo fissa finché non si sposta" },
      { e: "🥺", t: "Cambia tavolo e ci rimane male" },
      { e: "🍮😈", t: "Gli ruba il budino per vendetta" }
    ] },
    { id: "pri-i19", q: "{P} riesce a evadere! Dopo tre ore l{o|a} ritrovano. Dove?", carte: [
      { e: "👵🍝", t: "A tavola dalla mamma" },
      { e: "🍕🧾", t: "In pizzeria, col conto da pagare" },
      { e: "🚗🔄", t: "Gira a vuoto nel parcheggio" },
      { e: "🚪🛏️", t: "Al cancello: rivuole il cuscino" }
    ] },
    { id: "pri-i20", q: "«Chi fa il nome del ladro di merendine esce un mese prima». {P} lo sa. Cosa fa?", carte: [
      { e: "🗣️📅", t: "Parla subito: un mese è un mese" },
      { e: "🤐", t: "Muto: mai fare la spia" },
      { e: "🤝✌️", t: "Tratta: «Facciamo due mesi»" },
      { e: "🍫➗", t: "Si fa dare metà merendine" }
    ] },
    { id: "pri-i21", q: "In prigione i soldi non contano. Con cosa paga i favori {P}?", carte: [
      { e: "🍫", t: "Cioccolato, a quadretti" },
      { e: "🧻✨", t: "Carta igienica morbida: rarissima" },
      { e: "✂️💇", t: "Tagli di capelli (senza specchio)" },
      { e: "🗣️👂", t: "Pettegolezzi freschi del braccio B" }
    ] },
    { id: "pri-i22", q: "Cosa nasconde {P} sotto il materasso della cella?", carte: [
      { e: "📸🐱", t: "Le foto del gatto, plastificate" },
      { e: "🗺️✏️", t: "La mappa della fuga (sbagliata)" },
      { e: "🧀", t: "Un pezzo di parmigiano stagionato" },
      { e: "📒🎤", t: "Le canzoni scritte per Sanremo" }
    ] },
    { id: "pri-i23", q: "Il secondino si addormenta con le chiavi in mano, davanti alla cella di {P}. Cosa fa {P}?", carte: [
      { e: "🔑🤫", t: "Prende le chiavi in punta di piedi" },
      { e: "👆😴", t: "Lo sveglia: «Guardi che dorme»" },
      { e: "🛌💤", t: "Gli mette sopra una coperta" },
      { e: "📸😂", t: "Foto, e la gira a tutto il carcere" }
    ] },
    { id: "pri-i24", q: "Sparisce il cappello del direttore. Tutti guardano {P}. Cosa fa?", carte: [
      { e: "😰🙋", t: "Confessa: non regge gli sguardi" },
      { e: "👉", t: "Accusa il compagno di cella" },
      { e: "🎩😇", t: "Ce l'ha in testa in quel momento" },
      { e: "🔍", t: "Apre un'indagine tutta sua" }
    ] },
    { id: "pri-i25", q: "Libertà subito, ma prima {P} deve cucinare per tutto il carcere: 300 persone. Cosa fa?", carte: [
      { e: "🍝🔥", t: "Pasta al forno per trecento" },
      { e: "🚪💨", t: "Accetta e scappa dalla cucina" },
      { e: "🙅", t: "Rifiuta: meglio un anno dentro" },
      { e: "👵📞", t: "Chiama la mamma per la ricetta" }
    ] },
    { id: "pri-i26", q: "Che faccia fa {P} quando il secondino annuncia: «Da oggi in mensa solo cavolfiore bollito»?", carte: [
      { lui: "disgusto", t: "Già pensa allo sciopero" },
      { lui: "arrabbiato", t: "Scrive al ministro, a mano" },
      { lui: "indifferente", t: "Tanto mangia di nascosto" },
      { lui: "furbo", t: "Ha un piano: lo rivende agli altri" }
    ] },
    { id: "pri-i27", q: "Che faccia fa {P} nella foto segnaletica?", carte: [
      { lui: "felice", t: "«Si vede il profilo buono?»" },
      { lui: "furbo", t: "Ghigno da film di gangster" },
      { lui: "terrore", t: "Peggio della foto della patente" },
      { lui: "linguaccia", t: "La rifanno tre volte" }
    ] },
    { id: "pri-i28", q: "Che faccia fa {P} quando il giudice aggiunge: «…e niente telefono per tutta la pena»?", carte: [
      { lui: "terrore", t: "Chiede di trattare la pena" },
      { lui: "triste", t: "Saluta il telefono come un amico" },
      { lui: "indifferente", t: "Tanto aveva la batteria scarica" },
      { lui: "furbo", t: "Ne ha già nascosto un altro" }
    ] },
    { id: "pri-i29", q: "Che faccia fa {P} quando la nonna porta al colloquio sei paia di calzettoni di lana fatti a mano?", carte: [
      { lui: "innamorato", t: "Li mette tutti e sei insieme" },
      { lui: "finto", t: "«Bellissimi!» (pungono)" },
      { lui: "felice", t: "Li baratta: un budino al paio" },
      { lui: "imbarazzo", t: "L'ha visto tutto il braccio B" }
    ] },
    { id: "pri-i30", q: "Che faccia fa {P} quando il giudice dice «cento anni di lavori domestici»?", carte: [
      { lui: "terrore", t: "Chiede di parlare con la mamma" },
      { lui: "furbo", t: "Ha già un piano: la lavastoviglie" },
      { lui: "indifferente", t: "Tanto a casa non li fa lo stesso" },
      { lui: "esulta", piu: { cappello: "chef" }, t: "Finalmente un lavoro fisso" }
    ] }
  ],
  scrivi: [
    { id: "pri-s01", q: "{P} fa l'unica telefonata dalla prigione. Cosa dice?",
      riserve: ["Mamma, non dire niente alla nonna", "Una margherita alla cella 17", "Pronto, pizzeria? Consegnate in cella?"] },
    { id: "pri-s02", q: "Sul muro della cella, {P} incide: «Qui è passat{o|a} {P}, e ___»",
      riserve: ["ha lasciato i piatti sporchi", "ha finito la carta igienica del braccio", "tornerà per la pizza del venerdì"], voto: "lui" },
    { id: "pri-s03", q: "Sul verbale c'è il reato di {P}: «Il soggetto ___»",
      riserve: ["ha spoilerato il finale a tutto il bus", "ha preso l'ultimo cornetto alla crema", "ha suonato tutti i citofoni del palazzo"] },
    { id: "pri-s04", q: "Al colloquio {P} sussurra alla mamma: «La prossima volta portami ___»",
      riserve: ["la parmigiana dentro un libro vuoto", "il gatto, travestito da sciarpa", "il cuscino col mio nome ricamato"] },
    { id: "pri-s05", q: "La lettera di {P} al direttore del carcere comincia così: «Gentile direttore, ___»",
      riserve: ["il materasso ha la forma dell'Italia", "il minestrone mi guarda", "vorrei una cella con vista mare"] },
    { id: "pri-s06", q: "{P} esce dopo dieci anni di cella. Qual è la prima cosa che dice fuori?",
      riserve: ["Chi si è preso il mio posto sul divano?", "Qualcuno ha dato da mangiare al pesce?", "Il telefono si ricorda il PIN?"] },
    { id: "pri-s07", q: "Il secondino scrive la pagella di {P}: «Condotta ottima, ma ___»",
      riserve: ["canta sotto la doccia alle 5", "ha arredato il corridoio", "chiama tutti «tesoro», anche me"] },
    { id: "pri-s08", q: "Il cartello appeso fuori dalla cella di {P} dice: «___»",
      riserve: ["Non disturbare: sto evadendo", "Bussare tre volte e portare dolci", "Attenzione: se ha fame, morde"] },
    { id: "pri-s09", q: "Al processo {P} si difende: «Signor giudice, io ero lì solo perché ___»",
      riserve: ["mi avevano detto che c'era il buffet", "seguivo un gatto molto sospetto", "pensavo fosse la fila per il gelato"] },
    { id: "pri-s10", q: "{P} scrive il piano di fuga su un tovagliolo. Il punto 1 è: «___»",
      riserve: ["Fare merenda", "Trovare un cucchiaino più grande", "Chiedere al secondino dov'è l'uscita"] },
    { id: "pri-s11", q: "Dopo l'evasione, {P} manda una cartolina al carcere. Cosa c'è scritto?",
      riserve: ["Qui si mangia meglio, ma mi mancate", "Tenetemi il posto, torno a Natale", "Restituisco il cucchiaino, scusate"] },
    { id: "pri-s12", q: "Il libro che {P} scrive in cella si intitola: «___»",
      riserve: ["Cento giorni senza parmigiano", "Il minestrone: una storia vera", "Evadere per principianti, volume 3"] },
    { id: "pri-s13", q: "Per non far preoccupare la nonna, {P} le racconta una bugia. Quale?",
      riserve: ["Nonna, è un hotel col cancello", "Sto girando un film, questa è la scena", "Faccio un corso: si chiama ora d'aria"] },
    { id: "pri-s14", q: "La canzone che {P} canta ogni sera dietro le sbarre si chiama «___»",
      riserve: ["Minestrone, amore mio", "Cucchiaino, scava con me", "Libero (venerdì alle dieci)"] },
    { id: "pri-s15", q: "{P} vince il premio «Detenut{o|a} del mese». Sulla targa c'è scritto il motivo: ___",
      riserve: ["ha imparato il nome di ogni topo", "ha rifatto il letto anche al secondino", "non scava tunnel da martedì"] },
    { id: "pri-s16", q: "Il secondino trova un biglietto nascosto nella branda di {P}. Cosa c'è scritto?",
      riserve: ["Se lo trovi, la merendina è mia", "Lista della spesa: lima, torta, corda", "Caro diario, oggi il topo mi ha sorriso"] },
    { id: "pri-s17", q: "Il giudice concede a {P} una sola cosa da tenere in cella. Cosa chiede?",
      riserve: ["Una vasca idromassaggio, piccolina", "Il gatto, almeno nel weekend", "La mamma, ma solo per stirare"] },
    { id: "pri-s18", q: "Il secondino chiede a {P} perché ride da sol{o|a} alle 3 di notte. Cosa risponde?",
      riserve: ["Ho sognato il minestrone che scappava", "Pensavo alla faccia del giudice", "Il topo mi ha detto una barzelletta"] }
  ],
  disegna: [
    { id: "pri-d01", q: "Disegna come sarebbe la cella di {P} dopo un anno", su: "scena", adesivi: "🎮🧸🛋️" },
    { id: "pri-d02", q: "Disegna su {P} il travestimento con cui prova a evadere", su: "ritratto", adesivi: "🥸👵🧹" },
    { id: "pri-d03", q: "Disegna su {P} i tatuaggi da duro… ma tutti di cuoricini e gattini", su: "ritratto", adesivi: "❤️🐱🌈🦄" },
    { id: "pri-d04", q: "Disegna su {P} barba e capelli dopo trent'anni di cella", su: "ritratto", adesivi: "🐦🪺✂️" },
    { id: "pri-d05", q: "Disegna su {P} la divisa del secondino: cappello, fischietto e baffoni", su: "ritratto", adesivi: "🔑📋☕" },
    { id: "pri-d06", q: "Disegna su {P} l'aria innocente per il giudice: aureola e occhioni dolci", su: "ritratto", adesivi: "😇✨🌸" },
    { id: "pri-d07", q: "Disegna su {P} il ladro di merendine: mascherina, sacco e bottino", su: "ritratto", adesivi: "🍫🍩🥐🎒" },
    { id: "pri-d08", q: "Disegna la cella di {P} addobbata per Natale", su: "scena", adesivi: "🎄🎁⭐🧦" },
    { id: "pri-d09", q: "Disegna la cella di {P} il giorno della visita della nonna", su: "scena", adesivi: "🧹💐🍰🧽" },
    { id: "pri-d10", q: "Disegna l'ufficio di {P} il giorno che diventa direttore del carcere", su: "scena", adesivi: "👑🛋️🍰🏆" },
    { id: "pri-d11", q: "Disegna la torta che la nonna porta a {P}, con dentro tutto per evadere", su: "scena", adesivi: "🎂🪚🪢🗺️" },
    { id: "pri-d12", q: "Disegna il topo della cella che {P} ha addestrato", su: "scena", adesivi: "🧀🎩🎪🏆" }
  ],
  chi: [
    { id: "pri-c01", q: "Chi di noi scaverebbe un tunnel col cucchiaino per due anni… e sbucherebbe nell'ufficio del direttore?", titolo: "Talpa sfortunata" },
    { id: "pri-c02", q: "Chi di noi, in prigione, metterebbe in piedi un mercato nero di bustine di maionese?", titolo: "Mercato nero di maionese" },
    { id: "pri-c03", q: "Chi di noi passerebbe tutta l'ora del colloquio a lamentarsi del cuscino della cella?", titolo: "Recensione: una stella" },
    { id: "pri-c04", q: "Chi di noi finirebbe a giocare a carte col secondino in guardiola, tutte le sere?", titolo: "Briscola col secondino" },
    { id: "pri-c05", q: "Chi di noi racconterebbe a tutti di essere dentro «per un grosso colpo»… ma era una multa non pagata?", titolo: "Boss delle multe" },
    { id: "pri-c06", q: "Chi di noi trasformerebbe la cella in un monolocale da rivista, con le tendine e la piantina?", titolo: "Cella da rivista" },
    { id: "pri-c07", q: "Chi di noi preparerebbe per mesi l'evasione perfetta e poi la rimanderebbe perché quella sera c'è la partita?", titolo: "Evasione rimandata" },
    { id: "pri-c08", q: "Chi di noi, in prigione, si iscriverebbe a tutti i corsi: ceramica, uncinetto, teatro e yoga?", titolo: "Collezionista di corsi" },
    { id: "pri-c09", q: "Chi di noi scriverebbe le lettere d'amore per tutti i detenuti del braccio, gratis?", titolo: "Lettere d'amore gratis" },
    { id: "pri-c10", q: "Chi di noi farebbe una carbonara pazzesca col fornelletto della cella e la dividerebbe con tutto il corridoio?", titolo: "Carbonara da galera" },
    { id: "pri-c11", q: "Chi di noi uscirebbe in anticipo perché i secondini non ne possono più?", titolo: "Libertà per sfinimento" },
    { id: "pri-c12", q: "Chi di noi, il giorno della scarcerazione, chiederebbe di restare fino a venerdì perché c'è la pizza?", titolo: "Fine pena: dopo la pizza" },
    { id: "pri-c13", q: "Chi di noi, alla perquisizione, verrebbe trovato con dodici merendine nascoste nei calzini?", titolo: "Calzino farcito" },
    { id: "pri-c14", q: "Chi di noi farebbe di tutto per finire dentro, «solo per vedere com'è»?", titolo: "Dentro per curiosità" }
  ]
});

/* ---------------------------------------------------------
   ⛺ NEL BOSCO
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "bosco", cod: "bos", nome: "Nel bosco", emoji: "⛺",
  adesivi: "⛺🔥🪵🌲🐻🦝🍄🎒🔦🦟🌭🛶",
  entrata: [
    "Nel bosco: niente segnale, tantissime zanzare. Sotto torchio c'è {P}.",
    "La tenda è montata (più o meno). Stanotte, nel bosco, tocca a {P}.",
    "Fuoco acceso, salsicce in arrivo, tenda storta. Stasera tocca a {P}."
  ],
  immagini: [
    { id: "bos-i01", q: "Chi è la guida che accompagna {P} nel bosco?", carte: [
      { chi: "scout", faccia: "esulta", t: "Canta canzoni scout per sei ore" },
      { chi: "nonno", faccia: "furbo", t: "Dice «manca poco» da tre ore" },
      { chi: "influencer", faccia: "finto", t: "Ogni 10 metri si ferma: video" },
      { chi: "contadino", faccia: "indifferente", t: "Parla solo con le mucche" }
    ] },
    { id: "bos-i02", q: "Chi pianta la tenda accanto a quella di {P}?", carte: [
      { chi: "vicino", faccia: "felice", t: "Arriva in pantofole, con la tv" },
      { chi: "bimbo", faccia: "furbo", t: "Gioca a nascondino nella tua tenda" },
      { chi: "zia", faccia: "estasi", t: "Ha portato frigo e tovaglia" },
      { chi: "dj", faccia: "esulta", t: "Ha portato la cassa e le luci" }
    ] },
    { id: "bos-i03", q: "{P} si perde nel bosco. Chi l{o|a} ritrova?", carte: [
      { chi: "scout", faccia: "indifferente", t: "Uno scout di 8 anni: «Era di là»" },
      { chi: "contadino", faccia: "sorpreso", t: "Un contadino: eri a 50 metri" },
      { chi: "nonna", faccia: "arrabbiato", t: "La nonna dei funghi, che sgrida" },
      { chi: "cuoco", faccia: "felice", t: "Il cuoco: «Seguivi il sugo, no?»" }
    ] },
    { id: "bos-i04", q: "Chi è l'esperto di sopravvivenza che {P} segue alla cieca?", carte: [
      { chi: "cowboy", faccia: "furbo", t: "Accende il fuoco con lo sguardo" },
      { chi: "prof", faccia: "pensieroso", piu: { mano: "libro" }, t: "Ha letto tutto, mai fatto niente" },
      { chi: "vichingo", faccia: "esulta", t: "Dorme senza tenda, per principio" },
      { chi: "cugino", faccia: "finto", piu: { mano: "telefono" }, t: "Il cugino: guarda i tutorial ora" }
    ] },
    { id: "bos-i05", q: "Alla fontanella del campeggio, la mattina presto, chi trova {P}?", carte: [
      { chi: "nonno", faccia: "felice", t: "Si fa la barba cantando l'opera" },
      { chi: "mamma", faccia: "arrabbiato", t: "Lava i piatti di quattro tende" },
      { chi: "influencer", faccia: "finto", t: "Si trucca per la diretta delle 7" },
      { chi: "bimbo", faccia: "linguaccia", t: "Ti schizza: è il suo lavoro" }
    ] },
    { id: "bos-i06", q: "Chi controlla lo zaino di {P} prima della partenza?", carte: [
      { chi: "mamma", faccia: "arrabbiato", t: "Aggiunge tre maglioni di riserva" },
      { chi: "allenatore", faccia: "indifferente", t: "Lo pesa: «Troppo. Togli»" },
      { chi: "scout", faccia: "furbo", t: "Ti fa rifare tutti i nodi" },
      { chi: "papa", faccia: "felice", t: "Ci infila di nascosto un salame" }
    ] },
    { id: "bos-i07", q: "Nel bosco {P} incontra un eremita che vive lì da vent'anni. Chi è?", carte: [
      { chi: "nonno", faccia: "pensieroso", t: "Sa tutto, non dice niente" },
      { chi: "impiegato", faccia: "finto", t: "Ex impiegato: manda mail ai pini" },
      { chi: "mago", faccia: "furbo", t: "Dice di parlare con gli alberi" },
      { chi: "contadino", faccia: "felice", t: "Ha 14 galline, tutte col nome" }
    ] },
    { id: "bos-i08", q: "Chi è il guardaparco che sorprende {P} col fuoco acceso dove è vietato?", carte: [
      { chi: "vigile", faccia: "arrabbiato", t: "Multa anche gli scoiattoli" },
      { chi: "poliziotto", faccia: "sonno", t: "Si siede e chiede una salsiccia" },
      { chi: "prof", faccia: "pensieroso", t: "Lezione sugli incendi: un'ora" },
      { chi: "arbitro", faccia: "furbo", t: "Fischia e tira fuori il giallo" }
    ] },
    { id: "bos-i09", q: "Con chi divide la tenda {P}?", carte: [
      { chi: "bimbo", faccia: "linguaccia", t: "Il cuginetto: scalcia nel sonno" },
      { chi: "nonno", faccia: "sonno", t: "Russa come una motosega" },
      { chi: "influencer", faccia: "felice", t: "Tiene la luce per i video accesa" },
      { chi: "cugino", faccia: "furbo", t: "Mangia cracker nel sacco a pelo" }
    ] },
    { id: "bos-i10", q: "Nel bosco il bagno non c'è. Cosa fa {P}?", carte: [
      { e: "⏳🏠", t: "Si tiene tutto fino a casa" },
      { e: "🚶🗺️", t: "Cammina un km per il posto giusto" },
      { e: "🌲😌", t: "Primo albero, zero problemi" },
      { e: "👀🙏", t: "Vuole qualcuno di guardia" }
    ] },
    { id: "bos-i11", q: "Alle due di notte una zanzara ronza nella tenda di {P}. Cosa fa?", carte: [
      { e: "🔦🦟", t: "Le dà la caccia per un'ora" },
      { e: "🛌🙈", t: "Nel sacco a pelo, testa compresa" },
      { e: "😌", t: "La lascia: tanto punge gli altri" },
      { e: "📣😩", t: "Sveglia tutti: servono rinforzi" }
    ] },
    { id: "bos-i12", q: "Il gruppo si è perso nel bosco. Cosa fa {P}?", carte: [
      { e: "👉😎", t: "«Di qua, fidatevi»" },
      { e: "🌳🔍", t: "Cerca il muschio sugli alberi" },
      { e: "🪨⏳", t: "Si siede e aspetta i soccorsi" },
      { e: "🥪🔢", t: "Conta quanti panini restano" }
    ] },
    { id: "bos-i13", q: "Tocca a {P} accendere il fuoco. Com'è andata?", carte: [
      { e: "⏰🔥", t: "Due ore, ma non accetta aiuto" },
      { e: "🔥😎", t: "Subito, e se ne vanta tutta sera" },
      { e: "🔥🤫", t: "Usa l'accendino di nascosto" },
      { e: "📰💨", t: "Brucia tutto il giornale, e niente" }
    ] },
    { id: "bos-i14", q: "Durante il temporale la tenda di {P} si allaga. Cosa fa?", carte: [
      { e: "🚗💤", t: "Va a dormire in macchina" },
      { e: "⛺➡️", t: "Si infila nella tenda di un altro" },
      { e: "💧😴", t: "Dorme lo stesso, nella pozzanghera" },
      { e: "🖐️🌊", t: "Scava un canale con le mani" }
    ] },
    { id: "bos-i15", q: "{P} trova un cagnolino che si è perso nel bosco. Cosa fa?", carte: [
      { e: "🐶🏠", t: "Se lo porta a casa e basta" },
      { e: "🔍🐶", t: "Gira tutto il bosco per il padrone" },
      { e: "🌭🐶", t: "Gli dà tutta la sua cena" },
      { e: "📸📱", t: "Trenta foto, mandate a tutti" }
    ] },
    { id: "bos-i16", q: "In campeggio c'è solo la doccia fredda. Cosa fa {P}?", carte: [
      { e: "🚿😱", t: "La fa urlando" },
      { e: "🙅🧼", t: "Non si lava per tre giorni" },
      { e: "🍝💧", t: "Scalda l'acqua nella pentola" },
      { e: "🏞️", t: "Va a lavarsi nel lago" }
    ] },
    { id: "bos-i17", q: "Un ragno grande come una mano entra nella tenda di {P}. Cosa fa?", carte: [
      { e: "🏃🌙", t: "Scappa e dorme fuori" },
      { e: "🥛🕷️", t: "Col bicchiere, e lo libera fuori" },
      { e: "🕷️💬", t: "Lo chiama Gino e se lo tiene" },
      { e: "📣", t: "Urla finché non arriva qualcuno" }
    ] },
    { id: "bos-i18", q: "Il menù del campeggio lo decide {P}. Cosa si mangia?", carte: [
      { e: "🌭🔥", t: "Salsicce alla brace per tutti" },
      { e: "🥫🔥", t: "Scatolette scaldate sul fuoco" },
      { e: "🍝⏱️", t: "Pasta al fornelletto, al dente" },
      { e: "🍄🫐", t: "Quello che troviamo nel bosco" }
    ] },
    { id: "bos-i19", q: "{P} va a pescare la cena nel lago. Cosa porta all'accampamento?", carte: [
      { e: "🌿🍽️", t: "Un'alga: «È l'antipasto»" },
      { e: "🐟🔙", t: "Niente: l'ha ributtato, poverino" },
      { e: "🎣😴", t: "Dorme con la canna in mano" },
      { e: "🏪🐟", t: "Pesce surgelato, preso in paese" }
    ] },
    { id: "bos-i20", q: "Tocca a {P} il primo turno di guardia notturna. Com'è andata?", carte: [
      { e: "😴", t: "Dorme dopo cinque minuti" },
      { e: "🚨", t: "Sveglia tutti a ogni rumore" },
      { e: "🌅😎", t: "Fino all'alba, poi se ne vanta" },
      { e: "🤝💤", t: "Passa il turno al primo sveglio" }
    ] },
    { id: "bos-i21", q: "Si rompe la cerniera della tenda di {P}. Come la chiude per la notte?", carte: [
      { e: "🧷🧷", t: "Venti spille da balia" },
      { e: "🩹🌀", t: "Nastro adesivo: tutto il rotolo" },
      { e: "🧦🧦", t: "Ci appende i calzini, a tendina" },
      { e: "😴🌙", t: "Non la chiude: «Si sta freschi»" }
    ] },
    { id: "bos-i22", q: "Il sentiero passa su un ponte di corda che dondola. Come lo attraversa {P}?", carte: [
      { e: "🤸", t: "Saltellando, per spaventare tutti" },
      { e: "🙈", t: "A occhi chiusi, in fondo alla fila" },
      { e: "🔄⏱️", t: "Non lo passa: giro lungo, due ore" },
      { e: "🐒", t: "Gattonando, abbracciando le corde" }
    ] },
    { id: "bos-i23", q: "{P} va a cercare legna e torna dopo tre ore. Cos'è successo?", carte: [
      { e: "🗺️❓", t: "Giro lungo: «Era una scorciatoia»" },
      { e: "☕🏘️", t: "Ha trovato un bar in paese" },
      { e: "😴🌳", t: "Pisolino sotto un albero" },
      { e: "🏕️🤝", t: "Ha fatto amicizia con gli scout" }
    ] },
    { id: "bos-i24", q: "Cosa infila {P} nello zaino del campeggio, che non userà mai?", carte: [
      { e: "📚", t: "I libri, «per studiare un po'»" },
      { e: "🎤🎶", t: "Il microfono del karaoke" },
      { e: "🧴🧴🧴", t: "Sei creme diverse, tutte urgenti" },
      { e: "🎮", t: "La console, con tre caricatori" }
    ] },
    { id: "bos-i25", q: "Che faccia fa {P} quando apre lo zaino e scopre che i panini sono rimasti a casa?", carte: [
      { lui: "arrabbiato", t: "Cerca un colpevole nel gruppo" },
      { lui: "triste", t: "Guarda le foto dei panini" },
      { lui: "furbo", t: "Ha le merendine nelle tasche" },
      { lui: "indifferente", t: "Mangia bacche, come niente" }
    ] },
    { id: "bos-i26", q: "Che faccia fa {P} quando si sveglia in tenda con una rana seduta sul petto?", carte: [
      { lui: "terrore", t: "Urla: si sveglia tutto il bosco" },
      { lui: "felice", t: "Le ha già dato un nome" },
      { lui: "sonno", t: "La sposta e si rigira" },
      { lui: "disgusto", t: "Doccia di un'ora (fredda)" }
    ] },
    { id: "bos-i27", q: "Che faccia fa {P} quando qualcuno propone: «Domani camminata di sei ore, tutta in salita»?", carte: [
      { lui: "esulta", piu: { schiena: "zaino" }, t: "Ha già lo zaino in spalla" },
      { lui: "terrore", t: "Già cerca un passaggio in auto" },
      { lui: "finto", t: "«Che bello!» (ha prenotato la spa)" },
      { lui: "sonno", t: "Si sveglia per il pranzo" }
    ] },
    { id: "bos-i28", q: "Che faccia fa {P} quando assaggia la pasta che un amico ha cotto sul fuoco per un'ora?", carte: [
      { lui: "disgusto", t: "La dà di nascosto al cane" },
      { lui: "finto", t: "«Buonissima!» e la nasconde" },
      { lui: "estasi", t: "Chiede il bis (ha fame)" },
      { lui: "pensieroso", t: "Cerca di capire cos'è" }
    ] },
    { id: "bos-i29", q: "Che faccia fa {P} quando sente la cerniera della tenda aprirsi piano piano, alle tre di notte?", carte: [
      { lui: "terrore", t: "Fa finta di essere un sacco a pelo" },
      { lui: "furbo", t: "Sa chi è: il ladro di patatine" },
      { lui: "sonno", t: "Non si sveglia neanche adesso" },
      { lui: "sorpreso", t: "Esce con la torcia: è una mucca" }
    ] }
  ],
  scrivi: [
    { id: "bos-s01", q: "Sul cartello piantato davanti alla tenda di {P} c'è scritto: «___»",
      riserve: ["Vietato l'ingresso a orsi e cugini", "Qui si russa: entrate a vostro rischio", "Wi-Fi: no. Patatine: forse"] },
    { id: "bos-s02", q: "{P} fa da guida ai turisti nel bosco. Indica un albero e spiega: «___»",
      riserve: ["Questo è un pino. O un abete. Un albero", "Qui ho perso la strada. Tre volte", "Non toccate: è il bagno di emergenza"] },
    { id: "bos-s03", q: "{P} racconta una storia di paura attorno al fuoco. Comincia così: «___»",
      riserve: ["Era una notte buia, e senza Wi-Fi", "Un campeggiatore aprì il frigo: vuoto", "La zanzara tornò. Con le amiche"] },
    { id: "bos-s04", q: "Un procione svuota lo zaino di {P} ogni notte. {P} gli lascia un biglietto: «___»",
      riserve: ["Almeno richiudi la zip", "I biscotti al cioccolato sono miei", "Facciamo a metà, ma la mia è più grande"] },
    { id: "bos-s05", q: "Il diario di {P}, terzo giorno nel bosco: «___»",
      riserve: ["Il cervo di ieri era un cespuglio", "Ho parlato due ore con un fungo", "Sogno il bidet di casa"] },
    { id: "bos-s06", q: "Le formiche del bosco hanno un soprannome per {P}. Qual è?",
      riserve: ["La Briciola Volante", "Il Supermercato Ambulante", "Sua Maestà della Marmellata"] },
    { id: "bos-s07", q: "Un gufo fissa {P} da un'ora. {P} gli parla. Cosa gli dice?",
      riserve: ["Abbassa la voce, c'è gente che dorme", "Tu che sei sveglio: dov'è il bagno?", "Uh-uh. Cioè, buonasera"] },
    { id: "bos-s08", q: "Il cartello diceva «Sentiero facile, 1 ora». Dopo 5 ore {P} ci scrive sotto: «___»",
      riserve: ["Facile per una capra, forse", "Un'ora di andata. Il ritorno: mai", "Chi l'ha scritto non è mai salito"] },
    { id: "bos-s09", q: "Una lucciola magica concede a {P} un desiderio nel bosco. Cosa chiede?",
      riserve: ["Una presa elettrica, una sola", "Un bagno con la porta e la chiave", "Che le zanzare pungano solo il cugino"] },
    { id: "bos-s10", q: "{P} urla il suo nome dalla cima del monte. Ma l'eco risponde: «___»",
      riserve: ["Ancora tu?", "Chi? Non ti conosco", "Hai lasciato acceso il fornello"] },
    { id: "bos-s11", q: "{P} scrive le regole del campeggio. Regola numero 1: «___»",
      riserve: ["Chi russa dorme col procione", "Il cioccolato non si divide", "Vietato dire «tanto manca poco»"] },
    { id: "bos-s12", q: "Dopo la prima notte in tenda, {P} manda un messaggio alla mamma: «___»",
      riserve: ["Vieni a prendermi, porta la coperta", "Sto bene. Il ragno è un amico", "Ho dormito su una radice. Felice"] },
    { id: "bos-s13", q: "Dopo il campeggio, {P} si fa stampare una maglietta. Cosa c'è scritto?",
      riserve: ["Zanzare 214, io 0", "Ho visto un cervo (forse)", "Io e il fuoco: ci stiamo conoscendo"] },
    { id: "bos-s14", q: "{P} vuole convincere il gruppo a restare un'altra notte. Cosa dice?",
      riserve: ["Domani vi mostro il fungo che parla", "Ho trovato un fiume: è tipo una doccia", "Le salsicce non si mangiano da sole"] },
    { id: "bos-s15", q: "Il manuale di sopravvivenza scritto da {P} ha un capitolo intitolato: «___»",
      riserve: ["Perdersi con stile", "Il sacco a pelo: istruzioni per uscirne", "Zanzare: si può trattare?"] },
    { id: "bos-s16", q: "Sul registro del guardaparco: «Richiamo per {P}: ___»",
      riserve: ["chiedeva la password del Wi-Fi a un pino", "ha dato i biscotti a uno scoiattolo", "ha montato la tenda in mezzo al sentiero"] },
    { id: "bos-s17", q: "{P} monta la tenda senza leggere le istruzioni. Dopo un'ora annuncia: «___»",
      riserve: ["Mi avanzano sei pezzi. È normale?", "È una tenda moderna: va storta", "Stanotte si dorme sotto le stelle"] }
  ],
  disegna: [
    { id: "bos-d01", q: "Disegna cosa c'è davvero fuori dalla tenda di {P} alle 3 di notte", su: "scena", adesivi: "🦔🐗👀🔦" },
    { id: "bos-d02", q: "Disegna il campeggio di {P} se avesse portato tutto da casa", su: "scena", adesivi: "🛋️📺🍝🧺" },
    { id: "bos-d03", q: "Disegna il rifugio di rami che {P} costruisce quando la tenda vola via", su: "scena", adesivi: "🍃🪨🌧️" },
    { id: "bos-d04", q: "Disegna la grigliata di {P} sul fuoco: cosa ci cuoce?", su: "scena", adesivi: "🌽🍗🧀🍕🍢" },
    { id: "bos-d05", q: "Disegna la mappa del bosco secondo {P} (con la strada sbagliata)", su: "scena", adesivi: "🗺️❌➡️🏁" },
    { id: "bos-d06", q: "Disegna gli animali del bosco che si accampano con {P}", su: "scena", adesivi: "🦊🐿️🦉🐸" },
    { id: "bos-d07", q: "Disegna su {P} le punture di zanzara unite come costellazioni", su: "ritratto", adesivi: "🦟⭐✨" },
    { id: "bos-d08", q: "Disegna su {P} il travestimento da cespuglio per spiare i cervi", su: "ritratto", adesivi: "🌿🍃🦌🔭" },
    { id: "bos-d09", q: "Disegna su {P} il look dopo 3 giorni senza doccia: foglie, rami e ospiti", su: "ritratto", adesivi: "🍂🐛🐌🪶" },
    { id: "bos-d10", q: "Disegna su {P} l'attrezzatura da esploratore per 20 minuti di passeggiata", su: "ritratto", adesivi: "🧭🔭🪢🥾" },
    { id: "bos-d11", q: "Disegna su {P} il cappello da campeggio con tutto attaccato sopra", su: "ritratto", adesivi: "🧲🔔🌭🧦" },
    { id: "bos-d12", q: "Disegna su {P} la corona del bosco: pigne, foglie e funghi", su: "ritratto", adesivi: "👑🌰🍂" }
  ],
  chi: [
    { id: "bos-c01", q: "Chi di noi pianterebbe la tenda in discesa e passerebbe la notte a scivolare fuori?", titolo: "Tenda in discesa" },
    { id: "bos-c02", q: "Chi di noi, nel bosco, cercherebbe il segnale arrampicandosi su un albero col telefono in alto?", titolo: "Antenna umana" },
    { id: "bos-c03", q: "Chi di noi abbraccerebbe una quercia di trecento anni e ci parlerebbe come a un nonno?", titolo: "Nipote della quercia" },
    { id: "bos-c04", q: "Chi di noi brucerebbe tutti i marshmallow sul fuoco e direbbe che li voleva proprio così?", titolo: "Marshmallow carbonizzato" },
    { id: "bos-c05", q: "Chi di noi darebbe un nome a ogni scoiattolo del bosco entro la prima ora?", titolo: "Anagrafe degli scoiattoli" },
    { id: "bos-c06", q: "Chi di noi raccoglierebbe un cestino di funghi e poi li butterebbe tutti «per sicurezza»?", titolo: "Funghi? Per sicurezza no" },
    { id: "bos-c07", q: "Chi di noi metterebbe la sveglia all'alba per vedere il sole sorgere… e la spegnerebbe senza aprire gli occhi?", titolo: "Alba vista a occhi chiusi" },
    { id: "bos-c08", q: "Chi di noi presterebbe il sacco a pelo a chi ha freddo e dormirebbe dentro la giacca?", titolo: "Cuore di sacco a pelo" },
    { id: "bos-c09", q: "Chi di noi, se un cervo entrasse nell'accampamento, proverebbe subito a farci un selfie?", titolo: "Selfie col cervo" },
    { id: "bos-c10", q: "Chi di noi finirebbe in un branco di lupi e dopo una settimana ululerebbe meglio di loro?", titolo: "Capobranco onorario" },
    { id: "bos-c11", q: "Chi di noi imiterebbe il verso di ogni uccello del bosco… sbagliandoli tutti con sicurezza?", titolo: "Cinguettio sbagliato" },
    { id: "bos-c12", q: "Chi di noi, dopo una notte in tenda, giurerebbe «mai più» e il mese dopo comprerebbe tutta l'attrezzatura?", titolo: "Mai più (fino a giugno)" },
    { id: "bos-c13", q: "Chi di noi laverebbe i piatti nel ruscello e guarderebbe la pentola andarsene con la corrente?", titolo: "Pentola alla deriva" },
    { id: "bos-c14", q: "Chi di noi porterebbe la moka in campeggio e sveglierebbe tutti alle sei col profumo del caffè?", titolo: "Moka del bosco" }
  ]
});

/* ---------------------------------------------------------
   🚆 SUL TRENO NOTTE
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "treno", cod: "tre", nome: "Sul treno notte", emoji: "🚆",
  adesivi: "🛏️🧳🥪🎧😴🧦📚🕶️🪟🎫☕🧸",
  entrata: [
    "Treno notte delle 23:40. Ritardo previsto: tanto. In cuccetta: {P}.",
    "Sei persone, quattro valigie, un finestrino bloccato. E poi c'è {P}.",
    "Prossima fermata: chissà. Intanto, sotto torchio, c'è {P}."
  ],
  immagini: [
    { id: "tre-i01", q: "Chi è il vicino di cuccetta che tocca a {P}?", carte: [
      { chi: "nonno", faccia: "felice", t: "Racconta la guerra… di condominio" },
      { chi: "cantante", faccia: "estasi", t: "Fa i vocalizzi alle 6" },
      { chi: "impiegato", faccia: "finto", piu: { mano: "telefono" }, t: "Al telefono col capo fino all'una" },
      { chi: "bimbo", faccia: "linguaccia", t: "Su e giù per la scaletta, a ciclo" }
    ] },
    { id: "tre-i02", q: "Chi è il controllore del treno notte di {P}?", carte: [
      { chi: "controllore", faccia: "sonno", t: "Ogni ora ti sveglia: «Biglietto?»" },
      { chi: "controllore", faccia: "felice", piu: { mano: "microfono" }, t: "Annuncia le fermate cantando" },
      { chi: "controllore", f: "d", faccia: "arrabbiato", t: "Multa anche chi respira forte" },
      { chi: "controllore", faccia: "pensieroso", t: "Si siede e ti racconta i suoi guai" }
    ] },
    { id: "tre-i03", q: "Chi sale a mezzanotte e si siede proprio davanti a {P}?", carte: [
      { chi: "mago", faccia: "furbo", t: "Ti fa sparire il panino. Davvero." },
      { chi: "nonna", faccia: "felice", t: "Apre una teglia di lasagne. Calda" },
      { chi: "turista", faccia: "sorpreso", t: "Ha la cartina di un altro treno" },
      { chi: "rockstar", faccia: "esulta", t: "Accorda la chitarra senza sosta" }
    ] },
    { id: "tre-i04", q: "Chi è il passeggero misterioso della cabina 6, che {P} sospetta da tutta la notte?", carte: [
      { chi: "elegante", faccia: "furbo", piu: { occhiali: "monocolo" }, t: "Monocolo, valigetta, zero parole" },
      { chi: "nonna", faccia: "finto", t: "Fa la maglia, ma guarda tutti" },
      { chi: "cuoco", faccia: "indifferente", t: "Gira col mestolo. Non si sa perché" },
      { chi: "capo", faccia: "pensieroso", piu: { occhiali: "sole" }, t: "Occhiali da sole alle due di notte" }
    ] },
    { id: "tre-i05", q: "Chi passa col carrello degli snack davanti a {P}?", carte: [
      { chi: "cameriere", faccia: "furbo", t: "Fa i prezzi a occhio" },
      { chi: "cameriere", f: "d", faccia: "sonno", t: "Passa alle quattro. Apposta." },
      { chi: "cuoco", faccia: "estasi", t: "Ti fa la carbonara al volo" },
      { chi: "nonno", faccia: "felice", t: "Ha solo caramelle alla menta" }
    ] },
    { id: "tre-i06", q: "Chi è la persona famosa in incognito nella cabina di {P}?", carte: [
      { chi: "calciatore", faccia: "triste", piu: { occhiali: "sole" }, t: "Il bomber del rigore sbagliato" },
      { chi: "cantante", f: "d", faccia: "finto", piu: { occhiali: "sole" }, t: "La cantante di Sanremo, struccata" },
      { chi: "presentatore", faccia: "esulta", t: "Quello dei quiz: ti fa domande" },
      { chi: "re", faccia: "indifferente", t: "Un re in incognito. Con la corona" }
    ] },
    { id: "tre-i07", q: "Chi sveglia {P} alle 5 del mattino sul treno notte?", carte: [
      { chi: "animatore", faccia: "esulta", t: "«Ginnastica in corridoio!»" },
      { chi: "corriere", faccia: "indifferente", t: "Un corriere: «Pacco per lei»" },
      { chi: "vicino", faccia: "arrabbiato", t: "Il vicino: cerca le sue pantofole" },
      { chi: "bimbo", faccia: "felice", t: "Il bimbo di sopra: «Giochiamo?»" }
    ] },
    { id: "tre-i08", q: "Chi accompagna {P} alla stazione, prima del treno notte?", carte: [
      { chi: "mamma", faccia: "triste", t: "Piange: «Parti per la Luna?»" },
      { chi: "nonna", faccia: "felice", piu: { mano: "pizza" }, t: "Passa panini dal finestrino" },
      { chi: "papa", faccia: "indifferente", t: "Pensa già al parcheggio" },
      { chi: "cugino", faccia: "furbo", piu: { mano: "telefono" }, t: "Fa il video: «Addio per sempre!»" }
    ] },
    { id: "tre-i09", q: "Il treno arriva all'alba. Chi aspetta {P} sul binario?", carte: [
      { chi: "zia", faccia: "estasi", t: "La zia, col cartello col tuo nome" },
      { chi: "nonno", faccia: "sonno", t: "Il nonno: è lì dalle quattro" },
      { chi: "autista", faccia: "finto", t: "Un autista col nome di un altro" },
      { e: "🤷🚉", t: "Nessuno: hanno sbagliato giorno" }
    ] },
    { id: "tre-i10", q: "Il vicino di cuccetta si toglie le scarpe: profumo in tutto il vagone. Cosa fa {P}?", carte: [
      { e: "🪟❄️", t: "Apre il finestrino, anche se gela" },
      { e: "🙂💬", t: "Glielo dice, con un sorriso" },
      { e: "🌸💦", t: "Si profuma il cuscino" },
      { e: "🚶🌙", t: "Va a dormire in corridoio" }
    ] },
    { id: "tre-i11", q: "Sale un signore con lo stesso biglietto di {P}: stessa cuccetta. Cosa fa {P}?", carte: [
      { e: "🙏", t: "Gliela lascia, pur di non litigare" },
      { e: "🎫📣", t: "Chiama il controllore e resta lì" },
      { e: "😴🛏️", t: "Dorme: chi prima arriva…" },
      { e: "✂️🌙", t: "Propone metà notte a testa" }
    ] },
    { id: "tre-i12", q: "Sono le sei e il treno di {P} ha quattro ore di ritardo. Cosa fa?", carte: [
      { e: "📝", t: "Scrive un reclamo di due pagine" },
      { e: "😴😊", t: "È felice: più tempo per dormire" },
      { e: "😤📣", t: "Si lamenta con tutto il vagone" },
      { e: "🍿🤝", t: "Apre gli snack coi vicini" }
    ] },
    { id: "tre-i13", q: "A {P} tocca la cuccetta più alta, a un palmo dal soffitto. Cosa fa?", carte: [
      { e: "🛏️⬆️", t: "Sale e non scende fino all'arrivo" },
      { e: "🥺", t: "Chiede il cambio col sorriso" },
      { e: "💺", t: "Dorme sul sedile del corridoio" },
      { e: "🤕", t: "Ci sbatte la testa tre volte" }
    ] },
    { id: "tre-i14", q: "Un signore chiede a {P} di tenergli d'occhio il cane fino a Firenze. Com'è andata?", carte: [
      { e: "🐶🛏️", t: "Il cane dorme nella sua cuccetta" },
      { e: "🐶🥪", t: "Si è mangiato il suo panino" },
      { e: "🐶❤️", t: "Ora non vuole più ridarlo" },
      { e: "🐶🏃", t: "Inseguito per tre vagoni" }
    ] },
    { id: "tre-i15", q: "Nella cabina di {P} uno sconosciuto russa come una moka sul fuoco. Cosa fa {P}?", carte: [
      { e: "😗🎵", t: "Fischia finché non smette" },
      { e: "📹", t: "Lo filma, per i posteri" },
      { e: "🗣️", t: "Tossisce finto finché si sveglia" },
      { e: "😴🔇", t: "Tappi, e dorme come un sasso" }
    ] },
    { id: "tre-i16", q: "{P} si sveglia: il treno è fermo alla sua stazione e sta ripartendo! Cosa fa?", carte: [
      { e: "🩳🧳", t: "Salta giù in pigiama, con valigia" },
      { e: "🤷", t: "Resta su e scende alla prossima" },
      { e: "🧳🚀", t: "Lancia la valigia, poi salta" },
      { e: "🆘🪟", t: "Chiede aiuto dal finestrino" }
    ] },
    { id: "tre-i17", q: "In cabina c'è una presa sola per sei telefoni. Cosa fa {P}?", carte: [
      { e: "🔌👑", t: "La occupa da Milano a Lecce" },
      { e: "📋🔌", t: "Fa i turni da venti minuti" },
      { e: "🔋😇", t: "La cede: «Ho il 90%»" },
      { e: "🔌🎒", t: "Tira fuori la ciabatta a 4 prese" }
    ] },
    { id: "tre-i18", q: "Una signora vuole raccontare a {P} la storia di tutta la sua famiglia. Cosa fa {P}?", carte: [
      { e: "👂👪", t: "La ascolta tutta, cugini compresi" },
      { e: "😴", t: "Finge di dormire dopo 5 minuti" },
      { e: "🗣️🗣️", t: "Racconta la sua, ancora più lunga" },
      { e: "📝🌳", t: "Le disegna l'albero genealogico" }
    ] },
    { id: "tre-i19", q: "Il vicino di cuccetta parla nel sonno e dice il nome di {P}. Cosa fa {P}?", carte: [
      { e: "👆", t: "Lo sveglia: «Cosa sognavi?»" },
      { e: "💬", t: "Gli risponde, per farlo parlare" },
      { e: "🏃", t: "Cambia cuccetta di corsa" },
      { e: "👀🌙", t: "Finge di niente. Non dorme più" }
    ] },
    { id: "tre-i20", q: "{P} si sveglia e scopre di essere sul treno sbagliato, diretto in Austria. Cosa fa?", carte: [
      { e: "🔙", t: "Scende alla prima e torna" },
      { e: "🏔️😊", t: "Resta: ormai è un viaggio" },
      { e: "📞😱", t: "Chiama la mamma, nel panico" },
      { e: "🎫🤝", t: "Amicizia col controllore austriaco" }
    ] },
    { id: "tre-i21", q: "Lo sconosciuto in cabina chiede a {P}: «E tu, cosa fai nella vita?». Cosa fa {P}?", carte: [
      { e: "📜", t: "La verità, con tutti i dettagli" },
      { e: "🚀", t: "«Faccio l'astronauta»" },
      { e: "❓❓", t: "Fa domande, così non risponde" },
      { e: "🕵️", t: "«Non posso dirlo» (aria seria)" }
    ] },
    { id: "tre-i22", q: "In cabina uno sconosciuto offre i cannoli a tutti, tranne che a {P}. Cosa fa {P}?", carte: [
      { e: "🙋", t: "Glielo chiede dritto: «E a me?»" },
      { e: "😒", t: "Tiene il muso fino a Bologna" },
      { e: "🍿🙅", t: "Apre i suoi snack. E non li offre" },
      { e: "🌙🤏", t: "Aspetta che dorma e ne prende uno" }
    ] },
    { id: "tre-i23", q: "A metà viaggio {P} si accorge di aver lasciato la valigia sul binario. Cosa fa?", carte: [
      { e: "📞🔟", t: "Chiama la stazione dieci volte" },
      { e: "🛍️", t: "Pazienza: compra tutto all'arrivo" },
      { e: "👕🤝", t: "Si fa prestare i vestiti" },
      { e: "🔙🚉", t: "Scende e torna a prenderla" }
    ] },
    { id: "tre-i24", q: "Alle 3 di notte {P} esce in pigiama e la porta della cabina si chiude da dentro. Cosa fa?", carte: [
      { e: "🚪✊", t: "Bussa fino a svegliare il vagone" },
      { e: "🧳😴", t: "Dorme in corridoio, sulla valigia" },
      { e: "🩴🔍", t: "Cerca il controllore, in ciabatte" },
      { e: "🤝🌙", t: "Fa amicizia con chi è sveglio" }
    ] },
    { id: "tre-i25", q: "Cosa tira fuori {P} dalla borsa per dormire bene in cuccetta?", carte: [
      { e: "🎧🌊", t: "Le cuffie coi rumori del mare" },
      { e: "🍪🌙", t: "I biscotti per la notte" },
      { e: "🩴", t: "Le ciabatte, sempre e ovunque" },
      { e: "🧣🏠", t: "La coperta di casa, enorme" }
    ] },
    { id: "tre-i26", q: "Alle 5 il vicino alza la tendina: l'alba sulle montagne, bellissima. Cosa fa {P}?", carte: [
      { e: "📸🌄", t: "Cento foto, tutte uguali" },
      { e: "🙈😴", t: "Riabbassa la tendina e si gira" },
      { e: "🥺🌄", t: "Si commuove in silenzio" },
      { e: "📞👵", t: "Videochiama la mamma, alle 5" }
    ] },
    { id: "tre-i27", q: "Che faccia fa {P} quando il vicino di cuccetta tira fuori un flauto alle undici di sera?", carte: [
      { lui: "sorpreso", t: "«Ne sai una di Sanremo?»" },
      { lui: "arrabbiato", t: "Pensa a dove nascondere il flauto" },
      { lui: "esulta", t: "Tira fuori due cucchiai e suona" },
      { lui: "sonno", t: "Dorme lo stesso, anzi meglio" }
    ] },
    { id: "tre-i28", q: "Che faccia fa {P} quando il vicino di cuccetta scarta un panino con lo sgombro e l'aglio?", carte: [
      { lui: "disgusto", t: "Sciarpa sul naso fino a Roma" },
      { lui: "innamorato", t: "Ne chiede metà" },
      { lui: "finto", t: "«Che profumino…»" },
      { lui: "sorpreso", t: "Chi porta lo sgombro in treno?" }
    ] },
    { id: "tre-i29", q: "Che faccia fa {P} alle sei di mattina, quando il controllore accende tutte le luci?", carte: [
      { lui: "sonno", t: "Mascherina giù, e riparte" },
      { lui: "arrabbiato", t: "Chiede il nome del controllore" },
      { lui: "felice", t: "Ha già fatto colazione" },
      { lui: "indifferente", t: "Non sente niente: ha i tappi" }
    ] },
    { id: "tre-i30", q: "Che faccia fa {P} quando apre gli occhi e trova la faccia del vicino a dieci centimetri?", carte: [
      { lui: "terrore", t: "Urla e sveglia il vagone" },
      { lui: "sorpreso", t: "«Ci conosciamo?»" },
      { lui: "sonno", t: "Si rigira e lo abbraccia" },
      { lui: "finto", t: "Sorride e richiude piano gli occhi" }
    ] },
    { id: "tre-i31", q: "Che faccia fa {P} quando il controllore dice: «C'è un vagone vuoto, tutto per te»?", carte: [
      { lui: "esulta", t: "Ci organizza una festa da ballo" },
      { lui: "terrore", t: "Un vagone vuoto, di notte? No" },
      { lui: "furbo", t: "Ci porta tutti gli amici" },
      { lui: "sonno", t: "Si stende su sei sedili" }
    ] }
  ],
  scrivi: [
    { id: "tre-s01", q: "Alle 2, dalla cuccetta di sopra, {P} sussurra al vicino di sotto: «___»",
      riserve: ["Sei sveglio? Io sì. Da tre ore", "Hai sentito anche tu quella mucca?", "Se cado, prendimi. Grazie"] },
    { id: "tre-s02", q: "{P} lascia un biglietto al vicino: «Scusa per stanotte, di solito non ___»",
      riserve: ["parlo nel sonno di mia zia", "dormo coi piedi sul cuscino degli altri", "canto Sanremo alle quattro"] },
    { id: "tre-s03", q: "Il capotreno annuncia: «Abbiamo un passeggero speciale: {P}, che ___»",
      riserve: ["ha chiesto la colazione alle 2", "russa più forte del locomotore", "ha adottato tutto il vagone 9"] },
    { id: "tre-s04", q: "Alle tre di notte {P} prende il microfono del capotreno. Cosa annuncia?",
      riserve: ["Chi ha le patatine venga in cabina 4", "Prossima fermata: il letto di casa", "Il signore della 6 russa: svegliatelo"] },
    { id: "tre-s05", q: "Treno fermo in mezzo al nulla, alle 4. {P} scrive al gruppo: «___»",
      riserve: ["Se non torno, il divano è vostro", "Vedo una mucca. Mi guarda. Aiuto", "Fermi da un'ora. Mando foto del buio"] },
    { id: "tre-s06", q: "Il controllore chiede a {P} perché non ha il biglietto. Qual è la scusa?",
      riserve: ["L'ha mangiato un cane, sul binario", "Pensavo fosse il treno della pizza", "Mia nonna è il macchinista"] },
    { id: "tre-s07", q: "Sparisce la crostata della signora di cabina 3. {P} indaga e accusa: «___»",
      riserve: ["Lei, signore! Ha le briciole sui baffi", "Il bambino: è troppo silenzioso", "Io. Scusate, mi guardava"] },
    { id: "tre-s08", q: "{P} scrive una cartolina dal treno notte: «Cari tutti, qui ___»",
      riserve: ["il letto è largo come un grissino", "un signore russa in do maggiore", "il controllore è il mio nuovo amico"] },
    { id: "tre-s09", q: "Alle 3 il treno si ferma e sul binario c'è un uomo con un cartello per {P}. Cosa c'è scritto?",
      riserve: ["Hai lasciato acceso il ferro da stiro", "Mamma dice: mettiti la maglia", "Benvenuti a Napoli! Ah no, scusa"] },
    { id: "tre-s10", q: "{P} e i vicini di cabina fondano una squadra per sopravvivere alla notte. Come si chiama?",
      riserve: ["I Sei Insonni", "Cuccetta Selvaggia", "Gli Amici del Panino Freddo"] },
    { id: "tre-s11", q: "{P} scrive le istruzioni per la cuccetta di sopra: «Per salire, ___»",
      riserve: ["chiedere aiuto e pregare", "togliersi le scarpe e la dignità", "due gradini, poi improvvisare"] },
    { id: "tre-s12", q: "{P} si sveglia in una stazione che non conosce. Cosa chiede al primo che passa?",
      riserve: ["Che anno è?", "C'è un treno per tornare a letto?", "Mi tiene la valigia? Torno a Natale"] },
    { id: "tre-s13", q: "Il diario di viaggio di {P}: «Ore 2:14. ___»",
      riserve: ["Il vicino ha ripreso a russare", "Finiti i biscotti. Inizia la crisi", "Vedo le luci di un paese. Ciao, paese"] },
    { id: "tre-s14", q: "Il vicino chiede: «Le dispiace se apro il finestrino?». Cosa risponde {P}?",
      riserve: ["Solo se apre anche il suo panino", "Prego, adoro il freddo siberiano", "Apra pure, ma poi mi copre lei"] },
    { id: "tre-s15", q: "Sosta di tre minuti: {P} scende al volo e risale con ___",
      riserve: ["un caffè e un cane", "tre pizzette e un nuovo amico", "la valigia di un altro"] },
    { id: "tre-s16", q: "{P} inventa una storia per far dormire il bambino della cabina accanto: «C'era una volta ___»",
      riserve: ["un treno che aveva paura del buio", "un controllore senza biglietto", "una cuccetta che voleva fare il letto"] },
    { id: "tre-s17", q: "All'arrivo, dopo 12 ore di treno, {P} chiama casa. Prima frase?",
      riserve: ["Ho dormito quattro minuti in tutto", "Il signore della 6 vi saluta", "Venite a prendermi: non ho più gambe"] },
    { id: "tre-s18", q: "{P} scrive col dito sul finestrino appannato del treno: «___»",
      riserve: ["Aiuto, il vicino russa in tedesco", "Ciao mucche, ciao paesi, ciao", "Qui ha dormito una leggenda"] }
  ],
  disegna: [
    { id: "tre-d01", q: "Disegna la cuccetta di {P} dopo 12 ore di viaggio", su: "scena", adesivi: "🍫🍌📱🧻" },
    { id: "tre-d02", q: "Disegna cosa vede {P} dal finestrino alle 3 di notte", su: "scena", adesivi: "🌙🐄🏰🛸" },
    { id: "tre-d03", q: "Disegna la cabina di {P} trasformata in discoteca", su: "scena", adesivi: "🪩🎶💡🕺" },
    { id: "tre-d04", q: "Disegna il fortino di {P} in cuccetta, con coperte e valigie", su: "scena", adesivi: "🧳🛡️🚫" },
    { id: "tre-d05", q: "Disegna il treno dei sogni di {P}: cosa c'è in ogni vagone?", su: "scena", adesivi: "🍕🎢🛁🎠" },
    { id: "tre-d06", q: "Disegna la stazione sperduta dove {P} scende per sbaglio alle 4", su: "scena", adesivi: "🐄🌾🪧🦉" },
    { id: "tre-d07", q: "Disegna su {P} l'attrezzatura da gran viaggio: marsupio, cuscino e…", su: "ritratto", adesivi: "🎒🧣🗺️🔦" },
    { id: "tre-d08", q: "Disegna su {P} il look da passeggero misterioso del treno notte", su: "ritratto", adesivi: "🎩🧥🗝️🔍" },
    { id: "tre-d09", q: "Disegna su {P} il pigiama con cui gira in corridoio alle 3 di notte", su: "ritratto", adesivi: "🦄🐻⭐🌙" },
    { id: "tre-d10", q: "Disegna su {P} tutti i souvenir comprati alle soste del treno", su: "ritratto", adesivi: "🧲🎩🧁🗿" },
    { id: "tre-d11", q: "Disegna su {P} la faccia da «ho dormito benissimo» alle 6 di mattina", su: "ritratto", adesivi: "☕😎✨💤" },
    { id: "tre-d12", q: "Disegna su {P} il cappello da capotreno e l'aria di chi comanda", su: "ritratto", adesivi: "🚂🚦🎺" }
  ],
  chi: [
    { id: "tre-c01", q: "Chi di noi, sul treno notte, attaccherebbe bottone con uno sconosciuto e alle due saprebbe tutta la sua vita?", titolo: "Confidenze in cuccetta" },
    { id: "tre-c02", q: "Chi di noi salirebbe con una valigia così grossa da bloccare il corridoio di tutto il vagone?", titolo: "Valigia fuori sagoma" },
    { id: "tre-c03", q: "Chi di noi si porterebbe da casa una cena di quattro portate, con tanto di tovaglia?", titolo: "Vagone ristorante privato" },
    { id: "tre-c04", q: "Chi di noi scenderebbe a prendere un caffè durante la sosta e guarderebbe il treno ripartire, col caffè in mano?", titolo: "Caffè al binario" },
    { id: "tre-c05", q: "Chi di noi si addormenterebbe sulla spalla dello sconosciuto seduto accanto?", titolo: "Cuscino di uno sconosciuto" },
    { id: "tre-c06", q: "Chi di noi filmerebbe per un'ora il buio fuori dal finestrino «perché è poetico»?", titolo: "Regista del buio" },
    { id: "tre-c07", q: "Chi di noi chiederebbe «Siamo arrivati?» a ogni fermata, svegliando tutta la cabina?", titolo: "Siamo arrivati?" },
    { id: "tre-c08", q: "Chi di noi si metterebbe a dormire nella cuccetta di uno sconosciuto, giurando che fosse la sua?", titolo: "Cuccetta abusiva" },
    { id: "tre-c09", q: "Chi di noi, quando il controllore passa di notte, risponderebbe «Presente!» come a scuola?", titolo: "Presente, controllore!" },
    { id: "tre-c10", q: "Chi di noi salirebbe sul treno sbagliato e convincerebbe tutto il vagone a cambiare meta?", titolo: "Capotreno abusivo" },
    { id: "tre-c11", q: "Chi di noi cederebbe la cuccetta di sotto alla signora anziana e salirebbe in cima senza dire niente?", titolo: "Cuccetta del buon cuore" },
    { id: "tre-c12", q: "Chi di noi telefonerebbe a voce altissima alle undici di sera, nella cabina di sei persone?", titolo: "Vivavoce del vagone" },
    { id: "tre-c13", q: "Chi di noi scenderebbe dal treno con il segno del finestrino stampato su mezza faccia?", titolo: "Faccia da finestrino" },
    { id: "tre-c14", q: "Chi di noi farebbe smettere di piangere il bambino della cabina accanto con le facce buffe?", titolo: "Babysitter del vagone" }
  ]
});

/* ---------------------------------------------------------
   🕯️ NELLA VILLA STREGATA
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "villa", cod: "vil", nome: "Nella villa stregata", emoji: "🕯️",
  adesivi: "👻🕯️🕸️🦇🪞🔮🗝️🎃🐈‍⬛🧹📜🪑",
  entrata: [
    "Villa Brividi, mezzanotte. Una porta cigola: è entrat{o|a} {P}.",
    "Le candele tremano, il quadro sorride. Sotto torchio stanotte: {P}.",
    "Il fantasma di casa vi dà il benvenuto. Ha chiesto di conoscere {P}."
  ],
  immagini: [
    { id: "vil-i01", q: "Chi è il maggiordomo che apre la porta della villa a {P}?", carte: [
      { chi: "cameriere", faccia: "indifferente", piu: { mano: "tazza" }, t: "«La aspettavamo dal 1823»" },
      { chi: "nonno", faccia: "sonno", t: "Si addormenta mentre parla" },
      { chi: "cameriere", f: "d", faccia: "furbo", piu: { collo: "papillon" }, t: "Ride quando non dovrebbe" },
      { chi: "mago", faccia: "pensieroso", t: "La tua giacca? Sparita. Per sempre" }
    ] },
    { id: "vil-i02", q: "Chi è il fantasma che infesta la stanza di {P}?", carte: [
      { chi: "re", faccia: "arrabbiato", t: "Un re: rivuole il suo trono" },
      { chi: "cuoco", faccia: "pensieroso", t: "Un cuoco: cerca il sale dal 1800" },
      { chi: "ballerino", faccia: "estasi", t: "Un ballerino: valzer alle tre" },
      { chi: "nonna", faccia: "felice", t: "Una nonna: ti rimbocca le coperte" }
    ] },
    { id: "vil-i03", q: "{P} apre l'armadio per nascondersi. Chi c'è già dentro?", carte: [
      { chi: "cugino", faccia: "furbo", t: "Il cugino, con le patatine" },
      { chi: "bimbo", faccia: "arrabbiato", t: "Un bimbo: «Questo posto è mio»" },
      { chi: "clown", faccia: "felice", t: "Un clown. Da quando? Boh" },
      { chi: "vicino", faccia: "indifferente", t: "Il vicino: veniva a lamentarsi" }
    ] },
    { id: "vil-i04", q: "Chi porta {P} nella villa stregata, per farsi coraggio?", carte: [
      { chi: "nonna", faccia: "arrabbiato", t: "La nonna, con la pantofola in mano" },
      { chi: "supereroe", faccia: "terrore", t: "Un supereroe: urla più di tutti" },
      { chi: "calciatore", faccia: "furbo", t: "Il portiere: para anche i fantasmi" },
      { chi: "papa", faccia: "finto", t: "Il papà: «È solo il vento»" }
    ] },
    { id: "vil-i05", q: "Mezzanotte: il pianoforte del salone suona da solo. Chi c'è seduto, quando arriva {P}?", carte: [
      { chi: "rockstar", faccia: "esulta", t: "Una rockstar del 1700, in tour" },
      { chi: "bimbo", faccia: "pensieroso", t: "Un bimbo che sa solo «Fra Martino»" },
      { chi: "cantante", f: "d", faccia: "estasi", t: "Un soprano che spacca i bicchieri" },
      { e: "🐈‍⬛🎹", t: "Il gatto, a spasso sui tasti" }
    ] },
    { id: "vil-i06", q: "Chi è il cuoco della villa che prepara la cena a {P}?", carte: [
      { chi: "cuoco", faccia: "furbo", t: "Zuppa del giorno: «Non chieda»" },
      { chi: "mamma", faccia: "felice", t: "Polpette anche per i fantasmi" },
      { chi: "vichingo", faccia: "esulta", t: "Cinghiale a colazione" },
      { chi: "mago", faccia: "furbo", t: "Cucina nel calderone: fuma verde" }
    ] },
    { id: "vil-i07", q: "Nella villa c'è un fantasma che si innamora di {P}. Chi è?", carte: [
      { chi: "elegante", faccia: "innamorato", t: "Un conte: poesie sui vetri" },
      { chi: "cowboy", faccia: "furbo", t: "Un cowboy: duello di sguardi" },
      { chi: "pirata", faccia: "felice", t: "Un pirata: ti regala bottoni d'oro" },
      { chi: "cantante", faccia: "triste", t: "Un cantante: ti dedica i lamenti" }
    ] },
    { id: "vil-i08", q: "Alle 3 di notte {P} scende in cucina. Chi trova davanti al frigo?", carte: [
      { chi: "nonno", faccia: "sonno", t: "Un nonno sonnambulo, in vestaglia" },
      { chi: "bimbo", faccia: "linguaccia", t: "Un bimbo col cucchiaio nella crema" },
      { chi: "mago", faccia: "sorpreso", t: "Un mago a caccia di ingredienti" },
      { chi: "vicino", faccia: "finto", t: "Il vicino: «Ho visto la luce»" }
    ] },
    { id: "vil-i09", q: "A cena c'è un posto apparecchiato in più, per «il padrone di casa» che non si vede. Cosa fa {P}?", carte: [
      { e: "🪑🙋", t: "Si siede lì: tanto non c'è" },
      { e: "🗣️👻", t: "Chiacchiera con la sedia vuota" },
      { e: "🍖🤏", t: "Si mangia anche la sua porzione" },
      { e: "🚪🍽️", t: "Chiede la cena in camera" }
    ] },
    { id: "vil-i10", q: "Il gruppo si divide per esplorare la villa. Cosa fa {P}?", carte: [
      { e: "🕵️", t: "Va per conto suo: «Paura? Io?»" },
      { e: "🧲", t: "Si attacca al più coraggioso" },
      { e: "🚪🛡️", t: "Resta all'ingresso, «di guardia»" },
      { e: "🎬☝️", t: "«Mai dividersi, come nei film!»" }
    ] },
    { id: "vil-i11", q: "In soffitta {P} trova una bambola di porcellana che non smette di fissarl{o|a}. Cosa fa?", carte: [
      { e: "🪆↩️", t: "La gira verso il muro" },
      { e: "📸📱", t: "Foto, e la manda a tutti" },
      { e: "🎒🪆", t: "Se la porta a casa come ricordo" },
      { e: "🏃💨", t: "Scappa giù per le scale" }
    ] },
    { id: "vil-i12", q: "Nella villa salta la luce. Cosa fa {P}?", carte: [
      { e: "🔦👉", t: "Torcia del telefono, e guida tutti" },
      { e: "😱", t: "Urla e non smette più" },
      { e: "👻😈", t: "Fa «Buuu!» agli altri, al buio" },
      { e: "🤝", t: "Si aggrappa al primo braccio" }
    ] },
    { id: "vil-i13", q: "Il maggiordomo offre a {P} una tisana «speciale della casa». Cosa fa {P}?", carte: [
      { e: "🍵⚡", t: "La beve tutta d'un fiato" },
      { e: "🍵👉", t: "La fa assaggiare prima a un amico" },
      { e: "🪴", t: "La versa nel vaso della pianta" },
      { e: "🍪❓", t: "Chiede se c'è anche un biscotto" }
    ] },
    { id: "vil-i14", q: "Per scommessa, il gruppo sfida {P} a dormire nella stanza maledetta. Com'è andata?", carte: [
      { e: "😴😎", t: "Accetta e dorme benissimo" },
      { e: "🕑🏃", t: "Accetta. Alle 2 torna dagli altri" },
      { e: "🃏", t: "Rilancia con un'altra scommessa" },
      { e: "🧸🔦", t: "Accetta, con 3 torce e il peluche" }
    ] },
    { id: "vil-i15", q: "Al risveglio {P} trova i suoi vestiti piegati alla perfezione. Nessuno l'ha fatto. Cosa fa?", carte: [
      { e: "😍👕", t: "Chiede al fantasma di restare" },
      { e: "🧳💨", t: "Valigia chiusa: si parte ora" },
      { e: "🕵️☕", t: "Interroga tutti a colazione" },
      { e: "👕🌪️", t: "Li rimette in disordine: dispetto" }
    ] },
    { id: "vil-i16", q: "Un temporale chiude tutti nella villa fino al mattino. Cosa fa {P}?", carte: [
      { e: "🗺️", t: "Esplora tutte le stanze" },
      { e: "🍰🔓", t: "Fa razzia in cucina" },
      { e: "🃏🕯️", t: "Carte a lume di candela" },
      { e: "⚡🔢", t: "Non dorme e conta i tuoni" }
    ] },
    { id: "vil-i17", q: "In un armadio {P} trova un abito da ballo di cent'anni fa. Cosa fa?", carte: [
      { e: "👗💃", t: "Se lo prova e scende a sfilare" },
      { e: "🚪💥", t: "Richiude l'armadio di colpo" },
      { e: "🙈👻", t: "Ci si nasconde, per fare «Bu!»" },
      { e: "💍🔍", t: "Fruga nelle tasche: tesori?" }
    ] },
    { id: "vil-i18", q: "Il fantasma compare davanti a {P} e fa: «Bu». Cosa fa {P}?", carte: [
      { e: "📢", t: "Risponde «Bu!» più forte" },
      { e: "📸⚡", t: "Gli fa una foto col flash" },
      { e: "🏃💨", t: "Scappa e lascia lì gli amici" },
      { e: "🥱", t: "«Tutto qui?»" }
    ] },
    { id: "vil-i19", q: "Per vendicarsi della paura presa, {P} fa uno scherzo agli amici. Com'è andata?", carte: [
      { e: "🚪⏳", t: "Tre ore nell'armadio, ad aspettare" },
      { e: "👻🛏️", t: "Lenzuolo in testa, in corridoio" },
      { e: "🧵🚪", t: "Porte che cigolano col filo" },
      { e: "😱🪞", t: "Si spaventa del suo stesso scherzo" }
    ] },
    { id: "vil-i20", q: "Nella villa c'è una stanza chiusa a chiave, e la chiave ce l'ha {P}. Cosa fa?", carte: [
      { e: "🔓", t: "Apre subito, davanti a tutti" },
      { e: "🌙🤫", t: "Apre di nascosto, di notte" },
      { e: "🗝️🕳️", t: "Butta la chiave nel pozzo" },
      { e: "🔨🗝️", t: "Mette all'asta la chiave" }
    ] },
    { id: "vil-i21", q: "Il gruppo scappa dalla villa, ma {P} esce dopo tutti. Perché?", carte: [
      { e: "🚪🔒", t: "Voleva chiudere bene la porta" },
      { e: "🎥", t: "Stava ancora girando il video" },
      { e: "🧥", t: "Cercava la giacca preferita" },
      { e: "👋👻", t: "Salutava il fantasma" }
    ] },
    { id: "vil-i22", q: "Con cosa si difende {P} dal fantasma?", carte: [
      { e: "🧄", t: "L'aglio della nonna, una treccia" },
      { e: "🍳", t: "La padella buona della mamma" },
      { e: "🧹", t: "La scopa, come una spada" },
      { e: "🧂", t: "Il sale grosso, a manciate" }
    ] },
    { id: "vil-i23", q: "Cosa si porta via {P} dalla villa come ricordo?", carte: [
      { e: "🕯️", t: "Un candelabro, «in prestito»" },
      { e: "🖼️👀", t: "Il quadro con gli occhi mobili" },
      { e: "📖✨", t: "Il libro di magia (non si sa mai)" },
      { e: "🗝️", t: "Una chiave di chissà cosa" }
    ] },
    { id: "vil-i24", q: "Se {P} fosse il fantasma della villa, cosa farebbe tutta la notte?", carte: [
      { e: "⛓️😩", t: "Catene e lamenti, da manuale" },
      { e: "🔔🏃", t: "Suona il campanello e scappa" },
      { e: "🍪", t: "Ruba i biscotti dalla dispensa" },
      { e: "🧦", t: "Nasconde un calzino per paio" }
    ] },
    { id: "vil-i25", q: "Che faccia fa {P} quando il gruppo decide: «La porta della soffitta la apre {P}»?", carte: [
      { lui: "terrore", t: "Tiene la torcia. Da giù" },
      { lui: "finto", t: "«Certo!» Si allaccia le scarpe…" },
      { lui: "esulta", t: "Ci corre: e se c'è un tesoro?" },
      { lui: "pensieroso", t: "Studia già la via di fuga" }
    ] },
    { id: "vil-i26", q: "Che faccia fa {P} quando scopre che il fantasma che ha fatto urlare tutti era il gatto di casa?", carte: [
      { lui: "imbarazzo", t: "«Urlavo per il gatto, poverino»" },
      { lui: "felice", t: "Coccola il gatto: tutto passato" },
      { lui: "arrabbiato", t: "Col gatto non ci parla più" },
      { lui: "indifferente", t: "«Io lo sapevo» (no)" }
    ] },
    { id: "vil-i27", q: "Che faccia fa {P} quando, nella foto di gruppo scattata nella villa, c'è una persona in più?", carte: [
      { lui: "terrore", t: "Cancella la foto. Due volte" },
      { lui: "sorpreso", t: "Conta: siamo in sei o sette?" },
      { lui: "pensieroso", t: "Zooma: ha un bel maglione" },
      { lui: "linguaccia", t: "La pubblica subito" }
    ] },
    { id: "vil-i28", q: "Che faccia fa {P} quando il maggiordomo dice: «La sua stanza è quella col lettino che dondola da solo»?", carte: [
      { lui: "terrore", t: "Dorme in macchina. Deciso" },
      { lui: "furbo", t: "Ci manda a dormire il cugino" },
      { lui: "sonno", t: "Perfetto: si addormenta prima" },
      { lui: "estasi", t: "Ha sempre sognato un letto così" }
    ] }
  ],
  scrivi: [
    { id: "vil-s01", q: "Sulla porta della villa c'è un biglietto del fantasma per {P}: «___»",
      riserve: ["Pulisciti le scarpe, ho appena lavato", "Sei in ritardo di duecento anni", "Le ragnatele sono mie, non toccare"] },
    { id: "vil-s02", q: "Il fantasma vuole il letto di {P}. {P} prova a trattare: «___»",
      riserve: ["Facciamo a turno: tu fino alle tre", "Ti lascio il cuscino, non la coperta", "Va bene, ma niente catene dopo le 10"] },
    { id: "vil-s03", q: "Alla seduta spiritica il bicchiere si muove e scrive un messaggio per {P}. Cosa dice?",
      riserve: ["Restituisci le mie pantofole", "Sei tu che hai finito i biscotti?", "Chiudi la finestra, c'è corrente"] },
    { id: "vil-s04", q: "Sotto il ritratto maledetto la targhetta dice: «{P}, ___»",
      riserve: ["cercava il bagno. Da tre secoli", "voleva solo fare una foto", "ha chiesto il Wi-Fi nel 1823"] },
    { id: "vil-s05", q: "{P} chiama il numero «Fantasmi in casa? Chiamaci». Cosa dice al telefono?",
      riserve: ["Ce n'è uno che mi ha finito il latte", "Venite, ma portate le pizze", "Non è urgente: è simpatico"] },
    { id: "vil-s06", q: "{P} mette in vendita la villa stregata. L'annuncio dice: «___»",
      riserve: ["Vendo villa con coinquilino gratis", "Ottima acustica: si sentono le urla", "Risparmio: le luci si accendono da sole"] },
    { id: "vil-s07", q: "Il fantasma si lamenta di {P} con gli altri fantasmi: «Quest{o|a} qui ___»",
      riserve: ["non si spaventa: mi offre il tè", "russa più forte delle mie catene", "mi chiede di stirare le sue camicie"] },
    { id: "vil-s08", q: "{P} trova un passaggio segreto. In fondo c'è una porta con scritto: «___»",
      riserve: ["Bagno. Finalmente.", "Solo per chi ha i biscotti", "Uscita. Ah no, scherzo"] },
    { id: "vil-s09", q: "Uscit{o|a} dalla villa, {P} scrive al gruppo: «Ragazzi, ve lo giuro, ___»",
      riserve: ["il quadro mi ha fatto l'occhiolino", "il fantasma aveva le ciabatte", "ho sentito ridere il lampadario"] },
    { id: "vil-s10", q: "{P} interroga lo specchio magico della villa. Lo specchio risponde: «___»",
      riserve: ["Non ora: sto riflettendo", "Chiedimelo dopo il caffè", "Prima pulisci me, poi ne parliamo"] },
    { id: "vil-s11", q: "{P} sente un rumore e grida nel buio: «___»",
      riserve: ["Se sei un ladro, qui c'è poco", "Se sei un fantasma, chiama prima", "Ho una ciabatta e so usarla"] },
    { id: "vil-s12", q: "{P} scrive la guida turistica della villa: «Da non perdere: ___»",
      riserve: ["la soffitta, se avete la torcia", "il fantasma delle 3, puntualissimo", "la cucina: i biscotti sono ancora buoni"] },
    { id: "vil-s13", q: "Prima di sparire, il fantasma regala a {P} una cosa sola. Cosa?",
      riserve: ["Una catena, usata poco", "Il telecomando del 1950", "Un lenzuolo lavato a 90 gradi"] },
    { id: "vil-s14", q: "{P} risponde al citofono della villa. Una voce dice: «___»",
      riserve: ["Sono io. Apri. Sono dentro", "Pizza per il signor Fantasma", "Ha prenotato per trecento anni?"] },
    { id: "vil-s15", q: "Il gatto nero della villa segue {P} ovunque. Cosa gli sussurra {P}?",
      riserve: ["Se vedi qualcosa, scappa per primo", "Tu sai dove sono i biscotti, vero?", "Non sono io il fantasma, giuro"] },
    { id: "vil-s16", q: "{P} fa la lista per la prossima notte nella villa. Al primo posto: ___",
      riserve: ["una torcia che non si spegne a caso", "un cugino da mandare avanti", "la nonna, che non ha paura di niente"] },
    { id: "vil-s17", q: "Mezzanotte: il pendolo suona tredici colpi. {P} commenta: «___»",
      riserve: ["Questo orologio va avanti", "Tredici? Allora sono in ritardo", "Io qui non ci dormo. Ciao"] },
    { id: "vil-s18", q: "Il fantasma propone uno scambio a {P}: «Tu resti qui e io ___»",
      riserve: ["mi prendo il tuo posto sul divano", "rispondo io ai tuoi messaggi. A tutti", "vado a pranzo da tua mamma"] }
  ],
  disegna: [
    { id: "vil-d01", q: "Disegna su {P} la cornice d'oro e gli occhi che seguono chi passa", su: "ritratto", adesivi: "🖼️👀✨" },
    { id: "vil-d02", q: "Disegna su {P} il fantasma che vive nel quadro: lenzuolo e catene", su: "ritratto", adesivi: "⛓️😴" },
    { id: "vil-d03", q: "Disegna su {P} il look nobile di 300 anni fa: parrucca, colletto e neo", su: "ritratto", adesivi: "🎩🌹📜" },
    { id: "vil-d04", q: "Disegna su {P} le ragnatele, la polvere e il ragno che ci abita da secoli", su: "ritratto", adesivi: "🕷️🐀" },
    { id: "vil-d05", q: "Disegna su {P} denti da vampiro, mantello e ciuffo perfetto", su: "ritratto", adesivi: "🧛🌙🦇" },
    { id: "vil-d06", q: "Disegna su {P} la divisa della servitù: candelabro e sopracciglio alzato", su: "ritratto", adesivi: "🎩🛎️" },
    { id: "vil-d07", q: "Disegna la stanza di {P} nella villa, arredata dal fantasma", su: "scena", adesivi: "🛏️⛓️🕰️🧸" },
    { id: "vil-d08", q: "Disegna la festa dei fantasmi nel salone, con {P} ospite d'onore", su: "scena", adesivi: "🎉🎻🍰🎈" },
    { id: "vil-d09", q: "Disegna la villa dopo che {P} l'ha trasformata in un bed & breakfast", su: "scena", adesivi: "🛎️🥐⭐🌷" },
    { id: "vil-d10", q: "Disegna la trappola per fantasmi costruita da {P}", su: "scena", adesivi: "🧲🪤🍪🧺" },
    { id: "vil-d11", q: "Disegna il nascondiglio di {P} durante la caccia al fantasma", su: "scena", adesivi: "🛋️🧺🪴🔦" },
    { id: "vil-d12", q: "Disegna su {P} i capelli dopo la notte nella villa: dritti dalla paura", su: "ritratto", adesivi: "⚡💫🕷️🌪️" }
  ],
  chi: [
    { id: "vil-c01", q: "Chi di noi scambierebbe un'armatura per un fantasma e la sfiderebbe a duello con l'ombrello?", titolo: "Duello con l'armatura" },
    { id: "vil-c02", q: "Chi di noi proverebbe a fare amicizia col fantasma chiedendogli come si chiama e da dove viene?", titolo: "Tè col fantasma" },
    { id: "vil-c03", q: "Chi di noi, sentendo un rumore in soffitta, manderebbe avanti gli altri «per coprirli alle spalle»?", titolo: "Retroguardia coraggiosa" },
    { id: "vil-c04", q: "Chi di noi si spaventerebbe del proprio riflesso nello specchio impolverato del corridoio?", titolo: "Paura dello specchio" },
    { id: "vil-c05", q: "Chi di noi, nella villa, frugherebbe nei cassetti del fantasma in cerca di gioielli?", titolo: "Ficcanaso dell'aldilà" },
    { id: "vil-c06", q: "Chi di noi giurerebbe che il cigolio era «solo il legno che si assesta», mentre trema come una foglia?", titolo: "Il legno che si assesta" },
    { id: "vil-c07", q: "Chi di noi, per farsi coraggio, canterebbe a squarciagola attraversando il corridoio buio?", titolo: "Coraggio a squarciagola" },
    { id: "vil-c08", q: "Chi di noi passerebbe la notte nella villa a girare un video per i social, con la voce da documentario?", titolo: "Acchiappafantasmi da like" },
    { id: "vil-c09", q: "Chi di noi si offrirebbe di cucinare per tutti nella villa e farebbe una minestra più paurosa dei fantasmi?", titolo: "Minestra da brivido" },
    { id: "vil-c10", q: "Chi di noi, col fantasma alle calcagna, si fermerebbe a metà corridoio a chiedergli scusa?", titolo: "Scusi, signor fantasma" },
    { id: "vil-c11", q: "Chi di noi terrebbe per mano chi ha paura nel buio della villa, senza dirlo mai a nessuno?", titolo: "Mano sicura nel buio" },
    { id: "vil-c12", q: "Chi di noi leggerebbe ad alta voce la formula magica del libro polveroso, «tanto per vedere»?", titolo: "Tanto per vedere" },
    { id: "vil-c13", q: "Chi di noi, dopo la notte nella villa, dormirebbe con la luce accesa per un mese, giurando di non avere paura?", titolo: "Lampadina sempre accesa" },
    { id: "vil-c14", q: "Chi di noi farebbe urlare tutti, girando di notte con la maschera di bellezza in faccia?", titolo: "Il fantasma eri tu" }
  ]
});

/* ---------------------------------------------------------
   🏝️ SU UN'ISOLA DESERTA
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "isola", cod: "iso", nome: "Su un'isola deserta", emoji: "🏝️",
  adesivi: "🌴🥥🪵🔥🐚🦀🐢🍌⛵📜🪁🦜",
  entrata: [
    "Naufragio confermato. Viveri: un cocco. Sotto torchio: {P}.",
    "Sull'isola: mare blu, sabbia bianca, zero pizzerie. Tocca a {P}.",
    "Giorno 1 sull'isola. {P} ha già chiesto dov'è il bar della spiaggia."
  ],
  immagini: [
    { id: "iso-i01", q: "Chi naufraga sull'isola insieme a {P}?", carte: [
      { chi: "cuoco", faccia: "triste", t: "Un cuoco. Senza pentole" },
      { chi: "influencer", faccia: "finto", piu: { mano: "telefono" }, t: "Cerca il Wi-Fi sotto ogni sasso" },
      { chi: "prof", faccia: "pensieroso", piu: { mano: "libro" }, t: "Lezioni di sopravvivenza (lette)" },
      { chi: "nonna", faccia: "felice", t: "Una nonna che ha salvato il ragù" }
    ] },
    { id: "iso-i02", q: "Dopo tre settimane, chi arriva a salvare {P}?", carte: [
      { chi: "capitano", faccia: "sorpreso", t: "Un capitano: si è perso pure lui" },
      { chi: "pescatore", faccia: "indifferente", t: "Un pescatore che passava di lì" },
      { chi: "bagnino", faccia: "arrabbiato", t: "Il bagnino: «Fuori dall'acqua!»" },
      { chi: "mamma", faccia: "arrabbiato", t: "La mamma, in pedalò" }
    ] },
    { id: "iso-i03", q: "Chi abita nella capanna accanto a quella di {P}?", carte: [
      { chi: "pirata", faccia: "sonno", t: "Un pirata in pensione" },
      { chi: "vicino", faccia: "arrabbiato", t: "Il vicino: il fumo gli dà fastidio" },
      { chi: "turista", faccia: "felice", t: "Un turista: crede sia un resort" },
      { chi: "dj", faccia: "esulta", t: "Un dj: ogni sera festa coi granchi" }
    ] },
    { id: "iso-i04", q: "{P} va dall'altra parte dell'isola. Chi incontra?", carte: [
      { chi: "re", faccia: "furbo", t: "Il re dell'isola: vuole l'inchino" },
      { chi: "corriere", faccia: "indifferente", t: "Un corriere: «Firmi qui»" },
      { chi: "scout", faccia: "esulta", t: "Uno scout: è lì per il distintivo" },
      { chi: "vichingo", faccia: "sorpreso", t: "Un vichingo: ha sbagliato mare" }
    ] },
    { id: "iso-i05", q: "Tornat{o|a} a casa, chi intervista {P} sul naufragio?", carte: [
      { chi: "presentatore", faccia: "estasi", t: "Ti fa piangere in prima serata" },
      { chi: "presentatore", f: "d", faccia: "sonno", t: "Ti chiede solo cosa mangiavi" },
      { chi: "cugino", faccia: "furbo", piu: { mano: "telefono" }, t: "Il cugino, in diretta dal telefono" },
      { chi: "mamma", faccia: "arrabbiato", t: "La mamma: «La crema l'avevi?»" }
    ] },
    { id: "iso-i06", q: "Chi sale sulla zattera insieme a {P}?", carte: [
      { chi: "capitano", faccia: "furbo", t: "Comanda, ma non sa remare" },
      { chi: "nonno", faccia: "felice", t: "Rema da solo e canta" },
      { chi: "bimbo", faccia: "esulta", t: "Vuole fare il bagno ogni 5 minuti" },
      { chi: "turista", faccia: "sonno", t: "Dorme col remo in mano" }
    ] },
    { id: "iso-i07", q: "Chi arriva a nuoto sull'isola di {P}, come se niente fosse?", carte: [
      { chi: "clown", faccia: "sorpreso", t: "Un clown: «Dov'è il circo?»" },
      { chi: "mago", faccia: "imbarazzo", t: "Un mago: il trucco è andato male" },
      { chi: "impiegato", faccia: "finto", piu: { collo: "cravatta" }, t: "Un impiegato: «Sono in ferie?»" },
      { chi: "supereroe", faccia: "pensieroso", t: "Un supereroe: ha perso il volo" }
    ] },
    { id: "iso-i08", q: "Una nave da crociera passa davanti all'isola e non si ferma. Chi saluta {P} dal ponte?", carte: [
      { chi: "animatore", faccia: "esulta", t: "L'animatore: fa ballare il ponte" },
      { chi: "capitano", faccia: "felice", t: "Il capitano saluta col cappello" },
      { chi: "cantante", f: "d", faccia: "estasi", piu: { mano: "microfono" }, t: "Una cantante: «Questa è per te!»" },
      { chi: "cameriere", faccia: "furbo", t: "Un cameriere ti mostra il buffet" }
    ] },
    { id: "iso-i09", q: "Chi trova il messaggio nella bottiglia lanciato da {P}?", carte: [
      { chi: "nonna", faccia: "felice", t: "Una nonna: ti manda una ricetta" },
      { chi: "bimbo", faccia: "linguaccia", t: "Un bimbo: ci disegna sopra" },
      { chi: "pescatore", faccia: "indifferente", t: "Un pescatore: lo ributta in mare" },
      { chi: "prof", faccia: "pensieroso", t: "Un prof: ti corregge gli errori" }
    ] },
    { id: "iso-i10", q: "La marea si porta via le ciabatte di {P}, le uniche dell'isola. Cosa fa {P}?", carte: [
      { e: "🏊🩴", t: "Nuota mezz'ora per riprenderle" },
      { e: "🍃👣", t: "Se ne fa un paio con le foglie" },
      { e: "🦶😎", t: "A piedi nudi per sempre, ormai" },
      { e: "🦀👉", t: "Accusa il granchio. In pubblico" }
    ] },
    { id: "iso-i11", q: "Sull'isola c'è un solo albero di banane. Cosa fa {P}?", carte: [
      { e: "🍌➗", t: "Le divide in parti uguali" },
      { e: "🍌🕳️", t: "Ne nasconde metà sotto la sabbia" },
      { e: "🪧🍌", t: "Ci appende un cartello: «Privato»" },
      { e: "🍌😋", t: "Le mangia tutte il primo giorno" }
    ] },
    { id: "iso-i12", q: "Dieci giorni senza un piatto di pasta. Cosa fa {P}?", carte: [
      { e: "🌿🍝", t: "Spaghetti di alghe" },
      { e: "🍕✏️", t: "Disegna una pizza e la guarda" },
      { e: "🐟🥥", t: "Pesce e cocco, e sta benissimo" },
      { e: "😤", t: "Litiga con tutti per tutto" }
    ] },
    { id: "iso-i13", q: "Sulla spiaggia {P} trova una radio rotta. Cosa ne fa?", carte: [
      { e: "🔧📻", t: "Passa giorni a ripararla" },
      { e: "🪑📻", t: "La usa come sgabello" },
      { e: "🎧🎶", t: "Finge che funzioni e fa il dj" },
      { e: "🐟🪤", t: "Ne fa una trappola per pesci" }
    ] },
    { id: "iso-i14", q: "Sull'isola bisogna dividersi i compiti. Cosa prende {P}?", carte: [
      { e: "📣👑", t: "Il comando: e basta" },
      { e: "🎣", t: "La pesca, lontano da tutti" },
      { e: "🍳", t: "La cucina: così assaggia tutto" },
      { e: "🪵☕", t: "La legna, con molte pause" }
    ] },
    { id: "iso-i15", q: "Dopo una settimana sull'isola, con chi comincia a parlare {P}?", carte: [
      { e: "🥥✏️", t: "Un cocco con la faccia disegnata" },
      { e: "🦀🦀", t: "I granchi, ognuno col suo nome" },
      { e: "🗣️", t: "Ad alta voce, e si dà ragione" },
      { e: "🌊🌅", t: "Il mare, ogni sera al tramonto" }
    ] },
    { id: "iso-i16", q: "Una tartaruga gigante passa sulla spiaggia. Cosa fa {P}?", carte: [
      { e: "🐢👣", t: "La segue per vedere dove va" },
      { e: "🐢👋", t: "La chiama Gina e la saluta sempre" },
      { e: "🐢📜", t: "Le affida un messaggio da portare" },
      { e: "🐢🏁", t: "La sfida a una gara. E perde" }
    ] },
    { id: "iso-i17", q: "Il mare porta a riva una cassa piena di vestiti eleganti. Cosa fa {P}?", carte: [
      { e: "🤵🥥", t: "Abito da sera per la cena al cocco" },
      { e: "⛺👗", t: "Ci fa una tenda" },
      { e: "🧥🧥", t: "Se li mette tutti insieme" },
      { e: "💃🏖️", t: "Sfilata sulla spiaggia" }
    ] },
    { id: "iso-i18", q: "Sull'isola si trovano tre uova gigantesche. Cosa fa {P}?", carte: [
      { e: "🍳", t: "Frittata per tutti" },
      { e: "🥚🔥", t: "Le cova, per vedere cosa nasce" },
      { e: "🦖😰", t: "Si allontana: la mamma sarà enorme" },
      { e: "🥚🖌️", t: "Ci disegna sopra le nostre facce" }
    ] },
    { id: "iso-i19", q: "Dopo un mese si scopre che dietro la collina c'è un resort a cinque stelle. Cosa fa {P}?", carte: [
      { e: "🥐🏨", t: "Ci va subito a fare colazione" },
      { e: "🤫🏨", t: "Ci va di nascosto, senza dirlo" },
      { e: "🙅🏝️", t: "Non ci va: ormai è un'avventura" },
      { e: "😡📅", t: "Si arrabbia per il mese perso" }
    ] },
    { id: "iso-i20", q: "Arriva la nave dei soccorsi, ma c'è posto solo per metà del gruppo. Cosa fa {P}?", carte: [
      { e: "🚢👋", t: "Sale subito: «Vi mando aiuto»" },
      { e: "🙏", t: "Resta e fa salire gli altri" },
      { e: "🎲", t: "Propone di tirare a sorte" },
      { e: "🤝", t: "Sale solo col migliore amico" }
    ] },
    { id: "iso-i21", q: "Arriva un altro naufrago e si costruisce una capanna più bella di quella di {P}. Cosa fa {P}?", carte: [
      { e: "🛖📏", t: "Allunga la sua di un metro. Subito" },
      { e: "🍌🤝", t: "Lavora per lui, a paga di banane" },
      { e: "😤🪧", t: "Cartello: «Capanna abusiva»" },
      { e: "🛖🏃", t: "Ci si trasferisce: «Siamo soci»" }
    ] },
    { id: "iso-i22", q: "Dopo un anno sull'isola, {P} torna a casa. Qual è la prima cosa che fa?", carte: [
      { e: "🍕", t: "Una pizza intera, subito" },
      { e: "📱🔔", t: "Accende il telefono: 4.000 avvisi" },
      { e: "🤗", t: "Corre ad abbracciare la mamma" },
      { e: "🚿⏳", t: "Doccia di tre ore" }
    ] },
    { id: "iso-i23", q: "Cosa trova {P} sulla spiaggia, e lo tratta come un tesoro?", carte: [
      { e: "🧴", t: "Un flacone di shampoo, mezzo pieno" },
      { e: "🐚", t: "Una conchiglia rosa: «È mia»" },
      { e: "🕶️", t: "Occhiali da sole senza una lente" },
      { e: "🦆", t: "Una paperella di gomma" }
    ] },
    { id: "iso-i24", q: "Che bandiera pianta {P} sulla cima dell'isola?", carte: [
      { e: "🍕🚩", t: "Una pizza su un palo" },
      { e: "🧦", t: "Un calzino, il più pulito" },
      { e: "🏳️", t: "Bandiera bianca, subito" },
      { e: "🩲", t: "Le mutande: le sue migliori" }
    ] },
    { id: "iso-i25", q: "Cosa usa {P} come cuscino sull'isola?", carte: [
      { e: "🥥", t: "Una noce di cocco, durissima" },
      { e: "🦺", t: "Il giubbotto salvagente" },
      { e: "👟", t: "Le scarpe, calzini compresi" },
      { e: "🐢", t: "Una tartaruga paziente" }
    ] },
    { id: "iso-i26", q: "Dal naufragio, cosa salva {P} per primo?", carte: [
      { e: "🔌", t: "Il caricabatterie (senza presa)" },
      { e: "🧴☀️", t: "La crema solare protezione 50" },
      { e: "🍝", t: "Un pacco di spaghetti" },
      { e: "🧸", t: "Il peluche di sempre" }
    ] },
    { id: "iso-i27", q: "Che faccia fa {P} quando apre finalmente il cocco, dopo tre ore, e dentro è vuoto?", carte: [
      { lui: "arrabbiato", t: "Lo lancia in mare. Poi lo rivuole" },
      { lui: "triste", t: "Lo abbraccia lo stesso" },
      { lui: "indifferente", t: "Ne apre un altro: ha tempo" },
      { lui: "sorpreso", t: "Chiama tutti a vedere il mistero" }
    ] },
    { id: "iso-i28", q: "Che faccia fa {P} quando si sveglia con un granchio attaccato all'alluce?", carte: [
      { lui: "terrore", t: "Urla: lo sentono in Sardegna" },
      { lui: "arrabbiato", t: "Dichiara guerra ai granchi" },
      { lui: "sonno", t: "Si rigira, granchio compreso" },
      { lui: "sorpreso", t: "«Buongiorno anche a te»" }
    ] },
    { id: "iso-i29", q: "Che faccia fa {P} quando una scimmia scappa con i suoi occhiali da sole?", carte: [
      { lui: "arrabbiato", t: "La insegue su per la palma" },
      { lui: "linguaccia", t: "Le fa le smorfie dal basso" },
      { lui: "triste", t: "Strizza gli occhi per sempre" },
      { lui: "furbo", t: "Le offre una banana: scambio" }
    ] },
    { id: "iso-i30", q: "Che faccia fa {P} quando piove per la prima volta sulla capanna appena finita?", carte: [
      { lui: "triste", t: "Saluta la capanna che se ne va" },
      { lui: "arrabbiato", t: "Litiga con la nuvola" },
      { lui: "esulta", t: "Doccia gratis, finalmente" },
      { lui: "indifferente", t: "Sotto una foglia, aspetta e basta" }
    ] }
  ],
  scrivi: [
    { id: "iso-s01", q: "Dopo un mese sull'isola, {P} dà un consiglio ai futuri naufraghi: «___»",
      riserve: ["Il cocco non si apre coi denti", "Fate subito amicizia coi granchi", "Portatevi un divano"] },
    { id: "iso-s02", q: "Messaggio di {P} nella bottiglia: «Mamma, sto bene. L'unica cosa che mi manca è ___»",
      riserve: ["il tuo ragù della domenica", "il divano con la mia forma", "litigare con mio fratello"] },
    { id: "iso-s03", q: "{P} spiega a tutti perché la barca è affondata: «___»",
      riserve: ["Volevo solo guidare un pochino", "Mi stavo facendo un selfie", "Ho provato un'inversione a U"] },
    { id: "iso-s04", q: "{P} usa un cocco come telefono e chiama aiuto. Cosa dice?",
      riserve: ["Pronto? Mi passi la mamma?", "Una pizza. Indirizzo: boh, un'isola", "Aspetto in linea. Tanto ho tempo"] },
    { id: "iso-s05", q: "Il pappagallo dell'isola ripete tutto il giorno una frase di {P}. Quale?",
      riserve: ["Chi ha mangiato l'ultima banana?", "Cinque minuti e mi alzo", "Io qui sono il capo, eh"] },
    { id: "iso-s06", q: "{P} disegna la mappa dell'isola e le dà un nome. Quale?",
      riserve: ["Isola del Pisolino Eterno", "Cocco Beach Resort (zero stelle)", "Isola Dove Nessuno Mi Chiama"] },
    { id: "iso-s07", q: "{P} apre il «ristorante» dell'isola. Piatto del giorno: ___",
      riserve: ["granchio offeso con contorno di alga", "cocco al cocco, su letto di cocco", "banana flambé (per sbaglio)"] },
    { id: "iso-s08", q: "{P} prova ad accendere il fuoco da tre ore. Al bastoncino dice: «___»",
      riserve: ["Ti prego, fallo per la mamma", "Se non ti accendi, ceno crudo", "Sei l'ultimo legnetto dell'isola, sai?"] },
    { id: "iso-s09", q: "A {P} arriva una bottiglia da un altro naufrago. Dentro c'è scritto: «___»",
      riserve: ["Hai un apriscatole? Io ho i fagioli", "Anche tu senza Wi-Fi? Scrivimi", "Sono sull'isola di fronte. Ciao!"] },
    { id: "iso-s10", q: "{P} vede una nave che si avvicina e prepara il discorso per i soccorritori: «___»",
      riserve: ["Finalmente! Avete del parmigiano?", "Non siete voi. Aspettavo la pizza", "Un attimo, finisco l'abbronzatura"] },
    { id: "iso-s11", q: "{P} apre un negozio di souvenir sull'isola. Il più venduto è ___",
      riserve: ["un cocco con scritto «Ciao»", "sabbia in bottiglia, tappo di alga", "la foto col granchio, posa a scelta"] },
    { id: "iso-s12", q: "Molti anni dopo, {P} racconta il naufragio ai nipoti, esagerando un po': «___»",
      riserve: ["Lottavo coi granchi ogni giorno", "Il mare era alto 30 metri. Forse 2", "Ho sconfitto uno squalo. Era un tonno"] },
    { id: "iso-s13", q: "Arriva un turista in canoa e chiede a {P} la strada per l'hotel. {P} risponde: «___»",
      riserve: ["Hotel? Io vivo qui da sei mesi", "Mi porti con te e ti accompagno", "Sempre dritto, a sinistra al cocco"] },
    { id: "iso-s14", q: "Per entrare nella capanna di {P} serve la parola d'ordine. Qual è?",
      riserve: ["Il cocco più bello è il tuo", "Granchio amico, granchio buono", "Piedi lavati, giuro"] },
    { id: "iso-s15", q: "Il giorno che se ne va, {P} lascia un biglietto all'isola: «___»",
      riserve: ["Grazie per la sabbia ovunque", "Scusa per la palma: era lì", "Ti scriverei, ma non ho il francobollo"] },
    { id: "iso-s16", q: "Ogni giorno un gabbiano ruba il pesce a {P}. Oggi {P} gli urla: «___»",
      riserve: ["Almeno lasciami la lisca!", "Ti conosco: sei quello di ieri", "Facciamo società: tu peschi, io cucino"] },
    { id: "iso-s17", q: "{P} ordina al cameriere immaginario dell'isola: «Per me ___»",
      riserve: ["un cocco, ma senza cocco", "il solito: niente, ben cotto", "quello che ha preso il granchio"] }
  ],
  disegna: [
    { id: "iso-d01", q: "Disegna la capanna di {P} dopo un mese sull'isola", su: "scena", adesivi: "🛖🪑🛁🍍" },
    { id: "iso-d02", q: "Disegna la trappola di {P} per pescare senza bagnarsi", su: "scena", adesivi: "🎣🐟🪝🪵🧺" },
    { id: "iso-d03", q: "Disegna gli amici che {P} si fa sull'isola: granchi, tartarughe e…", su: "scena", adesivi: "🐒🐬🐙🦩" },
    { id: "iso-d04", q: "Disegna il tesoro che {P} trova scavando sotto la palma", su: "scena", adesivi: "👑🪙🧦🍝" },
    { id: "iso-d05", q: "Disegna la nave dei sogni che arriva a salvare {P}", su: "scena", adesivi: "🚢🍕🎉🛟" },
    { id: "iso-d06", q: "Disegna la piscina che {P} scava in riva al mare", su: "scena", adesivi: "🏊🪣🛟🌊" },
    { id: "iso-d07", q: "Disegna su {P} la protezione contro i cocchi che cadono dalle palme", su: "ritratto", adesivi: "🥥⛑️🪵🍃" },
    { id: "iso-d08", q: "Disegna su {P} il pappagallo che vive sulla sua testa, col nido", su: "ritratto", adesivi: "🪺🪶🍌" },
    { id: "iso-d09", q: "Disegna su {P} occhiali, orologio e borsa fatti a mano sull'isola", su: "ritratto", adesivi: "🌺🪢🍂" },
    { id: "iso-d10", q: "Disegna su {P} il costume da Capo dei Granchi, con le chele finte", su: "ritratto", adesivi: "🦞👑✨" },
    { id: "iso-d11", q: "Disegna su {P} l'attrezzatura per salire sulla palma a prendere i cocchi", su: "ritratto", adesivi: "🪢🧤🐒🪜" },
    { id: "iso-d12", q: "Disegna su {P} la maschera da sub fatta con due gusci di cocco", su: "ritratto", adesivi: "🥥🐠🫧🐙" }
  ],
  chi: [
    { id: "iso-c01", q: "Chi di noi scriverebbe «AIUTO» sulla sabbia così piccolo che non si legge neanche dalla palma?", titolo: "SOS in miniatura" },
    { id: "iso-c02", q: "Chi di noi, sull'isola, prenderebbe il comando e scriverebbe le leggi sulla corteccia?", titolo: "Trono di palma" },
    { id: "iso-c03", q: "Chi di noi passerebbe il naufragio a prendere il sole, «tanto prima o poi passa una nave»?", titolo: "Naufragio in vacanza" },
    { id: "iso-c04", q: "Chi di noi andrebbe a pescare con la lancia e tornerebbe trionfante con una ciabatta?", titolo: "Pesca di ciabatte" },
    { id: "iso-c05", q: "Chi di noi conterebbe i giorni con le tacche sulla palma… e perderebbe il conto al quarto?", titolo: "Quattro tacche e basta" },
    { id: "iso-c06", q: "Chi di noi terrebbe su il morale di tutti con lo spettacolo dei burattini fatti coi cocchi, ogni sera?", titolo: "Burattini di cocco" },
    { id: "iso-c07", q: "Chi di noi, sull'isola, dividerebbe l'ultimo cocco con tutti, anche con chi non ha fatto niente?", titolo: "Cuore di cocco" },
    { id: "iso-c08", q: "Chi di noi addestrerebbe una scimmia a portare le banane… e finirebbe a portarle alla scimmia?", titolo: "Al servizio della scimmia" },
    { id: "iso-c09", q: "Chi di noi si costruirebbe un'amaca con le liane il primo giorno e non scenderebbe più?", titolo: "Residente dell'amaca" },
    { id: "iso-c10", q: "Chi di noi costruirebbe una zattera e la vedrebbe affondare dopo due metri, davanti a tutti?", titolo: "Zattera da due metri" },
    { id: "iso-c11", q: "Chi di noi proverebbe a fare la pizza su una pietra rovente, con farina di cocco?", titolo: "Pizza al cocco" },
    { id: "iso-c12", q: "Chi di noi, dopo l'isola, parlerebbe come un pirata per altri sei mesi?", titolo: "Pirata di ritorno" },
    { id: "iso-c13", q: "Chi di noi si sveglierebbe prima di tutti, ogni mattina, per tenere acceso il fuoco?", titolo: "Fuoco sempre acceso" },
    { id: "iso-c14", q: "Chi di noi, dopo due giorni sull'isola, sentirebbe la nostalgia del traffico e dei clacson?", titolo: "Nostalgia del clacson" }
  ]
});

/* =========================================================
   DATI — «Chi di Noi?», autore 2: La vita all'italiana
   Posti: matrimonio, pranzo, condominio, sagra, pronto.
   {P} = nome di chi è sotto torchio. {o|a} = finale maschile|femminile secondo il suo avatar.
   ========================================================= */
window.SG_CHIDINOI = window.SG_CHIDINOI || { posti: [], comuni: [] };

/* ---------------------------------------------------------
   💒 AL MATRIMONIO DEL CUGINO
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "matrimonio", cod: "mat", nome: "Al matrimonio del cugino", emoji: "💒",
  adesivi: "🎩🎀💐👗💍🍰🕺💃📸🎻🕊️🍬",
  entrata: [
    "Matrimonio del cugino. Tavolo 14, quello vicino alle casse: {P}.",
    "Gli sposi sono in ritardo di un'ora. Intanto tutti guardano {P}.",
    "Dodici portate, tre zie, un fotografo. E {P} sotto torchio."
  ],
  immagini: [
    { id: "mat-i01", q: "Al matrimonio, chi siede accanto a {P} per sei ore di pranzo?", carte: [
      { chi: "zia", faccia: "furbo", t: "Commenta i vestiti di tutti" },
      { chi: "nonno", faccia: "sonno", t: "Dorme dall'antipasto al dolce" },
      { chi: "bimbo", faccia: "linguaccia", t: "Ti ruba i confetti dal piatto" },
      { chi: "cugino", faccia: "indifferente", t: "Guarda la partita, col volume" }
    ] },
    { id: "mat-i02", q: "Gli sposi passano per la foto al tavolo proprio mentre {P} ha la bocca piena. Cosa fa?", carte: [
      { e: "🗿📸", t: "Sorride a bocca chiusa, una statua" },
      { e: "😵📸", t: "Ingoia tutto e tossisce in foto" },
      { e: "📜🙈", t: "Si copre la faccia col menù" },
      { e: "😋👍", t: "Mastica e fa il pollice in su" }
    ] },
    { id: "mat-i03", q: "Che faccia fa {P} quando lo sposo annuncia: «Ora le foto di quando eravamo piccoli. Sono 400»?", carte: [
      { lui: "sonno", t: "Si sveglia alla numero 380" },
      { lui: "finto", t: "«Che teneri!» (alla 150esima)" },
      { lui: "esulta", t: "Spera di essere in almeno 50" },
      { lui: "terrore", t: "Sa che c'è quella al mare" }
    ] },
    { id: "mat-i04", q: "Al buffet, chi attacca bottone con {P} e va avanti per un'ora intera?", carte: [
      { chi: "zio", faccia: "felice", t: "Racconta il suo matrimonio del '79" },
      { chi: "prof", faccia: "pensieroso", t: "Il prof delle medie: «E i verbi?»" },
      { chi: "cameriere", faccia: "estasi", t: "Il cameriere: sogna di cantare" },
      { chi: "vicino", faccia: "sorpreso", t: "Il vicino della nonna: sa tutto" }
    ] },
    { id: "mat-i05", q: "Il fotografo chiama tutti per la foto di gruppo. Dov'è {P}?", carte: [
      { e: "🎯📸", t: "In prima fila, al centro" },
      { e: "🫣🧍", t: "Dietro lo zio più alto, invisibile" },
      { e: "🐰✌️", t: "Orecchie da coniglio allo zio" },
      { e: "🚽⏳", t: "In bagno: non c'è in nessuna foto" }
    ] },
    { id: "mat-i06", q: "Il DJ cerca un volontario per il gioco delle scarpe. Chi spinge {P} al centro della pista?", carte: [
      { chi: "sposo", f: "d", faccia: "esulta", t: "La sposa in persona, col velo" },
      { chi: "nonna", faccia: "furbo", t: "La nonna, con una spinta da rugby" },
      { chi: "cugino", faccia: "linguaccia", t: "Il cugino, per vendetta" },
      { chi: "animatore", faccia: "felice", t: "L'animatore: «Un applauso!»" }
    ] },
    { id: "mat-i07", q: "Dopo il sorbetto, il cameriere annuncia: «Ora arrivano altre cinque portate». E {P}?", carte: [
      { e: "💪🍽️", t: "Esulta: era il riscaldamento" },
      { e: "⏸️😮‍💨", t: "Chiede mezz'ora di pausa" },
      { e: "🚶🌳", t: "Fa due giri del giardino" },
      { e: "🍬😋", t: "Ha finito i confetti del tavolo" }
    ] },
    { id: "mat-i08", q: "Che faccia fa {P} quando scopre che il menù del matrimonio è tutto pesce crudo?", carte: [
      { lui: "disgusto", t: "Chiede di nascosto una pasta" },
      { lui: "estasi", t: "Ordina un altro vassoio" },
      { lui: "finto", t: "«Squisito!» e lo nasconde" },
      { lui: "pensieroso", t: "Cerca la pizzeria più vicina" }
    ] },
    { id: "mat-i09", q: "Sono le 4 di notte. Chi riporta a casa {P} dopo il matrimonio?", carte: [
      { chi: "zio", faccia: "esulta", t: "Lo zio, con la Panda e la musica" },
      { chi: "nonna", faccia: "felice", t: "La nonna: sveglia e lucidissima" },
      { chi: "autista", faccia: "sonno", t: "Un tassista che sa già tutto" },
      { chi: "cugino", faccia: "pensieroso", t: "Il cugino: sbaglia strada 3 volte" }
    ] },
    { id: "mat-i10", q: "Lo sposo lascia a {P} la musica della festa per mezz'ora. Cosa succede?", carte: [
      { e: "📼🕺", t: "Solo anni '80, senza pietà" },
      { e: "💃🎧", t: "Le sue canzoni, pista vuota" },
      { e: "📝🎶", t: "Gira i tavoli a prendere richieste" },
      { e: "📻🍰", t: "Lascia la radio e va al buffet" }
    ] },
    { id: "mat-i11", q: "Arriva un ospite che nessuno conosce e si siede proprio accanto a {P}. Chi è?", carte: [
      { chi: "re", faccia: "indifferente", t: "Un re. Invitato da chi?" },
      { chi: "babbo", faccia: "felice", t: "Babbo Natale, a giugno" },
      { chi: "vigile", faccia: "arrabbiato", t: "«Chi ha parcheggiato sul prato?»" },
      { chi: "mago", faccia: "furbo", t: "Un mago: fa sparire i confetti" }
    ] },
    { id: "mat-i12", q: "Proprio durante il «sì», il telefono di {P} squilla a tutto volume. Cosa fa {P}?", carte: [
      { e: "📵😠", t: "Lo spegne e guarda male il vicino" },
      { e: "🤫📞", t: "Risponde: «Non posso, c'è il sì!»" },
      { e: "👉🙄", t: "Fa finta che sia di un altro" },
      { e: "🎶🙂", t: "Lo lascia: è una bella canzone" }
    ] },
    { id: "mat-i13", q: "{P} va un attimo in bagno. Al ritorno, chi si è preso il suo posto a tavola?", carte: [
      { chi: "nonno", faccia: "felice", t: "Il nonno: ha mangiato anche il suo" },
      { chi: "bimbo", faccia: "linguaccia", t: "Un bimbo, col suo cappello" },
      { chi: "sposo", f: "d", faccia: "sonno", t: "La sposa: «Mi riposo un attimo»" },
      { chi: "cameriere", faccia: "estasi", t: "Un cameriere in pausa pranzo" }
    ] },
    { id: "mat-i14", q: "Il cameriere rovescia il sugo sulla giacca di {P}. Cosa fa {P}?", carte: [
      { e: "😂👔", t: "Ride e resta in camicia" },
      { e: "🧂😤", t: "Strofina col sale per mezz'ora" },
      { e: "🗣️👨‍🍳", t: "Vuole parlare col capo sala" },
      { e: "🏠😳", t: "Se ne accorge solo a casa" }
    ] },
    { id: "mat-i15", q: "Che faccia fa {P} quando l'animatore urla: «Tutti in pista per il ballo di gruppo!»?", carte: [
      { lui: "esulta", t: "In pista prima dell'annuncio" },
      { lui: "terrore", t: "Corre a chiudersi in bagno" },
      { lui: "finto", t: "Ci va, ma muove solo un piede" },
      { lui: "furbo", t: "Ci manda la zia al suo posto" }
    ] },
    { id: "mat-i16", q: "Al buffet dei dolci, chi si prende l'ultimo cannolo un secondo prima di {P}?", carte: [
      { chi: "nonna", faccia: "furbo", t: "La nonna: «Era tuo? Peccato»" },
      { chi: "bimbo", faccia: "esulta", t: "Un bimbo, velocissimo" },
      { chi: "sposo", faccia: "linguaccia", t: "Lo sposo: «Oggi decido io»" },
      { chi: "cameriere", faccia: "indifferente", t: "Il cameriere: lo porta in cucina" }
    ] },
    { id: "mat-i17", q: "La bomboniera è una statuina di porcellana alta mezzo metro. Che fine le fa fare {P}?", carte: [
      { e: "🗿🍽️", t: "«Dimenticata» sul tavolo" },
      { e: "🛋️✨", t: "In bella vista in salotto" },
      { e: "🎁🎄", t: "Regalata a Natale alla zia" },
      { e: "🔄🍬", t: "Chiede di cambiarla coi confetti" }
    ] },
    { id: "mat-i18", q: "La sposa lancia il bouquet e il mazzo arriva dritto addosso a {P}. Cosa fa {P}?", carte: [
      { e: "🙌💐", t: "Lo prende al volo, braccia su" },
      { e: "🏃💐", t: "Lo schiva come la palla avvelenata" },
      { e: "🤝💐", t: "Lo passa subito a chi ha accanto" },
      { e: "😵💐", t: "Finge di svenire per l'emozione" }
    ] },
    { id: "mat-i19", q: "Nel discorso, lo sposo ringrazia tutti per nome… tranne {P}. Cosa fa {P}?", carte: [
      { e: "😅🤷", t: "Ride e fa finta di niente" },
      { e: "🎤🙋", t: "Prende il microfono e si ringrazia" },
      { e: "📅😤", t: "Glielo ricorderà per dieci anni" },
      { e: "🍰🙉", t: "Non sente: è al buffet dei dolci" }
    ] },
    { id: "mat-i20", q: "Sul maxischermo degli sposi compare {P} a sette anni, col costume da ape di Carnevale. Cosa fa?", carte: [
      { e: "🙇🐝", t: "Si alza e fa l'inchino" },
      { e: "🙈🧻", t: "Sparisce dentro il tovagliolo" },
      { e: "🕵️🐝", t: "Cerca chi ha dato la foto" },
      { e: "📩🐝", t: "Ne chiede subito una copia" }
    ] },
    { id: "mat-i21", q: "Lo sposo ha lasciato le fedi a casa e manda {P} a prenderle. Cosa succede?", carte: [
      { e: "🏃💍", t: "Corre e torna in un quarto d'ora" },
      { e: "🍟💍", t: "Propone due anelli di patatine" },
      { e: "🍝⏩", t: "«Intanto cominciamo dal pranzo»" },
      { e: "☕🚗", t: "Va, ma si ferma per un caffè" }
    ] },
    { id: "mat-i22", q: "Che faccia fa {P} quando vede che al tavolo accanto le porzioni sono il doppio?", carte: [
      { lui: "arrabbiato", t: "Chiede il cambio di tavolo" },
      { lui: "indifferente", t: "Tanto ha già fatto tre bis" },
      { lui: "furbo", t: "Si sposta lì per il dolce" },
      { lui: "triste", t: "Fissa il loro piatto, in silenzio" }
    ] },
    { id: "mat-i23", q: "La sposa affida a {P} lo strascico del vestito per tutta la cerimonia. Cosa succede?", carte: [
      { e: "👣👗", t: "Ci inciampa sopra. Due volte" },
      { e: "💂👗", t: "Lo regge serio, come un soldato" },
      { e: "📸👗", t: "Lo molla per fare le foto" },
      { e: "🌿👗", t: "Lo trascina sul prato, felice" }
    ] },
    { id: "mat-i24", q: "A fine festa, cosa si trova nella tasca della giacca di {P}?", carte: [
      { e: "🍬🍬", t: "Venti confetti, un po' sciolti" },
      { e: "🩹👞", t: "Cerotti per le scarpe nuove" },
      { e: "🍰🧻", t: "Torta avvolta nel tovagliolo" },
      { e: "🎤🤫", t: "Il microfono del DJ" }
    ] },
    { id: "mat-i25", q: "Parte il quiz sugli sposi. Chi c'è in squadra con {P}?", carte: [
      { chi: "nonno", faccia: "pensieroso", t: "Il nonno: risponde «1963» a tutto" },
      { chi: "zia", faccia: "esulta", t: "La zia: sa più cose dello sposo" },
      { chi: "bimbo", faccia: "felice", t: "Un bimbo: risponde «la torta»" },
      { chi: "prof", faccia: "indifferente", t: "Il prof: alza la mano e aspetta" }
    ] }
  ],
  scrivi: [
    { id: "mat-s01", q: "Nel discorso da testimone, {P} confessa: «Quando lo sposo mi ha detto che si sposava, ho pensato ___»",
      riserve: ["che fosse un pesce d'aprile", "a chi avrebbe lasciato la console", "finalmente qualcuno che lo sopporta"] },
    { id: "mat-s02", q: "{P} fa gli auguri agli sposi: «Vi auguro una vita piena d'amore e ___»",
      riserve: ["di parenti che avvisano prima di venire", "di vicini senza trapano", "di telecomandi che non spariscono"] },
    { id: "mat-s03", q: "{P} scrive il tema come alle elementari: «Il matrimonio del cugino è stato bello perché ___»",
      riserve: ["c'erano dodici portate e zero compiti", "la zia ha guidato il trenino", "lo sposo ha pianto più di me"] },
    { id: "mat-s04", q: "{P} fa leggere allo sposo una promessa: «Da oggi giuro solennemente di ___»",
      riserve: ["chiudere il tubetto del dentifricio", "non dire più «lo faccio dopo»", "imparare dove sta la lavatrice"] },
    { id: "mat-s05", q: "Alla cerimonia: «Chi ha qualcosa da dire parli ora». {P} alza la mano: «___»",
      riserve: ["A che ora si mangia, di preciso?", "Ho parcheggiato in doppia fila", "Si mangia prima o dopo il sì?"] },
    { id: "mat-s06", q: "Da testimone, {P} racconta: «La sera prima del matrimonio, lo sposo ___»",
      riserve: ["ha provato il vestito sei volte", "ha chiamato la mamma alle tre di notte", "ha imparato il discorso e poi l'ha perso"] },
    { id: "mat-s07", q: "Sul libro degli ospiti, {P} lascia una dedica agli sposi. Cosa scrive?",
      riserve: ["Auguri! Il pesce era crudo, segnalo", "Vi voglio bene. Dov'è il bagno?", "Torno alle nozze d'argento. Stesso menù"] },
    { id: "mat-s08", q: "{P} ruba il microfono alla band e dedica una canzone agli sposi. Che titolo ha?",
      riserve: ["Ti amo anche se russi", "Finalmente il cugino si è sistemato", "Vent'anni di lavastoviglie"] },
    { id: "mat-s09", q: "Nella busta di {P}, oltre al regalo, c'è un bigliettino: «Cari sposi, ___»",
      riserve: ["spendeteli bene, non in bomboniere", "il resto ve lo do in abbracci", "la busta l'ho decorata io: vale doppio"] },
    { id: "mat-s10", q: "La zia chiede a {P} per la quinta volta: «E tu, quando?». Cosa risponde {P}?",
      riserve: ["Quando finisce il buffet, zia", "Appena trovo un catering così", "Quando smetti di chiedermelo"] },
    { id: "mat-s11", q: "Lo sposo legge una lettera che {P} gli scrisse a otto anni: «Da grande ___»",
      riserve: ["ti faccio da testimone e da DJ", "ti ridò la bici che ti ho rotto", "voglio un matrimonio con cento torte"] },
    { id: "mat-s12", q: "Al matrimonio ogni tavolo ha un nome. Come si chiama il tavolo di {P}?",
      riserve: ["Tavolo «Quelli del bis»", "Tavolo «Vicino alle casse»", "Tavolo «Parenti da tenere d'occhio»"] },
    { id: "mat-s13", q: "Lo sposo chiede a {P} di fargli da testimone. {P} accetta a una condizione: «___»",
      riserve: ["il discorso lo scrivi tu", "al buffet entro per primo", "niente balletti, per nessun motivo"] },
    { id: "mat-s14", q: "{P} manda un vocale all'amico che non è venuto al matrimonio. Cosa dice?",
      riserve: ["Hai fatto bene: siamo alla nona portata", "Ti ho tenuto un confetto. L'ho mangiato", "Piange lo sposo, la zia, e pure io"] },
    { id: "mat-s15", q: "Dietro la macchina degli sposi, {P} attacca un cartello: «Appena sposati, ___»",
      riserve: ["suonate se avete fame", "seguiteci: offre lo sposo", "il clacson è per la nonna"] },
    { id: "mat-s16", q: "La nonna della sposa ferma {P}: «E tu, di chi sei?». Cosa risponde {P}?",
      riserve: ["Del tavolo 14, signora", "Di nessuno: sono qui per la torta", "Dello sposo. Ma lui non lo sa"] },
    { id: "mat-s17", q: "Lo sposo dà a {P} un compito segreto per la festa. Sul bigliettino: «___»",
      riserve: ["tieni lo zio lontano dal microfono", "nascondi la torta finché non arrivo", "fai ballare la nonna, a ogni costo"] }
  ],
  disegna: [
    { id: "mat-d01", q: "Disegna su {P} il vestito con cui si presenta al matrimonio del cugino", su: "ritratto", adesivi: "👒🌸👞🦚" },
    { id: "mat-d02", q: "Disegna la torta nuziale a sette piani scelta da {P}", su: "scena", adesivi: "🍓🍫🧁🕯️" },
    { id: "mat-d03", q: "Disegna il tavolo di {P} alle 2 di notte, a fine festa", su: "scena", adesivi: "🧦👠🥖😴🍽️" },
    { id: "mat-d04", q: "Disegna su {P} il travestimento per imbucarsi a un altro matrimonio", su: "ritratto", adesivi: "🥸🎩🕶️🌹" },
    { id: "mat-d05", q: "Disegna su {P} riso, confetti e coriandoli rimasti addosso dopo la festa", su: "ritratto", adesivi: "🍚🎊🍝" },
    { id: "mat-d06", q: "Disegna l'angolo delle foto del matrimonio allestito da {P}", su: "scena", adesivi: "🪞🎈🦩🖼️" },
    { id: "mat-d07", q: "Disegna l'ingresso degli sposi organizzato da {P}", su: "scena", adesivi: "🐎🚁🎆🐘" },
    { id: "mat-d08", q: "Disegna su {P} il cappello da zia del matrimonio, più alto della torta", su: "ritratto", adesivi: "🦚🍒🌺🎀" },
    { id: "mat-d09", q: "Disegna su {P} il trucco fatto dalla nipotina di 5 anni", su: "ritratto", adesivi: "💄🌈⭐🦄" },
    { id: "mat-d10", q: "Disegna la pista da ballo come la vorrebbe {P}: luci, fumo e…", su: "scena", adesivi: "🪩💡🌫️🦩🎆" },
    { id: "mat-d11", q: "Disegna il tavolo dei confetti dopo il passaggio di {P}", su: "scena", adesivi: "🍬🫙😋" },
    { id: "mat-d12", q: "Disegna su {P} la pettinatura fatta alle 6 dalla parrucchiera della sposa", su: "ritratto", adesivi: "💇🎀🌸✨" }
  ],
  chi: [
    { id: "mat-c01", q: "Chi di noi arriverebbe al taglio della torta già senza cravatta e con le scarpe in mano?", titolo: "Scarpe in mano alla torta" },
    { id: "mat-c02", q: "Chi di noi passerebbe il matrimonio a fare dirette col telefono per i parenti non invitati?", titolo: "Diretta dal matrimonio" },
    { id: "mat-c03", q: "Chi di noi arriverebbe al matrimonio col regalo ancora da incartare, da sistemare in macchina?", titolo: "Pacchetto in corsa" },
    { id: "mat-c04", q: "Chi di noi finirebbe al tavolo dei bambini… e ci si troverebbe benissimo?", titolo: "Capotavola dei bambini" },
    { id: "mat-c05", q: "Chi di noi assaggerebbe l'antipasto e direbbe «questo catering l'ho già mangiato a un altro matrimonio»?", titolo: "Recensione del catering" },
    { id: "mat-c06", q: "Chi di noi si presenterebbe al matrimonio col vestito bianco, «senza pensarci»?", titolo: "Bianco senza pensarci" },
    { id: "mat-c07", q: "Chi di noi, a fine serata, conoscerebbe i nomi di tutti i parenti degli sposi meglio degli sposi?", titolo: "Anagrafe del matrimonio" },
    { id: "mat-c08", q: "Chi di noi, durante la cerimonia, scoppierebbe a piangere prima ancora della sposa?", titolo: "Lacrima prima della sposa" },
    { id: "mat-c09", q: "Chi di noi si siederebbe al tavolo degli sposi «perché c'era una sedia libera»?", titolo: "Al tavolo degli sposi" },
    { id: "mat-c10", q: "Chi di noi si porterebbe a casa il centrotavola di fiori, «tanto poi lo buttano»?", titolo: "Centrotavola da asporto" },
    { id: "mat-c11", q: "Chi di noi aprirebbe le danze prima degli sposi, credendo che fosse il suo momento?", titolo: "Primo ballo abusivo" },
    { id: "mat-c12", q: "Chi di noi passerebbe la festa a chiacchierare coi camerieri e finirebbe a servire ai tavoli con loro?", titolo: "Al servizio dei tavoli" },
    { id: "mat-c13", q: "Chi di noi, al grido di «bacio! bacio!», batterebbe la forchetta sul bicchiere più forte di tutti?", titolo: "Capo ultrà del bacio" },
    { id: "mat-c14", q: "Chi di noi sbaglierebbe sala e si siederebbe a un altro matrimonio senza accorgersene fino al dolce?", titolo: "Matrimonio sbagliato" }
  ]
});

/* ---------------------------------------------------------
   🍝 AL PRANZO DELLA DOMENICA
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "pranzo", cod: "pra", nome: "Al pranzo della domenica", emoji: "🍝",
  adesivi: "🍝🍖🥖🧀🥗🍰☕🍊🍕🥘🕰️🍋",
  entrata: [
    "È domenica, sono le 13 e la nonna ha cucinato per trenta. A tavola: {P}.",
    "Tovaglia buona, ragù dalle sei del mattino. Oggi a capotavola c'è {P}.",
    "Pranzo dalla nonna: si finisce verso le sei. Sotto torchio, {P}."
  ],
  immagini: [
    { id: "pra-i01", q: "Alle 13:30 suona il campanello: un parente a sorpresa si siede accanto a {P}. Chi è?", carte: [
      { chi: "zio", faccia: "esulta", t: "Lo zio lontano, carico di regali" },
      { chi: "cugino", faccia: "indifferente", t: "Il cugino che viene solo a pranzo" },
      { chi: "vicino", faccia: "estasi", t: "Il vicino: «Sentivo il ragù»" },
      { chi: "prof", faccia: "sorpreso", t: "Il vecchio prof, amico del nonno" }
    ] },
    { id: "pra-i02", q: "La nonna riempie il piatto di {P} senza chiedere: è il quarto giro di cannelloni. Cosa fa {P}?", carte: [
      { e: "😋🙏", t: "Mangia tutto, per non offenderla" },
      { e: "🤫🍽️", t: "Lo sposta nel piatto del cugino" },
      { e: "✋😩", t: "Dice «basta» e lo finisce" },
      { e: "🙋🍽️", t: "Ne chiede ancora: è il suo giorno" }
    ] },
    { id: "pra-i03", q: "Che faccia fa {P} quando la nonna toglie il coperchio ed è trippa per venti?", carte: [
      { lui: "estasi", t: "Ha il piatto pronto prima di tutti" },
      { lui: "disgusto", t: "Scopre di non avere più fame" },
      { lui: "finto", t: "«Che profumo!» e non respira" },
      { lui: "sorpreso", t: "Chiede cos'è. Poi se ne pente" }
    ] },
    { id: "pra-i04", q: "La nonna è in vacanza. Chi cucina per {P} il pranzo della domenica?", carte: [
      { chi: "papa", faccia: "esulta", t: "Il papà: brace accesa da ieri sera" },
      { chi: "zia", faccia: "felice", t: "La zia: tutto con la panna" },
      { chi: "cugino", faccia: "indifferente", t: "Il cugino: pasta al tonno per 20" },
      { chi: "cuoco", faccia: "finto", t: "Un cuoco vero, scelto dalla nonna" }
    ] },
    { id: "pra-i05", q: "La mamma annuncia: «Oggi a tavola niente telefoni». Cosa fa {P}?", carte: [
      { e: "📵😣", t: "Lo consegna e soffre in silenzio" },
      { e: "🧻📱", t: "Lo nasconde sotto il tovagliolo" },
      { e: "🚽🔁", t: "Va in bagno ogni dieci minuti" },
      { e: "📸🍝", t: "Foto al ragù, poi lo consegna" }
    ] },
    { id: "pra-i06", q: "Dopo pranzo, chi porta {P} a fare due passi «per digerire»?", carte: [
      { chi: "nonno", faccia: "esulta", t: "Il nonno: 8 km a passo di marcia" },
      { chi: "zia", faccia: "furbo", t: "La zia: fino alla pasticceria" },
      { chi: "papa", faccia: "sonno", t: "Il papà: fino all'edicola e basta" },
      { chi: "bimbo", faccia: "esulta", t: "Il nipotino in bici, a tutta" }
    ] },
    { id: "pra-i07", q: "Si rompe la lavastoviglie e ci sono i piatti di venti persone. Cosa fa {P}?", carte: [
      { e: "🎤🧽", t: "Lava tutto cantando a squarciagola" },
      { e: "🍽️💨", t: "Asciuga un piatto e sparisce" },
      { e: "🏭🔁", t: "Organizza la catena di montaggio" },
      { e: "🌙🚪", t: "«Li lavo stasera» e se ne va" }
    ] },
    { id: "pra-i08", q: "Dopo il caffè, chi trascina {P} alla partita a carte?", carte: [
      { chi: "nonno", faccia: "arrabbiato", t: "Il nonno: rivincita del '98" },
      { chi: "zia", faccia: "furbo", t: "La zia che bara, e lo sanno tutti" },
      { chi: "vicino", faccia: "felice", t: "Il vicino: sale solo per giocare" },
      { chi: "bimbo", faccia: "pensieroso", t: "Il cuginetto che tiene i punti" }
    ] },
    { id: "pra-i09", q: "Il cuginetto rovescia l'aranciata sulla tovaglia buona. Tutti guardano {P}, che è lì accanto. Cosa fa?", carte: [
      { e: "🦸🍊", t: "Si prende la colpa al posto suo" },
      { e: "👉🧒", t: "Indica subito il cuginetto" },
      { e: "🧂🏃", t: "Corre a prendere il sale" },
      { e: "🍽️🤫", t: "Ci mette sopra un piatto, e tace" }
    ] },
    { id: "pra-i10", q: "A tavola, chi racconta a tutti la figuraccia d'infanzia di {P}?", carte: [
      { chi: "nonna", faccia: "felice", t: "La nonna, con l'album delle foto" },
      { chi: "zio", faccia: "esulta", t: "Lo zio, con gli effetti sonori" },
      { chi: "mamma", faccia: "estasi", t: "La mamma, che piange dal ridere" },
      { chi: "nonno", faccia: "pensieroso", t: "Il nonno, ma sbaglia nipote" }
    ] },
    { id: "pra-i11", q: "Un parente lontano abbraccia {P}: «Ti ricordi di me? Ti tenevo in braccio!». Cosa fa {P}?", carte: [
      { e: "😃❓", t: "«Certo!» e non sa chi sia" },
      { e: "🤷", t: "Ammette di non ricordarselo" },
      { e: "🤗🔤", t: "Lo abbraccia col nome sbagliato" },
      { e: "👀🆘", t: "Cerca la mamma con lo sguardo" }
    ] },
    { id: "pra-i12", q: "Che faccia fa {P} quando, alle 18, la nonna chiede: «Allora, cosa mangiamo stasera?»", carte: [
      { lui: "estasi", t: "Ha già una lista di richieste" },
      { lui: "sonno", t: "Si riaddormenta per protesta" },
      { lui: "terrore", t: "Si inventa un impegno alle 19" },
      { lui: "pensieroso", t: "«Una cosa leggera… le lasagne?»" }
    ] },
    { id: "pra-i13", q: "Chi controlla, da dietro, se {P} finisce davvero tutto il piatto?", carte: [
      { chi: "nonna", faccia: "arrabbiato", t: "La nonna: conta le forchettate" },
      { chi: "zia", faccia: "furbo", t: "La zia, col secondo giro pronto" },
      { chi: "bimbo", faccia: "linguaccia", t: "Il cuginetto: vuole le patatine" },
      { e: "🐶👀", t: "Il cane, sotto la sedia, da un'ora" }
    ] },
    { id: "pra-i14", q: "Lo zio racconta per la decima volta la stessa storia. Cosa fa {P}?", carte: [
      { e: "😮👂", t: "Fa finta che sia la prima volta" },
      { e: "🏁🗣️", t: "Dice il finale prima dello zio" },
      { e: "🔁📖", t: "Gli chiede di raccontarne un'altra" },
      { e: "🍽️🏃", t: "Sparecchia per scappare" }
    ] },
    { id: "pra-i15", q: "Arriva in tavola la pasta e squilla il telefono di {P}. Chi è?", carte: [
      { chi: "capo", faccia: "finto", t: "Il capo: «Ti rubo due minuti»" },
      { chi: "corriere", faccia: "indifferente", t: "Il corriere: «Sono sotto, scenda»" },
      { chi: "cugino", faccia: "felice", t: "Il cugino: «Arrivo tra 5 minuti»" },
      { chi: "nonna", faccia: "sorpreso", t: "La nonna, dalla cucina accanto" }
    ] },
    { id: "pra-i16", q: "Sfida a tavola: è più buono il ragù della nonna o quello della zia? Decide {P}. Cosa dice?", carte: [
      { e: "🤝😬", t: "«Tutti e due»: scontenta tutti" },
      { e: "👵🏆", t: "La nonna, ovvio: è casa sua" },
      { e: "😈🍝", t: "La zia, solo per vedere le facce" },
      { e: "🥄🥄", t: "Vuole riassaggiarli. Con calma" }
    ] },
    { id: "pra-i17", q: "Finito il pranzo, tutti si buttano sul divano, ma c'è posto per tre. Dove finisce {P}?", carte: [
      { e: "👑🛋️", t: "Sul posto migliore, per sempre" },
      { e: "🧶😴", t: "Sul tappeto, a pancia in su" },
      { e: "🛋️🫠", t: "Sul bracciolo, e scivola giù" },
      { e: "🛏️👵", t: "Nel letto della nonna" }
    ] },
    { id: "pra-i18", q: "Che faccia fa {P} quando il nonno annuncia: «Oggi il ragù l'ho fatto io»?", carte: [
      { lui: "terrore", t: "Cerca il pane per salvarsi" },
      { lui: "finto", t: "«Meglio della nonna!» (bugia)" },
      { lui: "esulta", t: "Chiede il bis per incoraggiarlo" },
      { lui: "pensieroso", t: "Cerca di capire cosa c'è dentro" }
    ] },
    { id: "pra-i19", q: "Mentre tutti dormono, {P} trova in frigo il tiramisù «per stasera». Cosa fa?", carte: [
      { e: "🥄🤏", t: "Un cucchiaino, e liscia la crema" },
      { e: "🐶👉", t: "Mezzo tiramisù: «È stato il cane»" },
      { e: "🚪😔", t: "Chiude il frigo e soffre" },
      { e: "📣🍰", t: "Sveglia tutti: «Tiramisù!»" }
    ] },
    { id: "pra-i20", q: "{P} spezza gli spaghetti prima di buttarli. La nonna lo vede. Cosa fa {P}?", carte: [
      { e: "🧪🤓", t: "«Era un esperimento»" },
      { e: "🧎🙏", t: "Chiede perdono in ginocchio" },
      { e: "👉🧑", t: "Dà la colpa al cugino" },
      { e: "🍝📏", t: "«Così entrano nella pentola»" }
    ] },
    { id: "pra-i21", q: "La mamma annuncia: «Domenica prossima cucina {P}!». Cosa succede?", carte: [
      { e: "📜🍽️", t: "Menù da sei portate" },
      { e: "🏪🤫", t: "Rosticceria, e fa finta di niente" },
      { e: "👵🤝", t: "Cucina con la nonna accanto" },
      { e: "📅🤒", t: "Domenica ha un impegno improvviso" }
    ] },
    { id: "pra-i22", q: "Che faccia fa {P} quando vede che l'ultima polpetta se l'è presa lo zio?", carte: [
      { lui: "triste", t: "Fissa la forchetta dello zio" },
      { lui: "arrabbiato", t: "Convoca un consiglio di famiglia" },
      { lui: "furbo", t: "Ne aveva già nascoste tre" },
      { lui: "indifferente", t: "Tanto c'è la seconda pentola" }
    ] },
    { id: "pra-i23", q: "Nel piatto è rimasto il sugo della nonna. Come fa la scarpetta {P}?", carte: [
      { e: "🍴🥖", t: "Pane infilzato sulla forchetta" },
      { e: "👆🤫", t: "Col dito, quando nessuno guarda" },
      { e: "🥖🥖🥖", t: "Mezza pagnotta per piatto" },
      { e: "🙅🎩", t: "Mai: non è da signori" }
    ] },
    { id: "pra-i24", q: "Dove si siede {P} al pranzo della domenica?", carte: [
      { e: "👑🪑", t: "A capotavola, al posto del nonno" },
      { e: "📺⚽", t: "Spalle alla tavola, occhi alla TV" },
      { e: "🧒🎈", t: "Al tavolino dei bambini" },
      { e: "🚪🏃", t: "Vicino alla porta, per scappare" }
    ] },
    { id: "pra-i25", q: "Sulla porta, la nonna infila di nascosto venti euro in tasca a {P}. Cosa fa {P}?", carte: [
      { e: "🙅🔁", t: "Li rifiuta tre volte, poi accetta" },
      { e: "🤗💶", t: "Li prende e la abbraccia forte" },
      { e: "👜🤫", t: "Glieli rimette nella borsa" },
      { e: "🍰🎁", t: "Ci compra le paste per domenica" }
    ] },
    { id: "pra-i26", q: "A tavola, chi fa a {P} la domanda più imbarazzante davanti a tutti?", carte: [
      { chi: "zia", faccia: "furbo", t: "La zia: «Allora, novità?»" },
      { chi: "nonno", faccia: "pensieroso", t: "Il nonno: «E la macchina, quando?»" },
      { chi: "cugino", faccia: "linguaccia", t: "Il cugino: «Racconta di quando…»" },
      { chi: "mamma", faccia: "estasi", t: "La mamma: «Diglielo, dai!»" }
    ] }
  ],
  scrivi: [
    { id: "pra-s01", q: "{P} manda un vocale nel gruppo «Famiglia» alle 12:55. Cosa dice?",
      riserve: ["Parcheggio e salgo. Buttate la pasta", "Nonna, metti un piatto in più. O tre", "Sono in ritardo, ma ho le paste"] },
    { id: "pra-s02", q: "{P} fa la foto alla tavola della nonna e la pubblica. Che didascalia scrive?",
      riserve: ["Antipasto. Tra sei ore il dolce", "Pranzo leggero dalla nonna (no)", "Se non rispondo, mandate i rinforzi"] },
    { id: "pra-s03", q: "{P} lascia una recensione al pranzo della nonna. Cosa scrive?",
      riserve: ["5 stelle. Servizio lento ma affettuoso", "Porzioni enormi. Uscita vietata", "Cuoca severa: obbliga al bis"] },
    { id: "pra-s04", q: "{P} spiega al nonno che lavoro fa. Il nonno riassume: «___»",
      riserve: ["Ah, quindi aggiusti i computer", "Insomma, stai sempre al telefono", "Lavori da casa? In pigiama?"] },
    { id: "pra-s05", q: "A fine pranzo {P} alza l'aranciata per un brindisi: «Alla nonna, che ___»",
      riserve: ["non ha mai detto «basta» in vita sua", "ha più vaschette che nipoti", "cucina per trenta e mangia una mela"] },
    { id: "pra-s06", q: "Il cuginetto chiede a {P}: «Perché la domenica si mangia così tanto?». Cosa risponde {P}?",
      riserve: ["Perché lunedì si piange", "È la legge della nonna", "Ci alleniamo per Natale"] },
    { id: "pra-s07", q: "La mamma chiama {P} alle 11: «Quando vieni, porta ___»",
      riserve: ["le sedie: siamo in ventidue", "il pane, ma quello buono", "una tovaglia: l'altra l'ha presa il cane"] },
    { id: "pra-s08", q: "Durante il riposino sul divano, {P} parla nel sonno. Cosa dice?",
      riserve: ["Nonna, basta… va bene, l'ultimo", "Le lasagne mi inseguono", "Zio, hai barato a scopa"] },
    { id: "pra-s09", q: "{P} fa assaggiare il sushi alla nonna. La nonna dice: «___»",
      riserve: ["Buono. Ma chi l'ha cotto?", "E questo lo chiami pranzo?", "Ottimo. Ora ti faccio la pasta"] },
    { id: "pra-s10", q: "La nonna detta a {P} la ricetta delle polpette. Alla voce «dosi», {P} scrive: «___»",
      riserve: ["quanto basta, ha detto lei", "a occhio, finché sembra giusto", "segreto di famiglia, non trattabile"] },
    { id: "pra-s11", q: "Se il cane di casa, sotto la sedia di {P}, potesse parlare, direbbe: «___»",
      riserve: ["So che non vuoi quella cotica", "Ti ho visto con la polpetta. Parliamone", "Domenica scorsa mi davi di più"] },
    { id: "pra-s12", q: "{P} si offre di apparecchiare. La nonna guarda e dice: «___»",
      riserve: ["La forchetta va a sinistra, tesoro", "Siediti, che fai solo danni", "Bene. Ora rifallo da capo"] },
    { id: "pra-s13", q: "{P} porta un amico al pranzo per la prima volta. Prima di entrare lo avverte: «___»",
      riserve: ["Quando dici basta, tu continua", "Mai dire «sono pieno»", "Il nonno vince sempre a carte"] },
    { id: "pra-s14", q: "Il telegiornale delle 13 parla del pranzo dalla nonna di {P}. Il titolo è: «___»",
      riserve: ["Nonna da record: 7 portate, 0 avanzi", "Nipote dorme sul divano dalle 15", "Ragù avvistato dal satellite"] },
    { id: "pra-s15", q: "Alle 16 {P} prova ad andare via. La nonna si piazza sulla porta: «___»",
      riserve: ["E il caffè? E la frutta? E il dolce?", "Aspetta, ti incarto due cosette", "Già? Ma c'è ancora il secondo!"] },
    { id: "pra-s16", q: "{P} scrive il menù della domenica sulla lavagnetta della cucina. Ultima riga: «___»",
      riserve: ["Riposino obbligatorio sul divano", "Il bis non si rifiuta", "Avanzi da portare via: non trattabili"] },
    { id: "pra-s17", q: "{P} deve fare il caffè per venti con la moka da tre. Annuncia: «___»",
      riserve: ["Il primo giro è per chi sparecchia", "Tazzine piccole, sorsi piccoli", "Tranquilli: è decaffeinato. Credo"] }
  ],
  disegna: [
    { id: "pra-d01", q: "Disegna la tavola della nonna quando si siede {P}: nove portate in arrivo", su: "scena", adesivi: "🍗🫕🍮🥟" },
    { id: "pra-d02", q: "Disegna il frigo della nonna aperto da {P} alle 17", su: "scena", adesivi: "🧊🥫🍮🫙" },
    { id: "pra-d03", q: "Disegna come {P} sistema i parenti a tavola per evitare litigi", su: "scena", adesivi: "👵👴👶🐶🧔👩" },
    { id: "pra-d04", q: "Disegna la cucina della nonna dopo che {P} ha provato ad aiutare", su: "scena", adesivi: "🧯💥🧽🍅" },
    { id: "pra-d05", q: "Disegna la teglia di lasagne più grande del mondo, fatta apposta per {P}", su: "scena", adesivi: "🧀🍅📏🏗️" },
    { id: "pra-d06", q: "Disegna dove {P} nasconde i broccoli che non vuole mangiare", su: "scena", adesivi: "🥦🪴🐶👜" },
    { id: "pra-d07", q: "Disegna su {P} il tovagliolo da bavaglio e il sugo dappertutto", su: "ritratto", adesivi: "🍅🧻💦" },
    { id: "pra-d08", q: "Disegna su {P} l'armatura per difendersi dal quarto bis della nonna", su: "ritratto", adesivi: "🛡️⚔️🪖" },
    { id: "pra-d09", q: "Disegna su {P} la faccia dopo un peperoncino scambiato per un peperone", su: "ritratto", adesivi: "🌶️🔥💦🧯" },
    { id: "pra-d10", q: "Disegna su {P} barattoli, limoni e uova regalati dalla nonna all'uscita", su: "ritratto", adesivi: "🫙🍋🥚🧺" },
    { id: "pra-d11", q: "Disegna su {P} sciarpa e trombetta da stadio per la partita a tavola", su: "ritratto", adesivi: "🧣📺⚽📣" },
    { id: "pra-d12", q: "Disegna su {P} il maglione della nonna, con sopra la faccia del nonno", su: "ritratto", adesivi: "🧶❤️⭐" }
  ],
  chi: [
    { id: "pra-c01", q: "Chi di noi si siederebbe a tavola alle 13 in punto, col tovagliolo già infilato nel colletto?", titolo: "Puntuale col tovagliolo" },
    { id: "pra-c02", q: "Chi di noi convincerebbe il nonno a raccontare di quando ha conosciuto la nonna, e farebbe commuovere tutta la tavola?", titolo: "Cantastorie della domenica" },
    { id: "pra-c03", q: "Chi di noi si porterebbe a casa gli avanzi in sei vaschette della nonna e non gliele riporterebbe mai?", titolo: "Vaschette mai tornate" },
    { id: "pra-c04", q: "Chi di noi ruberebbe le polpette dalla pentola prima che arrivino in tavola?", titolo: "Assaggi abusivi" },
    { id: "pra-c05", q: "Chi di noi porterebbe un dolce della pasticceria e lo spaccerebbe per fatto in casa, col cartone ancora in macchina?", titolo: "Dolce «fatto in casa»" },
    { id: "pra-c06", q: "Chi di noi, a tavola, tiferebbe la squadra avversaria dello zio solo per farlo arrabbiare?", titolo: "Tifo per dispetto" },
    { id: "pra-c07", q: "Chi di noi passerebbe il pomeriggio a insegnare alla nonna a mandare i vocali?", titolo: "Corso di vocali per nonne" },
    { id: "pra-c08", q: "Chi di noi arriverebbe dalla nonna alle due e mezza dicendo «c'era traffico»… di domenica?", titolo: "Traffico della domenica" },
    { id: "pra-c09", q: "Chi di noi, a pranzo, si metterebbe a litigare con un cuginetto di nove anni… e perderebbe?", titolo: "Sconfitta col cuginetto" },
    { id: "pra-c10", q: "Chi di noi, alla frutta, sbuccerebbe la mela in un'unica striscia lunghissima solo per fare scena?", titolo: "Artista della buccia" },
    { id: "pra-c11", q: "Chi di noi manderebbe la nonna a sedersi e finirebbe di cucinare al posto suo?", titolo: "Vice nonna" },
    { id: "pra-c12", q: "Chi di noi riuscirebbe a far cambiare il menù alla nonna: pasta al forno al posto del brodo?", titolo: "Riforma del menù" },
    { id: "pra-c13", q: "Chi di noi sarebbe ancora lì alle sette di sera, ad aspettare la cena con gli avanzi?", titolo: "Pranzo che diventa cena" },
    { id: "pra-c14", q: "Chi di noi porterebbe alla nonna un mazzo di fiori… raccolti nell'aiuola sotto casa sua?", titolo: "Fiori dall'aiuola" }
  ]
});

/* ---------------------------------------------------------
   🏢 NEL CONDOMINIO
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "condominio", cod: "con", nome: "Nel condominio", emoji: "🏢",
  adesivi: "🚪🪴📦🧺👟🐈🛵🔔📮🧹🗑️🪜",
  entrata: [
    "Scala B, terzo piano, interno 7. Qui abita {P}, e i vicini sanno tutto.",
    "Riunione di condominio alle 21. Primo punto all'ordine del giorno: {P}.",
    "L'ascensore è rotto da marzo. Al quinto piano, col fiatone, c'è {P}."
  ],
  immagini: [
    { id: "con-i01", q: "Chi abita sul pianerottolo di {P}, porta a porta?", carte: [
      { chi: "rockstar", faccia: "esulta", t: "Prova la chitarra alle 23" },
      { chi: "bimbo", faccia: "linguaccia", t: "Suona il campanello e scappa" },
      { chi: "mago", faccia: "furbo", t: "Un mago: dalla porta, colombe" },
      { chi: "dottore", faccia: "felice", t: "Ti visita in ascensore" }
    ] },
    { id: "con-i02", q: "Alle 2 di notte, dal piano di sopra, arriva un rumore di biglie che rotolano. Cosa fa {P}?", carte: [
      { e: "🧹⬆️", t: "Batte sul soffitto con la scopa" },
      { e: "🩳🔔", t: "Sale a suonare in pigiama" },
      { e: "📱😤", t: "Messaggio pungente nel gruppo" },
      { e: "👂🔇", t: "Tappi nelle orecchie, e silenzio" }
    ] },
    { id: "con-i03", q: "Che faccia fa {P} quando apre la porta alle 8 e c'è la vicina con un foglio «da firmare»?", carte: [
      { lui: "finto", t: "«Ma certo!» (non ha letto niente)" },
      { lui: "arrabbiato", t: "Chiude la porta a metà frase" },
      { lui: "felice", t: "Firma tutto e offre il caffè" },
      { lui: "sonno", t: "Firma a occhi chiusi, in pigiama" }
    ] },
    { id: "con-i04", q: "Chi è l'amministratore del condominio di {P}?", carte: [
      { chi: "avvocato", faccia: "sonno", t: "Legge il verbale per due ore" },
      { chi: "nonno", faccia: "arrabbiato", t: "In carica dal 1974, non molla" },
      { chi: "impiegato", faccia: "indifferente", t: "Risponde solo per raccomandata" },
      { chi: "influencer", faccia: "estasi", t: "Fa le riunioni in diretta" }
    ] },
    { id: "con-i05", q: "In ascensore entra il vicino che {P} non sopporta. Mancano sei piani. Cosa fa {P}?", carte: [
      { e: "📱🗣️", t: "Finta telefonata importantissima" },
      { e: "☁️☀️", t: "Attacca a parlare del tempo" },
      { e: "🚪🪜", t: "Scende al piano dopo e fa le scale" },
      { e: "👁️👁️", t: "Lo fissa in silenzio fino su" }
    ] },
    { id: "con-i06", q: "Domenica, ore 8. Chi suona alla porta di {P}?", carte: [
      { chi: "vicino", faccia: "finto", t: "Il vicino: «Ha mica un uovo?»" },
      { chi: "corriere", faccia: "indifferente", t: "Il corriere, con un pacco non suo" },
      { chi: "bimbo", faccia: "imbarazzo", t: "«Ci ridà il pallone?»" },
      { chi: "vigile", faccia: "arrabbiato", t: "Il vigile: «Di chi è il motorino?»" }
    ] },
    { id: "con-i07", q: "Ascensore rotto: {P} abita al sesto piano e torna con la spesa di una settimana. Cosa fa?", carte: [
      { e: "🧗🛍️", t: "Sei piani, una busta per volta" },
      { e: "🧺🪢", t: "Spesa su col cesto e la corda" },
      { e: "🔔🙏", t: "Chiede aiuto al ragazzo del primo" },
      { e: "🛍️🍕", t: "Lascia tutto giù e ordina la pizza" }
    ] },
    { id: "con-i08", q: "L'ascensore si blocca tra due piani. Chi è chiuso lì dentro con {P}?", carte: [
      { chi: "cantante", faccia: "estasi", t: "Una cantante lirica che si scalda" },
      { chi: "vicino", faccia: "pensieroso", t: "Il vicino: cruciverba ad alta voce" },
      { chi: "corriere", faccia: "sonno", t: "Il corriere con quaranta pacchi" },
      { chi: "bimbo", faccia: "esulta", t: "Un bimbo che preme tutti i tasti" }
    ] },
    { id: "con-i09", q: "Stasera alle 21 c'è la riunione di condominio. Cosa fa {P}?", carte: [
      { e: "📋⏰", t: "In anticipo, con gli appunti" },
      { e: "📝🏃", t: "Manda la delega e sparisce" },
      { e: "☕🍪", t: "Ci va solo per i biscotti" },
      { e: "😮‍💨🪑", t: "In fondo alla sala, sbuffa" }
    ] },
    { id: "con-i10", q: "Che faccia fa {P} quando si apre l'ascensore e dentro c'è il vicino col cane bagnato?", carte: [
      { lui: "disgusto", t: "Non respira per cinque piani" },
      { lui: "felice", t: "Lo accarezza tutto, e si bagna" },
      { lui: "terrore", t: "Si appiattisce contro lo specchio" },
      { lui: "indifferente", t: "Ha già un cane più bagnato" }
    ] },
    { id: "con-i11", q: "Quando {P} non è in casa, chi ritira i suoi pacchi?", carte: [
      { chi: "nonna", faccia: "furbo", t: "La signora del primo: li apre" },
      { chi: "vicino", faccia: "arrabbiato", t: "Il vicino: li tiene in ostaggio" },
      { chi: "bimbo", faccia: "esulta", t: "Il bimbo del terzo: ci gioca" },
      { e: "🐈📦", t: "Il gatto, che ci dorme dentro" }
    ] },
    { id: "con-i12", q: "A {P} cade un calzino sul terrazzo della vicina di sotto, che non c'è mai. Cosa fa?", carte: [
      { e: "🔔🔁", t: "Citofona ogni giorno per un mese" },
      { e: "🎣🧦", t: "Prova a ripescarlo con la canna" },
      { e: "🛒🧦", t: "Ne compra un paio nuovo" },
      { e: "🧦⬇️", t: "Butta giù anche l'altro" }
    ] },
    { id: "con-i13", q: "Chi si trasferisce nell'appartamento sopra quello di {P}?", carte: [
      { chi: "ballerino", f: "d", faccia: "esulta", t: "Una ballerina di tip tap" },
      { chi: "nonno", faccia: "felice", t: "Un nonno con 14 orologi a pendolo" },
      { chi: "contadino", faccia: "felice", t: "Tiene sei galline sul balcone" },
      { chi: "dj", faccia: "esulta", t: "Un DJ che prova le serate" }
    ] },
    { id: "con-i14", q: "Nel gruppo del condominio: «Chi ha lasciato il portone aperto?». È stat{o|a} {P}. Cosa fa?", carte: [
      { e: "🙋😅", t: "Confessa, con tre faccine" },
      { e: "🙈📵", t: "Non risponde e spera" },
      { e: "✋🙅", t: "Scrive «Io no!» per primo" },
      { e: "👉📦", t: "Dà la colpa al corriere" }
    ] },
    { id: "con-i15", q: "Che faccia fa {P} quando legge nel gruppo: «Riunione straordinaria. Argomento: {P}»?", carte: [
      { lui: "terrore", t: "Ripensa alla bici nell'androne" },
      { lui: "furbo", t: "Ha già pronte tre deleghe" },
      { lui: "arrabbiato", t: "Prepara un discorso di 40 minuti" },
      { lui: "esulta", t: "Finalmente un po' di fama" }
    ] },
    { id: "con-i16", q: "{P} deve montare un armadio. Chi si offre di dare una mano?", carte: [
      { chi: "nonno", faccia: "pensieroso", t: "Il nonno del 2°, con 40 attrezzi" },
      { chi: "vicino", faccia: "felice", t: "«Faccio io», e lo rompe" },
      { chi: "bimbo", faccia: "furbo", t: "Un bimbo con le istruzioni in mano" },
      { chi: "meccanico", faccia: "esulta", t: "Il meccanico: tutto al contrario" }
    ] },
    { id: "con-i17", q: "Alle 7 di mattina suonano al citofono di {P}: cercano un altro. Cosa fa {P}?", carte: [
      { e: "🔓😴", t: "Apre senza chiedere chi è" },
      { e: "🎭🗣️", t: "Voce finta: «Non abita più qui»" },
      { e: "🛌🔇", t: "Torna a dormire come niente" },
      { e: "👨‍🏫🔔", t: "Spiega qual è il citofono giusto" }
    ] },
    { id: "con-i18", q: "Chi è il portiere del palazzo di {P}?", carte: [
      { chi: "buttafuori", faccia: "arrabbiato", t: "Un ex buttafuori: «Lei chi è?»" },
      { chi: "nonno", faccia: "furbo", t: "Sa tutto di tutti dal 1980" },
      { chi: "cuoco", faccia: "estasi", t: "Cucina il ragù in portineria" },
      { chi: "presentatore", faccia: "felice", t: "Annuncia chi entra al microfono" }
    ] },
    { id: "con-i19", q: "A {P} non va internet, e c'è una rete aperta: «Condominio_Rossi». Cosa fa {P}?", carte: [
      { e: "📶🍿", t: "Si collega e guarda le serie" },
      { e: "🚪✊", t: "Bussa per chiedere il permesso" },
      { e: "📶🤏", t: "Solo per un messaggio, giura" },
      { e: "🔢🔓", t: "Prova la password: «Rossi123»" }
    ] },
    { id: "con-i20", q: "{P} manda per sbaglio nel gruppo del condominio un vocale in cui si lamenta della vicina. E ora?", carte: [
      { e: "🗑️🙏", t: "Lo cancella e spera" },
      { e: "✍️🤥", t: "«Scusate, era per mia cugina»" },
      { e: "🚪🙇", t: "Va subito a bussare per scusarsi" },
      { e: "🚪🏃", t: "Esce dal gruppo. Per sempre" }
    ] },
    { id: "con-i21", q: "Ad agosto parte tutto il palazzo e lascia le chiavi di casa a {P}. Cosa succede?", carte: [
      { e: "🔑🔑🔑", t: "Un portachiavi gigante con tutte" },
      { e: "🔑❓", t: "Ne perde un mazzo il primo giorno" },
      { e: "🔦🏠", t: "Fa il giro delle case ogni sera" },
      { e: "🔑👴", t: "Le gira al portiere: troppo" }
    ] },
    { id: "con-i22", q: "Davanti alla porta di {P}: una torta e un biglietto, «Scusa per il rumore. Il vicino». E {P}?", carte: [
      { e: "😋🍰", t: "La mangia e perdona tutti" },
      { e: "👃🍰", t: "La annusa: non si fida" },
      { e: "🎂🎂", t: "Ricambia con una torta doppia" },
      { e: "🍰🔊", t: "«Buona. Ma il rumore resta»" }
    ] },
    { id: "con-i23", q: "Il portiere scambia {P} per una star della TV e lo racconta a tutto il palazzo. Cosa fa {P}?", carte: [
      { e: "✍️⭐", t: "Firma autografi fino a sera" },
      { e: "😂🙅", t: "Smentisce, ridendo" },
      { e: "🕶️⭐", t: "Occhiali scuri, e non smentisce" },
      { e: "🛍️⬆️", t: "Si fa portare su la spesa" }
    ] },
    { id: "con-i24", q: "A mezzanotte {P} sbaglia piano, infila la chiave nella porta del vicino… e si apre. E ora?", carte: [
      { e: "🤫🏃", t: "Richiude piano piano e scappa" },
      { e: "👋🛋️", t: "Saluta il vicino sul divano" },
      { e: "🏠🤷", t: "Entra: giura che è casa sua" },
      { e: "🥐🙏", t: "Torna coi cornetti a scusarsi" }
    ] },
    { id: "con-i25", q: "Che faccia fa {P} quando al citofono dicono «Pacco per lei!» e non ha ordinato niente?", carte: [
      { lui: "sorpreso", t: "Lo apre, poi si chiede di chi è" },
      { lui: "esulta", t: "È Natale, chiunque sia stato" },
      { lui: "pensieroso", t: "Ripensa agli acquisti notturni" },
      { lui: "furbo", t: "Firma col nome del vicino" }
    ] },
    { id: "con-i26", q: "Il condominio vota il colore nuovo della facciata. Cosa vota {P}?", carte: [
      { e: "🌈🏢", t: "Arcobaleno: «Così ci trovano»" },
      { e: "⬜😐", t: "Grigio, uguale a prima" },
      { e: "🍑🏖️", t: "Color pesca, effetto vacanza" },
      { e: "🤷🗳️", t: "Non vota. Poi si lamenta" }
    ] }
  ],
  scrivi: [
    { id: "con-s01", q: "Sul biglietto in ascensore, {P} scrive: «Al vicino che canta sotto la doccia alle sei: ___»",
      riserve: ["almeno impara le parole", "accetti anche le richieste?", "domani canto anch'io, più forte"] },
    { id: "con-s02", q: "{P} attacca un foglio sul portone: «Chi ha ___ si presenti all'interno 7»",
      riserve: ["rubato il mio zerbino", "parcheggiato un triciclo in ascensore", "mangiato il mio basilico"] },
    { id: "con-s03", q: "{P} si presenta ai vicini nuovi: «Piacere, sono {P}, quell{o|a} che ___»",
      riserve: ["canta in ascensore, ma piano", "ha il gatto più curioso del palazzo", "perde le chiavi ogni martedì"] },
    { id: "con-s04", q: "{P} suona a tutti i campanelli: «Ho trovato sulle scale ___. È vostro?»",
      riserve: ["un mestolo con dentro il ragù", "una pantofola sola, numero 47", "un criceto che sa già la strada"] },
    { id: "con-s05", q: "{P} propone di dare un nome al palazzo, come alle navi. Quale?",
      riserve: ["Residenza Ascensore Rotto", "Villa Trapano della Domenica", "Palazzo Chi Ha Lasciato il Portone"] },
    { id: "con-s06", q: "{P} entra nel gruppo WhatsApp del condominio. Qual è il suo primo messaggio?",
      riserve: ["Salve! Chi ha un trapano silenzioso?", "Ciao a tutti! Il gatto sul tetto è mio", "Avviso: stasera faccio le prove di canto"] },
    { id: "con-s07", q: "Sul campanello di {P} c'è da anni il nome sbagliato. Cosa c'è scritto?",
      riserve: ["Famiglia Rossi (partiti nel 1997)", "Dott. Nessuno", "Zia Pina e i suoi nove gatti"] },
    { id: "con-s08", q: "Alla riunione, {P} propone una regola nuova: «Da oggi è vietato ___»",
      riserve: ["il trapano prima di mezzogiorno", "salutarsi in ascensore: troppo imbarazzo", "lamentarsi senza portare i biscotti"] },
    { id: "con-s09", q: "{P} scrive il verbale della riunione di condominio. Cosa c'è nell'ultima riga?",
      riserve: ["Finita alle 2. Deciso niente", "La siepe resta. La pace no", "Il signor Bruno ha finito i biscotti"] },
    { id: "con-s10", q: "Il corriere lascia un avviso sulla porta di {P}: «Passato alle 10:02, ___»",
      riserve: ["ho sentito la TV, ma va bene", "il pacco è dalla signora curiosa", "torno quando sarai sotto la doccia"] },
    { id: "con-s11", q: "La vicina curiosa racconta a tutto il palazzo la vita di {P}. Cosa dice?",
      riserve: ["Un pacco al giorno. Ma che lavoro fa?", "Rientra alle 3 e canta sulle scale", "Ha un gatto che nessuno ha mai visto"] },
    { id: "con-s12", q: "Qualcuno blocca il garage di {P}. Sul parabrezza, {P} lascia scritto: «___»",
      riserve: ["Ho la tua targa e anche tanto tempo", "Ti aspetto. Ho portato il pranzo", "La prossima volta ci parcheggio sopra"] },
    { id: "con-s13", q: "Il giorno del trasloco, {P} saluta il gruppo del condominio. Cosa scrive?",
      riserve: ["Addio! Il trapano lo lascio al quarto", "Mi mancherete. Le riunioni no", "Le biglie erano mie. Perdonatemi"] },
    { id: "con-s14", q: "Nella cassetta della posta di {P} c'è un biglietto anonimo dei vicini: «___»",
      riserve: ["Per favore, impara un'altra canzone", "Il tuo gatto viene a cena da noi", "Ti abbiamo visto. Bel pigiama"] },
    { id: "con-s15", q: "Tocca a {P} il turno delle scale. Sul cartello «Bagnato» aggiunge: «___»",
      riserve: ["Si cammina sul corrimano", "Chi passa adesso, le rilava", "Lavate da me. Applausi, grazie"] },
    { id: "con-s16", q: "Il vicino di sotto bussa: «Ma che fa lì sopra tutto il giorno?». Cosa risponde {P}?",
      riserve: ["Alleno le tartarughe per la corsa", "Sposto il divano. Di nuovo", "Provo il ballo per il matrimonio"] },
    { id: "con-s17", q: "Il cane del vicino abbaia ogni volta che passa {P}. Per farselo amico, {P} gli dice: «___»",
      riserve: ["Tranquillo, ho il prosciutto", "Siamo vicini: diamoci del tu", "Abbaia pure, ma piano: è domenica"] }
  ],
  disegna: [
    { id: "con-d01", q: "Disegna il pianerottolo di {P} dopo che ci ha messo tutte le sue cose", su: "scena", adesivi: "🚲🛋️🌵📦" },
    { id: "con-d02", q: "Disegna il balcone di {P} visto dal palazzo di fronte", su: "scena", adesivi: "🧦👕🌿🍅🪁" },
    { id: "con-d03", q: "Disegna la bacheca del condominio piena degli avvisi di {P}", su: "scena", adesivi: "📌📝❗😡" },
    { id: "con-d04", q: "Disegna l'ascensore dopo che {P} l'ha arredato «per renderlo accogliente»", su: "scena", adesivi: "🛋️🖼️🕯️🪞" },
    { id: "con-d05", q: "Disegna la cassetta della posta di {P} dopo un mese di vacanza", su: "scena", adesivi: "✉️📰🍕📦" },
    { id: "con-d06", q: "Disegna cosa vede {P} dallo spioncino quando suonano alle 3 di notte", su: "scena", adesivi: "👁️🐒🎅👽" },
    { id: "con-d07", q: "Disegna su {P} il look con cui scende a buttare la spazzatura", su: "ritratto", adesivi: "🩴🧖🕶️🗑️" },
    { id: "con-d08", q: "Disegna su {P} il look da riunione di condominio", su: "ritratto", adesivi: "📋👓📏🖊️" },
    { id: "con-d09", q: "Disegna su {P} tutto quello che porta su dalla cantina in un viaggio solo", su: "ritratto", adesivi: "📦🚲🎄🧳🪆" },
    { id: "con-d10", q: "Disegna l'albero di Natale del palazzo, addobbato da {P} nell'androne", su: "scena", adesivi: "🎄⭐🎁🧦" },
    { id: "con-d11", q: "Disegna su {P} l'attrezzatura da spia per sentire cosa dicono i vicini", su: "ritratto", adesivi: "👂🎧📡🔍" },
    { id: "con-d12", q: "Disegna la cuccia che {P} costruisce in cortile per il gatto del palazzo", su: "scena", adesivi: "🐟🥛🛏️🧶" }
  ],
  chi: [
    { id: "con-c01", q: "Chi di noi, alla riunione di condominio, farebbe durare la discussione sulla siepe fino a mezzanotte?", titolo: "Processo alla siepe" },
    { id: "con-c02", q: "Chi di noi scriverebbe ogni mattina nel gruppo del condominio «Buongiorno a tutti» con la gif dei fiori?", titolo: "Buongiorno con la gif" },
    { id: "con-c03", q: "Chi di noi correrebbe allo spioncino ogni volta che sente arrivare l'ascensore?", titolo: "Occhio dello spioncino" },
    { id: "con-c04", q: "Chi di noi riceverebbe così tanti pacchi da trasformare il portiere nel suo assistente personale?", titolo: "Valanga di pacchi" },
    { id: "con-c05", q: "Chi di noi stenderebbe i panni bagnati proprio sopra quelli della vicina del piano di sotto?", titolo: "Pioggia dal terzo piano" },
    { id: "con-c06", q: "Chi di noi accenderebbe il trapano la domenica alle otto, «solo per appendere un quadretto»?", titolo: "Trapano della domenica" },
    { id: "con-c07", q: "Chi di noi saluterebbe tutti i vicini per nome… compreso il gatto del quarto piano?", titolo: "Saluti a tutto il palazzo" },
    { id: "con-c08", q: "Chi di noi farebbe la raccolta differenziata così bene da correggere quella dei vicini?", titolo: "Ispezione al bidone" },
    { id: "con-c09", q: "Chi di noi si chiuderebbe fuori casa in accappatoio, uscendo solo per ritirare un pacco?", titolo: "Esilio in accappatoio" },
    { id: "con-c10", q: "Chi di noi, per non incontrare nessuno, aspetterebbe dietro la porta finché il pianerottolo non è libero?", titolo: "Fantasma del pianerottolo" },
    { id: "con-c11", q: "Chi di noi lascerebbe la bici nell'androne, dove è vietato, con un biglietto «solo cinque minuti»?", titolo: "Cinque minuti da sempre" },
    { id: "con-c12", q: "Chi di noi si offrirebbe di innaffiare le piante della vicina in vacanza… e gliele farebbe seccare tutte?", titolo: "Pollice nero del palazzo" },
    { id: "con-c13", q: "Chi di noi organizzerebbe in cortile la festa del condominio, con karaoke fino a mezzanotte?", titolo: "Karaoke in cortile" },
    { id: "con-c14", q: "Chi di noi porterebbe una torta ai vicini appena arrivati, il giorno stesso del trasloco?", titolo: "Benvenuto con torta" }
  ]
});

/* ---------------------------------------------------------
   🎡 ALLA SAGRA DEL PAESE
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "sagra", cod: "sag", nome: "Alla sagra del paese", emoji: "🎡",
  adesivi: "🎡🎠🌭🍖🎈🎯🧸🎺🪗🍭🌽🎟️",
  entrata: [
    "Sagra della porchetta, 47ª edizione. Vicino al palco della banda c'è {P}.",
    "Luci, giostre e profumo di frittelle. Stasera il paese parla solo di {P}.",
    "La Pro Loco taglia il nastro, la banda attacca. Sotto torchio: {P}."
  ],
  immagini: [
    { id: "sag-i01", q: "Arriva {P} alla sagra. Chi c'è sul palco, stasera?", carte: [
      { chi: "dj", faccia: "esulta", t: "Un DJ che mette solo la polka" },
      { chi: "rockstar", faccia: "esulta", t: "La band del paese, sempre stonata" },
      { chi: "presentatore", faccia: "furbo", t: "Chiama sul palco «quello là»" },
      { chi: "clown", faccia: "felice", t: "Un clown che fa bolle giganti" }
    ] },
    { id: "sag-i02", q: "Alla sagra c'è il toro meccanico, e tutti si girano verso {P}. Cosa succede?", carte: [
      { e: "🤠⏱️", t: "Resiste dieci secondi: leggenda" },
      { e: "💥🐂", t: "Cade dopo mezzo secondo" },
      { e: "🐷🙅", t: "«Dopo la porchetta, no»" },
      { e: "📣🙌", t: "Fa il tifo dalla transenna" }
    ] },
    { id: "sag-i03", q: "Che faccia fa {P} quando scende dal tagadà dopo dieci giri?", carte: [
      { lui: "esulta", t: "«Ancora un giro!»" },
      { lui: "disgusto", t: "Cerca una panchina, subito" },
      { lui: "terrore", t: "Le mani ancora sulla sbarra" },
      { lui: "indifferente", t: "Ha mangiato un panino durante" }
    ] },
    { id: "sag-i04", q: "Chi riesce a vendere a {P} la cosa più inutile della sagra?", carte: [
      { chi: "contadino", faccia: "furbo", t: "Il contadino: 4 chili di zucchine" },
      { chi: "cuoco", faccia: "estasi", t: "Il venditore di pentole magiche" },
      { chi: "nonna", faccia: "felice", t: "Una nonna coi centrini a uncinetto" },
      { chi: "bimbo", faccia: "finto", t: "Un bimbo che vende sassi dipinti" }
    ] },
    { id: "sag-i05", q: "Alla pesca di beneficenza {P} vince un barattolo di sottaceti formato famiglia. Cosa fa?", carte: [
      { e: "🥳🫙", t: "Esulta come se fosse un'auto" },
      { e: "🤲👵", t: "Lo regala alla signora accanto" },
      { e: "🔁🎟️", t: "Ritenta per cambiare premio" },
      { e: "🫙🍴", t: "Lo apre e li offre a tutti" }
    ] },
    { id: "sag-i06", q: "Tiro alla fune tra le contrade. Chi c'è in squadra con {P}?", carte: [
      { chi: "nonno", faccia: "arrabbiato", t: "Un nonno che non molla mai" },
      { chi: "calciatore", faccia: "esulta", t: "Il centravanti del paese" },
      { chi: "bimbo", faccia: "pensieroso", t: "Un bimbo di sei anni, serissimo" },
      { chi: "cuoco", faccia: "felice", t: "Il porchettaro, col grembiule" }
    ] },
    { id: "sag-i07", q: "Al tirassegno, a {P} manca un centro per il premio grande. Ultimo colpo. Cosa succede?", carte: [
      { e: "🎯😬", t: "Mira dieci secondi, e sbaglia" },
      { e: "🕵️🎯", t: "«Il bersaglio è truccato!»" },
      { e: "🎯🎉", t: "Centro! Salta di gioia" },
      { e: "🔁🎟️", t: "Ripaga finché non vince" }
    ] },
    { id: "sag-i08", q: "La TV locale vuole intervistare {P} sulla sagra. Chi ha il microfono?", carte: [
      { chi: "presentatore", faccia: "estasi", t: "Un presentatore in giacca lucida" },
      { chi: "influencer", f: "d", faccia: "felice", t: "Una influencer che non sa dov'è" },
      { chi: "nonno", faccia: "furbo", t: "Un nonno che fa solo domande sue" },
      { chi: "bimbo", faccia: "esulta", t: "Un bimbo col microfono finto" }
    ] },
    { id: "sag-i09", q: "Alla tombola in piazza a {P} manca un numero. Esce, ma un altro grida «Tombola!» prima. E {P}?", carte: [
      { e: "📣🙋", t: "Urla «TOMBOLA!» lo stesso" },
      { e: "🔍🔢", t: "Ricontrolla numero per numero" },
      { e: "🗑️😔", t: "Accartoccia la cartella" },
      { e: "👏😬", t: "Complimenti, a denti stretti" }
    ] },
    { id: "sag-i10", q: "In piena sagra comincia a diluviare. Cosa fa {P}?", carte: [
      { e: "☔🐷", t: "Sotto il gazebo della porchetta" },
      { e: "💃🌧️", t: "Balla sotto la pioggia" },
      { e: "🚗💨", t: "Corre in macchina, e via" },
      { e: "🗑️🧥", t: "Mantella col sacco dell'umido" }
    ] },
    { id: "sag-i11", q: "{P} perde la lotteria per un numero. Chi ha il biglietto vincente, quello accanto al suo?", carte: [
      { chi: "bimbo", faccia: "esulta", t: "Un bimbo che piange dalla gioia" },
      { chi: "nonna", faccia: "furbo", t: "La nonna che vince ogni anno" },
      { chi: "zio", faccia: "sorpreso", t: "Lo zio, che non sapeva di giocare" },
      { chi: "vigile", faccia: "felice", t: "Il vigile, che passava di lì" }
    ] },
    { id: "sag-i12", q: "{P} compra lo zucchero filato più grande di tutta la sagra. Che fine fa?", carte: [
      { e: "😋⚡", t: "Finito prima di arrivare al tavolo" },
      { e: "🤲☁️", t: "Un ciuffo a testa per tutti" },
      { e: "☁️💇", t: "Appiccicato ai capelli in 2 minuti" },
      { e: "🏆☁️", t: "Tenuto in mano come un trofeo" }
    ] },
    { id: "sag-i13", q: "Che faccia fa {P} quando l'altoparlante annuncia: «È finita la porchetta»?", carte: [
      { lui: "triste", t: "Annusa l'aria dove c'era" },
      { lui: "arrabbiato", t: "Vuole parlare con la Pro Loco" },
      { lui: "indifferente", t: "Ha tre panini nello zaino" },
      { lui: "furbo", t: "Conosce il porchettaro: ce n'è" }
    ] },
    { id: "sag-i14", q: "Alla sfilata, chi guida il trattore con sopra {P}?", carte: [
      { chi: "contadino", faccia: "sonno", t: "Il contadino, a tre all'ora" },
      { chi: "nonno", faccia: "esulta", t: "Il nonno, che sorpassa la banda" },
      { chi: "bimbo", faccia: "furbo", t: "Un bimbo: «Tanto è tutto dritto»" },
      { chi: "vigile", faccia: "arrabbiato", t: "Il vigile, che lo insegue a piedi" }
    ] },
    { id: "sag-i15", q: "Alla corsa nei sacchi, {P} è in testa a metà percorso. Cosa succede?", carte: [
      { e: "🙌💥", t: "Esulta troppo presto e cade" },
      { e: "🏆🛍️", t: "Giro d'onore dentro il sacco" },
      { e: "🧒🏁", t: "Rallenta e fa vincere un bimbo" },
      { e: "🔁😤", t: "Perde e chiede di rifarla" }
    ] },
    { id: "sag-i16", q: "Il parcheggio della sagra è un campo pieno di fango. Cosa fa {P}?", carte: [
      { e: "🚶📏", t: "Parcheggia a due chilometri" },
      { e: "🚗💪", t: "Si impantana: spinge mezzo paese" },
      { e: "🧒🔑", t: "Lascia l'auto al ragazzino" },
      { e: "🚲😎", t: "Arriva in bici e saluta tutti" }
    ] },
    { id: "sag-i17", q: "Sui seggiolini volanti, chi c'è nel seggiolino dietro {P}?", carte: [
      { chi: "bimbo", faccia: "linguaccia", t: "Un bimbo che spinge a ogni giro" },
      { chi: "nonna", faccia: "esulta", t: "La nonna, che urla di gioia" },
      { chi: "cugino", faccia: "furbo", t: "Il cugino: filma solo le urla" },
      { chi: "nonno", faccia: "sonno", t: "Il nonno, che si addormenta" }
    ] },
    { id: "sag-i18", q: "Alle 23 partono i fuochi d'artificio. Cosa fa {P}?", carte: [
      { e: "📱🎆", t: "Li filma tutti, senza guardarli" },
      { e: "🧐🎆", t: "«Quelli dell'anno scorso, però…»" },
      { e: "😮🎆", t: "«Oooh» più forte dei bambini" },
      { e: "🙉⏳", t: "Orecchie tappate, conta i minuti" }
    ] },
    { id: "sag-i19", q: "Alla bancarella delle frittelle c'è una fila lunghissima. Cosa fa {P}?", carte: [
      { e: "🗣️🤝", t: "Fa amicizia con tutta la fila" },
      { e: "☝️🏃", t: "«Ne prendo solo una!» e passa" },
      { e: "🚗🏘️", t: "Va alla sagra del paese vicino" },
      { e: "📲🧍", t: "Manda un amico a farla" }
    ] },
    { id: "sag-i20", q: "{P} finisce per sbaglio a sfilare con la banda. Chi c'è al suo fianco?", carte: [
      { chi: "nonno", faccia: "pensieroso", t: "Il nonno col tamburo, fuori tempo" },
      { chi: "bimbo", faccia: "indifferente", t: "Un bimbo col triangolo, serissimo" },
      { chi: "vigile", faccia: "furbo", t: "Il vigile: dirige traffico e banda" },
      { chi: "prof", f: "d", faccia: "estasi", t: "La prof di musica delle medie" }
    ] },
    { id: "sag-i21", q: "{P} vince il primo premio della lotteria della sagra: un maialino vero. Cosa fa?", carte: [
      { e: "🐷❤️", t: "Lo porta a casa e gli dà un nome" },
      { e: "🔄🚲", t: "Lo scambia col secondo premio" },
      { e: "🐷🏡", t: "Lo regala alla fattoria del paese" },
      { e: "🐷🤗", t: "Lo tiene in braccio tutta la sera" }
    ] },
    { id: "sag-i22", q: "La Pro Loco nomina {P} ospite d'onore: sfila sul carro dei fiori con la fascia. Cosa fa?", carte: [
      { e: "👑👋", t: "Saluta come alla parata reale" },
      { e: "💐🫣", t: "Si nasconde dietro i fiori" },
      { e: "🍬🎯", t: "Lancia caramelle ai bambini" },
      { e: "🙅➡️", t: "Rifiuta e ci manda un amico" }
    ] },
    { id: "sag-i23", q: "Il porchettaro sparisce per un'ora e lascia a {P} lo stand, con la fila davanti. Cosa succede?", carte: [
      { e: "🥪🥪", t: "Panini giganti: stand in perdita" },
      { e: "🤫🐷", t: "Crosticina solo agli amici" },
      { e: "😋🐷", t: "Mezza porchetta, di nascosto" },
      { e: "📈🏷️", t: "Alza i prezzi e raddoppia" }
    ] },
    { id: "sag-i24", q: "Il cantante della serata chiama {P} sul palco per un duetto davanti a tutto il paese. Cosa fa?", carte: [
      { e: "🎤🔁", t: "Canta e chiede il bis" },
      { e: "🎤👥", t: "Passa il microfono al pubblico" },
      { e: "🫣🐷", t: "Sparisce dietro la porchetta" },
      { e: "🎶🤏", t: "Canta solo il ritornello" }
    ] },
    { id: "sag-i25", q: "Che faccia fa {P} quando il mago della sagra tira fuori dal cappello il suo portafoglio?", carte: [
      { lui: "sorpreso", t: "Si tasta tutte le tasche" },
      { lui: "terrore", t: "Controlla che ci sia ancora tutto" },
      { lui: "esulta", t: "Applaude: trucco del secolo" },
      { lui: "furbo", t: "Era d'accordo col mago" }
    ] },
    { id: "sag-i26", q: "{P} fa da giudice alla gara di torte. La peggiore è della nonna di un amico. Cosa fa?", carte: [
      { e: "🔟🤝", t: "Voto alto, per amicizia" },
      { e: "🗣️🪶", t: "La verità, con molto tatto" },
      { e: "🍰🔁", t: "«Riassaggio, per sicurezza»" },
      { e: "🙅🍴", t: "Si dichiara incompetente" }
    ] }
  ],
  scrivi: [
    { id: "sag-s01", q: "Al ballo liscio in piazza, la signora più anziana invita {P}. Ballando, sussurra: «___»",
      riserve: ["Mi pesti i piedi da tre canzoni", "Nel '72 ballavo meglio di così", "Sorridi: ci guarda tutto il paese"] },
    { id: "sag-s02", q: "{P} inventa una sagra nuova per il paese. Come si chiama?",
      riserve: ["Sagra della polpetta che rotola", "Festa del panino che non finisce", "Sagra del pelapatate miracoloso"] },
    { id: "sag-s03", q: "Sul cartello della sua bancarella, {P} scrive: «___»",
      riserve: ["Assaggi gratis: uno solo, Gino", "Se non compri, almeno sorridi", "Si accettano baratti in salame"] },
    { id: "sag-s04", q: "Al banco della porchetta, {P} ordina il panino «come piace a me»: «___»",
      riserve: ["Crosticina doppia, pane facoltativo", "Come quello del sindaco, ma più alto", "Uno subito e uno per il ritorno"] },
    { id: "sag-s05", q: "Il paese dà a {P} le chiavi della sagra. Qual è il primo decreto?",
      riserve: ["Porchetta gratis a chi compie gli anni", "Vietato chiudere prima delle tre", "Il tagadà ora gira al contrario"] },
    { id: "sag-s06", q: "Il presidente della Pro Loco ringrazia {P} dal palco perché ___",
      riserve: ["ha mangiato mezza porchetta, senza pane", "ha ritrovato il trombone della banda", "ha spinto fuori dal fango dodici auto"] },
    { id: "sag-s07", q: "{P} vince il concorso «Miglior sugo del paese». Il segreto, dice, è ___",
      riserve: ["un cucchiaio di pazienza e uno di nonna", "cuocerlo mentre si guarda la partita", "assaggiarlo ogni cinque minuti"] },
    { id: "sag-s08", q: "La banda chiede a {P} il titolo della marcia da suonare. Cosa propone?",
      riserve: ["Marcia della porchetta trionfante", "Polka della frittella volante", "Inno al panino col salame"] },
    { id: "sag-s09", q: "Sul palco c'è la gara «Il paese ha talento». Il talento di {P} è ___",
      riserve: ["imitare il verso del tacchino", "aprire le noci con una mano sola", "dire tutte le province in un minuto"] },
    { id: "sag-s10", q: "Alla sagra c'è la gara «Indovina il peso del prosciutto». Sul foglietto {P} scrive: «___»",
      riserve: ["Quanto la mia valigia di Ferragosto", "Esattamente un prosciutto", "Fatemelo assaggiare e vi dico"] },
    { id: "sag-s11", q: "Il sindaco presenta {P} dal palco, davanti a tutto il paese: «Ecco a voi ___»",
      riserve: ["chi ha finito le frittelle alle nove", "la leggenda del tagadà, edizione 2026", "un parente di… boh, applaudite"] },
    { id: "sag-s12", q: "{P} non trova più l'auto nel parcheggio della sagra. Al vigile la descrive così: «___»",
      riserve: ["Grigia, sporca di fango, come tutte", "Quella con dentro il mio maialino", "Ha la radio accesa. Credo"] },
    { id: "sag-s13", q: "Alle 2 di notte smontano gli stand, e {P} è ancora lì. Cosa dice ai volontari?",
      riserve: ["Avanza porchetta? Chiedo per un amico", "Vi aiuto io, ma prima un panino", "Io qui ci dormo, se non vi dispiace"] },
    { id: "sag-s14", q: "{P} registra lo spot della sagra per la radio locale: «Venite alla sagra, ___»",
      riserve: ["la tombola dura fino all'alba", "il parcheggio è a soli due chilometri", "il tagadà non perdona nessuno"] },
    { id: "sag-s15", q: "{P} torna dalla sagra con un peluche gigante e gli dà un nome. Quale?",
      riserve: ["Porchettino", "Signor Frittella", "Capitan Tagadà"] },
    { id: "sag-s16", q: "{P} vuole un giro gratis sull'autoscontro. Al bigliettaio dice: «___»",
      riserve: ["Il sindaco è mio cugino", "È il mio compleanno. Quasi", "Non vado a sbattere, giuro"] },
    { id: "sag-s17", q: "{P} dà una mano alla Pro Loco. Cosa c'è scritto sul suo cartellino?",
      riserve: ["STAFF (non chiedetemi niente)", "Sicurezza tovaglioli", "Capo frittelle (in prova)"] }
  ],
  disegna: [
    { id: "sag-d01", q: "Disegna su {P} il cappello con la piuma e i baffoni del capobanda", su: "ritratto", adesivi: "🪶🎺🥁" },
    { id: "sag-d02", q: "Disegna su {P} il costume della sua contrada per il palio degli asini", su: "ritratto", adesivi: "🐴🚩🛡️🎽" },
    { id: "sag-d03", q: "Disegna su {P} il costume da ortaggio per la sfilata dei carri", su: "ritratto", adesivi: "🥕🍆🧅🌽🥬" },
    { id: "sag-d04", q: "Disegna su {P} tutti i premi vinti al tirassegno, addosso", su: "ritratto", adesivi: "🐟🦄🎈🧸" },
    { id: "sag-d05", q: "Disegna su {P} la caricatura della sagra: esagera la sua passione", su: "ritratto", adesivi: "🎨🖌️👑" },
    { id: "sag-d06", q: "Disegna la mascotte della sagra della porchetta, inventata da {P}", su: "scena", adesivi: "🐷👑🧢🎉" },
    { id: "sag-d07", q: "Disegna la giostra nuova inventata da {P}", su: "scena", adesivi: "🌀🚀🐉🎢" },
    { id: "sag-d08", q: "Disegna la pista dell'autoscontro quando guida {P}", su: "scena", adesivi: "🚗💥🚧⭐" },
    { id: "sag-d09", q: "Disegna cosa vede {P} dalla ruota panoramica, ferma da mezz'ora", su: "scena", adesivi: "🎡🌭🐄⛪🎪" },
    { id: "sag-d10", q: "Disegna il gonfiabile che {P} vorrebbe alla sagra", su: "scena", adesivi: "🏰🐳🦖🎈" },
    { id: "sag-d11", q: "Disegna la mappa della sagra secondo {P}: solo i posti dove si mangia", su: "scena", adesivi: "🗺️📍🍕🥨" },
    { id: "sag-d12", q: "Disegna il manifesto della sagra con {P} come testimonial", su: "bianco", adesivi: "📜⭐📣" }
  ],
  chi: [
    { id: "sag-c01", q: "Chi di noi si iscriverebbe alla gara dei mangiatori di polenta e si farebbe squalificare per aver barato?", titolo: "Squalifica per polenta" },
    { id: "sag-c02", q: "Chi di noi, dopo un'ora alla sagra, conoscerebbe tutti per nome e avrebbe già un soprannome in paese?", titolo: "Cittadinanza onoraria" },
    { id: "sag-c03", q: "Chi di noi finirebbe a ballare il liscio con una signora di ottant'anni e non riuscirebbe più a scappare?", titolo: "Ostaggio del liscio" },
    { id: "sag-c04", q: "Chi di noi salirebbe sull'autoscontro solo per inseguire la stessa persona per tutto il giro?", titolo: "Mirino da autoscontro" },
    { id: "sag-c05", q: "Chi di noi salirebbe sul trattore in esposizione e si farebbe fare cento foto al volante?", titolo: "Trattorista per un giorno" },
    { id: "sag-c06", q: "Chi di noi si farebbe leggere la mano alla bancarella e ci crederebbe parola per parola?", titolo: "Futuro alla bancarella" },
    { id: "sag-c07", q: "Chi di noi si ritroverebbe, per sbaglio, presidente della Pro Loco per l'anno prossimo?", titolo: "Presidente per sbaglio" },
    { id: "sag-c08", q: "Chi di noi tornerebbe a casa con un pesce rosso vinto alla sagra, senza sapere dove metterlo?", titolo: "Pesciolino senza casa" },
    { id: "sag-c09", q: "Chi di noi riuscirebbe a farsi dare dal porchettaro la fetta con la crosticina, ogni volta?", titolo: "Crosticina raccomandata" },
    { id: "sag-c10", q: "Chi di noi arriverebbe in cima al palo della cuccagna… e poi non riuscirebbe più a scendere?", titolo: "In cima alla cuccagna" },
    { id: "sag-c11", q: "Chi di noi sfiderebbe i vecchietti del paese alla gara di bocce e perderebbe malissimo?", titolo: "Umiliazione a bocce" },
    { id: "sag-c12", q: "Chi di noi passerebbe un'ora alla bancarella dei dolci a farsi dare gli assaggi gratis?", titolo: "Assaggio gratis, grazie" },
    { id: "sag-c13", q: "Chi di noi si farebbe convincere a fare un giro sul pony dei bambini?", titolo: "Giro sul pony" },
    { id: "sag-c14", q: "Chi di noi passerebbe la sagra a cercare la bancarella degli arrosticini che c'era «l'anno scorso, giuro»?", titolo: "Bancarella fantasma" }
  ]
});

/* ---------------------------------------------------------
   🚑 AL PRONTO SOCCORSO (solo piccoli incidenti buffi)
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "pronto", cod: "pro", nome: "Al pronto soccorso", emoji: "🚑",
  adesivi: "🩹🩼🧊🌡️🛏️🍮☕🎈🖊️🧸🪑🔢",
  entrata: [
    "Sala d'attesa, numerino 214. Stanno chiamando il 38. Coraggio, {P}.",
    "Codice bianco, sedia di plastica, caffè alla macchinetta. Tocca a {P}.",
    "Niente di grave, giurano tutti. Tranne {P}: ha già avvisato i parenti."
  ],
  immagini: [
    { id: "pro-i01", q: "Chi accompagna {P} al pronto soccorso?", carte: [
      { chi: "mamma", faccia: "terrore", t: "La mamma, con la valigia" },
      { chi: "nonno", faccia: "furbo", t: "Il nonno: conosce tutti i medici" },
      { chi: "cugino", faccia: "esulta", t: "Il cugino, che filma tutto" },
      { chi: "vicino", faccia: "sonno", t: "Il vicino: l'unico sveglio" }
    ] },
    { id: "pro-i02", q: "Al pronto soccorso danno a {P} il codice bianco: sei ore di attesa. Cosa fa {P}?", carte: [
      { e: "🛋️🤝", t: "Si sistema e fa amicizia con tutti" },
      { e: "⏰❓", t: "Chiede ogni mezz'ora quanto manca" },
      { e: "🏠🙄", t: "«Ormai m'è passato» e va via" },
      { e: "📱🔴", t: "Racconta tutto in diretta" }
    ] },
    { id: "pro-i03", q: "Che faccia fa {P} quando, dopo sei ore, scopre di aver aspettato nel reparto sbagliato?", carte: [
      { lui: "arrabbiato", t: "Pretende la visita lì, e subito" },
      { lui: "triste", t: "Ricomincia la fila da capo" },
      { lui: "sorpreso", t: "«Ma se c'era scritto!»" },
      { lui: "indifferente", t: "Tanto era lì per il caffè" }
    ] },
    { id: "pro-i04", q: "Finalmente chiamano {P}. Chi c'è ad aspettare in ambulatorio?", carte: [
      { chi: "dottore", faccia: "sonno", t: "Il medico di turno da 30 ore" },
      { chi: "dottore", f: "d", faccia: "estasi", t: "Una dottoressa che ride di tutto" },
      { chi: "prof", faccia: "pensieroso", t: "Il tirocinante, col manuale" },
      { chi: "infermiere", faccia: "furbo", t: "L'infermiere che fa le imitazioni" }
    ] },
    { id: "pro-i05", q: "L'infermiere sta per fare la puntura a {P}. Cosa fa {P}?", carte: [
      { e: "👁️💉", t: "Fissa l'ago senza battere ciglio" },
      { e: "🙈🎶", t: "Gira la testa e canticchia" },
      { e: "❓🔁", t: "«Ma è proprio necessaria?» ×5" },
      { e: "😂🃏", t: "Racconta barzellette per distrarsi" }
    ] },
    { id: "pro-i06", q: "Chi aspetta in sala d'attesa da ancora più ore di {P}?", carte: [
      { chi: "calciatore", faccia: "triste", t: "Un calciatore che recita il fallo" },
      { chi: "bimbo", faccia: "imbarazzo", t: "Un bimbo col secchiello in testa" },
      { chi: "supereroe", faccia: "finto", t: "Un supereroe caduto dal divano" },
      { chi: "nonna", faccia: "felice", t: "Una nonna col pranzo per tutti" }
    ] },
    { id: "pro-i07", q: "Il medico chiede a {P}: «Le metto il gesso. Di che colore lo vuole?». Cosa sceglie?", carte: [
      { e: "💗", t: "Rosa fluo, senza pensarci" },
      { e: "🪖🌿", t: "Mimetico, da film d'azione" },
      { e: "⬜✍️", t: "Bianco: così lo firmano tutti" },
      { e: "✨💎", t: "«Ce l'avete coi brillantini?»" }
    ] },
    { id: "pro-i08", q: "Chi ha fatto finire {P} al pronto soccorso?", carte: [
      { chi: "bimbo", faccia: "furbo", t: "Il nipotino, col monopattino" },
      { chi: "nonna", faccia: "felice", t: "La nonna: «Assaggia, è bollente»" },
      { chi: "allenatore", faccia: "esulta", t: "Il personal trainer, primo giorno" },
      { e: "🐕💨", t: "Il cane, che ha visto un gatto" }
    ] },
    { id: "pro-i09", q: "L'infermiere chiede a {P}: «Quanto fa male, da 1 a 10?». Cosa risponde {P}?", carte: [
      { e: "🔟😭", t: "Dieci, con le lacrime agli occhi" },
      { e: "3️⃣😤", t: "Tre, per non sembrare debole" },
      { e: "🎭1️⃣1️⃣", t: "«Undici», con voce teatrale" },
      { e: "🤔7️⃣", t: "Ci pensa: «Sette e mezzo»" }
    ] },
    { id: "pro-i10", q: "Che faccia fa {P} quando il dottore guarda la lastra e dice solo «Mmh»?", carte: [
      { lui: "terrore", t: "Chiama subito la mamma" },
      { lui: "pensieroso", t: "Legge la lastra al contrario" },
      { lui: "indifferente", t: "Pensa già al budino" },
      { lui: "finto", t: "Sorride, sperando in un «niente»" }
    ] },
    { id: "pro-i11", q: "In osservazione per due ore: chi c'è nel letto accanto a {P}?", carte: [
      { chi: "nonno", faccia: "felice", t: "Ti mostra le sue lastre dal 1970" },
      { chi: "influencer", faccia: "finto", piu: { mano: "telefono" }, t: "Diretta: «Giorno 1 in ospedale»" },
      { chi: "cuoco", faccia: "disgusto", t: "Dà i voti al brodino, da chef" },
      { chi: "bimbo", faccia: "esulta", t: "Fa su e giù col letto elettrico" }
    ] },
    { id: "pro-i12", q: "Il medico dice a {P}: «Niente di grave, può tornare a casa». Cosa fa {P}?", carte: [
      { e: "🦘🚪", t: "Esce saltellando" },
      { e: "🩻🙏", t: "Vuole la lastra lo stesso" },
      { e: "📄😏", t: "Chiede il certificato per 2 giorni" },
      { e: "😞🦴", t: "Ci resta male: voleva il gesso" }
    ] },
    { id: "pro-i13", q: "Con {P} c'è la mamma, che risponde al dottore al posto suo. Cosa fa {P}?", carte: [
      { e: "🤐👍", t: "La lascia parlare: si fa prima" },
      { e: "☝️🔁", t: "La corregge su ogni dettaglio" },
      { e: "🙅👩", t: "Fa segno: «Non ascoltarla»" },
      { e: "😳⬆️", t: "Fissa il soffitto dalla vergogna" }
    ] },
    { id: "pro-i14", q: "Per una storta, {P} va a fare la lastra in barella. Chi la spinge?", carte: [
      { chi: "infermiere", faccia: "esulta", t: "Un infermiere: curve a tutta" },
      { chi: "nonno", faccia: "furbo", t: "Un nonno che fa i sorpassi" },
      { chi: "cugino", faccia: "linguaccia", t: "Il cugino che fa «brum brum»" },
      { chi: "bimbo", faccia: "triste", t: "Un bimbo: vuole fare a cambio" }
    ] },
    { id: "pro-i15", q: "Il dottore prescrive a {P} una settimana di riposo assoluto. Come la passa?", carte: [
      { e: "🛋️👑", t: "Si fa portare tutto sul divano" },
      { e: "⚽🤫", t: "Il giorno dopo è già al calcetto" },
      { e: "📞🔁", t: "Lo racconta a tutti, uno a uno" },
      { e: "📸🩹", t: "Una foto del cerotto al giorno" }
    ] },
    { id: "pro-i16", q: "L'infermiere mette a {P} il braccialetto col nome… scritto sbagliato. Cosa fa {P}?", carte: [
      { e: "✏️🔤", t: "Fa correggere ogni lettera" },
      { e: "🆕😎", t: "Se lo tiene: ora si chiama così" },
      { e: "👑📝", t: "Ci aggiunge «Sua Maestà»" },
      { e: "📸😂", t: "Foto, e la manda nel gruppo" }
    ] },
    { id: "pro-i17", q: "Il tabellone salta il numero di {P}. Chi passa avanti?", carte: [
      { chi: "re", faccia: "indifferente", t: "Uno con la corona: «Ho fretta»" },
      { chi: "nonno", faccia: "furbo", t: "«Sono amico del primario»" },
      { chi: "sposo", faccia: "imbarazzo", t: "Uno sposo, scivolato sulla torta" },
      { chi: "cowboy", faccia: "triste", t: "Un cowboy, da una festa a tema" }
    ] },
    { id: "pro-i18", q: "In sala d'attesa la TV è bloccata sulle televendite di materassi, da tre ore. Cosa fa {P}?", carte: [
      { e: "🛏️📞", t: "Alla fine ne ordina uno" },
      { e: "🔍📺", t: "Cerca il telecomando ovunque" },
      { e: "🎙️📺", t: "Fa la telecronaca alla sala" },
      { e: "😴🛏️", t: "Si addormenta: funzionano" }
    ] },
    { id: "pro-i19", q: "Che faccia fa {P} quando il gesso comincia a prudere e non si può grattare?", carte: [
      { lui: "furbo", t: "Ha già pronto un ferro da maglia" },
      { lui: "triste", t: "Sopporta, fissando il soffitto" },
      { lui: "arrabbiato", t: "Vuole toglierlo, subito" },
      { lui: "sonno", t: "Non sente niente: dorme" }
    ] },
    { id: "pro-i20", q: "Il dottore riconosce {P}: «Ancora lei? È la terza volta questo mese!». Cosa fa {P}?", carte: [
      { e: "😄👨‍⚕️", t: "Gli chiede come sta la famiglia" },
      { e: "🙏🆕", t: "«Stavolta è diverso, giuro»" },
      { e: "👉🧑‍🤝‍🧑", t: "«Sono qui per un amico»" },
      { e: "💳🎁", t: "Chiede se c'è la tessera fedeltà" }
    ] },
    { id: "pro-i21", q: "In sala d'attesa un signore scambia {P} per il medico di turno e chiede un parere. Cosa fa {P}?", carte: [
      { e: "🩺🤓", t: "Consiglio serissimo, inventato" },
      { e: "🙅🩺", t: "Dice subito che si sbaglia" },
      { e: "👉👨‍⚕️", t: "Lo manda dall'infermiere" },
      { e: "👂😌", t: "Ascolta tutto e annuisce" }
    ] },
    { id: "pro-i22", q: "L'infermiere chiama ad alta voce il soprannome d'infanzia di {P}: l'ha scritto la mamma. Cosa fa?", carte: [
      { e: "🙋🌟", t: "Si alza e saluta come una star" },
      { e: "⏳🤐", t: "Aspetta che dicano il nome vero" },
      { e: "🧥🙈", t: "Si alza col cappuccio in testa" },
      { e: "😂🪑", t: "Ride così tanto che non si alza" }
    ] },
    { id: "pro-i23", q: "Chi viene a trovare {P} con il regalo più assurdo?", carte: [
      { chi: "zia", faccia: "felice", t: "La zia, con una teglia di lasagne" },
      { chi: "clown", faccia: "esulta", t: "Un clown di corsia, in esclusiva" },
      { chi: "cugino", faccia: "indifferente", t: "Il cugino: il caricatore sbagliato" },
      { chi: "capo", faccia: "finto", t: "Il capo: «Ti ho portato il pc»" }
    ] },
    { id: "pro-i24", q: "Cosa si porta {P} per passare l'attesa al pronto soccorso?", carte: [
      { e: "🧩✏️", t: "Le parole crociate del nonno" },
      { e: "🥪🥪", t: "Panini per tutta la sala" },
      { e: "🎧📺", t: "Cuffie e tre serie scaricate" },
      { e: "🛏️🧸", t: "Cuscino e peluche, da casa" }
    ] },
    { id: "pro-i25", q: "{P} arriva al pronto soccorso col dito incastrato nel barattolo della marmellata. Cosa fa?", carte: [
      { e: "🫙👋", t: "Saluta tutti col barattolo" },
      { e: "🧥🤫", t: "Nasconde la mano nella giacca" },
      { e: "🔬🤓", t: "«È un esperimento scientifico»" },
      { e: "🤳🫙", t: "Un selfie, per ricordo" }
    ] }
  ],
  scrivi: [
    { id: "pro-s01", q: "Il medico chiede a {P}: «Com'è successo?». Cosa risponde {P}?",
      riserve: ["Ho fatto la ruota per la nonna", "Il divano si è spostato da solo", "Inseguivo il gatto. Ha vinto lui"] },
    { id: "pro-s02", q: "L'infermiere chiede chi avvisare in caso di bisogno. {P} detta: «Chiamate ___»",
      riserve: ["la nonna: arriva prima dell'ambulanza", "nessuno, sennò viene tutto il paese", "mio cugino, ma non ditegli perché"] },
    { id: "pro-s03", q: "Prima di entrare in ambulatorio, {P} si raccomanda con chi l'accompagna: «___»",
      riserve: ["Se urlo, è per finta", "Tieni la merenda, la rivoglio intera", "Qualunque cosa dica, annuisci e basta"] },
    { id: "pro-s04", q: "{P} ha il numero 214 e stanno chiamando il 38. Scrive nel gruppo: «___»",
      riserve: ["Il 37 mi ha invitato al matrimonio", "Un signore mi vuole adottare", "Portate la cena. Per otto"] },
    { id: "pro-s05", q: "{P} compila il modulo dell'accettazione. Alla voce «Note», scrive: «___»",
      riserve: ["Mordo se mi fate la puntura", "Mi piace il budino al cioccolato", "Sono qui solo per accompagnare"] },
    { id: "pro-s06", q: "{P} racconta l'incidente sui social per fare colpo. Cosa scrive?",
      riserve: ["Incidente in missione. Missione: cucina", "Ho salvato un gatto. Il gatto sta bene", "Non posso dire di più. Missione segreta"] },
    { id: "pro-s07", q: "L'infermiere strappa il cerotto a {P} con un colpo solo. Cosa urla {P}?",
      riserve: ["Mamma! Mammaaaa!", "Piano, era un cerotto vintage", "Ci eravamo affezionati!"] },
    { id: "pro-s08", q: "In sala d'attesa {P} fonda un gruppo WhatsApp con gli altri pazienti. Come si chiama?",
      riserve: ["Quelli del codice bianco", "Sopravvissuti alla macchinetta", "Sedie di plastica per sempre"] },
    { id: "pro-s09", q: "Il dottore scrive la cura per {P}. Sulla ricetta c'è scritto: «___»",
      riserve: ["Divano e serie TV, tre volte al giorno", "Vietati i balletti per sei mesi", "Gelato, solo quando fa male"] },
    { id: "pro-s10", q: "Prima della lastra il tecnico dice: «Non si muova». {P} resiste tre secondi, poi: «___»",
      riserve: ["Mi prude il naso, è un'emergenza", "Posso almeno respirare?", "Rifacciamola, avevo gli occhi chiusi"] },
    { id: "pro-s11", q: "{P} vuole andare via in tempo per vedere la partita. All'infermiere giura: «___»",
      riserve: ["Guardi, cammino benissimo. Ahi", "È solo un graffio, il gesso è di moda", "Torno domani, promesso, con la pizza"] },
    { id: "pro-s12", q: "L'infermiere chiede a {P}: «Allergie?». {P} risponde: «Sì, ___»",
      riserve: ["alle attese più lunghe di sei ore", "ai numerini che non arrivano mai", "alle punture. E alle domande"] },
    { id: "pro-s13", q: "Finalmente chiamano {P}, che si alza e dice a tutta la sala: «___»",
      riserve: ["Ce l'ho fatta! Vi voglio bene!", "Addio, amici del codice bianco", "Vi lascio la sedia: è calda"] },
    { id: "pro-s14", q: "La macchinetta dell'ospedale si mangia l'euro di {P}. Sopra ci attacca un biglietto: «___»",
      riserve: ["Mi devi un euro e la dignità", "Ti ho dato tutto. Tu niente", "Il budino lo prendo altrove"] },
    { id: "pro-s15", q: "Un bambino in sala d'attesa chiede a {P}: «Cosa ti è successo?». Cosa risponde {P}?",
      riserve: ["Ho combattuto un drago. Ha vinto lui", "Mi ha morso un pinguino, giuro", "Ho mangiato troppa verdura"] },
    { id: "pro-s16", q: "{P} chiede all'infermiere una cosa speciale per l'attesa. Cosa chiede?",
      riserve: ["Un cuscino e il wifi del primario", "Il budino. Due. Anzi, tre", "Di chiamarmi prima del 38"] },
    { id: "pro-s17", q: "{P} arriva in ambulanza per una cosa piccolissima. Scendendo, dice ai barellieri: «___»",
      riserve: ["Grazie del passaggio, ora vado a piedi", "La sirena si poteva anche evitare", "Al ritorno mi lasciate sotto casa?"] }
  ],
  disegna: [
    { id: "pro-d01", q: "Disegna su {P} il gesso al braccio pieno di firme, cuori e dediche", su: "ritratto", adesivi: "✍️❤️⭐" },
    { id: "pro-d02", q: "Disegna su {P} le bende da mummia e un cerotto sul naso", su: "ritratto", adesivi: "🧻🩹" },
    { id: "pro-d03", q: "Disegna su {P} collare, gesso alla gamba e stampelle da tifoso", su: "ritratto", adesivi: "🧣📣⚽" },
    { id: "pro-d04", q: "Disegna su {P} il cerotto più grande del mondo e il lecca-lecca", su: "ritratto", adesivi: "🍭" },
    { id: "pro-d05", q: "Disegna su {P} camice, stetoscopio e occhiali: ora visita gli altri", su: "ritratto", adesivi: "🩺👓📋" },
    { id: "pro-d06", q: "Disegna su {P} il look dopo 9 ore di sala d'attesa: coperta e merende", su: "ritratto", adesivi: "🧣🍫🛌" },
    { id: "pro-d07", q: "Disegna la sala d'attesa dopo che {P} l'ha arredata per stare più comodi", su: "scena", adesivi: "🛋️🪴📺🛁" },
    { id: "pro-d08", q: "Disegna lo striscione dei parenti per {P} che esce dal pronto soccorso", su: "scena", adesivi: "🎉🎈📣🏠" },
    { id: "pro-d09", q: "Disegna la sedia più comoda del mondo, inventata da {P} per l'attesa", su: "scena", adesivi: "☁️🛋️🔌🍿" },
    { id: "pro-d10", q: "Disegna il letto in corsia di {P} dopo una giornata di visite", su: "scena", adesivi: "🎈💐🍫📦" },
    { id: "pro-d11", q: "Disegna l'ambulanza personalizzata di {P}", su: "scena", adesivi: "🚑🎵💡🌈" },
    { id: "pro-d12", q: "Disegna la lastra di {P}: si vede tutto quello che ha mangiato oggi", su: "bianco", adesivi: "🍕🍝🍩🧦" }
  ],
  chi: [
    { id: "pro-c01", q: "Chi di noi finirebbe al pronto soccorso per una scivolata sul pavimento appena lavato dalla mamma?", titolo: "Scivolata sul bagnato" },
    { id: "pro-c02", q: "Chi di noi, in sala d'attesa, farebbe amicizia con tutti e saprebbe la storia di ogni paziente?", titolo: "Ufficio informazioni" },
    { id: "pro-c03", q: "Chi di noi andrebbe al pronto soccorso per una scheggia nel dito e avviserebbe tutti i parenti?", titolo: "Dramma della scheggia" },
    { id: "pro-c04", q: "Chi di noi arriverebbe al pronto soccorso col pigiama dei dinosauri, senza accorgersene?", titolo: "Pigiama coi dinosauri" },
    { id: "pro-c05", q: "Chi di noi, durante l'attesa, girerebbe tutto l'ospedale e tornerebbe con la mappa dei bagni migliori?", titolo: "Mappa dei bagni migliori" },
    { id: "pro-c06", q: "Chi di noi, per un livido, leggerebbe tutto su internet e arriverebbe con tre diagnosi già pronte?", titolo: "Diagnosi da internet" },
    { id: "pro-c07", q: "Chi di noi finirebbe al pronto soccorso per aver provato un balletto visto sui social?", titolo: "Infortunio da balletto" },
    { id: "pro-c08", q: "Chi di noi, in sala d'attesa, applaudirebbe ogni volta che chiamano un numero?", titolo: "Ola per i numerini" },
    { id: "pro-c09", q: "Chi di noi si farebbe accompagnare al pronto soccorso da tutta la famiglia, cugini compresi?", titolo: "Corteo al pronto soccorso" },
    { id: "pro-c10", q: "Chi di noi accompagnerebbe un amico al pronto soccorso e alla fine si farebbe visitare al posto suo?", titolo: "Paziente per sbaglio" },
    { id: "pro-c11", q: "Chi di noi, dopo una storta, girerebbe con le stampelle anche quando non servono più?", titolo: "Stampelle a vita" },
    { id: "pro-c12", q: "Chi di noi, in corsia, riuscirebbe a farsi dare tre budini dall'infermiere solo sorridendo?", titolo: "Tre budini col sorriso" },
    { id: "pro-c13", q: "Chi di noi, quando finalmente chiamano il suo numero, starebbe dormendo sulla sedia da cinque minuti?", titolo: "Il numero che dorme" },
    { id: "pro-c14", q: "Chi di noi, il giorno dopo, tornerebbe al pronto soccorso con i cornetti per gli infermieri?", titolo: "Cornetti per la corsia" }
  ]
});

/* =========================================================
   DATI — «Chi di Noi?», autore 3: Vacanze e riflettori
   Posti: crociera, reality, gita, spiaggia, appuntamento.
   {P} = nome di chi è sotto torchio. {o|a} = finale maschile|femminile secondo il suo avatar.
   ========================================================= */
window.SG_CHIDINOI = window.SG_CHIDINOI || { posti: [], comuni: [] };

/* ---------------------------------------------------------
   🛳️ IN CROCIERA — momento del posto: La cena di gala
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "crociera", cod: "cro", nome: "In crociera", emoji: "🛳️",
  adesivi: "🎩🎀👑💎🦞🍰🛟⚓🕶️🌺🎻🐬",
  entrata: [
    "Salpiamo! {P} ha trovato il buffet prima ancora della cabina.",
    "Sirena della nave, si parte. {P} chiede già la password del wi-fi.",
    "Sette giorni di mare. Il capitano è tranquillo: non conosce ancora {P}."
  ],
  immagini: [
    { id: "cro-i01", q: "Chi divide la cabina con {P} per sette giorni?", carte: [
      { chi: "nonno", faccia: "sonno", t: "Russa a ritmo con le onde" },
      { chi: "vichingo", faccia: "esulta", t: "Doccia gelata alle 6, cantando" },
      { chi: "turista", faccia: "estasi", piu: { occhiali: "sole" }, t: "Sveglia alle 5 per ogni escursione" },
      { chi: "mago", faccia: "furbo", t: "Fa sparire tutte le ciabatte" }
    ] },
    { id: "cro-i02", q: "Alla cena di gala, il destino mette {P} accanto a chi?", carte: [
      { chi: "zia", faccia: "felice", t: "Racconta tutta la crociera del '98" },
      { chi: "capitano", faccia: "sonno", t: "Il capitano. Ma chi guida la nave?" },
      { chi: "bimbo", faccia: "linguaccia", t: "Lancia piselli con la cannuccia" },
      { chi: "elegante", faccia: "finto", piu: { occhiali: "monocolo" }, t: "Parla solo del suo yacht" }
    ] },
    { id: "cro-i03", q: "{P} cade nella piscina del ponte col vestito della cena. Chi si tuffa per primo?", carte: [
      { chi: "bagnino", faccia: "sonno", piu: { mano: "pizza" }, t: "Arriva dopo aver finito la pizza" },
      { chi: "capitano", faccia: "esulta", t: "Il capitano, con un tuffo d'angelo" },
      { chi: "nonna", faccia: "furbo", piu: { cappello: "fiori" }, t: "Una nonna in cuffia, a dorso" },
      { chi: "animatore", faccia: "estasi", t: "L'animatore: «Bomba!» e si tuffa" }
    ] },
    { id: "cro-i04", q: "Allo spettacolo serale, chi chiama {P} sul palco davanti a 2.000 persone?", carte: [
      { chi: "mago", faccia: "furbo", piu: { mano: "bacchetta" }, t: "Per la cassa da segare in due" },
      { chi: "cantante", faccia: "innamorato", t: "Per un duetto d'amore stonato" },
      { chi: "clown", faccia: "linguaccia", t: "Per una torta in faccia" },
      { chi: "ballerino", faccia: "esulta", t: "Per un tango con casquè finale" }
    ] },
    { id: "cro-i05", q: "Notte di stelle cadenti sul ponte. Chi si sdraia a guardarle accanto a {P}?", carte: [
      { chi: "prof", faccia: "pensieroso", piu: { occhiali: "tondi" }, t: "Spiega le stelle fino alle 3" },
      { chi: "bimbo", faccia: "esulta", t: "Esprime 40 desideri, ad alta voce" },
      { chi: "influencer", faccia: "innamorato", piu: { mano: "telefono" }, t: "Fa la diretta: si vede solo nero" },
      { chi: "nonno", faccia: "sonno", t: "Dà un nome a ogni stella e russa" }
    ] },
    { id: "cro-i06", q: "Chi fa da guida a {P} nell'escursione di un giorno a terra?", carte: [
      { chi: "prof", faccia: "pensieroso", t: "Spiega ogni sasso per 20 minuti" },
      { chi: "animatore", faccia: "esulta", t: "Fa il trenino anche tra le rovine" },
      { chi: "autista", faccia: "sorpreso", t: "Si perde, ma con entusiasmo" },
      { chi: "nonno", faccia: "felice", piu: { cappello: "coppola" }, t: "Un passeggero che c'era nel '62" }
    ] },
    { id: "cro-i07", q: "Alla gara di ballo latino sul ponte, chi è in coppia con {P}?", carte: [
      { chi: "ballerino", faccia: "furbo", t: "Un maestro di salsa che si vanta" },
      { chi: "nonna", faccia: "estasi", t: "Una nonna che non si ferma mai" },
      { chi: "cameriere", faccia: "sonno", t: "Il cameriere, a fine turno" },
      { chi: "bimbo", faccia: "felice", t: "Un bimbo alto un metro, fierissimo" }
    ] },
    { id: "cro-i08", q: "{P} sbaglia porta ed entra nella cabina di un altro. Chi c'è dentro?", carte: [
      { chi: "capitano", faccia: "sorpreso", t: "Il capitano in pigiama" },
      { chi: "cantante", faccia: "imbarazzo", piu: { mano: "microfono" }, t: "Prova gli acuti sotto la doccia" },
      { chi: "nonno", faccia: "felice", t: "Due nonni a burraco: «Il quarto!»" },
      { chi: "re", faccia: "indifferente", t: "Un re in vacanza, in vestaglia" }
    ] },
    { id: "cro-i09", q: "Chi non lascia in pace {P} per tutta la crociera?", carte: [
      { chi: "animatore", faccia: "esulta", piu: { collo: "fischietto" }, t: "Acquagym alle 8, ogni mattina" },
      { chi: "dj", faccia: "furbo", t: "Dedica canzoni al suo tavolo" },
      { chi: "presentatore", faccia: "felice", t: "Al bingo urla il suo nome. Sempre" },
      { chi: "clown", faccia: "innamorato", t: "Un clown che si è affezionato" }
    ] },
    { id: "cro-i10", q: "Il buffet chiude tra cinque minuti e {P} è ancora al primo giro. Cosa fa?", carte: [
      { e: "🍽️🗼", t: "Un ultimo piatto alto mezzo metro" },
      { e: "🥖👖", t: "Panini nelle tasche per la notte" },
      { e: "😴🥐", t: "Niente: domattina c'è la colazione" },
      { e: "🙏⏳", t: "Implora il cameriere: «Un attimo!»" }
    ] },
    { id: "cro-i11", q: "In cabina, {P} scopre che l'oblò è finto: è un quadro del mare. Cosa fa?", carte: [
      { e: "📢🛎️", t: "Va a protestare alla reception" },
      { e: "📸😂", t: "Lo fotografa per il gruppo" },
      { e: "📅🤦", t: "Se ne accorge l'ultimo giorno" },
      { e: "📝🌊", t: "Ci attacca un foglietto: «Mare»" }
    ] },
    { id: "cro-i12", q: "Il fotografo di bordo mette in vetrina una foto orribile di {P}, a 20 euro. E {P}?", carte: [
      { e: "💸🙈", t: "La compra, così nessuno la vede" },
      { e: "🖼️😎", t: "La mette come foto profilo" },
      { e: "🕵️❓", t: "Fa finta di non riconoscersi" },
      { e: "🔁📸", t: "Chiede di rifarla dieci volte" }
    ] },
    { id: "cro-i13", q: "La nave si ferma ad Atene per tre ore. Come le passa {P}?", carte: [
      { e: "🏛️⏱️", t: "Sale all'Acropoli col cronometro" },
      { e: "☕🔍", t: "Cerca un caffè come quello di casa" },
      { e: "🏊😌", t: "Resta a bordo: la piscina è vuota" },
      { e: "🧲🧲🧲", t: "Calamite per tutto il parentado" }
    ] },
    { id: "cro-i14", q: "Di notte {P} sbaglia ponte e finisce nelle cucine della nave. Cosa succede?", carte: [
      { e: "🥪😋", t: "Si fa fare un panino dal cuoco" },
      { e: "🍰🤫", t: "Esce in punta di piedi, col dolce" },
      { e: "🍝🌅", t: "Impasta con loro fino all'alba" },
      { e: "🗺️😵", t: "Chiede la strada e si riperde" }
    ] },
    { id: "cro-i15", q: "Scalo al porto, due ore di mercatini. Con cosa torna a bordo {P}?", carte: [
      { e: "🧶🧳", t: "Un tappeto che non entra in cabina" },
      { e: "👒", t: "Un cappello di paglia gigante" },
      { e: "🥁", t: "Un tamburo, da suonare in cabina" },
      { e: "👀🚶", t: "Niente: guardava e basta" }
    ] },
    { id: "cro-i16", q: "Il wi-fi della nave costa 15 euro al giorno. Cosa fa {P}?", carte: [
      { e: "💳📶", t: "Lo paga subito: senza non vive" },
      { e: "📅😩", t: "Resiste tre giorni, poi crolla" },
      { e: "📶⚓", t: "Cerca il wi-fi gratis nei porti" },
      { e: "📵😌", t: "Una settimana senza telefono" }
    ] },
    { id: "cro-i17", q: "Sera della cena col capitano: {P} ha in valigia solo le infradito. Cosa fa?", carte: [
      { e: "🩴😎", t: "Va in infradito, a testa alta" },
      { e: "👞🙏", t: "Si fa prestare le scarpe" },
      { e: "🛍️👠", t: "Le compra al negozio di bordo" },
      { e: "🛏️🍕", t: "Salta la cena e ordina in cabina" }
    ] },
    { id: "cro-i18", q: "«Guasto al motore: resteremo fermi in mezzo al mare tre giorni». Cosa fa {P}?", carte: [
      { e: "📋🍽️", t: "Organizza i turni per il buffet" },
      { e: "🔧⚓", t: "Va dal capitano a dare consigli" },
      { e: "🎤💪", t: "Fa un discorso per il morale" },
      { e: "😎☀️", t: "Prende il sole: è sempre vacanza" }
    ] },
    { id: "cro-i19", q: "{P} torna dall'escursione e vede la nave che si allontana dal porto. Cosa fa?", carte: [
      { e: "🚤💨", t: "Noleggia un gommone e la insegue" },
      { e: "🙌📢", t: "Urla e si sbraccia dal molo" },
      { e: "🍦🤷", t: "Un gelato, e ci pensa dopo" },
      { e: "🚆⚓", t: "Treno fino al porto successivo" }
    ] },
    { id: "cro-i20", q: "Sulla nave c'è anche il vicino con cui {P} litiga sempre per il parcheggio. E ora?", carte: [
      { e: "🙈🚪", t: "Lo evita per sette giorni" },
      { e: "🤝❤️", t: "Diventano amici per la pelle" },
      { e: "🕵️🔭", t: "Passa la crociera a spiarlo" },
      { e: "🚗💬", t: "Gli riparla subito del parcheggio" }
    ] },
    { id: "cro-i21", q: "Sera «tutti vestiti di bianco». Come si presenta {P}?", carte: [
      { e: "🤍👟", t: "In bianco, perfino le scarpe" },
      { e: "🖤😎", t: "In nero, per farsi notare" },
      { e: "🍅👕", t: "Macchia di sugo al primo piatto" },
      { e: "🛏️🏛️", t: "Col lenzuolo della cabina, a toga" }
    ] },
    { id: "cro-i22", q: "Primo giorno a bordo: a cosa si iscrive {P}?", carte: [
      { e: "💃🔥", t: "Corso di salsa, in prima fila" },
      { e: "🎨🌅", t: "Pittura del tramonto sul ponte" },
      { e: "🧘🌅", t: "Yoga all'alba (ci va una volta)" },
      { e: "🎤🎶", t: "Karaoke, tutte le sere" }
    ] },
    { id: "cro-i23", q: "Che faccia fa {P} quando scopre che la sua cabina è proprio sopra la discoteca?", carte: [
      { lui: "arrabbiato", t: "Batte sul pavimento con la scarpa" },
      { lui: "esulta", t: "Scende in pigiama a ballare" },
      { lui: "sonno", t: "Dorme lo stesso, a tempo" },
      { lui: "triste", t: "Chiede di cambiare… nave" }
    ] },
    { id: "cro-i24", q: "La nave fa uno scossone e il cappuccino finisce sulla maglietta di {P}. Che faccia fa?", carte: [
      { lui: "arrabbiato", t: "Vuole fare causa al mare" },
      { lui: "linguaccia", t: "Lecca la maglia: è caffè buono" },
      { lui: "imbarazzo", t: "Gira la maglia al contrario" },
      { lui: "indifferente", t: "Tanto era la maglia di ieri" }
    ] },
    { id: "cro-i25", q: "Che faccia fa {P} quando, l'ultimo giorno, arriva il conto delle bibite della settimana?", carte: [
      { lui: "terrore", t: "Rilegge il conto tre volte" },
      { lui: "indifferente", t: "Firma senza guardare" },
      { lui: "pensieroso", t: "Conta le granite una per una" },
      { lui: "arrabbiato", t: "«Io il tè non l'ho mai preso!»" }
    ] },
    { id: "cro-i26", q: "Il capitano annuncia: «Domani tutto il giorno in mare, niente porti». Che faccia fa {P}?", carte: [
      { lui: "esulta", t: "Prenota il lettino da stanotte" },
      { lui: "triste", t: "Niente mercatini, niente calamite" },
      { lui: "sonno", t: "Sogna già un pisolino di 14 ore" },
      { lui: "pensieroso", t: "Organizza una gita… in piscina" }
    ] }
  ],
  scrivi: [
    { id: "cro-s01", q: "Il capitano trova {P} da sol{o|a} sul ponte di comando. {P} si giustifica: «___»",
      riserve: ["Cercavo il bagno, giuro", "Le ho portato un cornetto, capitano", "Il timone era lì, solo, triste"] },
    { id: "cro-s02", q: "{P} lascia una recensione della crociera: una stella sola. Perché?",
      riserve: ["Non mi hanno fatto guidare la nave", "Troppa acqua, poca terra", "Il mare si muoveva troppo"] },
    { id: "cro-s03", q: "Dall'altoparlante: «Si prega {P}, cabina 7, di ___»",
      riserve: ["restituire il timone", "scendere dalla scialuppa: siamo in porto", "smettere di chiamare le balene"] },
    { id: "cro-s04", q: "Il capitano lascia il comando a {P} per un'ora. Qual è il primo ordine?",
      riserve: ["Rotta verso casa di mia madre", "Buffet aperto anche di notte", "Tutti in piscina, equipaggio compreso"] },
    { id: "cro-s05", q: "Dal ponte 12 {P} vede passare un'altra nave da crociera e le urla: «___»",
      riserve: ["Avete posto? Qui c'è mia zia", "Avete visto la mia cabina?", "Facciamo cambio? Avete lo scivolo"] },
    { id: "cro-s06", q: "Al karaoke di bordo, {P} prende il microfono: «Questa la dedico a ___»",
      riserve: ["il cuoco del buffet di mezzanotte", "il mio salvagente, sempre vicino", "la signora che mi ha rubato il lettino"] },
    { id: "cro-s07", q: "In cabina c'è un asciugamano piegato a forma di animale, col biglietto: «Per {P}, che ___»",
      riserve: ["russa come questo elefante", "va al buffet come questo cigno", "si nasconde come questa tartaruga"] },
    { id: "cro-s08", q: "Caccia al tesoro sulla nave: {P} trova la busta finale. Dentro c'è scritto: «___»",
      riserve: ["Hai vinto: buffet libero a vita", "Il tesoro era l'amicizia. E un gelato", "Torna in cabina: ti cercano da ore"] },
    { id: "cro-s09", q: "All'esercitazione di emergenza, {P} si mette a urlare: «___»",
      riserve: ["Salvate prima il buffet!", "Non parto senza la crema solare", "È la volta buona che guido io"] },
    { id: "cro-s10", q: "Al bar sotto casa {P} racconta la crociera: «Il momento più bello? ___»",
      riserve: ["il terzo giro di aragosta", "il delfino (era un sacchetto)", "quando la nave mi ha aspettato"] },
    { id: "cro-s11", q: "Il cuoco di bordo dedica un piatto a {P}. Come si chiama?",
      riserve: ["Risotto «Torno subito al buffet»", "Torta a sette piani, uno per giorno", "Spaghetti all'onda anomala"] },
    { id: "cro-s12", q: "Sul ponte c'è yoga all'alba. A metà lezione, {P} dice all'istruttore: «___»",
      riserve: ["Questa posizione la chiamo «pisolino»", "Il cane a testa in giù fa colazione?", "Il mare si muove, io no"] },
    { id: "cro-s13", q: "{P} prenota la crociera dell'anno dopo, a una condizione: «___»",
      riserve: ["Cabina dentro la cucina", "Niente esercitazione alle 8", "Il capitano deve salutarmi per nome"] },
    { id: "cro-s14", q: "Allo spettacolo dei passeggeri, il numero di {P} si intitola «___»",
      riserve: ["Imito il motore della nave", "Venti cornetti in un minuto", "Il tango del mare mosso"] },
    { id: "cro-s15", q: "All'escursione {P} si fa un tatuaggio finto. Cosa c'è scritto?",
      riserve: ["Ponte 7, cabina boh", "Mamma, sono in mezzo al mare", "Capitano di lungo divano"] },
    { id: "cro-s16", q: "Primo giorno: {P} ferma un cameriere e chiede: «Scusi, ___»",
      riserve: ["la nave fa anche retromarcia?", "si può scendere un attimo?", "da che parte è il mare?"], voto: "lui" },
    { id: "cro-s17", q: "Ultima sera: {P} saluta il cameriere che l'ha servit{o|a} per una settimana. Cosa gli dice?",
      riserve: ["Ti porto a casa con me, in valigia", "Mi mancherai più del buffet. Quasi", "L'anno prossimo, stesso tavolo"] },
    { id: "cro-s18", q: "Allo sbarco, il controllo apre la valigia di {P}. Cosa trova dentro?",
      riserve: ["Venti asciugamani a forma di cigno", "Le bustine di zucchero del buffet", "Un delfino gonfiabile di due metri"], voto: "lui" }
  ],
  disegna: [
    { id: "cro-d01", q: "Disegna su {P} il vestito da gran gala: papillon o collana di perle", su: "ritratto", adesivi: "🎀📿🌹" },
    { id: "cro-d02", q: "Disegna su {P} il cappello da capitano e le medaglie vinte al buffet", su: "ritratto", adesivi: "🎖️🏅🍤" },
    { id: "cro-d03", q: "Disegna su {P} pappagallo e benda per la serata dei pirati", su: "ritratto", adesivi: "🦜🏴‍☠️🗡️" },
    { id: "cro-d04", q: "Disegna su {P} trucco e parrucca da cantante dello spettacolo di bordo", su: "ritratto", adesivi: "🎤💄✨" },
    { id: "cro-d05", q: "Disegna su {P} il costume da sirena per lo spettacolo in piscina", su: "ritratto", adesivi: "🧜🐚🫧" },
    { id: "cro-d06", q: "Disegna su {P} tutti i rimedi contro il mal di mare: limoni, cerotti…", su: "ritratto", adesivi: "🍋🩹🍬🧲" },
    { id: "cro-d07", q: "Disegna la piscina del ponte quando arriva {P} col suo gonfiabile", su: "scena", adesivi: "🦩🛟🍉🕶️" },
    { id: "cro-d08", q: "Disegna cosa vede {P} dall'oblò appena si sveglia", su: "scena", adesivi: "🐙🦈🏝️🐋" },
    { id: "cro-d09", q: "Disegna il piatto che {P} si prepara al buffet di mezzanotte", su: "scena", adesivi: "🍝🍕🍦🥐🍤" },
    { id: "cro-d10", q: "Disegna il lettino di {P} in piscina, difeso da tutti gli altri", su: "scena", adesivi: "🧴📚🚧🧱" },
    { id: "cro-d11", q: "Disegna la scialuppa di salvataggio che {P} ha arredato per l'emergenza", su: "scena", adesivi: "🛋️📺🍕🪴" },
    { id: "cro-d12", q: "Disegna la scultura di ghiaccio che {P} fa al corso sul ponte", su: "scena", adesivi: "🧊🦢🐬🔨" }
  ],
  chi: [
    { id: "cro-c01", q: "Chi di noi passerebbe tutta la crociera a dire che la nave dell'anno scorso era «molto più bella»?", titolo: "La nave dell'anno scorso" },
    { id: "cro-c02", q: "Chi di noi starebbe così tanto nella vasca idromassaggio del ponte da uscirne come una prugna?", titolo: "Prugna dell'idromassaggio" },
    { id: "cro-c03", q: "Chi di noi, al sesto giorno di crociera, chiederebbe ancora al personale dov'è la sua cabina?", titolo: "Cabina introvabile" },
    { id: "cro-c04", q: "Chi di noi, a casa, ballerebbe il balletto dell'animazione della nave a ogni festa per un anno?", titolo: "Balletto di bordo a vita" },
    { id: "cro-c05", q: "Chi di noi, in crociera, si farebbe adottare dai pensionati e tornerebbe con dieci nonni nuovi su WhatsApp?", titolo: "Dieci nonni in più" },
    { id: "cro-c06", q: "Chi di noi, all'esercitazione di emergenza, si metterebbe il giubbotto salvagente al contrario?", titolo: "Salvagente al rovescio" },
    { id: "cro-c07", q: "Chi di noi imparerebbe dal cameriere a piegare gli asciugamani a forma di cigno e ne riempirebbe la cabina?", titolo: "Cigni di spugna" },
    { id: "cro-c08", q: "Chi di noi si iscriverebbe a tutte le gare della nave, anche al torneo di tombola delle signore?", titolo: "Iscrizione a tutte le gare" },
    { id: "cro-c09", q: "Chi di noi, alla cena col capitano, chiederebbe di poter suonare la sirena della nave «solo una volta»?", titolo: "Una volta sola, la sirena" },
    { id: "cro-c10", q: "Chi di noi, nella gita di un giorno a Barcellona, passerebbe tutto il tempo a cercare una pizza decente?", titolo: "Pizza a Barcellona" },
    { id: "cro-c11", q: "Chi di noi manderebbe al gruppo di famiglia 40 foto dello stesso tramonto dal ponte?", titolo: "Tramonto a ripetizione" },
    { id: "cro-c12", q: "Chi di noi, a fine crociera, si nasconderebbe in cabina per rifare il giro senza pagare?", titolo: "Ritorno a scrocco" },
    { id: "cro-c13", q: "Chi di noi farebbe il bagno nella piscina del ponte anche col mare in tempesta, «tanto è acqua uguale»?", titolo: "Bagno nella tempesta" },
    { id: "cro-c14", q: "Chi di noi, alla serata dei saluti, abbraccerebbe piangendo il cameriere come un fratello?", titolo: "Addio al cameriere" }
  ]
});

/* ---------------------------------------------------------
   📺 DENTRO UN REALITY — momento del posto: La stanza di {P} nella casa
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "reality", cod: "rea", nome: "Dentro un reality", emoji: "📺",
  adesivi: "🎥💡🛋️🚪📺🌟💄🧸🪞🎤🏆📢",
  entrata: [
    "Giorno 1 nella casa: {P} ha già litigato con la macchinetta del caffè.",
    "Telecamere accese. {P}, sorridi: l'Italia intera ti guarda.",
    "Nuovo concorrente: {P}. Le scommesse sulla prima nomination sono aperte."
  ],
  immagini: [
    { id: "rea-i01", q: "A metà programma entra un concorrente nuovo, nel letto accanto a {P}. Chi è?", carte: [
      { chi: "mago", faccia: "furbo", t: "Fa sparire la spesa di tutti" },
      { chi: "nonno", faccia: "sonno", t: "Alle nove dorme. E russa" },
      { chi: "influencer", faccia: "innamorato", piu: { mano: "telefono" }, t: "Parla solo con la telecamera" },
      { chi: "cuoco", faccia: "pensieroso", t: "Cucina benissimo, ma solo per sé" }
    ] },
    { id: "rea-i02", q: "Per la finale, {P} può portare in studio un solo ospite. Chi sceglie?", carte: [
      { chi: "mamma", faccia: "estasi", t: "La mamma, in prima fila a piangere" },
      { chi: "cugino", faccia: "linguaccia", t: "Il cugino, per fare casino" },
      { chi: "nonna", faccia: "sorpreso", t: "La nonna: «Ma siamo in diretta?»" },
      { e: "🐶🎀", t: "Il cane, col papillon" }
    ] },
    { id: "rea-i03", q: "Chi conduce il reality in cui è finito {P}?", carte: [
      { chi: "presentatore", faccia: "finto", t: "Ride per finta a ogni battuta" },
      { chi: "nonna", faccia: "arrabbiato", t: "Sgrida i concorrenti in diretta" },
      { chi: "mago", faccia: "furbo", t: "Fa sparire chi esce. Davvero" },
      { chi: "capo", faccia: "indifferente", piu: { mano: "tazza" }, t: "Vuole un tema scritto ogni sera" }
    ] },
    { id: "rea-i04", q: "Settimana a tema medievale: che personaggio tocca a {P}?", carte: [
      { chi: "re", faccia: "furbo", t: "Il re, che non lava un piatto" },
      { chi: "cuoco", faccia: "sorpreso", t: "Il cuoco di corte, bruciacchiato" },
      { chi: "mago", faccia: "pensieroso", t: "Il mago di corte: sbaglia magie" },
      { chi: "clown", faccia: "triste", t: "Il giullare che non fa ridere" }
    ] },
    { id: "rea-i05", q: "Chi è il concorrente con cui {P} litiga per tutta l'edizione?", carte: [
      { chi: "cantante", faccia: "estasi", t: "Fa i vocalizzi alle 6 di mattina" },
      { chi: "ballerino", faccia: "estasi", t: "Fa le prove di danza sul tavolo" },
      { chi: "cuoco", faccia: "furbo", t: "Mette la cipolla dappertutto" },
      { chi: "nonno", faccia: "indifferente", t: "Nasconde il telecomando nel gilet" }
    ] },
    { id: "rea-i06", q: "Chi fa campagna da casa per salvare {P} al televoto?", carte: [
      { chi: "nonna", faccia: "furbo", piu: { mano: "telefono" }, t: "Vota 400 volte dal telefono fisso" },
      { chi: "zio", faccia: "esulta", t: "Volantini in tutti i bar del paese" },
      { chi: "cugino", faccia: "pensieroso", t: "Si crea 30 profili finti" },
      { chi: "mamma", faccia: "arrabbiato", t: "Chiama la redazione ogni ora" }
    ] },
    { id: "rea-i07", q: "La regia manda nella casa un ospite per dare la carica a {P}. Chi arriva?", carte: [
      { chi: "allenatore", faccia: "arrabbiato", piu: { collo: "fischietto" }, t: "Flessioni alle sette, per tutti" },
      { chi: "prof", faccia: "indifferente", piu: { mano: "libro" }, t: "Il prof delle medie, col registro" },
      { chi: "calciatore", faccia: "felice", t: "Un campione, che firma i cuscini" },
      { chi: "babbo", faccia: "estasi", t: "Babbo Natale, ad agosto" }
    ] },
    { id: "rea-i08", q: "Prova «sopravvivi 24 ore a un ospite»: chi entra a tenere compagnia a {P}?", carte: [
      { chi: "clown", faccia: "esulta", t: "Un clown che ride di tutto" },
      { chi: "zia", faccia: "pensieroso", t: "Una zia che riordina tutta la casa" },
      { chi: "vicino", faccia: "arrabbiato", t: "Si lamenta del rumore. Del respiro" },
      { chi: "bimbo", faccia: "furbo", t: "Un bimbo di 5 anni, col tamburo" }
    ] },
    { id: "rea-i09", q: "{P} esce dalla casa dopo tre mesi. Chi aspetta fuori dagli studi?", carte: [
      { chi: "mamma", faccia: "felice", t: "Con una teglia di lasagne" },
      { chi: "cugino", faccia: "estasi", t: "Un fan con la maglietta stampata" },
      { chi: "presentatore", faccia: "finto", piu: { mano: "microfono" }, t: "Un'intervista da 30 secondi" },
      { chi: "vigile", faccia: "indifferente", t: "Un vigile: «La macchina è sua?»" }
    ] },
    { id: "rea-i10", q: "{P} riceve una nomination a sorpresa da quello che credeva il suo amico nella casa. E adesso?", carte: [
      { e: "😊🤐", t: "Fa finta di niente e sorride" },
      { e: "🎥😭", t: "Un'ora in confessionale a sfogarsi" },
      { e: "👉😤", t: "Lo affronta davanti a tutti" },
      { e: "📅😈", t: "Prepara la vendetta per sabato" }
    ] },
    { id: "rea-i11", q: "La prova della settimana: 12 ore in equilibrio su una gamba sola. Come va a {P}?", carte: [
      { e: "🦩💪", t: "Resiste: l'orgoglio prima di tutto" },
      { e: "🛏️💤", t: "Cade dopo due minuti, va a letto" },
      { e: "🧱🤫", t: "Si appoggia al muro di nascosto" },
      { e: "📣🛋️", t: "Tifa dal divano, con le patatine" }
    ] },
    { id: "rea-i12", q: "In dispensa resta un solo pacco di biscotti per otto concorrenti. Cosa fa {P}?", carte: [
      { e: "🛏️🍪", t: "Lo nasconde sotto il letto" },
      { e: "📏🍪", t: "Lo divide col righello" },
      { e: "🌙🤫", t: "Se lo mangia di notte e nega" },
      { e: "🔨🍪", t: "All'asta, in cambio di favori" }
    ] },
    { id: "rea-i13", q: "La regia chiede a {P} di svegliare la casa alle 6 con una canzone. Come la sveglia?", carte: [
      { e: "🍳🎤", t: "Canta battendo su una padella" },
      { e: "🤫🎶", t: "La sussurra, per non disturbare" },
      { e: "⏰🛏️", t: "Mette la sveglia e torna a letto" },
      { e: "🙅🌅", t: "Rifiuta: «Io alle 6 non esisto»" }
    ] },
    { id: "rea-i14", q: "Va in onda {P} che balla da sol{o|a} in cucina alle 3 di notte. Come reagisce {P}?", carte: [
      { e: "💃🏆", t: "Diventa il suo balletto ufficiale" },
      { e: "🙅📺", t: "«Non ero io, era un altro»" },
      { e: "🚪🙈", t: "Non esce di stanza per un giorno" },
      { e: "🎵📢", t: "Chiede alla regia la musica giusta" }
    ] },
    { id: "rea-i15", q: "Festa anni '80 nella casa, ma i costumi vanno fatti con quello che c'è. Come si veste {P}?", carte: [
      { e: "🪟👗", t: "Un vestito fatto con le tende" },
      { e: "🩳😎", t: "La tuta: «È anni '80, giuro»" },
      { e: "🎧👑", t: "Fa musica e comanda, senza costume" },
      { e: "🛏️🔟", t: "A letto alle dieci, festa o no" }
    ] },
    { id: "rea-i16", q: "Il gruppo prepara un piano contro il concorrente più forte e chiede a {P} di starci. E {P}?", carte: [
      { e: "👑📋", t: "Ci sta e prende in mano il piano" },
      { e: "🏃📢", t: "Corre ad avvisare la vittima" },
      { e: "👍😏", t: "Dice sì, poi fa di testa sua" },
      { e: "🙉🛋️", t: "Fa finta di non aver sentito" }
    ] },
    { id: "rea-i17", q: "Prova di cucina: {P} deve preparare un piatto per la giuria. Cosa succede?", carte: [
      { e: "👵🍝", t: "La pasta della nonna, e vince" },
      { e: "🔥💧", t: "Riesce a bruciare anche l'acqua" },
      { e: "👀🍳", t: "Copia il piatto del vicino" },
      { e: "🥄😋", t: "Fa cucinare gli altri, e assaggia" }
    ] },
    { id: "rea-i18", q: "Arriva una busta: {P} può salvare un amico in nomination o prendere 10.000 euro. Cosa sceglie?", carte: [
      { e: "🛟❤️", t: "Salva l'amico senza pensarci" },
      { e: "💰🙏", t: "Prende i soldi e chiede scusa" },
      { e: "🎥🤔", t: "Ci pensa un'ora in confessionale" },
      { e: "✂️💰", t: "«Si può fare metà e metà?»" }
    ] },
    { id: "rea-i19", q: "La regia fa vedere a tutti cosa ha detto {P} di loro in confessionale. E {P}?", carte: [
      { e: "✂️📹", t: "«Hanno tagliato male il video»" },
      { e: "🙏🙏", t: "Chiede scusa, uno per uno" },
      { e: "🔁🗣️", t: "Lo ripete in faccia, uguale" },
      { e: "😂🙌", t: "Scoppia a ridere e ammette tutto" }
    ] },
    { id: "rea-i20", q: "Il televoto parla chiaro: {P} piace a tutta Italia, ma a nessuno dentro la casa. E ora?", carte: [
      { e: "😎🌟", t: "Si gode il successo e basta" },
      { e: "🍰🙏", t: "Una torta per farsi perdonare" },
      { e: "😈📈", t: "Ancora più antipatia, apposta" },
      { e: "🤔🪞", t: "Si chiede cosa ha fatto di male" }
    ] },
    { id: "rea-i21", q: "Scoppia la lite del secolo per il telecomando. Le telecamere cercano {P}: dov'è?", carte: [
      { e: "📢😤", t: "È in mezzo e urla più di tutti" },
      { e: "☕😌", t: "Porta la camomilla a tutti e due" },
      { e: "🎙️⚽", t: "Fa la telecronaca, come al calcio" },
      { e: "😴🚪", t: "Dorme di là e non sa niente" }
    ] },
    { id: "rea-i22", q: "Nella casa non ci sono orologi. Come capisce {P} che ore sono?", carte: [
      { e: "🍝⏰", t: "Dalla fame: è sempre ora di pranzo" },
      { e: "🐓☀️", t: "Dal sole, come un contadino" },
      { e: "📺🎤", t: "Se c'è la diretta, è sabato" },
      { e: "😴🤷", t: "Non importa: dorme lo stesso" }
    ] },
    { id: "rea-i23", q: "Che faccia fa {P} quando la conduttrice dice «c'è una sorpresa in giardino» e in giardino c'è sua zia?", carte: [
      { lui: "estasi", t: "Corre ad abbracciarla in pigiama" },
      { lui: "terrore", t: "Si nasconde dietro il divano" },
      { lui: "finto", t: "«Che bello!» (Non è bello)" },
      { lui: "imbarazzo", t: "Spera che non porti le foto" }
    ] },
    { id: "rea-i24", q: "Che faccia fa {P} quando in diretta parte un vocale della nonna?", carte: [
      { lui: "innamorato", t: "Manda baci con tutte e due le mani" },
      { lui: "imbarazzo", t: "La nonna svela il soprannome" },
      { lui: "triste", t: "Lacrime vere, per la prima volta" },
      { lui: "terrore", t: "«Nonna, non dire quella cosa!»" }
    ] },
    { id: "rea-i25", q: "Che faccia fa {P} quando la conduttrice apre la busta e dice: «Chi esce stasera è…»?", carte: [
      { lui: "terrore", t: "Stringe la mano a tutti, sudando" },
      { lui: "indifferente", t: "Ha già la valigia pronta" },
      { lui: "pensieroso", t: "Ripassa il discorso d'uscita" },
      { lui: "furbo", t: "Sa già il risultato, chissà come" }
    ] },
    { id: "rea-i26", q: "Che faccia fa {P} quando scopre che la spesa della settimana è solo riso e cavolfiori?", carte: [
      { lui: "disgusto", t: "Annusa un cavolfiore, e si arrende" },
      { lui: "triste", t: "Scrive una lettera alla mamma" },
      { lui: "arrabbiato", t: "Sciopero della fame (fino a cena)" },
      { lui: "finto", t: "«Adoro il cavolfiore», in diretta" }
    ] }
  ],
  scrivi: [
    { id: "rea-s01", q: "Nel confessionale, {P} sussurra: «Stanotte ho fatto una cosa terribile: ___»",
      riserve: ["ho mangiato la torta del compleanno", "ho spento la sveglia di tutta la casa", "ho cantato l'inno alla telecamera"] },
    { id: "rea-s02", q: "{P} in confessionale: «Se esco io, dite all'Italia che ___»",
      riserve: ["la pasta la cuocevo meglio io", "il telecomando l'ho nascosto io", "il divano grande è ancora mio"] },
    { id: "rea-s03", q: "{P} svela alla telecamera: «Il mio piano per vincere è semplice: ___»",
      riserve: ["dormire mentre gli altri litigano", "farmi amare dallo stomaco di tutti", "nominare sempre chi russa"] },
    { id: "rea-s04", q: "Nel confessionale {P} giura: «Io qui dentro non ho mai ___»",
      riserve: ["pianto, era la cipolla", "rubato biscotti: erano in prestito", "dormito sul divano, mi concentravo"] },
    { id: "rea-s05", q: "{P} chiude il confessionale col suo motto: «Nella vita, come nella casa, ___»",
      riserve: ["chi dorme non viene nominato", "l'ultima fetta è di chi la vede", "sorridi: ti stanno inquadrando"] },
    { id: "rea-s06", q: "Nella casa entra un cane. {P} gli insegna il primo comando: «___»",
      riserve: ["Abbaia quando arriva la nomination", "Ruba i biscotti agli altri, non a me", "Seduto. Ma non sul mio divano"] },
    { id: "rea-s07", q: "{P} esce al televoto. Ultime parole sulla porta rossa: «___»",
      riserve: ["Il ragù in frigo è mio, ricordatevelo", "Annaffiate la mia piantina", "Non è finita: la nonna sta votando"] },
    { id: "rea-s08", q: "L'appello di {P} al televoto dura solo 5 secondi. Cosa dice?",
      riserve: ["Votatemi, ho lasciato il gas acceso", "Nonna, chiama altre cento volte", "Se esco io, la spesa chi la fa?"] },
    { id: "rea-s09", q: "Qual è la prima frase di {P} appena mette piede nella casa?",
      riserve: ["Dov'è il frigo?", "Il letto vicino alla finestra è mio", "Ciao mamma! Ah, c'è la diretta"] },
    { id: "rea-s10", q: "In diretta: «{P}, cosa ti manca di più di casa?». Cosa risponde?",
      riserve: ["Il mio cuscino storto", "La mamma che urla «è pronto!»", "Il wi-fi. E anche la mamma"] },
    { id: "rea-s11", q: "La lettera di {P} alla famiglia viene tagliata: passa una riga sola. Quale?",
      riserve: ["Non toccate niente in camera mia", "Il cane sta bene? Salutatelo", "Mandatemi la ricetta del ragù, ora"] },
    { id: "rea-s12", q: "Il pubblico in studio alza un cartellone per {P}. Cosa c'è scritto?",
      riserve: ["Ti amo! (Sono tua zia)", "Siamo i tuoi cugini, salutaci!", "Rifatti il letto"] },
    { id: "rea-s13", q: "{P} cucina per tutta la casa e borbotta tra sé. I sottotitoli della regia dicono: «___»",
      riserve: ["Chi ha usato la mia padella, chi?", "Sale… ah no, era zucchero", "La chiamo carbonara lo stesso"] },
    { id: "rea-s14", q: "{P} vince il reality. Primo messaggio al gruppo degli amici: «___»",
      riserve: ["Ve l'avevo detto: dormire paga", "Avete votato voi? Siete pazzi", "Offro io le pizze. Con calma"] },
    { id: "rea-s15", q: "Voce fuori campo del riassunto: «Questa settimana, {P} ___»",
      riserve: ["ha litigato con la lavatrice e ha perso", "ha nominato la macchinetta del caffè", "ha dormito 90 ore su 168"] },
    { id: "rea-s16", q: "Prova di coppia: {P} resta legat{o|a} a un altro concorrente per una settimana. Dopo un giorno dice: «___»",
      riserve: ["Tagliate. Tagliate tutto", "Almeno scelgo io cosa mangiamo", "Ci siamo già detti tutto. Due volte"] },
    { id: "rea-s17", q: "Nomination segreta: {P} scrive il nome e la motivazione. «Nomino ___»",
      riserve: ["il frigorifero, sempre vuoto", "chi mi ha rubato le ciabatte", "la sveglia delle 7, ovvio"] },
    { id: "rea-s18", q: "La prima intervista di {P} su un giornale di gossip. Qual è il titolo?",
      riserve: ["Io e il divano: la vera storia", "Il cavolfiore mi ha cambiato la vita", "La verità sul telecomando"] }
  ],
  disegna: [
    { id: "rea-d01", q: "Disegna il divano della casa con il posto di {P} segnato e difeso", su: "scena", adesivi: "🛋️🚧🧸📺🍿" },
    { id: "rea-d02", q: "Disegna il giardino della casa come lo ha sistemato {P}", su: "scena", adesivi: "🌻🏊⛺🦩" },
    { id: "rea-d03", q: "Disegna il confessionale come lo ha arredato {P}", su: "scena", adesivi: "🕯️🍫🧻🪴" },
    { id: "rea-d04", q: "Disegna il letto di {P} dopo lo scherzo notturno degli altri concorrenti", su: "scena", adesivi: "🧻🪶🐸💦" },
    { id: "rea-d05", q: "Disegna la prova della settimana che {P} non supererà mai", su: "scena", adesivi: "🧗🥚🧊⏱️" },
    { id: "rea-d06", q: "Disegna il frigo della casa dopo il passaggio notturno di {P}", su: "scena", adesivi: "🧀🥚🍕🥫" },
    { id: "rea-d07", q: "Disegna su {P} il look per la prima diretta del sabato sera", su: "ritratto", adesivi: "✨👗🎀💎" },
    { id: "rea-d08", q: "Disegna su {P} il costume per la festa a tema «animali della giungla»", su: "ritratto", adesivi: "🦁🐒🦓🌿" },
    { id: "rea-d09", q: "Disegna su {P} il costume da supereroe fatto con le cose di casa", su: "ritratto", adesivi: "🧺🍳🧻🥄" },
    { id: "rea-d10", q: "Disegna su {P} la faccia dipinta coi colori del suo fan club", su: "ritratto", adesivi: "💖⭐📣" },
    { id: "rea-d11", q: "Disegna su {P} com'è uscit{o|a} dalla prova «tuffo nella gelatina»", su: "ritratto", adesivi: "🍮🍓🫧" },
    { id: "rea-d12", q: "Disegna su {P} il look per vincere la finale in diretta", su: "ritratto", adesivi: "🏆🕶️🎤👑" }
  ],
  chi: [
    { id: "rea-c01", q: "Chi di noi, in un reality, prenderebbe le nomination di tutti per aver finito il caffè della casa?", titolo: "Nomination per il caffè" },
    { id: "rea-c02", q: "Chi di noi, nella casa, passerebbe le giornate a chiacchierare con la telecamera come con un amico?", titolo: "Confidenze alla telecamera" },
    { id: "rea-c03", q: "Chi di noi, la prima sera nella casa, farebbe un'alleanza segreta con ogni concorrente, uno per uno?", titolo: "Alleanza con tutti" },
    { id: "rea-c04", q: "Chi di noi piangerebbe in confessionale perché la pasta è scotta?", titolo: "Dramma della pasta scotta" },
    { id: "rea-c05", q: "Chi di noi, nella prova della settimana, si impegnerebbe come alle Olimpiadi per vincere una pizza?", titolo: "Olimpiadi della pizza" },
    { id: "rea-c06", q: "Chi di noi, uscendo al televoto, si rifiuterebbe di andarsene, abbracciando il divano?", titolo: "Abbraccio al divano" },
    { id: "rea-c07", q: "Chi di noi starebbe nella casa tre mesi in pigiama, anche durante la diretta del sabato sera?", titolo: "Pigiama in prima serata" },
    { id: "rea-c08", q: "Chi di noi organizzerebbe uno sciopero della casa perché nella spesa non c'è il cioccolato?", titolo: "Sindacalista della spesa" },
    { id: "rea-c09", q: "Chi di noi, nella casa, proverebbe allo specchio la faccia stupita per quando arrivano le sorprese?", titolo: "Sorpresa provata" },
    { id: "rea-c10", q: "Chi di noi, appena fuori dalla casa, aprirebbe un canale per raccontare «tutta la verità»?", titolo: "La verità sulla casa" },
    { id: "rea-c11", q: "Chi di noi passerebbe le notti a sussurrare strategie di nomination come un generale in guerra?", titolo: "Strategie sottovoce" },
    { id: "rea-c12", q: "Chi di noi, la sera che è finita la spesa, inventerebbe una cena per dieci con due uova e una cipolla?", titolo: "Miracolo con due uova" },
    { id: "rea-c13", q: "Chi di noi, al televoto, salverebbe il nemico della casa perché «poverino, gli manca la mamma»?", titolo: "Cuore da televoto" },
    { id: "rea-c14", q: "Chi di noi vincerebbe il reality senza aver fatto niente di niente per tre mesi?", titolo: "Vittoria dal divano" }
  ]
});

/* ---------------------------------------------------------
   🚌 IN GITA SCOLASTICA — momento del posto: La foto di classe
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "gita", cod: "git", nome: "In gita scolastica", emoji: "🚌",
  adesivi: "🚌🎒📸🗿🏛️🧃🍫🧢📚🎟️🗺️🧸",
  entrata: [
    "Pullman delle 6, si parte! {P} ha già mangiato i panini del pranzo.",
    "Appello: {P}? {P}?! Ah, è ancora all'autogrill.",
    "Gita a Firenze. Il prof ha già scelto chi tenere d'occhio: {P}."
  ],
  immagini: [
    { id: "git-i01", q: "Chi divide la camera d'albergo con {P}, in gita?", carte: [
      { chi: "cugino", faccia: "sonno", t: "Musica nelle cuffie tutta la notte" },
      { chi: "scout", faccia: "felice", piu: { schiena: "zaino" }, t: "Ha portato sacco a pelo e bussola" },
      { chi: "mago", faccia: "furbo", t: "Trucchi con le carte fino alle 4" },
      { chi: "supereroe", faccia: "furbo", t: "Dorme col mantello, sul serio" }
    ] },
    { id: "git-i02", q: "Chi è il prof accompagnatore che tocca alla classe di {P}?", carte: [
      { chi: "prof", faccia: "furbo", t: "Conta la classe ogni 5 minuti" },
      { chi: "allenatore", faccia: "esulta", piu: { collo: "fischietto" }, t: "Ginnastica: si va tutto a piedi" },
      { chi: "nonno", faccia: "sonno", t: "A un mese dalla pensione: tutto ok" },
      { chi: "cantante", f: "d", faccia: "estasi", t: "La prof di musica: si canta sempre" }
    ] },
    { id: "git-i03", q: "Chi guida il pullman della gita di {P}?", carte: [
      { chi: "autista", faccia: "arrabbiato", t: "Vieta le patatine sui sedili" },
      { chi: "rockstar", faccia: "esulta", t: "Canta più forte di tutta la classe" },
      { chi: "nonno", faccia: "pensieroso", t: "Va a 60 all'ora in autostrada" },
      { chi: "cowboy", faccia: "furbo", t: "Chiama il pullman «la mia bestia»" }
    ] },
    { id: "git-i04", q: "Al museo, chi fa da guida alla classe di {P}?", carte: [
      { chi: "prof", faccia: "pensieroso", piu: { occhiali: "tondi" }, t: "Spiega ogni quadro due volte" },
      { chi: "presentatore", faccia: "felice", t: "Fa il quiz a premi coi quadri" },
      { chi: "nonna", faccia: "sonno", t: "Sussurra. Nessuno sente niente" },
      { chi: "influencer", faccia: "linguaccia", t: "Fa fare i selfie con le statue" }
    ] },
    { id: "git-i05", q: "In albergo, chi dorme nella camera accanto a quella di {P}?", carte: [
      { chi: "prof", faccia: "arrabbiato", t: "Il prof, che bussa ogni ora" },
      { chi: "calciatore", faccia: "esulta", t: "Una squadra di calcio che canta" },
      { chi: "nonna", faccia: "estasi", t: "Un gruppo di nonne che balla" },
      { chi: "mago", faccia: "sorpreso", t: "Un mago che ha perso il coniglio" }
    ] },
    { id: "git-i06", q: "Chi si siede accanto a {P} sul pullman, per sei ore di viaggio?", carte: [
      { chi: "cugino", faccia: "sonno", t: "Si addormenta sulla sua spalla" },
      { chi: "dj", faccia: "esulta", t: "Ha la cassa. E la usa" },
      { chi: "prof", faccia: "indifferente", t: "Il prof. Per punizione" },
      { chi: "cuoco", faccia: "felice", t: "Sbuccia l'uovo sodo alle 7" }
    ] },
    { id: "git-i07", q: "Con chi si fa la foto {P} davanti al monumento più famoso?", carte: [
      { chi: "mago", faccia: "finto", t: "Uomo-statua: si muove a pagamento" },
      { chi: "bidello", faccia: "felice", t: "Il bidello, venuto apposta" },
      { chi: "turista", faccia: "estasi", t: "Un turista che si mette in mezzo" },
      { chi: "prof", faccia: "sonno", t: "Il prof, che chiude gli occhi" }
    ] },
    { id: "git-i08", q: "All'autogrill, il pullman riparte tra 3 minuti. Chi c'è in fila alla cassa davanti a {P}?", carte: [
      { chi: "nonna", faccia: "felice", t: "Una nonna che paga in monetine" },
      { chi: "cuoco", faccia: "pensieroso", t: "Ordina 12 panini, uno per uno" },
      { chi: "turista", faccia: "pensieroso", t: "Chiede gli ingredienti di tutto" },
      { chi: "prof", faccia: "indifferente", piu: { mano: "tazza" }, t: "Il prof, che non ha fretta" }
    ] },
    { id: "git-i09", q: "Cosa si porta {P} di nascosto in gita?", carte: [
      { e: "🍕🧊", t: "Mezza pizza fredda di ieri" },
      { e: "🔊🎶", t: "La cassa per la camerata" },
      { e: "🧸", t: "Il peluche, ben nascosto" },
      { e: "📚✍️", t: "I compiti da copiare in pullman" }
    ] },
    { id: "git-i10", q: "Nella foto di classe ufficiale, chi si piazza proprio dietro a {P}?", carte: [
      { chi: "clown", faccia: "linguaccia", t: "Fa la linguaccia allo scatto" },
      { chi: "calciatore", faccia: "esulta", t: "Salta proprio mentre scattano" },
      { chi: "prof", faccia: "sonno", t: "Il prof, a occhi chiusi" },
      { chi: "influencer", faccia: "innamorato", t: "Fa la boccuccia da selfie" }
    ] },
    { id: "git-i11", q: "Al museo, la guida parla da un'ora di un vaso rotto. Cosa fa {P}?", carte: [
      { e: "📝🤓", t: "Ascolta e prende appunti" },
      { e: "📱🪑", t: "Per terra, col telefono" },
      { e: "🎭😂", t: "Imita la guida per far ridere" },
      { e: "🛍️🏃", t: "Scappa al negozio del museo" }
    ] },
    { id: "git-i12", q: "Alle 2 di notte la camera accanto bussa: è scoppiata la battaglia di cuscini. E {P}?", carte: [
      { e: "🛏️⚔️", t: "Entra col cuscino più grosso" },
      { e: "🔒😴", t: "Chiude a chiave e dorme" },
      { e: "🔦🏁", t: "Fa l'arbitro con la torcia" },
      { e: "📞🚨", t: "Va a chiamare il prof" }
    ] },
    { id: "git-i13", q: "{P} vede per la prima volta il Colosseo. Cosa fa?", carte: [
      { e: "📸📸📸", t: "Duecento foto, da ogni lato" },
      { e: "🤏😐", t: "«Me lo immaginavo più grande»" },
      { e: "😶✨", t: "Resta a guardarlo in silenzio" },
      { e: "🍕❓", t: "Chiede dove si mangia" }
    ] },
    { id: "git-i14", q: "Il pullman resta due ore fermo in coda in autostrada. Come le passa {P}?", carte: [
      { e: "🎤❓", t: "Inventa un quiz e lo conduce" },
      { e: "😮💤", t: "Dorme a bocca aperta" },
      { e: "🍫⏱️", t: "Finisce la merenda in dieci minuti" },
      { e: "🃏💺", t: "Carte sul sedile con tre amici" }
    ] },
    { id: "git-i15", q: "Al ristorante della gita servono il pesce intero, con la testa. Cosa fa {P}?", carte: [
      { e: "🐟😋", t: "Mangia tutto, testa compresa" },
      { e: "🧻🍞", t: "Lo copre col tovagliolo: solo pane" },
      { e: "🐟🗣️", t: "Lo fa parlare come un pupazzo" },
      { e: "🔄🍽️", t: "Lo scambia col piatto del vicino" }
    ] },
    { id: "git-i16", q: "In albergo, nella camera di {P} ci sono quattro letti per sei ragazzi. Cosa fa {P}?", carte: [
      { e: "🛁😴", t: "Dorme nella vasca, felice" },
      { e: "🪑🪑", t: "Unisce due sedie e un cuscino" },
      { e: "🧸🛏️", t: "Letto diviso, col peluche in mezzo" },
      { e: "🛎️😤", t: "Va a protestare in reception" }
    ] },
    { id: "git-i17", q: "Al museo {P} sfiora una statua e scatta l'allarme. Cosa fa?", carte: [
      { e: "🚶👥", t: "Si mescola a un'altra classe" },
      { e: "🙏🏛️", t: "Chiede scusa a tutto il museo" },
      { e: "🗿🧍", t: "Si mette in posa: fa la statua" },
      { e: "📱🚨", t: "Fa il video dell'allarme" }
    ] },
    { id: "git-i18", q: "Gita a Napoli, e il prof dice: «La pizza solo stasera». Cosa fa {P} a pranzo?", carte: [
      { e: "🥪😇", t: "Mangia il panino di casa" },
      { e: "🍕🏃", t: "Fugge per una pizza a portafoglio" },
      { e: "📝✊", t: "Raccoglie le firme per la pizza" },
      { e: "🍕👀", t: "Ruba un pezzo di quella del prof" }
    ] },
    { id: "git-i19", q: "Alle 3 di notte il prof entra in camera di {P} e trova mezza classe nell'armadio. E {P}?", carte: [
      { e: "📚😇", t: "«Stavamo ripassando storia»" },
      { e: "🦸🙋", t: "Si prende tutta la colpa" },
      { e: "😴👁️", t: "Dorme con gli occhi aperti" },
      { e: "👉🚪", t: "Colpa della camera accanto" }
    ] },
    { id: "git-i20", q: "«Chi ha attaccato la gomma sul sedile dell'autista?». La colpa è di {P}. E ora?", carte: [
      { e: "🙋", t: "Alza la mano subito" },
      { e: "🎶🪟", t: "Fischietta guardando fuori" },
      { e: "👉😴", t: "Accusa uno che dorme" },
      { e: "🖼️🎨", t: "«È arte moderna»" }
    ] },
    { id: "git-i21", q: "Il prof si addormenta sul pullman e russa col microfono acceso. Cosa fa {P}?", carte: [
      { e: "📱📤", t: "Lo registra per tutta la scuola" },
      { e: "🤫🎤", t: "Gli spegne piano il microfono" },
      { e: "🎶👥", t: "Fa il coro sopra il russare" },
      { e: "⏰❓", t: "Lo sveglia: «Quanto manca?»" }
    ] },
    { id: "git-i22", q: "Cosa compra {P} nel negozio del museo?", carte: [
      { e: "✏️", t: "Una matita gigante, mai usata" },
      { e: "🦕", t: "Un dinosauro di gomma" },
      { e: "📚💸", t: "Il catalogo da 40 euro" },
      { e: "🧲🖼️", t: "La calamita del quadro famoso" }
    ] },
    { id: "git-i23", q: "Che faccia fa {P} quando il prof annuncia: «Domani sveglia alle 5 per vedere l'alba sulle rovine»?", carte: [
      { lui: "sonno", t: "Ci va, ma dorme in piedi" },
      { lui: "arrabbiato", t: "Organizza la rivolta" },
      { lui: "esulta", t: "Punta tre sveglie, per sicurezza" },
      { lui: "finto", t: "«Che bello!» E si rimette a letto" }
    ] },
    { id: "git-i24", q: "Che faccia fa {P} quando apre il pranzo al sacco e trova il panino con la frittata di cipolle?", carte: [
      { lui: "estasi", t: "Lo divora in pullman alle 8" },
      { lui: "disgusto", t: "Lo scambia con la prima merendina" },
      { lui: "imbarazzo", t: "Tutto il pullman sente l'odore" },
      { lui: "indifferente", t: "Tanto la fame è fame" }
    ] },
    { id: "git-i25", q: "Che faccia fa {P} quando l'autista mette per la quarta volta la stessa canzone?", carte: [
      { lui: "sonno", t: "Crolla al terzo ritornello" },
      { lui: "arrabbiato", t: "Vuole sequestrare la radio" },
      { lui: "esulta", t: "La sa a memoria: canta tutta" },
      { lui: "linguaccia", t: "Ci balla sopra il sedile" }
    ] },
    { id: "git-i26", q: "Che faccia fa {P} quando, al ritorno, la mamma l'aspetta davanti a tutta la classe con un cartello?", carte: [
      { lui: "imbarazzo", t: "Fa finta di non conoscerla" },
      { lui: "esulta", t: "Corre ad abbracciarla, felice" },
      { lui: "terrore", t: "Si nasconde dietro il pullman" },
      { lui: "finto", t: "La saluta da lontano, con un dito" }
    ] },
    { id: "git-i27", q: "Che faccia fa {P} quando il prof annuncia: «Domani un museo, poi un altro museo, poi un museo»?", carte: [
      { lui: "triste", t: "«Mamma, vienimi a prendere»" },
      { lui: "estasi", t: "Adora i musei. Davvero" },
      { lui: "sonno", t: "Già sogna le panchine delle sale" },
      { lui: "furbo", t: "Sa già dov'è il bar di ogni museo" }
    ] }
  ],
  scrivi: [
    { id: "git-s01", q: "Ultima sera: {P} scrive sul diario di classe «In questa gita ho imparato che ___»",
      riserve: ["il prof russa in re minore", "le statue non vanno abbracciate", "un panino può durare tre giorni"] },
    { id: "git-s02", q: "{P} lascia un biglietto sul cuscino del prof. Cosa c'è scritto?",
      riserve: ["Sveglia alle 10, grazie", "Ci vediamo a colazione. Forse.", "Il dentifricio sulla maniglia? Boh"] },
    { id: "git-s03", q: "La guida del museo chiede: «Domande?». {P} alza la mano: «___»",
      riserve: ["Ma il bar a che piano è?", "Questa statua l'ha rotta qualcuno?", "Possiamo toccare? Neanche un dito?"] },
    { id: "git-s04", q: "Nel modulo per dividere le camere, alla voce «richieste speciali», {P} scrive: «___»",
      riserve: ["Niente piedi verso il mio cuscino", "Letto vicino al bagno e al frigo", "Chi russa dorme in corridoio"] },
    { id: "git-s05", q: "Nota sul registro della gita: «Durante la visita, {P} ___»",
      riserve: ["ha scambiato una statua per il prof", "ha cercato di adottare un piccione", "ha mangiato il pranzo alle 8:15"] },
    { id: "git-s06", q: "Sotto la foto di classe c'è una didascalia per ognuno. Quella di {P} dice: «___»",
      riserve: ["Presente solo in foto", "Ha chiuso gli occhi anche qui", "Il prof non sa ancora dov'era"] },
    { id: "git-s07", q: "Il tema di {P} sulla gita si intitola: «___»",
      riserve: ["Firenze vista dal pullman", "Sei panini e un David", "Sopravvivere alla camera 12"] },
    { id: "git-s08", q: "Il museo fa doppiare l'audioguida a {P}. Cosa dice?",
      riserve: ["Questo quadro è vecchio. Fine.", "A destra il bar, a sinistra il bagno", "Non toccate niente, l'ho già fatto io"] },
    { id: "git-s09", q: "Il discorso di {P} per ringraziare il prof, l'ultima sera, comincia così: «___»",
      riserve: ["Caro prof, scusi per il pullman", "Prof, lei è come un papà: russa", "Grazie per non averci perso tutti"] },
    { id: "git-s10", q: "Al ristorante della gita, {P} fa l'imitazione del prof. La sua frase tipica: «___»",
      riserve: ["Ragazzi, non siamo in vacanza", "Chi ha toccato il quadro?", "Contiamoci: siamo 23… 22… 24"] },
    { id: "git-s11", q: "Di notte {P} chiama la reception dell'albergo: «Pronto, ___»",
      riserve: ["c'è un prof nel nostro corridoio", "si può avere la colazione adesso?", "il letto di sopra si muove"] },
    { id: "git-s12", q: "{P} nasconde un bigliettino nella valigia del compagno di stanza: «___»",
      riserve: ["Ho mangiato i tuoi biscotti", "Ti ho preso i calzini, ciao", "Controlla sotto il letto. Bu!"] },
    { id: "git-s13", q: "{P} prova a convincere il prof a fermarsi all'autogrill: «Prof, ___»",
      riserve: ["è un'emergenza: ci sono i panini", "lo dico per l'autista, è stanco", "o mi fermo o canto per tre ore"] },
    { id: "git-s14", q: "Nello zaino della gita, {P} trova un biglietto della mamma: «___»",
      riserve: ["Mettiti la maglia della salute", "Se ti perdi, cerca il bar", "Il panino è per pranzo, non per le 8"] },
    { id: "git-s15", q: "Nel questionario finale, {P} dà un voto al prof. Che voto, e perché?",
      riserve: ["Otto: ci ha persi solo due volte", "Sei: troppi musei", "Dieci: ha offerto le pizze"] },
    { id: "git-s16", q: "Gita finita: ultimo messaggio di {P} al gruppo della classe. Cosa scrive?",
      riserve: ["Chi ha il mio spazzolino?", "Rifacciamola domani, senza musei", "Il prof ha già scritto a mia madre"] },
    { id: "git-s17", q: "Il prof affida a {P} un incarico ufficiale per tutta la gita. Quale?",
      riserve: ["Responsabile della conta", "Custode dei panini", "Sorveglianza bagno del pullman"], voto: "lui" }
  ],
  disegna: [
    { id: "git-d01", q: "Disegna la foto di classe con {P} che rovina lo scatto", su: "scena", adesivi: "🙃🐰🤳🤧" },
    { id: "git-d02", q: "Disegna la camera di {P} in albergo, alle 3 di notte dell'ultima sera", su: "scena", adesivi: "🛏️🍕🔦🧦" },
    { id: "git-d03", q: "Disegna la camera dei prof come se la immagina {P}", su: "scena", adesivi: "🛏️📚☕🎻🧦" },
    { id: "git-d04", q: "Disegna il monumento famoso come se lo ricorda {P}", su: "scena", adesivi: "🗼🏰🍕🦖" },
    { id: "git-d05", q: "Disegna la mappa segreta di {P} per scappare dal museo al bar", su: "scena", adesivi: "☕🥐🚩❌" },
    { id: "git-d06", q: "Disegna il pullman della gita dopo che {P} l'ha decorato per il ritorno", su: "scena", adesivi: "🎈🏁🎶🦖" },
    { id: "git-d07", q: "Disegna su {P} il look da turista: cappellino, marsupio e cartina", su: "ritratto", adesivi: "👝🗺️📸🕶️" },
    { id: "git-d08", q: "Disegna su {P} la divisa da guida turistica, con bandierina e microfono", su: "ritratto", adesivi: "🚩🎤🧢🗺️" },
    { id: "git-d09", q: "Disegna su {P} gli scherzi col pennarello dell'ultima notte in camera", su: "ritratto", adesivi: "🖊️😴⭐" },
    { id: "git-d10", q: "Disegna su {P} elmo e mantello da gladiatore comprati al Colosseo", su: "ritratto", adesivi: "⚔️🛡️🏛️" },
    { id: "git-d11", q: "Disegna su {P} il look da statua greca, per non farsi trovare dal prof", su: "ritratto", adesivi: "🏛️🍇🌿🏺" },
    { id: "git-d12", q: "Disegna su {P} il travestimento da prof per uscire dall'albergo di notte", su: "ritratto", adesivi: "👓📚🥸☕" }
  ],
  chi: [
    { id: "git-c01", q: "Chi di noi, in gita, si siederebbe in fondo al pullman e farebbe partire i cori dopo due minuti?", titolo: "Capo dei sedili in fondo" },
    { id: "git-c02", q: "Chi di noi, in gita a Venezia, spenderebbe tutti i soldi il primo giorno in calamite e cappelli da gondoliere?", titolo: "Calamite al primo giorno" },
    { id: "git-c03", q: "Chi di noi farebbe alla guida del museo domande così strane da farla bloccare a pensare?", titolo: "Incubo delle guide" },
    { id: "git-c04", q: "Chi di noi, in gita, si addormenterebbe in piedi davanti al quadro più famoso del museo?", titolo: "Pisolino agli Uffizi" },
    { id: "git-c05", q: "Chi di noi, in camerata, racconterebbe storie di paura fino alle 4 e poi non riuscirebbe a dormire?", titolo: "Storie di paura alle 4" },
    { id: "git-c06", q: "Chi di noi si perderebbe nel museo e ricomparirebbe un'ora dopo al bar, col cornetto?", titolo: "Ricomparsa al bar" },
    { id: "git-c07", q: "Chi di noi si farebbe sequestrare dal prof la trombetta da stadio dopo dieci minuti di pullman?", titolo: "Trombetta sequestrata" },
    { id: "git-c08", q: "Chi di noi si farebbe beccare dal prof nel corridoio dell'albergo alle due di notte con le patatine in mano?", titolo: "Ronda delle patatine" },
    { id: "git-c09", q: "Chi di noi chiamerebbe la mamma dalla gita tre volte al giorno per raccontarle cosa ha mangiato?", titolo: "Radiocronaca alla mamma" },
    { id: "git-c10", q: "Chi di noi, a Pisa, farebbe cinquanta foto mentre «regge» la Torre, finché non ne viene una perfetta?", titolo: "Pilastro della Torre" },
    { id: "git-c11", q: "Chi di noi, per sbaglio, si ritroverebbe a fare da guida a un gruppo di turisti in pensione?", titolo: "Guida per sbaglio" },
    { id: "git-c12", q: "Chi di noi, col pullman fermo in campagna per un guasto, organizzerebbe un picnic coi panini rimasti?", titolo: "Picnic d'emergenza" },
    { id: "git-c13", q: "Chi di noi dividerebbe la merenda con il compagno che l'ha dimenticata sul pullman?", titolo: "Panino solidale" },
    { id: "git-c14", q: "Chi di noi, la prima notte di gita, consolerebbe il compagno di stanza che ha nostalgia di casa?", titolo: "Abbraccio di camerata" }
  ]
});

/* ---------------------------------------------------------
   🏖️ IN SPIAGGIA A FERRAGOSTO — momento del posto: L'abbronzatura sbagliata
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "spiaggia", cod: "spi", nome: "In spiaggia a Ferragosto", emoji: "🏖️",
  adesivi: "⛱️🩴🕶️🧴🍉🏐🦀🐚🪣🌊🍦🩱",
  entrata: [
    "Ferragosto, 38 gradi, zero posti. {P} si è portat{o|a} l'ombrellone da casa.",
    "Bagnasciuga pieno come un concerto. {P} arriva con la borsa frigo.",
    "Il bagnino ha già fischiato tre volte. Non si sa perché, ma guarda {P}."
  ],
  immagini: [
    { id: "spi-i01", q: "Chi è il bagnino della spiaggia dove va {P}?", carte: [
      { chi: "bagnino", faccia: "sonno", t: "Dorme sulla torretta dalle 11" },
      { chi: "bagnino", faccia: "esulta", piu: { collo: "fischietto" }, t: "Il megafono non lo spegne mai" },
      { chi: "allenatore", faccia: "arrabbiato", t: "Stretching per tutti alle 9" },
      { chi: "nonno", faccia: "felice", piu: { cappello: "paglia" }, t: "Lo stesso dal 1974: sa tutto" }
    ] },
    { id: "spi-i02", q: "Chi passa sotto l'ombrellone di {P} ogni dieci minuti?", carte: [
      { chi: "contadino", faccia: "esulta", t: "«Cocco bello!» Da tre ore" },
      { chi: "cuoco", faccia: "felice", t: "Bomboloni caldi alle due" },
      { chi: "animatore", faccia: "estasi", piu: { collo: "fischietto" }, t: "Vuole tutti al torneo di bocce" },
      { chi: "clown", faccia: "furbo", piu: { mano: "palloncino" }, t: "Palloncini a forma di squalo" }
    ] },
    { id: "spi-i03", q: "Chi interrompe il pisolino di {P} sotto l'ombrellone?", carte: [
      { chi: "bimbo", faccia: "furbo", t: "Un bimbo col secchiello gelato" },
      { chi: "nonna", faccia: "felice", t: "«È pronta la pasta al forno!»" },
      { chi: "dj", faccia: "esulta", t: "La cassa dell'ombrellone accanto" },
      { chi: "pescatore", faccia: "estasi", t: "Uno che mostra a tutti un polpo" }
    ] },
    { id: "spi-i04", q: "Al falò di Ferragosto, chi si siede accanto a {P}?", carte: [
      { chi: "rockstar", faccia: "estasi", t: "Sa tre accordi, li suona da 3 ore" },
      { chi: "nonno", faccia: "pensieroso", t: "Racconta di quando c'erano i lupi" },
      { chi: "scout", faccia: "felice", t: "Accende il fuoco con due sassi" },
      { chi: "cuoco", faccia: "furbo", t: "Arrostisce salsicce e marshmallow" }
    ] },
    { id: "spi-i05", q: "Chi è il vicino d'ombrellone che il destino assegna a {P}?", carte: [
      { chi: "nonno", faccia: "felice", piu: { mano: "libro" }, t: "Racconta la briscola del '78" },
      { chi: "bimbo", faccia: "furbo", piu: { mano: "gelato" }, t: "Riempie di sabbia le sue ciabatte" },
      { chi: "influencer", faccia: "innamorato", t: "Fa dirette da sei ore col telefono" },
      { chi: "vicino", faccia: "arrabbiato", piu: { cappello: "paglia" }, t: "Sposta l'ombrellone ogni 10 minuti" }
    ] },
    { id: "spi-i06", q: "Gara di tuffi dagli scogli: chi batte {P}?", carte: [
      { chi: "bimbo", faccia: "esulta", t: "Un bimbo di 6 anni, a bomba" },
      { chi: "nonna", faccia: "indifferente", piu: { cappello: "fiori" }, t: "Una nonna: candela perfetta" },
      { chi: "supereroe", faccia: "furbo", t: "Uno col mantello, per la scena" },
      { chi: "pirata", faccia: "linguaccia", t: "Un pirata, dal pedalò" }
    ] },
    { id: "spi-i07", q: "Chi offre a {P} il pranzo di Ferragosto, sotto l'ombrellone?", carte: [
      { chi: "zia", faccia: "estasi", t: "La zia: lasagne per 30, in teglia" },
      { chi: "nonno", faccia: "furbo", t: "Il nonno: anguria fresca di mare" },
      { chi: "papa", faccia: "felice", t: "Il papà: solo panini col salame" },
      { chi: "cuoco", faccia: "esulta", t: "Il vicino: grigliata da 8 chili" }
    ] },
    { id: "spi-i08", q: "{P} nuota oltre le boe. Chi se ne accorge per primo?", carte: [
      { chi: "bagnino", faccia: "arrabbiato", piu: { collo: "fischietto" }, t: "Il bagnino: fischio da stadio" },
      { chi: "pescatore", faccia: "arrabbiato", t: "«Mi spaventi i pesci!»" },
      { chi: "capitano", faccia: "sorpreso", t: "Il capitano del traghetto" },
      { chi: "bimbo", faccia: "linguaccia", t: "Un bimbo, ancora più al largo" }
    ] },
    { id: "spi-i09", q: "Chi insegna a {P} a fare surf (o almeno a provarci)?", carte: [
      { chi: "bagnino", faccia: "furbo", t: "Lo fa vedere una volta. Poi pranza" },
      { chi: "nonno", faccia: "estasi", t: "Surfava nel '70, dice lui" },
      { chi: "bimbo", faccia: "indifferente", t: "Un bimbo di 8 anni, già campione" },
      { chi: "influencer", faccia: "linguaccia", piu: { mano: "telefono" }, t: "Filma ogni caduta" }
    ] },
    { id: "spi-i10", q: "A Ferragosto non c'è un solo posto libero per piantare l'ombrellone. Cosa fa {P}?", carte: [
      { e: "🤝⛱️", t: "Si infila tra due famiglie" },
      { e: "🦎🪨", t: "Sugli scogli, come una lucertola" },
      { e: "🏠🙄", t: "Torna a casa: il mare è troppo" },
      { e: "🗣️⛱️", t: "Convince il bagnino a chiacchiere" }
    ] },
    { id: "spi-i11", q: "Il pallone dei ragazzi accanto finisce per la terza volta sul pranzo di {P}. E {P}?", carte: [
      { e: "⚽😄", t: "Si unisce alla partita" },
      { e: "🔒⚽", t: "Sequestra il pallone fino a sera" },
      { e: "📢🛟", t: "Va a chiamare il bagnino" },
      { e: "🧺🚶", t: "Trasloca e mangia in pace" }
    ] },
    { id: "spi-i12", q: "{P} entra in acqua e sente qualcosa di viscido sotto il piede. Cosa fa?", carte: [
      { e: "🦶💨", t: "Esce di corsa in punta di piedi" },
      { e: "😱🪼", t: "Urla «Medusa!» e svuota il mare" },
      { e: "😂🌿", t: "Ride: sarà un'alga" },
      { e: "🤿👀", t: "Va sott'acqua a vedere cos'è" }
    ] },
    { id: "spi-i13", q: "La crema solare è finita e c'è ancora mezza giornata di sole. Cosa fa {P}?", carte: [
      { e: "🌯🏖️", t: "Si arrotola nell'asciugamano" },
      { e: "🙏🧴", t: "La chiede all'ombrellone accanto" },
      { e: "😎🔥", t: "«Tanto io non mi brucio»" },
      { e: "⛱️🌑", t: "Sotto l'ombrellone fino a sera" }
    ] },
    { id: "spi-i14", q: "Dopo il bagno, {P} scopre di aver perso nella sabbia le chiavi della macchina. E ora?", carte: [
      { e: "🖐️⏳", t: "Setaccia la spiaggia per ore" },
      { e: "📢🚨", t: "Mette in allarme tutto il lido" },
      { e: "📞🔑", t: "Si fa portare quelle di scorta" },
      { e: "😌🌅", t: "Ci pensa domani. Ora: mare" }
    ] },
    { id: "spi-i15", q: "Le infradito di {P} si rompono a 300 metri dalla macchina, sulla sabbia che scotta. Come arriva?", carte: [
      { e: "🔥🦘", t: "A balzi: «Ahi! Ahi! Ahi!»" },
      { e: "🧺👣", t: "Da un asciugamano all'altro" },
      { e: "🛍️🦶", t: "Due sacchetti legati ai piedi" },
      { e: "🚶😐", t: "Cammina piano: non sente niente" }
    ] },
    { id: "spi-i16", q: "{P} prende in prestito il canotto dei bambini accanto e lo buca su uno scoglio. Cosa fa?", carte: [
      { e: "🛒🛟", t: "Confessa e ne compra uno nuovo" },
      { e: "🍦🎁", t: "Lo riporta sgonfio, con un gelato" },
      { e: "🦀👉", t: "Dà la colpa a un granchio" },
      { e: "🩹🙏", t: "Lo rattoppa con un cerotto" }
    ] },
    { id: "spi-i17", q: "Gli amici buttano {P} in mare vestit{o|a}, col telefono in tasca. Come reagisce?", carte: [
      { e: "😂📱", t: "Ride: il telefono era vecchio" },
      { e: "🤐🌅", t: "Non parla con nessuno fino a sera" },
      { e: "🍚🙏", t: "Telefono nel riso, e prega" },
      { e: "🌊😈", t: "Trascina giù il primo che ride" }
    ] },
    { id: "spi-i18", q: "Il bagnino va a pranzo e lascia a {P} torretta e fischietto per mezz'ora. Cosa fa {P}?", carte: [
      { e: "📯😤", t: "Fischia a tutti, anche ai gabbiani" },
      { e: "👑🪑", t: "Sta lassù come sul trono" },
      { e: "🚫🌊", t: "Fa uscire tutti dall'acqua" },
      { e: "🙅😰", t: "Lo restituisce: troppo stress" }
    ] },
    { id: "spi-i19", q: "L'ombrellone accanto offre a {P} un'anguria intera, se balla con loro il ballo di gruppo. E {P}?", carte: [
      { e: "💃🍉", t: "Balla e chiede pure il bis" },
      { e: "🙅🍉", t: "«Non ballo. Neanche per l'anguria»" },
      { e: "👉🕺", t: "Manda un amico al suo posto" },
      { e: "🤪💃", t: "Balla malissimo, apposta" }
    ] },
    { id: "spi-i20", q: "La corrente porta il pedalò di {P} al largo, piano piano. Cosa fa?", carte: [
      { e: "🚲💦", t: "Pedala a tutta verso riva" },
      { e: "😎🛟", t: "Si sdraia e aspetta il bagnino" },
      { e: "🏊💪", t: "Si tuffa e torna a nuoto" },
      { e: "📱🌊", t: "Video: «Sto andando in Croazia»" }
    ] },
    { id: "spi-i21", q: "All'ombrellone accanto, in costume, c'è la prof più severa delle medie di {P}. Cosa fa {P}?", carte: [
      { e: "👋😊", t: "La saluta come se niente fosse" },
      { e: "🏖️🙈", t: "Si sotterra nella sabbia" },
      { e: "🙏📝", t: "Si scusa per il compito copiato" },
      { e: "🫡", t: "Si mette sull'attenti" }
    ] },
    { id: "spi-i22", q: "Che gioco propone {P} sotto l'ombrellone?", carte: [
      { e: "🃏", t: "Briscola a coppie, all'ombra" },
      { e: "🏐☀️", t: "Beach volley a mezzogiorno" },
      { e: "🏎️", t: "Le piste per le biglie" },
      { e: "🦀🪣", t: "Caccia ai granchi sugli scogli" }
    ] },
    { id: "spi-i23", q: "Che faccia fa {P} quando il gelato appena comprato cade nella sabbia?", carte: [
      { lui: "triste", t: "Lo fissa per un minuto intero" },
      { lui: "arrabbiato", t: "Vuole fare causa alla sabbia" },
      { lui: "indifferente", t: "Lo raccoglie e ci soffia sopra" },
      { lui: "linguaccia", t: "Lecca quel che resta sul cono" }
    ] },
    { id: "spi-i24", q: "Che faccia fa {P} quando scopre di aver steso il telo sopra un formicaio?", carte: [
      { lui: "terrore", t: "Balla la tarantella per un'ora" },
      { lui: "disgusto", t: "Il telo lo butta. Anzi, lo brucia" },
      { lui: "sorpreso", t: "Le formiche si son prese il panino" },
      { lui: "indifferente", t: "Le saluta e si rimette giù" }
    ] },
    { id: "spi-i25", q: "Che faccia fa {P} quando il bagnino annuncia: «Bandiera rossa, oggi niente bagno»?", carte: [
      { lui: "triste", t: "Fissa il mare e sospira" },
      { lui: "arrabbiato", t: "Discute col bagnino per un'ora" },
      { lui: "esulta", t: "Finalmente: solo pisolino" },
      { lui: "sonno", t: "Tanto non si bagnava mai" }
    ] },
    { id: "spi-i26", q: "Un amico chiede: «Il pranzo lo portavi tu, vero?». Che faccia fa {P}?", carte: [
      { lui: "terrore", t: "Nessuno ha portato il pranzo" },
      { lui: "furbo", t: "Ha un piano: l'ombrellone accanto" },
      { lui: "triste", t: "Fame. Solo tanta fame" },
      { lui: "indifferente", t: "Ha già mangiato alle 10" }
    ] }
  ],
  scrivi: [
    { id: "spi-s01", q: "Sulla sabbia bagnata, {P} scrive a lettere giganti: «___»",
      riserve: ["Qui c'era il mio asciugamano", "AIUTO: finita la crema", "Bagnino, ti voglio bene"] },
    { id: "spi-s02", q: "{P} prova a fare il morto a galla. Dopo un minuto annuncia: «___»",
      riserve: ["Un pesce mi ha guardato male", "Sono a Malta, venitemi a prendere", "Il morto lo so fare, il galla no"] },
    { id: "spi-s03", q: "{P} sbaglia ombrellone e si sdraia sul lettino di un altro. Al padrone dice: «___»",
      riserve: ["Glielo tenevo caldo", "Bel lettino. Quanto vuole?", "Scusi, da qui sono tutti uguali"] },
    { id: "spi-s04", q: "{P} inventa il tormentone dell'estate. Il ritornello fa: «___»",
      riserve: ["Sabbia nel costume, oh oh oh", "Ombrellone mio, non te ne andare", "Anguria, anguria, sei la mia storia"] },
    { id: "spi-s05", q: "{P} si improvvisa ambulante in spiaggia per un giorno. Cosa urla?",
      riserve: ["Cocco freddo, consigli gratis!", "Ombra in affitto, cinque minuti!", "Gelati sciolti a metà prezzo!"] },
    { id: "spi-s06", q: "La scusa di {P} per non fare il bagno: «___»",
      riserve: ["Ho appena messo la crema", "C'è un granchio che mi guarda", "L'acqua oggi è troppo bagnata"] },
    { id: "spi-s07", q: "{P} scrive la lista delle cose da portare in spiaggia a Ferragosto. L'ultima voce è: «___»",
      riserve: ["la nonna, con la sua sedia", "un piano B: il centro commerciale", "la pazienza per il parcheggio"] },
    { id: "spi-s08", q: "Il bagnino prende il megafono e urla verso {P}: «___»",
      riserve: ["Esca dal pedalò degli altri!", "Ha dimenticato la nonna all'ombrellone", "Le boe non sono un trampolino!"] },
    { id: "spi-s09", q: "Al tramonto tutta la spiaggia applaude il sole che scende. {P} invece urla: «___»",
      riserve: ["Bis! Bis!", "Domani alla stessa ora, mi raccomando", "Era meglio quello di ieri"] },
    { id: "spi-s10", q: "La gelateria del lido inventa un gusto dedicato a {P}. Come si chiama?",
      riserve: ["Crema solare e cocco", "Anguria con sabbia croccante", "Frittata di pasta"] },
    { id: "spi-s11", q: "L'onda più grande di Ferragosto travolge {P}. Prima frase appena riemerge?",
      riserve: ["Ho perso un'infradito e la dignità", "Ancora! Rifacciamola!", "Il panino è salvo?"] },
    { id: "spi-s12", q: "{P} dorme al sole, e gli amici scrivono con la crema sulla sua schiena: «___»",
      riserve: ["Girare tra un'ora", "Non disturbare: in cottura", "Proprietà del bagnino"] },
    { id: "spi-s13", q: "{P} adotta un granchio per tutto il pomeriggio. Che nome gli dà?",
      riserve: ["Pinzetta Secondo", "Il Ragioniere", "Zio Chela"] },
    { id: "spi-s14", q: "Alle 7 di sera se ne vanno tutti, e {P} dice: «___»",
      riserve: ["Ancora cinque minuti, giuro", "Il bagno più bello è adesso", "Qualcuno ha visto la mia macchina?"], voto: "lui" },
    { id: "spi-s15", q: "{P} scuote l'asciugamano controvento e insabbia la famiglia accanto. Si scusa così: «___»",
      riserve: ["Era sabbia d'autore, offro io", "Così vi abbronzate anche dentro", "Il vento ha fatto tutto da solo"] },
    { id: "spi-s16", q: "Sotto l'ombrellone {P} fa il cruciverba. Al «12 orizzontale» scrive: «___»",
      riserve: ["ANGURIA (ci stava, più o meno)", "BOH, in sei lettere", "il nome del bagnino"] },
    { id: "spi-s17", q: "{P} fa il bagno di mezzanotte e scrive al gruppo: «___»",
      riserve: ["Venite, il mare è tutto mio", "Acqua calda. Ma c'è qualcosa", "Ho perso le ciabatte, portate la luce"] }
  ],
  disegna: [
    { id: "spi-d01", q: "Disegna su {P} il segno bianco di occhiali e orologio sull'abbronzatura", su: "ritratto", adesivi: "⌚👓☀️" },
    { id: "spi-d02", q: "Disegna su {P} cuffia, braccioli e tutto ciò che mette per fare il bagno", su: "ritratto", adesivi: "🦆🛟🥽🧴" },
    { id: "spi-d03", q: "Disegna su {P} il naso rosso, la crema a strisce e il cappello di paglia", su: "ritratto", adesivi: "👒🔴🤍" },
    { id: "spi-d04", q: "Disegna su {P} il look da bagnino: fischietto, salvagente e megafono", su: "ritratto", adesivi: "🛟📢🚩" },
    { id: "spi-d05", q: "Disegna su {P} i rimedi contro i 38 gradi: cappello di giornale e altro", su: "ritratto", adesivi: "📰🧊🍉💦" },
    { id: "spi-d06", q: "Disegna su {P} sabbia, alghe e secchiello in testa dopo l'onda più grossa", su: "ritratto", adesivi: "🌿🐟⭐" },
    { id: "spi-d07", q: "Disegna l'ombrellone di {P}, attrezzato per restare dalle 6 alle 20", su: "scena", adesivi: "🧊📺🛋️🍝" },
    { id: "spi-d08", q: "Disegna la doccia del lido quando c'è {P} da mezz'ora: chi c'è in fila?", su: "scena", adesivi: "🚿🧴⏳🧽😤" },
    { id: "spi-d09", q: "Disegna il mare di Ferragosto visto dall'ombrellone di {P}", su: "scena", adesivi: "🦩🛟🚤🐬" },
    { id: "spi-d10", q: "Disegna il pranzo che {P} tira fuori dalla borsa frigo", su: "scena", adesivi: "🍝🥘🍗🥖" },
    { id: "spi-d11", q: "Disegna il materassino gonfiabile dei sogni di {P}", su: "scena", adesivi: "🦄🦩🍩🐊" },
    { id: "spi-d12", q: "Disegna cosa vede {P} quando mette la testa sott'acqua con la maschera", su: "scena", adesivi: "🐠🐙🦑👟" }
  ],
  chi: [
    { id: "spi-c01", q: "Chi di noi arriverebbe in spiaggia alle 6 di mattina per piazzare l'asciugamano in prima fila?", titolo: "Sentinella dell'alba" },
    { id: "spi-c02", q: "Chi di noi porterebbe in spiaggia la parmigiana nella teglia di famiglia, ancora calda?", titolo: "Parmigiana d'ombrellone" },
    { id: "spi-c03", q: "Chi di noi aspetterebbe le tre ore dopo mangiato col cronometro, prima di fare il bagno?", titolo: "Tre ore col cronometro" },
    { id: "spi-c04", q: "Chi di noi giocherebbe a racchettoni proprio sul bagnasciuga, dove passano tutti?", titolo: "Racchettoni tra la folla" },
    { id: "spi-c05", q: "Chi di noi passerebbe Ferragosto in spiaggia ad ascoltare la partita alla radio, a tutto volume?", titolo: "Radiocronista d'ombrellone" },
    { id: "spi-c06", q: "Chi di noi si addormenterebbe sotto l'ombrellone e si sveglierebbe al sole con l'abbronzatura a forma di libro?", titolo: "Abbronzatura col libro" },
    { id: "spi-c07", q: "Chi di noi farebbe un castello di sabbia gigante e poi litigherebbe con le onde che lo distruggono?", titolo: "Castello contro il mare" },
    { id: "spi-c08", q: "Chi di noi si farebbe seppellire nella sabbia fino al collo e poi non riuscirebbe più a uscire?", titolo: "Statua di sabbia" },
    { id: "spi-c09", q: "Chi di noi, a Ferragosto, avrebbe il coraggio di lanciare un gavettone al bagnino?", titolo: "Gavettone al bagnino" },
    { id: "spi-c10", q: "Chi di noi entrerebbe in acqua un centimetro alla volta urlando «è gelata!», ad agosto?", titolo: "Un centimetro alla volta" },
    { id: "spi-c11", q: "Chi di noi, nella partitella in spiaggia, farebbe i pali con le infradito e li stringerebbe quando è in porta?", titolo: "Pali mobili" },
    { id: "spi-c12", q: "Chi di noi, se un delfino arrivasse vicino a riva, gli darebbe subito un nome e ci farebbe amicizia?", titolo: "Battesimo del delfino" },
    { id: "spi-c13", q: "Chi di noi farebbe amicizia con tutto l'ombrellone accanto e finirebbe a pranzo da loro?", titolo: "Parente d'ombrellone" },
    { id: "spi-c14", q: "Chi di noi nuoterebbe contro le onde per riportare a riva il pallone dei bambini?", titolo: "Salvataggio del pallone" }
  ]
});

/* ---------------------------------------------------------
   💘 AL PRIMO APPUNTAMENTO — momento del posto: Il look per l'appuntamento
   (per tutti, mai spinto: al massimo «il bacio», detto così)
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "appuntamento", cod: "app", nome: "Al primo appuntamento", emoji: "💘",
  adesivi: "🌹🕯️🍝💌🎻🍰🕶️👔🎀💐🍫📱",
  entrata: [
    "Tavolo per due, candela accesa. {P} è lì da mezz'ora, in anticipo.",
    "Il violinista si avvicina. {P} legge lo stesso menù da dieci minuti.",
    "Primo appuntamento per {P}. Il cameriere ha già capito tutto."
  ],
  immagini: [
    { id: "app-i01", q: "Chi è il cameriere che serve il tavolo di {P}?", carte: [
      { chi: "cameriere", faccia: "furbo", t: "Resta lì ad ascoltare tutto" },
      { chi: "cantante", faccia: "estasi", t: "Canta mentre versa l'acqua" },
      { chi: "mago", faccia: "linguaccia", t: "Fa sparire il pane, per magia" },
      { chi: "nonno", faccia: "pensieroso", t: "«Ai miei tempi si ballava»" }
    ] },
    { id: "app-i02", q: "Chi c'è al tavolo accanto, a sbirciare il primo appuntamento di {P}?", carte: [
      { chi: "zia", faccia: "furbo", t: "La zia, che prende appunti" },
      { chi: "vicino", faccia: "sorpreso", t: "Il vicino, che lo dirà a tutti" },
      { chi: "influencer", f: "d", faccia: "innamorato", piu: { mano: "telefono" }, t: "Una che fa la diretta della cena" },
      { chi: "prof", faccia: "indifferente", t: "Il prof di mate: corregge il conto" }
    ] },
    { id: "app-i03", q: "Chi arriva a suonare al tavolo di {P} per «creare l'atmosfera»?", carte: [
      { chi: "rockstar", faccia: "esulta", piu: { schiena: "chitarra" }, t: "Chitarra elettrica a tutto volume" },
      { chi: "cantante", faccia: "triste", t: "Canta solo canzoni d'addio" },
      { chi: "nonno", faccia: "felice", t: "Un nonno con la fisarmonica" },
      { chi: "dj", faccia: "furbo", t: "Un DJ con la cassa sul carrello" }
    ] },
    { id: "app-i04", q: "All'ingresso del ristorante, chi blocca {P}?", carte: [
      { chi: "buttafuori", faccia: "indifferente", t: "«Senza cravatta? No»" },
      { chi: "cameriere", faccia: "sorpreso", t: "«La prenotazione? Era per ieri»" },
      { chi: "vigile", faccia: "arrabbiato", t: "Un vigile: multa al motorino" },
      { chi: "nonna", faccia: "estasi", t: "La nonna, che passava di lì" }
    ] },
    { id: "app-i05", q: "Chi riaccompagna {P} a casa dopo l'appuntamento?", carte: [
      { chi: "autista", faccia: "felice", t: "Un taxista che allunga il giro" },
      { chi: "papa", faccia: "sonno", t: "Il papà, che aspettava sotto" },
      { chi: "cugino", faccia: "esulta", t: "Il cugino in motorino, col clacson" },
      { e: "🚌💨", t: "L'ultimo autobus, preso al volo" }
    ] },
    { id: "app-i06", q: "Al ristorante qualcuno riconosce {P} e viene a salutare al tavolo. Chi è?", carte: [
      { chi: "cuoco", faccia: "felice", t: "Lo chef: «Il solito? Carbonara?»" },
      { chi: "prof", f: "d", faccia: "sorpreso", t: "La maestra: «Hai fatto i compiti?»" },
      { chi: "bimbo", faccia: "linguaccia", t: "Il cuginetto: «Lo dico alla zia!»" },
      { chi: "corriere", faccia: "felice", t: "Il corriere: «Domani ripasso, eh»" }
    ] },
    { id: "app-i07", q: "Prima dell'appuntamento, {P} chiede un consiglio. A chi?", carte: [
      { chi: "nonno", faccia: "felice", piu: { mano: "fiore" }, t: "Al nonno: «Porta i fiori, sempre»" },
      { chi: "influencer", faccia: "furbo", t: "Influencer: «Rispondi dopo 3 ore»" },
      { chi: "mago", faccia: "pensieroso", t: "A un mago: il trucco della moneta" },
      { chi: "zia", faccia: "esulta", t: "Alla zia: «Parla subito di nozze»" }
    ] },
    { id: "app-i08", q: "{P} scopre che la persona dell'appuntamento fa un mestiere strano. Quale?", carte: [
      { chi: "clown", faccia: "esulta", t: "Clown alle feste: anche a tavola" },
      { chi: "capitano", faccia: "pensieroso", t: "Capitano di traghetto: solo onde" },
      { chi: "giudice", faccia: "arrabbiato", t: "Giudice di gare di torte: dà voti" },
      { chi: "vigile", faccia: "furbo", t: "Vigile: ha già multato la via" }
    ] },
    { id: "app-i09", q: "Nella passeggiata dopo cena, chi incontra {P}?", carte: [
      { chi: "vicino", faccia: "sonno", piu: { animale: "cane" }, t: "Il vicino in pigiama, col cane" },
      { chi: "zio", faccia: "furbo", t: "Lo zio: «E chi sarebbe, scusa?»" },
      { chi: "cugino", faccia: "felice", t: "Il cugino, che si unisce a loro" },
      { chi: "allenatore", faccia: "arrabbiato", t: "«Domani allenamento alle 8!»" }
    ] },
    { id: "app-i10", q: "A metà cena {P} si accorge di avere un pezzo di insalata tra i denti. Cosa fa?", carte: [
      { e: "🚻🏃", t: "Corre in bagno con una scusa" },
      { e: "🧻🤧", t: "Lo toglie fingendo di tossire" },
      { e: "😂🥬", t: "Ci ride sopra e lo dice subito" },
      { e: "😐🤐", t: "Non sorride più per tutta la sera" }
    ] },
    { id: "app-i11", q: "Arriva il conto. Cosa fa {P}?", carte: [
      { e: "💳🤫", t: "Ha già pagato di nascosto" },
      { e: "➗🧾", t: "Alla romana, al centesimo" },
      { e: "👖🔍", t: "Cerca il portafoglio… per finta" },
      { e: "✊✋", t: "Lo giocano a sasso-carta-forbice" }
    ] },
    { id: "app-i12", q: "L'altro arriva con quaranta minuti di ritardo. Cosa fa {P}?", carte: [
      { e: "🍝😋", t: "Ha già finito l'antipasto" },
      { e: "🙂🕐", t: "«Figurati, ero in ritardo anch'io»" },
      { e: "🧊😒", t: "Un sorriso gelido" },
      { e: "🏠🛌", t: "È già a casa, in pigiama" }
    ] },
    { id: "app-i13", q: "Al tavolo cala un silenzio imbarazzante di dieci secondi. Come lo rompe {P}?", carte: [
      { e: "☁️🗣️", t: "Parla del meteo con impegno" },
      { e: "🎬📖", t: "Racconta un film. Tutto" },
      { e: "📱⏰", t: "Guarda il telefono «per l'ora»" },
      { e: "♈❓", t: "«Allora… di che segno sei?»" }
    ] },
    { id: "app-i14", q: "Il piatto di {P} arriva ed è enorme: una bistecca da un chilo. Cosa fa?", carte: [
      { e: "🥩💪", t: "La finisce tutta, con orgoglio" },
      { e: "📦🥩", t: "Si fa incartare metà" },
      { e: "🍴💕", t: "Ne imbocca un pezzo all'altro" },
      { e: "🥔😇", t: "Mangia solo le patate" }
    ] },
    { id: "app-i15", q: "Dopo cena c'è la passeggiata, ma le scarpe nuove di {P} fanno malissimo. Cosa fa?", carte: [
      { e: "😬👠", t: "Cammina sorridendo, nel dolore" },
      { e: "👣🌙", t: "Prosegue a piedi nudi" },
      { e: "🍦🪑", t: "Propone un gelato, seduti" },
      { e: "😴⏰", t: "«Domani mi alzo prestissimo»" }
    ] },
    { id: "app-i16", q: "L'altro racconta una barzelletta che non fa ridere per niente. Cosa fa {P}?", carte: [
      { e: "😂😂", t: "Ride fortissimo, per gentilezza" },
      { e: "🤡🔁", t: "Ne racconta una ancora peggio" },
      { e: "❓🤔", t: "Chiede di spiegargliela" },
      { e: "🙂➡️", t: "Sorride e cambia discorso" }
    ] },
    { id: "app-i17", q: "«Assaggia, è il mio piatto preferito!». È una cosa che {P} odia. Cosa fa?", carte: [
      { e: "😋👍", t: "Giura che è buonissimo" },
      { e: "🙅🗣️", t: "Confessa subito che lo odia" },
      { e: "🤧🚫", t: "Si inventa un'allergia improvvisa" },
      { e: "🙈🥗", t: "Lo nasconde sotto l'insalata" }
    ] },
    { id: "app-i18", q: "Al dolce, cosa ordina {P}?", carte: [
      { e: "🍰🍰", t: "Uno a testa, grazie" },
      { e: "🍰🥄🥄", t: "Uno solo, con due cucchiaini" },
      { e: "🙅🍴", t: "Niente. Poi ruba dall'altro piatto" },
      { e: "🍰🍰🍰", t: "Tre: uno è di riserva" }
    ] },
    { id: "app-i19", q: "Fine serata, davanti al portone: è il momento dei saluti. Cosa fa {P}?", carte: [
      { e: "💋", t: "Va per il bacio" },
      { e: "🤝📜", t: "Stretta di mano da notaio" },
      { e: "🤗⏳", t: "Abbraccio lunghissimo" },
      { e: "👋🏃", t: "«Ciao ciao!» e scappa di corsa" }
    ] },
    { id: "app-i20", q: "Il cameriere sbaglia tavolo e porta a {P} una torta con le candeline, cantando. Cosa fa {P}?", carte: [
      { e: "🎂🌬️", t: "Spegne le candeline: grazie!" },
      { e: "📢🙏", t: "Spiega l'errore a tutto il locale" },
      { e: "👉🎂", t: "Dice che compie gli anni l'altro" },
      { e: "🎤🎶", t: "Si unisce al coro, più forte" }
    ] },
    { id: "app-i21", q: "Dopo cena l'altro propone: «Andiamo a ballare la salsa?». E {P}?", carte: [
      { e: "💃✨", t: "Inventa i passi tutta la sera" },
      { e: "🦶🤕", t: "Si inventa una caviglia dolorante" },
      { e: "🙋📚", t: "Confessa e chiede una lezione" },
      { e: "🕺🚶", t: "Balla già sul marciapiede" }
    ] },
    { id: "app-i22", q: "Che regalo porta {P} al primo appuntamento?", carte: [
      { e: "📼🎶", t: "Una compilation fatta apposta" },
      { e: "🍫", t: "Cioccolatini (ne mancano metà)" },
      { e: "🎟️⚽", t: "Due biglietti per lo stadio" },
      { e: "🌵", t: "Una piantina grassa: dura di più" }
    ] },
    { id: "app-i23", q: "Dove porta {P} l'altro al primo appuntamento?", carte: [
      { e: "🍕", t: "Alla solita pizzeria" },
      { e: "⛳", t: "Al minigolf: «È romantico, giuro»" },
      { e: "👵🍝", t: "A pranzo dalla nonna" },
      { e: "🎢", t: "Sulle montagne russe" }
    ] },
    { id: "app-i24", q: "Che faccia fa {P} quando l'altro dice: «Io la carbonara la faccio con la panna»?", carte: [
      { lui: "disgusto", t: "Chiede il conto. Subito" },
      { lui: "finto", t: "«Interessante…» (non lo è)" },
      { lui: "sorpreso", t: "Ripensa a tutta la serata" },
      { lui: "innamorato", t: "«Anch'io!» È destino" }
    ] },
    { id: "app-i25", q: "Che faccia fa {P} quando scopre che l'altro ha la sua stessa identica maglietta?", carte: [
      { lui: "esulta", t: "Foto insieme, subito" },
      { lui: "imbarazzo", t: "Si chiude la giacca fino al collo" },
      { lui: "sorpreso", t: "«Quindi siamo una squadra»" },
      { lui: "furbo", t: "Era tutto calcolato" }
    ] },
    { id: "app-i26", q: "Che faccia fa {P} quando l'altro ordina per tutti e due, senza chiedere?", carte: [
      { lui: "arrabbiato", t: "Riordina tutto da capo" },
      { lui: "felice", t: "Meno fatica, grazie" },
      { lui: "finto", t: "«Perfetto!» (odia i funghi)" },
      { lui: "pensieroso", t: "Si segna tutto per la vendetta" }
    ] },
    { id: "app-i27", q: "Che faccia fa {P} quando, «per caso», al ristorante arriva la mamma dell'altro?", carte: [
      { lui: "terrore", t: "Si raddrizza come a un esame" },
      { lui: "finto", t: "Sorriso da foto di matrimonio" },
      { lui: "esulta", t: "Si fa dare subito una ricetta" },
      { lui: "imbarazzo", t: "Si nasconde dietro il menù" }
    ] }
  ],
  scrivi: [
    { id: "app-s01", q: "Il giorno dopo {P} scrive: «Ieri mi sono divertit{o|a} tantissimo, soprattutto quando ___»",
      riserve: ["ci hanno portato il conto sbagliato", "hai riso alla mia barzelletta sul tonno", "il cameriere è inciampato nella borsa"] },
    { id: "app-s02", q: "Il violinista chiede a {P} una dedica. {P} gli sussurra: «Suona ___»",
      riserve: ["quella della pubblicità della pasta", "più forte: mi brontola lo stomaco", "più piano, sto per dire una cosa"] },
    { id: "app-s03", q: "{P} legge all'altro la poesia d'amore scritta per l'occasione. Il primo verso è: «___»",
      riserve: ["Sei più dolce del tiramisù", "Rose rosse, viole blu, il conto tu", "Ti guardo e mi si scioglie il gelato"] },
    { id: "app-s04", q: "{P} scrive il giorno dopo: «Ho parlato di te a mia nonna. Ha detto solo: ___»",
      riserve: ["sì, ma sa cucinare?", "domenica a pranzo da me, niente scuse", "ottimo: ho già comprato i confetti"] },
    { id: "app-s05", q: "{P} scrive al gruppo degli amici: «Com'è andata? Vi dico solo che ___»",
      riserve: ["ha ordinato per me e ha sbagliato tutto", "abbiamo parlato tre ore di gatti", "alla fine ci ha cacciati il cameriere"] },
    { id: "app-s06", q: "L'altro scrive «Ci rivediamo?» e {P} risponde: «Sì, ma solo se ___»",
      riserve: ["il dolce stavolta lo prendiamo intero", "stavolta il violinista lo paghi tu", "porti anche il tuo cane"] },
    { id: "app-s07", q: "Davanti allo specchio, {P} prova la frase per rompere il ghiaccio: «___»",
      riserve: ["Sai che i polpi hanno tre cuori?", "Anche tu respiri? Che coincidenza", "Il pane qui è gratis, vero?"] },
    { id: "app-s08", q: "{P} chiude il menù e ordina con aria sicura: «Per me ___»",
      riserve: ["quello che costa meno, detto bene", "il piatto che non so pronunciare", "lo stesso del tavolo accanto"] },
    { id: "app-s09", q: "«Raccontami qualcosa di te». E {P} racconta: «___»",
      riserve: ["So fare il verso del delfino", "A 9 anni ho vinto una gara di torte", "La mia pianta si chiama Gino"] },
    { id: "app-s10", q: "Prima che esca, la mamma dà a {P} le ultime istruzioni: «___»",
      riserve: ["Niente spaghetti, che ti sporchi", "Mandami una foto, così vedo", "Fai parlare l'altro. Tu mangia"] },
    { id: "app-s11", q: "{P} chiede a un amico una telefonata di salvataggio, se va male: «___»",
      riserve: ["Chiamami alle 21:30: emergenza gatto", "Se scrivo «banana», salvami", "Fingi di essere il mio capo"] },
    { id: "app-s12", q: "Il profilo di {P} sull'app degli appuntamenti dice: «Sono una persona che ___»",
      riserve: ["fa la carbonara (quasi)", "ama le passeggiate fino al frigo", "divide le patatine solo con chi ama"] },
    { id: "app-s13", q: "Rientrando, {P} racconta la serata al cane. Cosa gli dice?",
      riserve: ["Abbiamo un problema: ama i gatti", "Mi ha chiesto di te. Sei famoso", "È andata benissimo. Credo"] },
    { id: "app-s14", q: "«Qual è il tuo piatto preferito?». Per fare colpo, {P} risponde: «___»",
      riserve: ["Il risotto allo zafferano dell'Himalaya", "La carbonara, ma col sushi", "Quello che hai tu nel piatto"] },
    { id: "app-s15", q: "Il cameriere chiede: «Tutto bene qui?». {P} risponde: «___»",
      riserve: ["Sì, se ci porta altro pane", "Ce lo dica lei, ci guarda da un'ora", "Il violinista può andare, grazie"] },
    { id: "app-s16", q: "Quella sera, nel diario segreto, {P} scrive: «___»",
      riserve: ["Ho riso troppo forte, quattro volte", "Non ho rovesciato niente. Record", "Ha detto «a presto». Cosa vorrà dire?"] },
    { id: "app-s17", q: "{P} sbaglia chat e manda all'altro il messaggio per la mamma: «___»",
      riserve: ["Mamma, ho messo la camicia buona", "Tienimi un po' di tiramisù", "Tranquilla, non ho parlato di treni"] }
  ],
  disegna: [
    { id: "app-d01", q: "Disegna su {P} il look per il primo appuntamento: fiore, papillon, fiocco", su: "ritratto", adesivi: "🌹🎀💎" },
    { id: "app-d02", q: "Disegna su {P} il look rovinato dall'acquazzone, appena prima di entrare", su: "ritratto", adesivi: "☔💧🌧️🍃" },
    { id: "app-d03", q: "Disegna su {P} il look «troppo elegante» per andare in pizzeria", su: "ritratto", adesivi: "🎩👑💎🧥" },
    { id: "app-d04", q: "Disegna su {P} la faccia del giorno dopo: cuori, stelline, occhi sognanti", su: "ritratto", adesivi: "💘✨🦋" },
    { id: "app-d05", q: "Disegna su {P} il look preparato in tre minuti, al buio", su: "ritratto", adesivi: "🧦👟🧢" },
    { id: "app-d06", q: "Disegna su {P} i baffi di cioccolato, proprio al momento dei saluti", su: "ritratto", adesivi: "🍫🍰💋" },
    { id: "app-d07", q: "Disegna il tavolo che {P} ha preparato per stupire l'altro", su: "scena", adesivi: "🦢🎆🎈🎶" },
    { id: "app-d08", q: "Disegna il posto segreto dove {P} porta l'altro al secondo appuntamento", su: "scena", adesivi: "🎡🌙🍦🎢" },
    { id: "app-d09", q: "Disegna il piatto che {P} ordina per fare colpo (e che non sa mangiare)", su: "scena", adesivi: "🦞🦀🍝🥢" },
    { id: "app-d10", q: "Disegna cosa succede sotto il tavolo di {P} durante la cena", su: "scena", adesivi: "👠🐈🧦👟" },
    { id: "app-d11", q: "Disegna il «ristorante» dove {P} ha prenotato, sbagliando indirizzo", su: "scena", adesivi: "🔧🛞🐄🏚️" },
    { id: "app-d12", q: "Disegna il portone di {P}, con la famiglia affacciata a spiare il saluto", su: "scena", adesivi: "👵👴🪟🐈🔦" }
  ],
  chi: [
    { id: "app-c01", q: "Chi di noi, al primo appuntamento, parlerebbe per mezz'ora del proprio gatto?", titolo: "Monologo sul gatto" },
    { id: "app-c02", q: "Chi di noi si preparerebbe sul telefono un elenco di argomenti di conversazione, da sbirciare sotto il tavolo?", titolo: "Copione sotto il tavolo" },
    { id: "app-c03", q: "Chi di noi, al primo appuntamento, ordinerebbe il piatto più difficile da mangiare: spaghetti con le cozze?", titolo: "Coraggio con le cozze" },
    { id: "app-c04", q: "Chi di noi passerebbe la cena a fotografare i piatti, chiedendo all'altro di spostarsi per la luce?", titolo: "Foto ai piatti, prego" },
    { id: "app-c05", q: "Chi di noi, quando arriva il violinista al tavolo, si metterebbe a cantarci sopra a squarciagola?", titolo: "Duetto col violinista" },
    { id: "app-c06", q: "Chi di noi si inventerebbe una passione per l'opera per fare colpo, senza averne mai sentita una?", titolo: "Melomane per una sera" },
    { id: "app-c07", q: "Chi di noi, per fare colpo, ordinerebbe in francese sbagliando la pronuncia di tutto il menù?", titolo: "Francese da menù" },
    { id: "app-c08", q: "Chi di noi si farebbe accompagnare dagli amici, nascosti al tavolo accanto con gli occhiali scuri?", titolo: "Scorta segreta" },
    { id: "app-c09", q: "Chi di noi, per l'emozione, chiamerebbe il cameriere «amore»?", titolo: "Amore, il conto!" },
    { id: "app-c10", q: "Chi di noi manderebbe la cronaca della serata al gruppo degli amici prima ancora del dolce?", titolo: "Diretta dal tavolo" },
    { id: "app-c11", q: "Chi di noi si spruzzerebbe mezza boccetta di profumo e farebbe lacrimare il cameriere?", titolo: "Nuvola di profumo" },
    { id: "app-c12", q: "Chi di noi, se la serata andasse benissimo, al dolce starebbe già scegliendo il viaggio di nozze?", titolo: "Matrimonio al dessert" },
    { id: "app-c13", q: "Chi di noi si ricorderebbe per sempre, dal primo appuntamento, il gusto di gelato preferito dell'altro?", titolo: "Memoria da gelato" },
    { id: "app-c14", q: "Chi di noi, se l'altro rovesciasse il bicchiere, ne rovescerebbe uno apposta per non farlo sentire in imbarazzo?", titolo: "Bicchiere solidale" }
  ]
});

/* =========================================================
   DATI — «Chi di Noi?», autore 4: Gli amici di sempre
   Posti: calcetto, sabato, ufficio.
   {P} = nome di chi è sotto torchio. {o|a} = finale maschile|femminile secondo il suo avatar.
   ========================================================= */
window.SG_CHIDINOI = window.SG_CHIDINOI || { posti: [], comuni: [] };

/* ---------------------------------------------------------
   ⚽ AL CALCETTO DEL GIOVEDÌ
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "calcetto", cod: "cal", nome: "Al calcetto del giovedì", emoji: "⚽",
  adesivi: "⚽🥅🧤👟🏆🧃📣🟨🟥🩹🍕🎽",
  entrata: [
    "Giovedì, ore 21, campo 3. Eravamo in nove: per fortuna è arrivat{o|a} {P}.",
    "Squadre col bim bum bam: {P} è già in porta, e non l'ha chiesto.",
    "Fari accesi, rete rotta, borsoni in panchina: entra {P}, si comincia."
  ],
  immagini: [
    { id: "cal-i01", q: "Manca il decimo. Chi è l'amico dell'ultimo minuto che {P} porta al calcetto?", carte: [
      { chi: "nonno", faccia: "esulta", piu: { cappello: "coppola" }, t: "Ha 78 anni, gioca coi mocassini" },
      { chi: "cugino", faccia: "indifferente", piu: { cappello: "cuffie" }, t: "Il cugino che non toglie le cuffie" },
      { chi: "turista", faccia: "felice", t: "Un turista che passava di lì" },
      { chi: "calciatore", faccia: "furbo", piu: { stampa: "numero" }, t: "Giura di aver fatto la Primavera" }
    ] },
    { id: "cal-i02", q: "Chi arbitra la partita del giovedì di {P}?", carte: [
      { chi: "arbitro", faccia: "arrabbiato", piu: { collo: "fischietto" }, t: "Fischia tutto, anche i sospiri" },
      { chi: "nonno", faccia: "sonno", t: "Il nonno di uno: dorme in panchina" },
      { chi: "bimbo", faccia: "furbo", t: "Il figlio del portiere: tifa papà" },
      { chi: "vigile", faccia: "felice", t: "Un vigile in pensione: solo multe" }
    ] },
    { id: "cal-i03", q: "Al torneo dei bar, la squadra di {P} prende un allenatore. Chi è?", carte: [
      { chi: "allenatore", faccia: "arrabbiato", t: "Urla tutto il tempo, anche ai suoi" },
      { chi: "nonna", faccia: "felice", piu: { mano: "libro" }, t: "Nonna: schemi fatti all'uncinetto" },
      { chi: "mago", faccia: "pensieroso", piu: { cappello: "mago" }, t: "Fa i cambi coi tarocchi" },
      { chi: "influencer", faccia: "estasi", piu: { mano: "telefono" }, t: "Fa solo dirette dalla panchina" }
    ] },
    { id: "cal-i04", q: "Rigore decisivo all'ultimo minuto. Chi è il portiere che {P} deve battere?", carte: [
      { chi: "nonno", faccia: "sonno", t: "Si appoggia al palo e sonnecchia" },
      { chi: "ballerino", faccia: "linguaccia", t: "Balla sulla linea per distrarre" },
      { chi: "mago", faccia: "furbo", piu: { occhiali: "monocolo" }, t: "Dice di aver già visto il futuro" },
      { chi: "cuoco", faccia: "felice", piu: { mano: "pizza" }, t: "Promette la pizza se sbagli" }
    ] },
    { id: "cal-i05", q: "Terzo tempo in pizzeria dopo la partita. Chi si siede vicino a {P}?", carte: [
      { chi: "allenatore", faccia: "pensieroso", t: "Rivede la partita sul tovagliolo" },
      { chi: "cugino", faccia: "sonno", t: "Si addormenta sui supplì" },
      { chi: "calciatore", faccia: "esulta", piu: { mano: "trofeo" }, t: "Racconta il suo gol: 14 volte" },
      { chi: "arbitro", faccia: "arrabbiato", t: "L'arbitro, ancora offeso" }
    ] },
    { id: "cal-i06", q: "Arrivati al campo, lo trovano occupato. Chi c'è al posto della squadra di {P}?", carte: [
      { chi: "ballerino", f: "d", faccia: "estasi", t: "Un corso di zumba, in ritardo" },
      { chi: "bimbo", faccia: "furbo", piu: { mano: "pallone" }, t: "Bimbi che sfidano: chi perde esce" },
      { chi: "nonno", faccia: "indifferente", t: "Due nonni che giocano a bocce" },
      { chi: "scout", faccia: "felice", t: "Gli scout piantano le tende" }
    ] },
    { id: "cal-i07", q: "Al calcetto del giovedì arriva un tifoso solo per {P}. Chi è?", carte: [
      { chi: "mamma", faccia: "esulta", piu: { mano: "bandiera" }, t: "La mamma, con lo striscione" },
      { chi: "zia", faccia: "sorpreso", t: "La zia: chiede sempre chi vince" },
      { chi: "vicino", faccia: "arrabbiato", t: "Il vicino, per lamentarsi dei fari" },
      { chi: "influencer", faccia: "innamorato", piu: { mano: "telefono" }, t: "Fa le storie, non guarda il gioco" }
    ] },
    { id: "cal-i08", q: "{P} porta un amico nuovo giurando che è «fortissimo». Chi entra in campo?", carte: [
      { chi: "vichingo", faccia: "arrabbiato", t: "Scivola su tutti, anche sui suoi" },
      { chi: "ballerino", faccia: "felice", t: "Fa le piroette ma non tira mai" },
      { chi: "prof", faccia: "pensieroso", piu: { occhiali: "tondi" }, t: "Spiega la fisica di ogni tiro" },
      { chi: "supereroe", faccia: "esulta", t: "Esulta pure sugli autogol" }
    ] },
    { id: "cal-i09", q: "Chi gestisce il centro sportivo dove {P} gioca il giovedì?", carte: [
      { chi: "capo", faccia: "indifferente", piu: { mano: "tazza" }, t: "Spegne i fari alle 22:59 in punto" },
      { chi: "bidello", faccia: "sonno", t: "Ha perso le chiavi delle docce" },
      { chi: "nonna", faccia: "arrabbiato", t: "Vieta i tacchetti: «Il mio prato!»" },
      { chi: "cuoco", faccia: "felice", t: "Regala crostatine a chi vince" }
    ] },
    { id: "cal-i10", q: "Giovedì, ore 20:55. Che scusa scrive {P} nel gruppo per dare buca?", carte: [
      { e: "🐶🎂", t: "È il compleanno del cane" },
      { e: "🧦❓", t: "Non trova il calzettone sinistro" },
      { e: "👀💬", t: "Nessuna: visualizza e sparisce" },
      { e: "👵🍝", t: "Cena dalla nonna, non si discute" }
    ] },
    { id: "cal-i11", q: "Cosa c'è nel borsone del calcetto di {P}, oltre alle scarpe?", carte: [
      { e: "🥪🥪🥪", t: "Tre panini, per sicurezza" },
      { e: "🧴🪞", t: "Gel, specchio e spazzola: poi esce" },
      { e: "🧦🧦", t: "Calzini di tre partite fa" },
      { e: "🧊🩹", t: "Ghiaccio e cerotti, per prudenza" }
    ] },
    { id: "cal-i12", q: "Le squadre si fanno a pari e dispari. In che ruolo finisce {P}?", carte: [
      { e: "🧤🥅", t: "In porta, ma esce a dribblare" },
      { e: "⚽🏃", t: "Attacco: non torna mai indietro" },
      { e: "🧱🛡️", t: "Difesa: ferma tutti, anche i suoi" },
      { e: "📣🪑", t: "In panchina, fa il telecronista" }
    ] },
    { id: "cal-i13", q: "Fallo al limite dell'area, tutti urlano. Cosa fa {P}?", carte: [
      { e: "🌀😩", t: "Si butta e rotola tre volte" },
      { e: "📜⚖️", t: "Cita il regolamento a memoria" },
      { e: "🤝😇", t: "Dà ragione all'avversario" },
      { e: "📱🎬", t: "Chiede il VAR sul telefono di uno" }
    ] },
    { id: "cal-i14", q: "Al terzo tempo in pizzeria, cosa ordina {P} dopo la partita?", carte: [
      { e: "🍕🍕", t: "Due pizze: «Ho corso tanto»" },
      { e: "🥗🍟", t: "L'insalata, e ruba le patatine" },
      { e: "🍟🧀", t: "Il fritto misto «da dividere»" },
      { e: "☕📋", t: "Solo il caffè, e rivede i gol" }
    ] },
    { id: "cal-i15", q: "Gol all'incrocio dei pali di {P}, il primo dell'anno. Come esulta?", carte: [
      { e: "🧎💨", t: "In ginocchio fino alla bandierina" },
      { e: "👕🙈", t: "Maglia in testa: sbatte sul palo" },
      { e: "📞👵", t: "Telefona alla nonna dal campo" },
      { e: "😐🤷", t: "Niente: «Era facile»" }
    ] },
    { id: "cal-i16", q: "Cosa ha {P} ai piedi, il giovedì sera sul sintetico?", carte: [
      { e: "👟✨", t: "Scarpe nuove, fluo, comprate ieri" },
      { e: "👟🩹", t: "Scarpe del liceo, col nastro" },
      { e: "🩴😅", t: "Infradito: scarpe dimenticate" },
      { e: "🧦📏", t: "Calzettoni sopra le ginocchia" }
    ] },
    { id: "cal-i17", q: "Stavolta il pallone lo porta {P}. Che pallone arriva al campo?", carte: [
      { e: "⚽🎈", t: "Sgonfio: rimbalza come un cuscino" },
      { e: "🏐❓", t: "Uno da pallavolo: «Tanto è tondo»" },
      { e: "⚽✍️", t: "Autografato: vietato calciarlo" },
      { e: "🛍️⚽", t: "Nuovo, ancora con l'etichetta" }
    ] },
    { id: "cal-i18", q: "Finisce 12 a 11, ma nessuno è sicuro del risultato. Cosa fa {P}?", carte: [
      { e: "📝🔢", t: "Aveva segnato tutto sul telefono" },
      { e: "😤🗣️", t: "Giura che hanno vinto loro" },
      { e: "🤝🍕", t: "«Pari, e andiamo a mangiare»" },
      { e: "🔁⚽", t: "Propone la bella, sono le 23" }
    ] },
    { id: "cal-i19", q: "Fine partita: nello spogliatoio c'è una doccia sola. Cosa fa {P}?", carte: [
      { e: "🚿🎤", t: "Ci canta dentro per mezz'ora" },
      { e: "🏃💨", t: "Va via sudato, si lava a casa" },
      { e: "🧴🧴🧴", t: "Usa lo shampoo di tutti" },
      { e: "🧊😱", t: "Acqua gelata: urla da fuori campo" }
    ] },
    { id: "cal-i20", q: "Mercoledì sera, nel gruppo WhatsApp del calcetto. Cosa manda {P}?", carte: [
      { e: "📋⚽", t: "Le formazioni, già decise" },
      { e: "🎤🕐", t: "Un vocale di 6 minuti sul campo" },
      { e: "😂🖼️", t: "Il meme della partita scorsa" },
      { e: "👍", t: "Solo un pollice, come sempre" }
    ] },
    { id: "cal-i21", q: "Che faccia fa {P} quando scopre di essere in squadra col cugino che non passa mai la palla?", carte: [
      { lui: "disgusto", t: "Chiede il cambio dopo 2 minuti" },
      { lui: "finto", t: "«Bene! Giochiamo di squadra!»" },
      { lui: "furbo", t: "Farà lo stesso, ma meglio" },
      { lui: "sonno", t: "Si mette in porta e riposa" }
    ] },
    { id: "cal-i22", q: "Che faccia fa {P} quando l'arbitro fischia rigore contro all'ultimo minuto?", carte: [
      { lui: "terrore", t: "Non guarda: chiede com'è finita" },
      { lui: "arrabbiato", t: "Protesta fino alla pizzeria" },
      { lui: "indifferente", t: "Pensa già alla pizza" },
      { lui: "pensieroso", t: "Studia dove tirerà il bomber" }
    ] },
    { id: "cal-i23", q: "Che faccia fa {P} quando, dopo dieci minuti, qualcuno dice «In porta a turno: comincia tu»?", carte: [
      { lui: "triste", t: "Ci va, come ogni giovedì da 4 anni" },
      { lui: "esulta", t: "Era il suo sogno: para tutto" },
      { lui: "furbo", t: "Accetta, poi esce palla al piede" },
      { lui: "sorpreso", t: "Non sapeva ci fosse la porta" }
    ] },
    { id: "cal-i24", q: "Che faccia fa {P} quando al campo arrivano in quattro, e gli altri sei «stanno arrivando»?", carte: [
      { lui: "arrabbiato", t: "Scrive nel gruppo, in maiuscolo" },
      { lui: "felice", t: "Due contro due: meglio ancora" },
      { lui: "sonno", t: "Si stende sulla panchina e aspetta" },
      { lui: "pensieroso", t: "Organizza il torneo dei rigori" }
    ] },
    { id: "cal-i25", q: "Che faccia fa {P} quando si rivede nel video mentre sbaglia il gol a porta vuota?", carte: [
      { lui: "imbarazzo", t: "«Era fuorigioco», a porta vuota" },
      { lui: "linguaccia", t: "Lo mette come foto profilo" },
      { lui: "triste", t: "Lo riguarda 40 volte di notte" },
      { lui: "esulta", t: "«Però che dribbling, prima!»" }
    ] }
  ],
  scrivi: [
    { id: "cal-s01", q: "{P} crea il gruppo WhatsApp del calcetto. Che nome gli dà?",
      riserve: ["Ginocchia di Cristallo FC", "Real Fiatone","Atletico Divano"] },
    { id: "cal-s02", q: "{P} sta in porta e prende 15 gol. Cosa scrive nel gruppo a fine partita?",
      riserve: ["Rete rotta: metà erano fuori", "Li ho fatti segnare per amicizia", "Mi ha accecato il faro numero 3"] },
    { id: "cal-s03", q: "L'arbitro espelle {P}. Cosa gli urla mentre esce dal campo?",
      riserve: ["Ci vediamo giovedì, e porto l'avvocato", "Mia nonna fischiava meglio", "Il pallone è mio: me lo riprendo!"] },
    { id: "cal-s04", q: "Nel gruppo del calcetto, da anni, {P} ha un soprannome: «___»",
      riserve: ["Il Muro di Gomma", "Panchina d'Oro", "Quello del rigore del 2019"], voto: "lui" },
    { id: "cal-s05", q: "{P} è in panchina e fa la telecronaca della partita. Cosa urla?",
      riserve: ["Tiro! Palla finita sulla tangenziale", "Clamoroso: qualcuno ha passato la palla!", "Il portiere ha fame, si vede da qui"] },
    { id: "cal-s06", q: "Sulla schiena della maglia di {P}, al posto del nome, c'è scritto: «___»",
      riserve: ["Torno subito", "Non passatemela", "Ex Primavera (forse)"] },
    { id: "cal-s07", q: "Al terzo tempo {P} alza il bicchiere d'acqua e brinda: «A ___»",
      riserve: ["chi stasera non ha dato buca", "quel palo che mi ha salvato", "giovedì prossimo, e alle mie ginocchia"] },
    { id: "cal-s08", q: "Fischio finale. {P}, che ha toccato due palloni in un'ora, commenta: «___»",
      riserve: ["Ho corso tanto, ma senza palla", "Il mio era un lavoro tattico", "Quei due palloni li ho toccati bene"] },
    { id: "cal-s09", q: "A fine stagione {P} fa le premiazioni del gruppo. Che premio inventa?",
      riserve: ["Miglior tuffo senza contatto", "Scarpa d'oro a chi arriva puntuale", "Pallone sgonfio alla carriera"] },
    { id: "cal-s10", q: "Un avversario fa tunnel a {P}. Sul suo borsone, {P} lascia un biglietto: «___»",
      riserve: ["Ti ho perdonato. Forse.", "Giovedì prossimo, tu e io", "Era voluto: ti stavo studiando"] },
    { id: "cal-s11", q: "Il campo è allagato. Che proposta fa {P} per giocare lo stesso?",
      riserve: ["Pallanuoto, porte piccole", "Io porto il canotto, voi i remi", "Calcetto con le pinne, chi ci sta?"] },
    { id: "cal-s12", q: "Il gruppo dà i voti della partita: {P} prende 4. Motivazione: «___»",
      riserve: ["Ha passato la palla solo all'arbitro", "Ottima partita… per l'altra squadra", "Presente col corpo, la testa in pizzeria"] },
    { id: "cal-s13", q: "{P} spiega alla squadra la tattica segreta per stasera. Qual è?",
      riserve: ["Tutti in porta, così non segnano", "Palla a me e pregate", "Facciamoli ridere finché sbagliano"] },
    { id: "cal-s14", q: "Dopo 20 anni di calcetto, il gruppo regala a {P} una targa. Cosa c'è scritto?",
      riserve: ["Mai una buca. Quasi.", "Ha portato il pallone. Una volta.", "Al miglior terzo tempo d'Italia"] },
    { id: "cal-s15", q: "{P} prende una storta alla caviglia (piccola piccola). Cosa scrive nel gruppo?",
      riserve: ["Ragazzi, addio. È stato bello.", "Giovedì ci sono: in porta con la sedia", "Mi serve un sostituto e un cuscino"] },
    { id: "cal-s16", q: "L'avversario dice che {P} fa troppi falli. {P} risponde: «___»",
      riserve: ["Sono carezze col tacchetto", "Io gioco col cuore, e coi gomiti", "Chiedi all'arbitro. Ah, non c'è"] },
    { id: "cal-s17", q: "{P} entra nel calcetto come «nuovo acquisto». Come si presenta al gruppo?",
      riserve: ["Ciao, gioco solo se vinciamo", "Ruolo: mezzala. Cos'è una mezzala?", "Ho fatto due anni di FIFA, livello pro"], voto: "lui" },
    { id: "cal-s18", q: "Prima della partita, {P} fa partire dalla cassa la sua canzone. Come si intitola?",
      riserve: ["Il bomber del giovedì (remix)", "Notti magiche al campo 3", "Passala, passala, passala"] }
  ],
  disegna: [
    { id: "cal-d01", q: "Disegna su {P} la maglia da calcetto dei suoi sogni", su: "ritratto", adesivi: "🦄⭐🔥👑🌈" },
    { id: "cal-d02", q: "Disegna il campo di calcetto se lo progettasse {P}", su: "scena", adesivi: "🛋️🎢🚽🍦🐊" },
    { id: "cal-d03", q: "Disegna su {P} le protezioni complete per non farsi più male", su: "ritratto", adesivi: "⛑️🧽🛡️🧸" },
    { id: "cal-d04", q: "Disegna su {P} la capigliatura da campione per la finale del torneo", su: "ritratto", adesivi: "⚡✨🌟💈" },
    { id: "cal-d05", q: "Disegna la panchina della squadra di {P}: chi c'è seduto?", su: "scena", adesivi: "🐶👵🧸🦆🐢" },
    { id: "cal-d06", q: "Disegna il pallone magico che {P} vorrebbe per non sbagliare mai", su: "bianco", adesivi: "✨🧲🌈🎯🪄" },
    { id: "cal-d07", q: "Disegna su {P} il look da capitano, con la fascia e tutto", su: "ritratto", adesivi: "🎖️👑💪🦁" },
    { id: "cal-d08", q: "Disegna la porta difesa da {P}: cosa ci ha messo davanti?", su: "scena", adesivi: "🧱🛋️🐊🚧📦" },
    { id: "cal-d09", q: "Disegna lo spogliatoio dopo che ci è passato {P}", su: "scena", adesivi: "🧦🧴👟🧻💨" },
    { id: "cal-d10", q: "Disegna su {P} la faccia da battaglia prima del derby del giovedì", su: "ritratto", adesivi: "⚡🔥😤🎨" },
    { id: "cal-d11", q: "Disegna {P} in campo un giovedì di gennaio, sotto la neve", su: "scena", adesivi: "❄️🌨️🧣⛄🧤" },
    { id: "cal-d12", q: "Disegna su {P} il trucco per distrarre chi tira il rigore", su: "ritratto", adesivi: "🤡👀🌈🦄🎈" },
    { id: "cal-d13", q: "Disegna la foto di squadra a fine torneo, con {P} al centro", su: "scena", adesivi: "📸🥇😄🎉" }
  ],
  chi: [
    { id: "cal-c01", q: "Chi di noi passerebbe tutta la partita a chiedere «quanto stiamo?» senza mai saperlo?", titolo: "Il tabellone smarrito" },
    { id: "cal-c02", q: "Chi di noi, dopo un contrasto leggerissimo, resterebbe a terra aspettando una barella che non esiste?", titolo: "Oscar del tuffo" },
    { id: "cal-c03", q: "Chi di noi terrebbe le statistiche di ogni giocatore del calcetto su un foglio Excel, coi grafici?", titolo: "Ct del foglio Excel" },
    { id: "cal-c04", q: "Chi di noi arriverebbe al campo un'ora prima a fare riscaldamento, mentre gli altri sono ancora a cena?", titolo: "Riscaldamento eterno" },
    { id: "cal-c05", q: "Chi di noi porterebbe la borraccia col nome scritto sopra e la difenderebbe da tutti come un trofeo?", titolo: "Guardia della borraccia" },
    { id: "cal-c06", q: "Chi di noi, a fine partita, raccoglierebbe tutti i fratini sudati e li porterebbe a lavare a casa sua?", titolo: "Lavanderia del cuore" },
    { id: "cal-c07", q: "Chi di noi si offrirebbe di stare in porta ogni giovedì, solo per non dover correre?", titolo: "Portiere per pigrizia" },
    { id: "cal-c08", q: "Chi di noi, al terzo tempo, rifarebbe ogni azione della partita con le saliere e le bottiglie?", titolo: "Moviola con le saliere" },
    { id: "cal-c09", q: "Chi di noi riuscirebbe a protestare per un fallo anche in una partita senza arbitro?", titolo: "Ricorso al vento" },
    { id: "cal-c10", q: "Chi di noi arriverebbe con la maglia del suo campione, nome e numero, e poi sbaglierebbe ogni passaggio?", titolo: "Fuoriclasse solo di maglia" },
    { id: "cal-c11", q: "Chi di noi presterebbe le sue scarpe di ricambio all'avversario rimasto in ciabatte?", titolo: "Scarpe del buon cuore" },
    { id: "cal-c12", q: "Chi di noi tirerebbe così forte da mandare il pallone nel campo da tennis accanto, per la terza volta?", titolo: "Cannone fuori mira" },
    { id: "cal-c13", q: "Chi di noi prenoterebbe il campo per il giorno sbagliato e farebbe trovare tutti davanti al cancello chiuso?", titolo: "Regista del disastro" },
    { id: "cal-c14", q: "Chi di noi, a 45 anni, continuerebbe a giocare giurando «ancora una stagione e poi smetto»?", titolo: "L'ultima stagione (bis)" }
  ]
});

/* ---------------------------------------------------------
   🪩 IL SABATO SERA
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "sabato", cod: "sab", nome: "Il sabato sera", emoji: "🪩",
  adesivi: "🪩🕺💃🎧🕶️💄👟🧥🍕🚕📱✨",
  entrata: [
    "Sabato, ore 23. Da tre ore si decide dove andare: ora tocca a {P}.",
    "Fila all'ingresso, cassa che pompa: {P} è pront{o|a} da martedì.",
    "Pizzeria aperta fino alle 4 e pista piena: stasera la serata è di {P}."
  ],
  immagini: [
    { id: "sab-i01", q: "Chi è il buttafuori che decide se {P} entra o no?", carte: [
      { chi: "buttafuori", faccia: "indifferente", t: "Muto. Vuole la parola d'ordine" },
      { chi: "nonna", faccia: "furbo", piu: { occhiali: "sole" }, t: "Fa entrare solo chi saluta bene" },
      { chi: "prof", faccia: "pensieroso", piu: { occhiali: "tondi" }, t: "Fa una domanda di storia" },
      { chi: "buttafuori", f: "d", faccia: "felice", t: "Ride di tutto, poi dice no" }
    ] },
    { id: "sab-i02", q: "Chi è il DJ del locale dove finisce {P} stasera?", carte: [
      { chi: "dj", faccia: "estasi", t: "Mette solo sigle dei cartoni" },
      { chi: "nonno", faccia: "felice", piu: { cappello: "cuffie" }, t: "Solo liscio, ma lo mixa" },
      { chi: "dj", f: "d", faccia: "sonno", t: "Stessa canzone da 40 minuti" },
      { chi: "cugino", faccia: "furbo", t: "Il cugino: ignora ogni richiesta" }
    ] },
    { id: "sab-i03", q: "All'ingresso del locale, chi entra insieme a {P} e si prende tutta la scena?", carte: [
      { chi: "re", faccia: "furbo", t: "Con la corona: inchini per lui" },
      { chi: "calciatore", faccia: "esulta", t: "Un calciatore: tutti a fare foto" },
      { chi: "nonna", faccia: "estasi", piu: { occhiali: "stelle" }, t: "Una nonna che va dritta in pista" },
      { chi: "cowboy", faccia: "felice", t: "Un cowboy: «Si balla il country?»" }
    ] },
    { id: "sab-i04", q: "In fila per entrare, chi si ritrova davanti {P}?", carte: [
      { chi: "prof", f: "d", faccia: "sorpreso", t: "La prof di mate delle medie" },
      { chi: "mamma", faccia: "estasi", piu: { occhiali: "stelle" }, t: "La mamma: stasera esce anche lei" },
      { chi: "capo", faccia: "imbarazzo", t: "Il capo, vestito da anni '80" },
      { chi: "vicino", faccia: "arrabbiato", t: "Il vicino che odia il rumore" }
    ] },
    { id: "sab-i05", q: "Alle 3 c'è una sola pizzeria aperta, ed entra {P}. Chi la manda avanti?", carte: [
      { chi: "cameriere", faccia: "sonno", t: "Dorme in piedi, porta pizze a caso" },
      { chi: "cuoco", faccia: "estasi", t: "Il pizzaiolo che canta l'opera" },
      { chi: "nonna", faccia: "arrabbiato", t: "Nonna: «Questa è l'ora di dormire»" },
      { chi: "mago", faccia: "furbo", piu: { cappello: "mago" }, t: "Fa sparire metà della pizza" }
    ] },
    { id: "sab-i06", q: "In pista, chi si mette a ballare proprio accanto a {P}?", carte: [
      { chi: "ballerino", faccia: "estasi", t: "Fa la spaccata ogni due minuti" },
      { chi: "zio", faccia: "esulta", piu: { cappello: "borsalino" }, t: "Lo zio, che fa solo il twist" },
      { chi: "turista", faccia: "felice", t: "Turista: chiede lezioni di ballo" },
      { chi: "supereroe", faccia: "furbo", t: "Vestito da supereroe, senza motivo" }
    ] },
    { id: "sab-i07", q: "Chi fa da «mamma» al gruppo di {P} per tutta la serata?", carte: [
      { chi: "mamma", faccia: "arrabbiato", t: "Conta tutti ogni dieci minuti" },
      { chi: "infermiere", faccia: "pensieroso", t: "Ha cerotti, acqua e caramelle" },
      { chi: "vigile", faccia: "furbo", piu: { collo: "fischietto" }, t: "Fischia quando uno si perde" },
      { chi: "nonna", faccia: "sonno", t: "A mezzanotte vuole già andare" }
    ] },
    { id: "sab-i08", q: "Fine serata, {P} va a riprendere la giacca. Chi c'è al guardaroba?", carte: [
      { chi: "elegante", faccia: "finto", t: "Ridà la giacca di un altro" },
      { chi: "bidello", faccia: "sonno", t: "Dorme sui cappotti di tutti" },
      { chi: "mago", faccia: "furbo", piu: { cappello: "mago" }, t: "«La giacca? Quale giacca?»" },
      { chi: "nonna", faccia: "felice", t: "Ha stirato pure la giacca" }
    ] },
    { id: "sab-i09", q: "Rientrando alle 4 in punta di piedi, chi aspetta {P} in cucina?", carte: [
      { chi: "mamma", faccia: "arrabbiato", piu: { mano: "tazza" }, t: "La mamma, con l'orologio in mano" },
      { chi: "papa", faccia: "sonno", t: "Papà, addormentato sulla sedia" },
      { chi: "nonna", faccia: "felice", t: "La nonna: «Ti faccio due uova?»" },
      { chi: "cugino", faccia: "furbo", t: "Fratello: «Taccio per una pizza»" }
    ] },
    { id: "sab-i10", q: "Sabato, ore 22: il gruppo non sa dove andare. Cosa propone {P}?", carte: [
      { e: "🎳🌭", t: "Bowling, come nel 2015" },
      { e: "🛋️🍿", t: "Tutti a casa sua, film e divano" },
      { e: "🪩🚗", t: "Una discoteca a due ore di strada" },
      { e: "🤷⏳", t: "Niente: «Per me è uguale»" }
    ] },
    { id: "sab-i11", q: "Davanti allo specchio, ore 21. Quanto ci mette {P} a prepararsi?", carte: [
      { e: "⏱️🚀", t: "4 minuti, compresa la doccia" },
      { e: "👔👕👗", t: "Due ore: cambia vestito sei volte" },
      { e: "📞👀", t: "Videochiama tutti per un parere" },
      { e: "🧥🔁", t: "Esce con quello che aveva ieri" }
    ] },
    { id: "sab-i12", q: "Appena entrati nel locale, cosa fa {P} per prima cosa?", carte: [
      { e: "🕺💨", t: "Dritto in pista, con la giacca" },
      { e: "🔋🔌", t: "Cerca una presa per il telefono" },
      { e: "🚻⏳", t: "La fila del bagno: 40 minuti" },
      { e: "🛋️😌", t: "Trova un divanetto e non si muove" }
    ] },
    { id: "sab-i13", q: "Il buttafuori guarda {P} e dice: «Con quelle scarpe no». Cosa fa {P}?", carte: [
      { e: "👟🔄", t: "Scambia le scarpe con un amico" },
      { e: "🗣️📜", t: "Discute per 20 minuti di moda" },
      { e: "🍕🏃", t: "Va in pizzeria, felice" },
      { e: "🏠👞", t: "Torna a casa a cambiarsi: un'ora" }
    ] },
    { id: "sab-i14", q: "Parte il tormentone dell'estate. Cosa fa {P} in pista?", carte: [
      { e: "🕺🔥", t: "Sa tutta la coreografia" },
      { e: "🙈📱", t: "Si nasconde dietro il telefono" },
      { e: "🎤😱", t: "Canta, ma le parole sono inventate" },
      { e: "🪑😒", t: "Rimane al tavolo: «Che lagna»" }
    ] },
    { id: "sab-i15", q: "Pizzeria alle 3: il gruppo è troppo stanco per decidere. Cosa fa {P}?", carte: [
      { e: "🍕✋", t: "Ordina per tutti, senza chiedere" },
      { e: "📋🗣️", t: "Legge il menù ad alta voce, tutto" },
      { e: "😴🍕", t: "Si addormenta col trancio in mano" },
      { e: "☝️🍕", t: "Fa la conta, come all'asilo" }
    ] },
    { id: "sab-i16", q: "Al ritorno guida {P}. Com'è il viaggio verso casa?", carte: [
      { e: "🎶🔊", t: "Karaoke a tutto volume" },
      { e: "🐢🛣️", t: "A 40 all'ora, «per prudenza»" },
      { e: "📍🌀", t: "Sbaglia strada tre volte" },
      { e: "🚕🗺️", t: "Accompagna tutti: arriva alle 6" }
    ] },
    { id: "sab-i17", q: "Domenica mattina, cosa si trova nel telefono di {P}?", carte: [
      { e: "🤳🤳🤳", t: "312 selfie, tutti uguali" },
      { e: "🎥🪩", t: "Un video di 10 minuti: solo luci" },
      { e: "📞👵", t: "Una chiamata di un'ora alla nonna" },
      { e: "🗒️✍️", t: "Nota: «Bella serata, rifarla»" }
    ] },
    { id: "sab-i18", q: "Si torna a casa. Cosa ha perso {P} durante la serata?", carte: [
      { e: "🔑❓", t: "Le chiavi di casa (erano in tasca)" },
      { e: "🧥👻", t: "La giacca, ritrovata a dicembre" },
      { e: "🧣❓", t: "La sciarpa, per la terza volta" },
      { e: "👟❓", t: "Una scarpa. Come, non si sa" }
    ] },
    { id: "sab-i19", q: "Il fotografo del locale sta per scattare. Che posa fa {P}?", carte: [
      { e: "✌️😎", t: "Il segno di pace, sempre lo stesso" },
      { e: "😗📸", t: "La boccuccia da influencer" },
      { e: "🙈✋", t: "Mano davanti: «Niente foto!»" },
      { e: "🤸✨", t: "Salta, e cade addosso al fotografo" }
    ] },
    { id: "sab-i20", q: "Sono le 6 del mattino. Dove si trova {P}?", carte: [
      { e: "🌅🏖️", t: "Al mare, a vedere l'alba" },
      { e: "🛏️😴", t: "A letto dall'1 e mezza: che pace" },
      { e: "🚌❓", t: "Sul primo bus, capolinea sbagliato" },
      { e: "🪩🧹", t: "Ancora in pista: aiuta a pulire" }
    ] },
    { id: "sab-i21", q: "Che faccia fa {P} quando, in pista, si prende il quinto pestone dallo stesso ballerino?", carte: [
      { lui: "arrabbiato", t: "Restituisce il pestone, a tempo" },
      { lui: "finto", t: "«Nessun problema!» (è la sesta)" },
      { lui: "terrore", t: "Balla ormai in punta di piedi" },
      { lui: "esulta", t: "Lo trasforma in un passo di ballo" }
    ] },
    { id: "sab-i22", q: "Che faccia fa {P} quando il DJ mette la sua canzone preferita… in un remix di 12 minuti?", carte: [
      { lui: "estasi", t: "Balla tutti i 12 minuti" },
      { lui: "disgusto", t: "Va a chiedere l'originale al DJ" },
      { lui: "sonno", t: "Al minuto 8 si siede" },
      { lui: "sorpreso", t: "Non la riconosce, balla lo stesso" }
    ] },
    { id: "sab-i23", q: "Che faccia fa {P} quando la mattina dopo vede le foto della serata pubblicate dagli amici?", carte: [
      { lui: "imbarazzo", t: "Occhi chiusi in tutte e 40" },
      { lui: "esulta", t: "Le ripubblica tutte, coi cuori" },
      { lui: "arrabbiato", t: "Chiede di toglierle, una per una" },
      { lui: "innamorato", t: "Si piace troppo: foto profilo" }
    ] },
    { id: "sab-i24", q: "Che faccia fa {P} quando, all'una di notte, gli amici dicono «Dai, ora andiamo a ballare»?", carte: [
      { lui: "sonno", t: "Era già in pigiama, con la testa" },
      { lui: "esulta", t: "Finalmente: aspettava dalle 20" },
      { lui: "finto", t: "«Certo!» E chiama un taxi per casa" },
      { lui: "pensieroso", t: "Calcola le ore di sonno rimaste" }
    ] },
    { id: "sab-i25", q: "Che faccia fa {P} quando arrivano al locale scelto per la serata e trovano la serranda abbassata?", carte: [
      { lui: "imbarazzo", t: "«Su internet era aperto…»" },
      { lui: "furbo", t: "Ha già un piano B, e un piano C" },
      { lui: "linguaccia", t: "«Pizza e passeggiata, dai!»" },
      { lui: "triste", t: "Si siede sul marciapiede in giacca" }
    ] }
  ],
  scrivi: [
    { id: "sab-s01", q: "Il buttafuori chiede: «Siete in lista?». {P} risponde: «___»",
      riserve: ["Certo, sotto la lettera P", "Nella lista della spesa, sì", "Mio cugino è il DJ… forse"] },
    { id: "sab-s02", q: "Alle 4, nello specchio del bagno del locale, {P} si guarda e si dice: «___»",
      riserve: ["Sei una leggenda. Ora a letto", "Domani non esco. Lo giuro, come sempre", "Chi ti ha pettinato? Ah, il vento"] },
    { id: "sab-s03", q: "Il biglietto che {P} lascia sul frigo prima di uscire dice: «___»",
      riserve: ["Torno presto. Presto tipo domani", "Non aspettatemi, ma lasciate la luce", "Se chiama qualcuno, sto studiando"] },
    { id: "sab-s04", q: "{P} chiede una canzone al DJ. Cosa scrive sul bigliettino?",
      riserve: ["Quella che fa tu-tu-tu, quella lì", "Una lenta, mi devo riposare", "La sigla dei Puffi, per favore"] },
    { id: "sab-s05", q: "Il DJ chiede al microfono: «Chi festeggia stasera?». {P} alza la mano e urla: «___»",
      riserve: ["Io! Il mio onomastico, credo", "Festeggio che ho trovato parcheggio", "Mio cugino, che non è venuto"] },
    { id: "sab-s06", q: "Se {P} aprisse una discoteca tutta sua, come la chiamerebbe?",
      riserve: ["Il Divanetto", "Mezzanotte e Mezza Pizza", "Da Me (Entra Chi Saluta)"], voto: "lui" },
    { id: "sab-s07", q: "In pista, {P} inventa un passo di ballo nuovo. Come si chiama?",
      riserve: ["Il Lavapiatti", "La Gallina Elettrica", "Il Cerco le Chiavi"] },
    { id: "sab-s08", q: "Al bancone {P} ordina un'aranciata come se fosse la cosa più elegante del mondo: «___»",
      riserve: ["Aranciata. Agitata, non mescolata", "Con ghiaccio, ombrellino e dignità", "La solita, quella col limone"] },
    { id: "sab-s09", q: "{P} è in fila da un'ora davanti al locale. Cosa scrive nel gruppo?",
      riserve: ["Ho fatto amicizia con tutta la fila", "Qui fuori è più bello che dentro", "Mi hanno superato due nonne"] },
    { id: "sab-s10", q: "Il locale regala a {P} la tessera VIP. Cosa c'è scritto sotto il nome?",
      riserve: ["Vietato fare il trenino", "Ingresso libero, uscita a fatica", "Membro onorario del divanetto"] },
    { id: "sab-s11", q: "Musica altissima: {P} urla una cosa all'orecchio di un amico. L'amico capisce: «___»",
      riserve: ["Hai un gatto in tasca?", "Tuo zio fa il pilota?", "Domani andiamo a fare la spesa?"] },
    { id: "sab-s12", q: "All'uscita, {P} prova a convincere il tassista a caricare sei persone: «___»",
      riserve: ["Le offro la pizza delle 3", "Due di noi sono piccoli, giuro", "Facciamo due viaggi: il secondo gratis"] },
    { id: "sab-s13", q: "Domenica, ore 14. {P} si sveglia e scrive nel gruppo. Cosa?",
      riserve: ["Qualcuno ha visto la mia voce?", "Rifacciamo stasera?", "Perché ho in tasca un menù?"] },
    { id: "sab-s14", q: "{P} non balla mai. Qual è la sua scusa di stasera?",
      riserve: ["Sto conservando l'energia per la pizza", "Io ballo dentro, non si vede", "Ho le scarpe nuove, si rovinano"], voto: "lui" },
    { id: "sab-s15", q: "{P} organizza la serata. Il messaggio d'invito dice: «___»",
      riserve: ["Dress code: comodo, si cammina tanto", "Ritrovo alle 22, partenza alle 23:40", "Chi dice «vediamo» resta a casa"] },
    { id: "sab-s16", q: "Per farsi trovare in pista, {P} alza un cartello. Cosa c'è scritto?",
      riserve: ["Sì, sono io che ballo così", "Taxi alle 3: chi c'è firmi qui","Seguite il profumo di pizza"] },
    { id: "sab-s17", q: "{P} entra in pista e annuncia al gruppo: «Ragazzi, ___»",
      riserve: ["state indietro, mi serve spazio", "fate cerchio, sto per fare la mossa", "qualcuno mi tiene la giacca?"] },
    { id: "sab-s18", q: "La mattina dopo, {P} trova in tasca un biglietto scritto da sé alle 3: «___»",
      riserve: ["Ricordati: mai più il tormentone", "Hai promesso al DJ di tornare", "La giacca non è tua. Restituiscila"] }
  ],
  disegna: [
    { id: "sab-d01", q: "Disegna su {P} il look per uscire il sabato sera", su: "ritratto", adesivi: "🎩👑💎🌟🧣" },
    { id: "sab-d02", q: "Disegna la discoteca dei sogni di {P}", su: "scena", adesivi: "🎢🛋️🐬🍦🎠" },
    { id: "sab-d03", q: "Disegna cosa si porta {P} in tasca e in borsa per il sabato sera", su: "bianco", adesivi: "🔋🍬🧴🩹🔑🍫" },
    { id: "sab-d04", q: "Disegna su {P} quello che resta del look alle 4 di notte", su: "ritratto", adesivi: "🧦🌀💤🍕🩹" },
    { id: "sab-d05", q: "Disegna la pizza «{P}» del menù notturno, coi suoi ingredienti", su: "bianco", adesivi: "🍍🍫🌭🥚🍓🍟" },
    { id: "sab-d06", q: "Disegna il divanetto conquistato da {P} e arredato per tutta la sera", su: "scena", adesivi: "🛋️🍕🧸🔌🪴" },
    { id: "sab-d07", q: "Disegna su {P} il look da buttafuori, ora che decide chi entra", su: "ritratto", adesivi: "🕶️📋🎧🦺" },
    { id: "sab-d08", q: "Disegna su {P} i timbri e i braccialetti di tutti i locali della serata", su: "ritratto", adesivi: "🎟️⭐🌙🔖💜" },
    { id: "sab-d09", q: "Disegna il tappeto rosso che {P} si merita all'ingresso", su: "scena", adesivi: "🌹📸👑🎺🎈" },
    { id: "sab-d10", q: "Disegna su {P} la giacca perfetta per non avere mai freddo in fila", su: "ritratto", adesivi: "🧣🧤🔥🧸☕" },
    { id: "sab-d11", q: "Disegna la console del DJ se il DJ fosse {P}", su: "scena", adesivi: "🎹🔊🦆🍕🎺" },
    { id: "sab-d12", q: "Disegna su {P} il trucco fluo per la serata a tema neon", su: "ritratto", adesivi: "⚡🌈💚💖⭐" },
    { id: "sab-d13", q: "Disegna la strada del ritorno a casa di {P} alle 4 di notte", su: "scena", adesivi: "🌙🐈🏠🦉💡" }
  ],
  chi: [
    { id: "sab-c01", q: "Chi di noi passerebbe tutto il sabato sera a dire «andiamo da un'altra parte», senza mai andarci?", titolo: "Navigatore senza meta" },
    { id: "sab-c02", q: "Chi di noi farebbe amicizia col buttafuori e uscirebbe dal locale col suo numero di telefono?", titolo: "Spalla del buttafuori" },
    { id: "sab-c03", q: "Chi di noi si scatenerebbe in mezzo alla pista alle 23:30, quando non c'è ancora nessuno?", titolo: "Apripista ufficiale" },
    { id: "sab-c04", q: "Chi di noi passerebbe mezza serata al guardaroba a chiacchierare col signore dei cappotti?", titolo: "Habitué del guardaroba" },
    { id: "sab-c05", q: "Chi di noi si farebbe una foto col DJ ogni volta, anche senza sapere come si chiama?", titolo: "Fan di DJ chiunque" },
    { id: "sab-c06", q: "Chi di noi si offrirebbe sempre per guidare e riaccompagnerebbe tutti, anche chi abita dall'altra parte?", titolo: "Taxi del cuore" },
    { id: "sab-c07", q: "Chi di noi riuscirebbe ad addormentarsi su un divanetto con la musica a tutto volume?", titolo: "Ninna nanna da cassa" },
    { id: "sab-c08", q: "Chi di noi saprebbe a memoria tutte le coreografie dei balli di gruppo, anche quelle del 2006?", titolo: "Archivio dei balli" },
    { id: "sab-c09", q: "Chi di noi arriverebbe al locale in abito da sera e scoprirebbe che era la serata in maschera?", titolo: "Elegante al carnevale" },
    { id: "sab-c10", q: "Chi di noi, alla pizzeria delle 3, finirebbe in cucina a sfornare pizze insieme al pizzaiolo?", titolo: "Laurea in pizza ad honorem" },
    { id: "sab-c11", q: "Chi di noi, rientrando alle 4 in punta di piedi, farebbe cadere l'ombrelliera svegliando tutto il palazzo?", titolo: "Ninja dell'ombrelliera" },
    { id: "sab-c12", q: "Chi di noi farebbe un'ora di fila e, a un passo dalla porta, deciderebbe di andare a mangiare?", titolo: "Ripensamento all'ingresso" },
    { id: "sab-c13", q: "Chi di noi presterebbe la giacca a chi ha freddo in fila e passerebbe la serata in maglietta?", titolo: "Giacca della bontà" },
    { id: "sab-c14", q: "Chi di noi perderebbe il gruppo dentro il locale alle 23 e lo ritroverebbe solo alla pizzeria delle 3?", titolo: "Bussola persa in pista" }
  ]
});

/* ---------------------------------------------------------
   💼 IN UFFICIO
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "ufficio", cod: "uff", nome: "In ufficio", emoji: "💼",
  adesivi: "💻🖨️📎☕🪴📁🗂️🖊️📞🍩🕰️🪑",
  entrata: [
    "Lunedì, 9:02. {P} timbra il badge e sogna già il venerdì.",
    "Riunione delle 10, spostata alle 12. {P} è in sala dalle 9.",
    "La stampante lampeggia, la macchinetta borbotta: è arrivat{o|a} {P}."
  ],
  immagini: [
    { id: "uff-i01", q: "Chi è il capo di {P}?", carte: [
      { chi: "capo", faccia: "furbo", piu: { mano: "tazza" }, t: "Riunione alle 18:55 di venerdì" },
      { chi: "capo", f: "d", faccia: "estasi", t: "Usa «sinergia» in ogni frase" },
      { chi: "nonno", faccia: "sonno", piu: { cappello: "coppola" }, t: "Il fondatore: c'è dal '68" },
      { chi: "influencer", faccia: "felice", piu: { mano: "telefono" }, t: "Fa le riunioni camminando" }
    ] },
    { id: "uff-i02", q: "Chi è il collega di scrivania di {P}?", carte: [
      { chi: "impiegato", faccia: "pensieroso", t: "Sgranocchia mele tutto il giorno" },
      { chi: "impiegato", f: "d", faccia: "estasi", piu: { mano: "telefono" }, t: "Ferie in foto: 600, una per una" },
      { chi: "cantante", faccia: "esulta", t: "Canticchia in cuffia, ad alta voce" },
      { chi: "vicino", faccia: "indifferente", piu: { animale: "gatto" }, t: "Porta il gatto «solo per oggi»" }
    ] },
    { id: "uff-i03", q: "Alla macchinetta del caffè, chi intercetta {P} ogni mattina?", carte: [
      { chi: "impiegato", faccia: "estasi", t: "Racconta tutta la partita di ieri" },
      { chi: "zia", faccia: "furbo", t: "Sa tutti i pettegolezzi del piano" },
      { chi: "bidello", faccia: "sonno", t: "Sbadiglia, e lo fai anche tu" },
      { chi: "prof", faccia: "pensieroso", piu: { occhiali: "tondi" }, t: "Spiega com'è fatto il caffè vero" }
    ] },
    { id: "uff-i04", q: "Alla cena aziendale, chi trattiene {P} a chiacchierare fino all'una?", carte: [
      { chi: "capo", faccia: "felice", t: "Il capo: parla solo di lavoro" },
      { chi: "elegante", faccia: "finto", t: "Uno mai visto: «Io? Terzo piano»" },
      { chi: "clown", faccia: "esulta", t: "Fa giochi coi tovaglioli, per ore" },
      { chi: "nonna", faccia: "felice", t: "La nonna di un collega, a sorpresa" }
    ] },
    { id: "uff-i05", q: "La stampante si inceppa col documento urgente di {P}. Chi arriva a ripararla?", carte: [
      { chi: "meccanico", faccia: "pensieroso", t: "Smonta tutto, avanza un pezzo" },
      { chi: "mago", faccia: "furbo", piu: { cappello: "mago" }, t: "Spegne e riaccende. Applausi" },
      { chi: "impiegato", faccia: "arrabbiato", t: "Le dà una botta sul fianco" },
      { chi: "nonno", faccia: "sorpreso", t: "Il pensionato: «Nel '98 andava»" }
    ] },
    { id: "uff-i06", q: "Videochiamata con tutta l'azienda: chi compare alle spalle di {P}?", carte: [
      { chi: "mamma", faccia: "felice", piu: { mano: "tazza" }, t: "La mamma: «Vuoi il caffè, amore?»" },
      { chi: "bimbo", faccia: "linguaccia", t: "Il fratellino che fa le boccacce" },
      { chi: "vicino", faccia: "sorpreso", t: "Il vicino che entra senza bussare" },
      { chi: "corriere", faccia: "felice", t: "Il corriere, già in salotto" }
    ] },
    { id: "uff-i07", q: "Il capo affida a {P} il nuovo stagista. Chi è?", carte: [
      { chi: "bimbo", faccia: "furbo", t: "Spiega Excel a tutti, pure al capo" },
      { chi: "nonno", faccia: "felice", t: "Ha 70 anni: «Ricomincio da qui»" },
      { chi: "influencer", faccia: "innamorato", piu: { mano: "telefono" }, t: "Fa le storie da ogni scrivania" },
      { chi: "vichingo", faccia: "esulta", t: "Entusiasta: urla «Sì!» a tutto" }
    ] },
    { id: "uff-i08", q: "Chi organizza il Babbo Natale segreto dell'ufficio di {P}?", carte: [
      { chi: "babbo", faccia: "esulta", t: "Vestito da Babbo da novembre" },
      { chi: "capo", faccia: "furbo", t: "Il capo: vale solo la cancelleria" },
      { chi: "impiegato", f: "d", faccia: "pensieroso", piu: { mano: "libro" }, t: "Ha scritto 4 pagine di regole" },
      { chi: "animatore", faccia: "estasi", piu: { collo: "fischietto" }, t: "Giochi di gruppo, obbligatori" }
    ] },
    { id: "uff-i09", q: "{P} deve accogliere in ufficio il cliente più importante dell'anno. Chi è?", carte: [
      { chi: "re", faccia: "indifferente", t: "Vuole il caffè, ma «non quello»" },
      { chi: "cowboy", faccia: "furbo", t: "Stivali sul tavolo delle riunioni" },
      { chi: "turista", faccia: "felice", t: "Ha sbagliato ufficio, ma resta" },
      { chi: "elegante", faccia: "sonno", t: "Dorme durante la presentazione" }
    ] },
    { id: "uff-i10", q: "{P} scalda il pranzo nel microonde dell'ufficio. Cosa c'è nella vaschetta?", carte: [
      { e: "🐟🔥", t: "Pesce: evacuato tutto il piano" },
      { e: "🍝🍝", t: "Avanzi della domenica, per 4" },
      { e: "🥗🍪", t: "Insalata… e i biscotti del collega" },
      { e: "🍲👵", t: "La parmigiana della nonna: 2 chili" }
    ] },
    { id: "uff-i11", q: "{P} preme per sbaglio «Rispondi a tutti»: la mail arriva a 400 colleghi. Cosa c'era scritto?", carte: [
      { e: "🛒📝", t: "La lista della spesa: «cipolle»" },
      { e: "😴💬", t: "«Quando finisce sta riunione?»" },
      { e: "❤️😘", t: "«Ciao amore, stasera pizza?»" },
      { e: "🐱📸", t: "Venti foto del suo gatto" }
    ] },
    { id: "uff-i12", q: "Riunione da due ore, nessuno ascolta. Cosa sta facendo {P} di nascosto?", carte: [
      { e: "📱👟", t: "Cerca scarpe online da un'ora" },
      { e: "✏️🐱", t: "Disegna gatti sul blocco note" },
      { e: "🗺️✈️", t: "Pianifica le ferie del 2031" },
      { e: "📝⭐", t: "Prende appunti. Davvero. Tutti" }
    ] },
    { id: "uff-i13", q: "Venerdì, ore 17:59. Cosa sta facendo {P}?", carte: [
      { e: "🏃💨", t: "È già in ascensore da 2 minuti" },
      { e: "💻🔥", t: "Apre ora la mail più urgente" },
      { e: "🧥⏳", t: "Giacca addosso dalle 17:30" },
      { e: "👋💬", t: "Giro di saluti: dura 40 minuti" }
    ] },
    { id: "uff-i14", q: "{P} lavora da casa. Cosa indossa durante la videochiamata?", carte: [
      { e: "👔🩳", t: "Camicia sopra, pigiama sotto" },
      { e: "🛁🧖", t: "Accappatoio e asciugamano in testa" },
      { e: "🎩👞", t: "Abito da sera, scarpe comprese" },
      { e: "📷🚫", t: "Niente: «Ho la telecamera rotta»" }
    ] },
    { id: "uff-i15", q: "{P} si prende «cinque minuti» di pausa. Dove si trova mezz'ora dopo?", carte: [
      { e: "🌳🚶", t: "Fa il giro dell'isolato, due volte" },
      { e: "🐦🌤️", t: "Sul terrazzo a guardare i piccioni" },
      { e: "🚽📱", t: "In bagno, a finire una serie" },
      { e: "🛋️😴", t: "Sul divanetto della reception" }
    ] },
    { id: "uff-i16", q: "Alla cena aziendale parte il karaoke. Cosa fa {P}?", carte: [
      { e: "🎤🔥", t: "Prende il microfono e non lo molla" },
      { e: "🙈🪴", t: "Si nasconde dietro una pianta" },
      { e: "🎶👔", t: "Duetto d'amore col capo" },
      { e: "📱🎥", t: "Filma tutti per il gruppo" }
    ] },
    { id: "uff-i17", q: "L'aria condizionata dell'ufficio è a 18 gradi, a luglio. Cosa fa {P}?", carte: [
      { e: "🧣🧤", t: "Sciarpa e guanti, a luglio" },
      { e: "🕵️🌡️", t: "Alza la temperatura di nascosto" },
      { e: "📜✍️", t: "Raccolta firme per spegnerla" },
      { e: "👕😎", t: "Sta benissimo, in maniche corte" }
    ] },
    { id: "uff-i18", q: "Il capo chiede a tutto il piano: «Chi ha preso la mia tazza?». Cosa fa {P}?", carte: [
      { e: "😇☕", t: "Ci sta bevendo, con calma" },
      { e: "🕵️🔍", t: "Interroga tutti i colleghi" },
      { e: "🎁☕", t: "Ne regala una a forma di gatto" },
      { e: "🤐👀", t: "Sa chi è stato, e non dice niente" }
    ] },
    { id: "uff-i19", q: "Il badge di {P} non funziona all'ingresso. Cosa fa?", carte: [
      { e: "🔁😤", t: "Lo ripassa 40 volte, più forte" },
      { e: "🤝🚪", t: "Entra attaccato a un collega" },
      { e: "☕🏠", t: "Torna a casa: «Lavoro da lì»" },
      { e: "🪟🧗", t: "Entra dalla finestra, piano terra" }
    ] },
    { id: "uff-i20", q: "Il capo annuncia: «Da lunedì niente posti fissi, ognuno si siede dove trova». Cosa fa {P}?", carte: [
      { e: "🌅🏃", t: "Arriva alle 7 per il posto buono" },
      { e: "🧳🪴", t: "Gira col trolley e la sua pianta" },
      { e: "📝🪑", t: "Post-it «occupato» su ogni sedia" },
      { e: "🏠💻", t: "Da quel giorno lavora da casa" }
    ] },
    { id: "uff-i21", q: "Che faccia fa {P} quando la riunione «da dieci minuti» arriva alla seconda ora?", carte: [
      { lui: "disgusto", t: "Guarda l'orologio ogni 40 secondi" },
      { lui: "finto", t: "Annuisce a tutto, sente niente" },
      { lui: "esulta", t: "Adora le riunioni: fa domande" },
      { lui: "triste", t: "Disegna un'evasione sul taccuino" }
    ] },
    { id: "uff-i22", q: "Che faccia fa {P} quando si accorge di avere il microfono acceso da tutta la riunione?", carte: [
      { lui: "terrore", t: "Ricorda: ha cantato due canzoni" },
      { lui: "imbarazzo", t: "Ha parlato col gatto per un'ora" },
      { lui: "indifferente", t: "Tanto non ha detto niente di male" },
      { lui: "furbo", t: "Era voluto: ora sanno la verità" }
    ] },
    { id: "uff-i23", q: "Che faccia fa {P} quando apre il frigo dell'ufficio e il suo yogurt non c'è più?", carte: [
      { lui: "arrabbiato", t: "Lascia un biglietto da 2 pagine" },
      { lui: "triste", t: "Lo piange in silenzio fino alle 18" },
      { lui: "furbo", t: "Mangia lo yogurt di un altro" },
      { lui: "felice", t: "Era scaduto: c'è giustizia" }
    ] },
    { id: "uff-i24", q: "Che faccia fa {P} quando arriva la mail «Venerdì cena aziendale, presenza obbligatoria»?", carte: [
      { lui: "estasi", t: "Ha già scelto il vestito" },
      { lui: "disgusto", t: "Ha un impegno improvviso: la nonna" },
      { lui: "finto", t: "«Bellissimo!» Già cerca scuse" },
      { lui: "pensieroso", t: "Studia il posto lontano dal capo" }
    ] },
    { id: "uff-i25", q: "Che faccia fa {P} quando trova il collega nuovo seduto sulla sua sedia, quella che gira bene?", carte: [
      { lui: "arrabbiato", t: "Lo fissa finché non si alza" },
      { lui: "finto", t: "«Tranquillo! Tienila pure»" },
      { lui: "triste", t: "Lavora in piedi, in silenzio" },
      { lui: "furbo", t: "Gli abbassa la sedia al minimo" }
    ] }
  ],
  scrivi: [
    { id: "uff-s01", q: "La firma automatica in fondo alle mail di {P} dice: «___»",
      riserve: ["Inviato dal mio divano", "Risposta entro 3-5 giorni lavorativi", "Saluti, abbracci e scadenze"] },
    { id: "uff-s02", q: "Lo stato di {P} nella chat dell'ufficio, tutto il pomeriggio: «___»",
      riserve: ["Torno subito (forse domani)", "In pausa caffè dal 2019", "In riunione (con la macchinetta)"] },
    { id: "uff-s03", q: "Il post-it che {P} attacca sul monitor dice: «___»",
      riserve: ["Respira. È solo lunedì.", "Non toccare, anche se sei il capo", "Non è pigrizia: è risparmio energetico"] },
    { id: "uff-s04", q: "{P} entra in ritardo alla riunione. Qual è la scusa?",
      riserve: ["L'ascensore mi ha portato al -3", "Ero qui, ma nella sala sbagliata", "Stavo finendo il caffè, era bollente"] },
    { id: "uff-s05", q: "Il capo chiede: «Cosa hai fatto questa settimana?». {P} risponde: «___»",
      riserve: ["Ho pensato molto, e bene", "Ho dato acqua alle piante del piano", "Ho aperto 4 mail e risposto a una"] },
    { id: "uff-s06", q: "Alla cena aziendale, {P} si alza per un discorso: «Cari colleghi, ___»",
      riserve: ["non so i vostri nomi, ma vi voglio bene", "stasera parliamo di tutto tranne Excel", "chi ha preso la mia penna blu?"] },
    { id: "uff-s07", q: "{P} va in ferie e lascia la risposta automatica. Cosa dice?",
      riserve: ["Sono in vacanza. Il capo lo sa. Forse.", "Torno il 3. Non scrivetemi il 2.", "Se è urgente, chiedete alla pianta"] },
    { id: "uff-s08", q: "{P} rinomina la sala riunioni. Sulla porta ora c'è scritto: «___»",
      riserve: ["Sala Pisolino", "Qui si decide di decidere", "Stanza 404: idee non trovate"] },
    { id: "uff-s09", q: "Alla macchinetta, {P} confida al collega: «Ti devo dire una cosa: ___»",
      riserve: ["la pianta del capo è finta", "sono io che rubo le penne blu", "il caffè del terzo piano è migliore"] },
    { id: "uff-s10", q: "{P} presenta un progetto al capo. Il titolo della prima pagina è: «___»",
      riserve: ["Come lavorare meno, ma di più", "Un'amaca in ogni ufficio", "Il caffè: perché ci serve gratis"] },
    { id: "uff-s11", q: "{P} lavora da casa. Cosa c'è scritto sul foglio attaccato alla porta della camera?",
      riserve: ["In riunione: entrate solo con il caffè", "Silenzio, sto facendo finta di lavorare", "Chi apre questa porta pulisce il bagno"] },
    { id: "uff-s12", q: "{P} organizza il pranzo di Natale dell'ufficio. Nell'invito, alla voce «Abbigliamento»: «___»",
      riserve: ["Maglione con le renne, obbligatorio", "Giacca sopra, pigiama sotto", "Come vi pare, tanto c'è il panettone"], voto: "lui" },
    { id: "uff-s13", q: "{P} risponde al telefono dell'ufficio con una frase inventata. Quale?",
      riserve: ["Pizzeria Bella Napoli, prego?", "Ufficio reclami, reclamate pure", "Pronto? Se è il capo, non ci sono"] },
    { id: "uff-s14", q: "Nella mail di benvenuto al collega nuovo, {P} gli dà un consiglio: «___»",
      riserve: ["Mai sederti sulla sedia blu", "La macchinetta va presa a sinistra", "Se il capo ride, ridi. Sempre."] },
    { id: "uff-s15", q: "Alla riunione il capo chiede a tutti una curiosità su di sé. Quella di {P}: «___»",
      riserve: ["Ho un'allergia alle riunioni", "So imitare il capo. Volete sentire?", "Ho chiamato la stampante Carla"] },
    { id: "uff-s16", q: "Il capo inventa il «venerdì delle idee». La prima idea di {P} è: «___»",
      riserve: ["Riunioni solo in piedi, sul tavolo", "Si lavora dal bar qui sotto", "Pranzo di due ore: si pensa meglio"], voto: "lui" },
    { id: "uff-s17", q: "{P} si appisola in riunione e si sveglia di colpo. Cosa dice?",
      riserve: ["Sono d'accordo con tutto!", "Ottima domanda, ci risponderò per mail", "Scusate, pensavo fosse sabato"] },
    { id: "uff-s18", q: "Sul calendario condiviso, {P} blocca ogni giorno dalle 14 alle 15 con la scritta: «___»",
      riserve: ["Riflessione strategica (pisolino)", "Pranzo lungo, ma strategico", "Non ci sono, ma faccio finta"] }
  ],
  disegna: [
    { id: "uff-d01", q: "Disegna la scrivania di {P} difesa dai colleghi che rubano le penne", su: "scena", adesivi: "🖊️🔒🪤📎🚧" },
    { id: "uff-d02", q: "Disegna su {P} il look del primo giorno di lavoro, per fare colpo", su: "ritratto", adesivi: "🎀🌟👑💼🌹" },
    { id: "uff-d03", q: "Disegna come {P} arreda l'ufficio quando il capo è in ferie", su: "scena", adesivi: "🏓🛋️🍦🐶🎈" },
    { id: "uff-d04", q: "Disegna su {P} il trucco per sembrare svegli{o|a} alle 8 di lunedì", su: "ritratto", adesivi: "👀⚡🕶️🌞" },
    { id: "uff-d05", q: "Disegna cosa esce dalla stampante quando {P} preme «stampa»", su: "scena", adesivi: "📄🐦🌈🍝🎉" },
    { id: "uff-d06", q: "Disegna su {P} il costume per la gara di Halloween dell'ufficio", su: "ritratto", adesivi: "🎃🦇🕸️👻" },
    { id: "uff-d07", q: "Disegna la sala riunioni dopo quattro ore di riunione con {P}", su: "scena", adesivi: "🍕😴📊🧻💤" },
    { id: "uff-d08", q: "Disegna lo sfondo finto che {P} usa nelle videochiamate da casa", su: "bianco", adesivi: "🏝️🏰🚀🐬🌋" },
    { id: "uff-d09", q: "Disegna la lavagna della riunione dopo la presentazione di {P}", su: "scena", adesivi: "📈📉🖍️🤯" },
    { id: "uff-d10", q: "Disegna la macchinetta del caffè come la vorrebbe {P}", su: "scena", adesivi: "🍫🍩🌈🎵🥐" },
    { id: "uff-d11", q: "Disegna su {P} il travestimento da capo per la recita di fine anno", su: "ritratto", adesivi: "👔☕📊🥸" },
    { id: "uff-d12", q: "Disegna la sedia girevole truccata da {P} per la gara in corridoio", su: "scena", adesivi: "🚀🔥🏁💨" },
    { id: "uff-d13", q: "Disegna su {P} tutto quello che serve per non farsi disturbare", su: "ritratto", adesivi: "🎧🚫🔇📵" }
  ],
  chi: [
    { id: "uff-c01", q: "Chi di noi risponderebbe «Ok» a una mail di quattro pagine senza averla letta?", titolo: "Ok senza leggere" },
    { id: "uff-c02", q: "Chi di noi prenoterebbe la sala riunioni per tutta la settimana «per sicurezza»?", titolo: "Sala B, proprietà privata" },
    { id: "uff-c03", q: "Chi di noi cambierebbe la suoneria del telefono dell'ufficio con la sigla di un cartone animato?", titolo: "Sigla d'ufficio" },
    { id: "uff-c04", q: "Chi di noi porterebbe le paste per tutto il piano il lunedì, solo perché è lunedì?", titolo: "Pasticceria del lunedì" },
    { id: "uff-c05", q: "Chi di noi entrerebbe in videochiamata col filtro da patata, senza sapere come toglierlo?", titolo: "Patata in riunione" },
    { id: "uff-c06", q: "Chi di noi ogni mattina sistemerebbe la scrivania col righello prima di cominciare a lavorare?", titolo: "Geometra della scrivania" },
    { id: "uff-c07", q: "Chi di noi saprebbe come si sblocca la stampante, ma non lo direbbe mai a nessuno?", titolo: "Custode delle stampanti" },
    { id: "uff-c08", q: "Chi di noi si farebbe trovare alla macchinetta del caffè a qualsiasi ora passi il capo?", titolo: "Abitante della macchinetta" },
    { id: "uff-c09", q: "Chi di noi scriverebbe «Come da mia precedente mail» con una cattiveria che si sente fino al piano di sotto?", titolo: "Precedente mail letale" },
    { id: "uff-c10", q: "Chi di noi, alla cena aziendale, finirebbe a fare amicizia col capo del capo?", titolo: "Agganci ai piani alti" },
    { id: "uff-c11", q: "Chi di noi aiuterebbe il collega nuovo a sopravvivere alla prima settimana, cominciando da dove sono i biscotti?", titolo: "Guida ai biscotti" },
    { id: "uff-c12", q: "Chi di noi starebbe in ufficio tre anni senza imparare il nome di nessun collega?", titolo: "Ciao… tu!" },
    { id: "uff-c13", q: "Chi di noi, in riunione, chiederebbe «posso fare una domanda veloce?» e parlerebbe per venti minuti?", titolo: "Domanda veloce (20 min)" },
    { id: "uff-c14", q: "Chi di noi si porterebbe in ufficio tazza, cuscino, coperta e lampada di casa?", titolo: "Trasloco in ufficio" }
  ]
});

/* =========================================================
   DATI — «Chi di Noi?», autore 5: Le feste e la strada
   Posti: 🎂 Alla festa di compleanno (cmp) · 🚗 In viaggio in macchina (mac)
   Più i comuni: 110 missioni del gran finale «Passa il ritratto!» e 40 righe della Voce.
   {P} = nome di chi è sotto torchio. {o|a} = finale maschile|femminile secondo il suo avatar.
   ========================================================= */
window.SG_CHIDINOI = window.SG_CHIDINOI || { posti: [], comuni: [] };

/* ---------------------------------------------------------
   🎂 ALLA FESTA DI COMPLEANNO
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "compleanno", cod: "cmp", nome: "Alla festa di compleanno", emoji: "🎂",
  adesivi: "🎂🕯️🎈🎁🎉🎊🥳🍰🧁👑🎀🍭",
  entrata: [
    "Festa di {P}! Palloncini gonfi, torta pronta, invitati… in ritardo.",
    "Luci spente, candeline accese, tutti zitti: sta arrivando {P}!",
    "Il gruppo «Regalo per {P}» ha 300 messaggi e nessuna idea."
  ],
  immagini: [
    { id: "cmp-i01", q: "Gli amici prenotano un animatore per la festa di {P}. Chi si presenta?", carte: [
      { chi: "animatore", faccia: "esulta", piu: { mano: "microfono" }, t: "Urla «Non vi sento!» ogni 2 minuti" },
      { chi: "clown", faccia: "triste", t: "Si commuove a ogni candelina" },
      { chi: "mago", faccia: "furbo", piu: { animale: "coniglio" }, t: "Fa sparire la torta. Per sempre" },
      { chi: "dj", faccia: "indifferente", t: "Mette solo canzoni del 1997" }
    ] },
    { id: "cmp-i02", q: "Alla festa di {P} c'è un invitato che arriva con un'ora di anticipo. Chi è?", carte: [
      { chi: "zia", faccia: "felice", piu: { mano: "fiore" }, t: "«Vi aiuto!» e sposta tutto" },
      { chi: "nonno", faccia: "indifferente", t: "Si siede: «A che ora si mangia?»" },
      { chi: "bimbo", faccia: "esulta", t: "Ha già aperto un regalo. Il tuo." },
      { chi: "cugino", faccia: "sonno", t: "Ha sbagliato ora: dorme sul divano" }
    ] },
    { id: "cmp-i03", q: "Parte «Tanti auguri» per {P}. Chi rovina il coro?", carte: [
      { chi: "nonna", faccia: "estasi", piu: { mano: "microfono" }, t: "Parte in un'altra tonalità" },
      { chi: "cantante", faccia: "esulta", t: "Fa l'acuto finale lungo un minuto" },
      { chi: "zio", faccia: "furbo", t: "Attacca «Happy birthday» a metà" },
      { chi: "bimbo", faccia: "linguaccia", t: "Soffia le candeline a metà canzone" }
    ] },
    { id: "cmp-i04", q: "La festa di {P} è finita da un'ora, ma un invitato non se ne va. Chi è?", carte: [
      { chi: "nonno", faccia: "sonno", t: "Dorme sul divano: «Cinque minuti»" },
      { chi: "cugino", faccia: "furbo", t: "Finisce gli avanzi, uno per uno" },
      { chi: "vicino", faccia: "felice", piu: { mano: "tazza" }, t: "Racconta le vacanze del '99" },
      { chi: "zio", faccia: "esulta", t: "Aiuta a pulire: rompe due piatti" }
    ] },
    { id: "cmp-i05", q: "Gli amici organizzano una festa a sorpresa per {P}. Chi la fa saltare?", carte: [
      { chi: "mamma", faccia: "felice", piu: { mano: "telefono" }, t: "Scrive l'invito anche a te" },
      { chi: "influencer", faccia: "innamorato", t: "Mette la sorpresa nelle storie" },
      { chi: "zio", faccia: "esulta", t: "Urla «Sorpresa!» al postino" },
      { chi: "nonno", faccia: "sonno", t: "Si addormenta dietro al divano" }
    ] },
    { id: "cmp-i06", q: "Chi prepara la torta per la festa di {P}?", carte: [
      { chi: "cuoco", faccia: "estasi", t: "Cinque piani, per sei invitati" },
      { chi: "nonna", faccia: "felice", t: "Pan di Spagna di sempre: 4 chili" },
      { chi: "papa", faccia: "imbarazzo", t: "Ha seguito un video: è uscita a S" },
      { chi: "cugino", faccia: "furbo", t: "A forma di videogioco: è crollata" }
    ] },
    { id: "cmp-i07", q: "Chi vince il premio «invitato più elegante» alla festa di {P}?", carte: [
      { chi: "elegante", faccia: "felice", piu: { collo: "papillon" }, t: "Smoking, per una festa in pizzeria" },
      { chi: "nonno", faccia: "finto", t: "Scarpe lucidate a specchio dal '75" },
      { chi: "rockstar", faccia: "indifferente", t: "Giubbotto di pelle anche a luglio" },
      { chi: "bimbo", faccia: "esulta", piu: { collo: "papillon" }, t: "Cravattino e scarpe che fanno luce" }
    ] },
    { id: "cmp-i08", q: "Chi fa le foto alla festa di {P}?", carte: [
      { chi: "influencer", faccia: "innamorato", t: "Si fa i selfie con la tua torta" },
      { chi: "nonno", faccia: "sorpreso", piu: { mano: "telefono" }, t: "Tutte col dito davanti" },
      { chi: "zia", faccia: "furbo", t: "Ti becca sempre a bocca piena" },
      { chi: "papa", faccia: "pensieroso", t: "Video in verticale, col flash" }
    ] },
    { id: "cmp-i09", q: "Chi resta appiccicato a {P} per tutta la festa, senza mollare un attimo?", carte: [
      { chi: "nonno", faccia: "felice", t: "Racconta di quando c'era la lira" },
      { chi: "bimbo", faccia: "furbo", piu: { mano: "lecca" }, t: "Ti ruba le patatine dal piatto" },
      { chi: "zia", faccia: "sorpreso", piu: { collo: "perle" }, t: "«Mi sistemi il telefono? Fa bip»" },
      { chi: "cugino", faccia: "indifferente", t: "Vuole la password del wi-fi" }
    ] },
    { id: "cmp-i10", q: "Chi chiama {P} alle 7 di mattina per fare gli auguri?", carte: [
      { chi: "nonna", faccia: "estasi", piu: { mano: "telefono" }, t: "Canta tutta la canzone. Due volte" },
      { chi: "zio", faccia: "felice", t: "Sbaglia età: te ne dà dieci in più" },
      { chi: "mamma", faccia: "innamorato", t: "Rivive la tua nascita, in diretta" },
      { chi: "capo", faccia: "indifferente", piu: { mano: "tazza" }, t: "«Auguri! E quel file?»" }
    ] },
    { id: "cmp-i11", q: "Alla festa, chi trascina {P} in pista a ballare?", carte: [
      { chi: "ballerino", faccia: "estasi", t: "Salsa, giravolte e casquè finale" },
      { chi: "nonna", faccia: "esulta", t: "Il liscio: non ti lascia più" },
      { chi: "animatore", faccia: "esulta", piu: { collo: "fischietto" }, t: "Il trenino, e tu sei la locomotiva" },
      { chi: "bimbo", faccia: "felice", t: "Balla sui tuoi piedi, scalzo" }
    ] },
    { id: "cmp-i12", q: "{P} si ricorda della festa di un amico all'ultimo minuto. Che regalo porta?", carte: [
      { e: "🌹⛽", t: "Fiori presi al distributore" },
      { e: "💌🤗", t: "Un buono «vale un abbraccio»" },
      { e: "🧴🛒", t: "Un bagnoschiuma del supermercato" },
      { e: "🖼️🤳", t: "Una vostra foto stampata al volo" }
    ] },
    { id: "cmp-i13", q: "Il regalo che {P} porta alla festa è riciclato. Cosa lo tradisce?", carte: [
      { e: "🏷️👵", t: "Dentro: «Per Ciccio, dalla zia»" },
      { e: "🎄📦", t: "Carta di Natale. Siamo a luglio." },
      { e: "🧾📅", t: "Lo scontrino di tre anni fa" },
      { e: "🎁🔁", t: "Lo aveva ricevuto dal festeggiato" }
    ] },
    { id: "cmp-i14", q: "Si spengono le luci, arriva la torta con le candeline accese. Cosa fa {P}?", carte: [
      { e: "💨🕯️", t: "Tutte al primo soffio: applausi" },
      { e: "🌬️🕯️", t: "Soffia un minuto, ne spegne due" },
      { e: "👶💨", t: "Fa soffiare i bambini al suo posto" },
      { e: "🤳🕯️", t: "Prima la foto: si sciolgono tutte" }
    ] },
    { id: "cmp-i15", q: "Il giorno dopo la sua festa, cosa fa {P}?", carte: [
      { e: "🧹🎊", t: "Trova coriandoli fino a Natale" },
      { e: "🍰🛌", t: "Colazione a letto con la torta" },
      { e: "📝🎁", t: "Segna chi ha regalato cosa" },
      { e: "🛍️🔁", t: "Cambia tre regali su quattro" }
    ] },
    { id: "cmp-i16", q: "{P} organizza la sua festa. Dove?", carte: [
      { e: "🍕🏠", t: "Pizzeria sotto casa, come sempre" },
      { e: "🎳👟", t: "Bowling con le scarpe a noleggio" },
      { e: "🛋️🍿", t: "A casa: divano, pizza e film" },
      { e: "🏰🎉", t: "Villa affittata per 80 persone" }
    ] },
    { id: "cmp-i17", q: "È sera e nessuno si è ricordato del compleanno di {P}. Cosa fa?", carte: [
      { e: "📢📱", t: "Dieci storie con una candelina" },
      { e: "🤐📅", t: "Non dice niente. Per un anno." },
      { e: "✍️💬", t: "Scrive nel gruppo «oggi è il 12»" },
      { e: "🎂🍴", t: "Si compra la torta e la finisce" }
    ] },
    { id: "cmp-i18", q: "Si fa la colletta per il regalo di un amico. Cosa fa {P}?", carte: [
      { e: "💶⏳", t: "«Te li do dopo». Mai visti." },
      { e: "📊📝", t: "Fa la tabella di chi ha pagato" },
      { e: "💡🙅", t: "Boccia ogni idea, non ne propone" },
      { e: "🎁🤷", t: "Paga, ma non sa cosa si regala" }
    ] },
    { id: "cmp-i19", q: "Cosa porta {P} a una festa, oltre al regalo?", carte: [
      { e: "🥤🍟", t: "Due litri di aranciata e patatine" },
      { e: "🔊🎶", t: "La cassa, e la playlist è sua" },
      { e: "🎲⏳", t: "Un gioco da tavolo che dura 3 ore" },
      { e: "🐶❓", t: "Il cane, senza chiedere a nessuno" }
    ] },
    { id: "cmp-i20", q: "Per la sua festa dei 100 anni, cosa vuole {P}?", carte: [
      { e: "📺🎤", t: "La diretta in prima serata" },
      { e: "🎂💨", t: "100 candeline, un soffio solo" },
      { e: "🪩💃", t: "Discoteca fino all'alba" },
      { e: "🛋️😴", t: "Niente festa: dormire, finalmente" }
    ] },
    { id: "cmp-i21", q: "Il palloncino a elio di {P} vola via. Cosa fa {P}?", carte: [
      { e: "🏃🎈", t: "Lo insegue fino alla rotonda" },
      { e: "🪜🌳", t: "Va a prendere la scala del vicino" },
      { e: "😢👋", t: "Lo saluta come un figlio che parte" },
      { e: "🤷🎈", t: "«L'ho liberato apposta»" }
    ] },
    { id: "cmp-i22", q: "Alla festa di {P} si rompe la cassa e finisce la musica. Cosa fa {P}?", carte: [
      { e: "🎤🗣️", t: "Canta a cappella, tutte le canzoni" },
      { e: "📱🥛", t: "Telefono nel bicchiere, a palla" },
      { e: "🥁🍳", t: "Batteria con le pentole di casa" },
      { e: "🏃🛒", t: "Corre a comprare una cassa nuova" }
    ] },
    { id: "cmp-i23", q: "{P} riceve in regalo un mobile da montare: 2.000 pezzi. Cosa fa?", carte: [
      { e: "📜🧐", t: "Istruzioni lette dalla prima riga" },
      { e: "🔨😤", t: "Monta a occhio: avanzano 12 viti" },
      { e: "📦🗄️", t: "Resta in cantina, nella scatola" },
      { e: "📞🧰", t: "Chiama lo zio che «sa fare tutto»" }
    ] },
    { id: "cmp-i24", q: "Tutti urlano «Sorpresa!» e si accende la luce. Che faccia fa {P}?", carte: [
      { lui: "terrore", t: "Lancia in aria la spesa" },
      { lui: "finto", t: "Lo sapeva da una settimana" },
      { lui: "estasi", t: "Abbraccia anche chi non conosce" },
      { lui: "arrabbiato", t: "«Ero in tuta, potevate dirlo!»" }
    ] },
    { id: "cmp-i25", q: "{P} scarta un regalo orribile davanti a chi gliel'ha fatto. Che faccia fa?", carte: [
      { lui: "finto", t: "«Proprio quello che volevo!»" },
      { lui: "pensieroso", t: "«Che bello! Ehm… cos'è?»" },
      { lui: "furbo", t: "Cerca già lo scontrino" },
      { lui: "imbarazzo", t: "Lo prova subito, per gentilezza" }
    ] },
    { id: "cmp-i26", q: "Sull'invito c'è scritto «festa a tema». Come si presenta {P}?", carte: [
      { lui: "esulta", piu: { schiena: "mantello" }, t: "Mantello: il lenzuolo del letto" },
      { lui: "indifferente", piu: { occhiali: "sole" }, t: "Occhiali da sole: «Sono una star»" },
      { lui: "innamorato", piu: { cappello: "coniglio" }, t: "Orecchie da coniglio, ogni anno" },
      { lui: "imbarazzo", piu: { cappello: "vichingo" }, t: "Elmo vichingo. Il tema: «pigiama»" }
    ] },
    { id: "cmp-i27", q: "Qualcuno chiede a {P} «Ma quanti anni fai?» davanti a tutti. Che faccia fa?", carte: [
      { lui: "furbo", t: "Se ne toglie cinque, serenamente" },
      { lui: "sorpreso", t: "Deve contare sulle dita" },
      { lui: "indifferente", t: "Dice l'età precisa, coi mesi" },
      { lui: "linguaccia", t: "«Diciotto! Come ogni anno»" }
    ] },
    { id: "cmp-i28", q: "Tutti cantano «Tanti auguri» guardando {P}. Che faccia fa?", carte: [
      { lui: "imbarazzo", t: "Non sa dove mettere le mani" },
      { lui: "esulta", t: "Dirige il coro a braccia larghe" },
      { lui: "finto", t: "Sorriso fisso per 40 secondi" },
      { lui: "felice", t: "Canta: «Tanti auguri a meee!»" }
    ] }
  ],
  scrivi: [
    { id: "cmp-s01", q: "Il pasticcere sbaglia la scritta sulla torta di {P}. C'è scritto: «___»",
      riserve: ["Auguri Pierpaola", "Buona pensione, ragioniere", "Benvenuto al mondo, 3 chili e 2"] },
    { id: "cmp-s02", q: "{P} manda un vocale di auguri lungo 4 minuti. Come comincia?",
      riserve: ["Allora, premessa: ho poco tempo…", "Aspetta che esco dalla galleria", "Scusa, era ieri? Vabbè, auguri!"] },
    { id: "cmp-s03", q: "Alla zia che commenta ogni sua foto con «Auguri!!!», {P} risponde: «___»",
      riserve: ["Grazie zia, sì, mangio", "Zia, è la foto del cane", "Zia, il compleanno era a marzo"] },
    { id: "cmp-s04", q: "{P} si alza per fare il discorso alla sua festa. Qual è la prima frase?",
      riserve: ["Grazie a tutti, tranne a chi sa lui", "Brevemente: punto primo…", "Prima di tutto: dov'è il bagno?"] },
    { id: "cmp-s05", q: "{P} inventa una strofa nuova: «Tanti auguri a te, ___»",
      riserve: ["la pizza la paghi te", "il regalo è per me?", "c'è il bis del bignè"] },
    { id: "cmp-s06", q: "Alla festa gira il biglietto gigante da firmare. {P} scrive: «___»",
      riserve: ["Auguri! (scusa, chi sei?)", "Ho preso due fette, perdonami", "Cento di questi giorni, ma con le ferie"] },
    { id: "cmp-s07", q: "{P} prepara il quiz «Quanto conosci il festeggiato?». La domanda più difficile è: «___»",
      riserve: ["Come si chiamava il suo criceto?", "Cosa ha mangiato martedì a pranzo?", "Quante volte ha detto «basta torta»?"] },
    { id: "cmp-s08", q: "{P} nasconde la torta della sorpresa in macchina. Al festeggiato che vuole salire dice: «___»",
      riserve: ["Non salire, c'è un'ape. Enorme", "Dietro è pieno di… compiti", "Oggi la macchina è chiusa per ferie"] },
    { id: "cmp-s09", q: "{P} ha dimenticato il compleanno del suo migliore amico. Che scusa scrive?",
      riserve: ["Era un test, e l'hai superato", "Così sono in anticipo per l'anno dopo", "Il calendario era fermo a febbraio"] },
    { id: "cmp-s10", q: "{P} arriva con l'unico palloncino rimasto in negozio. C'è scritto: «___»",
      riserve: ["Bentornato dalle vacanze", "È un maschio!", "Auguri per gli 81 anni, Ugo"] },
    { id: "cmp-s11", q: "{P} risponde all'invito di una festa dove non vuole andare. Cosa scrive?",
      riserve: ["Ci sono! Ah no, c'è la nonna", "Vengo, ma solo per la torta", "Ho già un impegno: il divano"] },
    { id: "cmp-s12", q: "Sul cartellone degli auguri c'è scritto: «{P}, ti ricordi quando ___»",
      riserve: ["hai spento le candeline di un altro?", "hai aperto i regali prima della festa?", "ci hai fatto cantare tre volte?"] },
    { id: "cmp-s13", q: "Mentre tutti cantano, {P} esprime il desiderio ad alta voce: «___»",
      riserve: ["Che lo zio non faccia il discorso", "Un'altra torta, solo per me", "Ferie da oggi a settembre"] },
    { id: "cmp-s14", q: "Sull'invito alla festa di {P} c'è una regola in fondo: «Vietato ___»",
      riserve: ["arrivare prima delle 9 (zia)", "portare la chitarra (Mario)", "dire «ai miei tempi»"] },
    { id: "cmp-s15", q: "Alla festa si gioca a «obbligo o verità». Il gruppo dà a {P} l'obbligo: «___»",
      riserve: ["chiama la nonna e cantale gli auguri", "balla il liscio con lo zio", "mangia la candelina di marzapane"] },
    { id: "cmp-s16", q: "Nel biglietto della nonna per {P} c'è scritto: «___»",
      riserve: ["Dentro ci sono 10 euro, non spenderli", "Copriti, che arriva l'inverno", "Mangia di più. Firmato: nonna"] },
    { id: "cmp-s17", q: "Le candeline sono quelle magiche che si riaccendono. Al terzo tentativo, {P} dice: «___»",
      riserve: ["Va bene, mi tengo un anno in più", "Chiamate i pompieri, è un ordine", "Il desiderio vale lo stesso, vero?"], voto: "lui" },
    { id: "cmp-s18", q: "Gli amici fanno a {P} un regalo di gruppo un po' strano. Cos'è?",
      riserve: ["Un corso di yodel, già pagato", "Una capra adottata a distanza", "Cento barattoli del sugo della nonna"] }
  ],
  disegna: [
    { id: "cmp-d01", q: "Disegna la torta di {P}, come la sogna davvero", su: "scena", adesivi: "🍓🍫🍩🦄🏰🍕" },
    { id: "cmp-d02", q: "Disegna su {P} il costume da torta, con le candeline in testa", su: "ritratto", adesivi: "🎂🕯️🍓🍫" },
    { id: "cmp-d03", q: "Disegna dove si nascondono gli amici per la festa a sorpresa di {P}", su: "scena", adesivi: "🛋️🚪🪴🧥🙈🦶" },
    { id: "cmp-d04", q: "Disegna su {P} il risultato dello scherzo della torta in faccia", su: "ritratto", adesivi: "🍰🍓🧁💥🍫🍒" },
    { id: "cmp-d05", q: "Disegna il regalo che {P} sogna da anni e nessuno fa mai", su: "scena", adesivi: "🐶🚗🏝️🎮🛵🐴" },
    { id: "cmp-d06", q: "Disegna su {P} i bigliettini d'auguri attaccati addosso dagli amici", su: "ritratto", adesivi: "💌📝⭐❤️🎀" },
    { id: "cmp-d07", q: "Disegna il regalo incartato da {P}: si capisce subito cos'è", su: "scena", adesivi: "📰🧻🎀🩹📦🎸" },
    { id: "cmp-d08", q: "Disegna il salotto la mattina dopo la festa di {P}", su: "scena", adesivi: "🥤🍕🧹😴🧦🍿" },
    { id: "cmp-d09", q: "Disegna su {P} la tuta da supereroe con i suoi anni sul petto", su: "ritratto", adesivi: "🦸⚡🎂⭐" },
    { id: "cmp-d10", q: "Disegna il castello gonfiabile che {P} ha affittato per la festa", su: "scena", adesivi: "🏰🦖🤸🎪🐙🌈" },
    { id: "cmp-d11", q: "Disegna su {P} corona, fascia e mantello: oggi è il suo giorno", su: "ritratto", adesivi: "🎖️✨💎🦚🌹🏆" },
    { id: "cmp-d12", q: "Disegna il sacchetto-ricordo che {P} regala a ogni invitato", su: "bianco", adesivi: "🍬🪀🧸🍭🎈" },
    { id: "cmp-d13", q: "Disegna cosa esce dalla pentolaccia alla festa di {P}", su: "scena", adesivi: "🍬🧦🐸🪀🍫🦆" }
  ],
  chi: [
    { id: "cmp-c01", q: "Chi di noi si ricorderebbe il compleanno di tutti, anche del cane del vicino, ma non il proprio?", titolo: "Calendario umano" },
    { id: "cmp-c02", q: "Chi di noi ruberebbe la ciliegina dalla torta prima ancora che accendano le candeline?", titolo: "Agguato alla ciliegina" },
    { id: "cmp-c03", q: "Chi di noi regalerebbe una cosa fatta a mano, così storta da diventare bellissima?", titolo: "Bottega del cuore" },
    { id: "cmp-c04", q: "Chi di noi si offrirebbe di fare animazione alla festa dei bambini e finirebbe in ostaggio tra le stelle filanti?", titolo: "Animazione in ostaggio" },
    { id: "cmp-c05", q: "Chi di noi, alla festa di un amico, passerebbe due ore a chiacchierare con sua nonna?", titolo: "Nipote d'adozione" },
    { id: "cmp-c06", q: "Chi di noi aprirebbe i regali così piano, staccando lo scotch con cura, da far impazzire tutti?", titolo: "Bradipo dei pacchetti" },
    { id: "cmp-c07", q: "Chi di noi arriverebbe alla festa con un'ora di ritardo e una torta gelato già sciolta?", titolo: "Gelato, gusto ritardo" },
    { id: "cmp-c08", q: "Chi di noi, a 30 anni, vorrebbe ancora il clown e lo zucchero filato alla sua festa?", titolo: "Infanzia eterna" },
    { id: "cmp-c09", q: "Chi di noi manderebbe gli auguri a mezzanotte in punto, con la sveglia puntata apposta?", titolo: "Sveglia degli auguri" },
    { id: "cmp-c10", q: "Chi di noi sbaglierebbe locale e canterebbe «Tanti auguri» al tavolo di sconosciuti?", titolo: "Festa a caso" },
    { id: "cmp-c11", q: "Chi di noi inciamperebbe al buio con la torta in mano… e la salverebbe all'ultimo con un tuffo?", titolo: "Portiere della torta" },
    { id: "cmp-c12", q: "Chi di noi resterebbe ad aiutare a pulire alle 2 di notte, quando gli altri sono spariti?", titolo: "Angelo delle pulizie" },
    { id: "cmp-c13", q: "Chi di noi porterebbe lo stesso regalo di un altro invitato… e direbbe che fanno un set?", titolo: "Doppione da collezione" },
    { id: "cmp-c14", q: "Chi di noi gonfierebbe tutti i palloncini a fiato, restando senza voce per la torta?", titolo: "Mantice della festa" }
  ]
});

/* ---------------------------------------------------------
   🚗 IN VIAGGIO IN MACCHINA
   --------------------------------------------------------- */
SG_CHIDINOI.posti.push({
  id: "macchina", cod: "mac", nome: "In viaggio in macchina", emoji: "🚗",
  adesivi: "🚗🗺️🧭⛽🎵🍔🧳🐶🛞🚧🧃🛣️",
  entrata: [
    "Partenza alle 6 in punto. Sono le 8 e {P} carica ancora la valigia.",
    "Pieno fatto, playlist pronta, navigatore acceso. Al volante: {P}.",
    "Chilometro 3. Dal sedile dietro, già: «{P}, quanto manca?»"
  ],
  immagini: [
    { id: "mac-i01", q: "All'ultimo un amico dà buca: chi prende il suo posto in macchina, accanto a {P}?", carte: [
      { chi: "nonno", faccia: "pensieroso", t: "A ogni curva: «Io qui frenavo»" },
      { chi: "bimbo", faccia: "furbo", piu: { mano: "lecca" }, t: "Calcia il sedile da Bologna in poi" },
      { chi: "dj", faccia: "estasi", t: "Canta in cuffia, stonato e felice" },
      { chi: "influencer", faccia: "innamorato", t: "Fa una diretta a ogni casello" }
    ] },
    { id: "mac-i02", q: "{P} non trova la strada e chiede a un passante. Chi è?", carte: [
      { chi: "contadino", faccia: "felice", piu: { cappello: "paglia" }, t: "«Dritto, poi dove c'era il bar»" },
      { chi: "vigile", faccia: "arrabbiato", t: "Fischia e indica tre direzioni" },
      { chi: "nonna", faccia: "felice", t: "Non lo sa, ma ti offre i biscotti" },
      { chi: "turista", faccia: "sorpreso", t: "Un turista più perso di te" }
    ] },
    { id: "mac-i03", q: "Il navigatore di {P} cambia voce. Di chi è la voce nuova?", carte: [
      { chi: "zia", faccia: "sorpreso", piu: { mano: "telefono" }, t: "«Rallenta! E hai mangiato?»" },
      { chi: "allenatore", faccia: "esulta", t: "«Freccia! Grande! Così si fa!»" },
      { chi: "presentatore", faccia: "estasi", t: "«Ecco a voi… l'uscita numero 2!»" },
      { chi: "prof", faccia: "pensieroso", t: "Interroga: «Capitale del Molise?»" }
    ] },
    { id: "mac-i04", q: "Chi presta la macchina a {P} per il viaggio?", carte: [
      { chi: "nonno", faccia: "felice", t: "Una Panda del '91: «Va benissimo»" },
      { chi: "zia", faccia: "furbo", piu: { collo: "perle" }, t: "Con dodici regole sul cruscotto" },
      { chi: "cugino", faccia: "linguaccia", t: "Stereo bloccato su Radio Liscio" },
      { chi: "papa", faccia: "terrore", piu: { mano: "telefono" }, t: "Chiama ogni ora: «E la frizione?»" }
    ] },
    { id: "mac-i05", q: "Durante il viaggio, chi chiama {P} ogni mezz'ora?", carte: [
      { chi: "mamma", faccia: "sorpreso", piu: { mano: "telefono" }, t: "«Siete arrivati? Avete mangiato?»" },
      { chi: "nonna", faccia: "felice", t: "«Passate: ho fatto le polpette»" },
      { chi: "vicino", faccia: "pensieroso", t: "«Hai lasciato la finestra aperta»" },
      { chi: "zio", faccia: "furbo", t: "Ti spiega una strada più corta" }
    ] },
    { id: "mac-i06", q: "Al casello c'è una coda infinita. Chi c'è davanti a {P}?", carte: [
      { chi: "zio", faccia: "indifferente", t: "Paga in monetine da 5 centesimi" },
      { chi: "cowboy", faccia: "arrabbiato", t: "Litiga con la sbarra, e perde" },
      { chi: "nonna", faccia: "felice", t: "Chiacchiera col casellante: 10 min" },
      { chi: "autista", faccia: "sonno", t: "Ha sbagliato porta: fa retromarcia" }
    ] },
    { id: "mac-i07", q: "Dopo 500 km, chi si offre di guidare al posto di {P}?", carte: [
      { chi: "capitano", faccia: "esulta", t: "«Virare a destra, ciurma!»" },
      { chi: "re", faccia: "estasi", t: "Guida come se avesse la scorta" },
      { chi: "pirata", faccia: "furbo", t: "«So una scorciatoia» (è sterrata)" },
      { chi: "scout", faccia: "felice", piu: { schiena: "zaino" }, t: "Cartina, bussola e merenda pronte" }
    ] },
    { id: "mac-i08", q: "Il vigile ferma {P} per un controllo. Com'è il vigile?", carte: [
      { chi: "vigile", f: "u", faccia: "arrabbiato", t: "Lo stesso di ieri. Ti riconosce." },
      { chi: "vigile", f: "d", faccia: "felice", t: "Fa i complimenti per la playlist" },
      { chi: "vigile", f: "u", faccia: "furbo", t: "Chiede un passaggio fino a casa" },
      { chi: "vigile", f: "d", faccia: "sonno", t: "Si addormenta leggendo la patente" }
    ] },
    { id: "mac-i09", q: "Al semaforo rosso, chi c'è nella macchina accanto a {P}?", carte: [
      { chi: "nonno", faccia: "esulta", piu: { occhiali: "sole" }, t: "Ha la musica più alta della tua" },
      { chi: "sposo", f: "d", faccia: "esulta", t: "Due sposi, con le lattine dietro" },
      { chi: "prof", faccia: "arrabbiato", t: "Ti guarda male: musica alta" },
      { chi: "poliziotto", faccia: "finto", t: "Ti fa segno: «Cintura!»" }
    ] },
    { id: "mac-i10", q: "Al volante, la musica la sceglie {P}. Cosa si ascolta?", carte: [
      { e: "📻⚽", t: "La partita alla radio, a volume 40" },
      { e: "🎤🌸", t: "Solo Sanremo, dal 1980 a oggi" },
      { e: "🎧📚", t: "Un podcast sul Medioevo, 6 puntate" },
      { e: "📻🎙️", t: "Radio locale con le dediche" }
    ] },
    { id: "mac-i11", q: "Il bagaglio non entra nel bagagliaio. Cosa fa {P}?", carte: [
      { e: "🧳🦵", t: "Ci sale sopra e salta" },
      { e: "🧳📐", t: "Rifà tutto da capo, con metodo" },
      { e: "🗑️👕", t: "Lascia a casa le cose degli altri" },
      { e: "🛍️😬", t: "Sacchetti sulle gambe di tutti" }
    ] },
    { id: "mac-i12", q: "Bisogna decidere chi sta davanti. Come si prende il posto {P}?", carte: [
      { e: "🏃📢", t: "Urla «Davanti!» da 100 metri" },
      { e: "🤢💺", t: "«Dietro mi viene la nausea»" },
      { e: "📜✋", t: "L'ha prenotato una settimana fa" },
      { e: "😇💺", t: "Lo lascia agli altri. Sempre." }
    ] },
    { id: "mac-i13", q: "Cosa mangia {P} durante il viaggio?", carte: [
      { e: "🥪🍳", t: "Panini con la frittata, da casa" },
      { e: "🍬🌿", t: "Caramelle alla menta per 300 km" },
      { e: "🍫☀️", t: "Cioccolata sciolta sul cruscotto" },
      { e: "🍔🍟", t: "Si ferma per ogni panino possibile" }
    ] },
    { id: "mac-i14", q: "Cosa c'è appeso allo specchietto della macchina di {P}?", carte: [
      { e: "🌲👃", t: "Alberello senza profumo dal 2019" },
      { e: "🧸🔑", t: "Tre peluche e un portachiavi" },
      { e: "🎲🎲", t: "I dadi di peluche, anni '80" },
      { e: "🌶️🍀", t: "Il cornetto rosso portafortuna" }
    ] },
    { id: "mac-i15", q: "Cosa trovi sotto il sedile della macchina di {P}?", carte: [
      { e: "🍟📅", t: "Una patatina dell'anno scorso" },
      { e: "🧦❓", t: "Un calzino. Di chi? Mistero." },
      { e: "🪙🅿️", t: "Monetine per tutti i parcheggi" },
      { e: "✨🧽", t: "Niente: aspira ogni sabato" }
    ] },
    { id: "mac-i16", q: "Che scusa trova {P} per non guidare?", carte: [
      { e: "👓🌙", t: "«Di sera non vedo bene»" },
      { e: "🚗❓", t: "«Non conosco questa macchina»" },
      { e: "😴🛋️", t: "«Dietro dormo meglio»" },
      { e: "🎵👑", t: "«Io metto la musica, è un lavoro»" }
    ] },
    { id: "mac-i17", q: "{P} deve parcheggiare in un posto strettissimo. Come va?", carte: [
      { e: "🅿️👏", t: "Al primo colpo. Applausi dal bar" },
      { e: "🔁⏱️", t: "Dodici manovre e venti minuti" },
      { e: "🚶🅿️", t: "Rinuncia: parcheggia a 2 km" },
      { e: "🙋🔑", t: "Fa scendere un amico: «Fallo tu»" }
    ] },
    { id: "mac-i18", q: "Il clima in macchina lo decide {P}. Com'è?", carte: [
      { e: "🥶❄️", t: "Aria condizionata a 16 gradi" },
      { e: "🥵🔥", t: "Riscaldamento acceso ad agosto" },
      { e: "🌬️🪟", t: "Finestrini giù, capelli ovunque" },
      { e: "🔁🌡️", t: "Cambia idea ogni due minuti" }
    ] },
    { id: "mac-i19", q: "La macchina di {P} fa un rumore strano. Cosa fa {P}?", carte: [
      { e: "🔊🎵", t: "Alza la radio: rumore sparito" },
      { e: "🔧🧐", t: "Apre il cofano, annuisce: «Eh, sì»" },
      { e: "📞🗣️", t: "Imita il rumore al meccanico" },
      { e: "🤞🚗", t: "Incrocia le dita fino all'arrivo" }
    ] },
    { id: "mac-i20", q: "In viaggio, ogni quanto vuole fermarsi {P}?", carte: [
      { e: "🚫⏱️", t: "Mai: si arriva senza soste" },
      { e: "☕🔁", t: "Ogni 50 km, per il caffè" },
      { e: "🌄📸", t: "A ogni panorama, per la foto" },
      { e: "🚻🙋", t: "A ogni bagno che vede" }
    ] },
    { id: "mac-i21", q: "Al momento di ripartire, {P} non trova le chiavi. Dove sono?", carte: [
      { e: "🔑🚗", t: "Dentro la macchina chiusa" },
      { e: "🔑👖", t: "In tasca. Da sempre." },
      { e: "🔑🍔", t: "Nel sacchetto del panino, buttato" },
      { e: "🔑🧊", t: "Nel frigo della casa vacanze" }
    ] },
    { id: "mac-i22", q: "Si parte alle 5 di mattina. Che faccia fa {P} quando sale in macchina?", carte: [
      { lui: "sonno", t: "Dorme già sul vialetto" },
      { lui: "esulta", t: "Canta già, a tutto volume" },
      { lui: "arrabbiato", t: "«Chi ha deciso le cinque?!»" },
      { lui: "finto", t: "«Ci sono, ci sono…» (non c'è)" }
    ] },
    { id: "mac-i23", q: "Il navigatore dice «Ricalcolo del percorso» per la quinta volta. Che faccia fa {P}?", carte: [
      { lui: "arrabbiato", t: "Risponde al navigatore. Male." },
      { lui: "indifferente", t: "Va dritto: la strada la sa" },
      { lui: "triste", t: "«Anche tu mi abbandoni?»" },
      { lui: "furbo", t: "Lo spegne e va «a sentimento»" }
    ] },
    { id: "mac-i24", q: "Dal sedile dietro, per la decima volta: «Quanto manca?». Che faccia fa {P}?", carte: [
      { lui: "arrabbiato", t: "Accosta: «Ora torniamo a casa»" },
      { lui: "pensieroso", t: "Calcola km e media, ad alta voce" },
      { lui: "finto", t: "«Poco poco!» (mancano 6 ore)" },
      { lui: "linguaccia", t: "«Quanto manca a cosa?»" }
    ] },
    { id: "mac-i25", q: "Gli amici cantano a squarciagola una canzone che {P} odia. Che faccia fa?", carte: [
      { lui: "disgusto", t: "Si tappa le orecchie per 200 km" },
      { lui: "finto", t: "Muove la bocca e finge di saperla" },
      { lui: "esulta", t: "Al ritornello urla più di tutti" },
      { lui: "sonno", t: "Finge di dormire fino all'arrivo" }
    ] },
    { id: "mac-i26", q: "A 200 km da casa, {P} scopre di aver lasciato la valigia sul letto. Che faccia fa?", carte: [
      { lui: "terrore", t: "«Torniamo indietro. Subito.»" },
      { lui: "indifferente", t: "«Compro tutto lì»" },
      { lui: "furbo", t: "Si veste con le cose degli altri" },
      { lui: "triste", t: "Piange per il costume nuovo" }
    ] }
  ],
  scrivi: [
    { id: "mac-s01", q: "{P} prepara la playlist per il viaggio. Come la chiama?",
      riserve: ["Canzoni per non litigare", "Solo hit. Vietato toccare.", "Viaggio 2026 (definitiva) (vera)"] },
    { id: "mac-s02", q: "Si parte alle 6. Alle 6:40 {P} apre la porta in pigiama e dice: «___»",
      riserve: ["Ma non era domani?", "Cinque minuti, faccio la valigia", "Partite, vi raggiungo a nuoto"] },
    { id: "mac-s03", q: "Al casello la sbarra non si alza. {P} parla al citofono dell'assistenza: «___»",
      riserve: ["Salve, la sbarra ce l'ha con me", "Il biglietto l'ha mangiato il cane", "Se le canto qualcosa, mi apre?"] },
    { id: "mac-s04", q: "Un'altra auto ruba il parcheggio a {P}. Cosa urla dal finestrino?",
      riserve: ["Complimenti per la freccia!", "Ti auguro solo semafori rossi", "Va bene, ma il karma ti vede"] },
    { id: "mac-s05", q: "Arrivati al mare, {P} apre il bagagliaio. La prima cosa che tira fuori è ___",
      riserve: ["la moka, prima del costume", "un cuscino della nonna, per sicurezza", "la valigia di un altro"] },
    { id: "mac-s06", q: "{P} sorpassa finalmente un trattore e fa la telecronaca: «___»",
      riserve: ["E lo supera! No. Ci riprova.", "Signore e signori: i 40 all'ora!", "Il trattore saluta. Che campione"] },
    { id: "mac-s07", q: "{P} fa da copilota. Le sue indicazioni: «___»",
      riserve: ["Gira! No, l'altra destra", "Lì! Dove? Lì! Era lì.", "Segui quella rossa, sembra simpatica"] },
    { id: "mac-s08", q: "{P} spiega al vigile perché andava pianissimo in autostrada. Cosa dice?",
      riserve: ["Ammiravo il panorama", "La macchina è nuova, la sto abituando", "Non volevo arrivare dai suoceri"] },
    { id: "mac-s09", q: "Sul lunotto della macchina di {P} c'è un adesivo: «___»",
      riserve: ["Bimbo a bordo (ha 34 anni)", "Se leggi qui sei troppo vicino", "Non suonate, sto pensando"] },
    { id: "mac-s10", q: "La spia della benzina è accesa da 80 km. {P}, al volante, rassicura tutti: «___»",
      riserve: ["Con la riserva ci arrivo a Bari", "La spia è solo un consiglio", "Tranquilli, adesso è tutta discesa"] },
    { id: "mac-s11", q: "La macchina di {P} ha un clacson nuovo. Quando suona, si sente: «___»",
      riserve: ["«Permesso, scusate», con voce gentile", "La sigla di un cartone animato", "La nonna che chiama per il pranzo"] },
    { id: "mac-s12", q: "La regola numero uno nella macchina di {P}: «Chi sta dietro ___»",
      riserve: ["non sceglie la musica", "canta solo nei ritornelli", "non chiede quanto manca"] },
    { id: "mac-s13", q: "{P} propone un gioco per far passare i chilometri. Come funziona?",
      riserve: ["Contiamo le Panda rosse", "Chi si addormenta paga la benzina", "Chi parla per primo guida al ritorno"] },
    { id: "mac-s14", q: "Al ritorno {P} trova una multa sul parabrezza. Cosa scrive sul retro?",
      riserve: ["Caro vigile, giuro che c'era nebbia", "Pago io, ma il caffè lo offri tu", "Non è mia, la macchina era così"] },
    { id: "mac-s15", q: "Il navigatore di {P} ha un'opzione nuova: «Evita ___»",
      riserve: ["le strade dove guida mia zia", "i parenti lungo il percorso", "le canzoni di mio cugino"] },
    { id: "mac-s16", q: "Se la macchina di {P} potesse parlare, cosa direbbe?",
      riserve: ["Ancora con questa canzone?", "Le briciole mi pizzicano", "Rallenta, sono del 2003"], voto: "lui" },
    { id: "mac-s17", q: "Il cartello che {P} mostra dal finestrino agli amici nell'altra macchina: «___»",
      riserve: ["Avete voi le patatine?", "Fermatevi: devo andare in bagno", "Sorpasso? No. Ciao."] },
    { id: "mac-s18", q: "{P} racconta il viaggio in una storia sul telefono. Cosa scrive?",
      riserve: ["8 ore, 3 litigi, 1 panino", "Il mare esiste, ve lo giuro", "Il navigatore e io non ci parliamo più"] }
  ],
  disegna: [
    { id: "mac-d01", q: "Disegna la macchina di {P} truccata per il viaggio perfetto", su: "scena", adesivi: "🛋️🎮🍕🛁🚀🎡" },
    { id: "mac-d02", q: "Disegna su {P} il look da pilota per guidare la Panda della nonna", su: "ritratto", adesivi: "🏁🧤🏆🕶️🏎️🔥" },
    { id: "mac-d03", q: "Disegna il panorama che {P} giura di aver visto mentre tutti dormivano", su: "scena", adesivi: "🐉🌋🏔️🛸🐋🌈" },
    { id: "mac-d04", q: "Disegna su {P} tutto quello che si mette per dormire in macchina", su: "ritratto", adesivi: "😴🧸🛏️🎧💤🧣" },
    { id: "mac-d05", q: "Disegna la casa vacanze quando arriva {P}: com'è davvero, non in foto", su: "scena", adesivi: "🏚️🕸️🐜🚿🐐🪑" },
    { id: "mac-d06", q: "Disegna su {P} il costume da navigatore umano, con frecce e cartelli", su: "ritratto", adesivi: "⬅️➡️⬆️🚧📍🔊" },
    { id: "mac-d07", q: "Disegna dove ha parcheggiato {P}, «tanto è un minuto»", su: "scena", adesivi: "🚒🐄🏛️⛲🌳🛒" },
    { id: "mac-d08", q: "Disegna cosa c'è davanti a {P} nella coda di 5 km", su: "scena", adesivi: "🚜🐑🚒🛵🦆🚛" },
    { id: "mac-d09", q: "Disegna su {P} il look dopo 100 km in decappottabile", su: "ritratto", adesivi: "👒🕶️🧣💨🦋🍃" },
    { id: "mac-d10", q: "Disegna su {P} casco e occhialoni per sedersi accanto a chi guida male", su: "ritratto", adesivi: "⛑️🥽🙏🧸" },
    { id: "mac-d11", q: "Disegna il cartello stradale inventato apposta per {P}", su: "scena", adesivi: "⚠️🛑🐢🍕🔺❗" },
    { id: "mac-d12", q: "Disegna su {P} gli adesivi dei posti visti, come una vecchia valigia", su: "ritratto", adesivi: "🗼🏔️🍕🗽🏖️🗿" },
    { id: "mac-d13", q: "Disegna l'animale che {P} ha portato in viaggio, e dove si è messo", su: "scena", adesivi: "🐱🐢🐔🦜🐹🐰" }
  ],
  chi: [
    { id: "mac-c01", q: "Chi di noi leggerebbe ad alta voce ogni cartello stradale, compresi i nomi dei paesi più strani?", titolo: "Voce dei cartelli" },
    { id: "mac-c02", q: "Chi di noi farebbe 300 km col navigatore impostato sul paese sbagliato che ha lo stesso nome?", titolo: "Turista del paese gemello" },
    { id: "mac-c03", q: "Chi di noi canterebbe a squarciagola al semaforo, col finestrino abbassato e zero vergogna?", titolo: "Concerto al semaforo" },
    { id: "mac-c04", q: "Chi di noi, dopo una sosta, salirebbe tranquillamente in una macchina uguale… ma di sconosciuti?", titolo: "Macchina sbagliata" },
    { id: "mac-c05", q: "Chi di noi non chiuderebbe occhio tutta la notte, per chiacchierare con chi guida e fargli compagnia?", titolo: "Copilota della notte" },
    { id: "mac-c06", q: "Chi di noi farebbe ripartire la stessa canzone 14 volte di fila, finché qualcuno non sequestra il telefono?", titolo: "Disco rotto" },
    { id: "mac-c07", q: "Chi di noi non ricorderebbe dove ha parcheggiato e girerebbe un'ora premendo il telecomando delle chiavi?", titolo: "Caccia al bip" },
    { id: "mac-c08", q: "Chi di noi preparerebbe la tabella del viaggio con orari e soste, al minuto?", titolo: "Capostazione del viaggio" },
    { id: "mac-c09", q: "Chi di noi passerebbe il viaggio a fotografare il paesaggio dal finestrino, con tutte le foto mosse?", titolo: "Foto mosse d'autore" },
    { id: "mac-c10", q: "Chi di noi, in un viaggio con due macchine, perderebbe gli altri al primo casello?", titolo: "Addio al primo casello" },
    { id: "mac-c11", q: "Chi di noi farebbe tre giri della rotonda prima di decidere l'uscita?", titolo: "Rotonda infinita" },
    { id: "mac-c12", q: "Chi di noi farebbe girare i biscotti per tutta la macchina, finché non ne resta neanche uno per sé?", titolo: "Cuore di biscotto" },
    { id: "mac-c13", q: "Chi di noi saluterebbe dal finestrino tutti i camionisti, come vecchi amici?", titolo: "Fan club dei camion" },
    { id: "mac-c14", q: "Chi di noi riuscirebbe a fare benzina, pulire i vetri e comprare un gelato in due minuti di sosta?", titolo: "Pit stop umano" },
    { id: "mac-c15", q: "Chi di noi si fermerebbe in ogni paesino a comprare il formaggio tipico, finché la macchina non profuma di stalla?", titolo: "Caseificio a quattro ruote" }
  ]
});

/* ---------------------------------------------------------
   I COMUNI (non sono domande: non si mescolano mai nei posti)
   - missione: il gran finale «Passa il ritratto!». Il gioco scrive davanti «Trasforma {P} in:».
   - voce: le righe della Voce negli svelamenti, divise per «quando».
   --------------------------------------------------------- */
SG_CHIDINOI.comuni.push(
  { id: "fin-001", tipo: "missione", q: "la sirena che ha perso il traghetto" },
  { id: "fin-002", tipo: "missione", q: "il re della sagra della porchetta" },
  { id: "fin-003", tipo: "missione", q: "il pirata col mal di mare e il secchiello" },
  { id: "fin-004", tipo: "missione", q: "il vampiro che dorme con la lucina accesa" },
  { id: "fin-005", tipo: "missione", q: "il supereroe in pensione con le pantofole" },
  { id: "fin-006", tipo: "missione", q: "lo chef stellato che ha bruciato la pasta" },
  { id: "fin-007", tipo: "missione", q: "l'astronauta in vacanza a Rimini" },
  { id: "fin-008", tipo: "missione", q: "il cowboy sul cavallo a dondolo" },
  { id: "fin-009", tipo: "missione", q: "il mago a cui è scappato il coniglio" },
  { id: "fin-010", tipo: "missione", q: "la regina del condominio coi bigodini" },
  { id: "fin-011", tipo: "missione", q: "il fantasma che stende le lenzuola al sole" },
  { id: "fin-012", tipo: "missione", q: "l'alieno in gita a Venezia" },
  { id: "fin-013", tipo: "missione", q: "il gladiatore armato di cono gelato" },
  { id: "fin-014", tipo: "missione", q: "il cavaliere con l'armatura di cartone" },
  { id: "fin-015", tipo: "missione", q: "il clown con le scarpe lunghe due metri" },
  { id: "fin-016", tipo: "missione", q: "la statua del parco piena di piccioni" },
  { id: "fin-017", tipo: "missione", q: "il dinosauro che va in bicicletta" },
  { id: "fin-018", tipo: "missione", q: "il campione olimpico di lancio della ciabatta" },
  { id: "fin-019", tipo: "missione", q: "il pilota di Formula 1 sul triciclo" },
  { id: "fin-020", tipo: "missione", q: "il direttore d'orchestra col mestolo" },
  { id: "fin-021", tipo: "missione", q: "lo scienziato subito dopo l'esplosione" },
  { id: "fin-022", tipo: "missione", q: "l'uomo delle caverne che scopre il telefono" },
  { id: "fin-023", tipo: "missione", q: "la rockstar con la chitarra a forma di salame" },
  { id: "fin-024", tipo: "missione", q: "il detective con tre lenti d'ingrandimento" },
  { id: "fin-025", tipo: "missione", q: "il pinguino in spiaggia a Ferragosto" },
  { id: "fin-026", tipo: "missione", q: "il robot arrugginito sotto la pioggia" },
  { id: "fin-027", tipo: "missione", q: "il principe rimasto mezzo ranocchio" },
  { id: "fin-028", tipo: "missione", q: "il boscaiolo con gli uccellini nella barba" },
  { id: "fin-029", tipo: "missione", q: "il maestro di sci in ciabatte" },
  { id: "fin-030", tipo: "missione", q: "il mostro dell'armadio con la copertina" },
  { id: "fin-031", tipo: "missione", q: "il paparazzo travestito da cespuglio" },
  { id: "fin-032", tipo: "missione", q: "il calciatore che esulta dopo un autogol" },
  { id: "fin-033", tipo: "missione", q: "il leone appena uscito dal parrucchiere" },
  { id: "fin-034", tipo: "missione", q: "la strega che vola sull'aspirapolvere" },
  { id: "fin-035", tipo: "missione", q: "il gelataio col gelato caduto in testa" },
  { id: "fin-036", tipo: "missione", q: "il turista con sei macchine fotografiche" },
  { id: "fin-037", tipo: "missione", q: "la star di Sanremo col vestito di piume" },
  { id: "fin-038", tipo: "missione", q: "il nonno che fa il DJ in discoteca" },
  { id: "fin-039", tipo: "missione", q: "il ninja coi campanellini" },
  { id: "fin-040", tipo: "missione", q: "la principessa che ripara il trattore" },
  { id: "fin-041", tipo: "missione", q: "il barboncino appena uscito dal toelettatore" },
  { id: "fin-042", tipo: "missione", q: "il gatto che ha appena rubato il pesce" },
  { id: "fin-043", tipo: "missione", q: "la Gioconda che si fa un selfie" },
  { id: "fin-044", tipo: "missione", q: "la renna di Babbo Natale col naso spento" },
  { id: "fin-045", tipo: "missione", q: "l'unicorno con la criniera appena fatta" },
  { id: "fin-046", tipo: "missione", q: "il re di cuori con la corona storta" },
  { id: "fin-047", tipo: "missione", q: "il cavallo che ha appena vinto il Palio" },
  { id: "fin-048", tipo: "missione", q: "l'influencer col filtro gattino incollato" },
  { id: "fin-049", tipo: "missione", q: "il portiere che para con la faccia" },
  { id: "fin-050", tipo: "missione", q: "il pompiere che salva un gatto dal lampadario" },
  { id: "fin-051", tipo: "missione", q: "il bagnino coi braccioli" },
  { id: "fin-052", tipo: "missione", q: "l'ape regina in ritardo per il lavoro" },
  { id: "fin-053", tipo: "missione", q: "il drago che sputa solo bolle di sapone" },
  { id: "fin-054", tipo: "missione", q: "l'esploratore perso al supermercato" },
  { id: "fin-055", tipo: "missione", q: "l'imperatore romano in accappatoio" },
  { id: "fin-056", tipo: "missione", q: "il sub che ha trovato un tesoro di bottoni" },
  { id: "fin-057", tipo: "missione", q: "il re del barbecue con la griglia in fiamme" },
  { id: "fin-058", tipo: "missione", q: "la mascotte della squadra sotto la pioggia" },
  { id: "fin-059", tipo: "missione", q: "il mimo chiuso nella scatola invisibile" },
  { id: "fin-060", tipo: "missione", q: "l'orso che ha appena finito il miele" },
  { id: "fin-061", tipo: "missione", q: "la zebra che ha sbagliato le strisce" },
  { id: "fin-062", tipo: "missione", q: "il vichingo che ha paura dell'acqua" },
  { id: "fin-063", tipo: "missione", q: "il camaleonte seduto sulla tovaglia a quadri" },
  { id: "fin-064", tipo: "missione", q: "la nonna motociclista col casco a fiori" },
  { id: "fin-065", tipo: "missione", q: "il genio della lampada con la lampada scarica" },
  { id: "fin-066", tipo: "missione", q: "lo spaventapasseri pettinato dai corvi" },
  { id: "fin-067", tipo: "missione", q: "il re del karaoke col microfono a banana" },
  { id: "fin-068", tipo: "missione", q: "il marinaio coi tatuaggi di cuoricini" },
  { id: "fin-069", tipo: "missione", q: "il cagnolino col cappottino e gli stivaletti" },
  { id: "fin-070", tipo: "missione", q: "il pizzaiolo che fa girare la pizza sul dito" },
  { id: "fin-071", tipo: "missione", q: "la cartomante con la sfera di vetro appannata" },
  { id: "fin-072", tipo: "missione", q: "il cantante di serenate al balcone sbagliato" },
  { id: "fin-073", tipo: "missione", q: "il capitano di nave nella vasca da bagno" },
  { id: "fin-074", tipo: "missione", q: "il tennista con la racchetta di spaghetti" },
  { id: "fin-075", tipo: "missione", q: "la fata madrina con l'incantesimo sbagliato" },
  { id: "fin-076", tipo: "missione", q: "l'assaggiatore ufficiale di gelati" },
  { id: "fin-077", tipo: "missione", q: "la copertina di «Trattori oggi»" },
  { id: "fin-078", tipo: "missione", q: "il gufo dopo la notte in bianco" },
  { id: "fin-079", tipo: "missione", q: "il koala che non vuole scendere dall'albero" },
  { id: "fin-080", tipo: "missione", q: "il sollevatore di pesi coi palloncini" },
  { id: "fin-081", tipo: "missione", q: "il Re Sole coperto di crema solare" },
  { id: "fin-082", tipo: "missione", q: "l'atleta con la medaglia di cioccolato" },
  { id: "fin-083", tipo: "missione", q: "il polpo che fa il giocoliere" },
  { id: "fin-084", tipo: "missione", q: "il dentista dei coccodrilli" },
  { id: "fin-085", tipo: "missione", q: "la mucca premiata alla fiera, con la coccarda" },
  { id: "fin-086", tipo: "missione", q: "il nuotatore con la cuffia e la paperella" },
  { id: "fin-087", tipo: "missione", q: "il meteorologo travolto dal vento" },
  { id: "fin-088", tipo: "missione", q: "il pescatore che ha preso uno stivale" },
  { id: "fin-089", tipo: "missione", q: "il robot da cucina che ha preso vita" },
  { id: "fin-090", tipo: "missione", q: "la palla da discoteca in carne e ossa" },
  { id: "fin-091", tipo: "missione", q: "il pappagallo che fa il presentatore" },
  { id: "fin-092", tipo: "missione", q: "il cammello con le valigie sulla gobba" },
  { id: "fin-093", tipo: "missione", q: "il fornaio con l'impasto lievitato troppo" },
  { id: "fin-094", tipo: "missione", q: "il campione di nascondino dietro un lampione" },
  { id: "fin-095", tipo: "missione", q: "la torta di compleanno con le gambe" },
  { id: "fin-096", tipo: "missione", q: "il domatore di pulci del circo" },
  { id: "fin-097", tipo: "missione", q: "il postino inseguito da un'oca" },
  { id: "fin-098", tipo: "missione", q: "la Befana col monopattino elettrico" },
  { id: "fin-099", tipo: "missione", q: "la gallina che ha fatto l'uovo d'oro" },
  { id: "fin-100", tipo: "missione", q: "il vulcano col raffreddore" },
  { id: "fin-101", tipo: "missione", q: "la nuvola di pioggia di cattivo umore" },
  { id: "fin-102", tipo: "missione", q: "il semaforo che non sa più che colore fare" },
  { id: "fin-103", tipo: "missione", q: "il cactus che vuole un abbraccio" },
  { id: "fin-104", tipo: "missione", q: "il fantino arrivato ultimo, ma con stile" },
  { id: "fin-105", tipo: "missione", q: "l'alunn{o|a} dell'asilo truccat{o|a} coi pennarelli" },
  { id: "fin-106", tipo: "missione", q: "l{o|a} spos{o|a} pien{o|a} di coriandoli" },
  { id: "fin-107", tipo: "missione", q: "il prof che cerca gli occhiali (sulla testa)" },
  { id: "fin-108", tipo: "missione", q: "il fuoco d'artificio che non vuole partire" },
  { id: "fin-109", tipo: "missione", q: "l'orco che fa il pane in casa" },
  { id: "fin-110", tipo: "missione", q: "la lumaca col turbo" },

  { id: "voc-01", tipo: "voce", quando: "tutti", q: "Tutti d'accordo! {P}, per noi sei un libro aperto." },
  { id: "voc-02", tipo: "voce", quando: "tutti", q: "Unanimità! Neanche a Natale siete mai stati così d'accordo." },
  { id: "voc-03", tipo: "voce", quando: "tutti", q: "Tutti sulla stessa carta. Su {P} non ci sono dubbi." },
  { id: "voc-04", tipo: "voce", quando: "tutti", q: "Coro perfetto. Se fosse Sanremo, avreste vinto voi." },
  { id: "voc-05", tipo: "voce", quando: "tutti", q: "Tutti uguali! {P}, sei prevedibile come il ragù la domenica." },
  { id: "voc-06", tipo: "voce", quando: "tutti", q: "Accordo totale. Segnatevi la data: non ricapita." },
  { id: "voc-07", tipo: "voce", quando: "tutti", q: "Tutti d'accordo. Avete copiato o vi conoscete troppo bene?" },
  { id: "voc-08", tipo: "voce", quando: "anarchia", q: "Anarchia! A quanto pare {P} ha mille facce." },
  { id: "voc-09", tipo: "voce", quando: "anarchia", q: "Nessuno uguale a nessuno. Siete sicuri di essere amici?" },
  { id: "voc-10", tipo: "voce", quando: "anarchia", q: "Nessuno d'accordo: sembra una riunione di condominio." },
  { id: "voc-11", tipo: "voce", quando: "anarchia", q: "Anarchia totale. {P}, sei un mistero anche per loro." },
  { id: "voc-12", tipo: "voce", quando: "anarchia", q: "Ognuno per conto suo. Stasera il gruppo WhatsApp sarà caldo." },
  { id: "voc-13", tipo: "voce", quando: "anarchia", q: "Che confusione! Qui ci vorrebbe un arbitro col fischietto." },
  { id: "voc-14", tipo: "voce", quando: "anarchia", q: "Zero accordo. Ottimo: almeno nessuno ha copiato." },
  { id: "voc-15", tipo: "voce", quando: "jolly", q: "Pioggia di jolly sulla stessa carta! Qui qualcuno sapeva." },
  { id: "voc-16", tipo: "voce", quando: "jolly", q: "Full di jolly! Che fiducia… o che fortuna." },
  { id: "voc-17", tipo: "voce", quando: "jolly", q: "Tutti questi jolly lì sopra: su {P} siete pronti a giurare." },
  { id: "voc-18", tipo: "voce", quando: "jolly", q: "Jolly a pioggia! I punti volano come coriandoli." },
  { id: "voc-19", tipo: "voce", quando: "jolly", q: "Jolly calati come assi a briscola. Colpo grosso!" },
  { id: "voc-20", tipo: "voce", quando: "jolly", q: "Tre jolly sulla stessa carta: questo sì che è gioco di squadra." },
  { id: "voc-21", tipo: "voce", quando: "vuoto", q: "Nessuno ha avuto il coraggio… Andiamo avanti in silenzio." },
  { id: "voc-22", tipo: "voce", quando: "vuoto", q: "Foglio bianco. Arte moderna, dicono." },
  { id: "voc-23", tipo: "voce", quando: "vuoto", q: "Niente di niente. Stasera anche le matite fanno sciopero." },
  { id: "voc-24", tipo: "voce", quando: "vuoto", q: "Zero risposte. Avete visto un fantasma?" },
  { id: "voc-25", tipo: "voce", quando: "vuoto", q: "Tutti muti! {P} vi ha lasciati senza parole." },
  { id: "voc-26", tipo: "voce", quando: "vuoto", q: "Il vuoto. Lo appendiamo in un museo e passiamo oltre." },
  { id: "voc-27", tipo: "voce", quando: "sintonia", q: "{P} la pensa come voi: vi conoscete da troppo tempo." },
  { id: "voc-28", tipo: "voce", quando: "sintonia", q: "Stessa carta per {P} e per il gruppo. Che armonia." },
  { id: "voc-29", tipo: "voce", quando: "sintonia", q: "Anche {P} ha scelto quella. Almeno nessuno si offende." },
  { id: "voc-30", tipo: "voce", quando: "sintonia", q: "{P} è d'accordo con voi. Era una confessione?" },
  { id: "voc-31", tipo: "voce", quando: "sintonia", q: "Perfetta sintonia: {P} sa benissimo di che pasta è fatt{o|a}." },
  { id: "voc-32", tipo: "voce", quando: "sintonia", q: "{P} conferma. Il gruppo ha sempre ragione." },
  { id: "voc-33", tipo: "voce", quando: "sintonia", q: "{P} e voi sulla stessa carta: ci sta un selfie di gruppo." },
  { id: "voc-34", tipo: "voce", quando: "solo", q: "{P}, questa scelta è solo tua. Chi ti conosce davvero?" },
  { id: "voc-35", tipo: "voce", quando: "solo", q: "{P} si vede in un modo, il gruppo in un altro. Ne parliamo?" },
  { id: "voc-36", tipo: "voce", quando: "solo", q: "{P} da una parte, tutti gli altri dall'altra. Classico." },
  { id: "voc-37", tipo: "voce", quando: "solo", q: "Solo {P} ha scelto quella. Gli amici non ci credono." },
  { id: "voc-38", tipo: "voce", quando: "solo", q: "{P}, ti stai raccontando una bella favola." },
  { id: "voc-39", tipo: "voce", quando: "solo", q: "Nessuno ti vede così, {P}. Neanche la mamma." },
  { id: "voc-40", tipo: "voce", quando: "solo", q: "{P} ha scelto da sol{o|a}. Il mistero resta." }
);

/* =========================================================
   «Chi di Noi?» — I DISEGNI (scene dei 20 posti, costumi, personaggi pronti, facce)
   window.SG_CDN_ARTE:
   - faccia(p, o)       -> src per <img>: LA FACCIA di un giocatore (punto unico).
                           Oggi l'avatar del profilo (busto); domani (passo B) la foto col filtro:
                           se SG_CDN_ARTE.foto(p.id, o) torna un src, si usa quello.
                           p = { id, nome, omino }   o = { posto, faccia, piu, intero }
   - persona(carta, seme) -> src del personaggio pronto (carta "persona" delle Immagini)
   - scena(idPosto, w, h) -> canvas con la scena del posto (fatto una volta e tenuto da parte)
   - scenaSrc(idPosto)  -> la stessa scena come immagine (per <img> e sfondi)
   - COSTUMI, PERSONAGGI, FACCE, FESTA (adesivi del gran finale)
   Animazioni: niente qui dentro (solo immagini ferme).
   ========================================================= */
(function () {
  "use strict";

  // ---------- i costumi di chi è sotto torchio, posto per posto (solo pezzi che l'avatar ha già) ----------
  var COSTUMI = {
    prigione: { capo: "maglietta", maglia: 9, stampa: "righe" },
    bosco: { cappello: "pescatore", capo: "felpa", maglia: 2 },
    treno: { occhiali: "mascherina", capo: "felpa", maglia: 1 },
    villa: { cappello: "aureola", capo: "maglione", maglia: 7 },
    isola: { cappello: "paglia", capo: "canotta", maglia: 6 },
    matrimonio: { capo: "giacca", cappello: "cilindro", maglia: 7, collo: "papillon" },
    pranzo: { capo: "grembiule", maglia: 0 },
    condominio: { capo: "maglione", modScarpe: "pantofole", maglia: 3 },
    sagra: { cappello: "coppola", capo: "camicia", stampa: "quadri", maglia: 0 },
    pronto: { segno: "cerotto", capo: "maglietta", maglia: 6 },
    crociera: { occhiali: "sole", capo: "camicia", stampa: "fiori", maglia: 1 },
    reality: { occhiali: "stelle", capo: "giacca", maglia: 5 },
    gita: { cappello: "cappellino", capo: "felpa", maglia: 3 },
    spiaggia: { occhiali: "sole", capo: "canotta", modScarpe: "infradito", maglia: 0 },
    appuntamento: { occhiali: "cuore", capo: "camicia", maglia: 0 },
    calcetto: { capo: "calcio", stampa: "numero", sotto: "pantaloncini", cappello: "fascia", maglia: 1 },
    sabato: { capo: "giacca", occhiali: "stelle", maglia: 4 },
    ufficio: { capo: "camicia", collo: "cravatta", occhiali: "quadrati", maglia: 8 },
    compleanno: { cappello: "festa", mano: "palloncino", capo: "maglietta", stampa: "stella", maglia: 5 },
    macchina: { occhiali: "aviatore", cappello: "cappellino", capo: "polo", maglia: 6 }
  };

  // ---------- i personaggi pronti (carte "persona"): f = forma fissa ("donna"/"uomo"), il resto è il costume ----------
  var PERSONAGGI = {
    nonna: { f: "donna", c: { capelli: "chignon", colCap: 6, capo: "cardigan", maglia: 5, collo: "perle", segno: "rughe" } },
    nonno: { f: "uomo", c: { capelli: "stempiato", colCap: 6, barba: "baffi", capo: "gilet", cappello: "coppola", segno: "rughe", maglia: 7 } },
    mamma: { f: "donna", c: { capo: "grembiule", maglia: 5 } },
    papa: { f: "uomo", c: { capo: "polo", occhiali: "sole", maglia: 1 } },
    zia: { f: "donna", c: { capelli: "boccoli", capo: "vestito", maglia: 4, collo: "perle", borsa: "borsetta" } },
    zio: { f: "uomo", c: { capo: "camicia", cappello: "borsalino", maglia: 8, barba: "baffi" } },
    bimbo: { c: { capo: "maglietta", stampa: "stella", cappello: "cappellino", mano: "palloncino", barba: "no", corpo: "snello", maglia: 3 } },
    cugino: { c: { capo: "felpa", collo: "cuffiecollo", maglia: 7 } },
    vicino: { c: { capo: "maglione", modScarpe: "pantofole", cappello: "mollette", maglia: 2 } },
    detenuto: { c: { capo: "maglietta", maglia: 9, stampa: "righe" } },
    secondino: { c: { capo: "camicia", maglia: 1, cappello: "visiera", collo: "fischietto" } },
    poliziotto: { c: { capo: "camicia", maglia: 1, cappello: "visiera", occhiali: "aviatore" } },
    giudice: { c: { capo: "giacca", maglia: 7, collo: "papillon", mano: "libro" } },
    avvocato: { c: { capo: "giacca", maglia: 7, collo: "cravatta", borsa: "tracolla" } },
    vigile: { c: { capo: "giacca", maglia: 8, cappello: "visiera", collo: "fischietto" } },
    cuoco: { c: { cappello: "chef", capo: "grembiule", maglia: 8 } },
    cameriere: { c: { capo: "camicia", maglia: 8, collo: "papillon" } },
    dottore: { c: { capo: "cappotto", maglia: 8, occhiali: "tondi", collo: "nessuno" } },
    infermiere: { c: { capo: "maglietta", maglia: 6 } },
    prof: { c: { capo: "cardigan", occhiali: "quadrati", mano: "libro", maglia: 3 } },
    bidello: { c: { capo: "grembiule", maglia: 7, cappello: "nessuno" } },
    controllore: { c: { capo: "giacca", maglia: 1, cappello: "visiera" } },
    autista: { c: { capo: "camicia", occhiali: "aviatore", maglia: 1 } },
    corriere: { c: { cappello: "cappellino", borsa: "tracolla", capo: "polo", maglia: 3 } },
    capo: { c: { capo: "giacca", collo: "cravatta", mano: "tazza", maglia: 7 } },
    impiegato: { c: { capo: "camicia", collo: "cravatta", occhiali: "quadrati", maglia: 1 } },
    contadino: { c: { cappello: "paglia", capo: "camicia", stampa: "quadri", maglia: 0 } },
    meccanico: { c: { capo: "sportiva", sotto: "tuta", cappello: "cappellino", maglia: 1 } },
    cantante: { c: { mano: "microfono", occhiali: "stelle", capo: "giacca", maglia: 5 } },
    rockstar: { c: { schiena: "chitarra", capo: "bomber", occhiali: "sole", maglia: 7 } },
    dj: { c: { cappello: "cuffie", occhiali: "sole", capo: "felpa", maglia: 4 } },
    ballerino: { c: { capo: "gilet", collo: "papillon", maglia: 0 } },
    animatore: { c: { capo: "maglietta", stampa: "smile", collo: "fischietto", maglia: 3 } },
    clown: { c: { pittura: "clown", cappello: "festa", capo: "maglietta", stampa: "pois", maglia: 0 } },
    mago: { c: { cappello: "mago", schiena: "mantello", mano: "bacchetta", maglia: 4 } },
    presentatore: { c: { capo: "giacca", collo: "papillon", mano: "microfono", maglia: 4 } },
    influencer: { c: { mano: "telefono", occhiali: "cuore", capo: "crop", maglia: 5 } },
    sposo: { c: { capo: "giacca", cappello: "cilindro", maglia: 7, collo: "papillon" }, d: { capo: "vestitolungo", maglia: 8, cappello: "tiara", collo: "perle" } },
    elegante: { c: { capo: "giacca", collo: "cravatta", maglia: 1 }, d: { capo: "vestito", collo: "perle", maglia: 0 } },
    buttafuori: { c: { capo: "maglietta", maglia: 7, occhiali: "sole" } },
    calciatore: { c: { capo: "calcio", stampa: "numero", mano: "pallone", sotto: "pantaloncini", maglia: 0 } },
    arbitro: { c: { capo: "maglietta", maglia: 7, collo: "fischietto" } },
    allenatore: { c: { capo: "sportiva", cappello: "cappellino", collo: "fischietto", maglia: 2 } },
    bagnino: { c: { capo: "canotta", maglia: 0, collo: "fischietto", occhiali: "sole" } },
    capitano: { c: { capo: "giacca", maglia: 8, cappello: "visiera" } },
    pirata: { c: { cappello: "pirata", occhiali: "benda", capo: "camicia", maglia: 8 } },
    pescatore: { c: { cappello: "pescatore", capo: "gilet", maglia: 2 } },
    scout: { c: { collo: "foulard", schiena: "zaino", cappello: "cowboy", capo: "camicia", maglia: 2 } },
    turista: { c: { capo: "camicia", stampa: "fiori", cappello: "paglia", mano: "telefono", maglia: 6 } },
    cowboy: { c: { cappello: "cowboy", collo: "bandana", capo: "camicia", stampa: "quadri", maglia: 0 } },
    vichingo: { c: { cappello: "vichingo", capo: "gilet", maglia: 9 } },
    supereroe: { c: { capo: "supereroe", schiena: "mantello", maglia: 1 } },
    re: { c: { cappello: "corona", schiena: "mantello", capo: "giacca", maglia: 4 } },
    babbo: { f: "uomo", c: { cappello: "babbo", barba: "barbalunga", colCap: 11, capo: "cappotto", maglia: 0 } }
  };

  // ---------- le 16 facce (occhi, bocca, sopracciglia, braccia) ----------
  var FACCE = {
    felice: { occhi: "felici", bocca: "sorrisone", sopracc: "morbide" },
    estasi: { occhi: "stelline", bocca: "risata", sopracc: "alzate", braccia: "su" },
    innamorato: { occhi: "stelline", bocca: "baciotto", sopracc: "arcuate", guance: "rosse" },
    finto: { occhi: "tondi", bocca: "nervoso", sopracc: "preoccupate" },
    furbo: { occhi: "furbi", bocca: "ghigno", sopracc: "arcuate" },
    sorpreso: { occhi: "grandi", bocca: "o", sopracc: "alzate" },
    linguaccia: { occhi: "occhiolino", bocca: "linguaccia", sopracc: "alzate" },
    esulta: { occhi: "chiusi", bocca: "risata", sopracc: "alzate", braccia: "su" },
    terrore: { occhi: "grandi", bocca: "nervoso", sopracc: "preoccupate" },
    disgusto: { occhi: "assonnati", bocca: "smorfia", sopracc: "unite" },
    arrabbiato: { occhi: "furbi", bocca: "dentoni", sopracc: "arrabbiate" },
    triste: { occhi: "tristi", bocca: "triste", sopracc: "preoccupate" },
    sonno: { occhi: "assonnati", bocca: "neutro", sopracc: "morbide" },
    imbarazzo: { occhi: "chiusi", bocca: "mordilabbro", sopracc: "preoccupate", guance: "rosse" },
    indifferente: { occhi: "puntini", bocca: "neutro", sopracc: "dritte" },
    pensieroso: { occhi: "tondi", bocca: "sorrisetto", sopracc: "alzate" }
  };
  // con la foto (passo B) la faccia diventa un adesivo sopra il viso
  var FACCE_EMOJI = { felice: "😄", estasi: "😍", innamorato: "😍", finto: "🙂", furbo: "😏", sorpreso: "😮", linguaccia: "😜", esulta: "🎉",
    terrore: "😱", disgusto: "🤢", arrabbiato: "😤", triste: "😢", sonno: "😴", imbarazzo: "😳", indifferente: "😐", pensieroso: "🤔" };

  // gli adesivi del gran finale «Passa il ritratto!»
  var FESTA = "👑🎩🕶️🥸🎀💄🦄🐱🐶🌈⭐💥🔥❤️💬🎈🍕🦖";

  var PIU_OK = { cappello: 1, occhiali: 1, collo: 1, mano: 1, schiena: 1, animale: 1, pittura: 1, stampa: 1 };
  function copia(o) { var c = {}; for (var k in o) c[k] = o[k]; return c; }
  function metti(c, o) { if (o) for (var k in o) if (o[k] != null) c[k] = o[k]; return c; }
  function piuOk(piu) { var r = {}; if (piu) for (var k in piu) if (PIU_OK[k] && window.SGOmino && SGOmino.OPZ[k] && SGOmino.OPZ[k].indexOf(piu[k]) >= 0) r[k] = piu[k]; return r; }
  var CACHE = {}, NC = 0;
  function svgSrc(cfg, opz) {
    var k = JSON.stringify(cfg) + "|" + JSON.stringify(opz || {});
    if (CACHE[k] != null) return CACHE[k];
    if (++NC > 600) { CACHE = {}; NC = 0; }
    var s = "";
    try { s = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(SGOmino.svg(cfg, opz || { busto: true })); } catch (e) { s = ""; }
    return (CACHE[k] = s);
  }

  // =========================================================
  //  LA FACCIA DI UN GIOCATORE — il punto unico dove si attacca la foto vera
  //  o.posto: id del posto (mette il costume), o.faccia: espressione, o.piu: pezzi in più, o.intero: avatar intero (non solo busto)
  // =========================================================
  function faccia(p, o) {
    o = o || {}; p = p || {};
    var A = window.SG_CDN_ARTE;
    if (A && typeof A.foto === "function") { try { var f = A.foto(p.id, o, p); if (f) return f; } catch (e) {} }   // la foto col filtro (js/chidinoi-foto.js)
    if (!window.SGOmino) return "";
    var cfg = copia(p.omino && typeof p.omino === "object" ? p.omino : SGOmino.casuale(p.nome || p.id || "?"));
    var fx = o.faccia && FACCE[o.faccia], br = null;
    if (o.posto && COSTUMI[o.posto]) { var cs = copia(COSTUMI[o.posto]); if (fx) delete cs.occhiali; metti(cfg, cs); }   // con una faccia da mostrare, gli occhiali del costume non coprono gli occhi
    if (fx) { metti(cfg, { occhi: fx.occhi, bocca: fx.bocca, sopracc: fx.sopracc }); if (fx.guance) cfg.guance = fx.guance; br = fx.braccia || null; }
    metti(cfg, piuOk(o.piu));
    var opz = o.intero ? {} : { busto: true };
    if (br && o.intero) opz.braccia = br;
    return svgSrc(cfg, opz);
  }
  // un personaggio pronto: viso e capelli dal seme (uguale su tutti i telefoni), costume fisso, faccia e pezzi in più
  function persona(carta, seme) {
    if (!window.SGOmino) return "";
    var P = PERSONAGGI[carta.chi] || PERSONAGGI.cugino;
    var forma = P.f || (carta.f === "d" ? "donna" : carta.f === "u" ? "uomo" : (hash(seme) % 2 ? "donna" : "uomo"));
    var cfg = copia(SGOmino.casuale(String(seme), forma));
    ["cappello", "occhiali", "collo", "mano", "schiena", "animale", "pittura", "borsa"].forEach(function (k) { cfg[k] = k === "borsa" ? "nessuna" : (k === "schiena" || k === "pittura" ? "nessuna" : "nessuno"); });
    cfg.stampa = "nessuna";
    metti(cfg, forma === "donna" && P.d ? P.d : P.c);
    if (forma === "donna") cfg.barba = "no";
    var fx = carta.faccia && FACCE[carta.faccia];
    if (fx) { metti(cfg, { occhi: fx.occhi, bocca: fx.bocca, sopracc: fx.sopracc }); if (fx.guance) cfg.guance = fx.guance; }
    metti(cfg, piuOk(carta.piu));
    return svgSrc(cfg, { busto: true });
  }
  function hash(s) { var h = 2166136261; s = String(s); for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  // =========================================================
  //  LE SCENE (sfondi su canvas, disegnati una volta e tenuti)
  // =========================================================
  function em(c, e, x, y, s, rot) {
    c.save(); c.translate(x, y); if (rot) c.rotate(rot);
    c.font = Math.round(s) + "px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";
    c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(e, 0, 0); c.restore();
  }
  function gv(c, w, h, cols, x0, y0, x1, y1) {
    var g = c.createLinearGradient(x0 == null ? 0 : x0, y0 == null ? 0 : y0, x1 == null ? 0 : x1, y1 == null ? h : y1);
    cols.forEach(function (k, i) { g.addColorStop(i / (cols.length - 1), k); });
    return g;
  }
  function rett(c, x, y, w, h, col, r) {
    c.fillStyle = col; c.beginPath();
    if (r && c.roundRect) c.roundRect(x, y, w, h, r); else c.rect(x, y, w, h);
    c.fill();
  }
  function cerchio(c, x, y, r, col) { c.fillStyle = col; c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill(); }
  function bagliore(c, x, y, r, col) {
    var g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, col); g.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2);
  }
  function pavimento(c, w, h, y, col1, col2) { c.fillStyle = gv(c, w, h, [col1, col2], 0, y, 0, h); c.fillRect(0, y, w, h - y); }
  function lucine(c, w, y, n, cols, r) {
    c.strokeStyle = "rgba(0,0,0,.35)"; c.lineWidth = Math.max(1, r * 0.3); c.beginPath(); c.moveTo(0, y);
    for (var i = 0; i <= n; i++) c.quadraticCurveTo((i - 0.5) * w / n, y + r * 3, i * w / n, y);
    c.stroke();
    for (var j = 0; j < n; j++) { var x = (j + 0.5) * w / n, yy = y + r * 1.6; bagliore(c, x, yy, r * 3.2, cols[j % cols.length] + "88"); cerchio(c, x, yy, r, cols[j % cols.length]); }
  }

  // ogni pittore riceve (c, w, h, m) con m = min(w, h): disegna in proporzione
  var SCENE = {
    prigione: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#6d8099", "#3a4a61"]); c.fillRect(0, 0, w, h);
      c.strokeStyle = "rgba(255,255,255,.08)"; c.lineWidth = 2;
      for (var y = 0; y < h * 0.72; y += m * 0.07) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); for (var x = (y / (m * 0.07)) % 2 ? 0 : m * 0.07; x < w; x += m * 0.14) { c.beginPath(); c.moveTo(x, y); c.lineTo(x, y + m * 0.07); c.stroke(); } }
      rett(c, w * 0.62, h * 0.1, w * 0.26, h * 0.2, "#1b2a4a", 6); em(c, "🌙", w * 0.75, h * 0.2, m * 0.11);
      c.fillStyle = "#4b5563"; for (var i = 1; i < 5; i++) c.fillRect(w * 0.62 + i * w * 0.052 - 3, h * 0.1, 6, h * 0.2);
      pavimento(c, w, h, h * 0.72, "#525c6b", "#2d333d");
      em(c, "🛏️", w * 0.25, h * 0.7, m * 0.3); em(c, "🚽", w * 0.84, h * 0.76, m * 0.13);
      c.fillStyle = "rgba(30,36,46,.85)"; [0.02, 0.97].forEach(function (f) { c.fillRect(w * f - 5, 0, 10, h); });
    },
    bosco: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#4b2a6b", "#c4507a", "#ff9a4d"], 0, 0, 0, h * 0.7); c.fillRect(0, 0, w, h);
      cerchio(c, w * 0.7, h * 0.52, m * 0.14, "#ffd27a"); bagliore(c, w * 0.7, h * 0.52, m * 0.35, "rgba(255,210,122,.5)");
      c.fillStyle = "#2a1f3d";
      for (var i = 0; i < 9; i++) { var x = i * w / 8 + (i % 2) * w * 0.03, hh = h * (0.3 + (i * 37 % 13) / 40); c.beginPath(); c.moveTo(x, h * 0.75 - hh); c.lineTo(x - m * 0.09, h * 0.76); c.lineTo(x + m * 0.09, h * 0.76); c.fill(); }
      pavimento(c, w, h, h * 0.74, "#2f5a33", "#16301a");
      em(c, "⛺", w * 0.28, h * 0.74, m * 0.3); em(c, "🔥", w * 0.66, h * 0.84, m * 0.14); bagliore(c, w * 0.66, h * 0.84, m * 0.22, "rgba(255,150,40,.45)");
    },
    treno: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#22305a", "#141c3a"]); c.fillRect(0, 0, w, h);
      rett(c, w * 0.12, h * 0.1, w * 0.76, h * 0.34, "#0a0f24", m * 0.04);
      for (var i = 0; i < 26; i++) { var x = w * 0.14 + (i * 97 % 70) / 100 * w, y = h * 0.14 + (i * 53 % 26) / 100 * h; c.fillStyle = i % 3 ? "rgba(255,214,120,.9)" : "rgba(140,190,255,.8)"; c.fillRect(x, y, m * 0.05, 2); }
      c.strokeStyle = "#8d6e4c"; c.lineWidth = m * 0.02; c.strokeRect(w * 0.12, h * 0.1, w * 0.76, h * 0.34);
      rett(c, 0, h * 0.5, w * 0.48, h * 0.1, "#6d4c3a", 6); rett(c, 0, h * 0.74, w * 0.48, h * 0.1, "#6d4c3a", 6);
      rett(c, w * 0.02, h * 0.47, w * 0.42, h * 0.05, "#e6e1d6", 8); rett(c, w * 0.02, h * 0.71, w * 0.42, h * 0.05, "#e6e1d6", 8);
      pavimento(c, w, h, h * 0.86, "#3a2f2a", "#231c18");
      em(c, "🧳", w * 0.78, h * 0.78, m * 0.18); em(c, "🧸", w * 0.18, h * 0.44, m * 0.09);
    },
    villa: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#2b1840", "#3e2a5c", "#1f3a33"]); c.fillRect(0, 0, w, h);
      c.fillStyle = "#1a0f26"; c.beginPath(); c.moveTo(0, 0); c.lineTo(w / 2, h * 0.08); c.lineTo(w, 0); c.lineTo(w, h * 0.04); c.lineTo(w / 2, h * 0.14); c.lineTo(0, h * 0.04); c.fill();
      bagliore(c, w * 0.5, h * 0.35, m * 0.45, "rgba(170,255,190,.18)");
      em(c, "🕸️", w * 0.1, h * 0.1, m * 0.2); em(c, "🕸️", w * 0.9, h * 0.12, m * 0.16, 1.2);
      pavimento(c, w, h, h * 0.75, "#3b2a2a", "#1c1414");
      em(c, "🕯️", w * 0.22, h * 0.66, m * 0.18); bagliore(c, w * 0.22, h * 0.58, m * 0.2, "rgba(255,200,90,.45)");
      em(c, "🪞", w * 0.72, h * 0.55, m * 0.28); em(c, "🦇", w * 0.55, h * 0.2, m * 0.1, -0.3);
    },
    isola: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#4fc3f7", "#b3ecff"], 0, 0, 0, h * 0.55); c.fillRect(0, 0, w, h);
      cerchio(c, w * 0.82, h * 0.14, m * 0.08, "#fff6b0"); bagliore(c, w * 0.82, h * 0.14, m * 0.25, "rgba(255,246,176,.6)");
      c.fillStyle = gv(c, w, h, ["#1e88c8", "#0d5b99"], 0, h * 0.5, 0, h * 0.72); c.fillRect(0, h * 0.5, w, h * 0.24);
      c.strokeStyle = "rgba(255,255,255,.6)"; c.lineWidth = 2; for (var i = 0; i < 6; i++) { c.beginPath(); var y = h * (0.55 + i * 0.03); c.moveTo(w * ((i * 31) % 70) / 100, y); c.lineTo(w * ((i * 31) % 70) / 100 + w * 0.15, y); c.stroke(); }
      c.fillStyle = gv(c, w, h, ["#ffe7a8", "#e9c27a"], 0, h * 0.7, 0, h); c.beginPath(); c.moveTo(0, h * 0.74); c.quadraticCurveTo(w / 2, h * 0.64, w, h * 0.74); c.lineTo(w, h); c.lineTo(0, h); c.fill();
      em(c, "🌴", w * 0.22, h * 0.56, m * 0.42); em(c, "🐚", w * 0.7, h * 0.86, m * 0.09); em(c, "🦀", w * 0.84, h * 0.8, m * 0.1);
    },
    matrimonio: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#fffaf0", "#f3e3c3"]); c.fillRect(0, 0, w, h);
      c.strokeStyle = "#e3c27a"; c.lineWidth = m * 0.025; c.beginPath(); c.arc(w / 2, h * 0.5, w * 0.38, Math.PI, 0); c.stroke();
      for (var i = 0; i <= 10; i++) { var a = Math.PI + i * Math.PI / 10; em(c, i % 2 ? "🌸" : "🌼", w / 2 + Math.cos(a) * w * 0.38, h * 0.5 + Math.sin(a) * w * 0.38, m * 0.08); }
      pavimento(c, w, h, h * 0.7, "#e8d6b0", "#cdb383");
      rett(c, w * 0.05, h * 0.66, w * 0.9, h * 0.07, "#ffffff", 8);
      em(c, "🎂", w * 0.5, h * 0.6, m * 0.24); em(c, "🥂", w * 0.2, h * 0.63, m * 0.09); em(c, "💐", w * 0.8, h * 0.62, m * 0.1);
    },
    pranzo: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#f6d9a8", "#e8b97a"]); c.fillRect(0, 0, w, h);
      em(c, "🕰️", w * 0.82, h * 0.22, m * 0.2); rett(c, w * 0.08, h * 0.12, w * 0.3, h * 0.2, "#b98a5a", 6); em(c, "🖼️", w * 0.23, h * 0.22, m * 0.12);
      var y0 = h * 0.62, q = m * 0.07; c.fillStyle = "#fff"; c.fillRect(0, y0, w, h - y0);
      c.fillStyle = "#d63a3a"; for (var y = y0; y < h; y += q) for (var x = ((y - y0) / q) % 2 ? 0 : q; x < w; x += q * 2) c.fillRect(x, y, q, q);
      em(c, "🍝", w * 0.45, h * 0.7, m * 0.26); c.fillStyle = "rgba(255,255,255,.55)"; for (var i = 0; i < 3; i++) { c.beginPath(); c.ellipse(w * (0.4 + i * 0.05), h * (0.52 - i * 0.02), m * 0.015, m * 0.05, 0.3, 0, Math.PI * 2); c.fill(); }
      em(c, "🥖", w * 0.8, h * 0.76, m * 0.13);
    },
    condominio: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#d9d2c3", "#b8ae9a"]); c.fillRect(0, 0, w, h);
      rett(c, w * 0.62, h * 0.12, w * 0.3, h * 0.62, "#8a8f98", 6); c.fillStyle = "#6c717a"; c.fillRect(w * 0.77 - 2, h * 0.14, 4, h * 0.58); em(c, "🔼", w * 0.58, h * 0.4, m * 0.06);
      for (var i = 0; i < 6; i++) rett(c, w * (0.06 + (i % 3) * 0.12), h * (0.2 + Math.floor(i / 3) * 0.1), w * 0.1, h * 0.08, "#c58a3c", 4);
      rett(c, w * 0.08, h * 0.45, w * 0.32, h * 0.16, "#7a5a3a", 4); rett(c, w * 0.1, h * 0.47, w * 0.28, h * 0.12, "#f1e6c8", 3);
      em(c, "📌", w * 0.15, h * 0.49, m * 0.05); em(c, "📄", w * 0.28, h * 0.53, m * 0.07);
      pavimento(c, w, h, h * 0.75, "#a0522d", "#6e3820");
      c.strokeStyle = "rgba(0,0,0,.25)"; for (var s = 0; s < 4; s++) { c.beginPath(); c.moveTo(0, h * (0.78 + s * 0.06)); c.lineTo(w * 0.4, h * (0.78 + s * 0.06)); c.stroke(); }
      em(c, "🪴", w * 0.5, h * 0.72, m * 0.14);
    },
    sagra: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#121a44", "#3a1f5c"]); c.fillRect(0, 0, w, h);
      em(c, "🎡", w * 0.72, h * 0.38, m * 0.5); bagliore(c, w * 0.72, h * 0.38, m * 0.4, "rgba(255,120,200,.22)");
      lucine(c, w, h * 0.06, 9, ["#ff6b6b", "#ffd43b", "#69db7c", "#4dabf7", "#f783ac"], m * 0.018);
      pavimento(c, w, h, h * 0.72, "#4a3b2a", "#2a2018");
      rett(c, w * 0.04, h * 0.5, w * 0.36, h * 0.24, "#c92a2a", 6); c.fillStyle = "#fff"; for (var i = 0; i < 6; i++) c.fillRect(w * 0.04 + i * w * 0.06, h * 0.5, w * 0.03, h * 0.05);
      em(c, "🌭", w * 0.14, h * 0.65, m * 0.1); em(c, "🍭", w * 0.3, h * 0.65, m * 0.1); em(c, "🎈", w * 0.48, h * 0.3, m * 0.12);
    },
    pronto: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#e9fbf6", "#bfe9df"]); c.fillRect(0, 0, w, h);
      rett(c, w * 0.32, h * 0.08, w * 0.36, h * 0.14, "#173b3a", 8); c.fillStyle = "#ff5d5d"; c.font = "bold " + Math.round(m * 0.1) + "px sans-serif"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("N° 87", w * 0.5, h * 0.15);
      c.fillStyle = "#3aa58f"; c.fillRect(0, h * 0.4, w, h * 0.03);
      pavimento(c, w, h, h * 0.72, "#d5e7e2", "#a9c9c1");
      for (var i = 0; i < 5; i++) { rett(c, w * (0.04 + i * 0.19), h * 0.6, w * 0.16, h * 0.08, "#2b8a7a", 6); rett(c, w * (0.04 + i * 0.19), h * 0.5, w * 0.16, h * 0.11, "#35a593", 6); }
      em(c, "🚑", w * 0.84, h * 0.3, m * 0.14); em(c, "🩹", w * 0.16, h * 0.3, m * 0.1);
    },
    crociera: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#6fc8ff", "#e6f7ff"], 0, 0, 0, h * 0.45); c.fillRect(0, 0, w, h);
      c.fillStyle = "#0d4f8b"; c.fillRect(0, h * 0.4, w, h * 0.1);
      rett(c, 0, h * 0.48, w, h * 0.52, "#ffffff"); c.fillStyle = "#1c4f9c"; c.fillRect(0, h * 0.48, w, h * 0.02);
      for (var i = 0; i < 4; i++) { cerchio(c, w * (0.14 + i * 0.24), h * 0.6, m * 0.06, "#1c4f9c"); cerchio(c, w * (0.14 + i * 0.24), h * 0.6, m * 0.045, "#7fd0ff"); }
      rett(c, w * 0.1, h * 0.78, w * 0.8, h * 0.12, "#3ec6e0", 30);
      em(c, "🛟", w * 0.9, h * 0.32, m * 0.12); em(c, "⚓", w * 0.08, h * 0.32, m * 0.1); em(c, "🐬", w * 0.5, h * 0.42, m * 0.1);
    },
    reality: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#1d0b38", "#43106b"]); c.fillRect(0, 0, w, h);
      [[0.2, "#e64980"], [0.5, "#845ef7"], [0.8, "#22b8cf"]].forEach(function (s) {
        c.fillStyle = s[1] + "33"; c.beginPath(); c.moveTo(w * s[0] - m * 0.03, 0); c.lineTo(w * s[0] + m * 0.03, 0); c.lineTo(w * s[0] + m * 0.22, h * 0.8); c.lineTo(w * s[0] - m * 0.22, h * 0.8); c.fill();
      });
      pavimento(c, w, h, h * 0.74, "#2b1450", "#150828");
      em(c, "🛋️", w * 0.5, h * 0.7, m * 0.34); em(c, "🎥", w * 0.1, h * 0.25, m * 0.14); em(c, "🎥", w * 0.9, h * 0.25, m * 0.14, 0);
      em(c, "🌟", w * 0.5, h * 0.12, m * 0.1);
    },
    gita: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#8fd3ff", "#e8f7ff"]); c.fillRect(0, 0, w, h);
      rett(c, w * 0.52, h * 0.16, w * 0.44, h * 0.08, "#e9e2d0"); c.fillStyle = "#e9e2d0"; c.beginPath(); c.moveTo(w * 0.5, h * 0.17); c.lineTo(w * 0.74, h * 0.06); c.lineTo(w * 0.98, h * 0.17); c.fill();
      for (var i = 0; i < 4; i++) rett(c, w * (0.55 + i * 0.11), h * 0.24, w * 0.05, h * 0.38, "#f4efe2");
      pavimento(c, w, h, h * 0.62, "#a9a9a9", "#6d6d6d");
      em(c, "🚌", w * 0.26, h * 0.62, m * 0.42); em(c, "🗿", w * 0.86, h * 0.72, m * 0.14);
    },
    spiaggia: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#58c4ff", "#c9f0ff"], 0, 0, 0, h * 0.4); c.fillRect(0, 0, w, h);
      cerchio(c, w * 0.15, h * 0.14, m * 0.09, "#ffe066"); bagliore(c, w * 0.15, h * 0.14, m * 0.3, "rgba(255,224,102,.6)");
      c.fillStyle = "#1c9bd6"; c.fillRect(0, h * 0.36, w, h * 0.1);
      pavimento(c, w, h, h * 0.45, "#ffe3a3", "#f0c06e");
      [[0.14, 0.58], [0.38, 0.54], [0.62, 0.58], [0.86, 0.54], [0.26, 0.78], [0.52, 0.8], [0.78, 0.78]].forEach(function (p, i) { em(c, "⛱️", w * p[0], h * p[1], m * (0.16 + (i > 3 ? 0.05 : 0))); });
      em(c, "🍉", w * 0.9, h * 0.92, m * 0.1);
    },
    appuntamento: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#4a0d22", "#9c2a4a"]); c.fillRect(0, 0, w, h);
      bagliore(c, w * 0.5, h * 0.56, m * 0.5, "rgba(255,190,120,.35)");
      for (var i = 0; i < 14; i++) em(c, "✨", w * ((i * 37) % 100) / 100, h * ((i * 23) % 40) / 100, m * 0.04);
      rett(c, w * 0.14, h * 0.66, w * 0.72, h * 0.06, "#f8f0e3", 10); c.fillStyle = "#5c2b1b"; c.fillRect(w * 0.48, h * 0.72, w * 0.04, h * 0.28);
      em(c, "🕯️", w * 0.5, h * 0.58, m * 0.16); em(c, "🌹", w * 0.3, h * 0.63, m * 0.09); em(c, "🎻", w * 0.85, h * 0.4, m * 0.2, 0.3);
    },
    calcetto: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#0b1630", "#1b2f55"]); c.fillRect(0, 0, w, h);
      [[0.08, 0.06], [0.92, 0.06]].forEach(function (p) { bagliore(c, w * p[0], h * p[1], m * 0.45, "rgba(255,255,220,.35)"); cerchio(c, w * p[0], h * p[1], m * 0.03, "#fffbe0"); });
      pavimento(c, w, h, h * 0.5, "#2fa84f", "#1d7a36");
      c.strokeStyle = "rgba(255,255,255,.7)"; c.lineWidth = 3; c.beginPath(); c.ellipse(w / 2, h * 0.78, w * 0.22, h * 0.07, 0, 0, Math.PI * 2); c.stroke();
      c.strokeStyle = "#fff"; c.lineWidth = m * 0.015; c.strokeRect(w * 0.32, h * 0.32, w * 0.36, h * 0.2);
      c.strokeStyle = "rgba(255,255,255,.35)"; c.lineWidth = 1; for (var i = 1; i < 8; i++) { c.beginPath(); c.moveTo(w * 0.32 + i * w * 0.045, h * 0.32); c.lineTo(w * 0.32 + i * w * 0.045, h * 0.52); c.stroke(); }
      em(c, "⚽", w * 0.62, h * 0.84, m * 0.1); em(c, "🎽", w * 0.1, h * 0.6, m * 0.1);
    },
    sabato: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#13063a", "#2a0d5e", "#0c2a5e"]); c.fillRect(0, 0, w, h);
      ["#ff4fd8", "#4fd8ff", "#ffe14f", "#7a5cff"].forEach(function (k, i) { c.fillStyle = k + "2e"; c.beginPath(); c.moveTo(w / 2, h * 0.16); c.lineTo(w * (i * 0.33 - 0.1), h); c.lineTo(w * (i * 0.33 + 0.08), h); c.fill(); });
      em(c, "🪩", w / 2, h * 0.16, m * 0.2); bagliore(c, w / 2, h * 0.16, m * 0.3, "rgba(255,255,255,.3)");
      pavimento(c, w, h, h * 0.78, "#1a0f33", "#0a0618");
      for (var i = 0; i < 12; i++) rett(c, w * (i / 12), h * 0.78, w / 12 - 2, h * 0.04, ["#ff4fd8", "#4fd8ff", "#ffe14f"][i % 3] + "88");
      rett(c, w * 0.7, h * 0.36, w * 0.26, h * 0.1, "#ff922b", 6); c.fillStyle = "#fff"; c.font = "bold " + Math.round(m * 0.05) + "px sans-serif"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("PIZZA 24h", w * 0.83, h * 0.41);
    },
    ufficio: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#e9eef2", "#c9d3db"]); c.fillRect(0, 0, w, h);
      for (var i = 0; i < 3; i++) { rett(c, w * (0.08 + i * 0.32), h * 0.04, w * 0.22, h * 0.025, "#ffffff"); bagliore(c, w * (0.19 + i * 0.32), h * 0.06, m * 0.18, "rgba(220,240,255,.7)"); }
      rett(c, w * 0.04, h * 0.18, w * 0.3, h * 0.24, "#a9cce3", 6); c.strokeStyle = "#fff"; c.lineWidth = 3; c.strokeRect(w * 0.04, h * 0.18, w * 0.3, h * 0.24);
      pavimento(c, w, h, h * 0.72, "#9aa5ae", "#6f7b85");
      rett(c, w * 0.08, h * 0.6, w * 0.56, h * 0.05, "#d8b48a", 4); c.fillStyle = "#b38f66"; c.fillRect(w * 0.12, h * 0.65, w * 0.03, h * 0.18); c.fillRect(w * 0.57, h * 0.65, w * 0.03, h * 0.18);
      em(c, "💻", w * 0.36, h * 0.55, m * 0.13); em(c, "☕", w * 0.84, h * 0.5, m * 0.16); em(c, "🖨️", w * 0.84, h * 0.76, m * 0.15); em(c, "🪴", w * 0.06, h * 0.7, m * 0.1);
    },
    compleanno: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#fff0f6", "#ffd6e7"]); c.fillRect(0, 0, w, h);
      var cols = ["#ff6b6b", "#ffd43b", "#4dabf7", "#69db7c", "#b197fc"];
      for (var i = 0; i < 10; i++) { c.fillStyle = cols[i % 5]; c.beginPath(); c.moveTo(i * w / 10, h * 0.04); c.lineTo((i + 1) * w / 10, h * 0.04); c.lineTo((i + 0.5) * w / 10, h * 0.12); c.fill(); }
      em(c, "🎈", w * 0.12, h * 0.3, m * 0.16); em(c, "🎈", w * 0.88, h * 0.26, m * 0.14);
      pavimento(c, w, h, h * 0.66, "#ffc9de", "#f5a3c3");
      rett(c, w * 0.1, h * 0.64, w * 0.8, h * 0.06, "#ffffff", 8);
      em(c, "🎂", w * 0.5, h * 0.56, m * 0.24); em(c, "🎁", w * 0.18, h * 0.6, m * 0.1); em(c, "🎁", w * 0.82, h * 0.6, m * 0.12);
    },
    macchina: function (c, w, h, m) {
      c.fillStyle = gv(c, w, h, ["#ff9e5e", "#ffd18a", "#8fc7ff"], 0, 0, 0, h * 0.6); c.fillRect(0, 0, w, h);
      c.fillStyle = "#6a7a5a"; c.beginPath(); c.moveTo(0, h * 0.5); c.lineTo(w, h * 0.46); c.lineTo(w, h * 0.62); c.lineTo(0, h * 0.62); c.fill();
      c.fillStyle = "#4a4a52"; c.beginPath(); c.moveTo(w * 0.46, h * 0.46); c.lineTo(w * 0.54, h * 0.46); c.lineTo(w * 0.9, h * 0.62); c.lineTo(w * 0.1, h * 0.62); c.fill();
      c.strokeStyle = "#ffe066"; c.lineWidth = 3; c.setLineDash([m * 0.03, m * 0.03]); c.beginPath(); c.moveTo(w * 0.5, h * 0.47); c.lineTo(w * 0.5, h * 0.62); c.stroke(); c.setLineDash([]);
      c.fillStyle = "#1f1f26"; c.beginPath(); c.moveTo(0, h * 0.58); c.quadraticCurveTo(w / 2, h * 0.52, w, h * 0.58); c.lineTo(w, h); c.lineTo(0, h); c.fill();
      c.strokeStyle = "#141418"; c.lineWidth = m * 0.035; c.beginPath(); c.arc(w * 0.3, h * 0.8, m * 0.16, 0, Math.PI * 2); c.stroke();
      rett(c, w * 0.62, h * 0.66, w * 0.24, h * 0.12, "#2c7be5", 8); em(c, "🧭", w * 0.74, h * 0.72, m * 0.07);
      c.strokeStyle = "#333"; c.lineWidth = 2; c.beginPath(); c.moveTo(w * 0.5, 0); c.lineTo(w * 0.5, h * 0.1); c.stroke(); em(c, "🌲", w * 0.5, h * 0.15, m * 0.08);
    }
  };
  var SCENE_CACHE = {};
  // la scena del posto in un canvas w×h (tenuto: si disegna una volta)
  function scena(id, w, h) {
    w = Math.round(w || 750); h = Math.round(h || 1000);
    var k = id + "|" + w + "x" + h;
    if (SCENE_CACHE[k]) return SCENE_CACHE[k];
    var cv = document.createElement("canvas"); cv.width = w; cv.height = h;
    var c = cv.getContext("2d");
    try { (SCENE[id] || SCENE.prigione)(c, w, h, Math.min(w, h)); } catch (e) { c.fillStyle = "#334"; c.fillRect(0, 0, w, h); }
    return (SCENE_CACHE[k] = cv);
  }
  var SRC_CACHE = {};
  function scenaSrc(id, w, h) {
    var k = id + "|" + (w || 480) + "x" + (h || 640);
    if (SRC_CACHE[k] != null) return SRC_CACHE[k];
    var s = ""; try { s = scena(id, w || 480, h || 640).toDataURL("image/jpeg", 0.82); } catch (e) {}
    return (SRC_CACHE[k] = s);
  }

  window.SG_CDN_ARTE = {
    COSTUMI: COSTUMI, PERSONAGGI: PERSONAGGI, FACCE: FACCE, FACCE_EMOJI: FACCE_EMOJI, FESTA: FESTA,
    faccia: faccia, persona: persona, scena: scena, scenaSrc: scenaSrc, emoji: em, hash: hash,
    foto: (window.SG_CDN_ARTE && SG_CDN_ARTE.foto) || null   // la riempie js/chidinoi-foto.js: function (id, o, p) → src del ritratto con la foto, o null
  };
})();

/* =========================================================
   «Chi di Noi?» — LA FOTO VERA (il cuore del gioco)
   window.SG_CDN_FOTO:
   - FILTRI: i 10 filtri del proprietario (Originale, Sdoppiamento, Specchio, Occhioni Anime, Mascellone Gigachad,
     Faccia Liquida, Testa a Cono, Faccia da Uovo, Nasone da Strega, Testa Schiacciata), fatti su canvas sul telefono
   - camerino(o): la finestra «📸 La tua faccia» (selfie con la sagoma ovale, foto dalla galleria, avatar, filtri)
   - metti(id, f, canvas, x) / filtro(id, x) / togli(id) / svuota() / ha(id, f): le foto, SOLO in memoria
   - importa(chiave) / cifra / decifra: AES-GCM con WebCrypto (la chiave sta solo nel link, dopo il #)
   - jpeg(canvas) / daJpeg(bytes, cb): la foto piccola (240×300, JPEG leggero) e ritorno
   e riempie SG_CDN_ARTE.foto(id, o, p): la faccia di un giocatore con la sua foto, nel corpo del suo avatar
   (stessa inquadratura del busto dell'avatar: così ogni schermata del gioco la mostra come l'avatar).
   La sagoma ovale dice dove stanno occhi, naso e bocca: i filtri non devono "riconoscere" la faccia.
   ========================================================= */
(function () {
  "use strict";

  // ---------- la foto: 240×300, l'ovale della faccia e i punti fissi della sagoma ----------
  var FW = 240, FH = 300;
  var OV = { x: 120, y: 152, rx: 98, ry: 122 };              // l'ovale della sagoma (dove si mette la faccia)
  var OCCHI = 140, OCC_DX = 36, NASO = 178, BOCCA = 212, MENTO = 268;
  // la testa dell'avatar (coordinate del disegno dell'avatar 200×264, prima della scala della testa): lì va l'ovale della foto
  var AV = { x: 100, y: 92, rx: 57, ry: 66 }, KT = 0.85;
  // dove il cappello si appoggia sulla testa (come in omino.js): sopra quella riga il cappello si ridisegna sopra la foto
  var LINEA = { cappellino: 73, berretto: 73, cilindro: 53, cowboy: 58, pescatore: 63, basco: 52, paglia: 58, coppola: 72, borsalino: 60, pirata: 62, mago: 60, chef: 64, babbo: 70, vichingo: 76 };

  var FILTRI = [
    { id: "orig", nome: "Originale", e: "🙂" },
    { id: "sdoppia", nome: "Sdoppiamento", e: "👯" },
    { id: "specchio", nome: "Specchio", e: "🪞" },
    { id: "anime", nome: "Occhioni Anime", e: "🥺" },
    { id: "giga", nome: "Mascellone Gigachad", e: "🗿" },
    { id: "liquida", nome: "Faccia Liquida", e: "🫠" },
    { id: "cono", nome: "Testa a Cono", e: "🍦" },
    { id: "uovo", nome: "Faccia da Uovo", e: "🥚" },
    { id: "strega", nome: "Nasone da Strega", e: "🧙" },
    { id: "schiaccia", nome: "Testa Schiacciata", e: "🥞" }
  ];
  var IDX = {}; FILTRI.forEach(function (f, i) { IDX[f.id] = i; });
  // le facce delle carte "lui": la foto non cambia espressione, quindi la fa un filtro (più la faccina che mette il gioco)
  var ESPR = { terrore: "anime", sorpreso: "anime", estasi: "anime", innamorato: "anime", disgusto: "schiaccia", sonno: "schiaccia",
    furbo: "liquida", linguaccia: "strega", esulta: "giga", arrabbiato: "giga", triste: "uovo", finto: "specchio" };
  // dove finiscono gli occhi dopo il filtro (per gli occhiali del costume): [y, quanto si allargano]
  var OCCHI_F = { cono: [173.3, 0.74], schiaccia: [144.8, 1.32] };

  function lim(v, a, b) { return v < a ? a : v > b ? b : v; }
  function liscio(t) { t = lim(t, 0, 1); return t * t * (3 - 2 * t); }
  function tela(w, h) { var c = document.createElement("canvas"); c.width = w; c.height = h; return c; }
  function vibra(p) { try { if (navigator.vibrate) navigator.vibrate(p || 10); } catch (e) {} }

  // =========================================================
  //  I FILTRI: per ogni punto della faccia nuova si cerca da dove "pescarlo" nella foto (mappa inversa)
  // =========================================================
  function lente(x, y, cx, cy, r, s) {
    var dx = x - cx, dy = y - cy, d = Math.sqrt(dx * dx + dy * dy) / r;
    if (d >= 1) return null;
    var f = 1 - s * (1 - d * d);
    return [cx + dx * f, cy + dy * f, d];
  }
  var MAPPE = {
    specchio: function (x, y) { return [x > FW / 2 ? FW - x : x, y]; },
    anime: function (x, y) {
      var p = lente(x, y, FW / 2 - OCC_DX, OCCHI, 36, 0.74) || lente(x, y, FW / 2 + OCC_DX, OCCHI, 36, 0.74);
      if (p) return p;
      var t = liscio((y - 190) / 80);   // il mento si stringe un poco (faccia da cartone)
      return [FW / 2 + (x - FW / 2) * (1 + 0.24 * t), y];
    },
    giga: function (x, y) {
      var sx = x, sy = y;
      if (y > 175) { var t = liscio((y - 175) / 70); sx = FW / 2 + (x - FW / 2) / (1 + 0.85 * t); }       // mascella larga
      if (y < 120) { var t2 = liscio((120 - y) / 90); sx = FW / 2 + (x - FW / 2) / (1 - 0.24 * t2); }     // fronte stretta
      if (y > 196) sy = 196 + (y - 196) * 0.62;                                                          // mento lungo
      return [sx, sy];
    },
    liquida: function (x, y) {
      var cx = FW / 2, cy = 170, dx = x - cx, dy = y - cy, d = Math.sqrt(dx * dx + dy * dy) / 140, sx = x, sy = y;
      if (d < 1) { var a = 1.15 * (1 - d) * (1 - d), co = Math.cos(a), si = Math.sin(a); sx = cx + dx * co - dy * si; sy = cy + dx * si + dy * co; }
      return [sx + 7 * Math.sin(y / 14), sy + 6 * Math.sin(x / 19) + 5 * Math.sin(x / 9 + y / 31)];
    },
    cono: function (x, y) {
      var S = 0.74, e = MENTO - (MENTO - OCCHI) * S, k = (e - (MENTO - (MENTO - 30) * S)) / e, xs = x, ys = y;
      if (y < e) { var t = (e - y) / e; ys = e - (e - y) * k; xs = FW / 2 + (x - FW / 2) / Math.max(0.06, 1 - 0.95 * Math.pow(t, 0.9)); }
      return [FW / 2 + (xs - FW / 2) / S, MENTO - (MENTO - ys) / S];
    },
    uovo: function (x, y) {
      var p = lente(x, y, FW / 2, 96, 120, 0.42), sx = p ? p[0] : x, sy = p ? p[1] : y;
      if (y > 165) { var t = liscio((y - 165) / 100); sx = FW / 2 + (sx - FW / 2) * (1 + 1.1 * t); }
      return [sx, sy];
    },
    strega: function (x, y) {
      var p = lente(x, y, FW / 2, NASO + 6, 64, 0.66), sx = x, sy = y;
      if (p) { sx = p[0]; sy = p[1] - 40 * (1 - p[2]) * (1 - p[2]); }   // il naso si allunga in giù
      if (y > 232) sy = 232 + (sy - 232) * 0.76;                          // mento a punta
      return [sx, sy];
    },
    schiaccia: function (x, y) { return [FW / 2 + (x - FW / 2) / 1.32, OV.y + (y - OV.y) / 0.6]; }
  };
  // un punto della foto, con la media dei 4 vicini (bordi tenuti)
  function pesca(d, x, y, out, o) {
    x = lim(x, 0, FW - 1.001); y = lim(y, 0, FH - 1.001);
    var x0 = x | 0, y0 = y | 0, fx = x - x0, fy = y - y0, i = (y0 * FW + x0) * 4, j = i + FW * 4;
    for (var c = 0; c < 3; c++) {
      var a = d[i + c] + (d[i + 4 + c] - d[i + c]) * fx, b = d[j + c] + (d[j + 4 + c] - d[j + c]) * fx;
      out[o + c] = a + (b - a) * fy;
    }
    out[o + 3] = 255;
  }
  // la foto (240×300) col filtro: una tela nuova
  function filtra(base, x) {
    var F = FILTRI[x] || FILTRI[0], cv = tela(FW, FH), c = cv.getContext("2d");
    if (F.id === "orig") { c.drawImage(base, 0, 0, FW, FH); return cv; }
    var src = base.getContext("2d").getImageData(0, 0, FW, FH).data, img = c.createImageData(FW, FH), o = img.data, xx, yy, k;
    if (F.id === "sdoppia") {   // la vista doppia: due facce sovrapposte, una rossa e una azzurra (4 occhi!)
      var A = new Float32Array(4), B = new Float32Array(4);
      for (yy = 0; yy < FH; yy++) for (xx = 0; xx < FW; xx++) {
        k = (yy * FW + xx) * 4;
        pesca(src, xx + 21, yy + 3, A, 0); pesca(src, xx - 21, yy - 3, B, 0);
        o[k] = A[0] * 0.66 + B[0] * 0.34; o[k + 1] = A[1] * 0.36 + B[1] * 0.64; o[k + 2] = A[2] * 0.42 + B[2] * 0.58; o[k + 3] = 255;
      }
    } else {
      var M = MAPPE[F.id];
      for (yy = 0; yy < FH; yy++) for (xx = 0; xx < FW; xx++) { var p = M(xx + 0.5, yy + 0.5); pesca(src, p[0] - 0.5, p[1] - 0.5, o, (yy * FW + xx) * 4); }
    }
    if (F.id === "giga") {   // bianco e nero, tanto contrasto: il meme
      for (k = 0; k < o.length; k += 4) { var g = lim((0.3 * o[k] + 0.59 * o[k + 1] + 0.11 * o[k + 2] - 128) * 1.6 + 128 + 6, 0, 255); o[k] = g; o[k + 1] = g; o[k + 2] = g * 1.02; }
    }
    if (F.id === "strega") {   // pelle verde
      for (k = 0; k < o.length; k += 4) { o[k] = o[k] * 0.7; o[k + 1] = lim(o[k + 1] * 1.06 + 20, 0, 255); o[k + 2] = o[k + 2] * 0.6; }
    }
    c.putImageData(img, 0, 0);
    if (F.id === "anime") {   // i riflessi negli occhi e le guance rosa
      [-1, 1].forEach(function (s) {
        var ex = FW / 2 + s * OCC_DX;
        c.fillStyle = "rgba(255,120,160,.33)"; c.beginPath(); c.ellipse(ex + s * 8, 196, 17, 8, 0, 0, Math.PI * 2); c.fill();
        c.fillStyle = "rgba(255,255,255,.95)"; c.beginPath(); c.arc(ex - 9, OCCHI - 10, 7, 0, Math.PI * 2); c.fill();
        c.beginPath(); c.arc(ex + 8, OCCHI + 6, 3.4, 0, Math.PI * 2); c.fill();
      });
    }
    if (F.id === "uovo") {   // il lucido del guscio
      var gl = c.createRadialGradient(96, 84, 2, 96, 84, 34); gl.addColorStop(0, "rgba(255,255,255,.55)"); gl.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = gl; c.beginPath(); c.ellipse(96, 84, 34, 20, -0.45, 0, Math.PI * 2); c.fill();
    }
    if (F.id === "strega") {   // il porro sul naso
      c.fillStyle = "#5b3a1e"; c.beginPath(); c.arc(140, 214, 6.5, 0, Math.PI * 2); c.fill();
      c.fillStyle = "rgba(255,255,255,.35)"; c.beginPath(); c.arc(138, 212, 2.2, 0, Math.PI * 2); c.fill();
      c.strokeStyle = "#2b1a0c"; c.lineWidth = 1.2; c.beginPath(); c.moveTo(141, 209); c.lineTo(144, 203); c.moveTo(143, 211); c.lineTo(149, 208); c.stroke();
    }
    return cv;
  }
  // l'ovale della faccia ritagliato (angoli trasparenti), grande w×h
  function ovale(cv, w, h, bordo) {
    w = w || FW; h = h || FH;
    var o = tela(w, h), c = o.getContext("2d"), kx = w / FW, ky = h / FH;
    c.save(); c.beginPath(); c.ellipse(OV.x * kx, OV.y * ky, OV.rx * kx, OV.ry * ky, 0, 0, Math.PI * 2); c.clip();
    c.drawImage(cv, 0, 0, w, h); c.restore();
    if (bordo) { c.strokeStyle = "rgba(255,255,255,.9)"; c.lineWidth = Math.max(1.5, 3 * kx); c.beginPath(); c.ellipse(OV.x * kx, OV.y * ky, OV.rx * kx - 1, OV.ry * ky - 1, 0, 0, Math.PI * 2); c.stroke(); }
    return o;
  }

  // =========================================================
  //  LE FOTO DEI GIOCATORI (solo in memoria: mai salvate per gli altri)
  // =========================================================
  var FOTO = {};   // id → { f, base, x, ver, filt: { x: tela }, comp: { chiave: src }, pend: {} }
  var VER = 0;
  function metti(id, f, base, x) {
    var b = tela(FW, FH); b.getContext("2d").drawImage(base, 0, 0, FW, FH);
    FOTO[id] = { f: f, base: b, x: lim(x | 0, 0, FILTRI.length - 1), ver: ++VER, filt: {}, comp: {}, pend: {} };
    avvisa(id);
  }
  function filtro(id, x) { var F = FOTO[id]; x = lim(x | 0, 0, FILTRI.length - 1); if (!F || F.x === x) return; F.x = x; F.ver = ++VER; avvisa(id); }
  function togli(id) { if (FOTO[id]) { delete FOTO[id]; avvisa(id); } }
  function svuota() { var ids = Object.keys(FOTO); FOTO = {}; ids.forEach(avvisa); }
  function ha(id, f) { return !!(FOTO[id] && (f == null || FOTO[id].f === f)); }
  function ver(id) { return FOTO[id] ? FOTO[id].ver : 0; }
  function filtrata(F, x) { return F.filt[x] || (F.filt[x] = filtra(F.base, x)); }
  // chi usa le facce viene avvisato quando una foto (o un suo ritratto) è pronta: aggiorna solo le immagini di quel giocatore
  var daAvvisare = {}, tAvv = null;
  function avvisa(id) {
    daAvvisare[id] = 1;
    if (tAvv) return;
    tAvv = setTimeout(function () { var l = Object.keys(daAvvisare); daAvvisare = {}; tAvv = null; l.forEach(function (i) { try { if (API.onCambio) API.onCambio(i); } catch (e) {} }); }, 30);
  }

  // ---------- il ritratto: il corpo dell'avatar (col costume del posto) e la foto al posto della testa ----------
  function copia(o) { var c = {}; for (var k in o) c[k] = o[k]; return c; }
  var PIU_OK = { cappello: 1, occhiali: 1, collo: 1, mano: 1, schiena: 1, animale: 1, pittura: 1, stampa: 1 };
  function cfgDi(p, o) {
    var cfg = copia(p && p.omino && typeof p.omino === "object" ? p.omino : (window.SGOmino ? SGOmino.casuale((p && (p.nome || p.id)) || "?") : {}));
    var A = window.SG_CDN_ARTE || {}, cs = o.posto && A.COSTUMI && A.COSTUMI[o.posto];
    var occhiali = null, segno = null;
    cfg.cappello = "nessuno";   // (il cappello dell'avatar no: si vede la testa vera, e i filtri come la Testa a Cono; quello del costume sì)
    if (cs) { cs = copia(cs); occhiali = cs.occhiali || null; segno = cs.segno || null; delete cs.occhiali; delete cs.segno; for (var k in cs) cfg[k] = cs[k]; }
    if (o.piu) for (var q in o.piu) if (PIU_OK[q] && window.SGOmino && SGOmino.OPZ[q] && SGOmino.OPZ[q].indexOf(o.piu[q]) >= 0) { if (q === "occhiali") occhiali = o.piu[q]; else cfg[q] = o.piu[q]; }
    cfg.occhiali = "nessuno";   // gli occhiali li mette la foto (sopra i suoi occhi veri)
    return { cfg: cfg, occhiali: occhiali, segno: segno };
  }
  // la scala del disegno: busto (178×182 attorno alla testa) o intero (200×264)
  function geo(intero, w, h) {
    if (intero) {
      var sx = w / 200, sy = h / 264, X = function (x) { return (100 + (x - 100) * KT) * sx; }, Y = function (y) { return (150 + (y - 150) * KT) * sy; };
      return { x: X(AV.x), y: Y(AV.y), rx: AV.rx * KT * sx, ry: AV.ry * KT * sy, Y: Y };
    }
    var bx = w / 178, by = h / 182, Yb = function (y) { return (y + 6) * by; };
    return { x: (AV.x - 11) * bx, y: Yb(AV.y), rx: AV.rx * bx, ry: AV.ry * by, Y: Yb };
  }
  var IMG_SVG = {};   // le immagini dei corpi già caricate (per non ricaricarle)
  function svgImg(src, cb) {
    var I = IMG_SVG[src];
    if (I && I.ok) return cb(I.img);
    if (I) { I.attesa.push(cb); return; }
    if (Object.keys(IMG_SVG).length > 80) IMG_SVG = {};
    I = IMG_SVG[src] = { img: new Image(), ok: false, attesa: [cb] };
    I.img.onload = function () { I.ok = true; var a = I.attesa; I.attesa = []; a.forEach(function (f) { f(I.img); }); };
    I.img.onerror = function () { var a = I.attesa; delete IMG_SVG[src]; a.forEach(function (f) { f(null); }); };
    I.img.src = src;
  }
  function emojiSu(c, e, x, y, s, rot) {
    c.save(); c.translate(x, y); if (rot) c.rotate(rot);
    c.font = Math.round(s) + "px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif"; c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText(e, 0, 0); c.restore();
  }
  function componi(F, x, p, o, cb) {
    if (!window.SGOmino) return cb(null);
    var intero = !!o.intero, d = cfgDi(p, o), opz = intero ? {} : { busto: true };
    if (intero && o.braccia) opz.braccia = o.braccia;
    var src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(SGOmino.svg(d.cfg, opz));
    svgImg(src, function (im) {
      if (!im) return cb(null);
      var w = intero ? 300 : 356, h = intero ? 396 : 364, cv = tela(w, h), c = cv.getContext("2d"), G = geo(intero, w, h);
      try { c.drawImage(im, 0, 0, w, h); } catch (e) {}
      // la foto nell'ovale della testa, con un bordino chiaro (come una faccia ritagliata e incollata)
      var ph = filtrata(F, x), kx = G.rx / OV.rx, ky = G.ry / OV.ry;
      c.save(); c.beginPath(); c.ellipse(G.x, G.y, G.rx, G.ry, 0, 0, Math.PI * 2); c.clip();
      c.drawImage(ph, G.x - OV.x * kx, G.y - OV.y * ky, FW * kx, FH * ky); c.restore();
      c.strokeStyle = "rgba(255,255,255,.85)"; c.lineWidth = Math.max(2, w / 120); c.beginPath(); c.ellipse(G.x, G.y, G.rx, G.ry, 0, 0, Math.PI * 2); c.stroke();
      // il cappello del costume torna sopra la foto
      var cap = d.cfg.cappello;
      if (cap && cap !== "nessuno") {
        var riga = LINEA[cap] != null ? G.Y(LINEA[cap] + 4) : G.Y(AV.y - AV.ry + 2);
        c.save(); c.beginPath(); c.rect(0, 0, w, riga); c.clip(); try { c.drawImage(im, 0, 0, w, h); } catch (e) {} c.restore();
      }
      // gli occhiali del costume (o della carta) sugli occhi veri, e il cerotto
      var oc = OCCHI_F[FILTRI[x].id] || [OCCHI, 1], ey = G.y + (oc[0] - OV.y) * ky, edx = OCC_DX * oc[1] * kx;
      var occ = { sole: "🕶️", aviatore: "🕶️", quadrati: "👓", tondi: "👓", stelle: "⭐", cuore: "❤️" }[d.occhiali];
      if (d.occhiali === "stelle" || d.occhiali === "cuore") { emojiSu(c, occ, G.x - edx, ey, edx * 1.5); emojiSu(c, occ, G.x + edx, ey, edx * 1.5); }
      else if (d.occhiali === "mascherina") { var my = ey - edx * 1.45; c.fillStyle = "#3b2f6b"; c.beginPath(); c.ellipse(G.x, my, edx * 2.1, edx * 0.6, 0, 0, Math.PI * 2); c.fill(); c.fillStyle = "#fff"; c.font = "bold " + Math.round(edx * 0.5) + "px sans-serif"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("z z z", G.x, my); }   // (la mascherina tirata su, sulla fronte)
      else if (occ) emojiSu(c, occ, G.x, ey, edx * 2.5);
      if (d.segno === "cerotto") emojiSu(c, "🩹", G.x + edx * 1.2, ey + edx * 1.5, edx * 0.9, 0.5);
      var url = ""; try { url = cv.toDataURL("image/png"); } catch (e) {}
      cb(url || null);
    });
  }
  // il punto unico (chiamato da SG_CDN_ARTE.faccia): src del ritratto con la foto, o null (allora si usa l'avatar)
  function variante(F, o, p) {
    var x = o.faccia && ESPR[o.faccia] != null ? IDX[ESPR[o.faccia]] : F.x;
    var br = o.intero && o.faccia && window.SG_CDN_ARTE && SG_CDN_ARTE.FACCE && SG_CDN_ARTE.FACCE[o.faccia] ? SG_CDN_ARTE.FACCE[o.faccia].braccia || "" : "";
    return { x: x, br: br, k: [x, o.posto || "", o.intero ? 1 : 0, br, o.piu ? JSON.stringify(o.piu) : "", p.omino ? JSON.stringify(p.omino).length : 0].join("|") };
  }
  // il ritratto esatto è già pronto? (se no lo prepara: chi aspetta riprova tra un attimo)
  function pronta(id, o, p) { var F = FOTO[id]; if (!F || API.spente) return true; o = o || {}; p = p || { id: id }; if (F.comp[variante(F, o, p).k]) return true; fotoDi(id, o, p); return false; }
  function fotoDi(id, o, p) {
    var F = FOTO[id]; if (!F || API.spente) return null;
    o = o || {}; p = p || { id: id };
    var V = variante(F, o, p), x = V.x, br = V.br, k = V.k;
    if (F.comp[k]) return F.comp[k];
    if (!F.pend[k]) {
      F.pend[k] = 1;
      var f0 = F.f;
      componi(F, x, p, { posto: o.posto, intero: o.intero, braccia: br || null, piu: o.piu }, function (url) {
        delete F.pend[k];
        if (FOTO[id] !== F || F.f !== f0 || !url) return;
        F.comp[k] = url; avvisa(id);
      });
    }
    // intanto: il ritratto semplice, se c'è già (meglio della faccia dell'avatar)
    var k0 = [F.x, "", o.intero ? 1 : 0, "", "", k.split("|")[5]].join("|");
    return F.comp[k0] || null;
  }

  // =========================================================
  //  LA CHIAVE E LA CIFRATURA (AES-GCM, WebCrypto)
  // =========================================================
  function aB64(b) { var s = "", i, n = 0x8000; for (i = 0; i < b.length; i += n) s += String.fromCharCode.apply(null, b.subarray(i, i + n)); return btoa(s); }
  function daB64(s) { var t = atob(String(s).replace(/-/g, "+").replace(/_/g, "/")), b = new Uint8Array(t.length); for (var i = 0; i < t.length; i++) b[i] = t.charCodeAt(i); return b; }
  function puoCifrare() { try { return !!(window.crypto && crypto.subtle && crypto.getRandomValues && window.TextEncoder); } catch (e) { return false; } }
  // la chiave del link (22 caratteri) → { key, kf } (kf = l'impronta: 8 cifre, dice se due telefoni hanno la stessa chiave)
  function importa(kStr) {
    if (!kStr || !puoCifrare()) return Promise.resolve(null);
    var raw; try { raw = daB64(kStr + "=="); } catch (e) { return Promise.resolve(null); }
    if (raw.length !== 16) return Promise.resolve(null);
    return Promise.all([crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]), crypto.subtle.digest("SHA-256", raw)]).then(function (r) {
      var h = new Uint8Array(r[1]), kf = ""; for (var i = 0; i < 4; i++) kf += (h[i] < 16 ? "0" : "") + h[i].toString(16);
      return { key: r[0], kf: kf };
    }).catch(function () { return null; });
  }
  // cifra i byte (con un "iv" nuovo ogni volta; ad = il numero della foto, legato al testo cifrato)
  function cifra(key, bytes, ad) {
    var iv = new Uint8Array(12); crypto.getRandomValues(iv);
    return crypto.subtle.encrypt({ name: "AES-GCM", iv: iv, additionalData: new TextEncoder().encode("cn|" + ad) }, key, bytes).then(function (c) { return { iv: aB64(iv), c: aB64(new Uint8Array(c)) }; });
  }
  function decifra(key, iv, c, ad) {
    return crypto.subtle.decrypt({ name: "AES-GCM", iv: daB64(iv), additionalData: new TextEncoder().encode("cn|" + ad) }, key, daB64(c)).then(function (b) { return new Uint8Array(b); });
  }
  // la foto piccola: JPEG leggero (byte) e ritorno (byte → tela 240×300)
  function jpeg(cv) { var s = cv.toDataURL("image/jpeg", 0.68); return daB64(s.slice(s.indexOf(",") + 1)); }
  function daJpeg(bytes, cb) {
    var url = null, im = new Image();
    try { url = URL.createObjectURL(new Blob([bytes], { type: "image/jpeg" })); } catch (e) { return cb(null); }
    im.onload = function () { var cv = tela(FW, FH); try { cv.getContext("2d").drawImage(im, 0, 0, FW, FH); } catch (e) { cv = null; } URL.revokeObjectURL(url); cb(cv); };
    im.onerror = function () { URL.revokeObjectURL(url); cb(null); };
    im.src = url;
  }

  // =========================================================
  //  IL CAMERINO: «📸 La tua faccia» (selfie con la sagoma, galleria, avatar, i 10 filtri)
  //  o = { base: tela (la foto di adesso) | null, x, avatar: src dell'avatar, filtri: true (apri sui filtri),
  //        onFatto({ base, x } | { avatar: true }), onChiudi() }
  //  → { chiudi(confermaSeCe) }
  // =========================================================
  var cssFatto = false;
  function stile() {
    if (cssFatto) return; cssFatto = true;
    var st = document.createElement("style");
    st.textContent = [
      ".cnf{position:fixed;left:0;top:0;width:100%;height:var(--alt,100dvh);z-index:880;display:flex;flex-direction:column;background:radial-gradient(120% 70% at 50% -10%,#5a2ca0 0%,#2a1458 45%,#120a2e 100%);color:#fff;font-family:inherit;user-select:none;-webkit-user-select:none;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom);box-sizing:border-box;overflow:hidden;touch-action:none}",
      ".cnf button{font-family:inherit}",
      ".cnf-testa{flex:none;display:flex;align-items:center;gap:8px;padding:8px 10px 4px}",
      ".cnf-testa b{flex:1;font-size:17px;font-weight:900;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".cnf-x{flex:none;width:36px;height:36px;border-radius:50%;border:0;background:rgba(255,255,255,.15);color:#fff;font-size:17px;font-weight:900;cursor:pointer}",
      ".cnf-nota{flex:none;font-size:12.5px;opacity:.85;text-align:center;padding:0 14px;line-height:1.3}",
      ".cnf-palco{flex:1;min-height:0;position:relative;margin:6px 10px;border-radius:18px;overflow:hidden;display:flex;align-items:center;justify-content:center}",
      ".cnf-palco.nero{background:#000}",
      ".cnf-palco video,.cnf-palco .cnf-sist{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}",
      ".cnf-palco video{transform:scaleX(-1)}",
      ".cnf-sagoma{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}",
      ".cnf-conto{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:110px;font-weight:900;text-shadow:0 4px 24px rgba(0,0,0,.6);pointer-events:none}",
      ".cnf-conto.su{animation:cnfConto .6s ease-out both}",
      ".cnf-lampo{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}.cnf-lampo.su{animation:cnfLampo .45s ease-out}",
      ".cnf-grande{height:min(100%,330px);max-width:100%;aspect-ratio:4/5;object-fit:contain;filter:drop-shadow(0 8px 22px rgba(0,0,0,.45))}",
      ".cnf-tondo{height:min(86%,250px);aspect-ratio:1;border-radius:50%;object-fit:cover;object-position:50% 38%;background:radial-gradient(#fff6d8,#ffb84a);box-shadow:0 0 0 5px #ffcf3f,0 0 34px 8px rgba(255,207,63,.45)}",
      ".cnf-nome{position:absolute;left:0;right:0;bottom:6px;text-align:center;font-weight:900;font-size:16px;text-shadow:0 2px 8px rgba(0,0,0,.6)}",
      ".cnf-filtri{flex:none;display:grid;grid-template-columns:repeat(5,1fr);gap:6px;padding:0 10px}",
      ".cnf-f{position:relative;border:0;border-radius:12px;background:rgba(255,255,255,.1);padding:3px 2px 2px;color:#fff;cursor:pointer;display:flex;flex-direction:column;align-items:center;min-width:0}",
      ".cnf-f canvas{width:100%;max-width:58px;aspect-ratio:4/5;height:auto}",
      ".cnf-f span{font-size:9.5px;font-weight:800;line-height:1.1;height:2.2em;overflow:hidden;text-align:center}",
      ".cnf-f.on{background:#ffcf3f;color:#2a1458;box-shadow:0 0 0 2px #fff inset}",
      ".cnf-piede{flex:none;display:flex;gap:8px;padding:8px 10px 10px}",
      ".cnf-piede.col{flex-direction:column}",
      ".cnf-piede .riga{display:flex;gap:8px}",
      ".cnf-b{flex:1;min-height:52px;border:0;border-radius:16px;font-weight:900;font-size:16px;color:#fff;background:rgba(255,255,255,.16);cursor:pointer;padding:6px 8px}",
      ".cnf-b.oro{background:linear-gradient(#ffd84d,#f2a900);color:#2a1458;box-shadow:0 4px 0 #b37d00}",
      ".cnf-b.verde{background:linear-gradient(#4be08a,#21a35a);box-shadow:0 4px 0 #13703b;color:#04321c}",
      ".cnf-b:disabled{opacity:.45}",
      ".cnf-scatto{flex:none;width:78px;height:78px;border-radius:50%;border:6px solid #fff;background:#ff4d6d;box-shadow:0 0 0 4px rgba(255,77,109,.4);cursor:pointer;margin:0 6px;font-size:26px}",
      ".cnf-zoom{position:absolute;right:8px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:8px}",
      ".cnf-zoom button{width:44px;height:44px;border-radius:50%;border:0;background:rgba(0,0,0,.55);color:#fff;font-size:24px;font-weight:900}",
      "@keyframes cnfConto{0%{opacity:0;transform:scale(1.8)}30%{opacity:1}100%{opacity:.9;transform:scale(1)}}",
      "@keyframes cnfLampo{0%{opacity:.9}100%{opacity:0}}"
    ].join("");
    document.head.appendChild(st);
  }
  function el(tag, attrs, figli) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (attrs[k] == null) continue; if (k === "class") e.className = attrs[k]; else if (k === "text") e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); }
    (figli || []).forEach(function (f) { if (f) e.appendChild(f); });
    return e;
  }
  // un tasto che risponde al primo tocco e vibra (si sceglie qualcosa)
  function tasto(classe, testo, fn, novibra) {
    var b = el("button", { class: "cnf-b " + (classe || ""), type: "button", text: testo }), giu = false;
    b.addEventListener("pointerdown", function (e) { if (b.disabled) return; giu = true; e.preventDefault(); });
    b.addEventListener("pointerup", function (e) { if (!giu || b.disabled) return; giu = false; e.preventDefault(); if (!novibra) vibra(10); fn(e); });
    b.addEventListener("pointercancel", function () { giu = false; });
    b.addEventListener("pointerleave", function () { giu = false; });
    b.addEventListener("click", function (e) { if (e.detail === 0 && !b.disabled) fn(e); });
    return b;
  }

  var CAM = null;   // il camerino aperto (uno solo)
  function camerino(o) {
    o = o || {};
    if (CAM) CAM.chiudi(false);
    stile();
    var C = { stato: null, base: o.base || null, x: o.x | 0, stream: null, vivo: true, tm: [] };
    var root = el("div", { class: "cnf", role: "dialog" });
    var tit = el("b", { text: "📸 La tua faccia per stasera" });
    var bx = el("button", { class: "cnf-x", type: "button", "aria-label": "Chiudi", text: "✕" });
    bx.addEventListener("click", function () { chiudi(false); });
    var nota = el("div", { class: "cnf-nota" });
    var palco = el("div", { class: "cnf-palco" });
    var piede = el("div", { class: "cnf-piede" });
    root.appendChild(el("div", { class: "cnf-testa" }, [tit, bx])); root.appendChild(nota); root.appendChild(palco); root.appendChild(piede);
    var file = el("input", { type: "file", accept: "image/*", style: "display:none" });
    root.appendChild(file);
    file.addEventListener("change", function () { var f = file.files && file.files[0]; file.value = ""; if (f) daFile(f); });
    document.body.appendChild(root);
    function dopo(ms, fn) { C.tm.push(setTimeout(function () { if (C.vivo) fn(); }, ms)); }
    function pulisci() { if (C.griglia && C.griglia.parentNode) C.griglia.parentNode.removeChild(C.griglia); C.griglia = null; palco.className = "cnf-palco"; while (palco.firstChild) palco.removeChild(palco.firstChild); while (piede.firstChild) piede.removeChild(piede.firstChild); piede.className = "cnf-piede"; fermaCamera(); }
    function fermaCamera() { if (C.stream) { try { C.stream.getTracks().forEach(function (tr) { tr.stop(); }); } catch (e) {} C.stream = null; } }

    // ---- 1. la scelta: selfie, galleria o avatar ----
    function scelta(msg) {
      pulisci(); C.stato = "scelta"; tit.textContent = "📸 La tua faccia per stasera";
      nota.textContent = msg || "La vedono solo gli amici entrati dal link della serata, e sparisce quando uscite dal gioco.";
      var im = el("img", { class: "cnf-tondo", alt: "" });
      if (C.base) { im.src = ovale(filtrata({ base: C.base, filt: C.filt || (C.filt = {}) }, C.x), FW, FH, true).toDataURL("image/png"); im.className = "cnf-grande"; }
      else if (o.avatar) im.src = o.avatar;
      palco.appendChild(im);
      piede.className = "cnf-piede col";
      piede.appendChild(el("div", { class: "riga" }, [tasto("oro", "🤳 Selfie", function () { camera(); }), tasto("", "🖼️ Dalla galleria", function () { file.click(); })]));
      piede.appendChild(el("div", { class: "riga" }, [
        C.base ? tasto("verde", "✅ Tengo questa", function () { filtri(); }) : null,
        tasto("", "🙂 Uso l'avatar", function () { fatto(true); })].filter(Boolean)));
    }

    // ---- 2. la fotocamera frontale con la sagoma ovale (occhi, naso e bocca) ----
    function riquadro() {
      var r = palco.getBoundingClientRect(), W = r.width, H = r.height;
      var fh = Math.min(H * 0.9, W * 0.9 * 1.25), fw = fh * 0.8;
      return { W: W, H: H, x: (W - fw) / 2, y: (H - fh) / 2, w: fw, h: fh };
    }
    function sagoma(R) {
      var k = R.w / FW, cx = R.x + OV.x * k, cy = R.y + OV.y * k, rx = OV.rx * k, ry = OV.ry * k, ey = R.y + OCCHI * k, ed = OCC_DX * k;
      var ns = "http://www.w3.org/2000/svg", id = "cnfm" + Math.floor(Math.random() * 1e6);
      var s = '<svg xmlns="' + ns + '" class="cnf-sagoma" viewBox="0 0 ' + R.W + " " + R.H + '"><defs><mask id="' + id + '"><rect width="100%" height="100%" fill="#fff"/>' +
        '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="#000"/></mask></defs>' +
        '<rect width="100%" height="100%" fill="rgba(18,10,46,.66)" mask="url(#' + id + ')"/>' +
        '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="12 8"/>' +
        '<g stroke="#ffcf3f" stroke-width="3" stroke-linecap="round" fill="none" opacity=".9">' +
        '<path d="M' + (cx - ed - 14 * k) + "," + ey + " h" + (28 * k) + " M" + (cx + ed - 14 * k) + "," + ey + " h" + (28 * k) + '"/>' +
        '<path d="M' + cx + "," + (R.y + (NASO - 18) * k) + " v" + (18 * k) + '" opacity=".7"/>' +
        '<path d="M' + (cx - 20 * k) + "," + (R.y + BOCCA * k) + " q" + (20 * k) + "," + (9 * k) + " " + (40 * k) + ',0" opacity=".7"/></g></svg>';
      var d = document.createElement("div"); d.innerHTML = s; return d.firstChild;
    }
    function camera() {
      pulisci(); C.stato = "camera"; tit.textContent = "🤳 Metti la faccia nell'ovale";
      nota.textContent = "Occhi sulle lineette gialle, naso in mezzo. Poi tocca il tasto rosso.";
      palco.classList.add("nero");
      var v = el("video", { autoplay: "", playsinline: "", muted: "" }); v.muted = true; v.playsInline = true;
      palco.appendChild(v);
      var conto = el("div", { class: "cnf-conto" }), lampo = el("div", { class: "cnf-lampo" });
      var scatto = el("button", { class: "cnf-scatto", type: "button", "aria-label": "Scatta" });
      var annulla = tasto("", "↩ Indietro", function () { scelta(); });
      piede.appendChild(annulla); piede.appendChild(scatto); piede.appendChild(tasto("", "🖼️ Galleria", function () { file.click(); }));
      scatto.disabled = true;
      var sag = null;
      function disegnaSagoma() { if (sag && sag.parentNode) sag.parentNode.removeChild(sag); sag = sagoma(riquadro()); palco.insertBefore(sag, conto.parentNode ? conto : null); }
      palco.appendChild(conto); palco.appendChild(lampo);
      disegnaSagoma(); dopo(80, disegnaSagoma);
      var md = navigator.mediaDevices;
      if (!md || !md.getUserMedia) return nienteCamera();
      md.getUserMedia({ video: { facingMode: "user", width: { ideal: 720 }, height: { ideal: 960 } }, audio: false }).then(function (s) {
        if (!C.vivo || C.stato !== "camera") { s.getTracks().forEach(function (tr) { tr.stop(); }); return; }
        C.stream = s; v.srcObject = s;
        var p = v.play(); if (p && p.catch) p.catch(function () {});
        // il tasto rosso si accende quando arrivano davvero le immagini (una fotocamera lenta: niente scatto a vuoto)
        function pronta() { if (v.videoWidth && C.vivo && C.stato === "camera" && C.stream === s && !C.scatta) scatto.disabled = false; }
        ["loadeddata", "playing", "resize"].forEach(function (ev) { v.addEventListener(ev, pronta); });
        pronta();
        // se il telefono non fa partire il video da solo: un tocco sull'immagine lo fa partire, e dopo un po' si consiglia la galleria
        v.addEventListener("pointerup", function () { if (!v.videoWidth) { var q = v.play(); if (q && q.catch) q.catch(function () {}); } });
        dopo(6000, function () { if (C.stato === "camera" && C.stream === s && !v.videoWidth) nota.textContent = "📷 Non vedi la tua faccia? Tocca qui sotto, oppure usa «🖼️ Galleria»."; });
      }).catch(function () { nienteCamera(); });
      var giu = false;
      scatto.addEventListener("pointerdown", function (e) { if (!scatto.disabled) { giu = true; e.preventDefault(); } });
      scatto.addEventListener("pointerup", function (e) { if (!giu) return; giu = false; e.preventDefault(); scatta(); });
      scatto.addEventListener("click", function (e) { if (e.detail === 0) scatta(); });
      function scatta() {
        if (scatto.disabled || !C.stream) return;
        vibra(12); scatto.disabled = true; C.scatta = true;
        [3, 2, 1].forEach(function (n, i) { dopo(i * 620, function () { conto.textContent = String(n); conto.classList.remove("su"); void conto.offsetWidth; conto.classList.add("su"); }); });
        dopo(3 * 620, function () {
          conto.textContent = ""; lampo.classList.remove("su"); void lampo.offsetWidth; lampo.classList.add("su");
          var R = riquadro(), vw = v.videoWidth, vh = v.videoHeight;
          C.scatta = false;
          if (!vw || !vh) { scatto.disabled = false; nota.textContent = "📷 La fotocamera non era pronta: tocca di nuovo il tasto rosso."; return; }
          var s = Math.max(R.W / vw, R.H / vh), ox = (R.W - vw * s) / 2, oy = (R.H - vh * s) / 2;
          // (il video si vede a specchio: la foto resta come la vedi)
          var sx = (R.W - (R.x + R.w) - ox) / s, sy = (R.y - oy) / s, sw = R.w / s, sh = R.h / s;
          var cv = tela(FW, FH), c = cv.getContext("2d");
          c.translate(FW, 0); c.scale(-1, 1);
          try { c.drawImage(v, sx, sy, sw, sh, 0, 0, FW, FH); } catch (e) { scatto.disabled = false; return; }
          C.base = cv; C.filt = {}; vibra(20);
          dopo(260, function () { fermaCamera(); filtri(); });
        });
      }
    }
    function nienteCamera() {
      fermaCamera();
      if (!C.vivo) return;
      // niente fotocamera dal vivo (permesso negato o telefono che non la dà): si usa quella del telefono, o la galleria
      scelta("📷 La fotocamera non si apre qui: tocca «Dalla galleria» e scegli una foto (o scattala col telefono).");
    }

    // ---- 2b. una foto dalla galleria: si sposta e si ingrandisce dentro l'ovale ----
    function daFile(f) {
      var url = null; try { url = URL.createObjectURL(f); } catch (e) { return; }
      var im = new Image();
      im.onload = function () {
        // (le foto grandi si rimpiccioliscono subito: niente lentezza mentre si sposta)
        var m = Math.max(im.width, im.height), k = m > 1400 ? 1400 / m : 1, cv = tela(Math.round(im.width * k), Math.round(im.height * k));
        cv.getContext("2d").drawImage(im, 0, 0, cv.width, cv.height); URL.revokeObjectURL(url);
        if (C.vivo) sistema(cv);
      };
      im.onerror = function () { URL.revokeObjectURL(url); if (C.vivo) scelta("Questa foto non si apre: provane un'altra."); };
      im.src = url;
    }
    function sistema(img) {
      pulisci(); C.stato = "sistema"; tit.textContent = "🖐️ Sistema la faccia nell'ovale";
      nota.textContent = "Trascina col dito e ingrandisci: occhi sulle lineette gialle.";
      palco.classList.add("nero");
      var cv = el("canvas", { class: "cnf-sist" }); palco.appendChild(cv);
      var R = null, z = 1, tx = 0, ty = 0, base = 1;
      function misura() {
        R = riquadro(); var dpr = Math.min(2, window.devicePixelRatio || 1);
        cv.width = Math.round(R.W * dpr); cv.height = Math.round(R.H * dpr);
        base = Math.max(R.w / img.width, R.h / img.height);   // la foto copre il riquadro
        var sg = sagoma(R); palco.appendChild(sg);
      }
      function disegna() {
        var c = cv.getContext("2d"), k = cv.width / R.W, s = base * z;
        c.setTransform(1, 0, 0, 1, 0, 0); c.fillStyle = "#000"; c.fillRect(0, 0, cv.width, cv.height);
        c.setTransform(k, 0, 0, k, 0, 0);
        c.drawImage(img, R.x + R.w / 2 - img.width * s / 2 + tx, R.y + R.h / 2 - img.height * s / 2 + ty, img.width * s, img.height * s);
      }
      misura(); disegna();
      var punti = {}, d0 = 0, z0 = 1;
      cv.addEventListener("pointerdown", function (e) { punti[e.pointerId] = [e.clientX, e.clientY]; try { cv.setPointerCapture(e.pointerId); } catch (_) {} var k = Object.keys(punti); if (k.length === 2) { d0 = dist(); z0 = z; } e.preventDefault(); });
      cv.addEventListener("pointermove", function (e) {
        var p = punti[e.pointerId]; if (!p) return;
        var k = Object.keys(punti);
        if (k.length === 1) { tx += e.clientX - p[0]; ty += e.clientY - p[1]; }
        punti[e.pointerId] = [e.clientX, e.clientY];
        if (k.length === 2 && d0) z = lim(z0 * dist() / d0, 0.5, 6);
        disegna();
      });
      function su(e) { delete punti[e.pointerId]; d0 = 0; }
      cv.addEventListener("pointerup", su); cv.addEventListener("pointercancel", su);
      function dist() { var k = Object.keys(punti), a = punti[k[0]], b = punti[k[1]]; return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)) || 1; }
      var zm = el("div", { class: "cnf-zoom" }, [el("button", { type: "button", text: "+" }), el("button", { type: "button", text: "−" })]);
      zm.children[0].addEventListener("click", function () { z = lim(z * 1.15, 0.5, 6); disegna(); });
      zm.children[1].addEventListener("click", function () { z = lim(z / 1.15, 0.5, 6); disegna(); });
      palco.appendChild(zm);
      piede.appendChild(tasto("", "↩ Un'altra", function () { scelta(); }));
      piede.appendChild(tasto("oro", "✅ Così", function () {
        var s = base * z, x0 = R.x + R.w / 2 - img.width * s / 2 + tx, y0 = R.y + R.h / 2 - img.height * s / 2 + ty;
        var out = tela(FW, FH), c = out.getContext("2d"); c.fillStyle = "#222"; c.fillRect(0, 0, FW, FH);
        c.drawImage(img, (R.x - x0) / s, (R.y - y0) / s, R.w / s, R.h / s, 0, 0, FW, FH);
        C.base = out; C.filt = {}; filtri();
      }));
    }

    // ---- 3. i filtri: la tua faccia grande e le 10 miniature (ognuna col suo filtro) ----
    function filtri() {
      pulisci(); C.stato = "filtri"; tit.textContent = "🎭 Scegli il filtro";
      nota.textContent = "Lo puoi cambiare quando vuoi, anche in saletta.";
      var F = { base: C.base, filt: C.filt || (C.filt = {}) };
      var grande = el("img", { class: "cnf-grande", alt: "" }), nome = el("div", { class: "cnf-nome" });
      palco.appendChild(grande); palco.appendChild(nome);
      function mostra() { grande.src = ovale(filtrata(F, C.x), FW, FH, true).toDataURL("image/png"); nome.textContent = FILTRI[C.x].e + " " + FILTRI[C.x].nome; }
      mostra();
      var griglia = el("div", { class: "cnf-filtri" }), tasti = [];
      FILTRI.forEach(function (f, i) {
        var mini = el("canvas"); mini.width = 58; mini.height = 72;
        var b = el("button", { class: "cnf-f" + (i === C.x ? " on" : ""), type: "button", "aria-label": f.nome }, [mini, el("span", { text: f.nome })]);
        var giu = false;
        b.addEventListener("pointerdown", function (e) { giu = true; e.preventDefault(); });
        b.addEventListener("pointerup", function (e) { if (!giu) return; giu = false; e.preventDefault(); scegli(i); });
        b.addEventListener("pointerleave", function () { giu = false; });
        b.addEventListener("click", function (e) { if (e.detail === 0) scegli(i); });
        b._mini = mini; tasti.push(b); griglia.appendChild(b);
      });
      root.insertBefore(griglia, piede);
      C.griglia = griglia;
      function scegli(i) { if (C.x === i) return; C.x = i; vibra(10); tasti.forEach(function (b, j) { b.classList.toggle("on", j === i); }); mostra(); }
      // le miniature una alla volta (il telefono non si blocca)
      var ordine = FILTRI.map(function (f, i) { return i; }), q = 0;
      (function una() {
        if (!C.vivo || C.stato !== "filtri" || q >= ordine.length) return;
        var i = ordine[q++], m = tasti[i]._mini;
        try { m.getContext("2d").drawImage(ovale(filtrata(F, i), 58, 72), 0, 0); } catch (e) {}
        dopo(16, una);
      })();
      piede.appendChild(tasto("", "📸 Rifai", function () { scelta(); }));
      piede.appendChild(tasto("verde", "✅ Fatto", function () { fatto(false); }));
    }

    function fatto(avatar) {
      var r = avatar || !C.base ? { avatar: true } : { base: C.base, x: C.x };
      chiudi(false, true);
      try { if (o.onFatto) o.onFatto(r); } catch (e) {}
    }
    // chiudi(conferma): se la foto è già fatta (sui filtri) e conferma, la si tiene così
    function chiudi(conferma, giaFatto) {
      if (!C.vivo) return;
      var tieni = conferma && C.base && C.stato === "filtri" && !giaFatto;
      C.vivo = false; fermaCamera(); C.tm.forEach(clearTimeout);
      if (C.griglia && C.griglia.parentNode) C.griglia.parentNode.removeChild(C.griglia);
      if (root.parentNode) root.parentNode.removeChild(root);
      if (CAM === ctrl) CAM = null;
      if (tieni) { try { if (o.onFatto) o.onFatto({ base: C.base, x: C.x }); } catch (e) {} }
      else if (!giaFatto) { try { if (o.onChiudi) o.onChiudi(); } catch (e) {} }
    }
    var ctrl = { chiudi: chiudi, aperto: function () { return C.vivo; }, stato: function () { return C.stato; } };
    CAM = ctrl;
    if (o.filtri && C.base) filtri(); else scelta();
    return ctrl;
  }

  var API = window.SG_CDN_FOTO = {
    FILTRI: FILTRI, W: FW, H: FH,
    filtra: filtra, ovale: ovale,
    metti: metti, filtro: filtro, togli: togli, svuota: svuota, ha: ha, ver: ver, pronta: pronta,
    importa: importa, cifra: cifra, decifra: decifra, puoCifrare: puoCifrare, jpeg: jpeg, daJpeg: daJpeg, aB64: aB64, daB64: daB64,
    camerino: camerino, aperto: function () { return !!(CAM && CAM.aperto()); }, chiudiCamerino: function (conferma) { if (CAM) CAM.chiudi(!!conferma); },
    spente: false,        // l'host ha spento le foto: tutti con l'avatar
    onCambio: null        // function (id): una foto (o un suo ritratto) è pronta o è cambiata
  };
  // il punto d'aggancio lasciato in js/chidinoi-arte.js
  function aggancia() { if (window.SG_CDN_ARTE) SG_CDN_ARTE.foto = fotoDi; }
  aggancia();
  if (!window.SG_CDN_ARTE) setTimeout(aggancia, 0);
})();

/* =========================================================
   «CHI DI NOI?» (id "chidinoi") — il nostro «Dimmi chi sei!» (That's You!) migliorato.
   Solo online, da 3 a 10 amici, ognuno dal suo telefono. Si gira per tanti POSTI buffi
   (In prigione, Nel bosco, Al calcetto del giovedì…): in ogni posto uno di voi è SOTTO TORCHIO,
   arriva vestito per il posto e le domande sono su di lui. I round:
   - 🖼️ Immagini: 4 carte (personaggi fatti con gli avatar, cose con le emoji, o lui stesso): scegli quella giusta per lui;
   - ✍️ Scrivi: tutti scrivono una battuta, la vetrina le mostra una alla volta, poi si vota la più divertente;
   - 🎨 Disegna: col dito e con gli adesivi (si trascinano, girano, ingrandiscono), sulla scena o sul suo ritratto, poi si vota;
   - 👆 Chi di noi: si tocca la faccia di un amico.
   PUNTI (decisione del proprietario): sempre VOTANDO COME GLI ALTRI, 100 per ogni amico che sceglie come te
   (nello Scrivi e nel Disegna il voto di chi è sotto torchio vale doppio); +100 all'autore della battuta o del disegno
   più votato; 3 jolly a testa che raddoppiano; TUTTI D'ACCORDO = +100 a tutti.
   Gran finale «Passa il ritratto!», titoli (🎯 Il Bersaglio, 🧠 Mente del Gruppo, 🃏 Il Cecchino + i titoli dei posti),
   podio e figurina da salvare. Memoria delle domande già uscite (telefono e profilo dell'host, e quelle viste dagli amici).
   Partito dal modello dei giochi online (saletta, rientri, uscite, fine partita, Sala).
   Contenuti: data/chidinoi-1…5.js (window.SG_CHIDINOI). Disegni: js/chidinoi-arte.js (window.SG_CDN_ARTE).
   LA FACCIA di un giocatore passa SEMPRE da faccia() qui sotto (→ SG_CDN_ARTE.faccia): è lì che si attacca la foto vera.
   ========================================================= */
(function () {
  "use strict";

  var ID = "chidinoi";
  var MIN = 3, MAX = 10;
  var TEMPI = { normali: { sc: 15, scr: 60, dis: 90 }, calma: { sc: 20, scr: 80, dis: 120 }, veloci: { sc: 12, scr: 45, dis: 60 } };
  var T_ARRIVO = 6, T_RIEP = 10, T_VOTA = 20, T_VOTAD = 25, T_CLASS = 9, T_PASSA = 30, T_FVOTA = 25, T_FINTRO = 5, T_NESSUNO = 5;
  var REAZ = ["😂", "🔥", "❤️", "🍅", "💀"];
  var COLORI = ["#1b1b1f", "#ffffff", "#e03131", "#f59f00", "#ffd43b", "#2f9e44", "#1c7ed6", "#e64980"];
  var GOMMA = 8, PUNTE = [7, 18];
  var LW = 750, LH = 1000;          // la tavola da disegno (3:4), in coordinate fisse
  var MAX_PUNTI = 2600, MAX_ADESIVI = 30;
  var RESPIRO = 5000, RESPIRO_MAX = 10000;   // la partita ripresa: almeno 5 s fermi, e chi non torna entro 10 s esce
  var ARTE = function () { return window.SG_CDN_ARTE || {}; };

  function fmtN(n) { var s = String(Math.round(Math.abs(n || 0))).replace(/\B(?=(\d{3})+(?!\d))/g, "."); return (n < 0 ? "−" : "") + s; }   // 1.000
  function avatarValido(o) { return o && typeof o === "object" && JSON.stringify(o).length < 3000 ? o : null; }
  function mescola(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function caso(a) { return a[Math.floor(Math.random() * a.length)]; }
  function lim(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function vibra(p) { try { if (navigator.vibrate) navigator.vibrate(p || 10); } catch (e) {} }
  function nuovoId() { return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8); }
  function tx(n, s) { s = s == null ? "" : String(s); if (n && n.textContent !== s) n.textContent = s; }
  function svuota(n) { while (n && n.firstChild) n.removeChild(n.firstChild); }
  function oggi() { return Math.floor(Date.now() / 86400000); }
  function pulisci(s, max) { return String(s || "").replace(/[\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max || 40); }
  function punti(n) { return fmtN(n) + (Math.abs(n) === 1 ? " punto" : " punti"); }
  function maiuscolo(s) { return String(s || "").toUpperCase(); }

  // =========================================================
  //  CONTENUTI
  // =========================================================
  function dati() { return window.SG_CHIDINOI || { posti: [], comuni: [] }; }
  var POSTI_ORD = ["prigione", "bosco", "treno", "villa", "isola", "matrimonio", "pranzo", "condominio", "sagra", "pronto",
    "crociera", "reality", "gita", "spiaggia", "appuntamento", "calcetto", "sabato", "ufficio", "compleanno", "macchina"];
  function posti() {
    var D = dati(), m = {};
    (D.posti || []).forEach(function (p) { m[p.id] = p; });
    return POSTI_ORD.filter(function (id) { return m[id]; }).map(function (id) { return m[id]; }).concat((D.posti || []).filter(function (p) { return POSTI_ORD.indexOf(p.id) < 0; }));
  }
  function posto(id) { var l = posti(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function nomeCorto(p) { return String(p.nome || "").replace(/^(In|Nel|Nella|Sul|Su un'|Su una|Al|Alla|Il|Dentro un|In una|In un) /i, "").replace(/^\w/, function (c) { return c.toUpperCase(); }); }
  function comuni(tipo) { return (dati().comuni || []).filter(function (c) { return c.tipo === tipo; }); }
  // {P} = nome di chi è sotto torchio, {o|a} = finale secondo il suo avatar (lui/lei); senza nessuno: «o/a»
  function accorda(s, nome, donna) {
    s = String(s || "");
    s = s.replace(/\{([^{}|]*)\|([^{}|]*)\}/g, function (_, m, f) { return donna == null ? (m + "/" + f) : (donna ? f : m); });
    return nome != null ? s.replace(/\{P\}/g, nome) : s;
  }
  function eDonna(om) { return !!(om && om.forma === "donna"); }
  // gli adesivi di una stringa di emoji (le emoji composte restano intere)
  function spezzaEmoji(s) {
    s = String(s || "");
    try { if (window.Intl && Intl.Segmenter) return Array.from(new Intl.Segmenter("it", { granularity: "grapheme" }).segment(s), function (x) { return x.segment; }).filter(function (x) { return x.trim(); }); } catch (e) {}
    var out = [], re = /(\p{Extended_Pictographic}(️|‍\p{Extended_Pictographic}️?)*)/gu, m;
    try { while ((m = re.exec(s))) out.push(m[0]); } catch (e) { out = s.split(""); }
    return out;
  }

  // ---------- la memoria delle domande già uscite ----------
  // sul telefono: { id: giorno } ; nel profilo: stat.chidinoi.visti = "pri:i1.4.7,s2|bos:…" (senza giorno)
  var LS_VISTI = "sg_chidinoi_visti", LS_POSTI = "sg_chidinoi_posti", LS_TORCHIO = "sg_chidinoi_torchio";
  function leggiJ(k, d) { try { var v = JSON.parse(localStorage.getItem(k) || "null"); return v && typeof v === "object" ? v : d; } catch (e) { return d; } }
  function scriviJ(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function compatta(ids) {
    var g = {};
    ids.forEach(function (id) { var m = /^([a-z]{3})-([a-z])(\d+)$/.exec(id); if (!m) return; var p = g[m[1]] || (g[m[1]] = {}); (p[m[2]] || (p[m[2]] = [])).push(+m[3]); });
    return Object.keys(g).map(function (c) { return c + ":" + Object.keys(g[c]).map(function (t) { return t + g[c][t].sort(function (a, b) { return a - b; }).join("."); }).join(","); }).join("|");
  }
  function scompatta(s) {
    var out = [];
    String(s || "").split("|").forEach(function (blocco) {
      var a = blocco.split(":"); if (a.length !== 2 || !/^[a-z]{3}$/.test(a[0])) return;
      a[1].split(",").forEach(function (pz) {
        var t = pz.charAt(0); if (!/[a-z]/.test(t)) return;
        pz.slice(1).split(".").forEach(function (n) { n = parseInt(n, 10); if (n > 0 && n < 1000) out.push(a[0] + "-" + t + (n < 10 ? "0" + n : n) + ""); });
      });
    });
    return out;
  }
  function vistiMiei() {
    var v = leggiJ(LS_VISTI, {}), o = {};
    Object.keys(v).forEach(function (k) { o[k] = +v[k] || 1; });
    try {
      var st = window.SGNube && SGNube.profilo && SGNube.profilo() && SGNube.statGioco ? SGNube.statGioco(ID) : null;
      if (st && st.visti) scompatta(st.visti).forEach(function (id) { if (!o[id]) o[id] = 1; });
    } catch (e) {}
    return o;
  }
  // a fine partita: le domande uscite si segnano sul telefono e nel profilo
  function segnaVisti(ids) {
    if (!ids || !ids.length) return;
    var v = leggiJ(LS_VISTI, {}), g = oggi();
    ids.forEach(function (id) { if (typeof id === "string" && id.length < 12) v[id] = g; });
    var k = Object.keys(v); if (k.length > 2400) { k.sort(function (a, b) { return v[a] - v[b]; }).slice(0, k.length - 2400).forEach(function (x) { delete v[x]; }); }
    scriviJ(LS_VISTI, v);
    try {
      if (window.SGNube && SGNube.profilo && SGNube.profilo() && SGNube.salvaProgressi) {
        var tutti = Object.keys(vistiMiei()).filter(function (id) { return /^[a-z]{3}-[isdc]\d+$/.test(id); });
        SGNube.salvaProgressi(null, ID, [["partite", 1]], null, [["visti", compatta(tutti)]]);
      }
    } catch (e) {}
  }

  // =========================================================
  //  SUONI (sintetizzati; sul computer di prova sono spenti)
  // =========================================================
  function suono(tipo) {
    var ac = null; try { ac = SG.audioCtx && SG.audioCtx(); } catch (e) {}
    if (!ac) return;
    try {
      var ora = ac.currentTime;
      var nota = function (f, t0, dur, forma, vol, f2) {
        var o = ac.createOscillator(), g = ac.createGain();
        o.type = forma || "sine"; o.frequency.setValueAtTime(f, ora + t0);
        if (f2) o.frequency.exponentialRampToValueAtTime(f2, ora + t0 + dur);
        g.gain.setValueAtTime(0.0001, ora + t0); g.gain.exponentialRampToValueAtTime(vol || 0.12, ora + t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, ora + t0 + dur);
        o.connect(g); g.connect(ac.destination); o.start(ora + t0); o.stop(ora + t0 + dur + 0.05);
      };
      if (tipo === "tic") nota(1100, 0, 0.05, "square", 0.04);
      else if (tipo === "pop") nota(520, 0, 0.09, "triangle", 0.1, 900);
      else if (tipo === "voto") nota(760, 0, 0.07, "sine", 0.08, 1040);
      else if (tipo === "boing") { nota(220, 0, 0.25, "triangle", 0.12, 660); nota(330, 0.12, 0.2, "sine", 0.06, 880); }
      else if (tipo === "evviva") [523, 659, 784, 1047].forEach(function (f, i) { nota(f, i * 0.09, 0.22, "triangle", 0.11); });
      else if (tipo === "tutti") [523, 659, 784, 1047, 1319, 1568].forEach(function (f, i) { nota(f, i * 0.07, 0.3, "triangle", 0.12); });
      else if (tipo === "zero") nota(180, 0, 0.35, "sawtooth", 0.06, 110);
      else if (tipo === "sfilata") { nota(392, 0, 0.12, "square", 0.05); nota(587, 0.1, 0.18, "square", 0.05, 784); }
      else if (tipo === "arrivo") { [392, 494, 587, 784].forEach(function (f, i) { nota(f, i * 0.11, 0.26, "sine", 0.09); }); }
      else if (tipo === "lancia") nota(300, 0, 0.18, "sine", 0.1, 1200);
    } catch (e) {}
  }

  // =========================================================
  //  LA FACCIA (punto unico: oggi l'avatar, domani la foto col filtro — vedi js/chidinoi-arte.js)
  // =========================================================
  var OMINI = {};   // id → avatar (le foto lo mandano una volta: si tiene qui)
  function ricordaOmini(players) { (players || []).forEach(function (p) { if (p && p.id && p.omino) OMINI[p.id] = p.omino; }); }
  function faccia(id, nome, o) {
    var A = ARTE();
    if (!A.faccia) return "";
    return A.faccia({ id: id, nome: nome, omino: OMINI[id] || null }, o || {});
  }
  // un'immagine con la faccia di un giocatore: si ricorda di chi è, così quando arriva (o cambia) la sua foto si aggiorna da sola
  function imgF(t, id, nome, o, classe) { var i = img(t, faccia(id, nome, o), classe); i._cnf = { id: id, nome: nome, o: o || {} }; return i; }
  function aggiornaFacce(id) {
    [].forEach.call(document.querySelectorAll("img"), function (im) {
      var c = im._cnf; if (!c || (id && c.id !== id)) return;
      var s = faccia(c.id, c.nome, c.o); if (s && im.getAttribute("src") !== s) im.src = s;
    });
    if (FB && FB.agg) FB.agg();
  }

  // =========================================================
  //  LA FOTO VERA (js/chidinoi-foto.js). La chiave sta SOLO nel link della stanza, dopo il # (SG.chiaveFoto):
  //  ogni foto viaggia cifrata (AES-GCM) a pezzi, come mossa normale (mai trattenuta, mai nella vm);
  //  nella vm solo { f: numero della foto, x: filtro, h: l'host ce l'ha intera } e kf (l'impronta della chiave).
  //  Le foto degli altri restano solo in memoria e si buttano quando si esce dal gioco; la mia resta in questa scheda
  //  (sessionStorage) finché dura il gioco, per non rifarla se la pagina si ricarica.
  // =========================================================
  var FX = function () { return window.SG_CDN_FOTO || null; };
  var SS_MIA = "sg-cn-mia", PEZZO = 6000;
  function nuovoFT() { return { key: null, kf: null, pronta: false, mia: null, enc: null, rx: {}, chiesti: {}, visti: {}, male: {}, ultR: 0, ultP: 0, chiesto: false, vm: null, cb: null, t: null }; }
  var FT = nuovoFT();
  function nuovoF() { var s = ""; while (s.length < 8) s += Math.random().toString(36).slice(2); return s.slice(0, 8); }
  function miaLeggi(cb) {
    var o = null; try { o = JSON.parse(sessionStorage.getItem(SS_MIA) || "null"); } catch (e) {}
    if (!o) return cb(null);
    if (o.u && Date.now() - o.u > 30 * 60000) { miaScrivi(null); return cb(null); }   // (fuori dal gioco da più di mezz'ora: si butta)
    if (o.av) return cb({ av: true });
    if (!o.f || !o.j || !FX()) return cb(null);
    try { FX().daJpeg(FX().daB64(o.j), function (cv) { cb(cv ? { f: o.f, x: o.x | 0, cv: cv, j: o.j } : null); }); } catch (e) { cb(null); }
  }
  function miaScrivi(m) { try { if (!m) sessionStorage.removeItem(SS_MIA); else sessionStorage.setItem(SS_MIA, JSON.stringify(m.av ? { av: 1 } : { f: m.f, j: m.j, x: m.x })); } catch (e) {} }
  // all'inizio: la chiave (dal link, o fatta adesso dall'host) e la mia foto di prima (pagina ricaricata)
  function fotoInizia(codice, crea, myId, fatto) {
    var F = FX(), n = 2;
    function fine() { if (--n === 0) { FT.pronta = true; if (fatto) fatto(); } }
    if (!F) { FT.pronta = true; if (fatto) fatto(); return; }
    var k = null; try { k = window.SG && SG.chiaveFoto ? SG.chiaveFoto(codice, crea) : null; } catch (e) {}
    F.importa(k).then(function (r) { if (r) { FT.key = r.key; FT.kf = r.kf; } fine(); });
    miaLeggi(function (m) { if (m) { FT.mia = m; miaScrivi(m); if (m.cv) F.metti(myId, m.f, m.cv, m.x); } fine(); });   // (di nuovo in gioco: niente più scadenza)
  }
  function fotoOk(vm) { return !!(FT.key && vm && vm.kf && vm.kf === FT.kf); }
  function validoPezzo(m) {
    return typeof m.f === "string" && /^[a-z0-9]{4,16}$/.test(m.f) && typeof m.iv === "string" && m.iv.length <= 24 && typeof m.c === "string" && m.c.length <= PEZZO + 8 &&
      (m.di | 0) >= 1 && (m.di | 0) <= 16 && (m.pz | 0) >= 0 && (m.pz | 0) < (m.di | 0) && /^[A-Za-z0-9+/=]*$/.test(m.c);
  }
  function xDi(id, f) { var v = FT.vm, l = v ? (v.players || []).concat(v.guarda || []) : []; for (var i = 0; i < l.length; i++) if (l[i].id === id && l[i].fo && l[i].fo.f === f) return l[i].fo.x | 0; return 0; }
  // la mia faccia all'host: quale foto e quale filtro (o nessuna: avatar), poi i pezzi cifrati
  function mandaRitratto(cb) {
    var m = FT.mia, ok = fotoOk(FT.vm) && !(FX() && FX().spente) && m && !m.av && m.f;
    FT.ultR = Date.now();
    cb.invia({ t: "ritratto", f: ok ? m.f : null, x: m && !m.av ? m.x | 0 : 0 });
  }
  function mandaMia(cb, forza) {
    var m = FT.mia, F = FX(); if (!m || m.av || !m.j || !FT.key || !F || !fotoOk(FT.vm)) return;
    var ora = Date.now(); if (!forza && ora - FT.ultP < 5000) return; FT.ultP = ora;
    function via(E) { for (var i = 0; i < E.pz.length; i++) cb.invia({ t: "foto", f: E.f, iv: E.iv, pz: i, di: E.pz.length, c: E.pz[i] }); }
    if (FT.enc && FT.enc.f === m.f) return via(FT.enc);
    F.cifra(FT.key, F.daB64(m.j), m.f).then(function (r) {
      if (FT.mia !== m) return;
      var pz = []; for (var i = 0; i < r.c.length; i += PEZZO) pz.push(r.c.slice(i, i + PEZZO));
      FT.enc = { f: m.f, iv: r.iv, pz: pz }; via(FT.enc);
    });
  }
  // a ogni foto dell'host (e ogni secondo): i filtri degli altri, le foto che mancano (si chiedono), la mia (si rimanda se l'host non ce l'ha)
  function fotoVm(t, vm, cb) {
    FT.vm = vm; FT.cb = cb; FT.t = t;
    var F = FX(); if (!F) return;
    var sp = !!(vm.imp && vm.imp.foto === false);
    if (F.spente !== sp) { F.spente = sp; setTimeout(function () { aggiornaFacce(null); }, 0); }
    var ok = fotoOk(vm), ora = Date.now(), io = null;
    (vm.players || []).concat(vm.guarda || []).forEach(function (p) {
      if (p.id === cb.myId) { io = p; return; }
      var fo = p.fo;
      if (!fo || !fo.f) { if (F.ha(p.id)) F.togli(p.id); return; }
      if (F.ha(p.id, fo.f)) { F.filtro(p.id, fo.x); return; }
      if (F.ha(p.id)) F.togli(p.id);   // (una foto vecchia: l'ha rifatta)
      if (!ok || !fo.h || cb.sonoHost) return;
      // arriva da sola (l'host la manda a tutti appena ce l'ha); se tarda o è andata persa, la chiedo
      var R = FT.rx[p.id], kv = p.id + "|" + fo.f;
      if (R && R.f === fo.f && ora - R.t < 6000) return;
      if (!FT.visti[kv]) { FT.visti[kv] = ora; return; }
      if (ora - FT.visti[kv] < 2500 || ora - (FT.chiesti[p.id] || 0) < 6000 || FT.male[kv]) return;
      FT.chiesti[p.id] = ora; cb.invia({ t: "dammiFoto", id: p.id });
    });
    if (!io || !FT.pronta) return;
    var m = FT.mia, f = m && !m.av && ok && !sp ? m.f : null, x = m && !m.av ? m.x | 0 : 0, fo = io.fo || null;
    if ((fo ? fo.f : null) !== f || (f && (fo.x | 0) !== x)) { if (ora - FT.ultR > 2500) setTimeout(function () { mandaRitratto(cb); }, 0); }
    else if (f && !fo.h) setTimeout(function () { mandaMia(cb); }, 0);
  }
  // un pezzo di una foto (dall'host, per tutti o solo per me): quando ci sono tutti si decifra e si mostra
  function fotoPezzo(m, cb) {
    var F = FX(); if (!F || !FT.key || !m.id || m.id === cb.myId || !validoPezzo(m) || F.ha(m.id, m.f)) return;
    var R = FT.rx[m.id];
    if (!R || R.f !== m.f || R.iv !== m.iv || R.di !== (m.di | 0)) R = FT.rx[m.id] = { f: m.f, iv: m.iv, di: m.di | 0, pz: {}, n: 0, t: 0 };
    R.t = Date.now();
    if (R.pz[m.pz] == null) { R.pz[m.pz] = m.c; R.n++; }
    if (R.n < R.di || R.lavora) return;
    R.lavora = true;
    var c = ""; for (var i = 0; i < R.di; i++) c += R.pz[i];
    function male() { if (FT.rx[m.id] === R) delete FT.rx[m.id]; FT.male[m.id + "|" + R.f] = 1; }
    F.decifra(FT.key, R.iv, c, R.f).then(function (bytes) {
      F.daJpeg(bytes, function (cv) {
        if (!cv) return male();
        if (FT.rx[m.id] === R) delete FT.rx[m.id];
        if (FT.key) F.metti(m.id, R.f, cv, xDi(m.id, R.f));
      });
    }).catch(male);
  }
  // il camerino (js/chidinoi-foto.js): selfie, galleria o avatar, poi il filtro
  function apriCamerino(t, cb, soloFiltri) {
    var F = FX(); if (!F || F.aperto() || !cb.myId) return;
    var m = FT.mia;
    setTimeout(function () { cb.invia({ t: "cam", on: 1 }); }, 0);
    var nome = t.nomeProfilo ? t.nomeProfilo() : "";
    F.camerino({ base: m && m.cv ? m.cv : null, x: m && m.cv ? m.x : 0, filtri: !!soloFiltri,
      avatar: ARTE().faccia ? ARTE().faccia({ id: "__avatar", nome: nome, omino: OMINI[cb.myId] || t.mioOmino(nome) }, {}) : "",
      onFatto: function (r) { scegliMia(r, cb); cb.invia({ t: "cam", on: 0 }); },
      onChiudi: function () { cb.invia({ t: "cam", on: 0 }); if (FB && FB.agg) FB.agg(); } });
  }
  function scegliMia(r, cb) {
    var F = FX(); if (!F) return;
    var nuova = false;
    if (r.avatar) { FT.mia = { av: true }; FT.enc = null; F.togli(cb.myId); }
    else if (FT.mia && FT.mia.cv && FT.mia.cv === r.base) { FT.mia.x = r.x | 0; F.filtro(cb.myId, r.x); }   // solo il filtro
    else {
      var j = ""; try { j = F.aB64(F.jpeg(r.base)); } catch (e) { return; }
      FT.mia = { f: nuovoF(), x: r.x | 0, cv: r.base, j: j }; FT.enc = null; nuova = true;
      F.metti(cb.myId, FT.mia.f, r.base, r.x);
    }
    miaScrivi(FT.mia);
    if (FB && FB.agg) FB.agg();
    setTimeout(function () { mandaRitratto(cb); if (nuova) mandaMia(cb, true); }, 0);   // (solo il filtro: viaggia il nome, la foto no)
  }
  // il riquadro della foto nella saletta (uno solo, aggiornato a pezzi): la mia faccia, «📸 Rifai», «🎭 Filtro», chi si sta facendo la foto
  var FB = null;
  function boxFoto(t, vm, cb) {
    var F = FX(); if (!F) return null;
    if (!FB || FB.t !== t || FB.my !== cb.myId) {
      var faccina = imgF(t, cb.myId, "", {}, "cn-fb-f");
      var testo = t.el("span", { class: "cn-fb-tx" }), sotto = t.el("small", { class: "cn-fb-sotto" });
      var bRifai = tasto(t, "cn-fb-b", "📸 Foto", function () { apriCamerino(t, FB.cb); });
      var bFiltro = tasto(t, "cn-fb-b", "🎭 Filtro", function () { apriCamerino(t, FB.cb, true); });
      var tondo = t.el("span", { class: "cn-fb-w" }, [faccina]);
      var el = t.el("div", { class: "cn-fb" }, [t.el("div", { class: "cn-fb-riga" }, [tondo, t.el("span", { class: "cn-fb-col" }, [testo, sotto]), t.el("span", { class: "cn-fb-btns" }, [bRifai, bFiltro])])]);
      FB = { t: t, my: cb.myId, el: el, cb: cb, vm: vm, agg: function () {
        var v = FB.vm, ok = fotoOk(v), m = FT.mia, foto = !!(m && !m.av && m.cv), f0 = F.FILTRI[(m && m.x) | 0] || F.FILTRI[0];
        stile(); FB.el.style.display = FT.pronta ? "" : "none";
        var s = faccia(cb.myId, ""); if (s && faccina.getAttribute("src") !== s) faccina.src = s;
        var tx0, sot = "", puo = ok && !F.spente;
        if (F.spente) tx0 = "🙂 Stasera foto spente: si gioca con gli avatar";
        else if (!FT.key) tx0 = "📸 Le foto si vedono solo entrando dal link dell'host";
        else if (!ok) tx0 = "📸 Il tuo link è vecchio: le foto non si vedono";
        else if (foto) { tx0 = f0.e + " " + f0.nome; sot = "📸 La tua faccia per stasera"; }
        else tx0 = "🙂 Giochi con l'avatar";
        var cam = (v.cam || []).filter(function (id) { return id !== cb.myId; }).map(function (id) { return nomeVm(v, id); });
        if (cam.length) sot = (sot ? sot + " · " : "") + "📸 Si fanno la foto: " + cam.join(", ");
        tx(testo, tx0); tx(sotto, sot); sotto.style.display = sot ? "" : "none";
        tondo.style.display = puo || foto ? "" : "none";
        bRifai.style.display = puo ? "" : "none"; tx(bRifai, foto ? "📸 Rifai" : "📸 Foto");
        bFiltro.style.display = puo && foto ? "" : "none";
      } };
    }
    FB.cb = cb; FB.vm = vm; FB.agg();
    return FB.el;
  }
  // chi esce dal gioco (Esci, Cambia gioco, Sala…): le foto degli altri si buttano, e anche la mia
  var SCHERMI = [], GUARDIA = null, ASSENTE = 0;
  function mio(s) { if (s && SCHERMI.indexOf(s) < 0) { SCHERMI = SCHERMI.filter(function (x) { return document.body.contains(x); }); SCHERMI.push(s); } guardia(); return s; }
  function guardia() {
    if (GUARDIA) return;
    ASSENTE = 0;
    GUARDIA = setInterval(function () {
      if (SCHERMI.some(function (s) { return document.body.contains(s); })) { ASSENTE = 0; if (FT.vm && FT.cb) fotoVm(FT.t, FT.vm, FT.cb); return; }
      if (++ASSENTE >= 8) pulisciFoto(false, true);   // (8 secondi fuori: non è un cambio di schermata del core)
    }, 1000);
  }
  // anchemia: via anche la mia (Esci); fuori: uscito senza dirlo (Cambia gioco, Sala…): la mia resta mezz'ora in questa scheda, poi si butta
  function pulisciFoto(anchemia, fuori) {
    clearInterval(GUARDIA); GUARDIA = null; SCHERMI = [];
    var F = FX(); if (F) { F.chiudiCamerino(false); F.svuota(); F.spente = false; }
    if (anchemia) miaScrivi(null);
    else if (fuori) try { var o = JSON.parse(sessionStorage.getItem(SS_MIA) || "null"); if (o && !o.u) { o.u = Date.now(); sessionStorage.setItem(SS_MIA, JSON.stringify(o)); } } catch (e) {}
    FT = nuovoFT(); FB = null;
  }
  if (FX()) FX().onCambio = aggiornaFacce;

  // =========================================================
  //  I DISEGNI: tratti compressi e adesivi, una tavola fissa 750×1000
  //  dis = { s: [[colore, punta, "x,y,dx,dy,…"], …], a: [[emoji, x, y, scala×100, gradi], …] }
  // =========================================================
  function codTratto(pts) {   // pts = [x0, y0, x1, y1, …] interi
    var o = [pts[0], pts[1]];
    for (var i = 2; i < pts.length; i += 2) o.push(pts[i] - pts[i - 2], pts[i + 1] - pts[i - 1]);
    return o.join(",");
  }
  function decTratto(s) {
    var a = String(s || "").split(",").map(function (x) { return parseInt(x, 10) || 0; }), o = [];
    if (a.length < 2) return o;
    o.push(a[0], a[1]);
    for (var i = 2; i + 1 < a.length; i += 2) o.push(o[i - 2] + a[i], o[i - 1] + a[i + 1]);
    return o;
  }
  function disValido(d) {
    if (!d || typeof d !== "object") return null;
    var s = Array.isArray(d.s) ? d.s.filter(function (t) { return Array.isArray(t) && t.length === 3 && typeof t[2] === "string" && t[2].length < 20000; }).slice(0, 400) : [];
    var a = Array.isArray(d.a) ? d.a.filter(function (x) { return Array.isArray(x) && x.length === 5 && typeof x[0] === "string" && x[0].length <= 16; }).slice(0, MAX_ADESIVI) : [];
    return { s: s.map(function (t) { return [lim(t[0] | 0, 0, GOMMA), t[1] ? 1 : 0, t[2]]; }), a: a.map(function (x) { return [x[0], lim(x[1] | 0, -200, LW + 200), lim(x[2] | 0, -200, LH + 200), lim(x[3] | 0, 25, 600), (x[4] | 0) % 360]; }) };
  }
  function disVuoto(d) { return !d || (!(d.s && d.s.length) && !(d.a && d.a.length)); }
  // disegna i tratti di un disegno su un contesto (scala k = larghezza/750); la gomma cancella solo i tratti di questo strato
  function rendiTratti(c, d, k) {
    (d.s || []).forEach(function (t) {
      var p = decTratto(t[2]); if (p.length < 2) return;
      c.globalCompositeOperation = t[0] === GOMMA ? "destination-out" : "source-over";
      c.strokeStyle = t[0] === GOMMA ? "#000" : COLORI[t[0]] || "#000";
      c.lineWidth = PUNTE[t[1] ? 1 : 0] * (t[0] === GOMMA ? 2.2 : 1) * k; c.lineCap = "round"; c.lineJoin = "round";
      c.beginPath(); c.moveTo(p[0] * k, p[1] * k);
      if (p.length === 2) c.lineTo(p[0] * k + 0.1, p[1] * k);
      for (var i = 2; i < p.length; i += 2) c.lineTo(p[i] * k, p[i + 1] * k);
      c.stroke();
    });
    c.globalCompositeOperation = "source-over";
  }
  function rendiAdesivi(c, d, k) {
    (d.a || []).forEach(function (x) { ARTE().emoji && ARTE().emoji(c, x[0], x[1] * k, x[2] * k, 120 * (x[3] / 100) * k, (x[4] || 0) * Math.PI / 180); });
  }
  // un disegno intero (sfondo + strati) su un canvas w×h. sfondo = canvas/immagine o null (bianco)
  function rendiTutto(cv, sfondo, strati) {
    var c = cv.getContext("2d"), w = cv.width, h = cv.height, k = w / LW;
    c.globalCompositeOperation = "source-over";
    c.fillStyle = "#ffffff"; c.fillRect(0, 0, w, h);
    if (sfondo) try { c.drawImage(sfondo, 0, 0, w, h); } catch (e) {}
    var tmp = document.createElement("canvas"); tmp.width = w; tmp.height = h;
    var tc = tmp.getContext("2d");
    (strati || []).forEach(function (d) {
      if (!d) return;
      tc.clearRect(0, 0, w, h); rendiTratti(tc, d, k);
      c.drawImage(tmp, 0, 0); rendiAdesivi(c, d, k);
    });
  }
  // lo sfondo della tavola: la scena del posto, il ritratto di chi è sotto torchio (grande, sul suo colore), o bianco.
  // cb(canvas) arriva quando l'immagine è pronta (il ritratto è un'immagine da caricare)
  var SFONDI = {};
  function sfondoTavola(su, idPosto, prot, nomeProt, cb) {
    var k = su + "|" + idPosto + "|" + prot + "|" + (OMINI[prot] ? JSON.stringify(OMINI[prot]).length : 0) + "|" + (su === "ritratto" && FX() && !FX().spente ? FX().ver(prot) : 0);
    if (SFONDI[k] && SFONDI[k].pronto) return cb(SFONDI[k].cv);
    if (SFONDI[k]) { SFONDI[k].attesa.push(cb); return; }
    var cv = document.createElement("canvas"); cv.width = LW / 2; cv.height = LH / 2;
    var c = cv.getContext("2d"), S = SFONDI[k] = { cv: cv, pronto: false, attesa: [cb] };
    function fatto() { S.pronto = true; S.attesa.forEach(function (f) { try { f(cv); } catch (e) {} }); S.attesa = []; }
    if (su === "scena") { try { c.drawImage(ARTE().scena(idPosto, LW / 2, LH / 2), 0, 0); } catch (e) {} return fatto(); }
    if (su !== "ritratto") { c.fillStyle = "#fffdf6"; c.fillRect(0, 0, cv.width, cv.height); return fatto(); }
    var g = c.createRadialGradient(cv.width / 2, cv.height * 0.4, 10, cv.width / 2, cv.height * 0.45, cv.height * 0.7);
    g.addColorStop(0, "#fff6d8"); g.addColorStop(1, "#ffc76b"); c.fillStyle = g; c.fillRect(0, 0, cv.width, cv.height);
    var img = new Image();
    img.onload = function () { var w = cv.width * 0.98, h = w * 182 / 178; try { c.drawImage(img, (cv.width - w) / 2, cv.height - h, w, h); } catch (e) {} fatto(); };
    img.onerror = fatto;
    // con la foto: si aspetta un attimo il ritratto giusto (col costume), al massimo 3 secondi
    var o = { posto: idPosto }, p = { id: prot, nome: nomeProt, omino: OMINI[prot] || null }, prove = 0;
    (function carica() {
      if (FX() && !FX().pronta(prot, o, p) && ++prove < 30) return setTimeout(carica, 100);
      img.src = faccia(prot, nomeProt, o);
    })();
  }

  // =========================================================
  //  LE REGOLE DELL'HOST (sempre valide)
  // =========================================================
  function impNorm(i) {
    i = i || {};
    var tutti = posti().map(function (p) { return p.id; });
    var acc = Array.isArray(i.posti) ? i.posti.filter(function (x) { return tutti.indexOf(x) >= 0; }) : tutti.slice();
    if (acc.length < 3) acc = tutti.slice();
    var n = [3, 4, 5, 6, 7, 8, 10].indexOf(+i.nPosti) >= 0 ? +i.nPosti : 5;
    return { posti: acc, nPosti: Math.min(n, acc.length), nDom: [3, 4, 5].indexOf(+i.nDom) >= 0 ? +i.nDom : 4, tempi: TEMPI[i.tempi] ? i.tempi : "normali", foto: i.foto !== false };
  }
  // il ritmo dentro un posto: con 3 o 4 domande il Disegna c'è un posto sì e uno no (posti 1°, 3°, 5°…)
  function pianoDomande(nDom, iPosto) {
    var dis = iPosto % 2 === 0;
    if (nDom === 3) return ["i", "s", dis ? "d" : "i"];
    if (nDom === 4) return ["i", "c", "s", dis ? "d" : "i"];
    return ["i", "c", "s", "i", "d"];
  }
  function stimaMinuti(imp, n) {
    var T = TEMPI[imp.tempi] || TEMPI.normali, sec = n * 2 + 6, i;
    for (i = 0; i < imp.nPosti; i++) pianoDomande(imp.nDom, i).forEach(function (tp) {
      sec += tp === "i" ? T.sc + 12 : tp === "c" ? T.sc + 10 : tp === "s" ? T.scr * 0.75 + n * 2.4 + T_VOTA * 0.6 + 12 : T.dis * 0.85 + T_VOTAD * 0.6 + 12;
    });
    sec += imp.nPosti * 14 + 3 * T_PASSA + T_FVOTA + 40;
    return Math.max(10, Math.round(sec / 60));
  }

  // =========================================================
  //  HOST: tiene la partita vera e manda a tutti la "foto" (vm)
  // =========================================================
  function host(t) {
    if (!(window.SGNet && SGNet.disponibile())) return senzaRete(t);
    var nomeHost = (t.giocatori && t.giocatori[0]) || t.nomeProfilo() || "Host";
    // io che tengo la partita: "host", oppure (host di riserva) l'id da amico di chi ha preso il posto dell'host sparito
    var IO = t.mioId || "host";
    var H = { fase: "lobby", codice: "…", pronta: false, partita: 0, pid: null, imp: impNorm(t.impostazioni),
      rip: 0,   // quante volte la partita è ripresa (nel conto di «Avanti»: dopo una ripresa riparte giusto su tutti i telefoni)
      kf: null,   // l'impronta della chiave delle foto (è già nella foto per tutti): resta uguale anche se l'host perde la chiave
      players: [{ id: IO, nome: nomeHost, omino: t.mioOmino(nomeHost), punti: 0, jolly: 3 }],
      guarda: [],   // { id, nome, omino, tardi }: chi guarda (tardi = arrivato a partita cominciata: entra alla prossima)
      passo: null, t0: 0, dur: 0, scade: 0, grazia: 0, anim: 0, avanti: {},
      scaletta: [], iP: 0, piano: [], iD: 0, dom: null, item: null, usate: [],
      risp: {}, testi: {}, voci: null, disegni: {}, fatti: {}, gal: null, esito: null, classif: null, fin: null, premi: null, fine: null,
      stat: {}, titoli: {}, verdetti: {}, battute: {}, posPrima: {}, ultReaz: {},
      foto: {}, cam: {}, dati: {} };   // le foto (cifrate, solo in memoria: per rimandarle a chi rientra), chi è nel camerino
    // ----- la partita di prima (t.ripresa): l'host ha ricaricato la pagina o riaperto l'app, oppure (daRiserva) l'host è
    // sparito e questo telefono la porta avanti. Chi giocava resta al suo posto come "atteso" (rientra da solo col suo join,
    // stesso id); chi non torna entro 10 secondi esce. Almeno 5 secondi di respiro: nessun passo va avanti.
    // LE FOTO non sono mai nella copia: solo quale foto e quale filtro (già nella foto per tutti) e l'impronta della chiave;
    // gli amici rimandano da soli i pezzi cifrati a chi tiene la partita.
    var R0 = t.ripresa, ripresa = !!(R0 && R0.stato && R0.stato.fase && R0.stato.fase !== "lobby" && R0.stato.players);
    var attesi = {}, respiroFino = 0, respiroMax = 0, tRespiro = null;
    if (ripresa) {
      // (non è una partita nuova: le facce già a schermo restano, il resto delle foto riparte da capo)
      clearInterval(GUARDIA); GUARDIA = null; SCHERMI = []; FT = nuovoFT(); FB = null;
      riprendiStato(R0.stato, R0.soloQui || {});
    } else pulisciFoto(false);   // (una partita nuova: le foto di prima si buttano; la mia resta in questa scheda)
    function riprendiStato(S0, Q0) {
      Object.keys(S0).forEach(function (k) { if (k !== "fo") H[k] = S0[k]; });
      H.pronta = false; H.rip = (H.rip || 0) + 1; H.cam = {}; H.dati = {}; H.ultReaz = {}; H.avanti = H.avanti || {};
      H.guarda = (H.guarda || []).map(function (g) { return { id: g.id, nome: g.nome, tardi: !!g.tardi, omino: (Q0.omini || {})[g.id] || OMINI[g.id] || null }; });
      var vecchio = R0.daRiserva ? R0.vecchioHost : null;
      H.players.forEach(function (p) {
        p.forse = false;
        p.omino = p.id === IO ? t.mioOmino(p.nome) : ((Q0.omini || {})[p.id] || OMINI[p.id] || null);
        if (H.fase === "fine") { p.via = p.id !== IO; return; }   // (sulla classifica: rientra chi torna)
        if (p.id === vecchio) p.via = true;                       // (l'host sparito: se torna, rientra col suo posto)
        else if (p.id !== IO && !p.via) attesi[p.id] = 1;
      });
      // le foto: solo quale (numero e filtro); i pezzi li rimandano gli amici
      H.foto = {}; Object.keys(S0.fo || {}).forEach(function (id) { var o = S0.fo[id]; if (o && o.f) H.foto[id] = { f: o.f, x: o.x | 0, iv: null, di: 0, pz: {}, n: 0, ok: false }; });
      // i pezzi grossi (soloQui: solo su questo telefono). Il vice non li ha: la galleria la prende da quella che aveva già da
      // amico, i disegni di questo passo glieli rimandano gli amici (si toglie il loro "fatto")
      H.disegni = Q0.disegni || {};
      if (H.fin) H.fin.fogli.forEach(function (f, j) { f.strati = (Q0.finS && Q0.finS[j]) || f.strati || []; });
      if (H.gal) H.gal.forEach(function (g, i) {
        var d = (Q0.galD || [])[i], it = GAL.k === H.kGal ? GAL.items[g.n] : null;
        if (d) { g.dis = d.dis || null; g.strati = d.strati || null; }
        else if (it) { g.dis = it.dis || null; g.strati = it.strati || null; }
        else if (g.autori && H.fin) { var f = H.fin.fogli.filter(function (x) { return x.n === g.n; })[0]; if (f) g.strati = f.strati.map(function (s) { return s.dis; }); }
      });
      if (H.passo === "disegna" || H.passo === "passa") Object.keys(H.fatti).forEach(function (id) { if (!H.disegni[id]) delete H.fatti[id]; });
      // le ore salvate sono dell'orologio di chi teneva la partita: si convertono; il passo a metà continua col tempo che
      // restava, ma almeno 12 secondi per rispondere (5 nei riepiloghi), e i punti già dati restano (niente doppi)
      var ora = Date.now();
      respiroFino = ora + RESPIRO; respiroMax = ora + RESPIRO_MAX;
      if (H.fase === "gioco") {
        H.t0 = H.t0 ? R0.ora(H.t0) : ora;
        H.scade = H.scade ? R0.ora(H.scade) : 0;
        var min = ora + (RISP_UI[H.passo] ? 12000 : RESPIRO + 500) + (H.grazia || 0);
        if (!H.scade || H.scade < min) H.scade = min;
      }
    }
    var fotoAvviata = false;
    function avviaFoto() {
      if (fotoAvviata || !H.codice || H.codice === "…") return; fotoAvviata = true;
      // (il vice non crea la chiave: usa quella del suo link. Se la chiave di questo telefono non è quella della partita,
      // per esempio l'app chiusa l'ha persa, faccio solo da postino: l'impronta resta quella di prima e le foto tra gli amici restano)
      fotoInizia(H.codice, !(ripresa && R0.daRiserva), IO, function () {
        if (H.kf && FT.kf && FT.kf !== H.kf) { FT.key = null; FT.kf = null; }
        else if (!H.kf && FT.kf) H.kf = FT.kf;
        bd();
      });
    }
    var VISTI = vistiMiei();      // le domande già uscite (questo telefono + profilo), più quelle che mandano gli amici
    var rete = null, tic = null;
    function pById(id) { for (var i = 0; i < H.players.length; i++) if (H.players[i].id === id) return H.players[i]; return null; }
    function presenti() { return H.players.filter(function (p) { return !p.via; }); }
    function attivi() { return H.players.filter(function (p) { return !p.via && !p.forse; }); }
    function inGuarda(id) { return H.guarda.some(function (x) { return x.id === id; }); }
    function nomeDi(id) { var p = pById(id); return p ? p.nome : "…"; }
    function st(id) { return H.stat[id] || (H.stat[id] = { magg: 0, scelte: 0, votiChi: 0, jollyOk: 0, ptJolly: 0, votiDis: 0, votiBat: 0 }); }
    function chiave(extra) { return H.pid + "|" + H.iP + "|" + H.iD + "|" + (extra || H.passo) + (H.passo === "passa" && H.fin && !extra ? "|" + H.fin.k : ""); }

    t.onRegole = function (im) { if (H.fase !== "lobby") return; H.imp = impNorm(im); bd(); };

    rete = SGNet.ospita(ID, {
      onCodice: function (c) { H.codice = c; bd(); avviaFoto(); },
      onConnesso: function () { H.pronta = true; bd(true); },
      onErrore: function () {
        if (H.pronta) return;
        ferma(); if (rete) rete.chiudi();
        erroreRete(t, "Non riesco ad aprire la stanza.", function () { host(t); });
      },
      onForse: function (id) { var p = pById(id); if (!p || p.forse) return; p.forse = true; bd(); controllaFatto(); },
      onTornato: function (id) { var p = pById(id); if (!p || !p.forse) return; p.forse = false; bd(); },
      onAddio: function (id) {
        if (inGuarda(id)) { H.guarda = H.guarda.filter(function (x) { return x.id !== id; }); bd(); return; }
        var p = pById(id); if (!p) return;
        p.forse = false; delete H.cam[id];
        if (H.fase === "lobby") { H.players = H.players.filter(function (x) { return x.id !== id; }); delete H.foto[id]; bd(); return; }
        delete attesi[id];
        p.via = true;   // a partita iniziata resta in classifica, ma non gioca più (se torna, ritrova il suo posto)
        if (H.fase !== "gioco") return bd();
        if (!respiroFino && presenti().length < 2) return fine();   // (nel respiro della ripresa decide fineRespiro)
        bd(); controllaFatto();
      },
      onMsg: function (id, m) {
        if (!m || !m.t) return;
        if (m.t === "join") {
          var p = pById(id), nome = String(m.nome || "Amico").trim().slice(0, 16) || "Amico";
          delete attesi[id];   // (dopo una ripresa: è tornato)
          // chi rientra (pagina ricaricata, telefono riacceso, partita ripresa) ha lo STESSO id: ritrova il suo posto, i suoi
          // punti e quello che aveva già mandato (anche sulla classifica: così alla "Nuova partita" c'è anche lui)
          if (p) { p.forse = false; if (p.via && H.fase !== "lobby") p.via = false; if (!p.omino) p.omino = avatarValido(m.omino); bd(true); privati(id); return; }
          if (inGuarda(id)) { H.guarda.forEach(function (g) { if (g.id === id && !g.omino) g.omino = avatarValido(m.omino); }); bd(true); privati(id); return; }
          if (!t.puoSedersi(id, nome)) { H.guarda.push({ id: id, nome: nome, omino: avatarValido(m.omino) }); bd(true); return; }
          if (H.fase === "lobby" && H.players.length < MAX) { H.players.push({ id: id, nome: nome, omino: avatarValido(m.omino), punti: 0, jolly: 3 }); bd(true); return; }
          // partita cominciata (o stanza piena): guarda ed entra alla prossima
          H.guarda.push({ id: id, nome: nome, omino: avatarValido(m.omino), tardi: H.fase !== "lobby" });
          bd(true); privati(id); return;
        }
        mossa(id, m);
      }
    }, { ripresa: ripresa });   // (con la partita ripresa gli amici NON tornano in saletta: leggono «🔁 … la partita riprende»)
    if (!rete) return senzaRete(t);
    if (ripresa && rete.codice) H.codice = rete.codice;

    // ----- la "foto" per tutti: SEMPRE con gli id e con "fase"; MAI le battute prima della vetrina né i disegni -----
    function resta() { return H.scade ? Math.max(0, Math.ceil((H.scade - H.grazia - Date.now()) / 1000)) : 0; }
    function vm(conOmini) {
      var om = conOmini || H.fase === "lobby";
      var v = { fase: H.fase, codice: H.codice, pronta: H.pronta, partita: H.partita, pid: H.pid, imp: H.imp,
        tiene: IO, rip: H.rip,   // chi tiene la partita (la corona in saletta) e quante volte è ripresa
        players: H.players.map(function (p) { var x = { id: p.id, nome: p.nome, punti: p.punti, jolly: p.jolly, via: !!p.via, forse: !!p.forse }; if (om) x.omino = p.omino || null; if (H.foto[p.id]) x.fo = foVm(p.id); return x; }),
        guarda: H.guarda.map(function (g) { var x = { id: g.id, nome: g.nome, tardi: !!g.tardi }; if (om) x.omino = g.omino || null; if (H.foto[g.id]) x.fo = foVm(g.id); return x; }) };
      // la foto: solo quale (numero e filtro) e l'impronta della chiave. MAI la foto (va a pezzi cifrati, fuori dalla vm)
      var kf = H.kf || FT.kf; if (kf) v.kf = kf;
      var cam = Object.keys(H.cam); if (cam.length && H.fase === "lobby") v.cam = cam;
      if (H.fase === "gioco") {
        var sc = H.scaletta[H.iP] || {};
        Object.assign(v, { passo: H.passo, k: chiave(), resta: resta(), dur: H.dur, el: Date.now() - H.t0, anim: H.anim,
          iP: H.iP, nP: H.scaletta.length, iD: H.iD, nD: H.piano.length, posto: sc.posto || null, prot: sc.prot || null, scaletta: H.scaletta,
          dom: H.dom, risposto: Object.keys(H.fatti), avanti: Object.keys(H.avanti), serve: serveAvanti(),
          voci: H.voci ? H.voci.map(function (x) { return { k: x.k, tx: x.tx }; }) : null,
          nGal: H.gal ? H.gal.length : 0, kGal: H.gal ? H.kGal : null,
          esito: H.esito, classif: H.classif, premi: H.premi,
          fin: H.fin ? { K: H.fin.K, k: H.fin.k, bersagli: H.fin.fogli.map(function (f) { return { n: f.n, target: f.target, miss: f.miss }; }) } : null });
      }
      if (H.fase === "fine") v.fine = H.fine;
      return v;
    }
    function bd(conOmini) { var v = vm(conOmini); rete.invia({ t: "vm", vm: v }); ricorda(); disegna(t, v, cbHost); vici(); }
    // (host di riserva) chi porta avanti la partita se sparisco: prima chi guarda (non gioca: non ha niente da perdere)
    var viciK = "";
    function vici() { var l = H.guarda.map(function (g) { return g.id; }), k = l.join(","); if (k !== viciK && t.vici) { viciK = k; t.vici(l.length ? l : null); } }
    // la partita da ricordare (se ricarico la pagina, o se la porta avanti un amico): un oggetto SEMPLICE, senza timer né
    // nodi, con le scadenze come ORE. MAI le foto: solo quale foto e quale filtro (già nella foto per tutti), mai i pezzi
    // né la chiave. I pezzi grossi (disegni, galleria, strati grandi del finale, avatar) restano su questo telefono (soloQui)
    var NON_RICORDA = { foto: 1, cam: 1, dati: 1, ultReaz: 1, pronta: 1, disegni: 1, gal: 1, fin: 1, players: 1, guarda: 1 };
    function ricorda() {
      if (H.fase === "lobby") return t.ricorda(null);
      var s = {}, Q = { disegni: H.disegni, omini: {} };
      Object.keys(H).forEach(function (k) { if (!NON_RICORDA[k]) s[k] = H[k]; });
      s.players = H.players.map(function (p) { if (p.omino) Q.omini[p.id] = p.omino; return { id: p.id, nome: p.nome, punti: p.punti, jolly: p.jolly, via: !!p.via }; });
      s.guarda = H.guarda.map(function (g) { if (g.omino) Q.omini[g.id] = g.omino; return { id: g.id, nome: g.nome, tardi: !!g.tardi }; });
      s.fo = {}; Object.keys(H.foto).forEach(function (id) { s.fo[id] = { f: H.foto[id].f, x: H.foto[id].x }; });
      if (H.gal) {
        s.gal = H.gal.map(function (g) { return { n: g.n, a: g.a, autori: g.autori || null, target: g.target || null, miss: g.miss || null, su: g.su || null }; });
        Q.galD = H.gal.map(function (g) { return { dis: g.dis || null, strati: g.strati || null }; });
      }
      if (H.fin) {
        var F = H.fin, piccoli = (F.peso || 0) < 30000;   // (gli strati del finale vanno anche al vice solo se sono leggeri)
        s.fin = { K: F.K, k: F.k, ordine: F.ordine, tiene: F.tiene, peso: F.peso || 0,
          fogli: F.fogli.map(function (f) { return { n: f.n, target: f.target, miss: f.miss, autori: f.autori, strati: piccoli ? f.strati : null }; }) };
        Q.finS = F.fogli.map(function (f) { return f.strati; });
      }
      t.ricorda(s, Q);
    }
    // ----- la ripresa: respiro (gli amici rientrano da soli), poi si va avanti -----
    function riprendi() {
      if (H.fase === "gioco" && !tic) tic = setInterval(orologio, 250);
      bd(true);
      privati(IO);   // (la mia risposta, il mio foglio, la galleria: anche a me)
      if (H.fase === "fine" && H.gal) mandaGalleria(IO);   // (per la mia figurina)
      avviaFoto();
      tRespiro = setTimeout(fineRespiro, RESPIRO);
    }
    function fineRespiro() {
      tRespiro = null;
      if (Object.keys(attesi).length && Date.now() < respiroMax) { tRespiro = setTimeout(fineRespiro, 500); return; }
      var non = Object.keys(attesi); attesi = {}; respiroFino = 0;
      non.forEach(function (id) { var p = pById(id); if (p) { p.via = true; p.forse = false; } });   // (non è tornato: esce, se torna rientra)
      if (H.fase !== "gioco") return bd();
      if (presenti().length < 2) return fine();
      bd(); controllaFatto();
      if (RIEPILOGHI[H.passo] && Object.keys(H.avanti).filter(function (x) { var q = pById(x); return q && !q.via; }).length >= serveAvanti()) avanti();
    }
    function foVm(id) { var P = H.foto[id]; return { f: P.f, x: P.x, h: P.ok ? 1 : 0 }; }
    // ----- le foto: «ritratto» (quale foto e quale filtro), i pezzi cifrati, «dammiFoto» (chi non l'ha ricevuta), «cam» (nel camerino) -----
    function fotoMossa(id, m) {
      if (!pById(id) && !inGuarda(id)) return;
      if (m.t === "cam") { var c0 = !!H.cam[id]; if (m.on) H.cam[id] = 1; else delete H.cam[id]; if (c0 !== !!m.on && H.fase === "lobby") bd(); return; }
      if (m.t === "ritratto") {
        var f = typeof m.f === "string" && /^[a-z0-9]{4,16}$/.test(m.f) ? m.f : null, x = lim(m.x | 0, 0, 9), P = H.foto[id];
        if (!f) { if (P) { delete H.foto[id]; bd(); } return; }
        if (P && P.f === f) { if (P.x !== x) { P.x = x; bd(); } return; }
        H.foto[id] = { f: f, x: x, iv: null, di: 0, pz: {}, n: 0, ok: false };
        return bd();
      }
      if (m.t === "foto") {
        var Q = H.foto[id];
        if (!Q || !validoPezzo(m) || Q.f !== m.f || (Q.ok && Q.iv === m.iv)) return;   // (prima il «ritratto», poi i pezzi)
        if (Q.iv !== m.iv || Q.di !== (m.di | 0)) { Q.iv = m.iv; Q.di = m.di | 0; Q.pz = {}; Q.n = 0; Q.ok = false; }
        if (Q.pz[m.pz] == null) { Q.pz[m.pz] = m.c; Q.n++; }
        if (Q.n < Q.di) return;
        Q.ok = true;
        mandaFoto(null, id);   // a tutti (prima dei pezzi, poi la vm che dice che c'è)
        return bd();
      }
      if (m.t === "dammiFoto") {
        var chi = String(m.id || ""), kd = id + ">" + chi, ora = Date.now();
        if (ora - (H.dati[kd] || 0) < 3000) return;
        H.dati[kd] = ora; mandaFoto(id, chi);
      }
    }
    function mandaFoto(a, id) {
      var Q = H.foto[id]; if (!Q || !Q.ok) return;
      for (var i = 0; i < Q.di; i++) { var m = { t: "foto", id: id, f: Q.f, iv: Q.iv, pz: i, di: Q.di, c: Q.pz[i] }; if (a) privato(a, m); else veloce(m); }
    }
    function veloce(m) { rete.inviaVeloce(m); ricevi(t, m, cbHost); }
    function privato(id, m) { if (id === IO) { ricevi(t, m, cbHost); return; } m.to = id; rete.inviaVeloce(m); }
    function ferma() { if (tic) { clearInterval(tic); tic = null; } }
    function serveAvanti() { return Math.floor(attivi().length / 2) + 1; }

    // ----- a chi rientra: quello che aveva già mandato, la galleria, il foglio del finale -----
    function privati(id) {
      if (H.fase !== "gioco") return;
      var k = chiave();
      if ((H.passo === "scegli" || H.passo === "vota" || H.passo === "fvota") && H.risp[id]) privato(id, { t: "tua", k: k, x: H.risp[id].x, j: H.risp[id].j });
      if (H.passo === "scrivi" && H.testi[id] != null) privato(id, { t: "tua", k: k, tx: H.testi[id] });
      if ((H.passo === "disegna" || H.passo === "passa") && H.disegni[id]) privato(id, { t: "tua", k: k, dis: H.disegni[id], fine: !!H.fatti[id] });
      if (H.passo === "passa") mandaFoglio(id);
      if (H.passo === "vota" && H.voci) mandaMie(id);
      if (H.gal && (H.passo === "vota" || H.passo === "svela" || H.passo === "fvota" || H.passo === "fsvela" || H.passo === "premi")) mandaGalleria(id);
    }
    function mandaGalleria(id) {
      if (!H.gal) return;
      H.gal.forEach(function (g) {
        var m = { t: "gal", k: H.kGal, n: g.n, tot: H.gal.length, dis: g.dis || null, strati: g.strati || null, target: g.target || null, su: g.su || null };
        if (id) privato(id, m); else veloce(m);
      });
      var mieiDi = function (pid) { return H.gal.filter(function (g) { return g.autori ? g.target === pid : g.a === pid; }).map(function (g) { return g.n; }); };
      (id ? [id] : H.players.map(function (p) { return p.id; })).forEach(function (pid) { privato(pid, { t: "mio", k: H.kGal, n: mieiDi(pid) }); });
    }

    // ----- la partita -----
    function comincia() {
      if (H.fase !== "lobby" || presenti().length < MIN) return;
      H.fase = "gioco"; H.partita++; H.pid = nuovoId(); clearTimeout(tRespiro); respiroFino = 0; attesi = {};
      H.players.forEach(function (p) { p.punti = 0; p.jolly = 3; });
      H.stat = {}; H.titoli = {}; H.verdetti = {}; H.battute = {}; H.usate = []; H.fine = null; H.premi = null; H.fin = null; H.gal = null; H.cam = {};
      H.scaletta = creaScaletta(); H.iP = 0; H.iD = 0; H.piano = [];
      if (!tic) tic = setInterval(orologio, 250);
      var n = presenti().length;
      vai("sfilata", n * (n <= 4 ? 2.6 : n <= 7 ? 2.1 : 1.7) + 3.4, { conOmini: true });
    }
    // i posti: tra quelli accesi, prima quelli che non si giocano da più tempo (mai lo stesso due volte); chi va sotto torchio: a giro giusto
    function creaScaletta() {
      var ult = leggiJ(LS_POSTI, {}), acc = mescola(H.imp.posti.slice());
      acc.sort(function (a, b) { return (ult[a] || 0) - (ult[b] || 0); });
      var scelti = acc.slice(0, H.imp.nPosti);
      // mescolati di nuovo tra quelli "vecchi uguali", così l'ordine non è sempre lo stesso
      scelti = mescola(scelti);
      var T = leggiJ(LS_TORCHIO, null), ora = Date.now();
      if (!T || !T.t || ora - T.t > 12 * 3600 * 1000) T = { t: ora, c: {} };
      var fila = mescola(presenti()).sort(function (a, b) {
        var A = T.c[a.nome] || { n: 0, u: 0 }, B = T.c[b.nome] || { n: 0, u: 0 };
        return A.n - B.n || A.u - B.u;
      });
      var out = scelti.map(function (pid, i) { return { posto: pid, prot: fila[i % fila.length].id }; });
      out.forEach(function (s, i) { var p = pById(s.prot); if (p) { var c = T.c[p.nome] || (T.c[p.nome] = { n: 0, u: 0 }); c.n++; c.u = ora + i; } });
      scriviJ(LS_TORCHIO, T);
      scelti.forEach(function (pid) { ult[pid] = ora; }); scriviJ(LS_POSTI, ult);
      return out;
    }
    function vai(passo, durata, o) {
      o = o || {};
      H.passo = passo; H.t0 = Date.now(); H.dur = durata || 0; H.grazia = o.grazia || 0;
      H.scade = durata ? H.t0 + durata * 1000 + H.grazia : 0; H.anim = o.anim || 0;
      H.avanti = {};
      if (o.pulisci !== false) { H.risp = {}; H.fatti = {}; }
      bd(!!o.conOmini);
    }
    function arrivo() {
      H.piano = pianoDomande(H.imp.nDom, H.iP); H.iD = 0; H.dom = null; H.esito = null; H.voci = null; H.gal = null; H.classif = null;
      H.posPrima = {}; H.players.forEach(function (p) { H.posPrima[p.id] = p.punti; });
      // chi doveva andare sotto torchio se n'è andato: ci va chi c'è stato meno volte in questa partita
      var pr0 = pById(H.scaletta[H.iP].prot);
      if (!pr0 || pr0.via) {
        var conta = function (id) { return H.scaletta.slice(0, H.iP).filter(function (s) { return s.prot === id; }).length; };
        var cand = presenti().slice().sort(function (a, b) { return conta(a.id) - conta(b.id); });
        if (cand.length) H.scaletta[H.iP].prot = cand[0].id;
      }
      var P = posto(H.scaletta[H.iP].posto), prot = pById(H.scaletta[H.iP].prot);
      H.dom = { tipo: "arrivo", q: accorda(caso((P && P.entrata) || ["Benvenuti!"]), prot ? prot.nome : "", prot ? eDonna(prot.omino) : null) };
      vai("arrivo", T_ARRIVO);
    }
    // pesca la domanda: prima quelle mai viste da nessuno, poi le viste meno di recente (a caso a parità)
    function pesca(P, tipo) {
      var campo = { i: "immagini", s: "scrivi", d: "disegna", c: "chi" }[tipo];
      var l = (P[campo] || []).filter(function (q) { return H.usate.indexOf(q.id) < 0; });
      if (!l.length) l = P[campo] || [];
      if (!l.length) return null;
      var min = Infinity; l.forEach(function (q) { var v = VISTI[q.id] || 0; if (v < min) min = v; });
      var buoni = l.filter(function (q) { return (VISTI[q.id] || 0) === min; });
      return caso(buoni);
    }
    function domanda() {
      var sc = H.scaletta[H.iP], P = posto(sc.posto), prot = pById(sc.prot), tipo = H.piano[H.iD];
      var it = pesca(P, tipo);
      if (!it && tipo !== "i") { tipo = "i"; it = pesca(P, "i"); }
      if (!it) return dopoDomanda();
      H.usate.push(it.id); H.item = it;
      var nomeP = prot ? prot.nome : "…", donna = prot ? eDonna(prot.omino) : null;
      var d = { id: it.id, tipo: tipo, q: accorda(it.q, nomeP, tipo === "c" ? null : donna) };
      if (tipo === "c") d.q = accorda(it.q, nomeP, null);
      if (tipo === "i") d.carte = (it.carte || []).slice(0, 4).map(function (c, j) {
        var x = { t: accorda(c.t, nomeP, donna) };
        if (c.e) x.e = String(c.e); else if (c.chi) { x.chi = c.chi; x.f = c.f || null; x.faccia = c.faccia || null; x.piu = c.piu || null; x.s = it.id + "#" + j; }
        else { x.lui = c.lui || "felice"; x.piu = c.piu || null; }
        return x;
      });
      if (tipo === "s") d.lui = it.voto === "lui";
      if (tipo === "d") { d.su = ["scena", "ritratto", "bianco"].indexOf(it.su) >= 0 ? it.su : "scena"; d.ad = spezzaEmoji(P.adesivi).concat(spezzaEmoji(it.adesivi || "")).filter(function (e, i, a) { return a.indexOf(e) === i; }).slice(0, 18); }
      if (tipo === "c") d.titolo = it.titolo;
      H.dom = d; H.esito = null; H.voci = null; H.gal = null; H.testi = {}; H.disegni = {};
      var T = TEMPI[H.imp.tempi] || TEMPI.normali;
      if (tipo === "i" || tipo === "c") vai("scegli", T.sc);
      else if (tipo === "s") vai("scrivi", T.scr, { grazia: 1500 });
      else vai("disegna", T.dis, { grazia: 2500 });
    }
    function dopoDomanda() {
      H.iD++;
      if (H.iD < H.piano.length) return domanda();
      // fine del posto: la classifica lampo
      var ord = H.players.slice().sort(function (a, b) { return b.punti - a.punti; });
      var prossimo = H.scaletta[H.iP + 1] || null;
      H.classif = { ord: ord.map(function (p) { return { id: p.id, punti: p.punti, prima: H.posPrima[p.id] || 0 }; }), prossimo: prossimo };
      H.dom = null; H.esito = null; H.voci = null; H.gal = null;
      vai("classifica", T_CLASS);
    }
    // mosse di tutti (anche di chi tiene la partita, con id IO)
    function mossa(id, m) {
      if (m.t === "reaz") return reazione(id, m.e);
      if (m.t === "ritratto" || m.t === "foto" || m.t === "dammiFoto" || m.t === "cam") return fotoMossa(id, m);
      if (m.t === "visti") { if (typeof m.s === "string" && m.s.length < 20000) scompatta(m.s).forEach(function (q) { if (!VISTI[q]) VISTI[q] = 1; }); return; }
      var p = pById(id);
      if (H.fase !== "gioco" || !p || p.via) return;   // chi guarda soltanto non fa mosse
      if (m.k !== chiave()) { if (m.t === "dammi") privati(id); return; }   // mossa di un passo vecchio
      if (m.t === "dammi") return privati(id);
      if (m.t === "avanti") { if (RIEPILOGHI[H.passo]) { H.avanti[id] = 1; if (Object.keys(H.avanti).filter(function (x) { var q = pById(x); return q && !q.via; }).length >= serveAvanti() && !respiroFino) return avanti(); bd(); } return; }
      if (m.t === "scelta" && (H.passo === "scegli" || H.passo === "vota" || H.passo === "fvota")) {
        if (H.risp[id]) return;
        var x = m.x;
        if (H.passo === "scegli") { if (H.dom.tipo === "i") { x = x | 0; if (x < 0 || x > 3) return; } else if (!pById(x)) return; }
        else if (H.passo === "vota") {
          var voce = H.voci ? H.voci.filter(function (v) { return v.k === x; })[0] : (H.gal || []).filter(function (g) { return g.n === x; })[0];
          if (!voce || voce.a === id) return;
        } else { var g = (H.gal || []).filter(function (q) { return q.n === x; })[0]; if (!g || g.target === id) return; }
        var j = !!m.j && p.jolly > 0;
        if (j) p.jolly--;
        H.risp[id] = { x: x, j: j }; H.fatti[id] = 1;
        bd(); return controllaFatto();
      }
      if (m.t === "testo" && H.passo === "scrivi") {
        if (H.fatti[id]) return;
        var s = pulisci(m.tx, 40); if (!s) return;
        H.testi[id] = s; H.fatti[id] = 1; bd(); return controllaFatto();
      }
      if (m.t === "dis" && (H.passo === "disegna" || H.passo === "passa")) {
        if (H.fatti[id]) return;
        var d = disValido(m.dis); if (!d) return;
        if (JSON.stringify(d).length > 60000) return;
        H.disegni[id] = d;
        if (m.fine) { H.fatti[id] = 1; bd(); return controllaFatto(); }
        return;
      }
    }
    function reazione(id, e) {
      if (REAZ.indexOf(e) < 0 || (!pById(id) && !inGuarda(id))) return;
      var ora = Date.now(); if (ora - (H.ultReaz[id] || 0) < 900) return; H.ultReaz[id] = ora;
      veloce({ t: "reaz", id: id, e: e });
    }
    // chi deve rispondere adesso (presenti e collegati); quando hanno finito tutti si va avanti subito
    function devono() {
      var a = attivi();
      if (H.passo === "passa" && H.fin) return a.filter(function (p) { return H.fin.tiene[p.id] != null; });
      if (H.passo === "vota" && H.voci) return a.filter(function (p) { return H.voci.some(function (v) { return v.a !== p.id; }); });
      if (H.passo === "vota" && H.gal) return a.filter(function (p) { return H.gal.some(function (g) { return g.a !== p.id; }); });
      if (H.passo === "fvota" && H.gal) return a.filter(function (p) { return H.gal.some(function (g) { return g.target !== p.id; }); });
      return a;
    }
    var tFatto = null;
    function controllaFatto() {
      if (H.fase !== "gioco" || !RISPOSTE[H.passo] || respiroFino) return;   // (nel respiro della ripresa si aspetta)
      var d = devono();
      if (d.length && d.some(function (p) { return !H.fatti[p.id]; })) return;
      if (!d.length) return;   // nessuno collegato: aspetta il tempo
      var k = chiave(); clearTimeout(tFatto);
      tFatto = setTimeout(function () { if (chiave() === k) scaduto(); }, 700);   // un attimo: l'ultimo tocco si vede
    }
    var RISPOSTE = { scegli: 1, scrivi: 1, vota: 1, disegna: 1, passa: 1, fvota: 1 };
    var RIEPILOGHI = { sfilata: 1, arrivo: 1, svela: 1, classifica: 1, fintro: 1, fsvela: 1, premi: 1 };
    function scaduto() {
      H.scade = 0;
      var ps = H.passo;
      if (RIEPILOGHI[ps]) return avanti();
      if (ps === "scegli") return svelaScelta();
      if (ps === "scrivi") return vetrina();
      if (ps === "vetrina") return votaBattute();
      if (ps === "disegna") return galleria();
      if (ps === "vota") return svelaVoto();
      if (ps === "passa") return finePassaggio();
      if (ps === "fvota") return svelaFinale();
    }
    function avanti() {
      if (H.fase !== "gioco") return;
      var ps = H.passo; H.scade = 0;
      if (ps === "sfilata") return arrivo();
      if (ps === "arrivo") return domanda();
      if (ps === "svela") return dopoDomanda();
      if (ps === "classifica") { H.iP++; if (H.iP < H.scaletta.length) return arrivo(); return finaleIntro(); }
      if (ps === "fintro") return passaggio(1);
      if (ps === "fsvela") return titoli();
      if (ps === "premi") return fine();
    }
    function orologio() {
      if (H.fase !== "gioco" || !H.scade) return;
      if (Date.now() >= H.scade && !respiroFino) scaduto();
    }

    // ----- 🖼️ Immagini e 👆 Chi di noi: lo svelamento -----
    function svelaScelta() {
      var tipo = H.dom.tipo, prot = H.scaletta[H.iP].prot;
      var E = punteggio(H.risp, function () { return 1; }, tipo);
      if (tipo === "i") {
        var top = E.vinc;
        if (top.length) {
          var c = H.dom.carte[caso(top)];
          E.verdetto = c.t;
          (H.verdetti[prot] || (H.verdetti[prot] = [])).push({ q: H.dom.q, t: c.t });
          var sc = H.risp[prot]; if (sc) E.lui = sc.x;
          if (sc && top.length === 1 && sc.x === top[0] && Object.keys(H.risp).length >= 3) E.sintonia = true;
          if (sc && Object.keys(H.risp).filter(function (x) { return H.risp[x].x === sc.x; }).length === 1 && Object.keys(H.risp).length >= 3) E.solo = true;
        }
      } else {
        // 👆 il più votato vince il titolo (a pari voti tutti i pari), ma solo con almeno 2 voti: un voto a testa = nessun titolo
        Object.keys(H.risp).forEach(function (v) { st(H.risp[v].x).votiChi++; });
        var mx = E.vinc.length ? E.conti[E.vinc[0]] || 0 : 0;
        E.titolo = (mx >= 2 ? E.vinc : []).map(function (id) {
          var w = pById(id), ti = accorda(H.dom.titolo, w ? w.nome : "", w ? eDonna(w.omino) : null);
          (H.titoli[id] || (H.titoli[id] = [])).push({ t: ti, e: (posto(H.scaletta[H.iP].posto) || {}).emoji || "🏷️" });
          return { id: id, t: ti };
        });
      }
      E.voce = voce(E, prot);
      chiudi(E);
    }
    // i punti: 100 (o quanto dice peso) per ogni ALTRO che ha scelto come te; jolly ×2; TUTTI D'ACCORDO +100 a tutti
    function punteggio(risp, peso, tipo, molt) {
      molt = molt || 1;
      var ids = Object.keys(risp), conti = {}, E = { tipo: tipo, scelte: {}, jolly: [], guad: {}, bonus: {}, conti: {}, vinc: [] };
      ids.forEach(function (id) { var x = risp[id].x; E.scelte[id] = x; conti[x] = (conti[x] || 0) + peso(id); if (risp[id].j) E.jolly.push(id); });
      E.conti = conti;
      var max = 0; Object.keys(conti).forEach(function (x) { if (conti[x] > max) max = conti[x]; });
      E.vinc = max > 0 ? Object.keys(conti).filter(function (x) { return conti[x] === max; }).map(function (x) { return /^\d+$/.test(x) ? +x : x; }) : [];
      ids.forEach(function (id) {
        var x = risp[id].x, pt = 0;
        ids.forEach(function (o) { if (o !== id && risp[o].x === x) pt += 100 * molt * peso(o); });
        if (risp[id].j) { pt *= 2; if (pt > 0) { st(id).jollyOk++; st(id).ptJolly += pt / 2; } }
        E.guad[id] = pt;
        st(id).scelte++;
        if (E.vinc.length === 1 && String(E.vinc[0]) === String(x)) st(id).magg++;
      });
      var pres = presenti();
      var distinti = Object.keys(conti).length;
      if (ids.length >= (tipo === "i" || tipo === "c" ? 3 : 2) && distinti === 1) E.strisc = "tutti";
      else if (ids.length >= 3 && distinti === ids.length) E.strisc = "anarchia";
      var jx = {}; E.jolly.forEach(function (id) { var x = risp[id].x; jx[x] = (jx[x] || 0) + 1; });
      if (Object.keys(jx).some(function (x) { return jx[x] >= 3; })) E.full = true;
      E.pres = pres.length;
      return E;
    }
    // i punti in classifica, le statistiche, il passo "svela"
    function chiudi(E, durRiep) {
      // (il bonus solo se hanno votato davvero tutti quelli collegati che potevano: chi ha scritto la battuta vincente no)
      if (E.strisc === "tutti" && E.tuttiOk !== false && attivi().every(function (p) { return (E.esclusi && E.esclusi.indexOf(p.id) >= 0) || E.scelte[p.id] != null; })) {
        presenti().forEach(function (p) { E.bonus[p.id] = (E.bonus[p.id] || 0) + 100; });
        E.tuttiBonus = true;
      }
      Object.keys(E.guad).forEach(function (id) { var p = pById(id); if (p) p.punti += E.guad[id]; });
      Object.keys(E.bonus).forEach(function (id) { var p = pById(id); if (p) p.punti += E.bonus[id]; });
      var nV = Object.keys(E.scelte).length + (E.voci ? E.voci.length : 0);
      var A = E.vuoto ? 1.5 : 1.4 + 0.42 * Object.keys(E.scelte).length + (E.ordine ? 0.7 * E.ordine.length : 0) + 1.6;
      H.esito = E;
      vai("svela", A + (durRiep || T_RIEP), { anim: A, pulisci: false });
    }
    function voce(E, prot) {
      var q = null, P = pById(prot);
      if (E.vuoto) q = "vuoto"; else if (E.full) q = "jolly"; else if (E.strisc === "tutti") q = "tutti"; else if (E.strisc === "anarchia") q = "anarchia";
      else if (E.sintonia) q = "sintonia"; else if (E.solo) q = "solo";
      if (!q) return null;
      var l = comuni("voce").filter(function (v) { return v.quando === q; });
      return l.length ? accorda(caso(l).q, P ? P.nome : "", P ? eDonna(P.omino) : null) : null;
    }

    // ----- ✍️ Scrivi: vetrina, voto, svelamento -----
    function vetrina() {
      var entr = [];
      presenti().forEach(function (p) { if (H.testi[p.id]) entr.push({ tx: H.testi[p.id], a: p.id }); });
      var n = presenti().length, casa = n <= 3 ? 2 : n === 4 ? 1 : 0;
      casa = Math.max(casa, 4 - entr.length);
      mescola((H.item && H.item.riserve) || []).slice(0, Math.max(0, casa)).forEach(function (r) {
        var prot = pById(H.scaletta[H.iP].prot);
        entr.push({ tx: accorda(r, prot ? prot.nome : "", prot ? eDonna(prot.omino) : null), a: "casa" });
      });
      H.voci = mescola(entr).map(function (x, i) { x.k = i; return x; });
      var per = lim(15 / H.voci.length, 1.8, 3.2);
      H.dom.per = per;
      vai("vetrina", H.voci.length * per + 1.2, { anim: H.voci.length * per });
    }
    function votaBattute() { vai("vota", T_VOTA); presenti().forEach(function (p) { mandaMie(p.id); }); }
    // a ognuno, solo a lui: quali battute sono le sue (non si possono votare)
    function mandaMie(id) { if (H.voci) privato(id, { t: "mie", k: chiave(), n: H.voci.filter(function (v) { return v.a === id; }).map(function (v) { return v.k; }) }); }
    function svelaVoto() {
      var prot = H.scaletta[H.iP].prot, vociL = H.voci, galL = H.gal;
      var lista = vociL || galL || [];
      // nello Scrivi e nel Disegna il voto di chi è sotto torchio vale doppio
      var E = punteggio(H.risp, function (id) { return id === prot ? 2 : 1; }, H.dom.tipo);
      E.autori = {}; lista.forEach(function (v) { E.autori[vociL ? v.k : v.n] = v.a; });
      // +100 all'autore della battuta / del disegno più votato (a pari voti a tutti i pari; la casa non prende niente)
      E.vinc.forEach(function (x) {
        var a = E.autori[x];
        if (a && a !== "casa" && pById(a)) { E.bonus[a] = (E.bonus[a] || 0) + 100; E.premiato = (E.premiato || []).concat([a]); }
      });
      Object.keys(E.scelte).forEach(function (v) { var a = E.autori[E.scelte[v]]; if (a && a !== "casa") st(a)[vociL ? "votiBat" : "votiDis"]++; });
      if (E.vinc.some(function (x) { return E.autori[x] === "casa"; })) E.casa = true;
      if (vociL) {
        E.ordine = lista.map(function (v) { return v.k; }).sort(function (a, b) { return (E.conti[a] || 0) - (E.conti[b] || 0); });
        E.testi = {}; lista.forEach(function (v) { E.testi[v.k] = v.tx; });
        var best = E.vinc.length ? E.testi[E.vinc[0]] : null;
        if (best && E.autori[E.vinc[0]] !== "casa") (H.battute[prot] || (H.battute[prot] = [])).push(best);
      }
      // TUTTI D'ACCORDO: tutti quelli che potevano votarla l'hanno votata (chi l'ha scritta o disegnata non può votare la sua:
      // se vota un'altra cosa, gli altri sono d'accordo lo stesso)
      if (E.strisc !== "tutti") Object.keys(E.conti).forEach(function (x) {
        var a = E.autori[x], altri = Object.keys(E.scelte).filter(function (id) { return id !== a; });
        if (altri.length >= 2 && altri.every(function (id) { return String(E.scelte[id]) === String(x); })) { E.strisc = "tutti"; E.tuttiX = x; }
      });
      if (E.strisc === "tutti") { var x0 = E.tuttiX != null ? E.tuttiX : Object.keys(E.conti)[0]; E.esclusi = [E.autori[x0]]; delete E.tuttiX; }
      E.voce = voce(E, prot);
      chiudi(E);
    }

    // ----- 🎨 Disegna: galleria -----
    function galleria() {
      var lista = [];
      presenti().forEach(function (p) { var d = H.disegni[p.id]; if (d && !disVuoto(d)) lista.push({ a: p.id, dis: d }); });
      H.fatti = {}; H.risp = {};
      if (!lista.length) {
        var E = { tipo: "d", vuoto: true, scelte: {}, jolly: [], guad: {}, bonus: {}, conti: {}, vinc: [] };
        E.voce = voce(E, H.scaletta[H.iP].prot) || "Nessuno ha avuto il coraggio di disegnare…";
        H.esito = E; return vai("svela", T_NESSUNO + 1.5, { anim: 1.5, pulisci: false });
      }
      H.gal = mescola(lista).map(function (g, i) { g.n = i; g.su = H.dom.su; return g; });
      H.kGal = chiave("g");
      vai("vota", T_VOTAD);
      mandaGalleria(null);
    }

    // ----- 🖼️ «Passa il ritratto!» -----
    function finaleIntro() {
      var pres = mescola(presenti()), n = pres.length, miss = mescola(comuni("missione").filter(function (m) { return H.usate.indexOf(m.id) < 0 && !VISTI[m.id]; }));
      if (miss.length < n) miss = miss.concat(mescola(comuni("missione")));
      var K = Math.max(1, Math.min(3, n - 1));
      H.fin = { K: K, k: 0, ordine: pres.map(function (p) { return p.id; }), tiene: {}, fogli: pres.map(function (p, j) {
        var m = miss[j] || { id: "x", q: "una star del cinema" };
        H.usate.push(m.id);
        return { n: j, target: p.id, miss: accorda(m.q, p.nome, eDonna(p.omino)), strati: [], autori: [] };
      }) };
      H.dom = { tipo: "f" }; H.esito = null; H.voci = null; H.gal = null; H.classif = null;
      vai("fintro", T_FINTRO);
    }
    function passaggio(k) {
      var F = H.fin, n = F.ordine.length;
      F.k = k; F.tiene = {}; H.disegni = {};
      F.fogli.forEach(function (f, j) { var chi = F.ordine[(j + k) % n]; F.tiene[chi] = j; });
      vai("passa", T_PASSA, { grazia: 2000 });
      Object.keys(F.tiene).forEach(function (id) { mandaFoglio(id); });
    }
    function mandaFoglio(id) {
      var F = H.fin; if (!F || F.tiene[id] == null) return;
      var f = F.fogli[F.tiene[id]];
      privato(id, { t: "foglio", k: chiave(), n: f.n, target: f.target, miss: f.miss, strati: f.strati.map(function (s) { return s.dis; }), pass: F.k, K: F.K });
    }
    function finePassaggio() {
      var F = H.fin;
      Object.keys(F.tiene).forEach(function (id) {
        var d = H.disegni[id], f = F.fogli[F.tiene[id]];
        if (d && !disVuoto(d)) { f.strati.push({ by: id, dis: d }); if (f.autori.indexOf(id) < 0) f.autori.push(id); }
      });
      try { F.peso = JSON.stringify(F.fogli.map(function (f) { return f.strati; })).length; } catch (e) { F.peso = 99999; }   // (quanto pesano gli strati: per la copia del vice)
      if (F.k < F.K && presenti().length >= 2) return passaggio(F.k + 1);
      // la galleria dei ritratti trasformati
      H.gal = F.fogli.map(function (f) { return { n: f.n, a: null, autori: f.autori.slice(), target: f.target, miss: f.miss, strati: f.strati.map(function (s) { return s.dis; }), su: "ritratto" }; });
      H.kGal = chiave("fg"); H.fatti = {}; H.risp = {};
      vai("fvota", T_FVOTA);
      mandaGalleria(null);
    }
    function svelaFinale() {
      var E = punteggio(H.risp, function () { return 1; }, "f", 2);   // punti doppi
      E.autori = {}; H.gal.forEach(function (g) { E.autori[g.n] = g.autori; });
      E.vinc.forEach(function (x) { (E.autori[x] || []).forEach(function (a) { if (pById(a)) { E.bonus[a] = (E.bonus[a] || 0) + 200; } }); });
      E.tuttiOk = false;
      H.esito = E;
      chiudiFinale(E);
    }
    function chiudiFinale(E) {
      Object.keys(E.guad).forEach(function (id) { var p = pById(id); if (p) p.punti += E.guad[id]; });
      Object.keys(E.bonus).forEach(function (id) { var p = pById(id); if (p) p.punti += E.bonus[id]; });
      var A = 1.4 + 0.42 * Object.keys(E.scelte).length + 1.6;
      vai("fsvela", A + T_RIEP, { anim: A, pulisci: false });
    }
    // ----- i titoli della serata -----
    function titoli() {
      function migliori(k, min) {
        var max = min; presenti().forEach(function (p) { if (st(p.id)[k] > max) max = st(p.id)[k]; });
        return max > min ? presenti().filter(function (p) { return st(p.id)[k] === max; }).map(function (p) { return p.id; }) : [];
      }
      var on = [];
      var b = migliori("votiChi", 0); if (b.length) on.push({ e: "🎯", nome: "Il Bersaglio", ids: b, perche: punti0(st(b[0]).votiChi, "voto", "voti") + " nei «Chi di noi»" });
      var m = migliori("magg", 0); if (m.length) on.push({ e: "🧠", nome: "Mente del Gruppo", ids: m, perche: st(m[0]).magg + " volte con la maggioranza" });
      var c = migliori("jollyOk", 0); if (c.length) on.push({ e: "🃏", nome: "Il Cecchino", ids: c, perche: punti0(st(c[0]).jollyOk, "jolly andato", "jolly andati") + " a segno" });
      var ti = [], uguali = {};   // (lo stesso titolo vinto a pari voti: una carta sola con tutte le facce)
      Object.keys(H.titoli).forEach(function (id) { if (pById(id)) H.titoli[id].forEach(function (x) {
        var k = x.e + "|" + x.t; if (uguali[k]) uguali[k].ids.push(id); else ti.push(uguali[k] = { ids: [id], t: x.t, e: x.e });
      }); });
      H.premi = { onori: on, titoli: ti.slice(0, 8) };
      H.dom = { tipo: "premi" }; H.esito = null; H.gal = H.gal;   // (la galleria del finale serve alle figurine)
      vai("premi", 4 + 1.3 * (on.length + Math.min(ti.length, 8)) + 6, { anim: 1 + 1.3 * (on.length + Math.min(ti.length, 8)) });
    }
    function punti0(n, uno, tanti) { return n + " " + (n === 1 ? uno : tanti); }
    function fine() {
      ferma(); clearTimeout(tFatto); clearTimeout(tRespiro); respiroFino = 0; attesi = {};
      H.scade = 0;
      var ord = H.players.slice().sort(function (a, b) { return b.punti - a.punti; });
      var cl = ord.map(function (p) { return { id: p.id, nome: p.nome, punti: p.punti, pos: 1 + ord.filter(function (q) { return q.punti > p.punti; }).length, via: !!p.via }; });
      var fig = {};
      H.players.forEach(function (p) {
        var tt = (H.titoli[p.id] || []).map(function (x) { return x.e + " " + x.t; });
        ((H.premi && H.premi.onori) || []).forEach(function (o) { if (o.ids.indexOf(p.id) >= 0) tt.unshift(o.e + " " + o.nome); });
        var ver = H.verdetti[p.id] || [], bat = H.battute[p.id] || [];
        var f = H.fin ? H.fin.fogli.filter(function (x) { return x.target === p.id; })[0] : null;
        fig[p.id] = { titoli: tt.slice(0, 4), verdetto: ver.length ? caso(ver) : null, battuta: bat.length ? caso(bat) : null, foglio: f ? f.n : null };
      });
      H.fine = { classifica: cl, figurine: fig, ids: H.usate.slice(), kGal: H.fin ? H.kGal : null };
      H.fase = "fine"; H.passo = null;
      segnaVisti(H.usate.filter(function (x) { return /^([a-z]{3}-[a-z]\d+|fin-\d+)$/.test(x); }));   // (anche le missioni del finale)
      H.usate.forEach(function (x) { VISTI[x] = oggi(); });
      bd(true);
      if (t.risultato) t.risultato(cl.map(function (r) { return { nome: r.nome, pos: r.pos }; }));
    }
    // "Nuova partita" / Rivincita: stessa stanza, stessi amici (e stessi ritratti), tutti nella saletta; chi era arrivato tardi entra adesso
    function nuova() {
      if (H.fase !== "fine") return;
      ferma(); H.fase = "lobby"; H.passo = null; H.fine = null; H.scade = 0; H.fin = null; H.gal = null; H.esito = null; H.premi = null;
      H.players = presenti(); H.players.forEach(function (p) { p.punti = 0; p.jolly = 3; p.forse = false; });
      H.guarda = H.guarda.filter(function (g) {
        if (g.tardi && H.players.length < MAX && t.puoSedersi(g.id, g.nome)) { H.players.push({ id: g.id, nome: g.nome, omino: g.omino || null, punti: 0, jolly: 3 }); return false; }
        return true;
      });
      Object.keys(H.foto).forEach(function (id) { if (!pById(id) && !inGuarda(id)) delete H.foto[id]; });   // (le foto restano: chi è uscito no)
      // chi tiene la partita è il primo (la corona in saletta); se l'ha presa guardando (host di riserva), si siede
      if (!pById(IO)) { H.guarda = H.guarda.filter(function (x) { return x.id !== IO; }); H.players.push({ id: IO, nome: nomeHost, omino: t.mioOmino(nomeHost), punti: 0, jolly: 3 }); }
      H.players.sort(function (a, b) { return (b.id === IO) - (a.id === IO); });
      bd(true);
    }
    t.onRivincita = nuova;

    var cbHost = { sonoHost: true, myId: IO, onComincia: comincia, onNuova: nuova,
      invia: function (m) { mossa(IO, m); },
      onEsci: function () {
        function via() { ferma(); clearTimeout(tRespiro); t.ricorda(null); rete.chiudi(); pulisciFoto(true); t.esci(); }   // (uscito apposta: niente da riprendere)
        // (dalla saletta il core ha già chiesto "Chiudere la stanza per tutti?")
        if (H.fase === "gioco") return t.conferma("Chiudere la partita per tutti?", "Gli amici tornano alla Sala.", "Chiudi", via);
        via();
      } };
    if (ripresa) riprendi(); else { bd(true); avviaFoto(); }
  }

  // =========================================================
  //  OSPITE: disegna le foto dell'host e manda solo le sue mosse
  // =========================================================
  function ospite(t, codice) {
    if (!(window.SGNet && SGNet.disponibile())) return senzaRete(t);
    pulisciFoto(false);
    var S = { rete: null, myId: null, nome: "", vm: null, vistiMandati: false };
    var cb = { sonoHost: false, myId: null,
      invia: function (m) { if (S.rete) S.rete.invia(m); },
      onEsci: function () {
        function via() { if (S.rete) S.rete.chiudi(); pulisciFoto(true); t.esci(); }
        if (S.vm && S.vm.fase === "gioco") return t.conferma("Uscire dalla partita?", null, "Esci", via);
        via();
      } };
    if (t.nomeProfilo()) { S.nome = t.nomeProfilo(); collega(); } else chiediNome();   // col profilo si entra da soli
    function chiediNome() {
      var s = t.schermata({ chiara: true, icona: "🫵", titolo: "Entra nella partita", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      var input = t.el("input", { type: "text", placeholder: "Il tuo nome", maxlength: "16", class: "link-campo" });
      s._contenuto.appendChild(input);
      s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Entra ▶", onclick: function () {
        try { SG.audioCtx && SG.audioCtx(); } catch (e) {}
        S.nome = (input.value || "").trim().slice(0, 16) || "Amico"; collega();
      } }));
      t.mostra(mio(s));
    }
    function collega() {
      attesa();
      S.rete = SGNet.entra(codice, {
        onAperto: function (id) {
          S.myId = id; cb.myId = id; S.rete.invia({ t: "join", nome: S.nome, omino: t.mioOmino(S.nome) });
          if (!S.foto) { S.foto = true; fotoInizia(codice, false, id, function () { if (S.vm) disegna(t, S.vm, cb); }); }
        },
        onMsg: function (m) {
          if (!m || !m.t) return;
          if (m.to && m.to !== S.myId) return;          // era per un altro telefono
          if (m.t === "vm") {
            S.vm = m.vm;
            // le domande che ho già visto (telefono e profilo): all'host, una volta, così pesca quelle nuove
            if (!S.vistiMandati && m.vm.players && m.vm.players.some(function (p) { return p.id === S.myId; })) {
              S.vistiMandati = true;
              var v = Object.keys(vistiMiei()); if (v.length) S.rete.invia({ t: "visti", s: compatta(v) });
            }
            disegna(t, m.vm, cb);
          } else ricevi(t, m, cb);
        },
        onChiuso: function (perche) { errore(t, perche && perche.sparito ? "L'host non è tornato: la stanza è chiusa." : "L'host ha chiuso la partita."); },
        onErrore: function () { if (S.rete) S.rete.chiudi(); erroreRete(t, "Non riesco a entrare nella stanza.", collega); }
      });
      if (!S.rete) senzaRete(t);
    }
    function attesa() {
      var s = t.schermata({ chiara: true, icona: "🫵", titolo: "Entro nella partita…", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      s._contenuto.appendChild(t.el("p", { class: "modulo-nota", style: "text-align:center;margin-top:24px", text: "Collegamento in corso…" }));
      t.mostra(mio(s));
    }
  }

  // =========================================================
  //  I MESSAGGI VELOCI (uguali per host e ospiti): reazioni, galleria, foglio del finale, "la tua risposta"
  // =========================================================
  var GAL = { k: null, items: {}, tot: 0, mio: [] };
  var TUA = { k: null };
  var FOGLIO = { k: null };
  var MIE = { k: null, n: [] };
  function ricevi(t, m, cb) {
    if (m.t === "reaz") { if (U && U.t === t) volaReazione(U, m.id, m.e); return; }
    if (m.t === "foto") return fotoPezzo(m, cb);
    if (m.t === "gal") {
      if (GAL.k !== m.k) GAL = { k: m.k, items: {}, tot: m.tot || 0, mio: [] };
      GAL.tot = m.tot || GAL.tot;
      GAL.items[m.n] = { n: m.n, dis: disValido(m.dis), strati: Array.isArray(m.strati) ? m.strati.map(disValido) : null, target: m.target, su: m.su };
      if (U && U.cur && U.cur.galleria) U.cur.galleria();
      return;
    }
    if (m.t === "mio") { if (GAL.k !== m.k) GAL = { k: m.k, items: {}, tot: 0, mio: [] }; GAL.mio = m.n || []; if (U && U.cur && U.cur.galleria) U.cur.galleria(); return; }
    if (m.t === "mie") { MIE = { k: m.k, n: m.n || [] }; if (U && U.cur && U.cur.mie) U.cur.mie(); return; }
    if (m.t === "tua") { TUA = { k: m.k, x: m.x, j: m.j, tx: m.tx, dis: disValido(m.dis), fine: m.fine }; if (U && U.cur && U.cur.tua) U.cur.tua(); return; }
    if (m.t === "foglio") { FOGLIO = { k: m.k, n: m.n, target: m.target, miss: m.miss, strati: (m.strati || []).map(disValido), pass: m.pass, K: m.K }; if (U && U.cur && U.cur.foglio) U.cur.foglio(); return; }
  }

  // =========================================================
  //  DISEGNO (uguale per host e ospiti): saletta, gioco, fine
  // =========================================================
  var U = null;    // la schermata di gioco: si costruisce UNA volta e poi si aggiorna a pezzi
  var INVIATA = null;   // la mia ultima risposta ({ k, m }): resta anche se la schermata si rifà (il vice che prende la partita la rimanda a sé)
  var FIN = null;  // la classifica finale già a schermo: le foto che arrivano dopo non la ridisegnano
  function disegna(t, vm, cb) {
    ricordaOmini(vm.players); ricordaOmini(vm.guarda);
    fotoVm(t, vm, cb);
    // si comincia mentre sono nel camerino: tengo la foto fatta (col filtro scelto), se no resto com'ero
    if (vm.fase !== "lobby" && FX() && FX().aperto()) FX().chiudiCamerino(true);
    if (vm.fase === "lobby") { chiudiU(); FIN = null; return lobby(t, vm, cb); }
    if (vm.fase === "fine") {
      chiudiU();
      var kf = "fine|" + vm.partita + "|" + vm.pid;
      if (FIN && FIN.k === kf && FIN.t === t && document.body.contains(FIN.s)) return;
      FIN = { k: kf, t: t, s: schermataFine(t, vm, cb) };
      return;
    }
    FIN = null;
    if (!U || U.t !== t || !document.body.contains(U.s)) { chiudiU(); U = creaSchermo(t, cb); }
    aggiorna(U, vm, cb);
  }
  function chiudiU() { if (U) { clearInterval(U.tic); (U.timeouts || []).forEach(clearTimeout); if (U.cur && U.cur.via) try { U.cur.via(); } catch (e) {} } U = null; }

  function lobby(t, vm, cb) {
    var dentro = vm.players.some(function (p) { return p.id === cb.myId; });
    var guardano = vm.guarda || [], guardo = guardano.some(function (p) { return p.id === cb.myId; });
    var extra = [];
    var n = vm.players.length, imp = impNorm(vm.imp);
    extra.push(t.el("p", { class: "modulo-nota", text: "🫵 Uno alla volta sotto torchio, in " + imp.nPosti + " posti buffi. Si fanno punti votando come gli amici. Circa " + stimaMinuti(imp, Math.max(3, n)) + " minuti." }));
    if (guardano.length) extra.push(t.el("p", { class: "modulo-nota", text: "👀 Guardano: " + guardano.map(function (p) { return p.id === cb.myId ? "tu" : p.nome; }).join(", ") }));
    var fb = (dentro || guardo) ? boxFoto(t, vm, cb) : null;
    if (fb) extra.unshift(fb);
    mio(t.lobby({ host: cb.sonoHost, codice: vm.codice, pronta: vm.pronta, min: MIN,
      vuoti: Math.max(0, MIN - n),
      giocatori: vm.players.map(function (p, i) { return { id: p.id, nome: p.nome, omino: p.omino || null, host: vm.tiene ? p.id === vm.tiene : i === 0, tu: p.id === cb.myId }; }),
      extra: extra,
      spettatore: guardo ? "👀 Questa volta guardi" : !cb.sonoHost && !dentro && n >= MAX ? "👀 La stanza è piena: guardi la partita" : false,
      attesa: "Aspetta che l'host cominci!", onComincia: cb.onComincia, onEsci: cb.onEsci }));
    // la prima volta, prima di tutto: «📸 La tua faccia per stasera» (selfie, galleria o avatar), se si può
    if (!FT.chiesto && FT.pronta && (dentro || guardo) && fotoOk(vm) && imp.foto && !FT.mia && FX()) { FT.chiesto = true; apriCamerino(t, cb); }
  }

  // ---------- un tasto che risponde al primo tocco (pointerup) e vibra al tocco ----------
  function tasto(t, classe, testo, fn, nov) {
    var b = t.el("button", { class: "cn-btn " + (classe || ""), type: "button" }), giu = false;
    if (testo != null) b.textContent = testo;
    b.addEventListener("pointerdown", function (e) { if (b.disabled) return; giu = true; e.preventDefault(); });
    b.addEventListener("pointerup", function (e) { if (!giu || b.disabled) return; giu = false; e.preventDefault(); try { SG.audioCtx && SG.audioCtx(); } catch (_) {} if (!nov) vibra(10); fn(e); });
    b.addEventListener("pointercancel", function () { giu = false; });
    b.addEventListener("pointerleave", function () { giu = false; });
    b.addEventListener("click", function (e) { if (e.detail === 0 && !b.disabled) fn(e); });
    return b;
  }
  function img(t, src, classe) { var i = t.el("img", { class: classe || "", alt: "", draggable: "false" }); if (src) i.src = src; return i; }
  function miniFaccia(t, id, nome, classe) {
    var w = t.el("span", { class: "cn-mini " + (classe || "") }, [imgF(t, id, nome)]);
    w.title = nome || ""; w._id = id;
    return w;
  }
  function giocatore(vm, id) { var l = (vm.players || []).concat(vm.guarda || []); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function nomeVm(vm, id) { var p = giocatore(vm, id); return p ? p.nome : "…"; }
  function tuONome(vm, id, myId) { return id === myId ? "Tu" : nomeVm(vm, id); }

  // =========================================================
  //  LA SCHERMATA DI GIOCO (cornice fissa + palco che cambia a ogni passo)
  // =========================================================
  function creaSchermo(t, cb) {
    stile();
    var s = t.schermata({}); s.classList.add("cn-piena");
    var el = t.el;
    // le mie risposte passano di qui (INVIATA): se chi tiene la partita non mi ha tra chi ha risposto (la mossa è andata persa mentre ricaricava
    // la pagina, o mentre la partita passava a un amico), la rimando da solo (vedi orologioUI)
    var cbU = Object.create(cb);
    cbU.invia = function (m) {
      if (m && m.k && (m.t === "scelta" || m.t === "testo" || (m.t === "dis" && m.fine))) INVIATA = { k: m.k, m: m, t: Date.now(), n: 0 };
      cb.invia(m);
    };
    var u = { t: t, s: s, cb: cbU, k: null, cur: null, vm: null, guardo: false, scade: 0, dur: 1, ultTic: -1, faces: {} };
    u.root = el("div", { class: "cn" });
    // la barra in alto: ‹ · posto e domanda · tempo · jolly · 🏆
    u.esci = el("button", { class: "cn-esci", type: "button", "aria-label": "Esci", text: "‹", onclick: function () { cb.onEsci(); } });
    u.dove = el("div", { class: "cn-dove" });
    u.timer = el("div", { class: "cn-timer spento" });
    u.timer.innerHTML = "<svg viewBox='0 0 36 36'><circle cx='18' cy='18' r='15.5' class='f'/><circle cx='18' cy='18' r='15.5' class='p'/></svg><b></b>";
    u.timerP = u.timer.querySelector(".p"); u.timerN = u.timer.querySelector("b");
    u.jolly = el("div", { class: "cn-jtappi", title: "I tuoi jolly" });
    u.coppa = el("button", { class: "cn-coppa", type: "button", "aria-label": "Classifica", text: "🏆", onclick: function () { apriClassifica(u); } });
    u.barra = el("div", { class: "cn-barra" }, [u.esci, u.dove, u.timer, u.jolly, u.coppa]);
    u.palco = el("div", { class: "cn-palco" });
    // in fondo: chi ha risposto (avatar grigi finché non rispondono) e le reazioni volanti
    u.chi = el("div", { class: "cn-chi" });
    u.reaz = el("div", { class: "cn-reaz" });
    REAZ.forEach(function (e) {
      var b = el("button", { class: "cn-rz", type: "button", text: e, "aria-label": "Reazione " + e });
      b.addEventListener("pointerdown", function (ev) {
        ev.preventDefault();
        var ora = Date.now(); if (ora - (u.ultReaz || 0) < 1000) return; u.ultReaz = ora;
        b.classList.remove("boing"); void b.offsetWidth; b.classList.add("boing");
        cb.invia({ t: "reaz", e: e });
      });
      u.reaz.appendChild(b);
    });
    u.fondo = el("div", { class: "cn-fondo" }, [u.chi, u.reaz]);
    u.volo = el("div", { class: "cn-volo" });
    u.velo = el("div", { class: "cn-velo" });
    u.root.appendChild(u.barra); u.root.appendChild(u.palco); u.root.appendChild(u.fondo); u.root.appendChild(u.volo); u.root.appendChild(u.velo);
    s._contenuto.appendChild(u.root);
    t.mostra(mio(s));
    u.tic = setInterval(function () { orologioUI(u); }, 200);
    return u;
  }
  function orologioUI(u) {
    if (!u.vm) return;
    var resta = u.scade ? Math.max(0, u.scade - Date.now()) : 0, s = Math.ceil(resta / 1000);
    var conTimer = RISP_UI[u.vm.passo];
    if (!conTimer || !u.scade) { if (!u.timer.classList.contains("spento")) { u.timer.classList.add("spento"); tx(u.timerN, ""); } }
    else {
      u.timer.classList.remove("spento");
      tx(u.timerN, String(s));
      u.timerP.style.strokeDashoffset = (97.4 * (1 - lim(resta / (u.dur * 1000), 0, 1))).toFixed(1);
      u.timer.classList.toggle("rosso", s <= 5);
      var fatto = (u.vm.risposto || []).indexOf(u.cb.myId) >= 0;
      if (!u.guardo && !fatto && s <= 5 && s > 0 && u.ultTic !== s) { u.ultTic = s; suono("tic"); }
    }
    if (u.cur && u.cur.tic) try { u.cur.tic(resta); } catch (e) {}
    // la mia risposta non risulta all'host: la rimando (ogni 4 secondi, al massimo 5 volte; l'host tiene sempre la prima)
    var I = INVIATA, ora = Date.now();
    if (I && I.k === u.vm.k && RISP_UI[u.vm.passo] && !u.guardo && (u.vm.risposto || []).indexOf(u.cb.myId) < 0 && ora - I.t > 4000 && I.n < 5) {
      I.t = ora; I.n++; u.cb.invia(I.m);
    }
  }
  var RISP_UI = { scegli: 1, scrivi: 1, vota: 1, disegna: 1, passa: 1, fvota: 1 };

  function aggiorna(u, vm, cb) {
    u.vm = vm;
    var io = null; vm.players.forEach(function (p) { if (p.id === cb.myId) io = p; });
    u.io = io; u.guardo = !io || io.via;
    u.root.classList.toggle("guardo", u.guardo);
    // il tempo: i secondi che mancano (mai l'ora: gli orologi dei telefoni sono diversi)
    if (vm.k !== u.kTempo || Math.abs((u.scade - Date.now()) / 1000 - vm.resta) > 1.2) { u.kTempo = vm.k; u.scade = vm.resta ? Date.now() + vm.resta * 1000 : 0; u.dur = Math.max(1, vm.dur || 1); u.ultTic = -1; }
    // la barra
    var P = vm.posto ? posto(vm.posto) : null;
    var dove = vm.passo === "sfilata" ? "🎬 Stasera giocano…" : vm.passo === "classifica" ? "🏆 Classifica" :
      FINALE[vm.passo] ? "🎨 Gran finale" : vm.passo === "premi" ? "🏅 I titoli" :
      P ? (P.emoji + " " + (vm.passo === "arrivo" ? "" : (vm.iD + 1) + "/" + vm.nD + " · ") + nomeCorto(P)) : "";   // (il numero della domanda prima del nome: se il nome si taglia, resta)
    tx(u.dove, (u.guardo ? "👀 " : "") + dove);
    var nj = io ? io.jolly : 0;
    if (u.nJolly !== nj) { u.nJolly = nj; svuota(u.jolly); for (var i = 0; i < 3; i++) u.jolly.appendChild(u.t.el("i", { class: i < nj ? "su" : "", text: "🃏" })); }
    u.jolly.style.visibility = u.guardo ? "hidden" : "";
    // il palco: si ricostruisce solo quando cambia il passo (chiave), poi si aggiorna a pezzi
    var k = vm.k + "|" + (u.guardo ? "g" : "p");
    if (k !== u.k) {
      if (u.cur && u.cur.via) try { u.cur.via(); } catch (e) {}
      u.k = k; svuota(u.palco); u.root.classList.remove("scrive");
      u.t0 = Date.now() - (vm.el || 0);   // quando è cominciato questo passo (per le animazioni uguali su tutti i telefoni)
      (u.timeouts || []).forEach(clearTimeout); u.timeouts = [];
      u.dopo = function (ms, fn) { if (ms <= 0) { fn(); return; } u.timeouts.push(setTimeout(fn, ms)); };
      var B = PASSI[vm.passo] || passoVuoto;
      u.cur = B(u, vm) || {};
      if (u.cur.el) { u.cur.el.classList.add("cn-entra"); u.palco.appendChild(u.cur.el); }
      chiudiVelo(u);
    }
    if (u.cur && u.cur.agg) u.cur.agg(vm);
    aggFondo(u, vm);
    if (u.classOpen) riempiClassifica(u);
  }
  var FINALE = { fintro: 1, passa: 1, fvota: 1, fsvela: 1 };
  // in fondo: chi ha risposto (nei passi in cui si risponde), altrimenti tutti con i punti
  function aggFondo(u, vm) {
    var rispondo = RISP_UI[vm.passo], risp = vm.risposto || [], visti = {};
    vm.players.forEach(function (p) {
      if (p.via) return;
      visti[p.id] = 1;
      var f = u.faces[p.id];
      if (!f) { f = u.faces[p.id] = miniFaccia(u.t, p.id, p.nome); u.chi.appendChild(f); }
      f.classList.toggle("ok", !rispondo || risp.indexOf(p.id) >= 0);
      f.classList.toggle("forse", !!p.forse);
      f.classList.toggle("tu", p.id === u.cb.myId);
    });
    Object.keys(u.faces).forEach(function (id) { if (!visti[id]) { var f = u.faces[id]; if (f.parentNode) f.parentNode.removeChild(f); delete u.faces[id]; } });
  }
  function volaReazione(u, id, e) {
    var p = giocatore(u.vm || { players: [] }, id), n = u.t.el("div", { class: "cn-vola" + (e === "🍅" ? " pomodoro" : "") }, [u.t.el("span", { class: "e", text: e }), imgF(u.t, id, p ? p.nome : "", {}, "f")]);
    n.style.left = (12 + Math.random() * 70) + "%";
    n.style.setProperty("--dx", ((Math.random() - 0.5) * 80).toFixed(0) + "px");
    u.volo.appendChild(n);
    suono("pop");
    setTimeout(function () { if (n.parentNode) n.parentNode.removeChild(n); }, 2600);
  }
  // 🏆 la classifica, sempre a portata (un velo sopra il gioco)
  function apriClassifica(u) {
    if (u.classOpen) return chiudiVelo(u);
    u.classOpen = true; u.velo.classList.add("su"); riempiClassifica(u);
  }
  function chiudiVelo(u) { u.classOpen = false; u.velo.classList.remove("su"); svuota(u.velo); }
  function riempiClassifica(u) {
    var vm = u.vm, t = u.t; svuota(u.velo);
    var ord = vm.players.slice().sort(function (a, b) { return b.punti - a.punti; });
    var box = t.el("div", { class: "cn-class-box" }, [t.el("div", { class: "cn-class-tit", text: "🏆 Classifica" })]);
    var ol = t.el("div", { class: "cn-class" + (ord.length > 6 ? " due" : "") });
    ord.forEach(function (p) {
      var pos = 1 + ord.filter(function (q) { return q.punti > p.punti; }).length;
      ol.appendChild(t.el("div", { class: "cn-riga" + (p.id === u.cb.myId ? " tu" : "") + (p.via ? " via" : "") }, [
        t.el("b", { text: pos + "°" }), miniFaccia(t, p.id, p.nome), t.el("span", { class: "n", text: p.id === u.cb.myId ? "Tu" : p.nome }), t.el("span", { class: "pt", text: fmtN(p.punti) })]));
    });
    box.appendChild(ol);
    box.appendChild(tasto(t, "chiaro", "Chiudi", function () { chiudiVelo(u); }));
    u.velo.appendChild(box);
  }

  // ---------- pezzi comuni dei passi ----------
  // la carta della domanda: si rimpicciolisce da sola se è lunga
  function cartaDomanda(t, testo, extra) {
    var c = t.el("div", { class: "cn-domanda" });
    var q = t.el("div", { class: "q" }); q.textContent = testo;
    var L = String(testo || "").length;
    q.style.fontSize = (L > 100 ? 15 : L > 75 ? 16.5 : L > 50 ? 18 : 20) + "px";
    c.appendChild(q);
    if (extra) c.appendChild(t.el("div", { class: "x", text: extra }));
    return c;
  }
  // la striscia della scena col protagonista vestito per il posto
  function strisciaScena(t, vm) {
    var P = posto(vm.posto), w = t.el("div", { class: "cn-striscia" });
    var bg = img(t, ARTE().scenaSrc ? ARTE().scenaSrc(vm.posto, 480, 200) : "", "bg");
    w.appendChild(bg);
    w.appendChild(imgF(t, vm.prot, nomeVm(vm, vm.prot), { posto: vm.posto }, "prot"));
    w.appendChild(t.el("div", { class: "cn-sotto" }, [t.el("small", { text: "Sotto torchio" }), t.el("b", { text: maiuscolo(nomeVm(vm, vm.prot)) })]));
    if (P) w.appendChild(t.el("span", { class: "cn-em", text: P.emoji }));
    return w;
  }
  // la riga dei tasti: jolly + invio
  function rigaAzione(u, testoInvio, onInvio) {
    var t = u.t, R = { j: false };
    R.bJ = tasto(t, "jolly", "🃏 Jolly ×2", function () {
      if (!u.io || u.io.jolly <= 0) return;
      R.j = !R.j; R.bJ.classList.toggle("on", R.j); suono(R.j ? "boing" : "pop");
    });
    R.bInv = tasto(t, "vai", testoInvio, function () { onInvio(R.j); });
    R.el = t.el("div", { class: "cn-azione" }, [R.bJ, R.bInv]);
    R.agg = function (pronto, inviato) {
      R.bInv.disabled = !pronto || inviato;
      R.bJ.disabled = inviato || !u.io || u.io.jolly <= 0 && !R.j;
      R.el.classList.toggle("inviato", !!inviato);
    };
    if (u.guardo) R.el.style.visibility = "hidden";
    return R;
  }
  // in fondo ai riepiloghi: il conto alla rovescia (t.contoAvanti) e «⏩ Avanti» (se lo tocca più di metà si parte subito)
  function rigaAvanti(u, vm) {
    var t = u.t, R = {};
    R.conto = t.el("span", { class: "cn-conto" });
    R.b = tasto(t, "avanti", "⏩ Avanti", function () {
      if (R.toccato || u.guardo) return; R.toccato = true; R.b.classList.add("on");
      u.cb.invia({ t: "avanti", k: vm.k });
    });
    R.el = t.el("div", { class: "cn-riga-avanti" }, [R.conto, R.b]);
    if (u.guardo) R.b.style.display = "none";
    // (nella chiave anche le riprese: dopo una ripresa il conto riparte giusto su tutti i telefoni)
    R.rip = vm.rip || 0;
    t.contoAvanti(R.conto, vm.resta || 1, null, "cn|" + vm.k + "|" + R.rip);
    R.agg = function (v) {
      if ((v.rip || 0) !== R.rip) { R.rip = v.rip || 0; t.contoAvanti(R.conto, v.resta || 1, null, "cn|" + v.k + "|" + R.rip); }
      var n = (v.avanti || []).length;
      tx(R.b, (R.toccato ? "✓ " : "⏩ ") + "Avanti" + (n ? " " + n + "/" + v.serve : ""));
    };
    R.agg(vm);
    return R;
  }
  function passoVuoto(u) { return { el: u.t.el("div", { class: "cn-centro" }, [u.t.el("p", { text: "…" })]) }; }
  function trascorso(u) { return Date.now() - u.t0; }   // ms da quando è cominciato il passo

  // =========================================================
  //  I PASSI (ognuno costruisce il suo palco una volta e poi si aggiorna)
  // =========================================================
  var PASSI = {};

  // ----- 🎬 la sfilata dei giocatori, poi «Pronti a giocare…» 3-2-1 -----
  PASSI.sfilata = function (u, vm) {
    var t = u.t, gente = vm.players.filter(function (p) { return !p.via; }), n = gente.length;
    var per = Math.max(1.2, ((vm.dur || 10) - 3.4) / Math.max(1, n));
    var cornice = t.el("div", { class: "cn-sf-cornice" }), foto = img(t, "", "cn-sf-foto"), nome = t.el("div", { class: "cn-sf-nome" });
    var piccoli = t.el("div", { class: "cn-sf-fila" });
    gente.forEach(function (p) { var m = miniFaccia(t, p.id, p.nome); m._pid = p.id; piccoli.appendChild(m); });
    var pronti = t.el("div", { class: "cn-sf-pronti" }), av = rigaAvanti(u, vm);
    var el = t.el("div", { class: "cn-sf" }, [t.el("div", { class: "cn-sf-tit", text: "Stasera giocano…" }), t.el("div", { class: "cn-sf-palco" }, [cornice, nome]), pronti, piccoli, av.el]);
    cornice.appendChild(foto);
    var ultimo = -2;
    function tic() {
      var s = trascorso(u) / 1000, i = Math.floor(s / per);
      if (i < n) {
        if (i === ultimo) return; ultimo = i;
        var p = gente[i];
        foto.src = faccia(p.id, p.nome); foto._cnf = { id: p.id, nome: p.nome, o: {} }; tx(nome, maiuscolo(p.id === u.cb.myId ? p.nome + " (tu)" : p.nome));
        cornice.classList.remove("su"); nome.classList.remove("su"); void cornice.offsetWidth; cornice.classList.add("su"); nome.classList.add("su");
        [].forEach.call(piccoli.children, function (m, j) { m.classList.toggle("ok", j <= i); });
        suono("sfilata");
        pronti.classList.remove("su");
      } else {
        var c = Math.max(1, 3 - Math.floor(s - n * per));
        if (ultimo === n + c) return; ultimo = n + c;
        cornice.classList.remove("su"); nome.classList.remove("su");
        tx(pronti, "Pronti a giocare… " + c); pronti.classList.remove("su"); void pronti.offsetWidth; pronti.classList.add("su");
        [].forEach.call(piccoli.children, function (m) { m.classList.add("ok"); });
        suono("tic");
      }
    }
    tic();
    return { el: el, tic: tic, agg: function (v) { av.agg(v); } };
  };

  // ----- 🔒 l'arrivo nel posto: la scena, il protagonista col costume, la Voce -----
  PASSI.arrivo = function (u, vm) {
    var t = u.t, P = posto(vm.posto) || { emoji: "📍", nome: "" }, io = vm.prot === u.cb.myId;
    var av = rigaAvanti(u, vm);
    var scena = t.el("div", { class: "cn-arr-scena" }, [
      img(t, ARTE().scenaSrc ? ARTE().scenaSrc(vm.posto, 480, 640) : "", "bg"),
      imgF(t, vm.prot, nomeVm(vm, vm.prot), { posto: vm.posto, intero: true, faccia: "felice" }, "cn-arr-prot"),
      t.el("div", { class: "cn-arr-titolo" }, [t.el("span", { class: "e", text: P.emoji }), t.el("span", { text: P.nome })]),
      t.el("div", { class: "cn-arr-sotto" }, [t.el("small", { text: "Sotto torchio" }), t.el("b", { text: io ? "TU! 😱" : maiuscolo(nomeVm(vm, vm.prot)) })]),
      vm.dom && vm.dom.q ? t.el("div", { class: "cn-arr-voce", text: "🎙️ " + vm.dom.q }) : null
    ]);
    var el = t.el("div", { class: "cn-arr" }, [scena, t.el("div", { class: "cn-arr-info", text: "Posto " + (vm.iP + 1) + " di " + vm.nP + " · " + vm.nD + " domande su " + (io ? "di te" : nomeVm(vm, vm.prot)) }), av.el]);
    if (trascorso(u) < 1500) { suono("arrivo"); if (io) vibra([30, 40, 30]); }
    return { el: el, agg: function (v) { av.agg(v); } };
  };

  // la figura di una carta-immagine: cose (emoji), personaggi pronti (avatar vestiti), o lui stesso con la faccia (e la faccina che la dice)
  function figCarta(t, vm, c) {
    if (c.e) return t.el("div", { class: "fig em" + (spezzaEmoji(c.e).length > 2 ? " tre" : spezzaEmoji(c.e).length > 1 ? " due" : ""), text: c.e });
    if (c.chi) return t.el("div", { class: "fig" }, [img(t, ARTE().persona ? ARTE().persona(c, c.s) : "")]);
    return t.el("div", { class: "fig" }, [imgF(t, vm.prot, nomeVm(vm, vm.prot), { posto: vm.posto, faccia: c.lui, piu: c.piu }),
      t.el("span", { class: "smorfia", text: (ARTE().FACCE_EMOJI || {})[c.lui] || "" })]);
  }

  // ----- 🖼️ Immagini / 👆 Chi di noi: scegli -----
  PASSI.scegli = function (u, vm) {
    var t = u.t, d = vm.dom || {}, sel = null, inviato = false, el, scelte = [];
    var R = rigaAzione(u, "Lancia ⬆", function (j) { lancia(j); });
    function lancia(j) {
      if (inviato || sel == null || u.guardo) return;
      inviato = true; suono("lancia");
      var c = scelte.filter(function (x) { return x._x === sel; })[0]; if (c) c.classList.add("lanciata");
      u.cb.invia({ t: "scelta", k: vm.k, x: sel, j: !!j });
      agg();
    }
    function scegli(x) {
      if (inviato || u.guardo) return;
      sel = x; vibra(12); suono("pop");
      scelte.forEach(function (c) { c.classList.toggle("sel", c._x === sel); });
      agg();
    }
    // (come nell'originale: trascinare la carta scelta verso l'alto la lancia)
    function tocco(c) {
      var y0 = null;
      c.addEventListener("pointerdown", function (e) { if (inviato || u.guardo) return; y0 = e.clientY; e.preventDefault(); });
      c.addEventListener("pointerup", function (e) {
        if (y0 == null) return; var dy = e.clientY - y0; y0 = null;
        if (sel !== c._x) scegli(c._x);
        if (dy < -45) lancia(R.j);
      });
      c.addEventListener("pointercancel", function () { y0 = null; });
    }
    if (d.tipo === "i") {
      var griglia = t.el("div", { class: "cn-carte" });
      (d.carte || []).forEach(function (c, i) {
        var fig = figCarta(t, vm, c);
        var b = t.el("div", { class: "cn-carta" + (c.lui ? " lui" : ""), role: "button" }, [fig, t.el("div", { class: "cap", text: c.t })]);
        b._x = i; tocco(b); scelte.push(b); griglia.appendChild(b);
      });
      el = t.el("div", { class: "cn-sc" }, [strisciaScena(t, vm), cartaDomanda(t, d.q), griglia, R.el]);
    } else {
      var volti = t.el("div", { class: "cn-volti n" + Math.min(10, vm.players.filter(function (p) { return !p.via; }).length) });
      vm.players.filter(function (p) { return !p.via; }).forEach(function (p) {
        var b = t.el("div", { class: "cn-volto", role: "button" }, [imgF(t, p.id, p.nome), t.el("span", { text: p.id === u.cb.myId ? "Tu" : p.nome })]);
        b._x = p.id; tocco(b); scelte.push(b); volti.appendChild(b);
      });
      el = t.el("div", { class: "cn-sc chi" }, [cartaDomanda(t, d.q, "👆 Tocca la faccia di un amico (anche la tua)"), volti, R.el]);
    }
    function agg() {
      R.agg(sel != null, inviato);
      el.classList.toggle("inviato", inviato);
    }
    function tua() {
      if (TUA.k !== vm.k || TUA.x == null) return;
      sel = TUA.x; inviato = true; scelte.forEach(function (c) { c.classList.toggle("sel", c._x === sel); });
      if (TUA.j) R.bJ.classList.add("on");
      agg();
    }
    tua(); agg();
    return { el: el, agg: function (v) { if (!inviato && (v.risposto || []).indexOf(u.cb.myId) >= 0) { inviato = true; agg(); } }, tua: tua };
  };

  // ----- ✍️ Scrivi -----
  PASSI.scrivi = function (u, vm) {
    var t = u.t, d = vm.dom || {}, inviato = false;
    var campo = t.el("textarea", { class: "cn-campo", maxlength: "40", rows: "2", placeholder: "Scrivi qui la tua battuta…", enterkeyhint: "send" });
    var conta = t.el("span", { class: "cn-conta", text: "0/40" });
    var fatto = t.el("div", { class: "cn-fatto" });
    var bMan = tasto(t, "vai", "Manda ⬆", function () { manda(); });
    var chiave = "cn-tx|" + vm.k;
    try { var bz = sessionStorage.getItem(chiave); if (bz) campo.value = bz; } catch (e) {}
    function manda() {
      var s = pulisci(campo.value, 40); if (!s || inviato || u.guardo) return;
      inviato = true; suono("lancia"); campo.blur();
      TUA = { k: vm.k, tx: s };
      u.cb.invia({ t: "testo", k: vm.k, tx: s });
      mostraFatto(s);
    }
    function mostraFatto(s) { inviato = true; tx(fatto, "✓ Mandata: «" + s + "»"); el.classList.add("inviato"); campo.disabled = true; bMan.disabled = true; }
    campo.addEventListener("input", function () {
      if (campo.value.length > 40) campo.value = campo.value.slice(0, 40);
      tx(conta, campo.value.length + "/40"); bMan.disabled = !campo.value.trim();
      try { sessionStorage.setItem(chiave, campo.value); } catch (e) {}
    });
    campo.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); manda(); } });
    campo.addEventListener("focus", function () { u.root.classList.add("scrive"); setTimeout(function () { try { window.scrollTo(0, 0); } catch (e) {} }, 60); });
    campo.addEventListener("blur", function () { setTimeout(function () { if (document.activeElement !== campo) u.root.classList.remove("scrive"); }, 150); });
    bMan.disabled = !campo.value.trim(); tx(conta, campo.value.length + "/40");
    var el = t.el("div", { class: "cn-scr" }, [strisciaScena(t, vm), cartaDomanda(t, String(d.q || "").replace(/_{3,}/g, "______"), "✍️ Tutti scrivono una battuta (anche " + (vm.prot === u.cb.myId ? "tu" : nomeVm(vm, vm.prot)) + ")"),
      t.el("div", { class: "cn-scr-box" }, [campo, t.el("div", { class: "cn-scr-riga" }, [conta, bMan])]), fatto]);
    if (u.guardo) { campo.disabled = true; bMan.style.visibility = "hidden"; conta.style.visibility = "hidden"; campo.placeholder = "👀 Gli altri stanno scrivendo…"; }
    function tua() { if (TUA.k === vm.k && TUA.tx) { campo.value = TUA.tx; mostraFatto(TUA.tx); } }
    tua();
    return { el: el, tua: tua, agg: function () {},
      tic: function (resta) { if (!inviato && !u.guardo && resta <= 300 && pulisci(campo.value)) manda(); } };   // allo scadere parte quello che hai scritto
  };

  // ----- 📜 la vetrina delle battute: una alla volta, senza nomi -----
  PASSI.vetrina = function (u, vm) {
    var t = u.t, voci = vm.voci || [], per = (vm.dom && vm.dom.per) || 2.5;
    var carta = t.el("div", { class: "cn-vt-carta" }), num = t.el("div", { class: "cn-vt-num" });
    var el = t.el("div", { class: "cn-vt" }, [cartaDomanda(t, String((vm.dom || {}).q || "").replace(/_{3,}/g, "______")), t.el("div", { class: "cn-vt-tit", text: "📜 Le vostre battute…" }), carta, num]);
    var ultimo = -1;
    function tic() {
      var i = Math.min(voci.length - 1, Math.floor(trascorso(u) / 1000 / per));
      if (i === ultimo || i < 0) return; ultimo = i;
      tx(carta, "«" + voci[i].tx + "»"); tx(num, (i + 1) + " di " + voci.length);
      carta.classList.remove("su"); void carta.offsetWidth; carta.classList.add("su"); suono("pop");
    }
    tic();
    return { el: el, tic: tic };
  };

  // ----- 🗳️ il voto: battute (Scrivi) o galleria (Disegna) -----
  PASSI.vota = function (u, vm) {
    if (!vm.voci) return passoGalleria(u, vm, false);
    var t = u.t, d = vm.dom || {}, sel = null, inviato = false, righe = [], io = u.cb.myId;
    var R = rigaAzione(u, "Vota ⬆", function (j) {
      if (inviato || sel == null || u.guardo) return; inviato = true; suono("lancia");
      u.cb.invia({ t: "scelta", k: vm.k, x: sel, j: !!j }); agg();
    });
    var mia = TUA.k && TUA.k.split("|").slice(0, 3).join("|") === vm.k.split("|").slice(0, 3).join("|") ? TUA.tx : null;
    function eMia(v) { return MIE.k === vm.k ? MIE.n.indexOf(v.k) >= 0 : (mia != null && v.tx === mia); }
    var lista = t.el("div", { class: "cn-voti n" + Math.min(12, (vm.voci || []).length) });
    (vm.voci || []).forEach(function (v) {
      var b = t.el("div", { class: "cn-voce", role: "button" }, [t.el("span", { text: "«" + v.tx + "»" }), t.el("i", { text: "la tua" })]);
      b._x = v.k; b._v = v;
      b.addEventListener("pointerup", function () { if (inviato || u.guardo || eMia(v)) return; sel = v.k; vibra(12); suono("pop"); righe.forEach(function (r) { r.classList.toggle("sel", r._x === sel); }); agg(); });
      righe.push(b); lista.appendChild(b);
    });
    function mie() { righe.forEach(function (r) { r.classList.toggle("mia", eMia(r._v)); }); }
    mie();
    var titolo = d.lui ? "Vota la più da " + maiuscolo(nomeVm(vm, vm.prot)) : "Vota la più divertente";
    var nota = vm.prot === io ? "👑 Il tuo voto vale doppio" : "Punti se voti come gli altri";
    // (la domanda resta in alto, piccola: si vota sapendo a cosa rispondevano le battute)
    var qv = cartaDomanda(t, String(d.q || "").replace(/_{3,}/g, "______")); qv.classList.add("corta");
    var el = t.el("div", { class: "cn-vota" }, [qv, t.el("div", { class: "cn-vota-tit" }, [t.el("b", { text: titolo }), t.el("small", { text: nota })]), lista, R.el]);
    function agg() { R.agg(sel != null, inviato); el.classList.toggle("inviato", inviato); }
    function tua() { if (TUA.k === vm.k && TUA.x != null) { sel = TUA.x; inviato = true; righe.forEach(function (r) { r.classList.toggle("sel", r._x === sel); }); agg(); } }
    tua(); agg();
    return { el: el, tua: tua, mie: mie, agg: function (v) { if (!inviato && (v.risposto || []).indexOf(io) >= 0) { inviato = true; agg(); } } };
  };
  PASSI.fvota = function (u, vm) { return passoGalleria(u, vm, true); };

  // la galleria dei disegni (voto del Disegna e del finale)
  function sfondoDi(vm, it, finale) {
    return function (cb) {
      if (finale) return sfondoTavola("ritratto", null, it.target, nomeVm(vm, it.target), cb);
      return sfondoTavola(it.su || (vm.dom || {}).su || "scena", vm.posto, vm.prot, nomeVm(vm, vm.prot), cb);
    };
  }
  function disegnaMini(cv, vm, it, finale) {
    sfondoDi(vm, it, finale)(function (bg) { rendiTutto(cv, bg, it.strati || [it.dis]); });
  }
  function passoGalleria(u, vm, finale) {
    var t = u.t, sel = null, inviato = false, celle = {}, io = u.cb.myId, n = vm.nGal || 0, chiesto = 0;
    var R = rigaAzione(u, "Vota ⬆", function (j) {
      if (inviato || sel == null || u.guardo) return; inviato = true; suono("lancia");
      u.cb.invia({ t: "scelta", k: vm.k, x: sel, j: !!j }); agg();
    });
    var gr = t.el("div", { class: "cn-gal" });
    var titolo = finale ? "Il ritratto più bello?" : "Il disegno più bello?";
    var nota = finale ? "Si vota il più riuscito (non la tua faccia)" : (vm.prot === io ? "👑 Il tuo voto vale doppio" : "Tocca per guardarlo da vicino");
    var qg = !finale && vm.dom && vm.dom.q ? cartaDomanda(t, vm.dom.q) : null; if (qg) qg.classList.add("corta");
    var el = t.el("div", { class: "cn-vota" }, [qg, t.el("div", { class: "cn-vota-tit" }, [t.el("b", { text: titolo }), t.el("small", { text: nota })]), gr, R.el]);
    for (var i = 0; i < n; i++) (function (i) {
      var cv = t.el("canvas", { width: "240", height: "320" }), tag = t.el("i", { class: "tag" }), sotto = t.el("small", { class: "sotto" });
      var c = t.el("div", { class: "cn-cella vuota", role: "button" }, [cv, tag, sotto]);
      c._x = i; c._cv = cv; c._tag = tag; c._sotto = sotto;
      c.addEventListener("pointerup", function () { if (!GAL.items[i]) return; zoom(i); });
      celle[i] = c; gr.appendChild(c);
    })(i);
    function mia(i) { return (GAL.mio || []).indexOf(i) >= 0; }
    function galleria() {
      if (GAL.k !== vm.kGal) return;
      Object.keys(celle).forEach(function (k) {
        var c = celle[k], it = GAL.items[k];
        if (it && !c._fatto) { c._fatto = true; c.classList.remove("vuota"); disegnaMini(c._cv, vm, it, finale); }
        if (finale && it) tx(c._sotto, nomeVm(vm, it.target));
        c.classList.toggle("mia", mia(+k)); tx(c._tag, mia(+k) ? (finale ? "la tua faccia" : "il tuo") : "");
      });
      misura();
    }
    function zoom(i) {
      var it = GAL.items[i]; if (!it) return;
      var cv = t.el("canvas", { width: "600", height: "800", class: "cn-zoom-cv" });
      disegnaMini(cv, vm, it, finale);
      var puo = !inviato && !u.guardo && !mia(i);
      var box = t.el("div", { class: "cn-zoom" }, [cv,
        finale ? t.el("div", { class: "cn-zoom-miss", text: "Trasforma " + nomeVm(vm, it.target) + " in: " + (findBers(vm, i) || "") }) : null,
        t.el("div", { class: "cn-zoom-tasti" }, [
          puo ? tasto(t, "vai", "👍 Voto questo", function () { sel = i; vibra(12); suono("pop"); Object.keys(celle).forEach(function (k) { celle[k].classList.toggle("sel", +k === sel); }); agg(); chiudiVelo(u); }) : null,
          tasto(t, "chiaro", "Chiudi", function () { chiudiVelo(u); })])]);
      svuota(u.velo); u.velo.appendChild(box); u.velo.classList.add("su"); u.classOpen = false;
    }
    function misura() {
      var W = gr.clientWidth, Hh = gr.clientHeight; if (!W || !Hh || !n) return;
      var col = n <= 2 ? 2 : n <= 4 ? 2 : n <= 6 ? 3 : 4, rows = Math.ceil(n / col), gap = 8;
      var w = Math.min((W - gap * (col - 1)) / col, ((Hh - gap * (rows - 1)) / rows) * 0.75);
      gr.style.setProperty("--cw", Math.floor(w) + "px"); gr.style.setProperty("--col", col);
    }
    function agg() { R.agg(sel != null, inviato); el.classList.toggle("inviato", inviato); }
    function tua() { if (TUA.k === vm.k && TUA.x != null) { sel = TUA.x; inviato = true; Object.keys(celle).forEach(function (k) { celle[k].classList.toggle("sel", +k === sel); }); agg(); } }
    var ro = window.ResizeObserver ? new ResizeObserver(misura) : null; if (ro) ro.observe(gr);
    setTimeout(misura, 30);
    tua(); agg(); galleria();
    return { el: el, tua: tua, galleria: galleria,
      agg: function (v) { if (!inviato && (v.risposto || []).indexOf(io) >= 0) { inviato = true; agg(); } },
      tic: function () {   // un disegno che non è arrivato (rete lenta): lo richiedo
        misura();
        if (Object.keys(GAL.items).length >= n && GAL.k === vm.kGal) return;
        if (Date.now() - chiesto > 2500) { chiesto = Date.now(); u.cb.invia({ t: "dammi", k: vm.k }); }
      },
      via: function () { if (ro) ro.disconnect(); } };
  }
  function findBers(vm, n) { var b = vm.fin && vm.fin.bersagli ? vm.fin.bersagli.filter(function (x) { return x.n === n; })[0] : null; return b ? b.miss : ""; }

  // ----- 🎉 lo svelamento: i voti arrivano uno alla volta con le facce di chi ha votato, poi i punti -----
  var STRISCE = { tutti: "🎉 TUTTI D'ACCORDO! +100 a tutti", anarchia: "🌪️ ANARCHIA!" };
  // la parte comune: alla fine dell'animazione striscione, i miei punti, la Voce e le vibrazioni
  function finaleSvela(u, vm, box, E) {
    var t = u.t, io = u.cb.myId, mio = (E.guad || {})[io], bon = (E.bonus || {})[io] || 0, ho = E.scelte && E.scelte[io] != null;
    var str = t.el("div", { class: "cn-strisc" + (E.strisc ? " " + E.strisc : "") }), pt = t.el("div", { class: "cn-mioesito" }), vc = t.el("div", { class: "cn-voce-gioco" });
    box.appendChild(str); box.appendChild(pt); box.appendChild(vc);
    var resto = Math.max(0, (vm.anim || 0) * 1000 - trascorso(u)), tardi = resto <= 0;
    u.dopo(resto, function () {
      var s = E.strisc ? STRISCE[E.strisc] : E.full ? "🃏 FULL DI JOLLY!" : E.casa ? "🏠 Ha vinto la casa!" : "";
      if (E.strisc === "tutti" && !E.tuttiBonus) s = "🎉 TUTTI D'ACCORDO!";
      if (s) { tx(str, s); str.classList.add("su"); if (!tardi) suono(E.strisc === "tutti" ? "tutti" : "boing"); }
      if (!u.guardo && (ho || bon)) {
        var tot = (mio || 0) + bon, jj = (E.jolly || []).indexOf(io) >= 0;
        tx(pt, tot > 0 ? "+" + fmtN(tot) + (jj && mio > 0 ? "  🃏×2" : "") : "0 punti" + (jj ? " · 🃏 sprecato" : ""));
        pt.classList.add("su", tot > 0 ? "si" : "no");
        if (!tardi) { if (tot > 0 && (jj || tot >= 300)) { vibra([40, 60, 40]); suono("evviva"); } else if (tot > 0) suono("voto"); else { vibra(300); suono("zero"); } }
      }
      if (E.voce) { tx(vc, "🎙️ " + E.voce); vc.classList.add("su"); }
    });
  }
  // un mini avatar che "atterra" su una carta (o una battuta, un disegno)
  function atterra(u, dove, id, quando, mio, extra) {
    var m = miniFaccia(u.t, id, nomeVm(u.vm, id), "vola" + (extra || ""));
    m.style.opacity = "0";
    dove.appendChild(m);
    u.dopo(quando, function () { m.style.opacity = ""; m.classList.add("giu"); if (quando > 0) { suono("voto"); if (mio) vibra(8); } });
    return m;
  }
  PASSI.svela = function (u, vm) {
    var E = vm.esito || {}, t = u.t, d = vm.dom || {}, io = u.cb.myId;
    var av = rigaAvanti(u, vm), box, base = Math.max(0, -trascorso(u)), tardi = trascorso(u) > (vm.anim || 0) * 1000;
    function q(ms) { return tardi ? 0 : Math.max(0, ms - trascorso(u)); }
    var cur = 1000, mia = E.scelte ? E.scelte[io] : null;
    if (E.vuoto) {
      box = t.el("div", { class: "cn-svela vuoto" }, [t.el("div", { class: "cn-vuoto", text: "🫣" }), t.el("p", { text: E.voce || "Nessuno ha avuto il coraggio…" })]);
      box.appendChild(av.el);
      return { el: box, agg: function (v) { av.agg(v); } };
    }
    if (d.tipo === "i") {
      var gr = t.el("div", { class: "cn-carte piccole" }), carte = [];
      (d.carte || []).forEach(function (c, i) {
        var fig = figCarta(t, vm, c);
        var voti = t.el("div", { class: "voti" });
        var b = t.el("div", { class: "cn-carta" + (c.lui ? " lui" : "") + (i === mia ? " mia" : "") }, [fig, t.el("div", { class: "cap", text: c.t }), voti]);
        b._voti = voti; carte.push(b); gr.appendChild(b);
      });
      (d.carte || []).forEach(function (c, i) {
        Object.keys(E.scelte || {}).forEach(function (id) {
          if (E.scelte[id] !== i) return;
          atterra(u, carte[i]._voti, id, q(cur), mia === i, id === vm.prot ? " re" : (E.jolly || []).indexOf(id) >= 0 ? " jolly" : ""); cur += 420;
        });
      });
      u.dopo(q(cur), function () {
        (E.vinc || []).forEach(function (x) { if (carte[x]) carte[x].classList.add("vince"); });
        if (E.lui != null && carte[E.lui]) carte[E.lui].classList.add("dilui");
      });
      var ver = E.verdetto ? t.el("div", { class: "cn-verdetto" }, [t.el("small", { text: "Per voi, " + nomeVm(vm, vm.prot) + ":" }), t.el("b", { text: "«" + E.verdetto + "»" })]) : null;
      if (ver) { ver.style.opacity = "0"; u.dopo(q(cur), function () { ver.style.opacity = ""; ver.classList.add("su"); }); }
      box = t.el("div", { class: "cn-svela" }, [cartaDomanda(t, d.q), gr, ver]);
    } else if (d.tipo === "c") {
      var gente = vm.players.filter(function (p) { return !p.via; });
      var volti = t.el("div", { class: "cn-volti svela n" + Math.min(10, gente.length) }), celle = {};
      gente.forEach(function (p) {
        var voti = t.el("div", { class: "voti" });
        var c = t.el("div", { class: "cn-volto" + (p.id === mia ? " mia" : "") }, [imgF(t, p.id, p.nome), t.el("span", { text: p.id === io ? "Tu" : p.nome }), voti]);
        c._voti = voti; celle[p.id] = c; volti.appendChild(c);
      });
      Object.keys(E.scelte || {}).forEach(function (id) { var x = E.scelte[id]; if (!celle[x]) return; atterra(u, celle[x]._voti, id, q(cur), mia === x, (E.jolly || []).indexOf(id) >= 0 ? " jolly" : ""); cur += 420; });
      var tit = t.el("div", { class: "cn-verdetto titolo" });
      tit.style.opacity = "0";
      u.dopo(q(cur), function () {
        (E.vinc || []).forEach(function (x) { if (celle[x]) celle[x].classList.add("vince"); });
        if (E.titolo && E.titolo.length) {
          svuota(tit);
          var nt = E.titolo.length, nomi = E.titolo.map(function (x) { return x.id === io ? (nt > 1 ? "te" : "TE!") : nomeVm(vm, x.id); });
          tit.appendChild(t.el("small", { text: nt === 2 ? "Il titolo va a tutti e due…" : nt > 2 ? "Il titolo va a tutti loro…" : "Il titolo va a…" }));
          tit.appendChild(t.el("b", { text: "🏷️ «" + E.titolo[0].t + "» → " + (nt > 1 ? nomi.slice(0, -1).join(", ") + " e " + nomi[nt - 1] : nomi[0]) }));
          tit.style.opacity = ""; tit.classList.add("su");
          if (!tardi && E.titolo.some(function (x) { return x.id === io; })) vibra([30, 40, 30]);
        } else if (Object.keys(E.scelte || {}).length) {
          svuota(tit); tit.appendChild(t.el("small", { text: "🏷️ Nessun titolo: un voto a testa, troppi pareri diversi!" }));
          tit.style.opacity = ""; tit.classList.add("su");
        }
      });
      box = t.el("div", { class: "cn-svela" }, [cartaDomanda(t, d.q), volti, tit]);
    } else if (vm.voci) {
      // ✍️ dalla meno votata alla più votata, coi nomi di chi le ha scritte
      var lista = t.el("div", { class: "cn-voti svela n" + Math.min(12, vm.voci.length) }), ordine = E.ordine || vm.voci.map(function (v) { return v.k; });
      ordine.forEach(function (k, idx) {
        var a = (E.autori || {})[k], ultimo = idx === ordine.length - 1;
        var chi = a === "casa" ? t.el("span", { class: "aut casa", text: "🏠 della casa" }) : t.el("span", { class: "aut" }, [miniFaccia(t, a, nomeVm(vm, a)), t.el("b", { text: a === io ? "Tu" : nomeVm(vm, a) })]);
        var voti = t.el("div", { class: "voti" });
        var r = t.el("div", { class: "cn-voce rivela" + ((E.vinc || []).indexOf(k) >= 0 ? " vince" : "") + (mia === k ? " sel" : "") }, [t.el("span", { text: "«" + ((E.testi || {})[k] || "") + "»" }), chi, voti]);
        r.style.order = String(ordine.length - idx);   // la più votata in cima
        r.style.opacity = "0";
        lista.appendChild(r);   // (mancava: «Chi ha scritto cosa?» restava vuoto)
        u.dopo(q(cur), function () { r.style.opacity = ""; r.classList.add("su"); if (!tardi) suono(ultimo ? "evviva" : "pop"); });
        cur += 500;
        Object.keys(E.scelte || {}).forEach(function (id) { if (E.scelte[id] === k) { atterra(u, voti, id, q(cur), mia === k, id === vm.prot ? " re" : (E.jolly || []).indexOf(id) >= 0 ? " jolly" : ""); cur += 420; } });
        cur += 200;
      });
      var prem = t.el("div", { class: "cn-verdetto" }); prem.style.opacity = "0";
      u.dopo(q(cur), function () {
        if (E.premiato && E.premiato.length) { tx(prem, "🏆 Battuta del round: +100 a " + E.premiato.map(function (x) { return x === io ? "te" : nomeVm(vm, x); }).join(" e ")); prem.style.opacity = ""; prem.classList.add("su"); }
      });
      box = t.el("div", { class: "cn-svela" }, [t.el("div", { class: "cn-vota-tit" }, [t.el("b", { text: "Chi ha scritto cosa?" })]), lista, prem]);
    } else {
      // 🎨 la galleria con i voti e gli autori
      var g = passoGalleriaSvela(u, vm, E, false, q, cur);
      cur = g.cur; box = g.el;
    }
    finaleSvela(u, vm, box, E);
    box.appendChild(av.el);
    return { el: box, agg: function (v) { av.agg(v); }, galleria: box._galleria, tic: box._misura };
  };
  // la galleria svelata (Disegna e finale): autori sotto, voti sopra, il più votato in oro
  function passoGalleriaSvela(u, vm, E, finale, q, cur) {
    var t = u.t, io = u.cb.myId, n = vm.nGal || 0, celle = {}, mia = E.scelte ? E.scelte[io] : null;
    var gr = t.el("div", { class: "cn-gal svela" });
    for (var i = 0; i < n; i++) (function (i) {
      var cv = t.el("canvas", { width: "240", height: "320" }), voti = t.el("div", { class: "voti" });
      var aut = finale ? (E.autori || {})[i] || [] : [(E.autori || {})[i]];
      var nomi = finale ? nomeVm(vm, (GAL.items[i] || {}).target || findTarget(vm, i)) + (aut.length ? " · di " + aut.map(function (a) { return a === io ? "te" : nomeVm(vm, a); }).join(", ") : "")
        : (aut[0] === io ? "Tu" : nomeVm(vm, aut[0]));
      var c = t.el("div", { class: "cn-cella vuota" + (mia === i ? " sel" : "") }, [cv, voti, t.el("small", { class: "sotto", text: nomi })]);
      c._cv = cv; c._voti = voti; celle[i] = c; gr.appendChild(c);
    })(i);
    Object.keys(E.scelte || {}).forEach(function (id) { var x = E.scelte[id]; if (!celle[x]) return; atterra(u, celle[x]._voti, id, q(cur), mia === x, id === vm.prot && !finale ? " re" : (E.jolly || []).indexOf(id) >= 0 ? " jolly" : ""); cur += 420; });
    var prem = t.el("div", { class: "cn-verdetto" }); prem.style.opacity = "0";
    u.dopo(q(cur), function () {
      (E.vinc || []).forEach(function (x) { if (celle[x]) celle[x].classList.add("vince"); });
      var vinti = [];
      (E.vinc || []).forEach(function (x) { var a = (E.autori || {})[x]; (Array.isArray(a) ? a : [a]).forEach(function (y) { if (y && vinti.indexOf(y) < 0) vinti.push(y); }); });
      if (vinti.length) { tx(prem, (finale ? "🎨 Capolavoro finale: +200 a " : "🎨 Capolavoro del round: +100 a ") + vinti.map(function (x) { return x === io ? "te" : nomeVm(vm, x); }).join(", ")); prem.style.opacity = ""; prem.classList.add("su"); }
    });
    function galleria() {
      if (GAL.k !== vm.kGal) return;
      Object.keys(celle).forEach(function (k) { var c = celle[k], it = GAL.items[k]; if (it && !c._fatto) { c._fatto = true; c.classList.remove("vuota"); disegnaMini(c._cv, vm, it, finale); } });
    }
    function misura() {
      var W = gr.clientWidth, Hh = gr.clientHeight; if (!W || !Hh || !n) return;
      var col = n <= 4 ? 2 : n <= 6 ? 3 : 4, rows = Math.ceil(n / col), gap = 8;
      var w = Math.min((W - gap * (col - 1)) / col, ((Hh - gap * (rows - 1)) / rows) * 0.75);
      gr.style.setProperty("--cw", Math.floor(w) + "px"); gr.style.setProperty("--col", col);
    }
    setTimeout(misura, 30); setTimeout(misura, 300);
    if (window.ResizeObserver) { var ro = new ResizeObserver(misura); ro.observe(gr); }
    galleria();
    var el = t.el("div", { class: "cn-svela" }, [t.el("div", { class: "cn-vota-tit" }, [t.el("b", { text: finale ? "I ritratti trasformati" : "Chi ha disegnato cosa?" })]), gr, prem]);
    el._galleria = galleria; el._misura = misura;
    return { el: el, cur: cur };
  }
  function findTarget(vm, n) { var b = vm.fin && vm.fin.bersagli ? vm.fin.bersagli.filter(function (x) { return x.n === n; })[0] : null; return b ? b.target : null; }
  PASSI.fsvela = function (u, vm) {
    var E = vm.esito || {}, av = rigaAvanti(u, vm), tardi = trascorso(u) > (vm.anim || 0) * 1000;
    function q(ms) { return tardi ? 0 : Math.max(0, ms - trascorso(u)); }
    var g = passoGalleriaSvela(u, vm, E, true, q, 1000);
    finaleSvela(u, vm, g.el, E);
    g.el.appendChild(av.el);
    return { el: g.el, agg: function (v) { av.agg(v); }, galleria: g.el._galleria, tic: g.el._misura };
  };

  // ----- 🏆 la classifica lampo dopo ogni posto -----
  PASSI.classifica = function (u, vm) {
    var t = u.t, C = vm.classif || { ord: [] }, io = u.cb.myId, av = rigaAvanti(u, vm);
    var prima = C.ord.slice().sort(function (a, b) { return b.prima - a.prima; });
    var frecce = C.ord.some(function (r) { return r.prima !== (C.ord[0] || {}).prima; });   // (al primo posto partivano tutti pari: niente frecce)
    function pos(l, id, k) { var me = l.filter(function (x) { return x.id === id; })[0]; return 1 + l.filter(function (x) { return x[k] > me[k]; }).length; }
    var lista = t.el("div", { class: "cn-class" + (C.ord.length > 5 ? " due" : "") });
    C.ord.forEach(function (r, i) {
      var p = giocatore(vm, r.id); if (!p) return;
      var a = pos(C.ord, r.id, "punti"), b = pos(prima, r.id, "prima"), d = r.punti - r.prima;
      var riga = t.el("div", { class: "cn-riga" + (r.id === io ? " tu" : "") + (p.via ? " via" : "") }, [
        t.el("b", { text: a + "°" }), miniFaccia(t, r.id, p.nome), t.el("span", { class: "n", text: r.id === io ? "Tu" : p.nome }),
        t.el("span", { class: "pt" }, [t.el("span", { text: fmtN(r.punti) }), d ? t.el("small", { text: " +" + fmtN(d) }) : null]),
        t.el("i", { class: "fr", text: !frecce ? "" : a < b ? "▲" : a > b ? "▼" : "" })]);
      riga.style.animationDelay = (i * 80) + "ms";
      lista.appendChild(riga);
    });
    var pr = C.prossimo, P = pr ? posto(pr.posto) : null;
    var dopo = pr && P ? t.el("div", { class: "cn-prossima" }, [t.el("small", { text: "Prossima fermata" }), t.el("b", { text: P.emoji + " " + P.nome }),
      t.el("span", { class: "chi" }, [miniFaccia(t, pr.prot, nomeVm(vm, pr.prot)), t.el("span", { text: "Sotto torchio: " + (pr.prot === io ? "TU!" : maiuscolo(nomeVm(vm, pr.prot))) })])])
      : t.el("div", { class: "cn-prossima finale" }, [t.el("small", { text: "E adesso…" }), t.el("b", { text: "🎨 Il gran finale: «Passa il ritratto!»" })]);
    var el = t.el("div", { class: "cn-classif" }, [t.el("div", { class: "cn-vota-tit" }, [t.el("b", { text: "🏆 Classifica" }), t.el("small", { text: "dopo " + ((posto(vm.posto) || {}).emoji || "") + " " + String((posto(vm.posto) || { nome: "questo posto" }).nome).replace(/^\w/, function (c) { return c.toLowerCase(); }) })]), lista, dopo, av.el]);
    return { el: el, agg: function (v) { av.agg(v); } };
  };

  // ----- 🎨 il gran finale: presentazione -----
  PASSI.fintro = function (u, vm) {
    var t = u.t, av = rigaAvanti(u, vm), K = vm.fin ? vm.fin.K : 3;
    var el = t.el("div", { class: "cn-fin-intro" }, [
      t.el("div", { class: "cn-fin-gran", text: "🎨" }),
      t.el("h2", { text: "Gran finale: «Passa il ritratto!»" }),
      t.el("p", { text: "Ognuno riceve la faccia di un amico con una missione. Ci aggiungi qualcosa, poi passa al telefono dopo: " + K + (K === 1 ? " passaggio" : " passaggi") + " da " + T_PASSA + " secondi." }),
      t.el("p", { class: "doppi", text: "Poi si vota il più bello: PUNTI DOPPI!" }),
      av.el]);
    if (trascorso(u) < 1500) suono("arrivo");
    return { el: el, agg: function (v) { av.agg(v); } };
  };

  // =========================================================
  //  LA TAVOLA DA DISEGNO: dito (8 colori, 2 punte, gomma, ↶, 🗑️) e adesivi da trascinare, girare (↻) e ingrandire (⤢),
  //  anche con due dita; un adesivo trascinato sul cestino sparisce. Gli strati di prima (finale) restano fermi sotto.
  // =========================================================
  function creaTavola(u, o) {
    var t = u.t, el = t.el;
    var S = { c: 0, w: 0, tratti: [], ad: [], pila: [], sel: null, bloccata: false, nPunti: 0, k: 1, dpr: 1, sfondo: null };
    var cvB = el("canvas", { class: "b" }), cvT = el("canvas", { class: "tr" }), lay = el("div", { class: "ad" });
    var mRot = el("div", { class: "cn-man rot", text: "↻" }), mSca = el("div", { class: "cn-man sca", text: "⤢" });
    var foglio = el("div", { class: "cn-tav-foglio" }, [cvB, cvT, lay, mRot, mSca]);
    var area = el("div", { class: "cn-tav-area" }, [foglio]);
    var avviso = el("div", { class: "cn-tav-avviso" });
    area.appendChild(avviso);
    // gli strumenti
    var bCol = COLORI.map(function (c, i) { return tasto(t, "cn-col", null, function () { S.c = i; aggStr(); }, true); });
    bCol.forEach(function (b, i) { b.style.setProperty("--c", COLORI[i]); b.setAttribute("aria-label", "Colore"); });
    var bPunta = tasto(t, "cn-str punta", null, function () { S.w = S.w ? 0 : 1; if (S.c === GOMMA) S.c = 0; aggStr(); }, true); bPunta.appendChild(el("i"));
    var bGom = tasto(t, "cn-str", "🧽", function () { S.c = GOMMA; aggStr(); }, true);
    var bAnn = tasto(t, "cn-str", "↶", function () { annulla(); }, true);
    var bCest = tasto(t, "cn-str cest", "🗑️", function () { cestino(); }, true);
    var str = el("div", { class: "cn-tav-str" }, bCol.concat([bPunta, bGom, bAnn, bCest]));
    var vass = el("div", { class: "cn-tav-adesivi" });
    (o.ad || []).slice(0, 18).forEach(function (e) {
      var b = tasto(t, "cn-ades", e, function () { nuovoAdesivo(e); }, true);
      vass.appendChild(b);
    });
    var root = el("div", { class: "cn-tav" }, [area, str, vass]);
    function aggStr() {
      bCol.forEach(function (b, i) { b.classList.toggle("on", i === S.c); });
      bGom.classList.toggle("on", S.c === GOMMA); bPunta.classList.toggle("grossa", !!S.w);
      bPunta.style.setProperty("--c", S.c === GOMMA ? "#fff" : COLORI[S.c]);
    }
    aggStr();
    function dimmi(s) { tx(avviso, s); avviso.classList.remove("su"); void avviso.offsetWidth; avviso.classList.add("su"); }

    // ----- misure: il foglio 3:4 più grande che entra -----
    function misura() {
      var W = area.clientWidth, Hh = area.clientHeight; if (!W || !Hh) return;
      var w = Math.floor(Math.min(W, Hh * 0.75)), h = Math.floor(w / 0.75);
      if (w === S.wPx && h === S.hPx) return;
      S.wPx = w; S.hPx = h; S.k = w / LW; S.dpr = Math.min(2, window.devicePixelRatio || 1);
      foglio.style.width = w + "px"; foglio.style.height = h + "px";
      [cvB, cvT].forEach(function (c) { c.width = Math.round(w * S.dpr); c.height = Math.round(h * S.dpr); c.style.width = w + "px"; c.style.height = h + "px"; });
      rifaiSfondo(); rifaiTratti(); S.ad.forEach(posiziona); maniglie();
    }
    function rifaiSfondo() { if (cvB.width) rendiTutto(cvB, S.sfondo, o.strati || []); }
    function rifaiTratti() {
      var c = cvT.getContext("2d"); c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, cvT.width, cvT.height);
      rendiTratti(c, { s: S.tratti.map(function (x) { return [x.c, x.w, codTratto(x.p)]; }) }, S.k * S.dpr);
    }
    if (o.sfondo) o.sfondo(function (bg) { S.sfondo = bg; rifaiSfondo(); });
    var ro = window.ResizeObserver ? new ResizeObserver(misura) : null; if (ro) ro.observe(area);
    setTimeout(misura, 20); setTimeout(misura, 250);
    var tMis = setInterval(misura, 600);   // (se il telefono gira o la tastiera si chiude: il foglio si rimisura)

    // ----- gli adesivi -----
    function posiziona(a) {
      var n = a.n;
      n.style.left = (a.x * S.k) + "px"; n.style.top = (a.y * S.k) + "px"; n.style.fontSize = (120 * S.k) + "px";
      n.style.transform = "translate(-50%,-50%) rotate(" + a.r + "deg) scale(" + a.s + ")";
    }
    function maniglie() {
      var a = S.sel;
      [mRot, mSca].forEach(function (m) { m.style.display = a && !S.bloccata ? "" : "none"; });
      if (!a) return;
      var R = 62 * a.s * S.k + 14, cx = a.x * S.k, cy = a.y * S.k;
      function metti(m, ang) { var r = (a.r + ang) * Math.PI / 180; m.style.transform = "translate(" + (cx + Math.cos(r) * R - 15).toFixed(1) + "px," + (cy + Math.sin(r) * R - 15).toFixed(1) + "px)"; }
      metti(mRot, -90); metti(mSca, 45);
    }
    function seleziona(a) { S.ad.forEach(function (x) { x.n.classList.toggle("sel", x === a); }); S.sel = a; maniglie(); }
    function nuovoAdesivo(e, dati, zitto) {
      if (S.bloccata && !zitto) return;
      if (S.ad.length >= MAX_ADESIVI) { if (!zitto) dimmi("✋ Massimo " + MAX_ADESIVI + " adesivi"); return; }
      var a = dati || { e: e, x: LW / 2 + (Math.random() - 0.5) * 160, y: LH / 2 + (Math.random() - 0.5) * 160, s: 1, r: 0 };
      a.n = el("div", { class: "cn-ad", text: a.e }); a.n._a = a;
      lay.appendChild(a.n); S.ad.push(a); posiziona(a);
      if (!zitto) { S.pila.push({ t: "a", a: a }); seleziona(a); vibra(8); suono("pop"); cambiato(); }
      return a;
    }
    function togli(a) { if (a.n.parentNode) a.n.parentNode.removeChild(a.n); S.ad = S.ad.filter(function (x) { return x !== a; }); S.pila = S.pila.filter(function (x) { return x.a !== a; }); if (S.sel === a) seleziona(null); }

    // ----- il dito sul foglio -----
    var P = {}, modo = null, cur = null, pinch = null;
    function pos(e) { var r = foglio.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * LW, y: (e.clientY - r.top) / r.height * LH }; }
    function sopraCestino(e) { var r = bCest.getBoundingClientRect(); return e.clientX >= r.left - 6 && e.clientX <= r.right + 6 && e.clientY >= r.top - 6 && e.clientY <= r.bottom + 6; }
    foglio.addEventListener("pointerdown", function (e) {
      if (S.bloccata) return;
      e.preventDefault();
      try { foglio.setPointerCapture(e.pointerId); } catch (_) {}
      var p = pos(e); P[e.pointerId] = p;
      var ids = Object.keys(P);
      if (ids.length === 2 && S.sel) {   // due dita: gira e ingrandisci l'adesivo scelto
        if (modo === "tratto" && cur && cur.p.length < 8) { S.tratti.pop(); S.pila.pop(); rifaiTratti(); }
        var a = P[ids[0]], b = P[ids[1]];
        pinch = { d: Math.hypot(b.x - a.x, b.y - a.y) || 1, ang: Math.atan2(b.y - a.y, b.x - a.x), s: S.sel.s, r: S.sel.r };
        modo = "pinch"; cur = null; return;
      }
      if (ids.length > 1) return;
      var tg = e.target;
      if (tg === mRot && S.sel) { modo = "rot"; return; }
      if (tg === mSca && S.sel) { modo = "sca"; cur = { d0: Math.hypot(p.x - S.sel.x, p.y - S.sel.y) || 1, s0: S.sel.s }; return; }
      var n = tg && tg.closest ? tg.closest(".cn-ad") : null;
      if (n && n._a) { seleziona(n._a); modo = "sposta"; cur = { dx: p.x - n._a.x, dy: p.y - n._a.y }; lay.appendChild(n); S.ad = S.ad.filter(function (x) { return x !== n._a; }).concat([n._a]); return; }
      seleziona(null);
      if (S.nPunti >= MAX_PUNTI) { dimmi("✋ Il foglio è pieno: usa gli adesivi!"); modo = null; return; }
      modo = "tratto";
      cur = { c: S.c, w: S.w, p: [Math.round(p.x), Math.round(p.y)] };
      S.tratti.push(cur); S.pila.push({ t: "s" }); S.nPunti++;
      disegnaPezzo(cur, 0);
    });
    foglio.addEventListener("pointermove", function (e) {
      if (!P[e.pointerId] || S.bloccata) return;
      var lista = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      if (!lista.length) lista = [e];
      var p = pos(lista[lista.length - 1]); P[e.pointerId] = p;
      if (modo === "tratto" && cur) {
        lista.forEach(function (ev) {
          var q = pos(ev), n = cur.p.length, lx = cur.p[n - 2], ly = cur.p[n - 1];
          if (Math.hypot(q.x - lx, q.y - ly) < 5 || S.nPunti >= MAX_PUNTI) return;
          cur.p.push(Math.round(q.x), Math.round(q.y)); S.nPunti++;
          disegnaPezzo(cur, cur.p.length - 4);
        });
      } else if (modo === "sposta" && S.sel) {
        S.sel.x = lim(p.x - cur.dx, -40, LW + 40); S.sel.y = lim(p.y - cur.dy, -40, LH + 40); posiziona(S.sel); maniglie();
        bCest.classList.toggle("pronto", sopraCestino(e));
      } else if (modo === "rot" && S.sel) {
        S.sel.r = Math.round(Math.atan2(p.y - S.sel.y, p.x - S.sel.x) * 180 / Math.PI + 90); posiziona(S.sel); maniglie();
      } else if (modo === "sca" && S.sel) {
        S.sel.s = lim(cur.s0 * Math.hypot(p.x - S.sel.x, p.y - S.sel.y) / cur.d0, 0.3, 5); posiziona(S.sel); maniglie();
      } else if (modo === "pinch" && S.sel && pinch) {
        var ids = Object.keys(P); if (ids.length < 2) return;
        var a = P[ids[0]], b = P[ids[1]];
        S.sel.s = lim(pinch.s * (Math.hypot(b.x - a.x, b.y - a.y) || 1) / pinch.d, 0.3, 5);
        S.sel.r = Math.round(pinch.r + (Math.atan2(b.y - a.y, b.x - a.x) - pinch.ang) * 180 / Math.PI);
        posiziona(S.sel); maniglie();
      }
    });
    function fineDito(e) {
      if (!P[e.pointerId]) return;
      delete P[e.pointerId];
      if (modo === "sposta" && S.sel && sopraCestino(e)) { togli(S.sel); vibra(15); suono("zero"); }
      bCest.classList.remove("pronto");
      if (Object.keys(P).length === 0) { if (modo) cambiato(); modo = null; cur = null; pinch = null; }
    }
    foglio.addEventListener("pointerup", fineDito); foglio.addEventListener("pointercancel", fineDito);
    function disegnaPezzo(tr, da) {
      var c = cvT.getContext("2d"), k = S.k * S.dpr, p = tr.p;
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.globalCompositeOperation = tr.c === GOMMA ? "destination-out" : "source-over";
      c.strokeStyle = tr.c === GOMMA ? "#000" : COLORI[tr.c]; c.lineWidth = PUNTE[tr.w] * (tr.c === GOMMA ? 2.2 : 1) * k; c.lineCap = "round"; c.lineJoin = "round";
      c.beginPath();
      da = Math.max(0, da);
      c.moveTo(p[da] * k, p[da + 1] * k);
      if (p.length === 2) c.lineTo(p[0] * k + 0.1, p[1] * k);
      for (var i = da + 2; i < p.length; i += 2) c.lineTo(p[i] * k, p[i + 1] * k);
      c.stroke(); c.globalCompositeOperation = "source-over";
    }
    function annulla() {
      if (S.bloccata) return;
      var x = S.pila.pop(); if (!x) return;
      if (x.t === "s") { var tr = S.tratti.pop(); if (tr) S.nPunti -= tr.p.length / 2; rifaiTratti(); }
      else if (x.a) togli(x.a);
      cambiato();
    }
    var sicuro = 0;
    function cestino() {
      if (S.bloccata) return;
      if (S.sel && Date.now() - sicuro > 2500) { togli(S.sel); cambiato(); return; }   // con un adesivo scelto: via quello
      if (Date.now() - sicuro > 2500) { sicuro = Date.now(); bCest.classList.add("sicuro"); dimmi("Tocca ancora 🗑️ per cancellare tutto"); setTimeout(function () { bCest.classList.remove("sicuro"); }, 2500); return; }
      sicuro = 0; bCest.classList.remove("sicuro");
      S.tratti = []; S.pila = []; S.nPunti = 0; S.ad.slice().forEach(togli); rifaiTratti(); cambiato();
    }
    function dis() {
      return { s: S.tratti.map(function (x) { return [x.c, x.w, codTratto(x.p)]; }),
        a: S.ad.map(function (a) { return [a.e, Math.round(a.x), Math.round(a.y), Math.round(a.s * 100), ((Math.round(a.r) % 360) + 360) % 360]; }) };
    }
    function carica(d) {
      d = disValido(d); if (!d) return;
      S.tratti = d.s.map(function (x) { return { c: x[0], w: x[1], p: decTratto(x[2]) }; });
      S.pila = S.tratti.map(function () { return { t: "s" }; });
      S.nPunti = S.tratti.reduce(function (n, x) { return n + x.p.length / 2; }, 0);
      S.ad.slice().forEach(togli);
      d.a.forEach(function (x) { var a = nuovoAdesivo(x[0], { e: x[0], x: x[1], y: x[2], s: x[3] / 100, r: x[4] }, true); if (a) S.pila.push({ t: "a", a: a }); });
      rifaiTratti();
    }
    var sporco = false;
    function cambiato() { sporco = true; if (o.chiave) try { sessionStorage.setItem(o.chiave, JSON.stringify(dis())); } catch (e) {} }
    if (o.chiave) try { var bz = JSON.parse(sessionStorage.getItem(o.chiave) || "null"); if (bz) carica(bz); } catch (e) {}
    return {
      el: root, dis: dis, carica: carica, misura: misura, vuoto: function () { return !S.tratti.length && !S.ad.length; },
      sporco: function () { var s = sporco; sporco = false; return s; },
      blocca: function () { S.bloccata = true; seleziona(null); root.classList.add("bloccata"); },
      via: function () { if (ro) ro.disconnect(); clearInterval(tMis); }
    };
  }

  // ----- 🎨 Disegna -----
  PASSI.disegna = function (u, vm) {
    var t = u.t, d = vm.dom || {}, inviato = false, ultBozza = Date.now();
    u.root.classList.add("disegno");
    var nota = d.su === "ritratto" ? "Disegna sopra " + (vm.prot === u.cb.myId ? "di te" : nomeVm(vm, vm.prot)) : d.su === "scena" ? "Disegna sulla scena del posto" : "Foglio bianco";
    var q = cartaDomanda(t, d.q, "🎨 " + nota + " · col dito e con gli adesivi");
    q.classList.add("corta");
    if (u.guardo) {
      var el0 = t.el("div", { class: "cn-dis" }, [q, t.el("div", { class: "cn-centro" }, [img(t, ARTE().scenaSrc ? ARTE().scenaSrc(vm.posto, 480, 640) : "", "cn-guarda-scena"), t.el("p", { text: "👀 Gli altri stanno disegnando…" })])]);
      return { el: el0, via: function () { u.root.classList.remove("disegno"); } };
    }
    var T = creaTavola(u, { ad: d.ad || [], chiave: "cn-dis|" + vm.k, sfondo: function (cb) { sfondoTavola(d.su, vm.posto, vm.prot, nomeVm(vm, vm.prot), cb); } });
    var bFatto = tasto(t, "vai", "✓ Fatto", function () { manda(true); });
    var stato = t.el("span", { class: "cn-dis-stato" });
    var el = t.el("div", { class: "cn-dis" }, [q, T.el, t.el("div", { class: "cn-azione" }, [stato, bFatto])]);
    function manda(fine) {
      if (inviato) return;
      var dd = T.dis();
      if (fine) { inviato = true; T.blocca(); bFatto.disabled = true; tx(bFatto, "✓ Mandato"); tx(stato, "Aspettiamo gli altri…"); suono("lancia"); el.classList.add("inviato"); TUA = { k: vm.k, dis: dd, fine: true }; }
      u.cb.invia({ t: "dis", k: vm.k, dis: dd, fine: !!fine });
    }
    function tua() { if (TUA.k === vm.k && TUA.dis) { if (T.vuoto()) T.carica(TUA.dis); if (TUA.fine) { inviato = true; T.blocca(); bFatto.disabled = true; tx(bFatto, "✓ Mandato"); el.classList.add("inviato"); } } }
    tua();
    return { el: el, tua: tua,
      tic: function (resta) {
        if (inviato) return;
        if (resta <= 300 && u.scade) return manda(true);   // allo scadere parte il disegno com'è
        if (Date.now() - ultBozza > 6000 && T.sporco()) { ultBozza = Date.now(); manda(false); }   // ogni tanto la bozza all'host (se il telefono si spegne, il disegno c'è)
      },
      via: function () { T.via(); u.root.classList.remove("disegno"); } };
  };

  // ----- 🖼️ «Passa il ritratto!»: un passaggio -----
  PASSI.passa = function (u, vm) {
    var t = u.t, inviato = false, T = null, ultBozza = Date.now(), K = vm.fin ? vm.fin.K : 3, k = vm.fin ? vm.fin.k : 1;
    u.root.classList.add("disegno");
    var testa = t.el("div", { class: "cn-domanda corta" }), corpo = t.el("div", { class: "cn-dis-corpo" });
    var bFatto = tasto(t, "vai", "✓ Fatto", function () { manda(true); }), stato = t.el("span", { class: "cn-dis-stato", text: "Passaggio " + k + " di " + K });
    var az = t.el("div", { class: "cn-azione" }, [stato, bFatto]);
    var el = t.el("div", { class: "cn-dis" }, [testa, corpo, az]);
    function aspetta(s) { svuota(corpo); corpo.appendChild(t.el("div", { class: "cn-centro" }, [t.el("p", { text: s })])); az.style.visibility = "hidden"; }
    function foglio() {
      if (T || FOGLIO.k !== vm.k) return;
      svuota(testa);
      testa.appendChild(t.el("div", { class: "q", style: "font-size:16px", text: "Trasforma " + (FOGLIO.target === u.cb.myId ? "TE" : maiuscolo(nomeVm(vm, FOGLIO.target))) + " in: " + FOGLIO.miss }));
      testa.appendChild(t.el("div", { class: "x", text: k === 1 ? "🎨 Comincia tu! Poi passa al prossimo" : "🎨 Aggiungi qualcosa a quello che c'è" }));
      svuota(corpo); az.style.visibility = "";
      T = creaTavola(u, { ad: spezzaEmoji(ARTE().FESTA || "👑🎩🕶️"), chiave: "cn-dis|" + vm.k, strati: FOGLIO.strati,
        sfondo: function (cb) { sfondoTavola("ritratto", null, FOGLIO.target, nomeVm(vm, FOGLIO.target), cb); } });
      corpo.appendChild(T.el);
      tua();
    }
    function manda(fine) {
      if (inviato || !T) return;
      var dd = T.dis();
      if (fine) { inviato = true; T.blocca(); bFatto.disabled = true; tx(bFatto, "✓ Passato"); tx(stato, "Aspettiamo gli altri…"); suono("lancia"); el.classList.add("inviato"); TUA = { k: vm.k, dis: dd, fine: true }; }
      u.cb.invia({ t: "dis", k: vm.k, dis: dd, fine: !!fine });
    }
    function tua() { if (T && TUA.k === vm.k && TUA.dis) { if (T.vuoto()) T.carica(TUA.dis); if (TUA.fine) { inviato = true; T.blocca(); bFatto.disabled = true; tx(bFatto, "✓ Passato"); el.classList.add("inviato"); } } }
    if (u.guardo) aspetta("👀 I ritratti passano di telefono in telefono…");
    else { aspetta("📨 Arriva il foglio…"); foglio(); }
    var chiesto = Date.now();
    return { el: el, foglio: foglio, tua: tua,
      tic: function (resta) {
        if (u.guardo) return;
        if (!T) { if (Date.now() - chiesto > 3000) { chiesto = Date.now(); u.cb.invia({ t: "dammi", k: vm.k }); } return; }
        if (inviato) return;
        if (resta <= 300 && u.scade) return manda(true);
        if (Date.now() - ultBozza > 6000 && T.sporco()) { ultBozza = Date.now(); manda(false); }
      },
      via: function () { if (T) T.via(); u.root.classList.remove("disegno"); } };
  };

  // ----- 🏅 i titoli della serata -----
  PASSI.premi = function (u, vm) {
    var t = u.t, Pm = vm.premi || { onori: [], titoli: [] }, av = rigaAvanti(u, vm), io = u.cb.myId, tardi = trascorso(u) > (vm.anim || 0) * 1000;
    var lista = t.el("div", { class: "cn-premi" }), cur = 900;
    function carta(e, nome, ids, perche, grande) {
      var c = t.el("div", { class: "cn-premio" + (grande ? " grande" : "") + (ids.indexOf(io) >= 0 ? " mio" : "") }, [
        t.el("span", { class: "e", text: e }),
        t.el("span", { class: "volti" }, ids.slice(0, 3).map(function (id) { return miniFaccia(t, id, nomeVm(vm, id)); })),
        t.el("span", { class: "tx" }, [t.el("b", { text: nome }), t.el("small", { text: ids.map(function (id) { return id === io ? "Tu" : nomeVm(vm, id); }).join(", ") + (perche ? " · " + perche : "") })])]);
      c.style.opacity = "0";
      var quando = tardi ? 0 : Math.max(0, cur - trascorso(u)); cur += 1300;
      u.dopo(quando, function () { c.style.opacity = ""; c.classList.add("su"); if (!tardi) { suono("evviva"); if (ids.indexOf(io) >= 0) vibra([30, 40, 30]); } });
      lista.appendChild(c);
    }
    Pm.onori.forEach(function (o) { carta(o.e, o.nome, o.ids, o.perche, true); });
    Pm.titoli.slice(0, 8).forEach(function (x) { carta(x.e, "«" + x.t + "»", x.ids || [x.id], null, false); });
    if (!Pm.onori.length && !Pm.titoli.length) lista.appendChild(t.el("p", { text: "Nessun titolo stasera… si rimedia alla rivincita!" }));
    var el = t.el("div", { class: "cn-premi-box" }, [t.el("div", { class: "cn-vota-tit" }, [t.el("b", { text: "🏅 I titoli della serata" })]), lista, av.el]);
    return { el: el, agg: function (v) { av.agg(v); } };
  };

  // =========================================================
  //  LA FINE: podio, classifica, la mia figurina da salvare, faccine e tasti del core
  // =========================================================
  function medaglie(posti) {
    var gruppi = 0, prec = null;
    return posti.map(function (p) { if (p !== prec) { gruppi++; prec = p; } return ["🥇", "🥈", "🥉"][gruppi - 1] || p + "°"; });
  }
  function schermataFine(t, vm, cb) {
    stile();
    var F = vm.fine || {}, cl = F.classifica || [], io = cb.myId, el = t.el;
    // le domande uscite: anche gli amici se le segnano (telefono e profilo), così la prossima volta sono nuove
    if (!cb.sonoHost && F.ids && SEGNATI !== vm.pid) { SEGNATI = vm.pid; segnaVisti(F.ids.filter(function (x) { return /^([a-z]{3}-[a-z]\d+|fin-\d+)$/.test(x); })); }
    var s = t.schermata({ chiara: true });
    s.classList.add("cn-fine-s");
    var med = medaglie(cl.map(function (r) { return r.pos; }));
    var podio = el("div", { class: "cn-podio" });
    [1, 0, 2].forEach(function (i) {
      var r = cl[i]; if (!r) return;
      podio.appendChild(el("div", { class: "cn-gradino g" + (i + 1) + (r.id === io ? " tu" : "") }, [
        imgF(t, r.id, r.nome, {}, "f"), el("b", { class: "n", text: r.id === io ? "Tu" : r.nome }), el("span", { class: "pt", text: fmtN(r.punti) }),
        el("div", { class: "base", text: med[i] })]));
    });
    s._contenuto.appendChild(podio);
    if (cl.length > 3) {
      var ol = el("ol", { class: "classifica fitta cn-resto" });
      cl.slice(3).forEach(function (r, j) {
        ol.appendChild(el("li", {}, [el("span", { class: "pos", text: med[j + 3] }), el("span", { class: "nome", text: r.id === io ? r.nome + " (tu)" : r.nome }), el("span", { class: "punti", text: fmtN(r.punti) })]));
      });
      s._contenuto.appendChild(ol);
    }
    if (cl.some(function (r) { return r.id === io; }) && F.figurine && F.figurine[io]) {
      s._contenuto.appendChild(t.el("button", { class: "btn cn-fig-btn", text: "🖼️ La mia figurina", onclick: function () { figurina(t, vm, io); } }));
    } else s._contenuto.appendChild(el("p", { class: "modulo-nota", style: "text-align:center;margin:8px 0", text: "Questa partita l'hai guardata." }));
    var fac = t.faccine();
    if (fac) { fac.classList.add("fine-faccine"); s._contenuto.appendChild(fac); }
    if (!t.tastiFine(s._piede, { host: cb.sonoHost, nuova: cb.sonoHost ? cb.onNuova : null, esci: cb.onEsci })) {
      if (cb.sonoHost) s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "↻ Nuova partita (stessi amici)", onclick: cb.onNuova }));
      else s._contenuto.appendChild(t.el("p", { class: "modulo-nota", style: "text-align:center;margin-top:10px", text: "Se l'host fa un'altra partita, torni da solo nella saletta." }));
      s._piede.appendChild(t.el("button", { class: "btn btn-fantasma", text: "🏠 Esci", onclick: cb.onEsci }));
    }
    t.mostra(mio(s));
    return s;
  }
  var SEGNATI = null;
  // la figurina: il mio ritratto (com'è uscito dal finale), i titoli, il verdetto degli amici; si salva o si manda (WhatsApp)
  function figurina(t, vm, io) {
    var F = vm.fine || {}, fg = (F.figurine || {})[io] || {}, me = (F.classifica || []).filter(function (r) { return r.id === io; })[0] || { nome: "", punti: 0, pos: 0 };
    var cv = document.createElement("canvas"); cv.width = 720; cv.height = 1080;
    var c = cv.getContext("2d");
    var g = c.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, "#2a1458"); g.addColorStop(1, "#0d1b4a"); c.fillStyle = g; c.fillRect(0, 0, 720, 1080);
    c.strokeStyle = "#ffcf3f"; c.lineWidth = 14; c.strokeRect(22, 22, 676, 1036);
    c.fillStyle = "#ffcf3f"; c.font = "900 64px system-ui, sans-serif"; c.textAlign = "center"; c.fillText("CHI DI NOI?", 360, 112);
    function testo(s, y, font, col, max) { c.fillStyle = col; c.font = font; var parole = String(s).split(" "), riga = "", righe = []; parole.forEach(function (w) { var p = riga ? riga + " " + w : w; if (c.measureText(p).width > (max || 620) && riga) { righe.push(riga); riga = w; } else riga = p; }); if (riga) righe.push(riga); righe.slice(0, 3).forEach(function (r, i) { c.fillText(r, 360, y + i * (parseInt(font.replace(/\D+/, " ").trim().split(" ")[1] || "30", 10) + 8)); }); return y + righe.slice(0, 3).length * 40; }
    function chiudi2() {
      c.fillStyle = "#fff"; c.font = "900 54px system-ui, sans-serif"; c.fillText(maiuscolo(me.nome), 360, 700);
      c.fillStyle = "#cdd6ff"; c.font = "700 30px system-ui, sans-serif"; c.fillText(me.pos + "° posto · " + fmtN(me.punti) + " punti", 360, 745);
      var y = 805;
      (fg.titoli || []).slice(0, 3).forEach(function (ti) { c.fillStyle = "#ffcf3f"; c.font = "800 32px system-ui, sans-serif"; c.fillText(ti, 360, y); y += 46; });
      if (fg.verdetto) y = testo("Per gli amici: «" + fg.verdetto + "»", y + 6, "italic 700 28px system-ui, sans-serif", "#ffffff");
      else if (fg.battuta) y = testo("«" + fg.battuta + "»", y + 6, "italic 700 28px system-ui, sans-serif", "#ffffff");
      c.fillStyle = "#8fa0d8"; c.font = "700 24px system-ui, sans-serif"; c.fillText("Chi di Noi? · Revel House", 360, 1030);
      mostraFig();
    }
    // il ritratto: quello trasformato dal finale (se c'è), se no il mio avatar
    var it = fg.foglio != null && GAL.k === F.kGal ? GAL.items[fg.foglio] : null;
    sfondoTavola("ritratto", null, io, me.nome, function (bg) {
      var r = document.createElement("canvas"); r.width = 450; r.height = 600;
      rendiTutto(r, bg, it ? it.strati : []);
      c.save(); c.beginPath(); if (c.roundRect) c.roundRect(135, 150, 450, 500, 30); else c.rect(135, 150, 450, 500); c.clip();
      c.drawImage(r, 0, 25, 450, 550, 135, 150, 450, 500); c.restore();
      c.strokeStyle = "#ffffff"; c.lineWidth = 6; c.beginPath(); if (c.roundRect) c.roundRect(135, 150, 450, 500, 30); else c.rect(135, 150, 450, 500); c.stroke();
      chiudi2();
    });
    function mostraFig() {
      var velo = t.el("div", { class: "cn-fig-velo oro" });   // (come la fine da cui si apre: stile dell'app)
      var im = t.el("img", { class: "cn-fig-img", alt: "La mia figurina", src: cv.toDataURL("image/png") });
      var bSalva = t.el("button", { class: "btn btn-primario", text: "📤 Salva o manda", onclick: function () { salva(); } });
      var bChiudi = t.el("button", { class: "btn btn-fantasma", text: "Chiudi", onclick: function () { if (velo.parentNode) velo.parentNode.removeChild(velo); } });
      velo.appendChild(t.el("div", { class: "cn-fig-box" }, [im, t.el("div", { class: "cn-fig-tasti" }, [bSalva, bChiudi])]));
      document.body.appendChild(velo);
    }
    function salva() {
      cv.toBlob(function (b) {
        if (!b) return;
        var nomeF = "chi-di-noi-" + String(me.nome || "io").toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".png";
        try {
          var f = new File([b], nomeF, { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [f] })) { navigator.share({ files: [f], title: "Chi di Noi?", text: "La mia figurina di Chi di Noi? 🫵" }).catch(function () {}); return; }
        } catch (e) {}
        var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = nomeF; document.body.appendChild(a); a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); if (a.parentNode) a.parentNode.removeChild(a); }, 1500);
      }, "image/png");
    }
  }

  function errore(t, testo) {
    var s = t.schermata({ chiara: true, icona: "⚠️", titolo: "Ops" });
    s._contenuto.appendChild(t.el("p", { style: "font-size:1.05rem;line-height:1.5", text: testo }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "🏠 Torna alla home", onclick: t.esci }));
    t.mostra(s);
  }
  function erroreRete(t, testo, riprova) {
    var s = t.schermata({ chiara: true, icona: "📶", titolo: "Niente rete?", indietro: t.esci });
    s._contenuto.appendChild(t.el("p", { style: "font-size:1.05rem;line-height:1.5", text: testo + " Controlla la connessione e riprova." }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "↻ Riprova", onclick: riprova }));
    s._piede.appendChild(t.el("button", { class: "btn btn-fantasma", text: "🏠 Torna alla home", onclick: t.esci }));
    t.mostra(s);
  }
  function senzaRete(t) {
    var s = t.schermata({ chiara: true, icona: "🔗", titolo: "Serve il sito pubblicato", indietro: t.esci });
    s._contenuto.appendChild(t.el("p", { style: "font-size:1.05rem;line-height:1.5", text: "Questo gioco si gioca online: funziona quando l'app è aperta dal sito pubblicato." }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Ok", onclick: t.esci }));
    t.mostra(s);
  }

  // =========================================================
  //  LO STILE (prefisso cn-): animazioni solo transform/opacity
  // =========================================================
  var cssFatto = false;
  function stile() {
    if (cssFatto) return; cssFatto = true;
    var st = document.createElement("style");
    st.textContent = [
      ".schermata.cn-piena{padding:0!important;min-height:0;height:var(--alt,100dvh);overflow:hidden;background:var(--o-fondo)}",
      ".schermata.cn-piena>.testa,.schermata.cn-piena>.piede{display:none}",
      ".schermata.cn-piena>.contenuto{height:100%;margin:0;padding:0}",
      ".cn{position:relative;height:var(--alt,100dvh);box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;background:radial-gradient(120% 70% at 50% -10%,#232a52 0%,#141936 45%,var(--o-fondo) 100%);color:var(--o-testo);user-select:none;-webkit-user-select:none;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}",
      ".cn button{font-family:inherit}",
      ".cn-barra{flex:none;height:44px;display:flex;align-items:center;gap:6px;padding:4px 8px}",
      ".cn-esci,.cn-coppa{flex:none;width:34px;height:34px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;font-size:1.15rem;font-weight:900;cursor:pointer;padding:0}",
      ".cn-dove{flex:1;min-width:0;font-weight:900;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".cn-timer{flex:none;position:relative;width:32px;height:32px}.cn-timer svg{width:100%;height:100%;transform:rotate(-90deg)}",
      ".cn-timer circle{fill:none;stroke-width:4}.cn-timer .f{stroke:rgba(255,255,255,.15)}.cn-timer .p{stroke:#ffcf3f;stroke-dasharray:97.4;stroke-linecap:round}",
      ".cn-timer b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900}",
      ".cn-timer.rosso .p{stroke:#ff5d6c}.cn-timer.rosso b{color:#ff8a94}.cn-timer.spento{opacity:0}",
      ".cn-jtappi{flex:none;display:flex}.cn-jtappi i{font-style:normal;font-size:14px;opacity:.22;filter:grayscale(1);margin-left:-3px}.cn-jtappi i.su{opacity:1;filter:none}",
      ".cn-palco{flex:1;min-height:0;position:relative;display:flex;flex-direction:column;padding:0 10px 6px}",
      ".cn-palco>*{flex:1;min-height:0}",
      ".cn-entra{animation:cnEntra .35s ease both}",
      ".cn-fondo{flex:none;height:44px;display:flex;align-items:center;gap:6px;padding:0 8px 2px}",
      ".cn.disegno .cn-fondo,.cn.scrive .cn-fondo,.cn.scrive .cn-striscia{display:none}",
      ".cn-chi{flex:1;min-width:0;display:flex;align-items:center;padding-left:5px;overflow:hidden}",
      ".cn-mini{position:relative;display:inline-block;width:26px;height:26px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.18);border:2px solid rgba(255,255,255,.35);flex:none;box-sizing:border-box}",
      ".cn-mini img{position:absolute;width:150%;height:150%;left:-25%;top:-14%;object-fit:cover}",
      ".cn-chi .cn-mini{margin-left:-5px;filter:grayscale(1);opacity:.4;transition:opacity .2s}.cn-chi .cn-mini.ok{filter:none;opacity:1}.cn-chi .cn-mini.forse{border-style:dashed;opacity:.25}.cn-chi .cn-mini.tu{border-color:#ffcf3f}",
      ".cn-reaz{flex:none;display:flex;gap:3px}",
      ".cn-rz{width:32px;height:34px;border:0;border-radius:10px;background:rgba(255,255,255,.1);font-size:18px;padding:0;cursor:pointer}.cn-rz.boing{animation:cnBoing .4s}",
      ".cn-volo{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:30}",
      ".cn-vola{position:absolute;bottom:46px;display:flex;flex-direction:column;align-items:center;animation:cnVola 2.4s ease-out forwards}.cn-vola .e{font-size:34px;line-height:1}",
      ".cn-vola .f{width:26px;height:26px;border-radius:50%;object-fit:cover;object-position:50% 40%;border:2px solid #fff;margin-top:-6px;background:rgba(255,255,255,.3)}",
      ".cn-vola.pomodoro{animation:cnPomo 2.2s ease-out forwards}",
      ".cn-velo{position:absolute;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:rgba(8,4,24,.86);padding:14px}.cn-velo.su{display:flex}",
      ".cn-class-box{width:100%;max-width:440px;background:#2a1a5e;border-radius:18px;padding:12px;display:flex;flex-direction:column;gap:8px;box-shadow:0 10px 30px #0008}",
      ".cn-class-tit{font-weight:900;font-size:18px;text-align:center}",
      ".cn-class{display:grid;grid-template-columns:1fr;gap:5px;align-content:center}.cn-class.due{grid-template-columns:1fr 1fr}",
      ".cn-riga{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.08);border-radius:12px;padding:4px 8px;min-height:38px;font-weight:800;font-size:14px;animation:cnEntra .4s both;min-width:0}",
      ".cn-class.due .cn-riga{font-size:12.5px;padding:3px 6px;gap:4px}",
      ".cn-riga.tu{background:rgba(255,207,63,.2);box-shadow:inset 0 0 0 2px #ffcf3f}.cn-riga.via{opacity:.45}",
      ".cn-riga>b{flex:none;min-width:1.6em}.cn-riga .n{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cn-riga .pt{flex:none;font-variant-numeric:tabular-nums}",
      ".cn-riga .pt small{color:#7ff0a8;font-size:11px}.cn-riga .fr{font-style:normal;font-size:11px;width:10px;color:#7ff0a8}",
      ".cn-btn{border:0;border-radius:14px;font-weight:900;font-size:15px;min-height:46px;padding:0 14px;color:#fff;background:rgba(255,255,255,.14);cursor:pointer;touch-action:manipulation;transition:transform .12s,opacity .2s}",
      ".cn-btn:active{transform:scale(.96)}.cn-btn:disabled{opacity:.4}",
      ".cn-btn.vai{background:linear-gradient(#ffd75a,#f5a623);color:#2a1458;box-shadow:0 4px 0 #b3740f}",
      ".cn-btn.jolly{background:rgba(255,255,255,.08);border:2px dashed rgba(255,207,63,.6);color:#ffcf3f;flex:none}",
      ".cn-btn.jolly.on{background:#ffcf3f;color:#2a1458;border-style:solid;transform:rotate(-3deg)}",
      ".cn-btn.avanti.on{background:rgba(55,212,126,.3)}.cn-btn.chiaro{background:#fff;color:#2a1458}",
      ".cn-azione{flex:none;display:flex;gap:8px;align-items:center;padding-top:6px}.cn-azione .vai{flex:1}",
      ".cn-azione.inviato .vai{background:#37d47e;color:#fff;box-shadow:0 4px 0 #1f8a50;opacity:1}",
      ".cn-riga-avanti{flex:none;display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:6px;min-height:52px}",
      ".cn-conto{font-weight:700;opacity:.8;font-size:13px}",
      ".cn-domanda{flex:none;position:relative;z-index:2;background:#fff;color:#21124d;border-radius:16px;padding:9px 12px;box-shadow:0 5px 0 rgba(0,0,0,.25);transform:rotate(-.6deg);margin:4px 2px 8px}",
      ".cn-domanda .q{font-weight:900;line-height:1.22}.cn-domanda .x{font-size:12px;font-weight:700;color:#6b5aa6;margin-top:3px}",
      ".cn-domanda.corta{padding:6px 10px;margin:2px 2px 5px}.cn-domanda.corta .q{font-size:15px!important;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",
      ".cn-striscia{flex:none;position:relative;height:82px;border-radius:16px;overflow:hidden;margin-top:2px}",
      ".cn-striscia .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}",
      ".cn-striscia .prot{position:absolute;left:6px;bottom:-4px;height:90px}",
      ".cn-sotto{position:absolute;left:96px;bottom:18px;background:rgba(0,0,0,.62);border-radius:10px;padding:3px 9px}",
      ".cn-sotto small{display:block;font-size:10px;opacity:.85;text-transform:uppercase;letter-spacing:.06em}.cn-sotto b{font-size:17px;font-weight:900}",
      ".cn-em{position:absolute;right:10px;top:6px;font-size:26px}",
      ".cn-striscia+.cn-domanda{margin-top:-12px}",
      ".cn-sc,.cn-scr,.cn-vota,.cn-svela,.cn-classif,.cn-dis,.cn-arr,.cn-premi-box{display:flex;flex-direction:column}",
      ".cn-carte{flex:1;min-height:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:8px}",
      ".cn-carta{position:relative;min-height:0;background:#fffaf0;color:#2a1458;border-radius:16px;display:flex;flex-direction:column;align-items:center;overflow:hidden;box-shadow:0 5px 0 rgba(0,0,0,.3);transition:transform .15s,box-shadow .15s,opacity .2s;touch-action:none;cursor:pointer}",
      ".cn-carta .fig{flex:1;min-height:0;width:100%;display:flex;align-items:flex-end;justify-content:center;overflow:hidden;background:radial-gradient(circle at 50% 70%,#ffe7a8,#ffc94d)}",
      ".cn-carta .fig img{height:100%;width:auto;max-width:100%;object-fit:contain;pointer-events:none}",
      ".cn-carta .fig.em{align-items:center;font-size:clamp(44px,17vw,84px);line-height:1;white-space:nowrap}.cn-carta .fig.em.due{font-size:clamp(34px,13vw,64px)}.cn-carta .fig.em.tre{font-size:clamp(28px,10vw,50px)}",
      ".cn-carta.lui .fig{background:radial-gradient(circle at 50% 70%,#d6efff,#7fc4ff)}",
      ".cn-carta .fig{position:relative}.cn-carta .smorfia{position:absolute;right:6px;top:6px;font-size:24px;line-height:1;filter:drop-shadow(0 2px 2px rgba(0,0,0,.3))}",
      ".cn-carta .cap{flex:none;width:100%;box-sizing:border-box;padding:4px 6px 6px;font-size:13px;font-weight:800;line-height:1.15;text-align:center;min-height:2.7em;display:flex;align-items:center;justify-content:center}",
      ".cn-carta.sel{box-shadow:0 0 0 4px #ffcf3f,0 9px 0 rgba(0,0,0,.35);transform:translateY(-4px) rotate(-1deg)}",
      ".cn-carta.lanciata{animation:cnLancia .5s ease both}",
      ".cn-sc.inviato .cn-carta:not(.sel),.cn-sc.inviato .cn-volto:not(.sel){opacity:.4}",
      ".cn-carte.piccole .cap{font-size:12px}",
      ".cn-carta .voti,.cn-volto .voti{position:absolute;top:4px;left:4px;right:4px;display:flex;flex-wrap:wrap;gap:2px;z-index:2}",
      ".cn-carta.vince{box-shadow:0 0 0 4px #37d47e,0 5px 0 rgba(0,0,0,.3)}.cn-carta.mia .cap{background:rgba(255,207,63,.35)}",
      ".cn-carta.dilui::after{content:'👑';position:absolute;right:4px;bottom:34px;font-size:22px;animation:cnPop .4s both}",
      ".cn-mini.vola{transition:opacity .2s}.cn-mini.giu{animation:cnGiu .35s ease}.cn-mini.re{border-color:#ffcf3f;box-shadow:0 0 0 2px #ffcf3f}.cn-mini.jolly{border-color:#ff8fd0;box-shadow:0 0 0 2px #ff8fd0}",
      ".cn-volti{flex:1;min-height:0;display:grid;gap:6px;align-content:center;grid-template-columns:repeat(3,1fr)}",
      ".cn-volti.n3,.cn-volti.n4{grid-template-columns:repeat(2,1fr)}.cn-volti.n7,.cn-volti.n8{grid-template-columns:repeat(4,1fr)}.cn-volti.n9,.cn-volti.n10{grid-template-columns:repeat(5,1fr)}",
      ".cn-volto{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 2px;border-radius:14px;background:rgba(255,255,255,.08);touch-action:none;cursor:pointer;min-width:0;transition:opacity .2s,transform .15s}",
      ".cn-volto img{width:100%;max-width:96px;aspect-ratio:1;border-radius:50%;object-fit:cover;object-position:50% 38%;background:rgba(255,255,255,.18);border:3px solid rgba(255,255,255,.3);box-sizing:border-box;pointer-events:none}",
      ".cn-volto span{font-size:12px;font-weight:800;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".cn-volto.sel{background:rgba(255,207,63,.25);transform:translateY(-3px)}.cn-volto.sel img{border-color:#ffcf3f}",
      ".cn-volto.vince{background:rgba(55,212,126,.25)}.cn-volto.vince img{border-color:#37d47e}.cn-volto.mia span{color:#ffcf3f}",
      ".cn-volti.svela .voti{top:2px}.cn-volti.n9 .cn-mini,.cn-volti.n10 .cn-mini,.cn-volti.n7 .cn-mini,.cn-volti.n8 .cn-mini{width:18px;height:18px}",
      ".cn-scr-box{flex:none;background:#fff;border-radius:16px;padding:8px;display:flex;flex-direction:column;gap:6px}",
      ".cn-campo{width:100%;box-sizing:border-box;border:0;resize:none;font:inherit;font-size:18px;font-weight:800;color:#21124d;outline:none;background:transparent;min-height:52px;user-select:text;-webkit-user-select:text}",
      ".cn-scr-riga{display:flex;align-items:center;gap:8px;justify-content:space-between}.cn-scr-riga .vai{flex:0 0 55%}.cn-conta{color:#8a7cc4;font-weight:800;font-size:13px}",
      ".cn-fatto{flex:none;font-weight:800;color:#7ff0a8;text-align:center;padding:8px}.cn-scr.inviato .cn-scr-box{opacity:.6}",
      ".cn-vt{display:flex;flex-direction:column;align-items:stretch}.cn-vt-tit{flex:none;text-align:center;font-weight:900;font-size:16px;opacity:.85}",
      ".cn-vt-carta{flex:none;margin:auto 6px;background:#fff;color:#21124d;border-radius:22px;padding:24px 16px;font-size:24px;font-weight:900;text-align:center;box-shadow:0 8px 0 rgba(0,0,0,.3);transform:rotate(1deg)}",
      ".cn-vt-carta.su{animation:cnPop .45s cubic-bezier(.2,1.6,.4,1) both}.cn-vt-num{flex:none;text-align:center;font-weight:800;opacity:.7;padding-bottom:6px}",
      ".cn-vota-tit{flex:none;display:flex;flex-direction:column;align-items:center;padding:2px 0 8px;text-align:center}.cn-vota-tit b{font-size:18px;font-weight:900}.cn-vota-tit small{font-size:12px;opacity:.8}",
      ".cn-voti{flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;justify-content:center}",
      ".cn-voce{position:relative;flex:0 1 46px;min-height:32px;background:#fff;color:#21124d;border-radius:14px;padding:3px 12px;display:flex;align-items:center;gap:8px;font-weight:800;font-size:15px;line-height:1.15;cursor:pointer;transition:opacity .25s,transform .15s}",
      ".cn-voti.n9 .cn-voce,.cn-voti.n10 .cn-voce,.cn-voti.n11 .cn-voce,.cn-voti.n12 .cn-voce{font-size:13px;padding:2px 10px}",
      ".cn-voce>span:first-child{flex:1;min-width:0}.cn-voce>i{display:none;font-style:normal;font-size:11px;color:#8a7cc4;flex:none}",
      ".cn-voce.mia{opacity:.5}.cn-voce.mia>i{display:inline}.cn-voce.sel{box-shadow:0 0 0 4px #ffcf3f;transform:scale(1.02)}",
      ".cn-voce .aut{flex:none;display:flex;align-items:center;gap:4px;font-size:12px}.cn-voce .aut.casa{color:#b07a00;font-weight:900}",
      ".cn-voce .voti{flex:none;display:flex;gap:1px;max-width:40%;flex-wrap:wrap;justify-content:flex-end}.cn-voce .voti .cn-mini{width:20px;height:20px}",
      ".cn-voce.rivela.vince{background:#fff3c4;box-shadow:0 0 0 3px #ffcf3f;font-size:16px}",
      ".cn-gal{flex:1;min-height:0;display:grid;grid-template-columns:repeat(var(--col,2),var(--cw,100px));justify-content:center;align-content:center;gap:8px}",
      ".cn-cella{position:relative;width:var(--cw,100px);aspect-ratio:3/4;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 4px 0 rgba(0,0,0,.3);cursor:pointer}",
      ".cn-cella canvas{width:100%;height:100%;display:block}.cn-cella.vuota{background:rgba(255,255,255,.15)}.cn-cella.vuota canvas{opacity:0}",
      ".cn-cella .tag{position:absolute;left:4px;bottom:4px;font-style:normal;font-size:10px;font-weight:800;background:rgba(0,0,0,.7);border-radius:6px;padding:1px 5px;color:#fff}.cn-cella .tag:empty{display:none}",
      ".cn-cella.mia{opacity:.55}.cn-cella.sel{box-shadow:0 0 0 4px #ffcf3f}.cn-cella.vince{box-shadow:0 0 0 4px #37d47e}",
      ".cn-cella .sotto{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.72);color:#fff;font-size:10px;font-weight:800;text-align:center;padding:2px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.2;overflow-wrap:anywhere}.cn-cella .sotto:empty{display:none}",
      ".cn-cella .voti{position:absolute;top:3px;left:3px;right:3px;display:flex;flex-wrap:wrap;gap:2px}.cn-cella .cn-mini{width:20px;height:20px}",
      ".cn-zoom{display:flex;flex-direction:column;align-items:center;gap:10px;max-height:100%}",
      ".cn-zoom-cv{width:min(86vw,calc((var(--alt,100dvh) - 190px) * .75));height:auto;aspect-ratio:3/4;border-radius:16px;background:#fff}",
      ".cn-zoom-tasti{display:flex;gap:8px;width:100%;justify-content:center}.cn-zoom-miss{font-weight:800;text-align:center;font-size:14px}",
      ".cn-strisc{flex:none;text-align:center;font-weight:900;font-size:20px;color:#ffcf3f;opacity:0}.cn-strisc:empty{display:none}",
      ".cn-strisc.su{opacity:1;animation:cnPop .5s both}.cn-strisc.tutti{font-size:21px;color:#7ff0a8;text-shadow:0 0 12px rgba(127,240,168,.6)}",
      ".cn-mioesito{flex:none;align-self:center;font-weight:900;font-size:20px;padding:3px 16px;border-radius:999px;opacity:0;margin-top:4px}.cn-mioesito:empty{display:none}",
      ".cn-mioesito.su{opacity:1;animation:cnPop .5s both}.cn-mioesito.si{background:#37d47e;color:#04321c}.cn-mioesito.no{background:rgba(255,255,255,.18)}",
      ".cn-voce-gioco{flex:none;text-align:center;font-style:italic;font-size:13px;opacity:0;padding-top:3px}.cn-voce-gioco:empty{display:none}.cn-voce-gioco.su{opacity:.9;transition:opacity .4s}",
      ".cn-verdetto{flex:none;text-align:center;padding:6px 0 2px;transition:opacity .3s}.cn-verdetto small{display:block;font-size:12px;opacity:.8}.cn-verdetto b{font-size:17px;font-weight:900;color:#ffcf3f}",
      ".cn-verdetto.su{animation:cnPop .45s both}.cn-verdetto:empty{display:none}",
      ".cn-svela .cn-domanda{margin-bottom:6px}.cn-svela .cn-domanda .q{font-size:15px!important}",
      ".cn-svela.vuoto{align-items:center;justify-content:center;text-align:center;font-weight:800}.cn-vuoto{font-size:80px}",
      ".cn-prossima{flex:none;background:rgba(255,255,255,.1);border-radius:16px;padding:8px 12px;margin-top:8px;display:flex;flex-direction:column;align-items:center;gap:3px;animation:cnPop .5s .5s both}",
      ".cn-prossima small{font-size:11px;text-transform:uppercase;letter-spacing:.08em;opacity:.8}.cn-prossima b{font-size:18px;font-weight:900}.cn-prossima .chi{display:flex;align-items:center;gap:6px;font-weight:800;font-size:14px;color:#ffcf3f}",
      ".cn-classif .cn-class{flex:1;min-height:0}",
      ".cn-sf{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:6px}",
      ".cn-sf-tit{flex:none;font-weight:900;font-size:15px;opacity:.85;letter-spacing:.1em;text-transform:uppercase;padding-top:4px}",
      ".cn-sf-palco{flex:1;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;width:100%}",
      ".cn-sf-cornice{width:min(60vw,calc(var(--alt,100dvh) * .32),250px);aspect-ratio:1;border-radius:50%;background:radial-gradient(#fff6d8,#ffb84a);box-shadow:0 0 0 6px #ffcf3f,0 0 40px 12px rgba(255,207,63,.55);overflow:hidden;opacity:0;transform:scale(.6)}",
      ".cn-sf-cornice.su{animation:cnSfila .6s cubic-bezier(.2,1.5,.4,1) forwards}.cn-sf-foto{width:100%;height:100%;object-fit:cover;object-position:50% 40%;transform:scale(1.25) translateY(6%)}",
      ".cn-sf-nome{font-size:clamp(26px,9vw,44px);font-weight:900;letter-spacing:.04em;opacity:0;text-shadow:0 4px 0 rgba(0,0,0,.4);text-align:center;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cn-sf-nome.su{animation:cnNome .6s .15s both}",
      ".cn-sf-pronti{position:absolute;left:0;right:0;top:38%;text-align:center;font-size:30px;font-weight:900;color:#ffcf3f;opacity:0;pointer-events:none}.cn-sf-pronti.su{animation:cnPop .5s both}",
      ".cn-sf-fila{flex:none;display:flex;gap:4px;flex-wrap:wrap;justify-content:center}.cn-sf-fila .cn-mini{opacity:.3;transition:opacity .3s}.cn-sf-fila .cn-mini.ok{opacity:1}",
      ".cn-sf .cn-riga-avanti{width:100%}",
      ".cn-arr-scena{flex:1;min-height:0;position:relative;border-radius:20px;overflow:hidden;margin-top:2px}",
      ".cn-arr-scena .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}",
      ".cn-arr-prot{position:absolute;left:50%;bottom:0;height:60%;animation:cnArrProt .9s .3s cubic-bezier(.2,1.3,.4,1) both}",
      ".cn-arr-titolo{position:absolute;top:10px;left:10px;right:10px;display:flex;align-items:center;gap:8px;background:rgba(0,0,0,.62);border-radius:14px;padding:6px 12px;font-weight:900;font-size:19px;animation:cnEntra .5s both}.cn-arr-titolo .e{font-size:28px}",
      ".cn-arr-sotto{position:absolute;right:10px;bottom:14px;background:#ffcf3f;color:#2a1458;border-radius:12px;padding:4px 10px;text-align:right;animation:cnTimbro .5s 1s both}",
      ".cn-arr-sotto small{display:block;font-size:10px;font-weight:800;text-transform:uppercase}.cn-arr-sotto b{font-size:20px;font-weight:900}",
      ".cn-arr-voce{position:absolute;left:10px;right:10px;top:64px;background:#fff;color:#21124d;border-radius:14px;padding:8px 10px;font-weight:800;font-size:14px;line-height:1.25;animation:cnEntra .5s .6s both}",
      ".cn-arr-info{flex:none;text-align:center;font-size:12px;opacity:.85;padding-top:6px}",
      ".cn-fin-intro{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:6px}.cn-fin-gran{font-size:76px;animation:cnPop .6s both}",
      ".cn-fin-intro h2{margin:0;font-weight:900;font-size:22px}.cn-fin-intro p{margin:0;font-weight:700;opacity:.9;line-height:1.35}.cn-fin-intro p.doppi{color:#ffcf3f;font-weight:900}.cn-fin-intro .cn-riga-avanti{width:100%;margin-top:auto}",
      ".cn-premi{flex:1;min-height:0;display:flex;flex-direction:column;gap:5px;justify-content:center}",
      ".cn-premio{flex:0 1 auto;display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border-radius:14px;padding:4px 10px;min-height:34px;opacity:0}",
      ".cn-premio.su{animation:cnPop .5s both}.cn-premio.grande{background:linear-gradient(90deg,rgba(255,207,63,.25),rgba(255,255,255,.06));padding:7px 10px}.cn-premio.mio{box-shadow:inset 0 0 0 2px #ffcf3f}",
      ".cn-premio .e{font-size:24px;flex:none}.cn-premio .volti{display:flex;flex:none}.cn-premio .volti .cn-mini{margin-right:-4px}.cn-premio .tx{display:flex;flex-direction:column;min-width:0;margin-left:4px}",
      ".cn-premio b{font-weight:900;font-size:14px}.cn-premio small{font-size:11px;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".cn-tav{flex:1;min-height:0;display:flex;flex-direction:column;gap:5px}",
      ".cn-tav-area{flex:1;min-height:0;position:relative;overflow:hidden}",
      ".cn-tav-foglio{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:10px;overflow:hidden;box-shadow:0 4px 0 rgba(0,0,0,.35);touch-action:none;background:#fff}",
      ".cn-tav-foglio canvas{position:absolute;left:0;top:0}.cn-tav-foglio .ad{position:absolute;inset:0}",
      ".cn-ad{position:absolute;line-height:1;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;white-space:nowrap}",
      ".cn-ad.sel{filter:drop-shadow(0 0 3px #1c7ed6)}",
      ".cn-man{position:absolute;left:0;top:0;width:30px;height:30px;border-radius:50%;background:#1c7ed6;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;font-size:16px;z-index:3;box-shadow:0 2px 6px rgba(0,0,0,.5);touch-action:none;cursor:pointer}",
      ".cn-tav-avviso{position:absolute;left:50%;top:8px;transform:translateX(-50%);background:rgba(0,0,0,.8);color:#fff;font-weight:800;font-size:13px;padding:4px 10px;border-radius:999px;opacity:0;pointer-events:none;white-space:nowrap;z-index:4}.cn-tav-avviso.su{animation:cnAvv 2.2s both}",
      ".cn-tav-str{flex:none;display:flex;gap:2px;padding:0 3px;align-items:center;justify-content:center}",
      ".cn-btn.cn-col{width:24px;height:24px;min-height:0;padding:0;border-radius:50%;background:var(--c);border:2px solid rgba(255,255,255,.5);box-shadow:none;flex:none}",
      ".cn-btn.cn-col.on{transform:scale(1.12);border-color:#ffcf3f;box-shadow:0 0 0 2px #ffcf3f}",
      ".cn-btn.cn-str{width:31px;height:31px;min-height:0;padding:0;border-radius:10px;font-size:17px;flex:none}.cn-btn.cn-str.on{background:rgba(255,207,63,.45)}",
      ".cn-str.punta i{display:block;width:8px;height:8px;border-radius:50%;background:var(--c,#000);margin:auto;border:1px solid rgba(255,255,255,.7)}.cn-str.punta.grossa i{width:18px;height:18px}",
      ".cn-btn.cest.pronto{background:#ff5d6c;transform:scale(1.2)}.cn-btn.cest.sicuro{background:rgba(255,93,108,.6)}",
      ".cn-tav-adesivi{flex:none;display:grid;grid-template-columns:repeat(9,1fr);gap:3px}",
      ".cn-btn.cn-ades{min-height:0;height:34px;padding:0;font-size:21px;border-radius:9px;background:rgba(255,255,255,.12)}",
      ".cn-tav.bloccata .cn-tav-str,.cn-tav.bloccata .cn-tav-adesivi{opacity:.35;pointer-events:none}",
      ".cn-dis .cn-azione{min-height:46px}.cn-dis-stato{flex:1;font-size:12px;font-weight:800;opacity:.85}.cn-dis .cn-azione .vai{flex:0 0 46%}",
      ".cn-dis-corpo{flex:1;min-height:0;display:flex;flex-direction:column}",
      ".cn-centro{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;font-weight:800}.cn-guarda-scena{width:62%;border-radius:16px}",
      ".cn-fine-s .cn-podio{display:flex;align-items:flex-end;justify-content:center;gap:8px;margin:2px 0 8px}",
      ".cn-gradino{display:flex;flex-direction:column;align-items:center;width:31%;max-width:130px;min-width:0}",
      ".cn-gradino .f{width:56%;aspect-ratio:1;border-radius:50%;object-fit:cover;object-position:50% 38%;background:rgba(255,255,255,.2);border:3px solid #fff;animation:cnPop .6s both}",
      ".cn-gradino.g1 .f{width:72%;border-color:#ffcf3f;box-shadow:0 0 18px rgba(255,207,63,.6)}",
      ".cn-gradino .n{font-weight:900;font-size:14px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:3px}.cn-gradino.tu .n{color:#ffcf3f}.cn-gradino .pt{font-size:12px;opacity:.85}",
      ".cn-gradino .base{width:100%;border-radius:10px 10px 0 0;text-align:center;font-size:22px;padding-top:4px;margin-top:3px}",
      ".cn-gradino.g1 .base{height:46px;background:linear-gradient(#ffcf3f,#e0a90a)}.cn-gradino.g2 .base{height:34px;background:linear-gradient(#e9ecef,#adb5bd)}.cn-gradino.g3 .base{height:24px;background:linear-gradient(#f4a261,#c0763a)}",
      ".cn-resto{margin:0 0 6px!important}.cn-fig-btn{margin:4px 0 6px!important}",
      ".cn-fig-velo{position:fixed;inset:0;z-index:9999;background:rgba(8,4,24,.92);display:flex;align-items:center;justify-content:center;padding:12px}",
      ".cn-fig-box{display:flex;flex-direction:column;gap:10px;align-items:center;max-height:100%;width:100%;max-width:420px}",
      ".cn-fig-img{max-width:100%;max-height:calc(var(--alt,100dvh) - 110px);border-radius:14px}.cn-fig-tasti{display:flex;gap:8px;width:100%}.cn-fig-tasti .btn{flex:1;margin:0}",
      // 🌙 Notte vivace: il podio della fine (la schermata è vestita come l'app, .oro): i metalli dei trofei, colori dalle variabili dell'app
      ".oro .cn-gradino .f{background:var(--o-carta-2);border-color:var(--o-testo)}",
      ".oro .cn-gradino.g1 .f{border-color:var(--n-monete);box-shadow:0 0 18px -2px var(--n-monete)}",
      ".oro .cn-gradino.tu .n{color:var(--n-monete)}.oro .cn-gradino .pt{opacity:1;color:var(--o-tenue)}",
      ".oro .cn-gradino .base{display:flex;align-items:center;justify-content:center;padding-top:0;font-size:17px}",
      // il foglio della figurina che si apre dalla fine: velo scuro dell'app (il disegno della figurina resta com'è)
      ".oro.cn-fig-velo{background:rgba(9,11,22,.92)}",
      // (i gradini: tessera scura, filo e simbolo del colore del metallo, come i trofei)
      ".oro .cn-gradino.g1 .base{background:linear-gradient(var(--o-m-oro-b),var(--o-m-oro-a));box-shadow:inset 0 0 0 1.5px var(--o-m-oro-f),inset 0 1px 0 rgba(255,255,255,.12)}.oro .cn-gradino.g1 .base .emo{--emo-col:var(--o-m-oro-i)}",
      ".oro .cn-gradino.g2 .base{background:linear-gradient(var(--o-m-argento-b),var(--o-m-argento-a));box-shadow:inset 0 0 0 1.5px var(--o-m-argento-f),inset 0 1px 0 rgba(255,255,255,.12)}.oro .cn-gradino.g2 .base .emo{--emo-col:var(--o-m-argento-i)}",
      ".oro .cn-gradino.g3 .base{background:linear-gradient(var(--o-m-bronzo-b),var(--o-m-bronzo-a));box-shadow:inset 0 0 0 1.5px var(--o-m-bronzo-f),inset 0 1px 0 rgba(255,255,255,.12)}.oro .cn-gradino.g3 .base .emo{--emo-col:var(--o-m-bronzo-i)}",
      // 🌙 Notte vivace: le scene incorniciate più scure, dentro vetro scuro con filo sottile (il fondo viola del gioco resta com'è); solo colori, bordi e un velo sopra le immagini
      ".cn-arr-scena,.cn-striscia{background:var(--o-carta-piena);border:1px solid var(--o-filo-oro);box-shadow:var(--o-ombra-alta)}",
      ".cn-arr-scena{border-radius:22px}.cn-striscia{border-radius:18px}",
      ".cn-arr-scena .bg,.cn-striscia .bg{filter:brightness(.62) saturate(.85)}",
      ".cn-arr-scena::after,.cn-striscia::after{content:'';position:absolute;inset:0;pointer-events:none;border-radius:inherit;background:linear-gradient(180deg,rgba(13,16,32,.55) 0%,rgba(13,16,32,.08) 38%,rgba(13,16,32,.12) 62%,rgba(13,16,32,.7) 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.03)}",
      ".cn-arr-prot,.cn-striscia .prot{z-index:1}.cn-arr-titolo,.cn-arr-sotto,.cn-arr-voce,.cn-sotto,.cn-em{z-index:2}",
      ".cn-arr-titolo,.cn-sotto{background:rgba(13,16,32,.78);border:1px solid var(--o-filo-oro);color:var(--o-testo)}",
      ".cn-arr-sotto{background:rgba(13,16,32,.82);border:1px solid var(--o-oro);color:var(--o-testo);box-shadow:0 8px 20px -10px rgba(0,0,0,.8)}",
      ".cn-arr-sotto small,.cn-sotto small{color:var(--o-oro-testo);opacity:1}",
      ".cn-arr-voce{background:var(--o-carta-piena);border:1px solid var(--o-filo-oro);color:var(--o-testo);box-shadow:var(--o-ombra-alta)}",
      ".cn-domanda{background:var(--o-carta-piena);color:var(--o-testo);border:1px solid var(--o-filo-oro);box-shadow:var(--o-ombra);transform:none}.cn-domanda .x{color:var(--o-tenue)}",
      ".cn-carta{background:var(--o-carta-piena);color:var(--o-testo);border:1px solid var(--o-filo-oro);box-shadow:var(--o-ombra)}",
      ".cn-carta .fig{background:radial-gradient(circle at 50% 78%,#2c3158 0%,#171c31 78%)}.cn-carta.lui .fig{background:radial-gradient(circle at 50% 78%,#1d4a63 0%,#13243a 78%)}",
      ".cn-carta .smorfia{filter:drop-shadow(0 2px 3px rgba(0,0,0,.6))}.cn-carta .cap{border-top:1px solid var(--o-filo)}",
      ".cn-carta.sel{box-shadow:0 0 0 2px var(--o-oro),0 12px 26px -10px rgba(224,34,90,.6);transform:translateY(-3px)}",
      ".cn-carta.vince{box-shadow:0 0 0 2px var(--o-verde),0 8px 22px -10px rgba(52,209,122,.5)}.cn-carta.mia .cap{background:var(--o-carta-viva)}",
      ".cn-btn.vai{background:var(--o-tasto);color:var(--o-tasto-testo);box-shadow:0 10px 22px -10px rgba(224,34,90,.7)}",
      ".cn-btn.vai:disabled{background:var(--o-carta);color:var(--o-tenue);box-shadow:none;border:1px solid var(--o-filo);opacity:1}",
      ".cn-btn.jolly{background:var(--o-carta);border:1px solid var(--o-filo-oro);color:var(--o-testo)}",
      ".cn-btn.jolly.on{background:var(--o-carta-viva);border-color:var(--o-oro);color:var(--o-testo);transform:none}",
      // 🌙 Notte vivace 2: il fondo blu notte (era viola) e quello che restava chiaro nel voto e nello svelamento (voci, carta della battuta, foglio dove si scrive, classifica)
      ".cn-vt-carta{background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,0)),var(--o-carta-piena);color:var(--o-testo);border:1px solid var(--o-filo-oro);box-shadow:inset 0 1px 0 rgba(255,255,255,.06),var(--o-ombra-alta);transform:none}",
      ".cn-voce{background:var(--o-carta-piena);color:var(--o-testo);box-shadow:inset 0 0 0 1px var(--o-filo),inset 0 1px 0 rgba(255,255,255,.06)}.cn-voce>i{color:var(--o-tenue)}",
      ".cn-voce.sel{background:var(--o-carta-viva);box-shadow:0 0 0 2px var(--o-oro),0 10px 22px -12px rgba(224,34,90,.6)}",
      ".cn-voce .aut{color:var(--o-tenue)}.cn-voce .aut b{color:var(--o-testo)}.cn-voce .aut.casa{color:var(--n-monete)}",
      ".cn-voce.rivela.vince{background:var(--o-carta-viva);box-shadow:0 0 0 2px var(--n-monete),0 10px 22px -12px rgba(255,194,71,.5)}",
      ".cn-scr-box{background:var(--o-carta-piena);box-shadow:inset 0 0 0 1px var(--o-filo-oro)}.cn-campo{color:var(--o-testo)}.cn-campo::placeholder{color:var(--o-tenue)}.cn-conta{color:var(--o-tenue)}",
      ".cn-class-box{background:var(--o-carta-piena);box-shadow:inset 0 0 0 1px var(--o-filo),var(--o-ombra-alta)}",
      ".cn-riga{background:var(--o-carta);box-shadow:inset 0 0 0 1px var(--o-filo)}.cn-riga.tu{background:var(--o-carta-viva);box-shadow:inset 0 0 0 2px var(--o-oro)}",
      ".cn-riga .pt small,.cn-riga .fr{color:var(--o-verde)}",
      ".cn-prossima{background:var(--o-carta);box-shadow:inset 0 0 0 1px var(--o-filo-oro)}",
      ".cn-esci,.cn-coppa{background:var(--o-carta);box-shadow:inset 0 0 0 1px var(--o-filo);color:var(--o-testo)}",
      "@keyframes cnEntra{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}",
      "@keyframes cnPop{0%{opacity:0;transform:scale(.6)}70%{opacity:1;transform:scale(1.08)}100%{opacity:1;transform:none}}",
      "@keyframes cnBoing{40%{transform:scale(1.35)}100%{transform:none}}",
      "@keyframes cnVola{0%{opacity:0;transform:translate(0,20px) scale(.6)}12%{opacity:1;transform:translate(0,0) scale(1.15)}100%{opacity:0;transform:translate(var(--dx),-420px) scale(1)}}",
      "@keyframes cnPomo{0%{opacity:0;transform:translate(0,20px) scale(.6)}10%{opacity:1}55%{transform:translate(var(--dx),-300px) scale(1.3) rotate(200deg)}62%{transform:translate(var(--dx),-300px) scale(2.4,1.1)}85%{opacity:1;transform:translate(var(--dx),-290px) scale(2.2,1)}100%{opacity:0;transform:translate(var(--dx),-280px) scale(2.2,1)}}",
      "@keyframes cnGiu{from{transform:translateY(-40px) scale(1.6)}to{transform:none}}",
      "@keyframes cnLancia{50%{transform:translateY(-30px) scale(1.04)}100%{transform:translateY(-4px) rotate(-1deg)}}",
      "@keyframes cnSfila{0%{opacity:0;transform:scale(.5) rotate(-8deg)}100%{opacity:1;transform:none}}",
      "@keyframes cnNome{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}",
      "@keyframes cnArrProt{from{transform:translate(70%,0);opacity:0}to{transform:translate(-50%,0);opacity:1}}",
      "@keyframes cnTimbro{0%{opacity:0;transform:scale(2) rotate(-12deg)}100%{opacity:1;transform:rotate(-3deg)}}",
      "@keyframes cnAvv{0%{opacity:0}10%,80%{opacity:1}100%{opacity:0}}",
      // il riquadro della foto nella saletta
      ".cn-fb{border-radius:14px;background:linear-gradient(135deg,#3a1f78,#5a2ca0);color:#fff;padding:7px 8px;margin:0 0 8px;box-shadow:0 2px 10px rgba(0,0,0,.18)}",
      ".cn-fb-riga{display:flex;align-items:center;gap:7px;min-width:0}",
      ".cn-fb-w{flex:none;position:relative;width:42px;height:42px;border-radius:50%;overflow:hidden;background:radial-gradient(#fff6d8,#ffb84a);box-shadow:0 0 0 2px #ffcf3f}.cn-fb-f{position:absolute;width:150%;height:150%;left:-25%;top:-14%;object-fit:cover}",
      ".cn-fb-col{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.2}",
      ".cn-fb-tx{font-weight:900;font-size:13.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".cn-fb-sotto{font-size:11.5px;opacity:.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".cn-fb-btns{flex:none;display:flex;flex-direction:column;gap:4px}",
      ".cn-btn.cn-fb-b{flex:none;min-height:30px;padding:0 9px;font-size:12.5px;border-radius:10px;background:rgba(255,255,255,.18);white-space:nowrap}"
    ].join("");
    document.head.appendChild(st);
  }

  SG.registra({
    id: ID, nome: "Chi di Noi?", icona: "🫵",
    descrizione: "A turno uno di voi è sotto torchio, in 20 posti buffi: scegliete l'immagine giusta per lui, scrivete la battuta, disegnate su di lui. Vince chi la pensa come gli amici!",
    giocatoriMin: MIN, giocatoriMax: MAX, difficolta: 1,
    modi: [], soloOnline: true,
    postiOnline: MAX,
    riprende: true,   // se l'host ricarica o riapre l'app, la partita riprende da dove era (t.ripresa, t.ricorda)
    riserva: true,    // se l'host sparisce del tutto un amico porta avanti la partita (gioco lungo, non a due, non in tempo reale)
    riassunto: function (imp) {
      var i = impNorm(imp), tutti = posti().length;
      return i.nPosti + " posti · " + i.nDom + " domande per posto · tempi " + (i.tempi === "calma" ? "con calma" : i.tempi) + (i.posti.length < tutti ? " · " + i.posti.length + " posti accesi su " + tutti : "") + (i.foto ? "" : " · solo avatar (niente foto)");
    },
    regole: [
      "📸 All'inizio ognuno si fa un <b>selfie</b> (o sceglie una foto, o usa l'avatar) e un <b>filtro buffo</b>: la foto la vede solo chi è entrato dal link della serata, e sparisce quando uscite.",
      "In ogni posto uno di voi è <b>sotto torchio</b>: le domande sono su di lui (anche lui gioca).",
      "🖼️ <b>Immagini</b>: scegli la carta giusta per lui. ✍️ <b>Scrivi</b> e 🎨 <b>Disegna</b>: tutti scrivono o disegnano, poi si vota. 👆 <b>Chi di noi</b>: tocca la faccia di un amico.",
      "<b>100 punti per ogni amico che sceglie come te</b> (nello Scrivi e nel Disegna il voto di chi è sotto torchio vale doppio). +100 a chi scrive la battuta o fa il disegno più votato.",
      "🃏 <b>3 jolly</b> a testa: raddoppiano i punti di una domanda. Se votate tutti uguale: <b>TUTTI D'ACCORDO</b>, +100 a tutti.",
      "Gran finale: <b>«Passa il ritratto!»</b>, la faccia di un amico passa di telefono in telefono. Punti doppi!"
    ],
    impostazioni: function (box, dove, aiuti) {
      var el = aiuti.el, i0 = impNorm(dove);
      dove.posti = i0.posti.slice(); dove.nPosti = i0.nPosti; dove.nDom = i0.nDom; dove.tempi = i0.tempi; dove.foto = i0.foto;
      var stima = el("div", { class: "modulo-nota", style: "margin-top:8px" });
      function aggStima() { var n = (aiuti.giocatori && aiuti.giocatori.length) || 6; tx(stima, "⏱️ In " + Math.max(3, n) + " circa " + stimaMinuti(impNorm(dove), Math.max(3, n)) + " minuti"); }
      function gruppo(etichetta, voci, prop) {
        box.appendChild(el("div", { class: "etichetta", style: "margin-top:10px", text: etichetta }));
        var g = el("div", { class: "modo-griglia", style: "display:grid;grid-template-columns:repeat(" + Math.min(4, voci.length) + ",1fr);gap:8px" });
        voci.forEach(function (v) {
          var b = el("button", { class: "modo-chip" + (dove[prop] === v[0] ? " attiva" : ""), style: "justify-content:center;text-align:center;padding:11px 4px", onclick: function () {
            dove[prop] = v[0]; [].forEach.call(g.children, function (c) { c.classList.remove("attiva"); }); b.classList.add("attiva"); aggStima();
          } }, [el("div", { class: "mt", text: v[1] })]);
          g.appendChild(b);
        });
        box.appendChild(g);
        return g;
      }
      gruppo("Quanti posti (un round per posto)", [[3, "3"], [4, "4"], [5, "5"], [6, "6"], [7, "7"], [8, "8"], [10, "10"]], "nPosti");
      gruppo("Domande per posto", [[3, "3"], [4, "4"], [5, "5"]], "nDom");
      gruppo("Tempi", [["calma", "🐢 Con calma"], ["normali", "Normali"], ["veloci", "⚡ Veloci"]], "tempi");
      gruppo("Le facce", [[true, "📸 Foto vere"], [false, "🙂 Solo avatar"]], "foto");
      box.appendChild(stima); aggStima();
      box.appendChild(el("div", { class: "etichetta", style: "margin-top:10px", text: "Posti accesi (escono a caso tra questi)" }));
      var gP = el("div", { class: "cat-griglia" });
      var notaP = el("div", { class: "link-avviso", hidden: "hidden", text: "Lasciane accesi almeno 3." });
      posti().forEach(function (p) {
        var c = el("button", { class: "cat-chip" + (dove.posti.indexOf(p.id) >= 0 ? " attiva" : ""), onclick: function () {
          var k = dove.posti.indexOf(p.id);
          if (k >= 0 && dove.posti.length <= 3) { notaP.hidden = false; return; }
          notaP.hidden = true;
          if (k >= 0) dove.posti.splice(k, 1); else dove.posti.push(p.id);
          c.classList.toggle("attiva", dove.posti.indexOf(p.id) >= 0); aggStima();
        } }, [el("span", { class: "ci", text: p.emoji }), el("span", { text: nomeCorto(p) }), el("span", { class: "spunta", text: "✓" })]);
        gP.appendChild(c);
      });
      box.appendChild(gP); box.appendChild(notaP);
    },
    avvia: function (t) {
      if (t.linkParams && t.linkParams.stanza) return ospite(t, t.linkParams.stanza);   // entrato da un invito
      return host(t);
    }
  });
})();

