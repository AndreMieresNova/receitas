import { Recipe } from '../types/recipe';
import paoImg from '../images/pao.png';
import strogonoffImg from '../images/strog_beringela.png';
import almondegasImg from '../images/almondegas.png';
import nhoqueImg from '../images/nhoque.png';

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
  {
    id: 'strogonoff-de-berinjela',
    title: 'Strogonoff de Berinjela',
    description: 'Uma versão vegetariana deliciosa e cremosa do clássico strogonoff.',
    prepTime: 15,
    cookTime: 15,
    servings: 1,
    difficulty: 'fácil',
    image: strogonoffImg, // Placeholder image
    ingredients: [
      { name: 'Berinjela', amount: 120, unit: 'g' },
      { name: 'Cebola', amount: 40, unit: 'g' },
      { name: 'Alho', amount: 4, unit: 'g' },
      { name: 'Champignon', amount: 50, unit: 'g' },
      { name: 'Creme de leite', amount: 70, unit: 'g' },
      { name: 'Molho de tomate', amount: 50, unit: 'ml' },
      { name: 'Mostarda', amount: 5, unit: 'g' },
      { name: 'Ketchup', amount: 5, unit: 'ml' },
      { name: 'Shoyu', amount: 10, unit: 'ml' },
      { name: 'Azeite', amount: 10, unit: 'ml' },
      { name: 'Sal', amount: 2, unit: 'g' },
      { name: 'Pimenta a gosto', amount: 1, unit: 'g' },
      { name: 'Páprica (opcional)', amount: 1, unit: 'g' }
    ],
    steps: [
      {
        id: 1,
        description: 'Corte a berinjela em cubos, adicione sal e deixe descansar por 10-15 minutos. Em seguida, enxágue e seque bem.',
        time: 15
      },
      {
        id: 2,
        description: 'Em uma panela em fogo médio-alto, aqueça metade do azeite e doure a berinjela por 6-8 minutos.',
        time: 8
      },
      {
        id: 3,
        description: 'Adicione o restante do azeite e refogue a cebola por 2-3 minutos. Adicione o alho e o champignon e cozinhe por mais 2 minutos.',
        time: 5
      },
      {
        id: 4,
        description: 'Volte a berinjela para a panela, adicione todos os molhos (tomate, mostarda, ketchup, shoyu) e cozinhe por 4-5 minutos.',
        time: 5
      },
      {
        id: 5,
        description: 'Baixe o fogo, adicione o creme de leite e cozinhe por mais 2 minutos, sem deixar ferver.',
        time: 2
      }
    ],
    tips: [
      'Sirva com arroz branco e batata palha.',
      'Se não tiver champignon fresco, pode usar em conserva.'
    ]
  },
  {
    id: 'almondegas',
    title: 'Almôndegas',
    description: 'Almôndegas caseiras suculentas, perfeitas para servir com molho de tomate e macarrão.',
    prepTime: 10,
    cookTime: 20,
    servings: 1,
    difficulty: 'fácil',
    image: almondegasImg,
    ingredients: [
      { name: 'Carne moída', amount: 135, unit: 'g' },
      { name: 'Farinha de rosca', amount: 10, unit: 'g' },
      { name: 'Leite', amount: 15, unit: 'g' },
      { name: 'Cebola bem picada', amount: 15, unit: 'g' },
      { name: 'Alho', amount: 2, unit: 'g' },
      { name: 'Sal', amount: 2, unit: 'g' },
      { name: 'Pimenta (opcional)', amount: 0.5, unit: 'g' },
      { name: 'Ovo batido (opcional)', amount: 5, unit: 'g' }
    ],
    steps: [
      {
        id: 1,
        description: 'Misture todos os ingredientes em uma tigela: carne moída, farinha de rosca, leite, cebola, alho, sal, pimenta e ovo (se usar). Misture bem até incorporar.',
        time: 5
      },
      {
        id: 2,
        description: 'Modele bolinhas de 30–40 g cada. Bolinhas muito grandes cozinham por fora e ficam cruas no centro.',
        time: 5
      },
      {
        id: 3,
        description: 'Em uma frigideira em fogo médio, doure as almôndegas por todos os lados por 3–4 minutos. Não use fogo alto para não queimar por fora antes de cozinhar por dentro.',
        time: 4
      },
      {
        id: 4,
        description: 'Adicione as almôndegas douradas ao molho de tomate e cozinhe por 10–15 minutos em fogo médio-baixo até cozinhar completamente por dentro.',
        time: 15
      }
    ],
    tips: [
      'Bolinhas de 30–40 g garantem cozimento uniforme.',
      'Fogo médio é essencial: fogo alto queima por fora e deixa crua por dentro.',
      'Se ficou muito mole, adicione +5 g de farinha de rosca; se ficou seco, +5–10 g de leite.',
      'O segredo é selar na frigideira e terminar no molho de tomate.'
    ]
  },
  {
    id: 'nhoque-de-batata',
    title: 'Nhoque de Batata',
    description: 'Nhoque de batata caseiro, macio e leve, pronto em cerca de 35 minutos.',
    prepTime: 30,
    cookTime: 13,
    servings: 4,
    difficulty: 'médio',
    image: nhoqueImg,
    ingredients: [
      { name: 'Batata cozida e amassada', amount: 500, unit: 'g' },
      { name: 'Farinha de trigo', amount: 120, unit: 'g' },
      { name: 'Gema', amount: 20, unit: 'g' },
      { name: 'Sal', amount: 5, unit: 'g' },
      { name: 'Manteiga (opcional)', amount: 10, unit: 'g' },
      { name: 'Queijo parmesão ralado (opcional)', amount: 40, unit: 'g' },
      { name: 'Molho de tomate (para o molho)', amount: 200, unit: 'g' },
      { name: 'Azeite (para o molho)', amount: 10, unit: 'g' },
      { name: 'Alho (para o molho)', amount: 4, unit: 'g' },
      { name: 'Salsinha ou manjericão (para o molho)', amount: 5, unit: 'g' }
    ],
    steps: [
      {
        id: 1,
        description: 'Amasse bem a batata ainda morna, sem deixar pedaços. Espalhe na bancada para eliminar o vapor e a umidade — isso é fundamental para um nhoque mais leve.',
        time: 10
      },
      {
        id: 2,
        description: 'Misture a gema, o sal e a manteiga (opcional). Adicione a farinha aos poucos até formar uma massa macia, levemente úmida e que não grude muito na mão. Comece com 120 g e só aumente se necessário.',
        time: 10
      },
      {
        id: 3,
        description: 'Deixe a massa descansar por 5–10 minutos.',
        time: 10
      },
      {
        id: 4,
        description: 'Divida a massa em partes, faça rolinhos de ~2 cm de espessura e corte em pedaços de ~2 cm. Opcional: passe no garfo para o desenho clássico.',
        time: 10
      },
      {
        id: 5,
        description: 'Ferva bastante água com sal. Coloque os nhoques e retire com escumadeira 1 minuto após subirem à superfície.',
        time: 5
      },
      {
        id: 6,
        description: 'Opcional: salteie na manteiga por 2–3 minutos para ficarem levemente crocantes, ou sirva diretamente no molho.',
        time: 3
      },
      {
        id: 7,
        description: 'Molho rápido: refogue o alho no azeite, adicione o molho de tomate, sal e pimenta a gosto. Cozinhe por 5–8 minutos em fogo médio. Misture com os nhoques e finalize com salsinha ou manjericão.',
        time: 8
      }
    ],
    tips: [
      'Quanto mais seca a batata, menos farinha e mais leve o nhoque.',
      'Não exagere na farinha ou o nhoque fica pesado.',
      'Se a massa estiver muito grudenta, polvilhe farinha aos poucos, não despeje tudo de uma vez.',
      'Para congelar: congele cru, separado em porções, e armazene por até 3 meses.',
      'Batata tipo russet (mais seca) é a ideal para nhoque.'
    ],
    referenceLinks: []
  }
];
