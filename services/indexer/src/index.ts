import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 3000);

// For now the indexer only answers Coolify's health check. It will subscribe
// to the team relay, check each author's role on the site, write the read model
// to libSQL and ask Vercel to revalidate the pages that changed.
createServer((_request, response) => {
  response.end("ok");
}).listen(port);
