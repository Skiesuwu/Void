![Void](https://cdn.discordapp.com/attachments/909474729583333427/1121879300405207190/Void.png)

## Void

A reimplementation of the twitch backend made using typescript

## Environment

- `PORT` the port the server defaults to.
- `JWT_SECRET` the jsonwebtoken the server uses.
- `SOCKET_PORT` the port the websocket defaults to.

## Fiddler

Download Fiddler Classic [here](https://www.telerik.com/fiddler/fiddler-classic)

Fiddler Script

```ps
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if (oSession.HTTPMethodIs("CONNECT"))
            return;

        if (oSession.hostname.Contains("passport.twitch.tv"))
            oSession.fullUrl = "http://localhost:1090" + oSession.PathAndQuery;

        if (oSession.hostname.Contains("gql.twitch.tv"))
            oSession.fullUrl = "http://localhost:1090/graphql" + oSession.PathAndQuery;

        if (oSession.hostname.Contains("pubsub-edge.twitch.tv/v1"))
            oSession.fullUrl = "http://localhost:443" + oSession.PathAndQuery;

        if (oSession.hostname.Contains("irc-ws.chat.twitch.tv"))
            oSession.fullUrl = "http://localhost:443" + oSession.PathAndQuery;
    }
}
```

## Getting Started

- Download Node.JS [here](https://nodejs.org/en/)
- Clone the repository.
- rename `env.example.ts` to `env.ts`
- Open your command prompt and enter `npm run setup`
