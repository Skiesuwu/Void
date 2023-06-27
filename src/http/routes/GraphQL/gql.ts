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
                trackingID: "2722954c-e341-42e9-9980-00522a1be66e",
                promotionsCampaignID: "",
                user: {
                  id: "44424631",
                  login: "Void",
                  displayName: "Void",
                  primaryColorHex: "FF0000",
                  broadcastSettings: {
                    id: "44424631",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "48732579149",
                  previewImageURL:
                    "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                  broadcaster: {
                    id: "44424631",
                    broadcastSettings: {
                      id: "44424631",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 100000000000000000000,
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
              {
                trackingID: "330caa7a-2b18-4c61-ab2e-52acd3d6a700",
                promotionsCampaignID: "",
                user: {
                  id: "494543675",
                  login: "Void",
                  displayName: "Void",
                  primaryColorHex: "5C16C5",
                  broadcastSettings: {
                    id: "494543675",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "48726837661",
                  broadcaster: {
                    id: "494543675",
                    broadcastSettings: {
                      id: "494543675",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 100000000000000000000,
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
              {
                trackingID: "aa0140d2-ffaf-496b-9910-766406cb4322",
                promotionsCampaignID: "",
                user: {
                  id: "277945156",
                  login: "Void",
                  displayName: "Void",
                  primaryColorHex: "AF1982",
                  broadcastSettings: {
                    id: "277945156",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "48733589741",
                  broadcaster: {
                    id: "277945156",
                    broadcastSettings: {
                      id: "277945156",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 1023,
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
              {
                trackingID: "5cfddd04-5194-4473-ba24-e7d727eb42af",
                promotionsCampaignID: "",
                user: {
                  id: "154526718",
                  login: "Void",
                  displayName: "Void",
                  primaryColorHex: "1F69FF",
                  broadcastSettings: {
                    id: "154526718",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  __typename: "VideoConnection",
                },
                __typename: "PersonalSectionChannel",
              },
              {
                trackingID: "f5ba3f55-1b28-4b3a-ade6-d642f3644900",
                promotionsCampaignID: "",
                user: {
                  id: "436157659",
                  login: "Void",
                  displayName: "Void",
                  primaryColorHex: "FFBF00",
                  broadcastSettings: {
                    id: "436157659",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  __typename: "VideoConnection",
                },
                __typename: "PersonalSectionChannel",
              },
              {
                trackingID: "79de0759-c541-4dc8-90b4-86b26bf1b240",
                promotionsCampaignID: "",
                user: {
                  id: "195714976",
                  login: "Void",
                  displayName: "Void",
                  primaryColorHex: "EF00DD",
                  broadcastSettings: {
                    id: "195714976",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  __typename: "VideoConnection",
                },
                __typename: "PersonalSectionChannel",
              },
            ],
          },
          {
            type: "RECOMMENDED_SECTION",
            title: {
              localizedFallback:
                "One, Two, Buckle My Shoe. Three, Four, Buckle Some More. Five, Six, Nike kickss",
              localizedTokens: [
                {
                  value:
                    "One, Two, Buckle My Shoe. Three, Four, Buckle Some More. Five, Six, Nike kicks",
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
                  primaryColorHex: null,
                  broadcastSettings: {
                    id: "198182340",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "40847220824",
                  previewImageURL:
                    "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                  broadcaster: {
                    id: "198182340",
                    broadcastSettings: {
                      id: "198182340",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 2312,
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
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:2",
                promotionsCampaignID: "",
                user: {
                  id: "444891289",
                  login: "Void",
                  displayName: "Void",
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/d89d376f-86c1-4868-a44e-823fc9d709da-profile_image-70x70.png",
                  primaryColorHex: "EB0D0D",
                  broadcastSettings: {
                    id: "444891289",
                    title: null,
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "40846839464",
                  previewImageURL:
                    "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                  broadcaster: {
                    id: "444891289",
                    broadcastSettings: {
                      id: "444891289",
                      title: null,
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 29,
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
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:3",
                promotionsCampaignID: "",
                user: {
                  id: "66262103",
                  login: "Void",
                  displayName: "Void",
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/862f85a6-3611-4e85-95c1-3afed47fc05b-profile_image-70x70.png",
                  primaryColorHex: "FF6666",
                  broadcastSettings: {
                    id: "66262103",
                    title: null,
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "48733426877",
                  previewImageURL:
                    "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                  broadcaster: {
                    id: "66262103",
                    broadcastSettings: {
                      id: "66262103",
                      title: null,
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 10000000000000000,
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
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:4",
                promotionsCampaignID: "",
                user: {
                  id: "427370018",
                  login: "Void",
                  displayName: "Void",
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/7709093f-ddb4-473f-8bb3-b8685ec33467-profile_image-70x70.png",
                  primaryColorHex: "FF0000",
                  broadcastSettings: {
                    id: "427370018",
                    title:
                      "DUO RANKED WITH CC WINNER | !token !Tier1 !twitter !newvid  | 2AM Void",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "48733559197",
                  previewImageURL:
                    "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                  broadcaster: {
                    id: "427370018",
                    broadcastSettings: {
                      id: "427370018",
                      title:
                        "DUO RANKED WITH CC WINNER | !token !Tier1 !twitter !newvid  | 2AM Void",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 10000000000000000,
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
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:5",
                promotionsCampaignID: "",
                user: {
                  id: "229310380",
                  login: "Void",
                  displayName: "Void",
                  profileImageURL: null,
                  primaryColorHex: "1F69FF",
                  broadcastSettings: {
                    id: "229310380",
                    title: null,
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "41554785081",
                  previewImageURL: null,
                  broadcaster: {
                    id: "229310380",
                    broadcastSettings: {
                      id: "229310380",
                      title: null,
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 10000000000000000,
                  game: {
                    id: "65632",
                    displayName: "DayZ",
                    name: "DayZ",
                    __typename: "Game",
                  },
                  type: "live",
                  __typename: "Stream",
                },
                __typename: "PersonalSectionChannel",
              },
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:6",
                promotionsCampaignID: "",
                user: {
                  id: "466368262",
                  login: "Voidc",
                  displayName: "Voidc",
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/e9d5b4ef-3a43-455f-b5f7-30153f5988f5-profile_image-70x70.png",
                  primaryColorHex: "00FAFA",
                  broadcastSettings: {
                    id: "466368262",
                    title: null,
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "42385546331",
                  previewImageURL:
                    "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                  broadcaster: {
                    id: "466368262",
                    broadcastSettings: {
                      id: "466368262",
                      title: null,
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 10000000000000000,
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
              {
                trackingID: "05e5b331-fc9f-4f38-888f-3f7cde50f6f9:9",
                promotionsCampaignID: "",
                user: {
                  id: "103268673",
                  login: "Void",
                  displayName: "Void",
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/cd921fcd-53fc-4b1d-be23-0787bc36b756-profile_image-70x70.png",
                  primaryColorHex: "D05B2E",
                  broadcastSettings: {
                    id: "103268673",
                    title:
                      "Hikaru's Chess Decathlon By Misfits Gaming #sponsored by !tezos !rog",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: "41554895193",
                  previewImageURL:
                    "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                  broadcaster: {
                    id: "103268673",
                    broadcastSettings: {
                      id: "103268673",
                      title:
                        "Hikaru's Chess Decathlon By Misfits Gaming #sponsored by !tezos !rog",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 10000000000000000,
                  game: {
                    id: "743",
                    displayName: "Chess",
                    name: "Chess",
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
                        text: "One, Two, Buckle My Shoe. Three, Four, Buckle Some More. Five, Six, Nike kicks",
                        hasEmphasis: true,
                        location: "STREAMS_DIRECTORY",
                        __typename: "TextToken",
                      },
                      __typename: "TitleTokenEdge",
                    },
                    {
                      node: {
                        text: null,
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
                        id: "40847220824",
                        broadcaster: {
                          id: "198182340",
                          broadcastSettings: {
                            id: "198182340",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: null,
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 10000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:198182340:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 10000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:0",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48726837661",
                        broadcaster: {
                          id: "494543675",
                          broadcastSettings: {
                            id: "494543675",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "5C16C5",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 10000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:494543675:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 10000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:1",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "41554910857",
                        broadcaster: {
                          id: "15564828",
                          broadcastSettings: {
                            id: "15564828",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: null,
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 10000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:15564828:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 10000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:2",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48732579149",
                        broadcaster: {
                          id: "44424631",
                          broadcastSettings: {
                            id: "44424631",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "FF0000",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 10000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:44424631:0",
                            name: "Canadian",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:1",
                            name: "Positivity",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:2",
                            name: "BattleRoyale",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:3",
                            name: "PC",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:4",
                            name: "FamilyFriendly",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:5",
                            name: "Multiplayer",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:6",
                            name: "PVP",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:7",
                            name: "PlayingWithViewers",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:8",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:44424631:9",
                            name: "FirstPlaythough",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:3",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48733426877",
                        broadcaster: {
                          id: "66262103",
                          broadcastSettings: {
                            id: "66262103",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "FF6666",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:66262103:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:4",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48733589741",
                        broadcaster: {
                          id: "277945156",
                          broadcastSettings: {
                            id: "277945156",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "AF1982",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:277945156:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:5",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48733300477",
                        broadcaster: {
                          id: "32140000",
                          broadcastSettings: {
                            id: "32140000",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "EE2737",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:32140000:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:6",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "40846839464",
                        broadcaster: {
                          id: "444891289",
                          broadcastSettings: {
                            id: "444891289",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "EB0D0D",
                          roles: {
                            isPartner: false,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:444891289:0",
                            name: "Woman",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:1",
                            name: "love",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:2",
                            name: "loud",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:3",
                            name: "Soundwarning",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:4",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:7",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48733568861",
                        broadcaster: {
                          id: "487559928",
                          broadcastSettings: {
                            id: "487559928",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "00F0F0",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:487559928:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:487559928:1",
                            name: "2xbrando",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:487559928:2",
                            name: "Void",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "bbf06d8f-33cc-43b5-824c-f8268c65331f:8",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "41554785081",
                        broadcaster: {
                          id: "229310380",
                          broadcastSettings: {
                            id: "229310380",
                            title: "Welcome to Void.",
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
                          name: "DayZ",
                          viewersCount: 100000000000000000000,
                          displayName: "DayZ",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-188x250.jpg",
                          gameTags: [
                            {
                              id: "a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3",
                              isLanguageTag: false,
                              localizedName: "FPS",
                              tagName: "FPS",
                              __typename: "Tag",
                            },
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "22e434b6-ca88-46e8-91ef-c18ee1cb8a67",
                              isLanguageTag: false,
                              localizedName: "Simulation",
                              tagName: "Simulation",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2018-12-13T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:229310380:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
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
                        text: "Bro Cookin ",
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
                        text: " wow",
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
                        id: "48733426877",
                        broadcaster: {
                          id: "66262103",
                          broadcastSettings: {
                            id: "66262103",
                            title: null,
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "FF6666",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:66262103:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "7fed3f78-e414-4138-85e9-9e12702f1321:4",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48733589741",
                        broadcaster: {
                          id: "277945156",
                          broadcastSettings: {
                            id: "277945156",
                            title:
                              "hiiiiii! Not much going on this week but we vibe!! | !socials",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/ced31775-5eb0-458a-b3c2-bd94b3587ec1-profile_image-50x50.png",
                          largeProfileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/ced31775-5eb0-458a-b3c2-bd94b3587ec1-profile_image-300x300.png",
                          primaryColorHex: "AF1982",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:277945156:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "7fed3f78-e414-4138-85e9-9e12702f1321:5",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "40846839464",
                        broadcaster: {
                          id: "444891289",
                          broadcastSettings: {
                            id: "444891289",
                            title: null,
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "EB0D0D",
                          roles: {
                            isPartner: false,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:444891289:0",
                            name: "Woman",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:1",
                            name: "love",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:2",
                            name: "loud",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:3",
                            name: "Soundwarning",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:444891289:4",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "7fed3f78-e414-4138-85e9-9e12702f1321:6",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48733300477",
                        broadcaster: {
                          id: "32140000",
                          broadcastSettings: {
                            id: "32140000",
                            title: "Welcome to Void.",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "Void",
                          login: "Void",
                          profileImageURL: null,
                          largeProfileImageURL: null,
                          primaryColorHex: "EE2737",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:32140000:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "7fed3f78-e414-4138-85e9-9e12702f1321:7",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "48733568861",
                        broadcaster: {
                          id: "487559928",
                          broadcastSettings: {
                            id: "487559928",
                            title:
                              "BRANDO GOES INTO RANKED AFTER NOT GETTINGS QUEUES FOR DAYS AND DOMINATES✅|GOING FOR PARTNER PLUS 67/350 | ✅| !twitter !yt |",
                            __typename: "BroadcastSettings",
                          },
                          displayName: "2xBrando",
                          login: "2xbrando",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/bc672f89-4477-4c67-afa3-2e7d431f2b0c-profile_image-50x50.png",
                          largeProfileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/bc672f89-4477-4c67-afa3-2e7d431f2b0c-profile_image-300x300.png",
                          primaryColorHex: "00F0F0",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        game: {
                          id: "33214",
                          name: "Void",
                          viewersCount: 1000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:487559928:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:487559928:1",
                            name: "2xbrando",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:487559928:2",
                            name: "Void",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 1000000000000000000000000,
                        previewImageURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        createdAt: new Date().toISOString(),
                        type: "live",
                        __typename: "Stream",
                      },
                      trackingID: "7fed3f78-e414-4138-85e9-9e12702f1321:8",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
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
                          viewersCount: 100000000000000000000,
                          displayName: "Void",
                          boxArtURL:
                            "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                          gameTags: [
                            {
                              id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                              isLanguageTag: false,
                              localizedName: "Shooter",
                              tagName: "Shooter",
                              __typename: "Tag",
                            },
                            {
                              id: "9d38085e-ee62-4203-877b-81797052a18b",
                              isLanguageTag: false,
                              localizedName: "RPG",
                              tagName: "RPG",
                              __typename: "Tag",
                            },
                            {
                              id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                              isLanguageTag: false,
                              localizedName: "Strategy",
                              tagName: "Strategy",
                              __typename: "Tag",
                            },
                            {
                              id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                              isLanguageTag: false,
                              localizedName: "Adventure Game",
                              tagName: "Adventure Game",
                              __typename: "Tag",
                            },
                            {
                              id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                              isLanguageTag: false,
                              localizedName: "Action",
                              tagName: "Action",
                              __typename: "Tag",
                            },
                          ],
                          originalReleaseDate: "2017-07-25T00:00:00Z",
                          __typename: "Game",
                        },
                        freeformTags: [
                          {
                            id: "fft:CHANNEL:443858557:0",
                            name: "English",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:443858557:1",
                            name: "Void",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:443858557:2",
                            name: "Balding",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:443858557:3",
                            name: "Variety",
                            __typename: "FreeformTag",
                          },
                          {
                            id: "fft:CHANNEL:443858557:4",
                            name: "Void",
                            __typename: "FreeformTag",
                          },
                        ],
                        viewersCount: 100000000000000000000,
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
                        viewersCount: 100000000000000000000,
                        displayName: "Void",
                        boxArtURL:
                          "https://cdn.discordapp.com/attachments/1078276289611440218/1123298900560842882/531513_1.jpg",
                        gameTags: [
                          {
                            id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                            isLanguageTag: false,
                            localizedName: "Shooter",
                            tagName: "Shooter",
                            __typename: "Tag",
                          },
                          {
                            id: "9d38085e-ee62-4203-877b-81797052a18b",
                            isLanguageTag: false,
                            localizedName: "RPG",
                            tagName: "RPG",
                            __typename: "Tag",
                          },
                          {
                            id: "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                            isLanguageTag: false,
                            localizedName: "Strategy",
                            tagName: "Strategy",
                            __typename: "Tag",
                          },
                          {
                            id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                            isLanguageTag: false,
                            localizedName: "Adventure Game",
                            tagName: "Adventure Game",
                            __typename: "Tag",
                          },
                          {
                            id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                            isLanguageTag: false,
                            localizedName: "Action",
                            tagName: "Action",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2017-07-25T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:0",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "509658",
                        name: "Just Chatting",
                        viewersCount: 100000000000000000000,
                        displayName: "Just Chatting",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg",
                        gameTags: [
                          {
                            id: "2610cff9-10ae-4cb3-8500-778e6722fbb5",
                            isLanguageTag: false,
                            localizedName: "IRL",
                            tagName: "IRL",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: null,
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:1",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "245018539",
                        name: "Only Up!",
                        viewersCount: 100000000000000000000,
                        displayName: "Only Up!",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/245018539_IGDB-188x250.jpg",
                        gameTags: [
                          {
                            id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                            isLanguageTag: false,
                            localizedName: "Adventure Game",
                            tagName: "Adventure Game",
                            __typename: "Tag",
                          },
                          {
                            id: "d72d9de6-1df8-4c4e-b6a2-74e6f4c80557",
                            isLanguageTag: false,
                            localizedName: "Indie Game",
                            tagName: "Indie Game",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2023-05-24T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:2",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "32982",
                        name: "Grand Theft Auto V",
                        viewersCount: 100000000000000000000,
                        displayName: "Grand Theft Auto V",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg",
                        gameTags: [
                          {
                            id: "a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3",
                            isLanguageTag: false,
                            localizedName: "FPS",
                            tagName: "FPS",
                            __typename: "Tag",
                          },
                          {
                            id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                            isLanguageTag: false,
                            localizedName: "Shooter",
                            tagName: "Shooter",
                            __typename: "Tag",
                          },
                          {
                            id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                            isLanguageTag: false,
                            localizedName: "Adventure Game",
                            tagName: "Adventure Game",
                            __typename: "Tag",
                          },
                          {
                            id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                            isLanguageTag: false,
                            localizedName: "Action",
                            tagName: "Action",
                            __typename: "Tag",
                          },
                          {
                            id: "a682f560-5186-4871-b97a-8d8e3f4308e9",
                            isLanguageTag: false,
                            localizedName: "Open World",
                            tagName: "Open World",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2013-09-17T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:3",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "516575",
                        name: "VALORANT",
                        viewersCount: 100000000000000000000,
                        displayName: "VALORANT",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
                        gameTags: [
                          {
                            id: "a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3",
                            isLanguageTag: false,
                            localizedName: "FPS",
                            tagName: "FPS",
                            __typename: "Tag",
                          },
                          {
                            id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                            isLanguageTag: false,
                            localizedName: "Shooter",
                            tagName: "Shooter",
                            __typename: "Tag",
                          },
                          {
                            id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                            isLanguageTag: false,
                            localizedName: "Action",
                            tagName: "Action",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2020-06-02T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:4",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "32399",
                        name: "Counter-Strike: Global Offensive",
                        viewersCount: 100000000000000000000,
                        displayName: "Counter-Strike: Global Offensive",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
                        gameTags: [
                          {
                            id: "a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3",
                            isLanguageTag: false,
                            localizedName: "FPS",
                            tagName: "FPS",
                            __typename: "Tag",
                          },
                          {
                            id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                            isLanguageTag: false,
                            localizedName: "Shooter",
                            tagName: "Shooter",
                            __typename: "Tag",
                          },
                          {
                            id: "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                            isLanguageTag: false,
                            localizedName: "Action",
                            tagName: "Action",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2012-08-21T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:5",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "780302568",
                        name: "XDefiant",
                        viewersCount: 100000000000000000000,
                        displayName: "XDefiant",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/780302568-188x250.jpg",
                        gameTags: [
                          {
                            id: "a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3",
                            isLanguageTag: false,
                            localizedName: "FPS",
                            tagName: "FPS",
                            __typename: "Tag",
                          },
                          {
                            id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                            isLanguageTag: false,
                            localizedName: "Shooter",
                            tagName: "Shooter",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2023-09-30T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:6",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "27471",
                        name: "Minecraft",
                        viewersCount: 100000000000000000000,
                        displayName: "Minecraft",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
                        gameTags: [
                          {
                            id: "22e434b6-ca88-46e8-91ef-c18ee1cb8a67",
                            isLanguageTag: false,
                            localizedName: "Simulation",
                            tagName: "Simulation",
                            __typename: "Tag",
                          },
                          {
                            id: "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                            isLanguageTag: false,
                            localizedName: "Adventure Game",
                            tagName: "Adventure Game",
                            __typename: "Tag",
                          },
                          {
                            id: "643fe658-c4fc-45f0-9aed-cbe54a7c1d10",
                            isLanguageTag: false,
                            localizedName: "MMO",
                            tagName: "MMO",
                            __typename: "Tag",
                          },
                          {
                            id: "ae7d0652-8b2e-476b-8b51-a076550b234f",
                            isLanguageTag: false,
                            localizedName: "Survival",
                            tagName: "Survival",
                            __typename: "Tag",
                          },
                          {
                            id: "a682f560-5186-4871-b97a-8d8e3f4308e9",
                            isLanguageTag: false,
                            localizedName: "Open World",
                            tagName: "Open World",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2011-11-18T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:7",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "1745202732",
                        name: "FIFA 23",
                        viewersCount: 100000000000000000000,
                        displayName: "FIFA 23",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-188x250.jpg",
                        gameTags: [
                          {
                            id: "22e434b6-ca88-46e8-91ef-c18ee1cb8a67",
                            isLanguageTag: false,
                            localizedName: "Simulation",
                            tagName: "Simulation",
                            __typename: "Tag",
                          },
                          {
                            id: "0d4233af-7ac6-49da-937d-e0f42b7db187",
                            isLanguageTag: false,
                            localizedName: "Sports Game",
                            tagName: "Sports Game",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2022-09-29T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:8",
                      promotionsCampaignID: "",
                      sourceType: "RECOMMENDED",
                      __typename: "ShelfContentEdge",
                    },
                    {
                      cursor: "",
                      node: {
                        id: "512710",
                        name: "Call of Duty: Warzone",
                        viewersCount: 100000000000000000000,
                        displayName: "Call of Duty: Warzone",
                        boxArtURL:
                          "https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg",
                        gameTags: [
                          {
                            id: "a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3",
                            isLanguageTag: false,
                            localizedName: "FPS",
                            tagName: "FPS",
                            __typename: "Tag",
                          },
                          {
                            id: "523fe736-fa95-44c7-b22f-13008ca2172c",
                            isLanguageTag: false,
                            localizedName: "Shooter",
                            tagName: "Shooter",
                            __typename: "Tag",
                          },
                        ],
                        originalReleaseDate: "2020-03-10T00:00:00Z",
                        __typename: "Game",
                      },
                      trackingID: "1c512cf8-9e06-4ae4-8ef0-9f67f83c92a0:9",
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
