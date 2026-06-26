import { createServer } from "node:http";

/** Tworzy serwer HTTP. Wydzielone, by dało się testować bez stałego portu. */
export function createApp() {
  return createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        service: "api",
        version: process.env.APP_VERSION || "dev",
      })
    );
  });
}

// Uruchom serwer tylko gdy plik wywołany bezpośrednio (nie przy imporcie w teście).
const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => console.log(`API nasłuchuje na :${port}`));
}
