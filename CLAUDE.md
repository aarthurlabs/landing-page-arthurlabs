# ArthurLabs Website

Landing page institucional e de conversão da ArthurLabs.

Este projeto deve ser desenvolvido com foco em:

- clareza;
- performance;
- SEO;
- acessibilidade;
- baixo JavaScript no cliente;
- arquitetura simples;
- alta consistência visual;
- facilidade de manutenção.

---

# Sources of truth

Antes de implementar ou alterar qualquer parte relevante do projeto, consulte:

- `docs/context.md` — posicionamento, proposta e contexto da ArthurLabs;
- `docs/structure.md` — arquitetura de conversão e estrutura da landing;
- `docs/design.md` — design system, layout, componentes, responsividade e regras visuais.

Esses documentos são fontes de verdade.

Quando houver conflito entre uma decisão improvisada e os documentos, os documentos devem prevalecer.

Não invente:

- novas seções;
- novos padrões visuais;
- novos serviços;
- novas propostas comerciais;
- novas cores;
- novos componentes genéricos;

sem necessidade real.

---

# Stack

O projeto utiliza:

- Next.js;
- App Router;
- React;
- TypeScript;
- Tailwind CSS;
- Server Components por padrão.

Use funcionalidades nativas do Next.js e React antes de adicionar dependências externas.

Não instalar bibliotecas sem necessidade clara.

Evitar dependências para problemas simples que podem ser resolvidos com:

- React;
- CSS;
- Tailwind;
- APIs do Next.js;
- APIs nativas do browser.

---

# React

Todos os componentes devem usar arrow functions.

Preferir:

```tsx
const HeroSection = () => {
    return <section />;
};

export { HeroSection };
```

Evitar:

```tsx
function HeroSection() {
    return <section />;
}
```

Use named exports para componentes comuns.

Use `default export` somente quando a convenção do Next.js exigir ou justificar.

---

# Server Components

Server Components são o padrão.

Nunca adicionar `"use client"` por conveniência.

Client Components só devem existir quando houver necessidade real de:

- state;
- effects;
- event handlers executados no browser;
- browser APIs;
- hooks client-side;
- bibliotecas incompatíveis com Server Components.

A fronteira client deve ser a menor possível.

Preferir:

```text
Server Component
└── pequeno Client Component
```

Evitar:

```text
Client Component grande
├── conteúdo estático
├── conteúdo estático
└── pequena interação
```

Nunca transformar uma seção inteira em Client Component quando apenas uma pequena parte precisa de interação.

---

# Pages e layouts

`page.tsx` e `layout.tsx` devem permanecer Server Components.

Nunca adicionar `"use client"` diretamente nesses arquivos.

`page.tsx` deve atuar principalmente como composição da rota.

Preferir:

```tsx
const HomePage = () => {
    return (
        <>
            <HeroSection />
            <DiagnosticSection />
            <SolutionSection />
            <ProcessSection />
            <ConversionSection />
        </>
    );
};

export default HomePage;
```

Evitar implementar grandes seções diretamente dentro de `page.tsx`.

---

# Componentização

Antes de criar um componente, pergunte:

- existe reutilização real?
- representa uma responsabilidade clara?
- possui comportamento próprio?
- possui estados?
- representa uma primitive do design system?
- representa uma seção relevante?
- cria uma fronteira Server/Client?
- melhora significativamente a legibilidade?

Se nenhuma dessas condições existir, provavelmente não é necessário criar um componente.

Não componentizar apenas para diminuir o número de linhas.

Não criar wrappers sem responsabilidade real.

Evitar abstrações prematuras.

---

# Organização

A arquitetura principal do projeto é:

```text
app/
components/
    layout/
    typography/
    ui/
    landing/
config/
content/
docs/
lib/
public/
styles/
```

Responsabilidades:

```text
app/
→ rotas e funcionalidades específicas do Next.js

components/
→ interface

config/
→ configuração global da aplicação

content/
→ conteúdo estruturado

docs/
→ documentação e fontes de verdade

lib/
→ helpers e infraestrutura

public/
→ assets públicos

styles/
→ tokens e estilos compartilhados
```

---

# Components

As regras específicas de componentes estão em:

```text
.claude/rules/components.md
```

Siga essas regras sempre que trabalhar em `components/`.

---

# App Router

As regras específicas de App Router estão em:

```text
.claude/rules/app-router.md
```

Siga essas regras sempre que trabalhar em `app/`.

---

# Styling

As regras específicas de styling estão em:

```text
.claude/rules/styles.md
```

`docs/design.md` é a fonte de verdade visual.

Não inventar novos:

- colors;
- spacing;
- radius;
- shadows;
- breakpoints;
- typography scales;
- card patterns.

Tokens executáveis devem ser centralizados em:

```text
styles/tokens.css
```

Tailwind deve ser usado principalmente para composição.

Evitar valores arbitrários quando já existir uma decisão no sistema.

---

# Content

Conteúdo comercial deve ser separado da implementação sempre que fizer sentido.

O conteúdo principal da home deve ser centralizado em:

```text
content/home.ts
```

Componentes de layout e primitives não devem possuir copy comercial hardcoded.

Não inventar claims, métricas ou resultados.

---

# Site configuration

Informações globais devem ser centralizadas em:

```text
config/site.ts
```

Exemplos:

- nome;
- domínio;
- locale;
- descrição;
- email;
- WhatsApp;
- redes sociais;
- URLs oficiais.

Não duplicar esses dados em múltiplos arquivos.

---

# SEO

SEO faz parte da arquitetura.

As regras específicas estão em:

```text
.claude/rules/seo.md
```

O projeto deve possuir quando aplicável:

- Metadata API;
- metadataBase;
- canonical;
- Open Graph;
- Twitter metadata;
- robots.txt;
- sitemap.xml;
- structured data;
- `llms.txt`;
- HTML semântico;
- heading hierarchy correta.

Nunca inventar para SEO:

- reviews;
- ratings;
- clientes;
- endereço;
- prêmios;
- resultados;
- estatísticas.

Structured data deve conter apenas informações factuais.

---

# Fonts

As fontes principais são:

```text
Sora
→ displays e headings

Inter
→ body, UI e supporting copy
```

Use `next/font`.

Não carregar essas fontes manualmente através de `<link>` externo.

---

# TypeScript

Nunca usar `any`.

Prefira inferência quando o tipo for óbvio.

Crie tipos explícitos para:

- props públicas;
- estruturas compartilhadas;
- configurações reutilizadas.

Não duplicar tipos equivalentes.

---

# Naming

Componentes:

```text
PascalCase
```

Arquivos:

```text
kebab-case.tsx
```

Variáveis e funções:

```text
camelCase
```

Constantes globais realmente imutáveis:

```text
UPPER_SNAKE_CASE
```

---

# Imports

Use o alias:

```text
@/*
```

Evite:

```text
../../../components/...
```

Não criar barrel files (`index.ts`) automaticamente.

Imports devem apontar diretamente para o módulo necessário.

---

# Performance

A landing deve enviar o mínimo possível de JavaScript para o navegador.

Priorizar:

- Server Components;
- static rendering;
- `next/image`;
- `next/font`;
- HTML útil no primeiro response;
- assets otimizados.

Evitar:

- hydration desnecessária;
- bibliotecas client-side sem necessidade;
- animações pesadas;
- scripts externos desnecessários.

Core Web Vitals fazem parte da qualidade da implementação.

---

# Accessibility

Obrigatório:

- HTML semântico;
- apenas um `h1` por página;
- heading hierarchy correta;
- navegação por teclado;
- `focus-visible`;
- accessible names;
- alt text adequado;
- touch targets adequados;
- reduced motion;
- contraste adequado.

Não comunicar informação apenas através de cor.

---

# Scope

Evite overengineering.

Não adicionar:

- funcionalidades não solicitadas;
- dependências especulativas;
- abstrações sem uso real;
- componentes genéricos prematuros;
- novos padrões visuais;
- arquivos sem responsabilidade clara.

Prefira a solução mais simples que cumpra corretamente o requisito.

---

# Workflow

Antes de implementar uma tarefa relevante:

1. leia este `CLAUDE.md`;
2. leia as regras em `.claude/rules/` relacionadas aos arquivos;
3. consulte os documentos relevantes em `docs/`;
4. inspecione a implementação existente;
5. preserve padrões existentes antes de criar novos.

Não altere arquitetura, design ou convenções silenciosamente.

---

# Verification

Após alterações relevantes:

1. execute lint;
2. execute TypeScript check quando configurado;
3. execute build;
4. corrija erros introduzidos;
5. revise warnings relevantes.

Nunca considere uma tarefa concluída com build quebrado.

---

# Final principle

O projeto deve permanecer:

```text
simples
+
consistente
+
server-first
+
performático
+
semântico
+
fácil de evoluir
```

Não procure a arquitetura mais sofisticada.

Procure a arquitetura mais simples que preserve corretamente o produto e o design system.