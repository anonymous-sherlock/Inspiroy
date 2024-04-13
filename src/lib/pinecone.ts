import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

// pinecone.createIndex({
//   name: "starter-index",
//   dimension: 1536,
//   metric: "cosine",
//   spec: {
//     pod: {
//       environment: "gcp-starter",
//       podType: "starter",
//     },
//   },
// });
