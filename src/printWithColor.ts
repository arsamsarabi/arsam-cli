import chalk from 'chalk'
import { TextColor } from './types'

type PrintWithColor = (args: { text: string; color: TextColor }) => void
export const printWithColor: PrintWithColor = ({ text, color }) => {
  console.log(chalk[color](text))
}
