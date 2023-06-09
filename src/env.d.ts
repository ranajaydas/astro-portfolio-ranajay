/// <reference types="@astrojs/image/client" />
console.log("VERCEL_ANALYTICS_ID", process.env.VERCEL_ANALYTICS_ID);
console.log("VERCEL_ANALYTICS_ID", import.meta.env.VERCEL_ANALYTICS_ID);
console.log(
  "PUBLIC_VERCEL_ANALYTICS_ID",
  process.env.PUBLIC_VERCEL_ANALYTICS_ID
);
console.log(
  "PUBLIC_VERCEL_ANALYTICS_ID",
  import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID
);
