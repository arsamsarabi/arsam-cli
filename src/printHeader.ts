import figlet from 'figlet'
import chalkAnimation from 'chalk-animation'
import boxen from 'boxen'

import { printWithColor } from './printWithColor'
import { printEmptyLine } from './printEmptyLine'
import { sleep } from './sleep'

export const printHeader = async () => {
  const arsam = figlet.textSync('Arsam', {
    font: 'Small Isometric1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  })

  printEmptyLine()
  const title = chalkAnimation.karaoke(arsam, 6.5)
  await sleep(500)
  title.stop()
  printEmptyLine()

  printWithColor({
    text: boxen(
      `
    Hello 👋 welcome to my portfolio.
    (updated Feb 2023)
    `,
      { padding: 1, title: "Arsam's résumé" }
    ),
    color: 'cyanBright'
  })

  printEmptyLine()
  printEmptyLine()
}
