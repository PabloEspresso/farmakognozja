const bookData = [
  {
    "id": "ch1",
    "title": "Węglowodany i Polisacharydy",
    "summary": "<p>Węglowodany to najbardziej rozpowszechniona grupa substancji roślinnych, które pełnią rolę materiału zapasowego (np. skrobia, inulina) lub budulcowego (np. celuloza, hemiceluloza, pektyny). Dzielą się na monosacharydy, oligosacharydy oraz polisacharydy. Wśród polimerów szczególne znaczenie lecznicze mają polisacharydy śluzowe, gumy roślinne oraz pektyny, które wykazują zdolność pęcznienia, tworzenia roztworów koloidalnych oraz działania silnie osłaniającego na błony śluzowe. Polisacharydy grzybowe (np. glukany) wykazują z kolei właściwości immunostymulujące. Włókna celulozowe i pektyny pełnią też ważną funkcję balastową w przewodzie pokarmowym.</p>",
    "concepts": [
      {
        "term": "Skrobie roślinne",
        "definition": "Wysokocząsteczkowe polimery glukozy, zbudowane z amylozy i amylopektyny, stanowiące główny materiał zapasowy roślin.<br>• <strong>Surowce:</strong> Skrobia ziemniaczana (Solani amylum – rodzina psiankowate / Solanaceae), Skrobia kukurydziana (Maydis amylum – rodzina wiechlinowate / Poaceae), Skrobia pszeniczna (Tritici amylum – rodzina wiechlinowate / Poaceae).<br>• <strong>Skład fitochemiczny:</strong> Głównymi związkami są amylopektyna (65-85%) o łańcuchach rozgałęzionych oraz amyloza (20-35%).<br>• <strong>Działanie i zastosowanie:</strong> Skrobia działa silnie adsorbująco i osłaniająco. Używa się jej do łagodzenia stanów zapalnych skóry (w formie zasypek) oraz w podrażnieniach przewodu pokarmowego (w formie kleiku). W farmacji jest powszechnie stosowana jako substancja wypełniająca i rozsadzająca w produkcji tabletek."
      },
      {
        "term": "Polisacharydy śluzowe",
        "definition": "Heteropolisacharydy mające zdolność pęcznienia w wodzie, w której tworzą lepkie roztwory koloidowe lub żele (roślinne hydrokoloidy) o działaniu powlekającym.<br>• <strong>Surowce:</strong> Korzeń prawoślazu (Althaeae radix – rodzina ślazowate / Malvaceae), Liść babki lancetowatej (Plantaginis lanceolatae folium – rodzina babkowate / Plantaginaceae), Nasienie lnu / Siemię lniane (Lini semen – rodzina lnowate / Linaceae).<br>• <strong>Skład fitochemiczny:</strong> Mieszaniny kwaśnych galakturonoramnanów, arabinogalaktanów, glukanów i arabinoksylanów.<br>• <strong>Działanie i zastosowanie:</strong> Działają wyłącznie miejscowo, powlekająco i osłaniająco na błony śluzowe jamy ustnej, gardła i żołądka. Stosowane przeciwkaszlowo (łagodzą odruch kaszlu), przeciwzapalnie oraz łagodnie przeczyszczająco (zwiększają objętość mas kałowych)."
      },
      {
        "term": "Polimery fruktozy (Inulina i fruktany)",
        "definition": "Niskocząsteczkowe polimery fruktozy (fruktany) pełniące funkcję rozpuszczalnego błonnika pokarmowego i prebiotyku.<br>• <strong>Surowce:</strong> Bulwa słonecznika bulwiastego / topinambur (Helianthi tuberosi tuber – rodzina astrowate / Asteraceae), Kłącze perzu (Graminis rhizoma – rodzina wiechlinowate / Poaceae).<br>• <strong>Skład fitochemiczny:</strong> Inulina, niskocząsteczkowe fruktooligosacharydy (w topinamburze) oraz trytycyna (w perzu).<br>• <strong>Działanie i zastosowanie:</strong> Nie ulegają wchłanianiu, stanowią pożywkę dla bifidobakterii (regulacja flory jelitowej). Dają uczucie sytości, wspomagają odchudzanie i obniżają poziom cukru. Kłącze perzu działa ponadto moczopędnie i łagodzi podrażnienia dróg oddechowych."
      },
      {
        "term": "Pektyny",
        "definition": "Polimery kwasu galakturonowego (często ramnogalakturoniany lub homogalakturoniany), które w środowisku kwaśnym i w obecności cukru tworzą żele.<br>• <strong>Surowce:</strong> Pektyna jabłkowa i cytrusowa (pozyskiwane z owoców), Owoce róży (Rosae fructus – rodzina różowate / Rosaceae).<br>• <strong>Skład fitochemiczny:</strong> Polimery kwasu D-galakturonowego, częściowo metylowane.<br>• <strong>Działanie i zastosowanie:</strong> Powlekają błony śluzowe przewodu pokarmowego, chłoną wodę i regulują wypróżnienia. Stosowane w biegunkach, a także w celu obniżania poziomu cholesterolu we krwi (zapobieganie miażdżycy)."
      },
      {
        "term": "Polisacharydy alg (Krasnorosty i Brunatnice)",
        "definition": "Specyficzne polimery galaktozy i kwasów uronowych pozyskiwane z glonów morskich, silnie pęczniejące i żelujące.<br>• <strong>Surowce:</strong> Agar (pozyskiwany z galaretówek Gelidium – rodzina Gelidiaceae), Karagen (Carrageen, z chrzęścicy kędzierzawej Chondrus crispus – rodzina Gigartinaceae), Morszczyn (Fucus vesiculosus – rodzina morszczynowate / Fucaceae).<br>• <strong>Skład fitochemiczny:</strong> Agaroza, agaropektyna, karageniny (polimery D-galaktozy z resztami siarczanowymi) oraz kwas alginowy.<br>• <strong>Działanie i zastosowanie:</strong> Absorbują wodę w jelitach, stymulując mięśniówkę i ułatwiając wypróżnienia. Wykorzystywane jako środki łagodnie przeczyszczające, w chorobie wrzodowej oraz w kuracjach odchudzających. Morszczyn stanowi dodatkowo źródło jodu."
      }
    ],
    "qa": [
      {
        "question": "Czym różnią się monosacharydy od polisacharydów pod względem smaku i rozpuszczalności?",
        "answer": "Monosacharydy mają słodki smak i dobrze rozpuszczają się w wodzie, natomiast polisacharydy (powyżej 10 cząsteczek) tracą smak słodki, a ich rozpuszczalność maleje wraz ze wzrostem masy cząsteczkowej."
      },
      {
        "question": "Jakie jest główne zastosowanie mannitolu w medycynie?",
        "answer": "Mannitol jest stosowany łagodnie przeczyszczająco w zaparciach oraz w chorobach wymagających miękkiego stolca (np. szczeliny odbytu)."
      },
      {
        "question": "W jakim surowcu występuje lichenina i jakie ma właściwości?",
        "answer": "Lichenina występuje w poroście islandzkim (Lichen islandicus); jest to glukan rozpuszczalny w gorącej wodzie, działający osłaniająco na błony śluzowe."
      },
      {
        "question": "Dlaczego śluzy roślinne stosowane są jako leki przeciwkaszlowe?",
        "answer": "Śluzy powlekają błonę śluzową gardła i krtani, zmniejszając podrażnienie receptorów kaszlowych i łagodząc suchy odruch kaszlowy."
      },
      {
        "question": "Jak działają galaktomannany zawarte w nasionach kozieradki?",
        "answer": "Mają charakter hydrokoloidów – pęcznieją w wodzie, obniżają poziom cholesterolu i cukru we krwi oraz działają osłaniająco na żołądek."
      },
      {
        "question": "Jaka roślina jest głównym źródłem inuliny stosowanym w dietetyce?",
        "answer": "Słonecznik bulwiasty (topinambur), którego bulwy zawierają do 75% inuliny i fruktooligosacharydów."
      },
      {
        "question": "Czym są karageniny i skąd się je pozyskuje?",
        "answer": "Karageniny to polisacharydy siarczanowe pozyskiwane z krasnorostów (np. chrzęścicy kędzierzawej), stosowane m.in. w chorobie wrzodowej i jako stabilizatory."
      },
      {
        "question": "Jak na organizm działają polisacharydy grzybów wielkoowocnikowych (np. lentinan)?",
        "answer": "Stymulują układ immunologiczny i są wykorzystywane wspomagająco w leczeniu niektórych nowotworów."
      },
      {
        "question": "Dlaczego nasion babki płesznik nie należy stosować przy niedrożności jelit?",
        "answer": "Ponieważ nasiona te silnie pęcznieją w przewodzie pokarmowym pod wpływem wody, co mogłoby pogorszyć stan niedrożności."
      },
      {
        "question": "Jakie związki odpowiadają za żelujące właściwości pektyn w domowych przetworach?",
        "answer": "Częściowo metylowane polimery kwasu D-galakturonowego, które żelują w środowisku kwaśnym z dodatkiem sacharozy."
      }
    ]
  },
  {
    "id": "ch2",
    "title": "Lipidy, Tłuszcze i Fitosterole",
    "summary": "<p>Lipidy to lipofilne substancje, do których zalicza się estry glicerolu i kwasów tłuszczowych (tłuszcze stałe i oleje) oraz woski. Oleje roślinne płynne bogate są w nienasycone kwasy tłuszczowe (np. linolowy, linolenowy), niezbędne do budowy błon komórkowych i zmniejszające ryzyko miażdżycy. Bardzo ważną farmakologicznie frakcją lipidową są niezmydlające się fitosterole (np. beta-sitosterol), które wykazują zdolność hamowania enzymów odpowiedzialnych za przerost gruczołu krokowego (BPH) i działają przeciwzapalnie.</p>",
    "concepts": [
      {
        "term": "Oleje roślinne nienasycone",
        "definition": "Oleje bogate w wielonienasycone kwasy tłuszczowe (NNKT), które organizm musi pozyskiwać z zewnątrz.<br>• <strong>Surowce:</strong> Olej wiesiołkowy (Oenotherae oleum virginum – z wiesiołka dziwnego/dwuletniego z rodziny wiesiołkowate / Oenotheraceae), Olej z nasion ogórecznika (Boraginis oleum – z ogórecznika lekarskiego, rodzina ogórecznikowate / Boraginaceae), Olej lniany (Lini oleum – z lnu zwyczajnego, rodzina lnowate / Linaceae).<br>• <strong>Skład fitochemiczny:</strong> Kwas linolowy, linolenowy (w tym cenny kwas gamma-linolenowy - GLA w wiesiołku), kwas oleinowy.<br>• <strong>Działanie i zastosowanie:</strong> Uzupełnianie niedoborów NNKT (regulacja metabolizmu), łagodzenie stanów zapalnych skóry, obniżanie poziomu cholesterolu we krwi, profilaktyka miażdżycy."
      },
      {
        "term": "Oleje rycynowe (mononienasycone o specyficznym działaniu)",
        "definition": "Olej o właściwościach drażniących przewód pokarmowy po enzymatycznym rozkładzie.<br>• <strong>Surowce:</strong> Olej rycynowy (Ricini oleum, wytłaczany z nasion rącznika pospolitego Ricinus communis – rodzina wilczomleczowate / Euphorbiaceae).<br>• <strong>Skład fitochemiczny:</strong> Triestry glicerolu i kwasu rycynolowego.<br>• <strong>Działanie i zastosowanie:</strong> Pod wpływem lipazy i żółci w jelicie uwalnia się kwas rycynolowy, który drażni ściany jelita cienkiego, powodując upłynnienie treści i silne działanie przeczyszczające (laxans)."
      },
      {
        "term": "Fitosterole w leczeniu BPH",
        "definition": "Związki o budowie sterydowej zawarte we frakcjach lipofilnych roślin, hamujące enzymy 5-alfa-reduktazę i aromatazę, co zapobiega rozrostowi prostaty.<br>• <strong>Surowce:</strong> Owoc palmy sabalowej (Sabal fructus – z boczni piłkowanej Serenoa repens, rodzina arekowate / Arecaceae), Kora śliwy afrykańskiej (Pruni africanae cortex – z Prunus africana, rodzina różowate / Rosaceae).<br>• <strong>Skład fitochemiczny:</strong> Beta-sitosterol, kampesterol, nienasycone kwasy tłuszczowe, alkohole alifatyczne (dokosanol).<br>• <strong>Działanie i zastosowanie:</strong> Utrudniają wiązanie dihydrotestosteronu (DHT) z receptorami w sterczu. Łagodzą objawy związane z I i II stadium łagodnego rozrostu gruczołu krokowego (ułatwiają oddawanie moczu, znoszą ból i częstomocz) bez zmniejszania samego gruczolaka."
      },
      {
        "term": "Fitosterole moczopędne i przeciwzapalne",
        "definition": "Lipofilne frakcje roślinne działające przeciwobrzękowo i diuretycznie przy problemach urologicznych.<br>• <strong>Surowce:</strong> Korzeń pokrzywy (Urticae radix – z pokrzywy zwyczajnej Urtica dioica, rodzina pokrzywowate / Urticaceae), Nasienie/olej z nasion dyni (Cucurbitae peponis semen – z dyni zwyczajnej Cucurbita pepo, rodzina dyniowate / Cucurbitaceae).<br>• <strong>Skład fitochemiczny:</strong> Beta-sitosterol (w pokrzywie), delta-7-sterole (w dyni), ceramidy, nienasycone kwasy tłuszczowe, lignany.<br>• <strong>Działanie i zastosowanie:</strong> Obniżają poziom białek wiążących hormony płciowe (SHBG), działają przeciwzapalnie hamując syntezę prostaglandyn. Stosowane w łagodnym rozroście prostaty, zaburzeniach mikcji i podrażnieniach pęcherza."
      },
      {
        "term": "Lecytyny i niezmydlające się frakcje olejowe",
        "definition": "Lipidy złożone (fosfolipidy) o istotnym znaczeniu dla struktury błon i profilaktyki miażdżycy.<br>• <strong>Surowce:</strong> Olej sojowy (Sojae oleum – z soi jadalnej Glycine soja, rodzina bobowate / Fabaceae), Olej z owoców awokado (Perseae oleum – z awokado Persea americana, rodzina wawrzynowate / Lauraceae).<br>• <strong>Skład fitochemiczny:</strong> Lecytyna sojowa, beta-sitosterol, tokoferole, kwas linolowy.<br>• <strong>Działanie i zastosowanie:</strong> Lecytyna sojowa stosowana jest w hipercholesterolemii. Niezmydlające się frakcje soi i awokado wchodzą w skład leków na zwyrodnieniowe uszkodzenia chrząstki stawowej (działanie przeciwreumatyczne)."
      }
    ],
    "qa": [
      {
        "question": "Jaką rolę odgrywają niezbędne nienasycone kwasy tłuszczowe (NNKT)?",
        "answer": "Biorą udział w biosyntezie błon komórkowych i eikozanoidów; ich brak powoduje m.in. łuszczenie skóry, spadek odporności i zwiększa ryzyko miażdżycy."
      },
      {
        "question": "Które roślinne oleje charakteryzują się przewagą nasyconych kwasów tłuszczowych?",
        "answer": "Olej kakaowy (masło kakaowe), olej kokosowy oraz olej palmowy."
      },
      {
        "question": "Jakie jest medyczne zastosowanie masła kakaowego (Cacao oleum)?",
        "answer": "Dzięki stałej konsystencji służy głównie jako podłoże do produkcji czopków, maści i kremów."
      },
      {
        "question": "Dlaczego olej rycynowy działa przeczyszczająco dopiero w jelicie cienkim?",
        "answer": "Ponieważ musi najpierw ulec hydrolizie pod wpływem żółci i lipazy, uwalniając drażniący kwas rycynolowy."
      },
      {
        "question": "W jakim surowcu znajduje się duża ilość kwasu gamma-linolenowego (GLA)?",
        "answer": "W oleju z nasion wiesiołka (Oenotherae oleum) oraz w oleju z nasion ogórecznika (Boraginis oleum)."
      },
      {
        "question": "Jaki jest główny mechanizm działania fitosteroli w leczeniu przerostu prostaty?",
        "answer": "Hamują enzymy (5-alfa-reduktazę i aromatazę) przekształcające testosteron do DHT, obniżając gromadzenie się steroidów prozapalnych w prostacie."
      },
      {
        "question": "Jaki minerał i w jakim surowcu lipidowym wspiera leczenie układu moczowego?",
        "answer": "Selen obecny w dużych ilościach w nasionach dyni (Cucurbitae peponis semen)."
      },
      {
        "question": "Który z surowców fitosterolowych zawiera ceramidy analogiczne do glicerofosfolipidów?",
        "answer": "Korzeń pokrzywy (Urticae radix)."
      },
      {
        "question": "Co stanowi tzw. frakcję niezmydlającą się oleju i z czego się składa?",
        "answer": "Stanowi ją ok. 0,3-2% oleju, nie ulega hydrolizie, zawiera m.in. węglowodory, fitosterole, tokoferole i karotenoidy."
      },
      {
        "question": "Co uwalnia kora śliwy afrykańskiej, co obniża poziom cholesterolu i działa antyprostatycznie?",
        "answer": "Fitosterole, kwas ursolowy oraz estry kwasu ferulowego z alkoholami alifatycznymi (dokosanol)."
      }
    ]
  },
  {
    "id": "ch3",
    "title": "Kwasy organiczne, Związki Fenolowe, Garbniki i Flawonoidy",
    "summary": "<p>To bardzo obszerna klasa substancji roślinnych z pierścieniem aromatycznym i grupami hydroksylowymi. Kwasy organiczne i fenolokwasy (np. kwas rozmarynowy czy kawowy) wykazują silne właściwości przeciwzapalne i antyseptyczne. Garbniki (hydrolizujące od pirogalolu i skondensowane/katechinowe) strącają białka, działając ściągająco i przeciwbiegunkowo na błony śluzowe. Flawonoidy i antocyjany (np. rutozyd, cyjanidyny) to naturalne barwniki o wybitnych właściwościach antyoksydacyjnych; uszczelniają naczynia krwionośne, działają spazmolitycznie i moczopędnie. Lignany to dimeryczne fenylopropanoidy pełniące funkcję silnych adaptogenów i antyoksydantów.</p>",
    "concepts": [
      {
        "term": "Glukozydy fenolowe - salicylany",
        "definition": "Połączenia prostego fenolu z resztą cukrową, będące naturalnymi prekursorami kwasu salicylowego.<br>• <strong>Surowce:</strong> Kora wierzby (Salicis cortex – rodzina wierzbowate / Salicaceae), Liść topoli (Populi folium – rodzina wierzbowate / Salicaceae), Kwiat wiązówki (Ulmariae flos – rodzina różowate / Rosaceae).<br>• <strong>Skład fitochemiczny:</strong> Salicyna, salikortyna, populina, flawonoidy, garbniki.<br>• <strong>Działanie i zastosowanie:</strong> Salicyna hydrolizuje w jelitach do alkoholu salicylowego, a w wątrobie utlenia się do kwasu salicylowego. Wykazuje silne działanie przeciwgorączkowe (antipyreticum), przeciwzapalne i przeciwbólowe w przeziębieniach i reumatyzmie."
      },
      {
        "term": "Garbniki katechinowe i galotanoidy",
        "definition": "Związki wielkocząsteczkowe wiążące białka z utworzeniem ochronnej warstwy na błonach śluzowych.<br>• <strong>Surowce:</strong> Kora dębu (Quercus cortex – rodzina bukowate / Fagaceae), Kłącze pięciornika (Tormentillae rhizoma – rodzina różowate / Rosaceae), Dębianki (Galla – z dębu galasowego, Fagaceae).<br>• <strong>Skład fitochemiczny:</strong> Galotanoidy (np. kwas taninowy), elagotanoidy, dimery i trimery katechiny (proantocyjanidyny).<br>• <strong>Działanie i zastosowanie:</strong> Silne działanie ściągające (adstringens), przeciwbiegunkowe (antidiarrhoicum), przeciwkrwotoczne i antyseptyczne. Stosowane zewnętrznie na stany zapalne skóry i odbytu (np. hemoroidy) oraz wewnętrznie na nieżyty jelit."
      },
      {
        "term": "Flawonoidy uszczelniające naczynia",
        "definition": "Polifenole hamujące działanie hialuronidazy, elastazy i oksydazy askorbowej.<br>• <strong>Surowce:</strong> Liść miłorzębu (Ginkgo folium – rodzina miłorzębowate / Ginkgoaceae), Kwiatostan głogu (Crataegi inflorescentia – rodzina różowate / Rosaceae), Ziele fiołka trójbarwnego (Violae tricoloris herba – rodzina fiołkowate / Violaceae).<br>• <strong>Skład fitochemiczny:</strong> Rutozyd, hiperozyd, witeksyna, proantocyjanidyny, a w miłorzębie specyficzne biflawony (ginkgetyna) i ginkgolidy.<br>• <strong>Działanie i zastosowanie:</strong> Uszczelniają i uelastyczniają drobne naczynia krwionośne, poprawiają ukrwienie mózgu (miłorząb), poprawiają wydolność i ukrwienie mięśnia sercowego (głóg), stosowane w kruchości kapilar i profilaktyce miażdżycy."
      },
      {
        "term": "Antocyjany ochronne na wzrok i naczynia",
        "definition": "Glikozydy flawonoidowe o barwie czerwono-niebieskiej.<br>• <strong>Surowce:</strong> Owoc borówki czernicy (Myrtilli fructus – rodzina wrzosowate / Ericaceae), Kwiat hibiskusa (Hibisci flos – rodzina ślazowate / Malvaceae), Owoc bzu czarnego (Sambuci fructus – rodzina przewiertniowate / Caprifoliaceae).<br>• <strong>Skład fitochemiczny:</strong> Glikozydy cyjanidyny, delfinidyny (np. hibiscyna), malwidyny, flawonoidy, garbniki, witamina C.<br>• <strong>Działanie i zastosowanie:</strong> Silne antyoksydanty zmniejszające przepuszczalność naczyń. Borówka przyspiesza regenerację rodopsyny w siatkówce, poprawiając widzenie o zmroku. Działają też przeciwzapalnie i zapierająco (wsparcie przy biegunkach)."
      },
      {
        "term": "Lignany i fenylopropanoidy adaptogenne",
        "definition": "Związki o działaniu stymulującym układ odpornościowy i podnoszącym witalność.<br>• <strong>Surowce:</strong> Korzeń eleuterokoka / Żeń-szeń syberyjski (Eleutherococci radix – rodzina araliowate / Araliaceae).<br>• <strong>Skład fitochemiczny:</strong> Eleuterozydy (np. syryngina = eleuterozyd B, sezamina = eleuterozyd B4, eleuterozyd E).<br>• <strong>Działanie i zastosowanie:</strong> Działają adaptogennie i antystresowo. Zwiększają wydolność psychiczną i fizyczną, zalecane w stanach przemęczenia i rekonwalescencji."
      }
    ],
    "qa": [
      {
        "question": "Czym różnią się garbniki hydrolizujące od skondensowanych (katechinowych)?",
        "answer": "Hydrolizujące (np. galotanoidy) ulegają rozkładowi do kwasu galusowego i cukru, natomiast katechinowe to polimery flawan-3-oli (np. proantocyjanidyny), które nie ulegają hydrolizie, lecz polimeryzują do tzw. flobafenów."
      },
      {
        "question": "Jakie działanie wykazuje arbutyna i w jakich surowcach występuje?",
        "answer": "Arbutyna (glukozyd fenolowy) w drogach moczowych ulega przemianie do silnie odkażającego hydrochinonu. Występuje m.in. w liściu mącznicy (Uvae ursi fol.) i liściu borówki brusznicy (Vitis idaeae fol.)."
      },
      {
        "question": "W jakim środowisku arbutyna wykazuje najsilniejsze działanie bakteriobójcze?",
        "answer": "Wyłącznie w środowisku zasadowym (pH ok. 8), co pozwala na uwolnienie wolnego hydrochinonu w moczu."
      },
      {
        "question": "Jak brzmi definicja flawonoidów pod względem ich budowy chemicznej?",
        "answer": "Są to związki zbudowane z dwóch pierścieni benzenowych połączonych łańcuchem C3 (układ C6-C3-C6), tworzące zazwyczaj układ benzo-gamma-pironu (chromonu)."
      },
      {
        "question": "W jaki sposób flawonoidy działają jako &ldquo;vasoprotectiva&rdquo;?",
        "answer": "Uszczelniają naczynia włosowate poprzez hamowanie enzymów (elastazy, hialuronidazy) niszczących tkankę łączną oraz chronią witaminę C przed utlenianiem."
      },
      {
        "question": "Jakie związki odpowiadają za charakterystyczną czerwoną i niebieską barwę kwiatów i owoców?",
        "answer": "Antocyjany, których barwa zależy od pH soku komórkowego oraz tworzenia kompleksów z metalami."
      },
      {
        "question": "Jaki lek na bazie kory wierzby ma historyczne znaczenie w lecznictwie?",
        "answer": "Z kory wierzby (Salicis cort.) wyizolowano salicynę, która dała początek kwasowi salicylowemu i jego pochodnym (m.in. aspirynie)."
      },
      {
        "question": "Które flawonoidy mają udowodnione działanie fitoestrogenne i wspomagają terapię menopauzy?",
        "answer": "Izoflawony (np. genisteina, daidzeina) obecne głównie w nasionach soi (Sojae sem.)."
      },
      {
        "question": "Z czego składa się &ldquo;sylimaryna&rdquo; i gdzie występuje?",
        "answer": "To kompleks flawonolignanów (m.in. sylibina, sylikrystyna), który występuje w owocach ostropestu plamistego (Silybi mariani fruct.) i działa silnie chroniąco na wątrobę."
      },
      {
        "question": "Jak kwas rozmarynowy (garbnik Labiatae) wpływa na organizm?",
        "answer": "Wykazuje silne działanie przeciwbakteryjne, przeciwwirusowe i przeciwzapalne; występuje obficie u roślin z rodziny Lamiaceae (np. melisa, rozmaryn)."
      }
    ]
  },
  {
    "id": "ch4",
    "title": "Chinony, Antrazwiązki, Kumaryny i Saponiny",
    "summary": "<p>Antrazwiązki to specyficzne chinony posiadające układ antracenu (np. antrachinony, antranole), charakteryzujące się po hydrolizie w jelicie grubym silnym i przewidywalnym działaniem przeczyszczającym (laxantia). Z kolei kumaryny (pochodne benzo-alfa-pironu) i furanochromony (z pierścieniem furanu) to związki o świetnych właściwościach spazmolitycznych oraz niekiedy fotouczulających (psoraleny). Saponiny to glikozydy o wielkiej strukturze triterpenowej lub steroidowej. Posiadają unikalną zdolność obniżania napięcia powierzchniowego – wykazują silne działanie wykrztuśne (podrażniają żołądek dając odruchową sekrecję oskrzeli) oraz przeciwzapalne i przeciwobrzękowe.</p>",
    "concepts": [
      {
        "term": "Antrazwiązki przeczyszczające - Liście",
        "definition": "Glikozydy antrachinonowe i antronowe stymulujące perystaltykę jelita grubego.<br>• <strong>Surowce:</strong> Liść senesu (Sennae folium – z strączyńca wąskolistnego/ostrolistnego, rodzina brezylkowate / Cesalpiniaceae), Alona barbadoska (Aloe barbadensis – stwardniały sok, rodzina asfodelowate / Asphodelaceae).<br>• <strong>Skład fitochemiczny:</strong> Sennozydy A-D (w senesie), aloina A i B, aloeemodyna (w aloesie).<br>• <strong>Działanie i zastosowanie:</strong> Aglikony powstające w jelicie grubym pobudzają sploty nerwowe błony śluzowej, wzmagają ruchy robaczkowe i hamują resorpcję wody z mas kałowych. Stosowane w zaparciach atonicznych."
      },
      {
        "term": "Antrazwiązki przeczyszczające - Kory i korzenie",
        "definition": "<br>• <strong>Surowce:</strong> Kora kruszyny (Frangulae cortex – z kruszyny pospolitej, rodzina szakłakowate / Rhamnaceae), Korzeń rzewienia (Rhei radix – z rzewienia palczastego, rodzina rdestowate / Polygonaceae).<br>• <strong>Skład fitochemiczny:</strong> Glukofranguliny, franguliny (w kruszynie), reidyny, sennozydy, garbniki (w rzewieniu).<br>• <strong>Działanie i zastosowanie:</strong> Działają przeczyszczająco (laxans). Rzewień ze względu na zawartość garbników w małych dawkach działa zapierająco, a dopiero w wyższych przeczyszczająco."
      },
      {
        "term": "Kumaryny przeciwzakrzepowe i uszczelniające",
        "definition": "Pochodne alfa-pironu usprawniające przepływ chłonki i krwi żylnej.<br>• <strong>Surowce:</strong> Ziele nostrzyka (Meliloti herba – z nostrzyka żółtego/wyniosłego, rodzina bobowate / Fabaceae).<br>• <strong>Skład fitochemiczny:</strong> Melilotyna, kumaryna powstająca z glikozydów kwasu o-kumarowego, dikumarol (w zaparzonym/gnijącym zielu).<br>• <strong>Działanie i zastosowanie:</strong> Zapobiegają powstawaniu obrzęków i zastojów żylnych, uszczelniają naczynia, działają delikatnie przeciwzakrzepowo (szczególnie dikumarol stosowany w medycynie konwencjonalnej)."
      },
      {
        "term": "Kumaryny fotouczulające (Furanokumaryny)",
        "definition": "Związki o działaniu hiper-pigmentacyjnym i przeciwbielactwowym.<br>• <strong>Surowce:</strong> Owoc aminka większego (Ammi majoris fructus – z aminka większego, rodzina selerowate / Apiaceae).<br>• <strong>Skład fitochemiczny:</strong> Furanokumaryny typu psoralenu: ksantotoksyna, bergapten, imperatoryna.<br>• <strong>Działanie i zastosowanie:</strong> Wykazują silne działanie fototoksyczne pod wpływem promieni UVA. Wykorzystywane w fotochemioterapii (PUVA) w leczeniu bielactwa, łuszczycy i łysienia plackowatego."
      },
      {
        "term": "Furanochromony spazmolityczne",
        "definition": "Związki o rzadkiej strukturze i bardzo ukierunkowanym działaniu rozkurczowym na układ wieńcowy i żółciowy.<br>• <strong>Surowce:</strong> Owoc aminka egipskiego / Keli (Ammi visnagae fructus – z aminka egipskiego, rodzina selerowate / Apiaceae).<br>• <strong>Skład fitochemiczny:</strong> Kelina, wisnagina (furanochromony) oraz wisnadyna (piranokumaryna).<br>• <strong>Działanie i zastosowanie:</strong> Kelina działa silnie spazmolitycznie na oskrzela, drogi żółciowe i moczowe, wisnadyna natomiast rozszerza naczynia wieńcowe serca. Lek wspomagający w dusznicy bolesnej, kamicy i astmie."
      },
      {
        "term": "Saponiny triterpenowe wykrztuśne",
        "definition": "Związki wywołujące odruchowe i bezpośrednie upłynnianie wydzieliny płucnej.<br>• <strong>Surowce:</strong> Korzeń lukrecji (Glycyrrhizae radix – z lukrecji gładkiej, rodzina bobowate / Fabaceae), Korzeń pierwiosnka (Primulae radix – z pierwiosnka lekarskiego, rodzina pierwiosnkowate / Primulaceae).<br>• <strong>Skład fitochemiczny:</strong> Kwas glicyryzynowy (w lukrecji), prymulasaponina (w pierwiosnku).<br>• <strong>Działanie i zastosowanie:</strong> Silnie wykrztuśne i sekretolityczne w mokrym kaszlu. Kwas glicyryzynowy dodatkowo łagodzi stany zapalne wrzodów żołądka. Lukrecja jest ekstremalnie słodka."
      },
      {
        "term": "Saponiny uszczelniające naczynia",
        "definition": "Triterpeny stabilizujące śródbłonek żylny i hamujące obrzęki.<br>• <strong>Surowce:</strong> Owoc/Nasienie kasztanowca (Hippocastani fructus/semen – z kasztanowca zwyczajnego, rodzina kasztanowcowate / Hippocastanaceae), Kłącze ruszczyka (Rusci aculeati rhizoma – z ruszczyka kolczastego, rodzina myszopłochowate / Ruscaceae).<br>• <strong>Skład fitochemiczny:</strong> Escyna (kompleks w kasztanowcu), ruskogenina (saponina steroidowa w ruszczyku).<br>• <strong>Działanie i zastosowanie:</strong> Przeciwwysiękowe, hamują enzymy niszczące ściany żył (hialuronidazę, elastazę). Preparaty pierwszego wyboru w żylakach nóg, uczuciu &ldquo;ciężkich nóg&rdquo; i hemoroidach."
      }
    ],
    "qa": [
      {
        "question": "Dlaczego działanie antrazwiązków pojawia się dopiero 8-12 godzin po spożyciu?",
        "answer": "Glikozydy są stabilne w żołądku i jelicie cienkim; dopiero flora bakteryjna jelita grubego rozkłada je do aktywnych antronów, które potrzebują czasu na wywołanie skurczów perystaltycznych."
      },
      {
        "question": "Które rośliny krzyżowe zawierają fotouczulające kumaryny i jakie są tego konsekwencje?",
        "answer": "Aminek większy, arcydzięgiel i ruta; kontakt z sokiem i ekspozycja na słońce powodują oparzenia fototoksyczne i plamy na skórze."
      },
      {
        "question": "Co to jest metoda PUVA i jaki związek ją wykorzystuje?",
        "answer": "To fotochemioterapia (połączenie psoralenów i promieni UVA) wykorzystywana w leczeniu bielactwa i łuszczycy, używająca np. ksantotoksyny."
      },
      {
        "question": "Czym się różni mechanizm działania keliny (z aminka egipskiego) od typowych leków nasercowych?",
        "answer": "Kelina (furanochromon) nie zwiększa siły skurczu serca, lecz działa czysto spazmolitycznie (rozkurcza naczynia wieńcowe, poprawiając ukrwienie mięśnia)."
      },
      {
        "question": "Jakie wyjątkowe właściwości fizykochemiczne mają saponiny?",
        "answer": "Obniżają napięcie powierzchniowe, w wodzie tworzą obfitą pianę i mają zdolność hemolizy (niszczenia) krwinek czerwonych, dlatego rzadko podaje się je dożylnie (z wyjątkiem escyny)."
      },
      {
        "question": "Dlaczego pacjenci z nadciśnieniem powinni unikać długotrwałego spożywania korzenia lukrecji?",
        "answer": "Długie stosowanie dużych dawek glicyryzyny powoduje tzw. pseudoaldosteronizm – zatrzymanie sodu i wody oraz utratę potasu, co niebezpiecznie podnosi ciśnienie krwi."
      },
      {
        "question": "Na czym polega adaptogenne działanie korzenia żeń-szenia?",
        "answer": "Ginsenozydy (saponiny dammaranowe) zwiększają tolerancję na stres fizyczny i psychiczny, poprawiają wykorzystanie tlenu oraz stymulują układ nerwowy i odpornościowy, wyrównując funkcje organizmu."
      },
      {
        "question": "Jaką podwójną, przeciwstawną właściwość posiada korzeń rzewienia?",
        "answer": "Zawiera przeczyszczające antrazwiązki oraz zapierające garbniki. W małych dawkach dominuje efekt ściągający i zapierający, w dużych – przeczyszczający."
      },
      {
        "question": "W jakim surowcu występuje hyperycyna i do jakiej grupy związków należy?",
        "answer": "Występuje w zielu dziurawca (Hyperici herba) i należy do naftodiantronów (chinonów o barwie czerwonej). Posiada właściwości fotouczulające oraz psychotonizujące (antydepresyjne)."
      },
      {
        "question": "Co wyróżnia kwas glicyryzynowy spośród innych cukrów roślinnych?",
        "answer": "Choć jest saponiną, jest około 50 razy słodszy od zwykłego cukru (sacharozy)."
      }
    ]
  },
  {
    "id": "ch5",
    "title": "Olejki Eteryczne, Gorycze i Irydoidy",
    "summary": "<p>Terpeny to olbrzymia klasa związków zbudowanych z jednostek izoprenu. Najlżejsze (monoterpeny i seskwiterpeny) stanowią głowny składnik olejków eterycznych – silnie pachnących, lotnych i lipofilnych mieszanin. Olejki działają wybitnie antyseptycznie (np. olejek tymiankowy czy miętowy zwalczają patogeny), wiatropędnie i wykrztuśnie. Gorycze (często laktony seskwiterpenowe lub sekoirydoidy) są nielotne i poprzez bardzo gorzki smak odruchowo stymulują wydzielanie żółci i kwasów żołądkowych (stomachica et digestiva). Irydoidy to specyficzne monoterpeny cechujące się często działaniem łagodzącym i przeciwzapalnym.</p>",
    "concepts": [
      {
        "term": "Olejki eteryczne spazmolityczne i żółciopędne",
        "definition": "<br>• <strong>Surowce:</strong> Liść mięty pieprzowej (Menthae piperitae folium – z mięty pieprzowej, rodzina jasnotowate / Lamiaceae), Koszyczek rumianku (Chamomillae anthodium – z rumianku pospolitego, rodzina astrowate / Asteraceae), Owoc kminku (Carvi fructus – z kminku zwyczajnego, rodzina selerowate / Apiaceae).<br>• <strong>Skład fitochemiczny:</strong> Mentol i menton w mięcie; chamazulen i alfa-bisabolol w rumianku; karwon i limonen w kminku.<br>• <strong>Działanie i zastosowanie:</strong> Silnie rozkurczają układ pokarmowy, niwelują wzdęcia (wiatropędnie) i kolki, wzmagają przepływ żółci. Olejek rumiankowy dodatkowo działa potężnie przeciwzapalnie na błony śluzowe i skórę (azuleny)."
      },
      {
        "term": "Olejki eteryczne wykrztuśne i antyseptyczne",
        "definition": "<br>• <strong>Surowce:</strong> Ziele tymianku (Thymi herba – z tymianku pospolitego, rodzina jasnotowate / Lamiaceae), Liść eukaliptusa (Eucalypti folium – z eukaliptusa gałkowego, rodzina mirtowate / Myrtaceae), Owoc anyżu (Anisi fructus – z biedrzeńca anyżu, rodzina selerowate / Apiaceae).<br>• <strong>Skład fitochemiczny:</strong> Tymol, karwakrol (w tymianku); eukaliptol / 1,8-cyneol (w eukaliptusie); anetol (w anyżu).<br>• <strong>Działanie i zastosowanie:</strong> Inhalacje i syropy upłynniają wydzielinę oskrzelową (sekretolitycznie), ułatwiając oddychanie. Tymol działa ekstremalnie silnie przeciwbakteryjnie w jamie ustnej."
      },
      {
        "term": "Olejki eteryczne moczopędne i rozgrzewające",
        "definition": "<br>• <strong>Surowce:</strong> Owoc jałowca (Juniperi fructus – z jałowca pospolitego, rodzina cyprysowate / Cupressaceae), Pączki sosny (Pini gemmae – z sosny zwyczajnej, rodzina sosnowate / Pinaceae).<br>• <strong>Skład fitochemiczny:</strong> Terpinen-4-ol (w jałowcu), pineny (w sośnie).<br>• <strong>Działanie i zastosowanie:</strong> Drażnią kanaliki nerkowe, wymuszając diurezę (jałowiec). Zewnętrznie olejki wcierane w skórę powodują silne przekrwienie i uczucie ciepła, łagodząc bóle gośćcowe i mięśniowe."
      },
      {
        "term": "Gorycze i Irydoidy stymulujące trawienie",
        "definition": "Związki o bardzo gorzkim smaku podawane w stanach bezsokowości.<br>• <strong>Surowce:</strong> Korzeń goryczki (Gentianae radix – z goryczki żółtej, rodzina goryczkowate / Gentianaceae), Liść bobrka (Menyanthidis folium – z bobrka trójlistkowego, rodzina bobrkowate / Menyanthaceae), Korzeń cykorii podróżnika (Cichorii radix – z cykorii podróżnika, rodzina astrowate / Asteraceae).<br>• <strong>Skład fitochemiczny:</strong> Amarogentyna, gencjopikrozyd (goryczka); foliamentyna, loganina (bobrek); laktucyna, laktukopikryna (cykoria).<br>• <strong>Działanie i zastosowanie:</strong> Używane pół godziny przed posiłkiem drastycznie wzmagają łaknienie (stomachica) pobudzając na drodze odruchowej i bezpośredniej (przez nerw błędny) produkcję soków trzustkowych, żołądkowych i żółci."
      },
      {
        "term": "Laktony seskwiterpenowe o celowanym działaniu",
        "definition": "Gorycze o wybitnych i unikalnych działaniach klinicznych.<br>• <strong>Surowce:</strong> Ziele maruny (Chrysanthemi herba – ze złocienia maruny, rodzina astrowate / Asteraceae), Korzeń hakorośli / czarci pazur (Harpagophyti radix – z hakorośli rozesłanej, rodzina połapkowate / Pedaliaceae).<br>• <strong>Skład fitochemiczny:</strong> Partenolid (maruna); harpagozyd i harpagid (hakorośl).<br>• <strong>Działanie i zastosowanie:</strong> Partenolid hamuje agregację płytek krwi i wyrzut serotoniny, znosząc bóle migrenowe z aurą (antimigraenicum). Harpagozyd działa specyficznie przeciwreumatycznie, uśmierzając bóle stawowe (antirheumaticum)."
      }
    ],
    "qa": [
      {
        "question": "Jak nazywa się związek warunkujący niebieski kolor olejku rumiankowego i jak on powstaje?",
        "answer": "Chamazulen. Nie występuje on w żywej roślinie, powstaje podczas destylacji z parą wodną z bezbarwnej matrycyny (proazulenu)."
      },
      {
        "question": "Który składnik olejku tymiankowego ma właściwości odkażające o wiele silniejsze od fenolu?",
        "answer": "Tymol, który działa 25 razy silniej bakteriobójczo niż sam fenol."
      },
      {
        "question": "Dlaczego przy stosowaniu surowców goryczowych ważny jest ich kontakt z językiem?",
        "answer": "Gorycze działają na zakończenia nerwowe zlokalizowane na grzbiecie języka, wywołując pożądany odruchowy rzut soku żołądkowego i śliny."
      },
      {
        "question": "Na czym polega wskaźnik goryczy oznaczany według Farmakopei Polskiej?",
        "answer": "To stopień maksymalnego rozcieńczenia wyciągu roślinnego z wodą, w którym ludzkie kubki smakowe wciąż są w stanie wyczuć gorzki smak (wzorcem jest chlorowodorek chininy)."
      },
      {
        "question": "Dlaczego ziele maruny (złocień maruna) stało się tak popularne w neurologii?",
        "answer": "Ponieważ zawiera partenolid, który hamuje skurcze naczyń krwionośnych mózgu i wyrzut serotoniny, stając się świetnym lekiem znoszącym uciążliwe ataki migrenowe."
      },
      {
        "question": "Czym ryzykujemy nadużywając olejku eterycznego z jałowca?",
        "answer": "Silne stymulowanie i drażnienie nerek może spowodować w skrajnym przypadku uszkodzenie miąższu nerkowego."
      },
      {
        "question": "Dlaczego surowców goryczowych nie wolno podawać osobom z chorobą wrzodową?",
        "answer": "Ponieważ gwałtowne wydzielanie kwasu solnego mogłoby dodatkowo uszkodzić i podrażnić istniejące wrzody żołądka lub dwunastnicy."
      },
      {
        "question": "Jakie działanie farmakologiczne posiada anetol z olejku anyżowego i koprowego?",
        "answer": "Posiada bardzo dobre właściwości upłynniające wydzielinę górnych dróg oddechowych (wykrztuśne) i lekko rozkurczające (wiatropędne)."
      },
      {
        "question": "Czym różni się mięta od melisy pod względem głównego działania terapeutycznego?",
        "answer": "Mięta pieprzowa to przede wszystkim mocny środek spazmolityczny i żółciopędny, podczas gdy melisa lekarska oddziałuje dodatkowo tonizująco i mocno uspokajająco na ośrodkowy układ nerwowy."
      },
      {
        "question": "Co nadaje charakterystyczny cytrynowy zapach melisie?",
        "answer": "Monoterpeny takie jak cytral A (geranial) i cytral B (neral) oraz cytronelal."
      }
    ]
  },
  {
    "id": "ch6",
    "title": "Glikozydy Nasercowe i Alkaloidy",
    "summary": "<p>Glikozydy nasercowe to substancje o bardzo specyficznej, sterydowej budowie z nienasyconym pierścieniem laktonowym i resztami 2,6-deoksycukrów. Ich kluczowe działanie polega na hamowaniu pompy sodowo-potasowej (Na+/K+-ATPazy) komórek serca. Skutkuje to efektem inotropowym dodatnim – zwiększa się siła skurczu mięśnia sercowego bez dodatkowego zużycia tlenu. Praca serca staje się wydajniejsza i spokojniejsza. \r\nAlkaloidy to olbrzymia klasa heterocyklicznych, najczęściej zasadowych związków zawierających azot, o bardzo silnym, fizjologicznym i niekiedy trującym działaniu na organizm człowieka. Zalicza się do nich m.in. alkaloidy tropanowe (rozkurczające), izochinolinowe (przeciwbólowe, wykrztuśne, spazmolityczne) purynowe (pobudzające OUN) czy indolowe. Leki alkaloidowe podaje się bardzo ostrożnie, często wyłącznie jako wyizolowane substancje chemiczne z uwagi na ich wysoką toksyczność i trudne dawkowanie w tradycyjnych naparach.</p>",
    "concepts": [
      {
        "term": "Glikozydy kardenolidowe - kumulujące się",
        "definition": "Glikozydy o silnym powinowactwie do białek osocza, długo utrzymujące się w organizmie.<br>• <strong>Surowce:</strong> Liść naparstnicy purpurowej (Digitalis purpureae folium – z naparstnicy purpurowej, rodzina trędownikowate / Scrophulariaceae), Liść naparstnicy wełnistej (Digitalis lanatae folium – z naparstnicy wełnistej, Scrophulariaceae).<br>• <strong>Skład fitochemiczny:</strong> Purpureaglikozyd A i B, digitoksyna (purpurowa); lanatozyd C, digoksyna, acetylodigoksyna (wełnista). Własne specyficzne 2,6-deoksycukry (digitoksoza).<br>• <strong>Działanie i zastosowanie:</strong> Silne kardiostymulanty. Spowalniają tętno (chronotropowo ujemnie), ale niesamowicie zwiększają rzut serca. Niezastąpione w ciężkiej przewlekłej niewydolności krążeniowej z migotaniem przedsionków. Izolowana digoksyna wciąż jest podstawą medycyny ratunkowej i kardiologicznej."
      },
      {
        "term": "Glikozydy kardenolidowe - niekumulujące się",
        "definition": "Glikozydy o szybszym, gwałtowniejszym działaniu, ale szybko ulegające rozkładowi i wydaleniu.<br>• <strong>Surowce:</strong> Ziele konwalii (Convallariae herba – z konwalii majowej, rodzina konwaliowate / Convalliaceae), Ziele miłka wiosennego (Adonidis vernalis herba – z miłka wiosennego, rodzina jaskrowate / Ranunculaceae).<br>• <strong>Skład fitochemiczny:</strong> Konwalatoksyna, konwalatoksol (w konwalii); adonitoksyna, cymaryna (w miłku).<br>• <strong>Działanie i zastosowanie:</strong> Stosowane w łagodniejszej tzw. niewydolności &ldquo;starczej&rdquo; lub nerwicowej (cardiosedativum). Dobrze wchłaniane, bezpieczniejsze w użyciu, nie powodują przedawkowania przy normalnych dawkach terapeutycznych, często stosowane w postaci kropli nasercowych."
      },
      {
        "term": "Alkaloidy tropanowe - Parasympatykolityczne",
        "definition": "Silne rozkurczacze odcinające nerw błędny (układ przywspółczulny).<br>• <strong>Surowce:</strong> Liść pokrzyku / wilczej jagody (Belladonnae folium – z pokrzyku wilczej jagody, rodzina psiankowate / Solanaceae), Liść bielunia (Stramonii folium – z bielunia dziędzierzawy, Solanaceae).<br>• <strong>Skład fitochemiczny:</strong> Atropina (powstająca w suszeniu z l-hioscyjaminy), skopolamina.<br>• <strong>Działanie i zastosowanie:</strong> Rozszerzają źrenice, hamują wydzielanie śliny i potu, powodują potężny rozkurcz jelit, dróg żółciowych, a także znoszą odruchy wymiotne. Ekstrakty lub czysta atropina dodawane są do czopków i tabletek w atakach kolki nerkowej czy wątrobowej (spasmolyticum). Skopolamina łagodzi ataki choroby lokomocyjnej i wykazuje w przeciwieństwie do atropiny działanie tłumiące mózg."
      },
      {
        "term": "Alkaloidy izochinolinowe proste i złożone",
        "definition": "Grupa niezwykle wszechstronna – od łagodnych leków wątrobowych po najsilniejsze przeciwbólowe opioidy na świecie.<br>• <strong>Surowce:</strong> Ziele glistnika (Chelidonii herba – z glistnika jaskółcze ziele, rodzina makowate / Papaveraceae), Opium (Opium – mleczko z maku lekarskiego Papaver somniferum, Papaveraceae), Ziele dymnicy (Fumariae herba – z dymnicy pospolitej, rodzina dymnicowate / Fumariaceae).<br>• <strong>Skład fitochemiczny:</strong> Chelidonina, chelerytryna (w glistniku); morfina, kodeina, papaweryna (w opium); protopina, fumarytryna (w dymnicy).<br>• <strong>Działanie i zastosowanie:</strong> Chelidonina łagodnie rozkurcza przewody żółciowe (cholagogum). Złotym standardem w medycynie bólu jest Morfina (wybitnie przeciwbólowa). Kodeina hamuje ośrodek kaszlu w mózgu, papaweryna to silny środek wiatropędny i znoszący kolki jelitowe."
      },
      {
        "term": "Alkaloidy purynowe (Metyloksantyny)",
        "definition": "Związki nie do końca typowo zasadowe, oddziałujące jako silne stymulanty mentalne i metaboliczne.<br>• <strong>Surowce:</strong> Nasienie kawy (Coffeae semen – z kawy arabskiej Coffea arabica, rodzina marzanowate / Rubiaceae), Liść herbaty (Theae folium – z herbaty chińskiej Camellia sinensis, rodzina kameliowate / Camelliaceae), Guarana (pasta z nasion ciernioplątu Paullinia cupana, rodzina mydleńcowate / Sapindaceae).<br>• <strong>Skład fitochemiczny:</strong> Kofeina (=teina), teobromina, teofilina, a także bogactwo proantocyjanidyn i garbników.<br>• <strong>Działanie i zastosowanie:</strong> Kofeina blokuje receptory adenozynowe niwelując senność, zwiększa koncentrację i przyspiesza krążenie sercowe (analepticum). Rozszerza naczynia nerkowe, działając moczopędnie i przyspieszając lipolizę (odchudzanie). Teofilina z kolei wspaniale rozszerza oskrzela będąc lekiem przeciwastmatycznym."
      }
    ],
    "qa": [
      {
        "question": "Jaką wspólną właściwość chemiczną posiada cała grupa glikozydów kardenolidowych i bufadienolidowych?",
        "answer": "Posiadają rdzeń sterydowy połączony w ściśle określonym miejscu (C-17) z nienasyconym pierścieniem laktonowym i cukrem."
      },
      {
        "question": "Czym się objawia inotropowe dodatnie i chronotropowe ujemne działanie naparstnicy?",
        "answer": "Siła wyrzutowa i napięcie mięśnia sercowego drastycznie rosną (inotropowe +), podczas gdy serce zaczyna bić wolniej (chronotropowe -), oszczędzając się."
      },
      {
        "question": "Z czego składa się surowiec Opium i do jakiej grupy związków należy jego trzon?",
        "answer": "Opium to zaschnięty sok mleczny naciętych niedojrzałych makówek maku lekarskiego. Złożone jest z 10-20% alkaloidów izochinolinowych (morfina, kodeina, papaweryna)."
      },
      {
        "question": "Jak kodeina wpływa na układ oddechowy w porównaniu z eukaliptusem?",
        "answer": "Eukaliptus to lek wykrztuśny (upłynnia śluz i wymusza kaszel), podczas gdy kodeina wędruje do mózgu i chemicznie &ldquo;wyłącza&rdquo; ośrodek kaszlu – stosuje się ją przy suchym, wyniszczającym i nieproduktywnym kaszlu."
      },
      {
        "question": "Dlaczego atropinę pozyskiwaną z Belladonny podaje się chorym na ostre, bolesne kolki i wzdęcia?",
        "answer": "Atropina odłącza nerwy przywspółczulne w żołądku i jelitach, całkowicie zwiotczając zaciskające się gładkie tkanki mięśniowe, dając natychmiastową ulgę w stanach spastycznych."
      },
      {
        "question": "Jakie alkaloidy blokują zwoje współczulne, silnie obniżając ciśnienie w medycynie?",
        "answer": "Alkaloidy indolowe np. rezerpina pozyskiwana z korzenia rauwolfii żmijowej, w przeszłości powszechny lek antyhipertensyjny."
      },
      {
        "question": "Skąd pozyskuje się kurarę i na czym polega jej specyficzne działanie w medycynie?",
        "answer": "Kurara to stężony wyciąg z lian używany przez Indian. Obecnie np. tubokuraryna z Menispermaceae służy do silnego, całkowitego zwiotczenia mięśni prążkowanych pacjenta w czasie operacji chirurgicznych (myorelaxans)."
      },
      {
        "question": "Czym różni się działanie i przyswajanie czarnej i zielonej herbaty w ustroju?",
        "answer": "Herbata czarna jest poddana fermentacji (utleniającej m.in. polifenole do theaflawin), podczas gdy herbata zielona zostaje błyskawicznie ususzona, zatrzymując maksimum kofeiny i aktywnych surowych przeciwutleniaczy katechinowych (związków przeciwnowotworowych)."
      },
      {
        "question": "Jaki naturalny surowiec alkaloidowy pomaga jako wsparcie w chorobie lokomocyjnej?",
        "answer": "Skopolamina (z pokrzyku lub bielunia), która działa poprzez tłumienie ośrodków mózgowych w układzie pozapiramidowym i likwiduje nudności pochodzenia błędnikowego."
      },
      {
        "question": "Które roślinne alkaloidy stanowią do dziś czołową linię chemioterapii nowotworowej (cytostatyki)?",
        "answer": "Alkaloidy z barwinka różowego (winkrystyna, winblastyna) oraz diterpenowe alkaloidy cisu (taksol/paklitaksel) drastycznie zaburzają formowanie wrzeciona kariokinetycznego, zatrzymując namnażanie się komórek nowotworowych."
      }
    ]
  }
];
