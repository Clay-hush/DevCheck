
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("A aplicação possui os arquivos necessários", () => {
    assert.ok(fs.existsSync("index.html"));
    assert.ok(fs.existsSync("style.css"));
    assert.ok(fs.existsSync("script.js"));
});

test("A página possui o título DevCheck", () => {
    const html = fs.readFileSync("index.html", "utf8");
    assert.ok(html.includes("DevCheck"));
});

test("O JavaScript possui a interação do botão", () => {
    const js = fs.readFileSync("script.js", "utf8");
    assert.ok(js.includes("addEventListener"));
});
