let filenya: Uint8Array | string = Deno.args[0];
filenya = Deno.readFileSync(filenya);
Deno.writeFileSync("file-baru.html", filenya);
