// Czysta logika frontendu — testowalna bez DOM.

export function formatVersion(raw) {
  return raw && raw.trim() ? raw.trim() : "dev";
}

export function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
