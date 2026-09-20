# ArthurLabs — DESIGN.md

> Manual de construção e replicação da landing page ArthurLabs.
>
> Este documento deve ser usado por agentes de IA, designers e desenvolvedores como fonte de verdade para reconstruir, evoluir ou criar novas versões da landing page mantendo o mesmo sistema visual e estrutural.
>
> Este arquivo não define copy comercial final. Ele define **como a página deve ser construída**.

---

# 1. Objetivo deste documento

A landing page da ArthurLabs deve ser construída a partir de um sistema simples, consistente e reutilizável.

O objetivo deste manual é impedir que cada nova implementação:

- invente uma nova direção visual;
- altere arbitrariamente espaçamentos;
- crie novos estilos de card;
- use grids diferentes sem necessidade;
- transforme a página em um template SaaS genérico;
- dependa de efeitos para parecer sofisticada;
- replique literalmente a BrightLocal.

A BrightLocal é referência de **arquitetura, ritmo e disciplina estrutural**.

A ArthurLabs deve preservar sua própria identidade.

---

# 2. Princípio central

A página deve parecer:

- editorial;
- clara;
- precisa;
- espaçosa;
- modular;
- profissional;
- tecnológica sem parecer “tech”;
- orientada à conversão;
- simples mesmo quando existe bastante conteúdo.

O sistema deve priorizar:

```text
hierarquia
→ clareza
→ ritmo
→ prova
→ conversão
```

A interface nunca deve depender de decoração excessiva para funcionar.

---

# 3. DNA estrutural

A landing page segue estes princípios:

```text
1 container global consistente

1 sistema de spacing

1 anatomia de SectionHeader

poucos layouts recorrentes

headlines como elemento visual dominante

textos com largura controlada

muito whitespace

alternância de densidade

prova distribuída

CTA recorrente com a mesma intenção

componentes responsivos internamente
```

A página não deve ser tratada como uma coleção de seções independentes.

Ela deve funcionar como um sistema contínuo.

---

# 4. Estrutura da landing page

A landing page ArthurLabs possui cinco seções principais.

```text
01. Hero + confiança

02. Diagnóstico

03. Solução

04. Processo + prova

05. Conversão
```

Além delas:

```text
Header
Footer
```

Estrutura base:

```text
ArthurLabsLanding
│
├── Header
│
├── HeroSection
│   ├── SocialProof
│   ├── HeroHeading
│   ├── HeroDescription
│   └── PrimaryCTA
│
├── DiagnosticSection
│   ├── SectionHeader
│   └── DiagnosticGrid
│
├── SolutionSection
│   ├── SectionHeader
│   └── PresenceJourney
│       ├── Encontrado
│       ├── Compreendido
│       └── Contatado
│
├── ProcessSection
│   ├── SectionHeader
│   ├── ProcessSteps
│   └── ProofBlock
│
├── ConversionSection
│   ├── SectionHeader
│   └── PrimaryCTA
│
└── Footer
```

Não adicionar novas seções apenas porque são comuns em outras landing pages.

Toda seção precisa cumprir uma função real na conversão.

---

# 5. Foundations

## 5.1 Cores

A paleta é fixa.

```css
:root {
  --brand-300: #72FDA1;
  --brand-400: #35F27C;
  --brand-500: #00E676;
  --brand-600: #00C860;
  --brand-primary: var(--brand-500);

  --ink-975: #030504;
  --ink-950: #050806;
  --ink-900: #090D0A;
  --ink-850: #0D120E;
  --ink-800: #111812;
  --ink-700: #1B251D;
  --ink-600: #2A352D;
  --ink-500: #566159;
  --ink-400: #828C85;
  --ink-300: #AEB7B1;
  --ink-100: #EEF2EF;

  --paper: #F3F5F1;
  --surface-light: #FFFFFF;
  --line-light: #D9DED8;

  --success: #00E676;
  --warning: #F5B84B;
  --danger: #FF6577;
  --info: #7DA7FF;
}
```

### Regra de uso

A página é **light-first**.

Base preferencial:

```text
paper / white
+ dark text
+ green accent
```

Seções escuras devem ser usadas pontualmente para:

- aumentar contraste;
- marcar mudança de etapa;
- criar ritmo;
- destacar solução ou conversão.

O verde é assinatura.

Usar em:

- CTA;
- estados ativos;
- foco;
- progresso;
- indicadores;
- pequenos detalhes;
- números;
- links importantes.

Evitar:

- grandes fundos verdes;
- excesso de texto verde;
- bordas verdes em tudo;
- glow verde;
- gradients verdes decorativos.

---

# 6. Tipografia

## 6.1 Famílias

### Sora

Usar em:

- hero;
- headings;
- títulos;
- números grandes;
- statements;
- componentes editoriais.

### Inter

Usar em:

- corpo;
- navegação;
- CTA;
- labels;
- supporting text;
- metadados;
- componentes.

---

# 7. Escala tipográfica

## Display XL

```css
font-family: Sora;
font-weight: 600;
font-size: clamp(3.5rem, 7vw, 7.2rem);
line-height: .9;
letter-spacing: -.055em;
```

Uso:

- apenas composições realmente dominantes;
- não usar em várias seções seguidas.

## Display L

```css
font-family: Sora;
font-weight: 600;
font-size: clamp(3rem, 5.8vw, 5.5rem);
line-height: .94;
letter-spacing: -.055em;
```

Uso:

- hero principal;
- grandes statements.

## Heading L

```css
font-family: Sora;
font-weight: 600;
font-size: clamp(2.4rem, 4.5vw, 4rem);
line-height: .98;
letter-spacing: -.055em;
```

Uso:

- títulos principais de seção.

## Heading M

```css
font-family: Sora;
font-weight: 600;
font-size: clamp(1.9rem, 3vw, 2.8rem);
line-height: 1.05;
letter-spacing: -.05em;
```

Uso:

- subtítulos;
- proof blocks;
- statements.

## Heading S

```css
font-family: Sora;
font-weight: 600;
font-size: 1.35rem;
line-height: 1.15;
letter-spacing: -.035em;
```

Uso:

- títulos de componentes;
- itens de diagnóstico;
- blocos menores.

## Body L

```css
font-family: Inter;
font-size: 1.0625rem;
line-height: 1.72;
```

Uso:

- supporting copy de hero;
- introdução de seção.

## Body M

```css
font-family: Inter;
font-size: .9375rem;
line-height: 1.65;
```

Uso:

- conteúdo padrão.

## Body S

```css
font-family: Inter;
font-size: .8125rem;
line-height: 1.55;
```

Uso:

- metadados;
- apoio secundário.

## Eyebrow

```css
font-family: Inter;
font-size: .75rem;
font-weight: 600;
letter-spacing: .12em;
text-transform: uppercase;
```

Pode usar um pequeno ponto verde antes do texto.

---

# 8. Comportamento tipográfico

Headlines devem:

- ter poucas linhas;
- carregar peso visual;
- usar largura controlada;
- possuir bastante espaço ao redor;
- evitar quebras artificiais;
- evitar cores aleatórias em palavras.

Supporting copy deve:

- ser visivelmente secundário;
- ter largura menor que o heading;
- nunca atravessar toda a viewport;
- ser curto.

Nunca transformar todos os textos em headline.

---

# 9. Layout global

## 9.1 Container

Toda seção segue:

```text
viewport
└── section full-width
    └── container
        └── conteúdo
```

Token:

```css
--container: 1280px;
```

Implementação recomendada:

```css
.container {
  width: min(calc(100% - 80px), 1280px);
  margin-inline: auto;
}
```

Responsive:

```text
desktop: gutter ~40px por lado
tablet: 24–32px
mobile: 20px
```

Nunca criar `max-width` diferente arbitrariamente em cada seção.

---

# 10. Text containers

O container global não define largura de leitura.

Usar:

```css
--content-sm: 640px;
--content-md: 760px;
--content-lg: 920px;
```

Regra:

```text
Page container
1280px

Text container
640–920px
```

Headlines podem ocupar mais espaço.

Paragraphs devem ocupar menos.

---

# 11. Grid

Usar um grid conceitual de 12 colunas.

```text
|1|2|3|4|5|6|7|8|9|10|11|12|
```

Composições principais:

### 50/50

```text
|------ 6 ------|------ 6 ------|
```

### Texto + visual

```text
|---- 5 ----|gap|------- 7 -------|
```

### 3 colunas

```text
|--- 4 ---|--- 4 ---|--- 4 ---|
```

Não é obrigatório usar `grid-template-columns: repeat(12, 1fr)` em todo lugar.

O grid é uma regra de alinhamento e proporção.

---

# 12. Spacing

Escala base:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 40px;
--space-8: 48px;
--space-9: 64px;
--space-10: 80px;
--space-11: 96px;
--space-12: 128px;
--space-13: 160px;
```

Relações:

```text
micro
8–16px

componentes
16–32px

blocos
32–64px

seções
96–160px
```

Regras comuns:

```text
eyebrow → heading
12–16px

heading → supporting copy
20–24px

copy → CTA
28–32px

SectionHeader → conteúdo principal
40–64px

grid gap
16–24px
```

---

# 13. Section spacing

Não usar alturas fixas.

Preferir:

```css
.section {
  padding-block: clamp(4.5rem, 8vw, 8rem);
}
```

Seções de maior destaque:

```css
.section-lg {
  padding-block: clamp(5.5rem, 10vw, 10rem);
}
```

O conteúdo define a altura.

---

# 14. Primitives

O design system deve começar com poucas primitives.

## Container

Responsável por:

- largura;
- gutters;
- alinhamento horizontal.

Não deve controlar spacing vertical.

## Section

Responsável por:

- padding vertical;
- background;
- modo claro/escuro.

Variações:

```text
paper
white
ink
```

## Stack

Responsável por empilhamento vertical.

Exemplo:

```text
heading
↓
24px
paragraph
↓
32px
CTA
```

Nunca usar margins arbitrárias entre todos os filhos se `Stack` puder resolver.

## Cluster

Usar para:

- rating cluster;
- navegação;
- grupos de botões;
- logos;
- tags.

Deve permitir wrap.

## Grid

Variações principais:

```text
2-col
3-col
12-col
```

Grid controla layout.

Não controla aparência do conteúdo.

## SectionHeader

Estrutura:

```text
Eyebrow

Heading

Supporting copy
```

Variações:

```text
left
center
light
dark
```

Não colocar CTA automaticamente dentro do `SectionHeader`.

## Button

Variações:

```text
primary
dark
outline
ghost
```

Estados obrigatórios:

```text
default
hover
focus-visible
active
disabled
```

## Surface

Variações:

```text
paper
white
ink
brand
```

Usar apenas quando houver necessidade real de:

- agrupamento;
- contraste;
- destaque;
- materialidade.

Não transformar tudo em surface.

---

# 15. Radius

Escala:

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
```

Uso:

```text
buttons
→ pill

cards / surfaces
→ md / lg

inputs
→ sm / md
```

Evitar misturar muitos raios dentro da mesma composição.

---

# 16. Shadows

Shadows são opcionais e discretos.

```css
--shadow-soft:
  0 10px 30px rgba(3,5,4,.06);

--shadow-lifted:
  0 18px 60px rgba(3,5,4,.10);
```

Não usar:

- glow;
- sombras coloridas;
- sombras muito difusas;
- elevação em todos os componentes.

---

# 17. Buttons

## Primary

```text
background: brand-500
text: ink-975
radius: pill
min-height: 48px
```

Hover:

```text
brand-400
translateY(-1px)
```

Press:

```text
scale(.98)
```

Focus:

```css
box-shadow:
  0 0 0 4px rgba(0,230,118,.20);
```

Mobile:

CTA principal pode virar:

```css
width: 100%;
```

Nunca ter vários botões primários competindo na mesma região.

---

# 18. Header

Estrutura:

```text
Logo
Navigation
CTA
```

Desktop:

```text
[ ArthurLabs ]    link link link       [ CTA ]
```

Mobile:

```text
[ ArthurLabs ]                       [ menu ]
```

Regras:

- evitar mega-menu;
- manter altura compacta;
- CTA visível no desktop;
- navegação secundária;
- header não deve dominar a página.

---

# 19. SocialProof

Função:

- criar confiança antes ou próximo da promessa principal.

Variações possíveis:

```text
ratings
logos
stats
depoimentos curtos
```

Estrutura:

```text
proof label

cluster
```

Não inventar números ou logos.

Se a ArthurLabs ainda não tiver volume suficiente de prova social, usar:

- projetos reais;
- depoimentos reais;
- casos;
- decisões de projeto;
- evidências verificáveis.

---

# 20. HeroSection

Anatomia:

```text
SocialProof

HeroHeading

HeroDescription

PrimaryCTA
```

Composição preferencial:

```text
centralizada
```

O heading é o principal elemento gráfico.

Não é obrigatório usar:

- mockup;
- ilustração;
- screenshot;
- imagem.

Se um visual for usado, ele deve reforçar o conceito e não competir com o heading.

---

# 21. DiagnosticSection

Objetivo visual:

- aumentar densidade;
- criar reconhecimento de problema;
- organizar situações comparáveis.

Anatomia:

```text
SectionHeader
DiagnosticGrid
```

Grid desktop:

```text
3 colunas
```

Tablet:

```text
2 colunas
```

Mobile:

```text
1 coluna
```

Cada item:

```text
index
grande espaço
title
supporting text
```

Cards devem parecer parte de um sistema contínuo.

Preferir grid com divisórias compartilhadas em vez de vários cards flutuantes desconectados.

---

# 22. PresenceJourney

Representa:

```text
Encontrado
→
Compreendido
→
Contatado
```

Uso preferencial:

- seção escura;
- três colunas;
- composição editorial;
- bordas simples;
- muito espaço interno.

Desktop:

```text
01 | 02 | 03
```

Mobile:

```text
01
│
02
│
03
```

Cada etapa:

```text
number
space
title
supporting text
```

O verde pode identificar:

- número;
- estado;
- pequeno detalhe.

Não usar grandes blocos verdes.

---

# 23. ProcessSteps

Processo base:

```text
Diagnóstico
Estratégia
Implementação
Publicação
```

Desktop:

```text
number | title | description
```

Mobile:

```text
number | title
         description
```

Preferir rows com divisórias.

Não transformar necessariamente cada etapa em card.

---

# 24. ProofBlock

Função:

- introduzir prova dentro do fluxo;
- sustentar confiança após explicar processo.

Estrutura:

```text
visual / prova
+
copy
```

Desktop:

```text
visual | copy
```

Mobile:

```text
visual
copy
```

O visual pode ser:

- screenshot real;
- projeto;
- busca;
- resultado;
- dashboard;
- antes/depois;
- depoimento.

Não usar mockup fictício na versão final quando houver material real.

---

# 25. ConversionSection

Última seção principal.

Objetivo:

- encerrar a narrativa;
- reduzir fricção;
- gerar contato.

Composição:

```text
eyebrow
heading
supporting copy
CTA
```

Preferência:

```text
centralizada
dark
muito whitespace
```

Não adicionar novas informações complexas nesta seção.

Nada depois deve competir com o CTA.

---

# 26. Footer

Footer deve ser minimalista.

Pode conter:

- logo;
- links essenciais;
- contato;
- legal;
- redes.

Não repetir toda a navegação do site se isso não for necessário.

---

# 27. Alternância de densidade

A página deve respirar.

Ritmo recomendado:

```text
Hero
baixa densidade

Diagnóstico
alta densidade

Solução
média densidade

Processo + prova
média / alta densidade

Conversão
baixa densidade
```

Não manter a mesma densidade visual do início ao fim.

---

# 28. Light / dark rhythm

Direção recomendada:

```text
Hero
light

Diagnóstico
paper/light

Solução
dark

Processo
light

Conversão
dark
```

Isso não é uma obrigação absoluta.

Mas qualquer alteração deve preservar alternância clara e ritmo.

---

# 29. Responsividade

Usar breakpoints por comportamento do conteúdo.

Referência:

```text
mobile
< 720px

compact
720–1024px

desktop
> 1024px
```

---

# 30. Desktop

Comportamento:

```text
container até 1280px
gutter ~40px
3-column grids
split sections
nav completa
headlines na escala máxima
```

---

# 31. Compact

Comportamento:

```text
gutter 24–32px
3 cols → 2 cols quando necessário
headlines continuam fluidas
nav pode colapsar
text containers permanecem restritos
```

---

# 32. Mobile

Comportamento:

```text
gutter 20px
grids → 1 coluna
CTA pode ocupar 100%
split → stack
processo → vertical
proof → visual acima da copy
```

Touch targets:

```text
mínimo 44 × 44px
```

Não esconder conteúdo importante apenas para “simplificar” o mobile.

Reorganizar antes de remover.

---

# 33. Fluid typography

Preferir `clamp()`.

Exemplo:

```css
font-size:
  clamp(3rem, 6vw, 5.5rem);
```

Evitar criar dezenas de media queries tipográficas.

---

# 34. Fluid spacing

Preferir:

```css
padding-block:
  clamp(4.5rem, 8vw, 8rem);
```

Não fixar:

```css
height: 700px;
```

em seções de conteúdo.

---

# 35. Component responsiveness

Cada componente deve saber se adaptar internamente.

Exemplo:

## SocialProof

Desktop:

```text
A  B  C  D
```

Mobile:

```text
A  B
C  D
```

## Journey

Desktop:

```text
01 — 02 — 03
```

Mobile:

```text
01
│
02
│
03
```

## ProofBlock

Desktop:

```text
visual | copy
```

Mobile:

```text
visual
copy
```

Nunca resolver responsividade apenas diminuindo tudo.

---

# 36. Motion

Motion é suporte.

Não é protagonista.

Tokens:

```css
--duration-fast: 160ms;
--duration-base: 220ms;

--ease-standard:
  cubic-bezier(.22,1,.36,1);
```

Permitido:

- hover translate 1px;
- press scale;
- fade;
- reveal leve;
- stagger curto;
- transição de menu.

Evitar:

- bounce;
- parallax excessivo;
- partículas;
- scroll hijacking;
- animações longas;
- elementos flutuando sem função.

---

# 37. Reduced motion

Obrigatório:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

---

# 38. Acessibilidade

Obrigatório:

- contraste adequado;
- HTML semântico;
- keyboard navigation;
- focus visible;
- labels;
- touch target ≥ 44px;
- não comunicar estado apenas por cor;
- reduced motion;
- heading hierarchy correta.

---

# 39. Regras para cards

Cards não são o layout padrão.

Usar card apenas quando:

- o conteúdo é independente;
- o agrupamento reduz ambiguidade;
- existem itens comparáveis;
- o bloco precisa de uma surface própria.

Evitar:

```text
card
card
card

card
card
card
```

em todas as seções.

Preferir:

- rows;
- grids com divisórias;
- composição editorial;
- surfaces maiores;
- bordas.

---

# 40. Imagens

Imagem deve existir quando ajuda a explicar:

- projeto;
- prova;
- resultado;
- contexto;
- processo.

Não usar imagem apenas para preencher espaço.

Evitar:

- stock corporativo genérico;
- 3D decorativo;
- hologramas;
- glow;
- mockups aleatórios.

---

# 41. Iconografia

Ícones não são obrigatórios.

Usar apenas quando:

- explicam ação;
- reduzem ambiguidade;
- representam estado;
- ajudam leitura.

Evitar colocar um ícone em todos os títulos e cards.

---

# 42. Regras de composição

## Fazer

- manter container consistente;
- usar text containers menores;
- alternar densidade;
- usar títulos como elemento principal;
- distribuir prova;
- usar verde como accent;
- trabalhar com poucos layouts;
- permitir muito whitespace;
- reutilizar primitives;
- evoluir componentes a partir do produto real.

## Evitar

- gradients decorativos;
- glassmorphism;
- neumorphism;
- glow;
- blobs;
- estética cyberpunk;
- grids holográficos;
- excesso de cards;
- layouts diferentes em cada seção;
- radius arbitrário;
- sombras pesadas;
- alturas fixas;
- animações gratuitas.

---

# 43. Inventário de componentes

## Primitives

```text
Container
Section
Stack
Cluster
Grid
```

## Typography

```text
Eyebrow
DisplayXL
DisplayL
HeadingL
HeadingM
HeadingS
BodyL
BodyM
BodyS
```

## UI

```text
Button
Surface
Divider
Logo
NavigationLink
```

## Landing

```text
Header
SocialProof
SectionHeader
HeroSection
DiagnosticGrid
DiagnosticItem
PresenceJourney
JourneyStep
ProcessSteps
ProcessStep
ProofBlock
ConversionSection
Footer
```

---

# 44. Variantes

## Button

```text
primary
dark
outline
ghost
disabled
```

## Section

```text
paper
white
ink
```

## SectionHeader

```text
left
center
light
dark
```

## Surface

```text
paper
white
ink
brand
```

## SocialProof

```text
ratings
logos
stats
testimonial
```

## ProofBlock

```text
visual-left
visual-right
```

---

# 45. Arquitetura de código recomendada

```text
components/
├── layout/
│   ├── container.tsx
│   ├── section.tsx
│   ├── stack.tsx
│   ├── cluster.tsx
│   └── grid.tsx
│
├── typography/
│   ├── eyebrow.tsx
│   ├── heading.tsx
│   └── text.tsx
│
├── ui/
│   ├── button.tsx
│   ├── surface.tsx
│   ├── divider.tsx
│   └── logo.tsx
│
└── landing/
    ├── header.tsx
    ├── social-proof.tsx
    ├── section-header.tsx
    ├── hero-section.tsx
    ├── diagnostic-section.tsx
    ├── presence-journey.tsx
    ├── process-section.tsx
    ├── proof-block.tsx
    ├── conversion-section.tsx
    └── footer.tsx
```

Não criar:

```text
BrightLocalHero.tsx
BrightLocalCard.tsx
BrightLocalSection.tsx
```

A referência deve orientar o sistema, não o naming ou estrutura do código.

---

# 46. Regra de reutilização

Antes de criar um componente novo, perguntar:

```text
Isso aparece mais de uma vez?

Existe comportamento próprio?

Possui estados?

Precisa ser mantido como unidade?

É um padrão da ArthurLabs ou apenas desta seção?
```

Se a resposta for não, provavelmente não precisa virar componente do design system.

---

# 47. Regra de composição para IA

Ao gerar uma nova versão:

## Passo 1

Identificar a seção.

```text
Hero
Diagnóstico
Solução
Processo
Conversão
```

## Passo 2

Escolher primitives.

```text
Section
Container
Stack
Grid / Cluster
```

## Passo 3

Aplicar SectionHeader quando necessário.

## Passo 4

Escolher o layout mais simples capaz de organizar o conteúdo.

## Passo 5

Aplicar a escala de spacing existente.

## Passo 6

Verificar responsividade.

## Passo 7

Só então adicionar elementos específicos.

Nunca começar por:

```text
efeito
animação
card
imagem
decoração
```

---

# 48. Critério de qualidade

Uma implementação deve responder positivamente:

```text
Existe um eixo claro?

A leitura funciona sem efeitos?

Os headings dominam corretamente?

O texto possui largura confortável?

As seções respiram?

O verde é pontual?

Os layouts parecem parte do mesmo sistema?

Há alternância de densidade?

Os componentes funcionam no mobile?

O CTA continua evidente?

Existe prova próxima das afirmações?

A página parece ArthurLabs sem depender da logo?
```

Se várias respostas forem não, revisar.

---

# 49. Anti-generic checklist

Antes de aprovar:

- [ ] não parece template SaaS;
- [ ] não tem cards demais;
- [ ] não possui gradients decorativos;
- [ ] não usa glow;
- [ ] não possui estética tech genérica;
- [ ] não usa ícones como decoração;
- [ ] mantém whitespace;
- [ ] mantém grid consistente;
- [ ] headlines continuam dominantes;
- [ ] verde não domina a composição;
- [ ] proof não está isolado apenas em uma seção;
- [ ] não existem CTAs concorrentes;
- [ ] mobile não é apenas desktop reduzido.

---

# 50. Hierarquia da landing

A página deve ser visualmente percebida assim:

```text
HERO
muito espaço
headline dominante
CTA claro


DIAGNÓSTICO
maior densidade
problemas comparáveis


SOLUÇÃO
contraste forte
progressão em três etapas


PROCESSO
estrutura clara
prova contextual


CONVERSÃO
muito espaço
uma única ação
```

---

# 51. Regra sobre BrightLocal

BrightLocal é uma referência de:

- arquitetura;
- ritmo;
- spacing;
- disciplina;
- uso de prova;
- containers;
- organização de conteúdo;
- responsividade;
- alternância de densidade.

Não copiar:

- branding;
- cores;
- formas proprietárias;
- ilustrações;
- copy;
- componentes específicos;
- iconografia;
- layouts idênticos.

A ArthurLabs deve absorver o raciocínio estrutural.

---

# 52. Regra final

O design system da landing page ArthurLabs não deve ser grande.

Ele deve ser suficiente.

A prioridade é:

```text
poucas primitives
+
regras claras
+
componentes que surgem de uso real
+
consistência
```

Se uma nova decisão visual não melhora:

- compreensão;
- hierarquia;
- conversão;
- responsividade;
- manutenção;

ela provavelmente não deve ser adicionada.

O objetivo não é criar o design system mais completo possível.

O objetivo é criar um sistema simples o suficiente para ser replicado com precisão e flexível o suficiente para evoluir junto com a ArthurLabs.
