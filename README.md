# Método Coluna Viva - Landing Page

Este projeto é uma landing page para o produto "Método Coluna Viva", desenvolvido pela Dra. Carla Veiga. A página é construída com React, TypeScript e Vite, utilizando TailwindCSS para estilização.

## Estrutura do Projeto

### Componentes Principais

- **`App.tsx`**: Componente principal que organiza todas as seções da landing page.

- **`Hero.tsx`**: Seção principal/cabeçalho da página com a apresentação do produto, exibindo o nome do método, imagens representando livro, tablet e celular, e botão de call-to-action principal.

- **`MethodExplanation.tsx`**: Explica o que é o Método Coluna Viva, destacando que é cientificamente comprovado e 100% natural. Apresenta três cards com características principais: desenvolvido por especialistas, exercícios práticos e vídeos explicativos.

- **`Benefits.tsx`**: Exibe os principais benefícios do método em cards, incluindo: mobilidade, estabilidade, fortalecimento, tratamento, prevenção e atividade.

- **`Testimonials.tsx`**: Carrossel de depoimentos de clientes que usaram o método, utilizando a biblioteca Embla Carousel para a funcionalidade de slider.

- **`ProfessionalIntro.tsx`**: Apresenta a profissional fisioterapeuta com sua foto, credenciais e abordagem ao método.

- **`SpecialOffer.tsx`**: Seção com oferta especial, preço, contador regressivo, imagens dos métodos de pagamento e selo de garantia.

- **`SummaryFAQ.tsx`**: Seção de perguntas frequentes em formato acordeão interativo.

- **`AuthorAbout.tsx`**: Informações detalhadas sobre a autora/criadora do método.

- **`Footer.tsx`**: Rodapé da página com informações de copyright, links para outras seções e links para redes sociais.

- **`CountdownTimer.tsx`**: Componente de contador regressivo usado na seção de oferta especial.

### Diretórios Principais

- **`src/`**: Contém todo o código-fonte do projeto
  - **`components/`**: Todos os componentes React
  - **`lib/`**: Utilitários e bibliotecas auxiliares
  - **`main.tsx`**: Ponto de entrada da aplicação
  - **`App.tsx`**: Componente principal

- **`public/`**: Arquivos estáticos acessíveis publicamente
  - **`assets/images/`**: Imagens usadas no site, incluindo:
    - **`testmonials/`**: Fotos de depoimentos de clientes
    - **`carla-veiga.jpg`**: Foto da profissional
    - **`garantia1.png`**: Selo de garantia
    - **`logo.png`**: Logo do projeto

## Características do Design

- **Tema de Cores**: Preto com acentos em amarelo dourado (#f8c304)
- **Responsividade**: Layout adaptado para dispositivos móveis e desktop
- **Componentes Interativos**:
  - Carrossel de depoimentos
  - FAQ em acordeão
  - Contador regressivo
  - Botões animados com efeitos hover

## Elementos de Vendas

- Benefícios claros do produto
- Depoimentos de clientes
- Garantia de 7 dias
- Oferta com preço promocional
- Múltiplos CTAs (Call to Action) ao longo da página
- Apresentação da especialista criadora do método
- Elemento de urgência (contador regressivo)

## Tecnologias Utilizadas

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno
- **TailwindCSS**: Framework CSS utilitário para design responsivo
- **Embla Carousel**: Biblioteca para componentes de carrossel

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
