paths:

- "app/\*_/_"
- "config/site.ts"
- "content/\*_/_.ts"
- "lib/seo.ts"
- "lib/structured-data.ts"
- "public/llms.txt"

---

# SEO Rules

SEO faz parte da arquitetura da aplicação.

Não deve ser tratado apenas como otimização posterior.

---

## Source of truth

Informações institucionais devem ser centralizadas em:

```text
config/site.ts
```

Não duplicar em múltiplos arquivos:

- nome;
- domínio;
- descrição;
- email;
- WhatsApp;
- redes sociais;
- locale.

---

## Metadata API

Use a Metadata API do Next.js.

Configurar quando aplicável:

- `metadataBase`;
- title default;
- title template;
- description;
- canonical;
- Open Graph;
- Twitter metadata.

Não criar manualmente tags HTML quando o Next.js já possuir API nativa apropriada.

---

## Titles

Títulos devem ser:

- claros;
- específicos;
- coerentes com o conteúdo real da página.

Não criar títulos com keyword stuffing.

Não repetir keywords artificialmente.

---

## Description

A description deve explicar de forma objetiva:

- o que é a ArthurLabs;
- o que a página oferece;
- para quem é relevante.

Não escrever descrições genéricas apenas para preencher metadata.

---

## Canonical

Toda página indexável deve possuir canonical coerente.

A home deve apontar para o domínio canônico oficial.

Não criar múltiplas URLs concorrentes para o mesmo conteúdo.

---

## Semantic HTML

A página deve possuir apenas um:

```html
<h1></h1>
```

Seções principais usam normalmente:

```html
<h2></h2>
```

Subseções seguem a hierarquia correta.

Não escolher heading pelo tamanho visual.

---

## Content

O conteúdo deve ser escrito primeiro para pessoas.

Não praticar:

- keyword stuffing;
- conteúdo escondido;
- repetição artificial;
- parágrafos criados apenas para SEO;
- listas de cidades sem contexto;
- páginas doorway.

SEO deve reforçar conteúdo real.

---

## Crawling

Manter:

```text
/robots.txt
/sitemap.xml
```

O `robots.ts` deve apontar para o sitemap.

Não bloquear acidentalmente páginas públicas indexáveis.

---

## Sitemap

O sitemap deve conter somente URLs:

- públicas;
- canônicas;
- indexáveis.

Não incluir URLs inexistentes ou planejadas.

---

## Structured data

JSON-LD deve representar apenas informações reais.

Começar apenas com schemas justificáveis, como:

```text
Organization
WebSite
```

quando os dados necessários existirem.

Nunca inventar:

- reviews;
- aggregateRating;
- quantidade de clientes;
- endereço;
- awards;
- preço;
- estatísticas;
- resultados comerciais.

---

## Organization

Dados de `Organization` devem ser derivados de informações reais presentes no projeto.

Não preencher campos apenas porque o schema permite.

---

## LocalBusiness

Não utilizar `LocalBusiness` apenas porque a ArthurLabs atende empresas locais.

Usar somente se a própria ArthurLabs possuir os dados e características necessários para ser representada corretamente dessa forma.

---

## Images

Imagens informativas devem possuir:

- dimensões adequadas;
- otimização;
- `alt` descritivo;
- contexto real.

Imagens decorativas devem utilizar `alt=""` quando apropriado.

Não inserir keywords artificialmente no `alt`.

---

## Open Graph

Toda página pública relevante deve possuir metadata de compartilhamento coerente.

Utilizar quando apropriado:

```text
opengraph-image.tsx
twitter-image.tsx
```

As imagens devem seguir a identidade ArthurLabs.

---

## Performance

Performance faz parte do SEO técnico.

Priorizar:

- Server Components;
- pouco JavaScript;
- HTML inicial completo;
- fontes otimizadas;
- imagens otimizadas;
- layout estável.

Evitar prejudicar LCP com:

- scripts desnecessários;
- imagens enormes no hero;
- animações bloqueantes;
- recursos externos sem necessidade.

---

## Links

Links internos devem ser rastreáveis e semanticamente corretos.

Use `next/link` para navegação interna.

Não usar botões para navegação.

---

## robots.ts

Deve:

- permitir crawling das páginas públicas;
- apontar para o sitemap;
- utilizar o domínio centralizado em `siteConfig`.

Não adicionar bloqueios especulativos.

---

## sitemap.ts

Deve utilizar URLs absolutas baseadas no domínio canônico.

Não hardcodar o domínio em vários arquivos.

---

## llms.txt

Manter:

```text
public/llms.txt
```

O arquivo deve ser:

- curto;
- factual;
- legível;
- atualizado.

Pode explicar:

- o que é a ArthurLabs;
- o foco da empresa;
- a URL oficial;
- recursos públicos relevantes.

Não usar `llms.txt` como:

- lista de keywords;
- sitemap alternativo;
- arquivo publicitário;
- substituto de metadata;
- substituto de robots;
- substituto de structured data.

---

## Informação desconhecida

Nunca inventar dados para completar SEO.

Quando um dado necessário ainda não existir:

- deixar claramente pendente em `config/site.ts`;
- usar placeholder técnico identificável;
- informar que o valor precisa ser definido.

Não transformar um placeholder em dado público final.

---

## Regra final

O SEO da ArthurLabs deve ser:

```text
técnico
+
semântico
+
factual
+
performático
+
útil para pessoas
```

Não otimizar para mecanismos de busca sacrificando clareza ou confiança.
