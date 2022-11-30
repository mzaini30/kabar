import {
  readFileSync,
  writeFileSync,
} from "https://deno.land/std@0.164.0/node/fs.ts";

let filenya = Deno.args[0];
filenya = readFileSync(filenya).toString();
writeFileSync("file-baru.html", filenya);
