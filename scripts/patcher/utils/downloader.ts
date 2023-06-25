import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import httpAgent from "./httpAgent";
import patcher from "./patcher";
import endpoints from "../endpoints";

export default async function downloader(asset: string) {
  asset = `${asset}${asset.includes(".") ? "" : ".js"}`;
  const url = `${endpoints.CDN.assets}/${asset}`;
  try {
    const response = await fetch(url, {
      agent: httpAgent,
    });

    if (response.status !== 200) {
      return [];
    }

    if (asset.includes(".js") && asset.includes(".css")) {
      await fs.writeFileSync(
        path.join(__dirname, "..", "..", "..", "assets", asset),
        await response.buffer()
      );
      return [];
    }
    let content = await response.text();
    content = patcher(content);

    await fs.writeFile(
      path.join(__dirname, "..", "..", "..", "assets", asset),
      content,
      (err) => err && console.error(err)
    );

    const ret = new Set([
      ...(content.match(/"[A-Fa-f0-9]{20}"/g) ?? []),
      ...[...content.matchAll(/\.exports=.\..\+"(.*?\..{0,5})"/g)].map(
        (x) => x[1]
      ),
      ...[...content.matchAll(/\/assets\/([a-zA-Z0-9]*?\.[a-z0-9]{0,5})/g)].map(
        (x) => x[1]
      ),
    ]);

    return [...ret].map((x) => x.replaceAll('"', ""));
  } catch (error) {
    console.error(error);
  }
}
