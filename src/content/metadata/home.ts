export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: Section;
  aidd: Section;
  why: Section;
  us: Section;
  meetups: Section;
};

type Section = {
  title: string;
  subtitle: string;
  cards: Card[];
  cta: Cta;
};

type Card = {
  title: string;
  description: string;
};

type Cta = {
  text: string;
  link: string;
};

export const HOME: Home = {
  layout: {
    title: "AI Code Academy",
    description:
      "Aprende a desarrollar aplicaciones usando herramientas de IA para aumentar tu productividad y la calidad de tu código. Learn to code smarter con la academia de IA en español de Alberto Basalo.",
  },
  hero: {
    title: "Master Ai-Driven DEVELOPMENT",
    subtitle: "La IA no te quitará el trabajo, pero lo cambiará para siempre",
    cards: [],
    cta: {
      text: "Learn to code smarter",
      link: "/cursos",
    },
  },
  aidd: {
    title: "¿Qué es AI-Driven Development?",
    subtitle: "Metodología de desarrollo profesional con herramientas de I.A.",
    cards: [
      {
        title: "Human in the Loop",
        description:
          "El humano es estratega, colaborador y responsable.",
      },
      {
        title: "Rules over Tools",
        description:
          "Las herramientas se someten a metodologías de desarrollo.",
      },
      {
        title: "AI Quality",
        description:
          "El desarrollo es productivo, mantenible y de calidad.",
      },
    ],
    cta: {
      text: "El manifiesto AI-DD",
      link: "/blog/es/aidd-manifesto",
    },
  },
  why: {
    title: "AIcode Academy",
    subtitle: "Una academia de IA en español para desarrolladores profesionales.",
    cards: [
      {
        title: "Metodología AI-DD",
        description:
          "Contenido centrado en las mejores prácticas, no solo en las últimas herramientas de IA.",
      },
      {
        title: "Proyectos real-world",
        description:
          "Ejemplos con aplicaciones listas para producción, no solo ejemplos de juguete.",
      },
      {
        title: "Experiencia empresarial",
        description:
          "Aprende de desarrolladores experimentados, no solo académicos o aficionados.",
      },
    ],
    cta: {
      text: "Learn to code smarter con Alberto Basalo",
      link: "https://albertobasalo.dev",
    },
  },
  us: {
    title: "AI code Academy",
    subtitle:
      "Una academia de IA en español para desarrolladores profesionales.",
    cards: [],
    cta: {
      text: "Por Alberto Basalo",
      link: "https://albertobasalo.dev",
    },
  },
  meetups: {
    title: "Meetups",
    subtitle: "¿Quieres organizar un meetup en tu empresa?",
    cards: [],
    cta: {
      text: "Contacta conmigo",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};
