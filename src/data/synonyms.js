// Deutsches Thesaurus-Mapping für psychologische Klientensprache.
// Schlüssel: Begriff wie der Klient ihn nennt.
// Wert: Array von Stichwörtern, die in den Disorder-Keywords gesucht werden.

export const synonymMap = {
  // Schuld & Scham
  'schuld': ['selbstwert', 'scham', 'selbstkritik', 'minderwertig'],
  'scham': ['selbstwert', 'selbstkritik', 'unsicher', 'soziale angst'],
  'schuldgefühle': ['selbstwert', 'scham', 'selbstkritik'],
  'schuldgefühl': ['selbstwert', 'scham', 'selbstkritik'],
  'sich schämen': ['selbstwert', 'scham', 'unsicher'],
  'ich bin schuld': ['selbstwert', 'scham', 'selbstkritik'],

  // Selbstwert / Kritik
  'selbstzweifel': ['selbstwert', 'selbstkritik'],
  'minderwertig': ['selbstwert', 'minderwertig'],
  'nicht gut genug': ['selbstwert', 'minderwertig'],
  'ich bin nicht gut genug': ['selbstwert', 'minderwertig'],
  'versager': ['selbstwert', 'selbstkritik', 'minderwertig'],
  'versagen': ['selbstwert', 'versagensangst'],
  'innere kritik': ['selbstwert', 'selbstkritik'],
  'innerer kritiker': ['selbstwert', 'selbstkritik', 'innerer konflikt'],
  'selbstablehnung': ['selbstwert', 'scham', 'identität'],
  'selbsthass': ['selbstwert', 'scham', 'depression'],
  'wertlos': ['selbstwert', 'depression', 'minderwertig'],

  // Angst
  'nervös': ['angst', 'prüfungsangst', 'soziale angst'],
  'aufgeregt': ['angst', 'prüfungsangst'],
  'beunruhigt': ['angst'],
  'sorgen': ['angst', 'prüfungsangst'],
  'sorge': ['angst'],
  'sich sorgen': ['angst'],
  'überängstlich': ['angst', 'panik'],
  'herzrasen': ['angst', 'panik', 'panikattacke'],
  'zittern': ['angst', 'panik'],
  'schweißausbrüche': ['angst', 'panik', 'phobie'],
  'überflutung': ['angst', 'trauma', 'panik'],
  'überwältigt': ['angst', 'trauma', 'burnout'],
  'hilflos': ['angst', 'trauma', 'depression'],

  // Trauma & Verletzung
  'verletzt': ['trauma', 'beziehung', 'trauer'],
  'verletzung': ['trauma', 'beziehung'],
  'wunden': ['trauma', 'beziehung', 'trauer'],
  'seelische wunde': ['trauma', 'beziehung'],
  'narben': ['trauma', 'beziehung'],
  'misshandlung': ['trauma', 'missbrauch'],
  'gewalt': ['trauma', 'missbrauch'],
  'übergriff': ['trauma', 'missbrauch'],
  'albtraum': ['trauma', 'ptbs', 'flashback'],
  'bilder': ['trauma', 'flashback', 'ptbs'],
  'intrusion': ['trauma', 'flashback', 'ptbs'],
  'erstarren': ['trauma', 'panik'],
  'schreckhaft': ['trauma', 'ptbs'],
  'hypervigilanz': ['trauma', 'ptbs'],
  'kontrollverlust': ['trauma', 'panik', 'angst'],

  // Depression & Antrieb
  'leer': ['depression', 'identität', 'burnout'],
  'innere leere': ['identität', 'depression'],
  'sinnlos': ['identität', 'depression'],
  'apathisch': ['depression', 'burnout', 'antriebslos'],
  'erschöpft': ['burnout', 'erschöpfung'],
  'keine motivation': ['prokrastination', 'depression', 'burnout'],
  'demotiviert': ['prokrastination', 'depression'],
  'antriebslos': ['prokrastination', 'burnout', 'depression'],
  'freudlos': ['depression'],
  'schwere': ['depression', 'trauer'],
  'lebensfreude': ['depression', 'burnout'],
  'hoffnungslos': ['depression', 'identität'],
  'lähmung': ['prokrastination', 'angst', 'trauma'],

  // Trauer & Verlust
  'trauer': ['trauer', 'verlust'],
  'trauern': ['trauer', 'verlust'],
  'verlust': ['trauer', 'verlust'],
  'abschiednehmen': ['trauer', 'verlust'],
  'vermissen': ['trauer', 'beziehung'],
  'einsamkeit': ['trauer', 'selbstwert', 'depression'],
  'einsam': ['trauer', 'selbstwert', 'depression'],
  'verwaist': ['trauer', 'verlust'],
  'trennungsschmerz': ['trauer', 'beziehung'],
  'abgelehnt': ['selbstwert', 'beziehung', 'scham'],

  // Beziehung & Bindung
  'bindungsangst': ['angst', 'beziehung'],
  'verlassenwerden': ['beziehung', 'angst', 'trauma'],
  'verlassen': ['beziehung', 'trauer', 'trauma'],
  'misstrauen': ['beziehung', 'trauma'],
  'vertrauen': ['beziehung', 'trauma'],
  'eltern': ['beziehung', 'prägung'],
  'kindheit': ['beziehung', 'prägung'],
  'mutter': ['beziehung', 'prägung'],
  'vater': ['beziehung', 'prägung'],
  'prägung': ['beziehung', 'prägung'],

  // Innerer Konflikt
  'ambivalenz': ['innerer konflikt', 'zwang'],
  'zerrissenheit': ['innerer konflikt'],
  'hin- und hergerissen': ['innerer konflikt'],
  'entscheidung': ['innerer konflikt', 'prokrastination'],
  'entscheiden': ['innerer konflikt', 'prokrastination'],
  'unentschlossen': ['innerer konflikt'],
  'ja und nein': ['innerer konflikt'],
  'widerspruch': ['innerer konflikt'],
  'teilekonflikt': ['innerer konflikt'],
  'innerer kampf': ['innerer konflikt'],
  'selbstsabotage': ['innerer konflikt', 'zwang'],
  'sabotage': ['innerer konflikt', 'zwang'],

  // Zwang & Gewohnheit
  'ritual': ['zwang'],
  'kontrollzwang': ['zwang'],
  'suchtdruck': ['zwang', 'sucht'],
  'rückfall': ['zwang', 'sucht'],
  'grübeln': ['zwang', 'depression', 'angst'],
  'gedankenkarussell': ['zwang', 'angst', 'depression'],
  'gedankenspiralen': ['zwang', 'angst'],
  'nicht loslassen': ['zwang', 'trauer', 'beziehung'],
  'loslassen': ['zwang', 'trauer', 'beziehung'],

  // Burnout & Stress
  'überfordert': ['burnout', 'angst'],
  'überforderung': ['burnout', 'angst'],
  'stress': ['burnout', 'angst'],
  'ausbrennen': ['burnout'],
  'keine kraft': ['burnout', 'depression'],
  'kraftlosigkeit': ['burnout', 'depression'],
  'erschöpfung': ['burnout'],
  'erholungsunfähig': ['burnout'],

  // Identität & Sinn
  'wer bin ich': ['identität'],
  'sinnkrise': ['identität'],
  'lebensinn': ['identität', 'depression'],
  'orientierungslosigkeit': ['identität', 'depression'],
  'nicht ich selbst': ['identität', 'selbstwert'],
  'unecht': ['identität', 'selbstwert'],
  'maske': ['identität', 'selbstwert'],
  'fassade': ['identität', 'selbstwert'],

  // Glaubenssätze
  'glaubenssatz': ['glaubenssatz', 'überzeugung'],
  'glaubenssätze': ['glaubenssatz'],
  'überzeugung': ['glaubenssatz'],
  'ich kann nicht': ['glaubenssatz', 'selbstwert'],
  'ich schaffe das nicht': ['glaubenssatz', 'selbstwert'],
  'ich bin so': ['glaubenssatz', 'identität'],
  'so bin ich halt': ['glaubenssatz', 'identität'],
  'das geht bei mir nicht': ['glaubenssatz'],
  'prägung': ['beziehung', 'prägung', 'glaubenssatz'],
  'frühe erfahrung': ['beziehung', 'prägung', 'glaubenssatz'],
  'reimprinting': ['glaubenssatz', 'prägung'],

  // Innere Stimme
  'innere stimme': ['innere stimme'],
  'kritische stimme': ['innere stimme', 'selbstwert'],
  'stimme im kopf': ['innere stimme'],
  'negativer satz': ['innere stimme'],
  'selbstgespräch': ['innere stimme', 'selbstwert'],
  'es flüstert': ['innere stimme'],

  // Allergie / Psychosomatik
  'allergie': ['allergie'],
  'allergisch': ['allergie'],
  'heuschnupfen': ['allergie'],
  'immunsystem': ['allergie'],
  'körperliche reaktion': ['allergie'],
  'psychosomatisch': ['allergie', 'burnout'],
  'überreaktion': ['allergie', 'angst'],

  // Emotionale Abhängigkeit
  'klammern': ['abhängigkeit', 'beziehung'],
  'co-abhängig': ['abhängigkeit'],
  'symbiotisch': ['abhängigkeit'],
  'brauche diese person': ['abhängigkeit'],
  'nicht loslassen': ['abhängigkeit', 'trauer', 'beziehung'],
  'enmeshment': ['abhängigkeit'],
  'verstrickung': ['abhängigkeit', 'beziehung'],

  // Kreativität & Planung
  'kreativität': ['kreativität'],
  'kreativ': ['kreativität'],
  'keine ideen': ['kreativität'],
  'ideen': ['kreativität'],
  'planung': ['kreativität', 'prokrastination'],
  'entscheidung treffen': ['kreativität', 'innerer konflikt'],
  'wie soll ich entscheiden': ['kreativität', 'innerer konflikt'],

  // Werte
  'werte': ['werte'],
  'prioritäten': ['werte'],
  'was ist wichtig': ['werte', 'identität'],
  'wertekonflikt': ['werte', 'innerer konflikt'],
  'falsche prioritäten': ['werte'],

  // Neues Verhalten
  'ich weiß nicht wie': ['neues-verhalten'],
  'neue fähigkeit': ['neues-verhalten'],
  'kompetenz': ['neues-verhalten', 'selbstwert'],
  'auftritt': ['ressourcen', 'angst'],
  'präsentation': ['ressourcen', 'angst', 'prüfungsangst'],
  'vorbereitung': ['ressourcen'],

  // Körperliche Beschwerden mit psychischem Hintergrund
  'magenprobleme': ['angst', 'burnout'],
  'kopfschmerzen': ['stress', 'burnout', 'angst'],
  'verspannung': ['stress', 'burnout', 'trauma'],
  'schlafprobleme': ['schlaf', 'angst', 'burnout', 'trauma', 'depression'],
  'schlaflosigkeit': ['schlaf', 'angst', 'burnout', 'trauma'],
  'einschlafen': ['schlaf'],
  'einschlafstörung': ['schlaf'],
  'nachts wach': ['schlaf'],
  'nicht abschalten': ['schlaf', 'burnout'],
  'gedankenkarussell': ['schlaf', 'zwang', 'angst'],

  // Reframing & Bedeutung
  'bedeutung': ['reframing', 'glaubenssatz'],
  'rahmen': ['reframing'],
  'perspektive': ['reframing', 'innerer konflikt'],
  'sichtweise': ['reframing'],
  'es bedeutet': ['reframing', 'glaubenssatz'],
  'interpretation': ['reframing'],
  'ich bin zu': ['reframing', 'selbstwert'],

  // Selbstbild & Kritik
  'selbstbild': ['selbstbild', 'selbstwert'],
  'kritik annehmen': ['selbstbild', 'selbstwert'],
  'autoritätsangst': ['selbstbild'],
  'chef': ['selbstbild', 'angst'],
  'vorgesetzter': ['selbstbild', 'angst'],
  'zu hilfsbereit': ['selbstbild'],
  'nein sagen': ['selbstbild', 'abhängigkeit'],
  'nörgelstimme': ['innere stimme', 'selbstbild'],
  'innerer nörgler': ['innere stimme', 'selbstbild'],

  // Submodalitäten
  'bilder loswerden': ['submodalitäten'],
  'peinliche erinnerung': ['submodalitäten'],
  'belastende bilder': ['submodalitäten', 'trauma'],
  'innere bilder verändern': ['submodalitäten'],
  'rückwärts': ['submodalitäten'],

  // Motivation & Ziele
  'ziel': ['motivation-ziele', 'kreativität'],
  'vorsatz': ['motivation-ziele', 'prokrastination'],
  'nicht umsetzen': ['motivation-ziele', 'prokrastination'],
  'aufscheben': ['prokrastination', 'motivation-ziele'],
  'zukunft gestalten': ['motivation-ziele', 'timeline'],
  'antrieb fehlt': ['motivation-ziele', 'burnout'],

  // Timeline
  'zeitlinie': ['timeline', 'glaubenssatz'],
  'vergangenheit loslassen': ['timeline', 'trauma'],
  'muster durch leben': ['timeline', 'beziehung'],
  'prägung': ['timeline', 'beziehung', 'glaubenssatz'],
  'zukunftsangst': ['timeline', 'angst'],

  // Trance & Hypnose
  'trance': ['trance'],
  'hypnose': ['trance'],
  'entspannung': ['trance', 'ressourcen'],
  'tiefenentspannung': ['trance'],
  'unbewusstes': ['trance', 'innere teile'],
  'unbewusst': ['trance', 'innere teile'],

  // Innere Teile
  'innere teile': ['innere teile'],
  'persönlichkeitsanteil': ['innere teile'],
  'ein teil von mir': ['innere teile', 'innerer konflikt'],
  'widersprüchliche teile': ['innere teile', 'innerer konflikt'],

  // Anker
  'anker': ['anker-ressourcen'],
  'zustand abrufen': ['anker-ressourcen', 'ressourcen'],
  'automatisch reagieren': ['anker-ressourcen', 'zwang'],

  // Familie & Herkunft
  'familienaufstellung': ['innere teile', 'beziehung'],
  'herkunftsfamilie': ['timeline', 'beziehung'],
  'stammbaum': ['timeline', 'beziehung'],
  'transgenerational': ['timeline', 'beziehung'],
  'familienmuster': ['timeline', 'beziehung', 'innere teile'],
};

// Normalisiert einen Eingabestring für den Vergleich
export function normalizeQuery(q) {
  return q.toLowerCase().trim()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/\s+/g, ' ');
}

// Gibt alle Stichwörter zurück, die für eine Eingabe relevant sein könnten
export function expandQuery(rawQuery) {
  const q = rawQuery.toLowerCase().trim();
  const terms = new Set([q]);

  // Direkte Treffer im Thesaurus
  Object.entries(synonymMap).forEach(([key, values]) => {
    if (key.includes(q) || q.includes(key)) {
      values.forEach(v => terms.add(v));
    }
  });

  // Wortweise: bei mehrteiligen Eingaben ("Schuld und Scham")
  const words = q.split(/\s+und\s+|\s*,\s*|\s+/);
  words.forEach(word => {
    if (word.length < 3) return;
    Object.entries(synonymMap).forEach(([key, values]) => {
      if (key.includes(word) || word.includes(key)) {
        values.forEach(v => terms.add(v));
      }
    });
  });

  return Array.from(terms);
}
