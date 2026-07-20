document.addEventListener('DOMContentLoaded', () => {
  const cartLink = document.getElementById('linkCart');
  const cartCount = cartLink ? cartLink.querySelector('.cart-count') : null;
  const heroBgImg = document.getElementById('heroBgImg');
  const shopNowBtn = document.getElementById('btnShopNow');

  // Multilanguage support dictionary
  const translations = {
    EN: {
      women: 'WOMEN',
      men: 'MEN',
      impact: 'IMPACT',
      shoefinder: 'SHOE FINDER',
      search: 'SEARCH',
      help: 'HELP',
      login: 'LOGIN',
      cart: 'CART',
      tag: 'AERIS ONE / AERO-KNIT',
      titles: {
        GOLD: 'Engineered for Lightness.<br>Built to Last',
        BLACK_RED: 'Forged in Darkness.<br>Engineered to Perform',
        SILVER_BLUE: 'Born for the Elements.<br>Made for the Trail',
        GREEN_COPPER: 'Rooted in Nature.<br>Designed for Comfort'
      },
      readmore: 'READ MORE',
      shopnow: 'SHOP NOW',
      sidebarTitle: 'LANGUAGE AND COUNTRY',
      sidebarClose: 'CLOSE',
      searchPlaceholder: 'Search',
      chooseLang: 'CHOOSE A LANGUAGE',
      cartToast: '1 item added to your shopping cart',
      regionToast: 'Region updated to {country} ({lang} / {currency})',
      springNews: 'SPRING NEWS',
      shopAll: 'SHOP ALL',
      prev: 'Prev',
      next: 'Next',
      brandStatement: 'Engineered for lightness. Built from nature. Footwear for a lighter footprint.',
      exploreBrand: 'EXPLORE AERIS',
      featureTag: 'NATURALLY RESILIENT',
      featureHeadline: 'Zero petroleum plastics. 100% plant fiber. Choose AERIS Leaf',
      hikingShoes: 'HIKING SHOES',
      summerHeadline: 'Engineered to breathe. Crafted to wander.',
      walkingShoes: 'WALKING SHOES',
      shoefinderHeadline: 'Not sure which path to take? From city streets to mountain peaks, discover the perfect fit for your next low-impact journey.',
      findYourFit: 'FIND YOUR FIT',
      exploreByCategory: 'EXPLORE BY CATEGORY',
      catNewArrivals: 'New Arrivals',
      catPlantKnit: 'Plant-Knit Sneakers',
      catAllWeather: 'All-Weather Hiking',
      catActiveApparel: 'Active Apparel',
      catFootwearTech: 'Footwear Tech',
      footerTitleInfo: 'INFO',
      footerTitleSocial: 'SOCIAL MEDIA',
      footerTitleBrand: 'AERIS',
      footerNewsletterStatement: 'Get updates on climate action and essential products, and let us inspire you to get out more - all year round.',
      footerSubscribe: 'SIGN UP NOW',
      footerTagline: 'AERIS crafts plant-based footwear designed for lightness and zero petroleum plastic impact, raising the bar for a circular future.'
    },
    DE: {
      women: 'DAMEN',
      men: 'HERREN',
      impact: 'NACHHALTIGKEIT',
      shoefinder: 'SCHUH-FINDER',
      search: 'SUCHEN',
      help: 'HILFE',
      login: 'ANMELDEN',
      cart: 'WARENKORB',
      tag: 'AERIS ONE / AERO-KNIT',
      titles: {
        GOLD: 'Entwickelt für Leichtigkeit.<br>Gebaut für Langlebigkeit',
        BLACK_RED: 'In der Dunkelheit geschmiedet.<br>Entwickelt für Leistung',
        SILVER_BLUE: 'Für die Elemente geboren.<br>Gemacht für den Trail',
        GREEN_COPPER: 'In der Natur verwurzelt.<br>Entworfen für Komfort'
      },
      readmore: 'MEHR LESEN',
      shopnow: 'JETZT KAUFEN',
      sidebarTitle: 'SPRACHE UND LAND',
      sidebarClose: 'SCHLIESSEN',
      searchPlaceholder: 'Suchen',
      chooseLang: 'SPRACHE WÄHLEN',
      cartToast: '1 Artikel in den Warenkorb gelegt',
      regionToast: 'Region aktualisiert auf {country} ({lang} / {currency})',
      springNews: 'FRÜHJAHRS-NEWS',
      shopAll: 'ALLE ANSEHEN',
      prev: 'Zurück',
      next: 'Weiter',
      brandStatement: 'Entwickelt für Leichtigkeit. Aus der Natur gebaut. Schuhe für einen kleineren Fußabdruck.',
      exploreBrand: 'AERIS ENTDECKEN',
      featureTag: 'NATÜRLICH WIDERSTANDSFÄHIG',
      featureHeadline: 'Keine Kunststoffe aus Erdöl. 100% Pflanzenfaser. Wählen Sie AERIS Leaf',
      hikingShoes: 'WANDERSCHUHE',
      summerHeadline: 'Entwickelt zum Atmen. Gemacht zum Wandern.',
      walkingShoes: 'GEHSCHUHE',
      shoefinderHeadline: 'Nicht sicher, welchen Weg Sie einschlagen sollen? Entdecken Sie von der Stadtstraße bis zum Berggipfel die perfekte Passform für Ihre nächste umweltfreundliche Reise.',
      findYourFit: 'PASSFORM FINDEN',
      exploreByCategory: 'NACH KATEGORIE ENTDECKEN',
      catNewArrivals: 'Neuheiten',
      catPlantKnit: 'Pflanzenfaser-Sneaker',
      catAllWeather: 'Allwetter-Wandern',
      catActiveApparel: 'Sportbekleidung',
      catFootwearTech: 'Schuh-Technologie',
      footerTitleInfo: 'INFO',
      footerTitleSocial: 'SOCIAL MEDIA',
      footerTitleBrand: 'AERIS',
      footerNewsletterStatement: 'Erhalten Sie Updates zu Klimaschutz und essenziellen Produkten und lassen Sie sich das ganze Jahr über inspirieren.',
      footerSubscribe: 'JETZT ANMELDEN',
      footerTagline: 'AERIS stellt Schuhe auf Pflanzenbasis her, die auf Leichtigkeit und minimale Umweltbelastung ausgelegt sind.'
    },
    FR: {
      women: 'FEMMES',
      men: 'HOMMES',
      impact: 'IMPACT',
      shoefinder: 'TROUVER MES CHAUSSURES',
      search: 'RECHERCHER',
      help: 'AIDE',
      login: 'CONNEXION',
      cart: 'PANIER',
      tag: 'AERIS ONE / AERO-KNIT',
      titles: {
        GOLD: 'Conçue pour la légèreté.<br>Bâtie pour durer',
        BLACK_RED: 'Forgée dans l\'obscurité.<br>Conçue pour performer',
        SILVER_BLUE: 'Née pour les éléments.<br>Faite pour les sentiers',
        GREEN_COPPER: 'Enracinée dans la nature.<br>Conçue pour le confort'
      },
      readmore: 'EN SAVOIR PLUS',
      shopnow: 'ACHETER MAINTENANT',
      sidebarTitle: 'LANGUE ET PAYS',
      sidebarClose: 'FERMER',
      searchPlaceholder: 'Rechercher',
      chooseLang: 'CHOISIR UNE LANGUE',
      cartToast: '1 article ajouté à votre panier',
      regionToast: 'Région mise à jour : {country} ({lang} / {currency})',
      springNews: 'NOUVEAUTÉS DE PRINTEMPS',
      shopAll: 'TOUT VOIR',
      prev: 'Préc',
      next: 'Suiv',
      brandStatement: 'Conçue pour la légèreté. Faite à partir de la nature. Des chaussures pour une empreinte plus légère.',
      exploreBrand: 'EXPLORER AERIS',
      featureTag: 'NATURELLEMENT RÉSISTANT',
      featureHeadline: 'Zéro plastique pétrolier. 100% fibre végétale. Choisissez AERIS Leaf',
      hikingShoes: 'CHAUSSURES DE RANDONNÉE',
      summerHeadline: 'Conçue pour respirer. Faite pour flâner.',
      walkingShoes: 'CHAUSSURES DE MARCHE',
      shoefinderHeadline: 'Vous hésitez sur le chemin à prendre ? Des rues de la ville aux sommets des montagnes, découvrez la coupe idéale pour votre prochain voyage à faible impact.',
      findYourFit: 'TROUVER VOTRE COUPE',
      exploreByCategory: 'EXPLORER PAR CATÉGORIE',
      catNewArrivals: 'Nouveautés',
      catPlantKnit: 'Baskets en fibres végétales',
      catAllWeather: 'Randonnée tout temps',
      catActiveApparel: 'Vêtements de sport',
      catFootwearTech: 'Tech de la chaussure',
      footerTitleInfo: 'INFO',
      footerTitleSocial: 'RÉSEAUX SOCIAUX',
      footerTitleBrand: 'AERIS',
      footerNewsletterStatement: 'Recevez des nouvelles sur l\'action climatique, nos produits essentiels et laissez-nous vous inspirer toute l\'année.',
      footerSubscribe: 'S\'INSCRIRE',
      footerTagline: 'AERIS crée des chaussures végétales conçues pour la légèreté et un impact plastique nul, ouvrant la voie à un avenir circulaire.'
    },
    FI: {
      women: 'NAISET',
      men: 'MIEHET',
      impact: 'VAIKUTUS',
      shoefinder: 'KENKÄOPAS',
      search: 'HAE',
      help: 'APUA',
      login: 'KIRJAUDU',
      cart: 'OSTOSKORI',
      tag: 'AERIS ONE / AERO-KNIT',
      titles: {
        GOLD: 'Suunniteltu keveyteen.<br>Rakennettu kestämään',
        BLACK_RED: 'Taottu pimeydessä.<br>Suunniteltu suorituskykyyn',
        SILVER_BLUE: 'Syntynyt elementteihin.<br>Tehty poluille',
        GREEN_COPPER: 'Juurtunut luontoon.<br>Suunniteltu mukavuuteen'
      },
      readmore: 'LUE LISÄÄ',
      shopnow: 'OSTA NYT',
      sidebarTitle: 'KIELI JA MAA',
      sidebarClose: 'SULJE',
      searchPlaceholder: 'Hae',
      chooseLang: 'VALITSE KIELI',
      cartToast: '1 tuote lisätty ostoskoriin',
      regionToast: 'Alue päivitetty: {country} ({lang} / {currency})',
      springNews: 'KEVÄÄN UUTUUDET',
      shopAll: 'OSTA KAIKKI',
      prev: 'Edell',
      next: 'Seur',
      brandStatement: 'Suunniteltu keveyteen. Rakennettu luonnosta. Jalkineet kevyempään jalanjälkeen.',
      exploreBrand: 'TUTUSTU AERIKSEEN',
      featureTag: 'LUONNOLLISESTI KESTÄVÄ',
      featureHeadline: 'Ei raakaöljypohjaisia muoveja. 100% kasvikuitua. Valitse AERIS Leaf',
      hikingShoes: 'VAELLUSKENGÄT',
      summerHeadline: 'Suunniteltu hengittämään. Luotu vaeltamaan.',
      walkingShoes: 'KÄVELYKENGÄT',
      shoefinderHeadline: 'Epävarma siitä, minkä polun valitsisit? Kaupungin kaduilta vuorenhuipuille, löydä täydellinen istuvuus seuraavalle vähäpäästöiselle matkallesi.',
      findYourFit: 'LÖYDÄ SOPIVUUS',
      exploreByCategory: 'TUTUSTU KATEGORIOIHIN',
      catNewArrivals: 'Uutuudet',
      catPlantKnit: 'Kasvikuitu-tennarit',
      catAllWeather: 'Jokasään vaellus',
      catActiveApparel: 'Urheiluvaatteet',
      catFootwearTech: 'Jalkineteknologia',
      footerTitleInfo: 'TIEDOT',
      footerTitleSocial: 'SOSIAALINEN MEDIA',
      footerTitleBrand: 'AERIS',
      footerNewsletterStatement: 'Tilaa uutiset ilmastoteoista ja tuotteistamme, ja anna meidän inspiroida sinua liikkumaan ulkona ympäri vuoden.',
      footerSubscribe: 'TILAA NYT',
      footerTagline: 'AERIS valmistaa kasvipohjaisia jalkineita, jotka on suunniteltu keveyteen ilman öljypohjaisia muoveja.'
    },
    SV: {
      women: 'DAM',
      men: 'HERR',
      impact: 'INVERKAN',
      shoefinder: 'SKOGUIDE',
      search: 'SÖK',
      help: 'HJÄLP',
      login: 'LOGGA IN',
      cart: 'VARUKORG',
      tag: 'AERIS ONE / AERO-KNIT',
      titles: {
        GOLD: 'Konstruerad för lätthet.<br>Byggd för att hålla',
        BLACK_RED: 'Smidd i mörkret.<br>Konstruerad för prestanda',
        SILVER_BLUE: 'Född för elementen.<br>Gjord för stigen',
        GREEN_COPPER: 'Rotad i naturen.<br>Designad för komfort'
      },
      readmore: 'LÄS MER',
      shopnow: 'KÖP NU',
      sidebarTitle: 'SPRÅK OCH LAND',
      sidebarClose: 'STÄNG',
      searchPlaceholder: 'Sök',
      chooseLang: 'VÄLJ SPRÅK',
      cartToast: '1 produkt tillagd i varukorgen',
      regionToast: 'Region uppdaterad till {country} ({lang} / {currency})',
      springNews: 'VÅRNYHETER',
      shopAll: 'VISA ALLA',
      prev: 'Föreg',
      next: 'Nästa',
      brandStatement: 'Konstruerad för lätthet. Byggd av naturen. Skor för ett lättare fotavtryck.',
      exploreBrand: 'UTFORSKA AERIS',
      featureTag: 'NATURLIGT TÅLIG',
      featureHeadline: 'Noll råoljebaserad plast. 100% växtfiber. Välj AERIS Leaf',
      hikingShoes: 'VANDRINGSSKOR',
      summerHeadline: 'Konstruerad för att andas. Skapad för att vandra.',
      walkingShoes: 'PROMENADSKOR',
      shoefinderHeadline: 'Osäker på vilken väg du ska ta? Från stadsgator till bergstoppar, upptäck den perfekta passformen för din nästa miljövänliga resa.',
      findYourFit: 'HITTA DIN PASSFORM',
      exploreByCategory: 'UTFORSKA EFTER KATEGORI',
      catNewArrivals: 'Nyheter',
      catPlantKnit: 'Växtfibersneakers',
      catAllWeather: 'Allvädersvandring',
      catActiveApparel: 'Träningskläder',
      catFootwearTech: 'Sulteknologi',
      footerTitleInfo: 'INFO',
      footerTitleSocial: 'SOCIALA MEDIER',
      footerTitleBrand: 'AERIS',
      footerNewsletterStatement: 'Få uppdateringar om klimatåtgärder och produkter, och låt oss inspirera dig att komma ut mer – året runt.',
      footerSubscribe: 'ANMÄL DIG NU',
      footerTagline: 'AERIS skapar växtbaserade skor designade för lätthet och noll plastpåverkan, vilket sätter ribban för en cirkulär framtid.'
    },
    ES: {
      women: 'MUJERES',
      men: 'HOMBRES',
      impact: 'IMPACTO',
      shoefinder: 'BUSCADOR DE ZAPATOS',
      search: 'BUSCAR',
      help: 'AYUDA',
      login: 'INICIAR SESIÓN',
      cart: 'CARRITO',
      tag: 'AERIS ONE / AERO-KNIT',
      titles: {
        GOLD: 'Diseñado para la ligereza.<br>Construido para durar',
        BLACK_RED: 'Forjado en la oscuridad.<br>Diseñado para rendir',
        SILVER_BLUE: 'Nacido para los elementos.<br>Hecho para el sendero',
        GREEN_COPPER: 'Arraigado en la naturaleza.<br>Diseñado para la comodidad'
      },
      readmore: 'LEER MÁS',
      shopnow: 'COMPRAR AHORA',
      sidebarTitle: 'IDIOMA Y PAÍS',
      sidebarClose: 'CERRAR',
      searchPlaceholder: 'Buscar',
      chooseLang: 'ELEGIR UN IDIOMA',
      cartToast: '1 artículo añadido al carrito',
      regionToast: 'Región actualizada a {country} ({lang} / {currency})',
      springNews: 'NOVEDADES DE PRIMAVERA',
      shopAll: 'VER TODO',
      prev: 'Ant',
      next: 'Sig',
      brandStatement: 'Diseñado para la ligereza. Creado a partir de la naturaleza. Calzado para una huella más ligera.',
      exploreBrand: 'EXPLORAR AERIS',
      featureTag: 'NATURALMENTE RESISTENTE',
      featureHeadline: 'Cero plásticos derivados del petróleo. 100% fibra vegetal. Elige AERIS Leaf',
      hikingShoes: 'ZAPATOS DE SENDERISMO',
      summerHeadline: 'Diseñado para respirar. Creado para pasear.',
      walkingShoes: 'ZAPATOS DE CAMINAR',
      shoefinderHeadline: '¿No estás seguro de qué camino tomar? Desde las calles de la ciudad hasta las cumbres de las montañas, descubre el ajuste perfecto para tu próximo viaje ecológico.',
      findYourFit: 'ENCUENTRA TU AJUSTE',
      exploreByCategory: 'EXPLORAR POR CATEGORÍA',
      catNewArrivals: 'Novedades',
      catPlantKnit: 'Zapatillas de fibra vegetal',
      catAllWeather: 'Senderismo todo clima',
      catActiveApparel: 'Ropa deportiva',
      catFootwearTech: 'Tecnología del calzado',
      footerTitleInfo: 'INFO',
      footerTitleSocial: 'REDES SOCIALES',
      footerTitleBrand: 'AERIS',
      footerNewsletterStatement: 'Recibe novedades sobre acción climática y productos esenciales, y déjanos inspirarte a salir más, todo el año.',
      footerSubscribe: 'REGÍSTRATE',
      footerTagline: 'AERIS diseña calzado de base vegetal enfocado en la ligereza y un impacto plástico nulo, elevando el estándar de circularidad.'
    },
    IT: {
      women: 'DONNA',
      men: 'UOMO',
      impact: 'IMPATTO',
      shoefinder: 'RICERCA SCARPE',
      search: 'CERCA',
      help: 'AIUTO',
      login: 'ACCEDI',
      cart: 'CARRELLO',
      tag: 'AERIS ONE / AERO-KNIT',
      titles: {
        GOLD: 'Progettato per la leggerezza.<br>Creato per durare',
        BLACK_RED: 'Forgiato nell\'oscurità.<br>Progettato per le prestazioni',
        SILVER_BLUE: 'Nato per gli elementi.<br>Creato per il sentiero',
        GREEN_COPPER: 'Radicato nella natura.<br>Progettato per il confort'
      },
      readmore: 'LEGGI DI PIÙ',
      shopnow: 'ACQUISTA ORA',
      sidebarTitle: 'LINGUA E PAESE',
      sidebarClose: 'CHIUDI',
      searchPlaceholder: 'Cerca',
      chooseLang: 'SCEGLI UNA LINGUA',
      cartToast: '1 articolo aggiunto al carrello',
      regionToast: 'Regione aggiornata a {country} ({lang} / {currency})',
      springNews: 'NOVITÀ DI PRIMAVERA',
      shopAll: 'VEDI TUTTO',
      prev: 'Prec',
      next: 'Succ',
      brandStatement: 'Progettato per la leggerezza. Creato dalla natura. Calzature per un\'impronta più leggera.',
      exploreBrand: 'ESPLORA AERIS',
      featureTag: 'NATURALMENTE RESISTENTE',
      featureHeadline: 'Zero plastica derivata dal petrolio. 100% fibra vegetale. Scegli AERIS Leaf',
      hikingShoes: 'SCARPE DA TREKKING',
      summerHeadline: 'Progettato per respirare. Creato per vagare.',
      walkingShoes: 'SCARPE DA PASSEGGIO',
      shoefinderHeadline: 'Non sai quale strada prendere? Dalle strade cittadine alle cime montuose, scopri la calzata perfetta per il tuo prossimo viaggio a basso impatto.',
      findYourFit: 'TROVA LA TUA MISURA',
      exploreByCategory: 'ESPLORA PER CATEGORIA',
      catNewArrivals: 'Nuovi Arrivi',
      catPlantKnit: 'Sneakers in fibra vegetale',
      catAllWeather: 'Trekking per ogni tempo',
      catActiveApparel: 'Abbigliamento sportivo',
      catFootwearTech: 'Tecnologia della calzata',
      footerTitleInfo: 'INFO',
      footerTitleSocial: 'SOCIAL MEDIA',
      footerTitleBrand: 'AERIS',
      footerNewsletterStatement: 'Ricevi aggiornamenti sulle azioni per il clima e sui prodotti essenziali, e lasciati ispirare a uscire di più tutto l\'anno.',
      footerSubscribe: 'ISCRIVITI ORA',
      footerTagline: 'AERIS produce calzature vegetali pensate per la leggerezza e un impatto plastico nullo, ridefinendo gli standard per un futuro circolare.'
    }
  };

  let currentLanguage = 'EN';
  let activeTheme = 'GOLD';

  // Country to Background Image & Theme Map
  const countryThemes = {
    CANADA: { img: 'assets/nanobanana_hero_bg.jpg', theme: 'GOLD' },
    'UNITED STATES': { img: 'assets/nanobanana_hero_bg.jpg', theme: 'GOLD' },
    'UNITED KINGDOM': { img: 'assets/nanobanana_hero_bg.jpg', theme: 'GOLD' },
    AUSTRALIA: { img: 'assets/nanobanana_hero_bg.jpg', theme: 'GOLD' },
    
    GERMANY: { img: 'assets/nanobanana_hero_bg_black_red.jpg', theme: 'BLACK_RED' },
    AUSTRIA: { img: 'assets/nanobanana_hero_bg_black_red.jpg', theme: 'BLACK_RED' },
    BELGIUM: { img: 'assets/nanobanana_hero_bg_black_red.jpg', theme: 'BLACK_RED' },
    SPAIN: { img: 'assets/nanobanana_hero_bg_black_red.jpg', theme: 'BLACK_RED' },
    
    FRANCE: { img: 'assets/nanobanana_hero_bg_silver_blue.jpg', theme: 'SILVER_BLUE' },
    ITALY: { img: 'assets/nanobanana_hero_bg_silver_blue.jpg', theme: 'SILVER_BLUE' },
    SWEDEN: { img: 'assets/nanobanana_hero_bg_silver_blue.jpg', theme: 'SILVER_BLUE' },
    SWITZERLAND: { img: 'assets/nanobanana_hero_bg_silver_blue.jpg', theme: 'SILVER_BLUE' },
    
    FINLAND: { img: 'assets/nanobanana_hero_bg_green_copper.jpg', theme: 'GREEN_COPPER' },
    CROATIA: { img: 'assets/nanobanana_hero_bg_green_copper.jpg', theme: 'GREEN_COPPER' },
    'CZECH REPUBLIC': { img: 'assets/nanobanana_hero_bg_green_copper.jpg', theme: 'GREEN_COPPER' },
    DENMARK: { img: 'assets/nanobanana_hero_bg_green_copper.jpg', theme: 'GREEN_COPPER' },
    ESTONIA: { img: 'assets/nanobanana_hero_bg_green_copper.jpg', theme: 'GREEN_COPPER' },
    NETHERLANDS: { img: 'assets/nanobanana_hero_bg_green_copper.jpg', theme: 'GREEN_COPPER' }
  };

  // Multi-currency price conversion mapping
  const exchangeRates = {
    USD: 1.0,
    EUR: 0.92,
    CAD: 1.36,
    GBP: 0.78,
    AUD: 1.48,
    SEK: 10.45,
    CHF: 0.89
  };

  function updatePrices(currencyCode) {
    const rate = exchangeRates[currencyCode] || 1.0;
    const priceElements = document.querySelectorAll('.product-price');
    priceElements.forEach(el => {
      const basePrice = parseFloat(el.getAttribute('data-base-price'));
      if (!isNaN(basePrice)) {
        let converted = basePrice * rate;
        let formatted;
        if (currencyCode === 'SEK') {
          formatted = `${Math.round(converted).toLocaleString()} ${currencyCode}`;
        } else {
          formatted = `${converted.toFixed(2)} ${currencyCode}`;
        }
        el.textContent = formatted;
      }
    });
  }

  function changeHeroBackground(imgSrc) {
    if (!heroBgImg || heroBgImg.src.includes(imgSrc)) return;
    heroBgImg.style.opacity = '0';
    setTimeout(() => {
      heroBgImg.src = imgSrc;
      heroBgImg.onload = () => {
        heroBgImg.style.opacity = '1';
      };
    }, 400);
  }

  function changeLanguage(langCode) {
    if (!translations[langCode]) return;
    currentLanguage = langCode;
    const t = translations[langCode];

    const linkWomen = document.getElementById('linkWomen');
    if (linkWomen) linkWomen.textContent = t.women;

    const linkMen = document.getElementById('linkMen');
    if (linkMen) linkMen.textContent = t.men;

    const linkImpact = document.getElementById('linkImpact');
    if (linkImpact) linkImpact.textContent = t.impact;

    const linkShoeFinder = document.getElementById('linkShoeFinder');
    if (linkShoeFinder) linkShoeFinder.textContent = t.shoefinder;

    const linkSearch = document.getElementById('linkSearch');
    if (linkSearch) linkSearch.textContent = t.search;

    const linkHelp = document.getElementById('linkHelp');
    if (linkHelp) linkHelp.textContent = t.help;

    const linkLogin = document.getElementById('linkLogin');
    if (linkLogin) linkLogin.textContent = t.login;

    const linkCart = document.getElementById('linkCart');
    if (linkCart) {
      const cartCount = linkCart.querySelector('.cart-count');
      const countVal = cartCount ? cartCount.textContent : '0';
      linkCart.innerHTML = `${t.cart} <span class="cart-count">${countVal}</span>`;
    }

    const heroInfoTag = document.getElementById('heroInfoTag');
    if (heroInfoTag) heroInfoTag.textContent = t.tag;

    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) heroTitle.innerHTML = t.titles[activeTheme];

    const btnReadMore = document.getElementById('btnReadMore');
    if (btnReadMore) btnReadMore.textContent = t.readmore;

    const btnShopNow = document.getElementById('btnShopNow');
    if (btnShopNow) btnShopNow.textContent = t.shopnow;

    const sidebarTitle = document.querySelector('.sidebar-title');
    if (sidebarTitle) sidebarTitle.textContent = t.sidebarTitle;

    const btnSidebarClose = document.getElementById('btnSidebarClose');
    if (btnSidebarClose) btnSidebarClose.textContent = t.sidebarClose;

    const countrySearchInput = document.getElementById('countrySearchInput');
    if (countrySearchInput) countrySearchInput.setAttribute('placeholder', t.searchPlaceholder);

    const chooseLangLabels = document.querySelectorAll('.choose-lang-label');
    chooseLangLabels.forEach(label => {
      label.textContent = t.chooseLang;
    });

    const carouselTitle = document.getElementById('carouselTitle');
    if (carouselTitle) carouselTitle.textContent = t.springNews;

    const linkShopAll = document.getElementById('linkShopAll');
    if (linkShopAll) linkShopAll.textContent = t.shopAll;

    const btnCarouselPrev = document.getElementById('btnCarouselPrev');
    if (btnCarouselPrev) btnCarouselPrev.textContent = t.prev;

    const btnCarouselNext = document.getElementById('btnCarouselNext');
    if (btnCarouselNext) btnCarouselNext.textContent = t.next;

    const statementHeadline = document.getElementById('statementHeadline');
    if (statementHeadline) statementHeadline.textContent = t.brandStatement;

    const btnExploreBrand = document.getElementById('btnExploreBrand');
    if (btnExploreBrand) btnExploreBrand.textContent = t.exploreBrand;

    const featureTag = document.getElementById('featureTag');
    if (featureTag) featureTag.textContent = t.featureTag;

    const featureHeadline = document.getElementById('featureHeadline');
    if (featureHeadline) featureHeadline.textContent = t.featureHeadline;

    const btnFeatureReadMore = document.getElementById('btnFeatureReadMore');
    if (btnFeatureReadMore) btnFeatureReadMore.textContent = t.readmore;

    const btnFeatureShopNow = document.getElementById('btnFeatureShopNow');
    if (btnFeatureShopNow) btnFeatureShopNow.textContent = t.shopnow;

    const hikingCarouselTitle = document.getElementById('hikingCarouselTitle');
    if (hikingCarouselTitle) hikingCarouselTitle.textContent = t.hikingShoes;

    const linkHikingShopAll = document.getElementById('linkHikingShopAll');
    if (linkHikingShopAll) linkHikingShopAll.textContent = t.shopAll;

    const btnHikingCarouselPrev = document.getElementById('btnHikingCarouselPrev');
    if (btnHikingCarouselPrev) btnHikingCarouselPrev.textContent = t.prev;

    const btnHikingCarouselNext = document.getElementById('btnHikingCarouselNext');
    if (btnHikingCarouselNext) btnHikingCarouselNext.textContent = t.next;

    const summerFeatureTag = document.getElementById('summerFeatureTag');
    if (summerFeatureTag) summerFeatureTag.textContent = t.tag.split(' / ')[0]; // Extract "AERIS ONE"

    const summerFeatureHeadline = document.getElementById('summerFeatureHeadline');
    if (summerFeatureHeadline) summerFeatureHeadline.textContent = t.summerHeadline;

    const btnSummerReadMore = document.getElementById('btnSummerReadMore');
    if (btnSummerReadMore) btnSummerReadMore.textContent = t.readmore;

    const btnSummerShopNow = document.getElementById('btnSummerShopNow');
    if (btnSummerShopNow) btnSummerShopNow.textContent = t.shopnow;

    const walkingCarouselTitle = document.getElementById('walkingCarouselTitle');
    if (walkingCarouselTitle) walkingCarouselTitle.textContent = t.walkingShoes;

    const linkWalkingShopAll = document.getElementById('linkWalkingShopAll');
    if (linkWalkingShopAll) linkWalkingShopAll.textContent = t.shopAll;

    const btnWalkingCarouselPrev = document.getElementById('btnWalkingCarouselPrev');
    if (btnWalkingCarouselPrev) btnWalkingCarouselPrev.textContent = t.prev;

    const btnWalkingCarouselNext = document.getElementById('btnWalkingCarouselNext');
    if (btnWalkingCarouselNext) btnWalkingCarouselNext.textContent = t.next;

    const shoefinderTag = document.getElementById('shoefinderTag');
    if (shoefinderTag) shoefinderTag.textContent = t.shoefinder;

    const shoefinderHeadline = document.getElementById('shoefinderHeadline');
    if (shoefinderHeadline) shoefinderHeadline.textContent = t.shoefinderHeadline;

    const btnShoefinderCTA = document.getElementById('btnShoefinderCTA');
    if (btnShoefinderCTA) btnShoefinderCTA.textContent = t.findYourFit;

    // Explore by Category Translations
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) categoryTitle.textContent = t.exploreByCategory;

    const linkCategoryShopAll = document.getElementById('linkCategoryShopAll');
    if (linkCategoryShopAll) linkCategoryShopAll.textContent = t.shopAll;

    const btnCategoryPrev = document.getElementById('btnCategoryPrev');
    if (btnCategoryPrev) btnCategoryPrev.textContent = t.prev;

    const btnCategoryNext = document.getElementById('btnCategoryNext');
    if (btnCategoryNext) btnCategoryNext.textContent = t.next;

    const catLabelNewArrivals = document.getElementById('catLabelNewArrivals');
    if (catLabelNewArrivals) catLabelNewArrivals.textContent = t.catNewArrivals;

    const catLabelPlantKnit = document.getElementById('catLabelPlantKnit');
    if (catLabelPlantKnit) catLabelPlantKnit.textContent = t.catPlantKnit;

    const catLabelAllWeather = document.getElementById('catLabelAllWeather');
    if (catLabelAllWeather) catLabelAllWeather.textContent = t.catAllWeather;

    const catLabelActiveApparel = document.getElementById('catLabelActiveApparel');
    if (catLabelActiveApparel) catLabelActiveApparel.textContent = t.catActiveApparel;

    const catLabelFootwearTech = document.getElementById('catLabelFootwearTech');
    if (catLabelFootwearTech) catLabelFootwearTech.textContent = t.catFootwearTech;

    // Footer Translations
    const footerTitleInfo = document.getElementById('footerTitleInfo');
    if (footerTitleInfo) footerTitleInfo.textContent = t.footerTitleInfo;

    const footerTitleSocial = document.getElementById('footerTitleSocial');
    if (footerTitleSocial) footerTitleSocial.textContent = t.footerTitleSocial;

    const footerTitleBrand = document.getElementById('footerTitleBrand');
    if (footerTitleBrand) footerTitleBrand.textContent = t.footerTitleBrand;

    const footerNewsletterStatement = document.getElementById('footerNewsletterStatement');
    if (footerNewsletterStatement) footerNewsletterStatement.textContent = t.footerNewsletterStatement;

    const btnFooterSubscribe = document.getElementById('btnFooterSubscribe');
    if (btnFooterSubscribe) btnFooterSubscribe.textContent = t.footerSubscribe;

    const footerTagline = document.getElementById('footerTagline');
    if (footerTagline) footerTagline.textContent = t.footerTagline;
  }

  // Shared Add to Cart action
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!cartCount) return;
    
    // Increment cart count
    let currentCount = parseInt(cartCount.textContent) || 0;
    currentCount += 1;
    cartCount.textContent = currentCount;
    
    // Add quick bounce animation to cart counter
    cartCount.style.transform = 'scale(1.5)';
    cartCount.style.color = 'var(--color-white)';
    cartCount.style.transition = 'transform 0.2s ease, color 0.2s ease';
    
    showNotification(translations[currentLanguage].cartToast);
    
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
      cartCount.style.color = '';
    }, 500);
  };

  // Interactive Shop Now / Add to Cart demo
  if (shopNowBtn && cartCount) {
    shopNowBtn.addEventListener('click', handleAddToCart);
  }
  const featureShopNowBtn = document.getElementById('btnFeatureShopNow');
  if (featureShopNowBtn && cartCount) {
    featureShopNowBtn.addEventListener('click', handleAddToCart);
  }
  const btnSummerShopNow = document.getElementById('btnSummerShopNow');
  if (btnSummerShopNow && cartCount) {
    btnSummerShopNow.addEventListener('click', handleAddToCart);
  }

  // Modern subtle mouse movement parallax on background for high-end look
  if (heroBgImg) {
    document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * -0.015;
      const moveY = (e.clientY - window.innerHeight / 2) * -0.015;
      heroBgImg.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
    });
  }

  // Sidebar Slideout Navigation
  const regionLink = document.getElementById('linkRegion');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const sidebarContainer = document.getElementById('sidebarContainer');
  const btnSidebarClose = document.getElementById('btnSidebarClose');
  const countrySearchInput = document.getElementById('countrySearchInput');
  const countryItems = document.querySelectorAll('.country-item');

  function openSidebar() {
    if (sidebarBackdrop && sidebarContainer) {
      sidebarBackdrop.classList.add('active');
      sidebarContainer.classList.add('active');
      sidebarContainer.setAttribute('aria-hidden', 'false');
      sidebarBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Focus on search input
      setTimeout(() => {
        if (countrySearchInput) countrySearchInput.focus();
      }, 300);
    }
  }

  function closeSidebar() {
    if (sidebarBackdrop && sidebarContainer) {
      sidebarBackdrop.classList.remove('active');
      sidebarContainer.classList.remove('active');
      sidebarContainer.setAttribute('aria-hidden', 'true');
      sidebarBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (countrySearchInput) countrySearchInput.value = '';
      // Reset filter
      countryItems.forEach(item => item.style.display = '');
    }
  }

  if (regionLink) {
    regionLink.addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar();
    });
  }

  if (btnSidebarClose) {
    btnSidebarClose.addEventListener('click', closeSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeSidebar);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // Country Search Filtering
  if (countrySearchInput) {
    countrySearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      countryItems.forEach(item => {
        const country = item.getAttribute('data-country').toLowerCase();
        if (country.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Country & Language Selection
  countryItems.forEach(item => {
    const langBtns = item.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // 1. Remove selected state and check icon from all items
        countryItems.forEach(i => {
          i.classList.remove('selected');
          const checkIcon = i.querySelector('.check-icon');
          if (checkIcon) {
            checkIcon.remove();
          }
        });

        // 2. Add selected state to current item and prepend check icon
        item.classList.add('selected');
        const nameEl = item.querySelector('.country-name');
        if (!nameEl.querySelector('.check-icon')) {
          const checkSpan = document.createElement('span');
          checkSpan.className = 'check-icon';
          checkSpan.textContent = '✓';
          nameEl.insertBefore(checkSpan, nameEl.firstChild);
        }

        // 3. Update active language button
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active-lang'));
        btn.classList.add('active-lang');

        // 4. Update header link content
        const flag = item.getAttribute('data-flag');
        const currency = item.getAttribute('data-currency');
        const lang = btn.getAttribute('data-lang');
        if (regionLink) {
          regionLink.innerHTML = `<span class="flag-emoji">${flag}</span> ${lang}/${currency}`;
        }
        
        const btnMobileRegion = document.getElementById('btnMobileRegion');
        if (btnMobileRegion) {
          btnMobileRegion.innerHTML = `<span class="flag-emoji">${flag}</span> ${lang}/${currency} (CHANGE)`;
        }

        const btnFooterRegion = document.getElementById('btnFooterRegion');
        if (btnFooterRegion) {
          btnFooterRegion.textContent = `${lang} / ${currency}`;
        }

        // 5. Dynamic Theme Update & Language Switch & Toast
        const countryName = item.getAttribute('data-country');
        const themeInfo = countryThemes[countryName] || { img: 'assets/nanobanana_hero_bg.jpg', theme: 'GOLD' };
        activeTheme = themeInfo.theme;
        changeHeroBackground(themeInfo.img);
        
        changeLanguage(lang);
        updatePrices(currency);
        
        const template = translations[currentLanguage].regionToast;
        const formattedMsg = template
          .replace('{country}', countryName)
          .replace('{lang}', lang)
          .replace('{currency}', currency);
        showNotification(formattedMsg);

        // 6. Close sidebar
        closeSidebar();
      });
    });
  });

  // Toast notification helper
  function showNotification(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.position = 'fixed';
      container.style.bottom = '24px';
      container.style.right = '24px';
      container.style.zIndex = '9999';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.gap = '8px';
      document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.background = 'rgba(13, 13, 13, 0.9)';
    toast.style.color = 'var(--color-white)';
    toast.style.borderLeft = '4px solid var(--color-white)';
    toast.style.padding = '12px 24px';
    toast.style.fontSize = '0.85rem';
    toast.style.fontWeight = '600';
    toast.style.letterSpacing = '0.05em';
    toast.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    toast.style.backdropFilter = 'blur(10px)';
    toast.style.transform = 'translateX(120%)';
    toast.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
    
    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(0)';
    });
    
    // Animate out and remove
    setTimeout(() => {
      toast.style.transform = 'translateX(120%)';
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 3000);
  }

  // Horizontal Scroll Carousel Navigation (for scrollable viewports)
  const springGrid = document.querySelector('.product-carousel-section .product-grid');
  const btnCarouselPrev = document.getElementById('btnCarouselPrev');
  const btnCarouselNext = document.getElementById('btnCarouselNext');

  if (springGrid && btnCarouselPrev && btnCarouselNext) {
    btnCarouselPrev.addEventListener('click', () => {
      const colWidth = springGrid.querySelector('.product-column').offsetWidth;
      springGrid.scrollBy({ left: -colWidth, behavior: 'smooth' });
    });
    
    btnCarouselNext.addEventListener('click', () => {
      const colWidth = springGrid.querySelector('.product-column').offsetWidth;
      springGrid.scrollBy({ left: colWidth, behavior: 'smooth' });
    });
  }

  const hikingGrid = document.getElementById('hikingProductGrid');
  const btnHikingCarouselPrev = document.getElementById('btnHikingCarouselPrev');
  const btnHikingCarouselNext = document.getElementById('btnHikingCarouselNext');

  if (hikingGrid && btnHikingCarouselPrev && btnHikingCarouselNext) {
    btnHikingCarouselPrev.addEventListener('click', () => {
      const colWidth = hikingGrid.querySelector('.product-column').offsetWidth;
      hikingGrid.scrollBy({ left: -colWidth, behavior: 'smooth' });
    });
    
    btnHikingCarouselNext.addEventListener('click', () => {
      const colWidth = hikingGrid.querySelector('.product-column').offsetWidth;
      hikingGrid.scrollBy({ left: colWidth, behavior: 'smooth' });
    });
  }

  const walkingGrid = document.getElementById('walkingProductGrid');
  const btnWalkingCarouselPrev = document.getElementById('btnWalkingCarouselPrev');
  const btnWalkingCarouselNext = document.getElementById('btnWalkingCarouselNext');

  if (walkingGrid && btnWalkingCarouselPrev && btnWalkingCarouselNext) {
    btnWalkingCarouselPrev.addEventListener('click', () => {
      const colWidth = walkingGrid.querySelector('.product-column').offsetWidth;
      walkingGrid.scrollBy({ left: -colWidth, behavior: 'smooth' });
    });
    
    btnWalkingCarouselNext.addEventListener('click', () => {
      const colWidth = walkingGrid.querySelector('.product-column').offsetWidth;
      walkingGrid.scrollBy({ left: colWidth, behavior: 'smooth' });
    });
  }

  const categoryGrid = document.getElementById('categoryProductGrid');
  const btnCategoryPrev = document.getElementById('btnCategoryPrev');
  const btnCategoryNext = document.getElementById('btnCategoryNext');

  if (categoryGrid && btnCategoryPrev && btnCategoryNext) {
    btnCategoryPrev.addEventListener('click', () => {
      const colWidth = categoryGrid.querySelector('.product-column').offsetWidth;
      categoryGrid.scrollBy({ left: -colWidth, behavior: 'smooth' });
    });
    
    btnCategoryNext.addEventListener('click', () => {
      const colWidth = categoryGrid.querySelector('.product-column').offsetWidth;
      categoryGrid.scrollBy({ left: colWidth, behavior: 'smooth' });
    });
  }

  // Footer Theme Switcher Trigger
  const themeBtns = document.querySelectorAll('.footer-theme-btn');
  
  const applyTheme = (theme) => {
    themeBtns.forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.querySelector(`.footer-theme-btn[data-theme="${theme}"]`);
    if (targetBtn) targetBtn.classList.add('active');

    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
      document.body.classList.remove('light-theme');
    } else {
      // System Theme Evaluation
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
      }
    }
  };

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTheme = btn.getAttribute('data-theme');
      localStorage.setItem('theme', selectedTheme);
      applyTheme(selectedTheme);
    });
  });

  // Initialize theme from storage
  const savedTheme = localStorage.getItem('theme') || 'system';
  applyTheme(savedTheme);

  // Monitor system color theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('theme') === 'system' || !localStorage.getItem('theme')) {
      applyTheme('system');
    }
  });

  // Footer Region modal slideout trigger binding
  const btnFooterRegion = document.getElementById('btnFooterRegion');
  if (btnFooterRegion) {
    btnFooterRegion.addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar();
    });
  }

  // Footer Floating Footwear Hover Trail Animation
  const footer = document.querySelector('.brand-footer');
  const trailContainer = document.getElementById('footerHoverTrail');
  
  if (footer && trailContainer) {
    const shoeImages = [
      'assets/walking_cloud_default.jpg',
      'assets/hiking_peak_default.jpg',
      'assets/product_eli_olive_default.jpg',
      'assets/walking_dawn_default.jpg',
      'assets/hiking_ridge_default.jpg',
      'assets/product_eli_blue_default.jpg'
    ];

    let lastX = 0;
    let lastY = 0;
    let lastSpawnTime = 0;
    let shoeIndex = 0;

    footer.addEventListener('mousemove', (e) => {
      // Avoid active links, buttons, search inputs, list elements, and SVGs
      const targetTag = e.target.tagName.toLowerCase();
      if (
        targetTag === 'a' || 
        targetTag === 'button' || 
        targetTag === 'input' || 
        targetTag === 'text' || 
        targetTag === 'rect' ||
        targetTag === 'line' ||
        targetTag === 'circle' ||
        targetTag === 'path' ||
        e.target.closest('svg') || 
        e.target.closest('ul') || 
        e.target.closest('.footer-column:not(.footer-newsletter-column)')
      ) {
        return;
      }

      const rect = footer.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      // Calculate distance moved since last spawn
      const distance = Math.hypot(currentX - lastX, currentY - lastY);
      const now = Date.now();

      // Only spawn if mouse has moved at least 110px and at least 200ms has passed
      if (distance > 110 && now - lastSpawnTime > 200) {
        lastX = currentX;
        lastY = currentY;
        lastSpawnTime = now;

        const card = document.createElement('div');
        card.className = 'floating-shoe-card';
        card.style.left = `${currentX}px`;
        card.style.top = `${currentY}px`;

        // Slight randomized rotation offset for slick organic feeling
        const rot = (Math.random() * 20 - 10).toFixed(1);
        card.style.transform = `translate(-50%, -50%) scale(0.3) rotate(${rot}deg)`;

        const img = document.createElement('img');
        img.src = shoeImages[shoeIndex];
        img.alt = 'AERIS Footwear preview';
        card.appendChild(img);

        trailContainer.appendChild(card);

        // Cycle next shoe index
        shoeIndex = (shoeIndex + 1) % shoeImages.length;

        // Animate spring-in in next layout frame
        requestAnimationFrame(() => {
          card.classList.add('active');
          card.style.transform = `translate(-50%, -50%) scale(1) rotate(${rot}deg)`;
        });

        // Trigger fade out after 700ms
        setTimeout(() => {
          card.classList.add('fade-out');
          card.classList.remove('active');
          
          // Clear element after transitions fade out
          setTimeout(() => {
            card.remove();
          }, 1200);
        }, 700);
      }
    });
  }

  // Mobile Navigation Drawer Implementation
  const btnHamburger = document.getElementById('btnHamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const btnMobileDrawerClose = document.getElementById('btnMobileDrawerClose');
  
  // Query elements inside mobileDrawer for high safety
  const shoesContainer = mobileDrawer ? mobileDrawer.querySelector('.drawer-cat-block:first-child .drawer-cat-links') : null;
  const apparelContainer = mobileDrawer ? mobileDrawer.querySelector('.drawer-cat-block:last-child .drawer-cat-links') : null;
  const shoesTitle = mobileDrawer ? mobileDrawer.querySelector('.drawer-cat-block:first-child .drawer-cat-title') : null;
  const apparelTitle = mobileDrawer ? mobileDrawer.querySelector('.drawer-cat-block:last-child .drawer-cat-title') : null;

  const tabContents = {
    women: {
      shoes: [
        { text: 'New Arrivals', href: '#shop-all' },
        { text: 'Sneakers', href: '#shop-all' },
        { text: 'Walking Shoes', href: '#walking-shoes', highlight: true },
        { text: 'Hiking Shoes', href: '#hiking-shoes' },
        { text: 'Waterproof Shoes', href: '#shop-all' },
        { text: 'Trail Running Shoes', href: '#shop-all' },
        { text: 'Winter Boots', href: '#shop-all' },
        { text: 'Studded Winter Boots', href: '#shop-all' },
        { text: 'Winter Running Shoes', href: '#shop-all' },
        { text: 'Outlet', href: '#shop-all' },
        { text: 'All Shoes', href: '#shop-all', medium: true }
      ],
      apparel: [
        { text: 'Apparel', href: '#shop-all' },
        { text: 'Accessories', href: '#shop-all' },
        { text: 'Icebug Insoles', href: '#shop-all' },
        { text: 'Shop All', href: '#shop-all', medium: true }
      ]
    },
    men: {
      shoes: [
        { text: 'New Arrivals', href: '#shop-all' },
        { text: 'Sneakers', href: '#shop-all' },
        { text: 'Walking Shoes', href: '#walking-shoes' },
        { text: 'Hiking Shoes', href: '#hiking-shoes', highlight: true },
        { text: 'Waterproof Shoes', href: '#shop-all' },
        { text: 'Trail Running Shoes', href: '#shop-all' },
        { text: 'Winter Boots', href: '#shop-all' },
        { text: 'Studded Winter Boots', href: '#shop-all' },
        { text: 'Winter Running Shoes', href: '#shop-all' },
        { text: 'Outlet', href: '#shop-all' },
        { text: 'All Shoes', href: '#shop-all', medium: true }
      ],
      apparel: [
        { text: 'Apparel', href: '#shop-all' },
        { text: 'Accessories', href: '#shop-all' },
        { text: 'Icebug Insoles', href: '#shop-all' },
        { text: 'Shop All', href: '#shop-all', medium: true }
      ]
    },
    impact: {
      shoes: [
        { text: 'Restoring Biodiversity', href: '#impact', highlight: true },
        { text: 'Zero Petroleum Plastics', href: '#impact' },
        { text: 'Carbon Footprint Transparency', href: '#impact' },
        { text: 'B-Corp Certification Standards', href: '#impact' }
      ],
      apparel: [
        { text: '1% for the Planet', href: '#impact' },
        { text: 'Race to Zero Action', href: '#impact' },
        { text: 'Fair Wear Foundation', href: '#impact' }
      ]
    },
    shoefinder: {
      shoes: [
        { text: 'Find Your Perfect Fit', href: '#shoe-finder', highlight: true },
        { text: 'Take the Shoe Finder Quiz', href: '#shoe-finder' },
        { text: 'Trail Running Selector', href: '#shoe-finder' },
        { text: 'Walking Cloud Test', href: '#shoe-finder' }
      ],
      apparel: [
        { text: 'Sizing Guidelines', href: '#shoe-finder' },
        { text: 'Fit Diagnostics', href: '#shoe-finder' }
      ]
    }
  };

  function renderTabContent(tabName) {
    const data = tabContents[tabName];
    if (!data) return;

    if (shoesTitle) {
      if (tabName === 'impact') {
        shoesTitle.textContent = 'CLIMATE & SUSTAINABILITY';
      } else if (tabName === 'shoefinder') {
        shoesTitle.textContent = 'SHOE FINDER CONSOLE';
      } else {
        shoesTitle.textContent = 'SHOES';
      }
    }

    if (apparelTitle) {
      if (tabName === 'impact') {
        apparelTitle.textContent = 'PARTNERSHIPS';
      } else if (tabName === 'shoefinder') {
        apparelTitle.textContent = 'RESOURCES';
      } else {
        apparelTitle.textContent = 'APPAREL & ACCESSORIES';
      }
    }

    if (shoesContainer) {
      shoesContainer.innerHTML = '';
      data.shoes.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.className = 'mobile-drawer-link';
        a.textContent = item.text;
        if (item.highlight) a.classList.add('highlighted');
        if (item.medium) a.classList.add('font-medium');
        a.addEventListener('click', () => closeMobileDrawer());
        li.appendChild(a);
        shoesContainer.appendChild(li);
      });
    }

    if (apparelContainer) {
      apparelContainer.innerHTML = '';
      data.apparel.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.className = 'mobile-drawer-link';
        a.textContent = item.text;
        if (item.highlight) a.classList.add('highlighted');
        if (item.medium) a.classList.add('font-medium');
        a.addEventListener('click', () => closeMobileDrawer());
        li.appendChild(a);
        apparelContainer.appendChild(li);
      });
    }
  }

  // Initialize women tab dynamically on load
  if (mobileDrawer) {
    renderTabContent('women');
  }

  function openMobileDrawer() {
    console.log('openMobileDrawer called. mobileDrawer:', mobileDrawer, 'sidebarBackdrop:', sidebarBackdrop);
    if (mobileDrawer && sidebarBackdrop) {
      sidebarBackdrop.classList.add('active');
      mobileDrawer.classList.add('active');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      sidebarBackdrop.setAttribute('aria-hidden', 'false');
      if (btnHamburger) btnHamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
      console.log('mobileDrawer active class added. Classes:', mobileDrawer.className);
    }
  }

  function closeMobileDrawer() {
    console.log('closeMobileDrawer called. mobileDrawer:', mobileDrawer, 'sidebarBackdrop:', sidebarBackdrop);
    if (mobileDrawer && sidebarBackdrop) {
      const sidebarContainer = document.getElementById('sidebarContainer');
      if (!sidebarContainer || !sidebarContainer.classList.contains('active')) {
        sidebarBackdrop.classList.remove('active');
        sidebarBackdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      mobileDrawer.classList.remove('active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      if (btnHamburger) btnHamburger.classList.remove('active');
      console.log('mobileDrawer active class removed. Classes:', mobileDrawer.className);
    }
  }

  if (btnHamburger && mobileDrawer) {
    console.log('Hamburger click listener registered successfully. btnHamburger:', btnHamburger, 'mobileDrawer:', mobileDrawer);
    btnHamburger.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Hamburger button clicked! mobileDrawer active status:', mobileDrawer.classList.contains('active'));
      if (mobileDrawer.classList.contains('active')) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  } else {
    console.warn('Hamburger button click binding failed! btnHamburger:', btnHamburger, 'mobileDrawer:', mobileDrawer);
  }

  if (btnMobileDrawerClose) {
    btnMobileDrawerClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileDrawer();
    });
  }

  // Categories switcher tab handlers
  const tabBtns = document.querySelectorAll('.drawer-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      renderTabContent(tab);
    });
  });

  // Header Actions within Mobile Drawer (Search & Cart)
  const btnMobileSearch = document.getElementById('btnMobileSearch');
  if (btnMobileSearch) {
    btnMobileSearch.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileDrawer();
      const linkSearch = document.getElementById('linkSearch');
      if (linkSearch) linkSearch.click();
    });
  }

  const btnMobileCart = document.getElementById('btnMobileCart');
  if (btnMobileCart) {
    btnMobileCart.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileDrawer();
      const linkCart = document.getElementById('linkCart');
      if (linkCart) linkCart.click();
    });
  }

  // Footer location region trigger
  const btnMobileRegion = document.getElementById('btnMobileRegion');
  if (btnMobileRegion) {
    btnMobileRegion.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileDrawer();
      setTimeout(() => {
        openSidebar();
      }, 320); // Smooth slide transition
    });
  }

  // Ensure backdrop click closes mobile drawer
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => {
      closeMobileDrawer();
    });
  }
});
