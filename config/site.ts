// Fonte de verdade institucional. Não duplicar estes valores em outros arquivos.
// Campos marcados como TODO ainda não possuem dado real definido para a ArthurLabs.

interface SiteConfig {
  name: string
  shortName: string
  domain: string
  url: string
  title: string
  description: string
  slogan: string
  locale: string
  language: string
  contact: {
    email: string
    whatsapp: string
    whatsappUrl: string
  }
  social: {
    instagram?: string
    linkedin?: string
  }
}

export const siteConfig: SiteConfig = {
  name: "ArthurLabs",
  shortName: "ArthurLabs",
  domain: "arthurlabs.io",
  url: "https://arthurlabs.io",
  title: "ArthurLabs — Sua empresa, onde seus clientes procuram",
  description:
    "A ArthurLabs estrutura a presença digital de empresas para que sejam encontradas, compreendidas e contatadas no ambiente digital.",
  slogan: "Sua empresa, onde seus clientes procuram.",
  locale: "pt_BR",
  language: "pt-BR",
  contact: {
    // TODO: e-mail de contato oficial ainda não definido.
    email: "contato@arthurlabs.example",
    whatsapp: "5521990014222",
    whatsappUrl: "https://wa.me/5521990014222",
  },
  social: {
    // TODO: redes sociais ainda não definidas.
  },
}
