# CategoryMenu Component

Componente de menu de categorias que pode ser configurado para mostrar apenas o texto "Ver todos".

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `categories` | `string[]` | **obrigatório** | Array de categorias disponíveis |
| `selectedCategory` | `string` | **obrigatório** | Categoria atualmente selecionada |
| `onCategorySelect` | `(category: string) => void` | **obrigatório** | Função chamada ao selecionar categoria |
| `showOnlyVerTodos` | `boolean` | `false` | Se `true`, mostra apenas "Ver todos" |

## Modos de Uso

### 1. Menu de Categorias Normal (padrão)

```tsx
<CategoryMenu
  categories={['CELULAR', 'ACESSÓRIOS', 'TABLETS']}
  selectedCategory={selectedCategory}
  onCategorySelect={handleCategorySelect}
/>
```

**Resultado:** Menu horizontal com botões de categorias clicáveis.

### 2. Apenas "Ver todos"

```tsx
<CategoryMenu
  categories={[]} // Pode ser vazio quando showOnlyVerTodos é true
  selectedCategory=""
  onCategorySelect={() => {}}
  showOnlyVerTodos={true}
/>
```

**Resultado:** Apenas o texto "Ver todos" centralizado.

## Estilos

### Menu de Categorias:
- **Layout**: Flexbox horizontal com gap
- **Botões**: Padding 12px 24px, border-radius 8px
- **Estados**: Hover com background cinza, active com azul (#3442B5)
- **Responsivo**: Adapta-se a diferentes tamanhos de tela

### Texto "Ver todos":
- **Fonte**: Poppins Bold
- **Tamanho**: 15px (0.938rem)
- **Cor**: Preto (#000000)
- **Hover**: Azul (#3442B5)
- **Centralizado**: Com margin-bottom 32px

## Exemplo Completo

```tsx
import React, { useState } from 'react';
import { CategoryMenu } from './CategoryMenu';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('CELULAR');
  const [showOnlyVerTodos, setShowOnlyVerTodos] = useState(false);

  const categories = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS'];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleMode = () => {
    setShowOnlyVerTodos(!showOnlyVerTodos);
  };

  return (
    <div>
      <button onClick={toggleMode}>
        {showOnlyVerTodos ? 'Mostrar Menu' : 'Mostrar Apenas Ver Todos'}
      </button>

      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        showOnlyVerTodos={showOnlyVerTodos}
      />
    </div>
  );
};
```

## Responsividade

- **Desktop**: Gap 16px, padding botões 12px 24px
- **Tablet (768px)**: Gap 12px, padding botões 10px 20px
- **Mobile (480px)**: Gap 8px, padding botões 8px 16px

## Características

- ✅ **Flexível** - Dois modos de exibição
- ✅ **Responsivo** - Adapta-se a diferentes telas
- ✅ **Acessível** - Estados hover e active claros
- ✅ **Customizável** - Cores e espaçamentos configuráveis
- ✅ **Performance** - Renderização condicional eficiente
