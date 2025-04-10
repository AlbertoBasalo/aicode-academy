import type { SectionProps } from "../components/Section.astro";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  aidd: SectionProps;
  why: SectionProps;
  us: SectionProps;
  meetups: SectionProps;
};


export const HOME: Home = {
  layout: {
    title: "A.I. Code Academy",
    description:
      "Aprende a desarrollar aplicaciones usando herramientas de IA para aumentar tu productividad y la calidad de tu código. Learn to code smarter con la academia de IA en español de Alberto Basalo.",
  },
  hero: {
    title: "Ai-Driven Development",
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
        description: "El humano es estratega, colaborador y responsable.",
      },
      {
        title: "Rules over Tools",
        description:
          "Las herramientas se someten a metodologías de desarrollo.",
      },
      {
        title: "A.I. Quality code",
        description: "El desarrollo es productivo, mantenible y de calidad.",
      },
    ],
    cta: {
      text: "El manifiesto AI-DD",
      link: "/blog/es/aidd-manifesto",
    },
  },
  why: {
    title: "A.I. Code Academy",
    subtitle:
      "Una academia de IA en español para desarrolladores profesionales.",
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
      text: "",
      link: "",
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
      text: "Contacta con Alberto Basalo",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};
