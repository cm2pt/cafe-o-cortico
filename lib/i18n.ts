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
    instagram: { pt: "Instagram", en: "Instagram" }
  },
  labels: {
    heroHeadline: {
      pt: "Café O Cortiço, Torres Novas",
      en: "Café O Cortiço, Torres Novas"
    },
    heroSubheadline: {
      pt: "Snack-bar com esplanada, takeaway e estacionamento gratuito.",
      en: "Snack bar with outdoor seating, takeaway, and free parking."
    },
    openNow: { pt: "Aberto agora", en: "Open now" },
    closedNow: { pt: "Fechado agora", en: "Closed now" },
    hoursUnavailable: { pt: "Horário indisponível", en: "Hours unavailable" },
    closesAt: { pt: "Fecha às", en: "Closes at" },
    opensAt: { pt: "Abre às", en: "Opens at" },
    opensOnAt: { pt: "Abre", en: "Opens" },
    bestSellers: { pt: "Mais pedidos", en: "Best sellers" },
    bestSellersCopy: {
      pt: "Crepes, panquecas, café e hambúrgueres.",
      en: "Crepes, pancakes, coffee, and burgers."
    },
    servicesTitle: { pt: "Serviços", en: "Services" },
    servicesCopy: {
      pt: "Conveniência para o dia a dia.",
      en: "Convenience for everyday visits."
    },
    cateringTitle: { pt: "Catering", en: "Catering" },
    cateringCopy: {
      pt: "Fale connosco para catering de eventos e reuniões.",
      en: "Talk to us about catering for events and meetings."
    },
    cateringCta: { pt: "Fale connosco", en: "Contact us" },
    socialProofTitle: {
      pt: "Clientes mencionam",
      en: "Customers mention"
    },
    socialProofCopy: {
      pt: "Veja mais no Facebook, Instagram ou Google Maps.",
      en: "See more on Facebook, Instagram, or Google Maps."
    },
    locationTitle: { pt: "Como chegar", en: "Location" },
    locationCopy: {
      pt: "Avenida Dr. Sá Carneiro 3, Torres Novas.",
      en: "Avenida Dr. Sá Carneiro 3, Torres Novas."
    },
    parkingNote: {
      pt: "Estacionamento gratuito nas imediações.",
      en: "Free parking nearby."
    },
    menuIntro: {
      pt: "Pratos rápidos, bebidas quentes e doces especiais.",
      en: "Quick meals, hot drinks, and sweet treats."
    },
    dailySpecial: { pt: "Prato do dia", en: "Dish of the day" },
    allergenNote: {
      pt: "Se tiver alergias alimentares, informe-nos antes de pedir.",
      en: "If you have food allergies, please tell us before ordering."
    },
    vegetarianNote: {
      pt: "Pergunte-nos pelas opções vegetarianas.",
      en: "Ask us about vegetarian options."
    },
    followInstagram: {
      pt: "Siga no Instagram",
      en: "Follow on Instagram"
    },
    followInstagramCopy: {
      pt: "Veja o dia a dia do café nas redes sociais.",
      en: "See daily moments from the café on social media."
    },
    latestSocial: { pt: "Atualizações", en: "Updates" },
    promoTitle: { pt: "Hoje / Esta semana", en: "Today / This week" },
    trustChipsLabel: { pt: "Serviços-chave", en: "Key services" },
    mapTap: { pt: "Toque para abrir no Maps", en: "Tap to open in Maps" },
    galleryTitle: { pt: "Momentos do café", en: "Café moments" },
    gallerySubtitle: {
      pt: "Fotografias reais do espaço e do dia a dia.",
      en: "Real photos from the café and everyday moments."
    },
    openPage: { pt: "Abrir página", en: "Open page" }
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
