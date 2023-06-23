import { Router } from "express";

const app = Router();

// Unknown
app.all("/api/v1/password_strength", async (req, res) => {
  res
    .json({
      username: req.body.username,
      password: req.body.password,
    })
    .status(200)
    .end();
});

export = app;
