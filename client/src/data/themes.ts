export interface Theme {
  id: string;
  name: string;
  icon: string;
  totalLessons: number;
  className: string;
  description: string;
}

export const microrrelatos_themes: Theme[] = [
  {
    id: 'terror',
    name: 'Terror',
    icon: 'skull',
    totalLessons: 7,
    className: 'theme-terror',
    description: 'Historias que generan miedo y tensión'
  },
  {
    id: 'amor',
    name: 'Amor', 
    icon: 'heart',
    totalLessons: 6,
    className: 'theme-amor',
    description: 'Relatos sobre el amor en todas sus formas'
  },
  {
    id: 'ciencia-ficcion',
    name: 'Ciencia Ficción',
    icon: 'rocket', 
    totalLessons: 8,
    className: 'theme-ciencia',
    description: 'Futuros posibles y tecnología'
  },
  {
    id: 'fantasia',
    name: 'Fantasía',
    icon: 'magic',
    totalLessons: 6, 
    className: 'theme-fantasia',
    description: 'Mundos mágicos y criaturas fantásticas'
  },
  {
    id: 'humor',
    name: 'Humor',
    icon: 'laugh',
    totalLessons: 5,
    className: 'theme-humor',
    description: 'Historias divertidas y satíricas'
  },
  {
    id: 'drama',
    name: 'Drama',
    icon: 'theater-masks',
    totalLessons: 7,
    className: 'theme-drama', 
    description: 'Conflictos humanos profundos'
  },
  {
    id: 'misterio',
    name: 'Misterio',
    icon: 'search',
    totalLessons: 6,
    className: 'theme-misterio',
    description: 'Enigmas por resolver'
  },
  {
    id: 'realismo-magico',
    name: 'Realismo Mágico',
    icon: 'eye',
    totalLessons: 8,
    className: 'theme-realismo',
    description: 'Lo extraordinario en lo cotidiano'
  }
];
