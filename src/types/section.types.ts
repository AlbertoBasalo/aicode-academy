export type SectionProps = {
  title: string;
  subtitle: string;
  cards: Card[];
  cta?: Cta;
};

export type Card = {
  title: string;
  description: string;
  cta?: Cta;
};

export type Cta = {
  text: string;
  link: string;
};


