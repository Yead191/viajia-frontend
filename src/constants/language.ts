export type LangKey = "en" | "es";
export type Lang = { key: LangKey; label: string; flag: string };

const LANGUAGES: Lang[] = [
  { key: "en", label: "ENG", flag: "/assets/flag/us.svg" },
  { key: "es", label: "SPN", flag: "/assets/flag/es.svg" },
];

export { LANGUAGES };
