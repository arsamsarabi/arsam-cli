import clear from "clear";
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import type { ResumeSection, LogOptions } from "../types.js";
import { APP_CONFIG, FIGLET_CONFIG, BOXEN_CONFIG } from "../config/index.js";

export class TerminalRenderer {
  clearScreen(): void {
    clear();
  }

  logWithColor({ text, color }: LogOptions): void {
    console.log(chalk[color](text));
  }

  emptyLine(): void {
    console.log("");
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async displayHeader(): Promise<void> {
    const titleText = figlet.textSync(APP_CONFIG.name, {
      font: FIGLET_CONFIG.font as figlet.Fonts,
      horizontalLayout: FIGLET_CONFIG.horizontalLayout as figlet.KerningMethods,
      verticalLayout: FIGLET_CONFIG.verticalLayout as figlet.KerningMethods,
      width: FIGLET_CONFIG.width,
      whitespaceBreak: FIGLET_CONFIG.whitespaceBreak,
    });

    this.emptyLine();
    const animation = chalkAnimation.karaoke(
      titleText,
      APP_CONFIG.animationSpeed
    );
    await this.sleep(APP_CONFIG.animationDelay);
    animation.stop();
    this.emptyLine();

    this.logWithColor({
      text: boxen(
        `
    ${APP_CONFIG.welcomeMessage}
    (updated ${APP_CONFIG.lastUpdated})
    `,
        { padding: BOXEN_CONFIG.padding, title: APP_CONFIG.title }
      ),
      color: "cyanBright",
    });

    this.emptyLine();
    this.emptyLine();
  }

  displaySection(section: ResumeSection): void {
    this.emptyLine();
    section.content.forEach((line) => {
      console.log(
        boxen(line, { padding: BOXEN_CONFIG.padding, title: section.title })
      );
    });
    this.emptyLine();
  }

  displayError(message: string): void {
    this.logWithColor({
      text: `✗ Error: ${message}`,
      color: "red",
    });
  }
}
