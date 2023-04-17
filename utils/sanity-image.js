import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "jdrs31k5",
  dataset: "production",
  apiVersion: "2023-04-17",
  useCdn: false,
});

const imageBuilder = ImageUrlBuilder(client);
const urlFor = (source) => imageBuilder.image(source);

export default urlFor;
