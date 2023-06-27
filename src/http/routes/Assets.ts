import { Router } from "express";
import axios from "axios";
const app = Router();

// TODO: Add Patched Assets instead.

app.get("/:assetId", async (req, res) => {
  return await axios
    .get(`https://static.twitchcdn.net/assets/${req.params.assetId}`)
    .then((response) => {
      console.log(`Asset: assets/${req.params.assetId}`);

      res.json(response.data);
    });
});

export = app;
