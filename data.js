const bookData = [
  {
    "id": "ch1",
    "title": "Węglowodany, polisacharydy śluzowe, grzybowe, gumy roślinne i pektyny",
    "summary": "<p>Węglowodany stanowią najbardziej rozpowszechnioną grupę substancji w świecie roślin, pełniąc rolę materiałów zapasowych (np. skrobia, inulina) lub elementów strukturalnych i budulcowych (np. celuloza, pektyny). Monosacharydy i oligosacharydy przeważnie rozpuszczają się w wodzie i często stanowią część cukrową aktywnych glikozydów. W farmakognozji największe znaczenie lecznicze i technologiczne odgrywają polisacharydy (wielocukry), do których zaliczamy polimery glukozy, fruktozy i mannozy, polisacharydy alg, a także śluzy, gumy roślinne, pektyny i specyficzne polisacharydy grzybowe. Surowce śluzowe pęcznieją w wodzie i podane wewnętrznie powlekają błony śluzowe żołądka, gardła i jelit, dając efekt osłaniający, przeciwzapalny oraz przeciwkaszlowy, a w dużych dawkach również ułatwiający wypróżnianie. Z kolei pektyny regulują pasaż jelitowy i obniżają stężenie cholesterolu we krwi. Gumy pełnią w farmacji rolę stabilizatorów i emulgatorów, a polisacharydy izolowane z grzybów wielkoowocnikowych silnie stymulują układ immunologiczny.</p>",
    "concepts": [
      {
        "term": "Skrobie roślinne",
        "definition": "Wysokocząsteczkowe polimery glukozy, zbudowane z amylozy i amylopektyny, stanowiące główny materiał zapasowy roślin.<br>• <strong>Surowce:</strong> Skrobia ziemniaczana (<em>Solani amylum</em> – rodzina psiankowate / <em>Solanaceae</em>), Skrobia kukurydziana (<em>Maydis amylum</em> – rodzina wiechlinowate / <em>Poaceae</em>), Skrobia pszeniczna (<em>Tritici amylum</em> – rodzina wiechlinowate / <em>Poaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Głównymi związkami są amylopektyna (65-85%) o łańcuchach rozgałęzionych oraz amyloza (20-35%).<br>• <strong>Działanie i zastosowanie:</strong> Skrobia działa silnie adsorbująco i osłaniająco. Używa się jej do łagodzenia stanów zapalnych skóry (w formie zasypek) oraz w podrażnieniach przewodu pokarmowego (w formie kleiku). W farmacji jest powszechnie stosowana jako substancja wypełniająca i rozsadzająca w produkcji tabletek."
      },
      {
        "term": "Porost islandzki",
        "definition": "Surowiec polisacharydowy pozyskiwany z plech porostów, u którego właściwości powlekające śluzów korelują z antybiotycznym i drażniącym działaniem gorzkich kwasów porostowych.<br>• <strong>Surowce:</strong> Porost islandzki (<em>Lichen islandicus</em> – rodzina misecznicowate / <em>Parmeliaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Ponad 50% polisacharydów (głównie rozpuszczalne i nierozpuszczalne glukany: lichenina, izolichenina) oraz specyficzne depsydony – kwasy porostowe (kwas cetrarowy, fumaroprotocetrarowy, protolichesterynowy).<br>• <strong>Działanie i zastosowanie:</strong> Działa powlekająco na drogi oddechowe i żołądek (łagodzi suchy kaszel i stany zapalne), zwiększa łaknienie (kwasy goryczowe), a także hamuje rozwój bakterii (m.in. <em>Helicobacter pylori</em> czy prątków gruźlicy)."
      },
      {
        "term": "Bulwa słonecznika bulwiastego",
        "definition": "Surowiec będący rezerwuarem fruktozanów (inuliny), znajdujący zastosowanie w kuracjach metabolicznych i dietetycznych.<br>• <strong>Surowce:</strong> Bulwa słonecznika bulwiastego / topinambur (<em>Helianthi tuberosi tuber</em> – rodzina astrowate / <em>Asteraceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Węglowodany (do 75%), w tym głównie inulina i niskocząsteczkowe fruktooligosacharydy, a także witaminy (C, z grupy B) i sole mineralne.<br>• <strong>Działanie i zastosowanie:</strong> Inulina pełni funkcję prebiotyku (pożywki dla bifidobakterii), daje uczucie sytości, reguluje wypróżniania oraz spowalnia wchłanianie cukrów i tłuszczów. Stosuje się jako preparat ułatwiający redukcję masy ciała oraz pomocniczo w cukrzycy."
      },
      {
        "term": "Kłącze perzu",
        "definition": "Powszechny surowiec z rodziny traw gromadzący specyficzne fruktany typu lewanu, łączący efekt powlekający ze wspieraniem eliminacji szkodliwych metabolitów.<br>• <strong>Surowce:</strong> Kłącze perzu (<em>Graminis rhizoma</em> / <em>Agropyri rhizoma</em> – rodzina wiechlinowate / <em>Poaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Polisacharydy (trytycyna 3-10%, śluzy), alkohole cukrowe (mannitol, inozytol), sole kwasu krzemowego oraz poliacetyleny (kapilen).<br>• <strong>Działanie i zastosowanie:</strong> Działa moczopędnie, ułatwia oczyszczanie organizmu i łagodzi stany zapalne dróg moczowych oraz oddechowych (śluzy). Reguluje również wypróżniania i wspomaga spadek frakcji lipidowych. Znalazł zastosowanie w profilaktyce kamicy nerkowej, dnie moczanowej oraz cukrzycy."
      },
      {
        "term": "Algi polisacharydowe",
        "definition": "Plechy pozyskiwane z wód morskich, wyodrębniane z krasnorostów lub brunatnic, służące jako naturalne źródło hydrokoloidów pęczniejących w wodzie.<br>• <strong>Surowce:</strong> Agar (<em>Agar</em> pozyskiwany głównie z galaretówek – <em>Gelidiaceae</em>), Karagen (<em>Carrageen</em> z chrzęścicy kędzierzawej – <em>Gigartinaceae</em>), Morszczyn (<em>Fucus</em> – rodzina morszczynowate / <em>Fucaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Agar zawiera galaktany (agarozę i agaropektynę). Karagen zawiera siarczanowane galaktany – karageniny. Morszczyn gromadzi śluzy (kwas alginowy, fukoidany) oraz organiczne i nieorganiczne związki jodu.<br>• <strong>Działanie i zastosowanie:</strong> Pęczniejąc w żołądku i jelitach, zmniejszają uczucie głodu oraz działają łagodnie przeczyszczająco (agar, karagen). Morszczyn przyspiesza dodatkowo metabolizm dzięki uwalnianiu jodu hormonotwórczego; wykorzystywany bywa w otyłości i niedoczynności tarczycy. Kwas alginowy znalazł z kolei zastosowanie jako osłona w nadkwaśności soku żołądkowego i środek powlekający."
      },
      {
        "term": "Nasienie kozieradki",
        "definition": "Klasyczny surowiec śluzowy nasion, będący źródłem mieszaniny galaktomannanów o właściwościach ochronnych oraz odżywczych.<br>• <strong>Surowce:</strong> Nasienie kozieradki (<em>Foenugraeci semen</em> – rodzina bobowate / <em>Fabaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Wysoka zawartość śluzu z galaktomannanów (45-60%), białko, olej tłusty bogaty w NNKT oraz saponozydy steroidowe.<br>• <strong>Działanie i zastosowanie:</strong> Obniża poziom glukozy oraz cholesterolu i frakcji lipidowych we krwi, osłania błonę śluzową układu trawiennego. Stosowany wewnętrznie w chorobie wrzodowej i wspomagająco w cukrzycy, a zewnętrznie jako okład na stany zapalne skóry, egzemy oraz ropnie."
      },
      {
        "term": "Korzeń i liść prawoślazu",
        "definition": "Flagowe surowce śluzowe o bardzo wysokim wskaźniku pęcznienia, powlekające i ułatwiające regenerację obolałych tkanek nabłonkowych.<br>• <strong>Surowce:</strong> Korzeń prawoślazu (<em>Althaeae radix</em> – rodzina ślazowate / <em>Malvaceae</em>), Liść prawoślazu (<em>Althaeae folium</em> – rodzina ślazowate / <em>Malvaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Ekstremalnie duża ilość pęczniejącego śluzu (kwaśne galakturonoramnany i arabinogalaktany), pektyny oraz dodatki flawonoidów.<br>• <strong>Działanie i zastosowanie:</strong> Wodne maceraty śluzowe izolują receptory kaszlowe od czynników drażniących, znosząc suchy i męczący kaszel. Stosowane w nieżytach górnych dróg oddechowych, a także do powlekania błon przewodu pokarmowego w przypadku nadkwaśności, choroby wrzodowej lub uszkodzeń nabłonka."
      },
      {
        "term": "Kwiaty i liście ślazów oraz malwy",
        "definition": "Kolorowe surowce kwiatowe i liściowe obok wysokiej zawartości śluzu dostarczające barwników i flawonoidów łagodzących lokalne procesy zapalne.<br>• <strong>Surowce:</strong> Liść/kwiat ślazu (<em>Malvae folium/flos</em> – rodzina ślazowate / <em>Malvaceae</em>), Kwiat malwy czarnej (<em>Malvae arboreae flos</em> – rodzina ślazowate / <em>Malvaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Śluz, a także znaczące ilości flawonoidów oraz antocyjany (np. pochodne malwidyny i delfinidyny w kwiatach malwy i ślazu dzikiego).<br>• <strong>Działanie i zastosowanie:</strong> Osłaniają usta, krtanie i gardło, łagodząc odruch kaszlowy. Stosowane do płukania stanów zapalnych, a także doustnie w nieżytach górnych dróg oddechowych w celu ułatwienia odkrztuszania gęstej wydzieliny."
      },
      {
        "term": "Liść babki lancetowatej",
        "definition": "Surowiec osłaniający o wielokierunkowym działaniu prozdrowotnym, wspierany bakteriobójczym efektem substancji irydoidowych.<br>• <strong>Surowce:</strong> Liść babki lancetowatej (<em>Plantaginis lanceolatae folium</em> – rodzina babkowate / <em>Plantaginaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Śluzy, glikozydy irydoidowe (szczególnie aukubina, katalpol), związki mineralne (krzemionka, cynk), garbniki i fenyloetanoidy.<br>• <strong>Działanie i zastosowanie:</strong> Powleka i łagodzi podrażnienia (śluzy), niszczy bakterie (aukubigenina) oraz rozluźnia mięśniówkę oskrzeli. Stosowany zarówno jako lek łagodzący suchy kaszel, jak i silnie regenerujący okład w owrzodzeniach, uciążliwych oparzeniach i stanach zapalnych spojówek."
      },
      {
        "term": "Nasiona i łupiny babki jajowatej oraz płesznik",
        "definition": "Związki śluzowe umiejscowione głównie w łupinie nasiennej, które po dostaniu się do wody natychmiast tworzą obfity, sycący żel.<br>• <strong>Surowce:</strong> Nasienie i łupina nasienna babki jajowatej (<em>Plantaginis ovatae semen/tegumentum</em> – rodzina babkowate / <em>Plantaginaceae</em>), Nasienie babki płesznik (<em>Psyllii semen</em> – rodzina babkowate / <em>Plantaginaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Bardzo wysoka zawartość hydrofilnego śluzu z arabinoksylanów (nawet do 25% w łupinach B. jajowatej), irydoidy, błonnik celulozowy.<br>• <strong>Działanie i zastosowanie:</strong> Typowe błonnikowe działanie przeczyszczające przez pęcznienie. Masywne absorbowanie wody zwiększa objętość stolca i normalizuje ruch robaczkowy jelit. Preparaty te zalecane są w chronicznych zaparciach, podrażnieniach uchyłków, żylakach odbytu i jako reduktory łaknienia."
      },
      {
        "term": "Liść podbiału",
        "definition": "Surowiec w medycynie znany ze znakomitych właściwości wykrztuśnych i osłaniających, jednak ograniczany terapeutycznie przez śladową obecność związków hepatotoksycznych.<br>• <strong>Surowce:</strong> Liść podbiału (<em>Farfarae folium</em> – rodzina astrowate / <em>Asteraceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Śluz, inulina, garbniki oraz minimalne stężenia toksycznych alkaloidów pirolizydynowych (tussilagina, senecjonina).<br>• <strong>Działanie i zastosowanie:</strong> Zmniejsza podrażnienie układu oddechowego i wykazuje silne właściwości powlekające nabłonek krtani i gardła. Powszechny lek przeciwkaszlowy, który jednak ze względu na obecność alkaloidów nie może być stosowany przewlekle (ani przez kobiety w ciąży)."
      },
      {
        "term": "Kwiat dziewanny",
        "definition": "Surowiec bogaty w synergicznie połączone frakcje śluzowe i saponinowe stymulujące pozbywanie się ropnej wydzieliny oskrzelowej.<br>• <strong>Surowce:</strong> Kwiat dziewanny (<em>Verbasci flos</em> – rodzina trędownikowate / <em>Scrophulariaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Śluz, cukry proste, cenne saponozydy triterpenowe (np. werbaskosaponina), oraz flawonoidy i irydoidy.<br>• <strong>Działanie i zastosowanie:</strong> Podwójny efekt dróg oddechowych – śluzy osłaniają zbolałe błony śluzowe niwelując suchy odruch kaszlu, a saponiny ułatwiają wykrztuszanie stężałego śluzu. Częsty składnik mieszanek ziołowych i syropów na przeziębienia."
      },
      {
        "term": "Nasienie lnu (Siemię lniane)",
        "definition": "Niezwykle cenny surowiec o lepkich galaktanach stosowany zarówno w profilaktyce gastrycznej, jak i dermatologii.<br>• <strong>Surowce:</strong> Nasienie lnu (<em>Lini semen</em> – rodzina lnowate / <em>Linaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Silnie lepki śluz, duża ilość oleju tłustego (kwasy omega-3 – linolenowy), fitoestrogeny (lignany) i glukozydy cyjanogenne.<br>• <strong>Działanie i zastosowanie:</strong> Maceraty uwalniają śluz, chroniąc ścianki żołądka przed kwasami (stosowane w chorobie wrzodowej), podczas gdy użycie całych ziaren świetnie stymuluje wypróżniania. Odtłuszczona miazga (kataplazmy) pomaga wyciągać ropę ze stanów zapalnych skóry (czyraki)."
      },
      {
        "term": "Korzeń żywokostu",
        "definition": "Śluzowy i ułatwiający zrosty surowiec o wybitnym działaniu zewnętrznym przyspieszającym regenerację układu chrzęstno-kostnego.<br>• <strong>Surowce:</strong> Korzeń żywokostu (<em>Symphyti radix</em> – rodzina ogórecznikowate / <em>Boraginaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Dużo śluzu (do 15%), alantoina, garbniki oraz szkodliwe alkaloidy pirolizydynowe.<br>• <strong>Działanie i zastosowanie:</strong> Zmiękcza i redukuje stany zapalne. Przyspiesza przyrost kostniny i gojenie tkanek (alantoina). Ze względu na hepatotoksyczność alkaloidów stosuje się go obecnie wyłącznie zewnętrznie w postaci maści lub okładów na stłuczenia, złamania, naderwania ścięgien czy owrzodzenia kończyn."
      },
      {
        "term": "Polisacharydy grzybów wielkoowocnikowych",
        "definition": "Złożone immunomodulatory polimeryczne pozyskiwane z komórek macierzystych specyficznych grzybów.<br>• <strong>Surowce:</strong> Grzyby np. Twardziak jadalny (<em>Lentinus edodes</em>), Rozszczepka pospolita (<em>Schizophyllum commune</em>).<br>• <strong>Skład fitochemiczny:</strong> Zaawansowane strukturalnie glukany (m.in. lentinan, schizofylan, tylopilan).<br>• <strong>Działanie i zastosowanie:</strong> Glukany grzybowe mocno stymulują pracę komórek ludzkiego układu immunologicznego. Są wykorzystywane jako bardzo ważny, wspomagający element we współczesnym leczeniu zmian nowotworowych."
      },
      {
        "term": "Pektyny i Gumy roślinne",
        "definition": "Kwasowe hydrokoloidy pęczniejące w wodzie, naturalnie uszczelniające ściany komórkowe lub służące jako substancje barierowe drzew.<br>• <strong>Surowce:</strong> Niedojrzałe owoce (dla pektyn), Guma tragakanta (<em>Tragacantha</em> z rodzaju <em>Astragalus</em> - <em>Fabaceae</em>), Guma arabska (<em>Gummi arabicum</em> z rodzaju <em>Acacia</em> - <em>Mimosaceae</em>).<br>• <strong>Skład fitochemiczny:</strong> Rozgałęzione polimery zbudowane w większości z galakturonowych kwasów i cukrów prostych.<br>• <strong>Działanie i zastosowanie:</strong> Pektyny powlekają jelita, sprzyjają dobrym bakteriom prebiotycznym i silnie łagodzą biegunki dziecięce, wspomagająco obniżają poziom cholesterolu. Gumy to doskonałe, naturalne substancje stabilizujące zawiesiny i zwiększające lepkość w technologii leków i żywności."
      }
    ],
    "qa": [
      {
        "question": "Jakie główne działanie farmakologiczne wykazują surowce śluzowe po podaniu doustnym?",
        "answer": "Działają osłaniająco na błony śluzowe żołądka oraz gardła, dzięki czemu znoszą uporczywy i suchy kaszel, a przyjmowane w całości, ze względu na dużą pojemność wodną, mogą stanowić łagodny i bezpieczny lek przeczyszczający."
      },
      {
        "question": "Z jakiej rośliny pozyskuje się kwas alginowy i w jakim celu się go stosuje?",
        "answer": "Kwas alginowy pozyskuje się ze śluzowatych plech morszczynu (<em>Fucus</em>). Znalazł on zastosowanie m.in. jako lek na refluks i nadkwaśność soku żołądkowego, z kolei jego bezwodne sole stosuje się zewnętrznie do okładów tamujących krwotoki."
      },
      {
        "question": "Na czym polega prebiotyczne działanie inuliny pozyskiwanej np. z bulw słonecznika bulwiastego?",
        "answer": "Inulina nie ulega strawieniu przez enzymy w świetle jelita cienkiego, przechodzi do jelita grubego, gdzie staje się naturalną pożywką warunkującą wzrost i żywotność &ldquo;dobrych&rdquo; bakterii z rodziny <em>Bifidobacterium</em>."
      },
      {
        "question": "Jakie grupy związków czynnych występują w korzeniu żywokostu (<em>Symphyti radix</em>) i dlaczego w obecnej medycynie środek ten stosuje się wyłącznie na skórę?",
        "answer": "Korzeń żywokostu to obfite źródło śluzu i ułatwiającej gojenie kości alantoiny. Zawiera jednak szkodliwe alkaloidy pirolizydynowe, które po wypiciu i zmetabolizowaniu wykazują wybitnie niszczące oraz rakotwórcze działanie na ludzką wątrobę."
      },
      {
        "question": "Dlaczego przy stosowaniu nasion lnu (<em>Lini semen</em>) nie dochodzi do zagrażających zatruć cyjankami uwalnianymi z glikozydów cyjanogennych (np. linamaryny)?",
        "answer": "Kwaśne środowisko soku w żołądku u człowieka dezaktywuje w dużej mierze roślinny enzym hydrolizujący – linamarazę. Wyzwolona w ustroju, mniejsza ilość trującego cyjanowodoru jest w krótkim czasie bezpiecznie degradowana przez enzymy tkankowe (rodanazę) do form wolnych od toksyczności."
      },
      {
        "question": "Jakie zastosowanie medyczne znalazły wyizolowane z grzybów wielkoowocnikowych glukany (np. lentinan)?",
        "answer": "Dzięki swoistej architekturze chemicznej glukany te potężnie wspierają oraz stymulują układ immunologiczny do aktywnej pracy, przez co są wdrażane jako nowoczesny czynnik wspomagający tradycyjne terapie przeciwnowotworowe."
      },
      {
        "question": "Na czym polega specyficzny, śluzowo-błonnikowy mechanizm ułatwiania wypróżnień przez łupiny i nasiona babki płesznik (<em>Psyllii semen</em>)?",
        "answer": "Duże nagromadzenie kwaśnego śluzu w ich okrywach pozwala na masywne pochłanianie dostarczanej do organizmu wody. Niestrawione frakcje pęczniejąc, rozpychają mechanicznymi siłami jelita, dając silny sygnał dla wzmożenia perystaltyki ułatwiającej defekację. Oto kolejna, bardzo obszerna część szczegółowego kompendium, obejmująca następne duże działy z Twojej listy (Tłuszcze, woski i fitosterole; Kwasy organiczne, witaminy i sole mineralne; Fenolokwasy, glikozydy fenolowe i lignany oraz Garbniki). Ze względu na wymóg zachowania ogromnej szczegółowości (oraz limit znaków w jednej odpowiedzi), opracowałem 4 potężne działy. Aby uzyskać kolejne (olejki eteryczne, flawonoidy, itd.), wystarczy, że napiszesz &ldquo;kontynuuj&rdquo;."
      }
    ]
  },
  {
    "id": "ch2",
    "title": "Tłuszcze, woski i fitosterole",
    "summary": "<p>Lipidy to grupa związków lipofilnych, w skład których wchodzą tłuszcze (estry glicerolu i kwasów tłuszczowych) oraz woski (estry wyższych kwasów i alkoholi). W farmakognozji ogromne znaczenie mają oleje roślinne pozyskiwane przez tłoczenie, bogate w niezbędne nienasycone kwasy tłuszczowe (NNKT) takie jak kwas linolowy czy linolenowy, które są niezbędne do syntezy błon komórkowych i eikozanoidów. Ponadto niezwykle cenną terapeutycznie podgrupą są surowce zawierające fitosterole (np. beta-sitosterol) oraz nienasycone kwasy tłuszczowe we frakcjach lipofilnych. Surowce fitosterolowe wykazują udowodnione działanie w hamowaniu enzymu 5-alfa-reduktazy, co zapobiega przekształcaniu testosteronu w dihydrotestosteron (DHT), stanowiąc w medycynie podstawę leczenia I i II stadium łagodnego rozrostu stercza (BPH).</p>",
    "concepts": [
      {
        "term": "Olej kakaowy (Masło kakaowe)",
        "definition": "Surowiec stanowiący wytłaczany na ciepło olej z jąder nasiennych kakaowca właściwego (<em>Theobroma cacao</em>, rodzina orzesznikowate / <em>Sterculiaceae</em>). Głównymi składnikami fitochemicznymi są triacyloglicerole kwasu oleinowego, stearynowego oraz palmitynowego. Olej ten, z racji odpowiedniej temperatury topnienia, jest powszechnie stosowany w technologii postaci leku jako podłoże do czopków, maści oraz kremów."
      },
      {
        "term": "Olej rycynowy",
        "definition": "Olej otrzymywany z nasion rącznika pospolitego (<em>Ricinus communis</em>, rodzina wilczomleczowate / <em>Euphorbiaceae</em>). W jego skład wchodzą głównie estry glicerolu z kwasem rycynolowym. Działa jako silny środek przeczyszczający (laxans) - po uwolnieniu kwasu rycynolowego pod wpływem żółci i lipazy w jelicie cienkim, silnie drażni jego ściany, upłynniając treść i zmuszając do wypróżnienia. Zewnętrznie jest składnikiem maści gojących."
      },
      {
        "term": "Olej sojowy",
        "definition": "Olej pozyskiwany z nasion soi jadalnej (<em>Glycine soja</em>, rodzina bobowate / <em>Fabaceae</em>). Zawiera znaczne ilości kwasu linolowego (ok. 50%), kwasu oleinowego, linolenowego, a także fitosterole (beta-sitosterol) i tokoferole. Służy przemysłowo do pozyskiwania lecytyny sojowej, która jest stosowana w hipercholesterolemii oraz w profilaktyce miażdżycy naczyń (antiscleroticum)."
      },
      {
        "term": "Olej lniany",
        "definition": "Olej wytłaczany z nasion lnu zwyczajnego (<em>Linum usitatissimum</em>, rodzina lnowate / <em>Linaceae</em>). Charakteryzuje się ogromną zawartością kwasu linolenowego (35-50%) oraz linolowego i oleinowego. Posiada wybitne właściwości osłaniające śluzówkę żołądka, obniża poziom cholesterolu, a stosowany zewnętrznie (jako dermaticum) doskonale regeneruje skórę, m.in. w oparzeniach i odleżynach."
      },
      {
        "term": "Olej z owoców awokado",
        "definition": "Olej tłoczony z owocni smaczliwki właściwej (<em>Persaea americana</em>, rodzina wawrzynowate / <em>Lauraceae</em>). Stanowi rezerwuar kwasu oleinowego, tokoferoli oraz frakcji niezmydlającej się, bogatej w fitosterole (beta-sitosterol, kampesterol). Frakcja ta wspólnie z fitosterolami soi wchodzi w skład leków na zwyrodnieniowe uszkodzenia chrząstki stawowej (antirheumaticum)."
      },
      {
        "term": "Olej wiesiołkowy",
        "definition": "Olej z nasion wiesiołka dziwnego lub dwuletniego (<em>Oenothera paradoxa/biennis</em>, rodzina wiesiołkowate / <em>Oenotheraceae</em>). Skład opiera się na niezbędnych nienasyconych kwasach tłuszczowych, z wymaganiem min. 9% kwasu gamma-linolenowego i wysoką zawartością kwasu linolowego. Znalazł ogromne zastosowanie w uzupełnianiu niedoborów NNKT (metabolicum) i wspieraniu profilaktyki antymiażdżycowej."
      },
      {
        "term": "Olej z nasion ogórecznika",
        "definition": "Olej tłoczony z nasion ogórecznika lekarskiego (<em>Borago officinalis</em>, rodzina ogórecznikowate / <em>Boraginaceae</em>). Skład fitochemiczny opiera się na wybitnie dużej koncentracji kwasu gamma-linolenowego (18-25%) i kwasu linolowego. Stosowany identycznie jak olej wiesiołkowy w stabilizacji procesów metabolicznych organizmu i chorobach skóry."
      },
      {
        "term": "Olej z zarodków pszenicy",
        "definition": "Olej z zarodków pszenicy zwyczajnej (<em>Triticum vulgare</em>, rodzina wiechlinowate / <em>Poaceae</em>). Bardzo bogaty w kwas linolowy i alfa-tokoferol (witamina E). Stosowany przy niedoborach NNKT i witaminy E, wspomagająco przy osłabieniu organizmu, miażdżycy oraz zewnętrznie na uszkodzenia oparzeniowe i odmrożenia skóry."
      },
      {
        "term": "Owoc palmy sabal (Bocznia piłkowana)",
        "definition": "Surowiec lipofilny z owoców palmy sabalowej (<em>Serenoa repens</em>, rodzina arekowate / <em>Arecaceae</em>). Skład opiera się na wolnych kwasach tłuszczowych, ich estrach etylowych oraz fitosterolach (beta-sitosterol, kampesterol). Działanie antymitotyczne i blokujące 5-alfa-reduktazę sprawia, że łagodzi dolegliwości układu moczowego spowodowane łagodnym rozrostem stercza - BPH (antiprostaticum)."
      },
      {
        "term": "Nasienie i olej z nasion dyni",
        "definition": "Surowiec z nasion dyni zwyczajnej (<em>Cucurbita pepo</em>, rodzina dyniowate / <em>Cucurbitaceae</em>). Olej ten gromadzi cenne fitosterole (szczególnie delta-7-sterole, np. alfa-spinasterol), skwalen, cynk i selen, a w nasionach występuje przeciwrobaczy aminokwas - kukurbityna. Znalazł zastosowanie urologiczne w zaburzeniach oddawania moczu i przeroście prostaty (antiprostaticum) oraz do zwalczania tasiemców w świetle jelit."
      },
      {
        "term": "Znamiona i olej z zarodków kukurydzy",
        "definition": "Surowiec z kukurydzy zwyczajnej (<em>Zea mays</em>, rodzina wiechlinowate / <em>Poaceae</em>). Znamiona bogate są w sole potasu stymulujące silną diurezę, z kolei olej z zarodków gromadzi kwas linolowy i cenne fitosterole (beta-sitosterol). Znamiona stosuje się w kamicy nerkowej i obrzękach, a olej w leczeniu objawów łagodnego rozrostu stercza (antiprostaticum)."
      },
      {
        "term": "Kora śliwy afrykańskiej",
        "definition": "Kora pozyskiwana z drzewa śliwy afrykańskiej (<em>Prunus africana</em>, rodzina różowate / <em>Rosaceae</em>). Wyciągi lipofilne z kory zawierają linearne alkohole alifatyczne (dokosanol) oraz wolny i związany beta-sitosterol, a także kwasy ursolowy i oleanolowy. Działają silnie przeciwzapalnie na gruczoł krokowy, regenerują i rozkurczają drogi moczowe. Stosuje się je powszechnie w stanach I i II rozrostu prostaty."
      },
      {
        "term": "Korzeń pokrzywy",
        "definition": "Organy podziemne pokrzywy zwyczajnej i żegawki (<em>Urtica dioica / Urtica urens</em>, rodzina pokrzywowate / <em>Urticaceae</em>). Zawierają specyficzne kwasy tłuszczowe, fitosterole (daukosterol, beta-sitosterol), lektyny (UDA) i ceramidy. Hamują aromatazę i zmniejszają namnażanie tkanki prostaty. Surowiec podawany doustnie łagodzi zaburzenia w oddawaniu moczu, spowodowane przerostem gruczołu krokowego (antiprostaticum) oraz działa moczopędnie."
      }
    ],
    "qa": [
      {
        "question": "Jaki mechanizm fizjologiczny tłumaczy przeczyszczające działanie kwasu rycynolowego z oleju rycynowego?",
        "answer": "Olej rycynowy ulega w jelicie cienkim hydrolizie pod wpływem żółci i lipazy; uwolniony kwas rycynolowy drażni ściany jelita, powodując płynne i intensywne wypróżnienie w ciągu 4-6 godzin."
      },
      {
        "question": "Jaką podwójną korzyść medyczną przynosi stosowanie nasion soi jadalnej w ujęciu lipofilnym?",
        "answer": "Olej sojowy dostarcza niezwykle cennych niezbędnych nienasyconych kwasów tłuszczowych (NNKT), a otrzymywana z niego lecytyna działa osłonowo na serce, zwalczając hipercholesterolemię i miażdżycę."
      },
      {
        "question": "Dlaczego lipofilne wyciągi z owoców palmy sabal są tak skuteczne w leczeniu rozrostu prostaty (BPH)?",
        "answer": "Dzięki zawartości fitosteroli (np. beta-sitosterolu) wyciągi te wysoce specyficznie hamują działanie enzymu 5-alfa-reduktazy, blokując groźną konwersję testosteronu do dihydrotestosteronu (DHT) w sterczu."
      },
      {
        "question": "Jaki aminokwas obecny w nasionach dyni (<em>Cucurbita pepo</em>) ma udokumentowane działanie przeciwpasożytnicze?",
        "answer": "W nasionach dyni zlokalizowana jest kukurbityna, nietypowy aminokwas uszkadzający układ nerwowy tasiemców, pozwalając na ich mechaniczne wydalenie z jelit."
      },
      {
        "question": "Jakie kwasy wyizolowane z oleju wiesiołkowego warunkują jego zastosowanie w profilaktyce miażdżycy?",
        "answer": "Zasadnicze znaczenie ma ogromna ilość kwasu linolowego oraz minimum 9% kwasu gamma-linolenowego, warunkujących naprawę barier komórkowych organizmu."
      },
      {
        "question": "Jakie związki oprócz fitosteroli czynią korę śliwy afrykańskiej wybitnym lekiem urologicznym?",
        "answer": "Kora ta, oprócz steroli, obfituje w linearne alkohole alifatyczne (dokosanol i tetrakosanol) połączone z kwasem ferulowym, redukujące obrzęki i hamujące rozrost fibroblastów gruczołu."
      },
      {
        "question": "Skąd dokładnie pobiera się surowiec kukurydziany (<em>Maydis stigma</em>) o działaniu moczopędnym?",
        "answer": "Surowcem tym są znamiona słupków wyciągnięte z żeńskich kwiatostanów kukurydzy, które przed wysuszeniem przypominają długie, jedwabiste, żółte nici."
      },
      {
        "question": "Z czego wynika szerokie wykorzystywanie oleju kakaowego w postaciach leków takich jak czopki?",
        "answer": "Olej kakaowy zbudowany z symetrycznych triacylogliceroli ma odpowiednią temperaturę topnienia - jest stały w temperaturze pokojowej, ale mięknie i roztapia się idealnie w temperaturze ludzkiego ciała."
      },
      {
        "question": "Dlaczego korzeń pokrzywy ma inne wskazania medyczne niż jej ziele i liście?",
        "answer": "Korzeń bogaty jest w lektyny (UDA) i specyficzne fitosterole, które działają celowanie na przerost gruczołu krokowego (BPH), podczas gdy liście to typowy lek diuretyczny."
      },
      {
        "question": "Na co należy uważać, stosując preparaty o wysokiej zawartości kwasu rycynolowego u kobiet?",
        "answer": "Silne skurcze jelit wywołane przez olej rycynowy mogą przenieść się na sąsiadującą mięśniówkę narządów miednicy mniejszej, dlatego środek ten jest ściśle przeciwwskazany w okresie ciąży."
      }
    ]
  },
  {
    "id": "ch3",
    "title": "Kwasy organiczne, witaminy, związki mineralne",
    "summary": "<p>Kwasy organiczne (alifatyczne, dikarboksylowe i aromatyczne) stanowią naturalne składniki tkanek roślinnych, bardzo często warunkując kwaśny smak owoców lub biorąc udział w naturalnych mechanizmach obronnych (np. kwas mrówkowy pokrzywy). Witaminy roślinne (przede wszystkim gigantyczne zasoby witaminy C, ale również witamin A, K, E) stanowią naturalną linię obrony przed szkorbutem, spadkiem odporności i utlenianiem, natomiast roślinne związki mineralne (w pełni przyswajalne sole potasu, krzemu, cynku czy selenu) regulują diurezę i homeostazę wodno-elektrolitową pacjenta. Leki z tej grupy mają typowy profil witaminizujący (uzupełniający diety), napotny w gorączce i silnie przeciwzapalny.</p>",
    "concepts": [
      {
        "term": "Owoc maliny",
        "definition": "Owoce pozyskiwane z maliny właściwej (<em>Rubus idaeus</em>, rodzina różowate / <em>Rosaceae</em>). Głównymi składnikami są kwasy organiczne (cytrynowy, jabłkowy), wysoka zawartość witamin (C, E, z grupy B) oraz pektyny i antocyjany. Tradycyjny i wysoce skuteczny środek napotny, który poprzez stymulację gruczołów potowych silnie i bezpiecznie obniża gorączkę w infekcjach bakteryjnych i wirusowych (antipyreticum)."
      },
      {
        "term": "Owoc róży (Owoc szypszyny)",
        "definition": "Owoce rzekome (szupinkowe) dzikiej róży (<em>Rosa canina</em>, rodzina różowate / <em>Rosaceae</em>). Surowiec jest potężnym magazynem naturalnej witaminy C (kwas L-askorbowy do 1,7%) wspieranym przez karotenoidy (likopen), flawonoidy, pektyny i przeciwzapalny galaktolipid (GOPO). Stosowany jest przy hipowitaminozach, uszczelnianiu kruchych ścian naczyń włosowatych oraz jako środek poprawiający elastyczność chrząstki stawowej (vitaminum, antiphlogisticum)."
      },
      {
        "term": "Liść i ziele pokrzywy",
        "definition": "Nadziemne organy pokrzywy zwyczajnej (<em>Urtica dioica</em>, rodzina pokrzywowate / <em>Urticaceae</em>). Charakteryzują się ekstremalnie wysoką gęstością mineralną (nawet do 18% soli magnezu, wapnia, potasu oraz ogromnej ilości rozpuszczalnej krzemionki) i witamin (K, C, B). Działa silnie moczopędnie w terapii płuczącej (diureticum), oczyszczając organizm ze szkodliwych metabolitów w dnie moczanowej oraz reumatyzmie, dodatkowo zwiększając poziom czerwonych krwinek (chlorofil i żelazo)."
      }
    ],
    "qa": [
      {
        "question": "Jaka grupa związków w owocu dzikiej róży odpowiada za jej czerwono-pomarańczowe zabarwienie?",
        "answer": "Za intensywną barwę odpowiadają przeciwutleniające karotenoidy, głównie beta-karoten oraz likopen."
      },
      {
        "question": "Na czym opiera się mechanizm obniżania gorączki po wypiciu odwaru lub soku z owoców maliny?",
        "answer": "Związki zawarte w owocach maliny działają ośrodkowo i obwodowo, stymulując gruczoły potowe do silnego wydzielania potu, którego parowanie mechanicznie chłodzi powierzchnię ciała."
      },
      {
        "question": "Jaką postać ma wyjątkowo duża ilość wapnia odkładana w tkankach pokrzywy zwyczajnej?",
        "answer": "W węglanowych komórkach pokrzywy (cystolitach) znajduje się krystaliczny węglan wapnia."
      },
      {
        "question": "Dlaczego ziele pokrzywy (<em>Urticae herba</em>) uznawane jest za bardzo bezpieczny i wydajny lek moczopędny?",
        "answer": "Zawiera ogromną ilość (do 18%) rozpuszczalnych soli mineralnych – w tym korzystny stosunek soli potasu do sodu – co pobudza kanaliki nerkowe do filtracji bez zubażania organizmu z kluczowych elektrolitów."
      },
      {
        "question": "Co to jest GOPO, odnaleziony stosunkowo niedawno w owocach dzikiej róży?",
        "answer": "Jest to unikalny galaktolipid uwięziony we właściwych &ldquo;orzeszkach&rdquo; róży, wykazujący świetnie udokumentowane, silne kliniczne działanie przeciwzapalne w reumatologii."
      },
      {
        "question": "Jaką witaminę cenną dla procesów krzepnięcia krwi zawiera w dużej ilości ziele pokrzywy?",
        "answer": "Pokrzywa to obfite źródło witaminy K (K1, filochinonu), która stymuluje produkcję czynników krzepnięcia krwi i posiada cenne właściwości przeciwkrwotoczne."
      },
      {
        "question": "Jaką funkcję farmakologiczną, poza byciem diuretykiem, ma pokrzywa stosowana do nacierań i szamponów?",
        "answer": "Rozpuszczalne związki krzemu w pokrzywie silnie regenerują mieszki włosowe, obniżają produkcję łoju (dermaticum) i powstrzymują patologiczne wypadanie włosów."
      },
      {
        "question": "W jaki sposób zaleca się obecnie obrabiać owoce róży dla celów leczniczych, aby nie niszczyć witaminy C?",
        "answer": "Surowiec musi być stabilizowany – owoce zbierane przed pełnym dojrzeniem (zanim zwiotczeją) powinny być suszone stosunkowo sprawnie w 50°C, co szybko neutralizuje enzym kwasu askorbowego."
      },
      {
        "question": "Co w anatomii pokrzywy jest przyczyną popularnego oparzenia po kontakcie ze skórą?",
        "answer": "Roślina wytwarza jednokomórkowe, kruche włoski główkowe (tzw. włoski parzące), z których po odłamaniu główki pod ciśnieniem wstrzykiwany jest kwas mrówkowy, histamina i acetylocholina."
      },
      {
        "question": "Z jakim ważnym mikroelementem, niezbędnym dla tarczycy, często kojarzymy mineralne suplementy z roślin (oprócz krasnorostów)?",
        "answer": "Suplementy te, jak wyciągi z dyni i czosnku, są częstym naturalnym nośnikiem rzadkiego na lądzie selenu (Se) lub soli krzemu."
      }
    ]
  },
  {
    "id": "ch4",
    "title": "Fenolokwasy, glikozydy fenolowe, lignany",
    "summary": "<p>Związki fenolowe stanowią jedną z najpotężniejszych grup naturalnych leków. Obejmują one proste fenole połączone z cukrami (glukozydy fenolowe, np. salicyna z wierzby, arbutyna z mącznicy) oraz zróżnicowane fenolokwasy (np. kwas rozmarynowy czy chlorogenowy) i ich dimery zwane lignanami. Surowce te wykazują wybitne, zróżnicowane działanie kliniczne. Kora wierzby to naturalny prekursor kwasu salicylowego (zastosowanie przeciwbólowe i przeciwgorączkowe), arbutyna z mącznicy stanowi nadrzędny, naturalny środek antyseptyczny potężnie odkażający drogi moczowe. Z kolei polifenole z jeżówki (kwas cykoriowy) i eleuterokoka silnie stymulują procesy odpornościowe (immunostymulacyjne i adaptogenne) poprzez namnażanie białych krwinek i aktywację mechanizmów pożerania (fagocytozy) bakterii.</p>",
    "concepts": [
      {
        "term": "Kora wierzby",
        "definition": "Surowiec zbierany wczesną wiosną z młodych pędów wierzby białej i purpurowej (<em>Salix alba/purpurea</em>, rodzina wierzbowate / <em>Salicaceae</em>). Posiada duże ilości glukozydów fenolowych, szczególnie salicyny (oraz jej pochodnych: salikortyny, fragiliny). Salicyna ulega w jelitach redukcji i powolnemu utlenieniu do kwasu salicylowego, który działa przeciwbólowo, wybitnie przeciwgorączkowo i przeciwzapalnie w reumatyzmie (antipyreticum, antirheumaticum)."
      },
      {
        "term": "Liść i pączek topoli",
        "definition": "Surowce pozyskiwane z drzew topoli czarnej (<em>Populus nigra</em>, rodzina wierzbowate / <em>Salicaceae</em>). Zawierają glukozydy fenolowe (salicyna, populina) sprzężone z kwasem kawowym oraz lepkie żywice i flawonoidy w pąkach. Wykazują identyczne jak wierzba działanie przeciwbólowe (antipyreticum), a lepkie wyciągi z pączków doskonale leczą i zamykają owrzodzenia, rany hemoroidalne (antihaemorrhoidales)."
      },
      {
        "term": "Kwiat wiązówki (Kwiat tawuły)",
        "definition": "Drobne kwiatostany wiązówki błotnej (<em>Filipendula ulmaria</em>, rodzina różowate / <em>Rosaceae</em>). Magazynują pochodne kwasu salicylowego (spireina, monotropitozyd) i wielkie stężenia flawonoidów (spireozyd). Wybitny lek napotny o silnym profilu przeciwbólowym, stosowany tradycyjnie w dreszczach i przeziębieniach do &ldquo;wypocenia&rdquo; i zbicia gorączki (antipyreticum)."
      },
      {
        "term": "Liść mącznicy",
        "definition": "Skórzaste liście z krzewinki mącznicy lekarskiej (<em>Arctostaphylos uva ursi</em>, rodzina wrzosowate / <em>Ericaceae</em>). Główne związki czynne to glukozydy fenolowe, przede wszystkim arbutyna. W środowisku alkalicznym moczu, arbutyna uwalnia silnie bakteriobójczy i antyseptyczny hydrochinon. Jest to lek z wyboru do leczenia infekcji zapalnych bakteryjnych pęcherza moczowego i nerek (urodesinficiens)."
      },
      {
        "term": "Liść borówki brusznicy",
        "definition": "Liście krzewinki borówki brusznicy (<em>Vaccinium vitis idaea</em>, rodzina wrzosowate / <em>Ericaceae</em>). Zawierają, w bardzo zbliżonych proporcjach do mącznicy, arbutynę oraz dodatkowo 6-acetyloarbutynę (pirozyd) wspieraną triterpenami (kwas ursolowy). Stosowany zamiennie z liściem mącznicy jako bezpieczny preparat niszczący florę bakteryjną i wypłukujący piasek z układu moczowego (urodesinficiens)."
      },
      {
        "term": "Ziele i kwiat wrzosu",
        "definition": "Rozkwitające pędy wrzosu zwyczajnego (<em>Calluna vulgaris</em>, rodzina wrzosowate / <em>Ericaceae</em>). Obok flawonoidów posiadają udokumentowane zawartości arbutyny i garbników. Działają silnie przeciwzapalnie na nabłonki, zmuszając nerki do wzmożonej produkcji i wydalania moczu, zapobiegając uwięźnięciu flory bakteryjnej w moczowodach (diureticum et urodesinficiens)."
      },
      {
        "term": "Liść i ziele karczocha",
        "definition": "Gorzkie w smaku organy nadziemne karczocha zwyczajnego (<em>Cynara scolymus</em>, rodzina astrowate / <em>Asteraceae</em>). Posiadają unikatowe nagromadzenie kwasów fenolowych, gdzie głównym farmakologicznie ciałem czynnym jest cynaryna (kwas 1,5-dikawoilochinowy). Wyciągi z karczocha pobudzają wybiórczo pęcherzyk żółciowy, działają potężnie żółciotwórczo (cholagogum) oraz obniżają produkcję cholesterolu w wątrobie (antiscleroticum)."
      },
      {
        "term": "Ziele i korzeń jeżówki",
        "definition": "Surowce z amerykańskich bylin - jeżówki purpurowej, wąskolistnej i bladej (<em>Echinacea purpurea/angustifolia/pallida</em>, rodzina astrowate / <em>Asteraceae</em>). Najaktywniejsze są tutaj alkamidy i potężne kwasy fenolowe, m.in. kwas cykoriowy i echinakozyd. Kwas cykoriowy dosłownie stymuluje produkcję ludzkiego interferonu i aktywuje białe krwinki do szybkiego niszczenia wirusów. Stosowane masowo w stanach obniżonej odporności i zagrażających infekcjach (immunostimulantia)."
      },
      {
        "term": "Korzeń eleuterokoka (Żeń-szeń syberyjski)",
        "definition": "Organy podziemne eleuterokoka kolczastego (<em>Eleutherococcus senticosus</em>, rodzina araliowate / <em>Araliaceae</em>). Kłącza są bogate w fenylopropanoidy proste (syryngina) oraz skondensowane w dimery lignany (eleuterozyd D i E). Wyciągi tonizują układ nerwowy ludzkiego organizmu i przywracają fizjologiczną wydolność układu krążenia przy potężnym fizycznym i psychicznym wyczerpaniu (adaptogen, tonicum)."
      }
    ],
    "qa": [
      {
        "question": "W jakim środowisku (pH) w drogach moczowych aktywuje się arbutyna z liści mącznicy (<em>Uvae ursi folium</em>)?",
        "answer": "Arbutyna hydrolizuje i uwalnia antyseptyczny hydrochinon najefektywniej w środowisku alkalicznym moczu (pH około 8), co czasami wymaga zmiany diety podczas kuracji (dieta roślinna)."
      },
      {
        "question": "Na czym polega przewaga farmakokinetyczna kory wierzby nad popularną w tabletkach syntetyczną aspiryną?",
        "answer": "Salicyna z kory wierzby nie drażni czynnie śluzówki żołądka, gdyż utlenia się do żrącego dla wrzodów kwasu salicylowego dopiero we krwi, po wchłonięciu z jelit."
      },
      {
        "question": "Jaką podwójną funkcję pełnią związki polifenolowe wyizolowane z ziela i liści karczocha?",
        "answer": "Cynaryna (kwas dikawoilochinowy) pobudza wątrobę do wzmożonej rzutu lepkiej żółci (ułatwiając trawienie ciężkich tłuszczów) i aktywnie obniża poziom krążącego, niebezpiecznego cholesterolu we krwi."
      },
      {
        "question": "Co to jest tzw. &ldquo;Garbnik Labiatae&rdquo; i jakie kwasy wchodzą w jego skład?",
        "answer": "Pod pojęciem Garbnika Labiatae kryje się wybitnie cenny dla rodziny Jasnotowatych silnie antybakteryjny kwas rozmarynowy (będący specyficznym estrem kwasu kawowego)."
      },
      {
        "question": "Z jakiego głównego biochemicznego powodu korzenie <em>Echinacea purpurea</em> są masowo sprzedawane w aptekach jesienią?",
        "answer": "Są one naturalnym i niezwykle szybkim stymulatorem (dzięki echinakozydowi i kwasowi cykoriowemu) aktywującym produkcję białych krwinek pochłaniających wtargnięte wirusy i bakterie grypowe."
      },
      {
        "question": "Wymień trzy glukozydy fenolowe typowe dla wyciągów z wierzby oraz topoli.",
        "answer": "Są to bazowa salicyna, salikortyna oraz populina (6-O-benzoiloglukozyd saligeniny w pąkach topoli)."
      },
      {
        "question": "Czy eleuterozydy syberyjskiego żeń-szenia (Eleutherococcus) zaliczamy do klasycznych alkaloidów uspokajających?",
        "answer": "Nie, eleuterozydy B, D, E to nic innego jak naturalne pochodne wielkocząsteczkowych fenylopropanoidów (lignanów), działające na organizm tonizująco (pobudzająco, wspierając fizycznie jako adaptogen)."
      },
      {
        "question": "Dlaczego podczas suszenia świeżych liści mącznicy stosuje się niekiedy gorące powietrze?",
        "answer": "Należy szybko unieczynnić naturalne enzymy roślinne, tak by cenne glukozydy fenolowe (arbutyna) nie rozpadły się na hydrochinon już na etapie produkcji surowca farmaceutycznego."
      },
      {
        "question": "Czym chemicznie różnią się kwasy fenolowe, takie jak kwas kawowy, od np. kwasu octowego czy mrówkowego?",
        "answer": "Kwasy fenolowe (często C6-C1 i C6-C3) wywodzą się bezpośrednio od pierścienia aromatycznego (kwasu benzoesowego lub cynamonowego) podstawionego silnie czynnymi biologicznie grupami hydroksylowymi."
      },
      {
        "question": "Do jakich celów (według zaleceń m.in. dla surowców śluzowych) można użyć pączków topoli w rektologii?",
        "answer": "Pączki topoli obfitujące w salicynę i żywice ściągające rewelacyjnie wstrzymują ból i zapalenie wysuniętych, krwawiących żylaków odbytu (antihaemorrhoidales)."
      }
    ]
  },
  {
    "id": "ch5",
    "title": "Garbniki",
    "summary": "<p>Garbniki (taniny) to fascynujące bezazotowe wielkocząsteczkowe związki polifenolowe (o masie cząsteczkowej 500-3000), które natura wymyśliła głównie jako chemiczne bariery obronne dla roślin. Dzielimy je klasycznie na garbniki hydrolizujące (zbudowane z kwasu galusowego i elagowego, mogące rozpadać się w roztworach) oraz garbniki skondensowane (niehydrolizujące, oparte na polimeryzacji katechiny i epikatechiny, jak chociażby cenne proantocyjanidyny). Główną właściwością chemiczną tanin jest nieodwracalne ścinanie (koagulacja) obcych białek. Pociąga to za sobą genialne właściwości lecznicze – po naniesieniu na śluzówki i rany wytwarzają gęsty strup z białek tkankowych, hamujący mikro-krwotoki i wstrzymujący penetrację bakterii i grzybów wgłąb komórek. Podawane doustnie ściągają obrzmiałe jelita w ciężkich biegunkach i uszczelniają sieć kruchych, popękanych kapilar.</p>",
    "concepts": [
      {
        "term": "Dębianka (Galasy dębowe)",
        "definition": "Patologiczna, obronna narośl wytwarzana na młodych pąkach dębu galasowego (<em>Quercus infectoria</em>, rodzina bukowate / <em>Fagaceae</em>) przez rozwój owada - galasownika. Zawiera monstrualne, bo rzędu 50-70% objętości, stężenie czystych garbników hydrolizujących (kwas taninowy). Służy w farmacji do pozyskiwania czystej farmakopealnej taniny i płynów wybitnie i mocno ściągających zranienia oraz silnie potliwe dłonie i stopy."
      },
      {
        "term": "Kora dębu",
        "definition": "Klasyczna, rurkowata kora łuskana wiosną z gałęzi dębu szypułkowego lub bezszypułkowego (<em>Quercus robur/sessilis</em>, rodzina bukowate / <em>Fagaceae</em>). Skład to mieszanka katechin, garbników katechinowych i kwasu elagowego z galusowym. Standard w dermatologii jako środek ściągający tkanki przy okładach na upławy, odparzenia pochwy, krwawienia hemoroidalne oraz ciężkie i śluzowate biegunki (antidiarrhoicum)."
      },
      {
        "term": "Kłącze wężownika",
        "definition": "Grube, skręcone podziemne pędy rdestu wężownika (<em>Polygonum bistorta</em>, rodzina rdestowate / <em>Polygonaceae</em>). Wewnątrz miąższu ukrytych jest około 15-20% galotanoidów i garbników katechinowych. Równocześnie w wężowniku pęcznieje skrobia. Stanowi lek wybitnie ściągający i hemostatyczny; po wypiciu szybko odcina uszkodzone kosmki jelit od drażniących kwasów w czasie rozwolnienia."
      },
      {
        "term": "Kłącze pięciornika (Kurze ziele)",
        "definition": "Grube, mocno czerwone na przełamie kłącze pięciornika kurze ziele (<em>Potentilla erecta</em>, rodzina różowate / <em>Rosaceae</em>). Potężne rezerwy proantocyjanidyn i elagotanoidu (agrimoniny) z towarzystwem triterpenów (kwas tormentilowy). Najbardziej kultowy naturalny stoper biegunek, obrzęków i ropnej anginy gardła – odwary powodują szybkie i masowe wiązanie wirusów (antidiarrhoicum, haemostaticum)."
      },
      {
        "term": "Liść orzecha włoskiego",
        "definition": "Aromatyczne liście pozyskiwane z drzewa orzecha włoskiego (<em>Juglans regia</em>, rodzina orzechowate / <em>Juglandaceae</em>). Unikatowy surowiec, bowiem w towarzystwie klasycznych elagotanoidów występuje naftochinon (juglon), który odpowiada za proces utleniania i barwienia skóry. Odwary stosowane są tradycyjnie u nastolatków w nadmiernej potliwości stóp (antihydroticum) i niszczeniu drożdżaków i ropni bakteryjnych."
      },
      {
        "term": "Liść i kora oczaru",
        "definition": "Kora w postaci rynienek lub liście z drzewiastego oczaru wirginijskiego (<em>Hamamelis virginiana</em>, rodzina oczarowate / <em>Hamamelidaceae</em>). Posiada wysoce cenne a- i b-hamamelitaniny. Fenomenalnie obkurcza małe, nieszczelne i kruche naczynia żylne na nogach; wyciąg z kory jest z wielkim sukcesem wcierany w żylaki odbytu oraz ciężkie obrzęki i sine wybroczyny pourazowe nóg (vasoprotectivum, antihaemorrhoidales)."
      },
      {
        "term": "Liść jeżyny",
        "definition": "Liście wycinane wiosną z kolczastych pędów jeżyny fałdowanej (<em>Rubus fruticosus</em>, rodzina różowate / <em>Rosaceae</em>). Typowy surowiec posiadający bezpieczne do 8% galotanoidy i kwasy organiczne. Używany pomocniczo pod postacią odwarów w łagodnych zakażeniach i nieżytach przewodu pokarmowego, zatruciach dzieci (antidiarrhoicum)."
      },
      {
        "term": "Liść maliny",
        "definition": "Liście krzewów maliny właściwej (<em>Rubus idaeus</em>, rodzina różowate / <em>Rosaceae</em>). Posiadają uboższe stężenia garbników i flawonoidów (rutozyd). Są bardzo łagodnym lekiem ściągającym, zalecanym jako bezpieczne zapierające do wewnątrz w czasie rozwolnienia małych dzieci oraz do pędzlowania bolesnych ran jamy ustnej (antidiarrhoicum)."
      },
      {
        "term": "Liść borówki czernicy",
        "definition": "Cienkie listki wyrastające na popularnych krzewinkach borówki czarnej (<em>Vaccinium myrtillus</em>, rodzina wrzosowate / <em>Ericaceae</em>). Gęsty i zbity pakiet garbników katechinowych (nawet do 20%) zmieszany z jonami chromu i fitozwiązkiem hipoglikemicznym zwanym neomyrtyliną. Powleka zranienia jelitowe potężnym strupem bakteryjnym i delikatnie zbija poposiłkową koncentrację glukozy w początkowej cukrzycy (antidiabeticum)."
      },
      {
        "term": "Ziele rzepiku",
        "definition": "Ulistnione pędy rzepiku pospolitego (<em>Agrimonia eupatoria</em>, rodzina różowate / <em>Rosaceae</em>). Połączenie garbników z bogatym i goryczowym olejkiem eterycznym. Odwary nie tylko tamują luźne wypróżnienia, ale jako jedne z nielicznych aktywnie oczyszczają zastoiny żółciowe wątroby ułatwiając trawienie ciężkiego pokarmu (cholagogum, antidiarrhoicum)."
      },
      {
        "term": "Ziele rdestu ostrogorzkiego",
        "definition": "Wierzchołki rdestu (<em>Polygonum hydropiper</em>, rodzina rdestowate / <em>Polygonaceae</em>). Obfituje w katechiny i potężną sieć flawonoidów (hiperozyd, persykaryna) oraz światłoczułe naftodiantrony. Lek typowo przeciwkrwotoczny (haemostaticum) - ściąga i redukuje obfite krwawienia dróg rodnych, przedłużające się w czasie gwałtownych menstruacji."
      },
      {
        "term": "Ziele pięciornika gęsiego",
        "definition": "Srebrzyście owłosione liście pięciornika gęsiego (<em>Potentilla anserina</em>, rodzina różowate / <em>Rosaceae</em>). Kumulują elagotanoidy zmieszane z kumarynami i pseudosaponinami (tormentozyd). Kombinacja ta znakomicie redukuje uciski kurczowe macicy, skurcze jelit z okropnymi bólami połączonymi z ostrymi krwawieniami i stanami zakażenia śluzówek (spasmolyticum, antidiarrhoicum)."
      }
    ],
    "qa": [
      {
        "question": "Jaka jest unikalna cecha garbników odróżniająca je od innych grup antyseptycznych i ściągających zjawisk w farmakognozji?",
        "answer": "Garbniki jako jedyne związki potrafią tworzyć chemicznie całkowicie nierozpuszczalne, stałe struktury (kompleksy) z białkami ludzkiej i zwierzęcej skóry lub z komórkami bakterii (denaturacja)."
      },
      {
        "question": "Dlaczego wyciągów z bogatej w galotanoidy kory dębu używa się u niemowląt chorych na wodniste biegunki z podziurawionymi kosmkami?",
        "answer": "Ponieważ napar powleka uszkodzoną śluzówkę dziecka wodoodpornym strupem białkowym i drastycznie zatrzymuje przepływ zapalnej wody z tkanki do światła biegunkowego jelita grubego."
      },
      {
        "question": "Jaką przewagę mają w żylakach odbytu (hemoroidach) maści otrzymane z liścia i kory oczaru (<em>Hamamelidis folium/cortex</em>)?",
        "answer": "Frakcje specyficznych i rzadkich w świecie roślinnym hamamelitanin fenomenalnie zwężają popękane, napuchnięte patologicznie naczynia krwionośne redukując zapalne sączenie surowicy i krwi."
      },
      {
        "question": "Jaka substancja izolowana z dębianki tureckiej podawana jest dojelitowo po chemicznym związaniu jej z białkiem i dlaczego tak się robi?",
        "answer": "Podaje się białczan taniny (Tanninum albuminatum) uodparniając w ten sposób śluzówkę żołądka na drażniące, mocno wżerające się w nią i bolesne w reakcji czyste garbniki."
      },
      {
        "question": "Jak działa neomyrtylina odnaleziona w ścisłym towarzystwie garbników na liściach borówki czernicy (<em>Vaccinium myrtillus</em>)?",
        "answer": "Związek ten (tzw. naturalna glukokinina) posiada wysoce docenianą przez tradycyjną medycynę zdolność delikatnego obniżania nienormalnie wysokiego stężenia cukru we krwi zjedzonego po dużym posiłku."
      },
      {
        "question": "Który ze żrących zakażenia flawonoidów (tzw. persykaryna) odgrywa dużą rolę wspomagającą w rdeście ostrogorzkim (<em>Polygonum hydropiper</em>)?",
        "answer": "Flawonoidy te w asyście garbników wyśmienicie odcinają utratę czerwonych krwinek, wywołując masowe uciskanie mięśni miednicy mniejszej (haemostaticum w obfitych miesiączkach i krwotokach ukrytych)."
      },
      {
        "question": "Jak nazywa się główna aktywna, potężnie zbudowana cząsteczka elagotanoidu z kłącza i liści pięciornika kurze ziele (<em>Potentilla erecta</em>)?",
        "answer": "Cząsteczka ta nosi unikalną w medycynie nazwę - agrimonina, silnie denaturująca florę wirusową wywołującą stany obrzękowe gardła."
      },
      {
        "question": "Jaką uboczną funkcję (z powodów barwiących) ma juglon wyciągany wraz z garbnikami z dojrzałych liści orzecha włoskiego?",
        "answer": "Ponieważ juglon ma strukturę naftochinonu utleniającego się na silnie barwny polimer w zetknięciu z keratyną i tlenem, skutecznie i szybko farbuje wierzchnie warstwy naskórka zniszczonego grzybicą na głęboki brunatny kolor."
      },
      {
        "question": "Który z powszechnych polskich owoców leśnych wydaje najkorzystniejsze i najskuteczniejsze napary &ldquo;z liścia&rdquo; uspokajające i kojące ból brzucha małego dziecka (łagodne i pozbawione toksyczności)?",
        "answer": "Są to napary wykonywane z bezpiecznych listków dzikiej maliny i słodkiej dzikiej jeżyny, z racji łagodnego spektrum kwasów."
      },
      {
        "question": "Czy z dębianki (<em>Galla</em>) wykonuje się wyciągi do picia przy zaburzeniach trawiennych lub zaparciach?",
        "answer": "Absolutnie nie, monstrualna stężenie garbników (prawie 70% czystej, agresywnej taniny) jest stosowane współcześnie wyłącznie zewnętrznie w postaci zasypek pudrowych lub bardzo gęstych maści na ropnie dermatologiczne. --- <em>Wygenerowałem powyższe, niezwykle rozbudowane i detaliczne cztery główne rozdziały zgodnie z Twoimi wymaganiami i formatem. Ze względu na ograniczenia maksymalnej długości pojedynczej wiadomości, pozostałe działy (od &ldquo;Olejki eteryczne&rdquo; aż po &ldquo;Alkaloidy&rdquo;) zostały zaplanowane i przygotowane do wygenerowania. Aby uzyskać ich kompendium w dokładnie tym samym, precyzyjnym formacie, po prostu napisz &ldquo;kontynuuj&rdquo;.</em>"
      }
    ]
  }
];
