export const APP_CONFIG = {
  name: 'Arsam',
  title: "Arsam's résumé",
  lastUpdated: 'Feb 2023',
  welcomeMessage: 'Hello 👋 welcome to my portfolio.',
  animationSpeed: 6.5,
  animationDelay: 500,
} as const

export const MENU_OPTIONS = {
  back: '🏠 Main menu',
  exit: '🚫 Exit',
} as const

export const PAGINATION_OPTIONS = {
  older: '◀ Older job',
  newer: '▶ Newer job',
} as const

export const PAGINATED_SECTIONS = ['Employment'] as const

export const FIGLET_CONFIG = {
  font: 'Small Isometric1',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 120,
  whitespaceBreak: true,
} as const

export const BOX_CONFIG = {
  padding: 1,
} as const
