import { createClient } from "@sanity/client";

// SHOULD BE INSIDE ENV
const sanityClient = createClient({
  //   projectId: "y6mhilkz",
  projectId: process.env.SANITY_CLIENT,
  dataset: "production",
});

const { projectId, dataset } = sanityClient.config();

export const config = {
  projectId,
  dataset,
};

export default sanityClient;
