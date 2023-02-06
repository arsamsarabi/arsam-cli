import figlet from 'figlet'
import chalkAnimation from 'chalk-animation'
import boxen from 'boxen'

import { logWithColor } from './logWithColor'
import { emptyLine } from './emptyLine'
import { sleep } from './sleep'

export const printHeader = async () => {
  const arsam = figlet.textSync('Arsam', {
    font: 'Small Isometric1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  })

  emptyLine()
  const title = chalkAnimation.karaoke(arsam, 6.5)
  await sleep(500)
  title.stop()
  emptyLine()

  logWithColor({
    text: boxen(
      `
    Hello 👋 welcome to my portfolio.
    (updated Feb 2023)
    `,
      { padding: 1, title: "Arsam's résumé" }
    ),
    color: 'cyanBright'
  })

  emptyLine()
  emptyLine()
}
