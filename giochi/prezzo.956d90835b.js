/* =========================================================
   DATI — «Il Prezzo è Giusto!», autore 1: Spesa, Bar e ristoranti, Servizi, curiosità di cibo e feste, 8 vetrine.
   Prezzi medi in Italia nel 2026, arrotondati (vedi compiti-autori.md). Da rileggere una volta l'anno.
   ========================================================= */
window.SG_PREZZO = window.SG_PREZZO || { anno: 2026, prodotti: [], vetrine: [] };

window.SG_PREZZO.prodotti.push(
  // ---------- 🛒 SPESA AL SUPERMERCATO ----------
  { id: "a1-nutella-750", cat: "spesa", e: "🍫", nome: "Nutella, 750 g", desc: "Il barattolo grande di vetro", dove: "al supermercato", prezzo: 6.99 },   // stima: scaffale 6,49-7,49
  { id: "a1-spaghetti-barilla", cat: "spesa", e: "🍝", nome: "Spaghetti Barilla n.5, 500 g", desc: "Il pacco blu di sempre", dove: "al supermercato", prezzo: 1.29 },
  { id: "a1-latte-fresco", cat: "spesa", e: "🥛", nome: "Latte fresco intero, 1 litro", desc: "Di marca, in bottiglia, dal banco frigo", dove: "al supermercato", prezzo: 1.85 },
  { id: "a1-uova-6", cat: "spesa", e: "🥚", nome: "Sei uova grandi", desc: "Da galline allevate a terra", dove: "al supermercato", prezzo: 2.5, cur: "Una gallina ovaiola fa circa 300 uova all'anno" },   // 24 ott 2026: Il prezzo di 2,50 € va bene.
  { id: "a1-olio-evo", cat: "spesa", e: "🫒", nome: "Olio extravergine, 1 litro", desc: "Italiano al 100%, bottiglia di una marca nota", dove: "al supermercato", prezzo: 10.99, cur: "Nel 2019 un litro di extravergine costava in media meno di 4 €" },   // 24 ott 2026: 8,90 è un prezzo da offerta: a scaffale pieno una marca nota 100% italiana sta intorno a 10-11 €.
  { id: "a1-caffe-moka", cat: "spesa", e: "☕", nome: "Caffè per moka, 250 g", desc: "Lavazza Qualità Rossa, il pacchetto rosso", dove: "al supermercato", prezzo: 5.99 },   // 24 ott 2026: Il caffè è rincarato: 5,29 € è sotto il prezzo pieno di scaffale.
  { id: "a1-passata-mutti", cat: "spesa", e: "🍅", nome: "Passata di pomodoro, 700 g", desc: "Mutti, nella bottiglia di vetro", dove: "al supermercato", prezzo: 1.89 },   // 24 ott 2026: 1,69 è troppo basso (sembra un prezzo in offerta).
  { id: "a1-mozzarella-bufala", cat: "spesa", e: "🧀", nome: "Mozzarella di bufala, 250 g", desc: "Campana DOP, in busta col suo latte", dove: "al supermercato", prezzo: 4.49 },   // 24 ott 2026: 3,90 è troppo basso, 4,90 troppo alto: il prezzo pieno del 250 g DOP nelle grandi catene è 4,49-4,50.
  { id: "a1-coca-cola", cat: "spesa", e: "🥤", nome: "Coca-Cola, 1,5 litri", desc: "La bottiglia grande della pizza del sabato sera", dove: "al supermercato", prezzo: 1.99 },
  { id: "a1-acqua-6", cat: "spesa", e: "💧", nome: "Acqua naturale, 6 bottiglie", desc: "Sei bottiglie da 1,5 litri di una marca nota", dove: "al supermercato", prezzo: 2.7 },
  { id: "a1-banane", cat: "spesa", e: "🍌", nome: "Banane, 1 kg", desc: "Gialle, quelle col bollino", dove: "al supermercato", prezzo: 1.99 },
  { id: "a1-zucchero", cat: "spesa", e: "🍬", nome: "Zucchero bianco, 1 kg", desc: "Il pacco di carta che si buca sempre nel carrello", dove: "al supermercato", prezzo: 1.25 },
  { id: "a1-farina", cat: "spesa", e: "🌾", nome: "Farina 00, 1 kg", desc: "Per la pizza della domenica (e per tutto il tavolo)", dove: "al supermercato", prezzo: 0.99 },
  { id: "a1-sale-grosso", cat: "spesa", e: "🧂", nome: "Sale grosso, 1 kg", desc: "Quello per l'acqua della pasta", dove: "al supermercato", prezzo: 0.49, wow: 1 },
  { id: "a1-lievito", cat: "spesa", e: "🍞", nome: "Lievito di birra fresco", desc: "Il cubetto da 25 g, dal banco frigo", dove: "al supermercato", prezzo: 0.3, wow: 1 },
  { id: "a1-peroni-66", cat: "spesa", e: "🍺", nome: "Birra Peroni, 66 cl", desc: "La bottiglia grande, da frigo", dove: "al supermercato", prezzo: 1.49 },
  { id: "a1-tonno-rio", cat: "spesa", e: "🐟", nome: "Tonno Rio Mare, 3 scatolette", desc: "All'olio d'oliva, da 80 g l'una", dove: "al supermercato", prezzo: 5.99 },
  { id: "a1-pan-di-stelle", cat: "spesa", e: "🍪", nome: "Biscotti Pan di Stelle, 350 g", desc: "Quelli con le stelline di zucchero", dove: "al supermercato", prezzo: 2.65 },   // 24 ott 2026: 2,99 è alto, ma 2,39 è troppo basso: a scaffale pieno il 350 g sta a 2,65 (7,57 €/kg).
  { id: "a1-tortellini", cat: "spesa", e: "🥟", nome: "Tortellini freschi, 250 g", desc: "Al prosciutto crudo, dal banco frigo", dove: "al supermercato", prezzo: 3.7 },
  { id: "a1-crudo-parma", cat: "spesa", e: "🥓", nome: "Prosciutto di Parma, 100 g", desc: "Stagionato 18 mesi, affettato al banco", dove: "al supermercato", prezzo: 4 },
  { id: "a1-mortadella", cat: "spesa", e: "🍖", nome: "Mortadella Bologna, 100 g", desc: "IGP, affettata sottile al banco", dove: "al supermercato", prezzo: 2.2 },
  { id: "a1-bresaola", cat: "spesa", e: "🥩", nome: "Bresaola, 100 g", desc: "Della Valtellina IGP, affettata", dove: "al supermercato", prezzo: 4.5 },
  { id: "a1-basilico", cat: "spesa", e: "🌿", nome: "Basilico in vaso", desc: "Una piantina da tenere sul balcone", dove: "al supermercato", prezzo: 1.69 },
  { id: "a1-tavernello", cat: "spesa", e: "🍷", nome: "Vino in brick, 1 litro", desc: "Tavernello rosso, quello delle grigliate", dove: "al supermercato", prezzo: 1.89 },
  { id: "a1-aceto-modena", cat: "spesa", e: "🍶", nome: "Aceto balsamico, 250 ml", desc: "Di Modena IGP, quello di tutti i giorni", dove: "al supermercato", prezzo: 2.3 },
  { id: "a1-cotechino", cat: "spesa", e: "🐷", nome: "Cotechino, 500 g", desc: "Modena IGP, già cotto, per Capodanno", dove: "al supermercato, a dicembre", prezzo: 4.5 },
  { id: "a1-mele", cat: "spesa", e: "🍎", nome: "Mele Golden, 1 kg", desc: "Del Trentino, sfuse: una al giorno leva il medico di torno", dove: "al supermercato", prezzo: 2.29 },
  { id: "a1-patatine", cat: "spesa", e: "🥔", nome: "Patatine San Carlo, 180 g", desc: "Le classiche, nel sacchetto grande", dove: "al supermercato", prezzo: 2.79 },
  { id: "a1-magnum", cat: "spesa", e: "🍦", nome: "Magnum Classic, 4 gelati", desc: "La scatola del banco surgelati", dove: "al supermercato", prezzo: 4.99 },
  { id: "a1-pollo-intero", cat: "spesa", e: "🍗", nome: "Pollo intero, 1,5 kg", desc: "Da cuocere al forno con le patate", dove: "al supermercato", prezzo: 7.5 },
  { id: "a1-parmigiano-kg", cat: "spesa", e: "🧀", nome: "Parmigiano Reggiano, 1 kg", desc: "Stagionato 24 mesi, al banco", dove: "al supermercato", prezzo: 26.9, cur: "Per una forma da 40 kg servono circa 550 litri di latte" },   // 24 ott 2026: 24 € al kg è circa 10-15% sotto lo scaffale.
  { id: "a1-pecorino-kg", cat: "spesa", e: "🧀", nome: "Pecorino Romano, 1 kg", desc: "DOP, un bel pezzo al banco", dove: "al supermercato", prezzo: 19 },
  { id: "a1-macinato-kg", cat: "spesa", e: "🥩", nome: "Carne macinata, 1 kg", desc: "Di manzo, per il ragù della domenica", dove: "al banco della macelleria", prezzo: 14 },
  { id: "a1-fiorentina-kg", cat: "spesa", e: "🥩", nome: "Bistecca alla fiorentina, 1 kg", desc: "Con l'osso, alta tre dita, da cuocere a casa", dove: "al supermercato", prezzo: 29.9 },   // 24 ott 2026: Prodotto della spesa: va comprato al supermercato (banco carne), dove una fiorentina con osso sta tra 25 e 32 
  { id: "a1-treccia-bufala", cat: "spesa", e: "🧀", nome: "Treccia di bufala, 1 kg", desc: "Fresca di giornata", dove: "al mercato, in Campania", prezzo: 15 },   // 24 ott 2026: Un «caseificio» non è un supermercato né un mercato: dove riscritto.
  { id: "a1-pistacchi-bronte", cat: "spesa", e: "🥜", nome: "Pistacchi di Bronte, 1 kg", desc: "DOP, già sgusciati", dove: "al mercato, in Sicilia", prezzo: 65, wow: 1, cur: "Il pistacchio di Bronte si raccoglie solo un anno sì e uno no" },   // 24 ott 2026: Il «dal produttore» non torna con la categoria spesa.
  { id: "a1-ferrero-30", cat: "spesa", e: "🍫", nome: "Ferrero Rocher, 30 praline", desc: "La confezione grande da regalo", dove: "al supermercato, a Natale", prezzo: 12.9 },
  { id: "a1-moet", cat: "spesa", e: "🍾", nome: "Champagne Moët & Chandon", desc: "Brut Impérial, bottiglia da 75 cl", dove: "al supermercato", prezzo: 49 },   // 24 ott 2026: Categoria spesa: si compra al supermercato, non in enoteca.
  { id: "a1-ferrari-brut", cat: "spesa", e: "🥂", nome: "Spumante Ferrari Brut, 75 cl", desc: "Il Trentodoc dei brindisi (non l'auto!)", dove: "al supermercato", prezzo: 24 },
  { id: "a1-aperol", cat: "spesa", e: "🍊", nome: "Aperol, 1 litro", desc: "La bottiglia per fare lo spritz a casa", dove: "al supermercato", prezzo: 15.9 },
  { id: "a1-brunello", cat: "spesa", e: "🍷", nome: "Brunello di Montalcino, 75 cl", desc: "Una bottiglia di annata recente", dove: "al supermercato", prezzo: 35 },   // 24 ott 2026: Per la categoria spesa il «dove» non può essere l'enoteca.
  { id: "a1-montenegro", cat: "spesa", e: "🥃", nome: "Amaro Montenegro, 70 cl", desc: "La bottiglia da tenere in credenza", dove: "al supermercato", prezzo: 14 },
  { id: "a1-cassa-peroni", cat: "spesa", e: "🍻", nome: "Cassa di 24 birre Peroni", desc: "Bottigliette da 33 cl, per la partita", dove: "al supermercato", prezzo: 19.9 },
  { id: "a1-carbonara-4", cat: "spesa", e: "🍳", nome: "Spesa per la carbonara per 4", desc: "Guanciale, pecorino, 4 uova, 500 g di spaghetti", dove: "al supermercato", prezzo: 11 },
  { id: "a1-detersivo", cat: "spesa", e: "🧴", nome: "Detersivo per lavatrice", desc: "Liquido, di marca, per 40 lavaggi", dove: "al supermercato", prezzo: 10 },
  { id: "a1-prosciutto-intero", cat: "spesa", e: "🍖", nome: "Prosciutto di Parma intero", desc: "Con l'osso, circa 10 kg, da affettare a casa", dove: "in salumeria", prezzo: 290, wow: 1 },   // 24 ott 2026: 200 € è troppo poco: un Parma DOP intero con osso da circa 10 kg costa 267-308 €.

  // ---------- ☕ BAR, PIZZERIA E RISTORANTI ----------
  { id: "a1-caffe-milano", cat: "bar", e: "☕", nome: "Caffè al banco", desc: "Un espresso in piedi, senza brioche", dove: "in un bar di Milano", prezzo: 1.25, cur: "Milano è sotto la media italiana (1,29 €): la città più cara è Bolzano, 1,51 €" },   // Assoutenti/Mimit 2026: Milano 1,27
  { id: "a1-cappuccino", cat: "bar", e: "☕", nome: "Cappuccino al banco", desc: "Con la schiuma, senza brioche", dove: "in un bar di città", prezzo: 1.6 },
  { id: "a1-cornetto", cat: "bar", e: "🥐", nome: "Cornetto alla marmellata", desc: "Al banco, appena sfornato", dove: "in un bar di città", prezzo: 1.4 },
  { id: "a1-spritz-venezia", cat: "bar", e: "🍹", nome: "Spritz al bacaro", desc: "Con Aperol o Select, e l'oliva infilzata", dove: "a Venezia", prezzo: 3.5, wow: 1, cur: "A Padova nel 2025 i bar si sono messi d'accordo: mai più di 4 € a spritz" },
  { id: "a1-spritz-milano", cat: "bar", e: "🍹", nome: "Spritz all'aperitivo", desc: "Con le patatine e le olive", dove: "in un bar di Milano", prezzo: 9 },
  { id: "a1-margherita-napoli", cat: "bar", e: "🍕", nome: "Pizza margherita", desc: "Seduti al tavolo, in una pizzeria storica", dove: "a Napoli", prezzo: 6, cur: "Si racconta che la margherita sia nata a Napoli nel 1889, in onore della regina Margherita di Savoia" },   // 24 ott 2026: Confermo la sostituzione della curiosità: la frase su Milano a 10 € non è verificabile, mentre la storia della
  { id: "a1-suppli", cat: "bar", e: "🍙", nome: "Supplì al telefono", desc: "Riso, ragù e mozzarella filante, fritto", dove: "in una friggitoria di Roma", prezzo: 2.5 },
  { id: "a1-arancina", cat: "bar", e: "🍙", nome: "Arancina al ragù", desc: "Quella tonda, appena fritta", dove: "in rosticceria, a Palermo", prezzo: 3, cur: "A Palermo si dice «arancina», a Catania «arancino»" },   // 24 ott 2026: Nelle rosticcerie di Palermo oggi si è sui 3 €.
  { id: "a1-piadina", cat: "bar", e: "🌯", nome: "Piadina crudo e squacquerone", desc: "Con la rucola, piegata in due", dove: "in un chiosco in Romagna", prezzo: 7 },
  { id: "a1-cono-gelato", cat: "bar", e: "🍦", nome: "Cono con due gusti", desc: "Gelato artigianale, senza panna", dove: "in gelateria", prezzo: 3 },
  { id: "a1-lampredotto", cat: "bar", e: "🥪", nome: "Panino col lampredotto", desc: "Bagnato nel brodo, con la salsa verde", dove: "da un chiosco di Firenze", prezzo: 5.5 },
  { id: "a1-focaccia", cat: "bar", e: "🍞", nome: "Un pezzo di focaccia", desc: "Quella unta e salata, da colazione", dove: "in un forno di Genova", prezzo: 2 },
  { id: "a1-cannolo", cat: "bar", e: "🍰", nome: "Cannolo siciliano", desc: "Riempito al momento con la ricotta", dove: "in pasticceria, a Palermo", prezzo: 3.5 },   // 24 ott 2026: A Palermo in una pasticceria vera costa circa 3,50 €, non 3.
  { id: "a1-sfogliatella", cat: "bar", e: "🥐", nome: "Sfogliatella riccia", desc: "Calda, appena uscita dal forno", dove: "a Napoli", prezzo: 2 },
  { id: "a1-spremuta", cat: "bar", e: "🍊", nome: "Spremuta d'arancia", desc: "Un bicchiere, spremuta al momento", dove: "al bar", prezzo: 3.5 },
  { id: "a1-granita-brioche", cat: "bar", e: "🍧", nome: "Granita con la brioche", desc: "Alla mandorla, con la brioche col tuppo", dove: "in un bar di Catania", prezzo: 4.5 },
  { id: "a1-birra-media", cat: "bar", e: "🍺", nome: "Birra media alla spina", desc: "Quaranta centilitri di bionda", dove: "in un pub", prezzo: 6 },
  { id: "a1-calice-vino", cat: "bar", e: "🍷", nome: "Calice di vino della casa", desc: "Rosso, quello che l'oste chiama «un buon rosso»", dove: "in un'osteria", prezzo: 5 },
  { id: "a1-acqua-ristorante", cat: "bar", e: "💧", nome: "Acqua al ristorante, 1 litro", desc: "Una bottiglia di naturale, al tavolo", dove: "in un ristorante di città", prezzo: 3 },
  { id: "a1-tiramisu", cat: "bar", e: "🍰", nome: "Tiramisù", desc: "Una porzione, «fatto in casa» (giura il cameriere)", dove: "al ristorante", prezzo: 6 },
  { id: "a1-big-mac", cat: "bar", e: "🍔", nome: "Menù Big Mac medio", desc: "Con patatine e bibita medie", dove: "da McDonald's", prezzo: 9.5 },
  { id: "a1-kebab", cat: "bar", e: "🌯", nome: "Panino kebab", desc: "Con tutte le salse e la cipolla, alle due di notte", dove: "in città", prezzo: 6.5 },
  { id: "a1-cuoppo", cat: "bar", e: "🦐", nome: "Cuoppo di frittura di pesce", desc: "Il cono di carta con calamari e alici", dove: "a Napoli", prezzo: 7 },
  { id: "a1-porchetta", cat: "bar", e: "🥪", nome: "Panino con la porchetta", desc: "Bello pieno, tagliata al momento", dove: "in una fraschetta di Ariccia", prezzo: 6 },
  { id: "a1-tramezzino", cat: "bar", e: "🥪", nome: "Tramezzino tonno e uova", desc: "Quello morbido, a triangolo", dove: "al bar", prezzo: 3 },
  { id: "a1-shakerato", cat: "bar", e: "🧊", nome: "Caffè shakerato", desc: "Col ghiaccio, servito nella coppa", dove: "al bar, d'estate", prezzo: 3 },
  { id: "a1-bombolone", cat: "bar", e: "🍩", nome: "Bombolone alla crema", desc: "Dal venditore che gira tra gli ombrelloni", dove: "in spiaggia", prezzo: 2.5 },
  { id: "a1-arrosticini", cat: "bar", e: "🍢", nome: "Dieci arrosticini", desc: "Spiedini di pecora cotti alla brace", dove: "in Abruzzo", prezzo: 10 },
  { id: "a1-negroni", cat: "bar", e: "🍸", nome: "Negroni", desc: "Il cocktail rosso, con la scorza d'arancia", dove: "in un cocktail bar di Milano", prezzo: 12 },
  { id: "a1-colazione-4", cat: "bar", e: "🥐", nome: "Colazione per quattro", desc: "Quattro cappuccini e quattro cornetti al banco", dove: "in un bar di città", prezzo: 12 },
  { id: "a1-orecchiette", cat: "bar", e: "🍝", nome: "Orecchiette alle cime di rapa", desc: "Un piatto, in trattoria", dove: "a Bari", prezzo: 10 },   // 24 ott 2026: 12 è il massimo della forbice, la media in trattoria è circa 10.
  { id: "a1-carbonara-roma", cat: "bar", e: "🍝", nome: "Spaghetti alla carbonara", desc: "Un piatto, col guanciale croccante", dove: "in una trattoria di Roma", prezzo: 14 },
  { id: "a1-tagliatelle", cat: "bar", e: "🍝", nome: "Tagliatelle al ragù", desc: "Un piatto di pasta fatta a mano", dove: "in una trattoria di Bologna", prezzo: 13 },
  { id: "a1-menu-pranzo", cat: "bar", e: "🍽️", nome: "Menù del giorno a pranzo", desc: "Primo, secondo, acqua e caffè", dove: "in una trattoria di città", prezzo: 14 },
  { id: "a1-pollo-spiedo", cat: "bar", e: "🍗", nome: "Pollo allo spiedo con patate", desc: "Intero, da portare a casa la domenica", dove: "in rosticceria", prezzo: 13 },
  { id: "a1-hamburger", cat: "bar", e: "🍔", nome: "Hamburger con patatine", desc: "Di manzo, con formaggio e bacon", dove: "in un locale di città", prezzo: 16 },
  { id: "a1-frittura-mare", cat: "bar", e: "🦑", nome: "Frittura di calamari e gamberi", desc: "Un piatto, con il limone", dove: "in un ristorante sul mare", prezzo: 18 },
  { id: "a1-vongole", cat: "bar", e: "🍝", nome: "Spaghetti alle vongole", desc: "Vongole vere, col prezzemolo", dove: "in un ristorante sul mare", prezzo: 20 },
  { id: "a1-tagliere", cat: "bar", e: "🧀", nome: "Tagliere per due", desc: "Salumi e formaggi misti, con le focaccine", dove: "in un'osteria", prezzo: 20 },
  { id: "a1-gelato-kg", cat: "bar", e: "🍨", nome: "Vaschetta di gelato, 1 kg", desc: "Quattro gusti, da portare a casa", dove: "in gelateria", prezzo: 24 },
  { id: "a1-cacciucco", cat: "bar", e: "🍲", nome: "Cacciucco", desc: "La zuppa di pesce col pane abbrustolito", dove: "a Livorno", prezzo: 25 },
  { id: "a1-sushi-ayce", cat: "bar", e: "🍣", nome: "Sushi «mangia quanto vuoi»", desc: "A cena, bevande escluse", dove: "in un sushi di città", prezzo: 27.9 },
  { id: "a1-cotoletta", cat: "bar", e: "🍖", nome: "Cotoletta alla milanese", desc: "Quella con l'osso, alta, fritta nel burro", dove: "in un ristorante di Milano", prezzo: 32 },   // 24 ott 2026: La cotoletta con l'osso a Milano oggi sta tra 30 e 35 €: 28 è troppo poco.
  { id: "a1-brunch", cat: "bar", e: "🥞", nome: "Brunch della domenica", desc: "A buffet, dolce e salato, caffè compreso", dove: "in un locale di Milano", prezzo: 28 },
  { id: "a1-agriturismo", cat: "bar", e: "🐓", nome: "Pranzo in agriturismo", desc: "Menù fisso della domenica, vino compreso", dove: "in Toscana, a persona", prezzo: 32 },
  { id: "a1-torta-compleanno", cat: "bar", e: "🎂", nome: "Torta di compleanno per 12", desc: "Pan di Spagna e crema, con la scritta", dove: "in pasticceria", prezzo: 40 },
  { id: "a1-pizzeria-4", cat: "bar", e: "🍕", nome: "Pizza e birra per quattro", desc: "Quattro margherite e quattro birre medie", dove: "in una pizzeria di Milano", prezzo: 60 },
  { id: "a1-fiorentina-ristorante", cat: "bar", e: "🥩", nome: "Fiorentina al ristorante", desc: "Bistecca da 1 kg, cotta al sangue", dove: "a Firenze", prezzo: 60, wow: 1, cur: "Al ristorante la fiorentina si paga a peso: l'osso compreso" },
  { id: "a1-crazy-pizza", cat: "bar", e: "🍕", nome: "Margherita da Briatore", desc: "Una margherita da Crazy Pizza, il locale di Briatore", dove: "a Milano", prezzo: 17, wow: 1, cur: "Nel 2022 costava 14 €: le polemiche fecero il giro d'Italia" },   // controllo 16 ott: 17 € dal 2024 (ANSA, Gambero Rosso)
  { id: "a1-capodanno", cat: "bar", e: "🥂", nome: "Cenone di Capodanno", desc: "Menù di pesce con brindisi, a persona", dove: "al ristorante", prezzo: 90 },
  { id: "a1-cena-pesce-due", cat: "bar", e: "🐟", nome: "Cena di pesce per due", desc: "Antipasti, primo, grigliata e una bottiglia di vino", dove: "in un ristorante in Puglia", prezzo: 130 },
  { id: "a1-francescana", cat: "bar", e: "⭐", nome: "Menù di Massimo Bottura", desc: "Il menù degustazione per una persona, vini esclusi", dove: "all'Osteria Francescana", prezzo: 330, wow: 1, cur: "È stato due volte il miglior ristorante del mondo, nel 2016 e nel 2018" },

  // ---------- 🧾 SERVIZI E BOLLETTE ----------
  { id: "a1-bagno-venezia", cat: "servizi", e: "🚻", nome: "Bagno pubblico", desc: "Un ingresso, in centro", dove: "a Venezia", prezzo: 1.5, wow: 1 },
  { id: "a1-asciugatrice", cat: "servizi", e: "🌀", nome: "Asciugatrice a gettone", desc: "Venti minuti di asciugatura", dove: "in lavanderia self-service", prezzo: 2 },
  { id: "a1-metro-milano", cat: "servizi", e: "🚇", nome: "Biglietto della metro", desc: "Corsa singola, vale 90 minuti", dove: "a Milano", prezzo: 2.2, cur: "Vale 90 minuti e si paga anche con la carta contactless o col telefono, direttamente ai tornelli" },   // 24 ott 2026: Prezzo esatto.
  { id: "a1-chiave", cat: "servizi", e: "🔑", nome: "Copia di una chiave", desc: "Chiave semplice di casa, non blindata", dove: "dalla ferramenta", prezzo: 3.5 },
  { id: "a1-camicia", cat: "servizi", e: "👔", nome: "Camicia lavata e stirata", desc: "Riconsegnata sulla gruccia", dove: "in lavanderia", prezzo: 3.5 },
  { id: "a1-lavatrice-gettone", cat: "servizi", e: "🧺", nome: "Lavatrice a gettone, 8 kg", desc: "Un lavaggio, detersivo compreso", dove: "in lavanderia self-service", prezzo: 4 },
  { id: "a1-babysitter", cat: "servizi", e: "👶", nome: "Un'ora di babysitter", desc: "Per un bambino, di sera", dove: "media italiana", prezzo: 9.5, cur: "A Milano oggi si arriva a 10-12 € l'ora" },   // 24 ott 2026: Tolto «nel 2022 la media era 8,30 €»: non confermato.
  { id: "a1-dog-sitter", cat: "servizi", e: "🐕", nome: "Passeggiata col dog sitter", desc: "Un'ora al parco con il cane", dove: "in città", prezzo: 12 },
  { id: "a1-orlo", cat: "servizi", e: "🧵", nome: "Orlo ai pantaloni", desc: "Accorciare un paio di jeans", dove: "dalla sarta sotto casa", prezzo: 10 },
  { id: "a1-spotify", cat: "servizi", e: "🎧", nome: "Spotify Premium per un mese", desc: "Abbonamento per una persona", prezzo: 11.99, cur: "Nel 2022 costava ancora 9,99 euro al mese" },   // 24 ott 2026: Il prezzo va bene; nel 2023 e gia salito a 10,99, quindi 'nel 2023 costava 9,99' era impreciso.
  { id: "a1-cappotto", cat: "servizi", e: "🧥", nome: "Lavaggio di un cappotto", desc: "A secco, pronto in tre giorni", dove: "in lavanderia", prezzo: 15 },
  { id: "a1-ripetizioni", cat: "servizi", e: "📚", nome: "Un'ora di ripetizioni", desc: "Matematica, con uno studente universitario", prezzo: 15 },
  { id: "a1-pacco-giu", cat: "servizi", e: "📦", nome: "Il pacco da giù, 20 kg", desc: "Dalla mamma in Puglia fino a Milano, col corriere", prezzo: 18 },
  { id: "a1-pacco-5kg", cat: "servizi", e: "📦", nome: "Spedire un pacco di 5 kg", desc: "In Italia, consegna in circa 5 giorni lavorativi", dove: "all'ufficio postale", prezzo: 12.2 },   // 24 ott 2026: Un pacco di esattamente 5 kg può cadere anche nella fascia da 14,30 €.
  { id: "a1-barbiere", cat: "servizi", e: "💈", nome: "Taglio dal barbiere", desc: "Taglio uomo, senza barba", dove: "media italiana", prezzo: 20 },   // 24 ott 2026: Il prezzo di 20 € resta plausibile.
  { id: "a1-carta-identita", cat: "servizi", e: "📇", nome: "Carta d'identità elettronica", desc: "Quella col chip, nuova o rinnovata", dove: "in Comune", prezzo: 22 },
  { id: "a1-piumone", cat: "servizi", e: "🛏️", nome: "Lavaggio del piumone", desc: "Matrimoniale, d'oca", dove: "in lavanderia", prezzo: 22 },
  { id: "a1-ceretta", cat: "servizi", e: "🦵", nome: "Ceretta alle gambe", desc: "Gambe intere", dove: "dall'estetista", prezzo: 30 },   // 24 ott 2026: 25 è nella parte bassa della fascia 25-40 €; 30 è il valore centrale e coincide con un listino reale.
  { id: "a1-manicure", cat: "servizi", e: "💅", nome: "Manicure semipermanente", desc: "Lo smalto che dura tre settimane", dove: "dall'estetista", prezzo: 28 },
  { id: "a1-taglio-piega", cat: "servizi", e: "💇", nome: "Taglio e piega", desc: "Capelli lunghi fino alle spalle", dove: "dal parrucchiere", prezzo: 45 },   // 24 ott 2026: Stima, non trovata una fonte online: taglio e piega donna con capelli lunghi di solito 40-50 €.
  { id: "a1-abbonamento-mezzi", cat: "servizi", e: "🎫", nome: "Abbonamento mensile ai mezzi", desc: "Metro, tram e bus per un mese", dove: "a Milano", prezzo: 39 },
  { id: "a1-toelettatura", cat: "servizi", e: "🐩", nome: "Toelettatura del cane", desc: "Bagno e taglio, cane di taglia media", prezzo: 45 },
  { id: "a1-lezione-guida", cat: "servizi", e: "🚗", nome: "Una lezione di guida", desc: "Un'ora in macchina con l'istruttore", dove: "in autoscuola", prezzo: 50 },
  { id: "a1-veterinario", cat: "servizi", e: "🐾", nome: "Visita dal veterinario", desc: "Controllo per il gatto, che poi ti tiene il muso", prezzo: 50 },
  { id: "a1-colore", cat: "servizi", e: "🎨", nome: "Colore dal parrucchiere", desc: "Tinta su tutta la testa, con la piega", prezzo: 55 },
  { id: "a1-pulizia-denti", cat: "servizi", e: "🦷", nome: "Pulizia dei denti", desc: "Con l'igienista, dal dentista privato", prezzo: 80 },
  { id: "a1-tatuaggio", cat: "servizi", e: "✒️", nome: "Un piccolo tatuaggio", desc: "Una scritta sul polso, in uno studio", prezzo: 80 },
  { id: "a1-idraulico", cat: "servizi", e: "🔧", nome: "Idraulico a casa", desc: "Uscita e un'ora di lavoro per un rubinetto", dove: "in un giorno feriale", prezzo: 90, wow: 1 },
  { id: "a1-canone-rai", cat: "servizi", e: "📺", nome: "Canone RAI per un anno", desc: "Quello che arriva nella bolletta della luce", prezzo: 90 },
  { id: "a1-caldaia", cat: "servizi", e: "🔥", nome: "Controllo della caldaia", desc: "Pulizia di ogni anno e bollino", prezzo: 120 },   // 24 ott 2026: Pulizia annuale con bollino costa in genere 110-150 €: 100 è un po' basso, 120 è più centrale.
  { id: "a1-accordatura", cat: "servizi", e: "🎹", nome: "Accordare il pianoforte", desc: "Un pianoforte verticale, a domicilio", prezzo: 100 },
  { id: "a1-spazzacamino", cat: "servizi", e: "🧹", nome: "Lo spazzacamino", desc: "Pulizia della canna fumaria del camino", prezzo: 100, wow: 1, cur: "Il mestiere esiste ancora: camini e stufe vanno puliti con regolarità" },
  { id: "a1-divano", cat: "servizi", e: "🛋️", nome: "Pulizia del divano", desc: "A domicilio, tre posti in tessuto", prezzo: 100 },
  { id: "a1-passaporto", cat: "servizi", e: "🛂", nome: "Passaporto nuovo", desc: "Contributo e marca da bollo, vale 10 anni", prezzo: 115 },
  { id: "a1-otturazione", cat: "servizi", e: "🦷", nome: "Otturazione di un dente", desc: "Una carie piccola, dal dentista privato", prezzo: 120 },
  { id: "a1-lavatrice-rotta", cat: "servizi", e: "🧰", nome: "Riparare la lavatrice", desc: "Uscita del tecnico e pompa nuova", prezzo: 120 },
  { id: "a1-animatore", cat: "servizi", e: "🤡", nome: "Animatore per una festa", desc: "Due ore di giochi per bambini", prezzo: 130 },
  { id: "a1-pensione-cane", cat: "servizi", e: "🐕", nome: "Pensione per il cane, 7 notti", desc: "Cane di taglia media, ad agosto", prezzo: 150 },
  { id: "a1-abito-sposa", cat: "servizi", e: "👰", nome: "Lavare l'abito da sposa", desc: "A secco, poi chiuso nella sua scatola", dove: "in lavanderia", prezzo: 150 },
  { id: "a1-devitalizzazione", cat: "servizi", e: "🦷", nome: "Devitalizzazione di un dente", desc: "Un molare, dal dentista privato", prezzo: 300 },
  { id: "a1-imbianchino", cat: "servizi", e: "🖌️", nome: "Imbiancare una stanza", desc: "Camera di 15 metri quadri, pareti e soffitto", prezzo: 300 },
  { id: "a1-condizionatore", cat: "servizi", e: "❄️", nome: "Montare un condizionatore", desc: "Solo il lavoro dell'installatore, uno split", prezzo: 300 },
  { id: "a1-asilo-nido", cat: "servizi", e: "🧸", nome: "Un mese di asilo nido", desc: "Privato, a tempo pieno", prezzo: 650 },
  { id: "a1-laser-occhi", cat: "servizi", e: "👓", nome: "Laser agli occhi", desc: "Per la miopia, tutti e due gli occhi", dove: "in una clinica privata", prezzo: 2000 },

  // ---------- 🇮🇹 CURIOSITÀ: CIBO, FESTE E TRADIZIONI ----------
  { id: "a1-carbone-befana", cat: "curiosita", e: "🖤", nome: "Carbone dolce della Befana", desc: "Il sacchetto da 250 g", dove: "a gennaio", prezzo: 3 },
  { id: "a1-vin-brule", cat: "curiosita", e: "🍷", nome: "Vin brûlé", desc: "Un bicchiere, caldo, con la cannella", dove: "al mercatino di Natale", prezzo: 4.5 },
  { id: "a1-mimosa", cat: "curiosita", e: "🌼", nome: "Mazzetto di mimosa", desc: "Per la Festa della donna, l'8 marzo", dove: "dal fioraio", prezzo: 5 },
  { id: "a1-struffoli", cat: "curiosita", e: "🍯", nome: "Struffoli, vassoio da 500 g", desc: "Palline di pasta fritta col miele e i confettini", dove: "a Natale, a Napoli", prezzo: 12 },
  { id: "a1-zampone", cat: "curiosita", e: "🐷", nome: "Zampone, 1 kg", desc: "Di Modena IGP, già cotto, per il cenone", dove: "a dicembre", prezzo: 12 },
  { id: "a1-confetti", cat: "curiosita", e: "🍬", nome: "Confetti alla mandorla, 1 kg", desc: "Quelli bianchi delle bomboniere", dove: "a Sulmona", prezzo: 28 },   // 24 ott 2026: 20 è troppo basso: i bianchi alla mandorla di Sulmona costano 22-32 €/kg, la media è circa 28.
  { id: "a1-chiacchiere", cat: "curiosita", e: "🎭", nome: "Chiacchiere, 1 kg", desc: "Le frappe fritte con lo zucchero a velo", dove: "in pasticceria, a Carnevale", prezzo: 29 },   // 24 ott 2026: 25 € è sotto la media delle pasticcerie.
  { id: "a1-pastiera", cat: "curiosita", e: "🥧", nome: "Pastiera napoletana, 1 kg", desc: "Intera, col grano e i fiori d'arancio", dove: "in pasticceria, a Pasqua", prezzo: 28 },
  { id: "a1-torrone", cat: "curiosita", e: "🍫", nome: "Torrone, 1 kg", desc: "Morbido, alle mandorle, in un pezzo solo", dove: "alla fiera, a Natale", prezzo: 30 },
  { id: "a1-corona-alloro", cat: "curiosita", e: "🌿", nome: "Corona d'alloro", desc: "Quella da mettere in testa il giorno della laurea", dove: "dal fioraio", prezzo: 30 },
  { id: "a1-cassata", cat: "curiosita", e: "🍰", nome: "Cassata siciliana, 1 kg", desc: "Intera, con la frutta candita sopra", dove: "in pasticceria, a Palermo", prezzo: 35 },
  { id: "a1-colomba", cat: "curiosita", e: "🕊️", nome: "Colomba artigianale, 1 kg", desc: "Con la glassa e le mandorle sopra", dove: "in pasticceria, a Pasqua", prezzo: 38 },
  { id: "a1-panettone-artigianale", cat: "curiosita", e: "🎄", nome: "Panettone artigianale, 1 kg", desc: "Quello alto, incartato a mano", dove: "in una pasticceria di Milano", prezzo: 45, wow: 1, cur: "Nel 2021 la media era 37 € al chilo: in quattro anni +21%" },   // Osservatorio Maiora 2025: 44,74 €/kg
  { id: "a1-rose-rosse", cat: "curiosita", e: "🌹", nome: "Dodici rose rosse", desc: "Il mazzo con la carta e il fiocco", dove: "dal fioraio, a San Valentino", prezzo: 50 },
  { id: "a1-uovo-pasqua", cat: "curiosita", e: "🥚", nome: "Uovo di Pasqua artigianale", desc: "Fondente, 1 kg, con la sorpresa dentro", dove: "in pasticceria", prezzo: 70 },
  { id: "a1-pranzo-nozze", cat: "curiosita", e: "💒", nome: "Pranzo di nozze, a persona", desc: "In villa, dall'aperitivo al caffè", prezzo: 130, wow: 1 },
  { id: "a1-damigiana", cat: "curiosita", e: "🍷", nome: "Damigiana di vino, 54 litri", desc: "Vino rosso sfuso, da imbottigliare a casa", dove: "in cantina, dal produttore", prezzo: 130 },
  { id: "a1-caffe-anno", cat: "curiosita", e: "☕", nome: "Un caffè al giorno per un anno", desc: "Trecentosessantacinque espressi al banco", dove: "media italiana", prezzo: 470, wow: 1, cur: "Nel 2026 un espresso costa in media 1,29 €: dal 2021 è salito del 24%" },
  { id: "a1-comunione", cat: "curiosita", e: "⛪", nome: "Pranzo della Prima Comunione", desc: "Per 50 invitati, al ristorante, torta compresa", prezzo: 2750 },
  { id: "a1-matrimonio", cat: "curiosita", e: "💍", nome: "Un matrimonio in Italia", desc: "Il costo medio di tutto: festa, foto, fiori, abiti", prezzo: 26000, wow: 1, cur: "Nel 2025 gli sposi hanno invitato in media 97 persone" }   // Matrimonio.com 2026: 25.970
);

window.SG_PREZZO.vetrine.push(
  { id: "a1-v-matrimonio-puglia", titolo: "Matrimonio in Puglia", e: "💒", pezzi: [
    { e: "📸", nome: "Fotografo per tutto il giorno", desc: "Dalla vestizione al taglio della torta, con l'album", prezzo: 2500 },
    { e: "🎂", nome: "Torta nuziale a tre piani", desc: "Per 100 invitati, con i fiori di zucchero", prezzo: 600 },
    { e: "🚘", nome: "Auto d'epoca con autista", desc: "Una cabriolet anni '60 con i nastri bianchi", prezzo: 400 },   // 24 ott 2026: Il tipico è 300-450 €; 500 € solo per le auto più grandi.
    { e: "🧀", nome: "Caciocavallo, 2 kg", desc: "Il regalo dello zio, appeso con lo spago", prezzo: 40 }
  ] },
  { id: "a1-v-natale-famiglia", titolo: "Natale in famiglia", e: "🎄", pezzi: [
    { e: "🛵", nome: "Honda SH 125", desc: "Nuovo, col fiocco rosso sotto l'albero", dove: "dal concessionario", prezzo: 4090 },
    { e: "🍽️", nome: "Pranzo di Natale per 12", desc: "Tutta la famiglia al ristorante, menù di cinque portate", prezzo: 900 },
    { e: "🌲", nome: "Abete vero, 2 metri", desc: "Nel vaso, da ripiantare a gennaio", dove: "dal vivaio", prezzo: 60 },
    { e: "🎲", nome: "Tombola con 48 cartelle", desc: "Col cartellone, i numeri di legno e il sacchetto", prezzo: 12 }
  ] },
  { id: "a1-v-diciotto-anni", titolo: "Festa dei 18 anni", e: "🎂", pezzi: [
    { e: "🚗", nome: "Patente B", desc: "Autoscuola, esami e una decina di guide", prezzo: 1100 },
    { e: "🎉", nome: "Sala per la festa", desc: "Un locale tutto per voi, per una sera", prezzo: 1000 },
    { e: "🍕", nome: "Pizze per 70 amici", desc: "Margherite e diavole, consegnate alla festa", prezzo: 560 },
    { e: "🎧", nome: "DJ per la festa", desc: "Quattro ore di musica, con le luci", prezzo: 400 },
    { e: "🎈", nome: "Palloncini «1» e «8»", desc: "Giganti, argentati, gonfiati a elio", prezzo: 12 }
  ] },
  { id: "a1-v-anno-a-tavola", titolo: "Un anno a tavola", e: "🍽️", pezzi: [
    { e: "🛒", nome: "La spesa di un anno", desc: "Cibo e bibite di una famiglia italiana media", prezzo: 6600 },
    { e: "🍕", nome: "Pizza e birra ogni sabato", desc: "In due, per tutto l'anno, in pizzeria", prezzo: 1500 },
    { e: "🥄", nome: "Mestolo di legno", desc: "Quello per girare il sugo della domenica", prezzo: 4 }
  ] },
  { id: "a1-v-sorriso", titolo: "Il sorriso perfetto", e: "😁", pezzi: [
    { e: "🦷", nome: "Apparecchio invisibile", desc: "Le mascherine trasparenti, cura completa", dove: "dal dentista privato", prezzo: 4000 },
    { e: "✨", nome: "Sbiancamento dei denti", desc: "In studio, una seduta", prezzo: 350 },
    { e: "🧵", nome: "Filo interdentale", desc: "Il rotolino da 50 metri", dove: "al supermercato", prezzo: 3 }
  ] },
  { id: "a1-v-meglio-italia", titolo: "Il meglio d'Italia", e: "🍷", pezzi: [
    { e: "🍷", nome: "Dodici bottiglie di Sassicaia", desc: "Il famoso rosso toscano, annata recente", dove: "in enoteca", prezzo: 3600 },
    { e: "🧀", nome: "Forma intera di Parmigiano", desc: "Quaranta chili, stagionata 24 mesi", dove: "dal caseificio", prezzo: 700 },
    { e: "🍶", nome: "Aceto balsamico tradizionale", desc: "Di Modena DOP, invecchiato 25 anni, 100 ml", dove: "in acetaia", prezzo: 90 }
  ] },
  { id: "a1-v-vivere-milano", titolo: "Vivere a Milano", e: "🏙️", pezzi: [
    { e: "👶", nome: "Babysitter ogni sabato sera", desc: "Quattro ore a settimana, per un anno", prezzo: 2300 },
    { e: "🍹", nome: "Uno spritz ogni venerdì", desc: "Per un anno, all'aperitivo", prezzo: 470 },
    { e: "🚇", nome: "Abbonamento annuale ai mezzi", desc: "Metro, tram e bus per dodici mesi", prezzo: 330 },
    { e: "📷", nome: "Quattro fototessere", desc: "Nella cabina automatica della stazione", prezzo: 7 }
  ] },
  { id: "a1-v-anno-bellezza", titolo: "Un anno di bellezza", e: "💆", pezzi: [
    { e: "💆", nome: "Un massaggio a settimana", desc: "Cinquanta minuti, per un anno intero", dove: "in un centro estetico", prezzo: 2850 },
    { e: "💇", nome: "La piega ogni sabato", desc: "Dal parrucchiere, per un anno intero", prezzo: 915 },
    { e: "💈", nome: "Barbiere ogni due settimane", desc: "Taglio uomo, per un anno intero", prezzo: 520 },
    { e: "🧴", nome: "Bomboletta di lacca", desc: "Tenuta forte, 300 ml", dove: "al supermercato", prezzo: 4 }
  ] }
);

/* =========================================================
   DATI — «Il Prezzo è Giusto!», autore 2: Casa, Tecnologia, Vestiti, curiosità di oggetti, casa e famiglia, 8 vetrine.
   Prezzi medi in Italia nel 2026, arrotondati (vedi compiti-autori.md). Da rileggere una volta l'anno.
   Attenzione: nel 2026 la tecnologia è rincarata (crisi delle memorie): PS5, Switch 2, iPhone Pro, Mac. Prezzi già aggiornati.
   ========================================================= */
window.SG_PREZZO = window.SG_PREZZO || { anno: 2026, prodotti: [], vetrine: [] };

window.SG_PREZZO.prodotti.push(
  // ---------- 🏠 CASA ED ELETTRODOMESTICI ----------
  { id: "a2-presine", cat: "casa", e: "🧤", nome: "Presine da cucina, 2", desc: "Di cotone imbottito, a quadretti, per le pentole calde", dove: "in un negozio di casalinghi", prezzo: 4 },   // 24 ott 2026: Confermo solo il testo: «dal casalinghi» è sbagliato, va «in un negozio di casalinghi».
  { id: "a2-mollette", cat: "casa", e: "🧺", nome: "Mollette per il bucato, 24", desc: "In plastica colorata, in sacchetto", dove: "al supermercato", prezzo: 2.5 },   // stima
  { id: "a2-barattolo-fido", cat: "casa", e: "🍯", nome: "Barattolo Fido, 1 litro", desc: "Bormioli, di vetro, col tappo a leva e la guarnizione", dove: "in un negozio di casalinghi", prezzo: 6.9, cur: "Li fa Bormioli Rocco, un'azienda con sede a Fidenza, vicino a Parma" },   // 24 ott 2026: 3,50 è troppo poco e 5 è ancora basso: un Fido da 1 L singolo costa 7-9 € online, solo nei set da 6 scende a 4
  { id: "a2-lampadina-led", cat: "casa", e: "💡", nome: "Lampadina LED", desc: "Philips, attacco grande, luce calda come una vecchia da 60 W", dove: "al supermercato", prezzo: 6.99 },   // 24 ott 2026: 3,99 non corrisponde né al prezzo pieno né all'offerta.
  { id: "a2-accendigas", cat: "casa", e: "🔥", nome: "Accendigas elettronico", desc: "Quello col grilletto, per i fornelli", dove: "dal ferramenta", prezzo: 4.5 },   // stima
  { id: "a2-sturalavandini", cat: "casa", e: "🪠", nome: "Sturalavandini", desc: "La ventosa di gomma col manico di legno", dove: "dal ferramenta", prezzo: 5 },   // stima
  { id: "a2-battipanni", cat: "casa", e: "🧹", nome: "Battipanni in vimini", desc: "Per i tappeti al balcone (e per le minacce della mamma)", dove: "dal ferramenta", prezzo: 6 },   // stima
  { id: "a2-cavatappi", cat: "casa", e: "🍷", nome: "Cavatappi da cameriere", desc: "Quello a due scatti, col coltellino per la capsula", dove: "dal casalinghi", prezzo: 6.5 },   // stima
  { id: "a2-grattugia", cat: "casa", e: "🧀", nome: "Grattugia a quattro facce", desc: "In acciaio, col manico in alto", dove: "in un negozio di casalinghi", prezzo: 8 },   // 24 ott 2026: Prezzo 8 € ok; «dal casalinghi» riscritto.
  { id: "a2-scopa-saggina", cat: "casa", e: "🧹", nome: "Scopa di saggina", desc: "Quella vera, col manico di legno, per il cortile", dove: "dal ferramenta", prezzo: 9 },   // stima
  { id: "a2-colapasta", cat: "casa", e: "🍝", nome: "Colapasta in acciaio", desc: "Coi due manici e i piedini, per mezzo chilo di pasta", dove: "dal casalinghi", prezzo: 12 },   // stima
  { id: "a2-zerbino", cat: "casa", e: "🚪", nome: "Zerbino con la scritta", desc: "In cocco, con «Benvenuti» davanti alla porta", dove: "dal casalinghi", prezzo: 15 },   // stima
  { id: "a2-tagliere", cat: "casa", e: "🪵", nome: "Tagliere di legno", desc: "Di ulivo, grande, per salumi e formaggi", dove: "in un negozio di casalinghi", prezzo: 35 },   // 24 ott 2026: 18 € è troppo basso per un tagliere di ulivo grande.
  { id: "a2-blahaj", cat: "casa", e: "🦈", nome: "Squalo di peluche IKEA", desc: "Il Blåhaj blu, quello lungo 100 cm", dove: "da IKEA", prezzo: 24.99, cur: "È diventato famosissimo su internet: c'è chi lo porta in vacanza e lo fotografa" },   // IKEA Francia 24,99, Spagna 19,99, Germania 27,99
  { id: "a2-stendino", cat: "casa", e: "🧺", nome: "Stendibiancheria ad ali", desc: "Quello pieghevole da balcone, con 18 metri di filo", dove: "al supermercato", prezzo: 25 },   // stima
  { id: "a2-padella", cat: "casa", e: "🍳", nome: "Padella antiaderente, 28 cm", desc: "Di marca, va bene anche sull'induzione", dove: "dal casalinghi", prezzo: 28 },   // stima
  { id: "a2-moka-3", cat: "casa", e: "☕", nome: "Moka Bialetti, 3 tazze", desc: "La Moka Express classica, col signore coi baffi", dove: "dal casalinghi", prezzo: 29.9, cur: "La inventò Alfonso Bialetti nel 1933, a Omegna" },   // listino consigliato 32,99, nei negozi 27-30
  { id: "a2-tostapane", cat: "casa", e: "🍞", nome: "Tostapane da due fette", desc: "Elettrico, con la levetta e la pinza per i toast", dove: "al centro commerciale", prezzo: 30 },   // stima
  { id: "a2-candela-yankee", cat: "casa", e: "🕯️", nome: "Candela Yankee Candle grande", desc: "Il barattolo di vetro grande, profumo a scelta", prezzo: 32.9 },   // stima
  { id: "a2-ventilatore", cat: "casa", e: "🌀", nome: "Ventilatore a piantana", desc: "Da 40 cm, tre velocità, che gira a destra e a sinistra", dove: "al centro commerciale", prezzo: 39 },   // stima
  { id: "a2-servizio-piatti", cat: "casa", e: "🍽️", nome: "Servizio di piatti, 18 pezzi", desc: "Per sei persone: piani, fondi e frutta, bianchi", dove: "al centro commerciale", prezzo: 45 },   // stima
  { id: "a2-lenzuola", cat: "casa", e: "🛏️", nome: "Completo lenzuola matrimoniale", desc: "Di cotone, sotto, sopra e due federe, di marca italiana", prezzo: 55 },   // stima
  { id: "a2-billy", cat: "casa", e: "📚", nome: "Libreria IKEA Billy", desc: "Bianca, alta 2 metri e larga 80 cm, da montare", dove: "da IKEA", prezzo: 59.95, cur: "È in vendita dal 1979 ed è uno dei mobili più venduti al mondo" },   // IKEA Italia 59,95
  { id: "a2-poang", cat: "casa", e: "🪑", nome: "Poltrona IKEA Poäng", desc: "Di betulla curvata, col cuscino beige", dove: "da IKEA", prezzo: 69.95 },   // 24 ott 2026: Il prezzo di 79,95 e quello vecchio; se IKEA lo rialza torna 79,95.
  { id: "a2-asse-stiro", cat: "casa", e: "👔", nome: "Asse da stiro", desc: "Pieghevole, col poggiaferro e la fodera a fiori", dove: "al supermercato", prezzo: 35 },   // stima 25-45
  { id: "a2-imperia", cat: "casa", e: "🍝", nome: "Macchina per la pasta Imperia", desc: "Quella a manovella, d'acciaio, per tirare la sfoglia", dove: "dal casalinghi", prezzo: 55, cur: "Nasce a Torino nel 1932" },   // 24 ott 2026: Prezzo 55 ok (entro il 4%).
  { id: "a2-albero-natale", cat: "casa", e: "🎄", nome: "Albero di Natale finto", desc: "Alto 180 cm, folto, da montare, senza luci", dove: "al centro commerciale", prezzo: 99 },   // stima
  { id: "a2-piscina-gonfiabile", cat: "casa", e: "🏊", nome: "Piscina gonfiabile da giardino", desc: "Rotonda, larga 3 metri e 66, con la pompa per l'acqua", prezzo: 140 },   // 24 ott 2026: Non esiste il formato 3,5 m: i modelli veri con pompa sono 366 cm e costano circa 120-160 €.
  { id: "a2-microonde", cat: "casa", e: "🍲", nome: "Forno a microonde", desc: "Da 25 litri, col grill, di marca nota (LG, Whirlpool)", dove: "al centro commerciale", prezzo: 149 },   // 24 ott 2026: 120 € è solo il modello più economico; le marche note con grill 25 l stanno tra 120 e 230, tipico 150.
  { id: "a2-tosaerba", cat: "casa", e: "🌱", nome: "Tosaerba elettrico", desc: "Col filo, per un giardino piccolo, col sacco dell'erba", dove: "al centro commerciale", prezzo: 150 },   // stima
  { id: "a2-macchina-cucire", cat: "casa", e: "🧵", nome: "Macchina da cucire Singer", desc: "Il modello base per casa, nuovo", prezzo: 160 },   // stima
  { id: "a2-weber", cat: "casa", e: "🔥", nome: "Barbecue Weber a carbone", desc: "Quello tondo nero col coperchio, da 57 cm", prezzo: 179, cur: "Lo inventò nel 1952 un saldatore americano, tagliando a metà una boa" },   // weber.com Italia, Original Kettle 57 cm: 179
  { id: "a2-malm", cat: "casa", e: "🗄️", nome: "Cassettiera IKEA Malm", desc: "Bianca, sei cassetti, larga 160 cm", dove: "da IKEA", prezzo: 189 },   // IKEA Italia 179-189
  { id: "a2-deumidificatore", cat: "casa", e: "💧", nome: "Deumidificatore", desc: "Da 20 litri al giorno, con le ruote", dove: "al centro commerciale", prezzo: 230 },   // stima
  { id: "a2-dondolo", cat: "casa", e: "🌳", nome: "Dondolo da giardino", desc: "A tre posti, col tettuccio e i cuscini", dove: "al centro commerciale", prezzo: 250 },   // stima
  { id: "a2-congelatore", cat: "casa", e: "🧊", nome: "Congelatore a pozzetto", desc: "Da 200 litri, quello che si apre dall'alto", dove: "al centro commerciale", prezzo: 280 },   // stima
  { id: "a2-piano-induzione", cat: "casa", e: "🍳", nome: "Piano cottura a induzione", desc: "Da 60 cm, quattro zone, da incassare", dove: "al centro commerciale", prezzo: 300 },   // stima
  { id: "a2-magnifica", cat: "casa", e: "☕", nome: "Macchina da caffè De'Longhi", desc: "La Magnifica S: macina i chicchi e fa il caffè da sola", prezzo: 320 },   // trovaprezzi 300-330
  { id: "a2-lavatrice", cat: "casa", e: "🧺", nome: "Lavatrice da 8 kg", desc: "Carica dall'oblò, classe A, di marca nota", dove: "al centro commerciale", prezzo: 350, wow: 1 },   // Altroconsumo 200-400, LG/Bosch 290-400
  { id: "a2-cucina-gas", cat: "casa", e: "🔥", nome: "Cucina a gas col forno", desc: "Quattro fuochi e forno elettrico sotto, larga 60 cm", dove: "al centro commerciale", prezzo: 380 },   // stima
  { id: "a2-lavastoviglie", cat: "casa", e: "🍽️", nome: "Lavastoviglie da 60 cm", desc: "Da sistemare sotto il piano, 13 coperti, di marca nota", dove: "al centro commerciale", prezzo: 420 },   // stima
  { id: "a2-supersonic", cat: "casa", e: "💨", nome: "Phon Dyson Supersonic Nural", desc: "L'asciugacapelli col buco in mezzo, con gli accessori", prezzo: 399, wow: 1 },   // 24 ott 2026: 499 era sbagliato: il modello con gli accessori (Nural) costa 399 in listino ufficiale italiano.
  { id: "a2-asciugatrice", cat: "casa", e: "👕", nome: "Asciugatrice da 8 kg", desc: "A pompa di calore, classe A, di marca nota", dove: "al centro commerciale", prezzo: 550 },   // stima
  { id: "a2-materasso", cat: "casa", e: "🛏️", nome: "Materasso matrimoniale", desc: "In memory foam, alto 25 cm, nuovo", dove: "dal materassaio", prezzo: 600 },   // stima
  { id: "a2-frigorifero", cat: "casa", e: "🧊", nome: "Frigorifero combinato", desc: "Alto, col freezer sotto, che non fa il ghiaccio", dove: "al centro commerciale", prezzo: 650 },   // stima
  { id: "a2-tenda-sole", cat: "casa", e: "⛱️", nome: "Tenda da sole", desc: "A bracci, larga 4 metri, per il balcone, montata", prezzo: 1200 },   // stima
  { id: "a2-porta-blindata", cat: "casa", e: "🚪", nome: "Porta blindata", desc: "Per l'ingresso di un appartamento, montata", prezzo: 1600 },   // stima
  { id: "a2-stufa-pellet", cat: "casa", e: "🔥", nome: "Stufa a pellet", desc: "Da salotto, 9 kW, senza il montaggio", prezzo: 1500 },   // stima
  { id: "a2-bimby", cat: "casa", e: "🥣", nome: "Bimby", desc: "Il robot da cucina Vorwerk, l'ultimo modello (TM7)", prezzo: 1599, wow: 1, cur: "Non lo trovi nei negozi di elettrodomestici: lo vende solo Vorwerk" },   // lancio TM7: 1.599
  { id: "a2-smeg-frigo", cat: "casa", e: "🧊", nome: "Frigorifero Smeg anni '50", desc: "Quello tondo colorato, una porta, alto un metro e mezzo", prezzo: 1800, wow: 1 },   // FAB28: 1.800-1.900
  { id: "a2-caldaia", cat: "casa", e: "♨️", nome: "Caldaia nuova", desc: "A condensazione, per un appartamento, montata", dove: "con l'idraulico", prezzo: 2000, wow: 1 },   // stima: caldaia 700-1.400 + posa 400-800

  // ---------- 📱 TECNOLOGIA ----------
  { id: "a2-pile-bottone", cat: "tech", e: "🔋", nome: "Pile a bottone, 2 pezzi", desc: "Quelle piatte e tonde, per la bilancia e le chiavi dell'auto", dove: "al supermercato", prezzo: 4.5 },   // stima
  { id: "a2-pile-aa", cat: "tech", e: "🔋", nome: "Pile stilo, 4 pezzi", desc: "Duracell, quelle normali (AA), nel blister", dove: "al supermercato", prezzo: 6.99 },   // stima
  { id: "a2-caricatore-usb", cat: "tech", e: "🔌", nome: "Caricatore USB da muro", desc: "Il cubetto bianco senza marca famosa", dove: "nel negozio sotto casa", prezzo: 8 },   // stima
  { id: "a2-netflix", cat: "tech", e: "📺", nome: "Netflix per un mese", desc: "Abbonamento Standard, senza pubblicità", prezzo: 13.99 },   // listino Italia 2026
  { id: "a2-mouse", cat: "tech", e: "🖱️", nome: "Mouse senza fili", desc: "Logitech, quello piccolo da portatile", prezzo: 15 },   // stima
  { id: "a2-telecomando", cat: "tech", e: "📺", nome: "Telecomando universale", desc: "Va bene per tutti i televisori di casa", dove: "al centro commerciale", prezzo: 15 },   // stima
  { id: "a2-cavo-hdmi", cat: "tech", e: "🔌", nome: "Cavo HDMI da 2 metri", desc: "Per attaccare la console al televisore", dove: "al centro commerciale", prezzo: 14 },   // 24 ott 2026: 12 € è circa 14% sotto il prezzo del negozio.
  { id: "a2-earpods", cat: "tech", e: "🎧", nome: "Auricolari Apple col filo", desc: "Gli EarPods bianchi originali, attacco USB-C", dove: "all'Apple Store", prezzo: 19 },   // listino Apple
  { id: "a2-tamagotchi", cat: "tech", e: "🥚", nome: "Tamagotchi", desc: "L'ovetto originale Bandai, rifatto come negli anni '90", prezzo: 22, cur: "Uscì in Giappone nel 1996: in pochi anni ne vendettero decine di milioni" },   // stima
  { id: "a2-alimentatore-apple", cat: "tech", e: "🔌", nome: "Alimentatore Apple USB-C", desc: "Quello da 20 W che nella scatola dell'iPhone non c'è più", dove: "all'Apple Store", prezzo: 25 },   // listino Apple
  { id: "a2-calcolatrice-casio", cat: "tech", e: "🧮", nome: "Calcolatrice scientifica Casio", desc: "Quella del liceo, che fa anche le frazioni", dove: "in cartoleria", prezzo: 28 },   // stima fx-991
  { id: "a2-airtag", cat: "tech", e: "📍", nome: "AirTag", desc: "Il dischetto Apple per ritrovare chiavi e valigie, uno", dove: "all'Apple Store", prezzo: 35 },   // 24 ott 2026: In Italia costa 35 €, non 29 €.
  { id: "a2-radio", cat: "tech", e: "📻", nome: "Radiolina portatile", desc: "Quella col manico e l'antenna, va a pile", prezzo: 30 },   // stima
  { id: "a2-powerbank", cat: "tech", e: "🔋", nome: "Batteria esterna", desc: "Da 10.000 mAh, di marca, per ricaricare il telefono fuori", prezzo: 30 },   // stima
  { id: "a2-cartucce", cat: "tech", e: "🖨️", nome: "Cartucce per la stampante", desc: "Le originali, una nera e una a colori, formato base", dove: "al centro commerciale", prezzo: 40, wow: 1, cur: "L'inchiostro delle stampanti costa al litro più dello champagne" },   // stima (HP/Epson 30-50)
  { id: "a2-smartband", cat: "tech", e: "⌚", nome: "Braccialetto fitness Xiaomi", desc: "Conta passi, battito e sonno, col suo schermino", prezzo: 45 },   // stima
  { id: "a2-magsafe", cat: "tech", e: "🔌", nome: "Caricatore MagSafe Apple", desc: "Il dischetto magnetico per l'iPhone, cavo da 1 metro", dove: "all'Apple Store", prezzo: 49 },   // listino Apple
  { id: "a2-hue", cat: "tech", e: "💡", nome: "Lampadina smart a colori", desc: "Philips Hue White and Color, E27, una lampadina: si accende e cambia colore dal telefono", prezzo: 64.99 },   // 24 ott 2026: La lampadina singola E27 costa 64,99 €.
  { id: "a2-cover-apple", cat: "tech", e: "📱", nome: "Custodia Apple in silicone", desc: "L'originale per iPhone, coi magneti dentro", dove: "all'Apple Store", prezzo: 59 },   // listino Apple
  { id: "a2-echo-dot", cat: "tech", e: "🔊", nome: "Echo Dot", desc: "L'altoparlante tondo di Alexa", dove: "su Amazon", prezzo: 64.99 },   // listino, spesso scontato
  { id: "a2-ps-plus", cat: "tech", e: "🎮", nome: "PlayStation Plus, 12 mesi", desc: "L'abbonamento base per giocare online con la PS5", prezzo: 71.99 },   // Essential 12 mesi
  { id: "a2-dualsense", cat: "tech", e: "🎮", nome: "Controller della PS5", desc: "Il DualSense bianco, nuovo", prezzo: 74.99 },   // listino Sony dal 2024
  { id: "a2-instax", cat: "tech", e: "📷", nome: "Fotocamera istantanea Instax", desc: "Fujifilm Instax Mini, quella che stampa subito la foto", prezzo: 79.99 },   // stima
  { id: "a2-stampante", cat: "tech", e: "🖨️", nome: "Stampante multifunzione", desc: "A getto d'inchiostro: stampa, fotocopia e scansiona", dove: "al centro commerciale", prezzo: 89 },   // stima
  { id: "a2-apple-pencil", cat: "tech", e: "✏️", nome: "Apple Pencil", desc: "La penna per l'iPad, quella più semplice con la presa USB-C", dove: "all'Apple Store", prezzo: 89 },   // listino Apple
  { id: "a2-mario-kart", cat: "tech", e: "🏎️", nome: "Mario Kart World", desc: "Il videogioco per Nintendo Switch 2, in scatola", prezzo: 89.99, cur: "In digitale costa 10 € in meno" },   // fisico 89,99, digitale 79,99
  { id: "a2-spazzolino", cat: "tech", e: "🪥", nome: "Spazzolino elettrico Oral-B", desc: "Il modello ricaricabile più semplice, con una testina", prezzo: 35 },   // stima
  { id: "a2-airpods-4", cat: "tech", e: "🎧", nome: "AirPods 5", desc: "Gli auricolari Apple senza fili, il modello base, con cancellazione del rumore", dove: "all'Apple Store", prezzo: 149 },   // 24 ott 2026: Apple Italia vende ora AirPods 5 a 149 € (con custodia wireless 169 €); AirPods 4 compaiono solo nei confronti
  { id: "a2-tv-32", cat: "tech", e: "📺", nome: "TV da 32 pollici", desc: "Smart TV di marca, per la cucina o la cameretta", dove: "al centro commerciale", prezzo: 199 },   // stima
  { id: "a2-kindle", cat: "tech", e: "📖", nome: "Kindle Paperwhite", desc: "Il lettore di libri di Amazon, modello nuovo, 16 GB", dove: "su Amazon", prezzo: 209.99 },   // gamma Kindle 2026
  { id: "a2-airpods-pro", cat: "tech", e: "🎧", nome: "AirPods Pro", desc: "Gli auricolari Apple che cancellano il rumore, ultimi", dove: "all'Apple Store", prezzo: 249 },   // AirPods Pro 3: 249
  { id: "a2-ps-portal", cat: "tech", e: "🎮", nome: "PlayStation Portal", desc: "Lo schermo per giocare alla PS5 da un'altra stanza", prezzo: 249.99 },   // da aprile 2026: 249,99
  { id: "a2-quest", cat: "tech", e: "🥽", nome: "Visore Meta Quest 3S", desc: "Per la realtà virtuale, 128 GB, senza fili", prezzo: 329.99 },   // listino 329,99
  { id: "a2-sony-cuffie", cat: "tech", e: "🎧", nome: "Cuffie Sony WH-1000XM6", desc: "Le cuffie grandi che cancellano il rumore", prezzo: 449 },   // stima: lancio 449
  { id: "a2-apple-watch", cat: "tech", e: "⌚", nome: "Apple Watch", desc: "Il modello base più nuovo, cassa da 42 mm", dove: "all'Apple Store", prezzo: 459 },   // Series 11: 459
  { id: "a2-switch-2", cat: "tech", e: "🎮", nome: "Nintendo Switch 2", desc: "Solo la console, senza giochi", prezzo: 499.99, cur: "Da settembre 2026 costa 30 € in più di quando è uscita" },   // 469,99 → 499,99 dal 1 set 2026
  { id: "a2-tv-55", cat: "tech", e: "📺", nome: "TV da 55 pollici", desc: "Smart TV 4K di marca: quella che occupa mezza parete", dove: "al centro commerciale", prezzo: 399 },   // 24 ott 2026: 499 è alto per una 55" 4K di marca: i modelli più venduti stanno tra 340 e 420.
  { id: "a2-galaxy-a", cat: "tech", e: "📱", nome: "Samsung Galaxy A57", desc: "Lo smartphone Samsung di fascia media, 5G, 8/128 GB", prezzo: 529 },   // 24 ott 2026: Il prezzo di 529 va bene; 'il piu venduto' non e dimostrabile per un modello uscito ad aprile.
  { id: "a2-ipad", cat: "tech", e: "📱", nome: "iPad", desc: "Il modello base da 11 pollici, 128 GB, senza la penna", dove: "all'Apple Store", prezzo: 509, cur: "A giugno 2026 Apple ha alzato i prezzi dell'iPad di circa 100 €" },   // 24 ott 2026: Il prezzo di prima (circa 409 €) non è verificato: per questo «circa 100 €» e non «90 €».
  { id: "a2-ipad-pro", cat: "tech", e: "📱", nome: "iPad Pro 11 pollici", desc: "Quello più potente, il modello base, senza tastiera", dove: "all'Apple Store", prezzo: 1319, wow: 1 },   // 1.119 → 1.319 dal 25 giu 2026
  { id: "a2-ps5", cat: "tech", e: "🎮", nome: "PlayStation 5", desc: "Quella col lettore dei dischi, nuova", prezzo: 649.99, wow: 1, cur: "Ad aprile 2026 è aumentata di 100 €" },   // 549,99 → 649,99 dal 2 apr 2026
  { id: "a2-dyson-v15", cat: "tech", e: "🧹", nome: "Aspirapolvere Dyson V15", desc: "Senza fili, quello con la luce verde che mostra la polvere", prezzo: 699 },   // listino 699, spesso 599
  { id: "a2-macbook-neo", cat: "tech", e: "💻", nome: "MacBook Neo", desc: "Il portatile Apple più semplice, 256 GB", dove: "all'Apple Store", prezzo: 799 },   // 24 ott 2026: Prezzo esatto.
  { id: "a2-iphone-17", cat: "tech", e: "📱", nome: "iPhone 17", desc: "Il modello base, 256 GB, nuovo", dove: "all'Apple Store", prezzo: 1129, wow: 1, cur: "A settembre 2026 è salito di 150 €: prima costava 979 €" },   // controllo 16 ott: 979 -> 1.129 dal 9 set 2026 (Smartworld)
  { id: "a2-macbook-air", cat: "tech", e: "💻", nome: "MacBook Air 13 pollici", desc: "Il modello base, nuovo", dove: "all'Apple Store", prezzo: 1249 },   // 24 ott 2026: Il modello base da 13 pollici costa 1.249 €, non 1.449 (+16%).
  { id: "a2-galaxy-ultra", cat: "tech", e: "📱", nome: "Samsung Galaxy S26 Ultra", desc: "Quello con la pennina dentro, 256 GB", prezzo: 1599 },   // 1.499 → 1.599 dopo il rincaro
  { id: "a2-iphone-pro-max", cat: "tech", e: "📱", nome: "iPhone Pro Max", desc: "L'ultimo modello, 256 GB", dove: "all'Apple Store", prezzo: 1639, wow: 1, cur: "Il modello dell'anno prima costava 150 € in meno" },   // iPhone 18 Pro Max 256 GB: 1.639
  { id: "a2-iphone-2tb", cat: "tech", e: "📱", nome: "iPhone Pro Max da 2 TB", desc: "Lo stesso, ma con la memoria più grande che esiste", dove: "all'Apple Store", prezzo: 3139, wow: 1 },   // 2 TB: 3.139

  // ---------- 👟 VESTITI E ACCESSORI ----------
  { id: "a2-cappello-babbo", cat: "vestiti", e: "🎅", nome: "Cappello da Babbo Natale", desc: "Rosso col pon pon bianco", dove: "alla bancarella, a dicembre", prezzo: 2.5 },   // stima
  { id: "a2-lacci", cat: "vestiti", e: "👞", nome: "Lacci per scarpe", desc: "Un paio di ricambio, neri", dove: "dal calzolaio", prezzo: 3 },   // stima
  { id: "a2-maglietta-primark", cat: "vestiti", e: "👕", nome: "Maglietta bianca Primark", desc: "Quella semplice di cotone, a maniche corte", dove: "da Primark", prezzo: 3.5, wow: 1 },   // stima 3-4
  { id: "a2-ombrello-ambulante", cat: "vestiti", e: "☂️", nome: "Ombrello dell'ambulante", desc: "Quello che compare dal nulla appena inizia a piovere", dove: "in strada, sotto la pioggia", prezzo: 5 },   // stima
  { id: "a2-collant", cat: "vestiti", e: "🦵", nome: "Collant velati", desc: "Calzedonia, neri, sottili (20 denari), un paio", dove: "da Calzedonia", prezzo: 5.95 },   // stima
  { id: "a2-mutande-rosse", cat: "vestiti", e: "🎉", nome: "Mutande rosse di Capodanno", desc: "Portano fortuna, ma solo se te le regalano", dove: "al mercato, a dicembre", prezzo: 7 },   // stima
  { id: "a2-calzini", cat: "vestiti", e: "🧦", nome: "Calzini corti, 3 paia", desc: "Di cotone, tinta unita", dove: "da Calzedonia", prezzo: 9.95 },   // stima
  { id: "a2-occhiali-mercato", cat: "vestiti", e: "🕶️", nome: "Occhiali da sole al mercato", desc: "Neri, di plastica, senza marca", dove: "al mercato del sabato", prezzo: 10 },   // stima
  { id: "a2-pantofole", cat: "vestiti", e: "🥿", nome: "Pantofole a quadri", desc: "Quelle di panno della nonna, chiuse dietro", dove: "al mercato", prezzo: 12 },   // stima
  { id: "a2-jeans-primark", cat: "vestiti", e: "👖", nome: "Jeans Primark", desc: "Da uomo, taglio dritto, blu", dove: "da Primark", prezzo: 14 },   // stima
  { id: "a2-grembiule", cat: "vestiti", e: "🎒", nome: "Grembiule della scuola", desc: "Quello nero o blu delle elementari, col fiocco", dove: "in un negozio per bambini", prezzo: 15 },   // stima
  { id: "a2-body-neonato", cat: "vestiti", e: "👶", nome: "Body per neonato, 5 pezzi", desc: "Di cotone, a maniche corte, coi bottoncini sotto", prezzo: 20 },   // stima
  { id: "a2-sciarpa-squadra", cat: "vestiti", e: "🧣", nome: "Sciarpa della squadra", desc: "Quella ufficiale, da sventolare allo stadio", dove: "allo store della squadra", prezzo: 20 },   // stima
  { id: "a2-havaianas", cat: "vestiti", e: "🩴", nome: "Infradito Havaianas Top", desc: "Le classiche brasiliane di gomma, tinta unita", prezzo: 22, cur: "Nascono in Brasile nel 1962" },   // 24 ott 2026: 25 non coincide con nessuno dei due modelli classici: la Top tinta unita è 22, la Brasil Logo (col logo) è cir
  { id: "a2-camicia", cat: "vestiti", e: "👔", nome: "Camicia bianca da uomo", desc: "Di cotone, quella dei colloqui e dei matrimoni", prezzo: 25 },   // stima
  { id: "a2-canottiera", cat: "vestiti", e: "🎽", nome: "Canottiera della salute", desc: "Di lana e cotone, quella che metteva il nonno", dove: "in merceria", prezzo: 15 },   // stima
  { id: "a2-felpa", cat: "vestiti", e: "🧥", nome: "Felpa col cappuccio", desc: "Di cotone, di una catena di negozi per ragazzi", prezzo: 30 },   // stima
  { id: "a2-pigiama", cat: "vestiti", e: "🛌", nome: "Pigiama di flanella", desc: "Da uomo, pesante, per l'inverno", prezzo: 34.95 },   // 24 ott 2026: Il prezzo pieno di un pigiama uomo in flanella dei grandi marchi è 33-35 €, non 29.
  { id: "a2-adilette", cat: "vestiti", e: "🩴", nome: "Ciabatte Adidas Adilette", desc: "Quelle da piscina con le tre strisce", prezzo: 30 },   // stima
  { id: "a2-new-era", cat: "vestiti", e: "🧢", nome: "Cappellino New Era", desc: "Quello degli Yankees, con la visiera curva", prezzo: 32 },   // stima
  { id: "a2-cintura", cat: "vestiti", e: "👖", nome: "Cintura di pelle", desc: "Da uomo, con la fibbia: un buco in più dopo le feste", prezzo: 35 },   // stima
  { id: "a2-maglione", cat: "vestiti", e: "🧶", nome: "Maglione di lana merino", desc: "Uniqlo, girocollo, tinta unita", dove: "da Uniqlo", prezzo: 39.9 },   // stima
  { id: "a2-guanti", cat: "vestiti", e: "🧤", nome: "Guanti di pelle", desc: "Foderati, da uomo, in negozio", prezzo: 45 },   // stima
  { id: "a2-crocs", cat: "vestiti", e: "👡", nome: "Crocs Classic", desc: "Gli zoccoli di gomma coi buchi, da adulto", prezzo: 54.99, cur: "Nate nel 2002 come scarpe da barca" },   // 55-69 dai rivenditori
  { id: "a2-eastpak", cat: "vestiti", e: "🎒", nome: "Zaino Eastpak", desc: "Il Padded Pak'r, lo zaino della scuola di sempre", prezzo: 55 },   // listino 55
  { id: "a2-superga", cat: "vestiti", e: "👟", nome: "Superga 2750", desc: "Le scarpe basse di tela bianche, quelle di Torino", prezzo: 75, cur: "Il modello 2750 esiste dal 1925" },   // 24 ott 2026: Il prezzo di cartellino è 75, non 69,90 (scarto 7%, ma ora si conosce l'esatto).
  { id: "a2-swatch", cat: "vestiti", e: "⌚", nome: "Orologio Swatch", desc: "Quello di plastica colorata, il modello classico", prezzo: 75 },   // stima
  { id: "a2-converse", cat: "vestiti", e: "👟", nome: "Converse All Star alte", desc: "Le Chuck Taylor di tela, quelle classiche", prezzo: 80, cur: "Le prime All Star sono del 1917, scarpe da basket" },   // stima
  { id: "a2-birkenstock", cat: "vestiti", e: "👡", nome: "Birkenstock Arizona", desc: "I sandali tedeschi con due fasce larghe, in Birko-Flor", prezzo: 90 },   // 24 ott 2026: Con la pelle il prezzo è 135 €: per questo si precisa il materiale.
  { id: "a2-levis", cat: "vestiti", e: "👖", nome: "Jeans Levi's 501", desc: "Il modello originale, nuovo", prezzo: 110, cur: "Si chiamano 501 dal 1890: era il numero del lotto" },   // levi.com Italia 110-120
  { id: "a2-kanken", cat: "vestiti", e: "🎒", nome: "Zaino Fjällräven Kånken", desc: "Quello quadrato con la volpe rossa", prezzo: 110 },   // stima
  { id: "a2-lacoste", cat: "vestiti", e: "👕", nome: "Polo Lacoste", desc: "La classica col coccodrillo, a maniche corte", prezzo: 115 },   // stima
  { id: "a2-air-force", cat: "vestiti", e: "👟", nome: "Nike Air Force 1", desc: "Le bianche classiche, modello '07", prezzo: 119.99 },   // stima
  { id: "a2-k-way", cat: "vestiti", e: "🧥", nome: "K-Way", desc: "La giacca a vento che si chiude dentro la sua tasca", prezzo: 120, cur: "È nato in Francia nel 1965, oggi è di un'azienda di Torino" },   // stima
  { id: "a2-ray-ban", cat: "vestiti", e: "🕶️", nome: "Ray-Ban Wayfarer", desc: "Gli occhiali da sole neri classici, lenti verdi", dove: "dall'ottico", prezzo: 160 },   // stima
  { id: "a2-marinella", cat: "vestiti", e: "👔", nome: "Cravatta Marinella", desc: "Di seta, dalla storica bottega di Napoli", dove: "a Napoli, in Riviera di Chiaia", prezzo: 180, cur: "La bottega aprì nel 1914: è grande pochi metri quadri" },   // stima
  { id: "a2-ugg", cat: "vestiti", e: "👢", nome: "Stivaletti UGG Classic Mini", desc: "Quelli di montone, bassi, color sabbia", prezzo: 190 },   // stima
  { id: "a2-dr-martens", cat: "vestiti", e: "👢", nome: "Anfibi Dr. Martens 1460", desc: "Neri, con le cuciture gialle e otto buchi", prezzo: 199, cur: "Si chiamano 1460 perché il primo paio è del primo aprile 1960" },   // stima
  { id: "a2-timberland", cat: "vestiti", e: "🥾", nome: "Timberland gialle", desc: "Gli scarponcini classici color grano", prezzo: 220 },   // stima
  { id: "a2-borsalino", cat: "vestiti", e: "🎩", nome: "Cappello Borsalino", desc: "Di feltro, da uomo, con la fascia", prezzo: 280, cur: "Si fa ad Alessandria dal 1857" },   // stima
  { id: "a2-nuptse", cat: "vestiti", e: "🧥", nome: "Piumino The North Face Nuptse", desc: "Quello lucido e gonfio, modello 1996", prezzo: 330 },   // stima
  { id: "a2-hogan", cat: "vestiti", e: "👟", nome: "Hogan Interactive³", desc: "Le scarpe da ginnastica con la H, in camoscio", prezzo: 390, wow: 1 },   // 24 ott 2026: testo precisato, prezzo non cambiato
  { id: "a2-golden-goose", cat: "vestiti", e: "👟", nome: "Golden Goose Super-Star", desc: "Le scarpe da ginnastica con la stella, già «sporche» apposta", prezzo: 530, wow: 1, cur: "Sono nate a Venezia nel 2000: l'aria «vissuta» gliela danno a mano" },   // rivenditori 485-595
  { id: "a2-tods", cat: "vestiti", e: "👞", nome: "Mocassini Tod's Gommino", desc: "Quelli coi pallini di gomma sotto, in camoscio", prezzo: 550 },   // stima
  { id: "a2-moncler", cat: "vestiti", e: "🧥", nome: "Piumino Moncler", desc: "Il modello Maya, da uomo, lucido", prezzo: 1450, wow: 1, cur: "Il nome viene da Monestier-de-Clermont, un paesino vicino a Grenoble" },   // stima
  { id: "a2-louis-vuitton", cat: "vestiti", e: "👜", nome: "Borsa Louis Vuitton Neverfull", desc: "In tela marrone con le iniziali, misura media", prezzo: 2100 },   // stima
  { id: "a2-max-mara", cat: "vestiti", e: "🧥", nome: "Cappotto Max Mara 101801", desc: "Il cappotto color cammello, lana e cashmere", prezzo: 2300, wow: 1, cur: "È lo stesso modello dal 1981" },   // Net-a-Porter Spagna 2.300
  { id: "a2-burberry", cat: "vestiti", e: "🧥", nome: "Trench Burberry", desc: "Il Kensington color sabbia, col tessuto a quadri dentro", prezzo: 2150, cur: "Il trench lo indossavano gli ufficiali inglesi nelle trincee: da qui il nome" },   // Breuninger 2.150
  { id: "a2-chanel", cat: "vestiti", e: "👜", nome: "Borsa Chanel Classic", desc: "Quella nera trapuntata, con la catenella, misura media", prezzo: 11000, wow: 1, cur: "Chanel alza il prezzo di questa borsa quasi ogni anno" },   // guide 2026: 10.500-11.000 in Europa

  // ---------- 🇮🇹 CURIOSITÀ: OGGETTI, CASA E FAMIGLIA ----------
  { id: "a2-casa-1-euro", cat: "curiosita", e: "🏚️", nome: "Casa da ristrutturare", desc: "Nel centro storico, col bando del Comune", dove: "in un paesino della Sicilia", prezzo: 1, wow: 1, cur: "Sono le «case a 1 euro»: però vanno sistemate entro 3 anni" },
  { id: "a2-rullino", cat: "curiosita", e: "🎞️", nome: "Rullino fotografico", desc: "Kodak a colori, 36 foto, da sviluppare", dove: "dal fotografo", prezzo: 16, wow: 1, cur: "Da quando i ragazzi sono tornati a usarli, costano più del doppio di prima" },   // stima
  { id: "a2-smemoranda", cat: "curiosita", e: "📒", nome: "Diario Smemoranda", desc: "Quello di scuola, 12 mesi, nuovo", dove: "in cartoleria", prezzo: 19.9 },   // stima
  { id: "a2-vinile", cat: "curiosita", e: "💿", nome: "Disco in vinile", desc: "Un album di un cantante italiano, appena uscito", dove: "in un negozio di dischi", prezzo: 30 },   // stima
  { id: "a2-juicy-salif", cat: "curiosita", e: "🍋", nome: "Spremiagrumi di design", desc: "Il Juicy Salif di Alessi, quello a forma di ragno", prezzo: 85, wow: 1, cur: "Si racconta che Starck lo abbia disegnato su un tovagliolo, mentre mangiava calamari" },   // 24 ott 2026: Prezzo ok (listino 85 €).
  { id: "a2-moka-18", cat: "curiosita", e: "☕", nome: "Moka da 18 tazze", desc: "Bialetti, quella gigante per i pranzi delle feste", dove: "dal casalinghi", prezzo: 89.9 },   // 24 ott 2026: 105 € è troppo alto di circa 17%.
  { id: "a2-prima-pappa", cat: "curiosita", e: "🍼", nome: "Seggiolone Peg Perego Prima Pappa Follow Me", desc: "Il Prima Pappa, quello con le ruote che si chiude", prezzo: 160 },   // 24 ott 2026: Scarto 7% su 149, ma esiste anche la versione Plus a 190 €: il nome va precisato e il prezzo giusto è 160.
  { id: "a2-reber", cat: "curiosita", e: "🍅", nome: "Spremipomodoro elettrico", desc: "Il Reber per fare la passata in casa, ad agosto", prezzo: 160 },   // stima
  { id: "a2-culla", cat: "curiosita", e: "👶", nome: "Culla di legno a dondolo", desc: "Con materasso e paracolpi, nuova", prezzo: 250 },   // stima
  { id: "a2-sacco", cat: "curiosita", e: "🛋️", nome: "Poltrona Sacco Zanotta", desc: "La pera piena di palline, la misura piccola", prezzo: 335, cur: "È nata nel 1968 ed è nella raccolta del museo MoMA di New York" },   // Sacco Small 323-335
  { id: "a2-pannolini", cat: "curiosita", e: "👶", nome: "Pannolini per un anno", desc: "Tutti quelli che servono a un neonato nel primo anno", prezzo: 700, wow: 1 },   // stima 600-800
  { id: "a2-trasloco", cat: "curiosita", e: "🚚", nome: "Trasloco di un trilocale", desc: "Ditta con furgone e operai, nella stessa città", dove: "per 80 metri quadri", prezzo: 800 },   // 600-1.000 (arredamento.it, QuiFinanza)
  { id: "a2-abito-sposa", cat: "curiosita", e: "👰", nome: "Abito da sposa", desc: "Comprato in atelier, con le prove e le modifiche", prezzo: 2000 },   // media 1.500-2.500 (matrimonio.com)
  { id: "a2-arco-flos", cat: "curiosita", e: "💡", nome: "Lampada Arco", desc: "La lampada di Flos ad arco col piede di marmo", prezzo: 2650, wow: 1, cur: "La disegnarono i fratelli Castiglioni nel 1962" },   // prezzo consigliato 2.650
  { id: "a2-linea-micra", cat: "curiosita", e: "☕", nome: "Macchina del caffè da bar", desc: "La Marzocco Linea Micra, versione piccola per casa", prezzo: 3300, wow: 1 },   // 2.900-3.330
  { id: "a2-pianoforte", cat: "curiosita", e: "🎹", nome: "Pianoforte verticale", desc: "Yamaha, nuovo, il modello più piccolo, nero lucido", prezzo: 4200 },   // stima (Yamaha b1)
  { id: "a2-bagno", cat: "curiosita", e: "🛁", nome: "Rifare il bagno", desc: "Piastrelle, sanitari e doccia nuovi, coi lavori", dove: "in un bagno di 5 metri quadri", prezzo: 10000, wow: 1 },   // 24 ott 2026: 9.000 € è nella parte bassa della forbice per un bagno completo con lavori.
  { id: "a2-eames", cat: "curiosita", e: "🪑", nome: "Poltrona Eames con pouf", desc: "La Lounge Chair di Vitra, in pelle nera", prezzo: 11000, wow: 1, cur: "La disegnarono Charles e Ray Eames nel 1956" },   // listino 11.250 (pelle nera)
  { id: "a2-piscina", cat: "curiosita", e: "🏊", nome: "Piscina interrata", desc: "Da 8 metri per 4, scavo e lavori compresi", dove: "nel giardino di casa", prezzo: 30000, wow: 1 }   // stima
);

window.SG_PREZZO.vetrine.push(
  { id: "a2-v-cucina", titolo: "La cucina dei sogni", e: "🍳", pezzi: [
    { e: "♨️", nome: "Forno a vapore da incasso", desc: "Cuoce al vapore e arrostisce, con lo schermo", prezzo: 900 },
    { e: "🧊", nome: "Frigorifero americano", desc: "Due ante affiancate, col ghiaccio dallo sportello", prezzo: 1300 },
    { e: "🍽️", nome: "Lavastoviglie silenziosa", desc: "Da incasso, 14 coperti, che non si sente", prezzo: 650 },
    { e: "🔪", nome: "Ceppo Zwilling Gourmet, 6 pezzi", desc: "Quattro coltelli, l'acciaino e il ceppo di faggio, in acciaio tedesco temprato nel ghiaccio", prezzo: 239 },   // 24 ott 2026: I ceppi tedeschi da 6 pezzi costano 229-359 €; 200 era basso.
    { e: "🥼", nome: "Grembiule col tuo nome", desc: "Ricamato a mano, per il cuoco di casa", prezzo: 25 }
  ] },
  { id: "a2-v-bebe", titolo: "Arriva il bebè", e: "👶", pezzi: [
    { e: "👶", nome: "Trio Peg Perego Veloce", desc: "Carrozzina, passeggino e ovetto per l'auto", prezzo: 782 },   // 24 ott 2026: 1.100 è troppo alto: il prezzo predefinito del trio completo va da 611 a 842 €.
    { e: "🛏️", nome: "Cameretta completa", desc: "Lettino, fasciatoio e armadio, in legno bianco", prezzo: 1800 },
    { e: "🚗", nome: "Seggiolino auto girevole", desc: "Con l'aggancio Isofix, dalla nascita ai 4 anni", prezzo: 350 },
    { e: "🧸", nome: "Orsetto gigante", desc: "Di peluche, alto un metro", prezzo: 60 },
    { e: "🍼", nome: "Biberon, 3 pezzi", desc: "Quelli anticolica, da 260 ml", prezzo: 28 }
  ] },
  { id: "a2-v-gamer", titolo: "Gamer da paura", e: "🎮", pezzi: [
    { e: "🎮", nome: "PlayStation 5 Pro", desc: "La PS5 più potente, nuova", prezzo: 899.99 },
    { e: "📺", nome: "TV OLED da 65 pollici", desc: "Quella sottilissima coi neri perfetti", prezzo: 1800 },
    { e: "🪑", nome: "Sedia da gaming", desc: "Con poggiatesta e braccioli che si regolano", prezzo: 300 },
    { e: "🎧", nome: "Cuffie da gaming", desc: "Senza fili, col microfono per parlare con la squadra", prezzo: 150 },
    { e: "🖱️", nome: "Tappetino gigante", desc: "Per mouse e tastiera, lungo quanto la scrivania", prezzo: 25 }
  ] },
  { id: "a2-v-guardaroba", titolo: "Il guardaroba nuovo", e: "👗", pezzi: [
    { e: "🚪", nome: "Armadio IKEA Pax", desc: "Bianco, 3 metri, con ante, cassetti e luci", prezzo: 900 },
    { e: "🧥", nome: "Cappotto da sartoria", desc: "Di lana, fatto su misura da un sarto", prezzo: 1800 },
    { e: "🤵", nome: "Abito da uomo su misura", desc: "Giacca e pantaloni, tre prove dal sarto", prezzo: 1500 },
    { e: "👠", nome: "Décolleté Pollini Aurora", desc: "Di pelle nera, col tacco da 7,5 cm, fatte in Italia", prezzo: 330 },   // 24 ott 2026: listino pollini.com 330 €
    { e: "🪝", nome: "Grucce di legno, 10", desc: "Per appendere bene i vestiti nuovi", prezzo: 15 }
  ] },
  { id: "a2-v-nonno", titolo: "Il nonno in pensione", e: "👴", pezzi: [
    { e: "🚲", nome: "Bici elettrica da città", desc: "Col cestino e la batteria sotto la sella", prezzo: 1800 },
    { e: "🪑", nome: "Poltrona relax elettrica", desc: "Si alza e si sdraia da sola, col telecomando", prezzo: 600 },   // 24 ott 2026: I modelli con motore e telecomando vanno da 350 a 700 €, la media è circa 550-600.
    { e: "📺", nome: "TV da 50 pollici", desc: "Per vedere bene la partita senza occhiali", prezzo: 400 },
    { e: "🍷", nome: "Cantinetta per il vino", desc: "Frigo per 24 bottiglie, con la porta di vetro", prezzo: 300 },
    { e: "🧩", nome: "La Settimana Enigmistica", desc: "Il numero di questa settimana", prezzo: 2.2 }   // 24 ott 2026: Dal luglio 2026 la copertina costa 2,20 €.
  ] },
  { id: "a2-v-smart", titolo: "Lavoro da casa", e: "💻", pezzi: [
    { e: "💻", nome: "MacBook Pro 14 pollici", desc: "Il modello base, nuovo", prezzo: 2249 },
    { e: "🪑", nome: "Sedia da ufficio IKEA Markus", desc: "Ergonomica, con lo schienale a rete e l'appoggiatesta", dove: "all'IKEA", prezzo: 159 },   // 24 ott 2026: Una «sedia ergonomica a rete» generica va da 150 a 400 € e 400 sembra alto: meglio il modello preciso, verific
    { e: "🖥️", nome: "Monitor da 27 pollici", desc: "4K, per vedere tutto più grande", prezzo: 350 },
    { e: "🗄️", nome: "Scrivania elettrica", desc: "Si alza col bottone per lavorare in piedi", prezzo: 199 },   // 24 ott 2026: Le scrivanie elettriche normali costano 130-210 €; solo i modelli top (FlexiSpot E7 Pro 369 €) arrivano a 350.
    { e: "☕", nome: "Tazza «Sono in call»", desc: "Con la scritta, per non farsi disturbare", prezzo: 12 }
  ] },
  { id: "a2-v-giardino", titolo: "Festa in giardino", e: "🌳", pezzi: [
    { e: "🔥", nome: "Barbecue Weber Spirit E-325 a gas", desc: "Tre fuochi, col coperchio e i ripiani", prezzo: 599 },   // 24 ott 2026: 1.200 era sbagliato: un Weber a gas a tre fuochi col coperchio e i ripiani costa 549-699 € nel catalogo italia
    { e: "🏊", nome: "Piscina fuori terra", desc: "Con struttura d'acciaio, 5 metri, pompa e scaletta", prezzo: 900 },
    { e: "💦", nome: "Idromassaggio gonfiabile", desc: "Per quattro persone, con le bolle", prezzo: 500 },
    { e: "🪑", nome: "Set da giardino", desc: "Tavolo e sei sedie in alluminio", prezzo: 500 },
    { e: "🦟", nome: "Zampirone, 10 spirali", desc: "Quelle verdi contro le zanzare", prezzo: 3 }
  ] },
  { id: "a2-v-salotto", titolo: "Il salotto nuovo", e: "🛋️", pezzi: [
    { e: "🛋️", nome: "Divano in pelle", desc: "Tre posti, morbido, dal mobilificio", prezzo: 2200 },
    { e: "🔊", nome: "Soundbar col subwoofer", desc: "Per sentire i film come al cinema", prezzo: 400 },
    { e: "💡", nome: "Lampada Artemide Tolomeo", desc: "Da terra, col braccio che si muove, per leggere sul divano", prezzo: 555 },   // 24 ott 2026: listino 555 € (quattro rivenditori italiani)
    { e: "🪵", nome: "Tavolino da salotto", desc: "Di legno massello, basso", prezzo: 250 },
    { e: "🪴", nome: "Ficus in vaso grande", desc: "Alto un metro e mezzo, da appartamento", prezzo: 60 }
  ] }
);

/* =========================================================
   DATI — «Il Prezzo è Giusto!», autore 3: Auto moto e bici, Viaggi e vacanze, Sport svago e spettacoli, curiosità su luoghi e sport, 8 vetrine.
   Prezzi medi in Italia nel 2026, arrotondati (vedi compiti-autori.md). Da rileggere una volta l'anno.
   I prezzi da cartellino delle moto e delle auto (7.999, 15.490…) sono lasciati come sul listino.
   ========================================================= */
window.SG_PREZZO = window.SG_PREZZO || { anno: 2026, prodotti: [], vetrine: [] };

window.SG_PREZZO.prodotti.push(
  // ---------- 🛵 AUTO, MOTO E BICI ----------
  { id: "a3-arbre-magique", cat: "motori", e: "🌲", nome: "Arbre Magique", desc: "L'alberello profumato da appendere allo specchietto", dove: "al distributore", prezzo: 2.9 },   // stima: 2,50-3,50 al distributore (dubbio)
  { id: "a3-strisce-blu", cat: "motori", e: "🅿️", nome: "Un'ora sulle strisce blu", desc: "Parcheggio in strada, nel centro", dove: "a Milano", prezzo: 3 },   // ricerca: centro Milano 3/h
  { id: "a3-monopattino-sharing", cat: "motori", e: "🛴", nome: "Monopattino in sharing", desc: "Dieci minuti di corsa, sblocco compreso", dove: "in città", prezzo: 3.5 },   // ricerca: 1 di sblocco + 0,25/min
  { id: "a3-area-c", cat: "motori", e: "🚦", nome: "Ingresso in Area C", desc: "Un giorno in auto dentro la cerchia dei Bastioni", dove: "a Milano", prezzo: 7.5, cur: "Si paga dal lunedì al venerdì, dalle 7:30 alle 19:30" },
  { id: "a3-eicma", cat: "motori", e: "🏍️", nome: "Biglietto per l'EICMA", desc: "Il salone della moto, un giorno", dove: "a Milano, a novembre", prezzo: 20 },   // ricerca: 20 (dubbio, forse 22 in cassa)
  { id: "a3-museo-ferrari", cat: "motori", e: "🏎️", nome: "Museo Ferrari", desc: "Biglietto intero per un adulto, nella bassa stagione (da ottobre ad aprile)", dove: "a Maranello", prezzo: 27 },   // 24 ott 2026: Il prezzo cambia con la stagione: va precisata nella descrizione.
  { id: "a3-vignetta-svizzera", cat: "motori", e: "🇨🇭", nome: "Vignetta svizzera", desc: "Il bollino per guidare un anno sulle autostrade svizzere", prezzo: 43, cur: "Costa 40 franchi; chi guida senza paga 200 franchi di multa" },
  { id: "a3-deposito-gomme", cat: "motori", e: "📦", nome: "Deposito delle gomme", desc: "Il gommista tiene le tue gomme invernali per l'estate", dove: "dal gommista", prezzo: 45 },   // ricerca: 40-50
  { id: "a3-autostrada-mi-rm", cat: "motori", e: "🛣️", nome: "Autostrada Milano-Roma", desc: "Il pedaggio in auto, tutto il viaggio in autostrada", prezzo: 46 },   // ricerca: 45,60
  { id: "a3-telepass", cat: "motori", e: "📟", nome: "Telepass per un anno", desc: "Il canone del dispositivo base, dodici mesi", prezzo: 47, cur: "Fino a giugno 2024 il canone era di 1,83 € al mese: poi è più che raddoppiato", wow: 1 },   // ricerca: 3,90 al mese
  { id: "a3-cambio-gomme", cat: "motori", e: "🔧", nome: "Cambio gomme di stagione", desc: "Smontare e montare le 4 ruote, con l'equilibratura", dove: "dal gommista", prezzo: 50 },   // ricerca: 40-60
  { id: "a3-traforo-monte-bianco", cat: "motori", e: "⛰️", nome: "Traforo del Monte Bianco", desc: "In auto, solo andata, dall'Italia alla Francia", prezzo: 55, cur: "La galleria è lunga 11,6 km" },   // ricerca: 52-56 (dubbio)
  { id: "a3-revisione", cat: "motori", e: "📋", nome: "Revisione dell'auto", desc: "Quella obbligatoria ogni due anni, in un centro autorizzato", prezzo: 79, cur: "La tariffa è la stessa in tutta Italia" },   // ricerca: 79,02
  { id: "a3-pieno-benzina", cat: "motori", e: "⛽", nome: "Pieno di benzina, 40 litri", desc: "Benzina verde, alla pompa self service", dove: "nell'autunno del 2026", prezzo: 80 },   // ricerca: self 2,036 al litro (12 ott 2026); prezzo che cambia (dubbio)
  { id: "a3-casco-nolan", cat: "motori", e: "⛑️", nome: "Casco Nolan N21 Visor", desc: "Il casco jet col visierino, per lo scooter", prezzo: 200 },   // ricerca: 199,99
  { id: "a3-tagliando-panda", cat: "motori", e: "🛠️", nome: "Tagliando della Panda", desc: "Olio, filtri e controlli, come dice il libretto", dove: "in un'officina Fiat", prezzo: 220 },   // ricerca: 200-250 (dubbio)
  { id: "a3-gomme-nuove", cat: "motori", e: "🚗", nome: "Quattro gomme nuove", desc: "Estive, per una Panda, montate ed equilibrate", dove: "dal gommista", prezzo: 300 },   // ricerca: 200-250 di gomme + 40-100 di montaggio (dubbio)
  { id: "a3-corso-guida-sicura", cat: "motori", e: "🚨", nome: "Corso di guida sicura", desc: "Una giornata in pista con l'istruttore, con la tua auto", dove: "in un centro ACI", prezzo: 400 },   // ricerca: circa 400 (dubbio)
  { id: "a3-monopattino-xiaomi", cat: "motori", e: "🛴", nome: "Monopattino elettrico Xiaomi", desc: "L'Electric Scooter 5, quello che si vede in ogni città", prezzo: 400 },   // ricerca: circa 400 (dubbio, forse 450)
  { id: "a3-rc-auto", cat: "motori", e: "📄", nome: "Assicurazione dell'auto", desc: "RC auto per un anno, la media di tutta Italia", prezzo: 420 },   // ricerca: media IVASS 422
  { id: "a3-brompton", cat: "motori", e: "🚲", nome: "Bici pieghevole Brompton C Line", desc: "Quella inglese che si chiude in un attimo", prezzo: 1899, cur: "Si piega in circa 20 secondi e sta sotto la scrivania" },   // 24 ott 2026: listino C Line da 1.899 €
  { id: "a3-kymco-agility", cat: "motori", e: "🛵", nome: "Kymco Agility 125", desc: "Scooter a ruote alte da 16 pollici, nuovo, versione base R16+", dove: "dal concessionario", prezzo: 2290 },   // 24 ott 2026: La versione base a ruote alte è la R16+ a 2.290 €; 2.590 era il vecchio listino della S.
  { id: "a3-liberty-125", cat: "motori", e: "🛵", nome: "Piaggio Liberty 125", desc: "Lo scooter a ruote alte della Piaggio, nuovo", dove: "dal concessionario", prezzo: 3050 },
  { id: "a3-sh-125", cat: "motori", e: "🛵", nome: "Honda SH 125", desc: "Lo scooter che si vede a ogni semaforo, nuovo", dove: "dal concessionario", prezzo: 4090, cur: "Da anni è lo scooter più venduto in Italia" },
  { id: "a3-vespa-primavera-50", cat: "motori", e: "🛵", nome: "Vespa Primavera 50", desc: "La Vespa piccola, quella che si guida a 14 anni", dove: "dal concessionario", prezzo: 4199 },
  { id: "a3-vespa-primavera-125", cat: "motori", e: "🛵", nome: "Vespa Primavera 125", desc: "La Vespa classica, nuova, del colore che vuoi", dove: "dal concessionario", prezzo: 5350, cur: "La prima Vespa è uscita nel 1946" },
  { id: "a3-sh-350", cat: "motori", e: "🛵", nome: "Honda SH 350", desc: "Il fratello grande dell'SH 125, nuovo", dove: "dal concessionario", prezzo: 6090 },
  { id: "a3-xmax-300", cat: "motori", e: "🛵", nome: "Yamaha XMAX 300", desc: "Lo scooterone da viaggio, nuovo", dove: "dal concessionario", prezzo: 6599 },
  { id: "a3-vespa-gts-310", cat: "motori", e: "🛵", nome: "Vespa GTS 310", desc: "La Vespa più grande e potente, nuova", dove: "dal concessionario", prezzo: 7250 },
  { id: "a3-citroen-ami", cat: "motori", e: "🚙", nome: "Citroën Ami", desc: "La microcar elettrica a due posti, nuova", dove: "dal concessionario", prezzo: 7990, cur: "Si guida dai 14 anni con la patente AM" },
  { id: "a3-yamaha-mt07", cat: "motori", e: "🏍️", nome: "Yamaha MT-07", desc: "Moto naked da 700 cc, nuova", dove: "dal concessionario", prezzo: 7999 },
  { id: "a3-moto-guzzi-v7", cat: "motori", e: "🏍️", nome: "Moto Guzzi V7 Stone", desc: "La moto classica col bicilindrico a V, nuova", dove: "dal concessionario", prezzo: 9300, cur: "Le Moto Guzzi si fanno a Mandello del Lario dal 1921" },
  { id: "a3-fiat-topolino", cat: "motori", e: "🚙", nome: "Fiat Topolino", desc: "La microcar elettrica della Fiat, nuova", dove: "dal concessionario", prezzo: 9890, cur: "Il nome viene dalla Fiat 500 «Topolino» del 1936" },
  { id: "a3-ducati-scrambler", cat: "motori", e: "🏍️", nome: "Ducati Scrambler Icon", desc: "La Ducati più facile da guidare, nuova", dove: "dal concessionario", prezzo: 11000 },   // ricerca: 10.890
  { id: "a3-yamaha-tmax", cat: "motori", e: "🛵", nome: "Yamaha TMAX", desc: "Il maxi scooter da 560 cc, nuovo", dove: "dal concessionario", prezzo: 13499 },
  { id: "a3-dacia-sandero", cat: "motori", e: "🚗", nome: "Dacia Sandero Streetway", desc: "L'utilitaria cinque porte, versione base", dove: "dal concessionario", prezzo: 14800 },
  { id: "a3-ligier-js50", cat: "motori", e: "🚙", nome: "Minicar Ligier JS50", desc: "La macchinetta dei ragazzi di 14 anni, nuova", dove: "dal concessionario", prezzo: 14990, cur: "Costa quasi quanto una Dacia Sandero nuova: circa 15.000 euro", wow: 1 },   // 24 ott 2026: Il prezzo va bene; la frase 'costa piu di una Sandero' non e piu vera.
  { id: "a3-honda-africa-twin", cat: "motori", e: "🏍️", nome: "Honda Africa Twin", desc: "La moto da viaggio per strada e sterrato, nuova", dove: "dal concessionario", prezzo: 15490 },
  { id: "a3-fiat-pandina", cat: "motori", e: "🚗", nome: "Fiat Pandina", desc: "La Panda ibrida di sempre, versione base", dove: "dal concessionario", prezzo: 15950, cur: "È l'auto più venduta in Italia" },
  { id: "a3-fiat-500-hybrid", cat: "motori", e: "🚗", nome: "Fiat 500 Hybrid", desc: "La nuova 500 a benzina fatta a Torino, versione base", dove: "dal concessionario", prezzo: 19900 },
  { id: "a3-toyota-yaris", cat: "motori", e: "🚗", nome: "Toyota Yaris ibrida", desc: "Cinque porte, versione base", dove: "dal concessionario", prezzo: 25000 },   // ricerca: 24.750
  { id: "a3-jeep-avenger", cat: "motori", e: "🚙", nome: "Jeep Avenger", desc: "Il piccolo SUV, versione base a benzina", dove: "dal concessionario", prezzo: 25500 },   // ricerca: 25.700
  { id: "a3-ducati-panigale", cat: "motori", e: "🏍️", nome: "Ducati Panigale V4", desc: "La superbike rossa, nuova", dove: "dal concessionario", prezzo: 28500, cur: "Prende il nome dal quartiere di Bologna dove nasce la Ducati" },   // ricerca: 28.390
  { id: "a3-alfa-junior", cat: "motori", e: "🚙", nome: "Alfa Romeo Junior", desc: "Il SUV compatto dell'Alfa, versione ibrida", dove: "dal concessionario", prezzo: 31000 },   // ricerca: 31.050
  { id: "a3-ferrari-amalfi", cat: "motori", e: "🏎️", nome: "Ferrari Amalfi", desc: "La nuova Ferrari coupé col motore V8", dove: "dal concessionario", prezzo: 240000, cur: "Prende il nome dalla costiera amalfitana", wow: 1 },

  // ---------- 🏖️ VIAGGI E VACANZE ----------
  { id: "a3-funicolare-capri", cat: "viaggi", e: "🚡", nome: "Funicolare di Capri", desc: "Dal porto alla Piazzetta, solo andata", prezzo: 2.4 },   // stima: 2,20-2,40 (dubbio)
  { id: "a3-contributo-venezia", cat: "viaggi", e: "🎫", nome: "Ticket d'ingresso a Venezia", desc: "Per chi visita la città in giornata, prenotato prima", dove: "nei giorni di folla", prezzo: 5, cur: "Chi lo prende negli ultimi tre giorni paga il doppio" },
  { id: "a3-vaporetto", cat: "viaggi", e: "🚤", nome: "Biglietto del vaporetto", desc: "Una corsa singola, vale 75 minuti", dove: "a Venezia", prezzo: 9.5, cur: "I veneziani residenti pagano la stessa corsa circa 1,50 €", wow: 1 },
  { id: "a3-cenacolo", cat: "viaggi", e: "🍞", nome: "L'Ultima Cena di Leonardo", desc: "Quindici minuti davanti al dipinto, ingresso intero", dove: "a Milano", prezzo: 15, cur: "Chi ha tra 18 e 25 anni paga solo 2 €" },
  { id: "a3-cristo-velato", cat: "viaggi", e: "🗿", nome: "Il Cristo Velato", desc: "Ingresso intero alla Cappella Sansevero", dove: "a Napoli", prezzo: 12 },   // ricerca: 12 (una guida)
  { id: "a3-leonardo-express", cat: "viaggi", e: "🚆", nome: "Leonardo Express", desc: "Il treno da Roma Termini a Fiumicino, solo andata", prezzo: 14 },
  { id: "a3-malpensa-express", cat: "viaggi", e: "🚆", nome: "Malpensa Express", desc: "Il treno da Milano Centrale all'aeroporto, solo andata", prezzo: 15 },
  { id: "a3-grotta-azzurra", cat: "viaggi", e: "🛶", nome: "Grotta Azzurra", desc: "Barchetta a remi e ingresso, per un adulto", dove: "a Capri", prezzo: 18, cur: "Per entrare ci si sdraia sul fondo della barca" },
  { id: "a3-museo-egizio", cat: "viaggi", e: "🏺", nome: "Museo Egizio", desc: "Ingresso intero: mummie, sarcofagi e gatti sacri", dove: "a Torino", prezzo: 18 },
  { id: "a3-reggia-caserta", cat: "viaggi", e: "🏰", nome: "Reggia di Caserta", desc: "Parco e appartamenti reali, ingresso intero", prezzo: 18 },
  { id: "a3-musei-vaticani", cat: "viaggi", e: "⛪", nome: "Musei Vaticani", desc: "Ingresso intero, con la Cappella Sistina", dove: "a Roma", prezzo: 20 },
  { id: "a3-scavi-pompei", cat: "viaggi", e: "🏛️", nome: "Scavi di Pompei", desc: "Biglietto intero «Pompei Express»: solo la città antica (le scarpe comode le porti tu)", prezzo: 20 },   // 24 ott 2026: Esistono due interi (20 e 25 €): la descrizione deve dire quale.
  { id: "a3-david", cat: "viaggi", e: "🗿", nome: "Il David di Michelangelo", desc: "Ingresso alla Galleria dell'Accademia", dove: "a Firenze", prezzo: 20, cur: "Da febbraio 2026 costa 4 € in più di prima" },
  { id: "a3-torre-pisa", cat: "viaggi", e: "🗼", nome: "Salita sulla Torre di Pisa", desc: "Quasi 300 scalini, a orario fisso, un adulto", prezzo: 20 },   // ricerca: 20 + eventuale prevendita
  { id: "a3-uffizi", cat: "viaggi", e: "🖼️", nome: "Biglietto degli Uffizi", desc: "Ingresso intero, in alta stagione", dove: "a Firenze", prezzo: 25 },
  { id: "a3-cupola-brunelleschi", cat: "viaggi", e: "⛪", nome: "Cupola del Brunelleschi", desc: "Il biglietto per salire in cima e vedere il Duomo", dove: "a Firenze", prezzo: 30 },   // ricerca: Brunelleschi Pass 30
  { id: "a3-palazzo-ducale", cat: "viaggi", e: "🏯", nome: "Palazzo Ducale", desc: "Ingresso intero, col Ponte dei Sospiri", dove: "a Venezia", prezzo: 35 },   // 24 ott 2026: Il biglietto comprende anche Correr e Museo Archeologico.
  { id: "a3-cinque-terre-card", cat: "viaggi", e: "🚃", nome: "Cinque Terre Card col treno", desc: "Treni e sentieri per un giorno, un adulto", dove: "in un weekend d'estate", prezzo: 33 },   // ricerca: 32,50
  { id: "a3-esta-usa", cat: "viaggi", e: "🇺🇸", nome: "ESTA per gli Stati Uniti", desc: "Il permesso online per entrare negli USA da turista", prezzo: 35, cur: "Fino a settembre 2025 costava 21 dollari, poi 40" },   // 40 dollari
  { id: "a3-vaporetto-24-ore", cat: "viaggi", e: "🚤", nome: "Vaporetto per 24 ore", desc: "Tutte le corse che vuoi per un giorno intero", dove: "a Venezia", prezzo: 25 },
  { id: "a3-roma-pass", cat: "viaggi", e: "🎟️", nome: "Roma Pass 72 ore", desc: "Due musei a scelta e autobus e metro per tre giorni", dove: "a Roma", prezzo: 62.9 },   // 24 ott 2026: Il prezzo ufficiale 2026 è 62,90 €, non 53 (un blog riportava ancora 53).
  { id: "a3-taxi-fiumicino", cat: "viaggi", e: "🚕", nome: "Taxi da Fiumicino a Roma", desc: "Dall'aeroporto al centro, dentro le Mura", prezzo: 55, cur: "La tariffa è fissa: il tassametro non conta" },
  { id: "a3-check-in-aeroporto", cat: "viaggi", e: "🛫", nome: "Check-in al banco Ryanair", desc: "La carta d'imbarco fatta in aeroporto invece che sull'app", prezzo: 55, cur: "Con l'app è gratis", wow: 1 },
  { id: "a3-skyway", cat: "viaggi", e: "🚠", nome: "Skyway Monte Bianco", desc: "Funivia andata e ritorno fino a Punta Helbronner", dove: "a Courmayeur, d'estate", prezzo: 62 },   // ricerca: 55-61 negli anni scorsi (dubbio)
  { id: "a3-noleggio-vespa", cat: "viaggi", e: "🛵", nome: "Vespa a noleggio per un giorno", desc: "Una Vespa 125 con casco e assicurazione", dove: "a Roma", prezzo: 65 },
  { id: "a3-rifugio", cat: "viaggi", e: "🏔️", nome: "Notte in rifugio", desc: "Cena, letto e colazione in un rifugio di montagna", dove: "sulle Dolomiti, d'estate", prezzo: 75 },   // stima (dubbio)
  { id: "a3-taxi-malpensa", cat: "viaggi", e: "🚕", nome: "Taxi da Malpensa a Milano", desc: "Dall'aeroporto a qualsiasi via della città", prezzo: 114, cur: "È una tariffa fissa decisa dalla Regione" },
  { id: "a3-ombrellone-rimini", cat: "viaggi", e: "⛱️", nome: "Ombrellone a Rimini", desc: "Ombrellone e due lettini per una settimana", dove: "a Rimini, ad agosto", prezzo: 160 },
  { id: "a3-taxi-acqueo", cat: "viaggi", e: "🚤", nome: "Taxi acqueo dall'aeroporto", desc: "Motoscafo tutto per voi fino a San Marco", dove: "a Venezia", prezzo: 170 },   // ricerca: 150-200 (dubbio)
  { id: "a3-gommone", cat: "viaggi", e: "🚤", nome: "Gommone senza patente", desc: "Noleggio per una giornata, fino a sei persone", dove: "in Sardegna, d'estate", prezzo: 200 },   // ricerca: 130-220 (dubbio)
  { id: "a3-ombrellone-alassio", cat: "viaggi", e: "⛱️", nome: "Ombrellone in prima fila", desc: "Ombrellone e due lettini per una settimana", dove: "ad Alassio, ad agosto", prezzo: 370 },   // 24 ott 2026: Prezzo plausibile (prima fila ad agosto tra 350 e 420 a settimana).
  { id: "a3-interrail", cat: "viaggi", e: "🎒", nome: "Interrail per un mese", desc: "Treni in tutta Europa per 30 giorni, seconda classe", prezzo: 695 },   // ricerca: 696
  { id: "a3-vacanza-due", cat: "viaggi", e: "🧳", nome: "Una settimana di vacanza", desc: "In due, in Italia, viaggio e albergo compresi", dove: "la media del 2026", prezzo: 1050 },   // ricerca: Altroconsumo 2026
  { id: "a3-settimana-rimini", cat: "viaggi", e: "🏨", nome: "Settimana a Rimini", desc: "Hotel tre stelle con colazione, per una famiglia di quattro", dove: "a Ferragosto", prezzo: 1150 },   // 24 ott 2026: testo precisato, prezzo non cambiato

  // ---------- 🎟️ SPORT, SVAGO E SPETTACOLI ----------
  { id: "a3-cinema", cat: "svago", e: "🎬", nome: "Biglietto del cinema", desc: "Un film normale, non in 3D, un adulto", dove: "la media italiana", prezzo: 7.3 },   // ricerca: 7,26
  { id: "a3-puzzle", cat: "svago", e: "🧩", nome: "Puzzle da 1.000 pezzi", desc: "Ravensburger, con un bel paesaggio sulla scatola", prezzo: 16 },
  { id: "a3-carnevale-viareggio", cat: "svago", e: "🎭", nome: "Carnevale di Viareggio", desc: "Biglietto per una sfilata dei carri, in piedi", prezzo: 16.5, cur: "I bambini più bassi di 1,20 m entrano gratis" },
  { id: "a3-romanzo", cat: "svago", e: "📚", nome: "Romanzo appena uscito", desc: "Copertina rigida, di uno scrittore famoso", dove: "in libreria", prezzo: 20 },   // stima: 18-22 (dubbio)
  { id: "a3-italia-miniatura", cat: "svago", e: "🏘️", nome: "Italia in Miniatura", desc: "Ingresso di un giorno, comprato alla cassa", dove: "a Rimini", prezzo: 24 },
  { id: "a3-noleggio-sci", cat: "svago", e: "🎿", nome: "Noleggio sci e scarponi", desc: "Sci, scarponi e casco per un giorno", dove: "in un negozio in città", prezzo: 24 },   // ricerca: Altroconsumo mediana 24
  { id: "a3-acquario-genova", cat: "svago", e: "🐬", nome: "Acquario di Genova", desc: "Ingresso intero per un adulto, squali compresi", prezzo: 25 },
  { id: "a3-escape-room", cat: "svago", e: "🔐", nome: "Escape room", desc: "Un'ora per uscire dalla stanza, a persona", dove: "in gruppo da quattro", prezzo: 25 },   // ricerca: 20-25 (dubbio)
  { id: "a3-oltremare", cat: "svago", e: "🐠", nome: "Oltremare", desc: "Il parco dei delfini, ingresso alla cassa", dove: "a Riccione", prezzo: 27 },
  { id: "a3-lucca-comics", cat: "svago", e: "🦸", nome: "Lucca Comics", desc: "Biglietto per un giorno della fiera dei fumetti", dove: "a Lucca, a fine ottobre", prezzo: 30 },   // ricerca: 26,50-34,50 (dubbio)
  { id: "a3-juventus-museum", cat: "svago", e: "🦓", nome: "Juventus Museum e stadio", desc: "Museo e giro guidato dello stadio, alla cassa", dove: "a Torino", prezzo: 30 },
  { id: "a3-aquafan", cat: "svago", e: "🌊", nome: "Aquafan", desc: "Il parco acquatico, ingresso di un giorno", dove: "a Riccione", prezzo: 32 },
  { id: "a3-padel", cat: "svago", e: "🎾", nome: "Campo da padel per un'ora", desc: "Il campo per quattro amici, la sera", dove: "a Milano", prezzo: 42 },   // 24 ott 2026: 36 è basso per la sera a Milano, ma 48 è troppo alto: l'ora serale vale circa 40-44 €.
  { id: "a3-magicland", cat: "svago", e: "🎢", nome: "Magicland", desc: "Il parco divertimenti vicino a Roma, alla cassa", prezzo: 39.9 },
  { id: "a3-rafting", cat: "svago", e: "🚣", nome: "Discesa in rafting", desc: "Due ore sul fiume col gommone e la guida, a persona", dove: "in Trentino", prezzo: 40 },   // ricerca: 30-50
  { id: "a3-leolandia", cat: "svago", e: "🦁", nome: "Leolandia", desc: "Il parco dei bambini, ingresso intero alla cassa", dove: "vicino a Bergamo", prezzo: 47.5 },
  { id: "a3-mirabilandia", cat: "svago", e: "🎡", nome: "Mirabilandia", desc: "Ingresso di un giorno, comprato alla cassa", dove: "vicino a Ravenna", prezzo: 49.9, cur: "Comprato online qualche giorno prima costa quasi la metà" },
  { id: "a3-calcetto", cat: "svago", e: "⚽", nome: "Campo da calcetto per un'ora", desc: "Calcio a cinque, erba sintetica, la sera", prezzo: 50 },   // ricerca: 36-55 (dubbio)
  { id: "a3-curva-sud-roma", cat: "svago", e: "🐺", nome: "Curva Sud all'Olimpico", desc: "Biglietto per una partita della Roma in Serie A", dove: "a Roma", prezzo: 40 },   // ricerca: 35-45 secondo la partita
  { id: "a3-inter-san-siro", cat: "svago", e: "🏟️", nome: "Biglietto per vedere l'Inter", desc: "Secondo anello rosso centrale, partita normale", dove: "a San Siro", prezzo: 55 },
  { id: "a3-palestra", cat: "svago", e: "🏋️", nome: "Un mese di palestra", desc: "Un mese in una palestra normale (ci vai la prima settimana)", dove: "la media italiana", prezzo: 60 },   // ricerca: 50-80 (dubbio)
  { id: "a3-lezione-sci", cat: "svago", e: "⛷️", nome: "Lezione di sci privata", desc: "Un'ora col maestro, solo per te", dove: "in Trentino, d'inverno", prezzo: 60 },   // ricerca: 55-60
  { id: "a3-concerto-san-siro", cat: "svago", e: "🎤", nome: "Concerto a San Siro", desc: "Biglietto per il prato, cantante italiano famoso", dove: "a Milano, d'estate", prezzo: 70 },   // ricerca: 59-80
  { id: "a3-monza-prato", cat: "svago", e: "🏁", nome: "Gran Premio di Monza", desc: "Biglietto per il prato, la domenica della gara", prezzo: 100 },
  { id: "a3-paracadute", cat: "svago", e: "🪂", nome: "Lancio col paracadute", desc: "In tandem con l'istruttore, da 4.000 metri", prezzo: 230 },   // ricerca: 190-256
  { id: "a3-arena-verona", cat: "svago", e: "🎶", nome: "Opera all'Arena di Verona", desc: "Poltronissima gold, la poltrona migliore in platea", prezzo: 245 },
  { id: "a3-mongolfiera", cat: "svago", e: "🎈", nome: "Volo in mongolfiera", desc: "Un'ora in volo con altri passeggeri, a persona", dove: "in Toscana", prezzo: 250 },   // ricerca: 220-270
  { id: "a3-dazn", cat: "svago", e: "📺", nome: "DAZN per un anno", desc: "Tutta la Serie A in streaming, pagata in una volta", prezzo: 379 },
  { id: "a3-abbonamento-curva", cat: "svago", e: "🏟️", nome: "Abbonamento in curva", desc: "Tutte le partite in casa dell'Inter, curva Nord", dove: "a San Siro", prezzo: 399 },
  { id: "a3-hospitality-mugello", cat: "svago", e: "🏍️", nome: "Rooftop Lounge al Mugello", desc: "La gara della MotoGP dal primo piano sui box, col pranzo a buffet e il bar aperto", dove: "la domenica del Gran Premio", prezzo: 910 },   // 24 ott 2026: Il prezzo della domenica è 870-910 €, non 630 € (630 non esiste: il sabato è 660-690).
  { id: "a3-calciobalilla", cat: "svago", e: "⚽", nome: "Calciobalilla Garlando", desc: "Quello da bar, con le aste che rientrano", prezzo: 580 },   // ricerca: 540-620 (dubbio)

  // ---------- 🇮🇹 CURIOSITÀ: LUOGHI, MONUMENTI E SPORT ----------
  { id: "a3-fontana-trevi", cat: "curiosita", e: "⛲", nome: "Biglietto per Fontana di Trevi", desc: "Per scendere vicino alla vasca e lanciare la monetina", dove: "a Roma, nel 2026", prezzo: 2, cur: "Fino al 2025 ci si avvicinava gratis", wow: 1 },
  { id: "a3-pantheon", cat: "curiosita", e: "🏛️", nome: "Biglietto del Pantheon", desc: "Ingresso intero per vedere il buco nel tetto", dove: "a Roma", prezzo: 5, cur: "Fino al 2023 si entrava gratis" },
  { id: "a3-colosseo", cat: "curiosita", e: "🏟️", nome: "Biglietto del Colosseo", desc: "Ingresso intero, con il Foro Romano e il Palatino", dove: "a Roma", prezzo: 18, cur: "La prima domenica del mese si entra gratis" },
  { id: "a3-gardaland", cat: "curiosita", e: "🎢", nome: "Biglietto di Gardaland", desc: "Ingresso di un giorno, comprato alla cassa", prezzo: 59, cur: "Comprato online con qualche giorno d'anticipo costa molto meno" },
  { id: "a3-skipass-cortina", cat: "curiosita", e: "🎿", nome: "Skipass di un giorno", desc: "Dolomiti Superski, un adulto, in alta stagione", dove: "a Cortina, a Natale", prezzo: 89, cur: "Lo stesso skipass vale in tutti e 12 i comprensori sciistici delle Dolomiti" },   // 24 ott 2026: 89 € coerente con il pacchetto da 10 giorni.
  { id: "a3-giro-gondola", cat: "curiosita", e: "🛶", nome: "Giro in gondola", desc: "Mezz'ora tra i canali, fino a cinque persone, di giorno", dove: "a Venezia", prezzo: 90, cur: "Di sera lo stesso giro costa di più" },
  { id: "a3-finale-internazionali", cat: "curiosita", e: "🎾", nome: "Finale degli Internazionali", desc: "Il tennis maschile sul Centrale, nei posti più lontani", dove: "a Roma, a maggio", prezzo: 590, wow: 1 },   // ricerca: 587,90
  { id: "a3-finale-sanremo", cat: "curiosita", e: "🎙️", nome: "Finale di Sanremo", desc: "Una poltrona in platea all'Ariston, la sera della finale", prezzo: 875, wow: 1 },
  { id: "a3-tribuna-monza", cat: "curiosita", e: "🏎️", nome: "Tribuna centrale a Monza", desc: "Posto davanti ai box, la domenica del Gran Premio", prezzo: 985 },   // ricerca: 984 (dato forse di un anno fa, dubbio)
  { id: "a3-elicottero-capri", cat: "curiosita", e: "🚁", nome: "Elicottero Napoli-Capri", desc: "Elicottero privato tutto per voi, solo andata", prezzo: 1900, wow: 1 },
  { id: "a3-prima-scala", cat: "curiosita", e: "🎻", nome: "La Prima della Scala", desc: "Una poltrona in platea la sera della prima", dove: "a Milano, il 7 dicembre", prezzo: 3500, cur: "La Prima è sempre il 7 dicembre, giorno di Sant'Ambrogio", wow: 1 },   // 24 ott 2026: Un'altra fonte parla di 3.300 e il listino ufficiale non risulta pubblicato (serata esaurita all'11 ottobre).
  { id: "a3-luna-di-miele", cat: "curiosita", e: "💍", nome: "Luna di miele all'estero", desc: "Quanto spende in media una coppia italiana per il viaggio", prezzo: 6750 }
);

window.SG_PREZZO.vetrine.push(
  { id: "a3-v-estate-vespa", titolo: "L'estate in Vespa", e: "🛵", pezzi: [
    { e: "🛵", nome: "Vespa Primavera 125", desc: "Nuova, la Vespa 125 di città, in versione blu", dove: "dal concessionario", prezzo: 5350 },   // 24 ott 2026: Il prezzo di 5.350 € è confermato.
    { e: "⛑️", nome: "Casco Nolan N21 Visor", desc: "Il casco jet col visierino, dello stesso colore", prezzo: 200 },
    { e: "⛱️", nome: "Ombrellone a Rimini", desc: "Ombrellone e due lettini per una settimana, in pieno agosto", dove: "in uno stabilimento balneare", prezzo: 160 },   // 24 ott 2026: Il prezzo di 160 € resta giusto (158 € trovato).
    { e: "⛽", nome: "Il pieno della Vespa", desc: "Otto litri di benzina per partire", prezzo: 16 }
  ] },
  { id: "a3-v-neve-cortina", titolo: "Neve a Cortina", e: "⛷️", pezzi: [
    { e: "🚙", nome: "Alfa Romeo Junior", desc: "Il SUV compatto per salire in montagna", dove: "dal concessionario", prezzo: 31000 },
    { e: "🎿", nome: "Skipass di un giorno", desc: "Dolomiti Superski, in alta stagione", prezzo: 89 },
    { e: "⛷️", nome: "Lezione di sci privata", desc: "Un'ora col maestro, solo per te", prezzo: 60 },
    { e: "🎿", nome: "Noleggio sci e scarponi", desc: "Sci, scarponi e casco per un giorno", prezzo: 55 }   // 24 ott 2026: 24 è il prezzo di città, a Cortina un giorno di sci, scarponi e casco costa 51-65 €.
  ] },
  { id: "a3-v-gran-premio", titolo: "Gran Premio a Monza", e: "🏁", pezzi: [
    { e: "🏍️", nome: "Ducati Panigale V4", desc: "La superbike rossa, nuova", prezzo: 28500 },
    { e: "🏎️", nome: "Tribuna centrale a Monza", desc: "Davanti ai box, la domenica della gara", prezzo: 985 },
    { e: "🏎️", nome: "Museo Ferrari", desc: "Biglietto intero, per finire la gita a Maranello", prezzo: 27 },
    { e: "🌲", nome: "Arbre Magique", desc: "Gusto «auto nuova», da appendere allo specchietto", prezzo: 2.9 }
  ] },
  { id: "a3-v-sportivo", titolo: "Lo sportivo di casa", e: "🏆", pezzi: [
    { e: "🚲", nome: "Bici pieghevole Brompton", desc: "Per andare in ufficio pedalando", prezzo: 1749 },
    { e: "⚽", nome: "Calciobalilla Garlando", desc: "Quello da bar, per il salotto", prezzo: 580 },
    { e: "🏟️", nome: "Abbonamento in curva", desc: "Tutte le partite in casa dell'Inter", prezzo: 399 },
    { e: "📺", nome: "DAZN per un anno", desc: "Per le partite in trasferta, dal divano", prezzo: 379 },
    { e: "🎾", nome: "Campo da padel per un'ora", desc: "La sfida del giovedì con gli amici", prezzo: 36 }
  ] },
  { id: "a3-v-avventura", titolo: "Vita spericolata", e: "🪂", pezzi: [
    { e: "🚙", nome: "Jeep Avenger", desc: "Il piccolo SUV per andare dove vuoi", dove: "dal concessionario", prezzo: 25500 },
    { e: "🎈", nome: "Volo in mongolfiera", desc: "Un'ora sopra le colline della Toscana", prezzo: 250 },
    { e: "🪂", nome: "Lancio col paracadute", desc: "In tandem con l'istruttore, da 4.000 metri", prezzo: 230 },
    { e: "🚣", nome: "Discesa in rafting", desc: "Due ore sul fiume, a testa bagnata", prezzo: 40 }
  ] },
  { id: "a3-v-moto-sogno", titolo: "In moto fino in Svizzera", e: "🏍️", pezzi: [
    { e: "🏍️", nome: "Honda Africa Twin", desc: "La moto da viaggio per strada e sterrato", dove: "dal concessionario", prezzo: 15490 },
    { e: "⛑️", nome: "Casco Nolan N20-2 Visor", desc: "Il casco jet col visierino", prezzo: 209.99 },   // 24 ott 2026: Il Nolan N21 Visor non è più a catalogo: il casco jet col visierino oggi è il N20-2 Visor.
    { e: "⛰️", nome: "Traforo del Monte Bianco", desc: "Solo andata, per fare il giro lungo", prezzo: 37.3 },   // 24 ott 2026: Per la moto la corsa semplice costa 37,30 €: 55 € era l'auto, 40 € della proposta è vicino ma non esatto.
    { e: "🇨🇭", nome: "Vignetta svizzera", desc: "Il bollino per le autostrade svizzere", prezzo: 43 },
    { e: "🏍️", nome: "Biglietto per l'EICMA", desc: "Il salone della moto, dove è nato il sogno", prezzo: 20 }
  ] },
  { id: "a3-v-prima-auto", titolo: "La prima auto", e: "🚗", pezzi: [
    { e: "🚗", nome: "Fiat Pandina", desc: "La Panda ibrida di sempre, nuova", dove: "dal concessionario", prezzo: 15950 },
    { e: "📄", nome: "Assicurazione dell'auto", desc: "RC auto per il primo anno", prezzo: 420 },
    { e: "📟", nome: "Telepass per un anno", desc: "Per non fare la fila al casello", prezzo: 47 },
    { e: "🅿️", nome: "Un'ora sulle strisce blu", desc: "Il primo parcheggio in centro, a Milano", prezzo: 3 }
  ] }
);

/* =========================================================
   DATI — «Il Prezzo è Giusto!», giro in più (autore 4): cose care e sicure sopra i 2.000 € (auto e moto
   dai listini 2026, orologi, tecnologia, case e affitti), un po' di viaggi e di spettacoli, 5 vetrine.
   Prezzi controllati su internet a ottobre 2026 (fonte accanto a ogni voce), arrotondati col passo del gioco
   (vedi compiti-autori.md). I prezzi da cartellino (2.599, 3.499, 679,99…) sono lasciati come sul listino.
   Da rileggere una volta l'anno.
   ========================================================= */
window.SG_PREZZO = window.SG_PREZZO || { anno: 2026, prodotti: [], vetrine: [] };

window.SG_PREZZO.prodotti.push(
  // ---------- 🛵 AUTO NUOVE (listini 2026, versione base) ----------
  { id: "a4-renault-clio", cat: "motori", e: "🚗", nome: "Renault Clio", desc: "La Clio nuova, cinque porte, versione base TCe 115 CV", dove: "dal concessionario", prezzo: 18900 },   // 24 ott 2026: La Clio nuova parte da 18.900 €, non 16.500 (prezzo della generazione vecchia).
  { id: "a4-dacia-spring", cat: "motori", e: "🔌", nome: "Dacia Spring", desc: "La piccola elettrica della Dacia, nuova", dove: "dal concessionario", prezzo: 18000 },   // patentati.it 2026: da 17.900
  { id: "a4-dacia-duster", cat: "motori", e: "🚙", nome: "Dacia Duster", desc: "Il SUV della Dacia, nuovo, versione base", dove: "dal concessionario", prezzo: 20000 },   // patentati.it 2026: da 19.900
  { id: "a4-fiat-grande-panda", cat: "motori", e: "🚗", nome: "Fiat Grande Panda ibrida", desc: "La Panda nuova, quella più grande, versione base", dove: "dal concessionario", prezzo: 20500, cur: "Si fa in Serbia, a Kragujevac, ma il nome è un omaggio alla Panda del 1980" },   // patentati.it 2026: Hybrid da 20.400
  { id: "a4-toyota-aygo-x", cat: "motori", e: "🚗", nome: "Toyota Aygo X", desc: "La citycar della Toyota, nuova, versione base", dove: "dal concessionario", prezzo: 21000 },   // patentati.it 2026: da 20.850
  { id: "a4-vw-polo", cat: "motori", e: "🚗", nome: "Volkswagen Polo", desc: "L'utilitaria tedesca, nuova, versione base", dove: "dal concessionario", prezzo: 22000 },   // patentati.it 2026: da 22.250
  { id: "a4-lancia-ypsilon", cat: "motori", e: "🚗", nome: "Lancia Ypsilon ibrida", desc: "La Ypsilon nuova, versione base", dove: "dal concessionario", prezzo: 25000 },   // patentati.it 2026: Ibrida da 25.200
  { id: "a4-renault-5", cat: "motori", e: "🔌", nome: "Renault 5 elettrica", desc: "La «R5» rifatta da capo, a batteria, versione base (Evolution)", dove: "dal concessionario", prezzo: 28150, cur: "La prima Renault 5 uscì nel 1972" },   // 24 ott 2026: La Five da 24.900 € non è più in listino.
  { id: "a4-fiat-600", cat: "motori", e: "🚙", nome: "Fiat 600 Hybrid", desc: "Il SUV piccolo della Fiat, nuovo, versione base", dove: "dal concessionario", prezzo: 26000 },   // patentati.it 2026: da 25.900
  { id: "a4-vw-golf", cat: "motori", e: "🚗", nome: "Volkswagen Golf", desc: "La Golf nuova, versione base a benzina", dove: "dal concessionario", prezzo: 31500, cur: "Dal 1974 ne hanno costruite più di 35 milioni" },   // patentati.it 2026: da 31.350
  { id: "a4-vw-t-roc", cat: "motori", e: "🚙", nome: "Volkswagen T-Roc", desc: "Il SUV compatto della Volkswagen, versione base", dove: "dal concessionario", prezzo: 34500 },   // patentati.it 2026: da 34.300
  { id: "a4-bmw-serie-1", cat: "motori", e: "🚗", nome: "BMW Serie 1", desc: "La BMW più piccola, nuova, versione base", dove: "dal concessionario", prezzo: 35500 },   // patentati.it 2026: da 35.400
  { id: "a4-toyota-rav4", cat: "motori", e: "🚙", nome: "Toyota RAV4", desc: "Il SUV ibrido della Toyota, nuovo, versione base", dove: "dal concessionario", prezzo: 45500 },   // patentati.it 2026: da 45.700
  { id: "a4-vw-id-buzz", cat: "motori", e: "🚐", nome: "Volkswagen ID. Buzz", desc: "Il pulmino Volkswagen rinato, elettrico, nuovo", dove: "dal concessionario", prezzo: 62000, wow: 1, cur: "È l'erede del «Bulli» degli anni '50, il pulmino dei figli dei fiori" },   // patentati.it 2026: da 61.840
  { id: "a4-defender-90", cat: "motori", e: "🚙", nome: "Land Rover Defender 90", desc: "Il fuoristrada inglese a tre porte, nuovo", dove: "dal concessionario", prezzo: 70500 },   // patentati.it 2026: da 70.400
  { id: "a4-jeep-wrangler", cat: "motori", e: "🚙", nome: "Jeep Wrangler", desc: "Il fuoristrada americano, nuovo, versione base", dove: "dal concessionario", prezzo: 71500, cur: "Discende dalla Jeep Willys dei soldati della Seconda guerra mondiale" },   // patentati.it 2026: da 71.500
  { id: "a4-maserati-grecale", cat: "motori", e: "🔱", nome: "Maserati Grecale", desc: "Il SUV della Maserati, versione base", dove: "dal concessionario", prezzo: 80000, cur: "Si chiama come un vento, come tante Maserati: Ghibli, Levante, Mistral" },   // patentati.it 2026: da 79.900
  { id: "a4-toyota-land-cruiser", cat: "motori", e: "🚙", nome: "Toyota Land Cruiser", desc: "Il fuoristrada giapponese, nuovo, versione base", dove: "dal concessionario", prezzo: 87500 },   // patentati.it 2026: da 87.500
  { id: "a4-porsche-911", cat: "motori", e: "🏎️", nome: "Porsche 911", desc: "La sportiva tedesca, nuova, versione base", dove: "dal concessionario", prezzo: 143000, wow: 1, cur: "La prima 911 fu presentata nel 1963" },   // patentati.it 2026: da 142.855
  // ---------- 🏍️ MOTO E BICI (listini 2026) ----------
  { id: "a4-harley-nightster", cat: "motori", e: "🏍️", nome: "Harley-Davidson Nightster", desc: "La Sportster col motore da 975 cc, nuova", dove: "dal concessionario", prezzo: 11500, cur: "Nel 2026 il listino è sceso di 4.400 €" },   // InMoto e MotorBox 2026: 11.500 (prima 15.900)
  { id: "a4-ducati-monster", cat: "motori", e: "🏍️", nome: "Ducati Monster", desc: "La naked di Borgo Panigale, nuova, versione base", dove: "dal concessionario", prezzo: 13000, cur: "Il primo Monster è del 1993" },   // inSella 2026: 12.890
  { id: "a4-pinarello-dogma", cat: "motori", e: "🚴", nome: "Pinarello Dogma F", desc: "La bici da corsa dei campioni, col cambio elettronico", dove: "nel negozio di bici", prezzo: 15000, wow: 1, cur: "Pinarello nasce a Treviso nel 1952" },   // 24 ott 2026: 'Si fanno a Treviso' non e confermato (molti telai Pinarello sono prodotti in Asia): meglio dire solo dove e n
  { id: "a4-bmw-r12-ninet", cat: "motori", e: "🏍️", nome: "BMW R 12 nineT", desc: "La BMW classica col motore boxer, nuova", dove: "dal concessionario", prezzo: 19000 },   // MotorBox, listino BMW 2026 chiavi in mano: 18.950
  { id: "a4-bmw-r1300gs", cat: "motori", e: "🏍️", nome: "BMW R 1300 GS", desc: "La maxi enduro tedesca dei grandi viaggi, versione base", dove: "dal concessionario", prezzo: 21500 },   // MotorBox, listino BMW 2026 chiavi in mano: 21.500

  // ---------- 👟 OROLOGI ----------
  { id: "a4-omega-moonwatch", cat: "vestiti", e: "⌚", nome: "Omega Speedmaster Moonwatch", desc: "L'orologio andato sulla Luna, in acciaio, col vetro Hesalite", dove: "in boutique", prezzo: 7900, cur: "Era al polso di Buzz Aldrin sulla Luna nel 1969" },   // 24 ott 2026: 8.900 € è la versione col vetro zaffiro.
  { id: "a4-rolex-submariner", cat: "vestiti", e: "⌚", nome: "Rolex Submariner Date", desc: "L'orologio da sub, acciaio e quadrante nero", dove: "dal rivenditore autorizzato", prezzo: 11000, wow: 1, cur: "Trovarlo in negozio è un'impresa: spesso c'è la lista d'attesa" },   // Wristler, gennaio 2026 (UE): 11.100

  // ---------- 📱 TECNOLOGIA DI FASCIA ALTA ----------
  { id: "a4-galaxy-fold8", cat: "tech", e: "📱", nome: "Samsung Galaxy Z Fold8", desc: "Il telefono che si apre come un libro, 256 GB", prezzo: 2099 },   // tuttoandroid e telefonino.net, set 2026: listino 2.099
  { id: "a4-dji-mavic", cat: "tech", e: "🚁", nome: "Drone DJI Mavic 4 Pro", desc: "Con tre batterie, la borsa e il radiocomando", prezzo: 2750 },   // Macitynet: Fly More Combo 2.729 (Unieuro: consigliato 2.729)
  { id: "a4-studio-display", cat: "tech", e: "🖥️", nome: "Apple Studio Display XDR", desc: "Lo schermo da 27 pollici, col piede regolabile", dove: "all'Apple Store", prezzo: 3499, wow: 1, cur: "Il computer non c'è: è solo lo schermo" },   // Apple Italia, marzo 2026: 3.499
  { id: "a4-leica-q3", cat: "tech", e: "📷", nome: "Fotocamera Leica Q3", desc: "La compatta tedesca col bollino rosso, obiettivo fisso", prezzo: 6550, wow: 1 },   // 24 ott 2026: 5.950 era il prezzo di lancio del 2023; oggi il listino italiano è 6.550 €.

  // ---------- 🇮🇹 CASE, AFFITTI E UNIVERSITÀ ----------
  { id: "a4-stanza-milano", cat: "curiosita", e: "🛏️", nome: "Stanza singola in affitto", desc: "In un appartamento con altri studenti, per un mese", dove: "a Milano", prezzo: 700 },   // QuiFinanza 2026: 640-730
  { id: "a4-mq-milano", cat: "curiosita", e: "🏢", nome: "Un metro quadro di casa", desc: "La media degli appartamenti in vendita, al metro", dove: "a Milano", prezzo: 5800, wow: 1, cur: "In pieno centro si superano gli 11.000 € al metro quadro" },   // Wikicasa lug 2026: 5.933; Immobiliare.it Insights: circa 5.700
  { id: "a4-affitto-milano", cat: "curiosita", e: "🏠", nome: "Un anno d'affitto", desc: "Un appartamento di 60 metri quadri, dodici mesi", dove: "a Milano", prezzo: 16500, wow: 1 },   // idealista II trim 2026: 23,3 €/m² al mese; Wikicasa: 22,4
  { id: "a4-bocconi", cat: "curiosita", e: "🎓", nome: "Un anno all'università Bocconi", desc: "La retta piena del primo anno di triennale", dove: "a Milano", prezzo: 17000, wow: 1 },   // unibocconi.it, a.a. 2026-27: 17.000

  // ---------- 🎟️ SPORT, SPETTACOLI E PASSIONI ----------
  { id: "a4-maglia-italia", cat: "svago", e: "👕", nome: "Maglia della Nazionale", desc: "Quella identica ai giocatori, versione Authentic", dove: "nel negozio ufficiale", prezzo: 150 },   // listino Adidas 2026: 149,95 (Performance per i tifosi: 100)
  { id: "a4-disney-plus", cat: "svago", e: "🎬", nome: "Disney+ Premium per un anno", desc: "Pagato tutto in una volta, fino a 4 schermi insieme", prezzo: 159.9 },   // Selectra, Multiplayer.it: 159,90
  { id: "a4-lego-titanic", cat: "svago", e: "🚢", nome: "LEGO Titanic", desc: "Il set da 9.090 pezzi, lungo più di un metro", prezzo: 679.99, wow: 1, cur: "Una volta montato è lungo 1 metro e 35 centimetri" },   // lego.com Italia: 679,99
  { id: "a4-finale-champions", cat: "svago", e: "🏆", nome: "Finale di Champions League", desc: "Un posto in prima categoria, il più bello", dove: "a Budapest, maggio 2026", prezzo: 950, cur: "I biglietti si comprano solo col sorteggio della UEFA" },   // Goal.com, UEFA 2026: cat. 1 950
  { id: "a4-olimpiadi", cat: "svago", e: "🏅", nome: "Cerimonia d'apertura olimpica", desc: "Il posto migliore, Olimpiadi di Milano Cortina", dove: "a San Siro, a febbraio", prezzo: 2026, wow: 1, cur: "Prezzo scelto apposta: lo stesso numero dell'anno dei Giochi" },   // QuiFinanza: cat. A 2.026
  { id: "a4-gibson-les-paul", cat: "svago", e: "🎸", nome: "Chitarra Gibson Les Paul", desc: "La Standard anni '50, quella dei grandi del rock", dove: "nel negozio di musica", prezzo: 2599 },   // gibson.com Italia: 2.599

  // ---------- 🏖️ VIAGGI IN EUROPA E SULLA NEVE ----------
  { id: "a4-park-guell", cat: "viaggi", e: "🦎", nome: "Biglietto del Park Güell", desc: "Il parco di Gaudí con la lucertola di mosaico", dove: "a Barcellona", prezzo: 18, cur: "Fino al 2025 costava 10 €" },   // da gennaio 2026: 18 (artvisitguide e altri)
  { id: "a4-alhambra", cat: "viaggi", e: "🏰", nome: "Biglietto dell'Alhambra", desc: "Il palazzo dei re mori, biglietto generale", dove: "a Granada", prezzo: 21 },   // lovegranada 2026: 21 ufficiale
  { id: "a4-louvre", cat: "viaggi", e: "🖼️", nome: "Biglietto del Louvre", desc: "Per vedere la Gioconda, biglietto intero", dove: "a Parigi", prezzo: 22, cur: "Dal 2026 chi arriva da fuori Europa paga 32 €" },   // AP, gennaio 2026: 22 per UE, 32 extra UE
  { id: "a4-acropoli", cat: "viaggi", e: "🏛️", nome: "Biglietto dell'Acropoli", desc: "Per salire al Partenone, biglietto intero", dove: "ad Atene", prezzo: 30, cur: "Nel 2024 è passato da 20 a 30 €" },   // AGI 2023, guide 2026: 30
  { id: "a4-torre-eiffel", cat: "viaggi", e: "🗼", nome: "Salita sulla Torre Eiffel", desc: "In ascensore fino in cima, biglietto intero", dove: "a Parigi", prezzo: 37, cur: "In cima si sta a 276 metri d'altezza" },   // guide 2026: 36,70
  { id: "a4-dolomiti-superski", cat: "viaggi", e: "⛷️", nome: "Skipass di sei giorni", desc: "Dolomiti Superski: 1.200 km di piste con un pass solo", dove: "in alta stagione", prezzo: 455 }   // il Dolomiti 2026: 6 giorni alta stagione 453
);

window.SG_PREZZO.vetrine.push(
  { id: "a4-v-fuorisede", titolo: "Fuorisede a Milano", e: "🎓", pezzi: [
    { e: "🎓", nome: "Un anno all'università Bocconi", desc: "La retta piena del primo anno di triennale", prezzo: 17000 },
    { e: "🛏️", nome: "Dieci mesi di stanza singola", desc: "In un appartamento con altri studenti", dove: "a Milano", prezzo: 7000 },
    { e: "💻", nome: "MacBook Air 13 pollici", desc: "Per gli appunti e per le serie TV", prezzo: 1449 },
    { e: "🧺", nome: "Lavatrice a gettone, 8 kg", desc: "Il bucato della domenica sera, un lavaggio", dove: "in lavanderia self-service", prezzo: 4 }
  ] },
  { id: "a4-v-parigi", titolo: "Fotografo a Parigi", e: "📸", pezzi: [
    { e: "📷", nome: "Fotocamera Leica Q3", desc: "La compatta tedesca col bollino rosso", prezzo: 5950 },
    { e: "🚁", nome: "Drone DJI Mavic 4 Pro", desc: "Per le foto dall'alto, con tre batterie", prezzo: 2750 },
    { e: "🗼", nome: "Salita sulla Torre Eiffel", desc: "In ascensore fino in cima", dove: "a Parigi", prezzo: 37 },
    { e: "🖼️", nome: "Biglietto del Louvre", desc: "Per fotografare la Gioconda… da lontano", dove: "a Parigi", prezzo: 22 }
  ] },
  { id: "a4-v-rockstar", titolo: "Vita da rockstar", e: "🎸", pezzi: [
    { e: "🎸", nome: "Chitarra Gibson Les Paul", desc: "La Standard anni '50, quella dei grandi del rock", prezzo: 2599 },
    { e: "🏍️", nome: "Harley-Davidson Nightster", desc: "Per arrivare al concerto col rombo giusto", dove: "dal concessionario", prezzo: 11500 },
    { e: "🕶️", nome: "Ray-Ban Wayfarer", desc: "Gli occhiali da sole neri, anche di notte", prezzo: 160 },
    { e: "💿", nome: "Disco in vinile", desc: "Il primo album, autografato da nessuno", prezzo: 30 }
  ] },
  { id: "a4-v-campioni", titolo: "Notte da campioni", e: "🏆", pezzi: [
    { e: "🏆", nome: "Finale di Champions League", desc: "Un posto in prima categoria", dove: "a Budapest", prezzo: 950 },
    { e: "👕", nome: "Maglia della Nazionale", desc: "Quella identica ai giocatori", prezzo: 150 },
    { e: "⌚", nome: "Rolex Submariner Date", desc: "Per guardare quanto manca al fischio finale", prezzo: 11000 },
    { e: "🧣", nome: "Sciarpa della squadra", desc: "Quella ufficiale, da sventolare allo stadio", prezzo: 25 }   // 24 ott 2026: 20 è troppo basso per una sciarpa ufficiale di club (circa 25 €).
  ] },
  { id: "a4-v-collezionista", titolo: "Il collezionista", e: "🧱", pezzi: [
    { e: "🚢", nome: "LEGO Titanic", desc: "Il set da 9.090 pezzi, da montare con calma", prezzo: 679.99 },
    { e: "⌚", nome: "Omega Speedmaster Moonwatch Professional", desc: "Con il vetro zaffiro e il bracciale in acciaio, come quello andato sulla Luna", prezzo: 8900 },   // 24 ott 2026: Il prezzo 8.900 è giusto per la versione con vetro zaffiro; senza il dettaglio sul vetro i giocatori potrebber
    { e: "🖥️", nome: "Apple Studio Display XDR", desc: "Lo schermo da 27 pollici per guardarli tutti", prezzo: 3499 },
    { e: "🥚", nome: "Tamagotchi", desc: "L'ovetto originale, da tenere ancora nella scatola", prezzo: 22 }
  ] }
);

/* =========================================================
   DATI — «Il Prezzo è Giusto!», vetrine in più (autore 5, 23 ott 2026): 36 vetrine nuove (viaggi, feste, passioni,
   casa). Il proprietario: «giocando una trentina di partite ritrovi un po' le stesse cose». Ognuna ha un premio grosso,
   qualcuno medio e uno piccolo e simpatico; prezzi medi in Italia nel 2026 (i premi più cari e di marca ricontrollati
   su internet a ottobre 2026), arrotondati come gli altri. Da rileggere una volta l'anno.
   ========================================================= */
window.SG_PREZZO = window.SG_PREZZO || { anno: 2026, prodotti: [], vetrine: [] };

window.SG_PREZZO.vetrine.push(
  { id: "a5-v-maldive", titolo: "Luna di miele alle Maldive", e: "🏝️", pezzi: [
    { e: "🏠", nome: "Una settimana in villa sull'acqua", desc: "Sette notti per due nella palafitta sull'oceano, con la colazione", prezzo: 8400 },
    { e: "✈️", nome: "Due voli in business per Malé", desc: "Andata e ritorno da Milano, con lo scalo", prezzo: 7000 },
    { e: "🐟", nome: "Immersione con le mante", desc: "Uscita in barca con la guida, per due", prezzo: 300 },
    { e: "🧴", nome: "Crema solare SPF 50", desc: "Il flacone grande, per non tornare a casa rossi", prezzo: 15 }
  ] },
  { id: "a5-v-laurea", titolo: "Finalmente dottore", e: "🎓", pezzi: [
    { e: "🍽️", nome: "Pranzo di laurea per 30", desc: "Antipasti, primo, secondo e torta al ristorante", prezzo: 1500 },
    { e: "🌴", nome: "Viaggio a Ibiza con gli amici", desc: "Volo e una settimana in appartamento", prezzo: 900 },
    { e: "📘", nome: "Tre copie della tesi rilegate", desc: "Copertina rigida con le scritte dorate", prezzo: 90 },
    { e: "🌿", nome: "Corona d'alloro", desc: "Fresca, fatta dal fiorista la mattina stessa", prezzo: 40 },
    { e: "🍬", nome: "Confetti rossi, un chilo", desc: "Rossi come vuole la tradizione della laurea", prezzo: 25 }
  ] },
  { id: "a5-v-prima-casa", titolo: "La prima casa", e: "🏠", pezzi: [
    { e: "🍳", nome: "Cucina IKEA completa", desc: "Mobili, piano di lavoro ed elettrodomestici", prezzo: 3500 },
    { e: "✍️", nome: "Il rogito dal notaio", desc: "La parcella del notaio per una prima casa", prezzo: 2500 },
    { e: "🛏️", nome: "Letto matrimoniale col materasso", desc: "Contenitore e materasso in memory", prezzo: 1200 },
    { e: "🔑", nome: "Zerbino «Benvenuti»", desc: "Il primo acquisto di ogni casa nuova", prezzo: 15 }
  ] },
  { id: "a5-v-camper", titolo: "In camper per l'Europa", e: "🚐", pezzi: [
    { e: "🚐", nome: "Camper a noleggio, due settimane", desc: "Sei posti letto, ad agosto", prezzo: 2800 },
    { e: "🚲", nome: "Due bici col portabici", desc: "Da attaccare dietro il camper", prezzo: 800 },
    { e: "⛽", nome: "Il pieno del camper", desc: "Un serbatoio di gasolio", prezzo: 110 },
    { e: "🪑", nome: "Tavolino e sedie pieghevoli", desc: "Per la cena davanti al lago", prezzo: 90 },
    { e: "🏕️", nome: "Una notte in campeggio", desc: "La piazzola col camper e la corrente", prezzo: 45 }
  ] },
  { id: "a5-v-crociera", titolo: "Crociera nel Mediterraneo", e: "🛳️", pezzi: [
    { e: "🛳️", nome: "Sette notti in crociera, per due", desc: "Cabina col balcone, Genova, Marsiglia, Barcellona…", prezzo: 2400 },
    { e: "🍹", nome: "Pacchetto bevande per due", desc: "Tutto incluso per la settimana", prezzo: 840 },
    { e: "🏛️", nome: "Escursione ad Atene", desc: "Gita all'Acropoli con la guida, a testa", prezzo: 90 },
    { e: "📷", nome: "Foto della cena di gala", desc: "Stampata, con la cornice della nave", prezzo: 25 }
  ] },
  { id: "a5-v-pizzaiolo", titolo: "Il pizzaiolo di casa", e: "🍕", pezzi: [
    { e: "🔥", nome: "Forno a legna da giardino", desc: "In acciaio e refrattario, cuoce in 90 secondi", prezzo: 2500 },
    { e: "👨‍🍳", nome: "Corso da pizzaiolo", desc: "Una settimana con un maestro napoletano", prezzo: 450 },
    { e: "🪵", nome: "Pala per pizza", desc: "In alluminio, col manico lungo", prezzo: 45 },
    { e: "🌾", nome: "Farina per pizza, 25 kg", desc: "Il sacco grande da pizzeria", prezzo: 30 },
    { e: "🧀", nome: "Mozzarella di bufala, 1 kg", desc: "Campana, arrivata la mattina", prezzo: 16 }
  ] },
  { id: "a5-v-caffe", titolo: "Il caffè perfetto", e: "☕", pezzi: [
    { e: "☕", nome: "Macchina espresso La Marzocco", desc: "La Linea Mini R, quella dei bar ma per casa", prezzo: 5300 },
    { e: "⚙️", nome: "Macinacaffè Eureka", desc: "Fatto a Firenze, macina al momento", prezzo: 450 },
    { e: "🫘", nome: "Caffè in grani, 1 kg", desc: "Miscela da torrefazione", prezzo: 30 },
    { e: "🫖", nome: "Moka Bialetti da 3 tazze", desc: "Per i giorni di nostalgia", prezzo: 30 }
  ] },
  { id: "a5-v-eolie", titolo: "In gommone alle Eolie", e: "🚤", pezzi: [
    { e: "🚤", nome: "Gommone con motore da 40 cavalli", desc: "Sei metri, si porta senza patente", prezzo: 18000 },
    { e: "⚓", nome: "Ormeggio per una settimana", desc: "Al porto di Lipari, ad agosto", prezzo: 700 },
    { e: "🦺", nome: "Quattro giubbotti salvagente", desc: "Obbligatori a bordo", prezzo: 120 },
    { e: "🍋", nome: "Granita alla mandorla", desc: "Al bar del porto, con la brioche", prezzo: 5 }
  ] },
  { id: "a5-v-vela", titolo: "Una settimana in barca a vela", e: "⛵", pezzi: [
    { e: "⛵", nome: "Barca a vela con skipper", desc: "Una settimana in Croazia, per sei", prezzo: 4500 },
    { e: "🧭", nome: "Corso di vela", desc: "Dieci uscite in mare col maestro", prezzo: 450 },
    { e: "🧥", nome: "Giacca cerata da vela", desc: "Antivento e impermeabile", prezzo: 200 },
    { e: "🧢", nome: "Cappellino da marinaio", desc: "Bianco, con l'ancora ricamata", prezzo: 20 }
  ] },
  { id: "a5-v-giardino", titolo: "Il pollice verde", e: "🌱", pezzi: [
    { e: "🤖", nome: "Robot tagliaerba Husqvarna", desc: "Taglia il prato da solo, anche quando piove", prezzo: 1500 },
    { e: "🏡", nome: "Serra da giardino", desc: "In policarbonato, tre metri per due", prezzo: 600 },
    { e: "🌻", nome: "Semi per l'orto, 30 bustine", desc: "Pomodori, zucchine, basilico e tanto altro", prezzo: 45 },
    { e: "🚿", nome: "Annaffiatoio di latta", desc: "Dieci litri, verde come una volta", prezzo: 25 }
  ] },
  { id: "a5-v-palestra", titolo: "Remise en forme", e: "💪", pezzi: [
    { e: "🏃", nome: "Tapis roulant per casa", desc: "Pieghevole, fino a 18 km/h", prezzo: 900 },
    { e: "🏋️", nome: "Un anno in palestra", desc: "Abbonamento con sala pesi e corsi", prezzo: 600 },
    { e: "🧑‍🏫", nome: "Dieci lezioni col personal trainer", desc: "Un'ora a lezione, in palestra", prezzo: 400 },
    { e: "⚖️", nome: "Bilancia smart", desc: "Pesa e misura il grasso, manda tutto al telefono", prezzo: 60 },
    { e: "🥤", nome: "Shaker per le proteine", desc: "Quello che fa rumore nello spogliatoio", prezzo: 10 }
  ] },
  { id: "a5-v-ciclista", titolo: "Il ciclista della domenica", e: "🚴", pezzi: [
    { e: "🚴", nome: "Bici da corsa Bianchi in carbonio", desc: "Celeste come vuole la tradizione", prezzo: 3500 },
    { e: "📟", nome: "Ciclocomputer Garmin Edge", desc: "Navigatore, velocità e battiti", prezzo: 400 },
    { e: "👕", nome: "Maglia e salopette", desc: "Il completo tecnico estivo", prezzo: 180 },
    { e: "🏁", nome: "Iscrizione a una granfondo", desc: "Cento chilometri con il pacco gara", prezzo: 60 },
    { e: "🍶", nome: "Borraccia", desc: "Da 750 ml, per la salita", prezzo: 10 }
  ] },
  { id: "a5-v-maratona", titolo: "La maratona di New York", e: "🏃", pezzi: [
    { e: "🗽", nome: "Viaggio con il pettorale", desc: "Volo, cinque notti a Manhattan e iscrizione alla gara", prezzo: 3200 },
    { e: "⌚", nome: "Orologio Garmin Forerunner", desc: "GPS e battito per allenarsi", prezzo: 450 },
    { e: "👟", nome: "Scarpe da corsa in carbonio", desc: "Le scarpe dei record", prezzo: 280 },
    { e: "🍯", nome: "Gel energetici, 10 bustine", desc: "Per non fermarsi al trentesimo chilometro", prezzo: 25 }
  ] },
  { id: "a5-v-golf", titolo: "Diciotto buche", e: "⛳", pezzi: [
    { e: "🏌️", nome: "Un anno al golf club", desc: "La quota annuale, campo da 18 buche", prezzo: 2500 },
    { e: "🎒", nome: "Sacca con le mazze", desc: "Set completo, legni, ferri e putter", prezzo: 1500 },
    { e: "👨‍🏫", nome: "Dieci ore col maestro", desc: "Per imparare a non bucare il prato", prezzo: 500 },
    { e: "⚪", nome: "Palline da golf, 12", desc: "Una confezione di quelle buone", prezzo: 55 }
  ] },
  { id: "a5-v-tennis", titolo: "Il tennista", e: "🎾", pezzi: [
    { e: "🎾", nome: "Un anno di lezioni di tennis", desc: "Due volte a settimana, in gruppo", prezzo: 1200 },
    { e: "🏟️", nome: "Due biglietti per gli Internazionali", desc: "Sul Centrale del Foro Italico, il giorno della finale", prezzo: 1180 },
    { e: "🏸", nome: "Racchetta Babolat Pure Drive", desc: "Quella che usano in tanti", prezzo: 270 },
    { e: "🥎", nome: "Tubo di palline", desc: "Quattro palline nuove", prezzo: 7 }
  ] },
  { id: "a5-v-roma", titolo: "Tre giorni a Roma", e: "🏛️", pezzi: [
    { e: "🏨", nome: "Tre notti in una suite in via Veneto", desc: "Hotel di lusso, per due", prezzo: 2400 },
    { e: "🛵", nome: "Tour in Vespa per Roma", desc: "Tre ore con la guida, come in Vacanze romane", prezzo: 150 },
    { e: "🏛️", nome: "Biglietto del Colosseo", desc: "Con Foro Romano e Palatino", prezzo: 18 },
    { e: "🖼️", nome: "Biglietto dei Musei Vaticani", desc: "Con la Cappella Sistina", prezzo: 25 },
    { e: "🍙", nome: "Supplì", desc: "Quello col filo di mozzarella", prezzo: 2.5 }
  ] },
  { id: "a5-v-venezia", titolo: "Weekend a Venezia", e: "🛶", pezzi: [
    { e: "🏨", nome: "Tre notti di lusso sul Canal Grande", desc: "Camera con la vista, per due", prezzo: 2400 },
    { e: "🛶", nome: "Giro in gondola", desc: "Mezz'ora, di giorno", prezzo: 90 },
    { e: "🎭", nome: "Maschera fatta a mano", desc: "In cartapesta, da una bottega veneziana", prezzo: 80 },
    { e: "🍸", nome: "Bellini all'Harry's Bar", desc: "Dove è nato, nel 1948", prezzo: 24 },
    { e: "🚤", nome: "Vaporetto per 24 ore", desc: "Biglietto per tutte le linee", prezzo: 25 }
  ] },
  { id: "a5-v-firenze", titolo: "Firenze col naso all'insù", e: "🌸", pezzi: [
    { e: "👜", nome: "Borsa di pelle fatta a mano", desc: "Da una bottega di Santa Croce", prezzo: 250 },
    { e: "🥩", nome: "Bistecca alla fiorentina", desc: "Un chilo, al ristorante", prezzo: 60 },
    { e: "🖼️", nome: "Biglietto degli Uffizi", desc: "Botticelli, Leonardo, Caravaggio", prezzo: 25 },
    { e: "🏡", nome: "Una settimana in villa nel Chianti", desc: "Per quattro, con la piscina tra le vigne", prezzo: 3500 },
    { e: "🥪", nome: "Panino col lampredotto", desc: "Dal chiosco, con la salsa verde", prezzo: 6 }
  ] },
  { id: "a5-v-sicilia", titolo: "Sicilia on the road", e: "🍋", pezzi: [
    { e: "🏡", nome: "Villa con piscina a Taormina", desc: "Una settimana, con la vista sull'Etna", prezzo: 3500 },
    { e: "🚗", nome: "Auto a noleggio, due settimane", desc: "Per girare tutta l'isola", prezzo: 900 },
    { e: "🌋", nome: "Escursione sull'Etna in fuoristrada", desc: "Fino ai crateri, con la guida", prezzo: 90 },
    { e: "⛴️", nome: "Traghetto sullo Stretto", desc: "Con l'auto, da Villa San Giovanni a Messina", prezzo: 42 },
    { e: "🧁", nome: "Cannolo siciliano", desc: "Riempito al momento", prezzo: 3.5 }
  ] },
  { id: "a5-v-napoli", titolo: "Napoli che passione", e: "🌋", pezzi: [
    { e: "🏖️", nome: "Una settimana in Costiera Amalfitana", desc: "Hotel con terrazza sul mare, per due", prezzo: 2500 },
    { e: "⚽", nome: "Biglietto per vedere il Napoli", desc: "Una partita al Maradona, in tribuna", prezzo: 80 },
    { e: "⛴️", nome: "Gita a Capri in aliscafo", desc: "Andata e ritorno da Napoli", prezzo: 50 },
    { e: "🌶️", nome: "Corno portafortuna", desc: "Rosso, fatto a mano a San Gregorio Armeno", prezzo: 15 },
    { e: "🍕", nome: "Pizza margherita", desc: "In una pizzeria storica di Forcella", prezzo: 6 }
  ] },
  { id: "a5-v-sardegna", titolo: "Estate in Sardegna", e: "🏖️", pezzi: [
    { e: "🏡", nome: "Villa in Costa Smeralda", desc: "Una settimana di agosto, con la piscina", prezzo: 9000 },
    { e: "⛴️", nome: "Traghetto con l'auto", desc: "Andata e ritorno da Livorno, con la cabina", prezzo: 600 },
    { e: "⛱️", nome: "Ombrellone in prima fila", desc: "Un giorno di agosto, con due lettini", prezzo: 80 },
    { e: "🍯", nome: "Seadas col miele", desc: "Il dolce sardo, fritto al momento", prezzo: 6 }
  ] },
  { id: "a5-v-giappone", titolo: "Viaggio in Giappone", e: "🗾", pezzi: [
    { e: "✈️", nome: "Due voli per Tokyo", desc: "Andata e ritorno da Roma", prezzo: 2200 },
    { e: "♨️", nome: "Notte in un ryokan", desc: "L'albergo tradizionale con le terme, per due", prezzo: 400 },
    { e: "🚄", nome: "Japan Rail Pass di 7 giorni", desc: "Tutti i treni veloci per una settimana", prezzo: 290 },
    { e: "🍜", nome: "Ciotola di ramen", desc: "In un locale di Tokyo", prezzo: 7 }
  ] },
  { id: "a5-v-new-york", titolo: "Natale a New York", e: "🗽", pezzi: [
    { e: "🏨", nome: "Cinque notti a Manhattan", desc: "Hotel vicino a Times Square, per due", prezzo: 1800 },
    { e: "✈️", nome: "Volo per New York", desc: "Andata e ritorno da Milano", prezzo: 900 },
    { e: "🎭", nome: "Biglietto per un musical", desc: "A Broadway, in platea", prezzo: 190 },
    { e: "🏙️", nome: "Salita sull'Empire State Building", desc: "Fino all'86° piano", prezzo: 42 },
    { e: "🌭", nome: "Hot dog dal carretto", desc: "Con senape e cipolle", prezzo: 5 }
  ] },
  { id: "a5-v-pianista", titolo: "Il pianista", e: "🎹", pezzi: [
    { e: "🎹", nome: "Pianoforte verticale Yamaha", desc: "Il modello U1, nero lucido", prezzo: 11200 },
    { e: "🧑‍🏫", nome: "Un anno di lezioni di pianoforte", desc: "Una lezione a settimana", prezzo: 1200 },
    { e: "🪑", nome: "Panchetta regolabile", desc: "Per suonare all'altezza giusta", prezzo: 120 },
    { e: "⏱️", nome: "Metronomo", desc: "Quello a pendolo, di legno", prezzo: 35 }
  ] },
  { id: "a5-v-dj", titolo: "Il DJ", e: "🎧", pezzi: [
    { e: "🎛️", nome: "Console Pioneer DJ", desc: "Lettori e mixer insieme, per le serate", prezzo: 2300 },
    { e: "🔊", nome: "Due casse attive", desc: "Potenti abbastanza per una festa", prezzo: 800 },
    { e: "🎧", nome: "Cuffie da DJ", desc: "Chiuse, per sentire solo la musica", prezzo: 150 },
    { e: "🪩", nome: "Palla stroboscopica", desc: "Quella a specchietti che gira", prezzo: 25 }
  ] },
  { id: "a5-v-streamer", titolo: "Lo streamer", e: "🎥", pezzi: [
    { e: "🖥️", nome: "PC da gaming", desc: "Scheda video potente, luci colorate", prezzo: 2500 },
    { e: "🎙️", nome: "Microfono Shure SM7B", desc: "Quello dei podcast", prezzo: 400 },
    { e: "📷", nome: "Webcam 4K", desc: "Per farsi vedere bene in diretta", prezzo: 200 },
    { e: "💡", nome: "Luce ad anello", desc: "Con il treppiede", prezzo: 40 }
  ] },
  { id: "a5-v-cinema", titolo: "Il cinema in salotto", e: "🎬", pezzi: [
    { e: "📽️", nome: "Proiettore 4K", desc: "Per un film come al cinema", prezzo: 2000 },
    { e: "🔊", nome: "Impianto audio 5.1", desc: "Cinque casse e il subwoofer", prezzo: 900 },
    { e: "🖼️", nome: "Telo motorizzato da 120 pollici", desc: "Scende dal soffitto col telecomando", prezzo: 600 },
    { e: "📺", nome: "Un anno di Netflix Premium", desc: "In 4K, su quattro schermi", prezzo: 240 },
    { e: "🍿", nome: "Macchina per i popcorn", desc: "Come quella del cinema, ma piccola", prezzo: 60 }
  ] },
  { id: "a5-v-lettore", titolo: "Il topo di biblioteca", e: "📚", pezzi: [
    { e: "📚", nome: "Libreria a muro su misura", desc: "Dal pavimento al soffitto", prezzo: 2500 },
    { e: "🛋️", nome: "Poltrona da lettura", desc: "In velluto, col poggiapiedi", prezzo: 600 },
    { e: "📱", nome: "Kindle Paperwhite", desc: "Migliaia di libri in tasca", prezzo: 180 },
    { e: "🔖", nome: "Segnalibro in pelle", desc: "Fatto a mano", prezzo: 10 }
  ] },
  { id: "a5-v-chef", titolo: "Cena da chef stellato", e: "👨‍🍳", pezzi: [
    { e: "⭐", nome: "Cena per due in un tre stelle", desc: "Menù degustazione con i vini", prezzo: 1000 },
    { e: "🔪", nome: "Set di coltelli giapponesi", desc: "Tre coltelli in acciaio damasco", prezzo: 500 },
    { e: "🍄", nome: "Tartufo bianco d'Alba, 50 g", desc: "Da grattare sui tajarin", prezzo: 250 },
    { e: "🧑‍🍳", nome: "Corso di cucina con uno chef", desc: "Una giornata ai fornelli", prezzo: 250 }
  ] },
  { id: "a5-v-sommelier", titolo: "Il sommelier", e: "🍷", pezzi: [
    { e: "🎓", nome: "Corso da sommelier, primo livello", desc: "Quindici lezioni con la degustazione", prezzo: 700 },
    { e: "🍷", nome: "Sei bottiglie di Brunello di Montalcino", desc: "Un'annata buona", prezzo: 300 },
    { e: "🍾", nome: "Champagne Dom Pérignon", desc: "Una bottiglia, per le grandi occasioni", prezzo: 230 },
    { e: "🍾", nome: "Cantina climatizzata per 100 bottiglie", desc: "Da mettere in taverna", prezzo: 2000 },
    { e: "🔩", nome: "Cavatappi da sommelier", desc: "Quello a due tempi", prezzo: 15 }
  ] },
  { id: "a5-v-gelato", titolo: "Il gelato fatto in casa", e: "🍨", pezzi: [
    { e: "🎓", nome: "Corso da gelatiere", desc: "Una settimana alla scuola di gelato", prezzo: 1000 },
    { e: "🍦", nome: "Gelatiera col compressore", desc: "Gelato pronto in mezz'ora", prezzo: 300 },
    { e: "🛒", nome: "Carretto dei gelati d'epoca", desc: "Con le ruote e l'ombrellino, per le feste", prezzo: 4000 },
    { e: "🍨", nome: "Un cono da tre gusti", desc: "Per confrontarlo col tuo", prezzo: 4 }
  ] },
  { id: "a5-v-nonna", titolo: "La cucina della nonna", e: "👵", pezzi: [
    { e: "🥣", nome: "Bimby TM7", desc: "Cucina, pesa e impasta da solo", prezzo: 1599 },
    { e: "🎂", nome: "Planetaria KitchenAid", desc: "La Artisan, color crema", prezzo: 620 },
    { e: "🪵", nome: "Spianatoia e mattarello", desc: "Per la sfoglia tirata a mano", prezzo: 60 },
    { e: "🥟", nome: "Tortellini fatti a mano, 1 kg", desc: "Da un pastificio di Bologna", prezzo: 35 }
  ] },
  { id: "a5-v-pulizie", titolo: "Pulizie di primavera", e: "🧽", pezzi: [
    { e: "🧹", nome: "Un anno di pulizie", desc: "L'impresa una volta al mese, per tutta la casa", prezzo: 1800 },
    { e: "🌀", nome: "Folletto Vorwerk", desc: "Con il battitappeto e la lavapavimenti", prezzo: 1500 },
    { e: "🤖", nome: "Robot aspirapolvere", desc: "Aspira e lava da solo, poi si svuota", prezzo: 800 },
    { e: "🧹", nome: "Scopa di saggina", desc: "Per gli angoli, come una volta", prezzo: 10 }
  ] },
  { id: "a5-v-bucato", titolo: "Il bucato perfetto", e: "👕", pezzi: [
    { e: "🌬️", nome: "Asciugatrice a pompa di calore", desc: "Niente più stendini in salotto", prezzo: 800 },
    { e: "🫧", nome: "Lavatrice da 9 kg", desc: "Silenziosa, in classe A", prezzo: 700 },
    { e: "♨️", nome: "Ferro da stiro con caldaia", desc: "Tanto vapore, meno fatica", prezzo: 300 },
    { e: "📎", nome: "Mollette, 50 pezzi", desc: "Di legno, per il filo", prezzo: 6 }
  ] },
  { id: "a5-v-casa-smart", titolo: "La casa intelligente", e: "📱", pezzi: [
    { e: "🚨", nome: "Impianto d'allarme con le telecamere", desc: "Sensori e quattro telecamere, montati", prezzo: 1800 },
    { e: "🌡️", nome: "Termostato smart", desc: "Accende il riscaldamento prima che torni", prezzo: 250 },
    { e: "🔐", nome: "Serratura smart", desc: "La porta si apre col telefono", prezzo: 250 },
    { e: "🔈", nome: "Altoparlante Amazon Echo", desc: "Alexa, accendi la luce!", prezzo: 100 },
    { e: "💡", nome: "Lampadine smart, 4 pezzi", desc: "Cambiano colore con la voce", prezzo: 60 }
  ] },
  { id: "a5-v-bagno", titolo: "Il bagno nuovo", e: "🛁", pezzi: [
    { e: "🛠️", nome: "Rifare il bagno", desc: "Piastrelle, sanitari e impianti, chiavi in mano", prezzo: 12000 },
    { e: "🚿", nome: "Box doccia in cristallo", desc: "Con il soffione a pioggia", prezzo: 900 },
    { e: "🧖", nome: "Accappatoio morbido", desc: "Di spugna pesante", prezzo: 60 },
    { e: "🦆", nome: "Paperella di gomma", desc: "Gialla, quella classica", prezzo: 5 }
  ] }
);

/* =========================================================
   DATI — «Il Prezzo è Giusto!», vetrine in più (autore 6, 23 ott 2026): altre 36 vetrine (animali, feste dell'anno,
   motori, sport, viaggi, spettacoli). Come in prezzo-5.js: un premio grosso, qualcuno medio e uno piccolo e simpatico;
   prezzi medi in Italia nel 2026 (i premi più cari e di marca ricontrollati su internet a ottobre 2026).
   ========================================================= */
window.SG_PREZZO = window.SG_PREZZO || { anno: 2026, prodotti: [], vetrine: [] };

window.SG_PREZZO.vetrine.push(
  { id: "a6-v-cane", titolo: "Arriva il cane", e: "🐕", pezzi: [
    { e: "🍖", nome: "Un anno di crocchette buone", desc: "Per un cane di taglia media", prezzo: 700 },
    { e: "🎓", nome: "Corso di educazione cinofila", desc: "Dieci lezioni con l'addestratore", prezzo: 400 },
    { e: "💉", nome: "Vaccini e microchip", desc: "La prima visita dal veterinario", prezzo: 150 },
    { e: "🏡", nome: "Recinto e casetta in giardino", desc: "In legno, montati", prezzo: 1200 },
    { e: "🦮", nome: "Guinzaglio e collare", desc: "Coordinati, con la medaglietta", prezzo: 40 }
  ] },
  { id: "a6-v-gatto", titolo: "Il re dei gatti", e: "🐈", pezzi: [
    { e: "🥫", nome: "Un anno di cibo umido", desc: "Due bustine al giorno", prezzo: 600 },
    { e: "🚽", nome: "Lettiera autopulente", desc: "Si pulisce da sola dopo ogni visita", prezzo: 500 },
    { e: "🌳", nome: "Albero tiragraffi gigante", desc: "Due metri, con le cucce in alto", prezzo: 200 },
    { e: "🐭", nome: "Topolino giocattolo", desc: "Con l'erba gatta dentro", prezzo: 3 },
    { e: "🩺", nome: "Un anno di veterinario", desc: "Visite, vaccini e assicurazione", prezzo: 500 }
  ] },
  { id: "a6-v-acquario", titolo: "L'acquario", e: "🐠", pezzi: [
    { e: "🐠", nome: "Acquario da 300 litri", desc: "Con il mobile, le luci e il filtro", prezzo: 1500 },
    { e: "🐟", nome: "Venti pesci tropicali", desc: "Neon, guppy e un pesce pagliaccio", prezzo: 200 },
    { e: "🪸", nome: "Piante e sassi per il fondo", desc: "Per fare un piccolo giardino sott'acqua", prezzo: 80 },
    { e: "💰", nome: "Scrigno del tesoro", desc: "Decorazione che fa le bollicine", prezzo: 15 }
  ] },
  { id: "a6-v-cavallo", titolo: "A cavallo", e: "🐎", pezzi: [
    { e: "🐴", nome: "Un anno di pensione per un cavallo", desc: "Box, fieno e paddock al maneggio", prezzo: 3600 },
    { e: "🏇", nome: "Venti lezioni di equitazione", desc: "Col maestro, in maneggio", prezzo: 600 },
    { e: "👢", nome: "Stivali da equitazione e casco", desc: "In pelle, su misura", prezzo: 350 },
    { e: "🥕", nome: "Un sacco di carote", desc: "Dieci chili, per farsi degli amici", prezzo: 10 }
  ] },
  { id: "a6-v-sposa", titolo: "L'abito da sposa", e: "👰", pezzi: [
    { e: "👗", nome: "Abito da sposa", desc: "Di un atelier italiano, con le modifiche", prezzo: 3000 },
    { e: "💍", nome: "Due fedi nuziali in oro", desc: "Oro giallo, con l'incisione", prezzo: 1200 },
    { e: "💄", nome: "Trucco e acconciatura", desc: "La mattina del sì, con la prova", prezzo: 400 },
    { e: "💐", nome: "Bouquet della sposa", desc: "Peonie e rose bianche", prezzo: 200 },
    { e: "🍚", nome: "Riso da lanciare, 1 kg", desc: "Per l'uscita dalla chiesa", prezzo: 2 }
  ] },
  { id: "a6-v-nubilato", titolo: "Addio al nubilato a Barcellona", e: "💃", pezzi: [
    { e: "✈️", nome: "Voli e due notti per sei amiche", desc: "Appartamento in centro, Barcellona", prezzo: 3000 },
    { e: "💃", nome: "Spettacolo di flamenco, per sei", desc: "Con la cena di tapas", prezzo: 360 },
    { e: "👕", nome: "Sei magliette uguali", desc: "Con la scritta «Team sposa»", prezzo: 90 },
    { e: "👑", nome: "Coroncina col velo", desc: "Per la futura sposa", prezzo: 10 }
  ] },
  { id: "a6-v-halloween", titolo: "La notte di Halloween", e: "🎃", pezzi: [
    { e: "🏰", nome: "Viaggio in Transilvania, per due", desc: "Volo, quattro notti e la visita al castello di Dracula", prezzo: 1800 },
    { e: "🎢", nome: "Gardaland Magic Halloween", desc: "Il biglietto della sera, il venerdì da paura", prezzo: 29 },
    { e: "🧛", nome: "Costume da vampiro", desc: "Mantello, denti e trucco", prezzo: 60 },
    { e: "🍬", nome: "Caramelle, 2 kg", desc: "Per «dolcetto o scherzetto»", prezzo: 20 },
    { e: "🎃", nome: "Zucca gigante", desc: "Da intagliare con gli occhi e la bocca", prezzo: 15 }
  ] },
  { id: "a6-v-carnevale", titolo: "Carnevale da Viareggio a Rio", e: "🎭", pezzi: [
    { e: "🇧🇷", nome: "Viaggio al Carnevale di Rio, per due", desc: "Volo, una settimana in hotel e la tribuna al Sambodromo", prezzo: 4500 },
    { e: "🤡", nome: "Costume da Arlecchino", desc: "Coi rombi colorati e la maschera", prezzo: 80 },
    { e: "🎟️", nome: "Biglietto per i corsi mascherati", desc: "Per vedere sfilare i carri", prezzo: 20 },
    { e: "🥨", nome: "Un vassoio di chiacchiere", desc: "Fritte, con lo zucchero a velo", prezzo: 15 },
    { e: "🎊", nome: "Coriandoli e stelle filanti", desc: "Il sacchetto grande", prezzo: 8 }
  ] },
  { id: "a6-v-capodanno", titolo: "Capodanno in montagna", e: "🎆", pezzi: [
    { e: "🏔️", nome: "Tre notti in baita", desc: "Per due, con la mezza pensione", prezzo: 1200 },
    { e: "🍽️", nome: "Cenone di Capodanno per due", desc: "Sette portate e il brindisi", prezzo: 400 },
    { e: "🍾", nome: "Franciacorta", desc: "Una bottiglia per la mezzanotte", prezzo: 30 },
    { e: "🫘", nome: "Cotechino e lenticchie", desc: "Per portare soldi tutto l'anno", prezzo: 15 }
  ] },
  { id: "a6-v-pasqua", titolo: "Pasqua e Pasquetta", e: "🐣", pezzi: [
    { e: "🏡", nome: "Pranzo di Pasqua in agriturismo", desc: "Per quattro, con l'agnello", prezzo: 240 },
    { e: "🔥", nome: "Grigliata di Pasquetta per dieci", desc: "Carne, salsicce e carbonella", prezzo: 200 },
    { e: "🥚", nome: "Uovo di cioccolato gigante", desc: "Un chilo, con la sorpresa", prezzo: 60 },
    { e: "🕊️", nome: "Colomba artigianale", desc: "Da una pasticceria", prezzo: 35 },
    { e: "💃", nome: "Settimana Santa a Siviglia, per due", desc: "Volo e cinque notti per vedere le processioni", prezzo: 1600 }
  ] },
  { id: "a6-v-ferragosto", titolo: "Ferragosto in Romagna", e: "🏖️", pezzi: [
    { e: "🏨", nome: "Una settimana a Riccione", desc: "Pensione completa, per due", prezzo: 1400 },
    { e: "⛱️", nome: "Ombrellone per tutta l'estate", desc: "Con due lettini, in terza fila", prezzo: 1200 },
    { e: "🦩", nome: "Materassino a fenicottero", desc: "Gonfiabile, rosa", prezzo: 25 },
    { e: "🚣", nome: "Pedalò per un'ora", desc: "Con lo scivolo", prezzo: 20 },
    { e: "🍉", nome: "Anguria", desc: "Da dieci chili, per tutti", prezzo: 8 }
  ] },
  { id: "a6-v-san-valentino", titolo: "San Valentino", e: "❤️", pezzi: [
    { e: "💍", nome: "Anello con diamante", desc: "In oro bianco, per la proposta", prezzo: 2500 },
    { e: "🕯️", nome: "Cena romantica per due", desc: "A lume di candela, con lo spumante", prezzo: 200 },
    { e: "🌹", nome: "Dodici rose rosse", desc: "A gambo lungo", prezzo: 60 },
    { e: "🍫", nome: "Scatola di Baci Perugina", desc: "Coi bigliettini d'amore", prezzo: 8.4 }
  ] },
  { id: "a6-v-mamma", titolo: "Festa della mamma", e: "💐", pezzi: [
    { e: "💨", nome: "Asciugacapelli Dyson Supersonic", desc: "Quello che sembra un'astronave", prezzo: 450 },
    { e: "💎", nome: "Bracciale Pandora con ciondoli", desc: "Argento, con tre charm", prezzo: 210 },
    { e: "🧖", nome: "Una giornata alle terme", desc: "Ingresso e massaggio", prezzo: 200 },
    { e: "🌸", nome: "Orchidea in vaso", desc: "Bianca, dal fiorista", prezzo: 30 },
    { e: "🗼", nome: "Weekend a Parigi, per due", desc: "Volo e due notti in centro", prezzo: 1200 }
  ] },
  { id: "a6-v-scuola", titolo: "Il primo giorno di scuola", e: "🎒", pezzi: [
    { e: "📱", nome: "Tablet per la scuola", desc: "Con la custodia e la tastiera", prezzo: 450 },
    { e: "📚", nome: "I libri delle medie, un anno", desc: "Tutti quelli della lista", prezzo: 300 },
    { e: "🎒", nome: "Zaino della scuola", desc: "Quello estensibile, colorato", prezzo: 70 },
    { e: "🇬🇧", nome: "Un anno di lezioni d'inglese", desc: "Due pomeriggi a settimana, in una scuola di lingue", prezzo: 1500 },
    { e: "📔", nome: "Diario", desc: "Quello che piace a tutta la classe", prezzo: 15 }
  ] },
  { id: "a6-v-festa-bimbi", titolo: "Festa di compleanno da paura", e: "🎈", pezzi: [
    { e: "🤹", nome: "Animatore per tre ore", desc: "Giochi, palloncini e trucca bimbi", prezzo: 250 },
    { e: "🏰", nome: "Castello gonfiabile", desc: "A noleggio, per un pomeriggio", prezzo: 200 },
    { e: "🎂", nome: "Torta per 30 bambini", desc: "Con il personaggio preferito", prezzo: 150 },
    { e: "🏰", nome: "Weekend a Disneyland Paris, per quattro", desc: "Volo, due notti e i parchi", prezzo: 2000 },
    { e: "🕯️", nome: "Candeline magiche", desc: "Quelle che si riaccendono da sole", prezzo: 3 }
  ] },
  { id: "a6-v-elettrico", titolo: "Si va in elettrico", e: "⚡", pezzi: [
    { e: "🚘", nome: "Tesla Model 3", desc: "La versione base, nuova", prezzo: 36990 },
    { e: "☀️", nome: "Pannelli solari sul tetto", desc: "Impianto da 6 kW, montato", prezzo: 8000 },
    { e: "🔌", nome: "Wallbox in garage", desc: "Con l'installazione dell'elettricista", prezzo: 1000 },
    { e: "🧽", nome: "Lavaggio a mano", desc: "Dentro e fuori, all'autolavaggio", prezzo: 25 }
  ] },
  { id: "a6-v-cinquecento", titolo: "La Cinquecento d'epoca", e: "🚙", pezzi: [
    { e: "🚙", nome: "Fiat 500 d'epoca restaurata", desc: "Del 1970, col tettuccio apribile", prezzo: 9500 },
    { e: "🧰", nome: "Tagliando dal meccanico", desc: "Olio, candele e freni", prezzo: 250 },
    { e: "🛡️", nome: "Telo copriauto", desc: "Su misura, per il garage", prezzo: 50 },
    { e: "🗺️", nome: "Cartina stradale d'Italia", desc: "Di carta, come una volta", prezzo: 10 }
  ] },
  { id: "a6-v-scooter", titolo: "In scooter per la città", e: "🛵", pezzi: [
    { e: "🛵", nome: "Piaggio Liberty 125", desc: "Lo scooter a ruote alte, nuovo", prezzo: 3050 },
    { e: "🛴", nome: "Monopattino elettrico", desc: "Pieghevole, per l'ultimo chilometro", prezzo: 500 },
    { e: "⛑️", nome: "Casco jet", desc: "Con la visiera", prezzo: 120 },
    { e: "🔒", nome: "Antifurto ad arco", desc: "Quello pesante, in acciaio", prezzo: 60 }
  ] },
  { id: "a6-v-fuoristrada", titolo: "Avventura in 4x4", e: "🏜️", pezzi: [
    { e: "🚙", nome: "Suzuki Jimny", desc: "Il piccolo fuoristrada che va dappertutto, a due posti", prezzo: 27700 },
    { e: "⛺", nome: "Tenda da tetto", desc: "Si apre in un minuto sopra l'auto", prezzo: 2500 },
    { e: "🧊", nome: "Frigorifero portatile", desc: "A compressore, da 40 litri", prezzo: 500 },
    { e: "🔦", nome: "Torcia frontale", desc: "Per montare la tenda al buio", prezzo: 30 }
  ] },
  { id: "a6-v-campeggio", titolo: "Il campeggiatore", e: "⛺", pezzi: [
    { e: "🚌", nome: "Roulotte usata", desc: "Quattro posti letto, pronta per partire", prezzo: 6000 },
    { e: "⛺", nome: "Tenda per quattro", desc: "Con la veranda, per gli ospiti", prezzo: 300 },
    { e: "😴", nome: "Due sacchi a pelo", desc: "Caldi fino a cinque gradi", prezzo: 150 },
    { e: "🔥", nome: "Fornellino da campeggio", desc: "Con la bomboletta", prezzo: 40 },
    { e: "🏮", nome: "Lanterna", desc: "Ricaricabile, per la sera", prezzo: 25 }
  ] },
  { id: "a6-v-surf", titolo: "Il surfista", e: "🏄", pezzi: [
    { e: "🌊", nome: "Una settimana di surf camp", desc: "In Portogallo, con le lezioni", prezzo: 900 },
    { e: "🏄", nome: "Tavola da surf", desc: "Per chi ha appena cominciato", prezzo: 600 },
    { e: "🩱", nome: "Muta da surf", desc: "Tre millimetri, per l'acqua fresca", prezzo: 250 },
    { e: "🕯️", nome: "Cera per la tavola", desc: "Per non scivolare", prezzo: 5 }
  ] },
  { id: "a6-v-sub", titolo: "Sott'acqua", e: "🤿", pezzi: [
    { e: "🐠", nome: "Una settimana di immersioni nel Mar Rosso", desc: "Volo, hotel e dieci immersioni", prezzo: 1500 },
    { e: "🎓", nome: "Brevetto da sub", desc: "Il corso Open Water, teoria e piscina", prezzo: 500 },
    { e: "⌚", nome: "Computer subacqueo", desc: "L'orologio che dice quando risalire", prezzo: 400 },
    { e: "🤿", nome: "Maschera e boccaglio", desc: "Per guardare i pesci anche dalla barca", prezzo: 40 }
  ] },
  { id: "a6-v-pittore", titolo: "L'artista", e: "🎨", pezzi: [
    { e: "🖌️", nome: "Un anno di corso di pittura", desc: "Una sera a settimana", prezzo: 800 },
    { e: "🖼️", nome: "Cavalletto da studio", desc: "In legno di faggio", prezzo: 200 },
    { e: "🎨", nome: "Colori a olio professionali", desc: "La scatola di legno con 24 tubetti", prezzo: 150 },
    { e: "⬜", nome: "Cinque tele bianche", desc: "Da riempire", prezzo: 50 },
    { e: "🗼", nome: "Viaggio a Parigi coi musei, per due", desc: "Volo, tre notti e il Louvre", prezzo: 1200 }
  ] },
  { id: "a6-v-stelle", titolo: "Con la testa tra le stelle", e: "🔭", pezzi: [
    { e: "🌌", nome: "Viaggio in Lapponia", desc: "Quattro notti per vedere l'aurora boreale", prezzo: 2500 },
    { e: "🔭", nome: "Telescopio Celestron", desc: "Trova le stelle da solo", prezzo: 1330 },
    { e: "🔍", nome: "Binocolo", desc: "Per la Luna e gli uccelli", prezzo: 200 },
    { e: "🌠", nome: "Una notte all'osservatorio", desc: "Con l'astronomo che spiega", prezzo: 50 },
    { e: "🗺️", nome: "Mappa del cielo", desc: "Quella che gira per trovare le costellazioni", prezzo: 15 }
  ] },
  { id: "a6-v-mugello", titolo: "MotoGP al Mugello", e: "🏍️", pezzi: [
    { e: "🦺", nome: "Tuta in pelle da moto", desc: "Intera, con le protezioni", prezzo: 1500 },
    { e: "⛑️", nome: "Casco integrale da pista", desc: "In carbonio, come i piloti", prezzo: 1300 },
    { e: "🏟️", nome: "Tribuna al Mugello", desc: "Il giorno della gara", prezzo: 300 },
    { e: "🚩", nome: "Bandiera del pilota", desc: "Da sventolare in curva", prezzo: 20 }
  ] },
  { id: "a6-v-erasmus", titolo: "Erasmus a Valencia", e: "🇪🇸", pezzi: [
    { e: "🏠", nome: "Stanza per cinque mesi", desc: "In un appartamento con altri studenti", prezzo: 2500 },
    { e: "🗣️", nome: "Corso di spagnolo", desc: "Due mesi, prima di partire", prezzo: 300 },
    { e: "✈️", nome: "Volo low cost", desc: "Andata e ritorno, col bagaglio", prezzo: 150 },
    { e: "🧳", nome: "Valigia grande", desc: "Da 80 litri, per starci dentro tutto", prezzo: 120 },
    { e: "🥘", nome: "Paella per due", desc: "Quella vera, valenciana", prezzo: 40 }
  ] },
  { id: "a6-v-sanremo", titolo: "Una sera a Sanremo", e: "🎤", pezzi: [
    { e: "🎟️", nome: "Biglietto per la finale del Festival", desc: "In platea al Teatro Ariston", prezzo: 875 },
    { e: "🏨", nome: "Una notte a Sanremo", desc: "Hotel con la vista sul mare", prezzo: 300 },
    { e: "💐", nome: "Mazzo di fiori di Sanremo", desc: "Dalla Riviera dei Fiori", prezzo: 40 },
    { e: "🎙️", nome: "Microfono da karaoke", desc: "Per cantare le canzoni del Festival", prezzo: 40 },
    { e: "👗", nome: "Abito da sera da red carpet", desc: "Di un atelier, per la passerella sul tappeto rosso", prezzo: 1500 }
  ] },
  { id: "a6-v-concerto", titolo: "Il concerto a San Siro", e: "🎸", pezzi: [
    { e: "🏨", nome: "Una notte a Milano", desc: "Hotel vicino allo stadio", prezzo: 300 },
    { e: "🚄", nome: "Frecciarossa per Milano", desc: "Andata e ritorno", prezzo: 120 },
    { e: "🎟️", nome: "Pacchetto VIP per due", desc: "Posto sotto il palco e il saluto all'artista", prezzo: 1500 },
    { e: "👕", nome: "Maglietta del tour", desc: "Con le date dietro", prezzo: 35 },
    { e: "🌭", nome: "Panino con la salamella", desc: "Dal furgoncino fuori dallo stadio", prezzo: 7 }
  ] },
  { id: "a6-v-terme", titolo: "Weekend alle terme", e: "🧖", pezzi: [
    { e: "🔥", nome: "Sauna finlandese per casa", desc: "In legno, per due persone", prezzo: 4000 },
    { e: "♨️", nome: "Due notti in un resort termale", desc: "Per due, con le piscine calde", prezzo: 800 },
    { e: "💆", nome: "Massaggio di coppia", desc: "Un'ora con gli olii caldi", prezzo: 200 },
    { e: "🩴", nome: "Ciabatte da spa", desc: "Bianche, morbide", prezzo: 15 }
  ] },
  { id: "a6-v-stipendio", titolo: "Il primo stipendio", e: "💸", pezzi: [
    { e: "📱", nome: "iPhone 18 Pro", desc: "Da 256 GB, nuovo", prezzo: 1489 },
    { e: "🎧", nome: "AirPods Pro", desc: "Gli auricolari che tolgono il rumore", prezzo: 249 },
    { e: "🍝", nome: "Cena fuori coi genitori", desc: "Per dire grazie", prezzo: 150 },
    { e: "🐷", nome: "Porcellino salvadanaio", desc: "Di ceramica, per i risparmi", prezzo: 15 }
  ] },
  { id: "a6-v-trasloco", titolo: "Il grande trasloco", e: "📦", pezzi: [
    { e: "🚚", nome: "Ditta di traslochi", desc: "Un appartamento, da Roma a Milano", prezzo: 1500 },
    { e: "📦", nome: "Trenta scatoloni", desc: "Doppia onda, robusti", prezzo: 60 },
    { e: "🍕", nome: "Pizza per chi aiuta", desc: "Sei pizze e le bibite", prezzo: 50 },
    { e: "🎞️", nome: "Nastro adesivo da pacchi", desc: "Il rotolo marrone che fa rumore", prezzo: 3 }
  ] },
  { id: "a6-v-campagna", titolo: "La vita in campagna", e: "🚜", pezzi: [
    { e: "🚜", nome: "Motocoltivatore", desc: "Per zappare l'orto senza fatica", prezzo: 1500 },
    { e: "🛖", nome: "Pollaio in legno", desc: "Con il tetto e la scaletta", prezzo: 300 },
    { e: "🐔", nome: "Sei galline ovaiole", desc: "Un uovo fresco a testa, quasi ogni giorno", prezzo: 60 },
    { e: "🥾", nome: "Stivali di gomma", desc: "Verdi, per il fango", prezzo: 30 }
  ] },
  { id: "a6-v-sushi", titolo: "Sushi per tutti", e: "🍣", pezzi: [
    { e: "🍣", nome: "Cena omakase per due", desc: "Al bancone, decide lo chef", prezzo: 400 },
    { e: "🔪", nome: "Coltello da sushi", desc: "Lama giapponese a un filo", prezzo: 200 },
    { e: "🎏", nome: "Una settimana a Osaka, per due", desc: "Volo, hotel e il mercato del pesce all'alba", prezzo: 2400 },
    { e: "🍚", nome: "Riso per sushi, 5 kg", desc: "Quello a chicco tondo", prezzo: 25 },
    { e: "🥢", nome: "Bacchette laccate", desc: "Un paio, nella scatolina", prezzo: 15 }
  ] },
  { id: "a6-v-lucca", titolo: "A Lucca Comics", e: "🦸", pezzi: [
    { e: "🦸", nome: "Costume da cosplay", desc: "Fatto su misura, con l'armatura", prezzo: 300 },
    { e: "✍️", nome: "Tavoletta grafica", desc: "Per disegnare i fumetti al computer", prezzo: 400 },
    { e: "🎟️", nome: "Biglietto per tutti i giorni", desc: "Cinque giorni di Lucca Comics & Games", prezzo: 95 },
    { e: "📕", nome: "Fumetto autografato", desc: "Con il disegno dell'autore", prezzo: 25 },
    { e: "🌎", nome: "Viaggio al Comic-Con di San Diego, per due", desc: "Volo, hotel e i biglietti per tutti i giorni", prezzo: 4000 }
  ] },
  { id: "a6-v-harry-potter", titolo: "Un viaggio magico a Londra", e: "⚡", pezzi: [
    { e: "🏨", nome: "Tre notti a Londra", desc: "Hotel vicino a King's Cross, per due", prezzo: 900 },
    { e: "🏰", nome: "LEGO castello di Hogwarts", desc: "Il set grande, da collezione", prezzo: 500 },
    { e: "✈️", nome: "Due voli per Londra", desc: "Andata e ritorno", prezzo: 400 },
    { e: "🎬", nome: "Visita agli studi di Harry Potter", desc: "Dove hanno girato i film", prezzo: 65 },
    { e: "🪄", nome: "Bacchetta magica", desc: "Nella sua scatola", prezzo: 40 }
  ] },
  { id: "a6-v-dolomiti", titolo: "Trekking sulle Dolomiti", e: "🏔️", pezzi: [
    { e: "🧗", nome: "Guida alpina per un giorno", desc: "Una via ferrata, con l'attrezzatura", prezzo: 350 },
    { e: "🥾", nome: "Scarponi da trekking", desc: "In pelle e Gore-Tex", prezzo: 200 },
    { e: "🏨", nome: "Una settimana in hotel sulle Dolomiti", desc: "Per due, con la mezza pensione e la spa", prezzo: 2200 },
    { e: "🛖", nome: "Una notte in rifugio", desc: "Con la cena e la colazione", prezzo: 70 },
    { e: "🦯", nome: "Bastoncini da trekking", desc: "In alluminio, pieghevoli", prezzo: 60 }
  ] }
);

/* =========================================================
   DATI — «Il Prezzo è Giusto!», prodotti in più (autore 7, 23 ott 2026): circa 50 prodotti nuovi per categoria. Il
   proprietario: «giocando una trentina di partite ritrovi un po' le stesse cose». Scritti da aiutanti Sonnet che hanno
   cercato i prezzi su internet (fonte accanto a ogni voce), ricontrollati da un secondo aiutante e con una controprova
   a campione; tolti i doppioni dei prodotti e delle vetrine che c'erano già. Prezzi medi in Italia a ottobre 2026.
   Da rileggere una volta l'anno.
   ========================================================= */
window.SG_PREZZO = window.SG_PREZZO || { anno: 2026, prodotti: [], vetrine: [] };

window.SG_PREZZO.prodotti.push(
  // ---------- 🛒 SPESA AL SUPERMERCATO ----------
  { id: "a7-pomodori-pelati-mutti-400-g", cat: "spesa", e: "🍅", nome: "Pomodori pelati Mutti, 400 g", desc: "Una scatola di pelati di pomodoro", dove: "al supermercato", prezzo: 1.39 },   // Carrefour
  { id: "a7-penne-rigate-de-cecco-n-41-500-g", cat: "spesa", e: "🍝", nome: "Penne rigate De Cecco n.41, 500 g", desc: "Un pacco di pasta di semola di grano duro", dove: "al supermercato", prezzo: 1.59, cur: "La De Cecco nasce a Fara San Martino, in Abruzzo, nel 1886." },   // Carrefour
  { id: "a7-riso-carnaroli-gallo-1-kg", cat: "spesa", e: "🍚", nome: "Riso Carnaroli Gallo, 1 kg", desc: "Un pacco di riso per fare i risotti", dove: "al supermercato", prezzo: 4.59 },   // Iper
  { id: "a7-biscotti-macine-mulino-bianco-350-g", cat: "spesa", e: "🍪", nome: "Biscotti Macine Mulino Bianco, 350 g", desc: "I frollini alla panna fresca, confezione da 350 g", dove: "al supermercato", prezzo: 1.95 },   // carrefour.it, 23 ott 2026
  { id: "a7-corn-flakes-kellogg-s-375-g", cat: "spesa", e: "🥣", nome: "Corn Flakes Kellogg's, 375 g", desc: "Una scatola di cereali di mais per la colazione", dove: "al supermercato", prezzo: 2.65, cur: "I fratelli Kellogg inventarono i fiocchi di cereali per caso nel 1894; quelli di mais arrivarono nel 1906." },   // carrefour.it, 23 ott 2026
  { id: "a7-philadelphia-original-150-g", cat: "spesa", e: "🧀", nome: "Philadelphia Original, 150 g", desc: "Formaggio fresco spalmabile in vaschetta", dove: "al supermercato", prezzo: 2.09 },   // carrefour.it, 23 ott 2026
  { id: "a7-estathe-al-limone-1-5-litri", cat: "spesa", e: "🥤", nome: "Estathé al limone, 1,5 litri", desc: "Una bottiglia di tè freddo al limone", dove: "al supermercato", prezzo: 1.99 },   // Bennet
  { id: "a7-maionese-calve-225-ml", cat: "spesa", e: "🥫", nome: "Maionese Calvè, 225 ml", desc: "Un vasetto di maionese classica", dove: "al supermercato", prezzo: 1.95 },   // Carrefour
  { id: "a7-kinder-bueno-3-barrette", cat: "spesa", e: "🍫", nome: "Kinder Bueno, 3 barrette", desc: "La confezione da tre wafer ricoperti di cioccolato", dove: "al supermercato", prezzo: 2.69 },   // Bennet
  { id: "a7-pesto-alla-genovese-barilla-190-g", cat: "spesa", e: "🌿", nome: "Pesto alla genovese Barilla, 190 g", desc: "Un vasetto di pesto col basilico", dove: "al supermercato", prezzo: 2.69 },   // Carrefour e Bennet
  { id: "a7-ketchup-heinz-400-ml", cat: "spesa", e: "🍅", nome: "Ketchup Heinz, 400 ml", desc: "Il flacone di ketchup classico", dove: "al supermercato", prezzo: 3.09 },   // Carrefour
  { id: "a7-birra-moretti-6-bottiglie-da-33-cl", cat: "spesa", e: "🍺", nome: "Birra Moretti, 6 bottiglie da 33 cl", desc: "Sei bottigliette di birra lager in vetro", dove: "al supermercato", prezzo: 6.49, cur: "La birra Moretti nasce a Udine nel 1859." },   // carrefour.it, 23 ott 2026
  { id: "a7-mascarpone-granarolo-250-g", cat: "spesa", e: "🍮", nome: "Mascarpone Granarolo, 250 g", desc: "Il formaggio fresco per il tiramisù", dove: "al supermercato", prezzo: 2.89 },   // Carrefour
  { id: "a7-ricotta-fresca-granarolo-250-g", cat: "spesa", e: "🥣", nome: "Ricotta fresca Granarolo, 250 g", desc: "Una vaschetta di ricotta di mucca", dove: "al supermercato", prezzo: 1.79 },   // Carrefour
  { id: "a7-burro-250-g", cat: "spesa", e: "🧈", nome: "Burro, 250 g", desc: "Un panetto di burro per cucinare", dove: "al supermercato", prezzo: 3.89 },   // Carrefour
  { id: "a7-wurstel-wudy-grill-3-pezzi", cat: "spesa", e: "🌭", nome: "Wurstel Aia Wudy Grill, 3 pezzi (250 g)", desc: "Una confezione di wurstel da cuocere", dove: "al supermercato", prezzo: 2.19 },   // Pam a Casa (1,95 / 1,99 / 2,30 per 250 g); carrefour.it (Wudy classico 300 g 1,99)
  { id: "a7-pan-bauletto-mulino-bianco-400-g", cat: "spesa", e: "🍞", nome: "Pan Bauletto Mulino Bianco, 400 g", desc: "Il pane morbido a fette in sacchetto", dove: "al supermercato", prezzo: 1.15 },   // carrefour.it 1,09; bennet 1,15; Conad 1,19
  { id: "a7-yogurt-activia-bianco-4-vasetti", cat: "spesa", e: "🥛", nome: "Yogurt Activia bianco, 4 vasetti", desc: "Quattro vasetti da 125 g di yogurt naturale", dove: "al supermercato", prezzo: 2.98 },   // Bennet e Iper
  { id: "a7-prosecco-doc-brut-75-cl", cat: "spesa", e: "🥂", nome: "Prosecco DOC brut, 75 cl", desc: "Una bottiglia di spumante veneto", dove: "al supermercato", prezzo: 5.49, cur: "Prosecco è anche il nome di un paese vicino a Trieste." },   // carrefour.it, 23 ott 2026
  { id: "a7-olio-di-semi-di-girasole-1-litro", cat: "spesa", e: "🌻", nome: "Olio di semi di girasole, 1 litro", desc: "Una bottiglia di olio per friggere", dove: "al supermercato", prezzo: 1.99 },   // Carrefour e Iper
  { id: "a7-tavoletta-milka-al-latte-100-g", cat: "spesa", e: "🍫", nome: "Tavoletta Milka al latte, 90 g", desc: "Una tavoletta di cioccolato al latte alpino", dove: "al supermercato", prezzo: 1.79 },   // carrefour.it e bennet.com, 23 ott 2026
  { id: "a7-orsetti-d-oro-haribo-175-g", cat: "spesa", e: "🐻", nome: "Orsetti d'oro Haribo, 175 g", desc: "Un sacchetto di caramelle gommose alla frutta", dove: "al supermercato", prezzo: 1.79, cur: "HARIBO sta per HAns RIegel BOnn: il nome del fondatore e della sua città." },   // Carrefour
  { id: "a7-petto-di-pollo-a-fette-400-g", cat: "spesa", e: "🍗", nome: "Petto di pollo a fette, 400 g", desc: "Una vaschetta di fette di pollo fresco", dove: "al supermercato", prezzo: 5.9 },   // carrefour.it, 23 ott 2026 (petto a fette 800 g 11,99 = 14,99/kg; Halal 14,98/kg; Filiera 17,00/kg)
  { id: "a7-gnocchetti-di-patate-rana-500-g", cat: "spesa", e: "🥔", nome: "Gnocchetti di patate Rana, 500 g", desc: "Gnocchi freschi di patate da cuocere in pochi minuti", dove: "al supermercato", prezzo: 2.99 },   // Bennet
  { id: "a7-cornetto-algida-classico-6-gelati", cat: "spesa", e: "🍦", nome: "Cornetto Algida classico, 6 gelati", desc: "Sei coni gelato confezionati, da tenere in freezer", dove: "al supermercato", prezzo: 5.79 },   // carrefour.it, 23 ott 2026
  { id: "a7-patate-2-kg", cat: "spesa", e: "🥔", nome: "Patate, 2 kg", desc: "Un sacchetto di patate da cucina", dove: "al supermercato", prezzo: 3.29, cur: "Le patate sono arrivate in Europa dall'America del Sud nel Cinquecento." },   // carrefour.it, 23 ott 2026
  { id: "a7-cipolle-dorate-1-kg", cat: "spesa", e: "🧅", nome: "Cipolle dorate, 1 kg", desc: "Cipolle dorate per soffritti e zuppe", dove: "al supermercato", prezzo: 1.79 },   // prezzo medio tipico
  { id: "a7-uva-bianca-1-kg", cat: "spesa", e: "🍇", nome: "Uva bianca, 1 kg", desc: "Uva da tavola di stagione", dove: "al mercato", prezzo: 3.49 },   // prezzo medio tipico
  { id: "a7-castagne-1-kg", cat: "spesa", e: "🌰", nome: "Castagne, 1 kg", desc: "Castagne fresche di stagione, da arrostire", dove: "al mercato", prezzo: 6.9 },   // prezzo medio tipico
  { id: "a7-zucca-1-kg", cat: "spesa", e: "🎃", nome: "Zucca, 1 kg", desc: "Zucca gialla per risotti e vellutate", dove: "al mercato", prezzo: 1.99, cur: "Per i botanici la zucca è un frutto, non una verdura." },   // prezzo medio tipico
  { id: "a7-cozze-1-kg", cat: "spesa", e: "🦪", nome: "Cozze, 1 kg", desc: "Cozze fresche da cuocere con prezzemolo e limone", dove: "in pescheria", prezzo: 5.5, cur: "Le cozze si attaccano agli scogli con dei filamenti chiamati bisso." },   // carrefour.it, 23 ott 2026
  { id: "a7-fagioli-cannellini-in-scatola-400-g", cat: "spesa", e: "🥫", nome: "Fagioli cannellini in scatola, 400 g", desc: "Una scatola di fagioli già cotti", dove: "al supermercato", prezzo: 1.19 },   // carrefour.it, 23 ott 2026
  { id: "a7-panna-da-cucina-200-ml", cat: "spesa", e: "🥛", nome: "Panna da cucina, 200 ml", desc: "Una confezione di panna da cucina", dove: "al supermercato", prezzo: 1.29 },   // prezzo medio tipico
  { id: "a7-limoni-1-kg", cat: "spesa", e: "🍋", nome: "Limoni, 1 kg", desc: "Limoni gialli da spremere", dove: "al supermercato", prezzo: 2.99 },   // prezzo medio tipico
  { id: "a7-insalata-mista-in-busta-150-g", cat: "spesa", e: "🥗", nome: "Insalata mista in busta, 150 g", desc: "Insalata già lavata, pronta da condire", dove: "al supermercato", prezzo: 1.79 },   // prezzo medio tipico
  { id: "a7-pomodori-ramati-1-kg", cat: "spesa", e: "🍅", nome: "Pomodori ramati, 1 kg", desc: "Pomodori da insalata, a grappolo", dove: "al supermercato", prezzo: 2.99 },   // prezzo medio tipico
  { id: "a7-pane-1-kg", cat: "spesa", e: "🥖", nome: "Pane, 1 kg", desc: "Pane fresco di grano tenero", dove: "dal fornaio", prezzo: 4.5 },   // prezzo medio tipico
  { id: "a7-salsiccia-di-maiale-500-g", cat: "spesa", e: "🌭", nome: "Salsiccia di maiale, 500 g", desc: "Salsiccia fresca per la brace", dove: "in macelleria", prezzo: 5.5 },   // carrefour.it, 23 ott 2026 (salsiccia di suino 9,99-11,00 €/kg; luganega 7,62 €/kg)
  { id: "a7-ananas-uno-intero", cat: "spesa", e: "🍍", nome: "Ananas, uno intero", desc: "Un ananas maturo", dove: "al supermercato", prezzo: 2.49 },   // prezzo medio tipico
  { id: "a7-zucchine-1-kg", cat: "spesa", e: "🥒", nome: "Zucchine, 1 kg", desc: "Zucchine chiare per la pasta e le frittate", dove: "al mercato", prezzo: 2.49 },   // prezzo medio tipico
  { id: "a7-filetto-di-salmone-1-kg", cat: "spesa", e: "🐟", nome: "Filetto di salmone, 1 kg", desc: "Salmone norvegese fresco, già sfilettato", dove: "in pescheria", prezzo: 27.9 },   // carrefour.it, 23 ott 2026
  { id: "a7-gamberi-rossi-di-mazara-1-kg", cat: "spesa", e: "🦐", nome: "Gamberi rossi di Mazara, 1 kg", desc: "Gamberi rossi freschi, pescati in Sicilia", dove: "in pescheria", prezzo: 49.9, wow: 1 },   // stima: nessun listino consumatore trovato (Gambero rosso di Sanremo 65-95 €/kg; Carrefour non lo vende)
  { id: "a7-filetto-di-manzo-1-kg", cat: "spesa", e: "🥩", nome: "Filetto di manzo, 1 kg", desc: "Il taglio più pregiato del manzo", dove: "in macelleria", prezzo: 42.9, wow: 1 },   // carrefour.it (filetto di bovino adulto 37,50 €/kg) + stima macelleria
  { id: "a7-orata-1-kg", cat: "spesa", e: "🐟", nome: "Orata, 1 kg", desc: "Orata fresca di allevamento, da cuocere al forno", dove: "in pescheria", prezzo: 14.9 },   // carrefour.it, 23 ott 2026
  { id: "a7-funghi-porcini-freschi-1-kg", cat: "spesa", e: "🍄", nome: "Funghi porcini freschi, 1 kg", desc: "Porcini freschi di bosco", dove: "al mercato", prezzo: 30, cur: "I porcini non si coltivano: nascono solo nei boschi.", wow: 1 },   // prezzo medio tipico
  { id: "a7-chianti-classico-75-cl", cat: "spesa", e: "🍷", nome: "Chianti Classico, 75 cl", desc: "Una bottiglia di rosso toscano col gallo nero", dove: "al supermercato", prezzo: 7.9, cur: "Sulla bottiglia c'è il gallo nero, simbolo del Chianti Classico." },   // carrefour.it, 23 ott 2026
  { id: "a7-cosciotto-d-agnello-1-kg", cat: "spesa", e: "🐑", nome: "Cosciotto d'agnello, 1 kg", desc: "Cosciotto fresco da arrostire al forno", dove: "in macelleria", prezzo: 17.9 },   // carrefour.it, 23 ott 2026
  { id: "a7-polpo-fresco-1-kg", cat: "spesa", e: "🐙", nome: "Polpo fresco, 1 kg", desc: "Polpo da lessare per l'insalata", dove: "in pescheria", prezzo: 24.9, cur: "Il polpo ha tre cuori." },   // prezzo medio tipico
  // ---------- ☕ BAR, PIZZERIA E RISTORANTI ----------
  { id: "a7-aperol-spritz-al-caffe-florian", cat: "bar", e: "🍹", nome: "Aperol Spritz al Caffè Florian", desc: "Un solo spritz seduti al tavolo, in piazza San Marco", dove: "al Caffè Florian di Venezia", prezzo: 17, cur: "Il Caffè Florian è aperto dal 1720, uno dei caffè più antichi ancora in attività.", wow: 1 },   // Il Fatto Alimentare
  { id: "a7-acqua-minerale-al-caffe-florian", cat: "bar", e: "💧", nome: "Acqua minerale al Caffè Florian", desc: "Una bottiglia d'acqua servita al tavolo", dove: "al Caffè Florian di Venezia", prezzo: 11, wow: 1 },   // sito ufficiale Florian: menu solo in PDF a immagini, illeggibile; il sito non cita il supplemento musica
  { id: "a7-caffe-al-tavolo-in-piazzetta", cat: "bar", e: "☕", nome: "Caffè al tavolo in Piazzetta", desc: "Un espresso seduti al tavolo, non al banco", dove: "in un bar della Piazzetta di Capri", prezzo: 8, cur: "Molti bar hanno due listini: uno al banco, che costa meno, e uno al tavolo.", wow: 1 },   // stima
  { id: "a7-pizza-marinara", cat: "bar", e: "🍕", nome: "Pizza marinara", desc: "Pomodoro, aglio e origano, senza mozzarella", dove: "in una pizzeria di Napoli", prezzo: 5.5, cur: "È più antica della margherita, che ha la mozzarella." },   // Scatti di Gusto
  { id: "a7-tajarin-al-tartufo-bianco", cat: "bar", e: "🍝", nome: "Tajarin al tartufo bianco", desc: "Un piatto di pasta all'uovo con tartufo bianco d'Alba", dove: "in un ristorante di Alba", prezzo: 40, cur: "Il tartufo bianco non si può coltivare: si trova solo con l'aiuto dei cani.", wow: 1 },   // guide e recensioni di Alba
  { id: "a7-aperitivo-con-buffet", cat: "bar", e: "🍸", nome: "Aperitivo con buffet", desc: "Un drink con stuzzichini a volontà dopo il lavoro", dove: "in un locale di Milano", prezzo: 12 },   // guide dell'aperitivo
  { id: "a7-cocktail-in-un-rooftop", cat: "bar", e: "🍹", nome: "Cocktail in un rooftop", desc: "Un cocktail sulla terrazza panoramica di un hotel", dove: "a Milano", prezzo: 20, wow: 1 },   // guide dei rooftop
  { id: "a7-pizza-a-portafoglio", cat: "bar", e: "🍕", nome: "Pizza a portafoglio", desc: "Pizza da strada, da mangiare camminando", dove: "in una pizzeria di Napoli", prezzo: 3.5, cur: "Si chiama così perché si piega in quattro, come un portafoglio." },   // prezzo medio tipico
  { id: "a7-orzo-in-tazza-grande", cat: "bar", e: "☕", nome: "Orzo in tazza grande", desc: "Orzo caldo e cremoso nella tazza grande", dove: "al bar", prezzo: 1.6 },   // prezzo medio tipico
  { id: "a7-marocchino", cat: "bar", e: "☕", nome: "Marocchino", desc: "Caffè, cacao e schiuma di latte in un bicchierino", dove: "in un bar di Torino", prezzo: 2 },   // prezzo medio tipico
  { id: "a7-cioccolata-calda-con-panna", cat: "bar", e: "🍫", nome: "Cioccolata calda con panna", desc: "Una tazza di cioccolata densa con la panna sopra", dove: "in un bar di Torino", prezzo: 5 },   // prezzo medio tipico
  { id: "a7-bicerin", cat: "bar", e: "☕", nome: "Bicerin", desc: "Caffè, cioccolata e crema di latte a strati", dove: "in un caffè storico di Torino", prezzo: 9, cur: "Si beve senza mescolare, per sentire i tre strati." },   // guida ai caffè storici
  { id: "a7-un-ombra-di-vino", cat: "bar", e: "🍷", nome: "Un'ombra di vino", desc: "Un bicchierino di vino bianco o rosso al bancone", dove: "in un bacaro di Venezia", prezzo: 2, cur: "Si dice che il nome venga dall'ombra del campanile di San Marco." },   // prezzo medio tipico
  { id: "a7-cicchetto-di-baccala-mantecato", cat: "bar", e: "🐟", nome: "Cicchetto di baccalà mantecato", desc: "Crostino con baccalà mantecato, da mangiare in piedi", dove: "in un bacaro di Venezia", prezzo: 2.5 },   // prezzo medio tipico
  { id: "a7-pasticciotto-leccese", cat: "bar", e: "🥧", nome: "Pasticciotto leccese", desc: "Dolce di frolla ripieno di crema pasticciera", dove: "in un bar di Lecce", prezzo: 1.4 },   // prezzo medio tipico
  { id: "a7-baba", cat: "bar", e: "🍰", nome: "Babà", desc: "Dolce soffice bagnato nello sciroppo", dove: "in una pasticceria di Napoli", prezzo: 2.5 },   // prezzo medio tipico
  { id: "a7-maritozzo-con-la-panna", cat: "bar", e: "🥐", nome: "Maritozzo con la panna", desc: "Panino dolce pieno di panna montata", dove: "in un bar di Roma", prezzo: 3, cur: "Si racconta che il fidanzato lo regalasse alla promessa sposa: il nome viene da «marito»." },   // prezzo medio tipico
  { id: "a7-panino-con-la-milza", cat: "bar", e: "🥪", nome: "Panino con la milza", desc: "Il panino palermitano «pani ca meusa»", dove: "in una friggitoria di Palermo", prezzo: 3.5 },   // prezzo medio tipico
  { id: "a7-panino-con-la-mortadella", cat: "bar", e: "🥪", nome: "Panino con la mortadella", desc: "Pane fresco e mortadella tagliata sottile", dove: "in una salumeria di Bologna", prezzo: 5 },   // prezzo medio tipico
  { id: "a7-olive-all-ascolana", cat: "bar", e: "🫒", nome: "Olive all'ascolana", desc: "Un cartoccio di olive ripiene e fritte", dove: "in una friggitoria di Ascoli Piceno", prezzo: 6 },   // prezzo medio tipico
  { id: "a7-crodino", cat: "bar", e: "🥤", nome: "Crodino", desc: "L'aperitivo analcolico arancione, al bar", dove: "al bar", prezzo: 3.5, cur: "Il Crodino nasce a Crodo, in Piemonte." },   // prezzo medio tipico
  { id: "a7-coca-cola-in-bottiglietta", cat: "bar", e: "🥤", nome: "Coca-Cola in bottiglietta", desc: "Una Coca-Cola da 33 cl servita al tavolo", dove: "al bar", prezzo: 3.5 },   // prezzo medio tipico
  { id: "a7-affogato-al-caffe", cat: "bar", e: "🍨", nome: "Affogato al caffè", desc: "Gelato alla crema con un caffè caldo versato sopra", dove: "in una gelateria di Roma", prezzo: 4.5 },   // prezzo medio tipico
  { id: "a7-parmigiana-di-melanzane", cat: "bar", e: "🍆", nome: "Parmigiana di melanzane", desc: "Melanzane, pomodoro e parmigiano al forno", dove: "in una trattoria di Napoli", prezzo: 9 },   // prezzo medio tipico
  { id: "a7-pasta-alla-norma", cat: "bar", e: "🍝", nome: "Pasta alla Norma", desc: "Maccheroni con pomodoro, melanzane e ricotta salata", dove: "in un ristorante di Catania", prezzo: 10, cur: "Si dice che il nome renda omaggio alla «Norma», l'opera del catanese Bellini." },   // prezzo medio tipico
  { id: "a7-cacio-e-pepe", cat: "bar", e: "🧀", nome: "Cacio e pepe", desc: "Spaghetti con pecorino romano e pepe nero", dove: "in una trattoria di Roma", prezzo: 13 },   // prezzo medio tipico
  { id: "a7-risotto-alla-milanese", cat: "bar", e: "🍚", nome: "Risotto alla milanese", desc: "Riso mantecato con lo zafferano", dove: "in una trattoria di Milano", prezzo: 16 },   // prezzo medio tipico
  { id: "a7-pizzoccheri-della-valtellina", cat: "bar", e: "🍝", nome: "Pizzoccheri della Valtellina", desc: "Pasta di grano saraceno con patate, verza e formaggio", dove: "in un ristorante in Valtellina", prezzo: 14 },   // prezzo medio tipico
  { id: "a7-pappardelle-al-cinghiale", cat: "bar", e: "🐗", nome: "Pappardelle al cinghiale", desc: "Pasta larga col sugo di cinghiale", dove: "in una trattoria toscana", prezzo: 12 },   // prezzo medio tipico
  { id: "a7-tagliata-di-manzo-con-rucola", cat: "bar", e: "🥩", nome: "Tagliata di manzo con rucola", desc: "Fettine di manzo con rucola e scaglie di grana", dove: "in un ristorante di Firenze", prezzo: 20 },   // prezzo medio tipico
  { id: "a7-sei-ostriche", cat: "bar", e: "🦪", nome: "Sei ostriche", desc: "Mezza dozzina di ostriche fresche con il limone", dove: "in un'ostricheria", prezzo: 24 },   // prezzo medio tipico
  { id: "a7-poke-bowl-al-salmone", cat: "bar", e: "🥗", nome: "Poke bowl al salmone", desc: "Riso, salmone crudo, avocado e verdure in una ciotola", dove: "in un locale di Milano", prezzo: 12.5, cur: "Poke è una parola hawaiana: vuol dire «tagliare a pezzetti»." },   // prezzo medio tipico
  { id: "a7-il-coperto", cat: "bar", e: "🍽️", nome: "Il coperto", desc: "Si paga a persona per sedersi a tavola", dove: "in una trattoria", prezzo: 2.5 },   // prezzo medio tipico
  { id: "a7-bottiglia-di-prosecco", cat: "bar", e: "🍾", nome: "Bottiglia di prosecco", desc: "Una bottiglia da 75 cl portata al tavolo", dove: "in un ristorante", prezzo: 25 },   // prezzo medio tipico
  { id: "a7-menu-degustazione-stellato", cat: "bar", e: "⭐", nome: "Menù degustazione stellato", desc: "Tanti assaggi in un ristorante con una stella Michelin", dove: "in un ristorante stellato", prezzo: 150 },   // prezzo medio tipico
  { id: "a7-dieci-pizze-margherita", cat: "bar", e: "🍕", nome: "Dieci pizze margherita", desc: "Una pizza a testa per la festa di dieci amici", dove: "in una pizzeria", prezzo: 65 },   // prezzo medio tipico
  { id: "a7-pizza-al-taglio", cat: "bar", e: "🍕", nome: "Pizza al taglio", desc: "Un trancio abbondante, pesato e pagato a etti", dove: "in una pizzeria al taglio di Roma", prezzo: 4.5 },   // prezzo medio tipico
  { id: "a7-fetta-di-torta-della-nonna", cat: "bar", e: "🍰", nome: "Fetta di torta della nonna", desc: "Frolla, crema e pinoli: il dolce toscano", dove: "in una pasticceria di Firenze", prezzo: 4.5 },   // prezzo medio tipico
  { id: "a7-calice-di-franciacorta", cat: "bar", e: "🥂", nome: "Calice di Franciacorta", desc: "Un calice di bollicine lombarde", dove: "in un locale di Milano", prezzo: 9 },   // prezzo medio tipico
  { id: "a7-menu-bambini", cat: "bar", e: "🧒", nome: "Menù bambini", desc: "Pasta o cotoletta con patatine e una bibita", dove: "in un ristorante", prezzo: 9 },   // prezzo medio tipico
  { id: "a7-frullato-di-frutta-fresca", cat: "bar", e: "🥤", nome: "Frullato di frutta fresca", desc: "Frutta fresca frullata con il latte o lo yogurt", dove: "al bar", prezzo: 4.5 },   // prezzo medio tipico
  { id: "a7-crepe-alla-nutella", cat: "bar", e: "🥞", nome: "Crêpe alla Nutella", desc: "Crêpe calda farcita con la crema alla nocciola", dove: "in un chiosco", prezzo: 4 },   // prezzo medio tipico
  { id: "a7-aragosta-alla-catalana", cat: "bar", e: "🦞", nome: "Aragosta alla catalana", desc: "Un'aragosta da circa 500 g con cipolla e pomodoro, piatto sardo", dove: "in un ristorante di Alghero", prezzo: 65 },   // senza web (limite ricerche esaurito): stima
  { id: "a7-bottiglia-di-champagne", cat: "bar", e: "🍾", nome: "Bottiglia di champagne", desc: "Una bottiglia di champagne base portata al tavolo", dove: "in un ristorante", prezzo: 100 },   // prezzo medio tipico
  { id: "a7-panino-e-bibita", cat: "bar", e: "🥪", nome: "Panino e bibita", desc: "Un panino e una bibita sull'autostrada", dove: "in un autogrill", prezzo: 10 },   // prezzo medio tipico
  { id: "a7-caffe-in-autogrill", cat: "bar", e: "☕", nome: "Caffè in autogrill", desc: "Un espresso al banco sull'autostrada", dove: "in un autogrill", prezzo: 1.7 },   // prezzo medio tipico
  { id: "a7-pizza-gourmet", cat: "bar", e: "🍕", nome: "Pizza gourmet", desc: "Pizza con burrata, mortadella e granella di pistacchi", dove: "in una pizzeria gourmet", prezzo: 14 },   // prezzo medio tipico
  { id: "a7-tortellini-in-brodo", cat: "bar", e: "🥣", nome: "Tortellini in brodo", desc: "Tortellini emiliani in brodo di carne", dove: "in una trattoria di Bologna", prezzo: 12, cur: "La leggenda dice che il tortellino è nato guardando l'ombelico di Venere." },   // prezzo medio tipico
  { id: "a7-cena-di-pesce-per-sei", cat: "bar", e: "🐟", nome: "Cena di pesce per sei", desc: "Antipasti, due primi e secondo per una tavolata di sei", dove: "in un ristorante di mare", prezzo: 300 },   // prezzo medio tipico
  // ---------- 🏠 CASA ED ELETTRODOMESTICI ----------
  { id: "a7-spazzola-lavapiatti-con-dispenser", cat: "casa", e: "🧽", nome: "Spazzola lavapiatti con dispenser", desc: "Spazzola con serbatoio per il sapone e spugna", dove: "dal casalinghi", prezzo: 3 },   // kasanova.com
  { id: "a7-colla-istantanea-attak-3-g", cat: "casa", e: "🧴", nome: "Colla istantanea Attak, 3 g", desc: "Tubetto di colla cianoacrilica da 3 grammi", dove: "dal ferramenta", prezzo: 3.99, cur: "La colla istantanea è nata per caso nel 1942, durante la ricerca di una plastica trasparente." },   // prezzo medio tipico
  { id: "a7-metro-a-nastro-da-5-metri", cat: "casa", e: "📏", nome: "Metro a nastro da 5 metri", desc: "Metro avvolgibile in acciaio, lungo 5 metri", dove: "dal ferramenta", prezzo: 6.9 },   // prezzo medio tipico
  { id: "a7-levapelucchi-elettrico", cat: "casa", e: "🧶", nome: "Levapelucchi ricaricabile", desc: "Rasoio per pelucchi ricaricabile, per maglioni e cappotti", dove: "dal casalinghi", prezzo: 9.9 },   // kasanova.com
  { id: "a7-multipresa-a-5-prese", cat: "casa", e: "🔌", nome: "Multipresa a 5 prese", desc: "Ciabatta elettrica con cinque prese e interruttore", dove: "dal ferramenta", prezzo: 8.9 },   // prezzo medio tipico
  { id: "a7-tavolino-ikea-lack-55x55-cm", cat: "casa", e: "🛋️", nome: "Tavolino IKEA Lack, 55x55 cm", desc: "Tavolino quadrato bianco, alto 45 cm", dove: "da IKEA", prezzo: 9.95, cur: "Il piano del Lack è vuoto: dentro ha un nido d'ape di cartone, per questo pesa pochissimo.", wow: 1 },   // ikea.com/it
  { id: "a7-bilancia-da-cucina-ikea-3-kg", cat: "casa", e: "⚖️", nome: "Bilancia da cucina IKEA, 3 kg", desc: "Bilancia da cucina con portata fino a 3 chili", dove: "da IKEA", prezzo: 12 },   // ikea.com/it
  { id: "a7-martello-da-carpentiere", cat: "casa", e: "🔨", nome: "Martello da carpentiere", desc: "Martello con testa in acciaio e manico in legno", dove: "dal ferramenta", prezzo: 12.9 },   // prezzo medio tipico
  { id: "a7-set-di-6-bicchieri-di-vetro", cat: "casa", e: "🥛", nome: "Set di 6 bicchieri di vetro", desc: "Sei bicchieri da acqua in vetro colorato", dove: "dal casalinghi", prezzo: 13.9 },   // kasanova.com
  { id: "a7-caraffa-filtrante-brita", cat: "casa", e: "🚰", nome: "Caraffa filtrante Brita Style Essential", desc: "Caraffa che filtra l'acqua del rubinetto, 2,4 litri, con un filtro", dove: "al supermercato", prezzo: 24.99 },   // brita.it, Style Essential 2,4 L con 1 filtro Maxtra Pro
  { id: "a7-tavolino-vassoio-ikea-gladom", cat: "casa", e: "🪑", nome: "Tavolino vassoio IKEA Gladom", desc: "Tavolino con il piano a vassoio, 45x53 cm", dove: "da IKEA", prezzo: 15 },   // ikea.com/it
  { id: "a7-sedia-grigia-da-cucina", cat: "casa", e: "🪑", nome: "Sedia grigia da cucina", desc: "Sedia grigia con lo schienale incrociato", dove: "dal casalinghi", prezzo: 19.9 },   // kasanova.com
  { id: "a7-lampada-da-tavolo-ikea-fado", cat: "casa", e: "💡", nome: "Lampada da tavolo IKEA Fado", desc: "Lampada da tavolo bianca, alta 25 cm", dove: "da IKEA", prezzo: 19.95 },   // ikea.com/it
  { id: "a7-ferro-da-stiro-verticale", cat: "casa", e: "👔", nome: "Ferro da stiro verticale", desc: "Ferro da stiro verticale e pieghevole, 1500 W", dove: "dal casalinghi", prezzo: 29.9 },   // kasanova.com
  { id: "a7-sedia-pieghevole-da-giardino", cat: "casa", e: "⛱️", nome: "Sedia pieghevole da giardino", desc: "Sedia pieghevole verde alloro per il giardino", dove: "dal casalinghi", prezzo: 32.9 },   // kasanova.com
  { id: "a7-set-di-pentole-ikea-365", cat: "casa", e: "🍳", nome: "Set di pentole IKEA 365+", desc: "Set di pentole in acciaio inox, 6 pezzi", dove: "da IKEA", prezzo: 35 },   // ikea.com/it
  { id: "a7-scaffale-ikea-kallax-77x77-cm", cat: "casa", e: "📚", nome: "Scaffale IKEA Kallax, 77x77 cm", desc: "Scaffale bianco a quadrotti, quattro caselle", dove: "da IKEA", prezzo: 35, cur: "Il Kallax ha preso il posto dell'Expedit, il vecchio scaffale a quadrotti di IKEA, nel 2014." },   // ikea.com/it
  { id: "a7-piastra-a-induzione-portatile-ikea", cat: "casa", e: "🔥", nome: "Piastra a induzione portatile IKEA", desc: "Fornello a induzione da tavolo con una sola zona", dove: "da IKEA", prezzo: 49.95 },   // ikea.com/it
  { id: "a7-accappatoio-di-cotone", cat: "casa", e: "🛁", nome: "Accappatoio di cotone", desc: "Accappatoio in cotone, linea Wellness", dove: "dal casalinghi", prezzo: 49.9 },   // kasanova.com
  { id: "a7-stendibiancheria-a-torre", cat: "casa", e: "🧺", nome: "Stendibiancheria a torre", desc: "Stendibiancheria a torre, alto 175 cm", dove: "dal casalinghi", prezzo: 59.9 },   // kasanova.com
  { id: "a7-sgabello-da-bar-regolabile", cat: "casa", e: "🪑", nome: "Sgabello da bar regolabile", desc: "Sgabello alto per il bancone, regolabile in altezza", dove: "dal casalinghi", prezzo: 52 },   // kasanova.com
  { id: "a7-macchina-lavazza-a-modo-mio", cat: "casa", e: "☕", nome: "Macchina Lavazza A Modo Mio", desc: "Macchina da caffè a capsule Lavazza Tiny Eco", dove: "in un negozio di elettrodomestici", prezzo: 62, cur: "Lavazza è nata a Torino nel 1895, da un piccolo negozio di alimentari." },   // unieuro.it
  { id: "a7-scopa-elettrica-senza-fili", cat: "casa", e: "🧹", nome: "Scopa elettrica senza fili Rowenta X-Force 8.80", desc: "Scopa elettrica ricaricabile senza fili, 250 W", dove: "dal casalinghi", prezzo: 129.49 },   // mediaworld.it, Rowenta X-Force 8.80 RH1833 (250 W)
  { id: "a7-friggitrice-ad-aria-digitale-4-litri", cat: "casa", e: "🍟", nome: "Friggitrice ad aria digitale, 4 litri", desc: "Friggitrice ad aria con display digitale, 1.500 W", dove: "dal casalinghi", prezzo: 69.9, cur: "La prima friggitrice ad aria della storia è stata presentata da Philips nel 2010, a Berlino." },   // kasanova.com
  { id: "a7-piumino-matrimoniale-quattro-stagioni", cat: "casa", e: "🛏️", nome: "Piumino matrimoniale quattro stagioni", desc: "Piumino matrimoniale in microfibra per tutto l'anno", dove: "dal casalinghi", prezzo: 69.9 },   // kasanova.com
  { id: "a7-letto-ikea-neiden-160x200-cm", cat: "casa", e: "🛏️", nome: "Letto IKEA Neiden, 160x200 cm", desc: "Solo la struttura del letto matrimoniale, in pino", dove: "da IKEA", prezzo: 79, wow: 1 },   // ikea.com/it
  { id: "a7-trapano-avvitatore-a-batteria", cat: "casa", e: "🪛", nome: "Trapano avvitatore a batteria", desc: "Trapano avvitatore senza fili a batteria", dove: "dal ferramenta", prezzo: 79.9 },   // bricoio.it
  { id: "a7-forno-elettrico-da-25-litri", cat: "casa", e: "🍞", nome: "Forno elettrico da 25 litri", desc: "Fornetto elettrico da tavolo da 25 litri", dove: "dal casalinghi", prezzo: 79.5 },   // kasanova.com
  { id: "a7-impastatrice-planetaria-da-5-litri", cat: "casa", e: "🥣", nome: "Impastatrice planetaria Ariete Gourmet, 5,2 litri", desc: "Impastatrice con ciotola da 5,2 litri e motore da 1.300 W", dove: "dal casalinghi", prezzo: 109.9, cur: "La prima impastatrice planetaria per la cucina di casa fu lanciata da KitchenAid nel 1919." },   // mediaworld.it, Ariete Impastatrice Gourmet (1300 W, 5,2 L)
  { id: "a7-topper-in-memory-foam", cat: "casa", e: "🛌", nome: "Topper in memory foam", desc: "Materassino in memory foam da mettere sul materasso", dove: "dal casalinghi", prezzo: 89.9 },   // kasanova.com
  { id: "a7-materasso-ikea-afjall-90x200-cm", cat: "casa", e: "🛏️", nome: "Materasso IKEA Åfjäll, 90x200 cm", desc: "Materasso singolo in schiuma, semirigido", dove: "da IKEA", prezzo: 99 },   // ikea.com/it
  { id: "a7-ventilatore-da-soffitto-con-luce", cat: "casa", e: "💨", nome: "Ventilatore da soffitto con luce", desc: "Ventilatore a soffitto in legno chiaro, con lampada", dove: "dal casalinghi", prezzo: 114 },   // kasanova.com
  { id: "a7-tavolo-da-giardino-110x71-cm", cat: "casa", e: "🌿", nome: "Tavolo da giardino, 110x71 cm", desc: "Tavolo da esterno verde alloro, lungo 110 cm", dove: "dal casalinghi", prezzo: 119 },   // kasanova.com
  { id: "a7-idropulitrice-karcher-k-2", cat: "casa", e: "💦", nome: "Idropulitrice Kärcher K 2 Power Control", desc: "Idropulitrice ad alta pressione per auto e balconi", dove: "al centro commerciale", prezzo: 99.99, cur: "Nel 1950 Alfred Kärcher inventò la prima idropulitrice europea ad acqua calda." },   // mediaworld.it (venduta da Kärcher Italia)
  { id: "a7-ferro-con-caldaia-braun-carestyle-5", cat: "casa", e: "♨️", nome: "Ferro con caldaia Braun CareStyle 5", desc: "Ferro da stiro con caldaia da 2 litri e 2.400 W", dove: "in un negozio di elettrodomestici", prezzo: 149 },   // unieuro.it
  { id: "a7-sedia-da-ufficio-ikea-markus", cat: "casa", e: "💺", nome: "Sedia da ufficio IKEA Markus", desc: "Sedia girevole da scrivania con schienale alto", dove: "da IKEA", prezzo: 159, cur: "IKEA viene dalle iniziali di Ingvar Kamprad, della sua fattoria Elmtaryd e del villaggio Agunnaryd." },   // ikea.com/it
  { id: "a7-piscina-bestway-steel-pro", cat: "casa", e: "🏊", nome: "Piscina Bestway Steel Pro", desc: "Piscina fuori terra tonda, 366 cm di diametro", dove: "dal casalinghi", prezzo: 179 },   // kasanova.com
  { id: "a7-libreria-ikea-hemnes-90x197-cm", cat: "casa", e: "📚", nome: "Libreria IKEA Hemnes, 90x197 cm", desc: "Libreria alta quasi due metri, in legno bianco", dove: "da IKEA", prezzo: 199 },   // ikea.com/it
  { id: "a7-poltrona-ikea-strandmon", cat: "casa", e: "🛋️", nome: "Poltrona IKEA Strandmon, Nordvalla grigio scuro", desc: "Poltrona con lo schienale alto e le «orecchie»", dove: "da IKEA", prezzo: 249 },   // ikea.com/it, STRANDMON Nordvalla grigio scuro (203.432.24)
  { id: "a7-lavapavimenti-tineco-floor-one-s7", cat: "casa", e: "🧼", nome: "Lavapavimenti Tineco Floor ONE S7 Stretch", desc: "Aspira e lava i pavimenti insieme, senza fili", dove: "in un negozio di elettrodomestici", prezzo: 299.99 },   // mediaworld.it
  { id: "a7-divano-ikea-ektorp-a-3-posti", cat: "casa", e: "🛋️", nome: "Divano IKEA Ektorp a 3 posti", desc: "Divano a tre posti con fodera bianca", dove: "da IKEA", prezzo: 399 },   // ikea.com/it
  { id: "a7-lavasciuga-candy-8-5-kg", cat: "casa", e: "🫧", nome: "Lavasciuga Candy GWD 485SB6-S, 8+5 kg", desc: "Lavasciuga: lava 8 kg e asciuga 5 kg", dove: "in un negozio di elettrodomestici", prezzo: 529 },   // mediaworld.it, Candy GWD 485SB6-S
  { id: "a7-letto-ikea-malm-con-contenitore", cat: "casa", e: "🛏️", nome: "Letto IKEA Malm con contenitore", desc: "Letto matrimoniale con il contenitore sotto, 160x200 cm", dove: "da IKEA", prezzo: 499 },   // ikea.com/it
  { id: "a7-congelatore-verticale-whirlpool", cat: "casa", e: "🧊", nome: "Congelatore verticale Whirlpool", desc: "Congelatore a cassetti NoFrost, per la cucina", dove: "in un negozio di elettrodomestici", prezzo: 600, cur: "I primi surgelati sono stati venduti negli Stati Uniti nel 1930, grazie a Clarence Birdseye." },   // unieuro.it
  { id: "a7-camera-da-letto-ikea-idanas", cat: "casa", e: "🛏️", nome: "Camera da letto IKEA Idanäs", desc: "Set camera da letto in 4 pezzi, letto da 180x200 cm", dove: "da IKEA", prezzo: 1056 },   // ikea.com/it
  { id: "a7-asciugatrice-bosch-serie-8", cat: "casa", e: "👕", nome: "Asciugatrice Bosch Serie 8", desc: "Asciugatrice a pompa di calore Bosch, serie 8", dove: "in un negozio di elettrodomestici", prezzo: 1160, cur: "Robert Bosch aprì la sua officina a Stoccarda nel 1886.", wow: 1 },   // unieuro.it
  { id: "a7-frigorifero-side-by-side", cat: "casa", e: "🧊", nome: "Frigorifero side by side", desc: "Frigorifero americano con due porte affiancate", dove: "in un negozio di elettrodomestici", prezzo: 849 },   // mediaworld.it
  { id: "a7-divano-ikea-jattebo-3-5-posti", cat: "casa", e: "🛋️", nome: "Divano IKEA Jättebo, 3,5 posti", desc: "Divano componibile con chaise-longue, 3,5 posti", dove: "da IKEA", prezzo: 1570 },   // ikea.com/it
  // ---------- 📱 TECNOLOGIA ----------
  { id: "a7-cavo-usb-c-da-1-metro", cat: "tech", e: "🔌", nome: "Cavo USB-C da 1 metro", desc: "Cavo di ricarica e dati USB-C, lungo 1 metro", dove: "in un negozio di elettronica", prezzo: 9.99 },   // prezzo medio tipico
  { id: "a7-pellicola-in-vetro-per-smartphone", cat: "tech", e: "📱", nome: "Pellicola in vetro per smartphone", desc: "Vetro temperato da incollare sullo schermo del telefono", dove: "al centro commerciale", prezzo: 9.99 },   // prezzo medio tipico
  { id: "a7-presa-smart-wi-fi", cat: "tech", e: "🏠", nome: "Presa smart Wi-Fi", desc: "Presa da comandare col telefono o con la voce", dove: "su Amazon", prezzo: 12.99 },   // prezzo medio tipico
  { id: "a7-terraria", cat: "tech", e: "⛏️", nome: "Terraria", desc: "Gioco di avventura e costruzione in 2D, per PC", dove: "su Steam", prezzo: 9.75, wow: 1 },   // store.steampowered.com
  { id: "a7-stardew-valley", cat: "tech", e: "🌾", nome: "Stardew Valley", desc: "Gioco in cui si gestisce una fattoria, per PC", dove: "su Steam", prezzo: 13.99, cur: "Quasi tutto il gioco l'ha fatto una persona sola: Eric Barone." },   // store.steampowered.com
  { id: "a7-auricolari-bluetooth-economici", cat: "tech", e: "🎧", nome: "Auricolari Bluetooth economici", desc: "Auricolari senza fili di una marca economica", dove: "al centro commerciale", prezzo: 19.99 },   // prezzo medio tipico
  { id: "a7-hollow-knight-silksong", cat: "tech", e: "🕷️", nome: "Hollow Knight: Silksong", desc: "Il seguito di Hollow Knight, per PC", dove: "su Steam", prezzo: 19.5, cur: "Il primo Hollow Knight è del 2017: Silksong è arrivato otto anni dopo." },   // store.steampowered.com
  { id: "a7-tappetino-xxl-per-mouse", cat: "tech", e: "🖱️", nome: "Tappetino XXL per mouse", desc: "Tappetino extra large per mouse e tastiera", dove: "su Amazon", prezzo: 19.99 },   // prezzo medio tipico
  { id: "a7-telecamera-wi-fi-da-interno", cat: "tech", e: "📹", nome: "Telecamera Wi-Fi da interno", desc: "Telecamera di sorveglianza Full HD da collegare al Wi-Fi", dove: "su Amazon", prezzo: 21.99 },   // prezzo medio tipico
  { id: "a7-cellulare-a-tasti", cat: "tech", e: "☎️", nome: "Cellulare a tasti", desc: "Cellulare a tasti semplice, solo per telefonare e messaggi", dove: "in un negozio di elettronica", prezzo: 39.99 },   // mediaworld.it
  { id: "a7-hades-ii", cat: "tech", e: "⚔️", nome: "Hades II", desc: "Gioco d'azione ispirato alla mitologia greca, per PC", dove: "su Steam", prezzo: 28.99 },   // store.steampowered.com
  { id: "a7-logitech-pebble-keys-2-k380s", cat: "tech", e: "⌨️", nome: "Logitech Pebble Keys 2 K380s", desc: "Tastiera Bluetooth compatta, per più dispositivi", dove: "sul sito Logitech", prezzo: 34.99 },   // logitech.com/it
  { id: "a7-it-takes-two", cat: "tech", e: "🤝", nome: "It Takes Two", desc: "Avventura da giocare in due, per PC", dove: "su Steam", prezzo: 39.99, cur: "È stato eletto gioco dell'anno ai Game Awards del 2021." },   // store.steampowered.com
  { id: "a7-mouse-da-gioco-logitech-g502-hero", cat: "tech", e: "🖱️", nome: "Mouse da gioco Logitech G502 HERO", desc: "Mouse da gioco con filo e pulsanti extra", dove: "sul sito Logitech", prezzo: 42.99 },   // logitech.com/it
  { id: "a7-cuffie-da-gaming-con-microfono", cat: "tech", e: "🎧", nome: "Cuffie da gaming con microfono", desc: "Cuffie over-ear con microfono per giocare", dove: "in un negozio di elettronica", prezzo: 49.99 },   // prezzo medio tipico
  { id: "a7-amazon-prime-un-anno-2", cat: "tech", e: "📦", nome: "Amazon Prime, un anno", desc: "Abbonamento di un anno: spedizioni gratis e Prime Video", dove: "su Amazon", prezzo: 49.9 },   // macitynet.it
  { id: "a7-baldur-s-gate-3", cat: "tech", e: "🎲", nome: "Baldur's Gate 3", desc: "Gioco di ruolo fantasy, edizione per PC", dove: "su Steam", prezzo: 59.99, cur: "Ha vinto il premio di gioco dell'anno ai Game Awards del 2023." },   // store.steampowered.com
  { id: "a7-elden-ring", cat: "tech", e: "⚔️", nome: "Elden Ring", desc: "Gioco d'azione e avventura in un mondo aperto, per PC", dove: "su Steam", prezzo: 59.99, cur: "La mitologia del suo mondo l'ha scritta George R. R. Martin, l'autore di Game of Thrones." },   // store.steampowered.com
  { id: "a7-router-wi-fi-6", cat: "tech", e: "📡", nome: "Router Wi-Fi 6", desc: "Router Wi-Fi 6 dual band per la casa", dove: "in un negozio di elettronica", prezzo: 79.99 },   // prezzo medio tipico
  { id: "a7-ea-sports-fc-27-per-ps5", cat: "tech", e: "⚽", nome: "EA Sports FC 27 per PS5", desc: "L'ultimo gioco di calcio di EA, per PlayStation 5", dove: "in un negozio di videogiochi", prezzo: 79.99 },   // unieuro.it
  { id: "a7-mouse-logitech-mx-master-3s", cat: "tech", e: "🖱️", nome: "Mouse Logitech MX Master 3S", desc: "Mouse senza fili ergonomico per chi lavora al PC", dove: "sul sito Logitech", prezzo: 99.99, cur: "Tra i fondatori di Logitech, nel 1981, c'erano due italiani: Pierluigi Zappacosta e Giacomo Marini." },   // logitech.com/it
  { id: "a7-youtube-premium-un-mese", cat: "tech", e: "▶️", nome: "YouTube Premium, un mese", desc: "Abbonamento individuale senza pubblicità", dove: "su YouTube", prezzo: 15.99, cur: "Il primo video di YouTube, del 2005, dura 19 secondi e mostra un ragazzo allo zoo." },   // smartworld.it
  { id: "a7-tastiera-logitech-mx-keys-s", cat: "tech", e: "⌨️", nome: "Tastiera Logitech MX Keys S", desc: "Tastiera senza fili con tasti illuminati", dove: "sul sito Logitech", prezzo: 119.99 },   // logitech.com/it
  { id: "a7-samsung-galaxy-a17", cat: "tech", e: "📱", nome: "Samsung Galaxy A17 4G, 128 GB", desc: "Smartphone Samsung economico da 6,7 pollici, 128 GB", dove: "in un negozio di elettronica", prezzo: 179.99 },   // mediaworld.it
  { id: "a7-sonos-roam-2", cat: "tech", e: "🔊", nome: "Sonos Roam 2", desc: "Altoparlante portatile impermeabile, Wi-Fi e Bluetooth", dove: "nel negozio Sonos", prezzo: 199 },   // sonos.com/it
  { id: "a7-tablet-lenovo-idea-tab-11", cat: "tech", e: "📱", nome: "Tablet Lenovo Idea Tab 11\", Wi-Fi 256 GB", desc: "Tablet Lenovo da 11 pollici con schermo 2,5K, Wi-Fi e 256 GB", dove: "in un negozio di elettronica", prezzo: 259 },   // mediaworld.it, Lenovo Idea Tab Wi-Fi 256 GB
  { id: "a7-samsung-galaxy-tab-a11-128-gb", cat: "tech", e: "📱", nome: "Samsung Galaxy Tab A11+, 128 GB", desc: "Tablet Samsung da 11 pollici con 128 GB", dove: "in un negozio di elettronica", prezzo: 229.9 },   // unieuro.it
  { id: "a7-monitor-gaming-27-pollici-2k", cat: "tech", e: "🖥️", nome: "Monitor gaming 27 pollici 2K, 165 Hz", desc: "Monitor 27 pollici 2K con 165 Hz per giocare", dove: "in un negozio di elettronica", prezzo: 189 },   // mediaworld.it, Samsung Odyssey G5 G55C 189,49; LG UltraGear 27G610A-B 169,49
  { id: "a7-drone-dji-neo-2", cat: "tech", e: "🚁", nome: "Drone DJI Neo 2", desc: "Mini drone leggerissimo per fare video e selfie", dove: "sul sito DJI", prezzo: 239 },   // store.dji.com/it
  { id: "a7-volante-logitech-driving-force", cat: "tech", e: "🏎️", nome: "Volante Logitech G29 Driving Force", desc: "Volante con pedali per giocare alle corse, per PlayStation e PC", dove: "sul sito Logitech", prezzo: 299.99 },   // logitechg.com/it-it, unieuro.it, ldlc.com/it-it
  { id: "a7-chromebook-acer-315", cat: "tech", e: "💻", nome: "Chromebook Acer 314", desc: "Portatile leggero con ChromeOS, schermo da 14 pollici, 8 GB e 64 GB", dove: "in un negozio di elettronica", prezzo: 269 },   // mediaworld.it, Acer Chromebook 314 CB0A314-1H (Celeron N4500)
  { id: "a7-dji-osmo-pocket-3", cat: "tech", e: "🎥", nome: "DJI Osmo Pocket 3", desc: "Piccola videocamera 4K con stabilizzatore", dove: "in un negozio di elettronica", prezzo: 299 },   // store.dji.com/it
  { id: "a7-xbox-series-s-512-gb", cat: "tech", e: "🎮", nome: "Xbox Series S, 512 GB", desc: "La console Xbox più piccola, senza lettore di dischi", dove: "in un negozio di videogiochi", prezzo: 499.99, cur: "Al lancio, nel 2020, la Series S costava 299,99 euro.", wow: 1 },   // multiplayer.it e tecnoandroid.it
  { id: "a7-redmi-note-17-pro-max-256-gb", cat: "tech", e: "📱", nome: "Redmi Note 17 Pro Max, 256 GB", desc: "Smartphone Xiaomi di fascia media, 256 GB", dove: "in un negozio di elettronica", prezzo: 529 },   // mediaworld.it
  { id: "a7-portatile-hp-15-pollici-ryzen-5", cat: "tech", e: "💻", nome: "Portatile HP 15 pollici, Intel Core 5", desc: "Portatile HP da 15 pollici con processore Intel Core 5, 16 GB e 512 GB", dove: "in un negozio di elettronica", prezzo: 799 },   // mediaworld.it, HP 15-FD1008NLX
  { id: "a7-airpods-max", cat: "tech", e: "🎧", nome: "AirPods Max 2", desc: "Cuffie over-ear di Apple con cancellazione del rumore", dove: "all'Apple Store", prezzo: 579 },   // apple.com/it, mediaworld.it
  { id: "a7-tv-da-65-pollici-4k", cat: "tech", e: "📺", nome: "TV Xiaomi F Pro da 65 pollici 4K", desc: "Smart TV QLED 4K da 65 pollici con Fire TV", dove: "in un negozio di elettronica", prezzo: 429 },   // mediaworld.it, Xiaomi 65 F PRO 2026
  { id: "a7-sonos-beam-ultra", cat: "tech", e: "🔊", nome: "Sonos Beam Ultra", desc: "Soundbar compatta Dolby Atmos per la TV", dove: "nel negozio Sonos", prezzo: 699 },   // sonos.com/it
  { id: "a7-drone-dji-mini-5-pro", cat: "tech", e: "🚁", nome: "Drone DJI Mini 5 Pro", desc: "Drone sotto i 250 grammi con telecamera 4K", dove: "sul sito DJI", prezzo: 799, cur: "Pesa meno di 250 grammi, la soglia sotto cui le regole sui droni sono più leggere." },   // store.dji.com/it
  { id: "a7-xbox-series-x-1-tb", cat: "tech", e: "🎮", nome: "Xbox Series X, 1 TB", desc: "La console Xbox più potente, con lettore di dischi", dove: "in un negozio di videogiochi", prezzo: 799.99, wow: 1 },   // multiplayer.it e tecnoandroid.it
  { id: "a7-ipad-air-da-11-pollici", cat: "tech", e: "📱", nome: "iPad Air da 11 pollici", desc: "Tablet Apple da 11 pollici, il modello Air", dove: "all'Apple Store", prezzo: 829 },   // smartworld.it e iphoneitalia.com
  { id: "a7-sonos-arc-ultra", cat: "tech", e: "🔊", nome: "Sonos Arc Ultra", desc: "Soundbar premium Dolby Atmos con 14 altoparlanti", dove: "nel negozio Sonos", prezzo: 1099, cur: "Sonos è nata nel 2002 a Santa Barbara, in California." },   // sonos.com/it
  { id: "a7-macbook-pro-16-pollici-chip-m5-pro", cat: "tech", e: "💻", nome: "MacBook Pro 16 pollici, chip M5 Pro", desc: "Portatile Apple da 16 pollici con il chip M5 Pro", dove: "all'Apple Store", prezzo: 3499, wow: 1 },   // smartworld.it
  // ---------- 🛵 AUTO, MOTO E BICI ----------
  { id: "a7-citroen-c3-aircross-puretech-100", cat: "motori", e: "🚙", nome: "Citroën C3 Aircross PureTech 100", desc: "Il SUV compatto francese a benzina, versione base", dove: "dal concessionario", prezzo: 20400 },   // patentati.it, sicurauto.it
  { id: "a7-dacia-jogger", cat: "motori", e: "🚙", nome: "Dacia Jogger Eco-G 120", desc: "La familiare Dacia a benzina e GPL, versione d'ingresso Essential", dove: "dal concessionario", prezzo: 18800 },   // patentati.it, it.motor1.com, motorbox.com (listino Jogger 2026)
  { id: "a7-suzuki-swift-hybrid-1-2", cat: "motori", e: "🚗", nome: "Suzuki Swift Hybrid 1.2", desc: "L'utilitaria giapponese mild hybrid, versione Waku", dove: "dal concessionario", prezzo: 21450 },   // patentati.it
  { id: "a7-peugeot-208-turbo-100-style", cat: "motori", e: "🚗", nome: "Peugeot 208 Turbo 100 Style", desc: "La 208 a benzina da 100 cavalli, allestimento Style", dove: "dal concessionario", prezzo: 22600 },   // patentati.it, sicurauto.it
  { id: "a7-mini-cooper-c-3-porte", cat: "motori", e: "🚗", nome: "MINI Cooper C 3 porte", desc: "La MINI classica a benzina, a tre porte", dove: "dal concessionario", prezzo: 27200 },   // BMW Italia, listino giugno 2026
  { id: "a7-kia-sportage", cat: "motori", e: "🚙", nome: "Kia Sportage", desc: "Il SUV coreano, versione d'ingresso", dove: "dal concessionario", prezzo: 33900 },   // patentati.it
  { id: "a7-mercedes-classe-a-180", cat: "motori", e: "🚗", nome: "Mercedes Classe A 180", desc: "La compatta Mercedes mild hybrid, versione base", dove: "dal concessionario", prezzo: 37050 },   // patentati.it
  { id: "a7-ford-mustang-fastback-5-0-v8-gt", cat: "motori", e: "🏎️", nome: "Ford Mustang Fastback 5.0 V8 GT", desc: "Il V8 da 446 cavalli, con il cambio manuale", dove: "dal concessionario", prezzo: 58500, cur: "La prima Mustang è del 1964." },   // patentati.it
  { id: "a7-mercedes-classe-g", cat: "motori", e: "🚙", nome: "Mercedes Classe G", desc: "Il fuoristrada quadrato di Mercedes, versione base", dove: "dal concessionario", prezzo: 145750, cur: "Esiste dal 1979 e il suo aspetto è cambiato pochissimo." },   // patentati.it
  { id: "a7-maserati-granturismo", cat: "motori", e: "🏎️", nome: "Maserati GranTurismo", desc: "La coupé del Tridente, versione d'ingresso", dove: "dal concessionario", prezzo: 163800, cur: "Il tridente del logo viene dalla fontana del Nettuno a Bologna." },   // patentati.it
  { id: "a7-aston-martin-db12", cat: "motori", e: "🏎️", nome: "Aston Martin DB12", desc: "La gran turismo inglese col motore V8", dove: "dal concessionario", prezzo: 252850, cur: "Le lettere DB sono le iniziali di David Brown, che comprò l'azienda nel 1947.", wow: 1 },   // patentati.it
  { id: "a7-honda-sh-mode-125", cat: "motori", e: "🛵", nome: "Honda SH Mode 125", desc: "Lo scooter piccolo e leggero per la città", dove: "dal concessionario Honda", prezzo: 2790 },   // honda.it
  { id: "a7-honda-pcx-125", cat: "motori", e: "🛵", nome: "Honda PCX 125", desc: "Lo scooter 125 comodo per la città", dove: "dal concessionario Honda", prezzo: 3190 },   // honda.it
  { id: "a7-yamaha-nmax-125", cat: "motori", e: "🛵", nome: "Yamaha NMAX 125", desc: "Lo scooter 125 sportivo di Yamaha", dove: "dal concessionario Yamaha", prezzo: 3499 },   // moto.it (annunci dei concessionari 2026)
  { id: "a7-honda-cb125r", cat: "motori", e: "🏍️", nome: "Honda CB125R", desc: "La naked 125 per chi ha la patente A1", dove: "dal concessionario Honda", prezzo: 5090 },   // honda.it
  { id: "a7-piaggio-beverly-310", cat: "motori", e: "🛵", nome: "Piaggio Beverly 310", desc: "Lo scooter ruote alte Piaggio da 310 cc", dove: "dal concessionario Piaggio", prezzo: 5850 },   // moto.it/inmoto.it e annunci concessionari 2026: listino 5.850-5.900 € f.c.
  { id: "a7-honda-forza-350", cat: "motori", e: "🛵", nome: "Honda Forza 350", desc: "Lo scooter 350 per la città e per l'autostrada", dove: "dal concessionario Honda", prezzo: 6490 },   // honda.it
  { id: "a7-aprilia-rs-457", cat: "motori", e: "🏍️", nome: "Aprilia RS 457", desc: "La piccola sportiva Aprilia per la patente A2", dove: "dal concessionario Aprilia", prezzo: 7250 },   // moto.it (listino e concessionari)
  { id: "a7-honda-cb750-hornet", cat: "motori", e: "🏍️", nome: "Honda CB750 Hornet", desc: "La naked Honda bicilindrica da 750 cc", dove: "dal concessionario Honda", prezzo: 8390 },   // honda.it
  { id: "a7-kawasaki-z900", cat: "motori", e: "🏍️", nome: "Kawasaki Z900", desc: "La naked Kawasaki a quattro cilindri, 948 cc", dove: "dal concessionario Kawasaki", prezzo: 9990 },   // insella.it, concessionari
  { id: "a7-bmw-s-1000-rr", cat: "motori", e: "🏍️", nome: "BMW S 1000 RR", desc: "La superbike BMW da oltre 200 cavalli", dove: "dal concessionario BMW", prezzo: 21650 },   // moto.it/listino/bmw/s-1000-rr
  { id: "a7-ducati-multistrada-v4-s", cat: "motori", e: "🏍️", nome: "Ducati Multistrada V4 S", desc: "La moto da viaggio Ducati col motore V4", dove: "dal concessionario Ducati", prezzo: 25490 },   // moto.it, motorimagazine.it
  { id: "a7-honda-gold-wing", cat: "motori", e: "🏍️", nome: "Honda Gold Wing", desc: "La grande moto da turismo col motore a sei cilindri", dove: "dal concessionario Honda", prezzo: 29890, cur: "Esiste dal 1975." },   // honda.it
  { id: "a7-giant-newtour-e-1-lst", cat: "motori", e: "🚲", nome: "Giant NewTour E+ 1 LST", desc: "La e-bike da trekking di Giant, con motore elettrico", dove: "in un negozio di biciclette", prezzo: 3199 },   // giant-bicycles.com/it
  { id: "a7-giant-tcr-advanced-sl-0", cat: "motori", e: "🚲", nome: "Giant TCR Advanced SL 0", desc: "La bici da corsa in carbonio col gruppo Dura-Ace", dove: "in un negozio di biciclette", prezzo: 11799, cur: "Giant, di Taiwan, è considerata la più grande fabbrica di biciclette del mondo.", wow: 1 },   // giant-bicycles.com/it
  { id: "a7-un-litro-di-benzina-al-self", cat: "motori", e: "⛽", nome: "Un litro di benzina al self", desc: "Un litro di benzina self, prezzo medio in Italia", dove: "al distributore", prezzo: 2.03 },   // Mimit via fleetmagazine.com, 19 ott 2026
  { id: "a7-un-litro-di-gasolio-al-self", cat: "motori", e: "⛽", nome: "Un litro di gasolio al self", desc: "Un litro di gasolio self, prezzo medio in Italia", dove: "al distributore", prezzo: 2.26, cur: "Oggi il gasolio costa più della benzina.", wow: 1 },   // Mimit via fleetmagazine.com, 19 ott 2026
  { id: "a7-guanti-da-moto-estivi-dainese-metrax-air", cat: "motori", e: "🧤", nome: "Guanti da moto estivi Dainese Metrax Air", desc: "Guanti in tessuto leggero per la moto d'estate", dove: "da Dainese", prezzo: 49 },   // dainese.com/it
  { id: "a7-vignetta-della-slovenia-una-settimana", cat: "motori", e: "🛣️", nome: "Vignetta della Slovenia, una settimana", desc: "La vignetta per le autostrade slovene, per un'auto", dove: "online, sul sito della Slovenia", prezzo: 16, cur: "Dal 2021 la vignetta è digitale e legata alla targa." },   // evinjeta.dars.si
  { id: "a7-vignetta-annuale-della-slovenia", cat: "motori", e: "🛣️", nome: "Vignetta annuale della Slovenia", desc: "La vignetta per le autostrade slovene, valida un anno", dove: "online, sul sito della Slovenia", prezzo: 117.5 },   // evinjeta.dars.si
  { id: "a7-museo-lamborghini", cat: "motori", e: "🏛️", nome: "Museo Lamborghini", desc: "Il biglietto intero del museo delle Lamborghini", dove: "a Sant'Agata Bolognese", prezzo: 18, cur: "Il museo sta a Sant'Agata Bolognese, dove nascono le Lamborghini." },   // bolognawelcome.com e musement.com: intero 18 €
  { id: "a7-traforo-del-frejus-solo-andata", cat: "motori", e: "🚇", nome: "Traforo del Frejus, solo andata", desc: "Il passaggio in auto nel tunnel Italia-Francia", dove: "al traforo, lato Italia", prezzo: 56.4, cur: "Il tunnel è lungo quasi 13 chilometri." },   // sitaf.it, tariffe 2026
  { id: "a7-seggiolino-auto-chicco-gro-up-i-size", cat: "motori", e: "👶", nome: "Seggiolino auto Chicco Gro-Up i-Size", desc: "Seggiolino per bimbi da 76 a 150 cm di altezza", dove: "da Chicco", prezzo: 129 },   // chicco.it
  { id: "a7-casco-integrale-agv-k5-tinta-unita", cat: "motori", e: "⛑️", nome: "Casco integrale AGV K5, tinta unita", desc: "Il casco integrale AGV in tinta unita", dove: "da Dainese", prezzo: 329 },   // dainese.com/it
  { id: "a7-gilet-airbag-dainese-smart-go", cat: "motori", e: "🦺", nome: "Gilet airbag Dainese Smart Go", desc: "Un gilet con l'airbag da indossare in moto", dove: "da Dainese", prezzo: 349 },   // dainese.com/it
  { id: "a7-casco-agv-pista-gp-rr", cat: "motori", e: "⛑️", nome: "Casco AGV Pista GP RR", desc: "Il casco integrale in carbonio ispirato alla MotoGP", dove: "da Dainese", prezzo: 1480, wow: 1 },   // dainese.com/it
  { id: "a7-giacca-moto-estiva-dainese-lisbona-air-t", cat: "motori", e: "🧥", nome: "Giacca moto estiva Dainese Lisbona Air Tex", desc: "Una giacca in tessuto traforato per la moto d'estate", dove: "da Dainese", prezzo: 209 },   // dainese.com/it
  { id: "a7-giant-talon-20", cat: "motori", e: "🚲", nome: "Giant Talon 20", desc: "Una mountain bike per bambini, ruote da 20 pollici", dove: "in un negozio di biciclette", prezzo: 409 },   // giant-bicycles.com/it
  { id: "a7-giant-talon", cat: "motori", e: "🚵", nome: "Giant Talon 3", desc: "Una mountain bike Giant per iniziare", dove: "in un negozio di biciclette", prezzo: 699 },   // giant-bicycles.com/it/talon-3
  { id: "a7-giant-revolt-0", cat: "motori", e: "🚴", nome: "Giant Revolt 0", desc: "Una bici gravel per strade bianche e asfalto", dove: "in un negozio di biciclette", prezzo: 1899 },   // giant-bicycles.com/it
  { id: "a7-camera-d-aria-per-bici-da-corsa", cat: "motori", e: "🔧", nome: "Camera d'aria Decathlon per bici da corsa", desc: "La camera d'aria LIGHT 700x23-32 con valvola Presta", dove: "in un negozio di biciclette", prezzo: 5.99 },   // decathlon.it: camera d'aria LIGHT 700x23-32 Presta 48 mm 5,99 € (la standard con valvola 80 mm 3,49 €)
  { id: "a7-lavaggio-dell-auto-al-self", cat: "motori", e: "🧼", nome: "Lavaggio dell'auto al self", desc: "Un lavaggio dell'auto con i gettoni, al self-service", dove: "all'autolavaggio self", prezzo: 5 },   // prezzo medio tipico, da ricontrollare
  { id: "a7-pastiglie-dei-freni-davanti", cat: "motori", e: "🛞", nome: "Pastiglie dei freni davanti", desc: "Le pastiglie nuove davanti, montate", dove: "dal meccanico", prezzo: 150 },   // prezzo medio tipico, da ricontrollare
  // ---------- 🏖️ VIAGGI E VACANZE ----------
  { id: "a7-bus-a-roma-biglietto-da-100-minuti", cat: "viaggi", e: "🚌", nome: "Bus a Roma, biglietto da 100 minuti", desc: "Una corsa su bus o tram, valida 100 minuti", dove: "a Roma", prezzo: 1.5, cur: "Dalla prima convalida vale 100 minuti." },   // ATAC / Telepass
  { id: "a7-biglietto-della-metro-di-parigi", cat: "viaggi", e: "🚇", nome: "Biglietto della metro di Parigi", desc: "Una corsa singola in metro, treno o RER", dove: "a Parigi", prezzo: 2.55 },   // Île-de-France Mobilités
  { id: "a7-ingresso-alla-basilica-di-san-marco", cat: "viaggi", e: "⛪", nome: "Ingresso alla Basilica di San Marco", desc: "La basilica, in coda, senza la Pala d'Oro", dove: "a Venezia", prezzo: 3, cur: "La Pala d'Oro si paga a parte: 5 euro in coda.", wow: 1 },   // Procuratoria di San Marco
  { id: "a7-traghetto-napoli-capri-nave-lenta", cat: "viaggi", e: "🚢", nome: "Traghetto Napoli-Capri, nave lenta", desc: "Un passaggio a persona, 85 minuti di viaggio", dove: "da Napoli a Capri", prezzo: 14, cur: "L'aliscafo ci mette 50 minuti, la nave lenta 85." },   // Caremar (traghetti.com)
  { id: "a7-treno-dall-aeroporto-di-parigi-al-centro", cat: "viaggi", e: "🚆", nome: "Treno dall'aeroporto di Parigi al centro", desc: "Il biglietto speciale per gli aeroporti, una corsa", dove: "a Parigi", prezzo: 14 },   // Île-de-France Mobilités
  { id: "a7-seggiovia-del-monte-solaro-andata-e-rito", cat: "viaggi", e: "🚡", nome: "Seggiovia del Monte Solaro, andata e ritorno", desc: "Da Anacapri alla cima più alta di Capri", dove: "ad Anacapri", prezzo: 14 },   // guida di viaggio, aprile 2026
  { id: "a7-teatro-antico-di-taormina", cat: "viaggi", e: "🏛️", nome: "Teatro Antico di Taormina", desc: "Il teatro greco-romano con vista sull'Etna", dove: "a Taormina", prezzo: 14 },   // Visititaly / guide 2026
  { id: "a7-salita-al-campanile-di-san-marco", cat: "viaggi", e: "🔔", nome: "Salita al Campanile di San Marco", desc: "L'ascensore fino in cima, comprato in coda", dove: "a Venezia", prezzo: 10, cur: "Crollò nel 1902 e fu ricostruito «com'era, dov'era»." },   // Procuratoria di San Marco
  { id: "a7-salita-alla-cupola-di-san-pietro-a-piedi", cat: "viaggi", e: "⛪", nome: "Salita alla Cupola di San Pietro, a piedi", desc: "Tutti i gradini fino alla cupola, senza ascensore", dove: "a Roma, in Vaticano", prezzo: 10, cur: "A piedi sono 551 gradini." },   // guide 2026 (Fabbrica di San Pietro)
  { id: "a7-giro-delle-due-isole-borromee-da-stresa", cat: "viaggi", e: "⛵", nome: "Giro delle due Isole Borromee da Stresa", desc: "Battello per Isola Superiore e Isola Bella", dove: "a Stresa, sul Lago Maggiore", prezzo: 11 },   // Navigazione Laghi
  { id: "a7-villa-d-este", cat: "viaggi", e: "⛲", nome: "Villa d'Este", desc: "Il palazzo e il giardino delle fontane", dove: "a Tivoli", prezzo: 15, cur: "Ha più di 50 fontane." },   // cultura.gov.it
  { id: "a7-museo-del-prado", cat: "viaggi", e: "🖼️", nome: "Museo del Prado", desc: "L'ingresso generale al museo di Goya e Velázquez", dove: "a Madrid", prezzo: 15 },   // esMadrid / Taquilla
  { id: "a7-scavi-di-ercolano", cat: "viaggi", e: "🌋", nome: "Scavi di Ercolano", desc: "La città romana sepolta dal Vesuvio nel 79 d.C.", dove: "a Ercolano, vicino a Napoli", prezzo: 16, cur: "Fu sepolta da oltre 15 metri di cenere e fango." },   // Napolike / Parco di Ercolano
  { id: "a7-museo-d-orsay", cat: "viaggi", e: "🎨", nome: "Museo d'Orsay", desc: "L'ingresso al museo degli impressionisti", dove: "a Parigi", prezzo: 16, cur: "Il giovedì sera, dalle 18, il biglietto costa meno." },   // musee-orsay.fr
  { id: "a7-casa-di-anne-frank", cat: "viaggi", e: "📖", nome: "Casa di Anne Frank", desc: "L'ingresso al museo dell'alloggio segreto", dove: "ad Amsterdam", prezzo: 16.5 },   // annefrank.org (guide 2026)
  { id: "a7-grotte-di-frasassi", cat: "viaggi", e: "🦇", nome: "Grotte di Frasassi", desc: "La visita guidata alle grotte, a persona", dove: "a Genga, nelle Marche", prezzo: 20 },   // frasassi.com/it/orari-costi
  { id: "a7-castel-sant-angelo", cat: "viaggi", e: "🏰", nome: "Castel Sant'Angelo", desc: "Il castello sul Tevere, ingresso intero", dove: "a Roma", prezzo: 18 },   // coerente con rivenditore castelsantangelo.com (da 21 euro con audioguida)
  { id: "a7-galleria-borghese", cat: "viaggi", e: "🗿", nome: "Galleria Borghese", desc: "Un turno di due ore tra Bernini e Caravaggio", dove: "a Roma", prezzo: 18 },   // TicketOne
  { id: "a7-alilaguna-dall-aeroporto-a-venezia", cat: "viaggi", e: "🚤", nome: "Alilaguna dall'aeroporto a Venezia", desc: "Il battello dal Marco Polo alla città, una corsa", dove: "a Venezia", prezzo: 18 },   // Venezia Unica
  { id: "a7-palazzo-vecchio", cat: "viaggi", e: "🏛️", nome: "Palazzo Vecchio", desc: "Il museo del palazzo del Comune, biglietto intero", dove: "a Firenze", prezzo: 18 },   // Comune di Firenze (La Nazione)
  { id: "a7-giornata-alle-isole-borromee", cat: "viaggi", e: "🏝️", nome: "Giornata alle Isole Borromee", desc: "Il battello libero tra tre isole, per tutto il giorno", dove: "a Stresa, sul Lago Maggiore", prezzo: 19.5 },   // Navigazione Laghi
  { id: "a7-giro-sulla-senna-in-battello", cat: "viaggi", e: "🛥️", nome: "Giro sulla Senna in battello", desc: "Un'ora di crociera sui Bateaux-Mouches", dove: "a Parigi", prezzo: 18 },   // rivenditori e guide dei Bateaux-Mouches
  { id: "a7-reggia-di-venaria", cat: "viaggi", e: "👑", nome: "Reggia di Venaria", desc: "La reggia sabauda con i giardini e il Castello della Mandria", dove: "a Venaria, vicino a Torino", prezzo: 22 },   // lavenaria.it/it/biglietti
  { id: "a7-torre-di-arnolfo-a-palazzo-vecchio", cat: "viaggi", e: "🗼", nome: "Torre di Arnolfo a Palazzo Vecchio", desc: "La salita alla torre con vista sul Duomo", dove: "a Firenze", prezzo: 20, wow: 1 },   // musefirenze.it (Palazzo Vecchio: torre e camminamenti 20 euro)
  { id: "a7-ombrellone-e-due-lettini-a-jesolo", cat: "viaggi", e: "🏖️", nome: "Ombrellone e due lettini a Jesolo", desc: "Una giornata in spiaggia in uno stabilimento", dove: "a Jesolo", prezzo: 30 },   // stima prezzi medi stabilimenti di Jesolo
  { id: "a7-battello-da-como-a-bellagio-andata-e-rit", cat: "viaggi", e: "⛴️", nome: "Battello da Como a Bellagio, andata e ritorno", desc: "Una gita sul lago di Como in battello", dove: "a Como", prezzo: 24 },   // Navigazione Laghi
  { id: "a7-sagrada-familia", cat: "viaggi", e: "⛪", nome: "Sagrada Família", desc: "Il biglietto base per la basilica di Gaudí", dove: "a Barcellona", prezzo: 26, cur: "I lavori sono iniziati nel 1882 e ancora non sono finiti." },   // sagradafamilia.org (guide 2026)
  { id: "a7-cabinovia-dell-alpe-di-siusi-andata-e-ri", cat: "viaggi", e: "🚠", nome: "Cabinovia dell'Alpe di Siusi, andata e ritorno", desc: "Da Siusi all'altopiano più grande d'Europa", dove: "a Siusi, in Alto Adige", prezzo: 30, wow: 1 },   // seiseralm.it
  { id: "a7-skipass-di-un-giorno-a-livigno", cat: "viaggi", e: "⛷️", nome: "Skipass di un giorno a Livigno", desc: "Il giornaliero adulto in stagione 2026/27", dove: "a Livigno", prezzo: 66, cur: "Livigno è zona extradoganale: benzina e liquori costano meno." },   // guide skipass 2026/27
  { id: "a7-firenze-card-72-ore", cat: "viaggi", e: "🎟️", nome: "Firenze Card, 72 ore", desc: "La tessera per oltre 60 musei, valida tre giorni", dove: "a Firenze", prezzo: 85, cur: "Il Duomo non è incluso: serve un biglietto a parte." },   // VisitTuscany / Firenze Card
  { id: "a7-disneyland-paris-biglietto-flessibile", cat: "viaggi", e: "🏰", nome: "Disneyland Paris, biglietto flessibile", desc: "Un giorno in un parco, senza data", dove: "a Marne-la-Vallée, vicino a Parigi", prezzo: 105, wow: 1 },   // Disneyland Paris (listino alle casse)
  { id: "a7-notte-in-un-hotel-3-stelle-a-roma", cat: "viaggi", e: "🏨", nome: "Notte in un hotel 3 stelle a Roma", desc: "Camera doppia in un hotel di fascia media", dove: "a Roma", prezzo: 150 },   // stima (prezzi medi Momondo)
  { id: "a7-interrail-global-pass-4-giorni-in-un-mes", cat: "viaggi", e: "🚉", nome: "Interrail Global Pass, 4 giorni in un mese", desc: "Il pass per adulti in seconda classe", dove: "in tutta Europa", prezzo: 290 },   // interrail.com (guide 2026)
  { id: "a7-crociera-di-7-notti-nel-mediterraneo", cat: "viaggi", e: "🛳️", nome: "Crociera di 7 notti nel Mediterraneo", desc: "Cabina interna, a persona, senza escursioni", dove: "da un porto italiano", prezzo: 900 },   // stima (offerte MSC/Costa)
  { id: "a7-una-settimana-alle-maldive", cat: "viaggi", e: "🌴", nome: "Una settimana alle Maldive", desc: "Volo e resort a persona, mezza pensione", dove: "alle Maldive", prezzo: 2500 },   // stima (pacchetti dei tour operator)
  { id: "a7-safari-di-una-settimana-in-kenya", cat: "viaggi", e: "🦁", nome: "Safari di una settimana in Kenya", desc: "Volo, lodge e jeep, a persona", dove: "in Kenya", prezzo: 2800 },   // stima (pacchetti dei tour operator)
  { id: "a7-biglietto-del-vaporetto-per-7-giorni", cat: "viaggi", e: "🚤", nome: "Biglietto del vaporetto per 7 giorni", desc: "Tutti i vaporetti e i bus per una settimana", dove: "a Venezia", prezzo: 65 },   // stima (listino Venezia Unica)
  { id: "a7-traghetto-in-gondola-sul-canal-grande", cat: "viaggi", e: "🛶", nome: "Traghetto in gondola sul Canal Grande", desc: "Attraversare il canale in piedi su una gondola", dove: "a Venezia", prezzo: 2 },   // stima (tariffa del Comune di Venezia)
  { id: "a7-weekend-a-barcellona-per-due", cat: "viaggi", e: "🧳", nome: "Weekend a Barcellona per due", desc: "Volo e due notti in hotel, per due persone", dove: "a Barcellona", prezzo: 500 },   // stima (prezzi medi Skyscanner/Booking)
  { id: "a7-settimana-in-un-villaggio-turistico-in-c", cat: "viaggi", e: "🏊", nome: "Settimana in un villaggio turistico in Calabria", desc: "A persona, pensione completa", dove: "in Calabria", prezzo: 750 },   // stima (prezzi medi dei villaggi)
  { id: "a7-settimana-a-sharm-el-sheikh-tutto-compre", cat: "viaggi", e: "🐠", nome: "Settimana a Sharm el-Sheikh, tutto compreso", desc: "Volo e hotel 4 stelle, a persona", dove: "in Egitto", prezzo: 800 },   // stima (pacchetti dei tour operator)
  { id: "a7-volo-roma-londra-con-una-low-cost", cat: "viaggi", e: "🛫", nome: "Volo Roma-Londra con una low cost", desc: "Solo andata, con il bagaglio a mano", dove: "da Roma a Londra", prezzo: 50 },   // stima (prezzi medi Skyscanner)
  { id: "a7-una-notte-in-agriturismo-in-toscana", cat: "viaggi", e: "🌻", nome: "Una notte in agriturismo in Toscana", desc: "Camera doppia con colazione", dove: "in Toscana", prezzo: 120 },   // stima (prezzi medi Booking)
  { id: "a7-una-notte-in-b-b-a-napoli", cat: "viaggi", e: "🛏️", nome: "Una notte in B&B a Napoli", desc: "Camera doppia in centro, con colazione", dove: "a Napoli", prezzo: 80 },   // stima (prezzi medi Booking)
  { id: "a7-auto-a-noleggio-per-una-settimana-in-sic", cat: "viaggi", e: "🚗", nome: "Auto a noleggio per una settimana in Sicilia", desc: "Una utilitaria, chilometri illimitati", dove: "a Palermo o Catania", prezzo: 250 },   // stima (prezzi medi dei noleggi)
  { id: "a7-una-notte-in-campeggio-con-la-tenda", cat: "viaggi", e: "⛺", nome: "Una notte in campeggio con la tenda", desc: "Piazzola per due persone e una tenda", dove: "in un campeggio sul Garda", prezzo: 40 },   // stima (prezzi medi dei campeggi)
  { id: "a7-bici-a-noleggio-per-un-giorno", cat: "viaggi", e: "🚲", nome: "Bici a noleggio per un giorno", desc: "Una bici da città, dalla mattina alla sera", dove: "in una città d'arte", prezzo: 15 },   // stima (prezzi medi dei noleggi)
  { id: "a7-una-notte-in-un-hotel-di-lusso-a-venezia", cat: "viaggi", e: "💎", nome: "Una notte in un hotel di lusso a Venezia", desc: "Camera doppia in un cinque stelle sul Canal Grande", dove: "a Venezia", prezzo: 700, wow: 1 },   // stima (prezzi medi Booking)
  // ---------- 👟 VESTITI E ACCESSORI ----------
  { id: "a7-bracciale-in-acciaio-con-cristalli-azzur", cat: "vestiti", e: "📿", nome: "Bracciale in acciaio con cristalli azzurri", desc: "Un bracciale di bigiotteria in acciaio e cristalli", dove: "da Stroili", prezzo: 9.95 },   // stroilioro.com
  { id: "a7-felpa-girocollo-relaxed-fit", cat: "vestiti", e: "👕", nome: "Felpa girocollo relaxed fit", desc: "Una felpa girocollo in cotone verde scuro", dove: "da Piazza Italia", prezzo: 14.99 },   // piazzaitalia.it
  { id: "a7-casio-f-91w", cat: "vestiti", e: "⌚", nome: "Casio F-91W", desc: "L'orologio digitale in resina, con cronometro e sveglia", dove: "su Amazon", prezzo: 14.95, cur: "È in produzione dal 1989." },   // amazon.it (notebookcheck.it)
  { id: "a7-anello-fedina-in-argento", cat: "vestiti", e: "💍", nome: "Anello fedina in argento", desc: "Un anello sottile in argento 925 rodiato", dove: "da Stroili", prezzo: 14.9 },   // stroilioro.com
  { id: "a7-costume-parigamba-da-uomo", cat: "vestiti", e: "🩳", nome: "Costume parigamba da uomo", desc: "Un costume da mare a parigamba, modello Panama", dove: "da Calzedonia", prezzo: 19.9 },   // calzedonia.com/it
  { id: "a7-jeans-chino-straight-fit", cat: "vestiti", e: "👖", nome: "Jeans chino straight fit", desc: "Pantaloni chino neri a taglio dritto", dove: "da Piazza Italia", prezzo: 24.99 },   // piazzaitalia.it
  { id: "a7-t-shirt-nike-club", cat: "vestiti", e: "👕", nome: "T-shirt Nike Club", desc: "Una T-shirt in cotone col baffo Nike", dove: "da Foot Locker", prezzo: 24.99 },   // footlocker.it
  { id: "a7-portachiavi-mimi", cat: "vestiti", e: "🔑", nome: "Portachiavi Mimì", desc: "Un portachiavi della collezione Mimì", dove: "da Carpisa", prezzo: 25 },   // carpisa.it
  { id: "a7-t-shirt-adidas-originals", cat: "vestiti", e: "👕", nome: "T-shirt adidas Originals", desc: "Una T-shirt nera adidas Originals", dove: "da Foot Locker", prezzo: 29.99 },   // footlocker.it
  { id: "a7-pigiama-corto-da-uomo-in-cotone-pima", cat: "vestiti", e: "😴", nome: "Pigiama corto da uomo in cotone Pima", desc: "Un pigiama corto da uomo in cotone Pima", dove: "da Intimissimi", prezzo: 29.9 },   // intimissimi.com/it
  { id: "a7-collana-punto-luce-in-argento", cat: "vestiti", e: "📿", nome: "Collana Punto Luce in argento", desc: "Una collana con un punto luce in argento 925", dove: "da Stroili", prezzo: 29.9 },   // stroilioro.com
  { id: "a7-costume-boxer-formentera", cat: "vestiti", e: "🩳", nome: "Costume boxer Formentera", desc: "Un costume a boxer da uomo con la fantasia", dove: "da Calzedonia", prezzo: 39.9 },   // calzedonia.com/it
  { id: "a7-leggings-con-cashmere", cat: "vestiti", e: "🧶", nome: "Leggings con cashmere", desc: "Leggings da donna caldi, con un po' di cashmere", dove: "da Calzedonia", prezzo: 39.95 },   // calzedonia.com/it
  { id: "a7-t-shirt-lacoste-small-croc", cat: "vestiti", e: "🐊", nome: "T-shirt Lacoste Small Croc", desc: "La T-shirt nera col piccolo coccodrillo", dove: "da Foot Locker", prezzo: 49.99, cur: "Il coccodrillo era il soprannome del tennista René Lacoste." },   // footlocker.it
  { id: "a7-bomber-effetto-pelle", cat: "vestiti", e: "🧥", nome: "Bomber effetto pelle", desc: "Un giubbotto bomber marrone effetto pelle", dove: "da Piazza Italia", prezzo: 49.99 },   // piazzaitalia.it
  { id: "a7-zaino-carpisa-roadmate-go", cat: "vestiti", e: "🎒", nome: "Zaino Carpisa Roadmate go", desc: "Uno zaino da viaggio della linea Roadmate", dove: "da Carpisa", prezzo: 49.95 },   // carpisa.it
  { id: "a7-sneakers-geox-perth-bambino", cat: "vestiti", e: "👟", nome: "Scarpe Geox Perth bambino", desc: "Scarpe basse con strappo Geox per bambini", dove: "da Geox", prezzo: 54.9 },   // geox.com/it: Perth Bambino da 54,90 €
  { id: "a7-giacca-adidas-firebird", cat: "vestiti", e: "🧥", nome: "Giacca adidas Firebird", desc: "La giacca della tuta adidas con le tre strisce", dove: "da Foot Locker", prezzo: 74.99 },   // footlocker.it
  { id: "a7-trolley-rigido-carpisa-wander-go", cat: "vestiti", e: "🧳", nome: "Trolley rigido Carpisa Wander go", desc: "Un trolley rigido piccolo, taglia S", dove: "da Carpisa", prezzo: 99.95 },   // carpisa.it
  { id: "a7-nike-windrunner", cat: "vestiti", e: "🧥", nome: "Nike Windrunner", desc: "La giacca a vento Nike col disegno a V sul petto", dove: "da Foot Locker", prezzo: 99.99, cur: "Nike la produce dal 1978." },   // nike.com/it: Nike Windrunner giacca foderata uomo 99,99 € (la Storm-FIT ADV è 119,99)
  { id: "a7-adidas-stan-smith", cat: "vestiti", e: "👟", nome: "adidas Stan Smith", desc: "Le sneakers di pelle bianca col tallone colorato", dove: "da Foot Locker", prezzo: 109.99, cur: "Il nome è quello di un tennista americano." },   // footlocker.it
  { id: "a7-cintura-reversibile-emporio-armani", cat: "vestiti", e: "👔", nome: "Cintura reversibile Emporio Armani", desc: "Una cintura di pelle che si usa da due lati", dove: "da Emporio Armani", prezzo: 110 },   // armani.com/it-it
  { id: "a7-geox-spherica-plus", cat: "vestiti", e: "👞", nome: "Geox Spherica Plus", desc: "Sneakers da uomo Geox con la suola traspirante", dove: "da Geox", prezzo: 110, cur: "La suola che respira fu inventata nel 1992 da Mario Moretti Polegato." },   // geox.com/it-IT
  { id: "a7-adidas-samba-og", cat: "vestiti", e: "👟", nome: "adidas Samba OG", desc: "Le sneakers di pelle con la suola in gomma", dove: "da Foot Locker", prezzo: 119.99, cur: "Nata nel 1950 per giocare a calcio sui campi ghiacciati." },   // footlocker.it
  { id: "a7-felpa-nike-tech-fleece", cat: "vestiti", e: "🧥", nome: "Felpa Nike Tech Fleece con cappuccio", desc: "Felpa pullover col cappuccio in tessuto Tech Fleece", dove: "da Foot Locker", prezzo: 139.99 },   // nike.com/it: Tech pullover con cappuccio in fleece 139,99 € (la full-zip 149,99, la Windrunner 129,99)
  { id: "a7-jeans-diesel-d-strukt", cat: "vestiti", e: "👖", nome: "Jeans Diesel D-Strukt", desc: "Jeans slim a vita media del marchio italiano", dove: "da Diesel", prezzo: 150, cur: "Diesel è nata nel 1978." },   // it.diesel.com
  { id: "a7-asics-gel-nyc", cat: "vestiti", e: "👟", nome: "Asics GEL-NYC", desc: "Sneakers retrò Asics con la suola ammortizzata", dove: "da Foot Locker", prezzo: 149.99 },   // footlocker.it
  { id: "a7-longchamp-le-pliage-borsa-da-viaggio-l", cat: "vestiti", e: "👜", nome: "Longchamp Le Pliage, borsa da viaggio L", desc: "La borsa pieghevole francese, in tela riciclata", dove: "da Longchamp", prezzo: 155, cur: "«Pliage» in francese vuol dire «piegatura»: la borsa si ripiega." },   // longchamp.com/it
  { id: "a7-on-cloudtilt", cat: "vestiti", e: "👟", nome: "On Cloudtilt", desc: "Le sneakers svizzere On, modello Cloudtilt", dove: "da Foot Locker", prezzo: 169.99 },   // footlocker.it
  { id: "a7-borsa-liu-jo-lapuffy-media", cat: "vestiti", e: "👜", nome: "Borsa Liu Jo LaPuffy media", desc: "La borsa trapuntata media, in denim", dove: "da Liu Jo", prezzo: 169 },   // liujo.com/it
  { id: "a7-occhiali-da-sole-emporio-armani", cat: "vestiti", e: "🕶️", nome: "Occhiali da sole Emporio Armani", desc: "Occhiali da sole da uomo con montatura pilot", dove: "da Emporio Armani", prezzo: 175 },   // armani.com/it-it
  { id: "a7-nike-air-max-plus", cat: "vestiti", e: "👟", nome: "Nike Air Max Plus", desc: "Sneakers Nike con le strisce a onda sulla tomaia", dove: "sul sito Nike", prezzo: 189.99, cur: "In Italia tutti la chiamano «TN»." },   // nike.com/it
  { id: "a7-new-balance-9060", cat: "vestiti", e: "👟", nome: "New Balance 9060", desc: "Le sneakers New Balance dalla suola grossa", dove: "da Foot Locker", prezzo: 189.99 },   // footlocker.it
  { id: "a7-piumino-nike-windrunner-down", cat: "vestiti", e: "🧥", nome: "Piumino Nike Windrunner Down", desc: "Il piumino della linea Windrunner", dove: "da Foot Locker", prezzo: 229.99 },   // footlocker.it
  { id: "a7-orologio-emporio-armani-archetipo", cat: "vestiti", e: "⌚", nome: "Orologio Emporio Armani Archetipo", desc: "Un cronografo al quarzo di Emporio Armani", dove: "da Emporio Armani", prezzo: 259 },   // armani.com/it-it
  { id: "a7-camicia-in-denim-emporio-armani", cat: "vestiti", e: "👔", nome: "Camicia in denim Emporio Armani", desc: "Una camicia di jeans con taschino e cuciture a vista", dove: "da Emporio Armani", prezzo: 260 },   // armani.com/it-it
  { id: "a7-pinko-love-bag-one-piccola", cat: "vestiti", e: "👜", nome: "Pinko Love Bag One piccola", desc: "La borsa a tracolla in pelle di Pinko", dove: "da Pinko", prezzo: 265 },   // pinko.com/it-it
  { id: "a7-sneakers-in-canvas-emporio-armani", cat: "vestiti", e: "👟", nome: "Sneakers in canvas Emporio Armani", desc: "Sneakers in tela con il logo e gli inserti", dove: "da Emporio Armani", prezzo: 280 },   // armani.com/it-it
  { id: "a7-fede-in-oro-giallo-18-carati-3-2-mm", cat: "vestiti", e: "💍", nome: "Fede in oro giallo 18 carati, 3,2 mm", desc: "Una fede classica leggera in oro giallo", dove: "da Stroili", prezzo: 379 },   // stroilioro.com
  { id: "a7-pinko-love-bag-media-puff-maxi-quilt", cat: "vestiti", e: "👜", nome: "Pinko Love Bag media Puff Maxi Quilt", desc: "La Love Bag media a tracolla, trapuntata", dove: "da Pinko", prezzo: 385 },   // pinko.com/it-it
  { id: "a7-maglione-in-seta-e-cashmere-emporio-arma", cat: "vestiti", e: "🧶", nome: "Maglione in seta e cashmere Emporio Armani", desc: "Un maglione di seta e cashmere", dove: "da Emporio Armani", prezzo: 390 },   // armani.com/it-it
  { id: "a7-tissot-prx-40-mm-al-quarzo", cat: "vestiti", e: "⌚", nome: "Tissot PRX 40 mm al quarzo", desc: "L'orologio svizzero in acciaio, 40 mm, quadrante blu", dove: "da Tissot", prezzo: 395, cur: "Il PRX riprende un modello al quarzo del 1978." },   // tissotwatches.com/it-it
  { id: "a7-longchamp-le-pliage-xtra-zaino-m", cat: "vestiti", e: "🎒", nome: "Longchamp Le Pliage Xtra, zaino M", desc: "Lo zaino medio in pelle della linea Xtra", dove: "da Longchamp", prezzo: 550 },   // longchamp.com/it
  { id: "a7-emporio-armani-sea-explorer-automatico", cat: "vestiti", e: "⌚", nome: "Emporio Armani Sea Explorer automatico", desc: "Un orologio automatico della linea Sea Explorer", dove: "da Emporio Armani", prezzo: 569 },   // armani.com/it-it
  { id: "a7-valentino-rockstud-decollete-100-mm", cat: "vestiti", e: "👠", nome: "Valentino Rockstud, décolleté 100 mm", desc: "Le scarpe col tacco e le borchie a piramide", dove: "da Valentino", prezzo: 980, cur: "Le borchie hanno la forma di piccole piramidi." },   // valentino.com/it-it
  { id: "a7-caban-emporio-armani-in-lana-tweed", cat: "vestiti", e: "🧥", nome: "Caban Emporio Armani in lana pied-de-poule", desc: "Un caban in lana vergine a pied-de-poule, con il collo a coste", dove: "da Emporio Armani", prezzo: 1600 },   // armani.com, uomo/capispalla
  { id: "a7-cartier-tank-must-quarzo", cat: "vestiti", e: "⌚", nome: "Cartier Tank Must, quarzo", desc: "L'orologio rettangolare in acciaio, cassa grande", dove: "da Cartier", prezzo: 4400, cur: "Il Tank fu disegnato da Louis Cartier nel 1917." },   // cartier.com/it-it
  { id: "a7-cartier-love-bracciale-medio", cat: "vestiti", e: "💍", nome: "Cartier LOVE, bracciale medio", desc: "Il bracciale in oro giallo con le viti a vista", dove: "da Cartier", prezzo: 6850, cur: "Si chiude con un cacciavite, che viene dato insieme al bracciale.", wow: 1 },   // cartier.com/it-it
  { id: "a7-cartier-clash-bracciale-piccolo", cat: "vestiti", e: "💍", nome: "Cartier Clash, bracciale piccolo", desc: "Il bracciale flessibile in oro giallo, modello piccolo", dove: "da Cartier", prezzo: 8950, wow: 1 },   // cartier.com/en-it (CRB6081317)
  { id: "a7-tank-louis-cartier-oro-giallo", cat: "vestiti", e: "⌚", nome: "Tank Louis Cartier, oro giallo, modello piccolo", desc: "L'orologio in oro giallo col cinturino in pelle", dove: "da Cartier", prezzo: 12400, wow: 1 },   // cartier.com/it-it
  // ---------- 🧾 SERVIZI E BOLLETTE ----------
  { id: "a7-marca-da-bollo", cat: "servizi", e: "🏷️", nome: "Marca da bollo", desc: "Il bollo da incollare su domande e documenti", dove: "dal tabaccaio", prezzo: 16 },   // Agenzia delle Entrate
  { id: "a7-lettera-con-posta-ordinaria", cat: "servizi", e: "✉️", nome: "Lettera con posta ordinaria", desc: "Spedire una lettera in Italia, fino a 20 grammi", dove: "all'ufficio postale", prezzo: 1.3 },   // QuiFinanza (listino Poste)
  { id: "a7-raccomandata-ordinaria", cat: "servizi", e: "📮", nome: "Raccomandata ordinaria", desc: "Una lettera raccomandata spedita dallo sportello", dove: "all'ufficio postale", prezzo: 6 },   // QuiFinanza (listino Poste)
  { id: "a7-avviso-di-ricevimento", cat: "servizi", e: "📩", nome: "Avviso di ricevimento", desc: "La cartolina che dice che la raccomandata è arrivata", dove: "all'ufficio postale", prezzo: 1.05 },   // QuiFinanza (listino Poste)
  { id: "a7-libro-spedito-con-le-poste", cat: "servizi", e: "📖", nome: "Libro spedito con le Poste", desc: "Un libro fino a 2 chili, spedito come piego di libri", dove: "all'ufficio postale", prezzo: 1.45, cur: "Costa solo 15 centesimi più di una lettera normale." },   // QuiFinanza (listino Poste)
  { id: "a7-contrassegno-sul-pacco", cat: "servizi", e: "💶", nome: "Contrassegno sul pacco", desc: "Il supplemento per pagare il pacco alla consegna", dove: "all'ufficio postale", prezzo: 3.05 },   // QuiFinanza (listino Poste)
  { id: "a7-biglietto-bit-di-roma", cat: "servizi", e: "🚌", nome: "Biglietto BIT di Roma", desc: "Bus, tram e metro con un biglietto, per 100 minuti", dove: "a Roma", prezzo: 1.5 },   // atac.roma.it
  { id: "a7-biglietto-roma-24-ore", cat: "servizi", e: "🎟️", nome: "Biglietto Roma 24 ore", desc: "Bus, tram e metro quante volte vuoi, per un giorno", dove: "a Roma", prezzo: 8.5 },   // Telepass Moveo e guide: Roma 24H a 8,50 euro dal 1 luglio 2025 (prima 7)
  { id: "a7-abbonamento-annuale-atac", cat: "servizi", e: "🚋", nome: "Abbonamento annuale ATAC", desc: "L'abbonamento personale per tutto l'anno", dove: "a Roma", prezzo: 250, cur: "Fa meno di 21 euro al mese: il mensile ne costa 35." },   // atac.roma.it
  { id: "a7-tassa-rifiuti-a-cremona", cat: "servizi", e: "🗑️", nome: "Tassa rifiuti a Cremona", desc: "La TARI per un anno, famiglia di tre persone, 100 m²", dove: "a Cremona", prezzo: 196 },   // Cittadinanzattiva 2025
  { id: "a7-tassa-rifiuti-a-catania", cat: "servizi", e: "♻️", nome: "Tassa rifiuti a Catania", desc: "La TARI per un anno, famiglia di tre persone, 100 m²", dove: "a Catania", prezzo: 602, cur: "È la città più cara d'Italia: più del triplo di Cremona.", wow: 1 },   // Cittadinanzattiva 2025
  { id: "a7-acqua-di-casa-un-anno", cat: "servizi", e: "🚰", nome: "Acqua di casa, un anno", desc: "Il servizio idrico per tre persone (182 metri cubi)", dove: "a Milano", prezzo: 203, cur: "A Milano l'acqua costa meno che in ogni altra città italiana." },   // Cittadinanzattiva 2025
  { id: "a7-fibra-iliad-un-mese", cat: "servizi", e: "📶", nome: "Fibra Iliad, un mese", desc: "Il canone mensile di Iliadbox con la fibra", dove: "da Iliad", prezzo: 26.99 },   // Selectra, Comparasemplice
  { id: "a7-icloud-da-200-gb-un-mese", cat: "servizi", e: "☁️", nome: "iCloud+ da 200 GB, un mese", desc: "Lo spazio online di Apple per foto e file", dove: "online", prezzo: 2.99 },   // apple.com/it
  { id: "a7-il-730-fatto-al-caf", cat: "servizi", e: "🧾", nome: "Il 730 fatto al CAF", desc: "Compilare e inviare la dichiarazione dei redditi", dove: "al CAF", prezzo: 60, cur: "Se lo invii da solo, il 730 precompilato è gratis." },   // InvestireOggi, Centrofiscale
  { id: "a7-rinnovo-della-patente-b", cat: "servizi", e: "🆔", nome: "Rinnovo della patente B", desc: "Visita medica alla ASL e bollettini compresi", dove: "alla ASL", prezzo: 65, cur: "I bollettini fissi costano 26,20 euro: il resto è la visita." },   // Sicurauto, Segugio
  { id: "a7-libri-per-la-prima-superiore", cat: "servizi", e: "📚", nome: "Libri e dizionari per la prima superiore", desc: "Tutti i testi scolastici di un anno", dove: "in libreria", prezzo: 805, cur: "Un dizionario da solo costa dai 75 ai 133 euro.", wow: 1 },   // Codacons
  { id: "a7-ticket-del-pronto-soccorso", cat: "servizi", e: "🏥", nome: "Ticket del pronto soccorso", desc: "Il ticket per un codice bianco, senza ricovero", dove: "all'ospedale", prezzo: 25 },   // Money.it
  { id: "a7-ticket-massimo-di-una-ricetta", cat: "servizi", e: "🩺", nome: "Ticket massimo di una ricetta", desc: "Il tetto per visite ed esami col servizio sanitario", dove: "nel servizio sanitario", prezzo: 36.15, cur: "Anche se l'esame costa di più, non si paga oltre questa cifra." },   // Ministero della Salute
  { id: "a7-seduta-di-fisioterapia", cat: "servizi", e: "🦴", nome: "Seduta di fisioterapia", desc: "Una seduta dal fisioterapista privato", dove: "dal fisioterapista", prezzo: 45 },   // Money.it
  { id: "a7-apparecchio-fisso-per-i-denti", cat: "servizi", e: "😁", nome: "Apparecchio fisso per i denti", desc: "Il trattamento intero con attacchi in metallo", dove: "dall'ortodontista", prezzo: 2750, cur: "Quello trasparente costa da 3.000 a 7.000 euro." },   // Money.it
  { id: "a7-sterilizzare-una-gatta", cat: "servizi", e: "🐱", nome: "Sterilizzare una gatta", desc: "L'operazione dal veterinario privato", dove: "dal veterinario", prezzo: 180 },   // Money.it
  { id: "a7-vaccino-per-il-cane", cat: "servizi", e: "🐕", nome: "Vaccino per il cane", desc: "Una vaccinazione dal veterinario", dove: "dal veterinario", prezzo: 60, cur: "In Italia nessun vaccino è obbligatorio: lo è solo il microchip." },   // My-personaltrainer.it
  { id: "a7-visita-dal-dermatologo", cat: "servizi", e: "🧴", nome: "Visita dal dermatologo", desc: "Una visita specialistica privata", dove: "in uno studio privato", prezzo: 110 },   // Businessonline analisi 2025: media dermatologo circa 110 euro (45-350)
  { id: "a7-visita-dall-oculista", cat: "servizi", e: "👁️", nome: "Visita dall'oculista", desc: "Controllo della vista con visita specialistica", dove: "in uno studio privato", prezzo: 105 },   // Businessonline analisi 2025: media oculista circa 108 euro; Cup24 100-130
  { id: "a7-visita-dal-pediatra", cat: "servizi", e: "🧒", nome: "Visita dal pediatra", desc: "Una visita privata per bambini", dove: "in uno studio privato", prezzo: 90 },   // prezzo medio tipico
  { id: "a7-certificato-per-fare-sport", cat: "servizi", e: "🏃", nome: "Certificato per fare sport", desc: "Visita non agonistica per palestra o scuola", dove: "dal medico dello sport", prezzo: 40 },   // prezzo medio tipico
  { id: "a7-batteria-nuova-per-iphone-17", cat: "servizi", e: "🔋", nome: "Batteria nuova per iPhone 17", desc: "Sostituzione dell'assistenza Apple, fuori garanzia", dove: "da Apple", prezzo: 109 },   // iPhoneItalia
  { id: "a7-schermo-rotto-di-iphone-17", cat: "servizi", e: "📱", nome: "Schermo rotto di iPhone 17", desc: "Cambio del vetro anteriore, fuori garanzia", dove: "da Apple", prezzo: 405, cur: "Con AppleCare+ si paga una franchigia di soli 29 euro.", wow: 1 },   // iPhoneItalia, Tuttotech
  { id: "a7-elettricista-a-casa", cat: "servizi", e: "🔌", nome: "Elettricista a casa", desc: "Un'ora di lavoro, chiamata compresa", dove: "a casa tua", prezzo: 50 },   // prezzo medio tipico
  { id: "a7-giardiniere-un-ora", cat: "servizi", e: "🌿", nome: "Giardiniere, un'ora", desc: "Siepi e prato sistemati da un giardiniere", dove: "a casa tua", prezzo: 25 },   // prezzo medio tipico
  { id: "a7-un-ora-di-pulizie-a-casa", cat: "servizi", e: "🧹", nome: "Un'ora di pulizie a casa", desc: "Una collaboratrice domestica che pulisce casa", dove: "a casa tua", prezzo: 10 },   // Cronoshare: colf 7-9 euro all'ora (6-10); minimo contrattuale 2026 circa 7
  { id: "a7-taglio-di-capelli-per-bambini", cat: "servizi", e: "✂️", nome: "Taglio di capelli per bambini", desc: "Il taglio dal parrucchiere per i più piccoli", dove: "dal parrucchiere", prezzo: 14 },   // prezzo medio tipico
  { id: "a7-barba-dal-barbiere", cat: "servizi", e: "🧔", nome: "Barba dal barbiere", desc: "Rifinitura della barba con rasoio e panno caldo", dove: "dal barbiere", prezzo: 12 },   // prezzo medio tipico
  { id: "a7-pedicure-estetico", cat: "servizi", e: "🦶", nome: "Pedicure estetico", desc: "I piedi curati e smaltati dall'estetista", dove: "dall'estetista", prezzo: 30 },   // prezzo medio tipico
  { id: "a7-massaggio-rilassante-un-ora", cat: "servizi", e: "💆", nome: "Massaggio rilassante, un'ora", desc: "Un'ora di massaggio in un centro benessere", dove: "in un centro benessere", prezzo: 60 },   // prezzo medio tipico
  { id: "a7-lezione-di-chitarra", cat: "servizi", e: "🎸", nome: "Lezione di chitarra", desc: "Un'ora con l'insegnante di chitarra", dove: "in una scuola di musica", prezzo: 25 },   // prezzo medio tipico
  { id: "a7-lezione-di-yoga", cat: "servizi", e: "🧘", nome: "Lezione di yoga", desc: "Una lezione singola in uno studio", dove: "in uno studio di yoga", prezzo: 15 },   // prezzo medio tipico
  { id: "a7-suole-nuove-alle-scarpe", cat: "servizi", e: "👞", nome: "Suole nuove alle scarpe", desc: "Risuolatura completa di un paio di scarpe", dove: "dal calzolaio", prezzo: 40 },   // prezzo medio tipico
  { id: "a7-pulizia-del-viso", cat: "servizi", e: "🧖", nome: "Pulizia del viso", desc: "Trattamento completo per il viso", dove: "dall'estetista", prezzo: 55 },   // prezzo medio tipico
  { id: "a7-lavaggio-a-secco-di-un-abito", cat: "servizi", e: "🧥", nome: "Lavaggio a secco di un abito", desc: "Giacca e pantaloni lavati in lavanderia", dove: "in lavanderia", prezzo: 14 },   // Altroconsumo 2022: completo giacca e pantalone circa 10,60 euro di media (Firenze 13,55), più i rincari
  { id: "a7-personal-trainer-un-ora", cat: "servizi", e: "🏋️", nome: "Personal trainer, un'ora", desc: "Un'ora di allenamento seguito in palestra", dove: "in palestra", prezzo: 45 },   // prezzo medio tipico
  // ---------- 🎟️ SPORT, SVAGO E SPETTACOLI ----------
  { id: "a7-popcorn-medi-al-cinema", cat: "svago", e: "🍿", nome: "Popcorn medi al cinema", desc: "Un secchiello medio di popcorn salati", dove: "al cinema", prezzo: 6.5 },   // stima (prezzi medi dei multisala)
  { id: "a7-biglietto-del-cinema-in-imax", cat: "svago", e: "🎬", nome: "Biglietto del cinema in IMAX", desc: "Un film nella sala con lo schermo gigante", dove: "in un multisala", prezzo: 12.5 },   // stima (prezzi medi dei multisala)
  { id: "a7-biglietto-in-curva-serie-b", cat: "svago", e: "⚽", nome: "Biglietto in curva, Serie B", desc: "Una partita di Serie B, posto in curva", dove: "allo stadio", prezzo: 15 },   // stima (prezzi medi dei club)
  { id: "a7-spettacolo-comico-a-teatro", cat: "svago", e: "🎭", nome: "Spettacolo comico a teatro", desc: "Un posto in platea per una serata di cabaret", dove: "a teatro", prezzo: 30 },   // stima (prezzi medi TicketOne)
  { id: "a7-musical-in-poltronissima", cat: "svago", e: "🎤", nome: "Musical in poltronissima", desc: "Un grande musical, posto nelle prime file", dove: "in un teatro di Milano o Roma", prezzo: 75 },   // stima (prezzi medi TicketOne)
  { id: "a7-parco-natura-viva-percorso-a-piedi", cat: "svago", e: "🦒", nome: "Parco Natura Viva, percorso a piedi", desc: "Lo zoo-safari, ingresso adulto alle casse", dove: "a Bussolengo, vicino a Verona", prezzo: 25, cur: "Si può visitare anche in auto, con il percorso safari." },   // 1sticket.com (listino alle casse)
  { id: "a7-cinecitta-world", cat: "svago", e: "🎢", nome: "Cinecittà World", desc: "Il parco a tema cinema, biglietto adulto intero", dove: "a Castel Romano, vicino a Roma", prezzo: 39 },   // 1sticket.com (prezzo intero)
  { id: "a7-bioparco-di-roma", cat: "svago", e: "🦁", nome: "Bioparco di Roma", desc: "Lo zoo dentro Villa Borghese, ingresso adulto", dove: "a Roma", prezzo: 19, cur: "Il giardino zoologico di Roma aprì nel 1911." },   // bioparco.it/biglietti
  { id: "a7-ingresso-in-piscina", cat: "svago", e: "🏊", nome: "Ingresso in piscina", desc: "Un ingresso a nuoto libero in una piscina comunale", dove: "in piscina", prezzo: 7 },   // stima (prezzi medi delle piscine)
  { id: "a7-una-partita-a-bowling", cat: "svago", e: "🎳", nome: "Una partita a bowling", desc: "Una partita a persona, scarpe incluse", dove: "in una sala bowling", prezzo: 6.5 },   // stima (prezzi medi delle sale)
  { id: "a7-giro-in-go-kart", cat: "svago", e: "🏁", nome: "Giro in go-kart", desc: "Dieci minuti di gara in pista", dove: "in una pista di kart", prezzo: 15 },   // stima (prezzi medi delle piste)
  { id: "a7-parco-avventura-percorso-adulti", cat: "svago", e: "🌲", nome: "Parco avventura, percorso adulti", desc: "Ponti tibetani e carrucole tra gli alberi", dove: "in un parco avventura", prezzo: 25 },   // stima (prezzi medi dei parchi)
  { id: "a7-lezione-di-surf-di-gruppo", cat: "svago", e: "🏄", nome: "Lezione di surf di gruppo", desc: "Due ore con istruttore, tavola e muta", dove: "in una scuola di surf sul mare", prezzo: 50 },   // stima (prezzi medi delle scuole)
  { id: "a7-lezione-di-equitazione", cat: "svago", e: "🐴", nome: "Lezione di equitazione", desc: "Un'ora a cavallo con l'istruttore", dove: "in un maneggio", prezzo: 30 },   // stima (prezzi medi dei maneggi)
  { id: "a7-campo-da-tennis-per-un-ora", cat: "svago", e: "🎾", nome: "Campo da tennis per un'ora", desc: "Un campo in terra rossa per due giocatori", dove: "in un circolo di tennis", prezzo: 20 },   // stima (prezzi medi dei circoli)
  { id: "a7-ingresso-giornaliero-alle-terme", cat: "svago", e: "♨️", nome: "Ingresso giornaliero alle terme", desc: "Piscine termali e relax per una giornata", dove: "in un centro termale", prezzo: 45 },   // stima (prezzi medi delle terme)
  { id: "a7-pista-di-pattinaggio-con-noleggio", cat: "svago", e: "⛸️", nome: "Pista di pattinaggio con noleggio", desc: "Ingresso e pattini per un turno sul ghiaccio", dove: "in una pista di pattinaggio", prezzo: 12 },   // stima (prezzi medi delle piste)
  { id: "a7-battesimo-del-mare-in-immersione", cat: "svago", e: "🤿", nome: "Battesimo del mare in immersione", desc: "La prima immersione con l'istruttore", dove: "in un centro sub", prezzo: 80 },   // stima (prezzi medi dei centri sub)
  { id: "a7-pallone-da-calcio-adidas", cat: "svago", e: "⚽", nome: "Pallone da calcio Adidas", desc: "Misura 5, quello per le partite tra amici", dove: "in un negozio di sport", prezzo: 25 },   // stima (prezzi medi di mercato)
  { id: "a7-pallone-da-basket-spalding", cat: "svago", e: "🏀", nome: "Pallone da basket Spalding", desc: "Misura 7, per giocare anche all'aperto", dove: "in un negozio di sport", prezzo: 30, cur: "Il basket fu inventato da James Naismith nel 1891." },   // stima (prezzi medi di mercato)
  { id: "a7-racchetta-da-padel-di-fascia-media", cat: "svago", e: "🥎", nome: "Racchetta da padel di fascia media", desc: "Per giocare in coppia sul campo di vetro", dove: "in un negozio di sport", prezzo: 150 },   // stima (prezzi medi di mercato)
  { id: "a7-scarpe-da-corsa-nike-pegasus", cat: "svago", e: "👟", nome: "Scarpe da corsa Nike Pegasus 42", desc: "Un paio di scarpe da running, modello uomo o donna", dove: "in un negozio di sport", prezzo: 140, wow: 1 },   // nike.com/it
  { id: "a7-tappetino-da-yoga", cat: "svago", e: "🧘", nome: "Tappetino da yoga", desc: "Antiscivolo, per yoga e ginnastica a casa", dove: "in un negozio di sport", prezzo: 15 },   // stima (prezzi medi di mercato)
  { id: "a7-mountain-bike-di-base", cat: "svago", e: "🚵", nome: "Mountain bike di base", desc: "Una mountain bike con telaio in alluminio", dove: "da Decathlon", prezzo: 350 },   // stima (prezzi medi Decathlon)
  { id: "a7-tavola-da-sup-gonfiabile", cat: "svago", e: "🛶", nome: "Tavola da SUP gonfiabile", desc: "Con pagaia, pompa e zaino", dove: "in un negozio di sport", prezzo: 250 },   // stima (prezzi medi Decathlon)
  { id: "a7-zaino-da-trekking-50-litri", cat: "svago", e: "🎒", nome: "Zaino da trekking, 50 litri", desc: "Per una settimana di cammino in montagna", dove: "in un negozio di sport", prezzo: 100 },   // stima (prezzi medi di mercato)
  { id: "a7-tavolo-da-ping-pong-da-interno", cat: "svago", e: "🏓", nome: "Tavolo da ping pong da interno", desc: "Pieghevole, con ruote e rete", dove: "da Decathlon", prezzo: 300 },   // stima (prezzi medi Decathlon)
  { id: "a7-i-coloni-di-catan", cat: "svago", e: "🎲", nome: "I Coloni di Catan", desc: "Il gioco da tavolo di commercio e strade", dove: "in un negozio di giochi", prezzo: 39.99, cur: "Lo inventò Klaus Teuber, in Germania, nel 1995." },   // Amazon.it (listino)
  { id: "a7-risiko-edizione-classica", cat: "svago", e: "🌍", nome: "Risiko! edizione classica", desc: "Il gioco di strategia per conquistare il mondo", dove: "in un negozio di giochi", prezzo: 34.9, cur: "Il gioco originale fu ideato nel 1957 dal regista francese Albert Lamorisse." },   // stima (Amazon.it / eBay)
  { id: "a7-monopoly-edizione-classica", cat: "svago", e: "🎩", nome: "Monopoly edizione classica", desc: "Il gioco di compravendita di strade e case", dove: "in un negozio di giochi", prezzo: 29.99, cur: "Nacque nel 1904 come «The Landlord's Game», per criticare i monopoli." },   // stima (listino Hasbro)
  { id: "a7-mazzo-di-carte-uno", cat: "svago", e: "🃏", nome: "Mazzo di carte Uno", desc: "Il gioco di carte colorate per tutta la famiglia", dove: "al supermercato", prezzo: 7.99, cur: "Lo inventò nel 1971 Merle Robbins, un barbiere dell'Ohio." },   // stima (listino Mattel)
  { id: "a7-cubo-di-rubik-3x3", cat: "svago", e: "🧩", nome: "Cubo di Rubik 3x3", desc: "Il rompicapo originale a sei colori", dove: "in un negozio di giochi", prezzo: 12.99, cur: "Lo inventò nel 1974 l'ungherese Ernő Rubik." },   // stima (prezzi medi di mercato)
  { id: "a7-flauto-dolce-yamaha", cat: "svago", e: "🎵", nome: "Flauto dolce Yamaha", desc: "Quello da scuola, in plastica", dove: "in un negozio di musica", prezzo: 9.9 },   // stima (listino Yamaha)
  { id: "a7-armonica-hohner-special-20", cat: "svago", e: "🎼", nome: "Armonica Hohner Special 20", desc: "Armonica a bocca per blues e folk", dove: "in un negozio di musica", prezzo: 36 },   // thomann.it (33 €)
  { id: "a7-ukulele-soprano", cat: "svago", e: "🪕", nome: "Ukulele soprano", desc: "Quattro corde, il più piccolo della famiglia", dove: "in un negozio di musica", prezzo: 50 },   // stima (prezzi medi di mercato)
  { id: "a7-tastiera-casio-a-61-tasti", cat: "svago", e: "🎹", nome: "Tastiera Casio a 61 tasti", desc: "Per iniziare a suonare, con le casse incluse", dove: "in un negozio di musica", prezzo: 120 },   // stima (listino Casio)
  { id: "a7-chitarra-acustica-yamaha-f310", cat: "svago", e: "🎸", nome: "Chitarra acustica Yamaha F310", desc: "La chitarra per chi comincia, corde in acciaio", dove: "in un negozio di musica", prezzo: 135 },   // stima (listino Yamaha)
  { id: "a7-pianoforte-digitale-yamaha-p-145", cat: "svago", e: "🎹", nome: "Pianoforte digitale Yamaha P-145", desc: "88 tasti pesati, per studiare a casa", dove: "in un negozio di musica", prezzo: 399, cur: "Il pianoforte fu inventato a Firenze da Bartolomeo Cristofori, intorno al 1700." },   // thomann.it, Yamaha P-145 B BT: 399 euro (altri negozi 390-460)
  { id: "a7-pianoforte-digitale-roland-fp-30x", cat: "svago", e: "🎹", nome: "Pianoforte digitale Roland FP-30X", desc: "88 tasti, con casse integrate", dove: "in un negozio di musica", prezzo: 750 },   // stima (listino Roland)
  { id: "a7-sassofono-contralto-yamaha", cat: "svago", e: "🎷", nome: "Sassofono contralto Yamaha", desc: "Il sax da studio in ottone laccato", dove: "in un negozio di musica", prezzo: 990, cur: "Lo brevettò il belga Adolphe Sax nel 1846.", wow: 1 },   // thomann.it, Yamaha YAS-280 solo sax: 990 euro (set con accessori 1.022)
  { id: "a7-cajon", cat: "svago", e: "🥁", nome: "Cajón", desc: "La cassa di legno su cui si suona da seduti", dove: "in un negozio di musica", prezzo: 100 },   // stima (prezzi medi di mercato)
  { id: "a7-nintendo-switch-online-12-mesi", cat: "svago", e: "🎮", nome: "Nintendo Switch Online, 12 mesi", desc: "L'abbonamento individuale per giocare in rete", dove: "sul Nintendo eShop", prezzo: 19.99 },   // stima (listino Nintendo)
  { id: "a7-minecraft-per-nintendo-switch", cat: "svago", e: "⛏️", nome: "Minecraft per Nintendo Switch", desc: "Il gioco dei cubi, in versione scaricabile", dove: "sul Nintendo eShop", prezzo: 29.99, cur: "È il videogioco più venduto di sempre." },   // stima (listino Nintendo)
  { id: "a7-violino-da-studio", cat: "svago", e: "🎻", nome: "Violino da studio", desc: "Violino intero con archetto e custodia", dove: "in un negozio di musica", prezzo: 150 },   // stima (prezzi medi di mercato)
  { id: "a7-chitarra-elettrica-fender-stratocaster-p", cat: "svago", e: "🎸", nome: "Chitarra elettrica Fender Stratocaster Player II", desc: "La chitarra elettrica Fender, modello Player II", dove: "in un negozio di musica", prezzo: 799, cur: "Fender presentò la Stratocaster nel 1954." },   // thomann.it, Player II Strat: 788 euro; Woodbrass 819
  { id: "a7-lezione-di-tennis-privata", cat: "svago", e: "🎾", nome: "Lezione di tennis privata", desc: "Un'ora con il maestro, campo escluso", dove: "in un circolo di tennis", prezzo: 35 },   // stima (prezzi medi dei circoli)
  // ---------- 🇮🇹 CURIOSITÀ ITALIANE ----------
  { id: "a7-zeppola-di-san-giuseppe", cat: "curiosita", e: "🍩", nome: "Zeppola di San Giuseppe", desc: "Ciambella con crema e amarena, fritta o al forno", dove: "in un bar di Napoli", prezzo: 3, cur: "Si mangia il 19 marzo, festa di San Giuseppe e del papà." },   // prezzo medio tipico
  { id: "a7-pani-ca-meusa", cat: "curiosita", e: "🥙", nome: "Pani ca' meusa", desc: "Panino con la milza di vitello, tipico di Palermo", dove: "alla friggitoria di Palermo", prezzo: 3.5 },   // prezzo medio tipico
  { id: "a7-pasta-di-gragnano-igp-500-g", cat: "curiosita", e: "🍝", nome: "Pasta di Gragnano IGP, 500 g", desc: "Pasta secca di semola, trafilata al bronzo", dove: "al supermercato", prezzo: 2.79, cur: "Gragnano, vicino a Napoli, è chiamata la città della pasta." },   // Gambero Rosso 2025: Esselunga Top Gragnano IGP 500 g a 2,69; Conad e Coop 1,80-2,00
  { id: "a7-pomodori-san-marzano-dop-400-g", cat: "curiosita", e: "🍅", nome: "Pomodori San Marzano DOP, 400 g", desc: "Pelati in scatola coltivati ai piedi del Vesuvio", dove: "al supermercato", prezzo: 2.49 },   // Strianese San Marzano DOP 400 g a 2,31-2,69 (Kaufland); Scattidigusto 2023 1,50-2,00
  { id: "a7-cioccolato-di-modica-igp-100-g", cat: "curiosita", e: "🍫", nome: "Cioccolato di Modica IGP, 100 g", desc: "Tavoletta siciliana lavorata a freddo", dove: "in una bottega di Modica", prezzo: 4.2, cur: "Con la lavorazione a freddo i granelli di zucchero restano croccanti." },   // Antica Dolceria Rizza IGP 100 g a 4,20 euro (Gocce di Sicilia); 3,50 su Sicilus
  { id: "a7-cantucci-di-prato-igp-250-g", cat: "curiosita", e: "🍪", nome: "Cantucci di Prato IGP, 250 g", desc: "Biscotti alle mandorle da inzuppare nel Vin Santo", dove: "in un forno di Prato", prezzo: 6.5 },   // Mattei 250 g a 6,90 euro da Pegna, Firenze (blog); 9,90 in Germania
  { id: "a7-caldarroste-un-cartoccio", cat: "curiosita", e: "🌰", nome: "Caldarroste, un cartoccio", desc: "Castagne arrostite e vendute calde per strada", dove: "in una piazza d'autunno", prezzo: 5 },   // prezzo medio tipico
  { id: "a7-pane-di-altamura-dop-1-kg", cat: "curiosita", e: "🍞", nome: "Pane di Altamura DOP, 1 kg", desc: "Grossa pagnotta di semola, cotta nel forno a legna", dove: "in un forno di Altamura", prezzo: 5, cur: "Nel 2003 è stato il primo prodotto da forno europeo con la DOP." },   // prezzo medio tipico
  { id: "a7-mazzo-di-carte-napoletane", cat: "curiosita", e: "🃏", nome: "Mazzo di carte napoletane", desc: "Quaranta carte per scopa, briscola e tressette", dove: "dal tabaccaio", prezzo: 5.5, cur: "I quattro semi sono denari, coppe, spade e bastoni." },   // prezzo medio tipico
  { id: "a7-nduja-di-spilinga-200-g", cat: "curiosita", e: "🌶️", nome: "'Nduja di Spilinga, 200 g", desc: "Salume calabrese piccante e spalmabile", dove: "in una salumeria calabrese", prezzo: 6.5, cur: "Si spalma sul pane come una crema." },   // prezzo medio tipico
  { id: "a7-cocomero-intero-8-kg", cat: "curiosita", e: "🍉", nome: "Cocomero intero, 8 kg", desc: "L'anguria da Ferragosto, venduta al banco", dove: "al banco del cocomero", prezzo: 6.5, cur: "È fatto quasi tutto d'acqua." },   // prezzo medio tipico
  { id: "a7-lenticchie-di-castelluccio-igp-500-g", cat: "curiosita", e: "🌾", nome: "Lenticchie di Castelluccio IGP, 500 g", desc: "Lenticchie piccole dell'altopiano dei Monti Sibillini", dove: "in un negozio di prodotti tipici", prezzo: 8.5, cur: "Ogni anno l'altopiano fiorisce di mille colori." },   // stima: lenticchie IGP di solito 15-20 €/kg al dettaglio
  { id: "a7-supplemento-musica", cat: "curiosita", e: "🎶", nome: "Supplemento musica", desc: "L'extra per la musica dal vivo ai tavolini", dove: "Caffè Florian, Venezia", prezzo: 7, cur: "Un toast, un croissant, due spritz e la musica: 72 euro in tutto." },   // Il Fatto Alimentare (set. 2026)
  { id: "a7-stella-di-natale-in-vaso", cat: "curiosita", e: "🌺", nome: "Stella di Natale in vaso", desc: "La pianta dalle foglie rosse che si regala a Natale", dove: "dal fiorista", prezzo: 7.9, cur: "Arriva dal Messico, dove cresce spontanea." },   // prezzo medio tipico
  { id: "a7-ricciarelli-di-siena-igp-250-g", cat: "curiosita", e: "🍬", nome: "Ricciarelli di Siena IGP, 250 g", desc: "Dolcetti morbidi di mandorle, tipici di Siena", dove: "in una pasticceria di Siena", prezzo: 9.9 },   // prezzo medio tipico
  { id: "a7-giardino-di-boboli", cat: "curiosita", e: "🌳", nome: "Giardino di Boboli", desc: "Il biglietto per il giardino dietro Palazzo Pitti", dove: "a Firenze", prezzo: 10, cur: "Nel giardino c'è un vero obelisco egizio, dei tempi di Ramses II" },   // uffizi.it
  { id: "a7-panforte-di-siena-450-g", cat: "curiosita", e: "🍰", nome: "Panforte di Siena, 450 g", desc: "Dolce denso di frutta candita, mandorle e spezie", dove: "in una pasticceria di Siena", prezzo: 11.9 },   // prezzo medio tipico
  { id: "a7-zafferano-dell-aquila-dop-1-g", cat: "curiosita", e: "🌸", nome: "Zafferano dell'Aquila DOP, 1 g", desc: "I pistilli di Navelli, la spezia più cara d'Italia", dove: "da un produttore di Navelli", prezzo: 14.5, cur: "I pistilli si raccolgono a mano, fiore per fiore.", wow: 1 },   // La Sicilia (zafferano di Navelli)
  { id: "a7-toast-al-caffe-florian", cat: "curiosita", e: "🥪", nome: "Toast al Caffè Florian", desc: "Un toast al tavolo in Piazza San Marco", dove: "Caffè Florian, Venezia", prezzo: 15, cur: "Un croissant con pomodoro e mozzarella costa 16 euro." },   // Il Fatto Alimentare (set. 2026)
  { id: "a7-palazzo-pitti", cat: "curiosita", e: "🏰", nome: "Palazzo Pitti", desc: "Il biglietto per la grande reggia dei Medici", dove: "a Firenze", prezzo: 16, cur: "Lo comprò a metà del Cinquecento Eleonora di Toledo, moglie di Cosimo I de' Medici." },   // cultura.gov.it: intero 16 euro allo sportello, 19 con prenotazione
  { id: "a7-caffettiera-napoletana-3-tazze", cat: "curiosita", e: "☕", nome: "Caffettiera napoletana, 3 tazze", desc: "La cuccuma che si capovolge per fare il caffè", dove: "in un negozio di casalinghi", prezzo: 19.9, cur: "Dopo il bollore si capovolge e il caffè scende da solo." },   // prezzo medio tipico
  { id: "a7-gallerie-dell-accademia", cat: "curiosita", e: "🖼️", nome: "Gallerie dell'Accademia", desc: "Il museo della pittura veneziana, biglietto intero", dove: "a Venezia", prezzo: 20 },   // gallerieaccademia.it
  { id: "a7-pastore-del-presepe-napoletano", cat: "curiosita", e: "🐑", nome: "Pastore del presepe napoletano", desc: "Statuina artigianale per il presepe, alta circa 12 cm", dove: "a San Gregorio Armeno, Napoli", prezzo: 20, cur: "In via San Gregorio Armeno si vendono anche statuine di calciatori." },   // prezzo medio tipico
  { id: "a7-bottarga-di-muggine-100-g", cat: "curiosita", e: "🐟", nome: "Bottarga di muggine, 100 g", desc: "Le uova di muggine salate e stagionate, dalla Sardegna", dove: "in un negozio di prodotti sardi", prezzo: 26, cur: "Si grattugia sulla pasta come il formaggio." },   // prezzo medio tipico
  { id: "a7-maschera-veneziana-di-cartapesta", cat: "curiosita", e: "🎭", nome: "Maschera veneziana di cartapesta", desc: "Una maschera di Carnevale dipinta a mano", dove: "in una bottega di Venezia", prezzo: 35 },   // prezzo medio tipico
  { id: "a7-uffizi-con-il-corridoio-vasariano", cat: "curiosita", e: "🎨", nome: "Uffizi con il Corridoio Vasariano", desc: "Il biglietto che include il percorso sopra Ponte Vecchio", dove: "a Firenze", prezzo: 43, cur: "Il corridoio collega Palazzo Vecchio a Palazzo Pitti." },   // uffizi.it
  { id: "a7-lardo-di-colonnata-igp-1-kg", cat: "curiosita", e: "🥓", nome: "Lardo di Colonnata IGP, 1 kg", desc: "Lardo stagionato nelle conche di marmo di Carrara", dove: "in una salumeria toscana", prezzo: 48, cur: "Matura per mesi in vasche di marmo con erbe e spezie." },   // nessuna scheda trovata; stima da negozi online e di Colonnata (circa 40-55 euro al chilo)
  { id: "a7-colazione-al-caffe-florian", cat: "curiosita", e: "🥐", nome: "Colazione al Caffè Florian", desc: "La colazione completa del menu ufficiale", dove: "Caffè Florian, Venezia", prezzo: 60, cur: "Una bottiglia d'acqua minerale costa 11 euro.", wow: 1 },   // Il Fatto Alimentare (set. 2026)
  { id: "a7-piatto-di-ceramica-di-deruta", cat: "curiosita", e: "🍽️", nome: "Piatto di ceramica di Deruta", desc: "Piatto decorato a mano in maiolica dell'Umbria", dove: "a Deruta", prezzo: 80, cur: "A Deruta la ceramica si fa fin dal Medioevo." },   // prezzo medio tipico
  { id: "a7-corso-di-pasta-fresca-a-bologna", cat: "curiosita", e: "🍳", nome: "Corso di pasta fresca a Bologna", desc: "Una lezione per tirare la sfoglia e fare i tortellini", dove: "a Bologna", prezzo: 90 },   // prezzo medio tipico
  { id: "a7-una-notte-in-un-trullo", cat: "curiosita", e: "🏡", nome: "Una notte in un trullo", desc: "Una camera per due in un trullo di Alberobello", dove: "ad Alberobello", prezzo: 140, cur: "I trulli di Alberobello sono Patrimonio UNESCO dal 1996." },   // prezzo medio tipico
  { id: "a7-sassicaia-75-cl", cat: "curiosita", e: "🍷", nome: "Sassicaia, 75 cl", desc: "Rosso di Bolgheri, annata recente", dove: "in enoteca", prezzo: 340, cur: "La prima annata in commercio è del 1968.", wow: 1 },   // Trovaprezzi (annate 2022-2023)
  { id: "a7-una-forma-intera-di-grana-padano", cat: "curiosita", e: "🧀", nome: "Una forma intera di Grana Padano", desc: "La ruota intera stagionata, circa 38 chili", dove: "in caseificio", prezzo: 500, cur: "Ogni forma pesa dai 24 ai 40 chili." },   // Bollettino formaggi Mantova 27/08/2026: 14 mesi 11,05-11,25 euro al chilo all'ingrosso, più IVA 4% e margine di vendita diretta (12-14 al chilo)
  { id: "a7-penna-stilografica-aurora-optima", cat: "curiosita", e: "🖋️", nome: "Penna stilografica Aurora Optima", desc: "Stilografica in resina, fatta a Torino", dove: "nel negozio Aurora", prezzo: 580, cur: "Aurora è nata a Torino nel 1919." },   // aurorapen.it
  { id: "a7-cucciolo-di-lagotto-romagnolo", cat: "curiosita", e: "🐶", nome: "Cucciolo di Lagotto Romagnolo", desc: "Il cane da tartufo italiano, con pedigree", dove: "da un allevatore", prezzo: 1500, cur: "È il cane da tartufo per eccellenza, grazie al suo fiuto." },   // prezzo medio tipico
  { id: "a7-vespa-50-special-d-epoca", cat: "curiosita", e: "🛵", nome: "Vespa 50 Special d'epoca", desc: "Il motorino degli anni '70, restaurato", dove: "da un restauratore", prezzo: 4000, cur: "La Vespa è nata a Pontedera nel 1946." },   // annunci moto.it e Subito 2026: restaurate da 3.290 a 5.500, tipiche 3.300-4.000
  { id: "a7-una-gondola-nuova", cat: "curiosita", e: "🚣", nome: "Una gondola nuova", desc: "La barca nera di Venezia, costruita in uno squero", dove: "in uno squero di Venezia", prezzo: 45000, cur: "È fatta con circa 280 pezzi di 8 tipi di legno.", wow: 1 }   // stima tipica degli squeri
);

/* =========================================================
   «Il Prezzo è Giusto!» — LE FOTO VERE dei prodotti e dei pezzi delle vetrine (da Wikimedia Commons, foto libere).
   id del prodotto (o "idVetrina#n" per il pezzo n di una vetrina) → "percorso su Commons|larghezza dell'originale".
   Il gioco le chiede a upload.wikimedia.org nelle misure standard (330 e 500 px): vedi urlFoto in js/games/prezzo-scena.js.
   Scelte il 22-23 ott 2026: per ogni prodotto fino a 6 foto candidate (pagine di Wikipedia e ricerca su Commons), scelta
   a occhio e ricontrollata. Regola: la foto mostra l'oggetto com'è, senza il prezzo scritto. Chi non ha la foto resta con l'emoji.
   Le foto mandate dal proprietario stanno in carte/prezzo/<id>.jpg e qui si scrivono "loc:carte/prezzo/<id>.jpg".
   ========================================================= */
window.SG_PREZZO_FOTO = {
  "a1-nutella-750": "9/9b/Nutella_ak.jpg|1514",   // Nutella, 750 g
  "a1-spaghetti-barilla": "9/92/Spaghettoni.jpg|2304",   // Spaghetti Barilla n.5, 500 g
  "a1-latte-fresco": "0/01/Milk-bottle.jpg|528",   // Latte fresco intero, 1 litro (22 nov 2026, ripasso: latte fresco: una bottiglia di ceramica d'epoca, non il latte di oggi in bottiglia; prima Plastic_bottle_of_milk.jpg)
  "a1-uova-6": "b/b1/Carton_of_eggs.jpg|1200",   // Sei uova grandi
  "a1-olio-evo": "f/f1/Bottle_of_Extra_Virgin_Olive_Oil.jpg|526",   // Olio extravergine, 1 litro
  "a1-passata-mutti": "9/94/Tomato_passata.jpg|930",   // Passata di pomodoro, 700 g
  "a1-mozzarella-bufala": "1/1f/Mozzarella_di_Bufala_Campana_(2010)_-_by_RaBoe.jpg|1111",   // Mozzarella di bufala, 250 g
  "a1-coca-cola": "a/aa/CocaColaBottle_background_free.png|795",   // Coca-Cola, 1,5 litri
  "a1-acqua-6": "c/ce/Water_Bottle_(51308317077).jpg|1113",   // Acqua naturale, 6 bottiglie
  "a1-banane": "a/a9/Bunch_of_bananas_on_sale.jpg|4165",   // Banane, 1 kg
  "a1-zucchero": "3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg|1149",   // Zucchero bianco, 1 kg
  "a1-farina": "0/09/Flours.jpg|4751",   // Farina 00, 1 kg
  "a1-sale-grosso": "b/b8/Sea_Salt_-_Macro_(51840172425).jpg|5184",   // Sale grosso, 1 kg
  "a1-peroni-66": "3/30/Bottle_Peroni_Nastro_Azzurro.jpg|1182",   // Birra Peroni, 66 cl
  "a1-tonno-rio": "6/6f/Seachicken_mild_hagoromofoods002.jpg|3296",   // Tonno Rio Mare, 3 scatolette
  "a1-tortellini": "d/d5/Tortellini.jpg|2150",   // Tortellini freschi, 250 g
  // "a1-crudo-parma": tolta il 20 nov 2026 (la foto era una pizza col prosciutto): resta l'emoji finché non ne arriva una giusta
  "a1-mortadella": "1/1e/Mortadella_tagliata.jpg|801",   // Mortadella Bologna, 100 g
  "a1-bresaola": "c/cb/Bresaola-Valt-IGP.jpg|591",   // Bresaola, 100 g
  "a1-basilico": "6/6e/Basil_plant_in_a_pot_02.jpg|2736",   // Basilico in vaso
  "a1-tavernello": "0/06/Tavernello_classico.png|450",   // Vino in brick, 1 litro
  "a1-aceto-modena": "7/7e/Balsamico-1.jpg|1896",   // Aceto balsamico, 250 ml (22 nov 2026, ripasso: Aceto balsamico tradizionale in cofanetto: fascia di prezzo molto più alta di 2,30 euro.; prima Aceto_Balsamico.jpg)
  "a1-cotechino": "5/58/Cotechino-Intero.jpg|1399",   // Cotechino, 500 g
  "a1-mele": "0/0f/Golden_Delicious_apples.jpg|6000",   // Mele Golden, 1 kg
  "a1-patatine": "6/69/Potato-Chips.jpg|3072",   // Patatine San Carlo, 180 g
  "a1-magnum": "5/5a/Magnum_ice_cream.jpg|1376",   // Magnum Classic, 4 gelati (22 nov 2026, ripasso: Magnum: un dolce di cioccolato con le rose, non il Magnum; prima Magnum_Double_Chocolate_Ice-cream_Bar_(7629011916).jpg)
  "a1-pollo-intero": "5/57/Chickens_in_market.jpg|2860",   // Pollo intero, 1,5 kg
  "a1-parmigiano-kg": "e/e9/Parmigiano-Reggiano_at_Eataly_in_Stockholm.jpg|2448",   // Parmigiano Reggiano, 1 kg
  "a1-pecorino-kg": "e/ee/Pecorino_romano_cheese.jpg|1280",   // Pecorino Romano, 1 kg
  "a1-macinato-kg": "d/d1/Hackfleisch-1.jpg|2905",   // Carne macinata, 1 kg
  "a1-fiorentina-kg": "8/8c/Bistecca_alla_fiorentina.jpg|1280",   // Bistecca alla fiorentina, 1 kg
  "a1-treccia-bufala": "d/d5/Mozzarella_di_bufala2.jpg|4160",   // Treccia di bufala, 1 kg
  "a1-pistacchi-bronte": "b/b5/Pistachio_vera.jpg|1709",   // Pistacchi di Bronte, 1 kg
  "a1-ferrero-30": "b/b5/Ferrero_Rocher_8pcs_box_20150118.jpg|3920",   // Ferrero Rocher, 30 praline
  "a1-moet": "c/c5/Moët_&_Chandon_Brut_Impérial_bottle_(Fareham_Wine).jpg|719",   // Champagne Moët & Chandon (22 nov 2026, ripasso: champagne Moët: scura, non si capisce; prima Moët_et_Chandon.jpg)
  "a1-ferrari-brut": "5/54/Example_of_TrentoDOC_Label.JPG|2175",   // Spumante Ferrari Brut, 75 cl
  "a1-aperol": "b/ba/Aperol_001_2025_06_08.jpg|2012",   // Aperol, 1 litro (22 nov 2026, ripasso: Bottiglia Aperol che sembra vuota, senza il liquido arancione: non è riconoscibile come…; prima Aperol_bottle.JPG)
  "a1-brunello": "7/70/Brunello_di_Montalcino_-_Biondi_Santi_-_Bottle.jpg|1536",   // Brunello di Montalcino, 75 cl
  "a1-montenegro": "f/ff/Amaro_Montenegro.jpg|2304",   // Amaro Montenegro, 70 cl
  "a1-cassa-peroni": "4/41/Bierkasten_001.jpg|1024",   // Cassa di 24 birre Peroni
  "a1-carbonara-4": "3/33/Espaguetis_carbonara.jpg|2048",   // Spesa per la carbonara per 4
  "a1-detersivo": "c/c8/HK_SKD_TKO_Po_Yap_Road_將軍澳廣場_Tseung_Kwan_O_Plaza_K-mart_fresh_food_indoor_market_shop_Kai_Bo_Food_Supermarket_Wayway_Laundry_Liquid_plastic_bottle_July_2021_SS2_02.jpg|3096",   // Detersivo per lavatrice
  "a1-prosciutto-intero": "1/15/Prosciutto_di_Parma,_ham_producing.jpg|1704",   // Prosciutto di Parma intero
  "a1-caffe-milano": "3/39/Cup_of_espresso_02.jpg|5472",   // Caffè al banco
  "a1-cappuccino": "7/70/Cappuccino_in_original.jpg|6000",   // Cappuccino al banco
  "a1-cornetto": "c/cd/Cornetto_marmellata.jpg|10944",   // Cornetto alla marmellata
  "a1-spritz-venezia": "a/a2/Aperol_spritz_-_Bistro_Don_Giovanni_-_Sarah_Stierch_2018_04.jpg|3024",   // Spritz al bacaro
  "a1-spritz-milano": "c/c2/Aperol_Spritz_at_Lasipiha.jpg|3456",   // Spritz all'aperitivo (22 nov 2026, ripasso: Mostra la bottiglia di Aperol, non il bicchiere di spritz con aperitivo; si collega ma…; prima Aperol_Aperitivo_Aperitif_02.jpg)
  "a1-margherita-napoli": "d/d4/Margherita_Originale.JPG|2048",   // Pizza margherita
  "a1-suppli": "b/bb/Supplì_al_telefono.jpg|1000",   // Supplì al telefono
  "a1-arancina": "e/ee/Arancini_002.jpg|2288",   // Arancina al ragù
  "a1-piadina": "0/01/Piadina_romagnola.jpg|1280",   // Piadina crudo e squacquerone
  "a1-cono-gelato": "c/c8/Icecream_Cone.jpg|790",   // Cono con due gusti
  "a1-lampredotto": "1/1c/Lampredotto_sandwich.JPG|2648",   // Panino col lampredotto
  "a1-focaccia": "6/6f/Focaccia_on_sale_in_Genoa.JPG|5184",   // Un pezzo di focaccia
  "a1-cannolo": "a/ad/Cannoli_siciliani_al_Caffè_Impero,_ad_Alcamo.jpg|2675",   // Cannolo siciliano
  "a1-sfogliatella": "0/0f/Sfogliatella_riccia_napoletana.jpg|3648",   // Sfogliatella riccia
  "a1-spremuta": "0/05/Orangejuice.jpg|2670",   // Spremuta d'arancia
  "a1-granita-brioche": "e/e4/Granita_brioche_cornetto.jpg|1600",   // Granita con la brioche
  "a1-birra-media": "e/e4/Lager.jpg|1704",   // Birra media alla spina
  "a1-calice-vino": "c/c0/Red_Wine_Glass.jpg|428",   // Calice di vino della casa
  "a1-acqua-ristorante": "c/ce/Water_Bottle_(51308317077).jpg|1113",   // Acqua al ristorante, 1 litro
  "a1-tiramisu": "4/42/Dolce_Tiramisù_monoporzione.jpg|4000",   // Tiramisù
  "a1-big-mac": "e/ef/Big_Mac_meal_McDonald's_(Elizabeth_Street)_Melbourne_CBD_April_23,_2025_202504231157_IMG_3302.jpg|4032",   // Menù Big Mac medio
  "a1-kebab": "a/aa/Döner_Kebab,_Berlin,_2010_(01).jpg|1445",   // Panino kebab
  "a1-cuoppo": "a/a2/Italy-Italia_Italian_Food_Fritto_misto_alla_piemontese_PxT.JPG|1280",   // Cuoppo di frittura di pesce
  "a1-porchetta": "2/2f/Panino_con_porchetta_di_Ariccia.jpg|3648",   // Panino con la porchetta
  "a1-tramezzino": "4/46/Tramezzino_al_tonno.jpg|3092",   // Tramezzino tonno e uova
  "a1-shakerato": "2/26/Shakerato_in_a_martini_glass.jpg|2448",   // Caffè shakerato
  "a1-bombolone": "e/e4/Bombolone_impiattato.jpg|3490",   // Bombolone alla crema
  "a1-arrosticini": "4/4a/Arrosticini_abruzzesi_01.jpg|4000",   // Dieci arrosticini
  "a1-negroni": "4/4d/Negroni_(cocktail).jpg|4032",   // Negroni
  "a1-colazione-4": "0/0c/Cornetto_e_cappuccino.jpg|4032",   // Colazione per quattro (22 nov 2026, ripasso: Waffle, uova e frutta: una colazione americana, non cappuccini e cornetti al banco.; prima Breakfast_at_the_Black_Bear_Diner.jpg)
  "a1-orecchiette": "a/a5/Orecchiette_con_cime_di_rapa_-_The_Grill,_Grossi_Florentino_AUD32_main_(4800088661).jpg|2048",   // Orecchiette alle cime di rapa
  "a1-carbonara-roma": "5/50/Spaghetti_alla_Carbonara_2.jpg|3264",   // Spaghetti alla carbonara
  "a1-tagliatelle": "1/1a/Tagliatelle_al_ragù_03.jpg|3264",   // Tagliatelle al ragù
  "a1-menu-pranzo": "4/43/Pizza,_Spaghetti_and_Wrap_–_A_Restaurant_Food_Spread.jpg|1080",   // Menù del giorno a pranzo (22 nov 2026, ripasso: Solo l'insegna di una trattoria, nessun piatto né menù: quasi tutta scritta.; prima Italian_trattoria_sign.jpg)
  "a1-pollo-spiedo": "d/d9/Max's_Roasted_Chicken_-_Evan_Swigart.jpg|2033",   // Pollo allo spiedo con patate
  "a1-hamburger": "4/4b/Bacon_cheeseburger,_French_fries,_and_dill_pickle_-_Massachusetts.jpg|2591",   // Hamburger con patatine
  "a1-frittura-mare": "7/77/Frittura_di_pesce_tipica_delle_coste_Toscane.jpg|4624",   // Frittura di calamari e gamberi
  "a1-vongole": "7/70/Spaghetti_alle_vongole.jpg|1600",   // Spaghetti alle vongole
  "a1-tagliere": "a/a1/Tagliere_toscano.jpg|4194",   // Tagliere per due
  "a1-gelato-kg": "3/3a/Delicious_Gelato_on_display.jpg|3179",   // Vaschetta di gelato, 1 kg
  "a1-cacciucco": "3/33/Toscana_-_Zuppa_di_pesce_in_tegame_(Cacciucco)_da_porre_in_scodella_con_pane_arrostito.jpg|1080",   // Cacciucco (22 nov 2026, ripasso: Sembra carne o pollo in salsa gialla, non una zuppa di pesce con pane abbrustolito.; prima Cacciucco_alla_Livornese_19_34_55_234000.jpeg)
  "a1-sushi-ayce": "6/60/Sushi_platter.jpg|1614",   // Sushi «mangia quanto vuoi»
  "a1-cotoletta": "3/34/Cotoletta_alla_milanese_in_milano.jpg|3024",   // Cotoletta alla milanese
  "a1-brunch": "2/25/Cafe_Brunch_Budapest_omelette.jpg|3000",   // Brunch della domenica
  "a1-agriturismo": "f/f7/Acquanegra_sul_Chiese-Oasi_Le_Bine.JPG|3770",   // Pranzo in agriturismo
  "a1-torta-compleanno": "e/e3/Torta_di_compleanno_-_Birthday_cakes_of_Italy_-_fruit_Meringue_Whipped_cream_from_traditional_pastry_of_Milan.jpg|3241",   // Torta di compleanno per 12
  "a1-pizzeria-4": "9/9f/Pizzas_margherita_in_Baia_(2010)_by_RaBoe.jpg|1200",   // Pizza e birra per quattro
  "a1-fiorentina-ristorante": "b/b2/Bistecca_alla_Fiorentina.jpg|1136",   // Fiorentina al ristorante
  "a1-crazy-pizza": "5/57/Neapolitan_pizza_at_Trappica_(48701940197).jpg|3024",   // Margherita da Briatore
  "a1-capodanno": "1/11/Hanabi_in_Adachi-ku1.jpg|2468",   // Cenone di Capodanno
  "a1-cena-pesce-due": "8/82/Plateau_de_fruits_de_mer_001.jpg|2048",   // Cena di pesce per due
  "a1-francescana": "a/a1/Entree_at_Osteria_Francescana_(15932125420).jpg|2448",   // Menù di Massimo Bottura
  "a1-bagno-venezia": "c/c1/Public_toilet_entrance_In_modern.jpg|2268",   // Bagno pubblico
  "a1-asciugatrice": "1/13/American_Dryer_Corp._laundromat_dryer.JPG|2272",   // Asciugatrice a gettone
  "a1-metro-milano": "a/ad/MetroCentrale_macchine_biglietti.jpg|1024",   // Biglietto della metro
  "a1-chiave": "3/3c/Vari_tipi_di_chiavi.JPG|2816",   // Copia di una chiave
  "a1-camicia": "7/7d/Button_down_dress_shirts_for_men.jpg|1200",   // Camicia lavata e stirata
  "a1-lavatrice-gettone": "9/94/Laundromat_Washing_Machines_&_Laundry_Equipment.jpg|4624",   // Lavatrice a gettone, 8 kg
  "a1-dog-sitter": "5/58/Dog_walking_woman.jpg|2115",   // Passeggiata col dog sitter
  "a1-orlo": "8/8f/Hemmed_jeans.png|1500",   // Orlo ai pantaloni
  "a1-cappotto": "2/26/Drycleanmachine.JPG|1952",   // Lavaggio di un cappotto
  "a1-pacco-giu": "1/16/TV_set_(46_inch)_in_self-customized_box_for_sending_via_parcel_service_N.3.jpg|3024",   // Il pacco da giù, 20 kg
  "a1-pacco-5kg": "0/0a/Sticking_a_label_onto_a_parcel_for_shipping.jpg|4000",   // Spedire un pacco di 5 kg (22 nov 2026, ripasso: Persona in un magazzino, non si capisce che sia la spedizione di un pacco.; prima Inside_USAG_Italy's_Summer_Hire_Program_(6758706).jpg)
  "a1-barbiere": "4/4d/Barber_cutting_hair_with_comb._Back_view_of_man_in_barber_shop.jpg|6016",   // Taglio dal barbiere
  "a1-piumone": "b/b2/La_cama_deshecha_(2724466831).jpg|3072",   // Lavaggio del piumone
  "a1-ceretta": "2/2f/Waxing_Supplies.jpg|4000",   // Ceretta alle gambe
  "a1-manicure": "d/df/Професионална_Ноктопластика.JPG|1530",   // Manicure semipermanente
  "a1-taglio-piega": "0/09/Hairdresser's_salon_in_Brastad_5.jpg|2938",   // Taglio e piega
  "a1-abbonamento-mezzi": "3/37/Tram_in_Piazza_Duca_d'Aosta,_Milan.jpg|3825",   // Abbonamento mensile ai mezzi
  "a1-toelettatura": "0/06/Grooming_Poodle.jpg|2592",   // Toelettatura del cane
  "a1-lezione-guida": "f/f0/The_car_of_the_driving_school_in_Tomaszów_Mazowiecki,_Poland.jpg|2560",   // Una lezione di guida
  "a1-veterinario": "7/70/Stethoscope_examination_of_an_orange_cat_in_Newark,_New_Jersey.jpg|4284",   // Visita dal veterinario
  "a1-colore": "1/14/Hair_coloring_at_hair_salon_(51213255633).jpg|1080",   // Colore dal parrucchiere
  "a1-pulizia-denti": "5/50/U.S._Air_Force_Medical_Dental_Technician_Cleaning_March_2023.jpg|7858",   // Pulizia dei denti
  "a1-tatuaggio": "c/ce/Aaira_Tattoo_on_Wrist.jpg|3024",   // Un piccolo tatuaggio
  "a1-idraulico": "f/fa/Plumber_at_work.jpg|2272",   // Idraulico a casa
  "a1-accordatura": "1/15/Piano_tuning.jpg|1736",   // Accordare il pianoforte (22 nov 2026, ripasso: accordare il pianoforte: foto in bianco e nero d'epoca; prima Piano_Tuning.jpg)
  "a1-spazzacamino": "a/ab/Chimneysweep.png|1480",   // Lo spazzacamino
  "a1-divano": "4/46/A_brown_sofa_(2005-03-03).jpg|2048",   // Pulizia del divano
  "a1-passaporto": "0/09/Passaportoitaliano2006.jpg|1525",   // Passaporto nuovo
  "a1-otturazione": "e/e4/US_Air_Force_(USAF)_Captain_(CAPT)_Michael_Suhler,_Doctor,_Advanced_General_Dentist,_31st_Dental_Squadron,_performs_Amalgam_build-up_on_the_lower_right_tooth_of_USAF_STAFF_Sergeant_-_DPLA_-_0cbbec59afb30ce4bbc3569de4470080.jpeg|2000",   // Otturazione di un dente
  "a1-lavatrice-rotta": "e/ec/LG_드럼세탁기와_식기세척기,_영국서_물사용_효율_최우수_제품_수상.jpg|770",   // Riparare la lavatrice
  "a1-animatore": "6/69/Kids_Party_Entertainer.jpg|1280",   // Animatore per una festa
  "a1-pensione-cane": "e/ef/Dog_kennel_Mason.jpg|768",   // Pensione per il cane, 7 notti
  "a1-abito-sposa": "1/12/Wedding_gown_with_a_bow.jpg|3072",   // Lavare l'abito da sposa (22 nov 2026, ripasso: lavare l'abito da sposa: scura, una donna alla finestra; prima Bride_north_america.jpg)
  "a1-devitalizzazione": "b/bb/Dental_root_canal_treatment_process.jpg|2200",   // Devitalizzazione di un dente
  "a1-imbianchino": "c/c7/House_painters_in_Capri_(cropped).jpg|1896",   // Imbiancare una stanza
  "a1-condizionatore": "e/e6/Galanz_Air_Conditioner_2.jpg|3264",   // Montare un condizionatore (22 nov 2026, ripasso: Vecchio condizionatore a finestra arrugginito, non uno split moderno.; prima MITSUBISHI_ELECTRIC_WINDOW_TYPE_AIR_CONDITIONER_OUTDOOR_UNIT.jpg)
  "a1-asilo-nido": "5/5c/Asilo_Fontevivo_(5)_sez_blu_interno.jpg|2816",   // Un mese di asilo nido
  "a1-laser-occhi": "7/73/Lasik_eye_surgery.jpg|4592",   // Laser agli occhi
  "a1-carbone-befana": "3/3c/Befana1.jpg|954",   // Carbone dolce della Befana
  "a1-vin-brule": "e/e6/Glühwein-Zubereitung.JPG|2880",   // Vin brûlé
  "a1-mimosa": "8/82/Acacia_dealbata-1.jpg|2448",   // Mazzetto di mimosa
  "a1-struffoli": "b/bc/Struffoli_Napoletani.jpg|3264",   // Struffoli, vassoio da 500 g
  "a1-zampone": "4/49/Zampone.jpg|1188",   // Zampone, 1 kg
  "a1-confetti": "0/0f/Sulmona_88.jpg|1134",   // Confetti alla mandorla, 1 kg
  "a1-chiacchiere": "f/f9/Chiacchiere.jpg|2514",   // Chiacchiere, 1 kg
  "a1-pastiera": "0/0f/Pastiera_napoletana.jpg|1280",   // Pastiera napoletana, 1 kg
  "a1-torrone": "0/00/Torrone_di_mandorle.jpg|3852",   // Torrone, 1 kg
  "a1-corona-alloro": "3/30/Corona_alloro_laurea.JPG|6000",   // Corona d'alloro
  "a1-cassata": "4/40/Cassatasiciliana.jpg|1536",   // Cassata siciliana, 1 kg
  "a1-colomba": "e/ee/Colomba_pasquale,_edizione_2013_-_ND0_4662_(8564331585).jpg|5184",   // Colomba artigianale, 1 kg
  "a1-panettone-artigianale": "1/1e/Panettone_-_Nicolettone_2017_-_IMG_7092_(31752504105).jpg|5472",   // Panettone artigianale, 1 kg
  "a1-rose-rosse": "c/c7/Bouquet_of_red_roses.jpg|3468",   // Dodici rose rosse
  "a1-uovo-pasqua": "4/4e/Chocolate_Easter_eggs_in_foil,_Canada,_2026-02-27_01.jpg|5019",   // Uovo di Pasqua artigianale
  "a1-pranzo-nozze": "5/55/Elegant_banquet_setup_for_wedding_reception_with_beautifully_arranged_tables_in_soft_lighting.jpg|4016",   // Pranzo di nozze, a persona
  "a1-caffe-anno": "4/41/Espresso_BW_1.jpg|3872",   // Un caffè al giorno per un anno
  "a1-comunione": "0/01/Layout_of_a_table_in_the_Nobel_Prize_for_the_banquet_at_the_City_Hall.jpg|1024",   // Pranzo della Prima Comunione (22 nov 2026, ripasso: pranzo della Prima Comunione: foto d'epoca in bianco e nero; prima Elsőáldozó_fortepan_40689.jpg)
  "a1-matrimonio": "b/ba/Amalfi_-_7332.jpg|4104",   // Un matrimonio in Italia
  "a2-presine": "e/ea/Pot_holder_(AM_2002.64.8).jpg|1681",   // Presine da cucina, 2
  "a2-mollette": "2/23/Plastic_clothespins.jpg|2400",   // Mollette per il bucato, 24
  "a2-barattolo-fido": "7/7e/PreservedFood1.jpg|5238",   // Barattolo Fido, 1 litro
  "a2-lampadina-led": "d/d6/LED-E27-Light-Bulb-1134.jpg|2592",   // Lampadina LED
  "a2-accendigas": "c/c0/Allume_gaz.jpg|4746",   // Accendigas elettronico (22 nov 2026, ripasso: Pentola sul fornello: l'accendigas non si vede affatto.; prima Milk_on_the_stove.jpg)
  "a2-sturalavandini": "2/2b/Plopper.jpg|1536",   // Sturalavandini
  "a2-battipanni": "c/c3/Carpet_beater.jpg|1552",   // Battipanni in vimini
  "a2-cavatappi": "8/8f/Kellnermesser_p1000026.jpg|1902",   // Cavatappi da cameriere
  "a2-grattugia": "a/ae/Küchenreibe_1.jpg|3006",   // Grattugia a quattro facce
  "a2-scopa-saggina": "b/b0/BroomsforSale.jpg|948",   // Scopa di saggina
  "a2-colapasta": "0/0e/Kevgir.JPG|863",   // Colapasta in acciaio
  "a2-zerbino": "d/db/Zerbino_format.jpg|2187",   // Zerbino con la scritta
  "a2-tagliere": "9/91/MAIGO-Schneidebrett_\"Gerd\".jpg|1560",   // Tagliere di legno
  "a2-stendino": "8/84/Clotheshorse.jpg|1094",   // Stendibiancheria ad ali
  "a2-padella": "5/58/Aluminium_koekenpan_met_lange_zwart_gelakte_steel,_objectnr_80330.JPG|2048",   // Padella antiaderente, 28 cm
  "a2-moka-3": "4/4f/Moka_Express_Bialetti.png|1126",   // Moka Bialetti, 3 tazze
  "a2-tostapane": "8/8f/Toaster.jpg|1938",   // Tostapane da due fette
  "a2-ventilatore": "1/1a/Hatari_18_inch_fan.jpg|3024",   // Ventilatore a piantana
  "a2-servizio-piatti": "3/3f/Dish_and_Knife.jpg|1024",   // Servizio di piatti, 18 pezzi
  "a2-lenzuola": "3/3d/Bettwaesche.jpg|2960",   // Completo lenzuola matrimoniale
  "a2-billy": "d/dd/IKEA_Billy_bookshelf_(80x106_cm_birch_veneer).jpg|2592",   // Libreria IKEA Billy
  "a2-poang": "a/a2/POÄNG_in_“Knisa_Beige”_(45144076894).jpg|2253",   // Poltrona IKEA Poäng
  "a2-albero-natale": "d/d5/A1_Christmas_Tree_photo.jpg|2676",   // Albero di Natale finto
  "a2-piscina-gonfiabile": "c/c1/An_inflatable_swimming_pool_invites_relaxation_in_a_backyard_setting,_with_a_blue_hose_artistically_draped_over_the_edge.jpg|4016",   // Piscina gonfiabile da giardino
  "a2-microonde": "0/08/Panasonic_NN-SD69LS_20220410.jpg|3024",   // Forno a microonde
  "a2-tosaerba": "e/ee/Electric_lawn_mower_with_a_cord.jpg|2592",   // Tosaerba elettrico
  "a2-macchina-cucire": "4/49/Woman_sewing_a_face_mask_with_a_Singer_machine_09.jpg|5616",   // Macchina da cucire Singer
  "a2-weber": "1/19/Weber_1951_Kettle_Replica.jpg|2592",   // Barbecue Weber a carbone
  "a2-deumidificatore": "c/c3/Air_dehumidifier_with_a_European_plug.jpg|2452",   // Deumidificatore
  "a2-dondolo": "0/00/Mihenk_2400_iroko_bahçe_salıncağı.jpg|1341",   // Dondolo da giardino
  "a2-piano-induzione": "3/39/Kookplaat_inductie.JPG|2288",   // Piano cottura a induzione
  "a2-lavatrice": "a/a7/Front_Load_Washing_Machine.jpg|4248",   // Lavatrice da 8 kg
  "a2-cucina-gas": "9/99/Gas_stove.jpg|369",   // Cucina a gas col forno
  "a2-lavastoviglie": "8/82/Dishwasher_open_for_loading.jpg|1944",   // Lavastoviglie da 60 cm
  "a2-supersonic": "e/e2/Dyson_Supersonic_Hair_Dryer_1_2017-01-28.jpg|3024",   // Phon Dyson Supersonic Nural (22 nov 2026, ripasso: Espositore con phon piccoli e confusi, il Dyson non si riconosce.; prima Dyson_Supersonic_Hair_Dryer_4_2017-01-28.jpg)
  "a2-asciugatrice": "1/1c/Modern_front_load_tumble_dryer.JPG|2155",   // Asciugatrice da 8 kg
  "a2-materasso": "b/b3/Pillowtop-mattress.jpg|1487",   // Materasso matrimoniale
  "a2-frigorifero": "7/7b/Open_refrigerator_with_food_at_night.jpg|3465",   // Frigorifero combinato
  "a2-tenda-sole": "2/27/Hot_Springs_061.jpg|480",   // Tenda da sole
  "a2-porta-blindata": "a/ac/Vidmar_Panzertüre1.jpg|2587",   // Porta blindata
  "a2-stufa-pellet": "c/c3/Stufa_a_pellet_Palazzetti.jpg|1704",   // Stufa a pellet
  "a2-bimby": "7/78/Thermomix_2014.jpg|1180",   // Bimby (20 nov 2026: era un Bimby vecchio con le manopole; la descrizione dice l'ultimo modello)
  "a2-pile-bottone": "c/c7/Coin-cells.jpg|511",   // Pile a bottone, 2 pezzi
  "a2-pile-aa": "7/71/Duracell_AA_batteries.JPG|2272",   // Pile stilo, 4 pezzi
  "a2-caricatore-usb": "c/c9/USB_power_adapter_for_Apple_iPod,_Model_A1205,_by_Foxlink_Technology_Ltd-1048.jpg|3971",   // Caricatore USB da muro
  "a2-netflix": "f/fb/Netflix_button_remote_(40062279010).jpg|5184",   // Netflix per un mese
  "a2-mouse": "4/4e/Logitech_M196_wireless_mouse.jpg|6000",   // Mouse senza fili
  "a2-telecomando": "0/0a/Piloty.jpg|2564",   // Telecomando universale
  "a2-cavo-hdmi": "e/e2/HDMI_Cable_1.JPG|3216",   // Cavo HDMI da 2 metri
  "a2-earpods": "5/54/Earpods.jpg|1506",   // Auricolari Apple col filo
  "a2-tamagotchi": "f/f2/Tamagotchi_0124_ubt.jpeg|900",   // Tamagotchi
  "a2-calcolatrice-casio": "4/46/Casio_FX-82_Scientific_Calculator_(51878773081)_(cropped).jpg|2300",   // Calcolatrice scientifica Casio
  "a2-airtag": "e/eb/Apple_AirTag_(51334123725).jpg|4917",   // AirTag
  "a2-radio": "a/a9/Vintage_Zenith_Transistor_Radio,_Model_RF42,_AM-FM_Bands,_AC_&_Battery_Operation,_Telescopic_Antenna,_Made_In_Taiwan,_Circa_1974_(49020569596).jpg|3149",   // Radiolina portatile
  "a2-powerbank": "e/ee/Anker_power_bank_and_cable.jpg|3443",   // Batteria esterna
  "a2-cartucce": "4/43/Ink-jet_printer_inside-cartridges.jpg|1264",   // Cartucce per la stampante
  "a2-smartband": "8/8b/Mi_Band_4_default_face.jpg|3141",   // Braccialetto fitness Xiaomi
  "a2-magsafe": "0/01/MagSafe_and_USB-C_Cable_Charger_for_iPhone.jpg|3596",   // Caricatore MagSafe Apple
  "a2-hue": "7/71/Philips_Hue_white_bulb_-_June_2018_(1944).jpg|6000",   // Lampadina smart a colori
  "a2-cover-apple": "0/07/Apple_iPhone_17_Silicone_Case_(Black).jpg|4284",   // Custodia Apple in silicone
  "a2-echo-dot": "6/67/Echo_Dot_(3rd_Gen)_01.jpg|2906",   // Echo Dot
  "a2-ps-plus": "7/77/Black_and_white_Playstation_5_base_edition_with_controller.png|1941",   // PlayStation Plus, 12 mesi
  "a2-dualsense": "3/3c/Playstation_DualSense_Controller.png|3120",   // Controller della PS5
  "a2-instax": "1/1c/מצלמת_אינסטקס_מיני_11_FUJIFILM_INSTAX_MINI-_בצבע_כחול.jpg|3061",   // Fotocamera istantanea Instax (22 nov 2026, ripasso: Instax: non sembra una Instax; prima Fujifilm_Instax_Mini_10_P1110435.jpg)
  "a2-stampante": "d/d8/Canon_PIXMA_TS_3480_Multifunction_ink-jet_Printer_(4).jpg|6469",   // Stampante multifunzione
  "a2-spazzolino": "8/85/Oral-B_Pro_2_2500_Electric_Toothbrush_-_41646996702.jpg|1000",   // Spazzolino elettrico Oral-B (22 nov 2026, ripasso: Si vede un caricatore/custodia con testine, non uno spazzolino elettrico: confonde.; prima 2023_Szczoteczka_do_zębów_Oral-B_Pro_750_(2).jpg)
  "a2-airpods-4": "2/23/Airpods_4.jpg|2685",   // AirPods 4
  "a2-tv-32": "e/e2/LG_smart_TV.jpg|1700",   // TV da 32 pollici
  "a2-kindle": "3/38/2023_Amazon_Kindle_Paperwhite_(3).jpg|4152",   // Kindle Paperwhite
  "a2-airpods-pro": "2/2f/AirPods_Pro_(2nd_generation).jpg|4032",   // AirPods Pro
  "a2-ps-portal": "4/45/PlayStation_Portal.jpg|1280",   // PlayStation Portal
  "a2-quest": "c/cb/Meta_Quest_3S_Display_Unit.jpg|2804",   // Visore Meta Quest 3S
  "a2-apple-watch": "8/86/Apple_Watch_Series_10.jpg|3024",   // Apple Watch
  "a2-switch-2": "4/4e/Nintendo_Switch_2_in_Docking_Console.jpg|5855",   // Nintendo Switch 2
  "a2-tv-55": "a/a6/Tesla_tv.jpg|275",   // TV da 55 pollici
  "a2-galaxy-a": "c/c8/Samsung_Galaxy_A57_5G.jpg|4592",   // Samsung Galaxy A57
  "a2-ipad": "b/b0/IPad_Pro_11-inch_backside.jpg|3024",   // iPad
  "a2-ipad-pro": "8/87/About_iPad_Pro_11-inch_(M4).jpg|3024",   // iPad Pro 11 pollici
  "a2-ps5": "7/77/Black_and_white_Playstation_5_base_edition_with_controller.png|1941",   // PlayStation 5 (22 nov 2026, ripasso: PS5 riconoscibile ma tagliata, con tende e fondo disordinato; una foto pulita aiuterebbe.; prima PlayStation_5_and_DualSense.jpg)
  "a2-macbook-neo": "9/9e/MacBook_Neo_Indigo_Touch_ID.png|4035",   // MacBook Neo
  "a2-iphone-17": "8/8f/White_iPhone_17.jpg|4160",   // iPhone 17
  "a2-macbook-air": "3/39/MacBook_Air_(13-inch,_M4,_Silver).jpg|5712",   // MacBook Air 13 pollici
  "a2-galaxy-ultra": "d/de/Galaxy_S26_Ultra_lavender.jpg|3120",   // Samsung Galaxy S26 Ultra
  "a2-iphone-pro-max": "f/f4/IPhone_Pro_(Max).png|4624",   // iPhone Pro Max
  "a2-iphone-2tb": "e/e2/IPhone_16_Pro_Max_Desert_Titanium_Rear.png|2048",   // iPhone Pro Max da 2 TB (22 nov 2026, ripasso: Telefono in mano con schermata impostazioni illeggibile: non si capisce il modello né i…; prima About_iPhone_16_Pro_Max_Natural_Titanium.jpg)
  "a2-lacci": "3/37/Shoelaces_20050719_001.jpg|2272",   // Lacci per scarpe (22 nov 2026, ripasso: lacci: scura, non si capisce; prima Black_shoe_laces_tied_03.jpg)
  "a2-maglietta-primark": "b/b6/Uniqlo_2026-09-07_shirt_Philippines.jpg|2324",   // Maglietta bianca Primark
  "a2-ombrello-ambulante": "8/87/M0354_000727-005_1.jpg|1024",   // Ombrello dell'ambulante
  "a2-collant": "f/f8/Sheer_Tights_or_Pantyhose_with_low_waist_top_in_the_colour_black_-_front_view.jpg|4678",   // Collant velati
  "a2-mutande-rosse": "8/89/Knickers1.jpg|2046",   // Mutande rosse di Capodanno
  "a2-calzini": "d/d4/Premium_Cotton_Socks.jpg|3164",   // Calzini corti, 3 paia
  "a2-occhiali-mercato": "d/d6/Jan_05_2011_-Day_065-_\"Retro_Sunglasses\"_(5328176833).jpg|2560",   // Occhiali da sole al mercato (22 nov 2026, ripasso: occhiali da sole: una faccia in primo piano; prima Occhiali_da_sole_-_Italia.jpg)
  "a2-pantofole": "e/e2/Charentaises_bureau_EHM.jpg|640",   // Pantofole a quadri
  "a2-jeans-primark": "5/5a/Jeans.jpg|435",   // Jeans Primark (22 nov 2026, ripasso: Jeans blu dritti, ma stinti e usati; per Primark nuovi andrebbe meglio un paio nuovo; prima Levi's_501_raw_jeans.jpg)
  "a2-body-neonato": "9/9d/Menzis_bodysuit_for_newborns_(2019)_01.jpg|2736",   // Body per neonato, 5 pezzi
  "a2-sciarpa-squadra": "9/97/Uzbekistan_national_football_team_supporter.jpg|3024",   // Sciarpa della squadra
  "a2-havaianas": "5/5f/Havaianas_Aqua_and_White_Flip_flops_at_Lung_Mei_Beach.jpg|5184",   // Infradito Havaianas
  "a2-camicia": "a/a5/Camisade_puño_doble.jpg|1697",   // Camicia bianca da uomo
  "a2-canottiera": "e/e6/Old_style_vest_(tank_top),_from_1950s_Chinese_advertisement.jpg|285",   // Canottiera della salute
  "a2-felpa": "c/c2/Hoodie_m7agar.jpg|1200",   // Felpa col cappuccio
  "a2-pigiama": "1/1c/Flannel_Shirt_For_Abi.jpg|2382",   // Pigiama di flanella
  "a2-adilette": "8/83/Adidas_Purple_Original_Adilette_22_Slide.jpg|5184",   // Ciabatte Adidas Adilette
  "a2-new-era": "1/15/2024_World_Series_Los_Angeles_Dodgers_and_New_York_Yankees_New_Era_59Fifty_caps_NEW_ERA_SHIBUYA_2024年11月12日の渋谷_202411121314_IMG_9099.jpg|4032",   // Cappellino New Era
  "a2-cintura": "1/17/Leather_belt_&_buckle.jpg|2288",   // Cintura di pelle
  "a2-maglione": "e/ea/Jersei-coll-alt.jpg|678",   // Maglione di lana merino
  "a2-guanti": "6/67/Two_pairs_of_mens_leather_gloves_from_Randers_Handsker.jpg|6300",   // Guanti di pelle
  "a2-crocs": "e/e0/Single_croc.jpg|1940",   // Crocs Classic
  "a2-eastpak": "d/d7/Rucksack1.jpg|1458",   // Zaino Eastpak
  "a2-superga": "3/35/Superga_Cotu_Classic_Sneaker_2750_Canvas_blau_(1).jpg|2500",   // Superga 2750
  "a2-swatch": "a/a6/Swatch-1985_hg.jpg|2832",   // Orologio Swatch
  "a2-converse": "0/0d/Converse_All_Star_High_White_(4649858686).jpg|2736",   // Converse All Star alte
  "a2-birkenstock": "d/d3/Birkenstock_Arizona.jpg|4000",   // Birkenstock Arizona
  "a2-levis": "f/f7/Levi's_501.jpg|3024",   // Jeans Levi's 501
  "a2-kanken": "8/86/Fjallraven_Kanken_backpack_(Unsplash).jpg|4896",   // Zaino Fjällräven Kånken
  "a2-lacoste": "f/fb/Vintage_90's_Lacoste_Polo_Shirt.jpg|3420",   // Polo Lacoste
  "a2-air-force": "7/7e/Nike_air_Force_1_white_on_white.jpg|5152",   // Nike Air Force 1
  "a2-k-way": "9/98/K-Way.jpg|2532",   // K-Way
  "a2-ray-ban": "2/22/Ray-Ban,_New_Wayfarer_-_4.jpg|8600",   // Ray-Ban Wayfarer
  "a2-marinella": "2/2f/L85HS09_blake_vincent_blue_striped_silk_necktie_2.jpg|1000",   // Cravatta Marinella (22 nov 2026, ripasso: Manichini in stile videogioco con cravatte colorate, non una cravatta Marinella; prima Red_and_Green_Tie.jpg)
  "a2-ugg": "2/23/UggBoots_SMC.JPG|2544",   // Stivaletti UGG Classic Mini
  "a2-dr-martens": "7/74/Doctors_1460_Black_Worn.jpg|500",   // Anfibi Dr. Martens 1460 (22 nov 2026, ripasso: Anfibi bordeaux, la voce dice neri con cuciture gialle; prima Pair_of_brown_Dr_Martens_1460_boots.jpg)
  "a2-timberland": "e/eb/Image_of_a_pair_of_Tmerberland_boots.png|820",   // Timberland gialle
  "a2-borsalino": "f/fc/Borsalino,_fedora.jpg|3024",   // Cappello Borsalino
  "a2-nuptse": "4/42/Adidas_Helionic_Down_Jacket.jpg|2834",   // Piumino The North Face Nuptse
  "a2-tods": "0/0b/Airwalk_Men's_Mason_Mocassin_Slippers.JPG|4608",   // Mocassini Tod's Gommino
  "a2-moncler": "9/9d/Moncler_doudoune_logo.jpg|1094",   // Piumino Moncler
  "a2-max-mara": "7/78/Pierre_Balmain,_Swing_Coat_(1954-56)_02.jpg|615",   // Cappotto Max Mara 101801
  "a2-burberry": "3/31/Man_wearing_trenchcoat_(cropped).jpg|2000",   // Trench Burberry
  "a2-chanel": "9/9d/Chanel_2.55.jpg|2832",   // Borsa Chanel Classic
  "a2-casa-1-euro": "f/fb/Gangi_18_10_2020_08.jpg|4608",   // Casa da ristrutturare
  "a2-rullino": "4/4c/Kodak-Max-400-35mm-Film.jpg|2500",   // Rullino fotografico
  "a2-smemoranda": "6/6c/Agenda.jpg|1600",   // Diario Smemoranda
  "a2-vinile": "b/b6/12in-Vinyl-LP-Record-Angle.jpg|4000",   // Disco in vinile
  "a2-juicy-salif": "5/5e/Juicy_Salif_-_78365.jpg|2777",   // Spremiagrumi di design
  "a2-moka-18": "4/4f/Moka_Express_Bialetti.png|1126",   // Moka da 18 tazze
  "a2-reber": "9/9a/Food_Mill.jpg|500",   // Spremipomodoro elettrico
  "a2-sacco": "8/85/Zanotta_Sacco_chair_with_houndstooth_upholstery.jpg|1636",   // Poltrona Sacco Zanotta
  "a2-pannolini": "d/d8/Disposablediaper.JPG|2048",   // Pannolini per un anno
  "a2-trasloco": "1/17/Yellow_Iveco_moving_truck_with_Forsman_branding.jpg|6048",   // Trasloco di un trilocale
  "a2-abito-sposa": "1/12/Wedding_gown_with_a_bow.jpg|3072",   // Abito da sposa (22 nov 2026, ripasso: abito da sposa: una sposa in primo piano; prima White_wedding_dress_worn_by_unidentified_female_model.jpg)
  "a2-arco-flos": "e/e5/Arco_lamp.jpg|2448",   // Lampada Arco (22 nov 2026, ripasso: Foto scura, lampada ad arco con cupole blu che poco somiglia alla Flos Arco in acciaio…; prima "_12_-_ITALY_-_Milan_-_FLOS_50th_Anniversary_23.jpg)
  "a2-linea-micra": "5/59/Rocket_silver_metal_espresso_machine_on_table.jpg|1200",   // Macchina del caffè da bar
  // "a2-pianoforte": tolta il 20 nov 2026 (scritte gialle «YAMAHA U1A» e il logo di un negozio sopra la foto): resta l'emoji finché non ne arriva una pulita
  "a2-bagno": "b/bf/EFTA00000311_-_Modern_bathroom_with_white_tiles_a_glass_shower_enclosure_a_toilet_and_a_grey_rug_on_the_floor.jpg|768",   // Rifare il bagno
  "a2-eames": "c/ce/Eames_Lounge_Chair_-_side.jpg|3008",   // Poltrona Eames con pouf
  "a2-piscina": "0/0d/Backyard_swimming_pool_in_Queensland.JPG|3264",   // Piscina interrata
  "a3-arbre-magique": "c/c5/Wunderbaum.jpg|2272",   // Arbre Magique
  "a3-strisce-blu": "6/6f/Parking_Meter_Front.JPG|800",   // Un'ora sulle strisce blu
  "a3-monopattino-sharing": "9/93/Shared_electric_kick_scooters_Blinkee.city_on_the_main_square_of_Tomaszów_Mazowiecki_-_60000_population_town_in_central_Poland.jpg|2592",   // Monopattino in sharing
  "a3-area-c": "0/0d/Milan_Area_C_Porta_Ticinese_gate.JPG|1860",   // Ingresso in Area C
  "a3-eicma": "e/e1/0200_EICMA_Milano_2009.jpg|2304",   // Biglietto per l'EICMA
  "a3-museo-ferrari": "2/27/Ferrari-Museum_Maranello_8.JPG|5184",   // Museo Ferrari
  "a3-vignetta-svizzera": "f/f2/Swiss-motorway-road-tax-vignette.jpg|749",   // Vignetta svizzera
  "a3-deposito-gomme": "d/d7/Stack_of_tires_in_the_sun.jpg|4016",   // Deposito delle gomme
  "a3-autostrada-mi-rm": "5/5b/TiranaAirportJunction.png|1024",   // Autostrada Milano-Roma
  "a3-telepass": "e/e2/Un_dispositivo_Telepass_edizione_2022.jpg|3578",   // Telepass per un anno
  "a3-cambio-gomme": "b/be/Car_wheel_change_in_desert.jpg|1632",   // Cambio gomme di stagione
  "a3-traforo-monte-bianco": "a/a4/Chamonix_-_Mont_Blanc_Tunnel_Entrance.jpg|2346",   // Traforo del Monte Bianco (22 nov 2026, ripasso: traforo del Monte Bianco: foto dall'alto, non si capisce; prima Mont_Blanc_Tunnel_Courmayeur_P1550586.jpg)
  "a3-pieno-benzina": "f/f5/Petrol_pump_mp3h0355.jpg|3504",   // Pieno di benzina, 40 litri
  "a3-casco-nolan": "8/82/Casque_Nolan_N21_Visor.jpg|3928",   // Casco Nolan N21 Visor
  "a3-tagliando-panda": "d/d2/2018_Fiat_Panda_Easy_1.2.jpg|4206",   // Tagliando della Panda
  "a3-gomme-nuove": "2/25/Large_treaded_tire.jpg|1500",   // Quattro gomme nuove
  "a3-corso-guida-sicura": "6/69/MPs_enhance_skills_at_Hockenheimring_with_ADAC_training_DVIDS346566.jpg|3609",   // Corso di guida sicura
  "a3-monopattino-xiaomi": "0/04/Xiaomi_M365_Pro_2.jpg|3024",   // Monopattino elettrico Xiaomi
  "a3-brompton": "2/28/Folded-brompton-bicycle-on-fullsize-bike-P1010593.jpg|2048",   // Bici pieghevole Brompton
  "a3-kymco-agility": "8/8a/Kymco_Agility_125_R16+.jpg|1876",   // Kymco Agility 125
  "a3-liberty-125": "a/a4/Piaggio_Liberty_01.jpg|3008",   // Piaggio Liberty 125
  "a3-sh-125": "f/fd/Honda_SH_125_JF41_.jpg|4160",   // Honda SH 125
  "a3-vespa-primavera-50": "c/ca/Vespa_Primavera_50_4T_4V_seitlich.jpg|2448",   // Vespa Primavera 50
  "a3-vespa-primavera-125": "d/d6/Vespa_Prima_125b.jpg|4032",   // Vespa Primavera 125 (22 nov 2026, ripasso: Vespa gialla d'epoca anni 70 stile 50 Special: non è una Primavera 125 moderna e nuova.; prima Vespa_Primavera_125.jpg)
  "a3-sh-350": "3/34/Honda_SH_350_2026.jpg|1963",   // Honda SH 350
  "a3-xmax-300": "5/53/2024_Yamaha_XMAX_300_Tech_MAX.jpg|3024",   // Yamaha XMAX 300
  "a3-vespa-gts-310": "c/ca/Vespa_GTV_310_2025.jpg|2048",   // Vespa GTS 310
  "a3-citroen-ami": "7/72/Citroën_Ami_2020_(1).jpg|2449",   // Citroën Ami
  "a3-yamaha-mt07": "9/9c/2021_Black_Yamaha_MT-07.jpg|3031",   // Yamaha MT-07
  "a3-moto-guzzi-v7": "5/54/Moto_Guzzi_V7_Stone_in_Avellino.jpg|1701",   // Moto Guzzi V7 Stone
  "a3-fiat-topolino": "2/24/Fiat_Topolino_(2023)_IMG_0728.jpg|3843",   // Fiat Topolino
  "a3-ducati-scrambler": "c/c1/2015_Ducati_Scrambler_Icon_right.JPG|2936",   // Ducati Scrambler Icon
  "a3-yamaha-tmax": "6/62/Yamaha_TMAX_560_2026.jpg|1200",   // Yamaha TMAX
  "a3-dacia-sandero": "3/3e/2023_Dacia_Sandero_III_DSC_6012.jpg|3936",   // Dacia Sandero Streetway
  "a3-ligier-js50": "3/33/Ligier_JS50_180213.jpg|1325",   // Minicar Ligier JS50
  "a3-honda-africa-twin": "6/68/Honda_Africatwin.jpg|1500",   // Honda Africa Twin
  "a3-fiat-pandina": "d/d2/2018_Fiat_Panda_Easy_1.2.jpg|4206",   // Fiat Pandina
  "a3-fiat-500-hybrid": "f/f4/Fiat_500_Hybrid_Torino_(II)_–_f_25042026.jpg|4054",   // Fiat 500 Hybrid
  "a3-toyota-yaris": "3/3e/2020_Toyota_Yaris_Design_HEV_CVT_1.5_Front.jpg|4297",   // Toyota Yaris ibrida
  "a3-jeep-avenger": "c/c2/Jeep_Avenger_1X7A0818.jpg|4975",   // Jeep Avenger
  "a3-ducati-panigale": "a/a8/Ducati_Panigale_V4_-_Tuning_World_Bodensee_2018,_Friedrichshafen_(OW1A0484).jpg|6720",   // Ducati Panigale V4
  "a3-alfa-junior": "3/39/Alfa_Romeo_Junior_IMG_0474_(cropped).jpg|4941",   // Alfa Romeo Junior
  "a3-ferrari-amalfi": "7/79/Ferrari_Amalfi_IMG_8179.jpg|4003",   // Ferrari Amalfi
  "a3-funicolare-capri": "2/22/Funicolare_Capri-St.Gera.jpg|383",   // Funicolare di Capri
  "a3-contributo-venezia": "4/4e/Ponte_di_Rialto_Venice_2.jpg|5090",   // Ticket d'ingresso a Venezia (22 nov 2026, ripasso: ticket d'ingresso a Venezia: una nave da crociera; prima The_Grand_Canal._Venice,_Italy.jpg)
  "a3-vaporetto": "7/75/Venezia_Vaporetto_ACTV43_R01.jpg|4462",   // Biglietto del vaporetto
  "a3-cenacolo": "b/bb/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg|5381",   // L'Ultima Cena di Leonardo
  "a3-cristo-velato": "3/30/Cappella_Sansevero_(15041603867).jpg|1600",   // Il Cristo Velato
  "a3-leonardo-express": "d/d2/Rome_Termini_Trenitalia_Leonardo_Express_ETR_425_042_(35875413605).jpg|6000",   // Leonardo Express
  "a3-malpensa-express": "6/69/Malpensa_Express_at_Milano_Cadorna.jpg|4000",   // Malpensa Express
  "a3-grotta-azzurra": "d/d7/Blue_Grotto,_Capri,_IT.jpg|1600",   // Grotta Azzurra
  "a3-museo-egizio": "e/e7/Torino,_Museo_egizio_(243).jpg|5184",   // Museo Egizio
  "a3-reggia-caserta": "a/a4/Reggia_di_Caserta_2023.jpg|4896",   // Reggia di Caserta
  "a3-musei-vaticani": "f/f8/Vatican_Museums_entrance_2016.jpg|2195",   // Musei Vaticani
  "a3-scavi-pompei": "6/6d/Villa_di_Diomede_(Pompeii)_(48443945707).jpg|6000",   // Scavi di Pompei
  "a3-david": "b/bb/'David'_by_Michelangelo_Fir_JBU004.jpg|3260",   // Il David di Michelangelo
  "a3-torre-pisa": "4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg|3257",   // Salita sulla Torre di Pisa
  "a3-uffizi": "d/d7/Florence,_Italy_-_panoramio_(125).jpg|3456",   // Biglietto degli Uffizi
  "a3-cupola-brunelleschi": "2/22/Florence,_Italy,_Brunelleschi's_Dome_of_Florence_Cathedral.jpg|3072",   // Cupola del Brunelleschi
  "a3-palazzo-ducale": "4/4d/(Venice)_Doge's_Palace_facing_the_sea.jpg|8280",   // Palazzo Ducale
  "a3-cinque-terre-card": "4/42/Corniglia_costa.jpg|1000",   // Cinque Terre Card col treno
  "a3-esta-usa": "b/b1/United_States_Passport_Book_2871134419_721dd2b0db_o.jpg|2858",   // ESTA per gli Stati Uniti (22 nov 2026, ripasso: ESTA: la schermata di un sito; prima Electronic_System_for_Travel_Authorization.png)
  "a3-vaporetto-24-ore": "8/8a/ACTV_31_at_Fondaco_dei_Tedeschi.jpg|4896",   // Vaporetto per 24 ore
  "a3-roma-pass": "d/de/Colosseo_2020.jpg|12051",   // Roma Pass 72 ore
  "a3-taxi-fiumicino": "f/f5/Taxi_in_Rome.JPG|1944",   // Taxi da Fiumicino a Roma
  "a3-check-in-aeroporto": "2/20/Ryanair_check_in_desk_(Dublin)_in_2025.01.jpg|5792",   // Check-in al banco Ryanair
  "a3-skyway": "0/0f/Cabina_Skyway_Monte_Bianco.jpg|4134",   // Skyway Monte Bianco
  "a3-noleggio-vespa": "6/64/Scooter_Piaggio_Vespa_125-TS.jpg|2080",   // Vespa a noleggio per un giorno
  "a3-rifugio": "0/04/Rifugio_Pedrotti_-_Dolomiti_di_Brenta.jpg|2048",   // Notte in rifugio
  "a3-taxi-malpensa": "5/52/Taxi_Milano.jpg|2800",   // Taxi da Malpensa a Milano
  "a3-ombrellone-rimini": "6/68/Rimini_beach_umbrellas_at_night.jpg|4496",   // Ombrellone a Rimini
  "a3-taxi-acqueo": "4/44/Water_Taxi_in_Venice,_Italy.jpg|2700",   // Taxi acqueo dall'aeroporto
  "a3-gommone": "7/71/Zodiac_on_the_beach.jpg|2816",   // Gommone senza patente
  "a3-ombrellone-alassio": "2/22/Umbrellas_on_the_beach_of_Alassio_Liguria,_in_front_of_the_island_of_Gallinara_(40440430820).jpg|1036",   // Ombrellone in prima fila
  "a3-interrail": "d/dc/09.05.22_Trelleborg_Centralstation_X61_037,_X61_057_and_X61_047_(52093968846).jpg|5827",   // Interrail per un mese
  "a3-vacanza-due": "b/bf/Siracusa_vendicari.jpg|800",   // Una settimana di vacanza
  "a3-settimana-rimini": "b/b4/Rimini_Beach,_Italy_in_2016_(28357400314).jpg|4506",   // Settimana a Rimini
  "a3-cinema": "d/db/Cinema_Seats_I_(51830912465).jpg|4032",   // Biglietto del cinema (22 nov 2026, ripasso: biglietto del cinema: un edificio qualsiasi; prima Ptuj,_city_cinema.jpg)
  "a3-puzzle": "6/66/Jigsaw_puzzle_01_by_Scouten.jpg|4288",   // Puzzle da 1.000 pezzi
  "a3-carnevale-viareggio": "7/78/Carnevale_di_Viareggio.JPG|3264",   // Carnevale di Viareggio
  "a3-italia-miniatura": "9/93/Panoramica_italia_in_miniatura.jpg|640",   // Italia in Miniatura
  "a3-noleggio-sci": "e/e4/Ski_rental,_Tandådalen_03.jpg|4000",   // Noleggio sci e scarponi
  "a3-acquario-genova": "a/ae/Acquario_di_Genova_-_panoramio.jpg|2272",   // Acquario di Genova
  "a3-escape-room": "5/5f/Escape_Quest_-_The_Black_Widow_1.jpg|5000",   // Escape room (22 nov 2026, ripasso: escape room: due persone in primo piano; prima Tulleys_Farm_Outfitter_Escape_Room.jpg)
  "a3-oltremare": "3/35/Dolphinarium_at_Oltremare_-_Riccione_(Naturalistic-technological_theme_park).jpg|2960",   // Oltremare
  "a3-lucca-comics": "1/1a/Lucca_Comics_2009_-_04.jpg|3264",   // Lucca Comics
  "a3-juventus-museum": "0/02/Juventus_v_Real_Madrid,_Champions_League,_Stadium,_Turin,_2013.jpg|4608",   // Juventus Museum e stadio
  "a3-padel": "9/96/Padel_Tennis_Arena_ISPO_2014.jpg|3165",   // Campo da padel per un'ora
  "a3-magicland": "0/08/Parco-giochi-rainbow-magicland-valmontone-700x400.jpg|700",   // Magicland
  "a3-rafting": "7/77/Rafting_em_Brotas.jpg|1280",   // Discesa in rafting
  "a3-leolandia": "f/f3/Leolandia_2023_(32).jpg|4000",   // Leolandia
  "a3-mirabilandia": "c/ca/Mirabilandia_209.jpg|3968",   // Mirabilandia
  "a3-calcetto": "a/af/2017-08-04_Sports_field,_Caminho_Vale_da_Azinheira,_Olhos_de_Água_(2).JPG|4608",   // Campo da calcetto per un'ora
  "a3-curva-sud-roma": "5/5f/Stadio_Olimpico_2024.jpg|3384",   // Curva Sud all'Olimpico
  "a3-inter-san-siro": "6/6b/Milano_-_stadio_Giuseppe_Meazza_-_202209050049.jpeg|4028",   // Biglietto per vedere l'Inter
  "a3-palestra": "8/84/Health_club_in_Gothenburg_Sweden_in_March_2025.jpg|4000",   // Un mese di palestra (22 nov 2026, ripasso: Palestra scolastica con spalliere e basket: non è una palestra con attrezzi da…; prima Amsterdam_-_Gymnasium_-_0591.jpg)
  "a3-lezione-sci": "6/66/Maestrodisciclaviereinsegnando.jpg|2018",   // Lezione di sci privata
  "a3-concerto-san-siro": "1/17/Stadio_Meazza_2021_3.jpg|4728",   // Concerto a San Siro
  "a3-monza-prato": "0/05/Autodromo_Nazionale_di_Monza,_Italy_(Ank_Kumar)_06.jpg|6000",   // Gran Premio di Monza (22 nov 2026, ripasso: Gran Premio di Monza: solo una scritta WELCOME; prima Autodromo_Nazionale_di_Monza,_Italy_(Ank_Kumar)_01.jpg)
  "a3-paracadute": "4/45/Parachute_Descent.jpg|768",   // Lancio col paracadute
  "a3-arena-verona": "e/e2/Arena-XE3F2406a.jpg|5771",   // Opera all'Arena di Verona
  "a3-mongolfiera": "f/fd/Luftballong.jpg|1024",   // Volo in mongolfiera
  "a3-abbonamento-curva": "d/dc/San_Siro_MilanDerby6.jpg|4032",   // Abbonamento in curva
  "a3-hospitality-mugello": "7/71/Mugello_Circuit.jpg|3488",   // Hospitality al Mugello
  "a3-calciobalilla": "6/62/FAS_Foosball_table_1.jpg|1280",   // Calciobalilla Garlando
  "a3-fontana-trevi": "c/c7/Trevi_Fountain_-_Roma.jpg|8734",   // Biglietto per Fontana di Trevi
  "a3-pantheon": "7/7b/Pantheon_(Rome)_-_Right_side_and_front.jpg|7512",   // Biglietto del Pantheon
  "a3-colosseo": "d/de/Colosseo_2020.jpg|12051",   // Biglietto del Colosseo
  "a3-gardaland": "5/55/Fontata_Entrata_Gardaland.jpg|3264",   // Biglietto di Gardaland
  "a3-skipass-cortina": "e/ee/Dolomiti_Superski_Skipass.jpg|797",   // Skipass di un giorno
  "a3-giro-gondola": "2/20/Gondole_Venezia.JPG|2605",   // Giro in gondola
  "a3-finale-internazionali": "2/2d/Foro_Italico-Campo_Centrale_-_panoramio.jpg|4608",   // Finale degli Internazionali
  "a3-finale-sanremo": "7/72/Teatro_Ariston_Sanremo.jpg|5400",   // Finale di Sanremo
  "a3-elicottero-capri": "7/70/VH-SUF_Taking_Off.jpg|4262",   // Elicottero Napoli-Capri
  "a3-prima-scala": "0/04/Milano_-_Teatro_alla_Scala_3924.jpg|1920",   // La Prima della Scala
  "a3-luna-di-miele": "5/5d/Bush_and_beach._Eriyadu,_Maldives.jpg|5193",   // Luna di miele all'estero (22 nov 2026, ripasso: luna di miele: una coppia in primo piano; prima Happy_young_honeymoon_couple_having_fun_on_the_beach._Ocean,_tropical_vacation_on_Bali_i…)
  "a4-renault-clio": "1/1c/Renault_Clio_V_1X7A0392.jpg|5221",   // Renault Clio
  "a4-dacia-spring": "9/95/Dacia_Spring_1X7A0350.jpg|4970",   // Dacia Spring
  "a4-dacia-duster": "9/9b/Dacia_Duster_III_IMG_8961.jpg|5313",   // Dacia Duster
  "a4-fiat-grande-panda": "0/00/Fiat_Grande_Panda_E_DSC_8694.jpg|4883",   // Fiat Grande Panda ibrida
  "a4-toyota-aygo-x": "5/50/2022_Toyota_Aygo_X_Edge_1.0_VVT-i_(Front).jpg|3687",   // Toyota Aygo X
  "a4-vw-polo": "7/7d/Volkswagen_Polo_VI_(2021)_IMG_5322.jpg|5090",   // Volkswagen Polo
  "a4-lancia-ypsilon": "c/ce/Lancia_Ypsilon_BEV.jpg|4032",   // Lancia Ypsilon ibrida
  "a4-renault-5": "e/e4/Renault_5_E-Tech_Electric_DSC_7279.jpg|4504",   // Renault 5 elettrica
  "a4-fiat-600": "7/7f/Fiat_600_Hybrid_1.2_T3_Pop_(III)_–_f_24032026.jpg|4047",   // Fiat 600 Hybrid
  "a4-vw-golf": "8/8a/2020_Volkswagen_Golf_Style_1.5_Front.jpg|4946",   // Volkswagen Golf
  "a4-vw-t-roc": "1/11/VW_T-Roc_1.5_eTSI_Style_(II)_–_f_05052026.jpg|4077",   // Volkswagen T-Roc
  "a4-bmw-serie-1": "5/56/BMW_120_(F70)_Leonberg_2024_IMG_1068.jpg|5046",   // BMW Serie 1
  "a4-toyota-rav4": "1/1c/2025_Toyota_RAV4_Hybrid_Z.jpg|4443",   // Toyota RAV4
  "a4-vw-id-buzz": "4/4f/Volkswagen_ID._Buzz_1X7A6263.jpg|5663",   // Volkswagen ID. Buzz
  "a4-defender-90": "1/18/Land_Rover_Defender_90_(L663)_IMG_9441.jpg|4893",   // Land Rover Defender 90
  "a4-jeep-wrangler": "8/81/Jeep_Wrangler_Unlimited_(JL)_PHEV_IMG_5808.jpg|4842",   // Jeep Wrangler
  "a4-maserati-grecale": "5/57/Maserati_Grecale_GT_1X7A6371.jpg|5514",   // Maserati Grecale
  "a4-toyota-land-cruiser": "e/e8/2024_Toyota_Land_Cruiser_250_VX_in_Platinum_White_Pearl_Mica,_front_left.jpg|5212",   // Toyota Land Cruiser
  "a4-porsche-911": "1/12/2025_Porsche_992_Carrera_convertible_DSC_7026.jpg|4143",   // Porsche 911
  "a4-harley-nightster": "1/15/Harley-Davidson_Nightster_parked_at_Hogs_for_Hospice,_Leamington,_Ontario,_2025-08-02.jpg|5412",   // Harley-Davidson Nightster
  "a4-ducati-monster": "6/6c/Monster+_937_a.jpg|1490",   // Ducati Monster
  "a4-pinarello-dogma": "3/37/Pinarello_Dogma_F_Super_Record_EPS.jpg|1440",   // Pinarello Dogma F
  "a4-bmw-r12-ninet": "9/94/BMW_R_nineT_(MSP16).jpg|5456",   // BMW R 12 nineT
  "a4-bmw-r1300gs": "1/16/BMW_R_1300_GS_Adventure_Triple_Black_(1).jpg|3012",   // BMW R 1300 GS
  "a4-omega-moonwatch": "1/15/Speedmaster_(23456608783).jpg|4608",   // Omega Speedmaster Moonwatch
  "a4-rolex-submariner": "c/cd/Rolex-Submariner.jpg|550",   // Rolex Submariner Date (22 nov 2026, ripasso: Bracciale bicolore oro e acciaio tagliato: non è un Submariner in acciaio con quadrante…; prima Rolex_Submariner_watch_16613.JPG)
  "a4-galaxy-fold8": "b/b2/Samsung_Galaxy_Z_Fold_4.jpg|3024",   // Samsung Galaxy Z Fold8
  "a4-dji-mavic": "a/a8/DJI_-_Drohne_Mavic_4_Pro.JPG|5800",   // Drone DJI Mavic 4 Pro
  "a4-studio-display": "6/6f/Studio_Display_(2022).jpg|3495",   // Apple Studio Display XDR
  "a4-leica-q3": "8/84/A_Leica_Q3.jpg|5184",   // Fotocamera Leica Q3
  "a4-stanza-milano": "9/9c/Twin_Dolphin_Hall_new_studio_apartment_2.jpg|4624",   // Stanza singola in affitto
  "a4-mq-milano": "a/a2/Apartment_building_near_the_Duomo_in_Milan.jpg|4938",   // Un metro quadro di casa
  "a4-affitto-milano": "8/82/Milano_-_edificio_via_Giovanni_Pacini_60.JPG|768",   // Un anno d'affitto
  "a4-bocconi": "d/dc/Bocconi_Grafton_Building_Milan.jpg|5400",   // Un anno all'università Bocconi
  "a4-finale-champions": "e/e5/Puskás_Aréna_05.jpg|5472",   // Finale di Champions League
  "a4-olimpiadi": "1/17/Stadio_Meazza_2021_3.jpg|4728",   // Cerimonia d'apertura olimpica
  "a4-gibson-les-paul": "1/1c/Full_front_R9_Les_Paul.jpg|3520",   // Chitarra Gibson Les Paul
  "a4-park-guell": "8/86/Park_Güell_-_main_steps_and_Drac_02.jpg|6000",   // Biglietto del Park Güell
  "a4-alhambra": "d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg|4592",   // Biglietto dell'Alhambra
  "a4-louvre": "6/66/Louvre_Museum_Wikimedia_Commons.jpg|6740",   // Biglietto del Louvre
  "a4-acropoli": "d/da/The_Parthenon_in_Athens.jpg|1144",   // Biglietto dell'Acropoli
  "a4-torre-eiffel": "a/a8/Tour_Eiffel_Wikimedia_Commons.jpg|2900",   // Salita sulla Torre Eiffel
  "a4-dolomiti-superski": "7/7f/Marmolada_+_Sellaronda_tour_6.jpg|5400",   // Skipass di sei giorni
  "a1-v-matrimonio-puglia#0": "3/31/Wedding_photographer_at_work.jpg|5262",   // Fotografo per tutto il giorno
  "a1-v-matrimonio-puglia#1": "6/6f/Colorful_three_tiered_wedding_cake_LCP.jpg|2112",   // Torta nuziale a tre piani
  "a1-v-matrimonio-puglia#2": "7/77/Vintage_Car.jpg|3456",   // Auto d'epoca con autista
  "a1-v-matrimonio-puglia#3": "c/c4/Cacio_cavallo_with_slices.jpg|3888",   // Caciocavallo, 2 kg
  "a1-v-natale-famiglia#0": "f/fd/Honda_SH_125_JF41_.jpg|4160",   // Honda SH 125
  "a1-v-natale-famiglia#1": "9/98/Christmas_Dinner_Setting.jpg|3504",   // Pranzo di Natale per 12
  "a1-v-natale-famiglia#2": "d/d5/A1_Christmas_Tree_photo.jpg|2676",   // Abete vero, 2 metri
  "a1-v-natale-famiglia#3": "b/b6/Tombola.jpg|2080",   // Tombola con 48 cartelle
  "a1-v-diciotto-anni#1": "3/32/Wikipedia_space_ibiza(03).jpg|1000",   // Sala per la festa
  "a1-v-diciotto-anni#2": "5/57/Neapolitan_pizza_at_Trappica_(48701940197).jpg|3024",   // Pizze per 70 amici
  "a1-v-diciotto-anni#3": "f/f9/DJ_AnthonyB._at_the_turntables.jpg|1227",   // DJ per la festa
  "a1-v-diciotto-anni#4": "5/50/Congrats_bqt.jpg|639",   // Palloncini «1» e «8»
  "a1-v-anno-a-tavola#0": "f/f1/Stop&Shop.jpg|4032",   // La spesa di un anno
  "a1-v-anno-a-tavola#1": "7/7e/Beer_and_pizza_on_display_in_a_restaurant_on_a_rustic_table_with_focus_on_the_glass_of_beer.jpg|6016",   // Pizza e birra ogni sabato
  "a1-v-anno-a-tavola#2": "a/a3/Cuiller_en_bois_-_échelle.jpg|3995",   // Mestolo di legno
  "a1-v-sorriso#0": "c/c3/Invisalign_aligner.jpg|891",   // Apparecchio invisibile
  "a1-v-sorriso#1": "f/f2/Office_Teeth_Whitening.jpg|4000",   // Sbiancamento dei denti
  "a1-v-sorriso#2": "5/53/Dental_floss_(whole).jpg|800",   // Filo interdentale
  "a1-v-meglio-italia#0": "3/38/2003_Bolgheri_Sassicaia.jpg|2432",   // Dodici bottiglie di Sassicaia
  "a1-v-meglio-italia#1": "e/e5/Wheel_of_2013_Parmigiano-Reggiano_DOP.JPG|3264",   // Forma intera di Parmigiano
  "a1-v-meglio-italia#2": "5/5d/Aceto_Balsamico_Tradizionale_di_Modena_DOP_extravecchio.jpg|5908",   // Aceto balsamico tradizionale
  "a1-v-vivere-milano#1": "0/06/Aperol_Spritz_-_Santa_Ynez_Kitchen_-_Sarah_Stierch.jpg|4032",   // Uno spritz ogni venerdì
  "a1-v-vivere-milano#2": "2/20/Milaan_metro_2024_5.jpg|5472",   // Abbonamento annuale ai mezzi
  "a1-v-vivere-milano#3": "8/80/Photo_Booth_in_Malaga.jpg|4000",   // Quattro fototessere
  "a1-v-anno-bellezza#0": "c/ca/Spa_Picture_2.jpg|2100",   // Un massaggio a settimana
  "a1-v-anno-bellezza#1": "0/09/Hairdresser's_salon_in_Brastad_5.jpg|2938",   // La piega ogni sabato
  "a1-v-anno-bellezza#2": "9/9b/Young_men_with_trendy_haircut_at_barber_shop.jpg|4016",   // Barbiere ogni due settimane
  "a1-v-anno-bellezza#3": "1/15/Hairspray.JPG|1728",   // Bomboletta di lacca
  "a2-v-cucina#1": "8/85/LG_refrigerator_interior.jpg|2448",   // Frigorifero americano
  "a2-v-cucina#2": "8/82/Dishwasher_open_for_loading.jpg|1944",   // Lavastoviglie silenziosa
  "a2-v-cucina#3": "8/8e/Global_Knives.jpg|600",   // Ceppo di coltelli
  "a2-v-cucina#4": "c/ca/Preparing_the_Cake_(5285262061).jpg|4288",   // Grembiule col tuo nome
  "a2-v-bebe#1": "7/76/The_Nursery_Progresses..._-_Flickr_-_Kelly_Sue.jpg|450",   // Cameretta completa
  "a2-v-bebe#2": "3/38/Inglesina_Marco_Polo_car_seat.jpg|2871",   // Seggiolino auto girevole
  "a2-v-bebe#3": "b/b4/Giant_teddy_bear_with_hot_chocolate.jpg|2796",   // Orsetto gigante (22 nov 2026, ripasso: orsetto gigante: una persona accanto a un costume, non un peluche; prima Giant_Teddy_Bear.jpg)
  "a2-v-bebe#4": "9/96/Feeding-bottle--01.jpg|1942",   // Biberon, 3 pezzi
  "a2-v-gamer#0": "8/82/PlayStation_5_Pro_no_disc_drive.jpg|1536",   // PlayStation 5 Pro
  "a2-v-gamer#1": "d/d0/Samsung_OLED_TV.jpg|4500",   // TV OLED da 65 pollici
  "a2-v-gamer#2": "b/b2/Gaming_chair.jpg|3648",   // Sedia da gaming
  "a2-v-gamer#3": "d/df/Sony-WH-1000XM3-kabellose-Bluetooth-Noise-Cancelling-Kopfhoerer.3.jpg|4032",   // Cuffie da gaming (22 nov 2026, ripasso: Cuffia con filo da call center, non cuffie gaming senza fili.; prima Plantronics_headset.jpg)
  "a2-v-gamer#4": "2/2a/HP_mouse_and_mousepad_20060803.jpg|1280",   // Tappetino gigante
  "a2-v-guardaroba#0": "2/26/PAX_wardrobe_at_IKEA_Xihongmen_(20150423113022).jpg|3264",   // Armadio IKEA Pax
  "a2-v-guardaroba#1": "9/9e/Tailored_sport_coat_partial_lining.jpg|1600",   // Cappotto da sartoria (22 nov 2026, ripasso: Cappotto antico da museo appeso: sembra una giubba d'epoca, non un cappotto di sartoria…; prima Overcoat_MET_1973.65.1_B.jpg)
  "a2-v-guardaroba#2": "f/f8/TailoringFirstFitFront01.jpg|698",   // Abito da uomo su misura
  "a2-v-guardaroba#3": "e/eb/Black_Leather_Pumps_Worn_by_Bonnie_Blake_-_DPLA_-_12bcc989cf7708c987a7be7c19a640b9_(page_2).jpg|5792",   // Décolleté col tacco
  "a2-v-guardaroba#4": "b/b8/Wooden_coat_hangers.jpg|2992",   // Grucce di legno, 10
  "a2-v-nonno#0": "b/b4/Electric_Wheels_in_Fort_Lauderdale,_Florida.jpg|5451",   // Bici elettrica da città
  "a2-v-nonno#1": "9/98/Lift_Chairs.jpg|3120",   // Poltrona relax elettrica
  "a2-v-nonno#2": "0/02/Techwood_flat_screen_television_from_2010.jpg|4032",   // TV da 50 pollici
  "a2-v-nonno#4": "5/59/Scheda_LABIRINTO.jpg|541",   // La Settimana Enigmistica
  "a2-v-smart#0": "d/d7/MacBook_Pro_(14-inch,_M5,_Space_Black).jpg|5712",   // MacBook Pro 14 pollici
  "a2-v-smart#1": "9/9c/ErgoFlip_Active_Ergonomic_Chair_eye_view.jpg|854",   // Sedia ergonomica
  "a2-v-smart#2": "1/18/DiRT_Rally_を4K_HDでベンチマーク_-Lenovo_ThinkCentre_M75q-1_Tiny_+_135W_AC_Adapter-_(50065100496).jpg|4000",   // Monitor da 27 pollici
  "a2-v-smart#4": "b/b8/Mug_of_Tea.JPG|3072",   // Tazza «Sono in call»
  "a2-v-giardino#0": "1/10/Gasgrill_Weber_Q100.jpg|4480",   // Barbecue Weber a gas
  "a2-v-giardino#1": "6/62/Above_Ground_swimming_pool_-_4420.jpg|1600",   // Piscina fuori terra
  "a2-v-giardino#3": "a/ab/Garden_chairs_and_table,_Birkenhead_-_DSC09774.JPG|3648",   // Set da giardino
  "a2-v-giardino#4": "6/69/Mosquito_repellent_spiral.jpg|4032",   // Zampirone, 10 spirali (22 nov 2026, ripasso: Si vede una spirale verde ma su un fazzoletto rosso con stemma: confusa; ci sono pero…; prima Mosquito_coil.JPG)
  "a2-v-salotto#0": "4/46/A_brown_sofa_(2005-03-03).jpg|2048",   // Divano in pelle
  "a2-v-salotto#1": "b/bc/LG_LAS260B_Soundbar.jpg|4437",   // Soundbar col subwoofer
  "a2-v-salotto#2": "b/ba/Michele_de_lucchi_e_giancarlo_fassina_per_artemide,_lampada_da_tavolo_tolomeo,_1987.jpg|2088",   // Lampada Artemide Tolomeo (22 nov 2026, ripasso: Lampada da terra con paralume in un salotto, ma non la Tolomeo col braccio snodato;…; prima Floor_lamp_(5906).JPG)
  "a2-v-salotto#3": "f/f7/Interior_of_living_room_01.JPG|2816",   // Tavolino da salotto
  "a2-v-salotto#4": "1/16/Ficus_elastica_leaves_02.JPG|2304",   // Ficus in vaso grande
  "a3-v-estate-vespa#0": "d/d6/Vespa_Prima_125b.jpg|4032",   // Vespa Primavera 125 (22 nov 2026, ripasso: Vespa gialla d'epoca vecchio modello, non una Primavera 125 nuova blu.; prima Vespa_Primavera_125.jpg)
  "a3-v-estate-vespa#1": "8/82/Casque_Nolan_N21_Visor.jpg|3928",   // Casco Nolan N21 Visor
  "a3-v-estate-vespa#2": "6/68/Rimini_beach_umbrellas_at_night.jpg|4496",   // Ombrellone a Rimini
  "a3-v-estate-vespa#3": "f/f5/Petrol_pump_mp3h0355.jpg|3504",   // Il pieno della Vespa
  "a3-v-neve-cortina#0": "f/f3/Alfa_Romeo_Junior_Leonberg_2024_IMG_0970.jpg|4796",   // Alfa Romeo Junior
  "a3-v-neve-cortina#1": "e/ee/Dolomiti_Superski_Skipass.jpg|797",   // Skipass di un giorno
  "a3-v-neve-cortina#2": "6/66/Maestrodisciclaviereinsegnando.jpg|2018",   // Lezione di sci privata
  "a3-v-neve-cortina#3": "e/eb/Ski_rental,_Tandådalen_01.jpg|4000",   // Noleggio sci e scarponi
  "a3-v-gran-premio#0": "a/a8/Ducati_Panigale_V4_-_Tuning_World_Bodensee_2018,_Friedrichshafen_(OW1A0484).jpg|6720",   // Ducati Panigale V4
  "a3-v-gran-premio#2": "e/e8/Musée_Ferrari_Maranello_0007.JPG|1600",   // Museo Ferrari
  "a3-v-gran-premio#3": "c/c5/Wunderbaum.jpg|2272",   // Arbre Magique
  "a3-v-sportivo#0": "e/ee/Brompton,_Velo_24,_Berlin_(VB243556).jpg|6720",   // Bici pieghevole Brompton
  "a3-v-sportivo#1": "6/62/FAS_Foosball_table_1.jpg|1280",   // Calciobalilla Garlando
  "a3-v-sportivo#2": "1/17/Stadio_Meazza_2021_3.jpg|4728",   // Abbonamento in curva
  "a3-v-sportivo#4": "8/8a/Padel_court_Nsambya.jpg|4928",   // Campo da padel per un'ora
  "a3-v-avventura#0": "c/c2/Jeep_Avenger_1X7A0818.jpg|4975",   // Jeep Avenger
  "a3-v-avventura#1": "f/fd/Luftballong.jpg|1024",   // Volo in mongolfiera
  "a3-v-avventura#2": "4/45/Parachute_Descent.jpg|768",   // Lancio col paracadute
  "a3-v-avventura#3": "7/77/Rafting_em_Brotas.jpg|1280",   // Discesa in rafting
  "a3-v-moto-sogno#0": "5/5b/2020_Honda_CRF1100L_Africa_Twin_MT.jpg|2448",   // Honda Africa Twin (22 nov 2026, ripasso: Africa Twin d'epoca anni 90 in museo, non la moto nuova da 15.490 euro; prima Honda_Africatwin.jpg)
  "a3-v-moto-sogno#1": "8/82/Casque_Nolan_N21_Visor.jpg|3928",   // Casco Nolan N21 Visor
  "a3-v-moto-sogno#2": "a/a4/Chamonix_-_Mont_Blanc_Tunnel_Entrance.jpg|2346",   // Traforo del Monte Bianco
  "a3-v-moto-sogno#3": "f/f2/Swiss-motorway-road-tax-vignette.jpg|749",   // Vignetta svizzera
  "a3-v-moto-sogno#4": "3/33/Ducati_Superbike_1199_Superleggera_at_EICMA_2013_in_Milano,_Italy.jpg|2968",   // Biglietto per l'EICMA
  "a3-v-prima-auto#0": "c/cb/Fiat_Panda_1.0_Cross_Hybrid.jpg|1864",   // Fiat Pandina
  "a3-v-prima-auto#2": "e/e2/Un_dispositivo_Telepass_edizione_2022.jpg|3578",   // Telepass per un anno
  "a3-v-prima-auto#3": "6/6f/Parking_Meter_Front.JPG|800",   // Un'ora sulle strisce blu
  "a4-v-fuorisede#0": "f/fd/Universita_Bocconi_Ceppo_di_Gre.jpg|1024",   // Un anno all'università Bocconi
  "a4-v-fuorisede#1": "9/9c/Twin_Dolphin_Hall_new_studio_apartment_2.jpg|4624",   // Dieci mesi di stanza singola
  "a4-v-fuorisede#2": "3/39/MacBook_Air_(13-inch,_M4,_Silver).jpg|5712",   // MacBook Air 13 pollici
  "a4-v-fuorisede#3": "9/94/Laundromat_Washing_Machines_&_Laundry_Equipment.jpg|4624",   // Lavatrice a gettone, 8 kg
  "a4-v-parigi#0": "8/84/A_Leica_Q3.jpg|5184",   // Fotocamera Leica Q3
  "a4-v-parigi#1": "a/a8/DJI_-_Drohne_Mavic_4_Pro.JPG|5800",   // Drone DJI Mavic 4 Pro
  "a4-v-parigi#2": "a/a8/Tour_Eiffel_Wikimedia_Commons.jpg|2900",   // Salita sulla Torre Eiffel
  "a4-v-parigi#3": "9/9b/Mona_Lisa_crowd.jpg|2762",   // Biglietto del Louvre
  "a4-v-rockstar#0": "1/1c/Full_front_R9_Les_Paul.jpg|3520",   // Chitarra Gibson Les Paul
  "a4-v-rockstar#1": "1/1a/Harley-Davidson_Museum_May_2024_30_(2024_Nightster).jpg|6000",   // Harley-Davidson Nightster
  "a4-v-rockstar#2": "2/22/Ray-Ban,_New_Wayfarer_-_4.jpg|8600",   // Ray-Ban Wayfarer
  "a4-v-rockstar#3": "b/b6/12in-Vinyl-LP-Record-Angle.jpg|4000",   // Disco in vinile
  "a4-v-campioni#0": "e/e5/Puskás_Aréna_05.jpg|5472",   // Finale di Champions League
  "a4-v-campioni#2": "c/cd/Rolex-Submariner.jpg|550",   // Rolex Submariner Date (22 nov 2026, ripasso: Rolex Submariner: solo un pezzo di cinturino bicolore (come la 477); prima Rolex_Submariner_watch_16613.JPG)
  "a4-v-campioni#3": "9/97/Uzbekistan_national_football_team_supporter.jpg|3024",   // Sciarpa della squadra
  "a4-v-collezionista#1": "3/3b/Moonwatch_(24023224706).jpg|3456",   // Omega Speedmaster Moonwatch
  "a4-v-collezionista#2": "6/6f/Studio_Display_(2022).jpg|3495",   // Apple Studio Display XDR
  "a4-v-collezionista#3": "f/f2/Tamagotchi_0124_ubt.jpeg|900",   // Tamagotchi
  // ---- le vetrine nuove (data/prezzo-5.js e prezzo-6.js, 23 ott 2026): scelte a occhio come le altre ----
  "a5-v-maldive#0": "8/82/MaldivesBungalows.jpg|3024",   // Una settimana in villa sull'acqua
  "a5-v-maldive#1": "4/48/Cathay_Pacific_-_A330-300_-_Business_Class_(8108289508).jpg|4608",   // Due voli in business per Malé
  "a5-v-maldive#2": "3/30/Dharavandhoo_Thila_-_Manata_Black_Pearl.JPG|1029",   // Immersione con le mante
  "a5-v-maldive#3": "b/bd/LRP_sunscreen_bottle.jpg|1872",   // Crema solare SPF 50
  "a5-v-laurea#1": "9/9d/ForbysIbizaTown_03.jpg|1280",   // Viaggio a Ibiza con gli amici
  "a5-v-laurea#2": "3/30/Corona_alloro_laurea.JPG|6000",   // Tre copie della tesi rilegate
  "a5-v-laurea#3": "6/60/LaurelwreathDK.JPG|1704",   // Corona d'alloro
  "a5-v-laurea#4": "e/e8/Confetti_rossi.jpg|1024",   // Confetti rossi, un chilo
  "a5-v-prima-casa#0": "2/2f/IKEA_store,_IKEA_kitchen,_Interior_design,_Rostov-on-Don,_Russia.jpg|6000",   // Cucina IKEA completa
  "a5-v-prima-casa#1": "a/a7/Legal_Contract_&_Signature_-_Warm_Tones.jpg|6000",   // Il rogito dal notaio
  "a5-v-prima-casa#2": "6/60/Lotte_Heaven._(2185651031).jpg|2496",   // Letto matrimoniale col materasso
  "a5-v-prima-casa#3": "d/db/Zerbino_format.jpg|2187",   // Zerbino «Benvenuti»
  "a5-v-camper#0": "a/ae/White_Fiat_Ducato_Campervan_2006.jpg|2918",   // Camper a noleggio, due settimane
  "a5-v-camper#2": "3/3f/WaynePump-sm.jpg|720",   // Il pieno del camper
  "a5-v-camper#3": "f/f9/Camping_breakfast_table.JPG|2448",   // Tavolino e sedie pieghevoli
  "a5-v-camper#4": "6/6e/Camping-987707_960_720(1).jpg|960",   // Una notte in campeggio
  "a5-v-crociera#0": "6/66/Icon_of_the_Seas_Puerto_Rico_2025_(cropped).jpg|4947",   // Sette notti in crociera, per due
  "a5-v-crociera#1": "8/80/15-09-26-RalfR-WLC-0084.jpg|2368",   // Pacchetto bevande per due
  "a5-v-crociera#2": "a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_(14220794964).jpg|4928",   // Escursione ad Atene
  "a5-v-crociera#3": "a/ae/Jacques-louis_david,_marte_disarmato_da_venere,_1824,_picture_frame.png|2111",   // Foto della cena di gala
  "a5-v-pizzaiolo#0": "e/eb/Fernbrake.jpg|940",   // Forno a legna da giardino
  "a5-v-pizzaiolo#1": "6/6e/Punch_Neapolitan_Pizza_(2257039638).jpg|2800",   // Corso da pizzaiolo
  "a5-v-pizzaiolo#2": "6/69/Pizza_peel,_930544_002.jpg|8688",   // Pala per pizza
  "a5-v-pizzaiolo#3": "b/b4/Piles_of_Flour.jpg|3024",   // Farina per pizza, 25 kg
  "a5-v-pizzaiolo#4": "d/d5/Mozzarella_di_bufala2.jpg|4160",   // Mozzarella di bufala, 1 kg
  "a5-v-caffe#0": "5/59/Rocket_silver_metal_espresso_machine_on_table.jpg|1200",   // Macchina espresso La Marzocco
  "a5-v-caffe#2": "c/c5/Roasted_coffee_beans.jpg|1600",   // Caffè in grani, 1 kg
  "a5-v-caffe#3": "4/4f/Moka_Express_Bialetti.png|1126",   // Moka Bialetti da 3 tazze
  "a5-v-eolie#0": "3/39/Thor_8.0,_Interboot_2023,_Friedrichshafen_(P1120662).jpg|4608",   // Gommone con motore da 40 cavalli
  "a5-v-eolie#1": "c/c6/Chiesa_San_Giuseppe_(Lipari)_04.jpg|4986",   // Ormeggio per una settimana
  "a5-v-eolie#2": "1/1d/Universal_Life_Jacket.JPG|499",   // Quattro giubbotti salvagente
  "a5-v-eolie#3": "6/6e/Lipari._Colazione_da_'Dolci_Tentazioni'_(01297).JPG|6000",   // Granita alla mandorla
  "a5-v-vela#0": "c/cf/Dufor_520_GL.jpg|5152",   // Barca a vela con skipper
  "a5-v-vela#1": "c/c9/Sailing_club_and_school_Sutton_Bingham_reservoir_-_geograph.org.uk_-_942140.jpg|640",   // Corso di vela
  "a5-v-vela#3": "4/4e/Fala-Sailor-Cap-1943.jpg|750",   // Cappellino da marinaio
  "a5-v-giardino#0": "3/3e/Husqvarna_automower_430X.jpg|4032",   // Robot tagliaerba Husqvarna
  "a5-v-giardino#1": "1/1a/The_Small_Greenhouse,_Quarry_Bank_Mill_Upper_Garden_-_geograph.org.uk_-_3000457.jpg|640",   // Serra da giardino
  "a5-v-giardino#2": "e/e7/Phaseolus_vulgaris_seed.jpg|252",   // Semi per l'orto, 30 bustine
  "a5-v-giardino#3": "6/6b/Regadera,_jardín_del_molino,_Sierra_de_San_Felipe,_Setúbal,_Portugal,_2012-05-11,_DD_01.JPG|4085",   // Annaffiatoio di latta
  "a5-v-palestra#0": "1/1f/Treadmill_from_Viking_Sport,_front.jpg|2952",   // Tapis roulant per casa
  "a5-v-palestra#1": "8/84/Health_club_in_Gothenburg_Sweden_in_March_2025.jpg|4000",   // Un anno in palestra
  "a5-v-palestra#2": "e/e3/TwoDumbbells.JPG|573",   // Dieci lezioni col personal trainer
  "a5-v-palestra#3": "4/40/Fitness_digital_scale_weight_loss_(33837094584).jpg|5616",   // Bilancia smart
  "a5-v-palestra#4": "1/1b/Osaka_protein_shaker.jpg|600",   // Shaker per le proteine
  "a5-v-ciclista#0": "0/0e/2018_Tour_Series_-_Bianchi_bicycles.jpg|4896",   // Bici da corsa Bianchi in carbonio (21 nov 2026: prima era una Pinarello grigia)
  "a5-v-ciclista#1": "f/f1/Garmin_Edge_1040_Solar_07.jpg|2268",   // Ciclocomputer Garmin Edge
  "a5-v-ciclista#2": "6/60/Cycling_bib_shorts_front.jpg|3024",   // Maglia e salopette
  "a5-v-ciclista#3": "b/b8/Tour_de_France_Femmes_2025_-_Tour_cyclosportive_-_La_Chambre.JPG|2048",   // Iscrizione a una granfondo
  "a5-v-ciclista#4": "0/07/Multi-use_water_bottle.JPG|1024",   // Borraccia
  "a5-v-maratona#0": "7/72/Verrazano_Bridge2.jpg|2224",   // Viaggio con il pettorale
  "a5-v-maratona#1": "3/36/Forerunner_945_Music.jpg|2064",   // Orologio Garmin Forerunner
  "a5-v-maratona#2": "8/8b/Asics_Gel-Cumulus_22.jpg|4668",   // Scarpe da corsa in carbonio
  "a5-v-maratona#3": "3/3e/PXL_20211208_195048218(6970).jpg|2268",   // Gel energetici, 10 bustine
  "a5-v-golf#0": "3/3d/Golf_course,_Italy_-_20070620.jpg|1024",   // Un anno al golf club
  "a5-v-golf#1": "c/cc/Golf_bag_and_clubs.jpg|4608",   // Sacca con le mazze
  "a5-v-golf#2": "b/b0/Riverwalk_Golf_Club_Driving_range.jpg|2560",   // Dieci ore col maestro
  "a5-v-golf#3": "b/ba/Golf_balls_kallerna.JPG|2500",   // Palline da golf, 12
  "a5-v-tennis#0": "4/4a/Tennis_Racquets_and_Balls_on_a_Clay_Court.jpg|3246",   // Un anno di lezioni di tennis
  "a5-v-tennis#1": "7/76/Il_Centrale_(108607831).jpeg|2048",   // Due biglietti per gli Internazionali
  "a5-v-tennis#2": "5/59/Tennis_racket_and_ball.JPG|2816",   // Racchetta Babolat Pure Drive
  "a5-v-tennis#3": "2/28/Cmglee_tennis_balls.jpg|3072",   // Tubo di palline
  "a5-v-roma#0": "3/34/Roma_Via_Veneto.jpg|1024",   // Tre notti in una suite in via Veneto
  "a5-v-roma#1": "b/b8/PerthVespa.jpg|2272",   // Tour in Vespa per Roma
  "a5-v-roma#2": "d/de/Colosseo_2020.jpg|12051",   // Biglietto del Colosseo
  "a5-v-roma#3": "5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg|4336",   // Biglietto dei Musei Vaticani
  "a5-v-roma#4": "b/bb/Supplì_al_telefono.jpg|1000",   // Supplì
  "a5-v-venezia#0": "5/5b/Palazzo_Genovese_facciata_Canal_Grande_Venezia.jpg|7360",   // Tre notti di lusso sul Canal Grande
  "a5-v-venezia#1": "f/f4/Venice_Gondola_Grand_Canal.jpg|2580",   // Giro in gondola
  "a5-v-venezia#2": "c/ca/Venice_Carnival_-_Masked_Lovers_(2010).jpg|3504",   // Maschera fatta a mano
  "a5-v-venezia#3": "6/66/Bellini_cocktail_in_a_flute-glass.png|600",   // Bellini all'Harry's Bar
  "a5-v-venezia#4": "7/75/Venezia_Vaporetto_ACTV43_R01.jpg|4462",   // Vaporetto per 24 ore
  "a5-v-firenze#0": "a/a3/Leather_handbag_by_Les_cuirs_d'Agathe_(DSC07738).jpg|4426",   // Borsa di pelle fatta a mano
  "a5-v-firenze#1": "1/12/Bistecca_alla_fiorentina-01.jpg|875",   // Bistecca alla fiorentina
  "a5-v-firenze#2": "d/d7/Florence,_Italy_-_panoramio_(125).jpg|3456",   // Biglietto degli Uffizi
  "a5-v-firenze#3": "4/49/Villa_Castellani_Empoli.jpg|1200",   // Una settimana in villa nel Chianti
  "a5-v-firenze#4": "1/1c/Lampredotto_sandwich.JPG|2648",   // Panino col lampredotto
  "a5-v-sicilia#0": "5/5b/Aerial_image_of_the_coast_of_Taormina_(view_from_the_southeast).jpg|5568",   // Villa con piscina a Taormina
  "a5-v-sicilia#1": "f/ff/1992_Agrigento_street_Fiat_500_Sicily_Sicilia_Italy.jpg|2344",   // Auto a noleggio, due settimane
  "a5-v-sicilia#2": "e/ea/NAS_Sigonella_Backed_by_Mount_Etna_(6473839).jpg|5834",   // Escursione sull'Etna in fuoristrada
  "a5-v-sicilia#3": "4/4b/16.11.95_Between_Messina_&_Villa_San_Giovanni_mv_\"Scilla\"_(12788799193).jpg|1506",   // Traghetto sullo Stretto
  "a5-v-sicilia#4": "1/14/Cannolo_siciliano_with_chocolate_squares.jpg|800",   // Cannolo siciliano
  "a5-v-napoli#0": "3/3d/Amalfi_Coast_(Italy,_October_2020)_-_75_(50558355441).jpg|5445",   // Una settimana in Costiera Amalfitana
  "a5-v-napoli#1": "7/71/Stadio_Maradona_Serie_A.jpg|3561",   // Biglietto per vedere il Napoli
  "a5-v-napoli#2": "c/c1/Aliscafo_in_velocità.jpg|3896",   // Gita a Capri in aliscafo
  "a5-v-napoli#3": "f/fd/CornicelloCharm.jpg|853",   // Corno portafortuna
  "a5-v-napoli#4": "5/57/Neapolitan_pizza_at_Trappica_(48701940197).jpg|3024",   // Pizza margherita
  "a5-v-sardegna#0": "7/76/Costa_Smeralda_veduta_panoramica_2.png|1920",   // Villa in Costa Smeralda
  "a5-v-sardegna#1": "b/bd/DFDS_Transmanche_Ferry_loading_at_Newhaven_Harbour.jpg|4096",   // Traghetto con l'auto
  "a5-v-sardegna#2": "2/2c/Strand_in_Borsh.jpg|600",   // Ombrellone in prima fila
  "a5-v-sardegna#3": "8/8c/SeadasCA.jpg|899",   // Seadas col miele
  "a5-v-giappone#0": "c/ca/Airplane_on_the_bridge,_Haneda_airport_-_Sep_11,_2010.jpg|4155",   // Due voli per Tokyo
  "a5-v-giappone#1": "2/27/Tamatsukuri_onsen_yado02s3648.jpg|4592",   // Notte in un ryokan
  "a5-v-giappone#2": "3/35/Mount_Fuji_and_Bullet_Train_view_location.jpg|4032",   // Japan Rail Pass di 7 giorni
  "a5-v-giappone#3": "f/f0/Shoyu_ramen,_at_Kasukabe_Station_(2014.05.05)_2.jpg|3264",   // Ciotola di ramen
  "a5-v-new-york#0": "4/47/New_york_times_square-terabass.jpg|3904",   // Cinque notti a Manhattan
  "a5-v-new-york#1": "3/3c/Cathay_Pacific_Boeing_777-200;_B-HNL@HKG.jpg|3038",   // Volo per New York
  "a5-v-new-york#2": "c/cd/Various_Pictures_from_New_York_City_-_September,_2025.jpg|4000",   // Biglietto per un musical
  "a5-v-new-york#3": "c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg|756",   // Salita sull'Empire State Building
  "a5-v-new-york#4": "b/b1/Hot_dog_with_mustard.png|2562",   // Hot dog dal carretto
  "a5-v-pianista#0": "0/0b/Yamaha_U1.jpg|1024",   // Pianoforte verticale Yamaha
  "a5-v-pianista#1": "f/f2/Piano-keyboard.jpg|800",   // Un anno di lezioni di pianoforte
  "a5-v-pianista#2": "5/5b/Fortepian_Calisia_M-280.jpg|4608",   // Panchetta regolabile
  "a5-v-pianista#3": "1/18/Metronomes_101.jpgsubstantially_substrate_supply_surface_switch.jpg|1200",   // Metronomo
  "a5-v-dj#0": "2/2f/DJM_350.jpg|1923",   // Console Pioneer DJ
  "a5-v-dj#1": "0/0e/Electrodynamic-loudspeaker.png|524",   // Due casse attive
  "a5-v-dj#2": "0/00/Słuchawki_referencyjne_K-701_firmy_AKG.jpg|1881",   // Cuffie da DJ
  "a5-v-dj#3": "6/62/Disco_ball.jpg|223",   // Palla stroboscopica
  "a5-v-streamer#0": "0/04/MSI-Gaming-PC_2024-09-30.png|3840",   // PC da gaming
  "a5-v-streamer#1": "f/fc/Shure_SM7.jpg|3024",   // Microfono Shure SM7B
  "a5-v-streamer#2": "0/0c/Logicool_StreamCam_(cropped).jpg|2300",   // Webcam 4K
  "a5-v-streamer#3": "d/de/Ring_light_in_Torp_shopping_mall,_Uddevalla.jpg|3247",   // Luce ad anello
  "a5-v-cinema#0": "c/cb/Leica_Cine_Compact_1_4K-Projector.jpg|5000",   // Proiettore 4K
  "a5-v-cinema#1": "b/b5/Home_Theater.jpg|6000",   // Impianto audio 5.1
  "a5-v-cinema#2": "2/2f/Sala_de_cine.jpg|4128",   // Telo motorizzato da 120 pollici
  "a5-v-cinema#3": "e/e2/LG_smart_TV.jpg|1700",   // Un anno di Netflix Premium
  "a5-v-cinema#4": "9/99/Popcorn_Pumper_1.JPG|763",   // Macchina per i popcorn
  "a5-v-lettore#0": "d/df/Interior_of_Bibliothèque_Mazarine_003.JPG|2848",   // Libreria a muro su misura
  "a5-v-lettore#1": "b/b5/Easy_chair,_probably_Boston,_Massachusetts,_1760-1780,_mahogany,_soft_maple,_reproduction_wool_upholstery_-_Winterthur_Museum_-_DSC01384.JPG|3573",   // Poltrona da lettura
  "a5-v-lettore#2": "4/45/2023_Amazon_Kindle_Paperwhite_(2).jpg|3955",   // Kindle Paperwhite
  "a5-v-lettore#3": "7/76/Bookmark_-_DPLA_-_7d3502bb67b3bcf1c200c73a297e8eeb.jpg|3044",   // Segnalibro in pelle
  "a5-v-chef#0": "8/8b/Tournedos_Rossini_with_Truffle_Madeira_Sauce.jpg|4000",   // Cena per due in un tre stelle
  "a5-v-chef#1": "f/f8/Nakiri.jpg|6000",   // Set di coltelli giapponesi
  "a5-v-chef#2": "7/75/Tuber_magnatum.jpg|3072",   // Tartufo bianco d'Alba, 50 g
  "a5-v-chef#3": "1/1c/Preparing_Sushi_with_Chef_Eviatar_Churi_in_4Chef_Culinary_School_kitchen,_Israel.jpg|2657",   // Corso di cucina con uno chef
  "a5-v-sommelier#0": "5/58/Mindful_wine_tasting_-_February_2023_-_Sarah_Stierch_02.jpg|4032",   // Corso da sommelier, primo livello
  "a5-v-sommelier#1": "5/5c/Brunello_di_Montalcino,_Tuscany,_Italy_(5867744955).jpg|3456",   // Sei bottiglie di Brunello di Montalcino
  "a5-v-sommelier#2": "7/76/Dom_Perignon_1999.jpg|1875",   // Champagne Dom Pérignon
  "a5-v-sommelier#4": "8/8f/Kellnermesser_p1000026.jpg|1902",   // Cavatappi da sommelier
  "a5-v-gelato#0": "d/d6/Gelato_ice_cream.jpg|5248",   // Corso da gelatiere
  "a5-v-gelato#1": "3/35/EismaschineBoku_(cropped).JPG|1495",   // Gelatiera col compressore
  "a5-v-gelato#2": "1/12/Ice_cream_push_cart_at_indoor_event_venue_California.jpg|2258",   // Carretto dei gelati d'epoca
  "a5-v-gelato#3": "d/da/Strawberry_ice_cream_cone_(5076899310).jpg|524",   // Un cono da tre gusti
  "a5-v-nonna#0": "7/78/Thermomix_2014.jpg|1180",   // Bimby TM7
  "a5-v-nonna#1": "4/42/Red_KitchenAid_Artisan.jpg|2351",   // Planetaria KitchenAid
  "a5-v-nonna#2": "0/04/Pierogi,_Gniezno,_Polonia1.jpg|3421",   // Spianatoia e mattarello
  "a5-v-nonna#3": "4/42/Tortellini_Bolognesi.jpg|2592",   // Tortellini fatti a mano, 1 kg
  "a5-v-pulizie#1": "4/4e/Vorwerk_Folletto_VK136.jpg|450",   // Folletto Vorwerk
  "a5-v-pulizie#2": "f/f5/Roomba_original.jpg|800",   // Robot aspirapolvere
  "a5-v-pulizie#3": "b/b0/BroomsforSale.jpg|948",   // Scopa di saggina
  "a5-v-bucato#0": "a/a1/Whirlpool_Cabrio_Dryer.jpg|2268",   // Asciugatrice a pompa di calore
  "a5-v-bucato#1": "e/ec/LG_드럼세탁기와_식기세척기,_영국서_물사용_효율_최우수_제품_수상.jpg|770",   // Lavatrice da 9 kg
  "a5-v-bucato#2": "9/9f/Electric_steam_iron.jpg|4301",   // Ferro da stiro con caldaia
  "a5-v-bucato#3": "6/6b/Mini_Clothespins_-_Flickr_-_places_lost.jpg|1920",   // Mollette, 50 pezzi
  "a5-v-casa-smart#0": "a/a1/Three_Surveillance_cameras.jpg|1815",   // Impianto d'allarme con le telecamere
  "a5-v-casa-smart#1": "0/05/Nest_Diamond_Thermostat.jpg|768",   // Termostato smart
  "a5-v-casa-smart#2": "8/88/Nest_Yale_(cropped).jpg|1590",   // Serratura smart
  "a5-v-casa-smart#3": "e/e6/Amazon_Echo_Plus_02.jpg|5184",   // Altoparlante Amazon Echo
  "a5-v-casa-smart#4": "1/11/Las_Vegas_Convention_Center_Loop.jpeg|5358",   // Lampadine smart, 4 pezzi
  "a5-v-bagno#0": "7/7e/EFTA00000038_-_Modern_bathroom_featuring_a_white_sink_cabinets_and_a_glass_shower_enclosure_with_tiled_floor.jpg|768",   // Rifare il bagno
  "a5-v-bagno#1": "6/6f/Ducha_largando_agua.jpg|4032",   // Box doccia in cristallo
  "a5-v-bagno#2": "a/a2/Bademantel.JPG|306",   // Accappatoio morbido
  "a5-v-bagno#3": "8/85/Yellow_Rubber_Duck.jpg|4080",   // Paperella di gomma
  "a6-v-cane#0": "7/71/Dog_food_in_a_bowl.jpg|2096",   // Un anno di crocchette buone
  "a6-v-cane#1": "a/a0/Military_Working_Dog_Training_in_Germany_(6056710).jpg|10800",   // Corso di educazione cinofila
  "a6-v-cane#2": "4/4a/Pet_Microchip_Injection_and_Scanner_(17400108206).jpg|3264",   // Vaccini e microchip
  "a6-v-cane#3": "7/7e/Cindy_(25582240224).jpg|5472",   // Recinto e casetta in giardino
  "a6-v-cane#4": "9/94/DSC09611a_Search_and_Rescue_Dog,_Austrian_Red_Cross_Perchtoldsdorf,_2024-10.jpg|3195",   // Guinzaglio e collare
  "a6-v-gatto#0": "3/39/Gastrointestinal_Haiball_cat_dry_food_(Royal_Canin).jpg|4032",   // Un anno di cibo umido
  "a6-v-gatto#1": "f/f7/Japanese_litter_box.jpg|3216",   // Lettiera autopulente
  "a6-v-gatto#2": "4/43/Lotus-Espresso-Full-Final-window-a.jpg|2336",   // Albero tiragraffi gigante
  "a6-v-gatto#3": "1/1a/Mindy_Mouse_cat_toy.jpg|400",   // Topolino giocattolo
  "a6-v-gatto#4": "d/d1/Surgery_performed_on_a_domestic_cat.jpg|5184",   // Un anno di veterinario
  "a6-v-acquario#0": "a/a8/Amaterske_akvarium.jpg|1885",   // Acquario da 300 litri
  "a6-v-acquario#1": "9/97/Neonsalmler_Paracheirodon_innesi.jpg|3000",   // Venti pesci tropicali
  "a6-v-acquario#2": "e/e7/58g_aquascape.jpg|550",   // Piante e sassi per il fondo
  "a6-v-cavallo#0": "7/73/Horse_stable_-_Middletown.jpg|3548",   // Un anno di pensione per un cavallo
  "a6-v-cavallo#1": "c/c5/Showjumping.JPG|2272",   // Venti lezioni di equitazione
  "a6-v-cavallo#2": "b/b4/Fieldboots.jpg|1500",   // Stivali da equitazione e casco
  "a6-v-cavallo#3": "f/f0/Sardined_Carrots.jpg|4032",   // Un sacco di carote
  "a6-v-sposa#0": "1/12/Wedding_gown_with_a_bow.jpg|3072",   // Abito da sposa (22 nov 2026, ripasso: abito da sposa: scura, una donna alla finestra (come la 137); prima Bride_north_america.jpg)
  "a6-v-sposa#1": "c/ce/Fede_nuziale_Classica.jpg|939",   // Due fedi nuziali in oro
  "a6-v-sposa#2": "b/bc/Cosmetics.JPG|640",   // Trucco e acconciatura
  "a6-v-sposa#3": "0/06/Wedding_bouquet_white_roses.jpg|958",   // Bouquet della sposa
  "a6-v-sposa#4": "6/6e/Uncooked_ST25_rice_on_bamboo_surface.jpg|2633",   // Riso da lanciare, 1 kg
  "a6-v-nubilato#0": "e/ef/SF_maig_2_cropped.jpg|1227",   // Voli e due notti per sei amiche
  "a6-v-nubilato#1": "a/a2/Flamenco_en_el_Palacio_Andaluz,_Sevilla,_España,_2015-12-06,_DD_02.JPG|6211",   // Spettacolo di flamenco, per sei
  "a6-v-nubilato#2": "9/93/WIN_t-shirt.JPG|1665",   // Sei magliette uguali
  "a6-v-nubilato#3": "d/d8/Évrard_e_frédéric_bapst,_diadema_della_duchessa_d'anguoleme,_smeraldi,_diamanti,_oro_e_argento,_parigi_1819-20.jpg|2452",   // Coroncina col velo
  "a6-v-halloween#0": "1/17/Castelul_Bran2.jpg|3791",   // Viaggio in Transilvania, per due
  "a6-v-halloween#1": "a/a5/Entrance_of_Gardaland.jpg|500",   // Gardaland Magic Halloween
  "a6-v-halloween#3": "9/90/Colorful_candy.jpg|3088",   // Caramelle, 2 kg
  "a6-v-halloween#4": "5/53/Balle-à-leunettes_10.jpg|708",   // Zucca gigante
  "a6-v-carnevale#0": "4/4b/Desfile_Portela_2014_(906185).jpg|4256",   // Viaggio al Carnevale di Rio, per due
  "a6-v-carnevale#1": "e/e4/SAND_Maurice_Masques_et_bouffons_01.jpg|579",   // Costume da Arlecchino
  "a6-v-carnevale#2": "9/9a/Carnevaleviareggio.jpg|360",   // Biglietto per i corsi mascherati
  "a6-v-carnevale#3": "7/79/Faworki_(close-up).jpg|1152",   // Un vassoio di chiacchiere
  "a6-v-carnevale#4": "1/19/Confetti_au_Moma.jpg|867",   // Coriandoli e stelle filanti
  "a6-v-capodanno#0": "a/a6/Ormont-Dessus,_Vers-L'Eglise,_route_de_Brison_2.jpg|4560",   // Tre notti in baita
  "a6-v-capodanno#1": "1/11/Hanabi_in_Adachi-ku1.jpg|2468",   // Cenone di Capodanno per due
  "a6-v-capodanno#2": "1/1a/Franciacorta_milledi.jpg|1639",   // Franciacorta
  "a6-v-capodanno#3": "0/0c/Cotechino-Servito-Polenta-Lenticchie.jpg|1435",   // Cotechino e lenticchie
  "a6-v-pasqua#0": "f/f7/Acquanegra_sul_Chiese-Oasi_Le_Bine.JPG|3770",   // Pranzo di Pasqua in agriturismo
  "a6-v-pasqua#1": "6/6a/Grilling_sausages_empanadas_barbecue_charcoal.jpg|1000",   // Grigliata di Pasquetta per dieci
  "a6-v-pasqua#2": "e/ec/Easter_egg_with_foil.jpg|1739",   // Uovo di cioccolato gigante
  "a6-v-pasqua#3": "e/ee/Colomba_pasquale,_edizione_2013_-_ND0_4662_(8564331585).jpg|5184",   // Colomba artigianale
  "a6-v-pasqua#4": "2/2b/Sevilla_Cathedral_-_Southeast.jpg|3900",   // Settimana Santa a Siviglia, per due
  "a6-v-ferragosto#0": "6/68/La_costa_di_Riccione.jpg|1920",   // Una settimana a Riccione
  "a6-v-ferragosto#1": "2/2c/Strand_in_Borsh.jpg|600",   // Ombrellone per tutta l'estate
  "a6-v-ferragosto#2": "2/2f/DFC_1862_Two_colorful_inflatable_pool_floats_-_a_pink_flamingo_and_a_green_turtle_-_resting_on_the_sandy_shore_as_gentle_waves_lap_nearby.jpg|5568",   // Materassino a fenicottero
  "a6-v-ferragosto#3": "5/50/Pedalo_with_slide.jpg|1600",   // Pedalò per un'ora
  "a6-v-ferragosto#4": "4/40/Watermelons.jpg|1061",   // Anguria
  "a6-v-san-valentino#0": "a/ae/Promise_ring_in_casket.JPG|1200",   // Anello con diamante
  "a6-v-san-valentino#1": "f/fb/DZ6_2628_Cozy_candlelit_dinner_for_two_elegant_Thai_restaurant_setting_with_twinkling_lights_and_a_delicate_orchid_centerpiece.jpg|6048",   // Cena romantica per due
  "a6-v-san-valentino#2": "6/64/BEAUTIFUL_RED_ROSES.jpg|2448",   // Dodici rose rosse
  "a6-v-san-valentino#3": "a/a6/Baci_perugina.jpg|2400",   // Scatola di Baci Perugina
  "a6-v-mamma#0": "e/e2/Dyson_Supersonic_Hair_Dryer_1_2017-01-28.jpg|3024",   // Asciugacapelli Dyson Supersonic
  "a6-v-mamma#1": "0/0c/Charm_Bracelet_made_by_SF_Bay_Area_Silver_Clay_Group.jpg|3072",   // Bracciale Pandora con ciondoli
  "a6-v-mamma#2": "8/8b/Medicinal_spa_of_Harkány.jpg|400",   // Una giornata alle terme
  "a6-v-mamma#3": "7/79/Orchid_in_pot.jpg|2810",   // Orchidea in vaso
  "a6-v-mamma#4": "a/a8/Tour_Eiffel_Wikimedia_Commons.jpg|2900",   // Weekend a Parigi, per due
  "a6-v-scuola#0": "c/ca/Keyboard_with_tablet.jpg|4576",   // Tablet per la scuola
  "a6-v-scuola#1": "e/e6/Japanese_textbooks.jpg|640",   // I libri delle medie, un anno
  "a6-v-scuola#2": "d/d7/Rucksack1.jpg|1458",   // Zaino della scuola
  "a6-v-scuola#3": "7/79/English-English_dictionaries_and_thesaurus_books.JPG|3510",   // Un anno di lezioni d'inglese
  "a6-v-festa-bimbi#0": "2/21/Balloon_vendor.JPG|2560",   // Animatore per tre ore
  "a6-v-festa-bimbi#1": "8/8e/Jumping_castle.jpg|1600",   // Castello gonfiabile
  "a6-v-festa-bimbi#2": "e/e3/Torta_di_compleanno_-_Birthday_cakes_of_Italy_-_fruit_Meringue_Whipped_cream_from_traditional_pastry_of_Milan.jpg|3241",   // Torta per 30 bambini
  "a6-v-festa-bimbi#3": "7/70/Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg|2172",   // Weekend a Disneyland Paris, per quattro
  "a6-v-festa-bimbi#4": "2/2e/Italy_-_birthday_cake_with_candles_5.jpg|2625",   // Candeline magiche
  "a6-v-elettrico#0": "a/ab/Tesla_Model_3_(2023)_Autofrühling_Ulm_IMG_9282.jpg|5156",   // Tesla Model 3
  "a6-v-elettrico#1": "e/ed/Solar_panels_in_Brussels_-_P060781-269644.jpg|4000",   // Pannelli solari sul tetto
  "a6-v-elettrico#2": "7/7c/TeslaV2DualCable.jpg|1474",   // Wallbox in garage
  "a6-v-elettrico#3": "7/7c/2015_Kłodzko,_ul._Dusznicka,_myjnia_samochodowa_02.jpg|4680",   // Lavaggio a mano
  "a6-v-cinquecento#0": "a/a1/1970_Fiat_500_L_--_2011_DC_1.jpg|2178",   // Fiat 500 d'epoca restaurata
  "a6-v-cinquecento#1": "7/79/Fotografía_de_taller.jpg|4032",   // Tagliando dal meccanico
  "a6-v-cinquecento#2": "f/ff/Covered_car_in_foch.jpg|4608",   // Telo copriauto
  "a6-v-scooter#0": "a/a7/2023_Piaggio_Liberty_S_125_ABS.jpg|1438",   // Piaggio Liberty 125
  "a6-v-scooter#1": "a/a7/Xiaomi_M365_blanche.jpg|3024",   // Monopattino elettrico
  "a6-v-scooter#2": "6/6e/Open-face_helmet_kallerna.JPG|2814",   // Casco jet
  "a6-v-fuoristrada#0": "1/13/2019_Suzuki_Jimny_SZ5_4X4_Automatic_1.5.jpg|2724",   // Suzuki Jimny
  "a6-v-fuoristrada#1": "4/47/Toyota_hilux_with_roof_tents.jpg|2299",   // Tenda da tetto
  "a6-v-fuoristrada#3": "d/db/LED_headlamp_(1).jpg|1412",   // Torcia frontale
  "a6-v-campeggio#0": "c/c8/Caravan.jpg|813",   // Roulotte usata
  "a6-v-campeggio#1": "a/a5/Large_family_camping_tent.jpg|4640",   // Tenda per quattro
  "a6-v-campeggio#2": "2/2e/Mummy_bag.jpg|1536",   // Due sacchi a pelo
  "a6-v-campeggio#3": "7/75/Portable_stove.jpg|320",   // Fornellino da campeggio
  "a6-v-campeggio#4": "0/0e/Enbrighten_LED_Camping_Lantern.jpg|2284",   // Lanterna
  "a6-v-surf#0": "6/69/Italian_surfer_2.JPG|2209",   // Una settimana di surf camp
  "a6-v-surf#1": "e/e8/Waikiki_Beach_(15077335153).jpg|4435",   // Tavola da surf
  "a6-v-surf#2": "7/73/Wetsuit_a.jpg|508",   // Muta da surf
  "a6-v-surf#3": "9/9c/Randy_carrasco_qs_wax_comb.jpg|655",   // Cera per la tavola
  "a6-v-sub#0": "8/8b/Gulf_of_Eilat_(Red_Sea)_coral_reefs.jpg|984",   // Una settimana di immersioni nel Mar Rosso
  "a6-v-sub#1": "2/29/Underwater_photograph_of_a_recreational_scuba_diver_in_Playa_del_Carmen_2006.jpg|691",   // Brevetto da sub
  "a6-v-sub#2": "2/2b/Dive_computer_logbook.jpg|1944",   // Computer subacqueo
  "a6-v-sub#3": "8/85/Diving_half_mask_with_bifocal_lenses_P5180288.JPG|3648",   // Maschera e boccaglio
  "a6-v-pittore#1": "e/ef/Foldable_table_easel_in_Tuntorp_1.jpg|2570",   // Cavalletto da studio
  "a6-v-pittore#2": "b/bc/Various_colors_of_oil_paint_tubes_4.jpg|3880",   // Colori a olio professionali
  "a6-v-pittore#4": "6/66/Louvre_Museum_Wikimedia_Commons.jpg|6740",   // Viaggio a Parigi coi musei, per due
  "a6-v-stelle#0": "d/d3/Aurora_borealis_over_Eielson_Air_Force_Base,_Alaska.jpg|3008",   // Viaggio in Lapponia
  "a6-v-stelle#1": "b/b2/Celestron_EdgeHD_with_solar_filter.jpg|1657",   // Telescopio Celestron
  "a6-v-stelle#2": "f/f3/Consul_10x40.jpg|1741",   // Binocolo
  "a6-v-stelle#3": "9/90/Custer_Astronomical_Observatory_-_Southold_New_York_USA_-_Dome_and_Radio_Telescope.jpg|5184",   // Una notte all'osservatorio
  "a6-v-stelle#4": "5/5d/Barritt-Serviss_Star_and_Planet_Finder.png|2000",   // Mappa del cielo
  "a6-v-mugello#0": "b/bb/Hyodo_leather_suit_(9546192593).jpg|2448",   // Tuta in pelle da moto
  "a6-v-mugello#1": "c/cf/Motorcycle_helmet_crashed_chin_bar.jpg|1493",   // Casco integrale da pista
  "a6-v-mugello#2": "f/f9/Mugello_circuit_gare_in_corso.jpg|3984",   // Tribuna al Mugello
  "a6-v-mugello#3": "9/9f/RacingFlagsJune2007.jpg|1115",   // Bandiera del pilota
  "a6-v-erasmus#0": "0/03/Fantoft_room_03.jpg|800",   // Stanza per cinque mesi
  "a6-v-erasmus#2": "f/fd/Ryanair,_EI-DYZ,_Boeing_737-8AS_(49585974527).jpg|1200",   // Volo low cost
  "a6-v-erasmus#3": "c/c0/Suitcase1.jpg|1267",   // Valigia grande
  "a6-v-erasmus#4": "e/ed/01_Paella_Valenciana_original.jpg|1600",   // Paella per due
  "a6-v-sanremo#0": "7/72/Teatro_Ariston_Sanremo.jpg|5400",   // Biglietto per la finale del Festival
  "a6-v-sanremo#1": "8/8a/Sanremo_Casino_3.jpg|5400",   // Una notte a Sanremo
  "a6-v-sanremo#3": "f/f4/Various-microphones.JPG|1672",   // Microfono da karaoke
  "a6-v-sanremo#4": "a/ac/Detail_of_a_Victor_Stiebel_evening_dress,_late_1950s.jpg|1074",   // Abito da sera da red carpet
  "a6-v-concerto#0": "1/17/Stadio_Meazza_2021_3.jpg|4728",   // Una notte a Milano
  "a6-v-concerto#1": "9/92/FS_Trenitalia_ETR400_15_(50832499597).jpg|3783",   // Frecciarossa per Milano
  "a6-v-concerto#2": "a/a7/Dülmen,_Dülmener_Sommer,_Open-Air-Konzert,_\"Bounce\"_--_2018_--_0051.jpg|6720",   // Pacchetto VIP per due
  "a6-v-concerto#3": "6/61/EPMD_Business_as_Usual_(shirt).jpg|445",   // Maglietta del tour
  "a6-v-concerto#4": "7/7b/Po'Boy_Preservation_Festival_Hot_Sausage_Sandwich.jpg|640",   // Panino con la salamella
  "a6-v-terme#0": "5/50/Sauna_2.jpg|334",   // Sauna finlandese per casa
  "a6-v-terme#1": "1/1e/Grand_Hotel_Orologio_ad_Abano_Terme,_vista_di_tre_quarti.jpg|3961",   // Due notti in un resort termale
  "a6-v-terme#3": "f/f2/Slippers.jpg|1280",   // Ciabatte da spa
  "a6-v-stipendio#0": "f/fd/IPhone_17_Pro_(2025-12-28).jpg|4032",   // iPhone 17 Pro
  "a6-v-stipendio#1": "b/b9/AirPods_Pro_3_with_case.jpg|695",   // AirPods Pro
  "a6-v-stipendio#2": "6/62/Barbieri_-_ViaSophia25668.jpg|2320",   // Cena fuori coi genitori
  "a6-v-stipendio#3": "e/e2/Sparschwein_Haspa02.jpg|1061",   // Porcellino salvadanaio
  "a6-v-trasloco#0": "0/08/1979_Fiat_130NT_truck,_The_Van_From_Snowy_River_Removals_(2010-07-05).jpg|1422",   // Ditta di traslochi
  "a6-v-trasloco#1": "5/50/Europäisch-Kurzhaar-Kater_Nikita_2013-12-17_auf_Stapel_aus_Umzugskartons.jpg|2736",   // Trenta scatoloni
  "a6-v-trasloco#2": "a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg|1024",   // Pizza per chi aiuta
  "a6-v-trasloco#3": "2/25/Sticky_tape.jpg|713",   // Nastro adesivo da pacchi
  "a6-v-campagna#0": "a/a4/Motocoltivatore_Goldoni.jpg|4160",   // Motocoltivatore
  "a6-v-campagna#1": "a/ae/-2019-05-21_Chicken_coop,_Trimingham_(3).JPG|5152",   // Pollaio in legno
  "a6-v-campagna#2": "8/84/Male_and_female_chicken_sitting_together.jpg|959",   // Sei galline ovaiole
  "a6-v-campagna#3": "7/76/Sievi_Boots_(2).jpg|1337",   // Stivali di gomma
  "a6-v-sushi#0": "6/60/Sushi_platter.jpg|1614",   // Cena omakase per due
  "a6-v-sushi#1": "7/75/Yanagiba_(front).jpg|6000",   // Coltello da sushi
  "a6-v-sushi#2": "a/ac/Osaka_Castle_Nishinomaru_Garden_April_2005.JPG|1280",   // Una settimana a Osaka, per due
  "a6-v-sushi#3": "2/29/Short-grain_rice_(japonica).jpg|5184",   // Riso per sushi, 5 kg
  "a6-v-sushi#4": "4/4d/Western_Han_Lacquered_Wood_Chopsticks_(10095334314).jpg|5184",   // Bacchette laccate
  "a6-v-lucca#0": "1/1b/Magic_Armor_Link_TP_001.jpg|2448",   // Costume da cosplay
  "a6-v-lucca#1": "d/d4/Wacom_graphics_tablet_and_pen.png|1490",   // Tavoletta grafica
  "a6-v-lucca#2": "1/1a/Lucca_Comics_2009_-_04.jpg|3264",   // Biglietto per tutti i giorni
  "a6-v-lucca#3": "3/30/MuseoFerrocarrilSLP19.JPG|6016",   // Fumetto autografato
  "a6-v-lucca#4": "d/d6/Downtown_San_Diego_021.jpg|4912",   // Viaggio al Comic-Con di San Diego, per due
  "a6-v-harry-potter#0": "d/d5/King's_Cross_station,_August_2014.jpg|1280",   // Tre notti a Londra
  "a6-v-harry-potter#2": "b/bc/Virgin_atlantic_b747-400_lady_penelope_arp.jpg|2847",   // Due voli per Londra
  "a6-v-harry-potter#3": "c/c8/Hogwarts_Express_(46637633634).jpg|1536",   // Visita agli studi di Harry Potter
  "a6-v-harry-potter#4": "c/cf/Tiwi_dance_wand_CAC.JPG|1588",   // Bacchetta magica
  "a6-v-dolomiti#0": "c/c2/Via_ferrata_Strobel_in_Italy.jpg|640",   // Guida alpina per un giorno
  "a6-v-dolomiti#1": "c/cc/Alt-Berg_Defenders_8528.jpg|3000",   // Scarponi da trekking
  "a6-v-dolomiti#2": "d/d8/Hotel_Mezdi_Seiser_Alm.jpg|6276",   // Una settimana in hotel sulle Dolomiti
  "a6-v-dolomiti#3": "1/15/RS_122.jpg|2000",   // Una notte in rifugio
  "a6-v-dolomiti#4": "a/a6/TrekkingPolesCarbonWoman.jpg|1200",   // Bastoncini da trekking
  // ---- i prodotti nuovi (data/prezzo-7.js, 23 ott 2026): scelte dal nome da aiutanti Sonnet e guardate tutte a occhio ----
  "a7-penne-rigate-de-cecco-n-41-500-g": "0/0b/Pennelisce_closeup.png|2932",   // Penne rigate De Cecco n.41, 500 g
  "a7-riso-carnaroli-gallo-1-kg": "3/33/Carnaroli.jpg|3285",   // Riso Carnaroli Gallo, 1 kg
  "a7-corn-flakes-kellogg-s-375-g": "9/9c/Photo_cornflakes.jpg|5184",   // Corn Flakes Kellogg's, 375 g
  "a7-philadelphia-original-150-g": "f/f7/Philly_cream_cheese.jpg|2700",   // Philadelphia Original, 150 g
  "a7-estathe-al-limone-1-5-litri": "e/ef/Iced_Tea_from_flickr.jpg|3744",   // Estathé al limone, 1,5 litri
  "a7-maionese-calve-225-ml": "8/87/Mayonnaise_Jar_550x900.JPG|550",   // Maionese Calvè, 225 ml
  "a7-kinder-bueno-3-barrette": "a/a1/Kinder_Bueno_-_4_halfed.jpg|3576",   // Kinder Bueno, 3 barrette
  "a7-pesto-alla-genovese-barilla-190-g": "c/c9/BasilPesto.JPG|2760",   // Pesto alla genovese Barilla, 190 g
  "a7-ketchup-heinz-400-ml": "d/d3/Heinz_Tomato_Ketchup,_Canada_(front),_2026-02-19.jpg|3536",   // Ketchup Heinz, 400 ml
  "a7-birra-moretti-6-bottiglie-da-33-cl": "a/a9/Birra_Moretti_beer_bottle.jpg|1536",   // Birra Moretti, 6 bottiglie da 33 cl
  "a7-mascarpone-granarolo-250-g": "2/26/Mascarpone_2.jpg|5472",   // Mascarpone Granarolo, 250 g
  "a7-ricotta-fresca-granarolo-250-g": "d/da/Ricotta_fresca.jpg|3840",   // Ricotta fresca Granarolo, 250 g
  "a7-burro-250-g": "3/3c/Block_of_butter_in_butter_dish.jpg|3024",   // Burro, 250 g
  "a7-wurstel-wudy-grill-3-pezzi": "8/8b/Wiener_Wuerstchen_(fcm).jpg|2700",   // Wurstel Aia Wudy Grill, 3 pezzi (250 g)
  "a7-pan-bauletto-mulino-bianco-400-g": "3/39/Breadindia.jpg|640",   // Pan Bauletto Mulino Bianco, 400 g
  "a7-yogurt-activia-bianco-4-vasetti": "7/7a/Yasuda_yogurt_150ml.jpg|640",   // Yogurt Activia bianco, 4 vasetti
  "a7-prosecco-doc-brut-75-cl": "c/ce/Prosecco_di_Conegliano_bottle_and_glass.jpg|2406",   // Prosecco DOC brut, 75 cl
  "a7-olio-di-semi-di-girasole-1-litro": "3/33/Bottle_1_liter_Sunflower_refined_oil.jpg|1200",   // Olio di semi di girasole, 1 litro
  "a7-tavoletta-milka-al-latte-100-g": "9/90/Milka_Alpine_Milk_Chocolate_bar_100g.jpg|2960",   // Tavoletta Milka al latte, 90 g
  "a7-orsetti-d-oro-haribo-175-g": "3/3e/Haribo_Goldbears_(3549536631).jpg|3648",   // Orsetti d'oro Haribo, 175 g
  "a7-petto-di-pollo-a-fette-400-g": "3/31/Fresh_Raw_Chicken_Parts_on_Display.jpg|2048",   // Petto di pollo a fette, 400 g
  "a7-gnocchetti-di-patate-rana-500-g": "e/e7/Gnocchi_di_patate_con_sugo_di_pomodoro_e_con_gorgonzola.jpg|4032",   // Gnocchetti di patate Rana, 500 g
  "a7-cornetto-algida-classico-6-gelati": "f/fb/Cornetto_Algida_Ice_Cream.jpg|612",   // Cornetto Algida classico, 6 gelati
  "a7-patate-2-kg": "a/ab/Patates.jpg|2864",   // Patate, 2 kg
  "a7-cipolle-dorate-1-kg": "a/a1/Yellow_onions_vegetables.jpg|1280",   // Cipolle dorate, 1 kg
  "a7-uva-bianca-1-kg": "5/5f/Grapes_(2).jpg|2724",   // Uva bianca, 1 kg
  "a7-castagne-1-kg": "f/fb/Chestnuts_roasted.jpg|1280",   // Castagne, 1 kg
  "a7-zucca-1-kg": "c/cd/Fruits_and_Vegetables_(20161021-AMS-LSC-0146).jpg|4710",   // Zucca, 1 kg
  "a7-cozze-1-kg": "4/45/CornishMussels.JPG|2500",   // Cozze, 1 kg
  "a7-fagioli-cannellini-in-scatola-400-g": "e/ef/White_kidney_beans🫘.jpg|3000",   // Fagioli cannellini in scatola, 400 g
  "a7-limoni-1-kg": "e/e4/P1030323.JPG|1280",   // Limoni, 1 kg
  "a7-insalata-mista-in-busta-150-g": "8/85/New_Lettuce_(6193662526).jpg|4106",   // Insalata mista in busta, 150 g
  "a7-pomodori-ramati-1-kg": "b/be/Grape_tomatoes_on_the_vine_at_Ljubljana_Central_Market.JPG|4592",   // Pomodori ramati, 1 kg
  "a7-pane-1-kg": "7/7b/Assorted_bread.jpg|709",   // Pane, 1 kg
  "a7-salsiccia-di-maiale-500-g": "d/d8/Salsiccia_Italian_pork_sausage.jpg|3888",   // Salsiccia di maiale, 500 g
  "a7-ananas-uno-intero": "e/eb/Fresh_whole_pineapples.jpg|1816",   // Ananas, uno intero
  "a7-zucchine-1-kg": "a/ac/Zucchini_in_basket_2021_G1.jpg|4100",   // Zucchine, 1 kg
  "a7-filetto-di-salmone-1-kg": "2/24/Raw_salmon_fillets.jpg|2816",   // Filetto di salmone, 1 kg
  "a7-gamberi-rossi-di-mazara-1-kg": "c/ca/Fish4525_-_Flickr_-_NOAA_Photo_Library.jpg|2896",   // Gamberi rossi di Mazara, 1 kg
  "a7-filetto-di-manzo-1-kg": "1/12/Beef_tenderloin.jpg|148",   // Filetto di manzo, 1 kg
  "a7-orata-1-kg": "d/d6/Sparus_aurata_-_Goldbrasse_167478208.jpg|2048",   // Orata, 1 kg
  "a7-funghi-porcini-freschi-1-kg": "3/34/Boletus_edulis_IT.jpg|3072",   // Funghi porcini freschi, 1 kg
  "a7-chianti-classico-75-cl": "0/00/Chianti_Classico_example_bottle_-_Annata_type.jpg|3385",   // Chianti Classico, 75 cl
  "a7-cosciotto-d-agnello-1-kg": "8/83/Roast_lamb_leg.jpg|2736",   // Cosciotto d'agnello, 1 kg
  "a7-polpo-fresco-1-kg": "9/9f/Octopus_vulgaris_2.jpg|3332",   // Polpo fresco, 1 kg
  "a7-aperol-spritz-al-caffe-florian": "5/59/Aperol_Spritz_2014a.jpg|3000",   // Aperol Spritz al Caffè Florian
  "a7-acqua-minerale-al-caffe-florian": "c/c5/Venedig_Caffè_Florian_Eingang-20110312-RM-185109.jpg|3456",   // Acqua minerale al Caffè Florian
  "a7-caffe-al-tavolo-in-piazzetta": "0/08/LA_Piazzetta.JPG|3840",   // Caffè al tavolo in Piazzetta
  "a7-pizza-marinara": "1/11/Pizza_marinara.jpg|2848",   // Pizza marinara
  "a7-tajarin-al-tartufo-bianco": "5/54/2016_1129_Turin_Tajarin_al_Castelmagno.jpg|3456",   // Tajarin al tartufo bianco
  "a7-aperitivo-con-buffet": "d/d7/Aperitivo_al_bar.jpg|7200",   // Aperitivo con buffet
  "a7-cocktail-in-un-rooftop": "8/80/15-09-26-RalfR-WLC-0084.jpg|2368",   // Cocktail in un rooftop
  "a7-pizza-a-portafoglio": "a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg|1024",   // Pizza a portafoglio
  "a7-orzo-in-tazza-grande": "4/4b/Caffè_d'orzo_(89397).jpg|3000",   // Orzo in tazza grande
  "a7-cioccolata-calda-con-panna": "9/92/Hot_chocolate_with_whipped_cream_and_dried_berries_(Vegan,_KETO,_LCHF,_Low_Carb,_Gluten_free,_FIT)_-_52774784724.jpg|2659",   // Cioccolata calda con panna
  "a7-bicerin": "8/86/2016_1128_Turin_Bicerin_01.jpg|3072",   // Bicerin
  "a7-un-ombra-di-vino": "4/42/\"_05_-_ITALY_-_un_bacaro_a_Venezia_Osteria_appetizers_restaurant_in_Venice_wine_enoteca.jpg|2910",   // Un'ombra di vino
  "a7-cicchetto-di-baccala-mantecato": "b/bc/\"_13_-_ITALY_-_Cicchetti_Venetian_cuisine_appetizers_restaurant_(_not_are_tapas_are_ciccheti_of_Venice)_in_this_pics_Baccalà_mantecato_(Cod).jpg|3264",   // Cicchetto di baccalà mantecato
  "a7-pasticciotto-leccese": "8/82/Pasticciotto.jpg|3256",   // Pasticciotto leccese
  "a7-baba": "1/10/BabaRum.jpg|3434",   // Babà
  "a7-maritozzo-con-la-panna": "d/db/Maritozzo_con_panna.jpg|3000",   // Maritozzo con la panna
  "a7-panino-con-la-milza": "e/e3/Pani_ca_meusa.jpg|3968",   // Panino con la milza
  "a7-panino-con-la-mortadella": "f/f7/Marjolaine_2016_20.jpg|1920",   // Panino con la mortadella
  "a7-olive-all-ascolana": "1/10/Olive_all'ascolana.jpg|1000",   // Olive all'ascolana
  "a7-crodino": "4/48/Bottle_of_Crodino.JPG|1296",   // Crodino
  "a7-coca-cola-in-bottiglietta": "e/ef/Coca-Cola_glass_bottle.jpg|3024",   // Coca-Cola in bottiglietta
  "a7-affogato-al-caffe": "7/7a/Espresso_Affogato.JPG|2248",   // Affogato al caffè
  "a7-parmigiana-di-melanzane": "7/72/Parmigiana_di_melanzane.jpg|4272",   // Parmigiana di melanzane
  "a7-pasta-alla-norma": "e/e4/Pasta_alla_Norma_-_Wiki_Loves_Sicilia.jpg|3820",   // Pasta alla Norma
  "a7-cacio-e-pepe": "0/0d/Spaghetti_cacio_e_pepe_(creamy_as_it_should_be).jpg|3008",   // Cacio e pepe
  "a7-risotto-alla-milanese": "8/83/Risotto_alla_Milanese.JPG|3648",   // Risotto alla milanese
  "a7-pizzoccheri-della-valtellina": "9/9f/Pizzoccheri.jpg|3072",   // Pizzoccheri della Valtellina
  "a7-pappardelle-al-cinghiale": "0/0b/Pappardelle_al_cinghiale_(cropped).jpg|2607",   // Pappardelle al cinghiale
  "a7-tagliata-di-manzo-con-rucola": "5/56/Tagliata_with_Rosemary.jpg|6000",   // Tagliata di manzo con rucola
  "a7-sei-ostriche": "d/d2/Oysters_served_on_ice,_with_lemon_and_parsley.jpg|2592",   // Sei ostriche
  "a7-poke-bowl-al-salmone": "5/55/Salmon_Poke_Bowl_(S)_with_Spicy_mayo_sauce_-_Kitokito.jpg|4032",   // Poke bowl al salmone
  "a7-il-coperto": "7/77/Lyon_Restaurant_Table_setting_20110421.jpg|3264",   // Il coperto
  "a7-bottiglia-di-prosecco": "c/ce/Prosecco_di_Conegliano_bottle_and_glass.jpg|2406",   // Bottiglia di prosecco
  "a7-menu-degustazione-stellato": "5/59/Thana_Fine_Dining_plate.jpg|240",   // Menù degustazione stellato
  "a7-dieci-pizze-margherita": "d/d4/Margherita_Originale.JPG|2048",   // Dieci pizze margherita
  "a7-pizza-al-taglio": "9/98/Pizze_al_taglio_and_Peroni_at_Alice.jpg|4032",   // Pizza al taglio
  "a7-fetta-di-torta-della-nonna": "0/02/Torta_della_Nonna.jpg|3000",   // Fetta di torta della nonna
  "a7-calice-di-franciacorta": "1/1a/Franciacorta_milledi.jpg|1639",   // Calice di Franciacorta
  "a7-menu-bambini": "a/a7/Cotoletta_e_patate_al_forno.jpg|516",   // Menù bambini
  "a7-frullato-di-frutta-fresca": "e/eb/Strawberry_and_lemon_smoothie_(14430283996).jpg|1000",   // Frullato di frutta fresca
  "a7-crepe-alla-nutella": "3/3a/Crêpes_con_la_Nutella.JPG|4320",   // Crêpe alla Nutella
  "a7-aragosta-alla-catalana": "5/5c/Capo_Gallo_Aragosta.jpg|640",   // Aragosta alla catalana
  "a7-bottiglia-di-champagne": "3/3a/Salon_Champagne_and_glass.JPG|1936",   // Bottiglia di champagne
  "a7-caffe-in-autogrill": "a/a5/Tazzina_di_caffè_a_Ventimiglia.jpg|2970",   // Caffè in autogrill
  "a7-pizza-gourmet": "5/57/Neapolitan_pizza_at_Trappica_(48701940197).jpg|3024",   // Pizza gourmet
  "a7-tortellini-in-brodo": "a/ab/Tortellini_in_brodo_Bologna.jpg|1024",   // Tortellini in brodo
  "a7-cena-di-pesce-per-sei": "a/ae/Plateau_van_zeevruchten.jpg|2029",   // Cena di pesce per sei
  "a7-spazzola-lavapiatti-con-dispenser": "a/a2/Dish-washing_brush_with_integrated_soap_dispenser.jpg|3168",   // Spazzola lavapiatti con dispenser
  "a7-colla-istantanea-attak-3-g": "7/79/Super_glue.jpg|1424",   // Colla istantanea Attak, 3 g
  "a7-metro-a-nastro-da-5-metri": "0/03/Tape_Measure_25'_Klein_Tools.jpg|1000",   // Metro a nastro da 5 metri
  "a7-levapelucchi-elettrico": "e/e9/Unix_fabric_shaver.jpg|4752",   // Levapelucchi ricaricabile
  "a7-multipresa-a-5-prese": "f/fa/Tricklestar_Plug_Strip.jpg|4032",   // Multipresa a 5 prese
  "a7-tavolino-ikea-lack-55x55-cm": "1/15/IKEA_Lack.jpg|1050",   // Tavolino IKEA Lack, 55x55 cm
  "a7-bilancia-da-cucina-ikea-3-kg": "4/4f/Escali_digital_kitchen_scale.jpg|8160",   // Bilancia da cucina IKEA, 3 kg
  "a7-martello-da-carpentiere": "7/7b/Hammer2.jpg|565",   // Martello da carpentiere
  "a7-set-di-6-bicchieri-di-vetro": "4/4b/Jewelry_pair_rock_glasses_01.jpg|369",   // Set di 6 bicchieri di vetro
  "a7-tavolino-vassoio-ikea-gladom": "d/d2/Tvtable.jpg|350",   // Tavolino vassoio IKEA Gladom
  "a7-sedia-pieghevole-da-giardino": "6/6a/Folding_Chair_Lifetime.jpg|401",   // Sedia pieghevole da giardino
  "a7-set-di-pentole-ikea-365": "1/13/All-Clad_Copper_Core_pots.jpeg|2000",   // Set di pentole IKEA 365+
  "a7-piastra-a-induzione-portatile-ikea": "7/79/Eupa_TSI-IH1880.jpg|1600",   // Piastra a induzione portatile IKEA
  "a7-stendibiancheria-a-torre": "8/84/Clotheshorse.jpg|1094",   // Stendibiancheria a torre
  "a7-sgabello-da-bar-regolabile": "5/51/Barhocker_(fcm).jpg|1465",   // Sgabello da bar regolabile
  "a7-macchina-lavazza-a-modo-mio": "5/52/Lavazza_A_modo_Mio_coffe_machine.png|1920",   // Macchina Lavazza A Modo Mio
  "a7-scopa-elettrica-senza-fili": "8/8a/Dyson_V6_cordless_stick_vacuum.jpg|5472",   // Scopa elettrica senza fili Rowenta X-Force 8.80
  "a7-friggitrice-ad-aria-digitale-4-litri": "d/d3/Air_Fryer_2020.jpg|4032",   // Friggitrice ad aria digitale, 4 litri
  "a7-piumino-matrimoniale-quattro-stagioni": "b/b2/La_cama_deshecha_(2724466831).jpg|3072",   // Piumino matrimoniale quattro stagioni
  "a7-trapano-avvitatore-a-batteria": "7/77/Panasonic_Cordless_Drill_&_Driver_EY1DD2,_Ottobrunn_(20250410-P1046293).jpg|3888",   // Trapano avvitatore a batteria
  "a7-forno-elettrico-da-25-litri": "e/e4/Hamilton_Beach_Easy_Reach_Sure-Crisp_Toaster_Oven_-_05.jpg|5184",   // Forno elettrico da 25 litri
  "a7-impastatrice-planetaria-da-5-litri": "e/e2/2012.09.24.154927_KitchenAid_Rheingauer_Straße_Eltville.jpg|1920",   // Impastatrice planetaria Ariete Gourmet, 5,2 litri
  "a7-topper-in-memory-foam": "4/48/MemoryFoam-fast.jpg|1136",   // Topper in memory foam
  "a7-materasso-ikea-afjall-90x200-cm": "b/bb/Shifman_Mattress_Set.JPG|4828",   // Materasso IKEA Åfjäll, 90x200 cm
  "a7-ventilatore-da-soffitto-con-luce": "7/76/Ceiling_fan_with_lamp.jpg|4128",   // Ventilatore da soffitto con luce
  "a7-tavolo-da-giardino-110x71-cm": "6/60/Green_garden_furniture_from_plastics_near_Hostákov,_Vladislav,_Třebíč_District.jpg|3888",   // Tavolo da giardino, 110x71 cm (22 nov 2026, ripasso: tavolo da giardino: un giardino con una casa, il tavolo non si vede; prima Green_metal_chairs_with_round_table_in_a_garden,_Germany.jpeg)
  "a7-idropulitrice-karcher-k-2": "6/63/KARCHER_5_85.jpg|964",   // Idropulitrice Kärcher K 2 Power Control
  "a7-ferro-con-caldaia-braun-carestyle-5": "c/ca/Teal_and_white_electric_steam_iron_-_side_view.jpg|1466",   // Ferro con caldaia Braun CareStyle 5
  "a7-sedia-da-ufficio-ikea-markus": "4/46/Ikea_MARKUS_Swivel_Chair_(19548745588).jpg|3648",   // Sedia da ufficio IKEA Markus
  "a7-poltrona-ikea-strandmon": "9/9d/Easy_chair,_probably_Boston,_Massachusetts,_1750-1790,_mahogany,_maple,_pine,_replacement_wool_upholstery-_Dallas_Museum_of_Art_-_DSC04896.jpg|3628",   // Poltrona IKEA Strandmon, Nordvalla grigio scuro (22 nov 2026, ripasso: Poltrona antica damascata su gambe lavorate, nulla a che vedere con la Strandmon moderna.; prima Easy_chair,_probably_Boston,_Massachusetts,_1760-1780,_mahogany,_soft_maple,_reproductio…)
  "a7-divano-ikea-ektorp-a-3-posti": "4/46/A_brown_sofa_(2005-03-03).jpg|2048",   // Divano IKEA Ektorp a 3 posti
  "a7-lavasciuga-candy-8-5-kg": "4/42/Samsung_WD90N740NOA,_IFA_2018.jpg|2400",   // Lavasciuga Candy GWD 485SB6-S, 8+5 kg
  "a7-letto-ikea-malm-con-contenitore": "c/cb/Malm_bed_from_Ikea,_Brisbane,_Australia.jpg|4032",   // Letto IKEA Malm con contenitore (22 nov 2026, ripasso: Letto d'albergo con testiera imbottita, non un Malm con contenitore.; prima Lotte_Heaven._(2185651031).jpg)
  "a7-congelatore-verticale-whirlpool": "4/44/Openfreezer.jpg|2112",   // Congelatore verticale Whirlpool
  "a7-camera-da-letto-ikea-idanas": "6/61/Full_Bedroom_Set_(49875913003).jpg|4421",   // Camera da letto IKEA Idanäs (22 nov 2026, ripasso: Camera classica con copriletto rosa e mobili d'epoca, non un set IKEA moderno.; prima Berlin_Villa_Borsig_Tegel_asv2019-08_img09.jpg)
  "a7-asciugatrice-bosch-serie-8": "1/1c/Modern_front_load_tumble_dryer.JPG|2155",   // Asciugatrice Bosch Serie 8
  "a7-frigorifero-side-by-side": "8/85/LG_refrigerator_interior.jpg|2448",   // Frigorifero side by side (22 nov 2026, ripasso: frigorifero side by side: scura, un frigo aperto al buio, non un side by side; prima Open_refrigerator_with_food_at_night.jpg)
  "a7-divano-ikea-jattebo-3-5-posti": "2/2a/Chaise_longue_sofa_2.jpg|2770",   // Divano IKEA Jättebo, 3,5 posti
  "a7-cavo-usb-c-da-1-metro": "c/c3/USB-C_cable_2017_A.jpg|3872",   // Cavo USB-C da 1 metro
  "a7-pellicola-in-vetro-per-smartphone": "9/94/Screen_protector.png|352",   // Pellicola in vetro per smartphone
  "a7-presa-smart-wi-fi": "3/34/Smart_plug_adapter_front_view_with_power_button.jpg|1459",   // Presa smart Wi-Fi
  "a7-auricolari-bluetooth-economici": "4/46/MS-TW21NVの画像_2.jpg|2775",   // Auricolari Bluetooth economici
  "a7-tappetino-xxl-per-mouse": "2/2a/HP_mouse_and_mousepad_20060803.jpg|1280",   // Tappetino XXL per mouse
  "a7-cellulare-a-tasti": "1/1e/Nokia_130.jpg|1523",   // Cellulare a tasti
  "a7-mouse-da-gioco-logitech-g502-hero": "4/42/G502_Hero.jpg|3024",   // Mouse da gioco Logitech G502 HERO
  "a7-cuffie-da-gaming-con-microfono": "2/27/Plantronics_headset.jpg|1456",   // Cuffie da gaming con microfono
  "a7-router-wi-fi-6": "6/63/TP-Link_AX1500_Wi-Fi_6_Router_Front.jpg|1280",   // Router Wi-Fi 6
  "a7-mouse-logitech-mx-master-3s": "d/d4/Logitech_MX_Master_3S_HS12.jpg|6000",   // Mouse Logitech MX Master 3S
  "a7-tastiera-logitech-mx-keys-s": "7/78/Logitech_MX_Keys_YR0073_Wireless_Keyboard.jpg|3877",   // Tastiera Logitech MX Keys S
  "a7-tablet-lenovo-idea-tab-11": "c/c5/Lenovo_Tab_M10_FHD_Plus_(2026).jpg|4080",   // Tablet Lenovo Idea Tab 11", Wi-Fi 256 GB
  "a7-samsung-galaxy-tab-a11-128-gb": "d/d5/Samsung_Galaxy_Tab_A11_Gray.png|389",   // Samsung Galaxy Tab A11+, 128 GB
  "a7-drone-dji-neo-2": "7/74/DJI_DN1A0626_Neo_(FA3PEWAH34)_(1-18-2025).jpg|2490",   // Drone DJI Neo 2
  "a7-volante-logitech-driving-force": "e/ed/Logitech_G29_steering_wheel.jpg|4608",   // Volante Logitech G29 Driving Force
  "a7-xbox-series-s-512-gb": "5/54/Xbox_Series_S_with_controller.jpg|2101",   // Xbox Series S, 512 GB
  "a7-redmi-note-17-pro-max-256-gb": "3/3d/Redmi_Note_10_Pro_Back.jpg|3471",   // Redmi Note 17 Pro Max, 256 GB
  "a7-portatile-hp-15-pollici-ryzen-5": "5/5e/HP_Laptop_Notebook.png|1000",   // Portatile HP 15 pollici, Intel Core 5 (22 nov 2026, ripasso: Portatile di molti anni fa con schermata Wikipedia: per un HP moderno da 799 euro è…; prima Laptop_(Pixi).png)
  "a7-airpods-max": "7/7e/Apple_airpods_max_1.jpg|3005",   // AirPods Max 2
  "a7-tv-da-65-pollici-4k": "e/e2/LG_smart_TV.jpg|1700",   // TV Xiaomi F Pro da 65 pollici 4K
  "a7-drone-dji-mini-5-pro": "9/9b/2024_Dron_DJI_Mini_4_Pro_(18).jpg|5232",   // Drone DJI Mini 5 Pro
  "a7-xbox-series-x-1-tb": "1/12/Xbox_Series_X_2.jpg|4200",   // Xbox Series X, 1 TB
  "a7-ipad-air-da-11-pollici": "7/7a/IPad_Air_2020_(51012790753).jpg|4919",   // iPad Air da 11 pollici
  "a7-macbook-pro-16-pollici-chip-m5-pro": "9/91/MacBook_Pro_16_(M1_Pro,_2021)_-_Wikipedia.jpg|4032",   // MacBook Pro 16 pollici, chip M5 Pro
  "a7-citroen-c3-aircross-puretech-100": "7/76/Citroën_C3_Aircross_(2024)_DSC_9300.jpg|5105",   // Citroën C3 Aircross PureTech 100
  "a7-dacia-jogger": "2/29/2023_Dacia_Jogger_DSC_7288.jpg|4278",   // Dacia Jogger Eco-G 120
  "a7-suzuki-swift-hybrid-1-2": "3/3d/Suzuki_Swift_(2024)_hybrid_DSC_6076.jpg|4038",   // Suzuki Swift Hybrid 1.2
  "a7-peugeot-208-turbo-100-style": "c/c6/Peugeot_208_PureTech_130_EAT8_Allure_GT-Line_(II)_–_f_17102021.jpg|4554",   // Peugeot 208 Turbo 100 Style
  "a7-mini-cooper-c-3-porte": "c/c4/Mini_Hatch_(J01)_Ditzingen_Mobil_IMG_9772_(cropped).jpg|4079",   // MINI Cooper C 3 porte
  "a7-kia-sportage": "5/5d/2025_Kia_Sportage_S_front_only.jpg|4705",   // Kia Sportage
  "a7-mercedes-classe-a-180": "5/5a/2019_Mercedes_Benz_A-Class_Hatchback_A_200_(44).jpg|4000",   // Mercedes Classe A 180
  "a7-ford-mustang-fastback-5-0-v8-gt": "1/1f/2019_Ford_Mustang_GT_5.0_facelift.jpg|3969",   // Ford Mustang Fastback 5.0 V8 GT
  "a7-mercedes-classe-g": "3/38/Mercedes-Benz_W463_G_350_BlueTEC_01.jpg|3400",   // Mercedes Classe G
  "a7-maserati-granturismo": "0/00/Maserati_GranTurismo_Trofeo_1X7A0828.jpg|5844",   // Maserati GranTurismo
  "a7-aston-martin-db12": "c/ca/Aston_Martin_DB12_1X7A1921.jpg|5411",   // Aston Martin DB12
  "a7-honda-sh-mode-125": "0/0f/Honda_SH_Mode_125.jpg|1797",   // Honda SH Mode 125
  "a7-honda-pcx-125": "6/67/2019_Honda_PCX_125.jpg|1536",   // Honda PCX 125
  "a7-yamaha-nmax-125": "7/73/Yamaha_NMAX_125_2025.jpg|1440",   // Yamaha NMAX 125
  "a7-honda-cb125r": "2/21/Honda_CB125R.jpg|4020",   // Honda CB125R
  "a7-piaggio-beverly-310": "b/b1/Piaggio_Beverly_200.jpg|3093",   // Piaggio Beverly 310
  "a7-honda-forza-350": "0/0f/Honda_Forza_350_2025.jpg|1440",   // Honda Forza 350
  "a7-aprilia-rs-457": "a/ad/Aprilia_RS_457.jpg|3965",   // Aprilia RS 457
  "a7-honda-cb750-hornet": "8/87/2023_Honda_CB750_Hornet.jpg|4608",   // Honda CB750 Hornet
  "a7-kawasaki-z900": "b/bc/Kawasaki_Z900,_green.jpg|3957",   // Kawasaki Z900
  "a7-bmw-s-1000-rr": "7/79/BMW_S1000_RR_Studio.JPG|4131",   // BMW S 1000 RR
  "a7-ducati-multistrada-v4-s": "5/53/Ducati_Multistrada_V4_S_'25.jpg|4032",   // Ducati Multistrada V4 S
  "a7-honda-gold-wing": "7/7d/Honda_Gold_Wing_GL_1800_(SC79_-_2018).jpg|1800",   // Honda Gold Wing
  "a7-giant-newtour-e-1-lst": "c/c6/A_mountain_bike_styled_e-bike,_Cyclotricity_Stealth.jpg|3264",   // Giant NewTour E+ 1 LST
  "a7-giant-tcr-advanced-sl-0": "6/66/Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_(30636542393).jpg|4819",   // Giant TCR Advanced SL 0
  "a7-un-litro-di-benzina-al-self": "c/c0/SPBU_Pertamina_2022.jpg|4928",   // Un litro di benzina al self
  "a7-un-litro-di-gasolio-al-self": "c/c0/SPBU_Pertamina_2022.jpg|4928",   // Un litro di gasolio al self
  "a7-museo-lamborghini": "8/84/Museo_Lamborghini_(Sant'Agata_Bolognese,_Bologna,_Italy)_004.jpg|4000",   // Museo Lamborghini
  "a7-traforo-del-frejus-solo-andata": "7/7b/Frejus_Road_Tunnel_Bardonecchia_portal_2.jpg|2560",   // Traforo del Frejus, solo andata
  "a7-seggiolino-auto-chicco-gro-up-i-size": "e/ec/Volvo_child_safety_seat.jpg|1391",   // Seggiolino auto Chicco Gro-Up i-Size
  "a7-casco-agv-pista-gp-rr": "e/e0/Valentino_Rossi's_AGV_helmets.jpg|1024",   // Casco AGV Pista GP RR
  "a7-giant-talon": "9/96/Hardtail-mountain-bike.jpg|907",   // Giant Talon 3
  "a7-camera-d-aria-per-bici-da-corsa": "5/5b/Fahrradschlaeuche.jpg|1536",   // Camera d'aria Decathlon per bici da corsa (22 nov 2026, ripasso: Camera d'aria scura con la scritta Barum quasi unica protagonista, misura da bimbo;…; prima Barum_bicycle_inner_tube.jpg)
  "a7-lavaggio-dell-auto-al-self": "1/1f/'Car_Wash_Bergwerff'_Gorinchem_(18466972783).jpg|3091",   // Lavaggio dell'auto al self
  "a7-pastiglie-dei-freni-davanti": "9/92/Brake_pad.jpg|3996",   // Pastiglie dei freni davanti
  "a7-bracciale-in-acciaio-con-cristalli-azzur": "d/de/Bracelet_(jewelry).jpg|734",   // Bracciale in acciaio con cristalli azzurri
  "a7-felpa-girocollo-relaxed-fit": "c/ca/HK_SKD_TKO_將軍澳_Tseung_Kwan_O_坑口_Hang_Hau_東港城_East_Point_City_mall_shop_GU_Clothing_Store_秋季服裝_Autumn_fall_fashion_green_September_2022_Px3.jpg|4000",   // Felpa girocollo relaxed fit
  "a7-casio-f-91w": "9/96/Casio_F-91W_5051.jpg|3393",   // Casio F-91W
  "a7-costume-parigamba-da-uomo": "2/20/Speedo_zwembroek-1.jpg|1280",   // Costume parigamba da uomo
  "a7-jeans-chino-straight-fit": "3/3e/Chino_pants.jpg|1200",   // Jeans chino straight fit
  "a7-portachiavi-mimi": "f/f6/Sandal_keychain.jpg|2048",   // Portachiavi Mimì (22 nov 2026, ripasso: Medaglione antico su legno: non è un portachiavi e non c'entra con Carpisa.; prima Key_chain_4.jpg)
  "a7-collana-punto-luce-in-argento": "d/de/Silver_necklace_with_a_Chai_Hamsa_pendant,_March_2024_11.jpg|4000",   // Collana Punto Luce in argento
  "a7-costume-boxer-formentera": "f/f3/Sky_blue_board_shorts.jpg|4000",   // Costume boxer Formentera (22 nov 2026, ripasso: Stessi pantaloncini sportivi neri del 781, non un costume boxer con fantasia.; prima Speedo_zwembroek-1.jpg)
  "a7-bomber-effetto-pelle": "4/42/B-17_Bomber_Pilot_Flight_Jacket.jpeg|241",   // Bomber effetto pelle
  "a7-zaino-carpisa-roadmate-go": "d/d7/Rucksack1.jpg|1458",   // Zaino Carpisa Roadmate go
  "a7-trolley-rigido-carpisa-wander-go": "c/c0/Suitcase1.jpg|1267",   // Trolley rigido Carpisa Wander go
  "a7-nike-windrunner": "9/9d/Windbreaker_Jacket,_Hood_Outside_Transparency.png|1208",   // Nike Windrunner
  "a7-adidas-stan-smith": "2/28/Adidas_Stan_Smiths_sneaker.jpg|2560",   // adidas Stan Smith
  "a7-cintura-reversibile-emporio-armani": "1/17/Leather_belt_&_buckle.jpg|2288",   // Cintura reversibile Emporio Armani
  "a7-adidas-samba-og": "f/fa/Adidas_Samba_OG.jpg|4000",   // adidas Samba OG
  "a7-jeans-diesel-d-strukt": "3/3e/Levi's_501_raw_jeans.jpg|2740",   // Jeans Diesel D-Strukt
  "a7-on-cloudtilt": "8/89/On_Clouds_running_shoes.jpg|1502",   // On Cloudtilt
  "a7-occhiali-da-sole-emporio-armani": "8/85/American_Optical_Original_Pilot_Aviator_sunglasses.jpg|5184",   // Occhiali da sole Emporio Armani
  "a7-nike-air-max-plus": "e/e4/Air_Max_Plus_Tuned.jpg|1800",   // Nike Air Max Plus
  "a7-piumino-nike-windrunner-down": "4/4a/OutDoor_2018,_Friedrichshafen_(1X7A0285).jpg|4480",   // Piumino Nike Windrunner Down
  "a7-orologio-emporio-armani-archetipo": "c/c3/Crown_and_chronograph_pushers_of_a_Montblanc_Timewalker_wristwatch_V2.jpg|3024",   // Orologio Emporio Armani Archetipo
  "a7-sneakers-in-canvas-emporio-armani": "a/a1/Oca-low-washed-black-contrast-thread-canvas-sneaker.png|1500",   // Sneakers in canvas Emporio Armani
  "a7-fede-in-oro-giallo-18-carati-3-2-mm": "d/df/Gold_wedding_ring.jpg|4032",   // Fede in oro giallo 18 carati, 3,2 mm
  "a7-maglione-in-seta-e-cashmere-emporio-arma": "e/ea/Jersei-coll-alt.jpg|678",   // Maglione in seta e cashmere Emporio Armani
  "a7-valentino-rockstud-decollete-100-mm": "8/82/Rockstud_leather_caged_pumps_on_feet_(20240531202508).jpg|5049",   // Valentino Rockstud, décolleté 100 mm
  "a7-caban-emporio-armani-in-lana-tweed": "2/22/US_Navy_p_coat_wiki.jpg|288",   // Caban Emporio Armani in lana pied-de-poule
  "a7-cartier-tank-must-quarzo": "d/df/Cartier_Tank.jpg|2726",   // Cartier Tank Must, quarzo
  "a7-cartier-love-bracciale-medio": "f/fa/Cartier_love_collection_re_launched.jpg|155",   // Cartier LOVE, bracciale medio
  "a7-tank-louis-cartier-oro-giallo": "d/df/Cartier_Tank.jpg|2726",   // Tank Louis Cartier, oro giallo, modello piccolo
  "a7-bus-a-roma-biglietto-da-100-minuti": "a/ab/ATAC_Iveco_Bus_Urbanway_(230).jpg|3900",   // Bus a Roma, biglietto da 100 minuti
  "a7-biglietto-della-metro-di-parigi": "0/01/Pont_de_Bir-Hakeim,_may_2025.jpg|3000",   // Biglietto della metro di Parigi
  "a7-ingresso-alla-basilica-di-san-marco": "6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg|4574",   // Ingresso alla Basilica di San Marco
  "a7-traghetto-napoli-capri-nave-lenta": "3/33/Capri_coastline.jpg|3072",   // Traghetto Napoli-Capri, nave lenta
  "a7-treno-dall-aeroporto-di-parigi-al-centro": "f/f1/RER-B_at_Charles_de_Gaulle.jpg|2816",   // Treno dall'aeroporto di Parigi al centro
  "a7-seggiovia-del-monte-solaro-andata-e-rito": "6/65/Monte_Solaro_Chairlift_索拉羅登山纜車_-_panoramio_(1).jpg|3264",   // Seggiovia del Monte Solaro, andata e ritorno (22 nov 2026, ripasso: seggiovia del Monte Solaro: un edificio, la seggiovia non si vede; prima Monte_Solaro_Chairlift_索拉羅山纜車_-_panoramio.jpg)
  "a7-teatro-antico-di-taormina": "6/6d/Teatro_Antico_di_Taormina_(44895386195).jpg|5920",   // Teatro Antico di Taormina
  "a7-salita-al-campanile-di-san-marco": "8/8c/Campanile_of_St._Mark's_Basilica_-_remote_view.jpg|5889",   // Salita al Campanile di San Marco
  "a7-salita-alla-cupola-di-san-pietro-a-piedi": "0/03/Dome_of_St._Peter_in_the_afternoon.JPG|6016",   // Salita alla Cupola di San Pietro, a piedi
  "a7-giro-delle-due-isole-borromee-da-stresa": "e/e4/GolfoBorromeoFeb202026.jpg|8064",   // Giro delle due Isole Borromee da Stresa
  "a7-villa-d-este": "9/9e/Villa_Deste_park_Rometta_2011_2.jpg|3000",   // Villa d'Este
  "a7-museo-del-prado": "6/68/Museo_del_Prado_2016_(25185969599).jpg|4045",   // Museo del Prado
  "a7-scavi-di-ercolano": "b/b7/Herculaneum_007.jpg|3456",   // Scavi di Ercolano
  "a7-museo-d-orsay": "9/9c/Pont_Royal_and_Musée_d'Orsay,_Paris_10_July_2020.jpg|5626",   // Museo d'Orsay
  "a7-casa-di-anne-frank": "c/cb/Amsterdam_(NL),_Anne-Frank-Huis_--_2015_--_7185.jpg|4073",   // Casa di Anne Frank
  "a7-grotte-di-frasassi": "4/45/L'interno_delle_grotte_di_Frasassi.jpg|4000",   // Grotte di Frasassi
  "a7-castel-sant-angelo": "7/73/0_Pont_et_château_Sant'Angelo_-_Rome_(1).JPG|3888",   // Castel Sant'Angelo
  "a7-galleria-borghese": "5/5d/Galleria_borghese_facade.jpg|4378",   // Galleria Borghese
  "a7-alilaguna-dall-aeroporto-a-venezia": "d/d4/Alilaguna_boat_in_Venice.jpg|4896",   // Alilaguna dall'aeroporto a Venezia
  "a7-palazzo-vecchio": "b/b3/Piazza_della_signoria,_palazzo_vecchio,_veduta_01.jpg|4040",   // Palazzo Vecchio
  "a7-giornata-alle-isole-borromee": "e/e4/GolfoBorromeoFeb202026.jpg|8064",   // Giornata alle Isole Borromee
  "a7-giro-sulla-senna-in-battello": "1/1f/Bateau_mouche_jnl_4.jpg|1200",   // Giro sulla Senna in battello
  "a7-reggia-di-venaria": "3/30/La_Reggia_della_Venaria_Reale.jpg|4000",   // Reggia di Venaria
  "a7-torre-di-arnolfo-a-palazzo-vecchio": "f/fe/Torre_di_arnolfo,_palazzo_vecchio.JPG|1200",   // Torre di Arnolfo a Palazzo Vecchio
  "a7-ombrellone-e-due-lettini-a-jesolo": "0/00/Aerial_image_of_Lido_di_Jesolo_(view_from_the_southwest).jpg|5400",   // Ombrellone e due lettini a Jesolo
  "a7-battello-da-como-a-bellagio-andata-e-rit": "9/98/Bellagio_and_Lake_Como_ferry.jpg|4943",   // Battello da Como a Bellagio, andata e ritorno
  "a7-sagrada-familia": "7/74/Sagrada_Familia_March_2015-10a.jpg|6249",   // Sagrada Família
  "a7-cabinovia-dell-alpe-di-siusi-andata-e-ri": "e/e1/Mont_de_Seuc_Fabian_2012_017_01.JPG|7360",   // Cabinovia dell'Alpe di Siusi, andata e ritorno
  "a7-skipass-di-un-giorno-a-livigno": "c/ca/Livigno_sera.jpg|6720",   // Skipass di un giorno a Livigno
  "a7-firenze-card-72-ore": "c/c7/Cattedrale_di_Santa_Maria_del_Fiore_–_Il_Duomo_di_Firenze.jpg|3872",   // Firenze Card, 72 ore
  "a7-disneyland-paris-biglietto-flessibile": "f/f1/Disneyland_Park_05,_Paris_22_August_2013.jpg|3872",   // Disneyland Paris, biglietto flessibile
  "a7-notte-in-un-hotel-3-stelle-a-roma": "e/e1/Bed_in_hotel_room_6.jpg|4048",   // Notte in un hotel 3 stelle a Roma
  "a7-interrail-global-pass-4-giorni-in-un-mes": "d/dc/09.05.22_Trelleborg_Centralstation_X61_037,_X61_057_and_X61_047_(52093968846).jpg|5827",   // Interrail Global Pass, 4 giorni in un mese
  "a7-crociera-di-7-notti-nel-mediterraneo": "8/8c/Costa_Diadema_13-5-2025.jpg|3000",   // Crociera di 7 notti nel Mediterraneo (22 nov 2026, ripasso: la foto non c'è più su Commons (cancellata): nel gioco si vede l'emoji; prima Legend_of_the_Seas.png)
  "a7-una-settimana-alle-maldive": "8/82/MaldivesBungalows.jpg|3024",   // Una settimana alle Maldive
  "a7-safari-di-una-settimana-in-kenya": "1/17/Masai_Mara_at_Sunset.jpg|2400",   // Safari di una settimana in Kenya
  "a7-biglietto-del-vaporetto-per-7-giorni": "7/75/Venezia_Vaporetto_ACTV43_R01.jpg|4462",   // Biglietto del vaporetto per 7 giorni
  "a7-traghetto-in-gondola-sul-canal-grande": "a/a5/Traghetto_San_Tomà_Venice.JPG|4000",   // Traghetto in gondola sul Canal Grande
  "a7-weekend-a-barcellona-per-due": "a/a6/Evening_light_over_Barcelona.jpg|5995",   // Weekend a Barcellona per due
  "a7-settimana-in-un-villaggio-turistico-in-c": "b/b7/Beach_in_Tropea_-_Calabria_-_Italy_-_July_17th_2013_-_01.jpg|4006",   // Settimana in un villaggio turistico in Calabria
  "a7-settimana-a-sharm-el-sheikh-tutto-compre": "f/f5/Gold_Beach_at_Ras_Um_Sid_Bay.jpg|4871",   // Settimana a Sharm el-Sheikh, tutto compreso
  "a7-volo-roma-londra-con-una-low-cost": "8/8c/EI-HGR_Boeing_737-8-200Max_Ryanair_Stansted_18.7.21.jpg|4178",   // Volo Roma-Londra con una low cost
  "a7-una-notte-in-agriturismo-in-toscana": "f/f7/Acquanegra_sul_Chiese-Oasi_Le_Bine.JPG|3770",   // Una notte in agriturismo in Toscana
  "a7-una-notte-in-b-b-a-napoli": "f/fe/Room_at_Bed_&_Breakfast_Karu.jpg|4608",   // Una notte in B&B a Napoli
  "a7-auto-a-noleggio-per-una-settimana-in-sic": "d/d2/2018_Fiat_Panda_Easy_1.2.jpg|4206",   // Auto a noleggio per una settimana in Sicilia
  "a7-una-notte-in-campeggio-con-la-tenda": "7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha,_Sierra_Nevada_National_Park_(DSCF5147).jpg|4667",   // Una notte in campeggio con la tenda
  "a7-bici-a-noleggio-per-un-giorno": "7/79/Munich_-_Bicycles_for_rental_-_9524.jpg|4326",   // Bici a noleggio per un giorno
  "a7-una-notte-in-un-hotel-di-lusso-a-venezia": "a/af/Palazzo_Pisani_Gritti_(Venice).jpg|7360",   // Una notte in un hotel di lusso a Venezia
  "a7-popcorn-medi-al-cinema": "e/e2/Cinema_popcorn_bucket.jpg|2964",   // Popcorn medi al cinema
  "a7-biglietto-del-cinema-in-imax": "a/a9/BFI_London_IMAX_at_night.jpg|1600",   // Biglietto del cinema in IMAX
  "a7-biglietto-in-curva-serie-b": "5/52/Stadio_Luigi_Ferraris_di_Genova_con_il_quartiere_Marassi_(cropped).jpg|3162",   // Biglietto in curva, Serie B
  "a7-spettacolo-comico-a-teatro": "7/75/Auditorium_at_Maxim_in_May_2024.jpg|4608",   // Spettacolo comico a teatro
  "a7-parco-natura-viva-percorso-a-piedi": "1/11/ITALY_-_Tigre_Siberiana_-_Parco_Natura_Viva_-_Verona_3.JPG|4000",   // Parco Natura Viva, percorso a piedi
  "a7-cinecitta-world": "a/a6/Altair_cinecitta_world.jpg|3072",   // Cinecittà World
  "a7-bioparco-di-roma": "f/f8/Ingresso_bioparco_2.JPG|2048",   // Bioparco di Roma
  "a7-ingresso-in-piscina": "c/c3/Swimming_Pool_lanes_and_starting_blocks.jpg|4448",   // Ingresso in piscina
  "a7-una-partita-a-bowling": "9/90/Sunset_Lanes_bowling_alley_-_Beaverton,_OR_(2015).jpg|4736",   // Una partita a bowling
  "a7-giro-in-go-kart": "9/9b/Клас_60.jpg|4512",   // Giro in go-kart
  "a7-parco-avventura-percorso-adulti": "a/ad/Haltern_am_See,_Kletterwald_Haltern_--_2016_--_2559.jpg|5472",   // Parco avventura, percorso adulti
  "a7-lezione-di-surf-di-gruppo": "6/69/Italian_surfer_2.JPG|2209",   // Lezione di surf di gruppo
  "a7-lezione-di-equitazione": "7/72/Riding_School,_North_Hoggs_Park_-_geograph.org.uk_-_131268.jpg|640",   // Lezione di equitazione
  "a7-campo-da-tennis-per-un-ora": "a/a1/Empty_clay_tennis_court_in_Melbourne_Australia_looking_down_the_middle.jpg|4606",   // Campo da tennis per un'ora
  "a7-ingresso-giornaliero-alle-terme": "0/02/Terme_di_Saturnia_-_Cascate_del_Mulino-0518.jpg|5184",   // Ingresso giornaliero alle terme
  "a7-pista-di-pattinaggio-con-noleggio": "7/7e/Empty_Skating_Rink_at_Bryant_Park.jpg|5712",   // Pista di pattinaggio con noleggio
  "a7-battesimo-del-mare-in-immersione": "2/29/Underwater_photograph_of_a_recreational_scuba_diver_in_Playa_del_Carmen_2006.jpg|691",   // Battesimo del mare in immersione
  "a7-pallone-da-calcio-adidas": "2/25/Al-Rihla_(cropped).jpg|2541",   // Pallone da calcio Adidas
  "a7-pallone-da-basket-spalding": "0/09/SPALDING_NBA_OFFICIAL_GAME_BALL_8.jpg|980",   // Pallone da basket Spalding
  "a7-racchetta-da-padel-di-fascia-media": "7/7d/Padel_rackets_and_balls.jpg|6000",   // Racchetta da padel di fascia media
  "a7-scarpe-da-corsa-nike-pegasus": "c/c0/Nike_Zoom_Pegasus_38_running_shoe.jpg|3539",   // Scarpe da corsa Nike Pegasus 42
  "a7-mountain-bike-di-base": "9/96/Orbea_Occam_2020.jpg|6472",   // Mountain bike di base
  "a7-tavola-da-sup-gonfiabile": "8/84/Inflatable_Stand_Up_Paddle_board.png|617",   // Tavola da SUP gonfiabile
  "a7-zaino-da-trekking-50-litri": "d/d7/Rucksack1.jpg|1458",   // Zaino da trekking, 50 litri
  "a7-tavolo-da-ping-pong-da-interno": "c/c9/Table_Tennis_racquet_and_ball_on_table_with_the_net_-_side_view.jpg|4624",   // Tavolo da ping pong da interno
  "a7-risiko-edizione-classica": "8/8c/Amsterdam_-_Risk_players_-_1136_(cropped).jpg|1977",   // Risiko! edizione classica (22 nov 2026, ripasso: Si vedono solo pedine di plastica colorate in uno scatolone. La foto è scura e il…; prima UK_Risk_Pieces_'80s.jpg)
  "a7-monopoly-edizione-classica": "7/78/Monopoly_board_on_white_bg.jpg|1463",   // Monopoly edizione classica
  "a7-mazzo-di-carte-uno": "7/72/Uno_Old_Deck.jpg|640",   // Mazzo di carte Uno
  "a7-cubo-di-rubik-3x3": "6/61/Rubiks_cube_solved.jpg|600",   // Cubo di Rubik 3x3
  "a7-flauto-dolce-yamaha": "7/7e/Yamaha_Soprano_(Descant)_Recorder.jpg|3024",   // Flauto dolce Yamaha
  "a7-armonica-hohner-special-20": "c/c0/Special20.JPG|4592",   // Armonica Hohner Special 20
  "a7-ukulele-soprano": "d/db/Soprano_ukulele_from_China,_made_of_laminated_mahogany_wood.jpg|5184",   // Ukulele soprano
  "a7-tastiera-casio-a-61-tasti": "b/bf/YamahaKeyboard-2.jpg|1527",   // Tastiera Casio a 61 tasti
  "a7-chitarra-acustica-yamaha-f310": "2/2d/Yamaha_F310.jpg|3096",   // Chitarra acustica Yamaha F310
  "a7-pianoforte-digitale-yamaha-p-145": "e/e8/Yamaha_P-125_20190713a.jpg|4352",   // Pianoforte digitale Yamaha P-145
  "a7-pianoforte-digitale-roland-fp-30x": "9/9d/Digital-piano-423.jpg|1400",   // Pianoforte digitale Roland FP-30X
  "a7-sassofono-contralto-yamaha": "5/5c/Yamaha_YAS-25_Alto_Saxophone_20080502.jpg|3072",   // Sassofono contralto Yamaha
  "a7-cajon": "7/72/MAUGEIN_CAJON_01.jpg|2604",   // Cajón
  "a7-nintendo-switch-online-12-mesi": "7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg|4900",   // Nintendo Switch Online, 12 mesi
  "a7-violino-da-studio": "1/1b/Violin_VL100.png|700",   // Violino da studio
  "a7-chitarra-elettrica-fender-stratocaster-p": "6/63/Fender_Stratocaster_004-2.jpg|1432",   // Chitarra elettrica Fender Stratocaster Player II
  "a7-lezione-di-tennis-privata": "4/4a/Tennis_Racquets_and_Balls_on_a_Clay_Court.jpg|3246",   // Lezione di tennis privata
  "a7-lettera-con-posta-ordinaria": "0/0a/Daschle_letter.jpg|400",   // Lettera con posta ordinaria
  "a7-raccomandata-ordinaria": "e/ee/Registered_envelope_of_Kenya_and_Uganda_1930.jpg|1637",   // Raccomandata ordinaria
  "a7-libro-spedito-con-le-poste": "c/c0/Parcelfromamazon.jpeg|3333",   // Libro spedito con le Poste
  "a7-contrassegno-sul-pacco": "d/d3/Verpackung_(34).jpg|3261",   // Contrassegno sul pacco
  "a7-biglietto-bit-di-roma": "3/38/ATAC_ticket_machine_(bus).jpg|3072",   // Biglietto BIT di Roma
  "a7-biglietto-roma-24-ore": "2/2e/Inaugurazione_metro_B1.jpg|2592",   // Biglietto Roma 24 ore
  "a7-abbonamento-annuale-atac": "a/ab/ATAC_Iveco_Bus_Urbanway_(230).jpg|3900",   // Abbonamento annuale ATAC
  "a7-tassa-rifiuti-a-cremona": "0/08/Cremona_Cattedrale_di_Santa_Maria_Assunta_Torrazzo_Vista_sul_la_Piazza_Sant'Antonio_Maria_Zaccaria_1.jpg|4560",   // Tassa rifiuti a Cremona
  "a7-tassa-rifiuti-a-catania": "2/2b/Elephant_fountain,_Catania.jpg|4752",   // Tassa rifiuti a Catania
  "a7-acqua-di-casa-un-anno": "7/73/Wasserhahn.jpg|2272",   // Acqua di casa, un anno
  "a7-fibra-iliad-un-mese": "c/c1/Optical_fiber_connectors-optical_patch_cable-01ASD.jpg|2130",   // Fibra Iliad, un mese
  "a7-libri-per-la-prima-superiore": "e/e6/Japanese_textbooks.jpg|640",   // Libri e dizionari per la prima superiore
  "a7-ticket-del-pronto-soccorso": "2/2f/FEMA_-_18140_-_Photograph_by_Jocelyn_Augustino_taken_on_10-29-2005_in_Florida.jpg|4288",   // Ticket del pronto soccorso
  "a7-ticket-massimo-di-una-ricetta": "7/79/Tessera_Sanitaria_Italia-Fronte.jpg|4364",   // Ticket massimo di una ricetta
  "a7-apparecchio-fisso-per-i-denti": "e/e1/Orthobraces_-_dental_braces_lower_upper_jaw.jpg|2110",   // Apparecchio fisso per i denti
  "a7-sterilizzare-una-gatta": "d/d1/Kitten_supported_on_a_towel-covered_examination_table_in_Newark,_New_Jersey.jpg|3024",   // Sterilizzare una gatta
  "a7-visita-dal-dermatologo": "6/65/IDS-1100_Dermatoscope.jpg|2048",   // Visita dal dermatologo
  "a7-batteria-nuova-per-iphone-17": "5/56/Black_iPhone_17.jpg|4160",   // Batteria nuova per iPhone 17
  "a7-schermo-rotto-di-iphone-17": "6/6d/Smartphone_cracked_screen.jpg|1920",   // Schermo rotto di iPhone 17
  "a7-elettricista-a-casa": "5/5d/US_wiring_basement-panel.jpg|1536",   // Elettricista a casa
  "a7-taglio-di-capelli-per-bambini": "0/03/Leather_belt_bag_with_various_tools_of_a_hairdresser_for_quick_access.jpg|2736",   // Taglio di capelli per bambini
  "a7-pedicure-estetico": "b/b6/Pedicure_with_blue_nail_colour.jpg|768",   // Pedicure estetico
  "a7-massaggio-rilassante-un-ora": "1/1d/USMC-100831-M-2664B-015.jpg|3456",   // Massaggio rilassante, un'ora
  "a7-lezione-di-chitarra": "6/6e/Classical_Guitar_two_views2.png|1051",   // Lezione di chitarra
  "a7-suole-nuove-alle-scarpe": "7/7a/Capri_-_7224.jpg|4368",   // Suole nuove alle scarpe
  "a7-lavaggio-a-secco-di-un-abito": "3/3b/Dry_cleaned_clothes_(Unsplash).jpg|7003",   // Lavaggio a secco di un abito
  "a7-personal-trainer-un-ora": "7/7c/Dumbells_and_free_weights_in_a_gym.jpg|4041",   // Personal trainer, un'ora
  "a7-zeppola-di-san-giuseppe": "b/b8/Zeppole_di_San_Giuseppe.jpg|960",   // Zeppola di San Giuseppe
  "a7-pani-ca-meusa": "e/e3/Pani_ca_meusa.jpg|3968",   // Pani ca' meusa
  "a7-pasta-di-gragnano-igp-500-g": "e/e9/Spaghetti_di_Gragnano_e_colatura_di_alici.jpg|2800",   // Pasta di Gragnano IGP, 500 g
  "a7-pomodori-san-marzano-dop-400-g": "4/4f/San_Marzano_Tomatoes.jpg|698",   // Pomodori San Marzano DOP, 400 g (22 nov 2026, ripasso: Pomodori allungati sulla pianta: tipo San Marzano riconoscibile, ma non i pelati in…; prima TomateSanMarzano.jpg)
  "a7-cioccolato-di-modica-igp-100-g": "9/98/Cioccolato_di_Modica.jpg|5472",   // Cioccolato di Modica IGP, 100 g
  "a7-cantucci-di-prato-igp-250-g": "1/15/I_cantuccini.jpg|3244",   // Cantucci di Prato IGP, 250 g
  "a7-caldarroste-un-cartoccio": "f/fb/Chestnuts_roasted.jpg|1280",   // Caldarroste, un cartoccio
  "a7-pane-di-altamura-dop-1-kg": "7/77/Pane-di-altamura-dop-official.jpg|5616",   // Pane di Altamura DOP, 1 kg
  "a7-mazzo-di-carte-napoletane": "c/c4/Carte_napoletane_al_completo.jpg|3507",   // Mazzo di carte napoletane
  "a7-nduja-di-spilinga-200-g": "0/04/'Nduja.JPG|3888",   // 'Nduja di Spilinga, 200 g
  "a7-cocomero-intero-8-kg": "d/d9/البطيخ_الأحمر.JPG|4320",   // Cocomero intero, 8 kg (22 nov 2026, ripasso: Meloni verde chiaro, non un cocomero a buccia verde striata.; prima Whole_Watermelon.jpg)
  "a7-lenticchie-di-castelluccio-igp-500-g": "6/6e/Lenticchie_z01.jpg|800",   // Lenticchie di Castelluccio IGP, 500 g
  "a7-stella-di-natale-in-vaso": "e/e1/Weihnachtsstern_-_groß.jpg|980",   // Stella di Natale in vaso
  "a7-ricciarelli-di-siena-igp-250-g": "9/97/Ricciarelli_from_Siena-2.jpg|2048",   // Ricciarelli di Siena IGP, 250 g
  "a7-giardino-di-boboli": "7/7e/Jardín_de_Bóboli,_Florencia,_Italia,_2022-09-19,_DD_26.jpg|7850",   // Giardino di Boboli
  "a7-panforte-di-siena-450-g": "8/85/Panforte,_Firenze.jpg|4000",   // Panforte di Siena, 450 g
  "a7-zafferano-dell-aquila-dop-1-g": "6/68/Saffron_-_premium_spice.jpg|4000",   // Zafferano dell'Aquila DOP, 1 g
  "a7-toast-al-caffe-florian": "7/72/Ham_&_cheese_toasted_sandwich_-_Potatoast_2026-05-02.jpg|8160",   // Toast al Caffè Florian
  "a7-palazzo-pitti": "3/30/Palazzo_Pitti_(Florence)_-_Facade_20150811.jpg|5184",   // Palazzo Pitti
  "a7-caffettiera-napoletana-3-tazze": "d/dd/Neapolitan_flip_coffee_pot.jpg|600",   // Caffettiera napoletana, 3 tazze
  "a7-gallerie-dell-accademia": "1/1c/Accademia_(Venice).jpg|3171",   // Gallerie dell'Accademia
  "a7-pastore-del-presepe-napoletano": "b/bd/Campania_Caserta8_tango7174.jpg|1088",   // Pastore del presepe napoletano
  "a7-bottarga-di-muggine-100-g": "3/36/\"_12_-_ITALY_-_Bottarga_di_Muggine_(Sardegna,_ITALIA)_P.A.T._(_botargo_of_Flathead_mullet_).JPG|2585",   // Bottarga di muggine, 100 g
  "a7-maschera-veneziana-di-cartapesta": "2/2a/Venice_Paper_Mache_Mask_shop.jpg|5472",   // Maschera veneziana di cartapesta
  "a7-uffizi-con-il-corridoio-vasariano": "f/f9/Vasari_corridor_and_Ponte_Vecchio_seen_from_the_Uffizi.jpg|4911",   // Uffizi con il Corridoio Vasariano
  "a7-lardo-di-colonnata-igp-1-kg": "f/fa/Lardo_di_Colonnata.JPG|800",   // Lardo di Colonnata IGP, 1 kg
  "a7-colazione-al-caffe-florian": "3/3e/Venice,_Piazza_San_Marco,_Caffè_Florian_3.jpg|5804",   // Colazione al Caffè Florian
  "a7-piatto-di-ceramica-di-deruta": "0/0a/Deruta,_bacile_con_san_francesco_che_riceve_le_stimmate,_1531.jpg|1760",   // Piatto di ceramica di Deruta
  "a7-corso-di-pasta-fresca-a-bologna": "4/42/Tortellini_Bolognesi.jpg|2592",   // Corso di pasta fresca a Bologna
  "a7-una-notte-in-un-trullo": "6/66/Trulli_in_Alberobello_2015.jpg|5096",   // Una notte in un trullo
  "a7-sassicaia-75-cl": "3/38/2003_Bolgheri_Sassicaia.jpg|2432",   // Sassicaia, 75 cl
  "a7-una-forma-intera-di-grana-padano": "0/03/Grana_Padano_DOP_Riserva.jpg|1181",   // Una forma intera di Grana Padano
  "a7-penna-stilografica-aurora-optima": "3/37/Optima_(6792731676).jpg|4272",   // Penna stilografica Aurora Optima
  "a7-cucciolo-di-lagotto-romagnolo": "4/4f/Lagotto_Romagnolo_puppies_-_Allevamento_Valle_dei_Medici.jpg|3000",   // Cucciolo di Lagotto Romagnolo
  "a7-vespa-50-special-d-epoca": "4/40/Vespa_Special_PIA.jpg|2736",   // Vespa 50 Special d'epoca
  "a7-una-gondola-nuova": "2/20/Gondole_Venezia.JPG|2605",   // Una gondola nuova,
  // ---- 25 ott 2026: seconda ricerca di foto libere su Wikimedia Commons per le voci che erano senza foto ----
  "a1-caffe-moka": "2/2c/Lavazza_Qualita_Ross_Caffee_Espresso_-_Made_in_Italy_-_Front_of_Package.jpg|2448",   // Caffè per moka, 250 g (25 ott 2026, seconda ricerca)
  "a1-lievito": "4/44/Fresh_yeast.jpg|2592",   // Lievito di birra fresco (25 ott 2026, seconda ricerca)
  "a1-spotify": "a/ab/Spotify_on_smartphone_(Unsplash).jpg|4869",   // Spotify Premium per un mese (25 ott 2026, seconda ricerca)
  "a1-canone-rai": "8/86/Best_LED_TV_2020.jpg|6000",   // Canone RAI per un anno (25 ott 2026, seconda ricerca)
  "a1-caldaia": "7/74/Caldaia_Murale.jpg|2304",   // Controllo della caldaia (25 ott 2026, seconda ricerca)
  "a1-damigiana": "c/ca/Damigiana_entroterra_Savona.JPG|2448",   // Damigiana di vino, 54 litri (25 ott 2026, seconda ricerca)
  "a2-candela-yankee": "8/83/“‘Tis_the_Sea-Sun_in_Sydney”_Yankee_Candle_scent.jpg|1823",   // Candela Yankee Candle grande (25 ott 2026, seconda ricerca)
  "a2-imperia": "1/1c/Pasta_Machine.jpg|2136",   // Macchina per la pasta Imperia (25 ott 2026, seconda ricerca)
  "a2-congelatore": "0/0c/Freezer_1.jpg|1200",   // Congelatore a pozzetto (25 ott 2026, seconda ricerca)
  "a2-magnifica": "3/38/Automatic_espresso_machine_02.JPG|2592",   // Macchina da caffè De'Longhi (25 ott 2026, seconda ricerca)
  "a2-smeg-frigo": "8/89/Foire_de_Paris_2011_-_Smeg_-_Réfrigérateurs_-_001.jpg|4752",   // Frigorifero Smeg anni '50 (25 ott 2026, seconda ricerca)
  "a2-caldaia": "3/34/Cv_ketel.jpg|1200",   // Caldaia nuova (25 ott 2026, seconda ricerca)
  "a2-apple-pencil": "8/80/Apple_pencil.jpg|3000",   // Apple Pencil (25 ott 2026, seconda ricerca)
  "a3-revisione": "f/f9/Vehicle_inspection_-_brake_test.JPG|3644",   // Revisione dell'auto (25 ott 2026, seconda ricerca)
  "a3-aquafan": "3/31/Pool_in_Aquafan,_Riccione_01.jpg|2816",   // Aquafan (25 ott 2026, seconda ricerca)
  "a3-tribuna-monza": "4/46/Fale_F1_Monza_2004_142.jpg|2048",   // Tribuna centrale a Monza (25 ott 2026, seconda ricerca)
  "a4-lego-titanic": "8/82/P1010667_(2911034625).jpg|3648",   // LEGO Titanic (25 ott 2026, seconda ricerca)
  "a7-panino-e-bibita": "3/36/\"_15_-_ITALY_-_sandwich_with_Prosciutto_Crudo_PARMA_32_mesi_(32_months)_and_FIORE_Sardo_DOP_cheese.jpg|3840",   // Panino e bibita (25 ott 2026, seconda ricerca)
  "a7-caraffa-filtrante-brita": "9/93/Brita_water_pitcher.png|1640",   // Caraffa filtrante Brita Style Essential (25 ott 2026, seconda ricerca)
  "a7-ferro-da-stiro-verticale": "9/90/VAG200.jpg|1000",   // Ferro da stiro verticale (25 ott 2026, seconda ricerca)
  "a7-accappatoio-di-cotone": "f/f7/Spa_bathrobes_and_massage_parlor_in_Amantaka_luxury_Resort_&_Hotel_in_Luang_Prabang_Laos.jpg|4668",   // Accappatoio di cotone (25 ott 2026, seconda ricerca)
  "a7-telecamera-wi-fi-da-interno": "4/4f/YI_1080P_Home_Camera_Photo.jpg|5184",   // Telecamera Wi-Fi da interno (25 ott 2026, seconda ricerca)
  "a7-monitor-gaming-27-pollici-2k": "3/31/Gaming_PC-Setup_-_Astaroth-_The_Completed_System.jpg|6020",   // Monitor gaming 27 pollici 2K, 165 Hz (25 ott 2026, seconda ricerca)
  "a7-chromebook-acer-315": "3/39/Chromebook_laptop_for_Wikimedians_1.jpg|4160",   // Chromebook Acer 314 (25 ott 2026, seconda ricerca)
  "a7-dji-osmo-pocket-3": "b/b9/DJI_Osmo_Pocket_3_-_3.jpg|1770",   // DJI Osmo Pocket 3 (25 ott 2026, seconda ricerca)
  "a7-vignetta-della-slovenia-una-settimana": "d/de/Road_tax_vignette_of_Slovenia_2021_motorcycle_7_days_Mattes.jpg|2358",   // Vignetta della Slovenia, una settimana (25 ott 2026, seconda ricerca)
  "a7-geox-spherica-plus": "f/f8/Geox_Sneakers_black_2025.jpg|4096",   // Geox Spherica Plus (25 ott 2026, seconda ricerca)
  "a7-asics-gel-nyc": "d/d6/Asics_Gel-NYC.jpg|3971",   // Asics GEL-NYC (25 ott 2026, seconda ricerca)
  "a7-tissot-prx-40-mm-al-quarzo": "3/39/Tissot_PRX_35mm.jpg|1200",   // Tissot PRX 40 mm al quarzo (25 ott 2026, seconda ricerca)
  "a7-avviso-di-ricevimento": "e/e9/Avis_de_réception_-_Deutsche_Post_-_return_from_Belgium_-_front_side.jpg|3408",   // Avviso di ricevimento (25 ott 2026, seconda ricerca)
  "a7-il-730-fatto-al-caf": "c/c2/Modello_730.jpg|1241",   // Il 730 fatto al CAF (25 ott 2026, seconda ricerca)
  "a7-vaccino-per-il-cane": "8/85/Ear_examination_of_a_white_dog_in_Newark,_New_Jersey.jpg|4284",   // Vaccino per il cane (25 ott 2026, seconda ricerca)
  "a7-visita-dal-pediatra": "d/d2/Stethoscope-2.png|600",   // Visita dal pediatra (25 ott 2026, seconda ricerca)
  "a7-giardiniere-un-ora": "b/bf/Trimming_the_Parterre_Hedging_at_Pitmedden_-_geograph.org.uk_-_1880461.jpg|2816",   // Giardiniere, un'ora (25 ott 2026, seconda ricerca)
  "a7-un-ora-di-pulizie-a-casa": "4/4c/Vacuum_cleaner_placed_on_the_floor_in_a_living_room_during_routine_cleaning_activity.jpg|6016",   // Un'ora di pulizie a casa (25 ott 2026, seconda ricerca)
  "a7-musical-in-poltronissima": "b/bd/A_scene_from_the_musical_play_\"Hello,_Dolly!\"_by_Lee_University_Theatre_02.jpg|6357",   // Musical in poltronissima (25 ott 2026, seconda ricerca)
  "a7-tappetino-da-yoga": "7/76/Yoga_mats.png|3000",   // Tappetino da yoga (25 ott 2026, seconda ricerca)
  "a7-i-coloni-di-catan": "9/9e/Settlers_of_Catan_completed.jpg|4032",   // I Coloni di Catan (25 ott 2026, seconda ricerca)
  "a7-minecraft-per-nintendo-switch": "a/a9/Minecraft_Creeper_(Crop).png|239",   // Minecraft per Nintendo Switch (22 nov 2026, ripasso: la foto non c'è più su Commons (cancellata): nel gioco si vede l'emoji; prima Minecraft_Creeper.jpg)
  "a2-v-cucina#0": "f/f1/California_Kitchen_Oven_Installation_2.jpg|2288",   // Forno a vapore da incasso (25 ott 2026, seconda ricerca)
  "a2-v-smart#3": "4/43/Height_adjustable_workstation.jpg|3024",   // Scrivania elettrica (25 ott 2026, seconda ricerca)
  "a2-v-giardino#2": "9/9c/Whirlpool_bestway_lay-z-spa_Miami.jpg|4080",   // Idromassaggio gonfiabile (25 ott 2026, seconda ricerca)
  "a5-v-laurea#0": "7/72/Restaurant_table_at_Amantaka_luxury_Resort_&_Hotel_in_Luang_Prabang_Laos.jpg|6048",   // Pranzo di laurea per 30 (25 ott 2026, seconda ricerca)
  "a5-v-camper#1": "2/2d/Fahrradträger.JPG|1600",   // Due bici col portabici (25 ott 2026, seconda ricerca)
  "a5-v-caffe#1": "6/6d/Baratza_Encore_burr_coffee_grinder_and_coffee_beans.jpg|3024",   // Macinacaffè Eureka (25 ott 2026, seconda ricerca)
  "a5-v-vela#2": "3/39/Veste_ROSBRAS_ciré_jaune_traditionnel_breton_par_Guy_Cotten_SAS_-_Grande_Exposition_du_Fabriqué_en_France,_Palais_de_l'Élysée,_19_janvier_2020.jpg|3024",   // Giacca cerata da vela (25 ott 2026, seconda ricerca)
  "a6-v-erasmus#1": "1/1f/Nueva_gramática_de_la_lengua_española.jpg|1359",   // Corso di spagnolo (25 ott 2026, seconda ricerca)
  "a6-v-sanremo#2": "4/44/Rose_and_carnation_flower_bouquet_01.jpg|2655",   // Mazzo di fiori di Sanremo (25 ott 2026, seconda ricerca)
  "a6-v-terme#2": "8/8f/Couples_massage_room_setting.jpg|2992",   // Massaggio di coppia (25 ott 2026, seconda ricerca)
  "a6-v-harry-potter#1": "a/a4/LEGO_Hogwarts_Great_Hall_(6740908341).jpg|2977",   // LEGO castello di Hogwarts (25 ott 2026, seconda ricerca)
  "a7-panna-da-cucina-200-ml": "b/b3/Lyzka_smietany.JPG|2360",   // Panna da cucina, 200 ml (2 nov 2026, terza ricerca)
  "a7-logitech-pebble-keys-2-k380s": "e/e6/Logitech_K380_CJK_Keyboard.jpg|3048",   // Logitech Pebble Keys 2 K380s (2 nov 2026, terza ricerca)
  "a7-visita-dall-oculista": "f/f8/Geraet_beim_Optiker.jpg|2100",   // Visita dall'oculista (2 nov 2026, terza ricerca)
  "a7-lezione-di-yoga": "d/d7/Anahata_yoga_class.jpg|640",   // Lezione di yoga (2 nov 2026, terza ricerca)
  "a3-v-gran-premio#1": "6/63/Blancpain_Endurance_Series_-_Lamborghini_Blancpain_Super_Trofeo_-_F._Renault_2.0_NEC_-_Monza_12-04-2015_(16983037110).jpg|1728",   // Tribuna centrale a Monza (2 nov 2026, terza ricerca)
  "a3-rc-auto": "1/1f/Car_keys_with_keychain.jpg|1600",   // Assicurazione dell'auto (2 nov 2026, terza ricerca)
  "a3-v-prima-auto#1": "1/1f/Car_keys_with_keychain.jpg|1600",   // Assicurazione dell'auto (2 nov 2026, terza ricerca)
  "a7-leggings-con-cashmere": "b/b0/Leggings_clothing_back_view.png|1000",   // Leggings con cashmere (2 nov 2026, terza ricerca)
  "a7-seduta-di-fisioterapia": "d/db/MEDIMAX_Physiotherapy_Clinic_Tel_Aviv.jpg|5040",   // Seduta di fisioterapia (2 nov 2026, terza ricerca)
  "a7-barba-dal-barbiere": "1/10/Barber_shop_(4682858271).jpg|1200",   // Barba dal barbiere (2 nov 2026, terza ricerca)
  "a4-v-collezionista#0": "8/89/Lego_Titanic.jpg|1920",   // LEGO Titanic (2 nov 2026, terza ricerca)
  "a1-crudo-parma": "1/15/Prosciutto_di_Parma,_ham_producing.jpg|1704",   // Prosciutto di Parma, 100 g (22 nov 2026, ripasso: non aveva la foto)
  "a2-dyson-v15": "4/48/Dyson_vacuum_cleaner.jpg|4032",   // Aspirapolvere Dyson V15 (22 nov 2026, ripasso: non aveva la foto)
  "a2-pianoforte": "c/cc/ヤマハ_アップライトピアノ.jpg|3024",   // Pianoforte verticale (22 nov 2026, ripasso: non aveva la foto)
  "a7-amazon-prime-un-anno-2": "d/da/Amazon_Prime_Delivery_Van,_Camp_Street,_New_Orleans,_2020.jpg|7256",   // Amazon Prime, un anno (22 nov 2026, ripasso: non aveva la foto)
  "a7-casco-integrale-agv-k5-tinta-unita": "c/c4/BlackFullCoverageMotorcycleHelmet.jpg|771",   // Casco integrale AGV K5, tinta unita (22 nov 2026, ripasso: non aveva la foto)
  "a5-v-pulizie#0": "a/a8/-2022-01-14_Cleaning_brushes_and_buckets,_Morrisons,_Cromer.JPG|2937",   // Un anno di pulizie (22 nov 2026, ripasso: non aveva la foto)
};

/* =========================================================
   I DISEGNI DEI GIOCHI A PREMI del Prezzo è Giusto (21 nov 2026, scelti dal proprietario al posto delle emoji).
   Tessere quadrate in stile «🌙 Notte vivace» (vetro blu notte, colori dell'app, niente contorni neri), disegnate da noi:
   SVG dentro il gioco, quindi vanno anche senza rete e non servono crediti. Le usa iconaPremio in prezzo-scena.js
   (scelta del gioco a premi, regole, testata di ogni gioco). Un gioco a premi nuovo deve avere anche il suo disegno qui
   (viewBox 0 0 256 256, gli id interni con un prefisso suo); senza, si vede la sua emoji.
   I file di partenza e il foglio di controllo: D:\SG-prezzo-prove\immagini\disegni.
   ========================================================= */
window.SG_PREZZO_DISEGNI = {
  piuomeno: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="pm-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="pm-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#34d17a" stop-opacity=".5"/><stop offset="1" stop-color="#34d17a" stop-opacity="0"/></radialGradient><linearGradient id="pm-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="pm-v" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7af0b0"/><stop offset="1" stop-color="#1f9d5a"/></linearGradient><linearGradient id="pm-r" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7aa5"/><stop offset="1" stop-color="#b3123f"/></linearGradient><linearGradient id="pm-o" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#f0a41c"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#pm-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#pm-gl)"/><polygon points="128,30 170,76 146,76 146,100 110,100 110,76 86,76" fill="url(#pm-v)" stroke="#34d17a" stroke-width="10" stroke-linejoin="round"/><polygon points="128,226 170,180 146,180 146,156 110,156 110,180 86,180" fill="url(#pm-r)" stroke="#e0225a" stroke-width="10" stroke-linejoin="round"/><rect x="72" y="106" width="112" height="44" rx="14" fill="url(#pm-o)"/><rect x="72" y="106" width="112" height="44" rx="14" fill="url(#pm-lu)"/><circle cx="88" cy="128" r="5" fill="#151a2e" fill-opacity=".6"/><text x="134" y="141" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="34" fill="#2a1d00">€</text></svg>',
  alpinista: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="al-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="al-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4fd8ff" stop-opacity=".5"/><stop offset="1" stop-color="#4fd8ff" stop-opacity="0"/></radialGradient><linearGradient id="al-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="al-m1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d63c8"/><stop offset="1" stop-color="#34306f"/></linearGradient><linearGradient id="al-m2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4fa6e0"/><stop offset="1" stop-color="#26427f"/></linearGradient><linearGradient id="al-sn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#c3d2f5"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#al-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#al-gl)"/><polygon points="120,100 190,214 40,214" fill="url(#al-m1)" stroke="#6d63c8" stroke-width="12" stroke-linejoin="round"/><polygon points="128,50 222,206 34,206" fill="url(#al-m2)" stroke="#4fa6e0" stroke-width="14" stroke-linejoin="round"/><polygon points="128,50 96,104 114,98 128,114 144,98 160,104" fill="url(#al-sn)" stroke="#e8efff" stroke-width="10" stroke-linejoin="round"/><path d="M86 204 Q110 176 98 160 Q92 146 120 134" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="4" stroke-dasharray="2 9" stroke-linecap="round"/><g transform="translate(145 150) scale(1.3) translate(-145 -150)"><line x1="144" y1="116" x2="144" y2="88" stroke="#f4f5fb" stroke-width="4" stroke-linecap="round"/><polygon points="144,88 168,96 144,104" fill="#ffc247" stroke="#ffc247" stroke-width="4" stroke-linejoin="round"/><rect x="132" y="130" width="26" height="34" rx="12" fill="#e0225a"/><circle cx="145" cy="122" r="10" fill="#ffd9b8"/><path d="M135 119 Q145 106 155 119 Z" fill="#ff4f86"/></g><circle cx="172" cy="52" r="5" fill="#fff" fill-opacity=".8"/><circle cx="64" cy="62" r="3.5" fill="#fff" fill-opacity=".6"/></svg>',
  ordine: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="or-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="or-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffc247" stop-opacity=".5"/><stop offset="1" stop-color="#ffc247" stop-opacity="0"/></radialGradient><linearGradient id="or-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#or-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#or-gl)"/><rect x="26" y="174" width="36" height="34" rx="9" fill="#4fd8ff"/><rect x="26" y="174" width="36" height="34" rx="9" fill="url(#or-lu)"/><rect x="40" y="182" width="8" height="6" rx="3" fill="#fff" fill-opacity=".55"/><rect x="68" y="150" width="36" height="58" rx="9" fill="#b39bff"/><rect x="68" y="150" width="36" height="58" rx="9" fill="url(#or-lu)"/><rect x="82" y="158" width="8" height="6" rx="3" fill="#fff" fill-opacity=".55"/><rect x="110" y="126" width="36" height="82" rx="9" fill="#34d17a"/><rect x="110" y="126" width="36" height="82" rx="9" fill="url(#or-lu)"/><rect x="124" y="134" width="8" height="6" rx="3" fill="#fff" fill-opacity=".55"/><rect x="152" y="102" width="36" height="106" rx="9" fill="#ff9a4a"/><rect x="152" y="102" width="36" height="106" rx="9" fill="url(#or-lu)"/><rect x="166" y="110" width="8" height="6" rx="3" fill="#fff" fill-opacity=".55"/><rect x="194" y="78" width="36" height="130" rx="9" fill="#e0225a"/><rect x="194" y="78" width="36" height="130" rx="9" fill="url(#or-lu)"/><rect x="208" y="86" width="8" height="6" rx="3" fill="#fff" fill-opacity=".55"/><line x1="38" y1="58" x2="190" y2="58" stroke="#ffc247" stroke-width="10" stroke-linecap="round"/><polygon points="192,40 224,58 192,76" fill="#ffc247" stroke="#ffc247" stroke-width="6" stroke-linejoin="round"/></svg>',
  troppo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="tr-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="tr-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e0225a" stop-opacity=".5"/><stop offset="1" stop-color="#e0225a" stop-opacity="0"/></radialGradient><linearGradient id="tr-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="tr-o" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff4f86"/><stop offset="1" stop-color="#a3123f"/></linearGradient><linearGradient id="tr-h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d9def5"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#tr-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#tr-gl)"/><g transform="translate(128 128) scale(.9) translate(-128 -128)"><polygon id="tr-oct" points="220.4,89.7 220.4,166.3 166.3,220.4 89.7,220.4 35.6,166.3 35.6,89.7 89.7,35.6 166.3,35.6" fill="url(#tr-o)" stroke="#ff4f86" stroke-width="10" stroke-linejoin="round"/><polygon points="220.4,89.7 220.4,166.3 166.3,220.4 89.7,220.4 35.6,166.3 35.6,89.7 89.7,35.6 166.3,35.6" fill="url(#tr-lu)"/><polygon points="206,96 206,160 160,206 96,206 50,160 50,96 96,50 160,50" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="5" stroke-linejoin="round"/><g fill="url(#tr-h)"><rect x="101" y="108" width="14" height="44" rx="7"/><rect x="116" y="92" width="14" height="60" rx="7"/><rect x="131" y="88" width="14" height="64" rx="7"/><rect x="146" y="98" width="14" height="54" rx="7"/><rect x="98" y="128" width="64" height="52" rx="20"/><rect x="80" y="122" width="15" height="40" rx="7.5" transform="rotate(-38 88 150)"/></g></g></svg>',
  plinko: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="pl-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="pl-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#b39bff" stop-opacity=".5"/><stop offset="1" stop-color="#b39bff" stop-opacity="0"/></radialGradient><linearGradient id="pl-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="pl-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a4396"/><stop offset="1" stop-color="#22285a"/></linearGradient><radialGradient id="pl-c" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff0b0"/><stop offset=".5" stop-color="#ffc247"/><stop offset="1" stop-color="#d98a0a"/></radialGradient></defs><rect width="256" height="256" rx="56" fill="url(#pl-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#pl-gl)"/><polygon points="100,40 156,40 216,208 40,208" fill="url(#pl-b)" stroke="#6b61c4" stroke-width="12" stroke-linejoin="round"/><circle cx="115" cy="98" r="5.5" fill="#cfeeff"/><circle cx="113.5" cy="96.5" r="2" fill="#fff"/><circle cx="141" cy="98" r="5.5" fill="#cfeeff"/><circle cx="139.5" cy="96.5" r="2" fill="#fff"/><circle cx="102" cy="124" r="5.5" fill="#cfeeff"/><circle cx="100.5" cy="122.5" r="2" fill="#fff"/><circle cx="128" cy="124" r="5.5" fill="#cfeeff"/><circle cx="126.5" cy="122.5" r="2" fill="#fff"/><circle cx="154" cy="124" r="5.5" fill="#cfeeff"/><circle cx="152.5" cy="122.5" r="2" fill="#fff"/><circle cx="89" cy="150" r="5.5" fill="#cfeeff"/><circle cx="87.5" cy="148.5" r="2" fill="#fff"/><circle cx="115" cy="150" r="5.5" fill="#cfeeff"/><circle cx="113.5" cy="148.5" r="2" fill="#fff"/><circle cx="141" cy="150" r="5.5" fill="#cfeeff"/><circle cx="139.5" cy="148.5" r="2" fill="#fff"/><circle cx="167" cy="150" r="5.5" fill="#cfeeff"/><circle cx="165.5" cy="148.5" r="2" fill="#fff"/><circle cx="76" cy="176" r="5.5" fill="#cfeeff"/><circle cx="74.5" cy="174.5" r="2" fill="#fff"/><circle cx="102" cy="176" r="5.5" fill="#cfeeff"/><circle cx="100.5" cy="174.5" r="2" fill="#fff"/><circle cx="128" cy="176" r="5.5" fill="#cfeeff"/><circle cx="126.5" cy="174.5" r="2" fill="#fff"/><circle cx="154" cy="176" r="5.5" fill="#cfeeff"/><circle cx="152.5" cy="174.5" r="2" fill="#fff"/><circle cx="180" cy="176" r="5.5" fill="#cfeeff"/><circle cx="178.5" cy="174.5" r="2" fill="#fff"/><rect x="52" y="190" width="30" height="12" rx="6" fill="#4fd8ff"/><rect x="86" y="190" width="30" height="12" rx="6" fill="#ffc247"/><rect x="120" y="190" width="30" height="12" rx="6" fill="#e0225a"/><rect x="154" y="190" width="30" height="12" rx="6" fill="#34d17a"/><path d="M128 80 L130 92" stroke="#ffc247" stroke-opacity=".6" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/><circle cx="128" cy="62" r="17" fill="url(#pl-c)"/><circle cx="128" cy="62" r="10.5" fill="none" stroke="#b9770a" stroke-opacity=".5" stroke-width="3"/><ellipse cx="121" cy="55" rx="5" ry="3" fill="#fff" fill-opacity=".7" transform="rotate(-30 121 55)"/></svg>',
  spesa: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="sp-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="sp-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4fd8ff" stop-opacity=".5"/><stop offset="1" stop-color="#4fd8ff" stop-opacity="0"/></radialGradient><linearGradient id="sp-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="sp-k" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7fe6ff"/><stop offset="1" stop-color="#2a8fb5"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#sp-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#sp-gl)"/><rect x="128" y="56" width="38" height="50" rx="9" fill="#34d17a"/><rect x="128" y="56" width="38" height="50" rx="9" fill="url(#sp-lu)"/><rect x="136" y="68" width="22" height="9" rx="4" fill="#fff" fill-opacity=".6"/><rect x="172" y="58" width="24" height="48" rx="10" fill="#ffc247"/><rect x="172" y="58" width="24" height="48" rx="10" fill="url(#sp-lu)"/><rect x="178" y="46" width="12" height="16" rx="4" fill="#ff9a4a"/><circle cx="98" cy="86" r="22" fill="#e0225a"/><circle cx="98" cy="86" r="22" fill="url(#sp-lu)"/><path d="M98 66 Q100 56 110 54" stroke="#34d17a" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="90" cy="78" rx="6" ry="4" fill="#fff" fill-opacity=".6" transform="rotate(-35 90 78)"/><polygon points="62,98 218,98 198,164 82,164" fill="url(#sp-k)" stroke="#7fe6ff" stroke-width="10" stroke-linejoin="round"/><g stroke="#0d3a52" stroke-opacity=".35" stroke-width="3" stroke-linecap="round"><line x1="100" y1="106" x2="106" y2="156"/><line x1="138" y1="106" x2="138" y2="156"/><line x1="176" y1="106" x2="170" y2="156"/><line x1="72" y1="126" x2="208" y2="126"/></g><path d="M26 56 H52 L82 176 H196" fill="none" stroke="#f4f5fb" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="102" cy="204" r="13" fill="#f4f5fb"/><circle cx="102" cy="204" r="5" fill="#3a4272"/><circle cx="178" cy="204" r="13" fill="#f4f5fb"/><circle cx="178" cy="204" r="5" fill="#3a4272"/></svg>',
  cassaforte: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="ca-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="ca-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffc247" stop-opacity=".5"/><stop offset="1" stop-color="#ffc247" stop-opacity="0"/></radialGradient><linearGradient id="ca-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="ca-s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6c76ad"/><stop offset="1" stop-color="#2b3158"/></linearGradient><linearGradient id="ca-i" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b4373"/><stop offset="1" stop-color="#20264a"/></linearGradient><linearGradient id="ca-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#c9810a"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#ca-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#ca-gl)"/><rect x="38" y="38" width="180" height="170" rx="30" fill="url(#ca-s)"/><rect x="38" y="38" width="180" height="170" rx="30" fill="url(#ca-lu)"/><rect x="54" y="54" width="148" height="138" rx="20" fill="url(#ca-i)" stroke="#8d97d0" stroke-opacity=".5" stroke-width="3"/><rect x="30" y="76" width="14" height="30" rx="6" fill="#9aa4d8"/><rect x="30" y="140" width="14" height="30" rx="6" fill="#9aa4d8"/><rect x="64" y="208" width="30" height="12" rx="6" fill="#2b3158"/><rect x="162" y="208" width="30" height="12" rx="6" fill="#2b3158"/><circle cx="128" cy="123" r="50" fill="url(#ca-g)"/><circle cx="128" cy="123" r="40" fill="#1b2040"/><circle cx="128" cy="123" r="34" fill="none" stroke="#ffe08a" stroke-width="7" stroke-dasharray="3 6.9"/><circle cx="128" cy="123" r="19" fill="url(#ca-g)"/><line x1="128" y1="123" x2="128" y2="104" stroke="#8a5a05" stroke-width="5" stroke-linecap="round"/><polygon points="119,64 137,64 128,78" fill="#e0225a" stroke="#e0225a" stroke-width="4" stroke-linejoin="round"/><ellipse cx="108" cy="92" rx="14" ry="6" fill="#fff" fill-opacity=".35" transform="rotate(-35 108 92)"/></svg>',
  dadi: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="da-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="da-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e0225a" stop-opacity=".5"/><stop offset="1" stop-color="#e0225a" stop-opacity="0"/></radialGradient><linearGradient id="da-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#da-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#da-gl)"/><g stroke-linejoin="round" stroke-width="5"><polygon points="38,73 92,104 92,166 38,135" fill="#d11a52" stroke="#d11a52"/><polygon points="92,104 146,73 146,135 92,166" fill="#8e0f36" stroke="#8e0f36"/><polygon points="92,42 146,73 92,104 38,73" fill="#ff7aa5" stroke="#ff7aa5"/></g><g transform="matrix(54 31 0 62 38 73)" fill="#fff"><circle cx="0.3" cy="0.3" r=".09"/><circle cx="0.7" cy="0.7" r=".09"/></g><g transform="matrix(54 -31 0 62 92 104)" fill="#fff"><circle cx="0.25" cy="0.25" r=".09"/><circle cx="0.5" cy="0.5" r=".09"/><circle cx="0.75" cy="0.75" r=".09"/></g><g transform="matrix(54 -31 54 31 38 73)" fill="#fff"><circle cx="0.28" cy="0.28" r=".09"/><circle cx="0.72" cy="0.28" r=".09"/><circle cx="0.28" cy="0.72" r=".09"/><circle cx="0.72" cy="0.72" r=".09"/></g><g stroke-linejoin="round" stroke-width="5"><polygon points="132,149 172,172 172,218 132,195" fill="#2aa6cc" stroke="#2aa6cc"/><polygon points="172,172 212,149 212,195 172,218" fill="#1b7fa3" stroke="#1b7fa3"/><polygon points="172,126 212,149 172,172 132,149" fill="#8fe6ff" stroke="#8fe6ff"/></g><g transform="matrix(40 23 0 46 132 149)" fill="#fff"><circle cx="0.3" cy="0.3" r=".09"/><circle cx="0.7" cy="0.7" r=".09"/></g><g transform="matrix(40 -23 0 46 172 172)" fill="#fff"><circle cx="0.25" cy="0.25" r=".09"/><circle cx="0.5" cy="0.5" r=".09"/><circle cx="0.75" cy="0.75" r=".09"/></g><g transform="matrix(40 -23 40 23 132 149)" fill="#fff"><circle cx="0.5" cy="0.5" r=".09"/></g></svg>',
  mirino: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="mi-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="mi-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff4f86" stop-opacity=".5"/><stop offset="1" stop-color="#ff4f86" stop-opacity="0"/></radialGradient><linearGradient id="mi-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><radialGradient id="mi-c" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff0b0"/><stop offset="1" stop-color="#f0a41c"/></radialGradient></defs><rect width="256" height="256" rx="56" fill="url(#mi-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#mi-gl)"/><circle cx="128" cy="128" r="80" fill="#3a4272"/><circle cx="128" cy="128" r="80" fill="url(#mi-lu)"/><circle cx="128" cy="128" r="64" fill="#e0225a"/><circle cx="128" cy="128" r="48" fill="#f4f5fb"/><circle cx="128" cy="128" r="32" fill="#e0225a"/><circle cx="128" cy="128" r="64" fill="url(#mi-lu)" fill-opacity=".6"/><circle cx="128" cy="128" r="15" fill="url(#mi-c)"/><g stroke="#4fd8ff" stroke-width="7" stroke-linecap="round"><line x1="128" y1="20" x2="128" y2="68"/><line x1="128" y1="188" x2="128" y2="236"/><line x1="20" y1="128" x2="68" y2="128"/><line x1="188" y1="128" x2="236" y2="128"/></g><circle cx="128" cy="128" r="90" fill="none" stroke="#4fd8ff" stroke-opacity=".6" stroke-width="4"/></svg>',
  prova5: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="p5-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="p5-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#34d17a" stop-opacity=".5"/><stop offset="1" stop-color="#34d17a" stop-opacity="0"/></radialGradient><linearGradient id="p5-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="p5-t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cdd2f0"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#p5-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#p5-gl)"/><g transform="translate(86 138) rotate(-9)"><rect x="-42" y="-54" width="88" height="116" rx="18" fill="#000" fill-opacity=".25"/><rect x="-44" y="-58" width="88" height="116" rx="18" fill="url(#p5-t)"/><circle cx="0" cy="-40" r="7" fill="#20264a"/><polyline points="-22,6 -6,24 24,-12" fill="none" stroke="#34d17a" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/></g><g transform="translate(172 120) rotate(9)"><rect x="-42" y="-54" width="88" height="116" rx="18" fill="#000" fill-opacity=".25"/><rect x="-44" y="-58" width="88" height="116" rx="18" fill="url(#p5-t)"/><circle cx="0" cy="-40" r="7" fill="#20264a"/><g stroke="#e0225a" stroke-width="16" stroke-linecap="round"><line x1="-20" y1="-6" x2="20" y2="34"/><line x1="20" y1="-6" x2="-20" y2="34"/></g></g></svg>',
  togli: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="tg-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#252c4a"/><stop offset="1" stop-color="#151a2e"/></linearGradient><radialGradient id="tg-gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff9a4a" stop-opacity=".5"/><stop offset="1" stop-color="#ff9a4a" stop-opacity="0"/></radialGradient><linearGradient id="tg-lu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="tg-t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cdd2f0"/></linearGradient></defs><rect width="256" height="256" rx="56" fill="url(#tg-bg)"/><rect x="1" y="1" width="254" height="254" rx="55" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="128" cy="128" r="112" fill="url(#tg-gl)"/><rect x="26" y="117" width="204" height="100" rx="26" fill="#000" fill-opacity=".25"/><rect x="26" y="112" width="204" height="100" rx="26" fill="url(#tg-t)"/><rect x="98" y="124" width="60" height="76" rx="14" fill="none" stroke="#e0225a" stroke-width="5" stroke-dasharray="8 8" stroke-linecap="round"/><g font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="82" text-anchor="middle" fill="#20264a"><text x="62" y="193">4</text><text x="194" y="193">9</text></g><path d="M128 112 Q120 80 150 66" fill="none" stroke="#ff9a4a" stroke-width="5" stroke-dasharray="2 9" stroke-linecap="round"/><text x="168" y="86" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="74" fill="#e0225a" transform="rotate(20 168 66)" stroke="#ff4f86" stroke-width="2">7</text><polygon points="212,28 217,42 231,47 217,52 212,66 207,52 193,47 207,42" fill="#ffc247"/><polygon points="66,40 69,49 78,52 69,55 66,64 63,55 54,52 63,49" fill="#ffc247"/><circle cx="214" cy="96" r="4" fill="#ff9a4a"/><circle cx="48" cy="92" r="3.5" fill="#4fd8ff"/></svg>'
};

/* =========================================================
   «IL PREZZO È GIUSTO!» — i pezzi da vedere e da sentire (window.SGPrezzoScena)
   Li usano il gioco (js/games/prezzo.js) e i giochi a premi (js/games/prezzo-premi-*.js):
   - i prezzi all'italiana: fmtE(1129) = "1.129 €", fmtE(6.99) = "6,99 €"; passo e margine dei prezzi;
   - la scheda del prodotto, il cartellino del prezzo, il sipario «Apriti, sesamo!»;
   - il contachilometri del prezzo che compare cifra per cifra;
   - il pannello che sale dal basso, il tastierino dell'offerta (mai la tastiera del telefono), la barra del tempo;
   - la Ruota del 100 (striscia di numeri che si spinge col dito in giù);
   - i suoni (sipario, campanello del PREZZO GIUSTO, trombone triste, fischi, clic della ruota, «Cento!», cassa) e la vibrazione.
   Regola d'oro dello studio: le animazioni muovono solo transform e opacity. Prefisso delle classi: pz-.
   ========================================================= */
(function () {
  "use strict";

  // ---------------- i numeri e i prezzi ----------------
  function fmtN(n) { var s = String(Math.round(Math.abs(n || 0))).replace(/\B(?=(\d{3})+(?!\d))/g, "."); return (n < 0 ? "−" : "") + s; }
  function tondo2(v) { return Math.round((+v || 0) * 100) / 100; }
  // 1129 → "1.129 €", 6.99 → "6,99 €", 0.3 → "0,30 €" (i centesimi solo se ci sono)
  function fmtE(v, senzaEuro) {
    v = tondo2(v);
    var intero = Math.floor(Math.abs(v) + 1e-9), cent = Math.round((Math.abs(v) - intero) * 100);
    var s = fmtN(intero) + (cent ? "," + (cent < 10 ? "0" : "") + cent : "");
    return (v < 0 ? "−" : "") + s + (senzaEuro ? "" : " €");
  }
  // il "passo" di arrotondamento di un prezzo (per il PREZZO GIUSTO e per i prezzi che fa il gioco)
  function passo(p) { p = +p || 0; return p < 2 ? 0.05 : p < 20 ? 0.1 : p < 100 ? 1 : p < 1000 ? 5 : p < 10000 ? 50 : 500; }
  // quanto si può superare il prezzo e valere ancora (i prezzi cambiano da città a città): 2% o un passo, il più grande
  function margine(p, pct) { return Math.max((+p || 0) * (pct == null ? 0.02 : pct), passo(p)); }
  function arrotonda(v, p) { var s = passo(p == null ? v : p); return tondo2(Math.round(v / s) * s); }
  // i prezzi coi centesimi: il tastierino ha la virgola solo sotto i 20 €
  function conCent(p) { return (+p || 0) < 20; }

  // ---------------- le categorie (nome, icona, colore) ----------------
  var CAT = {
    spesa: { nome: "Spesa al supermercato", corto: "Spesa", ic: "🛒", col: "#2f9e44" },
    bar: { nome: "Bar, pizzeria e ristoranti", corto: "Bar e ristoranti", ic: "☕", col: "#e8590c" },
    casa: { nome: "Casa ed elettrodomestici", corto: "Casa", ic: "🏠", col: "#1971c2" },
    tech: { nome: "Tecnologia", corto: "Tecnologia", ic: "📱", col: "#5f3dc4" },
    motori: { nome: "Auto, moto e bici", corto: "Auto e moto", ic: "🛵", col: "#c92a2a" },
    viaggi: { nome: "Viaggi e vacanze", corto: "Viaggi", ic: "🏖️", col: "#0c8599" },
    vestiti: { nome: "Vestiti e accessori", corto: "Vestiti", ic: "👟", col: "#c2255c" },
    servizi: { nome: "Servizi e bollette", corto: "Servizi", ic: "🧾", col: "#5c940d" },
    svago: { nome: "Sport, svago e spettacoli", corto: "Sport e spettacoli", ic: "🎟️", col: "#d6336c" },
    curiosita: { nome: "Curiosità italiane", corto: "Curiosità", ic: "🇮🇹", col: "#0b7285" }
  };
  var ORDINE_CAT = ["spesa", "bar", "casa", "tech", "motori", "viaggi", "vestiti", "servizi", "svago", "curiosita"];

  function vibra(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {} }

  // ---------------- i suoni (WebAudio, niente file) ----------------
  function ac() { try { return window.SG && SG.audioCtx ? SG.audioCtx() : null; } catch (e) { return null; } }
  function nota(c, f, t, dur, tipo, vol, scivola) {
    var o = c.createOscillator(), g = c.createGain();
    o.type = tipo || "sine"; o.frequency.setValueAtTime(f, t);
    if (scivola) o.frequency.exponentialRampToValueAtTime(scivola, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.15, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur + 0.02);
    return o;
  }
  function ottone(c, f, t, dur, vol) {   // una nota di tromba: dente di sega filtrato che si apre
    var o = c.createOscillator(), o2 = c.createOscillator(), lp = c.createBiquadFilter(), g = c.createGain();
    o.type = "sawtooth"; o2.type = "sawtooth"; o.frequency.value = f; o2.frequency.value = f * 1.005;
    lp.type = "lowpass"; lp.frequency.setValueAtTime(600, t); lp.frequency.linearRampToValueAtTime(2600, t + 0.08); lp.frequency.linearRampToValueAtTime(1500, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.08, t + 0.03); g.gain.setValueAtTime(vol || 0.08, t + dur * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(lp); o2.connect(lp); lp.connect(g); g.connect(c.destination);
    o.start(t); o2.start(t); o.stop(t + dur + 0.02); o2.stop(t + dur + 0.02);
  }
  var FX = {
    // il sipario si apre: «ta-da-daaa»
    tada: function () { var c = ac(); if (!c) return; try { var t = c.currentTime; ottone(c, 523, t, 0.14, 0.07); ottone(c, 659, t + 0.13, 0.14, 0.07); ottone(c, 784, t + 0.26, 0.6, 0.08); ottone(c, 1046, t + 0.26, 0.6, 0.05); } catch (e) {} },
    // il campanello del PREZZO GIUSTO: din-din-din
    din: function () { var c = ac(); if (!c) return; try { var t = c.currentTime; [0, 0.16, 0.32].forEach(function (d) { nota(c, 2093, t + d, 0.5, "sine", 0.16); nota(c, 4186, t + d, 0.25, "sine", 0.04); }); } catch (e) {} },
    // il trombone triste: wah-wah-wah-waaah
    trombone: function () {
      var c = ac(); if (!c) return;
      try {
        var t = c.currentTime;
        [[311, 0, 0.32], [294, 0.36, 0.32], [277, 0.72, 0.32], [262, 1.08, 1.0]].forEach(function (n) {
          var o = c.createOscillator(), lp = c.createBiquadFilter(), g = c.createGain(), lfo = c.createOscillator(), lg = c.createGain();
          o.type = "sawtooth"; o.frequency.setValueAtTime(n[0], t + n[1]);
          if (n[2] > 0.5) { o.frequency.setValueAtTime(n[0], t + n[1] + 0.3); o.frequency.linearRampToValueAtTime(n[0] * 0.94, t + n[1] + n[2]); }
          lp.type = "lowpass"; lp.frequency.setValueAtTime(380, t + n[1]); lp.frequency.linearRampToValueAtTime(1100, t + n[1] + 0.12); lp.frequency.linearRampToValueAtTime(420, t + n[1] + n[2]);
          if (n[2] > 0.5) { lfo.frequency.value = 6; lg.gain.value = 260; lfo.connect(lg); lg.connect(lp.frequency); lfo.start(t + n[1]); lfo.stop(t + n[1] + n[2]); }
          g.gain.setValueAtTime(0.0001, t + n[1]); g.gain.exponentialRampToValueAtTime(0.11, t + n[1] + 0.04); g.gain.exponentialRampToValueAtTime(0.0001, t + n[1] + n[2]);
          o.connect(lp); lp.connect(g); g.connect(c.destination); o.start(t + n[1]); o.stop(t + n[1] + n[2] + 0.02);
        });
      } catch (e) {}
    },
    // il pubblico fischia il «+1 €»: «buuuu» (voci basse) e qualche fischio
    buu: function () {
      var c = ac(); if (!c) return;
      try {
        var t = c.currentTime;
        for (var v = 0; v < 9; v++) {
          var f0 = 95 + Math.random() * 90, t0 = t + Math.random() * 0.15, o = c.createOscillator(), b = c.createBiquadFilter(), g = c.createGain();
          o.type = "sawtooth"; o.frequency.setValueAtTime(f0, t0); o.frequency.linearRampToValueAtTime(f0 * 0.9, t0 + 1.3);
          b.type = "bandpass"; b.frequency.value = 300 + Math.random() * 60; b.Q.value = 4;
          g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.09, t0 + 0.25); g.gain.setValueAtTime(0.09, t0 + 0.9); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.4);
          o.connect(b); b.connect(g); g.connect(c.destination); o.start(t0); o.stop(t0 + 1.45);
        }
        [0.2, 0.7].forEach(function (d) { nota(c, 2600, t + d, 0.35, "sine", 0.035, 1500); });
      } catch (e) {}
    },
    // il clic della ruota (vol 0..1)
    clic: function (vol) { var c = ac(); if (!c) return; try { nota(c, 1700 + Math.random() * 200, c.currentTime, 0.035, "square", 0.05 * (vol == null ? 1 : vol)); } catch (e) {} },
    // il tic degli ultimi secondi
    tic: function (f) { var c = ac(); if (!c) return; try { nota(c, f || 980, c.currentTime, 0.06, "square", 0.07); } catch (e) {} },
    // un tocco leggero (una cifra che si ferma, una riga che compare)
    toc: function (f) { var c = ac(); if (!c) return; try { nota(c, f || 660, c.currentTime, 0.08, "triangle", 0.09); } catch (e) {} },
    // «CENTO! CENTO! CENTO!»: tre grida della folla
    cento: function () {
      var c = ac(); if (!c) return;
      try {
        var t = c.currentTime;
        [0, 0.42, 0.84].forEach(function (d) {
          for (var v = 0; v < 6; v++) {
            var f0 = 180 + Math.random() * 160, o = c.createOscillator(), b = c.createBiquadFilter(), g = c.createGain(), t0 = t + d + Math.random() * 0.04;
            o.type = "sawtooth"; o.frequency.setValueAtTime(f0, t0); o.frequency.linearRampToValueAtTime(f0 * 1.25, t0 + 0.1); o.frequency.linearRampToValueAtTime(f0 * 0.9, t0 + 0.32);
            b.type = "bandpass"; b.frequency.value = 700 + Math.random() * 300; b.Q.value = 2.5;
            g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.07, t0 + 0.04); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.34);
            o.connect(b); b.connect(g); g.connect(c.destination); o.start(t0); o.stop(t0 + 0.36);
          }
        });
      } catch (e) {}
    },
    // la cassa del supermercato: «ka-ching» (il carrello dei premi)
    cassa: function () { var c = ac(); if (!c) return; try { var t = c.currentTime; nota(c, 1318, t, 0.12, "square", 0.05); nota(c, 2637, t + 0.09, 0.5, "sine", 0.12); nota(c, 3520, t + 0.09, 0.35, "sine", 0.05); } catch (e) {} },
    // «whoosh» del sipario
    whoosh: function () {
      var c = ac(); if (!c) return;
      try {
        var t = c.currentTime, n = Math.floor(c.sampleRate * 0.7), b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
        for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / n);
        var s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
        s.buffer = b; f.type = "bandpass"; f.frequency.setValueAtTime(500, t); f.frequency.exponentialRampToValueAtTime(2400, t + 0.6); f.Q.value = 0.8; g.gain.value = 0.25;
        s.connect(f); f.connect(g); g.connect(c.destination); s.start(t);
      } catch (e) {}
    }
  };

  // ---------------- la foto vera del prodotto (Wikimedia Commons) ----------------
  // p.f = "percorso su Commons|larghezza dell'originale" (es. "9/9b/Nutella_ak.jpg|1514"): lo mette prezzo.js da
  // data/prezzo-foto.js (foto scelte e controllate a occhio il 22-23 ott 2026). Le misure di Wikimedia sono fisse (330 e 500
  // vanno bene, 480 no): se l'originale è più stretto si prende l'originale.
  var COMMONS = "https://upload.wikimedia.org/wikipedia/commons/";
  function urlFoto(f, px) {
    if (!f) return null;
    // le foto fatte dal proprietario stanno nel sito: "loc:carte/prezzo/<id>.jpg" (piccole, già della misura giusta; per i pezzi
    // delle vetrine il # dell'id diventa - nel nome del file, se no l'indirizzo si spezza)
    if (/^loc:carte\/prezzo\/[\w.\-]+\.(jpg|jpeg|png|webp)$/i.test(f)) return String(f).slice(4);
    var s = String(f).split("|"), path = s[0], w = +s[1] || 0, nome = path.split("/").pop();
    if (!/^[0-9a-f]\/[0-9a-f]{2}\/./.test(path)) return null;
    var enc = path.split("/").map(encodeURIComponent).join("/");
    return w && w <= px ? COMMONS + enc : COMMONS + "thumb/" + enc + "/" + px + "px-" + encodeURIComponent(nome);
  }
  var CARICATE = {};
  // si scarica prima (sotto il sipario), così quando si apre la foto c'è già
  function precarica(p, px) { var u = p && urlFoto(p.f, px || 500); if (u && !CARICATE[u]) { CARICATE[u] = new Image(); CARICATE[u].src = u; } }
  // la foto dentro un contenitore con la classe cls; se non c'è o non si carica, l'emoji (col contenitore clsEmo)
  function figura(el, p, cls, px, clsEmo) {
    p = p || {};
    var u = urlFoto(p.f, px || 330), box = el("span", { class: cls || "" });
    function emoji() { box.className = clsEmo || cls || ""; box.textContent = p.e || "🎁"; }
    if (!u) { emoji(); return box; }
    var im = document.createElement("img");
    im.alt = ""; im.draggable = false; im.decoding = "async";
    im.onerror = emoji;
    im.src = u;
    box.classList.add("pz-conf"); box.appendChild(im);
    return box;
  }

  // ---------------- la scheda del prodotto ----------------
  // prod = { e, f, nome, desc, dove, cat, prezzo? }; opz = { piccola, conPrezzo, cur, senzaCat }
  function scheda(el, prod, opz) {
    opz = opz || {}; prod = prod || {};
    var c = CAT[prod.cat] || null;
    var box = el("div", { class: "pz-scheda" + (opz.piccola ? " piccola" : "") + (opz.cls ? " " + opz.cls : "") });
    if (c && !opz.senzaCat) { var ch = el("span", { class: "pz-cat", text: c.ic + " " + (opz.piccola ? c.corto : c.nome) }); ch.style.setProperty("--cc", c.col); box.appendChild(ch); }
    box.appendChild(figura(el, prod, "pz-foto", 500, "pz-emo"));
    box.appendChild(el("div", { class: "pz-nome", text: prod.nome || "" }));
    if (prod.desc && !opz.senzaDesc) box.appendChild(el("div", { class: "pz-desc", text: prod.desc }));
    if (doveDi(prod)) box.appendChild(el("div", { class: "pz-dove", text: "📍 " + doveDi(prod) }));
    if (opz.conPrezzo && prod.prezzo != null) box.appendChild(cartellino(el, fmtE(prod.prezzo)));
    if (opz.cur && prod.cur) box.appendChild(el("div", { class: "pz-cur", text: "💡 " + prod.cur }));
    // (21 nov 2026) la scheda grande in poco spazio (pannello alzato sul telefono basso, con «Chi l'ha trovato» sotto): via la categoria
    // e foto più bassa (classe «corta»), così niente sale sul titolo né scende sotto le righe; la descrizione resta sempre
    if ((" " + (opz.cls || "") + " ").indexOf(" grande ") >= 0 && window.ResizeObserver) {
      var pend = false, oss = null, corta = function () { pend = false; if (!box.isConnected) { if (oss && !document.body.contains(box)) { oss.disconnect(); } return; } box.classList.remove("corta", "nofoto"); if (box.scrollHeight > box.clientHeight + 1) box.classList.add("corta"); if (box.scrollHeight > box.clientHeight + 1) box.classList.add("nofoto"); };
      try { oss = new ResizeObserver(function () { if (pend) return; pend = true; setTimeout(corta, 16); }); oss.observe(box); } catch (e) {}   // (setTimeout: requestAnimationFrame a volte non arriva)
      box._adatta = corta; setTimeout(corta, 60); setTimeout(corta, 700);   // (anche senza avvisi di misura: chi aggiunge righe sotto chiama box._adatta)
    }
    return box;
  }
  // il «dove» solo se la descrizione non lo dice già (20 nov 2026: «…un trullo di Alberobello · ad Alberobello»)
  function doveDi(p) {
    var d = String((p && p.dove) || "").trim(); if (!d) return "";
    var parole = d.replace(/^(a|ad|al|allo|alla|ai|agli|alle|in|nel|nello|nella|nei|negli|nelle|da|dal|dallo|dalla|dai|su|sul|sulla|sui|di|del|della|dei)\s+/i, "").toLowerCase();
    if (parole.length < 3) return d;
    // (21 nov 2026: anche se il luogo è già nel nome, «Il 730 fatto al CAF»; solo a parola intera: «a Roma» resta con «Foro Romano», «a Venezia» con «veneziana»)
    var testo = " " + (String(p.desc || "") + " " + String(p.nome || "")).toLowerCase() + " ", i = testo.indexOf(parole);
    while (i >= 0) {
      if (!lettera(testo.charAt(i - 1)) && !lettera(testo.charAt(i + parole.length))) return "";
      i = testo.indexOf(parole, i + 1);
    }
    return d;
  }
  function lettera(c) { return !!c && c.toLowerCase() !== c.toUpperCase() || (c >= "0" && c <= "9");
  }
  function sottoDi(p) { return [p && p.desc, doveDi(p)].filter(Boolean).join(" · "); }
  function cartellino(el, testo, cls) { return el("span", { class: "pz-tag" + (cls ? " " + cls : ""), text: testo }); }
  // il nome e, sotto, la descrizione (nelle rivelazioni di un prodotto solo)
  function miniprod(el, p) {
    p = p || {}; var sotto = sottoDi(p);
    return el("div", { class: "pz-miniprod" }, [ figura(el, p, "e"), el("span", { class: "tx" }, [ el("span", { class: "n", text: p.nome || "" }), sotto ? el("small", { text: sotto }) : null ]) ]);
  }

  // ---------------- i riquadri dei prodotti ----------------
  // (24 ott 2026, il proprietario: «rettangolini che prendono tutto lo schermo», «la descrizione secondo me è obbligatoria»)
  // Ogni prodotto è un riquadro con la foto, il nome e SEMPRE la descrizione. I riquadri si dividono tutto lo spazio che
  // resta sullo schermo, in una o due colonne; a ogni cambio di misura si sceglie la forma con la foto più grande in cui
  // le scritte ci stanno tutte: foto sopra (g, v0, v1), foto di lato (o0, o1), foto piccola (t0, t1, t2). Mai una
  // descrizione tagliata o nascosta. Quello che compare dopo (prezzi, segni) va messo subito nel riquadro, nascosto.
  // prods = [{ e, f, nome, desc, dove, cls }]; opz = { cls (del contenitore), tcls (di ogni riquadro), num (1, 2, 3… in
  // un angolo), fermo (senza l'animazione d'entrata), extra: function (p, i, riquadro) → nodo o [nodi] (sotto le scritte) }.
  // Il contenitore ha .tessere (i riquadri, nell'ordine dei prodotti), .adatta() (da chiamare appena è nella pagina:
  // dopo si rifà da solo quando cambia misura) e .ordina(l) (l[posto] = indice del prodotto: li sposta senza rifarli).
  var FORME = ["g", "v0", "v1", "o0", "o1", "t0", "t1", "t2", "t3"], BONUS = { g: 16, v0: 10, v1: 4, o0: 10, o1: 4, t0: 0, t1: -6, t2: -12, t3: -30 };
  function tessere(el, prods, opz) {
    opz = opz || {}; prods = prods || [];
    var base = "pz-tes" + (opz.cls ? " " + opz.cls : "") + (opz.fermo ? " fermo" : "");
    var g = el("div", { class: base }), n = prods.length, posti = prods.map(function (p, i) { return i; }), ult = "", spezzaOn = false;
    g.tessere = prods.map(function (p, i) {
      p = p || {};
      var sotto = sottoDi(p), fo = figura(el, p, "fo", 500, "fo emo"), im = fo.querySelector("img");
      // (la foto non arriva: al suo posto l'emoji, e si rifà la misura)
      if (im) { im.addEventListener("error", function () { setTimeout(function () { g.adatta(true); }, 0); }); im.addEventListener("load", function () { if (ult) copri(); }); }
      var t = el("div", { class: "pz-te" + (opz.tcls ? " " + opz.tcls : "") + (p.cls ? " " + p.cls : "") }, [
        fo,
        el("div", { class: "tx" }, [ el("b", { text: p.nome || "" }), sotto ? el("small", { text: sotto }) : null ])
      ]);
      if (opz.num) t.appendChild(el("span", { class: "nb", text: String(i + 1) }));
      var ex = opz.extra ? opz.extra(p, i, t) : null;
      if (ex) { t._ex = el("div", { class: "ex" }, [].concat(ex)); t.appendChild(t._ex); }
      g.appendChild(t); return t;
    });
    function metti(c, f) {
      g.className = base + (spezzaOn ? " spezza" : "") + " " + f.charAt(0) + " " + f + " c" + c;
      g.style.setProperty("--cols", c);
      g.style.gridTemplateRows = "repeat(" + Math.ceil(n / c) + ",minmax(0,1fr))";
      // (in due colonne, se sono dispari, l'ultimo prende tutta la riga e ha la foto di lato)
      posti.forEach(function (j, pos) { g.tessere[j].classList.toggle("largo", c === 2 && n % 2 === 1 && pos === n - 1); });
      // il cartellino (o il prezzo da giudicare) a destra solo nelle righe a tutta larghezza; se no sotto le scritte, che restano larghe
      var aDestra = c === 1 && (f.charAt(0) === "o" || f.charAt(0) === "t");
      g.tessere.forEach(function (t) { if (!t._ex) return; var dove = aDestra ? t : t.querySelector(".tx"); if (t._ex.parentNode !== dove) dove.appendChild(t._ex); });
    }
    function ciStanno() { return g.tessere.every(function (t) { return t.scrollHeight <= t.clientHeight + 1 && t.scrollWidth <= t.clientWidth + 1; }); }
    // quanto è grande la foto (una foto 4:3 dentro lo spazio della foto), nel riquadro più sacrificato
    function foto(f) {
      if (f.charAt(0) === "t") return f === "t0" ? 30 : f === "t3" ? 0 : 20;
      var m = Infinity;
      g.tessere.forEach(function (t) {
        var fo = t.querySelector(".fo"), w = fo ? fo.clientWidth : 0, h = fo ? fo.clientHeight : 0;
        m = Math.min(m, w < 30 || h < 30 ? -1 : Math.sqrt(w / h > 4 / 3 ? h * h * 4 / 3 : w * w * 3 / 4));
      });
      return m;
    }
    g.adatta = function (forza) {
      if (!g.isConnected || !n) return;
      // le scritte che si possono togliere quando lo spazio non basta (data-sacr: 1 = la prima che va via), di nuovo al loro posto
      var sch = g.closest ? g.closest(".pz-sch") : null, sacr = sch ? [].slice.call(sch.querySelectorAll("[data-sacr]")).sort(function (a, b) { return (+a.dataset.sacr || 9) - (+b.dataset.sacr || 9); }) : [];
      var W = g.clientWidth, H = g.clientHeight;
      // (i riquadri nascosti, come nella Spesa mentre si gioca: le scritte tornano tutte)
      if (!W || !H) { sacr.forEach(function (x) { x.style.display = ""; }); ult = ""; return; }
      var chiave = W + "x" + H; if (chiave === ult && !forza) return;
      // (l'emoji dei prodotti senza foto torna alla misura di partenza, se no falsa le prove; con «solo» si misura con tutti i riquadri)
      g.tessere.forEach(function (t) { var fo = t.querySelector(".fo"); if (fo) { fo.style.fontSize = ""; fo.style.flex = ""; } t.classList.remove("centro"); t.style.display = t.style.gridColumn = t.style.justifySelf = t.style.width = ""; });
      g.style.alignContent = "";
      sacr.forEach(function (x) { x.style.display = ""; }); spezzaOn = false;
      function cerca() {
        var best = null;
        (n === 1 ? [1] : [2, 1]).forEach(function (c) {
          FORME.forEach(function (f) {
            metti(c, f); if (!ciStanno()) return;
            var s = foto(f); if (s < 0) return;
            s += BONUS[f] + (c === 2 && n >= 3 ? 12 : 0);
            if (!best || s > best.s) best = { c: c, f: f, s: s };
          });
        });
        return best;
      }
      var best = cerca(), primo = best, via = 0;
      // (con le scritte più piccole, o senza che ci stia niente: prima via gli aiuti e chi ha finito, che sono già nel pannello)
      while (via < sacr.length && (!best || best.f === "t2" || best.f === "t3")) { sacr[via++].style.display = "none"; best = cerca() || best; }
      if (via && primo && best && best.f === primo.f && best.c === primo.c) { sacr.forEach(function (x) { x.style.display = ""; }); best = cerca(); }
      // (non ci sta niente: la forma più piccola, e i riquadri crescono quanto serve; lo spazio scorre, ma niente si taglia)
      if (!best) { spezzaOn = true; best = cerca(); }   // (la classe la rimette metti(), che riscrive tutte le classi)
      if (!best) best = { c: 1, f: "t3", scorre: true };
      metti(best.c, best.f); g.classList.toggle("scorre", !!best.scorre); ult = g.clientWidth + "x" + g.clientHeight;
      // l'emoji (prodotti senza foto) grande quanto il suo posto
      g.tessere.forEach(function (t) {
        var fo = t.querySelector(".fo.emo"); if (!fo) return;
        fo.style.fontSize = best.f.charAt(0) === "t" ? "" : Math.max(22, Math.min(90, fo.clientHeight * 0.72, fo.clientWidth * 0.6)) + "px";
      });
      copri(); soloSu();   // (con «solo»: si nasconde dopo aver misurato foto ed emoji con tutti i riquadri al loro posto)
    };
    // la foto riempie tutto il suo spazio quando ha quasi la stessa forma (si taglia appena un bordo), se no si vede intera
    function copri() {
      var piccola = g.classList.contains("t"), riga = g.classList.contains("o");
      g.tessere.forEach(function (t) {
        var fo = t.querySelector(".fo"), im = fo && fo.querySelector("img"); if (!fo || t.style.display === "none") return;   // (un riquadro nascosto da «solo» si misura quando compare)
        fo.style.flex = ""; t.classList.remove("centro");
        var r = im && im.naturalWidth && fo.clientHeight ? (fo.clientWidth / fo.clientHeight) / (im.naturalWidth / im.naturalHeight) : 0;
        fo.classList.toggle("copre", !piccola && r > 0.78 && r < 1.3);
        // (20 nov 2026) riquadro alto e foto larga: la foto sta subito sopra le scritte e il gruppo va al centro del riquadro
        // (prima la foto restava in mezzo al suo spazio, con un vuoto bianco sopra e sotto). Niente si ingrandisce.
        if (!piccola && !riga && !t.classList.contains("largo") && r && r <= 0.78) {
          var hImg = Math.ceil(fo.clientWidth * im.naturalHeight / im.naturalWidth);
          if (fo.clientHeight - hImg > 12) { fo.style.flex = "0 0 " + hImg + "px"; t.classList.add("centro"); }
        }
      });
    }
    g.ordina = function (l) {
      if (!l || l.length !== n) return;
      posti = l.slice();
      posti.forEach(function (j, pos) { var t = g.tessere[j]; t.style.order = String(pos); var nb = t.querySelector(".nb"); if (nb) nb.textContent = String(pos + 1); });
      if (ult) {
        var c = g.classList.contains("c2") ? 2 : 1; posti.forEach(function (j, pos) { g.tessere[j].classList.toggle("largo", c === 2 && n % 2 === 1 && pos === n - 1); });
        // (l'ultimo, largo, ora è un altro: se non ci sta più si rifà la forma; se ci sta niente cambia, niente salti)
        if (!ciStanno()) g.adatta(true);
      }
    };
    // (21 nov 2026, scelta B del proprietario) la Vetrina che si presenta un pezzo alla volta: si vedono solo i primi m,
    // grandi come quando ci sono tutti (niente si ingrandisce), e il gruppo sta al centro dello spazio invece che in alto
    // con un vuoto sotto. «scorri»: quelli già in vista scivolano al loro posto nuovo (solo transform). null = tutti, come sempre.
    g.solo = function (m, scorri) {
      var prima = scorri && g._solo != null ? posti.slice(0, g._solo).map(function (j) { var t = g.tessere[j], r = t.getBoundingClientRect(); return [t, r.left, r.top]; }) : [];
      g._solo = m == null ? null : m; soloSu(); if (ult) copri();
      prima.forEach(function (x) {
        var r = x[0].getBoundingClientRect(), dx = x[1] - r.left, dy = x[2] - r.top;
        if ((Math.abs(dx) > 1 || Math.abs(dy) > 1) && x[0].animate) x[0].animate([ { transform: "translate(" + dx + "px," + dy + "px)" }, { transform: "none" } ], { duration: 380, easing: "cubic-bezier(.2,.8,.3,1)" });
      });
    };
    function soloSu() {
      var m = g._solo;
      g.tessere.forEach(function (t) { t.style.gridColumn = t.style.justifySelf = t.style.width = ""; });
      if (m == null || !ult || g.classList.contains("scorre")) { if (m == null) g.tessere.forEach(function (t) { t.style.display = ""; }); return; }
      var c = g.classList.contains("c2") ? 2 : 1, righe = Math.ceil(n / c), gap = parseFloat(getComputedStyle(g).rowGap) || 0;
      g.style.gridTemplateRows = "repeat(" + righe + ",minmax(0,1fr))"; g.style.alignContent = "";
      posti.forEach(function (j) { g.tessere[j].style.display = ""; });
      var h = (g.clientHeight - gap * (righe - 1)) / righe; if (!(h > 0)) return;
      posti.forEach(function (j, pos) { if (pos >= m) g.tessere[j].style.display = "none"; });
      g.style.gridTemplateRows = "repeat(" + Math.max(1, Math.ceil(m / c)) + "," + h.toFixed(2) + "px)"; g.style.alignContent = "center";
      // (in due colonne, un pezzo da solo nella sua riga mentre gli altri devono ancora uscire: al centro anche di lato, stessa misura)
      if (c === 2 && m % 2 === 1 && m < n) { var t1 = g.tessere[posti[m - 1]]; t1.style.gridColumn = "1 / -1"; t1.style.justifySelf = "center"; t1.style.width = "calc((100% - " + (parseFloat(getComputedStyle(g).columnGap) || 0) + "px) / 2)"; }
    }
    // (si rifà al fotogramma dopo, mai dentro l'avviso del browser: se no «ResizeObserver loop»)
    if (window.ResizeObserver) {
      var pend = false, oss = new ResizeObserver(function () {
        if (pend) return; pend = true;
        requestAnimationFrame(function () { pend = false; if (!g.isConnected) { oss.disconnect(); return; } g.adatta(); });
      });
      oss.observe(g);
    }
    return g;
  }

  // ---------------- il sipario «Apriti, sesamo!» ----------------
  function sipario(el, dentro) {
    var w = el("div", { class: "pz-sip" }, [ el("div", { class: "dentro" }, [dentro]), el("div", { class: "tela sx" }), el("div", { class: "tela dx" }) ]);
    return { el: w, apri: function () { FX.whoosh(); w.classList.add("aperto"); }, aperto: function () { w.classList.add("aperto", "subito"); } };
  }

  // ---------------- il contachilometri: il prezzo compare cifra per cifra ----------------
  // valore in euro; opz = { grande }. Restituisce { el, via(msTraUnaCifraEaltra) } (via restituisce una Promise)
  function contachilometri(el, valore, opz) {
    opz = opz || {};
    var testo = fmtE(valore, true), box = el("div", { class: "pz-conta" + (opz.grande ? " grande" : "") }), cifre = [];
    testo.split("").forEach(function (ch) {
      if (/\d/.test(ch)) {
        var str = el("div", { class: "str" }); for (var k = 0; k < 20; k++) str.appendChild(el("span", { text: String(k % 10) }));
        var cel = el("div", { class: "cif gira" }, [str]); cel._d = +ch; cel._str = str;
        str.style.animationDelay = (-Math.random() * 0.3).toFixed(2) + "s";
        cifre.push(cel); box.appendChild(cel);
      } else box.appendChild(el("div", { class: "sep" + (ch === "." ? " mi" : ""), text: ch }));
    });
    box.appendChild(el("div", { class: "eur", text: "€" }));
    function ferma(c) { c.classList.remove("gira"); c._str.style.transform = "translateY(" + (-c._d * 5) + "%)"; c.classList.add("ferma"); }
    return { el: box, subito: function () { cifre.forEach(ferma); },
      via: function (ms) {
        ms = ms || 320;
        return new Promise(function (ok) {
          cifre.forEach(function (c, i) { setTimeout(function () { ferma(c); FX.toc(520 + i * 70); }, (i + 1) * ms); });
          setTimeout(ok, (cifre.length + 1) * ms + 200);
        });
      } };
  }
  function durataConta(valore, ms) { return ((fmtE(valore, true).replace(/\D/g, "").length) + 1) * (ms || 320) + 200; }

  // ---------------- la barra del tempo (secondi che mancano, tic negli ultimi 5) ----------------
  // fine = Date.now() + ms; onFine() a zero. Restituisce { el, ferma(), allunga(nuovaFine) }
  function barraTempo(el, fine, onFine, opz) {
    opz = opz || {};
    var bar = el("i"), riga = el("div", { class: "pz-tempo" + (opz.cls ? " " + opz.cls : "") }, [ el("div", { class: "b" }, [bar]), el("b", { class: "s" }) ]);
    var sec = riga.querySelector(".s"), tot = Math.max(1, fine - Date.now()), ultimo = -1, finito = false, id = null;
    function segna() {
      if (!riga.isConnected && ultimo >= 0) { clearInterval(id); return; }
      var resta = fine - Date.now(), s = Math.max(0, Math.ceil(resta / 1000));
      bar.style.transform = "scaleX(" + Math.max(0, Math.min(1, resta / tot)).toFixed(3) + ")";
      if (s !== ultimo) { ultimo = s; sec.textContent = s; riga.classList.toggle("poco", s <= 5); if (s > 0 && s <= 5 && !opz.muto) FX.tic(); }
      if (resta <= 0 && !finito) { finito = true; clearInterval(id); if (onFine) onFine(); }
    }
    segna(); id = setInterval(segna, 200);
    return { el: riga, ferma: function () { finito = true; clearInterval(id); }, allunga: function (f) { fine = f; tot = Math.max(tot, fine - Date.now()); finito = false; clearInterval(id); id = setInterval(segna, 200); segna(); },
      fine: function () { return fine; }, finito: function () { return finito; } };
  }

  // ---------------- il pannello che sale dal basso (sopra lo studio) ----------------
  function pannello(S) {
    var el = S.t.el, p = el("div", { class: "pz-pan" }), toAlto = null;
    S.vista.appendChild(p);
    function misura() { if (!p.isConnected) return; S.vista.style.setProperty("--pz-pan", p.offsetHeight + "px"); }
    var P = {
      el: p,
      metti: function (nodi) { while (p.firstChild) p.removeChild(p.firstChild); (nodi || []).forEach(function (n) { if (n) p.appendChild(n); }); misura(); return P; },
      su: function () { misura(); S.vista.classList.add("pz-con-pan"); p.classList.add("su"); clearTimeout(toAlto); toAlto = setTimeout(misura, 60); return P; },
      giu: function () { p.classList.remove("su"); S.vista.classList.remove("pz-con-pan"); return P; },
      misura: misura,
      aperto: function () { return p.classList.contains("su"); }
    };
    if (window.ResizeObserver) try { new ResizeObserver(misura).observe(p); } catch (e) {}
    return P;
  }

  // ---------------- il tastierino dell'offerta ----------------
  // opz = { cent (la virgola), limite (deve stare sotto), testoOk ("🏷️ Offro!"), preso(v) → nome di chi l'ha già detto o null,
  //         offerte: [{ nome, v }] (a vista: si toccano per fare «+1 €»), onOk(v), sopra: [nodi sopra il display] }
  // Restituisce { el, valore(), fatto(v), blocca(testo), offerte(lista), aggiorna() }
  function tastierino(el, opz) {
    opz = opz || {};
    var buf = "", fatto = false, chiuso = false, attende = false;
    var val = el("span", { class: "v" }), canc = el("button", { class: "pz-canc", type: "button", "aria-label": "Cancella", text: "⌫" });
    var disp = el("div", { class: "pz-disp" }, [ val, canc ]);
    var riga = el("div", { class: "pz-offrow" });
    var ok = el("button", { class: "pz-ok", type: "button" });
    var tasti = el("div", { class: "pz-tasti" });
    function tasto(tx, cls, fn) { var b = el("button", { class: "pz-k" + (cls ? " " + cls : ""), type: "button", text: tx }); premi(b, fn); tasti.appendChild(b); return b; }
    // tocco subito col pointerdown (su iPhone il click a volte non arriva); il click resta per mouse e tastiera
    function premi(b, fn) {
      var ultimo = 0;
      b.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse" && e.button) return; e.preventDefault(); ultimo = Date.now(); fn(); });
      b.addEventListener("click", function () { if (ultimo) { ultimo = 0; return; } fn(); });   // (il click dopo un tocco non conta, anche se il dito è restato giù a lungo)
    }
    function intero() { return buf.split(",")[0]; }
    function aggiungi(ch) {
      if (fatto || chiuso) return;
      if (ch === ",") { if (!opz.cent || buf.indexOf(",") >= 0) return; buf = (buf || "0") + ","; return mostra(); }
      if (buf.indexOf(",") >= 0) { if (buf.split(",")[1].length >= 2) return; buf += ch; return mostra(); }
      if (ch === "000") { if (!buf || buf === "0" || intero().length + 3 > 7) return; buf += "000"; return mostra(); }
      if (buf === "0") buf = "";
      if (intero().length >= 7) return;
      buf += ch; mostra();
    }
    // un valore in euro → quello che si vede scritto sul tastierino ("1250", "6,9")
    function aBuf(v) {
      v = tondo2(v); var i = Math.floor(v + 1e-9), c = Math.round((v - i) * 100);
      if (!opz.cent || !c) return String(i);
      return i + "," + (c < 10 ? "0" : "") + c;   // sempre coi due centesimi: «11,10 €»
    }
    function togli() { if (fatto || chiuso) return; buf = buf.slice(0, -1); if (buf === "0") buf = ""; mostra(); }
    function valore() { if (!buf) return 0; var p = buf.split(","); return tondo2(+(p[0] || 0) + (p[1] ? +("0." + p[1]) : 0)); }
    function testoBuf() {
      if (!buf) return "";
      var p = buf.split(","), s = fmtN(+(p[0] || 0));
      return s + (buf.indexOf(",") >= 0 ? "," + p[1] : "") + " €";
    }
    function mostra() {
      var v = valore();
      if (fatto) { val.textContent = "✅ " + fmtE(fatto); ok.textContent = opz.testoFatto || "✅ Fatto!"; ok.disabled = true; disp.classList.add("fatto"); return; }
      val.textContent = testoBuf() || (opz.cent ? "0,00 €" : "0 €"); val.classList.toggle("vuoto", !buf);
      var chi = v && opz.preso ? opz.preso(v) : null, sotto = v && opz.limite != null && v >= opz.limite;
      ok.disabled = !v || !!chi || sotto || chiuso || attende;
      ok.textContent = attende ? "…" : chi ? "Già preso da " + chi : sotto ? "Sotto i " + fmtE(opz.limite) + "!" : (opz.testoOk || "🏷️ Offro!");
      ok.classList.toggle("no", !!chi || sotto);
      canc.disabled = !buf;
    }
    ["1", "2", "3"].forEach(function (d) { tasto(d, "", function () { aggiungi(d); }); });
    tasto("⌫", "fn", togli).setAttribute("aria-label", "Cancella");
    ["4", "5", "6"].forEach(function (d) { tasto(d, "", function () { aggiungi(d); }); });
    tasto(opz.cent ? "," : "000", opz.cent ? "fn virgola" : "fn", function () { aggiungi(opz.cent ? "," : "000"); });
    ["7", "8", "9", "0"].forEach(function (d) { tasto(d, "", function () { aggiungi(d); }); });
    tasti.appendChild(ok);
    premi(canc, togli);
    premi(ok, function () {
      if (fatto || chiuso || ok.disabled || attende) return;
      var v = valore(); if (!v) return;
      vibra(12);
      // (es. Più o meno: si aspetta la risposta, poi si riprova; la risposta può arrivare subito, dentro onOk)
      if (opz.continuo) { attende = true; mostra(); if (opz.onOk && opz.onOk(v) === false) { attende = false; mostra(); } return; }
      if (opz.onOk && opz.onOk(v) === false) return;
      fatto = v; mostra();
    });
    // a vista: le offerte già date, da toccare per fare «+1 €» (o +0,10 € sui prodotti coi centesimi)
    function offerte(lista) {
      while (riga.firstChild) riga.removeChild(riga.firstChild);
      lista = (lista || []).slice().sort(function (a, b) { return a.v - b.v; });
      riga.hidden = !lista.length;
      riga.classList.toggle("tante", lista.length > 3);   // tante offerte: chip piccole su due righe, si vedono tutte
      lista.forEach(function (o) {
        var b = el("button", { class: "pz-offch" + (o.mia ? " mia" : ""), type: "button" }, [ el("b", { text: o.nome }), el("span", { text: fmtE(o.v) }) ]);
        if (!o.mia) premi(b, function () {
          if (fatto || chiuso) return;
          var piu = tondo2(o.v + (opz.cent ? 0.1 : 1));
          buf = aBuf(piu);
          mostra(); b.classList.remove("piu"); void b.offsetWidth; b.classList.add("piu");
        });
        riga.appendChild(b);
      });
    }
    var box = el("div", { class: "pz-tast" }, (opz.sopra || []).concat([ riga, disp, tasti ]));
    offerte(opz.offerte || []); mostra();
    return { el: box, valore: valore, offerte: offerte, aggiorna: mostra,
      fatto: function (v) { fatto = v; mostra(); },
      riapri: function () { fatto = false; attende = false; mostra(); },
      svuota: function () { buf = ""; mostra(); },
      blocca: function (testo) { chiuso = true; ok.disabled = true; if (testo) ok.textContent = testo; tasti.classList.add("chiuso"); } };
  }

  // ---------------- la Ruota del 100 ----------------
  var SPICCHI = [5, 100, 15, 80, 35, 60, 20, 40, 75, 55, 95, 50, 85, 30, 65, 10, 45, 70, 25, 90];
  var GIRI_STRISCIA = 12;
  function coloreSpicchio(v) { return v === 100 ? "rosso" : (v === 5 || v === 15) ? "verde" : (SPICCHI.indexOf(v) % 2 ? "arg" : "oro"); }
  // opz = { alt (altezza di una casella), onSpinta(forza 0..1) → false per rifiutare, onCambio(valore) }
  // La ruota si spinge trascinando il dito IN GIÙ o IN SU (gira dalla parte della spinta).
  // Restituisce { el, attiva(si), gira(forza, v, verso), arriva(valore) → Promise, mostra(valore) }
  function ruota(el, opz) {
    opz = opz || {};
    var H = opz.alt || 62, N = SPICCHI.length * GIRI_STRISCIA;
    var str = el("div", { class: "pz-rstr" });
    for (var i = 0; i < N; i++) { var v = SPICCHI[i % SPICCHI.length]; str.appendChild(el("div", { class: "pz-rcel " + coloreSpicchio(v), text: String(v) })); }
    // opz.mini: la ruota piccola di un amico sul maxischermo (senza clic, gira più a lungo prima di fermarsi)
    var fin = el("div", { class: "pz-ruota" + (opz.mini ? " mini" : "") }, [ str, el("div", { class: "luce" }), el("div", { class: "freccia" }) ]);
    fin.style.setProperty("--h", H + "px");
    var pos = SPICCHI.length * (GIRI_STRISCIA - 2), attiva = false, stato = "fermo", vel = 0, verso = -1, target = null, piano = null, ultimoInt = Math.floor(pos * 2), ultimoClic = 0, raf = null, fineCb = null;
    // pos = quale casella sta davanti alla freccia (con la virgola): pos più piccolo = la striscia scende (verso -1), più grande = sale (+1)
    function disegna() {
      var y = -(pos * H) + H;   // la freccia sta sulla seconda casella dall'alto (si vedono 3 caselle)
      str.style.transform = "translate3d(0," + y.toFixed(1) + "px,0)";
      // un clic per pallino che passa davanti alla freccia (19 nov 2026): grandi tra un numero e l'altro, piccoli a metà numero
      var k = Math.floor(pos * 2);
      if (k !== ultimoInt) { var gr = Math.max(k, ultimoInt) % 2 !== 0; ultimoInt = k; var ora = performance.now(); if (!opz.mini && ora - ultimoClic > 45) { ultimoClic = ora; FX.clic(Math.min(1, Math.abs(vel) / 14 + 0.25) * (gr ? 1 : 0.7)); } }
    }
    function valoreA(p) { var k = ((Math.round(p) % SPICCHI.length) + SPICCHI.length) % SPICCHI.length; return SPICCHI[k]; }
    // (la striscia si ripete ogni 20 caselle: si salta avanti o indietro di giri interi, la ruota resta uguale.
    //  Per girare in giù si parte dalla fine della striscia, per girare in su dall'inizio)
    function normalizza(su) { var k = ((pos % SPICCHI.length) + SPICCHI.length) % SPICCHI.length; pos = k + SPICCHI.length * (su ? 2 : GIRI_STRISCIA - 2); }
    disegna();
    // ---- spinta col dito, in giù o in su ----
    var giu = null, punti = [];
    fin.addEventListener("pointerdown", function (e) {
      if (!attiva || stato !== "fermo") return;
      e.preventDefault(); try { fin.setPointerCapture(e.pointerId); } catch (x) {}
      giu = { y: e.clientY, p: pos, id: e.pointerId }; punti = [{ y: e.clientY, t: performance.now() }];
    });
    fin.addEventListener("pointermove", function (e) {
      if (!giu || e.pointerId !== giu.id) return;
      var dy = Math.max(-4 * H, Math.min(4 * H, e.clientY - giu.y));
      pos = giu.p - dy / H; disegna();
      punti.push({ y: e.clientY, t: performance.now() }); if (punti.length > 8) punti.shift();
    });
    function lascia(e) {
      if (!giu || (e && e.pointerId !== giu.id)) return;
      var tot = (e ? e.clientY : giu.y) - giu.y, a = punti[0], b = punti[punti.length - 1], dt = Math.max(16, b.t - a.t), vs = (b.y - a.y) / dt;   // px/ms (+ giù, − su)
      if (performance.now() - b.t > 120) vs = 0;   // dito fermo prima di lasciare
      giu = null;
      var dir = vs < 0 ? 1 : -1, v = Math.abs(vs);   // dito in su → la striscia sale (pos cresce)
      var forza = Math.max(0, Math.min(1, (v - 0.45) / 1.6));
      if (Math.abs(tot) < H * 0.7 || v < 0.45 || (tot < 0) !== (vs < 0)) {   // spinta debole: «Più forte!»
        fin.classList.remove("debole"); void fin.offsetWidth; fin.classList.add("debole");
        var da = pos, fine = Math.round(pos), t0 = performance.now();
        (function torna() { var u = Math.min(1, (performance.now() - t0) / 250); pos = da + (fine - da) * u; disegna(); if (u < 1) requestAnimationFrame(torna); })();
        if (opz.debole) opz.debole();
        return;
      }
      // (col Bot o sullo stesso telefono il numero arriva subito, dentro onSpinta: arriva() deve girare con QUESTA spinta)
      spintaOra = { f: Math.max(0.15, forza), v: v, dir: dir };
      if (opz.onSpinta && opz.onSpinta(spintaOra.f) === false) { spintaOra = null; return; }
      var sp = spintaOra; spintaOra = null;
      if (sp) gira(sp.f, sp.v, sp.dir);
    }
    var spintaOra = null;
    fin.addEventListener("pointerup", lascia);
    fin.addEventListener("pointercancel", function () { giu = null; });
    // ---- il giro: veloce finché non si sa il numero, poi frena e si ferma lì (dalla parte della spinta) ----
    function gira(forza, v0, dir) {
      if (stato !== "fermo") return;
      stato = "gira"; target = null; piano = null; verso = dir > 0 ? 1 : -1;
      vel = Math.max(9, Math.min(34, (v0 ? v0 * 1000 / H : 0) || (12 + forza * 18)));   // caselle al secondo
      var prima = performance.now();
      normalizza(verso > 0);   // (sempre: così c'è striscia per tutto il giro, da tutte e due le parti)
      cancelAnimationFrame(raf);
      (function passo() {
        var ora = performance.now(), dt = Math.min(0.05, (ora - prima) / 1000); prima = ora;
        if (piano) {
          var u = Math.min(1, (ora - piano.t0) / piano.T), e = 1 - Math.pow(1 - u, 2);
          pos = piano.p0 + verso * piano.L * e; vel = piano.L / piano.T * 2 * (1 - u) * 1000;
          disegna();
          if (u >= 1) { pos = piano.p0 + verso * piano.L; disegna(); stato = "fermo"; vel = 0; var cb = fineCb; fineCb = null; if (cb) cb(target); return; }
        } else {
          pos += verso * vel * dt; disegna();
          if (target != null && !piano) pianifica();
        }
        raf = requestAnimationFrame(passo);
      })();
      if (opz.onCambio) opz.onCambio(null);
    }
    function pianifica() {
      var j = SPICCHI.indexOf(target); if (j < 0) j = 0;
      var minimo = vel * (0.9 + Math.random() * 0.5) / 2 + 2 + (opz.mini ? 14 : 0);   // almeno un bel pezzo di giro prima di fermarsi (la piccola un po' di più: si guarda)
      var p0 = pos, fine = verso < 0 ? Math.floor(p0 - minimo) : Math.ceil(p0 + minimo);
      while ((((fine % SPICCHI.length) + SPICCHI.length) % SPICCHI.length) !== j) fine += verso;
      var L = Math.abs(fine - p0), T = Math.max(700, Math.min(opz.mini ? 3600 : 5200, 2 * L / vel * 1000));
      if (verso < 0 ? fine < 2 : fine > N - 3) { normalizza(verso > 0); return pianifica(); }
      piano = { t0: performance.now(), p0: p0, L: L, T: T };
    }
    // il numero dell'host è arrivato: la ruota frena e si ferma lì (Promise quando è ferma)
    function arriva(valore) {
      return new Promise(function (ok) {
        if (stato === "fermo") { var sp = spintaOra; spintaOra = null; if (sp) gira(sp.f, sp.v, sp.dir); else gira(0.5); }
        target = valore; fineCb = ok;
      });
    }
    return { el: fin, attiva: function (si) { attiva = !!si; fin.classList.toggle("attiva", attiva); }, gira: gira, arriva: arriva,
      mostra: function (valore) { cancelAnimationFrame(raf); stato = "fermo"; var j = SPICCHI.indexOf(valore); if (j < 0) return; normalizza(); pos = pos - (((pos % 20) + 20) % 20) + j; disegna(); },
      ferma: function () { cancelAnimationFrame(raf); stato = "fermo"; },
      valore: function () { return valoreA(pos); } };
  }

  // ---------------- lo stile ----------------
  function stile() {
    if (document.getElementById("sg-prezzo-css")) return;
    var s = document.createElement("style"); s.id = "sg-prezzo-css";
    s.textContent = [
      // il maxischermo con il pannello aperto: il contenuto sta nella parte che si vede
      ".st-vista.pz-con-pan .st-sch-in{padding-bottom:calc(var(--pz-pan,300px) + 4px)}",
      ".st-vista.pz-con-pan .st-terzo{bottom:calc(var(--pz-pan,300px) + 10px)}",
      ".st-vista.pz-con-pan .st-barra{display:none}",
      // (telefoni bassi col pannello su: il prodotto un po' più piccolo, così il tabellone delle offerte resta sopra il pannello)
      ".st-vista.pz-con-pan .pz-sch{gap:6px}",
      ".st-vista.pz-con-pan .pz-tab.fitto .pz-och .nm{display:none}.st-vista.pz-con-pan .pz-tab.fitto .pz-och{padding-right:8px}",
      "@media (max-height:700px){.st-vista.pz-con-pan .pz-sip .pz-emo{font-size:36px;height:1.15em}}",
      ".pz-sch{flex:1;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;justify-content:safe center;gap:10px;text-align:center;padding:2px 2px 0;overflow:hidden}",
      // (riempi in prezzo.js: sui telefoni alti tutto si ingrandisce finché lo spazio c'è)
      ".pz-sch.riempi>*{zoom:var(--pz-z,1)}.pz-sch.riempi.alto{padding-top:40px}",
      // (chi guarda soltanto: la barra in basso lascia il posto alla targhetta del core, come nella Balla)
      ".st-vista.st-con-targa .st-barra{padding-bottom:calc(64px + env(safe-area-inset-bottom))}.st-vista.st-con-targa.con-barra .st-sch-in{padding-bottom:152px}",
      // (20 nov 2026) lo spazio sotto lo schermo segue l'altezza vera della barra (--pz-barra, misurata in prezzo.js); chi guarda ha
      // sempre il posto della targhetta, anche senza barra (prima la targhetta copriva il totale della vetrina e l'ultima riga)
      ".st-vista.pz-vista.con-barra:not(.pz-con-pan) .st-sch-in{padding-bottom:max(104px,calc(var(--pz-barra,104px) + 6px))}",
      ".st-vista.pz-vista.st-con-targa:not(.pz-con-pan):not(.con-barra) .st-sch-in{padding-bottom:calc(76px + env(safe-area-inset-bottom))}",
      ".st-vista.pz-vista.st-con-targa.con-barra:not(.pz-con-pan) .st-sch-in{padding-bottom:max(152px,calc(var(--pz-barra,152px) + 6px))}",   // (in alto i tasti tondi: il titolo resta sotto)
      // (la scritta grande in basso, «E per voi…», non copre la lista: le si lascia il suo spazio)
      ".pz-sch.con-terzo{padding-bottom:calc(170px + env(safe-area-inset-bottom))}",   // (la scritta in basso dello studio sta a 104 px dal fondo ed è alta circa 58: i riquadri si fermano sopra)
      ".pz-testa{display:flex;align-items:center;justify-content:center;gap:8px;min-height:30px;margin:0 40px;font-size:13px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--o-oro-testo)}",
      ".pz-testa .x2{background:#ff3ea5;color:#fff;border-radius:99px;padding:2px 9px;letter-spacing:.04em;animation:pzPulsa 1s ease-in-out infinite}",
      ".pz-titolo{font-size:22px;font-weight:900;color:#fff;line-height:1.15}",
      ".pz-sotto{font-size:14px;font-weight:800;color:var(--o-tenue);line-height:1.3}",
      "@keyframes pzPulsa{50%{transform:scale(1.08)}}",
      "@keyframes pzPop{from{transform:scale(.3);opacity:0}to{transform:none;opacity:1}}",
      "@keyframes pzSu{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}",
      // la scheda del prodotto
      ".pz-scheda{position:relative;width:min(340px,94%);box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:3px;padding:10px 14px 12px;border-radius:18px;background:linear-gradient(#ffffff,#f5f6fb);color:#1d1b3a;box-shadow:0 10px 26px rgba(0,0,0,.45),inset 0 -4px 0 rgba(14,18,44,.18)}",
      ".pz-cat{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:var(--cc,#b0184f);border-radius:99px;padding:3px 10px}",
      ".pz-emo{font-size:clamp(40px,calc(var(--alt,640px) * .085),66px);line-height:1.15;width:1.6em;height:1.3em;display:flex;align-items:center;justify-content:center;border-radius:50%;background:radial-gradient(circle,rgba(255,79,134,.55),rgba(255,79,134,0) 66%)}",
      ".pz-nome{font-size:19px;font-weight:900;line-height:1.15}",
      ".pz-desc{font-size:13.5px;font-weight:600;color:#4c4a66;line-height:1.28}",
      ".pz-dove{font-size:12.5px;font-weight:800;color:#b0184f}",
      ".pz-cur{margin-top:4px;font-size:12.5px;font-weight:700;color:#5c3c00;background:rgba(224,34,90,.12);border-radius:10px;padding:4px 8px;line-height:1.3}",
      ".pz-scheda .pz-tag{margin-top:4px}",
      ".pz-scheda.piccola{flex-direction:row;flex-wrap:wrap;justify-content:center;gap:2px 8px;padding:6px 10px;border-radius:14px;width:min(360px,96%)}",
      ".pz-scheda.piccola .pz-emo{font-size:30px;width:auto;height:auto;background:none}.pz-scheda.piccola .pz-nome{font-size:16px}.pz-scheda.piccola .pz-cat{display:none}",
      ".pz-scheda.piccola .pz-desc{width:100%;font-size:12px;line-height:1.22}.pz-scheda.piccola .pz-dove{width:100%;font-size:11.5px}",
      ".pz-scheda.media .pz-emo{font-size:40px}.pz-scheda.media .pz-desc{font-size:12.5px}.pz-scheda.media .pz-nome{font-size:17px}",
      // la foto vera: nella scheda alta quanto lo schermo permette, nelle righe grande come l'emoji che c'era (1,3 em)
      ".pz-foto{height:clamp(62px,calc(var(--alt,640px) * .15),140px);max-width:100%;display:flex;align-items:center;justify-content:center}",
      ".pz-foto img{max-width:100%;max-height:100%;border-radius:10px;box-shadow:0 3px 10px rgba(0,0,0,.28);background:#fff}",
      ".pz-scheda.piccola .pz-foto{height:46px}.pz-scheda.media .pz-foto{height:clamp(54px,calc(var(--alt,640px) * .1),90px)}",
      // la scheda grande (25 ott 2026, i giochi a premi con un prodotto solo): prende tutto lo spazio libero dello schermo e la
      // foto cresce con lei; nome e descrizione più grandi. Se lo spazio è poco la foto si stringe, le scritte restano intere.
      ".pz-sch .pz-scheda.grande{flex:1 1 auto;min-height:0;width:min(420px,94%);justify-content:center;justify-content:safe center;gap:4px}",
      ".pz-scheda.grande.corta{gap:2px;padding-top:6px;padding-bottom:6px}.pz-scheda.grande.corta .pz-cat{display:none}.pz-scheda.grande.corta .pz-foto,.pz-scheda.grande.corta .pz-emo{min-height:30px}.pz-scheda.grande.corta .pz-nome{font-size:16px}.pz-scheda.grande.corta .pz-desc{font-size:12.5px;line-height:1.2}.pz-scheda.grande.corta .pz-dove{font-size:12px}.pz-scheda.grande.nofoto .pz-foto,.pz-scheda.grande.nofoto .pz-emo{display:none}",
      ".pz-scheda.grande .pz-foto{flex:1 1 0;min-height:56px;height:auto;width:100%}.pz-scheda.grande .pz-foto img{max-height:100%;max-width:100%}",
      ".pz-scheda.grande .pz-emo{flex:1 1 0;min-height:56px;height:auto;width:100%;background:none;font-size:clamp(48px,calc(var(--alt,640px) * .1),96px)}",
      ".pz-scheda.grande .pz-nome{font-size:clamp(17px,calc(var(--alt,640px) * .026),23px)}.pz-scheda.grande .pz-desc{font-size:clamp(13px,calc(var(--alt,640px) * .019),16.5px)}.pz-scheda.grande .pz-dove{font-size:clamp(12.5px,calc(var(--alt,640px) * .017),15px)}",
      ".pz-scheda.grande .pz-cat,.pz-scheda.grande .pz-nome,.pz-scheda.grande .pz-desc,.pz-scheda.grande .pz-dove{flex:0 0 auto}",
      // (25 ott 2026, il proprietario: «non mettiamo mai sopra e sotto le cose»: quello che il pannello mostra già, sopra si
      //  vede solo quando il pannello è giù — per chi guarda e per chi ha finito)
      ".st-vista.pz-con-pan .pz-sch .pz-solo-giu{display:none}",
      "@media (max-height:700px){.st-vista.pz-con-pan .pz-sip .pz-foto{height:66px}}",
      // (prima di offrire il pannello è giù: la foto del prodotto più grande, sui telefoni alti fino a 230 px)
      ".st-vista:not(.pz-con-pan) .pz-sip .pz-foto{height:clamp(62px,calc(var(--alt,640px) * .26),230px)}",
      ".pz-conf:not(.pz-foto):not(.fo){display:inline-flex;align-items:center;justify-content:center;width:1.3em;height:1.3em;flex:0 0 auto;vertical-align:middle}",
      ".pz-conf:not(.pz-foto):not(.fo) img{width:100%;height:100%;object-fit:cover;border-radius:22%;background:#fff}",
      // il cartellino del prezzo
      ".pz-tag{position:relative;display:inline-flex;align-items:center;gap:6px;padding:4px 12px 4px 20px;border-radius:5px 14px 14px 5px;background:linear-gradient(#ffe98a,#fcc419);color:#3b2a00;font-weight:900;font-size:17px;box-shadow:0 3px 10px rgba(0,0,0,.35);white-space:nowrap}",
      ".pz-tag:before{content:'';position:absolute;left:7px;top:50%;width:7px;height:7px;margin-top:-3.5px;border-radius:50%;background:#2a1d6e}",
      ".pz-tag.rosso{background:linear-gradient(#ffa8a8,#fa5252);color:#fff}.pz-tag.verde{background:linear-gradient(#b2f2bb,#37b24d);color:#05310f}",
      // il sipario
      ".pz-sip{position:relative;display:flex;justify-content:center;width:100%}",
      ".pz-sip>.dentro{display:flex;justify-content:center;width:100%;transform:scale(.82);opacity:0;transition:transform .7s cubic-bezier(.3,1.4,.5,1) .35s,opacity .3s .3s}",
      ".pz-sip.aperto>.dentro{transform:none;opacity:1}",
      ".pz-sip>.tela{position:absolute;top:-14px;bottom:-14px;width:54%;z-index:3;will-change:transform;transition:transform 1s cubic-bezier(.6,.05,.3,1);",
        "background:linear-gradient(90deg,rgba(0,0,0,.25),rgba(255,255,255,.08) 30%,rgba(0,0,0,.3)) 0 0/26px 100%,linear-gradient(#a3122a,#7a0a1d);box-shadow:inset 0 -9px 0 var(--o-oro),inset 0 -12px 0 #b8860b,0 6px 14px rgba(0,0,0,.4)}",
      ".pz-sip>.tela.sx{left:-3%;border-radius:0 0 28% 0}.pz-sip>.tela.dx{right:-3%;border-radius:0 0 0 28%}",
      ".pz-sip.aperto>.tela.sx{transform:translateX(-106%)}.pz-sip.aperto>.tela.dx{transform:translateX(106%)}",
      ".pz-sip.subito>.tela,.pz-sip.subito>.dentro{transition:none}",
      // il contachilometri del prezzo
      ".pz-conta{display:inline-flex;align-items:center;gap:2px;padding:6px 10px;border-radius:14px;background:#05030f;box-shadow:0 0 0 3px #ffd43b,0 0 24px rgba(255,212,59,.45);font-family:'Courier New',ui-monospace,monospace;font-weight:900;color:#ffe066;font-size:34px;line-height:1}",
      ".pz-conta.grande{font-size:44px;padding:8px 12px}",
      ".pz-conta .cif{position:relative;width:.66em;height:1.1em;overflow:hidden;border-radius:5px;background:linear-gradient(#1b1440,#05030f 45%,#05030f 55%,#1b1440)}",
      ".pz-conta .str{position:absolute;left:0;top:0;width:100%;display:flex;flex-direction:column;will-change:transform;transition:transform .45s cubic-bezier(.2,1.5,.4,1)}",
      ".pz-conta .str span{height:1.1em;display:flex;align-items:center;justify-content:center}",
      ".pz-conta .cif.gira .str{animation:pzRotola .28s linear infinite}",
      "@keyframes pzRotola{from{transform:translateY(0)}to{transform:translateY(-50%)}}",
      ".pz-conta .cif.ferma{background:linear-gradient(#2a1f66,#0b0724 45%,#0b0724 55%,#2a1f66)}",
      ".pz-conta .sep{width:.32em;text-align:center}.pz-conta .eur{margin-left:.18em;color:#fff}",
      // (20 nov 2026) il punto delle migliaia disegnato a metà tra le due cifre: col carattere del telefono finiva attaccato alla cifra dopo («7 .250»)
      ".pz-conta .sep:not(.mi){display:flex;align-items:flex-end;justify-content:center;width:.3em;align-self:stretch;padding-bottom:.08em;box-sizing:border-box;font-family:var(--o-tit,system-ui),sans-serif;overflow:visible}",   // (la virgola dei centesimi in mezzo, col carattere dell'app)
      ".pz-conta .sep.mi{position:relative;align-self:stretch;width:.26em;color:transparent;overflow:hidden}.pz-conta .sep.mi::before{content:'';position:absolute;left:50%;bottom:.2em;width:.13em;height:.13em;margin-left:-.065em;border-radius:50%;background:currentColor;background:#ffe066}",
      // la barra del tempo
      ".pz-tempo{display:flex;align-items:center;gap:8px}.pz-tempo .b{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.18);overflow:hidden}",
      ".pz-tempo .b i{display:block;height:100%;width:100%;background:var(--o-oro);transform-origin:0 50%;will-change:transform;transition:transform .2s linear}",
      ".pz-tempo .s{min-width:26px;text-align:right;font-size:17px;font-weight:900;color:var(--o-oro);font-variant-numeric:tabular-nums}",
      ".pz-tempo.poco .b i{background:var(--o-rosso-testo)}.pz-tempo.poco .s{color:var(--o-rosso-testo)}",
      ".pz-tempo.mini{width:min(220px,70%);margin:4px auto 0}.pz-tempo.mini .b{height:5px}.pz-tempo.mini .s{font-size:14px;min-width:20px}",
      // il pannello in basso
      ".pz-pan{position:absolute;left:0;right:0;bottom:0;z-index:23;box-sizing:border-box;display:flex;flex-direction:column;gap:7px;padding:9px 12px calc(10px + env(safe-area-inset-bottom));",
        "border-radius:22px 22px 0 0;background:linear-gradient(#1c2140f2,#10142af7 40%);box-shadow:0 -10px 30px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.25);color:#fff;",
        "transform:translateY(105%);transition:transform .32s cubic-bezier(.3,1.2,.5,1),visibility 0s linear .36s;visibility:hidden;user-select:none;-webkit-user-select:none;touch-action:manipulation}",
      ".pz-pan.su{transform:none;visibility:visible;transition:transform .32s cubic-bezier(.3,1.2,.5,1),visibility 0s}",   // (20 nov 2026: sceso non si vede mai: la scelta del gioco a premi lasciava sporgere una carta in fondo)
      ".pz-pan-testa{display:flex;align-items:center;gap:8px;font-weight:900;font-size:15px;min-height:26px}",
      ".pz-pan-testa .fac{width:28px;height:28px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.15);flex:0 0 auto}.pz-pan-testa .fac svg{width:100%;height:100%;display:block}",
      ".pz-pan-testa .tx{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pz-pan-testa.due .tx{white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:13.5px;line-height:1.15}",   // (20 nov 2026: su due righe invece dei puntini)
      ".pz-pan-testa .pz-tempo{flex:0 0 42%}.pz-pan-testa.due .pz-tempo{flex-basis:32%}",   // (21 nov 2026: col titolo su due righe la barra lascia più posto alle parole)
      ".pz-nota{margin:0;text-align:center;font-weight:800;color:var(--o-tenue);font-size:14px;line-height:1.35}",
      ".pz-nota.forte{color:var(--o-oro-testo);font-size:16px}",
      // il tastierino
      ".pz-tast{display:flex;flex-direction:column;gap:7px}",
      ".pz-offrow{display:flex;gap:6px;overflow:hidden;flex-wrap:nowrap;min-height:30px}",
      ".pz-offrow[hidden]{display:none}",
      ".pz-offrow.tante{flex-wrap:wrap;gap:4px;max-height:72px}",
      ".pz-offrow.tante .pz-offch{flex-direction:column;align-items:center;gap:0;padding:2px 8px;line-height:1.12}",
      ".pz-offrow.tante .pz-offch b{font-size:10.5px;max-width:56px}.pz-offrow.tante .pz-offch span{font-size:12.5px}",
      // (le offerte stanno tutte nel pannello: il tabellone del maxischermo si toglie per fare spazio)
      ".st-vista.pz-con-pan:has(.pz-offrow.tante) .pz-sch .pz-tab{display:none}",
      ".pz-offch{flex:0 0 auto;display:flex;align-items:center;gap:5px;border:0;border-radius:99px;padding:4px 10px;background:rgba(255,255,255,.14);color:#fff;font:inherit;font-size:13px;cursor:pointer;-webkit-tap-highlight-color:transparent}",
      ".pz-offch b{font-weight:800;color:var(--o-tenue);max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pz-offch span{font-weight:900;color:var(--o-oro-testo)}",
      ".pz-offch.mia{background:rgba(52,209,122,.3)}.pz-offch.piu{animation:pzPop .3s}",
      ".pz-disp{position:relative;display:flex;align-items:center;justify-content:center;height:clamp(42px,calc(var(--alt,640px) * .07),58px);border-radius:14px;background:#05030f;box-shadow:inset 0 0 0 2px rgba(255,224,102,.35)}",
      ".pz-disp .v{font-family:'Courier New',ui-monospace,monospace;font-weight:900;font-size:clamp(26px,calc(var(--alt,640px) * .048),36px);color:#ffe066;letter-spacing:.02em}",
      ".pz-disp .v.vuoto{color:rgba(255,224,102,.3)}.pz-disp.fatto .v{color:#6ff0a6;font-family:inherit;font-size:24px}",
      ".pz-canc{display:none}",
      ".pz-tasti{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}",
      ".pz-tasti.chiuso{opacity:.55}",
      ".pz-k,.pz-ok{height:clamp(40px,calc(var(--alt,640px) * .07),56px);border:0;border-radius:13px;font:inherit;font-weight:900;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:transform .08s}",
      ".pz-k{font-size:23px;color:#fff;background:linear-gradient(#2f3763,#222849);box-shadow:inset 0 -3px 0 rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.25)}",
      ".pz-k.fn{font-size:19px;background:linear-gradient(#232944,#181c33)}",
      ".pz-k.virgola{font-size:34px;line-height:.6;padding-bottom:10px}",
      ".pz-k:active,.pz-ok:active{transform:scale(.95)}",
      ".pz-ok{grid-column:span 4;font-size:19px;color:#fff;background:var(--o-tasto);box-shadow:inset 0 -4px 0 rgba(0,0,0,.18),0 4px 14px rgba(224,34,90,.35)}",
      ".pz-ok:disabled{opacity:.72;cursor:default;box-shadow:none}.pz-ok.no{background:linear-gradient(#ffc9c9,#ff8787);color:#5c0011;opacity:.9}",
      // le offerte sul maxischermo (tabellone)
      ".pz-tab{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;max-width:100%}",
      ".pz-och{display:flex;align-items:center;gap:5px;border-radius:99px;padding:2px 10px 2px 2px;background:rgba(255,255,255,.12);font-weight:900;font-size:14px;animation:pzPop .35s cubic-bezier(.3,1.6,.5,1) both}",
      ".pz-och .fac,.pz-riga .fac,.pz-cl .fac,.pz-rg .fac,.pz-car .fac{border-radius:50%;overflow:hidden;background:rgba(255,255,255,.14);flex:0 0 auto}",
      ".pz-och .fac svg,.pz-riga .fac svg,.pz-cl .fac svg,.pz-rg .fac svg,.pz-car .fac svg{width:100%;height:100%;display:block}",
      ".pz-och .fac{width:24px;height:24px}.pz-och .v{color:var(--o-oro-testo)}.pz-och.ok{background:rgba(52,209,122,.28)}.pz-och.aspetta{opacity:.55}",
      ".pz-tab.fitto .pz-och{font-size:12.5px;padding-right:7px}.pz-tab.fitto .pz-och .fac{width:20px;height:20px}",
      // la rivelazione: le righe delle offerte
      ".pz-righe{display:flex;flex-direction:column;gap:5px;width:100%;max-width:420px}",
      ".pz-righe.due{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:5px}",
      ".pz-riga{position:relative;display:flex;flex-wrap:wrap;justify-content:flex-end;row-gap:2px;align-items:center;gap:7px;padding:3px 8px 3px 3px;border-radius:12px;background:rgba(255,255,255,.09);text-align:left;opacity:0;transform:translateY(10px);transition:opacity .25s,transform .35s cubic-bezier(.3,1.5,.5,1)}",
      ".pz-riga.su{opacity:1;transform:none}",   // (21 nov 2026: il nome non si accorcia mai a «P…» per far posto a cifra, «sotto» e punti: se non ci stanno, vanno a capo a destra)
      ".pz-riga .fac{width:28px;height:28px}.pz-riga .nm{flex:1 0 auto;min-width:0;max-width:calc(100% - 40px);font-weight:800;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pz-riga .v{font-weight:900;font-size:15px;color:var(--o-oro-testo);white-space:nowrap}",
      ".pz-riga .bd{flex:0 0 auto;font-size:11px;font-weight:900;border-radius:99px;padding:2px 7px;white-space:nowrap}",
      ".pz-riga .bd:empty{display:none}",
      ".pz-riga.sotto .bd{background:var(--o-verde);color:var(--o-verde-testo)}.pz-riga.sopra{background:rgba(255,93,108,.18)}.pz-riga.sopra .v{color:var(--o-rosso-testo);text-decoration:line-through}",
      ".pz-riga.sopra .bd{background:#e03131;color:#fff;transform:rotate(-6deg)}",
      ".pz-riga.giusto{background:rgba(255,79,134,.3);box-shadow:0 0 0 2px var(--o-oro)}.pz-riga.giusto .bd{background:var(--n-lampone);color:#fff}",
      ".pz-riga.vince{background:rgba(52,209,122,.3);box-shadow:0 0 0 2px var(--o-verde)}",
      ".pz-riga .pt{flex:0 0 auto;font-size:12px;font-weight:900;color:var(--o-verde-testo);background:var(--o-verde);border-radius:99px;padding:1px 7px;animation:pzPop .35s both}",   // (20 nov 2026: dentro la sua riga; prima stava a cavallo del bordo e sembrava della riga sopra)
      ".pz-righe.due .pz-riga{flex-wrap:wrap;row-gap:0;justify-content:flex-start}.pz-righe.due .pz-riga .nm{flex:1 1 calc(100% - 30px)}.pz-clas.due .pz-cl{flex-wrap:wrap;row-gap:0}.pz-clas.due .pz-cl .nm{flex:1 1 calc(100% - 52px)}.pz-clas.due .pz-cl .pt{margin-left:auto}",
      ".pz-righe.due .pz-riga .nm{font-size:12.5px}.pz-righe.due .pz-riga .v{font-size:13px}.pz-righe.due .pz-riga .fac{width:22px;height:22px}.pz-righe.due .pz-riga .bd{font-size:9.5px;padding:1px 5px}",
      ".pz-banner{font-size:24px;font-weight:900;color:#fff;text-shadow:0 3px 0 rgba(0,0,0,.4);animation:pzPop .45s cubic-bezier(.3,1.6,.5,1) both}",
      ".pz-banner.oro{color:var(--o-oro-testo);font-size:30px;font-family:inherit}.pz-banner.no{color:var(--o-rosso-testo)}",
      ".pz-miniprod{display:flex;align-items:center;justify-content:center;gap:8px;max-width:100%;font-weight:900;font-size:16px;color:#fff}",
      ".pz-miniprod .e{font-size:28px}.pz-miniprod .tx{display:flex;flex-direction:column;min-width:0;text-align:left}.pz-miniprod .n{overflow-wrap:anywhere}",
      ".pz-miniprod .tx small{font-size:12px;font-weight:700;color:var(--o-tenue);line-height:1.2}",
      ".pz-curiosita{max-width:420px;font-size:13px;font-weight:700;color:var(--o-testo);background:rgba(224,34,90,.16);box-shadow:inset 0 0 0 1px var(--o-filo-oro);border-radius:12px;padding:5px 10px;line-height:1.3;animation:pzSu .4s both}",
      ".pz-anno{font-size:11px;font-weight:700;color:var(--o-tenue);letter-spacing:.04em}",
      // la classifica (riepilogo) e il carrello
      ".pz-clas{display:flex;flex-direction:column;gap:6px;width:100%;max-width:420px}",
      ".pz-clas.due{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:5px}",
      ".pz-cl{display:flex;align-items:center;gap:8px;padding:4px 10px 4px 4px;border-radius:14px;background:rgba(255,255,255,.08);text-align:left;animation:pzSu .4s both}",
      ".pz-cl.primo{background:rgba(255,79,134,.2);box-shadow:inset 0 0 0 1px rgba(255,79,134,.6)}",
      ".pz-cl .pos{width:26px;text-align:center;font-weight:900;flex:0 0 auto}.pz-cl .fac{width:34px;height:34px}",
      ".pz-cl .nm{flex:1;min-width:0;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pz-cl .pt{font-weight:900;color:var(--o-oro-testo)}.pz-cl .pi{font-size:12px;font-weight:900;color:var(--o-verde);min-width:38px;text-align:right}",
      ".pz-clas.due .pz-cl{padding:3px 6px 3px 3px;gap:5px}.pz-clas.due .pz-cl .fac{width:26px;height:26px}.pz-clas.due .pz-cl .nm{font-size:13px}.pz-clas.due .pz-cl .pt{font-size:13px}.pz-clas.due .pz-cl .pi{min-width:0;font-size:11px}.pz-clas.due .pz-cl .pos{width:20px}",
      ".pz-car{display:flex;align-items:center;gap:8px;padding:5px 10px 5px 4px;border-radius:14px;background:rgba(255,255,255,.08);text-align:left;animation:pzSu .45s both;width:100%;max-width:420px;box-sizing:border-box}",
      ".pz-car .fac{width:34px;height:34px}.pz-car .cosa{flex:1;min-width:0;display:flex;flex-direction:column}",
      // (20 nov 2026) i premi interi quando c'è posto: le figure vanno a capo e i nomi su più righe; solo se non ci sta (classe
      // «fitta», la mette riempi) una riga di figure coi puntini e due righe di nomi, come prima
      ".pz-car .cosa b{font-size:14px}.pz-car .cosa>span{font-size:26px;line-height:1.2;display:flex;flex-wrap:wrap;gap:0 2px}.pz-car .cosa small{font-size:11.5px;color:var(--o-tenue)}",
      ".pz-cars.fitta .pz-car .cosa>span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pz-cars.fitta .pz-car .cosa small{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}",
      ".pz-car .tot{font-weight:900;color:var(--o-oro-testo);font-size:15px;white-space:nowrap}",
      ".pz-cars{display:flex;flex-direction:column;gap:6px;width:100%;align-items:center}.pz-cars.due{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:5px;align-items:start}",
      ".pz-cars.due .pz-car{padding:3px 6px 3px 3px;gap:5px}.pz-cars.due .pz-car .fac{width:26px;height:26px}.pz-cars.due .pz-car .cosa>span{font-size:16px}.pz-cars.due .pz-car .tot{font-size:12px}",
      // (21 nov 2026: in due colonne faccina, nome e totale in alto e sotto foto e premi su tutta la larghezza del riquadro; prima i premi stavano in una colonnina stretta tra faccina e totale)
      ".pz-cars.due .pz-car{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;align-content:start;column-gap:5px;row-gap:2px;padding:4px 7px}",
      ".pz-cars.due .pz-car .cosa{display:contents}.pz-cars.due .pz-car .fac{grid-row:1;grid-column:1}.pz-cars.due .pz-car .cosa b{grid-row:1;grid-column:2;min-width:0}.pz-cars.due .pz-car .tot{grid-row:1;grid-column:3}",
      ".pz-cars.due .pz-car .cosa>span,.pz-cars.due .pz-car .cosa small{grid-column:1/-1}",
      // le scelte grandi (il gioco a premi, giro ancora / mi fermo)
      ".pz-scelte{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px}",
      ".pz-sc{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:96px;border:0;border-radius:16px;padding:8px;font:inherit;color:#1d1b3a;background:linear-gradient(#fff,#eceef8);box-shadow:inset 0 -4px 0 rgba(14,18,44,.25);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .1s}",
      ".pz-sc:active{transform:scale(.96)}.pz-sc .i{font-size:30px;line-height:1}.pz-sc b{font-size:16px}.pz-sc small{font-size:11.5px;font-weight:700;color:#4c4a66;line-height:1.25}",
      ".pz-sc.sel{background:linear-gradient(#ffe6ee,#ffc4d6);box-shadow:0 0 0 3px #ff4f86}.pz-sc:disabled{opacity:.55}",
      ".pz-giochi{display:flex;gap:10px;justify-content:center;width:100%}",
      ".pz-gioco{flex:1;max-width:170px;display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 8px;border-radius:16px;background:rgba(255,255,255,.1);animation:pzPop .45s both}",
      ".pz-gioco .i{font-size:34px}.pz-gioco b{font-size:16px}.pz-gioco small{font-size:12px;color:var(--o-tenue);line-height:1.25}",
      ".pz-gioco.sel{background:rgba(255,79,134,.25);box-shadow:0 0 0 2px var(--o-oro)}.pz-gioco.via{opacity:.35}",
      // la scelta del gioco a premi (25 ott 2026): una volta sola, con la spiegazione chiara. Chi sceglie: i due giochi grandi nel
      // pannello che sale fin sotto il titolo; chi aspetta: gli stessi due sul maxischermo, uno sotto l'altro
      ".pz-giochi{flex-direction:column;max-width:440px}.pz-gioco{max-width:none;display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:12px;row-gap:2px;align-items:center;text-align:left;padding:10px 14px}",
      ".pz-gioco .i{grid-row:1/3;font-size:40px}.pz-gioco b{font-size:18px;color:var(--o-oro-testo)}.pz-gioco small{font-size:13px;font-weight:600}",
      ".pz-pan.su:has(.pz-giochi-pan){top:calc(56px + env(safe-area-inset-top))}",
      // 📺 senza studio (12 nov 2026): col pannello su i punteggi in alto si tolgono (chi ha offerto lo dicono il pannello e il maxischermo): più posto
      ".st-piatto.pz-con-pan .stp-punti{display:none}.st-piatto.pz-con-pan .stp-esci-flt{display:block}",
      ".pz-scelte.pz-giochi-pan{flex:1 1 0;min-height:0;grid-template-columns:minmax(0,1fr);grid-auto-rows:minmax(0,1fr);gap:10px}",
      ".pz-sc.pz-scgioco{display:grid;grid-template-columns:auto minmax(0,1fr);grid-template-rows:auto auto;column-gap:14px;row-gap:4px;align-content:center;align-items:center;text-align:left;min-height:0;padding:12px 16px}",
      ".pz-sc.pz-scgioco .i{grid-row:1/3;font-size:clamp(40px,calc(var(--alt,640px) * .07),64px)}.pz-sc.pz-scgioco b{font-size:clamp(19px,calc(var(--alt,640px) * .03),26px)}",
      ".pz-sc.pz-scgioco small{font-size:clamp(13.5px,calc(var(--alt,640px) * .02),17px);font-weight:600;line-height:1.3}",
      // (21 nov 2026, scelta D del proprietario) le schede della scelta del gioco a premi col vetro scuro della Notte vivace
      ".pz-sc.pz-scgioco{background:linear-gradient(160deg,#272e52,#161b31);color:var(--o-testo);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14),inset 0 1px 0 rgba(255,255,255,.09),0 16px 32px -16px rgba(0,0,0,.9)}",
      ".pz-sc.pz-scgioco b{color:var(--o-testo)}.pz-sc.pz-scgioco small{color:var(--o-tenue)}",
      ".pz-sc.pz-scgioco.sel{background:linear-gradient(160deg,#3d2246,#211a33);box-shadow:inset 0 0 0 2px var(--o-oro),0 0 26px -6px rgba(255,79,134,.65)}",
      // (21 nov 2026) i disegni dei giochi a premi al posto delle emoji (iconaPremio): grandi quanto la loro emoji, un po' di più perché sono tessere
      ".pz-ic{display:block;width:1.25em;height:1.25em;-webkit-user-drag:none;user-select:none;pointer-events:none}.i.dis{display:flex;align-items:center;justify-content:center;line-height:1}",
      ".pz-sc.pz-scgioco .i .pz-ic{width:1.5em;height:1.5em}.pz-gioco .i .pz-ic{width:1.35em;height:1.35em}",
      ".pz-testa .i.ic-testa{flex:0 0 auto;font-size:22px;letter-spacing:0}.pz-testa .i.ic-testa .pz-ic{width:26px;height:26px}.pz-testa-ic .tx{min-width:0}",
      ".pz-intro{display:flex;flex-direction:column;align-items:center;gap:8px;animation:pzPop .5s cubic-bezier(.3,1.6,.5,1) both}",
      ".pz-intro .i{font-size:64px;line-height:1}.pz-intro b{font-size:28px;color:var(--o-oro-testo)}.pz-intro p{margin:0;max-width:330px;font-size:16px;font-weight:700;color:var(--o-testo);line-height:1.35}",
      // (20 nov 2026: le regole in tre righe, come si gioca · esempio · punti; più grandi sui telefoni alti)
      ".pz-intro.come{gap:6px;width:100%;max-width:420px}.pz-intro.come .i{font-size:clamp(40px,calc(var(--alt,640px) * .07),64px)}.pz-intro.come b{font-size:clamp(22px,calc(var(--alt,640px) * .036),30px)}",
      ".pz-come{display:flex;flex-direction:column;gap:8px;width:100%;text-align:left;margin-top:4px}",
      ".pz-come .r{display:flex;flex-direction:column;gap:2px;padding:9px 13px;border-radius:14px;background:var(--o-carta,rgba(255,255,255,.07));box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}",
      ".pz-come .r i{font-style:normal;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--o-oro-testo)}",
      ".pz-come .r span{font-size:clamp(15px,calc(var(--alt,640px) * .0235),19px);font-weight:700;line-height:1.32;color:var(--o-testo)}",
      ".pz-come .r.es{background:rgba(79,216,255,.1);box-shadow:inset 0 0 0 1px rgba(79,216,255,.25)}.pz-come .r.es i{color:#4fd8ff}",
      ".pz-come .r.pt span{font-size:clamp(14px,calc(var(--alt,640px) * .022),18px);color:var(--o-tenue)}",
      // (21 nov 2026: sul telefono basso, se non ci stanno, si stringono: adattaIntro in prezzo.js)
      ".pz-intro.come.f1,.pz-intro.come.f2{gap:4px}.pz-intro.come.f1 .i{font-size:34px}.pz-intro.come.f2 .i{font-size:28px}.pz-intro.come.f1 b{font-size:21px}.pz-intro.come.f2 b{font-size:19px}",
      ".pz-intro.f1 .pz-come,.pz-intro.f2 .pz-come{gap:5px;margin-top:0}.pz-intro.f1 .pz-come .r{padding:6px 11px}.pz-intro.f2 .pz-come .r{padding:5px 10px;gap:1px}.pz-intro.f2 .pz-come .r i{font-size:10.5px}",
      ".pz-intro.f1 .pz-come .r span{font-size:14.5px;line-height:1.27}.pz-intro.f1 .pz-come .r.pt span{font-size:13.5px}.pz-intro.f2 .pz-come .r span{font-size:13.5px;line-height:1.24}.pz-intro.f2 .pz-come .r.pt span{font-size:12.5px}",
      // la ruota del 100
      ".pz-ruota{position:relative;height:calc(var(--h) * 3);border-radius:18px;overflow:hidden;background:#140d3a;box-shadow:inset 0 0 0 3px #ffd43b,0 6px 20px rgba(0,0,0,.45);touch-action:none;cursor:grab}",
      ".pz-ruota .pz-rstr{position:absolute;left:0;right:0;top:0;will-change:transform}",
      ".pz-rcel{position:relative;height:var(--h);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:calc(var(--h) * .55);border-bottom:2px solid rgba(0,0,0,.35);box-sizing:border-box}",
      // i pallini su cui batte la freccia: grandi tra un numero e l'altro, piccoli (metà) a metà numero
      ".pz-rcel::before,.pz-rcel::after{content:\"\";position:absolute;z-index:1;border-radius:50%;background:radial-gradient(circle at 32% 32%,#fffbe6,#ffd66b 55%,#d99a12);box-shadow:0 0 0 1px rgba(110,64,0,.6),0 1px 3px rgba(0,0,0,.5);pointer-events:none}",
      ".pz-rcel::before{width:calc(var(--h) * .17);height:calc(var(--h) * .17);right:calc(var(--h) * .36);bottom:calc(var(--h) * -.085 - 1px)}",
      ".pz-rcel::after{width:calc(var(--h) * .09);height:calc(var(--h) * .09);right:calc(var(--h) * .4);top:50%;margin-top:calc(var(--h) * -.045)}",
      ".pz-ruota.mini .pz-rcel::before,.pz-ruota.mini .pz-rcel::after{box-shadow:0 0 0 1px rgba(110,64,0,.6)}",
      ".pz-rcel.oro{background:linear-gradient(90deg,#b8860b,#ffe066 40%,#fff3bf 50%,#ffe066 60%,#b8860b);color:#3b2a00}",
      ".pz-rcel.arg{background:linear-gradient(90deg,#868e96,#e9ecef 40%,#fff 50%,#e9ecef 60%,#868e96);color:#212529}",
      ".pz-rcel.rosso{background:linear-gradient(90deg,#a61e4d,#ff6b6b 40%,#ffc9c9 50%,#ff6b6b 60%,#a61e4d);color:#fff}",
      ".pz-rcel.verde{background:linear-gradient(90deg,#2b8a3e,#69db7c 40%,#d3f9d8 50%,#69db7c 60%,#2b8a3e);color:#05310f}",
      ".pz-ruota .luce{position:absolute;inset:0;pointer-events:none;background:linear-gradient(rgba(10,6,40,.75),rgba(10,6,40,0) 30%,rgba(10,6,40,0) 70%,rgba(10,6,40,.75))}",
      ".pz-ruota .freccia{position:absolute;right:-2px;top:50%;width:0;height:0;margin-top:-14px;border:14px solid transparent;border-right:22px solid #ff3ea5;pointer-events:none}",
      ".pz-ruota.attiva{box-shadow:inset 0 0 0 3px var(--o-verde),0 0 0 4px rgba(111,240,166,.35),0 6px 20px rgba(0,0,0,.45)}",
      ".pz-ruota.debole,.pz-scuoti{animation:pzScuoti .4s}",
      "@keyframes pzScuoti{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}",
      ".pz-rgriglia{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;width:100%;max-width:420px}",
      // le ruote di tutti, dal vivo (4 per schermata): la ruota piccola a sinistra, chi è e il suo numero a destra
      ".pz-ruota.mini{flex:0 0 auto;width:calc(var(--h) * 2);border-radius:10px;box-shadow:inset 0 0 0 2px var(--o-oro);cursor:default}",
      ".pz-ruota.mini .pz-rcel{border-bottom-width:1px}.pz-ruota.mini .freccia{margin-top:-7px;border-width:7px;border-right-width:11px}",
      ".pz-rcard{display:flex;align-items:center;gap:6px;padding:4px;border-radius:12px;background:rgba(255,255,255,.09);text-align:left;min-width:0}",
      ".pz-rcard.nuova .pz-ruota.mini .pz-rstr{opacity:.15}.pz-rcard.nuova .pz-ruota.mini::after{content:\"?\";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:900 calc(var(--h) * 1.1)/1 system-ui,sans-serif;color:var(--o-oro-testo);pointer-events:none}",
      ".pz-rcard[hidden]{display:none}.pz-rcard .info{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}",
      ".pz-rcard .chi{display:flex;align-items:center;gap:4px;min-width:0}.pz-rcard .fac{width:22px;height:22px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.14);flex:0 0 auto}.pz-rcard .fac svg{width:100%;height:100%;display:block}",
      ".pz-rcard .nm{min-width:0;font-size:12.5px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pz-rcard .val{font-weight:900;font-size:17px;color:var(--o-oro-testo);white-space:nowrap;font-variant-numeric:tabular-nums}.pz-rcard .st{font-size:11px;font-weight:800;color:var(--o-tenue);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".pz-rcard.gira{box-shadow:0 0 0 2px var(--o-verde)}.pz-rcard.fuori{background:rgba(255,93,108,.2)}.pz-rcard.fuori .val{color:var(--o-rosso-testo)}.pz-rcard.cento{background:rgba(255,79,134,.3);box-shadow:0 0 0 2px var(--o-oro)}",
      ".pz-rpag{display:flex;align-items:center;justify-content:center;gap:10px;font-size:12px;font-weight:800;color:var(--o-tenue)}.pz-rpag[hidden]{display:none}",
      ".pz-rpag button{border:0;border-radius:99px;width:30px;height:26px;font:900 14px/1 system-ui,sans-serif;color:#fff;background:rgba(255,255,255,.16);cursor:pointer;touch-action:manipulation}",
      ".pz-rg{display:flex;align-items:center;gap:6px;padding:4px 8px 4px 4px;border-radius:12px;background:rgba(255,255,255,.09);text-align:left;font-weight:800;min-width:0}",
      ".pz-rg .fac{width:28px;height:28px}.pz-rg .nm{flex:1;min-width:0;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pz-rg .val{font-weight:900;font-size:16px;color:var(--o-oro-testo);white-space:nowrap}.pz-rg.fuori{background:rgba(255,93,108,.2)}.pz-rg.fuori .val{color:var(--o-rosso-testo)}",
      ".pz-rg.cento{background:rgba(255,79,134,.3);box-shadow:0 0 0 2px var(--o-oro)}.pz-rg.vince{box-shadow:0 0 0 2px var(--o-verde);background:rgba(52,209,122,.25)}",
      ".pz-big100{font-size:44px;font-weight:900;color:#ff3ea5;text-shadow:0 0 18px rgba(255,62,165,.7),0 3px 0 #000;animation:pzPulsa .45s ease-in-out 3}",
      // i riquadri dei prodotti (tessere): la misura delle scritte la sceglie la forma (g, v0… t2)
      ".pz-tes{flex:1 1 0;min-height:0;width:100%;max-width:480px;display:grid;grid-template-columns:repeat(var(--cols,2),minmax(0,1fr));gap:6px;--fn:15px;--fd:12px}",
      ".pz-te{position:relative;min-width:0;min-height:0;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 7px;border-radius:14px;background:linear-gradient(#ffffff,#f5f6fb);color:#1d1b3a;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,.3),inset 0 -3px 0 rgba(14,18,44,.16);animation:pzPop .45s cubic-bezier(.3,1.6,.5,1) both;transition:background .2s,box-shadow .2s}",
      ".pz-tes.fermo .pz-te{animation:none}",
      ".pz-te .fo{flex:1 1 0;min-height:0;width:100%;display:flex;align-items:center;justify-content:center;line-height:1;font-size:40px}.pz-te.centro{justify-content:center}",
      ".pz-te .fo img{display:block;max-width:100%;max-height:100%;border-radius:9px;box-shadow:0 2px 8px rgba(0,0,0,.22);background:#fff}.pz-te .fo.copre img{width:100%;height:100%;object-fit:cover}",
      ".pz-te .tx{flex:0 0 auto;min-width:0;max-width:100%;display:flex;flex-direction:column;gap:1px;overflow-wrap:break-word;hyphens:auto}",
      // (21 nov 2026: il nome non si spezza a metà parola, «salvadana / io»: i riquadri cercano una forma dove ci sta intero; solo se non ci sta in nessuna, «spezza»)
      ".pz-te .tx b{overflow-wrap:normal;hyphens:manual}.pz-tes.spezza .pz-te .tx b{overflow-wrap:break-word}",
      ".pz-te .tx b{font-size:var(--fn);font-weight:900;line-height:1.15}.pz-te .tx small{font-size:var(--fd);font-weight:600;color:#4c4a66;line-height:1.22}",
      ".pz-te .ex{flex:0 0 auto;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;max-width:100%}",
      ".pz-te .nb{position:absolute;left:4px;top:4px;z-index:1;min-width:20px;height:20px;padding:0 4px;box-sizing:border-box;border-radius:99px;background:#b0184f;color:#fff;font-size:12px;font-weight:900;line-height:20px;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.3)}",
      ".pz-te.sel{background:linear-gradient(#ffe6ee,#ffc4d6);box-shadow:0 0 0 3px #ff4f86,0 4px 14px rgba(224,34,90,.5)}",
      ".pz-tes.g{--fn:18px;--fd:14px}.pz-tes.v0,.pz-tes.o0{--fn:15.5px;--fd:12.5px}.pz-tes.v1,.pz-tes.o1,.pz-tes.t0{--fn:13.5px;--fd:11.5px}.pz-tes.t1{--fn:12.5px;--fd:10.5px}.pz-tes.t2{--fn:11.5px;--fd:10px;gap:4px}",
      // (foto di lato: nelle forme «o» e nell'ultimo riquadro largo)
      ".pz-tes.c2 .pz-te.largo{grid-column:1/-1}.pz-tes.o .pz-te,.pz-te.largo{flex-direction:row;text-align:left;gap:8px;padding:5px 8px 5px 5px}",
      ".pz-tes.o .pz-te .fo,.pz-te.largo .fo{flex:0 0 auto;width:auto;height:100%;aspect-ratio:4/3;max-width:42%}.pz-tes.o .pz-te .tx,.pz-te.largo .tx{flex:1 1 0}",
      // (foto piccola: nelle forme «t», il numero prima della foto)
      ".pz-tes.t .pz-te{flex-direction:row;text-align:left;gap:6px;padding:4px 7px 4px 5px}.pz-tes.t .pz-te .tx{flex:1 1 0}",
      ".pz-tes.t .pz-te .fo{flex:0 0 auto;width:40px;height:40px;aspect-ratio:auto;max-width:none;font-size:30px}.pz-tes.t .pz-te .fo img{width:100%;height:100%;object-fit:cover;border-radius:22%}",
      ".pz-tes.t .pz-te .nb{position:static;flex:0 0 auto;order:-1}",
      ".pz-tes.t1 .pz-te .fo{width:32px;height:32px;font-size:25px}.pz-tes.t2 .pz-te{padding:3px 6px 3px 4px}.pz-tes.t2 .pz-te .fo{width:24px;height:24px;font-size:19px}",
      ".pz-tes.t3{--fn:11px;--fd:10px;gap:3px}.pz-tes.t3 .pz-te{padding:2px 6px}.pz-tes.t3 .pz-te .fo{display:none}",
      // (il cartellino sotto le scritte: nelle forme con la foto di lato si allinea a sinistra)
      ".pz-te .tx .ex{margin-top:3px}.pz-tes.o .tx .ex,.pz-tes.t .tx .ex,.pz-te.largo .tx .ex{justify-content:flex-start}",
      // (l'ultima rete: niente ci sta neanche piccolo → i riquadri crescono e lo spazio scorre)
      ".pz-tes.scorre{grid-template-rows:none!important;grid-auto-rows:auto;overflow-y:auto;align-content:start}.pz-tes.scorre .pz-te{overflow:visible}",
      // la vetrina (il pacco della misteriosa è un riquadro anche lui)
      ".pz-te .pz-tag{font-size:14px;padding:3px 9px 3px 16px;opacity:0;transform:scale(.4);transition:transform .4s cubic-bezier(.3,1.6,.5,1),opacity .2s}.pz-te .pz-tag.su{opacity:1;transform:none}",
      ".pz-te.mist{background:rgba(224,34,90,.14);border:2px dashed var(--o-oro-testo);box-shadow:none;color:var(--o-testo)}.pz-te.mist .tx small{color:var(--o-tenue);font-weight:700}",
      ".pz-vtit{font-size:22px;font-weight:900;color:var(--o-oro-testo);padding:0 40px;line-height:1.15}",
      // la Vetrina misteriosa: il pacco, il titolo rosa della misteriosa, le due vetrine in breve nella rivelazione
      ".pz-vbox{flex:1 1 0;min-height:0;display:flex;flex-direction:column;align-items:center;gap:6px;width:100%;max-width:480px}.pz-vtit.mist{color:var(--o-oro-testo)}",
      ".pz-mist{display:flex;align-items:center;gap:10px;width:100%;max-width:420px;padding:6px 12px;border-radius:14px;border:2px dashed var(--o-oro-testo);background:rgba(224,34,90,.14);text-align:left;animation:pzPop .45s cubic-bezier(.3,1.6,.5,1) both}",
      ".pz-mist .i{font-size:30px;flex:0 0 auto}.pz-mist b{display:block;font-size:15px;color:var(--o-testo)}.pz-mist small{font-size:11.5px;font-weight:700;color:var(--o-tenue)}",
      ".pz-due{display:flex;flex-direction:column;gap:6px;width:100%;max-width:420px}",
      ".pz-vt{display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:14px;background:rgba(255,255,255,.1);animation:pzPop .4s both}.pz-vt .i{font-size:22px}.pz-vt .t{flex:1;min-width:0;text-align:left;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pz-vt b{font-size:17px;color:var(--o-oro-testo);white-space:nowrap}",
      ".pz-sc.mist{background:linear-gradient(#ffe3f3,#ffb8de)}.pz-sc.mist.sel{background:linear-gradient(#ffe6ee,#ffc4d6)}",
      ".pz-tot{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:900;color:#fff}",
      ".pz-indizio{font-size:14px;font-weight:800;color:var(--o-testo);background:rgba(224,34,90,.18);box-shadow:inset 0 0 0 1px var(--o-filo-oro);border-radius:12px;padding:5px 10px;line-height:1.3}.pz-indizio small{display:block;font-size:12px;font-weight:600}",
      ".pz-tutto{font-size:32px;font-weight:900;color:var(--o-oro-testo);text-shadow:0 0 22px rgba(255,79,134,.8),0 3px 0 #a85c00;animation:pzPulsa .5s ease-in-out 4}",
      // ⏩ Avanti
      ".pz-avanti{display:flex;align-items:center;justify-content:center;gap:10px}.pz-avanti .quanti{font-size:14px;font-weight:800;background:rgba(255,255,255,.22);border-radius:99px;padding:2px 10px}",
      ".pz-attesa{margin:0;text-align:center;font-weight:800;color:var(--o-tenue)}",
      "@media (prefers-reduced-motion:reduce){.pz-och,.pz-cl,.pz-car,.pz-te,.pz-gioco,.pz-intro,.pz-banner{animation:none}}"
    ].join("");
    document.head.appendChild(s);
  }

  // ---------------- i disegni dei giochi a premi (21 nov 2026, scelti dal proprietario al posto delle emoji) ----------------
  // js/games/prezzo-disegni.js (SG_PREZZO_DISEGNI): un SVG per gioco. Si mostrano come immagine (ognuna coi suoi id, mai due
  // disegni uguali che si pestano), fatta una volta sola per gioco. Senza disegno: l'emoji del gioco, come prima.
  var DIS_URL = {};
  function disegnoURL(tipo) {
    var d = window.SG_PREZZO_DISEGNI; if (!d || !d[tipo]) return null;
    return DIS_URL[tipo] || (DIS_URL[tipo] = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(d[tipo]));
  }
  // l'icona di un gioco a premi: <span class="i"> col disegno dentro (classe «dis»), o con l'emoji
  function iconaPremio(el, tipo, emoji, cls) {
    var u = disegnoURL(tipo), c = "i" + (cls ? " " + cls : "");
    if (!u) return el("span", { class: c, text: emoji || "🎁" });
    var sp = el("span", { class: c + " dis" }), im = document.createElement("img");
    im.className = "pz-ic"; im.alt = ""; im.src = u; im.draggable = false; im.decoding = "async";
    sp.appendChild(im); return sp;
  }
  // la testata di un gioco a premi (in alto sul maxischermo): il disegno e il titolo; dici(testo) cambia solo il titolo
  function testaPremio(el, tipo, testo, emoji) {
    var tx = el("span", { class: "tx", text: testo }), d = el("div", { class: "pz-testa pz-testa-ic" }, [ iconaPremio(el, tipo, emoji, "ic-testa"), tx ]);
    d.dici = function (t) { tx.textContent = t; };
    return d;
  }

  window.SGPrezzoScena = {
    iconaPremio: iconaPremio, testaPremio: testaPremio, disegnoURL: disegnoURL,
    fmtN: fmtN, fmtE: fmtE, tondo2: tondo2, passo: passo, margine: margine, arrotonda: arrotonda, conCent: conCent,
    CAT: CAT, ORDINE_CAT: ORDINE_CAT, FX: FX, vibra: vibra,
    scheda: scheda, cartellino: cartellino, sipario: sipario, contachilometri: contachilometri, durataConta: durataConta,
    urlFoto: urlFoto, precarica: precarica, figura: figura, miniprod: miniprod, tessere: tessere, sottoDi: sottoDi, doveDi: doveDi,
    barraTempo: barraTempo, pannello: pannello, tastierino: tastierino,
    SPICCHI: SPICCHI, ruota: ruota, coloreSpicchio: coloreSpicchio,
    stile: stile
  };
})();

/* =========================================================
   GIOCO — «Il Prezzo è Giusto!» (il nome per ora: prima di un lancio pubblico va cambiato)
   Nello studio del game show (js/studio.js). Prima di tutto ONLINE (ognuno dal suo telefono, nella Sala, da 2 a 8:
   tutti giocano sempre insieme), poi sullo stesso telefono (a turno) e «🤖 Contro il Bot».
   Due formati, li sceglie chi ospita (regola «Formato»):
   - 📺 Come in TV: sigla, L'Offerta (sipario, 20 secondi, vince chi va più vicino SENZA superare; a vista col «+1 €»
     cattivo o segrete; se sforano tutti si rifà una volta), chi vince l'Offerta sceglie il gioco a premi (si gioca tutti
     insieme), la Ruota del 100 e la Vetrina finale con «VINCI TUTTO!»; alla fine il carrello dei premi e la classifica.
   - 🎯 Solo il prezzo: esce un oggetto, 20 secondi, vince chi va più vicino (sopra o sotto; «Senza sforare» è una regola),
     chi lo indovina preciso prende il bonus del PREZZO GIUSTO; 10 oggetti (6 Veloce, 15 Serata lunga), l'ultimo vale doppio.
   Come è fatto:
   - le regole senza grafica (esitoOfferta, esitoRuota, piano…) in fondo sono anche in window.__prezzo per le prove;
   - UN motore solo (motore): tiene la partita e manda a tutti la "foto" (vm) con fase, sotto e la chiave del passo k.
     Online è l'host; contro il Bot e sullo stesso telefono gira sul telefono e basta (i Bot giocano da soli col tempo,
     sullo stesso telefono la regia passa il telefono a turno e le fasi non hanno scadenza);
   - OGNI telefono fa la sua regia dello studio guardando la foto (regiaPasso): un passo non si rifà due volte;
   - i giochi a premi sono oggetti registrati da file a parte (window.SG_PREZZO_PREMI, vedi js/games/prezzo-premi-piu.js);
   - i pezzi da vedere e i suoni stanno in js/games/prezzo-scena.js (window.SGPrezzoScena);
   - i prodotti: window.SG_PREZZO = { anno, prodotti: [...], vetrine: [...] } dai file data/prezzo-*.js (quanti siano).
   ========================================================= */
(function () {
  "use strict";

  var ID = "prezzo", NOME = "Indovina il prezzo", LOGO = ["INDOVINA", "IL PREZZO"];
  var ST = window.SGStudio;
  function Z() { return window.SGPrezzoScena; }
  function E(v) { return Z().fmtE(v); }
  function N(v) { return Z().fmtN(v); }

  var MIN_ON = 2, MAX_ON = 8;
  // i tempi (ms). Online (e contro il Bot) per tutti insieme; sullo stesso telefono (TL) a testa
  // (scegli e intro: il tempo per leggere le regole dei giochi a premi, anche per chi non li conosce)
  var T = { prodotto: 4800, offri: 20000, rifai: 12000, sopra: 4400, scegli: 15000, intro: 10000, punti: 10000, vetScegli: 12000, vetOffri: 30000, giro: 15000, decidi: 10000 };
  var TL = { offri: 25000, vetScegli: 15000, vetOffri: 35000, giro: 20000, decidi: 15000, scegli: 15000 };
  // I punti (22 ott 2026, rifatti con decine di migliaia di puntate simulate: .agents/skills/prova-nel-browser/prezzo/simulazione). Prima la
  // fortuna e la Vetrina pesavano troppo (CENTO +1.000, giro bonus +1.000/+500, Vetrina ×3 e VINCI TUTTO +1.500 entro il 5%):
  // chi era primo dopo le manche vinceva una volta su due e un CENTO cambiava il vincitore una volta su quattro.
  // Ora la Ruota (quasi tutta fortuna) dà 200 a chi vince e +300 per CENTO, la Vetrina una volta e mezza un'Offerta e VINCI
  // TUTTO è più raro (entro il 3%): scelti tra 50 combinazioni provate (.agents/skills/prova-nel-browser/prezzo/simulazione/cerca.js).
  var SCALA = [300, 150, 75], SCALA_R = [200, 100, 50], SCALA_V = [450, 225, 110];
  var BONUS_GIUSTO = 500, BONUS_TUTTO = 1000, TUTTO_PCT = 0.03, BONUS_CENTO = 300, GIRO_100 = 300, GIRO_VERDE = 150;
  var N_OGG = { veloce: 6, puntata: 10, lunga: 15 }, N_GIRI = { veloce: 2, puntata: 3, lunga: 4 };
  // i passi della rivelazione (li usa l'host per sapere quanto aspettare e la regia per andare a tempo)
  var RV = { cam: 650, rullo: 1300, cifra: 280, dopoConta: 450, riga: 420, banner: 2000, cattivo: 2500, leggii: 2700 };
  var RVET = { pezzo: 2300, prezzo: 850, cifra: 240, riga: 600, banner: 2100, tutto: 3900, mist: 1700, pezzoB: 450, riass: 900 };
  var RRU = { riga: 650, cento: 2700, banner: 2100 };
  var RU_FERMA = 6500;   // dopo l'ultima spinta della Ruota: la ruota frena (fino a ~5,5 s) e il numero resta un attimo

  // =========================================================
  //  LE REGOLE (senza grafica)
  // =========================================================
  function tondo2(v) { return Math.round((+v || 0) * 100) / 100; }
  function mescola(a) { var b = a.slice(); for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = b[i]; b[i] = b[j]; b[j] = x; } return b; }
  function copia(o) { return JSON.parse(JSON.stringify(o)); }
  // i posti a pari merito: [{ id, d }] (d = distanza: più piccola = meglio) → { id: posto }
  function posizioni(lista) {
    var out = {};
    lista.forEach(function (x) { out[x.id] = 1 + lista.filter(function (y) { return y.d < x.d - 1e-9; }).length; });
    return out;
  }
  // punti per posto: 1° e 2° sempre, il 3° solo con almeno 4 giocatori
  // (24 ott 2026, il proprietario: «quando perdo una manche leggo +… sul mio personaggio, ma non capisco perché se ho perso»: in due
  //  il secondo è chi ha perso; il secondo posto vale da 3 giocatori in su, il terzo da 4)
  function puntiPos(pos, n, scala) { return pos === 1 ? scala[0] : (pos === 2 && n >= 3) ? scala[1] : (pos === 3 && n >= 4) ? scala[2] : 0; }
  // L'Offerta (e la Vetrina): off = { id: valore }.
  // o = { senzaSforare (chi supera oltre il margine non vale), pct (margine: 2%, la Vetrina 3%), scala, bonus (PREZZO GIUSTO),
  //       molt (l'ultimo oggetto vale doppio), ordine (chi ha offerto prima: serve al «+1 €»), n (quanti giocano) }
  function esitoOfferta(prezzo, off, o) {
    o = o || {};
    var mg = Z().margine(prezzo, o.pct), ids = Object.keys(off || {}), molt = o.molt || 1, n = o.n || ids.length;
    var righe = ids.map(function (id) {
      var v = tondo2(off[id]);
      return { id: id, v: v, d: Math.abs(v - prezzo), sopra: v > prezzo + mg + 1e-9, giusto: Math.abs(v - prezzo) <= mg + 1e-9 };
    });
    var cand = righe.filter(function (r) { return !(o.senzaSforare && r.sopra); });
    var pos = posizioni(cand);
    righe.forEach(function (r) {
      r.pos = pos[r.id] || 0;
      r.punti = r.pos ? puntiPos(r.pos, n, o.scala || SCALA) * molt : 0;
      if (r.giusto && r.pos) r.punti += (o.bonus == null ? BONUS_GIUSTO : o.bonus) * molt;
    });
    righe.sort(function (a, b) { return a.v - b.v; });
    var vince = righe.filter(function (r) { return r.pos === 1; }).map(function (r) { return r.id; });
    var e = { prezzo: prezzo, righe: righe, vince: vince, giusti: righe.filter(function (r) { return r.giusto && r.pos; }).map(function (r) { return r.id; }),
      tuttiSopra: !!(o.senzaSforare && righe.length && !cand.length), nessuno: !righe.length, cattivo: null };
    // «😈 Che cattiveria!»: chi vince ha detto esattamente 1 € (o un passo dei centesimi) più di uno che aveva offerto prima di lui
    if (vince.length === 1 && o.ordine) {
      var w = righe.filter(function (r) { return r.id === vince[0]; })[0], pz = Z().passo(prezzo);
      righe.forEach(function (r) {
        if (e.cattivo || r.id === w.id || r.sopra) return;
        var diff = tondo2(w.v - r.v), io = o.ordine.indexOf(w.id), lui = o.ordine.indexOf(r.id);
        if ((Math.abs(diff - 1) < 1e-9 || (pz < 1 && Math.abs(diff - pz) < 1e-9)) && lui >= 0 && io > lui) e.cattivo = { chi: w.id, a: r.id, piu: diff };
      });
    }
    return e;
  }
  // La Vetrina finale, anche con la misteriosa: off = { id: valore }, sc = { id: "a" | "b" } (la vetrina di ognuno: «a» quella
  // vista da tutti, «b» la misteriosa), totA e totB i loro totali, n quanti giocano. Le vetrine sono diverse, quindi vince chi
  // si avvicina di più IN PERCENTUALE senza superare (fino al 3% sopra vale ancora): con una vetrina sola è la stessa classifica
  // di sempre. Entro il 3% «VINCI TUTTO!» (+1.000).
  function esitoVetrina(off, sc, totA, totB, n) {
    var ids = Object.keys(off || {});
    var righe = ids.map(function (id) {
      var w = sc && sc[id] === "b" && totB > 0 ? "b" : "a", tot = w === "b" ? totB : totA, v = tondo2(off[id]);
      return { id: id, w: w, tot: tot, v: v, d: Math.abs(v - tot) / tot, sopra: v > tot + Z().margine(tot, 0.03) + 1e-9 };
    });
    var cand = righe.filter(function (r) { return !r.sopra; }), pos = posizioni(cand), tutti = [];
    righe.forEach(function (r) {
      r.pos = pos[r.id] || 0;
      r.punti = r.pos ? puntiPos(r.pos, n || ids.length, SCALA_V) : 0;
      if (!r.sopra && r.v >= r.tot * (1 - TUTTO_PCT)) { r.tutto = true; r.punti += BONUS_TUTTO; tutti.push(r.id); }
    });
    righe.sort(function (a, b) { return a.d - b.d; });
    return { prezzo: totA, totB: totB, righe: righe, vince: righe.filter(function (r) { return r.pos === 1; }).map(function (r) { return r.id; }), tutti: tutti,
      tuttiSopra: !!(righe.length && !cand.length), nessuno: !righe.length,
      ordine: righe.slice().sort(function (a, b) { return (b.sopra - a.sopra) || (b.d - a.d); }).map(function (r) { return r.id; }) };   // dalla più lontana alla più vicina
  }
  // La Ruota del 100: g = { id: { v1, v2 } }. Vince chi va più vicino a 100 senza superarlo; 100 esatto +300 (BONUS_CENTO)
  function esitoRuota(g, ids) {
    var righe = ids.map(function (id) {
      var x = g[id] || {}, tot = (x.v1 || 0) + (x.v2 || 0);
      return { id: id, v1: x.v1 || 0, v2: x.v2 || 0, tot: tot, out: tot > 100, cento: tot === 100 };
    });
    var cand = righe.filter(function (r) { return !r.out && r.tot > 0; }).map(function (r) { return { id: r.id, d: 100 - r.tot }; });
    var pos = posizioni(cand), n = ids.length;
    righe.forEach(function (r) { r.pos = pos[r.id] || 0; r.punti = r.pos ? puntiPos(r.pos, n, SCALA_R) : 0; if (r.cento) r.punti += BONUS_CENTO; });
    righe.sort(function (a, b) { return (a.out - b.out) || (b.tot - a.tot); });
    return { righe: righe, vince: righe.filter(function (r) { return r.pos === 1; }).map(function (r) { return r.id; }), cento: righe.filter(function (r) { return r.cento; }).map(function (r) { return r.id; }) };
  }
  function puntiBonus(b) { return b === 100 ? GIRO_100 : (b === 5 || b === 15) ? GIRO_VERDE : 0; }
  // la puntata: l'ordine dei passi. nPremi = quanti giochi a premi ci sono (0 = niente giochi a premi)
  function piano(formato, durata, nPremi) {
    var p = ["apertura"], i;
    if (formato === "solo") {
      var n = N_OGG[durata] || 10;
      for (i = 1; i <= n; i++) {
        p.push("oggetto");
        if (i < n && (i % 3 === 0 || i === n - 1)) p.push("punti");   // la classifica ogni 3 oggetti e prima dell'ultimo
      }
      if (p[p.length - 2] === "punti" && p[p.length - 3] === "punti") p.splice(p.length - 2, 1);
    } else {
      var giri = N_GIRI[durata] || 3;
      for (i = 0; i < giri; i++) {
        p.push("offerta"); if (nPremi) p.push("premio"); p.push("punti");
        if (durata === "lunga" && i === 1) p.push("ruota", "punti");   // in Serata lunga la Ruota anche a metà, come in America
      }
      p.push("ruota", "punti", "vetrina");
    }
    p.push("carrello", "fine");
    return p;
  }
  // il Bot: il prezzo vero con un errore a caso (facile ±45%, medio ±25%, difficile ±12%); prudente = tende a stare sotto
  var ERR = { facile: 0.45, medio: 0.25, difficile: 0.12 };
  function gauss() { var u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function stimaBot(prezzo, liv, prudente) {
    var e = ERR[liv] || 0.25, f = Math.exp(Math.max(-2.5, Math.min(2.5, gauss())) * e * 0.85);
    if (prudente) f *= 1 - e * 0.4;
    return Math.max(Z().passo(prezzo), Z().arrotonda(prezzo * f, prezzo));
  }
  function avatarValido(o) { return o && typeof o === "object" && JSON.stringify(o).length < 3000 ? o : null; }

  // ---------------- i prodotti ----------------
  // la foto vera (data/prezzo-foto.js: id → "percorso su Commons|larghezza"; i pezzi delle vetrine sono "idVetrina#n")
  function conFoto(o, id) { if (o && o.f === undefined) o.f = (window.SG_PREZZO_FOTO || {})[id] || null; return o; }
  // i prodotti senza una foto controllata restano, con l'emoji, finché il proprietario non manda la foto (deciso il 23 ott 2026)
  function prodotti() {
    var d = window.SG_PREZZO || {};
    return (d.prodotti || []).filter(function (p) { return p && p.id && p.nome && +p.prezzo > 0 && Z().CAT[p.cat]; }).map(function (p) { return conFoto(p, p.id); });
  }
  function vetrine() {
    var d = window.SG_PREZZO || {};
    return (d.vetrine || []).filter(function (v) { return v && v.titolo && v.pezzi && v.pezzi.length >= 2 && v.pezzi.every(function (x) { return x && x.nome && +x.prezzo > 0; }); })
      .map(function (v) { v.pezzi.forEach(function (x, i) { conFoto(x, (v.id || v.titolo) + "#" + i); }); return v; });
  }
  function annoDati() { return (window.SG_PREZZO || {}).anno || 2026; }
  var CH_VISTI = "sg-prezzo-visti", CH_VETR = "sg-prezzo-vetrine";
  function leggiLS(k) { try { var v = JSON.parse(localStorage.getItem(k) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function scriviLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  // il cesto della partita: i prodotti delle categorie accese, mai due volte nella partita e (finché ce ne sono) mai quelli
  // usciti nelle ultime serate su questo telefono (gli ultimi 300). usati = { id: 1 } dei prodotti già usciti nella partita:
  // sta nello stato della partita (H.usati), così dopo una ripresa non tornano gli stessi
  function Cesto(cats, usati) {
    usati = usati || {}; var visti = {};
    leggiLS(CH_VISTI).forEach(function (id) { visti[id] = 1; });
    function nuovo(p) { return !visti[p.id]; }
    function pesca(filtro, n) {
      n = n || 1;
      var tutti = prodotti().filter(function (p) { return !usati[p.id]; });
      var acc = tutti.filter(function (p) { return cats.indexOf(p.cat) >= 0; });
      var liste = [acc.filter(nuovo), acc, tutti.filter(nuovo), tutti], out = [];
      for (var q = 0; q < liste.length && out.length < n; q++) {
        var l = mescola(liste[q].filter(function (p) { return out.indexOf(p) < 0 && (!filtro || filtro(p)); }));
        out = out.concat(l.slice(0, n - out.length));
      }
      if (out.length) {
        out.forEach(function (p) { usati[p.id] = 1; visti[p.id] = 1; });
        var ids = out.map(function (p) { return p.id; });
        scriviLS(CH_VISTI, leggiLS(CH_VISTI).filter(function (id) { return ids.indexOf(id) < 0; }).concat(ids).slice(-300));
      }
      return out.map(copia);
    }
    return { pesca: pesca };
  }
  // nonSegnare: la vetrina misteriosa, che conta come «già uscita» solo se qualcuno la scopre (segnaVista)
  function pescaVetrina(escludi, nonSegnare) {
    var tutte = vetrine().filter(function (v) { return !escludi || escludi.indexOf(v.id || v.titolo) < 0; }); if (!tutte.length) return null;
    var viste = leggiLS(CH_VETR), nuove = tutte.filter(function (v) { return viste.indexOf(v.id || v.titolo) < 0; });
    var v = mescola(nuove.length ? nuove : tutte)[0];
    if (!nonSegnare) segnaVista(v);
    return copia(v);
  }
  function segnaVista(v) { var k = v.id || v.titolo; scriviLS(CH_VETR, leggiLS(CH_VETR).filter(function (x) { return x !== k; }).concat([k]).slice(-40)); }
  function pubProd(p) { return p ? { id: p.id, e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat, cent: Z().conCent(p.prezzo) } : null; }

  // ---------------- i giochi a premi registrati ----------------
  function premi() { return window.SG_PREZZO_PREMI || {}; }
  function premioDi(tipo) { var g = premi()[tipo]; return g && typeof g.prepara === "function" && typeof g.fine === "function" ? g : null; }
  function infoPremio(tipo) { var g = premioDi(tipo) || {}; return { tipo: tipo, nome: g.nome || tipo, icona: g.icona || "🎁", regola: g.regola || "", spiega: g.spiega || g.regola || "", fai: g.fai || "", es: g.es || "", pt: g.pt || "" }; }
  // quanto resta la schermata delle regole (20 nov 2026, il proprietario: «metterei più tempo per la spiegazione dei minigiochi… così chi non gioca
  // capisce bene»): una lettura con calma, 2,5 parole al secondo, più 6 secondi per guardare l'esempio; tra 15 e 30 secondi. «⏩ Avanti» resta.
  function parole(s) { return String(s || "").trim().split(/\s+/).filter(function (x) { return /[0-9A-Za-zÀ-ú]/.test(x); }).length; }
  function tempoRegole(tipo) { var i = infoPremio(tipo), n = parole(i.fai ? i.fai + " " + i.es + " " + i.pt : i.spiega); return Math.max(15, Math.min(30, Math.round(6 + n / 2.5))) * 1000; }

  // ---------------- le impostazioni ----------------
  function leggiImp(imp, modo) {
    imp = imp || {};
    var cats = (imp.categorie || []).filter(function (c) { return Z().CAT[c]; });
    if (cats.length < 3) cats = Z().ORDINE_CAT.slice();
    return { formato: imp.formato === "solo" ? "solo" : "tv", durata: N_GIRI[imp.durata] ? imp.durata : "puntata",
      offerte: imp.offerte === "segrete" || imp.offerte === "vista" ? imp.offerte : (modo === "telefono" ? "segrete" : "vista"),
      sforare: imp.sforare === true, cats: cats, liv: ERR[imp.liv] ? imp.liv : "medio", nBot: [1, 3, 5].indexOf(imp.nBot) >= 0 ? imp.nBot : 3 };
  }

  // =========================================================
  //  IL MOTORE: tiene la partita (online sul telefono dell'host; col Bot e sullo stesso telefono su questo telefono)
  // =========================================================
  function motore(t, modo) {
    var online = modo === "online";
    if (online && !(window.SGNet && SGNet.disponibile())) return senzaRete(t);
    if (!prodotti().length) return niente(t);
    var imp = leggiImp(t.impostazioni, modo);
    var nomeHost = (t.giocatori && t.giocatori[0]) || t.nomeProfilo() || "Host";
    // io che tengo la partita: "host", oppure (host di riserva) l'id da amico di chi ha preso il posto dell'host sparito
    var IO = (online && t.mioId) || "host";
    var H = { modo: modo, fase: "lobby", sotto: null, k: 0, partita: 0, codice: online ? "…" : "", pronta: !online, imp: imp,
      players: [], guarda: [], arrivi: [], scadenza: 0, piano: [], ip: -1, avanti: [], ultimo: {} };
    if (modo === "telefono") H.players = (t.giocatori || []).map(function (n, i) { return { id: "p" + i, nome: n, omino: null, punti: 0, carrello: [] }; });
    else {
      H.players = [{ id: IO, nome: nomeHost, omino: t.mioOmino(nomeHost), punti: 0, carrello: [] }];
      if (modo === "bot") {
        var cast = (window.SG && SG.bot && SG.bot.prendi) ? SG.bot.prendi(imp.nBot, { livello: imp.liv, escludi: [nomeHost] }) : [];
        cast.forEach(function (b, i) { H.players.push({ id: "b" + i, nome: b.nome, omino: b.omino || null, punti: 0, carrello: [], bot: true }); });
      }
    }
    // la partita di prima (online: l'host ha ricaricato la pagina o riaperto l'app, oppure, con t.ripresa.daRiserva, l'host
    // è sparito e la porta avanti questo telefono). Gli amici non si danno per usciti: si aspettano ("attesi") e rientrano
    // da soli col loro join (stesso id); chi non torna entro 10 secondi esce, come chi se ne va (vedi riprendi)
    var R0 = online && t.ripresa && t.ripresa.stato, riprendo = !!(R0 && R0.fase && R0.fase !== "lobby" && R0.players), attesi = {}, tAttesi = null;
    if (riprendo) {
      H = R0; H.modo = modo; H.pronta = false; H.codice = H.codice || "…";
      H.guarda = H.guarda || []; H.arrivi = H.arrivi || []; H.avanti = H.avanti || []; H.ultimo = H.ultimo || {}; H.usati = H.usati || {};
      H.cesto = Cesto(H.imp.cats, H.usati);
      H.players.forEach(function (p) {
        p.forse = false;
        if (p.id === IO) { p.via = false; p.omino = t.mioOmino(p.nome) || p.omino || null; }
        else if (!p.via) attesi[p.id] = 1;
      });
    }
    function pById(id) { for (var i = 0; i < H.players.length; i++) if (H.players[i].id === id) return H.players[i]; return null; }
    function nome(id) { var p = pById(id); return p ? p.nome : "?"; }
    function presenti() { return H.players.filter(function (p) { return !p.via; }); }
    function bots() { return H.players.filter(function (p) { return p.bot && !p.via; }); }
    function umani() { return H.players.filter(function (p) { return !p.bot && !p.via; }); }
    function servono() { return online ? Math.floor(umani().length / 2) + 1 : 1; }
    var to = null, toBot = [];
    function ferma() { clearTimeout(to); to = null; toBot.forEach(clearTimeout); toBot = []; }
    // il gioco è stato portato via dal core (Sala passata a un amico, Cambia gioco): niente più timer né Bot
    function vivo() { if (H.fase === "lobby" || H.fase === "fine") return true; return !(R && R.t === t && R.S && !R.S.vivo() && !R.fineFatta); }
    function dopo(ms, f) { clearTimeout(to); to = setTimeout(function () { to = null; if (!vivo()) return ferma(); f(); }, ms); }
    function botDopo(ms, f) { toBot.push(setTimeout(function () { if (vivo()) f(); }, ms)); }
    // un passo nuovo: fase, sotto, chiave k (la regia di ogni telefono fa ogni passo una volta sola) e quanto dura
    function vai(fase, sotto, ms, poi) {
      H.fase = fase; H.sotto = sotto || null; H.k++; H.scadenza = ms ? Date.now() + ms : 0;
      bd();
      if (online && t.aCheSiamo) t.aCheSiamo(aCheSiamo());
      if (ms && poi) dopo(ms, poi); else clearTimeout(to);
    }

    // una riga per la Sala: a che punto è la puntata (al massimo 40 lettere)
    function aCheSiamo() {
      var f = H.fase;
      if (f === "offerta") return (H.imp.formato === "solo" ? "🏷️ Oggetto " : "🏷️ L'Offerta ") + (H.iOff || 1) + " di " + (H.nOff || 1);
      if (f === "scegli" || f === "premio") return "🎁 Gioco a premi" + (f === "premio" && H.premio ? ": " + infoPremio(H.premio.tipo).nome : "");
      if (f === "ruota") return "🎡 La Ruota del 100";
      if (f === "vetrina") return "🛍️ La Vetrina finale";
      if (f === "punti") return "🏁 Classifica";
      if (f === "carrello" || f === "fine") return "🏆 Fine della puntata";
      return "📺 Si comincia";
    }
    // "⚙️ Regole" nella saletta
    t.onRegole = function (im) { if (H.fase !== "lobby") return; var old = H.imp; H.imp = leggiImp(im, modo); if (!online) H.imp.nBot = old.nBot; bd(); };

    var rete = null;
    if (online) {
      rete = SGNet.ospita(ID, {
        onCodice: function (c) { H.codice = c; bd(); },
        onConnesso: function () { H.pronta = true; bd(); },
        onErrore: function () { if (H.pronta) return; ferma(); if (rete) rete.chiudi(); erroreRete(t, "Non riesco ad aprire la stanza.", function () { motore(t, modo); }); },
        onForse: function (id) { var p = pById(id); if (p && !p.forse) { p.forse = true; bd(); } },
        onTornato: function (id) { var p = pById(id); if (p && p.forse) { p.forse = false; bd(); } },
        onAddio: addio,
        onMsg: function (id, m) {
          if (!m || !m.t) return;
          if (m.t === "join") {
            delete attesi[id];   // (dopo una ripresa: è tornato)
            var p0 = pById(id), nomeJ = String(m.nome || "Amico").slice(0, 16);
            if (p0 && !p0.omino) p0.omino = avatarValido(m.omino);
            // nella Sala gioca solo chi è stato scelto in «Chi gioca?»: gli altri guardano (col loro id nella foto)
            if (!p0 && (H.guarda.indexOf(id) >= 0 || (t.puoSedersi && !t.puoSedersi(id, nomeJ)))) { if (H.guarda.indexOf(id) < 0) H.guarda.push(id); bd(); return; }
            if (!p0 && H.fase === "lobby" && H.players.length < MAX_ON) H.players.push({ id: id, nome: nomeJ, omino: avatarValido(m.omino), punti: 0, carrello: [] });
            // arrivato a partita cominciata: entra al prossimo oggetto (intanto guarda, col suo id nella foto)
            else if (!p0 && H.fase !== "lobby" && H.fase !== "fine" && presenti().length + H.arrivi.length < MAX_ON && !H.arrivi.some(function (a) { return a.id === id; }))
              H.arrivi.push({ id: id, nome: nomeJ, omino: avatarValido(m.omino) });
            else if (p0) { p0.forse = false; if (p0.via && H.fase !== "fine") { p0.via = false; controlla(); } }   // è tornato (stesso id): riprende coi suoi punti
            bd();
            if (p0 && H.fase !== "lobby") rimandaSegreti(id);
            return;
          }
          mossa(id, m);
        }
      }, { ripresa: riprendo });   // (con la partita ripresa gli amici non tornano in saletta)
      if (!rete) return senzaRete(t);
      if (riprendo && rete.codice) H.codice = rete.codice;
    }
    // chi se ne va (o, dopo una ripresa, non è tornato in tempo)
    function addio(id) {
      delete attesi[id];
      if (H.guarda.indexOf(id) >= 0) { H.guarda.splice(H.guarda.indexOf(id), 1); bd(); return; }
      if (H.arrivi.some(function (a) { return a.id === id; })) { H.arrivi = H.arrivi.filter(function (a) { return a.id !== id; }); bd(); return; }
      var p = pById(id); if (!p || (p.via && H.fase !== "lobby")) return;
      p.forse = false;
      if (H.fase === "lobby") { H.players = H.players.filter(function (x) { return x.id !== id; }); bd(); return; }
      p.via = true;   // a partita iniziata resta in classifica, ma non gioca più (se torna, riprende)
      controlla(); bd();
    }

    // ----- la foto per tutti: MAI il prezzo prima della rivelazione, MAI le offerte segrete -----
    function vm() {
      var f = H.fase, s = H.sotto, o = { fase: f, sotto: s, k: H.k, partita: H.partita, tiene: IO, sessione: H.sessione || "", codice: H.codice, pronta: H.pronta,
        formato: H.imp.formato, durata: H.imp.durata, offerte: H.imp.offerte, sforare: H.imp.sforare, nCat: H.imp.cats.length, anno: annoDati(),
        players: H.players.map(function (p) { return { id: p.id, nome: p.nome, omino: p.omino || null, punti: p.punti, via: !!p.via, forse: !!p.forse, bot: p.bot ? 1 : 0 }; }),
        guarda: H.guarda.slice(), arrivi: H.arrivi.map(function (a) { return { id: a.id, nome: a.nome }; }), entra: H.arrivi.length ? ingresso() || "" : null,
        restaMs: H.scadenza ? Math.max(0, H.scadenza - Date.now()) : 0 };
      if (f === "lobby") return o;
      o.iOff = H.iOff || 0; o.nOff = H.nOff || 0; o.iPremio = H.iPremio || 0; o.nPremio = H.nPremio || 0; o.nRuota = H.nRuota || 0; o.ruoteTot = H.ruoteTot || 0;
      o.doppio = !!H.doppio; o.ultimo = H.ultimo;
      if (f === "offerta") {
        o.prod = pubProd(H.prod); o.rifai = H.rifai || 0; o.limite = H.limite == null ? null : H.limite;
        if (s === "offri" && H.imp.offerte === "segrete") { o.offFatti = Object.keys(H.off); }
        else { o.off = copia(H.off); o.ord = H.ord.slice(); }
        o.passati = Object.keys(H.passati || {});
        if (s === "rivela") { o.esito = H.esito; }
      }
      if (f === "scegli" && H.scelta) o.scelta = { chi: H.scelta.chi, opz: H.scelta.opz.map(infoPremio), fatta: H.scelta.fatta };
      if (f === "premio" && H.premio) {
        var g = premioDi(H.premio.tipo), inf = infoPremio(H.premio.tipo);
        o.premio = { tipo: H.premio.tipo, nome: inf.nome, icona: inf.icona, regola: inf.regola, spiega: inf.spiega, fai: inf.fai, es: inf.es, pt: inf.pt, da: H.premio.da || null, sec: H.premio.sec || 0,
          fatti: Object.keys(H.premio.fatti) };
        if (s === "gioca" && g && g.pubblico) { try { o.premio.pub = g.pubblico(H.premio.st, apiPremio()); } catch (e) { o.premio.pub = {}; } }
        if (s === "riv") { o.premio.riv = H.premio.riv; o.premio.punti = H.premio.punti; }
        if (s === "intro") { o.avanti = H.avanti.slice(); o.servono = servono(); }
      }
      if (f === "punti") {
        o.avanti = H.avanti.slice(); o.servono = servono(); o.dopo = H.piano[H.ip + 1] || "";
        // (il respiro dopo una ripresa: la classifica, poi si rifà il passo a metà)
        if (H.respiro) { o.rip = 1; o.dopo = H.respiro.poi === "vetrina" || H.respiro.poi === "ruota" ? H.respiro.poi : ""; }
      }
      if (f === "ruota" && H.ruota) {
        var mostraSi = s !== "giro1" && s !== "decidi" || modo === "telefono", gr = {};
        Object.keys(H.ruota.g).forEach(function (id) { var x = H.ruota.g[id]; gr[id] = { v1: x.v1, v2: x.v2, b: x.b, cento: !!x.cento, si: mostraSi ? x.si : (x.si == null ? null : "?") }; });
        o.ruota = { g: gr, esito: s === "riv" || s === "rivb" || s === "bonus" ? H.ruota.esito : null, esitoB: s === "rivb" ? H.ruota.esitoB : null, indizio: H.ruota.indizio || null };
      }
      if (f === "vetrina" && H.vet) {
        o.vet = { titolo: H.vet.v.titolo, e: H.vet.v.e || "🛍️", pezzi: H.vet.v.pezzi.map(function (x) { return { e: x.e, f: x.f || null, nome: x.nome, desc: x.desc || "", dove: x.dove || "" }; }),
          fatti: Object.keys(H.vet.off).concat(Object.keys(H.vpassati || {})) };
        if (H.vet.b && (s === "mostra" || s === "scegli")) { o.vet.mist = 1; o.vet.bFoto = H.vet.b.pezzi.map(function (x) { return { f: x.f || null }; }); }   // (le foto si scaricano già, ma senza nomi)
        if (s === "scegli") o.vet.sFatti = Object.keys(H.vet.sc);
        if (H.vet.b && (s === "offri" || (s === "riv" && H.vet.esito && H.vet.esito.prezziB))) { var B = H.vet.b; o.vet.b = { titolo: B.titolo, e: B.e || "🎁", pezzi: B.pezzi.map(function (x) { return { e: x.e, f: x.f || null, nome: x.nome, desc: x.desc || "", dove: x.dove || "" }; }) }; o.vet.sc = copia(H.vet.sc); }
        if (s === "riv") o.vet.esito = H.vet.esito;
      }
      if (f === "carrello" || f === "fine") { o.carrello = {}; H.players.forEach(function (p) { o.carrello[p.id] = p.carrello; }); }
      if (f === "fine") o.classifica = H.classifica;
      return o;
    }
    function bd() { var v = vm(); if (rete) rete.invia({ t: "vm", vm: v }); ricorda(); disegnaVM(t, v, cbHost); vici(); }
    // (host di riserva) chi porta avanti la partita se sparisco: prima chi guarda (non gioca: i prezzi e le offerte
    // segrete che stanno nella copia non gli servono a niente)
    var viciK = "";
    function vici() { if (!online || !t.vici) return; var k = H.guarda.join(","); if (k !== viciK) { viciK = k; t.vici(H.guarda.length ? H.guarda.slice() : null); } }
    // la partita com'è adesso, per riprenderla se ricarico la pagina (o se la porta avanti un amico): tutto H tranne il cesto
    // (si rifà da H.usati); in saletta niente. Gli avatar ci stanno (al massimo 3.000 caratteri l'uno: sotto i 60 KB anche
    // in 8); se mai la copia fosse troppo grossa, gli avatar restano solo su questo telefono (soloQui)
    function ricorda() {
      if (!online || !t.ricorda) return;
      if (H.fase === "lobby") return t.ricorda(null);
      var s = {}; Object.keys(H).forEach(function (k) { if (k !== "cesto") s[k] = H[k]; });
      var qui = null;
      try {
        if (JSON.stringify(s).length > 50000) {
          qui = { omini: {} };
          s.players = H.players.map(function (p) { qui.omini[p.id] = p.omino || null; var c = {}; Object.keys(p).forEach(function (k) { if (k !== "omino") c[k] = p[k]; }); return c; });
        }
      } catch (e) {}
      t.ricorda(s, qui);
    }
    // un messaggio per un telefono solo (inviaVeloce con "to": così non resta in stanza)
    function privato(id, m) {
      var p = pById(id); if (p && p.bot) return;
      m.per = id;
      if (!online || id === IO) return privatoR(m);
      m.to = id; rete.inviaVeloce(m);
    }
    function rimandaSegreti(id) {
      var f = H.fase, s = H.sotto;
      if (f === "offerta" && s === "offri" && H.off[id] != null) privato(id, { t: "priv", k: "mia", v: H.off[id], kk: H.k });
      if (f === "premio" && s === "gioca" && H.premio) { var g = premioDi(H.premio.tipo); if (g && g.privatoDi) try { var m = g.privatoDi(H.premio.st, id, apiPremio()); if (m) privato(id, { t: "priv", k: "premio", m: m, kk: H.k }); } catch (e) {} }
      if (f === "vetrina" && H.vet && H.vet.off[id] != null) privato(id, { t: "priv", k: "miaV", v: H.vet.off[id], kk: H.k });
      if (f === "vetrina" && s === "offri" && H.indizio && (H.indizio.ids || []).indexOf(id) >= 0) mandaIndizio(id);
      if (f === "ruota" && s === "decidi" && H.ruota && H.ruota.g[id] && H.ruota.g[id].si != null) privato(id, { t: "priv", k: "miaR", si: H.ruota.g[id].si, kk: H.k });
    }

    // ----- la partita -----
    function comincia() {
      if (H.fase !== "lobby") return;
      if (online && presenti().length < MIN_ON) return;
      H.partita++; H.sessione = Date.now().toString(36) + Math.random().toString(36).slice(2, 6); H.respiro = null;
      H.players = presenti(); H.players.forEach(function (p) { p.punti = 0; p.carrello = []; });
      H.usati = {}; H.cesto = Cesto(H.imp.cats, H.usati); H.ultimo = {}; H.avanti = []; H.premiUsati = []; H.indizio = null; H.vetUsate = [];
      var nPremi = Object.keys(premi()).filter(function (k) { return premioDi(k); }).length;
      H.piano = piano(H.imp.formato, H.imp.durata, nPremi); H.ip = -1;
      H.iOff = 0; H.nOff = H.piano.filter(function (x) { return x === "offerta" || x === "oggetto"; }).length;
      H.iPremio = 0; H.nPremio = H.piano.filter(function (x) { return x === "premio"; }).length;
      H.nRuota = 0; H.ruoteTot = H.piano.filter(function (x) { return x === "ruota"; }).length;
      H.catPrec = null;
      prossimo();
    }
    function prossimo() {
      ferma();
      H.ip++;
      var s = H.piano[H.ip];
      if (s === "apertura") return vai("apertura", null, ST.durataApertura(H.players.length), prossimo);
      if (s === "offerta" || s === "oggetto") return nuovaOfferta();
      if (s === "premio") return nuovoPremio();
      if (s === "punti") { H.avanti = []; return vai("punti", null, T.punti, function () { H.ultimo = {}; prossimo(); }); }
      if (s === "ruota") return nuovaRuota();
      if (s === "vetrina") return nuovaVetrina();
      if (s === "carrello") return vai("carrello", null, durCarrello(presenti().length), fine);
      return fine();
    }
    // dove entra chi arriva adesso (20 nov 2026: «Entri al prossimo oggetto» non era sempre vero): il prossimo oggetto, Offerta,
    // Ruota o Vetrina del piano; "" = la puntata è alla fine, gioca dalla prossima partita
    function ingresso() { for (var i = H.ip + 1; i < H.piano.length; i++) if (/^(offerta|oggetto|ruota|vetrina)$/.test(H.piano[i])) return H.piano[i]; return ""; }
    // chi è arrivato a partita cominciata entra adesso (all'inizio di un oggetto, della Ruota o della Vetrina)
    function entranoNuovi() {
      H.arrivi.forEach(function (a) { if (!pById(a.id) && H.players.length < MAX_ON) H.players.push({ id: a.id, nome: a.nome, omino: a.omino || null, punti: 0, carrello: [] }); });
      H.arrivi = [];
    }
    function aggiungiPunti(id, n) { var p = pById(id); if (!p || !n) return; p.punti += n; H.ultimo[id] = (H.ultimo[id] || 0) + n; }
    function nelCarrello(id, cosa) { var p = pById(id); if (p && cosa) p.carrello.push({ e: cosa.e || "🎁", f: cosa.f || null, nome: cosa.nome, prezzo: tondo2(cosa.prezzo) }); }

    // ---------- L'OFFERTA (anche ogni oggetto di «Solo il prezzo») ----------
    function nuovaOfferta() {
      entranoNuovi();
      H.iOff++;
      var caro = H.iOff % 2 === 0, prec = H.catPrec;   // uno economico e uno caro, mai due della stessa categoria di fila
      H.prod = H.cesto.pesca(function (x) { return (caro ? x.prezzo >= 100 : x.prezzo < 100) && x.cat !== prec; }, 1)[0]
        || H.cesto.pesca(function (x) { return x.cat !== prec; }, 1)[0] || H.cesto.pesca(null, 1)[0];
      if (!H.prod) return prossimo();
      H.catPrec = H.prod.cat;
      H.rifai = 0; H.limite = null; H.off = {}; H.ord = []; H.passati = {}; H.esito = null; H.vincOff = null;
      H.doppio = H.imp.formato === "solo" && H.iOff === H.nOff && H.nOff > 1;
      vai("offerta", "prodotto", T.prodotto, apriOfferte);
    }
    function apriOfferte() {
      H.off = {}; H.ord = []; H.passati = {};
      vai("offerta", "offri", modo === "telefono" ? 0 : (H.rifai ? T.rifai : T.offri), chiudiOfferte);
      if (modo === "bot") botOfferte();
    }
    function offerta(id, v) {
      var p = pById(id);
      if (H.fase !== "offerta" || H.sotto !== "offri" || !p || p.via || H.off[id] != null) return;
      v = tondo2(+v); if (!(v > 0 && v < 1e7)) return;
      if (H.limite != null && v >= H.limite) return privato(id, { t: "priv", k: "sotto", lim: H.limite, kk: H.k });
      // a vista un prezzo già detto non si può ridire (come in TV)
      if (H.imp.offerte === "vista") { var gia = Object.keys(H.off).filter(function (x) { return Math.abs(H.off[x] - v) < 1e-9; })[0]; if (gia) return privato(id, { t: "priv", k: "preso", da: nome(gia), kk: H.k }); }
      H.off[id] = v; H.ord.push(id); delete H.passati[id];
      privato(id, { t: "priv", k: "mia", v: v, kk: H.k });
      bd(); controlla();
    }
    function chiudiOfferte() {
      if (H.fase !== "offerta" || H.sotto !== "offri") return;
      ferma();
      var tv = H.imp.formato === "tv";
      var e = esitoOfferta(H.prod.prezzo, H.off, { senzaSforare: tv || H.imp.sforare, molt: H.doppio ? 2 : 1, ordine: H.ord, n: presenti().length });
      // sforano tutti: si rifà una volta sola, tutti sotto l'offerta più bassa (il prezzo resta segreto)
      if (e.tuttiSopra && !H.rifai) {
        H.rifai = 1; H.limite = Math.min.apply(null, Object.keys(H.off).map(function (id) { return H.off[id]; }));
        return vai("offerta", "sopra", T.sopra, apriOfferte);
      }
      e.cur = H.prod.cur || ""; e.wow = !!H.prod.wow;
      H.esito = e;
      e.righe.forEach(function (r) { aggiungiPunti(r.id, r.punti); });
      e.vince.forEach(function (id) { nelCarrello(id, H.prod); });   // chi vince l'Offerta si porta a casa il prodotto
      H.vincOff = e.vince.length ? e.vince[Math.floor(Math.random() * e.vince.length)] : null;
      vai("offerta", "rivela", durRivela(e), prossimo);
    }
    function botOfferte() {
      var tempo = H.rifai ? T.rifai : T.offri;
      bots().forEach(function (b) {
        var ms = H.imp.liv === "difficile" ? 6000 + Math.random() * (tempo - 9000) : 2500 + Math.random() * (tempo - 6000);
        botDopo(Math.max(1500, ms), function () { offertaBot(b); });
      });
    }
    function offertaBot(b) {
      if (H.fase !== "offerta" || H.sotto !== "offri" || H.off[b.id] != null) return;
      var p = H.prod.prezzo, prudente = H.imp.formato === "tv" || H.imp.sforare, v = stimaBot(p, H.imp.liv, prudente), pz = Z().passo(p);
      if (H.limite != null && v >= H.limite) v = Z().arrotonda(H.limite * (0.62 + Math.random() * 0.3), p);
      // il Bot cattivo: «+1 €» sull'offerta più alta che pensa sia sotto
      if (H.imp.offerte === "vista" && H.imp.liv !== "facile" && Math.random() < (H.imp.liv === "difficile" ? 0.6 : 0.25)) {
        var sotto = Object.keys(H.off).map(function (id) { return H.off[id]; }).filter(function (x) { return x < v * 1.05; }).sort(function (a, c) { return c - a; })[0];
        if (sotto != null) v = tondo2(sotto + (p < 20 ? 0.1 : 1));
      }
      if (H.limite != null && v >= H.limite) v = Math.max(pz, tondo2(H.limite - pz));
      var giri = 0;
      while (H.imp.offerte === "vista" && Object.keys(H.off).some(function (id) { return Math.abs(H.off[id] - v) < 1e-9; }) && giri++ < 50) v = tondo2(v + pz * (Math.random() < 0.5 ? 1 : -1));
      offerta(b.id, Math.max(pz, v));
    }

    // ---------- IL GIOCO A PREMI ----------
    // gli aiuti per i giochi a premi, sul telefono dell'host (vedi interfaccia in js/games/prezzo-premi-piu.js)
    function apiPremio() {
      return {
        ids: presenti().map(function (p) { return p.id; }), n: presenti().length, modo: modo, locale: modo !== "online",
        nome: nome, rnd: Math.random, mescola: mescola,
        pesca: function (filtro, n) { return H.cesto.pesca(filtro, n); },
        passo: Z().passo, margine: Z().margine, arrotonda: Z().arrotonda, fmtE: Z().fmtE, tondo2: tondo2,
        privato: function (id, msg) { privato(id, { t: "priv", k: "premio", m: msg, kk: H.k }); },
        fatto: function (id) { if (H.premio && !H.premio.fatti[id]) { H.premio.fatti[id] = 1; } }
      };
    }
    function nuovoPremio() {
      H.iPremio++;
      var n = presenti().length;
      var disp = Object.keys(premi()).filter(function (k) {
        var g = premioDi(k); if (!g) return false;
        if (g.min && n < g.min) return false; if (g.max && n > g.max) return false;
        if (modo === "telefono" && g.locale === false) return false;
        return true;
      });
      if (!disp.length) return prossimo();
      var nuovi = disp.filter(function (k) { return H.premiUsati.indexOf(k) < 0; });
      if (!nuovi.length) { H.premiUsati = []; nuovi = disp; }   // usciti tutti: possono tornare
      var opz = mescola(nuovi).slice(0, 2), chi = H.vincOff && pById(H.vincOff) && !pById(H.vincOff).via ? H.vincOff : null;
      if (opz.length < 2 || !chi) return avviaPremio(opz[0], null);
      // chi ha vinto l'Offerta sceglie tra due (come in TV: sale sul palco); se non sceglie, il primo
      H.scelta = { chi: chi, opz: opz, fatta: null };
      vai("scegli", null, modo === "telefono" ? 0 : T.scegli, function () { scegli(chi, opz[0]); });
      var b = pById(chi); if (b && b.bot) botDopo(1800 + Math.random() * 2200, function () { scegli(chi, opz[Math.floor(Math.random() * opz.length)]); });
    }
    function scegli(id, tipo) {
      if (H.fase !== "scegli" || !H.scelta || id !== H.scelta.chi || H.scelta.fatta || H.scelta.opz.indexOf(tipo) < 0) return;
      H.scelta.fatta = tipo; bd();
      dopo(1500, function () { avviaPremio(tipo, id); });
    }
    function avviaPremio(tipo, da) {
      var g = premioDi(tipo); if (!g) return prossimo();
      H.premiUsati.push(tipo);
      var st = null;
      try { st = g.prepara(apiPremio()); } catch (e) { try { console.error("[prezzo] prepara " + tipo, e); } catch (x) {} return prossimo(); }
      H.premio = { tipo: tipo, st: st, fatti: {}, riv: null, punti: null, da: da || null, sec: 30 };
      H.avanti = [];   // (la regola si salta con «⏩ Avanti», come le classifiche: 23 ott 2026)
      vai("premio", "intro", tempoRegole(tipo), giocaPremio);
    }
    function giocaPremio() {
      var g = premioDi(H.premio.tipo), sec = 30;
      try { sec = Math.max(5, +g.tempo(H.premio.st, apiPremio()) || 30); } catch (e) {}
      H.premio.sec = sec;
      vai("premio", "gioca", modo === "telefono" ? 0 : sec * 1000 + 800, fineGioco);
      if (modo === "bot" && g.bot) bots().forEach(function (b) {
        var mosse = [];
        try { mosse = g.bot(H.premio.st, { id: b.id, nome: b.nome, livello: H.imp.liv }, apiPremio()) || []; } catch (e) {}
        mosse.forEach(function (x) { if (x && x.m) botDopo(Math.min(sec * 1000, Math.max(300, +x.ms || 0)), function () { var m = copia(x.m); if (m.ms == null) m.ms = +x.ms || 0; mossaPremio(b.id, m); }); });
      });
    }
    function mossaPremio(id, m) {
      if (H.fase !== "premio" || H.sotto !== "gioca" || !H.premio) return;
      var p = pById(id); if (!p || p.via || H.premio.fatti[id]) return;
      var g = premioDi(H.premio.tipo);
      try { g.mossa(H.premio.st, id, m || {}, apiPremio()); } catch (e) { try { console.error("[prezzo] mossa", e); } catch (x) {} }
      bd(); controlla();
    }
    function fineGioco() {
      if (H.fase !== "premio" || H.sotto !== "gioca") return;
      ferma();
      var g = premioDi(H.premio.tipo), r = null;
      try { r = g.fine(H.premio.st, apiPremio()) || {}; } catch (e) { r = {}; try { console.error("[prezzo] fine", e); } catch (x) {} }
      var punti = r.punti || {};
      Object.keys(punti).forEach(function (id) { punti[id] = Math.max(0, Math.round(+punti[id] || 0)); aggiungiPunti(id, punti[id]); });
      Object.keys(r.carrello || {}).forEach(function (id) { (r.carrello[id] || []).forEach(function (c) { nelCarrello(id, c); }); });
      H.premio.riv = r.riv || {}; H.premio.punti = punti;
      vai("premio", "riv", durPremioRiv(), prossimo);
    }
    function durPremioRiv() {
      var g = premioDi(H.premio.tipo), dur = 6000;
      try { dur = Math.max(2500, Math.min(30000, +g.durata(H.premio.riv, apiPremio()) || 6000)); } catch (e) {}
      return RV.cam + 400 + dur + RV.leggii;
    }

    // ---------- LA RUOTA DEL 100 ----------
    function tira() { return Z().SPICCHI[Math.floor(Math.random() * Z().SPICCHI.length)]; }
    function nuovaRuota() {
      entranoNuovi();
      H.nRuota++;
      H.ruota = { g: {}, esito: null, esitoB: null, indizio: null };
      presenti().forEach(function (p) { H.ruota.g[p.id] = { v1: null, si: null, v2: null, b: null, cento: false }; });
      if (modo === "telefono") return vai("ruota", "turni", 0);   // a turno, come in TV: la regia passa il telefono
      vai("ruota", "giro1", T.giro, function () { autoGiri("v1"); dopo(2900, decidi); });
      botRuota("v1");
    }
    function decidi() {
      presenti().forEach(function (p) { var x = H.ruota.g[p.id]; if (x && x.v1 >= 100) x.si = false; });
      vai("ruota", "decidi", T.decidi, function () { presenti().forEach(function (p) { var x = H.ruota.g[p.id]; if (x && x.si == null) x.si = false; }); giro2(); });
      bots().forEach(function (b) {
        var x = H.ruota.g[b.id]; if (!x || x.si != null) return;
        var soglia = H.imp.liv === "difficile" ? 65 : H.imp.liv === "medio" ? 55 : 45 + Math.random() * 15;
        botDopo(1500 + Math.random() * 4000, function () { ancora(b.id, x.v1 <= soglia); });
      });
      controlla();
    }
    function giro2() {
      if (!presenti().some(function (p) { return (H.ruota.g[p.id] || {}).si === true; })) return rivRuota();
      vai("ruota", "giro2", T.giro, function () { autoGiri("v2"); dopo(2900, rivRuota); });
      botRuota("v2");
    }
    function rivRuota() {
      if (H.fase !== "ruota" || H.sotto === "riv") return;
      ferma();
      var e = esitoRuota(H.ruota.g, presenti().map(function (p) { return p.id; }).filter(function (id) { return H.ruota.g[id]; }));
      H.ruota.esito = e;
      e.righe.forEach(function (r) { aggiungiPunti(r.id, r.punti); });
      e.cento.forEach(function (id) { H.ruota.g[id].cento = true; });
      // l'indizio per la Vetrina va a chi vince la Ruota (con due Ruote, solo la seconda); a pari merito a tutti (23 ott 2026, il
      // proprietario: «se due persone fanno 100… l'indizio lo dà solamente ad una persona»)
      if (e.vince.length && H.nRuota >= H.ruoteTot) { H.indizio = { ids: e.vince.slice(), x: {} }; H.ruota.indizio = e.vince.slice(); }
      vai("ruota", "riv", durRuotaRiv(e), dopoRivRuota);
    }
    function dopoRivRuota() { if (H.ruota && H.ruota.esito && H.ruota.esito.cento.length) giroBonus(); else prossimo(); }
    function giroBonus() {
      if (modo === "telefono") return vai("ruota", "bonus", 0);
      vai("ruota", "bonus", T.giro, function () { autoGiri("b"); dopo(2900, rivBonus); });
      botRuota("b");
    }
    function rivBonus() {
      if (H.fase !== "ruota" || H.sotto === "rivb") return;
      ferma();
      var righe = presenti().filter(function (p) { return H.ruota.g[p.id] && H.ruota.g[p.id].cento; }).map(function (p) {
        var b = H.ruota.g[p.id].b || 0, pt = puntiBonus(b); aggiungiPunti(p.id, pt); return { id: p.id, b: b, punti: pt };
      });
      H.ruota.esitoB = { righe: righe };
      vai("ruota", "rivb", RV.cam + 600 + righe.length * 1500 + 1600 + RV.leggii, prossimo);
    }
    function autoGiri(campo) {
      presenti().forEach(function (p) {
        var x = H.ruota.g[p.id]; if (!x) return;
        if (campo === "v1" && x.v1 == null) x.v1 = tira();
        if (campo === "v2" && x.si === true && x.v2 == null) x.v2 = tira();
        if (campo === "b" && x.cento && x.b == null) x.b = tira();
      });
      bd();
    }
    function botRuota(campo) {
      bots().forEach(function (b) {
        var x = H.ruota.g[b.id]; if (!x) return;
        if (campo === "v2" && x.si !== true) return;
        if (campo === "b" && !x.cento) return;
        botDopo(1200 + Math.random() * 3500, function () { spinta(b.id, 0.3 + Math.random() * 0.7); });
      });
    }
    function spinta(id, f) {
      if (H.fase !== "ruota" || !H.ruota) return;
      var x = H.ruota.g[id], p = pById(id), s = H.sotto; if (!x || !p || p.via) return;
      var campo = null;
      if (s === "giro1" && x.v1 == null) campo = "v1";
      else if (s === "giro2" && x.si === true && x.v2 == null) campo = "v2";
      else if (s === "bonus" && x.cento && x.b == null) campo = "b";
      else if (s === "turni") campo = x.v1 == null ? "v1" : (x.si === true && x.v2 == null ? "v2" : null);
      if (!campo) return;
      x[campo] = tira();
      if (s === "turni" && campo === "v1" && x.v1 >= 100) x.si = false;
      bd(); controlla();
    }
    function ancora(id, si) {
      if (H.fase !== "ruota" || (H.sotto !== "decidi" && H.sotto !== "turni")) return;
      var x = H.ruota.g[id]; if (!x || x.v1 == null || x.si != null || x.v1 >= 100) return;
      x.si = !!si;
      if (modo === "online") privato(id, { t: "priv", k: "miaR", si: x.si, kk: H.k });
      bd(); controlla();
    }

    // ---------- LA VETRINA FINALE ----------
    // La Vetrina misteriosa (23 ott 2026; in «OK, il prezzo è giusto!» il primo in classifica poteva tenere la vetrina vista o
    // scambiarla con una misteriosa; il proprietario ha scelto «scelgono tutti, in segreto»): tutti vedono la prima vetrina,
    // poi ognuno decide in segreto se tenerla («a») o prendere la misteriosa («b»), che scopre solo dopo aver scelto; ognuno
    // offre sulla sua (esitoVetrina: classifica in percentuale) e «VINCI TUTTO!» porta a casa anche l'altra. Chi non sceglie in
    // tempo tiene la prima. Sullo stesso telefono si sceglie al proprio turno, prima di offrire. Senza una seconda vetrina
    // (non dovrebbe succedere) si gioca come prima, tutti sulla stessa.
    function nuovaVetrina() {
      entranoNuovi();
      var v = pescaVetrina(); if (!v) return prossimo();
      H.vet = { v: v, b: pescaVetrina([v.id || v.titolo], true) || null, sc: {}, off: {}, esito: null }; H.vpassati = {};
      vai("vetrina", "mostra", durVetMostra(v.pezzi.length, !!H.vet.b), dopoMostra);
    }
    function dopoMostra() { return H.vet.b && modo !== "telefono" ? scegliVetrina() : apriVetrina(); }
    function scegliVetrina() {
      vai("vetrina", "scegli", T.vetScegli, apriVetrina);
      if (modo === "bot") bots().forEach(function (b) { botDopo(1500 + Math.random() * 5500, function () { sceltaVet(b.id, Math.random() < 0.4); }); });
    }
    function sceltaVet(id, mist) {
      var p = pById(id), s = H.sotto;
      if (H.fase !== "vetrina" || !H.vet || !H.vet.b || !p || p.via || H.vet.sc[id]) return;
      if (s !== "scegli" && !(s === "offri" && modo === "telefono")) return;
      H.vet.sc[id] = mist ? "b" : "a";
      if (s === "offri") preparaIndizio(id);   // (sullo stesso telefono si sceglie al proprio turno: l'indizio arriva adesso)
      bd(); controlla();
    }
    function vetDi(id) { return H.vet.b && H.vet.sc[id] === "b" ? H.vet.b : H.vet.v; }
    function totale(V) { return tondo2(V.pezzi.reduce(function (a, x) { return a + x.prezzo; }, 0)); }
    // l'indizio di chi ha vinto la Ruota: il prezzo di uno dei due pezzi più cari della vetrina che ha scelto (uno a testa)
    function preparaIndizio(soloPer) {
      if (!H.indizio || !H.indizio.ids) return;
      H.indizio.ids.forEach(function (id) {
        if (soloPer && id !== soloPer) return;
        var V = vetDi(id), ord = V.pezzi.map(function (x, i) { return i; }).sort(function (a, b) { return V.pezzi[b].prezzo - V.pezzi[a].prezzo; });
        H.indizio.x[id] = { w: H.vet.b && H.vet.sc[id] === "b" ? "b" : "a", i: ord[Math.floor(Math.random() * Math.min(2, ord.length))] };
        mandaIndizio(id);
      });
    }
    function indizioDi(id) { return H.indizio && H.indizio.x && H.indizio.x[id] || null; }
    function apriVetrina() {
      if (modo !== "telefono") presenti().forEach(function (p) { if (!H.vet.sc[p.id]) H.vet.sc[p.id] = "a"; });   // non ha scelto: tiene la prima
      vai("vetrina", "offri", modo === "telefono" ? 0 : T.vetOffri, chiudiVetrina);
      if (H.indizio) { H.indizio.x = {}; if (modo !== "telefono" || !H.vet.b) preparaIndizio(); }
      if (modo === "bot") bots().forEach(function (b) {
        botDopo(4000 + Math.random() * (T.vetOffri - 9000), function () {
          if (H.fase !== "vetrina" || H.sotto !== "offri") return;
          var tot = 0;
          vetDi(b.id).pezzi.forEach(function (x, i) { tot += (indizioDi(b.id) && indizioDi(b.id).i === i) ? x.prezzo : stimaBot(x.prezzo, H.imp.liv, false); });
          // (un'idea sbagliata sul totale, uguale per tutti i pezzi: se no gli errori si compensano e il Bot fa «VINCI TUTTO» troppo spesso)
          tot *= Math.exp(Math.max(-2.5, Math.min(2.5, gauss())) * (ERR[H.imp.liv] || 0.25) * 0.7);
          offVetrina(b.id, Z().arrotonda(tot * (1 - (ERR[H.imp.liv] || 0.25) * 0.25), tot));
        });
      });
    }
    function mandaIndizio(id) {
      var I = indizioDi(id); if (!I || I.i == null || !H.vet) return;
      var x = vetDi(id).pezzi[I.i]; if (!x) return;
      privato(id, { t: "priv", k: "indizio", i: I.i, e: x.e, nome: x.nome, desc: Z().sottoDi(x), prezzo: x.prezzo, kk: H.k });
    }
    function offVetrina(id, v) {
      var p = pById(id);
      if (H.fase !== "vetrina" || H.sotto !== "offri" || !p || p.via || H.vet.off[id] != null) return;
      v = Math.round(+v); if (!(v > 0 && v < 1e7)) return;
      if (H.vet.b && !H.vet.sc[id]) H.vet.sc[id] = "a";
      H.vet.off[id] = v; delete H.vpassati[id];
      privato(id, { t: "priv", k: "miaV", v: v, kk: H.k });
      bd(); controlla();
    }
    function chiudiVetrina() {
      if (H.fase !== "vetrina" || H.sotto !== "offri") return;
      ferma();
      var A = H.vet.v, B = H.vet.b;
      var e = esitoVetrina(H.vet.off, H.vet.sc, totale(A), B ? totale(B) : 0, presenti().length);
      // (23 ott 2026, il proprietario: «non ha senso far vedere tutte e due le vetrine, solo se sono state scelte entrambe»):
      // si scoprono solo le vetrine che qualcuno ha preso; una misteriosa che nessuno ha preso resta un mistero e non si
      // «brucia» (potrà uscire in un'altra partita), tranne quando un VINCI TUTTO la vince come premio
      var scelte = Object.keys(H.vet.sc).map(function (id) { return H.vet.sc[id]; });
      e.usaA = !B || !scelte.length || scelte.some(function (w) { return w !== "b"; });
      e.usaB = !!B && scelte.some(function (w) { return w === "b"; });
      e.prezzi = A.pezzi.map(function (x) { return x.prezzo; });
      if (B && (e.usaB || e.tutti.length)) { e.prezziB = B.pezzi.map(function (x) { return x.prezzo; }); segnaVista(B); }
      e.righe.forEach(function (r) { aggiungiPunti(r.id, r.punti); });
      e.vince.forEach(function (id) { vetDi(id).pezzi.forEach(function (x) { nelCarrello(id, x); }); });
      // VINCI TUTTO: anche l'altra vetrina (senza la misteriosa: una seconda pescata adesso)
      if (e.tutti.length && B) e.tutti.forEach(function (id) {
        var mia = vetDi(id);
        if (e.vince.indexOf(id) < 0) mia.pezzi.forEach(function (x) { nelCarrello(id, x); });   // (nel 3% ma non il primo: anche la sua)
        (mia === B ? A : B).pezzi.forEach(function (x) { nelCarrello(id, x); });
      });
      else if (e.tutti.length) {
        var v2 = pescaVetrina([H.vet.v.id || H.vet.v.titolo]);
        if (v2) {
          e.seconda = { titolo: v2.titolo, e: v2.e || "🛍️", pezzi: v2.pezzi.map(function (x) { return { e: x.e, f: x.f || null, nome: x.nome, prezzo: x.prezzo }; }), tot: tondo2(v2.pezzi.reduce(function (a, x) { return a + x.prezzo; }, 0)) };
          e.tutti.forEach(function (id) { v2.pezzi.forEach(function (x) { nelCarrello(id, x); }); });
        }
      }
      H.vet.esito = e;
      vai("vetrina", "riv", durVetRiv(e), prossimo);
    }

    // ---------- chi ha finito: si va avanti senza aspettare il tempo ----------
    function controlla() {
      var f = H.fase, s = H.sotto;
      if (f === "lobby" || f === "fine") return;
      if (online && presenti().length < 2) return fine();   // è rimasto uno solo: finisce qui
      if (H.respiro) return;   // (il respiro dopo una ripresa: decide finisciRespiro)
      var pres = presenti(), pausa = online ? 900 : 380;
      if (f === "offerta" && s === "offri" && pres.every(function (p) { return H.off[p.id] != null || H.passati[p.id]; })) return dopo(pausa, chiudiOfferte);
      if (f === "scegli" && H.scelta && !H.scelta.fatta) { var c = pById(H.scelta.chi); if (!c || c.via) return scegli(H.scelta.chi, H.scelta.opz[0]); }
      if (f === "premio" && s === "gioca" && H.premio && pres.every(function (p) { return H.premio.fatti[p.id]; })) return dopo(online ? 1100 : 700, fineGioco);
      if (f === "ruota" && H.ruota) {
        var x = function (id) { return H.ruota.g[id] || {}; }, conta = pres.filter(function (p) { return H.ruota.g[p.id]; });
        // (dopo l'ultima spinta si aspetta che la sua ruota si fermi: frena fino a ~5 s, e il numero si vede solo allora)
        if (s === "giro1" && conta.every(function (p) { return x(p.id).v1 != null; })) return dopo(RU_FERMA, decidi);
        if (s === "decidi" && conta.every(function (p) { return x(p.id).si != null; })) return dopo(700, giro2);
        if (s === "giro2" && conta.every(function (p) { return x(p.id).si !== true || x(p.id).v2 != null; })) return dopo(RU_FERMA, rivRuota);
        // (sullo stesso telefono la ruota la chiude la regia quando l'ultimo ha visto fermarsi la sua: «finiti»)
        if (s === "bonus" && modo !== "telefono" && conta.every(function (p) { return !x(p.id).cento || x(p.id).b != null; })) return dopo(RU_FERMA, rivBonus);
      }
      if (f === "vetrina" && s === "scegli" && pres.every(function (p) { return H.vet.sc[p.id]; })) return dopo(pausa, apriVetrina);
      if (f === "vetrina" && s === "offri" && pres.every(function (p) { return H.vet.off[p.id] != null || H.vpassati[p.id]; })) return dopo(pausa, chiudiVetrina);
      if ((f === "punti" || (f === "premio" && s === "intro")) && H.avanti.length >= servono()) return oltre();
    }
    // «⏩ Avanti» sulle classifiche: si parte subito se lo tocca più di metà (sullo stesso telefono e col Bot basta il tuo)
    function avanti(id) {
      if (H.fase !== "punti" && !(H.fase === "premio" && H.sotto === "intro")) return;
      if (!online) return oltre();
      var p = pById(id); if (!p || p.via || p.bot || H.avanti.indexOf(id) >= 0) return;
      H.avanti.push(id);
      if (H.avanti.length >= servono()) return oltre();
      bd();
    }
    function oltre() {
      if (H.fase === "premio" && H.sotto === "intro") { ferma(); return giocaPremio(); }
      if (H.fase !== "punti") return;
      // (il respiro dopo una ripresa dura almeno RESPIRO anche se toccano tutti «Avanti»: intanto gli amici rientrano)
      if (H.respiro) { var resta = H.respiro.fino - Date.now(); return resta > 50 ? dopo(resta, finisciRespiro) : finisciRespiro(); }
      ferma(); H.ultimo = {}; prossimo();
    }

    // ---------- LA RIPRESA (online: l'host ha ricaricato o riaperto l'app, o un amico porta avanti la partita) ----------
    // Mai punti dati due volte: le rivelazioni (punti già dati) si rivedono con lo stesso esito; i passi a metà (offerte,
    // scelta del gioco a premi, gioco a premi, Ruota, Vetrina: nessun punto ancora) si rifanno da capo dopo un respiro di
    // almeno 6 secondi con la classifica; la classifica col tempo che restava (almeno 5 s); il carrello si rivede; sulla
    // classifica finale si resta lì (t.risultato l'aveva già dato chi teneva la partita)
    var RESPIRO = 6000;
    function riprendi() {
      var f = H.fase, s = H.sotto, R1 = t.ripresa;
      ferma();
      tAttesi = setTimeout(function () { Object.keys(attesi).forEach(addio); }, 10000);
      if (f === "fine") return bd();
      if (f === "carrello") return vai("carrello", null, durCarrello(presenti().length), fine);
      if (f === "apertura" || !H.piano || !H.piano.length) return vai("apertura", null, ST.durataApertura(H.players.length), prossimo);
      if (f === "punti") {
        if (H.respiro) return respiro(H.respiro.poi);
        var resta = Math.max(5000, ((R1 && R1.ora ? R1.ora(H.scadenza) : H.scadenza) || 0) - Date.now());
        H.avanti = [];
        return vai("punti", null, resta, function () { H.ultimo = {}; prossimo(); });
      }
      if (f === "offerta") {
        if (s === "rivela" && H.esito) return vai("offerta", "rivela", durRivela(H.esito), prossimo);
        return respiro(H.rifai ? "sopra" : "offerta");
      }
      if (f === "scegli") return respiro("scegli");
      if (f === "premio" && H.premio) {
        if (s === "riv" && H.premio.riv) return vai("premio", "riv", durPremioRiv(), prossimo);
        return respiro("premio");
      }
      if (f === "ruota" && H.ruota) {
        if (s === "riv" && H.ruota.esito) return vai("ruota", "riv", durRuotaRiv(H.ruota.esito), dopoRivRuota);
        if (s === "rivb" && H.ruota.esitoB) return vai("ruota", "rivb", RV.cam + 600 + H.ruota.esitoB.righe.length * 1500 + 1600 + RV.leggii, prossimo);
        return respiro(s === "bonus" ? "bonus" : "ruota");
      }
      if (f === "vetrina" && H.vet) {
        if (s === "riv" && H.vet.esito) return vai("vetrina", "riv", durVetRiv(H.vet.esito), prossimo);
        return respiro("vetrina");
      }
      respiro("prossimo");
    }
    // il respiro: la classifica (fase "punti" con vm.rip), poi il passo che era a metà
    function respiro(poi) {
      H.respiro = { poi: poi, fino: Date.now() + RESPIRO };
      H.avanti = []; H.ultimo = {};
      vai("punti", null, RESPIRO, finisciRespiro);
    }
    function finisciRespiro() {
      if (H.fase !== "punti" || !H.respiro) return;
      ferma();
      var poi = H.respiro.poi; H.respiro = null;
      if (online && presenti().length < 2) return fine();   // non è tornato nessuno: si chiude coi punti che c'erano
      if (poi === "offerta" && H.prod) { H.rifai = 0; H.limite = null; H.esito = null; return vai("offerta", "prodotto", T.prodotto, apriOfferte); }
      if (poi === "sopra" && H.prod) return vai("offerta", "sopra", T.sopra, apriOfferte);
      if (poi === "scegli") { H.iPremio = Math.max(0, (H.iPremio || 1) - 1); H.scelta = null; return nuovoPremio(); }
      if (poi === "premio" && H.premio) {
        var i = H.premiUsati.lastIndexOf(H.premio.tipo); if (i >= 0) H.premiUsati.splice(i, 1);
        return avviaPremio(H.premio.tipo, H.premio.da);
      }
      if (poi === "ruota") { H.nRuota = Math.max(0, (H.nRuota || 1) - 1); return nuovaRuota(); }
      if (poi === "bonus" && H.ruota) { presenti().forEach(function (p) { var x = H.ruota.g[p.id]; if (x && x.cento) x.b = null; }); H.ruota.esitoB = null; return giroBonus(); }
      if (poi === "vetrina" && H.vet) {
        H.vet.off = {}; H.vet.sc = {}; H.vet.esito = null; H.vpassati = {};
        return vai("vetrina", "mostra", durVetMostra(H.vet.v.pezzi.length, !!H.vet.b), dopoMostra);
      }
      prossimo();
    }
    // sullo stesso telefono: il tempo di chi è di turno è finito (o non c'è): vale quello che c'è
    function passa(id) {
      if (modo !== "telefono") return;
      var f = H.fase, s = H.sotto, p = pById(id); if (!p) return;
      if (f === "offerta" && s === "offri") { if (H.off[id] == null) { H.passati[id] = 1; bd(); controlla(); } return; }
      if (f === "premio" && s === "gioca" && H.premio) { H.premio.fatti[id] = 1; bd(); controlla(); return; }
      if (f === "vetrina" && s === "offri") { if (H.vet.off[id] == null) { if (H.vet.b && !H.vet.sc[id]) { H.vet.sc[id] = "a"; preparaIndizio(id); } H.vpassati[id] = 1; bd(); controlla(); } return; }
      if (f === "scegli" && H.scelta) return scegli(H.scelta.chi, H.scelta.opz[0]);
      if (f === "ruota" && H.ruota) {
        var x = H.ruota.g[id]; if (!x) return;
        if (s === "bonus") { if (x.cento && x.b == null) { x.b = tira(); bd(); controlla(); } return; }
        if (x.v1 == null) return spinta(id, 0.5);
        if (x.si == null && x.v1 < 100) return ancora(id, false);
        if (x.si === true && x.v2 == null) return spinta(id, 0.5);
      }
    }
    // tutte le mosse passano da qui (online dai telefoni degli amici, qui dai tasti di questo telefono)
    function mossa(id, m) {
      if (!m || !m.t || H.fase === "lobby" || H.fase === "fine") return;
      if (m.k != null && m.k !== H.k) return;   // una mossa di un passo vecchio (arrivata in ritardo): non vale
      var p = pById(id); if (p && p.via && online) { p.via = false; }   // si è rifatto vivo
      if (m.t === "avanti") return avanti(id);
      if (m.t === "offerta") return offerta(id, m.v);
      if (m.t === "scelta") return scegli(id, m.g);
      if (m.t === "premio") return mossaPremio(id, m.m);
      if (m.t === "spinta") return spinta(id, m.f);
      if (m.t === "ancora") return ancora(id, m.si);
      if (m.t === "vetrina") return offVetrina(id, m.v);
      if (m.t === "vscelta") return sceltaVet(id, !!m.b);
      if (m.t === "passa") return passa(id);
      if (m.t === "finiti") return finiti();
    }
    // sullo stesso telefono: hanno girato tutti (e la ruota dell'ultimo si è fermata): si scopre com'è andata
    function finiti() {
      if (modo !== "telefono" || H.fase !== "ruota" || !H.ruota) return;
      var x = function (id) { return H.ruota.g[id] || {}; }, conta = presenti().filter(function (p) { return H.ruota.g[p.id]; });
      if (H.sotto === "turni" && conta.every(function (p) { return x(p.id).v1 != null && (x(p.id).si === false || x(p.id).v2 != null); })) return dopo(300, rivRuota);
      if (H.sotto === "bonus" && conta.every(function (p) { return !x(p.id).cento || x(p.id).b != null; })) return dopo(300, rivBonus);
    }
    function fine() {
      ferma();
      var perPunti = function (a, b) { return b.punti - a.punti; };
      var dentro = presenti().sort(perPunti), fuori = H.players.filter(function (p) { return p.via; }).sort(perPunti);
      var riga = function (gr, base) { return function (p) { return { id: p.id, nome: p.nome, punti: p.punti, via: !!p.via, bot: !!p.bot,
        pos: base + 1 + gr.filter(function (q) { return q.punti > p.punti; }).length }; }; };
      H.classifica = dentro.map(riga(dentro, 0)).concat(fuori.map(riga(fuori, dentro.length)));
      H.fase = "fine"; H.sotto = null; H.k++; H.scadenza = 0;
      bd();
      // la Classifica della serata e gli XP: i NOMI dei giocatori col loro posto (sullo stesso telefono e col Bot lo fa t.fine)
      if (online && t.risultato) t.risultato(H.classifica.map(function (r) { return { nome: r.nome, pos: r.pos }; }));
    }
    // "Nuova partita": stessa stanza, stessi amici, tutti tornano nella saletta (MAI chiudere e riaprire la stanza)
    function nuova() {
      if (H.fase !== "fine") return;
      ferma(); clearTimeout(tAttesi); attesi = {}; H.fase = "lobby"; H.sotto = null; H.k++; H.scadenza = 0; H.classifica = null; H.respiro = null;
      H.players = presenti();
      // chi tiene la partita è il primo (in saletta ha la corona); se l'ha presa guardando (host di riserva), si siede
      if (online && !pById(IO)) { H.guarda = H.guarda.filter(function (x) { return x !== IO; }); H.players.unshift({ id: IO, nome: nomeHost, omino: t.mioOmino(nomeHost), punti: 0, carrello: [] }); }
      H.players.sort(function (a, b) { return (b.id === IO) - (a.id === IO); });
      H.players.forEach(function (p) { p.punti = 0; p.carrello = []; });
      H.arrivi.forEach(function (a) { if (!pById(a.id) && H.players.length < MAX_ON) H.players.push({ id: a.id, nome: a.nome, omino: a.omino || null, punti: 0, carrello: [] }); });
      H.arrivi = [];
      bd();
    }
    t.onRivincita = function () { if (H.fase === "fine") nuova(); };

    var cbHost = { sonoHost: true, myId: modo === "telefono" ? null : IO, locale: online ? null : modo,
      onComincia: comincia, onNuova: nuova,
      mossa: function (m, id) { mossa(modo === "telefono" ? id : IO, m); },
      onAvanti: function () { mossa(IO, { t: "avanti", k: H.k }); },
      onEsci: function (giaChiesto) {
        function via() { ferma(); clearTimeout(tAttesi); if (online && t.ricorda) t.ricorda(null); if (rete) rete.chiudi(); t.esci(); }
        // (dallo studio la domanda l'ha già fatta lui; dalla saletta il core)
        if (giaChiesto !== true && online && H.fase !== "lobby" && H.fase !== "fine") return t.conferma("Chiudere la partita per tutti?", "Gli amici tornano alla Sala.", "Chiudi", via);
        via();
      } };
    window.__prezzoH = H;   // (per le prove)
    if (online) { if (riprendo) riprendi(); else bd(); }
    else comincia();
  }

  // durate dei passi (le usano l'host per aspettare e la regia per andare a tempo)
  function durRivela(e) { return RV.cam + RV.rullo + Z().durataConta(e.prezzo, RV.cifra) + RV.dopoConta + e.righe.length * RV.riga + RV.banner + (e.cattivo ? RV.cattivo : 0) + RV.leggii + 700; }
  function durVetMostra(n, mist) { return 700 + 900 + n * RVET.pezzo + 1500 + (mist ? RVET.mist : 0); }
  // (con la misteriosa: prima i prezzi della vetrina vista, poi «…e la misteriosa era» coi suoi pezzi e i suoi prezzi)
  function durVetRiv(e) {
    var nA = e.usaA === false ? 0 : e.prezzi.length, nB = e.prezziB && e.usaB !== false ? e.prezziB.length : 0;
    return RV.cam + (nA ? RV.rullo + nA * RVET.prezzo + Z().durataConta(e.prezzo, RVET.cifra) + 400 : 0) +
      (nB ? RVET.mist + nB * (RVET.pezzoB + RVET.prezzo) + Z().durataConta(e.totB, RVET.cifra) + 400 + (nA ? RVET.riass : 0) + 900 : 0) +   // (+900: i telefoni non restano indietro)
      e.righe.length * RVET.riga + RVET.banner + (e.tutti && e.tutti.length ? RVET.tutto : 0) + RV.leggii + 700;
  }
  function durRuotaRiv(e) { return RV.cam + 400 + e.righe.length * RRU.riga + (e.cento.length ? RRU.cento : 0) + RRU.banner + RV.leggii + 600; }
  function durCarrello(n) { return 700 + 900 + n * 900 + 2800; }

  // =========================================================
  //  OSPITE: entra nella stanza, disegna le foto dell'host e manda solo le sue mosse
  // =========================================================
  function ospite(t, codice) {
    if (!(window.SGNet && SGNet.disponibile())) return senzaRete(t);
    var G = { rete: null, myId: null, nome: "", vm: null };
    var cb = { sonoHost: false, myId: null, locale: null,
      mossa: function (m) { if (G.rete) G.rete.invia(m); },
      onAvanti: function () { if (G.rete && G.vm) G.rete.invia({ t: "avanti", k: G.vm.k }); },
      onEsci: function (giaChiesto) {
        function via() { if (G.rete) G.rete.chiudi(); t.esci(); }
        if (t.guarda && giaChiesto !== true) return t.conferma("Smetti di guardare?", null, "Esci", via);   // (chi guarda soltanto: non lascia un posto)
        if (giaChiesto !== true && G.vm && G.vm.fase !== "lobby" && G.vm.fase !== "fine") return t.conferma("Uscire dalla partita?", null, "Esci", via);
        via();
      } };
    if (t.nomeProfilo()) { G.nome = t.nomeProfilo(); collega(); } else chiediNome();   // col profilo si entra da soli
    function chiediNome() {
      var s = t.schermata({ chiara: true, icona: "🏷️", titolo: "Entra nella partita", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      var input = t.el("input", { type: "text", placeholder: "Il tuo nome", maxlength: "16", class: "link-campo" });
      s._contenuto.appendChild(input);
      s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Entra ▶", onclick: function () {
        try { SG.audioCtx && SG.audioCtx(); } catch (e) {}
        G.nome = (input.value || "").trim().slice(0, 16) || "Amico"; collega();
      } }));
      t.mostra(s);
    }
    function collega() {
      var s = t.schermata({ chiara: true, icona: "🏷️", titolo: "Entro nella partita…", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      s._contenuto.appendChild(t.el("p", { class: "modulo-nota", style: "text-align:center;margin-top:24px", text: "Collegamento in corso…" }));
      t.mostra(s);
      G.rete = SGNet.entra(codice, {
        onAperto: function (id) { G.myId = id; cb.myId = id; G.rete.invia({ t: "join", nome: G.nome, omino: t.mioOmino(G.nome) }); },
        onMsg: function (m) {
          if (!m || !m.t) return;
          if (m.to && m.to !== G.myId) return;   // era per un altro telefono
          if (m.t === "vm") { G.vm = m.vm; disegnaVM(t, m.vm, cb); }
          else if (m.t === "priv") privatoR(m);
        },
        // l'host ha chiuso apposta: sulla classifica finale resta la classifica (lo dice il core); altrimenti si esce
        onChiuso: function (perche) {
          if (G.vm && G.vm.fase === "fine") return;
          errore(t, perche && perche.sparito ? "L'host non è tornato: la stanza è chiusa." : "🚪 L'host ha chiuso la partita.");
        },
        // (solo se il primo collegamento non riesce)
        onErrore: function () { if (G.rete) G.rete.chiudi(); erroreRete(t, "Non riesco a entrare nella stanza.", collega); }
      });
      if (!G.rete) senzaRete(t);
    }
  }

  // =========================================================
  //  LA REGIA DI OGNI TELEFONO: saletta, poi lo studio
  // =========================================================
  var R = null;   // la regia di questo telefono (una per partita)
  function idxDi(vm, id) { for (var i = 0; i < vm.players.length; i++) if (vm.players[i].id === id) return i; return -1; }
  function gDi(vm, id) { var i = idxDi(vm, id); return i >= 0 ? vm.players[i] : null; }
  function nomeDi(vm, id) { var p = gDi(vm, id); return p ? p.nome : "?"; }
  function fac(el, g, faccia) { return el("span", { class: "fac", html: ST.avatarDi(g || { nome: "?" }, faccia) }); }
  function mio(R) { var p = gDi(R.vm, R.cb.myId); return p && !p.via ? p : null; }
  // chi guarda soltanto ha la targhetta del core con le faccine e l'uscita: il gioco non mette le sue (sarebbero doppie)
  function conTarga(t) { return !!(t && t.guarda && !t.eliminazione); }
  function faccine(R) { return conTarga(R.t) ? null : R.t.faccine(); }
  function vivoK(R, k) { return R.S.vivo() && R.vm.k === k && !R.fineFatta; }
  function medaglia(p) { return ["🥇", "🥈", "🥉"][p - 1] || p + "°"; }
  // «Vince Luca», «Vinci tu», «Vincono Luca e Sara», «Vincete tu e Sara»
  function chiVince(vince, me, vm) {
    var io = vince.indexOf(me) >= 0, l = vince.filter(function (id) { return id !== me; }).map(function (id) { return nomeDi(vm, id); });
    if (io) l.unshift("tu");
    return (vince.length > 1 ? (io ? "Vincete " : "Vincono ") : (io ? "Vinci " : "Vince ")) + nomi(l);
  }
  // «Ti porti», «Luca si porta», «Tu e Sara vi portate», «Luca e Sara si portano»
  function chiPorta(ids, me, vm) {
    var io = ids.indexOf(me) >= 0, l = ids.filter(function (id) { return id !== me; }).map(function (id) { return nomeDi(vm, id); });
    if (io && !l.length) return "Ti porti";
    if (io) l.unshift("Tu");
    return nomi(l) + (io ? " vi portate" : l.length > 1 ? " si portano" : " si porta");
  }
  function nomi(lista) { return lista.length < 2 ? lista.join("") : lista.slice(0, -1).join(", ") + " e " + lista[lista.length - 1]; }

  // le foto si scaricano appena il prodotto è nella foto della partita (mentre il sipario è ancora chiuso)
  // (grande per la scheda e i riquadri, piccola per le righe e il carrello: sono due misure diverse)
  function precaricaFoto(vm) {
    if (vm.prod) { Z().precarica(vm.prod, 500); Z().precarica(vm.prod, 330); }
    if (vm.vet && vm.vet.pezzi) vm.vet.pezzi.forEach(function (x) { Z().precarica(x, 500); Z().precarica(x, 330); });
    if (vm.vet) (vm.vet.bFoto || (vm.vet.b || {}).pezzi || []).forEach(function (x) { Z().precarica(x, 500); Z().precarica(x, 330); });
    var pp = vm.premio && vm.premio.pub && vm.premio.pub.prod;
    if (pp) (Array.isArray(pp) ? pp : [pp]).forEach(function (x) { Z().precarica(x, 500); Z().precarica(x, 330); });
  }
  function disegnaVM(t, vm, cb) {
    Z().stile();
    if (vm.fase === "lobby") { if (R) { try { R.pan.giu(); } catch (e) {} } R = null; return lobbyP(t, vm, cb); }
    if (!R || R.t !== t) R = nuovaRegia(t, vm, cb);
    else if (!R.S.vivo() && !R.fineFatta) return;   // il core ha portato via il gioco: la regia si ferma
    R.vm = vm; R.cb = cb; R.vmTs = Date.now();
    if (R.fineFatta) return;
    stimaFine(R, vm);
    window.__prezzoR = R;   // (per le prove: il tempo del telefono)
    precaricaFoto(vm);
    sincronizzaLeggii(R);
    leggii(R);
    if (R.kFatto === vm.k) aggiornaFase(R);
    R.attese = R.attese.filter(function (a) { try { if (a.cond(vm)) { a.ok(vm); return false; } } catch (e) {} return true; });
    regiaTick(R);
  }
  // ---------------- il tempo sul telefono (24 ott 2026, il proprietario: un tocco all'ultimissimo istante può non arrivare) ----------------
  // Online il tempo del telefono finisce ANTICIPO ms prima di quello di chi tiene la partita: la mossa dell'ultimo istante
  // (e quella che il pannello manda da solo allo scadere) fa in tempo ad arrivare. E della fine si tiene la stima più corta
  // tra le foto dello stesso passo: una foto vecchia (come quella trattenuta che riceve per prima chi ricarica) crede che
  // manchi più tempo; quando arriva quella nuova, la barra già aperta si accorcia.
  var ANTICIPO = 1000;
  function stimaFine(R, vm) {
    if (!vm.restaMs) return;
    var f = R.vmTs + vm.restaMs, s = R.stima;
    if (!s || s.k !== vm.k) { R.stima = { k: vm.k, f: f }; return; }
    if (f >= s.f - 150) return;
    var d = s.f - f; s.f = f;
    if (R.cb.locale) return;
    [R.tempoPan, R.tempoAttesa].forEach(function (tb) { if (tb && tb._k === vm.k && !tb.finito()) tb.allunga(tb.fine() - d); });
  }
  // quando finisce il tempo di questo passo sul telefono
  function fineVM(R) {
    var vm = R.vm, f = R.stima && R.stima.k === vm.k ? R.stima.f : R.vmTs + (vm.restaMs || 0);
    return f - (R.cb.locale ? 0 : ANTICIPO);
  }
  // la barra del pannello, legata al passo in cui si apre (solo quella si accorcia)
  function barraDi(R, tb) { tb._k = R.vm.k; return tb; }
  function nuovaRegia(t, vm, cb) {
    var S = ST.crea(t, vm.players.map(function (p) { return { nome: p.nome, omino: p.omino }; }), { io: idxDi(vm, cb.myId), esci: function () { cb.onEsci(true); }, titolo: NOME, logo: LOGO,
      punti: "riga" });   // (📺 senza studio: i punteggi su una riga sola, che scorre di lato se si è in tanti: il pannello dell'offerta ha bisogno di posto)
    var X = { t: t, cb: cb, S: S, vm: vm, vmTs: Date.now(), pan: Z().pannello(S), kFatto: null, ui: {}, mie: {}, usciti: {}, attese: [],
      ids: vm.players.map(function (p) { return p.id; }).join("|") };
    vm.players.forEach(function (p, i) { ST.puntiLeggio(S, i, p.punti, 0); });
    if (conTarga(t)) S.vista.classList.add("st-con-targa");   // chi guarda soltanto: in basso la targhetta del core («👀 Guardi · 😂 · ✕»)
    // (20 nov 2026) lo spazio lasciato sotto lo schermo è quanto è alta davvero la barra in basso: prima era fisso (104 px) e una
    // scritta d'attesa su due righe, il conto e le faccine coprivano l'ultima riga (la fila di chi ha offerto, il totale della vetrina)
    S.vista.classList.add("pz-vista");
    try { if (window.ResizeObserver) new ResizeObserver(function () { var h = S.barraEl.offsetHeight; if (h) S.vista.style.setProperty("--pz-barra", h + "px"); }).observe(S.barraEl); } catch (e) {}
    return X;
  }
  // chi è arrivato a partita cominciata entra: i leggii si rifanno (succede solo all'inizio di un oggetto)
  function sincronizzaLeggii(R) {
    var ids = R.vm.players.map(function (p) { return p.id; }).join("|");
    if (ids === R.ids) return;
    R.ids = ids; R.usciti = {};
    R.S.impostaGiocatori(R.vm.players.map(function (p) { return { nome: p.nome, omino: p.omino }; }), idxDi(R.vm, R.cb.myId));
    R.vm.players.forEach(function (p, i) { ST.puntiLeggio(R.S, i, p.punti, 0); });
  }
  // il display dei leggii: punti, oppure l'offerta / la spunta / il numero della ruota mentre si gioca
  function leggii(R) {
    var vm = R.vm, S = R.S, f = vm.fase, s = vm.sotto; if (!S.vivo()) return;
    var fermi = (f === "offerta" && s === "rivela") || (f === "premio" && s === "riv") || (f === "ruota" && (s === "riv" || s === "rivb")) || (f === "vetrina" && s === "riv") || f === "fine";
    vm.players.forEach(function (p, i) {
      if (p.via) { if (!R.usciti[p.id]) { R.usciti[p.id] = 1; ST.fuori(S, i, true); } ST.testoLeggio(S, i, "👋 fuori", true); return; }
      if (R.usciti[p.id]) { delete R.usciti[p.id]; ST.fuori(S, i, false); }
      if (p.forse) return ST.testoLeggio(S, i, "📶 …");
      if (f === "offerta" && s === "offri") { var v = (vm.off || {})[p.id], ok = v != null || (vm.offFatti || []).indexOf(p.id) >= 0; return ST.testoLeggio(S, i, v != null ? E(v) : ok ? "✅" : (vm.passati || []).indexOf(p.id) >= 0 ? "😶" : "🤔"); }
      if (f === "vetrina" && (s === "offri" || s === "scegli")) return ST.testoLeggio(S, i, ((s === "scegli" ? vm.vet.sFatti : vm.vet.fatti) || []).indexOf(p.id) >= 0 ? "✅" : "🤔");
      if (f === "premio" && s === "gioca") {
        // (20 nov 2026) nei giochi dove fermarsi è la mossa (È troppo!) chi ha finito si vede solo quando hai finito anche tu:
        // se no il primo che si ferma fa da spia agli altri («il prezzo vero è qui vicino»). Chi guarda vede tutto.
        var fatti = (vm.premio || {}).fatti || [], gp = premioDi((vm.premio || {}).tipo), me1 = mio(R);
        var celati = !!(gp && gp.fattiSegreti && !R.cb.locale && me1 && fatti.indexOf(me1.id) < 0);
        return ST.testoLeggio(S, i, !celati && fatti.indexOf(p.id) >= 0 ? "✅" : "🎮");
      }
      if (f === "ruota" && !fermi && vm.ruota) {
        var x = vistaRuota(R, p.id); if (!x) return ST.puntiLeggio(S, i, p.punti, 0);
        var tot = (x.v1 || 0) + (x.v2 || 0);
        return ST.testoLeggio(S, i, x.v1 == null ? "🎡" : tot > 100 ? "💥 " + tot : String(tot), tot > 100);
      }
      if (fermi) return;   // la rivelazione mostra lei i punti, con l'animazione
      ST.puntiLeggio(S, i, p.punti, 0);
    });
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
    } catch (e) { try { console.error("[prezzo] regia", e); } catch (x) {} } finally { R.corre = false; }
  }
  // aspetta che la foto dica qualcosa (es. il numero della mia ruota): Promise
  function aspettaVm(R, cond) { return new Promise(function (ok) { try { if (cond(R.vm)) return ok(R.vm); } catch (e) {} R.attese.push({ cond: cond, ok: ok }); }); }
  async function regiaPasso(R) {
    var vm = R.vm; if (!R.S.vivo() || R.fineFatta) return false;
    if (R.kFatto === vm.k) return false;
    var k = vm.k; R.kFatto = k; R.ui = {};
    chiudiInput(R);
    var f = vm.fase, s = vm.sotto;
    try {
      if (f === "apertura") await apertura(R);
      else if (f === "offerta") await (s === "prodotto" ? fProdotto : s === "offri" ? fOffri : s === "sopra" ? fSopra : fRivela)(R);
      else if (f === "scegli") await fScegli(R);
      else if (f === "premio") await (s === "intro" ? fIntro : s === "gioca" ? fGioca : fPremioRiv)(R);
      else if (f === "punti") await fPunti(R);
      else if (f === "ruota") await fRuota(R);
      else if (f === "vetrina") await (s === "mostra" ? fVetMostra : s === "scegli" ? fVetScegli : s === "offri" ? fVetOffri : fVetRiv)(R);
      else if (f === "carrello") await fCarrello(R);
      else if (f === "fine") await fFine(R);
    } catch (e) { try { console.error("[prezzo] passo " + f + "/" + s, e); } catch (x) {} }
    return true;
  }
  // si cambia passo: giù il pannello e via i tasti di prima
  function chiudiInput(R) {
    clearTimeout(R.toAttesa);
    if (R.tempoPan) { R.tempoPan.ferma(); R.tempoPan = null; }
    if (R.ruotaUI && R.ruotaUI.ru) R.ruotaUI.ru.attiva(false);
    R.tast = null; R.premioPan = null; R.ruotaUI = null; R.bAvanti = null;
    R.pan.giu(); ST.viaBarra(R.S); ST.viaTerzo(R.S);
  }
  // in basso, per chi aspetta o guarda: una riga e le faccine
  function attesa(R, testo) {
    var el = R.t.el, vm = R.vm; R.pan.giu();
    // i secondi che mancano (niente attesa senza tempo): una barretta muta sotto la riga
    var resta = vm.restaMs ? fineVM(R) - Date.now() : 0, tb = null;   // (la stessa fine della barra del pannello: dopo un tocco il conto continua uguale)
    if (R.cb.locale !== "telefono" && resta > 1500 && vm.fase !== "punti") tb = barraDi(R, Z().barraTempo(el, Date.now() + resta, null, { muto: true, cls: "mini" }));
    R.tempoAttesa = tb;
    // (20 nov 2026) la scritta di chi guarda o arriva tardi si aggiorna appena chi tiene la partita lo registra (aggiornaFase):
    // prima restava «Stai guardando: alla prossima partita…» per tutto il passo anche a chi entrava al prossimo oggetto
    var p = el("p", { class: "pz-attesa", text: testo }); R.pGuarda = testo === guardaTesto(R) ? p : null;
    ST.barra(R.S, [ p, tb ? tb.el : null, faccine(R) ]);
  }
  function guardaTesto(R) {
    var vm = R.vm, id = R.cb.myId;
    if (R.t.guarda) return "👀 Guardi la puntata";
    if ((vm.guarda || []).indexOf(id) >= 0) return "👀 Questa volta guardi: gioca chi è stato scelto.";
    if ((vm.arrivi || []).some(function (a) { return a.id === id; })) {
      var e = vm.entra;   // (20 nov 2026: dove entra davvero; "" = la puntata è alla fine)
      return e === "offerta" ? "👋 Ci sei! Entri alla prossima Offerta." : e === "ruota" ? "👋 Ci sei! Entri alla Ruota del 100." : e === "vetrina" ? "👋 Ci sei! Entri alla Vetrina finale." :
        e === "" ? "👋 Ci sei! La puntata sta finendo: giochi dalla prossima." : "👋 Ci sei! Entri al prossimo oggetto.";
    }
    if ((vm.players || []).some(function (p) { return p.id === id && p.via; })) return "📶 Ti ricolleghi: rientri tra un attimo coi tuoi punti.";
    return "👀 Stai guardando: alla prossima partita giochi anche tu.";
  }
  function fumetto(S, testo) { S.fumetto.textContent = testo; S.fumetto.classList.remove("on"); void S.fumetto.offsetWidth; S.fumetto.classList.add("on"); }
  // il maxischermo: si svuota e si riempie (una volta per passo)
  function schermo(R, nodi, cls) {
    ST.fermaTimer(R.S); ST.vuota(R.S.sch); R.schKey = null;
    if (R.oss) { R.oss.disconnect(); R.oss = null; }
    var box = R.t.el("div", { class: "pz-sch" + (cls ? " " + cls : "") }, nodi);
    R.S.sch.appendChild(box); return box;
  }
  // Riempire lo schermo (23 ott 2026, il proprietario: «ci sono tanti spazi vuoti», «le immagini un po' più grandi»): le
  // schermate sono fatte per i telefoni piccoli; su quelli alti foto, scritte e righe si ingrandiscono finché lo spazio c'è.
  // Si prova dalla misura più grande alla più piccola e si tiene la prima che ci sta tutta (in alto e di lato); «stretta»
  // (la lista della Vetrina) all'ultimo passa a «fitta». Si rifà quando il pannello in basso sale o scende e quando qualcosa
  // dentro cambia misura. Quello che compare dopo deve essere già al suo posto, nascosto: se no a metà schermata tutto si
  // rimpicciolirebbe di colpo.
  var ZOOM = [1.5, 1.38, 1.26, 1.15, 1.06, 1], LARGO_MIN = 250;
  function riempi(R, stretta) {
    var sch = R.S.sch.querySelector(".pz-sch"); if (!sch) return;
    function ci() { return sch.scrollHeight <= sch.clientHeight + 1 && sch.scrollWidth <= sch.clientWidth + 1; }
    function prova() {
      if (!sch.isConnected) return;
      if (stretta) stretta.classList.remove("fitta");
      // (mai più largo di così: le righe devono avere posto per i nomi; nella vista larga dello studio non si ingrandisce)
      var max = Math.max(1, sch.clientWidth / LARGO_MIN);
      // («alto»: ingrandita, la schermata arriva fino in cima e lascia posto ai tasti tondi; alla misura normale com'era prima)
      for (var i = 0; i < ZOOM.length; i++) { if (ZOOM[i] > max + 0.001) continue; sch.classList.toggle("alto", ZOOM[i] > 1); sch.style.setProperty("--pz-z", ZOOM[i]); if (ci()) return; }
      if (stretta) stretta.classList.add("fitta");
    }
    sch.classList.add("riempi"); prova();
    if (R.oss) R.oss.disconnect(); R.oss = null;
    // (la misura si rifà al fotogramma dopo, mai dentro l'avviso del browser: se no «ResizeObserver loop»)
    if (window.ResizeObserver) {
      var misura = function () { return sch.clientHeight + "x" + sch.clientWidth + "|" + [].map.call(sch.children, function (c) { return c.offsetHeight; }).join(","); };
      var ult = misura(), pend = false;
      R.oss = new ResizeObserver(function () {
        if (pend) return; pend = true;
        requestAnimationFrame(function () { pend = false; if (!sch.isConnected) return; var m = misura(); if (m === ult) return; prova(); ult = misura(); });
      });
      R.oss.observe(sch); [].forEach.call(sch.children, function (c) { R.oss.observe(c); });
    }
  }
  // nascosto ma al suo posto (per riempi): si scopre dopo, con l'animazione d'entrata
  function nascondi(n) { n.style.visibility = "hidden"; n.style.animation = "none"; return n; }
  function scopri(n) {
    n.style.visibility = ""; n.style.animation = "";
    [].forEach.call(n.querySelectorAll("*"), function (c) { if (!c.getAttribute("style") && getComputedStyle(c).animationName !== "none") { c.style.animation = "none"; void c.offsetWidth; c.removeAttribute("style"); } });
    return n;
  }
  function testa(R, testo) {
    var vm = R.vm, el = R.t.el;
    if (testo == null) testo = vm.formato === "solo" ? "🏷️ Oggetto " + vm.iOff + " di " + vm.nOff : "🏷️ L'Offerta · " + vm.iOff + " di " + vm.nOff;
    return el("div", { class: "pz-testa" }, [ el("span", { text: testo }), vm.doppio && vm.fase === "offerta" ? el("span", { class: "x2", text: "🔥 ×2" }) : null ]);
  }
  function miniProd(el, p) { return Z().miniprod(el, p); }
  function testaPan(R, chi, testo, tb) {
    var el = R.t.el;
    var tx = el("span", { class: "tx", text: testo }), d = el("div", { class: "pz-pan-testa" }, [ chi ? fac(el, chi) : null, tx, tb ? tb.el : null ]);
    // (20 nov 2026) un titolo che non ci sta su una riga va su due, più piccolo: prima finiva coi puntini («Hai fatto 40. E ade…»)
    function adatta() { if (!tx.isConnected) return; d.classList.remove("due"); if (tx.scrollWidth > tx.clientWidth + 1) d.classList.add("due"); }
    requestAnimationFrame(adatta); setTimeout(adatta, 400);
    try { new MutationObserver(adatta).observe(tx, { childList: true, characterData: true, subtree: true }); } catch (e) {}
    return d;
  }
  // i punti scorrono sui leggii (inquadratura larga), con le facce
  async function leggiiDelta(R, k, delta) {
    var S = R.S, vm = R.vm;
    await ST.largo(S, 900); if (!vivoK(R, k)) return;
    vm.players.forEach(function (p, i) {
      if (p.via) return;
      var d = delta[p.id] || 0;
      ST.puntiLeggio(S, i, p.punti, d);
      if (d > 0) ST.faccia(S, i, "esulta");
    });
    await ST.dorme(1700); if (!vivoK(R, k)) return;
    ST.tutteNormali(S);
  }
  // le voci della classifica (punti, a pari punti stesso posto)
  function classificaDi(vm) {
    var l = vm.players.filter(function (p) { return !p.via; }).sort(function (a, b) { return b.punti - a.punti; });
    return l.map(function (p) { return { p: p, pos: 1 + l.filter(function (q) { return q.punti > p.punti; }).length }; });
  }

  // ---------------- la saletta ----------------
  function lobbyP(t, vm, cb) {
    var dentro = vm.players.some(function (p) { return p.id === cb.myId; }), guardo = (vm.guarda || []).indexOf(cb.myId) >= 0;
    var riga = vm.formato === "solo" ? "🎯 Solo il prezzo: esce un oggetto, scrivete il prezzo e vince chi ci va più vicino." :
      "📺 Come in TV: l'Offerta, i giochi a premi, la Ruota del 100 e la Vetrina finale. Ognuno dal suo telefono, tutti insieme.";
    t.lobby({ host: cb.sonoHost, codice: vm.codice, pronta: vm.pronta, min: MIN_ON,
      vuoti: Math.max(0, MIN_ON - vm.players.length),
      giocatori: vm.players.map(function (p, i) { return { id: p.id, nome: p.nome, omino: p.omino || null, host: vm.tiene ? p.id === vm.tiene : i === 0, tu: p.id === cb.myId }; }),
      extra: [t.el("p", { class: "modulo-nota", style: "margin:0;font-size:14px;line-height:1.45", text: riga })],
      spettatore: t.guarda ? "👀 Guardi soltanto" : guardo ? "👀 Questa volta guardi" : !cb.sonoHost && !dentro && vm.players.length >= MAX_ON ? "👀 La stanza è piena: guardi la partita" : false,
      attesa: "Aspetta che l'host cominci!", onComincia: cb.onComincia, onEsci: cb.onEsci });
  }

  // ---------------- la sigla: «Paky, vieni giù!» ----------------
  async function apertura(R) {
    var S = R.S, vm = R.vm, k = vm.k, n = vm.players.length;
    if (ST.piatto) { await ST.apertura(S); return; }   // 📺 senza studio: la presentazione veloce di chi gioca (niente pubblico, niente «vieni giù!»)
    ST.logoSchermo(S);
    if (S.pubPronto) await S.pubPronto;
    if (!vivoK(R, k)) return;
    await ST.suPubblico(S, 0, 0);
    ST.terzo(S, null, "Si comincia!", vm.formato === "solo" ? "🎯 Solo il prezzo" : "📺 Come in TV", "📺");
    ST.pubblico(S, "applauso");
    await ST.dorme(600); if (!vivoK(R, k)) return;
    await ST.suSchermo(S, 1600); if (!vivoK(R, k)) return;
    ST.terzo(S, null, "I concorrenti di stasera sono…", "", "🎤"); Z().FX.tada();
    await ST.dorme(400); await ST.suPubblico(S, 1, 1600); ST.viaTerzo(S);
    await ST.largo(S, 1300); await ST.dorme(400);
    if (n <= 4) {
      for (var i = 0; i < n; i++) {
        if (!vivoK(R, k)) return;
        await ST.suLeggio(S, i, 850); ST.accendiSolo(S, i); ST.faccia(S, i, "esulta");
        ST.terzo(S, i, vm.players[i].nome + ", vieni giù!", i === S.io ? "Sei tu! In bocca al lupo" : "Concorrente n° " + (i + 1));
        ST.pubblico(S, "piano");
        await ST.dorme(700); ST.faccia(S, i, null); ST.viaTerzo(S);
      }
      ST.accendiSolo(S, -1);
    } else {
      for (var fl = 0; fl < S.file; fl++) {
        if (!vivoK(R, k)) return;
        var chi = []; S.posti.forEach(function (p, j) { if (p.fila === fl && vm.players[j]) chi.push(vm.players[j].nome); });
        ST.terzo(S, null, nomi(chi) + ", venite giù!", fl ? "…e in seconda fila!" : "Ecco i concorrenti!", "🎤");
        ST.pubblico(S, "applauso");
        await ST.panFila(S, fl, 2600, function (j) { ST.accendi(S, j, true); ST.faccia(S, j, "esulta"); setTimeout(function () { ST.accendi(S, j, false); ST.faccia(S, j, null); }, 900); });
      }
      ST.viaTerzo(S);
    }
    await ST.largo(S, 1000); await ST.dorme(300);
  }

  // ---------------- L'OFFERTA ----------------
  function schOfferta(R, aperto) {
    var vm = R.vm, el = R.t.el, key = "off|" + vm.iOff;
    if (R.schKey === key && R.schOff && R.schOff.box.isConnected) { if (aperto) R.schOff.sip.aperto(); return R.schOff; }
    var sk = Z().scheda(el, vm.prod, {}), sip = Z().sipario(el, sk);
    if (aperto) sip.aperto();
    // (20 nov 2026) a offerte viste, mentre offri le offerte degli altri sono già nel pannello: la fila sullo schermo si nasconde
    // (prima in 4 sul telefono basso era tagliata dal pannello e ripeteva le stesse offerte); torna quando il pannello scende
    var nota = el("div", { class: "pz-sotto" }), tab = el("div", { class: "pz-tab" + (vm.players.length > 5 ? " fitto" : "") + (vm.offerte === "vista" ? " pz-solo-giu" : "") });
    var box = schermo(R, [ testa(R), sip.el, nota, tab ]);
    R.schKey = key; R.schOff = { box: box, sip: sip, nota: nota, tab: tab, chips: {} };
    return R.schOff;
  }
  // il tabellone delle offerte: a vista i prezzi (dal più basso), segrete solo chi ha già offerto
  function aggiornaTab(R) {
    var U = R.schOff, vm = R.vm, el = R.t.el;
    if (!U || !U.tab.isConnected || vm.fase !== "offerta") return;
    var vista = !!vm.off, off = vm.off || {}, fatti = vm.offFatti || Object.keys(off);
    var lista = vm.players.filter(function (p) { return !p.via; });
    // a vista, appena arriva un «+1 €» su un altro: il pubblico fischia subito (la prima foto dopo una ricarica non conta)
    if (vista && vm.sotto === "offri") {
      if (U.rif !== (vm.rifai || 0)) { U.rif = vm.rifai || 0; U.visti = null; }
      var ord = vm.ord || Object.keys(off), prima = !U.visti;
      U.visti = U.visti || {};
      ord.forEach(function (id, i) {
        if (U.visti[id] || off[id] == null) return; U.visti[id] = 1;
        if (prima) return;
        Z().FX.toc(760);
        var su = ord.slice(0, i).filter(function (a) { var d = Math.round((off[id] - off[a]) * 100) / 100; return a !== id && (d === 1 || (vm.prod && vm.prod.cent && d === 0.1)); })[0];
        if (su) { Z().FX.buu(); fumetto(R.S, "Buuu! 😈 +" + E(off[id] - off[su])); }
      });
    }
    if (vista) lista.sort(function (a, b) { var x = off[a.id], y = off[b.id]; return (x == null) - (y == null) || (x || 0) - (y || 0); });
    lista.forEach(function (p) {
      var c = U.chips[p.id];
      if (!c) { c = U.chips[p.id] = el("div", { class: "pz-och" }, [ fac(el, p), el("span", { class: "nm", text: p.id === R.cb.myId ? "Tu" : p.nome.slice(0, 8) }), el("span", { class: "v" }) ]); setTimeout(function () { c.style.animation = "none"; }, 500); }
      var ha = vista ? off[p.id] != null : fatti.indexOf(p.id) >= 0, tx = vista ? (ha ? E(off[p.id]) : "…") : (ha ? "✅" : "…");
      var v = c.querySelector(".v"); if (v.textContent !== tx) v.textContent = tx;
      c.classList.toggle("aspetta", !ha); c.classList.toggle("ok", ha && !vista);
      if (U.tab.lastChild !== c || c.parentNode !== U.tab) U.tab.appendChild(c);
    });

    fotoCheCiSta(R);
  }
  // (21 nov 2026) offerte a vista in tanti sul telefono basso: se la fila delle offerte non ci sta, la foto del prodotto si abbassa
  // finché ci sta tutto (mai sotto 56 px); si rifà quando lo schermo cambia misura (pannello su o giù)
  function fotoCheCiSta(R) {
    var U = R.schOff, sch = U && U.box && U.box.isConnected ? (U.box.classList && U.box.classList.contains("pz-sch") ? U.box : R.S.sch.querySelector(".pz-sch")) : null;
    var f = sch && sch.querySelector(".pz-sip .pz-foto"); if (!f) return;
    var ci = function () { return sch.scrollHeight <= sch.clientHeight + 1; };
    f.style.height = "";
    if (!ci()) { var h = f.offsetHeight; while (!ci() && h > 56) { h = Math.max(56, h - 10); f.style.height = h + "px"; } }
    if (!U.ossFoto && window.ResizeObserver) {
      var ult = sch.clientHeight + "x" + sch.clientWidth, pend = false;
      U.ossFoto = new ResizeObserver(function () {
        if (pend) return; pend = true;
        requestAnimationFrame(function () { pend = false; if (!sch.isConnected) { U.ossFoto.disconnect(); return; } var m = sch.clientHeight + "x" + sch.clientWidth; if (m === ult) return; ult = m; fotoCheCiSta(R); });
      });
      U.ossFoto.observe(sch);
    }
  }
  async function fProdotto(R) {
    var S = R.S, vm = R.vm, k = vm.k;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 700); if (!vivoK(R, k)) return;
    var U = schOfferta(R, false);
    U.nota.textContent = "";
    await ST.dorme(450); if (!vivoK(R, k)) return;
    U.sip.apri(); Z().FX.tada();
    ST.pubblico(S, "piano"); fumetto(S, "Ooooh! 😮");
    if (vm.doppio) ST.terzo(S, null, "🔥 Ultimo oggetto!", "Vale doppio", "🔥");
    await ST.dorme(2700); ST.viaTerzo(S);
  }
  async function fOffri(R) {
    var S = R.S, vm = R.vm, k = vm.k;
    var U = schOfferta(R, true); aggiornaTab(R);
    // la regola sempre sotto gli occhi: senza superarlo (o sopra o sotto) e come sono le offerte
    var senza = vm.formato !== "solo" || vm.sforare;
    U.nota.textContent = vm.rifai ? "😬 Si rifà! Tutti sotto i " + E(vm.limite) : (senza ? "⬇️ Senza superarlo!" : "↕️ Sopra o sotto") + (vm.offerte === "vista" ? " · 👀 si può offrire " + (vm.prod && vm.prod.cent ? "10 centesimi" : "1 €") + " più di un altro" : " · 🤫 offerte segrete");
    if (vm.rifai) ST.terzo(S, null, "Tutti sotto i " + E(vm.limite) + "!", "Si rifà una volta sola", "😬");
    await ST.suSchermo(S, 300); if (!vivoK(R, k)) return;
    if (R.cb.locale === "telefono") return turniOfferte(R, k);
    apriOfferta(R);
  }
  function offertaDi(R, id) { var vm = R.vm; if (vm.off && vm.off[id] != null) return vm.off[id]; if (R.mie["o" + vm.k] != null && R.mie.oId === id) return R.mie["o" + vm.k]; if ((vm.offFatti || []).indexOf(id) >= 0) return true; return null; }
  function apriOfferta(R) {
    var vm = R.vm, me = mio(R);
    if (!me) return attesa(R, guardaTesto(R));
    var gia = offertaDi(R, me.id);
    if (gia != null) return attesa(R, gia === true ? "✅ Hai fatto la tua offerta · aspettiamo gli altri…" : "✅ Hai offerto " + E(gia) + " · aspettiamo gli altri…");
    pannelloOfferta(R, me, fineVM(R), function (v) { R.cb.mossa({ t: "offerta", k: vm.k, v: v }); }, {});
  }
  function listaOfferte(R, mioId) { var off = R.vm.off || {}; return Object.keys(off).map(function (id) { return { nome: id === mioId ? "Tu" : nomeDi(R.vm, id), v: off[id], mia: id === mioId }; }); }
  // il tastierino nel pannello: per l'Offerta e per la Vetrina (opz.vetrina)
  function pannelloOfferta(R, chi, fine, manda, opz) {
    var vm = R.vm, el = R.t.el, k = vm.k, vista = vm.offerte === "vista" && !opz.vetrina && vm.fase === "offerta";
    var tast = Z().tastierino(el, {
      cent: opz.vetrina ? false : !!(vm.prod && vm.prod.cent), limite: opz.vetrina ? null : vm.limite,
      testoOk: opz.vetrina ? "🛍️ Offro per tutto!" : "🏷️ Offro!",
      preso: vista ? function (v) { var off = R.vm.off || {}; for (var id in off) if (id !== chi.id && Math.abs(off[id] - v) < 1e-9) return nomeDi(R.vm, id); return null; } : null,
      offerte: vista ? listaOfferte(R, chi.id) : [],
      sopra: opz.sopra || [],
      onOk: function (v) {
        manda(v);
        R.mie.oId = chi.id;
        // accettata: dopo un attimo il pannello scende (resta la riga in basso). Se l'host dice «già preso», si riapre
        if (R.cb.locale !== "telefono") { clearTimeout(R.toAttesa); R.toAttesa = setTimeout(function () { if (R.tast === tast && vivoK(R, k)) attesa(R, "✅ Hai offerto " + E(v) + " · aspettiamo gli altri…"); }, 1300); }
      }
    });
    R.tast = tast; R.tastChi = chi.id; R.tastK = k;
    var tb = Z().barraTempo(el, fine, function () { if (R.tast === tast) tast.blocca("⏰ Tempo scaduto"); if (opz.allaFine) opz.allaFine(); });
    R.tempoPan = barraDi(R, tb);
    var tit = opz.titolo || (R.cb.locale === "telefono" ? chi.nome + ", il tuo prezzo" : opz.vetrina ? "🛍️ Il totale" : "🏷️ Il tuo prezzo");
    R.pan.metti([ testaPan(R, chi, tit, tb), tast.el ]).su();
    return tast;
  }
  // sullo stesso telefono: a turno (l'ordine gira a ogni oggetto); segrete = si passa il telefono
  async function turniOfferte(R, k) {
    var vm = R.vm, pres = vm.players.filter(function (p) { return !p.via; }), n = pres.length, start = ((vm.iOff || 1) - 1) % Math.max(1, n);
    var ordine = []; for (var q = 0; q < n; q++) ordine.push(pres[(start + q) % n]);
    var segrete = vm.offerte === "segrete";
    for (q = 0; q < ordine.length; q++) {
      var g = ordine[q];
      if (!vivoK(R, k)) return;
      if (offertaDi(R, g.id) != null || (R.vm.passati || []).indexOf(g.id) >= 0) continue;
      await turno(R, k, g, segrete ? "Passa il telefono a " + g.nome : "Guarda le offerte e fai la tua", function () {
        pannelloOfferta(R, g, Date.now() + TL.offri, function (v) { R.cb.mossa({ t: "offerta", k: k, v: v }, g.id); },
          { allaFine: function () { R.cb.mossa({ t: "passa", k: k }, g.id); } });
      }, function (vm2) { return (vm2.off && vm2.off[g.id] != null) || (vm2.offFatti || []).indexOf(g.id) >= 0 || (vm2.passati || []).indexOf(g.id) >= 0; });
    }
  }
  // un turno sullo stesso telefono: stacco sul leggio, «Sono Luca», il pannello; finisce quando la foto dice che ha fatto
  async function turno(R, k, g, sotto, apri, fatto) {
    var S = R.S, i = idxDi(R.vm, g.id);
    R.pan.giu(); ST.viaBarra(S);
    await ST.stacco(S, i, sotto); if (!vivoK(R, k)) return;
    await ST.aspettaTasto(S, "📱 Sono " + g.nome + ", tocca a me ▶"); if (!vivoK(R, k)) return;
    ST.accendiSolo(S, i); await ST.suSchermo(S, 500); if (!vivoK(R, k)) return;
    apri();
    await aspettaVm(R, function (vm) { return vm.k !== k || fatto(vm); });
    await ST.dorme(650);
    if (R.tempoPan) { R.tempoPan.ferma(); R.tempoPan = null; }
    if (vivoK(R, k)) R.pan.giu();
  }
  async function fSopra(R) {
    var S = R.S, vm = R.vm, el = R.t.el, k = vm.k, off = vm.off || {};
    await ST.suSchermo(S, 400); if (!vivoK(R, k)) return;
    var tab = el("div", { class: "pz-tab" + (vm.players.length > 5 ? " fitto" : "") });
    Object.keys(off).sort(function (a, b) { return off[a] - off[b]; }).forEach(function (id) {
      tab.appendChild(el("div", { class: "pz-och" }, [ fac(el, gDi(vm, id), "triste"), el("span", { class: "nm", text: id === R.cb.myId ? "Tu" : nomeDi(vm, id).slice(0, 8) }), el("span", { class: "v", text: E(off[id]) }) ]));
    });
    schermo(R, [ testa(R), el("div", { class: "pz-banner no", text: "😱 Tutti sopra!" }), miniProd(el, vm.prod), tab,
      el("div", { class: "pz-sotto", text: "Avete superato tutti il prezzo. Si rifà una volta sola: tutti sotto i " + E(vm.limite) + "!" }) ]);
    Z().FX.trombone(); ST.pubblico(S, "ohh");
    vm.players.forEach(function (p, i) { if (off[p.id] != null) ST.faccia(S, i, "triste"); });
    await ST.dorme(3000); ST.tutteNormali(S);
  }
  function rigaOfferta(el, R, r, sforareOk, corto) {
    var p = gDi(R.vm, r.id) || { nome: "?" }, cls = r.giusto && r.pos ? "giusto" : (r.sopra && !sforareOk) ? "sopra" : "sotto";
    // (in due colonne, con tanti giocatori, solo l'emoji: così il nome si legge)
    var bd = corto ? (r.giusto && r.pos ? "🎯" : r.sopra ? (sforareOk ? "⬆️" : "❌") : r.v > R.vm.esito.prezzo ? "👌" : (sforareOk ? "⬇️" : "✅")) :
      r.giusto && r.pos ? "🎯 GIUSTO" : r.sopra ? (sforareOk ? "⬆️ sopra" : "SFORATO") : r.v > R.vm.esito.prezzo ? "👌 di poco" : (sforareOk ? "⬇️ sotto" : "✅ sotto");
    var n = el("div", { class: "pz-riga " + cls }, [ fac(el, p), el("span", { class: "nm", text: r.id === R.cb.myId ? "Tu" : p.nome }), el("span", { class: "v", text: E(r.v) }), el("span", { class: "bd", text: bd }) ]);
    n._r = r; return n;
  }
  async function fRivela(R) {
    var S = R.S, vm = R.vm, el = R.t.el, e = vm.esito, k = vm.k; if (!e) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, RV.cam); if (!vivoK(R, k)) return;
    var sforareOk = vm.formato === "solo" && !vm.sforare;
    var conta = Z().contachilometri(el, e.prezzo, { grande: true });
    var giusti = e.giusti || [], vince = e.vince || [], me = R.cb.myId;
    var banner = nascondi(giusti.length ? el("div", { class: "pz-banner oro", text: "🎯 PREZZO GIUSTO!" }) : vince.length ? el("div", { class: "pz-banner", text: "🏆 " + chiVince(vince, me, vm) + "!" }) :
      !e.nessuno ? el("div", { class: "pz-banner no", text: "😱 Sforato da tutti: niente punti" }) : el("div", { class: "pz-sotto" }));
    var righe = el("div", { class: "pz-righe" + (e.righe.length > 4 ? " due" : "") });
    var nodi = e.righe.map(function (r) { return rigaOfferta(el, R, r, sforareOk, e.righe.length > 4); });
    nodi.forEach(function (n) { righe.appendChild(n); });
    if (!nodi.length) righe.appendChild(el("div", { class: "pz-sotto", text: "😶 Nessuno ha fatto un'offerta" }));
    var cur = el("div");
    if (e.cur) cur.appendChild(nascondi(el("div", { class: "pz-curiosita", text: "💡 " + e.cur })));
    schermo(R, [ testa(R), miniProd(el, vm.prod), conta.el, el("div", { class: "pz-anno", text: "prezzo medio in Italia, " + (vm.anno || 2026) }), righe, banner, cur ], "riv");
    riempi(R);
    ST.FX.rullo(1.2); await ST.dorme(RV.rullo); if (!vivoK(R, k)) return;
    await conta.via(RV.cifra); if (!vivoK(R, k)) return;
    ST.pubblico(S, e.wow ? "ovazione" : "piano"); if (e.wow) fumetto(S, "Cosaaa?! 😱");
    await ST.dorme(RV.dopoConta);
    for (var q = 0; q < nodi.length; q++) {
      if (!vivoK(R, k)) return;
      nodi[q].classList.add("su"); Z().FX.toc(520 + q * 50);
      await ST.dorme(RV.riga);
    }
    // chi vince: PREZZO GIUSTO!, oppure il più vicino
    nodi.forEach(function (n) { var r = n._r; if (r.pos === 1) n.classList.add("vince"); if (r.punti) n.appendChild(el("span", { class: "pt", text: "+" + N(r.punti) })); });
    if (giusti.length) {
      scopri(banner);
      Z().FX.din(); ST.pubblico(S, "ovazione"); ST.coriandoli(); ST.lampo(S);
      if (giusti.indexOf(me) >= 0) Z().vibra([30, 40, 70]);
      giusti.forEach(function (id) { var i = idxDi(vm, id); if (i >= 0) ST.faccia(S, i, "evviva"); });
    } else if (vince.length) {
      scopri(banner);
      ST.pubblico(S, "applauso");
      vince.forEach(function (id) { var i = idxDi(vm, id); if (i >= 0) ST.faccia(S, i, "esulta"); });
    } else if (!e.nessuno) {
      scopri(banner);
      Z().FX.trombone(); ST.pubblico(S, "ohh");
    }
    if (me && e.righe.some(function (r) { return r.id === me && r.sopra && !sforareOk; })) Z().vibra([20, 40, 20]);
    if (cur.firstChild) scopri(cur.firstChild);
    await ST.dorme(RV.banner); if (!vivoK(R, k)) return;
    // «😈 Che cattiveria!»: il «+1 €» fischiato dal pubblico
    if (e.cattivo) {
      var ic = idxDi(vm, e.cattivo.chi);
      ST.terzo(S, ic, "😈 " + (e.cattivo.chi === me ? "Hai" : nomeDi(vm, e.cattivo.chi) + " ha") + " offerto " + E(e.cattivo.piu) + " più di " + (e.cattivo.a === me ? "te" : nomeDi(vm, e.cattivo.a)) + "!", "Che cattiveria!");   // (20 nov 2026: prima «ha fatto +1 € a te», che chi non conosce il programma non capiva)
      Z().FX.buu(); fumetto(S, "Buuuu! 👎");
      if (ic >= 0) ST.faccia(S, ic, "evviva");
      var ia = idxDi(vm, e.cattivo.a); if (ia >= 0) ST.faccia(S, ia, "arrabbiato");
      await ST.dorme(RV.cattivo); ST.viaTerzo(S); if (!vivoK(R, k)) return;
    }
    var d = {}; e.righe.forEach(function (r) { if (r.punti) d[r.id] = r.punti; });
    await leggiiDelta(R, k, d);
  }

  // ---------------- chi vince l'Offerta sceglie il gioco a premi ----------------
  async function fScegli(R) {
    var S = R.S, vm = R.vm, el = R.t.el, sc = vm.scelta, k = vm.k; if (!sc) return;
    var chi = gDi(vm, sc.chi) || { nome: "?" }, io = sc.chi === R.cb.myId, ic = idxDi(vm, sc.chi);
    await ST.suSchermo(S, 600); if (!vivoK(R, k)) return;
    // (25 ott 2026, il proprietario: «abbiamo la scritta sopra con i due giochi, ma per cliccarli devi cliccare sotto»: chi sceglie
    //  li vede una volta sola, grandi e da toccare nel pannello; sul maxischermo li vede chi aspetta, e dopo la scelta tutti)
    var carte = sc.opz.map(function (o) { var c = el("div", { class: "pz-gioco" }, [ Z().iconaPremio(el, o.tipo, o.icona), el("b", { text: o.nome }), el("small", { text: o.spiega || o.regola }) ]); c._tipo = o.tipo; return c; });
    R.ui.carte = carte;
    schermo(R, [ el("div", { class: "pz-testa", text: "🎁 Gioco a premi" }),
      // (20 nov 2026: chi sceglie ha il pannello alzato fin sotto la testata: il titolo spuntava tagliato a metà sopra il pannello)
      el("div", { class: "pz-titolo" + (io || R.cb.locale === "telefono" ? " pz-solo-giu" : ""), text: io ? "Hai vinto l'Offerta: scegli tu!" : chi.nome + " sceglie il gioco a premi" }),
      el("div", { class: "pz-giochi pz-solo-giu" }, carte), el("div", { class: "pz-sotto pz-solo-giu", text: "Poi si gioca tutti insieme" }) ]);
    if (ic >= 0) { ST.accendiSolo(S, ic); ST.faccia(S, ic, "pensa"); }
    aggiornaScelta(R);
    if (sc.fatta) return;
    var tocca = R.cb.locale === "telefono" || io;
    if (!tocca) return attesa(R, (chi.bot ? "🤖 " : "") + chi.nome + " sta scegliendo…");
    var fine = R.cb.locale === "telefono" ? Date.now() + TL.scegli : fineVM(R);
    var bottoni = sc.opz.map(function (o) {
      var b = el("button", { class: "pz-sc pz-scgioco", type: "button" }, [ Z().iconaPremio(el, o.tipo, o.icona), el("b", { text: o.nome }), el("small", { text: o.spiega || o.regola }) ]);
      b.addEventListener("click", function () {
        if (b.disabled) return;
        bottoni.forEach(function (x) { x.disabled = true; }); b.classList.add("sel"); Z().vibra(12);
        R.cb.mossa({ t: "scelta", k: k, g: o.tipo }, sc.chi);
      });
      return b;
    });
    var tb = Z().barraTempo(el, fine, function () { if (R.cb.locale === "telefono") R.cb.mossa({ t: "passa", k: k }, sc.chi); else bottoni.forEach(function (b) { b.disabled = true; }); });
    R.tempoPan = barraDi(R, tb);
    R.pan.metti([ testaPan(R, chi, R.cb.locale === "telefono" ? chi.nome + ", scegli tu!" : "🎁 Scegli tu!", tb), el("div", { class: "pz-scelte pz-giochi-pan" }, bottoni) ]).su();
  }
  function aggiornaScelta(R) {
    var sc = R.vm.scelta; if (!sc || !sc.fatta || !R.ui.carte || R.ui.sceltaVista) return;
    R.ui.sceltaVista = true;
    R.ui.carte.forEach(function (c) { c.classList.toggle("sel", c._tipo === sc.fatta); c.classList.toggle("via", c._tipo !== sc.fatta); });
    Z().FX.toc(880); ST.pubblico(R.S, "applauso");
    R.pan.giu(); if (R.tempoPan) { R.tempoPan.ferma(); R.tempoPan = null; }
  }

  // ---------------- il gioco a premi ----------------
  async function fIntro(R) {
    var S = R.S, vm = R.vm, el = R.t.el, pr = vm.premio, k = vm.k; if (!pr) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 600); if (!vivoK(R, k)) return;
    schermo(R, [ el("div", { class: "pz-testa", text: "🎁 Gioco a premi" + (vm.nPremio > 1 ? " · " + vm.iPremio + " di " + vm.nPremio : "") }),
      el("div", { class: "pz-intro" + (pr.fai ? " come" : "") }, [ Z().iconaPremio(el, pr.tipo, pr.icona), el("b", { text: pr.nome }),
        pr.fai ? el("div", { class: "pz-come" }, [
          el("div", { class: "r fai" }, [ el("i", { text: "👉 Come si gioca" }), el("span", { text: pr.fai }) ]),
          pr.es ? el("div", { class: "r es" }, [ el("i", { text: "💡 Esempio" }), el("span", { text: pr.es }) ]) : null,
          pr.pt ? el("div", { class: "r pt" }, [ el("i", { text: "🏆 Punti" }), el("span", { text: pr.pt }) ]) : null ])
        : el("p", { text: pr.spiega || pr.regola }) ]),
      el("div", { class: "pz-sotto", text: pr.da ? "Scelto da " + (pr.da === R.cb.myId ? "te" : nomeDi(vm, pr.da)) + " · si gioca tutti insieme!" : "Si gioca tutti insieme!" }) ]);   // (20 nov 2026: senza chi l'ha scelto la frase comincia con la maiuscola)
    adattaIntro(R);
    // quanto manca per leggere la regola: «Si comincia tra 7…» e «⏩ Avanti» (si parte appena lo tocca più di metà; col Bot basta il tuo)
    barraAvanti(R, k, T.intro, "Si comincia tra ");   // (il tempo vero arriva dalla foto: vm.restaMs, dalla lunghezza della spiegazione)
    Z().FX.tada(); ST.pubblico(S, "applauso");
  }
  // (21 nov 2026) le regole del gioco a premi sul telefono basso: se non ci stanno, prima le scritte si stringono (f1, poi f2),
  // poi la riga «Si gioca tutti insieme!» sparisce; MAI ingrandite per riempire e MAI una riga tagliata a metà
  function adattaIntro(R) {
    var sch = R.S.sch.querySelector(".pz-sch"), box = sch && sch.querySelector(".pz-intro.come"), sotto = sch && sch.querySelector(".pz-sotto"); if (!box) return;
    // (anche la riga sotto deve stare dentro: misurata col suo riquadro, che non ha animazioni)
    function ci() { return sch.scrollHeight <= sch.clientHeight + 1 && (!sotto || sotto.style.display === "none" || sotto.getBoundingClientRect().bottom <= sch.getBoundingClientRect().bottom + 1); }
    function prova() {
      if (!sch.isConnected) return;
      box.classList.remove("f1", "f2"); if (sotto) sotto.style.display = "";
      if (ci()) return; box.classList.add("f1"); if (ci()) return;
      box.classList.remove("f1"); box.classList.add("f2"); if (ci()) return;
      if (sotto) sotto.style.display = "none";
    }
    prova(); setTimeout(prova, 400); setTimeout(prova, 750);   // (a 750 ms l'animazione d'entrata è finita: la misura vera, a riposo)
    if (window.ResizeObserver) {
      var ult = sch.clientHeight + "x" + sch.clientWidth, pend = false;
      var o = new ResizeObserver(function () {
        if (pend) return; pend = true;
        requestAnimationFrame(function () { pend = false; if (!sch.isConnected) { o.disconnect(); return; } var m = sch.clientHeight + "x" + sch.clientWidth; if (m === ult) return; ult = m; prova(); });
      });
      o.observe(sch);
    }
  }
  // gli aiuti per i giochi a premi su ogni telefono (vedi interfaccia in js/games/prezzo-premi-piu.js)
  function apiTel(R, o) {
    o = o || {};
    var vm = R.vm, pr = vm.premio || {}, t0 = Date.now(), k = vm.k, me = mio(R);
    return {
      el: R.t.el, ST: ST, Z: Z(), S: R.S, sch: o.sch || null, pan: o.pan || null,
      pub: pr.pub || {}, riv: pr.riv || null, punti: pr.punti || {},
      io: o.io != null ? o.io : (me ? me.id : null),
      locale: R.cb.locale || null, fine: o.fine || 0,
      giocatori: vm.players.filter(function (p) { return !p.via; }).map(function (p) { return { id: p.id, nome: p.nome, omino: p.omino || null }; }),
      nome: function (id) { return id === R.cb.myId && !R.cb.locale ? "Tu" : nomeDi(R.vm, id); },
      fac: function (id, faccia) { return fac(R.t.el, gDi(R.vm, id), faccia); },
      invia: function (m) { m = m || {}; if (m.ms == null) m.ms = Date.now() - t0; R.cb.mossa({ t: "premio", k: k, m: m }, o.io); },
      dorme: ST.dorme, vivo: function () { return vivoK(R, k); },
      fmtE: Z().fmtE, fmtN: Z().fmtN, FX: Z().FX, vibra: Z().vibra, scheda: function (p, opz) { return Z().scheda(R.t.el, p, opz); },
      tessere: function (prods, opz) { return Z().tessere(R.t.el, prods, opz); },
      // (21 nov 2026) la testata del gioco a premi col suo disegno; .dici(testo) cambia solo il titolo
      testa: function (testo) { return Z().testaPremio(R.t.el, pr.tipo, testo, pr.icona); }, miniprod: function (p) { return Z().miniprod(R.t.el, p); },
      contachilometri: function (v, opz) { return Z().contachilometri(R.t.el, v, opz); },
      tastierino: function (opz) { return Z().tastierino(R.t.el, opz); }
    };
  }
  async function fGioca(R) {
    var S = R.S, vm = R.vm, el = R.t.el, pr = vm.premio, k = vm.k; if (!pr) return;
    var g = premioDi(pr.tipo);
    await ST.suSchermo(S, 300); if (!vivoK(R, k)) return;
    var box = schermo(R, [], "pz-premio-sch");
    if (!g) { box.appendChild(el("div", { class: "pz-titolo", text: pr.icona + " " + pr.nome })); return; }
    try { R.ui.premioSch = g.schermo ? g.schermo(apiTel(R, { sch: box })) || null : null; } catch (e) { try { console.error("[prezzo] schermo", e); } catch (x) {} }
    if (R.cb.locale === "telefono") return turniPremio(R, g, k);
    var me = mio(R);
    if (!me) return attesa(R, guardaTesto(R));
    if ((pr.fatti || []).indexOf(me.id) >= 0) return attesa(R, "✅ Fatto! Aspettiamo gli altri…");
    apriPremio(R, g, me, fineVM(R), null);
  }
  function apriPremio(R, g, chi, fine, allaFine) {
    var vm = R.vm, el = R.t.el, pr = vm.premio, cont = el("div", { class: "pz-premio-pan" });
    var tb = Z().barraTempo(el, fine, function () { if (R.premioPan && R.premioPan.tempo) try { R.premioPan.tempo(); } catch (e) {} if (allaFine) allaFine(); });
    R.tempoPan = barraDi(R, tb);
    // (21 nov 2026, scelta C del proprietario: il nome del gioco è già in alto; nel pannello una frase d'aiuto)
    R.pan.metti([ testaPan(R, chi, (R.cb.locale === "telefono" ? chi.nome + " · " : "") + (g && g.aiuto ? g.aiuto : pr.icona + " " + pr.nome), tb), cont ]).su();
    var P = {};
    // (al gioco la fine vera di chi tiene la partita: È troppo! e il Mirino ci regolano i prezzi che scorrono e la finestrella;
    //  la barra, e con lei il «tempo scaduto» del pannello, finisce ANTICIPO prima)
    try { P = (g.pannello && g.pannello(apiTel(R, { pan: cont, io: chi.id, fine: fine + (R.cb.locale ? 0 : ANTICIPO) }))) || {}; } catch (e) { try { console.error("[prezzo] pannello", e); } catch (x) {} }
    R.premioPan = P; R.premioChi = chi.id;
    var pv = R.premioPriv && R.premioPriv.k === vm.k ? R.premioPriv.l.filter(function (m) { return m.per == null || m.per === chi.id; }) : [];
    pv.forEach(function (m) { if (P.privato) try { P.privato(m.m); } catch (e) {} });
    R.pan.misura();
  }
  async function turniPremio(R, g, k) {
    var lista = R.vm.players.filter(function (p) { return !p.via; });
    for (var q = 0; q < lista.length; q++) {
      var p = lista[q];
      if (!vivoK(R, k)) return;
      if (((R.vm.premio || {}).fatti || []).indexOf(p.id) >= 0) continue;
      await turno(R, k, p, "Passa il telefono a " + p.nome, function () {
        apriPremio(R, g, p, Date.now() + ((R.vm.premio || {}).sec || 30) * 1000, function () { R.cb.mossa({ t: "passa", k: k }, p.id); });
      }, function (vm2) { return ((vm2.premio || {}).fatti || []).indexOf(p.id) >= 0; });
    }
  }
  function aggiornaPremio(R) {
    var pr = R.vm.premio || {}, pub = pr.pub || {};
    if (R.ui.premioSch && R.ui.premioSch.aggiorna) try { R.ui.premioSch.aggiorna(pub); } catch (e) {}
    if (R.premioPan && R.premioPan.aggiorna) try { R.premioPan.aggiorna(pub); } catch (e) {}
    // ho finito (online): dopo un attimo il pannello scende
    var me = mio(R);
    if (!R.cb.locale && me && R.premioPan && (pr.fatti || []).indexOf(me.id) >= 0 && !R.ui.fattoVisto) {
      R.ui.fattoVisto = true; var k = R.vm.k;
      clearTimeout(R.toAttesa); R.toAttesa = setTimeout(function () { if (vivoK(R, k)) { R.premioPan = null; if (R.tempoPan) { R.tempoPan.ferma(); R.tempoPan = null; } attesa(R, "✅ Fatto! Aspettiamo gli altri…"); } }, 1800);
    }
  }
  async function fPremioRiv(R) {
    var S = R.S, vm = R.vm, el = R.t.el, pr = vm.premio, k = vm.k; if (!pr) return;
    var g = premioDi(pr.tipo);
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, RV.cam); if (!vivoK(R, k)) return;
    var box = schermo(R, []);
    await ST.dorme(400);
    if (g && g.rivela) { try { await g.rivela(apiTel(R, { sch: box })); } catch (e) { try { console.error("[prezzo] rivela", e); } catch (x) {} } }
    if (!vivoK(R, k)) return;
    await leggiiDelta(R, k, pr.punti || {});
  }

  // ---------------- la classifica tra un passo e l'altro (⏩ Avanti) ----------------
  async function fPunti(R) {
    var S = R.S, vm = R.vm, el = R.t.el, k = vm.k;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 700); if (!vivoK(R, k)) return;
    var lista = classificaDi(vm), due = lista.length > 5, box = el("div", { class: "pz-clas" + (due ? " due" : "") });
    lista.forEach(function (x, i) {
      var d = (vm.ultimo || {})[x.p.id] || 0;
      var r = el("div", { class: "pz-cl" + (x.pos === 1 ? " primo" : "") }, [ el("span", { class: "pos", text: medaglia(x.pos) }), fac(el, x.p),
        el("span", { class: "nm", text: x.p.nome + (x.p.id === R.cb.myId ? " (tu)" : "") }), el("span", { class: "pt", text: N(x.p.punti) }), el("span", { class: "pi", text: d ? "+" + N(d) : "" }) ]);
      r.style.animationDelay = (i * 0.08) + "s"; box.appendChild(r);
    });
    var dopo = vm.dopo === "vetrina" ? "Poi: 🛍️ la Vetrina finale!" : vm.dopo === "ruota" ? "Poi: 🎡 la Ruota del 100!" : vm.dopo === "carrello" ? "Poi: 🛒 cosa vi portate a casa" : vm.dopo === "oggetto" && vm.iOff + 1 === vm.nOff && vm.formato === "solo" ? "Poi: 🔥 l'ultimo oggetto, vale doppio!" : "";
    schermo(R, [ el("div", { class: "pz-testa", text: vm.rip ? "🔁 Si riprende! · Classifica" : "🏁 Classifica" + (vm.formato === "solo" ? " dopo " + vm.iOff + " oggetti" : "") }), box, dopo ? el("div", { class: "pz-sotto", text: dopo }) : null ]);
    riempi(R);
    barraAvanti(R, k);
  }
  // in basso: «Si va avanti tra 8…» e «⏩ Avanti» (si parte subito se lo tocca più di metà)
  function barraAvanti(R, k, tempo, testoConto) {
    var vm = R.vm, el = R.t.el, sec = Math.max(1, Math.round(((vm.restaMs || tempo || T.punti) - (Date.now() - R.vmTs)) / 1000)), chiave = "pz|" + vm.sessione + "|" + k;
    var conto = el("p", { class: "pz-attesa" }), me = mio(R), b = null;
    if (R.cb.locale || me) {
      b = el("button", { class: "btn btn-primario pz-avanti", type: "button" }, [ el("span", { class: "tx", text: R.cb.locale ? "Avanti ▶" : "⏩ Avanti" }), R.cb.locale ? null : el("span", { class: "quanti" }) ]);
      b.addEventListener("click", function () { if (b.disabled) return; R.avantiMio = chiave; b.disabled = true; aggiornaAvanti(R); Z().vibra(10); R.cb.onAvanti(); });
    }
    R.bAvanti = b; R.kAvanti = chiave;
    ST.barra(R.S, [ conto, b, faccine(R) ]);
    R.t.contoAvanti(conto, sec, null, chiave, testoConto);
    aggiornaAvanti(R);
  }
  function aggiornaAvanti(R) {
    var b = R.bAvanti, vm = R.vm; if (!b || !b.isConnected || !(vm.fase === "punti" || (vm.fase === "premio" && vm.sotto === "intro")) || R.cb.locale) return;
    var l = vm.avanti || [], mio1 = l.indexOf(R.cb.myId) >= 0 || R.avantiMio === R.kAvanti, n = l.length + (mio1 && l.indexOf(R.cb.myId) < 0 ? 1 : 0);
    var q = b.querySelector(".quanti"), tx = n + " su " + (vm.servono || 1);
    if (q && q.textContent !== tx) q.textContent = tx;
    var s = b.querySelector(".tx"), t0 = mio1 ? "✅ Avanti" : "⏩ Avanti"; if (s.textContent !== t0) s.textContent = t0;
    b.disabled = mio1;
  }

  // ---------------- LA RUOTA DEL 100 ----------------
  function altRuota() { var h = (window.innerHeight || 640); return Math.max(48, Math.min(66, Math.round(h * 0.085))); }
  // Il maxischermo della Ruota (23 ott 2026, il proprietario: «tutti possano vedere le ruote di tutti mentre girano in tempo
  // reale», «4 per ogni schermata come le rose della mini asta»): ogni giocatore ha la sua ruota piccola che gira dal vivo
  // quando lui spinge; il suo numero si vede (anche sul leggio) solo quando la ruota si è fermata. In 5 o più: pagine da 4,
  // con le frecce, e la pagina va da sola su chi sta girando. Chi si è fermato guarda girare quelle degli altri.
  var RUOTE_PAG = 4;
  function altMini() { var h = (window.innerHeight || 640); return Math.max(20, Math.min(30, Math.round(h * 0.036))); }
  function schRuota(R) {
    var vm = R.vm, el = R.t.el, key = "ruota|" + vm.nRuota;
    if (R.schKey === key && R.schRu && R.schRu.box.isConnected) return R.schRu;
    var grid = el("div", { class: "pz-rgriglia" }), nota = el("div", { class: "pz-sotto" });
    var U = { grid: grid, nota: nota, celle: {}, ordine: [], pagina: 0 };
    var indietro = el("button", { type: "button", text: "◀" }), avanti = el("button", { type: "button", text: "▶" }), quali = el("span");
    var pag = el("div", { class: "pz-rpag" }, [ indietro, quali, avanti ]); pag.hidden = true;
    indietro.addEventListener("click", function () { vaiPagina(U, U.pagina - 1, true); });
    avanti.addEventListener("click", function () { vaiPagina(U, U.pagina + 1, true); });
    U.pag = pag; U.quali = quali;
    U.box = schermo(R, [ el("div", { class: "pz-testa", text: "🎡 La Ruota del 100" + (vm.ruoteTot > 1 ? " · " + vm.nRuota + " di " + vm.ruoteTot : "") }),
      el("div", { class: "pz-titolo", text: "Più vicino a 100, senza superarlo!" }), grid, pag, nota ]);
    R.schKey = key; R.schRu = U;
    return U;
  }
  // le pagine da 4 ruote (manuale: la pagina resta lì per un po' anche se gira qualcun altro)
  function vaiPagina(U, n, aMano) {
    var tot = Math.max(1, Math.ceil(U.ordine.length / RUOTE_PAG));
    U.pagina = (n + tot) % tot;
    if (aMano) U.aMano = Date.now();
    U.ordine.forEach(function (id, i) { var C = U.celle[id]; if (C) C.c.hidden = Math.floor(i / RUOTE_PAG) !== U.pagina; });
    U.pag.hidden = tot < 2;
    var da = U.pagina * RUOTE_PAG + 1, a = Math.min(U.ordine.length, da + RUOTE_PAG - 1);
    U.quali.textContent = "Ruote " + da + "-" + a + " di " + U.ordine.length;
  }
  function cartaRuota(R, p) {
    var el = R.t.el, ru = Z().ruota(el, { alt: altMini(), mini: true });
    var val = el("span", { class: "val", text: "—" }), st = el("span", { class: "st" });
    var c = el("div", { class: "pz-rcard" }, [ ru.el, el("div", { class: "info" }, [ el("div", { class: "chi" }, [ fac(el, p), el("span", { class: "nm", text: p.id === R.cb.myId ? "Tu" : p.nome }) ]), val, st ]) ]);
    return { c: c, ru: ru, val: val, st: st, visto: {}, gira: null };
  }
  // la ruota grande di questo telefono sta girando per quel numero (lo si scopre quando si ferma lei)
  function ruotaGrande(R, id, campo) { var RU = R.ruotaUI; return RU && RU.chi === id && RU.campo === campo ? RU : null; }
  // il numero che si vede di id: solo quello delle ruote già ferme
  function vistaRuota(R, id) {
    var x = R.vm.ruota && R.vm.ruota.g[id], C = R.schRu && R.schRu.celle[id];
    if (!x) return x;
    var y = {}; for (var k in x) y[k] = x[k];
    ["v1", "v2", "b"].forEach(function (f) { if (y[f] != null && (C ? C.visto[f] == null : (ruotaGrande(R, id, f) && !R.ruotaUI.fermo))) y[f] = null; });
    return y;
  }
  function statoCarta(C, x, s, gira) {
    var v = C.visto, tot = (v.v1 || 0) + (v.v2 || 0);
    if (gira) return "🎡 Gira…";
    if (v.b != null) return "🎁 Bonus " + v.b + (puntiBonus(v.b) ? ": +" + N(puntiBonus(v.b)) : "");
    if (v.v1 == null) return s === "giro1" || s === "turni" ? "👆 Deve girare" : "";
    if (tot > 100) return "💥 Sballato!";
    if (tot === 100) return x.cento && s === "bonus" ? "🎁 Giro bonus…" : "💯 CENTO!";
    if (s === "decidi") return x.si != null ? "✅ Ha deciso" : "🤔 Ci pensa…";
    if (v.v2 != null) return "Totale " + tot;
    if (x.si === false) return "✋ Si ferma";
    if (x.si === true) return "🎡 Gira ancora…";
    return s === "giro1" ? "Aspetta gli altri" : "";
  }
  function aggiornaRuota(R) {
    var vm = R.vm, U = R.schRu; if (!vm.ruota) return;
    if (U && U.grid.isConnected) {
      var lista = vm.players.filter(function (p) { return !p.via && vm.ruota.g[p.id]; });
      lista.forEach(function (p) {
        var C = U.celle[p.id], x = vm.ruota.g[p.id];
        if (!C) {
          C = U.celle[p.id] = cartaRuota(R, p); U.ordine.push(p.id); U.grid.appendChild(C.c);
          // i numeri che c'erano già (chi arriva a metà o ricarica): si vedono subito, senza girare
          ["v1", "v2", "b"].forEach(function (f) { if (x[f] != null && !ruotaGrande(R, p.id, f)) C.visto[f] = x[f]; });
          var ult = C.visto.b != null ? C.visto.b : C.visto.v2 != null ? C.visto.v2 : C.visto.v1;
          if (ult != null) C.ru.mostra(ult);
          vaiPagina(U, U.pagina);
        }
        // un numero nuovo: la ruota piccola gira e si ferma lì; solo allora si vede (la mia la scopre la ruota grande)
        if (!C.gira) {
          var f = ["v1", "v2", "b"].filter(function (q) { return x[q] != null && C.visto[q] == null; })[0], RG = f && ruotaGrande(R, p.id, f);
          if (f && RG && RG.fermo) { C.visto[f] = x[f]; C.ru.mostra(x[f]); }
          else if (f && !RG) {
            C.gira = f; C.c.classList.add("gira");
            var i = U.ordine.indexOf(p.id), pg = Math.floor(i / RUOTE_PAG);
            var occupata = U.ordine.some(function (id, j) { return Math.floor(j / RUOTE_PAG) === U.pagina && U.celle[id] && U.celle[id].gira && id !== p.id; });
            if (pg !== U.pagina && !occupata && !(U.aMano && Date.now() - U.aMano < 6000)) vaiPagina(U, pg);
            (function (C, f, val) {
              C.ru.arriva(val).then(function () {
                C.gira = null; C.visto[f] = val; C.c.classList.remove("gira");
                if (!R.S.vivo()) return;   // (uscito intanto: niente suoni sulla home)
                var v = C.visto, tot = f === "b" ? 0 : (v.v1 || 0) + (v.v2 || 0);
                if ((f === "b" && val === 100) || (f !== "b" && tot === 100)) { Z().FX.cento(); fumetto(R.S, "CENTO! CENTO! CENTO!"); ST.pubblico(R.S, "ovazione"); }
                else if (f !== "b" && tot > 100) ST.pubblico(R.S, "ohh");
                else Z().FX.toc(640);
                if (R.vm.fase === "ruota") { aggiornaRuota(R); leggii(R); }
              });
            })(C, f, x[f]);
          }
        }
        // (la mia la sta girando la ruota grande del pannello: anche la mia carta dice «Gira…»)
        var RU0 = R.ruotaUI, grande = !!(RU0 && RU0.chi === p.id && RU0.mandato && !RU0.fermo), gira = !!C.gira || grande;
        var v = C.visto, tot = (v.v1 || 0) + (v.v2 || 0);
        var tx = v.v1 == null ? (gira ? "…" : "—") : v.v2 != null ? v.v1 + " + " + v.v2 : String(v.v1);
        if (C.val.textContent !== tx) C.val.textContent = tx;
        var st = statoCarta(C, x, vm.sotto, gira); if (C.st.textContent !== st) C.st.textContent = st;
        C.c.classList.toggle("gira", gira);
        // (prima del primo giro la ruota piccola mostra «?»: ferma su una casella sembrerebbe un numero già uscito)
        C.c.classList.toggle("nuova", v.v1 == null && !C.gira);
        C.c.classList.toggle("fuori", tot > 100); C.c.classList.toggle("cento", tot === 100);
      });
      var s = vm.sotto, tx2 = s === "giro1" ? "👇 Tutti girano insieme: guardate le ruote!" : s === "decidi" ? "🤔 Giro ancora o mi fermo? Si decide in segreto" : s === "giro2" ? "🎡 Chi ha detto «ancora» gira di nuovo" : s === "bonus" ? "🎁 Giro bonus per chi ha fatto 100!" : s === "turni" ? "A turno, come in TV" : "";
      if (U.nota.textContent !== tx2) U.nota.textContent = tx2;
    }
    // la mia ruota: il numero dell'host è arrivato, frena e si ferma lì
    var RU = R.ruotaUI; if (!RU || RU.arrivato) return;
    var mx = vm.ruota.g[RU.chi]; if (!mx || mx[RU.campo] == null) return;
    RU.arrivato = true;
    var val = mx[RU.campo];
    if (RU.tb) RU.tb.ferma();
    RU.atterra = RU.ru.arriva(val).then(function () {
      // la ruota si è fermata: solo adesso il numero va sul maxischermo e sul leggio
      RU.fermo = true; aggiornaRuota(R); leggii(R);
      var tot = RU.campo === "b" ? val : (mx.v1 || 0) + (RU.campo === "v2" ? (mx.v2 || 0) : 0);
      RU.nota.textContent = RU.campo === "b" ? "🎁 " + val + (puntiBonus(val) ? "! +" + N(puntiBonus(val)) : "") : tot > 100 ? "💥 " + tot + ": sballato!" : tot === 100 ? "💯 CENTO!" : "🎡 " + val + (RU.campo === "v2" ? " · totale " + tot : "");
      if (tot === 100 || (RU.campo === "b" && val === 100)) { Z().FX.cento(); fumetto(R.S, "CENTO! CENTO! CENTO!"); Z().vibra([40, 50, 90]); ST.pubblico(R.S, "ovazione"); }
      else if (tot > 100 && RU.campo !== "b") { ST.pubblico(R.S, "ohh"); Z().vibra([20, 40, 20]); }
      else Z().FX.toc(700);
      // (20 nov 2026) dopo un attimo il pannello scende e si aspettano gli altri col conto vero: prima la barra restava ferma
      // sul pannello aperto e sembrava tutto bloccato (sullo stesso telefono si passa al turno dopo da sé)
      if (R.cb.locale !== "telefono") {
        var k0 = R.vm.k, txA = RU.campo === "b" ? "🎁 Giro bonus: " + val + (puntiBonus(val) ? " (+" + N(puntiBonus(val)) + ")" : "") : tot > 100 ? "💥 " + tot + ": sballato" : tot === 100 ? "💯 CENTO!" : RU.campo === "v2" ? "🎡 Totale " + tot : "🎡 Hai fatto " + val;
        setTimeout(function () { if (vivoK(R, k0) && R.ruotaUI === RU) attesa(R, txA + " · aspettiamo gli altri…"); }, 1800);
      }
    });
  }
  function apriRuota(R, chi, campo, fine, allaFine) {
    var el = R.t.el, k = R.vm.k;
    var nota = el("p", { class: "pz-nota forte", text: campo === "b" ? "🎁 Giro bonus! Trascina la ruota su o giù ↕️" : "↕️ Trascina la ruota su o giù per girarla!" });
    var RU = { campo: campo, chi: chi.id, nota: nota, arrivato: false, mandato: false, fermo: false };
    RU.ru = Z().ruota(el, { alt: altRuota(),
      onSpinta: function (f) { if (RU.mandato || !vivoK(R, k)) return false; RU.mandato = true; RU.ru.attiva(false); R.cb.mossa({ t: "spinta", k: k, f: f }, chi.id); nota.textContent = "🎡 Gira…"; },
      debole: function () { nota.textContent = "💪 Più forte! Trascina più veloce"; fumetto(R.S, "Più forte! 💪"); } });
    RU.ru.attiva(true);
    var mx = (R.vm.ruota.g || {})[chi.id]; if (mx && mx.v1 != null && campo !== "v1") RU.ru.mostra(campo === "b" ? 100 : mx.v1);
    RU.tb = Z().barraTempo(el, fine, function () { RU.ru.attiva(false); if (allaFine) allaFine(); });
    R.tempoPan = barraDi(R, RU.tb);
    var tit = campo === "v1" ? "🎡 Il tuo giro" : campo === "v2" ? "🎡 Secondo giro: hai " + (mx ? mx.v1 : "") : "🎁 Giro bonus";
    R.pan.metti([ testaPan(R, chi, (R.cb.locale === "telefono" ? chi.nome + " · " : "") + tit, RU.tb), RU.ru.el, nota ]).su();
    R.ruotaUI = RU;
    aggiornaRuota(R);
    return RU;
  }
  function apriDecidi(R, chi, x, fine, allaFine) {
    var el = R.t.el, k = R.vm.k, fatto = false;
    function vota(si) {
      if (fatto) return; fatto = true; bott.forEach(function (b) { b.disabled = true; }); (si ? b1 : b2).classList.add("sel"); Z().vibra(12);
      R.mie["r" + k] = si; R.cb.mossa({ t: "ancora", k: k, si: si }, chi.id);
      if (!R.cb.locale) { clearTimeout(R.toAttesa); R.toAttesa = setTimeout(function () { if (vivoK(R, k)) attesa(R, si ? "🎡 Giri ancora: aspettiamo gli altri…" : "✋ Ti fermi a " + x.v1 + ": aspettiamo gli altri…"); }, 900); }
    }
    var b1 = el("button", { class: "pz-sc", type: "button" }, [ el("span", { class: "i", text: "🎡" }), el("b", { text: "Giro ancora" }), el("small", { text: "Si somma. Sopra 100 sei fuori!" }) ]);
    var b2 = el("button", { class: "pz-sc", type: "button" }, [ el("span", { class: "i", text: "✋" }), el("b", { text: "Mi fermo" }), el("small", { text: "Tieni " + x.v1 }) ]);
    var bott = [b1, b2];
    b1.addEventListener("click", function () { vota(true); }); b2.addEventListener("click", function () { vota(false); });
    var tb = Z().barraTempo(el, fine, function () { bott.forEach(function (b) { b.disabled = true; }); if (allaFine) allaFine(); });
    R.tempoPan = barraDi(R, tb);
    R.pan.metti([ testaPan(R, chi, (R.cb.locale === "telefono" ? chi.nome + ": " : "") + "Hai fatto " + x.v1 + ". E adesso?", tb), el("div", { class: "pz-scelte" }, bott) ]).su();
  }
  async function fRuota(R) {
    var S = R.S, vm = R.vm, s = vm.sotto, k = vm.k; if (!vm.ruota) return;
    if (s === "riv" || s === "rivb") return ruotaRiv(R);
    ST.accendiSolo(S, -1);
    if (s === "giro1" || s === "turni") { await ST.suSchermo(S, 600); if (!vivoK(R, k)) return; }
    schRuota(R); aggiornaRuota(R);
    if (s === "giro1" || s === "turni") { ST.pubblico(S, "applauso"); }
    if (R.cb.locale === "telefono") return turniRuota(R, k);
    var me = mio(R); if (!me || !vm.ruota.g[me.id]) return attesa(R, guardaTesto(R));
    var x = vm.ruota.g[me.id], fine = fineVM(R);
    if (s === "giro1") { if (x.v1 == null) apriRuota(R, me, "v1", fine); else attesa(R, "🎡 Hai fatto " + x.v1 + " · aspettiamo gli altri…"); }
    else if (s === "decidi") {
      if (x.v1 >= 100) attesa(R, "💯 Hai fatto 100! Ti fermi lì");
      else if (x.si == null && R.mie["r" + k] == null) apriDecidi(R, me, x, fine);
      else attesa(R, "✅ Hai deciso · aspettiamo gli altri…");
    }
    else if (s === "giro2") { if (x.si === true && x.v2 == null) apriRuota(R, me, "v2", fine); else attesa(R, x.si === true ? "🎡 Hai fatto " + x.v1 + " + " + x.v2 : "✋ Resti a " + x.v1); }
    else if (s === "bonus") { if (x.cento && x.b == null) apriRuota(R, me, "b", fine); else attesa(R, "🎁 Giro bonus per chi ha fatto 100!"); }
  }
  // sullo stesso telefono: a turno come in TV (chi gira dopo sa quanto deve fare)
  async function turniRuota(R, k) {
    var lista = R.vm.players.filter(function (p) { return !p.via && R.vm.ruota.g[p.id]; }), bonus = R.vm.sotto === "bonus";
    function x(id) { return (R.vm.ruota.g || {})[id] || {}; }
    for (var q = 0; q < lista.length; q++) {
      var p = lista[q];
      if (!vivoK(R, k)) return;
      if (bonus ? (!x(p.id).cento || x(p.id).b != null) : (x(p.id).v1 != null && (x(p.id).si === false || x(p.id).v2 != null))) continue;
      await turno(R, k, p, bonus ? "🎁 Giro bonus!" : "Tocca a te alla ruota", function () { giroDiTurno(R, k, p, bonus); },
        function () { var y = x(p.id); return bonus ? y.b != null && R.giroFinito === p.id + "|" + k : y.v1 != null && (y.si === false || y.v2 != null) && R.giroFinito === p.id + "|" + k; });
    }
    if (vivoK(R, k)) R.cb.mossa({ t: "finiti", k: k }, null);
  }
  async function giroDiTurno(R, k, p, bonus) {
    function x() { return (R.vm.ruota.g || {})[p.id] || {}; }
    async function gira(campo) {
      var RU = apriRuota(R, p, campo, Date.now() + TL.giro, function () { R.cb.mossa({ t: "passa", k: k }, p.id); });
      await aspettaVm(R, function (vm) { return vm.k !== k || x()[campo] != null; });
      await ST.dorme(60);
      if (RU.atterra) await RU.atterra;
      await ST.dorme(900);
    }
    if (bonus) { await gira("b"); }
    else {
      if (x().v1 == null) await gira("v1");
      if (!vivoK(R, k)) return;
      if (x().v1 != null && x().v1 < 100 && x().si == null) {
        apriDecidi(R, p, x(), Date.now() + TL.decidi, function () { R.cb.mossa({ t: "passa", k: k }, p.id); });
        await aspettaVm(R, function (vm) { return vm.k !== k || x().si != null; });
        await ST.dorme(500);
      }
      if (vivoK(R, k) && x().si === true && x().v2 == null) await gira("v2");
    }
    R.giroFinito = p.id + "|" + k;
    // (la foto non cambia più: sblocco l'attesa del turno da qui)
    R.attese = R.attese.filter(function (a) { try { if (a.cond(R.vm)) { a.ok(R.vm); return false; } } catch (e) {} return true; });
  }
  async function ruotaRiv(R) {
    var S = R.S, vm = R.vm, el = R.t.el, k = vm.k, bonus = vm.sotto === "rivb";
    var e = bonus ? vm.ruota.esitoB : vm.ruota.esito; if (!e) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, RV.cam); if (!vivoK(R, k)) return;
    var righe = el("div", { class: "pz-righe" + (e.righe.length > 4 ? " due" : "") }), banner = el("div", { class: "pz-sotto" }), cento = el("div");
    schermo(R, [ el("div", { class: "pz-testa", text: bonus ? "🎁 Il giro bonus" : "🎡 La Ruota del 100" }), cento, righe, banner ]);
    await ST.dorme(400);
    var me = R.cb.myId, delta = {};
    for (var q = 0; q < e.righe.length; q++) {
      if (!vivoK(R, k)) return;
      var r = e.righe[q], p = gDi(vm, r.id) || { nome: "?" };
      var corto = e.righe.length > 4;   // in due colonne: l'essenziale
      var tx = bonus ? (r.b ? String(r.b) : "—") : (r.v2 && !corto ? r.v1 + " + " + r.v2 + " = " + r.tot : String(r.tot));
      var bdTx = bonus ? (r.punti ? "+" + N(r.punti) : "niente") : r.out ? (corto ? "💥" : "SBALLATO") : r.cento ? (corto ? "💯" : "💯 CENTO") : r.pos === 1 ? (corto ? "🏆" : "🏆 1°") : r.pos ? r.pos + "°" : "";
      var n = el("div", { class: "pz-riga su " + (r.out ? "sopra" : r.cento || (bonus && r.punti) ? "giusto" : r.pos === 1 ? "vince" : "sotto") }, [ fac(el, p, r.out ? "triste" : null), el("span", { class: "nm", text: r.id === me ? "Tu" : p.nome }), el("span", { class: "v", text: tx }), el("span", { class: "bd", text: bdTx }) ]);
      if (r.punti) n.appendChild(el("span", { class: "pt", text: "+" + N(r.punti) }));
      righe.appendChild(n); Z().FX.toc(500 + q * 60);
      if (r.punti) delta[r.id] = r.punti;
      await ST.dorme(bonus ? 1500 : RRU.riga);
    }
    var cents = bonus ? e.righe.filter(function (r) { return r.b === 100; }) : (e.cento || []);
    if (!bonus && cents.length || bonus && cents.length) {
      cento.className = "pz-big100"; cento.textContent = "CENTO! CENTO! CENTO!";
      Z().FX.cento(); ST.pubblico(S, "ovazione"); ST.coriandoli(); ST.lampo(S);
      if ((bonus ? cents.map(function (r) { return r.id; }) : cents).indexOf(me) >= 0) Z().vibra([40, 50, 90]);
      if (!bonus) await ST.dorme(RRU.cento);
    }
    if (!vivoK(R, k)) return;
    if (!bonus) {
      var vince = e.vince || [];
      banner.className = vince.length ? "pz-banner" : "pz-banner no";
      banner.textContent = vince.length ? "🏆 " + chiVince(vince, me, vm) + " la Ruota!" : "😱 Sballati tutti!";
      if (vince.length) ST.pubblico(S, "applauso"); else ST.pubblico(S, "ohh");
      var li = [].concat(vm.ruota.indizio || []), ioI = li.indexOf(me) >= 0, altriI = li.filter(function (id) { return id !== me; }).map(function (id) { return nomeDi(vm, id); });
      if (li.length) cento.appendChild(el("div", { class: "pz-sotto", text: "🔎 " + (ioI ? (altriI.length ? "Tu e " + nomi(altriI) + " avrete" : "Avrai") : nomi(altriI) + (altriI.length > 1 ? " avranno" : " avrà")) + " un indizio sulla Vetrina!" }));
      if (e.cento && e.cento.length) cento.appendChild(el("div", { class: "pz-sotto", text: "🎁 Chi ha fatto 100 fa il giro bonus!" }));
    } else banner.className = "pz-sotto";
    await ST.dorme(RRU.banner); if (!vivoK(R, k)) return;
    await leggiiDelta(R, k, delta);
  }

  // ---------------- LA VETRINA FINALE ----------------
  // i pezzi della vetrina in riquadri grandi, sempre con la descrizione (24 ott 2026, il proprietario: «la descrizione
  // secondo me è obbligatoria», es. l'ombrellone a Rimini è per una settimana intera). prezzi: i cartellini, nascosti
  // finché non si scoprono (riquadro._tag); pacco: [titolo, sotto] = un riquadro in più per la vetrina misteriosa
  function vetrinaTes(el, X, prezzi, pacco, fermo) {
    var lista = X.pezzi.concat(pacco ? [ { e: "🎁", nome: pacco[0], desc: pacco[1], cls: "mist" } ] : []);
    return Z().tessere(el, lista, { cls: "pz-vet", fermo: !!fermo, extra: prezzi ? function (p, i, t) {
      if (i >= X.pezzi.length) return null;
      t._tag = Z().cartellino(el, prezzi[i] != null ? E(prezzi[i]) : "? €"); return t._tag;
    } : null });
  }
  async function fVetMostra(R) {
    var S = R.S, vm = R.vm, el = R.t.el, V = vm.vet, k = vm.k; if (!V) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 700); if (!vivoK(R, k)) return;
    // (tutti i pezzi, e il pacco della misteriosa, già al loro posto ma nascosti: così i riquadri sanno quanto spazio c'è)
    var lista = vetrinaTes(el, V, null, V.mist ? ["…e c'è una vetrina misteriosa!", "Nessuno sa cosa c'è dentro"] : null), nodi = lista.tessere.map(nascondi);
    var pacco = V.mist ? nodi.pop() : null;
    schermo(R, [ el("div", { class: "pz-testa", text: "🛍️ La Vetrina finale" }), el("div", { class: "pz-vtit", text: V.e + " " + V.titolo }), lista ], "con-terzo");
    lista.adatta(); lista.solo(0);   // (scelta B: i pezzi già scoperti al centro dello spazio, grandi come con tutti)
    ST.terzo(S, null, "E per voi…", V.titolo, "🛍️"); Z().FX.tada();
    await ST.dorme(900);
    for (var i = 0; i < V.pezzi.length; i++) {
      if (!vivoK(R, k)) return;
      scopri(nodi[i]); lista.solo(i + 1, true);
      ST.terzo(S, null, (i === 0 ? "E per voi… " : i === V.pezzi.length - 1 ? "…e per finire " : "…ma non è finita! ") + (V.pezzi[i].e || ""), V.pezzi[i].nome, "🛍️");
      ST.pubblico(S, i === V.pezzi.length - 1 ? "applauso" : "piano"); fumetto(S, "Ooooh! 😮");
      await ST.dorme(RVET.pezzo);
    }
    // (con la misteriosa: si annuncia che ce n'è un'altra, che nessuno ha visto)
    if (pacco && vivoK(R, k)) {
      scopri(pacco); lista.solo(V.pezzi.length + 1, true);
      ST.terzo(S, null, "…ma attenzione: c'è anche", "una vetrina misteriosa!", "🎁"); Z().FX.tada(); fumetto(S, "Uuuuh! 🎁");
      await ST.dorme(RVET.mist);
    }
    ST.viaTerzo(S);
  }
  // la scelta in segreto (Vetrina misteriosa): sul maxischermo la vetrina vista e il pacco misterioso, nel pannello i due tasti
  async function fVetScegli(R) {
    var S = R.S, vm = R.vm, el = R.t.el, V = vm.vet, k = vm.k; if (!V) return;
    await ST.suSchermo(S, 300); if (!vivoK(R, k)) return;
    var lista = vetrinaTes(el, V, null, ["La vetrina misteriosa", "La scopre solo chi la prende"], true), fatti = el("div", { class: "pz-tab" + (vm.players.length > 5 ? " fitto" : ""), "data-sacr": "2" });
    schermo(R, [ el("div", { class: "pz-vtit", text: V.e + " " + V.titolo }), lista, el("div", { class: "pz-sotto", text: "Tieni questa o prendi la misteriosa? Si sceglie in segreto", "data-sacr": "1" }), fatti ]);
    R.ui.vetFatti = fatti; aggiornaVet(R);
    lista.adatta();
    var me = mio(R); if (!me) return attesa(R, guardaTesto(R));
    var gia = R.mie["s" + k];
    if (gia != null || (V.sFatti || []).indexOf(me.id) >= 0) return attesa(R, testoScelta(gia));
    apriSceltaVet(R, me, fineVM(R) - (R.cb.locale ? 500 : 0), function (m) {   // (col Bot i tasti si spengono mezzo secondo prima, come sempre)
      R.mie["s" + k] = m; R.cb.mossa({ t: "vscelta", k: k, b: m }, me.id);
      clearTimeout(R.toAttesa); R.toAttesa = setTimeout(function () { if (vivoK(R, k)) attesa(R, testoScelta(m)); }, 700);
    });
  }
  function testoScelta(m) { return m == null ? "✅ Hai scelto · aspettiamo gli altri…" : m ? "🎁 Hai preso la misteriosa! Aspettiamo gli altri…" : "🛍️ Tieni questa vetrina · aspettiamo gli altri…"; }
  // «Tengo questa» o «La misteriosa» (fatto(true) = la misteriosa). Allo scadere: online decide chi tiene la partita (tiene la
  // prima), sullo stesso telefono si tiene la prima e si va a offrire
  function apriSceltaVet(R, chi, fine, fatto) {
    var el = R.t.el, V = R.vm.vet, finito = false;
    function vota(m) {
      if (finito) return; finito = true; bott.forEach(function (b) { b.disabled = true; }); (m ? b2 : b1).classList.add("sel"); Z().vibra(12);
      if (R.tempoPan === tb) { tb.ferma(); R.tempoPan = null; }
      fatto(m);
    }
    var b1 = el("button", { class: "pz-sc", type: "button" }, [ el("span", { class: "i", text: V.e || "🛍️" }), el("b", { text: "Tengo questa" }), el("small", { text: "«" + V.titolo + "»" }) ]);
    var b2 = el("button", { class: "pz-sc mist", type: "button" }, [ el("span", { class: "i", text: "🎁" }), el("b", { text: "La misteriosa" }), el("small", { text: "La scopri solo dopo" }) ]);
    var bott = [b1, b2];
    b1.addEventListener("click", function () { vota(false); }); b2.addEventListener("click", function () { vota(true); });
    var tb = Z().barraTempo(el, fine, function () { if (R.cb.locale === "telefono") vota(false); else bott.forEach(function (b) { b.disabled = true; }); });
    R.tempoPan = barraDi(R, tb);
    R.pan.metti([ testaPan(R, chi, (R.cb.locale === "telefono" ? chi.nome + ": " : "") + "🎁 Tieni o cambi?", tb), el("div", { class: "pz-scelte" }, bott) ]).su();
  }
  // la vetrina sul maxischermo: "a" quella vista da tutti, "b" la misteriosa (nuova: i pezzi della misteriosa saltano fuori uno dopo l'altro)
  function mostraVetrina(R, box, w, nuova) {
    var el = R.t.el, V = R.vm.vet, X = w === "b" && V.b ? V.b : V, entra = X !== V && nuova, lista = vetrinaTes(el, X, null, null, !entra);
    if (!box || !box.isConnected) return;
    ST.vuota(box);
    box.appendChild(el("div", { class: "pz-vtit" + (X !== V ? " mist" : ""), text: (X !== V ? "🎁 " : "") + X.e + " " + X.titolo }));
    box.appendChild(lista);
    if (entra) lista.tessere.forEach(function (t, i) { t.style.animationDelay = (0.3 + i * 0.3) + "s"; });
    lista.adatta();
    if (X !== V && nuova) { Z().FX.tada(); fumetto(R.S, "Ecco la misteriosa! 🎁"); }
  }
  async function fVetOffri(R) {
    var S = R.S, vm = R.vm, el = R.t.el, V = vm.vet, k = vm.k; if (!V) return;
    await ST.suSchermo(S, 300); if (!vivoK(R, k)) return;
    var box = el("div", { class: "pz-vbox" }), fatti = el("div", { class: "pz-tab" + (vm.players.length > 5 ? " fitto" : ""), "data-sacr": "2" });
    schermo(R, [ box, el("div", { class: "pz-sotto", text: V.b ? "Quanto vale TUTTA la tua vetrina? Offerte segrete" : "Quanto vale TUTTA la vetrina? Offerte segrete", "data-sacr": "1" }), fatti ]);
    R.ui.vetFatti = fatti; R.ui.vetBox = box; aggiornaVet(R);
    if (R.cb.locale === "telefono") { mostraVetrina(R, box, "a", false); return turniVetrina(R, k); }
    var me = mio(R);
    mostraVetrina(R, box, me && V.b && (V.sc || {})[me.id] === "b" ? "b" : "a", true);
    // (aveva toccato «La misteriosa» proprio allo scadere: per chi tiene la partita era già tardi)
    if (me && V.b && R.mie["s" + (k - 1)] === true && (V.sc || {})[me.id] !== "b") fumetto(S, "⏰ Troppo tardi: tieni la prima vetrina");
    if (!me) return attesa(R, guardaTesto(R));
    var gia = R.mie["v" + k];
    if (gia != null || (V.fatti || []).indexOf(me.id) >= 0) return attesa(R, gia != null ? "✅ Hai offerto " + E(gia) + " per la vetrina" : "✅ Hai fatto la tua offerta");
    apriVetrina(R, me, fineVM(R), null);
  }
  function rigaIndizio(R, chiId) {
    var I = (R.indizi || {})[chiId]; if (!I || I.kk == null || I.kk !== R.vm.k) return null;
    return R.t.el("div", { class: "pz-indizio" }, [ R.t.el("span", { text: "🔎 Il tuo indizio (hai vinto la Ruota): " + (I.e || "") + " " + I.nome + " costa " + E(I.prezzo) }), I.desc ? R.t.el("small", { text: I.desc }) : null ]);
  }
  function apriVetrina(R, chi, fine, allaFine) {
    var k = R.vm.k;
    var tast = pannelloOfferta(R, chi, fine, function (v) { R.mie["v" + k] = v; R.cb.mossa({ t: "vetrina", k: k, v: v }, chi.id); },
      { vetrina: true, sopra: [rigaIndizio(R, chi.id)].filter(Boolean), allaFine: allaFine,
        titolo: (R.cb.locale === "telefono" ? chi.nome + ": " : "") + "🛍️ Il totale" });
    R.vetChi = chi.id;
    return tast;
  }
  async function turniVetrina(R, k) {
    var lista = R.vm.players.filter(function (p) { return !p.via; });
    for (var q = 0; q < lista.length; q++) {
      var p = lista[q];
      if (!vivoK(R, k)) return;
      if ((R.vm.vet.fatti || []).indexOf(p.id) >= 0) continue;
      await turno(R, k, p, "Passa il telefono a " + p.nome, function () {
        // (con la misteriosa: prima si sceglie, poi si offre sulla vetrina scelta)
        var V = R.vm.vet, gia = (V.sc || {})[p.id];
        function offri(w) {
          mostraVetrina(R, R.ui.vetBox, w, w === "b");
          apriVetrina(R, p, Date.now() + TL.vetOffri, function () { R.cb.mossa({ t: "passa", k: k }, p.id); });
        }
        if (!V.b || gia) return offri(gia || "a");
        mostraVetrina(R, R.ui.vetBox, "a", false);
        apriSceltaVet(R, p, Date.now() + TL.vetScegli, function (m) { R.cb.mossa({ t: "vscelta", k: k, b: m }, p.id); setTimeout(function () { if (vivoK(R, k)) offri(m ? "b" : "a"); }, 450); });
      }, function (vm2) { return ((vm2.vet || {}).fatti || []).indexOf(p.id) >= 0; });
      if (vivoK(R, k)) mostraVetrina(R, R.ui.vetBox, "a", false);   // (il prossimo non vede la vetrina di chi ha appena offerto)
    }
  }
  function aggiornaVet(R) {
    var vm = R.vm, el = R.t.el, box = R.ui.vetFatti; if (!box || !box.isConnected || !vm.vet) return;
    var fatti = (vm.sotto === "scegli" ? vm.vet.sFatti : vm.vet.fatti) || [], tx = vm.players.filter(function (p) { return !p.via; }).map(function (p) { return p.id + (fatti.indexOf(p.id) >= 0 ? "1" : "0"); }).join("|");
    if (R.ui.vetK === tx) return; R.ui.vetK = tx;
    ST.vuota(box);
    vm.players.forEach(function (p) {
      if (p.via) return; var ok = fatti.indexOf(p.id) >= 0;
      var c = el("div", { class: "pz-och" + (ok ? " ok" : " aspetta") }, [ fac(el, p), el("span", { class: "nm", text: p.id === R.cb.myId ? "Tu" : p.nome.slice(0, 8) }), el("span", { class: "v", text: ok ? "✅" : "…" }) ]);
      c.style.animation = "none"; box.appendChild(c);
    });
  }
  async function fVetRiv(R) {
    var S = R.S, vm = R.vm, el = R.t.el, V = vm.vet, k = vm.k, e = V && V.esito; if (!e) return;
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, RV.cam); if (!vivoK(R, k)) return;
    // si scoprono solo le vetrine scelte da qualcuno (B c'è anche se la misteriosa la vince solo un VINCI TUTTO)
    var B = e.prezziB && V.b ? V.b : null, usaA = e.usaA !== false, usaB = !!B && e.usaB !== false, due = usaA && usaB;
    var me = R.cb.myId, perId = {}; e.righe.forEach(function (r) { perId[r.id] = r; });
    // (le offerte, il cartello e «VINCI TUTTO» si preparano subito, nascosti, e si mettono sotto quando servono: così
    //  riempi sa lo spazio che prenderanno; con la misteriosa prima ci sono solo le vetrine)
    var nodiR = e.ordine.map(function (id) {
      var r = perId[id], p = gDi(vm, r.id) || { nome: "?" };
      var n = el("div", { class: "pz-riga " + (r.sopra ? "sopra" : r.tutto ? "giusto" : r.pos === 1 ? "vince" : "sotto") }, [ fac(el, p), el("span", { class: "nm", text: (due ? (r.w === "b" ? "🎁 " : V.e + " ") : "") + (r.id === me ? "Tu" : p.nome) }), el("span", { class: "v", text: E(r.v) }),
        el("span", { class: "bd", text: e.righe.length > 4 ? (r.sopra ? "❌" : r.tutto ? "⭐" : r.pos ? r.pos + "°" : "") : r.sopra ? "SFORATO" : r.tutto ? "⭐ TUTTO" : r.pos ? r.pos + "°" : "" }) ]);
      if (r.punti) n.appendChild(el("span", { class: "pt", text: "+" + N(r.punti) }));
      return n;
    });
    var tutto = null;
    if (e.tutti && e.tutti.length) {
      tutto = nascondi(el("div", {}, [ el("div", { class: "pz-tutto", text: "⭐ VINCI TUTTO! ⭐" }) ]));
      // «VINCI TUTTO!» porta a casa anche l'altra vetrina
      if (B) e.tutti.slice(0, 3).forEach(function (id) {
        var altra = perId[id] && perId[id].w === "b" ? { e: V.e, titolo: V.titolo, tot: e.prezzo } : { e: (usaB ? "" : "la vetrina misteriosa ") + "🎁", titolo: B.titolo, tot: e.totB };
        tutto.appendChild(el("div", { class: "pz-sotto", text: (e.vince.indexOf(id) >= 0 ? chiPorta([id], me, vm) + " a casa anche " + altra.e + " «" + altra.titolo + "» (" + E(altra.tot) + ")" :
          chiPorta([id], me, vm) + " a casa tutte e due le vetrine (" + E(Math.round(e.prezzo + e.totB)) + ")") }));
      });
      else if (e.seconda) tutto.appendChild(el("div", { class: "pz-sotto", text: chiPorta(e.tutti, me, vm) + " a casa anche " + e.seconda.e + " «" + e.seconda.titolo + "» (" + E(e.seconda.tot) + ")" }));
    }
    var box = el("div", { class: "pz-vbox" }), righe = el("div", { class: "pz-righe" + (e.righe.length > 4 ? " due" : "") });
    var vince = e.vince || [], banner = nascondi(el("div", { class: vince.length ? "pz-banner" : "pz-banner no", text: vince.length ? "🏆 " + chiVince(vince, me, vm) + " la Vetrina!" : "😱 Sforato da tutti!" })), extra = el("div", {}, [ tutto ]);
    function sotto() { nodiR.forEach(function (n) { righe.appendChild(n); }); banner.style.display = ""; extra.style.display = ""; }
    banner.style.display = "none"; extra.style.display = "none";
    schermo(R, [ box, righe, banner, extra ], "riv");
    if (!due) sotto();   // (una vetrina sola da scoprire: le offerte sotto la lista, come sempre)
    // una vetrina: i suoi pezzi, i prezzi che saltano fuori uno alla volta e il totale che gira (la misteriosa: prima i pezzi)
    async function svela(X, prezzi, tot, mist) {
      ST.vuota(box);
      var lista = vetrinaTes(el, X, prezzi, null, !mist), nodi = lista.tessere, conta = Z().contachilometri(el, tot, {});
      if (mist) nodi.forEach(nascondi);
      box.style.flex = "";
      box.appendChild(el("div", { class: "pz-vtit" + (mist ? " mist" : ""), text: (mist ? "🎁 " : "") + X.e + " " + X.titolo }));
      box.appendChild(lista);
      box.appendChild(el("div", { class: "pz-tot" }, [ el("span", { text: "Totale" }), conta.el ]));
      lista.adatta(); if (mist) lista.solo(0);
      if (mist) { for (var j = 0; j < nodi.length; j++) { scopri(nodi[j]); lista.solo(j + 1, true); Z().FX.toc(500 + j * 60); await ST.dorme(RVET.pezzoB); if (!vivoK(R, k)) return false; } }
      else { ST.FX.rullo(1.2); await ST.dorme(RV.rullo); if (!vivoK(R, k)) return false; }
      for (var i = 0; i < nodi.length; i++) { nodi[i]._tag.classList.add("su"); Z().FX.toc(600 + i * 80); await ST.dorme(RVET.prezzo); if (!vivoK(R, k)) return false; }
      await conta.via(RVET.cifra); if (!vivoK(R, k)) return false;
      ST.pubblico(S, "piano"); await ST.dorme(400);
      return vivoK(R, k);
    }
    if (usaA && !await svela(V, e.prezzi, e.prezzo, false)) return;
    if (usaB) {
      ST.terzo(S, null, usaA ? "…e la vetrina misteriosa era" : "🎁 La vetrina misteriosa era", B.titolo, "🎁"); Z().FX.tada(); fumetto(S, "Ooooh! 🎁");
      await ST.dorme(RVET.mist); if (!vivoK(R, k)) return;
      ST.viaTerzo(S);
      if (!await svela(B, e.prezziB, e.totB, true)) return;
      // tutte e due scelte: le due vetrine in breve; nelle offerte l'emoji della prima = chi l'ha tenuta, 🎁 = la misteriosa
      if (due) {
        ST.vuota(box); box.style.flex = "0 0 auto";
        box.appendChild(el("div", { class: "pz-due" }, [ rigaTotVet(el, V.e, V.titolo, e.prezzo), rigaTotVet(el, "🎁", B.titolo, e.totB) ]));
        sotto(); riempi(R);
        await ST.dorme(RVET.riass); if (!vivoK(R, k)) return;
      }
    }
    // le offerte: dalla più lontana alla più vicina
    for (var q = 0; q < nodiR.length; q++) {
      if (!vivoK(R, k)) return;
      nodiR[q].classList.add("su"); Z().FX.toc(520 + q * 50);
      await ST.dorme(RVET.riga);
    }
    scopri(banner);
    ST.pubblico(S, vince.length ? "ovazione" : "ohh");
    vince.forEach(function (id) { var i2 = idxDi(vm, id); if (i2 >= 0) ST.faccia(S, i2, "evviva"); });
    await ST.dorme(RVET.banner); if (!vivoK(R, k)) return;
    // «VINCI TUTTO!»: vicinissimo (entro il 3%, TUTTO_PCT)
    if (tutto) {
      scopri(tutto);
      ST.coriandoli(); ST.FX.fanfara(); ST.lampo(S); ST.pubblico(S, "ovazione");
      if (e.tutti.indexOf(me) >= 0) Z().vibra([80, 40, 160]);
      await ST.dorme(RVET.tutto); if (!vivoK(R, k)) return;
    }
    var d = {}; e.righe.forEach(function (r) { if (r.punti) d[r.id] = r.punti; });
    await leggiiDelta(R, k, d);
  }

  function rigaTotVet(el, icona, titolo, tot) { return el("div", { class: "pz-vt" }, [ el("span", { class: "i", text: icona }), el("span", { class: "t", text: titolo }), el("b", { text: E(tot) }) ]); }

  // ---------------- IL CARRELLO DEI PREMI ----------------
  function quanti(n) { return n === 1 ? "" : ["", "", "due ", "tre ", "quattro ", "cinque "][n] || n + " "; }
  async function fCarrello(R) {
    var S = R.S, vm = R.vm, el = R.t.el, k = vm.k, car = vm.carrello || {};
    ST.accendiSolo(S, -1); ST.tutteNormali(S);
    await ST.suSchermo(S, 700); if (!vivoK(R, k)) return;
    var lista = vm.players.filter(function (p) { return !p.via; }).map(function (p) {
      var c = car[p.id] || [], tot = c.reduce(function (a, x) { return a + (+x.prezzo || 0); }, 0);
      return { p: p, c: c, tot: tot };
    }).sort(function (a, b) { return b.tot - a.tot; });
    var box = el("div", { class: "pz-cars" + (lista.length > 5 ? " due" : "") });
    schermo(R, [ el("div", { class: "pz-testa", text: "🛒 Cosa vi portate a casa" }), box, el("div", { class: "pz-anno", text: "(euro finti, solo per ridere: la classifica vera è quella dei punti)" }) ]);
    var righe = lista.map(function (x) {
      var cosa;
      if (!x.c.length) cosa = [ el("b", { text: x.p.id === R.cb.myId ? "Tu" : x.p.nome }), el("span", { text: "🧽" }), el("small", { text: "una spugna, premio di consolazione" }) ];
      else {
        var raggr = []; x.c.forEach(function (c) { var g = raggr.filter(function (y) { return y.nome === c.nome; })[0]; if (g) g.n++; else raggr.push({ e: c.e, nome: c.nome, n: 1 }); });
        cosa = [ el("b", { text: x.p.id === R.cb.myId ? "Tu" : x.p.nome }), el("span", { class: "figs" }, x.c.slice(0, 12).map(function (c) { return Z().figura(el, c, "e"); })),
          el("small", { text: raggr.map(function (g) { return quanti(g.n) + g.nome; }).join(" · ") }) ];   // (20 nov 2026: «·» tra i premi, perché alcuni nomi hanno la virgola: «I libri delle medie, un anno»)
      }
      return box.appendChild(nascondi(el("div", { class: "pz-car" }, [ fac(el, x.p, x.c.length ? "esulta" : "triste"), el("div", { class: "cosa" }, cosa), el("span", { class: "tot", text: x.c.length ? E(Math.round(x.tot)) : "" }) ])));
    });
    riempi(R, box);   // (20 nov 2026: premi e nomi interi quando c'è posto; accorciati coi puntini solo se non ci stanno: «fitta»)
    await ST.dorme(900);
    for (var q = 0; q < lista.length; q++) {
      if (!vivoK(R, k)) return;
      scopri(righe[q]);
      if (lista[q].c.length) Z().FX.cassa(); else ST.pubblico(S, "piano");
      await ST.dorme(900);
    }
    ST.pubblico(S, "applauso");
  }

  // ---------------- LA FINE ----------------
  async function fFine(R) {
    var S = R.S, vm = R.vm, t = R.t, el = t.el, cb = R.cb, clas = vm.classifica || [];
    R.fineFatta = true;
    var primi = clas.filter(function (r) { return r.pos === 1 && !r.via; });
    if (primi.length === 1) await ST.finale(S, idxDi(vm, primi[0].id), N(primi[0].punti) + " punti");
    else {
      await ST.finale(S, -1);
      if (primi.length > 1 && S.vivo()) {
        primi.forEach(function (r) { ST.faccia(S, idxDi(vm, r.id), "esulta"); });
        ST.terzo(S, null, "Pareggio!", "Vincono " + nomi(primi.map(function (r) { return r.nome; })) + " · " + N(primi[0].punti) + " punti", "🏆");
        ST.pubblico(S, "ovazione"); ST.coriandoli(); ST.FX.fanfara();
        await ST.dorme(3000); ST.viaTerzo(S);
      }
    }
    if (!S.vivo()) return;
    // sullo stesso telefono e col Bot: la fine del core (Serata a punti, rivincita)
    if (cb.locale) return t.fine(clas.map(function (r) { var x = { nome: r.nome, punti: r.punti, pos: r.pos }; if (r.bot) x.bot = true; return x; }));
    var titolo = !primi.length ? "Fine partita" : primi.length === 1 ? "Vince " + primi[0].nome + "!" : "Pareggio!";
    var s = t.schermata({ chiara: true, icona: "🏆", titolo: titolo, sotto: NOME });
    var fitta = clas.length > 6 || clas.length * 64 + 300 > (window.innerHeight || 640);
    var ol = el("ol", { class: "classifica" + (fitta ? " fitta" : "") }), med = medaglieDi(clas.map(function (r) { return r.pos; })), car = vm.carrello || {};
    clas.forEach(function (r, i) {
      var tot = (car[r.id] || []).reduce(function (a, x) { return a + (+x.prezzo || 0); }, 0);
      ol.appendChild(el("li", { class: r.pos === 1 ? "vincitore" : "" }, [
        el("span", { class: "pos", text: med[i] }),
        el("span", { class: "nome", text: r.nome + (r.id === cb.myId ? " (tu)" : "") + (r.via ? " (fuori)" : "") + (tot && !fitta ? " · 🛒 " + E(Math.round(tot)) : "") }),
        el("span", { class: "punti", text: N(r.punti) }) ]));
    });
    s._contenuto.appendChild(ol);
    var targa = conTarga(t), fa = targa ? null : t.faccine(); if (fa) { fa.classList.add("fine-faccine"); s._contenuto.appendChild(fa); }
    var haGiocato = cb.sonoHost || clas.some(function (r) { return r.id === cb.myId; });
    if (!haGiocato) s._contenuto.appendChild(el("p", { class: "modulo-nota", style: "text-align:center;margin-top:10px", text: targa ? "👀 Hai guardato: se l'host fa un'altra partita, entri anche tu." : "Questa partita l'hai guardata." }));
    if (targa) s._piede.style.paddingBottom = "calc(62px + env(safe-area-inset-bottom))";   // (il posto della targhetta in basso)
    // I TASTI DI FINE LI METTE IL CORE (Rivincita col 3-2-1, Cambia gioco, Ci sto): solo se torna false i tasti di sempre
    if (!t.tastiFine(s._piede, { host: cb.sonoHost, nuova: cb.sonoHost ? cb.onNuova : null, esci: cb.onEsci })) {
      if (cb.sonoHost) s._piede.appendChild(el("button", { class: "btn btn-primario", text: "↻ Nuova partita (stessi amici)", onclick: cb.onNuova }));
      else if (haGiocato) s._contenuto.appendChild(el("p", { class: "modulo-nota", style: "text-align:center;margin-top:10px", text: "Se l'host fa un'altra partita, torni da solo nella saletta." }));   // (20 nov 2026: chi ha guardato l'ha già letto sopra, detto meglio)
      if (!targa) s._piede.appendChild(el("button", { class: "btn btn-fantasma", text: "🏠 Esci", onclick: cb.onEsci }));   // (chi guarda: c'è il ✕ della targhetta)
      if (!s._piede.children.length) s._piede.style.display = "none";   // (20 nov 2026: chi guarda non ha tasti: niente riquadro scuro vuoto)
    }
    t.mostra(s);
  }
  function medaglieDi(posti) { var gruppi = 0, prec = null; return posti.map(function (p) { if (p !== prec) { gruppi++; prec = p; } return ["🥇", "🥈", "🥉"][gruppi - 1] || p + "°"; }); }

  // ---------------- le cose che cambiano dentro lo stesso passo ----------------
  function aggiornaFase(R) {
    var f = R.vm.fase, s = R.vm.sotto;
    if (R.pGuarda && R.pGuarda.isConnected) { var gt = guardaTesto(R); if (R.pGuarda.textContent !== gt) R.pGuarda.textContent = gt; }
    if (f === "offerta" && s === "offri") {
      aggiornaTab(R);
      if (R.tast && R.vm.off && R.cb.locale !== "telefono") { R.tast.offerte(listaOfferte(R, R.tastChi)); R.tast.aggiorna(); }
      else if (R.tast && R.vm.off) { R.tast.offerte(listaOfferte(R, R.tastChi)); R.tast.aggiorna(); }
    }
    else if (f === "scegli") aggiornaScelta(R);
    else if (f === "premio" && s === "gioca") aggiornaPremio(R);
    else if (f === "premio" && s === "intro") aggiornaAvanti(R);
    else if (f === "punti") aggiornaAvanti(R);
    else if (f === "ruota") aggiornaRuota(R);
    else if (f === "vetrina" && (s === "offri" || s === "scegli")) aggiornaVet(R);
  }
  // i messaggi solo per questo telefono
  function privatoR(m) {
    if (!R || !m) return;
    if (m.k === "mia" || m.k === "miaV") {
      if (m.k === "mia") { R.mie["o" + m.kk] = m.v; R.mie.oId = m.per; } else R.mie["v" + m.kk] = m.v;
      // (chi ha ricaricato la pagina e ha già offerto: il tastierino si chiude da solo, col prezzo che aveva detto)
      if (R.tast && R.tastK === m.kk && R.vm.k === m.kk && R.cb.locale !== "telefono") {
        var k0 = m.kk, v0 = m.v; R.tast.fatto(v0);
        if (!R.toAttesa || R.toAttesaK !== k0) { clearTimeout(R.toAttesa); R.toAttesaK = k0; R.toAttesa = setTimeout(function () { if (vivoK(R, k0) && R.tast) attesa(R, m.k === "miaV" ? "✅ Hai offerto " + E(v0) + " per la vetrina" : "✅ Hai offerto " + E(v0) + " · aspettiamo gli altri…"); }, 1300); }
      }
      return;
    }
    if (m.k === "preso" || m.k === "sotto") {
      if (R.tast && R.tastK === m.kk) {
        clearTimeout(R.toAttesa);
        if (!R.pan.aperto() && R.tastChi) apriOfferta(R);
        else { R.tast.svuota(); R.tast.riapri(); }   // il prezzo non va: si riscrive da capo
        fumetto(R.S, m.k === "preso" ? "Già preso da " + m.da + "! 😬" : "Sotto i " + E(m.lim) + "!");
      }
      return;
    }
    if (m.k === "premio") {
      if (!R.premioPriv || R.premioPriv.k !== m.kk) R.premioPriv = { k: m.kk, l: [] };
      R.premioPriv.l.push(m);
      if (R.premioPan && R.premioPan.privato && (m.per == null || m.per === R.premioChi)) try { R.premioPan.privato(m.m); } catch (e) {}
      return;
    }
    if (m.k === "indizio") {
      (R.indizi = R.indizi || {})[m.per] = m;   // (sullo stesso telefono ne arrivano anche due)
      if (R.tast && R.tast.el && R.vetChi === m.per && R.tastChi === m.per && R.vm.fase === "vetrina" && !R.tast.el.querySelector(".pz-indizio")) {
        var ri = rigaIndizio(R, m.per); if (ri) { R.tast.el.insertBefore(ri, R.tast.el.firstChild); if (R.pan.aperto()) R.pan.su(); }
      }
      return;
    }
    if (m.k === "miaR") { R.mie["r" + m.kk] = m.si; return; }
  }

  // ---------------- schermate di servizio ----------------
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
    s._contenuto.appendChild(t.el("p", { style: "font-size:1.05rem;line-height:1.5", text: "Online si gioca quando l'app è aperta dal sito pubblicato. Intanto potete giocare «Su questo telefono» o «Contro il Bot»." }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Ok", onclick: t.esci }));
    t.mostra(s);
  }
  function niente(t) {
    var s = t.schermata({ chiara: true, icona: "🏷️", titolo: "Mancano i prodotti", indietro: t.esci });
    s._contenuto.appendChild(t.el("p", { text: "I prodotti del gioco non sono stati caricati." }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Ok", onclick: t.esci }));
    t.mostra(s);
  }

  // =========================================================
  //  REGISTRAZIONE
  // =========================================================
  SG.registra({
    id: ID, nome: NOME, icona: "🏷️",
    descrizione: "Quanto costa? Come nel programma della TV: l'Offerta col sipario, i giochi a premi, la Ruota del 100 e la Vetrina finale. Oppure solo il prezzo, un oggetto dopo l'altro. Ognuno dal suo telefono, tutti insieme.",
    giocatoriMin: 2, giocatoriMax: 8, difficolta: 2,
    postiOnline: MAX_ON,   // fino a 8 nello studio: nella Sala, se siete di più, l'host sceglie chi gioca
    riprende: true,   // online: se l'host ricarica o riapre l'app, la partita riprende da dove era (t.ripresa)
    riserva: true,    // online: se l'host sparisce del tutto, un amico porta avanti la partita (gioco lungo, da 2 a 8, non a due né in tempo reale)
    // (23 ott 2026) chi arriva a partita cominciata entra all'inizio del prossimo oggetto, della Ruota o della Vetrina, con 0
    // punti (H.arrivi, col suo id nella foto); chi vuole solo guardare («👀 Guarda» nella Sala, link con &guarda=1) guarda
    ritardatari: "turno",
    modi: [
      { modo: "telefono", icona: "📱", nome: "Su questo telefono", sotto: "Da 2 a 8, a turno", amici: true, min: 2 },
      // diretto: si parte subito (due tocchi dalla home) con le regole di partenza di impostazioni(): 📺 Come in TV, Puntata,
      // 3 Bot medi, offerte a vista, tutte le categorie
      { modo: "bot", icona: "🤖", nome: "Contro il Bot", sotto: "Tu contro 3 Bot, come in TV", min: 1, diretto: true }
    ],
    regole: [
      "Si indovina il <b>prezzo</b> di cose vere: la spesa, il caffè al bar, lo smartphone, la Vespa, una settimana al mare… Sono prezzi medi in Italia.",
      "📺 <b>Come in TV</b>: si apre il sipario, compare un prodotto e avete <b>20 secondi</b> per scrivere il prezzo. Vince chi ci va <b>più vicino senza superarlo</b> (se superi di pochissimo, entro il 2%, vale ancora).",
      "👀 Con le offerte <b>a vista</b> si vedono arrivare: un prezzo già detto non si può ridire, e chi offre dopo può offrire <b>1 € più di un altro</b> (10 centesimi sui prezzi sotto i 20 €), per rubargli il posto. Con le offerte <b>segrete</b> si scoprono tutte alla fine.",
      "Se <b>sforate tutti</b>, si rifà una volta sola, tutti sotto l'offerta più bassa.",
      "Punti: <b>300</b> al primo, <b>150</b> al secondo, <b>75</b> al terzo (con almeno 4 giocatori). <b>PREZZO GIUSTO!</b> (praticamente preciso): <b>+500</b>.",
      "Chi vince l'Offerta sceglie il <b>gioco a premi</b>, e si gioca tutti insieme.",
      "🎡 <b>La Ruota del 100</b>: girate tutti, poi decidete in segreto se girare ancora (si somma). Vince chi va più vicino a 100 senza superarlo: <b>200</b> al primo, 100 al secondo, 50 al terzo (con almeno 4 giocatori). 100 esatto: <b>+300</b> e il giro bonus (100 ancora +300, uno spicchio verde +150). Chi vince la Ruota ha un <b>indizio</b> sulla Vetrina.",
      "🛍️ <b>La Vetrina finale</b>: tanti premi insieme. Poi ognuno sceglie in segreto: <b>la tengo</b> o prendo la <b>🎁 vetrina misteriosa</b> (la scopri solo dopo averla scelta). Offerta segreta sul totale della tua: vince chi ci va più vicino (in percentuale) senza superarlo. Punti: <b>450</b> al primo, 225 al secondo, 110 al terzo (con almeno 4 giocatori) e, se ci vai vicinissimo (entro il 3%), <b>VINCI TUTTO!</b> (+1.000) e ti porti a casa anche l'altra vetrina.",
      "🎯 <b>Solo il prezzo</b>: esce un oggetto, 20 secondi, vince chi va più vicino (sopra o sotto, a meno che chi ospita scelga «Senza sforare»). Preciso: +500. <b>L'ultimo oggetto vale doppio.</b>",
      "Alla fine il <b>carrello</b>: cosa vi portate a casa (euro finti, solo per ridere). Vince chi ha più punti.",
      "<b>Sullo stesso telefono</b> si gioca a turno: con le offerte segrete vi passate il telefono."
    ],
    impostazioni: function (box, dove, aiuti) {
      var el = aiuti.el, modo = aiuti.modo;
      if (["tv", "solo"].indexOf(dove.formato) < 0) dove.formato = "tv";
      if (!N_GIRI[dove.durata]) dove.durata = "puntata";
      if (["vista", "segrete"].indexOf(dove.offerte) < 0) dove.offerte = modo === "telefono" ? "segrete" : "vista";
      if (typeof dove.sforare !== "boolean") dove.sforare = false;
      if (!ERR[dove.liv]) dove.liv = "medio";
      if ([1, 3, 5].indexOf(dove.nBot) < 0) dove.nBot = 3;
      if (!Array.isArray(dove.categorie) || dove.categorie.length < 3) dove.categorie = Z().ORDINE_CAT.slice();
      var gruppi = {};
      function gruppo(etichetta, chiave, voci, due) {
        var tit = el("div", { class: "etichetta", text: etichetta }), g = el("div", { class: "modo-griglia", style: due ? "display:grid;grid-template-columns:1fr 1fr;gap:8px" : "" }), bb = [];
        voci.forEach(function (v) {
          var b = el("button", { class: "modo-chip" + (dove[chiave] === v.v ? " attiva" : ""), type: "button", onclick: function () {
            dove[chiave] = v.v; bb.forEach(function (x) { x.b.className = "modo-chip" + (x.v === v.v ? " attiva" : ""); });
            if (chiave === "formato") mostraSolo();
          } }, [ el("div", {}, [ el("div", { class: "mt", text: v.mt }), v.ms ? el("div", { class: "ms", text: v.ms }) : null ]) ]);
          bb.push({ b: b, v: v.v }); g.appendChild(b);
        });
        box.appendChild(tit); box.appendChild(g);
        gruppi[chiave] = [tit, g];
      }
      gruppo("Formato", "formato", [ { v: "tv", mt: "📺 Come in TV", ms: "Offerte, giochi a premi, Ruota e Vetrina" }, { v: "solo", mt: "🎯 Solo il prezzo", ms: "Un oggetto dopo l'altro, vince il più vicino" } ]);
      gruppo("Quanto dura", "durata", [ { v: "veloce", mt: "⚡ Veloce", ms: "TV: 2 offerte · Solo: 6 oggetti" }, { v: "puntata", mt: "📺 Puntata", ms: "TV: 3 offerte · Solo: 10 oggetti" }, { v: "lunga", mt: "🌙 Serata lunga", ms: "TV: 4 offerte e 2 Ruote · Solo: 15 oggetti" } ]);
      gruppo("Le offerte", "offerte", [ { v: "vista", mt: "👀 A vista", ms: modo === "telefono" ? "A turno, come in TV: si può offrire 1 € (o 10 cent.) più di un altro" : "Si vedono arrivare: si può offrire 1 € (o 10 cent.) più di un altro" }, { v: "segrete", mt: "🤫 Segrete", ms: modo === "telefono" ? "Vi passate il telefono" : "Si scoprono alla fine" } ], true);
      gruppo("Si può sforare? (🎯 Solo il prezzo)", "sforare", [ { v: false, mt: "↕️ Sì", ms: "Vince il più vicino, sopra o sotto" }, { v: true, mt: "⬇️ Senza sforare", ms: "Come in TV: chi supera non vale" } ], true);
      function mostraSolo() { (gruppi.sforare || []).forEach(function (n) { n.style.display = dove.formato === "solo" ? "" : "none"; }); }
      mostraSolo();
      // le categorie (almeno 3 accese)
      box.appendChild(el("div", { class: "etichetta", text: "Le categorie" }));
      var cg = el("div", { class: "cat-griglia" });
      Z().ORDINE_CAT.forEach(function (c) {
        var C = Z().CAT[c];
        var b = el("button", { class: "cat-chip" + (dove.categorie.indexOf(c) >= 0 ? " attiva" : ""), type: "button", onclick: function () {
          var i = dove.categorie.indexOf(c);
          if (i >= 0) { if (dove.categorie.length <= 3) return; dove.categorie.splice(i, 1); } else dove.categorie.push(c);
          b.className = "cat-chip" + (dove.categorie.indexOf(c) >= 0 ? " attiva" : "");
        } }, [ el("span", { class: "ci", text: C.ic }), el("span", { text: C.corto }), el("span", { class: "spunta", text: "✓" }) ]);
        cg.appendChild(b);
      });
      box.appendChild(cg);
      if (modo === "bot") {
        gruppo("Quanti Bot", "nBot", [ { v: 1, mt: "1 Bot" }, { v: 3, mt: "3 Bot" }, { v: 5, mt: "5 Bot" } ], false);
        gruppi.nBot[1].style.cssText = "display:grid;grid-template-columns:repeat(3,1fr);gap:8px";
        gruppo("Bravura del Bot", "liv", [ { v: "facile", mt: "🟢 Facile" }, { v: "medio", mt: "🟡 Medio" }, { v: "difficile", mt: "🔴 Difficile" } ], false);
        gruppi.liv[1].style.cssText = "display:grid;grid-template-columns:repeat(3,1fr);gap:8px";
      }
      box.appendChild(el("p", { class: "modulo-nota", text: modo === "online" ? "Online ognuno gioca dal suo telefono, tutti insieme: 20 secondi per ogni offerta." : modo === "bot" ? "Tu contro i Bot, tutti insieme: 20 secondi per ogni offerta." : "Sullo stesso telefono si gioca a turno." }));
    },
    // la riga «📜 Si gioca così» che leggono gli amici in saletta
    riassunto: function (imp) {
      imp = imp || {};
      var solo = imp.formato === "solo", d = imp.durata || "puntata";
      var nCat = Array.isArray(imp.categorie) && imp.categorie.length >= 3 && imp.categorie.length < 10 ? imp.categorie.length + " categorie su 10" : "tutte le categorie";
      return (solo ? "🎯 Solo il prezzo · " + (N_OGG[d] || 10) + " oggetti · " + (imp.sforare ? "senza sforare" : "sopra o sotto") :
        "📺 Come in TV · " + ({ veloce: "⚡ Veloce", lunga: "🌙 Serata lunga" }[d] || "📺 Puntata")) + " · offerte " + (imp.offerte === "segrete" ? "segrete" : "a vista") + " · " + nCat;
    },
    avvia: function (t) {
      Z().stile();
      if (t.linkParams && t.linkParams.stanza) return ospite(t, t.linkParams.stanza);   // entrato da un invito
      var modo = (t.impostazioni || {}).modo;
      if (modo === "online") return motore(t, "online");
      if (modo === "bot") return motore(t, "bot");
      return motore(t, "telefono");
    }
  });

  // per le prove: le regole senza grafica
  window.__prezzo = { esitoOfferta: esitoOfferta, esitoVetrina: esitoVetrina, esitoRuota: esitoRuota, piano: piano, posizioni: posizioni, puntiPos: puntiPos, stimaBot: stimaBot, leggiImp: leggiImp, prodotti: prodotti, vetrine: vetrine, puntiBonus: puntiBonus };
})();

/* =========================================================
   «IL PREZZO È GIUSTO!» — gioco a premi «🔼🔽 Più o meno» (il Clock Game della TV), tutti insieme.
   È il PRIMO ESEMPIO dei giochi a premi: gli altri si fanno uguali, in un file loro (js/games/prezzo-premi-a.js, -b.js),
   senza toccare index.html né il gioco. Interfaccia completa (con esempi) anche in
   scratchpad/giochi-nuovi/prezzo/interfaccia-premi.md.

   COME SI REGISTRA UN GIOCO A PREMI
     window.SG_PREZZO_PREMI = window.SG_PREZZO_PREMI || {};
     window.SG_PREZZO_PREMI.<tipo> = { ...l'oggetto qui sotto... };
   Il gioco li legge quando comincia una partita (i file si possono caricare in qualsiasi ordine).

   L'OGGETTO
     nome, icona, regola     testi (regola: una riga, si legge nella presentazione e nella scelta)
     min, max                quanti giocatori (facoltativi)
     locale                  false = non si gioca sullo stesso telefono (di partenza sì: lì si passa il telefono a turno)
   --- sul telefono che tiene la partita (l'host; col Bot e sullo stesso telefono questo telefono). Niente grafica ---
     prepara(P) → st         lo stato del gioco, anche coi segreti (solo dati: niente funzioni)
     tempo(st, P) → secondi  quanto si gioca (online tutti insieme; sullo stesso telefono: a testa)
     pubblico(st, P) → {}    quello che vedono tutti mentre si gioca (MAI i segreti). Va nella foto a ogni mossa
     mossa(st, id, m, P)     una mossa del giocatore id (m è quello che ha mandato A.invia, con m.ms = millisecondi
                             da quando gli si è aperto il pannello). Si risponde a lui solo con P.privato(id, msg);
                             P.fatto(id) = ha finito (quando hanno finito tutti si va avanti senza aspettare il tempo)
     privatoDi(st, id, P)    (facoltativo) i segreti di id, per chi ricarica la pagina: arrivano al suo pannello.privato
     fine(st, P) → { punti: { id: n }, riv: {…dati della rivelazione, ora anche i segreti…}, carrello: { id: [prodotti] } }
     durata(riv, P) → ms     quanto dura la rivelazione (l'host aspetta tanto così)
     bot(st, bot, P) → [ { ms, m } ]   le mosse di un Bot ({ id, nome, livello: "facile"|"medio"|"difficile" }):
                             il Bot sa il prezzo vero e sbaglia apposta; le mosse arrivano alla mossa() a quei millisecondi
   --- su ogni telefono (grafica). A = gli aiuti del telefono ---
     schermo(A) → { aggiorna(pub) }      il maxischermo mentre si gioca (A.sch, già vuoto)
     pannello(A) → { aggiorna(pub), privato(msg), tempo() }   il pannello in basso del giocatore A.io (in A.pan).
                             privato(msg) = quello che gli ha mandato P.privato; tempo() = il tempo è finito
     rivela(A) → Promise     la rivelazione sul maxischermo (A.riv, A.punti); deve durare circa durata(riv)
   P (host): ids, n, modo, locale, nome(id), rnd(), mescola(a), pesca(filtro, n) → prodotti COL prezzo (mai due volte nella
             partita, dalle categorie scelte), passo(p), margine(p, pct), arrotonda(v, p), fmtE(v), tondo2(v), privato(id, msg), fatto(id)
   A (telefono): el, ST (lo studio), S, Z (window.SGPrezzoScena: scheda, tastierino, contachilometri, FX…), sch, pan, pub, riv, punti,
             io, locale, fine (ora della fine del tempo), giocatori [{ id, nome, omino }], nome(id), fac(id, faccia), invia(m),
             dorme(ms), vivo(), fmtE, fmtN, FX, vibra, scheda(prod, opz), contachilometri(v, opz), tastierino(opz),
             tessere(prods, opz) (i riquadri che riempiono lo schermo: vedi prezzo-scena.js; poi .adatta()), miniprod(prod)
   La descrizione dei prodotti si vede SEMPRE (24 ott 2026, il proprietario: «la descrizione secondo me è obbligatoria»):
   più prodotti insieme → tessere; uno solo → scheda (anche «piccola» ha la descrizione) o miniprod nelle rivelazioni.
   ========================================================= */
(function () {
  "use strict";
  var PREMI = window.SG_PREZZO_PREMI = window.SG_PREZZO_PREMI || {};
  var ZONA = 0.03;                    // «🎯 Preso!» entro il 3% (o un passo del prezzo)
  var SCALA = [400, 300, 250], DOPO = 200;
  function preso(v, prezzo, P) { return Math.abs(v - prezzo) <= Math.max(prezzo * ZONA, P.passo(prezzo)) + 1e-9; }
  function sec(ms) { return (Math.round((+ms || 0) / 100) / 10).toFixed(1).replace(".", ",") + " s"; }

  PREMI.piuomeno = {
    nome: "Più o meno", icona: "🔼🔽", ordine: 1,
    regola: "Scrivi un prezzo: il telefono ti dice ⬆️ più su o ⬇️ più giù. Chi lo trova per primo vince!",
    aiuto: "↕️ Più su o più giù?",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Scrivi un prezzo: ti diciamo se quello vero è ⬆️ più su o ⬇️ più giù, e riprovi. Chi lo trova prima vince: 400 punti al primo, 300 al secondo, 250 al terzo, 200 agli altri che lo trovano.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "Scrivi quanto costa: il telefono ti dice se il prezzo vero è ⬆️ più su o ⬇️ più giù, e riprovi. Basta andarci vicino.",
    es: "Scrivi 50 € → «⬆️ più su». Scrivi 90 € → «⬇️ più giù». Scrivi 70 € → «🎯 Preso!»",
    pt: "Il primo che lo trova 400 punti, il secondo 300, il terzo 250, gli altri 200.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = P.pesca(function (x) { return x.prezzo >= 20 && x.prezzo <= 2000; }, 1)[0] || P.pesca(null, 1)[0];
      return { prod: prod, trovati: {}, prove: {}, storia: {} };
    },
    tempo: function () { return 30; },
    pubblico: function (st) {
      var p = st.prod || {};
      return { prod: { e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat },
        arrivi: Object.keys(st.trovati).sort(function (a, b) { return st.trovati[a] - st.trovati[b]; }).map(function (id) { return { id: id, ms: st.trovati[id] }; }),
        prove: st.prove };
    },
    mossa: function (st, id, m, P) {
      var v = P.tondo2(+m.v); if (!(v > 0) || st.trovati[id] != null) return;
      st.prove[id] = (st.prove[id] || 0) + 1;
      var h = st.storia[id] || (st.storia[id] = []);
      if (preso(v, st.prod.prezzo, P)) {
        st.trovati[id] = Math.max(0, Math.round(+m.ms || 0));
        h.push({ v: v, e: "si" });
        P.privato(id, { e: "si", v: v, ms: st.trovati[id] });
        P.fatto(id);
      } else {
        var e = v < st.prod.prezzo ? "su" : "giu";
        h.push({ v: v, e: e });
        P.privato(id, { e: e, v: v });
      }
    },
    privatoDi: function (st, id) { return { storia: st.storia[id] || [], trovato: st.trovati[id] != null ? st.trovati[id] : null }; },
    fine: function (st, P) {
      var ord = Object.keys(st.trovati).sort(function (a, b) { return st.trovati[a] - st.trovati[b]; });
      var punti = {}, carrello = {};
      ord.forEach(function (id, i) { punti[id] = i < SCALA.length ? SCALA[i] : DOPO; });
      if (ord.length) carrello[ord[0]] = [st.prod];   // chi lo trova per primo se lo porta a casa
      var ultimo = function (id) { var h = st.storia[id] || []; return h.length ? h[h.length - 1] : null; };
      return { punti: punti, carrello: carrello,
        riv: { prod: st.prod, arrivi: ord.map(function (id) { return { id: id, ms: st.trovati[id], prove: st.prove[id] || 0, punti: punti[id] }; }),
          altri: P.ids.filter(function (id) { return st.trovati[id] == null; }).map(function (id) { var u = ultimo(id); return { id: id, prove: st.prove[id] || 0, v: u ? u.v : null, e: u ? u.e : null }; }) } };
    },
    durata: function (riv) { return 1300 + 2700 + ((riv.arrivi || []).length + (riv.altri || []).length) * 550 + 2300; },
    // il Bot cerca come una persona: prima una stima, poi più su / più giù dimezzando (sbaglia di più se è facile)
    bot: function (st, bot, P) {
      var prezzo = st.prod.prezzo, err = { facile: 0.45, medio: 0.25, difficile: 0.12 }[bot.livello] || 0.25;
      var passo = bot.livello === "difficile" ? 1700 : bot.livello === "medio" ? 2400 : 3200;
      var t = 2000 + P.rnd() * 2500, lo = 0, hi = Infinity, v = prezzo * Math.exp((P.rnd() * 2 - 1) * err * 1.4), mosse = [];
      for (var i = 0; i < 14 && t < 29000; i++) {
        v = Math.max(P.passo(prezzo), P.arrotonda(v, prezzo));
        mosse.push({ ms: Math.round(t), m: { v: v } });
        if (preso(v, prezzo, P)) break;
        if (v < prezzo) lo = Math.max(lo, v); else hi = Math.min(hi, v);
        if (hi === Infinity) v = v * (1.35 + P.rnd() * 0.5);
        else if (!lo) v = v * (0.45 + P.rnd() * 0.25);
        else v = (lo + hi) / 2 * (1 + (P.rnd() - 0.5) * err * 0.5);
        t += passo + P.rnd() * 1400;
      }
      return mosse;
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      var el = A.el, pub = A.pub || {};
      var lista = el("div", { class: "pz-righe" + (A.giocatori.length > 4 ? " due" : "") });
      var titolo = el("div", { class: "pz-sotto", text: "🏁 Chi l'ha trovato" });
      A.sch.appendChild(A.testa("Più o meno"));
      var sk = A.scheda(pub.prod || {}, { cls: "media grande" }); A.sch.appendChild(sk);   // (25 ott: la scheda prende tutto lo spazio libero)
      A.sch.appendChild(titolo);
      A.sch.appendChild(lista);
      var visti = {};
      function aggiorna(p) {
        (p.arrivi || []).forEach(function (a, i) {
          if (visti[a.id]) return; visti[a.id] = 1;
          var r = el("div", { class: "pz-riga su giusto" }, [ el("span", { class: "nm", style: "flex:0 0 auto", text: (i + 1) + "°" }), A.fac(a.id), el("span", { class: "nm", text: A.nome(a.id) }), el("span", { class: "v", text: sec(a.ms) }) ]);
          lista.appendChild(r); A.FX.din(); if (sk._adatta) setTimeout(sk._adatta, 30);   // (21 nov 2026: con le righe sotto la scheda si stringe, «corta»)
        });
        titolo.textContent = (p.arrivi || []).length ? "🏁 Chi l'ha trovato" : "🏁 Nessuno l'ha ancora trovato…";
      }
      aggiorna(pub);
      return { aggiorna: aggiorna };
    },
    pannello: function (A) {
      var el = A.el, finito = false;
      var esito = el("div", { class: "pz-nota forte", text: "Scrivi un prezzo e tocca «Prova!»" });
      var storia = el("div", { class: "pz-offrow" });
      var tast = A.tastierino({ cent: false, continuo: true, testoOk: "🔍 Prova!", onOk: function (v) { A.invia({ v: v }); } });
      A.pan.appendChild(esito); A.pan.appendChild(storia); A.pan.appendChild(tast.el);
      function segna(x) {
        var c = el("span", { class: "pz-offch" + (x.e === "si" ? " mia" : "") }, [ el("span", { text: A.fmtE(x.v) }), el("b", { text: x.e === "su" ? "⬆️" : x.e === "giu" ? "⬇️" : "🎯" }) ]);
        storia.insertBefore(c, storia.firstChild);
        while (storia.children.length > 4) storia.removeChild(storia.lastChild);
      }
      function risposta(m) {
        if (finito) return;
        if (m.storia) { m.storia.forEach(segna); if (m.trovato != null) { finito = true; esito.textContent = "🎯 Preso in " + sec(m.trovato) + "!"; tast.blocca("🎯 Preso!"); } else tast.riapri(); return; }
        segna(m);
        if (m.e === "si") {
          finito = true; esito.textContent = "🎯 PRESO! in " + sec(m.ms); tast.blocca("🎯 Preso!");
          A.FX.din(); A.vibra([30, 40, 70]);
        } else {
          esito.textContent = m.e === "su" ? "⬆️ PIÙ SU!" : "⬇️ PIÙ GIÙ!";
          esito.classList.remove("pz-scuoti"); void esito.offsetWidth; esito.classList.add("pz-scuoti");
          A.FX.toc(m.e === "su" ? 880 : 440);
          tast.svuota(); tast.riapri();   // si riscrive da capo (il prezzo provato resta nelle chip qui sopra)
        }
      }
      return { privato: risposta, tempo: function () { if (!finito) { esito.textContent = "⏰ Tempo scaduto"; tast.blocca("⏰ Tempo scaduto"); } } };
    },
    rivela: async function (A) {
      var el = A.el, riv = A.riv || {}, prod = riv.prod || {};
      var conta = A.contachilometri(prod.prezzo || 0, { grande: true });
      var righe = el("div", { class: "pz-righe" + (((riv.arrivi || []).length + (riv.altri || []).length) > 4 ? " due" : "") }), banner = el("div", { class: "pz-sotto" });
      A.sch.appendChild(A.testa("Più o meno"));
      A.sch.appendChild(A.miniprod(prod));
      A.sch.appendChild(conta.el); A.sch.appendChild(righe); A.sch.appendChild(banner);
      A.ST.FX.rullo(1.1); await A.dorme(1300); if (!A.vivo()) return;
      await conta.via(260); if (!A.vivo()) return;
      (riv.arrivi || []).forEach(function () {});
      var lista = (riv.arrivi || []).map(function (a, i) { return { id: a.id, tx: sec(a.ms) + " · " + a.prove + (a.prove === 1 ? " prova" : " prove"), bd: (i + 1) + "°", cls: "giusto", punti: a.punti }; })
        .concat((riv.altri || []).map(function (a) { return { id: a.id, tx: a.v != null ? A.fmtE(a.v) + (a.e === "su" ? " ⬆️" : " ⬇️") : "nessuna prova", bd: "non trovato", cls: "sopra", punti: 0 }; }));
      for (var i = 0; i < lista.length; i++) {
        if (!A.vivo()) return;
        var x = lista[i], r = el("div", { class: "pz-riga su " + x.cls }, [ A.fac(x.id, x.punti ? "esulta" : "triste"), el("span", { class: "nm", text: A.nome(x.id) }), el("span", { class: "v", text: x.tx }), el("span", { class: "bd", text: x.bd }) ]);
        if (x.punti) r.appendChild(el("span", { class: "pt", text: "+" + A.fmtN(x.punti) }));
        righe.appendChild(r); A.FX.toc(520 + i * 60);
        await A.dorme(550);
      }
      var primi = riv.arrivi || [];
      banner.className = primi.length ? "pz-banner" : "pz-banner no";
      banner.textContent = primi.length ? (A.nome(primi[0].id) === "Tu" ? "🏆 L'hai trovato per primo!" : "🏆 " + A.nome(primi[0].id) + " l'ha trovato per primo!") : "😱 Nessuno l'ha trovato!";
      A.ST.pubblico(A.S, primi.length ? "applauso" : "ohh");
      await A.dorme(2300);
    }
  };
})();

/* =========================================================
   «IL PREZZO È GIUSTO!» — giochi a premi (file a): «🧗 L'Alpinista» e «📊 Mettili in ordine», tutti insieme.
   L'interfaccia dei giochi a premi è spiegata in testa a js/games/prezzo-premi-piu.js («🔼🔽 Più o meno»)
   e in scratchpad/giochi-nuovi/prezzo/interfaccia-premi.md. Questo file è già caricato da index.html e messo
   nella versione online: qui non serve toccare nient'altro.

   🧗 L'ALPINISTA (Cliff Hangers): 3 prodotti piccoli (sotto i 100 €), uno dopo l'altro, 45 secondi in tutto.
      L'errore di ogni prezzo in percentuale diventa passi: 1 passo ogni 4% (massimo 25 a prodotto; un passo di
      prezzo di differenza non conta). La montagna ha 25 passi: oltre, giù dal burrone!
      Punti: 550 − 15 × passi (minimo 100), in vetta senza un passo +200, caduto 0 (22 ott 2026: da 500 a 550, così
      i 5 giochi a premi valgono in media uguale, circa 300 a testa; simulazioni in .agents/skills/prova-nel-browser/prezzo/simulazione).
      Rivelazione: tutti gli avatar salgono insieme, prodotto per prodotto, con la musichetta tirolese.
   📊 METTILI IN ORDINE (Hole in One): 5 prodotti (della stessa categoria se si può, prezzi distanti almeno il 15%),
      in colonna: si tocca un prodotto e poi un altro per scambiarli, dal meno caro (in alto) al più caro. 30 secondi.
      L'ordine che si vede quando scade il tempo vale (chi non ha toccato niente: 0). Punti: 70 a posto giusto, tutti
      giusti +100 (22 ott 2026: da 80 a 70, per la stessa media degli altri giochi a premi). Rivelazione: la fila giusta coi prezzi e una pallina da minigolf per ognuno, più vicina alla buca
      quanti più posti giusti. Tutti e 5: «⛳ Buca in uno!».
   Classi col prefisso pza- (stile in fondo al file).
   ========================================================= */
(function () {
  "use strict";
  var PREMI = window.SG_PREZZO_PREMI = window.SG_PREZZO_PREMI || {};
  var ERR = { facile: 0.45, medio: 0.25, difficile: 0.12 };
  var COLORI = ["#ff6b6b", "#4dabf7", "#ffd43b", "#69db7c", "#da77f2", "#ff922b", "#3bc9db", "#f783ac"];
  // lo schermo e il pannello dello stesso telefono si parlano da qui (es. il prodotto che stai prezzando)
  var LEGAMI = {};

  function Z() { return window.SGPrezzoScena || {}; }
  function gauss(rnd) { var u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  // il Bot sa il prezzo vero e sbaglia apposta (facile ±45%, medio ±25%, difficile ±12%), come nelle offerte
  function stima(P, prezzo, liv, molt) {
    var e = ERR[liv] || 0.25, g = Math.max(-2.5, Math.min(2.5, gauss(P.rnd)));
    return Math.max(P.passo(prezzo), P.arrotonda(prezzo * Math.exp(g * e * 0.85 * (molt || 1)), prezzo));
  }
  function pubProd(p) { p = p || {}; return { e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat, cent: (+p.prezzo || 0) < 20 }; }
  // tocco subito col pointerdown (su iPhone il click a volte non arriva); il click resta per mouse e tastiera
  function premi(b, fn) {
    var ultimo = 0;
    b.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse" && e.button) return; e.preventDefault(); ultimo = Date.now(); fn(); });
    b.addEventListener("click", function () { if (ultimo) { ultimo = 0; return; } fn(); });   // (il click dopo un tocco non conta, anche se il dito è restato giù a lungo)
  }
  function svuota(n) { while (n && n.firstChild) n.removeChild(n.firstChild); }
  function eTu(A, id) { return A.nome(id) === "Tu"; }
  // «Luca è …» / «Sei …»
  function frase(A, id, tu, lui) { return eTu(A, id) ? tu : A.nome(id) + " " + lui; }
  function mioTelefono(A, id) { return A.locale === "telefono" || id === A.io; }
  function chips(A, box, pub, testo) {
    svuota(box);
    box.className = "pz-tab" + (A.giocatori.length > 4 ? " fitto" : "");
    A.giocatori.forEach(function (g) {
      var t = testo(g.id);
      box.appendChild(A.el("span", { class: "pz-och" + (t.ok ? " ok" : " aspetta") }, [ A.fac(g.id), A.el("span", { class: "nm", text: A.nome(g.id) }), A.el("span", { class: "v", text: t.tx }) ]));
    });
  }
  function aggChips(A, box, testo) {
    var ch = box.children;
    A.giocatori.forEach(function (g, i) {
      var c = ch[i]; if (!c) return; var t = testo(g.id), v = c.querySelector(".v");
      if (v && v.textContent !== t.tx) { v.textContent = t.tx; c.classList.toggle("ok", !!t.ok); c.classList.toggle("aspetta", !t.ok); if (t.ok) { c.classList.remove("pza-pop"); void c.offsetWidth; c.classList.add("pza-pop"); } }
    });
  }

  // ---------------- la musichetta tirolese (oom-pa-pà a tre tempi), solo mentre si sale ----------------
  function ac() { try { return window.SG && window.SG.audioCtx ? window.SG.audioCtx() : null; } catch (e) { return null; } }
  function tirolese(ms) {
    var nulla = { ferma: function () {} }, c = ac(); if (!c) return nulla;
    var out; try { out = c.createGain(); out.gain.value = 0.55; out.connect(c.destination); } catch (e) { return nulla; }
    var BEAT = 0.19, t0 = c.currentTime + 0.03, n = Math.max(3, Math.ceil(ms / 1000 / BEAT));
    var BASSI = [[131, 98], [98, 123]], ACC = [[262, 330, 392], [247, 294, 349]];
    var MEL = [523, 659, 784, 784, 659, 523, 587, 698, 784, 698, 587, 494, 523, 659, 784, 1047, 784, 659, 587, 698, 988, 784, 587, 523];
    function suona(f, t, d, tipo, vol) {
      var o = c.createOscillator(), g = c.createGain();
      o.type = tipo; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + d + 0.03);
    }
    try {
      for (var b = 0; b < n; b++) {
        var t = t0 + b * BEAT, bar = Math.floor(b / 3) % 2, pos = b % 3;
        if (pos === 0) suona(BASSI[bar][Math.floor(b / 6) % 2], t, 0.24, "triangle", 0.26);
        else ACC[bar].forEach(function (f) { suona(f, t, 0.08, "square", 0.022); });
        suona(MEL[b % MEL.length], t, 0.15, "triangle", 0.07);
      }
    } catch (e) {}
    return { ferma: function () { try { out.gain.cancelScheduledValues(c.currentTime); out.gain.setValueAtTime(0.0001, c.currentTime); setTimeout(function () { try { out.disconnect(); } catch (e) {} }, 60); } catch (e) {} } };
  }
  function aah(A, box, x, y, testo) {
    var b = A.el("span", { class: "pza-aah", text: testo || "Aaaah!" });
    b.style.left = Math.round(x) + "px"; b.style.top = Math.round(y) + "px";
    box.appendChild(b); setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 1600);
  }

  // =====================================================================
  // 🧗 L'ALPINISTA
  // =====================================================================
  var ALP = { vetta: 25, pct: 4, sec: 45, passoMs: 140, quadro: 2000, riga: 230, tabella: 2300, base: 550, perPasso: 15, min: 100, vettaPiena: 200 };
  function passiAlp(v, prezzo, passo) {
    if (v == null || !(v > 0)) return ALP.vetta;
    var d = Math.abs(v - prezzo);
    if (d <= passo + 1e-9) return 0;
    return Math.min(ALP.vetta, Math.floor(Math.min(1, d / prezzo) * 100 / ALP.pct + 1e-9));
  }
  // quanto dura la rivelazione (la stessa scaletta di rivela: l'host aspetta tanto così)
  function tempiAlp(riv) {
    var t = 900, pos = {}, giu = {}, prod = riv.prod || [], g = riv.g || [];
    g.forEach(function (x) { pos[x.id] = 0; });
    prod.forEach(function (p, i) {
      t += 500 + (Z().durataConta ? Z().durataConta(p.prezzo, 220) : 1500) + 700;
      var mx = 0, cade = false;
      g.forEach(function (x) {
        if (giu[x.id]) return;
        var add = (x.p || [])[i] || 0, sale = Math.min(add, ALP.vetta + 1 - pos[x.id]);
        mx = Math.max(mx, sale); pos[x.id] += sale;
        if (pos[x.id] > ALP.vetta) { giu[x.id] = 1; cade = true; }
      });
      t += mx * ALP.passoMs + (cade ? 1500 : 0) + 600;
    });
    return t + ALP.quadro + g.length * ALP.riga + ALP.tabella;
  }

  PREMI.alpinista = {
    nome: "L'Alpinista", icona: "🧗", ordine: 2,
    regola: "Scrivi 3 prezzi: più sbagli, più sali. Oltre la vetta cadi dal burrone!",
    aiuto: "✍️ Ogni errore lo fa salire",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Scrivi il prezzo di 3 prodotti, uno dopo l'altro. Ogni errore fa salire l'alpinista: se supera la vetta cade e fai 0. Più resta in basso, più punti: fino a 550, +200 se li indovini tutti e tre.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "Scrivi il prezzo di 3 prodotti, uno dopo l'altro. Più sbagli, più l'alpinista sale la montagna: se va oltre la vetta, cade giù.",
    es: "Costa 10 € e scrivi 12 € → hai sbagliato di poco: l'alpinista sale di qualche passo.",
    pt: "Più resta in basso, più punti: fino a 550. Tutti e tre quasi giusti: +200. Se cade: 0.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = [], cats = [];
      for (var i = 0; i < 3; i++) {
        var x = P.pesca(function (p) { return p.prezzo >= 1 && p.prezzo < 100 && cats.indexOf(p.cat) < 0; }, 1)[0]
          || P.pesca(function (p) { return p.prezzo < 100; }, 1)[0] || P.pesca(null, 1)[0];
        if (x) { prod.push(x); cats.push(x.cat); }
      }
      return { prod: prod, r: {}, ms: {} };
    },
    tempo: function () { return ALP.sec; },
    pubblico: function (st) {
      var n = {}; Object.keys(st.r).forEach(function (id) { n[id] = st.r[id].filter(function (v) { return v != null; }).length; });
      return { prod: st.prod.map(pubProd), n: n };
    },
    mossa: function (st, id, m, P) {
      var i = Math.floor(+m.i), v = P.tondo2(+m.v);
      if (!(i >= 0 && i < st.prod.length) || !(v > 0) || v > 9999999) return;
      var r = st.r[id] || (st.r[id] = []);
      while (r.length < st.prod.length) r.push(null);
      if (r[i] != null) return;
      r[i] = v; st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      if (r.every(function (x) { return x != null; })) P.fatto(id);
    },
    privatoDi: function (st, id) { return { mie: st.r[id] || [] }; },
    fine: function (st, P) {
      var punti = {}, g = [];
      P.ids.forEach(function (id) {
        var r = st.r[id] || [], p = st.prod.map(function (x, i) { return passiAlp(r[i], x.prezzo, P.passo(x.prezzo)); });
        var tot = p.reduce(function (a, b) { return a + b; }, 0), giu = tot > ALP.vetta;
        var pt = giu ? 0 : Math.max(ALP.min, ALP.base - ALP.perPasso * tot) + (tot === 0 ? ALP.vettaPiena : 0);
        punti[id] = pt;
        g.push({ id: id, v: st.prod.map(function (x, i) { return r[i] != null ? r[i] : null; }), p: p, tot: tot, giu: giu, pt: pt, ms: st.ms[id] || 0 });
      });
      // chi resta su coi passi più bassi si porta a casa i 3 premi
      var su = g.filter(function (x) { return !x.giu; }).sort(function (a, b) { return a.tot - b.tot || a.ms - b.ms; }), carrello = {};
      if (su.length) carrello[su[0].id] = st.prod.slice();
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, g: g } };
    },
    durata: function (riv) { return tempiAlp(riv); },
    bot: function (st, bot, P) {
      var t = 2500 + P.rnd() * 3500, lento = bot.livello === "facile" ? 1.4 : bot.livello === "difficile" ? 0.8 : 1;
      return st.prod.map(function (p, i) {
        var m = { ms: Math.round(Math.min(42000, t)), m: { i: i, v: stima(P, p.prezzo, bot.livello) } };
        t += (4500 + P.rnd() * 6000) * lento;
        return m;
      });
    },

    // ---------------- ogni telefono ----------------
    // il maxischermo mentre si gioca: il prodotto che stai prezzando (chi guarda: tutti e 3) e chi è a che punto
    schermo: function (A) {
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [];
      var testa = A.testa("L'Alpinista");
      var cur = el("div", { class: "pza-cur" }), tre = el("div", { class: "pza-tre" }), ch = el("div", { "data-sacr": "2" });
      A.sch.appendChild(testa); A.sch.appendChild(cur); A.sch.appendChild(tre); A.sch.appendChild(ch);
      var dots = prod.map(function (p, i) { var d = el("span", { class: "pza-dot" }, [ el("b", { text: String(i + 1) }), Z().figura(el, p, "") ]); tre.appendChild(d); return d; });
      function stato(id) { var n = ((A.pub || {}).n || {})[id] || 0; return { tx: n >= prod.length ? "✅" : n + "/" + prod.length, ok: n >= prod.length }; }
      chips(A, ch, pub, stato);
      function tutti() {
        svuota(cur); testa.dici("L'Alpinista");
        var g = A.tessere(prod, { num: true, fermo: true });
        cur.appendChild(g); cur.classList.add("pieno"); tre.hidden = true; g.adatta();
      }
      function mostra(i, mie) {
        i = Math.max(0, Math.min(prod.length - 1, i));
        testa.dici("L'Alpinista · " + (i + 1) + " di " + prod.length);
        svuota(cur); cur.classList.add("pieno"); var s = A.scheda(prod[i], { cls: "media grande" }); s.classList.add("pza-entra"); cur.appendChild(s);
        tre.hidden = false;
        dots.forEach(function (d, j) { d.classList.toggle("ok", !!(mie && mie[j] != null)); d.classList.toggle("ora", j === i); });
      }
      var gioca = A.io != null && A.giocatori.some(function (g) { return g.id === A.io; }) && A.locale !== "telefono";
      if (gioca) mostra(0, []); else tutti();
      LEGAMI.alp = { vivo: function () { return testa.isConnected; }, mostra: mostra, tutti: tutti };
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, stato); } };
    },
    pannello: function (A) {
      var el = A.el, prod = (A.pub || {}).prod || [], i = 0, mie = [], chiuso = false, tast = null;
      var box = el("div", { class: "pza-alp-pan" });
      A.pan.appendChild(box);
      function legame() { var L = LEGAMI.alp; return L && L.vivo() ? L : null; }
      function apri() {
        while (i < prod.length && mie[i] != null) i++;
        var L = legame(); if (L) L.mostra(Math.min(i, prod.length - 1), mie);
        if (i >= prod.length) { chiudi("✅ Fatto!"); return; }
        var p = prod[i], k = i, ultimo = i === prod.length - 1;
        tast = A.tastierino({ cent: !!p.cent, testoFatto: ultimo ? "✅ Fatto!" : "⏭️ Il prossimo…",
          testoOk: (ultimo ? "✅ L'ultimo!" : "🏷️ Questo!") + " · " + (k + 1) + " di " + prod.length,
          onOk: function (v) {
            if (chiuso || mie[k] != null) return false;
            mie[k] = v; A.invia({ i: k, v: v });
            setTimeout(function () { if (!chiuso && box.isConnected) { i = k + 1; apri(); } }, ultimo ? 0 : 420);
          } });
        svuota(box); box.appendChild(tast.el);
      }
      function chiudi(tx) {
        chiuso = true;
        if (tast) tast.blocca(tx);
        else { svuota(box); box.appendChild(el("p", { class: "pz-nota forte", text: tx })); }
      }
      apri();
      return {
        privato: function (m) {
          if (!m || !m.mie || chiuso) return;
          var nuovo = false; m.mie.forEach(function (v, j) { if (v != null && mie[j] == null) { mie[j] = v; nuovo = true; } });
          if (nuovo) { i = 0; apri(); }
        },
        tempo: function () { if (!chiuso) chiudi("⏰ Tempo scaduto"); }
      };
    },
    rivela: async function (A) {
      var el = A.el, riv = A.riv || {}, prod = riv.prod || [], g = riv.g || [];
      var testa = A.testa("L'Alpinista");
      var alto = el("div", { class: "pza-alto" }), monte = el("div", { class: "pza-monte" }), banner = el("div", { class: "pz-sotto pza-bn", text: "Tutti ai piedi della montagna…" });
      monte.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
        '<defs><linearGradient id="pzaRoccia" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a1887f"/><stop offset="1" stop-color="#4e342e"/></linearGradient></defs>' +
        '<polygon points="0,100 10,62 22,78 38,40 52,70 66,46 78,74 90,52 100,70 100,100" fill="rgba(255,255,255,.07)"/>' +
        '<polygon points="0,100 0,93 6,90 76,14 80,14 81,100" fill="url(#pzaRoccia)"/>' +
        '<polygon points="62,29.2 76,14 80,14 80.2,22 76,20 72,25 68,23.5 65,28" fill="#f1f3f5"/>' +
        '<polygon points="91,100 91.5,58 100,56 100,100" fill="url(#pzaRoccia)"/>' +
        '<line x1="6" y1="90" x2="76" y2="14" stroke="rgba(255,255,255,.5)" stroke-width="1.4" stroke-dasharray="1 1.8" vector-effect="non-scaling-stroke"/>' +
        '</svg>';
      var bandiera = el("span", { class: "pza-flag", text: "🚩" }), cartello = el("span", { class: "pza-cart", text: "⚠️" });
      monte.appendChild(bandiera); monte.appendChild(cartello);
      A.sch.appendChild(testa); A.sch.appendChild(alto); A.sch.appendChild(monte); A.sch.appendChild(banner);
      // sopra la montagna: il prodotto col prezzo e le risposte di tutti (già al loro posto, così la montagna non cambia misura)
      var rv = el("div", { class: "pza-prow" }), chipsBox = el("div", { class: "pz-tab fitto pza-voci" }), voci = {};
      alto.appendChild(rv); alto.appendChild(chipsBox);
      function prodotto(i) {
        var p = prod[i] || {}, conta = A.contachilometri(p.prezzo || 0, {});
        svuota(rv);
        rv.appendChild(A.miniprod(p));
        rv.appendChild(conta.el);
        return conta;
      }
      var altaRv = 0; prod.forEach(function (p, i) { prodotto(i); altaRv = Math.max(altaRv, rv.offsetHeight); });
      var conta0 = prodotto(0); if (altaRv) rv.style.minHeight = altaRv + "px";
      g.forEach(function (x) {
        var v = el("span", { class: "v", text: "…" }), ps = el("b", { class: "pza-ps" }), c = el("span", { class: "pz-och aspetta" }, [ A.fac(x.id), v, ps ]);
        voci[x.id] = { c: c, v: v, ps: ps }; chipsBox.appendChild(c);
        // per misurare: la risposta più lunga di ognuno (così dopo le righe non crescono e la montagna resta al suo posto)
        var lunga = "", pl = "";
        prod.forEach(function (p, i) { var t = x.v[i] != null ? A.fmtE(x.v[i]) : "—", q = x.p[i] === 0 ? "🎯" : "+" + x.p[i]; if ((t + q).length > (lunga + pl).length) { lunga = t; pl = q; } });
        v.textContent = lunga; ps.textContent = pl;
      });
      await A.dorme(60); if (!A.vivo()) return;
      g.forEach(function (x) { voci[x.id].v.textContent = "…"; voci[x.id].ps.textContent = ""; });
      // le misure della montagna (fisse per tutta la rivelazione)
      // (una riga di risposte di riserva: con le risposte vere le righe possono andare a capo una volta in più)
      var W = monte.clientWidth || 300, H = Math.max(110, (monte.clientHeight || 160) - (g.length > 2 ? 30 : 0));
      monte.style.height = H + "px"; monte.style.flex = "0 0 auto";
      var B = { x: 0.06 * W, y: 0.90 * H }, S = { x: 0.76 * W, y: 0.14 * H };
      bandiera.style.transform = "translate(" + Math.round(S.x - 4) + "px," + Math.round(S.y - 30) + "px)";
      cartello.style.transform = "translate(" + Math.round(0.80 * W + 2) + "px," + Math.round(S.y - 24) + "px)";
      var dx = S.x - B.x, dy = S.y - B.y, len = Math.sqrt(dx * dx + dy * dy) || 1, nx = dy / len, ny = -dx / len;
      var FAC = Math.max(20, Math.min(30, Math.round(H * 0.13))), n = g.length;
      var av = {}, pos = {}, giu = {}, detti = {};
      g.forEach(function (x, j) {
        var c = el("span", { class: "pza-alp" }, [ A.fac(x.id) ]);
        c.style.width = c.style.height = FAC + "px"; c.style.zIndex = String(10 + j);
        c.style.setProperty("--col", COLORI[j % COLORI.length]);
        var off = (j - (n - 1) / 2) * Math.min(FAC * 0.8, 120 / Math.max(1, n));   // (21 nov 2026: a ventaglio, prima in 6 erano un mucchio solo)
        av[x.id] = { el: c, ox: nx * off, oy: ny * off }; pos[x.id] = 0;
        monte.appendChild(c); metti(x.id, 0);
      });
      function metti(id, s) {
        var a = av[id], u = Math.min(s, ALP.vetta) / ALP.vetta;
        var x = B.x + dx * u + a.ox - FAC / 2, y = B.y + dy * u + a.oy - FAC;
        x = Math.max(2, Math.min(W - FAC - 2, x)); y = Math.max(0, Math.min(H - FAC, y));   // (21 nov 2026: mai fuori dalla montagna: in 6 il primo era tagliato a sinistra)
        a.el.style.transform = "translate(" + Math.round(x) + "px," + Math.round(y) + "px)";
      }
      function cade(id) {
        var a = av[id]; giu[id] = 1;
        a.el.classList.add("salta");
        a.el.style.transform = "translate(" + Math.round(0.84 * W) + "px," + Math.round(S.y - FAC - 14) + "px)";
        setTimeout(function () {
          if (!A.vivo()) return;
          var f = A.fac(id, "triste"); svuota(a.el); a.el.appendChild(f);
          a.el.classList.remove("salta"); a.el.classList.add("cade");
          a.el.style.transform = "translate(" + Math.round(0.855 * W) + "px," + Math.round(H - FAC * 0.7) + "px) rotate(380deg)";
        }, 260);
        aah(A, monte, 0.70 * W, S.y + 6, eTu(A, id) ? "Aaaah! 😱" : "Aaaah!");
        A.FX.whoosh(); A.ST.pubblico(A.S, "ohh");
        if (mioTelefono(A, id)) A.vibra([60, 40, 120]);
      }
      await A.dorme(840); if (!A.vivo()) return;
      for (var i = 0; i < prod.length; i++) {
        testa.dici("L'Alpinista · " + (i + 1) + " di " + prod.length);
        var conta = i ? prodotto(i) : conta0;
        g.forEach(function (x) { var o = voci[x.id]; o.v.textContent = giu[x.id] ? "💥" : "…"; o.ps.textContent = ""; o.c.className = "pz-och aspetta"; });
        banner.textContent = "Quanto costa?";
        A.ST.FX.rullo(1.0);
        await A.dorme(500); if (!A.vivo()) return;
        await conta.via(220); if (!A.vivo()) return;
        // le risposte di tutti, coi passi che valgono
        g.forEach(function (x) {
          var v = x.v[i], ps = x.p[i], o = voci[x.id];
          o.v.textContent = v != null ? A.fmtE(v) : "—"; o.ps.textContent = ps === 0 ? "🎯" : "+" + ps;
          o.c.className = "pz-och pza-pop" + (ps === 0 ? " ok" : "");
        });
        banner.textContent = g.some(function (x) { return x.p[i] === 0; }) ? "🎯 Preso preciso: non si muove!" : "Si sale!";
        await A.dorme(700); if (!A.vivo()) return;
        // si sale tutti insieme, un passo alla volta
        var add = {}, mx = 0, cadeQui = false;
        g.forEach(function (x) { if (giu[x.id]) return; add[x.id] = Math.min(x.p[i] || 0, ALP.vetta + 1 - pos[x.id]); mx = Math.max(mx, add[x.id]); });
        var musica = mx ? tirolese(mx * ALP.passoMs) : null;
        for (var s = 0; s < mx; s++) {
          if (!A.vivo()) { if (musica) musica.ferma(); return; }
          g.forEach(function (x) {
            if (giu[x.id] || !(add[x.id] > s)) return;
            pos[x.id]++;
            if (pos[x.id] > ALP.vetta) { cadeQui = true; cade(x.id); } else metti(x.id, pos[x.id]);
          });
          await A.dorme(ALP.passoMs);
        }
        if (musica) musica.ferma();
        if (cadeQui) {
          var caduti = g.filter(function (x) { return giu[x.id] && add[x.id] && !detti[x.id]; });
          caduti.forEach(function (x) { detti[x.id] = 1; });
          banner.textContent = caduti.length === 1 ? "💥 " + frase(A, caduti[0].id, "Giù dal burrone!", "vola giù dal burrone!") : "💥 Giù dal burrone: " + caduti.map(function (x) { return A.nome(x.id); }).join(", ") + "!";
          banner.classList.remove("pza-scuoti"); void banner.offsetWidth; banner.classList.add("pza-scuoti");
          await A.dorme(1500); if (!A.vivo()) return;
        }
        await A.dorme(600); if (!A.vivo()) return;
      }
      // com'è finita: in vetta, ancora su o giù
      g.forEach(function (x) {
        if (giu[x.id]) return;
        var a = av[x.id]; svuota(a.el); a.el.appendChild(A.fac(x.id, x.tot === 0 ? "evviva" : "esulta"));
      });
      testa.dici("L'Alpinista");
      var ord = g.slice().sort(function (a, b) { return (a.giu - b.giu) || (a.tot - b.tot) || (a.ms - b.ms); });
      var vetta = ord.filter(function (x) { return !x.giu && x.tot === 0; }), primo = ord[0];
      banner.classList.remove("pza-scuoti");
      if (vetta.length) {
        banner.className = "pz-banner oro pza-bn";
        banner.textContent = vetta.length === 1 ? "🏔️ " + frase(A, vetta[0].id, "Sei in vetta senza un passo!", "in vetta senza un passo!") : "🏔️ In vetta senza un passo!";
        A.FX.din(); A.ST.pubblico(A.S, "ovazione"); A.ST.coriandoli();
        if (vetta.some(function (x) { return mioTelefono(A, x.id); })) A.vibra([30, 40, 70]);
      } else if (primo && !primo.giu) {
        banner.className = "pz-banner pza-bn";
        banner.textContent = "🧗 " + frase(A, primo.id, "Sei il re della montagna!", "è il re della montagna!");
        A.ST.pubblico(A.S, "applauso");
      } else {
        banner.className = "pz-banner no pza-bn";
        banner.textContent = "😱 Tutti giù dal burrone!";
        A.FX.trombone(); A.ST.pubblico(A.S, "ohh");
      }
      await A.dorme(ALP.quadro); if (!A.vivo()) return;
      // poi la tabella: passi e punti di tutti (al posto della montagna)
      monte.style.display = "none"; svuota(alto);
      var due = ord.length > 4, righe = el("div", { class: "pz-righe" + (due ? " due" : "") });
      alto.appendChild(righe);
      for (var q = 0; q < ord.length; q++) {
        var x = ord[q], pt = (A.punti || {})[x.id] != null ? A.punti[x.id] : x.pt;
        var r = el("div", { class: "pz-riga " + (x.giu ? "sopra" : x.tot === 0 ? "giusto" : "sotto") }, [ A.fac(x.id, x.giu ? "triste" : "esulta"), el("span", { class: "nm", text: A.nome(x.id) }),
          el("span", { class: "v", text: (x.giu ? "💥 " : "") + x.tot + (due ? "" : x.tot === 1 ? " passo" : " passi") }), el("span", { class: "bd", text: x.giu ? (due ? "" : "giù") : x.tot === 0 ? "🏔️" : "" }) ]);
        if (pt) r.appendChild(el("span", { class: "pt", text: "+" + A.fmtN(pt) }));
        righe.appendChild(r); void r.offsetWidth; r.classList.add("su"); A.FX.toc(520 + q * 60);
        await A.dorme(ALP.riga); if (!A.vivo()) return;
      }
      await A.dorme(ALP.tabella);
    }
  };

  // =====================================================================
  // 📊 METTILI IN ORDINE
  // =====================================================================
  var ORD = { n: 5, sec: 30, aPosto: 70, tutti: 100, distanza: 1.15, ventaglio: 12 };
  function giustoOrd(prod) { return prod.map(function (p, i) { return i; }).sort(function (a, b) { return prod[a].prezzo - prod[b].prezzo; }); }
  function contaGiusti(l, giusto) { var n = 0; for (var i = 0; i < giusto.length; i++) if (l && l[i] === giusto[i]) n++; return n; }
  function permutazione(l, n) {
    if (!Array.isArray(l) || l.length !== n) return false;
    var visti = {}; for (var i = 0; i < n; i++) { var x = l[i]; if (!(x >= 0 && x < n) || x !== Math.floor(x) || visti[x]) return false; visti[x] = 1; }
    return true;
  }
  var TORD = { prima: 900, prezzo: 620, pausa: 500, corsa: 2100, esito: 1300, fine: 2300 };
  function tempiOrd(riv) { return TORD.prima + ORD.n * TORD.prezzo + TORD.pausa + 300 + TORD.corsa + TORD.esito + TORD.fine; }

  PREMI.ordine = {
    nome: "Mettili in ordine", icona: "📊", ordine: 3,
    regola: "Tocca due prodotti per scambiarli: dal meno caro in alto al più caro in basso.",
    aiuto: "⬆️ Dal meno caro al più caro",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Metti 5 prodotti in fila, dal meno caro in alto al più caro in basso: tocca due prodotti per scambiarli di posto. 70 punti per ogni prodotto al posto giusto, +100 se sono tutti giusti.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "5 prodotti in colonna. Tocca un prodotto e poi un altro per scambiarli: in alto il meno caro, in fondo il più caro.",
    es: "In alto il caffè (3 €), poi le cuffie (80 €), in fondo la bici (400 €).",
    pt: "70 punti per ogni prodotto al posto giusto, +100 se sono tutti giusti.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var scelti = [];
      function lontano(x) { return scelti.every(function (s) { var r = x.prezzo / s.prezzo; return r >= ORD.distanza || r <= 1 / ORD.distanza; }); }
      function stretto(x) { var l = scelti.map(function (s) { return s.prezzo; }).concat([x.prezzo]); return Math.max.apply(null, l) / Math.min.apply(null, l) <= ORD.ventaglio; }
      var p1 = P.pesca(function (x) { return x.prezzo >= 1; }, 1)[0] || P.pesca(null, 1)[0];
      if (p1) scelti.push(p1);
      var cat = p1 ? p1.cat : null;
      var prove = [
        function (x) { return x.cat === cat && lontano(x) && stretto(x); },
        function (x) { return x.cat === cat && lontano(x); },
        function (x) { return lontano(x) && stretto(x); },
        function (x) { return lontano(x); }
      ];
      while (scelti.length < ORD.n) {
        var y = null;
        for (var q = 0; q < prove.length && !y; q++) y = P.pesca(prove[q], 1)[0] || null;
        if (!y) break;
        scelti.push(y);
      }
      var prod = P.mescola(scelti), giusto = giustoOrd(prod), start = null;
      // la colonna di partenza: in disordine (al massimo un posto già giusto)
      for (var t = 0; t < 40; t++) { start = P.mescola(prod.map(function (p, i) { return i; })); if (contaGiusti(start, giusto) <= 1) break; }
      return { prod: prod, start: start, l: {}, f: {}, ms: {} };
    },
    tempo: function () { return ORD.sec; },
    pubblico: function (st) { return { prod: st.prod.map(pubProd), start: st.start, fatti: Object.keys(st.f) }; },
    mossa: function (st, id, m, P) {
      if (!permutazione(m.l, st.prod.length)) return;
      st.l[id] = m.l.slice(); st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      if (m.fine) { st.f[id] = 1; P.fatto(id); }
    },
    privatoDi: function (st, id) { return st.l[id] ? { l: st.l[id], f: !!st.f[id] } : null; },
    fine: function (st, P) {
      var giusto = giustoOrd(st.prod), punti = {}, g = [];
      P.ids.forEach(function (id) {
        var l = st.l[id] || null, n = l ? contaGiusti(l, giusto) : 0;
        var pt = n * ORD.aPosto + (n === st.prod.length ? ORD.tutti : 0);
        punti[id] = pt;
        g.push({ id: id, l: l, n: n, pt: pt, ms: st.ms[id] || 0, f: !!st.f[id] });
      });
      // il più bravo (con almeno 3 posti giusti) si porta a casa il più caro dei cinque
      var best = g.filter(function (x) { return x.n >= 3; }).sort(function (a, b) { return b.n - a.n || a.ms - b.ms; })[0], carrello = {};
      if (best) carrello[best.id] = [st.prod[giusto[giusto.length - 1]]];
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, giusto: giusto, g: g } };
    },
    durata: function (riv) { return tempiOrd(riv); },
    bot: function (st, bot, P) {
      // (mettere in ordine prezzi vicini è più difficile di quanto sembri: il Bot ci mette più dubbio)
      var st2 = st.prod.map(function (p) { return stima(P, p.prezzo, bot.livello, 1.7); });
      var l = st.prod.map(function (p, i) { return i; }).sort(function (a, b) { return st2[a] - st2[b]; });
      var ms = (bot.livello === "difficile" ? 7000 : bot.livello === "medio" ? 10000 : 13000) + P.rnd() * 9000;
      return [ { ms: Math.round(ms * 0.55), m: { l: P.mescola(l.slice()) } }, { ms: Math.round(Math.min(28500, ms)), m: { l: l, fine: 1 } } ];
    },

    // ---------------- ogni telefono ----------------
    // il maxischermo: i 5 prodotti in riquadri con la descrizione, nell'ordine che hai adesso (1 = il meno caro), quello
    // toccato illuminato; sotto chi ha finito. Mentre il pannello è su i riquadri si nascondono: i prodotti, con la
    // descrizione, stanno nelle righe del pannello, una volta sola (24 ott 2026, il proprietario: «non fare che stanno
    // sopra e sotto le cose… così abbiamo tutto più largo»). Li vede chi guarda e chi ha finito.
    schermo: function (A) {
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [];
      var testa = A.testa("Mettili in ordine"), ch = el("div", { "data-sacr": "2" });
      var g = A.tessere(prod, { num: true, fermo: true, cls: "pza-lista" });
      A.sch.appendChild(testa); A.sch.appendChild(g); A.sch.appendChild(el("div", { class: "pz-sotto pza-aiuto", text: "1 = il meno caro · " + prod.length + " = il più caro", "data-sacr": "1" })); A.sch.appendChild(ch);
      function stato(id) { var f = ((A.pub || {}).fatti || []).indexOf(id) >= 0; return { tx: f ? "✅" : "…", ok: f }; }
      chips(A, ch, pub, stato);
      function mostra(j) { g.tessere.forEach(function (t, i) { t.classList.toggle("sel", i === j); }); }
      function tutti(l) { g.ordina(l || pub.start || prod.map(function (p, i) { return i; })); mostra(-1); }
      tutti(); g.adatta();
      LEGAMI.ord = { vivo: function () { return testa.isConnected; }, mostra: mostra, tutti: tutti };
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, stato); } };
    },
    pannello: function (A) {
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [], l = (pub.start || prod.map(function (p, i) { return i; })).slice();
      var sel = -1, chiuso = false, toInvio = null, mosso = false;
      var lista = el("div", { class: "pza-ord" }), righe = [], figs = [];
      function legame() { var L = LEGAMI.ord; return L && L.vivo() ? L : null; }
      l.forEach(function (j, pos) {
        var nb = el("span", { class: "nb" }, [ el("b", { text: String(pos + 1) }), pos === 0 ? el("small", { text: "meno caro" }) : pos === l.length - 1 ? el("small", { text: "più caro" }) : null ]);
        var b = el("button", { class: "pza-or", type: "button" }, [ nb, el("span", { class: "fs", style: "display:contents" }), el("span", { class: "tx" }, [ el("b", { class: "n" }), el("small", { class: "ds" }) ]) ]);
        premi(b, function () { tocca(pos); });
        righe.push(b); lista.appendChild(b); disegna(pos);
      });
      var ok = el("button", { class: "pz-ok pza-fatto", type: "button", text: "✅ Fatto!" });
      premi(ok, function () { if (chiuso) return; A.vibra(12); manda(true); blocca("✅ Fatto!"); });
      A.pan.appendChild(lista); A.pan.appendChild(ok);
      var L0 = legame(); if (L0) L0.tutti(l);   // (sullo stesso telefono: si riparte dai 5 prodotti, non da quello toccato da chi c'era prima)
      // la foto di ogni prodotto si fa una volta sola e si sposta da una riga all'altra (niente foto che si ricaricano)
      function disegna(pos) {
        var p = prod[l[pos]] || {}, r = righe[pos], posto = r.querySelector(".fs"), f = figs[l[pos]] || (figs[l[pos]] = Z().figura(el, p, "e"));
        if (posto.firstChild !== f) { posto.textContent = ""; posto.appendChild(f); }
        r.querySelector(".n").textContent = p.nome || "";
        var ds = r.querySelector(".ds"); ds.textContent = p.desc || ""; ds.hidden = !p.desc;
      }
      function scivola(r, d) { r.style.transition = "none"; r.style.transform = "translateY(" + d + "px)"; void r.offsetWidth; r.style.transition = ""; r.style.transform = ""; }
      function tocca(pos) {
        if (chiuso) return;
        if (sel < 0) { sel = pos; righe[pos].classList.add("sel"); A.vibra(8); A.FX.toc(700); var L = legame(); if (L) L.mostra(l[pos]); return; }
        if (sel === pos) { righe[pos].classList.remove("sel"); sel = -1; var L1 = legame(); if (L1) L1.mostra(-1); return; }
        var a = sel; sel = -1; righe[a].classList.remove("sel");
        var ya = righe[a].offsetTop, yb = righe[pos].offsetTop;
        var x = l[a]; l[a] = l[pos]; l[pos] = x; disegna(a); disegna(pos);
        scivola(righe[a], yb - ya); scivola(righe[pos], ya - yb);
        A.vibra(10); A.FX.toc(990); mosso = true;
        var L2 = legame(); if (L2) L2.tutti(l);
        clearTimeout(toInvio);
        var resta = (A.fine || 0) - Date.now();
        if (resta > 0 && resta < 4000) manda(false); else toInvio = setTimeout(function () { manda(false); }, 1000);
      }
      function manda(fine) {
        clearTimeout(toInvio); toInvio = null;
        if (!fine && !mosso) return;
        A.invia(fine ? { l: l.slice(), fine: 1 } : { l: l.slice() });
      }
      function blocca(tx) {
        chiuso = true; ok.disabled = true; ok.textContent = tx; lista.classList.add("chiuso");
        if (sel >= 0) { righe[sel].classList.remove("sel"); sel = -1; var L4 = legame(); if (L4) L4.mostra(-1); }
      }
      return {
        privato: function (m) {
          if (!m || !permutazione(m.l, prod.length) || chiuso) return;
          l = m.l.slice(); mosso = true; righe.forEach(function (r, pos) { disegna(pos); });
          var L3 = legame(); if (L3) L3.tutti(l);
          if (m.f) blocca("✅ Fatto!");
        },
        // il tempo è finito: vale l'ordine che si vede (se hai toccato qualcosa)
        tempo: function () { if (chiuso) return; if (mosso) manda(false); blocca("⏰ Tempo scaduto"); }
      };
    },
    rivela: async function (A) {
      var el = A.el, riv = A.riv || {}, prod = riv.prod || [], giusto = riv.giusto || [], g = riv.g || [];
      var testa = A.testa("Mettili in ordine");
      var fila = A.tessere(giusto.map(function (j) { return prod[j] || {}; }), { num: true, extra: function (p, pos, t) { t._tag = A.Z.cartellino(el, A.fmtE(p.prezzo || 0)); return t._tag; } });
      var golf = el("div", { class: "pza-golf" }), banner = el("div", { class: "pz-sotto pza-bn", text: "Dal meno caro al più caro…" });
      A.sch.appendChild(testa); A.sch.appendChild(fila); A.sch.appendChild(golf); A.sch.appendChild(banner);
      var tags = fila.tessere.map(function (t, pos) { t.style.animationDelay = (pos * 0.07) + "s"; return t._tag; });
      // le corsie del minigolf (una per giocatore)
      var corsie = g.map(function (x, j) {
        var palla = el("span", { class: "pza-palla" }), lab = el("span", { class: "pza-lab" });
        palla.style.setProperty("--col", COLORI[j % COLORI.length]);
        var trk = el("span", { class: "pza-trk" }, [ el("span", { class: "pza-buca" }), palla ]);
        var r = el("div", { class: "pza-lane" }, [ A.fac(x.id), el("span", { class: "nm", text: A.nome(x.id) }), trk, lab ]);
        golf.appendChild(r);
        return { x: x, r: r, palla: palla, trk: trk, lab: lab };
      });
      golf.classList.toggle("fitto", g.length > 5);
      fila.adatta();
      A.ST.FX.rullo(0.9);
      await A.dorme(TORD.prima); if (!A.vivo()) return;
      for (var i = 0; i < tags.length; i++) {
        tags[i].classList.add("su"); A.FX.toc(560 + i * 90);
        await A.dorme(TORD.prezzo); if (!A.vivo()) return;
      }
      banner.textContent = "⛳ Più posti giusti, più vicino alla buca!";
      await A.dorme(TORD.pausa); if (!A.vivo()) return;
      golf.classList.add("su");
      await A.dorme(300); if (!A.vivo()) return;
      // tutte le palline rotolano insieme
      A.ST.FX.rullo(1.6);
      corsie.forEach(function (c) {
        var w = c.trk.clientWidth - c.palla.offsetWidth - 2, fr = c.x.n / ORD.n;
        if (c.x.n === ORD.n) fr = 1;
        c.palla.style.transitionDelay = (Math.random() * 0.25).toFixed(2) + "s";
        c.palla.style.transform = "translateX(" + Math.max(0, Math.round(w * fr)) + "px)";
      });
      await A.dorme(TORD.corsa); if (!A.vivo()) return;
      var buche = [];
      corsie.forEach(function (c, q) {
        var x = c.x, pt = (A.punti || {})[x.id] != null ? A.punti[x.id] : x.pt;
        c.lab.textContent = x.l ? x.n + "/" + ORD.n : "—";
        if (pt) c.r.appendChild(el("span", { class: "pt", text: "+" + A.fmtN(pt) }));
        c.r.classList.add(x.n === ORD.n ? "buca" : x.n >= 3 ? "bene" : "male");
        if (x.n === ORD.n) { c.palla.classList.add("dentro"); buche.push(x); }
        var f = c.r.querySelector(".fac"); if (f) { var nf = A.fac(x.id, x.n === ORD.n ? "evviva" : x.n >= 3 ? "esulta" : "triste"); f.parentNode.replaceChild(nf, f); }
      });
      A.FX.toc(880);
      if (buche.length) { A.FX.din(); A.ST.coriandoli(); A.ST.pubblico(A.S, "ovazione"); if (buche.some(function (x) { return mioTelefono(A, x.id); })) A.vibra([30, 40, 70]); }
      await A.dorme(TORD.esito); if (!A.vivo()) return;
      var best = g.slice().sort(function (a, b) { return b.n - a.n || a.ms - b.ms; })[0];
      if (buche.length) {
        banner.className = "pz-banner oro pza-bn";
        banner.textContent = buche.length === 1 ? "⛳ Buca in uno! " + (eTu(A, buche[0].id) ? "Che colpo!" : A.nome(buche[0].id) + "!") : "⛳ Buca in uno per " + buche.length + "!";
      } else if (best && best.n >= 3) {
        banner.className = "pz-banner pza-bn";
        banner.textContent = "🏌️ " + frase(A, best.id, "Ci vai più vicino tu: " + best.n + " su 5!", "ci va più vicino: " + best.n + " su 5!");
        A.ST.pubblico(A.S, "applauso");
      } else {
        banner.className = "pz-banner no pza-bn";
        banner.textContent = "😅 Che confusione coi prezzi!";
        A.FX.trombone(); A.ST.pubblico(A.S, "ohh");
      }
      await A.dorme(TORD.fine);
    }
  };

  // ---------------- lo stile (una volta) ----------------
  function stile() {
    if (document.getElementById("sg-pza-css")) return;
    var s = document.createElement("style"); s.id = "sg-pza-css";
    s.textContent = [
      ".pza-pop{animation:pzPop .35s cubic-bezier(.3,1.6,.5,1)}",
      ".pza-entra{animation:pzaEntra .35s cubic-bezier(.3,1.4,.5,1) both}@keyframes pzaEntra{from{transform:scale(.92);opacity:0}to{transform:none;opacity:1}}",
      ".pza-cur{display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;min-height:0}.pza-cur.pieno{flex:1 1 0}",
      ".pza-aiuto{flex:0 0 auto;font-size:12px;color:var(--o-tenue)}",
      ".pza-tre{display:flex;gap:8px;justify-content:center}.pza-tre[hidden]{display:none}",
      ".pza-dot{display:flex;align-items:center;gap:4px;padding:2px 9px 2px 3px;border-radius:99px;background:rgba(255,255,255,.12);font-size:18px;transition:transform .2s}",
      ".pza-dot b{width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.2);font-size:12px;display:flex;align-items:center;justify-content:center}",
      ".pza-dot.ora{background:rgba(255,79,134,.3);box-shadow:0 0 0 2px var(--o-oro);transform:scale(1.08)}.pza-dot.ok b{background:var(--o-verde);color:var(--o-verde-testo)}",
      ".pza-alp-pan{display:flex;flex-direction:column}",
      // la montagna
      ".pza-alto{display:flex;flex-direction:column;align-items:center;gap:6px;width:100%}",
      ".pza-prow{display:flex;align-items:center;justify-content:center;gap:10px;max-width:100%}.pza-prow .pz-miniprod{min-width:0}.pza-prow .pz-conta{font-size:26px;padding:4px 8px;flex:0 0 auto}",
      ".pza-voci .pza-ps{font-size:11px;color:var(--o-rosso-testo)}.pza-voci .pz-och.ok .pza-ps{color:var(--o-verde)}",
      ".pza-monte{position:relative;flex:1 1 0;min-height:110px;width:100%;max-width:460px;overflow:hidden;border-radius:14px;background:linear-gradient(#3b5bdb33,#0b072400)}",
      ".pza-monte svg{position:absolute;inset:0;width:100%;height:100%;display:block}",
      ".pza-flag,.pza-cart{position:absolute;left:0;top:0;font-size:22px;line-height:1;pointer-events:none}.pza-cart{font-size:16px}",
      ".pza-alp{position:absolute;left:0;top:0;border-radius:50%;box-shadow:0 0 0 2px var(--col,#fff),0 2px 5px rgba(0,0,0,.5);background:rgba(20,12,60,.6);will-change:transform;transition:transform .13s linear}",
      ".pza-alp .fac{display:block;width:100%;height:100%;border-radius:50%;overflow:hidden}.pza-alp .fac svg{width:100%;height:100%;display:block}",
      ".pza-alp.salta{transition:transform .25s cubic-bezier(.2,1.6,.5,1)}",
      ".pza-alp.cade{transition:transform 1.05s cubic-bezier(.55,0,1,.6),opacity 1s;opacity:.8}",
      ".pza-aah{position:absolute;z-index:40;padding:3px 9px;border-radius:12px;background:#fff;color:#c92a2a;font-weight:900;font-size:15px;white-space:nowrap;pointer-events:none;animation:pzaAah 1.5s ease-out forwards}",
      "@keyframes pzaAah{0%{transform:scale(.3);opacity:0}15%{transform:scale(1.1);opacity:1}70%{transform:translateY(-10px);opacity:1}100%{transform:translateY(-22px);opacity:0}}",
      ".pza-bn{flex:0 0 auto;width:100%;max-width:440px;text-align:center;height:46px;display:flex;align-items:center;justify-content:center;line-height:1.15;overflow:hidden}.pz-banner.pza-bn{font-size:20px}.pz-banner.oro.pza-bn{font-size:22px}",
      ".pza-scuoti{animation:pzScuoti .4s}",
      // mettili in ordine: il pannello
      ".pza-ord{display:flex;flex-direction:column;gap:5px}",
      ".st-vista.pz-con-pan .pz-sch .pza-lista,.st-vista.pz-con-pan .pz-sch .pza-aiuto{display:none}",
      // mentre si gioca il pannello sale fin sotto il titolo: sopra niente nomi, le righe si dividono tutto lo spazio
      ".pz-pan.su:has(.pza-ord){top:calc(56px + env(safe-area-inset-top))}.st-vista.pz-con-pan:has(.pza-ord) .pz-sch [data-sacr]{position:absolute!important;width:0!important;height:0!important;overflow:hidden!important;visibility:hidden!important;pointer-events:none!important;margin:0!important;padding:0!important}",
      ".pz-pan:has(.pza-ord) .pz-premio-pan{flex:1 1 0;min-height:0;display:flex;flex-direction:column}.pz-pan .pza-ord{flex:1 1 0;min-height:0}.pz-pan .pza-ord .pza-or{flex:1 1 auto}",
      ".pza-or{position:relative;display:flex;align-items:center;gap:8px;min-height:clamp(40px,calc(var(--alt,640px) * .062),52px);padding:4px 10px 4px 4px;box-sizing:border-box;border:0;border-radius:12px;font:inherit;text-align:left;color:#1d1b3a;background:linear-gradient(#fff,#eceef8);box-shadow:inset 0 -3px 0 rgba(14,18,44,.25);cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:transform .28s cubic-bezier(.3,1.3,.5,1),box-shadow .15s;will-change:transform}",
      ".pza-or .nb{flex:0 0 46px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;color:#b0184f}.pza-or .nb b{font-size:17px}.pza-or .nb small{font-size:8.5px;font-weight:900;text-transform:uppercase;letter-spacing:.02em;margin-top:2px}",
      ".pza-or .e{flex:0 0 auto;font-size:clamp(28px,calc(var(--alt,640px) * .075),68px);line-height:1}",   // (sui telefoni alti le righe crescono; 20 nov 2026: un po' più piccole, a 640 la quinta riga finiva sotto «Fatto!»)
      ".pza-or .tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;overflow-wrap:break-word}.pza-or .n{font-weight:800;font-size:clamp(14px,calc(var(--alt,640px) * .022),19px);line-height:1.15}",
      ".pza-or .ds{font-size:clamp(12px,calc(var(--alt,640px) * .0175),15.5px);font-weight:600;color:#4c4a66;line-height:1.2}.pza-or.sel .ds{color:#5c3c00}",
      ".pza-or.sel{background:linear-gradient(#ffe6ee,#ffc4d6);box-shadow:0 0 0 3px #ff4f86,0 4px 14px rgba(224,34,90,.5);z-index:2}",
      ".pza-ord.chiuso .pza-or{opacity:.6;cursor:default}",
      ".pza-fatto{width:100%;height:clamp(40px,calc(var(--alt,640px) * .066),52px)}",
      // il minigolf
      ".pza-golf{display:flex;flex-direction:column;gap:4px;width:100%;max-width:440px;opacity:0;transform:translateY(12px);transition:opacity .3s,transform .35s}.pza-golf.su{opacity:1;transform:none}",
      ".pza-lane{position:relative;display:flex;align-items:center;gap:6px;height:clamp(26px,calc(var(--alt,640px) * .05),40px);padding:0 6px 0 2px;border-radius:12px;background:rgba(255,255,255,.08)}",
      ".pza-lane .fac{width:24px;height:24px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.14);flex:0 0 auto}.pza-lane .fac svg{width:100%;height:100%;display:block}",
      ".pza-lane .nm{flex:0 0 64px;min-width:0;font-weight:800;font-size:12.5px;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pza-trk{position:relative;flex:1;height:68%;border-radius:99px;background:repeating-linear-gradient(90deg,#2f9e44 0 14px,#37b24d 14px 28px);box-shadow:inset 0 2px 4px rgba(0,0,0,.35)}",
      ".pza-buca{position:absolute;right:4px;top:50%;width:13px;height:9px;margin-top:-4.5px;border-radius:50%;background:#05030f;box-shadow:0 0 0 2px rgba(255,255,255,.35)}",
      ".pza-buca:after{content:'⛳';position:absolute;left:3px;bottom:2px;font-size:13px;line-height:1}",
      ".pza-palla{position:absolute;left:1px;top:50%;width:12px;height:12px;margin-top:-6px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff,#dee2e6 70%);box-shadow:0 0 0 2px var(--col,#fff),0 2px 3px rgba(0,0,0,.45);will-change:transform;transition:transform 1.8s cubic-bezier(.15,.75,.3,1)}",
      ".pza-palla.dentro{opacity:.35;box-shadow:0 0 0 2px var(--col,#fff),0 0 12px var(--o-oro)}",
      ".pza-lab{flex:0 0 30px;text-align:right;font-weight:900;font-size:13px;color:var(--o-oro-testo)}",
      ".pza-lane.buca{background:rgba(255,79,134,.3);box-shadow:0 0 0 2px var(--o-oro)}.pza-lane.bene{background:rgba(52,209,122,.2)}.pza-lane.male .pza-lab{color:var(--o-rosso-testo)}",
      ".pza-lane .pt{flex:0 0 auto;font-size:11px;font-weight:900;color:var(--o-verde-testo);background:var(--o-verde);border-radius:99px;padding:0 6px;animation:pzPop .35s both}",
      ".pza-golf.fitto{gap:3px}.pza-golf.fitto .pza-lane{height:clamp(22px,calc(var(--alt,640px) * .04),34px)}.pza-golf.fitto .pza-lane .fac{width:18px;height:18px}.pza-golf.fitto .pza-lane .nm{font-size:11.5px;flex-basis:56px}",
      "@media (prefers-reduced-motion:reduce){.pza-entra,.pza-aah{animation:none}}"
    ].join("");
    document.head.appendChild(s);
  }
  // lo stile si aggiunge appena c'è la pagina (il file si carica prima del gioco)
  if (document.head) stile(); else document.addEventListener("DOMContentLoaded", stile);
})();

/* =========================================================
   «IL PREZZO È GIUSTO!» — giochi a premi (file b): «✋ È troppo!» e «🟡 Plinko», tutti insieme ognuno dal suo telefono.
   L'interfaccia dei giochi a premi è spiegata in js/games/prezzo-premi-piu.js («🔼🔽 Più o meno») e in
   scratchpad/giochi-nuovi/prezzo/interfaccia-premi.md. Questo file è già caricato da index.html e messo nella versione online.

   ✋ È TROPPO! (That's Too Much)
     Una cosa cara (sopra i 2.000 €). Sul telefono scorrono 10 prezzi che salgono (uno ogni 1,6 s): si tocca «✋ È TROPPO!»
     appena il prezzo SUPERA quello vero. Il primo prezzo sopra vale 600, uno dopo 450, due dopo 350, tre dopo 250, più
     tardi 150; un prezzo prima (troppo presto) 200, due prima 100, prima ancora o mai 0. (22 ott 2026: prima 400/250/150/50
     e troppo presto 0: in media dava 100 punti a testa contro i circa 300 degli altri giochi a premi; ora circa 240.)
     I 10 prezzi li fa il gioco (dal 50% al 155% del vero, a passi tondi, il vero tra il 3° e l'8°).
     Rete: nella foto la lista dei prezzi (mai il vero); ogni telefono li fa scorrere da sé con l'orologio del pannello
     (A.fine), e il tocco manda il NUMERO del prezzo che si vedeva: il ritardo della rete non conta.
     Sullo stesso telefono: da 2 a 4 tutti insieme, un bottone a testa (il pannello del primo turno manda i tocchi di tutti
     con { tutti, ord }); da 5 in su a turno, ognuno vede scorrere gli stessi prezzi da capo.
   🟡 PLINKO
     Prima i gettoni («Occhio al prezzo»): 3 cose piccole, per ognuna due prezzi, si tocca quello giusto (6 s l'una):
     1 gettone + 1 per ogni risposta giusta, e ogni risposta giusta vale anche +50. Poi si sceglie dove lasciarli (9 posti)
     e «Lascia!». L'host fa cadere tutti i gettoni tra i chiodini (12 file) e manda i percorsi nella rivelazione: tutti
     vedono la stessa caduta, tutti i gettoni insieme. Caselle 10 · 25 · 50 · 0 · 200 · 0 · 50 · 25 · 10. Sullo stesso
     telefono ognuno ha le sue 3 domande. (22 ott 2026: prima 10 · 50 · 100 · 0 · 500 e niente +50: in media 480 punti a testa,
     quasi tutti per fortuna; ora circa 320 come gli altri giochi a premi, e indovinare i prezzi conta di più.)
   Stile: classi col prefisso pzb- (più quelle pz- di prezzo-scena.js).
   ========================================================= */
(function () {
  "use strict";
  var PREMI = window.SG_PREZZO_PREMI = window.SG_PREZZO_PREMI || {};
  function Z() { return window.SGPrezzoScena || {}; }
  function tondo2(v) { return Math.round((+v || 0) * 100) / 100; }
  function intero(v) { v = Math.round(+v); return isFinite(v) ? v : null; }

  // ---------------- lo stile (una volta) ----------------
  function stile() {
    if (document.getElementById("sg-pzb-css")) return;
    var s = document.createElement("style"); s.id = "sg-pzb-css";
    s.textContent = [
      ".pz-sch.pzb-fitto{gap:6px}",
      ".pz-pan .pzb-tr-disp{display:none}",   // (25 ott: il prezzo che scorre si vede in grande sul maxischermo, nel pannello solo il tasto)
      // ✋ È troppo! — il maxischermo
      ".pzb-tr-big{display:flex;flex-direction:column;align-items:center;gap:3px}",
      ".pzb-tr-n{font-size:12px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--o-tenue);min-height:15px}",
      ".pzb-tr-p{display:inline-flex;align-items:center;justify-content:center;min-width:62%;padding:6px 18px;border-radius:10px 22px 22px 10px;background:var(--o-tasto);color:#fff;",
        "font-weight:900;font-size:clamp(30px,calc(var(--alt,640px) * .062),48px);line-height:1.1;font-variant-numeric:tabular-nums;box-shadow:0 6px 18px rgba(0,0,0,.45),inset 0 -4px 0 rgba(0,0,0,.15);white-space:nowrap}",
      ".pzb-tr-p.attesa{background:linear-gradient(#232944,#181c33);color:var(--o-oro-testo)}.pzb-tr-p.fine{background:linear-gradient(#ffc9c9,#ff8787);color:#5c0011}",
      ".pzb-tr-p.gira{animation:pzbGira .32s cubic-bezier(.3,1.5,.5,1)}",
      "@keyframes pzbGira{from{transform:scaleY(.15) translateY(-8px);opacity:.2}to{transform:none;opacity:1}}",
      ".pzb-tr-tacche{display:flex;gap:3px;width:min(300px,86%)}",
      ".pzb-tr-tacche i{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,.16);transition:background .2s}",
      ".pzb-tr-tacche i.on{background:var(--o-oro)}.pzb-tr-tacche i.ora{background:#fff;box-shadow:0 0 8px #fff}",
      // ✋ È troppo! — il pannello
      ".pzb-tr-pan{display:flex;flex-direction:column;gap:8px}",
      ".pzb-tr-disp{display:flex;align-items:center;justify-content:space-between;gap:8px;height:clamp(44px,calc(var(--alt,640px) * .075),60px);padding:0 14px;border-radius:14px;background:#05030f;box-shadow:inset 0 0 0 2px rgba(255,224,102,.35)}",
      ".pzb-tr-disp .n{font-size:12px;font-weight:900;color:#9aa5d8;white-space:nowrap}",
      ".pzb-tr-disp .v{font-family:'Courier New',ui-monospace,monospace;font-weight:900;font-size:clamp(24px,calc(var(--alt,640px) * .046),34px);color:#ffe066;white-space:nowrap}",
      ".pzb-tr-btn{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;height:clamp(112px,calc(var(--alt,640px) * .23),190px);border:0;border-radius:28px;",
        "font:inherit;font-weight:900;font-size:clamp(28px,calc(var(--alt,640px) * .055),40px);color:#fff;letter-spacing:.02em;background:radial-gradient(circle at 50% 30%,#ff8787,#e03131 55%,#a51111);",
        "box-shadow:inset 0 -8px 0 rgba(0,0,0,.28),inset 0 2px 0 rgba(255,255,255,.35),0 8px 24px rgba(224,49,49,.45);cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:transform .08s}",
      ".pzb-tr-btn small{font-size:13px;font-weight:800;opacity:.9;letter-spacing:0}",
      ".pzb-tr-btn:active{transform:scale(.96)}",
      ".pzb-tr-btn.vivo{animation:pzbBatte 1.6s ease-in-out infinite}",
      "@keyframes pzbBatte{0%,100%{transform:none}12%{transform:scale(1.035)}24%{transform:none}}",
      ".pzb-tr-btn.attesa{background:linear-gradient(#2f3763,#222849);box-shadow:inset 0 -6px 0 rgba(0,0,0,.25);font-size:24px}",
      ".pzb-tr-btn.fatto{background:linear-gradient(#69db7c,#2b8a3e);font-size:24px;animation:none}.pzb-tr-btn.niente{background:linear-gradient(#868e96,#495057);font-size:22px;animation:none}",
      // tutti insieme sullo stesso telefono: un bottone a testa
      ".pzb-tr-griglia{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px}",
      ".pzb-tr-bt{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;height:clamp(84px,calc(var(--alt,640px) * .15),126px);border:0;border-radius:20px;font:inherit;color:#fff;",
        "background:radial-gradient(circle at 50% 30%,#ff8787,#e03131 60%,#a51111);box-shadow:inset 0 0 0 4px var(--c,#fff),inset 0 -6px 0 rgba(0,0,0,.25);cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:transform .08s}",
      ".pzb-tr-bt:active{transform:scale(.95)}.pzb-tr-bt b{font-size:20px;font-weight:900}.pzb-tr-bt .chi{display:flex;align-items:center;gap:5px;font-size:13px;font-weight:900;max-width:100%}",
      ".pzb-tr-bt .chi .fac{width:24px;height:24px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.2);flex:0 0 auto}.pzb-tr-bt .chi .fac svg{width:100%;height:100%;display:block}",
      ".pzb-tr-bt .chi span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pzb-tr-bt.fatto{background:linear-gradient(#69db7c,#2b8a3e)}.pzb-tr-bt.attesa{background:linear-gradient(#2f3763,#222849)}.pzb-tr-bt.niente{background:linear-gradient(#868e96,#495057)}",
      ".pzb-tr-griglia.tre .pzb-tr-bt:last-child{grid-column:span 2}",
      // ✋ È troppo! — la rivelazione: la scala dei 10 prezzi
      ".pzb-scala{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-rows:repeat(5,auto);grid-auto-flow:column;gap:4px 6px;width:100%;max-width:440px}",
      ".pzb-rg{position:relative;display:flex;align-items:center;gap:5px;height:clamp(24px,calc(var(--alt,640px) * .043),32px);padding:0 6px 0 4px;border-radius:10px;background:rgba(255,255,255,.09);text-align:left;animation:pzSu .35s both;transition:background .25s,box-shadow .25s,opacity .25s}",
      ".pzb-rg .n{flex:0 0 auto;width:17px;height:17px;border-radius:50%;background:rgba(255,255,255,.16);font-size:10.5px;font-weight:900;display:flex;align-items:center;justify-content:center}",
      ".pzb-rg .v{flex:0 0 auto;font-weight:900;font-size:13.5px;color:var(--o-oro-testo);white-space:nowrap;font-variant-numeric:tabular-nums}",
      ".pzb-rg .fc{flex:1;min-width:0;display:flex;justify-content:flex-end;align-items:center;overflow:hidden}",
      ".pzb-rg .fc .fac{width:22px;height:22px;margin-left:-7px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.18);box-shadow:0 0 0 2px #151a2e;flex:0 0 auto}.pzb-rg .fc .fac svg{width:100%;height:100%;display:block}",
      ".pzb-rg .fc .piu{font-size:11px;font-weight:900;margin-left:3px;color:#fff}",
      ".pzb-rg.sotto{opacity:.62}.pzb-rg.sotto .v{color:#b2f2bb}",
      ".pzb-rg.primo{background:rgba(255,79,134,.32);box-shadow:0 0 0 2px var(--o-oro);opacity:1}.pzb-rg.primo .n{background:var(--n-lampone);color:#fff}",
      ".pzb-rg.sopra{background:rgba(255,93,108,.2)}.pzb-rg.sopra .v{color:var(--o-rosso-testo)}",
      ".pzb-rg .pt{position:absolute;right:4px;top:-8px;font-size:11px;font-weight:900;color:var(--o-verde-testo);background:var(--o-verde);border-radius:99px;padding:0 5px;animation:pzPop .35s both}",
      ".pzb-rg .pt.zero{background:#ff8787;color:#fff}",
      ".pzb-mai{display:flex;align-items:center;gap:6px;font-size:12.5px;font-weight:800;color:var(--o-tenue)}.pzb-mai .fc{display:flex}.pzb-mai .fac{width:22px;height:22px;margin-left:-6px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.14)}.pzb-mai .fac svg{width:100%;height:100%;display:block}",
      ".pzb-ban-s{font-size:clamp(17px,calc(var(--alt,640px) * .032),24px)}",
      // 🟡 Plinko — la parete coi chiodini
      ".pzb-pl-board{position:relative;flex:1 1 0;min-height:0;width:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}",
      ".pzb-pl-in{position:relative;border-radius:16px;overflow:hidden;box-shadow:0 0 0 3px var(--o-oro),0 8px 24px rgba(0,0,0,.45)}",
      ".pzb-pl-in canvas{position:absolute;left:0;top:0;display:block}",
      ".pzb-tok{position:absolute;left:0;top:0;border-radius:50%;overflow:hidden;background:var(--c,#ffd43b);box-shadow:0 0 0 2.5px var(--c,#ffd43b),0 3px 6px rgba(0,0,0,.45);will-change:transform}",
      ".pzb-tok img{position:absolute;left:-8%;top:-2%;width:116%;height:116%;display:block}",
      ".pzb-tok.pop{animation:pzbTok .35s cubic-bezier(.3,1.6,.5,1) both}",
      "@keyframes pzbTok{from{opacity:0}to{opacity:1}}",
      ".pzb-flash{position:absolute;bottom:0;border-radius:6px 6px 0 0;background:radial-gradient(circle at 50% 100%,rgba(255,255,255,.95),rgba(255,224,102,.0) 70%);opacity:0;pointer-events:none}",
      ".pzb-flash.on{animation:pzbFlash .7s ease-out}",
      "@keyframes pzbFlash{0%{opacity:1}100%{opacity:0}}",
      ".pzb-piu{position:absolute;font-weight:900;font-size:15px;color:#fff;text-shadow:0 2px 0 rgba(0,0,0,.6);pointer-events:none;white-space:nowrap;animation:pzbSale 1.2s ease-out both}",
      ".pzb-piu.oro{color:var(--o-oro-testo);font-size:20px}.pzb-piu.zero{color:#ff8787}",
      "@keyframes pzbSale{0%{transform:translate(-50%,0) scale(.6);opacity:0}15%{transform:translate(-50%,-10px) scale(1.15);opacity:1}100%{transform:translate(-50%,-46px) scale(1);opacity:0}}",
      ".pzb-pl-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 6px;max-width:100%}",
      ".pzb-pl-ch{display:flex;align-items:center;gap:4px;border-radius:99px;padding:2px 8px 2px 2px;background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 2px var(--c,transparent);font-weight:900;font-size:12.5px;white-space:nowrap}",
      ".pzb-pl-ch .fac{width:22px;height:22px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.14);flex:0 0 auto}.pzb-pl-ch .fac svg{width:100%;height:100%;display:block}",
      ".pzb-pl-ch .v{color:var(--o-oro-testo)}.pzb-pl-ch.primo{background:rgba(255,79,134,.3)}.pzb-pl-ch.cambia .v{animation:pzPop .3s}",
      // 🟡 Plinko — il pannello
      ".pzb-pl-pan{display:flex;flex-direction:column;gap:7px}",
      ".pzb-pl-pan .pz-nota,.pzb-tr-pan .pz-nota{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px}.pzb-pl-pan .pz-nota.forte{font-size:15px}",
      ".pzb-qtesta{display:flex;align-items:center;justify-content:space-between;gap:8px;font-weight:900;font-size:14px;color:var(--o-oro-testo)}",
      ".pzb-gett{display:flex;gap:2px;font-size:17px;line-height:1}.pzb-gett i{font-style:normal;opacity:.3}.pzb-gett i.on{opacity:1}.pzb-gett i.nuovo{animation:pzPop .4s both}",
      ".pzb-qbar{height:6px;border-radius:3px;background:rgba(255,255,255,.18);overflow:hidden}.pzb-qbar i{display:block;height:100%;background:var(--o-oro);transform-origin:0 50%}",
      ".pzb-opz{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px}",
      ".pzb-op{min-height:clamp(70px,calc(var(--alt,640px) * .12),96px)}.pzb-op b{font-size:clamp(22px,calc(var(--alt,640px) * .04),30px)}",
      ".pzb-op.giusto{background:linear-gradient(#b2f2bb,#37b24d);box-shadow:0 0 0 3px #fff}.pzb-op.sbagliato{background:linear-gradient(#ffc9c9,#fa5252);color:#fff}.pzb-op.era{box-shadow:0 0 0 3px #69db7c}",
      ".pzb-mini{position:relative;display:flex;flex-direction:column;gap:3px}",
      ".pzb-zone{display:grid;grid-template-columns:repeat(9,minmax(0,1fr));gap:2px}",
      ".pzb-z{position:relative;height:clamp(36px,calc(var(--alt,640px) * .062),48px);border:0;border-radius:10px;padding:0;font:inherit;font-size:17px;color:#fff;background:linear-gradient(#2f3763,#222849);box-shadow:inset 0 -3px 0 rgba(0,0,0,.3);cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}",
      ".pzb-z.sel{background:linear-gradient(#ffe6ee,#ffc4d6);color:#3a0b1a;box-shadow:0 0 0 2px #ff4f86}",
      ".pzb-z .k{position:absolute;right:1px;top:-6px;min-width:15px;height:15px;border-radius:8px;background:var(--o-verde);color:var(--o-verde-testo);font-size:10px;font-weight:900;line-height:15px}",
      ".pzb-mini-tav{position:relative;height:clamp(64px,calc(var(--alt,640px) * .11),104px);border-radius:10px;overflow:hidden;background:#140d3a}",
      ".pzb-mini-tav canvas{position:absolute;left:0;top:0}"
    ].join("");
    document.head.appendChild(s);
  }

  // ---------------- piccoli aiuti per i telefoni ----------------
  var COLORI = ["#ffd43b", "#4dabf7", "#ff6b6b", "#51cf66", "#cc5de8", "#ff922b", "#20c997", "#f783ac"];
  function colore(A, id) {
    var C = (A.ST && A.ST.COLORI) || COLORI, i = 0;
    for (var k = 0; k < A.giocatori.length; k++) if (A.giocatori[k].id === id) { i = k; break; }
    return C[i % C.length];
  }
  // il bottone si tocca col dito (pointerdown: subito) o col clic; una volta sola per tocco
  function tocco(b, fn) {
    var ultimo = 0;
    function f(e) { var t = Date.now(); if (t - ultimo < 350) return; ultimo = t; try { if (e && e.cancelable && e.type === "pointerdown") e.preventDefault(); } catch (x) {} fn(e); }
    b.addEventListener("pointerdown", f); b.addEventListener("click", f);
  }
  // «Luca», «Luca e Sara», «Luca, Sara e altri 2»
  function elenco(A, ids) {
    var n = ids.map(function (id) { return A.nome(id); });
    if (n.length <= 1) return n[0] || "";
    if (n.length === 2) return n[0] + " e " + n[1];
    if (n.length === 3) return n[0] + ", " + n[1] + " e " + n[2];
    return n[0] + ", " + n[1] + " e altri " + (n.length - 2);
  }
  function minus(s) { return String(s).replace(/^Tu\b/, "tu"); }
  // le facce di più giocatori una sopra l'altra (al massimo m, poi «+3»)
  function facce(A, box, ids, faccia, m) {
    while (box.firstChild) box.removeChild(box.firstChild);
    m = m || 5;
    ids.slice(0, m).forEach(function (id) { box.appendChild(A.fac(id, faccia)); });
    if (ids.length > m) box.appendChild(A.el("span", { class: "piu", text: "+" + (ids.length - m) }));
  }

  // =====================================================================
  //                          ✋ È TROPPO!
  // =====================================================================
  var TR = { N: 10, PASSO: 1600, LEAD: 3000, SEC: 20, PUNTI: [600, 450, 350, 250], DOPO: 150, PRIMA: [200, 100] };
  var CLK = null;   // l'orologio dei prezzi su questo telefono: { s, inizio } (lo mette il pannello, il maxischermo lo legge)
  // una foto nuova dice da quanto scorrono i prezzi: se siamo indietro (la prima foto era vecchia, per chi ricarica) ci si rimette in pari.
  // (una foto vecchia può solo farci andare indietro: si tiene sempre la stima più avanti)
  function sincro(pub, A) {
    if (!pub || !CLK || CLK.s !== pub.s || A.locale === "telefono" || !(pub.pass > 0)) return;
    var st = Date.now() - pub.pass + TR.LEAD;
    if (CLK.inizio == null || st < CLK.inizio - 250) CLK.inizio = st;
  }
  // un passo tondo vicino a v (1 · 2 · 2,5 · 5 · 10 …)
  function passoTondo(v) {
    var t = Math.max(1, v), m = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)), best = m;
    [1, 2, 2.5, 5, 10].forEach(function (x) { if (x * m <= t * 1.15) best = x * m; });
    return best;
  }
  // i 10 prezzi che salgono, come in TV: sempre dello stesso salto (es. +1.000 €), così il salto non dice dov'è il vero.
  // Il primo sopra il vero è il numero j (da 2 a 7, cioè dal 3° all'8°) e sta fuori dal margine del 2%
  function scalaTroppo(prezzo, rnd) {
    for (var giro = 0; giro < 30; giro++) {
      var d = passoTondo(prezzo * (0.08 + rnd() * 0.045)), unita = /^25/.test(String(d)) ? [d, d / 5] : [d, d / 2, d / 5];
      // il primo gradino sopra il vero: fuori dal margine (sopra del 2,5%) e col gradino prima sotto dell'1,5%; il più tondo possibile
      var da = prezzo * 1.025, a = prezzo * 0.985 + d, cand = [];
      for (var u = 0; u < unita.length && !cand.length; u++) for (var x = Math.ceil(da / unita[u] - 1e-9) * unita[u]; x <= a + 1e-9; x += unita[u]) cand.push(x);
      if (!cand.length) continue;
      var v = cand[Math.floor(rnd() * cand.length)];
      var js = [2, 3, 4, 5, 6, 7].filter(function (j) { return v - j * d >= prezzo * 0.3; });
      if (!js.length) continue;
      var j = js[Math.floor(rnd() * js.length)], r = [];
      for (var i = 0; i < TR.N; i++) r.push(tondo2(v + (i - j) * d));
      return { scala: r, j: j };
    }
    return { scala: [0.55, 0.65, 0.75, 0.85, 0.95, 1.05, 1.15, 1.25, 1.35, 1.45].map(function (f) { return tondo2(prezzo * f); }), j: 5 };
  }
  // i = dove si è fermato (-1 = mai), j = il primo prezzo sopra quello vero
  function puntiTroppo(i, j) {
    if (i == null || i < 0) return 0;
    if (i < j) return TR.PRIMA[j - i - 1] || 0;
    var d = i - j; return d < TR.PUNTI.length ? TR.PUNTI[d] : TR.DOPO;
  }
  // i tempi della rivelazione (li usano durata e rivela)
  var RT = { scala: 1100, rullo: 1300, cifra: 260, colora: 110, dopo: 700, banner: 2500 };
  function durataTroppo(riv) {
    var conta = (Z().durataConta ? Z().durataConta(((riv || {}).prod || {}).prezzo || 0, RT.cifra) : 2000);
    return RT.scala + RT.rullo + conta + TR.N * RT.colora + RT.dopo + RT.banner + 400;
  }

  PREMI.troppo = {
    nome: "È troppo!", icona: "✋", ordine: 4, fattiSegreti: true,   // (20 nov 2026: chi si è fermato si vede solo quando ti sei fermato anche tu, vedi prezzo.js leggii)
    regola: "I prezzi salgono: tocca «È TROPPO!» appena superano quello vero. Né prima, né tardi!",
    aiuto: "💸 Fermalo al momento giusto",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Il prezzo sale da solo, un passo alla volta: tocca «È troppo!» appena supera il prezzo vero. Subito dopo vale 600 punti, poi 450, 350… Se tocchi prima che lo superi, prendi poco.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "Sul telefono passano prezzi sempre più alti. Tocca «✋ È troppo!» appena il prezzo supera quello vero.",
    es: "Pensi che costi 3.000 € → passano 2.500… 2.800… 3.200 → tocca adesso!",
    pt: "Subito dopo il prezzo vero: 600 punti, poi 450, 350, 250. Se tocchi troppo presto: 200, poi 100.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = P.pesca(function (x) { return x.prezzo >= 2000; }, 1)[0] || P.pesca(function (x) { return x.prezzo >= 300; }, 1)[0] || P.pesca(null, 1)[0];
      var sc = scalaTroppo(prod.prezzo, P.rnd);
      return { s: Math.floor(P.rnd() * 1e9), prod: prod, scala: sc.scala, j: sc.j, tocchi: {}, ordine: [],
        insieme: P.modo === "telefono" && P.n >= 2 && P.n <= 4 };
    },
    tempo: function (st) { if (!st.t0) st.t0 = Date.now(); return TR.SEC; },   // (t0: solo per dire nella foto da quanto scorrono i prezzi)
    pubblico: function (st) {
      var p = st.prod || {};
      return { s: st.s, sec: TR.SEC, insieme: !!st.insieme, scala: st.scala, pass: st.t0 ? Date.now() - st.t0 : 0,
        prod: { e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat },
        fermi: st.ordine.slice() };
    },
    mossa: function (st, id, m, P) {
      // sullo stesso telefono, tutti insieme: un messaggio solo coi tocchi di tutti
      if (m.tutti && st.insieme) {
        var ord = (m.ord || []).filter(function (x) { return P.ids.indexOf(x) >= 0; });
        P.ids.forEach(function (x) {
          if (st.tocchi[x] != null) return;
          var v = intero(m.tutti[x]); st.tocchi[x] = v != null && v >= 0 && v < TR.N ? v : -1;
          if (st.tocchi[x] >= 0 && ord.indexOf(x) < 0) ord.push(x);
          P.fatto(x);
        });
        st.ordine = ord.filter(function (x) { return st.tocchi[x] >= 0; });
        return;
      }
      if (st.tocchi[id] != null) return;
      var i = intero(m.i); if (i == null || i < -1 || i >= TR.N) i = -1;
      st.tocchi[id] = i; if (i >= 0) st.ordine.push(id);
      P.fatto(id);
    },
    fine: function (st, P) {
      var punti = {}, carrello = {}, tocchi = {};
      P.ids.forEach(function (id) {
        var i = st.tocchi[id]; tocchi[id] = i == null ? -1 : i;
        punti[id] = puntiTroppo(tocchi[id], st.j);
        if (punti[id] === TR.PUNTI[0]) carrello[id] = [st.prod];   // chi si ferma al primo prezzo sopra se la porta a casa
      });
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, scala: st.scala, j: st.j, tocchi: tocchi, ids: P.ids.slice() } };
    },
    durata: function (riv) { return durataTroppo(riv); },
    // il Bot sa il prezzo ma lo «sente» sbagliato: si ferma sul primo prezzo sopra quello che pensa (un po' prudente)
    bot: function (st, bot, P) {
      var err = { facile: 0.45, medio: 0.25, difficile: 0.12 }[bot.livello] || 0.25;
      var stima = st.prod.prezzo * Math.exp((P.rnd() * 2 - 1) * err * 1.3) * (bot.livello === "facile" ? 1 : 1.03);
      var r = -1;
      for (var i = 0; i < TR.N; i++) if (st.scala[i] > stima) { r = i; break; }
      if (r < 0) return [];   // pensa che sia ancora più caro: non si ferma mai
      return [{ ms: Math.round(TR.LEAD + r * TR.PASSO + 350 + P.rnd() * 800), m: { i: r } }];
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, scala = pub.scala || [], locale = A.locale === "telefono";
      // l'orologio: lo mette il pannello (A.fine); se qui non c'è un pannello (chi guarda) si parte da adesso
      if (!CLK || CLK.s !== pub.s) CLK = { s: pub.s, inizio: locale ? null : Date.now() - (pub.pass || 0) + TR.LEAD - 300 };
      A.sch.classList.add("pzb-fitto");
      var nN = el("div", { class: "pzb-tr-n" }), nP = el("div", { class: "pzb-tr-p attesa", text: "✋" });
      var tacche = el("div", { class: "pzb-tr-tacche" }), t = [];
      for (var k = 0; k < TR.N; k++) { var ti = el("i"); t.push(ti); tacche.appendChild(ti); }
      var fermi = el("div", { class: "pz-tab fitto" });
      A.sch.appendChild(A.testa("È troppo!"));
      A.sch.appendChild(A.scheda(pub.prod || {}, { cls: "grande" }));   // (25 ott: la scheda prende tutto lo spazio libero)
      A.sch.appendChild(el("div", { class: "pzb-tr-big" }, [ nN, nP ]));
      A.sch.appendChild(tacche);
      A.sch.appendChild(fermi);
      var ultimo = null, visti = {};
      function mostra(chiave, i) {
        if (i == null) { nN.textContent = locale ? "Tocca a voi" : ""; nP.className = "pzb-tr-p attesa"; nP.textContent = "✋"; }
        else if (i < 0) { var sec = Math.max(1, Math.ceil((CLK.inizio - Date.now()) / 1000)); nN.textContent = "Si parte tra…"; nP.className = "pzb-tr-p attesa"; nP.textContent = sec; A.FX.tic(700); }
        else if (i >= TR.N) { nN.textContent = "Finiti i prezzi"; nP.className = "pzb-tr-p fine"; nP.textContent = "⏰"; }
        else {
          nN.textContent = "Prezzo " + (i + 1) + " di " + TR.N; nP.textContent = A.fmtE(scala[i]);
          nP.className = "pzb-tr-p"; void nP.offsetWidth; nP.className = "pzb-tr-p gira";
          A.FX.toc(330 + i * 55);
        }
        t.forEach(function (x, q) { x.className = i != null && q < i ? "on" : i != null && q === i ? "ora" : ""; });
      }
      var id = setInterval(function () {
        if (!A.vivo() || !nP.isConnected) { clearInterval(id); return; }
        var c = CLK && CLK.s === pub.s ? CLK : null, i = null, chiave = "x";
        if (c && c.inizio != null) {
          var d = Date.now() - c.inizio;
          i = d < 0 ? -1 : Math.min(TR.N, Math.floor(d / TR.PASSO));
          chiave = i < 0 ? "c" + Math.ceil(-d / 1000) : "i" + i;
        }
        if (chiave !== ultimo) { ultimo = chiave; mostra(chiave, i); }
      }, 80);
      function aggiorna(p) {
        sincro(p, A);
        if (locale) return;   // sullo stesso telefono non si dice chi si è fermato (a turno lo vedrebbe chi viene dopo)
        // (20 nov 2026) online chi si è fermato si vede solo dopo che ti sei fermato anche tu: se no il primo che si ferma
        // fa da spia agli altri («il prezzo vero è qui vicino»). Chi guarda (A.io vuoto) li vede subito.
        if (A.io != null && (p.fermi || []).indexOf(A.io) < 0) return;
        (p.fermi || []).forEach(function (fid) {
          if (visti[fid]) return; visti[fid] = 1;
          fermi.appendChild(el("div", { class: "pz-och" }, [ A.fac(fid, "pensa"), el("span", { class: "nm", text: "✋ " + A.nome(fid).slice(0, 8) }) ]));
          A.FX.clic(0.8);
        });
      }
      aggiorna(pub);
      return { aggiorna: aggiorna };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, scala = pub.scala || [], insieme = !!pub.insieme && A.locale === "telefono";
      var inizio = A.fine - ((pub.sec || TR.SEC) * 1000 + 800) + TR.LEAD;
      var clk = CLK = { s: pub.s, inizio: inizio };
      var root = el("div", { class: "pzb-tr-pan" }), mandato = false;
      var dN = el("span", { class: "n" }), dV = el("b", { class: "v" });
      root.appendChild(el("div", { class: "pzb-tr-disp" }, [ dN, dV ]));
      A.pan.appendChild(root);
      function idx() { var d = Date.now() - clk.inizio; return d < 0 ? -1 : Math.min(TR.N, Math.floor(d / TR.PASSO)); }
      var btn = null, bts = {}, tocchi = {}, ord = [], nota = null;
      if (insieme) {
        // tutti insieme intorno al telefono: un bottone a testa
        var testa = A.pan.parentNode && A.pan.parentNode.querySelector(".pz-pan-testa .tx");
        if (testa) testa.textContent = "💸 Tutti insieme: fermatelo in tempo";   // (21 nov 2026, scelta C: il nome del gioco è già in alto)
        var gr = el("div", { class: "pzb-tr-griglia" + (A.giocatori.length === 3 ? " tre" : "") });
        A.giocatori.forEach(function (g) {
          var b = el("button", { class: "pzb-tr-bt attesa" }, [ el("span", { class: "chi" }, [ A.fac(g.id), el("span", { text: g.nome }) ]), el("b", { text: "✋ È TROPPO!" }) ]);
          b.style.setProperty("--c", colore(A, g.id));
          tocco(b, function () { premi(g.id); });
          bts[g.id] = b; gr.appendChild(b);
        });
        nota = el("p", { class: "pz-nota", text: "📱 Telefono in mezzo: ognuno tocca il suo bottone!" });
        root.appendChild(gr); root.appendChild(nota);
      } else {
        btn = el("button", { class: "pzb-tr-btn attesa" }, [ el("span", { text: "⏳ Pronti…" }) ]);
        tocco(btn, function () { premi(A.io); });
        nota = el("p", { class: "pz-nota", text: "Toccalo quando il prezzo SUPERA quello vero" });
        root.appendChild(btn); root.appendChild(nota);
      }
      function testoBtn(b, t1, t2) { while (b.firstChild) b.removeChild(b.firstChild); b.appendChild(el("span", { text: t1 })); if (t2) b.appendChild(el("small", { text: t2 })); }
      function premi(chi) {
        var i = idx();
        if (mandato || i < 0 || i >= TR.N) return;
        if (insieme) {
          if (tocchi[chi] != null) return;
          tocchi[chi] = i; ord.push(chi);
          var b = bts[chi]; b.className = "pzb-tr-bt fatto";
          while (b.firstChild) b.removeChild(b.firstChild);
          b.appendChild(el("span", { class: "chi" }, [ A.fac(chi, "pensa"), el("span", { text: A.nome(chi) }) ])); b.appendChild(el("b", { text: "✋ " + A.fmtE(scala[i]) }));
          A.vibra(30); A.FX.toc(990);
          if (ord.length >= A.giocatori.length) setTimeout(manda, 500);
          return;
        }
        mandato = true; clearInterval(tid);
        A.invia({ i: i });
        btn.className = "pzb-tr-btn fatto"; testoBtn(btn, "✋ Stop!", "a " + A.fmtE(scala[i]));
        nota.textContent = "Vediamo se era il momento giusto… 🤞";
        A.vibra(30); A.FX.toc(990);
      }
      function manda() {
        if (mandato) return; mandato = true; clearInterval(tid);
        if (insieme) {
          var tutti = {};
          A.giocatori.forEach(function (g) {
            tutti[g.id] = tocchi[g.id] != null ? tocchi[g.id] : -1;
            if (tocchi[g.id] == null) { var b = bts[g.id]; b.className = "pzb-tr-bt niente"; b.lastChild.textContent = "😶 Nessuno stop"; }
          });
          A.invia({ tutti: tutti, ord: ord });
          nota.textContent = "Vediamo chi si è fermato al momento giusto… 🤞";
        } else {
          A.invia({ i: -1 });
          btn.className = "pzb-tr-btn niente"; testoBtn(btn, "😶 Niente stop", "pensavi che costasse ancora di più!");
        }
      }
      var ultimo = null;
      function tick() {
        if (!A.vivo() || !root.isConnected) { clearInterval(tid); return; }
        var i = idx(), chiave = i < 0 ? "c" + Math.ceil((clk.inizio - Date.now()) / 1000) : "i" + i;
        if (chiave === ultimo) return; ultimo = chiave;
        if (i < 0) { dN.textContent = "Si parte tra"; dV.textContent = Math.max(1, Math.ceil((clk.inizio - Date.now()) / 1000)) + "…"; }
        else if (i < TR.N) {
          dN.textContent = "Prezzo " + (i + 1) + " di " + TR.N; dV.textContent = A.fmtE(scala[i]);
          if (!mandato) {
            if (btn && /attesa/.test(btn.className)) { btn.className = "pzb-tr-btn vivo"; testoBtn(btn, "✋ È TROPPO!"); }
            if (insieme) Object.keys(bts).forEach(function (x) { if (tocchi[x] == null && /attesa/.test(bts[x].className)) bts[x].className = "pzb-tr-bt"; });
          }
        } else { dN.textContent = "Finiti i prezzi"; dV.textContent = "⏰"; manda(); }
      }
      var tid = setInterval(tick, 80); tick();
      return {
        tempo: function () { if (!mandato) manda(); clearInterval(tid); },
        aggiorna: function (p) { sincro(p, A); }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, prod = riv.prod || {}, scala = riv.scala || [], j = riv.j, tocchi = riv.tocchi || {}, punti = A.punti || {};
      var ids = (riv.ids || Object.keys(tocchi)).filter(function (id) { return tocchi[id] != null; });
      A.sch.classList.add("pzb-fitto");
      var conta = A.contachilometri(prod.prezzo || 0, {});
      var grid = el("div", { class: "pzb-scala" }), righe = [];
      var su = function (i) { return ids.filter(function (id) { return tocchi[id] === i; }); };
      var mai = ids.filter(function (id) { return !(tocchi[id] >= 0); });
      var banner = el("div", { class: "pz-sotto", text: "Dove vi siete fermati…" });
      A.sch.appendChild(A.testa("È troppo!"));
      A.sch.appendChild(A.miniprod(prod));
      var contaBox = el("div", { style: "min-height:52px;display:flex;align-items:center" }, [ conta.el ]);
      conta.el.style.visibility = "hidden";
      A.sch.appendChild(contaBox);
      A.sch.appendChild(grid);
      var maiBox = el("div", { class: "pzb-mai" });
      if (mai.length) { var mfc = el("span", { class: "fc" }); facce(A, mfc, mai, null, 6); maiBox.appendChild(el("span", { text: "😶 Mai fermati:" })); maiBox.appendChild(mfc); A.sch.appendChild(maiBox); }
      A.sch.appendChild(banner);
      scala.forEach(function (v, i) {
        var fc = el("span", { class: "fc" }), r = el("div", { class: "pzb-rg" }, [ el("span", { class: "n", text: String(i + 1) }), el("span", { class: "v", text: A.fmtE(v) }), fc ]);
        r.style.animationDelay = (i * 0.06) + "s";
        facce(A, fc, su(i), null, 5);
        righe.push({ r: r, fc: fc }); grid.appendChild(r);
      });
      await A.dorme(RT.scala); if (!A.vivo()) return;
      // il prezzo vero, cifra per cifra
      banner.textContent = "Il prezzo vero è…";
      conta.el.style.visibility = "";
      A.ST.FX.rullo(1.2); await A.dorme(RT.rullo); if (!A.vivo()) return;
      await conta.via(RT.cifra); if (!A.vivo()) return;
      // la scala si colora: sotto, il primo sopra, sopra
      for (var i = 0; i < righe.length; i++) {
        if (!A.vivo()) return;
        righe[i].r.classList.add(i < j ? "sotto" : i === j ? "primo" : "sopra");
        if (i === j) A.FX.din(); else A.FX.toc(i < j ? 520 : 300);
        await A.dorme(RT.colora);
      }
      // i punti su ogni gradino, le facce che esultano o no
      righe.forEach(function (x, q) {
        var chi = su(q); if (!chi.length) return;
        var pt = puntiTroppo(q, j);
        facce(A, x.fc, chi, pt && q >= j ? "esulta" : "triste", 5);
        x.r.appendChild(el("span", { class: "pt" + (pt ? "" : " zero"), text: q < j ? "🙈 " + (pt ? "+" + A.fmtN(pt) : "presto") : pt ? "+" + A.fmtN(pt) : "0" }));
      });
      if (mai.length) facce(A, maiBox.querySelector(".fc"), mai, "triste", 6);
      await A.dorme(RT.dopo); if (!A.vivo()) return;
      var giusti = su(j), dopo = ids.filter(function (id) { return tocchi[id] > j; }), presto = ids.filter(function (id) { return tocchi[id] >= 0 && tocchi[id] < j; });
      var me = A.io;
      if (giusti.length) {
        banner.className = "pz-banner oro pzb-ban-s";
        banner.textContent = giusti.length === 1 && giusti[0] === me && A.locale !== "telefono" ? "🎯 Stop al momento giusto!" : "🎯 Giusto in tempo: " + minus(elenco(A, giusti)) + "!";
        A.ST.pubblico(A.S, "ovazione"); A.ST.coriandoli();
        if (giusti.indexOf(me) >= 0 || (A.locale === "telefono" && giusti.length)) A.vibra([30, 40, 70]);
      } else if (dopo.length) {
        var mn = Math.min.apply(null, dopo.map(function (id) { return tocchi[id]; }));
        banner.className = "pz-banner pzb-ban-s";
        var vicini = dopo.filter(function (id) { return tocchi[id] === mn; }), conMe = A.locale !== "telefono" && vicini.indexOf(me) >= 0;
        banner.textContent = "😅 Nessuno subito dopo il prezzo vero: " + (vicini.length > 1 ? (conMe ? "ci andate più vicino " : "ci vanno più vicino ") : conMe ? "ci vai più vicino " : "ci va più vicino ") + minus(elenco(A, vicini));
        A.ST.pubblico(A.S, "applauso");
      } else {
        banner.className = "pz-banner no pzb-ban-s";
        banner.textContent = presto.length ? "🙈 Tutti troppo presto!" : "😶 Nessuno si è fermato!";
        A.FX.trombone(); A.ST.pubblico(A.S, "ohh");
      }
      await A.dorme(RT.banner);
    }
  };

  // =====================================================================
  //                             🟡 PLINKO
  // =====================================================================
  var PL = { CASE: [10, 25, 50, 0, 200, 0, 50, 25, 10], TOP: 200, GIUSTA: 50, FILE: 12, Q: 3, QSEC: 6, SEC: 32, ONDA: 1100 };
  // un prezzo sbagliato che sembra vero: stesso tipo di numero (6,99 → 4,99; 29 → 39; 15 → 20), dal 18% al 60% lontano
  function comeIlVero(v, p) {
    if (p >= 10 && Math.abs(p - Math.round(p)) < 1e-9) {
      if (p % 10 === 9) return Math.max(9, Math.round((v + 1) / 10) * 10 - 1);
      if (p % 5 === 0) return Math.max(5, Math.round(v / 5) * 5);
      return Math.max(1, Math.round(v));
    }
    if (p >= 2) return tondo2(Math.max(1, Math.floor(v)) + (Math.round(p * 100) % 100) / 100);
    return tondo2(Math.max(0.05, Math.round(v * 20) / 20));
  }
  function finto(p, rnd) {
    for (var k = 0; k < 14; k++) {
      var f = 0.25 + rnd() * 0.35, v = comeIlVero(rnd() < 0.5 ? p * (1 + f) : p * (1 - f), p);
      if (v > 0 && Math.abs(v - p) / p >= 0.18 && Math.abs(v - p) / p <= 0.75) return v;
    }
    return comeIlVero(p * 1.45, p);
  }
  function domande(P, n) {
    var l = P.pesca(function (x) { return x.prezzo >= 1 && x.prezzo < 100; }, n);
    if (l.length < n) l = l.concat(P.pesca(function (x) { return x.prezzo < 400; }, n - l.length));
    if (l.length < n) l = l.concat(P.pesca(null, n - l.length));
    return l.map(function (p) { var f = finto(p.prezzo, P.rnd), ok = P.rnd() < 0.5 ? 0 : 1; return { p: p, opz: ok ? [f, p.prezzo] : [p.prezzo, f], ok: ok }; });
  }
  function domDi(st, id) { return st.dom ? st.dom[id] || st.comuni : st.comuni; }
  function pubQ(d) { var p = d.p; return { e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat, opz: d.opz }; }
  // la caduta: posizioni in mezze caselle (0..16, le caselle sono i pari), a ogni fila ±1, coi rimbalzi sulle pareti
  function cade(x, rnd) {
    var p = 2 * x, s = "";
    for (var r = 0; r < PL.FILE; r++) { var d = rnd() < 0.5 ? -1 : 1; p += d; if (p < 0) { p = 1; d = 1; } if (p > 16) { p = 15; d = -1; } s += d > 0 ? "1" : "0"; }
    return { s: s, b: p / 2 };
  }
  function percorso(x, s) {
    var p = 2 * x, l = [p];
    for (var r = 0; r < s.length; r++) { p += s.charAt(r) === "1" ? 1 : -1; if (p < 0) p = 1; if (p > 16) p = 15; l.push(p); }
    return l;
  }
  function onde(riv) { var m = 1; Object.keys((riv || {}).gettoni || {}).forEach(function (id) { m = Math.max(m, riv.gettoni[id]); }); return m; }
  var RP = { intro: 900, cadere: 2700, dopo: 700, banner: 2600 };
  function durataPlinko(riv) { return RP.intro + (onde(riv) - 1) * PL.ONDA + RP.cadere + RP.dopo + RP.banner + 300; }

  // ---- la parete coi chiodini (su canvas: si disegna una volta) ----
  function geo(W, H) {
    var sw = W / 9, bh = Math.max(20, H * 0.12), d0 = sw * 0.66;
    var mt = Math.min(d0 * 1.15, H * 0.12), y0 = mt + d0 * 0.45, y11 = H - bh - d0 * 0.55, rowH = (y11 - y0) / (PL.FILE - 1);
    var d = Math.max(10, Math.min(d0, rowH * 1.25)), pr = Math.max(1.6, Math.min(sw * 0.055, 3.4));
    return { W: W, H: H, sw: sw, bh: bh, mt: mt, d: d, pr: pr, rowH: rowH,
      X: function (p) { return (p / 2 + 0.5) * sw; }, Y: function (r) { return y0 + r * rowH; },
      yAttesa: Math.max(d / 2 + 1, mt * 0.5), yFondo: H - bh * 0.42 };
  }
  function disegnaTavola(cv, W, H, opz) {
    opz = opz || {};
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.width = W + "px"; cv.style.height = H + "px";
    var c = cv.getContext("2d"); if (!c) return null;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    var g = geo(W, H), gr = c.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, "#1c2140"); gr.addColorStop(1, "#0b0e1c");
    c.fillStyle = gr; c.fillRect(0, 0, W, H);
    // luci di fondo
    var rg = c.createRadialGradient(W / 2, H * 0.62, 4, W / 2, H * 0.62, W * 0.55);
    rg.addColorStop(0, "rgba(255,79,134,.16)"); rg.addColorStop(1, "rgba(255,79,134,0)");
    c.fillStyle = rg; c.fillRect(0, 0, W, H);
    // i chiodini
    for (var r = 0; r < PL.FILE; r++) {
      for (var q = r % 2; q <= 16; q += 2) {
        var x = g.X(q), y = g.Y(r);
        c.beginPath(); c.arc(x, y, g.pr + 1.4, 0, Math.PI * 2); c.fillStyle = "rgba(255,255,255,.12)"; c.fill();
        c.beginPath(); c.arc(x, y, g.pr, 0, Math.PI * 2); c.fillStyle = "#e9ecff"; c.fill();
      }
    }
    // le caselle in fondo
    var colC = { 200: ["#fcc419", "#3b2a00"], 0: ["#c92a2a", "#fff"], 50: ["#2f9e44", "#fff"], 25: ["#1971c2", "#fff"], 10: ["#6741d9", "#fff"] };
    var fs = Math.max(9, Math.min(g.sw * 0.36, g.bh * 0.5, 16));
    for (var k = 0; k < 9; k++) {
      var v = PL.CASE[k], cc = colC[v] || ["#444", "#fff"], x0 = k * g.sw;
      c.fillStyle = cc[0]; c.fillRect(x0 + 1, H - g.bh, g.sw - 2, g.bh);
      c.fillStyle = cc[1]; c.font = "900 " + fs + "px system-ui,sans-serif"; c.textAlign = "center"; c.textBaseline = "middle";
      c.fillText(String(v), x0 + g.sw / 2, H - g.bh / 2 + 1);
      if (k) { c.fillStyle = "#ffd43b"; c.fillRect(x0 - 1.2, H - g.bh - 6, 2.4, g.bh + 6); }
    }
    if (opz.zone) {   // le frecce in alto (nel pannello)
      c.fillStyle = "rgba(255,224,102,.45)";
      for (k = 0; k < 9; k++) { var xx = g.X(2 * k); c.beginPath(); c.moveTo(xx - 4, 3); c.lineTo(xx + 4, 3); c.lineTo(xx, 9); c.fill(); }
    }
    return g;
  }
  // la parete nel maxischermo: si adatta allo spazio; restituisce { g, layer, pronto (Promise) }
  function tavola(A, box) {
    var inn = A.el("div", { class: "pzb-pl-in" }), cv = document.createElement("canvas");
    inn.appendChild(cv); box.appendChild(inn);
    var T = { g: null, inn: inn, cv: cv, dopo: [] };
    T.misura = function () {
      var cw = box.clientWidth, ch = box.clientHeight;
      if (!(cw > 20 && ch > 40)) return false;
      var W = Math.floor(Math.min(cw, 400, ch * 0.92)), H = Math.floor(Math.min(ch, W * 1.18));
      if (T.g && Math.abs(T.g.W - W) < 2 && Math.abs(T.g.H - H) < 2) return true;
      inn.style.width = W + "px"; inn.style.height = H + "px";
      T.g = disegnaTavola(cv, W, H);
      T.dopo.forEach(function (f) { try { f(); } catch (e) {} });
      return true;
    };
    T.pronto = new Promise(function (ok) {
      var n = 0;
      (function prova() { if (T.misura() || n++ > 40) return ok(T); setTimeout(prova, 30); })();   // (setTimeout: rAF si ferma se la pagina non si vede)
    });
    return T;
  }
  var IMG = {};
  function avatarSrc(A, id) {
    var f = A.fac(id), svg = f && f.innerHTML;
    if (!svg || svg.indexOf("<svg") < 0) return null;
    return IMG[svg] || (IMG[svg] = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg));
  }
  function gettone(A, id, d) {
    var t = A.el("div", { class: "pzb-tok" }), src = avatarSrc(A, id);
    t.style.width = t.style.height = Math.round(d) + "px"; t.style.setProperty("--c", colore(A, id));
    if (src) { var im = new Image(); im.alt = ""; im.src = src; t.appendChild(im); }
    return t;
  }
  function metti(t, x, y, g) { t.style.transform = "translate(" + (x - g.d / 2).toFixed(1) + "px," + (y - g.d / 2).toFixed(1) + "px)"; }

  PREMI.plinko = {
    nome: "Plinko", icona: "🟡", ordine: 5,
    regola: "Ogni prezzo indovinato vale +50 e un gettone. Poi lasciali cadere: in mezzo c'è il 200!",
    aiuto: "🤔 Indovina e vinci i gettoni",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Tre domande: dei due prezzi, qual è quello giusto? Ogni risposta giusta vale 50 punti e un gettone. Poi lasci cadere i gettoni nel Plinko: la casella in mezzo vale 200!",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "Prima 3 domande: tra due prezzi, tocca quello giusto. Poi scegli dove far cadere i tuoi gettoni tra i chiodini.",
    es: "2 risposte giuste → 100 punti e 3 gettoni (uno ce l'hai sempre).",
    pt: "Ogni gettone vale la casella dove cade: 200 in mezzo, poi 50, 25 e 10. Accanto al 200: 0.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var st = { s: Math.floor(P.rnd() * 1e9), comuni: null, dom: null, risp: {}, giusti: {}, lanci: {} };
      if (P.modo === "telefono") {   // a turno: ognuno le sue domande (chi guarda non impara le risposte dell'altro)
        st.dom = {};
        P.ids.forEach(function (id) { st.dom[id] = domande(P, PL.Q); });
        st.comuni = st.dom[P.ids[0]];
      } else st.comuni = domande(P, PL.Q);
      return st;
    },
    tempo: function () { return PL.SEC; },
    pubblico: function (st, P) {
      var stato = {};
      P.ids.forEach(function (id) { stato[id] = { r: (st.risp[id] || []).length, g: 1 + (st.giusti[id] || 0), l: (st.lanci[id] || []).slice() }; });
      var o = { s: st.s, stato: stato };
      if (st.dom) { o.qd = {}; Object.keys(st.dom).forEach(function (id) { o.qd[id] = st.dom[id].map(pubQ); }); }
      else o.q = st.comuni.map(pubQ);
      return o;
    },
    mossa: function (st, id, m, P) {
      var dom = domDi(st, id), r = st.risp[id] || (st.risp[id] = []);
      if (m.q != null) {
        var q = intero(m.q); if (q !== r.length || q >= PL.Q || !dom[q]) return;
        var s = m.s === 0 || m.s === 1 ? m.s : -1, ok = s === dom[q].ok;
        r.push(s); if (ok) st.giusti[id] = (st.giusti[id] || 0) + 1;
        P.privato(id, { q: q, s: s, ok: ok, prezzo: dom[q].p.prezzo, g: 1 + (st.giusti[id] || 0) });
        return;
      }
      if (m.x != null) {
        var x = intero(m.x), l = st.lanci[id] || (st.lanci[id] = []), g = 1 + (st.giusti[id] || 0);
        if (r.length < PL.Q || x == null || x < 0 || x > 8 || l.length >= g) return;
        l.push(x);
        if (l.length >= g) P.fatto(id);
      }
    },
    privatoDi: function (st, id) {
      var dom = domDi(st, id) || [];
      return { storia: { r: (st.risp[id] || []).map(function (s, q) { return { q: q, s: s, ok: s === dom[q].ok, prezzo: dom[q].p.prezzo }; }), g: 1 + (st.giusti[id] || 0), l: (st.lanci[id] || []).slice() } };
    },
    fine: function (st, P) {
      var punti = {}, gett = [], gettoni = {}, carrello = {}, rnd = P.rnd;
      P.ids.forEach(function (id) {
        var g = 1 + (st.giusti[id] || 0), l = (st.lanci[id] || []).slice(0, g);
        while (l.length < g) l.push(l.length ? l[l.length - 1] : 3 + Math.floor(rnd() * 3));   // quelli non lasciati: li lascia il caso
        gettoni[id] = g; punti[id] = PL.GIUSTA * (st.giusti[id] || 0);   // ogni prezzo indovinato: +50 (e un gettone)
        l.forEach(function (x, k) { var c = cade(x, rnd); punti[id] += PL.CASE[c.b]; gett.push({ id: id, k: k, x: x, s: c.s, b: c.b, auto: k >= (st.lanci[id] || []).length ? 1 : 0 }); });
      });
      // chi fa più punti si porta a casa una delle cose dell'«Occhio al prezzo»
      var best = P.ids.slice().sort(function (a, b) { return punti[b] - punti[a]; })[0];
      if (best && punti[best] > 0) { var d = domDi(st, best) || []; if (d.length) carrello[best] = [d.slice().sort(function (a, b) { return b.p.prezzo - a.p.prezzo; })[0].p]; }
      return { punti: punti, carrello: carrello, riv: { gett: gett, gettoni: gettoni, giusti: st.giusti, ids: P.ids.slice() } };
    },
    durata: function (riv) { return durataPlinko(riv); },
    // il Bot: risponde giusto più o meno spesso, poi lascia i gettoni verso il centro (il facile un po' a caso)
    bot: function (st, bot, P) {
      var pr = { facile: 0.55, medio: 0.7, difficile: 0.86 }[bot.livello] || 0.7, dom = domDi(st, bot.id), t = 900, mosse = [], giusti = 0;
      for (var q = 0; q < PL.Q; q++) {
        t += 1300 + P.rnd() * 2600;
        var s = P.rnd() < pr ? dom[q].ok : 1 - dom[q].ok; if (s === dom[q].ok) giusti++;
        mosse.push({ ms: Math.round(t), m: { q: q, s: s } });
      }
      for (var k = 0; k < 1 + giusti; k++) {
        t += 1300 + P.rnd() * 1500;
        var x = bot.livello === "facile" ? 1 + Math.floor(P.rnd() * 7) : bot.livello === "difficile" ? (P.rnd() < 0.6 ? 4 : P.rnd() < 0.5 ? 3 : 5) : 3 + Math.floor(P.rnd() * 3);
        mosse.push({ ms: Math.round(Math.min(t, (PL.SEC - 1) * 1000)), m: { x: x } });
      }
      return mosse;
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {};
      A.sch.classList.add("pzb-fitto");
      var box = el("div", { class: "pzb-pl-board" }), chips = el("div", { class: "pzb-pl-chips" }), ch = {}, attesa = {};
      A.sch.appendChild(A.testa("Plinko"));
      A.sch.appendChild(box);
      A.sch.appendChild(chips);
      A.giocatori.forEach(function (g) {
        var v = el("span", { class: "v", text: "👁️ 0/" + PL.Q }), c = el("div", { class: "pzb-pl-ch" }, [ A.fac(g.id), v ]);
        c.style.setProperty("--c", colore(A, g.id)); ch[g.id] = { el: c, v: v, tx: "" }; chips.appendChild(c);
      });
      var T = tavola(A, box), ultimo = pub;
      // i gettoni lasciati aspettano in alto, al loro posto
      function posa() {
        if (!T.g) return;
        Object.keys(attesa).forEach(function (id) { attesa[id].forEach(function (t, k) { metti(t.el, T.g.X(2 * t.x) + (k % 2 ? 3 : -3) * Math.min(1, k), T.g.yAttesa + k * 2, T.g); t.el.style.width = t.el.style.height = Math.round(T.g.d) + "px"; }); });
      }
      T.dopo.push(posa);
      if (window.ResizeObserver) try { var ro = new ResizeObserver(function () { if (!box.isConnected) { ro.disconnect(); return; } T.misura(); }); ro.observe(box); } catch (e) {}
      var tm = setInterval(function () { if (!box.isConnected || !A.vivo()) { clearInterval(tm); return; } T.misura(); }, 500);   // (anche senza ResizeObserver)
      function aggiorna(p) {
        ultimo = p;
        var stato = p.stato || {};
        Object.keys(ch).forEach(function (id) {
          var x = stato[id] || { r: 0, g: 1, l: [] }, tx;
          if (x.r < PL.Q) tx = "👁️ " + x.r + "/" + PL.Q;
          else if (x.l.length < x.g) tx = "🟡 " + x.l.length + "/" + x.g;
          else tx = "✅ " + x.g + " 🟡";
          if (tx !== ch[id].tx) { ch[id].tx = tx; ch[id].v.textContent = tx; }
          var l = attesa[id] || (attesa[id] = []);
          if (T.g) for (var k = l.length; k < x.l.length; k++) {
            var t = gettone(A, id, T.g.d); t.classList.add("pop"); T.inn.appendChild(t);
            l.push({ el: t, x: x.l[k] }); A.FX.toc(700 + k * 80);
          }
        });
        posa();
      }
      T.pronto.then(function () { if (A.vivo()) aggiorna(ultimo); });
      aggiorna(pub);
      return { aggiorna: aggiorna };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, dom = (pub.qd && pub.qd[A.io]) || pub.q || [];
      var S = { q: 0, risp: [], g: 1, lanci: [], sel: null, attende: false, finito: false };
      var root = el("div", { class: "pzb-pl-pan" }), avviato = false, tq = null, tf = null, tnext = null;
      A.pan.appendChild(root);
      function vuota() { while (root.firstChild) root.removeChild(root.firstChild); clearTimeout(tq); clearTimeout(tf); clearTimeout(tnext); }
      function vivo() { return A.vivo() && root.isConnected && !S.finito; }
      function fila(n, tot) {
        var f = el("span", { class: "pzb-gett" });
        for (var k = 0; k < tot; k++) f.appendChild(el("i", { class: k < n ? "on" : "", text: "🟡" }));
        return f;
      }
      function disegna() {
        vuota();
        if (S.q < PL.Q) domanda(); else lancio();
        rimisura();
      }
      // il pannello cambia altezza (domande → gettoni): il maxischermo sopra si rimisura subito (come fa il pannello del gioco)
      function rimisura() {
        var pp = root.closest ? root.closest(".pz-pan") : null, vv = root.closest ? root.closest(".st-vista") : null;
        if (pp && vv && pp.classList.contains("su")) vv.style.setProperty("--pz-pan", pp.offsetHeight + "px");
      }
      // ---- «Occhio al prezzo»: due prezzi, uno è giusto ----
      function domanda() {
        var q = S.q, d = dom[q] || {}, opz = d.opz || [];
        var gf = fila(S.g, PL.Q + 1), bar = el("i"), nota = el("p", { class: "pz-nota forte", text: "Qual è il prezzo giusto?" });
        root.appendChild(el("div", { class: "pzb-qtesta" }, [ el("span", { text: "👁️ Occhio al prezzo · " + (q + 1) + " di " + PL.Q }), gf ]));
        root.appendChild(A.scheda(d, { piccola: true }));
        root.appendChild(el("div", { class: "pzb-qbar" }, [ bar ]));
        var bs = opz.map(function (v, k) {
          var b = el("button", { class: "pz-sc pzb-op" }, [ el("b", { text: A.fmtE(v) }) ]);
          tocco(b, function () { scegli(k); });
          return b;
        });
        root.appendChild(el("div", { class: "pzb-opz" }, bs));
        root.appendChild(nota);
        S.ui = { bs: bs, nota: nota, gf: gf, opz: opz, q: q, risposto: false };
        S.attende = false;   // (domanda nuova: niente risposta in sospeso)
        bar.style.transition = "none"; bar.style.transform = "scaleX(1)";
        void bar.offsetWidth; setTimeout(function () { bar.style.transition = "transform " + (PL.QSEC - 0.05) + "s linear"; bar.style.transform = "scaleX(0)"; }, 30);
        tq = setTimeout(function () { if (vivo() && S.q === q && !S.attende) { S.ui.nota.textContent = "⏰ Tempo!"; manda(q, -1); } }, PL.QSEC * 1000);
      }
      function scegli(k) {
        // una risposta sola per domanda: dopo l'esito l'altro prezzo resta lì ancora un attimo, ma toccarlo non conta
        // (prima il secondo tocco lasciava la domanda dopo bloccata, senza più tasti che rispondono)
        if (!vivo() || S.attende || !S.ui || S.ui.q !== S.q || S.ui.risposto) return;
        S.ui.bs[k].classList.add("sel"); S.ui.bs.forEach(function (b) { b.disabled = true; });
        A.vibra(25);
        manda(S.q, k);
      }
      function manda(q, s) {
        if (S.ui) S.ui.risposto = true;
        S.attende = true; clearTimeout(tq);
        S.ui.bs.forEach(function (b) { b.disabled = true; });
        A.invia({ q: q, s: s });
        // se la risposta dell'host non arriva (rete), si va avanti lo stesso
        tf = setTimeout(function () { if (vivo() && S.attende && S.q === q) { S.attende = false; S.risp.push({ q: q, s: s, ok: null }); S.q++; disegna(); } }, 3500);
      }
      function esito(m) {
        if (!S.ui || m.q !== S.q || !S.attende) return;
        clearTimeout(tf); S.attende = false;
        S.risp.push(m); S.g = m.g || S.g;
        var opz = S.ui.opz, giusto = opz.map(function (v) { return Math.abs(v - m.prezzo) < 1e-6; }).indexOf(true);
        if (m.s >= 0 && S.ui.bs[m.s]) S.ui.bs[m.s].classList.add(m.ok ? "giusto" : "sbagliato");
        if (!m.ok && giusto >= 0) S.ui.bs[giusto].classList.add("era");
        if (m.ok) {
          S.ui.nota.textContent = "✅ Giusto! +" + PL.GIUSTA + " e un gettone 🟡"; A.FX.cassa();
          var nuovo = S.ui.gf.children[S.g - 1]; if (nuovo) { nuovo.className = "on nuovo"; }
        } else { S.ui.nota.textContent = (m.s < 0 ? "⏰ Tempo! " : "❌ No! ") + "Era " + A.fmtE(m.prezzo); A.FX.toc(240); }
        var q = S.q;
        tnext = setTimeout(function () { if (vivo() && S.q === q) { S.q++; disegna(); } }, 1250);
      }
      // ---- dove lasci i gettoni ----
      function lancio() {
        var nota = el("p", { class: "pz-nota forte" }), tray = el("div", { class: "pzb-qtesta" });
        var zone = el("div", { class: "pzb-zone" }), zs = [];
        for (var k = 0; k < 9; k++) (function (k) {
          var z = el("button", { class: "pzb-z", text: "⬇" });
          tocco(z, function () { if (!vivo() || S.lanci.length >= S.g) return; S.sel = k; zs.forEach(function (x, i) { x.classList.toggle("sel", i === k); }); ok.disabled = false; A.FX.clic(0.6); });
          zs.push(z); zone.appendChild(z);
        })(k);
        var tav = el("div", { class: "pzb-mini-tav" }), cv = document.createElement("canvas"); tav.appendChild(cv);
        var ok = el("button", { class: "pz-ok", text: "🟡 Lascia!" }); ok.disabled = true;
        tocco(ok, function () {
          if (!vivo() || ok.disabled || S.sel == null || S.lanci.length >= S.g) return;
          S.lanci.push(S.sel); A.invia({ x: S.sel }); A.vibra(20); A.FX.toc(520 + S.lanci.length * 90);
          segna();
        });
        root.appendChild(tray); root.appendChild(el("div", { class: "pzb-mini" }, [ zone, tav ])); root.appendChild(nota); root.appendChild(ok);
        S.ui = { nota: nota, tray: tray, zs: zs, ok: ok };
        setTimeout(function () { if (tav.clientWidth > 20) disegnaTavola(cv, tav.clientWidth, tav.clientHeight); }, 30);
        segna();
      }
      function segna() {
        var u = S.ui; if (!u || !u.tray) return;
        while (u.tray.firstChild) u.tray.removeChild(u.tray.firstChild);
        var resta = S.g - S.lanci.length;
        u.tray.appendChild(el("span", { text: resta > 0 ? "🟡 Hai " + S.g + (S.g === 1 ? " gettone" : " gettoni") : "✅ Tutti lasciati!" }));
        var f = el("span", { class: "pzb-gett" });
        for (var k = 0; k < S.g; k++) f.appendChild(el("i", { class: k >= S.lanci.length ? "on" : "", text: "🟡" }));
        u.tray.appendChild(f);
        var conta = {}; S.lanci.forEach(function (x) { conta[x] = (conta[x] || 0) + 1; });
        u.zs.forEach(function (z, i) { var b = z.querySelector(".k"); if (conta[i]) { if (!b) { b = el("span", { class: "k" }); z.appendChild(b); } b.textContent = conta[i]; } else if (b) z.removeChild(b); });
        if (resta > 0) { u.nota.textContent = S.sel == null ? "⬇ Tocca in alto dove lasciarlo" : "⬇ Cade dal posto " + (S.sel + 1); u.ok.disabled = S.sel == null; u.ok.textContent = "🟡 Lascia!" + (S.lanci.length ? " (ancora " + resta + ")" : ""); }
        else { u.nota.textContent = "👀 Guardate come va!"; u.ok.disabled = true; u.ok.textContent = "✅ Fatto"; u.zs.forEach(function (z) { z.disabled = true; }); }
      }
      function privato(m) {
        if (!m) return;
        if (m.storia) {   // chi ricarica la pagina ritrova le sue risposte e i gettoni già lasciati
          var h = m.storia; if ((h.r || []).length < S.risp.length) return;
          avviato = true; S.attende = false;
          S.risp = h.r || []; S.q = Math.min(PL.Q, S.risp.length); S.g = h.g || 1; S.lanci = (h.l || []).slice(); S.sel = S.lanci.length ? S.lanci[S.lanci.length - 1] : null;
          disegna(); return;
        }
        if (m.q != null) esito(m);
      }
      setTimeout(function () { if (!avviato && vivo()) { avviato = true; disegna(); } }, 0);
      return {
        privato: privato,
        aggiorna: function (p) {
          var x = (p.stato || {})[A.io]; if (!x) return;
          if (S.q >= PL.Q && x.g !== S.g && x.r >= PL.Q) { S.g = x.g; segna(); }
        },
        tempo: function () {
          clearTimeout(tq); clearTimeout(tf); clearTimeout(tnext);
          var u = S.ui;
          if (S.q >= PL.Q && S.lanci.length >= S.g) { S.finito = true; return; }
          S.finito = true;
          if (u && u.nota) u.nota.textContent = "⏰ Tempo! I gettoni rimasti li lascia il caso";
          if (u && u.ok) u.ok.disabled = true;
          (u && (u.zs || u.bs) || []).forEach(function (b) { b.disabled = true; });
        }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, gett = riv.gett || [], ids = riv.ids || [], punti = A.punti || {};
      A.sch.classList.add("pzb-fitto");
      var box = el("div", { class: "pzb-pl-board" }), chips = el("div", { class: "pzb-pl-chips" }), banner = el("div", { class: "pz-sotto", text: "Tutti i gettoni cadono insieme!" });
      A.sch.appendChild(A.testa("Plinko"));
      A.sch.appendChild(box); A.sch.appendChild(chips); A.sch.appendChild(banner);
      var tot = {}, ch = {}, giusti = riv.giusti || {};
      ids.forEach(function (id) {
        tot[id] = PL.GIUSTA * (giusti[id] || 0);   // i +50 dei prezzi indovinati ci sono già prima della caduta
        var v = el("span", { class: "v", text: A.fmtN(tot[id]) }), c = el("div", { class: "pzb-pl-ch" }, [ A.fac(id), v ]);
        c.style.setProperty("--c", colore(A, id)); ch[id] = { el: c, v: v }; chips.appendChild(c);
      });
      var T = tavola(A, box); await T.pronto; if (!A.vivo()) return;
      var g = T.g; if (!g) { await A.dorme(durataPlinko(riv) - 400); return; }
      // i gettoni in alto, al loro posto
      var pila = {};
      gett.forEach(function (x, n) {
        x.el = gettone(A, x.id, g.d); x.el.classList.add("pop"); x.el.style.animationDelay = (n * 0.03) + "s";
        var k = pila["a" + x.x] = (pila["a" + x.x] || 0) + 1;
        x.x0 = g.X(2 * x.x) + (k > 1 ? (k % 2 ? 4 : -4) : 0); x.y0 = g.yAttesa + (k - 1) * 2;
        metti(x.el, x.x0, x.y0, g); T.inn.appendChild(x.el);
      });
      // i lampi delle caselle
      var lampi = PL.CASE.map(function (v, k) { var f = el("div", { class: "pzb-flash" }); f.style.left = (k * g.sw) + "px"; f.style.width = g.sw + "px"; f.style.height = (g.bh * 2.2) + "px"; T.inn.appendChild(f); return f; });
      await A.dorme(RP.intro); if (!A.vivo()) return;
      var ultimoClic = 0, inCasella = {}, centro = 0, me = A.io;
      function clic() { var t = Date.now(); if (t - ultimoClic < 45) return; ultimoClic = t; A.FX.clic(0.55); }
      function atterra(x) {
        if (!A.vivo()) return;
        var v = PL.CASE[x.b], f = lampi[x.b];
        f.classList.remove("on"); void f.offsetWidth; f.classList.add("on");
        var p = el("div", { class: "pzb-piu" + (v === PL.TOP ? " oro" : v === 0 ? " zero" : ""), text: v ? "+" + A.fmtN(v) : "0" });
        p.style.left = g.X(2 * x.b) + "px"; p.style.top = (g.H - g.bh - g.d) + "px"; T.inn.appendChild(p);
        setTimeout(function () { if (p.parentNode) p.parentNode.removeChild(p); }, 1300);
        tot[x.id] += v;
        var c = ch[x.id]; if (c) { c.v.textContent = A.fmtN(tot[x.id]); c.el.classList.remove("cambia"); void c.el.offsetWidth; c.el.classList.add("cambia"); }
        if (v === PL.TOP) {
          A.FX.din(); centro++;
          if (centro === 1) { A.ST.pubblico(A.S, "ovazione"); A.ST.coriandoli(); }
          if (x.id === me || A.locale === "telefono") A.vibra([30, 40, 70]);
        } else if (v === 0 && (x.b === 3 || x.b === 5)) { if (Math.random() < 0.6) A.ST.pubblico(A.S, "ohh"); A.FX.toc(220); }
        else A.FX.toc(600 + v * 2);
      }
      function cadi(x) {
        var l = percorso(x.x, x.s), kf = [], tempi = [0], t = 0, r;
        var cy = function (rr) { return g.Y(rr) - g.pr - g.d / 2; };
        kf.push({ x: x.x0, y: x.y0, e: "ease-in" });
        t += 380; tempi.push(t); kf.push({ x: g.X(l[0]), y: cy(0), e: "ease-out" });
        for (r = 0; r < PL.FILE; r++) {
          var a = (g.X(l[r]) + g.X(l[r + 1])) / 2;
          t += 75; tempi.push(t); kf.push({ x: a, y: cy(r) - g.rowH * 0.28, e: "ease-in" });
          if (r < PL.FILE - 1) { t += 115; tempi.push(t); kf.push({ x: g.X(l[r + 1]), y: cy(r + 1), e: "ease-out" }); }
        }
        var k = inCasella[x.b] = (inCasella[x.b] || 0) + 1;
        t += 300; tempi.push(t); kf.push({ x: g.X(l[PL.FILE]) + (k % 2 ? 1 : -1) * Math.min(6, (k - 1) * 3), y: g.yFondo - (k - 1) * g.d * 0.3, e: "linear" });
        var frames = kf.map(function (p, i) { return { transform: "translate(" + (p.x - g.d / 2).toFixed(1) + "px," + (p.y - g.d / 2).toFixed(1) + "px)", offset: tempi[i] / t, easing: p.e }; });
        x.el.style.zIndex = 5 + (x.k || 0);
        try { x.el.animate(frames, { duration: t, fill: "forwards" }); } catch (e) { metti(x.el, kf[kf.length - 1].x, kf[kf.length - 1].y, g); }
        // i clic sui chiodini e l'arrivo
        for (r = 0; r < PL.FILE; r++) setTimeout(function () { if (A.vivo()) clic(); }, 380 + r * 190);
        setTimeout(function () { atterra(x); }, t);
      }
      var nOnde = onde(riv);
      for (var w = 0; w < nOnde; w++) {
        if (!A.vivo()) return;
        gett.filter(function (x) { return (x.k || 0) === w; }).forEach(cadi);
        if (w < nOnde - 1) await A.dorme(PL.ONDA);
      }
      await A.dorme(RP.cadere + RP.dopo); if (!A.vivo()) return;
      // chi ha fatto di più
      var mx = Math.max.apply(null, ids.map(function (id) { return punti[id] != null ? punti[id] : tot[id]; }).concat([0]));
      var primi = ids.filter(function (id) { return mx > 0 && (punti[id] != null ? punti[id] : tot[id]) === mx; });
      primi.forEach(function (id) { if (ch[id]) ch[id].el.classList.add("primo"); });
      if (mx > 0) {
        banner.className = "pz-banner pzb-ban-s" + (centro ? " oro" : "");
        banner.textContent = "🏆 " + elenco(A, primi) + ": " + A.fmtN(mx) + " punti!";
        if (!centro) A.ST.pubblico(A.S, "applauso");
      } else {
        banner.className = "pz-banner no pzb-ban-s"; banner.textContent = "😱 Tutti a zero!";
        A.FX.trombone(); A.ST.pubblico(A.S, "ohh");
      }
      await A.dorme(RP.banner);
    }
  };

  // (per le prove: le regole senza grafica)
  window.__prezzoPremiB = { scalaTroppo: scalaTroppo, puntiTroppo: puntiTroppo, finto: finto, cade: cade, percorso: percorso, geo: geo, TR: TR, PL: PL };
})();

/* =========================================================
   «IL PREZZO È GIUSTO!» — giochi a premi (file c, 23 ott 2026): «🛒 La Spesa» e «🔐 La Cassaforte», tutti insieme ognuno
   dal suo telefono. L'interfaccia dei giochi a premi è spiegata in js/games/prezzo-premi-piu.js. I punti sono scelti con la
   simulazione (.agents/skills/prova-nel-browser/prezzo/simulazione/premi-nuovi.js): in media circa 300 a testa come gli altri
   giochi a premi, e chi conosce i prezzi fa di più (regole dell'equilibrio in AGENTS.md).

   🛒 LA SPESA (il Grocery Game della TV): 5 prodotti del supermercato. Senza vedere i prezzi ognuno sceglie quanti pezzi
      comprarne (da 0 a 9 l'uno, coi tasti − e +) per spendere TRA 20 E 22 €. 40 secondi; vale il carrello che si vede allo
      scadere. Punti: dentro 600; fuori al massimo di 1,5 € 350; entro 4 € 200; entro 7 € 75; più lontano (o carrello vuoto) 0.
      Rivelazione: i prezzi dei 5 prodotti, poi il carrello di ognuno corre sulla sua corsia fino al totale, con la fascia verde.
   🔐 LA CASSAFORTE (della versione italiana): il prezzo di una cosa (4 o 5 cifre, almeno 3 diverse) con le cifre mescolate:
      si toccano due cifre per scambiarle, fino alla combinazione giusta. 30 secondi; vale la combinazione che si vede allo
      scadere (chi non tocca niente: 0). Punti: 60 per ogni cifra al posto giusto, +400 se la cassaforte si apre.
      Rivelazione: le combinazioni di tutti, poi il prezzo vero cifra per cifra e le casseforti che si aprono.
   Stile: classi col prefisso pzc- (più quelle pz- di prezzo-scena.js).
   ========================================================= */
(function () {
  "use strict";
  var PREMI = window.SG_PREZZO_PREMI = window.SG_PREZZO_PREMI || {};
  var ERR = { facile: 0.45, medio: 0.25, difficile: 0.12 };
  var COLORI = ["#ff6b6b", "#4dabf7", "#ffd43b", "#69db7c", "#da77f2", "#ff922b", "#3bc9db", "#f783ac"];

  function Z() { return window.SGPrezzoScena || {}; }
  function tondo2(v) { return Math.round((+v || 0) * 100) / 100; }
  function gauss(rnd) { var u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  // il Bot sa il prezzo vero e sbaglia apposta (facile ±45%, medio ±25%, difficile ±12%), come negli altri giochi
  function stima(P, prezzo, liv) { var g = Math.max(-2.5, Math.min(2.5, gauss(P.rnd))); return prezzo * Math.exp(g * (ERR[liv] || 0.25) * 0.85); }
  function pubProd(p) { p = p || {}; return { e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat }; }
  // tocco subito col pointerdown (su iPhone il click a volte non arriva); il click resta per mouse e tastiera
  function premi(b, fn) {
    var ultimo = 0;
    b.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse" && e.button) return; e.preventDefault(); ultimo = Date.now(); fn(); });
    b.addEventListener("click", function () { if (ultimo) { ultimo = 0; return; } fn(); });   // (il click dopo un tocco non conta, anche se il dito è restato giù a lungo)
  }
  function svuota(n) { while (n && n.firstChild) n.removeChild(n.firstChild); }
  function eTu(A, id) { return A.nome(id) === "Tu"; }
  function mioTelefono(A, id) { return A.locale === "telefono" || id === A.io; }
  // («Tutte giuste per te e Luca», mai «per Tu e Luca»)
  function elenco(A, ids) { var n = ids.map(function (id) { var x = A.nome(id); return x === "Tu" && ids.length > 1 ? "te" : x; }); return n.length < 2 ? n.join("") : n.slice(0, -1).join(", ") + " e " + n[n.length - 1]; }
  // le chip di chi ha finito, sotto il maxischermo (si aggiorna solo il segno che cambia: niente lampeggio)
  function chips(A, box, fatti) {
    svuota(box); box.className = "pz-tab" + (A.giocatori.length > 4 ? " fitto" : "");
    A.giocatori.forEach(function (g) {
      var ok = fatti.indexOf(g.id) >= 0;
      box.appendChild(A.el("span", { class: "pz-och" + (ok ? " ok" : " aspetta") }, [ A.fac(g.id), A.el("span", { class: "nm", text: A.nome(g.id) }), A.el("span", { class: "v", text: ok ? "✅" : "…" }) ]));
    });
  }
  function aggChips(A, box, fatti) {
    A.giocatori.forEach(function (g, i) {
      var c = box.children[i], v = c && c.querySelector(".v"), ok = fatti.indexOf(g.id) >= 0, tx = ok ? "✅" : "…";
      if (v && v.textContent !== tx) { v.textContent = tx; c.classList.toggle("ok", ok); c.classList.toggle("aspetta", !ok); }
    });
  }
  // una permutazione valida di 0..n-1
  function permutazione(l, n) {
    if (!Array.isArray(l) || l.length !== n) return false;
    var visti = {}; for (var i = 0; i < n; i++) { var x = l[i]; if (!(x >= 0 && x < n) || x !== Math.floor(x) || visti[x]) return false; visti[x] = 1; }
    return true;
  }
  // i messaggi provvisori partono un secondo dopo l'ultimo tocco (o subito negli ultimi 4 secondi)
  function invioCalmo(A, manda) {
    var to = null;
    return {
      dopo: function () { clearTimeout(to); var resta = (A.fine || 0) - Date.now(); if (resta > 0 && resta < 4000) manda(false); else to = setTimeout(function () { manda(false); }, 1000); },
      ferma: function () { clearTimeout(to); to = null; }
    };
  }

  // =====================================================================
  // 🛒 LA SPESA
  // =====================================================================
  var SP = { n: 5, sec: 40, min: 20, max: 22, maxQ: 9, punti: [[0, 600], [1.5, 350], [4, 200], [7, 75]] };
  var TS = { prima: 900, prezzo: 650, pausa: 500, corsa: 2400, esito: 1300, fine: 2300 };
  function totale(prod, q) { var t = 0; prod.forEach(function (p, i) { t += (+p.prezzo || 0) * ((q && q[i]) || 0); }); return tondo2(t); }
  function fuori(T) { return tondo2(T < SP.min ? SP.min - T : T > SP.max ? T - SP.max : 0); }
  function pezzi(q) { return (q || []).reduce(function (a, x) { return a + (x || 0); }, 0); }
  function puntiSpesa(T, q) {
    if (!pezzi(q)) return 0;
    var d = fuori(T);
    for (var i = 0; i < SP.punti.length; i++) if (d <= SP.punti[i][0] + 1e-9) return SP.punti[i][1];
    return 0;
  }
  function quantita(q, n) {
    if (!Array.isArray(q) || q.length !== n) return null;
    for (var i = 0; i < n; i++) { var x = q[i]; if (!(x >= 0 && x <= SP.maxQ) || x !== Math.floor(x)) return null; }
    return q.slice();
  }
  function durataSpesa(riv) { return TS.prima + ((riv && riv.prod) || []).length * TS.prezzo + TS.pausa + TS.corsa + TS.esito + TS.fine; }

  PREMI.spesa = {
    nome: "La Spesa", icona: "🛒", ordine: 6,
    regola: "Senza vedere i prezzi, riempi il carrello per spendere tra 20 e 22 €!",
    aiuto: "➕➖ Quanti pezzi nel carrello?",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Cinque prodotti del supermercato, senza prezzo: riempi il carrello col più e il meno per spendere tra 20 e 22 €. Dentro la fascia 600 punti, poco fuori 350, più lontano meno.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "5 prodotti del supermercato, senza prezzo. Con + e − scegli quanti pezzi comprare: il carrello deve costare tra 20 e 22 €.",
    es: "2 pacchi di pasta + 3 latte + 1 caffè = 21 € → dentro!",
    pt: "Dentro: 600 punti. Fuori di poco (fino a 1,50 €): 350. Più lontano: 200, 75, poi 0.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = P.pesca(function (x) { return x.cat === "spesa" && x.prezzo >= 0.5 && x.prezzo <= 8; }, SP.n);
      if (prod.length < SP.n) prod = prod.concat(P.pesca(function (x) { return x.prezzo >= 0.5 && x.prezzo <= 8; }, SP.n - prod.length));
      return { prod: prod, q: {}, f: {}, ms: {} };
    },
    tempo: function () { return SP.sec; },
    pubblico: function (st) { return { prod: st.prod.map(pubProd), fatti: Object.keys(st.f), min: SP.min, max: SP.max }; },
    mossa: function (st, id, m, P) {
      var q = quantita(m.q, st.prod.length); if (!q || st.f[id]) return;
      st.q[id] = q; st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      if (m.fine) { st.f[id] = 1; P.fatto(id); }
    },
    privatoDi: function (st, id) { return st.q[id] ? { q: st.q[id], f: !!st.f[id] } : null; },
    fine: function (st, P) {
      var punti = {}, g = [], carrello = {};
      P.ids.forEach(function (id) {
        var q = st.q[id] || null, T = q ? totale(st.prod, q) : 0, pt = puntiSpesa(T, q);
        punti[id] = pt;
        g.push({ id: id, q: q, T: T, d: fuori(T), pt: pt, ms: st.ms[id] || 0 });
      });
      // chi sta nella fascia si porta a casa la sua spesa (un pezzo per ogni prodotto comprato)
      g.forEach(function (x) { if (pezzi(x.q) && x.d === 0) carrello[x.id] = st.prod.filter(function (p, i) { return x.q[i] > 0; }); });
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, g: g, min: SP.min, max: SP.max } };
    },
    durata: function (riv) { return durataSpesa(riv); },
    // il Bot aggiunge un pezzo alla volta finché, coi prezzi che crede, arriva nella fascia
    bot: function (st, bot, P) {
      var est = st.prod.map(function (p) { return stima(P, p.prezzo, bot.livello); }), q = st.prod.map(function () { return 0; }), tot = 0, mira = (SP.min + SP.max) / 2;
      for (var giri = 0; giri < 80; giri++) {
        var i = Math.floor(P.rnd() * q.length);
        if (q[i] < SP.maxQ && tot + est[i] <= mira + 0.5) { q[i]++; tot += est[i]; }
        if (tot >= SP.min + 0.3) break;
      }
      var ms = (bot.livello === "difficile" ? 9000 : bot.livello === "medio" ? 13000 : 17000) + P.rnd() * 12000;
      return [ { ms: Math.round(ms * 0.5), m: { q: q.map(function (x) { return Math.max(0, x - 1); }) } }, { ms: Math.round(Math.min(38500, ms)), m: { q: q, fine: 1 } } ];
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [];
      // (i riquadri si vedono a chi guarda e a chi ha finito: mentre il pannello è su, i prodotti stanno lì, una volta sola)
      var fila = A.tessere(prod, { fermo: true, cls: "pzc-lista" }), ch = el("div", { "data-sacr": "3" });
      A.sch.appendChild(A.testa("La Spesa"));
      A.sch.appendChild(el("div", { class: "pzc-fascia", "data-sacr": "2" }, [ el("span", { text: "Spendi tra" }), el("b", { text: A.fmtE(pub.min || SP.min) + " e " + A.fmtE(pub.max || SP.max) }) ]));
      A.sch.appendChild(fila);
      A.sch.appendChild(el("div", { class: "pz-sotto", text: "🙈 I prezzi non si vedono: chi li conosce meglio?", "data-sacr": "1" }));
      A.sch.appendChild(ch);
      chips(A, ch, pub.fatti || []);
      fila.adatta();
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, (p && p.fatti) || []); } };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [], q = prod.map(function () { return 0; }), chiuso = false, mosso = false;
      var conta = el("span", { class: "pzc-pezzi", text: "🛒 Carrello vuoto" });
      var lista = el("div", { class: "pzc-spesa" }), righe = [];
      prod.forEach(function (p, i) {
        var n = el("b", { class: "pzc-q", text: "0" });
        var meno = el("button", { class: "pzc-pm", type: "button", text: "−" }), piu = el("button", { class: "pzc-pm piu", type: "button", text: "+" });
        premi(meno, function () { cambia(i, -1); }); premi(piu, function () { cambia(i, +1); });
        var r = el("div", { class: "pzc-sr" }, [ Z().figura(el, p, "e"), el("span", { class: "tx" }, [ el("b", { class: "n", text: p.nome || "" }), p.desc ? el("small", { text: p.desc }) : null ]), meno, n, piu ]);
        righe.push({ r: r, n: n, meno: meno, piu: piu }); lista.appendChild(r);
      });
      var ok = el("button", { class: "pz-ok pzc-fatto", type: "button", text: "✅ Fatto!" });
      premi(ok, function () { if (chiuso) return; A.vibra(12); manda(true); blocca("✅ Fatto!"); });
      A.pan.appendChild(el("div", { class: "pz-nota forte pzc-nota", text: "🛒 Spendi tra " + A.fmtE(pub.min || SP.min) + " e " + A.fmtE(pub.max || SP.max) }));
      A.pan.appendChild(lista);
      A.pan.appendChild(el("div", { class: "pzc-piede" }, [ conta, ok ]));
      var calmo = invioCalmo(A, manda);
      function disegna() {
        righe.forEach(function (x, i) { x.n.textContent = String(q[i]); x.r.classList.toggle("preso", q[i] > 0); x.meno.disabled = chiuso || !q[i]; x.piu.disabled = chiuso || q[i] >= SP.maxQ; });
        var t = pezzi(q); conta.textContent = t ? "🛒 " + t + (t === 1 ? " pezzo" : " pezzi") : "🛒 Carrello vuoto";
      }
      function cambia(i, d) {
        if (chiuso) return;
        var v = q[i] + d; if (v < 0 || v > SP.maxQ) return;
        q[i] = v; mosso = true; disegna();
        A.vibra(8); A.FX.toc(d > 0 ? 760 + i * 40 : 520);
        calmo.dopo();
      }
      function manda(fine) {
        calmo.ferma();
        if (!fine && !mosso) return;
        A.invia(fine ? { q: q.slice(), fine: 1 } : { q: q.slice() });
      }
      function blocca(tx) { chiuso = true; ok.disabled = true; ok.textContent = tx; lista.classList.add("chiuso"); disegna(); }
      disegna();
      return {
        privato: function (m) {
          if (!m || chiuso) return;
          var nq = quantita(m.q, prod.length); if (!nq) return;
          q = nq; mosso = true; disegna();
          if (m.f) blocca("✅ Fatto!");
        },
        // il tempo è finito: vale il carrello che si vede (se hai toccato qualcosa)
        tempo: function () { if (chiuso) return; if (mosso) manda(false); blocca("⏰ Tempo scaduto"); }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, prod = riv.prod || [], g = riv.g || [], min = riv.min || SP.min, max = riv.max || SP.max;
      var fila = A.tessere(prod, { extra: function (p, i, t) { t._tag = A.Z.cartellino(el, A.fmtE(p.prezzo || 0)); return t._tag; } }), corsie = el("div", { class: "pzc-corsie" + (g.length > 5 ? " fitto" : "") });
      var banner = el("div", { class: "pz-sotto pzc-bn", text: "I prezzi veri…" });
      A.sch.classList.add("pzb-fitto");
      A.sch.appendChild(A.testa("La Spesa"));
      A.sch.appendChild(fila); A.sch.appendChild(corsie); A.sch.appendChild(banner);
      var tags = fila.tessere.map(function (t) { return t._tag; });
      // le corsie: da 0 € a un po' più del carrello più caro (almeno 30 €), con la fascia verde
      var alto = Math.min(60, Math.max(30, Math.ceil(Math.max.apply(null, g.map(function (x) { return x.T; }).concat([0])) * 1.08)));
      var righe = g.map(function (x, j) {
        var carr = el("span", { class: "pzc-carr", text: "🛒" }), lab = el("span", { class: "pzc-lab" }), banda = el("span", { class: "pzc-banda" });
        banda.style.left = (100 * min / alto) + "%"; banda.style.width = (100 * (max - min) / alto) + "%";
        carr.style.setProperty("--col", COLORI[j % COLORI.length]);
        var trk = el("span", { class: "pzc-trk" }, [ banda, carr ]);
        var r = el("div", { class: "pzc-lane" }, [ A.fac(x.id), el("span", { class: "nm", text: A.nome(x.id) }), trk, lab ]);
        corsie.appendChild(r);
        return { x: x, r: r, carr: carr, trk: trk, lab: lab };
      });
      fila.adatta();
      A.ST.FX.rullo(0.9);
      await A.dorme(TS.prima); if (!A.vivo()) return;
      for (var i = 0; i < tags.length; i++) { tags[i].classList.add("su"); A.FX.toc(560 + i * 90); await A.dorme(TS.prezzo); if (!A.vivo()) return; }
      banner.textContent = "🧾 Il conto di ognuno: tra " + A.fmtE(min) + " e " + A.fmtE(max) + "!";
      await A.dorme(TS.pausa); if (!A.vivo()) return;
      corsie.classList.add("su");
      A.ST.FX.rullo(1.6);
      righe.forEach(function (c) {
        var w = c.trk.clientWidth - c.carr.offsetWidth;
        c.carr.style.transitionDelay = (Math.random() * 0.25).toFixed(2) + "s";
        c.carr.style.transform = "translateX(" + Math.max(0, Math.round(w * Math.min(1, c.x.T / alto))) + "px)";
      });
      await A.dorme(TS.corsa); if (!A.vivo()) return;
      var dentro = [];
      righe.forEach(function (c) {
        var x = c.x, pt = (A.punti || {})[x.id] != null ? A.punti[x.id] : x.pt;
        c.lab.textContent = pezzi(x.q) ? A.fmtE(x.T) : "—";
        c.r.classList.add(!pezzi(x.q) ? "male" : x.d === 0 ? "dentro" : pt ? "bene" : "male");
        if (pt) c.r.appendChild(el("span", { class: "pt", text: "+" + A.fmtN(pt) }));
        if (pezzi(x.q) && x.d === 0) dentro.push(x);
        var f = c.r.querySelector(".fac"); if (f) f.parentNode.replaceChild(A.fac(x.id, x.d === 0 && pezzi(x.q) ? "evviva" : pt ? "esulta" : "triste"), f);
      });
      A.FX.toc(880);
      if (dentro.length) { A.FX.din(); A.ST.coriandoli(); A.ST.pubblico(A.S, "ovazione"); if (dentro.some(function (x) { return mioTelefono(A, x.id); })) A.vibra([30, 40, 70]); }
      await A.dorme(TS.esito); if (!A.vivo()) return;
      var vicino = g.filter(function (x) { return pezzi(x.q); }).sort(function (a, b) { return a.d - b.d || a.ms - b.ms; })[0];
      if (dentro.length) {
        banner.className = "pz-banner oro pzc-bn";
        banner.textContent = dentro.length === 1 ? (eTu(A, dentro[0].id) ? "🛒 Spesa perfetta!" : "🛒 Spesa perfetta per " + A.nome(dentro[0].id) + "!") : "🛒 Spesa perfetta per " + elenco(A, dentro.map(function (x) { return x.id; })) + "!";
      } else if (vicino) {
        banner.className = "pz-banner pzc-bn";
        banner.textContent = "😅 Nessuno nella fascia: " + (eTu(A, vicino.id) ? "ci vai più vicino tu" : "ci va più vicino " + A.nome(vicino.id)) + " (" + A.fmtE(vicino.T) + ")";
        A.ST.pubblico(A.S, "applauso");
      } else {
        banner.className = "pz-banner no pzc-bn"; banner.textContent = "🛒 Carrelli vuoti!";
        A.FX.trombone(); A.ST.pubblico(A.S, "ohh");
      }
      await A.dorme(TS.fine);
    }
  };

  // =====================================================================
  // 🔐 LA CASSAFORTE
  // =====================================================================
  var CF = { sec: 30, aCifra: 60, aperta: 400 };
  var TC = { prima: 1200, riga: 380, rullo: 1300, cifra: 260, colora: 700, esito: 1300, fine: 2300 };
  function intero(p) { return +p.prezzo > 0 && Math.abs(p.prezzo - Math.round(p.prezzo)) < 1e-9; }
  function diverse(s) { var o = {}; s.split("").forEach(function (c) { o[c] = 1; }); return Object.keys(o).length; }
  function ripetuta(s) { var o = {}, m = 0; s.split("").forEach(function (c) { o[c] = (o[c] || 0) + 1; m = Math.max(m, o[c]); }); return m; }
  // 4 o 5 cifre, almeno 3 diverse e nessuna più di 2 volte (con 26.000 o 62.000 ci sarebbe un modo solo sensato di metterle)
  function adatto(p) { var s = String(Math.round(p.prezzo)); return intero(p) && /^\d{4,5}$/.test(s) && diverse(s) >= 3 && ripetuta(s) <= 2; }
  function giusteCF(c, vero) { var n = 0; if (!c) return 0; for (var i = 0; i < vero.length; i++) if (c[i] === vero[i]) n++; return n; }
  function puntiCF(c, vero) { if (!c) return 0; var n = giusteCF(c, vero); return n * CF.aCifra + (n === vero.length ? CF.aperta : 0); }
  // il numero col punto delle migliaia, una cifra per casella: "15950" → ["1","5",".","9","5","0"]
  function conPunto(c) { var a = c.split(""), out = []; a.forEach(function (x, i) { if (i && (a.length - i) % 3 === 0) out.push("."); out.push(x); }); return out; }
  function durataCF(riv) { return TC.prima + ((riv && riv.g) || []).length * TC.riga + TC.rullo + String((riv && riv.vero) || "00000").length * TC.cifra + TC.colora + TC.esito + TC.fine + 400; }

  PREMI.cassaforte = {
    nome: "La Cassaforte", icona: "🔐", ordine: 7,
    regola: "Le cifre del prezzo sono mescolate: rimettile in ordine e la cassaforte si apre!",
    aiuto: "🔢 Rimetti le cifre in ordine",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Le cifre di un prezzo sono mescolate: tocca due cifre per scambiarle e rimettile in ordine. 60 punti per ogni cifra al posto giusto, +400 se la cassaforte si apre.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "Le cifre di un prezzo sono mescolate. Tocca due cifre per scambiarle e rimetti il prezzo in ordine.",
    es: "Vedi 9 4 2 1 e pensi che costi 1.249 € → scambi le cifre finché leggi 1 2 4 9.",
    pt: "60 punti per ogni cifra al posto giusto, +400 se la cassaforte si apre.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = P.pesca(adatto, 1)[0]
        || P.pesca(function (p) { return intero(p) && p.prezzo >= 100 && p.prezzo < 100000 && diverse(String(p.prezzo)) >= 2; }, 1)[0]
        || P.pesca(function (p) { return intero(p) && p.prezzo >= 10 && p.prezzo < 100000; }, 1)[0];
      if (!prod) prod = { id: "x", e: "💰", nome: "Il tesoretto", desc: "", dove: "", cat: "curiosita", prezzo: 15950 };
      var vero = String(Math.round(prod.prezzo)), idx = vero.split("").map(function (c, i) { return i; }), mix = null, peggio = Infinity;
      // mescolate: mai la combinazione giusta; meglio senza lo 0 davanti e con meno cifre possibile già al loro posto
      for (var t = 0; t < 120 && peggio > 0; t++) {
        var m = P.mescola(idx).map(function (i) { return vero[i]; }), s = m.join("");
        if (s === vero) continue;
        var pen = (m[0] === "0" ? 10 : 0) + giusteCF(s, vero);
        if (pen < peggio) { peggio = pen; mix = m; }
      }
      if (!mix) mix = vero.split("");   // (tutte le cifre uguali: non si può mescolare)
      return { prod: prod, vero: vero, mix: mix, l: {}, f: {}, ms: {} };
    },
    tempo: function () { return CF.sec; },
    pubblico: function (st) { return { prod: pubProd(st.prod), mix: st.mix.slice(), fatti: Object.keys(st.f) }; },
    mossa: function (st, id, m, P) {
      if (!permutazione(m.l, st.mix.length) || st.f[id]) return;
      st.l[id] = m.l.slice(); st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      if (m.fine) { st.f[id] = 1; P.fatto(id); }
    },
    privatoDi: function (st, id) { return st.l[id] ? { l: st.l[id], f: !!st.f[id] } : null; },
    fine: function (st, P) {
      var punti = {}, g = [], carrello = {};
      P.ids.forEach(function (id) {
        var l = st.l[id] || null, c = l ? l.map(function (j) { return st.mix[j]; }).join("") : null, n = giusteCF(c, st.vero), pt = puntiCF(c, st.vero);
        punti[id] = pt;
        g.push({ id: id, c: c, n: n, pt: pt, ms: st.ms[id] || 0, aperta: !!c && n === st.vero.length });
        if (c && n === st.vero.length) carrello[id] = [st.prod];   // chi apre la cassaforte se la porta a casa
      });
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, vero: st.vero, mix: st.mix, g: g } };
    },
    durata: function (riv) { return durataCF(riv); },
    // il Bot sceglie la combinazione più vicina al prezzo che crede (meglio se finisce con 0, come quasi tutti i prezzi)
    bot: function (st, bot, P) {
      var e = stima(P, +st.vero, bot.livello), cand = {};
      (function giro(pref, resto) {
        if (!resto.length) { if (pref[0] !== "0") cand[pref.join("")] = 1; return; }
        for (var i = 0; i < resto.length; i++) { if (resto.indexOf(resto[i]) < i) continue; giro(pref.concat([resto[i]]), resto.slice(0, i).concat(resto.slice(i + 1))); }
      })([], st.mix.slice());
      var lista = Object.keys(cand).sort(function (a, b) { return Math.abs(+a - e) * (/0$/.test(a) ? 0.9 : 1) - Math.abs(+b - e) * (/0$/.test(b) ? 0.9 : 1); });
      var scelta = lista[0] || st.mix.join(""), presi = {}, l = scelta.split("").map(function (c) { for (var j = 0; j < st.mix.length; j++) if (!presi[j] && st.mix[j] === c) { presi[j] = 1; return j; } return -1; });
      if (!permutazione(l, st.mix.length)) l = st.mix.map(function (c, j) { return j; });
      var ms = (bot.livello === "difficile" ? 7000 : bot.livello === "medio" ? 10000 : 14000) + P.rnd() * 9000;
      return [ { ms: Math.round(ms * 0.55), m: { l: P.mescola(l.slice()) } }, { ms: Math.round(Math.min(28500, ms)), m: { l: l, fine: 1 } } ];
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, ch = el("div");
      A.sch.appendChild(A.testa("La Cassaforte"));
      A.sch.appendChild(A.scheda(pub.prod || {}, { cls: "media grande" }));   // (25 ott: la scheda prende tutto lo spazio libero)
      A.sch.appendChild(el("div", { class: "pzc-mix pz-solo-giu" }, conPunto((pub.mix || []).join("")).map(function (c) { return el("span", { class: c === "." ? "pt" : "c", text: c }); }).concat([ el("span", { class: "eu", text: "€" }) ])));
      A.sch.appendChild(el("div", { class: "pz-sotto pz-solo-giu", text: "🔢 Le cifre del prezzo sono mescolate: rimettile in ordine!" }));
      A.sch.appendChild(ch);
      chips(A, ch, pub.fatti || []);
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, (p && p.fatti) || []); } };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, mix = pub.mix || [], l = mix.map(function (c, j) { return j; }), sel = -1, chiuso = false, mosso = false;
      var fila = el("div", { class: "pzc-dial" }), caselle = [];
      // le caselle delle cifre (col punto delle migliaia in mezzo, che non si tocca)
      var n = mix.length;
      for (var pos = 0; pos < n; pos++) {
        if (pos && (n - pos) % 3 === 0) fila.appendChild(el("span", { class: "pzc-punto", text: "." }));
        (function (p) {
          var b = el("button", { class: "pzc-cifra", type: "button" });
          premi(b, function () { tocca(p); });
          caselle.push(b); fila.appendChild(b);
        })(pos);
      }
      fila.appendChild(el("span", { class: "pzc-eu", text: "€" }));
      var ok = el("button", { class: "pz-ok pzc-fatto", type: "button", text: "🔓 Apri!" });
      premi(ok, function () { if (chiuso) return; A.vibra(12); manda(true); blocca("🔐 Combinazione data"); });
      A.pan.appendChild(el("div", { class: "pz-nota forte pzc-nota", text: "👆 Tocca una cifra e poi un'altra per scambiarle" }));
      A.pan.appendChild(fila); A.pan.appendChild(ok);
      var calmo = invioCalmo(A, manda);
      function disegna() { caselle.forEach(function (b, p) { b.textContent = mix[l[p]]; }); }
      function tocca(p) {
        if (chiuso) return;
        if (sel < 0) { sel = p; caselle[p].classList.add("sel"); A.vibra(8); A.FX.toc(700); return; }
        if (sel === p) { caselle[p].classList.remove("sel"); sel = -1; return; }
        var a = sel; sel = -1; caselle[a].classList.remove("sel");
        var x = l[a]; l[a] = l[p]; l[p] = x; disegna();
        [a, p].forEach(function (q) { var c = caselle[q]; c.classList.remove("giro"); void c.offsetWidth; c.classList.add("giro"); });
        A.vibra(10); A.FX.toc(990); mosso = true;
        calmo.dopo();
      }
      function manda(fine) {
        calmo.ferma();
        if (!fine && !mosso) return;
        A.invia(fine ? { l: l.slice(), fine: 1 } : { l: l.slice() });
      }
      function blocca(tx) { chiuso = true; ok.disabled = true; ok.textContent = tx; fila.classList.add("chiuso"); if (sel >= 0) { caselle[sel].classList.remove("sel"); sel = -1; } }
      disegna();
      return {
        privato: function (m) {
          if (!m || chiuso || !permutazione(m.l, n)) return;
          l = m.l.slice(); mosso = true; disegna();
          if (m.f) blocca("🔐 Combinazione data");
        },
        // il tempo è finito: vale la combinazione che si vede (se hai toccato qualcosa)
        tempo: function () { if (chiuso) return; if (mosso) manda(false); blocca("⏰ Tempo scaduto"); }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, prod = riv.prod || {}, vero = String(riv.vero || ""), g = riv.g || [];
      var conta = A.contachilometri(+vero || 0, {}), righe = el("div", { class: "pzc-casse" + (g.length > 5 ? " fitto" : "") }), banner = el("div", { class: "pz-sotto pzc-bn", text: "Le combinazioni…" });
      A.sch.classList.add("pzb-fitto");
      A.sch.appendChild(A.testa("La Cassaforte"));
      A.sch.appendChild(A.miniprod(prod));
      var cbox = el("div", { style: "min-height:44px;display:flex;align-items:center" }, [ conta.el ]); conta.el.style.visibility = "hidden";
      A.sch.appendChild(cbox); A.sch.appendChild(righe); A.sch.appendChild(banner);
      var rr = g.map(function (x) {
        var cif = el("span", { class: "pzc-comb" }), testo = x.c ? conPunto(x.c) : null;
        if (testo) testo.forEach(function (c) { cif.appendChild(el("span", { class: c === "." ? "pt" : "c", text: c })); });
        else cif.appendChild(el("span", { class: "vuota", text: A.nome(x.id) === "Tu" ? "non l'hai toccata" : "non l'ha toccata" }));   // (20 nov 2026: «Tu… non l'hai toccata»)
        var r = el("div", { class: "pzc-cassa" }, [ A.fac(x.id), el("span", { class: "nm", text: A.nome(x.id) }), cif, el("span", { class: "lucc", text: "🔒" }) ]);
        return { x: x, r: r, cif: cif };
      });
      A.ST.FX.rullo(0.9);
      await A.dorme(TC.prima); if (!A.vivo()) return;
      for (var i = 0; i < rr.length; i++) { righe.appendChild(rr[i].r); A.FX.toc(560 + i * 70); await A.dorme(TC.riga); if (!A.vivo()) return; }
      banner.textContent = "La combinazione giusta è…";
      conta.el.style.visibility = "";
      A.ST.FX.rullo(1.2); await A.dorme(TC.rullo); if (!A.vivo()) return;
      await conta.via(TC.cifra); if (!A.vivo()) return;
      // le cifre al posto giusto diventano verdi, le casseforti tutte giuste si aprono
      var aperte = [];
      rr.forEach(function (c) {
        var x = c.x, pt = (A.punti || {})[x.id] != null ? A.punti[x.id] : x.pt, k = 0;
        [].forEach.call(c.cif.querySelectorAll(".c"), function (s) { var giusta = x.c && x.c[k] === vero[k]; s.classList.add(giusta ? "si" : "no"); k++; });
        if (x.aperta) { aperte.push(x); c.r.classList.add("aperta"); c.r.querySelector(".lucc").textContent = "🔓"; }
        if (pt) c.r.appendChild(el("span", { class: "pt", text: "+" + A.fmtN(pt) }));
        var f = c.r.querySelector(".fac"); if (f) f.parentNode.replaceChild(A.fac(x.id, x.aperta ? "evviva" : pt ? "esulta" : "triste"), f);
      });
      A.FX.toc(880);
      await A.dorme(TC.colora); if (!A.vivo()) return;
      if (aperte.length) {
        A.FX.din(); A.ST.coriandoli(); A.ST.pubblico(A.S, "ovazione");
        if (aperte.some(function (x) { return mioTelefono(A, x.id); })) A.vibra([30, 40, 70]);
        banner.className = "pz-banner oro pzc-bn";
        banner.textContent = aperte.length === 1 ? (eTu(A, aperte[0].id) ? "🔓 Hai aperto la cassaforte!" : "🔓 " + A.nome(aperte[0].id) + " apre la cassaforte!") : "🔓 Cassaforte aperta da " + elenco(A, aperte.map(function (x) { return x.id; })) + "!";
      } else {
        var best = g.filter(function (x) { return x.c; }).sort(function (a, b) { return b.n - a.n || a.ms - b.ms; })[0];
        banner.className = best && best.n ? "pz-banner pzc-bn" : "pz-banner no pzc-bn";
        banner.textContent = best && best.n ? "🔒 Resta chiusa: " + (eTu(A, best.id) ? "ci vai più vicino tu" : "ci va più vicino " + A.nome(best.id)) + " (" + best.n + " cifre su " + vero.length + ")" : "🔒 Resta chiusa per tutti!";
        A.ST.pubblico(A.S, best && best.n ? "applauso" : "ohh"); if (!(best && best.n)) A.FX.trombone();
      }
      await A.dorme(TC.esito + TC.fine);
    }
  };

  // ---------------- lo stile (una volta) ----------------
  function stile() {
    if (document.getElementById("sg-pzc-css")) return;
    var s = document.createElement("style"); s.id = "sg-pzc-css";
    s.textContent = [
      // La Spesa: la fascia, i 5 prodotti, le righe coi − e +, le corsie della rivelazione
      ".pz-sch.pzb-fitto{gap:6px}",
      ".pzc-fatto{display:block;width:100%;margin-top:4px}",   // (il tasto «Fatto» / «Apri!» a tutta larghezza, come nei giochi a premi d ed e)   // (anche se nessun gioco del file b è ancora partito)
      ".pzc-fascia{display:flex;align-items:baseline;gap:8px;font-weight:800;color:var(--o-tenue);font-size:14px}.pzc-fascia b{font-size:22px;font-weight:900;color:var(--o-verde)}",
      ".pzc-nota{margin-bottom:4px}",
      ".pzc-spesa{display:flex;flex-direction:column;gap:4px}",
      ".st-vista.pz-con-pan .pz-sch .pzc-lista{display:none}",
      // mentre si gioca il pannello sale fin sotto il titolo: sopra niente nomi né scritte, le righe si dividono tutto lo spazio
      ".pz-pan.su:has(.pzc-spesa){top:calc(56px + env(safe-area-inset-top))}.st-vista.pz-con-pan:has(.pzc-spesa) .pz-sch [data-sacr]{position:absolute!important;width:0!important;height:0!important;overflow:hidden!important;visibility:hidden!important;pointer-events:none!important;margin:0!important;padding:0!important}",
      ".pz-pan:has(.pzc-spesa) .pz-premio-pan{flex:1 1 0;min-height:0;display:flex;flex-direction:column}.pz-pan .pzc-spesa{flex:1 1 0;min-height:0}.pz-pan .pzc-spesa .pzc-sr{flex:1 1 auto}.pz-pan .pzc-spesa .pzc-pm{width:clamp(36px,calc(var(--alt,640px) * .052),48px);height:clamp(32px,calc(var(--alt,640px) * .047),44px);font-size:clamp(20px,calc(var(--alt,640px) * .03),26px)}",
      ".pzc-sr{display:flex;align-items:center;gap:8px;min-height:clamp(40px,calc(var(--alt,640px) * .062),52px);padding:4px 6px 4px 4px;box-sizing:border-box;border-radius:12px;background:linear-gradient(#fff,#eceef8);color:#1d1b3a;box-shadow:inset 0 -3px 0 rgba(14,18,44,.25)}",
      ".pzc-sr.preso{background:linear-gradient(#ffe6ee,#ffc4d6)}",
      ".pzc-sr .e{flex:0 0 auto;font-size:clamp(31px,calc(var(--alt,640px) * .072),64px);line-height:1}",   // (sui telefoni alti le righe crescono: lo spazio sopra resta poco)
      ".pzc-sr .tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;text-align:left;overflow-wrap:break-word}.pzc-sr .tx .n{font-weight:800;font-size:clamp(14px,calc(var(--alt,640px) * .022),19px);line-height:1.15}.pzc-sr .tx small{font-size:clamp(12px,calc(var(--alt,640px) * .0175),15.5px);font-weight:600;color:#4c4a66;line-height:1.2}",
      ".pzc-pm{flex:0 0 auto;width:36px;height:32px;border:0;border-radius:10px;font:900 20px/1 system-ui,sans-serif;color:#fff;background:#b0184f;box-shadow:inset 0 -3px 0 rgba(0,0,0,.25);cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}",
      ".pzc-pm.piu{background:#2f9e44}.pzc-pm:disabled{opacity:.35}",
      ".pzc-q{flex:0 0 22px;text-align:center;font-size:19px;font-weight:900;font-variant-numeric:tabular-nums}",
      ".pzc-spesa.chiuso .pzc-sr{opacity:.7}",
      ".pzc-piede{display:flex;align-items:center;gap:10px;margin-top:6px}.pzc-piede .pzc-pezzi{flex:0 0 auto;font-weight:900;color:var(--o-oro-testo);font-size:14px}.pzc-piede .pz-ok{flex:1;margin:0}",
      ".pzc-corsie{display:flex;flex-direction:column;gap:5px;width:100%;max-width:460px;opacity:0;transform:translateY(10px);transition:opacity .3s,transform .3s}.pzc-corsie.su{opacity:1;transform:none}",
      ".pzc-lane{display:flex;align-items:center;gap:6px;padding:3px 8px 3px 3px;border-radius:12px;background:rgba(255,255,255,.08)}",
      ".pzc-lane .fac{width:26px;height:26px;flex:0 0 auto}.pzc-lane .nm{flex:0 0 62px;font-size:12px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pzc-trk{position:relative;flex:1;min-width:60px;height:24px;border-radius:12px;background:rgba(255,255,255,.12);overflow:hidden}",
      ".pzc-banda{position:absolute;top:0;bottom:0;background:rgba(105,240,174,.45);box-shadow:inset 0 0 0 2px var(--o-verde)}",
      ".pzc-carr{position:absolute;left:0;top:1px;font-size:18px;line-height:22px;filter:drop-shadow(0 0 3px var(--col,#fff));transition:transform 2.1s cubic-bezier(.25,.8,.3,1)}",
      ".pzc-lab{flex:0 0 58px;text-align:right;font-weight:900;font-size:13px;color:#fff;font-variant-numeric:tabular-nums}",
      ".pzc-lane .pt,.pzc-cassa .pt{flex:0 0 auto;font-weight:900;font-size:12px;color:var(--o-verde-testo);background:var(--o-verde);border-radius:99px;padding:1px 7px}",
      ".pzc-lane.dentro{background:rgba(105,240,174,.22);box-shadow:0 0 0 2px var(--o-verde)}.pzc-lane.bene{background:rgba(255,79,134,.16)}.pzc-lane.male{opacity:.75}",
      ".pzc-corsie.fitto .pzc-lane{padding:1px 6px 1px 2px}.pzc-corsie.fitto .fac{width:22px;height:22px}.pzc-corsie.fitto .pzc-trk{height:20px}.pzc-corsie.fitto .pzc-carr{font-size:15px;line-height:18px}",
      ".pzc-bn{margin-top:2px}",
      // La Cassaforte: le cifre mescolate sul maxischermo, la combinazione nel pannello, le casseforti della rivelazione
      ".pzc-mix{display:flex;align-items:flex-end;gap:4px;font-weight:900}.pzc-mix .c{min-width:30px;padding:4px 0;text-align:center;font-size:24px;border-radius:8px;background:#05030f;color:#ffd43b;box-shadow:0 0 0 2px #ffd43b55}",
      ".pzc-mix .pt,.pzc-mix .eu{font-size:22px;color:#ffd43b}",
      ".pzc-dial{display:flex;align-items:flex-end;justify-content:center;gap:5px;margin:6px 0 10px}",
      ".pzc-cifra{width:clamp(44px,15vw,58px);height:clamp(58px,calc(var(--alt,640px) * .1),74px);border:0;border-radius:12px;font:900 34px/1 system-ui,sans-serif;color:#ffd43b;background:linear-gradient(#2a1f66,#0b0724);box-shadow:inset 0 -4px 0 rgba(0,0,0,.4),0 0 0 2px #ffd43b66;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;font-variant-numeric:tabular-nums}",
      ".pzc-cifra.sel{background:linear-gradient(#ffe6ee,#ffc4d6);color:#3a0b1a;box-shadow:0 0 0 3px #ff4f86,0 4px 14px rgba(224,34,90,.5)}",
      ".pzc-cifra.giro{animation:pzcGiro .3s ease-out}@keyframes pzcGiro{from{transform:rotateX(80deg)}to{transform:none}}",
      ".pzc-punto,.pzc-eu{font-size:30px;font-weight:900;color:var(--o-oro);padding-bottom:6px}",
      ".pzc-dial.chiuso .pzc-cifra{opacity:.75}",
      ".pzc-casse{display:flex;flex-direction:column;gap:5px;width:100%;max-width:440px}",
      ".pzc-cassa{display:flex;align-items:center;gap:6px;padding:3px 8px 3px 3px;border-radius:12px;background:rgba(255,255,255,.08);animation:pzSu .35s both}",
      ".pzc-cassa .fac{width:26px;height:26px;flex:0 0 auto}.pzc-cassa .nm{flex:1;min-width:0;font-size:12px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pzc-comb{display:flex;gap:2px;flex:0 0 auto}.pzc-comb .c{min-width:17px;text-align:center;font-weight:900;font-size:15px;border-radius:5px;background:#05030f;color:#ffd43b;padding:1px 0;transition:background .3s,color .3s}",
      ".pzc-comb .c.si{background:var(--o-verde);color:var(--o-verde-testo)}.pzc-comb .c.no{background:#c92a2a;color:#fff}.pzc-comb .pt{font-weight:900;color:var(--o-oro)}.pzc-comb .vuota{font-size:11px;color:var(--o-tenue)}",
      ".pzc-cassa .lucc{flex:0 0 auto;font-size:18px}.pzc-cassa.aperta{background:rgba(105,240,174,.22);box-shadow:0 0 0 2px var(--o-verde)}",
      ".pzc-casse.fitto .pzc-cassa{padding:1px 6px 1px 2px}.pzc-casse.fitto .fac{width:22px;height:22px}.pzc-casse.fitto .pzc-comb .c{font-size:13px;min-width:15px}",
      "@media (prefers-reduced-motion:reduce){.pzc-carr,.pzc-corsie{transition:none}.pzc-cifra.giro,.pzc-cassa{animation:none}}"
    ].join("\n");
    document.head.appendChild(s);
  }
})();

/* =========================================================
   «IL PREZZO È GIUSTO!» — giochi a premi (file d, 23 ott 2026): «🎲 Il Gioco dei Dadi» e «🎯 Il Mirino», tutti insieme
   ognuno dal suo telefono. L'interfaccia dei giochi a premi è spiegata in js/games/prezzo-premi-piu.js (modello: il file c).
   I punti sono scelti con la simulazione (.agents/skills/prova-nel-browser/prezzo/simulazione/premi-d-sim.js, 20.000 partite
   per giocatore; regole dell'equilibrio in AGENTS.md: in media circa 300 a testa, chi conosce i prezzi fa di più, chi tira
   a caso sta sotto). Nella simulazione due modi di giocare: «ingenuo»/«mira» (usa la sua idea del prezzo così com'è) e
   «ragiona» (sa di non essere sicuro e si regola); bravo sbaglia i prezzi del 15%, medio del 30%, scarso del 45%.

   🎲 IL GIOCO DEI DADI (dalla versione italiana; il Dice Game americano): il prezzo di una cosa, un intero di 4 cifre
      (1.000-9.999 €). Per ogni cifra si tira un dado, uguale per tutti; ognuno in segreto dice per ogni cifra se quella vera è
      ⬆️ più alta, = uguale o ⬇️ più bassa del dado. 25 secondi; vale quello che si vede allo scadere.
      VARIANTE (decisa il 23 ott): nei dati non c'è NESSUN prezzo di 4 cifre tutte tra 1 e 6, quindi le cifre vere vanno da 0
      a 9 coi dadi normali (1-6): col 6 si può dire «più alta» (7, 8, 9) e con l'1 «più bassa» (0). L'unica scelta impossibile
      è ⬇️ sulla PRIMA cifra col dado a 1 (un prezzo non comincia con lo 0): quella è spenta. Senza prezzi di 4 cifre liberi:
      3 o 5 cifre, stesse regole.
      Punti: prima cifra giusta 200, ognuna delle altre 60, tutte giuste +150 (massimo 530). La prima cifra vale di più perché
      è l'unica dove conta davvero sapere i prezzi: la seconda serve saperla al 4% (va bene per tutti circa una volta su due),
      la terza e la quarta le decidono le abitudini dei prezzi (finiscono quasi sempre con 0 o 9).
      Simulazione (ingenuo / ragiona): media 290 / 308 · bravo 309 / 325 · medio 288 / 306 · scarso 274 / 294 · a caso 135;
      tutte e 4 giuste: bravo 16-20%, scarso 12-16%, a caso 1,5%. Il bravo fa poco più dello scarso (la fortuna dei dadi
      conta tanto, come in Più o meno e nel Plinko), ma chi tocca a caso prende meno della metà.
      Rivelazione: le cifre vere girano una alla volta sotto i dadi, col segno giusto, e le scelte di tutti diventano verdi o rosse.
   🎯 IL MIRINO (dalla versione americana, il Range Game): una cosa da 30 a 30.000 €, una scala da A a B (numeri tondi) col
      prezzo da qualche parte tra il 10% e il 90%. Una finestrella larga il 10% della scala sale dal basso in 16,5 secondi,
      uguale per tutti (la posizione si calcola dal tempo che manca alla fine, che arriva dall'host); ognuno tocca «🎯 Stop!»
      una volta sola e la sua finestrella si ferma lì; chi non tocca resta in cima. 20 secondi in tutto.
      La scala: dove sta il prezzo (f, tra 0,1 e 0,9) e dove comincia la scala (A = t × larghezza, t tra 0,15 e 0,5) si
      scelgono a caso e NON dipendono l'uno dall'altro, così dalla scala non si capisce dove sta il prezzo (con una larghezza
      fissa, per esempio 1,6 volte il prezzo, la larghezza diceva il prezzo e il prezzo stava sempre in basso). La larghezza
      è un numero tondo vicino a prezzo / (t + f): di solito tra 0,9 e 2,2 volte il prezzo.
      Punti: prezzo dentro la finestrella 600; fuori di mezza finestrella (5% della scala) 350; di una finestrella 200; di due 75;
      più lontano 0. Simulazione (mira / ragiona): media 255 / 303 · bravo 365 / 384 · medio 237 / 290 · scarso 181 / 247 ·
      chi ferma a caso 142 · chi ferma sempre a metà scala 182; dentro: bravo 37-40%, medio 20-27%, a caso 12%.
      Rivelazione: le finestrelle di tutti sulla scala, poi la freccia del prezzo vero sale dal basso e si ferma al suo posto.
   Stile: classi col prefisso pzd- (più quelle pz- di prezzo-scena.js).
   ========================================================= */
(function () {
  "use strict";
  var PREMI = window.SG_PREZZO_PREMI = window.SG_PREZZO_PREMI || {};
  var ERR = { facile: 0.45, medio: 0.25, difficile: 0.12 };
  var COLORI = ["#ff6b6b", "#4dabf7", "#ffd43b", "#69db7c", "#da77f2", "#ff922b", "#3bc9db", "#f783ac"];

  function Z() { return window.SGPrezzoScena || {}; }
  function tondo2(v) { return Math.round((+v || 0) * 100) / 100; }
  function gauss(rnd) { var u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  // il Bot sa il prezzo vero e sbaglia apposta (facile ±45%, medio ±25%, difficile ±12%), come negli altri giochi
  function stima(P, prezzo, liv) { var g = Math.max(-2.5, Math.min(2.5, gauss(P.rnd))); return prezzo * Math.exp(g * (ERR[liv] || 0.25) * 0.85); }
  function pubProd(p) { p = p || {}; return { e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat }; }
  function intero(p) { return +p.prezzo > 0 && Math.abs(p.prezzo - Math.round(p.prezzo)) < 1e-9; }
  // tocco subito col pointerdown (su iPhone il click a volte non arriva); il click resta per mouse e tastiera
  function premi(b, fn) {
    var ultimo = 0;
    b.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse" && e.button) return; e.preventDefault(); ultimo = Date.now(); fn(); });
    b.addEventListener("click", function () { if (ultimo) { ultimo = 0; return; } fn(); });   // (il click dopo un tocco non conta, anche se il dito è restato giù a lungo)
  }
  function svuota(n) { while (n && n.firstChild) n.removeChild(n.firstChild); }
  function eTu(A, id) { return A.nome(id) === "Tu"; }
  function mioTelefono(A, id) { return A.locale === "telefono" || id === A.io; }
  // («Tutte giuste per te e Luca», mai «per Tu e Luca»)
  function elenco(A, ids) { var n = ids.map(function (id) { var x = A.nome(id); return x === "Tu" && ids.length > 1 ? "te" : x; }); return n.length < 2 ? n.join("") : n.slice(0, -1).join(", ") + " e " + n[n.length - 1]; }
  // le chip di chi ha finito, sotto il maxischermo (si aggiorna solo il segno che cambia: niente lampeggio)
  function chips(A, box, fatti) {
    svuota(box); box.className = "pz-tab" + (A.giocatori.length > 4 ? " fitto" : "");
    A.giocatori.forEach(function (g) {
      var ok = fatti.indexOf(g.id) >= 0;
      box.appendChild(A.el("span", { class: "pz-och" + (ok ? " ok" : " aspetta") }, [ A.fac(g.id), A.el("span", { class: "nm", text: A.nome(g.id) }), A.el("span", { class: "v", text: ok ? "✅" : "…" }) ]));
    });
  }
  function aggChips(A, box, fatti) {
    A.giocatori.forEach(function (g, i) {
      var c = box.children[i], v = c && c.querySelector(".v"), ok = fatti.indexOf(g.id) >= 0, tx = ok ? "✅" : "…";
      if (v && v.textContent !== tx) { v.textContent = tx; c.classList.toggle("ok", ok); c.classList.toggle("aspetta", !ok); }
    });
  }
  // i messaggi provvisori partono un secondo dopo l'ultimo tocco (o subito negli ultimi 4 secondi)
  function invioCalmo(A, manda) {
    var to = null;
    return {
      dopo: function () { clearTimeout(to); var resta = (A.fine || 0) - Date.now(); if (resta > 0 && resta < 4000) manda(false); else to = setTimeout(function () { manda(false); }, 1000); },
      ferma: function () { clearTimeout(to); to = null; }
    };
  }
  function cambiaFaccia(A, riga, id, faccia) { var f = riga.querySelector(".fac"); if (f) f.parentNode.replaceChild(A.fac(id, faccia), f); }

  // =====================================================================
  // 🎲 IL GIOCO DEI DADI
  // =====================================================================
  var DD = { sec: 25, prima: 200, altre: 60, tutte: 150 };
  var TD = { prima: 1100, cifra: 1150, esito: 1300, fine: 2300 };
  var SCELTE = ["su", "ug", "giu"], SIMB = { su: "⬆️", ug: "=", giu: "⬇️" }, PAROLA = { su: "più alta", ug: "uguale", giu: "più bassa" };
  // i puntini del dado (caselle 1-9 di una griglia 3×3, a righe)
  var PUNTINI = { 1: [5], 2: [3, 7], 3: [3, 5, 7], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] };
  function dado(el, v, cls) { var d = el("span", { class: "pzd-dado" + (cls ? " " + cls : "") }); for (var i = 1; i <= 9; i++) d.appendChild(el("i")); faccia(d, v); return d; }
  function faccia(d, v) { var on = PUNTINI[v] || []; [].forEach.call(d.children, function (c, i) { var si = on.indexOf(i + 1) >= 0; if (c.classList.contains("on") !== si) c.classList.toggle("on", si); }); d.setAttribute("aria-label", "dado " + v); }
  function giusta(c, d) { return c > d ? "su" : c === d ? "ug" : "giu"; }
  // l'unica scelta che non si può fare: ⬇️ sulla prima cifra col dado a 1 (un prezzo non comincia con lo 0)
  function possibile(i, d, x) { return !(i === 0 && d === 1 && x === "giu"); }
  function adattoD(p) { return intero(p) && p.prezzo >= 1000 && p.prezzo <= 9999; }
  // le scelte mandate da un telefono: una per cifra ("su", "ug", "giu" o null = non ancora scelta)
  function scelteDadi(s, dd) {
    if (!Array.isArray(s) || s.length !== dd.length) return null;
    return s.map(function (x, i) { return SCELTE.indexOf(x) >= 0 && possibile(i, dd[i], x) ? x : null; });
  }
  function esitoDadi(s, vero, dd) {
    var ok = dd.map(function (d, i) { return !!(s && s[i] && s[i] === giusta(+vero[i], d)); }), n = 0, pt = 0;
    ok.forEach(function (x, i) { if (x) { n++; pt += i === 0 ? DD.prima : DD.altre; } });
    if (n === dd.length) pt += DD.tutte;
    return { ok: ok, n: n, pt: s ? pt : 0 };
  }
  function durataDadi(riv) { return TD.prima + (((riv && riv.dadi) || []).length || 4) * TD.cifra + TD.esito + TD.fine + 400; }
  // la fila dei dadi, col punto delle migliaia: sotto ogni dado la cifra vera («?» finché non si scopre)
  function rigaDadi(el, dd, riv) {
    var fila = el("div", { class: "pzd-fila" + (riv ? " riv" : "") }), dadi = [], cifre = [], segni = [], n = dd.length;
    dd.forEach(function (v, i) {
      if (i && (n - i) % 3 === 0) fila.appendChild(el("span", { class: "pzd-fp", text: "." }));
      var d = dado(el, v), cf = el("span", { class: "pzd-cf", text: "?" }), sg = riv ? el("span", { class: "pzd-sg", text: "·" }) : null;
      fila.appendChild(el("div", { class: "pzd-dc" }, [ d, sg, cf ]));
      dadi.push(d); cifre.push(cf); segni.push(sg);
    });
    fila.appendChild(el("span", { class: "pzd-fp eu", text: "€" }));
    return { el: fila, dadi: dadi, cifre: cifre, segni: segni };
  }
  // i dadi rotolano una volta, quando compaiono (poi restano fermi: niente lampeggio)
  function rotola(A, nodi, vals) {
    nodi.forEach(function (d) { d.classList.add("rolla"); });
    var k = 0;
    (function giro() {
      if (!A.vivo() || !nodi.length || !nodi[0].isConnected) return;
      if (++k < 8) { nodi.forEach(function (d) { faccia(d, 1 + Math.floor(Math.random() * 6)); }); if (k % 2) A.FX.clic(0.7); setTimeout(giro, 85); return; }
      nodi.forEach(function (d, i) { faccia(d, vals[i]); d.classList.remove("rolla"); });
      A.FX.toc(700);
    })();
  }

  PREMI.dadi = {
    nome: "Il Gioco dei Dadi", icona: "🎲", ordine: 8,
    regola: "Un dado per ogni cifra del prezzo: la cifra vera è più alta, uguale o più bassa?",
    aiuto: "🎲 Cifra per cifra, contro il dado",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Ogni cifra del prezzo ha il suo dado: per ognuna dì se la cifra vera è ⬆️ più alta, = uguale o ⬇️ più bassa del dado. La prima cifra vale 200 punti, le altre 60, +150 se le indovini tutte.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "Sopra ogni cifra del prezzo c'è un dado. Per ogni cifra dì se quella vera è ⬆️ più alta, = uguale o ⬇️ più bassa.",
    es: "Il primo dado è 3 e pensi che costi 2.500 € → la prima cifra (2) è ⬇️ più bassa.",
    pt: "Prima cifra giusta 200 punti, le altre 60 l'una, +150 se le indovini tutte.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = P.pesca(adattoD, 1)[0] || P.pesca(function (p) { return intero(p) && p.prezzo >= 100 && p.prezzo < 100000; }, 1)[0];
      if (!prod) prod = { id: "x", e: "🛵", nome: "Uno scooter", desc: "", dove: "", cat: "motori", prezzo: 2590 };
      var vero = String(Math.round(prod.prezzo)), dadi = vero.split("").map(function () { return 1 + Math.floor(P.rnd() * 6); });
      return { prod: prod, vero: vero, dadi: dadi, s: {}, f: {}, ms: {} };
    },
    tempo: function () { return DD.sec; },
    pubblico: function (st) { return { prod: pubProd(st.prod), dadi: st.dadi.slice(), fatti: Object.keys(st.f) }; },
    mossa: function (st, id, m, P) {
      var s = scelteDadi(m.s, st.dadi); if (!s || st.f[id]) return;
      st.s[id] = s; st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      if (m.fine) { st.f[id] = 1; P.fatto(id); }
    },
    privatoDi: function (st, id) { return st.s[id] ? { s: st.s[id], f: !!st.f[id] } : null; },
    fine: function (st, P) {
      var punti = {}, g = [], carrello = {};
      P.ids.forEach(function (id) {
        var s = st.s[id] || null, e = esitoDadi(s, st.vero, st.dadi);
        punti[id] = e.pt;
        g.push({ id: id, s: s, ok: e.ok, n: e.n, pt: e.pt, ms: st.ms[id] || 0 });
        if (s && e.n === st.dadi.length) carrello[id] = [st.prod];   // chi le indovina tutte se lo porta a casa
      });
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, vero: st.vero, dadi: st.dadi, g: g } };
    },
    durata: function (riv) { return durataDadi(riv); },
    // il Bot pensa a un prezzo (arrotondato a 10, come quelli veri) e lo confronta coi dadi
    bot: function (st, bot, P) {
      var n = st.vero.length, lo = Math.pow(10, n - 1), hi = Math.pow(10, n) - 1;
      var e = Math.max(lo, Math.min(hi, Math.round(stima(P, +st.vero, bot.livello) / 10) * 10)), c = String(e).split("").map(Number);
      var s = st.dadi.map(function (d, i) { var x = giusta(c[i], d); return possibile(i, d, x) ? x : "ug"; });
      var ms = (bot.livello === "difficile" ? 6000 : bot.livello === "medio" ? 9000 : 12000) + P.rnd() * 8000;
      return [ { ms: Math.round(ms * 0.5), m: { s: s.map(function (x, i) { return i < 2 ? x : null; }) } }, { ms: Math.round(Math.min(DD.sec * 1000 - 1500, ms)), m: { s: s, fine: 1 } } ];
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, dd = pub.dadi || [], ch = el("div"), fila = rigaDadi(el, dd, false);
      A.sch.appendChild(A.testa("Il Gioco dei Dadi"));
      A.sch.appendChild(A.scheda(pub.prod || {}, { cls: "media grande" }));   // (25 ott: la scheda prende tutto lo spazio libero)
      fila.el.classList.add("pz-solo-giu");   // (mentre si gioca i dadi stanno nel pannello: sopra non si ripetono)
      A.sch.appendChild(fila.el);
      A.sch.appendChild(el("div", { class: "pz-sotto pzd-sotto pzd-sd pz-solo-giu", text: "Ogni cifra del prezzo: ⬆️ più alta, = uguale o ⬇️ più bassa del suo dado?" }));
      A.sch.appendChild(ch);
      chips(A, ch, pub.fatti || []);
      rotola(A, fila.dadi, dd);
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, (p && p.fatti) || []); } };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, dd = pub.dadi || [], n = dd.length, s = dd.map(function () { return null; }), chiuso = false, mosso = false;
      var tav = el("div", { class: "pzd-tav" }), col = [];
      dd.forEach(function (d, i) {
        if (i && (n - i) % 3 === 0) tav.appendChild(el("span", { class: "pzd-tp", text: "." }));
        var c = el("div", { class: "pzd-col" }), bt = {};
        c.appendChild(dado(el, d, "pic"));
        SCELTE.forEach(function (x) {
          var b = el("button", { class: "pzd-sc " + x, type: "button", "aria-label": PAROLA[x] }, [ el("b", { text: SIMB[x] }), el("small", { text: PAROLA[x] }) ]);
          if (!possibile(i, d, x)) { b.disabled = true; b.classList.add("no"); }
          premi(b, function () { scegli(i, x); });
          bt[x] = b; c.appendChild(b);
        });
        col.push(bt); tav.appendChild(c);
      });
      var ok = el("button", { class: "pz-ok pzd-fatto", type: "button", text: "✅ Fatto!" });
      premi(ok, function () { if (chiuso || s.some(function (x) { return !x; })) return; A.vibra(12); manda(true); blocca("✅ Fatto!"); });
      A.pan.appendChild(el("div", { class: "pz-nota forte pzd-nota", text: "La cifra vera è più alta, uguale o più bassa del dado?" }));
      A.pan.appendChild(tav); A.pan.appendChild(ok);
      var calmo = invioCalmo(A, manda);
      function disegna() {
        col.forEach(function (bt, i) { SCELTE.forEach(function (x) { var si = s[i] === x; if (bt[x].classList.contains("sel") !== si) bt[x].classList.toggle("sel", si); }); });
        if (chiuso) return;
        var manca = s.filter(function (x) { return !x; }).length, tx = manca ? (manca === 1 ? "Manca una cifra" : "Mancano " + manca + " cifre") : "✅ Fatto!";
        ok.disabled = manca > 0; if (ok.textContent !== tx) ok.textContent = tx;
      }
      function scegli(i, x) {
        if (chiuso || !possibile(i, dd[i], x) || s[i] === x) return;
        s[i] = x; mosso = true; disegna();
        A.vibra(8); A.FX.toc(x === "su" ? 880 : x === "ug" ? 700 : 520);
        calmo.dopo();
      }
      function manda(fine) {
        calmo.ferma();
        if (!fine && !mosso) return;
        A.invia(fine ? { s: s.slice(), fine: 1 } : { s: s.slice() });
      }
      function blocca(tx) { chiuso = true; ok.disabled = true; ok.textContent = tx; tav.classList.add("chiuso"); disegna(); }
      disegna();
      return {
        privato: function (m) {
          if (!m || chiuso) return;
          var v = scelteDadi(m.s, dd); if (!v) return;
          s = v; mosso = true; disegna();
          if (m.f) blocca("✅ Fatto!");
        },
        // il tempo è finito: valgono le scelte che si vedono (se hai toccato qualcosa)
        tempo: function () { if (chiuso) return; if (mosso) manda(false); blocca("⏰ Tempo scaduto"); }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, prod = riv.prod || {}, vero = String(riv.vero || ""), dd = riv.dadi || [], g = riv.g || [];
      var fila = rigaDadi(el, dd, true), righe = el("div", { class: "pzd-righe" + (g.length > 5 ? " fitto" : "") }), banner = el("div", { class: "pz-sotto pzd-bn", text: "Le cifre vere…" });
      A.sch.classList.add("pzb-fitto");
      A.sch.appendChild(A.testa("Il Gioco dei Dadi"));
      A.sch.appendChild(A.miniprod(prod));
      A.sch.appendChild(fila.el); A.sch.appendChild(righe); A.sch.appendChild(banner);
      var rr = g.map(function (x) {
        var chs = dd.map(function (d, i) { var c = x.s && x.s[i]; return el("span", { class: "pzd-ch " + (c || "vuota"), text: c ? SIMB[c] : "–" }); });
        var r = el("div", { class: "pzd-rg" }, [ A.fac(x.id), el("span", { class: "nm", text: A.nome(x.id) }), el("span", { class: "pzd-chs" }, chs) ]);
        righe.appendChild(r);
        return { x: x, r: r, chs: chs };
      });
      A.ST.FX.rullo(0.9);
      await A.dorme(TD.prima); if (!A.vivo()) return;
      // una cifra alla volta: si gira la cifra vera, compare il segno giusto, le scelte di tutti diventano verdi o rosse
      for (var i = 0; i < dd.length; i++) {
        var sg = giusta(+vero[i], dd[i]);
        fila.cifre[i].textContent = vero[i] || "?"; fila.cifre[i].classList.add("su");
        fila.segni[i].textContent = SIMB[sg]; fila.segni[i].classList.add("su");
        rr.forEach(function (o) { o.chs[i].classList.add(o.x.ok && o.x.ok[i] ? "si" : "no"); });
        A.FX.toc(560 + i * 90);
        await A.dorme(TD.cifra); if (!A.vivo()) return;
      }
      var tutte = [];
      rr.forEach(function (o) {
        var x = o.x, pt = (A.punti || {})[x.id] != null ? A.punti[x.id] : x.pt, piene = !!x.s && x.n === dd.length;
        if (pt) o.r.appendChild(el("span", { class: "pt", text: "+" + A.fmtN(pt) }));
        if (piene) { tutte.push(x); o.r.classList.add("tutte"); }
        cambiaFaccia(A, o.r, x.id, piene ? "evviva" : pt ? "esulta" : "triste");
      });
      A.FX.toc(880);
      if (tutte.length) {
        A.FX.din(); A.ST.coriandoli(); A.ST.pubblico(A.S, "ovazione");
        if (tutte.some(function (x) { return mioTelefono(A, x.id); })) A.vibra([30, 40, 70]);
        banner.className = "pz-banner oro pzd-bn";
        banner.textContent = tutte.length === 1 ? (eTu(A, tutte[0].id) ? "🎲 Le hai indovinate tutte!" : "🎲 Tutte giuste per " + A.nome(tutte[0].id) + "!") : "🎲 Tutte giuste per " + elenco(A, tutte.map(function (x) { return x.id; })) + "!";
      } else {
        // i più bravi: chi ha preso più cifre (a pari cifre, più punti: la prima vale di più); a pari merito tutti
        var best = g.filter(function (x) { return x.s; }).sort(function (a, b) { return b.n - a.n || b.pt - a.pt; })[0];
        var pari = best ? g.filter(function (x) { return x.s && x.n === best.n && x.pt === best.pt; }) : [];
        banner.className = best && best.n ? "pz-banner pzd-bn" : "pz-banner no pzd-bn";
        banner.textContent = !(best && best.n) ? "🎲 Nessuna cifra giusta!" : pari.length > 1 ? "🎲 I più bravi: " + elenco(A, pari.map(function (x) { return x.id; })) + " (" + best.n + " su " + dd.length + ")"
          : "🎲 Il più bravo: " + (eTu(A, best.id) ? "tu" : A.nome(best.id)) + " (" + best.n + " su " + dd.length + ")";
        A.ST.pubblico(A.S, best && best.n ? "applauso" : "ohh"); if (!(best && best.n)) A.FX.trombone();
      }
      await A.dorme(TD.esito + TD.fine);
    }
  };

  // =====================================================================
  // 🎯 IL MIRINO
  // =====================================================================
  var MI = { sec: 20, salita: 16500, coda: 1500, largo: 0.1, passo: 0.005, fMin: 0.1, fMax: 0.9, tMin: 0.15, tMax: 0.5, min: 30, max: 30000,
    dentro: 600, fuori: [[0.05, 350], [0.1, 200], [0.2, 75]] };
  var TM = { prima: 900, fin: 170, sale: 2400, esito: 1400, fine: 2300 };
  var CIMA = Math.round((1 - MI.largo) * 1000) / 1000;
  // online e col Bot il tempo dell'host è sec × 1000 + 800 ms (prezzo.js, giocaPremio): la salita comincia PRIMA ms dopo
  var PRIMA = MI.sec * 1000 + 800 - MI.coda - MI.salita;
  // il numero tondo più vicino (1; 1,2; 1,5; 2; 2,5; 3; 4; 5; 6; 8 per una potenza di 10)
  var TONDI = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  function tondo(x) {
    var k = Math.pow(10, Math.floor(Math.log(x) / Math.LN10 + 1e-9)), m = x / k, best = 1;
    TONDI.forEach(function (v) { if (Math.abs(Math.log(m / v)) < Math.abs(Math.log(m / best))) best = v; });
    return best * k;
  }
  // la scala da A a B: larghezza tonda, A multiplo di u (un decimo della potenza di 10 della larghezza) e mai 0; dove sta il
  // prezzo (f) e dove comincia la scala (t = A / larghezza) si scelgono a caso, l'uno senza guardare l'altro
  function scala(prezzo, rnd) {
    for (var k = 0; k < 80; k++) {
      var f = MI.fMin + rnd() * (MI.fMax - MI.fMin), t = MI.tMin * Math.pow(MI.tMax / MI.tMin, rnd()), sp = tondo(prezzo / (t + f));
      var u = Math.pow(10, Math.floor(Math.log(sp) / Math.LN10 + 1e-9) - 1), a = Math.round(t * sp / u) * u, ff = (prezzo - a) / sp;
      if (a >= u - 1e-9 && ff >= MI.fMin - 1e-9 && ff <= MI.fMax + 1e-9) return { a: tondo2(a), b: tondo2(a + sp) };
    }
    var sp2 = tondo(prezzo * 1.25), u2 = Math.pow(10, Math.floor(Math.log(sp2) / Math.LN10 + 1e-9) - 1), a2 = Math.max(u2, Math.round((prezzo - sp2 / 2) / u2) * u2);
    return { a: tondo2(a2), b: tondo2(a2 + sp2) };
  }
  // dove si ferma la finestrella (il suo bordo basso, da 0 a 0,9 della scala), a passi di mezzo centesimo della scala
  function fermaP(p) { return Math.max(0, Math.min(CIMA, Math.round(Math.round((+p || 0) / MI.passo) * MI.passo * 1000) / 1000)); }
  function finestra(a, b, p) { var sp = b - a; return [tondo2(a + p * sp), tondo2(a + (p + MI.largo) * sp)]; }
  // quanto il prezzo sta fuori dalla finestrella, in parti della scala (0 = dentro)
  function distanzaM(prezzo, a, b, p) { var w = finestra(a, b, p), sp = b - a; return prezzo >= w[0] - 1e-9 && prezzo <= w[1] + 1e-9 ? 0 : Math.min(Math.abs(prezzo - w[0]), Math.abs(prezzo - w[1])) / sp; }
  function puntiM(d) { if (d === 0) return MI.dentro; for (var i = 0; i < MI.fuori.length; i++) if (d <= MI.fuori[i][0] + 1e-9) return MI.fuori[i][1]; return 0; }
  function durataMirino(riv) { return TM.prima + (((riv && riv.g) || []).length) * TM.fin + TM.sale + TM.esito + TM.fine + 400; }
  // le scritte della scala: in cima B, a metà, in fondo A
  function etichette(A, a, b) { var el = A.el; return el("div", { class: "pzd-lab" }, [ el("span", { text: A.fmtE(b) }), el("span", { text: A.fmtE(tondo2(a + (b - a) / 2)) }), el("span", { text: A.fmtE(a) }) ]); }

  PREMI.mirino = {
    nome: "Il Mirino", icona: "🎯", ordine: 9,
    regola: "La finestrella sale sulla scala dei prezzi: fermala quando c'è dentro il prezzo giusto!",
    aiuto: "🎯 Il prezzo dentro la finestrella",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Una finestrella sale sulla scala dei prezzi: tocca «Stop!» quando il prezzo vero ci sta dentro. Dentro 600 punti, appena fuori 350, più lontano meno.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "Una finestrella sale sulla scala dei prezzi: tocca «🎯 Stop!» quando il prezzo vero ci sta dentro. Si tocca una volta sola.",
    es: "Scala da 100 a 1.100 € e pensi che costi 600 € → Stop quando la finestrella arriva a 600.",
    pt: "Prezzo dentro: 600 punti. Appena fuori: 350, poi 200 e 75.",
    min: 1, max: 8, locale: true,

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = P.pesca(function (x) { return x.prezzo >= MI.min && x.prezzo <= MI.max; }, 1)[0] || P.pesca(null, 1)[0];
      if (!prod) prod = { id: "x", e: "📺", nome: "Un televisore", desc: "", dove: "", cat: "tech", prezzo: 799 };
      var sc = scala(+prod.prezzo, P.rnd);
      return { prod: prod, a: sc.a, b: sc.b, p: {}, f: {}, ms: {} };
    },
    // (tempo() la chiama prezzo.js proprio quando si comincia: lì si segna l'ora dell'host, per chi ricarica la pagina)
    tempo: function (st) { st.t0 = Date.now(); return MI.sec; },
    // ms = da quanto si gioca, sul telefono dell'host: serve a chi ricarica la pagina, perché la prima foto che riceve è
    // quella vecchia rimasta nella stanza e con la sua ora di fine la finestrella starebbe più in basso del vero
    pubblico: function (st) { return { prod: pubProd(st.prod), a: st.a, b: st.b, fatti: Object.keys(st.f), ms: st.t0 ? Math.max(0, Date.now() - st.t0) : 0 }; },
    // una mossa sola: dove si è fermata la finestrella. («ora»: un telefono ha appena aperto il pannello e chiede l'ora: non
    // si fa niente, ma dopo ogni mossa prezzo.js manda a tutti una foto nuova, che gli dice da quanto si gioca)
    mossa: function (st, id, m, P) {
      if (m.ora) return;
      var p = +m.p; if (st.f[id] || !(p >= -1e-9 && p <= CIMA + 1e-9)) return;
      st.p[id] = fermaP(p); st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      st.f[id] = 1; P.fatto(id);
    },
    privatoDi: function (st, id) { return st.p[id] != null ? { p: st.p[id] } : null; },
    fine: function (st, P) {
      var punti = {}, g = [], carrello = {}, prezzo = +st.prod.prezzo;
      P.ids.forEach(function (id) {
        var fermo = st.p[id] != null, p = fermo ? st.p[id] : CIMA, d = distanzaM(prezzo, st.a, st.b, p), pt = puntiM(d);
        punti[id] = pt;
        g.push({ id: id, p: p, fermo: fermo, d: d, pt: pt, ms: st.ms[id] || 0 });
        if (d === 0) carrello[id] = [st.prod];   // chi ha il prezzo dentro la finestrella se lo porta a casa
      });
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, a: st.a, b: st.b, g: g } };
    },
    durata: function (riv) { return durataMirino(riv); },
    // il Bot mette il prezzo che crede a metà della sua finestrella e tocca quando ci arriva (col Bot la salita comincia
    // 2,8 s dopo l'inizio: il tempo dell'host è di 20 s + 0,8)
    bot: function (st, bot, P) {
      var sp = st.b - st.a, e = stima(P, +st.prod.prezzo, bot.livello), q = fermaP((e - st.a) / sp - MI.largo / 2 + gauss(P.rnd) * 0.01);
      var ms = PRIMA + q / CIMA * MI.salita + 150 + P.rnd() * 300;
      return [ { ms: Math.round(Math.min(MI.sec * 1000 - 300, ms)), m: { p: q } } ];
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, ch = el("div");
      A.sch.appendChild(A.testa("Il Mirino"));
      A.sch.appendChild(A.scheda(pub.prod || {}, { cls: "media grande" }));   // (25 ott: la scheda prende tutto lo spazio libero)
      A.sch.appendChild(el("div", { class: "pzd-tra pz-solo-giu" }, [ el("span", { text: "📏 Il prezzo è tra" }), el("b", { text: A.fmtE(pub.a || 0) + " e " + A.fmtE(pub.b || 0) }) ]));
      A.sch.appendChild(el("div", { class: "pz-sotto pzd-sotto pz-solo-giu", text: "🎯 La finestrella sale: fermala quando c'è dentro il prezzo!" }));
      A.sch.appendChild(ch);
      chips(A, ch, pub.fatti || []);
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, (p && p.fatti) || []); } };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, a = +pub.a || 0, b = +pub.b || 1, fermo = null, finito = false, raf = 0, txR = "", txN = "";
      // la salita finisce un secondo e mezzo prima della fine del tempo (così il tocco in cima arriva in tempo)
      var inizio = (A.fine || Date.now() + MI.sec * 1000) - MI.coda - MI.salita;
      // online: ogni foto nuova dice da quanto si gioca; si tiene la partenza più presto (una foto vecchia la sposta in là).
      // Chi ha appena aperto il pannello (anche dopo una ricarica, quando la prima foto è quella vecchia rimasta nella stanza)
      // chiede l'ora all'host: la foto nuova che arriva subito dopo rimette la finestrella alla stessa altezza degli altri
      function risincronizza(p) { if (A.locale || !p || !(+p.ms >= 0) || !p.ms) return; var x = Date.now() - p.ms + PRIMA; if (x < inizio - 30) inizio = x; }
      risincronizza(pub);
      if (!A.locale) A.invia({ ora: 1 });
      var win = el("div", { class: "pzd-win" }), mov = el("div", { class: "pzd-mov" }, [ win ]), trk = el("div", { class: "pzd-trk" }, [ mov ]);
      var rng = el("b", { class: "pzd-rng" }), nota = el("span", { class: "pzd-nt" });
      var stop = el("button", { class: "pz-ok pzd-stop", type: "button", text: "🎯 Stop!" });
      premi(stop, function () { if (fermo != null || finito) return; ferma(pos(Date.now()), true); });
      A.pan.appendChild(el("div", { class: "pzd-mp" }, [
        el("div", { class: "pzd-scala" }, [ etichette(A, a, b), trk ]),
        el("div", { class: "pzd-lato" }, [ el("span", { class: "pzd-tu", text: "La tua finestrella" }), rng, nota, stop ])
      ]));
      function pos(t) { return CIMA * Math.max(0, Math.min(1, (t - inizio) / MI.salita)); }
      function scrivi(n, tx, k) { if (k === "r") { if (tx !== txR) { txR = tx; n.textContent = tx; } } else if (tx !== txN) { txN = tx; n.textContent = tx; } }
      function metti(p) {
        mov.style.transform = "translateY(" + (-p * 100).toFixed(2) + "%)";
        var w = finestra(a, b, fermaP(p)); scrivi(rng, A.fmtE(w[0]) + " – " + A.fmtE(w[1]), "r");
      }
      // la finestrella sale da sola, calcolata dall'ora (solo il suo transform e la scritta che cambia)
      function giro() {
        raf = 0; if (fermo != null || finito || !trk.isConnected || !A.vivo()) return;   // (finito il gioco o usciti: si ferma)
        var t = Date.now(), p = pos(t); metti(p);
        scrivi(nota, t < inizio ? "⏳ Pronti… sta per salire" : p >= CIMA - 1e-9 ? "⬆️ È arrivata in cima" : "⬆️ Sale… tocca Stop!", "n");
        raf = requestAnimationFrame(giro);
      }
      function ferma(p, mio) {
        fermo = fermaP(p); if (raf) cancelAnimationFrame(raf); raf = 0;
        metti(fermo); win.classList.add("ferma"); stop.disabled = true; stop.textContent = "🎯 Ferma!"; scrivi(nota, "🎯 Si ferma qui", "n");
        if (mio) { A.vibra(14); A.FX.toc(990); A.invia({ p: fermo, fine: 1 }); }
      }
      metti(pos(Date.now())); giro();
      return {
        aggiorna: function (p) { if (fermo == null && !finito) risincronizza(p); },
        privato: function (m) { if (m && m.p != null && fermo == null && !finito) ferma(+m.p, false); },
        // il tempo è finito senza «Stop!»: la finestrella resta in cima
        tempo: function () { if (fermo != null || finito) return; finito = true; if (raf) cancelAnimationFrame(raf); raf = 0; metti(CIMA); stop.disabled = true; stop.textContent = "⏰ Tempo scaduto"; scrivi(nota, "Resta in cima", "n"); }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, prod = riv.prod || {}, a = +riv.a || 0, b = +riv.b || 1, sp = (b - a) || 1, prezzo = +prod.prezzo || 0, g = riv.g || [];
      var fr = Math.max(0, Math.min(1, (prezzo - a) / sp));
      var cols = el("div", { class: "pzd-cols" }), facce = el("div", { class: "pzd-rf" }), tag = A.Z.cartellino(el, "?", "pzd-tag");
      var frec = el("div", { class: "pzd-frec" }, [ el("i", { class: "ln" }), tag ]);
      var banner = el("div", { class: "pz-sotto pzd-bn", text: "Le finestrelle di tutti…" });
      A.sch.classList.add("pzb-fitto");
      A.sch.appendChild(A.testa("Il Mirino"));
      A.sch.appendChild(A.miniprod(prod));
      A.sch.appendChild(el("div", { class: "pzd-rv" + (g.length > 5 ? " fitto" : "") }, [ etichette(A, a, b), el("div", { class: "pzd-rtrk" }, [ cols, frec ]) ]));
      A.sch.appendChild(el("div", { class: "pzd-rfw" + (g.length > 5 ? " fitto" : "") }, [ el("span"), facce ]));
      A.sch.appendChild(banner);
      var cc = g.map(function (x, j) {
        var w = el("div", { class: "pzd-rw" }), c = el("div", { class: "pzd-c" }, [ w ]), fc = el("div", { class: "pzd-fc" }, [ A.fac(x.id), el("span", { class: "nm", text: A.nome(x.id) }), el("span", { class: "pt zero", text: "·" }) ]);
        w.style.bottom = (x.p * 100).toFixed(2) + "%"; w.style.setProperty("--col", COLORI[j % COLORI.length]); fc.style.setProperty("--col", COLORI[j % COLORI.length]);
        cols.appendChild(c); facce.appendChild(fc);
        return { x: x, w: w, fc: fc };
      });
      A.ST.FX.rullo(0.9);
      await A.dorme(TM.prima); if (!A.vivo()) return;
      for (var i = 0; i < cc.length; i++) { cc[i].w.classList.add("su"); A.FX.toc(520 + i * 60); await A.dorme(TM.fin); if (!A.vivo()) return; }
      // la freccia del prezzo vero sale dal basso e si ferma al suo posto
      banner.textContent = "E il prezzo è…";
      A.ST.FX.rullo(1.6);
      frec.classList.add("va"); frec.style.transform = "translateY(" + (-fr * 100).toFixed(2) + "%)";
      await A.dorme(TM.sale); if (!A.vivo()) return;
      tag.textContent = A.fmtE(prezzo); tag.classList.add("su"); A.FX.toc(990);
      var dentro = [];
      cc.forEach(function (o) {
        var x = o.x, pt = (A.punti || {})[x.id] != null ? A.punti[x.id] : x.pt, ptn = o.fc.querySelector(".pt");
        o.w.classList.add(x.d === 0 ? "dentro" : pt ? "vicino" : "lontano");
        ptn.textContent = pt ? "+" + A.fmtN(pt) : "0"; ptn.className = "pt" + (pt ? "" : " zero") + (x.d === 0 ? " oro" : "");
        if (x.d === 0) dentro.push(x);
        cambiaFaccia(A, o.fc, x.id, x.d === 0 ? "evviva" : pt ? "esulta" : "triste");
      });
      if (dentro.length) {
        A.FX.din(); A.ST.coriandoli(); A.ST.pubblico(A.S, "ovazione");
        if (dentro.some(function (x) { return mioTelefono(A, x.id); })) A.vibra([30, 40, 70]);
        banner.className = "pz-banner oro pzd-bn";
        banner.textContent = dentro.length === 1 ? (eTu(A, dentro[0].id) ? "🎯 Preso! Il prezzo è nella tua finestrella" : "🎯 Preso da " + A.nome(dentro[0].id) + "!") : "🎯 Preso da " + elenco(A, dentro.map(function (x) { return x.id; })) + "!";
      } else {
        var vic = g.slice().sort(function (x, y) { return x.d - y.d; })[0], vicini = vic ? g.filter(function (x) { return Math.abs(x.d - vic.d) < 1e-9; }) : [];
        banner.className = "pz-banner pzd-bn";
        banner.textContent = !vic ? "😅 Nessuno l'ha preso!" : vicini.length > 1 ? "😅 Nessuno l'ha preso: i più vicini sono " + elenco(A, vicini.map(function (x) { return x.id; }))
          : "😅 Nessuno l'ha preso: " + (eTu(A, vic.id) ? "ci vai più vicino tu" : "ci va più vicino " + A.nome(vic.id));
        A.ST.pubblico(A.S, vic && vic.pt ? "applauso" : "ohh"); if (!(vic && vic.pt)) A.FX.trombone();
      }
      await A.dorme(TM.esito + TM.fine);
    }
  };

  // ---------------- lo stile (una volta) ----------------
  function stile() {
    if (document.getElementById("sg-pzd-css")) return;
    var s = document.createElement("style"); s.id = "sg-pzd-css";
    s.textContent = [
      ".pz-sch.pzb-fitto{gap:6px}",   // (anche se nessun gioco del file b è ancora partito)
      ".pzd-sotto{font-size:13px;max-width:360px}",
      // i dadi: una griglia 3×3 di puntini
      ".pzd-dado{--dd:clamp(34px,calc(var(--alt,640px) * .058),50px);display:inline-grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);width:var(--dd);height:var(--dd);padding:calc(var(--dd) * .12);box-sizing:border-box;border-radius:24%;background:linear-gradient(145deg,#ffffff,var(--o-testo));box-shadow:inset 0 -3px 0 rgba(60,40,140,.25),0 3px 8px rgba(0,0,0,.35);flex:0 0 auto}",
      ".pzd-dado i{display:block;width:72%;height:72%;margin:auto;border-radius:50%}.pzd-dado i.on{background:radial-gradient(circle at 35% 35%,#4a3f8a,#14102e)}",
      ".pzd-dado.rolla{animation:pzdRolla .75s cubic-bezier(.3,1.3,.5,1)}",
      "@keyframes pzdRolla{0%{transform:translateY(-16px) rotate(-220deg) scale(.55)}60%{transform:translateY(3px) rotate(14deg) scale(1.06)}100%{transform:none}}",
      ".pzd-fila{display:flex;align-items:flex-end;justify-content:center;gap:6px}",
      ".pzd-dc{display:flex;flex-direction:column;align-items:center;gap:4px}",
      ".pzd-cf{min-width:calc(var(--dd,40px) * .8);padding:2px 0;text-align:center;font:900 22px/1.1 system-ui,sans-serif;border-radius:8px;background:#05030f;color:#ffd43b;box-shadow:0 0 0 2px #ffd43b55;font-variant-numeric:tabular-nums}",
      ".pzd-dc .pzd-cf{--dd:clamp(34px,calc(var(--alt,640px) * .058),50px)}",
      ".pzd-cf.su{animation:pzdGira .45s ease-out;background:#2a1f66;color:#fff;box-shadow:0 0 0 2px #ffd43b}@keyframes pzdGira{from{transform:rotateX(90deg)}to{transform:none}}",
      ".pzd-sg{min-height:18px;font-size:15px;line-height:18px;font-weight:900;color:#fff;opacity:.25;transition:opacity .25s}.pzd-sg.su{opacity:1}",
      ".pzd-fp{font-size:24px;font-weight:900;color:var(--o-oro);padding-bottom:3px;line-height:1}.pzd-fp.eu{color:#fff;font-size:20px;padding-bottom:5px}",
      // il pannello dei Dadi: per ogni cifra il suo dado e i tre tasti
      ".pz-nota.pzd-nota{margin-bottom:2px;font-size:14px;line-height:1.25}",
      ".pzd-tav{display:flex;align-items:stretch;justify-content:center;gap:5px}",
      ".pzd-col{flex:1 1 0;min-width:0;max-width:96px;display:flex;flex-direction:column;align-items:stretch;gap:3px}",
      ".pzd-col .pzd-dado{--dd:clamp(26px,calc(var(--alt,640px) * .045),40px);align-self:center}",
      ".pzd-tp{flex:0 0 auto;font-size:24px;font-weight:900;color:var(--o-oro);line-height:1;padding-top:8px}",
      ".pzd-sc{height:clamp(32px,calc(var(--alt,640px) * .052),46px);padding:0;border:0;border-radius:11px;display:flex;flex-direction:column;align-items:center;justify-content:center;font:inherit;color:#1d1b3a;background:linear-gradient(#fff,#eceef8);box-shadow:inset 0 -3px 0 rgba(14,18,44,.25);cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:transform .08s}",
      ".pzd-sc:active{transform:scale(.95)}.pzd-sc b{font-size:16px;line-height:1.05;font-weight:900}.pzd-sc small{font-size:10px;font-weight:800;line-height:1.1;color:#b0184f;white-space:nowrap}",
      ".pzd-sc.sel{background:linear-gradient(#ffe6ee,#ffc4d6);box-shadow:0 0 0 3px #ff4f86,inset 0 -3px 0 rgba(0,0,0,.18)}.pzd-sc.sel small{color:#3a0b1a}",
      ".pzd-sc.no{opacity:.22;cursor:default}",
      ".pzd-tav.chiuso .pzd-sc{pointer-events:none}.pzd-tav.chiuso .pzd-sc:not(.sel):not(.no){opacity:.45}",
      ".pzd-fatto{margin-top:2px;width:100%;height:clamp(38px,calc(var(--alt,640px) * .062),54px)}",
      // sui telefoni bassi, col pannello su, il maxischermo dei Dadi lascia giù la frase (c'è già nel pannello) e i «?»
      "@media (max-height:700px){.st-vista.pz-con-pan .pzd-sd{display:none}.st-vista.pz-con-pan .pzd-fila:not(.riv) .pzd-cf{display:none}}",
      // la rivelazione dei Dadi
      ".pzd-righe{display:flex;flex-direction:column;gap:5px;width:100%;max-width:440px}",
      ".pzd-rg{position:relative;display:flex;align-items:center;gap:6px;padding:3px 8px 3px 3px;border-radius:12px;background:rgba(255,255,255,.08);animation:pzSu .35s both}",
      ".pzd-rg .fac,.pzd-fc .fac{border-radius:50%;overflow:hidden;background:rgba(255,255,255,.14);flex:0 0 auto}.pzd-rg .fac svg,.pzd-fc .fac svg,.pzd-rg .fac img,.pzd-fc .fac img{width:100%;height:100%;display:block}",
      ".pzd-rg .fac{width:26px;height:26px}.pzd-rg .nm{flex:1;min-width:0;font-size:12px;font-weight:800;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pzd-chs{display:flex;gap:3px;flex:0 0 auto}",
      ".pzd-ch{min-width:25px;height:22px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;border-radius:6px;background:#05030f;color:#fff;transition:background .3s}",
      ".pzd-ch.ug{font-size:19px;font-weight:700}.pzd-ch.si{background:#2f9e44}.pzd-ch.no{background:#c92a2a}.pzd-ch.vuota{color:var(--o-tenue)}",
      ".pzd-rg .pt{flex:0 0 auto;font-weight:900;font-size:12px;color:var(--o-verde-testo);background:var(--o-verde);border-radius:99px;padding:1px 7px}",
      ".pzd-rg.tutte{background:rgba(105,240,174,.22);box-shadow:0 0 0 2px var(--o-verde)}",
      ".pzd-righe.fitto{gap:3px}.pzd-righe.fitto .pzd-rg{padding:1px 6px 1px 2px}.pzd-righe.fitto .fac{width:22px;height:22px}.pzd-righe.fitto .pzd-ch{height:19px;min-width:22px;font-size:13px}",
      ".pzd-bn{margin-top:2px}",
      // il Mirino: «il prezzo è tra…» sul maxischermo
      ".pzd-tra{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:center;gap:4px 8px;font-weight:800;color:var(--o-tenue);font-size:14px}.pzd-tra b{font-size:21px;font-weight:900;color:var(--o-verde)}",
      // il pannello del Mirino: la scala con la finestrella che sale, e accanto «Stop!»
      ".pzd-mp{display:flex;gap:12px;align-items:stretch}",
      ".pzd-scala{flex:0 0 54%;display:grid;grid-template-columns:auto minmax(0,1fr);gap:6px;height:clamp(150px,calc(var(--alt,640px) * .3),270px)}",
      ".pzd-lab{display:flex;flex-direction:column;justify-content:space-between;font-size:11px;font-weight:900;color:var(--o-tenue);text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;line-height:1}",
      ".pzd-trk,.pzd-rtrk{position:relative;border-radius:10px;background:repeating-linear-gradient(to top,rgba(255,255,255,0) 0,rgba(255,255,255,0) calc(25% - 1px),rgba(255,255,255,.22) calc(25% - 1px),rgba(255,255,255,.22) 25%),linear-gradient(rgba(255,255,255,.16),rgba(255,255,255,.06));box-shadow:inset 0 0 0 2px rgba(255,255,255,.18)}",
      ".pzd-trk{overflow:hidden}",
      ".pzd-mov{position:absolute;left:0;right:0;bottom:0;height:100%;will-change:transform}",
      ".pzd-win{position:absolute;left:4px;right:4px;bottom:0;height:10%;box-sizing:border-box;border-radius:6px;border:2px solid #ffd43b;background:rgba(255,212,59,.35);box-shadow:0 0 10px rgba(255,212,59,.6)}",
      ".pzd-win:after{content:'';position:absolute;left:0;right:0;top:50%;height:2px;margin-top:-1px;background:#ffd43b;opacity:.75}",
      ".pzd-win.ferma{border-color:#69f0ae;background:rgba(105,240,174,.42);box-shadow:0 0 14px rgba(105,240,174,.75)}.pzd-win.ferma:after{background:#69f0ae}",
      ".pzd-lato{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:6px;text-align:center}",
      ".pzd-tu{font-size:12px;font-weight:800;color:var(--o-tenue)}",
      ".pzd-rng{font-size:16px;font-weight:900;color:var(--o-oro-testo);font-variant-numeric:tabular-nums;line-height:1.2;min-height:2.4em;display:flex;align-items:center;justify-content:center}",
      ".pzd-nt{font-size:12.5px;font-weight:800;color:var(--o-tenue);min-height:1.3em}",
      ".pzd-stop{height:clamp(52px,calc(var(--alt,640px) * .09),70px);font-size:22px;border-radius:16px;margin:0;width:100%}",
      // la rivelazione del Mirino: le finestrelle di tutti, la freccia del prezzo, le facce sotto
      ".pzd-rv{display:grid;grid-template-columns:80px minmax(0,1fr);gap:6px;width:100%;max-width:440px;height:clamp(140px,calc(var(--alt,640px) * .32),320px);flex:0 0 auto}",
      ".pzd-rv .pzd-lab{font-size:11.5px}",
      ".pzd-cols{position:absolute;inset:0;display:flex;justify-content:center;gap:3px;padding:0 4px;overflow:hidden;border-radius:10px}",
      ".pzd-c,.pzd-fc{position:relative;flex:0 1 50px;min-width:0}",
      ".pzd-rw{position:absolute;left:0;right:0;height:10%;box-sizing:border-box;border-radius:6px;border:2px solid #fff;background:var(--col,#ffd43b);opacity:0;transform:scaleY(.2);transition:opacity .25s,transform .35s cubic-bezier(.3,1.6,.5,1),box-shadow .3s}",
      ".pzd-rw.su{opacity:.92;transform:none}.pzd-rw.dentro{box-shadow:0 0 0 3px #69f0ae,0 0 16px #69f0ae;opacity:1}.pzd-rw.lontano{opacity:.4}",
      ".pzd-frec{position:absolute;left:0;right:0;bottom:0;height:100%;pointer-events:none;z-index:2}",
      ".pzd-frec.va{transition:transform 2.2s cubic-bezier(.25,.8,.3,1)}",
      ".pzd-frec .ln{position:absolute;left:-6px;right:-4px;bottom:0;height:3px;margin-bottom:-1.5px;background:#ff3ea5;box-shadow:0 0 8px #ff3ea5;border-radius:2px}",
      ".pzd-frec .ln:before{content:'';position:absolute;left:-2px;top:50%;margin-top:-7px;border:7px solid transparent;border-left:10px solid #ff3ea5;border-right:0}",
      ".pzd-frec .pzd-tag{position:absolute;right:100%;bottom:0;margin-right:4px;transform:translateY(50%);max-width:80px;box-sizing:border-box;font-size:12.5px;padding:2px 5px 2px 11px}.pzd-frec .pzd-tag:before{left:4px;width:4px;height:4px;margin-top:-2px}",
      ".pzd-frec .pzd-tag.su{animation:pzPop .35s cubic-bezier(.3,1.6,.5,1) both}",
      ".pzd-rfw{display:grid;grid-template-columns:80px minmax(0,1fr);gap:6px;width:100%;max-width:440px}",
      ".pzd-rf{display:flex;justify-content:center;gap:3px;padding:0 4px}",
      ".pzd-fc{display:flex;flex-direction:column;align-items:center;gap:1px}",
      ".pzd-fc .fac{width:26px;height:26px;box-shadow:0 0 0 2px var(--col,#fff)}",
      ".pzd-fc .nm{max-width:100%;font-size:10px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pzd-fc .pt{font-weight:900;font-size:11px;color:var(--o-verde-testo);background:var(--o-verde);border-radius:99px;padding:0 5px;white-space:nowrap}.pzd-fc .pt.zero{background:rgba(255,255,255,.15);color:var(--o-tenue)}.pzd-fc .pt.oro{background:var(--o-oro);color:#3b2a00}",
      ".pzd-rfw.fitto .pzd-fc .fac{width:22px;height:22px}.pzd-rfw.fitto .pzd-fc .nm{font-size:9px}.pzd-rfw.fitto .pzd-fc .pt{font-size:10px;padding:0 3px}",
      "@media (prefers-reduced-motion:reduce){.pzd-dado.rolla,.pzd-cf.su,.pzd-rg{animation:none}.pzd-frec.va,.pzd-rw{transition:none}}"
    ].join("\n");
    document.head.appendChild(s);
  }
})();

/* =========================================================
   «IL PREZZO È GIUSTO!» — giochi a premi (file e, 23 ott 2026): «✅ La Prova del 5» e «🧹 Togli la cifra», tutti insieme
   ognuno dal suo telefono. L'interfaccia dei giochi a premi è spiegata in js/games/prezzo-premi-piu.js; il modello seguito è
   js/games/prezzo-premi-c.js. I punti sono scelti con la simulazione
   (.agents/skills/prova-nel-browser/prezzo/simulazione/premi-e-sim.js, che usa QUESTO file: stessi prodotti, stessi cartellini,
   stessi punti): in media circa 300 a testa come gli altri giochi a premi, chi conosce i prezzi fa di più, chi tira a caso
   sta molto sotto (regole dell'equilibrio in AGENTS.md).

   ✅ LA PROVA DEL 5 (della versione italiana): 5 prodotti da 0,50 a 300 €, ognuno col suo cartellino. Alcuni cartellini hanno
      il prezzo vero, gli altri sono sbagliati del 25-45% in più o in meno, e finiscono come il prezzo vero (stessi centesimi o
      stesse ultime cifre: 7,49 € → 9,49 €, 399 € → 299 €), così non si scoprono dalla fine. Quanti sono giusti (da 1 a 4) cambia
      a ogni partita, è uguale per tutti e non si dice. Ognuno, in segreto, segna ogni cartellino ✓ giusto o ✗ sbagliato.
      35 secondi; valgono le scelte che si vedono allo scadere (un cartellino non segnato è un errore). Punti per quante ne
      azzecchi: 0-2 → 0, 3 → 200, 4 → 400, 5 → 700 (chi le azzecca tutte si porta a casa i 5 prodotti).
      Rivelazione: i cartellini si girano uno alla volta (verde se era giusto, rosso col prezzo vero se era sbagliato) e
      intanto si colorano le scelte di tutti.
   🧹 TOGLI LA CIFRA (lo «Squeeze Play» della versione americana): 3 prodotti con un prezzo intero di 3, 4 e 5 cifre (dal più
      facile). Ogni prezzo si vede con UNA cifra in più infilata in mezzo, mai la prima né l'ultima (che quindi non si toccano):
      si tocca la cifra da togliere e accanto compare il prezzo che viene. La cifra in più è sempre diversa dalle due vicine,
      così una sola scelta dà il prezzo giusto; tra le cifre possibili si preferiscono quelle che fanno venire prezzi credibili
      (che finiscono come i prezzi veri) e lontani almeno il 10% da quello vero. 35 secondi; valgono le scelte allo scadere.
      Punti: 120 per ogni prezzo giusto, +300 se li indovini tutti e tre (= 660; chi li indovina tutti si porta a casa i 3 premi).
      Rivelazione: un prodotto alla volta la cifra di troppo vola via e compare il prezzo vero; si colorano le scelte di tutti.

   LA SIMULAZIONE (premi-e-sim.js, 40.000 partite per tipo di giocatore; il modello di errore di premi-nuovi.js: il prezzo
   pensato è quello vero × e^(N(0,1)·s), bravo s = 0,15, medio 0,30, scarso 0,45; media = (bravo + 2 × medio + scarso) / 4):
     Prova del 5    media 296 · bravo 456 · medio 263 · scarso 203 · a caso 146 (giuste in media 4,1 / 3,2 / 2,9 / 2,5 su 5;
                    tutte e 5: 36% / 11% / 6% / 3%; a zero: 4% / 25% / 37% / 50%)
     Togli la cifra media 307 · bravo 343 · medio 300 · scarso 286 · a caso 142 (giusti in media 2,1 / 1,9 / 1,8 / 1,1 su 3;
                    tutti e 3: 32% / 25% / 22% / 4%)
   Chi tira a caso fa circa metà di un giocatore medio. In Togli la cifra la bravura conta meno tra bravo e scarso: quando due
   prezzi possibili sono vicini (24.950 o 24.990?) decide il buon senso su come finiscono i prezzi, che hanno tutti; conta
   molto invece rispetto a chi tira a caso. Scartati (simulazione con «tabelle»): Prova del 5 con 150/400/800 (media 296 ma
   800 è troppo) e 0/100/300/700 (media 235), cartellini sbagliati del 20-45% (la bravura contava meno); Togli la cifra
   100 +200 (media 241) e 120 +250 (293). Il colpo più alto (700 e 660) è come la Cassaforte aperta: chi tira a caso lo
   prende il 3-4% delle volte.
   Stile: classi col prefisso pze- (più quelle pz- di prezzo-scena.js).
   ========================================================= */
(function () {
  "use strict";
  var PREMI = window.SG_PREZZO_PREMI = window.SG_PREZZO_PREMI || {};
  var ERR = { facile: 0.45, medio: 0.25, difficile: 0.12 };

  function Z() { return window.SGPrezzoScena || {}; }
  function tondo2(v) { return Math.round((+v || 0) * 100) / 100; }
  function fmtN(n) { var s = String(Math.round(Math.abs(n || 0))).replace(/\B(?=(\d{3})+(?!\d))/g, "."); return (n < 0 ? "−" : "") + s; }
  function gauss(rnd) { var u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  // il Bot sa il prezzo vero e sbaglia apposta (facile ±45%, medio ±25%, difficile ±12%), come negli altri giochi
  function stima(P, prezzo, liv) { var g = Math.max(-2.5, Math.min(2.5, gauss(P.rnd))); return prezzo * Math.exp(g * (ERR[liv] || 0.25) * 0.85); }
  function pubProd(p) { p = p || {}; return { e: p.e, f: p.f || null, nome: p.nome, desc: p.desc || "", dove: p.dove || "", cat: p.cat }; }
  // tocco subito col pointerdown (su iPhone il click a volte non arriva); il click resta per mouse e tastiera
  function premi(b, fn) {
    var ultimo = 0;
    b.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse" && e.button) return; e.preventDefault(); ultimo = Date.now(); fn(); });
    b.addEventListener("click", function () { if (ultimo) { ultimo = 0; return; } fn(); });   // (il click dopo un tocco non conta)
  }
  function svuota(n) { while (n && n.firstChild) n.removeChild(n.firstChild); }
  function eTu(A, id) { return A.nome(id) === "Tu"; }
  // («Tutte giuste per te e Luca», mai «per Tu e Luca»)
  function elenco(A, ids) { var n = ids.map(function (id) { var x = A.nome(id); return x === "Tu" && ids.length > 1 ? "te" : x; }); return n.length < 2 ? n.join("") : n.slice(0, -1).join(", ") + " e " + n[n.length - 1]; }
  // le chip di chi ha finito, sotto il maxischermo (si aggiorna solo il segno che cambia: niente lampeggio)
  function chips(A, box, fatti) {
    svuota(box); box.className = "pz-tab" + (A.giocatori.length > 4 ? " fitto" : "");
    A.giocatori.forEach(function (g) {
      var ok = fatti.indexOf(g.id) >= 0;
      box.appendChild(A.el("span", { class: "pz-och" + (ok ? " ok" : " aspetta") }, [ A.fac(g.id), A.el("span", { class: "nm", text: A.nome(g.id) }), A.el("span", { class: "v", text: ok ? "✅" : "…" }) ]));
    });
  }
  function aggChips(A, box, fatti) {
    A.giocatori.forEach(function (g, i) {
      var c = box.children[i], v = c && c.querySelector(".v"), ok = fatti.indexOf(g.id) >= 0, tx = ok ? "✅" : "…";
      if (v && v.textContent !== tx) { v.textContent = tx; c.classList.toggle("ok", ok); c.classList.toggle("aspetta", !ok); }
    });
  }
  // i messaggi provvisori partono un secondo dopo l'ultimo tocco (o subito negli ultimi 4 secondi)
  function invioCalmo(A, manda) {
    var to = null;
    return {
      dopo: function () { clearTimeout(to); var resta = (A.fine || 0) - Date.now(); if (resta > 0 && resta < 4000) manda(false); else to = setTimeout(function () { manda(false); }, 1000); },
      ferma: function () { clearTimeout(to); to = null; }
    };
  }
  function testoOk(manca) { return !manca ? "✅ Fatto!" : manca === 1 ? "Ne manca 1" : "Ne mancano " + manca; }
  // la riga di un giocatore nella rivelazione: faccina, nome, un segno per prodotto, i punti (già al loro posto ma nascosti:
  // così quando compaiono non si sposta niente)
  function rigaGente(A, x, segni) {
    var el = A.el, mk = el("span", { class: "pze-mk" }), m = segni.map(function (tx) { var i = el("i", { text: tx }); mk.appendChild(i); return i; });
    var pt = el("span", { class: "pt nasc", text: "+0" }), r = el("div", { class: "pze-g" }, [ A.fac(x.id), el("span", { class: "nm", text: A.nome(x.id) }), mk, pt ]);
    return { x: x, r: r, m: m, pt: pt };
  }
  function puntiRiga(A, q, tutte) {
    var pt = (A.punti || {})[q.x.id] != null ? A.punti[q.x.id] : q.x.pt;
    q.pt.textContent = "+" + fmtN(pt); q.pt.classList.remove("nasc"); q.pt.classList.toggle("zero", !pt);
    q.r.classList.add(tutte ? "tutte" : pt ? "bene" : "male");
    var f = q.r.querySelector(".fac"); if (f) f.parentNode.replaceChild(A.fac(q.x.id, tutte ? "evviva" : pt ? "esulta" : "triste"), f);
    return pt;
  }

  // =====================================================================
  // ✅ LA PROVA DEL 5
  // =====================================================================
  var P5 = { n: 5, sec: 35, min: 0.5, max: 300, quanti: [1, 2, 3, 4], off: [0.25, 0.45], punti: [0, 0, 0, 200, 400, 700] };
  var SOGLIA = { facile: 0.4, medio: 0.27, difficile: 0.18 };   // il Bot dice «giusto» se il cartellino è entro questo dal prezzo che crede
  var TP = { prima: 1100, giro: 1000, esito: 1300, fine: 2300 };
  // la «grana» del cartellino falso: cambia la parte grossa e tiene la coda del prezzo vero (centesimi o ultime cifre),
  // così 7,49 € diventa 9,49 € e non 9,70 € (un prezzo falso tondo si scoprirebbe dalla fine)
  function grana(p) { return p < 3 ? 10 : p < 30 ? 100 : p < 300 ? 1000 : 10000; }   // in centesimi
  function cartellinoFalso(p, rnd) {
    var c = Math.round(p * 100), G = grana(p), coda = c % G, a = P5.off[0], b = P5.off[1];
    for (var t = 0; t < 60; t++) {
      var su = rnd() < 0.5, m = a + rnd() * (b - a), mira = su ? p * (1 + m) : p * (1 - m);
      var k = Math.round((mira * 100 - coda) / G), v = (k * G + coda) / 100, r = v / p;
      if (v > 0 && (su ? r >= 1 + a - 0.04 && r <= 1 + b + 0.04 : r <= 1 - a + 0.04 && r >= 1 - b - 0.04)) return tondo2(v);
    }
    return tondo2(Math.max(0.1, Math.round(p * 1.35 * 10) / 10));   // (non succede: per sicurezza)
  }
  function scelte(s, n) {
    if (!Array.isArray(s) || s.length !== n) return null;
    for (var i = 0; i < n; i++) if (!(s[i] === 1 || s[i] === 0 || s[i] == null)) return null;
    return s.map(function (x) { return x == null ? null : x; });
  }
  function giuste5(s, ok) { var n = 0; if (!s) return 0; ok.forEach(function (g, i) { if (s[i] != null && (s[i] === 1) === !!g) n++; }); return n; }
  function durata5(riv) { return TP.prima + ((riv && riv.prod) || []).length * TP.giro + TP.esito + TP.fine + 300; }

  PREMI.prova5 = {
    nome: "La Prova del 5", icona: "✅", ordine: 10,
    regola: "Cinque cartellini: per ognuno, il prezzo è giusto o sbagliato? Quanti sono giusti non si sa!",
    aiuto: "🔍 Quanti sono giusti? Non si sa",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "Cinque prodotti col cartellino: per ognuno dì se il prezzo è ✓ giusto o ✗ sbagliato (quanti sono giusti non si sa). 3 giusti: 200 punti · 4 giusti: 400 · tutti e 5 giusti: 700.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "5 prodotti, ognuno col suo cartellino. Per ognuno tocca ✓ se il prezzo è giusto o ✗ se è sbagliato. Quanti sono giusti non si sa.",
    es: "Latte a 1,79 € → ✓ giusto. Bicicletta a 99 € → ✗ sbagliato (costa di più).",
    pt: "3 risposte giuste: 200 punti · 4: 400 · tutte e 5: 700.",
    min: 1, max: 8, locale: true,
    _P5: P5, _falso: cartellinoFalso,   // (per la simulazione e le prove)

    // ---------------- host ----------------
    prepara: function (P) {
      var dentro = function (x) { return x.prezzo >= P5.min && x.prezzo <= P5.max; };
      var prod = P.pesca(dentro, P5.n);
      if (prod.length < P5.n) prod = prod.concat(P.pesca(null, P5.n - prod.length));
      var n = prod.length, quanti = Math.min(n - 1, P5.quanti[Math.floor(P.rnd() * P5.quanti.length)]);
      var giusti = P.mescola(prod.map(function (p, i) { return i; })).slice(0, Math.max(1, quanti));
      var ok = prod.map(function (p, i) { return giusti.indexOf(i) >= 0; });
      var tag = prod.map(function (p, i) { return ok[i] ? tondo2(p.prezzo) : cartellinoFalso(+p.prezzo, P.rnd); });
      return { prod: prod, tag: tag, ok: ok, s: {}, f: {}, ms: {} };
    },
    tempo: function () { return P5.sec; },
    pubblico: function (st) { return { prod: st.prod.map(pubProd), tag: st.tag.slice(), fatti: Object.keys(st.f) }; },
    mossa: function (st, id, m, P) {
      var s = scelte(m.s, st.prod.length); if (!s || st.f[id]) return;
      st.s[id] = s; st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      if (m.fine) { st.f[id] = 1; P.fatto(id); }
    },
    privatoDi: function (st, id) { return st.s[id] ? { s: st.s[id], f: !!st.f[id] } : null; },
    fine: function (st, P) {
      var punti = {}, g = [], carrello = {}, n = st.prod.length;
      P.ids.forEach(function (id) {
        var s = st.s[id] || null, k = giuste5(s, st.ok), pt = P5.punti[Math.min(k, P5.punti.length - 1)] || 0;
        punti[id] = pt;
        g.push({ id: id, s: s, n: k, pt: pt, ms: st.ms[id] || 0 });
        if (k === n) carrello[id] = st.prod.slice();   // tutte giuste: a casa i 5 prodotti
      });
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, tag: st.tag, ok: st.ok, g: g } };
    },
    durata: function (riv) { return durata5(riv); },
    // il Bot guarda ogni cartellino e lo dice giusto se è vicino al prezzo che crede
    bot: function (st, bot, P) {
      var sg = SOGLIA[bot.livello] || SOGLIA.medio;
      var s = st.prod.map(function (p, i) { var e = stima(P, +p.prezzo, bot.livello); return Math.abs(Math.log(st.tag[i] / e)) < sg ? 1 : 0; });
      var ms = (bot.livello === "difficile" ? 9000 : bot.livello === "medio" ? 13000 : 17000) + P.rnd() * 12000;
      var meta = s.map(function (x, i) { return i < 2 ? x : null; });
      return [ { ms: Math.round(ms * 0.5), m: { s: meta } }, { ms: Math.round(Math.min(P5.sec * 1000 - 1500, ms)), m: { s: s, fine: 1 } } ];
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [], tag = pub.tag || [];
      var fila = A.tessere(prod, { tcls: "pze-c5", cls: "pze-tes", extra: function (p, i) { return cartello(A, tag[i]); } }), ch = el("div", { "data-sacr": "2" });
      A.sch.appendChild(A.testa("La Prova del 5"));
      A.sch.appendChild(fila);
      A.sch.appendChild(el("div", { class: "pz-sotto", text: "Il cartellino è giusto o sbagliato? Quanti sono giusti non si sa!", "data-sacr": "1" }));
      A.sch.appendChild(ch);
      chips(A, ch, pub.fatti || []);
      fila.adatta();
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, (p && p.fatti) || []); } };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [], tag = pub.tag || [], n = prod.length, s = prod.map(function () { return null; }), chiuso = false, mosso = false;
      var lista = el("div", { class: "pze-lista" }), righe = [];
      prod.forEach(function (p, i) {
        var si = el("button", { class: "pze-gs si", type: "button", text: "✓", "aria-label": "Giusto" }), no = el("button", { class: "pze-gs no", type: "button", text: "✗", "aria-label": "Sbagliato" });
        premi(si, function () { segna(i, 1); }); premi(no, function () { segna(i, 0); });
        var r = el("div", { class: "pze-r5" }, [ Z().figura(el, p, "e"), el("span", { class: "tx" }, [ el("b", { class: "n", text: p.nome || "" }), p.desc ? el("small", { text: p.desc }) : null, el("span", { class: "cart" }, [ cartello(A, tag[i]) ]) ]), si, no ]);
        righe.push({ r: r, si: si, no: no }); lista.appendChild(r);
      });
      var ok = el("button", { class: "pz-ok pze-fatto", type: "button" });
      premi(ok, function () { if (chiuso || manca()) return; A.vibra(12); manda(true); blocca("✅ Fatto!"); });
      A.pan.appendChild(el("div", { class: "pz-nota forte pze-nota", text: "Il cartellino è ✓ giusto o ✗ sbagliato?" }));
      A.pan.appendChild(lista);
      A.pan.appendChild(ok);
      var calmo = invioCalmo(A, manda);
      function manca() { return s.filter(function (x) { return x == null; }).length; }
      function disegna() {
        righe.forEach(function (x, i) {
          x.si.classList.toggle("on", s[i] === 1); x.no.classList.toggle("on", s[i] === 0);
          x.r.classList.toggle("si", s[i] === 1); x.r.classList.toggle("no", s[i] === 0);
          x.si.disabled = x.no.disabled = chiuso;
        });
        if (!chiuso) { ok.textContent = testoOk(manca()); ok.disabled = !!manca(); }
      }
      function segna(i, v) {
        if (chiuso) return;
        s[i] = s[i] === v ? null : v; mosso = true; disegna();
        A.vibra(8); A.FX.toc(v ? 820 + i * 30 : 440 + i * 20);
        calmo.dopo();
      }
      function manda(fine) {
        calmo.ferma();
        if (!fine && !mosso) return;
        A.invia(fine ? { s: s.slice(), fine: 1 } : { s: s.slice() });
      }
      function blocca(tx) { chiuso = true; ok.disabled = true; ok.textContent = tx; lista.classList.add("chiuso"); disegna(); }
      disegna();
      return {
        privato: function (m) {
          if (!m || chiuso) return;
          var ns = scelte(m.s, n); if (!ns) return;
          s = ns; mosso = true; disegna();
          if (m.f) blocca("✅ Fatto!");
        },
        // il tempo è finito: valgono le scelte che si vedono (se hai toccato qualcosa)
        tempo: function () { if (chiuso) return; if (mosso) manda(false); blocca("⏰ Tempo scaduto"); }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, prod = riv.prod || [], tag = riv.tag || [], ok = riv.ok || [], g = riv.g || [], n = prod.length;
      var fila = A.tessere(prod, { tcls: "pze-c5", extra: function (p, i) { return [ cartello(A, tag[i]), el("span", { class: "pze-es", text: ok[i] ? "✓ giusto" : "era " + A.fmtE(p.prezzo || 0) }) ]; } }), gente = el("div", { class: "pze-gente" + (g.length > 5 ? " fitto" : "") });
      var banner = el("div", { class: "pz-sotto pze-bn", text: "Giriamo i cartellini…" });
      A.sch.classList.add("pze-fitto");
      A.sch.appendChild(A.testa("La Prova del 5"));
      A.sch.appendChild(fila); A.sch.appendChild(gente); A.sch.appendChild(banner);
      var carte = fila.tessere;
      var righe = g.map(function (x) {
        var q = rigaGente(A, x, prod.map(function (p, i) { var v = x.s ? x.s[i] : null; return v === 1 ? "✓" : v === 0 ? "✗" : "·"; }));
        gente.appendChild(q.r); return q;
      });
      fila.adatta();
      A.ST.FX.rullo(0.9);
      await A.dorme(TP.prima); if (!A.vivo()) return;
      for (var i = 0; i < n; i++) {
        carte[i].classList.add(ok[i] ? "giusto" : "falso");
        A.FX.toc(ok[i] ? 880 : 300);
        righe.forEach(function (q) { var v = q.x.s ? q.x.s[i] : null; q.m[i].classList.add(v != null && (v === 1) === !!ok[i] ? "si" : "no"); });
        await A.dorme(TP.giro); if (!A.vivo()) return;
      }
      var tutte = [], meglio = null;
      righe.forEach(function (q) {
        puntiRiga(A, q, q.x.n === n);
        if (q.x.n === n) tutte.push(q.x);
        if (!meglio || q.x.n > meglio.n || (q.x.n === meglio.n && q.x.ms < meglio.ms)) meglio = q.x;
      });
      var pari = meglio ? righe.filter(function (q) { return q.x.n === meglio.n; }).map(function (q) { return q.x.id; }) : [];
      if (tutte.length) {
        if (tutte.some(function (x) { return A.locale === "telefono" || x.id === A.io; })) A.vibra([30, 40, 70]);
        A.FX.din(); A.ST.coriandoli(); A.ST.pubblico(A.S, "ovazione");
        banner.className = "pz-banner oro pze-bn";
        banner.textContent = tutte.length === 1 ? (eTu(A, tutte[0].id) ? "🏆 Tutti e 5 giusti!" : "🏆 Tutti e 5 per " + A.nome(tutte[0].id) + "!") : "🏆 Tutti e 5 per " + elenco(A, tutte.map(function (x) { return x.id; })) + "!";
      } else if (meglio && meglio.n >= 3) {
        banner.className = "pz-banner pze-bn";
        banner.textContent = "👏 " + (pari.length > 1 ? "Fanno meglio di tutti " + elenco(A, pari) : eTu(A, meglio.id) ? "Fai meglio di tutti tu" : "Fa meglio di tutti " + A.nome(meglio.id)) + ": " + meglio.n + " su " + n;
        A.ST.pubblico(A.S, "applauso");
      } else {
        banner.className = "pz-banner no pze-bn"; banner.textContent = "😱 Cartellini difficili!";
        A.FX.trombone(); A.ST.pubblico(A.S, "ohh");
      }
      await A.dorme(TP.esito + TP.fine);
    }
  };
  function cartello(A, v) { var tx = A.fmtE(v || 0); return A.Z.cartellino(A.el, tx, tx.length > 7 ? "lungo" : ""); }

  // =====================================================================
  // 🧹 TOGLI LA CIFRA
  // =====================================================================
  var TG = { cifre: [3, 4, 5], sec: 35, aPrezzo: 120, tutti: 300, alfa: 0.5, vicino: 0.1, pesoVicino: 0.2 };
  var TT = { prima: 1100, luce: 350, vola: 700, prezzo: 750, esito: 1300, fine: 2300 };
  // come finiscono i prezzi interi veri (le ultime due cifre, contate sui prodotti del gioco il 23 ott 2026): serve a scegliere
  // una cifra in più che faccia venire prezzi credibili, e al Bot per ragionare come una persona
  var FINALI = { "00": 100, "50": 47, "99": 34, "90": 21, "20": 11, "30": 10, "49": 10, "80": 10, "29": 8, "10": 6, "60": 6, "79": 5, "05": 5, "59": 4, "70": 4,
    "39": 3, "40": 3, "69": 3, "09": 3, "95": 2, "19": 2, "15": 2, "35": 2, "55": 2, "75": 2, "89": 2, "25": 2, "45": 2, "65": 2, "85": 2 };
  function verosimile(s) { return ((FINALI[String(s).slice(-2)] || 0) + 0.3) / 100.3; }
  function intero(p) { return +p.prezzo > 0 && Math.abs(p.prezzo - Math.round(p.prezzo)) < 1e-9; }
  function cifreDi(p) { return String(Math.round(+p.prezzo)); }
  // niente cifre uguali vicine dove si tocca (24.990: i due 9 darebbero lo stesso prezzo)
  function senzaDoppie(s) { for (var k = 1; k <= s.length - 3; k++) if (s[k] === s[k + 1]) return false; return true; }
  function togliA(S, i) { return S.slice(0, i) + S.slice(i + 1); }
  function alternative(S, T) { var o = []; for (var i = 1; i < S.length - 1; i++) { var a = togliA(S, i); if (a !== T && o.indexOf(a) < 0) o.push(a); } return o; }
  // la cifra in più: posto a caso (mai il primo né l'ultimo); cifra diversa dalle due vicine (così togliendone un'altra viene
  // sempre un prezzo diverso da quello vero), scelta a caso ma pesata: meglio se i prezzi sbagliati che vengono finiscono come i
  // prezzi veri e sono lontani almeno il 10% da quello giusto
  function strizza(T, rnd) {
    var n = T.length, j = 1 + Math.floor(rnd() * (n - 1)), cand = [], tot = 0;
    for (var d = 0; d <= 9; d++) {
      var c = String(d); if (c === T[j - 1] || c === T[j]) continue;
      var S = T.slice(0, j) + c + T.slice(j), alt = alternative(S, T), lw = 0, vic = 0;
      alt.forEach(function (a) { lw += Math.log(verosimile(a)); if (Math.abs(Math.log(+a / +T)) < TG.vicino) vic++; });
      var w = Math.exp(lw / Math.max(1, alt.length) * TG.alfa) * Math.pow(TG.pesoVicino, vic);
      cand.push({ S: S, w: w }); tot += w;
    }
    var r = rnd() * tot, scelto = cand[cand.length - 1];
    for (var q = 0; q < cand.length; q++) { r -= cand[q].w; if (r <= 0) { scelto = cand[q]; break; } }
    return { S: scelto.S, j: j };
  }
  function posti(c, S) {
    if (!Array.isArray(c) || c.length !== S.length) return null;
    for (var k = 0; k < S.length; k++) { var x = c[k]; if (x == null) continue; if (!(x >= 1 && x <= S[k].length - 2) || x !== Math.floor(x)) return null; }
    return c.map(function (x) { return x == null ? null : x; });
  }
  function giustiT(c, S, vero) { return S.map(function (s, k) { return !!c && c[k] != null && togliA(s, c[k]) === vero[k]; }); }
  function durataT(riv) { return TT.prima + ((riv && riv.prod) || []).length * (TT.luce + TT.vola + TT.prezzo) + TT.esito + TT.fine + 300; }

  PREMI.togli = {
    nome: "Togli la cifra", icona: "🧹", ordine: 11,
    regola: "In ogni prezzo c'è una cifra di troppo (mai la prima né l'ultima): toccala e toglila!",
    aiuto: "👀 In ogni prezzo, una cifra in più",   // (21 nov 2026, scelta C: nel pannello questa frase, il nome del gioco è già in alto)
    spiega: "In ogni prezzo c'è una cifra in più (mai la prima né l'ultima): toccala per toglierla. 120 punti per ogni prezzo giusto, +300 se li fai giusti tutti e tre.",   // (25 ott 2026: la spiegazione chiara, nella scelta del gioco e prima di giocare)
    // (20 nov 2026, il proprietario: «più tempo per la spiegazione… così chi non gioca capisce bene»: come si gioca, un esempio, i punti)
    fai: "In ogni prezzo c'è una cifra di troppo, mai la prima né l'ultima. Toccala per toglierla: vedi subito il prezzo che viene.",
    es: "Vedi 2 7 4 9 € e pensi che costi 249 € → togli il 7.",
    pt: "120 punti per ogni prezzo giusto, +300 se li fai giusti tutti e tre.",
    min: 1, max: 8, locale: true,
    _TG: TG, _strizza: strizza, _togliA: togliA, _verosimile: verosimile,   // (per la simulazione e le prove)

    // ---------------- host ----------------
    prepara: function (P) {
      var prod = [], vero = [], S = [], j = [];
      TG.cifre.forEach(function (n, k) {
        var lung = function (x) { return intero(x) && cifreDi(x).length === n; };
        var p = P.pesca(function (x) { return lung(x) && senzaDoppie(cifreDi(x)); }, 1)[0] || P.pesca(lung, 1)[0]
          || P.pesca(function (x) { return intero(x) && x.prezzo >= 100 && x.prezzo < 100000; }, 1)[0];
        if (!p) p = { id: "x" + k, e: "💰", nome: "Il tesoretto", desc: "", dove: "", cat: "curiosita", prezzo: [129, 1590, 15950][k % 3] };
        var T = cifreDi(p), x = strizza(T, P.rnd);
        prod.push(p); vero.push(T); S.push(x.S); j.push(x.j);
      });
      // dal più corto al più lungo (dal più facile)
      var ord = prod.map(function (p, i) { return i; }).sort(function (a, b) { return vero[a].length - vero[b].length; });
      return { prod: ord.map(function (i) { return prod[i]; }), vero: ord.map(function (i) { return vero[i]; }), S: ord.map(function (i) { return S[i]; }), j: ord.map(function (i) { return j[i]; }), c: {}, f: {}, ms: {} };
    },
    tempo: function () { return TG.sec; },
    pubblico: function (st) { return { prod: st.prod.map(pubProd), S: st.S.slice(), fatti: Object.keys(st.f) }; },
    mossa: function (st, id, m, P) {
      var c = posti(m.c, st.S); if (!c || st.f[id]) return;
      st.c[id] = c; st.ms[id] = Math.max(0, Math.round(+m.ms || 0));
      if (m.fine) { st.f[id] = 1; P.fatto(id); }
    },
    privatoDi: function (st, id) { return st.c[id] ? { c: st.c[id], f: !!st.f[id] } : null; },
    fine: function (st, P) {
      var punti = {}, g = [], carrello = {}, n = st.S.length;
      P.ids.forEach(function (id) {
        var c = st.c[id] || null, gi = giustiT(c, st.S, st.vero), k = gi.filter(Boolean).length, pt = k * TG.aPrezzo + (k === n ? TG.tutti : 0);
        punti[id] = pt;
        g.push({ id: id, c: c, gi: gi, n: k, pt: pt, ms: st.ms[id] || 0 });
        if (k === n) carrello[id] = st.prod.slice();   // tutti e tre giusti: a casa i 3 premi
      });
      return { punti: punti, carrello: carrello, riv: { prod: st.prod, vero: st.vero, S: st.S, j: st.j, g: g } };
    },
    durata: function (riv) { return durataT(riv); },
    // il Bot ragiona come una persona: il prezzo che crede, e come finiscono di solito i prezzi
    bot: function (st, bot, P) {
      var sd = (ERR[bot.livello] || 0.25) * 0.85;
      var c = st.S.map(function (S, k) {
        var e = stima(P, +st.vero[k], bot.livello), best = 1, bv = -Infinity;
        for (var i = 1; i < S.length - 1; i++) { var a = togliA(S, i), l = Math.log(+a / e), v = -l * l / (2 * sd * sd) + Math.log(verosimile(a)); if (v > bv) { bv = v; best = i; } }
        return best;
      });
      var ms = (bot.livello === "difficile" ? 8000 : bot.livello === "medio" ? 12000 : 16000) + P.rnd() * 12000;
      return [ { ms: Math.round(ms * 0.5), m: { c: [c[0], null, null] } }, { ms: Math.round(Math.min(TG.sec * 1000 - 1500, ms)), m: { c: c, fine: 1 } } ];
    },

    // ---------------- ogni telefono ----------------
    schermo: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [], S = pub.S || [];
      var fila = A.tessere(prod, { tcls: "pze-c3", cls: "pze-tes", extra: function (p, k) { return numero(A, S[k] || ""); } }), ch = el("div", { "data-sacr": "2" });
      A.sch.appendChild(A.testa("Togli la cifra"));
      A.sch.appendChild(fila);
      A.sch.appendChild(el("div", { class: "pz-sotto", text: "In ogni prezzo c'è una cifra di troppo: quale?", "data-sacr": "1" }));
      A.sch.appendChild(ch);
      chips(A, ch, pub.fatti || []);
      fila.adatta();
      return { aggiorna: function (p) { A.pub = p; aggChips(A, ch, (p && p.fatti) || []); } };
    },
    pannello: function (A) {
      stile();
      var el = A.el, pub = A.pub || {}, prod = pub.prod || [], S = pub.S || [], c = S.map(function () { return null; }), chiuso = false, mosso = false;
      var lista = el("div", { class: "pze-lista" }), righe = [];
      prod.forEach(function (p, k) {
        var s = S[k] || "", fila = el("span", { class: "pze-tiles" }), tasti = [];
        s.split("").forEach(function (ch, i) {
          if (i === 0 || i === s.length - 1) { fila.appendChild(el("span", { class: "pze-t fisso", text: ch })); return; }
          var b = el("button", { class: "pze-t", type: "button", text: ch });
          premi(b, function () { tocca(k, i); });
          tasti[i] = b; fila.appendChild(b);
        });
        var ant = el("b", { class: "pze-ant", text: "" });
        var r = el("div", { class: "pze-r3" }, [ el("div", { class: "su" }, [ Z().figura(el, p, "e"), el("span", { class: "tx" }, [ el("b", { class: "n", text: p.nome || "" }), p.desc ? el("small", { text: p.desc }) : null ]) ]), el("div", { class: "giu" }, [ fila, ant ]) ]);
        righe.push({ r: r, tasti: tasti, ant: ant, s: s }); lista.appendChild(r);
      });
      var ok = el("button", { class: "pz-ok pze-fatto", type: "button" });
      premi(ok, function () { if (chiuso || manca()) return; A.vibra(12); manda(true); blocca("✅ Fatto!"); });
      A.pan.appendChild(el("div", { class: "pz-nota forte pze-nota", text: "👆 Tocca la cifra di troppo" }));
      A.pan.appendChild(lista);
      A.pan.appendChild(ok);
      var calmo = invioCalmo(A, manda);
      function manca() { return c.filter(function (x) { return x == null; }).length; }
      function disegna() {
        righe.forEach(function (x, k) {
          x.tasti.forEach(function (b, i) { if (!b) return; b.classList.toggle("via", c[k] === i); b.disabled = chiuso; });
          x.r.classList.toggle("preso", c[k] != null);
          var tx = c[k] != null ? A.fmtE(+togliA(x.s, c[k])) : "? €";
          if (x.ant.textContent !== tx) x.ant.textContent = tx;
        });
        if (!chiuso) { ok.textContent = testoOk(manca()); ok.disabled = !!manca(); }
      }
      function tocca(k, i) {
        if (chiuso) return;
        c[k] = c[k] === i ? null : i; mosso = true; disegna();
        A.vibra(8); A.FX.toc(c[k] != null ? 700 + i * 40 : 480);
        calmo.dopo();
      }
      function manda(fine) {
        calmo.ferma();
        if (!fine && !mosso) return;
        A.invia(fine ? { c: c.slice(), fine: 1 } : { c: c.slice() });
      }
      function blocca(tx) { chiuso = true; ok.disabled = true; ok.textContent = tx; lista.classList.add("chiuso"); disegna(); }
      disegna();
      return {
        privato: function (m) {
          if (!m || chiuso) return;
          var nc = posti(m.c, S); if (!nc) return;
          c = nc; mosso = true; disegna();
          if (m.f) blocca("✅ Fatto!");
        },
        tempo: function () { if (chiuso) return; if (mosso) manda(false); blocca("⏰ Tempo scaduto"); }
      };
    },
    rivela: async function (A) {
      stile();
      var el = A.el, riv = A.riv || {}, prod = riv.prod || [], vero = riv.vero || [], S = riv.S || [], J = riv.j || [], g = riv.g || [];
      var sovs = [], fila = A.tessere(prod, { tcls: "pze-c3", extra: function (p, k) {
        var num = numero(A, S[k] || ""), tag = A.Z.cartellino(el, A.fmtE(+vero[k] || 0)); sovs[k] = { num: num, sov: el("span", { class: "pze-sov" }, [ num, tag ]) }; return sovs[k].sov;
      } }), gente = el("div", { class: "pze-gente" + (g.length > 5 ? " fitto" : "") });
      var banner = el("div", { class: "pz-sotto pze-bn", text: "Via le cifre di troppo…" });
      A.sch.classList.add("pze-fitto");
      A.sch.appendChild(A.testa("Togli la cifra"));
      A.sch.appendChild(fila); A.sch.appendChild(gente); A.sch.appendChild(banner);
      // il numero con la cifra in più e, sotto (nello stesso posto, ancora nascosto), il cartellino col prezzo vero
      var carte = fila.tessere.map(function (t, k) { return { c: t, num: sovs[k].num, sov: sovs[k].sov }; });
      var righe = g.map(function (x) { var q = rigaGente(A, x, prod.map(function (p, k) { return x.c && x.c[k] != null ? "?" : "·"; })); gente.appendChild(q.r); return q; });
      fila.adatta();
      A.ST.FX.rullo(0.9);
      await A.dorme(TT.prima); if (!A.vivo()) return;
      for (var k = 0; k < carte.length; k++) {
        var C = carte[k];
        C.c.classList.add("luce"); A.FX.toc(600 + k * 80);
        await A.dorme(TT.luce); if (!A.vivo()) return;
        var via = C.num.children[J[k]]; if (via) via.classList.add("vola");
        A.FX.whoosh();
        await A.dorme(TT.vola); if (!A.vivo()) return;
        C.sov.classList.add("fatto"); A.FX.toc(990);
        righe.forEach(function (q) { var gi = q.x.gi && q.x.gi[k]; q.m[k].textContent = gi ? "✓" : "✗"; q.m[k].classList.add(gi ? "si" : "no"); });
        await A.dorme(TT.prezzo); if (!A.vivo()) return;
        C.c.classList.remove("luce");
      }
      var tutti = [], meglio = null, n = carte.length;
      righe.forEach(function (q) {
        puntiRiga(A, q, q.x.n === n);
        if (q.x.n === n) tutti.push(q.x);
        if (!meglio || q.x.n > meglio.n || (q.x.n === meglio.n && q.x.ms < meglio.ms)) meglio = q.x;
      });
      var pari = meglio ? righe.filter(function (q) { return q.x.n === meglio.n; }).map(function (q) { return q.x.id; }) : [];
      if (tutti.length) {
        if (tutti.some(function (x) { return A.locale === "telefono" || x.id === A.io; })) A.vibra([30, 40, 70]);
        A.FX.din(); A.ST.coriandoli(); A.ST.pubblico(A.S, "ovazione");
        banner.className = "pz-banner oro pze-bn";
        banner.textContent = tutti.length === 1 ? (eTu(A, tutti[0].id) ? "🏆 Tutti e tre giusti!" : "🏆 Tutti e tre per " + A.nome(tutti[0].id) + "!") : "🏆 Tutti e tre per " + elenco(A, tutti.map(function (x) { return x.id; })) + "!";
      } else if (meglio && meglio.n) {
        banner.className = "pz-banner pze-bn";
        banner.textContent = "👏 " + (pari.length > 1 ? "Fanno meglio di tutti " + elenco(A, pari) : eTu(A, meglio.id) ? "Fai meglio di tutti tu" : "Fa meglio di tutti " + A.nome(meglio.id)) + ": " + meglio.n + " su " + n;
        A.ST.pubblico(A.S, "applauso");
      } else {
        banner.className = "pz-banner no pze-bn"; banner.textContent = "😱 Nessun prezzo giusto!";
        A.FX.trombone(); A.ST.pubblico(A.S, "ohh");
      }
      await A.dorme(TT.esito + TT.fine);
    }
  };
  // il numero a caselle (senza il punto delle migliaia: con la cifra in più il punto starebbe nel posto sbagliato)
  function numero(A, s) {
    var el = A.el;
    return el("span", { class: "pze-num" }, s.split("").map(function (ch, i) { return el("i", { class: i === 0 || i === s.length - 1 ? "fisso" : null, text: ch }); }).concat([ el("b", { text: "€" }) ]));
  }

  // ---------------- lo stile (una volta) ----------------
  function stile() {
    if (document.getElementById("sg-pze-css")) return;
    var s = document.createElement("style"); s.id = "sg-pze-css";
    s.textContent = [
      ".pz-sch.pze-fitto{gap:6px}",
      // i riquadri dei prodotti sul maxischermo (5 della Prova, 3 di Togli la cifra): il cartellino si vede subito
      ".pz-te.pze-c5 .pz-tag{font-size:14px;padding:3px 9px 3px 16px;opacity:1;transform:none;transition:background .3s}",
      // la Prova del 5: girati, verde o rosso col prezzo vero (già al suo posto, nascosto)
      ".pze-es{font-size:12px;font-weight:900;line-height:1.1;white-space:nowrap;opacity:0;transform:scale(.5);transition:opacity .25s,transform .35s cubic-bezier(.3,1.6,.5,1)}",
      ".pze-c5.giusto .pz-tag{background:linear-gradient(#b2f2bb,#51cf66);color:#06361a}.pze-c5.giusto .pze-es{opacity:1;transform:none;color:#2b8a3e}",
      ".pze-c5.falso .pz-tag{background:linear-gradient(#ffc9c9,#ff6b6b);color:#5c0011;text-decoration:line-through}.pze-c5.falso .pze-es{opacity:1;transform:none;color:#c92a2a}",
      ".pze-c5.giusto,.pze-c5.falso{animation:pzeGira .45s ease-out}@keyframes pzeGira{0%{transform:scale(1)}40%{transform:scale(1.08)}100%{transform:none}}",
      // il pannello: le righe dei prodotti
      ".pze-nota{margin-bottom:2px}",
      ".pze-lista{display:flex;flex-direction:column;gap:4px}",
      ".pze-lista.chiuso{opacity:.75}",
      // mentre si gioca il pannello sale fin sotto il titolo e i prodotti stanno solo lì, una volta sola (sopra niente doppioni né nomi)
      ".st-vista.pz-con-pan .pz-sch .pze-tes,.st-vista.pz-con-pan:has(.pze-lista) .pz-sch [data-sacr]{position:absolute!important;width:0!important;height:0!important;overflow:hidden!important;visibility:hidden!important;pointer-events:none!important;margin:0!important;padding:0!important}",
      ".pz-pan.su:has(.pze-lista){top:calc(56px + env(safe-area-inset-top))}",
      ".pz-pan:has(.pze-lista) .pz-premio-pan{flex:1 1 0;min-height:0;display:flex;flex-direction:column}.pz-pan .pze-lista{flex:1 1 0;min-height:0}.pz-pan .pze-lista .pze-r5,.pz-pan .pze-lista .pze-r3{flex:1 1 auto}",
      ".pze-r5{display:flex;align-items:center;gap:8px;min-height:clamp(44px,calc(var(--alt,640px) * .068),56px);box-sizing:border-box;padding:4px 6px 4px 4px;border-radius:12px;background:linear-gradient(#fff,#eceef8);color:#1d1b3a;box-shadow:inset 0 -3px 0 rgba(14,18,44,.25)}",
      ".pze-r5.si{background:linear-gradient(#ebfbee,#b2f2bb)}.pze-r5.no{background:linear-gradient(#fff5f5,#ffc9c9)}",
      ".pze-r5 .e,.pze-r3 .e{flex:0 0 auto;font-size:clamp(31px,calc(var(--alt,640px) * .065),58px);line-height:1}",
      ".pze-r5 .tx,.pze-r3 .tx{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:1px;text-align:left;overflow-wrap:break-word}",
      ".pze-r5 .n,.pze-r3 .n{font-weight:800;font-size:clamp(13.5px,calc(var(--alt,640px) * .021),18px);line-height:1.15}.pze-r5 .tx small,.pze-r3 .tx small{font-size:clamp(11.5px,calc(var(--alt,640px) * .017),15px);font-weight:600;color:#4c4a66;line-height:1.2}",
      ".pze-r5 .cart{margin-top:3px}",
      ".pze-r5 .pz-tag{flex:0 0 auto;font-size:clamp(14px,calc(var(--alt,640px) * .022),18px);padding:2px 8px 2px 14px;box-shadow:0 2px 5px rgba(0,0,0,.25)}.pze-r5 .pz-tag:before{left:5px;width:4px;height:4px;margin-top:-2px}",
      ".pze-gs{flex:0 0 auto;width:38px;height:32px;border:0;border-radius:10px;font:900 20px/1 system-ui,sans-serif;color:#b0184f;background:#ffd3e0;box-shadow:inset 0 -3px 0 rgba(0,0,0,.15);cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}",
      ".pze-gs.si.on{background:#2f9e44;color:#fff}.pze-gs.no.on{background:#e03131;color:#fff}.pze-gs:disabled{cursor:default}",
      ".pze-fatto{display:block;width:100%;margin-top:4px}",
      // Togli la cifra: le caselle
      ".pze-num{display:flex;align-items:flex-end;justify-content:center;gap:1px;font-weight:900;max-width:100%}",
      ".pze-num i{font-style:normal;min-width:13px;padding:2px 1px;text-align:center;font-size:clamp(13px,calc(var(--alt,640px) * .022),18px);border-radius:4px;background:#05030f;color:#ffd43b;font-variant-numeric:tabular-nums;transition:transform .6s cubic-bezier(.4,0,.8,.4),opacity .6s}",
      ".pze-num i.fisso{color:#cdd6ff}.pze-num b{font-size:12px;color:#ffd43b;margin-left:2px}",
      ".pze-num i.vola{transform:translateY(-46px) rotate(28deg) scale(.6);opacity:0}",
      ".pze-sov{display:grid;place-items:center;max-width:100%}.pze-sov>*{grid-area:1/1}",
      ".pze-sov .pz-tag{font-size:13px;padding:2px 8px 2px 14px;opacity:0;transform:scale(.4);transition:transform .4s cubic-bezier(.3,1.6,.5,1),opacity .2s}.pze-sov .pz-tag:before{left:5px;width:4px;height:4px;margin-top:-2px}",
      ".pze-sov.fatto .pze-num{opacity:0;transition:opacity .25s}.pze-sov.fatto .pz-tag{opacity:1;transform:none}",
      ".pze-c3.luce{box-shadow:0 0 0 3px var(--o-oro),0 0 18px rgba(255,79,134,.5)}",
      ".pze-r3{display:flex;flex-direction:column;justify-content:center;gap:5px;padding:5px 8px 6px 5px;box-sizing:border-box;border-radius:12px;background:linear-gradient(#fff,#eceef8);color:#1d1b3a;box-shadow:inset 0 -3px 0 rgba(14,18,44,.25)}",
      ".pze-r3.preso{background:linear-gradient(#ffe6ee,#ffc4d6)}",
      ".pze-r3 .su{display:flex;align-items:center;gap:8px;min-width:0}.pze-r3 .giu{display:flex;align-items:center;gap:6px}",
      // (nel pannello alto le righe di Togli la cifra hanno posto: foto, cifre e prezzo più grandi)
      ".pz-pan .pze-lista .pze-r3 .e{font-size:clamp(31px,calc(var(--alt,640px) * .085),72px)}.pz-pan .pze-lista .pze-t{width:clamp(28px,10vw,46px);height:clamp(36px,calc(var(--alt,640px) * .075),64px);font-size:clamp(20px,calc(var(--alt,640px) * .04),34px)}.pz-pan .pze-lista .pze-ant{font-size:clamp(14px,calc(var(--alt,640px) * .024),20px)}",
      ".pze-tiles{display:flex;gap:3px;flex:0 0 auto}",
      ".pze-t{flex:0 0 auto;width:clamp(28px,8.4vw,40px);height:clamp(36px,calc(var(--alt,640px) * .064),50px);box-sizing:border-box;border:0;border-radius:9px;padding:0;display:inline-flex;align-items:center;justify-content:center;font:900 clamp(20px,calc(var(--alt,640px) * .036),28px)/1 system-ui,sans-serif;color:#ffd43b;background:linear-gradient(#2a1f66,#0b0724);box-shadow:inset 0 -3px 0 rgba(0,0,0,.4),0 0 0 2px #ffd43b66;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;font-variant-numeric:tabular-nums}",
      ".pze-t.fisso{color:var(--o-tenue);background:#2f3763;box-shadow:inset 0 -3px 0 rgba(0,0,0,.3);cursor:default}",
      ".pze-t.via{background:linear-gradient(#ff8787,#e03131);color:#fff;text-decoration:line-through;box-shadow:0 0 0 3px #fff}",
      ".pze-t:disabled{cursor:default}",
      ".pze-ant{flex:1;min-width:0;text-align:right;font-size:14px;font-weight:900;white-space:nowrap;color:#b0184f;font-variant-numeric:tabular-nums}.pze-r3.preso .pze-ant{color:#1d1b3a}",
      // la rivelazione: chi gioca, coi segni
      ".pze-gente{display:flex;flex-direction:column;gap:4px;width:100%;max-width:440px}",
      ".pze-g{display:flex;align-items:center;gap:6px;padding:3px 8px 3px 3px;border-radius:12px;background:rgba(255,255,255,.08);animation:pzSu .35s both}",
      ".pze-g .fac{width:26px;height:26px;flex:0 0 auto;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.14)}.pze-g .fac svg{width:100%;height:100%;display:block}",
      ".pze-g .nm{flex:1;min-width:0;font-size:12px;font-weight:800;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".pze-mk{display:flex;gap:3px;flex:0 0 auto}.pze-mk i{font-style:normal;width:19px;height:19px;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;background:rgba(255,255,255,.16);color:var(--o-testo);transition:background .3s,color .3s}",
      ".pze-mk i.si{background:#2f9e44;color:#fff}.pze-mk i.no{background:#c92a2a;color:#fff}",
      ".pze-g .pt{flex:0 0 auto;min-width:40px;text-align:center;font-weight:900;font-size:12px;color:var(--o-verde-testo);background:var(--o-verde);border-radius:99px;padding:1px 7px}",
      ".pze-g .pt.zero{background:rgba(255,255,255,.2);color:var(--o-testo)}.pze-g .pt.nasc{visibility:hidden}",
      ".pze-g.tutte{background:rgba(105,240,174,.22);box-shadow:0 0 0 2px var(--o-verde)}.pze-g.bene{background:rgba(255,79,134,.16)}.pze-g.male{opacity:.8}",
      ".pze-gente.fitto .pze-g{padding:1px 6px 1px 2px}.pze-gente.fitto .fac{width:22px;height:22px}.pze-gente.fitto .pze-mk i{width:17px;height:17px;font-size:12px}",
      ".pze-bn{margin-top:2px}",
      "@media (prefers-reduced-motion:reduce){.pze-c5,.pze-g{animation:none}.pze-num i,.pze-es,.pze-sov .pz-tag{transition:none}}"
    ].join("\n");
    document.head.appendChild(s);
  }
})();

