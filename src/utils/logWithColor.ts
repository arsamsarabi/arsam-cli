import chalk from 'chalk'
import { TextColor } from '../types'

type LogWithColor = (args: { text: string; color: TextColor }) => void
export const logWithColor: LogWithColor = ({ text, color }) => {
  console.log(chalk[color](text))
}
