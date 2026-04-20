import React from 'react';
import { Recipe } from '../types/recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <button 
              onClick={onBack}
              className="mb-4 bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Voltar</span>
            </button>
            <h1 className="text-4xl font-bold text-white mb-4">{recipe.title}</h1>
            <p className="text-white text-lg max-w-2xl">{recipe.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredientes</h2>
              <div className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient-item">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">{ingredient.amount}g {ingredient.unit}</span>
                    <span className="text-gray-600">{ingredient.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Modo de Preparo</h2>
              <div className="space-y-6">
                {recipe.steps.map((step) => (
                  <div key={step.id} className="flex space-x-4">
                    <div className="step-number">{step.id}</div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        {step.time && (
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{step.time} min</span>
                          </div>
                        )}
                        {step.temperature && (
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span>{step.temperature}°C</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Informações</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Tempo total</span>
                  <span className="font-semibold text-gray-900">{totalTime} min</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Preparo</span>
                  <span className="font-semibold text-gray-900">{recipe.prepTime} min</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Cozimento</span>
                  <span className="font-semibold text-gray-900">{recipe.cookTime} min</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Porções</span>
                  <span className="font-semibold text-gray-900">{recipe.servings}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Dificuldade</span>
                  <span className="font-semibold text-primary-600">{recipe.difficulty}</span>
                </div>
              </div>

              {recipe.tips && recipe.tips.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Dicas</h4>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                        <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {recipe.referenceLinks && recipe.referenceLinks.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Referências</h4>
                <ul className="space-y-2">
                  {recipe.referenceLinks.map((ref, idx) => (
                    <li key={idx}>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline hover:text-primary-800 flex items-center space-x-2">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3z"/><path d="M5 5v14h14v-7h-2v5H7V7h5V5H5z"/></svg>
                        <span>{ref.label || ref.url}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
