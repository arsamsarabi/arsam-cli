import { logWithColor } from './logWithColor'

export const logBorder = () => {
  logWithColor({
    text: '---------------------------------------------------------------------',
    color: 'gray'
  })
}
