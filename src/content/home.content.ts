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
};


export const HOME: Home = {
  layout: {
    title: "A.I. Code Academy",
    description:
      "Aprende a desarrollar aplicaciones usando herramientas de IA para aumentar tu productividad y la calidad de tu código. Learn to code smarter con la academia de IA en español de Alberto Basalo.",
  },
  hero: {
    title: "AI Code Academy",
    subtitle: "La IA no te quitará el trabajo, pero lo cambiará para siempre.",
    cards: [],
    cta: {
      text: "Learn to code smarter",
      link: "",
    },
  },
  why: {
    title: "¿Qué es AI-Code Academy?",
    subtitle:
      "Formación en español basada en la metodología AI-Driven Development.",
    cards: [
      {
        title: "AI-DD",
        description:
          "Metodología con las mejores prácticas para sacarle el máximo partido a la Inteligencia Artificial",
      },
      {
        title: "Real World",
        description:
          "Ejemplos con aplicaciones no triviales listas para producción. Con documentación y pruebas.",
      },
      {
        title: "Corporate",
        description:
          "Experiencia y adaptación a las necesidades de tu empresa (editor, lenguaje, etc.) ",
      },
    ],
    cta: {
      text: "Ver cursos",
      link: "/cursos/",
    },
  },
  aidd: {
    title: "¿Qué es AI-Driven Development?",
    subtitle:
      "Una metodología de programación con IA para aumentar tu productividad y la calidad de tu código.",
    cards: [
      {
        title: "Human in the Loop",
        description: "El programador es el estratega, colaborador y responsable.",
      },
      {
        title: "Rules Over Tools",
        description:
          "Instrucciones para que los agentes se comporten como se espera.",
      },
      {
        title: "Spec Driven Development",
        description: "Especificaciones claras para un código mantenible y de calidad.",
      },
    ],
    cta: {
      text: "Conoce a AIDDbot",
      link: "/community/opensource/aiddbot",
    },
  },
  cursos: {
    title: "Cursos a medida para tu empresa/academia",
    subtitle: "La I.A. y AI Code Academy se adaptan a tus necesidades.",
    cards: [
      {
        title: "Tu contenido",
        description: "Escoge editor (VsCode, Cursor, etc.), modelo (Claude, Gemini, etc.), lenguaje (TypeScript, Java, C#, etc.)...",
      },
      {
        title: "Tu formato",
        description: "En directo o en video, con tu calendario, tu bonificación o tus requisitos...",
      },
    ],
    cta: {
      text: "Contacta con LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};
