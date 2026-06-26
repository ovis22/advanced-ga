import { test } from "node:test";
import assert from "node:assert";
import { createApp } from "./server.js";

test("endpoint /health zwraca status ok", async () => {
  const server = createApp().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://127.0.0.1:${port}/health`);
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.status, "ok");
  } finally {
    server.close();
  }
});

test("endpoint główny zwraca nazwę serwisu", async () => {
  const server = createApp().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://127.0.0.1:${port}/`);
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.service, "api");
  } finally {
    server.close();
  }
});
