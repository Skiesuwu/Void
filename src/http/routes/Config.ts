import { Router } from "express";
import axios from "axios";
const app = Router();

// /config/settings.b0eaba9ae6ec061f16342782ab4dc180.js
app.get("/settings.b0eaba9ae6ec061f16342782ab4dc180.js", async (req, res) => {
  return await axios
    .get(
      `https://static.twitchcdn.net/config/settings.b0eaba9ae6ec061f16342782ab4dc180.js`
    )
    .then((response) => {
      console.log(
        `Config: /config/settings/b0eaba9ae6ec061f16342782ab4dc180.js`
      );

      res.json(response.data);
    });
});

export = app;
