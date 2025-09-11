import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '689bb9e511867b53a8228532d30d84a614969f2b', queries,  });
export default client;
  