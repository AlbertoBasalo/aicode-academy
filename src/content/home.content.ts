import type { SectionProps } from "../components/Section.astro";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  aidd: SectionProps;
  why: SectionProps;
  technologies: SectionProps;
  us: SectionProps;
  cursos: SectionProps;
};


export const HOME: Home = {
  layout: {
    title: "A.I. Code Academy",
    description:
      "Aprende a desarrollar aplicaciones usando herramientas de IA para aumentar tu productividad y la calidad de tu código. Learn to code smarter con la academia de IA en español de Alberto Basalo.",
  },
  hero: {
    title: "Ai_Code Academy",
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
        title: "Metodología AI-DD",
        description:
          "Las mejores prácticas para sacarle el máximo partido a las herramientas de IA.",
      },
      {
        title: "Proyectos real-world",
        description:
          "Ejemplos con aplicaciones no triviales listas para producción. Con documentación y pruebas.",
      },
      {
        title: "Experiencia empresarial",
        description:
          "Experiencia y adaptación a las necesidades (editor, lenguaje, etc.) de tu empresa.",
      },
    ],
    cta: {
      text: "Ver cursos",
      link: "/cursos/",
    },
  },
  aidd: {
    title: "¿Qué es AI-Driven Development?",
    subtitle: "Una metodología de desarrollo profesional en tres fases (agentes).",
    cards: [
      {
        title: "Architect",
        description: "Definición de requerimientos, modelo de dominio y diseño del sistema.",
      },
      {
        title: "Builder",
        description:
          "Arquetipos y reglas para planificar tareas y generar código.",
      },
      {
        title: "Craftsman",
        description: "Mantenimiento y calidad con pruebas y documentación.",
      },
    ],
    cta: {
      text: "Conoce a AIDDbot",
      link: "https://aiddbot.com",
    },
  },
  technologies: {
    title: "Tecnologías usadas",
    subtitle:
      "Esta lista es siempre provisional...",
    cards: [
      {
        title: "Editores",
        description:
          "ClaudeCode, Cursor, GeminiCLI, Github-Copilot, Kiro...",
      },
      {
        title: "Modelos",
        description:
          "Claude, Gemini, GPT, Grok...",
      },
      {
        title: "Herramientas",
        description:
          "MCPs, background agents...",
      }
    ],
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
  cursos: {
    title: "Cursos a medida para tu empresa/academia",
    subtitle: "La IA y AIcode Academy se adaptan a tus necesidades.",
    cards: [
      {
        title: "Tu contenido",
        description: "Escoge editor, modelo, lenguaje...",
      },
      {
        title: "Tu formato",
        description: "En directo, con tu calendario, tu bonificación...",
      },
    ],
    cta: {
      text: "Contacta con LinkedIn",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};
