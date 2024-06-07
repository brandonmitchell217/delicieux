// export const CurrentUrl = process.env.VERCEL_URL || "http://127.0.0.1:3000";
// export const CurrentUrl = process.env.VERCEL_URL;
export const CurrentUrl =
  process.env.ENVIRONMENT === "development"
    ? "http://127.0.0.1:3000"
    : process.env.URL_PROD;

export const handleBgImage = (bgImage?: string) => {
  if (!bgImage) {
    return "bg-landingMobile sm:bg-landing";
  }
  switch (bgImage) {
    case "landing":
      return "bg-landingMobile sm:bg-landing";
    case "staff":
      return "bg-staffLandingMobile sm:bg-staffLanding md:h-[50vh]";
  }
};
