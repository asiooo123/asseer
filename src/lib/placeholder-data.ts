export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  format: 'en ligne' | 'présentiel';
  duration: string;
  price: string;
  image: string;
  dataAiHint: string;
}

export interface Workshop {
  id: string;
  title: string;
  date: string;
  theme: string;
  availablePlaces: number;
  price: string;
  terms: string;
  image: string;
  dataAiHint: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sculpture' | 'poterie' | 'modelage';
  imageUrl: string;
  dataAiHint: string;
  description: string;
}

export const placeholderCourses: Course[] = [
  {
    id: '1',
    title: 'Initiation au Tour de Potier',
    description: 'Apprenez les bases du tournage et créez vos premières pièces uniques.',
    level: 'débutant',
    format: 'présentiel',
    duration: '10 heures (5 sessions de 2h)',
    price: '250€',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pottery wheel'
  },
  {
    id: '2',
    title: 'Modelage Avancé : Techniques de Sculpture',
    description: 'Explorez des techniques de sculpture complexes pour donner vie à vos idées.',
    level: 'avancé',
    format: 'présentiel',
    duration: '15 heures (5 sessions de 3h)',
    price: '380€',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'clay sculpture'
  },
  {
    id: '3',
    title: 'Création d\'Émaux Personnalisés',
    description: 'Découvrez l\'art de la création d\'émaux pour des finitions uniques (cours en ligne).',
    level: 'intermédiaire',
    format: 'en ligne',
    duration: '8 heures (vidéos + support)',
    price: '180€',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ceramic glaze'
  },
];

export const placeholderWorkshops: Workshop[] = [
  {
    id: 'w1',
    title: 'Atelier Découverte : Bols en Argile',
    date: 'Samedi 15 Juillet, 14h-17h',
    theme: 'Création de bols utilitaires et décoratifs',
    availablePlaces: 8,
    price: '60€',
    terms: 'Matériel fourni. Aucun prérequis.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'clay bowls'
  },
  {
    id: 'w2',
    title: 'Atelier Raku : Cuisson Spectaculaire',
    date: 'Dimanche 23 Juillet, 10h-18h',
    theme: 'Apprenez la technique de cuisson Raku et ses effets uniques.',
    availablePlaces: 6,
    price: '120€',
    terms: 'Nécessite une expérience de base en modelage. Pièces à apporter ou à créer sur place (supplément).',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'raku pottery'
  },
];

export const placeholderGalleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Vase en Grès Émaillé',
    category: 'poterie',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'ceramic vase',
    description: 'Vase tourné en grès, émail bleu profond. Cuisson haute température.'
  },
  {
    id: 'g2',
    title: 'Sculpture Abstraite "Élan"',
    category: 'sculpture',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'abstract sculpture',
    description: 'Sculpture en argile chamottée, inspirée par le mouvement.'
  },
  {
    id: 'g3',
    title: 'Ensemble de Tasses Modelées',
    category: 'modelage',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'clay cups',
    description: 'Série de tasses modelées à la main, avec des textures naturelles.'
  },
  {
    id: 'g4',
    title: 'Assiette décorative',
    category: 'poterie',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'ceramic plate',
    description: 'Assiette en porcelaine avec décorations incrustées.'
  },
  {
    id: 'g5',
    title: 'Figurine Animale',
    category: 'sculpture',
    imageUrl: 'https://placehold.co/400x300.png',
    dataAiHint: 'animal sculpture',
    description: 'Petite figurine d\'un renard en argile, patinée.'
  },
];
