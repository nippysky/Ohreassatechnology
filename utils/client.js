import { createClient } from "next-sanity";

const client = createClient({
  projectId: "jdrs31k5",
  dataset: "production",
  apiVersion: "2023-04-17",
  useCdn: false,
});

export default client;
