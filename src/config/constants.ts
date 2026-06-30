export const APP_CONFIG = {
  name: "Arsam",
  title: "Arsam's résumé",
  version: "2.0.3",
  lastUpdated: "Feb 2023",
  welcomeMessage: "Hello 👋 welcome to my portfolio.",
  animationSpeed: 6.5,
  animationDelay: 500,
} as const;

export const MENU_OPTIONS = {
  back: "🏠 Back",
  exit: "🚫 Exit",
} as const;

export const FIGLET_CONFIG = {
  font: "Small Isometric1",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
} as const;

export const BOXEN_CONFIG = {
  padding: 1,
} as const;
