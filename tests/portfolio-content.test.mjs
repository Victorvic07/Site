import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");

test("apresenta o posicionamento híbrido e o projeto principal", () => {
  assert.match(page, /Infraestrutura \+ Software/);
  assert.match(page, /Transformo problemas técnicos em soluções confiáveis/);
  assert.match(page, /Sistema interno de chamados/);
});

test("apresenta as três experiências profissionais", () => {
  assert.match(page, /Nauany Consultoria/);
  assert.match(page, /Flow Sistemas/);
  assert.match(page, /JV Consultoria/);
});

test("inclui os quatro canais de contato corretos", () => {
  assert.match(page, /mailto:jvictor198913@gmail\.com/);
  assert.match(page, /tel:\+5571999720309/);
  assert.match(page, /linkedin\.com\/in\/jo%C3%A3o-victor-060441346/);
  assert.match(page, /github\.com\/Victorvic07/);
});

test("substitui a prévia inicial e usa metadados próprios", () => {
  assert.doesNotMatch(page, /_sites-preview/);
  assert.doesNotMatch(layout, /codex-preview/);
  assert.match(layout, /João Victor \| Infraestrutura de TI e Desenvolvimento/);
  assert.match(layout, /<html lang="pt-BR">/);
});
