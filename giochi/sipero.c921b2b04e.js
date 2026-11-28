/* =========================================================
   DATI — Carte per il gioco "Sì... però".
   BONUS: poteri/vantaggi che una squadra gioca su di sé.
   MALUS: guai "universali / a innesco" da lanciare all'altra
   squadra (devono incastrarsi in modo esilarante con QUALSIASI
   bonus, non con uno in particolare).
   Elenco unico per tipo: aggiungere/togliere si fa qui.
   (30 ott 2026: da 612 a 1.004 carte; il telefono che tiene il mazzo ricorda le ultime 320 uscite per tipo)
   ========================================================= */
window.SG_SIPERO = {
  bonus: [
    "Puoi fermare e far ripartire il tempo a tuo piacimento.",
    "Hai una carta di credito nera con fondi illimitati, legali e sicuri.",
    "Puoi teletrasportarti ovunque istantaneamente guardando una foto del luogo.",
    "Parli, leggi e comprendi fluentemente tutte le lingue dell'universo.",
    "Non hai mai bisogno di dormire e sei costantemente al 100% delle energie.",
    "Puoi far apparire dal nulla qualsiasi oggetto inanimato che immagini.",
    "Puoi trasformarti a comando in qualsiasi animale esistente.",
    "Vinci automaticamente qualsiasi scommessa, lotteria o gioco d'azzardo.",
    "Puoi leggere i pensieri delle persone, ma solo quando lo decidi tu.",
    "Puoi respirare e vivere sott'acqua, controllando tutte le creature marine.",
    "Puoi far innamorare follemente di te qualsiasi persona con un semplice schiocco di dita.",
    "I tuoi sogni diventano realtà il giorno dopo, e puoi decidere consapevolmente cosa sognare.",
    "Puoi viaggiare nel multiverso e scambiare posto con le versioni alternative (e magari più fortunate) di te stesso.",
    "Hai il potere di convincere chiunque di qualsiasi cosa in meno di 10 secondi di conversazione.",
    "Puoi clonarti all'infinito e i tuoi cloni obbediscono a ogni tuo singolo ordine.",
    "Diventi immediatamente il Leader Supremo della Terra, amato e rispettato da tutte le nazioni.",
    "Hai accesso a Internet direttamente nel cervello, con connessione quantistica istantanea e download mentale.",
    "Non hai più bisogno di mangiare per sopravvivere, ma se lo fai provi un piacere culinario mille volte superiore.",
    "Qualsiasi veicolo tu guidi diventa indistruttibile e ha carburante/batteria infiniti.",
    "Puoi cancellare, modificare o inserire interi ricordi nella mente delle persone guardandole.",
    "Sei un genio assoluto e istantaneo in qualsiasi disciplina scientifica, sportiva o artistica provi a fare.",
    "Puoi diventare intangibile a comando, passando attraverso i muri e gli oggetti solidi come un fantasma.",
    "Hai un maggiordomo immortale, invisibile agli altri, che risolve ogni tuo problema pratico e pulisce tutto.",
    "Puoi manipolare la gravità terrestre a tuo piacimento per te e per chi ti sta intorno.",
    "Non dovrai mai più pagare per nulla: ogni bene, casa o servizio ti viene offerto gratuitamente a vita.",
    "Puoi scambiare il corpo con qualsiasi persona nel mondo per 24 ore, mantenendo la tua coscienza.",
    "Hai un “telecomando universale della vita” per mettere in Muto, in Pausa o mandare Avanti Veloce le persone fastidiose.",
    "Puoi parlare con gli oggetti inanimati e farti raccontare la loro storia e cosa hanno visto.",
    "Hai un “Ctrl+Z” nella vita reale: puoi annullare qualsiasi cosa tu abbia fatto negli ultimi 5 minuti.",
    "Puoi cambiare il tuo aspetto fisico (altezza, viso, muscoli) in qualsiasi momento come nell'editor di un videogioco.",
    "Puoi vedere sempre fino a 24 ore nel futuro in modo chiaro e dettagliato.",
    "Hai uno zaino magico da cui puoi estrarre sempre l'oggetto esatto che ti serve in quel momento.",
    "Sei immune alle temperature estreme: il fuoco e il ghiaccio ti sembrano una piacevole brezza.",
    "Puoi assorbire istantaneamente la conoscenza mangiando libri o chiavette USB.",
    "La tua presenza emana un'aura pacifica che rende tutti quelli intorno a te immediatamente felici, calmi e accondiscendenti.",
    "Puoi respirare nello spazio aperto e sopravvivere nel vuoto senza alcuna tuta.",
    "Hai una colonna sonora personale che parte dal nulla e ti dà super-forza quando affronti un ostacolo.",
    "Puoi trasformare qualsiasi liquido tocchi nella bibita, nel succo o nella cioccolata calda più buona del mondo.",
    "Puoi ringiovanire o invecchiare te stesso o le altre persone a tuo totale piacimento.",
    "Cammini letteralmente sull'aria, come se ci fossero scale o pavimenti invisibili ovunque tu vada.",
    "Non hai più bisogno di lavarti: sei sempre perfettamente pulito, profumato e pettinato in ogni situazione.",
    "Puoi aprire un portale luminoso che ti porta in una tua dimensione tascabile privata e super lussuosa.",
    "Sei adorato come una divinità benevola da tutte le forme di vita extraterrestri dell'universo.",
    "Sai esattamente chi sta mentendo in qualsiasi momento, vedendo il loro naso illuminarsi di rosso.",
    "Puoi fermare o deviare i proiettili e qualsiasi oggetto scagliato contro di te semplicemente guardandolo.",
    "Qualsiasi danno fai (alle cose o alle persone) si ripara da solo perfettamente in 3 secondi.",
    "I tuoi animali domestici (anche quelli che avrai) diventano immortali e possono parlare con te.",
    "Ogni volta che fai l'occhiolino a qualcuno, quella persona ti regala spontaneamente tutto ciò che ha in mano.",
    "Puoi evocare una porta magica che, una volta aperta, conduce in qualsiasi stanza del mondo reale.",
    "Ogni volta che schiocchi le dita, chi ti circonda è costretto a ballare una coreografia perfetta insieme a te.",
    "Sei sempre accompagnato da una voce narrante (tipo Morgan Freeman) che rende epica e credibile ogni tua azione.",
    "Puoi fonderti fisicamente con qualsiasi veicolo o dispositivo elettronico per controllarlo dall'interno.",
    "Possiedi un mantello che, finché lo indossi, ti rende inarrestabile e immune a qualsiasi danno.",
    "Hai la capacità di entrare fisicamente nei libri o nei film e diventarne il protagonista, alterandone la trama.",
    "Qualsiasi abito o costume indossi, acquisisci immediatamente i veri poteri e le abilità di quel personaggio.",
    "Puoi evocare ologrammi ultra-realistici, con suono e consistenza tattile, per creare illusioni perfette.",
    "Sei il miglior cuoco dell'universo: chi assaggia i tuoi piatti cade in estasi e ti ubbidisce ciecamente per un'ora.",
    "Puoi separare l'anima dal tuo corpo ed esplorare il mondo come un fantasma invisibile e intangibile.",
    "Hai un'aura passiva che costringe chiunque si trovi a meno di 10 metri da te a dire solo l'assoluta verità.",
    "Puoi rimpicciolire o ingigantire qualsiasi cosa (persone, oggetti, edifici) a tuo piacimento.",
    "Hai delle tasche magiche da cui puoi estrarre sempre e solo il documento o l'argomentazione esatta per vincere ogni discussione.",
    "Assorbi i talenti e le abilità delle persone semplicemente stringendo loro la mano (senza però toglierli a loro).",
    "Quando dormi, il tuo corpo entra in “pilota automatico” e svolge i tuoi compiti in modo eccellente come se fossi sveglio.",
    "Hai il potere di annullare la gravità per qualsiasi persona o oggetto che tocchi.",
    "I tuoi insulti causano danni fisici (non letali) e sbalzano via le persone come se avessero preso un pugno da cartone animato.",
    "Puoi materializzare case arredate e strutture lussuose a partire dal nulla in soli 5 secondi.",
    "Hai un veicolo volante invisibile, silenzioso e iper-tecnologico sempre pronto ai tuoi ordini.",
    "Puoi far apparire dal nulla qualsiasi tipo di cibo o bevanda, già pronto e alla temperatura perfetta.",
    "I tuoi baci curano qualsiasi ferita, malattia o cuore infranto all'istante.",
    "Hai il pieno controllo degli agenti atmosferici: puoi far piovere, nevicare o uscire il sole a comando.",
    "Sei un maestro infallibile nelle arti marziali, nella scherma e nel tiro con l'arco.",
    "Puoi creare campi di forza indistruttibili di qualsiasi dimensione e forma.",
    "Hai il potere di rendere reale qualsiasi cosa tu disegni o scriva su un foglio di carta.",
    "Qualsiasi abito tu indossi diventa l'outfit più elegante, alla moda e ammirato della storia.",
    "Hai una vista a raggi X, termica e telescopica, e puoi attivarla o disattivarla a piacimento.",
    "Puoi entrare nei videogiochi, vivere le avventure in prima persona e portare gli oggetti nel mondo reale.",
    "Sei amato da tutti gli insetti e aracnidi del mondo: ti ubbidiscono e ti difendono in sciami.",
    "La tua memoria è perfetta e assoluta: ricordi tutto ciò che hai mai visto, letto, sentito o vissuto.",
    "Puoi fermare in aria qualsiasi oggetto in caduta o in movimento, sfidando la fisica.",
    "Se canti, puoi far addormentare profondamente chiunque ti ascolti nel raggio di 100 metri.",
    "Hai la capacità di trasformare l'acqua in benzina, oro liquido o qualsiasi altra sostanza fluida.",
    "Puoi allungare qualsiasi parte del tuo corpo fino a 50 metri, come se fossi di gomma.",
    "Puoi evocare un divano volante comodissimo che ti trasporta ovunque a 500 km/h.",
    "Qualsiasi barzelletta o battuta tu dica fa ridere le persone fino alle lacrime, letteralmente.",
    "Hai un menù a tendina virtuale davanti agli occhi per vedere le statistiche, i segreti e le intenzioni di chiunque guardi.",
    "Puoi manipolare la probabilità: se c'è lo 0,1% di possibilità che accada qualcosa a tuo favore, puoi portarla al 100%.",
    "Puoi evocare un portale che ti fa accedere a un buffet infinito con i tuoi cibi preferiti perfetti e salutari.",
    "Puoi “skippare” i momenti noiosi della vita reale mandando avanti veloce il tempo senza invecchiare.",
    "I tuoi occhi sparano un laser che non brucia, ma pulisce, ripara e lucida istantaneamente qualsiasi cosa colpisca.",
    "Puoi trasformare qualsiasi oggetto inanimato nella sua versione di lusso (es. una Panda diventa una Ferrari, un sasso diventa un diamante).",
    "Hai un clone identico a te, che non si lamenta mai e va a lavorare o studiare al posto tuo.",
    "Qualsiasi cosa tu stia cercando (chiavi, persone, risposte) si illumina di un'aura dorata che puoi vedere solo tu.",
    "Puoi entrare fisicamente negli specchi ed esplorare il mondo muovendoti attraverso le superfici riflettenti.",
    "Se dai il cinque a qualcuno, quella persona ti perdona istantaneamente per qualsiasi cosa tu le abbia fatto.",
    "Puoi padroneggiare istantaneamente l'uso di qualsiasi strumento musicale toccandolo con un dito.",
    "Puoi parlare, capire e farti ubbidire da tutte le macchine, dai computer alle automobili.",
    "Hai il potere di “salvare la partita” nella vita reale e ricaricare il salvataggio se qualcosa va storto.",
    "Puoi alterare le dimensioni di specifiche parti del tuo corpo in modo indipendente e a tuo piacimento.",
    "Puoi respirare fuoco dalla bocca, ma invece di bruciare, le fiamme guariscono e ringiovaniscono chi colpiscono.",
    "Hai una dimensione tascabile in cui il tempo non scorre: puoi entrarci, farti 8 ore di sonno in un millisecondo e uscire.",
    "Puoi trasformarti in qualsiasi oggetto inanimato (come in Prop Hunt) mantenendo tutti i tuoi sensi.",
    "Puoi cancellare te stesso o specifici eventi dalla memoria di una persona semplicemente schioccando le dita.",
    "Qualsiasi forma d'arte tu crei (disegno, musica, scultura) diventa un capolavoro mondiale vendibile a milioni di euro.",
    "Evochi un drago gigantesco, invisibile agli altri, che ti fa da guardia del corpo e mezzo di trasporto.",
    "Hai il potere di far provare a chiunque esattamente la stessa emozione (o dolore) che stai provando tu.",
    "Quando balli, puoi far levitare le cose e le persone intorno a te a ritmo di musica.",
    "Il tuo corpo assorbe l'energia cinetica: se vieni investito o picchiato, diventi temporaneamente più muscoloso e invincibile.",
    "Puoi viaggiare nei sogni delle altre persone e modificarli come se fossi il regista del sogno.",
    "Qualsiasi seme tu pianti cresce in pochi secondi trasformandosi in un albero carico di frutti perfetti.",
    "Puoi scambiare di posto istantaneamente due persone o due oggetti in qualsiasi punto del mondo.",
    "La tua ombra può staccarsi da te, prendere oggetti solidi e spiare le persone per riferirti tutto.",
    "Qualsiasi malattia, tossina o veleno che entra nel tuo corpo viene convertita in pura energia fisica ed euforia.",
    "Le tue bugie diventano realtà: se dici con convinzione una bugia, l'universo si modifica all'istante per renderla vera.",
    "Puoi capire e parlare telepaticamente con qualsiasi animale domestico o selvatico del mondo.",
    "Ogni volta che schiocchi le dita, il tuo conto in banca si arrotonda per eccesso al milione più vicino.",
    "Puoi creare un “punto di salvataggio” del tuo corpo e tornarci istantaneamente se ti fai male o ti ammali.",
    "Qualsiasi cibo tu mangi, per quanto calorico o spazzatura, ti fa dimagrire e definire i muscoli al posto di farti ingrassare.",
    "Hai un'astronave invisibile parcheggiata in orbita, con un teletrasporto diretto dal tuo salotto.",
    "Puoi dare la vita agli oggetti inanimati: i mobili, le posate e i vestiti diventano i tuoi fedeli servitori.",
    "Qualsiasi cosa tu stia cercando di imparare (una lingua, uno sport, uno strumento) richiede solo 10 minuti di pratica per farti diventare un maestro.",
    "Hai il potere di annullare qualsiasi rumore intorno a te, creando una bolla magica di silenzio assoluto a comando.",
    "Puoi viaggiare fisicamente all'interno delle fotografie o dei dipinti ed esplorare quel momento congelato nel tempo.",
    "Ogni volta che dai un abbraccio a qualcuno, curi istantaneamente la sua ansia, i suoi dubbi e le sue paranoie.",
    "Puoi trasformare il tuo corpo in pura energia elettrica per viaggiare in un millisecondo attraverso i cavi e la rete elettrica.",
    "Sai sempre qual è la decisione statisticamente perfetta da prendere davanti a un dubbio, a un bivio o a un investimento.",
    "Puoi estrarre oggetti o cibi dai video di YouTube, TikTok o dai film semplicemente infilando la mano nello schermo.",
    "Puoi parlare con i fantasmi e gli spiriti dei grandi geni storici del passato per farti dare consigli e risolvere problemi.",
    "Hai un telecomando universale che ti permette di scambiare in modo permanente i corpi e le personalità di due persone a tua scelta.",
    "Puoi trasformarti in un gigante alto 20 metri o in un insetto minuscolo, mantenendo intatta la tua forza originale.",
    "Qualsiasi seme tu sputi (anguria, mela, ecc.) cresce all'istante trasformandosi in un albero gigante che produce i tuoi cibi preferiti.",
    "Puoi far scorrere il tempo al rallentatore (come in Matrix) per tutti tranne che per te stesso, rendendoti intoccabile e velocissimo.",
    "Hai un “Passaporto Supremo”: ti garantisce immunità diplomatica mondiale, nessuna dogana e cittadinanza gratis in ogni nazione.",
    "Puoi fondere magicamente due oggetti qualsiasi per creare un ibrido perfetto (es. Tostapane + Pistola = Arma che spara fette roventi).",
    "Se indichi qualcuno, i suoi vestiti si lavano, si stirano e si profumano istantaneamente mentre li ha ancora addosso.",
    "Puoi entrare nei ricordi delle altre persone (come nel Pensatoio di Harry Potter) per esplorarli dall'interno come spettatore fantasma.",
    "Hai un tasto “Annulla” verbale: se dici la parola “Scherzavo”, la persona dimentica totalmente l'ultima frase che hai detto.",
    "Il tuo sangue può purificare qualsiasi veleno, radiazione o inquinamento con cui entra in contatto.",
    "Hai il dono della colonna sonora: puoi far partire musica ad alto volume ovunque, sentita da tutti, per enfatizzare il momento.",
    "Puoi respirare sottoterra e muoverti nel fango e nella roccia nuotandoci dentro come se fossero acqua.",
    "Sei immune al senso di imbarazzo o di vergogna: le figuracce o gli scivoloni ti fanno sembrare solo molto più carismatico.",
    "Se scrivi un ordine su un foglietto e lo attacchi addosso a qualcuno, quella persona lo esegue convinta che sia una sua idea.",
    "Quando indossi un paio di occhiali da sole diventi impossibile da notare: telecamere, guardie e persone ti ignorano finché non li togli.",
    "Puoi imitare alla perfezione la voce di chiunque tu abbia sentito parlare anche una sola volta.",
    "Chiunque ti stringa la mano ti considera all'istante la persona più affidabile e simpatica che abbia mai conosciuto.",
    "Ogni volta che ti serve, appare dal nulla l'esperto perfetto (idraulico, avvocato, medico...) pronto ad aiutarti gratis e a sparire subito dopo.",
    "A comando emani un profumo che fa rivivere a chiunque lo senta il ricordo più bello della sua vita.",
    "Qualsiasi cosa tu abbia mai posseduto, anche persa o rotta, può ricomparire nella tua mano come nuova di zecca.",
    "Ogni foto o video in cui compari viene automaticamente perfetto: luce, posa ed espressione da copertina.",
    "Qualsiasi serratura o porta chiusa a chiave si apre per te con un semplice tocco, come se avessi sempre la chiave giusta.",
    "Puoi far comparire una porta d'uscita luminosa che ti conduce alla via di fuga più rapida da qualsiasi situazione, fisica o sociale.",
    // --- carte aggiunte (ottobre 2026): più corte, così si leggono bene sulla carta ---
    "Trovi sempre parcheggio davanti alla porta, anche in centro il sabato pomeriggio.",
    "Ogni volta che apri il frigo trovi già pronto il piatto che avevi voglia di mangiare.",
    "La tua squadra del cuore vince lo scudetto ogni anno e tu festeggi negli spogliatoi.",
    "Hai una villa al mare in Sardegna, con spiaggia privata e acqua sempre a 26 gradi.",
    "Non trovi mai coda: alle Poste, in autostrada e al supermercato tocca subito a te.",
    "La pizza che mangi non finisce mai: l'ultima fetta ricresce finché hai fame.",
    "Ogni mattina ti svegli riposato come dopo dieci ore di sonno, anche se hai dormito tre ore.",
    "Il tuo telefono non si scarica mai e non si rompe nemmeno se cade dal terzo piano.",
    "Sai cucinare la carbonara perfetta: perfino i romani ti chiedono la ricetta.",
    "Lavori quattro ore a settimana, da casa, e ti pagano come un calciatore di Serie A.",
    "Puoi volare a bassa quota, alla velocità di un motorino, senza casco e senza multe.",
    "Hai un cane fedelissimo che capisce tutto quello che dici e ti porta le pantofole.",
    "Ogni treno che prendi parte e arriva puntuale, con posto a sedere garantito.",
    "Non prendi mai il raffreddore, l'influenza o il mal di testa.",
    "Le zanzare non ti pungono mai: anzi, scappano appena ti vedono.",
    "Diventi amico del tuo cantante preferito, che ti scrive una canzone a ogni compleanno.",
    "Vinci ogni estate un viaggio intorno al mondo, in prima classe.",
    "Hai una nonna instancabile che ogni domenica ti cucina i tuoi piatti preferiti.",
    "Ogni foto che scatti viene come quelle delle riviste, anche col telefono vecchio.",
    "Puoi parlare con le piante e farle crescere rigogliose in un giorno.",
    "La tua casa si pulisce da sola mentre dormi e profuma sempre di bucato.",
    "Sai la risposta giusta a ogni quiz televisivo e vinci sempre il montepremi.",
    "Quando canti, la gente si ferma per strada ad ascoltarti commossa.",
    "Puoi rendere invisibile qualsiasi cosa tocchi, te compreso, per un'ora al giorno.",
    "Il tuo stipendio raddoppia ogni volta che qualcuno ti fa un complimento.",
    "Puoi mangiare tutto il gelato che vuoi senza ingrassare né avere mal di pancia.",
    "Hai un ascensore privato che ti porta in qualsiasi città del mondo in un minuto.",
    "Sei il più bravo del mondo a qualsiasi videogioco, al primo tentativo.",
    "Puoi parlare con te stesso da bambino e dargli un consiglio al giorno.",
    "Tutti i semafori diventano verdi appena ci arrivi.",
    "In ogni negozio in cui entri ti fanno il 90% di sconto.",
    "Hai un'isola privata ai Caraibi con un piccolo aeroporto tutto tuo.",
    "Non sbagli mai strada: hai un navigatore perfetto dentro la testa.",
    "Puoi mettere in pausa la tua vita per un pisolino di un anno, senza perderti niente.",
    "La tua voce è così rassicurante che i bambini smettono di piangere appena parli.",
    "Hai i capelli sempre perfetti: appena sveglio, sotto la pioggia o dopo il casco.",
    "Puoi teletrasportarti, ma solo dove c'è una pizzeria. Per fortuna sono ovunque.",
    "Le tue piante non muoiono mai, nemmeno se te ne dimentichi per mesi.",
    "Puoi cambiare il meteo nel raggio di un chilometro: sole garantito alle tue feste.",
    "Conosci le risposte di tutti i compiti in classe, gli esami e i colloqui di lavoro.",
    "Hai un fisico da atleta olimpico senza mai fare sport.",
    "Ogni volta che starnutisci ti cade in mano una moneta d'oro.",
    "Hai un drago amico grande come un cavallo, che d'inverno ti scalda casa.",
    "Vivi fino a 200 anni sentendoti sempre come a 25.",
    "Ti addormenti ovunque in un secondo e ti svegli esattamente quando vuoi.",
    "Qualsiasi animale selvatico diventa docile e affettuoso con te.",
    "Hai un abbonamento a vita a tutti i concerti, le partite e i cinema del mondo.",
    "Quando parli in pubblico tutti ti ascoltano rapiti, senza guardare il telefono.",
    "Ogni volta che perdi qualcosa, il giorno dopo te lo ritrovi sul comodino.",
    "Puoi correre a 100 all'ora senza stancarti e senza sudare.",
    "Puoi cucinare il pranzo di Natale per venti persone in cinque minuti.",
    "Il tuo letto è il più comodo del mondo e lo puoi portare ovunque, piegato in tasca.",
    "Ogni tuo regalo è sempre quello che l'altra persona desiderava di più.",
    "In giardino hai un tesoro: ogni volta che scavi trovi qualcosa di prezioso.",
    "Puoi rivivere un giorno a tua scelta della tua vita, una volta al mese.",
    "Puoi far nevicare quando vuoi, anche ad agosto, per fare pupazzi di neve.",
    "Hai uno chef stellato personale che ti segue ovunque, anche in campeggio.",
    "Tutte le bollette di casa tua le paga un ammiratore segreto.",
    "Non hai mai freddo d'inverno né caldo d'estate.",
    "La pioggia non ti bagna mai, come se avessi un ombrello invisibile.",
    "Fai a mente in un secondo qualsiasi conto, anche il più difficile.",
    "Ogni volta che ridi, chi ti sta intorno guarisce da un piccolo malanno.",
    "Senti la musica nella testa, senza cuffie, con un impianto da concerto.",
    "Dietro la tua libreria c'è un passaggio segreto che porta a una sala giochi enorme.",
    "Diventi il presentatore più amato della TV e a Sanremo ti invitano ogni anno.",
    "Puoi saltare alto dieci metri e atterrare morbido come un gatto.",
    "Ogni mattina sul balcone trovi cornetti caldi e un cappuccino perfetto.",
    "A carte sei fortunatissimo: a scopa, briscola e poker vinci quasi sempre.",
    "Quando sei in ritardo, il tempo per te scorre la metà più lento.",
    "Il mare, ovunque tu vada, è calmo, limpido e senza meduse.",
    "Puoi cambiare il colore dei capelli e dei vestiti solo pensandoci.",
    "Con un abbraccio guarisci le piccole ferite degli altri.",
    "Ti invitano a tutte le feste più belle della città, sempre come ospite d'onore.",
    "Hai una lampada magica che esaudisce un desiderio al giorno, purché sia piccolo.",
    "Hai un orto che dà frutta e verdura buonissime in ogni stagione.",
    "Scrivi libri bellissimi in una settimana e diventano tutti dei bestseller.",
    "Ti basta uno sguardo per capire cosa regalare, cosa dire e cosa evitare.",
    "Hai una piscina sul tetto di casa, con l'acqua alla temperatura che vuoi.",
    "Puoi dare vita ai tuoi peluche: diventano amici veri e ti fanno compagnia.",
    "Sai sempre dove sono le offerte migliori e non paghi mai a prezzo pieno.",
    "Hai una voce bellissima e suoni la chitarra come una rockstar.",
    "Tutti i vicini di casa ti adorano e ti portano dolci fatti in casa.",
    "Puoi diventare piccolo come una formica per esplorare il mondo da vicino.",
    "Ogni volta che sorridi a qualcuno, gli migliori la giornata.",
    "Il tuo capo ti adora, ti dà sempre ragione e ti manda in ferie quando vuoi.",
    "Hai la bacchetta della fata di Cenerentola: un abito da favola quando vuoi.",
    "Vedi al buio come un gufo e non inciampi mai.",
    "Il tuo frigorifero è sempre pieno e non devi mai fare la spesa.",
    "In vacanza c'è sempre il sole, anche quando le previsioni dicono pioggia.",
    "Hai un maestro saggissimo che ti dà sempre il consiglio giusto.",
    "Riesci a far ridere chiunque, anche il vigile che ti sta facendo la multa.",
    "Hai un armadio infinito con vestiti della tua taglia di ogni epoca.",
    "Hai uno scivolo gigante che dalla camera da letto porta dritto in cucina.",
    "Hai un posto riservato in prima fila a ogni evento sportivo del mondo.",
    "Puoi rimandare a domani qualsiasi problema: e domani si è risolto da solo.",
    "Puoi camminare sull'acqua come se fosse un pavimento.",
    "Sei ricchissimo e nessuno lo sa: puoi fare regali segreti a chi vuoi.",
    "Il tuo divano ti massaggia, ti scalda e ti porta gli snack.",
    "Capisci tutti i dialetti d'Italia e li parli come uno del posto.",
    "Hai un gemello gentile che ti copre quando non hai voglia di uscire.",
    "Qualsiasi gara a cui partecipi, la vinci per un soffio, tra gli applausi.",
    "Casa tua dentro è grande come un castello, anche se fuori sembra un monolocale.",
    "Ogni sera scegli tu cosa sognare, con tanto di colonna sonora.",
    "Vedi ogni film o serie prima che esca, e nessuno ti fa mai spoiler.",
    "Le tue scarpe non si consumano mai e sono comode come pantofole.",
    "Con un fischio chiami un taxi volante, gratis.",
    "Hai un unicorno che ti accompagna a scuola o al lavoro.",
    "Ti basta assaggiare un piatto una volta per saperlo rifare identico.",
    "Ti basta toccare un oggetto rotto per ripararlo come nuovo.",
    "I tuoi messaggi arrivano sempre al momento giusto e nessuno li fraintende.",
    "Una pizzeria ti considera di famiglia: ogni sera ti porta una pizza gratis.",
    "Hai la casa dei tuoi sogni, già pagata, nella città che preferisci.",
    "Chiunque ti incontri si ricorda di te con simpatia per tutta la vita.",
    "Puoi parlare con i tuoi bisnonni e scoprire tutti i segreti di famiglia.",
    "Trasformi qualsiasi lavoro noioso in un videogioco divertente.",
    "Il tuo gatto ti fa da segretario: risponde al telefono e ti ricorda gli appuntamenti.",
    "Hai un mantello che ti fa volare, ma solo di notte.",
    "La timidezza non sai cos'è: parli con chiunque senza imbarazzo.",
    "In qualsiasi ristorante, il cuoco ti regala il dolce.",
    "Fai bolle di sapone grandi come case e ci puoi viaggiare dentro.",
    "Puoi cambiare il finale dei film che guardi.",
    "Hai un sesto senso che ti avverte sempre un attimo prima di un pericolo.",
    "Appena parte la musica diventi un ballerino professionista.",
    "Hai un albero in giardino da cui crescono banconote da 50 euro.",
    "Hai un libro magico che risponde a qualsiasi domanda.",
    "Quando sei felice il tempo rallenta, così ti godi di più i bei momenti.",
    "Hai una bicicletta che pedala da sola, anche in salita.",
    "Professori, capi e vigili ti trovano simpaticissimo.",
    "Puoi fare il bagno nella cioccolata calda senza sporcarti.",
    "Ogni volta che ti annoi, arriva un amico con un'idea divertente.",
    "Hai un pappagallo parlante che conosce tutte le risposte dell'enciclopedia.",
    "Sei bravissimo in tutti gli sport con la palla, dal calcio al ping pong.",
    "Hai un ombrello che ti fa planare giù da qualsiasi altezza.",
    "Hai un sorriso così bello che ti fanno sempre passare avanti.",
    "Ti basta schioccare le dita per avere i piatti già lavati.",
    "Puoi camminare sui muri e sui soffitti come un geco.",
    "Hai una barca a vela tutta tua e la porti come un vero lupo di mare.",
    "Hai un'auto d'epoca bellissima che non si rompe mai.",
    "Puoi passare una giornata nel corpo del tuo animale preferito.",
    "Sei l'eroe del quartiere: tutti ti salutano e ti offrono il caffè.",
    "Hai la chiave di tutti i musei del mondo e puoi visitarli di notte, da solo.",
    "In casa tua scegli tu la stagione: estate a gennaio, neve a luglio.",
    "Ogni volta che prendi un aereo ti mettono in prima classe gratis.",
    "Hai un elicottero personale con il pilota sempre pronto.",
    "Quando vuoi, dal cielo nevica zucchero a velo.",
    "I tuoi amici ti dicono sempre la verità, ma con gentilezza.",
    "Hai una macchina del tempo per guardare il passato, come al cinema.",
    "Ogni giorno ricevi una lettera di grazie da qualcuno che hai aiutato senza saperlo.",
    "Puoi fermare una giornata storta e ricominciarla da capo, una volta a settimana.",
    "Ovunque vai trovi una panchina libera all'ombra e una fontanella fresca.",
    "Nei giochi da tavolo ti escono sempre i dadi che servono.",
    // 30 ott 2026: carte nuove di vita di tutti i giorni (lavoro, casa, soldi, cibo, vacanze, sport, città, feste, amori, famiglia, salute, animali, burocrazia)
    "Nessuno ti ha mai detto di no a un secondo appuntamento.",
    "Una volta l'anno il tuo ex ti scrive per ammettere che avevi ragione tu.",
    "Un tuo amico, a qualsiasi ora della notte, arriva con il furgone e non fa domande.",
    "Se hai una giornata storta, i tuoi amici organizzano una cena a sorpresa.",
    "Dopo ogni litigio bastano due parole per far pace e nessuno resta offeso.",
    "Con gli amici trovate sempre un tavolo libero, anche in venti e senza prenotare.",
    "Al ballo lento fai sembrare chiunque un ballerino professionista.",
    "Ogni coppia che presenti si innamora e dopo un anno ti vuole come testimone.",
    "Sul frigo trovi ogni mattina un biglietto d'amore scritto da chi ti vive accanto.",
    "La chat dei tuoi amici non ha mai vocali lunghi né messaggi a catena.",
    "Al secondo bicchiere capisci subito se la persona che hai davanti è quella giusta.",
    "Non dimentichi mai un compleanno e tutti ricevono da te un biglietto scritto a mano.",
    "Per l'anniversario ti aspetta ogni anno un weekend a sorpresa in una bella città d'arte.",
    "Anche dopo vent'anni, con un amico del liceo riparti da dove avevate smesso.",
    "Dai parenti il pranzo della domenica finisce sempre in tempo per il riposino.",
    "Tuo zio ti presta la casa in montagna quando vuoi, con la legna già pronta.",
    "Salutando la zia ti ritrovi sempre in tasca una busta con 50 euro.",
    "Ai pranzi di famiglia nessuno ti chiede mai di lavoro, fidanzati o figli.",
    "A ogni pranzo di famiglia ti avanza una teglia di tiramisù da portare a casa.",
    "I tuoi suoceri ti adorano e ti trattano come se fossi sempre stato di famiglia.",
    "Quando vedi i parenti ti dicono tutti che sei in forma e che stai benissimo.",
    "Ogni inverno tua nonna sferruzza per te un maglione bellissimo, senza renne né ricami.",
    "Nessun parente ti manda più catene di messaggi, né immagini di buongiorno con le rose.",
    "Tuo padre impara a usare il telefono e non ti chiama più per chiedere del Wi-Fi.",
    "Per Natale il pranzo lo organizza sempre qualcun altro: a te tocca solo mangiare.",
    "Per i tuoi nipoti sei il parente preferito: ti corrono incontro appena arrivi.",
    "Tuo fratello ti restituisce tutto ciò che prende in prestito, perfino i caricabatterie.",
    "Non russi e non parli nel sonno: chi ti dorme accanto riposa come un ghiro.",
    "Dopo una notte in bianco hai comunque la pelle riposata e nessuna occhiaia.",
    "Dal dentista ti dicono sempre che non hai una carie e ti regalano lo spazzolino.",
    "Le visite mediche per te non hanno lista d'attesa: ti chiamano sempre il giorno dopo.",
    "Dal parrucchiere esci sempre con il taglio giusto e senza chiacchiere inutili.",
    "Dopo una festa fino all'alba ti svegli fresco come una rosa, senza mal di testa.",
    "Dopo la palestra non hai mai dolori: le scale, il giorno dopo, le fai di corsa.",
    "Ti abbronzi dorato in un'ora, senza scottature, e il colore dura tutto l'inverno.",
    "Invecchi come il vino: ogni anno che passa, la gente ti trova più affascinante.",
    "Non ti spunta mai un capello bianco, nemmeno a ottant'anni.",
    "Vedi benissimo senza occhiali, ma ne porti un paio bellissimo che ti dà un'aria da genio.",
    "Puoi stare dieci ore seduto o in piedi senza mai avere il mal di schiena.",
    "Non soffri mai il mal d'auto, il mal di mare o il mal d'aereo.",
    "Soffiando su un dente di leone ti compare in mano un piccolo regalo.",
    "Se il cibo si brucia, basta dire «abracadabra» e torna perfetto.",
    "Con la forza del pensiero sposti oggetti leggeri come il telecomando o le chiavi.",
    "I calzini spaiati si cercano e si accoppiano da soli nel cassetto.",
    "Lo specchio di casa tua ti fa un complimento sincero ogni mattina.",
    "Accendi lampadine, candele e fornelli con un semplice sguardo, senza mai un fiammifero.",
    "Se pensi con forza a qualcuno, entro cinque minuti ti chiama al telefono.",
    "Alzi o abbassi di due gradi la temperatura di qualsiasi stanza, solo con un gesto.",
    "Col naso trovi sempre la focaccia più buona nel raggio di dieci chilometri.",
    "Una volta al giorno puoi spegnere per cinque minuti tutti i telefoni intorno a te.",
    "Con un battito di ciglia cambi canale a qualsiasi televisore nel raggio di dieci metri.",
    "Nel baule in soffitta trovi ogni settimana un oggetto magico nuovo, piccolo e quasi utile.",
    "Quando un gatto nero ti attraversa la strada, ti capita una piccola fortuna.",
    "Tutti i giorni il tuo gatto ti porta un regalino: una moneta, mai un topo.",
    "Hai un gatto che non lascia peli sul divano e non graffia mai le tende.",
    "Hai un gatto che ti sceglie sempre come persona preferita, anche davanti agli ospiti.",
    "Il tuo cane non tira mai al guinzaglio e non abbaia a postini e fattorini.",
    "Alle otto in punto il tuo cane ti sveglia con una leccatina, mai prima.",
    "A ogni passeggiata nel bosco il tuo cane trova un tartufo, e nessuno te lo contende.",
    "Di buon'ora il tuo cane va a prendere il pane e torna con il resto esatto.",
    "Hai un pesce rosso che vive vent'anni e riconosce la tua voce appena entri.",
    "Le api del tuo giardino ti regalano un vasetto di miele ogni mese, senza mai pungere.",
    "Nei boschi trovi sempre un cestino di porcini, e sono tutti buonissimi.",
    "Dal balcone vedi ogni sera un tramonto da cartolina, anche se affacci su un parcheggio.",
    "Il tuo coniglio nano impara un trucco nuovo a settimana e lo esegue a comando.",
    "Conosci le costellazioni a memoria: d'estate, sul prato, racconti il cielo a tutti.",
    "Il tuo ragù è così buono che i vicini bussano per assaggiarlo e portano il vino.",
    "Il panettiere sotto casa ti tiene ogni mattina la focaccia appena sfornata.",
    "Uno zio contadino ti porta ogni settimana olio, uova e formaggio freschissimi.",
    "Il forno di casa cuoce tutto alla perfezione, anche se ti scordi di controllarlo.",
    "Tiri la sfoglia al primo colpo: sottile, liscia e perfetta come quella delle nonne.",
    "Scegli sempre l'anguria giusta: la tagli e dentro è rossa, dolce e senza semi.",
    "Al supermercato sotto casa tengono da parte per te i tuoi biscotti preferiti.",
    "Fai un tiramisù famoso: la gente prenota una cena da te solo per assaggiarlo.",
    "In cucina non bruci, non rovesci e non ti tagli mai: sembri uno chef della TV.",
    "Il caffè che fai con la moka è così buono che i baristi ti chiedono la miscela.",
    "Ogni vino che apri si abbina in modo perfetto al piatto che stai servendo.",
    "Alle sagre di paese ti fanno assaggiare tutto gratis e ti riempiono la borsa di avanzi.",
    "Il frigo ti avvisa quando qualcosa sta per scadere e ti suggerisce la ricetta giusta.",
    "In spiaggia il tuo ombrellone è sempre in prima fila, con due lettini già pronti.",
    "Sull'aereo low cost il bagaglio a mano passa sempre, senza pagare nessun extra.",
    "Al rifugio ti danno sempre la camera con la vista migliore e una doppia polenta.",
    "In ogni hotel ti fanno l'upgrade alla suite e ti portano la colazione in camera.",
    "Trovi subito il ristorantino locale più buono di ogni città, senza leggere recensioni.",
    "Sul traghetto il mare è liscio, la partenza è puntuale e hai un posto in coperta.",
    "Sulle piste da sci trovi sempre neve fresca, cielo azzurro e nessuno davanti a te.",
    "La sabbia non ti si attacca mai ai piedi, al costume o al panino.",
    "Trovi sempre voli a 19 euro per dove vuoi tu, con partenza all'orario che preferisci.",
    "La tenda da campeggio si monta da sola in tre minuti e dentro non c'è mai umidità.",
    "Ovunque vai in vacanza paghi i prezzi dei locali, non quelli dei turisti.",
    "In palestra trovi sempre libera la macchina che vuoi, anche il lunedì sera.",
    "A padel e a tennis la palla va dove vuoi tu, anche quando giochi male.",
    "Ogni volta che corri fai il tuo record personale, senza allenarti di più.",
    "In bici hai sempre il vento in poppa, in salita come in discesa.",
    "Quelli del calcetto sono sempre al completo e nessuno arriva in ritardo.",
    "La tua borsa da palestra non sa mai di sudore, nemmeno dopo tre settimane.",
    "Dopo ogni allenamento la palestra ti offre un massaggio di mezz'ora.",
    "Al campetto fai canestro da qualsiasi distanza, anche dal parcheggio.",
    "A bowling fai strike al primo tiro e tutta la pista si alza a farti l'ola.",
    "Ogni passeggiata in collina che fai è in discesa, all'andata e al ritorno.",
    "Alle freccette centri il bersaglio al primo lancio, anche con la mano sbagliata.",
    "In piscina hai sempre la corsia tutta per te e nessuno ti nuota davanti.",
    "Per te il weekend dura tre giorni: comincia il venerdì a mezzogiorno.",
    "Sul regionale trovi sempre il posto al finestrino, con la presa per il telefono.",
    "L'autobus che prendi passa ogni cinque minuti, è mezzo vuoto e ha l'aria condizionata.",
    "I lavori stradali sulla tua strada finiscono sempre prima della data prevista.",
    "Quando metti la freccia, tutte le auto ti lasciano passare con un sorriso.",
    "Con il motorino non resti mai a piedi: parte al primo colpo, anche a gennaio.",
    "Con un solo abbonamento viaggi gratis su treni, bus e metro di tutta Italia.",
    "Alla stazione il tabellone non sbaglia mai: binario giusto e nessun cambio all'ultimo.",
    "Nei centri storici trovi sempre bagni pubblici puliti, gratuiti e senza fila.",
    "Di notte il tuo quartiere è silenzioso: niente sirene, niente moto, niente cantieri.",
    "La tua auto si parcheggia da sola al primo colpo, anche nello spazio più stretto.",
    "Chiami un taxi e arriva in due minuti, con un tassista che conosce ogni scorciatoia.",
    "Le strade della tua città non hanno buche: i tuoi ammortizzatori ti ringraziano.",
    "Nessuno ruba mai la tua bici, e il lucchetto si apre sempre al primo colpo.",
    "Quando hai un appuntamento importante il traffico sparisce e le strade sono libere.",
    "Al matrimonio ti mettono al tavolo dei più simpatici, vicino alla porta della cucina.",
    "Tieni un brindisi alle nozze: breve, divertente e capace di far ridere anche i parenti.",
    "Al buffet delle feste arrivi sempre quando escono i vassoi caldi, mai con gli avanzi.",
    "Una serata a settimana con gli amici: sono tutti liberi e nessuno disdice.",
    "Quando fai una festa i vicini non si lamentano mai: anzi, portano da bere.",
    "Festeggi il compleanno per una settimana: ogni sera una festa e una torta diversa.",
    "Entri in discoteca senza fila e il barista ti prepara il tuo cocktail preferito.",
    "A Capodanno i fuochi d'artificio partono solo quando alzi il bicchiere.",
    "Quando si fa la «romana» al ristorante, ti toccano sempre due euro in meno.",
    "Alla tombola di famiglia vinci cinquina e tombola, e nessuno fa polemica.",
    "La tua playlist alle feste mette d'accordo tutti, dai nonni agli adolescenti.",
    "Quando si decide dove andare la sera, tutti dicono sì al tuo posto preferito.",
    "Ai matrimoni nessuno ti chiede «e tu, quando ti sposi?», nemmeno la zia.",
    "Le riunioni a cui partecipi finiscono sempre con dieci minuti di anticipo.",
    "In ufficio hai la scrivania vicino alla finestra, con vista sul mare.",
    "Hai una stampante d'ufficio che funziona al primo colpo, ogni volta.",
    "Il venerdì si esce alle due, con l'aperitivo offerto dall'azienda.",
    "Alla mensa dell'azienda si mangia come al ristorante e il bis è gratis.",
    "Ogni anno ti danno una promozione e una scrivania più grande.",
    "Per il colloquio ti chiamano loro, e ti chiedono quanto vuoi guadagnare.",
    "Alle tue email rispondono tutti entro dieci minuti, con un grazie.",
    "A scuola ti danno il banco col termosifone d'inverno e il ventilatore d'estate.",
    "Il collega più chiacchierone viene trasferito e ti lascia finalmente in pace.",
    "Quando arrivi in ufficio il lunedì, il caffè ti aspetta già sulla scrivania.",
    "Il tuo badge apre ogni porta e il distributore ti regala tutto.",
    "Il capo ti ringrazia davanti a tutti per un lavoro che non hai fatto.",
    "Lo straordinario te lo pagano il triplo, e lo fai in pigiama da casa.",
    "Sul conto in banca non vai mai in rosso, nemmeno il 27 del mese.",
    "Trovi sempre una banconota da 20 euro nelle tasche delle giacche vecchie.",
    "Se il prezzo di ciò che hai comprato scende, il negozio ti rimborsa la differenza.",
    "Ogni anno il 730 ti restituisce un bel rimborso, mai un conguaglio.",
    "Al distributore fai il pieno al prezzo di vent'anni fa.",
    "Al ristorante il conto è sempre più basso di quello che avevi calcolato.",
    "I regali di Natale che ricevi sono sempre buoni spesa da 100 euro.",
    "Ogni sera trovi 10 euro in più nel salvadanaio, senza sapere da dove arrivino.",
    "Quando paghi in contanti, ti arrotondano sempre il conto per difetto.",
    "Con i punti raccolti al supermercato ti regalano ogni anno una vacanza.",
    "Il mutuo si estingue da solo il giorno del tuo compleanno.",
    "Alla cassa del supermercato c'è sempre un prodotto che ti viene regalato.",
    "L'amministratore di condominio risponde subito e risolve tutto in un giorno.",
    "Un vicino ti presta la scala, il trapano e pure una mano per i mobili.",
    "L'ascensore del palazzo arriva appena lo chiami e non si blocca mai.",
    "Chi abita sopra di te parte per una tournée e torna solo a Natale.",
    "Nel condominio fanno una cena ogni venerdì e tu sei l'ospite d'onore.",
    "L'idraulico arriva entro mezz'ora e non ti fa pagare la chiamata.",
    "In cantina hai una taverna con camino, dove la sera arrivano gli amici.",
    "Al portinaio affidi pacchi e chiavi, e lui innaffia anche le tue piante.",
    "L'affitto che paghi non aumenta mai, nemmeno dopo vent'anni.",
    "I bambini del palazzo giocano solo in giardino e sempre in silenzio.",
    "Hai l'acqua calda in un secondo e il boiler non finisce mai.",
    "I lavori di casa finiscono nei tempi promessi e sotto preventivo.",
    "Alle assemblee di condominio tutti ti danno ragione e finiscono in dieci minuti.",
    "Ogni post che pubblichi prende mille «mi piace» in un'ora.",
    "L'assistenza clienti risponde al primo squillo e risolve tutto in due minuti.",
    "Hai un abbonamento telefonico con dati infiniti e nessuna sorpresa in fattura.",
    "Hai un computer che si avvia in due secondi e non chiede mai aggiornamenti.",
    "Quando scrivi un messaggio, il correttore indovina sempre cosa volevi dire.",
    "Sotto le tue foto pubblicate arrivano solo commenti gentili.",
    "Hai il segnale pieno ovunque: in galleria, in ascensore e in montagna.",
    "Sul tuo telefono le app non mostrano mai pubblicità né notifiche inutili.",
    "Quello che ordini online arriva in giornata, montato e senza viti avanzate.",
    "La smart TV trova sempre il film giusto al primo scorrimento.",
    "Il router di casa non si blocca mai: riavviarlo è solo un ricordo.",
    "Le recensioni che scrivi online vengono lette, e il ristorante ti manda un dolce.",
    "Puoi dimenticare il telefono a casa: nessuno ti cerca finché non torni.",
    "Allo sportello del comune hai sempre in tasca il documento giusto.",
    "Lo SPID funziona al primo colpo, senza codici che scadono.",
    "I moduli da compilare ti arrivano già precompilati e senza errori.",
    "Rinnovi la carta d'identità in cinque minuti, con una foto bellissima.",
    "Le ricette del medico ti arrivano per messaggio, già pronte per la farmacia.",
    "All'anagrafe ti salutano per nome e hai già la pratica pronta sul bancone.",
    "Ogni ricorso contro una multa viene accolto, con tanto di scuse.",
    "Qualsiasi pratica burocratica si chiude in un giorno solo, con un solo timbro.",
    "Dall'agenzia delle entrate ricevi solo lettere per ringraziarti di essere puntuale.",
    "Quando suona il postino, il pacco è tuo e non c'è mai l'avviso di giacenza.",
    "In ogni ufficio pubblico trovi bagni puliti, carta e sapone per tutti.",
    "Se smarrisci un documento, il comune te ne manda uno nuovo a casa, gratis.",
    "Al telefono il tuo codice fiscale lo capiscono al primo colpo, senza esempi."
  ],
  malus: [
    "Ogni volta che sfrutti un tuo bonus, emetti un suono fortissimo da stadio.",
    "Sei perennemente inseguito da un'oca aggressiva che vuole attaccarti.",
    "Qualsiasi cosa tu tocchi a mani nude diventa per sempre molto appiccicosa.",
    "I tuoi Bonus e poteri si attivano unicamente se indossi un costume da coniglio rosa.",
    "Per usare qualsiasi tua abilità devi prima urlare il tuo codice fiscale.",
    "Al posto delle mani hai due gigantesche e ingombranti chele di granchio.",
    "Ogni volta che qualcuno pronuncia la parola “Sì”, cadi in un sonno profondo per un minuto.",
    "Tutto ciò che mangi o bevi avrà sempre un fortissimo sapore di terra bagnata.",
    "Devi sempre dire ad alta voce il tuo primo pensiero quando vedi una persona.",
    "Ogni volta che usi un tuo Bonus, ti fai un po' di pipì addosso, proprio davanti a tutti.",
    "Devi concludere ogni singola frase urlando a squarciagola: “E QUESTA È LA MIA FORMA FINALE!”.",
    "Le tue gambe sono fatte di spaghetti cotti: puoi camminare, ma sembri sempre un ubriaco di gomma.",
    "Chiunque ti guardi direttamente negli occhi scoppia a piangere disperatamente senza motivo.",
    "Ogni volta che menti o nascondi qualcosa, il tuo naso suona come una trombetta da stadio.",
    "Sei perennemente bagnato fradicio, come se fossi appena uscito vestito da una piscina.",
    "I tuoi poteri e Bonus si attivano solo se mentre li usi balli la Macarena in modo impeccabile.",
    "Tutti i cani del mondo ti saltano addosso per leccarti la faccia appena ti vedono.",
    "Al posto dei denti hai dei piccoli tasti di pianoforte che suonano a caso quando mastichi o parli.",
    "Hai costantemente, h24, la fastidiosa sensazione di dover starnutire, ma non starnutisci mai.",
    "Il tuo riflesso negli specchi e nei vetri ha vita propria: ti fa gestacci e ti insulta continuamente.",
    "Ogni mattina ti svegli con un tatuaggio imbarazzante nuovo al centro della faccia, che scompare solo a mezzanotte.",
    "Le tue braccia sono diventate corte la metà del normale, esattamente come quelle di un T-Rex.",
    "Ogni volta che attivi un Bonus, dimentichi per sempre il nome e il volto di una persona a te cara.",
    "Per attivare qualsiasi tuo potere devi prima farti dare un fortissimo schiaffo in faccia da qualcuno.",
    "Provi un'attrazione fisica e romantica irrefrenabile per i tostapane.",
    "Ogni volta che entri in una stanza, parte una musichetta da sitcom a tutto volume che tutti possono sentire.",
    "Non puoi mai più indossare scarpe o calze, e per te il pavimento ha sempre una temperatura di 60°C.",
    "Quando parli, la tua voce è identica in tutto e per tutto a quella di Topolino sotto effetto di elio.",
    "Ogni volta che sbatti le palpebre, si sente un fortissimo e fastidioso rumore di scatto fotografico.",
    "Non puoi fisicamente entrare in una stanza o in una casa se qualcuno non ti invita esplicitamente a entrare (come un vampiro).",
    "Il tuo braccio sinistro ha una mente propria e cerca costantemente di sabotare o infastidire quello che fa il destro.",
    "Ogni volta che ridi di gusto, deponi un grosso uovo (come una gallina) in modo molto visibile e imbarazzante.",
    "Devi parlare di te stesso esclusivamente in terza persona usando titoli medievali (es. “Sua Maestà ha fame”).",
    "I tuoi capelli sono composti da lombrichi vivi e contorcenti (come una Medusa, ma più schifosa).",
    "Non hai alcun attrito sotto le scarpe: scivoli costantemente su ogni superficie come se fossi sul ghiaccio.",
    "Puzzi costantemente e in modo inconfondibile di cipolla fritta e sudore da palestra.",
    "Non puoi mai chiudere gli occhi: devi dormire con gli occhi spalancati e inquietanti.",
    "Ogni volta che usi un Bonus, una persona a caso nella tua stessa stanza riceve uno schiaffo fortissimo da una mano invisibile.",
    "Ogni due giorni fai la muta, perdendo l'intera pelle come un serpente, ovunque tu sia.",
    "Devi fare beatbox in modo molto aggressivo e rumoroso durante qualsiasi conversazione seria.",
    "Al posto dei piedi hai dei pattini a rotelle perfettamente funzionanti, ma che non puoi mai togliere.",
    "Puoi comunicare i tuoi pensieri solo tramite danza interpretativa.",
    "Ogni volta che ti emozioni o ti agiti, ti gonfi come un palloncino e fluttui lentamente verso il soffitto.",
    "Hai un'insegna al neon fluttuante sopra la testa che indica sempre la tua esatta emozione o cosa stai nascondendo.",
    "Piangi ininterrottamente lacrime nere e dense come petrolio, 24 ore su 24.",
    "Tutto il tuo corpo fa un forte rumore di plastica scricchiolante (tipo pluriball o bottiglie schiacciate) a ogni minimo movimento.",
    "Ogni volta che provi a fare il misterioso o l'attraente, ti esce dal naso una lingua di menelik (fischietto da festa).",
    "Le tue mani sono fatte di burro solido e iniziano a sciogliersi vistosamente se fa troppo caldo.",
    "Non puoi mai girare a destra. Se devi andare a destra, devi fare tre giri su te stesso verso sinistra.",
    "Devi commentare ad alta voce tutto ciò che stai facendo, come un telecronista calcistico esaltato.",
    "Ogni tuo starnuto causa un violento terremoto circoscritto unicamente alla stanza in cui ti trovi.",
    "Chiunque ti sfiori inavvertitamente riceve una fastidiosissima e dolorosa scossa elettrica.",
    "Al posto delle orecchie hai due grosse fette di salame (ci senti benissimo, ma attiri tutti i gatti del quartiere).",
    "I tuoi poteri si disattivano totalmente se qualcuno ti fa il solletico. E tu soffri tantissimo il solletico.",
    "Hai perso per sempre il senso dell'orientamento: ti perdi regolarmente anche per andare dal salotto al bagno di casa tua.",
    "Provi l'irrefrenabile istinto canino di abbaiare e rincorrere furiosamente tutti i fattorini o postini che vedi.",
    "Hai una fobia paralizzante, urlante e irrazionale nei confronti dei pomodori (in qualsiasi forma).",
    "Sei costantemente circondato da uno sciame di mosche rumorose, non importa quanto ti lavi.",
    "Tutto il tuo corpo, faccia compresa, è ricoperto da un folto e ispido pelo verde evidenziatore.",
    "Non hai una via di mezzo per la voce: o sussurri in modo impercettibile o urli in modo assordante.",
    "Quando dormi voli in giro in modo del tutto inconsapevole, sbattendo la faccia contro cornicioni e lampioni.",
    "I tuoi pollici si trovano esattamente al centro dei palmi delle tue mani, rendendo difficilissimo afferrare le cose.",
    "Ogni volta che provi un'emozione forte (rabbia, tristezza, gioia), vomiti secchiate di coriandoli.",
    "Sembri sempre e costantemente colpevole di un crimine: le forze dell'ordine ti fermano per controlli ogni singola volta che esci di casa.",
    "Sei un magnete umano: tutte le monete, chiavi e forchette nel raggio di 5 metri ti volano addosso attaccandosi al tuo corpo.",
    "I tuoi capelli crescono di un metro al giorno e non puoi tagliarli con niente di convenzionale.",
    "Quando provi attrazione per qualcuno, ti metti a fare le fusa fortissimo come un gatto.",
    "Sudi colla a presa rapida: se stringi la mano a qualcuno, restate attaccati per due ore.",
    "Le tue ossa emettono una musichetta da ascensore costante che tutti possono sentire.",
    "Ogni volta che usi i tuoi poteri, i tuoi vestiti si trasformano in un pigiama di flanella con le paperelle.",
    "Qualsiasi porta cerchi di aprire si incastra e richiede almeno tre tentativi violenti per aprirsi.",
    "Devi presentarti a ogni nuova persona facendo una capriola goffa e imbarazzante.",
    "Il tuo ombelico funziona come un distributore di maionese: ne esce un po' ogni volta che ti pieghi.",
    "Non puoi mai usare mezzi di trasporto: se sali su un'auto, treno o aereo, il motore si spegne.",
    "Ogni volta che ti arrabbi, la tua testa si rimpicciolisce fino a diventare grande come una mela.",
    "Parli esclusivamente in rima baciata, e se sbagli una rima ti arriva uno schiaffo invisibile.",
    "Hai la pelle completamente trasparente: si vedono tutti i muscoli, le vene e gli organi interni.",
    "Se qualcuno dice il tuo nome, sei costretto a rispondere urlando “PRESENTE!”.",
    "Hai due piccole corna da capra sulla fronte che brillano al buio come neon da discoteca.",
    "Qualsiasi cosa tu stia bevendo, al primo sorso ti va sempre di traverso facendoti tossire mezz'ora.",
    "Il tuo battito cardiaco fa il rumore di una grancassa da concerto, impossibile da nascondere.",
    "Provi terrore puro se vedi un calzino spaiato, fino al punto di svenire.",
    "Devi fare almeno 10 flessioni perfette prima di poterti sedere su qualsiasi sedia o divano.",
    "Qualsiasi animale ti veda inizia a fissarti dritto negli occhi con un'espressione giudicante.",
    "Hai una coda da cane molto folta che inizia a scodinzolare freneticamente e rumorosamente ogni volta che menti.",
    "Le tue tasche sono permanentemente piene di sabbia bagnata e melmosa, non importa quante volte le svuoti.",
    "Devi sempre fare un inchino plateale e annunciare “AMMIRATEMI!” ogni volta che entri in una nuova stanza.",
    "La tua faccia è costantemente pixelata e censurata nella vita reale, come in un video giapponese.",
    "Le tue lacrime sono composte al 100% da salsa piccante Tabasco.",
    "Sei terrorizzato a morte dall'idraulica: non puoi usare i bagni al chiuso, devi sempre farla nella natura.",
    "Ogni volta che salti o fai uno scalino, emetti un sonoro e sgraziato peto.",
    "Non hai una voce interiore: ogni singolo pensiero che ti passa per la testa viene pronunciato ad alta voce.",
    "Ogni volta che provi a usare un Bonus, appare una banda di Mariachi che ti segue suonando a tutto volume per 10 minuti.",
    "Non puoi mai piegare i gomiti: hai le braccia perennemente tese e rigide.",
    "Ogni volta che ti arrabbi, la tua voce suona esattamente come un modem anni '90 che si connette a internet.",
    "Tutti gli animali provano l'istinto irrefrenabile di rubarti le scarpe e scappare via.",
    "Sei obbligato a chiamare “Mamma” o “Papà” qualsiasi persona in posizione di autorità (poliziotti, capi, giudici).",
    "Devi muoverti esclusivamente camminando lateralmente come un granchio, tenendo le mani a forma di chela.",
    "Hai un gigantesco sombrero messicano incollato in testa in modo permanente. Non passa dalle porte normali.",
    "Il tuo sorriso è talmente luminoso al buio che funziona come un faro abbagliante da cantiere.",
    "Se vieni guardato dritto negli occhi da qualcuno, sei costretto a muoverti al rallentatore.",
    "Senti costantemente la voce di tua suocera (o della tua insegnante peggiore) che critica tutto ciò che fai.",
    "Per sapere cos'è un oggetto o di cosa è fatto, sei costretto a dargli una bella leccata.",
    "Quando partecipi a un funerale o c'è un momento di altissima tensione, inizi a ridere in modo sguaiato e incontrollabile.",
    "Non puoi aprire nessuna porta, portiera o cassetto da solo: devi sempre aspettare che qualcuno lo faccia per te.",
    "Quando parli con qualcuno per più di un minuto, la tua voce e la sua si scambiano.",
    "Quando dormi sei costretto ad appenderti a testa in giù dall'armadio o dal lampadario, come un pipistrello.",
    "Devi applaudire in modo molto fiero e rumoroso per 5 secondi prima di poter iniziare una qualsiasi frase.",
    "Ogni volta che senti suonare un campanello scoppi a piangere commosso come a un matrimonio.",
    "Davanti a chiunque ti piaccia inizi a fare il verso della gallina e non riesci a smettere.",
    "Lasci ovunque dei fastidiosi peli di cane bagnato, anche se non possiedi un cane.",
    "Sei seguito costantemente da un occhio di bue (un riflettore teatrale) che illumina solo te ovunque vai.",
    "Qualsiasi cosa tu beva ha la consistenza densa e vischiosa dello sciroppo per la tosse, ma ne mantiene il sapore.",
    "Hai le mani sempre insaponate e scivolosissime. Non puoi mai sciacquarle o asciugarle.",
    "Ogni volta che vedi un volatile, sei costretto a salutarlo togliendoti il cappello e dicendo ad alta voce: “Buongiorno, signore”.",
    "Quando cammini, fai sempre e inevitabilmente il suono degli stivali di gomma bagnati su un pavimento di ospedale.",
    "Ogni tuo starnuto spara fuori dal tuo naso un vero fuoco d'artificio, pericoloso, rumoroso e molto luminoso.",
    "Sei attratto irrazionalmente dalle lampadine accese: se ne vedi una devi andarle vicinissimo e fissarla in trance per 10 secondi.",
    "Se provi a sussurrare un segreto, la tua voce esce forte e chiara col suono di una sirena dell'ambulanza.",
    "Devi masticare ogni singolo boccone di cibo esattamente 100 volte prima di deglutire, altrimenti soffochi in modo comico.",
    "I tuoi peli del corpo sono fatti di sottilissimi e pungenti fili di rame: pungi chiunque ti tocchi la pelle.",
    "Ogni mattina alle 6:00 in punto, devi cantare a squarciagola l'Inno Nazionale, indipendentemente da dove ti trovi o con chi sei.",
    "Se qualcuno pronuncia il tuo nome, sei costretto a buttarti a terra e fare una capriola prima di rispondere.",
    "Hai la testa perennemente circondata da una “nuvoletta da impiegato fantozziano” che ti fa piovere addosso h24.",
    "Quando provi attrazione per una persona, le tue orecchie iniziano a fischiare come il bollitore del tè a pieno regime.",
    "Non hai il pollice opponibile: le tue mani sono fatte esattamente a “U” come quelle dei pupazzi Lego.",
    "Qualsiasi canzone romantica o epica tu ascolti, viene automaticamente remixata dal tuo cervello in versione liscio romagnolo.",
    "Sei obbligato a leccarti le sopracciglia (cosa che anatomicamente riesci a fare) ogni singola volta che sei nervoso o menti.",
    "Lasci scie di bava appiccicosa ovunque ti siedi, esattamente come una lumaca gigante.",
    "Quando ti specchi, il tuo riflesso è in ritardo di 3 secondi rispetto ai tuoi movimenti reali, facendoti impazzire.",
    "Devi bere l'acqua esattamente come fa un gatto, chinandoti e leccandola dalla ciotola o dal bicchiere senza usare le mani.",
    "Sudi vernice a olio sempre fresca e di colori casuali: macchi irreparabilmente qualsiasi divano, letto o sedia su cui ti appoggi.",
    "I tuoi denti cambiano colore ogni ora seguendo l'arcobaleno: a volte hai i denti verde evidenziatore, a volte viola intenso.",
    "Ogni volta che apri o chiudi una porta, sei costretto a fare tu con la bocca l'inquietante rumore di una porta che scricchiola.",
    "Provi un odio feroce e insensato per i bottoni: svieni se provi a indossare o a toccare una camicia o qualsiasi vestito abbottonato.",
    "Il tuo naso cresce visibilmente (come Pinocchio) e si accorcia ogni volta che pronunci la parola “Io”.",
    "Per attivare qualsiasi Bonus devi prima farti un selfie in una posa imbarazzante con un totale sconosciuto e postarlo sui social.",
    "Hai un piccolo campanellino d'ottone attaccato in gola: ogni volta che respiri o parli, trilli in modo acutissimo.",
    "Non riesci mai a pronunciare il tuo nome: quando ti presenti, dici involontariamente il nome dell'ultimo cibo che hai mangiato.",
    "Se vedi uno specchio d'acqua (una piscina, ma anche una grossa pozzanghera), devi tuffartici di pancia senza esitare.",
    "Al posto dell'ombelico hai un grosso pulsante rosso da allarme: se qualcuno per sbaglio lo preme, tu svieni istantaneamente per 5 minuti.",
    "Ogni volta che qualcuno ti fa un complimento, scoppi in un fragoroso applauso rivolto a te stesso e non riesci a smettere per un minuto.",
    "Sei incapace di dire di no: ogni volta che vorresti rifiutare qualcosa, dalla tua bocca esce solo un entusiasta “Sì, certo!”.",
    "Ogni bugia che dici la smentisci da solo un secondo dopo, annunciando ad alta voce: “...era una bugia!”.",
    "Appena entri in un luogo silenzioso (biblioteca, funerale, ascensore), il tuo stomaco brontola a volume assordante.",
    "La tua risata suona esattamente come il motore di una macchina che non parte in una gelida mattina d'inverno.",
    "Ogni volta che qualcuno ti abbraccia, emetti il verso acutissimo di un giocattolo di gomma che viene schiacciato.",
    "Sei costretto a rispondere a ogni domanda cantando, come in un musical, con tanto di gesti teatrali.",
    "Ogni parola straniera che pronunci sei obbligato a ripeterla subito tradotta ad alta voce, con un accento comico esagerato.",
    "Cammini bene solo se senti un ritmo o una musichetta: nel silenzio ti impunti e ti blocchi come un robot scarico.",
    "Ogni volta che stai per dire qualcosa di importante, ti parte un lunghissimo e sonoro sbadiglio che ti interrompe.",
    // --- carte aggiunte (ottobre 2026): più corte, così si leggono bene sulla carta ---
    "Ogni volta che usi un tuo Bonus, parte a tutto volume la sigla di un cartone animato.",
    "Sei seguito ovunque da un piccione che ti giudica in silenzio.",
    "Ogni volta che sei felice, ti spuntano dei baffi enormi che durano un'ora.",
    "Puoi usare i tuoi Bonus solo vestito da pollo, con tanto di cresta.",
    "Ogni volta che entri in una stanza inciampi. Sempre. Davanti a tutti.",
    "Ogni frase che dici finisce con «...e questo lo dico per esperienza».",
    "Quando ti siedi, la sedia fa sempre un rumore imbarazzante.",
    "Hai sempre un sassolino nella scarpa e non riesci mai a toglierlo.",
    "Prima di usare un Bonus devi chiedere il permesso a tua madre, al telefono.",
    "Tutti ti chiamano col nome sbagliato, e tu devi rispondere.",
    "Ogni volta che ridi ti viene il singhiozzo per un'ora.",
    "Su ogni pizza che mangi c'è l'ananas. Sempre.",
    "Il tuo telefono ha l'1% di batteria, per sempre.",
    "Il Wi-Fi ti funziona solo se stai in piedi su una gamba sola.",
    "I tuoi Bonus si attivano con tre giorni di ritardo.",
    "In ogni fila, davanti a te c'è qualcuno che paga con le monetine.",
    "Quando ti guardi allo specchio, il tuo riflesso sbadiglia annoiato.",
    "Hai sempre in testa la stessa canzoncina per bambini, a ripetizione.",
    "Quando parli, un'eco ripete l'ultima parola tre volte.",
    "Sei inseguito da un venditore di enciclopedie che non accetta un no.",
    "Ogni volta che usi un Bonus perdi un calzino: hai sempre i piedi freddi.",
    "Ogni volta che stai per vincere qualcosa, ti scappa uno starnuto gigante.",
    "Puoi muoverti solo saltellando, come un canguro.",
    "Hai la voce del trailer di un film d'azione, anche quando ordini un caffè.",
    "Tutti i bambini che incontri ti fanno la linguaccia, e tu non puoi rispondere.",
    "Chiunque ti saluti ti dà una pacca sulla spalla fortissima.",
    "Ogni volta che usi un Bonus, accanto a te muggisce una mucca. Una mucca vera.",
    "Quando dici una parolaccia ti esce una bolla di sapone dalla bocca.",
    "Hai sempre i vestiti al contrario e te ne accorgi solo a fine giornata.",
    "Ogni tuo Bonus funziona solo se lo annunci prima col megafono.",
    "Devi fare tutto quello che ti dice il vicino di casa più antipatico.",
    "Quando hai fretta ti si slaccia una scarpa. Ogni volta.",
    "Un gatto (che non hai) ti sveglia ogni notte alle 4.",
    "Hai sempre le mani gelide, e tutti lo notano quando le stringi.",
    "Se qualcuno ti tocca il naso, suona come un clacson.",
    "Dove cammini spuntano margherite: tutti sanno sempre dove sei stato.",
    "Dopo ogni tua frase si sente un «buuu» del pubblico, anche quando hai ragione.",
    "Ogni volta che usi un Bonus ti si appannano gli occhi, come gli occhiali d'inverno.",
    "Quando qualcuno ti chiede «come stai?» devi raccontare tutta la tua giornata.",
    "Il tuo letto è sempre pieno di briciole, anche se non ci mangi mai.",
    "Tutto quello che compri arriva una taglia più piccolo.",
    "Puoi parlare solo sottovoce, come in biblioteca, anche allo stadio.",
    "Hai il terrore degli ascensori: devi fare sempre le scale, anche al 20° piano.",
    "Ogni volta che usi un Bonus, perdi le chiavi di casa.",
    "La tua suoneria è un pernacchio, e non si può cambiare.",
    "Tutti ti scambiano per il cameriere e ti ordinano da bere.",
    "Ogni volta che ti siedi a tavola, ti macchi la maglietta di sugo.",
    "Devi festeggiare ogni piccolo successo con un balletto della vittoria.",
    "A ogni domanda rispondi con un'altra domanda.",
    "Prima di usare un Bonus devi mandar giù un cucchiaio di olio di fegato di merluzzo.",
    "Hai un fan scatenato che ti segue ovunque chiedendo selfie, anche in bagno.",
    "In pubblico hai sempre i capelli come se fossi appena uscito da un tornado.",
    "Ogni volta che usi un Bonus devi offrire il caffè a tutti i presenti.",
    "La sveglia ti suona un'ora prima ogni mattina, e non si può cambiare.",
    "Ogni volta che devi dire qualcosa di importante, ti dimentichi cosa volevi dire.",
    "Ogni pianta che tocchi appassisce all'istante.",
    "Ogni volta che sei felice inizia a piovere. Solo su di te.",
    "Puoi usare i tuoi Bonus solo di martedì.",
    "Il correttore automatico cambia ogni tuo messaggio in qualcosa di imbarazzante.",
    "Ogni frase che dici deve contenere la parola «patata».",
    "Ogni volta che entri in un negozio, suona l'allarme antitaccheggio.",
    "Ovunque tu vada a vivere, il vicino suona la batteria tutte le notti.",
    "Ogni volta che usi un Bonus, la tua faccia diventa viola per un'ora.",
    "Le tue scarpe cigolano sempre, anche quelle nuove.",
    "Non riesci mai a finire una frase: qualcuno ti interrompe sempre.",
    "Appena ti rilassi squilla il telefono. È sempre un call center.",
    "Tutti i cani ti abbaiano contro, perfino quelli di peluche.",
    "Dimentichi il nome delle persone un secondo dopo che si sono presentate.",
    "Tutto quello che mangi ha il sapore di quello che hai mangiato il giorno prima.",
    "Vedi solo in bianco e nero, come nei film dei nonni.",
    "Ogni volta che usi un Bonus, ti spunta un brufolo gigante sulla punta del naso.",
    "Appena sali in macchina parte la radio, al massimo, sulla stazione del liscio.",
    "Sei sempre convinto di aver lasciato il gas acceso, e torni a controllare.",
    "Ogni volta che sbagli, una voce dal cielo dice «Ahi ahi ahi».",
    "A ogni evento importante devi presentarti vestito da dinosauro.",
    "In tutte le foto vieni con gli occhi chiusi.",
    "Sopra la tua testa compaiono i sottotitoli di quello che dici, pieni di errori.",
    "La tua ombra ti segue sempre con cinque secondi di ritardo.",
    "Ogni volta che usi un Bonus devi cantare l'inno della tua squadra del cuore.",
    "Non puoi mai mangiare seduto: solo in piedi, come al bancone di un bar.",
    "Una nonna ti guarda sempre da una finestra e commenta tutto quello che fai.",
    "Chiunque ti incontri ti racconta i suoi problemi per almeno mezz'ora.",
    "Hai sempre fame, anche appena finito un pranzo di nozze.",
    "Il tuo cuscino è sempre caldo da tutti e due i lati.",
    "Ogni volta che usi un Bonus devi compilare un modulo in tre copie.",
    "Quando sorridi hai sempre un pezzo di spinacio tra i denti.",
    "Ogni volta che usi un Bonus, un gabbiano ti ruba il panino.",
    "Ogni porta che attraversi la devi chiudere tre volte, se no torni indietro.",
    "Sei inseguito da un mimo che imita tutto quello che fai.",
    "Per uscire di casa devi fare dieci saltelli davanti alla porta.",
    "I pantaloni ti si strappano sempre nel momento meno adatto.",
    "Quando qualcuno starnutisce devi dire «Salute!» e fare un inchino.",
    "Hai sempre la sensazione di aver dimenticato qualcosa. Ed è vero.",
    "Ogni volta che stai per addormentarti, una zanzara ti ronza nell'orecchio.",
    "Chiunque ti dia la mano te la stritola finché non dici «basta».",
    "Il tuo ombrello si gira al contrario appena c'è un filo di vento.",
    "Ogni volta che usi un Bonus, un tuo amico si offende con te e non ti dice perché.",
    "Ogni tuo messaggio vocale dura almeno dieci minuti, anche se volevi dire «ok».",
    "Al posto del naso hai una carota: senti gli odori, ma i conigli ti inseguono.",
    "Quando sei nervoso ti esce il vapore dalle orecchie, come da una caffettiera.",
    "Devi applaudire ogni volta che atterra un aereo, anche se lo vedi in TV.",
    "Le tue mani sanno sempre d'aglio, anche dopo dieci lavaggi.",
    "Ogni volta che usi un Bonus, per un minuto diventi un nano da giardino.",
    "Devi raccontare a tutti i tuoi sogni della notte, nei minimi dettagli.",
    "Ogni volta che incontri un cane, devi presentarti con nome e cognome.",
    "Ogni tua risata dura almeno tre minuti, anche per le battute più brutte.",
    "Al telefono la linea cade sempre sulla parola più importante.",
    "Hai sempre un pezzo di carta igienica attaccato alla scarpa.",
    "Ogni volta che ti siedi sul divano sprofondi e non riesci più ad alzarti da solo.",
    "Il tuo frigorifero parla, e ti giudica ogni volta che lo apri di notte.",
    "Ogni volta che vai al mare, un granchio ti pizzica l'alluce.",
    "Tutte le tue foto vengono mosse, sfocate o con un dito davanti.",
    "Il lunedì puoi camminare solo all'indietro.",
    "Ogni volta che usi un Bonus, dimentichi dove hai parcheggiato.",
    "Ti si appiccicano addosso tutte le gomme da masticare della città.",
    "A tavola ti tocca sempre la sedia che traballa.",
    "Il tuo caffè è sempre freddo, il tuo gelato sempre sciolto.",
    "Puoi dire solo la verità, soprattutto quando ti chiedono «come sto?».",
    "Ogni volta che usi un Bonus ti spunta una coda da pavone gigantesca, per un'ora.",
    "Ogni notte il tuo letto si sposta in una stanza diversa della casa.",
    "Hai sempre i capelli carichi di elettricità statica: sembri un porcospino.",
    "Quando ridi, ti escono bolle di sapone dal naso.",
    "Le zanzare di tutta la regione vengono a cercare proprio te.",
    "Ogni regalo che ricevi lo devi indossare subito, anche se è un tostapane.",
    "Ogni volta che usi un Bonus devi fare la ruota. E non la sai fare.",
    "Quando cammini di sera, i lampioni si spengono uno dopo l'altro al tuo passaggio.",
    "Il navigatore ti porta sempre nel paese con lo stesso nome, ma in un'altra regione.",
    "Ogni ora ti esce un cucù dalla testa che annuncia l'ora a tutti.",
    "Puoi scrivere solo in maiuscolo: sembra sempre che stai urlando.",
    "Appena entri in acqua, qualcuno grida «Squalo!» e scappano tutti.",
    "Per ogni Bonus che usi ascolti un'ora di musichetta d'attesa del call center.",
    "A ogni matrimonio ti tocca fare il discorso. E piangi sempre.",
    "Ti senti sempre osservato. E hai ragione: è la vicina col binocolo.",
    "Ai giochi da tavolo perdi sempre contro un bambino di sei anni.",
    "Ogni volta che usi un Bonus ti cresce un monociglio folto che sparisce a mezzanotte.",
    "Le tue ciabatte scappano: ogni mattina devi rincorrerle per casa.",
    "Quando sali sulla bilancia, annuncia il tuo peso a tutto il palazzo.",
    "Hai un mal di piedi costante che passa solo quando canti.",
    "Ogni volta che usi un Bonus devi cambiarti d'abito, come una star in tour.",
    "Ogni tua frase deve cominciare con «Ai miei tempi…».",
    "Le tue tasche sono bucate: tutto quello che ci metti finisce per terra.",
    "Ovunque arrivi, ha appena chiuso. Sempre.",
    "Sei sempre il primo a cui chiedono di aiutare in un trasloco.",
    "Al posto delle sopracciglia hai due baffi da tricheco.",
    "Tutti i bambini pensano che tu sia Babbo Natale e ti inseguono con le letterine.",
    "Quando starnutisci, cambi lingua per un'ora.",
    "Ogni volta che usi un Bonus devi abbracciare il primo sconosciuto che incontri.",
    "In macchina hai sempre davanti un trattore che va a 20 all'ora.",
    "Quando sei stanco ti addormenti in piedi come un cavallo, ovunque tu sia.",
    "Quando qualcuno dice «formaggio», devi metterti in posa per una foto.",
    "Ogni pacchetto di patatine che apri, metà finisce per terra.",
    "Hai un pappagallo sulla spalla che racconta a tutti i tuoi segreti.",
    "Ogni volta che usi un Bonus ti si gonfia il labbro come dopo il dentista.",
    "Non puoi mai togliere il casco da moto, nemmeno a cena.",
    "Davanti a ogni specchio devi fare l'occhiolino e dire «Ciao, bello!».",
    "La tua sveglia è un gallo vero che vive in camera tua.",
    "Quando sei in imbarazzo diventi tutto a pois colorati.",
    "Ogni volta che usi un Bonus devi inventare una rima col tuo nome, ad alta voce.",
    "Il giorno del tuo compleanno nessuno se lo ricorda. Nemmeno tu.",
    "Ogni volta che dici «sono stanco», devi fare dieci flessioni.",
    // 30 ott 2026: carte nuove di vita di tutti i giorni (lavoro, casa, soldi, cibo, vacanze, sport, città, feste, amori, famiglia, salute, animali, burocrazia)
    "A ogni appuntamento ti accorgi che tua madre è seduta al tavolo accanto.",
    "Quando usi un Bonus, uno dei tuoi ex ti scrive: «Ciao, come stai?».",
    "Chiami sempre la persona che ti piace con il nome del tuo ex.",
    "Ogni sera un amico diverso ti presenta qualcuno «perfetto per te», e non è mai vero.",
    "Mandi sempre per sbaglio i tuoi messaggi privati nel gruppo degli amici.",
    "Al ristorante ti portano sempre il conto sbagliato, quello di un tavolo da dodici.",
    "Gli amici ti chiamano solo per farsi accompagnare in aeroporto alle quattro di mattina.",
    "Gli amici ti regalano ogni anno lo stesso soprammobile, e devi tenerlo in salotto.",
    "Chi ti ama ti chiama «cucciolo» davanti a tutti, perfino al tuo capo.",
    "Ti chiedono tutti quando ti sposi, anche il benzinaio e il postino.",
    "I tuoi Bonus funzionano solo quando nella stanza non c'è nessuno che ti piace.",
    "Il tuo migliore amico ti anticipa il finale di ogni film, serie e libro.",
    "Nessun Bonus parte senza l'approvazione di un sondaggio tra i tuoi amici.",
    "Al pranzo della domenica tua nonna ti rimette nel piatto il bis e non accetta un no.",
    "Tua madre ti chiama ogni giorno alle otto del mattino per chiederti se hai mangiato.",
    "Dopo ogni Bonus che usi, tua madre lo scrive nel gruppo WhatsApp di famiglia.",
    "Tuo zio ti spiega come avresti dovuto fare tutto, dal parcheggio alla vita.",
    "A Natale tutti i parenti ti regalano lo stesso paio di calzini.",
    "Ogni parente che ti saluta ti pizzica le guance finché non diventano rosse.",
    "Ai pranzi di famiglia ti siedi sempre tra due zii che discutono a voce altissima.",
    "La domenica il pranzo dura fino all'ora di cena, e poi arrivano gli avanzi.",
    "Ovunque tu sia invitato a pranzo, i piatti per venti persone li lavi tu.",
    "Per ogni Bonus usato, un parente lontano si presenta a casa e chiede un favore.",
    "Tutti i parenti ti rinfacciano ogni Bonus che usi, per anni, a ogni pranzo di famiglia.",
    "Tua madre mostra a ogni tuo nuovo amico l'album con le foto di quando eri in fasce.",
    "Quando torni dai tuoi, ti trattano di nuovo come se avessi dieci anni.",
    "Ti viene il torcicollo ogni volta che dormi in un letto che non è il tuo.",
    "Russi così forte che i vicini ti applaudono ogni mattina dal balcone.",
    "Passi metà della giornata a cercare gli occhiali che hai già sulla testa.",
    "Alle nove di sera ti viene un sonno irresistibile, anche alle tue feste di compleanno.",
    "In treno ti addormenti sempre e ti svegli due fermate dopo la tua.",
    "Basta una rampa di scale per darti il fiatone, e fingi di ammirare i quadri.",
    "Nel camerino di un negozio la tenda si apre sempre sul più bello.",
    "Sul divano di casa ti viene il mal d'auto, se in TV c'è una strada piena di curve.",
    "Hai il sonno leggerissimo: ti svegli se in casa cade una briciola.",
    "Ti prude la schiena sempre nel punto dove nessuna mano riesce ad arrivare.",
    "Senza otto ore di sonno i tuoi Bonus non funzionano, e tu non ci arrivi mai.",
    "Appena usi un Bonus ti viene il colpo della strega e cammini piegato in due per un'ora.",
    "Prima di usare un Bonus devi fare cinque minuti di stretching, se no ti strappi qualcosa.",
    "Da agitato parli al contrario, partendo dall'ultima parola della frase.",
    "Di tutto l'oroscopo del giorno, si avvera sempre e solo la parte peggiore.",
    "Un folletto dispettoso ti cambia di posto le cose della cucina ogni notte.",
    "Appena qualcuno ti dice «in bocca al lupo», ti cade di mano qualcosa.",
    "Hai il malocchio: ogni volta che ti va bene una cosa, te ne va male un'altra.",
    "Per attivare un Bonus devi prima pronunciare una formula magica in latino maccheronico.",
    "Un Bonus dura soltanto finché riesci a trattenere il respiro.",
    "Chi ti vede usare un Bonus ti impone un pegno, e tu devi pagarlo subito.",
    "Ogni volta che dici «non c'è problema», ne compare subito uno nuovo.",
    "La tua fata madrina è in sciopero e ti lascia ogni mattina un biglietto: «Arrangiati».",
    "Qualsiasi cosa ottieni con i tuoi Bonus ti arriva in formato miniatura.",
    "Diventi invisibile a camerieri, commessi e baristi: ti servono sempre per ultimo.",
    "Una volta al giorno, in un momento a caso, ti trasformi in un gatto per tre secondi.",
    "Il tuo cane mangia ogni volta l'unico oggetto che ti serve, dal telecomando alle chiavi.",
    "Nel parco il tuo cane trova sempre la pozzanghera più sporca e ci si rotola.",
    "In pigiama, con il cane al guinzaglio, incontri tutti quelli che conosci.",
    "Alla parola «veterinario» il tuo cane sparisce sotto il letto e non esce più.",
    "Prima di ogni Bonus devi portare a spasso un cane per mezz'ora, e non è nemmeno il tuo.",
    "Il tuo gatto si sdraia sempre esattamente sopra la cosa che stavi per usare.",
    "Ti basta usare un Bonus perché ti si sieda in grembo un gatto che non vuole più alzarsi.",
    "Sei allergico al polline, ma solo nelle giornate di sole più belle dell'anno.",
    "Se indossi qualcosa di bianco, un uccello ti centra puntualmente dall'alto.",
    "Una talpa scava ogni notte una buca nuova esattamente davanti alla tua porta.",
    "In montagna ogni passeggiata «facile» è una salita di tre ore sotto il sole.",
    "In campeggio la tua tenda finisce sempre sopra un sasso a punta.",
    "Senza il permesso del tuo animale domestico nessun Bonus funziona, e di solito dice no.",
    "Nel lago fai il bagno e ne esci sempre con un'alga in testa, come un cappello.",
    "La pasta che cucini scuoce sempre, anche se metti il timer e non ti muovi dai fornelli.",
    "Al ristorante ti portano sempre il piatto sbagliato e tu lo mangi con un sorriso.",
    "Quando tagli la cipolla piangi come davanti all'ultima puntata della tua serie preferita.",
    "Hai pentole con il coperchio sempre di un'altra misura.",
    "Ti brucia la lingua il primo boccone di ogni piatto, e il resto si raffredda subito.",
    "La tua dieta comincia sempre lunedì, e ogni lunedì ti invitano a cena fuori.",
    "Tutto quello che cucini, anche il gelato, ha una nota di cavolfiore.",
    "Le bibite gassate che apri ti schizzano in faccia, e solo in faccia.",
    "Rovesci il bicchiere ogni volta che gesticoli, e tu gesticoli sempre.",
    "Quando ordini «un po' piccante» ti portano un piatto che fa lacrimare tutto il tavolo.",
    "Ordini sempre per ultimo, e proprio il tuo piatto preferito è finito.",
    "Quando usi un tuo Bonus, qualcuno ti chiede un assaggio di tutto ciò che mangi.",
    "I tuoi Bonus funzionano solo mentre mangi qualcosa di croccante, e deve sentirsi.",
    "Sulla spiaggia ti capita sempre l'ombrellone accanto a chi ascolta musica a tutto volume.",
    "In spiaggia la sabbia ti finisce ovunque, soprattutto nel panino.",
    "La camera con «vista mare» ha il mare, ma solo se ti sporgi dal bagno.",
    "Alla pesa la tua valigia ha sempre due chili più del limite.",
    "In montagna arrivi sempre ultimo al rifugio, con il fiatone e la polenta fredda.",
    "Il tuo volo ha due ore di ritardo e il gate cambia ogni dieci minuti.",
    "Appena arrivi in vacanza comincia a piovere. Appena parti, torna il sole.",
    "Chi ti sta accanto sulla spiaggia ti racconta la sua vita, vacanze del 1987 comprese.",
    "I souvenir che compri si rompono tutti nel viaggio di ritorno.",
    "Ti scotti sempre da un lato solo e fai tutta la vacanza di profilo.",
    "Usando un tuo Bonus perdi un infradito, sempre il sinistro.",
    "I tuoi Bonus funzionano solo se sei in costume da bagno, anche a gennaio.",
    "Ogni volta che usi un tuo Bonus metti un euro nel salvadanaio dell'amico più tirchio.",
    "Paghi l'abbonamento in palestra per un anno e ci vai due volte.",
    "Dopo l'allenamento scopri sempre di aver dimenticato l'asciugamano.",
    "A calcetto ti mettono sempre in porta e il pallone ti prende sempre in faccia.",
    "L'allenatore ti chiama col nome sbagliato, ma solo quando sbagli.",
    "In bici ti fora la gomma sempre a metà giro, lontano da tutto.",
    "A padel i tuoi avversari sono due ragazzini di quindici anni che vincono 6-0.",
    "Ti viene il crampo al polpaccio proprio quando vedi il traguardo.",
    "Le scarpe da corsa che compri ti fanno male finché non scade il reso.",
    "In piscina la tua corsia è piena di gente che nuota piano e chiacchiera a metà vasca.",
    "Mentre ti alleni al parco, un bambino in monopattino ti supera ridendo.",
    "Lo smartwatch ti fa i complimenti solo quando ti sei appena alzato dal divano.",
    "Dopo aver usato un tuo Bonus devi fare tre squat davanti a tutti.",
    "I tuoi Bonus funzionano solo mentre corri sul posto.",
    "Puoi usare un Bonus solo se qualcuno ti applaude, almeno un po'.",
    "Trovi parcheggio solo a un chilometro da dove devi andare, in salita.",
    "Il tuo treno è soppresso, il successivo è in ritardo e quello dopo è già pieno.",
    "Arrivi alla fermata sempre un attimo dopo che il bus è partito, e lo vedi svoltare.",
    "Ti arriva una multa per un minuto di sosta, mentre l'auto accanto è lì da giorni.",
    "L'ascensore del palazzo si ferma solo quando ci sei dentro tu con le buste della spesa.",
    "Quando hai fretta, un camion della spazzatura fa retromarcia nella tua via stretta.",
    "Davanti al tuo portone c'è un cantiere che comincia a martellare alle sette del sabato.",
    "Rimani senza batteria sul monopattino elettrico a un chilometro da casa.",
    "Proprio il giorno del controllo, il tuo biglietto del bus è smagnetizzato.",
    "Nei giorni di mercato chiudono proprio la strada che ti serve, e il giro è lunghissimo.",
    "Quando usi un tuo Bonus, un vigile appare dal nulla e ti chiede i documenti.",
    "Prima di usare un tuo Bonus devi aspettare il tuo turno, con il numerino da sportello.",
    "Ogni volta che usi un tuo Bonus ti chiedono lo scontrino, e tu non lo trovi mai.",
    "I tuoi Bonus funzionano solo dalle sei di sera in poi, dopo l'orario d'ufficio.",
    "Ai matrimoni ti mettono sempre al tavolo dei parenti che non conosci.",
    "Al karaoke ti assegnano la canzone più alta e perdi la voce al secondo ritornello.",
    "Alle feste in casa arrivi per primo e sei l'ultimo ad andare via.",
    "A casa d'altri finisci sempre a lavare i piatti, tra una chiacchiera e l'altra.",
    "Alla cena di classe ti nominano organizzatore della prossima cena di classe.",
    "Al compleanno di un amico fai la foto di gruppo, e nella foto non ci sei mai.",
    "Finisci ogni festa con in braccio le giacche di tutti.",
    "Alle feste di famiglia un parente ti racconta sempre la stessa barzelletta, identica.",
    "Ogni volta che usi un tuo Bonus, tutti i presenti ti cantano «Tanti auguri a te».",
    "I tuoi Bonus funzionano solo se indossi un cappellino da festa a punta.",
    "Per ogni Bonus che usi devi ringraziare tre persone per nome, come agli Oscar.",
    "Per usare un tuo Bonus devi dire «per favore» e tutti devono rispondere «prego».",
    "Dopo ogni Bonus che usi devi telefonare a un parente a caso per salutarlo.",
    "Appena usi un tuo Bonus, ti arriva un'email con scritto «urgente» in rosso.",
    "Usare un tuo Bonus ti costa una riunione di due ore, con tanto di slide.",
    "Per usare un Bonus devi chiedere le ferie con due settimane d'anticipo.",
    "Dopo ogni Bonus devi scrivere venti volte «non lo farò più» sulla lavagna.",
    "Quando usi un Bonus, ti interrogano a sorpresa su ciò che non hai studiato.",
    "Ogni Bonus che usi ti costa 5 euro di commissione, non rimborsabili.",
    "Se usi un tuo Bonus, il vicino bussa subito per lamentarsi del rumore.",
    "Ogni Bonus che usi fa scattare l'allarme di un'auto parcheggiata qui sotto.",
    "Se usi un Bonus, in tutta la casa salta la corrente per un minuto.",
    "Un Bonus parte solo col codice ricevuto per sms, che arriva sempre in ritardo.",
    "Senza segnale nessun Bonus funziona, e da te il telefono non prende quasi mai.",
    "Dopo ogni Bonus ti chiedono una recensione: cinque stelle e almeno tre righe.",
    "Per usare un Bonus devi accettare dei termini e condizioni lunghi trenta pagine.",
    "Prima di ogni Bonus il telefono ti chiede «Sei sicuro?» per tre volte.",
    "Ogni Bonus, per partire, ti chiede di dimostrare che non sei un robot.",
    "Hai un capo che ti scrive alle due di notte e pretende risposta subito.",
    "Alle riunioni ti danno sempre il compito di prendere appunti per tutti.",
    "Il collega seduto accanto a te scalda il pesce nel microonde ogni giorno alle 13.",
    "Ti spostano la scrivania ogni lunedì, e nessuno sa mai dirti dove.",
    "In classe sei sempre l'unico a cui chiedono «e tu cosa ne pensi?».",
    "La fotocopiatrice si inceppa solo quando tocca a te.",
    "Ti mettono sempre in un gruppo di lavoro con quello che non risponde ai messaggi.",
    "Ogni progetto che finisci riceve la stessa risposta: «bene, ma rifallo da capo».",
    "A ogni cena aziendale devi sederti accanto al capo e fargli compagnia.",
    "Appena ti arriva lo stipendio, spunta una spesa imprevista che se lo mangia tutto.",
    "Quando hai fretta, il bancomat decide di trattenerti la carta.",
    "La cassa automatica del supermercato ti dice sempre «articolo imprevisto».",
    "Il caffè al bar ti costa ogni giorno un euro in più del giorno prima.",
    "Gli sconti che trovi valgono sempre per un'altra taglia o un altro colore.",
    "Le bollette di casa tua sono sempre più alte di quelle dei vicini.",
    "Alle cene con gli amici si divide alla romana, ma tu hai preso solo l'acqua.",
    "Un parente ti chiede un piccolo prestito ogni mese e non lo restituisce.",
    "Hai appena pagato quando scopri che il negozio accanto costa la metà.",
    "Il tuo portafoglio ha solo banconote da 50 euro e nessuno ha mai il resto.",
    "Tutto ciò che compri si rompe il giorno dopo la scadenza della garanzia.",
    "Il vicino ti lascia ogni giorno un biglietto con una nuova lamentela.",
    "Sul tuo balcone atterrano ogni giorno i panni stesi del piano di sopra.",
    "L'amministratore di condominio ti scrive solo per dirti che devi pagare di più.",
    "Nel palazzo c'è sempre qualcuno che cucina cavoli, e l'odore arriva da te.",
    "La tua lavatrice si ferma sempre con il bucato pieno d'acqua e di sapone.",
    "Resti chiuso fuori di casa almeno una volta a settimana, in pigiama.",
    "La tenda della doccia ti si appiccica addosso appena apri l'acqua calda.",
    "Per rifare la facciata, mettono i ponteggi davanti alla tua finestra per tre anni.",
    "Ti sdrai sul divano e subito qualcuno suona al citofono.",
    "Hai un lampadario che si accende e si spegne da solo, quando vuole lui.",
    "Il telefono si blocca proprio quando devi mostrare il biglietto del treno.",
    "I tuoi amici ti taggano nelle foto peggiori, con una didascalia ancora peggiore.",
    "Un tuo vecchio post social di dieci anni fa torna fuori nel momento peggiore.",
    "La videochiamata si blocca sempre sul tuo viso con la bocca spalancata.",
    "Hai la memoria del telefono piena proprio mentre stai per fare la foto.",
    "Una pubblicità del prodotto che hai appena comprato ti segue ovunque.",
    "Allo sportello ti dicono sempre che manca un documento. Sempre uno diverso.",
    "Il passaporto scade esattamente una settimana prima del viaggio che hai già pagato.",
    "Hai un numero di pratica di quattordici cifre, e lo sbagli sempre all'ultima.",
    "Ti arrivano multe con mesi di ritardo, per un divieto che non ricordi.",
    "Su ogni documento ufficiale il tuo cognome è scritto sbagliato.",
    "Fai un'ora di fila e solo allo sportello scopri che era la fila sbagliata.",
    "Per ogni pratica devi andare in tre uffici, e ognuno ti manda al successivo.",
    "Ti serve una marca da bollo e il tabaccaio le ha finite proprio ieri.",
    "Porti sempre la fototessera sbagliata: troppo grande o troppo piccola.",
    "Rinnovare un documento richiede un documento valido, e il tuo è scaduto ieri.",
    "Chi segue la tua pratica va in pensione proprio il giorno prima che tocchi a te.",
    "Appena finisci la pratica, ti dicono che le regole sono cambiate ieri.",
    "Sul modulo c'è una casella che non capisci, e senza non si va avanti."
  ]
};

/* =========================================================
   GIOCO — "Sì... però"
   A ogni round uno fa da GIUDICE (a turno: tutti lo stesso numero
   di volte) e gli altri si dividono a sorte in due SQUADRE.
   Le squadre giocano a turno le carte: Bonus sul proprio scenario,
   Malus su quello avversario. Poi l'arringa a voce e il verdetto.
   Fasi: CLASSICA (Paradiso, Schianto, Rinforzo, Ghigliottina) o
   PERSONALIZZATA (le compone chi organizza).
   Un mazzo solo per partita: nessuna carta doppia sul tavolo o
   nelle mani, e le carte tornano solo quando il mazzo è finito.
   Punti personali: chi è nella squadra scelta dal giudice prende +1.
   Modi: stesso telefono (si passa di mano) e online (l'host tiene la
   partita; la mano di carte arriva solo ai telefoni della squadra).
   «🙋 Ognuno per sé» (alla Red Flags): niente squadre, ognuno ha la sua
   mano (4 Bonus e 3 Malus nuovi a ogni round), gioca 2 Bonus sul suo
   scenario e poi 1 Malus su quello del vicino; gli scenari si svelano
   uno alla volta e il giudice ne sceglie uno (+1 a chi l'ha presentato).
   «🃏 Carta bianca»: una volta a partita ognuno può scrivere una carta
   sua (Bonus o Malus, al massimo 60 lettere), firmata sul tavolo.
   Carte in data/sipero-carte.js.
   ========================================================= */
(function () {
  "use strict";

  var MAX_MANO = 7, MIN = 3, MAX = 10;
  var MANO_SOLO = { bonus: 4, malus: 3 }, MAX_SCRITTA = 60;   // «Ognuno per sé»: la mano di ognuno; la carta bianca
  // online nessuna attesa resta ferma: se chi deve toccare non tocca, si va avanti da soli (secondi)
  var TEMPO_CARTE = 120, TEMPO_ARRINGA = 180, TEMPO_DOPO_ARRINGA = 20, TEMPO_GIUDIZIO = 90, TEMPO_ESITO = 24, TEMPO_PRESENTA = 90;
  var CHIAVE_SEQ = "sg-sipero-sequenza";   // l'ultima sequenza personalizzata, sul telefono di chi organizza
  var PARTITE_SALVATE = Object.create(null);
  var CLASSICA = [
    { tipo: "bonus", n: 2, bers: "se" },
    { tipo: "malus", n: 2, bers: "avv" },
    { tipo: "bonus", n: 1, bers: "se" },
    { tipo: "malus", n: 2, bers: "avv" }
  ];
  var MEDAGLIE = ["🥇", "🥈", "🥉"];

  // ---------- piccoli aiuti ----------
  function nuovaSessione() { return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10); }
  function norm(s) { return String(s || "").trim().toLowerCase(); }
  function altra(k) { return k === 0 ? 1 : 0; }
  function medaglia(pos) { return MEDAGLIE[pos - 1] || pos + "°"; }
  function emoSq(k) { return k === 0 ? "🟥" : "🟦"; }
  function nomeSq(k) { return "Squadra " + (k + 1); }
  function svuota(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function testoSe(n, txt) { if (n.textContent !== txt) n.textContent = txt; }
  function quante(n, tipo) { return n + (n === 1 ? " carta " : " carte ") + (tipo === "bonus" ? "Bonus" : "Malus"); }
  function descriviFase(f) { return quante(f.n, f.tipo) + " " + (f.bers === "se" ? "su di sé" : "agli avversari"); }
  function statPersona(st, id) {
    if (!st.statGiocatori) st.statGiocatori = Object.create(null);
    if (!st.statGiocatori[id]) st.statGiocatori[id] = { roundGiocati: 0, roundGiudice: 0, roundVinti: 0, carteBonus: 0, carteMalus: 0 };
    return st.statGiocatori[id];
  }
  function vibra(p) { try { if (navigator.vibrate) navigator.vibrate(p || 20); } catch (e) {} }
  // la carta bianca: spazi puliti, al massimo 60 lettere
  function pulisciScritta(s) { return String(s == null ? "" : s).replace(/\s+/g, " ").trim().slice(0, MAX_SCRITTA); }
  // le regole nuove (base: a squadre, carta bianca sì)
  function siDa(imp) { return imp && imp.si === "solo" ? "solo" : "squadre"; }
  function biancaDa(imp) { var b = imp ? imp.bianca : undefined; return !(b === 0 || b === false || b === "0" || b === "no"); }
  // la riga "📜 Si gioca così" (anche per gli amici in saletta)
  // 👥 online a squadre (23 nov 2026, il proprietario): quanti round (3, 5 o 7) e prima di ognuno la schermata dei ruoli
  function roundDa(imp) { return [3, 5, 7].indexOf(+(imp && imp.round)) >= 0 ? +imp.round : 5; }
  function riassuntoImp(imp) {
    imp = imp || {};
    var solo = siDa(imp) === "solo", giri = [1, 2, 3].indexOf(+imp.giri) >= 0 ? +imp.giri : 1, arr = +imp.arringa || 0;
    var s = seqDa(imp);
    return [solo ? "🙋 Ognuno per sé" : "👥 A squadre", solo ? null : (imp.modalita === "custom" && !s.vuota ? "🎛️ Fasi personalizzate" : "📜 Fasi classiche"),
      !solo && imp.modo === "online" ? "🔁 " + roundDa(imp) + " round, ruoli scelti da voi" : "🔁 " + giri + (giri === 1 ? " giro" : " giri"),
      "🎤 arringa " + (arr ? arr + " secondi" : "libera"), biancaDa(imp) ? "🃏 carta bianca" : null].filter(Boolean).join(" · ");
  }
  // classifica con il posto: a pari punti lo stesso posto
  function conPosizioni(lista) {
    var ord = lista.slice().sort(function (a, b) { return b.punti - a.punti; });
    ord.forEach(function (r) { r.pos = 1 + ord.filter(function (q) { return q.punti > r.punti; }).length; });
    return ord;
  }

  // ---------- le fasi ----------
  function seqPulita(s) {
    if (!Array.isArray(s)) return [];
    return s.filter(function (f) { return f && (f.tipo === "bonus" || f.tipo === "malus") && (f.bers === "se" || f.bers === "avv"); })
      .slice(0, 12).map(function (f) { return { tipo: f.tipo, n: Math.max(1, Math.min(3, +f.n || 1)), bers: f.bers }; });
  }
  // la sequenza scelta nelle regole: { seq, vuota } (vuota = Personalizzata senza fasi)
  function seqDa(imp) {
    imp = imp || {};
    if (imp.modalita !== "custom") return { seq: CLASSICA, vuota: false };
    var s = seqPulita(imp.sequenza);
    return s.length ? { seq: s, vuota: false } : { seq: CLASSICA, vuota: true };
  }
  function leggiSeqSalvata() { try { var s = seqPulita(JSON.parse(localStorage.getItem(CHIAVE_SEQ) || "null")); return s.length ? s : null; } catch (e) { return null; } }
  function salvaSeq(s) { try { localStorage.setItem(CHIAVE_SEQ, JSON.stringify(s)); } catch (e) {} }
  // il nome di ogni fase (anche nella Personalizzata)
  function nomeFase(seq, i) {
    var f = seq[i], j;
    if (f.tipo === "bonus" && f.bers === "se") {
      for (j = 0; j < i; j++) if (seq[j].tipo === "bonus" && seq[j].bers === "se") return { ic: "🩹", nome: "Rinforzo" };
      return { ic: "😇", nome: "Paradiso" };
    }
    if (f.tipo === "malus" && f.bers === "avv") {
      var prima = false, dopo = false;
      for (j = 0; j < seq.length; j++) if (j !== i && seq[j].tipo === "malus" && seq[j].bers === "avv") { if (j < i) prima = true; else dopo = true; }
      return (prima && !dopo) ? { ic: "🪓", nome: "Ghigliottina" } : { ic: "💥", nome: "Schianto" };
    }
    if (f.tipo === "bonus") return { ic: "🎁", nome: "Regalo" };
    return { ic: "🤕", nome: "Autogol" };
  }
  function riassuntoSeq(seq) { return seq.map(function (f, i) { var nf = nomeFase(seq, i); return nf.ic + " " + nf.nome; }).join(" → "); }
  // i turni: ogni fase la gioca prima una squadra e poi l'altra (chi apre cambia a ogni round)
  function creaPassi(seq, primo) {
    var p = [];
    seq.forEach(function (f, i) { p.push({ sq: primo, f: f, fi: i }); p.push({ sq: altra(primo), f: f, fi: i }); });
    return p;
  }
  function istruzione(f, sq, voi) {
    var dove = f.bers === "se" ? (voi ? " per il vostro scenario" : " sul proprio scenario") : " per la " + nomeSq(f.bers === "se" ? sq : altra(sq));
    return (voi ? "scegliete " : "") + quante(f.n, f.tipo) + dove;
  }

  // ---------- il mazzo (uno per partita) ----------
  // 🧠 la memoria delle carte uscite (sul telefono che tiene il mazzo): le ultime MEM_MAX carte arrivate in mano, per tipo.
  // Un mazzo nuovo mette in cima le carte mai viste (o viste da più tempo): le stesse non tornano subito.
  var MEM_CHIAVE = "sg-sipero-uscite", MEM_MAX = 320, memoria = null, memTo = null;
  function impronta(s) { var h = 5381; s = String(s); for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function leggiMemoria() {
    if (memoria) return memoria;
    memoria = { bonus: [], malus: [] };
    try {
      var m = JSON.parse(localStorage.getItem(MEM_CHIAVE) || "null");
      if (m) ["bonus", "malus"].forEach(function (k) { if (Array.isArray(m[k])) memoria[k] = m[k].filter(function (x) { return typeof x === "string"; }).slice(-MEM_MAX); });
    } catch (e) {}
    return memoria;
  }
  function segnaUscita(tipo, testo) {
    var m = leggiMemoria()[tipo]; if (!m) return;
    var h = impronta(testo), i = m.indexOf(h);
    if (i >= 0) m.splice(i, 1);
    m.push(h);
    if (m.length > MEM_MAX) m.splice(0, m.length - MEM_MAX);
    if (!memTo) memTo = setTimeout(function () { memTo = null; try { localStorage.setItem(MEM_CHIAVE, JSON.stringify(memoria)); } catch (e) {} }, 400);
  }
  // la pila (si pesca dalla fine): sotto le carte viste di recente, sopra quelle viste da più tempo, in cima le mai viste
  function pilaFresca(t, carte, tipo) {
    var m = leggiMemoria()[tipo] || [], quando = Object.create(null);
    m.forEach(function (h, i) { quando[h] = i + 1; });
    var mai = [], viste = [];
    carte.forEach(function (c) { (quando[impronta(c)] ? viste : mai).push(c); });
    viste.sort(function (a, b) { return quando[impronta(b)] - quando[impronta(a)]; });   // la più recente in fondo alla pila (si pesca per ultima)
    return viste.concat(t.mischia(mai));
  }
  function nuovoMazzo(t, carte, tipo) { return { carte: carte.slice(), pila: tipo ? pilaFresca(t, carte, tipo) : t.mischia(carte), tipo: tipo || null }; }
  function inUsoDa(mani, scen) {
    var u = Object.create(null);
    (mani || []).forEach(function (m) { m.bonus.concat(m.malus).forEach(function (c) { u[c] = 1; }); });
    (scen || []).forEach(function (s) { s.voci.forEach(function (v) { u[v.testo] = 1; }); });
    return u;
  }
  // pesca dal mazzo; finito il mazzo si rimischiano le carte che non sono in gioco
  function pesca(t, mz, inUso) {
    if (!mz.pila.length) { var libere = mz.carte.filter(function (c) { return !inUso[c]; }); mz.pila = mz.tipo ? pilaFresca(t, libere, mz.tipo) : t.mischia(libere); }
    var c = mz.pila.length ? mz.pila.pop() : null;
    if (c != null && mz.tipo) segnaUscita(mz.tipo, c);
    return c;
  }
  function riempi(t, mano, mz, inUso) {
    while (mano.length < MAX_MANO) { var c = pesca(t, mz, inUso); if (c == null) break; mano.push(c); inUso[c] = 1; }
    return mano;
  }
  function nuoveMani(t, mazzi, scen) {
    var mani = [{ bonus: [], malus: [] }, { bonus: [], malus: [] }];
    var u = inUsoDa(null, scen);
    mani.forEach(function (m) { riempi(t, m.bonus, mazzi.bonus, u); riempi(t, m.malus, mazzi.malus, u); });
    return mani;
  }
  function scenVuoti() { return [{ voci: [] }, { voci: [] }]; }
  // una voce sul tavolo: con la firma se è una carta bianca (la firma si usa una volta sola)
  function voce(tipo, testo, firme, da) {
    var v = { tipo: tipo, testo: testo };
    if (firme && firme[testo]) { v.di = firme[testo]; delete firme[testo]; }
    if (da) v.da = da;
    return v;
  }
  // le firme delle carte bianche che sono in una mano (da mandare insieme alla mano)
  function firmeDi(mano, firme) {
    var f = {};
    if (mano && firme) ["bonus", "malus"].forEach(function (k) { (mano[k] || []).forEach(function (c) { if (firme[c]) f[c] = firme[c]; }); });
    return f;
  }

  // ---------- «🙋 Ognuno per sé»: il round (uguale sullo stesso telefono e online) ----------
  // R: { giudice, pres:[id] (chi presenta, in ordine), bers:{id: id del vicino da rovinare}, mani:{id:{bonus,malus}},
  //      scen:{id:{bonus:[voci], malus: voce|null}}, mio:{id: il Malus che ha messo}, fatti:{id:1}, passo:"bonus"|"malus",
  //      mostra (lo scenario che si svela), vincitore }
  function roundSolo(t, mazzi, giudice, pres) {
    var R = { giudice: giudice, pres: pres.slice(), bers: {}, mani: {}, scen: {}, mio: {}, fatti: {}, passo: "bonus", mostra: 0, vincitore: null };
    var u = Object.create(null);
    pres.forEach(function (id, i) {
      R.bers[id] = pres[(i + 1) % pres.length];
      R.scen[id] = { bonus: [], malus: null };
      var m = { bonus: [], malus: [] };
      ["bonus", "malus"].forEach(function (k) {
        while (m[k].length < MANO_SOLO[k]) { var c = pesca(t, mazzi[k], u); if (c == null) break; m[k].push(c); u[c] = 1; }
      });
      R.mani[id] = m;
    });
    return R;
  }
  function quanteSolo(R, id) { var m = R.mani[id]; return R.passo === "bonus" ? Math.min(2, m ? m.bonus.length : 0) : Math.min(1, m ? m.malus.length : 0); }
  // chi presenta gioca le sue carte (false = mossa non valida). nomeDi(id) = il nome da scrivere sotto il Malus
  function giocaSolo(R, id, carte, firme, nomeDi) {
    if (R.pres.indexOf(id) < 0 || R.fatti[id] || !Array.isArray(carte)) return false;
    var tipo = R.passo, mano = R.mani[id][tipo], n = quanteSolo(R, id);
    if (carte.length !== n) return false;
    for (var i = 0; i < carte.length; i++) if (mano.indexOf(carte[i]) < 0 || carte.indexOf(carte[i]) !== i) return false;
    if (tipo === "bonus") carte.forEach(function (c) { R.scen[id].bonus.push(voce("bonus", c, firme)); });
    else if (carte.length) { var v = voce("malus", carte[0], firme, nomeDi(id)); R.scen[R.bers[id]].malus = v; R.mio[id] = v; }
    R.mani[id][tipo] = mano.filter(function (c) { return carte.indexOf(c) < 0; });
    R.fatti[id] = 1;
    return true;
  }
  function casoSolo(t, R, id) { return t.mischia(R.mani[id][R.passo]).slice(0, quanteSolo(R, id)); }
  function vociSolo(R, id, conMalus) { var s = R.scen[id]; if (!s) return []; return s.bonus.concat(conMalus && s.malus ? [s.malus] : []); }

  // squadre a sorte, bilanciate, cercando di non rimettere sempre insieme le stesse coppie
  function chiaveCoppia(a, b) { return a < b ? a + "|" + b : b + "|" + a; }
  function formaSquadre(t, persone, coppie) {
    var meglio = null, costoMin = Infinity;
    function costo(sq) { var c = 0; for (var i = 0; i < sq.length; i++) for (var j = i + 1; j < sq.length; j++) c += coppie[chiaveCoppia(sq[i], sq[j])] || 0; return c; }
    for (var k = 0; k < 40; k++) {
      var m = t.mischia(persone), h = Math.ceil(m.length / 2), a = m.slice(0, h), b = m.slice(h), c = costo(a) + costo(b);
      if (c < costoMin) { costoMin = c; meglio = [a, b]; }
    }
    meglio.forEach(function (sq) { for (var i = 0; i < sq.length; i++) for (var j = i + 1; j < sq.length; j++) { var kk = chiaveCoppia(sq[i], sq[j]); coppie[kk] = (coppie[kk] || 0) + 1; } });
    return t.mischia(meglio);   // anche chi è "Squadra 1" cambia
  }

  // ---------- trofei ----------
  // d: { online, mioId, mioRuolo, manuale, sessione, classifica:[{id?, nome, punti, pos}], statFine }
  function salvaTrofeiSipero(t, d) {
    try {
      if (!d || !d.sessione || t.guarda || (t.linkParams && (t.linkParams.guarda || t.linkParams.prova)) ||
          (t.impostazioni && t.impostazioni.prova) ||
          !(window.SGNube && SGNube.disponibile && SGNube.disponibile() && SGNube.profilo && SGNube.profilo() && SGNube.salvaProgressi)) return;
      var profilo = SGNube.profilo(), nomeP = norm(profilo.nome), cl = d.classifica || [];
      if (!nomeP) return;
      var me = d.online ? cl.filter(function (r) { return r.id === d.mioId; })[0] : cl.filter(function (r) { return norm(r.nome) === nomeP; })[0];
      if (!me || norm(me.nome) !== nomeP) return;
      var profiloId = norm(profilo.uid || profilo.nome);
      var chiave = "sipero|" + d.sessione + "|" + profiloId;
      if (PARTITE_SALVATE[chiave]) return;
      var chiaveLocale = "sg-sipero-ultima-partita-" + profiloId;
      try { if (window.localStorage && localStorage.getItem(chiaveLocale) === String(d.sessione)) { PARTITE_SALVATE[chiave] = 1; return; } } catch (e) {}
      var miei = (d.statFine || {})[d.online ? d.mioId : me.nome] || {};
      var primi = cl.filter(function (r) { return r.pos === 1; }).length;
      var vinta = me.pos === 1 && (d.manuale || primi === 1);   // un round con le squadre scelte: vince tutta la squadra
      var pareggio = !vinta && me.pos === 1 && primi > 1;
      var incr = [["partite", 1], ["roundGiocati", +miei.roundGiocati || 0], ["roundGiudice", +miei.roundGiudice || 0],
        ["roundVinti", +miei.roundVinti || 0], ["carteBonus", +miei.carteBonus || 0], ["carteMalus", +miei.carteMalus || 0]];
      if (d.online) incr.push(["partiteOnline", 1]);
      if (vinta) { incr.push(["vittorie", 1]); if (d.online) incr.push(["vittorieOnline", 1]); }
      if (pareggio) incr.push(["pareggi", 1]);
      var s = SGNube.statGioco ? (SGNube.statGioco("sipero") || {}) : {};
      if (s.ultimaPartitaTrofei === d.sessione) return;
      var giudice = d.manuale && d.mioRuolo === "g";   // da giudice non si può vincere: la serie resta com'era
      var serie = vinta ? (+s.serieVittorieOra || 0) + 1 : giudice ? (+s.serieVittorieOra || 0) : 0;
      PARTITE_SALVATE[chiave] = 1;
      try { if (window.localStorage) localStorage.setItem(chiaveLocale, String(d.sessione)); } catch (e) {}
      SGNube.salvaProgressi(null, "sipero", incr.filter(function (x) { return x[1] > 0; }),
        [["serieVittorieMax", serie]], [["serieVittorieOra", serie], ["ultimaPartitaTrofei", d.sessione]]);
    } catch (e) {}
  }

  // ---------- suoni ----------
  function suono(tipo) {
    var c = null;
    try { c = window.SG && SG.audioCtx && SG.audioCtx(); } catch (e) {}
    if (!c) return;
    try {
      var ora = c.currentTime;
      var nota = function (f, t0, d, onda, vol) {
        var o = c.createOscillator(), g = c.createGain();
        o.type = onda || "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, ora + t0);
        g.gain.exponentialRampToValueAtTime(vol || 0.12, ora + t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ora + t0 + d);
        o.connect(g); g.connect(c.destination); o.start(ora + t0); o.stop(ora + t0 + d + 0.05);
      };
      if (tipo === "bonus") { nota(660, 0, 0.14, "triangle"); nota(990, 0.08, 0.2, "triangle"); }
      else if (tipo === "malus") { nota(170, 0, 0.22, "square", 0.07); nota(110, 0.06, 0.3, "sawtooth", 0.06); }
      else if (tipo === "tempo") { nota(880, 0, 0.16, "square", 0.08); nota(880, 0.24, 0.16, "square", 0.08); nota(620, 0.48, 0.4, "square", 0.08); }
      else if (tipo === "martello") { nota(150, 0, 0.12, "square", 0.16); nota(90, 0.02, 0.2, "triangle", 0.2); }
      else if (tipo === "tic") nota(1250, 0, 0.035, "square", 0.035);
      else if (tipo === "segno") nota(880, 0, 0.06, "triangle", 0.05);
      else if (tipo === "vittoria") { [523, 659, 784, 1047].forEach(function (f, i) { nota(f, i * 0.1, 0.3, "triangle", 0.1); }); }
    } catch (e) {}
  }

  // ---------- lo stile (una volta sola) ----------
  var cssFatto = false;
  function stile() {
    if (cssFatto) return; cssFatto = true;
    var st = document.createElement("style");
    st.textContent = [
      ".schermata.sp-piena{padding:0!important;min-height:0;height:var(--alt,100dvh);overflow:hidden}",
      ".schermata.sp-piena>.testa,.schermata.sp-piena>.piede{display:none}",
      ".schermata.sp-piena>.contenuto{height:100%;margin:0;padding:0}",
      // chi guarda col link: in basso la targhetta del core "👀 Guardi · 😂 · ✕" (la scena le lascia il posto)
      ".sp-scena.sp-targa{padding-bottom:calc(60px + env(safe-area-inset-bottom))}",
      ".schermata.sp-fine-targa{padding-bottom:calc(60px + env(safe-area-inset-bottom))}",
      ".sp-scena{position:relative;height:var(--alt,100dvh);box-sizing:border-box;display:flex;flex-direction:column;gap:7px;padding:calc(8px + env(safe-area-inset-top)) 10px calc(10px + env(safe-area-inset-bottom));overflow:hidden;user-select:none;-webkit-user-select:none}",
      ".sp-barra{flex:0 0 auto;display:flex;align-items:center;gap:8px;min-height:38px}",
      ".sp-esci{flex:0 0 auto;width:36px;height:36px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;font:inherit;font-size:1.3rem;font-weight:900;cursor:pointer}",
      ".sp-fase{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;line-height:1.2}",
      ".sp-fase b{font-size:1.02rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".sp-fase small{font-size:.74rem;color:var(--testo-tenue);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".sp-giudice{flex:0 1 auto;max-width:44%;padding:5px 10px;border-radius:999px;background:rgba(255,202,58,.16);color:#ffe08a;font-weight:800;font-size:.78rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".sp-tavolo{flex:0 1 auto;min-height:74px;max-height:36%;display:grid;grid-template-columns:1fr 1fr;gap:6px}",
      ".sp-scena.largo .sp-tavolo{flex:1 1 auto;max-height:none}",
      ".sp-col{min-height:0;min-width:0;display:flex;flex-direction:column;border-radius:12px;padding:6px;background:rgba(255,255,255,.06);border:2px solid transparent;cursor:pointer;transition:border-color .25s,background-color .25s,box-shadow .25s}",
      ".sp-col.c0{--sq:#ff8787}.sp-col.c1{--sq:#74c0fc}",
      ".sp-col.mia{background:rgba(255,255,255,.11)}",
      ".sp-col.turno{border-color:var(--sq)}",
      ".sp-col.vince{border-color:#ffca3a;box-shadow:0 0 18px rgba(255,202,58,.45)}",
      ".sp-col-testa{flex:0 0 auto;font-size:.74rem;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0 2px 4px;color:var(--sq)}",
      ".sp-lista{flex:1 1 auto;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:3px;font-size:.7rem}",
      ".sp-mini{flex:0 0 auto;line-height:1.25;padding:4px 6px;border-radius:7px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;color:#fff}",
      ".sp-mini.b{background:rgba(55,212,126,.24)}.sp-mini.m{background:rgba(255,93,108,.28)}",
      ".sp-scena.largo .sp-mini{display:block;-webkit-line-clamp:unset;padding:3px 5px}",
      ".sp-col{position:relative}.sp-col.altre::after{content:'altre ↓';position:absolute;left:6px;right:6px;bottom:4px;padding:10px 0 2px;text-align:center;font-size:.72rem;font-weight:900;color:var(--o-oro-testo,#ffca3a);background:linear-gradient(rgba(21,26,46,0),var(--o-carta-piena,#151a2e) 70%);border-radius:0 0 10px 10px;pointer-events:none}",
      ".sp-mini.nuova{animation:spPop .5s cubic-bezier(.2,1.4,.4,1) both}",
      "@keyframes spPop{from{opacity:0;transform:scale(.5) translateY(-8px)}to{opacity:1;transform:none}}",
      ".sp-vuoto{margin:auto 0;text-align:center;font-size:.72rem;color:var(--testo-tenue)}",
      ".sp-turno{flex:0 0 auto;font-size:.86rem;font-weight:700;text-align:center;line-height:1.3}",
      ".sp-turno:empty{display:none}",
      ".sp-azione{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:6px}",
      ".sp-scena.largo .sp-azione{flex:0 0 auto}",
      ".sp-giud-nota{text-align:center;font-weight:800;font-size:.86rem;color:var(--o-tenue)}",
      ".sp-azione:empty{display:none}",
      ".sp-msg{margin:auto 0;text-align:center;color:var(--testo-tenue);font-size:.92rem;line-height:1.4;padding:2px 8px}",
      ".sp-msg .sp-emo{display:block;font-size:2rem;margin-bottom:2px}",
      ".sp-scena.largo .sp-msg{margin:0}.sp-scena.largo .sp-msg .sp-emo{display:inline;font-size:1rem;margin-right:4px}",
      ".sp-mano{flex:1 1 auto;min-height:0;display:grid;grid-template-columns:1fr 1fr;gap:6px}",
      ".sp-carta{position:relative;min-height:0;min-width:0;overflow:hidden;display:flex;align-items:center;padding:6px 8px;border-radius:12px;color:#fff;line-height:1.22;cursor:pointer;border:2px solid rgba(255,255,255,.12);box-shadow:0 2px 6px rgba(0,0,0,.25);transition:transform .15s,box-shadow .15s,border-color .15s;touch-action:manipulation}",
      ".sp-carta.b{background:linear-gradient(160deg,#25915a,#156040)}.sp-carta.m{background:linear-gradient(160deg,#b8364a,#7a1f30)}",
      ".sp-carta.su{transform:translateY(-3px) scale(1.03);border-color:#ffca3a;box-shadow:0 8px 18px rgba(0,0,0,.45);z-index:1}",
      ".sp-n{position:absolute;top:3px;right:4px;min-width:18px;height:18px;border-radius:9px;background:#ffca3a;color:#241f00;font-size:.7rem;font-weight:900;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.4);transition:opacity .15s,transform .15s}",
      ".sp-carta.su .sp-n{opacity:1;transform:none}",
      ".sp-altre{min-height:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:6px;border-radius:12px;border:2px dashed rgba(255,255,255,.28);color:var(--testo-tenue);font-weight:800;font-size:.78rem;cursor:pointer;line-height:1.25}",
      ".sp-piede{flex:0 0 auto;display:flex;gap:8px;align-items:center}",
      ".sp-piede:empty{display:none}",
      ".sp-piede .btn{flex:1 1 0;margin:0;min-width:0;padding-left:8px;padding-right:8px}",
      ".sp-nota{flex:1;text-align:center;font-size:.85rem;color:var(--testo-tenue)}",
      ".sp-azione .sl-faccine{flex:0 0 auto}",
      ".btn.sp-vota.c0{background:#e03e4e;color:#fff}.btn.sp-vota.c1{background:#2f80d0;color:#fff}",
      ".sp-timer{display:flex;align-items:center;gap:8px}",
      ".sp-timer-bar{flex:1;height:10px;border-radius:5px;background:rgba(255,255,255,.14);overflow:hidden}",
      ".sp-timer-fill{height:100%;background:linear-gradient(90deg,#ffca3a,#ff922b);transform-origin:left center;transition:transform .25s linear}",
      ".sp-timer-n{font-weight:900;font-size:.9rem;min-width:3.4em;text-align:right}",
      ".sp-timer.finito .sp-timer-n{color:#ff8787;animation:spBatti .6s ease 3}",
      "@keyframes spBatti{50%{transform:scale(1.25)}}",
      ".sp-classi{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}",
      ".sp-classi span{padding:4px 9px;border-radius:999px;background:rgba(255,255,255,.1);font-weight:800;font-size:.8rem;white-space:nowrap}",
      ".sp-classi span.primo{background:rgba(255,202,58,.28)}.sp-classi span.tu{box-shadow:inset 0 0 0 2px rgba(255,255,255,.55)}",
      ".sp-verdetto{position:absolute;inset:0;z-index:20;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(10,10,30,.55);animation:spVIn .3s ease both;overflow:hidden;transition:opacity .5s}",
      ".sp-verdetto.via{opacity:0}",
      "@keyframes spVIn{from{opacity:0}to{opacity:1}}",
      ".sp-martello{font-size:4.5rem;transform-origin:80% 80%;animation:spMartello .7s ease both}",
      "@keyframes spMartello{0%{transform:rotate(-50deg) scale(.6);opacity:0}45%{transform:rotate(15deg) scale(1.1);opacity:1}60%{transform:rotate(-6deg)}100%{transform:none}}",
      ".sp-vtesto{margin:8px 16px 0;padding:10px 18px;border-radius:16px;font-size:1.45rem;font-weight:900;text-align:center;background:var(--sqc);color:#fff;box-shadow:0 10px 30px rgba(0,0,0,.4);animation:spPop .5s .25s cubic-bezier(.2,1.4,.4,1) both}",
      ".sp-verdetto.c0{--sqc:#e03e4e}.sp-verdetto.c1{--sqc:#2f80d0}",
      ".sp-cor{position:absolute;top:-16px;width:8px;height:14px;border-radius:2px;animation:spCade 2.4s linear both}",
      "@keyframes spCade{to{transform:translateY(110vh) rotate(720deg)}}",
      ".sp-lente{position:fixed;inset:0;z-index:80;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(8,10,28,.78)}",
      ".sp-lente-box{width:100%;max-width:480px;max-height:86%;overflow-y:auto;background:var(--sfondo,#223066);border-radius:18px;padding:14px;box-shadow:0 14px 40px rgba(0,0,0,.5);animation:spPop .25s ease both}",
      ".sp-lente-tit{font-weight:900;font-size:1.05rem;margin-bottom:10px}",
      ".sp-lente-r{font-size:1.08rem;line-height:1.4;padding:10px 12px;border-radius:12px;margin-bottom:8px}",
      ".sp-lente-r.b{background:rgba(55,212,126,.24)}.sp-lente-r.m{background:rgba(255,93,108,.28)}",
      ".sp-lente-box .btn{width:100%;margin-top:4px}",
      // schermata del round (stesso telefono)
      ".sp-round{display:flex;flex-direction:column;gap:10px}",
      ".sp-giudbox{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:14px;background:rgba(255,202,58,.14);font-weight:800}",
      ".sp-sqbox{padding:8px 10px;border-radius:14px;background:rgba(255,255,255,.06);border-left:4px solid var(--sq)}",
      ".sp-sqbox.c0{--sq:#ff8787}.sp-sqbox.c1{--sq:#74c0fc}",
      ".sp-sqbox b{display:block;color:var(--sq);font-size:.85rem;margin-bottom:5px}",
      ".sp-chi{display:flex;flex-wrap:wrap;gap:6px}",
      ".sp-chi span.sp-pers{display:inline-flex;align-items:center;gap:5px;padding:2px 9px 2px 2px;border-radius:999px;background:rgba(255,255,255,.09);font-weight:700;font-size:.9rem}",
      ".sp-av{width:30px;height:30px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.16);display:inline-block;flex:0 0 auto}",
      ".sp-av svg{width:100%;height:auto;display:block}",
      ".sp-giudbox .sp-av{width:42px;height:42px}",
      ".sp-contro{text-align:center;font-weight:900;color:var(--testo-tenue);font-size:.85rem}",
      ".sp-seqinfo{font-size:.82rem;color:var(--testo-tenue);text-align:center;line-height:1.45}",
      ".sp-avviso{font-size:.85rem;text-align:center;padding:6px 10px;border-radius:10px;background:rgba(255,202,58,.15)}",
      ".sp-centro{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;min-height:60vh}",
      ".sp-centro .sp-grande{font-size:4.2rem}.sp-centro b{font-size:1.35rem}.sp-centro p{margin:0;color:var(--testo-tenue);max-width:22em}",
      // saletta
      ".sp-lobby{display:flex;flex-direction:column;gap:6px}",
      ".sp-info{font-size:.84rem;line-height:1.45;padding:8px 10px;border-radius:12px;background:rgba(255,255,255,.06)}",
      ".sp-riga{padding:7px 9px;border-radius:12px;background:rgba(255,255,255,.06)}",
      ".sp-riga-t{display:flex;justify-content:space-between;gap:8px;font-weight:700}",
      ".sp-ruoli{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:6px}",
      ".sp-ruoli button{min-height:38px;border-radius:10px;border:2px solid transparent;background:rgba(255,255,255,.1);color:#fff;font:inherit;font-size:1.05rem;cursor:pointer}",
      ".sp-ruoli button.attiva{border-color:#ffca3a;background:rgba(255,202,58,.2)}",
      // la testa delle colonne (con l'avatar di chi presenta, in «Ognuno per sé»)
      ".sp-col-testa{display:flex;align-items:center;gap:6px}",
      ".sp-col-tx{min-width:0;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;line-height:1.2;overflow-wrap:anywhere}",
      ".sp-col-testa .sp-av{width:26px;height:26px}.sp-av[hidden]{display:none}",
      // 🃏 la carta bianca: bordo tratteggiato d'oro e la firma
      ".sp-mini.scritta,.sp-lente-r.scritta{box-shadow:inset 0 0 0 2px #ffca3a}",
      ".sp-firma,.sp-da{font-size:.86em;font-weight:800;white-space:nowrap}.sp-firma{color:#ffe08a}.sp-da{opacity:.85}",
      ".sp-carta.scritta{border:2px dashed #ffca3a}",
      ".sp-fc{position:absolute;left:7px;bottom:2px;font-size:.62rem;font-weight:800;color:#ffe08a;white-space:nowrap}",
      ".sp-carta.scritta .sp-tx{margin-bottom:8px}",
      ".btn.sp-scrivi-b{flex:0 0 auto!important;width:auto;background:rgba(255,202,58,.16);color:#ffe08a;border:2px dashed rgba(255,202,58,.6)}",
      ".sp-scrivi textarea{width:100%;box-sizing:border-box;min-height:86px;border-radius:12px;border:2px solid rgba(255,255,255,.22);background:rgba(0,0,0,.25);color:#fff;font:inherit;font-size:1rem;line-height:1.35;padding:10px;resize:none}",
      ".sp-scrivi .sp-conta{text-align:right;font-size:.78rem;color:var(--testo-tenue);margin:3px 2px 8px}",
      ".sp-scrivi .sp-chis{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}",
      ".sp-scrivi .sp-chis button{border:2px solid transparent;border-radius:999px;background:rgba(255,255,255,.1);color:#fff;font:inherit;font-weight:800;font-size:.85rem;padding:5px 12px;cursor:pointer}",
      ".sp-scrivi .sp-chis button.attiva{border-color:#ffca3a;background:rgba(255,202,58,.2)}",
      ".sp-scrivi .sp-due{display:flex;gap:8px}.sp-scrivi .sp-due .btn{flex:1;margin:0}",
      ".sp-scrivi .sp-nota-s{font-size:.82rem;color:var(--testo-tenue);margin:0 0 8px;line-height:1.35}",
      // ⌨️ con la tastiera aperta (12 nov 2026): il foglio sta tutto sopra la tastiera, coi tasti a vista
      "html.tastiera .sp-lente{padding:8px;align-items:flex-start}html.tastiera .sp-lente-box{max-height:100%;padding:10px 12px;animation:none}html.tastiera .sp-scrivi .sp-nota-s{display:none}html.tastiera .sp-scrivi .sp-lente-tit{margin-bottom:6px}html.tastiera .sp-scrivi textarea{min-height:64px}html.tastiera .sp-scrivi .sp-conta{margin:2px 2px 6px}",
      // ⏩ Avanti a maggioranza
      ".btn.sp-pronto{display:flex;align-items:center;justify-content:center;gap:8px}.sp-pronto .quanti{font-size:.82rem;opacity:.8;font-weight:700}",
      ".sp-piede .sp-nota.sp-conto{flex:0 1 auto;font-size:.78rem}",
      // 🙋 Ognuno per sé: il palco (lo scenario di uno), chi ha giocato, le schede da sfogliare
      ".sp-palco{flex:0 1 auto;min-height:0;display:flex;flex-direction:column;gap:6px}",
      ".sp-palco>[hidden]{display:none!important}",
      ".sp-scena.largo .sp-palco{flex:1 1 auto}",
      ".sp-palco .sp-col{flex:1 1 auto;min-height:70px;max-height:none}",
      ".sp-scena:not(.largo) .sp-palco .sp-col{max-height:34vh}",
      ".sp-col.cs{--sq:#ffca3a}",
      ".sp-stato{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}",
      ".sp-stato>span{display:inline-flex;align-items:center;gap:4px;padding:2px 8px 2px 2px;border-radius:999px;background:rgba(255,255,255,.08);font-size:.76rem;font-weight:700;max-width:46%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",
      ".sp-stato>span.ok{background:rgba(55,212,126,.24)}.sp-stato>span.via{opacity:.55}.sp-stato>span{padding:3px 9px}",
      ".sp-stato .sp-av{width:22px;height:22px}",
      ".sp-tab{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}",
      ".sp-tab button{max-width:48%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border:2px solid transparent;border-radius:999px;background:rgba(255,255,255,.1);color:#fff;font:inherit;font-weight:800;font-size:.8rem;padding:4px 10px;cursor:pointer}",
      ".sp-tab button.attiva{border-color:#ffca3a;background:rgba(255,202,58,.22)}",
      ".sp-tab button.vince{background:rgba(255,202,58,.45)}",
      ".sp-verdetto.cs{--sqc:#c98a00}",
      ".sp-giocate{display:flex;flex-direction:column;gap:4px;margin:0 auto;max-width:440px;width:100%}",
      ".sp-rovina{display:grid;grid-template-columns:1fr auto 1fr;gap:4px 8px;align-items:center;font-size:.85rem;font-weight:700}",
      ".sp-rovina span:nth-child(3n+2){text-align:center}",
      // ---------------------------------------------------------------------------------------------------------
      // 🤍 BIANCO E ORO (tema: "oro"). Tutte le regole stanno sotto .oro.g-sipero: i prefissi .sp-* sono condivisi con lo Scopone.
      // Solo colori, bordi e ombre; i colori solo con le variabili --o-* (css/styles.css). Le squadre restano rosso e blu, scuri
      // quanto basta per il fondo chiaro (testo piccolo almeno 4,5:1); Bonus verde, Malus rosso, la carta bianca col filo d'oro.
      // ---------------------------------------------------------------------------------------------------------
      // 🌙 Notte vivace: --sp-rosso/--sp-blu = i colori delle squadre come scritta e filo (chiari, si leggono sul fondo scuro);
      // --sp-rosso-f/--sp-blu-f = gli stessi come fondo pieno con la scritta bianca (cartello del verdetto); Bonus e Malus = tinta su vetro pieno (stesso colore ovunque)
      ".oro.g-sipero{--sp-rosso:#ff8787;--sp-blu:#74c0fc;--sp-rosso-f:#c92a2a;--sp-blu-f:#1864ab;--sp-bonus:linear-gradient(rgba(52,209,122,.16),rgba(52,209,122,.16)),var(--o-carta-piena);--sp-malus:linear-gradient(rgba(214,60,74,.18),rgba(214,60,74,.18)),var(--o-carta-piena)}",
      // la barra in alto: ‹ tondo bianco col filo d'oro, il titolo della fase col carattere elegante, il giudice una pillola crema
      ".oro.g-sipero .sp-esci{background:var(--o-carta);color:var(--o-testo);box-shadow:inset 0 0 0 1px var(--o-filo-oro),var(--o-ombra);font-weight:700}",
      ".oro.g-sipero .sp-fase b{font-family:var(--o-tit);font-size:1.2rem;font-weight:700;letter-spacing:.005em;color:var(--o-testo)}",
      ".oro.g-sipero .sp-fase small{color:var(--o-tenue)}",
      ".oro.g-sipero .sp-giudice{background:var(--o-crema);color:var(--o-oro-testo);box-shadow:inset 0 0 0 1px var(--o-filo-oro)}",
      // il ‹ delle schermate col titolo nascosto (Mettete il telefono al centro, ecc.): era un velo nero con la freccia bianca
      ".oro.g-sipero.senza-testa>.testa .btn-piccolo{background:var(--o-carta);color:var(--o-testo);box-shadow:inset 0 0 0 1px var(--o-filo-oro),var(--o-ombra)}",
      // il tavolo: due carte bianche (o una, in «Ognuno per sé»); a chi tocca il filo prende il colore della squadra, chi vince il filo d'oro
      ".oro.g-sipero .sp-col{background:var(--o-carta);border-color:var(--o-filo);box-shadow:var(--o-ombra)}",
      ".oro.g-sipero .sp-col.c0{--sq:var(--sp-rosso)}.oro.g-sipero .sp-col.c1{--sq:var(--sp-blu)}.oro.g-sipero .sp-col.cs{--sq:var(--o-oro-testo)}",      ".oro.g-sipero .sp-col.mia{background:var(--o-carta-viva)}",
      ".oro.g-sipero .sp-col.turno{border-color:var(--sq)}",
      ".oro.g-sipero .sp-col.vince{border-color:var(--o-oro);background:var(--o-carta-viva);box-shadow:0 0 0 1px var(--o-oro),var(--o-ombra-alta)}",
      // le carte piccole sul tavolo: Bonus verde chiaro col filetto verde, Malus rosso chiaro col filetto rosso, la carta bianca col filo d'oro
      ".oro.g-sipero .sp-mini{color:var(--o-testo);background:var(--o-carta-2)}",
      ".oro.g-sipero .sp-mini.b{background:var(--sp-bonus);box-shadow:inset 3px 0 0 var(--o-verde)}",
      ".oro.g-sipero .sp-mini.m{background:var(--sp-malus);box-shadow:inset 3px 0 0 var(--o-rosso)}",
      ".oro.g-sipero .sp-mini.b.scritta{box-shadow:inset 0 0 0 1.5px var(--o-oro),inset 4px 0 0 var(--o-verde)}",
      ".oro.g-sipero .sp-mini.m.scritta{box-shadow:inset 0 0 0 1.5px var(--o-oro),inset 4px 0 0 var(--o-rosso)}",
      ".oro.g-sipero .sp-firma,.oro.g-sipero .sp-fc{color:var(--o-oro-testo)}",
      // la mano: carte chiare col filetto a sinistra (verde Bonus, rosso Malus); scelta = filo d'oro e un filo di luce in più
      ".oro.g-sipero .sp-carta{color:var(--o-testo);padding-left:13px;border-color:var(--o-filo)}",
      ".oro.g-sipero .sp-carta.b{background:var(--sp-bonus);box-shadow:inset 5px 0 0 var(--o-verde),var(--o-ombra)}",
      ".oro.g-sipero .sp-carta.m{background:var(--sp-malus);box-shadow:inset 5px 0 0 var(--o-rosso),var(--o-ombra)}",
      ".oro.g-sipero .sp-carta.su{border-color:var(--o-oro)}",
      ".oro.g-sipero .sp-carta.b.su{box-shadow:inset 5px 0 0 var(--o-verde),0 0 0 1px var(--o-oro),var(--o-ombra-alta)}",
      ".oro.g-sipero .sp-carta.m.su{box-shadow:inset 5px 0 0 var(--o-rosso),0 0 0 1px var(--o-oro),var(--o-ombra-alta)}",
      ".oro.g-sipero .sp-carta.scritta{border:2px dashed var(--o-oro)}",
      ".oro.g-sipero .sp-n{background:var(--o-tasto);color:var(--o-tasto-testo)}",
      ".oro.g-sipero .sp-altre{border-color:var(--o-filo-oro);background:var(--o-carta);color:var(--o-oro-testo)}",
      ".oro.g-sipero .btn.sp-scrivi-b{background:var(--o-crema);color:var(--o-oro-testo);border:2px dashed var(--o-oro);box-shadow:none}",
      // il verdetto: la squadra vincente in rosso o blu pieno, «Ognuno per sé» in oro; il fondo è un velo avorio, non nero
      ".oro.g-sipero .sp-verdetto{background:rgba(13,16,32,.78)}",
      ".oro.g-sipero .sp-verdetto.c0{--sqc:var(--sp-rosso-f)}.oro.g-sipero .sp-verdetto.c1{--sqc:var(--sp-blu-f)}",
      ".oro.g-sipero .sp-verdetto.cs .sp-vtesto{background:var(--o-tasto);color:var(--o-tasto-testo)}",
      ".oro.g-sipero .sp-vtesto{font-family:var(--o-tit);font-weight:700;font-size:1.7rem;box-shadow:var(--o-ombra-alta)}",
      // i due tasti del voto: vetro (come tutti i tasti secondari) col filo del colore della squadra e una tinta leggera
      ".oro.g-sipero .btn.sp-vota{color:var(--o-testo)}",
      ".oro.g-sipero .btn.sp-vota.c0:not(.btn-primario):not(.btn-verde):not(.btn-rosso):not(.btn-fantasma){background:linear-gradient(rgba(255,135,135,.14),rgba(255,135,135,.14)),var(--o-carta-piena);box-shadow:inset 0 0 0 2px var(--sp-rosso),0 10px 24px -14px rgba(0,0,0,.8)}",
      ".oro.g-sipero .btn.sp-vota.c1:not(.btn-primario):not(.btn-verde):not(.btn-rosso):not(.btn-fantasma){background:linear-gradient(rgba(116,192,252,.14),rgba(116,192,252,.14)),var(--o-carta-piena);box-shadow:inset 0 0 0 2px var(--sp-blu),0 10px 24px -14px rgba(0,0,0,.8)}",
      // il conto alla rovescia dell'arringa e la classifica corta
      ".oro.g-sipero .sp-timer-bar{background:var(--o-fondo-2);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".oro.g-sipero .sp-timer-fill{background:var(--o-oro)}",
      ".oro.g-sipero .sp-timer-n{color:var(--o-testo)}",
      ".oro.g-sipero .sp-timer.finito .sp-timer-n{color:var(--o-rosso-testo)}",
      ".oro.g-sipero .sp-classi span{background:var(--o-carta);color:var(--o-testo);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".oro.g-sipero .sp-classi span.primo{background:var(--o-crema);box-shadow:inset 0 0 0 1px var(--o-oro)}",
      ".oro.g-sipero .sp-classi span.tu{background:var(--o-scuro);color:var(--o-scuro-testo);box-shadow:none}",
      // la lente per leggere una carta in grande e il foglio «✍️ Scrivi tu»
      ".oro.g-sipero.sp-lente{background:rgba(6,8,18,.74)}",
      ".oro.g-sipero .sp-lente-box{background:var(--o-carta-piena);color:var(--o-testo);box-shadow:inset 0 0 0 1px var(--o-filo-oro),var(--o-ombra-alta)}",
      ".oro.g-sipero .sp-lente-tit{font-family:var(--o-tit);font-weight:700;font-size:1.3rem}",
      ".oro.g-sipero .sp-lente-r{color:var(--o-testo);background:var(--o-carta-2)}",
      ".oro.g-sipero .sp-lente-r.b{background:var(--sp-bonus);box-shadow:inset 4px 0 0 var(--o-verde)}",
      ".oro.g-sipero .sp-lente-r.m{background:var(--sp-malus);box-shadow:inset 4px 0 0 var(--o-rosso)}",
      ".oro.g-sipero .sp-lente-r.b.scritta{box-shadow:inset 0 0 0 2px var(--o-oro),inset 5px 0 0 var(--o-verde)}",
      ".oro.g-sipero .sp-lente-r.m.scritta{box-shadow:inset 0 0 0 2px var(--o-oro),inset 5px 0 0 var(--o-rosso)}",
      ".oro.g-sipero .sp-scrivi textarea{border:1px solid var(--o-filo-oro);background:var(--o-fondo-2);color:var(--o-testo);box-shadow:inset 0 1px 2px rgba(0,0,0,.35)}",
      ".oro.g-sipero .sp-scrivi textarea:focus{outline:none;border-color:var(--o-oro);box-shadow:0 0 0 3px rgba(255,79,134,.22)}",
      ".oro.g-sipero .sp-scrivi textarea::placeholder{color:var(--o-tenue);opacity:1}",
      ".oro.g-sipero .sp-scrivi .sp-chis button{border:1px solid var(--o-filo);background:var(--o-carta);color:var(--o-tenue)}",
      ".oro.g-sipero .sp-scrivi .sp-chis button.attiva{border-color:var(--o-oro);background:var(--o-carta-viva);color:var(--o-testo)}",
      // la schermata del round (stesso telefono): giudice, due squadre, chi rovina chi
      ".oro.g-sipero .sp-giudbox{background:var(--o-crema);color:var(--o-testo);box-shadow:inset 0 0 0 1px var(--o-filo-oro)}",
      ".oro.g-sipero .sp-sqbox{background:var(--o-carta);box-shadow:inset 0 0 0 1px var(--o-filo),var(--o-ombra)}",
      ".oro.g-sipero .sp-sqbox.c0{--sq:var(--sp-rosso)}.oro.g-sipero .sp-sqbox.c1{--sq:var(--sp-blu)}",
      ".oro.g-sipero .sp-chi span.sp-pers{background:var(--o-carta-2);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".oro.g-sipero .sp-av{background:var(--o-carta-2);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".oro.g-sipero .sp-avviso{background:var(--o-crema);color:var(--o-ambra)}",
      // «Ognuno per sé»: chi ha già giocato e le schede da sfogliare
      ".oro.g-sipero .sp-stato>span{background:var(--o-carta);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".oro.g-sipero .sp-stato>span.ok{background:var(--o-verde-tenue);box-shadow:inset 0 0 0 1px var(--o-verde)}",
      ".oro.g-sipero .sp-tab button{background:var(--o-carta);color:var(--o-tenue);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".oro.g-sipero .sp-tab button.attiva{border-color:var(--o-oro);background:var(--o-carta-viva);color:var(--o-testo);box-shadow:none}",
      ".oro.g-sipero .sp-tab button.vince{background:var(--o-oro-chiaro);color:var(--o-scuro-testo);box-shadow:none}",
      // la saletta online: chi sceglie giudice e squadre (i tasti 🟥 🟦 ⚖️ 👀) col lampone al posto dell'oro di prima
      ".oro.g-sipero .sp-ruoli button{background:var(--o-carta-2);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".oro.g-sipero .sp-ruoli button.attiva{border-color:var(--o-oro);background:var(--o-carta-viva);box-shadow:none}",
      // ---------------------------------------------------------------------------------------------------------
      // 30 ott 2026: faccine, capo, luce del verdetto, stella, presentazione del round (colori solo con le variabili --o-*)
      // ---------------------------------------------------------------------------------------------------------
      // la pillola del giudice con la sua faccina
      ".sp-giudice{display:flex;align-items:center;gap:5px}.sp-giudice>span:last-child{min-width:0;overflow:hidden;text-overflow:ellipsis}",
      ".sp-gav{flex:0 0 auto;width:22px;height:22px;margin:-3px 0 -3px -6px;border-radius:50%;overflow:hidden;background:var(--o-carta-2)}.sp-gav svg{width:100%;height:auto;display:block}.sp-gav[hidden]{display:none}",
      // le faccine in testa alle colonne (una sopra l'altra di poco)
      ".sp-facce{display:inline-flex;flex:0 0 auto;padding-right:5px}.sp-facce[hidden]{display:none}",
      ".sp-fa{width:20px;height:20px;border-radius:50%;overflow:hidden;margin-right:-5px;background:var(--o-carta-2);box-shadow:0 0 0 1.5px var(--o-carta-piena);flex:0 0 auto;display:inline-block}",
      ".sp-fa svg{width:100%;height:auto;display:block}.sp-fa.via{opacity:.4}",
      // 👆 le carte segnate dai compagni: faccine in basso a destra, filo lampone leggero
      ".sp-sg{position:absolute;right:5px;bottom:4px;display:flex;flex-direction:row-reverse}.sp-sg .sp-fa{width:19px;height:19px;margin:0 0 0 -5px}",
      ".sp-sg .sp-fa.capo{box-shadow:0 0 0 2px var(--o-oro)}",
      ".sp-carta.segnata .sp-tx{margin-bottom:12px}",
      ".oro.g-sipero .sp-carta.segnata:not(.su){border-color:var(--o-filo-oro)}",
      ".sp-capo{display:flex;align-items:center;justify-content:center;gap:6px;flex:1 1 auto;min-width:0;padding:8px 10px;border-radius:14px;font-weight:800;font-size:.84rem;line-height:1.25;text-align:center;background:var(--o-carta);box-shadow:inset 0 0 0 1px var(--o-filo-oro);color:var(--o-testo)}",
      ".sp-capo .sp-fa{width:26px;height:26px;margin:0}.sp-capo small{display:block;font-weight:600;color:var(--o-tenue);font-size:.74rem}",
      // il giudice che aspetta: la sua faccina grande
      ".sp-msgav{display:flex;flex-direction:column;align-items:center;gap:6px}.sp-msgav b{font-size:1.15rem;color:var(--o-testo)}",
      ".sp-bigav{width:84px;height:84px;border-radius:50%;overflow:hidden;background:var(--o-carta-2);box-shadow:0 0 0 3px var(--o-filo-oro),0 10px 30px -10px rgba(0,0,0,.7);display:block;flex:0 0 auto}",
      ".sp-bigav svg,.sp-medav svg,.sp-cfa svg,.sp-vfa svg{width:100%;height:auto;display:block}",
      ".sp-medav{width:54px;height:54px;border-radius:50%;overflow:hidden;background:var(--o-carta-2);display:block;box-shadow:0 0 0 2px var(--sq,var(--o-filo))}",
      // la classifica corta con le faccine
      ".sp-classi span{display:inline-flex;align-items:center;gap:5px;padding-left:3px}",
      ".sp-cfa{width:22px;height:22px;border-radius:50%;overflow:hidden;background:var(--o-carta-2);display:inline-block;flex:0 0 auto}",
      // 🥁 la luce del verdetto e la stella
      ".sp-col.luce,.sp-tab button.luce{border-color:var(--o-oro)!important;box-shadow:0 0 0 2px var(--o-oro),0 0 26px rgba(255,194,71,.55)!important;transform:scale(1.025)}",
      ".sp-col,.sp-tab button{transition:border-color .08s,box-shadow .08s,transform .08s,background-color .25s,opacity .12s}",
      ".sp-scena.sospesa .sp-col:not(.luce),.sp-scena.sospesa .sp-tab button:not(.luce){opacity:.45}",
      // (mai cambiare l'animazione delle carte già arrivate: ripartirebbe da capo col suo ritardo e la carta sparirebbe per qualche secondo)
      ".sp-col.scegli .sp-mini{cursor:pointer;outline:1.5px dashed var(--o-filo-oro);outline-offset:-2px}",
      ".oro.g-sipero .sp-mini.stella{outline:2px solid var(--o-oro);outline-offset:-2px;box-shadow:0 0 14px rgba(255,194,71,.45)}",
      ".sp-st{display:inline-block;animation:spPop .45s cubic-bezier(.2,1.4,.4,1) both}",
      // la fila di chi ha vinto sotto il cartello: saltano
      ".sp-vfacce{display:flex;gap:8px;margin-top:12px}",
      ".sp-vfa{width:58px;height:58px;border-radius:50%;overflow:hidden;background:var(--o-carta-2);box-shadow:0 0 0 3px var(--o-oro);display:block;animation:spSalta .55s cubic-bezier(.3,1.6,.5,1) both,spSalta2 .5s ease-in-out 1.1s 3 alternate}",
      "@keyframes spSalta{from{opacity:0;transform:translateY(30px) scale(.4)}to{opacity:1;transform:none}}",
      "@keyframes spSalta2{to{transform:translateY(-12px)}}",
      // 🥊 la presentazione del round
      ".sp-presenta{position:absolute;inset:0;z-index:18;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,12,26,.82);animation:spVIn .25s ease both;transition:opacity .35s}",
      ".sp-presenta.via{opacity:0}",
      ".sp-pres-box{width:100%;max-width:420px;display:flex;flex-direction:column;align-items:stretch;gap:10px;padding:16px;border-radius:22px;background:var(--o-carta-piena);box-shadow:inset 0 0 0 1px var(--o-filo-oro),var(--o-ombra-alta);animation:spPop .4s cubic-bezier(.2,1.4,.4,1) both}",
      ".sp-pres-tit{text-align:center;font-weight:900;font-size:1.35rem;color:var(--o-testo)}",
      ".sp-pres-g{display:flex;flex-direction:column;align-items:center;gap:6px;font-weight:800;color:var(--o-oro-testo)}.sp-pres-g .sp-bigav{width:70px;height:70px}",
      ".sp-pres-sq{padding:8px 10px;border-radius:14px;background:var(--o-carta);box-shadow:inset 0 0 0 1px var(--o-filo)}",
      ".sp-pres-sq.c0{--sq:var(--sp-rosso)}.sp-pres-sq.c1{--sq:var(--sp-blu)}.sp-pres-sq.cs{--sq:var(--o-oro-testo)}",
      ".sp-pres-sq>b{display:block;color:var(--sq);font-size:.86rem;margin-bottom:6px}",
      ".sp-pres-chi{display:flex;flex-wrap:wrap;gap:8px 10px;justify-content:center}",
      ".sp-pres-p{display:flex;flex-direction:column;align-items:center;gap:3px;max-width:72px;animation:spSalta .45s cubic-bezier(.3,1.6,.5,1) both}",
      ".sp-pres-p small{font-weight:800;font-size:.76rem;max-width:72px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--o-testo)}",
      ".sp-pres-sotto{text-align:center;font-size:.8rem;color:var(--o-tenue)}",
      // ✋ chi arriva tardi sceglie la squadra
      ".sp-entra{display:flex;flex-direction:column;gap:8px;margin:auto 0}.sp-entra p{margin:0;text-align:center;font-weight:700;line-height:1.35}",
      ".sp-entra .btn{margin:0;display:flex;align-items:center;justify-content:center;gap:8px}.sp-entra .btn small{font-weight:600;opacity:.85}",
      // ⚖️ il voto del giudice da confermare
      ".btn.sp-vota.conferma{box-shadow:inset 0 0 0 3px var(--o-oro),0 0 22px rgba(255,194,71,.4)!important;animation:spBatti .5s ease 1}",
      // la schermata del round sullo stesso telefono: faccine più grandi, tutto al centro
      ".sp-round{min-height:100%;justify-content:center}",
      ".sp-lente-nota{display:block;margin-top:5px;font-size:.78rem;font-weight:600;color:var(--o-tenue)}",
      ".btn.sp-stelle-b{width:100%;margin:8px 0 0}",
      ".sp-stelle{display:flex;flex-direction:column;gap:2px}.sp-stelle .sp-lente-r{font-size:.98rem}",
      // 👥 la scritta «Sei nella Squadra 1» sotto la barra e la schermata dei ruoli
      ".sp-mio{flex:0 0 auto;margin:2px 10px 0;padding:3px 10px;border-radius:10px;font-weight:800;font-size:.82rem;text-align:center;line-height:1.25}",
      ".sp-mio.c0{background:var(--sp-rosso-f,#c92a2a);color:#fff}.sp-mio.c1{background:var(--sp-blu-f,#1864ab);color:#fff}.sp-mio.g{background:var(--o-oro,#ffc247);color:#1a1300}.sp-mio.x{background:rgba(255,255,255,.08);color:var(--o-tenue,#a6acc8)}",
      ".sp-rc-guida{flex:0 0 auto;margin:8px 12px 4px;text-align:center;font-weight:800;font-size:.95rem}",
      ".sp-rc-cols{flex:1 1 auto;min-height:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;padding:4px 10px}",
      ".sp-rc{display:flex;flex-direction:column;min-height:0;min-width:0;border:0;border-radius:16px;padding:8px 5px;color:inherit;font:inherit;text-align:center;cursor:pointer;background:var(--o-carta-piena,#151a2e);box-shadow:inset 0 0 0 2px var(--rc);transition:transform .12s}",
      ".sp-rc:active{transform:scale(.97)}.sp-rc.cg{--rc:#ffc247}.sp-rc.c0{--rc:#ff8787}.sp-rc.c1{--rc:#74c0fc}",
      ".sp-rc.mio{box-shadow:inset 0 0 0 3px var(--rc),0 0 16px rgba(255,255,255,.12)}.sp-rc.cg.mio{background:linear-gradient(rgba(255,194,71,.22),rgba(255,194,71,.22)),var(--o-carta-piena,#151a2e)}",
      ".sp-rc.c0.mio{background:linear-gradient(rgba(255,135,135,.22),rgba(255,135,135,.22)),var(--o-carta-piena,#151a2e)}.sp-rc.c1.mio{background:linear-gradient(rgba(116,192,252,.22),rgba(116,192,252,.22)),var(--o-carta-piena,#151a2e)}",
      ".sp-rc.no{cursor:default}.sp-rc.no .sp-rc-stato{opacity:.75}.sp-rc.no:active{transform:none}",
      ".sp-rc-testa{display:flex;flex-direction:column;align-items:center;gap:2px;font-weight:900;font-size:.98rem;line-height:1.15;color:var(--rc);padding:2px 0 8px}.sp-rc-ic{font-size:1.35rem;line-height:1}",
      ".sp-rc-lista{flex:1 1 auto;min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:5px}",
      ".sp-rc-p{display:flex;align-items:center;gap:5px;font-weight:700;font-size:.82rem;min-width:0;background:rgba(255,255,255,.07);border-radius:10px;padding:3px 5px;text-align:left}",
      ".sp-rc-p.io{background:rgba(255,255,255,.16)}.sp-rc-p .sp-av{width:26px;height:26px;flex:0 0 26px}.sp-rc-p span:last-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".sp-rc-stato{font-size:.74rem;font-weight:800;color:var(--o-tenue,#a6acc8);padding-top:6px;min-height:1.3em}.sp-rc.mio .sp-rc-stato{color:var(--rc)}",
      ".sp-rc-liberi,.sp-rc-punti{flex:0 0 auto;margin:6px 12px 0;text-align:center;font-size:.82rem;color:var(--o-tenue,#a6acc8)}.sp-rc-punti:empty{display:none}",
      ".sp-rc-nota.no{color:#ffb3b3}.sp-rc-chi{font-weight:700;margin-top:2px}",
      // (stesso telefono) i nomi si toccano: chi è scelto si accende; la fila di chi è da sistemare
      "button.sp-rc-p{border:0;color:inherit;font:inherit;cursor:pointer;width:100%}.sp-rc-p.sel{background:rgba(255,255,255,.24);box-shadow:0 0 0 2px #fff}",
      ".sp-rcl-liberi{flex:0 0 auto;display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;margin:2px 10px 6px;min-height:34px;padding:4px;border-radius:12px}",
      ".sp-rcl-liberi.meta{box-shadow:inset 0 0 0 2px rgba(255,255,255,.35)}.sp-rcl-liberi button.sp-rc-p{width:auto}.sp-rcl-t{font-size:.82rem;font-weight:700;color:var(--o-tenue,#a6acc8)}",
      ".sp-round .sp-giudbox .sp-av{width:54px;height:54px}.sp-round .sp-chi span.sp-pers{font-size:1rem;padding-right:12px}.sp-round .sp-chi .sp-av{width:40px;height:40px}"
    ].join("\n");
    document.head.appendChild(st);
    // girando il telefono le carte si rimisurano
    var tm = null;
    window.addEventListener("resize", function () {
      clearTimeout(tm);
      tm = setTimeout(function () {
        [].forEach.call(document.querySelectorAll(".sp-mano"), adattaCarte);
        [].forEach.call(document.querySelectorAll(".sp-scena.largo .sp-lista"), function (l) { adattaLista(l, l.parentNode.classList.contains("cs") ? 19 : 14); });
      }, 200);
    });
  }

  // ---------- pezzi grafici comuni ----------
  // la lente: legge in grande una carta o uno scenario intero
  function lente(t, titolo, voci) {
    if (document.querySelector(".sp-lente")) return;
    stile();
    var el = t.el, aperta = Date.now();
    var box = el("div", { class: "sp-lente-box" });
    box.appendChild(el("div", { class: "sp-lente-tit", text: titolo }));
    if (!voci.length) box.appendChild(el("p", { class: "tenue", text: "Ancora nessuna carta." }));
    voci.forEach(function (v) { box.appendChild(el("div", { class: "sp-lente-r " + (v.tipo === "bonus" ? "b" : "m") + (v.di ? " scritta" : "") }, testoVoce(el, v).concat(v.nota ? [el("small", { class: "sp-lente-nota", text: v.nota })] : []))); });
    function chiudi() { if (Date.now() - aperta < 350) return; if (velo.parentNode) velo.parentNode.removeChild(velo); }
    box.appendChild(el("button", { class: "btn btn-primario", text: "Chiudi", onclick: chiudi }));
    var velo = el("div", { class: "sp-lente oro g-sipero sg-dal-gioco", onclick: function (e) { if (e.target === velo) chiudi(); } }, [box]);
    document.body.appendChild(velo);
  }
  // ⭐ le carte che hanno convinto il giudice, round per round
  // ⭐ l'avviso sopra la classifica del round: «tocca la carta» al giudice, poi a tutti «la stella segna…»
  function avvisoStella(ui, vm, possoStella, sonoGiudice) {
    if (!ui.avvStella) return;
    var tx = possoStella ? "⭐ Tocca la carta che ti ha convinto: entra tra le carte della serata" :
      vm.fase === "esito" && vm.stella != null ? "⭐ La stella segna la carta che ha convinto " + (sonoGiudice ? "te" : vm.giudiceNome) : "";
    testoSe(ui.avvStella, tx); ui.avvStella.hidden = !tx;
  }
  function lenteStelle(t, stelle) {
    lente(t, "⭐ Le carte della serata", stelle.map(function (x) {
      return { tipo: x.tipo, testo: x.testo, di: x.di || undefined, nota: "Round " + x.r + " · ha convinto " + x.giudice + (x.chi && x.chi.length ? " · vinto da " + x.chi.join(" e ") : "") };
    }));
  }
  function chiudiLente() { var l = document.querySelector(".sp-lente"); if (l && l.parentNode) l.parentNode.removeChild(l); }
  // tocco lungo (per leggere una carta in grande)
  function premiLungo(nodo, fn) {
    var tm = null, x0 = 0, y0 = 0;
    function stop() { if (tm) { clearTimeout(tm); tm = null; } }
    nodo.addEventListener("pointerdown", function (e) {
      x0 = e.clientX; y0 = e.clientY; stop();
      tm = setTimeout(function () { tm = null; nodo._lungo = true; fn(); setTimeout(function () { nodo._lungo = false; }, 700); }, 480);
    });
    nodo.addEventListener("pointermove", function (e) { if (tm && (Math.abs(e.clientX - x0) > 10 || Math.abs(e.clientY - y0) > 10)) stop(); });
    nodo.addEventListener("pointerup", stop); nodo.addEventListener("pointercancel", stop); nodo.addEventListener("pointerleave", stop);
  }

  // lo schermo di gioco: barra, tavolo (i due scenari), turno, azione, piede.
  // solo = «Ognuno per sé»: al posto del tavolo a due colonne c'è il palco (chi ha giocato, le schede, lo scenario di uno)
  function creaScena(t, onEsci, solo) {
    stile();
    var el = t.el;
    var s = t.schermata({}); s.classList.add("sp-piena");
    var ui = { t: t, s: s, chiave: null, nuova: true, solo: !!solo };
    ui.fase = el("b"); ui.sotto = el("small");
    ui.gAv = el("span", { class: "sp-gav", hidden: "hidden" }); ui.gTx = el("span");
    ui.giudice = el("div", { class: "sp-giudice" }, [ui.gAv, ui.gTx]);
    ui.barra = el("div", { class: "sp-barra" }, [
      el("button", { class: "sp-esci", "aria-label": "Esci", text: "‹", onclick: onEsci }),
      el("div", { class: "sp-fase" }, [ui.fase, ui.sotto]), ui.giudice]);
    if (solo) {
      ui.cols = [];
      ui.stato = el("div", { class: "sp-stato", hidden: "hidden" });
      ui.tab = el("div", { class: "sp-tab", hidden: "hidden" });
      ui.scheda = creaColonna(t, "s");
      ui.scheda.nodo.hidden = true;
      ui.tavolo = el("div", { class: "sp-palco" }, [ui.stato, ui.tab, ui.scheda.nodo]);
    } else {
      ui.cols = [creaColonna(t, 0), creaColonna(t, 1)];
      ui.tavolo = el("div", { class: "sp-tavolo" }, [ui.cols[0].nodo, ui.cols[1].nodo]);
    }
    ui.turno = el("div", { class: "sp-turno" });
    ui.azione = el("div", { class: "sp-azione" });
    ui.piede = el("div", { class: "sp-piede" });
    ui.mio = el("div", { class: "sp-mio", hidden: "hidden" });   // 👥 «Sei nella Squadra 1» / «Sei il giudice»: sempre chiaro dove sei
    ui.scena = el("div", { class: "sp-scena" + (t.guarda ? " sp-targa" : "") }, [ui.barra, ui.mio, ui.tavolo, ui.turno, ui.azione, ui.piede]);
    s._contenuto.appendChild(ui.scena);
    t.mostra(s);
    return ui;
  }
  // av: { nome, omino } = la faccina del giudice nella pillola
  function barra(ui, fase, sotto, giudice, av) {
    testoSe(ui.fase, fase); testoSe(ui.sotto, sotto); testoSe(ui.gTx, giudice);
    var k = av ? av.nome + "|" + (av.omino ? 1 : 0) : "";
    if (ui.gAvK !== k) { ui.gAvK = k; ui.gAv.innerHTML = av ? avatarHtml(av.nome, av.omino) : ""; ui.gAv.hidden = !av; }
  }
  function creaColonna(t, k) {
    var el = t.el;
    var c = { k: k, t: t, av: el("span", { class: "sp-av", hidden: "hidden" }), facce: el("span", { class: "sp-facce", hidden: "hidden" }), tx: el("span", { class: "sp-col-tx" }), lista: el("div", { class: "sp-lista" }), voci: [], titolo: "", avK: null };
    c.testa = el("div", { class: "sp-col-testa" }, [c.av, c.facce, c.tx]);
    c.nodo = el("div", { class: "sp-col c" + k, role: "button", onclick: function () { lente(t, c.titolo, c.voci); } }, [c.testa, c.lista]);
    // ⭐ il giudice tocca la carta che l'ha convinto (solo sullo scenario che ha vinto, solo quando glielo si chiede)
    c.lista.addEventListener("click", function (e) {
      if (!c.stellaFn) return;
      var m = e.target && e.target.closest ? e.target.closest(".sp-mini") : null; if (!m) return;
      e.stopPropagation();
      var i = [].indexOf.call(c.lista.querySelectorAll(".sp-mini"), m);
      if (i >= 0) { var fn = c.stellaFn; c.stellaFn = null; c.nodo.classList.remove("scegli"); vibra(15); fn(i); }
    });
    return c;
  }
  // il testo di una carta sul tavolo: ✅/❌, la frase, la firma della carta bianca e (Ognuno per sé) chi ha messo il Malus
  function testoVoce(el, v) {
    var parti = [document.createTextNode((v.tipo === "bonus" ? "✅ " : "❌ ") + v.testo)];
    if (v.di) parti.push(el("span", { class: "sp-firma", text: " ✍️ di " + v.di }));
    if (v.da) parti.push(el("span", { class: "sp-da", text: " · 💥 da " + v.da }));
    return parti;
  }
  // d: { titolo, voci:[{tipo,testo,di?,da?}], turno, mia, vince, anima (false = senza animazione), ritardo (secondi tra una carta e l'altra),
  //      avatar: { k, nome, omino } (solo la scheda di «Ognuno per sé») }
  // aggiunge solo le carte nuove; ridà quante sono state aggiunte
  function aggiornaColonna(c, d) {
    var el = c.t.el;
    testoSe(c.tx, d.titolo); c.titolo = d.titolo;
    if (d.avatar !== undefined) {
      var ak = d.avatar ? d.avatar.k : "";
      if (c.avK !== ak) { c.avK = ak; c.av.innerHTML = d.avatar ? avatarHtml(d.avatar.nome, d.avatar.omino) : ""; c.av.hidden = !d.avatar; }
    }
    c.nodo.classList.toggle("turno", !!d.turno);
    c.nodo.classList.toggle("mia", !!d.mia);
    c.nodo.classList.toggle("vince", !!d.vince);
    var nuove = d.voci || [], vecchie = c.voci;
    var stesse = d.chiave === c.vChiave && vecchie.length <= nuove.length && vecchie.every(function (v, i) { return v.testo === nuove[i].testo && v.tipo === nuove[i].tipo && v.di === nuove[i].di && v.da === nuove[i].da; });
    c.vChiave = d.chiave;
    if (!stesse) { svuota(c.lista); vecchie = []; }
    var vuoto = c.lista.querySelector(".sp-vuoto");
    if (!nuove.length) { if (!vuoto) c.lista.appendChild(el("div", { class: "sp-vuoto", text: "(ancora niente)" })); }
    else if (vuoto) c.lista.removeChild(vuoto);
    var aggiunte = 0;
    for (var i = vecchie.length; i < nuove.length; i++) {
      var v = nuove[i];
      var n = el("div", { class: "sp-mini " + (v.tipo === "bonus" ? "b" : "m") + (v.di ? " scritta" : "") + (d.anima === false ? "" : " nuova") }, testoVoce(el, v));
      if (d.ritardo) n.style.animationDelay = ((d.base || 0) + aggiunte * d.ritardo).toFixed(2) + "s";
      c.lista.appendChild(n); aggiunte++;
    }
    c.voci = nuove.slice();
    if (aggiunte && !d.ritardo) c.lista.scrollTop = c.lista.scrollHeight;
    return aggiunte;
  }
  // le faccine di chi gioca quello scenario, in testa alla colonna (si rifanno solo se cambia qualcuno). lista: [{ id, nome, omino, via }]
  function mettiFacce(c, lista) {
    var sig = (lista || []).map(function (x) { return x.id + (x.via ? "z" : "") + (x.omino ? 1 : 0); }).join(",");
    if (c.facceSig === sig) return;
    c.facceSig = sig; svuota(c.facce);
    (lista || []).forEach(function (x) { c.facce.appendChild(c.t.el("span", { class: "sp-fa" + (x.via ? " via" : ""), html: avatarHtml(x.nome, x.omino) })); });
    c.facce.hidden = !(lista || []).length || (lista || []).length > 2;   // (in tanti bastano i nomi: le faccine li coprivano)
  }
  // ⭐ la carta che ha convinto il giudice (i = la sua posizione nello scenario; null = nessuna)
  function segnaStella(c, i) {
    [].forEach.call(c.lista.querySelectorAll(".sp-mini"), function (m, j) {
      var si = i != null && j === i;
      if (si && !m.classList.contains("stella")) { m.classList.add("stella"); m.insertBefore(c.t.el("b", { class: "sp-st", text: "⭐ " }), m.firstChild); }
      else if (!si && m.classList.contains("stella")) { m.classList.remove("stella"); var b = m.querySelector(".sp-st"); if (b) m.removeChild(b); }
    });
  }
  function scegliStella(c, fn) { c.stellaFn = fn; c.nodo.classList.toggle("scegli", !!fn); }
  // 🥁 la luce che passa da uno scenario all'altro (o da un nome all'altro) e si ferma su chi ha vinto. nodi: dove passa;
  // fin: il numero di quello che vince; ms: quanto dura; poi onFine
  function luce(nodi, fin, ms, onFine) {
    var n = nodi.length, ritardi = [], somma = 0, d = 65;
    if (!n) { setTimeout(onFine, ms); return; }
    while (somma + d < ms - 450) { ritardi.push(d); somma += d; d = Math.round(d * 1.14); }
    var tot = ritardi.length, i0 = ((fin - (tot - 1)) % n + n * 50) % n, passo = 0;
    var sc = nodi[0].closest ? nodi[0].closest(".sp-scena") : null;   // (intanto gli altri si spengono un po')
    if (sc) sc.classList.add("sospesa");
    function accendi(j) { nodi.forEach(function (x, q) { x.classList.toggle("luce", q === j); }); }
    (function giro() {
      if (!document.body.contains(nodi[0])) { if (sc) sc.classList.remove("sospesa"); return; }
      if (passo >= tot) { accendi(fin); setTimeout(function () { nodi.forEach(function (x) { x.classList.remove("luce"); }); if (sc) sc.classList.remove("sospesa"); onFine(); }, Math.max(150, ms - somma)); return; }
      accendi((i0 + passo) % n); suono("tic");
      setTimeout(giro, ritardi[passo++]);
    })();
  }
  // nel tavolo grande (arringa e verdetto) le scritte si rimpiccioliscono quel che serve per stare tutte
  function adattaLista(lista, max) {
    if (!lista || !document.body.contains(lista)) return;
    var f = max || 14;
    lista.style.fontSize = f + "px";
    while (lista.scrollHeight > lista.clientHeight + 1 && f > 12) { f -= 0.5; lista.style.fontSize = f + "px"; }
    segnaAltre(lista);
  }
  // la lista non ci sta tutta: in fondo «altre ↓» (sparisce quando si arriva giù)
  function segnaAltre(lista) {
    var col = lista.parentNode; if (!col) return;
    function agg() { var resta = lista.scrollHeight - lista.clientHeight - lista.scrollTop > 4; col.classList.toggle("altre", resta); }
    if (!lista._altre) { lista._altre = 1; lista.addEventListener("scroll", agg, { passive: true }); }
    agg();
  }
  function colonneUi(ui) { return ui.scheda ? ui.cols.concat([ui.scheda]) : ui.cols; }
  function adattaTavolo(ui) { colonneUi(ui).forEach(function (c) { if (!c.nodo.hidden) adattaLista(c.lista, c === ui.scheda && ui.scena.classList.contains("largo") ? 19 : 14); }); }
  function largo(ui, si) {
    var era = ui.scena.classList.contains("largo");
    ui.scena.classList.toggle("largo", !!si);
    if (era && !si) colonneUi(ui).forEach(function (c) { c.lista.style.fontSize = ""; });
  }
  // un messaggio al posto delle carte
  function messaggio(ui, emo, testo) {
    var el = ui.t.el;
    ui.azione.appendChild(el("div", { class: "sp-msg" }, [el("span", { class: "sp-emo", text: emo }), document.createTextNode(testo)]));
  }
  function notaPiede(ui, testo) { ui.piede.appendChild(ui.t.el("div", { class: "sp-nota", text: testo })); }

  // la mano di carte in griglia (2 colonne, niente scorrimento).
  // o: { carte, tipo, quante (0 = solo da guardare), altre: { tipo, carte } | null, onCambia(sel),
  //      firme: { testo: nome } (le carte bianche), presel: [testo] (già scelte: la carta appena scritta) }
  function creaMano(t, o) {
    var el = t.el, sel = [], nodi = [], firme = o.firme || {};
    var g = el("div", { class: "sp-mano" });
    var n = o.carte.length + (o.altre ? 1 : 0);
    g.style.gridTemplateRows = "repeat(" + Math.max(1, Math.ceil(n / 2)) + ", minmax(0, 1fr))";
    function segna() {
      nodi.forEach(function (x) { var i = sel.indexOf(x.c); x.b.classList.toggle("su", i >= 0); x.num.textContent = i >= 0 ? String(i + 1) : ""; });
      if (o.onCambia) o.onCambia(sel.slice());
    }
    o.carte.forEach(function (c) {
      var num = el("span", { class: "sp-n" });
      var attr = { class: "sp-carta " + (o.tipo === "bonus" ? "b" : "m") + (firme[c] ? " scritta" : "") };
      if (o.quante) attr.role = "button";
      var sg = el("span", { class: "sp-sg" });   // 👆 le faccine dei compagni che l'hanno segnata
      var b = el("div", attr, [el("span", { class: "sp-tx", text: c }), num, firme[c] ? el("span", { class: "sp-fc", text: "✍️ di " + firme[c] }) : null, sg]);
      var titolo = o.tipo === "bonus" ? "🟢 Carta Bonus" : "🔴 Carta Malus";
      var lv = [{ tipo: o.tipo, testo: c, di: firme[c] || undefined }];
      premiLungo(b, function () { lente(t, titolo, lv); });
      b.addEventListener("click", function () {
        if (b._lungo) return;
        if (!o.quante) return lente(t, titolo, lv);
        var i = sel.indexOf(c);
        if (i >= 0) sel.splice(i, 1);
        else { if (sel.length >= o.quante) sel.shift(); sel.push(c); }   // piena: la prima scelta lascia il posto
        segna();
      });
      nodi.push({ c: c, b: b, num: num, sg: sg, sig: "" });
      g.appendChild(b);
    });
    if (o.altre) {
      var tt = o.altre.tipo === "bonus" ? "🟢 Le tue carte Bonus" : "🔴 I tuoi Malus";
      g.appendChild(el("div", { class: "sp-altre", role: "button", text: "👀 " + tt + " (" + o.altre.carte.length + ")",
        onclick: function () { lente(t, tt, o.altre.carte.map(function (c) { return { tipo: o.altre.tipo, testo: c }; })); } }));
    }
    if (o.quante && o.presel) { o.presel.forEach(function (c) { if (o.carte.indexOf(c) >= 0 && sel.length < o.quante) sel.push(c); }); if (sel.length) segna(); }
    return { nodo: g, sel: function () { return sel.slice(); }, adatta: function () { adattaCarte(g); },
      // 👆 chi ha segnato ogni carta: { testo: [{ id, nome, omino, capo }] } (si rifà solo la carta che cambia)
      marche: function (mappa) {
        var cambiate = false;
        nodi.forEach(function (x) {
          var l = (mappa && mappa[x.c]) || [], sig = l.map(function (p) { return p.id + (p.capo ? "!" : ""); }).join(",");
          if (x.sig === sig) return;
          x.sig = sig; svuota(x.sg);
          l.slice(0, 4).forEach(function (p) { x.sg.appendChild(el("span", { class: "sp-fa" + (p.capo ? " capo" : ""), html: avatarHtml(p.nome, p.omino) })); });
          if (x.b.classList.contains("segnata") !== l.length > 0) { x.b.classList.toggle("segnata", l.length > 0); cambiate = true; }
        });
        if (cambiate) adattaCarte(g);
      } };
  }
  // ogni carta col carattere più grande che ci sta
  function adattaCarte(g) {
    if (!g || !document.body.contains(g)) return;
    [].forEach.call(g.querySelectorAll(".sp-carta"), function (b) {
      var tx = b.firstChild, h = b.clientHeight;
      if (!h) return;
      var f = Math.max(10, Math.min(15.5, h / 5));
      tx.style.fontSize = f + "px";
      var spazio = b.clientHeight - 10 - (b.classList.contains("segnata") ? 12 : 0);   // (la carta segnata tiene sotto il posto per le faccine)
      while (tx.offsetHeight > spazio && f > 9.5) { f -= 0.5; tx.style.fontSize = f + "px"; }
    });
  }

  // il conto alla rovescia dell'arringa (facoltativo)
  function mettiTimer(t, dove, sec) {
    var el = t.el, inizio = Date.now(), fine = inizio + sec * 1000;
    var fill = el("div", { class: "sp-timer-fill" }), num = el("span", { class: "sp-timer-n", text: sec + " s" });
    var nodo = el("div", { class: "sp-timer" }, [el("div", { class: "sp-timer-bar" }, [fill]), num]);
    dove.appendChild(nodo);
    var iv = setInterval(function () {
      if (!document.body.contains(nodo)) return clearInterval(iv);
      var resto = Math.max(0, fine - Date.now());
      fill.style.transform = "scaleX(" + (resto / (sec * 1000)).toFixed(3) + ")";
      testoSe(num, Math.ceil(resto / 1000) + " s");
      if (!resto) { clearInterval(iv); nodo.classList.add("finito"); num.textContent = "⏰ Tempo!"; suono("tempo"); }
    }, 250);
  }

  // il verdetto: martelletto, cartello della squadra e coriandoli
  // vinto: true = ho vinto io (festa), "perso" = ho perso io (un colpo lungo), altro = guardo (un colpetto);
  // facce: [{ nome, omino }] = chi ha vinto, che salta sotto il cartello
  function verdetto(ui, k, testo, vinto, facce) {
    var el = ui.t.el, colori = ["var(--o-oro)", "var(--o-oro-chiaro)", "var(--o-scuro)", "var(--n-mini)", "var(--o-oro-testo)"];   // (🌙 pezzetti accesi: lampone, arancio, bianco, giallo)
    vibra(vinto === true ? [40, 60, 40, 60, 140] : vinto === "perso" ? 110 : 25);   // il verdetto è un momento che conta (festa per chi ha vinto)
    var fila = facce && facce.length ? el("div", { class: "sp-vfacce" }, facce.slice(0, 6).map(function (x, i) {
      return el("span", { class: "sp-vfa", style: "animation-delay:" + (0.45 + i * 0.09).toFixed(2) + "s", html: avatarHtml(x.nome, x.omino) });
    })) : null;
    var nodo = el("div", { class: "sp-verdetto c" + k }, [el("div", { class: "sp-martello", text: "🔨" }), el("div", { class: "sp-vtesto", text: testo }), fila]);
    for (var i = 0; i < 22; i++) {
      nodo.appendChild(el("i", { class: "sp-cor", style: "left:" + (Math.random() * 100).toFixed(1) + "%;background:" + colori[i % 5] +
        ";animation-delay:" + (0.2 + Math.random() * 0.7).toFixed(2) + "s;animation-duration:" + (1.8 + Math.random() * 1.2).toFixed(2) + "s" }));
    }
    ui.scena.appendChild(nodo);
    suono("martello"); setTimeout(function () { suono("vittoria"); }, 350);
    setTimeout(function () { nodo.classList.add("via"); }, 2900);
    setTimeout(function () { if (nodo.parentNode) nodo.parentNode.removeChild(nodo); }, 3500);
  }
  // la classifica corta (pallini con la faccina e i punti). ominoDi(id) = l'avatar (se c'è)
  function classificaCorta(t, lista, mioId, ominoDi) {
    var box = t.el("div", { class: "sp-classi" });
    conPosizioni(lista).forEach(function (r) {
      box.appendChild(t.el("span", { class: (r.pos === 1 ? "primo" : "") + (mioId && r.id === mioId ? " tu" : "") }, [
        t.el("i", { class: "sp-cfa", html: avatarHtml(r.vero || r.nome, ominoDi ? ominoDi(r.id) : null) }),
        document.createTextNode(medaglia(r.pos) + " " + r.nome + " " + r.punti)]));
    });
    return box;
  }
  // un messaggio con la faccina grande di qualcuno (il giudice che aspetta)
  function messaggioAv(ui, nome, omino, titolo, testo) {
    var el = ui.t.el;
    ui.azione.appendChild(el("div", { class: "sp-msg sp-msgav" }, [el("span", { class: "sp-bigav", html: avatarHtml(nome, omino) }), el("b", { text: titolo }), el("span", { text: testo })]));
  }
  // 🥊 la presentazione del round (online, su tutti i telefoni insieme): il giudice e chi gioca, con le faccine grandi.
  // d: { titolo, giudice: { nome, omino }, gruppi: [{ titolo, k, persone: [{ nome, omino, capo }] }], sotto }. Si chiude da sola o col tocco
  function presenta(ui, d) {
    var el = ui.t.el, vecchia = ui.scena.querySelector(".sp-presenta");
    if (vecchia) vecchia.parentNode.removeChild(vecchia);
    var box = el("div", { class: "sp-pres-box" }, [
      el("div", { class: "sp-pres-tit", text: d.titolo }),
      el("div", { class: "sp-pres-g" }, [el("span", { class: "sp-bigav", html: avatarHtml(d.giudice.nome, d.giudice.omino) }), el("span", { text: d.giudice.nome === "Tu" ? "⚖️ Il giudice sei tu" : "⚖️ Giudice: " + d.giudice.nome })])
    ]);
    d.gruppi.forEach(function (g, i) {
      if (i === 1 && d.gruppi.length === 2) box.appendChild(el("div", { class: "sp-contro", text: "contro" }));
      box.appendChild(el("div", { class: "sp-pres-sq c" + g.k }, [el("b", { text: g.titolo }),
        el("div", { class: "sp-pres-chi" }, g.persone.map(function (p, j) {
          return el("span", { class: "sp-pres-p", style: "animation-delay:" + (0.15 + j * 0.07 + i * 0.2).toFixed(2) + "s" }, [el("span", { class: "sp-medav", html: avatarHtml(p.nome, p.omino) }), el("small", { text: (p.capo ? "👑 " : "") + p.nome })]);
        }))]));
    });
    if (d.sotto) box.appendChild(el("div", { class: "sp-pres-sotto", text: d.sotto }));
    var velo = el("div", { class: "sp-presenta", onclick: function () { chiudi(); } }, [box]);
    function chiudi() { velo.classList.add("via"); setTimeout(function () { if (velo.parentNode) velo.parentNode.removeChild(velo); }, 350); }
    ui.scena.appendChild(velo);
    setTimeout(chiudi, d.ms || 3200);
  }
  // sullo stesso telefono chi ha il nome del profilo gioca col suo avatar vero (gli altri ne hanno uno a caso, sempre uguale per nome)
  function ominoProfilo(nome) {
    try { var p = window.SGNube && SGNube.disponibile() && SGNube.profilo(); return p && p.omino && String(p.nome || "").trim().toLowerCase() === String(nome || "").trim().toLowerCase() ? p.omino : null; } catch (e) { return null; }
  }
  function avatarHtml(nome, omino) {
    var cfg = omino || ominoProfilo(nome) || (window.SGOmino && SGOmino.casuale ? SGOmino.casuale(nome) : null);
    try { return cfg && window.SGOmino ? SGOmino.svg(cfg) : ""; } catch (e) { return ""; }
  }
  function avatar(t, nome, omino) { return t.el("span", { class: "sp-av", html: avatarHtml(nome, omino) }); }
  // ✍️ la carta bianca: si scrive una carta propria (al massimo 60 lettere).
  // o: { tipo, chi: [nomi] (stesso telefono a squadre: chi la scrive) | null, onOk(testo, chi) }
  function scriviCarta(t, o) {
    if (document.querySelector(".sp-lente")) return;
    stile();
    var el = t.el, chi = o.chi && o.chi.length === 1 ? o.chi[0] : null;
    var area = el("textarea", { maxlength: String(MAX_SCRITTA), rows: "3", placeholder: o.tipo === "bonus" ? "Es. Hai un maggiordomo che ti legge nel pensiero" : "Es. …ma il maggiordomo è tua suocera" });
    var conta = el("div", { class: "sp-conta", text: "0 / " + MAX_SCRITTA });
    var ok = el("button", { class: "btn btn-primario", text: "✍️ Metti in mano", disabled: "disabled" });
    function aggiorna() {
      var s = pulisciScritta(area.value);
      conta.textContent = area.value.length + " / " + MAX_SCRITTA;
      ok.disabled = !s || (o.chi && o.chi.length > 1 && !chi);
    }
    area.addEventListener("input", aggiorna);
    var figli = [el("div", { class: "sp-lente-tit", text: o.tipo === "bonus" ? "🃏 La tua carta Bonus" : "🃏 La tua carta Malus" }),
      el("p", { class: "sp-nota-s", text: "Una sola a partita, firmata col tuo nome sul tavolo. " + (o.tipo === "bonus" ? "Qualcosa di bellissimo…" : "Il guaio che rovina tutto…") })];
    if (o.chi && o.chi.length > 1) {
      var riga = el("div", { class: "sp-chis" });
      o.chi.forEach(function (n) {
        riga.appendChild(el("button", { text: n, onclick: function (e) {
          chi = n; [].forEach.call(riga.children, function (b) { b.classList.toggle("attiva", b === e.currentTarget); }); aggiorna();
        } }));
      });
      figli.push(el("div", { class: "etichetta", style: "margin:0 0 4px", text: "Chi la scrive?" }), riga);
    }
    figli.push(area, conta);
    var box = el("div", { class: "sp-lente-box sp-scrivi" }, figli);
    function chiudi() { if (velo.parentNode) velo.parentNode.removeChild(velo); }
    ok.addEventListener("click", function () { var s = pulisciScritta(area.value); if (!s || ok.disabled) return; chiudi(); o.onOk(s, chi); });
    box.appendChild(el("div", { class: "sp-due" }, [el("button", { class: "btn btn-fantasma", text: "Annulla", onclick: chiudi }), ok]));
    var velo = el("div", { class: "sp-lente oro g-sipero sg-dal-gioco", onclick: function (e) { if (e.target === velo) chiudi(); } }, [box]);
    document.body.appendChild(velo);
    setTimeout(function () { try { area.focus(); } catch (e) {} }, 60);
  }
  function persona(t, nome) { return t.el("span", { class: "sp-pers" }, [avatar(t, nome), document.createTextNode(nome)]); }

  // =========================================================
  //  REGISTRAZIONE
  // =========================================================
  SG.registra({
    id: "sipero",
    tema: "oro",   // 🤍 Bianco e oro: tutto il gioco è chiaro (le regole di stile stanno in fondo allo stile, sotto .oro.g-sipero)
    nome: "Una Vita Perfetta… Quasi",
    icona: "🤨",
    descrizione: "Costruite la vita perfetta a colpi di Bonus… e rovinate quella degli altri coi Malus. Il giudice sceglie chi vince.",
    giocatoriMin: MIN,
    modi: [{ modo: "telefono", icona: "📱", nome: "Su questo telefono", sotto: "Vi passate il telefono: le carte restano segrete", amici: true }],
    giocatoriMax: MAX,
    postiOnline: MAX,   // posti online (10)
    ritardatari: "turno",   // chi arriva a partita cominciata guarda il round in corso ed entra dal round dopo (squadre a sorte)
    riprende: true,     // se l'host ricarica a metà partita, la partita riprende dalla stessa fase (le carte tornano alle squadre)
    riserva: true,   // online: se l'host sparisce del tutto (telefono spento), un amico porta avanti la partita
    difficolta: 2,
    // la riga "📜 Si gioca così" che gli amici leggono in saletta
    riassunto: function (imp) { return riassuntoImp(imp); },
    regole: [
      "A ogni round uno di voi fa da <b>giudice</b> (a turno: tutti lo stesso numero di volte) e gli altri si dividono <b>a sorte</b> in due squadre. Bastano 3 giocatori.",
      "Le squadre giocano a turno le carte: i <b>Bonus</b> rendono più bello il proprio scenario, i <b>Malus</b> rovinano quello avversario. Nella classica: 😇 <b>Paradiso</b> (2 Bonus), 💥 <b>Schianto</b> (2 Malus agli avversari), 🩹 <b>Rinforzo</b> (1 Bonus), 🪓 <b>Ghigliottina</b> (2 Malus finali). Si può anche comporre una sequenza personalizzata.",
      "Il tavolo si vede sempre: scegliete il Malus che incastra meglio i Bonus degli avversari. Tieni premuta una carta per leggerla in grande.",
      "👑 <b>Online ogni squadra ha un capo</b> (cambia a ogni round). Tutti toccano le carte che gli piacciono e sulla carta compare la loro faccina, anche mentre gioca l'altra squadra; poi il capo decide e tocca «Gioca». Se il tempo finisce, vanno le carte con più faccine.",
      "Poi l'<b>arringa</b>: ogni squadra convince a voce il giudice che il suo scenario, guai compresi, è il migliore da vivere (libera o a tempo).",
      "Il giudice sceglie la squadra vincente (un tocco per scegliere, uno per confermare): la luce passa da uno scenario all'altro e si ferma su chi ha vinto. Chi ne fa parte prende un punto. Poi il giudice tocca ⭐ la carta che l'ha convinto: alla fine si rivedono tutte. Vince chi ha più punti. Online chi apre la stanza può anche scegliere lui squadre e giudice, per un round solo.",
      "✋ <b>Chi arriva a partita in corso</b>, mentre si giocano le carte, sceglie la sua squadra ed entra subito (in «Ognuno per sé» entra subito se si stanno ancora scegliendo i Bonus, se no dal round dopo). Fa il giudice anche lui: la partita si allunga di un round.",
      "🙋 <b>Ognuno per sé</b> (si sceglie nelle regole): niente squadre. Ognuno ha la sua mano (4 Bonus e 3 Malus nuovi a ogni round): prima gioca <b>in segreto 2 Bonus</b> sul suo scenario, poi, visti i Bonus di tutti, <b>1 Malus sullo scenario del vicino</b> (l'app dice a chi). Gli scenari si svelano uno alla volta, ognuno difende il suo e il giudice sceglie il migliore: <b>+1 a chi l'ha presentato</b>.",
      "🃏 <b>Carta bianca</b> (accesa di partenza): una volta a partita ognuno può toccare «✍️ Scrivi tu» e scrivere una carta sua, Bonus o Malus (al massimo 60 lettere), da giocare al posto di una della mano. Sul tavolo ha il bordo d'oro e la firma. Se non la giochi nel round, si perde."
    ],

    impostazioni: function (box, dove, aiuti) {
      var el = aiuti.el;
      dove.modo = aiuti.modo || (aiuti.sala ? "online" : "telefono");
      dove.modalita = "classica";
      dove.sequenza = leggiSeqSalvata() || seqPulita(CLASSICA);
      dove.giri = 1;
      dove.round = 5;
      dove.arringa = 0;
      dove.squadre = "sorte";
      dove.si = "squadre";   // «🙋 Ognuno per sé» = "solo"
      dove.bianca = 1;       // «🃏 Carta bianca»: accesa di partenza
      var online = dove.modo === "online";

      function rigaChip(valori, get, set, colonne) {
        var row = el("div", { class: "modo-griglia", style: colonne ? "grid-template-columns:repeat(" + colonne + ",1fr)" : "" });
        valori.forEach(function (v) {
          row.appendChild(el("button", { class: "modo-chip" + (get() === v.val ? " attiva" : ""), style: v.ic ? "" : "justify-content:center", onclick: function () {
            set(v.val);
            [].forEach.call(row.children, function (c, j) { c.className = "modo-chip" + (valori[j].val === v.val ? " attiva" : ""); });
          } }, [v.ic ? el("span", { class: "mi", text: v.ic }) : null,
            el("div", {}, [el("div", { class: "mt", text: v.txt }), v.sotto ? el("div", { class: "ms", text: v.sotto }) : null])]));
        });
        return row;
      }
      if (online) box.appendChild(el("p", { class: "modulo-nota", text: "Queste regole le ritrovi nella saletta (⚙️ Regole): puoi cambiarle anche con gli amici già dentro." }));

      // --- si gioca: a squadre o ognuno per sé ---
      var soloNo = el("div"), squadreBox = el("div");   // (le fasi e le squadre valgono solo a squadre)
      box.appendChild(el("div", { class: "etichetta", text: "Si gioca" }));
      box.appendChild(rigaChip([
        { val: "squadre", ic: "👥", txt: "A squadre", sotto: "Due squadre, carte a turno" },
        { val: "solo", ic: "🙋", txt: "Ognuno per sé", sotto: "Ognuno il suo scenario" }
      ], function () { return dove.si; }, function (v) { dove.si = v; soloNo.hidden = squadreBox.hidden = (v === "solo"); giriBox.hidden = v !== "solo"; }));
      box.appendChild(soloNo);

      // --- le fasi ---
      soloNo.appendChild(el("div", { class: "etichetta", text: "Le fasi" }));
      var pannello = el("div", { hidden: "hidden" });
      soloNo.appendChild(rigaChip([
        { val: "classica", ic: "📜", txt: "Classica", sotto: "Paradiso, Schianto, Rinforzo, Ghigliottina" },
        { val: "custom", ic: "🎛️", txt: "Personalizzata", sotto: "Le componi tu" }
      ], function () { return dove.modalita; }, function (v) { dove.modalita = v; pannello.hidden = (v !== "custom"); }));

      var nuovo = { tipo: "bonus", n: 2, bers: "se" };
      pannello.appendChild(el("div", { class: "etichetta", text: "La tua sequenza di fasi" }));
      var listaFasi = el("div", { style: "display:flex;flex-direction:column;gap:6px;margin-bottom:8px" });
      pannello.appendChild(listaFasi);
      function cambiata() { salvaSeq(dove.sequenza); ridisegnaFasi(); }
      function ridisegnaFasi() {
        svuota(listaFasi);
        if (!dove.sequenza.length) listaFasi.appendChild(el("p", { class: "modulo-nota", style: "color:#ffd43b", text: "Nessuna fase: aggiungine almeno una qui sotto, se no si gioca la Classica." }));
        dove.sequenza.forEach(function (f, i) {
          var nf = nomeFase(dove.sequenza, i);
          listaFasi.appendChild(el("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.06)" }, [
            el("span", { text: (i + 1) + ") " + nf.ic + " " + nf.nome + ": " + descriviFase(f) }),
            el("button", { class: "togli", text: "×", "aria-label": "Togli la fase", onclick: function () { dove.sequenza.splice(i, 1); cambiata(); } })
          ]));
        });
      }
      pannello.appendChild(el("div", { class: "etichetta", style: "margin:6px 0 4px", text: "Tipo di carta" }));
      pannello.appendChild(rigaChip([{ val: "bonus", txt: "Bonus" }, { val: "malus", txt: "Malus" }], function () { return nuovo.tipo; }, function (v) { nuovo.tipo = v; }));
      pannello.appendChild(el("div", { class: "etichetta", style: "margin:6px 0 4px", text: "Quante carte" }));
      pannello.appendChild(rigaChip([{ val: 1, txt: "1" }, { val: 2, txt: "2" }, { val: 3, txt: "3" }], function () { return nuovo.n; }, function (v) { nuovo.n = v; }, 3));
      pannello.appendChild(el("div", { class: "etichetta", style: "margin:6px 0 4px", text: "Su chi" }));
      pannello.appendChild(rigaChip([{ val: "se", txt: "Su di sé" }, { val: "avv", txt: "Agli avversari" }], function () { return nuovo.bers; }, function (v) { nuovo.bers = v; }));
      pannello.appendChild(el("div", { style: "display:flex;gap:8px;margin-top:8px" }, [
        el("button", { class: "btn btn-fantasma", style: "flex:1", text: "＋ Aggiungi", onclick: function () {
          if (dove.sequenza.length >= 12) return;
          dove.sequenza.push({ tipo: nuovo.tipo, n: nuovo.n, bers: nuovo.bers }); cambiata();
        } }),
        el("button", { class: "btn btn-fantasma", style: "flex:1", text: "↺ Come la Classica", onclick: function () { dove.sequenza = seqPulita(CLASSICA); cambiata(); } })
      ]));
      ridisegnaFasi();
      soloNo.appendChild(pannello);

      // --- quanti round ---
      var giriBox = el("div"); box.appendChild(giriBox);   // (a squadre si sceglie quanti round, qui sotto: online e sullo stesso telefono)
      giriBox.hidden = dove.si !== "solo";
      giriBox.appendChild(el("div", { class: "etichetta", text: "Quanto si gioca" }));
      giriBox.appendChild(rigaChip([{ val: 1, txt: "1 giro" }, { val: 2, txt: "2 giri" }, { val: 3, txt: "3 giri" }], function () { return dove.giri; }, function (v) { dove.giri = v; }, 3));
      giriBox.appendChild(el("p", { class: "modulo-nota", text: "In un giro ognuno fa il giudice una volta: con 4 giocatori, 1 giro = 4 round." }));
      {
        box.appendChild(squadreBox);
        squadreBox.appendChild(el("div", { class: "etichetta", text: "Quanti round" }));
        squadreBox.appendChild(rigaChip([{ val: 3, txt: "3 round" }, { val: 5, txt: "5 round" }, { val: 7, txt: "7 round" }], function () { return dove.round; }, function (v) { dove.round = v; }, 3));
        squadreBox.appendChild(el("p", { class: "modulo-nota", text: online ? "Prima di ogni round ognuno sceglie se fare il giudice o in che squadra stare." : "Prima di ogni round chi ha il telefono mette il giudice e le squadre." }));
      }

      // --- l'arringa ---
      box.appendChild(el("div", { class: "etichetta", text: "L'arringa" }));
      box.appendChild(rigaChip([{ val: 0, txt: "Libera" }, { val: 60, txt: "60 secondi" }, { val: 90, txt: "90 secondi" }], function () { return dove.arringa; }, function (v) { dove.arringa = v; }, 3));

      // --- 🃏 la carta bianca ---
      box.appendChild(el("div", { class: "etichetta", text: "🃏 Carta bianca" }));
      box.appendChild(rigaChip([{ val: 1, txt: "Sì" }, { val: 0, txt: "No" }], function () { return dove.bianca; }, function (v) { dove.bianca = v; }, 2));
      box.appendChild(el("p", { class: "modulo-nota", text: "Una volta a partita ognuno può scrivere una carta sua, Bonus o Malus, al posto di una della mano." }));

    },

    avvia: function (t) {
      var dati = window.SG_SIPERO || { bonus: [], malus: [] };
      if (dati.bonus.length < 20 || dati.malus.length < 20) return niente(t, "Mancano le carte del gioco.");
      if (t.linkParams && t.linkParams.stanza) return ospiteSipero(t, t.linkParams.stanza);
      if ((t.impostazioni || {}).modo === "online") return hostSipero(t, dati);
      if ((t.giocatori || []).length < MIN) return niente(t, "Servono almeno 3 giocatori: un giudice e due squadre.");
      avviaLocale(t, dati);
    }
  });

  function niente(t, testo) {
    var s = t.schermata({ icona: "🤨", titolo: "Non si può giocare", indietro: t.esci });
    s._contenuto.appendChild(t.el("p", { text: testo }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Ok", onclick: t.esci }));
    t.mostra(s);
  }

  // =========================================================
  //  STESSO TELEFONO
  // =========================================================
  function avviaLocale(t, dati) {
    var imp = t.impostazioni || {};
    var giri = [1, 2, 3].indexOf(+imp.giri) >= 0 ? +imp.giri : 1;
    var sq = seqDa(imp);
    var punti = {}; t.giocatori.forEach(function (n) { punti[n] = 0; });
    var st = {
      giocatori: t.giocatori.slice(), punti: punti, seq: sq.seq, avvisoSeq: sq.vuota,
      totale: t.giocatori.length * giri, round: 0, arringa: +imp.arringa || 0,
      mazzi: { bonus: nuovoMazzo(t, dati.bonus, "bonus"), malus: nuovoMazzo(t, dati.malus, "malus") }, coppie: {},
      sessione: nuovaSessione(), statGiocatori: Object.create(null),
      solo: siDa(imp) === "solo", bianca: biancaDa(imp), bianche: {}, firme: {},   // 🙋 ognuno per sé; 🃏 chi ha già scritto la sua carta
      stelle: []   // ⭐ le carte che hanno convinto il giudice, round per round
    };
    if (!st.solo) st.totale = roundDa(imp);   // 👥 a squadre: 3, 5 o 7 round (23 nov 2026, come online)
    st.esci = function () { t.conferma("Uscire dalla partita?", "I punti di questa partita si perdono.", "Esci", function () { chiudiLente(); t.esci(); }); };
    iniziaRound(t, st);
  }
  // il tasto «✍️ Scrivi tu» sotto la mano (stesso telefono): chi = chi può scriverla (chi non l'ha ancora usata)
  function tastoScriviLocale(t, st, ui, tipo, chi, mano, ridisegna) {
    if (!st.bianca || !chi.length) return null;
    return t.el("button", { class: "btn sp-scrivi-b", text: "✍️ Scrivi tu", onclick: function () {
      scriviCarta(t, { tipo: tipo, chi: chi, onOk: function (testo, nome) {
        nome = nome || chi[0];
        if (st.bianche[nome]) return;
        st.bianche[nome] = 1; st.firme[testo] = nome;
        if (mano.indexOf(testo) < 0) mano.push(testo);
        ridisegna(testo);
      } });
    } });
  }
  function membri(st, k) { return st.squadre[k].join(", "); }
  function titoloColonna(k, nomi) { return emoSq(k) + " " + (nomi || nomeSq(k)); }   // (senza la parola «Squadra»: sui telefoni stretti si tagliavano i nomi)

  function iniziaRound(t, st) {
    st.round += 1;
    if (st.round > st.totale) return finePartita(t, st);
    var n = st.giocatori.length;
    if (st.solo) { st.giudice = st.giocatori[(st.round - 1) % n]; return iniziaRoundSolo(t, st); }
    // 👥 (23 nov 2026, il proprietario: «chi ha il telefono in mano mette le squadre… uno solo clicca e sposta tutti»)
    ruoliLocale(t, st, function (giud, squadre) { st.giudice = giud; st.squadre = squadre; roundSquadreLocale(t, st); });
  }
  // 👥 sullo stesso telefono, prima di ogni round: chi ha il telefono tocca un nome e poi la colonna dove va (⚖️ Giudice,
  // 🟥 Squadra 1, 🟦 Squadra 2), poi «▶ Si parte». Le squadre di prima restano segnate, il giudice no.
  // Chi resta da sistemare va nella squadra più piccola; senza giudice lo sceglie il gioco tra chi l'ha fatto meno volte.
  function ruoliLocale(t, st, poi) {
    stile();
    var el = t.el, sc = {}, sel = null, k = st.round + "|" + st.sessione;
    (st.squadre || [[], []]).forEach(function (l, q) { l.forEach(function (nome) { if (st.giocatori.indexOf(nome) >= 0) sc[nome] = q; }); });
    var s = t.schermata({}); s.classList.add("sp-piena");
    var barra = el("div", { class: "sp-barra" }, [el("button", { class: "sp-esci", "aria-label": "Esci", text: "‹", onclick: st.esci }),
      el("div", { class: "sp-fase" }, [el("b", { text: "Round " + st.round + " di " + st.totale }), el("small", { text: "Chi fa cosa?" })])]);
    var guida = el("p", { class: "sp-rc-guida" });
    var liberi = el("div", { class: "sp-rcl-liberi", role: "button", onclick: function () { if (sel == null) return; delete sc[sel]; sel = null; vibra(12); disegna(); } });
    var cols = ["g", 0, 1].map(function (r) {
      var c = { r: r, lista: el("div", { class: "sp-rc-lista" }), stato: el("div", { class: "sp-rc-stato" }) };
      c.nodo = el("div", { class: "sp-rc " + (r === "g" ? "cg" : "c" + r), role: "button", onclick: function () {
        if (sel == null) return;
        if (r === "g") Object.keys(sc).forEach(function (n) { if (sc[n] === "g" && n !== sel) delete sc[n]; });   // (un giudice solo: quello di prima torna da sistemare)
        sc[sel] = r; sel = null; vibra(15); disegna();
      } }, [el("div", { class: "sp-rc-testa" }, [el("span", { class: "sp-rc-ic", text: r === "g" ? "⚖️" : emoSq(r) }), el("span", { text: r === "g" ? "Giudice" : nomeSq(r) })]), c.lista, c.stato]);
      return c;
    });
    var nota = el("div", { class: "sp-nota sp-rc-nota" });
    var parti = el("button", { class: "btn btn-primario", text: "▶ Si parte", onclick: function () {
      var p = piano(); if (!p.ok) return;
      vibra(20); poi(p.giud, p.squadre);
    } });
    s._contenuto.appendChild(el("div", { class: "sp-scena sp-ruoli-sc" }, [barra, guida, liberi, el("div", { class: "sp-rc-cols" }, cols.map(function (c) { return c.nodo; })),
      el("div", { class: "sp-piede" }, [nota, parti])]));
    function chip(nome) {
      return el("button", { type: "button", class: "sp-rc-p" + (sel === nome ? " sel" : ""), onclick: function (e) { e.stopPropagation(); sel = sel === nome ? null : nome; vibra(12); disegna(); } },
        [el("span", { class: "sp-av", html: avatarHtml(nome, ominoProfilo(nome)) }), el("span", { text: nome })]);
    }
    function piano() {
      var a = {}, c = [0, 0], giud = null;
      st.giocatori.forEach(function (n) { if (sc[n] === "g") giud = n; else if (sc[n] === 0 || sc[n] === 1) { a[n] = sc[n]; c[sc[n]]++; } });
      var auto = null, liberi = st.giocatori.filter(function (n) { return sc[n] == null; });
      if (!giud) {   // il gioco sceglie il giudice tra chi l'ha fatto meno volte (prima chi è da sistemare), senza lasciare vuota una squadra
        var cand = st.giocatori.slice().sort(function (x, y) { return (statPersona(st, x).roundGiudice - statPersona(st, y).roundGiudice) || ((sc[x] == null ? 0 : 1) - (sc[y] == null ? 0 : 1)) || (st.giocatori.indexOf(x) - st.giocatori.indexOf(y)); });
        for (var i = 0; i < cand.length && !giud; i++) {
          var x = cand[i], cc = c.slice(); if (sc[x] === 0 || sc[x] === 1) cc[sc[x]]--;
          var resto = liberi.filter(function (n) { return n !== x; }).length;
          if (cc[0] + cc[1] + resto >= 2 && (cc[0] || resto) && (cc[1] || resto > (cc[0] ? 0 : 1))) giud = x;
        }
        giud = giud || cand[0]; auto = giud;
        if (a[giud] != null) { c[a[giud]]--; delete a[giud]; }
      }
      st.giocatori.forEach(function (n) { if (n !== giud && a[n] == null) { var q = c[0] <= c[1] ? 0 : 1; a[n] = q; c[q]++; } });
      var squadre = [[], []]; st.giocatori.forEach(function (n) { if (n !== giud) squadre[a[n]].push(n); });
      if (!squadre[0].length || !squadre[1].length) return { ok: false, perche: "La " + nomeSq(squadre[0].length ? 1 : 0) + " è vuota: mettici qualcuno." };
      return { ok: true, giud: giud, squadre: squadre, auto: auto, liberi: liberi.filter(function (n) { return n !== giud; }).length > 0 };
    }
    function disegna() {
      guida.textContent = sel ? "Ora tocca dove va " + sel : "👆 Tocca un nome, poi dove va: giudice o una squadra";
      svuota(liberi);
      var da = st.giocatori.filter(function (n) { return sc[n] == null; });
      liberi.classList.toggle("meta", sel != null && sc[sel] != null);
      if (da.length) { liberi.appendChild(el("span", { class: "sp-rcl-t", text: "Da sistemare:" })); da.forEach(function (n) { liberi.appendChild(chip(n)); }); }
      else liberi.appendChild(el("span", { class: "sp-rcl-t", text: sel ? "Tocca qui per toglierlo dalla sua colonna" : "✓ Tutti sistemati" }));
      cols.forEach(function (c) {
        svuota(c.lista);
        st.giocatori.forEach(function (n) { if (sc[n] === c.r) c.lista.appendChild(chip(n)); });
        c.nodo.classList.toggle("mio", sel != null && sc[sel] === c.r);
        c.stato.textContent = sel ? (sc[sel] === c.r ? "È qui" : "Tocca per metterlo qui") : (c.r === "g" ? "Uno solo" : "");
      });
      var p = piano();
      nota.className = "sp-nota sp-rc-nota" + (p.ok ? "" : " no");
      nota.textContent = p.ok ? [p.auto ? "⚖️ Se non lo mettete, il giudice lo fa " + p.auto : "", p.liberi ? "Chi resta da sistemare va nella squadra più piccola" : ""].filter(Boolean).join(" · ") || "Tutto pronto: il telefono si passa per giocare le carte" : p.perche;
      parti.disabled = !p.ok;
    }
    disegna();
    t.mostra(s);
  }
  function roundSquadreLocale(t, st) {
    var el = t.el;
    st.giocatori.forEach(function (nome) { statPersona(st, nome).roundGiocati++; });
    statPersona(st, st.giudice).roundGiudice++;
    st.scen = scenVuoti();
    st.mani = nuoveMani(t, st.mazzi, st.scen);
    st.passi = creaPassi(st.seq, (st.round - 1) % 2);
    st.passo = 0;
    // (23 nov 2026, il proprietario sulla scelta C: «toglila, non ha senso»: dopo «Si parte» niente schermata del round
    //  con giudice e squadre, già viste nella schermata dei ruoli: si va dritti al primo passaggio del telefono)
    prossimoPasso(t, st);
  }

  function prossimoPasso(t, st) {
    if (st.passo >= st.passi.length) return alCentro(t, st);
    var p = st.passi[st.passo];
    t.passaA(emoSq(p.sq) + " " + nomeSq(p.sq) + " (" + membri(st, p.sq) + ")", function () { sceltaLocale(t, st, p); });
  }
  function colonneLocale(ui, st, d) {
    [0, 1].forEach(function (k) {
      aggiornaColonna(ui.cols[k], { titolo: titoloColonna(k, membri(st, k)), voci: st.scen[k].voci, turno: d.turno === k, mia: d.mia === k, vince: d.vince === k, anima: d.anima, ritardo: d.ritardo, base: d.base && d.base[k] });
    });
  }

  function sceltaLocale(t, st, p) {
    var el = t.el, f = p.f, nf = nomeFase(st.seq, p.fi);
    var ui = creaScena(t, st.esci);
    barra(ui, nf.ic + " " + nf.nome, "Round " + st.round + " di " + st.totale + " · fase " + (p.fi + 1) + " di " + st.seq.length, "⚖️ " + st.giudice, { nome: st.giudice });
    colonneLocale(ui, st, { turno: p.sq, mia: p.sq, anima: false });
    var mano = st.mani[p.sq], altro = f.tipo === "bonus" ? "malus" : "bonus";
    var n = Math.min(f.n, mano[f.tipo].length);
    testoSe(ui.turno, emoSq(p.sq) + " Tocca a voi: " + istruzione({ tipo: f.tipo, n: n, bers: f.bers }, p.sq, true));
    var bOk, m;
    // la mano (si rifà solo lei quando arriva la carta bianca appena scritta, già scelta)
    function disegnaMano(presel) {
      svuota(ui.azione); svuota(ui.piede);
      bOk = el("button", { class: "btn btn-primario", text: "Conferma ▶", disabled: "disabled", onclick: conferma });
      m = creaMano(t, { carte: mano[f.tipo], tipo: f.tipo, quante: n, altre: { tipo: altro, carte: mano[altro] }, firme: st.firme, presel: presel ? [presel] : null,
        onCambia: function (sel) { bOk.disabled = sel.length !== n; } });
      ui.azione.appendChild(m.nodo);
      var scr = tastoScriviLocale(t, st, ui, f.tipo, st.squadre[p.sq].filter(function (x) { return !st.bianche[x]; }), mano[f.tipo], disegnaMano);
      if (scr && !mano[f.tipo].some(function (c) { return st.firme[c]; })) ui.piede.appendChild(scr);
      ui.piede.appendChild(bOk);
      bOk.disabled = m.sel().length !== n;
      m.adatta();
    }
    disegnaMano(null);
    function conferma() {
      var sel = m.sel(); if (sel.length !== n || bOk._fatto) return;
      bOk._fatto = true; bOk.disabled = true;
      var bers = f.bers === "se" ? p.sq : altra(p.sq);
      sel.forEach(function (c) { st.scen[bers].voci.push(voce(f.tipo, c, st.firme)); });
      st.squadre[p.sq].forEach(function (nome) { statPersona(st, nome)[f.tipo === "bonus" ? "carteBonus" : "carteMalus"] += sel.length; });
      mano[f.tipo] = mano[f.tipo].filter(function (c) { return sel.indexOf(c) < 0; });
      riempi(t, mano[f.tipo], st.mazzi[f.tipo], inUsoDa(st.mani, st.scen));
      st.passo += 1;
      // le carte volano sul tavolo, poi si passa il telefono
      colonneLocale(ui, st, { turno: p.sq, mia: p.sq });
      suono(f.tipo);
      svuota(ui.azione); svuota(ui.piede);
      messaggio(ui, f.tipo === "bonus" ? "✨" : "💥", "Carte sul tavolo!");
      setTimeout(function () { if (document.body.contains(ui.s)) prossimoPasso(t, st); }, 1100);
    }
  }

  function alCentro(t, st) {
    var el = t.el;
    var s = t.schermata({ indietro: st.esci });
    s._contenuto.appendChild(el("div", { class: "sp-centro" }, [
      el("div", { class: "sp-grande", text: "📱" }),
      el("b", { text: "Mettete il telefono al centro del tavolo" }),
      el("p", { text: "Tutte le carte sono giocate: ora si scoprono i due scenari, poi l'arringa." })
    ]));
    s._piede.appendChild(el("button", { class: "btn btn-primario", text: "Scopriamo gli scenari 🎭", onclick: function () { rivelaLocale(t, st); } }));
    t.mostra(s);
  }

  function rivelaLocale(t, st) {
    var ui = creaScena(t, st.esci);
    largo(ui, true);
    barra(ui, "🎭 Gli scenari", "Round " + st.round + " di " + st.totale, "⚖️ " + st.giudice, { nome: st.giudice });
    var passo = 0.45, n0 = st.scen[0].voci.length;
    colonneLocale(ui, st, { ritardo: passo, base: [0, n0 * passo] });
    adattaTavolo(ui);
    // un suono per ogni carta che si scopre
    st.scen[0].voci.concat(st.scen[1].voci).forEach(function (v, i) {
      setTimeout(function () { if (document.body.contains(ui.s)) suono(v.tipo); }, Math.round(i * passo * 1000) + 150);
    });
    arringaLocale(t, st, ui, 0);
  }

  function arringaLocale(t, st, ui, k) {
    var el = t.el;
    colonneLocale(ui, st, { turno: k });
    testoSe(ui.turno, "🎤 " + emoSq(k) + " " + nomeSq(k) + " (" + membri(st, k) + "): convincete il giudice!");
    svuota(ui.azione); svuota(ui.piede);
    if (st.arringa) mettiTimer(t, ui.azione, st.arringa);
    ui.piede.appendChild(el("button", { class: "btn btn-primario", text: k === 0 ? "Tocca alla " + nomeSq(1) + " ▶" : "Al verdetto ⚖️",
      onclick: function () { if (k === 0) arringaLocale(t, st, ui, 1); else giudizioLocale(t, st, ui); } }));
    adattaTavolo(ui);
  }

  function giudizioLocale(t, st, ui) {
    var el = t.el;
    colonneLocale(ui, st, {});
    testoSe(ui.turno, "⚖️ " + st.giudice + ", quale scenario è il migliore da vivere?");
    svuota(ui.azione); svuota(ui.piede);
    // un tocco sceglie, il secondo conferma; poi la luce passa da una squadra all'altra e si ferma su chi ha vinto
    var bb = [];
    [0, 1].forEach(function (k) {
      var lab = el("span", { text: emoSq(k) + " " + nomeSq(k) });
      var b = el("button", { class: "btn sp-vota c" + k, onclick: function () {
        if (b.disabled) return;
        if (!b.classList.contains("conferma")) {
          bb.forEach(function (x) { x.b.classList.remove("conferma"); testoSe(x.lab, emoSq(x.k) + " " + nomeSq(x.k)); });
          b.classList.add("conferma"); testoSe(lab, "✅ Confermi?"); vibra(12); return;
        }
        bb.forEach(function (x) { x.b.disabled = true; });
        st.squadre[k].forEach(function (m) { st.punti[m] = (st.punti[m] || 0) + 1; statPersona(st, m).roundVinti++; });
        svuota(ui.piede); testoSe(ui.turno, "🥁 Il giudice ha deciso…");
        luce(ui.cols.map(function (c) { return c.nodo; }), k, SUSPENSE, function () { if (document.body.contains(ui.s)) esitoLocale(t, st, ui, k); });
      } }, [lab]);
      bb.push({ b: b, lab: lab, k: k });
      ui.piede.appendChild(b);
    });
    adattaTavolo(ui);
  }

  function esitoLocale(t, st, ui, k) {
    var el = t.el;
    colonneLocale(ui, st, { vince: k });
    testoSe(ui.turno, "🏅 Il round va alla " + nomeSq(k) + ": +1 a " + membri(st, k) + "!");
    svuota(ui.azione); svuota(ui.piede);
    stellaLocale(t, st, ui, ui.cols[k], st.scen[k].voci, st.squadre[k]);
    ui.azione.appendChild(classificaCorta(t, st.giocatori.map(function (nome) { return { id: nome, nome: nome, punti: st.punti[nome] || 0 }; })));
    adattaTavolo(ui);
    verdetto(ui, k, "Vince la " + nomeSq(k) + "!", true, st.squadre[k].map(function (n) { return { nome: n }; }));
    var ultimo = st.round >= st.totale;
    ui.piede.appendChild(el("button", { class: "btn btn-primario", text: ultimo ? "Classifica finale 🏆" : "Prossimo round ▶",
      onclick: function () { chiudiLente(); iniziaRound(t, st); } }));
    adattaTavolo(ui);   // (col tasto in fondo le carte hanno meno posto: si rimisurano)
  }
  // ⭐ sullo stesso telefono: il giudice tocca la carta che l'ha convinto (sullo scenario che ha vinto)
  function stellaLocale(t, st, ui, col, voci, chi) {
    var avv = t.el("div", { class: "sp-avviso", text: "⭐ " + st.giudice + ", tocca la carta che ti ha convinto" });
    ui.azione.appendChild(avv);
    scegliStella(col, function (i) {
      var v = voci[i]; if (!v) return;
      segnaStella(col, i);
      st.stelle.push({ testo: v.testo, tipo: v.tipo, di: v.di || null, r: st.round, giudice: st.giudice, chi: chi.slice() });
      avv.textContent = "⭐ La stella segna la carta che ha convinto " + st.giudice;
    });
  }

  // =========================================================
  //  🙋 OGNUNO PER SÉ — pezzi comuni e stesso telefono
  // =========================================================
  // chi presenta: tutti tranne il giudice, a partire da chi gli siede dopo
  function presDopo(lista, giudice) {
    var i = lista.indexOf(giudice);
    return lista.slice(i + 1).concat(lista.slice(0, Math.max(0, i))).filter(function (x) { return x !== giudice; });
  }
  // lo scenario di uno sul palco. d: { id, nome, omino, titolo, voci, vince, anima, ritardo }
  function mostraScheda(ui, d) {
    ui.scheda.nodo.hidden = false;
    return aggiornaColonna(ui.scheda, { titolo: d.titolo, voci: d.voci, vince: d.vince, turno: d.turno, anima: d.anima, ritardo: d.ritardo, chiave: d.id,
      avatar: { k: d.id + "|" + (d.omino ? 1 : 0), nome: d.nome, omino: d.omino } });
  }
  function nascondiScheda(ui) { ui.scheda.nodo.hidden = true; }
  // le linguette per sfogliare gli scenari (verdetto): si rifanno solo se cambia chi presenta
  function linguette(ui, pres, nomeDi, attivo, vince, onTocca) {
    var el = ui.t.el, sig = pres.map(nomeDi).join("|") + "#" + (vince || "");
    ui.tab.hidden = false;
    if (ui.tabSig !== sig) {
      ui.tabSig = sig; svuota(ui.tab);
      pres.forEach(function (id) {
        ui.tab.appendChild(el("button", { "data-id": id, class: id === vince ? "vince" : "", text: (id === vince ? "🏅 " : "") + nomeDi(id), onclick: function () { onTocca(id); } }));
      });
    }
    ui.tabOn = onTocca;
    [].forEach.call(ui.tab.children, function (b) { b.classList.toggle("attiva", b.getAttribute("data-id") === attivo); });
  }
  function suoniScheda(ui, voci, passo) {
    voci.forEach(function (v, i) { setTimeout(function () { if (document.body.contains(ui.s)) suono(v.tipo); }, Math.round(i * passo * 1000) + 150); });
  }

  function iniziaRoundSolo(t, st) {
    var el = t.el, R = st.R = roundSolo(t, st.mazzi, st.giudice, presDopo(st.giocatori, st.giudice));
    st.giocatori.forEach(function (nome) { statPersona(st, nome).roundGiocati++; });
    statPersona(st, st.giudice).roundGiudice++;
    stile();
    var s = t.schermata({ icona: "🙋", titolo: "Round " + st.round + " di " + st.totale, indietro: st.esci });
    var box = el("div", { class: "sp-round" });
    box.appendChild(el("div", { class: "sp-giudbox" }, [avatar(t, st.giudice), el("span", { text: "⚖️ Giudice: " + st.giudice })]));
    var rov = el("div", { class: "sp-rovina" });
    R.pres.forEach(function (id) {
      rov.appendChild(el("span", { class: "sp-chi" }, [persona(t, id)]));
      rov.appendChild(el("span", { text: "💥→" }));
      rov.appendChild(el("span", { class: "sp-chi" }, [persona(t, R.bers[id])]));
    });
    box.appendChild(el("div", { class: "sp-sqbox cs", style: "--sq:var(--o-oro-testo)" }, [el("b", { text: "🙋 Ognuno per sé · chi rovina chi" }), rov]));
    box.appendChild(el("p", { class: "modulo-nota", style: "text-align:center;margin:0", text: "Passatevi il telefono: prima ognuno sceglie in segreto 2 Bonus per il suo scenario, poi 1 Malus per lo scenario del vicino." }));
    s._contenuto.appendChild(box);
    s._piede.appendChild(el("button", { class: "btn btn-primario", text: "Via ▶", onclick: function () { turnoSolo(t, st, 0); } }));
    t.mostra(s);
  }
  function turnoSolo(t, st, i) {
    var R = st.R;
    if (i >= R.pres.length) {
      if (R.passo === "bonus") { R.passo = "malus"; R.fatti = {}; return turnoSolo(t, st, 0); }
      return alCentroSolo(t, st);
    }
    t.passaA(R.pres[i], function () { sceltaSoloLocale(t, st, i); });
  }
  function sceltaSoloLocale(t, st, i) {
    var el = t.el, R = st.R, id = R.pres[i], tipo = R.passo, bonus = tipo === "bonus", vic = R.bers[id];
    var ui = creaScena(t, st.esci, true);
    barra(ui, bonus ? "😇 I tuoi Bonus" : "💥 Il tuo Malus", "Round " + st.round + " di " + st.totale + " · tocca a " + id, "⚖️ " + st.giudice, { nome: st.giudice });
    if (!bonus) mostraScheda(ui, { id: vic, nome: vic, titolo: "💥 Lo scenario di " + vic, voci: vociSolo(R, vic, false), anima: false });
    var n = quanteSolo(R, id), mano = R.mani[id], bOk, m;
    testoSe(ui.turno, bonus ? "😇 " + id + ", scegli " + n + " Bonus per il tuo scenario (in segreto)" : "💥 " + id + ", rovina lo scenario di " + vic + ": scegli 1 Malus");
    function disegnaMano(presel) {
      svuota(ui.azione); svuota(ui.piede);
      bOk = el("button", { class: "btn btn-primario", text: "Conferma ▶", disabled: "disabled", onclick: conferma });
      m = creaMano(t, { carte: mano[tipo], tipo: tipo, quante: n, altre: bonus ? { tipo: "malus", carte: mano.malus } : null, firme: st.firme, presel: presel ? [presel] : null,
        onCambia: function (sel) { bOk.disabled = sel.length !== n; } });
      ui.azione.appendChild(m.nodo);
      var scr = tastoScriviLocale(t, st, ui, tipo, st.bianche[id] ? [] : [id], mano[tipo], disegnaMano);
      if (scr) ui.piede.appendChild(scr);
      ui.piede.appendChild(bOk);
      bOk.disabled = m.sel().length !== n;
      m.adatta(); adattaTavolo(ui);
    }
    disegnaMano(null);
    function conferma() {
      var sel = m.sel(); if (sel.length !== n || bOk._fatto) return;
      if (!giocaSolo(R, id, sel, st.firme, function (x) { return x; })) return;
      bOk._fatto = true; bOk.disabled = true;
      statPersona(st, id)[bonus ? "carteBonus" : "carteMalus"] += sel.length;
      if (!bonus) mostraScheda(ui, { id: vic, nome: vic, titolo: "💥 Lo scenario di " + vic, voci: vociSolo(R, vic, true) });
      suono(tipo);
      svuota(ui.azione); svuota(ui.piede);
      messaggio(ui, bonus ? "✨" : "💥", bonus ? "Bonus giocati: restano segreti fino allo svelamento!" : "Malus piazzato: si scopre quando " + vic + " presenta!");
      setTimeout(function () { if (document.body.contains(ui.s)) turnoSolo(t, st, i + 1); }, 1100);
    }
  }
  function alCentroSolo(t, st) {
    var el = t.el, s = t.schermata({ indietro: st.esci });
    s._contenuto.appendChild(el("div", { class: "sp-centro" }, [
      el("div", { class: "sp-grande", text: "📱" }),
      el("b", { text: "Mettete il telefono al centro del tavolo" }),
      el("p", { text: "Tutti hanno giocato: gli scenari si scoprono uno alla volta, coi Malus. Ognuno difende il suo davanti al giudice!" })
    ]));
    s._piede.appendChild(el("button", { class: "btn btn-primario", text: "Scopriamo gli scenari 🎭", onclick: function () { svelaSoloLocale(t, st, null, 0); } }));
    t.mostra(s);
  }
  function svelaSoloLocale(t, st, ui, i) {
    var el = t.el, R = st.R, id = R.pres[i], n = R.pres.length;
    if (!ui) ui = creaScena(t, st.esci, true);
    largo(ui, true);
    R.mostra = i;
    barra(ui, "🎭 Gli scenari", "Round " + st.round + " di " + st.totale + " · scenario " + (i + 1) + " di " + n, "⚖️ " + st.giudice, { nome: st.giudice });
    var voci = vociSolo(R, id, true);
    mostraScheda(ui, { id: id, nome: id, titolo: "🎭 Lo scenario di " + id, voci: voci, ritardo: 0.45, turno: true });
    suoniScheda(ui, voci, 0.45);
    testoSe(ui.turno, "🎤 " + id + ", convinci il giudice!");
    svuota(ui.azione); svuota(ui.piede);
    if (st.arringa) mettiTimer(t, ui.azione, st.arringa);
    ui.piede.appendChild(el("button", { class: "btn btn-primario", text: i < n - 1 ? "Prossimo scenario ▶" : "Al verdetto ⚖️", onclick: function () {
      chiudiLente();
      if (i < n - 1) svelaSoloLocale(t, st, ui, i + 1); else giudizioSoloLocale(t, st, ui);
    } }));
    adattaTavolo(ui);
  }
  function giudizioSoloLocale(t, st, ui) {
    var el = t.el, R = st.R, vede = R.pres[0];
    barra(ui, "⚖️ Il verdetto", "Round " + st.round + " di " + st.totale, "⚖️ " + st.giudice, { nome: st.giudice });
    testoSe(ui.turno, "⚖️ " + st.giudice + ", quale scenario è il migliore da vivere?");
    svuota(ui.azione); svuota(ui.piede);
    var bSc = el("button", { class: "btn btn-primario", onclick: function () {
      if (bSc._fatto) return; bSc._fatto = true; chiudiLente();
      // 🥁 la luce passa da un nome all'altro e si ferma su chi ha vinto
      var chi = vede; svuota(ui.piede); nascondiScheda(ui); testoSe(ui.turno, "🥁 Il giudice ha deciso…");
      ui.tabSig = null; linguette(ui, R.pres, function (x) { return x; }, null, null, function () {});
      luce([].slice.call(ui.tab.children), R.pres.indexOf(chi), SUSPENSE, function () { if (document.body.contains(ui.s)) esitoSoloLocale(t, st, ui, chi); });
    } });
    ui.piede.appendChild(bSc);
    function vedi(id) {
      vede = id;
      linguette(ui, R.pres, function (x) { return x; }, vede, null, vedi);
      mostraScheda(ui, { id: id, nome: id, titolo: "🎭 Lo scenario di " + id, voci: vociSolo(R, id, true), anima: false });
      testoSe(bSc, "⚖️ Scelgo " + id);
      adattaTavolo(ui);
    }
    vedi(vede);
  }
  function esitoSoloLocale(t, st, ui, chi) {
    var el = t.el, R = st.R;
    R.vincitore = chi;
    st.punti[chi] = (st.punti[chi] || 0) + 1; statPersona(st, chi).roundVinti++;
    ui.tab.hidden = true;
    mostraScheda(ui, { id: chi, nome: chi, titolo: "🏅 Lo scenario di " + chi, voci: vociSolo(R, chi, true), vince: true, anima: false });
    testoSe(ui.turno, "🏅 Il round va a " + chi + ": +1!");
    svuota(ui.azione); svuota(ui.piede);
    stellaLocale(t, st, ui, ui.scheda, vociSolo(R, chi, true), [chi]);
    ui.azione.appendChild(classificaCorta(t, st.giocatori.map(function (nome) { return { id: nome, nome: nome, punti: st.punti[nome] || 0 }; })));
    adattaTavolo(ui);
    verdetto(ui, "s", "Vince " + chi + "!", true, [{ nome: chi }]);
    var ultimo = st.round >= st.totale;
    ui.piede.appendChild(el("button", { class: "btn btn-primario", text: ultimo ? "Classifica finale 🏆" : "Prossimo round ▶",
      onclick: function () { chiudiLente(); iniziaRound(t, st); } }));
    adattaTavolo(ui);   // (col tasto in fondo le carte hanno meno posto: si rimisurano)
  }

  function finePartita(t, st) {
    chiudiLente();
    var classifica = conPosizioni(st.giocatori.map(function (nome) { return { nome: nome, punti: st.punti[nome] || 0 }; }));
    salvaTrofeiSipero(t, { online: false, sessione: st.sessione, classifica: classifica, statFine: st.statGiocatori });
    function alla() { chiudiLente(); t.fine(classifica.map(function (r) { return { nome: r.nome, punti: r.punti, pos: r.pos }; })); }
    if (!st.stelle || !st.stelle.length) return alla();
    // ⭐ prima della classifica: le carte che hanno convinto il giudice, round per round
    var el = t.el, s = t.schermata({ icona: "⭐", titolo: "Le carte della serata", sotto: "Quelle che hanno convinto il giudice" });
    s.classList.add("oro", "g-sipero"); stile();
    var box = el("div", { class: "sp-stelle" });
    st.stelle.forEach(function (x) {
      box.appendChild(el("div", { class: "sp-lente-r " + (x.tipo === "bonus" ? "b" : "m") + (x.di ? " scritta" : "") }, testoVoce(el, { tipo: x.tipo, testo: x.testo, di: x.di || undefined }).concat([
        el("small", { class: "sp-lente-nota", text: "Round " + x.r + " · ha convinto " + x.giudice + (x.chi && x.chi.length ? " · vinto da " + x.chi.join(" e ") : "") })])));
    });
    s._contenuto.appendChild(box);
    s._piede.appendChild(el("button", { class: "btn btn-primario", text: "Classifica finale 🏆", onclick: alla }));
    t.mostra(s);
  }

  // =========================================================
  //  ONLINE — ognuno dal suo telefono (host-autoritativo).
  //  Squadre a sorte (il giudice gira, più round) oppure scelte
  //  dall'host in saletta (un round). Il tavolo si vede sempre;
  //  la mano arriva solo ai telefoni della propria squadra.
  // =========================================================
  function squadraDi(assegna, id) { var a = assegna ? assegna[id] : null; return (a === 0 || a === 1) ? a : -1; }
  function avatarOkS(o) { return o && typeof o === "object" && JSON.stringify(o).length < 3000 ? o : null; }

  function hostSipero(t, dati) {
    if (!(window.SGNet && SGNet.disponibile())) return senzaReteS(t);
    var nomeHost = (t.giocatori && t.giocatori[0]) || (t.nomeProfilo && t.nomeProfilo()) || "Host";
    var IO = t.mioId || "host";   // io che tengo la partita ("host", o l'amico che ha preso il posto dell'host)
    var st = {
      fase: "lobby", codice: "…", pronta: false,
      giocatori: [{ id: IO, nome: nomeHost, omino: t.mioOmino ? t.mioOmino(nomeHost) : null, via: false, guarda: false }],
      assegna: {}, regole: null, manuale: false, seq: CLASSICA, arringaSec: 0,
      round: 0, totale: 0, punti: {}, giudicati: {}, giocato: {}, coppie: {}, ordine: [],
      mazzi: { bonus: nuovoMazzo(t, dati.bonus, "bonus"), malus: nuovoMazzo(t, dati.malus, "malus") },
      scen: scenVuoti(), mani: null, manoV: [0, 0], passi: [], passo: 0, parla: 0, timerN: 0,
      vincitore: null, sorte: false, classifica: null, sessione: null, statGiocatori: Object.create(null), autoTo: null,
      scadenza: 0, attesaTo: null,   // l'attesa di un tocco (carte, arringa, verdetto): a tempo scaduto si va avanti da soli
      solo: false, R: null, mv: {},  // 🙋 ognuno per sé: il round (mani di ognuno) e la versione della mano di ognuno
      bianche: {}, firme: {},        // 🃏 chi ha già scritto la sua carta; le carte scritte che sono ancora in mano (testo → nome)
      pronti: [],                    // ⏩ chi ha toccato «Avanti» sull'esito del round
      capo: [null, null], capi: {},  // 👑 il capo di ogni squadra in questo round (decide lui le carte) e quante volte l'ha fatto ognuno
      segni: {},                     // 👆 le carte che ognuno ha segnato nella mano della sua squadra (id → [testi]): le vedono solo i compagni
      stella: null, stelle: [],      // ⭐ la carta che ha convinto il giudice in questo round; quelle di tutta la partita
      ruoli: false, scelte: {},      // 👥 online a squadre: prima di ogni round ognuno sceglie (id → "g", 0 o 1); si parte col tasto dell'host
      esitoOra: 0, roundOra: 0       // quando il giudice ha deciso / quando è cominciato il round (per la suspense e la presentazione)
    };
    function leggiRegole(imp) {
      imp = imp || {};
      var s = seqDa(imp), si = siDa(imp);
      st.regole = { seq: s.seq, vuota: si === "solo" ? false : s.vuota, giri: [1, 2, 3].indexOf(+imp.giri) >= 0 ? +imp.giri : 1,
        arringa: +imp.arringa || 0, squadre: si !== "solo" ? "ruoli" : "sorte", round: roundDa(imp), si: si, bianca: biancaDa(imp) ? 1 : 0 };
    }
    leggiRegole(t.impostazioni);
    // "⚙️ Regole" nella saletta: l'host cambia le regole quando vuole (prima di cominciare)
    t.onRegole = function (im) { if (st.fase !== "lobby") return; leggiRegole(im); bd(); };
    t.onRivincita = function () { if (st.fase === "fine") nuova(); };   // la Rivincita: tutti di nuovo nella saletta
    var V = { t: t };

    // la partita di prima (l'host ha ricaricato la pagina o riaperto l'app: t.ripresa): si riprende dalla stessa fase.
    // Gli amici non si danno per usciti: si aspettano ("attesi") e rientrano da soli (con le carte della loro squadra);
    // chi non torna entro 10 secondi esce
    var R0 = t.ripresa && t.ripresa.stato, ripresa = !!(R0 && R0.fase && R0.fase !== "lobby" && R0.giocatori), attesi = {}, tAttesi = null;
    if (ripresa) {
      Object.keys(R0).forEach(function (k) { if (k !== "mazzi") st[k] = R0[k]; });
      st.mazzi = { bonus: mazzoDa(dati.bonus, R0.mazzi && R0.mazzi.bonus, "bonus"), malus: mazzoDa(dati.malus, R0.mazzi && R0.mazzi.malus, "malus") };
      st.attesaTo = null; st.autoTo = null; st.esitoTo = null; st.pronta = false;
      st.statGiocatori = st.statGiocatori || Object.create(null);
      st.giocatori.forEach(function (p) { if (p.id !== IO && !p.via) attesi[p.id] = 1; });
    }
    // il mazzo nella memoria: le carte ancora da pescare come numeri (la posizione nella lista delle carte), così resta piccolo
    function mazzoDa(lista, numeri, tipo) {
      var pila = (numeri || []).map(function (i) { return lista[i]; }).filter(function (c) { return c != null; });
      return { carte: lista.slice(), pila: pila.length ? pila : pilaFresca(t, lista, tipo), tipo: tipo };
    }
    var posDi = {};   // (testo → posizione, una volta per tipo: le carte sono più di mille)
    function numeri(mz, lista) {
      var k = lista === dati.bonus ? "bonus" : "malus", p = posDi[k];
      if (!p) { p = posDi[k] = Object.create(null); lista.forEach(function (c, i) { if (!(c in p)) p[c] = i; }); }
      return mz.pila.map(function (c) { return c in p ? p[c] : -1; }).filter(function (i) { return i >= 0; });
    }
    function ricorda() {
      if (st.fase === "lobby") return t.ricorda(null);
      var s = {};
      Object.keys(st).forEach(function (k) { if (k !== "attesaTo" && k !== "autoTo" && k !== "esitoTo" && k !== "mazzi") s[k] = st[k]; });
      s.mazzi = { bonus: numeri(st.mazzi.bonus, dati.bonus), malus: numeri(st.mazzi.malus, dati.malus) };
      t.ricorda(s);
    }

    var rete = SGNet.ospita("sipero", {
      onCodice: function (c) { st.codice = c; bd(); },
      onConnesso: function () { st.pronta = true; bd(); },
      onAddio: addio,
      onMsg: function (id, m) {
        if (!m || !m.t) return;
        if (m.t === "join") { delete attesi[id]; return entra(id, m); }   // (dopo una ripresa: è tornato)
        if (!pById(id)) return;
        if (m.t === "chiediMano") manoA(id);
        else if (m.t === "gioca") giocaCarte(id, m.carte);
        else if (m.t === "avanti") avanti(id);
        else if (m.t === "giudica") { if (st.solo) giudicaS(id, m.chi); else giudica(id, m.sq); }
        else if (m.t === "bianca") bianca(id, m.testo);
        else if (m.t === "pronto") pronto(id, m.k);
        else if (m.t === "segna") segna(id, m.carte);
        else if (m.t === "squadra") scegliSquadra(id, m.sq);
        else if (m.t === "stella") stella(id, m.i);
        else if (m.t === "ruolo") scegliRuolo(id, m.r);
      },
      onErrore: function (e) { if (e && e.type === "no-mqtt") senzaReteS(t); }   // gli altri intoppi li ripara la rete da sola
    }, { ripresa: ripresa });   // (con la ripresa gli amici non tornano in saletta)
    if (ripresa && rete && rete.codice) st.codice = rete.codice;
    function pById(id) { for (var i = 0; i < st.giocatori.length; i++) if (st.giocatori[i].id === id) return st.giocatori[i]; return null; }
    function presenti() { return st.giocatori.filter(function (p) { return !p.via; }); }
    function giudice() { for (var i = 0; i < st.giocatori.length; i++) if (st.assegna[st.giocatori[i].id] === "g") return st.giocatori[i]; return null; }
    function presentiSq(k) { return st.giocatori.filter(function (p) { return !p.via && st.assegna[p.id] === k; }); }
    function ferma() {
      if (st.autoTo) { clearTimeout(st.autoTo); st.autoTo = null; }
      if (st.esitoTo) { clearTimeout(st.esitoTo); st.esitoTo = null; }
      if (st.attesaTo) { clearTimeout(st.attesaTo); st.attesaTo = null; }
      st.scadenza = 0;
    }
    // si aspetta un tocco per al massimo "sec" secondi, poi fn (chi aspetta vede il conto alla rovescia)
    function attendi(sec, fn) {
      if (st.attesaTo) clearTimeout(st.attesaTo);
      st.scadenza = Date.now() + sec * 1000;
      st.attesaTo = setTimeout(function () { st.attesaTo = null; st.scadenza = 0; fn(); }, sec * 1000);
    }
    // la squadra di turno sceglie le carte: se non gioca in tempo, le sceglie il caso
    // (sec: il tempo che restava, quando la partita riprende)
    function attendiPasso(sec) {
      if (st.fase !== "gioco" || st.passo >= st.passi.length) return;
      var quale = st.passo;
      attendi(sec || TEMPO_CARTE, function () {
        if (st.fase !== "gioco" || st.passo !== quale) return;
        var p = st.passi[st.passo];
        giocaPasso(p, carteVotate(p));
      });
    }
    // l'arringa di una squadra: finito il suo tempo (più un attimo) si va avanti da soli
    function attendiArringa(sec) {
      var parla = st.parla;
      attendi(sec || (st.arringaSec ? st.arringaSec + TEMPO_DOPO_ARRINGA : TEMPO_ARRINGA), function () {
        if (st.fase === "arringa" && st.parla === parla) avanzaArringa();
      });
    }

    // ----- chi entra, chi rientra, chi esce -----
    function entra(id, m) {
      var p = pById(id);
      if (p) { p.via = false; tornaCapo(id); bd(); ominiA(id); manoA(id); return; }   // rientra (stesso id): ritrova la partita e le sue carte
      var nome = String(m.nome || "").trim().slice(0, 16) || "Amico";
      if (st.fase !== "lobby") {   // rientra da un altro telefono (o con la memoria cancellata): stesso nome, stesso posto
        var vecchio = st.giocatori.filter(function (x) { return x.via && norm(x.nome) === norm(nome); })[0];
        if (vecchio) { cambiaId(vecchio, id); tornaCapo(id); bd(); ominiA(id); manoA(id); return; }
      }
      if (t.puoSedersi && !t.puoSedersi(id, nome)) { bd(); return; }   // non è tra chi gioca: riceve le foto e guarda
      if (st.giocatori.length >= MAX) { rete.inviaVeloce({ t: "piena", to: id }); return; }
      st.giocatori.push({ id: id, nome: nome, omino: avatarOkS(m.omino), via: false, guarda: st.fase !== "lobby" && st.fase !== "ruoli" });   // (nella scelta dei ruoli sceglie subito anche lui)
      // 🙋 arrivato mentre si scelgono i Bonus: entra subito nel giro (ha la sua mano e uno scenario suo)
      if (st.fase !== "lobby" && entraSolo(id)) { bd(); ominiA(null); manoS(id); return; }
      bd();
      if (st.fase !== "lobby") ominiA(null);   // (arrivato a partita in corso: gli avatar di chi gioca, e il suo a tutti)
    }
    // 👑 il capo della squadra k: chi l'ha fatto meno volte (nell'ordine d'arrivo), tra chi c'è
    function scegliCapo(k) {
      var m = presentiSq(k).sort(function (a, b) { return ((st.capi[a.id] || 0) - (st.capi[b.id] || 0)) || (st.ordine.indexOf(a.id) - st.ordine.indexOf(b.id)); });
      st.capo[k] = m.length ? m[0].id : null;
      if (m.length) st.capi[m[0].id] = (st.capi[m[0].id] || 0) + 1;
    }
    function capoVivo(k) { var p = st.capo ? pById(st.capo[k]) : null; return p && !p.via && st.assegna[p.id] === k ? p : null; }
    // gioca le carte della squadra solo il capo (se il capo non c'è più, chiunque della squadra)
    function puoGiocare(id, k) { return squadraDi(st.assegna, id) === k && (!capoVivo(k) || st.capo[k] === id); }
    // chi rientra in una squadra rimasta senza capo lo diventa lui
    function tornaCapo(id) { var k = squadraDi(st.assegna, id); if (!st.solo && k >= 0 && st.fase === "gioco" && !capoVivo(k)) st.capo[k] = id; }
    // 🙋 chi arriva tardi in «Ognuno per sé», mentre si scelgono i Bonus: entra subito (mano nuova, il giro dei Malus si rifà)
    function entraSolo(id) {
      var R = st.R, p = pById(id);
      if (!st.solo || !R || st.fase !== "gioco" || R.passo !== "bonus" || !p || !p.guarda || R.pres.indexOf(id) >= 0) return false;
      var u = Object.create(null);
      R.pres.forEach(function (x) { var mm = R.mani[x]; mm.bonus.concat(mm.malus).forEach(function (c) { u[c] = 1; }); R.scen[x].bonus.forEach(function (v) { u[v.testo] = 1; }); });
      var mano = { bonus: [], malus: [] };
      ["bonus", "malus"].forEach(function (k) { while (mano[k].length < MANO_SOLO[k]) { var c = pesca(t, st.mazzi[k], u); if (c == null) break; mano[k].push(c); u[c] = 1; } });
      R.pres.push(id); R.mani[id] = mano; R.scen[id] = { bonus: [], malus: null };
      R.pres.forEach(function (x, i) { R.bers[x] = R.pres[(i + 1) % R.pres.length]; });
      nuovoInPartita(p, "p");
      st.mv[id] = (st.mv[id] || 0) + 1;
      return true;
    }
    // chi arriva tardi e gioca già da questo round: un posto in più nel giro dei giudici (tutti lo stesso numero di volte)
    function nuovoInPartita(p, ruolo) {
      p.guarda = false; st.assegna[p.id] = ruolo;
      if (st.ordine.indexOf(p.id) < 0) { st.ordine.push(p.id); if (!st.manuale && !st.ruoli) st.totale += st.regole.giri; }
      statPersona(st, p.id).roundGiocati++; st.giocato[p.id] = 1;
    }
    // 👥 chi arriva tardi a squadre, mentre si giocano le carte, sceglie la squadra ed entra subito
    function scegliSquadra(id, k) {
      var p = pById(id);
      if (!p || p.via || !p.guarda || st.solo || st.manuale || st.ruoli || st.fase !== "gioco" || (k !== 0 && k !== 1)) return;   // (coi ruoli si entra alla prossima scelta)
      nuovoInPartita(p, k);
      if (!capoVivo(k)) st.capo[k] = id;
      bd(); manoA(id);
    }
    function cambiaId(p, nuovo) {
      var vec = p.id; p.id = nuovo; p.via = false;
      if (vec in st.assegna) { st.assegna[nuovo] = st.assegna[vec]; delete st.assegna[vec]; }
      ["punti", "giudicati", "giocato"].forEach(function (k) { if (vec in st[k]) { st[k][nuovo] = st[k][vec]; delete st[k][vec]; } });
      if (st.statGiocatori[vec]) { st.statGiocatori[nuovo] = st.statGiocatori[vec]; delete st.statGiocatori[vec]; }
      st.ordine = st.ordine.map(function (x) { return x === vec ? nuovo : x; });
      // 🃏 ⏩ 🙋 le cose nuove tenute per id
      if (st.bianche[vec]) { st.bianche[nuovo] = 1; delete st.bianche[vec]; }
      st.pronti = st.pronti.map(function (x) { return x === vec ? nuovo : x; });
      if (vec in st.mv) { st.mv[nuovo] = st.mv[vec]; delete st.mv[vec]; }
      // 👑 👆 il capo e le carte segnate
      if (st.capo) st.capo = st.capo.map(function (x) { return x === vec ? nuovo : x; });
      if (st.scelte && vec in st.scelte) { st.scelte[nuovo] = st.scelte[vec]; delete st.scelte[vec]; }
      ["capi", "segni"].forEach(function (k) { if (st[k] && vec in st[k]) { st[k][nuovo] = st[k][vec]; delete st[k][vec]; } });
      var R = st.R;
      if (R) {
        if (R.giudice === vec) R.giudice = nuovo;
        R.pres = R.pres.map(function (x) { return x === vec ? nuovo : x; });
        Object.keys(R.bers).forEach(function (x) { if (R.bers[x] === vec) R.bers[x] = nuovo; });
        ["bers", "mani", "scen", "mio", "fatti"].forEach(function (k) { if (vec in R[k]) { R[k][nuovo] = R[k][vec]; delete R[k][vec]; } });
        if (R.vincitore === vec) R.vincitore = nuovo;
        if (st.solo && st.vincitore === vec) st.vincitore = nuovo;
      }
    }
    function addio(id) {
      delete attesi[id];
      var p = pById(id); if (!p || id === IO) return;
      if (st.fase === "lobby") { st.giocatori = st.giocatori.filter(function (x) { return x.id !== id; }); delete st.assegna[id]; bd(); return; }
      p.via = true;   // a partita iniziata tiene il suo posto (e il suo ruolo): se rientra, riprende da lì
      if (st.fase === "ruoli" && st.scelte) delete st.scelte[id];   // (nella scelta dei ruoli il suo posto si libera)
      if (!st.solo && st.capo) [0, 1].forEach(function (k) { if (st.capo[k] === id) { scegliCapo(k); segniSquadra(k); } });   // 👑 il capo passa a un compagno
      bd();
      if (st.solo) controllaSolo(); else controllaVuota();
      controllaPronti();
    }
    // gli avatar di chi gioca: una volta all'inizio (e a chi rientra), così la foto resta leggera
    function ominiA(id) {
      if (st.fase === "lobby") return;
      var o = {}; st.giocatori.forEach(function (p) { if (p.omino) o[p.id] = p.omino; });
      var m = { t: "omini", o: o }; if (id) m.to = id;
      rete.inviaVeloce(m);
    }

    // ----- la mano: solo ai telefoni della squadra (🙋 ognuno per sé: solo al suo telefono) -----
    function manoA(id) {
      if (id === IO || st.fase === "lobby" || st.fase === "fine") return;
      if (st.solo) return manoS(id);
      if (!st.mani) return;
      var k = squadraDi(st.assegna, id); if (k < 0) return;
      rete.inviaVeloce({ t: "mano", per: [id], sq: k, v: st.manoV[k], mano: st.mani[k], firme: firmeDi(st.mani[k], st.firme) });
      segniSquadra(k, id);
    }
    function manoSquadra(k) {
      var per = presentiSq(k).map(function (p) { return p.id; }).filter(function (id) { return id !== IO; });
      if (per.length) rete.inviaVeloce({ t: "mano", per: per, sq: k, v: st.manoV[k], mano: st.mani[k], firme: firmeDi(st.mani[k], st.firme) });
    }
    // 👆 le carte segnate dalla squadra k (solo quelle ancora in mano): vanno solo ai compagni, come la mano
    function segniDi(k) {
      var s = {}, mano = st.mani ? st.mani[k] : null;
      if (!mano) return s;
      st.giocatori.forEach(function (p) {
        if (st.assegna[p.id] !== k || !st.segni[p.id]) return;
        var l = st.segni[p.id].filter(function (c) { return mano.bonus.indexOf(c) >= 0 || mano.malus.indexOf(c) >= 0; });
        if (l.length) s[p.id] = l;
      });
      return s;
    }
    function segniSquadra(k, solo) {
      if (st.solo || !st.mani) return;
      var per = (solo ? [solo] : presentiSq(k).map(function (p) { return p.id; })).filter(function (id) { return id !== IO; });
      if (per.length) rete.inviaVeloce({ t: "segni", per: per, sq: k, r: st.round, s: segniDi(k) });
      if (!solo && squadraDi(st.assegna, IO) === k) disegnaOn(V, vm(), cb);   // (sono in quella squadra anch'io: le faccine sulle mie carte)
    }
    // un compagno segna (o toglie) le carte che gli piacciono: al massimo 3, solo della mano della sua squadra
    function segna(id, carte) {
      var k = squadraDi(st.assegna, id);
      if (st.solo || st.fase !== "gioco" || !st.mani || k < 0 || !Array.isArray(carte)) return;
      var mano = st.mani[k];
      st.segni[id] = carte.filter(function (c, i) { return typeof c === "string" && carte.indexOf(c) === i && (mano.bonus.indexOf(c) >= 0 || mano.malus.indexOf(c) >= 0); }).slice(0, 3);
      ricorda(); segniSquadra(k);
    }
    // a tempo scaduto (o squadra vuota): le carte con più faccine; a pari faccine vince la scelta del capo, poi il caso
    function carteVotate(p) {
      var mano = st.mani[p.sq][p.f.tipo], voti = Object.create(null), capo = st.capo ? st.capo[p.sq] : null;
      st.giocatori.forEach(function (g) {
        if (st.assegna[g.id] !== p.sq) return;
        (st.segni[g.id] || []).forEach(function (c) { if (mano.indexOf(c) >= 0) voti[c] = (voti[c] || 0) + 1 + (g.id === capo ? 0.5 : 0); });
      });
      return t.mischia(mano).sort(function (a, b) { return (voti[b] || 0) - (voti[a] || 0); }).slice(0, nCarte(p));
    }
    // la mia mano e le carte che ho già giocato in questo round (chi rientra le ritrova)
    function soloMio(id) {
      var R = st.R; if (!R || !R.mani[id]) return null;
      return { mano: R.mani[id], mie: { bonus: R.scen[id].bonus, malus: R.mio[id] || null }, firme: firmeDi(R.mani[id], st.firme), v: st.mv[id] || 0 };
    }
    function manoS(id) {
      if (id === IO) return;
      var x = soloMio(id); if (!x) return;
      rete.inviaVeloce({ t: "manoS", per: [id], v: x.v, mano: x.mano, mie: x.mie, firme: x.firme });
    }

    // la "foto" per tutti: SEMPRE con gli id; MAI le carte in mano
    function vm() {
      var g = giudice(), r = st.regole;
      var v = { fase: st.fase, codice: st.codice, pronta: st.pronta, hostId: IO,
        giocatori: st.giocatori.map(function (p) { return { id: p.id, nome: p.nome, via: !!p.via, guarda: !!p.guarda, punti: st.punti[p.id] || 0, omino: st.fase === "lobby" ? (p.omino || null) : undefined }; }),
        regole: { seq: r.seq, vuota: r.vuota, giri: r.giri, arringa: r.arringa, squadre: r.squadre, round: r.round, si: r.si, bianca: r.bianca },
        ruoli: !!st.ruoli, scelte: st.fase === "ruoli" ? st.scelte : null, piano: st.fase === "ruoli" ? pianoVm() : null,
        solo: st.fase === "lobby" ? r.si === "solo" : st.solo, bianche: Object.keys(st.bianche),
        pronti: st.fase === "esito" ? prontiVeri() : [], servono: servono(), kAv: kAv(),
        manuale: st.manuale, round: st.round, totale: st.totale + inArrivo() * ((st.regole && st.regole.giri) || 1), assegna: st.assegna,
        giudiceId: g ? g.id : null, giudiceNome: g ? g.nome : "", giudiceVia: !!(g && g.via),
        scen: st.scen, manoV: st.manoV, step: null, vuota: false, prossimi: null,
        parla: st.parla, timer: { n: st.timerN, sec: st.arringaSec }, vincitore: st.vincitore, sorte: st.sorte,
        resta: st.scadenza ? Math.max(1, Math.round((st.scadenza - Date.now()) / 1000)) : 0,
        classifica: st.classifica, sessione: st.sessione, statFine: st.fase === "fine" ? st.statGiocatori : null,
        capo: st.solo ? null : st.capo,                                         // 👑 chi decide le carte di ogni squadra
        stella: st.fase === "esito" && st.stella && st.stella.r === st.round ? st.stella.i : null,   // ⭐ la carta che ha convinto il giudice
        stelle: st.fase === "fine" ? st.stelle : null,
        dopo: st.fase === "esito" && st.esitoOra ? Date.now() - st.esitoOra : 0,          // da quanto il giudice ha deciso (ms): la suspense solo all'inizio
        inizio: st.fase === "gioco" && st.roundOra ? Date.now() - st.roundOra : 0 };      // da quanto è cominciato il round (ms): la presentazione solo all'inizio
      if (st.fase === "gioco" && st.passo < st.passi.length) {
        var p = st.passi[st.passo], nf = nomeFase(st.seq, p.fi);
        v.step = { sq: p.sq, tipo: p.f.tipo, n: nCarte(p), bers: p.f.bers, fi: p.fi + 1, ftot: st.seq.length, ic: nf.ic, nome: nf.nome, i: st.passo };
        v.vuota = presentiSq(p.sq).length === 0;
        v.prossimi = [0, 1].map(function (k) { for (var j = st.passo; j < st.passi.length; j++) if (st.passi[j].sq === k) return st.passi[j].f.tipo; return null; });
        // quante carte giocherà ogni squadra al suo prossimo turno (per segnarle già mentre gioca l'altra)
        v.prossimiN = [0, 1].map(function (k) { for (var j = st.passo; j < st.passi.length; j++) if (st.passi[j].sq === k) return nCarte(st.passi[j]); return 0; });
      }
      if (st.solo && st.R && st.fase !== "lobby" && st.fase !== "fine") vmSolo(v);
      return v;
    }
    // chi è arrivato a partita in corso e gioca dal round dopo (non è ancora nel giro dei giudici)
    function inArrivo() {
      if (st.manuale || st.ruoli || st.fase === "lobby" || st.fase === "fine") return 0;
      return st.giocatori.filter(function (p) { return !p.via && st.ordine.indexOf(p.id) < 0; }).length;
    }
    function bd() {
      var v = vm(); rete.invia({ t: "vm", vm: v }); ricorda(); disegnaOn(V, v, cb); vici();
      if (t.aCheSiamo && st.fase !== "lobby" && st.fase !== "fine" && st.totale > 1) t.aCheSiamo("round " + st.round + " di " + st.totale);   // (nella Sala, per chi è fuori)
    }
    // (host di riserva) chi porta avanti la partita se sparisco: prima chi guarda (non gioca: non ha niente da perdere)
    var viciK = "";
    function vici() {
      var l = st.giocatori.filter(function (p) { return p.guarda && !p.via && p.id !== IO; }).map(function (p) { return p.id; }), k = l.join(",");
      if (k !== viciK && t.vici) { viciK = k; t.vici(l.length ? l : null); }
    }

    // la ripresa: la stessa fase, coi secondi che restavano (almeno 8, per respirare); l'arringa a tempo si rifà da
    // capo (il cronometro lo vedono tutti); le carte tornano alle squadre (a chi rientra col suo "join")
    function riprendi() {
      tAttesi = setTimeout(function () { Object.keys(attesi).forEach(addio); }, 10000);
      var f = st.fase, resta = Math.max(8000, ((t.ripresa.ora(st.scadenza) || 0) - Date.now())) / 1000;
      st.scadenza = 0;
      st.esitoOra = st.esitoOra ? t.ripresa.ora(st.esitoOra) : 0; st.roundOra = st.roundOra ? t.ripresa.ora(st.roundOra) : 0;   // (le ore del telefono di prima)
      if (st.solo && st.R) {   // 🙋 ognuno per sé: stesso passo (Bonus o Malus), stesso scenario da svelare
        var R = st.R;
        if (f === "gioco") { attendiSolo(resta); bd(); R.pres.forEach(manoS); controllaSolo(); return; }
        if (f === "arringa") { if (st.arringaSec) { st.timerN++; attendiSvela(); } else attendiSvela(resta); return bd(); }
        if (f === "giudizio") { attendi(resta, function () { if (st.fase === "giudizio" && st.R === R) decidiS(R.pres[Math.floor(Math.random() * R.pres.length)], true); }); return bd(); }
      } else {
        if (f === "gioco") { attendiPasso(resta); bd(); manoSquadra(0); manoSquadra(1); controllaVuota(); return; }
        if (f === "arringa") { if (st.arringaSec) { st.timerN++; attendiArringa(); } else attendiArringa(resta); return bd(); }
        if (f === "giudizio") { attendi(resta, function () { if (st.fase === "giudizio") decidi(Math.random() < 0.5 ? 0 : 1, true); }); return bd(); }
      }
      if (f === "esito") { attendi(resta, prossimo); return bd(); }   // (⏩ «Avanti»: i tocchi di prima valgono ancora)
      bd();   // (la classifica: si resta lì)
    }
    // 🙋 nella foto per tutti: chi presenta, chi rovina chi, chi ha giocato e la parte degli scenari che si può vedere.
    // I Bonus restano segreti finché non li hanno giocati tutti; i Malus finché quello scenario non si svela. MAI le mani.
    function vmSolo(v) {
      var R = st.R, gioco = st.fase === "gioco";
      v.scen = null; v.step = null;
      v.pres = R.pres; v.bers = R.bers; v.passoS = R.passo; v.mostra = R.mostra; v.mv = st.mv;
      v.fatti = gioco ? R.pres.filter(function (id) { return R.fatti[id]; }) : R.pres.slice();
      v.schede = {};
      R.pres.forEach(function (id, i) {
        var s = R.scen[id], bonusSi = !(gioco && R.passo === "bonus"), malusSi = st.fase === "giudizio" || st.fase === "esito" || (st.fase === "arringa" && i <= R.mostra);
        v.schede[id] = { b: bonusSi ? s.bonus : [], m: malusSi ? s.malus : null };
      });
    }

    // ----- la partita -----
    function manualeOk() {
      var g = giudice();
      return !!(g && !g.via && presentiSq(0).length && presentiSq(1).length);
    }
    function comincia() {
      if (st.fase !== "lobby") return;
      var r = st.regole, pres = presenti();
      if (r.vuota) return;
      st.solo = r.si === "solo";
      st.manuale = !st.solo && r.squadre === "mano";
      if (st.manuale) { if (!manualeOk()) return; st.totale = 1; }
      else if (!st.solo) { if (pres.length < MIN) return; st.totale = r.round; st.assegna = {}; }   // 👥 a squadre: i round scelti dall'host, i ruoli li scelgono loro
      else { if (pres.length < MIN) return; st.totale = pres.length * r.giri; st.assegna = {}; }
      st.ruoli = !st.solo && !st.manuale; st.scelte = {};
      st.seq = r.seq; st.arringaSec = r.arringa;
      st.ordine = pres.map(function (p) { return p.id; });
      st.round = 0; st.punti = {}; st.giudicati = {}; st.giocato = {}; st.coppie = {};
      st.sessione = nuovaSessione(); st.statGiocatori = Object.create(null); st.classifica = null;
      st.bianche = {}; st.firme = {}; st.pronti = []; st.R = null; st.mv = {};
      st.capo = [null, null]; st.capi = {}; st.segni = {}; st.stella = null; st.stelle = [];
      st.giocatori.forEach(function (p) { p.guarda = false; });
      if (st.ruoli) vaiRuoli(); else prossimoRound();
      ominiA(null);
    }
    // 👥 la schermata dei ruoli (all'inizio e dopo ogni round): ognuno tocca giudice, Squadra 1 o Squadra 2. NIENTE timer:
    // si parte solo col tasto di chi tiene la partita (il proprietario: «se c'è discussione sui ruoli, fai discutere»).
    // Le squadre di prima restano segnate (si cambia con un tocco); il giudice di prima no.
    function vaiRuoli() {
      ferma();
      st.fase = "ruoli"; st.capo = [null, null]; st.segni = {}; st.stella = null; st.pronti = [];
      var pre = {};
      presenti().forEach(function (p) { p.guarda = false; var a = st.assegna[p.id]; if (a === 0 || a === 1) pre[p.id] = a; });
      st.scelte = pre;
      bd();
    }
    function contaRuoli(senza) {
      var c = [0, 0], g = 0;
      presenti().forEach(function (p) { if (p.id === senza) return; var r = st.scelte[p.id]; if (r === 0 || r === 1) c[r]++; else if (r === "g") g++; });
      return { sq: c, g: g };
    }
    // un tocco: dove vuole andare (lo stesso tocco di nuovo = torna libero). Un giudice solo (vince chi ha toccato per primo);
    // in una squadra che ha già 2 persone più dell'altra non si entra
    function scegliRuolo(id, r) {
      var p = pById(id);
      if (st.fase !== "ruoli" || !p || p.via) return;
      if (r == null || st.scelte[id] === r) { delete st.scelte[id]; return bd(); }
      var c = contaRuoli(id);
      if (r === "g") { if (c.g) return; }
      else if (r === 0 || r === 1) { if (c.sq[r] - c.sq[1 - r] >= 2) return; }
      else return;
      st.scelte[id] = r; bd();
    }
    // com'è il round se si parte adesso: chi non ha scelto va nella squadra più piccola; senza giudice lo sceglie il gioco
    // tra chi l'ha fatto meno volte (senza lasciare vuota una squadra); una squadra vuota = non si parte
    function pianoRuoli() {
      var pres = presenti();
      if (pres.length < MIN) return { ok: false, perche: "Servono almeno 3 persone: un giudice e uno per squadra." };
      var base = {}, pos = {};
      pres.forEach(function (p, i) { pos[p.id] = i; var r = st.scelte[p.id]; if (r === "g" || r === 0 || r === 1) base[p.id] = r; });
      function riempi(a) {
        var c = [0, 0];
        pres.forEach(function (p) { if (a[p.id] === 0 || a[p.id] === 1) c[a[p.id]]++; });
        pres.forEach(function (p) { if (a[p.id] == null) { var k = c[0] <= c[1] ? 0 : 1; a[p.id] = k; c[k]++; } });
        return c;
      }
      var a = null, giud = pres.filter(function (p) { return base[p.id] === "g"; })[0], note = [], auto = null;
      if (giud) { a = Object.assign({}, base); riempi(a); }
      else {
        var cands = pres.slice().sort(function (x, y) { return ((st.giudicati[x.id] || 0) - (st.giudicati[y.id] || 0)) || ((base[x.id] == null ? 0 : 1) - (base[y.id] == null ? 0 : 1)) || (pos[x.id] - pos[y.id]); });
        for (var i = 0; i < cands.length && !a; i++) { var tA = Object.assign({}, base); tA[cands[i].id] = "g"; var cc = riempi(tA); if (cc[0] && cc[1]) { a = tA; giud = cands[i]; } }
        if (!a) { giud = cands[0]; a = Object.assign({}, base); a[giud.id] = "g"; riempi(a); }
        auto = giud.id;
      }
      var n = [0, 0]; pres.forEach(function (p) { if (a[p.id] === 0 || a[p.id] === 1) n[a[p.id]]++; });
      if (!n[0] || !n[1]) return { ok: false, perche: "La " + nomeSq(n[0] ? 1 : 0) + " è vuota: qualcuno ci deve andare." };
      return { ok: true, auto: auto, liberi: pres.some(function (p) { return base[p.id] == null && a[p.id] !== "g"; }), assegna: a };
    }
    function pianoVm() { var p = pianoRuoli(); return { ok: p.ok, perche: p.perche || "", auto: p.auto || null, liberi: !!p.liberi }; }
    // ▶ «Si parte» (solo chi tiene la partita)
    function parti(id) {
      if (id !== IO || st.fase !== "ruoli") return;
      var p = pianoRuoli(); if (!p.ok) return;
      st.assegna = p.assegna;
      prossimoRound();
    }
    function prossimoRound() {
      ferma();
      st.round += 1;
      st.pronti = []; st.segni = {}; st.stella = null; st.capo = [null, null]; st.roundOra = Date.now();
      var pres = presenti();
      // chi è arrivato a partita in corso gioca da questo round: un round in più, così fa il giudice anche lui
      if (!st.manuale && !st.ruoli) pres.forEach(function (p) { if (st.ordine.indexOf(p.id) < 0) { st.ordine.push(p.id); st.totale += st.regole.giri; } });
      if (st.ruoli) pres.forEach(function (p) { if (st.ordine.indexOf(p.id) < 0) st.ordine.push(p.id); p.guarda = st.assegna[p.id] == null; });
      if (st.round > st.totale || (!st.manuale && pres.length < MIN)) return fine();
      if (!st.manuale && !st.ruoli) {
        pres.forEach(function (p) { p.guarda = false; });
        // il giudice: chi l'ha fatto meno volte, nell'ordine d'arrivo
        var g = pres.slice().sort(function (a, b) {
          return ((st.giudicati[a.id] || 0) - (st.giudicati[b.id] || 0)) || (st.ordine.indexOf(a.id) - st.ordine.indexOf(b.id));
        })[0];
        st.assegna = {}; st.assegna[g.id] = "g";
        if (st.solo) pres.forEach(function (p) { if (p !== g) st.assegna[p.id] = "p"; });
        else {
          var sq = formaSquadre(t, pres.filter(function (p) { return p !== g; }).map(function (p) { return p.id; }), st.coppie);
          sq[0].forEach(function (id) { st.assegna[id] = 0; }); sq[1].forEach(function (id) { st.assegna[id] = 1; });
        }
      }
      Object.keys(st.assegna).forEach(function (id) {
        if (!pById(id)) return;
        var s = statPersona(st, id); s.roundGiocati++; st.giocato[id] = 1;
        if (st.assegna[id] === "g") { s.roundGiudice++; st.giudicati[id] = (st.giudicati[id] || 0) + 1; }
      });
      if (st.solo) return roundSoloH(g);
      st.scen = scenVuoti();
      st.mani = nuoveMani(t, st.mazzi, st.scen);
      st.manoV = [st.manoV[0] + 1, st.manoV[1] + 1];
      st.passi = creaPassi(st.seq, (st.round - 1) % 2); st.passo = 0;
      st.parla = 0; st.vincitore = null; st.sorte = false; st.fase = "gioco";
      scegliCapo(0); scegliCapo(1);
      attendiPasso();
      bd(); manoSquadra(0); manoSquadra(1); controllaVuota();
    }
    function nCarte(p) { return Math.min(p.f.n, st.mani ? st.mani[p.sq][p.f.tipo].length : p.f.n); }
    function giocaCarte(id, carte) {
      if (st.solo) return giocaSoloH(id, carte);
      if (st.fase !== "gioco" || st.passo >= st.passi.length) return;
      var p = st.passi[st.passo];
      if (!puoGiocare(id, p.sq)) return;   // 👑 le carte le gioca il capo (gli altri le segnano)
      giocaPasso(p, carte);
    }
    function giocaPasso(p, carte) {
      var mano = st.mani[p.sq][p.f.tipo], n = nCarte(p);
      if (!Array.isArray(carte) || carte.length !== n) return;
      for (var i = 0; i < carte.length; i++) if (mano.indexOf(carte[i]) < 0 || carte.indexOf(carte[i]) !== i) return;
      ferma();
      var bers = p.f.bers === "se" ? p.sq : altra(p.sq);
      carte.forEach(function (c) { st.scen[bers].voci.push(voce(p.f.tipo, c, st.firme)); });
      st.giocatori.forEach(function (g) { if (st.assegna[g.id] === p.sq) statPersona(st, g.id)[p.f.tipo === "bonus" ? "carteBonus" : "carteMalus"] += carte.length; });
      st.mani[p.sq][p.f.tipo] = mano.filter(function (c) { return carte.indexOf(c) < 0; });
      riempi(t, st.mani[p.sq][p.f.tipo], st.mazzi[p.f.tipo], inUsoDa(st.mani, st.scen));
      st.manoV[p.sq]++;
      st.passo++;
      // 👆 le carte giocate escono dai segni di tutti
      st.giocatori.forEach(function (g) { if (st.segni[g.id]) st.segni[g.id] = st.segni[g.id].filter(function (c) { return carte.indexOf(c) < 0; }); });
      if (st.passo >= st.passi.length) { st.fase = "arringa"; st.parla = 0; st.timerN++; attendiArringa(); }
      else attendiPasso();
      bd(); manoSquadra(p.sq); segniSquadra(p.sq); controllaVuota();
    }
    // una squadra rimasta senza nessuno: dopo un attimo le carte le sceglie il caso (la partita non si ferma)
    function controllaVuota() {
      if (st.fase !== "gioco" || st.passo >= st.passi.length || st.autoTo) return;
      var p = st.passi[st.passo], quale = st.passo;
      if (presentiSq(p.sq).length) return;
      st.autoTo = setTimeout(function () {
        st.autoTo = null;
        if (st.fase !== "gioco" || st.passo !== quale || presentiSq(p.sq).length) return controllaVuota();
        giocaPasso(p, carteVotate(p));
      }, 3500);
    }
    // decide il giudice; se il giudice è uscito, decide l'host
    function puoDecidere(id) { var g = giudice(); return (g && !g.via && id === g.id) || (id === IO && (!g || g.via)); }
    function avanti(id) {
      if (st.fase !== "arringa" || !puoDecidere(id)) return;
      if (st.solo) avanzaSvela(); else avanzaArringa();
    }
    function avanzaArringa() {
      ferma();
      if (st.parla === 0) { st.parla = 1; st.timerN++; attendiArringa(); }
      else {   // il verdetto: se nessuno decide in tempo, decide la sorte
        st.fase = "giudizio";
        attendi(TEMPO_GIUDIZIO, function () { if (st.fase === "giudizio") decidi(Math.random() < 0.5 ? 0 : 1, true); });
      }
      bd();
    }
    function giudica(id, k) {
      if (st.fase !== "giudizio" || !puoDecidere(id) || (k !== 0 && k !== 1)) return;
      decidi(k, false);
    }
    function decidi(k, sorte) {
      ferma();
      st.vincitore = k; st.sorte = !!sorte; st.fase = "esito"; st.esitoOra = Date.now();
      st.giocatori.forEach(function (g) { if (st.assegna[g.id] === k) { st.punti[g.id] = (st.punti[g.id] || 0) + 1; statPersona(st, g.id).roundVinti++; } });
      aspettaEsito(); bd(); fotoDopoLuce();
    }
    // la foto rimandata quando la luce ha finito di girare (quella trattenuta dal broker è per chi arriva o ricarica)
    function fotoDopoLuce() {
      if (st.esitoTo) clearTimeout(st.esitoTo);
      var r = st.round;
      st.esitoTo = setTimeout(function () { st.esitoTo = null; if (st.fase === "esito" && st.round === r) bd(); }, 2600);
    }
    function prossimo() { if (st.fase !== "esito") return; if (st.ruoli) { if (st.round < st.totale) vaiRuoli(); else fine(); } else prossimoRound(); }
    // ⭐ il giudice tocca, sullo scenario che ha vinto, la carta che l'ha convinto (una per round): resta nelle «carte della serata»
    function stella(id, i) {
      var g = giudice();
      if (st.fase !== "esito" || st.sorte || st.stella || !g || g.via || g.id !== id) return;
      var voci = st.solo ? (st.R ? vociSolo(st.R, st.vincitore, true) : []) : (st.scen[st.vincitore] || { voci: [] }).voci, v = voci[+i];
      if (!v) return;
      var chi = st.solo ? [nomeDiId(st.vincitore)] : st.giocatori.filter(function (p) { return st.assegna[p.id] === st.vincitore; }).map(function (p) { return p.nome; });
      st.stella = { i: +i, r: st.round };
      st.stelle.push({ testo: v.testo, tipo: v.tipo, di: v.di || null, r: st.round, giudice: g.nome, chi: chi });
      bd();
    }

    // ----- ⏩ «Avanti» sull'esito del round: si parte subito se lo tocca più di metà di chi gioca ed è presente -----
    function kAv() { return (st.sessione || "") + "|" + st.round; }
    function inRound(id) { var p = pById(id); return !!(p && !p.via && st.assegna[id] != null); }
    function servono() { return Math.floor(st.giocatori.filter(function (p) { return inRound(p.id); }).length / 2) + 1; }
    function prontiVeri() { return st.pronti.filter(inRound); }
    function aspettaEsito() { st.pronti = []; attendi(TEMPO_ESITO, prossimo); }   // il conto resta: a zero si va avanti da soli
    function pronto(id, k) {
      if (st.fase !== "esito" || k !== kAv() || !inRound(id)) return;   // un tocco vecchio (o di chi guarda) non vale
      if (st.pronti.indexOf(id) < 0) st.pronti.push(id);
      if (prontiVeri().length >= servono()) return prossimo();
      bd();
    }
    function controllaPronti() { if (st.fase === "esito" && st.pronti.length && prontiVeri().length >= servono()) prossimo(); }

    // ----- 🃏 la carta bianca: passa dall'host (una a testa per partita, al massimo 60 lettere) -----
    function bianca(id, testo) {
      var p = pById(id);
      if (!p || p.via || !st.regole.bianca || st.bianche[id] || st.fase !== "gioco") return;
      testo = pulisciScritta(testo); if (!testo) return;
      var mano, k = -1;
      if (st.solo) {
        var R = st.R; if (!R || R.pres.indexOf(id) < 0 || R.fatti[id]) return;
        mano = R.mani[id][R.passo];
      } else {
        if (st.passo >= st.passi.length) return;
        var pa = st.passi[st.passo]; k = squadraDi(st.assegna, id);
        if (k !== pa.sq || !st.mani) return;
        mano = st.mani[k][pa.f.tipo];
      }
      if (mano.indexOf(testo) < 0) mano.push(testo);
      st.firme[testo] = p.nome; st.bianche[id] = 1;
      if (st.solo) { st.mv[id] = (st.mv[id] || 0) + 1; manoS(id); } else { st.manoV[k]++; manoSquadra(k); }
      bd();
    }

    // ----- 🙋 ognuno per sé -----
    function roundSoloH(g) {
      var ord = st.ordine.filter(function (id) { return st.assegna[id] === "p" || st.assegna[id] === "g"; });
      st.R = roundSolo(t, st.mazzi, g.id, presDopo(ord, g.id));
      st.R.pres.forEach(function (id) { st.mv[id] = (st.mv[id] || 0) + 1; });
      st.parla = 0; st.vincitore = null; st.sorte = false; st.fase = "gioco"; st.mani = null;
      attendiSolo();
      bd();
      st.R.pres.forEach(manoS);
      controllaSolo();
    }
    function nomeDiId(id) { var p = pById(id); return p ? p.nome : "?"; }
    // le carte di questo passo: chi non gioca in tempo, le sceglie il caso
    function attendiSolo(sec) {   // (sec: il tempo che restava, quando la partita riprende)
      var R = st.R, passo = R.passo, round = st.round;
      attendi(sec || TEMPO_CARTE, function () {
        if (st.fase !== "gioco" || st.R !== R || R.passo !== passo || st.round !== round) return;
        R.pres.forEach(function (id) { if (!R.fatti[id]) giocaSoloH(id, casoSolo(t, R, id), true); });
        fineFaseSolo();
      });
    }
    function giocaSoloH(id, carte, zitto) {
      var R = st.R, tipo = R ? R.passo : null;
      if (!R || st.fase !== "gioco" || !giocaSolo(R, id, carte, st.firme, nomeDiId)) return false;
      statPersona(st, id)[tipo === "bonus" ? "carteBonus" : "carteMalus"] += carte.length;
      st.mv[id] = (st.mv[id] || 0) + 1;
      manoS(id);
      if (!zitto) { bd(); controllaSolo(); }
      return true;
    }
    // tutti quelli presenti hanno giocato? Si va avanti (chi è uscito: le sue carte le sceglie il caso, dopo un attimo)
    function controllaSolo() {
      var R = st.R;
      if (!st.solo || !R || st.fase !== "gioco" || st.autoTo) return;
      var manca = R.pres.filter(function (id) { return !R.fatti[id]; });
      if (!manca.length) return fineFaseSolo();
      if (manca.some(function (id) { var p = pById(id); return p && !p.via; })) return;
      var passo = R.passo;
      st.autoTo = setTimeout(function () {
        st.autoTo = null;
        if (st.fase !== "gioco" || st.R !== R || R.passo !== passo) return;
        R.pres.forEach(function (id) { var p = pById(id); if (!R.fatti[id] && (!p || p.via)) giocaSoloH(id, casoSolo(t, R, id), true); });
        if (R.pres.every(function (id) { return R.fatti[id]; })) fineFaseSolo(); else { bd(); controllaSolo(); }
      }, 2500);
    }
    function fineFaseSolo() {
      var R = st.R;
      ferma();
      if (R.passo === "bonus") { R.passo = "malus"; R.fatti = {}; attendiSolo(); bd(); controllaSolo(); return; }
      st.fase = "arringa"; R.mostra = 0; st.timerN++; attendiSvela(); bd();
    }
    // lo svelamento: uno scenario alla volta (il giudice tocca «Prossimo»); se nessuno tocca, si va avanti da soli
    function attendiSvela(sec) {
      var R = st.R, i = R.mostra;
      attendi(sec || (st.arringaSec ? st.arringaSec + TEMPO_DOPO_ARRINGA : TEMPO_PRESENTA), function () {
        if (st.fase === "arringa" && st.R === R && R.mostra === i) avanzaSvela();
      });
    }
    function avanzaSvela() {
      var R = st.R;
      ferma();
      if (R.mostra < R.pres.length - 1) { R.mostra++; st.timerN++; attendiSvela(); }
      else {   // il verdetto: se nessuno decide in tempo, decide la sorte
        st.fase = "giudizio";
        attendi(TEMPO_GIUDIZIO, function () { if (st.fase === "giudizio" && st.R === R) decidiS(R.pres[Math.floor(Math.random() * R.pres.length)], true); });
      }
      bd();
    }
    function giudicaS(id, chi) {
      var R = st.R;
      if (st.fase !== "giudizio" || !R || !puoDecidere(id) || R.pres.indexOf(chi) < 0) return;
      decidiS(chi, false);
    }
    function decidiS(chi, sorte) {
      ferma();
      st.R.vincitore = chi; st.vincitore = chi; st.sorte = !!sorte; st.fase = "esito"; st.esitoOra = Date.now();
      st.punti[chi] = (st.punti[chi] || 0) + 1; statPersona(st, chi).roundVinti++;
      aspettaEsito(); bd(); fotoDopoLuce();
    }
    function fine() {
      ferma();
      st.classifica = conPosizioni(st.giocatori.filter(function (p) { return st.giocato[p.id]; })
        .map(function (p) { return { id: p.id, nome: p.nome, punti: st.punti[p.id] || 0 }; }));
      st.fase = "fine"; bd();
      // torneo online: i NOMI dei giocatori col loro posto (pari merito = stesso posto)
      if (t.risultato && st.classifica.length) t.risultato(st.classifica.map(function (r) { return { nome: r.nome, pos: r.pos }; }));
    }
    // "Nuova partita": stessa stanza, stessi amici, tutti tornano nella saletta
    function nuova() {
      ferma();
      st.giocatori = presenti(); st.giocatori.forEach(function (p) { p.guarda = false; });
      if (st.manuale) Object.keys(st.assegna).forEach(function (id) { if (!pById(id)) delete st.assegna[id]; });
      else st.assegna = {};
      st.fase = "lobby"; st.round = 0; st.totale = 0; st.classifica = null; st.vincitore = null; st.sorte = false;
      st.scen = scenVuoti(); st.mani = null; st.passi = []; st.passo = 0;
      st.R = null; st.pronti = []; st.capo = [null, null]; st.segni = {}; st.stella = null;
      st.ruoli = false; st.scelte = {};
      bd();
    }
    var cb = {
      sonoHost: true, myId: IO,
      mano: function (k) { return st.mani ? st.mani[k] : null; },
      manoS: function () { return soloMio(IO); },
      firme: function () { return st.firme; },
      segni: function (k) { return segniDi(k); },
      omino: function (id) { var p = pById(id); return p ? p.omino : null; },
      onBianca: function (testo) { bianca(IO, testo); },
      onPronto: function (k) { pronto(IO, k); },
      onSegna: function (carte) { segna(IO, carte); },
      onSquadra: function (k) { scegliSquadra(IO, k); },
      onStella: function (i) { stella(IO, i); },
      onRuolo: function (r) { scegliRuolo(IO, r); }, onParti: function () { parti(IO); },
      onAssegna: function (pid, val) {
        if (st.fase !== "lobby" || !pById(pid)) return;
        if (val === "g") Object.keys(st.assegna).forEach(function (id) { if (st.assegna[id] === "g") delete st.assegna[id]; });   // un giudice solo
        if (val == null) delete st.assegna[pid]; else st.assegna[pid] = val;
        bd();
      },
      onComincia: comincia, onProssimo: prossimo, onNuova: nuova,
      onGioca: function (carte) { giocaCarte(IO, carte); },
      onAvanti: function () { avanti(IO); },
      onGiudica: function (k) { if (st.solo) giudicaS(IO, k); else giudica(IO, k); },
      onEsci: function (ok) {
        if (ok !== true && st.fase !== "lobby" && st.fase !== "fine") return t.conferma("Chiudere la partita per tutti?", null, "Esci", function () { cb.onEsci(true); });
        ferma(); clearTimeout(tAttesi); t.ricorda(null); chiudiLente(); rete.chiudi(); t.esci();
      }
    };
    if (ripresa) riprendi(); else bd();
  }

  function ospiteSipero(t, codice) {
    if (!(window.SGNet && SGNet.disponibile())) return senzaReteS(t);
    var el = t.el, V = { t: t };
    var S = { myId: null, vm: null, rete: null, nome: "", msg: null, mano: null, manoSq: -1, manoV: -1, chiesta: 0, riprova: null,
      firme: {}, solo: null, omini: {}, segni: null, segnaTo: null };   // segni: { sq, r, s } (👆 le carte segnate dalla mia squadra); solo: { mano, mie, firme, v } (🙋 la mia mano e le carte che ho già giocato)
    function invia(m) { if (S.rete) S.rete.invia(m); }
    function richiedi() {
      if (Date.now() - S.chiesta > 1800) { S.chiesta = Date.now(); invia({ t: "chiediMano" }); }
      if (!S.riprova) S.riprova = setTimeout(function () { S.riprova = null; disegna(); }, 2500);
    }
    var cb = {
      sonoHost: false, myId: null,
      // la mia mano (arriva a parte, solo a me); se manca o è vecchia la richiedo
      mano: function (k) {
        if (S.mano && S.manoSq === k && S.vm && S.manoV === S.vm.manoV[k]) return S.mano;
        richiedi();
        return null;
      },
      manoS: function () {
        if (S.solo && S.vm && S.vm.mv && S.solo.v === S.vm.mv[S.myId]) return S.solo;
        richiedi();
        return null;
      },
      firme: function () { return S.firme; },
      segni: function (k) { return S.segni && S.segni.sq === k && S.vm && S.segni.r === S.vm.round ? S.segni.s : {}; },
      omino: function (id) { return S.omini[id] || null; },
      onBianca: function (testo) { invia({ t: "bianca", testo: testo }); },
      onPronto: function (k) { invia({ t: "pronto", k: k }); },
      // 👆 i segni partono un attimo dopo l'ultimo tocco (tanti tocchi veloci = un messaggio)
      onSegna: function (carte) { clearTimeout(S.segnaTo); S.segnaTo = setTimeout(function () { invia({ t: "segna", carte: carte }); }, 150); },
      onSquadra: function (k) { invia({ t: "squadra", sq: k }); },
      onStella: function (i) { invia({ t: "stella", i: i }); },
      onRuolo: function (r) { invia({ t: "ruolo", r: r }); }, onParti: function () {},
      onAssegna: function () {}, onComincia: function () {}, onNuova: function () {}, onProssimo: function () {},
      onGioca: function (carte) { invia({ t: "gioca", carte: carte }); },
      onGiudica: function (k) { invia(S.vm && S.vm.solo ? { t: "giudica", chi: k } : { t: "giudica", sq: k }); },
      onAvanti: function () { invia({ t: "avanti" }); },
      onEsci: function (ok) {
        if (ok !== true && S.vm && S.vm.fase !== "lobby" && S.vm.fase !== "fine") return t.conferma("Uscire dalla partita?", null, "Esci", function () { cb.onEsci(true); });
        chiudiLente(); if (S.rete) S.rete.chiudi(); t.esci();
      }
    };
    function disegna() { if (S.vm) { cb.myId = S.myId; disegnaOn(V, S.vm, cb); } }
    if (t.nomeProfilo && t.nomeProfilo()) { S.nome = t.nomeProfilo(); collega(); } else chiediNome();   // col profilo si entra da soli
    function chiediNome() {
      var s = t.schermata({ icona: "🤨", titolo: "Entra nella partita", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      var input = el("input", { type: "text", placeholder: "Il tuo nome", maxlength: "16", class: "link-campo" });
      s._contenuto.appendChild(input);
      s._piede.appendChild(el("button", { class: "btn btn-primario", text: "Entra ▶", onclick: function () {
        try { SG.audioCtx && SG.audioCtx(); } catch (e) {}
        S.nome = (input.value || "").trim().slice(0, 16) || "Amico"; collega();
      } }));
      t.mostra(s);
    }
    function collega() {
      var s = t.schermata({ icona: "🤨", titolo: "Entro nella partita…", sotto: "Stanza " + String(codice).toUpperCase(), indietro: t.esci });
      S.msg = el("p", { class: "modulo-nota", style: "text-align:center;margin-top:24px", text: "Collegamento in corso…" });
      s._contenuto.appendChild(S.msg);
      t.mostra(s);
      S.rete = SGNet.entra(codice, {
        onAperto: function (id) {
          S.myId = id; cb.myId = id;
          invia({ t: "join", nome: S.nome, omino: t.mioOmino ? t.mioOmino(S.nome) : null });
          setTimeout(function () { if (!S.vm && S.msg) S.msg.textContent = "Non trovo la partita. Controlla il codice, o chi la organizza non ha ancora aperto la stanza…"; }, 12000);
        },
        onMsg: function (m) {
          if (!m || !m.t) return;
          if (m.to && m.to !== S.myId) return;   // era per un altro telefono
          if (m.t === "vm") {
            S.vm = m.vm;
            (m.vm.giocatori || []).forEach(function (g) { if (g.omino) S.omini[g.id] = avatarOkS(g.omino); });   // (in saletta: gli avatar per dopo)
            disegna();
          }
          else if (m.t === "mano") { if (m.per && m.per.indexOf(S.myId) >= 0) { S.mano = m.mano; S.manoSq = m.sq; S.manoV = m.v; S.firme = m.firme || {}; disegna(); } }
          else if (m.t === "segni") { if (m.per && m.per.indexOf(S.myId) >= 0) { S.segni = { sq: m.sq, r: m.r, s: m.s || {} }; disegna(); } }
          else if (m.t === "manoS") { if (m.per && m.per.indexOf(S.myId) >= 0) { S.solo = { mano: m.mano, mie: m.mie || {}, firme: m.firme || {}, v: m.v }; disegna(); } }
          else if (m.t === "omini") { Object.keys(m.o || {}).forEach(function (id) { S.omini[id] = avatarOkS(m.o[id]); }); disegna(); }
          else if (m.t === "piena") { if (S.rete) S.rete.chiudi(); erroreS(t, "La stanza è piena: ci sono già 10 giocatori. Chiedi a chi la organizza di aprirne un'altra."); }
        },
        // chiusa apposta da chi organizza (se sparisce lo dice il core): sulla classifica finale la classifica resta
        onChiuso: function () {
          chiudiLente();
          if (S.vm && S.vm.fase === "fine") { if (cb._notaFine && document.body.contains(cb._notaFine)) cb._notaFine.textContent = "🚪 Chi organizzava ha chiuso la stanza."; return; }
          erroreS(t, "🚪 Chi organizzava ha chiuso la partita.");
        },
        // (arriva solo se il primo collegamento non riesce: a partita cominciata la rete si ricollega da sola)
        onErrore: function () { chiudiLente(); erroreS(t, "Problema di collegamento. Controlla la connessione e riprova."); }
      });
    }
  }

  function erroreS(t, txt) {
    var s = t.schermata({ icona: "⚠️", titolo: "Ops" });
    s._contenuto.appendChild(t.el("p", { text: txt, style: "font-size:1.05rem;line-height:1.5" }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "🏠 Torna all'inizio", onclick: t.esci }));
    t.mostra(s);
  }
  function senzaReteS(t) {
    var s = t.schermata({ icona: "🔗", titolo: "Serve il sito pubblicato", indietro: t.esci });
    s._contenuto.appendChild(t.el("p", { style: "font-size:1.05rem;line-height:1.5",
      text: "Il gioco \"ognuno dal suo telefono\" funziona quando l'app è aperta dal sito pubblicato. Intanto potete giocare su un telefono solo." }));
    s._piede.appendChild(t.el("button", { class: "btn btn-primario", text: "Ok", onclick: t.esci }));
    t.mostra(s);
  }

  // ---------- disegno online (uguale per host e ospiti) ----------
  function squadreVm(vm) {
    var sq = [[], []];
    vm.giocatori.forEach(function (g) { var a = squadraDi(vm.assegna, g.id); if (a >= 0) sq[a].push(g); });
    return sq;
  }
  function disegnaOn(V, vm, cb) {
    V.ultimoVm = vm; V.cb = cb;   // (la fine della luce del verdetto ridisegna con l'ultima foto)
    if (vm.fase === "lobby") { V.ui = null; V.fineSess = null; V.roundVisto = "fuori"; return lobbyOn(V, vm, cb); }
    if (vm.fase === "fine") { V.ui = null; V.roundVisto = "fuori"; return fineOn(V, vm, cb); }
    if (vm.fase === "ruoli") { V.ui = null; V.roundVisto = "fuori"; return ruoliOn(V, vm, cb); }
    var solo = !!vm.solo;
    if (!V.ui || !document.body.contains(V.ui.s) || V.ui.solo !== solo) V.ui = creaScena(V.t, cb.onEsci, solo);
    if (solo) aggiornaSolo(V, vm, cb); else aggiornaOn(V, vm, cb);
    V.ui.nuova = false;
    presentaRound(V, vm, cb);
  }
  // 🥊 all'inizio di ogni round, su tutti i telefoni: il giudice e chi gioca, con le faccine grandi (chi arriva dopo non la vede)
  function presentaRound(V, vm, cb) {
    // solo per chi c'era già prima che il round cominciasse (chi arriva o ricarica può ricevere una foto vecchia di qualche secondo)
    var k = vm.sessione + "|" + vm.round, prima = V.roundVisto;
    V.roundVisto = vm.fase === "gioco" || vm.fase === "arringa" || vm.fase === "giudizio" || vm.fase === "esito" ? k : "fuori";
    if (prima === undefined || prima === k) return;
    if (vm.fase !== "gioco" || V.introK === k || (vm.inizio || 0) > 2500 || !vm.giudiceId) return;
    if (!vm.solo) return;   // 👥 a squadre niente presentazione: giudice e squadre si sono appena visti nella schermata dei ruoli (23 nov 2026, scelta C del proprietario: «toglila, non ha senso»)
    if (vm.solo ? vm.passoS !== "bonus" : !(vm.step && vm.step.i === 0)) return;
    V.introK = k;
    function persona(g, capo) { return { nome: g.id === cb.myId ? "Tu" : g.nome, omino: cb.omino(g.id), capo: capo }; }   // (23 nov 2026: «Paky (tu)» si tagliava)
    var gruppi;
    if (vm.solo) {
      gruppi = [{ titolo: "🙋 Ognuno per sé", k: "s", persone: (vm.pres || []).map(function (id) { var g = vm.giocatori.filter(function (x) { return x.id === id; })[0]; return g ? persona(g) : null; }).filter(Boolean) }];
    } else {
      var sqs = squadreVm(vm), capi = vm.capo || [];
      gruppi = [0, 1].map(function (q) { return { titolo: emoSq(q) + " " + nomeSq(q), k: q, persone: sqs[q].map(function (g) { return persona(g, capi[q] === g.id && sqs[q].length > 1); }) }; });
    }
    var tit = vm.totale > 1 ? "Round " + vm.round + " di " + vm.totale : "Round unico";
    var sotto = vm.solo ? "2 Bonus sul tuo scenario, poi 1 Malus su quello del vicino" : "👑 = il capo: decide le carte, gli altri le segnano";
    presenta(V.ui, { titolo: "🥊 " + tit, giudice: { nome: vm.giudiceId === cb.myId ? "Tu" : vm.giudiceNome, omino: cb.omino(vm.giudiceId) }, gruppi: gruppi, sotto: sotto });
  }

  function lobbyOn(V, vm, cb) {
    var t = V.t, el = t.el, r = vm.regole;
    if (!V.lobbyNodo) { stile(); V.lobbyNodo = el("div", { class: "sp-lobby" }); }
    var pres = vm.giocatori.filter(function (g) { return !g.via; });
    var sig = JSON.stringify([r, vm.assegna, pres.map(function (g) { return [g.id, g.nome]; }), cb.sonoHost, cb.myId]);
    if (sig !== V.lobbySig) {   // si rifà solo se è cambiato qualcosa (niente lampeggio)
      V.lobbySig = sig;
      var n = V.lobbyNodo; svuota(n);
      var solo = r.si === "solo";
      var giri = r.squadre === "ruoli" ? "🔁 " + r.round + " round: prima di ogni round scegliete voi chi fa il giudice e in che squadra stare" : r.squadre === "mano" ? "🔁 Un round, squadre e giudice scelti da chi organizza" :
        "🔁 " + r.giri + (r.giri === 1 ? " giro" : " giri") + ": ognuno fa il giudice " + (r.giri === 1 ? "una volta" : r.giri + " volte") + (solo ? "" : ", squadre a sorte a ogni round");
      n.appendChild(el("div", { class: "sp-info" }, [
        el("div", { text: solo ? "🙋 Ognuno per sé: 2 Bonus sul tuo scenario, poi 1 Malus su quello del vicino" : "📜 " + (r.vuota ? "Personalizzata senza fasi" : riassuntoSeq(r.seq)) }),
        el("div", { text: giri }),
        el("div", { text: "🎤 Arringa " + (r.arringa ? r.arringa + " secondi " + (solo ? "a testa" : "a squadra") : "libera") }),
        r.bianca ? el("div", { text: "🃏 Carta bianca: una a testa, la scrivi tu" }) : null
      ]));
      if (r.squadre === "mano") {
        n.appendChild(el("div", { class: "etichetta", text: "Giudice e squadre" }));
        if (cb.sonoHost) n.appendChild(el("p", { class: "modulo-nota", style: "margin:0", text: "Tocca ⚖️ per il giudice (uno solo), 🟥 o 🟦 per le squadre, 👀 per chi guarda." }));
        pres.forEach(function (g) {
          var a = vm.assegna[g.id];
          var ruolo = a === "g" ? "⚖️ Giudice" : a === 0 ? "🟥 Squadra 1" : a === 1 ? "🟦 Squadra 2" : "👀 Guarda";
          var riga = el("div", { class: "sp-riga" }, [el("div", { class: "sp-riga-t" }, [el("span", { text: g.nome + (g.id === cb.myId ? " (tu)" : "") }), el("span", { text: ruolo })])]);
          if (cb.sonoHost) {
            var ruoli = el("div", { class: "sp-ruoli" });
            [["⚖️", "g"], ["🟥", 0], ["🟦", 1], ["👀", null]].forEach(function (o) {
              var att = o[1] === null ? (a !== "g" && a !== 0 && a !== 1) : a === o[1];
              ruoli.appendChild(el("button", { class: att ? "attiva" : "", text: o[0], onclick: function () { cb.onAssegna(g.id, o[1]); } }));
            });
            riga.appendChild(ruoli);
          }
          n.appendChild(riga);
        });
      }
    }
    var ok, nota = null;
    if (r.vuota) { ok = false; nota = "Nella Personalizzata non c'è nessuna fase: aggiungine almeno una da ⚙️ Regole."; }
    else if (r.squadre === "mano") {
      var sq = squadreVm({ giocatori: pres, assegna: vm.assegna });
      ok = !!(pres.some(function (g) { return vm.assegna[g.id] === "g"; }) && sq[0].length && sq[1].length);
      if (!ok) nota = "Per cominciare servono un giudice (⚖️) e almeno uno per squadra (🟥 🟦).";
    } else ok = pres.length >= MIN;
    t.lobby({ host: cb.sonoHost, codice: vm.codice, pronta: vm.pronta, min: MIN, vuoti: Math.max(0, MIN - pres.length), puoComincia: ok,
      spettatore: t.guarda ? "👀 Guardi soltanto" : false,   // (chi guarda col link)
      giocatori: pres.map(function (g) { return { id: g.id, nome: g.nome, omino: g.omino || null, host: g.id === (vm.hostId || "host"), tu: g.id === cb.myId }; }),
      extra: [V.lobbyNodo], nota: cb.sonoHost && pres.length >= MIN && !ok ? nota : null,
      attesa: r.squadre === "ruoli" ? "Aspetta che si cominci: poi scegliete chi fa il giudice e le squadre. 🤨" : r.squadre === "mano" ? "Aspetta: chi organizza sta scegliendo il giudice e le squadre. 🤨" : "Aspetta che si cominci: giudice e squadre li decide la sorte. 🤨",
      onComincia: cb.onComincia, onEsci: cb.onEsci });
  }

  // 👥 la schermata dei ruoli (online a squadre, prima di ogni round): tre colonne, ognuno tocca dove vuole andare.
  // Niente timer: si parte col tasto di chi tiene la partita. Si rifà solo la parte che cambia (niente lampeggio)
  function ruoliOn(V, vm, cb) {
    var t = V.t, el = t.el, R = V.ruoli;
    if (!R || !document.body.contains(R.s)) {
      stile();
      var s = t.schermata({}); s.classList.add("sp-piena");
      R = V.ruoli = { s: s, k: {} };
      R.tit = el("b"); R.sotto = el("small");
      var barra = el("div", { class: "sp-barra" }, [el("button", { class: "sp-esci", "aria-label": "Esci", text: "‹", onclick: cb.onEsci }), el("div", { class: "sp-fase" }, [R.tit, R.sotto])]);
      R.cols = ["g", 0, 1].map(function (r) {
        var c = { r: r, lista: el("div", { class: "sp-rc-lista" }), stato: el("div", { class: "sp-rc-stato" }) };
        c.nodo = el("button", { type: "button", class: "sp-rc " + (r === "g" ? "cg" : "c" + r), onclick: function () {
          if (c.nodo.classList.contains("no")) return;
          vibra(15); cb.onRuolo(r);
        } }, [el("div", { class: "sp-rc-testa" }, [el("span", { class: "sp-rc-ic", text: r === "g" ? "⚖️" : emoSq(r) }), el("span", { text: r === "g" ? "Giudice" : nomeSq(r) })]), c.lista, c.stato]);
        return c;
      });
      R.guida = el("p", { class: "sp-rc-guida" });
      R.liberi = el("div", { class: "sp-rc-liberi" }); R.punti = el("div", { class: "sp-rc-punti" });
      R.azione = el("div", { class: "sp-azione" }); R.piede = el("div", { class: "sp-piede" });
      R.scena = el("div", { class: "sp-scena sp-ruoli-sc" + (t.guarda ? " sp-targa" : "") }, [barra, R.guida,
        el("div", { class: "sp-rc-cols" }, R.cols.map(function (c) { return c.nodo; })), R.liberi, R.punti, R.azione, R.piede]);
      s._contenuto.appendChild(R.scena);
      t.mostra(s);
      var f = t.faccine && !t.guarda ? t.faccine() : null; if (f) { f.classList.add("sp-faccine"); R.azione.appendChild(f); }
    }
    var sc = vm.scelte || {}, pres = vm.giocatori.filter(function (g) { return !g.via; }), mio = sc[cb.myId];
    var guardo = !!t.guarda || !pres.some(function (g) { return g.id === cb.myId; });
    testoSe(R.tit, "Round " + Math.min(vm.round + 1, vm.totale) + " di " + vm.totale);
    testoSe(R.sotto, "Chi fa cosa?");
    testoSe(R.guida, guardo ? "👀 Stanno scegliendo chi fa il giudice e le squadre" : mio === "g" ? "⚖️ Fai il giudice: puoi ancora cambiare" : mio === 0 || mio === 1 ? "Sei nella " + emoSq(mio) + " " + nomeSq(mio) + ": puoi ancora cambiare" : "👆 Tocca dove vuoi andare: giudice o una squadra");
    var conta = { g: 0, 0: 0, 1: 0 }, contaSenzaMe = [0, 0];
    pres.forEach(function (g) { var r = sc[g.id]; if (r === "g" || r === 0 || r === 1) { conta[r]++; if (g.id !== cb.myId && r !== "g") contaSenzaMe[r]++; } });
    R.cols.forEach(function (c) {
      var membri = pres.filter(function (g) { return sc[g.id] === c.r; });
      var km = JSON.stringify(membri.map(function (g) { return [g.id, g.nome, !!cb.omino(g.id)]; }));
      if (R.k[c.r] !== km) {
        R.k[c.r] = km; svuota(c.lista);
        membri.forEach(function (g) {
          c.lista.appendChild(el("div", { class: "sp-rc-p" + (g.id === cb.myId ? " io" : "") }, [el("span", { class: "sp-av", html: avatarHtml(g.nome, cb.omino(g.id)) }), el("span", { text: g.id === cb.myId ? "Tu" : g.nome })]));
        });
      }
      var qui = mio === c.r, no = false, stato = "";
      if (guardo) no = true;
      else if (qui) stato = "✓ Sei qui";
      else if (c.r === "g" && conta.g) { no = true; stato = "C'è già"; }
      else if (c.r !== "g" && contaSenzaMe[c.r] - contaSenzaMe[1 - c.r] >= 2) { no = true; stato = "Troppi rispetto all'altra"; }
      else stato = c.r === "g" ? "Tocca per fare il giudice" : "Tocca per entrare";
      c.nodo.classList.toggle("mio", qui); c.nodo.classList.toggle("no", no);
      testoSe(c.stato, stato);
    });
    var liberi = pres.filter(function (g) { var r = sc[g.id]; return r !== "g" && r !== 0 && r !== 1; });
    testoSe(R.liberi, liberi.length ? "Devono ancora scegliere: " + liberi.map(function (g) { return g.id === cb.myId ? "tu" : g.nome; }).join(", ") : "✓ Hanno scelto tutti");
    var conPunti = vm.round > 0 ? pres.slice().sort(function (a, b) { return b.punti - a.punti; }) : [];
    testoSe(R.punti, conPunti.length ? "🏆 " + conPunti.map(function (g) { return (g.id === cb.myId ? "Tu" : g.nome) + " " + g.punti; }).join(" · ") : "");
    // il piede: il tasto di chi tiene la partita (spento col perché) o chi aspetta
    var pz = vm.piano || { ok: false, perche: "" }, host = vm.giocatori.filter(function (g) { return g.id === (vm.hostId || "host"); })[0];
    // (se si parte adesso) chi fa il giudice scelto dal gioco e chi va nella squadra più piccola: detto a chi tocca
    var nAuto = pz.auto ? (pz.auto === cb.myId ? "tu" : (vm.giocatori.filter(function (g) { return g.id === pz.auto; })[0] || {}).nome) : null;
    var nota = pz.ok ? [nAuto ? "⚖️ Se nessuno lo sceglie, " + (nAuto === "tu" ? "il giudice lo fai tu" : "il giudice lo fa " + nAuto) : "", pz.liberi ? "Chi non sceglie va nella squadra più piccola" : ""].filter(Boolean).join(" · ") : pz.perche;
    var kp = JSON.stringify([cb.sonoHost, pz.ok, nota, host ? host.nome : ""]);
    if (R.kp !== kp) {
      R.kp = kp; svuota(R.piede);
      if (cb.sonoHost) {
        var b = el("button", { class: "btn btn-primario", text: "▶ Si parte", onclick: function () { if (!pz.ok) return; b.disabled = true; vibra(20); cb.onParti(); } });
        if (!pz.ok) b.disabled = true;
        R.piede.appendChild(el("div", { class: "sp-nota sp-rc-nota" + (pz.ok ? "" : " no"), text: nota || "Quando siete pronti, tocca «Si parte»" }));
        R.piede.appendChild(b);
      } else {
        R.piede.appendChild(el("div", { class: "sp-nota sp-rc-nota" }, [nota ? el("div", { text: nota }) : null, el("div", { class: "sp-rc-chi", text: "Quando siete pronti, " + (host ? host.nome : "chi organizza") + " fa partire il round ▶" })]));
      }
    }
  }

  var SUSPENSE = 3000;   // 🥁 quanto gira la luce prima del verdetto (ms)
  function aggiornaOn(V, vm, cb) {
    var ui = V.ui, t = V.t, el = t.el, step = vm.step;
    var io = vm.giocatori.filter(function (g) { return g.id === cb.myId; })[0];
    var me = { sq: squadraDi(vm.assegna, cb.myId), giudice: vm.giudiceId === cb.myId, guarda: io ? io.guarda : true };
    me.decide = (me.giudice && !vm.giudiceVia) || (cb.sonoHost && (vm.giudiceVia || !vm.giudiceId));
    var sqs = squadreVm(vm), round = vm.totale > 1 ? "Round " + vm.round + " di " + vm.totale : "Round unico";
    function gioc(id) { return vm.giocatori.filter(function (x) { return x.id === id; })[0] || null; }
    // 👑 il capo di ogni squadra (se è uscito, decide chiunque della squadra)
    var capi = vm.capo || [null, null];
    function capoDi(k) { var c = gioc(capi[k]); return c && !c.via && vm.assegna[c.id] === k ? c : null; }
    // il conto alla rovescia di questa attesa (lo stesso anche se la schermata si ridisegna)
    var kConto = "sp|" + vm.sessione + "|" + vm.round + "|" + vm.fase + "|" + (vm.fase === "gioco" && step ? step.i : vm.parla);
    function conto(nodo, fn, pre) { if (vm.resta && t.contoAvanti) t.contoAvanti(nodo, vm.resta, fn || null, kConto, pre); }
    // la fila delle faccine (online): dove si aspetta o si guarda
    // (chi guarda col link le ha nella targhetta del core)
    function faccine(dove) { var f = t.faccine && !t.guarda ? t.faccine() : null; if (f) { f.classList.add("sp-faccine"); dove.appendChild(f); } }
    // 🥁 il verdetto appena deciso: prima la luce che passa da una squadra all'altra, poi chi ha vinto (chi arriva dopo la vede già ferma)
    var kv = vm.sessione + "|" + vm.round, susp = false;
    if (vm.fase === "esito") {
      if (V.suspK !== kv) {
        V.suspK = kv; V.suspFine = (vm.dopo || 0) < 2500 ? Date.now() + SUSPENSE - (vm.dopo || 0) : 0;
        if (V.suspFine) luce(ui.cols.map(function (c) { return c.nodo; }), vm.vincitore, V.suspFine - Date.now(), function () { if (V.ui === ui && V.ultimoVm) disegnaOn(V, V.ultimoVm, V.cb); });
      }
      susp = !!V.suspFine && Date.now() < V.suspFine - 30;
    }

    // barra in alto
    var fase = vm.fase === "gioco" && step ? step.ic + " " + step.nome : vm.fase === "arringa" ? "🎤 L'arringa" : vm.fase === "giudizio" ? "⚖️ Il verdetto" : "🏅 Il verdetto";
    barra(ui, fase, round + (vm.fase === "gioco" && step ? " · fase " + step.fi + " di " + step.ftot : ""),
      "⚖️ " + (me.giudice ? "Tu" : vm.giudiceNome || "—") + (vm.giudiceVia ? " 💤" : ""), vm.giudiceId ? { nome: vm.giudiceNome, omino: cb.omino(vm.giudiceId) } : null);

    // 👥 dove sono io in questo round (il colore della mia squadra)
    var mioCls = me.giudice ? "g" : me.sq >= 0 ? "c" + me.sq : "x";
    var mioTx = me.giudice ? "⚖️ Sei il giudice" : me.sq >= 0 ? "Sei nella " + emoSq(me.sq) + " " + nomeSq(me.sq) : t.guarda ? "👀 Guardi la partita" : "👀 Questo round guardi";
    if (ui.mio.className !== "sp-mio " + mioCls) ui.mio.className = "sp-mio " + mioCls;
    testoSe(ui.mio, mioTx); ui.mio.hidden = false;
    // il tavolo (in testa a ogni scenario le faccine di chi lo gioca, 👑 accanto al capo)
    // (il giudice, mentre si giocano le carte, ha il tavolo grande: deve solo leggere, e prima aveva mezzo schermo vuoto)
    var giudTavolo = vm.fase === "gioco" && !!step && !!me.giudice;
    largo(ui, vm.fase !== "gioco" || giudTavolo);
    var aggiunte = 0, ultimoTipo = null;
    [0, 1].forEach(function (k) {
      var capo = capoDi(k);
      var ordinati = sqs[k].slice().sort(function (a, b) { return (capo && b.id === capo.id ? 1 : 0) - (capo && a.id === capo.id ? 1 : 0); });   // (il capo per primo: la corona non si taglia)
      var nomi = ordinati.map(function (m) { return (capo && capo.id === m.id && vm.fase === "gioco" ? "👑 " : "") + (m.id === cb.myId ? "Tu" : m.nome) + (m.via ? " 💤" : ""); }).join(", ");
      var a = aggiornaColonna(ui.cols[k], { titolo: titoloColonna(k, nomi), voci: vm.scen[k].voci, anima: !ui.nuova,
        turno: (vm.fase === "gioco" && step && step.sq === k) || (vm.fase === "arringa" && vm.parla === k),
        mia: me.sq === k, vince: vm.fase === "esito" && !susp && vm.vincitore === k });
      mettiFacce(ui.cols[k], sqs[k].map(function (m) { return { id: m.id, nome: m.nome, omino: cb.omino(m.id), via: m.via }; }));
      if (a) { aggiunte += a; ultimoTipo = vm.scen[k].voci[vm.scen[k].voci.length - 1].tipo; }
    });
    if (aggiunte && !ui.nuova) suono(ultimoTipo);
    // ⭐ la carta che ha convinto il giudice: la sceglie lui, sullo scenario che ha vinto, appena finita la luce
    var possoStella = vm.fase === "esito" && !susp && me.giudice && !vm.giudiceVia && !vm.sorte && vm.stella == null;
    [0, 1].forEach(function (k) {
      var vince = vm.fase === "esito" && !susp && vm.vincitore === k;
      segnaStella(ui.cols[k], vince ? vm.stella : null);
      scegliStella(ui.cols[k], possoStella && vince ? function (i) { cb.onStella(i); } : null);
    });

    // la riga del turno
    var turno = "";
    if (vm.fase === "gioco" && step) {
      if (vm.vuota) turno = "🎲 La " + nomeSq(step.sq) + " è rimasta senza giocatori: le carte le sceglie il caso…";
      else if (me.sq === step.sq) turno = emoSq(step.sq) + " Tocca a voi: " + istruzione(step, step.sq, true);
      else turno = emoSq(step.sq) + " Tocca alla " + nomeSq(step.sq) + ": " + istruzione(step, step.sq, false);
    } else if (vm.fase === "arringa") turno = "🎤 " + emoSq(vm.parla) + " Parla la " + nomeSq(vm.parla) + (me.sq === vm.parla ? " (voi!)" : "") + ": convincete il giudice!";
    else if (vm.fase === "giudizio") turno = me.decide ? "⚖️ Quale scenario è il migliore da vivere?" : (vm.giudiceVia || !vm.giudiceId ? "⚖️ Il giudice è uscito: decide chi organizza…" : "⚖️ Il giudice sta decidendo…");
    else if (vm.fase === "esito") turno = susp ? "🥁 Il giudice ha deciso…" : (vm.sorte ? "🎲 Nessuno ha deciso: la sorte dà il round alla " : "🏅 Il round va alla ") + nomeSq(vm.vincitore) + "!";
    testoSe(ui.turno, turno);

    // azione e piede: si rifanno solo quando cambia la situazione (la selezione resta)
    var chiave, fai;
    if (vm.fase === "gioco" && step) {
      if (me.giudice) {
        chiave = "giud";
        fai = function () {
          ui.azione.appendChild(ui.t.el("div", { class: "sp-nota sp-giud-nota", text: "⚖️ Sei il giudice: le carte arrivano man mano, leggile e ridi! Alla fine scegli tu." }));
          faccine(ui.azione);
        };
      }
      else if (me.sq < 0) {
        // ✋ arrivato a partita in corso: sceglie la squadra ed entra subito (o guarda ed entra dal prossimo round)
        var scegli = me.guarda && !t.guarda && io && !io.via && !vm.manuale && !vm.ruoli;
        chiave = "guarda|" + me.guarda + "|" + !!t.guarda + "|" + (scegli ? sqs[0].length + "-" + sqs[1].length : "");
        fai = function () {
          if (!scegli) { messaggio(ui, "👀", t.guarda ? "Guardi la partita: fai il tifo!" : me.guarda ? (vm.ruoli ? "Partita in corso: finito questo round scegli anche tu dove giocare. Intanto guardi!" : "Partita in corso: entri dal prossimo round. Intanto guardi!") : "Questo round lo giocano gli altri: tu guardi."); faccine(ui.azione); return; }
          var piccola = sqs[0].length === sqs[1].length ? -1 : (sqs[0].length < sqs[1].length ? 0 : 1);
          var box = el("div", { class: "sp-entra" }, [el("p", { text: "✋ Sei arrivato a partita in corso: scegli la tua squadra ed entri subito!" })]);
          [0, 1].forEach(function (k) {
            var b = el("button", { class: "btn sp-vota sp-entra-b c" + k, onclick: function () {
              if (b.disabled) return;
              var tutti = box.querySelectorAll("button");
              [].forEach.call(tutti, function (x) { x.disabled = true; }); vibra(15); cb.onSquadra(k);
              setTimeout(function () { if (document.body.contains(box)) [].forEach.call(tutti, function (x) { x.disabled = false; }); }, 3000);   // (la scelta non è arrivata: si riprova)
            } }, [
              el("span", { text: emoSq(k) + " " + nomeSq(k) }), el("small", { text: sqs[k].map(function (m) { return m.nome; }).join(", ") + (k === piccola ? " · 👈 è più piccola" : "") })]);
            box.appendChild(b);
          });
          ui.azione.appendChild(box);
          notaPiede(ui, "Oppure resta a guardare: entri dal prossimo round.");
        };
      } else {
        var mano = cb.mano(me.sq);
        if (!mano) { chiave = "carte"; fai = function () { messaggio(ui, "🃏", "Arrivano le tue carte…"); }; }
        else {
          var mio = step.sq === me.sq && !vm.vuota;
          var tipo = mio ? step.tipo : ((vm.prossimi && vm.prossimi[me.sq]) || "bonus"), altro = tipo === "bonus" ? "malus" : "bonus";
          // 👆 si segnano le carte anche mentre gioca l'altra squadra (per il vostro prossimo turno)
          var quante = mio ? step.n : ((vm.prossimiN && vm.prossimiN[me.sq]) || 0);
          var capo = capoDi(me.sq), sonoCapo = !capo || capo.id === cb.myId;
          var segni = (cb.segni && cb.segni(me.sq)) || {};
          var firme = cb.firme() || {}, scrive = mio && puoScrivere(vm, cb) && !mano[tipo].some(function (c) { return firme[c]; });
          chiave = "mano|" + mio + "|" + (mio ? step.i + "|" + step.n : "") + "|" + quante + "|" + sonoCapo + "|" + (capo ? capo.id : "") + "|" + tipo + "|" + mano[tipo].join("§") + "|" + mano[altro].join("§") + "|" + scrive + "|" + JSON.stringify(firmeDi(mano, firme));
          fai = function () {
            var bOk = null, pre = preselDi(V, mano[tipo]) || [];
            var presel = pre.concat((segni[cb.myId] || []).filter(function (c) { return mano[tipo].indexOf(c) >= 0 && pre.indexOf(c) < 0; }));
            var m = creaMano(t, { carte: mano[tipo], tipo: tipo, quante: quante, altre: { tipo: altro, carte: mano[altro] }, firme: firme, presel: presel.length ? presel : null,
              onCambia: function (sel) {
                if (bOk) bOk.disabled = sel.length !== step.n;
                var k = JSON.stringify(sel);
                if (quante && cb.onSegna && V.segnoK !== k) { V.segnoK = k; cb.onSegna(sel); }
              } });
            ui.manoM = m;
            ui.azione.appendChild(m.nodo);
            if (mio && sonoCapo) {
              if (scrive) ui.piede.appendChild(tastoBiancaOn(V, cb, tipo));
              bOk = el("button", { class: "btn btn-primario", text: "Gioca ▶", disabled: "disabled", onclick: function () {
                var s = m.sel(); if (s.length !== step.n) return;
                bOk.disabled = true; bOk.textContent = "…"; cb.onGioca(s);
              } });
              bOk.disabled = m.sel().length !== step.n;
              ui.piede.appendChild(bOk);
              conto(bOk);   // a tempo scaduto vanno le carte con più faccine (lo fa chi organizza)
            } else if (mio) {
              // 👑 decide il capo: io segno le mie preferite, la mia faccina compare sulla carta
              if (scrive) ui.piede.appendChild(tastoBiancaOn(V, cb, tipo));
              var sotto = el("small");
              ui.piede.appendChild(el("div", { class: "sp-capo" }, [el("span", { class: "sp-fa", html: avatarHtml(capo.nome, cb.omino(capo.id)) }),
                el("div", {}, [el("span", { text: "👑 Decide " + capo.nome }), sotto])]));
              if (vm.resta) conto(sotto, null, "Segna le tue preferite · si gioca tra "); else sotto.textContent = "Segna le tue preferite";
            } else notaPiede(ui, quante ? "👆 Segna già le carte per il vostro turno. Ora gioca la " + nomeSq(step.sq) + "." : "Le tue carte per dopo (tocca per leggerle). Ora gioca la " + nomeSq(step.sq) + ".");
            m.adatta();
          };
        }
      }
    } else if (vm.fase === "arringa") {
      chiave = "arr|" + vm.parla + "|" + vm.timer.n + "|" + me.decide;
      fai = function () {
        if (vm.timer.sec) mettiTimer(t, ui.azione, vm.timer.sec);
        faccine(ui.azione);
        if (me.decide) {
          var b = el("button", { class: "btn btn-primario", text: vm.parla === 0 ? "Tocca alla " + nomeSq(1) + " ▶" : "Al verdetto ⚖️",
            onclick: function () { b.disabled = true; cb.onAvanti(); } });
          if (!me.giudice) notaPiede(ui, "⚖️ Il giudice è uscito: vai avanti tu.");
          ui.piede.appendChild(b);
          conto(b);
        } else notaPiede(ui, (me.guarda && !t.guarda ? "✋ Sei arrivato a partita in corso: entri dal prossimo round." : "Poi decide il giudice."));
      };
    } else if (vm.fase === "giudizio") {
      chiave = "giu|" + me.decide;
      fai = function () {
        if (!me.decide) { faccine(ui.azione); if (me.guarda && !t.guarda && me.sq < 0) notaPiede(ui, "✋ Sei arrivato a partita in corso: entri dal prossimo round."); return; }
        if (!me.giudice) ui.azione.appendChild(el("div", { class: "sp-avviso", text: "⚖️ Il giudice è uscito: decidi tu" }));
        // un tocco sceglie, il secondo conferma (niente verdetti per sbaglio). Il conto sta su una nota a parte:
        // sul tasto si fermerebbe al primo tocco (quello che sceglie soltanto)
        var nc = el("div", { class: "sp-nota sp-conto-giu" }); ui.azione.appendChild(nc); conto(nc, null, "⏳ Per decidere hai ancora ");
        var bb = [];
        [0, 1].forEach(function (k) {
          var lab = el("span", { text: emoSq(k) + " " + nomeSq(k) });
          var b = el("button", { class: "btn sp-vota c" + k, onclick: function () {
            if (b.disabled) return;
            if (!b.classList.contains("conferma")) {
              bb.forEach(function (x) { x.b.classList.remove("conferma"); testoSe(x.lab, emoSq(x.k) + " " + nomeSq(x.k)); });
              b.classList.add("conferma"); testoSe(lab, "✅ Confermi?"); vibra(12); return;
            }
            bb.forEach(function (x) { x.b.disabled = true; }); cb.onGiudica(k);
          } }, [lab]);
          bb.push({ b: b, lab: lab, k: k });
          ui.piede.appendChild(b);   // (se nessuno sceglie in tempo, decide la sorte)
        });
      };
    } else if (vm.fase === "esito") {
      if (susp) { chiave = "susp|" + kv; fai = function () { faccine(ui.azione); notaPiede(ui, "🥁 La luce si ferma sullo scenario che ha vinto…"); }; }
      else {
        var punti = vm.giocatori.filter(function (g) { return g.punti || (vm.assegna[g.id] != null); });
        chiave = "esi|" + vm.round + "|" + JSON.stringify(punti.map(function (g) { return [g.id, g.punti]; }));
        fai = function () {
          ui.avvStella = el("div", { class: "sp-avviso", hidden: "hidden" }); ui.azione.appendChild(ui.avvStella);
          ui.azione.appendChild(classificaCorta(t, punti.map(function (g) { return { id: g.id, nome: g.id === cb.myId ? "Tu" : g.nome, vero: g.nome, punti: g.punti }; }), cb.myId, cb.omino));
          piedeEsito(V, vm, cb, kConto);
        };
        var visto = vm.sessione + "|" + vm.round;
        if (V.esitoVisto !== visto) {
          V.esitoVisto = visto;
          verdetto(ui, vm.vincitore, (vm.sorte ? "🎲 " : "") + "Vince la " + nomeSq(vm.vincitore) + "!", me.sq === vm.vincitore ? true : me.sq >= 0 ? "perso" : null,
            sqs[vm.vincitore].map(function (m) { return { nome: m.nome, omino: cb.omino(m.id) }; }));
        }
      }
    } else { chiave = "?"; fai = function () {}; }
    if (ui.chiave !== chiave) { ui.chiave = chiave; svuota(ui.azione); svuota(ui.piede); ui.pronti = null; ui.manoM = null; ui.avvStella = null; fai(); }
    avvisoStella(ui, vm, possoStella, me.giudice);
    // 👆 le faccine dei compagni sulle carte che hanno segnato (cambiano solo loro: niente lampeggio)
    if (ui.manoM && me.sq >= 0 && cb.segni) {
      var sg = cb.segni(me.sq) || {}, mappa = {}, capoQ = capoDi(me.sq);
      Object.keys(sg).forEach(function (id) {
        if (id === cb.myId) return;
        var g = gioc(id); if (!g) return;
        (sg[id] || []).forEach(function (c) { (mappa[c] = mappa[c] || []).push({ id: id, nome: g.nome, omino: cb.omino(id), capo: !!(capoQ && capoQ.id === id) }); });
      });
      var firma = JSON.stringify(mappa);
      if (ui.segniVisti != null && ui.segniVisti !== firma && firma !== "{}") suono("segno");
      ui.segniVisti = firma;
      ui.manoM.marche(mappa);
    }
    if (vm.fase === "esito" && ui.pronti) ui.pronti.agg(vm);   // ⏩ si aggiorna solo il numero
    if (vm.fase !== "gioco" || giudTavolo) adattaTavolo(ui);
  }

  // ---------- 🙋 Ognuno per sé online (uguale per host e ospiti) ----------
  function aggiornaSolo(V, vm, cb) {
    var ui = V.ui, t = V.t, el = t.el, my = cb.myId;
    V.vmS = vm;
    var pres = vm.pres || [], schede = vm.schede || {}, fatti = vm.fatti || [];
    var io = vm.giocatori.filter(function (g) { return g.id === my; })[0];
    var me = { giudice: vm.giudiceId === my, pres: pres.indexOf(my) >= 0, guarda: io ? io.guarda : true };
    me.decide = (me.giudice && !vm.giudiceVia) || (cb.sonoHost && (vm.giudiceVia || !vm.giudiceId));
    function gioc(id) { return vm.giocatori.filter(function (x) { return x.id === id; })[0] || null; }
    function nomeV(id) { var x = gioc(id); return x ? x.nome : "?"; }            // il nome vero (anche il mio)
    function nome(id) { return id === my ? "Tu" : nomeV(id); }
    function voci(id) { var s = schede[id] || {}; return (s.b || []).concat(s.m ? [s.m] : []); }
    function scheda(id, titolo, o) {
      o = o || {};
      return mostraScheda(ui, { id: id, nome: nomeV(id), omino: cb.omino(id), titolo: titolo, voci: o.voci || voci(id), vince: o.vince, turno: o.turno, anima: o.anima, ritardo: o.ritardo });
    }
    var round = vm.totale > 1 ? "Round " + vm.round + " di " + vm.totale : "Round unico";
    var gioco = vm.fase === "gioco", bonus = gioco && vm.passoS === "bonus", fatto = fatti.indexOf(my) >= 0;
    var kConto = "sp|" + vm.sessione + "|" + vm.round + "|" + vm.fase + "|" + (gioco ? vm.passoS : vm.mostra);
    function conto(nodo) { if (vm.resta && t.contoAvanti) t.contoAvanti(nodo, vm.resta, null, kConto); }
    function notaConto() { if (!vm.resta) return; var n = el("div", { class: "sp-nota" }); ui.piede.appendChild(n); conto(n); }
    function faccine(dove) { var f = t.faccine ? t.faccine() : null; if (f) { f.classList.add("sp-faccine"); dove.appendChild(f); } }
    // 🥁 il verdetto appena deciso: la luce passa da un nome all'altro e si ferma su chi ha vinto
    var kv = vm.sessione + "|" + vm.round, susp = false;
    if (vm.fase === "esito") {
      if (V.suspK !== kv) {
        V.suspK = kv; V.suspFine = (vm.dopo || 0) < 2500 ? Date.now() + SUSPENSE - (vm.dopo || 0) : 0;
        if (V.suspFine) {
          ui.tabSig = null; linguette(ui, pres, nome, null, null, function () {});
          luce([].slice.call(ui.tab.children), Math.max(0, pres.indexOf(vm.vincitore)), V.suspFine - Date.now(), function () { if (V.ui === ui && V.ultimoVm) disegnaOn(V, V.ultimoVm, V.cb); });
        }
      }
      susp = !!V.suspFine && Date.now() < V.suspFine - 30;
    }

    // la barra in alto
    var fase = gioco ? (bonus ? "😇 I Bonus" : "💥 I Malus") : vm.fase === "arringa" ? "🎭 Gli scenari" : "⚖️ Il verdetto";
    barra(ui, fase, round + (vm.fase === "arringa" ? " · scenario " + (vm.mostra + 1) + " di " + pres.length : ""),
      "⚖️ " + (me.giudice ? "Tu" : vm.giudiceNome || "—") + (vm.giudiceVia ? " 💤" : ""), vm.giudiceId ? { nome: vm.giudiceNome, omino: cb.omino(vm.giudiceId) } : null);
    largo(ui, !gioco);

    // il palco: chi ha giocato (mentre si scelgono le carte), le linguette (verdetto), lo scenario di uno
    if (gioco) statoSolo(ui, vm, pres, nome); else ui.stato.hidden = true;
    if (vm.fase !== "giudizio" && !susp) { ui.tab.hidden = true; ui.tabSig = null; }
    var mio = me.pres && gioco ? cb.manoS() : null, chi = pres[vm.mostra];
    if (gioco) {
      if (me.pres && !bonus) {   // i Malus: lo scenario del vicino da rovinare (col mio Malus, quando l'ho messo)
        var vic = vm.bers[my], vv = voci(vic);
        if (fatto && mio && mio.mie && mio.mie.malus) vv = vv.concat([mio.mie.malus]);
        scheda(vic, "💥 Lo scenario di " + nomeV(vic), { voci: vv, anima: !ui.nuova });
      } else if (me.pres && bonus && fatto && mio) scheda(my, "😇 Il tuo scenario (per ora segreto)", { voci: (mio.mie && mio.mie.bonus) || [], anima: !ui.nuova });
      else nascondiScheda(ui);
    } else if (vm.fase === "arringa") {
      var aggiunte = scheda(chi, "🎭 Lo scenario di " + nomeV(chi) + (chi === my ? " (tu)" : ""), { ritardo: 0.45, turno: true });
      if (aggiunte) suoniScheda(ui, voci(chi).slice(-aggiunte), 0.45);
      if (V.toccaVisto !== kConto) { V.toccaVisto = kConto; if (chi === my) vibra(30); }   // tocca a me presentare
    } else if (vm.fase === "giudizio") {
      if (V.vedeK !== kConto || pres.indexOf(V.vede) < 0) { V.vede = pres[0]; V.vedeK = kConto; }
      linguette(ui, pres, nome, V.vede, null, function (id) { V.vede = id; aggiornaSolo(V, V.vmS, cb); });
      scheda(V.vede, "🎭 Lo scenario di " + nomeV(V.vede), { anima: false });
    } else if (vm.fase === "esito" && susp) nascondiScheda(ui);
    else if (vm.fase === "esito") scheda(vm.vincitore, "🏅 Lo scenario di " + nomeV(vm.vincitore), { vince: true, anima: false });
    // ⭐ la carta che ha convinto il giudice (la sceglie lui sullo scenario che ha vinto)
    var possoStella = vm.fase === "esito" && !susp && me.giudice && !vm.giudiceVia && !vm.sorte && vm.stella == null;
    segnaStella(ui.scheda, vm.fase === "esito" && !susp ? vm.stella : null);
    scegliStella(ui.scheda, possoStella ? function (i) { cb.onStella(i); } : null);

    // la riga del turno
    var turno = "";
    if (gioco) {
      var mancano = pres.length - fatti.length;
      if (me.pres && !fatto) turno = bonus ? "😇 Scegli 2 Bonus per il tuo scenario (gli altri non li vedono)" : "💥 Rovina lo scenario di " + nomeV(vm.bers[my]) + ": scegli 1 Malus";
      else turno = (bonus ? "😇 " : "💥 ") + (mancano ? "Aspettiamo " + (mancano === 1 ? "1 giocatore…" : mancano + " giocatori…") : "Tutti pronti!");
    } else if (vm.fase === "arringa") turno = chi === my ? "🎤 Tocca a te: convinci il giudice!" : "🎤 Parla " + nomeV(chi) + ": difende il suo scenario!";
    else if (vm.fase === "giudizio") turno = me.decide ? "⚖️ Sfoglia gli scenari e scegli il migliore da vivere" : (vm.giudiceVia || !vm.giudiceId ? "⚖️ Il giudice è uscito: decide chi organizza…" : "⚖️ Il giudice sta decidendo…");
    else if (vm.fase === "esito") turno = susp ? "🥁 Il giudice ha deciso…" : (vm.sorte ? "🎲 Nessuno ha deciso: la sorte sceglie " : "🏅 Il round va a ") + nomeV(vm.vincitore) + (vm.vincitore === my ? " (tu!)" : "") + ": +1!";
    testoSe(ui.turno, turno);

    // azione e piede: si rifanno solo quando cambia la situazione (la selezione resta)
    var chiave, fai;
    if (gioco) {
      if (me.pres && !fatto) {
        if (!mio) { chiave = "carte"; fai = function () { messaggio(ui, "🃏", "Arrivano le tue carte…"); }; }
        else {
          var tipo = vm.passoS, mano = mio.mano, n = tipo === "bonus" ? Math.min(2, mano.bonus.length) : Math.min(1, mano.malus.length);
          var firme = mio.firme || {}, scrive = puoScrivere(vm, cb) && !mano[tipo].some(function (c) { return firme[c]; });
          chiave = "manoS|" + vm.round + "|" + tipo + "|" + mano[tipo].join("§") + "|" + mano.malus.length + "|" + scrive + "|" + JSON.stringify(firme);
          fai = function () {
            var bOk = null;
            var m = creaMano(t, { carte: mano[tipo], tipo: tipo, quante: n, altre: tipo === "bonus" ? { tipo: "malus", carte: mano.malus } : null, firme: firme, presel: preselDi(V, mano[tipo]),
              onCambia: function (sel) { if (bOk) bOk.disabled = sel.length !== n; } });
            ui.azione.appendChild(m.nodo);
            if (scrive) ui.piede.appendChild(tastoBiancaOn(V, cb, tipo));
            bOk = el("button", { class: "btn btn-primario", text: "Gioca ▶", onclick: function () {
              var s = m.sel(); if (s.length !== n) return;
              bOk.disabled = true; bOk.textContent = "…"; cb.onGioca(s);
            } });
            bOk.disabled = m.sel().length !== n;
            ui.piede.appendChild(bOk);
            conto(bOk);   // a tempo scaduto le carte le sceglie il caso (lo fa chi organizza)
            m.adatta();
          };
        }
      } else if (me.pres) {
        chiave = "fatto|" + vm.round + "|" + vm.passoS;
        fai = function () {
          messaggio(ui, "✅", bonus ? "Fatto! I tuoi Bonus restano segreti finché non hanno giocato tutti." : "Fatto! Il tuo Malus si scopre quando " + nomeV(vm.bers[my]) + " presenta.");
          faccine(ui.azione); notaConto();
        };
      } else if (me.giudice) {
        chiave = "giud|" + vm.passoS;
        fai = function () { messaggioAv(ui, io ? io.nome : "", cb.omino(my), "Sei il giudice ⚖️", "Aspetta che tutti abbiano giocato: poi ascolti ogni scenario e scegli il migliore da vivere."); faccine(ui.azione); notaConto(); };
      } else {
        chiave = "guarda|" + me.guarda + "|" + vm.passoS;
        fai = function () { messaggio(ui, "👀", me.guarda ? "Partita in corso: entri dal prossimo round. Intanto guardi!" : "Questo round lo giocano gli altri: tu guardi."); faccine(ui.azione); notaConto(); };
      }
    } else if (vm.fase === "arringa") {
      chiave = "arr|" + vm.mostra + "|" + vm.timer.n + "|" + me.decide;
      fai = function () {
        if (vm.timer.sec) mettiTimer(t, ui.azione, vm.timer.sec);
        faccine(ui.azione);
        if (me.decide) {
          var b = el("button", { class: "btn btn-primario", text: vm.mostra < pres.length - 1 ? "Prossimo scenario ▶" : "Al verdetto ⚖️",
            onclick: function () { b.disabled = true; chiudiLente(); cb.onAvanti(); } });
          if (!me.giudice) notaPiede(ui, "⚖️ Il giudice è uscito: vai avanti tu.");
          ui.piede.appendChild(b);
          conto(b);
        } else notaPiede(ui, (me.guarda && !t.guarda ? "✋ Sei arrivato a partita in corso: entri dal prossimo round." : chi === my ? "Quando hai finito, il giudice va avanti." : "Poi tocca agli altri, e alla fine decide il giudice."));
      };
    } else if (vm.fase === "giudizio") {
      chiave = "giu|" + me.decide;
      fai = function () {
        ui.labScegli = null;
        if (!me.decide) { faccine(ui.azione); notaPiede(ui, me.guarda && !t.guarda && !me.pres ? "✋ Entri dal prossimo round. Tocca i nomi per rileggere gli scenari." : "Tocca i nomi per rileggere gli scenari."); return; }
        if (!me.giudice) ui.azione.appendChild(el("div", { class: "sp-avviso", text: "⚖️ Il giudice è uscito: decidi tu" }));
        ui.labScegli = el("span");
        var b = el("button", { class: "btn btn-primario", onclick: function () { if (b.disabled) return; b.disabled = true; chiudiLente(); cb.onGiudica(V.vede); } }, [ui.labScegli]);
        ui.piede.appendChild(b);
        conto(b);   // se nessuno sceglie in tempo, decide la sorte
      };
    } else if (vm.fase === "esito" && susp) {
      chiave = "susp|" + kv; fai = function () { faccine(ui.azione); notaPiede(ui, "🥁 La luce si ferma su chi ha vinto…"); };
    } else if (vm.fase === "esito") {
      var punti = vm.giocatori.filter(function (g) { return g.punti || (vm.assegna[g.id] != null); });
      chiave = "esi|" + vm.round + "|" + JSON.stringify(punti.map(function (g) { return [g.id, g.punti]; }));
      fai = function () {
        ui.avvStella = el("div", { class: "sp-avviso", hidden: "hidden" }); ui.azione.appendChild(ui.avvStella);
        ui.azione.appendChild(classificaCorta(t, punti.map(function (g) { return { id: g.id, nome: g.id === my ? "Tu" : g.nome, vero: g.nome, punti: g.punti }; }), my, cb.omino));
        piedeEsito(V, vm, cb, kConto);
      };
      var visto = vm.sessione + "|" + vm.round;
      if (V.esitoVisto !== visto) {
        V.esitoVisto = visto;
        verdetto(ui, "s", (vm.sorte ? "🎲 " : "") + "Vince " + nomeV(vm.vincitore) + "!", vm.vincitore === my ? true : me.pres ? "perso" : null, [{ nome: nomeV(vm.vincitore), omino: cb.omino(vm.vincitore) }]);
      }
    } else { chiave = "?"; fai = function () {}; }
    if (ui.chiave !== chiave) { ui.chiave = chiave; svuota(ui.azione); svuota(ui.piede); ui.pronti = null; ui.avvStella = null; fai(); }
    avvisoStella(ui, vm, possoStella, me.giudice);
    if (vm.fase === "giudizio" && ui.labScegli) testoSe(ui.labScegli, "⚖️ Scelgo " + nomeV(V.vede));
    if (vm.fase === "esito" && ui.pronti) ui.pronti.agg(vm);   // ⏩ si aggiorna solo il numero
    adattaTavolo(ui);
  }
  // chi ha già giocato le carte di questo passo (✅) e chi no (⏳): le pastiglie si fanno una volta, poi cambia solo il segno
  function statoSolo(ui, vm, pres, nome) {
    var el = ui.t.el, sig = vm.round + "|" + vm.passoS + "|" + pres.join(",");
    ui.stato.hidden = false;
    if (ui.statoSig !== sig) {
      ui.statoSig = sig; svuota(ui.stato); ui.pastiglie = {};
      pres.forEach(function (id) {
        var segno = el("b"), tx = el("span", { class: "sp-pn", text: nome(id) });
        var p = el("span", {}, [segno, tx]);
        ui.pastiglie[id] = { p: p, segno: segno };
        ui.stato.appendChild(p);
      });
    }
    var fatti = vm.fatti || [];
    pres.forEach(function (id) {
      var x = ui.pastiglie[id]; if (!x) return;
      var g = vm.giocatori.filter(function (q) { return q.id === id; })[0], ok = fatti.indexOf(id) >= 0;
      x.p.classList.toggle("ok", ok); x.p.classList.toggle("via", !!(g && g.via));
      testoSe(x.segno, ok ? "✅" : g && g.via ? "💤" : "⏳");
    });
  }

  // ---------- pezzi dell'online comuni ai due modi ----------
  // 🃏 posso ancora scrivere la mia carta?
  function puoScrivere(vm, cb) { return !!(vm.regole && vm.regole.bianca) && (vm.bianche || []).indexOf(cb.myId) < 0; }
  // la carta appena scritta arriva già scelta (una volta sola)
  function preselDi(V, carte) {
    if (V.presel && carte.indexOf(V.presel) >= 0) { var p = V.presel; V.presel = null; return [p]; }
    return null;
  }
  function tastoBiancaOn(V, cb, tipo) {
    var b = V.t.el("button", { class: "btn sp-scrivi-b", text: "✍️ Scrivi tu", onclick: function () {
      scriviCarta(V.t, { tipo: tipo, chi: null, onOk: function (testo) { V.presel = testo; b.disabled = true; b.textContent = "✍️ …"; cb.onBianca(testo); } });
    } });
    return b;
  }
  // l'esito del round: il conto per tutti ("Si va avanti tra 20…": il tempo lo tiene chi organizza) e «⏩ Avanti» a chi gioca
  function piedeEsito(V, vm, cb, kConto) {
    var ui = V.ui, t = V.t, el = t.el, ultimo = vm.round >= vm.totale;
    var io = vm.giocatori.filter(function (g) { return g.id === cb.myId; })[0];
    var gioca = !!(io && !io.via && vm.assegna && vm.assegna[cb.myId] != null);
    var nota = el("div", { class: "sp-nota sp-conto" });
    if (gioca) {
      var k = vm.kAv, testo = ultimo ? "🏆 Classifica" : "⏩ Avanti", fatto = ultimo ? "✅ Classifica" : "✅ Avanti";
      var tx = el("span", { text: testo }), q = el("span", { class: "quanti" });
      var b = el("button", { class: "btn btn-primario sp-pronto", type: "button", onclick: function () {
        if (b.disabled) return;
        cb.mioPronto = k; agg(cb.ultimoVm || vm); chiudiLente(); cb.onPronto(k);
      } }, [tx, q]);
      var agg = function (v) {
        cb.ultimoVm = v;
        var l = v.pronti || [], mio = cb.mioPronto === k || l.indexOf(cb.myId) >= 0, n = l.length + (mio && l.indexOf(cb.myId) < 0 ? 1 : 0);
        testoSe(q, Math.min(n, v.servono || 1) + " su " + (v.servono || 1));
        testoSe(tx, mio ? fatto : testo);
        b.disabled = mio;
      };
      agg(vm);
      ui.piede.appendChild(nota);
      ui.piede.appendChild(b);
      ui.pronti = { agg: agg };
    } else {
      ui.piede.appendChild(nota);
      notaPiede(ui, ultimo ? "Poi la classifica finale." : io && io.guarda && !t.guarda ? "✋ Entri dal prossimo round: si va avanti da soli." : "👀 Guardi: si va avanti da soli.");
    }
    if (t.contoAvanti) t.contoAvanti(nota, vm.resta || TEMPO_ESITO, null, kConto);
  }

  function fineOn(V, vm, cb) {
    var t = V.t, el = t.el;
    if (V.fineSess === vm.sessione && V.fineS && document.body.contains(V.fineS)) return;   // già mostrata
    V.fineSess = vm.sessione;
    chiudiLente();
    var cl = vm.classifica || [];
    salvaTrofeiSipero(t, { online: true, mioId: cb.myId, mioRuolo: vm.assegna ? vm.assegna[cb.myId] : null, manuale: vm.manuale,
      sessione: vm.sessione, classifica: cl, statFine: vm.statFine });
    var primi = cl.filter(function (r) { return r.pos === 1; });
    var titolo = vm.manuale && vm.vincitore != null ? "Vince la " + nomeSq(vm.vincitore) + "!" :
      primi.length === 1 ? (primi[0].id === cb.myId ? "Hai vinto!" : "Vince " + primi[0].nome + "!") : "Pari merito in testa!";
    var s = t.schermata({ icona: "🏆", titolo: titolo, sotto: "Classifica finale" });
    var fac = t.faccine && !t.guarda ? t.faccine() : null;   // le faccine della saletta: si festeggia (o si sfotte) tutti insieme (chi guarda col link: dalla targhetta)
    if (t.guarda) { stile(); s.classList.add("sp-fine-targa"); }
    // tanti giocatori: righe basse su due colonne, così la classifica e i tasti stanno in uno schermo
    var fitta = cl.length > 6 || cl.length * 71 + 262 + (fac ? 56 : 0) + ((vm.stelle || []).length ? 52 : 0) + 40 > (window.innerHeight || 640);
    var ol = el("ol", { class: "classifica" + (fitta ? " fitta" : "") });
    cl.forEach(function (r) {
      ol.appendChild(el("li", { class: r.pos === 1 ? "vincitore" : "" }, [
        el("span", { class: "pos", text: medaglia(r.pos) }),
        el("span", { class: "nome", text: r.nome + (r.id === cb.myId ? " (tu)" : "") }),
        el("span", { class: "punti", text: r.punti + (r.punti === 1 ? " punto" : " punti") })]));
    });
    s._contenuto.appendChild(ol);
    var stelle = vm.stelle || [];
    if (stelle.length) s._contenuto.appendChild(el("button", { class: "btn btn-fantasma sp-stelle-b", text: "⭐ Le carte che hanno convinto il giudice (" + stelle.length + ")", onclick: function () { lenteStelle(t, stelle); } }));
    if (fac) { fac.classList.add("fine-faccine"); s._contenuto.appendChild(fac); }
    if (!cl.some(function (r) { return r.id === cb.myId; })) s._contenuto.appendChild(el("p", { class: "modulo-nota", text: t.guarda ? "👀 Se chi organizza fa un'altra partita, entri anche tu nella saletta." : "Questa partita l'hai guardata: giochi dalla prossima." }));
    // i tasti di fine uguali per tutti (Rivincita, Cambia gioco, Ci sto…) li mette il core; se no quelli di sempre
    // (chi guarda col link: niente tasti, esce dalla targhetta del core)
    if (!t.guarda && !(t.tastiFine && t.tastiFine(s._piede, { host: cb.sonoHost, nuova: cb.sonoHost ? cb.onNuova : null, esci: cb.onEsci }))) {
      if (cb.sonoHost) s._piede.appendChild(el("button", { class: "btn btn-primario", text: "↻ Nuova partita (stessi amici)", onclick: cb.onNuova }));
      else s._contenuto.appendChild(cb._notaFine = el("p", { class: "modulo-nota", style: "text-align:center", text: "Se chi organizza fa un'altra partita, torni da solo nella saletta." }));
      s._piede.appendChild(el("button", { class: "btn btn-fantasma", text: "🏠 Esci", onclick: cb.onEsci }));
    }
    V.fineS = s;
    t.mostra(s);
  }

  // per le prove (skill prova-nel-browser): le regole di «Ognuno per sé» e della carta bianca senza grafica
  window.__sipero = { roundSolo: roundSolo, giocaSolo: giocaSolo, quanteSolo: quanteSolo, presDopo: presDopo, pulisciScritta: pulisciScritta,
    riassunto: riassuntoImp, voce: voce, firmeDi: firmeDi,
    // 🧠 la memoria delle uscite: la pila di un mazzo nuovo, l'impronta di una carta, la memoria da rileggere (dopo averla cambiata a mano)
    pilaFresca: pilaFresca, impronta: impronta, rileggiMemoria: function () { memoria = null; return leggiMemoria(); } };
})();

