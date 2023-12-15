import { Server } from "node:http";
import installCrypto from "@hattip/polyfills/crypto";
import installGetSetCookie from "@hattip/polyfills/get-set-cookie";
import installWhatwgNodeFetch from "@hattip/polyfills/whatwg-node";

installWhatwgNodeFetch();
installGetSetCookie();
installCrypto();

export async function startServer(server: Server, { port }: { port: number }) {
  server.listen(port)

  server.on("listening", () => {
    console.log(
      `Server listening on http://localhost:${port}`,
    );
  });
}
