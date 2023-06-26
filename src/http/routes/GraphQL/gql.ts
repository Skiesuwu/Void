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
        consent: {
          id: user.id,
          isDeniedUnderage: false,
          privacyLawName: "ROW",
          shouldShowNotification: false,
          shouldShowSettingsPage: false,
          vendorStatus: [
            {
              name: "BRANCH",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: true,
              __typename: "VendorConsentStatus",
            },
            {
              name: "COMSCORE",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: true,
              __typename: "VendorConsentStatus",
            },
            {
              name: "GOOGLE",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: true,
              __typename: "VendorConsentStatus",
            },
            {
              name: "NIELSEN",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: true,
              __typename: "VendorConsentStatus",
            },
            {
              name: "TWITCH_AMAZON",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: true,
              __typename: "VendorConsentStatus",
            },
            {
              name: "GOOGLE_ANALYTICS_DEVELOPER_EXTENSIONS",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: true,
              __typename: "VendorConsentStatus",
            },
            {
              name: "SALESFORCE_DMP",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: true,
              __typename: "VendorConsentStatus",
            },
            {
              name: "AMAZON",
              consentStatus: "GIVEN",
              hasUserSetConsent: false,
              isVisible: false,
              __typename: "VendorConsentStatus",
            },
          ],
          vendorConsentStatus: {
            __typename: "ROWVendorConsent",
          },
          gdprUserPreferences: null,
          __typename: "Consent",
        },
      },
      extensions: {
        durationMilliseconds: 39,
        operationName: "Consent",
        requestID: "01H3WBNE64K3S4TKT9AVM29EQE",
      },
    },
    {
      data: {
        currentUser: {
          id: user.id,
          hasTurbo: true,
          __typename: "User",
        },
      },
      extensions: {
        durationMilliseconds: 49,
        operationName: "Ads_Components_AdManager_User",
        requestID: "01H3WBNE64K3S4TKT9AVM29EQE",
      },
    },
    {
      data: {
        currentUser: {
          id: user.id,
          hasPrime: true,
          __typename: "User",
        },
        requestInfo: {
          countryCode: "US",
          __typename: "RequestInfo",
        },
      },
      extensions: {
        durationMilliseconds: 49,
        operationName: "Prime_PrimeOffers_CurrentUser",
        requestID: "01H3WBNE64K3S4TKT9AVM29EQE",
      },
    },
    {
      data: {
        currentUser: {
          id: user.id,
          availability: null,
          profileImageURL:
            "https://cdn.discordapp.com/avatars/839403357546217483/fbe82e6c4a3b3b45715896adc2e7f343.png?size=4096",
          settings: {
            isSharingActivity: true,
            visibility: "ONLINE",
            __typename: "UserSettings",
          },
          __typename: "User",
        },
      },
      extensions: {
        durationMilliseconds: 44,
        operationName: "UserMenuCurrentUser",
        requestID: "01H3WBNE64K3S4TKT9AVM29EQE",
      },
    },
    {
      data: {
        currentUser: {
          id: user.id,
          createdAt: new Date().toISOString(),
          hasPresto: false,
          hasPrime: true,
          hasTurbo: true,
          __typename: "User",
        },
        requestInfo: {
          countryCode: "US",
          __typename: "RequestInfo",
        },
      },
      extensions: {
        durationMilliseconds: 49,
        operationName: "TopNav_CurrentUser",
        requestID: "01H3WBNE64K3S4TKT9AVM29EQE",
      },
    },
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
                trackingID: req.body.trackingID,
                promotionsCampaignID: "",
                user: {
                  id: user.id,
                  login: req.body.login,
                  displayName: user.username,
                  profileImageURL:
                    "https://cdn.discordapp.com/avatars/839403357546217483/fbe82e6c4a3b3b45715896adc2e7f343.png?size=4096",
                  primaryColorHex: "FF0000",
                  broadcastSettings: {
                    id: user.id,
                    title: "Very Cool",
                    __typename: "BroadcastSettings",
                  },
                  __typename: "User",
                },
                label: "NONE",
                content: {
                  id: user.id,
                  previewImageURL:
                    "https://cdn.discordapp.com/avatars/839403357546217483/fbe82e6c4a3b3b45715896adc2e7f343.png?size=4096",
                  broadcaster: {
                    id: user.id,
                    broadcastSettings: {
                      id: user.id,
                      title: "Very Cool",
                      __typename: "BroadcastSettings",
                    },
                    __typename: "User",
                  },
                  viewersCount: 69420,
                  game: {
                    id: "69420",
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
        durationMilliseconds: 111,
        operationName: "PersonalSections",
        requestID: "01H3WBNE64K3S4TKT9AVM29EQE",
      },
    },
    {
      data: {
        currentUser: {
          id: user.id,
          createdAt: new Date().toISOString(),
          followedGames: {
            nodes: [],
            __typename: "FollowedGameConnection",
          },
          roles: {
            isPartner: true,
            isStaff: true,
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
                id: req.body.id,
                title: {
                  key: "TopLiveChannelsYouMayLike",
                  fallbackLocalizedTitle: "Let me cook",
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
              },
            },
          ],
        },
      },
    },
    {
      data: {
        currentUser: {
          id: user.id,
          dropCurrentSession: null,
          __typename: "User",
        },
      },
      extensions: {
        durationMilliseconds: 30,
        operationName: "DropCurrentSessionContext",
        requestID: "01H3WBNE64K3S4TKT9AVM29EQE",
      },
    },
  ]);
});

export = app;
