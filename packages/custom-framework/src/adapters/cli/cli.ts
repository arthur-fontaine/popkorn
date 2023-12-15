import { start } from "./commands/start"

const getCommand = (args: string[]) => {
  const cmd = args[2]
  const options = args.slice(3)

  return {
    cmd,
    options,
  }
}

export const runCli = () => {
  switch (getCommand(process.argv).cmd) {
    case 'start':
      start()
      break
    default:
      console.error('Unknown command')
      break
  }
}
