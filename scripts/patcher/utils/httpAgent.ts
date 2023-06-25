import http, { Agent } from "http";
import https from "https";

interface URL {
  protocol: string;
}

export default function httpAgent(url: URL): Agent {
  return url.protocol == "http:"
    ? new http.Agent({ keepAlive: true })
    : new https.Agent({ keepAlive: true });
}
