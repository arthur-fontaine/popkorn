import { startServer } from "../../server/start-server"

export const start = async () => {
  const port = Number(process.env["PORT"] || 3000)
  await startServer({ port })
}
