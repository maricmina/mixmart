window.onload = function(){
    function ajaxCallback(url, result){
        $.ajax({
          url: url,
          method: "get",
          dataType: "json",
          success: result, 
          error: function(xhr){
            console.log(xhr);
          }
        })
      }
      
    ajaxCallback("assets/data/meni.json", function(result){
        ispisiMeni(result);
    })
    ajaxCallback("assets/data/proizvodi.json", function(result){
        kreirajDDL(result);
    })

    let sviProizvodi = [];

    ajaxCallback("assets/data/knjige.json", function(result){
        sviProizvodi = sviProizvodi.concat(result);
    })
    ajaxCallback("assets/data/sveske.json", function(result){
        sviProizvodi = sviProizvodi.concat(result);
    })
    ajaxCallback("assets/data/novcanici.json", function(result){
        sviProizvodi = sviProizvodi.concat(result);
    })
    ajaxCallback("assets/data/prenosiveSolje.json", function(result){
        sviProizvodi = sviProizvodi.concat(result);
    })
    ajaxCallback("assets/data/solje.json", function(result){
        sviProizvodi = sviProizvodi.concat(result);
    })
    ajaxCallback("assets/data/stilorke.json", function(result){
        sviProizvodi = sviProizvodi.concat(result);
    })
    ajaxCallback("assets/data/pokloni.json", function(result){
        sviProizvodi = sviProizvodi.concat(result);
        
        ispisiProizvode(sviProizvodi);
    }); 
} 
  
  let sve = [
          {
                "id": 1,
                "naziv": "TAJNE USPEHA I SREĆE",
                "cena": {
                    "cenaSaSajta": "769 RSD",
                    "staraCena": "1099 RSD"
                },
                "opis": "Predivan dnevnik, intimno svedočanstvo Mandinovih najdubljih misli i osećanja i doživljaja iz njegovog svakodnevnog života. Bilo da piše dok sedi u kući na svojoj farmi u Nju Hempširu za vreme snežne oluje, ili u sobi hotela koja može da se nalazi bilo gde u svetu, brine o bolesnom prijatelju, juri da stigne na avion, ili sadi povrće i cveće u svojoj baštii, Mandino pretvara svoje tajne uspeha u način života. Čitaoce će oduševiti činjenica da je tako uspešan i uticajan autor čovek poput svih nas. I sam prolazi kroz različite prijatne i neprijatne situacije, lične drame, bolesti, ali uspeva da živi i da se ponaša po svim principima o kojima godinama piše.",
                "src": "assets/img/knjige/knjiga1.png",
                "proizvodID": 1,
                "kategorija": "Knjige"
            },
            {
                "id": 2,
                "naziv": "MEMOARI JEDNE GEJŠE TP",
                "cena": {
                    "cenaSaSajta": "1259 RSD",
                    "staraCena": "1799 RSD"
                },
                "opis": "Glavna junakinja, Nita Sajuri, osvrće se na svoj životni put, iznenađujuće neposredno pripovedajući priču o jednoj gejši. Ta priča počinje u jednom siromašnom ribarskom selu, 1929. godine, kada je devetogodišnja devojčica neobičnih sivoplavih očiju odvedena od kuće i kao robinja prodata jednoj poznatoj kući gejši. Dok Sajuri s vremenom postaje gejša − uči kako da pleše, nosi kimono, kako da se šminka i sređuje kosu, pravilno sipa sake − suočava se s ljubomornom rivalkom i teškoćama života u zemlji kojoj preti dugotrajan rat. U Memoarima jedne gejše čitalac upoznaje svet u kom je najvažnija upravo njegova predstava, gde se devojačka čednost prodaje onome ko ponudi najviše novca, a žene se obučavaju kako da razonode najmoćnije muškarce. To je svet u kom je ljubav odbačena kao iluzija.",
                "src": "assets/img/knjige/knjiga2.png",
                "proizvodID": 1,
                "kategorija": "Knjige"
            },
            {
                "id": 3,
                "naziv": "BELI  <br/> KIMONO",
                "cena": {
                    "cenaSaSajta": "769 RSD",
                    "staraCena": "1099 RSD"
                },
                "opis": "Prepuna emocija, ovo je priča o dve žene: jedna je rastrzana između svoje kulture i svog srca, a druga odlazi na putovanje kako bi saznala šta zaista znači dom. Japan, 1957. godine. Ugovoreni brak doneće porodici mlade Naoko dobar položaj u društvu, ali ona se zaljubila u američkog mornara: ako se uda za njega, naneće veliku sramotu čitavoj porodici. Sjedinjene Američke Države, danas. Dok se brine o ocu na samrti, Toni pronalazi pismo sa neverovatnim otkrićem o prošlosti njene porodice na drugom kraju sveta.",
                "src": "assets/img/knjige/knjiga3.png",
                "proizvodID": 1,
                "kategorija": "Knjige"
            },
            {
                "id": 4,
                "naziv": "SLUŠAJ KAKO KIŠA PADA",
                "cena": {
                    "cenaSaSajta": "669 RSD",
                    "staraCena": "999 RSD"
                },
                "opis": "Grmljavina koja se približava trese prozorska stakla. Kao da predoseća dolazak oluje, crna mačka ne prestaje da mjauče. Karmen otvara prozor i pušta mačku da uđe u stari porodični kafić u Marseljetu, gradiću blizu granice Francuske i Španije. Mesto je neuobičajeno puno. Prošle su godine otkako je Karmen videla toliko lica i čula toliko glasova koji se prepliću, kao u pesmi. Ta pesma podseća je na kišu koja pada i miris sumpora u vazduhu. Ta pesma vraća je kroz godine. Svako od tih ljudi dotakao je njen život, ostavivši svoj trag: neko ožiljak, neko osmeh. Tu su Rita i Leonor, njene starije sestre, sa kojima deli stigmu izgnanstva, ali odbija da ide njihovim putem, jer posle tolikih nevolja želi da preuzme sudbinu u svoje ruke. Tu je njena sestričina Kali, koja ju je uvek dočekivala bez pitanja, uz zagrljaj. Tu je Eskuto, njen tihi anđeo čuvar.",
                "src": "assets/img/knjige/knjiga4.png",
                "proizvodID": 1,
                "kategorija": "Knjige"
            },
            {
                "id": 5,
                "naziv": "KĆERKA <br/> RENESANSE",
                "cena": {
                    "cenaSaSajta": "839 RSD",
                    "staraCena": "1199 RSD"
                },
                "opis": "Firenca u šesnaestom veku je grad koji sija od bogatstva i umetničkog nadahnuća, ali i mesto burnih političkih intriga. Ostavši bez roditelja, mlada Beatriče se odvažila da ode u grad kako bi prodavala maslinovo ulje svoje porodice i na taj način zaradila za život, ali i da bi po gradskim ulicama i skloništima tragala za nestalom majkom. Nakon što bosa stigne do gradskih zidina, uspeva da dobije dozvolu da prođe kroz kapije grada da bi prodavala ulje umetnicima – Mikelanđelu, Leonardu da Vinčiju, Botičeliju – koji pokušavaju da Firentinskoj republici donesu slavu i ugled. Usamljena ali ponosna, Beatriče traga za majkom, ali i u tajnosti crta po kamenim zidinama Firence da bi izrazila svoj bol. Pronalazi prijatelja u nadmenom Mikelanđelu, koji u tom trenutku pokušava da izradi skulpturu Davida, a zbližava se i sa suprugom trgovca tkaninama, čiji je portret naslikao već ostareli Leonardo da Vinči.",
                "src": "assets/img/knjige/knjiga5.png",
                "proizvodID": 1,
                "kategorija": "Knjige"
            },
            {
                "id": 1,
                "naziv": "Novčanik LAST MOCCA",
                "cena": {
                    "cenaSaSajta": "2090 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Damski novčanik sa deset pregrada za kartice, jednim džepom, jednom pregradom za papirni novac. Novčanik sadrži i jednu pregradu za metalni novac. Dimenzije 14x10x2cm. Dezen kožni. Boja mocca nude.",
                "src": "assets/img/ostalo/novcanik1.png",
                "proizvodID": 5,
                "kategorija": "Novčanici"
            },
            {
                "id": 2,
                "naziv": "Novčanik LAST BLACK",
                "cena": {
                    "cenaSaSajta": "2090 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Damski novčanik sa deset pregrada za kartice, jednim džepom, jednom pregradom za papirni novac. Novčanik sadrži i jednu pregradu za metalni novac. Dimenzije 14x10x2cm. Dezen kožni. Boja crna.",
                "src": "assets/img/ostalo/novcanik2.png",
                "proizvodID": 5,
                "kategorija": "Novčanici"
            },
            {
                "id": 1,
                "naziv": "FABER CASTELL set notes",
                "cena": {
                    "cenaSaSajta": "2000 RSD",
                    "staraCena": "0"
                },
                "opis": "Telo olovke je napravljeno od brušene dragocene smole, dok su kapa i držač od hromiranog poliranog metala. Poseduje opružnu kopču od hromiranog poliranog metala. Opremljen je crnim dodatkom sa keramičkim vrhom, te se brzo suši. Postoji mogućnost dopune mastila. Agenta je A6 veličine.",
                "src": "assets/img/pokloni/poklon1.png",
                "proizvodID": 6,
                "kategorija": "Pokloni"
            },
            {
                "id": 2,
                "naziv": "MOLESKINE set za skiciranje",
                "cena": {
                    "cenaSaSajta": "3200 RSD",
                    "staraCena": "0"
                },
                "opis": "Beležnica tvrdih korica, zaobljenih ivica. Elastičan lastiš i obeleživač stranica. Bezkiselinski papir, 165 grama/m2. Prošireni unutrašnji džep. Grafitne olovke 6B, 4B, 2B, HB I H",
                "src": "assets/img/pokloni/poklon2.png",
                "proizvodID": 6,
                "kategorija": "Pokloni"
            },
            {
                "id": 3,
                "naziv": "Notes MOLESKINE Passion Journal Wine",
                "cena": {
                    "cenaSaSajta": "1250 RSD",
                    "staraCena": "0"
                },
                "opis": "Tematske uvodne stranice. Dizajniran da postane opipljiva i personalizovana arhiva, Wine Journal je Vaš vlastiti vodič za vino - zauzimajući ponosno mesto na polici pored vaših omiljenih knjiga o vinu. Dolazi u pametnoj, zaštitnoj kutiji, što ga čini divnim poklonom za ljubitelje vina.",
                "src": "assets/img/pokloni/poklon4.png",
                "proizvodID": 6,
                "kategorija": "Pokloni"
            },
            {
                "id": 4,
                "naziv": "Notes A5 MOLESKINE Classic Soft",
                "cena": {
                    "cenaSaSajta": "3050 RSD",
                    "staraCena": "0"
                },
                "opis": "Notes A5 MOLESKINE Classic Soft, crni - linije TP. Tvrde korice, 400 stranica. Dimenzije: 13 x 21 cm",
                "src": "assets/img/pokloni/poklon3.png",
                "proizvodID": 6,
                "kategorija": "Pokloni"
            },
            {
                "id": 1,
                "naziv": "Staklena flaša EGRET ISLAND",
                "cena": {
                    "cenaSaSajta": "1400 RSD",
                    "staraCena": "1650 RSD"
                },
                "opis": "Staklena flaša ukrašena motivima prirode. Poklopac sadrži i platnenu traku na vrhu za sigurnije nošenje flaše. Kapacitet flaše je 500ml. Izrađena je od finog, laganog i izdržljivog stakla. Visina flaše je 24cm, prečnik 6,5cm. Flašu slobodno možete prati u mašini za sudove.",
                "src": "assets/img/solje/prenosive/flasa1.png",
                "proizvodID": 7,
                "kategorija": "Prenosive šolje"
            },
            {
                "id": 2,
                "naziv": "Flaša za vodu ZELENA",
                "cena": {
                    "cenaSaSajta": "1420 RSD",
                    "staraCena": "1680 RSD"
                },
                "opis": "Flaša za vodu od borosilikatnog stakla sa silikonskom rukavicom kapaciteta 600ml. Flaša poseduje drveni čvrstoprijanjajući poklopac i silikonsku rukavicu za lakše nošenje koja može da se skida. Nije predviđeno za pranje u mašini za sudove i korišćenje u mikrotalasnoj. Dimenzije 235 x 68mm.",
                "src": "assets/img/solje/prenosive/flasa2.png",
                "proizvodID": 7,
                "kategorija": "Prenosive šolje"
            },
            {
                "id": 3,
                "naziv": "BIOLOCO putna šolja TERRAZZO",
                "cena": {
                    "cenaSaSajta": "1999 RSD",
                    "staraCena": ""
                },
                "opis": "Putna šolja dizajna iz Bioloco Office kolekcije napravljena od kombinacije nerđajućeg čelika i potpuno ekološki prihvatljivih materijala. Unutrašnjost šolje je sadrži dupli zid od nerđajućeg čelika tipa 304, koji omogućava održavanje toplote i hladnoće pića do 3 sata.",
                "src": "assets/img/solje/prenosive/flasa3.png",
                "proizvodID": 7,
                "kategorija": "Prenosive šolje"
            },
            {
                "id": 4,
                "naziv": "BIOLOCO putna šolja TAKE A SIP",
                "cena": {
                    "cenaSaSajta": "1999 RSD",
                    "staraCena": ""
                },
                "opis": "Putna šolja dizajna iz Bioloco Office kolekcije napravljena od kombinacije nerđajućeg čelika i potpuno ekološki prihvatljivih materijala. Unutrašnjost šolje je sadrži dupli zid od nerđajućeg čelika tipa 304, koji omogućava održavanje toplote i hladnoće pića do 3 sata.",
                "src": "assets/img/solje/prenosive/flasa4.png",
                "proizvodID": 7,
                "kategorija": "Prenosive šolje"
            },
            {
                "id": 5,
                "naziv": "BIOLOCO putna šolja ORANGE LEAVES",
                "cena": {
                    "cenaSaSajta": "1999 RSD",
                    "staraCena": ""
                },
                "opis": "Putna šolja napravljena od potpuno ekološki prihvatljivih materijala, veoma atraktivnog dizajna iz Bioloco Delux kolekcije. Predviđena je za pranje u mašini za sudove i bezbedno je koristiti je u mikrotalasnoj bez poklopca. Kapacitet šolje je 420ml.",
                "src": "assets/img/solje/prenosive/flasa5.png",
                "proizvodID": 7,
                "kategorija": "Prenosive šolje"
            },
            {
                "id": 6,
                "naziv": "BIOLOCO putna šolja ABSTRACT PATTERN",
                "cena": {
                    "cenaSaSajta": "1999 RSD",
                    "staraCena": ""
                },
                "opis": "Putna šolja napravljena od potpuno ekološki prihvatljivih materijala, veoma atraktivnog dizajna iz Bioloco Delux kolekcije. Predviđena je za pranje u mašini za sudove i bezbedno je koristiti je u mikrotalasnoj bez poklopca. Kapacitet šolje je 420ml.",
                "src": "assets/img/solje/prenosive/flasa6.png",
                "proizvodID": 7,
                "kategorija": "Prenosive šolje"
            },
            {
                "id": 1,
                "naziv": "Šolja ROZE PRUGE u kutiji",
                "cena": {
                    "cenaSaSajta": "756 RSD", 
                    "staraCena": "890 RSD"
                },
                "opis": "Velika šolja za čaj ili kafu napravljena od finog porcelana. Šolja dolazi zapakovana u ukrasnu kutiju, sličnog dezena kao i sama šolja, te je idealna i za poklon. Šolju možete koristiti u mikrotalasnoj pećnici i prati u mašini za pranje sudova. Kapacitet šolje je 360ml.",
                "src": "assets/img/solje/solja1.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 2,
                "naziv":"Šolja CRNE PRUGE u kutiji",
                "cena": {
                    "cenaSaSajta": "756 RSD", 
                    "staraCena": "890 RSD"
                },
                "opis": "Velika šolja za čaj ili kafu napravljena od finog porcelana. Šolja dolazi zapakovana u ukrasnu kutiju, sličnog dezena kao i sama šolja, te je idealna i za poklon. Šolju možete koristiti u mikrotalasnoj pećnici i prati u mašini za pranje sudova. Kapacitet šolje je 360ml.",
                "src": "assets/img/solje/solja2.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 3,
                "naziv":"Šolja PAC-MAN",
                "cena": {
                    "cenaSaSajta": "807 RSD",
                    "staraCena": "950 RSD"
                },
                "opis": "Šolja za čaj ili kafu napravljena od porcelana. Možete je koristiti u mikrotalasnoj pećnici i prati u mašini za pranje sudova. Kapacitet šolje je 250ml.",
                "src": "assets/img/solje/solja3.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 4,
                "naziv":"Šolja POKEMON",
                "cena": {
                    "cenaSaSajta": "1274 RSD",
                    "staraCena": "1499 RSD" 
                },
                "opis": "Šolja sa dizajnom pokemona, zgodna za svakodnevnu upotrebu. Može se koristiti u mikrotalasnoj pećnici i prati u mašini za pranje sudova.",
                "src": "assets/img/solje/solja4.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 5,
                "naziv": "Keramička šolja SIVA SOVA",
                "cena": {
                    "cenaSaSajta": "1019 RSD",
                    "staraCena": "1199 RSD"
                },
                "opis": "Keramička šolja, atraktivnog dizajna, u obliku sove. Šolja je predviđena za pranje u mašini za sudove i korišćenje u mikrotalasnoj. Kapacitet šolje je 400ml.",
                "src": "assets/img/solje/solja5.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 6,
                "naziv": "Šolja EUCALYPTUS XXL",
                "cena": {
                    "cenaSaSajta": "2124 RSD",
                    "staraCena": "2499 RSD"
                },
                "opis": "Velika porcelanska šolja plave boje sa ilustracijom listova. Šolja dolazi u adekvatnoj poklon kutiji. Kapacitet šolje je 550ml. Dimenzije šolje 14,5x13x8,5cm. Šolju slobodno možete prati u mašini za sudove i koristiti u mikrotalasnoj.",
                "src": "assets/img/solje/solja6.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 7,
                "naziv": "Šolja GOLDEN GINGKO XXL",
                "cena": {
                    "cenaSaSajta": "2124 RSD",
                    "staraCena": "2499 RSD"
                },
                "opis": "Velika porcelanska šolja sive boje sa ilustracijom listova. Šolja dolazi u adekvatnoj poklon kutiji. Kapacitet šolje je 550ml. Dimenzije šolje 14,5x13x8,5cm. Šolju slobodno možete prati u mašini za sudove i koristiti u mikrotalasnoj.",
                "src": "assets/img/solje/solja7.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 8,
                "naziv": "Velika porcelanska šolja LIŠĆE",
                "cena": {
                    "cenaSaSajta": "1643 RSD",
                    "staraCena": "1933 RSD"
                },
                "opis": "Velika porcelanska šolja sa završnim mat efektom i ilustracijom u obliku konture lista. Šolja dolazi u adekvatnoj poklon kutiji sa identičnim ilustracijama. Kapacitet šolje je 350ml. Dimenzije 10x9cm. Preporučuje se ručno pranje.",
                "src": "assets/img/solje/solja8.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 9,
                "naziv": "Staklena čaša za piće LIST",
                "cena": {
                    "cenaSaSajta": "1359 RSD",
                    "staraCena": "1599 RSD"
                },
                "opis": "Staklena čaša za piće sa duplim zidovima, dekorisana ilustracijom lista. Čaša je izrađena od borosilikatnog stakla koje je otporno na toplotu te je odličan izbor i za tople napitke poput čaja. U čašu staje čak 300ml vašeg omiljenog napitka.",
                "src": "assets/img/solje/solja9.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 10,
                "naziv": "Porcelanska šolja MUSIC LOVER",
                "cena": {
                    "cenaSaSajta": "1487 RSD",
                    "staraCena": "1750 RSD"
                },
                "opis": "Velika porcelanska šolja sa natpisom 'Music lover'. Dolazi u poklon kutiji sa identičnim ilustracijama. Kapacitet šolje je 350ml. Dimenzije šolje su 10x9.8cm dok su dimenzije kutije 11.3x12.5x11.6 cm. Šolju slobodno možete koristiti u mašini za sudove i mikrotalasnoj.",
                "src": "assets/img/solje/solja10.png",
                "proizvodID": 2,
                "kategorija": "Šolje"
            },
            {
                "id": 1,
                "naziv": "Pernica TODAY",
                "cena": {
                    "cenaSaSajta": "800 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Futrola za olovke atraktivnog dizajna izrađena od fine mekane plastike. Dimenzije futrole su 55 x 195 x 55mm.",
                "src": "assets/img/stilorke/stilorka1.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 2,
                "naziv": "Pernica STARS",
                "cena": {
                    "cenaSaSajta": "1060 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Transparentna futrola za olovke atraktivnog dizajna izrađena od fine mekane plastike. Sadrži rajsfešlus. Dimenzije futrole su 55 x 195 x 55mm.",
                "src": "assets/img/stilorke/stilorka2.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 3,
                "naziv": "Pernica CUTE! Aqua",
                "cena": {
                    "cenaSaSajta": "1060 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Kompaktna silikonska futrola za olovke različitih boja sa rajsfešlusom. Futrola se otvorena može u potpunosti ispraviti i položiti na sto. Podržava do 10 olovaka, lenjira ili ostalih sitnica. Dimenzije 50 x 200 x 30mm.",
                "src": "assets/img/stilorke/stilorka3.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 4,
                "naziv": "Pernica CUTE! Violet",
                "cena": {
                    "cenaSaSajta": "1060 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Kompaktna silikonska futrola za olovke različitih boja sa rajsfešlusom. Futrola se otvorena može u potpunosti ispraviti i položiti na sto. Podržava do 10 olovaka, lenjira ili ostalih sitnica. Dimenzije 50 x 200 x 30mm.",
                "src": "assets/img/stilorke/stilorka4.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 5,
                "naziv": "Pernica BLACKFIT8 - ZELENA",
                "cena": {
                    "cenaSaSajta": "830 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Prazna pernica u obliku nesesera sa tri pregrade. Pernica je napravljena od poliestera i sadrži tri prostrane pregrade i jak rajsfešlus sa ukrasnim priveskom. Odličan izbor za različit dodatni pribor poput makaza, lepka, korektora...",
                "src": "assets/img/stilorke/stilorka5.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 6,
                "naziv": "Pernica BLACKFIT8 - PLAVA",
                "cena": {
                    "cenaSaSajta": "830 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Prazna pernica u obliku nesesera sa tri pregrade. Pernica je napravljena od poliestera i sadrži tri prostrane pregrade i jak rajsfešlus sa ukrasnim priveskom. Odličan izbor za različit dodatni pribor poput makaza, lepka, korektora...",
                "src": "assets/img/stilorke/stilorka6.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 7,
                "naziv": "Četvrtasta pernica WEDNESDAY UNIFORM",
                "cena": {
                    "cenaSaSajta": "790 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Pernica dekorisana detaljima popularne serije Wednesday. Poseduje jednu pregradu koja se zatvara pomoću kvalitetnog rajsferšlusa. Dimenzije 21 x 8 x 5,5cm.",
                "src": "assets/img/stilorke/stilorka7.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 8,
                "naziv": "Pernica sa tri pregrade SUPERUP",
                "cena": {
                    "cenaSaSajta": "970 RSD",
                    "staraCena": "0 RSD"
                },
                "opis": "Pernica prazna sa tri pregrade SUPERUP. Dimenzije 22 x 11 x 5 cm",
                "src": "assets/img/stilorke/stilorka8.png",
                "proizvodID": 4,
                "kategorija": "Pernice"
            },
            {
                "id": 1,
                "naziv": "Sveska A4 sa spiralom na kvadratiće",
                "cena": {
                    "cenaSaSajta": "450 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska A4 formata u spiralnom povezu sa 80 listova na kvadratiće koji su napravljeni od 70g papira.",
                "src": "assets/img/sveske/sveska4.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 2,
                "naziv": "Sveska A5 na kvadratiće KRAFT",
                "cena": {
                    "cenaSaSajta": "160 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska A5 formata sa 60 listova na kvadratiće. Sveska je napravljena od kvalitetnog 70g papira.",
                "src": "assets/img/sveske/sveska5.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 3,
                "naziv": "Sveska A5 na kvadratiće",
                "cena": {
                    "cenaSaSajta": "140 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska sa 60 listova na kvadratiće. Prilikom poručivanja naglasiti koji motiv sveske želite. Dimenzije 20,8x16,5cm.",
                "src": "assets/img/sveske/sveska6.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 4,
                "naziv": "SVESKA A5 KARO SPACE TRAVELER",
                "cena": {
                    "cenaSaSajta": "105 RSD",
                    "staraCena": ""
                },
                "opis": "SVESKA A5 60L KARO UV LAK",
                "src": "assets/img/sveske/sveska7.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 5,
                "naziv": "SVESKA A5 LATAJN SPACE TRAVELER",
                "cena": {
                    "cenaSaSajta": "105 RSD",
                    "staraCena": ""
                },
                "opis": "SVESKA A5 60L KARO UV LAK",
                "src": "assets/img/sveske/sveska8.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 6,
                "naziv": "Sveska A4 LIKE Premium dikto 52l", 
                "cena": {
                    "cenaSaSajta": "199 RSD",
                    "staraCena": ""
                },
                "opis": "KORICE: 300g/m2 - ŠTAMPA: 4/0 + mat plastifikacija + gliter - PREDLIST / ZADNJI LIST: 1/0. Zaobljene ivice",
                "src": "assets/img/sveske/sveska9.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 7,
                "naziv": "Sveska A6 SPIRAL", 
                "cena": {
                    "cenaSaSajta": "450 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska A6 formata u spiralnom povezu sa 80 listova na kvadratiće. Napravljena od kvalitetnog 70g papira.",
                "src": "assets/img/sveske/sveska10.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 8,
                "naziv": "Sveska A6 SPIRAL", 
                "cena": {
                    "cenaSaSajta": "450 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska A6 formata u spiralnom povezu sa 80 listova na kvadratiće. Napravljena od kvalitetnog 70g papira.",
                "src": "assets/img/sveske/sveska11.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 9,
                "naziv": "Sveska SPIRAL", 
                "cena": {
                    "cenaSaSajta": "500 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska A6 formata u spiralnom povezu sa listovima na kvadratiće. Sveska je napravljena od kvalitetnog 70g papira.", 
                "src": "assets/img/sveske/sveska1.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 10,
                "naziv": "Sveska MAP SPIRAL", 
                "cena": {
                    "cenaSaSajta": "500 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska A6 formata u spiralnom povezu sa listovima na kvadratiće. Sveska je napravljena od kvalitetnog 70g papira.",
                "src": "assets/img/sveske/sveska2.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            },
            {
                "id": 11,
                "naziv": "Sveska Panda SPIRAL", 
                "cena": {
                    "cenaSaSajta": "500 RSD",
                    "staraCena": ""
                },
                "opis": "Sveska A6 formata u spiralnom povezu sa listovima na kvadratiće. Sveska je napravljena od kvalitetnog 70g papira.",
                "src": "assets/img/sveske/sveska3.png",
                "proizvodID": 3,
                "kategorija": "Sveske"
            }
  ];

function ispisiMeni(nizMeni) {
    let sadrzajZaIspis = "";

    for(let meni of nizMeni) {
        sadrzajZaIspis += `<li class="nav-item mx-3">
                            <a class="nav-link text-dark hover" href="${meni.href}"><p>${meni.text}</p></a>
                           </li>`;
    }

    $("#meniispis").html(sadrzajZaIspis);
}


function kreirajDDL(proizvodi) {
  let ispis = `<div class="form-group">
                <select class="form-select" id="ddlKat">
                  <option value="0">Izaberi</option>`;
  for (let proizvod of proizvodi) {
    ispis += `<option value="${proizvod.naziv}">${proizvod.naziv}</option>`;
  }
  ispis += `</select></div>`;

  $("#proizvodi").html(ispis);
}


function ispisiProizvode(niz) {
    let ispisProizvoda = ""; 

    for(let proizvod of niz) { 
        ispisProizvoda += `<div class="col-xl-3 d-flex justify-content-around align-items-center card2">
                            <div class="slikaDiv">
                                <img src="${proizvod.src}" alt="${proizvod.naziv}" />
                            </div>
                            <div id="tekstProizvoda">
                                <h6 class="text-center">${proizvod.naziv}</h6>
                                <p class="text-center">${proizvod.cena.cenaSaSajta}</p>
                                <input class="form-control" type="submit" value="Dodaj u korpu" />
                            </div>
                            </div>`;
    }
    
    $("#sviProizvodi").html(ispisProizvoda);
}


$("#inputZaFunkciju").on("input", function() {
    let unos = $(this).val().toLowerCase();

    let filtriraniProizvodi = sve.filter(function(proizvod) {
        return proizvod.naziv.toLowerCase().includes(unos);
    })

    ispisiProizvode(filtriraniProizvodi);
});



$(document).on("change", "#sort", function() {
    let tip = $("#sort").val();

    if(tip == "nazivAsc") {
        sve.sort(function(a, b) {
            if(a.naziv > b.naziv) return 1;
            else if(a.naziv < b.naziv) return -1;
            else return 0;
        })
    }
    else if(tip == "nazivDesc") {
        sve.sort(function(a, b) {
            if(a.naziv > b.naziv) return -1;
            else if(a.naziv < b.naziv) return 1;
            else return 0;
        })
    }
    else if(tip == "cenaAsc") {
        sve.sort(function(a, b) {
            let cenaA = parseFloat(a.cena.cenaSaSajta);
            let cenaB = parseFloat(b.cena.cenaSaSajta);
            if(cenaA > cenaB) return 1;
            else if(cenaA < cenaB) return -1;
            else return 0;
        })
    }
    else if(tip == "cenaDesc") {
        sve.sort(function(a, b) {
            let cenaA = parseFloat(a.cena.cenaSaSajta);
            let cenaB = parseFloat(b.cena.cenaSaSajta);
            if(cenaA > cenaB) return -1;
            else if(cenaA < cenaB) return 1;
            else return 0;
        })
    }

    ispisiProizvode(sve);
})


function filtrirajPoKategoriji(kategorija) {
    return sve.filter(function(sve) {
        return sve.kategorija === kategorija;
    });
}


$(document).on("change", "#ddlKat", function() {
    let izabranaKategorija = $(this).val();
    console.log(izabranaKategorija);
    if (izabranaKategorija === "0") {
        ispisiProizvode(sve);
    } else {
        let filtriraniProizvodi = filtrirajPoKategoriji(izabranaKategorija);
        ispisiProizvode(filtriraniProizvodi);
    }
    $("#sviProizvodi").addClass("klasaFilter");
    $("#prodavnica").addClass("klasaFilterProd");
    $("#prodavnica .col-3, .col-9").addClass("klasaFilterProd");
});
