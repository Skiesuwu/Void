import { Router } from "express";
import { initDatabase } from "../../../database/Database";

const prisma = initDatabase();
const app = Router();

app.post("/gql", async (req, res) => {
  const { username } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(400).json({ status: 400, error: "User not found" });
  }

  res.json([
    {
      data: {
        personalSections: [
          {
            type: "FOLLOWED_SECTION",
            title: {
              localizedFallback: "Followed Channels",
              localizedTokens: [
                {
                  value: "Followed Channels",
                  __typename: "PersonalSectionTextToken",
                },
              ],
              __typename: "PersonalSectionTitle",
            },
            items: [
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:0",
                promotionsCampaignID: "",
                user: {
                  id: "198182340",
                  login: "Void",
                  displayName: "Void",
                  profileImageURL: null,
                  primaryColorHex: null,
                  broadcastSettings: {
                    id: "198182340",
                    title: "Test",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "40847220824",
                  previewImageURL: null,
                  broadcaster: {
                    id: "198182340",
                    broadcastSettings: {
                      id: "198182340",
                      title: "Test",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 1,
                  game: {
                    id: "33214",
                    displayName: "Void",
                    name: "Void",
                    __typename: "Game",
                  },
                  type: "live",
                  __typename: "Stream",
                },
                __typename: "PersonalSectionChannel",
              },
            ],
            __typename: "PersonalSection",
          },
          {
            type: "RECOMMENDED_SECTION",
            title: {
              localizedFallback: "Recommended Channels",
              localizedTokens: [
                {
                  value: "Recommended Channels",
                  __typename: "PersonalSectionTextToken",
                },
              ],
              __typename: "PersonalSectionTitle",
            },
            items: [
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:0",
                promotionsCampaignID: "",
                user: {
                  id: "198182340",
                  login: "Void",
                  displayName: "Void",
                  profileImageURL: null,
                  primaryColorHex: null,
                  broadcastSettings: {
                    id: "198182340",
                    title: "Test",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "40847220824",
                  previewImageURL: null,
                  broadcaster: {
                    id: "198182340",
                    broadcastSettings: {
                      id: "198182340",
                      title: "Test",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 1,
                  game: {
                    id: "33214",
                    displayName: "Void",
                    name: "Void",
                    __typename: "Game",
                  },
                  type: "live",
                  __typename: "Stream",
                },
                __typename: "PersonalSectionChannel",
              },
            ],
            __typename: "PersonalSection",
          },
        ],
      },
      extensions: {
        durationMilliseconds: 99,
        operationName: "PersonalSections",
        requestID: "01H3WBNGPDSNGWG9N9R6P2RPXW",
      },
    },
    {
      data: {
        currentUser: {
          id: "610217034",
          createdAt: new Date().toISOString(),
          followedGames: {
            nodes: [],
            __typename: "FollowedGameConnection",
          },
          roles: {
            isPartner: false,
            isStaff: null,
            __typename: "UserRoles",
          },
          __typename: "User",
        },
      },
      extensions: {
        durationMilliseconds: 38,
        operationName: "FrontPageNew_User",
        requestID: "01H3WBNGPDSNGWG9N9R6P2RPXW",
      },
    },
    {
      data: {
        shelves: {
          edges: [
            {
              node: {
                id: "66cb7bb1-7f73-40fa-8fb1-e2765eebb465-1",
                title: {
                  key: "TopLiveChannelsYouMayLike",
                  fallbackLocalizedTitle: "Recommended live channels",
                  localizedTitleTokens: [
                    {
                      node: {
                        text: "Live channels",
                        hasEmphasis: true,
                        location: "STREAMS_DIRECTORY",
                        __typename: "TextToken",
                      },
                      __typename: "TitleTokenEdge",
                    },
                    {
                      node: {
                        text: " we think you’ll like",
                        hasEmphasis: true,
                        location: "NO_LINK",
                        __typename: "TextToken",
                      },
                      __typename: "TitleTokenEdge",
                    },
                  ],
                  context: null,
                  __typename: "ShelfTitle",
                },
                content: {
                  edges: [
                    {
                      cursor: "",
                      node: {
                        id: "41554785081",
                        broadcaster: {
                          id: "229310380",
                          broadcastSettings: {
                            id: "229310380",
                            title: null,
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "1F69FF",
                          roles: {
                            isPartner: false,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "65632",
                          name: null,
                          viewersCount: 1,
                          displayName: null,
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-188x250.jpg",
                          gameTags: [],
                          originalReleaseDate: "2018-12-13T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [],
                        viewersCount: 1,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:9",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                  ],
                  __typename: "ShelfContentConnection",
                },
                trackingInfo: {
                  rowName: "TopLiveChannelsYouMayLike",
                  reasonType: "",
                  reasonTarget: null,
                  reasonTargetType: null,
                  __typename: "TrackingInfo",
                },
                __typename: "Shelf",
              },
              cursor:
                "Jv+BAwEBBmN1cnNvcgH/ggABAQEMU2VlblNlY3Rpb25zAf+EAAAAFv+DAgEBCFtdc3RyaW5nAf+EAAEMAAB6/4IBAyY2NmNiN2JiMS03ZjczLTQwZmEtOGZiMS1lMjc2NWVlYmI0NjUtMSZhMjY1MmU1OS03NjlhLTQxNzctODViMi1mMWVjM2U0NGMwN2ItMSZiYTEwNzJhMC0wMzFiLTQ3NGMtOWJkNS1kN2UxZWViOWZiZmItMQA=",
              __typename: "ShelfEdge",
            },
            {
              node: {
                id: "a2652e59-769a-4177-85b2-f1ec3e44c07b-1",
                title: {
                  key: "RecommendedBecauseYouWatchX",
                  fallbackLocalizedTitle: "Recommended live channels",
                  localizedTitleTokens: [
                    {
                      node: {
                        text: "Recommended ",
                        hasEmphasis: false,
                        location: "NO_LINK",
                        __typename: "TextToken",
                      },
                      __typename: "TitleTokenEdge",
                    },
                    {
                      node: {
                        id: "33214",
                        name: "Void",
                        displayName: "Void",
                        __typename: "Game",
                      },
                      __typename: "TitleTokenEdge",
                    },
                    {
                      node: {
                        text: " channels",
                        hasEmphasis: false,
                        location: "NO_LINK",
                        __typename: "TextToken",
                      },
                      __typename: "TitleTokenEdge",
                    },
                  ],
                  context: null,
                  __typename: "ShelfTitle",
                },
                content: {
                  edges: [
                    {
                      cursor: "",
                      node: {
                        id: "39708068885",
                        broadcaster: {
                          id: "443858557",
                          broadcastSettings: {
                            id: "443858557",
                            title: null,
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "FFF868",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 1,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [],
                        viewersCount: 1,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "7fed3f78-e414-4138-85e9-9e12702f1321:13",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                  ],
                  __typename: "ShelfContentConnection",
                },
                trackingInfo: {
                  rowName: "RecommendedBecauseYouWatchX",
                  reasonType: "",
                  reasonTarget: null,
                  reasonTargetType: null,
                  __typename: "TrackingInfo",
                },
                __typename: "Shelf",
              },
              cursor:
                "Jv+BAwEBBmN1cnNvcgH/ggABAQEMU2VlblNlY3Rpb25zAf+EAAAAFv+DAgEBCFtdc3RyaW5nAf+EAAEMAAB6/4IBAyY2NmNiN2JiMS03ZjczLTQwZmEtOGZiMS1lMjc2NWVlYmI0NjUtMSZhMjY1MmU1OS03NjlhLTQxNzctODViMi1mMWVjM2U0NGMwN2ItMSZiYTEwNzJhMC0wMzFiLTQ3NGMtOWJkNS1kN2UxZWViOWZiZmItMQA=",
              __typename: "ShelfEdge",
            },
            {
              node: {
                id: "ba1072a0-031b-474c-9bd5-d7e1eeb9fbfb-1",
                title: {
                  key: "TopGamesForYou",
                  fallbackLocalizedTitle: "Recommended categories",
                  localizedTitleTokens: [
                    {
                      node: {
                        text: "Categories",
                        hasEmphasis: true,
                        location: "CATEGORIES_DIRECTORY",
                        __typename: "TextToken",
                      },
                      __typename: "TitleTokenEdge",
                    },
                    {
                      node: {
                        text: " we think you’ll like",
                        hasEmphasis: false,
                        location: "NO_LINK",
                        __typename: "TextToken",
                      },
                      __typename: "TitleTokenEdge",
                    },
                  ],
                  context: null,
                  __typename: "ShelfTitle",
                },
                content: {
                  edges: [
                    {
                      cursor: "",
                      node: {
                        id: "33214",
                        name: "Void",
                        viewersCount: 1,
                        displayName: "Void",
                        boxArtURL: null,
                        gameTags: [],
                        originalReleaseDate: "2017-07-25T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:0",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                  ],
                  __typename: "ShelfContentConnection",
                },
                trackingInfo: {
                  rowName: "TopGamesForYou",
                  reasonType: "",
                  reasonTarget: null,
                  reasonTargetType: null,
                  __typename: "TrackingInfo",
                },
                __typename: "Shelf",
              },
              cursor:
                "Jv+BAwEBBmN1cnNvcgH/ggABAQEMU2VlblNlY3Rpb25zAf+EAAAAFv+DAgEBCFtdc3RyaW5nAf+EAAEMAAB6/4IBAyY2NmNiN2JiMS03ZjczLTQwZmEtOGZiMS1lMjc2NWVlYmI0NjUtMSZhMjY1MmU1OS03NjlhLTQxNzctODViMi1mMWVjM2U0NGMwN2ItMSZiYTEwNzJhMC0wMzFiLTQ3NGMtOWJkNS1kN2UxZWViOWZiZmItMQA=",
              __typename: "ShelfEdge",
            },
          ],
          pageInfo: {
            hasNextPage: true,
            __typename: "PageInfo",
          },
          verboseResults: null,
          __typename: "ShelfConnection",
        },
      },
      extensions: {
        durationMilliseconds: 166,
        operationName: "Shelves",
        requestID: "01H3WBNGPDSNGWG9N9R6P2RPXW",
      },
    },
  ]);
});

export = app;
