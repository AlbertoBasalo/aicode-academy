export type Home = {
  title: string;
  description: string;
  layout: {
    title: string;
    description: string;
  };
  hero: Section;
  why: {
    title: string;
    reason1: {
      title: string;
      description: string;
    };
    reason2: {
      title: string;
      description: string;
    };
    reason3: {
      title: string;
      description: string;
    };
  };
  us: Section;
  meetups: Section;
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
  title: "Welcome to AI Code Academy",
  description:
    "Learn AI development with our cutting-edge curriculum. Master machine learning, deep learning, and ethical AI development.",
  layout: {
    title: "AI Code Academy",
    description:
      "Learn AI development with our cutting-edge curriculum. Master machine learning, deep learning, and ethical AI development.",
  },
  hero: {
    title: "Master Ai-Driven DEVELOPMENT",
    subtitle: "La IA no te quitará el trabajo, pero lo cambiará para siempre",
    cta: {
      text: "Learn to code smarter",
      link: "/cursos",
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
    title: "¿Quiénes somos?",
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
