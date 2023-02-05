import { printWithColor } from './printWithColor'

export const BORDER_STRING = '----------------------------------------------------------------------------'
export const printBorder = () => {
  printWithColor({
    text: BORDER_STRING,
    color: 'gray'
  })
}
