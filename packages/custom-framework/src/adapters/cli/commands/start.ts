import { startServer } from "../../../application/services/start-server"
import { getPopkornServer } from "../../../application/usecases/get-popkorn-server"

export const start = async () => {
  const port = Number(process.env["PORT"] || 3000)

  const server = await getPopkornServer()

  await startServer(server, { port })
}
