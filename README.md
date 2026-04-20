# Receitas Deliciosas - Site de Receitas

Um site totalmente responsivo de receitas de comida construído com React e TypeScript, otimizado para deploy como Azure Static Web App.

## Features

- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Receitas Detalhadas**: Passo a passo com medidas precisas em gramas e minutos
- **Imagens Atrativas**: Fotos de alta qualidade para cada receita
- **Navegação Intuitiva**: Interface moderna e fácil de usar
- **Performance Otimizada**: Build estático ideal para Azure Static Web Apps

## Tecnologias

- **React 18** com TypeScript
- **TailwindCSS** para estilização responsiva
- **React Router** para navegação
- **Azure Static Web App** para deploy

## Estrutura do Projeto

```
src/
  components/       # Componentes React
    Header.tsx      # Cabeçalho do site
    RecipeCard.tsx  # Card de receita na lista
    RecipeDetail.tsx # Detalhes completos da receita
  data/
    recipes.ts      # Dados das receitas
  types/
    recipe.ts       # Tipos TypeScript
  App.tsx           # Componente principal
  index.tsx         # Ponto de entrada
  index.css         # Estilos globais com Tailwind
```

## Receita Exemplo: Pão Francês Caseiro

A receita de exemplo inclui:
- **Ingredientes**: 500g farinha, 300ml água, 7g fermento, etc.
- **Tempo**: 20 min preparo + 25 min cozimento
- **Porções**: 12 pães
- **Dificuldade**: Médio
- **Passo a passo**: 10 passos detalhados com tempos
- **Dicas**: 4 dicas profissionais para sucesso

## Instalação e Desenvolvimento

1. **Instale as dependências**:
```bash
npm install
```

2. **Inicie o servidor de desenvolvimento**:
```bash
npm start
```

3. **Abra http://localhost:3000** no navegador

## Build para Produção

```bash
npm run build
```

O build será gerado na pasta `build/`, pronto para deploy.

## Deploy no Azure Static Web App

### Pré-requisitos
- Conta Azure com permissões para Static Web Apps
- GitHub, Azure DevOps ou outro repositório Git

### Passos

1. **Crie o Static Web App no Azure**:
   - Acesse o Portal Azure
   - Crie novo "Static Web App"
   - Conecte seu repositório Git

2. **Configure o Build**:
   - **Framework**: React
   - **Build Location**: `/`
   - **Build Output**: `build`
   - **Node Version**: 18

3. **Arquivo de Configuração** (opcional):
   Crie `azure/staticwebapp.config.json`:
   ```json
   {
     "routes": [
       {
         "route": "/*",
         "serve": "/index.html",
         "statusCode": 200
       }
     ]
   }
   ```

4. **Deploy Automático**:
   - Faça push para seu repositório
   - Azure irá buildar e deployar automaticamente

## Adicionando Novas Receitas

Para adicionar novas receitas, edite `src/data/recipes.ts`:

```typescript
{
  id: 'nova-receita',
  title: 'Título da Receita',
  description: 'Descrição breve',
  prepTime: 15, // minutos
  cookTime: 30, // minutos
  servings: 4,
  difficulty: 'fácil' | 'médio' | 'difícil',
  image: 'URL da imagem',
  ingredients: [
    { name: 'Ingrediente', amount: 100, unit: 'g' }
  ],
  steps: [
    {
      id: 1,
      description: 'Descrição do passo',
      time: 5, // opcional
      temperature: 180 // opcional, em Celsius
    }
  ],
  tips: ['Dica opcional']
}
```

## Personalização

### Cores e Tema
Edite `tailwind.config.js` para personalizar cores:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // suas cores personalizadas
      }
    }
  }
}
```

### Fontes
As fontes são configuradas via Google Fonts no `index.html`.

## Performance

- Imagens otimizadas via Unsplash
- Build estático para carregamento rápido
- TailwindCSS com purging automático
- Componentes otimizados com React.memo

## Licença

MIT License - sinta-se livre para usar este projeto como base para seus próprios sites de receitas.
