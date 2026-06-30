import type { ForegroundColorName } from "chalk";
import type { MENU_OPTIONS } from "./config/constants.js";

export type TextColor = ForegroundColorName;

export type SectionTitles =
  | "About"
  | "Education"
  | "Employment"
  | "Tech Stack"
  | "Contact";

export type ResumeType = Record<SectionTitles, ReadonlyArray<string>>;

export interface LogOptions {
  readonly text: string;
  readonly color: TextColor;
}

export interface MenuChoice {
  readonly type: "list";
  readonly name: string;
  readonly message: string;
  readonly choices: ReadonlyArray<string>;
}

export type MenuOption = (typeof MENU_OPTIONS)[keyof typeof MENU_OPTIONS];

export interface PromptAnswer {
  readonly options: string;
}

export interface BackOrExitAnswer {
  readonly exitBack: MenuOption;
}

export interface ResumeSection {
  readonly title: SectionTitles;
  readonly content: ReadonlyArray<string>;
}

export interface AppContext {
  readonly resume: ResumeType;
  readonly clearScreen: () => void;
  readonly displayHeader: () => Promise<void>;
  readonly displaySection: (section: ResumeSection) => void;
  readonly promptUser: <T>(choices: MenuChoice) => Promise<T>;
}
