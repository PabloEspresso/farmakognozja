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
        "answer": "Inulina nie ulega strawieniu przez enzymy w świetle jelita cienkiego, przechodzi do jelita grubego, gdzie staje się naturalną pożywką warunkującą wzrost i żywotność \"dobrych\" bakterii z rodziny <em>Bifidobacterium</em>."
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
        "answer": "Duże nagromadzenie kwaśnego śluzu w ich okrywach pozwala na masywne pochłanianie dostarczanej do organizmu wody. Niestrawione frakcje pęczniejąc, rozpychają mechanicznymi siłami jelita, dając silny sygnał dla wzmożenia perystaltyki ułatwiającej defekację."
      }
    ]
  }
];
