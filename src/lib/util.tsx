// export const CurrentUrl = process.env.VERCEL_URL || "http://127.0.0.1:3000";
// export const CurrentUrl = process.env.VERCEL_URL;
export const CurrentUrl =
  process.env.ENVIRONMENT === "development"
    ? "http://127.0.0.1:3000"
    : process.env.URL_PROD;
