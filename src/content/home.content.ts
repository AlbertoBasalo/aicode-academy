import type { SectionProps } from "../types/section.types";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  aidd: SectionProps;
  why: SectionProps;
  cursos: SectionProps;
  us: SectionProps;
};


export const HOME: Home = {
  layout: {
    title: "A.I. Code Academy",
    description:
      "Aprende a desarrollar aplicaciones usando herramientas de IA para aumentar tu productividad y la calidad de tu código. Learn to code smarter con la academia de IA en español de Alberto Basalo.",
  },
  hero: {
    title: "AI Code Academy",
    subtitle: "La IA no te quitará el trabajo, pero lo cambiará para siempre. ",
    cards: [],
    cta: {
      text: "Learn to code smarter",
      link: "",
    },
  },
  why: {
    title: "¿Le sacas partido a la IA?",
    subtitle:
      "Aprende la metodología A.I. Driven Development para aumentar tu rendimiento y la calidad de tu código.",
    cards: [
      {
        title: "Spec Driven Development",
        description:
          "Pasa del Vibe Coding al desarrollo mantenible y de calidad. Especificaciones claras y reglas para alinear agentes, programadores y negocio.",
      },
      {
        title: "Real World",
        description:
          "Ejemplos con aplicaciones no triviales listas para producción con documentación y pruebas. No sólo greenfield, también software legacy.",
      },
    ],
    cta: {
      text: "Ver cursos de IA para desarrolladores",
      link: "/cursos/",
    },
  },
  aidd: {
    title: "¿Qué es AI-Driven Development?",
    subtitle:
      "Una metodología para usar IA durante todo el ciclo de desarrollo sin perder control, calidad ni mantenibilidad.",
    cards: [
      {
        title: "Human in the Loop",
        description: "El programador sigue tomando las decisiones importantes. La IA acelera el desarrollo.",
      },
      {
        title: "Rules Over Tools",
        description: "La productividad no depende del agente, sino del contexto y las reglas que recibe.",
      },
      {
        title: "Spec Driven Development",
        description: "Especificaciones claras para alinear agentes, programadores y negocio.",
      },
    ],
    cta: {
      text: "My agente AIDDbot te ayuda a implementar AI-Driven Development",
      link: "https://aiddbot.com/",
    },

  },
  cursos: {
    title: "Cursos a medida para tu empresa/academia",
    subtitle: "La I.A. y AI Code Academy se adaptan a tus necesidades.",
    cards: [
      {
        title: "Tu contenido",
        description: "Escoge editor (VsCode, Cursor, etc.) y agente (Claude, Gemini, Copilot, Codex, etc.)...",
      },
      {
        title: "Tu formato",
        description: "En directo o en video, con tu calendario, tu bonificación o tus requisitos...",
      },
    ],
    cta: {
      text: "Contacta con Alberto Basalo en LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
  us: {
    title: "Alberto Basalo",
    subtitle:
      "Programador, consultor e instructor desde el siglo pasado.",
    cards: [],
    cta: {
      text: "No es por presumir pero... mira mi portfolio de clientes",
      link: "https://albertobasalo.dev/portfolio/",
    },
  },
};
