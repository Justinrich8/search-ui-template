import { SandboxEndpoints } from "@yext/search-headless-react"; //Include this important if you're using a sandbox environment

export const config = {
  apiKey: "c1e993cb286cd238fcf4f43f57e686ff", //API Key for Experience with quotes
  experienceKey: "us_presidents_demo",
  locale: "en",
  experienceVersion: "STAGING", //Include either STAGING or PRODUCTION depending on the config label
  endpoints: SandboxEndpoints, //Include for any Sandbox account
  businessId: 3155537, // Business ID for Experience without quotes
};


