## ARQUIVO: `.claude/rules/styles.md`

---

paths:

- "\*_/_.css"
- "components/\*_/_.tsx"

---

# Styling Rules

`docs/design.md` é a fonte de verdade visual da landing page.

`styles/tokens.css` contém os tokens executáveis.

Não criar uma nova direção visual durante a implementação.

---

## Princípio geral

A interface ArthurLabs deve permanecer:

- editorial;
- clara;
- precisa;
- espaçosa;
- light-first;
- orientada à conversão;
- tecnológica sem parecer "tech".

O design deve funcionar mesmo sem efeitos decorativos.

---

## Tokens

Não adicionar valores visuais arbitrários quando já existir token equivalente.

Não inventar uma nova:

- cor;
- escala de spacing;
- escala tipográfica;
- radius;
- shadow;
- breakpoint;

sem necessidade comprovada.

Se uma nova decisão for realmente necessária, primeiro verificar `docs/design.md`.

---

## Cores

Usar apenas a paleta definida pela ArthurLabs.

O verde é accent.

Usar principalmente em:

- CTA;
- focus;
- estados ativos;
- indicadores;
- progressão;
- detalhes pontuais.

Evitar:

- grandes fundos verdes;
- glow verde;
- bordas verdes em todos os componentes;
- palavras aleatórias destacadas em verde.

---

## Light-first

A landing é predominantemente clara.

Direção inicial:

```text
Hero
light

Diagnóstico
paper / light

Solução
dark

Processo
light

Conversão
dark
```

Alterações são permitidas somente quando preservarem:

- ritmo;
- hierarquia;
- contraste;
- identidade.

---

## Container

Todas as seções full-width devem possuir container interno consistente.

Referência principal:

```css
max-width: 1280px;
```

Gutters:

```text
desktop
~40px por lado

compact
24–32px

mobile
20px
```

Não usar `max-width` arbitrário diferente em cada seção.

---

## Text containers

Texto corrido não deve ocupar toda a largura do container.

Referências:

```text
content-sm
640px

content-md
760px

content-lg
920px
```

Headlines podem ser mais largas.

Paragraphs devem permanecer contidos.

---

## Layout primitives

Antes de criar CSS estrutural específico, verificar se o problema pode ser resolvido por:

- `Container`;
- `Section`;
- `Stack`;
- `Cluster`;
- `Grid`.

Essas primitives são a base da composição.

Não duplicar o comportamento delas em cada seção.

---

## Grid

Pensar em grid conceitual de 12 colunas.

Composições preferidas:

```text
6 / 6
5 / 7
4 / 4 / 4
```

Não criar layouts complexos quando uma composição simples resolver.

---

## Spacing

Use a escala definida no design system.

Referência:

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

Evitar margins arbitrárias entre elementos irmãos.

Preferir:

- `Stack`;
- `Grid`;
- `Cluster`;
- `Section`.

---

## Section spacing

Não usar alturas fixas.

Preferir spacing fluido.

Exemplo:

```css
padding-block: clamp(4.5rem, 8vw, 8rem);
```

Nunca depender de:

```css
height: 700px;
```

para estruturar uma seção com conteúdo.

---

## Typography

Use:

```text
Sora
→ displays e headings

Inter
→ body, UI e supporting copy
```

Preferir `clamp()` para grandes títulos.

Não criar dezenas de media queries tipográficas.

---

## Tailwind

Tailwind é ferramenta de composição.

Não usar valores arbitrários quando existir uma decisão equivalente no sistema.

Evitar:

```tsx
mt-[37px]
rounded-[17px]
max-w-[773px]
text-[#00E676]
```

Valores arbitrários só devem existir quando forem realmente específicos e justificáveis.

---

## Cards

Cards não são o layout padrão.

Antes de criar um card, pergunte se o conteúdo realmente:

- é uma unidade independente;
- precisa de agrupamento;
- possui estados;
- se beneficia de uma surface.

Quando possível, preferir:

- rows;
- divisórias;
- grids;
- composição editorial;
- surfaces maiores.

Evitar mosaicos de cards em todas as seções.

---

## Surfaces

Variações previstas:

```text
paper
white
ink
brand
```

`brand` deve ser usado pontualmente.

Não transformar cada bloco em surface.

---

## Radius

Usar somente a escala definida pelo sistema.

Não inventar novos valores de radius dentro de componentes individuais.

---

## Shadows

Sombras devem ser discretas.

Não usar:

- glow;
- sombras coloridas;
- sombras pesadas;
- elevação em todos os componentes.

Bordas e contraste devem resolver a maior parte da estrutura.

---

## Responsive

Não construir mobile como desktop reduzido.

Quando o conteúdo deixar de funcionar:

- reorganizar;
- empilhar;
- alterar grid;
- alterar ordem;
- ajustar proporções.

Desktop:

```text
3 colunas
splits
nav completa
```

Compact:

```text
3 → 2 colunas quando necessário
```

Mobile:

```text
1 coluna
splits → stack
processo → vertical
CTA pode ocupar 100%
```

---

## Mobile

Touch targets devem possuir pelo menos aproximadamente:

```text
44 × 44px
```

Não esconder informação importante apenas para reduzir conteúdo.

Reorganizar antes de remover.

---

## Motion

Motion é suporte.

Permitido:

- fade;
- reveal leve;
- hover de 1–2px;
- press;
- stagger curto;
- menu transition.

Evitar:

- bounce;
- parallax excessivo;
- scroll hijacking;
- partículas;
- animações longas;
- objetos flutuando sem função.

---

## Reduced motion

Qualquer animação relevante deve respeitar:

```css
@media (prefers-reduced-motion: reduce) {
    /* reduzir ou remover animações */
}
```

---

## Anti-patterns

Não usar:

- gradients decorativos;
- glassmorphism;
- neumorphism;
- glow;
- blobs;
- estética cyberpunk;
- grids holográficos;
- partículas decorativas;
- excesso de cards;
- sombras pesadas;
- efeitos "tech" sem função.

---

## Regra final

Antes de adicionar qualquer decisão visual nova, pergunte:

```text
Isso melhora compreensão?

Isso melhora hierarquia?

Isso melhora conversão?

Isso melhora responsividade?

Isso melhora manutenção?
```

Se não, não adicionar.

---

# ARQUIVO: `.claude/rules/seo.md`

---
