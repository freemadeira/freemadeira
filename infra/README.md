# Infrastructure

The sites are on Vercel. Everything else runs on the Hetzner VPS (Germany), through Coolify, next to freehub and the team relay.

| Service | What it does |
| --- | --- |
| Team relay | [Psycarlo/haven](https://github.com/Psycarlo/haven), already running for freehub at `wss://relay.freemadeira.org/private`. Holds every post, event and role, so it's the one to back up. |
| sqld | The libSQL server: SQLite over HTTPS. The sites read from it, and the indexer writes to it. |
| Indexer | `services/indexer`. Turns relay events into rows and asks Vercel to revalidate pages. |

## Local development

```bash
docker compose -f infra/compose.yaml up -d
```

sqld then answers on http://127.0.0.1:8080 without auth, and keeps its data in `infra/data/`, which git ignores. To run the indexer against it, see `services/indexer/README.md`.

## Production

### sqld

1. In Coolify, add a Docker image resource: `ghcr.io/tursodatabase/libsql-server:v0.24.32`, the same version `compose.yaml` runs.
2. Set `SQLD_NODE=primary`, and put `/var/lib/sqld` on a persistent volume.
3. Give it the domain `https://db.freemadeira.org`, port 8080, so Coolify's proxy gets the certificate. At Namecheap, point an `A` record for `db` at `2.28.100.229`.
4. Make a key pair on your own machine with `pnpm --filter @freemadeira/db tokens keys`.
   - Set `SQLD_AUTH_JWT_KEY` in Coolify to the public key it prints.
   - Keep the private key (`SQLD_PRIVATE_KEY`) in the team's password manager, not on any server: it signs every token.
5. Mint the two tokens with that key:
   - `tokens ro` gives a read-only token for the sites on Vercel (`LIBSQL_AUTH_TOKEN`).
   - `tokens rw` gives a read-write token for the indexer.
   - Tokens don't expire. To revoke them, give sqld a new key pair and mint new ones.

### Indexer

1. In Coolify, add an application from this repository with the Dockerfile build pack.
   - Base directory: `/`, and Dockerfile `services/indexer/Dockerfile`. It builds from the repository root.
   - Port 3000 for the health check, and no domain: nothing calls the indexer.
2. Make its Nostr key with `pnpm --filter @freemadeira/indexer key`.
   - Put its npub on the relay's whitelist. The relay picks up the change without a restart.
3. Set its environment, as listed in `services/indexer/.env.example`:
   - `RELAY_URL=wss://relay.freemadeira.org/private` and `INDEXER_KEY`.
   - `LIBSQL_URL=https://db.freemadeira.org` and the read-write `LIBSQL_AUTH_TOKEN`.
   - `SITES`, the site → freehub project mapping.
   - `REVALIDATE_TOKEN`, the same value as the site's `ISR_BYPASS_TOKEN` on Vercel.
4. Deploy. It applies the database migrations, reads the relay and writes the posts, then watches the relay for changes. Its log says what it wrote and which pages it revalidated.
5. To rebuild the database from the relay, run `node src/index.ts rebuild` once in the container.

### Backups

- The relay's database is the critical backup. It goes to S3 every hour.
- sqld can be rebuilt by replaying the relay. Snapshots to object storage only shorten that rebuild.
