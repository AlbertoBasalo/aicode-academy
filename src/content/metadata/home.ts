export type Home = {
  title: string;
  description: string;
  layout: {
    title: string;
    description: string;
  };
  aidd: Reasons;
  hero: Section;
  why: Reasons;
  us: Section;
  meetups: Section;
};

type Reasons = {
  title: string;
  reason1: Reason;
  reason2: Reason;
  reason3: Reason;
};

type Reason = {
  title: string;
  description: string;
};

type Section = {
  title: string;
  subtitle: string;
  cta: Cta;
};

type Cta = {
  text: string;
  link: string;
};

export const HOME: Home = {
  title: "AI Code Academy",
  description:
    "Aprende a desarrollar aplicaciones usando herramientas de IA para aumentar tu productividad y la calidad de tu código.",
  layout: {
    title: "AI Code Academy",
    description:
      "Aprende a desarrollar aplicaciones usando herramientas de IA para aumentar tu productividad y la calidad de tu código.",
  },
  hero: {
    title: "Master Ai-Driven DEVELOPMENT",
    subtitle: "La IA no te quitará el trabajo, pero lo cambiará para siempre",
    cta: {
      text: "Learn to code smarter",
      link: "/cursos",
    },
  },
  aidd: {
    title: "¿Qué es AI-Driven Development?",
    reason1: {
      title: "Human in the Loop",
      description:
        "El humano es estratega, colaborador y responsable.",
    },
    reason2: {
      title: "Rules over Tools",
      description:
        "Las herramientas se someten a metodologías de desarrollo.",
    },
    reason3: {
      title: "AI Quality",
      description:
        "El desarrollo es productivo, mantenible y de calidad.",
    },
  },
  why: {
    title: "¿Porqué AIcode Academy?",
    reason1: {
      title: "Metodología AI-DD",
      description:
        "Contenido centrado en las mejores prácticas, no solo en las últimas herramientas de IA.",
    },
    reason2: {
      title: "Proyectos real-world",
      description:
        "Ejemplos con aplicaciones listas para producción, no solo ejemplos de juguete.",
    },
    reason3: {
      title: "Experiencia empresarial",
      description:
        "Aprende de desarrolladores experimentados, no solo académicos o aficionados.",
    },
  },
  us: {
    title: "AI code Academy",
    subtitle:
      "Una academia de IA en español para desarrolladores profesionales.",
    cta: {
      text: "Por Alberto Basalo",
      link: "https://albertobasalo.dev",
    },
  },
  meetups: {
    title: "Meetups",
    subtitle: "¿Quieres organizar un meetup en tu empresa?",
    cta: {
      text: "Contacta conmigo",
      link: "https://www.linkedin.com/in/albertobasalo/",
    },
  },
};
