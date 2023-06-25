import { EventEmitter, WebSocketServer } from "ws";
import Logger from "../utils/Logger";

export default class Socket extends EventEmitter {
  private port: number;
  private socket: WebSocketServer;

  constructor(port: number) {
    super();
    this.port = port;
    this.socket = new WebSocketServer(
      {
        port,
      },
      () => Logger.log(`WebSocket server has been created on port ${this.port}`)
    );
  }

  public init(): void {
    this.socket.on("connection", (client) => {
      client.on("open", () => {
        Logger.log("The WebSocket connection has been opened.");
      });

      client.on("message", (data) => {
        const payload = JSON.stringify(data.toString());

        Logger.debug(payload);
      });
    });
  }
}
