export const disorders = [
  {
    id: 'phobie',
    label: 'Phobie / Spezifische Angst',
    keywords: ['phobie', 'spinne', 'hund', 'hunde', 'fliegen', 'höhe', 'höhenangst', 'nadel', 'blut', 'dunkel', 'enge', 'lift', 'fahrstuhl', 'tier', 'schlange', 'fastphobia'],
    interventionen: ['phobietechnik', 'phobietechnik-ressource', 'fastphobia', 'phobietechnik-entscheidungspunkt'],
  },
  {
    id: 'angst',
    label: 'Angst / Panik',
    keywords: ['angst', 'panik', 'panikattacke', 'prüfungsangst', 'soziale angst', 'öffentlich sprechen', 'redeangst', 'versagensangst'],
    interventionen: ['phobietechnik-ressource', 'changing-history', 'sixstep-reframing', 'unangemessene-aengste', 'angst-und-furcht-aendern', 'sich-trauen'],
  },
  {
    id: 'trauma',
    label: 'Trauma / PTBS',
    keywords: ['trauma', 'ptbs', 'ptsd', 'flashback', 'missbrauch', 'unfall', 'schock', 'übergriff', 'kriegserlebnis', 'belastung', 'traumatisch'],
    interventionen: ['phobietechnik-ressource', 'changing-history'],
  },
  {
    id: 'depression',
    label: 'Depression / Niedergeschlagenheit',
    keywords: ['depression', 'depressiv', 'niedergeschlagen', 'traurig', 'hoffnungslos', 'freudlos', 'schwermut', 'lebensfreude', 'schwere'],
    interventionen: ['core-transformation', 'changing-history', 'mentoren-technik', 'selbstbildarbeit', 'resonanz-muster'],
  },
  {
    id: 'selbstwert',
    label: 'Selbstwert / Unsicherheit',
    keywords: ['selbstwert', 'selbstbewusstsein', 'selbstvertrauen', 'minderwertig', 'unsicher', 'selbstkritik', 'selbstzweifel', 'nicht gut genug', 'schüchtern'],
    interventionen: ['core-transformation', 'mentoren-technik', 'changing-history'],
  },
  {
    id: 'innerer-konflikt',
    label: 'Innerer Konflikt / Ambivalenz',
    keywords: ['konflikt', 'ambivalenz', 'zerrissen', 'unentschlossen', 'hin- und hergerissen', 'innerer kampf', 'widerspruch', 'teilekonflikt'],
    interventionen: ['sixstep-reframing', 'core-transformation', 'standpunktwechsel', 'konfliktintegration-trance', 'anker-kollabieren'],
  },
  {
    id: 'zwang-gewohnheit',
    label: 'Zwang / Ungewünschte Gewohnheit',
    keywords: ['zwang', 'zwangsverhalten', 'gewohnheit', 'sucht', 'abhängigkeit', 'rauchen', 'aufhören', 'wiederholung', 'ritual', 'kontrollzwang', 'putzzwang'],
    interventionen: ['sixstep-reframing', 'changing-history', 'compulsion-blowout', 'kinaesthetischer-swish', 'raucher-entwoehnung'],
  },
  {
    id: 'prokrastination',
    label: 'Prokrastination / Blockade',
    keywords: ['prokrastination', 'aufschieberitis', 'blockade', 'blockiert', 'lähmung', 'nicht anfangen', 'nicht handeln', 'antriebslos'],
    interventionen: ['sixstep-reframing', 'mentoren-technik', 'blockaden-aufloesen', 'sich-trauen', 'motivation'],
  },
  {
    id: 'burnout',
    label: 'Burnout / Erschöpfung',
    keywords: ['burnout', 'erschöpfung', 'kraftlos', 'müde', 'keine energie', 'ausgebrannt', 'stress', 'überforderung', 'erschöpft'],
    interventionen: ['mentoren-technik', 'core-transformation'],
  },
  {
    id: 'trauer',
    label: 'Trauer / Verlust',
    keywords: ['trauer', 'trauern', 'verlust', 'tod', 'sterben', 'abschiednehmen', 'trennung', 'abschied', 'vermissen'],
    interventionen: ['changing-history', 'core-transformation'],
  },
  {
    id: 'beziehung',
    label: 'Beziehungsmuster / Prägungen',
    keywords: ['beziehung', 'prägung', 'muster', 'eltern', 'kindheit', 'bindung', 'verlassenwerden', 'wiederholung', 'partner'],
    interventionen: ['changing-history', 'core-transformation', 'sixstep-reframing', 'reimprinting-zeitlinie-eltern', 'familienaufstellung', 'selbstheilung'],
  },
  {
    id: 'identitaet',
    label: 'Identität / Sinnkrise',
    keywords: ['identität', 'sinn', 'sinnlos', 'wer bin ich', 'leere', 'innere leere', 'nicht ich selbst', 'sinnkrise', 'selbstfindung'],
    interventionen: ['core-transformation', 'mentoren-technik'],
  },
  {
    id: 'allergie',
    label: 'Allergie / Psychosomatik',
    keywords: ['allergie', 'allergisch', 'heuschnupfen', 'immunsystem', 'körperliche reaktion', 'psychosomatisch', 'überreaktion'],
    interventionen: ['allergie-prozess', 'gesundsein-erleben'],
  },
  {
    id: 'glaubenssatz',
    label: 'Limitierende Glaubenssätze',
    keywords: ['glaubenssatz', 'überzeugung', 'ich kann nicht', 'ich bin nicht gut genug', 'ich schaffe das nicht', 'einschränkend', 'limitierend', 'ich bin so'],
    interventionen: ['glaubensveraenderungsprozess', 'reimprinting', 'decision-destroyer', 'swish-mit-glaubenssaetzen', 'konstruktion-von-glaubenssaetzen', 'resonanz-muster'],
  },
  {
    id: 'werte',
    label: 'Wertekonflikte / Prioritäten',
    keywords: ['werte', 'prioritäten', 'wertehierarchie', 'wertekonflikt', 'was ist wichtig', 'falsche prioritäten'],
    interventionen: ['wertewandel-i', 'wertewandel-ii', 'core-transformation'],
  },
  {
    id: 'kreativitaet',
    label: 'Kreativität / Planung / Entscheidung',
    keywords: ['kreativität', 'kreativ', 'ideen', 'planung', 'entscheidung', 'stuck', 'keine ideen', 'wie soll ich entscheiden'],
    interventionen: ['walt-disney-strategie', 'new-behavior-generator'],
  },
  {
    id: 'innere-stimme',
    label: 'Innere Stimme / Selbstgespräche',
    keywords: ['innere stimme', 'selbstgespräch', 'negativer satz', 'kritische stimme', 'es flüstert', 'stimme im kopf'],
    interventionen: ['swish-muster', 'sixstep-reframing'],
  },
  {
    id: 'neues-verhalten',
    label: 'Neues Verhalten entwickeln',
    keywords: ['neues verhalten', 'ich weiß nicht wie', 'verhaltensziel', 'kompetenz aufbauen', 'neue fähigkeit', 'wie soll ich das machen'],
    interventionen: ['new-behavior-generator', 'mentoren-technik', 'circle-of-excellence'],
  },
  {
    id: 'ressourcen',
    label: 'Ressourcen aufbauen',
    keywords: ['ressourcen', 'kraft', 'stärke', 'sicherheit', 'zuversicht', 'vorbereitung', 'auftritt', 'präsentation'],
    interventionen: ['circle-of-excellence', 'mentoren-technik', 'changing-history', 'alignment', 'anker-kollabieren'],
  },
  {
    id: 'abhaengigkeit',
    label: 'Emotionale Abhängigkeit',
    keywords: ['abhängigkeit', 'klammern', 'co-abhängig', 'nicht loslassen können', 'brauche diese person', 'symbiotisch', 'enmeshment'],
    interventionen: ['abhaengigkeit-aufloesen', 'core-transformation'],
  },
  {
    id: 'selbstbild',
    label: 'Selbstbild / Selbstkritik / Autoritäten',
    keywords: ['selbstbild', 'selbstkritik', 'innerer kritiker', 'autoritätsangst', 'altruismus', 'kritik', 'feedback', 'zu sensibel', 'zu viel', 'zu wenig'],
    interventionen: ['selbstbildarbeit', 'umgang-mit-kritik', 'abbau-autoritaetsangst', 'abbau-zwanghafter-altruismus', 'umgang-mit-noerglerstimme'],
  },
  {
    id: 'reframing',
    label: 'Bedeutung verändern / Reframing',
    keywords: ['bedeutung', 'rahmen', 'perspektive', 'interpretation', 'sichtweise', 'es bedeutet doch', 'immer wenn', 'ich bin zu'],
    interventionen: ['bedeutungsreframing', 'kontextreframing', 'reframing-mit-submodalitaeten', 'standpunktwechsel'],
  },
  {
    id: 'glaubenssaetze-intensiv',
    label: 'Glaubenssätze intensiv bearbeiten',
    keywords: ['tiefer glaubenssatz', 'schon immer so', 'ich bin eben so', 'nie ändern', 'festgefahren', 'überzeugt', 'absoluter glaube'],
    interventionen: ['swish-mit-glaubenssaetzen', 'konstruktion-von-glaubenssaetzen', 'resonanz-muster', 'schamgefuehle-aendern', 'sleight-of-mouth'],
  },
  {
    id: 'submodalitaeten',
    label: 'Submodalitäten-Techniken',
    keywords: ['erinnerung mildern', 'bilder verändern', 'innere bilder', 'peinlich', 'belastend', 'gedanken loswerden', 'qualität verändern'],
    interventionen: ['ultrakurzzeittherapie', 'umkehrtherapie', 'dissoziationstherapie', 'synaesthesiewechsel', 'reframing-mit-submodalitaeten', 'godiva-chocolate', 'change-history-submodalitaeten', 'mapping-across'],
  },
  {
    id: 'motivation-ziele',
    label: 'Motivation / Ziele / Antrieb',
    keywords: ['motivation', 'ziel', 'antrieb', 'vorsatz', 'nicht umsetzen', 'ziele nicht erreichen', 'zielarbeit', 'planung fehlt'],
    interventionen: ['motivation', 'zielkonkretisierung', 'ziele-erreichen-bodentimeline', 'godiva-chocolate', 'sich-trauen'],
  },
  {
    id: 'timeline',
    label: 'Zeitlinien-Arbeit',
    keywords: ['zeitlinie', 'timeline', 'vergangenheit aufarbeiten', 'zukunft gestalten', 'muster durchs leben', 'prägung durch kindheit'],
    interventionen: ['reimprinting-zeitlinie-eltern', 'selbstheilung', 'change-history-bodentimeline', 'schweben-ueber-timeline', 'ziele-erreichen-bodentimeline', 'angst-und-furcht-aendern'],
  },
  {
    id: 'trance',
    label: 'Trance / Hypnotische Arbeit',
    keywords: ['trance', 'hypnose', 'entspannungszustand', 'tiefenentspannung', 'unbewusstes befragen', 'trancearbeit'],
    interventionen: ['trance-induktion-abruf', 'trance-induktion-haendeschuetteln', 'befragung-des-unbewussten', 'swish-in-trance', 'verhandlungsmodell-trance', 'core-reframing-trance', 'konfliktintegration-trance'],
  },
  {
    id: 'schlaf',
    label: 'Schlafstörungen / Einschlafen',
    keywords: ['schlaf', 'einschlafen', 'schlaflosigkeit', 'nachts wach', 'gedanken beim einschlafen', 'nicht abschalten', 'grübeln nachts'],
    interventionen: ['wahrnehmungswechsel-einschlaf', 'sixstep-reframing'],
  },
  {
    id: 'anker-ressourcen',
    label: 'Anker / Zustandsmanagement',
    keywords: ['anker', 'zustand wechseln', 'automatisch reagieren', 'ressource abrufen', 'selbststeuerung', 'zugang zu gefühlen'],
    interventionen: ['anker-kollabieren', 'anker-verketten', 'verdeckt-ankern', 'circle-of-excellence', 'alignment'],
  },
  {
    id: 'innere-teile',
    label: 'Innere Teile / Persönlichkeitsanteile',
    keywords: ['innere teile', 'persönlichkeitsanteile', 'ein teil von mir', 'widersprüchliche teile', 'spalten', 'teile zusammenführen'],
    interventionen: ['integration-zweier-physiologien', 'teile-bauen', 'familienaufstellung', 'konfliktintegration-trance', 'verhandlungsmodell-trance'],
  },
];

export function searchDisorders(query, expandFn) {
  if (!query || query.trim().length < 2) return [];

  // Alle Suchterme: Original + Thesaurus-Erweiterungen
  const terms = expandFn ? expandFn(query) : [query.toLowerCase().trim()];

  const scored = disorders.map(d => {
    let score = 0;
    const labelLower = d.label.toLowerCase();

    terms.forEach(term => {
      const t = term.toLowerCase().trim();
      if (!t || t.length < 2) return;

      // Label-Treffer
      if (labelLower.includes(t)) score += 10;

      // Keyword-Treffer
      d.keywords.forEach(k => {
        if (k === t) score += 15;                    // exakter Treffer
        else if (k.includes(t) || t.includes(k)) score += 4; // Teilwort-Treffer
      });
    });

    return { ...d, score };
  }).filter(d => d.score > 0);

  return scored.sort((a, b) => b.score - a.score);
}
