import { Router } from "express";
import Logger from "../../utils/Logger";

const app = Router();

// TODO: Implement Database this won't work

app.post("/register", async (req, res) => {
  res
    .json({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      birthday: req.body.birthday,
      client_id: req.body.client_id,
      arkose: {
        token: req.body.captcha_token,
      },
    })
    .status(200)
    .end();

  Logger.debug(`Username: ${req.body.username}`);
  Logger.debug(`Password: ${req.body.password}`);
});

app.post("/login", async (req, res) => {
  res
    .json({
      username: req.body.username,
      password: req.body.password,
      client_id: req.body.client_id,
      undelete_user: false,
    })
    .status(200)
    .end();

  Logger.debug(`Username: ${req.body.username}`);
  Logger.debug(`Password: ${req.body.password}`);
});

app.post("/integrity", async (req, res) => {
  res.json({}).status(200).end();
});

app.post("/protected_register", async (req, res) => {
  res
    .json({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      birthday: req.body.birthday,
      client_id: req.body.client_id,
    })
    .status(200)
    .end();
});

export = app;
