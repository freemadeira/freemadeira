# Infrastructure

The sites are on Vercel. Everything else runs on the Hetzner VPS (Germany), through Coolify, next to freehub and the team relay.

| Service | What it does |
| --- | --- |
| Team relay (Haven) | Already running for freehub. Holds every post, event and role, so it's the one to back up. |
| sqld | The libSQL server: SQLite over HTTPS. The sites read from it, and the indexer writes to it. |
| Indexer | `services/indexer`. Turns relay events into rows and asks Vercel to revalidate pages. |

## Local development

```bash
docker compose -f infra/compose.yaml up -d
```

sqld then answers on http://127.0.0.1:8080 without auth, and keeps its data in `infra/data/`, which git ignores.

## Production (planned)

- **sqld.** Use the image `ghcr.io/tursodatabase/libsql-server`, pinned to a release.
  - Put `/var/lib/sqld` on a persistent volume.
  - Give it a domain with HTTPS through Coolify's proxy.
  - Set `SQLD_AUTH_JWT_KEY` to the Ed25519 public key that signs tokens. The sites get read-only tokens; the indexer gets a read-write one.
- **Indexer.** Gets its own Nostr key, whitelisted on the relay, plus a read-write sqld token and Vercel's ISR bypass token.
- **Backups.**
  - The relay's database is the critical backup.
  - sqld can be rebuilt by replaying the relay. Snapshots to object storage only shorten that rebuild.
