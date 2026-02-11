export type Lang = "pt" | "en";

export type LocalizedString = {
  pt: string;
  en: string;
};

export const defaultLang: Lang = "pt";

export const resolveLang = (value?: string | null): Lang =>
  value === "en" ? "en" : "pt";

export const t = (value: LocalizedString | string, lang: Lang) => {
  if (typeof value === "string") {
    return value;
  }
  return value[lang] || value[defaultLang] || "";
};

export const ui = {
  nav: {
    home: { pt: "Início", en: "Home" },
    menu: { pt: "Menu", en: "Menu" },
    gallery: { pt: "Galeria", en: "Gallery" },
    contact: { pt: "Contacto", en: "Contact" }
  },
  cta: {
    directions: { pt: "Obter direções", en: "Get directions" },
    call: { pt: "Ligar", en: "Call" },
    instagram: { pt: "Mensagem no Instagram", en: "Instagram DM" }
  },
  labels: {
    featured: { pt: "Destaques", en: "Featured" },
    whatYouCanGet: { pt: "O que pode pedir", en: "What you can get" },
    menuHighlights: { pt: "Destaques do menu", en: "Menu highlights" },
    simpleMenu: { pt: "Um menu simples, bem feito", en: "A simple menu, done well" },
    whatsNew: { pt: "Novidades", en: "What’s new" },
    hours: { pt: "Horário", en: "Hours" },
    findUs: { pt: "Como chegar", en: "Find us" },
    tapMaps: { pt: "Toque para abrir no Maps", en: "Tap to open in Maps" },
    tapCall: { pt: "Toque para direções ou ligar", en: "Tap for directions or call" },
    openNow: { pt: "Aberto agora", en: "Open now" },
    closedNow: { pt: "Fechado agora", en: "Closed now" },
    hoursUnavailable: { pt: "Horário indisponível", en: "Hours unavailable" },
    galleryTitle: { pt: "Momentos do café", en: "Moments from the café" },
    gallerySubtitle: {
      pt: "Deslize para ver toda a coleção.",
      en: "Swipe through the full collection."
    },
    contactTitle: {
      pt: "Visite-nos em Torres Novas",
      en: "Visit us in Torres Novas"
    },
    contactIntro: {
      pt: "Estamos prontos para o receber. Use os botões para ligar ou abrir direções.",
      en: "We’re ready to welcome you. Use the buttons below to call or open directions."
    },
    address: { pt: "Morada", en: "Address" },
    updates: { pt: "Atualizações", en: "Updates" },
    updatesCopy: {
      pt: "Para horários e novidades em tempo real, envie-nos mensagem no Instagram.",
      en: "For real-time hours and specials, DM us on Instagram."
    },
    socialProofTitle: {
      pt: "O que os clientes mencionam",
      en: "What customers mention"
    },
    latestSocial: {
      pt: "Últimas novidades",
      en: "Latest updates"
    },
    latestSocialTitle: {
      pt: "Posts recentes das redes sociais",
      en: "Recent social posts"
    },
    latestSocialCopy: {
      pt: "Acompanhe as novidades no Facebook e Instagram.",
      en: "Follow updates on Facebook and Instagram."
    },
    instagramNote: {
      pt: "Os posts mais recentes do Instagram abrem diretamente no perfil.",
      en: "Latest Instagram posts open directly on the profile."
    },
    openPage: {
      pt: "Abrir página",
      en: "Open page"
    },
    heroNote: {
      pt: "Prefere mensagem? Fale connosco no Instagram para respostas rápidas.",
      en: "Prefer DM? Reach us on Instagram for updates and quick replies."
    },
    featuredCopy: {
      pt: "Espresso, pastelaria e snacks quentes para uma pausa tranquila.",
      en: "Espresso, pastries, and warm bites made for a relaxed pause."
    },
    menuHighlightsCopy: {
      pt: "Categorias que cobrem o essencial e um pouco mais.",
      en: "Categories that cover the essentials and a little something extra."
    },
    seeFullMenu: {
      pt: "Ver menu completo",
      en: "See full menu"
    },
    heroLocation: {
      pt: "Torres Novas · Portugal",
      en: "Torres Novas · Portugal"
    },
    menuIntro: {
      pt: "Pergunte pela seleção do dia e pelas novidades sazonais.",
      en: "Ask the team for specials and seasonal additions."
    },
    menuImageAlt: {
      pt: "Imagem do menu do café",
      en: "Cafe menu image"
    },
    galleryIntro: {
      pt: "Fotos reais do espaço e dos momentos do café.",
      en: "Real photos from the café and its everyday moments."
    }
  },
  days: {
    Monday: { pt: "Segunda-feira", en: "Monday" },
    Tuesday: { pt: "Terça-feira", en: "Tuesday" },
    Wednesday: { pt: "Quarta-feira", en: "Wednesday" },
    Thursday: { pt: "Quinta-feira", en: "Thursday" },
    Friday: { pt: "Sexta-feira", en: "Friday" },
    Saturday: { pt: "Sábado", en: "Saturday" },
    Sunday: { pt: "Domingo", en: "Sunday" }
  }
};
