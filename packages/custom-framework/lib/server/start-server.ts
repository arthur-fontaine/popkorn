import installCrypto from "@hattip/polyfills/crypto";
import installGetSetCookie from "@hattip/polyfills/get-set-cookie";
import installWhatwgNodeFetch from "@hattip/polyfills/whatwg-node";
import { getServer } from "./get-server";

installWhatwgNodeFetch();
installGetSetCookie();
installCrypto();

export async function startServer({ port }: { port: number }) {
  const server = await getServer();

  server.listen(port)

  server.on("listening", () => {
    console.log(
      `Server listening on http://localhost:${port}`,
    );
  });
}
