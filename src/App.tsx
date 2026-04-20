import React, { useState } from 'react';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import { recipes } from './data/recipes';
import { Recipe } from './types/recipe';

const App: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return (
      <>
        <Header />
        <RecipeDetail recipe={selectedRecipe} onBack={handleBack} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Receitas Brasileiras
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra receitas incríveis com instruções passo a passo, 
            medidas precisas e dicas profissionais para você arrasar na cozinha!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={handleRecipeClick}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mais receitas em breve!
          </h3>
          <p className="text-gray-600">
            Estamos trabalhando para trazer mais receitas deliciosas para você.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
