export const disorders = [
  {
    id: 'phobie',
    label: 'Phobie / Spezifische Angst',
    keywords: ['phobie', 'spinne', 'hund', 'hunde', 'fliegen', 'höhe', 'höhenangst', 'nadel', 'blut', 'dunkel', 'enge', 'lift', 'fahrstuhl', 'tier', 'schlange'],
    interventionen: ['phobietechnik', 'phobietechnik-ressource'],
  },
  {
    id: 'angst',
    label: 'Angst / Panik',
    keywords: ['angst', 'panik', 'panikattacke', 'prüfungsangst', 'soziale angst', 'öffentlich sprechen', 'redeangst', 'versagensangst'],
    interventionen: ['phobietechnik-ressource', 'changing-history', 'sixstep-reframing'],
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
    interventionen: ['core-transformation', 'changing-history', 'mentoren-technik'],
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
    interventionen: ['sixstep-reframing', 'core-transformation'],
  },
  {
    id: 'zwang-gewohnheit',
    label: 'Zwang / Ungewünschte Gewohnheit',
    keywords: ['zwang', 'zwangsverhalten', 'gewohnheit', 'sucht', 'abhängigkeit', 'rauchen', 'aufhören', 'wiederholung', 'ritual', 'kontrollzwang', 'putzzwang'],
    interventionen: ['sixstep-reframing', 'changing-history'],
  },
  {
    id: 'prokrastination',
    label: 'Prokrastination / Blockade',
    keywords: ['prokrastination', 'aufschieberitis', 'blockade', 'blockiert', 'lähmung', 'nicht anfangen', 'nicht handeln', 'antriebslos'],
    interventionen: ['sixstep-reframing', 'mentoren-technik'],
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
    interventionen: ['changing-history', 'core-transformation', 'sixstep-reframing'],
  },
  {
    id: 'identitaet',
    label: 'Identität / Sinnkrise',
    keywords: ['identität', 'sinn', 'sinnlos', 'wer bin ich', 'leere', 'innere leere', 'nicht ich selbst', 'sinnkrise', 'selbstfindung'],
    interventionen: ['core-transformation', 'mentoren-technik'],
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
