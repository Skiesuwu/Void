import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import httpAgent from "./httpAgent";
import endpoints from "../endpoints";
import patcher from "./patcher";

export default async function downloadManifest() {
  const url = `${endpoints.CDN.manifest}`;

  try {
    const response = await fetch(url, {
      agent: httpAgent,
    });

    if (response.status !== 200) {
      console.error(
        `Failed to download manifest: ${response.status} ${response.statusText}`
      );
    }

    let content = await response.text();
    content = patcher(content);

    await fs.writeFile(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "assets",
        "manifest",
        "manifest.json"
      ),
      content,
      (err) => err && console.error(err)
    );
  } catch (error) {
    console.error(error);
  }
}
