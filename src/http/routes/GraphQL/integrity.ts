import { Router } from "express";
import { v4 as uuid } from "uuid";
import { initDatabase } from "../../../database/Database";
import jsonwebtoken from "jsonwebtoken";
import env from "../../../../env";
import Logger from "../../../utils/Logger";

const app = Router();
const prisma = initDatabase();

app.post("/integrity", async (req, res) => {
  const { username } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(400).json({ status: 400, error: "User not found" });
  }

  const token = jsonwebtoken.sign(
    {
      client_id: user.client_id,
      client_up: "127.0.0.1",
      device_id: "",
      user_id: user.id,
      is_bad_bot: false,
      iss: "Twitch Client Integrity",
      nbf: new Date().getUTCSeconds(),
      exp: new Date().getUTCSeconds(),
      iat: new Date().getUTCSeconds(),
    },
    env.JWT_SECRET
  );

  Logger.debug(`Integrity Token: ${token}`);

  res.json({
    token,
    expiration: new Date().getUTCSeconds(),
    request_id: "01H3PEGY7JZWCX9DFACDDNHWRX",
  });
});

export = app;
