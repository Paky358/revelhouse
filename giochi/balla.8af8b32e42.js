/* =========================================================
   DATI — Le notizie de "La Balla Colossale".
   Ogni notizia è VERA (controllata) ma incredibile:
     domanda      -> la frase con il pezzo mancante: finisce con "..."
                     (oppure ha "___" nel punto dove va il pezzo)
     rispostaVera -> il pezzo mancante, scritto come lo scriverebbe un giocatore:
                     corto (massimo 45 lettere), minuscolo all'inizio (tranne i nomi), senza punto finale.
     balleCasa    -> 3 risposte FALSE ma credibili, scritte dalla "redazione": il gioco le aggiunge quando le
                     risposte sono poche (pochi giocatori, chi non scrive, balle uguali). Massimo 45 lettere.
     cat          -> l'argomento, per «🎯 Sceglie chi è ultimo»: animali, storia, italia, scienza, mondo, spettacolo, invenzioni.
   ========================================================= */
window.SG_BALLA = [
  { domanda: "Nel 1932 l'esercito australiano ha combattuto una vera guerra, con le mitragliatrici, contro...", rispostaVera: "gli emù", balleCasa: ["i canguri", "le cavallette", "i conigli"], cat: "animali" },
  { domanda: "L'animale simbolo della Scozia è...", rispostaVera: "l'unicorno", balleCasa: ["il grifone", "la fenice", "il drago alato"], cat: "animali" },
  { domanda: "Nell'Ottocento, in America, il ketchup si vendeva in farmacia come...", rispostaVera: "medicina per il mal di pancia", balleCasa: ["colluttorio per i denti", "crema per le scottature", "tonico per far crescere i capelli"], cat: "invenzioni" },
  { domanda: "Nel 1923 un fantino ha vinto una corsa di cavalli a New York anche se...", rispostaVera: "era morto durante la gara", balleCasa: ["era cieco da un occhio", "aveva solo dodici anni", "correva senza la sella"], cat: "spettacolo" },
  { domanda: "Il nome completo della bambola Barbie è...", rispostaVera: "Barbara Millicent Roberts", balleCasa: ["Barbara Ann Johnson", "Barbara Louise Miller", "Bernadette Mary Smith"], cat: "invenzioni" },
  { domanda: "Gli astronauti delle missioni Apollo hanno lasciato sulla Luna anche...", rispostaVera: "96 sacchetti di pipì e cacca", balleCasa: ["una scacchiera con tutti i pezzi", "dischi con le canzoni di Elvis", "40 panini al formaggio"], cat: "scienza" },
  { domanda: "Il polpo ha tre cuori, e il suo sangue è di colore...", rispostaVera: "blu", balleCasa: ["verde", "giallo", "trasparente"], cat: "animali" },
  { domanda: "Il vombato, un animaletto australiano, è famoso perché fa la cacca...", rispostaVera: "a forma di cubetti", balleCasa: ["a forma di spirale", "a forma di dischetti piatti", "a forma di cilindri lunghi"], cat: "animali" },
  { domanda: "D'estate, col caldo, la Torre Eiffel...", rispostaVera: "diventa più alta di qualche centimetro", balleCasa: ["cambia colore", "diventa più alta di mezzo metro", "si allarga di un metro"], cat: "mondo" },
  { domanda: "Le lontre marine, per non allontanarsi mentre dormono sull'acqua...", rispostaVera: "si tengono per mano", balleCasa: ["si legano le code a due a due", "si ancorano al fondo con un sasso", "dormono tutti in un grande cerchio"], cat: "animali" },
  { domanda: "In Giappone c'è un'isola abitata quasi soltanto da...", rispostaVera: "conigli", balleCasa: ["tartarughe", "pavoni", "capre"], cat: "animali" },
  { domanda: "Il primo oggetto venduto su eBay, nel 1995, è stato...", rispostaVera: "un puntatore laser rotto", balleCasa: ["un vecchio walkman rotto", "una lattina di Coca-Cola vuota", "una bambola Barbie usata"], cat: "invenzioni" },
  { domanda: "Il nome LEGO viene da due parole danesi che vogliono dire...", rispostaVera: "gioca bene", balleCasa: ["mattoncino felice", "costruisci sognando", "piccolo mondo"], cat: "invenzioni" },
  { domanda: "Nel 1518, a Strasburgo, decine di persone si misero a ballare per strada e...", rispostaVera: "non riuscivano più a fermarsi", balleCasa: ["ridevano senza motivo", "cadevano addormentati in piedi", "si lanciavano nelle fontane"], cat: "storia" },
  { domanda: "Cleopatra è vissuta più vicina all'invenzione dell'iPhone che...", rispostaVera: "alla costruzione delle piramidi", balleCasa: ["alla fondazione di Roma", "alla guerra di Troia", "alla costruzione del Partenone"], cat: "storia" },
  { domanda: "Nel Medioevo, in Francia, si facevano veri processi in tribunale anche contro...", rispostaVera: "i maiali", balleCasa: ["i fantasmi", "le statue dei santi", "i fiumi che straripavano"], cat: "storia" },
  { domanda: "In Giappone Pac-Man all'inizio si chiamava...", rispostaVera: "Puck-Man", balleCasa: ["Gobble-Man", "Munch-Man", "Chomp-Man"], cat: "spettacolo" },
  { domanda: "I fenicotteri nascono grigi e diventano rosa perché...", rispostaVera: "mangiano gamberetti e alghe", balleCasa: ["prendono tanto sole", "si rotolano nel fango rosso", "bevono acqua salata"], cat: "animali" },
  { domanda: "Durante la Seconda guerra mondiale, la futura regina Elisabetta II faceva...", rispostaVera: "la meccanica di camion", balleCasa: ["la cuoca per i soldati", "la pilota di aerei", "la telefonista dell'esercito"], cat: "storia" },
  { domanda: "In Svizzera la legge vieta di tenere da solo, senza un compagno...", rispostaVera: "un porcellino d'India", balleCasa: ["un gatto", "una tartaruga", "un criceto"], cat: "animali" },
  { domanda: "Walt Disney all'inizio voleva chiamare Topolino...", rispostaVera: "Mortimer", balleCasa: ["Marvin", "Max", "Ratty"], cat: "spettacolo" },
  { domanda: "Nel 1977 un astronomo ricevette un segnale così strano dallo spazio che accanto scrisse...", rispostaVera: "Wow!", balleCasa: ["Aiuto!", "Ciao!", "Chi va là?"], cat: "scienza" },
  { domanda: "La parola «robot» viene dal ceco e in origine voleva dire...", rispostaVera: "lavoro forzato", balleCasa: ["uomo di ferro", "servo che non dorme", "giocattolo a molla"], cat: "invenzioni" },
  { domanda: "Il cuore della balenottera azzurra, il più grande di tutti gli animali, pesa circa ___ chili.", rispostaVera: "180", balleCasa: ["90", "350", "500"], cat: "animali" },
  { domanda: "Nel 1814, a Londra, otto persone morirono in un'inondazione di...", rispostaVera: "birra", balleCasa: ["latte", "vino rosso", "olio"], cat: "storia" },
  { domanda: "Durante la Seconda guerra mondiale l'esercito polacco arruolò come soldato...", rispostaVera: "un orso bruno", balleCasa: ["un cammello", "un lupo grigio", "un cinghiale"], cat: "animali" },
  { domanda: "Secondo le memorie di un suo generale, nel 1807 Napoleone fu messo in fuga da...", rispostaVera: "centinaia di conigli", balleCasa: ["un gregge di pecore", "uno sciame di api", "un branco di oche"], cat: "storia" },
  { domanda: "La cittadina di Talkeetna, in Alaska, ha avuto per vent'anni come sindaco onorario...", rispostaVera: "un gatto", balleCasa: ["un alce", "un pappagallo", "un cavallo"], cat: "animali" },
  { domanda: "Negli anni '60 la CIA spese milioni di dollari per trasformare in una spia...", rispostaVera: "un gatto con un microfono nell'orecchio", balleCasa: ["un pappagallo che ripeteva tutto", "un cane con un microfono nel collare", "un topo con una radiolina nascosta"], cat: "animali" },
  { domanda: "Fino al 1920, alle Olimpiadi si davano le medaglie anche nel...", rispostaVera: "tiro alla fune", balleCasa: ["salto della corda", "corsa nei sacchi", "tiro con la fionda"], cat: "spettacolo" },
  { domanda: "Nel 2007 una donna americana ha celebrato il suo matrimonio con...", rispostaVera: "la Torre Eiffel", balleCasa: ["la Statua della Libertà", "il Colosseo", "il Taj Mahal"], cat: "mondo" },
  { domanda: "Nel 1971, durante la missione Apollo 14, l'astronauta Alan Shepard sulla Luna giocò a...", rispostaVera: "golf", balleCasa: ["calcio", "frisbee", "baseball"], cat: "scienza" },
  { domanda: "Nel 1989, in cambio di bibite, la Pepsi ricevette dall'Unione Sovietica...", rispostaVera: "17 sottomarini", balleCasa: ["100 carri armati", "30 elicotteri da guerra", "una base militare"], cat: "invenzioni" },
  { domanda: "Nel 2008 la Guardia del Re di Norvegia ha nominato cavaliere...", rispostaVera: "un pinguino", balleCasa: ["un cane da slitta", "un alce", "un cavallo"], cat: "animali" },
  { domanda: "Prima che esistesse la gomma, per cancellare i segni della matita si usava...", rispostaVera: "la mollica di pane", balleCasa: ["la cera delle candele", "una fetta di patata", "un batuffolo di lana"], cat: "invenzioni" },
  { domanda: "In un villaggio della Colombia, per andare a scuola, alcuni bambini attraversano la valle...", rispostaVera: "appesi a un cavo d'acciaio", balleCasa: ["a dorso d'asino", "su un ponte di corde", "in barca lungo un fiume"], cat: "mondo" },
  { domanda: "Nel 1952 la carica di presidente di Israele venne offerta a...", rispostaVera: "Albert Einstein", balleCasa: ["Charlie Chaplin", "Marc Chagall", "Leonard Bernstein"], cat: "storia" },
  { domanda: "In Giappone c'è un museo pieno di...", rispostaVera: "sassi che sembrano facce", balleCasa: ["chiavi perse", "denti di animali", "ombrelli dimenticati"], cat: "mondo" },
  { domanda: "Nel 1945 l'ingegnere giapponese Tsutomu Yamaguchi sopravvisse a...", rispostaVera: "due bombe atomiche", balleCasa: ["un terremoto e uno tsunami", "un naufragio e un incendio", "due deragliamenti di treno"], cat: "storia" },
  { domanda: "Alla fine dell'Ottocento la Bayer vendeva l'eroina come...", rispostaVera: "sciroppo per la tosse", balleCasa: ["caramella per bambini", "rimedio contro il mal di mare", "tisana per dormire"], cat: "scienza" },
  { domanda: "All'Università di Oxford si faceva già lezione prima che nascesse...", rispostaVera: "l'impero degli Aztechi", balleCasa: ["Carlo Magno", "Maometto", "la caduta dell'impero romano"], cat: "storia" },
  { domanda: "La Nintendo è nata nel 1889, in Giappone, per vendere...", rispostaVera: "carte da gioco", balleCasa: ["riso", "biciclette", "ombrelli"], cat: "invenzioni" },
  { domanda: "Nelle tombe dei faraoni gli archeologi hanno trovato ___ ancora buono da mangiare dopo 3.000 anni.", rispostaVera: "del miele", balleCasa: ["pane", "datteri secchi", "fichi in conserva"], cat: "storia" },
  { domanda: "Le arachidi in realtà non sono frutta secca, ma...", rispostaVera: "legumi, come i fagioli", balleCasa: ["tuberi, come le patate", "bacche secche", "semi di girasole"], cat: "scienza" },
  { domanda: "Il bradipo, lentissimo sulla terra, sott'acqua trattiene il respiro più a lungo...", rispostaVera: "dei delfini", balleCasa: ["delle balene", "delle foche", "dei coccodrilli"], cat: "animali" },
  { domanda: "La macchina per fare lo zucchero filato è stata inventata nel 1897 da...", rispostaVera: "un dentista", balleCasa: ["un fabbro", "un elettricista", "un fruttivendolo"], cat: "invenzioni" },
  { domanda: "Gli appunti di laboratorio di Marie Curie, dopo più di cento anni, sono ancora...", rispostaVera: "radioattivi", balleCasa: ["chiusi in una cassaforte in Svizzera", "sepolti insieme a lei", "scritti con un inchiostro invisibile"], cat: "scienza" },
  { domanda: "La mamma di Buzz Aldrin, il secondo uomo sulla Luna, da ragazza di cognome faceva...", rispostaVera: "Moon, cioè Luna", balleCasa: ["Star, cioè Stella", "Sky, cioè Cielo", "Sun, cioè Sole"], cat: "scienza" },
  { domanda: "Ed Headrick, il papà del frisbee moderno, ha voluto che le sue ceneri fossero...", rispostaVera: "trasformate in frisbee", balleCasa: ["lanciate da un aereo", "sparse su un campo da golf", "chiuse in un trofeo"], cat: "invenzioni" },
  { domanda: "La noce moscata, mangiata in grandi quantità, può far venire...", rispostaVera: "le allucinazioni", balleCasa: ["il singhiozzo", "il mal di mare", "il naso chiuso"], cat: "scienza" },
  { domanda: "Mille anni fa i tacchi alti li portavano...", rispostaVera: "i cavalieri persiani", balleCasa: ["i monaci tibetani", "i contadini cinesi", "i marinai vichinghi"], cat: "storia" },
  { domanda: "L'accendino è stato inventato prima...", rispostaVera: "dei fiammiferi", balleCasa: ["della macchina a vapore", "del paracadute", "della pila elettrica"], cat: "invenzioni" },
  { domanda: "In Giappone si coltivano angurie a forma di...", rispostaVera: "cubo", balleCasa: ["ciambella", "diamante", "ananas"], cat: "mondo" },
  { domanda: "I gatti non riescono a sentire il sapore...", rispostaVera: "dolce", balleCasa: ["salato", "amaro", "acido"], cat: "animali" },
  { domanda: "In Vietnam e in Thailandia le arance mature sono spesso...", rispostaVera: "verdi", balleCasa: ["rosse", "rosa", "bianche"], cat: "mondo" },
  { domanda: "Uno studio inglese ha scoperto che le mucche sono meno stressate quando stanno vicino...", rispostaVera: "alla loro migliore amica", balleCasa: ["a un cane pastore", "a un vitello appena nato", "al contadino"], cat: "animali" },
  { domanda: "Le impronte digitali dei koala sono così simili alle nostre che...", rispostaVera: "si confondono anche al microscopio", balleCasa: ["hanno ingannato la polizia in un furto", "possono sbloccare certi smartphone", "un tribunale le ha accettate come prova"], cat: "animali" },
  { domanda: "Il Paese con più piramidi al mondo non è l'Egitto, ma...", rispostaVera: "il Sudan", balleCasa: ["l'Etiopia", "la Libia", "il Sudafrica"], cat: "storia" },
  { domanda: "Lo stato americano più vicino all'Africa è...", rispostaVera: "il Maine", balleCasa: ["la Florida", "il Texas", "la Georgia"], cat: "mondo" },
  { domanda: "Nel suo primo videogioco, Donkey Kong del 1981, Super Mario si chiamava...", rispostaVera: "Jumpman", balleCasa: ["Hammer-Man", "Mr. Jumpy", "Plumber Joe"], cat: "spettacolo" },
  { domanda: "Un barbiere americano vendette di nascosto, per 3.000 dollari, i capelli tagliati a...", rispostaVera: "Neil Armstrong", balleCasa: ["Muhammad Ali", "John Glenn", "Frank Sinatra"], cat: "scienza" },
  { domanda: "Sotto la pelliccia bianca, la pelle degli orsi polari è...", rispostaVera: "nera", balleCasa: ["rosa", "grigia", "marrone chiaro"], cat: "animali" },
  { domanda: "L'uccellino azzurro di Twitter aveva un nome: si chiamava...", rispostaVera: "Larry", balleCasa: ["Tweety", "Bob", "Blu"], cat: "invenzioni" },
  { domanda: "L'Arabia Saudita, piena di deserti, compra dall'Australia...", rispostaVera: "cammelli", balleCasa: ["cactus", "canguri vivi", "vino bianco"], cat: "animali" },
  { domanda: "Nel 1896, in Inghilterra, il primo automobilista multato per eccesso di velocità andava a...", rispostaVera: "13 km all'ora", balleCasa: ["30 km all'ora", "6 km all'ora", "50 km all'ora"], cat: "storia" },
  { domanda: "L'unica lettera dell'alfabeto che non compare nel nome di nessuno dei 50 stati americani è...", rispostaVera: "la Q", balleCasa: ["la Z", "la X", "la J"], cat: "mondo" },
  { domanda: "Il nome Google viene da «googol», un numero che è...", rispostaVera: "un 1 seguito da cento zeri", balleCasa: ["un milione di miliardi", "un numero senza fine", "il numero dei granelli di sabbia"], cat: "invenzioni" },
  { domanda: "Secondo suo fratello, Pablo Escobar spendeva 2.500 dollari al mese solo per comprare...", rispostaVera: "elastici per le banconote", balleCasa: ["buste di plastica per i soldi", "carta da regalo", "valigette per i soldi"], cat: "storia" },
  { domanda: "Nel 1999 la NASA perse una sonda su Marte da 125 milioni di dollari perché due squadre di ingegneri si erano dimenticate di...", rispostaVera: "usare le stesse unità di misura", balleCasa: ["caricare le batterie", "accendere i motori", "aprire il paracadute"], cat: "scienza" },
  { domanda: "Nel film dei Monty Python sul Sacro Graal non c'erano i soldi per i cavalli: il rumore degli zoccoli lo facevano con...", rispostaVera: "due noci di cocco", balleCasa: ["due tazze da tè", "due scarpe di legno", "due cucchiai"], cat: "spettacolo" },
  { domanda: "Prima delle sveglie, in Inghilterra c'era chi per mestiere svegliava la gente tirando contro le finestre...", rispostaVera: "piselli secchi con una cerbottana", balleCasa: ["noccioline con la fionda", "palline di carta", "sassolini con l'elastico"], cat: "storia" },
  { domanda: "La motosega fu inventata alla fine del Settecento da due medici scozzesi per aiutarli durante...", rispostaVera: "il parto", balleCasa: ["le operazioni ai denti", "la potatura degli alberi", "la costruzione delle navi"], cat: "invenzioni" },
  { domanda: "Nel 1974 il primo prodotto della storia letto col codice a barre alla cassa di un supermercato fu...", rispostaVera: "un pacchetto di gomme da masticare", balleCasa: ["una scatola di cereali", "una lattina di Coca-Cola", "un pacco di biscotti"], cat: "invenzioni" },
  { domanda: "Se un astronauta piange nello spazio, le lacrime non scendono ma...", rispostaVera: "restano attaccate all'occhio", balleCasa: ["evaporano subito", "volano via a bollicine", "scorrono lente fino al mento"], cat: "scienza" },
  { domanda: "Nella Prima guerra mondiale gli inglesi chiamarono i carri armati «tank» per far credere alle spie che fossero...", rispostaVera: "cisterne per l'acqua", balleCasa: ["trattori per i campi", "caldaie per le navi", "pompe antincendio"], cat: "storia" },
  { domanda: "Nel 1998 la Sony dovette modificare migliaia di videocamere perché la modalità notturna permetteva di...", rispostaVera: "vedere attraverso i vestiti", balleCasa: ["vedere i fantasmi", "registrare i sogni", "fotografare le stelle di giorno"], cat: "invenzioni" },
  { domanda: "Nel 2006 un australiano ha messo in vendita su eBay...", rispostaVera: "la Nuova Zelanda", balleCasa: ["la Tasmania", "la Corsica", "l'isola di Pasqua"], cat: "mondo" },
  { domanda: "A Longyearbyen, una cittadina vicino al Polo Nord, dal 1950 è vietato...", rispostaVera: "farsi seppellire", balleCasa: ["piantare alberi", "fare il bagno in mare", "tenere accese le luci di notte"], cat: "mondo" },
  { domanda: "Nel 1995 un uomo rapinò due banche a Pittsburgh convinto di essere invisibile alle telecamere perché si era spalmato in faccia...", rispostaVera: "succo di limone", balleCasa: ["colla", "dentifricio", "maionese"], cat: "storia" },
  { domanda: "La guerra più breve della storia, tra l'Inghilterra e Zanzibar nel 1896, è durata...", rispostaVera: "38 minuti", balleCasa: ["52 minuti", "un'ora e un quarto", "12 minuti"], cat: "storia" },
  { domanda: "Nel 1975 un americano è diventato milionario vendendo sassi in scatole di cartone come se fossero...", rispostaVera: "animali domestici", balleCasa: ["uova di dinosauro", "pietre magiche", "pezzi di Luna"], cat: "invenzioni" },
  { domanda: "Nell'antica Cina un carlino valeva di più se le rughe sulla sua fronte formavano...", rispostaVera: "il simbolo cinese di principe", balleCasa: ["il simbolo cinese di fortuna", "il numero otto", "un drago"], cat: "animali" },
  { domanda: "Il mammifero più trafficato illegalmente al mondo non è l'elefante né il rinoceronte, ma...", rispostaVera: "il pangolino", balleCasa: ["il ghepardo", "il gorilla", "il lemure"], cat: "animali" },
  { domanda: "In una chiesa di Halberstadt, in Germania, dal 2001 suona un brano per organo che finirà nell'anno...", rispostaVera: "2640", balleCasa: ["2540", "2780", "3000"], cat: "spettacolo" },
  { domanda: "In un esperimento, alcuni piccioni hanno imparato a distinguere i quadri di Picasso da quelli di...", rispostaVera: "Monet", balleCasa: ["Renoir", "Cézanne", "Degas"], cat: "animali" },
  { domanda: "Nel naufragio del Titanic il capo panettiere sopravvisse per ore nell'acqua gelida: si dice che fosse perché aveva bevuto tanto...", rispostaVera: "whisky", balleCasa: ["brandy", "rum", "gin"], cat: "storia" },
  { domanda: "Nel 1838 Edgar Allan Poe scrisse di alcuni naufraghi che mangiano un compagno. Nel 1884 successe davvero, e la vittima aveva...", rispostaVera: "lo stesso nome del personaggio di Poe", balleCasa: ["lo stesso compleanno di Poe", "la stessa età del personaggio", "una cicatrice come il personaggio"], cat: "storia" },
  { domanda: "Il volo di linea più corto del mondo, tra due isole della Scozia, dura...", rispostaVera: "un minuto e mezzo", balleCasa: ["dieci minuti", "venti secondi", "tre minuti"], cat: "mondo" },
  { domanda: "Tornati dalla Luna nel 1969, gli astronauti dell'Apollo 11 dovettero dichiarare le rocce lunari...", rispostaVera: "alla dogana delle Hawaii", balleCasa: ["alla dogana di Houston", "al museo di Washington", "alla polizia della Florida"], cat: "scienza" },
  { domanda: "Erno Rubik, l'inventore del cubo di Rubik, per risolverlo la prima volta ci mise...", rispostaVera: "un mese", balleCasa: ["una settimana", "tre mesi", "mezzo anno"], cat: "invenzioni" },
  { domanda: "Nel 2001 la Pizza Hut pagò circa un milione di dollari per consegnare una pizza...", rispostaVera: "sulla Stazione Spaziale", balleCasa: ["sull'Everest", "al Polo Sud", "in fondo al mare"], cat: "invenzioni" },
  { domanda: "Nel 1945 l'ingegnere Percy Spencer capì che le microonde potevano cuocere quando in tasca gli si sciolse...", rispostaVera: "una tavoletta di cioccolato", balleCasa: ["una caramella gommosa", "un panetto di burro", "un gelato"], cat: "invenzioni" },
  { domanda: "Secondo gli scienziati, il profumo dell'erba appena tagliata è il modo in cui le piante...", rispostaVera: "chiedono aiuto", balleCasa: ["si salutano", "avvisano del freddo in arrivo", "attirano le api"], cat: "scienza" },
  { domanda: "I semi di mela, masticati in grandi quantità, sono velenosi perché nella pancia liberano...", rispostaVera: "cianuro", balleCasa: ["arsenico", "mercurio", "piombo"], cat: "scienza" },
  { domanda: "Nella stanza più silenziosa del mondo, nella sede della Microsoft, si sente...", rispostaVera: "il battito del proprio cuore", balleCasa: ["l'eco della propria voce", "i passi di chi cammina sopra", "il ronzio delle lampade"], cat: "scienza" },
  { domanda: "Le dentiere di George Washington non erano di legno: erano fatte di avorio, metallo e...", rispostaVera: "denti umani veri", balleCasa: ["conchiglie", "gesso", "pezzi di madreperla"], cat: "storia" },
  { domanda: "Per colpa della coda e della forma delle zampe, il canguro non riesce a...", rispostaVera: "andare all'indietro", balleCasa: ["nuotare", "saltare da fermo", "stare in piedi a lungo"], cat: "animali" },
  { domanda: "L'occhio dello struzzo è più grande del suo...", rispostaVera: "cervello", balleCasa: ["cuore", "stomaco", "becco"], cat: "animali" },
  { domanda: "Le farfalle sentono il sapore dei fiori con...", rispostaVera: "le zampe", balleCasa: ["le ali", "la pancia", "la schiena"], cat: "animali" },
  { domanda: "Nel 1999 i fondatori di Google provarono a vendere tutta l'azienda per un milione di dollari, ma la società Excite...", rispostaVera: "rifiutò", balleCasa: ["accettò solo metà", "chiese un altro anno per decidere", "non rispose mai"], cat: "invenzioni" },
  { domanda: "Il cuore del gamberetto si trova...", rispostaVera: "nella testa", balleCasa: ["nella coda", "nelle zampe", "sotto la pancia"], cat: "animali" },
  { domanda: "Per riposare senza annegare, i delfini dormono con...", rispostaVera: "un occhio aperto", balleCasa: ["la testa fuori dall'acqua", "la pancia all'aria", "la bocca aperta"], cat: "animali" },
  { domanda: "Il colibrì è l'unico uccello capace di volare...", rispostaVera: "all'indietro", balleCasa: ["sott'acqua", "a testa in giù", "senza muovere le ali"], cat: "animali" },
  { domanda: "Le stelle marine non hanno...", rispostaVera: "il cervello", balleCasa: ["la bocca", "lo stomaco", "lo scheletro"], cat: "animali" },
  { domanda: "Le rane, per riuscire a inghiottire il cibo, si aiutano spingendo giù...", rispostaVera: "gli occhi", balleCasa: ["le dita dei piedi", "i polmoni", "le narici"], cat: "animali" },
  { domanda: "Gli squali esistono da così tanto tempo che sono più antichi...", rispostaVera: "degli alberi", balleCasa: ["delle meduse", "delle spugne di mare", "dei coralli"], cat: "animali" },
  { domanda: "La giraffa, con quel collo lunghissimo, ha nel collo lo stesso numero di vertebre...", rispostaVera: "di un essere umano", balleCasa: ["di un serpente", "di un pollo", "di un cigno"], cat: "animali" },
  { domanda: "Dentro il bozzolo, prima di diventare farfalla, il bruco...", rispostaVera: "si scioglie quasi tutto in una poltiglia", balleCasa: ["dorme sei mesi di fila", "diventa duro come il legno", "si mangia il bozzolo"], cat: "animali" },
  { domanda: "Le formiche non hanno...", rispostaVera: "i polmoni", balleCasa: ["il cuore", "lo stomaco", "il cervello"], cat: "animali" },
  { domanda: "Gli scienziati hanno scoperto che i ratti, quando gli si fa il solletico...", rispostaVera: "ridono", balleCasa: ["starnutiscono", "si arrabbiano", "restano fermi come statue"], cat: "animali" },
  { domanda: "Secondo gli esperimenti degli scienziati, le strisce delle zebre servono soprattutto a...", rispostaVera: "tenere lontani i tafani", balleCasa: ["spaventare i coccodrilli", "riconoscere la mamma", "confondere i leoni"], cat: "animali" },
  { domanda: "Le orche, che in inglese chiamano «balene assassine», in realtà sono...", rispostaVera: "delfini", balleCasa: ["squali", "balene vere", "pesci spada giganti"], cat: "animali" },
  { domanda: "Il pesce rosso non ha la memoria di tre secondi: si ricorda le cose per...", rispostaVera: "mesi", balleCasa: ["un minuto", "trenta secondi", "un'ora"], cat: "animali" },
  { domanda: "L'animale con il morso più forte mai misurato è...", rispostaVera: "il coccodrillo marino", balleCasa: ["il leone", "l'ippopotamo", "la iena"], cat: "animali" },
  { domanda: "I fenicotteri, per filtrare il cibo nell'acqua, mangiano...", rispostaVera: "a testa in giù", balleCasa: ["con gli occhi chiusi", "in volo", "solo all'alba"], cat: "animali" },
  { domanda: "Una piccola medusa, la Turritopsis, è chiamata «immortale» perché...", rispostaVera: "può tornare giovane", balleCasa: ["nessun animale riesce a mangiarla", "resiste a qualsiasi veleno", "vive protetta dentro una conchiglia"], cat: "animali" },
  { domanda: "In bocca, le lumache hanno migliaia di...", rispostaVera: "denti", balleCasa: ["ventose", "peli sottilissimi", "piccoli aculei"], cat: "animali" },
  { domanda: "Il cavalluccio marino è uno dei pochi animali in cui a partorire è...", rispostaVera: "il papà", balleCasa: ["una levatrice del branco", "il figlio più grande", "la mamma, ma solo di notte"], cat: "animali" },
  { domanda: "I gufi non riescono a muovere...", rispostaVera: "gli occhi", balleCasa: ["il collo", "le palpebre", "la lingua"], cat: "animali" },
  { domanda: "Un elefante adulto non riesce a...", rispostaVera: "saltare", balleCasa: ["nuotare", "sdraiarsi", "camminare all'indietro"], cat: "animali" },
  { domanda: "Il bradipo scende dall'albero più o meno una volta alla settimana per...", rispostaVera: "fare la cacca", balleCasa: ["bere", "partorire", "cercare un compagno"], cat: "animali" },
  { domanda: "La lingua del camaleonte può essere lunga...", rispostaVera: "il doppio del suo corpo", balleCasa: ["la metà del suo corpo", "come la sua coda", "come una matita"], cat: "animali" },
  { domanda: "In tutta la sua vita, un'ape produce più o meno...", rispostaVera: "un dodicesimo di cucchiaino di miele", balleCasa: ["un quarto di cucchiaino di miele", "un cucchiaio di miele", "una tazzina di miele"], cat: "animali" },
  { domanda: "Alcune tartarughe d'acqua, sotto il ghiaccio, riescono a respirare anche dal...", rispostaVera: "sedere", balleCasa: ["guscio", "orecchie", "pancia"], cat: "animali" },
  { domanda: "Secondo gli scienziati, tra gli animali di oggi uno dei parenti più stretti del tirannosauro è...", rispostaVera: "la gallina", balleCasa: ["il camaleonte", "la lucertola", "il varano"], cat: "animali" },
  { domanda: "Nel 2006 in Islanda è stata pescata una vongola che aveva...", rispostaVera: "507 anni", balleCasa: ["312 anni", "185 anni", "640 anni"], cat: "animali" },
  { domanda: "Tutti i pesci pagliaccio, come Nemo, nascono...", rispostaVera: "maschi", balleCasa: ["femmine", "tutti neri", "tutti bianchi"], cat: "animali" },
  { domanda: "Gli scoiattoli dimenticano dove hanno nascosto tante ghiande, e così...", rispostaVera: "piantano tanti alberi", balleCasa: ["il bosco diventa più piccolo", "gli alberi crescono storti", "le querce fanno meno ghiande"], cat: "animali" },
  { domanda: "Gli ippopotami fanno un sudore di colore...", rispostaVera: "rosso", balleCasa: ["blu", "verde", "giallo"], cat: "animali" },
  { domanda: "Appena nato, il cucciolo di canguro è grande...", rispostaVera: "come un fagiolo", balleCasa: ["come una noce", "come un topolino", "come una mela"], cat: "animali" },
  { domanda: "Il papà pinguino imperatore, per tenere al caldo l'uovo...", rispostaVera: "lo tiene sui piedi per due mesi", balleCasa: ["lo seppellisce nella neve", "lo copre di piume", "ci dorme sopra di pancia"], cat: "animali" },
  { domanda: "In Italia è vietato cercare i tartufi con i maiali perché...", rispostaVera: "rovinano il terreno", balleCasa: ["fanno troppo rumore", "sono animali protetti", "attirano i lupi"], cat: "italia" },
  { domanda: "Il gorilla Koko, che parlava con i gesti, come animale domestico aveva...", rispostaVera: "un gattino", balleCasa: ["un pappagallo", "un coniglio nano", "un pesce rosso"], cat: "animali" },
  { domanda: "Il cane Hachiko aspettò il padrone, ormai morto, alla stazione di Shibuya, a Tokyo, per...", rispostaVera: "quasi dieci anni", balleCasa: ["tre anni", "più di sette anni", "quasi quindici anni"], cat: "animali" },
  { domanda: "Il gatto più vecchio mai esistito, l'americana Creme Puff, è vissuto...", rispostaVera: "38 anni", balleCasa: ["31 anni", "27 anni", "43 anni"], cat: "animali" },
  { domanda: "Il cane più vecchio di cui si conosce l'età con certezza, l'australiano Bluey, è vissuto...", rispostaVera: "29 anni", balleCasa: ["24 anni", "33 anni", "27 anni"], cat: "animali" },
  { domanda: "I koala possono dormire fino a ___ ore al giorno.", rispostaVera: "22", balleCasa: ["8", "12", "14"], cat: "animali" },
  { domanda: "Gli antichi Romani, per sbiancare i denti, facevano gli sciacqui con...", rispostaVera: "la pipì", balleCasa: ["il vino", "l'aceto", "il latte di capra"], cat: "storia" },
  { domanda: "Nell'antico Egitto, quando moriva il gatto di casa, tutta la famiglia per il lutto...", rispostaVera: "si radeva le sopracciglia", balleCasa: ["digiunava una settimana", "si vestiva di bianco", "dormiva per terra per un mese"], cat: "storia" },
  { domanda: "La Torre di Pisa ha cominciato a pendere...", rispostaVera: "mentre la stavano costruendo", balleCasa: ["dopo un terremoto", "durante la Seconda guerra mondiale", "dopo una grande alluvione"], cat: "italia" },
  { domanda: "Gli elmi con le corna dei Vichinghi, che in realtà non li portavano, sono diventati famosi grazie a...", rispostaVera: "un costumista dell'opera", balleCasa: ["un pittore italiano", "un regista di Hollywood", "un archeologo inglese"], cat: "storia" },
  { domanda: "Il presidente americano Abraham Lincoln da giovane era un campione di...", rispostaVera: "lotta libera", balleCasa: ["pugilato", "scacchi", "corsa a ostacoli"], cat: "storia" },
  { domanda: "Alle Olimpiadi di Parigi del 1900 c'era anche la gara di tiro a...", rispostaVera: "piccioni vivi", balleCasa: ["piattelli di argilla", "conigli vivi", "bottiglie di vetro"], cat: "spettacolo" },
  { domanda: "Alle Olimpiadi del 1900, nella Senna, si fece una gara di...", rispostaVera: "nuoto a ostacoli", balleCasa: ["tuffi da un ponte", "regate di canoa", "nuoto con i vestiti"], cat: "spettacolo" },
  { domanda: "Leonardo da Vinci scriveva i suoi appunti...", rispostaVera: "al contrario, da destra a sinistra", balleCasa: ["in un codice di numeri", "solo col carboncino", "in greco antico"], cat: "storia" },
  { domanda: "Michelangelo ha dipinto il soffitto della Cappella Sistina...", rispostaVera: "in piedi", balleCasa: ["sdraiato sulla schiena", "appeso a delle corde", "seduto su una piattaforma mobile"], cat: "italia" },
  { domanda: "Quando nel 1911 rubarono la Gioconda, tra i sospettati interrogati dalla polizia c'era...", rispostaVera: "Pablo Picasso", balleCasa: ["Claude Monet", "Edgar Degas", "Gabriele D'Annunzio"], cat: "storia" },
  { domanda: "Nel Medioevo i medici, per capire che malattia avevi, a volte...", rispostaVera: "assaggiavano la tua pipì", balleCasa: ["ti annusavano i capelli", "ti misuravano la lunghezza delle dita", "ti leggevano le unghie"], cat: "storia" },
  { domanda: "Gli antichi Romani mangiavano come prelibatezza...", rispostaVera: "ghiri ripieni", balleCasa: ["lucertole fritte", "occhi di pecora", "ranocchi in salsa di miele"], cat: "storia" },
  { domanda: "In Russia lo zar Pietro il Grande mise una tassa sulla...", rispostaVera: "barba", balleCasa: ["pancia", "risata", "neve"], cat: "storia" },
  { domanda: "Nell'Inghilterra del Settecento c'era una tassa sulle ___, e tanti le murarono per non pagarla.", rispostaVera: "finestre", balleCasa: ["porte", "scale", "tende"], cat: "storia" },
  { domanda: "Appena costruita, la Statua della Libertà era di colore...", rispostaVera: "rame lucido, come una pentola", balleCasa: ["bianco marmo", "oro", "grigio scuro"], cat: "mondo" },
  { domanda: "Il primo essere vivente mandato apposta nello spazio, nel 1947, era...", rispostaVera: "un gruppo di moscerini", balleCasa: ["una scimmia", "un topo", "un ragno"], cat: "scienza" },
  { domanda: "Il primo gatto andato nello spazio, nel 1963, era francese e si chiamava...", rispostaVera: "Félicette", balleCasa: ["Minou", "Fifì", "Pompon"], cat: "animali" },
  { domanda: "Tornando dallo spazio nel 1961, Jurij Gagarin atterrò...", rispostaVera: "col paracadute, davanti a una contadina", balleCasa: ["impigliato sugli alberi di un bosco", "in un campo di girasoli", "dentro un lago gelato"], cat: "storia" },
  { domanda: "Prima di Roma, la capitale d'Italia è stata...", rispostaVera: "Torino e poi Firenze", balleCasa: ["Milano", "Napoli", "Milano e poi Firenze"], cat: "italia" },
  { domanda: "Il Colosseo, secondo gli storici, nei primi anni si poteva riempire d'acqua per...", rispostaVera: "finte battaglie navali", balleCasa: ["gare di nuoto", "spettacoli con i delfini", "allenare i gladiatori al nuoto"], cat: "italia" },
  { domanda: "Nel 1962 in Tanzania le scuole chiusero per un'epidemia di...", rispostaVera: "risate", balleCasa: ["singhiozzo", "sbadigli", "starnuti"], cat: "mondo" },
  { domanda: "Negli anni '50 gli Stati Uniti studiarono un piano per far esplodere sulla Luna...", rispostaVera: "una bomba atomica", balleCasa: ["un faro potentissimo", "una bandiera enorme", "fuochi d'artificio giganti"], cat: "storia" },
  { domanda: "Nel 1957 la TV inglese BBC, per un pesce d'aprile, mandò un servizio dalla Svizzera su...", rispostaVera: "gli spaghetti che crescono sugli alberi", balleCasa: ["le mucche che fanno il cioccolato", "i formaggi che volano", "gli orologi che crescono nei campi"], cat: "spettacolo" },
  { domanda: "Durante la Seconda guerra mondiale, i servizi segreti inglesi nascosero nelle scatole del Monopoli per i prigionieri...", rispostaVera: "mappe, bussole e soldi veri", balleCasa: ["cioccolato", "sigarette e caramelle", "lettere dei parenti"], cat: "storia" },
  { domanda: "Il gioco del Monopoli nasce da un gioco inventato per spiegare...", rispostaVera: "che arricchirsi con gli affitti è ingiusto", balleCasa: ["come si diventa ricchi", "la matematica ai bambini", "come funziona una banca"], cat: "invenzioni" },
  { domanda: "La Torre Eiffel, quando fu costruita, doveva restare in piedi solo...", rispostaVera: "20 anni", balleCasa: ["10 anni", "30 anni", "50 anni"], cat: "mondo" },
  { domanda: "Il Big Ben, a Londra, in realtà è il nome...", rispostaVera: "della campana", balleCasa: ["dell'orologio", "della torre", "del primo custode"], cat: "mondo" },
  { domanda: "Nel 1966, a Londra, la Coppa del Mondo di calcio fu rubata. A ritrovarla, sotto una siepe, fu...", rispostaVera: "un cane di nome Pickles", balleCasa: ["un bambino in bicicletta", "un netturbino", "un pescatore"], cat: "spettacolo" },
  { domanda: "Durante la Seconda guerra mondiale la Coppa del Mondo di calcio fu nascosta in Italia...", rispostaVera: "in una scatola di scarpe sotto un letto", balleCasa: ["nel forno di una pizzeria", "dentro una statua", "in fondo a un pozzo"], cat: "spettacolo" },
  { domanda: "Nel 2011 un'anziana signora in Georgia, scavando in cerca di rame...", rispostaVera: "lasciò senza internet l'Armenia", balleCasa: ["trovò un tesoro romano", "scoprì un dinosauro", "fece saltare l'acquedotto"], cat: "mondo" },
  { domanda: "In Olanda, negli ultimi anni, alcune prigioni hanno chiuso perché...", rispostaVera: "mancavano i detenuti", balleCasa: ["mancavano le guardie", "i vicini non le volevano più", "il governo non aveva più i soldi"], cat: "mondo" },
  { domanda: "Prima di chiamarsi Nutella, la crema della Ferrero si chiamava...", rispostaVera: "Supercrema", balleCasa: ["Cioccolella", "Spalmì", "Crema Alba"], cat: "invenzioni" },
  { domanda: "Il Bacio Perugina all'inizio aveva un altro nome: si chiamava...", rispostaVera: "Cazzotto", balleCasa: ["Bacetto", "Nocciolino", "Pugnetto"], cat: "invenzioni" },
  { domanda: "Quando arrivò dall'America, in Italia il pomodoro all'inizio si usava...", rispostaVera: "come pianta ornamentale", balleCasa: ["medicina per la tosse", "per tingere i vestiti", "come cibo per i maiali"], cat: "italia" },
  { domanda: "Carlo Collodi, il papà di Pinocchio, in realtà si chiamava...", rispostaVera: "Carlo Lorenzini", balleCasa: ["Pietro Bianchi", "Mario Toscani", "Antonio Lorenzetti"], cat: "italia" },
  { domanda: "Sul Duomo di Milano ci sono più di...", rispostaVera: "3.400 statue", balleCasa: ["1.200 statue", "2.100 statue", "5.200 statue"], cat: "italia" },
  { domanda: "La prima autostrada del mondo è stata costruita in Italia, nel 1924, tra...", rispostaVera: "Milano e Varese", balleCasa: ["Roma e Ostia", "Torino e Milano", "Napoli e Pompei"], cat: "italia" },
  { domanda: "Il pianoforte è stato inventato a...", rispostaVera: "Firenze", balleCasa: ["Vienna", "Venezia", "Milano"], cat: "italia" },
  { domanda: "Il cavallino nero della Ferrari era dipinto sull'aereo di...", rispostaVera: "un pilota della Prima guerra mondiale", balleCasa: ["un generale di cavalleria", "un campione di equitazione", "una nobile famiglia di Modena"], cat: "invenzioni" },
  { domanda: "Al Palio di Siena può vincere anche...", rispostaVera: "un cavallo senza fantino", balleCasa: ["il fantino a piedi", "una contrada senza cavallo", "un cavallo che arriva ultimo"], cat: "italia" },
  { domanda: "Prima di costruire automobili, Ferruccio Lamborghini costruiva...", rispostaVera: "trattori", balleCasa: ["biciclette", "frigoriferi", "aerei"], cat: "invenzioni" },
  { domanda: "Il gioco del Lotto in Italia è nato a...", rispostaVera: "Genova", balleCasa: ["Napoli", "Venezia", "Roma"], cat: "italia" },
  { domanda: "Nella Smorfia napoletana il numero 90 è...", rispostaVera: "la paura", balleCasa: ["la fortuna", "la festa", "la fame"], cat: "italia" },
  { domanda: "Secondo la leggenda di Castelfranco Emilia, il tortellino ha la forma...", rispostaVera: "dell'ombelico di Venere", balleCasa: ["di una conchiglia", "dell'orecchio di un gatto", "di una luna crescente"], cat: "italia" },
  { domanda: "Il dito medio di Galileo Galilei oggi si trova...", rispostaVera: "in un museo di Firenze", balleCasa: ["in Vaticano", "in una chiesa di Pisa", "in un museo di Londra"], cat: "storia" },
  { domanda: "In Italia una banca accetta come garanzia per i prestiti...", rispostaVera: "forme di Parmigiano", balleCasa: ["bottiglie di vino", "prosciutti crudi", "sacchi di riso"], cat: "italia" },
  { domanda: "La bandiera tricolore italiana è nata nel 1797 a...", rispostaVera: "Reggio Emilia", balleCasa: ["Torino", "Milano", "Bologna"], cat: "italia" },
  { domanda: "La parola «ciao» viene dal veneziano «s-ciào vostro», che voleva dire...", rispostaVera: "sono vostro schiavo", balleCasa: ["sono vostro debitore", "sono vostro prigioniero", "sono il vostro barcaiolo"], cat: "invenzioni" },
  { domanda: "La parola «tifoso» viene da...", rispostaVera: "il tifo, la malattia", balleCasa: ["Tifone, un mostro greco", "un vento forte", "un grido di battaglia greco"], cat: "invenzioni" },
  { domanda: "Il simbolo dell'Alfa Romeo ha un biscione che...", rispostaVera: "sta mangiando un uomo", balleCasa: ["sputa fuoco", "si morde la coda", "ha una corona in testa"], cat: "invenzioni" },
  { domanda: "La pizza Margherita deve il suo nome a...", rispostaVera: "una regina", balleCasa: ["la fidanzata del pizzaiolo", "un fiore di campo", "una cantante napoletana"], cat: "italia" },
  { domanda: "Le monetine che i turisti lanciano ogni anno nella Fontana di Trevi vanno in beneficenza e valgono circa...", rispostaVera: "un milione e mezzo di euro", balleCasa: ["50.000 euro", "10 milioni di euro", "200.000 euro"], cat: "italia" },
  { domanda: "Secondo una classifica del 2014, il Vaticano era lo Stato dove a testa si beveva più...", rispostaVera: "vino", balleCasa: ["caffè", "birra", "tè"], cat: "mondo" },
  { domanda: "Il bancomat del Vaticano, oltre all'italiano e all'inglese, ha le istruzioni anche in...", rispostaVera: "latino", balleCasa: ["greco antico", "polacco", "ebraico"], cat: "mondo" },
  { domanda: "Secondo la leggenda, il panettone si chiama così perché lo inventò per sbaglio un garzone di cucina di nome...", rispostaVera: "Toni", balleCasa: ["Beppe", "Gino", "Nane"], cat: "italia" },
  { domanda: "Le fettuccine Alfredo, famosissime in America e quasi sconosciute da noi, le inventò un cuoco di Roma per...", rispostaVera: "sua moglie che aveva appena partorito", balleCasa: ["sua madre che era malata", "un cliente senza denti", "il compleanno di suo figlio"], cat: "italia" },
  { domanda: "Sul simbolo della Lamborghini c'è un toro perché Ferruccio Lamborghini...", rispostaVera: "era del segno del Toro", balleCasa: ["allevava tori in campagna", "era il simbolo del suo paese", "lo disegnò suo figlio da bambino"], cat: "invenzioni" },
  { domanda: "A Bologna, sotto il Voltone del Podestà, se sussurri rivolto a un angolo...", rispostaVera: "ti sentono dall'angolo opposto", balleCasa: ["senti l'eco tre volte", "la voce ti torna indietro", "senti solo il vento"], cat: "italia" },
  { domanda: "La prima macchina per fare il caffè espresso fu brevettata nel 1884 a...", rispostaVera: "Torino", balleCasa: ["Napoli", "Trieste", "Milano"], cat: "invenzioni" },
  { domanda: "L'ometto coi baffi disegnato sulla moka Bialetti è la caricatura di...", rispostaVera: "Renato Bialetti, il figlio del fondatore", balleCasa: ["un barista di Napoli", "il primo cliente della moka", "un comico della radio"], cat: "invenzioni" },
  { domanda: "L'Ogliastra, in Sardegna, è famosa in tutto il mondo perché ci vivono tantissimi...", rispostaVera: "centenari", balleCasa: ["fenicotteri rosa", "cantanti lirici", "pastori poeti"], cat: "italia" },
  { domanda: "Sull'isola dell'Asinara, in Sardegna, vivono degli asinelli tutti...", rispostaVera: "bianchi", balleCasa: ["neri", "nani", "grigi"], cat: "animali" },
  { domanda: "La parola «pizza» compare per la prima volta in un documento dell'anno 997, scritto a...", rispostaVera: "Gaeta", balleCasa: ["Napoli", "Amalfi", "Roma"], cat: "italia" },
  { domanda: "Per fare una sola forma di Parmigiano Reggiano servono circa...", rispostaVera: "550 litri di latte", balleCasa: ["220 litri di latte", "800 litri di latte", "1.500 litri di latte"], cat: "italia" },
  { domanda: "Il primo Festival di Sanremo, nel 1951, si poteva seguire solo...", rispostaVera: "alla radio", balleCasa: ["al cinema", "in televisione in bianco e nero", "dentro il casinò"], cat: "spettacolo" },
  { domanda: "La Mole Antonelliana, il simbolo di Torino, all'inizio doveva essere...", rispostaVera: "una sinagoga", balleCasa: ["un teatro lirico", "un osservatorio per le stelle", "il campanile più alto d'Europa"], cat: "italia" },
  { domanda: "Quando costruirono il grattacielo Pirelli, più alto del Duomo di Milano, sul tetto misero...", rispostaVera: "una copia della Madonnina", balleCasa: ["una statua di Sant'Ambrogio", "un orologio gigante", "una bandiera tricolore"], cat: "italia" },
  { domanda: "San Valentino, il santo degli innamorati, era vescovo di...", rispostaVera: "Terni", balleCasa: ["Verona", "Assisi", "Padova"], cat: "storia" },
  { domanda: "Ogni anno a Verona arrivano migliaia di lettere indirizzate a Giulietta e...", rispostaVera: "dei volontari rispondono a tutte", balleCasa: ["finiscono in un museo", "il sindaco risponde a tutte", "tornano indietro al mittente"], cat: "italia" },
  { domanda: "Si racconta che i trulli di Alberobello si facevano senza malta per poterli smontare quando arrivavano...", rispostaVera: "gli esattori delle tasse", balleCasa: ["i terremoti", "i briganti", "i pirati turchi"], cat: "italia" },
  { domanda: "Antonio Meucci perse il brevetto del telefono perché non aveva i soldi per rinnovarlo: costava...", rispostaVera: "10 dollari", balleCasa: ["30 dollari", "250 dollari", "1.000 dollari"], cat: "invenzioni" },
  { domanda: "Quando nel 1937 morì Guglielmo Marconi, le radio di tutto il mondo...", rispostaVera: "restarono in silenzio per due minuti", balleCasa: ["suonarono l'inno italiano", "si spensero per un giorno", "trasmisero la sua voce"], cat: "storia" },
  { domanda: "Sull'ultima banconota da 1.000 lire, prima dell'euro, c'era il volto di...", rispostaVera: "Maria Montessori", balleCasa: ["Dante Alighieri", "Gabriele D'Annunzio", "Rita Levi-Montalcini"], cat: "storia" },
  { domanda: "Nell'area sacra di Largo Argentina, a Roma, dove oggi vive una colonia di gatti, fu ucciso...", rispostaVera: "Giulio Cesare", balleCasa: ["Nerone", "Caligola", "Romolo"], cat: "storia" },
  { domanda: "Il Pantheon di Roma ha un grande buco nel tetto: quando piove, l'acqua...", rispostaVera: "entra e scappa dai buchi nel pavimento", balleCasa: ["non entra per colpa dell'aria calda", "evapora prima di toccare terra", "resta sul pavimento e si asciuga piano"], cat: "italia" },
  { domanda: "Per entrare nella Guardia Svizzera del Papa bisogna essere svizzeri, cattolici, celibi e alti almeno...", rispostaVera: "un metro e 74", balleCasa: ["un metro e 90", "un metro e 60", "un metro e 80"], cat: "italia" },
  { domanda: "Venezia è costruita sopra milioni di...", rispostaVera: "pali di legno piantati nel fango", balleCasa: ["blocchi di marmo", "sacchi di sabbia", "mattoni di argilla"], cat: "italia" },
  { domanda: "La parola «tramezzino» l'ha inventata...", rispostaVera: "Gabriele D'Annunzio", balleCasa: ["un barista di Torino", "Giacomo Puccini", "Pellegrino Artusi"], cat: "italia" },
  { domanda: "Il nome dei Ferrero Rocher viene da...", rispostaVera: "una grotta di Lourdes", balleCasa: ["un pasticcere francese", "una montagna svizzera", "la parola roccia in piemontese"], cat: "invenzioni" },
  { domanda: "Lo spritz nasce nell'Ottocento quando i soldati austriaci a Venezia...", rispostaVera: "allungavano il vino con l'acqua frizzante", balleCasa: ["mescolavano la birra con l'arancia", "allungavano il vino col succo di limone", "ghiacciavano il vino con la neve"], cat: "italia" },
  { domanda: "Quando al tramonto le Dolomiti diventano rosa, in ladino si dice...", rispostaVera: "enrosadira", balleCasa: ["rosaleda", "tramontina", "rossolina"], cat: "italia" },
  { domanda: "La Juventus all'inizio giocava in maglia rosa; le maglie bianconere arrivarono per caso da...", rispostaVera: "una squadra inglese di Nottingham", balleCasa: ["un sarto di Milano", "un collegio di preti", "una squadra di rugby scozzese"], cat: "spettacolo" },
  { domanda: "Il Milan si chiama Milan, e non Milano, perché tra i suoi fondatori c'erano...", rispostaVera: "degli inglesi", balleCasa: ["dei francesi", "dei marinai genovesi", "degli svizzeri"], cat: "spettacolo" },
  { domanda: "Agli Europei di calcio del 1968, l'Italia vinse la semifinale contro l'Unione Sovietica...", rispostaVera: "col lancio di una monetina", balleCasa: ["ai calci di rigore", "con un autogol all'ultimo minuto", "con un gol ai supplementari"], cat: "spettacolo" },
  { domanda: "Nei primi Giri d'Italia del dopoguerra, anche l'ultimo in classifica aveva la sua maglia: era...", rispostaVera: "nera", balleCasa: ["marrone", "grigia", "viola"], cat: "spettacolo" },
  { domanda: "La squadra di calcio più antica d'Italia ancora in attività è...", rispostaVera: "il Genoa", balleCasa: ["il Torino", "la Pro Vercelli", "la Juventus"], cat: "spettacolo" },
  { domanda: "Nel corpo umano c'è abbastanza ferro per fare...", rispostaVera: "un chiodo piccolo", balleCasa: ["una forchetta", "una chiave di casa", "un cucchiaio"], cat: "scienza" },
  { domanda: "Un neonato ha circa ___ ossa; un adulto ne ha 206.", rispostaVera: "300", balleCasa: ["150", "180", "500"], cat: "scienza" },
  { domanda: "Nello spazio, senza la gravità che li schiaccia, gli astronauti diventano...", rispostaVera: "più alti di qualche centimetro", balleCasa: ["più bassi di qualche centimetro", "più larghi di spalle", "più grassi di qualche chilo"], cat: "scienza" },
  { domanda: "In un giorno il cuore umano batte circa...", rispostaVera: "100.000 volte", balleCasa: ["10.000 volte", "un milione di volte", "5.000 volte"], cat: "scienza" },
  { domanda: "Una di quelle nuvole bianche e soffici, tutta l'acqua che contiene, può pesare...", rispostaVera: "più di 500 tonnellate", balleCasa: ["come un elefante", "come una balena", "come un camion carico"], cat: "scienza" },
  { domanda: "Un fulmine, per un attimo, scalda l'aria fino a...", rispostaVera: "cinque volte la superficie del Sole", balleCasa: ["due volte la superficie del Sole", "il caldo della lava di un vulcano", "il caldo del centro della Terra"], cat: "scienza" },
  { domanda: "Le banane, per colpa del potassio che contengono, sono leggermente...", rispostaVera: "radioattive", balleCasa: ["magnetiche", "elettriche", "velenose"], cat: "scienza" },
  { domanda: "Per i botanici, la banana è...", rispostaVera: "una bacca", balleCasa: ["una noce", "un legume", "una drupa"], cat: "scienza" },
  { domanda: "La Terra gira sempre più piano: 70 milioni di anni fa, coi dinosauri, un giorno durava...", rispostaVera: "23 ore e mezza", balleCasa: ["21 ore", "26 ore", "19 ore e mezza"], cat: "scienza" },
  { domanda: "Su Marte il tramonto è di colore...", rispostaVera: "blu", balleCasa: ["verde", "viola", "rosso fuoco"], cat: "scienza" },
  { domanda: "Secondo gli scienziati, dentro Giove e Saturno potrebbe piovere...", rispostaVera: "diamanti", balleCasa: ["rubini", "sassolini di ghiaccio", "sabbia incandescente"], cat: "scienza" },
  { domanda: "Ogni anno la Luna si allontana dalla Terra di...", rispostaVera: "quasi 4 centimetri", balleCasa: ["circa 12 centimetri", "mezzo metro", "un millimetro"], cat: "scienza" },
  { domanda: "Un cucchiaino della materia di una stella di neutroni pesa...", rispostaVera: "miliardi di tonnellate", balleCasa: ["milioni di tonnellate", "come una nave da crociera", "come la Torre Eiffel"], cat: "scienza" },
  { domanda: "Se mettessimo il monte Everest nel punto più profondo dell'oceano...", rispostaVera: "la cima resterebbe sott'acqua", balleCasa: ["spunterebbe di un chilometro", "arriverebbe a filo dell'acqua", "spunterebbe come un'isoletta"], cat: "scienza" },
  { domanda: "Le unghie delle mani crescono...", rispostaVera: "più veloci di quelle dei piedi", balleCasa: ["più piano di quelle dei piedi", "più veloci quando fa freddo", "più veloci nel dito mignolo"], cat: "scienza" },
  { domanda: "I girasoli giovani seguono il sole durante il giorno e di notte...", rispostaVera: "tornano a girarsi verso est", balleCasa: ["restano girati verso ovest", "si girano verso nord", "si abbassano e dormono"], cat: "scienza" },
  { domanda: "Certi tipi di bambù riescono a crescere...", rispostaVera: "quasi un metro in un giorno", balleCasa: ["un metro all'anno", "dieci centimetri al giorno", "tre metri in un giorno"], cat: "scienza" },
  { domanda: "Il pino più vecchio del mondo, in California, ha più di...", rispostaVera: "4.800 anni", balleCasa: ["5.600 anni", "6.500 anni", "7.800 anni"], cat: "scienza" },
  { domanda: "Il profumo della terra dopo la pioggia ha un nome: si chiama...", rispostaVera: "petricore", balleCasa: ["pluvioro", "terracolo", "umidore"], cat: "scienza" },
  { domanda: "Gli scienziati pensano che migliaia di anni fa tutti gli esseri umani avessero gli occhi...", rispostaVera: "marroni", balleCasa: ["verdi", "grigi", "blu"], cat: "scienza" },
  { domanda: "Il singhiozzo più lungo della storia, quello dell'americano Charles Osborne, è durato...", rispostaVera: "68 anni", balleCasa: ["22 anni", "41 anni", "57 anni"], cat: "scienza" },
  { domanda: "Se si togliesse il sale dagli oceani e lo si spargesse sulle terre emerse, farebbe uno strato alto...", rispostaVera: "più di 150 metri", balleCasa: ["circa 30 metri", "quasi 500 metri", "come un palazzo di tre piani"], cat: "scienza" },
  { domanda: "Il Sole è così grande che dentro ci starebbero...", rispostaVera: "più di un milione di Terre", balleCasa: ["centomila Terre", "dieci milioni di Terre", "un miliardo di Terre"], cat: "scienza" },
  { domanda: "La Stazione Spaziale Internazionale fa il giro completo della Terra in circa...", rispostaVera: "un'ora e mezza", balleCasa: ["tre ore", "mezz'ora", "un giorno"], cat: "scienza" },
  { domanda: "Secondo gli astronauti dell'Apollo, la polvere della Luna ha l'odore...", rispostaVera: "della polvere da sparo", balleCasa: ["della candeggina", "dell'erba bagnata", "del metallo arrugginito"], cat: "scienza" },
  { domanda: "Il vulcano più alto del Sistema solare, l'Olympus Mons su Marte, è alto più o meno...", rispostaVera: "due volte e mezza l'Everest", balleCasa: ["una volta e mezza l'Everest", "cinque volte l'Everest", "dieci volte l'Everest"], cat: "scienza" },
  { domanda: "Il fegato è l'unico organo che...", rispostaVera: "ricresce se ne togli un pezzo", balleCasa: ["non invecchia mai", "funziona anche senza ossigeno", "continua a crescere fino a 90 anni"], cat: "scienza" },
  { domanda: "Il cervello pesa poco più di un chilo ma da solo consuma circa...", rispostaVera: "il 20% dell'energia del corpo", balleCasa: ["il 2% dell'energia del corpo", "metà dell'energia del corpo", "il 5% dell'energia del corpo"], cat: "scienza" },
  { domanda: "Ogni giorno, senza accorgercene, perdiamo circa...", rispostaVera: "cento capelli", balleCasa: ["venti capelli", "trecento capelli", "mille capelli"], cat: "scienza" },
  { domanda: "Le persone sono un po' più alte...", rispostaVera: "al mattino che alla sera", balleCasa: ["la sera che al mattino", "dopo pranzo", "quando fa freddo"], cat: "scienza" },
  { domanda: "I denti sono l'unica parte del corpo che...", rispostaVera: "non si ripara da sola", balleCasa: ["non sente il dolore", "cresce per tutta la vita", "non invecchia mai"], cat: "scienza" },
  { domanda: "In un anno, i capelli crescono più o meno...", rispostaVera: "15 centimetri", balleCasa: ["5 centimetri", "30 centimetri", "50 centimetri"], cat: "scienza" },
  { domanda: "La prima webcam della storia, nel 1991 all'università di Cambridge, inquadrava...", rispostaVera: "una macchinetta del caffè", balleCasa: ["un acquario di pesci", "un gatto che dormiva", "il parcheggio dell'università"], cat: "invenzioni" },
  { domanda: "Il primo SMS della storia, mandato nel 1992, diceva...", rispostaVera: "Buon Natale", balleCasa: ["Ciao, mi senti?", "Prova prova", "Sono io, rispondi"], cat: "invenzioni" },
  { domanda: "Il primo video caricato su YouTube, nel 2005, mostra uno dei fondatori...", rispostaVera: "allo zoo, davanti agli elefanti", balleCasa: ["in un parco con il suo cane", "su un traghetto davanti al mare", "in un negozio di giocattoli"], cat: "invenzioni" },
  { domanda: "Per anni l'emoji più usata al mondo è stata...", rispostaVera: "la faccina che ride con le lacrime", balleCasa: ["il cuore rosso", "il pollice in su", "la faccina che manda un bacio"], cat: "invenzioni" },
  { domanda: "Il nome Bluetooth, «dente blu», viene da...", rispostaVera: "un re vichingo", balleCasa: ["un re scozzese", "un pirata danese", "un cantastorie norvegese"], cat: "invenzioni" },
  { domanda: "La sigla Wi-Fi, in realtà...", rispostaVera: "non vuol dire niente", balleCasa: ["vuol dire Wireless Fidelity", "vuol dire Wireless Finder", "vuol dire filo invisibile"], cat: "invenzioni" },
  { domanda: "Nel 1947, in un computer di Harvard che non funzionava, trovarono il primo vero «bug»: era...", rispostaVera: "una falena", balleCasa: ["uno scarafaggio", "un ragnetto", "una zanzara"], cat: "invenzioni" },
  { domanda: "In Olanda il simbolo @, che noi chiamiamo chiocciola, si chiama...", rispostaVera: "coda di scimmia", balleCasa: ["orecchio di gatto", "coda di cane", "tromba d'elefante"], cat: "invenzioni" },
  { domanda: "Prima di chiamarsi Google, il motore di ricerca si chiamava...", rispostaVera: "BackRub", balleCasa: ["SearchMe", "Lookie", "NetHunter"], cat: "invenzioni" },
  { domanda: "All'inizio Amazon doveva chiamarsi...", rispostaVera: "Cadabra", balleCasa: ["Bookland", "NetShop", "Rio"], cat: "invenzioni" },
  { domanda: "Il primo telefono cellulare, nel 1973, pesava...", rispostaVera: "circa un chilo", balleCasa: ["circa due chili", "mezzo chilo", "quasi cinque chili"], cat: "invenzioni" },
  { domanda: "Prima di fare l'idraulico, nel suo primo gioco Super Mario faceva...", rispostaVera: "il carpentiere", balleCasa: ["il pizzaiolo", "il postino", "il tassista"], cat: "spettacolo" },
  { domanda: "Il videogioco Tetris è stato inventato nel 1984 in...", rispostaVera: "Unione Sovietica", balleCasa: ["Giappone", "America", "Svezia"], cat: "spettacolo" },
  { domanda: "Il personaggio di Pac-Man è nato guardando...", rispostaVera: "una pizza a cui mancava una fetta", balleCasa: ["una moneta", "la luna piena", "una forma di formaggio"], cat: "spettacolo" },
  { domanda: "Sonic, il porcospino dei videogiochi, è blu perché...", rispostaVera: "è il colore del logo della Sega", balleCasa: ["il suo creatore era daltonico", "si vedeva meglio sul televisore", "era il colore del mare di Okinawa"], cat: "spettacolo" },
  { domanda: "Il nome Pokémon è l'accorciatura giapponese di due parole inglesi che vogliono dire...", rispostaVera: "mostri tascabili", balleCasa: ["piccoli amici", "animali magici", "poteri magici"], cat: "spettacolo" },
  { domanda: "Paperino, in America, ha anche un secondo nome: si chiama Donald ___ Duck.", rispostaVera: "Fauntleroy", balleCasa: ["Quackington", "Wilbur", "Ferdinand"], cat: "spettacolo" },
  { domanda: "Ken, il fidanzato di Barbie, si chiama così come...", rispostaVera: "il figlio della sua inventrice", balleCasa: ["il marito della sua inventrice", "un attore famoso", "il primo cliente"], cat: "invenzioni" },
  { domanda: "Nel film Psycho del 1960, per il sangue della famosa scena della doccia, usarono...", rispostaVera: "sciroppo di cioccolato", balleCasa: ["succo di pomodoro", "vernice rossa", "ketchup"], cat: "spettacolo" },
  { domanda: "Il rumore delle spade laser di Guerre Stellari è stato fatto mescolando il ronzio di...", rispostaVera: "un proiettore e un televisore", balleCasa: ["un aspirapolvere e un violino", "un alveare", "un rasoio elettrico"], cat: "spettacolo" },
  { domanda: "Il primo libro di Harry Potter fu rifiutato da...", rispostaVera: "12 editori", balleCasa: ["7 editori", "20 editori", "30 editori"], cat: "spettacolo" },
  { domanda: "L'autrice di Harry Potter ebbe l'idea del maghetto mentre...", rispostaVera: "era su un treno in ritardo", balleCasa: ["era al cinema", "passeggiava in un parco", "guardava la neve"], cat: "spettacolo" },
  { domanda: "La canzone «Tanti auguri a te», fino al 2016, era...", rispostaVera: "protetta dai diritti d'autore", balleCasa: ["vietata nelle scuole", "cantata solo in inglese", "proibita nei film"], cat: "spettacolo" },
  { domanda: "Il verso del tirannosauro di Jurassic Park è fatto anche col verso...", rispostaVera: "di un cucciolo di elefante", balleCasa: ["di un gatto arrabbiato", "di una pecora", "di una mucca"], cat: "spettacolo" },
  { domanda: "In Jurassic Park, alcuni versi dei velociraptor sono in realtà...", rispostaVera: "tartarughe che si accoppiano", balleCasa: ["galline spaventate", "un violino stonato", "un neonato che piange"], cat: "spettacolo" },
  { domanda: "Il cognome di Mario e Luigi, secondo la Nintendo, è...", rispostaVera: "Mario", balleCasa: ["Rossi", "Bros", "Esposito"], cat: "spettacolo" },
  { domanda: "In «Ritorno al futuro», la macchina del tempo all'inizio non doveva essere un'auto ma...", rispostaVera: "un frigorifero", balleCasa: ["una cabina del telefono", "una lavatrice", "un treno a vapore"], cat: "spettacolo" },
  { domanda: "Nel libro del Mago di Oz, le famose scarpette di Dorothy non erano rosse ma...", rispostaVera: "d'argento", balleCasa: ["d'oro", "di vetro", "blu"], cat: "spettacolo" },
  { domanda: "Per il film E.T. il regista voleva le M&M's, ma gli dissero di no, e così E.T. mangia...", rispostaVera: "i Reese's Pieces", balleCasa: ["gli orsetti gommosi", "le gelatine Jelly Belly", "i Pop-Tarts"], cat: "spettacolo" },
  { domanda: "Nel film Titanic, il disegno di Rose fatto da Jack in realtà l'ha fatto...", rispostaVera: "il regista James Cameron", balleCasa: ["Leonardo DiCaprio", "Kate Winslet", "un pittore francese"], cat: "spettacolo" },
  { domanda: "Le voci americane di Topolino e di Minni, per tanti anni, erano due doppiatori che nella vita...", rispostaVera: "erano marito e moglie", balleCasa: ["erano fratello e sorella", "non si sono mai visti", "erano padre e figlia"], cat: "spettacolo" },
  { domanda: "Lassie, la cagnolina più famosa del cinema, era sempre interpretata da...", rispostaVera: "cani maschi", balleCasa: ["una sola cagnolina", "dei lupi addestrati", "dei pastori tedeschi"], cat: "spettacolo" },
  { domanda: "Andrea Camilleri chiamò il suo commissario Montalbano in onore di...", rispostaVera: "uno scrittore spagnolo", balleCasa: ["un paese della Sicilia", "suo nonno", "un commissario vero di Agrigento"], cat: "spettacolo" },
  { domanda: "Sergio Leone, sul set dei suoi western, mentre si girava...", rispostaVera: "faceva suonare la musica di Morricone", balleCasa: ["faceva stare zitti anche i cavalli", "girava senza copione", "faceva ripetere ogni scena dieci volte"], cat: "spettacolo" },
  { domanda: "Nel 1981 il primo video trasmesso da MTV aveva un titolo profetico...", rispostaVera: "Video Killed the Radio Star", balleCasa: ["Thriller", "Bohemian Rhapsody", "I Want My MTV"], cat: "spettacolo" },
  { domanda: "Paul McCartney, prima di trovare le parole giuste, cantava «Yesterday» come...", rispostaVera: "Uova strapazzate", balleCasa: ["Buongiorno amore", "Pizza margherita", "Domani, domani"], cat: "spettacolo" },
  { domanda: "Elvis Presley, famoso per i suoi capelli neri, in realtà era...", rispostaVera: "biondo", balleCasa: ["rosso", "riccio", "bianco già a vent'anni"], cat: "spettacolo" },
  { domanda: "Nelle sue lettere alla cugina, Mozart scriveva tantissime battute sulla...", rispostaVera: "cacca", balleCasa: ["matematica", "cucina austriaca", "i gatti di casa"], cat: "spettacolo" },
  { domanda: "La Gioconda di Leonardo, se la guardate bene, non ha...", rispostaVera: "le sopracciglia", balleCasa: ["le narici", "le pupille", "le mani"], cat: "storia" },
  { domanda: "Il David di Michelangelo è scolpito in un blocco di marmo che...", rispostaVera: "altri due scultori avevano scartato", balleCasa: ["era caduto da una nave", "era stato rubato a Carrara", "era stato donato da un papa"], cat: "italia" },
  { domanda: "La famosa statua «Il Pensatore» di Rodin all'inizio doveva rappresentare...", rispostaVera: "Dante Alighieri", balleCasa: ["Socrate", "Giulio Cesare", "lo stesso Rodin"], cat: "storia" },
  { domanda: "La Fanta è nata in Germania, durante la guerra, perché...", rispostaVera: "non arrivava più la Coca-Cola", balleCasa: ["un chimico sbagliò una ricetta", "serviva come medicina per i soldati", "un contadino regalò troppe arance"], cat: "invenzioni" },
  { domanda: "Una volta le carote erano...", rispostaVera: "viola", balleCasa: ["blu", "verdi", "rosa"], cat: "scienza" },
  { domanda: "Le mandorle sono parenti strette delle...", rispostaVera: "pesche", balleCasa: ["noci", "olive", "castagne"], cat: "scienza" },
  { domanda: "La banana che si mangiava prima di quella di oggi è quasi sparita per colpa di...", rispostaVera: "un fungo", balleCasa: ["un insetto", "una gelata", "una guerra"], cat: "scienza" },
  { domanda: "Una pianta di ananas, per fare un ananas, ci mette circa...", rispostaVera: "due anni", balleCasa: ["sei mesi", "quattro anni", "dieci anni"], cat: "scienza" },
  { domanda: "Il peperoncino brucia in bocca, ma gli uccelli...", rispostaVera: "non sentono il bruciore", balleCasa: ["lo evitano sempre", "lo mangiano solo di notte", "lo sputano subito"], cat: "animali" },
  { domanda: "Il wasabi dei ristoranti di sushi spesso in realtà è...", rispostaVera: "rafano colorato di verde", balleCasa: ["cetriolo grattugiato", "avocado schiacciato", "alghe tritate e piccanti"], cat: "mondo" },
  { domanda: "Gli astronauti nello spazio non mangiano il pane perché...", rispostaVera: "le briciole volano dappertutto", balleCasa: ["si gonfia troppo", "diventa duro come un sasso", "perde tutto il sapore"], cat: "scienza" },
  { domanda: "Secondo la leggenda, il caffè fu scoperto da un pastore etiope che vide ___ mangiare quelle bacche e mettersi a saltare.", rispostaVera: "le sue capre", balleCasa: ["i suoi cammelli", "le sue galline", "il suo cane"], cat: "mondo" },
  { domanda: "Per gli Aztechi i semi di cacao erano così preziosi che si usavano come...", rispostaVera: "soldi", balleCasa: ["gioielli", "medicina per il cuore", "dadi per giocare"], cat: "storia" },
  { domanda: "Il ghiacciolo l'ha inventato nel 1905 un bambino di 11 anni che aveva dimenticato fuori, una notte di gelo...", rispostaVera: "un bicchiere di bibita col bastoncino", balleCasa: ["il secchio del latte", "il suo gelato al limone", "una bottiglia di sciroppo"], cat: "invenzioni" },
  { domanda: "Per fare un solo chilo di zafferano servono circa...", rispostaVera: "150.000 fiori", balleCasa: ["15.000 fiori", "40.000 fiori", "un milione di fiori"], cat: "scienza" },
  { domanda: "Si racconta che le patatine fritte sottilissime nacquero perché un cliente si lamentava che le patate erano troppo...", rispostaVera: "spesse", balleCasa: ["salate", "fredde", "piccole"], cat: "invenzioni" },
  { domanda: "Si racconta che in Francia, per far piacere le patate alla gente, il farmacista Parmentier fece sorvegliare il campo solo di giorno, così di notte...", rispostaVera: "la gente andava a rubarle", balleCasa: ["le guardie le mangiavano", "i maiali le scavavano", "gli uccelli le beccavano"], cat: "storia" },
  { domanda: "Secondo la leggenda il cornetto ha quella forma perché ricorda...", rispostaVera: "la mezzaluna della bandiera turca", balleCasa: ["le corna di un toro", "un ferro di cavallo", "un corno da caccia"], cat: "italia" },
  { domanda: "In Danimarca hanno trovato una «gomma da masticare» di resina di 5.700 anni fa: dentro c'era ancora...", rispostaVera: "il DNA della ragazza che la masticava", balleCasa: ["il sapore di menta", "un dente da latte", "una goccia di sangue"], cat: "scienza" },
  { domanda: "Ai primi Mondiali di calcio, nel 1930 in Uruguay, dall'Europa arrivarono solo...", rispostaVera: "quattro squadre", balleCasa: ["tre squadre", "sei squadre", "otto squadre"], cat: "spettacolo" },
  { domanda: "A Wimbledon, nel 2010, una partita tra Isner e Mahut è durata...", rispostaVera: "più di 11 ore, in tre giorni", balleCasa: ["circa 8 ore, in due giorni", "quasi 7 ore, in un giorno", "circa 14 ore, in quattro giorni"], cat: "spettacolo" },
  { domanda: "La maglia del Giro d'Italia è rosa perché...", rispostaVera: "era rosa il giornale che lo organizzava", balleCasa: ["il rosa era il colore del re", "la prima l'ha cucita una nonna", "era la stoffa più economica"], cat: "spettacolo" },
  { domanda: "Al calcio i cartellini giallo e rosso sono stati inventati da un arbitro inglese ispirato...", rispostaVera: "da un semaforo", balleCasa: ["dalle carte da gioco", "dai colori di una bandiera", "dalla luce di un faro"], cat: "spettacolo" },
  { domanda: "Nelle prime partite di basket, per fare canestro, la palla doveva entrare in...", rispostaVera: "un cesto delle pesche", balleCasa: ["un secchio dell'acqua", "una gabbia per galline", "un barile di legno"], cat: "spettacolo" },
  { domanda: "La maratona è lunga 42,195 km perché alle Olimpiadi di Londra del 1908...", rispostaVera: "la partenza doveva essere sotto il castello", balleCasa: ["un corridore si perse", "sbagliarono a misurare il percorso", "pioveva e il percorso fu allungato"], cat: "spettacolo" },
  { domanda: "I primi palloni da calcio erano fatti con...", rispostaVera: "vesciche di maiale", balleCasa: ["pelle di pecora", "stracci cuciti", "lana pressata"], cat: "spettacolo" },
  { domanda: "Le pietre del curling delle Olimpiadi vengono quasi tutte da...", rispostaVera: "un'isoletta della Scozia", balleCasa: ["le Alpi svizzere", "il Canada", "l'Islanda"], cat: "spettacolo" },
  { domanda: "Alle prime Olimpiadi moderne, nel 1896, chi arrivava primo riceveva una medaglia...", rispostaVera: "d'argento", balleCasa: ["d'oro", "di bronzo", "di legno"], cat: "spettacolo" },
  { domanda: "Al Tour de France del 1904 alcuni dei primi arrivati furono squalificati perché...", rispostaVera: "avevano preso il treno", balleCasa: ["si erano scambiati la bici", "avevano bevuto birra in corsa", "si erano fermati a dormire"], cat: "spettacolo" },
  { domanda: "Alla maratona olimpica del 1904 il primo arrivato fu squalificato perché...", rispostaVera: "aveva fatto un pezzo in macchina", balleCasa: ["era partito prima del via", "aveva preso una scorciatoia", "aveva scambiato il pettorale con un amico"], cat: "spettacolo" },
  { domanda: "Nella finale dei primi Mondiali di calcio, nel 1930, si usarono due palloni...", rispostaVera: "uno per tempo, uno per squadra", balleCasa: ["perché il primo si bucò", "perché il primo finì fuori dallo stadio", "perché il primo si rovinò con la pioggia"], cat: "spettacolo" },
  { domanda: "La parola tennis viene dal francese «tenez», che vuol dire...", rispostaVera: "tenete!", balleCasa: ["colpisci!", "pronti!", "ancora!"], cat: "spettacolo" },
  { domanda: "Dal 1912 al 1948, alle Olimpiadi, si davano medaglie anche per...", rispostaVera: "pittura, musica e poesia", balleCasa: ["teatro, danza e cinema", "fotografia, canto e teatro", "scacchi, dama e bridge"], cat: "spettacolo" },
  { domanda: "Il pallone da basket all'inizio non c'era: nella prima partita, nel 1891, si usò...", rispostaVera: "un pallone da calcio", balleCasa: ["una palla da rugby", "una palla di stracci", "una palla da tennis"], cat: "spettacolo" },
  { domanda: "Le prime palline da golf, nel Seicento, erano sacchetti di cuoio riempiti di...", rispostaVera: "piume d'oca", balleCasa: ["sabbia", "segatura", "lana di pecora"], cat: "spettacolo" },
  { domanda: "Fino al 2025 l'Islanda era uno dei pochissimi posti al mondo dove non c'erano...", rispostaVera: "zanzare", balleCasa: ["volpi", "topi", "gabbiani"], cat: "mondo" },
  { domanda: "In Finlandia ogni anno si fa il campionato mondiale di...", rispostaVera: "corsa con la moglie in spalla", balleCasa: ["lancio del merluzzo", "gara di zuppa di renna", "tiro alla fune sul ghiaccio"], cat: "mondo" },
  { domanda: "La bandiera del Nepal è l'unica al mondo che non è...", rispostaVera: "rettangolare", balleCasa: ["colorata", "di stoffa", "a righe"], cat: "mondo" },
  { domanda: "Più della metà dei ___ grandi di tutto il mondo si trova in Canada.", rispostaVera: "laghi", balleCasa: ["fiumi", "ghiacciai", "boschi"], cat: "mondo" },
  { domanda: "L'Australia è più larga...", rispostaVera: "della Luna", balleCasa: ["di Mercurio", "di Marte", "di Venere"], cat: "scienza" },
  { domanda: "Il Paese con più fusi orari al mondo, contando le sue isole lontane, è...", rispostaVera: "la Francia", balleCasa: ["la Russia", "gli Stati Uniti", "la Cina"], cat: "mondo" },
  { domanda: "Si dice che a Londra i taxi neri, per legge, dovessero essere alti abbastanza per...", rispostaVera: "un passeggero con la bombetta", balleCasa: ["un ombrello aperto", "un violoncello in piedi", "una signora con la parrucca"], cat: "mondo" },
  { domanda: "In Thailandia, a Lopburi, ogni anno si prepara un banchetto di frutta per...", rispostaVera: "le scimmie", balleCasa: ["i gatti del tempio", "i pesci del fiume", "i turisti"], cat: "mondo" },
  { domanda: "In Corea del Sud molte persone hanno paura di dormire con...", rispostaVera: "il ventilatore acceso", balleCasa: ["la finestra aperta", "i calzini", "la luce accesa"], cat: "mondo" },
  { domanda: "In Danimarca, chi compie 25 anni senza essere sposato...", rispostaVera: "viene ricoperto di cannella", balleCasa: ["deve ballare in piazza", "deve offrire il pranzo a tutti", "deve pagare una tassa"], cat: "mondo" },
  { domanda: "In Giappone, a Natale, tantissime famiglie mangiano...", rispostaVera: "il pollo fritto di KFC", balleCasa: ["sushi rosso e verde", "torta di riso", "hamburger"], cat: "mondo" },
  { domanda: "In Norvegia, la sera di Natale, si nascondono ___ perché le streghe non le rubino.", rispostaVera: "le scope", balleCasa: ["le scarpe", "i coltelli", "le pentole"], cat: "mondo" },
  { domanda: "A Caracas, in Venezuela, nei giorni di Natale molti vanno alla messa del mattino...", rispostaVera: "sui pattini a rotelle", balleCasa: ["in pigiama", "in bicicletta", "in monopattino"], cat: "mondo" },
  { domanda: "In Ucraina gli alberi di Natale si decorano anche con...", rispostaVera: "ragnatele finte", balleCasa: ["pezzi di ghiaccio", "cucchiai di legno", "fili di lana"], cat: "mondo" },
  { domanda: "Il nome Canada viene da una parola dei nativi che vuol dire...", rispostaVera: "villaggio", balleCasa: ["terra fredda", "molti laghi", "grande alce"], cat: "mondo" },
  { domanda: "Il nome del Brasile viene da...", rispostaVera: "un albero dal legno rosso", balleCasa: ["un fiume", "un re portoghese", "un pappagallo"], cat: "mondo" },
  { domanda: "Il Paese con più isole al mondo è...", rispostaVera: "la Svezia", balleCasa: ["l'Indonesia", "le Filippine", "la Grecia"], cat: "mondo" },
  { domanda: "Il lago Bajkal, in Russia, contiene circa...", rispostaVera: "un quinto dell'acqua dolce dei laghi", balleCasa: ["metà dell'acqua dolce dei laghi", "un decimo dell'acqua dolce dei laghi", "un terzo dell'acqua dolce dei laghi"], cat: "mondo" },
  { domanda: "L'Alaska, nel 1867, gli Stati Uniti l'hanno comprata...", rispostaVera: "dalla Russia", balleCasa: ["dal Canada", "dall'Inghilterra", "dalla Danimarca"], cat: "storia" },
  { domanda: "Il nome IKEA è fatto con le iniziali del fondatore e...", rispostaVera: "della sua fattoria e del suo paese", balleCasa: ["di sua moglie", "della sua scuola e del suo quartiere", "di due suoi soci"], cat: "invenzioni" },
  { domanda: "Il nome Kodak non vuol dire niente: il fondatore lo scelse perché...", rispostaVera: "gli piaceva la lettera K", balleCasa: ["era il nome di sua nonna", "vuol dire luce in greco", "vuol dire occhio in hindi"], cat: "invenzioni" },
  { domanda: "Il nome Haribo viene da...", rispostaVera: "Hans Riegel di Bonn", balleCasa: ["una caramella turca", "un orso famoso", "una parola che vuol dire dolce"], cat: "invenzioni" },
  { domanda: "La guardia forestale americana Roy Sullivan è sopravvissuta a...", rispostaVera: "7 fulmini", balleCasa: ["3 naufragi", "12 morsi di serpente", "due valanghe"], cat: "scienza" },
  { domanda: "L'infermiera Violet Jessop è sopravvissuta...", rispostaVera: "ai naufragi del Titanic e del Britannic", balleCasa: ["a tre incendi in mare", "a un attacco di pirati", "a un uragano e a un terremoto"], cat: "storia" },
  { domanda: "Il francese Michel Lotito, in tanti anni, pezzo per pezzo, ha mangiato...", rispostaVera: "un aereo intero", balleCasa: ["una barca a vela", "un pianoforte", "un trattore"], cat: "scienza" },
  { domanda: "Beethoven, quando ormai era sordo, per sentire le note del pianoforte...", rispostaVera: "mordeva un bastone appoggiato al piano", balleCasa: ["metteva le mani nell'acqua", "suonava a piedi nudi", "si faceva ripetere le note da un amico"], cat: "spettacolo" },
  { domanda: "Lo scrittore Victor Hugo, per obbligarsi a scrivere senza uscire di casa...", rispostaVera: "si faceva nascondere i vestiti", balleCasa: ["si legava alla sedia", "inchiodava le finestre", "faceva chiudere la porta a chiave"], cat: "storia" },
  { domanda: "Il poeta Lord Byron, all'università, visto che i cani erano vietati, teneva in camera...", rispostaVera: "un orso", balleCasa: ["un leone", "un serpente", "una tigre"], cat: "animali" },
  { domanda: "Lo scienziato Nikola Tesla raccontava di essere innamorato di...", rispostaVera: "un piccione bianco", balleCasa: ["una vicina di casa", "una cantante lirica", "una statua"], cat: "animali" },
  { domanda: "Nel 2016 il polpo Inky evase da un acquario della Nuova Zelanda e raggiunse il mare passando per...", rispostaVera: "un tubo di scarico lungo 50 metri", balleCasa: ["una finestra aperta sul porto", "la cucina del ristorante accanto", "il buco di un muro del retro"], cat: "animali" },
  { domanda: "Per conquistare una femmina, un piccolo pesce palla giapponese, lungo poco più di 10 centimetri, passa giorni a disegnare sul fondo del mare...", rispostaVera: "un cerchio di sabbia largo due metri", balleCasa: ["una stella di conchiglie e coralli", "un cuore fatto di sassolini bianchi", "una scacchiera di sabbia chiara e scura"], cat: "animali" },
  { domanda: "Sulle rive del fiume Tarn, in Francia, certi giganteschi pesci siluro si lanciano sulla riva per catturare...", rispostaVera: "i piccioni", balleCasa: ["le anatre", "i gabbiani", "i topi di fiume"], cat: "animali" },
  { domanda: "Nel 2017, in Oregon, un camion carico di missine, strani pesci primitivi, si ribaltò e ricoprì un'auto di...", rispostaVera: "muco appiccicoso", balleCasa: ["scaglie argentate", "olio di pesce", "alghe puzzolenti"], cat: "animali" },
  { domanda: "Negli anni '80 la Svezia cercò per anni dei sottomarini sovietici nelle sue acque; poi si scoprì che alcuni rumori misteriosi erano...", rispostaVera: "le scorregge delle aringhe", balleCasa: ["le risate dei delfini", "i gorgoglii delle foche addormentate", "le bolle dei vulcani sottomarini"], cat: "animali" },
  { domanda: "Nel 1967 il sottomarino da ricerca Alvin dovette interrompere un'immersione e risalire perché fu attaccato da...", rispostaVera: "un pesce spada rimasto incastrato", balleCasa: ["un calamaro gigante attaccato all'oblò", "una balena che lo spinse sul fondo", "uno squalo che gli morse l'elica"], cat: "animali" },
  { domanda: "La mamma ornitorinco, mammifero dei fiumi australiani, non ha i capezzoli: i suoi cuccioli bevono il latte...", rispostaVera: "leccandolo dal suo pelo", balleCasa: ["succhiandolo da una tasca sulla pancia", "bevendolo da una pozza che lei scava", "attaccandosi alla sua coda piatta"], cat: "animali" },
  { domanda: "Nel diario del 9 gennaio 1493 Cristoforo Colombo racconta di aver visto tre sirene (erano lamantini), ma non erano belle: in faccia somigliavano a...", rispostaVera: "degli uomini", balleCasa: ["dei cavalli", "delle scimmie", "dei gatti"], cat: "animali" },
  { domanda: "Per scoprire nuove colonie di pinguini imperatore in Antartide, gli scienziati hanno guardato dallo spazio, con i satelliti...", rispostaVera: "le macchie della loro cacca sul ghiaccio", balleCasa: ["le piste lasciate dai loro tuffi", "le ombre delle loro file", "il calore dei loro corpi stretti"], cat: "animali" },
  { domanda: "Gli elefanti marini, quando sono in mare aperto, dormono in tutto circa due ore al giorno, a pisolini di pochi minuti, mentre...", rispostaVera: "scendono lentamente girando su se stessi", balleCasa: ["si appoggiano agli iceberg", "nuotano in cerchio vicino alla superficie", "stanno a galla col naso fuori dall'acqua"], cat: "animali" },
  { domanda: "Il granchio yeti, che vive nelle profondità del Pacifico vicino al Costa Rica, coltiva sulle sue chele pelose...", rispostaVera: "i batteri di cui si nutre", balleCasa: ["un orto di minuscole alghe", "dei coralli rosa da mangiare", "le uova dei suoi piccoli"], cat: "animali" },
  { domanda: "Nel 2018 degli scienziati hanno cercato il mostro di Loch Ness analizzando il DNA dell'acqua del lago: ne hanno trovato tantissimo di...", rispostaVera: "anguilla", balleCasa: ["storione", "pesce siluro", "squalo"], cat: "animali" },
  { domanda: "Quando nel 1953 Elisabetta II fu incoronata, la città inglese di Gloucester le regalò, come da vecchia tradizione, un pasticcio di...", rispostaVera: "lamprede", balleCasa: ["aringhe affumicate", "anguille e ostriche", "storione e tartufi"], cat: "animali" },
  { domanda: "Quando due astici, le «aragoste» con le grosse chele, litigano per chi comanda, si spruzzano in faccia...", rispostaVera: "un getto di pipì", balleCasa: ["una nube di sabbia", "una bava appiccicosa", "un liquido urticante"], cat: "animali" },
  { domanda: "Per nascondersi dai nemici, il pesce perla va a vivere dentro il sedere di...", rispostaVera: "un cetriolo di mare", balleCasa: ["un granchio gigante", "una tartaruga marina", "una medusa"], cat: "animali" },
  { domanda: "Nel 2016 degli scienziati hanno scoperto che il pesce arciere, quello che abbatte gli insetti sputando getti d'acqua, sa riconoscere...", rispostaVera: "le facce delle persone", balleCasa: ["la voce di chi gli dà da mangiare", "i colori dei vestiti di chi lo nutre", "i passi di chi si avvicina alla vasca"], cat: "animali" },
  { domanda: "Una femmina di polpo degli abissi, filmata per anni al largo della California, ha fatto la guardia alle sue uova, quasi senza mangiare, per...", rispostaVera: "quattro anni e mezzo", balleCasa: ["otto mesi", "due anni e mezzo", "sette anni"], cat: "animali" },
  { domanda: "Quando si spaventa, la salamandra gigante giapponese, che vive nei fiumi, emette un muco bianco dall'odore di...", rispostaVera: "pepe giapponese", balleCasa: ["zenzero fresco", "mandarino", "alghe tostate"], cat: "animali" },
  { domanda: "Il piatto islandese hákarl, fatto con carne di squalo della Groenlandia che appena pescata è velenosa, ha un odore fortissimo di...", rispostaVera: "ammoniaca", balleCasa: ["caffè bruciato", "limone verde", "aceto caldo"], cat: "animali" },
  { domanda: "Dentro il tubo in cui vive ogni femmina di Osedax, il verme che mangia le ossa delle balene morte in fondo al mare, abitano...", rispostaVera: "decine di maschi microscopici", balleCasa: ["una colonia di batteri luminosi", "una scorta di plancton", "piccoli granchi custodi"], cat: "animali" },
  { domanda: "Nel 1938 una rete da pesca sudafricana prese un celacanto, pesce che si credeva estinto da 66 milioni di anni: a capire che era speciale fu...", rispostaVera: "la curatrice di un piccolo museo", balleCasa: ["un cuoco di bordo", "un bambino che pescava col nonno", "un ufficiale della Marina"], cat: "animali" },
  { domanda: "Nel 2013 un reattore della centrale nucleare svedese di Oskarshamn fu fermato a causa di...", rispostaVera: "un'invasione di meduse", balleCasa: ["un banco di sardine nei filtri", "un'invasione di granchi", "una fioritura di alghe tossiche"], cat: "animali" },
  { domanda: "Secondo lo storico greco Erodoto, in certe zone dell'antico Egitto i coccodrilli sacri portavano...", rispostaVera: "orecchini e braccialetti", balleCasa: ["collari di perle", "piccole corone d'oro", "mantelli di lino"], cat: "animali" },
  { domanda: "Nell'antichità il colore viola, riservato a re e imperatori, si otteneva da...", rispostaVera: "una lumaca di mare", balleCasa: ["un insetto dell'India", "una radice d'Egitto", "un minerale macinato"], cat: "animali" },
  { domanda: "Nel 1943 in Inghilterra nacque la Medaglia Dickin, il premio al valore per gli animali in guerra. Le prime andarono a dei...", rispostaVera: "piccioni viaggiatori", balleCasa: ["cani da soccorso", "cavalli da guerra", "un mulo, un cane e un gatto"], cat: "animali" },
  { domanda: "Di notte gli scarabei stercorari spingono la loro palla di sterco in linea retta perché si orientano con...", rispostaVera: "la Via Lattea", balleCasa: ["il canto dei grilli", "l'odore della terra bagnata", "le luci dei villaggi lontani"], cat: "animali" },
  { domanda: "In Madagascar una falena, di notte, si posa sugli uccelli che dormono per bere...", rispostaVera: "le loro lacrime", balleCasa: ["il loro sudore", "il loro sangue", "la loro saliva"], cat: "animali" },
  { domanda: "Nel 2022 degli scienziati inglesi hanno scoperto che i bombi giocano: senza nessun premio, per puro divertimento, passano il tempo a...", rispostaVera: "far rotolare palline di legno", balleCasa: ["inseguirsi in cerchio sui fiori", "costruire piccole torri di cera", "lanciarsi petali a vicenda"], cat: "animali" },
  { domanda: "I licaoni, cani selvatici africani, decidono insieme quando partire a caccia con una specie di votazione: ognuno vota...", rispostaVera: "starnutendo", balleCasa: ["abbaiando una volta", "scodinzolando", "sdraiandosi a terra"], cat: "animali" },
  { domanda: "Uno studio su 70 cani ha scoperto che, quando fanno i loro bisogni, tendono a mettersi in linea con...", rispostaVera: "il nord e il sud", balleCasa: ["la direzione del vento", "il punto dove sta il padrone", "il sole che sorge"], cat: "animali" },
  { domanda: "Nel 1948 in Idaho, per portare dei castori in montagne senza strade, i guardacaccia li hanno trasportati...", rispostaVera: "lanciandoli da un aereo col paracadute", balleCasa: ["con grandi gabbie appese a un elicottero", "su zattere gonfiabili giù per il fiume", "con un cannone ad aria compressa"], cat: "animali" },
  { domanda: "Per fermare i serpenti arborei bruni che hanno invaso l'isola di Guam, gli americani hanno lanciato dall'alto migliaia di...", rispostaVera: "topolini morti con dentro il paracetamolo", balleCasa: ["uova di plastica piene di sonnifero", "polpette di pollo con l'anestetico", "grilli morti pieni di peperoncino"], cat: "animali" },
  { domanda: "Nel 1942 un dentista americano propose al governo di attaccare le città giapponesi lanciando dagli aerei migliaia di...", rispostaVera: "pipistrelli con piccole bombe incendiarie", balleCasa: ["gabbiani con piccole micce accese", "scoiattoli con fiammiferi sulla coda", "lucertole con cariche di polvere nera"], cat: "animali" },
  { domanda: "Nel 1516, a Roma, quando l'elefante Annone, regalo del re del Portogallo al papa Leone X, si ammalò, i medici lo curarono con...", rispostaVera: "un lassativo con dentro dell'oro", balleCasa: ["un decotto di rose e miele", "bagni caldi con erbe e vino", "una zuppa di spezie e latte"], cat: "animali" },
  { domanda: "L'armadillo a nove bande ha una stranezza: ogni volta che partorisce mette al mondo...", rispostaVera: "quattro gemelli identici", balleCasa: ["un solo cucciolo senza corazza", "due gemelli di colore diverso", "otto cuccioli grandi come noci"], cat: "animali" },
  { domanda: "Un esperimento inglese del 2014 ha offerto alle gazze ladre del cibo vicino a degli anelli lucidi, e le gazze...", rispostaVera: "se ne sono tenute alla larga", balleCasa: ["se li sono portati via di corsa", "li hanno nascosti sotto le foglie", "hanno litigato tra loro per averli"], cat: "animali" },
  { domanda: "Nel 2020 gli scienziati hanno scoperto che, sotto una luce ultravioletta, il pelo dell'ornitorinco brilla di colore...", rispostaVera: "verde-azzurro", balleCasa: ["rosa acceso", "arancione", "viola"], cat: "animali" },
  { domanda: "Nel 2015 dei ricercatori hanno registrato per centinaia di ore le giraffe di tre zoo europei e hanno scoperto che di notte...", rispostaVera: "canticchiano con un lungo ronzio", balleCasa: ["si chiamano con lunghi fischi", "ululano piano come i lupi", "ruggiscono piano come i leoni"], cat: "animali" },
  { domanda: "In uno zoo giapponese, d'inverno, i capibara fanno il bagno in una vasca di acqua calda con dentro...", rispostaVera: "frutti di yuzu", balleCasa: ["petali di rosa", "foglie di menta fresca", "sale marino e alghe"], cat: "animali" },
  { domanda: "Dei sensori messi ai rondoni da ricercatori svedesi hanno mostrato che, dopo il nido, restano in volo quasi senza posarsi per circa...", rispostaVera: "dieci mesi", balleCasa: ["quattro mesi", "sei mesi", "otto mesi"], cat: "animali" },
  { domanda: "Nel 1784 Mozart comprò uno storno e scrisse sul libro dei conti «Che bello!», perché l'uccellino sapeva cantare...", rispostaVera: "un motivo quasi uguale a uno suo", balleCasa: ["una canzone da osteria viennese", "una ninna nanna per bambini", "un'aria di un compositore rivale"], cat: "animali" },
  { domanda: "Il merino Shrek, in Nuova Zelanda, per sei anni sfuggì alla tosatura nascondendosi nelle grotte; nel 2004 fu tosato e la sua lana bastava per...", rispostaVera: "una ventina di completi da uomo", balleCasa: ["un tappeto grande come una stanza", "dodici coperte matrimoniali", "tre divani imbottiti"], cat: "animali" },
  { domanda: "Per tenere gli elefanti lontani dai campi di mais, in Kenya alcuni contadini hanno costruito recinzioni con appesi...", rispostaVera: "alveari pieni di api", balleCasa: ["specchi che riflettono il sole", "pupazzi di leone a grandezza naturale", "campanelli di bronzo su ogni palo"], cat: "animali" },
  { domanda: "Nel 1973 due ragni, Arabella e Anita, andarono nello spazio per provare a fare la tela senza gravità. L'idea dell'esperimento era di...", rispostaVera: "una studentessa di liceo di 17 anni", balleCasa: ["uno zoologo svizzero esperto di ragni", "un astronauta appassionato di insetti", "un'azienda che faceva calze di seta"], cat: "animali" },
  { domanda: "Nel 1992 in Vietnam gli scienziati scoprirono un grosso mammifero mai descritto, il saola, partendo da...", rispostaVera: "un cranio con corna, avuto da un cacciatore", balleCasa: ["le impronte lasciate nel fango di un fiume", "una foto scattata da un turista", "una pelle venduta al mercato di un villaggio"], cat: "animali" },
  { domanda: "In Africa l'indicatore, un uccello, guida gli uomini ai nidi di api selvatiche; dopo che hanno preso il miele, lui mangia soprattutto...", rispostaVera: "la cera d'api", balleCasa: ["la propoli", "la corteccia dell'albero", "i fiori intorno all'alveare"], cat: "animali" },
  { domanda: "Le civette delle tane americane spargono davanti al nido pezzi di ___ per attirare gli insetti di cui si nutrono.", rispostaVera: "cacca di mucca", balleCasa: ["frutta marcia", "carne cruda", "miele e zucchero"], cat: "animali" },
  { domanda: "Nel deserto il maschio della ganga, un uccello, porta l'acqua ai piccoli, anche da molto lontano, tenendola...", rispostaVera: "nelle piume della pancia", balleCasa: ["in una sacca sotto la gola", "nel becco, senza mai ingoiarla", "dentro una foglia arrotolata"], cat: "animali" },
  { domanda: "Nel 2017 un'apicoltrice e ricercatrice italiana, ripulendo i suoi alveari dai bruchi della tarma della cera, scoprì che sanno bucare...", rispostaVera: "i sacchetti di plastica", balleCasa: ["le lattine di alluminio", "le tegole di terracotta", "i fili di rame"], cat: "animali" },
  { domanda: "Nel 1862 Charles Darwin vide un'orchidea del Madagascar col nettare in fondo a un tubo lunghissimo e predisse che esisteva...", rispostaVera: "una falena con la lingua lunghissima", balleCasa: ["un colibrì dal becco curvo", "un lemure con la lingua sottile", "un pipistrello dal muso lunghissimo"], cat: "animali" },
  { domanda: "Ogni anno, a fine estate, i bambini delle isole Vestmann, in Islanda, escono di notte con le torce per cercare e salvare...", rispostaVera: "i piccoli di pulcinella di mare", balleCasa: ["gli agnelli persi nella nebbia", "i cuccioli di foca smarriti", "i pulcini di gabbiano caduti dai tetti"], cat: "animali" },
  { domanda: "Il tipo di sangue più raro del mondo, il Rh nullo, ha un soprannome: lo chiamano...", rispostaVera: "sangue d'oro", balleCasa: ["sangue di platino", "sangue di diamante", "sangue di drago"], cat: "scienza" },
  { domanda: "Il corpo umano brilla davvero, con una luce circa mille volte troppo debole per i nostri occhi, e brilla di più...", rispostaVera: "nel tardo pomeriggio", balleCasa: ["di notte, mentre dormiamo", "subito dopo mangiato", "quando fa molto freddo"], cat: "scienza" },
  { domanda: "La parola «pupilla», il cerchio nero al centro dell'occhio, viene da una parola latina che voleva dire...", rispostaVera: "bambolina", balleCasa: ["piccolo specchio", "perlina nera", "goccia d'inchiostro"], cat: "scienza" },
  { domanda: "Secondo uno studio del 1991, quando la mamma mangia aglio il suo latte ne prende l'odore, e il neonato...", rispostaVera: "succhia più a lungo", balleCasa: ["fa una smorfia e smette di bere", "si addormenta dopo due sorsi", "fa la cacca che puzza di aglio"], cat: "scienza" },
  { domanda: "Secondo uno studio del 2016, la prima notte in un letto nuovo dormiamo male perché una parte del cervello...", rispostaVera: "resta di guardia come una sentinella", balleCasa: ["continua a ripassare la giornata", "non riconosce l'odore delle lenzuola", "si confonde sull'ora che è"], cat: "scienza" },
  { domanda: "Nel 1964 lo studente californiano Randy Gardner, per un progetto di scienze, riuscì a restare sveglio...", rispostaVera: "11 giorni di fila", balleCasa: ["quattro giorni di fila", "sei giorni di fila", "tre settimane di fila"], cat: "scienza" },
  { domanda: "Qualche anno fa, a Londra, mentre i chirurghi le toglievano un tumore dal cervello, una paziente rimasta sveglia ha...", rispostaVera: "suonato il suo violino", balleCasa: ["cantato un'aria d'opera", "recitato una poesia a memoria", "fatto le parole crociate"], cat: "scienza" },
  { domanda: "Nella finale di Coppa d'Inghilterra del 1956 il portiere Bert Trautmann, dopo uno scontro, giocò fino alla fine senza sapere di avere...", rispostaVera: "il collo rotto", balleCasa: ["una caviglia rotta", "due costole rotte", "un braccio fratturato"], cat: "scienza" },
  { domanda: "Secondo uno studio del 2009, già pochi giorni dopo la nascita il pianto dei neonati ha la melodia...", rispostaVera: "della lingua della loro mamma", balleCasa: ["della musica ascoltata in gravidanza", "del verso del cane di casa", "della voce dell'ostetrica"], cat: "scienza" },
  { domanda: "Nel 1816 il medico francese Laennec inventò lo stetoscopio perché, per pudore, non voleva...", rispostaVera: "appoggiare l'orecchio sul petto di una donna", balleCasa: ["avvicinare l'orecchio alla bocca dei malati", "stringere la mano ai pazienti contagiosi", "fare domande imbarazzanti ai pazienti"], cat: "scienza" },
  { domanda: "Il primo pacemaker da mettere dentro il corpo, costruito in Svezia nel 1958, aveva come stampo una scatoletta di...", rispostaVera: "lucido da scarpe", balleCasa: ["sardine in scatola", "caramelle alla menta", "crema per le mani"], cat: "scienza" },
  { domanda: "Per secoli, in Europa, nelle farmacie si vendeva come medicina la polvere di...", rispostaVera: "mummie egiziane", balleCasa: ["ossa di balena", "pietre di vulcano", "piume di pavone"], cat: "scienza" },
  { domanda: "Nel Settecento, a Londra, per rianimare chi era quasi annegato, i medici gli soffiavano nel sedere...", rispostaVera: "il fumo di tabacco", balleCasa: ["vapore d'aceto", "fumo di zolfo", "pepe in polvere"], cat: "scienza" },
  { domanda: "Nell'antica Roma il medico Scribonio Largo, per far passare il mal di testa, consigliava di appoggiare sulla testa dolorante...", rispostaVera: "un pesce che dà la scossa", balleCasa: ["una rana viva e fredda", "un granchio vivo", "una sanguisuga gigante"], cat: "scienza" },
  { domanda: "Nel Perù degli Inca i chirurghi operavano il cranio e salvavano circa tre pazienti su quattro, molti più dei medici militari della...", rispostaVera: "guerra civile americana", balleCasa: ["Seconda guerra mondiale", "guerra del Vietnam", "guerra di Corea"], cat: "scienza" },
  { domanda: "Nel 1667, a Parigi, il medico Denys fece una delle prime trasfusioni di sangue della storia a un ragazzo di 15 anni, usando sangue di...", rispostaVera: "un agnello", balleCasa: ["un cavallo", "un maiale", "un condannato a morte"], cat: "scienza" },
  { domanda: "Per migliaia di anni, in Mesopotamia e poi in Europa, si è creduto che il mal di denti fosse causato da...", rispostaVera: "un verme nascosto dentro il dente", balleCasa: ["un ragno nascosto nelle gengive", "una pietruzza che cresce nel dente", "un serpentello che dorme in bocca"], cat: "scienza" },
  { domanda: "Nei libri dei medici del Medioevo c'era il disegno di un «uomo zodiacale», che serviva a decidere...", rispostaVera: "quando fare i salassi e le operazioni", balleCasa: ["quanti giorni tenere a letto un malato", "chi poteva diventare medico", "quante medicine dare ai malati"], cat: "scienza" },
  { domanda: "Alexander Fleming, lo scopritore della penicillina, dipingeva quadri usando come colori...", rispostaVera: "microbi vivi", balleCasa: ["il sangue dei topi di laboratorio", "le polveri dei medicinali", "il succo di piante colorate"], cat: "scienza" },
  { domanda: "Ötzi, l'uomo del ghiaccio vissuto 5.300 anni fa, portava appesi a una cordicella pezzi di fungo, forse come medicina contro...", rispostaVera: "i vermi della pancia", balleCasa: ["il mal di denti", "il mal di montagna", "le punture degli insetti"], cat: "scienza" },
  { domanda: "In una grotta della Slovenia è stato trovato il dente di una persona vissuta 6.500 anni fa, con una crepa riempita di...", rispostaVera: "cera d'api", balleCasa: ["resina di pino", "argilla e saliva", "miele indurito"], cat: "scienza" },
  { domanda: "Anche oggi, in alcuni ospedali, i chirurghi usano le sanguisughe, per esempio dopo aver riattaccato...", rispostaVera: "un dito o un orecchio", balleCasa: ["un dente rotto", "un osso del braccio", "un occhio"], cat: "scienza" },
  { domanda: "L'ultima persona al mondo a prendere il vaiolo in modo naturale, in Somalia nel 1977, faceva il...", rispostaVera: "cuoco in un ospedale", balleCasa: ["pastore di cammelli", "bidello in una scuola", "pescatore di aragoste"], cat: "scienza" },
  { domanda: "Il più famoso medico dell'antica Roma, Galeno, a 28 anni, tornato a Pergamo, diventò il medico dei...", rispostaVera: "gladiatori", balleCasa: ["cavalli da corsa", "marinai del porto", "schiavi delle miniere"], cat: "scienza" },
  { domanda: "Nella tomba di Tutankhamon c'era un pugnale con la lama di ferro: gli esami hanno scoperto che il metallo veniva da...", rispostaVera: "un meteorite", balleCasa: ["una miniera del Sinai", "armi nemiche fuse", "chiodi di nave fenicia"], cat: "storia" },
  { domanda: "Alcuni sandali trovati nella tomba di Tutankhamon hanno, raffigurati sulla suola...", rispostaVera: "i nemici dell'Egitto", balleCasa: ["coccodrilli e rane", "una mappa del Nilo", "stelle e lune"], cat: "storia" },
  { domanda: "Nell'Ottocento dall'Egitto arrivarono in Inghilterra tonnellate di gatti mummificati, e furono venduti per essere usati come...", rispostaVera: "concime per i campi", balleCasa: ["mangime per le galline", "imbottitura per materassi", "colla per i mobili"], cat: "storia" },
  { domanda: "Nei geroglifici egizi il segno che significa \"un milione\" è il disegno di...", rispostaVera: "un uomo con le braccia alzate", balleCasa: ["un serpente con le ali", "un sole circondato da puntini", "una barca piena di sacchi"], cat: "storia" },
  { domanda: "La Stele di Rosetta, che ha permesso di capire i geroglifici, riporta un decreto del 196 a.C. che parla soprattutto di...", rispostaVera: "sconti sulle tasse ai templi", balleCasa: ["la paga dei soldati del re", "la costruzione di un nuovo porto", "i turni dei guardiani del tempio"], cat: "storia" },
  { domanda: "Per scoprire se una donna aspettava un bambino, gli antichi Egizi le facevano fare la pipì su dei semi di...", rispostaVera: "orzo e grano", balleCasa: ["lino e sesamo", "fave e lenticchie", "papiro e loto"], cat: "storia" },
  { domanda: "Il papiro che racconta il più antico sciopero della storia, fatto in Egitto nel 1157 a.C. dagli operai delle tombe dei faraoni, oggi si trova...", rispostaVera: "al Museo Egizio di Torino", balleCasa: ["al Louvre di Parigi", "al Museo del Cairo", "al British Museum di Londra"], cat: "storia" },
  { domanda: "Gli archeologi che a Olimpia hanno trovato la bottega dove lo scultore Fidia fece la statua di Zeus hanno scoperto anche una tazza con scritto...", rispostaVera: "appartengo a Fidia", balleCasa: ["bevi alla salute di Fidia", "viva Fidia, il più grande", "non rubare, Fidia ti guarda"], cat: "storia" },
  { domanda: "Il misterioso congegno di Anticitera, con gli ingranaggi di bronzo, ha più di 2.000 anni e oltre alle eclissi serviva a sapere quando si facevano...", rispostaVera: "le Olimpiadi", balleCasa: ["le feste del vino", "i mercati di Atene", "i matrimoni dei re"], cat: "storia" },
  { domanda: "Secondo lo storico Erodoto, mentre correva da Atene a Sparta a chiedere aiuto, il messaggero Fidippide incontrò sulla strada...", rispostaVera: "il dio Pan", balleCasa: ["una ninfa dei boschi", "il dio Ermes", "un vecchio sacerdote cieco"], cat: "storia" },
  { domanda: "Circa 2.000 anni fa l'inventore greco Erone di Alessandria costruì un distributore automatico: mettevi una moneta e ti dava...", rispostaVera: "l'acqua santa del tempio", balleCasa: ["un pezzo di pane caldo", "un po' d'incenso", "una manciata di datteri"], cat: "storia" },
  { domanda: "La prima donna a vincere ai Giochi olimpici antichi, la principessa spartana Cinisca nel 396 a.C., ci riuscì...", rispostaVera: "facendo correre i suoi cavalli", balleCasa: ["gareggiando travestita da uomo", "vincendo la corsa di velocità", "lanciando il giavellotto più lontano"], cat: "storia" },
  { domanda: "La polizia dell'antica Atene non era fatta di cittadini ma di...", rispostaVera: "schiavi stranieri dello Stato", balleCasa: ["vecchi soldati in pensione", "mercenari pagati dai ricchi", "soldati spartani prestati ad Atene"], cat: "storia" },
  { domanda: "Ai banchetti degli antichi Greci si giocava a kottabos: bisognava lanciare, con un colpo di polso, le ultime gocce di vino per colpire...", rispostaVera: "un piattino in bilico", balleCasa: ["la fiamma di una lucerna", "un'oliva appesa a un filo", "una brocca appesa al soffitto"], cat: "storia" },
  { domanda: "Le ultime parole di Socrate, prima di morire, furono per ricordare agli amici di pagare un debito: dovevano...", rispostaVera: "un gallo al dio Asclepio", balleCasa: ["un'oca ad Atena", "una capra ad Apollo", "un bue a Zeus"], cat: "storia" },
  { domanda: "A Roma, nel quartiere Testaccio, c'è una collina alta circa 35 metri fatta quasi tutta di...", rispostaVera: "cocci di anfore dell'olio", balleCasa: ["ostriche mangiate dai ricchi", "mattoni rotti delle terme", "ossa degli animali dell'arena"], cat: "storia" },
  { domanda: "Su una tavoletta di legno di circa 1.900 anni fa, trovata vicino al Vallo di Adriano, qualcuno scrive di aver mandato calze, sandali e...", rispostaVera: "mutande", balleCasa: ["sciarpe", "guanti", "cappelli"], cat: "storia" },
  { domanda: "Il ricchissimo romano Marco Crasso, racconta Plutarco, si arricchì anche comprando a prezzo stracciato...", rispostaVera: "le case che stavano bruciando", balleCasa: ["le navi appena naufragate", "i campi dopo la grandine", "i cavalli feriti in battaglia"], cat: "storia" },
  { domanda: "L'enorme telo che faceva ombra al pubblico del Colosseo veniva manovrato da...", rispostaVera: "marinai della flotta imperiale", balleCasa: ["gladiatori a riposo", "soldati della guardia", "schiavi addestrati"], cat: "storia" },
  { domanda: "I bambini dell'antica Roma, per decidere a sorte, lanciavano una moneta e invece di dire testa o croce dicevano testa o...", rispostaVera: "nave", balleCasa: ["lupa", "aquila", "spada"], cat: "storia" },
  { domanda: "Nel 2023 l'intelligenza artificiale ha permesso di leggere, senza aprirlo, un rotolo bruciato dal Vesuvio nel 79 d.C.: la prima parola decifrata significa...", rispostaVera: "porpora", balleCasa: ["veleno", "tempesta", "farina"], cat: "storia" },
  { domanda: "Per pagare una guerra senza chiedere nuove tasse, Marco Aurelio mise all'asta per due mesi, nel Foro di Traiano, i tesori del palazzo: tra questi c'erano anche...", rispostaVera: "i suoi vestiti di seta e oro", balleCasa: ["le statue dei suoi antenati", "i cavalli del circo imperiale", "le armature dei suoi generali"], cat: "storia" },
  { domanda: "Secondo Plutarco, nelle nozze dell'antica Roma i capelli della sposa venivano divisi in ciocche con la punta di...", rispostaVera: "una lancia", balleCasa: ["un pettine d'oro", "una freccia", "una spada corta"], cat: "storia" },
  { domanda: "Secondo Plinio il Vecchio il sapone lo inventarono i Galli, ma lo usavano per...", rispostaVera: "tingersi i capelli di rosso", balleCasa: ["lavare i vestiti di lana", "curare i cavalli malati", "dipingersi la faccia di blu"], cat: "storia" },
  { domanda: "A Pompei, nella tavola calda tornata alla luce nel 2020, nei grandi vasi del bancone c'erano resti di cibo di 2.000 anni fa: anatra, capra, maiale, pesce e...", rispostaVera: "lumache", balleCasa: ["ghiri", "rane", "aragoste"], cat: "storia" },
  { domanda: "Nell'897, a Roma, papa Stefano VI organizzò un vero processo, con giudici e avvocato difensore, contro...", rispostaVera: "un altro papa, morto da mesi", balleCasa: ["un vescovo morto da vent'anni", "un imperatore sepolto a Ravenna", "una statua del suo predecessore"], cat: "storia" },
  { domanda: "Nei libri copiati a mano nel tardo Medioevo, ai margini delle pagine, si vedono spesso cavalieri in armatura che combattono contro...", rispostaVera: "lumache giganti", balleCasa: ["cavallette giganti", "ostriche giganti", "ragni giganti"], cat: "storia" },
  { domanda: "Una torre della cattedrale di Rouen, in Francia, fu pagata con le offerte di chi voleva avere il permesso di...", rispostaVera: "mangiare il burro in Quaresima", balleCasa: ["pescare nel fiume del vescovo", "ballare in chiesa a Carnevale", "giocare a carte la domenica"], cat: "storia" },
  { domanda: "Tra le regole della Magna Carta, il documento inglese del 1215, ce n'è una che ordina di togliere dal Tamigi tutte le...", rispostaVera: "trappole per i pesci", balleCasa: ["oche dei villaggi", "barche con più di due vele", "stagni dei monasteri"], cat: "storia" },
  { domanda: "Nel IX secolo un monaco irlandese scrisse una poesia, ancora studiata, in cui paragona il suo lavoro con le parole a quello del suo...", rispostaVera: "gatto, che caccia i topi", balleCasa: ["cane, che guarda il gregge", "gallo, che sveglia il convento", "asino, che porta i sacchi"], cat: "storia" },
  { domanda: "Nel XII secolo la monaca Ildegarda di Bingen, che scriveva musica e libri di medicina, inventò anche...", rispostaVera: "una lingua segreta tutta sua", balleCasa: ["un linguaggio fatto di soli fischi", "una scrittura da leggere allo specchio", "un sistema di segni con le mani"], cat: "storia" },
  { domanda: "Le note Do, Re, Mi... prendono il nome dalle prime sillabe di un inno medievale a San Giovanni, ma per secoli la prima nota non si chiamava Do, bensì...", rispostaVera: "Ut", balleCasa: ["Ad", "Et", "Ex"], cat: "storia" },
  { domanda: "Nel 1252 il re di Norvegia regalò al re d'Inghilterra Enrico III un orso bianco che, a Londra, poteva...", rispostaVera: "pescare nel Tamigi, legato a una corda", balleCasa: ["giocare con i cani del re", "dormire in cima alla torre", "mangiare alla tavola del re"], cat: "storia" },
  { domanda: "Nell'802 il califfo di Bagdad regalò a Carlo Magno un elefante che attraversò mezza Europa fino ad Aquisgrana. Si chiamava...", rispostaVera: "Abul-Abbas", balleCasa: ["Al-Mansur", "Abu Zayd", "Harun il Piccolo"], cat: "storia" },
  { domanda: "Nel 1206 l'ingegnere arabo al-Jazari descrisse in un libro una barca da festa che galleggiava su un lago, con a bordo...", rispostaVera: "quattro musicisti automatici", balleCasa: ["dodici rematori di legno", "un cuoco che friggeva pesci", "due soldati che si sfidavano a duello"], cat: "storia" },
  { domanda: "Catturato dagli inglesi nel 1356 e poi liberato, il re di Francia Giovanni II il Buono decise di...", rispostaVera: "tornare di sua volontà prigioniero a Londra", balleCasa: ["regalare la corona al suo carceriere", "farsi monaco in un convento inglese", "sfidare a duello il re d'Inghilterra"], cat: "storia" },
  { domanda: "Il re di Francia Carlo VI, a fine Trecento, si convinse di essere fatto di vetro e, per non rompersi, si faceva cucire nei vestiti...", rispostaVera: "delle stecche di ferro", balleCasa: ["dei cuscini di piume", "delle lastre di legno", "dei sacchetti di paglia"], cat: "storia" },
  { domanda: "In un manuale tedesco di combattimento del 1459 si spiega come far duellare un uomo e una donna: per pareggiare, l'uomo doveva stare...", rispostaVera: "in una buca fino alla vita", balleCasa: ["con gli occhi bendati", "seduto su una sedia", "su una gamba sola"], cat: "storia" },
  { domanda: "Il re inglese Etelredo II è detto «the Unready», ma non voleva dire «impreparato»: il soprannome originale significava...", rispostaVera: "mal consigliato", balleCasa: ["amico dei poveri", "che non dorme mai", "re di nessuna terra"], cat: "storia" },
  { domanda: "Nel 1421 Filippo Brunelleschi, l'architetto della cupola di Firenze, ottenne uno dei primi brevetti della storia, ma non per un edificio: era per...", rispostaVera: "un barcone per trasportare il marmo", balleCasa: ["un nuovo modo di cuocere i mattoni", "una scala che si allunga da sola", "un carro con tre ruote"], cat: "storia" },
  { domanda: "Nel 1515 Albrecht Dürer incise un rinoceronte famoso in tutta Europa, senza averne mai visto uno: si basò su una lettera con uno schizzo arrivata da...", rispostaVera: "Lisbona", balleCasa: ["Venezia", "Costantinopoli", "Anversa"], cat: "storia" },
  { domanda: "L'astronomo danese Tycho Brahe, a vent'anni, perse un pezzo di naso in un duello con la spada, dopo una lite a una festa su...", rispostaVera: "chi fosse il miglior matematico", balleCasa: ["chi avesse il cavallo più veloce", "chi fosse il miglior cacciatore", "chi avesse la famiglia più antica"], cat: "storia" },
  { domanda: "Alla corte di Enrico VIII d'Inghilterra, uno degli incarichi più ambiti, di solito dato a un nobile, era quello di...", rispostaVera: "aiutare il re quando andava in bagno", balleCasa: ["scegliere il cane da caccia del re", "tenere il cappello del re durante la messa", "svegliare il re con una campanella"], cat: "storia" },
  { domanda: "Papa Giulio II si fece crescere la barba, cosa rara per un papa, e giurò di non tagliarla finché non...", rispostaVera: "avesse cacciato i francesi dall'Italia", balleCasa: ["avesse finito di costruire San Pietro", "avesse conquistato Venezia", "avesse finito la sua tomba"], cat: "storia" },
  { domanda: "Nel febbraio 1530 l'esercito dell'imperatore Carlo V assediava Firenze. Per sfidare i nemici, i fiorentini decisero di...", rispostaVera: "giocare a calcio in piazza Santa Croce", balleCasa: ["fare una gara di tiro con l'arco", "organizzare un banchetto in piazza", "ballare tutta la notte sulle mura"], cat: "storia" },
  { domanda: "Attraversando il Pacifico, gli uomini di Magellano arrivarono a mangiare segatura e cuoio, e secondo Pigafetta i topi si vendevano a...", rispostaVera: "mezzo ducato l'uno", balleCasa: ["un ducato d'oro l'uno", "due monete d'argento l'uno", "un sacchetto di sale l'uno"], cat: "storia" },
  { domanda: "Nel 1571 una legge inglese obbligava tutti i maschi sopra i sei anni, tranne i nobili, a indossare ogni domenica e nei giorni di festa...", rispostaVera: "un berretto di lana", balleCasa: ["una sciarpa rossa", "un mantello nero", "dei guanti di pelle"], cat: "storia" },
  { domanda: "Nelle cucine inglesi del Cinquecento c'era una razza apposta di cani, oggi estinta, il cui lavoro era...", rispostaVera: "far girare l'arrosto sullo spiedo", balleCasa: ["tenere lontani i topi dal pane", "svegliare il cuoco all'alba", "assaggiare le minestre"], cat: "storia" },
  { domanda: "Nel testamento di William Shakespeare, l'unica cosa che lascia espressamente alla moglie Anne è...", rispostaVera: "il secondo miglior letto", balleCasa: ["il suo miglior cavallo", "la sua penna d'oca preferita", "una cassapanca piena di libri"], cat: "storia" },
  { domanda: "Già nel Trecento, a Venezia, i maestri vetrai di Murano avevano dalla Repubblica un privilegio che di solito spettava ai nobili, cioè...", rispostaVera: "portare la spada", balleCasa: ["usare le gondole dello Stato", "mangiare alla mensa del Doge", "sedere in Senato"], cat: "storia" },
  { domanda: "Per festeggiare un re di Francia, Leonardo da Vinci costruì un leone meccanico che camminava da solo e poi si apriva sul petto, mostrando...", rispostaVera: "dei gigli, simbolo della Francia", balleCasa: ["un uccellino meccanico che cantava", "una pioggia di monete d'oro", "una piccola corona d'argento"], cat: "storia" },
  { domanda: "Il capitano di ventura inglese John Hawkwood, che nel Trecento combatté in Italia e ha un enorme affresco nel Duomo di Firenze, da noi era chiamato...", rispostaVera: "Giovanni Acuto", balleCasa: ["Giovanni Sparviero", "Giovanni Boscofalco", "Giovanni Legnoduro"], cat: "storia" },
  { domanda: "Nel 1859 Stati Uniti e Gran Bretagna rischiarono la guerra per un'isola e schierarono navi e cannoni, ma l'unico morto fu...", rispostaVera: "un maiale", balleCasa: ["un cavallo da tiro", "un cane da guardia", "una capra"], cat: "storia" },
  { domanda: "Nel 1739 la Gran Bretagna dichiarò guerra alla Spagna: ancora oggi la chiamano «guerra dell'___ di Jenkins».", rispostaVera: "orecchio", balleCasa: ["orologio", "ombrello", "occhio"], cat: "storia" },
  { domanda: "La guerra del 1838-1839 in cui la Francia bloccò i porti del Messico è passata alla storia come la «guerra dei ___».", rispostaVera: "pasticcini", balleCasa: ["tortillas", "fagioli", "pappagalli"], cat: "storia" },
  { domanda: "Nel 1716 il re di Prussia regalò allo zar Pietro il Grande un'intera stanza fatta di ambra e in cambio ricevette...", rispostaVera: "dei soldati altissimi", balleCasa: ["dei cavalli bianchi di razza", "una nave da guerra", "una cassa di pellicce di zibellino"], cat: "storia" },
  { domanda: "Da ambasciatore in Francia, Benjamin Franklin scrisse un saggio scherzoso in cui chiedeva agli scienziati una medicina per rendere profumate...", rispostaVera: "le scorregge", balleCasa: ["l'alito", "il sudore", "i piedi"], cat: "storia" },
  { domanda: "Nel 1912 un uomo sparò al petto all'ex presidente Theodore Roosevelt, ma il proiettile fu rallentato dall'astuccio degli occhiali e da...", rispostaVera: "un discorso di 50 pagine piegato in tasca", balleCasa: ["un portasigari d'argento", "una Bibbia tascabile", "un taccuino di pelle"], cat: "storia" },
  { domanda: "Nel 1943 gli americani provarono a bruciare il Giappone con pipistrelli portabombe. In un test i pipistrelli scapparono e andarono a nascondersi sotto...", rispostaVera: "un serbatoio di carburante", balleCasa: ["un mucchio di paracadute", "una pila di casse di munizioni", "il palco delle autorità"], cat: "storia" },
  { domanda: "Nel 1943 gli inglesi lasciarono in mare vicino alla Spagna un cadavere con la divisa da ufficiale, per ingannare i tedeschi. Nelle sue tasche misero anche...", rispostaVera: "la foto di una fidanzata inventata", balleCasa: ["un mazzo di carte da gioco", "un biglietto della lotteria", "una pipa di radica"], cat: "storia" },
  { domanda: "Il soldato giapponese Hiroo Onoda continuò a combattere nella giungla delle Filippine fino al 1974, e si arrese solo quando glielo ordinò...", rispostaVera: "il suo vecchio comandante, diventato libraio", balleCasa: ["il suo vecchio capitano, diventato taxista", "un generale americano arrivato in elicottero", "l'imperatore in persona, via radio"], cat: "storia" },
  { domanda: "Nella più antica foto con una persona, scattata a Parigi nel 1838, la strada affollata sembra vuota: si vedono solo gli immobili, come un uomo che si faceva...", rispostaVera: "lucidare gli stivali", balleCasa: ["tagliare i capelli", "fare la barba", "ferrare il cavallo"], cat: "storia" },
  { domanda: "Quando inventò il telefono, Alexander Graham Bell voleva che si rispondesse alle chiamate dicendo...", rispostaVera: "«ahoy!», come i marinai", balleCasa: ["«olà!», come i cavalieri", "«avanti!», come i soldati", "«buongiorno!», come i frati"], cat: "storia" },
  { domanda: "Nel 1877, per provare il suo nuovo fonografo, Thomas Edison registrò la sua voce mentre recitava la filastrocca...", rispostaVera: "Mary aveva un agnellino", balleCasa: ["Tre topolini ciechi", "Jack e Jill salgono la collina", "Baa baa pecora nera"], cat: "storia" },
  { domanda: "Nel 1851 un medico inglese presentò a Londra una macchina per prevedere i temporali: una campanella suonava all'arrivo della tempesta grazie a dodici...", rispostaVera: "sanguisughe in bottiglia", balleCasa: ["rane in barattolo", "grilli in gabbia", "lumache su un filo"], cat: "storia" },
  { domanda: "I pittori dell'Ottocento, anche i preraffaelliti, amavano un bel colore marrone che si ricavava macinando...", rispostaVera: "vere mummie egizie", balleCasa: ["ossa di balena arrostite", "sangue di bue seccato", "pelli di serpente macinate"], cat: "storia" },
  { domanda: "Fino al 1826 il paesino umbro di Cospaia è stato uno Stato indipendente, perché nel trattato sui confini tra Firenze e il Papa qualcuno aveva confuso...", rispostaVera: "due torrenti con lo stesso nome", balleCasa: ["due frati con lo stesso nome", "due paesi con lo stesso nome", "una mappa letta al contrario"], cat: "storia" },
  { domanda: "Nel 1850, esule a New York, Giuseppe Garibaldi per guadagnarsi da vivere lavorò in una fabbrica di...", rispostaVera: "candele", balleCasa: ["sapone", "cappelli", "maccheroni"], cat: "storia" },
  { domanda: "Nel 1834 la ciurma della Beagle mangiò, in Patagonia, un grosso uccello cacciato dal pittore di bordo. Poi Darwin capì che era una specie rara e dagli avanzi recuperò...", rispostaVera: "testa, collo, zampe e un'ala", balleCasa: ["solo il becco e le ossa", "il cuore e lo stomaco", "le uova ancora nel nido"], cat: "storia" },
  { domanda: "I primi passeggeri di una mongolfiera, nel 1783 davanti al re di Francia, furono...", rispostaVera: "una pecora, un'anatra e un gallo", balleCasa: ["un cane, un gatto e un coniglio", "due piccioni e una scimmia", "un maiale, un'oca e un gatto"], cat: "storia" },
  { domanda: "Il pirata Barbanera, per sembrare un demone in battaglia, si infilava sotto il cappello...", rispostaVera: "micce accese che fumavano", balleCasa: ["fuochi d'artificio accesi", "ramoscelli di zolfo che bruciavano", "due teschi di scimmia"], cat: "storia" },
  { domanda: "Nel 1802, dopo un viaggio di tre settimane, il presidente americano Jefferson ricevette in dono da una cittadina del Massachusetts...", rispostaVera: "una forma di formaggio da 560 chili", balleCasa: ["una zucca da 560 chili", "una torta di mele alta due metri", "un bue arrosto intero"], cat: "storia" },
  { domanda: "Alla fine dell'Ottocento il cuoco Escoffier inventò un dolce con le pesche per la cantante Nellie Melba e lo servì sopra...", rispostaVera: "un cigno scolpito nel ghiaccio", balleCasa: ["una barchetta di zucchero", "un cappello di cioccolato", "uno scrigno di meringa"], cat: "storia" },
  { domanda: "Nel 1867 la polizia di San Francisco arrestò Joshua Norton, che si credeva «Imperatore degli Stati Uniti». Quando fu liberato con le scuse, lui concesse al poliziotto...", rispostaVera: "un perdono imperiale", balleCasa: ["il titolo di duca", "una medaglia imperiale", "un posto nella guardia imperiale"], cat: "storia" },
  { domanda: "Verso il 1900 un cavallo tedesco, Hans, sembrava saper contare battendo lo zoccolo. Nel 1907 si scoprì che sbagliava quasi sempre se non poteva vedere...", rispostaVera: "la faccia di chi lo interrogava", balleCasa: ["la lavagna con i numeri", "una carota davanti al muso", "i cartelli con le cifre"], cat: "storia" },
  { domanda: "Nel 1704 il compositore Händel fece un duello con la spada contro un collega, e si salvò perché la spada dell'altro fu deviata da...", rispostaVera: "un grosso bottone della sua giacca", balleCasa: ["la fibbia della cintura", "il suo orologio da tasca", "una tabacchiera d'argento"], cat: "storia" },
  { domanda: "Negli anni 1840 le ammiratrici del pianista Franz Liszt conservavano come reliquie, in piccole ampolle di vetro...", rispostaVera: "i fondi del suo caffè", balleCasa: ["le sue lacrime", "l'acqua dove si lavava le mani", "i petali dei fiori che gli lanciavano"], cat: "storia" },
  { domanda: "Nella Seconda guerra mondiale lo psicologo B. F. Skinner progettò una bomba guidata sul bersaglio da...", rispostaVera: "piccioni addestrati a beccare uno schermo", balleCasa: ["topi addestrati a premere pedali", "api addestrate a seguire un odore", "scimmie addestrate a premere bottoni"], cat: "storia" },
  { domanda: "Dopo la Rivoluzione francese, per un breve periodo la Gioconda lasciò il Louvre e fu appesa...", rispostaVera: "nella camera da letto di Napoleone", balleCasa: ["nella cucina di un castello reale", "nella cantina di un monastero", "nel salotto di una principessa"], cat: "storia" },
  { domanda: "Fino al 1866, nei fine settimana di agosto, la piazza Navona di Roma veniva...", rispostaVera: "allagata apposta, come un laghetto", balleCasa: ["riempita di sabbia come una spiaggia", "coperta di tende da circo", "riempita di giostre per i bambini"], cat: "italia" },
  { domanda: "I krumiri, i biscotti nati a Casale Monferrato nel 1878, furono fatti curvi, secondo la tradizione della pasticceria, per ricordare...", rispostaVera: "i baffi del re Vittorio Emanuele II", balleCasa: ["le corna del toro simbolo di Torino", "le piume dei cappelli dei bersaglieri", "la curva dei ponti sul fiume Po"], cat: "italia" },
  { domanda: "Il portico che da Bologna sale fino al santuario della Madonna di San Luca è il più lungo del mondo e, secondo il conteggio più noto, ha...", rispostaVera: "666 archi", balleCasa: ["365 archi", "1.001 archi", "108 archi"], cat: "italia" },
  { domanda: "Dopo aver vinto la battaglia di Zappolino contro Bologna, nel 1325, i soldati di Modena portarono a casa come trofeo...", rispostaVera: "un secchio di legno preso da un pozzo", balleCasa: ["una pentola di rame presa da una cucina", "una botte di vino presa da una cantina", "una campana presa da una chiesa"], cat: "italia" },
  { domanda: "Nel 1984 a Livorno dragarono un canale in cerca di sculture di Modigliani e ne trovarono tre, false: una la scolpirono per scherzo tre studenti con...", rispostaVera: "un trapano elettrico", balleCasa: ["una vecchia lima da fabbro", "carta vetrata e un coltello", "un seghetto da giardino"], cat: "italia" },
  { domanda: "La Torre del Mangia, il simbolo di Siena, prende il nome da...", rispostaVera: "un campanaro che spendeva tutti i soldi", balleCasa: ["un cuoco che viveva in cima alla torre", "un mercante di cibo della piazza", "un soldato con un appetito enorme"], cat: "italia" },
  { domanda: "La bandiera dell'isola d'Elba, voluta da Napoleone nel 1814 quando fu esiliato lì, ha su una striscia rossa...", rispostaVera: "tre api d'oro", balleCasa: ["tre stelle d'argento", "tre gigli d'oro", "tre aquile nere"], cat: "italia" },
  { domanda: "Sui ponteggi della cupola del Duomo di Firenze, a decine di metri d'altezza, Brunelleschi fece allestire anche...", rispostaVera: "locali dove mangiare e bere", balleCasa: ["stanze dove dormire la notte", "piccole cappelle dove pregare", "botteghe dove riparare gli attrezzi"], cat: "italia" },
  { domanda: "La Cascata delle Marmore, in Umbria, alta 165 metri, deve il suo corso a un canale che i Romani scavarono nel 271 a.C. per...", rispostaVera: "far scolare l'acqua di una palude", balleCasa: ["portare l'acqua a una città vicina", "far girare le macine di un mulino", "fermare le piene del fiume Tevere"], cat: "italia" },
  { domanda: "Fino all'Ottocento i marinai e gli abitanti di Capri evitavano la Grotta Azzurra, perché si credeva che dentro ci abitassero...", rispostaVera: "streghe e mostri", balleCasa: ["fantasmi di pirati", "fate e folletti", "spiriti dei marinai annegati"], cat: "italia" },
  { domanda: "Ad Altamura, in Puglia, lo scheletro di un Neanderthal trovato nel 1993 in una grotta è ancora lì: le sue ossa sono incollate alla roccia da...", rispostaVera: "una crosta di cristalli di calcare", balleCasa: ["una crosta di sabbia indurita", "radici di antichi alberi", "una colata di fango secco"], cat: "italia" },
  { domanda: "Sulla monetina italiana da 1 centesimo di euro è disegnato...", rispostaVera: "Castel del Monte", balleCasa: ["la Torre di Pisa", "il Ponte di Rialto", "la Fontana di Trevi"], cat: "italia" },
  { domanda: "Se a Trieste chiedi al bar un «capo in b», ti portano...", rispostaVera: "un piccolo cappuccino in bicchiere", balleCasa: ["un caffè lungo servito freddo", "un caffè d'orzo con la panna", "un caffè con un goccio di grappa"], cat: "italia" },
  { domanda: "Per controllare se un prosciutto di Parma è maturato bene, gli esperti lo bucano con un ago fatto di...", rispostaVera: "osso di cavallo", balleCasa: ["osso di mucca", "corno di capra", "legno di ginepro"], cat: "italia" },
  { domanda: "La forma a stella a otto punte del pandoro, brevettato a Verona nel 1894, è stata disegnata da...", rispostaVera: "un pittore", balleCasa: ["un architetto", "una suora", "un orafo"], cat: "italia" },
  { domanda: "A Milano, il 3 febbraio, giorno di San Biagio, per proteggere la gola si mangia...", rispostaVera: "il panettone avanzato di Natale", balleCasa: ["un cucchiaio di miele e limone", "il brodo caldo di cappone", "una mela cotta con la cannella"], cat: "italia" },
  { domanda: "Nel 1930 il poeta Marinetti e i futuristi chiesero di abolire la pastasciutta perché, secondo loro...", rispostaVera: "rende scettici, lenti e pessimisti", balleCasa: ["rovina i denti e la voce", "fa venire il mal di testa", "toglie il fiato a chi fa sport"], cat: "italia" },
  { domanda: "Nel Decameron di Boccaccio, nel Paese di Bengodi c'è una montagna di parmigiano grattugiato dove si cuociono maccheroni e ravioli e poi si...", rispostaVera: "buttano giù dalla montagna", balleCasa: ["portano al re su un carro", "vendono al mercato di Firenze", "lasciano raffreddare nella neve"], cat: "italia" },
  { domanda: "Fino al 2006, il colore rosso del Campari veniva da...", rispostaVera: "insetti schiacciati, le cocciniglie", balleCasa: ["fiori di ibisco essiccati", "radici di barbabietola rossa", "bacche di goji spremute"], cat: "italia" },
  { domanda: "Il Prosecco prende il nome da un piccolo paese che si trova vicino a...", rispostaVera: "Trieste", balleCasa: ["Treviso", "Vicenza", "Bolzano"], cat: "italia" },
  { domanda: "Nel 1982, a Bologna, l'Accademia Italiana della Cucina ha depositato la ricetta ufficiale del ragù...", rispostaVera: "alla Camera di Commercio", balleCasa: ["in tribunale, davanti a un giudice", "in una banca svizzera", "al Ministero dell'Agricoltura"], cat: "italia" },
  { domanda: "Le mafaldine, la pasta lunga con i bordi ondulati, prendono il nome da...", rispostaVera: "una principessa di Casa Savoia", balleCasa: ["una cantante napoletana", "una cuoca bolognese dell'Ottocento", "la moglie di un pastaio"], cat: "italia" },
  { domanda: "A Firenze, nei muri di molti palazzi antichi, ci sono piccole finestrelle ad arco, le «buchette», che i nobili usavano per...", rispostaVera: "vendere il vino ai passanti", balleCasa: ["far passare la posta ai servitori", "controllare chi bussava alla porta", "dare da mangiare ai gatti"], cat: "italia" },
  { domanda: "Le mele annurca, in Campania, diventano rosse perché dopo la raccolta vengono lasciate per giorni...", rispostaVera: "sdraiate sulla paglia, a terra", balleCasa: ["appese a testa in giù", "chiuse al buio in cantina", "immerse nell'acqua fredda"], cat: "italia" },
  { domanda: "A Matera, per riconoscere il proprio pane nel forno di tutti, ogni famiglia lo segnava con...", rispostaVera: "un timbro di legno con le iniziali", balleCasa: ["un nodo di spago colorato", "un disegno fatto con le dita", "un foglietto con il cognome"], cat: "italia" },
  { domanda: "Il formaggio di fossa, tenuto sottoterra in buche sigillate da agosto, in Romagna tradizionalmente si tira fuori il giorno di...", rispostaVera: "Santa Caterina, il 25 novembre", balleCasa: ["San Martino, l'11 novembre", "Sant'Andrea, il 30 novembre", "Santa Lucia, il 13 dicembre"], cat: "italia" },
  { domanda: "Per il nocino, la tradizione modenese vuole che le noci verdi siano colte la notte di San Giovanni, a mano, da una donna che sale sull'albero...", rispostaVera: "a piedi scalzi", balleCasa: ["con gli occhi bendati", "cantando una filastrocca", "dopo un bagno nel fiume"], cat: "italia" },
  { domanda: "Il primo supermercato Esselunga, aperto a Milano nel 1957, nacque soprattutto con i soldi di una famosa famiglia americana: i ___.", rispostaVera: "Rockefeller", balleCasa: ["Kennedy", "Vanderbilt", "Ford"], cat: "italia" },
  { domanda: "Il radicchio tardivo di Treviso diventa dolce e croccante perché, dopo la raccolta, per più di due settimane lo si tiene...", rispostaVera: "al buio, con le radici nell'acqua", balleCasa: ["sotto la neve, coperto di paglia", "appeso a testa in giù in cantina", "sepolto sotto la sabbia"], cat: "italia" },
  { domanda: "Nel 1666, durante il Grande incendio di Londra, il diarista Samuel Pepys, per salvare un pezzo del suo prezioso Parmigiano...", rispostaVera: "lo seppellì in giardino", balleCasa: ["lo nascose dentro un camino spento", "lo gettò nel Tamigi", "lo regalò al re Carlo II"], cat: "italia" },
  { domanda: "Il maiale nero con la fascia bianca, la cinta senese, si vede già in un affresco del 1338 nel Palazzo Pubblico di Siena dipinto da...", rispostaVera: "Ambrogio Lorenzetti", balleCasa: ["Simone Martini", "Taddeo di Bartolo", "Spinello Aretino"], cat: "italia" },
  { domanda: "A Gragnano, vicino a Napoli, nell'Ottocento i maccheroni appena fatti si mettevano ad asciugare...", rispostaVera: "stesi nelle strade del paese", balleCasa: ["dentro grotte scavate nel tufo", "sui tetti, tra i comignoli", "sulle spiagge, al sole del mare"], cat: "italia" },
  { domanda: "L'insalata Caesar prende il nome dal ristoratore italiano Caesar Cardini, che la inventò nel 1924...", rispostaVera: "in Messico, a Tijuana", balleCasa: ["in Argentina, a Rosario", "negli Stati Uniti, a Chicago", "a Cuba, all'Avana"], cat: "mondo" },
  { domanda: "Nel 2001 il ministro degli Esteri britannico Robin Cook disse in un discorso che un vero piatto nazionale della Gran Bretagna è ormai...", rispostaVera: "il pollo tikka masala", balleCasa: ["il kebab con le patatine", "la pizza al prosciutto", "il riso saltato cinese"], cat: "mondo" },
  { domanda: "Il kiwi, prima che nel 1959 gli esportatori neozelandesi gli cambiassero nome, si chiamava...", rispostaVera: "uva spina cinese", balleCasa: ["mela di montagna", "uovo peloso", "limone d'Oriente"], cat: "mondo" },
  { domanda: "In Siberia, fino alla Seconda guerra mondiale, come moneta si usavano anche dei mattoni di...", rispostaVera: "tè pressato", balleCasa: ["orzo pressato", "burro essiccato", "carne secca di renna"], cat: "mondo" },
  { domanda: "Federico il Grande, re di Prussia, volle il monopolio del caffè e assunse circa 400 veterani di guerra per andare in giro a...", rispostaVera: "annusare l'aria in cerca di caffè", balleCasa: ["contare le tazzine nelle locande", "spiare chi macinava i chicchi", "assaggiare il caffè nelle case"], cat: "mondo" },
  { domanda: "Nel 1759 Arthur Guinness prese in affitto una birreria abbandonata di Dublino con un contratto lungo...", rispostaVera: "9.000 anni", balleCasa: ["99 anni", "999 anni", "5.000 anni"], cat: "mondo" },
  { domanda: "Il 31 luglio 1970 la marina inglese smise di dare ai marinai la razione quotidiana di rum, e quel giorno fu soprannominato...", rispostaVera: "Black Tot Day", balleCasa: ["Dry Navy Day", "Sober Monday", "Last Grog Day"], cat: "mondo" },
  { domanda: "Dal 1971 negli Stati Uniti è vietato importare l'haggis scozzese, perché uno degli ingredienti è...", rispostaVera: "il polmone di pecora", balleCasa: ["il cervello di mucca", "gli occhi di pecora", "la lingua di cavallo"], cat: "mondo" },
  { domanda: "Tra Nigeria e Ghana va avanti da anni una finta «guerra» per decidere chi cucina meglio...", rispostaVera: "il riso jollof", balleCasa: ["il pane di manioca", "la zuppa di arachidi", "gli spiedini di capra"], cat: "mondo" },
  { domanda: "Il «bunny chow», piatto famoso di Durban, in Sudafrica, è un curry servito dentro...", rispostaVera: "una pagnotta svuotata", balleCasa: ["una zucca svuotata", "mezza noce di cocco", "un cestino di foglie"], cat: "mondo" },
  { domanda: "In Olanda, quando nasce un bambino, si offrono agli ospiti fette biscottate con sopra i «topolini» (muisjes), cioè...", rispostaVera: "semi di anice zuccherati", balleCasa: ["palline di marzapane", "mandorle tostate col miele", "chicchi di caffè al cioccolato"], cat: "mondo" },
  { domanda: "Due regioni dell'India, il Bengala Occidentale e l'Odisha, hanno litigato per anni, con richieste ufficiali di marchio, su chi avesse inventato il dolce...", rispostaVera: "il rasgulla", balleCasa: ["il gulab jamun", "il jalebi", "il laddu"], cat: "mondo" },
  { domanda: "Ogni 23 dicembre, a Oaxaca, in Messico, si fa una gara di sculture fatte con...", rispostaVera: "ravanelli giganti", balleCasa: ["grosse zucche", "peperoncini enormi", "cipolle intagliate"], cat: "mondo" },
  { domanda: "In Groenlandia il kiviak, piatto tradizionale, si prepara cucendo centinaia di uccelli marini interi, piume comprese, dentro una pelle di foca, che poi viene...", rispostaVera: "sepolta sotto un cumulo di sassi", balleCasa: ["appesa al vento fino a primavera", "lasciata a congelare nel ghiaccio", "affumicata sopra il fuoco per mesi"], cat: "mondo" },
  { domanda: "La paella valenciana tradizionale, quella che a Valencia considerano la vera, oltre a riso, zafferano e fagiolini ha...", rispostaVera: "coniglio, pollo e lumache", balleCasa: ["gamberi, cozze e calamari", "agnello, maiale e carciofi", "salsiccia e peperoni rossi"], cat: "mondo" },
  { domanda: "Per studiare la vitamina C, in alcuni esperimenti il premio Nobel Albert Szent-Györgyi usò come fonte...", rispostaVera: "la paprika", balleCasa: ["i kiwi", "il tè verde", "il prezzemolo"], cat: "mondo" },
  { domanda: "Secondo le statistiche del 2016, il Paese in cui si beve più tè a testa è...", rispostaVera: "la Turchia", balleCasa: ["il Marocco", "la Russia", "la Cina"], cat: "mondo" },
  { domanda: "Fino al 2011, per la legge russa, la birra non era considerata un alcolico ma...", rispostaVera: "un alimento", balleCasa: ["un tipo di tisana", "un integratore", "un medicinale"], cat: "mondo" },
  { domanda: "Prima di chiamarsi Pepsi, la bibita inventata nel 1893 da un farmacista della Carolina del Nord si chiamava...", rispostaVera: "Brad's Drink", balleCasa: ["Doc's Soda", "Carolina Fizz", "Dixie Pop"], cat: "mondo" },
  { domanda: "In un sondaggio del 2000 i giapponesi hanno votato come migliore invenzione giapponese del Novecento...", rispostaVera: "gli spaghetti istantanei", balleCasa: ["il sushi su nastro", "il riso in lattina", "il tè freddo in bottiglia"], cat: "mondo" },
  { domanda: "Sulle Ande, per fare patate che durano anni, le si lascia gelare di notte e asciugare al sole, poi le si...", rispostaVera: "pesta coi piedi", balleCasa: ["affumica nel camino", "ricopre di cenere", "bolle nel latte"], cat: "mondo" },
  { domanda: "Per fare la chicha, bevanda alcolica tradizionale del Sudamerica, in certi luoghi la manioca o il mais venivano prima...", rispostaVera: "masticati e sputati", balleCasa: ["lasciati al sole per un mese", "avvolti in foglie di banano", "bolliti nel latte"], cat: "mondo" },
  { domanda: "Nel 1976, in una degustazione alla cieca a Parigi, i giudici francesi diedero il primo posto tra i rossi a un vino...", rispostaVera: "della California", balleCasa: ["dell'Australia", "del Sudafrica", "del Cile"], cat: "mondo" },
  { domanda: "Nel 1968 il Pakistan regalò dei manghi a Mao Zedong, e in Cina quel regalo fu festeggiato...", rispostaVera: "con grandi processioni", balleCasa: ["con 21 colpi di cannone", "con una festa di tre giorni", "con fuochi d'artificio"], cat: "mondo" },
  { domanda: "In Giappone, dal 1980, una bevanda per chi fa sport si chiama «Pocari ___».", rispostaVera: "Sweat, cioè sudore", balleCasa: ["Splash, cioè schizzo", "Power, cioè forza", "Wave, cioè onda"], cat: "mondo" },
  { domanda: "Dopo i terremoti di Christchurch, nel 2012 sparì dai negozi neozelandesi il Marmite, la crema di lievito, e la crisi fu soprannominata...", rispostaVera: "Marmageddon", balleCasa: ["Toastapocalypse", "Spreadgate", "Yeast Panic"], cat: "mondo" },
  { domanda: "I Post-it sono gialli per puro caso: i loro inventori, per i primi esperimenti, usarono...", rispostaVera: "la carta di scarto del laboratorio accanto", balleCasa: ["i fogli di un vecchio calendario", "la carta da imballo avanzata", "le buste gialle del direttore"], cat: "invenzioni" },
  { domanda: "Il nome Velcro nasce dall'unione di due parole francesi che vogliono dire...", rispostaVera: "velluto e uncino", balleCasa: ["velo e nodo", "vela e corda", "pelle e catena"], cat: "invenzioni" },
  { domanda: "Il nastro adesivo Scotch si chiama così per un'offesa: nel 1925 un verniciatore, arrabbiato col nastro di prova, disse ai capi della 3M che erano...", rispostaVera: "tirchi come gli scozzesi", balleCasa: ["precisi come gli svizzeri", "lenti come i bradipi", "burberi come i marinai"], cat: "invenzioni" },
  { domanda: "Lo spray WD-40, che oggi si usa in casa per i cardini che cigolano, negli anni Cinquanta fu creato per proteggere dalla ruggine...", rispostaVera: "il rivestimento di un missile", balleCasa: ["la carena di un sommergibile", "le ali di un bombardiere", "le ruote di un carro armato"], cat: "invenzioni" },
  { domanda: "Quando nel 1924 arrivarono sul mercato, i fazzoletti di carta Kleenex servivano per togliere...", rispostaVera: "la crema dal viso", balleCasa: ["le macchie dai vestiti", "il fango dalle scarpe", "la polvere dai mobili"], cat: "invenzioni" },
  { domanda: "Sulle prime scatolette di latta dell'Ottocento le istruzioni per aprirle dicevano di usare...", rispostaVera: "martello e scalpello", balleCasa: ["un coltello e una pietra", "una lima e una tenaglia", "un'ascia e un cuneo"], cat: "invenzioni" },
  { domanda: "Il pluriball, quello con le bolle da far scoppiare, fu inventato nel 1957 per essere...", rispostaVera: "una carta da parati", balleCasa: ["un materassino da spiaggia", "una tovaglia antiscivolo", "un tappeto per bambini"], cat: "invenzioni" },
  { domanda: "Il chewing gum americano Dubble Bubble, inventato nel 1928, è rosa perché...", rispostaVera: "era l'unico colorante che c'era in fabbrica", balleCasa: ["lo scelse la figlia del proprietario", "lo estrasse a sorte un operaio", "ricordava il colore della lingua"], cat: "invenzioni" },
  { domanda: "Il codice QR, quello che si inquadra col telefono, fu inventato in Giappone nel 1994: il suo disegno è stato influenzato da...", rispostaVera: "le pedine del gioco del Go", balleCasa: ["un cruciverba", "i tatami di una casa giapponese", "le tessere del mahjong"], cat: "invenzioni" },
  { domanda: "Secondo il suo disegnatore, il logo della Apple ha un morso perché, senza, la mela poteva sembrare...", rispostaVera: "una ciliegia", balleCasa: ["una pesca", "una pera", "un'arancia"], cat: "invenzioni" },
  { domanda: "La parola inglese \"zipper\", che vuol dire cerniera lampo, nel 1923 fu usata per la prima volta per un modello di...", rispostaVera: "stivali di gomma", balleCasa: ["tende da campeggio", "cappotti da pescatore", "sacchi a pelo"], cat: "invenzioni" },
  { domanda: "Una lampadina accesa quasi senza pause dal 1901 si trova a Livermore, in California, dentro una...", rispostaVera: "caserma dei pompieri", balleCasa: ["stazione dei treni", "chiesa di campagna", "scuola elementare"], cat: "invenzioni" },
  { domanda: "Nel 1982 un professore americano propose la faccina :-) dopo che, su una bacheca di computer, molti presero sul serio un finto avviso di...", rispostaVera: "contaminazione da mercurio in un ascensore", balleCasa: ["una fuga di gas in un laboratorio", "un'invasione di formiche in mensa", "una perdita d'acido in un corridoio"], cat: "invenzioni" },
  { domanda: "Nel gennaio 1999 i servizi segreti americani della NSA vietarono ai dipendenti di portare in ufficio...", rispostaVera: "i Furby", balleCasa: ["i Tamagotchi", "i Game Boy", "le bambole Barbie"], cat: "invenzioni" },
  { domanda: "Il Super Soaker, il fucile ad acqua più famoso, nacque per caso mentre un ingegnere della NASA faceva esperimenti su...", rispostaVera: "un nuovo sistema di refrigerazione", balleCasa: ["un paracadute per i satelliti", "una doccia per gli astronauti", "un carburante per i razzi"], cat: "invenzioni" },
  { domanda: "Il gioco da cui nasce il Risiko fu inventato in Francia nel 1957 da un regista premiato con l'Oscar per un cortometraggio su un bambino e...", rispostaVera: "un palloncino rosso", balleCasa: ["un cane smarrito", "un ombrello giallo", "una barchetta di carta"], cat: "invenzioni" },
  { domanda: "Il nome Starbucks viene dal romanzo Moby Dick, dove Starbuck è...", rispostaVera: "il primo ufficiale della nave", balleCasa: ["il cuoco di bordo", "il mozzo più piccolo", "il medico della ciurma"], cat: "invenzioni" },
  { domanda: "Il suono che faceva Windows 95 quando si accendeva il computer fu composto dal musicista inglese...", rispostaVera: "Brian Eno", balleCasa: ["Elton John", "Mike Oldfield", "Phil Collins"], cat: "invenzioni" },
  { domanda: "La suoneria più famosa dei vecchi telefoni Nokia, apparsa nel 1994, è presa da...", rispostaVera: "un valzer per chitarra del 1902", balleCasa: ["una sonata per pianoforte di Chopin", "una canzone popolare finlandese", "un vecchio inno sportivo"], cat: "invenzioni" },
  { domanda: "Nel 1943 negli Stati Uniti, per quasi due mesi, fu vietato vendere il pane...", rispostaVera: "già affettato", balleCasa: ["bianco", "ancora caldo", "con l'uvetta"], cat: "invenzioni" },
  { domanda: "La PlayStation nacque perché la Nintendo, nel 1991, cancellò un accordo con la Sony, che doveva costruire per lei...", rispostaVera: "un lettore di CD per il Super Nintendo", balleCasa: ["un lettore di cassette per il Game Boy", "un modem per il Super Nintendo", "un videoregistratore per il Super Nintendo"], cat: "invenzioni" },
  { domanda: "L'austriaco che creò la Red Bull prese l'idea in Thailandia, da una bevanda locale che, a suo dire, gli aveva fatto passare...", rispostaVera: "il jet lag", balleCasa: ["il mal di testa", "il mal di stomaco", "il mal d'auto"], cat: "invenzioni" },
  { domanda: "Il prototipo del primo mouse, costruito negli anni Sessanta da Douglas Engelbart, aveva la scocca fatta di...", rispostaVera: "legno", balleCasa: ["cartone", "gomma dura", "alluminio"], cat: "invenzioni" },
  { domanda: "I progettisti della bottiglia della Coca-Cola, nel 1915, cercarono in biblioteca la foglia di coca e la noce di cola ma, non trovandole, si ispirarono a...", rispostaVera: "un baccello di cacao", balleCasa: ["una zucca da campo", "una pigna", "un fiore di loto"], cat: "invenzioni" },
  { domanda: "Durante l'occupazione tedesca della Norvegia, nella Seconda guerra mondiale, molti norvegesi portavano sul bavero della giacca, come segno di resistenza...", rispostaVera: "una graffetta", balleCasa: ["un bottone dorato", "una piuma di gallo", "una spilla a forma di renna"], cat: "invenzioni" },
  { domanda: "Il nome del Tamagotchi, il cucciolo digitale del 1996, è fatto con due parole giapponesi che vogliono dire...", rispostaVera: "uovo e orologio", balleCasa: ["pulcino e tasca", "amico e batteria", "palla e piume"], cat: "invenzioni" },
  { domanda: "Il cane che ascolta il grammofono nel logo \"La voce del padrone\" era un cane vero e si chiamava...", rispostaVera: "Nipper", balleCasa: ["Rover", "Buster", "Scamp"], cat: "invenzioni" },
  { domanda: "Il campione brasiliano Pelé non si chiama davvero così: secondo il suo racconto, da bambino prese quel soprannome perché storpiava il nome di...", rispostaVera: "un portiere di nome Bilé", balleCasa: ["un cantante di nome Pelito", "un barbiere di nome Peleo", "un pasticcere di nome Pilão"], cat: "spettacolo" },
  { domanda: "Quando fu inventata, nel 1895 negli Stati Uniti, la pallavolo si chiamava...", rispostaVera: "mintonette", balleCasa: ["ballonet", "netpong", "volleynet"], cat: "spettacolo" },
  { domanda: "Il ping pong è nato nell'Ottocento nelle case inglesi, come gioco da fare dopo cena sul tavolo da pranzo: come rete si usava...", rispostaVera: "una fila di libri", balleCasa: ["una fila di bicchieri", "una fila di candelieri", "un paravento da salotto"], cat: "spettacolo" },
  { domanda: "Il primo torneo di tennis di Wimbledon, nel 1877, fu organizzato dal club per raccogliere i soldi che servivano a riparare...", rispostaVera: "il rullo del prato, trainato da un pony", balleCasa: ["la carrozza del presidente del club", "il tetto del padiglione, crollato per la neve", "la fontana del giardino, rovinata dal gelo"], cat: "spettacolo" },
  { domanda: "Al Gran Premio di Monaco di Formula 1 del 1950 un incidente a catena mise fuori gioco molte auto: tutto cominciò per colpa di...", rispostaVera: "un'onda del mare sulla pista", balleCasa: ["un gatto in mezzo alla pista", "un cartellone staccato dal vento", "un tombino saltato in aria"], cat: "spettacolo" },
  { domanda: "Johnny Weissmuller, il nuotatore che poi fu Tarzan al cinema, diceva di essere nato in Pennsylvania, ma era nato in un villaggio che oggi è in...", rispostaVera: "Romania", balleCasa: ["Austria", "Slovacchia", "Germania"], cat: "spettacolo" },
  { domanda: "Quando vinse i 200 metri alle Olimpiadi di Roma del 1960, il velocista Livio Berruti correva con...", rispostaVera: "occhiali scuri", balleCasa: ["una fascia di lana sulla fronte", "un cappellino con la visiera", "i polsini di spugna"], cat: "spettacolo" },
  { domanda: "Nel 1908 l'italiano Dorando Pietri fu squalificato dalla maratona olimpica di Londra: a raccontare la sua storia sul giornale fu lo scrittore...", rispostaVera: "Arthur Conan Doyle", balleCasa: ["Rudyard Kipling", "H. G. Wells", "Mark Twain"], cat: "spettacolo" },
  { domanda: "Prima delle Olimpiadi del 2000 il nuotatore Eric Moussambani, della Guinea Equatoriale, non aveva mai visto una piscina olimpica: si allenava in...", rispostaVera: "una piscina d'albergo cortissima", balleCasa: ["una vasca dell'acquedotto cittadino", "una piscina scolastica senza corsie", "una cisterna per l'acqua piovana"], cat: "spettacolo" },
  { domanda: "Ai Mondiali di calcio del 2006 l'arbitro inglese Graham Poll, in Croazia-Australia, mostrò a uno stesso giocatore il cartellino giallo...", rispostaVera: "tre volte, prima di espellerlo", balleCasa: ["quattro volte, prima di espellerlo", "due volte, nello stesso minuto", "cinque volte, prima di espellerlo"], cat: "spettacolo" },
  { domanda: "Alle Olimpiadi di Atene 2004 una sola gara di atletica si svolse nell'antico stadio di Olimpia, usato già nell'antichità. La gara era...", rispostaVera: "il getto del peso", balleCasa: ["il lancio del disco", "il salto in lungo", "la corsa dei 200 metri"], cat: "spettacolo" },
  { domanda: "Nel 1950, ai Mondiali di calcio in Brasile, gli Stati Uniti batterono l'Inghilterra 1 a 0. Il loro portiere, Frank Borghi, nella vita di tutti i giorni...", rispostaVera: "guidava il carro funebre di uno zio", balleCasa: ["guidava il furgone del latte di un cugino", "guidava il tram di una grande città", "guidava il carro attrezzi di un amico"], cat: "spettacolo" },
  { domanda: "La squadra giapponese di pallavolo femminile che vinse l'oro a Tokyo 1964, soprannominata «le streghe d'Oriente», era formata quasi tutta da...", rispostaVera: "operaie della stessa fabbrica tessile", balleCasa: ["cuoche della stessa mensa", "infermiere dello stesso ospedale", "maestre della stessa scuola"], cat: "spettacolo" },
  { domanda: "Maurice Garin, il «piccolo spazzacamino» che nel 1903 vinse il primo Tour de France, era nato in...", rispostaVera: "Valle d'Aosta, cioè in Italia", balleCasa: ["Belgio, vicino a Bruges", "Svizzera, vicino a Losanna", "Spagna, vicino a Bilbao"], cat: "spettacolo" },
  { domanda: "Subbuteo, il calcio da tavolo con le statuine, si chiama così perché è il nome scientifico di...", rispostaVera: "un piccolo falco", balleCasa: ["un piccolo gufo", "un pesce dei fiumi inglesi", "un fiore dei prati"], cat: "spettacolo" },
  { domanda: "La prima mascotte ufficiale della storia delle Olimpiadi, a Monaco di Baviera nel 1972, era un cane di razza...", rispostaVera: "bassotto", balleCasa: ["carlino", "San Bernardo", "pastore tedesco"], cat: "spettacolo" },
  { domanda: "Nel 1912 il maratoneta giapponese Shizo Kanakuri lasciò la maratona olimpica di Stoccolma senza dirlo a nessuno. Nel 1967 la finì: il suo tempo ufficiale fu di...", rispostaVera: "54 anni, 8 mesi e 6 giorni", balleCasa: ["53 anni, 11 mesi e 2 giorni", "55 anni, 3 mesi e 20 giorni", "56 anni, 1 mese e 9 giorni"], cat: "spettacolo" },
  { domanda: "Alle Olimpiadi di Rio 2016 l'acqua della piscina dei tuffi diventò verde da un giorno all'altro perché qualcuno ci aveva versato per errore...", rispostaVera: "acqua ossigenata", balleCasa: ["un secchio di vernice", "troppo cloro", "una tonnellata di sale"], cat: "spettacolo" },
  { domanda: "Ondina Valla, la prima italiana a vincere un oro olimpico (Berlino 1936, 80 metri ostacoli), all'anagrafe si chiamava in realtà...", rispostaVera: "Trebisonda", balleCasa: ["Ermenegilda", "Ottavina", "Clorinda"], cat: "spettacolo" },
  { domanda: "Il motto delle Olimpiadi, «Più veloce, più alto, più forte», non lo inventò De Coubertin: lo prese in prestito da un amico che era...", rispostaVera: "un frate domenicano", balleCasa: ["un generale prussiano", "un poeta greco", "un maestro di ginnastica"], cat: "spettacolo" },
  { domanda: "Il primo campionato italiano di calcio, nel 1898, si giocò a Torino e durò...", rispostaVera: "un solo giorno", balleCasa: ["tre giorni", "una settimana", "quindici giorni"], cat: "spettacolo" },
  { domanda: "Un urlo registrato nel 1951 per un western è stato riusato in centinaia di film, Guerre Stellari compreso: lo chiamano il grido di...", rispostaVera: "Wilhelm", balleCasa: ["Gustav", "Heinrich", "Fritz"], cat: "spettacolo" },
  { domanda: "Nell'originale americano, Yoda di Guerre Stellari e Miss Piggy dei Muppet hanno la voce (e le mani) dello stesso artista, che si chiama...", rispostaVera: "Frank Oz", balleCasa: ["Jim Henson", "Mel Blanc", "Rowan Atkinson"], cat: "spettacolo" },
  { domanda: "Sul set de «Lo squalo» lo squalo meccanico fu soprannominato Bruce, come...", rispostaVera: "l'avvocato di Spielberg", balleCasa: ["il cuoco della troupe", "il cane del regista", "il papà dello sceneggiatore"], cat: "spettacolo" },
  { domanda: "Nella scena de «I predatori dell'arca perduta» in cui Indiana Jones spara allo spadaccino invece di combattere, l'idea nacque perché Harrison Ford quel giorno...", rispostaVera: "aveva la dissenteria", balleCasa: ["si era slogato una caviglia", "aveva dimenticato la parte", "doveva prendere un aereo"], cat: "spettacolo" },
  { domanda: "Nel «Mago di Oz» del 1939 il primo attore scelto per fare l'Uomo di Latta finì in ospedale e lasciò il film a causa di...", rispostaVera: "la polvere d'alluminio del trucco", balleCasa: ["il caldo dei riflettori", "il fumo delle scene di fuoco", "una caduta dalla scala del set"], cat: "spettacolo" },
  { domanda: "Nel 1986 gli abitanti di Carmel, un paesino della California, elessero sindaco un attore famoso:...", rispostaVera: "Clint Eastwood", balleCasa: ["Robert Redford", "Paul Newman", "John Travolta"], cat: "spettacolo" },
  { domanda: "A causa della Seconda guerra mondiale, per tre anni le statuette degli Oscar furono fatte di...", rispostaVera: "gesso dipinto", balleCasa: ["legno dorato", "cartapesta", "vetro soffiato"], cat: "spettacolo" },
  { domanda: "Per far sembrare americano il suo film «Per un pugno di dollari», Sergio Leone si firmò con un nome inglese:...", rispostaVera: "Bob Robertson", balleCasa: ["Bill Williamson", "Tom Thompson", "Jack Wilkins"], cat: "spettacolo" },
  { domanda: "Lo Studio Ghibli, quello dei film di Miyazaki, prende il nome da...", rispostaVera: "un aereo italiano", balleCasa: ["una gelateria di Roma", "un cavallo da corsa", "una marca di ombrelli"], cat: "spettacolo" },
  { domanda: "Il primo Kermit, la rana dei Muppet, aveva gli occhi fatti con due mezze palline da ping pong e il corpo ricavato da un vecchio...", rispostaVera: "cappotto della mamma di Jim Henson", balleCasa: ["calzino del fratello di Jim Henson", "tappeto della nonna di Jim Henson", "berretto del papà di Jim Henson"], cat: "spettacolo" },
  { domanda: "Oscar, il brontolone che vive nel bidone della spazzatura di Sesame Street, oggi è verde, ma nel primo anno della serie era...", rispostaVera: "arancione", balleCasa: ["viola", "azzurro", "rosa"], cat: "spettacolo" },
  { domanda: "L'orso Winnie the Pooh ha preso il nome Winnie da un'orsa vera dello zoo di Londra, che da cucciola era stata portata in Europa come...", rispostaVera: "mascotte dei soldati canadesi", balleCasa: ["attrazione di un circo francese", "regalo per il re Giorgio V", "mascotte di una nave da guerra"], cat: "spettacolo" },
  { domanda: "Il nome del cane Scooby-Doo è ispirato a un verso senza parole cantato da Frank Sinatra nella canzone...", rispostaVera: "Strangers in the Night", balleCasa: ["Fly Me to the Moon", "My Way", "Summer Wind"], cat: "spettacolo" },
  { domanda: "L'idea della televisione elettronica venne a Philo Farnsworth, un ragazzino di 14 anni, mentre...", rispostaVera: "arava un campo", balleCasa: ["mungeva le mucche", "guardava le onde di un lago", "riparava il tetto di un fienile"], cat: "spettacolo" },
  { domanda: "Il personaggio a fumetti Dylan Dog è disegnato con la faccia dell'attore inglese...", rispostaVera: "Rupert Everett", balleCasa: ["Hugh Grant", "Jude Law", "Colin Firth"], cat: "spettacolo" },
  { domanda: "Il nome Bruce, quello di Batman, è un omaggio a...", rispostaVera: "un re di Scozia", balleCasa: ["un famoso pugile", "un campione di baseball", "un cavaliere di re Artù"], cat: "spettacolo" },
  { domanda: "Nel primo fumetto di Hulk, nel 1962, il mostro non era verde ma grigio. Lo cambiarono perché...", rispostaVera: "il grigio usciva sempre di un tono diverso", balleCasa: ["il verde costava meno inchiostro", "i lettori dissero che il grigio era triste", "il grigio sembrava un fantasma"], cat: "spettacolo" },
  { domanda: "Wonder Woman fu creata nel 1941 da uno psicologo, William Marston, che prima aveva contribuito a inventare...", rispostaVera: "la macchina della verità", balleCasa: ["il test delle macchie d'inchiostro", "il registratore a nastro", "il frullatore"], cat: "spettacolo" },
  { domanda: "Uno dei papà dei supereroi Marvel si faceva chiamare Stan Lee perché il suo vero nome, Stanley Lieber, voleva tenerlo per...", rispostaVera: "i romanzi seri che sognava di scrivere", balleCasa: ["le poesie che scriveva di nascosto", "il teatro, dove voleva recitare", "i film che sognava di girare"], cat: "spettacolo" },
  { domanda: "La principessa Zelda dei videogiochi ha preso il nome da una donna vera, che era...", rispostaVera: "la moglie di un grande scrittore americano", balleCasa: ["la nonna del suo creatore", "un'attrice del cinema muto", "una principessa giapponese vissuta davvero"], cat: "spettacolo" },
  { domanda: "Il Creeper, il mostro verde che esplode in Minecraft, è nato per sbaglio mentre il suo creatore voleva fare...", rispostaVera: "un maiale", balleCasa: ["una mucca", "un pollo", "un cavallo"], cat: "spettacolo" },
  { domanda: "Lara Croft, l'eroina di Tomb Raider, all'inizio doveva avere un altro nome:...", rispostaVera: "Laura Cruz", balleCasa: ["Lena Crane", "Clara Craft", "Laura Hunter"], cat: "spettacolo" },
  { domanda: "Il primo Final Fantasy (1987) rischiava di essere l'ultimo gioco del suo creatore: se fosse andato male, lui avrebbe...", rispostaVera: "lasciato i videogiochi per l'università", balleCasa: ["aperto un ristorante di ramen", "fatto il maestro di scuola", "venduto tutto e girato il mondo"], cat: "spettacolo" },
  { domanda: "L'idea del videogioco The Sims venne al suo creatore, Will Wright, dopo che...", rispostaVera: "un incendio gli distrusse la casa", balleCasa: ["una tempesta gli scoperchiò il tetto", "gli rubarono tutti i mobili", "perse una scommessa con sua figlia"], cat: "spettacolo" },
  { domanda: "Nel 2014 l'autore di Flappy Bird, che guadagnava circa 50.000 dollari al giorno, tolse il gioco dagli store perché...", rispostaVera: "creava dipendenza e si sentiva in colpa", balleCasa: ["voleva farne una versione più bella", "troppi altri lo avevano copiato", "la sua azienda stava per chiudere"], cat: "spettacolo" },
  { domanda: "Nel 2005 in World of Warcraft una finta peste scappò da un dungeon e riempì di cadaveri le città. A portarla lì furono soprattutto...", rispostaVera: "gli animaletti dei giocatori", balleCasa: ["i cavalli dei mercanti", "le lettere della posta del gioco", "le monete scambiate al mercato"], cat: "spettacolo" },
  { domanda: "Nel 1983 la Atari si sbarazzò di tantissime cartucce invendute, tra cui quelle del flop «E.T.», schiacciandole e seppellendole...", rispostaVera: "in una discarica del New Mexico", balleCasa: ["in una vecchia miniera dell'Arizona", "sotto uno stadio di Chicago", "in fondo a un lago del Michigan"], cat: "spettacolo" },
  { domanda: "Pochi giorni dopo il funerale del compositore Haydn, nel 1809, due uomini pagarono il becchino per portare via dalla tomba...", rispostaVera: "la testa, per studiarla", balleCasa: ["il cuore, per conservarlo in una teca", "le mani, per farne un calco", "il violino, per rivenderlo"], cat: "spettacolo" },
  { domanda: "In Italia, nel Cinquecento, i primi «conservatori», da cui viene la parola «conservatorio», erano...", rispostaVera: "orfanotrofi dove si insegnava musica", balleCasa: ["magazzini dove si conservavano gli strumenti", "biblioteche con spartiti rari e antichi", "chiese dove i cori cantavano giorno e notte"], cat: "spettacolo" },
  { domanda: "Nella lingua hawaiana la parola «ukulele» vuol dire più o meno...", rispostaVera: "pulce che salta", balleCasa: ["grillo che canta", "piccola onda dolce", "fiore che dondola"], cat: "spettacolo" },
  { domanda: "In giapponese la parola «karaoke» vuol dire, alla lettera...", rispostaVera: "orchestra vuota", balleCasa: ["canto senza fine", "voce in libertà", "microfono aperto"], cat: "spettacolo" },
  { domanda: "Una delle prime chitarre elettriche messe in vendita, nel 1932, era tutta di alluminio e la chiamavano...", rispostaVera: "la padella", balleCasa: ["il ferro da stiro", "la pentola", "la teglia"], cat: "spettacolo" },
  { domanda: "Il flauto trovato nella grotta tedesca di Hohle Fels, vecchio di più di 35.000 anni, è uno degli strumenti più antichi che conosciamo ed è ricavato dall'osso dell'ala di...", rispostaVera: "un avvoltoio", balleCasa: ["un'aquila reale", "un'oca selvatica", "una cicogna"], cat: "spettacolo" },
  { domanda: "La microspia di Léon Theremin, inventore dello strumento che si suona senza toccarlo, rimase per anni nello studio dell'ambasciatore USA a Mosca, nascosta in...", rispostaVera: "uno stemma di legno degli Stati Uniti", balleCasa: ["un grande mappamondo di legno", "un vecchio orologio a pendolo", "un vaso cinese di porcellana"], cat: "spettacolo" },
  { domanda: "La musichetta del Tetris è una vecchia canzone popolare russa, «Korobeiniki», parola che vuol dire...", rispostaVera: "venditori ambulanti", balleCasa: ["cacciatori di orsi", "ballerini di strada", "pescatori del Volga"], cat: "spettacolo" },
  { domanda: "Per mettere a punto l'MP3, l'ingegnere Karlheinz Brandenburg ascoltò e riascoltò una canzone di Suzanne Vega, che per questo è detta «la mamma dell'MP3». Si intitola...", rispostaVera: "Tom's Diner", balleCasa: ["Luka", "Gypsy", "Caramel"], cat: "spettacolo" },
  { domanda: "Nel film «2001: Odissea nello spazio» il computer HAL 9000, mentre lo spengono, canta una canzone che nel 1961 fu una delle prime cantate da un vero computer. Si intitola...", rispostaVera: "Daisy Bell", balleCasa: ["Oh! Susanna", "Greensleeves", "Danny Boy"], cat: "spettacolo" },
  { domanda: "La più antica registrazione di una canzone che possiamo ancora ascoltare è del 1860 ed è la canzoncina francese per bambini...", rispostaVera: "Au clair de la lune", balleCasa: ["Frère Jacques", "Sur le pont d'Avignon", "Alouette"], cat: "spettacolo" },
  { domanda: "Per inclinarsi in avanti senza cadere nei concerti, Michael Jackson ha brevettato...", rispostaVera: "scarpe che si agganciavano al palco", balleCasa: ["un palco che si inclinava", "stivali con le suole magnetiche", "una cintura con fili invisibili"], cat: "spettacolo" },
  { domanda: "Prima di essere un gruppo musicale, il nome ABBA era già quello di un'azienda svedese che vendeva...", rispostaVera: "pesce in scatola", balleCasa: ["salsicce affumicate", "latte in polvere", "biscotti al burro"], cat: "spettacolo" },
  { domanda: "Il cantante degli U2, Bono, ha preso il suo nome d'arte dall'insegna di un negozio di Dublino che vendeva...", rispostaVera: "apparecchi acustici", balleCasa: ["occhiali da sole", "strumenti musicali", "dischi usati"], cat: "spettacolo" },
  { domanda: "Tutti i membri dei Ramones avevano il cognome «Ramone», ma era finto: l'idea l'hanno presa da un nome falso usato da...", rispostaVera: "Paul McCartney", balleCasa: ["Elvis Presley", "Mick Jagger", "Little Richard"], cat: "spettacolo" },
  { domanda: "Il chitarrista dei Queen, Brian May, al posto del plettro usa...", rispostaVera: "una moneta da sei pence", balleCasa: ["un bottone di madreperla", "un pezzetto di corno di bufalo", "una scheggia di conchiglia"], cat: "spettacolo" },
  { domanda: "Nel 1965 gli astronauti del Gemini 6 hanno suonato «Jingle Bells» nello spazio con...", rispostaVera: "un'armonica e dei campanelli", balleCasa: ["un flauto e un tamburello", "un ukulele e un triangolo", "una trombetta e un sonaglio"], cat: "spettacolo" },
  { domanda: "Negli anni Ottanta Ringo Starr, il batterista dei Beatles, ha raccontato con la sua voce le avventure di...", rispostaVera: "Il trenino Thomas", balleCasa: ["Postino Pat", "Il pompiere Sam", "Orso Paddington"], cat: "spettacolo" },
  { domanda: "Nel 1978 il film «Brian di Nazareth» dei Monty Python rimase senza soldi, e il Beatle George Harrison lo salvò...", rispostaVera: "ipotecando la sua villa", balleCasa: ["vendendo la sua chitarra preferita", "chiedendo un prestito a Paul McCartney", "vendendo tutti i suoi dischi d'oro"], cat: "spettacolo" },
  { domanda: "L'Eurovision del 1969, a Madrid, finì con un risultato mai più ripetuto: arrivarono prime...", rispostaVera: "quattro canzoni a pari merito", balleCasa: ["due canzoni, scelte con una monetina", "tre canzoni a pari merito", "nessuna: la gara fu ripetuta"], cat: "spettacolo" },
  { domanda: "Prima di fare il cantante, Luciano Pavarotti ha insegnato alle elementari e poi ha lavorato come...", rispostaVera: "venditore di assicurazioni", balleCasa: ["cameriere in un ristorante", "commesso in un negozio di dischi", "autista di pullman"], cat: "spettacolo" },
  { domanda: "L'inno nazionale del Liechtenstein ha la stessa musica di un altro inno, quello...", rispostaVera: "del Regno Unito", balleCasa: ["della Francia", "dell'Austria", "dei Paesi Bassi"], cat: "spettacolo" },
  { domanda: "Nel 1965, durante la missione Gemini 3, l'astronauta John Young portò di nascosto sulla navicella...", rispostaVera: "un panino con il corned beef", balleCasa: ["un panino con la mortadella", "una pizzetta ancora calda", "un budino al cioccolato"], cat: "scienza" },
  { domanda: "Sulla Luna, nel 1969, si ruppe l'interruttore che serviva ad accendere il motore per tornare a casa: Buzz Aldrin lo azionò con...", rispostaVera: "una penna a punta di feltro", balleCasa: ["un cucchiaio da campeggio", "un tubetto di colla", "la punta di un coltellino"], cat: "scienza" },
  { domanda: "Il paracadute con cui il rover Perseverance è sceso su Marte, nel 2021, nascondeva un messaggio in codice: una frase che tradotta in italiano significa...", rispostaVera: "osa grandi cose", balleCasa: ["guarda sempre più lontano", "non smettere di esplorare", "sogna e vola più in alto"], cat: "scienza" },
  { domanda: "Sul disco d'oro mandato nello spazio con le sonde Voyager, per far conoscere la Terra agli alieni, c'è anche una canzone di...", rispostaVera: "Chuck Berry", balleCasa: ["Elvis Presley", "i Beatles", "Frank Sinatra"], cat: "scienza" },
  { domanda: "Quando scoprì il pianeta Urano, nel 1781, l'astronomo William Herschel avrebbe voluto dargli il nome...", rispostaVera: "del suo re, Giorgio III", balleCasa: ["di sua sorella Caroline", "della sua città natale", "di Isaac Newton"], cat: "scienza" },
  { domanda: "In una gigantesca nuvola di gas vicino al centro della nostra galassia c'è una sostanza che dà il sapore ai lamponi e ha l'odore...", rispostaVera: "del rum", balleCasa: ["della liquirizia", "del caffè tostato", "della cannella"], cat: "scienza" },
  { domanda: "Nel 1954, in Alabama, un meteorite ha sfondato il tetto di una casa e ha colpito una signora che in quel momento...", rispostaVera: "faceva un pisolino sul divano", balleCasa: ["stava facendo il bagno", "stirava in cucina", "cucinava la cena"], cat: "scienza" },
  { domanda: "Intorno al Polo Nord di Saturno c'è un'enorme corrente di nuvole che, vista dall'alto, ha una forma regolare molto strana: è...", rispostaVera: "un esagono", balleCasa: ["un ottagono", "un quadrato", "una stella a cinque punte"], cat: "scienza" },
  { domanda: "Nel 1971, mentre girava attorno alla Luna con l'Apollo 14, l'astronauta Stuart Roosa teneva in una scatoletta centinaia di...", rispostaVera: "semi di alberi", balleCasa: ["bulbi di tulipano", "chicchi di caffè", "uova di pesce"], cat: "scienza" },
  { domanda: "Il primo grande inquinamento della storia della Terra, più di due miliardi di anni fa, fu causato da alcuni batteri che riempirono l'aria di...", rispostaVera: "ossigeno", balleCasa: ["azoto", "idrogeno", "ammoniaca"], cat: "scienza" },
  { domanda: "Nel nord-est dell'India, ogni 48 anni circa i bambù fioriscono e arriva la carestia, perché i loro semi fanno moltiplicare...", rispostaVera: "i topi", balleCasa: ["le cavallette", "le scimmie", "i cinghiali"], cat: "scienza" },
  { domanda: "In Borneo la pianta carnivora Nepenthes lowii, più che gli insetti, si nutre soprattutto della cacca di...", rispostaVera: "toporagni arboricoli", balleCasa: ["pappagalli", "gibboni", "gechi"], cat: "scienza" },
  { domanda: "Per non sprecare energie chiudendosi a vuoto, la Venere acchiappamosche sa...", rispostaVera: "contare i tocchi dell'insetto", balleCasa: ["misurare il peso della preda", "riconoscere il ronzio delle mosche", "aspettare che arrivi il buio"], cat: "scienza" },
  { domanda: "Il pino di Wollemi, creduto estinto da milioni di anni e ritrovato vivo in Australia nel 1994, oggi si può...", rispostaVera: "comprare in vivaio per il giardino", balleCasa: ["vedere solo in un orto botanico", "toccare solo con i guanti", "ammirare solo da un elicottero"], cat: "scienza" },
  { domanda: "Nel 2012 dei ricercatori russi hanno fatto rifiorire una pianta partendo da un frutto rimasto sepolto in una tana di scoiattolo, nel ghiaccio della Siberia, da circa...", rispostaVera: "32.000 anni", balleCasa: ["12.000 anni", "21.000 anni", "50.000 anni"], cat: "scienza" },
  { domanda: "Un esperimento del 2023 ha scoperto che le piante di pomodoro, quando soffrono la sete, emettono...", rispostaVera: "schiocchi che noi non sentiamo", balleCasa: ["un liquido dolce dalle radici", "una polvere gialla dai fiori", "una nebbiolina azzurra dalle foglie"], cat: "scienza" },
  { domanda: "Le gocce di pioggia non hanno la forma di una lacrima: mentre cadono, le più grandi assomigliano a...", rispostaVera: "panini da hamburger", balleCasa: ["fagioli", "palloni da rugby", "uova"], cat: "scienza" },
  { domanda: "Nel nord dell'Australia, ogni tanto, compare una nuvola a rullo lunga fino a mille chilometri: gli appassionati la «cavalcano» con...", rispostaVera: "l'aliante", balleCasa: ["una mongolfiera", "una tavola da surf", "un elicottero"], cat: "scienza" },
  { domanda: "Sulle montagne la neve a volte diventa rosa, a causa di alghe microscopiche, e se la annusi profuma di...", rispostaVera: "anguria", balleCasa: ["fragola", "zucchero filato", "gomma da masticare"], cat: "scienza" },
  { domanda: "Nel Meghalaya, una zona piovosissima dell'India, la gente costruisce i ponti sui fiumi usando...", rispostaVera: "le radici vive di un albero", balleCasa: ["corde di cocco intrecciate", "tronchi di teak galleggianti", "reti da pesca"], cat: "scienza" },
  { domanda: "Nella Valle della Morte, in California, ci sono massi che si spostano da soli lasciando lunghe tracce: si è scoperto che a spingerli sono...", rispostaVera: "lastre di ghiaccio sottili e il vento", balleCasa: ["le scosse di piccoli terremoti", "i cavalli selvatici di notte", "campi magnetici nascosti nel terreno"], cat: "scienza" },
  { domanda: "La rana dei boschi, in Alaska, in inverno si congela come un ghiacciolo e poi torna a saltare: come antigelo il suo corpo usa...", rispostaVera: "lo zucchero", balleCasa: ["l'alcol", "il sale", "la resina"], cat: "scienza" },
  { domanda: "Ogni anno, sull'isola di Natale, nell'Oceano Indiano, si chiudono le strade e si costruiscono ponti e passaggi speciali per far passare milioni di...", rispostaVera: "granchi rossi", balleCasa: ["scimmie", "pinguini", "lucertole blu"], cat: "scienza" },
  { domanda: "Fin da ragazzo il re di Francia Luigi XVI aveva un hobby da operaio: nel tempo libero fabbricava con le sue mani...", rispostaVera: "serrature e chiavi", balleCasa: ["scarpe e stivali", "cappelli e guanti", "flauti e violini"], cat: "storia" },
  { domanda: "Nel 2012 gli archeologi hanno ritrovato lo scheletro del re Riccardo III d'Inghilterra, morto nel 1485, sotto...", rispostaVera: "un parcheggio della città di Leicester", balleCasa: ["il pavimento di un pub di Londra", "un campo di patate vicino a York", "il giardino di una scuola di Oxford"], cat: "storia" },
  { domanda: "Maria Stuarda è diventata regina di Scozia quando aveva soltanto...", rispostaVera: "sei giorni di vita", balleCasa: ["tre giorni di vita", "nove giorni di vita", "un mese di vita"], cat: "storia" },
  { domanda: "Nella tenuta reale di Sandringham, per decenni, per volere del futuro re Edoardo VII tutti gli orologi erano...", rispostaVera: "avanti di mezz'ora, per cacciare di più", balleCasa: ["indietro di un'ora, per dormire di più", "avanti di un'ora, per cenare prima", "fermi alle cinque, per l'ora del tè"], cat: "storia" },
  { domanda: "L'imperatore giapponese Hirohito aveva un laboratorio nel palazzo imperiale, dove pubblicò vere ricerche scientifiche su...", rispostaVera: "animali marini, soprattutto gli idrozoi", balleCasa: ["uccelli migratori e le loro rotte", "insetti delle montagne giapponesi", "stelle e pianeti, con un telescopio"], cat: "storia" },
  { domanda: "Puyi, l'ultimo imperatore della Cina, dopo essere uscito di prigione nel 1959 ha trovato lavoro come...", rispostaVera: "giardiniere in un orto botanico", balleCasa: ["bibliotecario in una scuola", "cuoco in un ristorante", "tipografo in una stamperia"], cat: "storia" },
  { domanda: "Nel 1582 papa Gregorio XIII cambiò il calendario, e in gran parte d'Italia chi andò a dormire il 4 ottobre si svegliò...", rispostaVera: "il 15 ottobre: dieci giorni sparirono", balleCasa: ["il 9 ottobre: cinque giorni sparirono", "il 24 ottobre: venti giorni sparirono", "il 29 ottobre: venticinque giorni sparirono"], cat: "storia" },
  { domanda: "Quando morì Bucefalo, il suo cavallo preferito, Alessandro Magno decise di onorarlo...", rispostaVera: "fondando una città con il suo nome", balleCasa: ["portandone il corpo imbalsamato in Macedonia", "facendogli costruire un tempio d'oro", "chiamando Bucefalo tutti i cavalli del regno"], cat: "storia" },
  { domanda: "Abraham Lincoln è l'unico presidente americano ad aver brevettato un'invenzione, che serviva a...", rispostaVera: "alzare le barche sulle secche dei fiumi", balleCasa: ["tagliare la legna più in fretta", "tenere caldi i piedi in carrozza", "pulire i camini delle locomotive"], cat: "storia" },
  { domanda: "Nel 1893, per non far sapere agli americani che era gravemente malato, il presidente Grover Cleveland si fece operare in segreto...", rispostaVera: "a bordo di uno yacht, al largo di New York", balleCasa: ["in una cantina di Washington", "in un vagone del treno presidenziale", "nella casa di campagna di un amico"], cat: "storia" },
  { domanda: "Prima di fare l'attore e il presidente, Ronald Reagan raccontava per radio le partite di baseball senza essere allo stadio: si basava su...", rispostaVera: "brevi messaggi del telegrafo, più fantasia", balleCasa: ["le telefonate di un amico in tribuna", "le foto dei giornali del giorno prima", "i disegni di un amico seduto in tribuna"], cat: "storia" },
  { domanda: "Nel dicembre 1970 Elvis Presley si presentò alla Casa Bianca senza appuntamento e chiese al presidente Nixon...", rispostaVera: "un distintivo da agente federale", balleCasa: ["il permesso di guidare un carro armato", "una medaglia d'oro da cantante", "un posto da autista del presidente"], cat: "storia" },
  { domanda: "Nel 1979 il presidente Jimmy Carter, mentre pescava da una barchetta in uno stagno, dovette difendersi con il remo da...", rispostaVera: "un coniglio che nuotava verso di lui", balleCasa: ["un'oca selvatica molto arrabbiata", "un castoro che mordeva la barca", "uno sciame di api impazzite"], cat: "storia" },
  { domanda: "Per dimostrare a un famoso scienziato francese che gli animali americani non erano piccoli, Thomas Jefferson gli fece spedire a Parigi...", rispostaVera: "un enorme alce, con pelle e corna", balleCasa: ["un orso grizzly, imbalsamato", "un bisonte intero, sotto sale", "uno squalo bianco, in un barile"], cat: "storia" },
  { domanda: "A Savonlinna, in Finlandia, dal 2000 si fa ogni anno il campionato mondiale di lancio dei...", rispostaVera: "telefonini", balleCasa: ["ombrelli", "salvagenti", "scarponi da sci"], cat: "mondo" },
  { domanda: "A Llanwrtyd Wells, in Galles, dal 1985 c'è il campionato mondiale di nuoto con maschera, boccaglio e pinne, ma si nuota...", rispostaVera: "in un fosso scavato in una palude di torba", balleCasa: ["in una cava piena di fango rosso", "in un canale di ghiaccio tagliato a mano", "in un lago coperto di alghe giganti"], cat: "mondo" },
  { domanda: "Alla fiera di Egremont, in Inghilterra, nata nel 1267, c'è una gara a chi fa la smorfia più brutta, con la testa infilata in...", rispostaVera: "un vecchio collare da cavallo", balleCasa: ["una zucca intagliata", "un secchio di latta", "una cornice di legno dorato"], cat: "mondo" },
  { domanda: "Quando il re va ad aprire il Parlamento a Londra, per garantire il suo ritorno sano e salvo a Buckingham Palace viene tenuto in ostaggio...", rispostaVera: "un deputato del governo", balleCasa: ["un giudice dell'Alta Corte", "il capo dei guardiani dei corvi", "un lord scelto a sorte"], cat: "mondo" },
  { domanda: "In Inghilterra, per una legge del 1324 ancora applicata, le balene e gli ___ pescati in mare o nei fiumi appartengono al re.", rispostaVera: "storioni", balleCasa: ["salmoni", "tonni", "squali bianchi"], cat: "mondo" },
  { domanda: "A Killorglin, in Irlanda, la grande festa di agosto, che esiste almeno dal 1613, ha come re ogni anno...", rispostaVera: "una capra selvatica catturata sui monti", balleCasa: ["un montone scelto dai pastori", "un cervo catturato nei boschi", "un gallo nero con la corona d'oro"], cat: "mondo" },
  { domanda: "Fino al 2008, sull'isola di Sark, tra Francia e Inghilterra, ultimo angolo d'Europa ancora feudale, solo il signore dell'isola poteva tenere...", rispostaVera: "una cagna non sterilizzata", balleCasa: ["un cavallo da corsa", "più di due mucche", "un orologio a pendolo in piazza"], cat: "mondo" },
  { domanda: "Il piccolo Stato di Andorra, tra Francia e Spagna, da secoli ha due capi di Stato insieme: il presidente francese e...", rispostaVera: "un vescovo spagnolo", balleCasa: ["il re di Spagna", "un cardinale del Vaticano", "il sindaco di Barcellona"], cat: "mondo" },
  { domanda: "Ad Appenzello, in Svizzera, ogni anno si vota in piazza alzando la mano, e al posto della tessera elettorale molti uomini mostrano...", rispostaVera: "una spada", balleCasa: ["un cappello con la piuma", "una campana di mucca", "un ombrello rosso"], cat: "mondo" },
  { domanda: "In Svizzera, ogni tre anni, il vincitore della festa nazionale di lotta tradizionale, lo Schwingen, riceve in premio...", rispostaVera: "un toro vivo", balleCasa: ["un trattore d'epoca", "una slitta con due cavalli", "un maiale da duecento chili"], cat: "mondo" },
  { domanda: "A Ginevra, ogni dicembre, per ricordare un attacco respinto nel 1602, si rompe una pentola gigante di cioccolato piena di...", rispostaVera: "verdure di marzapane", balleCasa: ["soldatini di liquirizia", "monete d'oro di zucchero", "fiori di zucchero filato"], cat: "mondo" },
  { domanda: "In Svezia, ogni vigilia di Natale alle tre del pomeriggio, da più di sessant'anni, circa tre milioni di persone guardano in TV...", rispostaVera: "un programma di cartoni con Paperino", balleCasa: ["il discorso del re di Svezia", "una gara di sci registrata", "un concerto di campane"], cat: "mondo" },
  { domanda: "Dal 1999, sull'isola di La Gomera, alle Canarie, a scuola è obbligatorio imparare anche a...", rispostaVera: "parlare fischiando", balleCasa: ["comunicare con le bandierine", "suonare la conchiglia", "parlare con i segnali di fumo"], cat: "mondo" },
  { domanda: "Il kiiking, uno sport nato in Estonia negli anni Novanta, consiste nel...", rispostaVera: "fare un giro completo su un'altalena gigante", balleCasa: ["rotolare in un barile lungo una spiaggia", "lanciarsi con la slitta da una torre", "correre dentro una grande ruota di legno"], cat: "mondo" },
  { domanda: "In Giappone, da più di 400 anni, nella gara «Naki Sumo» due lottatori tengono in braccio un neonato ciascuno e vince il primo bambino che...", rispostaVera: "scoppia a piangere", balleCasa: ["si mette a ridere", "si addormenta", "fa il ruttino più forte"], cat: "mondo" },
  { domanda: "Ogni febbraio, a Okayama, in Giappone, più di novemila uomini in perizoma si spingono al freddo per afferrare...", rispostaVera: "dei bastoncini di legno portafortuna", balleCasa: ["un sacchetto di fagioli portafortuna", "una statuetta d'oro del tempio", "un pesce di cartapesta"], cat: "mondo" },
  { domanda: "Dal 2011 al 2021, in Corea del Sud, la «legge di Cenerentola» faceva sì che dalla mezzanotte alle sei del mattino...", rispostaVera: "ai ragazzini fosse vietato giocare online", balleCasa: ["ai ragazzini fosse vietato guardare la TV", "ai ragazzini fosse vietato uscire di casa", "ai ragazzini fosse vietato mandare messaggi"], cat: "mondo" },
  { domanda: "A Taiwan, per buttare i rifiuti, i cittadini portano i sacchi al camion della spazzatura, che annuncia il suo arrivo suonando un brano classico, di solito...", rispostaVera: "Per Elisa di Beethoven", balleCasa: ["la Marcia turca di Mozart", "La Primavera di Vivaldi", "il Can Can di Offenbach"], cat: "mondo" },
  { domanda: "A Nanaimo, in Canada, dal 1967 si fa ogni anno una gara in mare di 58 chilometri tra barche fatte con...", rispostaVera: "vasche da bagno con il motore", balleCasa: ["botti di legno con il motore", "frigoriferi con l'elica", "porte di casa legate insieme"], cat: "mondo" },
  { domanda: "Il tejo, lo sport nazionale della Colombia, si gioca lanciando un disco di metallo contro un bersaglio su cui si appoggiano delle bustine di...", rispostaVera: "polvere da sparo, che scoppiano", balleCasa: ["vernice, che schizza sui giocatori", "coriandoli, che volano ovunque", "farina, che fa una nuvola bianca"], cat: "mondo" },
  { domanda: "A La Paz, in Bolivia, per ricordare a pedoni e automobilisti le regole della strada ci sono anche...", rispostaVera: "dei ragazzi vestiti da zebra", balleCasa: ["lama addestrati a stare sulle strisce", "mimi con la faccia dipinta di bianco", "vigili travestiti da condor"], cat: "mondo" },
  { domanda: "Al Downtown Hotel di Dawson City, in Canada, dal 1973 si può ordinare una bevanda con dentro...", rispostaVera: "un dito di piede umano mummificato", balleCasa: ["un dente d'orso vero", "un occhio di vetro", "un pezzo di corno d'alce"], cat: "mondo" },
  { domanda: "Nel 2011 lo Stato di Samoa ha cancellato dal calendario un giorno intero, il 30 dicembre, per...", rispostaVera: "fare più affari con Australia e Nuova Zelanda", balleCasa: ["sfuggire a un giorno considerato sfortunato", "far contento un re superstizioso", "far arrivare prima i turisti americani"], cat: "mondo" },
  { domanda: "Sull'isola di Pentecoste, a Vanuatu, ogni anno gli uomini si lanciano a testa in giù da torri di legno alte fino a 30 metri, con liane alle caviglie, per...", rispostaVera: "assicurare un buon raccolto di igname", balleCasa: ["chiamare la pioggia sui campi", "proteggere i pescatori dagli squali", "tenere lontani i cicloni"], cat: "mondo" },
  { domanda: "Agli Ig Nobel, i premi per le ricerche più strane, per anni chi parlava più di 60 secondi veniva fermato da una bambina di otto anni che ripeteva...", rispostaVera: "per favore smettila, mi annoio", balleCasa: ["per favore smettila, ho sonno", "basta, voglio andare a casa", "scusi, devo fare la pipì"], cat: "mondo" },
  { domanda: "Nel 1982 la Nuova Zelanda ebbe il massimo di pecore, circa 70 milioni: per ogni abitante ce n'erano circa...", rispostaVera: "22", balleCasa: ["15", "35", "50"], cat: "animali" },
  { domanda: "Il pollo Mike, a cui nel 1945 in Colorado fu tagliata la testa, visse ancora 18 mesi: il padrone gli versava latte e acqua nella gola con...", rispostaVera: "un contagocce", balleCasa: ["una cannuccia", "un imbuto", "un cucchiaino"], cat: "animali" },
  { domanda: "Il luogo dell'allunaggio del 1969, con le impronte e gli oggetti lasciati lassù, è iscritto nei registri dei beni culturali della California e del...", rispostaVera: "Nuovo Messico", balleCasa: ["Texas", "Florida", "Nevada"], cat: "scienza" },
  { domanda: "Nel 1986 a Cleveland furono liberati in cielo quasi un milione e mezzo di palloncini per battere il record dell'anno prima, fatto per i 30 anni di...", rispostaVera: "Disneyland", balleCasa: ["Coca-Cola", "Barbie", "Superman"], cat: "spettacolo" },
  { domanda: "Dentro l'alveare è buio, perciò le api ballano su un favo verticale: se la loro danza punta dritta verso l'alto, vogliono dire che i fiori si trovano...", rispostaVera: "nella direzione del sole", balleCasa: ["a nord dell'alveare", "sopra l'alveare, sugli alberi", "dalla parte opposta al sole"], cat: "animali" },
  { domanda: "Convinto di essere arrivato in Asia, nel 1498 Colombo scrisse che la Terra non è una sfera perfetta ma ha la forma di...", rispostaVera: "una pera", balleCasa: ["una mela", "un uovo", "una zucca"], cat: "storia" },
  { domanda: "Una gondola è fatta con circa 280 pezzi di otto legni diversi: abete, rovere, ciliegio, noce, olmo, larice, mogano e...", rispostaVera: "tiglio", balleCasa: ["faggio", "pioppo", "frassino"], cat: "italia" },
  { domanda: "All'inizio, al Carnevale di Ivrea, al posto delle arance si lanciavano i...", rispostaVera: "fagioli", balleCasa: ["ceci", "noci", "castagne"], cat: "italia" },
  { domanda: "L'MP5, il prototipo di scooter che la Piaggio progettò nel 1944 prima della Vespa, fu soprannominato dai collaudatori...", rispostaVera: "Paperino", balleCasa: ["Topolino", "Pinocchio", "Gambero"], cat: "invenzioni" },
  { domanda: "Per girare «La Passione di Cristo» a Matera e a Cinecittà, Mel Gibson risparmiò tempo e soldi riusando parte del set del film...", rispostaVera: "Gangs of New York", balleCasa: ["Il Gladiatore", "Ben-Hur", "Titanic"], cat: "spettacolo" },
  { domanda: "Gli occhiali nacquero in Italia verso il 1290: nel 1306 il frate Giordano da Pisa disse in una predica che lui aveva...", rispostaVera: "parlato con il loro inventore", balleCasa: ["letto un libro con i primi occhiali", "visto il Papa usarli per leggere", "costruito il suo primo paio da solo"], cat: "invenzioni" },
  { domanda: "Il cioccolato gianduia prende il nome da Gianduja, una maschera piemontese il cui nome vuol dire «Giovanni del ___».", rispostaVera: "boccale", balleCasa: ["mulino", "tamburo", "pozzo"], cat: "italia" },
  { domanda: "L'Inter fu fondata nel 1908 da dissidenti del Milan durante una cena, nel ristorante milanese chiamato «___».", rispostaVera: "L'Orologio", balleCasa: ["Savini", "Il Cavallino", "La Colonna"], cat: "spettacolo" },
  { domanda: "Il conte di Sandwich, quello del panino, era ministro della Marina inglese: il capitano Cook diede il suo nome alle «Isole Sandwich», che oggi sono...", rispostaVera: "le Hawaii", balleCasa: ["le Fiji", "le Samoa", "le Tonga"], cat: "mondo" },
  { domanda: "Le fossette delle palline da golf nacquero perché le vecchie palline ammaccate volavano meglio. Prima c'erano palline a rilievi, simili a una...", rispostaVera: "mora", balleCasa: ["pigna", "fragola", "castagna"], cat: "spettacolo" },
  { domanda: "In Giappone ci sono milioni di distributori automatici: alcuni vendono perfino scatolette con dentro...", rispostaVera: "insetti da mangiare", balleCasa: ["meduse sott'aceto", "uova di rana", "cavallucci marini secchi"], cat: "mondo" },
  { domanda: "In Svezia c'è un albergo di ghiaccio che ogni primavera si scioglie. Nacque per caso: in paese non c'erano camere libere e dei turisti dormirono dentro...", rispostaVera: "una galleria d'arte fatta di ghiaccio", balleCasa: ["un teatro scolpito nella neve", "una grotta di ghiaccio naturale", "una pista da pattinaggio coperta"], cat: "mondo" },
  { domanda: "Adidas viene da Adi Dassler. Suo fratello Rudolf, dopo una lite, fondò la rivale Puma, che nei primi mesi si chiamò «___».", rispostaVera: "Ruda", balleCasa: ["Dassa", "Herzo", "Rudis"], cat: "invenzioni" }
];

/* =========================================================
   «👥 PARLIAMO DI TE» — le domande sugli amici.
   {nome} = il protagonista del round: lui scrive la VERITÀ, gli altri le balle.
     domanda   -> finisce con "..." (il pezzo mancante va in fondo); scritta senza maschile/femminile
                  (va bene per tutti: niente "stanco/stanca", "da piccolo/piccola")
     balleCasa -> 3 risposte credibili della "redazione", per quando le risposte sono poche. Massimo 45 lettere.
   Niente emoji nelle risposte (le risposte si confrontano solo con le lettere e i numeri).
   ========================================================= */
window.SG_BALLA_AMICI = [
  { domanda: "Il cibo che {nome} non mangerebbe nemmeno per 100 euro è...", balleCasa: ["il fegato", "le acciughe", "i broccoli"] },
  { domanda: "Se potesse cenare con una persona famosa, {nome} sceglierebbe...", balleCasa: ["Totti", "Freddie Mercury", "Barack Obama"] },
  { domanda: "La cosa che {nome} fa sempre quando nessuno guarda è...", balleCasa: ["cantare in macchina", "ballare davanti allo specchio", "parlare da solo"] },
  { domanda: "Il primo cantante che {nome} ha ascoltato a ripetizione è...", balleCasa: ["Vasco Rossi", "Laura Pausini", "Eros Ramazzotti"] },
  { domanda: "Se {nome} fosse un animale, sarebbe...", balleCasa: ["un bradipo", "un gatto", "un panda"] },
  { domanda: "Il cartone animato che {nome} guardava sempre era...", balleCasa: ["Dragon Ball", "Holly e Benji", "Sailor Moon"] },
  { domanda: "La cosa più strana che {nome} abbia mai mangiato è...", balleCasa: ["le lumache", "un insetto fritto", "la trippa"] },
  { domanda: "Con un milione di euro, la prima cosa che {nome} comprerebbe è...", balleCasa: ["una casa al mare", "una Ferrari", "un viaggio in Giappone"] },
  { domanda: "Il superpotere che {nome} vorrebbe avere è...", balleCasa: ["volare", "diventare invisibile", "leggere nel pensiero"] },
  { domanda: "La paura più grande di {nome} è...", balleCasa: ["i ragni", "il buio", "l'aereo"] },
  { domanda: "Il soprannome che davano a {nome} alle elementari era...", balleCasa: ["Topolino", "Pulce", "Ciccio"] },
  { domanda: "Il lavoro che {nome} sognava di fare alle elementari era...", balleCasa: ["l'astronauta", "il calciatore", "il veterinario"] },
  { domanda: "La canzone che {nome} canta sotto la doccia è...", balleCasa: ["Azzurro", "Volare", "Bohemian Rhapsody"] },
  { domanda: "Il piatto che {nome} cucina meglio è...", balleCasa: ["la carbonara", "le uova strapazzate", "la pasta al pomodoro"] },
  { domanda: "L'oggetto che {nome} perde più spesso è...", balleCasa: ["le chiavi", "il telefono", "gli occhiali da sole"] },
  { domanda: "La serie TV che {nome} ha visto tutta in pochi giorni è...", balleCasa: ["La casa di carta", "Stranger Things", "Mare fuori"] },
  { domanda: "Il posto dove {nome} vorrebbe vivere è...", balleCasa: ["alle Maldive", "a New York", "in una baita in montagna"] },
  { domanda: "Se potesse cambiare nome, {nome} si farebbe chiamare...", balleCasa: ["Ambrogio", "Gennaro", "Brigitte"] },
  { domanda: "Il primo videogioco di {nome} è stato...", balleCasa: ["Super Mario", "Pokémon", "Tetris"] },
  { domanda: "La materia che {nome} odiava a scuola era...", balleCasa: ["matematica", "latino", "educazione fisica"] },
  { domanda: "La cosa che fa arrabbiare {nome} più di tutte è...", balleCasa: ["chi arriva in ritardo", "chi mastica a bocca aperta", "la fila alla posta"] },
  { domanda: "Il gusto di gelato preferito di {nome} è...", balleCasa: ["pistacchio", "stracciatella", "nocciola"] },
  { domanda: "Il personaggio dei cartoni in cui {nome} si riconosce è...", balleCasa: ["Paperino", "Homer Simpson", "Shrek"] },
  { domanda: "Il regalo più brutto che {nome} abbia mai ricevuto è...", balleCasa: ["un pigiama di pile", "un portachiavi", "una cravatta a pois"] },
  { domanda: "Il film che fa sempre piangere {nome} è...", balleCasa: ["Titanic", "Il re leone", "Up"] },
  { domanda: "La prima cosa che {nome} fa la mattina è...", balleCasa: ["guardare il telefono", "fare il caffè", "lamentarsi"] },
  { domanda: "Il vizio che {nome} proprio non riesce a togliersi è...", balleCasa: ["mangiarsi le unghie", "il caffè", "dormire troppo"] },
  { domanda: "In un film sulla vita di {nome}, il ruolo di {nome} lo farebbe...", balleCasa: ["Checco Zalone", "Mr. Bean", "Sophia Loren"] },
  { domanda: "Su un'isola deserta {nome} porterebbe...", balleCasa: ["il telefono", "un coltellino", "la Nutella"] },
  { domanda: "Per {nome} la pizza perfetta è con...", balleCasa: ["salsiccia e friarielli", "l'ananas", "le patatine fritte"] },
  { domanda: "I caffè che {nome} beve in un giorno sono...", balleCasa: ["due", "cinque", "nessuno"] },
  { domanda: "Lo sport che {nome} ha provato e ha mollato subito è...", balleCasa: ["il nuoto", "la danza", "il karate"] },
  { domanda: "La cosa più costosa che {nome} abbia mai rotto è...", balleCasa: ["il telefono", "la macchina di papà", "un televisore"] },
  { domanda: "Se {nome} fosse un piatto di pasta, sarebbe...", balleCasa: ["una carbonara", "una pasta e fagioli", "uno spaghetto scotto"] },
  { domanda: "La frase che {nome} ripete di continuo è...", balleCasa: ["sto arrivando", "ma dai!", "che fame"] },
  { domanda: "La prima cotta famosa di {nome} è stata...", balleCasa: ["Leonardo DiCaprio", "Britney Spears", "Raoul Bova"] },
  { domanda: "Per 1.000 euro {nome} accetterebbe di...", balleCasa: ["rasarsi a zero", "mangiare un grillo", "fare un tatuaggio in fronte"] },
  { domanda: "L'app che {nome} usa di più sul telefono è...", balleCasa: ["WhatsApp", "TikTok", "la calcolatrice"] },
  { domanda: "La vacanza più bella di {nome} è stata...", balleCasa: ["a Ibiza", "a Parigi", "in campeggio in Puglia"] },
  { domanda: "Il gioco da tavolo in cui {nome} imbroglia sempre è...", balleCasa: ["Monopoli", "il gioco dell'Uno", "Risiko"] },
  { domanda: "L'odore che {nome} adora è...", balleCasa: ["la benzina", "il pane appena sfornato", "i libri nuovi"] },
  { domanda: "La cosa che {nome} compra sempre al supermercato, anche se non serve, è...", balleCasa: ["le patatine", "la cioccolata", "i biscotti"] },
  { domanda: "Il colore che {nome} non indosserebbe mai è...", balleCasa: ["il fucsia", "il giallo", "l'arancione"] },
  { domanda: "Il cantante che {nome} ascolta di nascosto è...", balleCasa: ["Gigi D'Alessio", "Al Bano", "Cristina D'Avena"] },
  { domanda: "Con la macchina del tempo, {nome} andrebbe...", balleCasa: ["nell'antica Roma", "nell'anno 3000", "tra i dinosauri"] },
  { domanda: "La scusa che {nome} usa di più per non uscire è...", balleCasa: ["ho mal di testa", "domani lavoro", "devo studiare"] },
  { domanda: "Il talento nascosto di {nome} è...", balleCasa: ["fare le imitazioni", "fare il giocoliere", "muovere le orecchie"] },
  { domanda: "Il dolce preferito di {nome} è...", balleCasa: ["il tiramisù", "la sfogliatella", "il babà"] },
  { domanda: "Le cose che {nome} colleziona (o collezionava) sono...", balleCasa: ["le figurine", "i tappi", "le calamite"] },
  { domanda: "L'animale che {nome} vorrebbe tenere in casa è...", balleCasa: ["un pappagallo", "un furetto", "un maialino"] },
  { domanda: "Il posto più strano dove {nome} abbia dormito è...", balleCasa: ["in macchina", "su una panchina", "in aeroporto"] },
  { domanda: "Il mestiere che {nome} farebbe malissimo è...", balleCasa: ["il chirurgo", "il pilota d'aereo", "il cuoco"] },
  { domanda: "La prima cosa che {nome} guarda in una persona è...", balleCasa: ["gli occhi", "le scarpe", "il sorriso"] },
  { domanda: "Se aprisse un negozio, {nome} venderebbe...", balleCasa: ["calzini", "panini", "piante grasse"] },
  { domanda: "Il piatto della nonna che {nome} preferisce è...", balleCasa: ["le polpette", "la parmigiana", "il ragù"] },
  { domanda: "La squadra del cuore di {nome} è...", balleCasa: ["il Napoli", "la Juventus", "l'Inter"] },
  { domanda: "L'ultima cosa che {nome} ha cercato su internet è...", balleCasa: ["come cucinare il riso", "il meteo di domani", "i sintomi del raffreddore"] },
  { domanda: "Il programma TV che {nome} guarda di nascosto è...", balleCasa: ["Uomini e Donne", "Il Grande Fratello", "Temptation Island"] },
  { domanda: "Se {nome} fosse un elettrodomestico, sarebbe...", balleCasa: ["un frullatore", "un ferro da stiro", "una lavatrice"] },
  { domanda: "Il rumore che {nome} non sopporta è...", balleCasa: ["le unghie sulla lavagna", "chi mastica forte", "il trapano del vicino"] },
  { domanda: "Il primo telefono di {nome} era...", balleCasa: ["un Nokia 3310", "un Motorola a conchiglia", "un iPhone 4"] },
  { domanda: "La festa preferita di {nome} è...", balleCasa: ["Natale", "Halloween", "Capodanno"] },
  { domanda: "Il film che ha fatto più paura a {nome} è...", balleCasa: ["It", "L'esorcista", "Lo squalo"] },
  { domanda: "Il gioco che {nome} faceva sempre in cortile era...", balleCasa: ["nascondino", "campana", "palla avvelenata"] },
  { domanda: "Potendo rubare una cosa al Louvre, {nome} prenderebbe...", balleCasa: ["la Gioconda", "una cornice d'oro", "una panchina"] },
  { domanda: "Il nome che {nome} darebbe a un cane è...", balleCasa: ["Pippo", "Brontolo", "Gennarino"] },
  { domanda: "La figuraccia più grande di {nome} è stata...", balleCasa: ["cadere per strada", "chiamare la maestra mamma", "restare chiusi in bagno"] },
  { domanda: "Il sapore che {nome} proprio non sopporta è...", balleCasa: ["il coriandolo", "la liquirizia", "il cocco"] },
  { domanda: "L'attore o l'attrice preferita di {nome} è...", balleCasa: ["Brad Pitt", "Julia Roberts", "Toni Servillo"] },
  { domanda: "Al bar {nome} ordina sempre...", balleCasa: ["un cornetto alla crema", "uno spritz", "un caffè macchiato"] },
  { domanda: "La città che {nome} vorrebbe visitare prima di tutte è...", balleCasa: ["Tokyo", "New York", "Rio de Janeiro"] },
  { domanda: "La cosa a cui {nome} non sa dire di no è...", balleCasa: ["una pizza", "un dolce", "un pisolino"] },
  { domanda: "Il cibo che {nome} mangerebbe per un mese di fila è...", balleCasa: ["la pizza", "il sushi", "le patatine fritte"] },
  { domanda: "Se {nome} fosse un supereroe, si chiamerebbe...", balleCasa: ["Capitan Pigrizia", "Super Ritardo", "Mister Fame"] },
  { domanda: "Il mezzo di trasporto che {nome} odia è...", balleCasa: ["l'aereo", "il pullman", "la nave"] },
  { domanda: "La stanza della casa dove {nome} passa più tempo è...", balleCasa: ["la cucina", "il bagno", "la camera da letto"] },
  { domanda: "Il libro o il fumetto preferito di {nome} è...", balleCasa: ["Harry Potter", "Topolino", "Il piccolo principe"] },
  { domanda: "Il difetto che gli amici rinfacciano sempre a {nome} è...", balleCasa: ["il ritardo", "la tirchieria", "la testardaggine"] },
  { domanda: "La moda di cui {nome} si vergogna di più è...", balleCasa: ["i jeans a vita bassa", "il gel nei capelli", "le scarpe con le luci"] },
  { domanda: "La domenica perfetta di {nome} è...", balleCasa: ["dormire fino a tardi", "il pranzo dalla mamma", "la partita allo stadio"] },
  { domanda: "Lo strumento che {nome} vorrebbe saper suonare è...", balleCasa: ["la batteria", "il pianoforte", "il sassofono"] },
  { domanda: "Se fosse invisibile per un giorno, {nome} andrebbe...", balleCasa: ["in banca", "negli spogliatoi del Napoli", "a casa dei vicini"] },
  { domanda: "Il cibo che {nome} ha sempre in frigo è...", balleCasa: ["la mozzarella", "il ketchup", "le uova"] },
  { domanda: "La cosa che {nome} fa meglio di tutti in questa stanza è...", balleCasa: ["dormire", "mangiare", "chiacchierare"] },
  { domanda: "Da sindaco, la prima cosa che {nome} farebbe è...", balleCasa: ["togliere le multe", "la pizza gratis il venerdì", "più parcheggi"] },
  { domanda: "Il personaggio storico che {nome} vorrebbe conoscere è...", balleCasa: ["Napoleone", "Cleopatra", "Leonardo da Vinci"] },
  { domanda: "La bevanda preferita di {nome} è...", balleCasa: ["la Coca-Cola", "il tè freddo", "lo spritz"] },
  { domanda: "L'animale che {nome} sa imitare meglio è...", balleCasa: ["il gatto", "la gallina", "il cane"] },
  { domanda: "Il giocattolo che {nome} ricorda con più affetto è...", balleCasa: ["il Game Boy", "un orsacchiotto", "le macchinine"] },
  { domanda: "Il ballo che {nome} sa fare (più o meno) è...", balleCasa: ["la macarena", "il tango", "il moonwalk"] },
  { domanda: "La faccenda di casa che {nome} odia di più è...", balleCasa: ["stirare", "lavare i piatti", "pulire il bagno"] },
  { domanda: "Il posto dove {nome} nasconde le cose è...", balleCasa: ["sotto il materasso", "nel cassetto dei calzini", "nel freezer"] },
  { domanda: "Il personaggio dei videogiochi che {nome} vorrebbe essere è...", balleCasa: ["Super Mario", "Lara Croft", "Pikachu"] },
  { domanda: "Il motto di {nome} è...", balleCasa: ["domani è un altro giorno", "chi dorme non piglia pesci", "prima il dovere"] },
  { domanda: "La cosa che {nome} non presterebbe mai a nessuno è...", balleCasa: ["lo spazzolino", "la macchina", "il caricabatterie"] },
  { domanda: "Il posto dove {nome} si sente più a casa è...", balleCasa: ["al mare", "in cucina", "sul divano"] },
  { domanda: "Il programma che {nome} guardava sempre dopo la scuola era...", balleCasa: ["Bim Bum Bam", "Art Attack", "Lupo Alberto"] },
  { domanda: "La cosa che {nome} sa cucinare solo bruciata è...", balleCasa: ["le uova al tegamino", "il pollo", "le frittelle"] },
  { domanda: "Il nome che {nome} darebbe a un pesce rosso è...", balleCasa: ["Nemo", "Bollicina", "Ciro"] },
  { domanda: "Una festa a sorpresa per {nome} avrebbe come tema...", balleCasa: ["i pirati", "gli anni '80", "Harry Potter"] },
  { domanda: "Il regalo che {nome} vorrebbe ricevere adesso è...", balleCasa: ["un viaggio", "un cagnolino", "una console nuova"] },
  { domanda: "Il gruppo WhatsApp col nome più strano di {nome} si chiama...", balleCasa: ["Calcetto del giovedì", "Cugini pazzi", "Mamme in fuga"] },
  { domanda: "Il complimento più bello che {nome} abbia ricevuto è...", balleCasa: ["hai un bel sorriso", "cucini benissimo", "sei una forza"] },
  { domanda: "Per {nome} la colazione perfetta è...", balleCasa: ["cappuccino e cornetto", "uova e pancetta", "latte e biscotti"] },
  { domanda: "Appena arriva in spiaggia, {nome}...", balleCasa: ["si tuffa subito", "si mette la crema", "cerca il bar"] },
  { domanda: "Se la vita di {nome} fosse un film, il titolo sarebbe...", balleCasa: ["Tutto in ritardo", "Fame da lupi", "Domani lo faccio"] },
  { domanda: "Quando non riesce a dormire, {nome}...", balleCasa: ["conta le pecore", "guarda video sul telefono", "va a mangiare qualcosa"] },
  { domanda: "Il personaggio delle fiabe che {nome} potrebbe essere è...", balleCasa: ["Cappuccetto Rosso", "il lupo cattivo", "Pinocchio"] },
  { domanda: "La frase che la mamma di {nome} ripete sempre è...", balleCasa: ["metti la maglia", "hai mangiato?", "copriti che fa freddo"] },
  { domanda: "In un menù, {nome} guarda per prima cosa...", balleCasa: ["i dolci", "i prezzi", "le pizze"] },
  { domanda: "La marca di scarpe preferita di {nome} è...", balleCasa: ["Nike", "Adidas", "Converse"] },
  { domanda: "Il gioco in cui {nome} vince sempre è...", balleCasa: ["il gioco dell'Uno", "la briscola", "nascondino"] },
  { domanda: "La cosa che {nome} non ha mai fatto e vorrebbe fare è...", balleCasa: ["lanciarsi col paracadute", "un tatuaggio", "un viaggio in solitaria"] },
  { domanda: "Quando è in fila alla posta, {nome}...", balleCasa: ["sbuffa", "gioca col telefono", "chiacchiera con tutti"] },
  { domanda: "La parte della pizza che {nome} preferisce è...", balleCasa: ["il cornicione", "il centro", "la mozzarella filante"] },
  { domanda: "La cosa che {nome} ha sempre in tasca è...", balleCasa: ["le chiavi", "una caramella", "gli scontrini"] },
  { domanda: "Potendo far sparire una verdura dal mondo, {nome} sceglierebbe...", balleCasa: ["i broccoli", "il cavolfiore", "i carciofi"] },
  { domanda: "L'ora a cui {nome} va a dormire di solito è...", balleCasa: ["mezzanotte", "le due di notte", "le dieci"] },
  { domanda: "Lo sport che {nome} guarderebbe per ore è...", balleCasa: ["il calcio", "il tennis", "la Formula 1"] },
  { domanda: "Il soprannome che {nome} vorrebbe avere è...", balleCasa: ["il Professore", "la Leggenda", "il Boss"] },
  { domanda: "La cosa più strana nella borsa o nello zaino di {nome} è...", balleCasa: ["un cacciavite", "una forchetta", "un calzino spaiato"] },
  { domanda: "Il gioco sul telefono che {nome} non riesce a mollare è...", balleCasa: ["Candy Crush", "Ruzzle", "Clash Royale"] },
  { domanda: "La canzone che fa sempre ballare {nome} è...", balleCasa: ["Despacito", "YMCA", "Gioca jouer"] },
  { domanda: "Per fare colpo, {nome} cucinerebbe...", balleCasa: ["le lasagne", "il risotto ai funghi", "la pizza fatta in casa"] },
  { domanda: "Il pensiero fisso di {nome} è...", balleCasa: ["il cibo", "le vacanze", "il fine settimana"] },
  { domanda: "La regola di casa che {nome} non rispettava mai era...", balleCasa: ["rientrare presto", "rifare il letto", "niente telefono a tavola"] },
  { domanda: "La meta perfetta per la luna di miele di {nome} è...", balleCasa: ["le Maldive", "Parigi", "il Giappone"] },
  { domanda: "Il verso che {nome} fa quando si sveglia è...", balleCasa: ["un grugnito", "uno sbadiglio infinito", "un lamento"] },
  { domanda: "La cosa che {nome} faceva da bambini e non confesserebbe mai è...", balleCasa: ["mangiare la sabbia", "parlare coi peluche", "nascondere le verdure"] },
  { domanda: "Il personaggio di Harry Potter più simile a {nome} è...", balleCasa: ["Hagrid", "Hermione", "Ron"] },
  { domanda: "Il cibo che {nome} ruba sempre dal piatto degli altri è...", balleCasa: ["le patatine", "il pane", "il dolce"] },
  { domanda: "Dovendo vivere in un film, {nome} sceglierebbe...", balleCasa: ["Harry Potter", "Il signore degli anelli", "Ritorno al futuro"] },
  { domanda: "Il nome della band di {nome}, se ne avesse una, sarebbe...", balleCasa: ["I Ritardatari", "Pizza e Fichi", "Gli Stonati"] },
  { domanda: "La cosa che {nome} fa quando è sotto pressione è...", balleCasa: ["mangiare", "ridere", "pulire casa"] },
  { domanda: "Il personaggio dei Simpson più simile a {nome} è...", balleCasa: ["Homer", "Lisa", "Ned Flanders"] },
  { domanda: "La cosa più inutile che {nome} abbia mai comprato è...", balleCasa: ["una bici da camera", "un tostapane a forma di gatto", "un monopattino"] },
  { domanda: "Il santo protettore di {nome} dovrebbe essere quello...", balleCasa: ["dei ritardatari", "dei golosi", "degli smemorati"] },
  { domanda: "Il primo concerto o spettacolo dal vivo di {nome} è stato...", balleCasa: ["il circo", "Vasco a San Siro", "una recita a scuola"] },
  { domanda: "La parola che {nome} sbaglia sempre a scrivere è...", balleCasa: ["qual è", "un po'", "perché"] },
  { domanda: "L'ultimo sogno strano di {nome} parlava di...", balleCasa: ["un esame a sorpresa", "denti che cadono", "una gara di cucina"] }
];

/* =========================================================
   DATI — «🔥 La Balla Finale» de "La Balla Colossale": l'ultima notizia della partita ha DUE pezzi mancanti (punti tripli).
   Ogni notizia è VERA (controllata):
     domanda      -> la frase con DUE "___" nei punti dei pezzi mancanti
     risposteVere -> i due pezzi veri, nell'ordine (massimo 30 lettere l'uno)
     balleCasa    -> 3 coppie di pezzi FALSI ma credibili, della "redazione" (quando le risposte sono poche)
     cat          -> l'argomento
   ========================================================= */
window.SG_BALLA_FINALE = [
  { domanda: "Il pappagallo Alex inventò la parola «___» per indicare la mela, forse unendo i nomi di due frutti che conosceva; ogni sera salutava la ricercatrice dicendo: «___».", risposteVere: ["banerry", "fai il bravo, a domani"], balleCasa: [["cherryple", "buonanotte, dormi bene"], ["lemonana", "grazie di tutto, a presto"], ["berrypear", "non fare tardi, ciao ciao"]], cat: "animali" },
  { domanda: "Nel Settecento il naturalista italiano Lazzaro Spallanzani, per capire come nascono i nuovi animali, infilò minuscoli pantaloncini di ___ ai maschi delle ___.", risposteVere: ["taffettà", "rane"], balleCasa: [["velluto", "tartarughe"], ["pelle di coniglio", "lucertole"], ["lana grezza", "chiocciole"]], cat: "animali" },
  { domanda: "La border collie Chaser conosceva il nome di 1.022 ___; il suo padrone, che la addestrò per tre anni, era un ___ in pensione.", risposteVere: ["giocattoli", "professore di psicologia"], balleCasa: [["biscotti", "maestro di scuola"], ["foto di cani", "guardia forestale"], ["rumori", "allenatore di calcio"]], cat: "animali" },
  { domanda: "Per studiare come vedono le seppie, degli scienziati hanno fissato loro con il Velcro minuscoli ___ e hanno mostrato filmati di ___.", risposteVere: ["occhialini 3D", "gamberetti"], balleCasa: [["occhiali da sole", "pesciolini"], ["paraocchi di plastica", "granchi"], ["mascherine da sub", "vermi di mare"]], cat: "animali" },
  { domanda: "Nel 1859 una tempesta solare illuminò il cielo: alcuni telegrafisti trasmisero anche senza ___, e dei minatori, credendo fosse l'alba, si misero a ___.", risposteVere: ["le batterie", "preparare la colazione"], balleCasa: [["le lampade a olio", "caricare i muli"], ["i campanelli d'allarme", "scendere in miniera"], ["le molle dei tasti", "lavarsi nel torrente"]], cat: "scienza" },
  { domanda: "Sul disco d'oro mandato nello spazio con le sonde Voyager ci sono saluti in tante lingue, il suono di ___ e le onde del cervello di una donna che pensava anche a ___.", risposteVere: ["un bacio", "come ci si innamora"], balleCasa: [["uno starnuto", "la sua infanzia"], ["un sospiro", "un viaggio in barca"], ["uno sbadiglio", "i suoi nonni"]], cat: "scienza" },
  { domanda: "Nel 2019 la sonda israeliana Beresheet si schiantò sulla Luna portando migliaia di ___, minuscoli animali disidratati, e un disco-archivio con anche ___.", risposteVere: ["tardigradi", "campioni di DNA umano"], balleCasa: [["rotiferi", "polvere di meteorite"], ["pulci d'acqua", "granelli di sabbia"], ["acari", "pezzetti di corallo"]], cat: "scienza" },
  { domanda: "Nel 1990 si scoprì che lo specchio di Hubble era sbagliato per colpa di ___; l'idea delle lenti correttive venne a un ingegnere guardando ___ in un albergo.", risposteVere: ["una lente di prova spostata", "il doccino della doccia"], balleCasa: [["un conto in pollici", "un ventilatore a soffitto"], ["una botta durante il lancio", "una tapparella a stecche"], ["un vetro di serie sbagliata", "un lampadario a bracci"]], cat: "scienza" },
  { domanda: "Nel 2015, sull'isola tedesca di Amrum, una donna trovò una bottiglia lanciata in mare 108 anni prima: dentro c'era ___ e come premio ricevette ___.", risposteVere: ["una cartolina da rispedire", "uno scellino"], balleCasa: [["una mappa del tesoro", "una medaglia d'argento"], ["una lettera d'amore", "una sterlina d'oro"], ["il diario di un marinaio", "una bottiglia di rum"]], cat: "scienza" },
  { domanda: "Per l'eruzione del vulcano ___, l'estate del 1816 fu gelida: a Ginevra Mary Shelley inventò Frankenstein e il medico Polidori il primo racconto moderno di ___.", risposteVere: ["Tambora", "vampiri"], balleCasa: [["Krakatoa", "fantasmi"], ["Vesuvio", "mummie"], ["Etna", "lupi mannari"]], cat: "storia" },
  { domanda: "Prima di prendere il nome di un topografo britannico, l'Everest si chiamava ___; lui stesso era contrario, perché diceva che il suo cognome ___.", risposteVere: ["Picco XV", "era impronunciabile in India"], balleCasa: [["Cima Reale", "non suonava bene in inglese"], ["Picco del Sole", "faceva ridere gli indiani"], ["Monte Vittoria", "era già dato a un lago"]], cat: "mondo" },
  { domanda: "Il primo volo dei fratelli Wright, nel 1903, durò ___; l'elicottero Ingenuity, su Marte, ha portato con sé ___ del loro aereo.", risposteVere: ["12 secondi", "un pezzetto di tela"], balleCasa: [["un minuto", "una scheggia di legno"], ["40 secondi", "un'elica in miniatura"], ["3 minuti", "un bullone d'acciaio"]], cat: "scienza" },
  { domanda: "In Russia hanno scavato il buco più profondo del mondo, 12 chilometri: si sono fermati perché in fondo faceva ___, molto più del previsto, e la roccia ___.", risposteVere: ["circa 180 gradi", "si comportava come plastica"], balleCasa: [["quasi 600 gradi", "era diventata liquida"], ["circa 300 gradi", "si sbriciolava come sabbia"], ["più di 400 gradi", "si riempiva di gas"]], cat: "scienza" },
  { domanda: "Lo Scrabble lo inventò negli anni Trenta un ___ rimasto senza lavoro, che per sapere quante volte usare ogni lettera contò quelle sulla prima pagina del ___.", risposteVere: ["architetto", "New York Times"], balleCasa: [["maestro", "Washington Post"], ["bibliotecario", "Chicago Tribune"], ["ingegnere", "Wall Street Journal"]], cat: "invenzioni" },
  { domanda: "Il primo cruciverba uscì nel 1913 su un giornale di New York: lo ideò un giornalista nato a ___ e aveva la forma di ___.", risposteVere: ["Liverpool", "un rombo vuoto"], balleCasa: [["Dublino", "una stella"], ["Manchester", "una croce"], ["Glasgow", "un cuore"]], cat: "invenzioni" },
  { domanda: "Nel 1767 Joseph Priestley inventò l'acqua frizzante abitando accanto a una ___; sperava che servisse contro ___.", risposteVere: ["fabbrica di birra", "lo scorbuto"], balleCasa: [["fonderia di ferro", "il raffreddore"], ["tintoria", "il mal di testa"], ["fabbrica di sapone", "il mal di denti"]], cat: "invenzioni" },
  { domanda: "Nel 1901, a Terranova, Marconi ricevette il primo segnale radio arrivato dall'Inghilterra: era la lettera ___ in Morse, e l'antenna era tenuta in alto da ___.", risposteVere: ["S, tre puntini", "un aquilone"], balleCasa: [["M, due linee", "un pennone di nave"], ["O, tre linee", "una torre di ferro"], ["A, punto e linea", "un traliccio di legno"]], cat: "italia" },
  { domanda: "Per inventare gli spaghetti istantanei, nel 1958, Momofuku Ando lavorò in ___ nel cortile di casa; l'idea di friggerli gli venne vedendo la moglie fare ___.", risposteVere: ["un capanno", "la tempura"], balleCasa: [["un gazebo", "le frittelle"], ["una serra", "le crocchette"], ["un pollaio", "i bomboloni"]], cat: "invenzioni" },
  { domanda: "L'inventore della lampada di lava ebbe l'idea in un pub, vedendo ___; la sua ditta, Mathmos, prende il nome da ___ del fumetto Barbarella.", risposteVere: ["un timer per le uova", "un lago di energia"], balleCasa: [["un'insegna al neon", "un mostro di lava"], ["una lampada a petrolio", "un vulcano d'argento"], ["un acquario da bar", "una palude luminosa"]], cat: "invenzioni" },
  { domanda: "La prima aspirapolvere a motore, nel 1901, stava su un carro con i cavalli e si chiamava ___; con lei pulirono i tappeti di ___ prima dell'incoronazione del re.", risposteVere: ["Puffing Billy", "Westminster Abbey"], balleCasa: [["Big Mama", "Buckingham Palace"], ["Dusty Jack", "Windsor Castle"], ["Old Betsy", "la Torre di Londra"]], cat: "invenzioni" },
  { domanda: "Per ridurre il botto nei tunnel, il treno giapponese Shinkansen ha il muso copiato dal becco di un ___ e il pantografo dalle piume di un ___.", risposteVere: ["martin pescatore", "gufo"], balleCasa: [["pellicano", "falco"], ["picchio", "gabbiano"], ["tucano", "cigno"]], cat: "invenzioni" },
  { domanda: "Le valigie con le rotelle arrivarono solo nel 1970: Bernard Sadow ebbe l'idea in aeroporto guardando un operaio che spostava ___; la sua valigia si trascinava con ___.", risposteVere: ["una macchina su un carrello", "una cinghia"], balleCasa: [["un pianoforte su un carro", "un manico di scopa"], ["una cassa su dei rulli", "un bastone telescopico"], ["un frigorifero su una slitta", "una molla d'acciaio"]], cat: "invenzioni" },
  { domanda: "Il papà di SpongeBob, biologo marino, nel 1989 disegnò un fumetto sulle pozze di marea intitolato «___»; il nome SpongeBoy fu cambiato perché già usato per ___.", risposteVere: ["The Intertidal Zone", "uno straccio per pavimenti"], balleCasa: [["Tide Pool Tales", "una marca di dentifricio"], ["The Rock Pool Gang", "una marca di saponette"], ["Under the Waves", "una bambola di pezza"]], cat: "spettacolo" },
  { domanda: "Prima di dipingere in TV, Bob Ross arrivò al grado di ___ nell'aeronautica americana, in Alaska; la sua celebre permanente nacque per ___.", risposteVere: ["sergente maggiore", "risparmiare sul parrucchiere"], balleCasa: [["capitano", "nascondere una cicatrice"], ["tenente colonnello", "una scommessa persa"], ["caporale", "imitare un cantante"]], cat: "spettacolo" },
  { domanda: "Il rumore dei caccia TIE di Guerre Stellari è un mix tra un ___ e il suono di ___.", risposteVere: ["barrito di elefante", "un'auto sull'asfalto bagnato"], balleCasa: [["verso di balena", "un trattore nel fango"], ["ruggito di leone", "un treno in galleria"], ["raglio d'asino", "un frullatore in cucina"]], cat: "spettacolo" },
  { domanda: "Nelle prime idee di Toy Story, Woody era un antipatico pupazzo da ___ e Buzz Lightyear si chiamava ___.", risposteVere: ["ventriloquo", "Lunar Larry"], balleCasa: [["circo", "Space Sam"], ["vetrina", "Captain Cosmo"], ["luna park", "Star Steve"]], cat: "spettacolo" },
  { domanda: "In «Ritorno al futuro» Marty McFly fu interpretato all'inizio da ___; dopo circa un mese lo sostituirono con Michael J. Fox, che girava anche ___.", risposteVere: ["Eric Stoltz", "la serie TV Casa Keaton"], balleCasa: [["Tom Cruise", "la serie TV Happy Days"], ["Matthew Broderick", "la serie TV Dallas"], ["Rob Lowe", "la serie TV Miami Vice"]], cat: "spettacolo" },
  { domanda: "Il nome James Bond non l'ha inventato Ian Fleming: era quello di un vero ___ americano; quando quell'uomo se ne accorse, Fleming gli offrì di ___.", risposteVere: ["ornitologo", "usare il nome Ian Fleming"], balleCasa: [["entomologo", "scrivere il suo prossimo libro"], ["botanico", "fare un cameo nel film"], ["geologo", "chiedergli scusa in TV"]], cat: "spettacolo" },
  { domanda: "Prima di scegliere Dracula, lo scrittore Bram Stoker voleva che il suo romanzo si chiamasse ___ e il conte ___.", risposteVere: ["The Un-Dead", "Wampyr"], balleCasa: [["The Night Lord", "Orlok"], ["The Crimson Night", "Balthazar"], ["The Eternal Dark", "Kronstadt"]], cat: "spettacolo" },
  { domanda: "Nel 1976 un maiale gonfiabile di 12 metri, usato per la copertina di un disco dei Pink Floyd, si staccò e volò ___; lo ritrovarono ___.", risposteVere: ["tra gli aerei di Heathrow", "in una fattoria nel Kent"], balleCasa: [["sopra lo stadio di Wembley", "in un parco di Londra"], ["tra gli aerei di Gatwick", "su un tetto di Brighton"], ["sopra la città di Oxford", "in un campo da golf"]], cat: "spettacolo" },
  { domanda: "Nel 1975 la casa discografica dei Queen trovava «Bohemian Rhapsody» troppo lunga, ma il DJ ___ la mise in onda ___ in due giorni.", risposteVere: ["Kenny Everett", "14 volte"], balleCasa: [["Tony Blackburn", "3 volte"], ["John Peel", "60 volte"], ["Noel Edmonds", "30 volte"]], cat: "spettacolo" },
  { domanda: "Rita Levi-Montalcini, futura premio Nobel, nel 1940 cominciò le sue ricerche in un laboratorio che si era fatta ___, studiando ___.", risposteVere: ["nella camera da letto", "embrioni di pollo"], balleCasa: [["nella cantina", "cuccioli di topo"], ["in una soffitta", "embrioni di rana"], ["nel garage", "uova di tartaruga"]], cat: "italia" },
  { domanda: "Per dimostrare che le ulcere vengono da un batterio, nel 1984 il medico Barry Marshall ne bevve un ___ pieno di batteri; dopo tre giorni la moglie notò ___.", risposteVere: ["brodo", "il suo alito cattivo"], balleCasa: [["frullato", "che russava più forte"], ["caffè", "che parlava nel sonno"], ["succo di frutta", "che era pallidissimo"]], cat: "scienza" },
  { domanda: "Nell'anno 897, a Roma, papa Stefano VI fece processare ___; a rispondere alle accuse al suo posto fu ___.", risposteVere: ["il cadavere del papa Formoso", "un giovane diacono"], balleCasa: [["il cadavere di un re barbaro", "un notaio con la barba finta"], ["la statua di un imperatore", "un pappagallo ammaestrato"], ["lo scheletro di un vescovo", "un giovane sacrestano"]], cat: "storia" },
  { domanda: "Nel 1270, a Viterbo, i cardinali discutevano da un anno e mezzo senza scegliere il papa: gli abitanti allora ___; alla fine fu eletto ___.", risposteVere: ["tolsero il tetto del palazzo", "uno che non era ancora prete"], balleCasa: [["spensero tutte le luci", "un frate di novant'anni"], ["portarono via tutti i mobili", "un contadino senza istruzione"], ["suonarono le campane di notte", "un re straniero in visita"]], cat: "storia" },
  { domanda: "Nel 1859, in un'isola vicino al Canada, americani e inglesi rischiarono una guerra per colpa di ___; a decidere chi aveva ragione fu poi ___.", risposteVere: ["un maiale che mangiava patate", "l'imperatore di Germania"], balleCasa: [["una mucca entrata in un orto", "il re del Belgio"], ["un'oca che rubava il grano", "lo zar di Russia"], ["una pecora fuggita dal recinto", "il papa Pio IX"]], cat: "storia" },
  { domanda: "L'imperatore Augusto aveva una gran paura dei temporali: per protezione portava sempre con sé ___, e al primo tuono correva a nascondersi ___.", risposteVere: ["un pezzo di pelle di foca", "in una stanza sotterranea"], balleCasa: [["un osso di cavallo", "dentro una grande botte"], ["una lamina di piombo", "sotto il suo letto"], ["una zampa di gatto", "nel fondo dei bagni imperiali"]], cat: "storia" },
  { domanda: "Nel 476 il re Odoacre non uccise l'ultimo imperatore romano d'Occidente, Romolo Augustolo, perché era ___; lo mandò in una villa dove oggi sorge ___.", risposteVere: ["ancora giovane e molto bello", "Castel dell'Ovo, a Napoli"], balleCasa: [["il suo figlioccio preferito", "il Maschio Angioino, a Napoli"], ["amico d'infanzia di sua moglie", "il porto di Pozzuoli"], ["molto simile a suo padre", "il Duomo di Capua"]], cat: "storia" },
  { domanda: "Più di 2.300 anni fa, ai Giochi di Olimpia, le donne sposate non potevano assistere: Callipatira si travestì da ___; scoperta, fu perdonata perché ___.", risposteVere: ["allenatore", "era figlia e madre di campioni"], balleCasa: [["venditore di fichi", "aveva portato un bue in dono"], ["suonatore di flauto", "era la sorella di un re"], ["portatore d'acqua", "il suo discorso fece ridere"]], cat: "storia" },
  { domanda: "Per rimettere in ordine il calendario, nel 46 a.C. Giulio Cesare fece durare quell'anno ___ giorni; per i calcoli si fece aiutare dall'astronomo ___.", risposteVere: ["445", "Sosigene di Alessandria"], balleCasa: [["380", "Demetrio di Rodi"], ["410", "Callia di Siracusa"], ["520", "Nabu di Babilonia"]], cat: "storia" },
  { domanda: "Il 23 maggio 1618, a Praga, dei nobili buttarono da una finestra alta circa venti metri ___; sopravvissero tutti e a uno l'imperatore diede il titolo di ___.", risposteVere: ["due reggenti e un segretario", "barone di «Alta Caduta»"], balleCasa: [["tre ambasciatori stranieri", "conte della Finestra Aperta"], ["il sindaco e due consiglieri", "conte di Bella Vista"], ["un vescovo e due soldati", "duca di Cielo Basso"]], cat: "storia" },
  { domanda: "Nel 1661, più di due anni dopo la sua morte, il corpo di Oliver Cromwell fu ___ e la testa messa su una picca; nel 1960 la testa fu sepolta ___.", risposteVere: ["dissepolto e impiccato", "in segreto, in un'università"], balleCasa: [["bruciato sulla piazza", "sotto un ponte sul Tamigi"], ["portato in processione", "in un giardino di Londra"], ["chiuso in una gabbia di ferro", "dentro un museo di Oxford"]], cat: "storia" },
  { domanda: "Nel 1522 la Victoria, finito il primo giro del mondo, toccò Capo Verde: i marinai scoprirono ___; la comandava ___, perché Magellano era morto nelle Filippine.", risposteVere: ["di aver perso un giorno", "Juan Sebastián Elcano"], balleCasa: [["di aver guadagnato un'ora", "il pilota Martín de Ayala"], ["che i calendari erano cambiati", "il capitano Gonzalo de Vigo"], ["di non conoscere più la lingua", "l'hidalgo Pedro de Salcedo"]], cat: "storia" },
  { domanda: "Guerra dei Pasticcini, 1838: la Francia attaccò il Messico per un pasticciere che voleva ___ pesos per una bottega da meno di mille; la gamba persa da Santa Anna ebbe ___.", risposteVere: ["60.000", "un funerale con onori militari"], balleCasa: [["6 milioni", "una statua di bronzo"], ["300.000", "un posto nel museo militare"], ["2.000", "una scatola d'argento"]], cat: "storia" },
  { domanda: "Nel 1816, anno senza estate, Byron e gli amici, chiusi in casa dalla pioggia, gareggiarono a scrivere storie di paura: nacquero Frankenstein e ___, del dottor ___.", risposteVere: ["Il Vampiro", "John Polidori"], balleCasa: [["La Mummia", "Edward Lawley"], ["Il Lupo del Lago", "Thomas Hartley"], ["La Strega di Ginevra", "Henry Wickham"]], cat: "storia" },
  { domanda: "Nel 1514 il re del Portogallo regalò a papa Leone X l'elefante Annone: spaventato dal rumore durante una sfilata, scaricò ___; quando morì, gli fu dedicato ___.", risposteVere: ["il poeta che aveva in groppa", "un affresco, oggi perduto"], balleCasa: [["il cardinale che lo guidava", "una statua d'argento"], ["un cavaliere in armatura", "una medaglia d'oro"], ["il suo domatore portoghese", "una cappella a suo nome"]], cat: "italia" },
  { domanda: "Il 14 luglio 1902 il campanile di San Marco, a Venezia, crollò da solo: l'unica vittima fu ___, e delle cinque campane si salvò solo ___.", risposteVere: ["il gatto del custode", "la più grande, la Marangona"], balleCasa: [["un guardiano notturno", "la più piccola di tutte"], ["il cane del sagrestano", "quella suonata a mezzogiorno"], ["un vecchio piccione", "la campana dei dogi"]], cat: "italia" },
  { domanda: "Nel gennaio 1996 il teatro La Fenice di Venezia fu distrutto da un incendio: lo appiccarono ___, per ___.", risposteVere: ["due elettricisti cugini", "evitare multe per i ritardi"], balleCasa: [["due fratelli falegnami", "far saltare uno spettacolo"], ["due vecchi macchinisti", "nascondere dei furti"], ["due pittori di scena", "farsi pagare di più"]], cat: "italia" },
  { domanda: "Nel 1796 i soldati di Napoleone usarono il refettorio con il Cenacolo di Leonardo come ___; nel 1943 una bomba lo colpì, ma il dipinto si salvò grazie a ___.", risposteVere: ["stalla e armeria", "sacchi di sabbia"], balleCasa: [["teatro e palestra", "una grande tenda di velluto"], ["forno e lavanderia", "una lastra di vetro blindato"], ["scuola e biblioteca", "una nebbia fitta quella notte"]], cat: "italia" },
  { domanda: "Nella spedizione dei Mille di Garibaldi, nel 1860, c'era una sola donna, Rosalia Montmasson, chiamata dai compagni ___; era la moglie di ___, che diventò primo ministro.", risposteVere: ["l'Angelo di Calatafimi", "Francesco Crispi"], balleCasa: [["la Regina di Marsala", "Ettore Falcone"], ["la Madonna dei Mille", "Pietro Ravaschieri"], ["la Garibaldina d'Oro", "Luigi Santorelli"]], cat: "italia" },
  { domanda: "Quando fu trovato Ötzi, la mummia di 5.300 anni, una misura ufficiale stabilì che il corpo era ___; il suo ultimo pasto includeva carne di ___.", risposteVere: ["92,5 metri dentro l'Italia", "stambecco"], balleCasa: [["40 metri dentro l'Austria", "marmotta"], ["esattamente sul confine", "lepre di montagna"], ["3 chilometri dal confine", "pernice bianca"]], cat: "italia" },
  { domanda: "Nel novembre 1860, dopo aver conquistato il Sud Italia, Garibaldi rifiutò ogni premio e salpò per Caprera con un sacco di legumi, qualche pacco di ___ e una balla di ___.", risposteVere: ["caffè e zucchero", "merluzzo secco"], balleCasa: [["sale e tabacco", "lana grezza"], ["pasta e olio", "tabacco in foglie"], ["farina e candele", "camicie rosse"]], cat: "italia" },
  { domanda: "Nel 1499 i soldati francesi entrati a Milano usarono il gigantesco cavallo di argilla di Leonardo come ___; il bronzo per fonderlo era già stato dato via per fare ___.", risposteVere: ["bersaglio per gli arcieri", "dei cannoni"], balleCasa: [["legna da ardere", "campane per il Duomo"], ["stalla per i cavalli", "armature per i soldati"], ["segnale per le navi", "ponti sul Naviglio"]], cat: "italia" },
  { domanda: "Nel 1610 Galileo scoprì quattro lune di Giove e le chiamò ___; i nomi di oggi (Io, Europa, Ganimede, Callisto) li propose un altro astronomo, ___.", risposteVere: ["Astri Medicei", "il tedesco Simon Marius"], balleCasa: [["Stelle di Firenze", "il danese Jens Madsen"], ["Pianeti di Pisa", "il francese Louis Verdon"], ["Quattro Sorelle", "l'inglese John Pembrey"]], cat: "scienza" },
  { domanda: "Nel 1967 la Svezia passò di colpo alla guida a destra (il «Dagen H»): la canzone del concorso TV si chiamava ___ e il simbolo «H» fu stampato anche su ___.", risposteVere: ["«Tieniti a destra, Svensson»", "mutande e cartoni del latte"], balleCasa: [["«Svensson, guida piano»", "sacchetti del pane e bandiere"], ["«Tutti a destra, ragazzi!»", "tazze da tè e berretti"], ["«La strada è di tutti»", "biglietti del tram e sciarpe"]], cat: "mondo" },
  { domanda: "A Castrillo de Murcia, in Spagna, per il Corpus Domini degli uomini vestiti da diavolo, i Colacho, saltano sopra ___; in mano tengono ___.", risposteVere: ["neonati sdraiati su materassi", "fruste e nacchere giganti"], balleCasa: [["fuochi accesi in strada", "forconi e campanacci"], ["tori di cartapesta", "spade di legno e lanterne"], ["lunghe file di botti", "ventagli e trombette"]], cat: "mondo" },
  { domanda: "In Perù, sul fiume Apurímac, c'è un ponte sospeso di origine inca, fatto soltanto di ___; ogni anno, a giugno, ___.", risposteVere: ["erba intrecciata", "quattro comunità lo rifanno"], balleCasa: [["canne di bambù", "lo rifanno i soldati"], ["pelle di lama cucita", "lo rinnovano gli archeologi"], ["fili di rame antico", "lo ritessono i monaci"]], cat: "mondo" },
  { domanda: "Franco vietò la Tomatina, la battaglia di pomodori di Buñol; nel 1957 gli abitanti protestarono con ___ e oggi, finita la battaglia, a pulire le strade aiuta ___.", risposteVere: ["un finto funerale del pomodoro", "l'acido dei pomodori"], balleCasa: [["uno sciopero dei contadini", "la sabbia dei fiumi"], ["una marcia con le pentole", "l'aceto dei ristoranti"], ["una cena in piazza per tutti", "il sale sparso dai vigili"]], cat: "mondo" },
  { domanda: "Ogni Martedì Grasso, a Olney, in Inghilterra, le donne corrono per circa 380 metri ___; dal 1950 la loro corsa è una sfida con una cittadina americana, ___.", risposteVere: ["con una frittella in padella", "Liberal, nel Kansas"], balleCasa: [["con un uovo in un cucchiaio", "Paris, nel Texas"], ["con una candela accesa", "Salem, nel Missouri"], ["con una brocca sulla testa", "Dover, nel Delaware"]], cat: "mondo" },
  { domanda: "In Svezia, a Pasqua, i bambini si travestono da ___ e vanno di casa in casa a chiedere dolci; a volte in cambio regalano ___.", risposteVere: ["streghe", "biglietti fatti a mano"], balleCasa: [["pirati", "uno spettacolo di burattini"], ["fantasmi", "monetine di cioccolato"], ["troll", "piccoli giochi di legno"]], cat: "mondo" },
  { domanda: "Nel 1923 la famosa scritta di Hollywood diceva «HOLLYWOODLAND» ed era la pubblicità di ___; doveva restare in piedi soltanto ___.", risposteVere: ["un quartiere residenziale", "un anno e mezzo"], balleCasa: [["un cinema all'aperto", "una settimana"], ["una marca di sigari", "tre mesi"], ["una fabbrica di pellicole", "cinque anni"]], cat: "spettacolo" },
  { domanda: "La principessa Zelda del videogioco del 1986 prende il nome da una donna americana vera, ___; il creatore Shigeru Miyamoto si ispirò a ciò che esplorava da bambino: ___.", risposteVere: ["Zelda Fitzgerald, scrittrice", "boschi, campi e grotte"], balleCasa: [["Zelda Pickford, attrice", "palazzi e castelli abbandonati"], ["Zelda Moore, cantante", "stazioni e vecchi treni"], ["Zelda Hale, pilota", "fiumi e miniere di carbone"]], cat: "spettacolo" },
  { domanda: "Hello Kitty ha una biografia ufficiale: si chiama Kitty White, vive in un sobborgo di ___ e la sua altezza ufficiale è di ___.", risposteVere: ["Londra", "cinque mele"], balleCasa: [["Tokyo", "tre palle di riso"], ["New York", "sei fragole"], ["Parigi", "sette pesche"]], cat: "invenzioni" },
  { domanda: "Nel 1917 il cane Stubby, trovato in un'università, fu portato di nascosto in guerra da un soldato; scoperto da un ufficiale, Stubby ___; morto nel 1926, oggi si trova ___.", risposteVere: ["gli fece il saluto militare", "impagliato, in un museo"], balleCasa: [["gli leccò la mano", "sotto un albero di New Haven"], ["abbaiò tre volte", "sepolto con le sue medaglie"], ["si mise a ballare", "in un cimitero per cani eroi"]], cat: "animali" },
  { domanda: "La pizza Hawaiana, con prosciutto e ananas, non è nata alle Hawaii: la inventò nel 1962 un ristoratore ___, in una cittadina ___.", risposteVere: ["greco di nome Sam Panopoulos", "del Canada, a Chatham"], balleCasa: [["italiano di nome Gino Moretti", "della Florida, a Tampa"], ["tedesco di nome Hans Vogel", "dell'Australia, a Perth"], ["inglese di nome Tom Harley", "della Scozia, a Dundee"]], cat: "invenzioni" },
  { domanda: "L'orsa vera che ispirò Winnie the Pooh fu comprata nel 1914 per 20 dollari da un veterinario canadese ___; il nome Pooh Christopher Robin lo prese da ___.", risposteVere: ["in una stazione ferroviaria", "un cigno visto in vacanza"], balleCasa: [["in un circo ambulante", "un pappagallo di famiglia"], ["a un mercato di Winnipeg", "una bambola di pezza"], ["su una nave in porto", "il cane del giardiniere"]], cat: "animali" },
  { domanda: "Il logo della Nike, il «baffo», fu disegnato nel 1971 dalla studentessa Carolyn Davidson, pagata ___; nel 1983 l'azienda le regalò ___.", risposteVere: ["35 dollari", "un anello d'oro e delle azioni"], balleCasa: [["500 dollari", "un orologio con il baffo"], ["una scatola di scarpe", "una macchina sportiva"], ["10 dollari", "un viaggio in Giappone"]], cat: "invenzioni" }
];

/* =========================================================
   GIOCO — "La Balla Colossale" (ispirato a Balderdash / Fibbage)
   Nello studio del game show (js/studio.js): su un telefono solo (ce lo si passa) oppure online. Niente bot.
   Ogni round sul maxischermo esce una notizia VERA ma incredibile, con un pezzo mancante.
   1. A turno ognuno, in segreto, scrive una BALLA credibile per completarla.
   2. Le balle e la risposta vera si mescolano (due balle uguali diventano una sola); se le risposte
      sono meno di 5 la "redazione" aggiunge qualche balla sua (balleCasa: chi ci casca non dà punti a nessuno).
   3. A turno ognuno vota in segreto quella che crede vera (la sua non la può votare).
   4. La rivelazione: +2 a chi trova la verità, +1 all'autore di una balla per ogni voto che prende.
      L'ultimo round vale doppio. A fine partita i premi: Re delle balle, Detective, Credulone, Balla d'oro.
   5. «😂 Che balla!» (regola dell'host, accesa di partenza): alla rivelazione chi vuole mette un 😂 alle balle che lo
      fanno ridere (non alla sua). La balla con più 😂 del round è la «Balla d'oro»: +1 a chi l'ha scritta.
   6. «👥 Parliamo di te» (regola dell'host: solo notizie / notizie e amici / solo amici): la domanda è su uno di voi
      («Il cibo che Luca non mangerebbe mai è…»). Lui scrive la VERITÀ, gli altri le balle; lui non vota e prende +1
      per ogni amico che trova la sua verità. Se non la scrive (online, tempo finito) si passa a una notizia.
   Le notizie sono in data/balla-domande.js: SG_BALLA = [{ domanda, rispostaVera, balleCasa: [..] }]
   e, in fondo allo stesso file, le domande sugli amici: SG_BALLA_AMICI = [{ domanda (con {nome}), balleCasa: [..] }].
   La domanda finisce con "..." (il pezzo mancante va in fondo) oppure ha "___" dove va il pezzo.
   ========================================================= */
(function () {
  "use strict";

  var ST = window.SGStudio;
  var MAX_BALLA = 50;   // caratteri al massimo per una balla (20 nov 2026, il proprietario: da 45 a 50)
  // i caratteri (mai corsivo né scritto a mano: si legge al volo): le risposte col carattere dell'app, chiaro e grosso;
  // il titolo della prima pagina con un carattere da giornale (Playfair Display, licenza SIL Open Font, dentro questo file)
  var TESTO = "'SG Testo','Plus Jakarta Sans',system-ui,sans-serif";
  var TITOLO = "'BC Titolo','Playfair Display',Georgia,'Times New Roman',serif";
  // «🔥 La Balla Finale»: l'ultima notizia ha due pezzi mancanti; una risposta sono i due pezzi attaccati con SEP
  var SEP = " ‖ ";

  // =========================================================
  //  LE REGOLE (senza grafica: serviranno uguali anche all'online)
  // =========================================================
  function mescola(a) { var b = a.slice(); for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = b[i]; b[i] = b[j]; b[j] = x; } return b; }
  // per confrontare due frasi: minuscole, senza accenti, punteggiatura, articoli e preposizioni (1.000 = 1000)
  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/(\d)[.,](?=\d)/g, "$1").replace(/[^a-z0-9]+/g, " ")
      .replace(/\b(il|lo|la|i|gli|le|l|un|uno|una|del|dello|della|dell|dei|degli|delle|di|d|con|col)\b/g, " ").replace(/\s+/g, " ").trim();
  }
  // i numeri di una frase (in cifre o in lettere): se cambia un numero è un'altra risposta, mai "la verità"
  var NUMERI = { zero: 0, due: 2, tre: 3, quattro: 4, cinque: 5, sei: 6, sette: 7, otto: 8, nove: 9, dieci: 10, undici: 11, dodici: 12,
    tredici: 13, quattordici: 14, quindici: 15, sedici: 16, diciassette: 17, diciotto: 18, diciannove: 19, venti: 20, trenta: 30,
    quaranta: 40, cinquanta: 50, sessanta: 60, settanta: 70, ottanta: 80, novanta: 90, cento: 100, mille: 1000, mezzo: 0.5, mezza: 0.5,
    milione: 1e6, milioni: 1e6, miliardo: 1e9, miliardi: 1e9, primo: "1o", prima: "1o", secondo: "2o", terzo: "3o" };
  function numeri(n) { return n.split(" ").filter(function (w) { return /^\d+$/.test(w) || NUMERI[w] != null; }).map(function (w) { return /^\d+$/.test(w) ? String(+w) : String(NUMERI[w]); }).join(" "); }
  // la parola senza l'ultima vocale: "cubo" e "cubi", "verde" e "verdi" sono la stessa risposta
  function radice(n) { return n.split(" ").map(function (w) { return w.length > 3 ? w.replace(/[aeiou]$/, "") : w; }).join(" "); }
  function distanza(a, b) {   // quante lettere cambiare per passare da a a b
    var r = [], i, j;
    for (j = 0; j <= b.length; j++) r.push(j);
    for (i = 1; i <= a.length; i++) {
      var prec = r[0]; r[0] = i;
      for (j = 1; j <= b.length; j++) { var tmp = r[j]; r[j] = Math.min(r[j] + 1, r[j - 1] + 1, prec + (a[i - 1] === b[j - 1] ? 0 : 1)); prec = tmp; }
    }
    return r[b.length];
  }
  // la balla è (quasi) la risposta vera? (perdona un errore di battitura, al singolare o al plurale; i numeri devono essere uguali)
  function eLaVerita(balla, vera) {
    var a = norm(balla), b = norm(vera); if (!a) return false;
    if (a === b) return true;
    if (numeri(a) !== numeri(b)) return false;   // "39 minuti" non è "38 minuti"
    if (radice(a) === radice(b)) return true;
    var la = a.replace(/[0-9 ]/g, ""), lb = b.replace(/[0-9 ]/g, "");   // gli errori di battitura si contano solo sulle lettere
    return distanza(la, lb) <= (lb.length >= 12 ? 2 : lb.length >= 6 ? 1 : 0);
  }
  function pulisci(s) { return String(s || "").replace(/‖/g, "|").replace(/\s+/g, " ").trim().replace(/[.…]+$/, "").trim().slice(0, MAX_BALLA); }
  // la Balla Finale: i due pezzi di una risposta; pulita (vuota se manca un pezzo); è la verità solo se lo sono tutti e due i pezzi
  function dueDi(s) { var p = String(s || "").split("‖"); return [String(p[0] || "").trim(), p.slice(1).join(" ").trim()]; }
  function pulisciR(s, doppia) { if (!doppia) return pulisci(s); var p = dueDi(s).map(pulisci); return p[0] && p[1] ? p[0] + SEP + p[1] : ""; }
  function eLaVeritaR(b, vera, doppia) {
    if (!doppia) return eLaVerita(b, vera);
    var a = dueDi(b), v = dueDi(vera); return eLaVerita(a[0], v[0]) && eLaVerita(a[1], v[1]);
  }
  // come si legge una risposta (la Balla Finale: «primo pezzo / secondo pezzo»)
  function vis(s) { return String(s || "").split("‖").map(function (x) { return x.trim(); }).join(" / "); }
  // le scelte del round: la verità più le balle (quelle uguali diventano una sola, con tutti i loro autori), mescolate.
  // Se le risposte sono poche (pochi giocatori, chi non ha scritto, balle uguali) la redazione aggiunge le sue balle (casa: true)
  var MIN_SCELTE = 5;
  function preparaScelte(vera, balle, casa, doppia) {
    var scelte = [{ testo: vera, vera: true, autori: [] }];
    balle.forEach(function (b, i) {
      if (!b) return;
      var n = norm(b), gia = scelte.filter(function (x) { return !x.vera && norm(x.testo) === n; })[0];
      if (gia) gia.autori.push(i); else scelte.push({ testo: b, vera: false, autori: [i] });
    });
    mescola(casa || []).forEach(function (c) {
      c = pulisciR(c, doppia);
      if (!c || scelte.length >= MIN_SCELTE || eLaVeritaR(c, vera, doppia)) return;
      if (scelte.some(function (x) { return norm(x.testo) === norm(c); })) return;
      scelte.push({ testo: c, vera: false, autori: [], casa: true });
    });
    return mescola(scelte);
  }
  // l'ultimo round vale doppio (la Balla Finale, coi due pezzi mancanti, triplo)
  function moltiplica(giro, giri, doppia) { return giri > 1 && giro + 1 >= giri ? (doppia ? 3 : 2) : 1; }
  // i punti del round: voti[i] = la scelta votata da i. Restituisce, per ogni giocatore, i punti presi con la verità e con le balle
  // (più i numeri per i premi: verità trovate, amici ingannati, volte che ci è cascato, balla che ha ingannato tutti)
  // votanti = quanti potevano votare (chi è rimasto, senza il protagonista di «Parliamo di te»);
  // prot = il posto del protagonista (+1 per ogni amico che trova la sua verità);
  // risate = i 😂 di ogni scelta (con «Che balla!» accesa): le risate prese e la Balla d'oro (+1 a chi l'ha scritta)
  function calcola(scelte, voti, n, m, votanti, prot, risate) {
    m = m || 1;
    var d = []; for (var i = 0; i < n; i++) d.push({ vera: 0, inganni: 0, capito: 0, oro: 0, risate: 0, trovata: 0, ingannati: 0, cascato: 0, perfetta: 0, ori: 0 });
    var conProt = prot != null && prot >= 0 && prot < n;
    voti.forEach(function (v, i) {
      if (v == null || !scelte[v] || (conProt && i === prot)) return;
      if (scelte[v].vera) { d[i].vera += 2 * m; d[i].trovata = 1; if (conProt) d[prot].capito += m; }
      else { d[i].cascato = 1; scelte[v].autori.forEach(function (a) { if (a !== i) { d[a].inganni += m; d[a].ingannati++; } }); }
    });
    // la balla perfetta: l'hanno votata tutti gli altri (almeno 2)
    var altri = (votanti == null ? n - (conProt ? 1 : 0) : votanti) - 1;
    d.forEach(function (x) { if (altri >= 2 && x.ingannati >= altri) x.perfetta = 1; });
    if (risate) {
      scelte.forEach(function (sc, k) { (sc.autori || []).forEach(function (a) { if (d[a]) d[a].risate += risate[k] || 0; }); });
      var oro = calcolaOro(scelte, risate);
      if (oro) oro.ks.forEach(function (k) { scelte[k].autori.forEach(function (a) { if (d[a]) { d[a].oro = 1; d[a].ori = 1; } }); });
    }
    return d;
  }
  // la Balla d'oro del round: la balla di un giocatore (non della redazione) con più 😂; a pari 😂 vincono tutte
  function calcolaOro(scelte, risate) {
    var max = 0, ks = [];
    scelte.forEach(function (sc, k) {
      if (sc.vera || sc.casa || !(sc.autori || []).length) return;
      var n = (risate && risate[k]) || 0; if (!n) return;
      if (n > max) { max = n; ks = [k]; } else if (n === max) ks.push(k);
    });
    return max ? { ks: ks, n: max } : null;
  }
  // i punti del round di un giocatore
  function puntiDi(d) { return d.vera + d.inganni + d.capito + d.oro; }
  // 💯 (20 nov 2026, il proprietario) i punti si MOSTRANO ×100, come in un game show (200 la verità, 100 a amico ingannato):
  // i conti dentro restano piccoli, cambia solo quello che si legge
  function P(n) { return (+n || 0) * 100; }
  function fmtP(n) { var v = Math.abs(P(n)), t = String(v).replace(/\B(?=(\d{3})+(?!\d))/g, "."); return (n < 0 ? "−" : "") + t; }
  // il piano dei round: "n" = notizia, "a" = «Parliamo di te», "f" = la Balla Finale (due pezzi mancanti, punti tripli).
  // modo: "no" (solo notizie), "solo" (solo amici), altrimenti mescolate
  // (si comincia sempre con una notizia e si chiude con la Balla Finale; senza le sue notizie, con una notizia a punti doppi)
  function pianoRound(giri, modo) {
    var ci = (window.SG_BALLA_AMICI || []).length > 0, p = [];
    for (var i = 0; i < giri; i++) p.push(!ci || modo === "no" ? "n" : modo === "solo" ? "a" : i % 2 === 1 && i + 1 < giri ? "a" : "n");
    if (giri > 1 && p[giri - 1] === "n" && finali().length) p[giri - 1] = "f";
    return p;
  }
  // la domanda sugli amici col nome del protagonista
  function riempi(tpl, nome) { return String(tpl || "").replace(/\{nome\}/g, nome); }
  // la domanda divisa attorno ai pezzi mancanti: i testi prima, in mezzo e dopo (uno in più dei pezzi mancanti)
  function pezziN(domanda) {
    var s = String(domanda || "").trim();
    if (/_{3,}/.test(s)) return s.split(/_{3,}/).map(function (x) { return x.trim(); });
    return [s.replace(/(...|…)s*$/, "").trim(), ""];
  }
  // la domanda divisa attorno al pezzo mancante
  function pezzi(domanda) {
    var s = String(domanda || "").trim(), m = s.match(/_{3,}/);
    if (m) return { prima: s.slice(0, m.index).trim(), dopo: s.slice(m.index + m[0].length).trim() };
    return { prima: s.replace(/(\.\.\.|…)\s*$/, "").trim(), dopo: "" };
  }

  // ---- quali notizie: mai le stesse finché non le avete viste tutte (ricordate su questo telefono) ----
  var CHIAVE_VISTE = "sg-balla-viste";
  function chiave(d) { return String(d.domanda).slice(0, 60); }
  // le domande sugli amici (stessa regola: mai le stesse finché non le avete viste tutte)
  function scegliAmici(n) {
    return n > 0 ? scegliDomande(n, (window.SG_BALLA_AMICI || []).filter(function (d) { return d && d.domanda && /\{nome\}/.test(d.domanda); }), "sg-balla-amici-viste") : [];
  }
  function scegliDomande(n, lista, chiaveLS) {
    var CHIAVE_VISTE = chiaveLS || "sg-balla-viste";
    var tutte = lista || (window.SG_BALLA || []).filter(function (d) { return d && d.domanda && d.rispostaVera; });
    var viste = {}; try { (JSON.parse(localStorage.getItem(CHIAVE_VISTE) || "[]") || []).forEach(function (k) { viste[k] = 1; }); } catch (e) {}
    var scelte = mescola(tutte.filter(function (d) { return !viste[chiave(d)]; })).slice(0, n);
    if (scelte.length < n) {   // finite le nuove: si ricomincia il giro di tutte (di questa lista: le altre restano ricordate)
      tutte.forEach(function (d) { delete viste[chiave(d)]; });
      scelte = scelte.concat(mescola(tutte.filter(function (d) { return scelte.indexOf(d) < 0; })).slice(0, n - scelte.length));
    }
    scelte.forEach(function (d) { viste[chiave(d)] = 1; });
    try { localStorage.setItem(CHIAVE_VISTE, JSON.stringify(Object.keys(viste).slice(-1500))); } catch (e) {}
    return scelte;
  }
  // ---- «🔥 La Balla Finale»: le notizie coi due pezzi mancanti (SG_BALLA_FINALE: { domanda con due "___", risposteVere: [a, b], balleCasa: [[a, b] ×3] }) ----
  function finali() { return (window.SG_BALLA_FINALE || []).filter(function (d) { return d && d.domanda && (String(d.domanda).match(/_{3,}/g) || []).length === 2 && d.risposteVere && d.risposteVere.length === 2; }); }
  function scegliFinale() {
    var d = scegliDomande(1, finali(), "sg-balla-finale-viste")[0]; if (!d) return null;
    return { domanda: d.domanda, rispostaVera: d.risposteVere.join(SEP), doppia: true,
      balleCasa: (d.balleCasa || []).map(function (b) { return [].concat(b).join(SEP); }) };
  }
  // ---- «🎯 Sceglie chi è ultimo»: prima di ogni notizia chi è ultimo in classifica sceglie l'argomento tra tre ----
  var CATEGORIE = [
    { k: "animali", ic: "🐾", nome: "Animali" }, { k: "storia", ic: "🏛️", nome: "Storia" }, { k: "italia", ic: "🍝", nome: "Italia" },
    { k: "scienza", ic: "🔬", nome: "Scienza e corpo" }, { k: "mondo", ic: "🌍", nome: "Dal mondo" },
    { k: "spettacolo", ic: "🎬", nome: "Spettacolo e sport" }, { k: "invenzioni", ic: "💡", nome: "Invenzioni e marchi" }
  ];
  var TEMPO_CAT = 12000;   // online: quanto tempo ha chi sceglie (poi si sceglie a caso)
  function catDi(k) { return CATEGORIE.filter(function (c) { return c.k === k; })[0] || { k: k, ic: "📰", nome: "Notizie" }; }
  function notizieDi(k) { return (window.SG_BALLA || []).filter(function (d) { return d && d.domanda && d.rispostaVera && (!k || d.cat === k); }); }
  // tre argomenti a caso tra quelli che hanno notizie (prima quelli con notizie mai uscite su questo telefono)
  function treCategorie() {
    var viste = {}; try { (JSON.parse(localStorage.getItem(CHIAVE_VISTE) || "[]") || []).forEach(function (k) { viste[k] = 1; }); } catch (e) {}
    var ok = CATEGORIE.filter(function (c) { return notizieDi(c.k).length; });
    var fresche = ok.filter(function (c) { return notizieDi(c.k).some(function (d) { return !viste[chiave(d)]; }); });
    var l = mescola(fresche).slice(0, 3);
    if (l.length < 3) l = l.concat(mescola(ok.filter(function (c) { return l.indexOf(c) < 0; })).slice(0, 3 - l.length));
    return l.map(function (c) { return c.k; });
  }
  function notiziaDi(k) { var l = notizieDi(k); return (l.length ? scegliDomande(1, l) : scegliDomande(1))[0]; }
  // chi sceglie: chi ha meno punti; a pari punti chi ha scelto meno volte, poi a caso.
  // perche: "zero" (tutti a zero), "pari" (più d'uno in fondo), "ultimo"
  function chiSceglie(lista) {
    var min = Math.min.apply(null, lista.map(function (g) { return g.punti || 0; }));
    var ultimi = lista.filter(function (g) { return (g.punti || 0) === min; });
    var meno = Math.min.apply(null, ultimi.map(function (g) { return g.nScelte || 0; }));
    var c = mescola(ultimi.filter(function (g) { return (g.nScelte || 0) === meno; }))[0];
    return { g: c, perche: ultimi.length === lista.length && !min ? "zero" : ultimi.length > 1 ? "pari" : "ultimo" };
  }

  SG.registra({
    id: "balla",
    nome: "La Balla Colossale",
    icona: "🤥",
    descrizione: "Notizie vere ma incredibili, con un pezzo mancante. Inventate una balla credibile e scovate quella vera in mezzo alle vostre!",
    giocatoriMin: 3,
    giocatoriMax: 8,
    postiOnline: 8,   // posti online
    riprende: true,   // se l'host ricarica a metà partita, la partita riprende da dove era (t.ripresa)
    riserva: true,   // online: se l'host sparisce del tutto (telefono spento), un amico porta avanti la partita
    ritardatari: "turno",   // online: chi arriva a partita cominciata gioca dal round dopo (con 0 punti)
    difficolta: 2,
    modi: [{ modo: "telefono", icona: "📱", nome: "Su questo telefono", sotto: "Vi passate il telefono per scrivere e votare", amici: true }],
    regole: [
      "Esce una <b>notizia vera</b> ma incredibile, con un pezzo mancante.",
      "Ognuno, in segreto, scrive una <b>balla</b> per completarla: deve sembrare vera, per ingannare gli altri (sullo stesso telefono a turno, passandovi il telefono).",
      "Poi tutte le balle e la risposta vera si mescolano e ognuno <b>vota</b> in segreto quella che crede vera. La propria balla non si può votare.",
      "Quando le risposte sono poche, anche la <b>redazione</b> aggiunge qualche balla sua: occhio a non cascarci!",
      "<b>+200 punti</b> a chi trova la risposta vera. <b>+100</b> a chi ha scritto una balla, per ogni amico che ci è cascato.",
      "👥 <b>Parliamo di te</b>: in certi round la domanda è su uno di voi («Il cibo che Luca non mangerebbe mai è…»). Lui scrive la <b>verità</b>, gli altri le balle. Lui non vota e prende <b>+100</b> per ogni amico che trova la sua verità.",
      "😂 <b>Che balla!</b> Quando le balle si scoprono, toccate 😂 su quelle che vi fanno ridere (non sulla vostra). La più votata del round è la <b>Balla d'oro</b>: +100 a chi l'ha scritta.",
      "🎯 <b>Sceglie chi è ultimo</b>: prima di ogni notizia chi è ultimo in classifica sceglie l'argomento tra tre (🐾 Animali, 🏛️ Storia, 🍝 Italia…).",
      "🔥 <b>La Balla Finale</b>: l'ultima notizia ha <b>due pezzi mancanti</b>. Si inventano tutti e due e vale il <b>triplo</b>: +600 per la verità, +300 per ogni amico ingannato. Alla fine vince chi ha più punti, e sul podio ci sono i premi: Re delle balle, Detective, Credulone e Balla d'oro.",
      "<b>Online</b> ognuno scrive e vota dal suo telefono, tutti insieme: 75 secondi per la balla e 45 per il voto."
    ],

    impostazioni: function (box, dove, aiuti) {
      var el = aiuti.el;
      if ([3, 5, 7].indexOf(dove.round) < 0) dove.round = 5;
      if (["no", "misto", "solo"].indexOf(dove.amici) < 0) dove.amici = "misto";
      if (typeof dove.ride !== "boolean") dove.ride = true;
      if (typeof dove.sceglie !== "boolean") dove.sceglie = true;
      // un gruppo di scelte: un tocco accende quella e spegne le altre
      function gruppo(etichetta, chiave, voci) {
        box.appendChild(el("div", { class: "etichetta", text: etichetta }));
        var g = el("div", { class: "modo-griglia" }), bb = [];
        voci.forEach(function (v) {
          var b = el("button", { class: "modo-chip" + (dove[chiave] === v.v ? " attiva" : ""), type: "button", onclick: function () {
            dove[chiave] = v.v; bb.forEach(function (x) { x.b.className = "modo-chip" + (x.v === v.v ? " attiva" : ""); });
          } }, [ el("div", {}, [ el("div", { class: "mt", text: v.mt }), el("div", { class: "ms", text: v.ms }) ]) ]);
          bb.push({ b: b, v: v.v }); g.appendChild(b);
        });
        box.appendChild(g);
      }
      gruppo("Quanti round", "round", [ { v: 3, mt: "3 round", ms: "Una partita veloce" }, { v: 5, mt: "5 round", ms: "Il giusto" }, { v: 7, mt: "7 round", ms: "Serata lunga" } ]);
      if ((window.SG_BALLA_AMICI || []).length)
        gruppo("Di cosa si parla", "amici", [ { v: "no", mt: "📰 Solo notizie", ms: "Notizie vere e strane" },
          { v: "misto", mt: "🔀 Notizie e amici", ms: "Un round sì e uno no si parla di voi" }, { v: "solo", mt: "👥 Solo amici", ms: "Ogni round una domanda su uno di voi" } ]);
      gruppo("Chi sceglie la notizia", "sceglie", [ { v: true, mt: "🎯 Chi è ultimo", ms: "Sceglie l'argomento tra tre" }, { v: false, mt: "🎲 A caso", ms: "Notizie di ogni tipo" } ]);
      gruppo("Che balla!", "ride", [ { v: true, mt: "😂 Sì", ms: "Le risate alle balle e la Balla d'oro" }, { v: false, mt: "No", ms: "Solo voti e punti" } ]);
      box.appendChild(el("p", { class: "modulo-nota", text: aiuti.modo === "online" ? "Online ognuno scrive e vota dal suo telefono, tutti insieme: 75 secondi per la balla, 45 per il voto." : "Ogni round: si scrivono le balle passandosi il telefono, poi si vota, sempre in segreto." }));
    },
    // la riga "📜 Si gioca così" che leggono gli amici in saletta
    riassunto: function (imp) {
      imp = imp || {};
      var am = (window.SG_BALLA_AMICI || []).length ? ({ no: "Solo notizie", solo: "Solo amici" }[imp.amici] || "Notizie e amici") : "Solo notizie";
      return (imp.round || 5) + " round · " + am + (imp.sceglie === false ? "" : " · 🎯 sceglie chi è ultimo") + " · " + (imp.ride === false ? "senza «Che balla!»" : "😂 Che balla!");
    },

    avvia: function (t) {
      if (t.linkParams && t.linkParams.stanza) return ospiteB(t, t.linkParams.stanza);   // entrato da un invito
      if ((t.impostazioni || {}).modo === "online") { assicuraStile(); return hostB(t); }
      var imp = t.impostazioni || {};
      var g = t.giocatori.map(function (n) { return { nome: n, punti: 0, tot: nuoviTot() }; });
      var domande = domandeLocali(imp.round || 5, imp.amici, g, imp.sceglie !== false);
      if (!domande.length) return niente(t);
      assicuraStile();
      var st = { t: t, domande: domande, giri: domande.length, giro: 0, g: g, ride: imp.ride !== false };
      st.S = ST.crea(t, st.g.map(function (g) { return { nome: g.nome }; }), { io: -1, esci: t.esci, titolo: "La Balla Colossale", logo: ["LA BALLA", "COLOSSALE"] }); chipStretti(st.S);
      ST.apertura(st.S).then(function () { round(st); });
    }
  });

  // le domande della partita sullo stesso telefono: notizie e (se si parla di voi) domande sugli amici, coi protagonisti a turno,
  // e alla fine la Balla Finale. sceglie = la notizia la sceglie chi è ultimo: al suo posto c'è { daScegliere: true }
  function domandeLocali(giri, modo, g, sceglie) {
    var piano = pianoRound(giri, modo);
    var nA = piano.filter(function (x) { return x === "a"; }).length, nN = piano.filter(function (x) { return x === "n"; }).length;
    var notizie = sceglie ? [] : scegliDomande(nN), amici = scegliAmici(nA);
    var turno = mescola(g.map(function (_, i) { return i; })), q = 0, out = [];
    piano.forEach(function (x) {
      var tpl = x === "a" ? amici.shift() : null;
      if (tpl) { var p = turno[q++ % turno.length]; out.push({ domanda: riempi(tpl.domanda, g[p].nome), rispostaVera: "", balleCasa: tpl.balleCasa || [], amici: true, prot: p, protNome: g[p].nome }); }
      else if (x === "f" && finali().length) out.push(scegliFinale());
      else if (sceglie && notizieDi().length) out.push({ daScegliere: true });
      else { var d = notizie.shift() || scegliDomande(1)[0]; if (d) out.push(d); }
    });
    return out;
  }
  function eProt(st, i) { return !!(st.d && st.d.amici && st.d.prot === i); }
  function avvisoVera(st) { return st.d && st.d.amici ? "😱 È proprio la risposta di " + st.d.protNome + "! Inventa una balla diversa." : AVVISO_VERA; }

  // i numeri della partita di ogni giocatore (per i premi finali e i contatori)
  function nuoviTot() { return { trovate: 0, ingannati: 0, cascato: 0, perfette: 0, risate: 0, ori: 0 }; }
  function sommaTot(tot, d) { tot.trovate += d.trovata; tot.ingannati += d.ingannati; tot.cascato += d.cascato; tot.perfette += d.perfetta; tot.risate = (tot.risate || 0) + (d.risate || 0); tot.ori = (tot.ori || 0) + (d.ori || 0); }

  function niente(t) {
    var s = t.schermata({ chiara: true, icona: "🤥", titolo: "Mancano le notizie", indietro: t.esci });
    s._contenuto.appendChild(t.el("p", { text: "Le notizie del gioco non sono state caricate." }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Ok", onclick: t.esci }));
    t.mostra(s);
  }

  // =========================================================
  //  NELLO STUDIO: un round
  // =========================================================
  function fac(el, g, faccia) { return el("span", { class: "fac", html: ST.avatarDi(g, faccia) }); }
  // la PRIMA PAGINA di un giornale, con la notizia come titolo e i pezzi mancanti in giallo; risposta = il testo da mettere
  // nei buchi (null = vuoti); grande = sul maxischermo (con le colonne del giornale sotto il titolo).
  // «Parliamo di te»: un foglietto giallo invece del giornale
  var GIORNI = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  var MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
  function oggi() { var d = new Date(); return GIORNI[d.getDay()] + " " + d.getDate() + " " + MESI[d.getMonth()] + " " + d.getFullYear(); }
  function titoloNotizia(el, domanda, risposta) {
    var parti = pezziN(domanda), nb = parti.length - 1, r = risposta == null ? [] : nb > 1 ? dueDi(risposta) : [vis(risposta)];
    var nodi = [];
    parti.forEach(function (tx, n) {
      if (n) {   // un buco (e lo spazio prima del testo che segue, tranne davanti alla punteggiatura)
        nodi.push(el("span", { class: "bc-buco" + (r[n - 1] ? " pieno" : ""), text: r[n - 1] || "" }));
        if (tx) nodi.push(document.createTextNode((/^[,.;:!?)»]/.test(tx) ? "" : " ") + tx + (n < parti.length - 1 ? " " : "")));
      } else if (tx) nodi.push(document.createTextNode(tx + " "));
    });
    return el("p", { class: "bc-notizia" }, nodi);
  }
  function ritaglio(el, st, risposta, grande) {
    var am = !!st.d.amici, fin = !!st.d.doppia;
    if (am) return el("div", { class: "bc-ritaglio" + (grande ? " grande" : "") + " amici" }, [
      el("div", { class: "bc-testata", text: "👥 Parliamo di " + (st.d.protNome || "te") + " · round " + (st.giro + 1) + " di " + st.giri }),
      titoloNotizia(el, st.d.domanda, risposta) ]);
    var cat = st.d.cat ? catDi(st.d.cat) : null;
    var colonne = grande ? el("div", { class: "bc-colonne" }, [0, 1, 2].map(function () { return el("div", {}, [0, 1, 2, 3, 4].map(function () { return el("i"); })); })) : null;
    return el("div", { class: "bc-ritaglio pagina" + (grande ? " grande" : "") + (fin ? " finale" : "") }, [
      el("div", { class: "bc-testata" }, [ el("div", { class: "bc-gn", text: "Il Colossale" }), grande ? el("div", { class: "bc-gs", text: "Quotidiano di notizie vere e incredibili" }) : null ]),
      el("div", { class: "bc-griga" }, [ el("span", { text: oggi() }), el("span", { text: "Round " + (st.giro + 1) + " di " + st.giri }), el("span", { text: "€ 1,50" }) ]),
      el("div", { class: "bc-occhio", text: fin ? "🔥 La Balla Finale · due pezzi" : (cat ? cat.ic + " " + cat.nome + " · " : "📰 ") + "Notizia vera" }),
      titoloNotizia(el, st.d.domanda, risposta), colonne ]);
  }
  // riempie i buchi di una notizia già disegnata (null = vuoti)
  function mettiNeiBuchi(nodo, testo) {
    var b = nodo.querySelectorAll(".bc-buco"), p = testo == null ? [] : b.length > 1 ? dueDi(testo) : [vis(testo)];
    [].forEach.call(b, function (x, n) { var t = p[n] || ""; if (x.textContent !== t) x.textContent = t; x.classList.toggle("pieno", !!t); });
  }

  async function round(st) {
    var S = st.S; if (!S.vivo()) return;
    st.d = st.domande[st.giro];
    if (st.d && st.d.daScegliere) {   // «🎯 Sceglie chi è ultimo»
      var dd = await scegliLocale(st); if (!S.vivo()) return;
      st.d = st.domande[st.giro] = dd || scegliDomande(1)[0];
    }
    st.balle = st.g.map(function () { return ""; });
    st.voti = st.g.map(function () { return null; });
    st.fatti = st.g.map(function () { return false; });
    ST.tutteNormali(S);
    st.g.forEach(function (g, i) { ST.puntiLeggio(S, i, P(g.punti), P(0)); });
    // la notizia sul maxischermo, da leggere ad alta voce
    ST.viaBarra(S); ST.accendiSolo(S, -1);
    await ST.suSchermo(S, 800);
    schermoTurno(st, null, "scrive");
    ST.FX.rullo(1);
    await ST.dorme(1100);
    ST.pubblico(S, "piano");
    if (st.d.amici) await annunciaAmici(S, st.d.prot, st.d.protNome);
    if (moltiplica(st.giro, st.giri) > 1) await annunciaDoppio(S, st.d.doppia);
    await ST.aspettaTasto(S, st.d.amici ? "Letta! Prima " + st.d.protNome + " ✍️" : "Letta! Ora le balle ✍️");
    // «Parliamo di te»: scrive per primo il protagonista (la verità), così le balle uguali alla verità si scoprono subito
    var ordine = st.g.map(function (_, i) { return i; });
    if (st.d.amici) ordine = [st.d.prot].concat(ordine.filter(function (i) { return i !== st.d.prot; }));
    for (var q = 0; q < ordine.length; q++) {
      if (!S.vivo()) return;
      await turnoScrittura(st, ordine[q]);
    }
    if (!S.vivo()) return;
    st.scelte = preparaScelte(st.d.rispostaVera, st.balle, st.d.balleCasa, st.d.doppia);
    st.risate = st.scelte.map(function () { return 0; });
    // sullo stesso telefono i 😂 si contano a tocchi: al massimo uno per ogni amico che non l'ha scritta
    st.rideFn = function (k) { var sc = st.scelte[k]; if ((st.risate[k] || 0) >= st.g.length - (sc.autori || []).length) return false; st.risate[k]++; return true; };
    await presentaRisposte(st);
    if (!S.vivo()) return;
    await ST.aspettaTasto(S, "Si vota! 🗳️");
    st.fatti = st.g.map(function () { return false; });
    for (var i = 0; i < st.g.length; i++) {
      if (!S.vivo()) return;
      if (eProt(st, i)) continue;   // il protagonista la verità la sa: non vota
      await turnoVoto(st, i);
    }
    if (!S.vivo()) return;
    await rivelazione(st);
    if (!S.vivo()) return;
    if (st.ride) {
      var oro = calcolaOro(st.scelte, st.risate);
      if (oro) await schermoOro(st, oro);
      if (!S.vivo()) return;
    }
    await punteggi(st);
  }

  // «Parliamo di te»: lo studio annuncia di chi si parla
  async function annunciaAmici(S, i, nome) {
    ST.terzo(S, i, "👥 Parliamo di " + nome + "!", nome + " scrive la verità, gli altri le balle", "👥");
    ST.pubblico(S, "applauso");
    if (i != null && i >= 0) ST.faccia(S, i, "esulta");
    await ST.dorme(2600); ST.viaTerzo(S);
    if (i != null && i >= 0) ST.faccia(S, i, null);
  }

  // l'ultimo round: punti doppi; la Balla Finale (due pezzi mancanti) punti tripli (lo annuncia lo studio)
  async function annunciaDoppio(S, finale) {
    if (finale) ST.terzo(S, null, "🔥 La Balla Finale!", "Due pezzi mancanti, punti tripli: +600 per la verità, +300 per ogni amico ingannato", "🔥");
    else ST.terzo(S, null, "🔥 Ultimo round!", "Punti doppi: +400 per la verità, +200 per ogni amico ingannato", "🔥");
    ST.pubblico(S, finale ? "ovazione" : "applauso");
    await ST.dorme(finale ? 3200 : 2600); ST.viaTerzo(S);
  }

  // ---- «🎯 Sceglie chi è ultimo»: sul maxischermo i tre argomenti; chi sceglie li tocca (onScegli = null: si guardano soltanto) ----
  // c = { opz: [3 argomenti], perche }; io = online, sono io che scelgo
  function schermoCategoria(st, i, c, onScegli, io) {
    var S = st.S, el = st.t.el, g = st.g[i] || { nome: "?" };
    ST.fermaTimer(S); ST.vuota(S.sch);
    var perche = { zero: "Siete tutti a zero: comincia " + (io ? "tu" : g.nome), pari: "Siete pari in fondo: tocca a " + (io ? "te" : g.nome),
      ultimo: io ? "Sei ultimo in classifica: rifatti!" : g.nome + " è ultimo in classifica" }[c.perche] || "";
    var carte = (c.opz || []).map(function (k, n) {
      var cat = catDi(k), b = el("button", { class: "bc-cat-c", type: "button" }, [ el("span", { class: "ic", text: cat.ic }), el("span", { class: "nm", text: cat.nome }) ]);
      if (onScegli) b.addEventListener("click", function () {
        if (b.disabled) return;
        carte.forEach(function (x) { x.disabled = true; }); b.classList.add("toccata");
        try { if (navigator.vibrate) navigator.vibrate(12); } catch (e) {}
        onScegli(n);
      });
      else b.disabled = true;
      return b;
    });
    var box = el("div", { class: "bc-sch bc-catsch" }, [
      el("div", { class: "bc-giro", text: "Round " + (st.giro + 1) + " di " + st.giri }),
      el("div", { class: "bc-chi-sch bc-chi-cat" }, [ i >= 0 ? fac(el, g, "pensa") : null, el("span", { text: io ? "🎯 Scegli tu l'argomento!" : "🎯 " + g.nome + " sceglie l'argomento" }) ]),
      el("div", { class: "bc-perche", text: perche }),
      el("div", { class: "bc-cats" }, carte) ]);
    S.sch.appendChild(box); staSopraBarra(S, box, 1, "centro");
    return carte;
  }
  function segnaCategoria(carte, k) { (carte || []).forEach(function (b, n) { b.disabled = true; b.classList.toggle("scelta", n === k); b.classList.toggle("spenta", n !== k); }); }
  // sullo stesso telefono: chi è ultimo tocca uno dei tre argomenti (il telefono ce l'hanno tutti davanti), poi la notizia
  async function scegliLocale(st) {
    var S = st.S, vivi = st.g.filter(function (g) { return !g.via; }), ch = chiSceglie(vivi), i = st.g.indexOf(ch.g);
    ch.g.nScelte = (ch.g.nScelte || 0) + 1;
    var c = { opz: treCategorie(), perche: ch.perche };
    if (!c.opz.length) return null;
    ST.viaBarra(S); ST.viaTerzo(S); ST.tutteNormali(S); ST.accendiSolo(S, i);
    await ST.suSchermo(S, 800);
    if (!S.vivo()) return null;
    ST.faccia(S, i, "pensa"); ST.pubblico(S, "piano");
    var carte = null, k = await new Promise(function (fine) { carte = schermoCategoria(st, i, c, fine); });
    segnaCategoria(carte, k); ST.faccia(S, i, "esulta"); tic(880);
    await ST.dorme(1100); ST.faccia(S, i, null);
    return notiziaDi(c.opz[k]);
  }

  // il maxischermo tra un turno e l'altro: la notizia (o, quando si vota, il tabellone) e chi ha già finito
  function schermoTurno(st, i, cosa) {
    var S = st.S, el = st.t.el;
    var fatti = el("div", { class: "bc-fatti" }); st.boxFatti = fatti;
    st.g.forEach(function (g, k) {
      if (g.via || (cosa === "vota" && eProt(st, k))) return;   // (chi è uscito; e il protagonista, che non vota)
      fatti.appendChild(el("span", { class: st.fatti[k] ? "ok" : "" }, [ fac(el, g), el("span", { text: (st.fatti[k] ? "✅ " : "") + g.nome }) ]));
    });
    var chi = i == null ? (cosa === "scrive" ? (st.d.amici ? "✍️ " + st.d.protNome + " scrive la verità, voi una balla!" : "✍️ Inventate una balla per completarla!") : "🗳️ Qual è la risposta vera?")
      : (cosa === "scrive" ? (eProt(st, i) ? "🤫 Scrive la verità " : "✍️ Scrive ") : "🗳️ Vota ") + st.g[i].nome;
    if (cosa === "vota") return tabellone(st, { sotto: [ el("div", { class: "bc-chi-sch", text: chi }), fatti ] });
    ST.fermaTimer(S); ST.vuota(S.sch);
    var box = el("div", { class: "bc-sch" }, [ ritaglio(el, st, null, true), el("div", { class: "bc-chi-sch", text: chi }), fatti ]);
    S.sch.appendChild(box);
    stringiPagina(box);
    if (window.ResizeObserver) new ResizeObserver(function () { if (box.isConnected) stringiPagina(box); }).observe(box);
    try { document.fonts.ready.then(function () { if (box.isConnected) stringiPagina(box); }); } catch (e) {}
  }
  // la prima pagina sul maxischermo: con le notizie lunghe (o lo schermo basso) prima vanno via le colonne, poi il titolo si stringe
  function stringiPagina(box) {
    var pg = box.querySelector(".bc-ritaglio.grande"); if (!pg) return;
    // 📰 (20 nov 2026) la notizia grande quanto lo spazio permette (prima restava piccola in mezzo a tanto vuoto)
    var fs = Math.round(Math.max(pg.classList.contains("amici") ? 23 : 26, Math.min(40, (box.clientHeight || 0) / 17))), cs = getComputedStyle(box);
    var troppo = function () {
      var k = [].filter.call(box.children, function (c) { return c.offsetHeight > 0; }); if (!k.length || !box.clientHeight) return false;
      var ul = k[k.length - 1], alto = ul.offsetTop + ul.offsetHeight - k[0].offsetTop + (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
      return alto > box.clientHeight + 1;
    };
    pg.classList.remove("bassa"); pg.style.setProperty("--ft", fs + "px");
    if (troppo()) pg.classList.add("bassa");
    while (troppo() && fs > 15) { fs--; pg.style.setProperty("--ft", fs + "px"); }
  }

  // ---- il TABELLONE sul maxischermo: tutte le risposte numerate, balle e verità mescolate ----
  // o.entra = le righe compaiono una alla volta (le gira chi chiama); o.voti = accanto a ogni risposta chi l'ha votata; o.sotto = nodi sotto
  function tabellone(st, o) {
    var S = st.S, el = st.t.el; o = o || {};
    ST.fermaTimer(S); ST.vuota(S.sch);
    var righe = st.scelte.map(function (sc, k) {
      var r = el("div", { class: "bc-riga" + (o.entra ? " giu" : "") }, [ el("span", { class: "n", text: String(k + 1) }), el("span", { class: "tx", text: vis(sc.testo) }) ]);
      r._voti = el("span", { class: "vv" }); r.appendChild(r._voti);
      if (o.voti) chiHaVotato(st, k).forEach(function (v) { r._voti.appendChild(fac(el, st.g[v])); });
      return r;
    });
    var box = el("div", { class: "bc-sch tab" }, [ ritaglio(el, st, null, false), o.titolo ? el("div", { class: "bc-chi-sch", text: o.titolo }) : null, el("div", { class: "bc-tab" }, righe) ].concat(o.sotto || []));
    S.sch.appendChild(box);
    // tante risposte su un telefono piccolo: le scritte si stringono quanto basta per starci tutte
    // (si tiene già il posto per il tasto in basso, che compare quasi sempre col tabellone)
    stringiTab(box, S.vista.classList.contains("con-barra") ? 0 : 94);
    if (window.ResizeObserver) new ResizeObserver(function () { if (box.isConnected) stringiTab(box, 0); }).observe(box);
    [350, 1000, 2200].forEach(function (ms) { setTimeout(function () { if (box.isConnected) stringiTab(box, 0); }, ms); });
    return righe;
  }
  function stringiTab(box, riserva) {
    var fs = 18, cs = getComputedStyle(box);
    box.classList.remove("soloFacce", "minimo", "corto"); box.style.setProperty("--fs", fs + "px");
    // lo spazio vero: fin sopra la barra in basso (o sopra «👀 Guardi»), misurata dov'è davvero; prima si contava il posto tenuto
    // da parte per la barra, più alto della barra stessa: a chi non vota restavano scritte piccole e spazio vuoto sotto (B)
    var spazio = box.clientHeight - riserva;
    if (box.isConnected) {
      var b = document.querySelector(".st-barra.on"), gu = document.querySelector(".sg-guardo"), rb = box.getBoundingClientRect(), lim = null;
      if (b) lim = b.getBoundingClientRect().top - 6;
      if (gu && gu.offsetHeight) lim = Math.min(lim == null ? Infinity : lim, gu.getBoundingClientRect().top - 6);
      if (lim != null && rb.height) spazio = lim - rb.top;
    }
    var troppo = function () {   // quanto è alto il contenuto (dal primo all'ultimo pezzo visibile) rispetto allo spazio
      var k = [].filter.call(box.children, function (c) { return c.offsetHeight > 0; }); if (!k.length || !box.clientHeight) return false;
      var ul = k[k.length - 1], alto = ul.offsetTop + ul.offsetHeight - k[0].offsetTop + (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
      return alto > spazio + 1;
    };
    while (troppo() && fs > 12) { fs--; box.style.setProperty("--fs", fs + "px"); }
    if (troppo()) box.classList.add("soloFacce");   // ancora troppo: chi ha finito si vede solo dall'avatar
    if (troppo()) box.classList.add("minimo");      // e le righe più fitte
    if (troppo()) box.classList.add("corto");       // e solo alla fine via la notizia (prima andava via subito: in 6 sul telefono piccolo la domanda spariva)
  }
  function tic(freq) {
    var c = SG.audioCtx && SG.audioCtx(); if (!c) return;
    try { var o = c.createOscillator(), g = c.createGain(), n = c.currentTime; o.type = "square"; o.frequency.setValueAtTime(freq, n);
      g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(0.08, n + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, n + 0.06);
      o.connect(g); g.connect(c.destination); o.start(n); o.stop(n + 0.07); } catch (e) {}
  }
  // finite le balle: sul tabellone compaiono le risposte, una alla volta, col rumore delle palette che girano
  async function presentaRisposte(st) {
    var S = st.S;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.largo(S, 800);
    ST.terzo(S, null, "Le balle sono pronte!", "Ecco le risposte…", "🤥");
    ST.pubblico(S, "applauso");
    await ST.dorme(1500); ST.viaTerzo(S);
    await ST.suSchermo(S, 800);
    var titolo = st.t.el("div", { class: "bc-chi-sch", text: "📋 Ecco le risposte!" });
    var righe = tabellone(st, { entra: true, sotto: [ titolo ] });
    for (var k = 0; k < righe.length; k++) {
      await ST.dorme(k ? 650 : 400);
      if (!S.vivo()) return;
      righe[k].classList.remove("giu"); tic(520 + k * 40);
    }
    await ST.dorme(600);
    titolo.textContent = "🤫 Una sola è vera… quale?"; titolo.classList.add("pulsa");
    ST.FX.rullo(1.2);
    await ST.dorme(1300);
  }
  // i voti sul tabellone: accanto a ogni risposta compaiono gli avatar di chi l'ha votata
  async function mostraVoti(st) {
    var S = st.S, el = st.t.el;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 800);
    var titolo = el("div", { class: "bc-chi-sch", text: "🗳️ Ecco i voti!" });
    var righe = tabellone(st, { sotto: [ titolo ] });
    for (var k = 0; k < righe.length; k++) {
      var chi = chiHaVotato(st, k);
      for (var q = 0; q < chi.length; q++) {
        await ST.dorme(300);
        if (!S.vivo()) return;
        righe[k]._voti.appendChild(fac(el, st.g[chi[q]])); tic(700 + q * 60);
      }
    }
    await ST.dorme(700);
    titolo.textContent = "🔍 E adesso… la verità!"; titolo.classList.add("pulsa");
    ST.pubblico(S, "piano");
    await ST.dorme(900);
  }

  async function turnoScrittura(st, i) {
    var S = st.S, g = st.g[i];
    schermoTurno(st, i, "scrive");
    await ST.stacco(S, i, "Passa il telefono a " + g.nome);
    await ST.aspettaTasto(S, "📱 Sono " + g.nome + ", tocca a me ▶");
    if (!S.vivo()) return;
    ST.accendiSolo(S, i); ST.testoLeggio(S, i, eProt(st, i) ? "🤫 la verità" : "✍️ scrive");
    await ST.suLeggio(S, i, 400);
    ST.lampo(S);
    if (eProt(st, i)) { st.d.rispostaVera = await apriBiglietto(st, i, { vero: true }); st.balle[i] = ""; }   // la verità, non una balla
    else st.balle[i] = await apriBiglietto(st, i);
    if (!S.vivo()) return;
    st.fatti[i] = true;
    ST.testoLeggio(S, i, "✅ fatto"); ST.faccia(S, i, "esulta");
    schermoTurno(st, i, "scrive");
    await ST.dorme(650);
    ST.faccia(S, i, null);
  }

  async function turnoVoto(st, i) {
    var S = st.S, g = st.g[i];
    schermoTurno(st, i, "vota");
    await ST.stacco(S, i, "Passa il telefono a " + g.nome);
    await ST.aspettaTasto(S, "📱 Sono " + g.nome + ", tocca a me ▶");
    if (!S.vivo()) return;
    ST.accendiSolo(S, i); ST.testoLeggio(S, i, "🗳️ vota");
    await ST.suLeggio(S, i, 400);
    ST.lampo(S);
    st.voti[i] = await apriVoto(st, i);
    if (!S.vivo()) return;
    st.fatti[i] = true;
    ST.testoLeggio(S, i, "✅ votato"); ST.faccia(S, i, "pensa");
    schermoTurno(st, i, "vota");
    await ST.dorme(650);
    ST.faccia(S, i, null);
  }

  // ---- il foglio segreto, sopra lo studio (si chiude da solo: niente resta a vista quando si passa il telefono) ----
  // ms = il tempo (online): una barra che si accorcia; S._chiudiVelo lo chiude da fuori (il tempo è finito per tutti)
  function apriVelo(S, el, nodi, cls, ms) {
    var velo = el("div", { class: "bc-velo" }), carta = el("div", { class: "bc-carta" + (cls ? " " + cls : "") }, nodi);
    var toPoco = null, toSec = null;
    if (ms) {
      // la barra del tempo e, accanto, i secondi che mancano (negli ultimi 5 un tic per secondo)
      var barraT = el("i"), tempo = el("div", { class: "bc-tempo" }, [barraT]), sec = el("b", { class: "bc-sec" });
      carta.insertBefore(el("div", { class: "bc-tempo-riga" }, [tempo, sec]), carta.firstChild);
      var parti = function () { if (barraT._via) return; barraT._via = 1; barraT.style.transition = "transform " + ms + "ms linear"; barraT.style.transform = "scaleX(0)"; };
      requestAnimationFrame(function () { requestAnimationFrame(parti); }); setTimeout(parti, 120);
      toPoco = setTimeout(function () { tempo.classList.add("poco"); sec.classList.add("poco"); }, Math.max(0, ms - 10000));
      var fineT = Date.now() + ms, ultimo = -1;
      var segna = function () {
        // il foglio non c'è più (es. nella Sala l'host è sparito e il core ha portato tutti fuori): il tempo si ferma, niente tic
        if (ultimo >= 0 && !document.body.contains(velo)) { clearTimeout(toPoco); clearInterval(toSec); return; }
        var s = Math.max(0, Math.ceil((fineT - Date.now()) / 1000)); if (s === ultimo) return;
        ultimo = s; sec.textContent = s;
        if (s > 0 && s <= 5) tic(980);
      };
      segna(); toSec = setInterval(segna, 250);
    }
    velo.appendChild(carta); S.vista.appendChild(velo);
    S.rec.classList.remove("on");
    requestAnimationFrame(function () { velo.classList.add("on"); });
    setTimeout(function () { velo.classList.add("on"); }, 90);
    return { velo: velo, carta: carta, chiudi: function (poi) {
      clearTimeout(toPoco); clearInterval(toSec); S._chiudiVelo = null;
      try { if (document.activeElement) document.activeElement.blur(); } catch (e) {}
      velo.classList.add("via");
      setTimeout(function () { velo.classList.remove("on"); setTimeout(function () { if (velo.parentNode) velo.parentNode.removeChild(velo); poi(); }, 260); }, 300);
    } };
  }
  // tante risposte lunghe su un telefono piccolo: le scritte si stringono quanto basta per stare tutte nello schermo, senza scorrere
  // (per gradi: scritte più piccole, notizia più piccola, risposte su due colonne, notizia nascosta: è già sul maxischermo)
  // lungo = la risposta più lunga: si misura con quella già dentro la notizia (quando si tocca una risposta la notizia si allunga)
  function adatta(v, tante, notizia, lungo) {
    var cs = getComputedStyle(v.velo), pad = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    var buchi = notizia ? [].slice.call(notizia.querySelectorAll(".bc-buco")) : [];
    var prima = buchi.map(function (b) { return [b.textContent, b.classList.contains("pieno")]; });
    if (buchi.length && lungo) mettiNeiBuchi(notizia, lungo);
    var troppo = function () { return v.carta.offsetHeight > v.velo.clientHeight - pad; }, fs = 16;
    var stringi = function () { fs = 16; v.carta.style.setProperty("--fs", fs + "px"); while (troppo() && fs > 12) { fs--; v.carta.style.setProperty("--fs", fs + "px"); } };
    (function () {
      if (!tante && v.carta.querySelector(".bc-scelta")) {
        var g = 22; v.carta.classList.add("larga"); v.carta.style.setProperty("--fsg", g + "px");
        while (!troppo() && g < 30) { g++; v.carta.style.setProperty("--fsg", g + "px"); }
        if (troppo() && g > 22) { g--; v.carta.style.setProperty("--fsg", g + "px"); }
        if (troppo()) v.carta.classList.remove("larga"); else return;
      }
      stringi(); if (!troppo()) return;
      v.carta.classList.add("piccola"); stringi(); if (!troppo()) return;
      if (tante) { v.carta.classList.add("due"); stringi(); if (!troppo()) return; }
      if (window.SGStudio && SGStudio.piatto) {   // (senza studio: notizia piccola, scritte fino a 11 px, mai la notizia nascosta)
        v.carta.classList.add("mini"); fs = 12; v.carta.style.setProperty("--fs", fs + "px");
        while (troppo() && fs > 11) { fs -= 0.5; v.carta.style.setProperty("--fs", fs + "px"); }
        return;
      }
      v.carta.classList.add("senza"); stringi();   // senza la notizia c'è più posto: le scritte tornano grandi quanto si può
    })();
    if (buchi.length && lungo) buchi.forEach(function (b, n) { b.textContent = prima[n][0]; b.classList.toggle("pieno", prima[n][1]); });
  }
  function testaSegreta(el, g) { return el("div", { class: "bc-chi" }, [ fac(el, g), el("b", { text: g.nome }), el("small", { text: "🤫 guarda solo tu" }) ]); }
  var AVVISO_VERA = "😱 Troppo vicina alla risposta vera! Inventa una balla diversa.";

  // scrivere la balla: la notizia col buco, la penna, "Fatto". Restituisce la balla (o "" se il tempo finisce col foglio vuoto).
  // o.ms = il tempo (online); o.avviso = un avviso subito; o.verita = false quando la verità la sa solo l'host (online);
  // o.vero = «Parliamo di te»: il protagonista scrive la VERITÀ su di sé (niente controllo)
  function apriBiglietto(st, i, o) {
    var S = st.S, el = st.t.el, g = st.g[i]; o = o || {};
    return new Promise(function (fine) {
      var chiuso = false, toFine = null, doppia = !!st.d.doppia;   // (la Balla Finale: due campi, uno per pezzo)
      var campi = (doppia ? [1, 2] : [0]).map(function (n) {
        return el("textarea", { class: "bc-penna", maxlength: String(MAX_BALLA), rows: doppia ? "1" : "2", autocomplete: "off", autocapitalize: "none", spellcheck: "true",
          enterkeyhint: n === 1 ? "next" : "done", placeholder: o.vero ? "scrivi qui la verità…" : n === 1 ? "il primo pezzo…" : n === 2 ? "il secondo pezzo…" : "scrivi qui la tua balla…" });
      });
      // ✍️ (20 nov 2026, il proprietario: «così tutti sanno dall'inizio che hanno 50 lettere») il conto delle lettere che restano,
      // da subito: «50 lettere», poi «ancora 49 lettere»… e a zero «niente più lettere»; verso la fine si colora
      var inp = campi[0], conte = campi.map(function () { return el("div", { class: "bc-conta", text: MAX_BALLA + " lettere" }); });
      function scriviConto(c, n) {
        var resta = Math.max(0, MAX_BALLA - c.value.length);
        var tx = !c.value.length ? MAX_BALLA + " lettere" : resta > 1 ? "ancora " + resta + " lettere" : resta === 1 ? "ancora 1 lettera" : "niente più lettere";
        if (conte[n].textContent !== tx) conte[n].textContent = tx;
        conte[n].classList.toggle("on", resta <= 10); conte[n].classList.toggle("poche", resta <= 3);
      }
      var avviso = el("div", { class: "bc-avviso" });
      var ok = el("button", { class: "btn btn-primario bc-ok", text: o.ms ? "✅ Fatto!" : "✅ Fatto, nascondi", disabled: "disabled" });
      var anteprima = ritaglio(el, st, null, false), buchi = anteprima.querySelectorAll(".bc-buco");
      function valore() { var p = campi.map(function (c) { return pulisci(c.value); }); return doppia ? (p[0] && p[1] ? p[0] + SEP + p[1] : "") : p[0]; }
      function aggiorna() {
        campi.forEach(function (c, n) {
          var v = pulisci(c.value), b = buchi[n];
          scriviConto(c, n);
          if (b) { b.textContent = v; b.classList.toggle("pieno", !!v); }   // la balla si vede già dentro la notizia
        });
        ok.disabled = !valore();
        avviso.classList.remove("on");
        grandeNotizia();
      }
      function chiudi(v) {
        if (chiuso) return; chiuso = true; ok.disabled = true; clearTimeout(toFine);
        if (vv) vv.removeEventListener("resize", tastiera);
        window.removeEventListener("sg-tastiera", tastiera); window.removeEventListener("resize", tastiera);
        v0.chiudi(function () { fine(v); });
      }
      // ⌨️ con la tastiera aperta (12 nov 2026, serata in 8: «il giornale diventa piccolissimo»): lo dice il core (html.tastiera);
      // la notizia prende TUTTO il posto sopra il campo e si scrive grande quanto ci sta; il campo e «Fatto» stanno in una riga sotto
      var vv = window.visualViewport;
      function tastiera() {
        if (chiuso) return;
        var su = document.documentElement.classList.contains("tastiera") || (window.innerHeight || 999) < 470;   // (20 nov 2026: anche i telefoni bassi)
        v0.carta.classList.toggle("tastiera", su); v0.velo.classList.toggle("tastiera", su);
        ok.textContent = su ? "✅ Fatto" : o.ms ? "✅ Fatto!" : "✅ Fatto, nascondi";
        grandeNotizia();
      }
      function grandeNotizia() {   // la scritta più grande con cui la notizia (con la balla dentro) sta tutta nel suo riquadro
        var n = anteprima.querySelector(".bc-notizia"); if (!n || !v0) return;
        if (!v0.carta.classList.contains("tastiera")) { n.style.fontSize = ""; return; }
        var lo = 14, hi = 40;
        while (hi - lo > 1) { var m = (lo + hi) >> 1; n.style.fontSize = m + "px"; if (anteprima.scrollHeight > anteprima.clientHeight + 1) hi = m; else lo = m; }
        n.style.fontSize = lo + "px";
      }
      function finito() {
        if (chiuso) return;
        var v = valore();
        if (!v) { var vuoto = campi.filter(function (c) { return !pulisci(c.value); })[0]; if (vuoto) try { vuoto.focus({ preventScroll: true }); } catch (e) {} return; }
        if (!o.vero && o.verita !== false && st.d.rispostaVera && eLaVeritaR(v, st.d.rispostaVera, doppia)) {   // ha scritto proprio la verità: deve inventare un'altra cosa
          avviso.textContent = avvisoVera(st); campi.forEach(function (c) { c.value = ""; }); aggiorna(); avviso.classList.add("on");
          try { inp.focus({ preventScroll: true }); } catch (e) {}
          return;
        }
        try { if (navigator.vibrate) navigator.vibrate(12); } catch (e) {}
        chiudi(v);
      }
      campi.forEach(function (c, n) {
        c.addEventListener("input", aggiorna);
        c.addEventListener("keydown", function (e) {   // a capo: dal primo pezzo si passa al secondo
          if (e.key !== "Enter") return; e.preventDefault();
          if (doppia && n === 0 && !pulisci(campi[1].value)) { try { campi[1].focus({ preventScroll: true }); } catch (x) {} } else finito();
        });
      });
      ok.addEventListener("click", finito);
      var scrivi = el("label", { class: "bc-scrivi" + (o.vero ? " vero" : "") + (doppia ? " doppia" : "") }, [
        el("span", { class: "bc-et", text: o.vero ? "🤫 Scrivi la VERITÀ: gli altri dovranno trovarla!" : doppia ? "✍️ La tua balla: inventa tutti e due i pezzi!" : "✍️ La tua balla: deve sembrare vera!" }) ]);
      campi.forEach(function (c, n) {
        if (doppia) scrivi.appendChild(el("div", { class: "bc-pezzo" }, [ el("span", { class: "nn", text: String(n + 1) }), el("div", { class: "cc" }, [ c, conte[n] ]) ]));
        else { scrivi.appendChild(c); scrivi.appendChild(conte[n]); }
      });
      var v0 = apriVelo(S, el, [ testaSegreta(el, g), anteprima, scrivi, avviso, ok ], doppia ? "doppia" : "", o.ms);
      if (o.avviso) { avviso.textContent = o.avviso; avviso.classList.add("on"); }
      if (vv) vv.addEventListener("resize", tastiera);
      window.addEventListener("sg-tastiera", tastiera); window.addEventListener("resize", tastiera); tastiera();
      S._chiudiVelo = function () { chiudi(valore()); };   // il tempo è finito: vale quello che c'è scritto (nella Balla Finale, se ci sono tutti e due i pezzi)
      S._veloFase = "scrittura";
      if (o.ms) toFine = setTimeout(S._chiudiVelo, o.ms);
      setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (e) {} }, 650);
    });
  }

  // votare: tutte le risposte, la propria balla non si può scegliere. Restituisce la scelta (o null se il tempo finisce).
  // o.mia(sc) = è la mia balla? (online la riconosco dal testo che ho scritto); o.ms = il tempo; o.avviso = un avviso subito
  function apriVoto(st, i, o) {
    var S = st.S, el = st.t.el, g = st.g[i]; o = o || {};
    var mia = o.mia || function (sc) { return (sc.autori || []).indexOf(i) >= 0; };
    return new Promise(function (fine) {
      var scelto = null, chiuso = false, bottoni = [], toFine = null;
      var ok = el("button", { class: "btn btn-primario bc-ok", text: "🗳️ Voto questa", disabled: "disabled" });
      var tante = st.scelte.length > 6;
      var lista = el("div", { class: "bc-scelte" + (tante ? " tante" : "") });
      var notizia = ritaglio(el, st, null, false);
      // la mia balla: grigia, con "✍️ la tua", non si tocca (online può arrivare dopo, se ho ricaricato la pagina)
      function segnaMia(b, sc) {
        if (!mia(sc) || b._mia) return;
        b._mia = true; b.disabled = true; b.classList.add("mia"); b.classList.remove("sel");
        b.appendChild(el("span", { class: "tag", text: "✍️ la tua" }));
        if (scelto === bottoni.indexOf(b)) { scelto = null; ok.disabled = true; anteprima(null); }
      }
      // la risposta toccata si legge già dentro la notizia
      function anteprima(testo) { mettiNeiBuchi(notizia, testo || null); }
      st.scelte.forEach(function (sc, k) {
        var b = el("button", { class: "bc-scelta" }, [ el("span", { class: "n", text: String(k + 1) }), el("span", { class: "tx", text: vis(sc.testo) }) ]);
        b.addEventListener("click", function () {
          if (chiuso || b._mia) return;
          scelto = k; bottoni.forEach(function (x, kk) { x.classList.toggle("sel", kk === k); });
          ok.disabled = false; anteprima(sc.testo);
          try { if (navigator.vibrate) navigator.vibrate(8); } catch (e) {}
        });
        bottoni.push(b); lista.appendChild(b);
      });
      bottoni.forEach(function (b, k) { segnaMia(b, st.scelte[k]); });
      S._segnaMia = function () { var n = bottoni.filter(function (b) { return b._mia; }).length; bottoni.forEach(function (b, k) { segnaMia(b, st.scelte[k]); }); if (bottoni.filter(function (b) { return b._mia; }).length !== n) rifai(); };
      var lungo = st.scelte.reduce(function (a, sc) { return sc.testo.length > a.length ? sc.testo : a; }, "");
      function rifai() {
        if (!v0 || chiuso || !v0.carta.isConnected) return;
        ["larga", "piccola", "due", "mini", "senza"].forEach(function (c) { v0.carta.classList.remove(c); });
        v0.carta.style.removeProperty("--fs"); v0.carta.style.removeProperty("--fsg");
        adatta(v0, tante, notizia, lungo);
      }
      function chiudi(k) { if (chiuso) return; chiuso = true; clearTimeout(toFine); S._segnaMia = null; window.removeEventListener("resize", rifai); v0.chiudi(function () { fine(k); }); }
      ok.addEventListener("click", function () { if (scelto != null) chiudi(scelto); });
      var avviso = el("div", { class: "bc-avviso" + (o.avviso ? " on" : ""), text: o.avviso || "" });
      var v0 = apriVelo(S, el, [ testaSegreta(el, g), notizia, avviso,
        el("div", { class: "bc-et", text: "🔍 Qual è la risposta VERA?" }), lista, ok ], st.scelte.length > 5 ? "stretta" : "", o.ms);
      adatta(v0, tante, notizia, lungo);
      // (anche quando lo schermo cambia misura, es. la tastiera che si chiude appena si passa al voto)
      try { document.fonts.ready.then(rifai); } catch (e) {}
      window.addEventListener("resize", rifai); setTimeout(rifai, 400); setTimeout(rifai, 1200);
      S._chiudiVelo = function () { chiudi(null); };   // il tempo è finito: niente voto
      S._veloFase = "voto";
      if (o.ms) toFine = setTimeout(S._chiudiVelo, o.ms);
    });
  }

  // =========================================================
  //  LA RIVELAZIONE: prima le balle che hanno ingannato qualcuno (dalla meno votata), poi la verità
  // =========================================================
  async function rivelazione(st) {
    var S = st.S;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    st.conta = st.scelte.map(function () { return 0; });
    st.voti.forEach(function (v) { if (v != null) st.conta[v]++; });
    var ordine = st.scelte.map(function (_, k) { return k; })
      .filter(function (k) { return !st.scelte[k].vera && st.conta[k] > 0; })
      .sort(function (a, b) { return st.conta[a] - st.conta[b]; });
    var kVera = st.scelte.map(function (sc) { return sc.vera; }).indexOf(true);
    await mostraVoti(st);
    if (!S.vivo()) return;
    await ST.aspettaTasto(S, "Scopriamo la verità 🔍");
    // 🎬 (20 nov 2026, il proprietario) prima, in breve, le balle a cui non ha creduto nessuno; poi quelle che hanno ingannato
    // qualcuno, dalla meno votata alla più votata; la VERITÀ sempre per ultima
    var ignorate = st.scelte.map(function (_, k) { return k; }).filter(function (k) { return !st.scelte[k].vera && st.conta[k] === 0; });
    st.g.forEach(function (g, i) { ST.puntiLeggio(S, i, P(g.punti), 0); });
    if (ignorate.length && S.vivo()) await schermoIgnorate(st, ignorate);
    st.ordineRiv = ordine;
    for (var q = 0; q < ordine.length; q++) { if (!S.vivo()) return; await mostraScelta(st, ordine[q]); }
    if (!S.vivo()) return;
    await mostraScelta(st, kVera);
  }

  function chiHaVotato(st, k) { var l = []; st.voti.forEach(function (v, i) { if (v === k) l.push(i); }); return l; }
  function quanti(n) { return ["", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto"][n] || String(n); }
  function nomi(st, lista) { var n = lista.map(function (i) { return st.g[i].nome; }); return n.length < 2 ? n.join("") : n.slice(0, -1).join(", ") + " e " + n[n.length - 1]; }

  // ✈️ i punti che volano dal palco al riquadro in alto di chi li prende (solo spettacolo: i numeri cambiano coi punti del round)
  function volaPunti(S, i, testo, da, delta) {
    var X = S.L && S.L[i]; if (!X || !X.el || !da || !da.getBoundingClientRect) return;
    var a = da.getBoundingClientRect(), b = X.el.getBoundingClientRect(); if (!a.width || !b.width) return;
    var v = document.createElement("div"); v.className = "bc-volapunti"; v.textContent = testo;
    v.style.left = Math.round(a.left + a.width / 2) + "px"; v.style.top = Math.round(a.top + a.height / 2) + "px";
    document.body.appendChild(v);
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      v.style.transform = "translate(" + Math.round(b.left + b.width / 2 - a.left - a.width / 2) + "px," + Math.round(b.top + b.height / 2 - a.top - a.height / 2) + "px) scale(.55)"; v.style.opacity = ".15"; }); });
    setTimeout(function () { if (v.parentNode) v.parentNode.removeChild(v); X.el.classList.remove("bc-preso"); void X.el.offsetWidth; X.el.classList.add("bc-preso");
      if (delta) ST.puntiLeggio(S, i, (X.valore || 0) + delta, delta); }, 900);   // (il riquadro conta i punti appena arrivano)
  }
  // 🎬 la rivelazione «A» (20 nov 2026, scelta dal proprietario): in alto la notizia (la verità alla fine si stampa dentro),
  // al centro il biglietto grande, sotto le faccine di chi ci è cascato (o di chi l'ha trovata), il timbro, chi l'ha scritta
  // coi punti che volano sul suo riquadro. Il palco riempie lo schermo.
  function mostraScelta(st, k, online) {
    var S = st.S, el = st.t.el, sc = st.scelte[k], votanti = chiHaVotato(st, k);
    return new Promise(async function (fine) {
      ST.fermaTimer(S); ST.vuota(S.sch);
      var gente = el("div", { class: "bc-gente" });
      var timbro = el("div", { class: "bc-timbro " + (sc.vera ? "vero" : "balla"), text: sc.vera ? "Vero!" : "Balla!" });
      // (con «Che balla!» il biglietto tiene un po' di spazio sotto per il tasto 😂: niente salti quando compare)
      var lt = vis(sc.testo).length;
      var biglietto = el("div", { class: "bc-big" + (sc.vera ? " vera" : "") + (!sc.vera && st.ride && st.rideFn ? " con-ride" : "") + (lt > 70 ? " lunghissima" : lt > 34 ? " lunga" : "") }, [ el("span", { class: "tx", text: vis(sc.testo) }), timbro ]);
      var sotto = el("div", { class: "bc-sotto" });
      var nB = (st.ordineRiv || []).length, iB = (st.ordineRiv || []).indexOf(k);
      var etichetta = sc.vera ? "…e la risposta vera era" : nB > 1 && iB >= 0 ? "Balla " + (iB + 1) + " di " + nB + (iB === nB - 1 ? " · la più votata" : "") : "La balla";
      var notizia = ritaglio(el, st, null, false);
      var titGente = el("div", { class: "bc-giro piccolo", text: votanti.length ? (sc.vera ? (st.d.amici ? "L'hanno capita" : "L'hanno trovata") : (votanti.length === 1 ? "Ci è cascato" : "Ci sono cascati")) : "" });
      var palco = el("div", { class: "bc-sch riv riv2" }, [
        el("div", { class: "bc-riv-testa" }, [ notizia ]),
        el("div", { class: "bc-giro", text: etichetta + " · " + (votanti.length ? (votanti.length === 1 ? "1 voto" : votanti.length + " voti") : "nessun voto") }),
        el("div", { class: "bc-riv-centro" }, [ biglietto ]),
        el("div", { class: "bc-riv-gente" }, [ titGente, gente ]), sotto ]);
      S.sch.appendChild(palco); staSopraBarra(S, palco, 1, null, true);
      // chi l'ha votata, uno alla volta
      for (var q = 0; q < votanti.length; q++) {
        await ST.dorme(q ? 380 : 650);
        var v = votanti[q];
        gente.appendChild(el("span", { class: "bc-votante grande" }, [ fac(el, st.g[v]), el("span", { text: st.g[v].nome }) ]));
      }
      if (!votanti.length) gente.appendChild(el("span", { class: "bc-nessuno", text: "Nessuno l'ha votata…" }));
      await ST.dorme(700);
      ST.FX.rullo(1.1);
      await ST.dorme(1250);
      if (!S.vivo()) return fine();
      timbro.classList.add("on");
      var m = moltiplica(st.giro, st.giri, st.d.doppia);
      // «😂 Che balla!»: appena il timbro dice «Balla!» si può ridere (non della propria)
      if (!sc.vera && st.ride && st.rideFn) biglietto.appendChild(bottoneRide(st, k, false));
      if (sc.vera) {
        var am = st.d.amici;
        // la risposta vera si stampa dentro la notizia, in alto
        mettiNeiBuchi(notizia, sc.testo); notizia.classList.add("stampata");
        if (votanti.length) {
          var pv = el("div", { class: "bc-premio si", text: "+" + fmtP(2 * m) + " punti a " + nomi(st, votanti) });
          sotto.appendChild(pv);
          votanti.forEach(function (v2, n2) { setTimeout(function () { volaPunti(S, v2, "+" + fmtP(2 * m), gente.children[n2] || pv, P(2 * m)); }, 350 + n2 * 120); });
          if (am) { var po = el("div", { class: "bc-premio si oro", text: "+" + fmtP(votanti.length * m) + " a " + st.d.protNome + ": " + (votanti.length === 1 ? "l'ha capita 1 amico" : "l'hanno capita in " + quanti(votanti.length)) });
            sotto.appendChild(po); if (st.d.prot >= 0) setTimeout(function () { volaPunti(S, st.d.prot, "+" + fmtP(votanti.length * m), po, P(votanti.length * m)); }, 600); }
          gente.querySelectorAll(".bc-votante").forEach(function (n) { n.classList.add("giusto"); });
          votanti.forEach(function (v) { ST.faccia(S, v, "evviva"); });
          ST.pubblico(S, "ovazione"); ST.coriandoli();
        } else {
          sotto.appendChild(el("div", { class: "bc-premio no", text: am ? "Nessuno conosce davvero " + st.d.protNome + "! 😱" : "Nessuno ha trovato la verità! 😱" }));
          ST.pubblico(S, "ohh");
        }
        if (am && st.d.prot >= 0) ST.faccia(S, st.d.prot, votanti.length ? "evviva" : "esploso");
      } else {
        gente.querySelectorAll(".bc-votante").forEach(function (n) { n.classList.add("cascato"); });
        votanti.forEach(function (v) { ST.faccia(S, v, "esploso"); });
        sc.autori.forEach(function (a) { ST.faccia(S, a, "esulta"); });
        if (sc.casa || !sc.autori.length) {   // una balla della redazione: nessuno prende punti
          sotto.appendChild(el("div", { class: "bc-autore" }, [ el("small", { text: "L'ha scritta" }),
            el("div", { class: "bc-redazione", text: "🗞️ la redazione" }) ]));
        } else {
          var guadagno = sc.autori.map(function (a) { return votanti.filter(function (v) { return v !== a; }).length * m; });
          var schede = sc.autori.map(function (a, n) { return el("div", { class: "bc-autore-sch" }, [ fac(el, st.g[a], "esulta"),
            el("div", { class: "tx" }, [ el("small", { text: sc.autori.length > 1 ? "L'hanno scritta in " + quanti(sc.autori.length) : "L'ha scritta" }), el("b", { text: st.g[a].nome }),
              el("span", { class: "pp", text: guadagno[n] ? "+" + fmtP(guadagno[n]) : "+0" }) ]) ]); });
          sotto.appendChild(el("div", { class: "bc-autore" }, schede));
          sc.autori.forEach(function (a, n) { if (guadagno[n]) setTimeout(function () { volaPunti(S, a, "+" + fmtP(guadagno[n]), schede[n], P(guadagno[n])); }, 450 + n * 150); });
        }
        ST.pubblico(S, "ohh");
      }
      await ST.dorme(900);
      if (!online) await ST.aspettaTasto(S, "Avanti ▶");
      fine();
    });
  }

  // le balle a cui non ha creduto nessuno (sul maxischermo, tutte insieme)
  async function schermoIgnorate(st, lista, online) {
    var S = st.S, el = st.t.el;
    ST.fermaTimer(S); ST.vuota(S.sch);
    var righe = el("div", { class: "bc-ignorate" }), ride = st.ride && st.rideFn;
    lista.forEach(function (k, n) {
      var sc = st.scelte[k], r = el("div", { class: "bc-ign" }, [ el("span", { class: "tx", text: vis(sc.testo) }), el("span", { class: "di", text: sc.autori.length ? nomi(st, sc.autori) : "🗞️ redazione" }),
        ride ? bottoneRide(st, k, true) : null ]);
      r.style.animationDelay = (n * 0.12) + "s"; righe.appendChild(r);
    });
    var box = el("div", { class: "bc-sch bc-ign-sch" }, [ el("div", { class: "bc-riv-testa" }, [ ritaglio(el, st, null, false) ]),
      el("div", { class: "bc-chi-sch", text: "🙄 Nessuno ci è cascato" }), righe,
      ride ? el("div", { class: "bc-giro", text: "😂 Fanno ridere? Toccate 😂" }) : null ]);
    S.sch.appendChild(box); staSopraBarra(S, box, 1);
    ST.pubblico(S, "piano");
    if (!online) await ST.aspettaTasto(S, "E adesso le balle che hanno ingannato ▶");
  }

  // ---- «😂 Che balla!»: il tasto delle risate su una balla ----
  // st.rideFn(k) = conta la risata (false = non si può: già fatto, o troppi tocchi); st.hoRiso(k) = online, l'ho già fatto;
  // st.miaBalla(sc) = online, l'ho scritta io (non si ride della propria). piccolo = nella lista delle balle ignorate
  function bottoneRide(st, k, piccolo) {
    var el = st.t.el, sc = st.scelte[k], mia = !!(st.miaBalla && st.miaBalla(sc));
    var b = el("button", { class: "bc-ride" + (piccolo ? " pic" : ""), type: "button", "aria-label": "Che balla!" }, [
      el("span", { class: "em", text: "😂" }), piccolo ? null : el("span", { class: "rt", text: mia ? "La tua" : "Che balla!" }), el("b", { class: "nn" }) ]);
    b._n = 0;
    if (mia) { b.disabled = true; b.classList.add("mia"); }   // (della propria balla non si ride)
    segnaRide(b, (st.risate && st.risate[k]) || 0, st.hoRiso && st.hoRiso(k), true);
    b.addEventListener("click", function () {
      if (b.disabled) return;
      if (!st.rideFn(k)) { b.classList.remove("no"); void b.offsetWidth; b.classList.add("no"); return; }
      try { if (navigator.vibrate) navigator.vibrate(10); } catch (e) {}
      risatina();
      segnaRide(b, st.risate[k], st.hoRiso && st.hoRiso(k));
    });
    if (st.rideBtn) st.rideBtn[k] = b;
    return b;
  }
  // il numero di 😂 (a ogni risata in più vola su una faccina); mio = l'ho già toccato io
  function segnaRide(b, n, mio, subito) {
    if (!subito) for (var q = b._n; q < Math.min(n, b._n + 4); q++) vola(b, q - b._n);
    b._n = n;
    var nn = b.querySelector(".nn"), tx = n ? String(n) : "";
    if (nn.textContent !== tx) nn.textContent = tx;
    b.classList.toggle("mio", !!mio);
  }
  function vola(b, q) {
    var f = document.createElement("span"); f.className = "bc-vola"; f.textContent = "😂";
    f.style.left = (25 + Math.random() * 50) + "%"; f.style.animationDelay = (q * 0.12) + "s";
    b.appendChild(f); setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 1500);
  }
  function risatina() {   // "ah-ah-ah": tre note che scendono
    var c = SG.audioCtx && SG.audioCtx(); if (!c) return;
    try { [880, 740, 622].forEach(function (f, i) { var o = c.createOscillator(), g = c.createGain(), n = c.currentTime + i * 0.09;
      o.type = "triangle"; o.frequency.setValueAtTime(f, n); g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(0.09, n + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, n + 0.08);
      o.connect(g); g.connect(c.destination); o.start(n); o.stop(n + 0.09); }); } catch (e) {}
  }

  // ---- la Balla d'oro del round: la balla con più 😂, sul maxischermo (+1 a chi l'ha scritta) ----
  async function schermoOro(st, oro, online) {
    var S = st.S, el = st.t.el; if (!oro || !S.vivo()) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S); ST.viaBarra(S);
    await ST.suSchermo(S, 700);
    ST.fermaTimer(S); ST.vuota(S.sch);
    var autori = [];
    oro.ks.forEach(function (k) { (st.scelte[k].autori || []).forEach(function (a) { if (autori.indexOf(a) < 0) autori.push(a); }); });
    var carte = oro.ks.slice(0, 2).map(function (k) { return el("div", { class: "bc-big oro" }, [ el("span", { class: "tx", text: vis(st.scelte[k].testo) }) ]); });
    S.sch.appendChild(el("div", { class: "bc-sch riv bc-oro" }, [
      el("div", { class: "bc-coppa", text: "🏆" }),
      el("div", { class: "bc-chi-sch", text: oro.ks.length > 1 ? "Balle d'oro del round!" : "Balla d'oro del round!" }) ].concat(carte, [
      el("div", { class: "bc-giro", text: "😂 × " + oro.n + (oro.ks.length > 1 ? " a testa" : "") }),
      el("div", { class: "bc-autori" }, autori.map(function (a) { return el("span", { class: "bc-votante autore" }, [ fac(el, st.g[a], "evviva"), el("span", { text: st.g[a].nome + " +100" }) ]); }))
    ])));
    autori.forEach(function (a) { ST.faccia(S, a, "evviva"); });
    ST.pubblico(S, "ovazione"); ST.coriandoli(); tic(1046);
    try { if (navigator.vibrate) navigator.vibrate([30, 40, 60]); } catch (e) {}
    if (!online) await ST.aspettaTasto(S, "Vediamo i punti ▶");
  }

  // i punti scorrono sui leggii, poi la classifica sul maxischermo (o il gran finale)
  async function punteggi(st) {
    var S = st.S, t = st.t, el = t.el;
    ST.viaBarra(S); ST.tutteNormali(S);
    await ST.largo(S, 900);
    st.esito = calcola(st.scelte, st.voti, st.g.length, moltiplica(st.giro, st.giri, st.d.doppia), null, st.d.amici ? st.d.prot : null, st.ride ? st.risate : null);
    for (var i = 0; i < st.g.length; i++) {
      var d = st.esito[i], piu = puntiDi(d);
      st.g[i].punti += piu; st.g[i].ultimo = piu; sommaTot(st.g[i].tot, d);
      ST.puntiLeggio(S, i, P(st.g[i].punti), S.L[i] && S.L[i].valore === P(st.g[i].punti) ? 0 : P(piu));   // (se i punti sono già arrivati volando, niente doppio «+»)
      ST.faccia(S, i, piu > 0 ? "esulta" : "triste");
      await ST.dorme(320);
    }
    ST.pubblico(S, "applauso");
    await ST.dorme(1200); ST.tutteNormali(S);
    var ordine = st.g.slice().sort(function (x, y) { return y.punti - x.punti; });
    var pos = function (g) { return 1 + st.g.filter(function (q) { return q.punti > g.punti; }).length; };   // a pari punti, stessa posizione
    if (st.giro + 1 >= st.giri) {
      await schermoPodio(S, el, st.g, false);
      if (!S.vivo()) return;
      var clas = ordine.map(function (g) { return { nome: g.nome, punti: P(g.punti), pos: pos(g) }; });
      salvaContatori(st.g.map(function (g) { return { nome: g.nome, pos: pos(g), punti: g.punti, tot: g.tot }; }), null, false);
      return t.fine(clas);
    }
    await ST.suSchermo(S, 800);
    ST.fermaTimer(S); ST.vuota(S.sch);
    var prossimoR = st.domande[st.giro + 1] || {}, ultimoR = moltiplica(st.giro + 1, st.giri) > 1;
    schermoClassifica(S, el, st.g.map(function (g) { return { g: g, nome: g.nome, punti: g.punti, ultimo: g.ultimo || 0 }; }),
      { giro: st.giro + 1, giri: st.giri, finale: ultimoR && !!prossimoR.doppia, doppio: ultimoR && !prossimoR.doppia });
    await ST.aspettaTasto(S, ultimoR ? "🔥 Avanti ▶" : "Prossima notizia ▶");
    st.giro += 1;
    round(st);
  }
  function medaglia(p) { return ["🥇", "🥈", "🥉"][p - 1] || p + "°"; }
  // 🏁 la classifica dopo ogni round (20 nov 2026, il proprietario): posizioni, chi sale e chi scende, quanto ha preso ognuno,
  // la frase del momento e, se tocca a lei, l'annuncio della Balla Finale a punti tripli. lista = [{ g (per la faccina), nome, punti, ultimo, tu }]
  function schermoClassifica(S, el, lista, o) {
    o = o || {};
    var pos = function (x, campo) { return 1 + lista.filter(function (q) { return q[campo] > x[campo]; }).length; };
    lista.forEach(function (x) { x.prima = x.punti - (x.ultimo || 0); });
    var ord = lista.slice().sort(function (a, b) { return b.punti - a.punti || a.prima - b.prima; });
    var max = Math.max(1, ord[0] ? ord[0].punti : 1), testa = ord[0], secondo = ord[1];
    var frase = "";
    if (testa && pos(testa, "prima") > 1 && testa.punti > (secondo ? secondo.punti : -1)) frase = "🔥 " + testa.nome + " passa in testa!";
    else if (testa && secondo && testa.punti === secondo.punti) frase = "⚖️ " + testa.nome + " e " + secondo.nome + " appaiati in testa!";
    else if (testa && secondo) frase = "👑 " + testa.nome + " in testa · " + secondo.nome + " a −" + fmtP(testa.punti - secondo.punti);
    var sale = ord.filter(function (x) { return pos(x, "prima") - pos(x, "punti") >= 2; })[0];
    if (sale && sale !== testa) frase += (frase ? " · " : "") + "🚀 " + sale.nome + " vola su!";
    var box = el("div", { class: "bc-clas bc-clas2" + (lista.length > 5 ? " tanti" : "") }, [
      el("div", { class: "bc-giro", text: "Dopo il round " + o.giro + " di " + o.giri }),
      el("h2", { text: "🏁 Classifica" }),
      frase ? el("div", { class: "bc-frase", text: frase }) : null ]);
    var tuttiZero = lista.every(function (q) { return !q.prima; });
    ord.forEach(function (x, k) {
      var p1 = pos(x, "punti"), p0 = pos(x, "prima"), d = tuttiZero ? 0 : p0 - p1;
      var r = el("div", { class: "bc-cl" + (p1 === 1 ? " primo" : "") }, [
        el("span", { class: "barra", style: "width:" + Math.round(100 * Math.max(0, x.punti) / max) + "%" }),
        el("span", { class: "pos", text: p1 + "°" }), fac(el, x.g || x), el("span", { class: "nm" }, [ el("b", { text: x.nome + (x.tu ? " (tu)" : "") }),
          el("small", { text: x.ultimo ? "+" + fmtP(x.ultimo) + " in questo round" : "niente in questo round" }) ]),
        d ? el("span", { class: d > 0 ? "su" : "giu", text: (d > 0 ? "↑" : "↓") + Math.abs(d) }) : null,
        el("span", { class: "pt", text: fmtP(x.punti) }) ]);
      r.style.animationDelay = (k * 0.08) + "s";
      box.appendChild(r);
    });
    if (o.finale) box.appendChild(el("div", { class: "bc-annuncio" }, [ el("b", { text: "🔥 Adesso la Balla Finale" }), el("small", { text: "due pezzi mancanti, punti tripli: può cambiare tutto!" }) ]));
    else if (o.doppio) box.appendChild(el("div", { class: "bc-annuncio" }, [ el("b", { text: "🔥 Ultimo round" }), el("small", { text: "punti doppi: può cambiare tutto!" }) ]));
    S.sch.appendChild(box);
    staSopraBarra(S, box, 1, "su");
    return box;
  }
  // 📏 (20 nov 2026) una schermata lunga (classifica in tanti, podio coi premi) si rimpicciolisce quel tanto che basta per stare
  // tutta sopra la barra dei tasti (prima in 6 sul telefono piccolo l'annuncio finiva sotto «⏩ Avanti»)
  // 💯 (20 nov 2026) coi punti ×100 in 4-5 «1.500» non stava nei riquadri in alto («1.5…»): il numero si stringe quanto basta
  function chipStretti(S) {
    if (!S || !S.puntiEl || S._chipObs || !window.MutationObserver) return;
    var metro = null;
    var fai = function () {
      (S.L || []).forEach(function (X) {
        var p = X.pt; if (!p || !p.isConnected) return;
        // C (20 nov 2026): le parole («✅ votato», «✍️ scrive») che non ci stanno diventano solo il simbolo (in 6: prima «vot…»)
        if (X.disp && X.disp.testo) {
          p.style.fontSize = ""; p.style.letterSpacing = "";
          var tx = X.disp.t, cs = getComputedStyle(p);
          if (!metro) { metro = document.createElement("span"); metro.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;pointer-events:none"; document.body.appendChild(metro); }
          metro.style.font = cs.font; metro.style.letterSpacing = cs.letterSpacing; metro.textContent = tx;
          var giusto = metro.getBoundingClientRect().width > p.getBoundingClientRect().width - 0.5 ? String(tx).split(" ")[0] : tx;
          if (p.textContent !== giusto) p.textContent = giusto;
          return;
        }
        // (si misura il testo vero, coi decimali: «1.500» sforava di meno di un pixel e compariva «1.5…»)
        var rg = document.createRange(), largo = function () { rg.selectNodeContents(p); return rg.getBoundingClientRect().width > p.getBoundingClientRect().width - 0.5; };
        p.style.fontSize = ""; p.style.letterSpacing = ""; if (!largo()) return;
        var f = parseFloat(getComputedStyle(p).fontSize) || 15;
        while (largo() && f > 9.5) { f -= 0.5; p.style.fontSize = f + "px"; if (f < 12) p.style.letterSpacing = "-.03em"; }   // (360 px in 4: «1.500» ci sta a 10 px un po' stretto)
      });
    };
    S._chipObs = new MutationObserver(fai); S._chipObs.observe(S.puntiEl, { subtree: true, characterData: true, childList: true });
    window.addEventListener("resize", fai); fai();
  }
  // (20 nov 2026, il proprietario: «non rendiamo le cose giganti per riempire») mai più grande della misura normale (max 1):
  // si stringe solo se serve per stare sopra la barra in basso (e sopra la targhetta «👀 Guardi» di chi guarda); lo spazio che
  // avanza si usa per SPOSTARE il contenuto: dove = "giu" (attaccato alla barra: la classifica subito sopra «Avanti»),
  // "centro" (nel mezzo tra i punteggi e la barra), niente = resta in alto. segui = si rifà quando cambia il contenuto.
  // dove = "su" (20 nov 2026, il proprietario: «in alto, subito sotto i punteggi, Avanti subito sotto, lo spazio vuoto in fondo»):
  // il contenuto resta in alto e la barra con «Avanti» sale fin subito sotto (torna giù appena la schermata cambia)
  function staSopraBarra(S, box, max, dove, segui) {
    max = max || 1;
    var pad0 = null, barra = S.barraEl;
    function libera() { if (barra && barra.style.top) { barra.style.top = ""; barra.style.bottom = ""; } }
    function limite() {
      var b = S.barraEl, v = S.vista || document.body;
      var lim = b && b.classList.contains("on") ? v.getBoundingClientRect().top + b.offsetTop : window.innerHeight;
      var gu = document.querySelector(".sg-guardo"); if (gu && gu.offsetHeight) lim = Math.min(lim, gu.getBoundingClientRect().top - 4);
      return lim;
    }
    function misura() {
      var su = Infinity, giu = -Infinity;
      [].forEach.call(box.children, function (c) { var q = c.getBoundingClientRect(); if (!q.height) return; if (q.top < su) su = q.top; if (q.bottom > giu) giu = q.bottom; });
      return su === Infinity ? null : { su: su, giu: giu };
    }
    function fai() {
      if (!box.isConnected) { window.removeEventListener("resize", fai); if (oss) oss.disconnect(); if (ossB) ossB.disconnect(); if (dove === "su") libera(); return; }
      if (dove === "su") libera();
      if (pad0 == null) { pad0 = parseFloat(getComputedStyle(box).paddingTop) || 0; if (dove) box.style.justifyContent = "flex-start"; }
      if (dove) box.style.paddingTop = pad0 + "px";
      for (var giro = 0; giro < 2; giro++) {
        var z = parseFloat(box.style.zoom) || 1, lim = limite(), m = misura(), r = box.getBoundingClientRect();
        if (!m) return;
        var alto = m.giu - m.su, spazio = lim - m.su - 10;
        if (spazio < 80 || alto < 20) return;
        var largo = box.parentNode ? box.parentNode.getBoundingClientRect().width : window.innerWidth;
        var nz = Math.max(0.6, Math.min(max, z * spazio / alto, r.width > 0 ? z * largo / r.width : max));
        if (Math.abs(nz - z) < 0.01) break;
        box.style.zoom = Math.abs(nz - 1) > 0.005 ? nz.toFixed(3) : "";
      }
      if (!dove) return;
      var m2 = misura(); if (!m2) return;
      if (dove === "su") {
        if (!barra || !barra.classList.contains("on") || !S.vista) return;
        var vr = S.vista.getBoundingClientRect(), su = Math.round(m2.giu + 8 - vr.top);
        if (su + barra.offsetHeight <= vr.height - 2 && su < barra.offsetTop - 4) { barra.style.top = su + "px"; barra.style.bottom = "auto"; }
        return;
      }
      var libero = limite() - 12 - m2.giu, zz = parseFloat(box.style.zoom) || 1;
      if (libero > 2) box.style.paddingTop = (pad0 + (dove === "centro" ? libero / 2 : libero) / zz) + "px";
    }
    var oss = null, inCoda = false;
    if (segui && window.MutationObserver) {
      oss = new MutationObserver(function () { if (inCoda) return; inCoda = true; requestAnimationFrame(function () { inCoda = false; fai(); }); });
      oss.observe(box, { childList: true, subtree: true });
    }
    // la barra che compare o se ne va: si rifà subito (andandosene torna giù prima di scivolare via)
    var ossB = null;
    if (dove === "su" && barra && window.MutationObserver) {
      ossB = new MutationObserver(function () { if (!barra.classList.contains("on") || !box.isConnected) libera(); else fai(); });
      ossB.observe(barra, { attributes: true, attributeFilter: ["class"] });
      if (box.parentNode) { var ossP = new MutationObserver(function () { if (!box.isConnected) { libera(); ossP.disconnect(); if (ossB) ossB.disconnect(); } }); ossP.observe(box.parentNode, { childList: true }); }
    }
    fai(); requestAnimationFrame(fai); setTimeout(fai, 350); setTimeout(fai, 1000); setTimeout(fai, 2200);
    window.addEventListener("resize", fai);
  }

  // ---- fine partita: i premi della serata, poi il vincitore (o il pareggio) ----
  // g = i giocatori con i loro numeri (tot); online = non si aspetta il tasto
  var PREMI = [
    { k: "ingannati", icona: "🤥", nome: "Re delle balle", dice: function (n) { return n === 1 ? "1 amico ingannato" : n + " amici ingannati"; } },
    { k: "trovate", icona: "🔍", nome: "Detective", dice: function (n) { return n === 1 ? "1 verità scovata" : n + " verità scovate"; } },
    { k: "cascato", icona: "🙈", nome: "Credulone", dice: function (n, tanti) { return (tanti ? "ci sono cascati " : "ci è cascato ") + (n === 1 ? "1 volta" : n + " volte"); } },
    { k: "risate", icona: "😂", nome: "Balla d'oro", dice: function (n) { return n === 1 ? "1 risata per le sue balle" : n + " risate per le sue balle"; } }
  ];
  // 🏆 (20 nov 2026, il proprietario) il podio coi premi, tutto in una schermata: i primi tre sui gradini, sotto i premi della serata
  async function schermoPodio(S, el, g, online) {
    var vivi = g.filter(function (x) { return !x.via; }), pos = function (x) { return 1 + vivi.filter(function (q) { return q.punti > x.punti; }).length; };
    var ord = vivi.slice().sort(function (a, b) { return b.punti - a.punti; }).slice(0, 3);
    var premi = [];
    PREMI.forEach(function (pr) {
      var max = 0; vivi.forEach(function (x) { if (x.tot && x.tot[pr.k] > max) max = x.tot[pr.k]; });
      if (!max) return;
      var chi = vivi.filter(function (x) { return x.tot && x.tot[pr.k] === max; }).slice(0, 3);
      premi.push(el("div", { class: "bc-premio-riga" }, [ el("span", { class: "ic", text: pr.icona }),
        el("div", { class: "cosa" }, [ el("b", { text: pr.nome }), el("small", { text: chi.map(function (x) { return x.nome; }).join(", ") + " · " + pr.dice(max, chi.length > 1) }) ]),
        el("div", { class: "chi" }, chi.slice(0, 3).map(function (x) { return fac(el, x, "esulta"); })) ]));
    });
    if (!S.vivo()) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 800);
    ST.fermaTimer(S); ST.vuota(S.sch);
    var primi = vivi.filter(function (x) { return pos(x) === 1; });
    var gradini = el("div", { class: "bc-podio" }), posti = [1, 0, 2];   // (sinistra il 2°, al centro il 1°, a destra il 3°)
    posti.forEach(function (n) {
      var x = ord[n]; if (!x) return;
      var p = pos(x);
      gradini.appendChild(el("div", { class: "bc-gradino p" + p }, [ fac(el, x, p === 1 ? "evviva" : "esulta"), el("b", { class: "nm", text: x.nome }),
        el("div", { class: "blocco" }, [ el("span", { class: "n", text: p + "°" }), el("span", { class: "pt", text: fmtP(x.punti) }) ]) ]));
    });
    var box = el("div", { class: "bc-sch bc-premi bc-fine" }, [
      el("div", { class: "bc-giro", text: "La Balla Colossale · fine" }),
      el("h2", { class: "bc-vince", text: primi.length === 1 ? "🏆 Vince " + primi[0].nome + "!" : primi.length > 1 ? "🏆 Pareggio!" : "🏆 Fine partita" }),
      gradini, premi.length ? el("div", { class: "bc-giro piccolo", text: "🏅 I premi della serata" }) : null, el("div", { class: "bc-premi-lista" }, premi) ]);
    S.sch.appendChild(box); staSopraBarra(S, box, 1, "su");
    ST.pubblico(S, "ovazione"); ST.coriandoli(); if (ST.FX && ST.FX.fanfara) ST.FX.fanfara();
    try { if (navigator.vibrate) navigator.vibrate([30, 40, 70]); } catch (e) {}
    if (online) await ST.dorme(6500); else await ST.aspettaTasto(S, "Avanti ▶");
  }
  async function schermoPremi(S, el, g, online) {
    var righe = [];
    PREMI.forEach(function (pr) {
      var max = 0; g.forEach(function (x) { if (x.tot && !x.via && x.tot[pr.k] > max) max = x.tot[pr.k]; });
      if (!max) return;
      var chi = g.filter(function (x) { return x.tot && !x.via && x.tot[pr.k] === max; }).slice(0, 3);
      righe.push(el("div", { class: "bc-premio-riga" }, [ el("span", { class: "ic", text: pr.icona }),
        el("div", { class: "cosa" }, [ el("b", { text: pr.nome }), el("small", { text: pr.dice(max) }) ]),
        el("div", { class: "chi" }, chi.map(function (x) { return el("span", { class: "bc-votante" }, [ fac(el, x, "esulta"), el("span", { text: x.nome }) ]); })) ]));
    });
    if (!righe.length || !S.vivo()) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 800);
    ST.fermaTimer(S); ST.vuota(S.sch);
    var box = el("div", { class: "bc-sch bc-premi" }, [ el("div", { class: "bc-chi-sch", text: "🏅 I premi della serata" }) ]);
    S.sch.appendChild(box);
    for (var k = 0; k < righe.length; k++) {
      await ST.dorme(k ? 900 : 500);
      if (!S.vivo()) return;
      box.appendChild(righe[k]); tic(620 + k * 120); ST.pubblico(S, "applauso");
    }
    if (online) await ST.dorme(3200); else await ST.aspettaTasto(S, "E il vincitore è… ▶");
  }
  // il vincitore; a pari punti vincono in tanti
  async function granFinale(S, g, primi) {
    if (primi.length === 1) return ST.finale(S, g.indexOf(primi[0]), fmtP(primi[0].punti) + " punti");
    await ST.finale(S, -1);
    if (!S.vivo()) return;
    primi.forEach(function (p) { ST.faccia(S, g.indexOf(p), "esulta"); });
    ST.terzo(S, null, "Pareggio!", "Vincono " + primi.map(function (p) { return p.nome; }).join(", ").replace(/, ([^,]*)$/, " e $1") + " · " + fmtP(primi[0].punti) + " punti", "🏆");
    ST.pubblico(S, "ovazione"); ST.coriandoli(); if (ST.FX.fanfara) ST.FX.fanfara();
    await ST.dorme(3000); ST.viaTerzo(S);
  }

  // ---- i contatori per i trofei (solo per chi ha il profilo; online ognuno salva i suoi) ----
  // righe = [{ nome, id?, pos, punti, tot }]; mioId = online il mio id, altrimenti si cerca il nome del profilo
  var SALVATE = {};
  function salvaContatori(righe, mioId, online, sessione) {
    try {
      if (!(window.SGNube && SGNube.disponibile && SGNube.disponibile() && SGNube.profilo && SGNube.profilo() && SGNube.salvaProgressi)) return;
      var nomeP = String(SGNube.profilo().nome || "").trim().toLowerCase(); if (!nomeP) return;
      var me = righe.filter(function (r) { return online ? r.id === mioId : String(r.nome || "").trim().toLowerCase() === nomeP; })[0];
      if (!me || !me.tot) return;
      if (sessione) {   // online: una volta sola per partita, anche se si ricarica la pagina
        if (SALVATE[sessione]) return; SALVATE[sessione] = 1;
        try { if (localStorage.getItem("sg-balla-salvata") === sessione) return; localStorage.setItem("sg-balla-salvata", sessione); } catch (e) {}
      }
      var incr = [["partite", 1], ["veritaTrovate", me.tot.trovate], ["amiciIngannati", me.tot.ingannati], ["ballePerfette", me.tot.perfette],
        ["risatePrese", me.tot.risate || 0], ["balleDoro", me.tot.ori || 0]];
      if (online) incr.push(["partiteOnline", 1]);
      if (me.pos === 1) incr.push(["vinte", 1]);
      SGNube.salvaProgressi(null, "balla", incr.filter(function (x) { return x[1] > 0; }), [["puntiMax", me.punti || 0]]);
    } catch (e) {}
  }

  // =========================================================
  //  ONLINE — ognuno dal suo telefono: si scrive e si vota tutti insieme, col tempo.
  //  L'host tiene la partita (notizie, balle, voti, punti) e manda a tutti la "foto" (vm);
  //  ogni telefono ha il suo studio e la sua regia, e fa vedere gli stessi momenti.
  //  Segreti: le balle e i voti non sono mai nella foto finché non si scoprono.
  // =========================================================
  var MIN_ON = 3, MAX_ON = 8;
  var TEMPO_SCRIVI = 75000, TEMPO_VOTA = 45000;   // quanto tempo c'è per scrivere e per votare
  var TEMPO_SCRIVI_FINALE = 100000;                 // la Balla Finale: due pezzi da inventare
  var DURATA_SCELTA = 2200;                         // l'argomento scelto resta a vista, poi la notizia
  var ANTICIPO = 1600;                              // la telecamera va sul leggio e si apre il foglio: poi parte il tempo
  var GRAZIA = 2500;                                // finito il tempo, aspetto i fogli che arrivano un po' in ritardo
  var DURATA_NOTIZIA = 6500;
  function durataRisposte(n) { return 2400 + 400 + n * 650 + 1900 + 1600; }   // le risposte che compaiono sul tabellone
  function durataVoti(nv) { return 1600 + nv * 300 + 1600 + 1500; }          // i voti che compaiono sul tabellone
  function durataPasso(nVoti, vera) { return (vera ? 7200 : 5600) + nVoti * 380; }
  function durataPunti(n) { return 4000 + n * 320 + 12000; }                 // i punti sui leggii, poi 12 secondi di classifica
  var RIDE_IN_PIU = 2500;            // «Che balla!»: un po' più di tempo su ogni balla scoperta, per toccare 😂
  var DURATA_IGNORATE_RIDE = 5600;   // e sulle balle a cui non ha creduto nessuno (20 nov 2026: in breve, prima delle altre)
  var DURATA_ORO = 5600;             // la Balla d'oro del round sul maxischermo

  function avatarValido(o) { return o && typeof o === "object" && JSON.stringify(o).length < 3000 ? o : null; }
  function senzaRete(t) {
    var s = t.schermata({ chiara: true, icona: "🔗", titolo: "Serve il sito pubblicato", indietro: t.esci });
    s._contenuto.appendChild(t.el("p", { style: "font-size:1.05rem;line-height:1.5", text: "Online si gioca quando l'app è aperta dal sito pubblicato. Intanto potete giocare \"Su questo telefono\"." }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Ok", onclick: t.esci }));
    t.mostra(s);
  }
  function errore(t, testo) {
    var s = t.schermata({ chiara: true, icona: "⚠️", titolo: "Ops" });
    s._contenuto.appendChild(t.el("p", { style: "font-size:1.05rem;line-height:1.5", text: testo }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "🏠 Torna alla home", onclick: t.esci }));
    t.mostra(s);
  }

  // ---------------- HOST ----------------
  function hostB(t) {
    if (!(window.SGNet && SGNet.disponibile())) return senzaRete(t);
    var imp = t.impostazioni || {};
    var nomeHost = (t.giocatori && t.giocatori[0]) || t.nomeProfilo() || "Host";
    var IO = t.mioId || "host";   // io che tengo la partita ("host", o l'amico che ha preso il posto dell'host)
    var H = { fase: "lobby", codice: "…", pronta: false, giri: imp.round || 5, giro: 0, d: null, notizie: [], amiciQ: [], piano: [],
      modoAmici: imp.amici || "misto", ride: imp.ride !== false, sceglie: imp.sceglie !== false, cat: null, giaProt: [], rif: 0, saltato: null,
      players: [{ id: IO, nome: nomeHost, omino: t.mioOmino(nomeHost), punti: 0 }],
      balle: {}, fatti: {}, voti: {}, scelte: [], scadenza: 0, passo: 0, ordine: [], ignorate: [], ultimo: {}, classifica: null, to: null,
      risate: {}, oro: null, avanti: [],
      guarda: [],   // nella Sala: chi non è stato scelto per giocare (guarda soltanto, col suo id nella foto)
      prossimi: [] };   // chi è arrivato a partita cominciata: { id, nome, omino }, entra all'inizio del round dopo (i punti del round vanno per posto)
    // la partita di prima (l'host ha ricaricato la pagina o riaperto l'app: t.ripresa): si riprende da lì.
    // Gli amici non si danno per usciti: si aspettano ("attesi") e rientrano da soli; chi non torna entro 10 secondi esce
    var R0 = t.ripresa && t.ripresa.stato, ripresa = !!(R0 && R0.fase && R0.fase !== "lobby" && R0.players), attesi = {}, tAttesi = null;
    if (ripresa) {
      H = R0; H.to = null; H.pronta = false; H.guarda = H.guarda || []; H.avanti = H.avanti || []; H.prossimi = H.prossimi || [];
      H.players.forEach(function (p) { if (p.id !== IO && !p.via) attesi[p.id] = 1; });
      H.prossimi.forEach(function (x) { attesi[x.id] = 1; });
      if (H.d && H.balle[IO]) MIA = { dom: H.d.domanda, testo: H.balle[IO] };   // la mia balla di questo round
    }
    function pById(id) { for (var i = 0; i < H.players.length; i++) if (H.players[i].id === id) return H.players[i]; return null; }
    function iDi(id) { for (var i = 0; i < H.players.length; i++) if (H.players[i].id === id) return i; return -1; }
    function presenti() { return H.players.filter(function (p) { return !p.via; }); }
    function prossimo(id) { return H.prossimi.some(function (x) { return x.id === id; }); }
    // chi aspettava entra in partita (all'inizio di un round, o nella saletta della partita dopo) con 0 punti
    function entrano() {
      H.prossimi.forEach(function (x) { if (!pById(x.id) && H.players.length < MAX_ON) H.players.push({ id: x.id, nome: x.nome, omino: x.omino || null, punti: 0, tot: nuoviTot() }); });
      H.prossimi = [];
    }
    // chi vota in questo round: chi è rimasto, senza il protagonista di «Parliamo di te» (la verità la sa)
    function votanti() { return presenti().filter(function (p) { return !(H.d && H.d.amici && p.id === H.d.prot); }); }
    function ferma() { if (H.to) { clearTimeout(H.to); H.to = null; } }
    function dopo(ms, f) { ferma(); H.to = setTimeout(f, ms); }

    // "⚙️ Regole" nella saletta: quanti round, di cosa si parla, «Che balla!»
    t.onRegole = function (im) {
      if (H.fase !== "lobby") return;
      im = im || {}; H.giri = im.round || 5; H.modoAmici = im.amici || "misto"; H.ride = im.ride !== false; H.sceglie = im.sceglie !== false; bd();
    };

    // chi se ne va (o, dopo una ripresa, non è tornato in tempo)
    function addio(id) {
      delete attesi[id];
      if (H.guarda.indexOf(id) >= 0) { H.guarda.splice(H.guarda.indexOf(id), 1); bd(); return; }
      if (prossimo(id)) { H.prossimi = H.prossimi.filter(function (x) { return x.id !== id; }); bd(); return; }   // aspettava il round dopo: via e basta
      var p = pById(id); if (!p || p.via) return;
      if (H.fase === "lobby") { H.players = H.players.filter(function (x) { return x.id !== id; }); bd(); return; }
      p.via = true;   // a partita iniziata resta in classifica, ma non gioca più
      controlla(); bd();
    }
    var rete = SGNet.ospita("balla", {
      onCodice: function (c) { H.codice = c; bd(); },
      onConnesso: function () { H.pronta = true; bd(); },
      onAddio: addio,
      onMsg: function (id, m) {
        if (!m || !m.t) return;
        if (m.t === "join") {
          delete attesi[id];   // (dopo una ripresa: è tornato)
          var p0 = pById(id), nomeJ = String(m.nome || "Amico").slice(0, 16);
          // nella Sala gioca solo chi è stato scelto: gli altri guardano
          if (!p0 && (H.guarda.indexOf(id) >= 0 || (t.puoSedersi && !t.puoSedersi(id, nomeJ)))) { if (H.guarda.indexOf(id) < 0) H.guarda.push(id); bd(); return; }
          if (H.fase === "lobby" && !p0 && H.players.length < MAX_ON)
            H.players.push({ id: id, nome: nomeJ, omino: avatarValido(m.omino), punti: 0, tot: nuoviTot() });
          // a partita cominciata: aspetta il round dopo (entrare a metà round sballerebbe i punti, che vanno per posto).
          // Se non c'è più posto guarda soltanto (entra alla prossima partita, se si libera un posto)
          else if (!p0 && H.fase !== "lobby" && !prossimo(id) && H.players.length + H.prossimi.length < MAX_ON)
            H.prossimi.push({ id: id, nome: nomeJ, omino: avatarValido(m.omino) });
          else if (p0 && p0.via) { p0.via = false; controlla(); }   // è tornato (stesso id): riprende a giocare coi suoi punti
          bd();   // anche se c'era già: rimanda la foto (serve a chi si ricollega)
          if (p0 && H.balle[id] && H.d && H.fase !== "lobby") privato(id, { t: "priv", k: "mia", testo: H.balle[id], dom: H.d.domanda });   // e la sua balla
          return;
        }
        if (m.t === "balla") balla(id, m.testo);
        else if (m.t === "cat") sceltaCat(id, m.k);
        else if (m.t === "voto") voto(id, m.k);
        else if (m.t === "ride") ride(id, m.k);
        else if (m.t === "avanti") avanti(id);
      },
      // (arriva solo se il primo collegamento non riesce: a partita cominciata la rete si ricollega da sola)
      onErrore: function () { if (!H.pronta) { ferma(); clearTimeout(tAttesi); t.ricorda(null); errore(t, "Non riesco ad aprire la stanza. Controlla la connessione e riprova."); } }
    }, { ripresa: ripresa });   // (gli amici non tornano in saletta: la partita riprende)
    if (!rete) return senzaRete(t);
    if (ripresa && rete.codice) H.codice = rete.codice;
    // la "foto" per tutti: SEMPRE con gli id; le balle, la verità e i voti solo quando si scoprono
    function vm() {
      var f = H.fase, o = { fase: f, codice: H.codice, pronta: H.pronta, giro: H.giro, giri: H.giri, rif: H.rif, classifica: H.classifica, sessione: H.sessione,
        ride: H.ride, modoAmici: H.modoAmici, sceglie: H.sceglie,
        players: H.players.map(function (p) { return { id: p.id, nome: p.nome, omino: p.omino || null, punti: p.punti, via: !!p.via }; }),
        fatti: Object.keys(H.fatti), guarda: H.guarda.slice() };
      if (H.prossimi.length) o.prossimi = H.prossimi.map(function (x) { return x.id; });   // chi gioca dal round dopo
      if (H.d && f !== "lobby") { o.domanda = H.d.domanda; if (H.d.amici) { o.amici = true; o.prot = H.d.prot; } if (H.d.doppia) o.doppia = true; if (H.d.cat) o.catN = H.d.cat; }
      if (f === "categoria" && H.cat) o.cat = { chi: H.cat.chi, opz: H.cat.opz, k: H.cat.k, perche: H.cat.perche };
      if (f === "notizia" && H.saltato) o.saltato = H.saltato;
      if (f === "scrittura" || f === "voto" || f === "punti" || f === "categoria") o.rimMs = Math.max(0, H.scadenza - Date.now());
      if (f === "risposte" || f === "voto") o.scelte = H.scelte.map(function (sc) { return { testo: sc.testo }; });
      if ((f === "voti" || f === "rivela" || f === "oro" || f === "punti" || f === "fine") && H.scelte.length) {
        o.vera = H.d.rispostaVera; o.scelte = H.scelte; o.ordine = H.ordine; o.ignorate = H.ignorate; o.passo = H.passo;
        o.voti = H.players.map(function (p) { return H.voti[p.id] != null ? H.voti[p.id] : null; });
        o.risate = H.scelte.map(function (_, k) { return (H.risate[k] || []).slice(); });
      }
      if (f === "oro" || f === "punti" || f === "fine") o.oro = H.oro;
      if (f === "punti") { o.avanti = H.avanti.slice(); o.servono = servono(); if (H.piano && H.piano[H.giro + 1] === "f") o.prossimaFinale = true; }
      if (f === "punti" || f === "fine") o.ultimo = H.ultimo;
      return o;
    }
    // un messaggio per un telefono solo: inviaVeloce con "to" (così non resta in stanza)
    function privato(id, m) { if (id === IO) return privatoB(m); m.to = id; rete.inviaVeloce(m); }
    function bd() { var v = vm(); rete.invia({ t: "vm", vm: v }); ricorda(); disegnaVM(t, v, cbHost); vici(); }
    // (host di riserva) chi porta avanti la partita se sparisco: prima chi guarda (non gioca: non ha niente da perdere)
    var viciK = "";
    function vici() { var k = H.guarda.join(","); if (k !== viciK && t.vici) { viciK = k; t.vici(H.guarda.length ? H.guarda.slice() : null); } }
    // la partita com'è adesso, per riprenderla se ricarico la pagina (tutto H tranne il timer; in saletta niente).
    // Le balle e i voti segreti restano qui (e nella copia per il vice), mai nella foto
    function ricorda() {
      if (H.fase === "lobby") return t.ricorda(null);
      var s = {}; Object.keys(H).forEach(function (k) { if (k !== "to") s[k] = H[k]; });
      t.ricorda(s);
    }
    // la ripresa: scrittura e voto si rifanno col tempo intero (le balle e i voti già dati restano), la rivelazione va
    // ai punti del round e poi alla notizia dopo. Il giro cambia chiave (rif), così ogni telefono riapre il suo foglio
    function riprendi() {
      var f = H.fase;
      tAttesi = setTimeout(function () { Object.keys(attesi).forEach(addio); }, 10000);
      if (f === "fine") return bd();
      if (f === "categoria" && H.cat) {   // «🎯 Sceglie chi è ultimo»: già scelto si va alla notizia, se no il tempo riparte (stesso argomenti, stessa persona)
        H.rif++;
        if (H.cat.k != null) return dopoCategoria();
        H.scadenza = Date.now() + TEMPO_CAT + ANTICIPO; bd(); return dopo(TEMPO_CAT + ANTICIPO + GRAZIA, aCaso);
      }
      if (f === "apertura" || !H.d) return nuovoRound();
      if (f === "notizia" || f === "scrittura") { H.rif++; H.saltato = null; H.fase = "notizia"; bd(); return dopo(DURATA_NOTIZIA, scrittura); }
      if (f === "risposte" || f === "voto") {   // le risposte di nuovo sul tabellone, poi si vota (chi aveva votato ha già fatto)
        H.rif++; H.fatti = {}; Object.keys(H.voti).forEach(function (id) { H.fatti[id] = 1; });
        H.fase = "risposte"; bd(); return dopo(durataRisposte(H.scelte.length), votazione);
      }
      if (f === "voti") return fineVoto();   // i voti di nuovo sul tabellone, poi la rivelazione
      if (f === "rivela") { bd(); return dopo(5000, dopoRivela); }   // (la Balla d'oro, se c'è, poi i punti)
      if (f === "oro") { bd(); return dopo(DURATA_ORO, punti); }
      if (f === "punti") {   // la classifica del round: il tempo che restava (almeno 5 secondi)
        var resta = Math.max(5000, (t.ripresa.ora(H.scadenza) || 0) - Date.now());
        H.avanti = []; H.scadenza = Date.now() + resta; bd(); return dopo(resta, prossimo);
      }
      nuovoRound();
    }

    // ----- la partita -----
    function comincia() {
      if (H.fase !== "lobby" || presenti().length < MIN_ON) return;
      H.piano = pianoRound(H.giri, H.modoAmici);
      var nA = H.piano.filter(function (x) { return x === "a"; }).length, nN = H.piano.filter(function (x) { return x === "n"; }).length;
      // (con «🎯 Sceglie chi è ultimo» la notizia si prende quando si sa l'argomento)
      H.notizie = H.sceglie ? [] : scegliDomande(nN); H.amiciQ = scegliAmici(nA);
      if (!notizieDi().length && !H.amiciQ.length) return;
      H.players.forEach(function (p) { p.nScelte = 0; }); H.cat = null;
      H.giro = 0; H.classifica = null; H.giaProt = []; H.rif = 0;
      H.sessione = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      H.players.forEach(function (p) { p.punti = 0; p.tot = nuoviTot(); });
      H.fase = "apertura"; bd();   // la sigla dello studio, uguale su tutti i telefoni
      dopo(ST.durataApertura(H.players.length), nuovoRound);
    }
    // la domanda del round: una notizia, oppure («Parliamo di te») una domanda su un amico che non è ancora stato protagonista
    function domandaDelRound() {
      if (H.piano[H.giro] === "a" && H.amiciQ.length && presenti().length >= MIN_ON) {
        var cand = presenti().filter(function (p) { return H.giaProt.indexOf(p.id) < 0; });
        if (!cand.length) { H.giaProt = []; cand = presenti(); }
        var p = cand[Math.floor(Math.random() * cand.length)], tpl = H.amiciQ.shift();
        H.giaProt.push(p.id);
        return { domanda: riempi(tpl.domanda, p.nome), rispostaVera: "", balleCasa: tpl.balleCasa || [], amici: true, prot: p.id };
      }
      if (H.piano[H.giro] === "f") { var fin = scegliFinale(); if (fin) return fin; }   // 🔥 la Balla Finale
      return H.notizie.shift() || scegliDomande(1)[0];
    }
    function pulisciRound() { H.balle = {}; H.fatti = {}; H.voti = {}; H.scelte = []; H.ordine = []; H.ignorate = []; H.passo = 0; H.ultimo = {}; H.risate = {}; H.oro = null; H.avanti = []; }
    function nuovoRound() {
      entrano();   // chi è arrivato durante il round di prima gioca da questo
      if (t.aCheSiamo) t.aCheSiamo("Round " + (H.giro + 1) + " di " + H.giri);   // (nella Sala, per chi è fuori)
      H.saltato = null; pulisciRound(); H.cat = null;
      if (H.piano[H.giro] === "n" && H.sceglie && presenti().length >= 2 && treCategorie().length) return categoria();
      H.d = domandaDelRound();
      H.fase = "notizia"; bd();
      dopo(DURATA_NOTIZIA, scrittura);
    }
    // «🎯 Sceglie chi è ultimo»: chi ha meno punti sceglie l'argomento tra tre (TEMPO_CAT, poi a caso); poi la notizia
    function categoria() {
      var ch = chiSceglie(presenti());
      ch.g.nScelte = (ch.g.nScelte || 0) + 1;
      H.d = null; H.cat = { chi: ch.g.id, opz: treCategorie(), k: null, perche: ch.perche };
      H.fase = "categoria"; H.scadenza = Date.now() + TEMPO_CAT + ANTICIPO; bd();
      dopo(TEMPO_CAT + ANTICIPO + GRAZIA, aCaso);
    }
    function aCaso() { if (H.fase === "categoria" && H.cat && H.cat.k == null) sceltaCat(null, Math.floor(Math.random() * H.cat.opz.length)); }
    function sceltaCat(id, k) {
      k = Number(k);
      if (H.fase !== "categoria" || !H.cat || H.cat.k != null || !(k >= 0 && k < H.cat.opz.length)) return;
      if (id != null && id !== H.cat.chi) return;   // sceglie solo lui (null = il tempo è finito: a caso)
      H.cat.k = k; bd();
      dopo(DURATA_SCELTA, dopoCategoria);
    }
    function dopoCategoria() {
      H.d = notiziaDi(H.cat.opz[H.cat.k]) || domandaDelRound();
      H.fase = "notizia"; bd();
      dopo(DURATA_NOTIZIA, scrittura);
    }
    // il protagonista non ha scritto la sua verità (tempo finito o uscito): si passa a una notizia, stesso round
    function siPassaAUnaNotizia() {
      var p = pById(H.d.prot); H.saltato = p ? p.nome : "Il protagonista";
      H.d = H.notizie.shift() || scegliDomande(1)[0]; H.rif++; pulisciRound();
      H.fase = "notizia"; bd();
      dopo(DURATA_NOTIZIA + 2600, scrittura);
    }
    function scrittura() {
      var ms = H.d && H.d.doppia ? TEMPO_SCRIVI_FINALE : TEMPO_SCRIVI;
      H.fase = "scrittura"; H.scadenza = Date.now() + ms + ANTICIPO; bd(); dopo(ms + ANTICIPO + GRAZIA, fineScrittura);
    }
    function balla(id, testo) {
      var p = pById(id); if (H.fase !== "scrittura" || !p || p.via || H.fatti[id]) return;
      var doppia = !!H.d.doppia, v = pulisciR(testo, doppia); if (!v) return;
      if (H.d.amici && id === H.d.prot) {   // «Parliamo di te»: questa è la verità
        H.d.rispostaVera = v; H.fatti[id] = 1;
        // chi aveva già scritto proprio la verità ne deve inventare un'altra
        Object.keys(H.balle).forEach(function (o) { if (eLaVerita(H.balle[o], v)) { delete H.balle[o]; delete H.fatti[o]; privato(o, { t: "priv", k: "vera" }); } });
        controlla(); bd(); return;
      }
      if (H.d.rispostaVera && eLaVeritaR(v, H.d.rispostaVera, doppia)) return privato(id, { t: "priv", k: "vera" });   // ha scritto la verità: ne deve inventare un'altra
      H.balle[id] = v; H.fatti[id] = 1; controlla(); bd();
      privato(id, { t: "priv", k: "mia", testo: v, dom: H.d.domanda });   // conferma: questa è la tua balla
    }
    function fineScrittura() {
      ferma();
      if (H.d.amici && !H.d.rispostaVera) return siPassaAUnaNotizia();
      var vera = H.d.rispostaVera;
      H.scelte = preparaScelte(vera, H.players.map(function (p) { var b = H.balle[p.id] || ""; return b && !eLaVeritaR(b, vera, H.d.doppia) ? b : ""; }), H.d.balleCasa, H.d.doppia);   // gli autori sono i posti dei giocatori
      H.fatti = {}; H.fase = "risposte"; bd();
      dopo(durataRisposte(H.scelte.length), votazione);
    }
    function votazione() { H.fase = "voto"; H.scadenza = Date.now() + TEMPO_VOTA + ANTICIPO; bd(); dopo(TEMPO_VOTA + ANTICIPO + GRAZIA, fineVoto); }
    function voto(id, k) {
      var i = iDi(id), p = H.players[i]; k = Number(k);
      if (H.fase !== "voto" || !p || p.via || H.voti[id] != null || !(k >= 0 && k < H.scelte.length)) return;
      if (H.d.amici && id === H.d.prot) return;   // il protagonista non vota
      if (H.scelte[k].autori.indexOf(i) >= 0) return privato(id, { t: "priv", k: "tua" });   // la propria balla non si vota
      H.voti[id] = k; H.fatti[id] = 1; controlla(); bd();
    }
    function fineVoto() {
      ferma();
      var conta = H.scelte.map(function () { return 0; }), nv = 0;
      H.players.forEach(function (p) { var v = H.voti[p.id]; if (v != null) { conta[v]++; nv++; } });
      var ks = H.scelte.map(function (_, k) { return k; });
      H.ordine = ks.filter(function (k) { return !H.scelte[k].vera && conta[k] > 0; }).sort(function (a, b) { return conta[a] - conta[b]; });
      H.ignorate = ks.filter(function (k) { return !H.scelte[k].vera && conta[k] === 0; });
      H.fatti = {}; H.fase = "voti"; H.passo = 0; bd();
      dopo(durataVoti(nv), function () { H.fase = "rivela"; H.passo = 0; bd(); prossimoPasso(conta); });
    }
    // la rivelazione: un passo alla volta (prima le balle votate, poi la verità, poi quelle che non ha votato nessuno)
    // con «Che balla!» accesa i passi delle balle durano un po' di più: c'è il tempo di toccare 😂
    function prossimoPasso(conta) {
      // 🎬 (20 nov 2026) i passi: prima (se ci sono) le balle senza voti, in breve; poi le balle votate; per ultima la verità
      var nI = H.ignorate.length ? 1 : 0, nL = H.ordine.length, kVera = H.scelte.map(function (sc) { return sc.vera; }).indexOf(true);
      var dur = H.passo < nI ? (H.ride ? DURATA_IGNORATE_RIDE : 3600)
        : H.passo < nI + nL ? durataPasso(conta[H.ordine[H.passo - nI]], false) + (H.ride ? RIDE_IN_PIU : 0)
        : durataPasso(conta[kVera], true);
      dopo(dur, function () {
        H.passo++;
        if (H.passo > nI + nL) return dopoRivela();
        bd(); prossimoPasso(conta);
      });
    }
    // i 😂 di «Che balla!»: uno a testa per balla (anche chi guarda nella Sala), mai sulla propria
    function ride(id, k) {
      k = Number(k);
      if (!H.ride || H.fase !== "rivela" || !(k >= 0 && k < H.scelte.length) || H.scelte[k].vera) return;
      var i = iDi(id), p = H.players[i];
      if (p ? p.via : H.guarda.indexOf(id) < 0 && !prossimo(id)) return;   // (chi aspetta il round dopo ride anche lui)
      if (i >= 0 && H.scelte[k].autori.indexOf(i) >= 0) return;
      var l = H.risate[k] || (H.risate[k] = []); if (l.indexOf(id) >= 0) return;
      l.push(id); bd();
    }
    function contaRisate() { return H.scelte.map(function (_, k) { return (H.risate[k] || []).length; }); }
    // finita la rivelazione: la Balla d'oro del round (se qualcuno ha riso), poi i punti
    function dopoRivela() {
      H.oro = H.ride ? calcolaOro(H.scelte, contaRisate()) : null;
      if (!H.oro) return punti();
      H.fase = "oro"; bd();
      dopo(DURATA_ORO, punti);
    }
    function punti() {
      ferma();
      var esito = calcola(H.scelte, H.players.map(function (p) { return H.voti[p.id] != null ? H.voti[p.id] : null; }), H.players.length,
        moltiplica(H.giro, H.giri, H.d.doppia), votanti().length, H.d.amici ? iDi(H.d.prot) : null, H.ride ? contaRisate() : null);
      H.ultimo = {};
      H.players.forEach(function (p, i) { if (p.via) return; var d = puntiDi(esito[i]); p.punti += d; H.ultimo[p.id] = d; sommaTot(p.tot || (p.tot = nuoviTot()), esito[i]); });
      if (H.giro + 1 >= H.giri) return fine();
      // la classifica del round: si va avanti col conto alla rovescia, o subito se più di metà tocca «⏩ Avanti»
      var dur = durataPunti(H.players.length);
      H.avanti = []; H.fase = "punti"; H.scadenza = Date.now() + dur; bd();   // (la foto dice anche se il prossimo è la Balla Finale: prossimaFinale)
      dopo(dur, prossimo);
    }
    function servono() { return Math.floor(presenti().length / 2) + 1; }
    function avanti(id) {
      var p = pById(id); if (H.fase !== "punti" || !p || p.via || H.avanti.indexOf(id) >= 0) return;
      H.avanti.push(id);
      if (H.avanti.length >= servono()) return prossimo();
      bd();
    }
    function prossimo() { if (H.fase !== "punti") return; ferma(); H.giro++; nuovoRound(); }
    // chi ha finito di scrivere / di votare: quando ci sono tutti si va avanti senza aspettare il tempo
    function controlla() {
      if (H.fase === "lobby" || H.fase === "fine") return;
      if (presenti().length < 2) return fine();   // è rimasto uno solo: finisce qui
      var tutti = function (lista) { return lista.every(function (p) { return H.fatti[p.id]; }); };
      if (H.fase === "scrittura") {
        var protVia = H.d && H.d.amici && !H.d.rispostaVera && (pById(H.d.prot) || {}).via;
        if (protVia || tutti(presenti())) dopo(1200, fineScrittura);
      }
      if (H.fase === "voto" && tutti(votanti())) dopo(1200, fineVoto);
      if (H.fase === "categoria" && H.cat && H.cat.k == null && (pById(H.cat.chi) || { via: true }).via) aCaso();   // chi sceglie è uscito: a caso
      if (H.fase === "punti" && H.avanti.length >= servono()) prossimo();
    }
    function fine() {
      ferma();
      // chi è uscito resta in classifica, ma in fondo (dopo tutti quelli rimasti): vince sempre il primo della classifica
      var perPunti = function (a, b) { return b.punti - a.punti; };
      var dentro = presenti().sort(perPunti), fuori = H.players.filter(function (p) { return p.via; }).sort(perPunti);
      var riga = function (gruppo, base) { return function (p) { return { id: p.id, nome: p.nome, punti: p.punti, via: !!p.via, tot: p.tot || nuoviTot(),
        pos: base + 1 + gruppo.filter(function (q) { return q.punti > p.punti; }).length }; }; };
      H.classifica = dentro.map(riga(dentro, 0)).concat(fuori.map(riga(fuori, dentro.length)));
      H.fase = "fine"; bd();
      if (t.risultato) t.risultato(H.classifica.map(function (r) { return { nome: r.nome, pos: r.pos }; }));
    }
    // "Nuova partita": stessa stanza, stessi amici (anche chi era uscito ed è tornato), tutti tornano nella saletta
    function nuova() { ferma(); H.fase = "lobby"; H.classifica = null; H.d = null; H.players = presenti(); entrano();   // (e chi aspettava)
      // chi tiene la partita è il primo (in saletta ha la corona); se l'ha presa guardando (host di riserva), si siede
      if (!pById(IO)) { H.guarda = H.guarda.filter(function (x) { return x !== IO; }); H.players.push({ id: IO, nome: nomeHost, omino: t.mioOmino(nomeHost), punti: 0 }); }
      H.players.sort(function (a, b) { return (b.id === IO) - (a.id === IO); }); H.players.forEach(function (p) { p.punti = 0; p.tot = nuoviTot(); }); bd(); }

    var cbHost = { sonoHost: true, myId: IO, onComincia: comincia, onNuova: nuova, onProssimo: prossimo,
      onBalla: function (testo) { balla(IO, testo); }, onVoto: function (k) { voto(IO, k); }, onCat: function (k) { sceltaCat(IO, k); },
      onRide: function (k) { ride(IO, k); }, onAvanti: function () { avanti(IO); },
      onEsci: function (giaChiesto) {   // (dallo studio la domanda "Uscire dalla partita?" l'ha già fatta lui)
        if (giaChiesto !== true && H.fase !== "lobby" && H.fase !== "fine") return t.conferma("Chiudere la partita per tutti?", null, "Esci", function () { cbHost.onEsci(true); });   // un tocco sbagliato non chiude il gioco a tutti
        ferma(); clearTimeout(tAttesi); t.ricorda(null); rete.chiudi(); t.esci();
      } };
    // la Rivincita dei tasti di fine comuni: tutti di nuovo nella saletta, stessi amici (il core fa il 3-2-1)
    t.onRivincita = function () { if (H.fase === "fine") nuova(); };
    if (ripresa) riprendi(); else bd();
  }

  // ---------------- OSPITE ----------------
  function ospiteB(t, codice) {
    if (!(window.SGNet && SGNet.disponibile())) return senzaRete(t);
    var G = { rete: null, myId: null, nome: "", vm: null };
    var cb = { sonoHost: false, myId: null,
      onBalla: function (testo) { if (G.rete) G.rete.invia({ t: "balla", testo: testo }); },
      onVoto: function (k) { if (G.rete) G.rete.invia({ t: "voto", k: k }); },
      onCat: function (k) { if (G.rete) G.rete.invia({ t: "cat", k: k }); },
      onRide: function (k) { if (G.rete) G.rete.invia({ t: "ride", k: k }); },
      onAvanti: function () { if (G.rete) G.rete.invia({ t: "avanti" }); },
      onEsci: function (giaChiesto) {
        if (giaChiesto !== true && G.vm && G.vm.fase !== "lobby" && G.vm.fase !== "fine") return t.conferma("Uscire dalla partita?", null, "Esci", function () { cb.onEsci(true); });
        if (G.rete) G.rete.chiudi(); t.esci();
      } };
    if (t.nomeProfilo()) { G.nome = t.nomeProfilo(); collega(); } else chiediNome();   // col profilo si entra da soli
    function chiediNome() {
      var s = t.schermata({ chiara: true, icona: "🤥", titolo: "Entra nella partita", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      var input = t.el("input", { type: "text", placeholder: "Il tuo nome", maxlength: "16", class: "link-campo" });
      s._contenuto.appendChild(input);
      s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Entra ▶", onclick: function () {
        try { SG.audioCtx && SG.audioCtx(); } catch (e) {}
        G.nome = (input.value || "").trim().slice(0, 16) || "Amico"; collega();
      } }));
      t.mostra(s);
    }
    function collega() {
      var s = t.schermata({ chiara: true, icona: "🤥", titolo: "Entro nella partita…", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      s._contenuto.appendChild(t.el("p", { class: "modulo-nota", style: "text-align:center;margin-top:24px", text: "Collegamento in corso…" }));
      t.mostra(s);
      G.rete = SGNet.entra(codice, {
        onAperto: function (id) { G.myId = id; cb.myId = id; G.rete.invia({ t: "join", nome: G.nome, omino: t.mioOmino(G.nome) }); },
        onMsg: function (m) {
          if (!m || !m.t) return;
          if (m.to && m.to !== G.myId) return;   // era per un altro telefono
          if (m.t === "vm") { G.vm = m.vm; disegnaVM(t, m.vm, cb); }
          else if (m.t === "priv") privatoB(m);
        },
        // l'host ha chiuso la stanza apposta (se sparisce e non torna, "La stanza è chiusa" lo dice il core):
        // sulla classifica finale resta la classifica, con la scritta giusta
        onChiuso: function () {
          if (G.vm && G.vm.fase === "fine") { cb.chiusa = true; if (RB && RB.notaFine) { RB.notaFine.textContent = NOTA_CHIUSA; RB.notaFine.hidden = false; } return; }
          errore(t, "🚪 L'host ha chiuso la partita.");
        },
        // (solo se il primo collegamento non riesce)
        onErrore: function () { errore(t, "Problema di collegamento. Controlla la connessione e riprova."); }
      });
    }
  }

  // ---------------- OGNI TELEFONO: la saletta, poi lo studio con la sua regia ----------------
  var RB = null, NOTA_CHIUSA = "🚪 L'host ha chiuso la stanza.";
  function idxDi(vm, id) { for (var i = 0; i < vm.players.length; i++) if (vm.players[i].id === id) return i; return -1; }
  // la mia balla del round (online): la tengo fuori dallo studio, così resta anche se la foto arriva dopo
  var MIA = null;   // { dom: la notizia, testo }
  // (20 nov 2026) la mia balla resta anche se ricarico la pagina: così la rileggo e al voto è ancora «la tua»
  try { MIA = JSON.parse(sessionStorage.getItem("sg-balla-mia") || "null"); } catch (e) {}
  function salvaMia() { try { sessionStorage.setItem("sg-balla-mia", JSON.stringify(MIA)); } catch (e) {} }
  // i messaggi solo per me: ho scritto la verità, ho votato la mia balla, o l'host mi dice qual è la mia balla
  function privatoB(m) {
    if (m.k === "mia") { MIA = { dom: m.dom, testo: String(m.testo || "") }; if (RB && RB.S._segnaMia) RB.S._segnaMia(); return; }
    if (m.k === "vera") MIA = null;   // la verità non era una balla buona: non è "la mia"
    if (!RB) return;
    if (m.k === "vera") RB.vera = true;
    if (m.k === "tua") RB.tua = true;
    regiaTick(RB);
  }
  function disegnaVM(t, vm, cb) {
    assicuraStile();
    if (vm.fase === "lobby") { RB = null; return lobbyB(t, vm, cb); }
    // lo studio si fa una volta per partita (e di nuovo se l'host ricomincia dopo la fine)
    // (e da capo se il tavolo è un altro: l'amico che prende il posto dell'host sparito, Passo 5, non usa lo studio di quando era ospite)
    var ids = vm.players.map(function (p) { return p.id; }).join("|");
    if (!RB || RB.t !== t || (!RB.S.vivo() && (vm.fase !== "fine" || !RB.fineFatta))) {
      RB = { t: t, cb: cb, usciti: {}, mie: {}, ids: ids };
      RB.S = ST.crea(t, vm.players, { io: idxDi(vm, cb.myId), esci: function () { cb.onEsci(true); }, titolo: "La Balla Colossale", logo: ["LA BALLA", "COLOSSALE"] }); chipStretti(RB.S);
      if (conTarga(t)) RB.S.vista.classList.add("st-con-targa");   // chi guarda soltanto: il posto della targhetta del core in basso
      vm.players.forEach(function (p, i) { ST.puntiLeggio(RB.S, i, P(p.punti), P(0)); });
    } else if (RB.ids !== ids && RB.S.vivo()) {   // è entrato chi aspettava il round dopo: rifaccio i leggii (i posti di prima restano gli stessi)
      RB.ids = ids; RB.usciti = {};
      RB.S.impostaGiocatori(vm.players, idxDi(vm, cb.myId));
      vm.players.forEach(function (p, i) { ST.puntiLeggio(RB.S, i, P(p.punti), P(0)); });
      if (RB.S.shot) ST.camera(RB.S, RB.S.shot(), 0);
    }
    RB.vm = vm; RB.cb = cb; RB.vmTs = Date.now();
    // il tempo è finito per tutti (o, col telefono riacceso, si è già passati al voto): il foglio della fase di prima si chiude
    if (RB.S._chiudiVelo && (vm.fase !== "scrittura" && vm.fase !== "voto" || (RB.S._veloFase && vm.fase !== RB.S._veloFase))) RB.S._chiudiVelo();
    aggiornaRisate(RB); aggiornaAvanti(RB);   // (i 😂 degli altri e i tocchi di «⏩ Avanti»: solo i numeri, senza ridisegnare)
    regiaTick(RB);
  }
  // «😂 Che balla!»: i 😂 arrivati dagli altri telefoni sui tasti a vista (a ogni risata in più vola una faccina)
  function aggiornaRisate(R) {
    var vm = R.vm, btn = R.rideBtn; if (!btn || !vm.risate) return;
    Object.keys(btn).forEach(function (k) {
      var b = btn[k], l = vm.risate[k] || [], mia = l.indexOf(R.cb.myId) >= 0;
      if (!b.isConnected) return;
      segnaRide(b, l.length + (R.mie[R.kRide + "|" + k] && !mia ? 1 : 0), mia || !!R.mie[R.kRide + "|" + k]);
    });
  }
  function testoLobby(vm) {
    var am = vm.modoAmici === "solo" ? " Ogni round una domanda su uno di voi: lui scrive la verità, gli altri le balle."
      : vm.modoAmici === "no" ? "" : " Ogni tanto la domanda è su uno di voi (👥 Parliamo di te).";
    return "Si gioca con " + (vm.giri === 1 ? "1 round" : vm.giri + " round") + "." + am + (vm.sceglie === false ? "" : " 🎯 L'argomento lo sceglie chi è ultimo.")
      + (vm.modoAmici === "solo" ? "" : " 🔥 L'ultima notizia è la Balla Finale, coi punti tripli.") + (vm.ride === false ? "" : " 😂 Alle balle più divertenti va la Balla d'oro.");
  }
  function lobbyB(t, vm, cb) {
    t.lobby({ host: cb.sonoHost, codice: vm.codice, pronta: vm.pronta, min: MIN_ON,
      vuoti: Math.max(0, MIN_ON - vm.players.length),
      giocatori: vm.players.map(function (p, i) { return { id: p.id, nome: p.nome, omino: p.omino || null, host: i === 0, tu: p.id === cb.myId }; }),
      extra: [t.el("p", { class: "modulo-nota bc-lobby", text: testoLobby(vm) + " Ognuno scrive e vota dal suo telefono, tutti insieme." })],
      // nella Sala: chi non è stato scelto guarda soltanto
      spettatore: !cb.sonoHost && (vm.guarda || []).indexOf(cb.myId) >= 0 ? "👀 Questa volta guardi" : null,
      attesa: "Aspetta che l'host cominci!", onComincia: cb.onComincia, onEsci: cb.onEsci });
  }
  async function regiaTick(R) {
    if (R.corre) { R.ancora = true; return; }
    R.corre = true;
    try {
      for (var giri = 0; giri < 40; giri++) {
        R.ancora = false;
        var fatto = await regiaPasso(R);
        if (!fatto && !R.ancora) break;
      }
    } catch (e) {} finally { R.corre = false; }
  }
  // lo stato del round come lo usano le schermate (uguali a quelle del telefono che passa)
  function statoDa(R, vm) {
    var ip = vm.amici ? idxDi(vm, vm.prot) : -1, io = idxDi(vm, R.cb.myId), kR = vm.giro + "." + (vm.rif || 0);
    var st = { S: R.S, t: R.t, g: vm.players, giro: vm.giro, giri: vm.giri,
      d: { domanda: vm.domanda || "", rispostaVera: vm.vera || "", amici: !!vm.amici, prot: ip, protNome: ip >= 0 ? vm.players[ip].nome : "", doppia: !!vm.doppia, cat: vm.catN || null },
      scelte: vm.scelte || [], voti: vm.voti || vm.players.map(function () { return null; }),
      fatti: vm.players.map(function (p) { return (vm.fatti || []).indexOf(p.id) >= 0; }),
      ride: vm.ride !== false, rideBtn: {}, kR: kR };
    // «😂 Che balla!» online: un 😂 a testa per balla (lo conta l'host), mai sulla propria
    var mieR = function (k) { return !!R.mie[kR + "|" + k] || ((vm.risate || [])[k] || []).indexOf(R.cb.myId) >= 0; };
    st.risate = st.scelte.map(function (_, k) { var l = (vm.risate || [])[k] || []; return l.length + (R.mie[kR + "|" + k] && l.indexOf(R.cb.myId) < 0 ? 1 : 0); });
    st.hoRiso = mieR;
    st.miaBalla = function (sc) { return io >= 0 && (sc.autori || []).indexOf(io) >= 0; };
    var me = vm.players[io], guardo = (vm.guarda || []).indexOf(R.cb.myId) >= 0 || (vm.prossimi || []).indexOf(R.cb.myId) >= 0;
    st.rideFn = !(me ? !me.via : guardo) ? null : function (k) {   // (chi è uscito non ride; chi guarda nella Sala e chi aspetta il round dopo sì)
      if (mieR(k) || R.vm.fase !== "rivela") return false;
      R.mie[kR + "|" + k] = 1; st.risate[k]++; R.cb.onRide(k); return true;
    };
    return st;
  }
  // un passo della regia: true se ha fatto un momento dello spettacolo (poi si guarda lo stato più recente)
  async function regiaPasso(R) {
    var vm = R.vm, S = R.S;
    if (!S.vivo()) return false;
    vm.players.forEach(function (p, i) {
      if (p.via && !R.usciti[p.id]) { R.usciti[p.id] = true; ST.fuori(S, i, true); ST.testoLeggio(S, i, "👋 uscito", true); }
      else if (!p.via && R.usciti[p.id]) { delete R.usciti[p.id]; ST.fuori(S, i, false); ST.puntiLeggio(S, i, P(p.punti), P(0)); }   // è tornato
    });
    // la chiave del round: il giro e, se il protagonista non ha scritto e si è passati a una notizia, quante volte è successo
    var st = statoDa(R, vm), kG = st.kR;
    if (vm.fase === "apertura") {
      if (R.aperturaFatta) return false;
      R.aperturaFatta = true; await ST.apertura(S); return true;
    }
    R.aperturaFatta = true;
    if (vm.fase === "categoria") {
      if (R.kCat !== kG) { R.kCat = kG; await categoriaOnline(R, st); return true; }
      aggiornaCat(R); return false;
    }
    if (vm.fase === "notizia") {
      if (R.kN === kG) return false;
      R.kN = kG; R.vera = false; R.tua = false;
      ST.viaBarra(S); ST.accendiSolo(S, -1); ST.tutteNormali(S);
      vm.players.forEach(function (p, i) { if (!p.via) ST.puntiLeggio(S, i, P(p.punti), P(0)); });
      if (vm.saltato) {   // «Parliamo di te» saltato: lo studio lo dice, poi la notizia
        ST.terzo(S, null, "😶 " + vm.saltato + " non ha scritto la risposta", "Si passa a una notizia!", "📰"); ST.pubblico(S, "ohh");
        await ST.dorme(2400); ST.viaTerzo(S);
      }
      await ST.suSchermo(S, 800);
      schermoTurno(st, null, "scrive"); R.boxFatti = st.boxFatti;
      ST.FX.rullo(1); await ST.dorme(1100); ST.pubblico(S, "piano");
      if (st.d.amici && R.vm.fase === "notizia") await annunciaAmici(S, st.d.prot, st.d.protNome);
      if (moltiplica(vm.giro, vm.giri) > 1 && R.vm.fase === "notizia") await annunciaDoppio(S, st.d.doppia);
      return true;
    }
    // (chi rientra mentre si scrive o si vota: la prima foto può dirlo ancora "uscito"; quando torna dentro gli si apre il foglio)
    var dentro = function () { var me = vm.players[idxDi(vm, R.cb.myId)]; return !!me && !me.via; };
    if (vm.fase === "scrittura") {
      if (R.kS !== kG || R.vera || (R.fuoriS === kG && dentro())) { R.kS = R.kN = kG; R.fuoriS = dentro() ? null : kG; await scriviOnline(R, st); return true; }
      aggiornaFatti(R, vm, "scrive"); aggiornaAttesa(R); return false;
    }
    if (vm.fase === "risposte") {
      if (R.kR === kG) return false;
      R.kR = R.kS = R.kN = kG; ST.viaBarra(S);
      await presentaRisposte(st); return true;
    }
    if (vm.fase === "voto") {
      if (R.kV !== kG || R.tua || (R.fuoriV === kG && dentro())) { R.kV = R.kR = R.kS = R.kN = kG; R.fuoriV = dentro() ? null : kG; await votaOnline(R, st); return true; }
      aggiornaFatti(R, vm, "vota"); aggiornaAttesa(R); return false;
    }
    if (vm.fase === "voti") {
      if (R.kVo === kG) return false;
      R.kVo = R.kV = kG; ST.viaBarra(S);
      await mostraVoti(st); return true;
    }
    if (vm.fase === "rivela") {
      var kP = kG + "|" + vm.passo;
      if (R.kP === kP) return false;
      R.kP = kP; R.kVo = kG; ST.viaBarra(S);
      R.rideBtn = st.rideBtn; R.kRide = kG;   // (i 😂 degli altri arrivano su questi tasti)
      var nI = (vm.ignorate || []).length ? 1 : 0, nL = (vm.ordine || []).length;
      st.ordineRiv = vm.ordine || [];
      if (R.kRivP !== kG) { R.kRivP = kG; vm.players.forEach(function (p, i) { if (!p.via) ST.puntiLeggio(S, i, P(p.punti), 0); }); }   // (i riquadri mostrano i punti; poi crescono coi punti che volano)
      if (vm.passo < nI) await schermoIgnorate(st, vm.ignorate || [], true);
      else if (vm.passo < nI + nL) await mostraScelta(st, vm.ordine[vm.passo - nI], true);
      else await mostraScelta(st, st.scelte.map(function (sc) { return sc.vera; }).indexOf(true), true);
      return true;
    }
    if (vm.fase === "oro") {
      if (R.kOro === kG) return false;
      R.kOro = R.kP = R.kVo = kG; R.rideBtn = null;
      await schermoOro(st, vm.oro, true); return true;
    }
    if (vm.fase === "punti" || vm.fase === "fine") {
      R.rideBtn = null;
      if (R.kPunti !== kG && vm.ultimo) { R.kPunti = kG; await puntiOnline(R, vm); return true; }
      if (vm.fase === "fine") {
        if (R.fineFatta) return false;
        R.fineFatta = true; await finaleOnline(R, vm); return true;
      }
      if (R.kClas !== kG) { R.kClas = kG; await classificaOnline(R, vm); return true; }
      return false;
    }
    return false;
  }
  // «🎯 Sceglie chi è ultimo» online: i tre argomenti sul maxischermo; li tocca solo chi sceglie, gli altri guardano
  async function categoriaOnline(R, st) {
    var S = R.S, el = R.t.el, vm = R.vm, c = vm.cat || {}, i = idxDi(vm, c.chi), io = idxDi(vm, R.cb.myId);
    var mio = c.chi === R.cb.myId && io >= 0 && !vm.players[io].via, k0 = st.kR;
    ST.viaBarra(S); ST.viaTerzo(S); ST.tutteNormali(S); ST.accendiSolo(S, i);
    vm.players.forEach(function (p, n) { if (!p.via) ST.puntiLeggio(S, n, P(p.punti), P(0)); });
    await ST.suSchermo(S, 800);
    if (!S.vivo() || R.vm.fase !== "categoria" || R.kCat !== k0) return;
    if (i >= 0) ST.faccia(S, i, "pensa");
    R.carteCat = schermoCategoria(st, i, c, mio ? function (k) { R.catMia = k0; R.cb.onCat(k); } : null, mio);
    R.catSegnata = null;
    var conto = el("p", { class: "bc-attesa" }), sec = Math.max(1, Math.round(((R.vm.rimMs || TEMPO_CAT) - (Date.now() - R.vmTs)) / 1000));
    ST.barra(S, [ conto, faccineB(R.t) ]);
    R.t.contoAvanti(conto, sec, null, "bc-cat|" + vm.sessione + "|" + k0, mio ? "Scegli entro " : "Si sceglie a caso tra ");
    aggiornaCat(R);
  }
  // l'argomento scelto (arriva con la foto dopo): si accende quella carta, le altre si spengono (solo quella parte cambia)
  function aggiornaCat(R) {
    var c = R.vm.cat, k0 = statoDa(R, R.vm).kR;
    if (!c || c.k == null || !R.carteCat || R.catSegnata === k0 || R.kCat !== k0) return;
    R.catSegnata = k0;
    segnaCategoria(R.carteCat, c.k); ST.viaBarra(R.S); tic(880);
    var i = idxDi(R.vm, c.chi); if (i >= 0) ST.faccia(R.S, i, "esulta");
  }
  function tempoRimasto(R) { return Math.max(3000, (R.vm.rimMs || 0) - (Date.now() - R.vmTs)); }   // il tempo che resta secondo l'host
  // tutti scrivono insieme: la telecamera va sul mio leggio e si apre il MIO foglio
  async function scriviOnline(R, st) {
    var S = R.S, el = R.t.el, cb = R.cb, vm = R.vm, io = idxDi(vm, cb.myId), me = vm.players[io];
    var riprova = R.vera; R.vera = false;
    schermoTurno(st, null, "scrive"); R.boxFatti = st.boxFatti; aggiornaFatti(R, vm, "scrive", true);
    if (io < 0 || !me || me.via || (!riprova && (vm.fatti || []).indexOf(cb.myId) >= 0)) { await ST.suSchermo(S, 800); attesaOnline(R, io < 0 || !me || me.via); return; }
    var vero = eProt(st, io);   // «Parliamo di te» e la domanda è su di me: scrivo la verità
    ST.accendiSolo(S, io); ST.testoLeggio(S, io, vero ? "🤫 la verità" : "✍️ scrive");
    if (!riprova) {
      if (vero) ST.terzo(S, io, "La domanda è su di te!", "Scrivi la verità: gli altri dovranno trovarla", "🤫");
      else ST.terzo(S, io, "Scrivete tutti la vostra balla!", st.d.amici ? "Su " + st.d.protNome + ": deve sembrare vera" : "Deve sembrare vera", "✍️");
      await ST.suLeggio(S, io, 700); ST.viaTerzo(S); ST.lampo(S);
    }
    if (riprova && ST.viaBarra) ST.viaBarra(S);
    var testo = await apriBiglietto(st, io, { ms: tempoRimasto(R), verita: false, vero: vero, avviso: riprova ? avvisoVera(st) : null });
    if (!S.vivo()) return;
    if (testo && R.vm.fase === "scrittura") { if (!vero) { MIA = { dom: vm.domanda, testo: testo }; salvaMia(); } cb.onBalla(testo); }   // (l'host poi conferma, o dice "è la verità")
    ST.testoLeggio(S, io, testo ? "✅ fatto" : "😶 niente"); ST.faccia(S, io, testo ? "esulta" : "triste");
    await ST.suSchermo(S, 800);
    ST.faccia(S, io, null);
    if (R.vm.fase === "scrittura") ST.barra(S, [ el("p", { class: "bc-attesa", text: testo ? (vero ? "Fatto! Aspettiamo gli altri…" : "✅ La tua balla: «" + vis(testo) + "». Aspettiamo gli altri…") : "⏰ Tempo scaduto: salti questa balla, ma puoi votare" }), faccineB(R.t) ]);
  }
  // chi non scrive/vota adesso (guarda, oppure ha già finito): una riga e le faccine, mentre gli altri finiscono
  function attesaOnline(R, guardo) {
    var S = R.S, el = R.t.el, f = R.vm.fase;
    if (!S.vivo() || (f !== "scrittura" && f !== "voto")) return;
    var miaQui = !guardo && f === "scrittura" && MIA && MIA.dom === R.vm.domanda ? MIA.testo : "";
    ST.barra(S, [ el("p", { class: "bc-attesa", text: !guardo ? (miaQui ? "✅ La tua balla: «" + vis(miaQui) + "». Aspettiamo gli altri…" : "Fatto! Aspettiamo gli altri…") : testoGuardo(R) }), faccineB(R.t) ]);
  }
  // chi guarda: se intanto l'host l'ha messo tra chi gioca dal round dopo, la riga lo dice (cambia solo la scritta)
  // (12 nov 2026: senza la telecamera la riga si scrive prima che arrivi la foto con «prossimi»)
  function aggiornaAttesa(R) {
    var me = R.vm.players[idxDi(R.vm, R.cb.myId)]; if (me && !me.via) return;
    var p = R.S.barraEl.querySelector(".bc-attesa"), tx = testoGuardo(R);
    if (p && /^(👀|✋)/.test(p.textContent) && p.textContent !== tx) p.textContent = tx;
  }
  // la riga di chi non gioca questo round: aspetta il round dopo, guarda nella Sala, o guarda soltanto
  function testoGuardo(R) {
    var vm = R.vm, id = R.cb.myId;
    if ((vm.prossimi || []).indexOf(id) >= 0) return "✋ Giochi dal prossimo round: intanto guarda!";
    if ((vm.guarda || []).indexOf(id) >= 0) return "👀 Questa volta guardi: gioca chi è stato scelto.";
    return "👀 Stai guardando: alla prossima partita giochi anche tu.";
  }
  // chi guarda soltanto (col link "guarda", fuori dal torneo a eliminazione): le faccine e l'uscita le dà la targhetta del core
  function conTarga(t) { return !!(t && t.guarda && !t.eliminazione); }
  function faccineB(t) { return conTarga(t) || !t.faccine ? null : t.faccine(); }
  // tutti votano insieme, ognuno dal suo telefono; il tabellone resta sul maxischermo
  async function votaOnline(R, st) {
    var S = R.S, el = R.t.el, cb = R.cb, vm = R.vm, io = idxDi(vm, cb.myId), me = vm.players[io];
    var riprova = R.tua; R.tua = false;
    schermoTurno(st, null, "vota"); R.boxFatti = st.boxFatti; aggiornaFatti(R, vm, "vota", true);
    if (io < 0 || !me || me.via || (!riprova && (vm.fatti || []).indexOf(cb.myId) >= 0)) { await ST.suSchermo(S, 800); attesaOnline(R, io < 0 || !me || me.via); return; }
    if (eProt(st, io)) {   // «Parliamo di te» e la domanda è su di me: la verità la so, non voto
      ST.testoLeggio(S, io, "🤫 la sa"); await ST.suSchermo(S, 800);
      if (R.vm.fase === "voto") ST.barra(S, [ el("p", { class: "bc-attesa", text: "🤫 La domanda è su di te: non voti. Guarda chi ci casca!" }), faccineB(R.t) ]);
      return;
    }
    ST.accendiSolo(S, io); ST.testoLeggio(S, io, "🗳️ vota");
    if (!riprova) { ST.terzo(S, io, "Tutti al voto!", "Qual è la risposta vera?", "🗳️"); await ST.suLeggio(S, io, 700); ST.viaTerzo(S); ST.lampo(S); }
    var mia = function (sc) { return !!MIA && MIA.dom === R.vm.domanda && norm(sc.testo) === norm(MIA.testo); };
    var k = await apriVoto(st, io, { ms: tempoRimasto(R), mia: mia, avviso: riprova ? "✍️ Quella è la tua balla! Vota un'altra risposta." : null });
    if (!S.vivo()) return;
    if (k != null && R.vm.fase === "voto") cb.onVoto(k);
    ST.testoLeggio(S, io, k != null ? "✅ votato" : "😶 niente"); ST.faccia(S, io, "pensa");
    await ST.suSchermo(S, 800);
    ST.faccia(S, io, null);
    if (R.vm.fase === "voto") ST.barra(S, [ el("p", { class: "bc-attesa", text: k != null ? "Votato! Aspettiamo gli altri…" : "Aspettiamo gli altri…" }), faccineB(R.t) ]);
  }
  // chi ha già finito: le spunte sotto il maxischermo e sui leggii (si rifanno solo se cambia qualcosa)
  function aggiornaFatti(R, vm, cosa, forza) {
    var S = R.S, el = R.t.el, fatti = vm.fatti || [], k = cosa + "|" + fatti.join("|");
    if (!forza && R.kFatti === k) return;
    R.kFatti = k;
    var prot = vm.amici ? vm.prot : null;   // «Parliamo di te»: il protagonista scrive la verità e non vota
    if (R.boxFatti) {
      ST.vuota(R.boxFatti);
      vm.players.forEach(function (p) { if (p.via || (cosa === "vota" && p.id === prot)) return; var ok = fatti.indexOf(p.id) >= 0;
        R.boxFatti.appendChild(el("span", { class: ok ? "ok" : "" }, [ fac(el, p), el("span", { text: (ok ? "✅ " : "") + (p.id === R.cb.myId ? "Tu" : p.nome) }) ])); });
    }
    vm.players.forEach(function (p, i) {
      if (p.via) return; var ok = fatti.indexOf(p.id) >= 0;
      if (p.id === prot) return ST.testoLeggio(S, i, cosa === "vota" ? "🤫 la sa" : ok ? "✅ fatto" : "🤫 la verità");
      ST.testoLeggio(S, i, ok ? (cosa === "vota" ? "✅ votato" : "✅ fatto") : (cosa === "vota" ? "🗳️ vota" : "✍️ scrive"));
    });
  }
  // i punti del round scorrono sui leggii
  async function puntiOnline(R, vm) {
    var S = R.S, tot = vm.ultimo || {};
    ST.viaBarra(S); ST.accendiSolo(S, -1); ST.viaTerzo(S);
    await ST.largo(S, 900);
    for (var i = 0; i < vm.players.length; i++) {
      var p = vm.players[i]; if (p.via) continue;
      var d = tot[p.id] || 0;
      ST.puntiLeggio(S, i, P(p.punti), S.L[i] && S.L[i].valore === P(p.punti) ? 0 : P(d));
      ST.faccia(S, i, d > 0 ? "esulta" : "triste");
      await ST.dorme(320);
    }
    ST.pubblico(S, "applauso");
    await ST.dorme(1200); ST.tutteNormali(S);
  }
  function ordineB(vm) { return vm.players.filter(function (p) { return !p.via; }).sort(function (x, y) { return y.punti - x.punti; }); }
  async function classificaOnline(R, vm) {
    var S = R.S, el = R.t.el, cb = R.cb, tot = vm.ultimo || {};
    await ST.suSchermo(S, 800);
    ST.fermaTimer(S); ST.vuota(S.sch);
    var ultimoR = moltiplica(vm.giro + 1, vm.giri) > 1;
    schermoClassifica(S, el, ordineB(vm).map(function (p) { return { g: p, nome: p.nome, punti: p.punti, ultimo: tot[p.id] || 0, tu: p.id === cb.myId }; }),
      { giro: vm.giro + 1, giri: vm.giri, finale: ultimoR && !!vm.prossimaFinale, doppio: ultimoR && !vm.prossimaFinale });
    // "Si va avanti tra 12…" per tutti (il tempo lo tiene l'host); «⏩ Avanti» a chi gioca: si parte subito se lo tocca più di metà
    var sec = Math.max(1, Math.round(((R.vm.rimMs || 12000) - (Date.now() - R.vmTs)) / 1000)), k = "bc-notizia|" + vm.sessione + "|" + vm.giro;
    var conto = el("p", { class: "bc-attesa" }), me = vm.players[idxDi(vm, cb.myId)], bAv = null;
    if (me && !me.via) {
      bAv = el("button", { class: "btn btn-primario bc-avanti", type: "button", onclick: function () {
        if (bAv.disabled) return; R.avantiMio = k; bAv.disabled = true; aggiornaAvanti(R);
        try { if (navigator.vibrate) navigator.vibrate(10); } catch (e) {}
        cb.onAvanti();
      } }, [ el("span", { class: "tx", text: "⏩ Avanti" }), el("span", { class: "quanti" }) ]);
    }
    R.bAvanti = bAv; R.kAvanti = k;
    var tocca = !bAv && (vm.prossimi || []).indexOf(cb.myId) >= 0 ? el("p", { class: "bc-attesa", text: "✋ Al prossimo round giochi anche tu!" }) : null;
    ST.barra(S, [ conto, bAv || tocca, faccineB(R.t) ]);
    R.t.contoAvanti(conto, sec, null, k);
    aggiornaAvanti(R);
  }
  // «⏩ Avanti» sulla classifica del round: quanti l'hanno toccato (servono più di metà); il mio tocco resta segnato
  function aggiornaAvanti(R) {
    var b = R.bAvanti, vm = R.vm; if (!b || !b.isConnected || vm.fase !== "punti") return;
    var l = vm.avanti || [], mio = l.indexOf(R.cb.myId) >= 0 || R.avantiMio === R.kAvanti, n = l.length + (mio && l.indexOf(R.cb.myId) < 0 ? 1 : 0);
    var q = b.querySelector(".quanti"), tx = n + " su " + (vm.servono || 1);
    if (q.textContent !== tx) q.textContent = tx;
    var t0 = mio ? "✅ Avanti" : "⏩ Avanti", s = b.querySelector(".tx");
    if (s.textContent !== t0) s.textContent = t0;
    b.disabled = mio;
  }
  async function finaleOnline(R, vm) {
    var S = R.S, t = R.t, el = t.el, cb = R.cb, clas = vm.classifica || [];
    // vince il primo della classifica (chi è uscito sta in fondo); a pari punti vincono in tanti
    var gen = clas.map(function (r) { var p = vm.players[idxDi(vm, r.id)] || {}; return { id: r.id, nome: r.nome, omino: p.omino || null, punti: r.punti, via: r.via, tot: r.tot }; });
    salvaContatori(clas, cb.myId, true, vm.sessione);
    await schermoPodio(S, el, gen, true);
    if (!S.vivo()) return;
    var primi = clas.filter(function (r) { return r.pos === 1; });
    var titolo = !primi.length ? "Fine partita" : primi.length === 1 ? "Vince " + primi[0].nome + "!" : "Pareggio!";
    var s = t.schermata({ chiara: true, icona: "🏆", titolo: titolo, sotto: "La Balla Colossale" });
    var box = el("div", { style: "display:flex;flex-direction:column;gap:8px" });
    clas.forEach(function (r) {
      var p = vm.players[idxDi(vm, r.id)] || r;
      box.appendChild(el("div", { class: "bc-cl" + (r.pos === 1 ? " primo" : "") }, [
        el("span", { class: "pos", text: medaglia(r.pos) }), fac(el, p), el("span", { class: "nm", text: r.nome + (r.id === cb.myId ? " (tu)" : "") + (r.via ? " (uscito)" : "") }),
        el("span", { class: "pt", text: fmtP(r.punti) + " punti" }) ]));
    });
    s._contenuto.appendChild(box);
    // i tasti di fine comuni (all'host e a chi ha giocato), se li disegna il core: allora niente tasti nostri né "Aspetta l'host"
    // (la nota resta nascosta: serve solo se l'host chiude la stanza)
    // (chi guarda soltanto: i tasti di fine del core se ci sono, se no la targhetta "👀 Guardi · ✕" basta: niente Esci nostro)
    var haGiocato = cb.sonoHost || idxDi(vm, cb.myId) >= 0, targa = conTarga(t);
    var comuni = (haGiocato || targa) && t.tastiFine(s._piede, cb.sonoHost ? { host: true, nuova: cb.onNuova, esci: cb.onEsci } : { host: false, esci: cb.onEsci });
    if (targa) s.classList.add("bc-con-targa");
    if (cb.sonoHost) { if (!comuni) s._piede.appendChild(el("button", { class: "btn btn-primario", text: "↻ Nuova partita (stessi amici)", onclick: cb.onNuova })); }
    else {
      var guardo = !haGiocato && (vm.guarda || []).indexOf(cb.myId) >= 0, aspetto = !haGiocato && (vm.prossimi || []).indexOf(cb.myId) >= 0;
      s._contenuto.appendChild(R.notaFine = el("p", { class: "modulo-nota", style: "text-align:center", text: cb.chiusa ? NOTA_CHIUSA
        : comuni ? "" : guardo ? "👀 Questa volta hai guardato." : aspetto ? "✋ Sei dentro: alla prossima partita giochi anche tu!"
        : targa ? "👀 Hai guardato: se l'host fa un'altra partita, entri anche tu." : "⏳ Aspetta l'host: se fa un'altra partita, torni da solo nella saletta." }));
      if (!R.notaFine.textContent) R.notaFine.hidden = true;
    }
    var fa = faccineB(t);   // le faccine mentre si guarda la classifica
    if (fa) { fa.style.marginTop = "10px"; s._contenuto.appendChild(fa); }
    if (!comuni && !targa) s._piede.appendChild(el("button", { class: "btn btn-fantasma", text: "🏠 Esci", onclick: cb.onEsci }));
    t.mostra(s);
  }

  // =========================================================
  //  LO STILE (prefisso bc-)
  // =========================================================
  function assicuraStile() {
    if (document.getElementById("sg-balla-css")) return;
    var s = document.createElement("style"); s.id = "sg-balla-css";
    s.textContent = [
      "@font-face{font-family:'BC Titolo';font-style:normal;font-weight:900;font-display:swap;src:url(data:font/woff2;base64," + FONT_TITOLO + ") format('woff2')}",
      ".bc-sch .fac,.bc-chi .fac,.bc-cl .fac{border-radius:50%;overflow:hidden;background:rgba(255,255,255,.12);flex:0 0 auto}",
      ".bc-sch .fac svg,.bc-chi .fac svg,.bc-cl .fac svg{width:100%;height:100%;display:block}",
      // il maxischermo
      ".bc-sch{flex:1;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:0 4px}",
      ".bc-chi-sch{font-size:22px;font-weight:900;color:#fff}",
      ".bc-giro{font-size:14px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--o-oro-testo)}",
      ".bc-fatti{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:96%}",
      ".bc-fatti>span{display:flex;align-items:center;gap:6px;font-size:16px;font-weight:800;background:rgba(255,255,255,.1);border-radius:99px;padding:3px 11px 3px 3px}",
      ".bc-fatti>span.ok{background:rgba(55,212,126,.25)}",
      ".bc-fatti .fac{width:30px;height:30px}",
      // il tabellone delle risposte
      ".bc-sch.tab{justify-content:flex-start;justify-content:safe center;overflow:visible;gap:10px;padding-top:46px}",
      ".bc-sch.tab .bc-notizia{font-size:calc(var(--fs,18px) + 1px)}.bc-sch.tab .bc-ritaglio{padding:9px 12px 11px}",
      ".bc-sch.tab.soloFacce .bc-fatti{gap:4px}.bc-sch.tab.soloFacce .bc-fatti>span{padding:2px}.bc-sch.tab.soloFacce .bc-fatti>span>span:not(.fac){display:none}.bc-sch.tab.corto .bc-ritaglio{display:none}",
      ".bc-sch.tab.minimo{gap:6px}.bc-sch.tab.minimo .bc-tab{gap:4px}.bc-sch.tab.minimo .bc-riga{padding:3px 8px 3px 4px}.bc-sch.tab.minimo .bc-riga .n{width:22px;height:22px;font-size:12px}.bc-sch.tab.minimo .bc-chi-sch{font-size:18px}",
      ".bc-tab{display:flex;flex-direction:column;gap:7px;width:100%;max-width:440px;perspective:700px}",
      ".bc-riga{display:flex;align-items:center;gap:9px;text-align:left;background:#f5efe0;color:#1b1610;border-radius:12px;padding:6px 10px 6px 6px;box-shadow:0 5px 14px rgba(0,0,0,.35);transform-origin:50% 0;transition:transform .4s cubic-bezier(.3,1.4,.5,1),opacity .3s}",
      ".bc-riga.giu{transform:none;opacity:.3;background:rgba(255,255,255,.14)}.bc-riga.giu .tx{visibility:hidden}",
      ".bc-riga .n{flex:0 0 auto;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#1b1610;color:#f5efe0;font-weight:900;font-size:14px}",
      ".bc-riga .tx{flex:1;min-width:0;font-family:" + TESTO + ";font-size:var(--fs,18px);font-weight:800;line-height:1.2;overflow-wrap:anywhere}",
      ".bc-riga .vv{flex:0 0 auto;display:flex;max-width:45%;flex-wrap:wrap;justify-content:flex-end}",
      ".bc-riga .vv .fac{width:26px;height:26px;margin-left:-6px;border:2px solid #fffdf4;background:#e9e3d2;animation:bcPop .35s cubic-bezier(.3,1.6,.5,1) both}",
      ".bc-chi-sch.pulsa{animation:bcPulsa 1.1s ease-in-out infinite}",
      "@keyframes bcPulsa{50%{transform:scale(1.07)}}",
      // il ritaglio di giornale
      ".bc-ritaglio{position:relative;width:100%;max-width:440px;margin:0 auto;padding:9px 12px 11px;box-sizing:border-box;text-align:left;color:#1b1610;",
        "background:repeating-linear-gradient(0deg,rgba(80,60,30,.03) 0 2px,transparent 2px 5px),#f5efe0;border-radius:2px;box-shadow:0 12px 28px rgba(0,0,0,.5);transform:rotate(-.8deg)}",
      ".bc-testata{text-align:center;border-bottom:3px double #1b1610;padding-bottom:2px}",
      ".bc-ritaglio .bc-gn{font:900 23px/1.08 " + TITOLO + ";letter-spacing:-.01em}",   // (più forte di «.st-schermo div» dello studio)
      ".bc-gs{font:800 9px/1.2 " + TESTO + ";letter-spacing:.12em;text-transform:uppercase;color:#5a4f40;margin:2px 0 1px}",
      ".bc-griga{display:flex;justify-content:space-between;gap:8px;font:800 9.5px/1.25 " + TESTO + ";letter-spacing:.04em;text-transform:uppercase;border-bottom:1px solid #1b1610;padding:3px 1px;white-space:nowrap}",
      ".bc-griga span{overflow:hidden;text-overflow:ellipsis}.bc-griga span:first-child{flex:0 1 auto;min-width:0}",
      ".bc-occhio{font:800 11px/1.25 " + TESTO + ";letter-spacing:.12em;color:#c92a2a;text-transform:uppercase;margin:7px 0 3px}",
      ".bc-ritaglio.finale .bc-occhio{display:inline-block;color:#fff;background:#c92a2a;padding:2px 7px;border-radius:2px}",
      ".bc-colonne{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:9px;border-top:1px solid #1b1610;padding-top:6px}",
      ".bc-colonne i{display:block;height:4px;background:#d8cfbb;margin:0 0 4px;border-radius:2px}.bc-colonne i:nth-child(3n){width:70%}",
      ".bc-ritaglio.grande{padding:11px 14px 13px}.bc-ritaglio.grande .bc-gn{font-size:31px}.bc-ritaglio.grande .bc-notizia{font-size:var(--ft,26px);line-height:1.14}",
      ".bc-ritaglio.grande.bassa .bc-colonne,.bc-ritaglio.grande.bassa .bc-gs{display:none}",
      ".bc-notizia{margin:0;font:900 19px/1.18 " + TITOLO + ";font-variant-numeric:lining-nums;letter-spacing:-.003em;overflow-wrap:break-word}",
      ".bc-buco{display:inline-block;min-width:4.2em;padding:0 .14em;vertical-align:-.12em;line-height:1.05;background:#ffd84a;border-bottom:.09em solid #c92a2a;border-radius:.06em .06em 0 0}",
      ".bc-buco:empty{height:.95em}",
      ".bc-buco.pieno{min-width:0;vertical-align:baseline;background:#ffe98a;font-family:" + TESTO + ";font-weight:800;font-size:.9em;letter-spacing:0;color:#14306b}",
      // il foglio segreto
      ".bc-velo{position:absolute;inset:0;z-index:21;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:calc(12px + env(safe-area-inset-top)) 12px 24px;background:radial-gradient(80% 40% at 80% 0%,rgba(139,61,255,.22),transparent 70%),#0d1020;opacity:0;pointer-events:none;transition:opacity .25s}",
      ".bc-velo.on{opacity:1;pointer-events:auto}",
      ".bc-carta{position:relative;margin:0 auto;max-width:460px;display:flex;flex-direction:column;gap:12px;animation:bcEntra .55s cubic-bezier(.2,1.2,.4,1) both}",
      ".bc-velo.via .bc-carta{animation:bcEsce .3s ease-in forwards}",
      "@keyframes bcEntra{from{transform:translateY(40%) scale(.3) rotate(-6deg);opacity:0}to{transform:none;opacity:1}}",
      "@keyframes bcEsce{to{transform:translateY(55%) scale(.3) rotate(5deg);opacity:0}}",
      ".bc-chi{display:flex;align-items:center;gap:8px;color:#fff;font-size:20px;padding-right:46px}",
      ".bc-chi .fac{width:44px;height:44px}",
      ".bc-chi small{margin-left:auto;font-size:13px;font-weight:800;color:var(--o-oro-testo)}",
      ".bc-scrivi{display:block;background:#fffdf4;border-radius:14px;padding:10px 12px 8px;box-shadow:0 8px 20px rgba(0,0,0,.35)}",
      ".bc-et{display:block;font-size:14px;font-weight:900;color:#5a4a9a;margin-bottom:4px}",
      ".bc-carta>.bc-et{color:#fff;font-size:16px;text-align:center;margin:2px 0 -4px}",
      ".bc-penna{display:block;width:100%;box-sizing:border-box;resize:none;border:0;border-bottom:2px dashed rgba(27,22,16,.3);background:transparent;font-family:" + TESTO + ";font-size:22px;font-weight:800;line-height:1.3;color:#14306b;padding:2px;outline:none;border-radius:0}",
      ".bc-pezzo{display:flex;align-items:flex-start;gap:8px;margin-top:4px}.bc-pezzo .nn{flex:0 0 auto;width:26px;height:26px;margin-top:4px;border-radius:50%;background:#c92a2a;color:#fff;display:flex;align-items:center;justify-content:center;font:900 14px " + TESTO + "}.bc-pezzo .cc{flex:1;min-width:0}",
      ".bc-scrivi.doppia .bc-penna{font-size:20px}.bc-scrivi.doppia .bc-conta{margin-top:1px}",
      ".bc-penna:focus{border-bottom-color:#c92a2a}",
      ".bc-conta{text-align:right;font-size:14px;font-weight:800;color:#62668a;margin-top:4px}.bc-conta.on{color:#8a5a00}.bc-conta.poche{color:#c4213f}",
      ".bc-avviso{display:none;background:var(--o-ambra);color:#2a1a00;border-radius:12px;padding:9px 12px;font-weight:800;font-size:15px;line-height:1.35}",
      ".bc-avviso.on{display:block;animation:bcScuoti .4s}",
      "@keyframes bcScuoti{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}",
      ".bc-ok{width:100%;margin:0;position:sticky;bottom:0;z-index:2;box-shadow:0 -6px 16px rgba(10,12,24,.6)}",   // il tasto resta sempre a vista
      ".bc-tempo-riga{display:flex;align-items:center;gap:8px}.bc-tempo-riga .bc-tempo{flex:1}",
      ".bc-sec{min-width:30px;text-align:right;font-size:17px;font-weight:900;color:var(--o-oro-testo);font-variant-numeric:tabular-nums}.bc-sec.poco{color:var(--o-rosso-testo)}",
      // ⌨️ con la tastiera aperta: niente scorrere, la notizia riempie lo spazio (la scritta la regola grandeNotizia), sotto il campo e «Fatto» in una riga
      ".bc-velo.tastiera{overflow:hidden;display:flex;flex-direction:column;padding:8px}",
      ".bc-carta.tastiera{flex:1;min-height:0;width:100%;max-width:520px;display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto minmax(0,1fr) auto auto;grid-template-areas:'t t' 'n n' 's k' 'a a';gap:6px;animation:none}",
      ".bc-carta.tastiera>.bc-tempo-riga{grid-area:t}.bc-carta.tastiera>.bc-ritaglio{grid-area:n;min-height:0;overflow:hidden;max-width:none;display:flex;flex-direction:column;justify-content:center;padding:8px 12px}.bc-carta.tastiera>.bc-scrivi{grid-area:s;min-width:0}.bc-carta.tastiera>.bc-ok{grid-area:k;width:auto;align-self:stretch;position:static;padding:0 14px;box-shadow:none}.bc-carta.tastiera>.bc-avviso{grid-area:a;padding:6px 10px;font-size:14px}",
      ".bc-carta.tastiera>.bc-chi,.bc-carta.tastiera .bc-testata,.bc-carta.tastiera .bc-griga,.bc-carta.tastiera .bc-occhio,.bc-carta.tastiera .bc-colonne,.bc-carta.tastiera .bc-et{display:none}",
      ".bc-carta.tastiera .bc-notizia{line-height:1.14}.bc-carta.tastiera .bc-scrivi{padding:6px 10px 4px;border-radius:12px}.bc-carta.tastiera .bc-penna{font-size:18px;line-height:1.25}.bc-carta.tastiera .bc-conta{font-size:13px;margin-top:1px}.bc-carta.tastiera .bc-scrivi.doppia .bc-penna{font-size:17px}",
      // le scelte da votare
      ".bc-scelte{display:flex;flex-direction:column;gap:8px}",
      ".bc-scelta .n{flex:0 0 auto;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#1b1610;color:#f5efe0;font-family:" + TESTO + ";font-weight:800;font-size:13px}",
      ".bc-tempo{height:6px;border-radius:3px;background:rgba(255,255,255,.18);overflow:hidden}.bc-tempo i{display:block;height:100%;width:100%;background:var(--o-oro);transform-origin:0 50%;will-change:transform}.bc-tempo.poco i{background:var(--o-rosso-testo)}",
      ".bc-attesa{margin:0;text-align:center;font-weight:800;color:var(--o-tenue)}",
      // chi guarda soltanto: in basso il posto della targhetta del core ("👀 Guardi · 😂 · ✕")
      ".st-vista.st-con-targa .st-barra{padding-bottom:calc(64px + env(safe-area-inset-bottom))}.st-vista.st-con-targa.con-barra .st-sch-in{padding-bottom:152px}",
      ".bc-con-targa{padding-bottom:calc(58px + env(safe-area-inset-bottom))}",
      ".bc-lobby{margin:0;font-size:14px;line-height:1.45}",
      ".bc-scelta{display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:2px solid #e2d8c3;border-radius:14px;background:#f5efe0;color:#1b1610;padding:9px 12px;font-family:" + TESTO + ";font-size:19px;font-weight:800;line-height:1.22;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .12s}",
      ".bc-scelta:active{transform:scale(.97)}",
      ".bc-scelta .tx{flex:1;min-width:0;overflow-wrap:anywhere}",
      ".bc-scelta.sel{border-color:var(--n-lampone);background:#ffe3ec;box-shadow:0 0 0 3px rgba(224,34,90,.4)}",
      ".bc-scelta.mia{opacity:.55;cursor:default}",
      ".bc-scelta .tag{flex:0 0 auto;font-family:system-ui,sans-serif;font-size:11px;font-weight:900;color:#fff;background:#5a4a9a;border-radius:99px;padding:3px 8px}",
      ".bc-scelte.tante .bc-scelta{font-size:var(--fs,16px);line-height:1.18;padding:6px 10px}",
      ".bc-carta.piccola .bc-notizia{font-size:14px}.bc-carta.piccola .bc-testata,.bc-carta.piccola .bc-griga,.bc-carta.piccola .bc-occhio{display:none}.bc-carta.piccola .bc-chi small{display:none}",
      // tantissime risposte: su due colonne e, se non basta, senza la notizia (è già sul maxischermo)
      ".bc-carta.due .bc-scelte{display:grid;grid-template-columns:1fr 1fr;gap:6px}.bc-carta.due .bc-scelta{padding:5px 7px;gap:5px;align-items:flex-start}.bc-carta.due .bc-scelta .n{width:20px;height:20px;font-size:11px}",
      ".bc-carta.due .bc-scelta .tag{position:absolute;right:4px;bottom:-7px;font-size:9px;padding:1px 5px}.bc-carta.due .bc-scelta{position:relative}",
      ".bc-carta.senza .bc-ritaglio{display:none}",
      ".bc-carta.mini .bc-notizia{font-size:12px;line-height:1.25}.bc-carta.mini .bc-scelta{padding-top:3px;padding-bottom:3px}",
      ".bc-carta.stretta{gap:8px}.bc-carta.stretta .bc-ritaglio{padding:8px 12px 10px}.bc-carta.stretta .bc-notizia{font-size:15px}.bc-carta.stretta .bc-scelte{gap:6px}.bc-carta.stretta .bc-chi{font-size:17px}.bc-carta.stretta .bc-chi .fac{width:36px;height:36px}",
      // la rivelazione
      ".bc-sch.riv{gap:22px}",
      ".bc-big{position:relative;width:100%;max-width:420px;box-sizing:border-box;padding:22px 16px 30px;border-radius:16px;background:#f5efe0;color:#1b1610;box-shadow:0 14px 30px rgba(0,0,0,.45);transform:rotate(-1deg);animation:bcEntra .5s cubic-bezier(.2,1.2,.4,1) both}",
      ".bc-big .tx{font-family:" + TESTO + ";font-size:28px;font-weight:800;line-height:1.2;overflow-wrap:anywhere}",
      ".bc-timbro{position:absolute;right:8px;bottom:-26px;padding:2px 14px;border:5px solid currentColor;border-radius:10px;font-family:system-ui,sans-serif;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:.04em;background:rgba(255,255,255,.88);transform:rotate(12deg) scale(3);opacity:0;pointer-events:none}",
      ".bc-timbro.balla{color:#e03131}.bc-timbro.vero{color:#2b8a3e}",
      ".bc-timbro.on{animation:bcTimbro .45s cubic-bezier(.3,1.5,.5,1) forwards}",
      "@keyframes bcTimbro{from{transform:rotate(12deg) scale(3);opacity:0}to{transform:rotate(12deg) scale(1);opacity:1}}",
      ".bc-gente,.bc-autori{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}",
      ".bc-votante{display:flex;align-items:center;gap:6px;font-size:17px;font-weight:800;background:rgba(255,255,255,.12);border-radius:99px;padding:3px 12px 3px 3px;animation:bcPop .35s cubic-bezier(.3,1.6,.5,1) both}",
      ".bc-votante .fac{width:34px;height:34px}",
      ".bc-votante.cascato{background:rgba(255,93,108,.28)}",
      ".bc-votante.giusto{background:rgba(55,212,126,.35)}",
      ".bc-votante.autore{background:rgba(224,34,90,.3);font-size:19px}",
      ".bc-votante.autore .fac{width:42px;height:42px}",
      "@keyframes bcPop{from{transform:scale(.3);opacity:0}to{transform:none;opacity:1}}",
      ".bc-nessuno{font-weight:800;color:var(--o-tenue)}",
      ".bc-redazione{font-size:19px;font-weight:900;background:var(--o-carta-2);border-radius:99px;padding:5px 14px}",
      // i premi della serata
      ".bc-premi{gap:12px}",
      ".bc-premio-riga{display:flex;align-items:center;gap:10px;width:100%;max-width:440px;box-sizing:border-box;background:rgba(255,255,255,.08);border-radius:16px;padding:8px 10px;text-align:left;animation:bcPop .45s cubic-bezier(.3,1.6,.5,1) both}",
      ".bc-premio-riga .ic{font-size:34px;flex:0 0 auto}",
      ".bc-premio-riga .cosa{flex:1;min-width:0;display:flex;flex-direction:column}.bc-premio-riga .cosa b{font-size:18px;color:var(--o-oro-testo)}.bc-premio-riga .cosa small{font-size:13px;font-weight:700;color:var(--o-tenue)}",
      ".bc-premio-riga .chi{display:flex;flex-direction:column;gap:4px;align-items:flex-end;flex:0 1 auto;min-width:0}.bc-premio-riga .bc-votante{font-size:15px;padding:2px 10px 2px 2px}.bc-premio-riga .bc-votante .fac{width:28px;height:28px}",
      ".bc-sotto{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%}",
      ".bc-autore{display:flex;flex-direction:column;align-items:center;gap:6px;animation:bcPop .4s .1s both}",
      ".bc-autore small,.bc-intera small{font-size:13px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--o-tenue)}",
      ".bc-intera{display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;animation:bcPop .45s .1s both}",
      ".bc-intera .bc-ritaglio{transform:rotate(.8deg)}",
      ".bc-premio{font-size:18px;font-weight:900;padding:6px 14px;border-radius:99px;animation:bcPop .4s .25s both}",
      ".bc-premio.si{background:var(--o-verde);color:var(--o-verde-testo)}.bc-premio.no{background:rgba(255,93,108,.3);color:#ffd0d5}",
      ".bc-ignorate{display:flex;flex-direction:column;gap:8px;width:100%;max-width:420px}",
      ".bc-ign{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);border-radius:12px;padding:8px 12px;text-align:left;animation:bcPop .35s both}",
      ".bc-ign .tx{flex:1;min-width:0;font-family:" + TESTO + ";font-size:18px;font-weight:800;overflow-wrap:anywhere}",
      ".bc-ign .di{flex:0 0 auto;max-width:40%;font-size:13px;font-weight:800;color:var(--o-oro-testo);text-align:right}",
      // la classifica
      ".bc-clas{flex:1;display:flex;flex-direction:column;justify-content:center;gap:8px}",
      ".bc-clas h2{margin:0 0 6px;text-align:center;font-size:24px}",
      ".bc-cl{display:flex;align-items:center;gap:10px;padding:6px 12px 6px 6px;border-radius:14px;background:rgba(255,255,255,.07);animation:bcPop .45s ease both}",
      ".bc-cl.primo{background:color-mix(in srgb,var(--n-monete) 18%,transparent);border:1px solid color-mix(in srgb,var(--n-monete) 50%,transparent)}",
      ".bc-cl .pos{width:28px;text-align:center;font-weight:900}",
      ".bc-cl .fac{width:40px;height:40px}",
      ".bc-clas.tanti{gap:4px;justify-content:flex-start;padding-bottom:6px}.bc-clas.tanti h2{font-size:19px;margin:0 0 2px}.bc-clas.tanti .bc-cl{padding:3px 10px 3px 4px}.bc-clas.tanti .bc-cl .fac{width:28px;height:28px}",
      ".bc-cl .nm{flex:1;font-weight:800;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".bc-cl .pt{font-weight:900;color:var(--n-monete)}",
      ".bc-cl .pi{font-size:12px;font-weight:800;color:var(--o-verde);margin-left:4px}",
      // la classifica finale è una schermata dell'app (Notte vivace, classe .oro): righe di vetro sollevato, il primo col filo d'oro
      // (la classifica dopo ogni round, nello studio, resta com'è: lì non c'è .oro)
      ".oro .bc-cl{border:1px solid var(--o-filo);background:linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,0)),var(--o-carta);box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 10px 24px -14px rgba(0,0,0,.8)}",
      ".oro .bc-cl.primo{border-color:color-mix(in srgb,var(--n-monete) 60%,transparent)}",
      ".oro .bc-cl .fac{background:radial-gradient(circle at 50% 35%,var(--o-carta-2),var(--o-carta-piena));box-shadow:0 0 0 1px var(--o-filo-oro)}",
      ".oro .bc-cl .pt{color:var(--n-monete)}",
      // «Parliamo di te»: un foglietto giallo al posto del ritaglio di giornale; il foglio della verità
      ".bc-ritaglio.amici{background:repeating-linear-gradient(0deg,rgba(60,90,200,.10) 0 1px,transparent 1px 26px),#fff4a8;transform:rotate(1.2deg);padding:12px 14px 14px}",
      ".bc-ritaglio.amici .bc-testata{text-align:left;font:900 11px/1.3 " + TESTO + ";letter-spacing:.14em;text-transform:uppercase;color:#7048e8;border-bottom:2px solid #7048e8;padding-bottom:5px;margin-bottom:7px}",
      ".bc-ritaglio.amici .bc-notizia{font:800 19px/1.32 " + TESTO + "}.bc-ritaglio.amici.grande .bc-notizia{font-size:var(--ft,23px)}",
      ".bc-catsch{gap:12px}",
      ".bc-chi-cat{display:flex;align-items:center;justify-content:center;gap:10px;line-height:1.2}.bc-chi-cat .fac{width:46px;height:46px}",
      ".bc-perche{font-size:15px;font-weight:800;color:var(--o-tenue);margin-top:-6px}",
      ".bc-cats{display:flex;flex-direction:column;gap:10px;width:100%;max-width:380px}",
      ".bc-cat-c{display:flex;align-items:center;gap:14px;width:100%;min-height:62px;padding:10px 16px;border:2px solid #e2d8c3;border-radius:16px;background:#f5efe0;color:#1b1610;font:800 21px/1.15 " + TESTO + ";text-align:left;box-shadow:0 8px 18px rgba(0,0,0,.4);cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:transform .15s,opacity .3s,box-shadow .2s;animation:bcPop .4s cubic-bezier(.3,1.6,.5,1) both}",
      ".bc-cat-c:nth-child(2){animation-delay:.1s}.bc-cat-c:nth-child(3){animation-delay:.2s}",
      ".bc-cat-c .ic{font-size:30px;line-height:1;flex:0 0 auto}.bc-cat-c:not(:disabled):active{transform:scale(.96)}.bc-cat-c:disabled{cursor:default}",
      ".bc-cat-c.toccata,.bc-cat-c.scelta{border-color:var(--n-lampone);box-shadow:0 0 0 4px rgba(224,34,90,.45),0 8px 18px rgba(0,0,0,.4);transform:scale(1.04)}",
      ".bc-cat-c.spenta{opacity:.32;transform:scale(.96)}",
      ".bc-scrivi.vero{box-shadow:0 0 0 3px var(--o-verde),0 8px 20px rgba(0,0,0,.35)}.bc-scrivi.vero .bc-et{color:#2b8a3e}",
      // «😂 Che balla!»: il tasto delle risate sul biglietto (in basso a sinistra; il timbro è a destra) e nella lista
      ".bc-big.con-ride{margin-bottom:14px}.bc-big.con-ride .bc-timbro{font-size:24px;padding:2px 11px;border-width:4px}",
      ".bc-ride{position:absolute;left:6px;bottom:-24px;z-index:2;display:flex;align-items:center;gap:4px;min-height:44px;padding:3px 12px 3px 7px;border:3px solid var(--o-filo-oro);border-radius:99px;",
        "background:var(--o-carta-piena);color:var(--o-testo);font:900 15px system-ui,sans-serif;box-shadow:0 6px 14px rgba(0,0,0,.4);cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;animation:bcPop .4s cubic-bezier(.3,1.6,.5,1) both;transition:transform .12s}",
      ".bc-ride:active{transform:scale(.92)}",
      ".bc-ride .em{font-size:22px;line-height:1}.bc-ride .nn{min-width:0;font-size:16px}.bc-ride .nn:not(:empty){margin-left:2px;background:var(--o-scuro);border-radius:99px;padding:0 8px;color:var(--o-scuro-testo)}",
      ".bc-ride.mio{background:var(--o-tasto);color:var(--o-tasto-testo);border-color:transparent}.bc-ride.mio .rt:after{content:' ✓'}",
      ".bc-ride.mia,.bc-ride:disabled{background:var(--o-carta-2);color:var(--o-tenue);cursor:default;box-shadow:none}",
      ".bc-ride.no{animation:bcScuoti .35s}",
      ".bc-ride.pic{position:relative;left:auto;bottom:auto;min-height:40px;padding:2px 10px 2px 6px;border-width:2px;font-size:14px;flex:0 0 auto}.bc-ride.pic .em{font-size:20px}.bc-ride.pic .nn{font-size:14px}",
      ".bc-vola{position:absolute;bottom:60%;font-size:26px;pointer-events:none;animation:bcVola 1.2s ease-out both}",
      "@keyframes bcVola{from{transform:translate(-50%,0) scale(.6);opacity:1}to{transform:translate(-50%,-90px) scale(1.3) rotate(-14deg);opacity:0}}",
      ".bc-ign{position:relative}",
      // la Balla d'oro del round
      ".bc-oro{gap:14px}",
      ".bc-coppa{font-size:56px;line-height:1;animation:bcPop .5s cubic-bezier(.3,1.6,.5,1) both}",
      ".bc-big.oro{background:linear-gradient(135deg,#fff8d6,#ffe066);box-shadow:0 0 0 4px var(--n-monete),0 14px 30px rgba(0,0,0,.45);padding:16px 16px 18px}",
      ".bc-big.oro .tx{font-size:26px}",
      ".bc-premio.oro{background:var(--n-monete);color:#3b2a00;font-family:inherit}",
      // «⏩ Avanti» sulla classifica del round
      ".bc-avanti{display:flex;align-items:center;justify-content:center;gap:10px}.bc-avanti .quanti{font-size:14px;font-weight:800;background:rgba(255,255,255,.22);border-radius:99px;padding:2px 10px}",
      "@media (prefers-reduced-motion:reduce){.bc-carta,.bc-big,.bc-votante,.bc-timbro.on,.bc-cl,.bc-ign,.bc-ride,.bc-vola,.bc-coppa{animation:none}.bc-timbro.on{transform:rotate(12deg);opacity:1}}",
      // 🎬 LA BALLA RIFATTA (20 nov 2026): rivelazione «A», classifica coi sorpassi, podio coi premi, voto pieno
      ".bc-sch.riv2{justify-content:flex-start;gap:12px;padding:6px 6px 8px;width:100%;box-sizing:border-box}",
      ".bc-riv-testa{width:100%;max-width:460px}.bc-riv-testa .bc-ritaglio{max-width:none;padding:7px 12px 9px}.bc-riv-testa .bc-notizia{font-size:clamp(14px,calc(var(--alt,640px) * .024),19px)}",
      ".bc-riv-testa .bc-testata,.bc-riv-testa .bc-griga{display:none}",
      ".bc-ritaglio.stampata .bc-buco.pieno{background:linear-gradient(transparent 50%,rgba(255,216,74,.9) 50%);color:#16130c;border:0;animation:bcStampa .6s ease-out both}",
      "@keyframes bcStampa{from{color:transparent;letter-spacing:.3em}to{color:#16130c;letter-spacing:normal}}",
      ".bc-riv-centro{flex:0 0 auto;min-height:0;width:100%;display:flex;align-items:center;justify-content:center}.bc-sch.riv2>.bc-giro{margin-top:clamp(8px,calc(var(--alt,640px) * .03),28px);margin-bottom:28px}.bc-sch.riv2>.bc-sotto{margin-bottom:auto}",
      ".bc-sch.riv2 .bc-big{max-width:460px;padding:clamp(24px,calc(var(--alt,640px) * .05),46px) 18px}",
      ".bc-sch.riv2 .bc-big .tx{font-size:clamp(26px,calc(var(--alt,640px) * .046),40px)}.bc-sch.riv2 .bc-big.lunga .tx{font-size:clamp(22px,calc(var(--alt,640px) * .036),32px)}.bc-sch.riv2 .bc-big.lunghissima .tx{font-size:clamp(18px,calc(var(--alt,640px) * .029),26px)}",
      ".bc-sch.riv2 .bc-big .bc-timbro{bottom:auto;top:-22px;right:6px;font-size:clamp(24px,calc(var(--alt,640px) * .04),34px)}",
      ".bc-big.vera{box-shadow:0 0 0 4px #37d47e,0 0 34px rgba(55,212,126,.5),0 14px 30px rgba(0,0,0,.45)}",
      ".bc-riv-gente{display:flex;flex-direction:column;align-items:center;gap:8px;min-height:calc(var(--alt,640px) * .1)}",
      ".bc-giro.piccolo{font-size:12px;letter-spacing:.16em;color:var(--o-tenue)}",
      ".bc-votante.grande{font-size:clamp(16px,calc(var(--alt,640px) * .026),21px);padding:4px 14px 4px 4px}.bc-votante.grande .fac{width:clamp(34px,calc(var(--alt,640px) * .056),48px);height:clamp(34px,calc(var(--alt,640px) * .056),48px)}",
      ".bc-autore{flex-direction:row;flex-wrap:wrap;justify-content:center;width:100%}",
      ".bc-autore-sch{display:flex;align-items:center;gap:12px;padding:10px 18px 10px 10px;border-radius:20px;background:linear-gradient(180deg,rgba(224,34,90,.28),rgba(224,34,90,.08));box-shadow:inset 0 0 0 1.5px rgba(224,34,90,.6);animation:bcPop .45s cubic-bezier(.3,1.6,.5,1) both}",
      ".bc-autore-sch .fac{width:clamp(46px,calc(var(--alt,640px) * .075),64px);height:clamp(46px,calc(var(--alt,640px) * .075),64px)}",
      ".bc-autore-sch .tx{display:flex;flex-direction:column;align-items:flex-start;text-align:left;line-height:1.1}.bc-autore-sch small{font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--o-tenue)}",
      ".bc-autore-sch b{font-size:clamp(18px,calc(var(--alt,640px) * .03),24px)}.bc-autore-sch .pp{font-size:clamp(22px,calc(var(--alt,640px) * .036),30px);font-weight:900;color:#6ff0a6}",
      ".bc-volapunti{position:fixed;z-index:9999;margin:-18px 0 0 -40px;width:80px;text-align:center;font:900 26px/36px system-ui,sans-serif;color:#6ff0a6;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none;transition:transform .85s cubic-bezier(.5,0,.25,1),opacity .85s ease-in}",
      ".bc-preso{animation:bcPreso .7s ease-out}@keyframes bcPreso{0%{box-shadow:0 0 0 0 rgba(111,240,166,.9)}100%{box-shadow:0 0 0 12px rgba(111,240,166,0)}}",
      ".bc-ign-sch{justify-content:flex-start;gap:12px;padding:6px 6px 8px}.bc-ign-sch>.bc-chi-sch{margin-top:clamp(8px,calc(var(--alt,640px) * .03),28px)}.bc-ign-sch>:last-child{margin-bottom:auto}.bc-ign-sch .bc-ign .tx{font-size:clamp(17px,calc(var(--alt,640px) * .028),22px)}",
      ".bc-clas2{width:100%;max-width:460px;margin:0 auto;justify-content:flex-start;gap:8px;padding:8px 4px}",
      ".bc-clas2 h2{margin:0;font-size:24px}.bc-clas2>.bc-giro{text-align:center;font-size:12px}",
      ".bc-frase{text-align:center;font-weight:900;font-size:clamp(15px,calc(var(--alt,640px) * .024),18px);padding:9px 12px;border-radius:14px;background:linear-gradient(90deg,#f0306a,#8b3dff);color:#fff;box-shadow:0 8px 22px rgba(224,34,90,.35)}",
      ".bc-clas2 .bc-cl{position:relative;overflow:hidden;padding:clamp(6px,calc(var(--alt,640px) * .012),11px) 12px clamp(6px,calc(var(--alt,640px) * .012),11px) 8px}",
      ".bc-clas2 .bc-cl>*{position:relative}.bc-clas2 .bc-cl .barra{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,rgba(224,34,90,.32),rgba(224,34,90,.04))}",
      ".bc-clas2 .bc-cl .pos{width:30px;font-size:19px;color:var(--o-oro-testo)}",
      ".bc-clas2 .bc-cl .nm{display:flex;flex-direction:column;white-space:normal}.bc-clas2 .bc-cl .nm b{font-size:17px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bc-clas2 .bc-cl .nm small{font-size:12px;font-weight:700;color:var(--o-tenue)}",
      ".bc-clas2 .bc-cl .pt{font-size:clamp(19px,calc(var(--alt,640px) * .03),24px)}",
      ".bc-clas2 .bc-cl .su{font-size:13px;font-weight:900;color:#6ff0a6}.bc-clas2 .bc-cl .giu{font-size:13px;font-weight:900;color:#ff6b8b}",
      ".bc-clas2.tanti .bc-cl .fac{width:30px;height:30px}.bc-clas2.tanti .bc-cl .nm b{font-size:15px}",
      ".bc-annuncio{display:flex;flex-direction:column;align-items:center;gap:2px;margin-top:4px;padding:9px 12px;border-radius:14px;box-shadow:inset 0 0 0 1.5px #ff8a3d;background:rgba(255,138,61,.12);text-align:center}",
      ".bc-annuncio b{font-size:17px;color:#ffb37a}.bc-annuncio small{font-size:13px;font-weight:700;color:var(--o-testo)}",
      ".bc-fine{justify-content:flex-start;gap:10px;padding:6px 4px 8px;width:100%;box-sizing:border-box}",
      ".bc-vince{margin:0;font-size:clamp(24px,calc(var(--alt,640px) * .042),32px)}",
      ".bc-podio{display:flex;align-items:flex-end;justify-content:center;gap:8px;width:100%;max-width:440px}",
      ".bc-gradino{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0;animation:bcPop .5s cubic-bezier(.3,1.6,.5,1) both}",
      ".bc-gradino .fac{width:clamp(44px,calc(var(--alt,640px) * .075),66px);height:clamp(44px,calc(var(--alt,640px) * .075),66px)}",
      ".bc-gradino .nm{font-size:15px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".bc-gradino .blocco{width:100%;border-radius:14px 14px 0 0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#1b1406;font-weight:900}",
      ".bc-gradino .blocco .n{font-size:24px}.bc-gradino .blocco .pt{font-size:13px}",
      ".bc-gradino.p1 .blocco{height:clamp(70px,calc(var(--alt,640px) * .15),130px);background:linear-gradient(180deg,#ffc247,#a8741a)}",
      ".bc-gradino.p2 .blocco{height:clamp(52px,calc(var(--alt,640px) * .11),96px);background:linear-gradient(180deg,#e2e4ee,#7d8199)}",
      ".bc-gradino.p3 .blocco{height:clamp(40px,calc(var(--alt,640px) * .085),74px);background:linear-gradient(180deg,#e39a5c,#8a5025)}",
      ".bc-premi-lista{display:flex;flex-direction:column;gap:7px;width:100%;max-width:440px}",
      ".bc-fine .bc-premio-riga{padding:7px 10px}.bc-fine .bc-premio-riga .ic{font-size:28px}.bc-fine .bc-premio-riga .chi{flex-direction:row}.bc-fine .bc-premio-riga .chi .fac{width:34px;height:34px;margin-left:-6px;box-shadow:0 0 0 2px #151a2e}",
      ".bc-scelta{font-size:clamp(17px,calc(var(--alt,640px) * .029),22px)}.bc-carta.piccola .bc-scelte:not(.tante) .bc-scelta{font-size:var(--fs,16px)}",
      ".bc-carta.larga .bc-scelta{font-size:var(--fsg,22px);padding:calc(var(--fsg,22px) * .5) 14px;gap:12px}.bc-carta.larga .bc-scelta .n{width:calc(var(--fsg,22px) * 1.25);height:calc(var(--fsg,22px) * 1.25);font-size:calc(var(--fsg,22px) * .6)}.bc-carta.larga .bc-scelte{gap:calc(var(--fsg,22px) * .4)}",
      "@media (prefers-reduced-motion:reduce){.bc-autore-sch,.bc-gradino,.bc-ritaglio.stampata .bc-buco.pieno{animation:none}.bc-volapunti{transition:none}}"
    ].join("");
    document.head.appendChild(s);
  }

  // Playfair Display Black (lettere latine), di Claus Eggers Sørensen: licenza SIL Open Font License 1.1 (si può usare e incorporare liberamente)
  var FONT_TITOLO = "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";

  // per le prove (e per l'online, più avanti): le regole senza grafica
  window.__balla = { pulisciR: pulisciR, eLaVeritaR: eLaVeritaR, vis: vis, pezziN: pezziN, moltiplica: moltiplica, chiSceglie: chiSceglie, treCategorie: treCategorie,
    CATEGORIE: CATEGORIE, finali: finali, scegliFinale: scegliFinale, notizieDi: notizieDi,
    norm: norm, eLaVerita: eLaVerita, preparaScelte: preparaScelte, calcola: calcola, calcolaOro: calcolaOro, pianoRound: pianoRound, riempi: riempi, pezzi: pezzi, pulisci: pulisci };
})();

