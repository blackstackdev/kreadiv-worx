import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const cacheFile = fileURLToPath(
  new URL("../node_modules/vinext/dist/server/static-file-cache.js", import.meta.url),
);
const windowsUnsafe = "relativePath: path.relative(base, batch[j]),";
const urlSafe = 'relativePath: path.relative(base, batch[j]).split(path.sep).join("/"),';

const source = await readFile(cacheFile, "utf8");

if (source.includes(urlSafe)) {
  console.log("vinext static paths are already URL-safe");
} else if (source.includes(windowsUnsafe)) {
  await writeFile(cacheFile, source.replace(windowsUnsafe, urlSafe));
  console.log("patched vinext static paths for Windows production serving");
} else {
  throw new Error(
    "vinext static path implementation changed; review the Windows production patch",
  );
}
