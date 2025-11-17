import { init } from "@instantdb/react";
import schema from "../instant.schema";

export const db = init({
  // biome-ignore lint/style/noNonNullAssertion: it's okay :D
  appId: process.env.PUBLIC_INSTANT_APP_ID!,
  schema,
  useDateObjects: true,
});
