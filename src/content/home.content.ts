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
    subtitle: "La IA no te quitará el trabajo, pero lo cambiará para siempre. Pasa del Vibe Coding al desarrollo mantenible",
    cards: [],
    cta: {
      text: "Learn to code smarter",
      link: "",
    },
  },
  why: {
    title: "¿Le sacas partido a la IA?",
    subtitle:
      "Aprende la metodología A.I. Driven Development para aumentar el rendimiento y la calidad de tu código.",
    cards: [
      {
        title: "AI-DD",
        description:
          "Metodología con las mejores prácticas para sacarle el máximo partido a la Inteligencia Artificial. Más allá del Vibe Coding. I.A. en todo el ciclo de desarrollo.",
      },
      {
        title: "Real World",
        description:
          "Ejemplos con aplicaciones no triviales listas para producción. Con documentación y pruebas. Evita el código in-mantenible y los riesgos de producción.",
      },
      {
        title: "Corporate",
        description:
          "Experiencia y adaptación a las necesidades de tu empresa (editor, agente, lenguaje, etc.) Abraza la deuda técnica y moderniza tu código legacy con IA.",
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
