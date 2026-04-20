export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Step {
  id: number;
  description: string;
  time?: number; // em minutos
  temperature?: number; // em graus Celsius
}

export interface ReferenceLink {
  url: string;
  label?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: number; // em minutos
  cookTime: number; // em minutos
  servings: number;
  difficulty: 'fácil' | 'médio' | 'difícil';
  image: string;
  ingredients: Ingredient[];
  steps: Step[];
  tips?: string[];
  referenceLinks?: ReferenceLink[];
}
