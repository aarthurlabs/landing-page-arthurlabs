# Component Rules

Estas regras se aplicam a todos os componentes React do projeto.

## Princípio geral

Componentes devem possuir responsabilidade clara.

Antes de criar um novo componente, verifique:

1. se um componente existente já resolve o problema;
2. se uma primitive existente resolve o layout;
3. se a extração realmente melhora reutilização, legibilidade ou isolamento de comportamento.

Evite abstrações prematuras.

---

## Sintaxe

Todos os componentes devem usar arrow functions.

Preferir:

```tsx
const HeroSection = () => {
    return <section />
}

export { HeroSection }
```

Evitar:

```tsx
function HeroSection() {
    return <section />
}
```

Use named exports para componentes comuns.

---

## Quando componentizar

Criar um componente quando pelo menos uma destas condições for verdadeira:

- existe reutilização real;
- representa uma responsabilidade clara;
- representa um padrão definido em `docs/design.md`;
- representa uma seção significativa da landing;
- possui comportamento próprio;
- possui estados próprios;
- cria uma fronteira Server/Client;
- a extração melhora significativamente a legibilidade;
- precisa ser testado ou mantido como uma unidade independente.

Não componentizar apenas porque um JSX ficou grande.

Não criar componentes que apenas encapsulam uma `div` sem:

- semântica;
- comportamento;
- reutilização;
- responsabilidade própria.

---

## Server Components

Todo componente é Server Component por padrão.

Nunca adicionar `"use client"` por conveniência.

Um componente só deve ser Client Component quando realmente precisar de:

- `useState`;
- `useEffect`;
- event handlers executados no browser;
- browser APIs;
- hooks client-side;
- bibliotecas incompatíveis com Server Components.

Quando apenas uma pequena parte precisar de client-side, isole essa parte.

Preferir:

```text
Server Component
└── Client Component pequeno
```

Evitar:

```text
Client Component grande
├── conteúdo estático
├── conteúdo estático
└── pequena interação
```

A fronteira client deve ficar o mais próxima possível da interação.

---

## Responsabilidade das pastas

### `components/layout/`

Somente primitives estruturais.

Componentes previstos:

- `Container`;
- `Section`;
- `Stack`;
- `Cluster`;
- `Grid`.

Esses componentes controlam composição e layout.

Eles não devem conter copy comercial ou regras específicas da home.

---

### `components/typography/`

Abstrações tipográficas reutilizáveis previstas pelo design system.

Exemplos:

- `Eyebrow`;
- `Heading`;
- `Text`.

Não criar abstrações tipográficas que apenas escondem uma única classe sem benefício real.

---

### `components/ui/`

Componentes reutilizáveis independentes do contexto específico da landing.

Exemplos:

- `Button`;
- `Surface`;
- `Divider`;
- `Logo`.

Esses componentes podem ser utilizados por outras páginas no futuro.

---

### `components/landing/`

Componentes específicos da landing page ArthurLabs.

Exemplos:

- `Header`;
- `SocialProof`;
- `SectionHeader`;
- `HeroSection`;
- `DiagnosticSection`;
- `PresenceJourney`;
- `ProcessSection`;
- `ProofBlock`;
- `ConversionSection`;
- `Footer`.

Esses componentes podem conhecer a estrutura da landing, mas não devem redefinir o design system.

---

## Props

Props devem representar intenção e variações legítimas do componente.

Preferir:

```tsx
<Section tone="dark" />
```

Evitar:

```tsx
<Section background="#030504" paddingTop="128px" paddingBottom="128px" />
```

Preferir:

```tsx
<Button variant="primary">Entrar em contato</Button>
```

Evitar APIs excessivamente configuráveis.

O design system controla aparência.

Props controlam intenção.

---

## Types

Props públicas devem possuir tipos explícitos.

Preferir:

```tsx
interface SectionHeaderProps {
    eyebrow?: string
    title: string
    description?: string
}
```

Não usar `any`.

Não duplicar tipos equivalentes.

Não criar tipos globais quando pertencem somente a um componente.

---

## Children

Use `children` quando o componente representar composição.

Não use `children` para esconder uma API pouco clara.

Quando o componente possui estrutura conhecida, prefira props semânticas.

---

## Styling

`docs/design.md` é a fonte de verdade visual.

`styles/tokens.css` contém os tokens executáveis.

Não inventar:

- cores;
- spacing;
- radius;
- shadows;
- breakpoints;
- escalas tipográficas.

Não usar inline styles para implementar decisões permanentes do design system.

Evitar valores arbitrários do Tailwind quando existir token ou regra equivalente.

Evitar:

```tsx
<div className="mt-[37px] rounded-[17px] text-[#00E676]" />
```

---

## Layout

Antes de criar CSS estrutural específico, verificar se o problema pode ser resolvido com:

- `Container`;
- `Section`;
- `Stack`;
- `Cluster`;
- `Grid`.

Não duplicar lógica dessas primitives dentro de componentes de domínio.

---

## Semântica

Use elementos HTML semanticamente corretos.

Preferir:

```html
<section>
    <nav>
        <header>
            <footer>article> button a</footer>
        </header>
    </nav>
</section>
```

quando semanticamente apropriados.

Não utilizar `div` como botão ou link.

---

## Headings

Não escolher `h1`, `h2`, `h3` pelo tamanho visual.

O nível deve representar a hierarquia do documento.

A aparência vem do design system.

A página deve possuir apenas um `h1`.

---

## Imagens

Use `next/image` quando apropriado.

Imagens informativas precisam de `alt` significativo.

Imagens puramente decorativas devem usar:

```tsx
alt = ''
```

quando apropriado.

Não criar texto alternativo artificial apenas para SEO.

---

## Links e ações

Use `next/link` para navegação interna.

Use `<a>` para URLs externas quando apropriado.

Use `<button>` para ações.

Não misturar semântica de navegação e ação.

---

## Accessibility

Componentes interativos devem:

- funcionar por teclado;
- possuir `focus-visible`;
- ter accessible name;
- possuir touch target adequado;
- não depender somente de cor para comunicar estado.

Botões contendo apenas ícone precisam de `aria-label`.

---

## Reutilização

Antes de mover algo para `components/ui/`, confirme que ele realmente é reutilizável fora do contexto atual.

Não transformar componentes específicos da landing em componentes genéricos antecipadamente.

Prefira:

```text
landing/diagnostic-item.tsx
```

enquanto ele for específico da landing.

Só mova para `ui/` quando houver reutilização real.

---

## Regra final

Um bom componente deve possuir:

```text
responsabilidade clara
+
API pequena
+
semântica correta
+
baixo acoplamento
+
mínimo JavaScript necessário
```

Se uma abstração torna o código mais difícil de entender, ela não deve existir.
