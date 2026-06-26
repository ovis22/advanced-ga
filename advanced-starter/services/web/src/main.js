import { formatVersion } from "./lib.js";

const version = formatVersion(import.meta.env?.VITE_APP_VERSION ?? "");

document.querySelector("#app").innerHTML = `
  <main style="font-family: system-ui; text-align:center; margin-top:4rem;">
    <h1>GA Advanced — Web</h1>
    <p>Wersja: ${version}</p>
  </main>
`;
