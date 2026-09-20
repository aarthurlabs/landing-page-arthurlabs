---
paths:
    - 'app/**/*.ts'
    - 'app/**/*.tsx'
---

# App Router Rules

Estas regras se aplicam à pasta `app/` e às convenções do Next.js App Router.

## Princípio geral

A pasta `app/` organiza:

- rotas;
- layouts;
- metadata;
- arquivos especiais do framework.

Ela não deve se transformar na pasta principal de componentes da aplicação.

Componentes reutilizáveis devem ficar em `components/`.

---

## Server Components

Server Components são o padrão.

`page.tsx` e `layout.tsx` devem permanecer Server Components.

Nunca adicionar:

```tsx
'use client'
```

diretamente em `page.tsx` ou `layout.tsx`.

Quando existir necessidade de comportamento client-side:

```text
page/layout Server Component
└── componente Client isolado
```

---

## Pages

`page.tsx` deve atuar principalmente como composição da rota.

Preferir:

```tsx
import { ConversionSection } from '@/components/landing/conversion-section'
import { DiagnosticSection } from '@/components/landing/diagnostic-section'
import { HeroSection } from '@/components/landing/hero-section'
import { ProcessSection } from '@/components/landing/process-section'
import { SolutionSection } from '@/components/landing/solution-section'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <DiagnosticSection />
            <SolutionSection />
            <ProcessSection />
            <ConversionSection />
        </>
    )
}

export default HomePage
```

Evitar implementar seções completas diretamente dentro de `page.tsx`.

---

## Layout

O root `layout.tsx` é responsável por elementos globais da aplicação.

Responsabilidades permitidas:

- `<html lang="pt-BR">`;
- `<body>`;
- fontes;
- estilos globais;
- Metadata global;
- structured data global quando aplicável.

Não colocar conteúdo específico da home no root layout.

---

## Fonts

Use `next/font`.

Não carregar fontes principais através de `<link>` manual quando `next/font` puder resolver.

As fontes da ArthurLabs são:

- Sora;
- Inter.

As fontes devem ser configuradas globalmente e expostas de forma reutilizável.

---

## Metadata

Use a Metadata API do Next.js.

Não adicionar manualmente tags como:

```html
<meta />
<title />
<link rel="canonical" />
```

quando existir suporte nativo.

Dados institucionais devem vir de:

```text
config/site.ts
```

Evitar duplicar valores de:

- domínio;
- nome;
- descrição;
- locale;
- redes;
- contato.

---

## Metadata global

O root layout deve definir quando aplicável:

- `metadataBase`;
- title default;
- title template;
- description;
- canonical base;
- Open Graph;
- Twitter metadata.

Metadata específica de uma rota pode ser definida na própria rota.

---

## Arquivos especiais

Preferir as convenções do App Router.

Usar quando necessário:

```text
app/robots.ts
app/sitemap.ts
app/opengraph-image.tsx
app/twitter-image.tsx
app/icon.*
```

Não criar rotas manuais equivalentes sem necessidade.

---

## Rendering

A landing page institucional deve ser estática sempre que possível.

Não utilizar APIs request-time sem necessidade.

Evitar:

- `cookies()`;
- `headers()`;
- dados dinâmicos;
- opt-out de cache;

quando a rota não depender deles.

---

## Data fetching

Quando existir conteúdo estático local, importar diretamente.

Não criar API interna apenas para fornecer conteúdo estático à própria landing.

Não fazer fetch para o próprio projeto sem necessidade.

---

## Page content

Copy da home deve preferencialmente vir de:

```text
content/home.ts
```

A page não deve armazenar grandes blocos de copy diretamente.

---

## Route responsibility

Não colocar componentes de domínio dentro de:

```text
app/
```

quando puderem viver em:

```text
components/
```

Exemplo:

Preferir:

```text
components/landing/hero-section.tsx
```

Evitar:

```text
app/_components/hero-section.tsx
```

para esta landing, salvo necessidade arquitetural futura específica.

---

## Images

Use `next/image` para imagens de conteúdo quando apropriado.

Assets estáticos devem ficar em:

```text
public/
```

Não importar imagens externas sem necessidade.

---

## Links

Use `next/link` para navegação interna.

Âncoras dentro da mesma landing podem utilizar links semânticos para IDs de seção.

---

## Error handling

Não criar:

- `error.tsx`;
- `loading.tsx`;
- `not-found.tsx`;

por antecipação se não houver necessidade real.

Adicionar apenas quando o comportamento da rota justificar.

---

## SEO

A implementação da página deve preservar:

- apenas um `h1`;
- headings hierárquicos;
- conteúdo principal no HTML inicial;
- links rastreáveis;
- conteúdo útil mesmo sem JavaScript.

Não esconder conteúdo principal atrás de interações client-side.

---

## Performance

A page deve importar predominantemente Server Components.

Client Components devem ser pequenos e isolados.

Não transformar a home inteira em uma ilha hidratada.

---

## Regra final

A pasta `app/` deve permanecer simples.

Para esta landing, a responsabilidade ideal é:

```text
app/
├── layout.tsx
├── page.tsx
├── robots.ts
├── sitemap.ts
├── opengraph-image.tsx
└── twitter-image.tsx
```

O restante da implementação deve viver nas camadas apropriadas do projeto.
