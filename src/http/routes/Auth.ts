import { Router } from "express";
import Logger from "../../utils/Logger";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { initDatabase } from "../../database/Database";
import env from "../../../env";

const app = Router();
const prisma = initDatabase();

/*
  Body
  username: string,
  password: string,
  email: string,
  birthday: { day: number, month: number, year: number },
  client_id: string,
  arkose: { token: string }
*/
app.post("/register", async (req, res, next) => {
  const { email, username, password, birthday, client_id, arkose } = req.body;

  try {
    const result = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (result) {
      return res
        .status(400)
        .json({ status: 400, error: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        client_id,
      },
    });

    const token = jsonwebtoken.sign({ id: user.id }, env.JWT_SECRET);
    Logger.log(`User has been created with the username ${user.username}`);

    return res.status(200).json({ status: 200, token }).end();
  } catch (error) {
    let err = error as Error;
    Logger.error(err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(400).json({ status: 400, error: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      const token = jsonwebtoken.sign({ id: user.id }, env.JWT_SECRET);
      Logger.log(`${user.username} has logged in with the id ${user.id}`);

      return res.status(200).json({ status: 200, token }).end();
    } else {
      return res
        .status(400)
        .json({ status: 400, error: "Invalid Password or Usernmae" });
    }
  } catch (error) {
    let err = error as Error;
    Logger.error(err.message);
  }
});

app.post("/integrity", async (req, res) => {
  res.json({}).status(200).end();
});

app.post("/protected_register", async (req, res) => {
  const { username, birthday, email } = req.body;

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        username,
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ status: 400, error: "User not found" });
    }

    res
      .json({
        // username: user.username,
        // password: user.password,
        // email: user.email,
        // birthday,
        // client_id: user.client_id,
      })
      .status(200)
      .end();
  } catch (error) {
    let err = error as Error;
    Logger.error(err.message);
  }
});

app.post("/protected_login", async (req, res) => {
  const { username } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(400).json({ status: 400, error: "User not found" });
    }

    res.json({
      access_token: null,
      redirect_path: "https://www.twitch.tv/",
    });
  } catch (error) {
    let err = error as Error;
    Logger.error(err.message);
  }
});

export = app;
