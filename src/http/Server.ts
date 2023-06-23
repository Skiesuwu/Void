import { Application } from "express";
import env from "../../env";
import Logger from "../utils/Logger";
import Config from "./config/Config";

export default class Server {
  private app: Application;
  private port = process.env.PORT || env.PORT;

  constructor(app: Application) {
    this.app = app;
  }

  /**
   * Start the express server
   */
  init() {
    Config(this.app);

    this.app.listen(this.port, () => {
      Logger.log(`Void is now listening on port ${this.port}`);
    });
  }

  /**
   * Every Route we will be needing.
   */
  routes(): void {
    // TODO: Routes
  }
}
