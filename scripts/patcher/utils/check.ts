import fs from "fs";
import path from "path";

export default async function check() {
  const assetFolderPath = path.join(__dirname, "..", "..", "..", "assets");
  const manifestFolderPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "assets",
    "manifest"
  );
  if (!fs.existsSync(assetFolderPath))
    await fs.mkdir(assetFolderPath, { recursive: true }, (error) => {
      if (error) {
        console.error(error);
      }
    });

  if (!fs.existsSync(manifestFolderPath))
    await fs.mkdir(manifestFolderPath, { recursive: true }, (error) => {
      if (error) {
        console.error(error);
      }
    });
}
