# Button Component

## Descrição
Componente atômico de botão reutilizável que segue o padrão de atomic design. Oferece múltiplas variantes, tamanhos e estados para diferentes contextos de uso.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Conteúdo do botão (texto, ícones, etc.) |
| `onClick` | `() => void` | - | Função executada ao clicar no botão |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Estilo visual do botão |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamanho do botão |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `className` | `string` | `''` | Classes CSS adicionais |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo do botão HTML |

## Variantes

### Primary (Padrão)
- **Cor**: Amarelo (#F7CA11)
- **Texto**: Preto
- **Efeito**: Sombra dourada e elevação no hover

### Secondary
- **Cor**: Azul (#3019B2)
- **Texto**: Branco
- **Efeito**: Sombra azul e elevação no hover

### Outline
- **Cor**: Transparente com borda azul
- **Texto**: Azul
- **Efeito**: Preenchimento azul no hover

## Tamanhos

### Small
- **Padding**: 0.5rem 1.5rem
- **Fonte**: 0.875rem (14px)

### Medium (Padrão)
- **Padding**: 0.813rem 3.406rem
- **Fonte**: 1.125rem (18px)

### Large
- **Padding**: 1rem 4rem
- **Fonte**: 1.25rem (20px)

## Exemplos de Uso

### Botão Primário Padrão
```tsx
import { Button } from '@/components/Shared/atoms/Button';

<Button onClick={() => console.log('Clicado!')}>
  Clique aqui
</Button>
```

### Botão Secundário Grande
```tsx
<Button 
  variant="secondary" 
  size="large"
  onClick={handleSubmit}
>
  Enviar
</Button>
```

### Botão Outline Desabilitado
```tsx
<Button 
  variant="outline" 
  disabled={true}
  onClick={handleAction}
>
  Ação
</Button>
```

### Botão de Submit
```tsx
<Button 
  type="submit" 
  variant="primary"
  onClick={handleFormSubmit}
>
  Salvar
</Button>
```

## Características

- ✅ **Responsivo**: Adapta-se a diferentes tamanhos de tela
- ✅ **Acessível**: Suporte a estados disabled e tipos HTML
- ✅ **Customizável**: Múltiplas variantes e tamanhos
- ✅ **Consistente**: Segue o design system do projeto
- ✅ **Reutilizável**: Pode ser usado em qualquer lugar da aplicação
- ✅ **TypeScript**: Totalmente tipado com interfaces claras

## Estilos

O componente usa CSS Modules com:
- Transições suaves (0.3s ease)
- Efeitos de hover com transform e box-shadow
- Estados disabled com opacidade reduzida
- Fonte Poppins para consistência visual
- Border-radius de 8px para modernidade
