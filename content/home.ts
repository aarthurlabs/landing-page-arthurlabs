// Estrutura de conteúdo da home, derivada de docs/structure.md.
// Copy provisória: coerente com o documento, não é a redação comercial final.

export interface SocialProofContent {
  label: string
  items: { value: string; description: string }[]
}

export interface HomeContent {
  hero: {
    headline: string
    description: string
    ctaLabel: string
    supportingText: string
    socialProof: SocialProofContent | null
  }
  diagnostic: {
    eyebrow: string
    heading: string
    description: string
    items: { title: string; description: string }[]
  }
  solution: {
    eyebrow: string
    heading: string
    description: string
    journey: { step: string; title: string; description: string }[]
  }
  process: {
    eyebrow: string
    heading: string
    description: string
    steps: { number: string; title: string; description: string }[]
    proof: {
      eyebrow: string
      title: string
      description: string
      questionsLabel: string
      questions: string[]
    }
  }
  conversion: {
    eyebrow: string
    heading: string
    description: string
    ctaLabel: string
  }
}

export const homeContent: HomeContent = {
  hero: {
    headline: "Quando alguém procura pelo que sua empresa faz, ela aparece?",
    description:
      "O problema não é não ter um site. É a empresa não estar bem posicionada quando alguém procura pelo serviço, produto ou solução que ela oferece.",
    ctaLabel: "Analisar minha presença digital",
    supportingText: "O primeiro passo é entender como sua empresa é encontrada hoje.",
    // TODO: prova social real (projetos, depoimentos, resultados verificáveis) ainda não disponível.
    // Enquanto for null, o hero não exibe nenhum bloco de prova — nada fictício é publicado.
    socialProof: null,
  },
  diagnostic: {
    eyebrow: "Diagnóstico",
    heading: "Estar na internet não significa ter uma presença digital bem estruturada.",
    description:
      "Possuir Instagram, Google ou site isoladamente não significa que esses elementos estejam trabalhando juntos para tornar a empresa encontrável.",
    items: [
      {
        title: "Difícil de encontrar no Google",
        description: "A empresa não aparece quando alguém procura pelo que ela oferece.",
      },
      {
        title: "Informações espalhadas ou desatualizadas",
        description: "Os dados sobre a empresa estão inconsistentes entre os canais digitais.",
      },
      {
        title: "Site que não explica o negócio",
        description: "Quem chega até o site não entende rapidamente o que a empresa faz.",
      },
      {
        title: "Dependência de indicação ou Instagram",
        description: "A empresa depende quase inteiramente de canais informais para ser encontrada.",
      },
      {
        title: "Concorrentes aparecem primeiro",
        description: "Nas buscas relevantes, outras empresas aparecem antes.",
      },
      {
        title: "Sem caminho claro até o contato",
        description: "Não existe uma jornada clara entre encontrar a empresa e falar com ela.",
      },
    ],
  },
  solution: {
    eyebrow: "Solução",
    heading: "Não vendemos uma landing page pronta.",
    description:
      "Identificamos o problema e estruturamos a solução necessária para resolvê-lo — que pode envolver site institucional, landing pages, SEO, presença no Google e configurações técnicas de descoberta.",
    journey: [
      {
        step: "01",
        title: "Encontrado",
        description: "A empresa aparece quando alguém procura pelo que ela oferece.",
      },
      {
        step: "02",
        title: "Compreendido",
        description: "Quem encontra a empresa entende rapidamente o que ela faz e para quem.",
      },
      {
        step: "03",
        title: "Contatado",
        description: "Existe um caminho claro entre a descoberta e o primeiro contato.",
      },
    ],
  },
  process: {
    eyebrow: "Processo",
    heading: "Primeiro entendemos o negócio e o problema. Depois decidimos o que precisa ser construído.",
    description: "Um processo simples de entender, pensado para reduzir o risco percebido.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description: "Entendemos o negócio, como a empresa é encontrada hoje e onde existem obstáculos.",
      },
      {
        number: "02",
        title: "Estratégia",
        description: "Definimos o que realmente precisa ser feito — sem partir de um pacote pré-definido.",
      },
      {
        number: "03",
        title: "Implementação",
        description: "Construímos e configuramos a solução necessária.",
      },
      {
        number: "04",
        title: "Publicação e configuração",
        description: "Garantimos que a estrutura esteja publicada, configurada e preparada para ser descoberta.",
      },
    ],
    // Sem cases ou métricas reais disponíveis, a prova demonstra o raciocínio do
    // diagnóstico — conforme docs/structure.md, preferível a prova fraca ou artificial.
    proof: {
      eyebrow: "Diagnóstico",
      title: "O formato da solução muda porque o problema muda.",
      description:
        "Antes de propor qualquer entrega, precisamos entender o que ela precisa resolver. Uma empresa pode não ter referência oficial no digital, outra pode já ter um site e não ser encontrada, outra pode aparecer nas buscas com informações desatualizadas.",
      questionsLabel: "Perguntas que orientam o diagnóstico",
      questions: [
        "Como essa empresa é encontrada hoje?",
        "O que aparece quando alguém procura por ela?",
        "O cliente consegue entender rapidamente o que ela oferece?",
        "As informações disponíveis são claras e consistentes?",
        "Existe algum obstáculo entre encontrar a empresa e entrar em contato?",
      ],
    },
  },
  conversion: {
    eyebrow: "Conversão",
    heading: "Quer saber como sua empresa está sendo encontrada hoje?",
    description: "Vamos analisar como sua empresa aparece no digital.",
    ctaLabel: "Falar com a ArthurLabs",
  },
}
