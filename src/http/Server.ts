import { Application } from "express";
import env from "../../env";
import Logger from "../utils/Logger";
import Config from "./config/Config";
import { initDatabase } from "../database/Database";
import Socket from "../websocket/Socket";

import PasswordStrength from "./routes/PasswordStrength";
import Auth from "./routes/Auth";
import gql from "./routes/GraphQL/gql";
import Assets from "./routes/Assets";
import integrity from "./routes/GraphQL/integrity";
import config from "./routes/Config";

export default class Server {
  private app: Application;
  private port = process.env.PORT || env.PORT;
  private socket: Socket;

  constructor(app: Application) {
    this.app = app;
    this.socket = new Socket(env.SOCKET_PORT);
  }

  /**
   * Start the express server
   */
  init() {
    Config(this.app);
    initDatabase();

    this.app.listen(this.port, () => {
      Logger.log(`Void is now listening on port ${this.port}`);
    });

    this.socket.init();
    this.routes();
  }

  /**
   * Every Route we will be needing.
   */
  routes(): void {
    this.app.use(PasswordStrength);
    this.app.use(Auth);
    this.app.use("/graphql", gql);
    this.app.use("/graphql", integrity);
    this.app.use("/assets", Assets);
    this.app.use("/config", config);
  }
}
