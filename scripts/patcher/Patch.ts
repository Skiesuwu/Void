import indexScripts from "./indexScripts";
import check from "./utils/check";
import downloader from "./utils/downloader";
import downloadManifest from "./utils/downloadManifest";

(async () => {
  try {
    await check();

    const assets = new Set(indexScripts);
    let promise = [];
    let completed = 0;

    for (const asset of assets) {
      completed += 1;
      console.log(
        `[DOWNLOAD]: Downloading asset ${asset} - ${assets.size - completed}`
      );

      promise.push(downloader(asset).catch((err: Error) => console.error(err)));
      promise.push(
        downloadManifest().catch((err: Error) => console.error(err))
      );

      if (promise.length > 100 || completed == assets.size) {
        const values = await Promise.all(promise);

        promise = [];
        values.flat().forEach((value) => assets.add(value as string));
      }
    }

    console.log("Finished Generating Assets.");
  } catch (error) {
    const err = error as Error;
    throw console.error(`Failed to fetch asset list: ${err.message}`);
  }
})();
