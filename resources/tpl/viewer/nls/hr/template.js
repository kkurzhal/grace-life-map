define({
  "viewer": {
    "common": {
      "close": "Zatvori"
    },
    "loading": {
      "step1": "Učitavanje priče",
      "step2": "Učitavanje podataka",
      "step3": "Pokretanje",
      "loadBuilder": "Prebacivanje na sastavljač",
      "long": "Pokreće se Map Journal",
      "long2": "Hvala vam na čekanju",
      "failButton": "Ponovno učitaj ovu priču"
    },
    "signin": {
      "title": "Potrebna je provjera autentičnosti",
      "explainViewer": "Prijavite se računom za %PORTAL_LINK% da biste pristupili priči.",
      "explainBuilder": "Prijavite se računom za %PORTAL_LINK% da biste konfigurirali priču."
    },
    "errors": {
      "boxTitle": "Došlo je do pogreške",
      "invalidConfig": "Nevaljana konfiguracija",
      "invalidConfigNoApp": "Identifikator aplikacije za web-kartiranje nije određen u index.html.",
      "invalidConfigNoAppDev": "Identifikator aplikacije za web-kartiranje nije određen u parametrima URL-a (?appid= ili ?webmap=). U razvojnom načinu ignorira se konfiguracija za appid u index.html.",
      "unspecifiedConfigOwner": "Ovlašteni vlasnik nije konfiguriran.",
      "invalidConfigOwner": "Vlasnik priče nema ovlasti.",
      "createMap": "Nije moguće stvoriti kartu",
      "invalidApp": "Predložak %TPL_NAME% ne postoji ili nije dostupan.",
      "appLoadingFail": "Nešto nije u redu, predložak %TPL_NAME% nije se točno učitao.",
      "notConfiguredDesktop": "Priča još nije konfigurirana.",
      "notConfiguredMobile": "Sastavljač predloška %TPL_NAME% nije podržan u ovoj veličini prikaza. Ako je moguće, promijenite veličinu preglednika da biste pristupili sastavljaču ili izradite priču na uređaju s većim zaslonom.",
      "notConfiguredMobile2": "Zakrenite uređaj u vodoravno usmjerenje kako biste upotrijebili sastavljač %TPL_NAME%.",
      "notAuthorized": "Niste ovlašteni za pristup ovoj priči",
      "notAuthorizedBuilder": "Niste ovlašteni za upotrebu sastavljača %TPL_NAME%.",
      "noBuilderIE": "Sastavljač nije podržan u ranijim verzijama preglednika Internet Explorer prije verzije %VERSION%. %UPGRADE%",
      "noViewerIE": "Priča nije podržana u ranijim verzijama preglednika Internet Explorer prije verzije %VERSION%. %UPGRADE%",
      "noViewerIE2": "Pokušavate prikazati ovu priču preko starijeg, nepodržanog preglednika. Možda neki geoobjekti ne rade ili je došlo do drugih neočekivanih problema. Predlažemo nadogradnju u Internet Explorer 11 ili korištenje drugog preglednika, primjerice Chromea.",
      "noViewerIE3": "Krajem 2017. ova se priča više neće moći učitati u ovom pregledniku. Tada ćete morati koristiti podržani preglednik za prikaz ove priče.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Ažurirajte svoj preglednik</a>.",
      "mapLoadingFail": "Nešto nije u redu, karta se nije točno učitala.",
      "signOut": "Odjava",
      "print0": "Nažalost, ova se priča ne može ispisati.",
      "print1": "Da biste ispisali ovu priču, upotrijebite gumb za ispis koji se nalazi u dijaloškom okviru za dijeljenje.",
      "print2": "Nažalost, verzija za ispis priče obično je dostupna putem dijaloškog okvira za dijeljenje, no autor je onemogućio ovaj dijaloški okvir.",
      "attention": "Pozor!"
    },
    "mobileView": {
      "tapForDetails": "Dodirni za pojedinosti",
      "clickForDetails": "Saznaj više",
      "swipeToExplore": "Upotrijebite klizač da biste istražili",
      "tapForMap": "Dodirni za povratak natrag",
      "clickForMap": "NATRAG"
    },
    "floatLayout": {
      "scroll": "Pomakni se"
    },
    "sideLayout": {
      "scroll": "Pomakni se prema dolje za više!"
    },
    "mainStage": {
      "back": "Natrag",
      "errorDeleted": "Ova poveznica nije aktivna (odjeljak je izbrisan)",
      "errorNotPublished": "Poveznica nije aktivna (odjeljak nije objavljen)"
    },
    "headerFromCommon": {
      "storymapsText": "Karta s pričom",
      "builderButton": "Uredi",
      "facebookTooltip": "Podijeli na Facebooku",
      "twitterTooltip": "Podijeli na Twitteru",
      "bitlyTooltip": "Preuzmite kratku poveznicu",
      "templateTitle": "Postavi naslov predloška",
      "templateSubtitle": "Postavi podnaslov predloška",
      "share": "Podijeli",
      "checking": "Provjeravanje sadržaja priče",
      "fix": "Popravi probleme u priči",
      "noerrors": "Nema otkrivenih problema",
      "tooltipAutoplayDisabled": "Ovo nije dostupno u načinu automatske reprodukcije",
      "notshared": "Priča nije podijeljena"
    },
    "overviewFromCommon": {
      "title": "Pregledna karta"
    },
    "legendFromCommon": {
      "title": "Legenda"
    },
    "shareFromCommon": {
      "copy": "Kopiraj",
      "copied": "Kopirano",
      "open": "Otvori",
      "embed": "Ugradi u web-stranicu",
      "embedExplain": "Upotrijebite sljedeći HTML kod da biste ugradili dnevnik u web-stranicu.",
      "size": "Veličina (širina/visina):",
      "autoplayLabel": "Način automatske reprodukcije",
      "autoplayExplain1": "Način automatske reprodukcije napredovat će kroz vašu priču u redovitim intervalima. To je idealno za kiosk ili javno prikazani zaslon, no budite svjesni da će se u drugim situacijama priča možda teže čitati. Ova značajka nije podržana na malim zaslonima.",
      "autoplayExplain2": "Kada je ovaj način rada aktivan, postoje kontrole za reprodukciju/pauziranje priče i podešavanje brzine navigacije.",
      "linksupdated": "Poveznice ažurirane!",
      "print": "Ispis",
      "printInstruction1": "Pričekajte da se sav sadržaj učita prije nego što ispišete ovu stranicu",
      "printInstruction1a": "Neki se sadržaj možda neće htjeti ispisivati osim ako ne omogućite opciju „Ispisi pozadinske boje i slike” u dijaloškom okviru za postavljanje stranice za ispis.",
      "printInstruction2": "Ova se stranica ne može dijeliti s drugima, umjesto nje podijelite ${link}",
      "link": "poveznica na priču",
      "printOptPageBreak": "Započnite svaki dio na novoj stranici",
      "makeTextBlack": "Promijeni cijeli tekst u crno",
      "printWarning": "Ovo je ispisana verzija karte s pričom. Dinamički sadržaj, kao što su videozapisi i interaktivne karte, dostupan je samo u internetskoj verziji na ${link}",
      "printMSWarning": "poveznica dostupna samo u priči na internetu",
      "printVideoWarning": "Ovaj se videozapis može pogledati u internetskoj verziji ove karte s pričom"
    }
  }
});