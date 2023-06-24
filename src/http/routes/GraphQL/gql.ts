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
          privacyLawName: "NOW",
          shouldShowNotification: false,
          shouldShowSettingsPage: false,
          vendorStatus: [
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
          ],
          vendorConsentStatus: {
            __typename: "ROWVendorConsent",
          },
          gdprUserPreferences: null,
          __typename: "Consent",
        },
      },
      extensions: {
        durationMilliseconds: 45,
        operationName: "Consent",
        requestID: "01H3PEGVA99VQAZA3Z12VM278F",
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
        durationMilliseconds: 42,
        operationName: "Ads_Components_AdManager_User",
        requestID: "01H3PEGVA99VQAZA3Z12VM278F",
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
        durationMilliseconds: 42,
        operationName: "Prime_PrimeOffers_CurrentUser",
        requestID: "01H3PEGVA99VQAZA3Z12VM278F",
      },
    },
    {
      data: {
        currentUser: {
          id: user.id,
          availability: null,
          profileImageURL: null,
          settings: {
            isSharingActivity: true,
            visibility: "ONLINE",
            __typename: "UserSettings",
          },
          __typename: "User",
        },
      },
      extensions: {
        durationMilliseconds: 50,
        operationName: "UserMenuCurrentUser",
        requestID: "01H3PEGVA99VQAZA3Z12VM278F",
      },
    },
    {
      operationName: "Login_FacebookAndEmail",
      variables: {},
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash:
            "714331e927153449bbbd299fd7656153e6947530d81998ea85ba5fb003e06ebe",
        },
      },
    },
  ]);
});

export = app;
