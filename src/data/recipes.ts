import { Recipe } from '../types/recipe';
import paoImg from '../images/pao.png';

export const recipes: Recipe[] = [
  {
    id: 'pao-frances',
    title: 'Pão Francês Caseiro',
    description: 'Pão francês crocante por fora e macio por dentro, perfeito para o café da manhã.',
    prepTime: 150,
    cookTime: 20,
    servings: 5,
    difficulty: 'médio',
    image: paoImg,
    ingredients: [
      { name: 'Bread flour', amount: 250, unit: 'g' },
      { name: 'Água morna', amount: 160, unit: 'ml' },
      { name: 'Fermento biológico seco (instant yeast)', amount: 5, unit: 'g' },
      { name: 'Açúcar', amount: 5, unit: 'g' },
      { name: 'Sal', amount: 5, unit: 'g' },
      { name: 'Óleo vegetal/Manteiga', amount: 10, unit: 'ml' }
    ],
    steps: [
      {
        id: 1,
        description: 'Misture a farinha, o sal e o açúcar. Adicione o fermento e a água morna aos poucos, sovando por 8 a 10 minutos até a massa ficar lisa. Opcionalmente, adicione manteiga no final da sova.',
        time: 10
      },
      {
        id: 2,
        description: 'Cubra a massa e deixe-a descansar em um local morno por 60 a 90 minutos, ou até dobrar de tamanho.',
        time: 90
      },
      {
        id: 3,
        description: 'Divida a massa em 5 porções de aproximadamente 85g cada e modele-as no formato de pão francês. Coloque em uma forma enfarinhada ou com papel manteiga.',
        time: 10
      },
      {
        id: 4,
        description: 'Deixe os pães crescerem novamente por 30 a 40 minutos.',
        time: 40
      },
      {
        id: 5,
        description: 'Preaqueça o forno a 220-230°C. Faça cortes leves na superfície dos pães (opcional) e borrife água no forno para criar vapor. Asse por 15 a 20 minutos até dourar.',
        time: 20,
        temperature: 230
      }
    ],
    tips: [
      'A água deve estar morna, não quente, para não matar o fermento.',
      'O tempo de crescimento pode variar conforme a temperatura do ambiente.',
      'Para um pão mais crocante, coloque uma tigela com água no forno durante os primeiros 10 minutos de assamento.',
      'Você pode congelar os pães já assados por até 3 meses.',
      'O video abaixo serve como referência de como moldar e assar no vapor.'
    ],
    referenceLinks: [
      {
        url: 'https://youtu.be/mEjddzTpuNI?si=Lx1mTnLGcngI2FX6',
        label: 'Vídeo: Como fazer pão francês caseiro'
      }
    ]
  },
];
